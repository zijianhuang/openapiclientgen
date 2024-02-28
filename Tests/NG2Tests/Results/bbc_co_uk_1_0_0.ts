import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AncestorSummary {

		/** Required */
		ancestor_type: string;

		/** Required */
		id: string;

		/** Required */
		images: Array<Image>;

		/** Required */
		titles: AncestorTitles;

		/** Required */
		type: string;
	}
	export interface AncestorSummaryFormProperties {

		/** Required */
		ancestor_type: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAncestorSummaryFormGroup() {
		return new FormGroup<AncestorSummaryFormProperties>({
			ancestor_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Image {

		/** Required */
		id: string;

		/** Required */
		image_type: string;

		/** Required */
		template_url: string;

		/** Required */
		type: string;
	}
	export interface ImageFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		image_type: FormControl<string | null | undefined>,

		/** Required */
		template_url: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			image_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AncestorTitles {

		/** Required */
		title: string;

		/** Required */
		type: string;
	}
	export interface AncestorTitlesFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAncestorTitlesFormGroup() {
		return new FormGroup<AncestorTitlesFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AvailableVersions {

		/** Required */
		available: string;

		/** Required */
		available_from_date: string;

		/** Required */
		available_to_date: string;

		/** Required */
		duration: string;

		/** Required */
		has_guidance: boolean;

		/** Required */
		media_set: string;

		/** Required */
		type: string;

		/** Required */
		version_pid: string;

		/** Required */
		version_type: string;
	}
	export interface AvailableVersionsFormProperties {

		/** Required */
		available: FormControl<string | null | undefined>,

		/** Required */
		available_from_date: FormControl<string | null | undefined>,

		/** Required */
		available_to_date: FormControl<string | null | undefined>,

		/** Required */
		duration: FormControl<string | null | undefined>,

		/** Required */
		has_guidance: FormControl<boolean | null | undefined>,

		/** Required */
		media_set: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		version_pid: FormControl<string | null | undefined>,

		/** Required */
		version_type: FormControl<string | null | undefined>,
	}
	export function CreateAvailableVersionsFormGroup() {
		return new FormGroup<AvailableVersionsFormProperties>({
			available: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			available_from_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			available_to_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			has_guidance: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			media_set: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version_pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body {

		/** Required */
		category_id: string;

		/** Required */
		platform: BodyPlatform;
	}
	export interface BodyFormProperties {

		/** Required */
		category_id: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<BodyPlatform | null | undefined>,
	}
	export function CreateBodyFormGroup() {
		return new FormGroup<BodyFormProperties>({
			category_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<BodyPlatform | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BodyPlatform { responsiveweb = 'responsiveweb', app = 'app' }

	export interface Body_1 {

		/** Required */
		category_id: string;

		/** Required */
		platform: BodyPlatform;
	}
	export interface Body_1FormProperties {

		/** Required */
		category_id: FormControl<string | null | undefined>,

		/** Required */
		platform: FormControl<BodyPlatform | null | undefined>,
	}
	export function CreateBody_1FormGroup() {
		return new FormGroup<Body_1FormProperties>({
			category_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			platform: new FormControl<BodyPlatform | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_2 {

		/** Required */
		platform: BodyPlatform;

		/** Required */
		service_id: string;
	}
	export interface Body_2FormProperties {

		/** Required */
		platform: FormControl<BodyPlatform | null | undefined>,

		/** Required */
		service_id: FormControl<string | null | undefined>,
	}
	export function CreateBody_2FormGroup() {
		return new FormGroup<Body_2FormProperties>({
			platform: new FormControl<BodyPlatform | null | undefined>(undefined, [Validators.required]),
			service_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_3 {

		/** Required */
		platform: BodyPlatform;

		/** Required */
		service_id: string;
	}
	export interface Body_3FormProperties {

		/** Required */
		platform: FormControl<BodyPlatform | null | undefined>,

		/** Required */
		service_id: FormControl<string | null | undefined>,
	}
	export function CreateBody_3FormGroup() {
		return new FormGroup<Body_3FormProperties>({
			platform: new FormControl<BodyPlatform | null | undefined>(undefined, [Validators.required]),
			service_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body_4 {

		/** Required */
		action: Body_4Action;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elapsed_time: number;

		/** Required */
		pid: string;

		/** Required */
		resource_type: Body_4Resource_type;

		/** Required */
		version_pid: string;
	}
	export interface Body_4FormProperties {

		/** Required */
		action: FormControl<Body_4Action | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elapsed_time: FormControl<number | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		resource_type: FormControl<Body_4Resource_type | null | undefined>,

		/** Required */
		version_pid: FormControl<string | null | undefined>,
	}
	export function CreateBody_4FormGroup() {
		return new FormGroup<Body_4FormProperties>({
			action: new FormControl<Body_4Action | null | undefined>(undefined, [Validators.required]),
			elapsed_time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_type: new FormControl<Body_4Resource_type | null | undefined>(undefined, [Validators.required]),
			version_pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Body_4Action { started = 'started', ended = 'ended', paused = 'paused', heartbeat = 'heartbeat' }

	export enum Body_4Resource_type { episode = 'episode', clip = 'clip' }

	export interface BrandSummary {
		available_versions?: Array<AvailableVersions>;

		/** Required */
		images: Array<Image>;

		/** Required */
		latest_available_episodes: Array<EpisodeSummary>;

		/** Required */
		network_summary: NetworkSummary;

		/** Required */
		pid: string;

		/** Required */
		short_synopsis: string;

		/** Required */
		titles: ProgrammeTitles;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_available_episodes: number;

		/** Required */
		type: BrandSummaryType;
	}
	export interface BrandSummaryFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		short_synopsis: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_available_episodes: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<BrandSummaryType | null | undefined>,
	}
	export function CreateBrandSummaryFormGroup() {
		return new FormGroup<BrandSummaryFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short_synopsis: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_available_episodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BrandSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EpisodeSummary {

		/** Required */
		ancestors: Array<AncestorSummary>;

		/** Required */
		available_versions: Array<AvailableVersions>;

		/** Required */
		images: Array<Image>;

		/** Required */
		media_type: string;

		/** Required */
		network_summary: NetworkSummary;

		/** Required */
		pid: string;

		/** Required */
		release_date: string;

		/** Required */
		short_synopsis: string;

		/** Required */
		titles: ProgrammeTitles;

		/** Required */
		type: EpisodeSummaryType;
	}
	export interface EpisodeSummaryFormProperties {

		/** Required */
		media_type: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		release_date: FormControl<string | null | undefined>,

		/** Required */
		short_synopsis: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<EpisodeSummaryType | null | undefined>,
	}
	export function CreateEpisodeSummaryFormGroup() {
		return new FormGroup<EpisodeSummaryFormProperties>({
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short_synopsis: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EpisodeSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworkSummary {

		/** Required */
		active: boolean;

		/** Required */
		group: string;

		/** Required */
		id: string;

		/** Required */
		key: string;

		/** Required */
		titles: NetworkTitles;

		/** Required */
		type: string;
	}
	export interface NetworkSummaryFormProperties {

		/** Required */
		active: FormControl<boolean | null | undefined>,

		/** Required */
		group: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSummaryFormGroup() {
		return new FormGroup<NetworkSummaryFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworkTitles {

		/** Required */
		long_title: string;

		/** Required */
		short_title: string;

		/** Required */
		type: string;
	}
	export interface NetworkTitlesFormProperties {

		/** Required */
		long_title: FormControl<string | null | undefined>,

		/** Required */
		short_title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkTitlesFormGroup() {
		return new FormGroup<NetworkTitlesFormProperties>({
			long_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProgrammeTitles {
		display_title?: string | null;
		entity_title?: string | null;
		primary_title?: string | null;
		secondary_title?: string | null;

		/** Required */
		type: string;
	}
	export interface ProgrammeTitlesFormProperties {
		display_title: FormControl<string | null | undefined>,
		entity_title: FormControl<string | null | undefined>,
		primary_title: FormControl<string | null | undefined>,
		secondary_title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProgrammeTitlesFormGroup() {
		return new FormGroup<ProgrammeTitlesFormProperties>({
			display_title: new FormControl<string | null | undefined>(undefined),
			entity_title: new FormControl<string | null | undefined>(undefined),
			primary_title: new FormControl<string | null | undefined>(undefined),
			secondary_title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EpisodeSummaryType { episode_summary = 'episode_summary' }

	export enum BrandSummaryType { brand_summary = 'brand_summary' }

	export interface Broadcast {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: number;

		/** Required */
		end: string;

		/** Required */
		is_audio_described: boolean;

		/** Required */
		is_blanked: boolean;

		/** Required */
		is_critical: boolean;

		/** Required */
		is_live: boolean;

		/** Required */
		is_repeat: boolean;

		/** Required */
		is_webcast: boolean;

		/** Required */
		pid: string;
		programme?: ProgrammeSummary;

		/** Required */
		service_id: string;

		/** Required */
		start: string;

		/** Required */
		type: string;

		/** Required */
		version_pid: string;
	}
	export interface BroadcastFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** Required */
		end: FormControl<string | null | undefined>,

		/** Required */
		is_audio_described: FormControl<boolean | null | undefined>,

		/** Required */
		is_blanked: FormControl<boolean | null | undefined>,

		/** Required */
		is_critical: FormControl<boolean | null | undefined>,

		/** Required */
		is_live: FormControl<boolean | null | undefined>,

		/** Required */
		is_repeat: FormControl<boolean | null | undefined>,

		/** Required */
		is_webcast: FormControl<boolean | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		service_id: FormControl<string | null | undefined>,

		/** Required */
		start: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		version_pid: FormControl<string | null | undefined>,
	}
	export function CreateBroadcastFormGroup() {
		return new FormGroup<BroadcastFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			end: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_audio_described: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_blanked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_critical: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_live: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_repeat: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_webcast: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version_pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProgrammeSummary {

		/** Required */
		pid: string;

		/** Required */
		type: ProgrammeSummaryType;
	}
	export interface ProgrammeSummaryFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ProgrammeSummaryType | null | undefined>,
	}
	export function CreateProgrammeSummaryFormGroup() {
		return new FormGroup<ProgrammeSummaryFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ProgrammeSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProgrammeSummaryType { brand_summary = 'brand_summary', series_summary = 'series_summary', episode_summary = 'episode_summary', clip_summary = 'clip_summary' }

	export interface BroadcastsResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		results: Array<Broadcast>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface BroadcastsResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBroadcastsResponseFormGroup() {
		return new FormGroup<BroadcastsResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoriesResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		results: Array<Category>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface CategoriesResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCategoriesResponseFormGroup() {
		return new FormGroup<CategoriesResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Category {

		/** Required */
		category_type: string;

		/** Required */
		child_categories: Array<ChildCategory>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		depth: number;

		/** Required */
		id: string;

		/** Required */
		pip_id: string;

		/** Required */
		title: string;

		/** Required */
		type: string;

		/** Required */
		url_key: string;
	}
	export interface CategoryFormProperties {

		/** Required */
		category_type: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		depth: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		pip_id: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		url_key: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			category_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			depth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pip_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChildCategory {

		/** Required */
		category_type: string;

		/** Required */
		child_categories: Array<ChildCategory>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		depth: number;

		/** Required */
		id: string;

		/** Required */
		pip_id: string;

		/** Required */
		title: string;

		/** Required */
		type: string;

		/** Required */
		url_key: string;
	}
	export interface ChildCategoryFormProperties {

		/** Required */
		category_type: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		depth: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		pip_id: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		url_key: FormControl<string | null | undefined>,
	}
	export function CreateChildCategoryFormGroup() {
		return new FormGroup<ChildCategoryFormProperties>({
			category_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			depth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pip_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryError {

		/** Required */
		href: string;

		/** Required */
		id: string;

		/** Required */
		message: string;

		/** Required */
		replied_at: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface CategoryErrorFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		replied_at: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateCategoryErrorFormGroup() {
		return new FormGroup<CategoryErrorFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoryErrorResponse {

		/** Required */
		'$schema': string;

		/** Required */
		errors: Array<CategoryError>;
	}
	export interface CategoryErrorResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,
	}
	export function CreateCategoryErrorResponseFormGroup() {
		return new FormGroup<CategoryErrorResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategorySummary {

		/** Required */
		category_type: string;

		/** Required */
		id: string;

		/** Required */
		key: string;

		/** Required */
		title: string;

		/** Required */
		type: string;
	}
	export interface CategorySummaryFormProperties {

		/** Required */
		category_type: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCategorySummaryFormGroup() {
		return new FormGroup<CategorySummaryFormProperties>({
			category_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClipSummary {

		/** Required */
		ancestors: Array<AncestorSummary>;

		/** Required */
		available_versions: Array<AvailableVersions>;

		/** Required */
		images: Array<Image>;

		/** Required */
		media_type: string;

		/** Required */
		network_summary: NetworkSummary;

		/** Required */
		pid: string;

		/** Required */
		release_date: string;

		/** Required */
		short_synopsis: string;

		/** Required */
		titles: ProgrammeTitles;

		/** Required */
		type: ClipSummaryType;
	}
	export interface ClipSummaryFormProperties {

		/** Required */
		media_type: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		release_date: FormControl<string | null | undefined>,

		/** Required */
		short_synopsis: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ClipSummaryType | null | undefined>,
	}
	export function CreateClipSummaryFormGroup() {
		return new FormGroup<ClipSummaryFormProperties>({
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short_synopsis: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ClipSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClipSummaryType { clip_summary = 'clip_summary' }

	export interface Contact {

		/** Required */
		handle: string;

		/** Required */
		name: string;

		/** Required */
		service: string;

		/** Required */
		url: string;
	}
	export interface ContactFormProperties {

		/** Required */
		handle: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		service: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			handle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DateRange {

		/** Required */
		end: string;

		/** Required */
		start: string;
	}
	export interface DateRangeFormProperties {

		/** Required */
		end: FormControl<string | null | undefined>,

		/** Required */
		start: FormControl<string | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			end: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisplayModule {
		description?: string | null;
		title?: string | null;
		type?: string | null;
		uri?: string | null;
	}
	export interface DisplayModuleFormProperties {
		description: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateDisplayModuleFormGroup() {
		return new FormGroup<DisplayModuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Empty {
	}
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}

	export interface Error {

		/** Required */
		href: string;

		/** Required */
		id: string;

		/** Required */
		message: string;

		/** Required */
		replied_at: string;
	}
	export interface ErrorFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		replied_at: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorResponse {

		/** Required */
		'$schema': string;

		/** Required */
		errors: Array<Error>;
	}
	export interface ErrorResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExperienceResponse {

		/** Required */
		'$schema': string;

		/** Required */
		data: Array<DisplayModule>;
	}
	export interface ExperienceResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,
	}
	export function CreateExperienceResponseFormGroup() {
		return new FormGroup<ExperienceResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExternalPartner {

		/** Required */
		type: string;

		/** Required */
		value: string;
	}
	export interface ExternalPartnerFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateExternalPartnerFormGroup() {
		return new FormGroup<ExternalPartnerFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MetaData {

		/** Required */
		miscellaneous: Miscellaneous;

		/** Required */
		origin: Origin;

		/** Required */
		programme_type: string;

		/** Required */
		type: string;
	}
	export interface MetaDataFormProperties {

		/** Required */
		programme_type: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMetaDataFormGroup() {
		return new FormGroup<MetaDataFormProperties>({
			programme_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Miscellaneous {

		/** Required */
		title: string;
	}
	export interface MiscellaneousFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateMiscellaneousFormGroup() {
		return new FormGroup<MiscellaneousFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Origin {

		/** Required */
		type: string;
	}
	export interface OriginFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOriginFormGroup() {
		return new FormGroup<OriginFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicExportError {

		/** Required */
		message: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replied_at: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface MusicExportErrorFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replied_at: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateMusicExportErrorFormGroup() {
		return new FormGroup<MusicExportErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicExportErrorResponse {

		/** Required */
		errors: Array<MusicExportError>;

		/** Required */
		schema: string;
	}
	export interface MusicExportErrorResponseFormProperties {

		/** Required */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateMusicExportErrorResponseFormGroup() {
		return new FormGroup<MusicExportErrorResponseFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicExportJob {

		/** Required */
		created_at: string;

		/** Required */
		id: string;

		/** Required */
		job_id: string;

		/** Required */
		status: string;

		/** Required */
		vendor: string;
	}
	export interface MusicExportJobFormProperties {

		/** Required */
		created_at: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		job_id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateMusicExportJobFormGroup() {
		return new FormGroup<MusicExportJobFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			job_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vendor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicExportPreferences {

		/** Required */
		access_expires_at: string;

		/** Required */
		access_token: string;

		/** Required */
		add_plus_export: boolean;

		/** Required */
		authorization_code: string;

		/** Required */
		last_export: string;

		/** Required */
		legacy_state: string;

		/** Required */
		partner_id: string;

		/** Required */
		refresh_token: string;

		/** Required */
		terms: boolean;

		/** Required */
		vendor: string;
	}
	export interface MusicExportPreferencesFormProperties {

		/** Required */
		access_expires_at: FormControl<string | null | undefined>,

		/** Required */
		access_token: FormControl<string | null | undefined>,

		/** Required */
		add_plus_export: FormControl<boolean | null | undefined>,

		/** Required */
		authorization_code: FormControl<string | null | undefined>,

		/** Required */
		last_export: FormControl<string | null | undefined>,

		/** Required */
		legacy_state: FormControl<string | null | undefined>,

		/** Required */
		partner_id: FormControl<string | null | undefined>,

		/** Required */
		refresh_token: FormControl<string | null | undefined>,

		/** Required */
		terms: FormControl<boolean | null | undefined>,

		/** Required */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateMusicExportPreferencesFormGroup() {
		return new FormGroup<MusicExportPreferencesFormProperties>({
			access_expires_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			access_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			add_plus_export: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			authorization_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_export: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			legacy_state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			partner_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			refresh_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			terms: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			vendor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicExportPreferencesResponse {

		/** Required */
		method: string;

		/** Required */
		replied_at: string;

		/** Required */
		results: Array<MusicExportPreferences>;

		/** Required */
		schema: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface MusicExportPreferencesResponseFormProperties {

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Required */
		replied_at: FormControl<string | null | undefined>,

		/** Required */
		schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateMusicExportPreferencesResponseFormGroup() {
		return new FormGroup<MusicExportPreferencesResponseFormProperties>({
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicExportSuccess {

		/** Required */
		method: string;

		/** Required */
		replied_at: string;

		/** Required */
		schema: string;
	}
	export interface MusicExportSuccessFormProperties {

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Required */
		replied_at: FormControl<string | null | undefined>,

		/** Required */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateMusicExportSuccessFormGroup() {
		return new FormGroup<MusicExportSuccessFormProperties>({
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicPopularityArtist {

		/** Required */
		gid: string;

		/** Required */
		id: string;

		/** Required */
		imagePid: string;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: number;

		/** Required */
		sortName: string;
	}
	export interface MusicPopularityArtistFormProperties {

		/** Required */
		gid: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		imagePid: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: FormControl<number | null | undefined>,

		/** Required */
		sortName: FormControl<string | null | undefined>,
	}
	export function CreateMusicPopularityArtistFormGroup() {
		return new FormGroup<MusicPopularityArtistFormProperties>({
			gid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imagePid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sortName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicPopularityArtists {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit?: number | null;

		/** Required */
		method: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset?: number | null;

		/** Required */
		repliedAt: string;

		/** Required */
		results: Array<MusicPopularityArtist>;

		/** Required */
		schema: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface MusicPopularityArtistsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit: FormControl<number | null | undefined>,

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset: FormControl<number | null | undefined>,

		/** Required */
		repliedAt: FormControl<string | null | undefined>,

		/** Required */
		schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateMusicPopularityArtistsFormGroup() {
		return new FormGroup<MusicPopularityArtistsFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined),
			repliedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicPopularityError {
		errors?: Array<string>;
		schema?: string | null;
	}
	export interface MusicPopularityErrorFormProperties {
		schema: FormControl<string | null | undefined>,
	}
	export function CreateMusicPopularityErrorFormGroup() {
		return new FormGroup<MusicPopularityErrorFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MusicPopularityPlaylist {

		/** Required */
		categories: Array<string>;

		/** Required */
		commentsEnabled: boolean;

		/** Required */
		description: string;

		/** Required */
		externalPartners: Array<ExternalPartner>;

		/** Required */
		genre: string;

		/** Required */
		id: string;

		/** Required */
		imagePid: string;

		/** Required */
		imageUrl: string;

		/** Required */
		kind: string;

		/** Required */
		mood: string;

		/** Required */
		oneOff: boolean;

		/** Required */
		playlistPlaybackType: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: number;

		/** Required */
		serviceId: string;

		/** Required */
		title: string;

		/** Required */
		updatedAt: string;

		/** Required */
		visibility: string;

		/** Required */
		wideImagePid: string;

		/** Required */
		wideImageUrl: string;
	}
	export interface MusicPopularityPlaylistFormProperties {

		/** Required */
		commentsEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		genre: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		imagePid: FormControl<string | null | undefined>,

		/** Required */
		imageUrl: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<string | null | undefined>,

		/** Required */
		mood: FormControl<string | null | undefined>,

		/** Required */
		oneOff: FormControl<boolean | null | undefined>,

		/** Required */
		playlistPlaybackType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: FormControl<number | null | undefined>,

		/** Required */
		serviceId: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		updatedAt: FormControl<string | null | undefined>,

		/** Required */
		visibility: FormControl<string | null | undefined>,

		/** Required */
		wideImagePid: FormControl<string | null | undefined>,

		/** Required */
		wideImageUrl: FormControl<string | null | undefined>,
	}
	export function CreateMusicPopularityPlaylistFormGroup() {
		return new FormGroup<MusicPopularityPlaylistFormProperties>({
			commentsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			genre: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imagePid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oneOff: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			playlistPlaybackType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			visibility: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wideImagePid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wideImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicPopularityPlaylists {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit?: number | null;

		/** Required */
		method: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset?: number | null;

		/** Required */
		repliedAt: string;

		/** Required */
		results: Array<MusicPopularityPlaylist>;

		/** Required */
		schema: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface MusicPopularityPlaylistsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit: FormControl<number | null | undefined>,

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset: FormControl<number | null | undefined>,

		/** Required */
		repliedAt: FormControl<string | null | undefined>,

		/** Required */
		schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateMusicPopularityPlaylistsFormGroup() {
		return new FormGroup<MusicPopularityPlaylistsFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined),
			repliedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicPopularityTrack {
		album?: string | null;
		artistGid?: string | null;
		artistName?: string | null;
		artists?: Array<MusicTrackArtist>;
		baseTitle?: string | null;
		classical?: boolean | null;

		/** Required */
		id: string;
		mergedIds?: Array<string>;
		preferredMultiplayRecordAudio?: MusicRecordAudio;
		preferredRecordAudio?: MusicRecordAudio;
		radioEdit?: boolean | null;
		recordAudio?: Array<MusicRecordAudio>;
		recordImageHref?: string | null;
		recordImagePid?: string | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: number;
		title?: string | null;
		type?: string | null;
	}
	export interface MusicPopularityTrackFormProperties {
		album: FormControl<string | null | undefined>,
		artistGid: FormControl<string | null | undefined>,
		artistName: FormControl<string | null | undefined>,
		baseTitle: FormControl<string | null | undefined>,
		classical: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		radioEdit: FormControl<boolean | null | undefined>,
		recordImageHref: FormControl<string | null | undefined>,
		recordImagePid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateMusicPopularityTrackFormGroup() {
		return new FormGroup<MusicPopularityTrackFormProperties>({
			album: new FormControl<string | null | undefined>(undefined),
			artistGid: new FormControl<string | null | undefined>(undefined),
			artistName: new FormControl<string | null | undefined>(undefined),
			baseTitle: new FormControl<string | null | undefined>(undefined),
			classical: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			radioEdit: new FormControl<boolean | null | undefined>(undefined),
			recordImageHref: new FormControl<string | null | undefined>(undefined),
			recordImagePid: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MusicTrackArtist {

		/** Required */
		gid: string;

		/** Required */
		imagePid: string;

		/** Required */
		name: string;

		/** Required */
		role: string;

		/** Required */
		sortName: string;
	}
	export interface MusicTrackArtistFormProperties {

		/** Required */
		gid: FormControl<string | null | undefined>,

		/** Required */
		imagePid: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<string | null | undefined>,

		/** Required */
		sortName: FormControl<string | null | undefined>,
	}
	export function CreateMusicTrackArtistFormGroup() {
		return new FormGroup<MusicTrackArtistFormProperties>({
			gid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imagePid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sortName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicRecordAudio {

		/** Required */
		audioType: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: number;

		/** Required */
		identifier: string;

		/** Required */
		resourceType: string;
	}
	export interface MusicRecordAudioFormProperties {

		/** Required */
		audioType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** Required */
		identifier: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateMusicRecordAudioFormGroup() {
		return new FormGroup<MusicRecordAudioFormProperties>({
			audioType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MusicPopularityTracks {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit?: number | null;

		/** Required */
		method: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset?: number | null;

		/** Required */
		repliedAt: string;

		/** Required */
		results: Array<MusicPopularityTrack>;

		/** Required */
		schema: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface MusicPopularityTracksFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit: FormControl<number | null | undefined>,

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset: FormControl<number | null | undefined>,

		/** Required */
		repliedAt: FormControl<string | null | undefined>,

		/** Required */
		schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateMusicPopularityTracksFormGroup() {
		return new FormGroup<MusicPopularityTracksFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined),
			repliedAt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Network {

		/** Required */
		active: boolean;

		/** Required */
		contacts: Array<Contact>;

		/** Required */
		date_ranges: Array<DateRange>;

		/** Required */
		group: string;

		/** Required */
		id: string;

		/** Required */
		international: boolean;

		/** Required */
		key: string;

		/** Required */
		preset: boolean;
		promoted_category_summaries?: Array<CategorySummary>;

		/** Required */
		services: Array<Service>;

		/** Required */
		short_title: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sort: number;

		/** Required */
		title: string;

		/** Required */
		type: string;
	}
	export interface NetworkFormProperties {

		/** Required */
		active: FormControl<boolean | null | undefined>,

		/** Required */
		group: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		international: FormControl<boolean | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		preset: FormControl<boolean | null | undefined>,

		/** Required */
		short_title: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sort: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			international: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preset: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			short_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Service {

		/** Required */
		active: boolean;

		/** Required */
		coverage: string;

		/** Required */
		date_ranges: Array<DateRange>;

		/** Required */
		default: boolean;

		/** Required */
		default_language: string;

		/** Required */
		id: string;

		/** Required */
		region: string;

		/** Required */
		short_title: string;

		/** Required */
		title: string;

		/** Required */
		type: string;
	}
	export interface ServiceFormProperties {

		/** Required */
		active: FormControl<boolean | null | undefined>,

		/** Required */
		coverage: FormControl<string | null | undefined>,

		/** Required */
		default: FormControl<boolean | null | undefined>,

		/** Required */
		default_language: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		short_title: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			coverage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			default: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			default_language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworksResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		results: Array<Network>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface NetworksResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateNetworksResponseFormGroup() {
		return new FormGroup<NetworksResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedCategories {

		/** Required */
		created: string;

		/** Required */
		type: string;
	}
	export interface PersonalisedCategoriesFormProperties {

		/** Required */
		created: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedCategoriesFormGroup() {
		return new FormGroup<PersonalisedCategoriesFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedCategoriesResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface PersonalisedCategoriesResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePersonalisedCategoriesResponseFormGroup() {
		return new FormGroup<PersonalisedCategoriesResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicActivity {

		/** Required */
		action: string;

		/** Required */
		activity: string;

		/** Required */
		added_at: string;

		/** Required */
		data: Array<PersonalisedMusicData>;

		/** Required */
		domain: string;

		/** Required */
		id: string;

		/** Required */
		meta_data: PersonalisedMusicMetaData;

		/** Required */
		type: string;

		/** Required */
		urn: string;
	}
	export interface PersonalisedMusicActivityFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,

		/** Required */
		activity: FormControl<string | null | undefined>,

		/** Required */
		added_at: FormControl<string | null | undefined>,

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		urn: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicActivityFormGroup() {
		return new FormGroup<PersonalisedMusicActivityFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			activity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			added_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicData {
		artist?: PersonalisedMusicArtist;
		clip?: PersonalisedMusicClip;
		genre?: PersonalisedMusicGenre;
		playlist?: PersonalisedMusicPlaylist;
		service?: PersonalisedMusicService;
		track?: PersonalisedMusicTrack;
	}
	export interface PersonalisedMusicDataFormProperties {
	}
	export function CreatePersonalisedMusicDataFormGroup() {
		return new FormGroup<PersonalisedMusicDataFormProperties>({
		});

	}

	export interface PersonalisedMusicArtist {
		id?: string | null;
		images?: Array<PersonalisedMusicImage>;
		name?: string | null;
		role?: string | null;
	}
	export interface PersonalisedMusicArtistFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicArtistFormGroup() {
		return new FormGroup<PersonalisedMusicArtistFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicImage {
		format?: string | null;
		id?: string | null;
		type?: string | null;
	}
	export interface PersonalisedMusicImageFormProperties {
		format: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicImageFormGroup() {
		return new FormGroup<PersonalisedMusicImageFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicClip {
		contributors?: Array<string>;
		endDate?: string | null;
		entityType?: string | null;
		imageUrl?: string | null;
		masterbrandMid?: string | null;
		mediaType?: string | null;
		parentProgramme?: PersonalisedMusicClipParentProgramme;
		pid?: string | null;
		startDate?: string | null;
		synopsis?: string | null;
		title?: string | null;
		version?: PersonalisedMusicVersion;
	}
	export interface PersonalisedMusicClipFormProperties {
		endDate: FormControl<string | null | undefined>,
		entityType: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		masterbrandMid: FormControl<string | null | undefined>,
		mediaType: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,
		synopsis: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicClipFormGroup() {
		return new FormGroup<PersonalisedMusicClipFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			masterbrandMid: new FormControl<string | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			synopsis: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicClipParentProgramme {
		entityType?: string | null;
		pid?: string | null;
		title?: string | null;
	}
	export interface PersonalisedMusicClipParentProgrammeFormProperties {
		entityType: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicClipParentProgrammeFormGroup() {
		return new FormGroup<PersonalisedMusicClipParentProgrammeFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicVersion {
		classical?: boolean | null;
		duration?: string | null;
		radio?: boolean | null;
		vpid?: string | null;
	}
	export interface PersonalisedMusicVersionFormProperties {
		classical: FormControl<boolean | null | undefined>,
		duration: FormControl<string | null | undefined>,
		radio: FormControl<boolean | null | undefined>,
		vpid: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicVersionFormGroup() {
		return new FormGroup<PersonalisedMusicVersionFormProperties>({
			classical: new FormControl<boolean | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			radio: new FormControl<boolean | null | undefined>(undefined),
			vpid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicGenre {
		id?: string | null;
		key?: string | null;
		title?: string | null;
		type?: string | null;
	}
	export interface PersonalisedMusicGenreFormProperties {
		id: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicGenreFormGroup() {
		return new FormGroup<PersonalisedMusicGenreFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicPlaylist {
		description?: string | null;
		images?: Array<PersonalisedMusicImage>;
		playback_type?: string | null;
		service_id?: string | null;
		title?: string | null;
		tracks?: PersonalisedMusicTrack;
		type?: string | null;
		updated_at?: string | null;
		version?: PersonalisedMusicPlaylistVersion;
	}
	export interface PersonalisedMusicPlaylistFormProperties {
		description: FormControl<string | null | undefined>,
		playback_type: FormControl<string | null | undefined>,
		service_id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicPlaylistFormGroup() {
		return new FormGroup<PersonalisedMusicPlaylistFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			playback_type: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicTrack {

		/** Required */
		contributions: Array<PersonalisedMusicTrackContribution>;

		/** Required */
		id: string;

		/** Required */
		images: Array<PersonalisedMusicTrackImage>;

		/** Required */
		media: Array<PersonalisedMusicTrackMedia>;

		/** Required */
		title: string;

		/** Required */
		type: string;

		/** Required */
		version: PersonalisedMusicVersion;
	}
	export interface PersonalisedMusicTrackFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicTrackFormGroup() {
		return new FormGroup<PersonalisedMusicTrackFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicTrackContribution {

		/** Required */
		id: string;

		/** Required */
		images: Array<PersonalisedMusicTrackImage>;

		/** Required */
		name: string;

		/** Required */
		role: string;
	}
	export interface PersonalisedMusicTrackContributionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicTrackContributionFormGroup() {
		return new FormGroup<PersonalisedMusicTrackContributionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicTrackImage {

		/** Required */
		format: string;

		/** Required */
		id: string;

		/** Required */
		type: string;
	}
	export interface PersonalisedMusicTrackImageFormProperties {

		/** Required */
		format: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicTrackImageFormGroup() {
		return new FormGroup<PersonalisedMusicTrackImageFormProperties>({
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicTrackMedia {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: number;

		/** Required */
		format: string;

		/** Required */
		id: string;

		/** Required */
		scope: string;

		/** Required */
		source: string;

		/** Required */
		type: string;
	}
	export interface PersonalisedMusicTrackMediaFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		scope: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicTrackMediaFormGroup() {
		return new FormGroup<PersonalisedMusicTrackMediaFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicPlaylistVersion {
		duration?: string | null;
		expires_at?: string | null;
		id?: string | null;
		starts_at?: string | null;

		/** Required */
		warnings: Array<string>;
	}
	export interface PersonalisedMusicPlaylistVersionFormProperties {
		duration: FormControl<string | null | undefined>,
		expires_at: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		starts_at: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicPlaylistVersionFormGroup() {
		return new FormGroup<PersonalisedMusicPlaylistVersionFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			starts_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicService {
		id?: string | null;
		key?: string | null;
		title?: string | null;
		type?: string | null;
	}
	export interface PersonalisedMusicServiceFormProperties {
		id: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicServiceFormGroup() {
		return new FormGroup<PersonalisedMusicServiceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicMetaData {

		/** Required */
		key: string;
	}
	export interface PersonalisedMusicMetaDataFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicMetaDataFormGroup() {
		return new FormGroup<PersonalisedMusicMetaDataFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicBatchRequest {

		/** Required */
		action: string;
		added_at?: string | null;
		context?: string | null;

		/** Required */
		domain: string;

		/** Required */
		id: string;
		meta_data?: PersonalisedMusicMetaData;

		/** Required */
		type: string;
	}
	export interface PersonalisedMusicBatchRequestFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,
		added_at: FormControl<string | null | undefined>,
		context: FormControl<string | null | undefined>,

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicBatchRequestFormGroup() {
		return new FormGroup<PersonalisedMusicBatchRequestFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			added_at: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicError {

		/** Required */
		message: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replied_at: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface PersonalisedMusicErrorFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		replied_at: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreatePersonalisedMusicErrorFormGroup() {
		return new FormGroup<PersonalisedMusicErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicErrorResponse {

		/** Required */
		errors: Array<PersonalisedMusicError>;

		/** Required */
		schema: string;
	}
	export interface PersonalisedMusicErrorResponseFormProperties {

		/** Required */
		schema: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicErrorResponseFormGroup() {
		return new FormGroup<PersonalisedMusicErrorResponseFormProperties>({
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicRequest {

		/** Required */
		action: string;
		added_at?: string | null;
		context?: string | null;
		meta_data?: PersonalisedMusicMetaData;
	}
	export interface PersonalisedMusicRequestFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,
		added_at: FormControl<string | null | undefined>,
		context: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicRequestFormGroup() {
		return new FormGroup<PersonalisedMusicRequestFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			added_at: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedMusicResponse {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/** Required */
		method: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		replied_at: string;

		/** Required */
		results: Array<PersonalisedMusicActivity>;

		/** Required */
		schema: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface PersonalisedMusicResponseFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** Required */
		method: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** Required */
		replied_at: FormControl<string | null | undefined>,

		/** Required */
		schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePersonalisedMusicResponseFormGroup() {
		return new FormGroup<PersonalisedMusicResponseFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedMusicSuccess {

		/** Required */
		method: string;

		/** Required */
		replied_at: string;

		/** Required */
		schema: string;
	}
	export interface PersonalisedMusicSuccessFormProperties {

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Required */
		replied_at: FormControl<string | null | undefined>,

		/** Required */
		schema: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedMusicSuccessFormGroup() {
		return new FormGroup<PersonalisedMusicSuccessFormProperties>({
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedNetworks {

		/** Required */
		created: string;

		/** Required */
		type: string;
	}
	export interface PersonalisedNetworksFormProperties {

		/** Required */
		created: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedNetworksFormGroup() {
		return new FormGroup<PersonalisedNetworksFormProperties>({
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedNetworksResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		results: Array<PersonalisedNetworks>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface PersonalisedNetworksResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePersonalisedNetworksResponseFormGroup() {
		return new FormGroup<PersonalisedNetworksResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedRadioActivity {

		/** Required */
		action: string;

		/** Required */
		activity: string;

		/** Required */
		added_at: string;

		/** Required */
		data: ProgrammeSummary;

		/** Required */
		domain: string;

		/** Required */
		id: string;

		/** Required */
		metadata: MetaData;

		/** Required */
		type: string;

		/** Required */
		uas_type: string;

		/** Required */
		urn: string;
	}
	export interface PersonalisedRadioActivityFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,

		/** Required */
		activity: FormControl<string | null | undefined>,

		/** Required */
		added_at: FormControl<string | null | undefined>,

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		uas_type: FormControl<string | null | undefined>,

		/** Required */
		urn: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedRadioActivityFormGroup() {
		return new FormGroup<PersonalisedRadioActivityFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			activity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			added_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uas_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			urn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedRadioBatchRequest {

		/** Required */
		action: string;
		added_at?: string | null;
		context?: string | null;
		id?: string | null;
		metadata?: PersonalisedRadioMetaData;
		type?: string | null;
	}
	export interface PersonalisedRadioBatchRequestFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,
		added_at: FormControl<string | null | undefined>,
		context: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedRadioBatchRequestFormGroup() {
		return new FormGroup<PersonalisedRadioBatchRequestFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			added_at: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedRadioMetaData {

		/** Required */
		key: string;
	}
	export interface PersonalisedRadioMetaDataFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedRadioMetaDataFormGroup() {
		return new FormGroup<PersonalisedRadioMetaDataFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedRadioErrorResponse {

		/** Required */
		'$schema': string;

		/** Required */
		errors: Array<PersonalisedRadioErrorResponse_errors>;
	}
	export interface PersonalisedRadioErrorResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedRadioErrorResponseFormGroup() {
		return new FormGroup<PersonalisedRadioErrorResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedRadioErrorResponse_errors {

		/** Required */
		code: string;

		/** Required */
		detail: string;

		/** Required */
		href: string;

		/** Required */
		id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timestamp: number;

		/** Required */
		title: string;
	}
	export interface PersonalisedRadioErrorResponse_errorsFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		detail: FormControl<string | null | undefined>,

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timestamp: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedRadioErrorResponse_errorsFormGroup() {
		return new FormGroup<PersonalisedRadioErrorResponse_errorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedRadioRequest {

		/** Required */
		action: string;
		added_at?: string | null;
		context?: string | null;
		metadata?: PersonalisedRadioMetaData;
	}
	export interface PersonalisedRadioRequestFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,
		added_at: FormControl<string | null | undefined>,
		context: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedRadioRequestFormGroup() {
		return new FormGroup<PersonalisedRadioRequestFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			added_at: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalisedRadioResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/** Required */
		method: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		replied_at: string;

		/** Required */
		results: Array<PersonalisedRadioActivity>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface PersonalisedRadioResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** Required */
		method: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** Required */
		replied_at: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePersonalisedRadioResponseFormGroup() {
		return new FormGroup<PersonalisedRadioResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PersonalisedRadioSuccessResponse {

		/** Required */
		'$schema': string;

		/** Required */
		method: string;

		/** Required */
		replied_at: string;
	}
	export interface PersonalisedRadioSuccessResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/** Required */
		method: FormControl<string | null | undefined>,

		/** Required */
		replied_at: FormControl<string | null | undefined>,
	}
	export function CreatePersonalisedRadioSuccessResponseFormGroup() {
		return new FormGroup<PersonalisedRadioSuccessResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlayableItem {
		description?: string | null;
		image_url?: string | null;
		pid?: string | null;
		title?: string | null;
		type?: string | null;
		version_pid?: string | null;
	}
	export interface PlayableItemFormProperties {
		description: FormControl<string | null | undefined>,
		image_url: FormControl<string | null | undefined>,
		pid: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		version_pid: FormControl<string | null | undefined>,
	}
	export function CreatePlayableItemFormGroup() {
		return new FormGroup<PlayableItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			version_pid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlayspaceContainer {
		id?: string | null;
		members?: Array<PlayableItem>;
		title?: string | null;
		type?: string | null;
	}
	export interface PlayspaceContainerFormProperties {
		id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePlayspaceContainerFormGroup() {
		return new FormGroup<PlayspaceContainerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Podcast {

		/** Required */
		category_summaries: Array<CategorySummary>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		days_available: number;

		/** Required */
		entity_type: string;

		/** Required */
		first_published_date: string;

		/** Required */
		frequency: string;

		/** Required */
		images: Array<Image>;

		/** Required */
		latest_available_episodes: Array<PodcastEpisodeSummary>;

		/** Required */
		network_summary: NetworkSummary;

		/** Required */
		pid: string;

		/** Required */
		rss_url: string;

		/** Required */
		synopses: PodcastSynopses;

		/** Required */
		territory: string;

		/** Required */
		titles: ProgrammeTitles;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_available_episodes: number;

		/** Required */
		type: string;

		/** Required */
		updated_at: string;
	}
	export interface PodcastFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		days_available: FormControl<number | null | undefined>,

		/** Required */
		entity_type: FormControl<string | null | undefined>,

		/** Required */
		first_published_date: FormControl<string | null | undefined>,

		/** Required */
		frequency: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		rss_url: FormControl<string | null | undefined>,

		/** Required */
		territory: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_available_episodes: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreatePodcastFormGroup() {
		return new FormGroup<PodcastFormProperties>({
			days_available: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			entity_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			first_published_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			frequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rss_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			territory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_available_episodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PodcastEpisodeSummary {

		/** Required */
		asset_url: string;

		/** Required */
		available_versions: Array<AvailableVersions>;

		/** Required */
		images: Array<Image>;

		/** Required */
		media_type: string;

		/** Required */
		network_summary: NetworkSummary;

		/** Required */
		pid: string;

		/** Required */
		release_date: string;

		/** Required */
		short_synopsis: string;

		/** Required */
		titles: ProgrammeTitles;

		/** Required */
		type: string;
	}
	export interface PodcastEpisodeSummaryFormProperties {

		/** Required */
		asset_url: FormControl<string | null | undefined>,

		/** Required */
		media_type: FormControl<string | null | undefined>,

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		release_date: FormControl<string | null | undefined>,

		/** Required */
		short_synopsis: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePodcastEpisodeSummaryFormGroup() {
		return new FormGroup<PodcastEpisodeSummaryFormProperties>({
			asset_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			media_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			release_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short_synopsis: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PodcastSynopses {

		/** Required */
		long: string;

		/** Required */
		medium: string;

		/** Required */
		short: string;

		/** Required */
		type: string;
	}
	export interface PodcastSynopsesFormProperties {

		/** Required */
		long: FormControl<string | null | undefined>,

		/** Required */
		medium: FormControl<string | null | undefined>,

		/** Required */
		short: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePodcastSynopsesFormGroup() {
		return new FormGroup<PodcastSynopsesFormProperties>({
			long: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			medium: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PodcastEpisodesResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: double
		 */
		limit: number;

		/**
		 * Required
		 * Type: double
		 */
		offset: number;

		/** Required */
		results: Array<PodcastEpisodeSummary>;

		/**
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface PodcastEpisodesResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePodcastEpisodesResponseFormGroup() {
		return new FormGroup<PodcastEpisodesResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PodcastError {
		href?: string | null;
		id?: string | null;
		message?: string | null;
		replied_at?: string | null;

		/** Type: double */
		status?: number | null;
	}
	export interface PodcastErrorFormProperties {
		href: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		replied_at: FormControl<string | null | undefined>,

		/** Type: double */
		status: FormControl<number | null | undefined>,
	}
	export function CreatePodcastErrorFormGroup() {
		return new FormGroup<PodcastErrorFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			replied_at: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PodcastErrorResponse {
		'$schema'?: string | null;
		errors?: Array<PodcastError>;
	}
	export interface PodcastErrorResponseFormProperties {
		'$schema': FormControl<string | null | undefined>,
	}
	export function CreatePodcastErrorResponseFormGroup() {
		return new FormGroup<PodcastErrorResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PodcastsFeatured {
		featured_podcasts?: Array<Podcast>;
		title?: string | null;
		type?: string | null;
	}
	export interface PodcastsFeaturedFormProperties {
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePodcastsFeaturedFormGroup() {
		return new FormGroup<PodcastsFeaturedFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PodcastsFeaturedResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: double
		 */
		limit: number;

		/**
		 * Required
		 * Type: double
		 */
		offset: number;

		/** Required */
		results: Array<PodcastsFeatured>;

		/**
		 * Required
		 * Type: double
		 */
		total: number;
	}
	export interface PodcastsFeaturedResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePodcastsFeaturedResponseFormGroup() {
		return new FormGroup<PodcastsFeaturedResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PodcastsResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		results: Array<Podcast>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface PodcastsResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePodcastsResponseFormGroup() {
		return new FormGroup<PodcastsResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PopularError {

		/** Required */
		href: string;

		/** Required */
		id: string;

		/** Required */
		message: string;

		/** Required */
		replied_at: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface PopularErrorFormProperties {

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		replied_at: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreatePopularErrorFormGroup() {
		return new FormGroup<PopularErrorFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replied_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PopularErrorResponse {

		/** Required */
		'$schema': string;

		/** Required */
		errors: Array<PopularError>;
	}
	export interface PopularErrorResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,
	}
	export function CreatePopularErrorResponseFormGroup() {
		return new FormGroup<PopularErrorResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PopularItemSummary {

		/** Required */
		data: ProgrammeSummary;

		/** Required */
		id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: number;

		/** Required */
		type: string;
	}
	export interface PopularItemSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		score: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePopularItemSummaryFormGroup() {
		return new FormGroup<PopularItemSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PopularResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		results: Array<PopularItemSummary>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface PopularResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePopularResponseFormGroup() {
		return new FormGroup<PopularResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Programme {

		/** Required */
		images: Array<Image>;
		latest_available_episodes?: Array<EpisodeSummary>;

		/** Required */
		network_summary: NetworkSummary;

		/** Required */
		pid: string;

		/** Required */
		short_synopsis: string;

		/** Required */
		titles: ProgrammeTitles;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_available_episodes?: number | null;

		/** Required */
		type: ProgrammeSummaryType;
	}
	export interface ProgrammeFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		short_synopsis: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total_available_episodes: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<ProgrammeSummaryType | null | undefined>,
	}
	export function CreateProgrammeFormGroup() {
		return new FormGroup<ProgrammeFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short_synopsis: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_available_episodes: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ProgrammeSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProgrammesResponse {

		/** Required */
		'$schema': string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		results: Array<ProgrammeSummary>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface ProgrammesResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateProgrammesResponseFormGroup() {
		return new FormGroup<ProgrammesResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RadioError {

		/** Required */
		code: string;

		/** Required */
		detail: string;

		/** Required */
		href: string;

		/** Required */
		id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timestamp: number;

		/** Required */
		title: string;
	}
	export interface RadioErrorFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		detail: FormControl<string | null | undefined>,

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timestamp: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateRadioErrorFormGroup() {
		return new FormGroup<RadioErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RadioErrorResponse {

		/** Required */
		'$schema': string;

		/** Required */
		errors: Array<RadioError>;
	}
	export interface RadioErrorResponseFormProperties {

		/** Required */
		'$schema': FormControl<string | null | undefined>,
	}
	export function CreateRadioErrorResponseFormGroup() {
		return new FormGroup<RadioErrorResponseFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SeriesSummary {

		/** Required */
		ancestors: Array<AncestorSummary>;

		/** Required */
		images: Array<Image>;

		/** Required */
		latest_available_episodes: Array<EpisodeSummary>;

		/** Required */
		network_summary: NetworkSummary;

		/** Required */
		pid: string;

		/** Required */
		short_synopsis: string;

		/** Required */
		titles: ProgrammeTitles;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_available_episodes: number;

		/** Required */
		type: SeriesSummaryType;
	}
	export interface SeriesSummaryFormProperties {

		/** Required */
		pid: FormControl<string | null | undefined>,

		/** Required */
		short_synopsis: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_available_episodes: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<SeriesSummaryType | null | undefined>,
	}
	export function CreateSeriesSummaryFormGroup() {
		return new FormGroup<SeriesSummaryFormProperties>({
			pid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short_synopsis: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total_available_episodes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SeriesSummaryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SeriesSummaryType { series_summary = 'series_summary' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Broadcasts
		 * All broadcasts
		 * Get broadcasts
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} service_id Filter by Service ID. E.g. bbc_radio_fourfm
		 * @param {string} date Filter by date. E.g. 2016-06-17
		 * @param {BroadcastsGetByOffsetAndLimitAndService_idAndDateAndSortSort} sort Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order
		 * @return {BroadcastsResponse} OK
		 */
		BroadcastsGetByOffsetAndLimitAndService_idAndDateAndSort(offset: number | null | undefined, limit: number | null | undefined, service_id: string | null | undefined, date: string | null | undefined, sort: BroadcastsGetByOffsetAndLimitAndService_idAndDateAndSortSort | null | undefined): Observable<BroadcastsResponse> {
			return this.http.get<BroadcastsResponse>(this.baseUri + 'broadcasts?offset=' + offset + '&limit=' + limit + '&service_id=' + (service_id == null ? '' : encodeURIComponent(service_id)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&sort=' + sort, {});
		}

		/**
		 * Latest Broadcasts
		 * Broadcasts for the current day
		 * Get broadcasts/latest
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {string} service_id Filter by Service ID. E.g. bbc_radio_fourfm
		 * @param {BroadcastsGetByOffsetAndLimitAndService_idAndOn_airAndNextAndPreviousAndSortOn_air} on_air Filter what is on air. E.g. 'now' returns current programme being broadcasted.
		 * @param {string} next Filter what will be on air next in minutes. E.g. '240' returns programmes broadcasted in the next four hurs
		 * @param {string} previous Filter what was on air previously in minutes. E.g. '240' returns programmes broadcasted in the previous four hurs
		 * @param {BroadcastsGetByOffsetAndLimitAndService_idAndDateAndSortSort} sort Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order
		 * @return {BroadcastsResponse} OK
		 */
		BroadcastsGetByOffsetAndLimitAndService_idAndOn_airAndNextAndPreviousAndSort(offset: number | null | undefined, limit: number | null | undefined, service_id: string | null | undefined, on_air: BroadcastsGetByOffsetAndLimitAndService_idAndOn_airAndNextAndPreviousAndSortOn_air | null | undefined, next: string | null | undefined, previous: string | null | undefined, sort: BroadcastsGetByOffsetAndLimitAndService_idAndDateAndSortSort | null | undefined): Observable<BroadcastsResponse> {
			return this.http.get<BroadcastsResponse>(this.baseUri + 'broadcasts/latest?offset=' + offset + '&limit=' + limit + '&service_id=' + (service_id == null ? '' : encodeURIComponent(service_id)) + '&on_air=' + on_air + '&next=' + (next == null ? '' : encodeURIComponent(next)) + '&previous=' + (previous == null ? '' : encodeURIComponent(previous)) + '&sort=' + sort, {});
		}

		/**
		 * Broadcasts by PID
		 * Find broadcast by PID
		 * Get broadcasts/{pid}
		 * @param {string} pid pid
		 * @return {BroadcastsResponse} OK
		 */
		GetBroadcastByPid(pid: string): Observable<BroadcastsResponse> {
			return this.http.get<BroadcastsResponse>(this.baseUri + 'broadcasts/' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}

		/**
		 * List of categories
		 * Retrieve Categories
		 * Get categories
		 * @param {CategoriesGetByKindKind} kind Filter by provided query. E.g. 'promoted' returns promoted categories
		 * @return {CategoriesResponse} OK
		 */
		CategoriesGetByKind(kind: CategoriesGetByKindKind | null | undefined): Observable<CategoriesResponse> {
			return this.http.get<CategoriesResponse>(this.baseUri + 'categories?kind=' + kind, {});
		}

		/**
		 * Category by ID
		 * Retrieve Categories by ID
		 * Get categories/{id}
		 * @param {string} id Retrieve information about the category. E.g. 'sport-football-europeanchampionship'
		 * @return {CategoriesResponse} OK
		 */
		CategoriesGetById(id: string): Observable<CategoriesResponse> {
			return this.http.get<CategoriesResponse>(this.baseUri + 'categories/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Collection Members
		 * Episodes and Clips from Collection
		 * Get collections/{pid}/members
		 * @param {string} pid pid
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {ProgrammesResponse} OK
		 */
		GetCollectionMembers(pid: string, offset: number | null | undefined, limit: number | null | undefined): Observable<ProgrammesResponse> {
			return this.http.get<ProgrammesResponse>(this.baseUri + 'collections/' + (pid == null ? '' : encodeURIComponent(pid)) + '/members&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Homepage Experience
		 * Homepage Experience
		 * Get experience/homepage
		 * @return {ExperienceResponse} OK
		 */
		GetExperienceHomepage(): Observable<ExperienceResponse> {
			return this.http.get<ExperienceResponse>(this.baseUri + 'experience/homepage', {});
		}

		/**
		 * Popular Artists
		 * List of Most Popular artists from BBC Music.
		 * Get music/popular/artists
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {MusicPopularityArtists} OK
		 */
		GetMusicPopularArtists(since: string | null | undefined, until: string | null | undefined, decomposed: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<MusicPopularityArtists> {
			return this.http.get<MusicPopularityArtists>(this.baseUri + 'music/popular/artists?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&decomposed=' + decomposed + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Single Artist Popularity
		 * Popularity Artist By Id
		 * Get music/popular/artists/{id}
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {string} id MusicBrainz Id - Used to get single resource score
		 * @return {MusicPopularityArtists} OK
		 */
		GetMusicPopularArtistById(since: string | null | undefined, until: string | null | undefined, decomposed: boolean | null | undefined, id: string): Observable<MusicPopularityArtists> {
			return this.http.get<MusicPopularityArtists>(this.baseUri + 'music/popular/artists/' + (id == null ? '' : encodeURIComponent(id)) + '?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&decomposed=' + decomposed, {});
		}

		/**
		 * Popular Playlists
		 * List of Most Popular playlists from BBC Music.
		 * Get music/popular/playlists
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {MusicPopularityPlaylists} OK
		 */
		GetMusicPopularPlaylists(since: string | null | undefined, until: string | null | undefined, decomposed: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<MusicPopularityPlaylists> {
			return this.http.get<MusicPopularityPlaylists>(this.baseUri + 'music/popular/playlists?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&decomposed=' + decomposed + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Single Playlist Popularity
		 * Popular playlist by Id
		 * Get music/popular/playlists/{id}
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {string} id BBC Music Playlist Id - Used to get single resource score
		 * @return {MusicPopularityPlaylists} OK
		 */
		GetMusicPopularPlaylistById(since: string | null | undefined, until: string | null | undefined, decomposed: boolean | null | undefined, id: string): Observable<MusicPopularityPlaylists> {
			return this.http.get<MusicPopularityPlaylists>(this.baseUri + 'music/popular/playlists/' + (id == null ? '' : encodeURIComponent(id)) + '?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&decomposed=' + decomposed, {});
		}

		/**
		 * Popular Tracks
		 * List of popular tracks for BBC Music. Filter by time, network, artist, playlist or programme.
		 * Get music/popular/tracks
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {string} network Return items with given Network ID
		 * @param {string} programme Items with given Programme Pid
		 * @param {string} artist MusicBrainz artist ID
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {MusicPopularityTracks} OK
		 */
		GetMusicPopularTracks(since: string | null | undefined, until: string | null | undefined, network: string | null | undefined, programme: string | null | undefined, artist: string | null | undefined, decomposed: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<MusicPopularityTracks> {
			return this.http.get<MusicPopularityTracks>(this.baseUri + 'music/popular/tracks?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&programme=' + (programme == null ? '' : encodeURIComponent(programme)) + '&artist=' + (artist == null ? '' : encodeURIComponent(artist)) + '&decomposed=' + decomposed + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Single Track Popularity
		 * Popular Track for BBC Music
		 * Get music/popular/tracks/{id}
		 * @param {string} since ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
		 * @param {string} until ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
		 * @param {string} network Return items with given Network ID
		 * @param {string} programme Items with given Programme Pid
		 * @param {string} artist MusicBrainz artist ID
		 * @param {boolean} decomposed In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
		 * @param {string} id BBC Music Track Id - Used to get single resource score
		 * @return {MusicPopularityTracks} OK
		 */
		GetMusicPopularTrackById(since: string | null | undefined, until: string | null | undefined, network: string | null | undefined, programme: string | null | undefined, artist: string | null | undefined, decomposed: boolean | null | undefined, id: string): Observable<MusicPopularityTracks> {
			return this.http.get<MusicPopularityTracks>(this.baseUri + 'music/popular/tracks/' + (id == null ? '' : encodeURIComponent(id)) + '?since=' + (since == null ? '' : encodeURIComponent(since)) + '&until=' + (until == null ? '' : encodeURIComponent(until)) + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&programme=' + (programme == null ? '' : encodeURIComponent(programme)) + '&artist=' + (artist == null ? '' : encodeURIComponent(artist)) + '&decomposed=' + decomposed, {});
		}

		/**
		 * List of followed categories
		 * List of followed categories for a given user.
		 * Get my/categories/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedCategoriesResponse} OK
		 */
		Personalised_CategoriesGetByOffsetAndLimit(offset: number | null | undefined, limit: number | null | undefined): Observable<PersonalisedCategoriesResponse> {
			return this.http.get<PersonalisedCategoriesResponse>(this.baseUri + 'my/categories/follows?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Follow category
		 * Post my/categories/follows
		 * @return {void} 
		 */
		Personalised_CategoriesPost(requestBody: Body): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/categories/follows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unfollow category
		 * Delete my/categories/follows
		 * @return {void} 
		 */
		Personalised_CategoriesDelete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'my/categories/follows', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Music Exports
		 * Returns status of all previous third party export actions for a given BBC Music user.
		 * Get my/music/export
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {MusicExportJob} OK
		 */
		GetMusicExport(offset: number | null | undefined, limit: number | null | undefined): Observable<MusicExportJob> {
			return this.http.get<MusicExportJob>(this.baseUri + 'my/music/export?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Music Export Jobs
		 * All items associated to a users export request
		 * Get my/music/exports/jobs
		 * @param {boolean} over16 Boolean age check
		 * @param {GetMusicExportJobsVendor} vendor Specify Vendor Jobs
		 * @return {MusicExportJob} OK
		 */
		GetMusicExportJobs(over16: boolean, vendor: GetMusicExportJobsVendor | null | undefined): Observable<MusicExportJob> {
			return this.http.get<MusicExportJob>(this.baseUri + 'my/music/exports/jobs?over16=' + over16 + '&vendor=' + vendor, {});
		}

		/**
		 * Music Export Jobs
		 * Create Export Job for a user
		 * Post my/music/exports/jobs
		 * @param {boolean} over16 Boolean age check
		 * @param {GetMusicExportJobsVendor} vendor Specify Vendor Jobs
		 * @return {MusicExportSuccess} OK
		 */
		PostMusicExportJob(over16: boolean, vendor: GetMusicExportJobsVendor | null | undefined, requestBody: Array<MusicExportJob>): Observable<MusicExportSuccess> {
			return this.http.post<MusicExportSuccess>(this.baseUri + 'my/music/exports/jobs?over16=' + over16 + '&vendor=' + vendor, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Music Export Tracks
		 * Retrieves vendor and status specific tracks
		 * Get my/music/exports/tracks
		 * @param {boolean} over16 Boolean age check
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {GetMusicExportJobsVendor} vendor Specify Vendor Tracks
		 * @param {GetMusicExportTracksStatus} status Specify Track status
		 * @return {MusicExportJob} OK
		 */
		GetMusicExportTracks(over16: boolean, offset: number | null | undefined, limit: number | null | undefined, vendor: GetMusicExportJobsVendor | null | undefined, status: GetMusicExportTracksStatus | null | undefined): Observable<MusicExportJob> {
			return this.http.get<MusicExportJob>(this.baseUri + 'my/music/exports/tracks?over16=' + over16 + '&offset=' + offset + '&limit=' + limit + '&vendor=' + vendor + '&status=' + status, {});
		}

		/**
		 * Favourite Tracks or Clips
		 * List of favourited tracks and clips for a given user for BBC Music.
		 * Get my/music/favourites
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {GetPersonalisedMusicFavouritesAction} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFavourites(offset: number | null | undefined, limit: number | null | undefined, action: GetPersonalisedMusicFavouritesAction | null | undefined, music_data: boolean | null | undefined): Observable<PersonalisedMusicResponse> {
			return this.http.get<PersonalisedMusicResponse>(this.baseUri + 'my/music/favourites?offset=' + offset + '&limit=' + limit + '&action=' + action + '&music_data=' + music_data, {});
		}

		/**
		 * Favourite Tracks or Clips
		 * Update tracks or clips from a BBC Music user favourites.
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/music/favourites
		 * @param {Array<PersonalisedMusicBatchRequest>} requestBody Action favourited or unfavourited
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PutPersonalisedMusicFavouritesBatch(requestBody: Array<PersonalisedMusicBatchRequest>): Observable<PersonalisedMusicSuccess> {
			return this.http.put<PersonalisedMusicSuccess>(this.baseUri + 'my/music/favourites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Favourite Tracks or Clips
		 * Add multiple tracks and/or clips to a BBC Music user's favourites.
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/music/favourites
		 * @param {Array<PersonalisedMusicBatchRequest>} requestBody Action favourited or unfavourited
		 * @return {PersonalisedMusicResponse} OK
		 */
		PostPersonalisedMusicFavouritesBatch(requestBody: Array<PersonalisedMusicBatchRequest>): Observable<PersonalisedMusicResponse> {
			return this.http.post<PersonalisedMusicResponse>(this.baseUri + 'my/music/favourites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Favourite Tracks or Clips by Type
		 * List of favourited tracks or clips for a given user for BBC Music.
		 * Get my/music/favourites/{type}
		 * @param {GetPersonalisedMusicFavouritesByTypeType} type Supported Music favourite types: Clips or Tracks
		 * @param {GetPersonalisedMusicFavouritesAction} action Filters activities based on the type of action
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFavouritesByType(type: GetPersonalisedMusicFavouritesByTypeType, action: GetPersonalisedMusicFavouritesAction | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<PersonalisedMusicResponse> {
			return this.http.get<PersonalisedMusicResponse>(this.baseUri + 'my/music/favourites/' + type + '?action=' + action + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Favourite Track or Clip
		 * Check to see if a single track or clip entity is in a users favourites - determines UX of add button.
		 * Get my/music/favourites/{type}/{id}
		 * @param {GetPersonalisedMusicFavouritesByTypeType} type Supported Music favourite types: Clips or Tracks
		 * @param {string} id Clip PID or Track ID
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFavouritesByTypeById(type: GetPersonalisedMusicFavouritesByTypeType, id: string): Observable<PersonalisedMusicResponse> {
			return this.http.get<PersonalisedMusicResponse>(this.baseUri + 'my/music/favourites/' + type + '/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Favourite Track or Clip
		 * Update tracks or clips from a BBC Music user favourites.
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/music/favourites/{type}/{id}
		 * @param {GetPersonalisedMusicFavouritesByTypeType} type Supported Music favourite types: Clips or Tracks
		 * @param {string} id Clip PID or Track ID
		 * @param {PersonalisedMusicRequest} requestBody Action favourited or unfavourited
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PutPersonalisedMusicFavouritesByTypeById(type: GetPersonalisedMusicFavouritesByTypeType, id: string, requestBody: PersonalisedMusicRequest): Observable<PersonalisedMusicSuccess> {
			return this.http.put<PersonalisedMusicSuccess>(this.baseUri + 'my/music/favourites/' + type + '/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Favourite Track or Clip
		 * Add track or clip to a BBC Music user favourites.
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/music/favourites/{type}/{id}
		 * @param {GetPersonalisedMusicFavouritesByTypeType} type Supported Music favourite types: Clips or Tracks
		 * @param {string} id Clip PID or Track ID
		 * @param {PersonalisedMusicRequest} requestBody Action favourited or unfavourited
		 * @return {PersonalisedMusicResponse} OK
		 */
		PostPersonalisedMusicFavouritesByTypeById(type: GetPersonalisedMusicFavouritesByTypeType, id: string, requestBody: PersonalisedMusicRequest): Observable<PersonalisedMusicResponse> {
			return this.http.post<PersonalisedMusicResponse>(this.baseUri + 'my/music/favourites/' + type + '/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Favourite Track or Clip
		 * Delete track or clip from a BBC Music user favourites.
		 * Delete my/music/favourites/{type}/{id}
		 * @param {GetPersonalisedMusicFavouritesByTypeType} type Supported Music favourite types: Clips or Tracks
		 * @param {string} id Clip PID or Track ID
		 * @return {PersonalisedMusicSuccess} OK
		 */
		DeletePersonalisedMusicFavouritesByTypeById(type: GetPersonalisedMusicFavouritesByTypeType, id: string): Observable<PersonalisedMusicSuccess> {
			return this.http.delete<PersonalisedMusicSuccess>(this.baseUri + 'my/music/favourites/' + type + '/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Followed Networks, Categories, Artists, Playlists and Genres
		 * List of followed networks, categories, artists, playlists and genres for a given user for BBC Music.
		 * Get my/music/follows
		 * @param {GetPersonalisedMusicFollowsAction} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {GetPersonalisedMusicFollowsMusic_context} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFollows(action: GetPersonalisedMusicFollowsAction | null | undefined, music_data: boolean | null | undefined, music_context: GetPersonalisedMusicFollowsMusic_context | null | undefined, music_within_uk: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<PersonalisedMusicResponse> {
			return this.http.get<PersonalisedMusicResponse>(this.baseUri + 'my/music/follows?action=' + action + '&music_data=' + music_data + '&music_context=' + music_context + '&music_within_uk=' + music_within_uk + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Followed Networks, Categories, Artists, Playlists and Genres
		 * Update networks, categories, artists, playlists, networks, genres or services in a users follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/music/follows
		 * @param {GetPersonalisedMusicFollowsAction} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {GetPersonalisedMusicFollowsMusic_context} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {Array<PersonalisedMusicBatchRequest>} requestBody Action followed or unfollowed
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PutPersonalisedMusicFollowsBatch(action: GetPersonalisedMusicFollowsAction | null | undefined, music_data: boolean | null | undefined, music_context: GetPersonalisedMusicFollowsMusic_context | null | undefined, music_within_uk: boolean | null | undefined, requestBody: Array<PersonalisedMusicBatchRequest>): Observable<PersonalisedMusicSuccess> {
			return this.http.put<PersonalisedMusicSuccess>(this.baseUri + 'my/music/follows?action=' + action + '&music_data=' + music_data + '&music_context=' + music_context + '&music_within_uk=' + music_within_uk, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Followed Networks, Categories, Artists, Playlists and Genres
		 * Add networks, categories, artists, playlists, networks, genres or services in a users follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/music/follows
		 * @param {GetPersonalisedMusicFollowsAction} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {GetPersonalisedMusicFollowsMusic_context} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {Array<PersonalisedMusicBatchRequest>} requestBody Action followed or unfollowed
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PostPersonalisedMusicFollowsBatch(action: GetPersonalisedMusicFollowsAction | null | undefined, music_data: boolean | null | undefined, music_context: GetPersonalisedMusicFollowsMusic_context | null | undefined, music_within_uk: boolean | null | undefined, requestBody: Array<PersonalisedMusicBatchRequest>): Observable<PersonalisedMusicSuccess> {
			return this.http.post<PersonalisedMusicSuccess>(this.baseUri + 'my/music/follows?action=' + action + '&music_data=' + music_data + '&music_context=' + music_context + '&music_within_uk=' + music_within_uk, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Followed Networks, Categories, Artists, Playlists and Genres by Type
		 * List of followed networks, categories, artists, playlists, networks, genres, categories or services for a given BBC Music user.
		 * Get my/music/follows/{type}
		 * @param {GetPersonalisedMusicFollowsByTypeType} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {GetPersonalisedMusicFollowsAction} action Filters activities based on the type of action
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {GetPersonalisedMusicFollowsMusic_context} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFollowsByType(type: GetPersonalisedMusicFollowsByTypeType, action: GetPersonalisedMusicFollowsAction | null | undefined, music_data: boolean | null | undefined, music_context: GetPersonalisedMusicFollowsMusic_context | null | undefined, music_within_uk: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<PersonalisedMusicResponse> {
			return this.http.get<PersonalisedMusicResponse>(this.baseUri + 'my/music/follows/' + type + '?action=' + action + '&music_data=' + music_data + '&music_context=' + music_context + '&music_within_uk=' + music_within_uk + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Followed Network, Category, Artist, Playlist and Genre
		 * Check to see if a single network, category, artist, playlist, network, genre or service entity is in a users follows - determines UX of add button.
		 * Get my/music/follows/{type}/{id}
		 * @param {GetPersonalisedMusicFollowsByTypeType} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {string} id Playlists, Services, Networks, Genres, Categories or Artists ID
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {GetPersonalisedMusicFollowsMusic_context} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @return {PersonalisedMusicResponse} OK
		 */
		GetPersonalisedMusicFollowsByTypeById(type: GetPersonalisedMusicFollowsByTypeType, id: string, music_data: boolean | null | undefined, music_context: GetPersonalisedMusicFollowsMusic_context | null | undefined, music_within_uk: boolean | null | undefined): Observable<PersonalisedMusicResponse> {
			return this.http.get<PersonalisedMusicResponse>(this.baseUri + 'my/music/follows/' + type + '/' + (id == null ? '' : encodeURIComponent(id)) + '&music_data=' + music_data + '&music_context=' + music_context + '&music_within_uk=' + music_within_uk, {});
		}

		/**
		 * Followed Network, Category, Artist, Playlist and Genre
		 * Update a single network, category, artist, playlist, network, genre or service entity is in a users follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/music/follows/{type}/{id}
		 * @param {GetPersonalisedMusicFollowsByTypeType} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {string} id Playlists, Services, Networks, Genres, Categories or Artists ID
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {GetPersonalisedMusicFollowsMusic_context} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {PersonalisedMusicRequest} requestBody Action followed or unfollowed
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PutPersonalisedMusicFollowsByTypeById(type: GetPersonalisedMusicFollowsByTypeType, id: string, music_data: boolean | null | undefined, music_context: GetPersonalisedMusicFollowsMusic_context | null | undefined, music_within_uk: boolean | null | undefined, requestBody: PersonalisedMusicRequest): Observable<PersonalisedMusicSuccess> {
			return this.http.put<PersonalisedMusicSuccess>(this.baseUri + 'my/music/follows/' + type + '/' + (id == null ? '' : encodeURIComponent(id)) + '&music_data=' + music_data + '&music_context=' + music_context + '&music_within_uk=' + music_within_uk, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Followed Network, Category, Artist, Playlist and Genre
		 * Add a single network, category, artist, playlist, network, genre or service entity is in a users follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/music/follows/{type}/{id}
		 * @param {GetPersonalisedMusicFollowsByTypeType} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {string} id Playlists, Services, Networks, Genres, Categories or Artists ID
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {GetPersonalisedMusicFollowsMusic_context} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @param {PersonalisedMusicRequest} requestBody Action followed or unfollowed
		 * @return {PersonalisedMusicSuccess} OK
		 */
		PostPersonalisedMusicFollowsByTypeById(type: GetPersonalisedMusicFollowsByTypeType, id: string, music_data: boolean | null | undefined, music_context: GetPersonalisedMusicFollowsMusic_context | null | undefined, music_within_uk: boolean | null | undefined, requestBody: PersonalisedMusicRequest): Observable<PersonalisedMusicSuccess> {
			return this.http.post<PersonalisedMusicSuccess>(this.baseUri + 'my/music/follows/' + type + '/' + (id == null ? '' : encodeURIComponent(id)) + '&music_data=' + music_data + '&music_context=' + music_context + '&music_within_uk=' + music_within_uk, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Followed Network, Category, Artist, Playlist and Genre
		 * Remove a single network, category, artist, playlist, network, genre or service entity is in a users follows
		 * Delete my/music/follows/{type}/{id}
		 * @param {GetPersonalisedMusicFollowsByTypeType} type Supported Music follows types: Playlists, Services, Genres & Artists
		 * @param {string} id Playlists, Services, Networks, Genres, Categories or Artists ID
		 * @param {boolean} music_data Omits music data from the response, defaults to true
		 * @param {GetPersonalisedMusicFollowsMusic_context} music_context Specify context to be passed to Music API
		 * @param {boolean} music_within_uk Specify location to be passed to Music API
		 * @return {PersonalisedMusicSuccess} OK
		 */
		DeletePersonalisedMusicFollowsByTypeById(type: GetPersonalisedMusicFollowsByTypeType, id: string, music_data: boolean | null | undefined, music_context: GetPersonalisedMusicFollowsMusic_context | null | undefined, music_within_uk: boolean | null | undefined): Observable<PersonalisedMusicSuccess> {
			return this.http.delete<PersonalisedMusicSuccess>(this.baseUri + 'my/music/follows/' + type + '/' + (id == null ? '' : encodeURIComponent(id)) + '&music_data=' + music_data + '&music_context=' + music_context + '&music_within_uk=' + music_within_uk, {});
		}

		/**
		 * Music Export Preferences
		 * Returns export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Get my/music/preferences/export
		 * @return {MusicExportPreferencesResponse} OK
		 */
		GetMusicPreferencesExport(): Observable<MusicExportPreferencesResponse> {
			return this.http.get<MusicExportPreferencesResponse>(this.baseUri + 'my/music/preferences/export', {});
		}

		/**
		 * Music Export Preferences
		 * Create export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Post my/music/preferences/export
		 * @return {MusicExportSuccess} OK
		 */
		PostMusicPreferencesExport(requestBody: MusicExportPreferences): Observable<MusicExportSuccess> {
			return this.http.post<MusicExportSuccess>(this.baseUri + 'my/music/preferences/export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Music Export Preferences
		 * Remove export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Delete my/music/preferences/export
		 * @return {MusicExportSuccess} OK
		 */
		DeleteMusicPreferencesExport(): Observable<MusicExportSuccess> {
			return this.http.delete<MusicExportSuccess>(this.baseUri + 'my/music/preferences/export', {});
		}

		/**
		 * Music Export Vendor Preferences
		 * Returns vendor specific export preferences for a given BBC Music user.
		 * Get my/music/preferences/export/{vendor}
		 * @param {GetMusicExportJobsVendor} vendor Supported 3rd Party Vendor
		 * @return {MusicExportPreferencesResponse} OK
		 */
		GetMusicPreferencesExportVendor(vendor: GetMusicExportJobsVendor): Observable<MusicExportPreferencesResponse> {
			return this.http.get<MusicExportPreferencesResponse>(this.baseUri + 'my/music/preferences/export/' + vendor, {});
		}

		/**
		 * Music Export Vendor Preferences
		 * Update vendor specific export preferences for a given BBC Music user.
		 * Put my/music/preferences/export/{vendor}
		 * @param {GetMusicExportJobsVendor} vendor Supported 3rd Party Vendor
		 * @return {void} OK
		 */
		PutMusicPreferencesExportVendor(vendor: GetMusicExportJobsVendor, requestBody: MusicExportPreferences): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'my/music/preferences/export/' + vendor, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Music Export Vendor Preferences
		 * Create Vendor specific export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Post my/music/preferences/export/{vendor}
		 * @param {GetMusicExportJobsVendor} vendor Supported 3rd Party Vendor
		 * @return {void} OK
		 */
		PostMusicPreferencesExportVendor(vendor: GetMusicExportJobsVendor, requestBody: MusicExportPreferences): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/music/preferences/export/' + vendor, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Music Export Vendor Preferences
		 * Remove Vendor specific export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
		 * Delete my/music/preferences/export/{vendor}
		 * @param {GetMusicExportJobsVendor} vendor Supported 3rd Party Vendor
		 * @return {void} OK
		 */
		DeleteMusicPreferencesExportVendor(vendor: GetMusicExportJobsVendor): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'my/music/preferences/export/' + vendor, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List of followed networks
		 * List of followed networks for a given user.
		 * Get my/networks/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedNetworksResponse} OK
		 */
		Personalised_NetworksGetByOffsetAndLimit(offset: number | null | undefined, limit: number | null | undefined): Observable<PersonalisedNetworksResponse> {
			return this.http.get<PersonalisedNetworksResponse>(this.baseUri + 'my/networks/follows?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Follow network
		 * Post my/networks/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {void} 
		 */
		Personalised_NetworksPostByOffsetAndLimit(offset: number | null | undefined, limit: number | null | undefined, requestBody: Body_2): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/networks/follows?offset=' + offset + '&limit=' + limit, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unfollow network
		 * Delete my/networks/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {void} 
		 */
		Personalised_NetworksDeleteByOffsetAndLimit(offset: number | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'my/networks/follows?offset=' + offset + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Write Play Event
		 * Post my/plays
		 * @return {void} 
		 */
		Personalised_PlaysPost(requestBody: Body_4): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'my/plays', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Suggested Playspace Container
		 * Suggested Playspace Container
		 * Get my/playspace/containers/suggested
		 * @param {string} previous_pid Clip or Episode PID of the previous or first content item in the Playspace stream.
		 * @param {string} previous_container Container ID of the previous container in the Playspace stream.
		 * @return {PlayspaceContainer} OK
		 */
		SuggestContainer(previous_pid: string, previous_container: string | null | undefined): Observable<PlayspaceContainer> {
			return this.http.get<PlayspaceContainer>(this.baseUri + 'my/playspace/containers/suggested?previous_pid=' + (previous_pid == null ? '' : encodeURIComponent(previous_pid)) + '&previous_container=' + (previous_container == null ? '' : encodeURIComponent(previous_container)), {});
		}

		/**
		 * Playspace Container by ID
		 * Playspace Container by ID
		 * Get my/playspace/containers/{id}
		 * @param {string} id Playspace Container ID
		 * @return {PlayspaceContainer} OK
		 */
		GetContainer(id: string): Observable<PlayspaceContainer> {
			return this.http.get<PlayspaceContainer>(this.baseUri + 'my/playspace/containers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Recommended Programmes
		 * Recommended Programmes from the Audience Platforms' Recomendations Service
		 * Get my/programmes/recommendations
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {GetRecommendationsRights} rights Only return available results for the web/mobile.
		 * @return {ProgrammesResponse} OK
		 */
		GetRecommendations(offset: number | null | undefined, limit: number | null | undefined, rights: GetRecommendationsRights): Observable<ProgrammesResponse> {
			return this.http.get<ProgrammesResponse>(this.baseUri + 'my/programmes/recommendations?offset=' + offset + '&limit=' + limit + '&rights=' + rights, {});
		}

		/**
		 * Favourite Episodes and Clips
		 * List of favourited episodes and clips for a given user for iPlayer Radio.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/favourites
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {GetPersonalisedRadioFavouritesSort} sort Sort order for Personalised Radio results
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFavourites(offset: number | null | undefined, limit: number | null | undefined, sort: GetPersonalisedRadioFavouritesSort | null | undefined, show_all_activity: boolean | null | undefined): Observable<PersonalisedRadioResponse> {
			return this.http.get<PersonalisedRadioResponse>(this.baseUri + 'my/radio/favourites?offset=' + offset + '&limit=' + limit + '&sort=' + sort + '&show_all_activity=' + show_all_activity, {});
		}

		/**
		 * Favourite Episodes and Clips
		 * Update user favourites
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/radio/favourites
		 * @param {Array<PersonalisedRadioBatchRequest>} requestBody Action favourited or unfavourited
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PutPersonalisedRadioBatch(requestBody: Array<PersonalisedRadioBatchRequest>): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.put<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/favourites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Favourite Episodes and Clips
		 * Add User favourites
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/radio/favourites
		 * @param {Array<PersonalisedRadioBatchRequest>} requestBody Action favourited or unfavourited
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PostPersonalisedRadioBatch(requestBody: Array<PersonalisedRadioBatchRequest>): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.post<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/favourites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Favourite Episodes and Clips by Type
		 * List of followed 'clips' or 'episode' items for a given iPlayer Radio user
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/favourites/{type}
		 * @param {GetPersonalisedRadioFavouritesByTypeType} type Supported Radio favourite types: Clips or Episodes
		 * @param {GetPersonalisedRadioFavouritesSort} sort Sort order for Personalised Radio results
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFavouritesByType(type: GetPersonalisedRadioFavouritesByTypeType, sort: GetPersonalisedRadioFavouritesSort | null | undefined, show_all_activity: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<PersonalisedRadioResponse> {
			return this.http.get<PersonalisedRadioResponse>(this.baseUri + 'my/radio/favourites/' + type + '?sort=' + sort + '&show_all_activity=' + show_all_activity + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Favourite Episode or Clip
		 * Check to see if a single clip or episode entity is in a users favourites - determines UX of add button.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/favourites/{type}/{pid}
		 * @param {GetPersonalisedRadioFavouritesByTypeType} type Supported Radio favourite types: Clips or Episodes
		 * @param {string} pid pid
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioByActivityTypeById(type: GetPersonalisedRadioFavouritesByTypeType, pid: string, show_all_activity: boolean | null | undefined): Observable<PersonalisedRadioResponse> {
			return this.http.get<PersonalisedRadioResponse>(this.baseUri + 'my/radio/favourites/' + type + '/' + (pid == null ? '' : encodeURIComponent(pid)) + '&show_all_activity=' + show_all_activity, {});
		}

		/**
		 * Favourite Episode or Clip
		 * Update user favourite
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/radio/favourites/{type}/{pid}
		 * @param {GetPersonalisedRadioFavouritesByTypeType} type Supported Radio favourite types: Clips or Episodes
		 * @param {string} pid pid
		 * @param {PersonalisedRadioRequest} requestBody Action favourited or unfavourited
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PutPersonalisedRadioByActivityTypeById(type: GetPersonalisedRadioFavouritesByTypeType, pid: string, requestBody: PersonalisedRadioRequest): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.put<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/favourites/' + type + '/' + (pid == null ? '' : encodeURIComponent(pid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Favourite Episode or Clip
		 * Add User favourite
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/radio/favourites/{type}/{pid}
		 * @param {GetPersonalisedRadioFavouritesByTypeType} type Supported Radio favourite types: Clips or Episodes
		 * @param {string} pid pid
		 * @param {PersonalisedRadioRequest} requestBody Action favourited or unfavourited
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PostPersonalisedRadioByActivityTypeById(type: GetPersonalisedRadioFavouritesByTypeType, pid: string, requestBody: PersonalisedRadioRequest): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.post<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/favourites/' + type + '/' + (pid == null ? '' : encodeURIComponent(pid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Favourite Episode or Clip
		 * Remove User favourite
		 * Delete my/radio/favourites/{type}/{pid}
		 * @param {GetPersonalisedRadioFavouritesByTypeType} type Supported Radio favourite types: Clips or Episodes
		 * @param {string} pid pid
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		DeletePersonalisedRadioByActivityTypeById(type: GetPersonalisedRadioFavouritesByTypeType, pid: string): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.delete<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/favourites/' + type + '/' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}

		/**
		 * Followed Brands and Series
		 * List of favourited brands and series for a given user for iPlayer Radio.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/follows
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {GetPersonalisedRadioFavouritesSort} sort Sort order for Personalised Radio results
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFollows(offset: number | null | undefined, limit: number | null | undefined, sort: GetPersonalisedRadioFavouritesSort | null | undefined, show_all_activity: boolean | null | undefined): Observable<PersonalisedRadioResponse> {
			return this.http.get<PersonalisedRadioResponse>(this.baseUri + 'my/radio/follows?offset=' + offset + '&limit=' + limit + '&sort=' + sort + '&show_all_activity=' + show_all_activity, {});
		}

		/**
		 * Followed Brands and Series
		 * Update 'brands' or 'series' items from a users iPlayer Radio follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/radio/follows
		 * @param {Array<PersonalisedRadioBatchRequest>} requestBody Action followed or unfollowed
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PutPersonalisedRadioFollowsBatch(requestBody: Array<PersonalisedRadioBatchRequest>): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.put<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/follows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Followed Brands and Series
		 * Add 'brand' or 'series' items to a users iPlayer Radio follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/radio/follows
		 * @param {Array<PersonalisedRadioBatchRequest>} requestBody Action followed or unfollowed
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PostPersonalisedRadioFollowsBatch(requestBody: Array<PersonalisedRadioBatchRequest>): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.post<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/follows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Followed Brands or Series by Type
		 * List of followed 'brand' or 'series' items for a given iPlayer Radio user
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/follows/{type}
		 * @param {GetPersonalisedRadioFollowsByTypeType} type Supported Radio follows types: Brands or Series
		 * @param {GetPersonalisedRadioFavouritesSort} sort Sort order for Personalised Radio results
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {boolean} show_all_activity Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFollowsByType(type: GetPersonalisedRadioFollowsByTypeType, sort: GetPersonalisedRadioFavouritesSort | null | undefined, offset: number | null | undefined, limit: number | null | undefined, show_all_activity: boolean | null | undefined): Observable<PersonalisedRadioResponse> {
			return this.http.get<PersonalisedRadioResponse>(this.baseUri + 'my/radio/follows/' + type + '?sort=' + sort + '&offset=' + offset + '&limit=' + limit + '&show_all_activity=' + show_all_activity, {});
		}

		/**
		 * Followed Brand or Series
		 * Check to see if a single brand or series entity is in a users follows - determines UX of add button.
		 * Get my/radio/follows/{type}/{pid}
		 * @param {GetPersonalisedRadioFollowsByTypeType} type Supported Radio follows types: Brands or Series
		 * @param {string} pid pid
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioFollowsByTypeById(type: GetPersonalisedRadioFollowsByTypeType, pid: string): Observable<PersonalisedRadioResponse> {
			return this.http.get<PersonalisedRadioResponse>(this.baseUri + 'my/radio/follows/' + type + '/' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}

		/**
		 * Followed Brand or Series
		 * Update 'brand' or 'series' items from a users iPlayer Radio follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Put my/radio/follows/{type}/{pid}
		 * @param {GetPersonalisedRadioFollowsByTypeType} type Supported Radio follows types: Brands or Series
		 * @param {string} pid pid
		 * @param {PersonalisedRadioRequest} requestBody Action followed or unfollowed
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PutPersonalisedRadioFollowsByTypeById(type: GetPersonalisedRadioFollowsByTypeType, pid: string, requestBody: PersonalisedRadioRequest): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.put<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/follows/' + type + '/' + (pid == null ? '' : encodeURIComponent(pid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Followed Brand or Series
		 * Add 'brand' or 'series' items from a users iPlayer Radio follows
		 * N.B. Any HTML tags submitted in metadata will be removed
		 * Post my/radio/follows/{type}/{pid}
		 * @param {GetPersonalisedRadioFollowsByTypeType} type Supported Radio follows types: Brands or Series
		 * @param {string} pid pid
		 * @param {PersonalisedRadioRequest} requestBody Action followed or unfollowed
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		PostPersonalisedRadioFollowsByTypeById(type: GetPersonalisedRadioFollowsByTypeType, pid: string, requestBody: PersonalisedRadioRequest): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.post<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/follows/' + type + '/' + (pid == null ? '' : encodeURIComponent(pid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Followed Brand or Series
		 * Remove 'brand' or 'series' items from a users iPlayer Radio follows
		 * Delete my/radio/follows/{type}/{pid}
		 * @param {GetPersonalisedRadioFollowsByTypeType} type Supported Radio follows types: Brands or Series
		 * @param {string} pid pid
		 * @return {PersonalisedRadioSuccessResponse} OK
		 */
		DeletePersonalisedRadioFollowsByTypeById(type: GetPersonalisedRadioFollowsByTypeType, pid: string): Observable<PersonalisedRadioSuccessResponse> {
			return this.http.delete<PersonalisedRadioSuccessResponse>(this.baseUri + 'my/radio/follows/' + type + '/' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}

		/**
		 * Played Episode or Clip
		 * Returns mixed episode and clip plays for a given BBC iPlayer radio user.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get my/radio/plays
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {GetPersonalisedRadioFavouritesSort} sort Sort order for Personalised Radio results
		 * @param {boolean} show_all_activity Include expired/unavailable items
		 * @return {PersonalisedRadioResponse} OK
		 */
		GetPersonalisedRadioPlays(offset: number | null | undefined, limit: number | null | undefined, sort: GetPersonalisedRadioFavouritesSort | null | undefined, show_all_activity: boolean | null | undefined): Observable<PersonalisedRadioResponse> {
			return this.http.get<PersonalisedRadioResponse>(this.baseUri + 'my/radio/plays?offset=' + offset + '&limit=' + limit + '&sort=' + sort + '&show_all_activity=' + show_all_activity, {});
		}

		/**
		 * All Podcasts
		 * Retrieve all Podcasts
		 * Get podcasts
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @param {GetPodcastsSort} sort Sort order for Podcasts results
		 * @param {string} network Network Master Brand ID (mid)
		 * @param {string} network_url_key Network URL key
		 * @param {string} category Category ID
		 * @param {string} q Search query String
		 * @param {GetPodcastsCoverage} coverage Local, National or Regional Coverage
		 * @return {PodcastsResponse} OK
		 */
		GetPodcasts(offset: number | null | undefined, limit: number | null | undefined, sort: GetPodcastsSort | null | undefined, network: string | null | undefined, network_url_key: string | null | undefined, category: string | null | undefined, q: string | null | undefined, coverage: GetPodcastsCoverage | null | undefined): Observable<PodcastsResponse> {
			return this.http.get<PodcastsResponse>(this.baseUri + 'podcasts?offset=' + offset + '&limit=' + limit + '&sort=' + sort + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&network_url_key=' + (network_url_key == null ? '' : encodeURIComponent(network_url_key)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&coverage=' + coverage, {});
		}

		/**
		 * Featured Podcasts
		 * Retrieve featured podcasts
		 * Get podcasts/featured
		 * @return {PodcastsFeaturedResponse} OK
		 */
		GetPodcastsFeatured(): Observable<PodcastsFeaturedResponse> {
			return this.http.get<PodcastsFeaturedResponse>(this.baseUri + 'podcasts/featured', {});
		}

		/**
		 * Podcast
		 * Retrieve data about the podcast with the supplied PID
		 * Get podcasts/{pid}
		 * @param {string} pid pid
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PodcastsResponse} OK
		 */
		GetPodcastByPid(pid: string, offset: number | null | undefined, limit: number | null | undefined): Observable<PodcastsResponse> {
			return this.http.get<PodcastsResponse>(this.baseUri + 'podcasts/' + (pid == null ? '' : encodeURIComponent(pid)) + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Podcast Episodes
		 * Retrieve all episodes for a specific podcast
		 * Get podcasts/{pid}/episodes
		 * @param {string} pid pid
		 * @param {number} offset Paginated results offset
		 * @param {number} limit Paginated results limit
		 * @return {PodcastEpisodesResponse} OK
		 */
		GetPodcastEpisodes(pid: string, offset: number | null | undefined, limit: number | null | undefined): Observable<PodcastEpisodesResponse> {
			return this.http.get<PodcastEpisodesResponse>(this.baseUri + 'podcasts/' + (pid == null ? '' : encodeURIComponent(pid)) + '/episodes&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Networks
		 * All iPlayer Radio networks - contains business logic for masterbrand and service relationships
		 * Get radio/networks.json
		 * @param {boolean} preset Returns all networks needed for iPlayer Radio responsive web navigation
		 * @param {boolean} international Returns all networks available internationally
		 * @return {NetworksResponse} OK
		 */
		GetRadioNetworks(preset: boolean | null | undefined, international: boolean | null | undefined): Observable<NetworksResponse> {
			return this.http.get<NetworksResponse>(this.baseUri + 'radio/networks.json?preset=' + preset + '&international=' + international, {});
		}

		/**
		 * Popular Episodes & Clips
		 * Retrieve Popular Episodes & Clips
		 * Get radio/popular
		 * @param {GetPopularEpisodesClipsType} type Programme type required. Accepts comma separated values
		 * @param {GetPopularEpisodesClipsDistinct} distinct Filter by deduplication rule. E.g. 'tleo' returns programmes with distinct top level episode objects
		 * @param {string} network Filter by network master brand ID (mid). Accepts comma separated values
		 * @param {string} network_url_key Filter by network URL key. Accepts comma separated values
		 * @param {string} category Filter by category. Accepts comma separated values
		 * @param {string} format Filter by format. Accepts comma separated values
		 * @param {GetPopularEpisodesClipsGroup} group Filter by group. Accepts comma separated values
		 * @param {GetPopularEpisodesClipsMedia_type} media_type Filter by programme media type. Accepts comma separated values
		 * @param {string} container Filter by container. Accepts any pid e.g. brand,series,episode
		 * @param {Array<string>} media_set Filter by media set name. Accepts comma separated combinations of the following: pc,mobile-download,android-download-high,apple-ios-download-high,mobile-cellular-main,mobile-phone-main,iptv-all
		 * @param {string} q Search query String
		 * @return {PopularResponse} OK
		 */
		GetPopularEpisodesClips(type: GetPopularEpisodesClipsType | null | undefined, distinct: GetPopularEpisodesClipsDistinct | null | undefined, network: string | null | undefined, network_url_key: string | null | undefined, category: string | null | undefined, format: string | null | undefined, group: GetPopularEpisodesClipsGroup | null | undefined, media_type: GetPopularEpisodesClipsMedia_type | null | undefined, container: string | null | undefined, media_set: Array<string> | null | undefined, q: string | null | undefined): Observable<PopularResponse> {
			return this.http.get<PopularResponse>(this.baseUri + 'radio/popular?type=' + type + '&distinct=' + distinct + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&network_url_key=' + (network_url_key == null ? '' : encodeURIComponent(network_url_key)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&group=' + group + '&media_type=' + media_type + '&container=' + (container == null ? '' : encodeURIComponent(container)) + '&' + media_set?.map(z => `media_set=${encodeURIComponent(z)}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Radio programmes
		 * Provides a paginated list of programmes by PID (brand, series, episode and clip). Accepts various filters and sorting methods.
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining results as an array of Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get radio/programmes
		 * @param {GetPopularEpisodesClipsDistinct} kind Filter by provided query. E.g. 'tleo' returns top level objects, ie. brands, orphaned series, and orphaned episodes
		 * @param {string} network Filter by network master brand ID (mid). Accepts comma separated values
		 * @param {string} network_url_key Filter by network URL key. Accepts comma separated values
		 * @param {string} category Filter by category id. Accepts comma separated values. See /category endpoint below for the type of response provided
		 * @param {GetRadioProgrammesSort} sort Sort by provided query. E.g. 'title' sorts in ascending order, and -title sorts in descending order
		 * @param {string} container Filter by container. Accepts any brand or series pid
		 * @param {GetRadioProgrammesType} type Filter by programme type. Accepts comma separated values
		 * @return {ProgrammesResponse} OK
		 */
		GetRadioProgrammes(kind: GetPopularEpisodesClipsDistinct | null | undefined, network: string | null | undefined, network_url_key: string | null | undefined, category: string | null | undefined, sort: GetRadioProgrammesSort | null | undefined, container: string | null | undefined, type: GetRadioProgrammesType | null | undefined): Observable<ProgrammesResponse> {
			return this.http.get<ProgrammesResponse>(this.baseUri + 'radio/programmes?kind=' + kind + '&network=' + (network == null ? '' : encodeURIComponent(network)) + '&network_url_key=' + (network_url_key == null ? '' : encodeURIComponent(network_url_key)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&sort=' + sort + '&container=' + (container == null ? '' : encodeURIComponent(container)) + '&type=' + type, {});
		}

		/**
		 * Available radio programme by Pid
		 * Find programmes by PID (brand, series, episode and clip)
		 * N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
		 * and Clip Summaries so we are defining results as an array of Programme Summary here.  This will be resolved in V3 with full support for
		 * anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
		 * Get radio/programmes/{pid}
		 * @param {string} pid pid
		 * @return {ProgrammesResponse} OK
		 */
		GetRadioProgrammesByPid(pid: string): Observable<ProgrammesResponse> {
			return this.http.get<ProgrammesResponse>(this.baseUri + 'radio/programmes/' + (pid == null ? '' : encodeURIComponent(pid)), {});
		}
	}

	export enum BroadcastsGetByOffsetAndLimitAndService_idAndDateAndSortSort { start_at = 'start_at', '-start_at' = '-start_at', end_at = 'end_at', '-end_at' = '-end_at' }

	export enum BroadcastsGetByOffsetAndLimitAndService_idAndOn_airAndNextAndPreviousAndSortOn_air { now = 'now', previous = 'previous', next = 'next' }

	export enum CategoriesGetByKindKind { promoted = 'promoted' }

	export enum GetMusicExportJobsVendor { spotify = 'spotify', deezer = 'deezer', youtube = 'youtube', itunes = 'itunes' }

	export enum GetMusicExportTracksStatus { failed = 'failed', done = 'done', pending = 'pending' }

	export enum GetPersonalisedMusicFavouritesAction { favourited = 'favourited', unfavourited = 'unfavourited' }

	export enum GetPersonalisedMusicFavouritesByTypeType { clips = 'clips', tracks = 'tracks' }

	export enum GetPersonalisedMusicFollowsAction { followed = 'followed', unfollowed = 'unfollowed' }

	export enum GetPersonalisedMusicFollowsMusic_context { events = 'events', ivote = 'ivote', music = 'music', musicplaylist = 'musicplaylist', programmes = 'programmes', radio = 'radio', unknown = 'unknown' }

	export enum GetPersonalisedMusicFollowsByTypeType { playlists = 'playlists', services = 'services', networks = 'networks', genres = 'genres', categories = 'categories', artists = 'artists' }

	export enum GetRecommendationsRights { web = 'web', mobile = 'mobile' }

	export enum GetPersonalisedRadioFavouritesSort { programme_titles = 'programme_titles', available_from_date = 'available_from_date', available_to_date = 'available_to_date' }

	export enum GetPersonalisedRadioFavouritesByTypeType { clips = 'clips', episodes = 'episodes' }

	export enum GetPersonalisedRadioFollowsByTypeType { brands = 'brands', series = 'series' }

	export enum GetPodcastsSort { title = 'title', '-title' = '-title', available_from_date = 'available_from_date', '-available_from_date' = '-available_from_date' }

	export enum GetPodcastsCoverage { local = 'local', national = 'national', regional = 'regional' }

	export enum GetPopularEpisodesClipsType { episode = 'episode', clip = 'clip', 'episode,clip' = 'episode,clip' }

	export enum GetPopularEpisodesClipsDistinct { tleo = 'tleo' }

	export enum GetPopularEpisodesClipsGroup { tv = 'tv', radio = 'radio', 'tv,radio' = 'tv,radio' }

	export enum GetPopularEpisodesClipsMedia_type { audio = 'audio', video = 'video', 'audio,video' = 'audio,video' }

	export enum GetRadioProgrammesSort { available_from_date = 'available_from_date', '-available_from_date' = '-available_from_date', title = 'title', '-title' = '-title' }

	export enum GetRadioProgrammesType { brand = 'brand', series = 'series', episode = 'episode', clip = 'clip', 'episode,clip' = 'episode,clip' }

}

