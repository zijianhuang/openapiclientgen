import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A broadcast service that can subscribe to content for multiple destinations. */
	export interface BroadcastService {

		/**
		 * The date the broadcast service was created.
		 * Required
		 */
		createdDate: Date;

		/**
		 * The description of the broadcast service.
		 * Max length: 1200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The ID of the broadcast service.
		 * Required
		 * Minimum: 0
		 */
		id: number;

		/**
		 * The date the broadcast service was last modified.
		 * Required
		 */
		lastModifiedDate: Date;

		/**
		 * The name of the broadcast service.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: string;
	}

	/** A broadcast service that can subscribe to content for multiple destinations. */
	export interface BroadcastServiceFormProperties {

		/**
		 * The date the broadcast service was created.
		 * Required
		 */
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * The description of the broadcast service.
		 * Max length: 1200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID of the broadcast service.
		 * Required
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The date the broadcast service was last modified.
		 * Required
		 */
		lastModifiedDate: FormControl<Date | null | undefined>,

		/**
		 * The name of the broadcast service.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBroadcastServiceFormGroup() {
		return new FormGroup<BroadcastServiceFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1200)]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}


	/** A file in the CD Drive that contains content. */
	export interface CDDriveFile {

		/**
		 * The date and time the file was created.
		 * Required
		 */
		createdDate: string;

		/**
		 * The ID of the file.
		 * Required
		 * Minimum: 0
		 */
		id: number;

		/**
		 * The date and time the file was last modified.
		 * Required
		 */
		lastModifiedDate: string;

		/**
		 * The name of the file including the extension.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * The ID of the parent folder or 0 for the root folder.
		 * Required
		 * Minimum: 0
		 */
		parentId: number;

		/** The size of the file in bytes. */
		size?: number | null;
	}

	/** A file in the CD Drive that contains content. */
	export interface CDDriveFileFormProperties {

		/**
		 * The date and time the file was created.
		 * Required
		 */
		createdDate: FormControl<string | null | undefined>,

		/**
		 * The ID of the file.
		 * Required
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The date and time the file was last modified.
		 * Required
		 */
		lastModifiedDate: FormControl<string | null | undefined>,

		/**
		 * The name of the file including the extension.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The ID of the parent folder or 0 for the root folder.
		 * Required
		 * Minimum: 0
		 */
		parentId: FormControl<number | null | undefined>,

		/** The size of the file in bytes. */
		size: FormControl<number | null | undefined>,
	}
	export function CreateCDDriveFileFormGroup() {
		return new FormGroup<CDDriveFileFormProperties>({
			createdDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			lastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9 \._]*[a-zA-Z0-9]$')]),
			parentId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A folder in the CD Drive that can contain other items such as files or folders. */
	export interface CDDriveFolder {

		/**
		 * The date and time the folder was created.
		 * Required
		 */
		createdDate: string;

		/**
		 * The ID of the folder.
		 * Required
		 * Minimum: 0
		 */
		id: number;

		/**
		 * The date and time the folder was last modified. This may only represent a modification to to the folder metadata itself, not to the contents of the folder.
		 * Required
		 */
		lastModifiedDate: string;

		/**
		 * The name of the folder.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * The ID of the parent folder or 0 for the root folder.
		 * Required
		 * Minimum: 0
		 */
		parentId: number;
	}

	/** A folder in the CD Drive that can contain other items such as files or folders. */
	export interface CDDriveFolderFormProperties {

		/**
		 * The date and time the folder was created.
		 * Required
		 */
		createdDate: FormControl<string | null | undefined>,

		/**
		 * The ID of the folder.
		 * Required
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The date and time the folder was last modified. This may only represent a modification to to the folder metadata itself, not to the contents of the folder.
		 * Required
		 */
		lastModifiedDate: FormControl<string | null | undefined>,

		/**
		 * The name of the folder.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The ID of the parent folder or 0 for the root folder.
		 * Required
		 * Minimum: 0
		 */
		parentId: FormControl<number | null | undefined>,
	}
	export function CreateCDDriveFolderFormGroup() {
		return new FormGroup<CDDriveFolderFormProperties>({
			createdDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			lastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9 \._]*[a-zA-Z0-9]$')]),
			parentId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}


	/** A generic reference to an item in the CD Drive such as a file or folder. */
	export interface CDDriveItem {

		/**
		 * Required
		 * Minimum: 0
		 */
		id: number;

		/** Required */
		name: string;

		/** Required */
		type: CDDriveItemType;
	}

	/** A generic reference to an item in the CD Drive such as a file or folder. */
	export interface CDDriveItemFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CDDriveItemType | null | undefined>,
	}
	export function CreateCDDriveItemFormGroup() {
		return new FormGroup<CDDriveItemFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CDDriveItemType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CDDriveItemType { file = 'file', folder = 'folder' }


	/** An episode that defines a specific air date for an instance of a program. */
	export interface Episode {

		/**
		 * The date the air window opens for the episode.
		 * Required
		 */
		beginAirDate: Date;

		/** The date the live stream begins for the episode. Only set for live and LWSF episodes. */
		beginTransmissionDate?: Date | null;

		/** The date the segment was created. Generated at creation. */
		createdDate?: Date | null;

		/**
		 * The ID of the customer that owns this programs.
		 * Minimum: 0
		 */
		customerId?: number | null;

		/**
		 * The date the air window closes for the episode.
		 * Required
		 */
		endAirDate: Date;

		/** The date the live stream ends for the episode. Only set for live and LWSF episodes. */
		endTransmissionDate?: Date | null;

		/**
		 * The unique ID of the episode. Generated at creation.
		 * Minimum: 0
		 */
		id?: number | null;

		/** The date the segment was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate?: Date | null;

		/**
		 * The ID of the program that owns this episode.
		 * Required
		 * Minimum: 0
		 */
		programId: number;

		/**
		 * The title of the program.
		 * Required
		 */
		title: string;
	}

	/** An episode that defines a specific air date for an instance of a program. */
	export interface EpisodeFormProperties {

		/**
		 * The date the air window opens for the episode.
		 * Required
		 */
		beginAirDate: FormControl<Date | null | undefined>,

		/** The date the live stream begins for the episode. Only set for live and LWSF episodes. */
		beginTransmissionDate: FormControl<Date | null | undefined>,

		/** The date the segment was created. Generated at creation. */
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * The ID of the customer that owns this programs.
		 * Minimum: 0
		 */
		customerId: FormControl<number | null | undefined>,

		/**
		 * The date the air window closes for the episode.
		 * Required
		 */
		endAirDate: FormControl<Date | null | undefined>,

		/** The date the live stream ends for the episode. Only set for live and LWSF episodes. */
		endTransmissionDate: FormControl<Date | null | undefined>,

		/**
		 * The unique ID of the episode. Generated at creation.
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/** The date the segment was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate: FormControl<Date | null | undefined>,

		/**
		 * The ID of the program that owns this episode.
		 * Required
		 * Minimum: 0
		 */
		programId: FormControl<number | null | undefined>,

		/**
		 * The title of the program.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeFormGroup() {
		return new FormGroup<EpisodeFormProperties>({
			beginAirDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			beginTransmissionDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			endAirDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTransmissionDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			programId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Standard error response. See the [Problem Details for HTTP APIs](https://datatracker.ietf.org/doc/html/rfc7807) for more details. */
	export interface Error {

		/** The occurrence-specific problem description. */
		detail?: string | null;

		/** The status code of the error. */
		status?: number | null;

		/** The general problem description. */
		title?: string | null;
	}

	/** Standard error response. See the [Problem Details for HTTP APIs](https://datatracker.ietf.org/doc/html/rfc7807) for more details. */
	export interface ErrorFormProperties {

		/** The occurrence-specific problem description. */
		detail: FormControl<string | null | undefined>,

		/** The status code of the error. */
		status: FormControl<number | null | undefined>,

		/** The general problem description. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata about a "piece" which may be a story, song, report, etc. */
	export interface Piece {

		/**
		 * The artist or contributor name.
		 * Max length: 26
		 */
		contributor?: string | null;

		/** The date the piece was created. Generated at creation. */
		createdDate?: Date | null;

		/**
		 * The short description of the piece.
		 * Max length: 180
		 */
		description?: string | null;

		/**
		 * The ID of the episode that owns the piece.
		 * Required
		 * Minimum: 0
		 */
		episodeId: number;

		/**
		 * The long description of the piece.
		 * Max length: 1200
		 */
		fullDescription?: string | null;

		/**
		 * The unique ID of the piece. Generated at creation.
		 * Minimum: 0
		 */
		id?: number | null;

		/** The URI to the piece image content in CD Drive. Format should be 'cddrive:id:{value}' or 'cddrive://{path}'. This property is only used on modification and is not returned. */
		imageCdDriveUri?: string | null;

		/** The name of the piece image file. Generated at creation. */
		imageFileName?: string | null;

		/** The size of the piece image file in bytes. Generated at creation. */
		imageFileSize?: number | null;

		/** The user's original name of the piece image file. */
		imageOriginalFileName?: string | null;

		/** The date the piece was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate?: Date | null;

		/**
		 * Seconds relative to the start of the episode.
		 * Required
		 */
		relativeEndTime: number;

		/**
		 * Seconds relative to the start of the episode.
		 * Required
		 */
		relativeStartTime: number;

		/**
		 * The number of the segment that this piece is in, starting with 1. This is an optional field but it can be used to provide more detail by linking the piece to a specific audio segment.
		 * Minimum: 1
		 */
		segmentNumber?: number | null;

		/**
		 * The human readable title of the piece that is normally displayed on an end user's device.
		 * Required
		 * Max length: 37
		 */
		title: string;
	}

	/** The metadata about a "piece" which may be a story, song, report, etc. */
	export interface PieceFormProperties {

		/**
		 * The artist or contributor name.
		 * Max length: 26
		 */
		contributor: FormControl<string | null | undefined>,

		/** The date the piece was created. Generated at creation. */
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * The short description of the piece.
		 * Max length: 180
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID of the episode that owns the piece.
		 * Required
		 * Minimum: 0
		 */
		episodeId: FormControl<number | null | undefined>,

		/**
		 * The long description of the piece.
		 * Max length: 1200
		 */
		fullDescription: FormControl<string | null | undefined>,

		/**
		 * The unique ID of the piece. Generated at creation.
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/** The URI to the piece image content in CD Drive. Format should be 'cddrive:id:{value}' or 'cddrive://{path}'. This property is only used on modification and is not returned. */
		imageCdDriveUri: FormControl<string | null | undefined>,

		/** The name of the piece image file. Generated at creation. */
		imageFileName: FormControl<string | null | undefined>,

		/** The size of the piece image file in bytes. Generated at creation. */
		imageFileSize: FormControl<number | null | undefined>,

		/** The user's original name of the piece image file. */
		imageOriginalFileName: FormControl<string | null | undefined>,

		/** The date the piece was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate: FormControl<Date | null | undefined>,

		/**
		 * Seconds relative to the start of the episode.
		 * Required
		 */
		relativeEndTime: FormControl<number | null | undefined>,

		/**
		 * Seconds relative to the start of the episode.
		 * Required
		 */
		relativeStartTime: FormControl<number | null | undefined>,

		/**
		 * The number of the segment that this piece is in, starting with 1. This is an optional field but it can be used to provide more detail by linking the piece to a specific audio segment.
		 * Minimum: 1
		 */
		segmentNumber: FormControl<number | null | undefined>,

		/**
		 * The human readable title of the piece that is normally displayed on an end user's device.
		 * Required
		 * Max length: 37
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePieceFormGroup() {
		return new FormGroup<PieceFormProperties>({
			contributor: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(26)]),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(180)]),
			episodeId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			fullDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1200)]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			imageCdDriveUri: new FormControl<string | null | undefined>(undefined),
			imageFileName: new FormControl<string | null | undefined>(undefined),
			imageFileSize: new FormControl<number | null | undefined>(undefined),
			imageOriginalFileName: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			relativeEndTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			relativeStartTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			segmentNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(37)]),
		});

	}


	/** A program that stations can subscribe to to get live or file content. */
	export interface Program {

		/** The date the segment was created. Generated at creation. */
		createdDate?: Date | null;

		/**
		 * The ID of the customer that owns this program.
		 * Minimum: 0
		 */
		customerId?: number | null;

		/**
		 * The unique ID of the program. Generated at creation.
		 * Minimum: 0
		 */
		id?: number | null;

		/** The date the program was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate?: Date | null;

		/**
		 * The title of the program.
		 * Required
		 */
		title: string;
	}

	/** A program that stations can subscribe to to get live or file content. */
	export interface ProgramFormProperties {

		/** The date the segment was created. Generated at creation. */
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * The ID of the customer that owns this program.
		 * Minimum: 0
		 */
		customerId: FormControl<number | null | undefined>,

		/**
		 * The unique ID of the program. Generated at creation.
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/** The date the program was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate: FormControl<Date | null | undefined>,

		/**
		 * The title of the program.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateProgramFormGroup() {
		return new FormGroup<ProgramFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An electronic program guide (EPG) batch operation to create or update metadata on one or more guide programs. */
	export interface ProgramInformationBatch {

		/**
		 * The date and time the batch was created.
		 * Required
		 */
		createdDate: string;

		/** The date and time the batch finished (either successful or failed). */
		finishedDate?: string | null;

		/**
		 * The format of the metadata file defining the create or update actions to be performed on one or more EPG programs.
		 * Required
		 */
		format: ProgramInformationBatchFormat;

		/**
		 * The ID of the batch.
		 * Required
		 * Minimum: 0
		 */
		id: number;

		/** The human readable success or failure message. */
		message?: string | null;

		/** The optional name of the batch for human reference. */
		name?: string | null;

		/** The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly. If this is specified, it will overrite the value specfified in the metadata file. If this is specified, the metadata file should only contain one program. */
		program?: ProgramInformationBatchProgram;

		/**
		 * The current processing status.
		 * Required
		 */
		status: ProgramInformationBatchStatus;

		/** The URI to the metadata file defining the batch creates/updates. */
		uri?: string | null;
	}

	/** An electronic program guide (EPG) batch operation to create or update metadata on one or more guide programs. */
	export interface ProgramInformationBatchFormProperties {

		/**
		 * The date and time the batch was created.
		 * Required
		 */
		createdDate: FormControl<string | null | undefined>,

		/** The date and time the batch finished (either successful or failed). */
		finishedDate: FormControl<string | null | undefined>,

		/**
		 * The format of the metadata file defining the create or update actions to be performed on one or more EPG programs.
		 * Required
		 */
		format: FormControl<ProgramInformationBatchFormat | null | undefined>,

		/**
		 * The ID of the batch.
		 * Required
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/** The human readable success or failure message. */
		message: FormControl<string | null | undefined>,

		/** The optional name of the batch for human reference. */
		name: FormControl<string | null | undefined>,

		/**
		 * The current processing status.
		 * Required
		 */
		status: FormControl<ProgramInformationBatchStatus | null | undefined>,

		/** The URI to the metadata file defining the batch creates/updates. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProgramInformationBatchFormGroup() {
		return new FormGroup<ProgramInformationBatchFormProperties>({
			createdDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			finishedDate: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<ProgramInformationBatchFormat | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ProgramInformationBatchStatus | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProgramInformationBatchFormat { radiodns = 'radiodns' }

	export interface ProgramInformationBatchProgram {

		/**
		 * The airDate for the program in ISO 8601 format.
		 * Required
		 */
		airDate: string;

		/**
		 * The title of the program.
		 * Required
		 */
		title: string;
	}
	export interface ProgramInformationBatchProgramFormProperties {

		/**
		 * The airDate for the program in ISO 8601 format.
		 * Required
		 */
		airDate: FormControl<string | null | undefined>,

		/**
		 * The title of the program.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateProgramInformationBatchProgramFormGroup() {
		return new FormGroup<ProgramInformationBatchProgramFormProperties>({
			airDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProgramInformationBatchStatus { queued = 'queued', processing = 'processing', failed = 'failed', successful = 'successful' }


	/** An audio segment in an episode. */
	export interface Segment {

		/** The number of audio channels in the segment. Generated at creation. */
		channels?: number | null;

		/** The date the segment was created. Generated at creation. */
		createdDate?: Date | null;

		/**
		 * The ID of the episode that owns the segment.
		 * Required
		 * Minimum: 0
		 */
		episodeId: number;

		/** The name of the audio content file. Generated at creation. */
		fileName?: string | null;

		/** The size of the audio content file in bytes. Generated at creation. */
		fileSize?: number | null;

		/**
		 * The unique ID of the segment. Generated at creation.
		 * Minimum: 0
		 */
		id?: number | null;

		/** The in-cue copy that signals the start of the segment to a board operator. */
		inCue?: string | null;

		/** The date the segment was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate?: Date | null;

		/** The length (duration) of the segment in seconds. */
		length?: number | null;

		/** The original name of the audio content file. */
		originalFileName?: string | null;

		/** The out-cue copy that signals the end of the segment to a board operator. */
		outCue?: string | null;

		/**
		 * The number of the segment in the episode, starting with 1.
		 * Required
		 * Minimum: 1
		 */
		segmentNumber: number;
	}

	/** An audio segment in an episode. */
	export interface SegmentFormProperties {

		/** The number of audio channels in the segment. Generated at creation. */
		channels: FormControl<number | null | undefined>,

		/** The date the segment was created. Generated at creation. */
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * The ID of the episode that owns the segment.
		 * Required
		 * Minimum: 0
		 */
		episodeId: FormControl<number | null | undefined>,

		/** The name of the audio content file. Generated at creation. */
		fileName: FormControl<string | null | undefined>,

		/** The size of the audio content file in bytes. Generated at creation. */
		fileSize: FormControl<number | null | undefined>,

		/**
		 * The unique ID of the segment. Generated at creation.
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/** The in-cue copy that signals the start of the segment to a board operator. */
		inCue: FormControl<string | null | undefined>,

		/** The date the segment was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate: FormControl<Date | null | undefined>,

		/** The length (duration) of the segment in seconds. */
		length: FormControl<number | null | undefined>,

		/** The original name of the audio content file. */
		originalFileName: FormControl<string | null | undefined>,

		/** The out-cue copy that signals the end of the segment to a board operator. */
		outCue: FormControl<string | null | undefined>,

		/**
		 * The number of the segment in the episode, starting with 1.
		 * Required
		 * Minimum: 1
		 */
		segmentNumber: FormControl<number | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			channels: new FormControl<number | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			episodeId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			fileName: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			inCue: new FormControl<string | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			originalFileName: new FormControl<string | null | undefined>(undefined),
			outCue: new FormControl<string | null | undefined>(undefined),
			segmentNumber: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}


	/** An audio spot for insertion. */
	export interface Spot {

		/** The date the spot was created. Generated at creation. */
		createdDate?: Date | null;

		/** The length (duration) of the spot in seconds. */
		duration?: number | null;

		/** The name of the audio content file. Generated at creation. */
		fileName?: string | null;

		/** The size of the audio content file in bytes. Generated at creation. */
		fileSize?: number | null;

		/**
		 * The unique ID of the spot. Generated at creation.
		 * Minimum: 1
		 */
		id?: number | null;

		/** The date the spot was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate?: Date | null;

		/** The date the spot audio file was uploaded. Automatically updated on upload. */
		lastUploadedDate?: Date | null;

		/**
		 * The unique name of the spot
		 * Minimum: 1
		 */
		name?: string | null;

		/**
		 * Miscellaneous notes about the spot
		 * Minimum: 1
		 */
		notes?: string | null;

		/** The original name of the audio content file. */
		originalFileName?: string | null;
	}

	/** An audio spot for insertion. */
	export interface SpotFormProperties {

		/** The date the spot was created. Generated at creation. */
		createdDate: FormControl<Date | null | undefined>,

		/** The length (duration) of the spot in seconds. */
		duration: FormControl<number | null | undefined>,

		/** The name of the audio content file. Generated at creation. */
		fileName: FormControl<string | null | undefined>,

		/** The size of the audio content file in bytes. Generated at creation. */
		fileSize: FormControl<number | null | undefined>,

		/**
		 * The unique ID of the spot. Generated at creation.
		 * Minimum: 1
		 */
		id: FormControl<number | null | undefined>,

		/** The date the spot was last modified/updated. Automatically updated on any write operation. */
		lastModifiedDate: FormControl<Date | null | undefined>,

		/** The date the spot audio file was uploaded. Automatically updated on upload. */
		lastUploadedDate: FormControl<Date | null | undefined>,

		/**
		 * The unique name of the spot
		 * Minimum: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Miscellaneous notes about the spot
		 * Minimum: 1
		 */
		notes: FormControl<string | null | undefined>,

		/** The original name of the audio content file. */
		originalFileName: FormControl<string | null | undefined>,
	}
	export function CreateSpotFormGroup() {
		return new FormGroup<SpotFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			lastUploadedDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			originalFileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A spot insertion for playing a series of spots when a cue is received during a program. */
	export interface SpotInsertion {

		/**
		 * The ID of the broadcast service for the spot insertion.
		 * Required
		 * Minimum: 0
		 */
		broadcastServiceId: number;

		/** The date and time the spot insertion was created. Generated at creation. */
		createdDate?: Date | null;

		/**
		 * The cue that triggers the spot insertion.
		 * Required
		 */
		cue: string;

		/**
		 * The ID of the customer who owns the spot insertion. Set to the logged-in customer at creation.
		 * Minimum: 0
		 */
		customerId?: number | null;

		/**
		 * The duration of the spot insertion.
		 * Required
		 */
		duration: number;

		/**
		 * The date the spot insertion ends. The time will be set to midnight Eastern Time.
		 * Required
		 */
		endDate: Date;

		/**
		 * The unique ID of the spot insertion. Generated at creation.
		 * Minimum: 0
		 */
		id?: number | null;

		/**
		 * The ID of the program for the spot insertion.
		 * Required
		 * Minimum: 0
		 */
		programId: number;

		/**
		 * The ordered list of spot IDs to play.
		 * Required
		 */
		spots: Array<number>;

		/**
		 * The date the spot insertion can start. The time will be set to midnight Eastern Time.
		 * Required
		 */
		startDate: Date;
	}

	/** A spot insertion for playing a series of spots when a cue is received during a program. */
	export interface SpotInsertionFormProperties {

		/**
		 * The ID of the broadcast service for the spot insertion.
		 * Required
		 * Minimum: 0
		 */
		broadcastServiceId: FormControl<number | null | undefined>,

		/** The date and time the spot insertion was created. Generated at creation. */
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * The cue that triggers the spot insertion.
		 * Required
		 */
		cue: FormControl<string | null | undefined>,

		/**
		 * The ID of the customer who owns the spot insertion. Set to the logged-in customer at creation.
		 * Minimum: 0
		 */
		customerId: FormControl<number | null | undefined>,

		/**
		 * The duration of the spot insertion.
		 * Required
		 */
		duration: FormControl<number | null | undefined>,

		/**
		 * The date the spot insertion ends. The time will be set to midnight Eastern Time.
		 * Required
		 */
		endDate: FormControl<Date | null | undefined>,

		/**
		 * The unique ID of the spot insertion. Generated at creation.
		 * Minimum: 0
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The ID of the program for the spot insertion.
		 * Required
		 * Minimum: 0
		 */
		programId: FormControl<number | null | undefined>,

		/**
		 * The date the spot insertion can start. The time will be set to midnight Eastern Time.
		 * Required
		 */
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateSpotInsertionFormGroup() {
		return new FormGroup<SpotInsertionFormProperties>({
			broadcastServiceId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			cue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^S:[A-F0-9]{3,4}_[A-Za-z0-9_-]*$')]),
			customerId: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			programId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets broadcast services matching the given criteria.
		 * Get api/v2/broadcastservices
		 * @param {number} pageStart The start page of the results to return. The first item is indexed at 0.
		 * @param {number} pageSize The number of items to return. Must be between 0 and 500, inclusive.
		 * @param {ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById} orderById The sort order of the list of broadcast services, based on broadcast service ID. If unspecified, the broadcast services are returned in random order. If using paging to iterate through the results, sort order should be specified.
		 * @return {Array<Episode>} The matching broadcast services.
		 */
		ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderById(pageStart: number | null | undefined, pageSize: number | null | undefined, orderById: ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Episode>> {
			return this.http.get<Array<Episode>>(this.baseUri + 'api/v2/broadcastservices?pageStart=' + pageStart + '&pageSize=' + pageSize + '&orderById=' + orderById, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the broadcast service matching the given ID.
		 * Get api/v2/broadcastservices/{id}
		 * @return {BroadcastService} The matching broadcast service.
		 */
		ApiV2Broadcastservices_idGet(headersHandler?: () => HttpHeaders): Observable<BroadcastService> {
			return this.http.get<BroadcastService>(this.baseUri + 'api/v2/broadcastservices/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a file.
		 * Delete a file from the customer's private CD Drive.
		 * Delete api/v2/cddrive/files/{file_id}
		 * @return {void} 
		 */
		ApiV2CddriveFiles_file_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/cddrive/files/{file_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get file information.
		 * Get the information about a file in the customer's private CD Drive.
		 * Get api/v2/cddrive/files/{file_id}
		 * @return {CDDriveFile} The file information.
		 */
		ApiV2CddriveFiles_file_idGet(headersHandler?: () => HttpHeaders): Observable<CDDriveFile> {
			return this.http.get<CDDriveFile>(this.baseUri + 'api/v2/cddrive/files/{file_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * UNDER DEVELOPMENT - Download a file.
		 * Download a file from the customer's private CD Drive.
		 * Get api/v2/cddrive/files/{file_id}/content
		 * @return {void} The file was found and will be returned in the body of the response.
		 */
		ApiV2CddriveFiles_file_idContentGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/cddrive/files/{file_id}/content', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * UNDER DEVELOPMENT - Delete a folder.
		 * Delete a file from the customer's private CD Drive.
		 * Delete api/v2/cddrive/folders/{folder_id}
		 * @param {boolean} recursive Flag to indicate if the folder should be deleted if it has items inside of it.
		 * @return {void} 
		 */
		ApiV2CddriveFolders_folder_idDeleteByRecursive(recursive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/cddrive/folders/{folder_id}?recursive=' + recursive, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * UNDER DEVELOPMENT - Get folder information.
		 * Get the information about a folder in the customer's private CD Drive.
		 * Get api/v2/cddrive/folders/{folder_id}
		 * @return {CDDriveFolder} The folder information.
		 */
		ApiV2CddriveFolders_folder_idGet(headersHandler?: () => HttpHeaders): Observable<CDDriveFolder> {
			return this.http.get<CDDriveFolder>(this.baseUri + 'api/v2/cddrive/folders/{folder_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the items in the folder.
		 * Get the information about a folder in the customer's private CD Drive.
		 * Get api/v2/cddrive/folders/{folder_id}/items
		 * @param {number} offset The offset into the items to begin the response.
		 * @param {number} limit The maximum number of items to return in the response.
		 * @return {ApiV2CddriveFolders_folder_idItemsGetByOffsetAndLimitReturn} The folder information.
		 */
		ApiV2CddriveFolders_folder_idItemsGetByOffsetAndLimit(offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ApiV2CddriveFolders_folder_idItemsGetByOffsetAndLimitReturn> {
			return this.http.get<ApiV2CddriveFolders_folder_idItemsGetByOffsetAndLimitReturn>(this.baseUri + 'api/v2/cddrive/folders/{folder_id}/items?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets episodes matching the given criteria.
		 * Get api/v2/episodes
		 * @param {number} id Matches on the ID of the episode.
		 * @param {Date} beginAirDateAfter Matches on the begin air date of the episode (inclusive).
		 * @param {Date} endAirDateBefore Matches on the end air date of the episode (inclusive).
		 * @param {number} programId Matches on the ID of the program that owns the episode.
		 * @param {number} pageStart The start page of the results to return. The first item is indexed at 0.
		 * @param {number} pageSize The number of items to return. Must be between 0 and 500, inclusive.
		 * @param {ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById} orderById The sort order of the list of episodes, based on episode ID. If unspecified, the episodes are returned in random order. If using paging to iterate through the results, sort order should be specified.
		 * @return {Array<Episode>} The matching episode.
		 */
		ApiV2EpisodesGetByIdAndBeginAirDateAfterAndEndAirDateBeforeAndProgramIdAndPageStartAndPageSizeAndOrderById(id: number | null | undefined, beginAirDateAfter: Date | null | undefined, endAirDateBefore: Date | null | undefined, programId: number, pageStart: number | null | undefined, pageSize: number | null | undefined, orderById: ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Episode>> {
			return this.http.get<Array<Episode>>(this.baseUri + 'api/v2/episodes?id=' + id + '&beginAirDateAfter=' + beginAirDateAfter?.toISOString() + '&endAirDateBefore=' + endAirDateBefore?.toISOString() + '&programId=' + programId + '&pageStart=' + pageStart + '&pageSize=' + pageSize + '&orderById=' + orderById, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the episode matching the given ID.
		 * Get api/v2/episodes/{id}
		 * @return {Episode} The matching episode.
		 */
		ApiV2Episodes_idGet(headersHandler?: () => HttpHeaders): Observable<Episode> {
			return this.http.get<Episode>(this.baseUri + 'api/v2/episodes/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a batch operation on EPG information.
		 * Create a batch to process the metadata of one or more electronic program guide (EPG) programs using metadata that has been uploaded to the customer's CD Drive. If multiple EPG programs are present in the metadata, they will all be updated, however updates across programs are not atomic. Note that an EPG program maps to the ContentDepot concept of an episode which is also known as a "program instance".
		 * A batch operation must be explicitly created rather than the server attempting to detect new metadata in order to allow for all the content to be uploaded including any supporting content like images. A batch operation is accepted and queued for asynchronous processing at a later time. A client can poll the batch periodically to determine when it completes and the resulting state.
		 * Post api/v2/metapub/program-information/batch
		 * @return {void} 
		 */
		ApiV2MetapubProgram_informationBatchPost(requestBody: ApiV2MetapubProgram_informationBatchPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/metapub/program-information/batch', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an EPG batch operation.
		 * Gets the batch information which can be used to check the status of the operation or retrieve more details if the batch fails.
		 * Get api/v2/metapub/program-information/batch/{batch_id}
		 * @return {ProgramInformationBatch} The batch information.
		 */
		ApiV2MetapubProgram_informationBatch_batch_idGet(headersHandler?: () => HttpHeaders): Observable<ProgramInformationBatch> {
			return this.http.get<ProgramInformationBatch>(this.baseUri + 'api/v2/metapub/program-information/batch/{batch_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the pieces matching the query parameters.
		 * Get api/v2/pieces
		 * @param {number} episodeId The ID of the episode that owns the piece.
		 * @return {Array<Piece>} The pieces matching the query parameters
		 */
		ApiV2PiecesGetByEpisodeId(episodeId: number, headersHandler?: () => HttpHeaders): Observable<Array<Piece>> {
			return this.http.get<Array<Piece>>(this.baseUri + 'api/v2/pieces?episodeId=' + episodeId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new piece.
		 * Post api/v2/pieces
		 * @return {void} 
		 */
		ApiV2PiecesPost(requestBody: Piece, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/pieces', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the piece with the given ID.
		 * Delete api/v2/pieces/{id}
		 * @return {void} The piece was deleted.
		 */
		ApiV2Pieces_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/pieces/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the piece matching the given ID.
		 * Get api/v2/pieces/{id}
		 * @return {Piece} The piece with the given ID.
		 */
		ApiV2Pieces_idGet(headersHandler?: () => HttpHeaders): Observable<Piece> {
			return this.http.get<Piece>(this.baseUri + 'api/v2/pieces/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Optimized free-text search for programs using various filters.
		 * Get api/v2/programs/search
		 * @param {string} keywords Free text search that matches against the program title or description.
		 * @param {number} pageStart The start page of the results to return. The first item is indexed at 0.
		 * @param {number} pageSize The number of items to return. Must be between 0 and 500, inclusive.
		 * @return {Array<Program>} Programs matching the search request sorted by relevance.
		 */
		ApiV2ProgramsSearchGetByKeywordsAndPageStartAndPageSize(keywords: string | null | undefined, pageStart: number | null | undefined, pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Program>> {
			return this.http.get<Array<Program>>(this.baseUri + 'api/v2/programs/search?keywords=' + (keywords == null ? '' : encodeURIComponent(keywords)) + '&pageStart=' + pageStart + '&pageSize=' + pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the program matching the given ID.
		 * Get api/v2/programs/{id}
		 * @return {Program} The matching program.
		 */
		ApiV2Programs_idGet(headersHandler?: () => HttpHeaders): Observable<Program> {
			return this.http.get<Program>(this.baseUri + 'api/v2/programs/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the segments matching the query parameters.
		 * Get api/v2/segments
		 * @param {number} episodeId The ID of the episode that owns the segment.
		 * @param {number} pageStart The start page of the results to return. The first item is indexed at 0.
		 * @param {number} pageSize The number of items to return. Must be between 0 and 500, inclusive.
		 * @param {ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById} orderById The sort order of the list of segments, based on segment ID. If unspecified, the segments are returned in random order. If using paging to iterate through the results, sort order should be specified.
		 * @return {Array<Segment>} The segments matching the query parameters
		 */
		ApiV2SegmentsGetByEpisodeIdAndSegmentNumberAndPageStartAndPageSizeAndOrderById(episodeId: number, segmentNumber: number | null | undefined, pageStart: number | null | undefined, pageSize: number | null | undefined, orderById: ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Segment>> {
			return this.http.get<Array<Segment>>(this.baseUri + 'api/v2/segments?episodeId=' + episodeId + '&segmentNumber=' + segmentNumber + '&pageStart=' + pageStart + '&pageSize=' + pageSize + '&orderById=' + orderById, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the segment with the given ID.
		 * Delete api/v2/segments/{id}
		 * @return {void} The segment was deleted.
		 */
		ApiV2Segments_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/segments/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the segment matching the given ID.
		 * Get api/v2/segments/{id}
		 * @return {Segment} The segment with the given ID.
		 */
		ApiV2Segments_idGet(headersHandler?: () => HttpHeaders): Observable<Segment> {
			return this.http.get<Segment>(this.baseUri + 'api/v2/segments/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * UNDER DEVELOPMENT - Returns the audio content segment matching the given ID.
		 * Get api/v2/segments/{id}/content
		 * @return {void} The audio content of the requested segment.
		 */
		ApiV2Segments_idContentGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v2/segments/{id}/content', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the spot insertions matching the query parameters.
		 * Get api/v2/spotinsertions
		 * @param {number} pageStart The start page of the results to return. The first item is indexed at 0.
		 * @param {number} pageSize The number of items to return. Must be between 0 and 500, inclusive.
		 * @param {ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById} orderById The sort order of the list of spot insertions, based on ID. If unspecified, the spot insertions are returned in random order. If using paging to iterate through the results, sort order should be specified.
		 * @return {Array<SpotInsertion>} The spot insertions matching the query parameters
		 */
		ApiV2SpotinsertionsGetByPageStartAndPageSizeAndOrderById(pageStart: number | null | undefined, pageSize: number | null | undefined, orderById: ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SpotInsertion>> {
			return this.http.get<Array<SpotInsertion>>(this.baseUri + 'api/v2/spotinsertions?pageStart=' + pageStart + '&pageSize=' + pageSize + '&orderById=' + orderById, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new spot insertion.
		 * Post api/v2/spotinsertions
		 * @return {void} 
		 */
		ApiV2SpotinsertionsPost(requestBody: SpotInsertion, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/spotinsertions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the spot insertion with the given ID.
		 * Delete api/v2/spotinsertions/{id}
		 * @return {void} The spot insertion was deleted.
		 */
		ApiV2Spotinsertions_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/spotinsertions/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the spot insertion matching the given ID.
		 * Get api/v2/spotinsertions/{id}
		 * @return {SpotInsertion} The spot insertion with the given ID.
		 */
		ApiV2Spotinsertions_idGet(headersHandler?: () => HttpHeaders): Observable<SpotInsertion> {
			return this.http.get<SpotInsertion>(this.baseUri + 'api/v2/spotinsertions/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the spots matching the query parameters.
		 * Get api/v2/spots
		 * @param {number} pageStart The start page of the spot to return. The first item is indexed at 0.
		 * @param {number} pageSize The number of items to return. Must be between 0 and 500, inclusive.
		 * @param {ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById} orderById The sort order of the list of spots, based on spot ID. If unspecified, the spots are returned in random order. If using paging to iterate through the results, sort order should be specified.
		 * @return {Array<Spot>} The spots matching the query parameters
		 */
		ApiV2SpotsGetByPageStartAndPageSizeAndOrderById(pageStart: number | null | undefined, pageSize: number | null | undefined, orderById: ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Spot>> {
			return this.http.get<Array<Spot>>(this.baseUri + 'api/v2/spots?pageStart=' + pageStart + '&pageSize=' + pageSize + '&orderById=' + orderById, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the spot with the given ID.
		 * Delete api/v2/spots/{id}
		 * @return {void} The spot was deleted.
		 */
		ApiV2Spots_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/spots/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the spot matching the given ID.
		 * Get api/v2/spots/{id}
		 * @return {Spot} The spot with the given ID.
		 */
		ApiV2Spots_idGet(headersHandler?: () => HttpHeaders): Observable<Spot> {
			return this.http.get<Spot>(this.baseUri + 'api/v2/spots/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the group information document.
		 * The group information (GI) document allows programs to be put into groups such as serials, series, shows, or general themes and provide additional metadata for that group such as a description, links, and a logo. A program in the guide can be linked to its group using the "memberOf" field to allow clients to easily link programs together for a given Content Depot Program/Show in the EPG. GI will be published for all Content Depot programs that have the "publish metadata" option enabled. By using the group information, clients have the ability to access a single list of all metadata supported program titles, links, images, and descriptions. This information can be used to assist a station when setting up a schedule or it can be used in the end user metadata to provide additional information about the content such as displaying "other episodes from this program" or displaying the group, program, and program event images.
		 * Currently all programs with "publish metadata" enabled will be included in the group information even if they are not active in the program guide. This may change in the future if the number of programs grows.
		 * Note that while the location of the GI document isn't expected to change in the near future, as per the RadioDNS specification the authoritative link to the document is defined in the SI document with the mime value ```application/xml+gi```.
		 * The response will use standard HTTP cache-control headers to indicate when the document should be refreshed as well as an ETag to allow for lightweight change detection.
		 * Get radiodns/spi/3.1/GI.xml
		 * @return {void} The group information document is returned in the body of the response.
		 */
		RadiodnsSpi3_1GI_xmlGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'radiodns/spi/3.1/GI.xml', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the service information document.
		 * The service information (SI) document holds a definition of services provided by the service provider (e.g. MetaPub), including any relevant metadata and bearer details, such as:
		 * * Names
		 * * Descriptions
		 * * Logos
		 * * Bearers (broadcast and IP)
		 * MetaPub provides two SI documents. The _National SI document_ describes the distribution services provided by PRSS including basic service metadata, logos, and bearers. The current design defines two IP based services, although this may change in the future:
		 * * Streams
		 * * Bearer ID: prss:streams
		 * * Service ID: streams
		 * * Files
		 * * Bearer ID: prss:files
		 * * Service ID: files
		 * The _Station SI document_ describes the stations and broadcast services served by PRSS. Only stations and broadcast services that have opted into metadata publishing are listed in this document.
		 * Based on [ETSI TS 102 818 v3.4.1](https://www.etsi.org/deliver/etsi_ts/102800_102899/102818/03.04.01_60/ts_102818v030401p.pdf) section 10.2.4, the SI document will be placed in a defined location on the service website. Using standard HTTP cache mechanisms, the SI document will only need to be fetched and processed occasionally.
		 * The response will use standard HTTP cache-control headers to indicate when the document should be refreshed as well as an ETag to allow for lightweight change detection.
		 * Get radiodns/spi/3.1/SI.xml
		 * @return {void} The service information document is returned in the body of the response.
		 */
		RadiodnsSpi3_1SI_xmlGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'radiodns/spi/3.1/SI.xml', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the program information document.
		 * The program information (PI) document holds the linear and the on-demand schedule of programs for a service over a 24 hour period. This information provides an electronic program guide (EPG) to clients that defines the program metadata such as:
		 * *   Names
		 * *   Descriptions
		 * *   Logos
		 * *   Links
		 * *   Genres
		 * *   Program Events (a.k.a. pieces)
		 * MetaPub provides both _National PI documents_ and _Station PI documents_. For both documents, only programs with metadata publishing enabled are listed in the document. As per the RadioDNS specification, the authoritative list of services is defined in the corresponding SI document.
		 * The National PI documents correspond to the services listed in the National SI document (streams and files). This EPG contains two types of programming, live and on-demand (a.k.a files). A "live with subsequent file (LWSF)" program may appear in both the streams and files services EPG data because it will both a live stream and an on-demand file. File programs with multi-day air windows will appear in the PI file on every day that the air window is open. That is, the EPG data for each day contains the information about programming available that day, even if the programming is also available on other days. The program ID can be used to resolve these duplicates down to a single instance when processing multiple services or multiple days of EPG data.
		 * The Station PI documents correspond to the services listed in the Station SI document, and list program and schedule metadata for programs which are subscribed to by the given service. Note that stations may opt into "static" metadata publishing (station and broadcast service metadata) but not "dynamic" metadata publishing (program and schedule metadata). If this is the case, a service that is listed in the Station SI document will not have a corresponding PI document, and a 404 status code will be returned.
		 * Each PI document will contain 24 hours of program guide information. The current day, the previous day, and the next day will contain detailed program event information (a.k.a. Content Depot pieces) while PI files outside of this range will only contain the program (a.k.a Content Depot episode) level information. This may change in the future with the use of an API key as defined by the RadioDNS specification to identify "trusted" clients. If metadata for any program in the guide(s) changes, the PI document will be regenerated. Using standard HTTP cache mechanisms, the PI document for the current day can be fetched frequently (e.g. every 5 minutes) to receive last minute changes while future and past days will only be fetched and processed occasionally (e.g. every two hours).
		 * By obtaining the full 24 hour guide, clients such as middleware can build a local database/lookup table of program and program event information that allows for more specific program selection based on user configuration, automation events, and other possible inputs. In the event that MetaPub is unreachable for a short period of time, the client has the full guide to prevent any interruption to the on-air broadcast.
		 * Construction of the URL to the PI document is described in [ETSI TS 102 818 v3.4.1](https://www.etsi.org/deliver/etsi_ts/102800_102899/102818/03.04.01_60/ts_102818v030401p.pdf) section 10.3. Currently, MetaPub only supports PI URLs constructed from SPI SI, as described in [ETSI TS 103 270 v1.4.1](https://www.etsi.org/deliver/etsi_ts/103200_103299/103270/01.04.01_60/ts_103270v010401p.pdf) section 7.
		 * The response will use standard HTTP cache-control headers to indicate when the document should be refreshed as well as an ETag to allow for lightweight change detection.
		 * Get radiodns/spi/3.1/id/{fqdn}/{sid}/{date}_PI.xml
		 * @return {void} Program information document for the given 24 hour period.
		 */
		RadiodnsSpi3_1Id_fqdn_sid_date_PI_xmlGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'radiodns/spi/3.1/id/{fqdn}/{sid}/{date}_PI.xml', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum ApiV2BroadcastservicesGetByPageStartAndPageSizeAndOrderByIdOrderById { asc = 'asc', desc = 'desc' }

	export interface ApiV2CddriveFolders_folder_idItemsGetByOffsetAndLimitReturn {

		/** The item instances. */
		entries?: Array<CDDriveItem>;

		/** The maximum number of items to return. */
		limit?: number | null;

		/** The start offset into the items. */
		offset?: number | null;

		/** The total number of entries available. */
		totalCount?: number | null;
	}
	export interface ApiV2CddriveFolders_folder_idItemsGetByOffsetAndLimitReturnFormProperties {

		/** The maximum number of items to return. */
		limit: FormControl<number | null | undefined>,

		/** The start offset into the items. */
		offset: FormControl<number | null | undefined>,

		/** The total number of entries available. */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateApiV2CddriveFolders_folder_idItemsGetByOffsetAndLimitReturnFormGroup() {
		return new FormGroup<ApiV2CddriveFolders_folder_idItemsGetByOffsetAndLimitReturnFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApiV2MetapubProgram_informationBatchPostPostBody {

		/**
		 * The format of the metadata file defining the create or update actions to be performed on one or more EPG programs. For more information on how RadioDNS EPG maps to ContentDepot <a href="/api/epg-cd-mapping.html">click here </a>
		 * Required
		 */
		format: ProgramInformationBatchFormat;

		/** An optional human readable name for the batch. */
		name?: string | null;

		/** The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly. */
		program?: ApiV2MetapubProgram_informationBatchPostPostBodyProgram;

		/**
		 * The URI to the metadata file. Currently only the ```cddrive``` scheme is supported.
		 * Required
		 */
		uri: string;
	}
	export interface ApiV2MetapubProgram_informationBatchPostPostBodyFormProperties {

		/**
		 * The format of the metadata file defining the create or update actions to be performed on one or more EPG programs. For more information on how RadioDNS EPG maps to ContentDepot <a href="/api/epg-cd-mapping.html">click here </a>
		 * Required
		 */
		format: FormControl<ProgramInformationBatchFormat | null | undefined>,

		/** An optional human readable name for the batch. */
		name: FormControl<string | null | undefined>,

		/**
		 * The URI to the metadata file. Currently only the ```cddrive``` scheme is supported.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApiV2MetapubProgram_informationBatchPostPostBodyFormGroup() {
		return new FormGroup<ApiV2MetapubProgram_informationBatchPostPostBodyFormProperties>({
			format: new FormControl<ProgramInformationBatchFormat | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApiV2MetapubProgram_informationBatchPostPostBodyProgram {

		/** Required */
		airDate: string;

		/** Required */
		title: string;
	}
	export interface ApiV2MetapubProgram_informationBatchPostPostBodyProgramFormProperties {

		/** Required */
		airDate: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateApiV2MetapubProgram_informationBatchPostPostBodyProgramFormGroup() {
		return new FormGroup<ApiV2MetapubProgram_informationBatchPostPostBodyProgramFormProperties>({
			airDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

