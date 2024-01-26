import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Artifact {
		contentLength?: number | null;
		contentType?: string | null;
		height?: number | null;
		label?: string | null;
		url?: string | null;
		width?: number | null;
	}
	export interface ArtifactFormProperties {
		contentLength: FormControl<number | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		label: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			contentLength: new FormControl<number | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ArtifactFormat {
		contentType?: string | null;
		fileExtension?: string | null;
		forContentType?: string | null;
		label?: string | null;
		preserveAspectRatio?: boolean | null;
		public?: boolean | null;
		upscaleAllowed?: boolean | null;
	}
	export interface ArtifactFormatFormProperties {
		contentType: FormControl<string | null | undefined>,
		fileExtension: FormControl<string | null | undefined>,
		forContentType: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		preserveAspectRatio: FormControl<boolean | null | undefined>,
		public: FormControl<boolean | null | undefined>,
		upscaleAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateArtifactFormatFormGroup() {
		return new FormGroup<ArtifactFormatFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			fileExtension: new FormControl<string | null | undefined>(undefined),
			forContentType: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			preserveAspectRatio: new FormControl<boolean | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			upscaleAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ArtifactFormats {
		contribution?: Array<ArtifactFormat>;
		cover?: Array<ArtifactFormat>;
		profileImage?: Array<ArtifactFormat>;
	}
	export interface ArtifactFormatsFormProperties {
	}
	export function CreateArtifactFormatsFormGroup() {
		return new FormGroup<ArtifactFormatsFormProperties>({
		});

	}

	export interface Assignment {
		allowsAnonymousContributions?: boolean | null;

		/** An optional call to action specific to this assignment. ie. Submit your snow pictures. */
		callToAction?: string | null;
		cover?: MediaUsage;
		created?: Date | null;
		description?: string | null;
		embargo?: Date | null;
		ends?: Date | null;
		featured?: boolean | null;
		id?: string | null;
		mediaRequired?: boolean | null;

		/** Optional credential id of the moderator who owns this particular assignment. */
		moderator?: string | null;
		name?: string | null;

		/** Helper value. Is this assignment currently open? Based on the value of the ends field. */
		open?: boolean | null;

		/** An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames. */
		receiptMessage?: string | null;
		starts?: Date | null;
		tags?: Array<Tag>;
		urlWords?: string | null;
		webUrl?: string | null;
	}
	export interface AssignmentFormProperties {
		allowsAnonymousContributions: FormControl<boolean | null | undefined>,

		/** An optional call to action specific to this assignment. ie. Submit your snow pictures. */
		callToAction: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		embargo: FormControl<Date | null | undefined>,
		ends: FormControl<Date | null | undefined>,
		featured: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		mediaRequired: FormControl<boolean | null | undefined>,

		/** Optional credential id of the moderator who owns this particular assignment. */
		moderator: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Helper value. Is this assignment currently open? Based on the value of the ends field. */
		open: FormControl<boolean | null | undefined>,

		/** An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames. */
		receiptMessage: FormControl<string | null | undefined>,
		starts: FormControl<Date | null | undefined>,
		urlWords: FormControl<string | null | undefined>,
		webUrl: FormControl<string | null | undefined>,
	}
	export function CreateAssignmentFormGroup() {
		return new FormGroup<AssignmentFormProperties>({
			allowsAnonymousContributions: new FormControl<boolean | null | undefined>(undefined),
			callToAction: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			embargo: new FormControl<Date | null | undefined>(undefined),
			ends: new FormControl<Date | null | undefined>(undefined),
			featured: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mediaRequired: new FormControl<boolean | null | undefined>(undefined),
			moderator: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			open: new FormControl<boolean | null | undefined>(undefined),
			receiptMessage: new FormControl<string | null | undefined>(undefined),
			starts: new FormControl<Date | null | undefined>(undefined),
			urlWords: new FormControl<string | null | undefined>(undefined),
			webUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MediaUsage {
		artifacts?: Array<Artifact>;
		id?: string | null;
		media?: Media;
	}
	export interface MediaUsageFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateMediaUsageFormGroup() {
		return new FormGroup<MediaUsageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Media {
		duration?: number | null;
		id?: string | null;
		place?: Place;
		type?: string | null;
	}
	export interface MediaFormProperties {
		duration: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Place {
		country?: string | null;
		geohash?: string | null;
		google?: string | null;
		latLong?: LatLong;
		name?: string | null;
		osm?: OsmId;
	}
	export interface PlaceFormProperties {
		country: FormControl<string | null | undefined>,
		geohash: FormControl<string | null | undefined>,
		google: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			geohash: new FormControl<string | null | undefined>(undefined),
			google: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LatLong {
		latitude?: number | null;
		longitude?: number | null;
	}
	export interface LatLongFormProperties {
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLongFormGroup() {
		return new FormGroup<LatLongFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OsmId {
		osmId?: number | null;
		osmType?: string | null;
	}
	export interface OsmIdFormProperties {
		osmId: FormControl<number | null | undefined>,
		osmType: FormControl<string | null | undefined>,
	}
	export function CreateOsmIdFormGroup() {
		return new FormGroup<OsmIdFormProperties>({
			osmId: new FormControl<number | null | undefined>(undefined),
			osmType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag {

		/** Optional HTML hexcode colour */
		colour?: string | null;

		/** Required */
		id: string;

		/** Required */
		name: string;
		tagSet?: TagSet;
		urlWords?: string | null;
	}
	export interface TagFormProperties {

		/** Optional HTML hexcode colour */
		colour: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		urlWords: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			colour: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urlWords: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagSet {

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface TagSetFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTagSetFormGroup() {
		return new FormGroup<TagSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssignmentSubmission {
		allowsAnonymousContributions?: boolean | null;
		cover?: MediaUsage;
		description?: string | null;
		embargo?: Date | null;
		ends?: Date | null;
		featured?: boolean | null;
		id?: string | null;
		mediaRequired?: boolean | null;

		/** Optional credential id of the login which will moderator this assignment. */
		moderator?: string | null;

		/** Required */
		name: string;

		/** An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames. */
		receiptMessage?: string | null;
		starts?: Date | null;
		tags?: Array<Tag>;
		urlWords?: string | null;
	}
	export interface AssignmentSubmissionFormProperties {
		allowsAnonymousContributions: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		embargo: FormControl<Date | null | undefined>,
		ends: FormControl<Date | null | undefined>,
		featured: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		mediaRequired: FormControl<boolean | null | undefined>,

		/** Optional credential id of the login which will moderator this assignment. */
		moderator: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames. */
		receiptMessage: FormControl<string | null | undefined>,
		starts: FormControl<Date | null | undefined>,
		urlWords: FormControl<string | null | undefined>,
	}
	export function CreateAssignmentSubmissionFormGroup() {
		return new FormGroup<AssignmentSubmissionFormProperties>({
			allowsAnonymousContributions: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			embargo: new FormControl<Date | null | undefined>(undefined),
			ends: new FormControl<Date | null | undefined>(undefined),
			featured: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mediaRequired: new FormControl<boolean | null | undefined>(undefined),
			moderator: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiptMessage: new FormControl<string | null | undefined>(undefined),
			starts: new FormControl<Date | null | undefined>(undefined),
			urlWords: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Authority {
		client?: Client;
		id?: string | null;
		user?: User;
	}
	export interface AuthorityFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateAuthorityFormGroup() {
		return new FormGroup<AuthorityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Client {
		id?: string | null;
		name?: string | null;
	}
	export interface ClientFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateClientFormGroup() {
		return new FormGroup<ClientFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {
		bio?: string | null;
		displayName?: string | null;
		id?: string | null;
		registered?: Date | null;
		username?: string | null;
	}
	export interface UserFormProperties {
		bio: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		registered: FormControl<Date | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			bio: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			registered: new FormControl<Date | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangeLogItem {

		/** Required */
		date: Date;
		description?: string | null;

		/** Required */
		title: string;
	}
	export interface ChangeLogItemFormProperties {

		/** Required */
		date: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateChangeLogItemFormGroup() {
		return new FormGroup<ChangeLogItemFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Contribution {
		assignment?: Assignment;

		/** The public attribution for this contribution. This will be the display name of the registered user or the contributor's first and last name if they provided them while making a non authenticated contribution. A blank attribution field indicates and anonymous contribution. */
		attribution?: string | null;
		body?: string | null;
		created?: Date | null;
		headline?: string | null;
		id?: string | null;
		mediaUsages?: Array<MediaUsage>;
		moderationHistory?: Array<ModerationHistoryItem>;
		place?: Place;
		urlWords?: string | null;
		via?: Via;
	}
	export interface ContributionFormProperties {

		/** The public attribution for this contribution. This will be the display name of the registered user or the contributor's first and last name if they provided them while making a non authenticated contribution. A blank attribution field indicates and anonymous contribution. */
		attribution: FormControl<string | null | undefined>,
		body: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		headline: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		urlWords: FormControl<string | null | undefined>,
	}
	export function CreateContributionFormGroup() {
		return new FormGroup<ContributionFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			urlWords: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModerationHistoryItem {
		action?: ModerationAction;

		/** Required */
		date: Date;
		notes?: string | null;
	}
	export interface ModerationHistoryItemFormProperties {

		/** Required */
		date: FormControl<Date | null | undefined>,
		notes: FormControl<string | null | undefined>,
	}
	export function CreateModerationHistoryItemFormGroup() {
		return new FormGroup<ModerationHistoryItemFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModerationAction {

		/** Required */
		id: string;

		/** Required */
		label: string;

		/** Required */
		resultingState: ModerationState;
	}
	export interface ModerationActionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		label: FormControl<string | null | undefined>,
	}
	export function CreateModerationActionFormGroup() {
		return new FormGroup<ModerationActionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModerationState {

		/** Required */
		id: string;

		/** Required */
		label: string;

		/** Required */
		public: boolean;
	}
	export interface ModerationStateFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		label: FormControl<string | null | undefined>,

		/** Required */
		public: FormControl<boolean | null | undefined>,
	}
	export function CreateModerationStateFormGroup() {
		return new FormGroup<ModerationStateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Via {
		authority?: Authority;
		ipAddress?: string | null;
		ipAddressPlace?: Place;
	}
	export interface ViaFormProperties {
		ipAddress: FormControl<string | null | undefined>,
	}
	export function CreateViaFormGroup() {
		return new FormGroup<ViaFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Credential {
		scopes?: Array<string>;
		type?: string | null;
		user?: string | null;
		value?: string | null;
	}
	export interface CredentialFormProperties {
		type: FormControl<string | null | undefined>,
		user: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCredentialFormGroup() {
		return new FormGroup<CredentialFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorField {
		message?: string | null;

		/** Required */
		name: string;
	}
	export interface ErrorFieldFormProperties {
		message: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldFormGroup() {
		return new FormGroup<ErrorFieldFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorResponse {
		fields?: Array<ErrorField>;
		message?: string | null;
	}
	export interface ErrorResponseFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventType {

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface EventTypeFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEventTypeFormGroup() {
		return new FormGroup<EventTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Export {
		downloadUrl?: string | null;
		finished?: Date | null;

		/** Required */
		id: string;

		/** Required */
		owner: string;
		progress?: number | null;

		/** Required */
		started: Date;
		step?: string | null;
	}
	export interface ExportFormProperties {
		downloadUrl: FormControl<string | null | undefined>,
		finished: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,
		progress: FormControl<number | null | undefined>,

		/** Required */
		started: FormControl<Date | null | undefined>,
		step: FormControl<string | null | undefined>,
	}
	export function CreateExportFormGroup() {
		return new FormGroup<ExportFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			finished: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			progress: new FormControl<number | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			step: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportSummary {

		/**
		 * The number of contributions selected for export.
		 * Required
		 */
		contributions: number;

		/** Human readable estimate of the export size. ie. '10MB'. */
		estimatedSize?: string | null;

		/**
		 * The number of media files included in this export.
		 * Required
		 */
		media: number;

		/**
		 * The expected total size of the media files to be exported.
		 * Required
		 */
		totalMediaSize: number;
	}
	export interface ExportSummaryFormProperties {

		/**
		 * The number of contributions selected for export.
		 * Required
		 */
		contributions: FormControl<number | null | undefined>,

		/** Human readable estimate of the export size. ie. '10MB'. */
		estimatedSize: FormControl<string | null | undefined>,

		/**
		 * The number of media files included in this export.
		 * Required
		 */
		media: FormControl<number | null | undefined>,

		/**
		 * The expected total size of the media files to be exported.
		 * Required
		 */
		totalMediaSize: FormControl<number | null | undefined>,
	}
	export function CreateExportSummaryFormGroup() {
		return new FormGroup<ExportSummaryFormProperties>({
			contributions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			estimatedSize: new FormControl<string | null | undefined>(undefined),
			media: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalMediaSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Flag {
		date?: Date | null;
		email?: string | null;
		id?: string | null;
		notes?: string | null;
		type?: string | null;
	}
	export interface FlagFormProperties {
		date: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateFlagFormGroup() {
		return new FormGroup<FlagFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Form {
		callToAction?: string | null;
		cssUrl?: string | null;
		fields?: Array<FormField>;
		heading?: string | null;
		id?: string | null;
		name?: string | null;
		noCss?: boolean | null;
		ownedBy?: string | null;
		tags?: Array<Tag>;
	}
	export interface FormFormProperties {
		callToAction: FormControl<string | null | undefined>,
		cssUrl: FormControl<string | null | undefined>,
		heading: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		noCss: FormControl<boolean | null | undefined>,
		ownedBy: FormControl<string | null | undefined>,
	}
	export function CreateFormFormGroup() {
		return new FormGroup<FormFormProperties>({
			callToAction: new FormControl<string | null | undefined>(undefined),
			cssUrl: new FormControl<string | null | undefined>(undefined),
			heading: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			noCss: new FormControl<boolean | null | undefined>(undefined),
			ownedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormField {
		description?: string | null;
		label?: string | null;
		name?: string | null;
		options?: Array<string>;
		public?: boolean | null;
		required?: boolean | null;
		type?: string | null;
	}
	export interface FormFieldFormProperties {
		description: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		public: FormControl<boolean | null | undefined>,
		required: FormControl<boolean | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateFormFieldFormGroup() {
		return new FormGroup<FormFieldFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormResponse {
		contribution?: string | null;
		date?: Date | null;
		form?: string | null;
		id?: string | null;
		responses?: {[id: string]: string };
		user?: string | null;
	}
	export interface FormResponseFormProperties {
		contribution: FormControl<string | null | undefined>,
		date: FormControl<Date | null | undefined>,
		form: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		responses: FormControl<{[id: string]: string } | null | undefined>,
		user: FormControl<string | null | undefined>,
	}
	export function CreateFormResponseFormGroup() {
		return new FormGroup<FormResponseFormProperties>({
			contribution: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			form: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			responses: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormResponseSubmission {
		contribution?: string | null;
		form?: string | null;
		responses?: {[id: string]: string };
	}
	export interface FormResponseSubmissionFormProperties {
		contribution: FormControl<string | null | undefined>,
		form: FormControl<string | null | undefined>,
		responses: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateFormResponseSubmissionFormGroup() {
		return new FormGroup<FormResponseSubmissionFormProperties>({
			contribution: new FormControl<string | null | undefined>(undefined),
			form: new FormControl<string | null | undefined>(undefined),
			responses: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface FormSubmission {
		callToAction?: string | null;
		cssUrl?: string | null;
		fields?: Array<FormField>;
		heading?: string | null;
		name?: string | null;
		noCss?: boolean | null;
		tags?: Array<Tag>;
	}
	export interface FormSubmissionFormProperties {
		callToAction: FormControl<string | null | undefined>,
		cssUrl: FormControl<string | null | undefined>,
		heading: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		noCss: FormControl<boolean | null | undefined>,
	}
	export function CreateFormSubmissionFormGroup() {
		return new FormGroup<FormSubmissionFormProperties>({
			callToAction: new FormControl<string | null | undefined>(undefined),
			cssUrl: new FormControl<string | null | undefined>(undefined),
			heading: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			noCss: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Group {
		id?: string | null;
		name?: string | null;
	}
	export interface GroupFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedProfile {
		bio?: string | null;
		email?: string | null;
		id?: string | null;
		name?: string | null;
		picture?: string | null;
		profile?: string | null;
		registered?: Date | null;
	}
	export interface LinkedProfileFormProperties {
		bio: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		picture: FormControl<string | null | undefined>,
		profile: FormControl<string | null | undefined>,
		registered: FormControl<Date | null | undefined>,
	}
	export function CreateLinkedProfileFormGroup() {
		return new FormGroup<LinkedProfileFormProperties>({
			bio: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			registered: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ModerationHistoryItemSubmission {
		action?: ModerationAction;
		notes?: string | null;
	}
	export interface ModerationHistoryItemSubmissionFormProperties {
		notes: FormControl<string | null | undefined>,
	}
	export function CreateModerationHistoryItemSubmissionFormGroup() {
		return new FormGroup<ModerationHistoryItemSubmissionFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotificationPreview {
		email?: string | null;
		html?: string | null;
		subject?: string | null;
	}
	export interface NotificationPreviewFormProperties {
		email: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,
		subject: FormControl<string | null | undefined>,
	}
	export function CreateNotificationPreviewFormGroup() {
		return new FormGroup<NotificationPreviewFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscription {
		assignment?: string | null;
		email?: string | null;

		/** Required */
		id: string;

		/** Required */
		includeBody: boolean;
		includeThumbenail?: boolean | null;
		slackChannel?: string | null;

		/** Required */
		token: string;

		/** Required */
		types: Array<string>;

		/** Required */
		user: string;
	}
	export interface SubscriptionFormProperties {
		assignment: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		includeBody: FormControl<boolean | null | undefined>,
		includeThumbenail: FormControl<boolean | null | undefined>,
		slackChannel: FormControl<string | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		user: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			assignment: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			includeBody: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			includeThumbenail: new FormControl<boolean | null | undefined>(undefined),
			slackChannel: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscriptionSubmission {
		assignment?: string | null;
		email?: string | null;

		/** Required */
		includeBody: boolean;
		includeThumbenail?: boolean | null;
		slackChannel?: string | null;

		/** Required */
		types: Array<string>;
	}
	export interface SubscriptionSubmissionFormProperties {
		assignment: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Required */
		includeBody: FormControl<boolean | null | undefined>,
		includeThumbenail: FormControl<boolean | null | undefined>,
		slackChannel: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionSubmissionFormGroup() {
		return new FormGroup<SubscriptionSubmissionFormProperties>({
			assignment: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			includeBody: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			includeThumbenail: new FormControl<boolean | null | undefined>(undefined),
			slackChannel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionType {

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface SubscriptionTypeFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionTypeFormGroup() {
		return new FormGroup<SubscriptionTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagSetSubmission {

		/** Required */
		name: string;

		/** Required */
		urlWords: string;
	}
	export interface TagSetSubmissionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		urlWords: FormControl<string | null | undefined>,
	}
	export function CreateTagSetSubmissionFormGroup() {
		return new FormGroup<TagSetSubmissionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urlWords: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagSubmission {
		colour?: string | null;

		/** Required */
		name: string;
		tagSet?: TagSet;
		urlWords?: string | null;
	}
	export interface TagSubmissionFormProperties {
		colour: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		urlWords: FormControl<string | null | undefined>,
	}
	export function CreateTagSubmissionFormGroup() {
		return new FormGroup<TagSubmissionFormProperties>({
			colour: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urlWords: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Artifact formats
		 * List the available artifact formats
		 * Get artifact-formats
		 * @return {ArtifactFormats} A list of artifact formats
		 */
		Artifact_formatsGet(headersHandler?: () => HttpHeaders): Observable<ArtifactFormats> {
			return this.http.get<ArtifactFormats>(this.baseUri + 'artifact-formats', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List assignments
		 * Get assignments
		 * @param {string} ownedBy Restrict results to assignments owned by this user.
		 * @param {number} page Pagination page
		 * @param {number} pageSize Pagination page size
		 * @param {string} q Restrict results to assignments whose name or description matches this keyword.
		 * @param {string} urlWords Select an assignment by urlWords.
		 * @param {boolean} open Select open or closed assignments
		 * @param {boolean} alwaysOpen Select assignments with no closing date.
		 * @param {string} tag Restrict results to assignments which are tagged with this tag.
		 * @param {string} name Restrict results to the assignment (or potentially assignments) with this exact name
		 * @return {Array<Assignment>} A list of assignments
		 */
		AssignmentsGetByOwnedByAndPageAndPageSizeAndQAndUrlWordsAndOpenAndAlwaysOpenAndTagAndName(ownedBy: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, q: string | null | undefined, urlWords: string | null | undefined, open: boolean | null | undefined, alwaysOpen: boolean | null | undefined, tag: string | null | undefined, name: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Assignment>> {
			return this.http.get<Array<Assignment>>(this.baseUri + 'assignments?ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)) + '&page=' + page + '&pageSize=' + pageSize + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&urlWords=' + (urlWords == null ? '' : encodeURIComponent(urlWords)) + '&open=' + open + '&alwaysOpen=' + alwaysOpen + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new assignment
		 * Post assignments
		 * @param {AssignmentSubmission} requestBody Assignment object to be created
		 * @return {Assignment} Assignment created
		 */
		AssignmentsPost(requestBody: AssignmentSubmission, headersHandler?: () => HttpHeaders): Observable<Assignment> {
			return this.http.post<Assignment>(this.baseUri + 'assignments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete this assignment and all of it's contributions
		 * Delete assignments/{id}
		 * @param {string} id Id of the assignment to return
		 * @return {void} Assignment deleted
		 */
		Assignments_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'assignments/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single assigment by id
		 * Get assignments/{id}
		 * @param {string} id Id of the assignment to return
		 * @return {Assignment} Assignment found
		 */
		Assignments_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Assignment> {
			return this.http.get<Assignment>(this.baseUri + 'assignments/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Recent changes
		 * The Contribly change log.
		 * Get change-log
		 * @return {Array<ChangeLogItem>} A list of change log items
		 */
		Change_logGet(headersHandler?: () => HttpHeaders): Observable<Array<ChangeLogItem>> {
			return this.http.get<Array<ChangeLogItem>>(this.baseUri + 'change-log', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List valid contribution refinement types
		 * Get contribution-refinement-types
		 * @return {Array<string>} An array of refinement types. These are the possible values of the get contribution refinements parameter.
		 */
		Contribution_refinement_typesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'contribution-refinement-types', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List contribution refinement options
		 * Given a contribution list query determine the available filter options. Can be used to generate the UI to refinement a filter.
		 * Get contribution-refinements
		 * @param {string} assignment Restrict results to contributions submitted to this assignment.
		 * @param {string} country Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).
		 * @param {Date} createdBefore Limit results to contributions created before this date time.
		 * @param {Date} createdAfter Limit results to contributions created after this date time.
		 * @param {string} geohash Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)
		 * @param {boolean} hasLocation Restrict results to contributions which have a publicly visible location.
		 * @param {string} latLong Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius
		 * @param {number} radius When limiting result by location with the latLong parameter, specify the radius in kilometers.
		 * @param {string} mediaType Restrict results to contributions which include a media file of the given type (ie. image / video)
		 * @param {string} ownedBy Restrict results to contributions which are fall under the jurisdiction by this user.
		 * @param {string} q Restrict results to contributions whose headline text matches this keyword.
		 * @param {string} urlWords Locate a specific contribution by URL words
		 * @param {string} user Restrict results to contributions by this user identified by id.
		 * @param {string} refinements Comma seperated list of refinement names.
		 * @param {number} refinementSize Number of refinement options to return.
		 * @return {{[id: string]: Array<string> }} A map of refinement names to lists of options
		 */
		Contribution_refinementsGetByAssignmentAndCountryAndCreatedBeforeAndCreatedAfterAndGeohashAndHasLocationAndLatLongAndRadiusAndMediaTypeAndOwnedByAndQAndUrlWordsAndUserAndRefinementsAndRefinementSize(assignment: string | null | undefined, country: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, geohash: string | null | undefined, hasLocation: boolean | null | undefined, latLong: string | null | undefined, radius: number | null | undefined, mediaType: string | null | undefined, ownedBy: string | null | undefined, q: string | null | undefined, urlWords: string | null | undefined, user: string | null | undefined, refinements: string | null | undefined, refinementSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<{[id: string]: Array<string> }> {
			return this.http.get<{[id: string]: Array<string> }>(this.baseUri + 'contribution-refinements?assignment=' + (assignment == null ? '' : encodeURIComponent(assignment)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&geohash=' + (geohash == null ? '' : encodeURIComponent(geohash)) + '&hasLocation=' + hasLocation + '&latLong=' + (latLong == null ? '' : encodeURIComponent(latLong)) + '&radius=' + radius + '&mediaType=' + (mediaType == null ? '' : encodeURIComponent(mediaType)) + '&ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&urlWords=' + (urlWords == null ? '' : encodeURIComponent(urlWords)) + '&user=' + (user == null ? '' : encodeURIComponent(user)) + '&refinements=' + (refinements == null ? '' : encodeURIComponent(refinements)) + '&refinementSize=' + refinementSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List contributions
		 * Retrieve contributions.
		 * Get contributions
		 * @param {string} assignment Restrict results to contributions submitted to this assignment.
		 * @param {string} country Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).
		 * @param {Date} createdBefore Limit results to contributions created before this date time.
		 * @param {Date} createdAfter Limit results to contributions created after this date time.
		 * @param {Date} createdDay Limit results to contributions created on this day.
		 * @param {string} createdMonth Limit results to contributions created during this month.
		 * @param {string} geohash Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)
		 * @param {boolean} hasLocation Restrict results to contributions which have a publicly visible location.
		 * @param {string} latLong Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius
		 * @param {number} radius When limiting result by location with the latLong parameter, specify the radius in kilometers.
		 * @param {string} mediaType Restrict results to contributions which include a media file of the given type (ie. image / video)
		 * @param {string} ownedBy Restrict results to contributions which are fall under the jurisdiction by this user.
		 * @param {string} q Restrict results to contributions whose headline text matches this keyword.
		 * @param {string} urlWords Locate a specific contribution by URL words
		 * @param {string} user Restrict results to contributions by this user identified by id.
		 * @param {string} ids Restrict results to a list of specific contributions identified by a comma seperated list of ids.
		 * @param {string} format Select output format. 'json' or 'rss'. Defaults to JSON.
		 * @return {Array<Contribution>} A list of contributions
		 */
		ContributionsGetByAssignmentAndCountryAndCreatedBeforeAndCreatedAfterAndCreatedDayAndCreatedMonthAndGeohashAndHasLocationAndLatLongAndRadiusAndMediaTypeAndOwnedByAndQAndUrlWordsAndUserAndIdsAndFormat(assignment: string | null | undefined, country: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, createdDay: Date | null | undefined, createdMonth: string | null | undefined, geohash: string | null | undefined, hasLocation: boolean | null | undefined, latLong: string | null | undefined, radius: number | null | undefined, mediaType: string | null | undefined, ownedBy: string | null | undefined, q: string | null | undefined, urlWords: string | null | undefined, user: string | null | undefined, ids: string | null | undefined, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Contribution>> {
			return this.http.get<Array<Contribution>>(this.baseUri + 'contributions?assignment=' + (assignment == null ? '' : encodeURIComponent(assignment)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&createdDay=' + createdDay?.toISOString() + '&createdMonth=' + (createdMonth == null ? '' : encodeURIComponent(createdMonth)) + '&geohash=' + (geohash == null ? '' : encodeURIComponent(geohash)) + '&hasLocation=' + hasLocation + '&latLong=' + (latLong == null ? '' : encodeURIComponent(latLong)) + '&radius=' + radius + '&mediaType=' + (mediaType == null ? '' : encodeURIComponent(mediaType)) + '&ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&urlWords=' + (urlWords == null ? '' : encodeURIComponent(urlWords)) + '&user=' + (user == null ? '' : encodeURIComponent(user)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new contribution
		 * Post contributions
		 * @param {Contribution} requestBody Contribution object to be created
		 * @return {Contribution} Contribution created
		 */
		ContributionsPost(requestBody: Contribution, headersHandler?: () => HttpHeaders): Observable<Contribution> {
			return this.http.post<Contribution>(this.baseUri + 'contributions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete this contribution
		 * Delete contributions/{id}
		 * @param {string} id Id of the contribution to delete
		 * @return {Contribution} The deletion request has been accepted and will be processed in the background.
		 */
		Contributions_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<Contribution> {
			return this.http.delete<Contribution>(this.baseUri + 'contributions/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a single contribution by id
		 * Get contributions/{id}
		 * @param {string} id Id of the contribution to return
		 * @return {Contribution} Successful
		 */
		Contributions_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Contribution> {
			return this.http.get<Contribution>(this.baseUri + 'contributions/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Raise a flag against this contribution
		 * Allows end users to bring potential issues with publicly visible content to the attention of moderators.
		 * Post contributions/{id}/flag
		 * @param {string} id Id of the contribution to flag
		 * @param {Flag} requestBody Flag to be created
		 * @return {Flag} Flag created
		 */
		Contributions_idFlagPost(id: string, requestBody: Flag, headersHandler?: () => HttpHeaders): Observable<Flag> {
			return this.http.post<Flag>(this.baseUri + 'contributions/' + (id == null ? '' : encodeURIComponent(id)) + '/flag', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Allows a user to mark a contribution as liked
		 * Post contributions/{id}/like
		 * @param {string} id Id of the contribution
		 * @return {number} The updated like count for this contribution.
		 */
		Contributions_idLikePost(id: string, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.post<number>(this.baseUri + 'contributions/' + (id == null ? '' : encodeURIComponent(id)) + '/like', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List users who have liked this contributions
		 * Returns a list of user ids of users who have liked this conribution
		 * Get contributions/{id}/likes
		 * @param {string} id Id of the contribution
		 * @return {Array<string>} A list of user ids.
		 */
		Contributions_idLikesGet(id: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'contributions/' + (id == null ? '' : encodeURIComponent(id)) + '/likes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Perform a moderation action on this contribution
		 * Allows the contribution to approved of rejected.
		 * Post contributions/{id}/moderate
		 * @param {string} id Id of the contribution to moderate
		 * @param {ModerationHistoryItemSubmission} requestBody A moderation action
		 * @return {string} The moderation action was successfully applied
		 */
		Contributions_idModeratePost(id: string, requestBody: ModerationHistoryItemSubmission, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'contributions/' + (id == null ? '' : encodeURIComponent(id)) + '/moderate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * List the credentials associated with the authenticated user.
		 * Get credentials
		 * @return {Array<Credential>} A list of credentials associated with this user.
		 */
		CredentialsGet(headersHandler?: () => HttpHeaders): Observable<Array<Credential>> {
			return this.http.get<Array<Credential>>(this.baseUri + 'credentials', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Event types
		 * List available notification event types
		 * Get event-types
		 * @return {Array<EventType>} A list of event types
		 */
		Event_typesGet(headersHandler?: () => HttpHeaders): Observable<Array<EventType>> {
			return this.http.get<Array<EventType>>(this.baseUri + 'event-types', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Export contributions.
		 * Begin an export job. Returns a export job which can be polled to follow the progress of an export.
		 * Post export
		 * @param {string} assignment Restrict results to contributions submitted to this assignment.
		 * @param {string} country Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).
		 * @param {Date} createdBefore Limit results to contributions created before this date time.
		 * @param {Date} createdAfter Limit results to contributions created after this date time.
		 * @param {string} geohash Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)
		 * @param {boolean} hasLocation Restrict results to contributions which have a publicly visible location.
		 * @param {string} latLong Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius
		 * @param {number} radius When limiting result by location with the latLong parameter, specify the radius in kilometers.
		 * @param {string} mediaType Restrict results to contributions which include a media file of the given type (ie. image / video)
		 * @param {string} ownedBy Restrict results to contributions which are fall under the jurisdiction by this user.
		 * @param {string} q Restrict results to contributions whose headline text matches this keyword.
		 * @param {string} urlWords Locate a specific contribution by URL words
		 * @param {string} user Restrict results to contributions by this user identified by id.
		 * @param {boolean} tagged Should exported media files be tagged with metadata. Deprecated; use format instead.
		 * @param {boolean} combined Included a combined file with all contribution text.
		 * @param {boolean} individual Include individual text files for each contribution.
		 * @param {string} format Media format to export; none, fullsize, tagged or original.
		 * @param {boolean} json Include raw JSON for each contribution.
		 * @return {void} 
		 */
		ExportPostByAssignmentAndCountryAndCreatedBeforeAndCreatedAfterAndGeohashAndHasLocationAndLatLongAndRadiusAndMediaTypeAndOwnedByAndQAndUrlWordsAndUserAndTaggedAndCombinedAndIndividualAndFormatAndJson(assignment: string | null | undefined, country: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, geohash: string | null | undefined, hasLocation: boolean | null | undefined, latLong: string | null | undefined, radius: number | null | undefined, mediaType: string | null | undefined, ownedBy: string | null | undefined, q: string | null | undefined, urlWords: string | null | undefined, user: string | null | undefined, tagged: boolean | null | undefined, combined: boolean | null | undefined, individual: boolean | null | undefined, format: string | null | undefined, json: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'export?assignment=' + (assignment == null ? '' : encodeURIComponent(assignment)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&geohash=' + (geohash == null ? '' : encodeURIComponent(geohash)) + '&hasLocation=' + hasLocation + '&latLong=' + (latLong == null ? '' : encodeURIComponent(latLong)) + '&radius=' + radius + '&mediaType=' + (mediaType == null ? '' : encodeURIComponent(mediaType)) + '&ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&urlWords=' + (urlWords == null ? '' : encodeURIComponent(urlWords)) + '&user=' + (user == null ? '' : encodeURIComponent(user)) + '&tagged=' + tagged + '&combined=' + combined + '&individual=' + individual + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&json=' + json, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Export contributions preflight summary.
		 * Provide a preflight summary of an export request.
		 * Post export-summary
		 * @param {string} assignment Restrict results to contributions submitted to this assignment.
		 * @param {string} country Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).
		 * @param {Date} createdBefore Limit results to contributions created before this date time.
		 * @param {Date} createdAfter Limit results to contributions created after this date time.
		 * @param {string} geohash Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)
		 * @param {boolean} hasLocation Restrict results to contributions which have a publicly visible location.
		 * @param {string} latLong Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius
		 * @param {number} radius When limiting result by location with the latLong parameter, specify the radius in kilometers.
		 * @param {string} mediaType Restrict results to contributions which include a media file of the given type (ie. image / video)
		 * @param {string} ownedBy Restrict results to contributions which are fall under the jurisdiction by this user.
		 * @param {string} q Restrict results to contributions whose headline text matches this keyword.
		 * @param {string} urlWords Locate a specific contribution by URL words
		 * @param {string} user Restrict results to contributions by this user identified by id.
		 * @return {ExportSummary} A summary of the number of contributions, media files and approximate total size of media files.
		 */
		Export_summaryPostByAssignmentAndCountryAndCreatedBeforeAndCreatedAfterAndGeohashAndHasLocationAndLatLongAndRadiusAndMediaTypeAndOwnedByAndQAndUrlWordsAndUser(assignment: string | null | undefined, country: string | null | undefined, createdBefore: Date | null | undefined, createdAfter: Date | null | undefined, geohash: string | null | undefined, hasLocation: boolean | null | undefined, latLong: string | null | undefined, radius: number | null | undefined, mediaType: string | null | undefined, ownedBy: string | null | undefined, q: string | null | undefined, urlWords: string | null | undefined, user: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ExportSummary> {
			return this.http.post<ExportSummary>(this.baseUri + 'export-summary?assignment=' + (assignment == null ? '' : encodeURIComponent(assignment)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&createdBefore=' + createdBefore?.toISOString() + '&createdAfter=' + createdAfter?.toISOString() + '&geohash=' + (geohash == null ? '' : encodeURIComponent(geohash)) + '&hasLocation=' + hasLocation + '&latLong=' + (latLong == null ? '' : encodeURIComponent(latLong)) + '&radius=' + radius + '&mediaType=' + (mediaType == null ? '' : encodeURIComponent(mediaType)) + '&ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&urlWords=' + (urlWords == null ? '' : encodeURIComponent(urlWords)) + '&user=' + (user == null ? '' : encodeURIComponent(user)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a single export job; poll to follow export progress.
		 * Get exports/{id}
		 * @param {string} id Id of the export job to return
		 * @return {Export} Successful
		 */
		Exports_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Export> {
			return this.http.get<Export>(this.baseUri + 'exports/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List form responses
		 * Get form-responses
		 * @param {string} user Restrict results to responses submitted by this user.
		 * @param {string} form Restrict results to responses submitted to this form.
		 * @param {string} contribution Restrict results to responses relating to this contribution.
		 * @return {Array<FormResponse>} A list of form responses
		 */
		Form_responsesGetByUserAndFormAndContribution(user: string | null | undefined, form: string | null | undefined, contribution: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<FormResponse>> {
			return this.http.get<Array<FormResponse>>(this.baseUri + 'form-responses?user=' + (user == null ? '' : encodeURIComponent(user)) + '&form=' + (form == null ? '' : encodeURIComponent(form)) + '&contribution=' + (contribution == null ? '' : encodeURIComponent(contribution)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Submit a response to a form
		 * Post form-responses
		 * @param {FormResponseSubmission} requestBody Form response
		 * @return {FormResponse} Form response saved
		 */
		Form_responsesPost(requestBody: FormResponseSubmission, headersHandler?: () => HttpHeaders): Observable<FormResponse> {
			return this.http.post<FormResponse>(this.baseUri + 'form-responses', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get a single form response by id
		 * Get form-responses/{id}
		 * @param {string} id Id of the assignment to return
		 * @return {FormResponse} Form response found
		 */
		Form_responses_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<FormResponse> {
			return this.http.get<FormResponse>(this.baseUri + 'form-responses/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List forms
		 * Get forms
		 * @param {string} ownedBy Restrict results to forms owned by this user.
		 * @return {Array<Form>} A list of forms
		 */
		FormsGetByOwnedBy(ownedBy: string, headersHandler?: () => HttpHeaders): Observable<Array<Form>> {
			return this.http.get<Array<Form>>(this.baseUri + 'forms?ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a form
		 * Post forms
		 * @param {FormSubmission} requestBody Form object to be created
		 * @return {Form} Form created
		 */
		FormsPost(requestBody: FormSubmission, headersHandler?: () => HttpHeaders): Observable<Form> {
			return this.http.post<Form>(this.baseUri + 'forms', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete this form and all of it's responses.
		 * Delete forms/{id}
		 * @param {string} id Id of the form to delete
		 * @return {void} Form deleted
		 */
		Forms_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'forms/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a single form by id
		 * Get forms/{id}
		 * @param {string} id Id of the form to return
		 * @return {Form} Form found
		 */
		Forms_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Form> {
			return this.http.get<Form>(this.baseUri + 'forms/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Submit a new media file
		 * Post media
		 * @param {string} requestBody Binary media file
		 * @return {Media} Media created
		 */
		MediaPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<Media> {
			return this.http.post<Media>(this.baseUri + 'media', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get notifications/contributions/{id}/preview
		 * @param {string} id Id of the contribution to preview a notification for
		 * @param {string} message Type of message to preview.
		 * @return {NotificationPreview} Notification preview
		 */
		NotificationsContributions_idPreviewGetByMessage(id: string, message: string, headersHandler?: () => HttpHeaders): Observable<NotificationPreview> {
			return this.http.get<NotificationPreview>(this.baseUri + 'notifications/contributions/' + (id == null ? '' : encodeURIComponent(id)) + '/preview&message=' + (message == null ? '' : encodeURIComponent(message)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Scopes
		 * List available token scopes
		 * Get scopes
		 * @return {Array<string>} A list of scopes
		 */
		ScopesGet(headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'scopes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Subscription types
		 * List available subscription types
		 * Get subscription-types
		 * @return {Array<SubscriptionType>} A list of subscription event types
		 */
		Subscription_typesGet(headersHandler?: () => HttpHeaders): Observable<Array<SubscriptionType>> {
			return this.http.get<Array<SubscriptionType>>(this.baseUri + 'subscription-types', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List subscriptions for the authorised user.
		 * Get subscriptions
		 * @return {Array<Subscription>} A list of notification subscriptions
		 */
		SubscriptionsGet(headersHandler?: () => HttpHeaders): Observable<Array<Subscription>> {
			return this.http.get<Array<Subscription>>(this.baseUri + 'subscriptions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a subscription.
		 * Delete subscriptions/{id}
		 * @param {string} id Id of the subscription to delete
		 * @return {void} The subscription has been successfully deleted.
		 */
		Subscriptions_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List tags
		 * Retrieve tags.
		 * Get tags
		 * @param {string} ownedBy Restrict results to those owned by this user.
		 * @param {string} tagSet Restrict results to tags belonging to this tag set.
		 * @param {string} urlWords Restrict results by urlWords. Should be used with ownedBy when searching for one of your own tags.
		 * @return {Array<Tag>} A list of tags
		 */
		TagsGetByOwnedByAndTagSetAndUrlWords(ownedBy: string | null | undefined, tagSet: string | null | undefined, urlWords: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Tag>> {
			return this.http.get<Array<Tag>>(this.baseUri + 'tags?ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)) + '&tagSet=' + (tagSet == null ? '' : encodeURIComponent(tagSet)) + '&urlWords=' + (urlWords == null ? '' : encodeURIComponent(urlWords)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new tag
		 * Post tags
		 * @param {TagSubmission} requestBody Tag object to be created
		 * @return {Tag} Tag created
		 */
		TagsPost(requestBody: TagSubmission, headersHandler?: () => HttpHeaders): Observable<Tag> {
			return this.http.post<Tag>(this.baseUri + 'tags', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a single tag by id
		 * Get tags/{id}
		 * @param {string} id Id of the tag to return
		 * @return {Tag} The tag
		 */
		Tags_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'tags/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List tag sets
		 * Retrieve tag sets.
		 * Get tagsets
		 * @param {string} ownedBy Restrict results to those owned by this user.
		 * @param {string} urlWords Restrict results by urlWords. Should be used with ownedBy when searching for one of your own tag sets.
		 * @return {Array<TagSet>} A list of tag sets
		 */
		TagsetsGetByOwnedByAndUrlWords(ownedBy: string | null | undefined, urlWords: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<TagSet>> {
			return this.http.get<Array<TagSet>>(this.baseUri + 'tagsets?ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)) + '&urlWords=' + (urlWords == null ? '' : encodeURIComponent(urlWords)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new tag set
		 * Post tagsets
		 * @param {TagSetSubmission} requestBody Tag set to be created
		 * @return {TagSet} Tagset created
		 */
		TagsetsPost(requestBody: TagSetSubmission, headersHandler?: () => HttpHeaders): Observable<TagSet> {
			return this.http.post<TagSet>(this.baseUri + 'tagsets', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve a single tag set by id
		 * Get tagsets/{id}
		 * @param {string} id Id of the tag set to return
		 * @return {TagSet} The tag set
		 */
		Tagsets_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<TagSet> {
			return this.http.get<TagSet>(this.baseUri + 'tagsets/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List users
		 * Get users
		 * @param {string} assignment Restrict results to the users who have contributed to this assignment.
		 * @param {string} country Restrict results to the users who have submitted a contribution with a public location located within this country.
		 * @param {number} minimumContributions Restrict results to the users who have submitted at least this many contributions.
		 * @param {string} linkedProfile Restrict results to the users who a linked profile of this type.
		 * @param {string} ownedBy Restrict results to the users who are owned by of this owner.
		 * @param {Date} submittedBefore Limit results to users who have submitted at least one contribution before this date time.
		 * @param {Date} submittedAfter Limit results to users who have submitted at least one contribution after this date time.
		 * @param {string} username Restrict results to the user with this username.
		 * @return {Array<User>} A list of users
		 */
		UsersGetByAssignmentAndCountryAndMinimumContributionsAndLinkedProfileAndOwnedByAndSubmittedBeforeAndSubmittedAfterAndUsername(assignment: string | null | undefined, country: string | null | undefined, minimumContributions: number | null | undefined, linkedProfile: string | null | undefined, ownedBy: string | null | undefined, submittedBefore: Date | null | undefined, submittedAfter: Date | null | undefined, username: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<User>> {
			return this.http.get<Array<User>>(this.baseUri + 'users?assignment=' + (assignment == null ? '' : encodeURIComponent(assignment)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&minimumContributions=' + minimumContributions + '&linkedProfile=' + (linkedProfile == null ? '' : encodeURIComponent(linkedProfile)) + '&ownedBy=' + (ownedBy == null ? '' : encodeURIComponent(ownedBy)) + '&submittedBefore=' + submittedBefore?.toISOString() + '&submittedAfter=' + submittedAfter?.toISOString() + '&username=' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a single user by id
		 * Get users/{id}
		 * @param {string} id Id of the user to return
		 * @return {User} Successful
		 */
		Users_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a users linked profile by type
		 * Get users/{id}/linked/{type}
		 * @param {string} id Id of the user to return
		 * @param {string} type Type of the linked profile to fetch
		 * @return {LinkedProfile} Successful
		 */
		Users_idLinked_typeGet(id: string, type: string, headersHandler?: () => HttpHeaders): Observable<LinkedProfile> {
			return this.http.get<LinkedProfile>(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/linked/' + (type == null ? '' : encodeURIComponent(type)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Verify token and return details of the owning user
		 * Post verify
		 * @return {Authority} Token is valid
		 */
		VerifyPost(headersHandler?: () => HttpHeaders): Observable<Authority> {
			return this.http.post<Authority>(this.baseUri + 'verify', null, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

