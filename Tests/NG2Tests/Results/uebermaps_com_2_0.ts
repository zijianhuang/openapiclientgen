import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Attachment {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attachable_id?: number | null;
		attachable_type?: string | null;
		created_at?: Date | null;
		description?: string | null;
		file_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id?: number | null;
		sizes?: string | null;
		spot?: Spot;
		status?: AttachmentStatus | null;
		user?: User;
	}
	export interface AttachmentFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attachable_id: FormControl<number | null | undefined>,
		attachable_type: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		file_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id: FormControl<number | null | undefined>,
		sizes: FormControl<string | null | undefined>,
		status: FormControl<AttachmentStatus | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			attachable_id: new FormControl<number | null | undefined>(undefined),
			attachable_type: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			file_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			map_id: new FormControl<number | null | undefined>(undefined),
			sizes: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AttachmentStatus | null | undefined>(undefined),
		});

	}

	export enum AttachmentStatus { approved = 0, unapproved = 1 }

	export interface Collaborator {
		created_at?: Date | null;
		group?: CollaboratorGroup | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		is_admin?: boolean | null;
		map?: Map;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id?: number | null;
		updated_at?: Date | null;
		user?: User;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		user_id?: number | null;
	}
	export interface CollaboratorFormProperties {
		created_at: FormControl<Date | null | undefined>,
		group: FormControl<CollaboratorGroup | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		is_admin: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id: FormControl<number | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateCollaboratorFormGroup() {
		return new FormGroup<CollaboratorFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			group: new FormControl<CollaboratorGroup | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			is_admin: new FormControl<boolean | null | undefined>(undefined),
			map_id: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CollaboratorGroup { admin = 0, editor = 1 }

	export interface CollaboratorEditable {
		group?: CollaboratorGroup | null;
	}
	export interface CollaboratorEditableFormProperties {
		group: FormControl<CollaboratorGroup | null | undefined>,
	}
	export function CreateCollaboratorEditableFormGroup() {
		return new FormGroup<CollaboratorEditableFormProperties>({
			group: new FormControl<CollaboratorGroup | null | undefined>(undefined),
		});

	}

	export interface CollaboratorInvitation {
		accepted?: boolean | null;
		created_at?: Date | null;
		email?: string | null;
		group?: CollaboratorGroup | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		invited_by_user?: User;
		map?: Map;
		sent?: boolean | null;
		updated_at?: Date | null;
		user?: User;
	}
	export interface CollaboratorInvitationFormProperties {
		accepted: FormControl<boolean | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,
		group: FormControl<CollaboratorGroup | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		sent: FormControl<boolean | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateCollaboratorInvitationFormGroup() {
		return new FormGroup<CollaboratorInvitationFormProperties>({
			accepted: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<CollaboratorGroup | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			sent: new FormControl<boolean | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CollaboratorInvitationCreate {
		emails?: string | null;
		is_admin?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id?: number | null;
		user_ids?: string | null;
	}
	export interface CollaboratorInvitationCreateFormProperties {
		emails: FormControl<string | null | undefined>,
		is_admin: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id: FormControl<number | null | undefined>,
		user_ids: FormControl<string | null | undefined>,
	}
	export function CreateCollaboratorInvitationCreateFormGroup() {
		return new FormGroup<CollaboratorInvitationCreateFormProperties>({
			emails: new FormControl<string | null | undefined>(undefined),
			is_admin: new FormControl<boolean | null | undefined>(undefined),
			map_id: new FormControl<number | null | undefined>(undefined),
			user_ids: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Comment {
		body?: string | null;
		created_at?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		status?: AttachmentStatus | null;
		updated_at?: Date | null;
		user?: User;
	}
	export interface CommentFormProperties {
		body: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		status: FormControl<AttachmentStatus | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AttachmentStatus | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CommentEditable {
		body?: string | null;
	}
	export interface CommentEditableFormProperties {
		body: FormControl<string | null | undefined>,
	}
	export function CreateCommentEditableFormGroup() {
		return new FormGroup<CommentEditableFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event {
		counts?: EventCounts;
		created_at?: Date | null;
		description?: string | null;
		ends_at?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: double */
		lat?: number | null;

		/** Type: double */
		lon?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		owner_id?: number | null;
		picture_url?: string | null;
		spot?: Spot;
		starts_at?: Date | null;
		time_zone?: string | null;
		title?: string | null;
		updated_at?: Date | null;
		user?: User;
	}
	export interface EventFormProperties {
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		ends_at: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: double */
		lat: FormControl<number | null | undefined>,

		/** Type: double */
		lon: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		owner_id: FormControl<number | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
		starts_at: FormControl<Date | null | undefined>,
		time_zone: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ends_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			owner_id: new FormControl<number | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			starts_at: new FormControl<Date | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface EventCounts {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attachments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comments?: number | null;
	}
	export interface EventCountsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attachments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comments: FormControl<number | null | undefined>,
	}
	export function CreateEventCountsFormGroup() {
		return new FormGroup<EventCountsFormProperties>({
			attachments: new FormControl<number | null | undefined>(undefined),
			comments: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EventEditable {
		description?: string | null;
		ends_at?: Date | null;

		/** Type: double */
		lat?: number | null;

		/** Type: double */
		lon?: number | null;
		picture?: string | null;
		starts_at?: Date | null;
		time_zone?: string | null;
		title?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		user_id?: number | null;
	}
	export interface EventEditableFormProperties {
		description: FormControl<string | null | undefined>,
		ends_at: FormControl<Date | null | undefined>,

		/** Type: double */
		lat: FormControl<number | null | undefined>,

		/** Type: double */
		lon: FormControl<number | null | undefined>,
		picture: FormControl<string | null | undefined>,
		starts_at: FormControl<Date | null | undefined>,
		time_zone: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateEventEditableFormGroup() {
		return new FormGroup<EventEditableFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			ends_at: new FormControl<Date | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			starts_at: new FormControl<Date | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Map {
		counts?: MapCounts;
		created_at?: Date | null;
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		map_settings?: MapSettings;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		owner_id?: number | null;
		picture_url?: string | null;
		title?: string | null;
		updated_at?: Date | null;
		visibility?: MapVisibility | null;
	}
	export interface MapFormProperties {
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		owner_id: FormControl<number | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
		visibility: FormControl<MapVisibility | null | undefined>,
	}
	export function CreateMapFormGroup() {
		return new FormGroup<MapFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			owner_id: new FormControl<number | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			visibility: new FormControl<MapVisibility | null | undefined>(undefined),
		});

	}

	export enum MapVisibility { public = 0, link = 1, private = 2 }

	export interface MapCounts {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attachments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		impressions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		respots?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		spots?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		subscriptions?: number | null;
	}
	export interface MapCountsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attachments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		impressions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		respots: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		spots: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		subscriptions: FormControl<number | null | undefined>,
	}
	export function CreateMapCountsFormGroup() {
		return new FormGroup<MapCountsFormProperties>({
			attachments: new FormControl<number | null | undefined>(undefined),
			comments: new FormControl<number | null | undefined>(undefined),
			impressions: new FormControl<number | null | undefined>(undefined),
			respots: new FormControl<number | null | undefined>(undefined),
			spots: new FormControl<number | null | undefined>(undefined),
			subscriptions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MapEditable {
		description?: string | null;
		map_settings?: MapSettings;
		picture?: string | null;
		title?: string | null;
		visibility?: MapVisibility | null;
	}
	export interface MapEditableFormProperties {
		description: FormControl<string | null | undefined>,
		picture: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		visibility: FormControl<MapVisibility | null | undefined>,
	}
	export function CreateMapEditableFormGroup() {
		return new FormGroup<MapEditableFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<MapVisibility | null | undefined>(undefined),
		});

	}

	export interface MapRelation {
		access?: string | null;
		access_group?: MapRelationAccess_group | null;
		subscribed?: boolean | null;
	}
	export interface MapRelationFormProperties {
		access: FormControl<string | null | undefined>,
		access_group: FormControl<MapRelationAccess_group | null | undefined>,
		subscribed: FormControl<boolean | null | undefined>,
	}
	export function CreateMapRelationFormGroup() {
		return new FormGroup<MapRelationFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			access_group: new FormControl<MapRelationAccess_group | null | undefined>(undefined),
			subscribed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MapRelationAccess_group { visitor = 0, editor = 1, admin = 2 }

	export interface MapSettings {
		editor_access?: string | null;
		respotting_to_this_map?: boolean | null;
		visitor_access?: string | null;
	}
	export interface MapSettingsFormProperties {
		editor_access: FormControl<string | null | undefined>,
		respotting_to_this_map: FormControl<boolean | null | undefined>,
		visitor_access: FormControl<string | null | undefined>,
	}
	export function CreateMapSettingsFormGroup() {
		return new FormGroup<MapSettingsFormProperties>({
			editor_access: new FormControl<string | null | undefined>(undefined),
			respotting_to_this_map: new FormControl<boolean | null | undefined>(undefined),
			visitor_access: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapWithAuthToken {
		counts?: MapCounts;
		created_at?: Date | null;
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		owner_id?: number | null;
		picture_url?: string | null;
		title?: string | null;
		token?: string | null;
		updated_at?: Date | null;
		visibility?: MapVisibility | null;
	}
	export interface MapWithAuthTokenFormProperties {
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		owner_id: FormControl<number | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
		visibility: FormControl<MapVisibility | null | undefined>,
	}
	export function CreateMapWithAuthTokenFormGroup() {
		return new FormGroup<MapWithAuthTokenFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			owner_id: new FormControl<number | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			visibility: new FormControl<MapVisibility | null | undefined>(undefined),
		});

	}

	export interface MapWithRelation {
		counts?: MapCounts;
		created_at?: Date | null;
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		map_settings?: MapSettings;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		owner_id?: number | null;
		picture_url?: string | null;
		relation?: MapRelation;
		title?: string | null;
		updated_at?: Date | null;
		visibility?: MapVisibility | null;
	}
	export interface MapWithRelationFormProperties {
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		owner_id: FormControl<number | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
		visibility: FormControl<MapVisibility | null | undefined>,
	}
	export function CreateMapWithRelationFormGroup() {
		return new FormGroup<MapWithRelationFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			owner_id: new FormControl<number | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			visibility: new FormControl<MapVisibility | null | undefined>(undefined),
		});

	}

	export interface Respot {
		created_at?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		map?: Map;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id?: number | null;
		spot?: Spot;
		updated_at?: Date | null;
		user?: User;
	}
	export interface RespotFormProperties {
		created_at: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id: FormControl<number | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateRespotFormGroup() {
		return new FormGroup<RespotFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			map_id: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Spot {
		counts?: SpotCounts;
		created_at?: Date | null;
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: double */
		lat?: number | null;

		/** Type: double */
		lon?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id?: number | null;
		picture_url?: string | null;
		status?: AttachmentStatus | null;
		time_zone?: string | null;
		title?: string | null;
		updated_at?: Date | null;
		user?: User;
	}
	export interface SpotFormProperties {
		created_at: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: double */
		lat: FormControl<number | null | undefined>,

		/** Type: double */
		lon: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		map_id: FormControl<number | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
		status: FormControl<AttachmentStatus | null | undefined>,
		time_zone: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateSpotFormGroup() {
		return new FormGroup<SpotFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			map_id: new FormControl<number | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AttachmentStatus | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SpotCounts {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attachments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		respot?: number | null;
	}
	export interface SpotCountsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		attachments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		respot: FormControl<number | null | undefined>,
	}
	export function CreateSpotCountsFormGroup() {
		return new FormGroup<SpotCountsFormProperties>({
			attachments: new FormControl<number | null | undefined>(undefined),
			comments: new FormControl<number | null | undefined>(undefined),
			respot: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SpotEditable {
		description?: string | null;

		/** Type: double */
		lat?: number | null;

		/** Type: double */
		lon?: number | null;
		picture?: string | null;
		time_zone?: string | null;
		title?: string | null;
	}
	export interface SpotEditableFormProperties {
		description: FormControl<string | null | undefined>,

		/** Type: double */
		lat: FormControl<number | null | undefined>,

		/** Type: double */
		lon: FormControl<number | null | undefined>,
		picture: FormControl<string | null | undefined>,
		time_zone: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSpotEditableFormGroup() {
		return new FormGroup<SpotEditableFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscription {
		created_at?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		map?: Map;
		updated_at?: Date | null;
		user?: User;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		user_id?: number | null;
	}
	export interface SubscriptionFormProperties {
		created_at: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User {
		about?: string | null;
		counts?: any;
		header_picture?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		location?: string | null;
		name?: string | null;
		picture_url?: string | null;
		screen_name?: string | null;
		url?: string | null;
	}
	export interface UserFormProperties {
		about: FormControl<string | null | undefined>,
		counts: FormControl<any | null | undefined>,
		header_picture: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		location: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
		screen_name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
			counts: new FormControl<any | null | undefined>(undefined),
			header_picture: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			screen_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserAuthentication {
		email?: string | null;
		password?: string | null;
	}
	export interface UserAuthenticationFormProperties {
		email: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
	}
	export function CreateUserAuthenticationFormGroup() {
		return new FormGroup<UserAuthenticationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserEditable {
		about?: string | null;
		header?: string | null;
		language?: string | null;
		location?: string | null;
		name?: string | null;
		picture?: string | null;
		screen_name?: string | null;
		time_zone?: string | null;
		url?: string | null;
	}
	export interface UserEditableFormProperties {
		about: FormControl<string | null | undefined>,
		header: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		picture: FormControl<string | null | undefined>,
		screen_name: FormControl<string | null | undefined>,
		time_zone: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateUserEditableFormGroup() {
		return new FormGroup<UserEditableFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
			header: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			screen_name: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserFullProfile extends User {
		auth_token?: string | null;
		language?: string | null;
		time_zone?: string | null;
	}
	export interface UserFullProfileFormProperties extends UserFormProperties {
		auth_token: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		time_zone: FormControl<string | null | undefined>,
	}
	export function CreateUserFullProfileFormGroup() {
		return new FormGroup<UserFullProfileFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
			counts: new FormControl<any | null | undefined>(undefined),
			header_picture: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			screen_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			auth_token: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Update account
		 * Update account. Wrap map parameters in [user].
		 * Patch account
		 * @param {UserEditable} requestBody user attributes
		 * @return {User} Contains user data.
		 */
		AccountPatch(requestBody: UserEditable, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'account', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete attachment
		 * Delete attachment.
		 * Delete attachments/{id}
		 * @param {number} id Attachment id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Attachment} Contains deleted attachment.
		 */
		Attachments_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<Attachment> {
			return this.http.delete<Attachment>(this.baseUri + 'attachments/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Sign in user
		 * Sign in user. Wrap authentication parameters in [user].
		 * Post authentication
		 * @param {UserAuthentication} requestBody user authentication attributes
		 * @return {UserFullProfile} Contains user data including authentication token for subsequent requests
		 */
		AuthenticationPost(requestBody: UserAuthentication, headersHandler?: () => HttpHeaders): Observable<UserFullProfile> {
			return this.http.post<UserFullProfile>(this.baseUri + 'authentication', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List your collaborator invitations
		 * List your collaborator invitations.
		 * Get collaborator_invitations
		 * @return {Array<CollaboratorInvitation>} Contains list of collaborator invitations.
		 */
		Collaborator_invitationsGet(headersHandler?: () => HttpHeaders): Observable<Array<CollaboratorInvitation>> {
			return this.http.get<Array<CollaboratorInvitation>>(this.baseUri + 'collaborator_invitations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Invite user to collaborate on map
		 * Invite user to collaborate on map.
		 * Post collaborator_invitations
		 * @param {CollaboratorInvitationCreate} requestBody Supply map_id and either a comma separated list of user_ids or emails. Optionally you can provide a 'is_admin' parameter with 'true' or 'false' to give the invited users admin privileges.
		 * @return {CollaboratorInvitation} Contains collaborator invitation data.
		 */
		Collaborator_invitationsPost(requestBody: CollaboratorInvitationCreate, headersHandler?: () => HttpHeaders): Observable<CollaboratorInvitation> {
			return this.http.post<CollaboratorInvitation>(this.baseUri + 'collaborator_invitations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Show collaborator invitation
		 * Show collaborator invitation
		 * Get collaborator_invitations/{id}
		 * @param {number} id Collaborator invitation id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CollaboratorInvitation} Contains collaborator invitation data.
		 */
		Collaborator_invitations_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<CollaboratorInvitation> {
			return this.http.get<CollaboratorInvitation>(this.baseUri + 'collaborator_invitations/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete collaborator invitation
		 * Delete collaborator invitation.
		 * Delete collaborator_invitations/{id}
		 * @param {number} id Collaborator invitation id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CollaboratorInvitation} Contains deleted collaborator invitation.
		 */
		Collaborator_invitations_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<CollaboratorInvitation> {
			return this.http.delete<CollaboratorInvitation>(this.baseUri + 'collaborator_invitations/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Accept collaborator invitation.
		 * Accept collaborator invitation.
		 * Patch collaborator_invitations/{id}
		 * @param {number} id Collaborator invitation id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CollaboratorInvitation} Contains collaborator invitation data.
		 */
		Collaborator_invitations_idPatch(id: number, headersHandler?: () => HttpHeaders): Observable<CollaboratorInvitation> {
			return this.http.patch<CollaboratorInvitation>(this.baseUri + 'collaborator_invitations/' + id, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete comment
		 * Delete comment.
		 * Delete comments/{id}
		 * @param {number} id Comment id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Comment} Contains deleted comment.
		 */
		Comments_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<Comment> {
			return this.http.delete<Comment>(this.baseUri + 'comments/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update comment
		 * Update comment. Wrap comment parameters in [comment].
		 * Patch comments/{id}
		 * @param {number} id Comment id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CommentEditable} requestBody Comment attributes
		 * @return {Comment} Contains comment data
		 */
		Comments_idPatch(id: number, requestBody: CommentEditable, headersHandler?: () => HttpHeaders): Observable<Comment> {
			return this.http.patch<Comment>(this.baseUri + 'comments/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List your own events
		 * List your own events.
		 * Get events
		 * @param {string} timeframe_start Begin of time range of event (ISO 8601 date format).
		 * @param {string} timeframe_end End of time range of event (ISO 8601 date format).
		 * @param {string} bounds To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792
		 * @return {Array<Event>} Contains list of events.
		 */
		EventsGetByTimeframe_startAndTimeframe_endAndBounds(timeframe_start: string | null | undefined, timeframe_end: string | null | undefined, bounds: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'events?timeframe_start=' + (timeframe_start == null ? '' : encodeURIComponent(timeframe_start)) + '&timeframe_end=' + (timeframe_end == null ? '' : encodeURIComponent(timeframe_end)) + '&bounds=' + (bounds == null ? '' : encodeURIComponent(bounds)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get event
		 * Get basic information about an event
		 * Get events/{id}
		 * @param {number} id Id of event
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Event} Contains event data.
		 */
		Events_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Event> {
			return this.http.get<Event>(this.baseUri + 'events/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete event
		 * Delete event.
		 * Delete events/{id}
		 * @param {number} id Event id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Event} Contains deleted event.
		 */
		Events_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<Event> {
			return this.http.delete<Event>(this.baseUri + 'events/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update event
		 * Update event. Wrap event parameters in [event].
		 * Patch events/{id}
		 * @param {number} id Event id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {EventEditable} requestBody Event attributes
		 * @return {Map} Contains map data, map settings and your relation to this map
		 */
		Events_idPatch(id: number, requestBody: EventEditable, headersHandler?: () => HttpHeaders): Observable<Map> {
			return this.http.patch<Map>(this.baseUri + 'events/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List your own maps
		 * List your own maps.
		 * Get maps
		 * @return {Array<Map>} Contains list of maps.
		 */
		MapsGet(headersHandler?: () => HttpHeaders): Observable<Array<Map>> {
			return this.http.get<Array<Map>>(this.baseUri + 'maps', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create map
		 * Create map. Wrap map parameters in [map]. To add a map header picture pass a base64 encoded string to [map][picture].
		 * Post maps
		 * @param {MapEditable} requestBody map attributes
		 * @return {Map} Contains map data, map settings and your relation to this map
		 */
		MapsPost(requestBody: MapEditable, headersHandler?: () => HttpHeaders): Observable<Map> {
			return this.http.post<Map>(this.baseUri + 'maps', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Search maps
		 * Search maps
		 * Get maps/search
		 * @param {string} q Query
		 * @param {number} d Distance. Diameter of search radius in meter (default: 2000 meter)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} lat Latitude for search radius (default distance: 2000 meter)
		 *     Type: double
		 * @param {number} lon Longitude for search radius (default distance: 2000 meter)
		 *     Type: double
		 * @return {Map} Contains map data.
		 */
		MapsSearchGetByQAndDAndLatAndLon(q: string | null | undefined, d: number | null | undefined, lat: number | null | undefined, lon: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Map> {
			return this.http.get<Map>(this.baseUri + 'maps/search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&d=' + d + '&lat=' + lat + '&lon=' + lon, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get map
		 * Get basic information about a map
		 * Get maps/{id}
		 * @param {number} id Id of map
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {MapWithRelation} Contains map data, map settings and your relation to this map
		 */
		Maps_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<MapWithRelation> {
			return this.http.get<MapWithRelation>(this.baseUri + 'maps/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete map
		 * Delete map.
		 * Delete maps/{id}
		 * @param {number} id map id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Map} Contains deleted map.
		 */
		Maps_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<Map> {
			return this.http.delete<Map>(this.baseUri + 'maps/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update map
		 * Update map. Wrap map parameters in [map]. To update the map header picture pass a base64 encoded string to [map][picture].
		 * Patch maps/{id}
		 * @param {number} id map id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {MapEditable} requestBody map settings attributes
		 * @return {Map} Contains map data, map settings and your relation to this map
		 */
		Maps_idPatch(id: number, requestBody: MapEditable, headersHandler?: () => HttpHeaders): Observable<Map> {
			return this.http.patch<Map>(this.baseUri + 'maps/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List attachments for a given map
		 * List attachments for a given map.
		 * Get maps/{id}/attachments
		 * @param {number} id Map id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Attachment>} Contains list of attachments.
		 */
		Maps_idAttachmentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Attachment>> {
			return this.http.get<Array<Attachment>>(this.baseUri + 'maps/' + id + '/attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Upload map attachment
		 * Upload map attachment. Wrap attachment parameters in [attachment]
		 * Post maps/{id}/attachments
		 * @param {number} id Map id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} requestBody Base64 encoded image
		 * @return {Attachment} Contains attachment data
		 */
		Maps_idAttachmentsPost(id: number, requestBody: string, headersHandler?: () => HttpHeaders): Observable<Attachment> {
			return this.http.post<Attachment>(this.baseUri + 'maps/' + id + '/attachments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List collaborators of a map
		 * List collaborators of a map.
		 * Get maps/{id}/collaborators/
		 * @param {number} id Map id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Collaborator>} Contains list of collaborators.
		 */
		Maps_idCollaboratorsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Collaborator>> {
			return this.http.get<Array<Collaborator>>(this.baseUri + 'maps/' + id + '/collaborators/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete collaboration
		 * Delete collaboration.
		 * Delete maps/{id}/collaborators/{user_id}
		 * @param {number} id map id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} user_id user id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Collaborator} Contains deleted collaborator.
		 */
		Maps_idCollaborators_user_idDelete(id: number, user_id: number, headersHandler?: () => HttpHeaders): Observable<Collaborator> {
			return this.http.delete<Collaborator>(this.baseUri + 'maps/' + id + '/collaborators/' + user_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update collaborator
		 * Update collaborator. Wrap collaborator parameters in [collaborator]
		 * Patch maps/{id}/collaborators/{user_id}
		 * @param {number} id map id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} user_id user id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CollaboratorEditable} requestBody collaborator attributes
		 * @return {Collaborator} Contains collaborator data
		 */
		Maps_idCollaborators_user_idPatch(id: number, user_id: number, requestBody: CollaboratorEditable, headersHandler?: () => HttpHeaders): Observable<Collaborator> {
			return this.http.patch<Collaborator>(this.baseUri + 'maps/' + id + '/collaborators/' + user_id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List comments for a given map
		 * List comments for a given map.
		 * Get maps/{id}/comments
		 * @param {number} id Id of map
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Comment>} Contains list of comments.
		 */
		Maps_idCommentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Comment>> {
			return this.http.get<Array<Comment>>(this.baseUri + 'maps/' + id + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create map comment
		 * Create map comment. Wrap comment parameters in [comment].
		 * Post maps/{id}/comments
		 * @param {number} id map id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CommentEditable} requestBody comment attributes
		 * @return {Comment} Contains comment data
		 */
		Maps_idCommentsPost(id: number, requestBody: CommentEditable, headersHandler?: () => HttpHeaders): Observable<Comment> {
			return this.http.post<Comment>(this.baseUri + 'maps/' + id + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List respots of a map
		 * List respots of a map.
		 * Get maps/{id}/respots
		 * @param {number} id Map Id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Respot>} Contains list of respots.
		 */
		Maps_idRespotsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Respot>> {
			return this.http.get<Array<Respot>>(this.baseUri + 'maps/' + id + '/respots', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List spots for a given map
		 * List spots for a given map.
		 * Get maps/{id}/spots
		 * @param {number} id Id of map
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Maps_idSpotsGetByOrderOrder} order Order of spots
		 * @return {Array<Spot>} Contains list of spots.
		 */
		Maps_idSpotsGetByOrder(id: number, order: Maps_idSpotsGetByOrderOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Spot>> {
			return this.http.get<Array<Spot>>(this.baseUri + 'maps/' + id + '/spots?order=' + order, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create spot
		 * Create spot. Wrap parameters in [spot]. To add a spot picture pass a base64 encoded string to [spot][picture].
		 * Post maps/{id}/spots
		 * @param {number} id Id of map
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {SpotEditable} requestBody spot attributes
		 * @return {Spot} Contains spot data
		 */
		Maps_idSpotsPost(id: number, requestBody: SpotEditable, headersHandler?: () => HttpHeaders): Observable<Spot> {
			return this.http.post<Spot>(this.baseUri + 'maps/' + id + '/spots', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List subscriptions for a given map
		 * List subscriptions for a given map.
		 * Get maps/{id}/subscriptions
		 * @param {number} id Id of map
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Subscription>} Contains list of subscriptions.
		 */
		Maps_idSubscriptionsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Subscription>> {
			return this.http.get<Array<Subscription>>(this.baseUri + 'maps/' + id + '/subscriptions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unsubscribe from map
		 * Unsubscribe from map.
		 * Delete maps/{id}/subscriptions
		 * @param {number} id map id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Subscription} Contains deleted subscription.
		 */
		Maps_idSubscriptionsDelete(id: number, headersHandler?: () => HttpHeaders): Observable<Subscription> {
			return this.http.delete<Subscription>(this.baseUri + 'maps/' + id + '/subscriptions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get spot
		 * Get basic information about a spot
		 * Get maps/{map_id}/spots/{id}
		 * @param {number} id Id of spot
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} map_id Id of map
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Spot} Contains spot data
		 */
		Maps_map_idSpots_idGet(id: number, map_id: number, headersHandler?: () => HttpHeaders): Observable<Spot> {
			return this.http.get<Spot>(this.baseUri + 'maps/' + map_id + '/spots/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete respot from map by spot id
		 * Delete respot from map by spot id.
		 * Delete maps/{map_id}/spots/{spot_id}/respot
		 * @param {number} map_id Map Id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} spot_id Spot Id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Respot} Contains deleted respot.
		 */
		Maps_map_idSpots_spot_idRespotDelete(map_id: number, spot_id: number, headersHandler?: () => HttpHeaders): Observable<Respot> {
			return this.http.delete<Respot>(this.baseUri + 'maps/' + map_id + '/spots/' + spot_id + '/respot', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List maps that user can respot to
		 * List maps that user can respot to.
		 * Get respot_maps
		 * @return {Array<Map>} Contains list of maps.
		 */
		Respot_mapsGet(headersHandler?: () => HttpHeaders): Observable<Array<Map>> {
			return this.http.get<Array<Map>>(this.baseUri + 'respot_maps', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get respot
		 * Get basic information about a respot
		 * Get respots/{id}
		 * @param {number} id Id of respot
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Respot} Contains respot data.
		 */
		Respots_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<Respot> {
			return this.http.get<Respot>(this.baseUri + 'respots/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete respot
		 * Delete respot.
		 * Delete respots/{id}
		 * @param {number} id Respot Id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Respot} Contains deleted respot.
		 */
		Respots_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<Respot> {
			return this.http.delete<Respot>(this.baseUri + 'respots/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get secret access token to share map
		 * Get secret access token of an uebermap with access set to 'Secret link'. Pass the 'token' on every request you make to access this uebermap and its resources. F.e. token=1-x_gqu7eLBe3uKoAGAGXy
		 * Get share/map/{id}
		 * @param {number} id Id of map
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {MapWithAuthToken} Contains map data and a secret token to access this map.
		 */
		ShareMap_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<MapWithAuthToken> {
			return this.http.get<MapWithAuthToken>(this.baseUri + 'share/map/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List your own spots
		 * List your own spots.
		 * Get spots
		 * @param {Maps_idSpotsGetByOrderOrder} order Order of spots
		 * @return {Array<Spot>} Contains list of spots.
		 */
		SpotsGetByOrder(order: Maps_idSpotsGetByOrderOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Spot>> {
			return this.http.get<Array<Spot>>(this.baseUri + 'spots?order=' + order, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search spots
		 * Search spots
		 * Get spots/search
		 * @param {string} q Query
		 * @param {number} d Distance. Diameter of search radius in meter (default: 2000 meter)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} lat Latitude for search radius (2 km)
		 *     Type: double
		 * @param {number} lon Longitude for search radius (2 km)
		 *     Type: double
		 * @return {Spot} Contains spot data.
		 */
		SpotsSearchGetByQAndDAndLatAndLon(q: string | null | undefined, d: number | null | undefined, lat: number | null | undefined, lon: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Spot> {
			return this.http.get<Spot>(this.baseUri + 'spots/search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&d=' + d + '&lat=' + lat + '&lon=' + lon, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete spot
		 * Delete spot.
		 * Delete spots/{id}
		 * @param {number} id spot id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Spot} Contains deleted spot.
		 */
		Spots_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<Spot> {
			return this.http.delete<Spot>(this.baseUri + 'spots/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update spot
		 * Update spot. Wrap parameters in [spot]. To update the spot picture pass a base64 encoded string to [spot][picture].
		 * Patch spots/{id}
		 * @param {number} id spot id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {SpotEditable} requestBody spot attributes
		 * @return {Spot} Contains spot data
		 */
		Spots_idPatch(id: number, requestBody: SpotEditable, headersHandler?: () => HttpHeaders): Observable<Spot> {
			return this.http.patch<Spot>(this.baseUri + 'spots/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List attachments for a given spot
		 * List attachments for a given spot.
		 * Get spots/{id}/attachments
		 * @param {number} id Spot id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Attachment>} Contains list of attachments.
		 */
		Spots_idAttachmentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Attachment>> {
			return this.http.get<Array<Attachment>>(this.baseUri + 'spots/' + id + '/attachments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Upload spot attachment
		 * Upload spot attachment. Wrap attachment parameters in [attachment]
		 * Post spots/{id}/attachments
		 * @param {number} id Spot id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} requestBody Base64 encoded image
		 * @return {Attachment} Contains attachment data
		 */
		Spots_idAttachmentsPost(id: number, requestBody: string, headersHandler?: () => HttpHeaders): Observable<Attachment> {
			return this.http.post<Attachment>(this.baseUri + 'spots/' + id + '/attachments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List comments for a given spot
		 * List comments for a given spot.
		 * Get spots/{id}/comments
		 * @param {number} id Id of spot
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Comment>} Contains list of comments.
		 */
		Spots_idCommentsGet(id: number, headersHandler?: () => HttpHeaders): Observable<Array<Comment>> {
			return this.http.get<Array<Comment>>(this.baseUri + 'spots/' + id + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create spot comment
		 * Create spot comment. Wrap comment parameters in [comment].
		 * Post spots/{id}/comments
		 * @param {number} id spot id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CommentEditable} requestBody comment attributes
		 * @return {Comment} Contains comment data
		 */
		Spots_idCommentsPost(id: number, requestBody: CommentEditable, headersHandler?: () => HttpHeaders): Observable<Comment> {
			return this.http.post<Comment>(this.baseUri + 'spots/' + id + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List events for a given spot
		 * List maps for a given spot.
		 * Get spots/{id}/events
		 * @param {number} id Id of spot
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} timeframe_start Begin of time range of event (ISO 8601 date format).
		 * @param {string} timeframe_end End of time range of event (ISO 8601 date format).
		 * @param {string} bounds To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792
		 * @return {Array<Event>} Contains list of events.
		 */
		Spots_idEventsGetByTimeframe_startAndTimeframe_endAndBounds(id: number, timeframe_start: string | null | undefined, timeframe_end: string | null | undefined, bounds: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'spots/' + id + '/events?timeframe_start=' + (timeframe_start == null ? '' : encodeURIComponent(timeframe_start)) + '&timeframe_end=' + (timeframe_end == null ? '' : encodeURIComponent(timeframe_end)) + '&bounds=' + (bounds == null ? '' : encodeURIComponent(bounds)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create event
		 * Create event. Wrap map parameters in [event].
		 * Post spots/{id}/events
		 * @param {number} id Spot id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {EventEditable} requestBody Event attributes
		 * @return {Event} Contains event data
		 */
		Spots_idEventsPost(id: number, requestBody: EventEditable, headersHandler?: () => HttpHeaders): Observable<Event> {
			return this.http.post<Event>(this.baseUri + 'spots/' + id + '/events', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Respot a spot onto a map
		 * Respot a spot onto a map.
		 * Post spots/{id}/respots
		 * @param {number} id Spot Id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} requestBody Map Id
		 * @return {Respot} Contains respot data.
		 */
		Spots_idRespotsPost(id: number, requestBody: string, headersHandler?: () => HttpHeaders): Observable<Respot> {
			return this.http.post<Respot>(this.baseUri + 'spots/' + id + '/respots', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List subscriptions. Pass no parameters to get own subscriptions
		 * List subscriptions.
		 * Get subscriptions
		 * @param {number} user_id Id of user
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} map_id Id of map
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Subscription>} Contains list of subscriptions.
		 */
		SubscriptionsGetByUser_idAndMap_id(user_id: number | null | undefined, map_id: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Subscription>> {
			return this.http.get<Array<Subscription>>(this.baseUri + 'subscriptions?user_id=' + user_id + '&map_id=' + map_id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create map subscription
		 * Create map subscription.
		 * Post subscriptions
		 * @param {string} requestBody map id
		 * @return {Subscription} Contains subscription data.
		 */
		SubscriptionsPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'subscriptions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List latest maps
		 * List latest maps.
		 * Get trends/latest
		 * @return {Array<Map>} Contains list of maps.
		 */
		TrendsLatestGet(headersHandler?: () => HttpHeaders): Observable<Array<Map>> {
			return this.http.get<Array<Map>>(this.baseUri + 'trends/latest', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List recommended maps
		 * List recommended maps.
		 * Get trends/recommended
		 * @return {Array<Map>} Contains list of maps.
		 */
		TrendsRecommendedGet(headersHandler?: () => HttpHeaders): Observable<Array<Map>> {
			return this.http.get<Array<Map>>(this.baseUri + 'trends/recommended', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search users
		 * Search users
		 * Get users/search
		 * @param {string} q Query
		 * @return {User} Contains users data.
		 */
		UsersSearchGetByQ(q: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'users/search?q=' + (q == null ? '' : encodeURIComponent(q)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get user profile
		 * Get profile a user
		 * Get users/{id}
		 * @param {number} id Id of user
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {User} Contains user data
		 */
		Users_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'users/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List maps for a given user
		 * List maps for a given user.
		 * Get users/{user_id}/maps
		 * @param {number} user_id Id of user
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Map>} Contains list of maps.
		 */
		Users_user_idMapsGet(user_id: number, headersHandler?: () => HttpHeaders): Observable<Array<Map>> {
			return this.http.get<Array<Map>>(this.baseUri + 'users/' + user_id + '/maps', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum Maps_idSpotsGetByOrderOrder { created_at_asc = 0, created_at_desc = 1, updated_at_asc = 2, updated_at_desc = 3, title_asc = 4, title_desc = 5 }

}

