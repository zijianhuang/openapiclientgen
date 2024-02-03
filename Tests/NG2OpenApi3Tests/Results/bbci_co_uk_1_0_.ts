import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Added {

		/** Required */
		programme: Programme;

		/** Required */
		type: AddedType;

		/** Required */
		urn: string;
	}
	export interface AddedFormProperties {

		/** Required */
		type: FormControl<AddedType | null | undefined>,

		/** Required */
		urn: FormControl<string | null | undefined>,
	}
	export function CreateAddedFormGroup() {
		return new FormGroup<AddedFormProperties>({
			type: new FormControl<AddedType | null | undefined>(undefined, [Validators.required]),
			urn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Programme {

		/** Required */
		categories: Array<string>;

		/** Required */
		count: number;

		/** Required */
		id: string;

		/** Required */
		images: ProgrammeImages;

		/** Required */
		initial_children: Array<Episode>;
		labels?: ProgrammeLabels;

		/** Required */
		lexical_sort_letter: string;

		/** Required */
		master_brand: Master_brand;
		programme_type?: ProgrammeProgramme_type | null;

		/** Required */
		status: ProgrammeStatus;

		/** Required */
		synopses: ProgrammeSynopses;

		/** Required */
		title: string;
		tleo_type?: ProgrammeTleo_type | null;

		/** Required */
		type: ProgrammeType;
	}
	export interface ProgrammeFormProperties {

		/** Required */
		count: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lexical_sort_letter: FormControl<string | null | undefined>,
		programme_type: FormControl<ProgrammeProgramme_type | null | undefined>,

		/** Required */
		status: FormControl<ProgrammeStatus | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
		tleo_type: FormControl<ProgrammeTleo_type | null | undefined>,

		/** Required */
		type: FormControl<ProgrammeType | null | undefined>,
	}
	export function CreateProgrammeFormGroup() {
		return new FormGroup<ProgrammeFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lexical_sort_letter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			programme_type: new FormControl<ProgrammeProgramme_type | null | undefined>(undefined),
			status: new FormControl<ProgrammeStatus | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tleo_type: new FormControl<ProgrammeTleo_type | null | undefined>(undefined),
			type: new FormControl<ProgrammeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProgrammeImages {
		inherited_from?: string | null;

		/** Required */
		standard: string;

		/** Required */
		type: ProgrammeImagesType;
	}
	export interface ProgrammeImagesFormProperties {
		inherited_from: FormControl<string | null | undefined>,

		/** Required */
		standard: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ProgrammeImagesType | null | undefined>,
	}
	export function CreateProgrammeImagesFormGroup() {
		return new FormGroup<ProgrammeImagesFormProperties>({
			inherited_from: new FormControl<string | null | undefined>(undefined),
			standard: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ProgrammeImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProgrammeImagesType { image = 'image' }

	export interface Episode {

		/** Required */
		audio_described: boolean;

		/** Required */
		categories: Array<string>;
		childrens?: boolean | null;
		editorial_subtitle?: string | null;
		editorial_title?: string | null;
		event_group_id?: string | null;

		/** Required */
		guidance: boolean;
		has_credits?: boolean | null;

		/** Required */
		id: string;

		/** Required */
		images: EpisodeImages;
		labels?: EpisodeLabels;

		/** Required */
		lexical_sort_letter: string;
		live?: boolean | null;
		live_subtitle?: string | null;
		live_title?: string | null;

		/** Required */
		master_brand: Master_brand;
		next_broadcast?: EpisodeNext_broadcast;
		numeric_tleo_position?: number | null;
		original_title?: string | null;
		parent_id?: string | null;
		parent_position?: number | null;
		preview_id?: string | null;
		programme_type?: EpisodeProgramme_type | null;
		promoted?: boolean | null;
		EpisodeRelated_links?: Array<EpisodeRelated_links>;
		release_date?: string | null;
		release_date_time?: string | null;

		/** Minimum items: 1 */
		requires_ab?: Array<string>;

		/** Required */
		requires_sign_in: boolean;
		requires_tv_licence?: boolean | null;

		/** Required */
		signed: boolean;
		slice_id?: string | null;
		slice_subtitle?: string | null;

		/** Required */
		status: EpisodeStatus;
		subtitle?: string | null;

		/** Required */
		synopses: EpisodeSynopses;
		EpisodeTests?: Array<EpisodeTests>;

		/** Required */
		title: string;

		/** Required */
		tleo_id: string;

		/** Required */
		tleo_type: EpisodeTleo_type;

		/** Required */
		type: EpisodeType;

		/** Required */
		versions: Array<string>;
	}
	export interface EpisodeFormProperties {

		/** Required */
		audio_described: FormControl<boolean | null | undefined>,
		childrens: FormControl<boolean | null | undefined>,
		editorial_subtitle: FormControl<string | null | undefined>,
		editorial_title: FormControl<string | null | undefined>,
		event_group_id: FormControl<string | null | undefined>,

		/** Required */
		guidance: FormControl<boolean | null | undefined>,
		has_credits: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lexical_sort_letter: FormControl<string | null | undefined>,
		live: FormControl<boolean | null | undefined>,
		live_subtitle: FormControl<string | null | undefined>,
		live_title: FormControl<string | null | undefined>,
		numeric_tleo_position: FormControl<number | null | undefined>,
		original_title: FormControl<string | null | undefined>,
		parent_id: FormControl<string | null | undefined>,
		parent_position: FormControl<number | null | undefined>,
		preview_id: FormControl<string | null | undefined>,
		programme_type: FormControl<EpisodeProgramme_type | null | undefined>,
		promoted: FormControl<boolean | null | undefined>,
		release_date: FormControl<string | null | undefined>,
		release_date_time: FormControl<string | null | undefined>,

		/** Required */
		requires_sign_in: FormControl<boolean | null | undefined>,
		requires_tv_licence: FormControl<boolean | null | undefined>,

		/** Required */
		signed: FormControl<boolean | null | undefined>,
		slice_id: FormControl<string | null | undefined>,
		slice_subtitle: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<EpisodeStatus | null | undefined>,
		subtitle: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		tleo_id: FormControl<string | null | undefined>,

		/** Required */
		tleo_type: FormControl<EpisodeTleo_type | null | undefined>,

		/** Required */
		type: FormControl<EpisodeType | null | undefined>,
	}
	export function CreateEpisodeFormGroup() {
		return new FormGroup<EpisodeFormProperties>({
			audio_described: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			childrens: new FormControl<boolean | null | undefined>(undefined),
			editorial_subtitle: new FormControl<string | null | undefined>(undefined),
			editorial_title: new FormControl<string | null | undefined>(undefined),
			event_group_id: new FormControl<string | null | undefined>(undefined),
			guidance: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			has_credits: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lexical_sort_letter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			live: new FormControl<boolean | null | undefined>(undefined),
			live_subtitle: new FormControl<string | null | undefined>(undefined),
			live_title: new FormControl<string | null | undefined>(undefined),
			numeric_tleo_position: new FormControl<number | null | undefined>(undefined),
			original_title: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			parent_position: new FormControl<number | null | undefined>(undefined),
			preview_id: new FormControl<string | null | undefined>(undefined),
			programme_type: new FormControl<EpisodeProgramme_type | null | undefined>(undefined),
			promoted: new FormControl<boolean | null | undefined>(undefined),
			release_date: new FormControl<string | null | undefined>(undefined),
			release_date_time: new FormControl<string | null | undefined>(undefined),
			requires_sign_in: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			requires_tv_licence: new FormControl<boolean | null | undefined>(undefined),
			signed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			slice_id: new FormControl<string | null | undefined>(undefined),
			slice_subtitle: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EpisodeStatus | null | undefined>(undefined, [Validators.required]),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tleo_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tleo_type: new FormControl<EpisodeTleo_type | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EpisodeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EpisodeImages {
		character_image?: string | null;
		inherited_from?: string | null;
		live?: string | null;
		portrait?: string | null;
		promotional?: string | null;
		promotional_with_logo?: string | null;

		/** Required */
		standard: string;

		/** Required */
		type: EpisodeImagesType;
	}
	export interface EpisodeImagesFormProperties {
		character_image: FormControl<string | null | undefined>,
		inherited_from: FormControl<string | null | undefined>,
		live: FormControl<string | null | undefined>,
		portrait: FormControl<string | null | undefined>,
		promotional: FormControl<string | null | undefined>,
		promotional_with_logo: FormControl<string | null | undefined>,

		/** Required */
		standard: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<EpisodeImagesType | null | undefined>,
	}
	export function CreateEpisodeImagesFormGroup() {
		return new FormGroup<EpisodeImagesFormProperties>({
			character_image: new FormControl<string | null | undefined>(undefined),
			inherited_from: new FormControl<string | null | undefined>(undefined),
			live: new FormControl<string | null | undefined>(undefined),
			portrait: new FormControl<string | null | undefined>(undefined),
			promotional: new FormControl<string | null | undefined>(undefined),
			promotional_with_logo: new FormControl<string | null | undefined>(undefined),
			standard: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EpisodeImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EpisodeImagesType { image = 'image' }

	export interface EpisodeLabels {
		category?: string | null;
		editorial?: string | null;
		editorial_category?: string | null;
		time?: string | null;
	}
	export interface EpisodeLabelsFormProperties {
		category: FormControl<string | null | undefined>,
		editorial: FormControl<string | null | undefined>,
		editorial_category: FormControl<string | null | undefined>,
		time: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeLabelsFormGroup() {
		return new FormGroup<EpisodeLabelsFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			editorial: new FormControl<string | null | undefined>(undefined),
			editorial_category: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Master_brand {

		/** Required */
		attribution: string;

		/** Required */
		id: string;
		ident_id?: string | null;

		/** Required */
		titles: Master_brandTitles;
	}
	export interface Master_brandFormProperties {

		/** Required */
		attribution: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		ident_id: FormControl<string | null | undefined>,
	}
	export function CreateMaster_brandFormGroup() {
		return new FormGroup<Master_brandFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ident_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Master_brandTitles {

		/** Required */
		large: string;

		/** Required */
		medium: string;

		/** Required */
		small: string;
	}
	export interface Master_brandTitlesFormProperties {

		/** Required */
		large: FormControl<string | null | undefined>,

		/** Required */
		medium: FormControl<string | null | undefined>,

		/** Required */
		small: FormControl<string | null | undefined>,
	}
	export function CreateMaster_brandTitlesFormGroup() {
		return new FormGroup<Master_brandTitlesFormProperties>({
			large: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			medium: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			small: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EpisodeNext_broadcast {

		/** Required */
		channel_title: string;

		/** Required */
		scheduled_start: string;
	}
	export interface EpisodeNext_broadcastFormProperties {

		/** Required */
		channel_title: FormControl<string | null | undefined>,

		/** Required */
		scheduled_start: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeNext_broadcastFormGroup() {
		return new FormGroup<EpisodeNext_broadcastFormProperties>({
			channel_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduled_start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EpisodeProgramme_type { narrative = 'narrative', sequential = 'sequential', 'self-contained' = 'self-contained', strand = 'strand', unclassified = 'unclassified', 'one-off' = 'one-off' }

	export interface EpisodeRelated_links {

		/** Required */
		id: string;

		/** Required */
		kind: string;

		/** Required */
		title: string;

		/** Required */
		type: EpisodeRelated_linksType;

		/** Required */
		url: string;
	}
	export interface EpisodeRelated_linksFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<EpisodeRelated_linksType | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeRelated_linksFormGroup() {
		return new FormGroup<EpisodeRelated_linksFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EpisodeRelated_linksType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EpisodeRelated_linksType { link = 'link' }

	export enum EpisodeStatus { available = 'available', unavailable = 'unavailable' }

	export interface EpisodeSynopses {
		editorial?: string | null;
		large?: string | null;
		live?: string | null;
		medium?: string | null;
		preview?: string | null;
		programme_small?: string | null;
		small?: string | null;
	}
	export interface EpisodeSynopsesFormProperties {
		editorial: FormControl<string | null | undefined>,
		large: FormControl<string | null | undefined>,
		live: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		preview: FormControl<string | null | undefined>,
		programme_small: FormControl<string | null | undefined>,
		small: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeSynopsesFormGroup() {
		return new FormGroup<EpisodeSynopsesFormProperties>({
			editorial: new FormControl<string | null | undefined>(undefined),
			large: new FormControl<string | null | undefined>(undefined),
			live: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			preview: new FormControl<string | null | undefined>(undefined),
			programme_small: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EpisodeTests {

		/** Required */
		id: string;

		/** Required */
		status: EpisodeTestsStatus;

		/** Required */
		EpisodeTestsVariants: Array<EpisodeTestsVariants>;
	}
	export interface EpisodeTestsFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<EpisodeTestsStatus | null | undefined>,
	}
	export function CreateEpisodeTestsFormGroup() {
		return new FormGroup<EpisodeTestsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<EpisodeTestsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EpisodeTestsStatus { active = 'active' }

	export interface EpisodeTestsVariants {

		/** Required */
		data: EpisodeTestsVariantsData;

		/** Required */
		id: string;
	}
	export interface EpisodeTestsVariantsFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeTestsVariantsFormGroup() {
		return new FormGroup<EpisodeTestsVariantsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EpisodeTestsVariantsData {

		/** Required */
		images: EpisodeTestsVariantsDataImages;
	}
	export interface EpisodeTestsVariantsDataFormProperties {
	}
	export function CreateEpisodeTestsVariantsDataFormGroup() {
		return new FormGroup<EpisodeTestsVariantsDataFormProperties>({
		});

	}

	export interface EpisodeTestsVariantsDataImages {

		/** Required */
		standard: string;

		/** Required */
		type: EpisodeTestsVariantsDataImagesType;
	}
	export interface EpisodeTestsVariantsDataImagesFormProperties {

		/** Required */
		standard: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<EpisodeTestsVariantsDataImagesType | null | undefined>,
	}
	export function CreateEpisodeTestsVariantsDataImagesFormGroup() {
		return new FormGroup<EpisodeTestsVariantsDataImagesFormProperties>({
			standard: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EpisodeTestsVariantsDataImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EpisodeTestsVariantsDataImagesType { episode = 'episode', episode_large = 'episode_large' }

	export enum EpisodeTleo_type { episode = 'episode', brand = 'brand', series = 'series' }

	export enum EpisodeType { episode = 'episode', episode_large = 'episode_large' }

	export interface ProgrammeLabels {
		category?: string | null;
	}
	export interface ProgrammeLabelsFormProperties {
		category: FormControl<string | null | undefined>,
	}
	export function CreateProgrammeLabelsFormGroup() {
		return new FormGroup<ProgrammeLabelsFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProgrammeProgramme_type { narrative = 'narrative', sequential = 'sequential', 'self-contained' = 'self-contained', strand = 'strand', unclassified = 'unclassified', 'one-off' = 'one-off' }

	export enum ProgrammeStatus { available = 'available', unavailable = 'unavailable' }

	export interface ProgrammeSynopses {
		large?: string | null;
		medium?: string | null;
		small?: string | null;
	}
	export interface ProgrammeSynopsesFormProperties {
		large: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		small: FormControl<string | null | undefined>,
	}
	export function CreateProgrammeSynopsesFormGroup() {
		return new FormGroup<ProgrammeSynopsesFormProperties>({
			large: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProgrammeTleo_type { brand = 'brand', series = 'series', episode = 'episode' }

	export enum ProgrammeType { programme = 'programme', programme_large = 'programme_large' }

	export enum AddedType { added = 'added' }

	export interface Broadcast {
		available_on_hd_service?: string | null;

		/** Required */
		blanked: boolean;
		channel_title?: string | null;
		duration?: BroadcastDuration;

		/** Required */
		episode: Episode;

		/** Required */
		episode_id: string;
		BroadcastEvents?: Array<BroadcastEvents>;

		/** Required */
		id: string;

		/** Required */
		repeat: boolean;

		/** Required */
		scheduled_end: string;

		/** Required */
		scheduled_start: string;

		/** Required */
		service_id: string;
		transmission_end?: string | null;
		transmission_start?: string | null;

		/** Required */
		type: BroadcastType;

		/** Required */
		version_id: string;
	}
	export interface BroadcastFormProperties {
		available_on_hd_service: FormControl<string | null | undefined>,

		/** Required */
		blanked: FormControl<boolean | null | undefined>,
		channel_title: FormControl<string | null | undefined>,

		/** Required */
		episode_id: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		repeat: FormControl<boolean | null | undefined>,

		/** Required */
		scheduled_end: FormControl<string | null | undefined>,

		/** Required */
		scheduled_start: FormControl<string | null | undefined>,

		/** Required */
		service_id: FormControl<string | null | undefined>,
		transmission_end: FormControl<string | null | undefined>,
		transmission_start: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BroadcastType | null | undefined>,

		/** Required */
		version_id: FormControl<string | null | undefined>,
	}
	export function CreateBroadcastFormGroup() {
		return new FormGroup<BroadcastFormProperties>({
			available_on_hd_service: new FormControl<string | null | undefined>(undefined),
			blanked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			channel_title: new FormControl<string | null | undefined>(undefined),
			episode_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repeat: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scheduled_end: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduled_start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transmission_end: new FormControl<string | null | undefined>(undefined),
			transmission_start: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BroadcastType | null | undefined>(undefined, [Validators.required]),
			version_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BroadcastDuration {

		/** Required */
		text: string;

		/** Required */
		value: string;
	}
	export interface BroadcastDurationFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBroadcastDurationFormGroup() {
		return new FormGroup<BroadcastDurationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BroadcastEvents {

		/** Required */
		name: string;

		/** Required */
		system: string;

		/** Required */
		time: string;
	}
	export interface BroadcastEventsFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		system: FormControl<string | null | undefined>,

		/** Required */
		time: FormControl<string | null | undefined>,
	}
	export function CreateBroadcastEventsFormGroup() {
		return new FormGroup<BroadcastEventsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			system: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BroadcastType { broadcast = 'broadcast' }

	export interface Category {
		child_episode_count?: number | null;
		child_programme_count?: number | null;
		contextual_title?: string | null;

		/** Required */
		id: string;

		/** Required */
		kind: CategoryKind;
		parent_category?: string | null;
		sub_categories?: Array<Category>;

		/** Required */
		title: string;

		/** Required */
		type: CategoryType;
	}
	export interface CategoryFormProperties {
		child_episode_count: FormControl<number | null | undefined>,
		child_programme_count: FormControl<number | null | undefined>,
		contextual_title: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<CategoryKind | null | undefined>,
		parent_category: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CategoryType | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			child_episode_count: new FormControl<number | null | undefined>(undefined),
			child_programme_count: new FormControl<number | null | undefined>(undefined),
			contextual_title: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<CategoryKind | null | undefined>(undefined, [Validators.required]),
			parent_category: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CategoryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CategoryKind { genre = 'genre', accessibility = 'accessibility', national = 'national', childrens = 'childrens' }

	export enum CategoryType { category = 'category' }

	export interface Channel {

		/** Required */
		has_schedule: boolean;

		/** Required */
		id: string;

		/** Required */
		master_brand_id: string;

		/** Required */
		master_brand_title: string;
		on_air?: boolean | null;

		/** Required */
		title: string;

		/** Required */
		type: ChannelType;
	}
	export interface ChannelFormProperties {

		/** Required */
		has_schedule: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		master_brand_id: FormControl<string | null | undefined>,

		/** Required */
		master_brand_title: FormControl<string | null | undefined>,
		on_air: FormControl<boolean | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ChannelType | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			has_schedule: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			master_brand_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			master_brand_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			on_air: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ChannelType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ChannelType { channel = 'channel' }

	export interface Clip {

		/** Required */
		id: string;

		/** Required */
		images: ClipImages;
		labels?: ClipLabels;

		/** Required */
		master_brand: Master_brand;
		onward_journey?: ClipOnward_journey;
		promotion_type?: ClipPromotion_type | null;

		/** Required */
		synopses: ClipSynopses;

		/** Required */
		title: string;

		/** Required */
		tleo_id: string;
		tleo_type?: ClipTleo_type | null;

		/** Required */
		type: ClipType;

		/** Required */
		ClipVersions: Array<ClipVersions>;
	}
	export interface ClipFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		promotion_type: FormControl<ClipPromotion_type | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		tleo_id: FormControl<string | null | undefined>,
		tleo_type: FormControl<ClipTleo_type | null | undefined>,

		/** Required */
		type: FormControl<ClipType | null | undefined>,
	}
	export function CreateClipFormGroup() {
		return new FormGroup<ClipFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			promotion_type: new FormControl<ClipPromotion_type | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tleo_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tleo_type: new FormControl<ClipTleo_type | null | undefined>(undefined),
			type: new FormControl<ClipType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClipImages {
		inherited_from?: string | null;

		/** Required */
		standard: string;

		/** Required */
		type: ClipImagesType;
	}
	export interface ClipImagesFormProperties {
		inherited_from: FormControl<string | null | undefined>,

		/** Required */
		standard: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ClipImagesType | null | undefined>,
	}
	export function CreateClipImagesFormGroup() {
		return new FormGroup<ClipImagesFormProperties>({
			inherited_from: new FormControl<string | null | undefined>(undefined),
			standard: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ClipImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClipImagesType { image = 'image' }

	export interface ClipLabels {
		category?: string | null;
		editorial?: string | null;
	}
	export interface ClipLabelsFormProperties {
		category: FormControl<string | null | undefined>,
		editorial: FormControl<string | null | undefined>,
	}
	export function CreateClipLabelsFormGroup() {
		return new FormGroup<ClipLabelsFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			editorial: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClipOnward_journey {
		id?: string | null;
		type?: ClipOnward_journeyType | null;
	}
	export interface ClipOnward_journeyFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<ClipOnward_journeyType | null | undefined>,
	}
	export function CreateClipOnward_journeyFormGroup() {
		return new FormGroup<ClipOnward_journeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ClipOnward_journeyType | null | undefined>(undefined),
		});

	}

	export enum ClipOnward_journeyType { episode = 'episode' }

	export enum ClipPromotion_type { available_now = 'available_now', coming_soon = 'coming_soon' }

	export interface ClipSynopses {
		editorial?: string | null;
		large?: string | null;
		medium?: string | null;
		small?: string | null;
	}
	export interface ClipSynopsesFormProperties {
		editorial: FormControl<string | null | undefined>,
		large: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		small: FormControl<string | null | undefined>,
	}
	export function CreateClipSynopsesFormGroup() {
		return new FormGroup<ClipSynopsesFormProperties>({
			editorial: new FormControl<string | null | undefined>(undefined),
			large: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClipTleo_type { episode = 'episode', brand = 'brand', series = 'series' }

	export enum ClipType { clip = 'clip' }

	export interface ClipVersions {

		/** Required */
		availability: ClipVersionsAvailability;
		credits_start?: number | null;

		/** Required */
		download: boolean;

		/** Required */
		duration: ClipVersionsDuration;
		events?: Array<string>;
		first_broadcast?: string | null;
		first_broadcast_date_time?: string | null;
		guidance?: ClipVersionsGuidance;

		/** Required */
		hd: boolean;

		/** Required */
		id: string;
		interactions?: Array<Interaction>;

		/** Required */
		kind: ClipVersionsKind;
		rrc?: ClipVersionsRrc;
		service_id?: string | null;

		/** Required */
		type: ClipVersionsType;

		/** Required */
		uhd: boolean;
	}
	export interface ClipVersionsFormProperties {
		credits_start: FormControl<number | null | undefined>,

		/** Required */
		download: FormControl<boolean | null | undefined>,
		first_broadcast: FormControl<string | null | undefined>,
		first_broadcast_date_time: FormControl<string | null | undefined>,

		/** Required */
		hd: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<ClipVersionsKind | null | undefined>,
		service_id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ClipVersionsType | null | undefined>,

		/** Required */
		uhd: FormControl<boolean | null | undefined>,
	}
	export function CreateClipVersionsFormGroup() {
		return new FormGroup<ClipVersionsFormProperties>({
			credits_start: new FormControl<number | null | undefined>(undefined),
			download: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			first_broadcast: new FormControl<string | null | undefined>(undefined),
			first_broadcast_date_time: new FormControl<string | null | undefined>(undefined),
			hd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<ClipVersionsKind | null | undefined>(undefined, [Validators.required]),
			service_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ClipVersionsType | null | undefined>(undefined, [Validators.required]),
			uhd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClipVersionsAvailability {
		accurate_start?: string | null;
		end?: string | null;
		remaining?: ClipVersionsAvailabilityRemaining;

		/** Required */
		start: string;
	}
	export interface ClipVersionsAvailabilityFormProperties {
		accurate_start: FormControl<string | null | undefined>,
		end: FormControl<string | null | undefined>,

		/** Required */
		start: FormControl<string | null | undefined>,
	}
	export function CreateClipVersionsAvailabilityFormGroup() {
		return new FormGroup<ClipVersionsAvailabilityFormProperties>({
			accurate_start: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClipVersionsAvailabilityRemaining {

		/** Required */
		text: string;
	}
	export interface ClipVersionsAvailabilityRemainingFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateClipVersionsAvailabilityRemainingFormGroup() {
		return new FormGroup<ClipVersionsAvailabilityRemainingFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClipVersionsDuration {

		/** Required */
		text: string;

		/** Required */
		value: string;
	}
	export interface ClipVersionsDurationFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateClipVersionsDurationFormGroup() {
		return new FormGroup<ClipVersionsDurationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClipVersionsGuidance {

		/** Required */
		id: string;
		text?: ClipVersionsGuidanceText;
	}
	export interface ClipVersionsGuidanceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateClipVersionsGuidanceFormGroup() {
		return new FormGroup<ClipVersionsGuidanceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClipVersionsGuidanceText {
		large?: string | null;
		medium?: string | null;
		small?: string | null;
	}
	export interface ClipVersionsGuidanceTextFormProperties {
		large: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		small: FormControl<string | null | undefined>,
	}
	export function CreateClipVersionsGuidanceTextFormGroup() {
		return new FormGroup<ClipVersionsGuidanceTextFormProperties>({
			large: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Interaction {

		/** Required */
		interaction_points: InteractionInteraction_points;

		/** Required */
		subtype: string;

		/** Required */
		title: InteractionTitle;

		/** Required */
		type: string;
	}
	export interface InteractionFormProperties {

		/** Required */
		subtype: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInteractionFormGroup() {
		return new FormGroup<InteractionFormProperties>({
			subtype: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InteractionInteraction_points {

		/** Required */
		show_from: number;

		/** Required */
		skip_to: number;
	}
	export interface InteractionInteraction_pointsFormProperties {

		/** Required */
		show_from: FormControl<number | null | undefined>,

		/** Required */
		skip_to: FormControl<number | null | undefined>,
	}
	export function CreateInteractionInteraction_pointsFormGroup() {
		return new FormGroup<InteractionInteraction_pointsFormProperties>({
			show_from: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			skip_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InteractionTitle {

		/** Required */
		long: string;

		/** Required */
		short: string;
	}
	export interface InteractionTitleFormProperties {

		/** Required */
		long: FormControl<string | null | undefined>,

		/** Required */
		short: FormControl<string | null | undefined>,
	}
	export function CreateInteractionTitleFormGroup() {
		return new FormGroup<InteractionTitleFormProperties>({
			long: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClipVersionsKind { legal = 'legal', editorial = 'editorial', 'technical-replacement' = 'technical-replacement', original = 'original', 'iplayer-version' = 'iplayer-version', lengthened = 'lengthened', shortened = 'shortened', 'pre-watershed' = 'pre-watershed', 'post-watershed' = 'post-watershed', 'warnings-higher' = 'warnings-higher', 'warnings-lower' = 'warnings-lower', 'warnings-none' = 'warnings-none', duplication = 'duplication', 'open-subtitled' = 'open-subtitled', other = 'other', 'audio-described' = 'audio-described', signed = 'signed', webcast = 'webcast', simulcast = 'simulcast' }

	export interface ClipVersionsRrc {

		/** Required */
		description: ClipVersionsRrcDescription;
		url?: string | null;
	}
	export interface ClipVersionsRrcFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateClipVersionsRrcFormGroup() {
		return new FormGroup<ClipVersionsRrcFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClipVersionsRrcDescription {

		/** Required */
		large: string;

		/** Required */
		small: string;
	}
	export interface ClipVersionsRrcDescriptionFormProperties {

		/** Required */
		large: FormControl<string | null | undefined>,

		/** Required */
		small: FormControl<string | null | undefined>,
	}
	export function CreateClipVersionsRrcDescriptionFormGroup() {
		return new FormGroup<ClipVersionsRrcDescriptionFormProperties>({
			large: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			small: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClipVersionsType { version = 'version', version_large = 'version_large' }

	export interface Group {
		count?: number | null;
		episode_sort_direction?: string | null;
		group_type?: GroupGroup_type | null;

		/** Required */
		id: string;
		images?: GroupImages;
		initial_children?: Array<string>;
		master_brand?: Master_brand;
		GroupRelated_links?: Array<GroupRelated_links>;
		short_title?: string | null;
		stacked?: boolean | null;
		synopses?: GroupSynopses;
		title?: string | null;

		/** Required */
		type: GroupType;
	}
	export interface GroupFormProperties {
		count: FormControl<number | null | undefined>,
		episode_sort_direction: FormControl<string | null | undefined>,
		group_type: FormControl<GroupGroup_type | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		short_title: FormControl<string | null | undefined>,
		stacked: FormControl<boolean | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<GroupType | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			episode_sort_direction: new FormControl<string | null | undefined>(undefined),
			group_type: new FormControl<GroupGroup_type | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			short_title: new FormControl<string | null | undefined>(undefined),
			stacked: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GroupType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroupGroup_type { tleo = 'tleo', curated = 'curated', automated = 'automated', event = 'event' }

	export interface GroupImages {

		/** Required */
		standard: string;

		/** Required */
		type: GroupImagesType;

		/** Required */
		vertical: string;
	}
	export interface GroupImagesFormProperties {

		/** Required */
		standard: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<GroupImagesType | null | undefined>,

		/** Required */
		vertical: FormControl<string | null | undefined>,
	}
	export function CreateGroupImagesFormGroup() {
		return new FormGroup<GroupImagesFormProperties>({
			standard: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<GroupImagesType | null | undefined>(undefined, [Validators.required]),
			vertical: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroupImagesType { image = 'image' }

	export interface GroupRelated_links {

		/** Required */
		kind: string;

		/** Required */
		title: string;

		/** Required */
		url: string;
	}
	export interface GroupRelated_linksFormProperties {

		/** Required */
		kind: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGroupRelated_linksFormGroup() {
		return new FormGroup<GroupRelated_linksFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GroupSynopses {
		large?: string | null;
		medium?: string | null;
		small?: string | null;
	}
	export interface GroupSynopsesFormProperties {
		large: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		small: FormControl<string | null | undefined>,
	}
	export function CreateGroupSynopsesFormGroup() {
		return new FormGroup<GroupSynopsesFormProperties>({
			large: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GroupType { group = 'group', group_large = 'group_large' }

	export interface Ibl {
	}
	export interface IblFormProperties {
	}
	export function CreateIblFormGroup() {
		return new FormGroup<IblFormProperties>({
		});

	}

	export interface Promotion {

		/** Required */
		id: string;
		images?: PromotionImages;
		labels?: PromotionLabels;
		subtitle?: string | null;
		synopses?: PromotionSynopses;
		title?: string | null;

		/** Required */
		type: PromotionType;
		url?: string | null;
	}
	export interface PromotionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		subtitle: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PromotionType | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePromotionFormGroup() {
		return new FormGroup<PromotionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PromotionType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PromotionImages {
		inherited_from?: string | null;

		/** Required */
		standard: string;

		/** Required */
		type: PromotionImagesType;
	}
	export interface PromotionImagesFormProperties {
		inherited_from: FormControl<string | null | undefined>,

		/** Required */
		standard: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PromotionImagesType | null | undefined>,
	}
	export function CreatePromotionImagesFormGroup() {
		return new FormGroup<PromotionImagesFormProperties>({
			inherited_from: new FormControl<string | null | undefined>(undefined),
			standard: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PromotionImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PromotionImagesType { image = 'image' }

	export interface PromotionLabels {

		/** Required */
		promotion: string;
	}
	export interface PromotionLabelsFormProperties {

		/** Required */
		promotion: FormControl<string | null | undefined>,
	}
	export function CreatePromotionLabelsFormGroup() {
		return new FormGroup<PromotionLabelsFormProperties>({
			promotion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PromotionSynopses {
		large?: string | null;
		medium?: string | null;
		small?: string | null;
	}
	export interface PromotionSynopsesFormProperties {
		large: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		small: FormControl<string | null | undefined>,
	}
	export function CreatePromotionSynopsesFormGroup() {
		return new FormGroup<PromotionSynopsesFormProperties>({
			large: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PromotionType { promotion = 'promotion' }

	export interface Region {

		/** Required */
		id: string;

		/** Required */
		kind: RegionKind;

		/** Required */
		short_id: string;

		/** Required */
		title: string;

		/** Required */
		type: RegionType;
	}
	export interface RegionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<RegionKind | null | undefined>,

		/** Required */
		short_id: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<RegionType | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<RegionKind | null | undefined>(undefined, [Validators.required]),
			short_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<RegionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegionKind { regional = 'regional', national = 'national' }

	export enum RegionType { region = 'region' }

	export interface Search_group {

		/** Required */
		episode: Episode;

		/** Required */
		id: string;

		/** Required */
		type: Search_groupType;
	}
	export interface Search_groupFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<Search_groupType | null | undefined>,
	}
	export function CreateSearch_groupFormGroup() {
		return new FormGroup<Search_groupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Search_groupType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Search_groupType { search_group = 'search_group' }

	export interface Store_version {

		/** Required */
		download: boolean;

		/** Required */
		duration: Store_versionDuration;
		guidance?: Store_versionGuidance;

		/** Required */
		hd: boolean;

		/** Required */
		id: string;

		/** Required */
		kind: string;

		/** Required */
		store_id: string;

		/** Required */
		store_profile: string;
		store_session?: Store_versionStore_session;

		/** Required */
		type: Store_versionType;
	}
	export interface Store_versionFormProperties {

		/** Required */
		download: FormControl<boolean | null | undefined>,

		/** Required */
		hd: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<string | null | undefined>,

		/** Required */
		store_id: FormControl<string | null | undefined>,

		/** Required */
		store_profile: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<Store_versionType | null | undefined>,
	}
	export function CreateStore_versionFormGroup() {
		return new FormGroup<Store_versionFormProperties>({
			download: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			store_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			store_profile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<Store_versionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Store_versionDuration {

		/** Required */
		text: string;

		/** Required */
		value: string;
	}
	export interface Store_versionDurationFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStore_versionDurationFormGroup() {
		return new FormGroup<Store_versionDurationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Store_versionGuidance {

		/** Required */
		id: string;
		text?: Store_versionGuidanceText;
	}
	export interface Store_versionGuidanceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateStore_versionGuidanceFormGroup() {
		return new FormGroup<Store_versionGuidanceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Store_versionGuidanceText {
		large?: string | null;
		medium?: string | null;
		small?: string | null;
	}
	export interface Store_versionGuidanceTextFormProperties {
		large: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		small: FormControl<string | null | undefined>,
	}
	export function CreateStore_versionGuidanceTextFormGroup() {
		return new FormGroup<Store_versionGuidanceTextFormProperties>({
			large: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Store_versionStore_session {
		ceiling?: number | null;

		/** Required */
		stats: Store_versionStore_sessionStats;

		/** Required */
		token: string;
	}
	export interface Store_versionStore_sessionFormProperties {
		ceiling: FormControl<number | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreateStore_versionStore_sessionFormGroup() {
		return new FormGroup<Store_versionStore_sessionFormProperties>({
			ceiling: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Store_versionStore_sessionStats {
		assetName?: string | null;
		contentType?: string | null;
		contentVariant?: string | null;
		episodeName?: string | null;
		parentPID?: string | null;
		parentPIDType?: string | null;
		productVariant?: string | null;
		viewerId?: string | null;
	}
	export interface Store_versionStore_sessionStatsFormProperties {
		assetName: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		contentVariant: FormControl<string | null | undefined>,
		episodeName: FormControl<string | null | undefined>,
		parentPID: FormControl<string | null | undefined>,
		parentPIDType: FormControl<string | null | undefined>,
		productVariant: FormControl<string | null | undefined>,
		viewerId: FormControl<string | null | undefined>,
	}
	export function CreateStore_versionStore_sessionStatsFormGroup() {
		return new FormGroup<Store_versionStore_sessionStatsFormProperties>({
			assetName: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			contentVariant: new FormControl<string | null | undefined>(undefined),
			episodeName: new FormControl<string | null | undefined>(undefined),
			parentPID: new FormControl<string | null | undefined>(undefined),
			parentPIDType: new FormControl<string | null | undefined>(undefined),
			productVariant: new FormControl<string | null | undefined>(undefined),
			viewerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Store_versionType { store_version = 'store_version' }

	export interface Trailer {

		/** Required */
		id: string;

		/** Required */
		kind: TrailerKind;

		/** Required */
		message: string;

		/** Required */
		title: string;

		/** Required */
		type: TrailerType;

		/** Required */
		version_id: string;
	}
	export interface TrailerFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<TrailerKind | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<TrailerType | null | undefined>,

		/** Required */
		version_id: FormControl<string | null | undefined>,
	}
	export function CreateTrailerFormGroup() {
		return new FormGroup<TrailerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<TrailerKind | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<TrailerType | null | undefined>(undefined, [Validators.required]),
			version_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TrailerKind { available_now = 'available_now', watch_now = 'watch_now', coming_soon = 'coming_soon', streaming_now_sounds = 'streaming_now_sounds', other = 'other' }

	export enum TrailerType { trailer = 'trailer' }

	export interface User_recommendation {

		/** Required */
		algorithm: string;

		/** Required */
		episode: Episode;

		/** Required */
		type: User_recommendationType;
	}
	export interface User_recommendationFormProperties {

		/** Required */
		algorithm: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<User_recommendationType | null | undefined>,
	}
	export function CreateUser_recommendationFormGroup() {
		return new FormGroup<User_recommendationFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<User_recommendationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum User_recommendationType { user_recommendation = 'user_recommendation' }

	export interface Version {

		/** Required */
		availability: VersionAvailability;
		credits_start?: number | null;

		/** Required */
		download: boolean;

		/** Required */
		duration: VersionDuration;
		events?: Array<string>;
		first_broadcast?: string | null;
		first_broadcast_date_time?: string | null;
		guidance?: VersionGuidance;

		/** Required */
		hd: boolean;

		/** Required */
		id: string;
		interactions?: Array<Interaction>;

		/** Required */
		kind: VersionKind;
		rrc?: VersionRrc;
		service_id?: string | null;

		/** Required */
		type: VersionType;

		/** Required */
		uhd: boolean;
	}
	export interface VersionFormProperties {
		credits_start: FormControl<number | null | undefined>,

		/** Required */
		download: FormControl<boolean | null | undefined>,
		first_broadcast: FormControl<string | null | undefined>,
		first_broadcast_date_time: FormControl<string | null | undefined>,

		/** Required */
		hd: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<VersionKind | null | undefined>,
		service_id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<VersionType | null | undefined>,

		/** Required */
		uhd: FormControl<boolean | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			credits_start: new FormControl<number | null | undefined>(undefined),
			download: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			first_broadcast: new FormControl<string | null | undefined>(undefined),
			first_broadcast_date_time: new FormControl<string | null | undefined>(undefined),
			hd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<VersionKind | null | undefined>(undefined, [Validators.required]),
			service_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<VersionType | null | undefined>(undefined, [Validators.required]),
			uhd: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VersionAvailability {
		accurate_start?: string | null;
		end?: string | null;
		remaining?: VersionAvailabilityRemaining;

		/** Required */
		start: string;
	}
	export interface VersionAvailabilityFormProperties {
		accurate_start: FormControl<string | null | undefined>,
		end: FormControl<string | null | undefined>,

		/** Required */
		start: FormControl<string | null | undefined>,
	}
	export function CreateVersionAvailabilityFormGroup() {
		return new FormGroup<VersionAvailabilityFormProperties>({
			accurate_start: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VersionAvailabilityRemaining {

		/** Required */
		text: string;
	}
	export interface VersionAvailabilityRemainingFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateVersionAvailabilityRemainingFormGroup() {
		return new FormGroup<VersionAvailabilityRemainingFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VersionDuration {

		/** Required */
		text: string;

		/** Required */
		value: string;
	}
	export interface VersionDurationFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateVersionDurationFormGroup() {
		return new FormGroup<VersionDurationFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VersionGuidance {

		/** Required */
		id: string;
		text?: VersionGuidanceText;
	}
	export interface VersionGuidanceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateVersionGuidanceFormGroup() {
		return new FormGroup<VersionGuidanceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VersionGuidanceText {
		large?: string | null;
		medium?: string | null;
		small?: string | null;
	}
	export interface VersionGuidanceTextFormProperties {
		large: FormControl<string | null | undefined>,
		medium: FormControl<string | null | undefined>,
		small: FormControl<string | null | undefined>,
	}
	export function CreateVersionGuidanceTextFormGroup() {
		return new FormGroup<VersionGuidanceTextFormProperties>({
			large: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VersionKind { legal = 'legal', editorial = 'editorial', 'technical-replacement' = 'technical-replacement', original = 'original', 'iplayer-version' = 'iplayer-version', lengthened = 'lengthened', shortened = 'shortened', 'pre-watershed' = 'pre-watershed', 'post-watershed' = 'post-watershed', 'warnings-higher' = 'warnings-higher', 'warnings-lower' = 'warnings-lower', 'warnings-none' = 'warnings-none', duplication = 'duplication', 'open-subtitled' = 'open-subtitled', other = 'other', 'audio-described' = 'audio-described', signed = 'signed', webcast = 'webcast', simulcast = 'simulcast' }

	export interface VersionRrc {

		/** Required */
		description: VersionRrcDescription;
		url?: string | null;
	}
	export interface VersionRrcFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateVersionRrcFormGroup() {
		return new FormGroup<VersionRrcFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VersionRrcDescription {

		/** Required */
		large: string;

		/** Required */
		small: string;
	}
	export interface VersionRrcDescriptionFormProperties {

		/** Required */
		large: FormControl<string | null | undefined>,

		/** Required */
		small: FormControl<string | null | undefined>,
	}
	export function CreateVersionRrcDescriptionFormGroup() {
		return new FormGroup<VersionRrcDescriptionFormProperties>({
			large: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			small: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VersionType { version = 'version', version_large = 'version_large' }

	export interface Watching {

		/** Required */
		episode: Episode;

		/** Required */
		has_next: boolean;
		offset?: number | null;

		/** Required */
		programme: Programme;
		progress?: number | null;
		remaining?: number | null;
		status?: WatchingStatus | null;

		/** Required */
		type: WatchingType;

		/** Required */
		urn: string;

		/** Required */
		version: Version;
	}
	export interface WatchingFormProperties {

		/** Required */
		has_next: FormControl<boolean | null | undefined>,
		offset: FormControl<number | null | undefined>,
		progress: FormControl<number | null | undefined>,
		remaining: FormControl<number | null | undefined>,
		status: FormControl<WatchingStatus | null | undefined>,

		/** Required */
		type: FormControl<WatchingType | null | undefined>,

		/** Required */
		urn: FormControl<string | null | undefined>,
	}
	export function CreateWatchingFormGroup() {
		return new FormGroup<WatchingFormProperties>({
			has_next: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
			remaining: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<WatchingStatus | null | undefined>(undefined),
			type: new FormControl<WatchingType | null | undefined>(undefined, [Validators.required]),
			urn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WatchingStatus { current = 'current', next = 'next', ended = 'ended' }

	export enum WatchingType { watching = 'watching' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Programmes by initial title character
		 * Get the Programmes whose title begins with the given initial character.
		 * Get atoz/{letter}/programmes
		 * @param {string} letter Letter to search by, a to z or the string '0-9'
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {number} page The page index.
		 * @param {number} per_page The number of results to return.
		 * @param {number} initial_child_count The depth to return child entities.
		 * @param {Get_Programmes_AtoZ_search_Sort} sort The sort order of the results.
		 * @param {Get_Programmes_AtoZ_search_Sort_direction} sort_direction Whether to sort ascending or descending
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @return {Ibl} Default response
		 */
		Get_Programmes_AtoZ_search_(letter: string, rights: Get_Programmes_AtoZ_search_Rights, page: number, per_page: number, initial_child_count: number, sort: Get_Programmes_AtoZ_search_Sort, sort_direction: Get_Programmes_AtoZ_search_Sort_direction, availability: Get_Programmes_AtoZ_search_Availability): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'atoz/' + (letter == null ? '' : encodeURIComponent(letter)) + '/programmes&rights=' + rights + '&page=' + page + '&per_page=' + per_page + '&initial_child_count=' + initial_child_count + '&sort=' + sort + '&sort_direction=' + sort_direction + '&availability=' + availability, {});
		}

		/**
		 * Get categories
		 * Get the list of all the categories in TV & iPlayer.
		 * Get categories
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @return {Ibl} Default response
		 */
		Get_Categories_(lang: Get_Categories_Lang): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'categories?lang=' + lang, {});
		}

		/**
		 * Get sub-categories
		 * Get sub-categories
		 * Get categories/{category}
		 * @param {string} category The category identifier to return results from.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @return {Ibl} Default response
		 */
		Get_Sub_categories_(category: string, lang: Get_Categories_Lang): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '&lang=' + lang, {});
		}

		/**
		 * List all the episodes for a category.
		 * Get the list of all the episodes for a given category in TV & iPlayer.
		 * Get categories/{category}/episodes
		 * @param {string} category The category identifier to return results from.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {number} page The page index.
		 * @param {number} per_page The number of results to return.
		 * @param {Get_Episodes_by_category_Sort} sort The sort order of the results.
		 * @return {Ibl} Default response
		 */
		Get_Episodes_by_category_(category: string, lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, page: number, per_page: number, sort: Get_Episodes_by_category_Sort | null | undefined): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '/episodes&lang=' + lang + '&rights=' + rights + '&availability=' + availability + '&page=' + page + '&per_page=' + per_page + '&sort=' + sort, {});
		}

		/**
		 * List the highlights for a category.
		 * Get the editorial highlights of a given category in TV & iPlayer.
		 * Get categories/{category}/highlights
		 * @param {string} category The category identifier to return results from.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {Array<string>} mixin Request additional data in the output
		 * @return {Ibl} Default response
		 */
		Get_Highlights_by_category_(category: string, lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, mixin: Array<string> | null | undefined): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '/highlights&lang=' + lang + '&rights=' + rights + '&availability=' + availability + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List all the programmes for a category.
		 * Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.
		 * Get categories/{category}/programmes
		 * @param {string} category The category identifier to return results from.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {number} page The page index.
		 * @param {number} per_page The number of results to return.
		 * @return {Ibl} Default response
		 */
		Get_Programmes_by_category_(category: string, lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, page: number, per_page: number): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'categories/' + (category == null ? '' : encodeURIComponent(category)) + '/programmes&lang=' + lang + '&rights=' + rights + '&availability=' + availability + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * List all the channels.
		 * Get the list of all the channels TV & iPlayer.
		 * Get channels
		 * @param {string} region The region to get the channels for.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @return {Ibl} Default response
		 */
		Get_Channels_(region: string | null | undefined, lang: Get_Categories_Lang): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'channels?region=' + (region == null ? '' : encodeURIComponent(region)) + '&lang=' + lang, {});
		}

		/**
		 * Get broadcasts by channel
		 * Get broadcasts by channel
		 * Get channels/{channel}/broadcasts
		 * @param {string} channel The channel identifier to limit results to.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {Array<string>} mixin Request additional data in the output
		 * @param {number} per_page The number of results to return.
		 * @param {string} from Time to return results from, e.g. -3h
		 * @return {Ibl} Default response
		 */
		Get_Broadcasts_by_channel_(channel: string, lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, mixin: Array<string> | null | undefined, per_page: number, from: string | null | undefined): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'channels/' + (channel == null ? '' : encodeURIComponent(channel)) + '/broadcasts&lang=' + lang + '&rights=' + rights + '&availability=' + availability + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&') + '&per_page=' + per_page + '&from=' + (from == null ? '' : encodeURIComponent(from)), {});
		}

		/**
		 * List the highlights for a channel.
		 * Get the editorial highlights of a given channel in TV & iPlayer.
		 * Get channels/{channel}/highlights
		 * @param {string} channel The channel identifier to limit results to.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {boolean} live Whether to include live programmes
		 * @param {Array<string>} mixin Request additional data in the output
		 * @return {Ibl} Default response
		 */
		Get_Highlights_by_channel_(channel: string, lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, live: boolean | null | undefined, mixin: Array<string> | null | undefined): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'channels/' + (channel == null ? '' : encodeURIComponent(channel)) + '/highlights&lang=' + lang + '&rights=' + rights + '&availability=' + availability + '&live=' + live + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get programmes by channel
		 * Get programmes by channel
		 * Get channels/{channel}/programmes
		 * @param {string} channel The channel identifier to limit results to.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {number} page The page index.
		 * @param {number} per_page The number of results to return.
		 * @return {Ibl} Default response
		 */
		Get_Programmes_by_channel_(channel: string, lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, page: number, per_page: number): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'channels/' + (channel == null ? '' : encodeURIComponent(channel)) + '/programmes&lang=' + lang + '&rights=' + rights + '&availability=' + availability + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Get schedule by channel
		 * Get schedule by channel
		 * Get channels/{channel}/schedule/{date}
		 * @param {string} channel The channel identifier to limit results to.
		 * @param {string} date The date to return the schedule for, yyyy-mm-dd format
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @return {Ibl} Default response
		 */
		Get_Schedule_by_channel_(channel: string, date: string, lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'channels/' + (channel == null ? '' : encodeURIComponent(channel)) + '/schedule/' + (date == null ? '' : encodeURIComponent(date)) + '&lang=' + lang + '&rights=' + rights + '&availability=' + availability, {});
		}

		/**
		 * Get Clips
		 * Get Clips
		 * Get clips/{pid}
		 * @param {string} pid The programme identifier.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @return {Ibl} Default response
		 */
		Get_Clips_(pid: string, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'clips/' + (pid == null ? '' : encodeURIComponent(pid)) + '&rights=' + rights + '&availability=' + availability, {});
		}

		/**
		 * Episode for a given pid.
		 * Get the episode for a given episode identifier.
		 * Get episodes/{pid}
		 * @param {string} pid The programme identifier.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {Array<string>} mixin Request additional data in the output
		 * @return {Ibl} Default response
		 */
		Get_Programme_by_PID_(pid: string, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, mixin: Array<string> | null | undefined): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '&rights=' + rights + '&availability=' + availability + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get Onward Journey
		 * Get Onward Journey (next programme)
		 * Get episodes/{pid}/next
		 * @param {string} pid The programme identifier.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @return {Ibl} Default response
		 */
		Get_Onward_Journey(pid: string, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/next&rights=' + rights + '&availability=' + availability, {});
		}

		/**
		 * Get Follow-ups (post-rolls)
		 * Get Follow-ups (post-rolls)
		 * Get episodes/{pid}/postrolls
		 * @param {string} pid The programme identifier.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @return {Ibl} Default response
		 */
		GetPostRolls(pid: string, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/postrolls&rights=' + rights + '&availability=' + availability, {});
		}

		/**
		 * Get Trailers (pre-rolls)
		 * Get Trailers (pre-rolls)
		 * Get episodes/{pid}/prerolls
		 * @param {string} pid The programme identifier.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @return {Ibl} Default response
		 */
		Get_Trailers_pre_rolls_(pid: string, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/prerolls&rights=' + rights + '&availability=' + availability, {});
		}

		/**
		 * Get programme recommendations
		 * Get programme recommendations
		 * Get episodes/{pid}/recommendations
		 * @param {string} pid The programme identifier.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {number} page The page index.
		 * @param {number} per_page The number of results to return.
		 * @return {Ibl} Default response
		 */
		Get_Programme_recommendations_(pid: string, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, page: number, per_page: number): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'episodes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/recommendations&rights=' + rights + '&availability=' + availability + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Get programmes popular
		 * Get programmes popular
		 * Get groups/popular/episodes
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {number} page The page index.
		 * @param {number} per_page The number of results to return.
		 * @param {number} initial_child_count The depth to return child entities.
		 * @param {string} sort The sort order of the results.
		 * @param {Get_Programmes_AtoZ_search_Sort_direction} sort_direction Whether to sort ascending or descending
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {Array<string>} mixin Request additional data in the output
		 * @return {Ibl} Default response
		 */
		Get_Programmes_popular_(rights: Get_Programmes_AtoZ_search_Rights, page: number, per_page: number, initial_child_count: number, sort: string, sort_direction: Get_Programmes_AtoZ_search_Sort_direction, availability: Get_Programmes_AtoZ_search_Availability, mixin: Array<string> | null | undefined): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'groups/popular/episodes?rights=' + rights + '&page=' + page + '&per_page=' + per_page + '&initial_child_count=' + initial_child_count + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + sort_direction + '&availability=' + availability + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get episodes by group, brand or series
		 * Get episodes by group, brand or series
		 * Get groups/{pid}/episodes
		 * @param {string} pid The programme identifier.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {number} page The page index.
		 * @param {number} per_page The number of results to return.
		 * @param {number} initial_child_count The depth to return child entities.
		 * @param {string} sort The sort order of the results.
		 * @param {Get_Programmes_AtoZ_search_Sort_direction} sort_direction Whether to sort ascending or descending
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {Array<string>} mixin Request additional data in the output
		 * @return {Ibl} Default response
		 */
		Get_Episodes_by_group_(pid: string, rights: Get_Programmes_AtoZ_search_Rights, page: number, per_page: number, initial_child_count: number, sort: string, sort_direction: Get_Programmes_AtoZ_search_Sort_direction, availability: Get_Programmes_AtoZ_search_Availability, mixin: Array<string> | null | undefined): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'groups/' + (pid == null ? '' : encodeURIComponent(pid)) + '/episodes&rights=' + rights + '&page=' + page + '&per_page=' + per_page + '&initial_child_count=' + initial_child_count + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sort_direction=' + sort_direction + '&availability=' + availability + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get programme highlights
		 * Get programme highlights
		 * Get home/highlights
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {Array<string>} mixin Request additional data in the output
		 * @return {Ibl} Default response
		 */
		Get_Programme_highlights_(lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, mixin: Array<string> | null | undefined): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'home/highlights?lang=' + lang + '&rights=' + rights + '&availability=' + availability + '&' + mixin?.map(z => `mixin=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Programme for a given pid.
		 * Get the programme for a given programme identifier.
		 * Get programmes/{pid}
		 * @param {string} pid The programme identifier.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {number} initial_child_count The depth to return child entities.
		 * @return {Ibl} Default response
		 */
		Get_Programmes_by_parent_PID_(pid: string, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, initial_child_count: number): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'programmes/' + (pid == null ? '' : encodeURIComponent(pid)) + '&rights=' + rights + '&availability=' + availability + '&initial_child_count=' + initial_child_count, {});
		}

		/**
		 * Child episodes for a given programme pid.
		 * Get the child episodes belonging to a given programme identifier.
		 * Get programmes/{pid}/episodes
		 * @param {string} pid The programme identifier.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @param {number} initial_child_count The depth to return child entities.
		 * @return {Ibl} Default response
		 */
		Get_Episodes_by_parent_PID_(pid: string, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability, initial_child_count: number): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'programmes/' + (pid == null ? '' : encodeURIComponent(pid)) + '/episodes&rights=' + rights + '&availability=' + availability + '&initial_child_count=' + initial_child_count, {});
		}

		/**
		 * List all regions
		 * Get the list of all the regions TV & iPlayer.
		 * Get regions
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @return {Ibl} Default response
		 */
		Get_Regions_(lang: Get_Categories_Lang): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'regions?lang=' + lang, {});
		}

		/**
		 * Get schema
		 * Get schema
		 * Get schema/ibl.json
		 * @return {Ibl} Default response
		 */
		Get_Schema_(): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'schema/ibl.json', {});
		}

		/**
		 * Search
		 * Search
		 * Get search
		 * @param {string} q The term to search for.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @return {Ibl} Default response
		 */
		Search_(q: string, lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&lang=' + lang + '&rights=' + rights + '&availability=' + availability, {});
		}

		/**
		 * Search-suggest
		 * Search-suggest
		 * Get search-suggest
		 * @param {string} q The term to search for.
		 * @param {Get_Categories_Lang} lang The language for any applicable localised strings.
		 * @param {Get_Programmes_AtoZ_search_Rights} rights The rights group to limit results to.
		 * @param {Get_Programmes_AtoZ_search_Availability} availability Whether to return all, or available programmes
		 * @return {Ibl} Default response
		 */
		Search_suggest_(q: string, lang: Get_Categories_Lang, rights: Get_Programmes_AtoZ_search_Rights, availability: Get_Programmes_AtoZ_search_Availability): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'search-suggest?q=' + (q == null ? '' : encodeURIComponent(q)) + '&lang=' + lang + '&rights=' + rights + '&availability=' + availability, {});
		}

		/**
		 * Get status
		 * Get the current iPlayer business layer status. This tells the caller the status of the iPlayer data, but not necessarily the overall status of the website. In the future it might include the status of the dependent data services within the BBC.
		 * Get status
		 * @return {Ibl} Default response
		 */
		Get_Status_(): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'status', {});
		}

		/**
		 * Get user store purchases
		 * Get user store purchases
		 * Get user/purchases
		 * @param {number} identity_cookie The BBC-id cookie value
		 * @return {Ibl} Default response
		 */
		Get_User_store_purchases_(identity_cookie: number): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'user/purchases?identity_cookie=' + identity_cookie, {});
		}

		/**
		 * Get user store recommendations
		 * Get user store recommendations
		 * Get user/recommendations
		 * @param {number} identity_cookie The BBC-id cookie value
		 * @return {Ibl} Default response
		 */
		Get_User_store_recommendations_(identity_cookie: number): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'user/recommendations?identity_cookie=' + identity_cookie, {});
		}

		/**
		 * Get user watching
		 * Get user watching
		 * Get user/watching
		 * @param {number} identity_cookie The BBC-id cookie value
		 * @return {Ibl} Default response
		 */
		Get_User_watching_(identity_cookie: number): Observable<Ibl> {
			return this.http.get<Ibl>(this.baseUri + 'user/watching?identity_cookie=' + identity_cookie, {});
		}
	}

	export enum Get_Programmes_AtoZ_search_Rights { mobile = 'mobile', tv = 'tv', web = 'web' }

	export enum Get_Programmes_AtoZ_search_Sort { title = 'title' }

	export enum Get_Programmes_AtoZ_search_Sort_direction { asc = 'asc', desc = 'desc' }

	export enum Get_Programmes_AtoZ_search_Availability { all = 'all', available = 'available' }

	export enum Get_Categories_Lang { en = 'en', cy = 'cy', ga = 'ga', gd = 'gd', pi = 'pi' }

	export enum Get_Episodes_by_category_Sort { recent = 'recent', popular = 'popular' }

}

