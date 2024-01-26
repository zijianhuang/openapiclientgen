import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * A classification, in general, is something that can describe other resources, such as countries, genres or
	 * languages. How they're described (included or excluded, and whether they're the primary classification
	 * of this type) is handled using other resources. Different functions of ART19 rely on classifications differently,
	 * and could have an effect only on directory information, or may have an effect on ad decisioning.
	 */
	export interface Classification {
		attributes?: ClassificationAttributes;
		id?: string | null;

		/** The type of resource. This is always `classifications` */
		type?: string | null;
	}

	/**
	 * A classification, in general, is something that can describe other resources, such as countries, genres or
	 * languages. How they're described (included or excluded, and whether they're the primary classification
	 * of this type) is handled using other resources. Different functions of ART19 rely on classifications differently,
	 * and could have an effect only on directory information, or may have an effect on ad decisioning.
	 */
	export interface ClassificationFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `classifications` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateClassificationFormGroup() {
		return new FormGroup<ClassificationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClassificationAttributes {
		created_at?: Date | null;

		/** Human readable representation of the classification */
		display_name?: string | null;

		/**
		 * An object with more detailed information about the classification.
		 * The possible members are different per type of classification.
		 */
		metadata?: string | null;

		/**
		 * This will be replaced by the relationship `parent` in a future update.<br/>
		 * For hierarchical classifications, this is the ID of the parent classification
		 */
		parent_id?: string | null;

		/**
		 * For hierarchical classifications this is the list of IDs reflecting the hierarchy starting
		 * with the root level node.
		 */
		tree_path?: Array<string>;

		/**
		 * The type of classification. The type of retrievable classifications depends on the privileges
		 * of the credential being used.
		 */
		type?: ClassificationAttributesType | null;
		updated_at?: Date | null;

		/**
		 * The value the classification represents. The meaning of this attribute depends on the type of classification.
		 */
		value?: string | null;

		/**
		 * For hierarchical classifications this is a concatenated string of all the classification
		 * values from the root to this classification using a `: ` as separator.
		 */
		value_path?: string | null;
	}
	export interface ClassificationAttributesFormProperties {
		created_at: FormControl<Date | null | undefined>,

		/** Human readable representation of the classification */
		display_name: FormControl<string | null | undefined>,

		/**
		 * An object with more detailed information about the classification.
		 * The possible members are different per type of classification.
		 */
		metadata: FormControl<string | null | undefined>,

		/**
		 * This will be replaced by the relationship `parent` in a future update.<br/>
		 * For hierarchical classifications, this is the ID of the parent classification
		 */
		parent_id: FormControl<string | null | undefined>,

		/**
		 * The type of classification. The type of retrievable classifications depends on the privileges
		 * of the credential being used.
		 */
		type: FormControl<ClassificationAttributesType | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,

		/**
		 * The value the classification represents. The meaning of this attribute depends on the type of classification.
		 */
		value: FormControl<string | null | undefined>,

		/**
		 * For hierarchical classifications this is a concatenated string of all the classification
		 * values from the root to this classification using a `: ` as separator.
		 */
		value_path: FormControl<string | null | undefined>,
	}
	export function CreateClassificationAttributesFormGroup() {
		return new FormGroup<ClassificationAttributesFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ClassificationAttributesType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			value_path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClassificationAttributesType { AlternateFeedType = 'AlternateFeedType', Genre = 'Genre', Industry = 'Industry', Language = 'Language', MediaRating = 'MediaRating' }


	/**
	 * Connects a Classification with a classified item like a Series, Season or Episode.
	 */
	export interface ClassificationInclusion {
		attributes?: ClassificationInclusionAttributes;
		id?: string | null;
		relationships?: ClassificationInclusionRelationships;

		/** The type of resource. This is always `classification_inclusion` */
		type?: string | null;
	}

	/**
	 * Connects a Classification with a classified item like a Series, Season or Episode.
	 */
	export interface ClassificationInclusionFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `classification_inclusion` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateClassificationInclusionFormGroup() {
		return new FormGroup<ClassificationInclusionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClassificationInclusionAttributes {

		/**
		 * This will be replaced by the relationship `classification` in a future update.<br/>
		 * The ID of the classification linked to the entity
		 */
		classification_id?: string | null;

		/** This will be replaced by the relationship `classification` in a future update.<br/> */
		classification_type?: ClassificationAttributesType | null;

		/**
		 * This will be replaced by the relationship `classified` in a future update.<br/>
		 * The ID of the entity linked to the classification
		 */
		classified_id?: string | null;

		/** This will be replaced by the relationship `classified` in a future update.<br/> */
		classified_type?: ClassificationInclusionAttributesClassified_type | null;
		created_at?: Date | null;

		/** The position or order of the linked classification within the classified resource */
		position?: number | null;

		/**
		 * When `true` it describes the best classification of a specific type for a given
		 * classified item
		 */
		primary?: boolean | null;
		updated_at?: Date | null;
	}
	export interface ClassificationInclusionAttributesFormProperties {

		/**
		 * This will be replaced by the relationship `classification` in a future update.<br/>
		 * The ID of the classification linked to the entity
		 */
		classification_id: FormControl<string | null | undefined>,

		/** This will be replaced by the relationship `classification` in a future update.<br/> */
		classification_type: FormControl<ClassificationAttributesType | null | undefined>,

		/**
		 * This will be replaced by the relationship `classified` in a future update.<br/>
		 * The ID of the entity linked to the classification
		 */
		classified_id: FormControl<string | null | undefined>,

		/** This will be replaced by the relationship `classified` in a future update.<br/> */
		classified_type: FormControl<ClassificationInclusionAttributesClassified_type | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** The position or order of the linked classification within the classified resource */
		position: FormControl<number | null | undefined>,

		/**
		 * When `true` it describes the best classification of a specific type for a given
		 * classified item
		 */
		primary: FormControl<boolean | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateClassificationInclusionAttributesFormGroup() {
		return new FormGroup<ClassificationInclusionAttributesFormProperties>({
			classification_id: new FormControl<string | null | undefined>(undefined),
			classification_type: new FormControl<ClassificationAttributesType | null | undefined>(undefined),
			classified_id: new FormControl<string | null | undefined>(undefined),
			classified_type: new FormControl<ClassificationInclusionAttributesClassified_type | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ClassificationInclusionAttributesClassified_type { Series = 'Series', Season = 'Season', Episode = 'Episode' }

	export interface ClassificationInclusionRelationships {
		classification?: ClassificationInclusionRelationshipsClassification;
	}
	export interface ClassificationInclusionRelationshipsFormProperties {
	}
	export function CreateClassificationInclusionRelationshipsFormGroup() {
		return new FormGroup<ClassificationInclusionRelationshipsFormProperties>({
		});

	}

	export interface ClassificationInclusionRelationshipsClassification {
		data?: ResourceIdentifier;
	}
	export interface ClassificationInclusionRelationshipsClassificationFormProperties {
	}
	export function CreateClassificationInclusionRelationshipsClassificationFormGroup() {
		return new FormGroup<ClassificationInclusionRelationshipsClassificationFormProperties>({
		});

	}

	export interface ResourceIdentifier {

		/** The ID of the resource */
		id?: string | null;

		/** The type of the resource */
		type?: string | null;
	}
	export interface ResourceIdentifierFormProperties {

		/** The ID of the resource */
		id: FormControl<string | null | undefined>,

		/** The type of the resource */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdentifierFormGroup() {
		return new FormGroup<ResourceIdentifierFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A credit links a specific person to a series, season, or episode in a specific role.
	 */
	export interface Credit {
		attributes?: CreditAttributes;
		id?: string | null;
		relationships?: CreditRelationships;

		/** The type of resource. This is always `credits` */
		type?: string | null;
	}

	/**
	 * A credit links a specific person to a series, season, or episode in a specific role.
	 */
	export interface CreditFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `credits` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreditFormGroup() {
		return new FormGroup<CreditFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditAttributes {
		created_at?: Date | null;

		/** The order of this credit within all credits of the referenced creditable entity */
		position?: number | null;

		/** The type of credit the linked person has on the referenced entity */
		type?: CreditAttributesType | null;
		updated_at?: Date | null;
	}
	export interface CreditAttributesFormProperties {
		created_at: FormControl<Date | null | undefined>,

		/** The order of this credit within all credits of the referenced creditable entity */
		position: FormControl<number | null | undefined>,

		/** The type of credit the linked person has on the referenced entity */
		type: FormControl<CreditAttributesType | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateCreditAttributesFormGroup() {
		return new FormGroup<CreditAttributesFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<CreditAttributesType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CreditAttributesType { AnchorCredit = 'AnchorCredit', AssociateProducerCredit = 'AssociateProducerCredit', AuthorCredit = 'AuthorCredit', CastCredit = 'CastCredit', CoHostCredit = 'CoHostCredit', ComposerCredit = 'ComposerCredit', CreatorCredit = 'CreatorCredit', Credit = 'Credit', DirectorCredit = 'DirectorCredit', EditorCredit = 'EditorCredit', EngineerCredit = 'EngineerCredit', ExecutiveProducerCredit = 'ExecutiveProducerCredit', GuestCoHostCredit = 'GuestCoHostCredit', GuestCredit = 'GuestCredit', GuestHostCredit = 'GuestHostCredit', HeadWriterCredit = 'HeadWriterCredit', HostCredit = 'HostCredit', ProducerCredit = 'ProducerCredit', ReporterCredit = 'ReporterCredit', SeniorProducerCredit = 'SeniorProducerCredit', SidekickCredit = 'SidekickCredit', VideoProducerCredit = 'VideoProducerCredit', WriterCredit = 'WriterCredit' }

	export interface CreditRelationships {
		creditable?: CreditRelationshipsCreditable;
		person?: CreditRelationshipsPerson;
	}
	export interface CreditRelationshipsFormProperties {
	}
	export function CreateCreditRelationshipsFormGroup() {
		return new FormGroup<CreditRelationshipsFormProperties>({
		});

	}

	export interface CreditRelationshipsCreditable {
		data?: ResourceIdentifier;
	}
	export interface CreditRelationshipsCreditableFormProperties {
	}
	export function CreateCreditRelationshipsCreditableFormGroup() {
		return new FormGroup<CreditRelationshipsCreditableFormProperties>({
		});

	}

	export interface CreditRelationshipsPerson {
		data?: ResourceIdentifier;
	}
	export interface CreditRelationshipsPersonFormProperties {
	}
	export function CreateCreditRelationshipsPersonFormGroup() {
		return new FormGroup<CreditRelationshipsPersonFormProperties>({
		});

	}

	export interface Episode {
		attributes?: EpisodeAttributes;
		id?: string | null;
		relationships?: EpisodeRelationships;

		/** The type of resource. This is always `episodes` */
		type?: string | null;
	}
	export interface EpisodeFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `episodes` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEpisodeFormGroup() {
		return new FormGroup<EpisodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EpisodeAttributes {

		/**
		 * Only visible to credentials having write privileges for the series.
		 */
		allow_user_comments?: boolean | null;

		/**
		 * This will be replaced by the relationship `cascaded_cover_image` in a future update.<br/>
		 * The image ID of the cover art for this episode. This is the preferred image ID to use.
		 * If there is no specific cover for the episode, the image ID of the season or the
		 * series will be returned, whichever has one defined.
		 * The `/images` endpoint provides details to the image.
		 */
		cascaded_cover_image_id?: string | null;

		/**
		 * This will be replaced by the relationship `cover_image` in a future update.<br/>
		 * The image ID of the cover art for this episode, if an episode-specific image has been provided.
		 * The `/images` endpoint provideds details to the image.
		 */
		cover_image_id?: string | null;
		created_at?: Date | null;

		/** The description of the episode, possibly in HTML format */
		description?: string | null;

		/** Determines whether `description` is in HTML format or plain. */
		description_is_html?: boolean | null;

		/**
		 * The description with all HTML markup removed. If the description does not contain markup,
		 * this is identical to `description`.
		 */
		description_plain?: string | null;

		/** The file name, without extension, to present users when downloading the episode */
		file_name?: string | null;

		/** The type of the episode according to Apple's type categorization */
		itunes_type?: EpisodeAttributesItunes_type | null;

		/**
		 * The number of total downloads all time for this episode.
		 * Only visible if the credential has the right privilege on the series.
		 */
		listen_count?: number | null;

		/** The current premium status of the episode */
		premium_status?: EpisodeAttributesPremium_status | null;

		/**
		 * If `true`, the episode will be available for download and included in the feed as soon as its
		 * release time is reached, provided it has a valid media file, and `release_end_at` is in the future (if applicable).
		 */
		published?: boolean | null;

		/**
		 * The date and time when an episode will no longer be included in the feed, or available for download.
		 * `Published` will remain `true` unless the episode is manually unpublished.
		 */
		release_end_at?: Date | null;

		/**
		 * If `true`, the episode's release time is set in a way it is considered released right away.
		 * Only visible if the credential has write privileges on the series.
		 */
		release_immediately?: boolean | null;

		/**
		 * The date and time when an episode will be released. It will be available for download and included
		 * in the feed if this time is reached, `published` is set to `true`, and the episode has a media file.
		 */
		released_at?: Date | null;

		/**
		 * A globally unique identifier describing the episode. This ID is commonly used by podcast applications
		 * to determine whether an episode has already been downloaded or not.
		 */
		rss_guid?: string | null;

		/**
		 * Use the relationship `season` instead.<br />
		 * The ID of the season an episode belongs to. This can be `null`. A series can have episodes with and
		 * without seasons at the same time.
		 */
		season_id?: string | null;

		/**
		 * Use the relationship `series` instead.<br />
		 * The ID of the series an episode belongs to.
		 */
		series_id?: string | null;

		/**
		 * The title of the episode modified for sorting. This converts all characters to
		 * lower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.
		 */
		sort_title?: string | null;

		/** The status of an episode */
		status?: EpisodeAttributesStatus | null;

		/** The title of the episode */
		title?: string | null;
		updated_at?: Date | null;
	}
	export interface EpisodeAttributesFormProperties {

		/**
		 * Only visible to credentials having write privileges for the series.
		 */
		allow_user_comments: FormControl<boolean | null | undefined>,

		/**
		 * This will be replaced by the relationship `cascaded_cover_image` in a future update.<br/>
		 * The image ID of the cover art for this episode. This is the preferred image ID to use.
		 * If there is no specific cover for the episode, the image ID of the season or the
		 * series will be returned, whichever has one defined.
		 * The `/images` endpoint provides details to the image.
		 */
		cascaded_cover_image_id: FormControl<string | null | undefined>,

		/**
		 * This will be replaced by the relationship `cover_image` in a future update.<br/>
		 * The image ID of the cover art for this episode, if an episode-specific image has been provided.
		 * The `/images` endpoint provideds details to the image.
		 */
		cover_image_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** The description of the episode, possibly in HTML format */
		description: FormControl<string | null | undefined>,

		/** Determines whether `description` is in HTML format or plain. */
		description_is_html: FormControl<boolean | null | undefined>,

		/**
		 * The description with all HTML markup removed. If the description does not contain markup,
		 * this is identical to `description`.
		 */
		description_plain: FormControl<string | null | undefined>,

		/** The file name, without extension, to present users when downloading the episode */
		file_name: FormControl<string | null | undefined>,

		/** The type of the episode according to Apple's type categorization */
		itunes_type: FormControl<EpisodeAttributesItunes_type | null | undefined>,

		/**
		 * The number of total downloads all time for this episode.
		 * Only visible if the credential has the right privilege on the series.
		 */
		listen_count: FormControl<number | null | undefined>,

		/** The current premium status of the episode */
		premium_status: FormControl<EpisodeAttributesPremium_status | null | undefined>,

		/**
		 * If `true`, the episode will be available for download and included in the feed as soon as its
		 * release time is reached, provided it has a valid media file, and `release_end_at` is in the future (if applicable).
		 */
		published: FormControl<boolean | null | undefined>,

		/**
		 * The date and time when an episode will no longer be included in the feed, or available for download.
		 * `Published` will remain `true` unless the episode is manually unpublished.
		 */
		release_end_at: FormControl<Date | null | undefined>,

		/**
		 * If `true`, the episode's release time is set in a way it is considered released right away.
		 * Only visible if the credential has write privileges on the series.
		 */
		release_immediately: FormControl<boolean | null | undefined>,

		/**
		 * The date and time when an episode will be released. It will be available for download and included
		 * in the feed if this time is reached, `published` is set to `true`, and the episode has a media file.
		 */
		released_at: FormControl<Date | null | undefined>,

		/**
		 * A globally unique identifier describing the episode. This ID is commonly used by podcast applications
		 * to determine whether an episode has already been downloaded or not.
		 */
		rss_guid: FormControl<string | null | undefined>,

		/**
		 * Use the relationship `season` instead.<br />
		 * The ID of the season an episode belongs to. This can be `null`. A series can have episodes with and
		 * without seasons at the same time.
		 */
		season_id: FormControl<string | null | undefined>,

		/**
		 * Use the relationship `series` instead.<br />
		 * The ID of the series an episode belongs to.
		 */
		series_id: FormControl<string | null | undefined>,

		/**
		 * The title of the episode modified for sorting. This converts all characters to
		 * lower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.
		 */
		sort_title: FormControl<string | null | undefined>,

		/** The status of an episode */
		status: FormControl<EpisodeAttributesStatus | null | undefined>,

		/** The title of the episode */
		title: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateEpisodeAttributesFormGroup() {
		return new FormGroup<EpisodeAttributesFormProperties>({
			allow_user_comments: new FormControl<boolean | null | undefined>(undefined),
			cascaded_cover_image_id: new FormControl<string | null | undefined>(undefined),
			cover_image_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			description_is_html: new FormControl<boolean | null | undefined>(undefined),
			description_plain: new FormControl<string | null | undefined>(undefined),
			file_name: new FormControl<string | null | undefined>(undefined),
			itunes_type: new FormControl<EpisodeAttributesItunes_type | null | undefined>(undefined),
			listen_count: new FormControl<number | null | undefined>(undefined),
			premium_status: new FormControl<EpisodeAttributesPremium_status | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			release_end_at: new FormControl<Date | null | undefined>(undefined),
			release_immediately: new FormControl<boolean | null | undefined>(undefined),
			released_at: new FormControl<Date | null | undefined>(undefined),
			rss_guid: new FormControl<string | null | undefined>(undefined),
			season_id: new FormControl<string | null | undefined>(undefined),
			series_id: new FormControl<string | null | undefined>(undefined),
			sort_title: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EpisodeAttributesStatus | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EpisodeAttributesItunes_type { full = 'full', bonus = 'bonus', trailer = 'trailer' }

	export enum EpisodeAttributesPremium_status { active = 'active', inactive = 'inactive', 'force-active' = 'force-active', 'force-inactive' = 'force-inactive' }

	export enum EpisodeAttributesStatus { active = 'active', inactive = 'inactive' }

	export interface EpisodeRelationships {

		/**
		 * The cover art for this episode. This is the preferred image to use.
		 * If there is no specific cover image for the episode, the cover of the season or the
		 * series will be returned, whichever has one defined.
		 * The `/images` endpoint provides details to the image.
		 */
		cascaded_cover_image?: EpisodeRelationshipsCascaded_cover_image;
		classification_inclusions?: EpisodeRelationshipsClassification_inclusions;

		/**
		 * The cover art for this episode, if an episode-specific image has been provided.
		 * The `/images` endpoint provideds details to the image.
		 */
		cover_image?: EpisodeRelationshipsCover_image;
		credits?: EpisodeRelationshipsCredits;

		/** Only visible if the credential has write privileges on the series */
		default_marker_points?: EpisodeRelationshipsDefault_marker_points;

		/** Only visible if the credential has write privileges on the series */
		episode_versions?: EpisodeRelationshipsEpisode_versions;
		images?: EpisodeRelationshipsImages;
		season?: EpisodeRelationshipsSeason;

		/** Only visible if the credential has write privileges on the series */
		segment_lists?: EpisodeRelationshipsSegment_lists;
		series?: EpisodeRelationshipsSeries;
		taggings?: EpisodeRelationshipsTaggings;
		tags?: EpisodeRelationshipsTags;
	}
	export interface EpisodeRelationshipsFormProperties {
	}
	export function CreateEpisodeRelationshipsFormGroup() {
		return new FormGroup<EpisodeRelationshipsFormProperties>({
		});

	}

	export interface EpisodeRelationshipsCascaded_cover_image {
		data?: ResourceIdentifier;
	}
	export interface EpisodeRelationshipsCascaded_cover_imageFormProperties {
	}
	export function CreateEpisodeRelationshipsCascaded_cover_imageFormGroup() {
		return new FormGroup<EpisodeRelationshipsCascaded_cover_imageFormProperties>({
		});

	}

	export interface EpisodeRelationshipsClassification_inclusions {
		data?: Array<ResourceIdentifier>;
	}
	export interface EpisodeRelationshipsClassification_inclusionsFormProperties {
	}
	export function CreateEpisodeRelationshipsClassification_inclusionsFormGroup() {
		return new FormGroup<EpisodeRelationshipsClassification_inclusionsFormProperties>({
		});

	}

	export interface EpisodeRelationshipsCover_image {
		data?: ResourceIdentifier;
	}
	export interface EpisodeRelationshipsCover_imageFormProperties {
	}
	export function CreateEpisodeRelationshipsCover_imageFormGroup() {
		return new FormGroup<EpisodeRelationshipsCover_imageFormProperties>({
		});

	}

	export interface EpisodeRelationshipsCredits {
		data?: Array<ResourceIdentifier>;
	}
	export interface EpisodeRelationshipsCreditsFormProperties {
	}
	export function CreateEpisodeRelationshipsCreditsFormGroup() {
		return new FormGroup<EpisodeRelationshipsCreditsFormProperties>({
		});

	}

	export interface EpisodeRelationshipsDefault_marker_points {
		data?: Array<ResourceIdentifier>;
	}
	export interface EpisodeRelationshipsDefault_marker_pointsFormProperties {
	}
	export function CreateEpisodeRelationshipsDefault_marker_pointsFormGroup() {
		return new FormGroup<EpisodeRelationshipsDefault_marker_pointsFormProperties>({
		});

	}

	export interface EpisodeRelationshipsEpisode_versions {
		data?: Array<ResourceIdentifier>;
	}
	export interface EpisodeRelationshipsEpisode_versionsFormProperties {
	}
	export function CreateEpisodeRelationshipsEpisode_versionsFormGroup() {
		return new FormGroup<EpisodeRelationshipsEpisode_versionsFormProperties>({
		});

	}

	export interface EpisodeRelationshipsImages {
		data?: Array<ResourceIdentifier>;
	}
	export interface EpisodeRelationshipsImagesFormProperties {
	}
	export function CreateEpisodeRelationshipsImagesFormGroup() {
		return new FormGroup<EpisodeRelationshipsImagesFormProperties>({
		});

	}

	export interface EpisodeRelationshipsSeason {
		data?: ResourceIdentifier;
	}
	export interface EpisodeRelationshipsSeasonFormProperties {
	}
	export function CreateEpisodeRelationshipsSeasonFormGroup() {
		return new FormGroup<EpisodeRelationshipsSeasonFormProperties>({
		});

	}

	export interface EpisodeRelationshipsSegment_lists {
		data?: Array<ResourceIdentifier>;
	}
	export interface EpisodeRelationshipsSegment_listsFormProperties {
	}
	export function CreateEpisodeRelationshipsSegment_listsFormGroup() {
		return new FormGroup<EpisodeRelationshipsSegment_listsFormProperties>({
		});

	}

	export interface EpisodeRelationshipsSeries {
		data?: ResourceIdentifier;
	}
	export interface EpisodeRelationshipsSeriesFormProperties {
	}
	export function CreateEpisodeRelationshipsSeriesFormGroup() {
		return new FormGroup<EpisodeRelationshipsSeriesFormProperties>({
		});

	}

	export interface EpisodeRelationshipsTaggings {
		data?: Array<ResourceIdentifier>;
	}
	export interface EpisodeRelationshipsTaggingsFormProperties {
	}
	export function CreateEpisodeRelationshipsTaggingsFormGroup() {
		return new FormGroup<EpisodeRelationshipsTaggingsFormProperties>({
		});

	}

	export interface EpisodeRelationshipsTags {
		data?: Array<ResourceIdentifier>;
	}
	export interface EpisodeRelationshipsTagsFormProperties {
	}
	export function CreateEpisodeRelationshipsTagsFormGroup() {
		return new FormGroup<EpisodeRelationshipsTagsFormProperties>({
		});

	}

	export interface Image {
		attributes?: ImageAttributes;
		id?: string | null;
		relationships?: ImageRelationships;

		/** The type of resource. This is always `images` */
		type?: string | null;
	}
	export interface ImageFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `images` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageAttributes {

		/**
		 * This will be replaced by the relationship `bucket` in a future update.<br/>
		 * The ID of the owning entity
		 */
		bucket_id?: string | null;

		/**
		 * This will be replaced by the relationship `bucket` in a future update.<br/>
		 * The type of the owning entity
		 */
		bucket_type?: ImageAttributesBucket_type | null;
		created_at?: Date | null;
		crop_data?: ImageAttributesCrop_data;

		/**
		 * The current value of the image state machine. It starts with `uploaded` and
		 * transitions to `processing` once a worker has picked it up. If all variations and
		 * styles of an image have been successfully created, the status becomes `valid`. In
		 * case of a problem during the processing it changes to `invalid`.
		 */
		status?: ImageAttributesStatus | null;
		updated_at?: Date | null;
	}
	export interface ImageAttributesFormProperties {

		/**
		 * This will be replaced by the relationship `bucket` in a future update.<br/>
		 * The ID of the owning entity
		 */
		bucket_id: FormControl<string | null | undefined>,

		/**
		 * This will be replaced by the relationship `bucket` in a future update.<br/>
		 * The type of the owning entity
		 */
		bucket_type: FormControl<ImageAttributesBucket_type | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/**
		 * The current value of the image state machine. It starts with `uploaded` and
		 * transitions to `processing` once a worker has picked it up. If all variations and
		 * styles of an image have been successfully created, the status becomes `valid`. In
		 * case of a problem during the processing it changes to `invalid`.
		 */
		status: FormControl<ImageAttributesStatus | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateImageAttributesFormGroup() {
		return new FormGroup<ImageAttributesFormProperties>({
			bucket_id: new FormControl<string | null | undefined>(undefined),
			bucket_type: new FormControl<ImageAttributesBucket_type | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ImageAttributesStatus | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ImageAttributesBucket_type { AdRepAccount = 'AdRepAccount', Agency = 'Agency', Network = 'Network', Series = 'Series', User = 'User' }

	export interface ImageAttributesCrop_data {

		/** The height of the crop area */
		height?: number | null;

		/** The left coordinate of the crop area */
		left?: number | null;

		/** The top coordinate of the crop area */
		top?: number | null;

		/** The width of the crop area */
		width?: number | null;
	}
	export interface ImageAttributesCrop_dataFormProperties {

		/** The height of the crop area */
		height: FormControl<number | null | undefined>,

		/** The left coordinate of the crop area */
		left: FormControl<number | null | undefined>,

		/** The top coordinate of the crop area */
		top: FormControl<number | null | undefined>,

		/** The width of the crop area */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageAttributesCrop_dataFormGroup() {
		return new FormGroup<ImageAttributesCrop_dataFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ImageAttributesStatus { invalid = 'invalid', processing = 'processing', uploaded = 'uploaded', valid = 'valid' }

	export interface ImageRelationships {
		media_assets?: ImageRelationshipsMedia_assets;
	}
	export interface ImageRelationshipsFormProperties {
	}
	export function CreateImageRelationshipsFormGroup() {
		return new FormGroup<ImageRelationshipsFormProperties>({
		});

	}

	export interface ImageRelationshipsMedia_assets {
		data?: Array<ResourceIdentifier>;
	}
	export interface ImageRelationshipsMedia_assetsFormProperties {
	}
	export function CreateImageRelationshipsMedia_assetsFormGroup() {
		return new FormGroup<ImageRelationshipsMedia_assetsFormProperties>({
		});

	}

	export interface Links {

		/** A URL to retrieve the first page of data keeping the provided page size */
		first?: string | null;

		/** A URL to retrieve the last page of data keeping the provided page size */
		last?: string | null;

		/** A URL to retrieve the next page of data keeping the provided page size */
		next?: string | null;

		/** A URL to retrieve the previous page of keeping using the provided page size */
		prev?: string | null;

		/** A URL to retrieve the collection as the primary data */
		self?: string | null;
	}
	export interface LinksFormProperties {

		/** A URL to retrieve the first page of data keeping the provided page size */
		first: FormControl<string | null | undefined>,

		/** A URL to retrieve the last page of data keeping the provided page size */
		last: FormControl<string | null | undefined>,

		/** A URL to retrieve the next page of data keeping the provided page size */
		next: FormControl<string | null | undefined>,

		/** A URL to retrieve the previous page of keeping using the provided page size */
		prev: FormControl<string | null | undefined>,

		/** A URL to retrieve the collection as the primary data */
		self: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MediaAsset {
		attributes?: MediaAssetAttributes;
		id?: string | null;

		/** The type of resource. This is always `media_assets` */
		type?: string | null;
	}
	export interface MediaAssetFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `media_assets` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMediaAssetFormGroup() {
		return new FormGroup<MediaAssetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MediaAssetAttributes {

		/**
		 * This will be replaced by the relationship `attachment` in a future update.<br/>
		 * The ID of the entity this media asset is attached to
		 */
		attachment_id?: string | null;

		/**
		 * This will be replaced by the relationship `attachment` in a future update.<br/>
		 * The type of the entity this media asset is attached to
		 */
		attachment_type?: MediaAssetAttributesAttachment_type | null;

		/** The CDN-URL where the media asset is available */
		cdn_url?: string | null;

		/** The MIME type of the media asset */
		content_type?: string | null;
		created_at?: Date | null;

		/**
		 * The filename of the media asset without any path components.
		 */
		file_name?: string | null;

		/** The size in bytes of the media asset */
		file_size?: number | null;

		/** The height in pixels of the media asset, if the media asset is an image */
		size_height?: number | null;

		/** The width in pixels of the media asset, if the media asset is an image */
		size_width?: number | null;

		/**
		 * The style of the media asset. A media asset is part of a collection of related media files,
		 * for example an image or an episode (audio). Images usually have differently sized versions,
		 * and episodes can have different audio formats.
		 */
		style?: MediaAssetAttributesStyle | null;
		updated_at?: Date | null;
	}
	export interface MediaAssetAttributesFormProperties {

		/**
		 * This will be replaced by the relationship `attachment` in a future update.<br/>
		 * The ID of the entity this media asset is attached to
		 */
		attachment_id: FormControl<string | null | undefined>,

		/**
		 * This will be replaced by the relationship `attachment` in a future update.<br/>
		 * The type of the entity this media asset is attached to
		 */
		attachment_type: FormControl<MediaAssetAttributesAttachment_type | null | undefined>,

		/** The CDN-URL where the media asset is available */
		cdn_url: FormControl<string | null | undefined>,

		/** The MIME type of the media asset */
		content_type: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/**
		 * The filename of the media asset without any path components.
		 */
		file_name: FormControl<string | null | undefined>,

		/** The size in bytes of the media asset */
		file_size: FormControl<number | null | undefined>,

		/** The height in pixels of the media asset, if the media asset is an image */
		size_height: FormControl<number | null | undefined>,

		/** The width in pixels of the media asset, if the media asset is an image */
		size_width: FormControl<number | null | undefined>,

		/**
		 * The style of the media asset. A media asset is part of a collection of related media files,
		 * for example an image or an episode (audio). Images usually have differently sized versions,
		 * and episodes can have different audio formats.
		 */
		style: FormControl<MediaAssetAttributesStyle | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateMediaAssetAttributesFormGroup() {
		return new FormGroup<MediaAssetAttributesFormProperties>({
			attachment_id: new FormControl<string | null | undefined>(undefined),
			attachment_type: new FormControl<MediaAssetAttributesAttachment_type | null | undefined>(undefined),
			cdn_url: new FormControl<string | null | undefined>(undefined),
			content_type: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			file_name: new FormControl<string | null | undefined>(undefined),
			file_size: new FormControl<number | null | undefined>(undefined),
			size_height: new FormControl<number | null | undefined>(undefined),
			size_width: new FormControl<number | null | undefined>(undefined),
			style: new FormControl<MediaAssetAttributesStyle | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MediaAssetAttributesAttachment_type { Image = 'Image', Segment = 'Segment', SegmentList = 'SegmentList' }

	export enum MediaAssetAttributesStyle { info = 'info', itunes = 'itunes', medium = 'medium', original = 'original', regular = 'regular', 'square-400' = 'square-400', 'square-640' = 'square-640', 'square-888' = 'square-888', 'square-3000' = 'square-3000', 'stripped-original' = 'stripped-original', thumb = 'thumb', waveform_data = 'waveform_data' }

	export interface Network {
		attributes?: NetworkAttributes;
		id?: string | null;
		relationships?: NetworkRelationships;

		/** The type of resource. This is always `networks` */
		type?: string | null;
	}
	export interface NetworkFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `networks` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkAttributes {

		/** The copyright of the network */
		copyright?: string | null;
		created_at?: Date | null;

		/** The description of the network eventually in HTML format */
		description?: string | null;

		/** Determines whether `description` is in HTML format or plain. */
		description_is_html?: boolean | null;

		/**
		 * The description with all HTML markup removed. If the description does not contain markup
		 * this is identitcal to `description`.
		 */
		description_plain?: string | null;

		/** Where to find this network on Facebook */
		facebook_url?: string | null;

		/** Where to find this network on Instagram */
		instagram_url?: string | null;

		/** Where to find the network on LinkedIn */
		linkedin_url?: string | null;

		/** The name of the network */
		name?: string | null;

		/** A public point of contact through email */
		public_email?: string | null;

		/**
		 * If this is `true`, a public web page for this network is available under
		 * `https://art19.com/networks/{slug}`, where `slug` is the value of the corresponding attribute.
		 * This public page provides details about the network as well as descriptive links to all its
		 * series' public pages. If this is `false`, no such public page is available.
		 */
		public_page_enabled?: boolean | null;

		/**
		 * The unique slug for the network also used on its public page for example.
		 * This value is unique system-wide amongst all networks _and_ series.
		 */
		slug?: string | null;

		/** Where to find the network on Tumblr */
		tumblr_url?: string | null;

		/** Where to find the network on Twitter */
		twitter_url?: string | null;
		updated_at?: Date | null;

		/** A public website for the network */
		website_url?: string | null;
	}
	export interface NetworkAttributesFormProperties {

		/** The copyright of the network */
		copyright: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** The description of the network eventually in HTML format */
		description: FormControl<string | null | undefined>,

		/** Determines whether `description` is in HTML format or plain. */
		description_is_html: FormControl<boolean | null | undefined>,

		/**
		 * The description with all HTML markup removed. If the description does not contain markup
		 * this is identitcal to `description`.
		 */
		description_plain: FormControl<string | null | undefined>,

		/** Where to find this network on Facebook */
		facebook_url: FormControl<string | null | undefined>,

		/** Where to find this network on Instagram */
		instagram_url: FormControl<string | null | undefined>,

		/** Where to find the network on LinkedIn */
		linkedin_url: FormControl<string | null | undefined>,

		/** The name of the network */
		name: FormControl<string | null | undefined>,

		/** A public point of contact through email */
		public_email: FormControl<string | null | undefined>,

		/**
		 * If this is `true`, a public web page for this network is available under
		 * `https://art19.com/networks/{slug}`, where `slug` is the value of the corresponding attribute.
		 * This public page provides details about the network as well as descriptive links to all its
		 * series' public pages. If this is `false`, no such public page is available.
		 */
		public_page_enabled: FormControl<boolean | null | undefined>,

		/**
		 * The unique slug for the network also used on its public page for example.
		 * This value is unique system-wide amongst all networks _and_ series.
		 */
		slug: FormControl<string | null | undefined>,

		/** Where to find the network on Tumblr */
		tumblr_url: FormControl<string | null | undefined>,

		/** Where to find the network on Twitter */
		twitter_url: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,

		/** A public website for the network */
		website_url: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAttributesFormGroup() {
		return new FormGroup<NetworkAttributesFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			description_is_html: new FormControl<boolean | null | undefined>(undefined),
			description_plain: new FormControl<string | null | undefined>(undefined),
			facebook_url: new FormControl<string | null | undefined>(undefined),
			instagram_url: new FormControl<string | null | undefined>(undefined),
			linkedin_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public_email: new FormControl<string | null | undefined>(undefined),
			public_page_enabled: new FormControl<boolean | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tumblr_url: new FormControl<string | null | undefined>(undefined),
			twitter_url: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			website_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkRelationships {

		/** The cover image for the network */
		cover_image?: NetworkRelationshipsCover_image;

		/**
		 * A collection of images linked to the network. This currently only includes
		 * the cover image for the network.
		 */
		images?: NetworkRelationshipsImages;

		/** The parent network of the network */
		parent?: NetworkRelationshipsParent;

		/** List of series within the network which are accessible to you */
		series?: NetworkRelationshipsSeries;
	}
	export interface NetworkRelationshipsFormProperties {
	}
	export function CreateNetworkRelationshipsFormGroup() {
		return new FormGroup<NetworkRelationshipsFormProperties>({
		});

	}

	export interface NetworkRelationshipsCover_image {
		data?: ResourceIdentifier;
	}
	export interface NetworkRelationshipsCover_imageFormProperties {
	}
	export function CreateNetworkRelationshipsCover_imageFormGroup() {
		return new FormGroup<NetworkRelationshipsCover_imageFormProperties>({
		});

	}

	export interface NetworkRelationshipsImages {
		data?: Array<ResourceIdentifier>;
	}
	export interface NetworkRelationshipsImagesFormProperties {
	}
	export function CreateNetworkRelationshipsImagesFormGroup() {
		return new FormGroup<NetworkRelationshipsImagesFormProperties>({
		});

	}

	export interface NetworkRelationshipsParent {
		data?: ResourceIdentifier;
	}
	export interface NetworkRelationshipsParentFormProperties {
	}
	export function CreateNetworkRelationshipsParentFormGroup() {
		return new FormGroup<NetworkRelationshipsParentFormProperties>({
		});

	}

	export interface NetworkRelationshipsSeries {
		data?: Array<ResourceIdentifier>;
	}
	export interface NetworkRelationshipsSeriesFormProperties {
	}
	export function CreateNetworkRelationshipsSeriesFormGroup() {
		return new FormGroup<NetworkRelationshipsSeriesFormProperties>({
		});

	}

	export interface Person {
		attributes?: PersonAttributes;
		id?: string | null;
		relationships?: PersonRelationships;

		/** The type of resource. This is always `people` */
		type?: string | null;
	}
	export interface PersonFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `people` */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonAttributes {

		/**
		 * This will be replaced by the relationship `avatar` in a future update.<br/>
		 * The image ID of an avatar or head shot of the person. Details can be
		 * retrieved using the `/images` endpoint.
		 */
		avatar_id?: string | null;

		/** The biography of the person without markup. */
		biography?: string | null;

		/** The birthday of the person */
		born?: Date | null;
		created_at?: Date | null;

		/** The day of death of the person */
		died?: Date | null;

		/** The first name of the person */
		first_name?: string | null;

		/** The country the person is from */
		from_country?: string | null;

		/** The locality or city the person is from */
		from_locality?: string | null;

		/** The region/state/province the person is from */
		from_region?: string | null;

		/** The last name of the person */
		last_name?: string | null;

		/** The public email contact for the person */
		public_email?: string | null;
		updated_at?: Date | null;
	}
	export interface PersonAttributesFormProperties {

		/**
		 * This will be replaced by the relationship `avatar` in a future update.<br/>
		 * The image ID of an avatar or head shot of the person. Details can be
		 * retrieved using the `/images` endpoint.
		 */
		avatar_id: FormControl<string | null | undefined>,

		/** The biography of the person without markup. */
		biography: FormControl<string | null | undefined>,

		/** The birthday of the person */
		born: FormControl<Date | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** The day of death of the person */
		died: FormControl<Date | null | undefined>,

		/** The first name of the person */
		first_name: FormControl<string | null | undefined>,

		/** The country the person is from */
		from_country: FormControl<string | null | undefined>,

		/** The locality or city the person is from */
		from_locality: FormControl<string | null | undefined>,

		/** The region/state/province the person is from */
		from_region: FormControl<string | null | undefined>,

		/** The last name of the person */
		last_name: FormControl<string | null | undefined>,

		/** The public email contact for the person */
		public_email: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreatePersonAttributesFormGroup() {
		return new FormGroup<PersonAttributesFormProperties>({
			avatar_id: new FormControl<string | null | undefined>(undefined),
			biography: new FormControl<string | null | undefined>(undefined),
			born: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			died: new FormControl<Date | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			from_country: new FormControl<string | null | undefined>(undefined),
			from_locality: new FormControl<string | null | undefined>(undefined),
			from_region: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			public_email: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PersonRelationships {

		/**
		 * The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.
		 */
		avatar?: PersonRelationshipsAvatar;
	}
	export interface PersonRelationshipsFormProperties {
	}
	export function CreatePersonRelationshipsFormGroup() {
		return new FormGroup<PersonRelationshipsFormProperties>({
		});

	}

	export interface PersonRelationshipsAvatar {
		data?: ResourceIdentifier;
	}
	export interface PersonRelationshipsAvatarFormProperties {
	}
	export function CreatePersonRelationshipsAvatarFormGroup() {
		return new FormGroup<PersonRelationshipsAvatarFormProperties>({
		});

	}


	/** Links related to the retrieved resource */
	export interface ResourceLink {

		/** A URL to retrieve the resource as the primary data */
		self?: string | null;
	}

	/** Links related to the retrieved resource */
	export interface ResourceLinkFormProperties {

		/** A URL to retrieve the resource as the primary data */
		self: FormControl<string | null | undefined>,
	}
	export function CreateResourceLinkFormGroup() {
		return new FormGroup<ResourceLinkFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Season {
		attributes?: SeasonAttributes;
		id?: string | null;
		relationships?: SeasonRelationships;

		/** The type of resource. This is always `seasons` */
		type?: string | null;
	}
	export interface SeasonFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `seasons` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSeasonFormGroup() {
		return new FormGroup<SeasonFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeasonAttributes {

		/**
		 * This will be replaced by the relationship `cascaded_cover_image` in a future update.<br/>
		 * The image ID of the cover art for this season. If there is no specific cover for the season,
		 * the image ID of the series' cover art will be returned.
		 * The `/images` endpoint provideds details to the image.
		 */
		cascaded_cover_image_id?: string | null;

		/**
		 * This will be replaced by the relationship `cover_image` in a future update.<br/>
		 * The image ID of the cover art for this season. The `/images` endpoint provideds details to the image.
		 */
		cover_image_id?: string | null;
		created_at?: Date | null;

		/** The description of the season eventually in HTML format */
		description?: string | null;

		/** Determines whether `description` is in HTML format or plain. */
		description_is_html?: boolean | null;

		/**
		 * The description with all HTML markup removed. If the description does not contain markup
		 * this is identitcal to `description`.
		 */
		description_plain?: string | null;

		/**
		 * This will be replaced by the relationship `first_released_episode` in a future update.<br/>
		 * The ID of the first released episode within the season
		 */
		first_released_episode_id?: string | null;

		/**
		 * This will be replaced by the relationship `last_released_episode` in a future update.<br/>
		 * The ID of the most recently released episode within the season
		 */
		last_released_episode_id?: string | null;

		/** The number of the season. This could be `null` as well. */
		season_number?: number | null;

		/**
		 * The title of the season modified for sorting. This converts all characters to
		 * lower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.
		 */
		sort_title?: string | null;

		/** The current status of the season */
		status?: EpisodeAttributesStatus | null;

		/** The title of the season */
		title?: string | null;
		updated_at?: Date | null;
	}
	export interface SeasonAttributesFormProperties {

		/**
		 * This will be replaced by the relationship `cascaded_cover_image` in a future update.<br/>
		 * The image ID of the cover art for this season. If there is no specific cover for the season,
		 * the image ID of the series' cover art will be returned.
		 * The `/images` endpoint provideds details to the image.
		 */
		cascaded_cover_image_id: FormControl<string | null | undefined>,

		/**
		 * This will be replaced by the relationship `cover_image` in a future update.<br/>
		 * The image ID of the cover art for this season. The `/images` endpoint provideds details to the image.
		 */
		cover_image_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** The description of the season eventually in HTML format */
		description: FormControl<string | null | undefined>,

		/** Determines whether `description` is in HTML format or plain. */
		description_is_html: FormControl<boolean | null | undefined>,

		/**
		 * The description with all HTML markup removed. If the description does not contain markup
		 * this is identitcal to `description`.
		 */
		description_plain: FormControl<string | null | undefined>,

		/**
		 * This will be replaced by the relationship `first_released_episode` in a future update.<br/>
		 * The ID of the first released episode within the season
		 */
		first_released_episode_id: FormControl<string | null | undefined>,

		/**
		 * This will be replaced by the relationship `last_released_episode` in a future update.<br/>
		 * The ID of the most recently released episode within the season
		 */
		last_released_episode_id: FormControl<string | null | undefined>,

		/** The number of the season. This could be `null` as well. */
		season_number: FormControl<number | null | undefined>,

		/**
		 * The title of the season modified for sorting. This converts all characters to
		 * lower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.
		 */
		sort_title: FormControl<string | null | undefined>,

		/** The current status of the season */
		status: FormControl<EpisodeAttributesStatus | null | undefined>,

		/** The title of the season */
		title: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateSeasonAttributesFormGroup() {
		return new FormGroup<SeasonAttributesFormProperties>({
			cascaded_cover_image_id: new FormControl<string | null | undefined>(undefined),
			cover_image_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			description_is_html: new FormControl<boolean | null | undefined>(undefined),
			description_plain: new FormControl<string | null | undefined>(undefined),
			first_released_episode_id: new FormControl<string | null | undefined>(undefined),
			last_released_episode_id: new FormControl<string | null | undefined>(undefined),
			season_number: new FormControl<number | null | undefined>(undefined),
			sort_title: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EpisodeAttributesStatus | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SeasonRelationships {

		/**
		 * The cover art for this season. If there is no specific cover for the season,
		 * the cover image of the series' cover art will be returned.
		 * The `/images` endpoint provideds details to the image.
		 */
		cascaded_cover_image?: SeasonRelationshipsCascaded_cover_image;
		classification_inclusions?: SeasonRelationshipsClassification_inclusions;

		/** The cover image for the season */
		cover_image?: SeasonRelationshipsCover_image;
		credits?: SeasonRelationshipsCredits;
		episodes?: SeasonRelationshipsEpisodes;

		/** The first released episode within the season */
		first_released_episode?: SeasonRelationshipsFirst_released_episode;
		images?: SeasonRelationshipsImages;

		/** The most recently released episode within the season */
		last_released_episode?: SeasonRelationshipsLast_released_episode;
		series?: SeasonRelationshipsSeries;
		taggings?: SeasonRelationshipsTaggings;
		tags?: SeasonRelationshipsTags;
	}
	export interface SeasonRelationshipsFormProperties {
	}
	export function CreateSeasonRelationshipsFormGroup() {
		return new FormGroup<SeasonRelationshipsFormProperties>({
		});

	}

	export interface SeasonRelationshipsCascaded_cover_image {
		data?: ResourceIdentifier;
	}
	export interface SeasonRelationshipsCascaded_cover_imageFormProperties {
	}
	export function CreateSeasonRelationshipsCascaded_cover_imageFormGroup() {
		return new FormGroup<SeasonRelationshipsCascaded_cover_imageFormProperties>({
		});

	}

	export interface SeasonRelationshipsClassification_inclusions {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeasonRelationshipsClassification_inclusionsFormProperties {
	}
	export function CreateSeasonRelationshipsClassification_inclusionsFormGroup() {
		return new FormGroup<SeasonRelationshipsClassification_inclusionsFormProperties>({
		});

	}

	export interface SeasonRelationshipsCover_image {
		data?: ResourceIdentifier;
	}
	export interface SeasonRelationshipsCover_imageFormProperties {
	}
	export function CreateSeasonRelationshipsCover_imageFormGroup() {
		return new FormGroup<SeasonRelationshipsCover_imageFormProperties>({
		});

	}

	export interface SeasonRelationshipsCredits {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeasonRelationshipsCreditsFormProperties {
	}
	export function CreateSeasonRelationshipsCreditsFormGroup() {
		return new FormGroup<SeasonRelationshipsCreditsFormProperties>({
		});

	}

	export interface SeasonRelationshipsEpisodes {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeasonRelationshipsEpisodesFormProperties {
	}
	export function CreateSeasonRelationshipsEpisodesFormGroup() {
		return new FormGroup<SeasonRelationshipsEpisodesFormProperties>({
		});

	}

	export interface SeasonRelationshipsFirst_released_episode {
		data?: ResourceIdentifier;
	}
	export interface SeasonRelationshipsFirst_released_episodeFormProperties {
	}
	export function CreateSeasonRelationshipsFirst_released_episodeFormGroup() {
		return new FormGroup<SeasonRelationshipsFirst_released_episodeFormProperties>({
		});

	}

	export interface SeasonRelationshipsImages {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeasonRelationshipsImagesFormProperties {
	}
	export function CreateSeasonRelationshipsImagesFormGroup() {
		return new FormGroup<SeasonRelationshipsImagesFormProperties>({
		});

	}

	export interface SeasonRelationshipsLast_released_episode {
		data?: ResourceIdentifier;
	}
	export interface SeasonRelationshipsLast_released_episodeFormProperties {
	}
	export function CreateSeasonRelationshipsLast_released_episodeFormGroup() {
		return new FormGroup<SeasonRelationshipsLast_released_episodeFormProperties>({
		});

	}

	export interface SeasonRelationshipsSeries {
		data?: ResourceIdentifier;
	}
	export interface SeasonRelationshipsSeriesFormProperties {
	}
	export function CreateSeasonRelationshipsSeriesFormGroup() {
		return new FormGroup<SeasonRelationshipsSeriesFormProperties>({
		});

	}

	export interface SeasonRelationshipsTaggings {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeasonRelationshipsTaggingsFormProperties {
	}
	export function CreateSeasonRelationshipsTaggingsFormGroup() {
		return new FormGroup<SeasonRelationshipsTaggingsFormProperties>({
		});

	}

	export interface SeasonRelationshipsTags {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeasonRelationshipsTagsFormProperties {
	}
	export function CreateSeasonRelationshipsTagsFormGroup() {
		return new FormGroup<SeasonRelationshipsTagsFormProperties>({
		});

	}

	export interface Series {
		attributes?: SeriesAttributes;
		id?: string | null;
		relationships?: SeriesRelationships;

		/** The type of resource. This is always `series` */
		type?: string | null;
	}
	export interface SeriesFormProperties {
		id: FormControl<string | null | undefined>,

		/** The type of resource. This is always `series` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSeriesFormGroup() {
		return new FormGroup<SeriesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeriesAttributes {

		/** If `null` or `true`, the ART19 web player will render an Amazon subscription badge */
		amazon_subscription_badge_enabled?: boolean | null;

		/** The Amazon Music subscription URL */
		amazon_subscription_url?: string | null;

		/** The CastBox subscription URL */
		castbox_subscription_url?: string | null;

		/**
		 * This will be replaced by the relationship `cover_image` in a future update.<br/>
		 * The image ID of the cover art for this series. The `/images` endpoint provideds details to the image.
		 */
		cover_image_id?: string | null;
		created_at?: Date | null;

		/** The description of the series eventually in HTML format */
		description?: string | null;

		/** Determines whether `description` is in HTML format or plain. */
		description_is_html?: boolean | null;

		/**
		 * The description with all HTML markup removed. If the description does not contain markup
		 * this is identitcal to `description`.
		 */
		description_plain?: string | null;

		/** The URL of the series on Facebook */
		facebook_url?: string | null;

		/** The Google subscription URL */
		google_subscription_url?: string | null;

		/** The iHeartRadio subscription URL */
		iheart_subscription_url?: string | null;

		/** The URL of the series on Instagram */
		instagram_url?: string | null;

		/** If `null` or `true`, the ART19 web player will render an iTunes subscription badge */
		itunes_subscription_badge_enabled?: boolean | null;

		/** The Apple iTunes subscription URL */
		itunes_subscription_url?: string | null;

		/** The URL of the series on LinkedIn */
		linkedin_url?: string | null;

		/** The Pocket Casts subscription URL */
		pocket_casts_subscription_url?: string | null;

		/** The URL of the RSS feed */
		podcast_subscription_url?: string | null;

		/**
		 * If this is `true`, a public web page for this series is available under
		 * `https://art19.com/shows/{slug}`, where `slug` is the value of the corresponding attribute.
		 * This public page provides details about the series as well as descriptive links to all its
		 * episodes. If this is `false`, no such public page is available.
		 */
		public_page_enabled?: boolean | null;

		/** If present, this is the preferred title for the series in the RSS Feed */
		public_title?: string | null;

		/** The RadioPublic subscription URL */
		radio_public_subscription_url?: string | null;

		/** The author responsible for the RSS feed */
		rss_author?: string | null;

		/** The copyright disclaimer for the contents of the show, appearing after a © symbol, e.g. `2020 ART19, Inc.` */
		rss_copyright?: string | null;

		/** The pubic point of contact for the show */
		rss_email?: string | null;

		/** The name of the contact for the show */
		rss_owner?: string | null;

		/**
		 * This slug is unique over all series and networks system wide and is used to access the series' feed
		 * as well as its eventually enabled public page on ART19.
		 */
		slug?: string | null;

		/**
		 * The title of the series modified for sorting. This converts all characters to
		 * lower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.
		 */
		sort_title?: string | null;

		/** If `null` or `true`, the ART19 web player will render a Spotify subscription badge */
		spotify_subscription_badge_enabled?: boolean | null;

		/** The Spotify subscription URL */
		spotify_subscription_url?: string | null;

		/** The status of the series */
		status?: EpisodeAttributesStatus | null;

		/** If `null` or `true`, the ART19 web player will render a Stitcher subscription badge */
		stitcher_subscription_badge_enabled?: boolean | null;

		/** The Stitcher subscription URL */
		stitcher_subscription_url?: string | null;

		/** The title of the series */
		title?: string | null;

		/** The URL of the series on Tumblr */
		tumblr_url?: string | null;

		/** The TuneIn subscription URL */
		tune_in_subscription_url?: string | null;

		/** The URL of the series on Twitter */
		twitter_url?: string | null;

		/** The type of the series */
		type?: SeriesAttributesType | null;
		updated_at?: Date | null;

		/** The custom website URL for the series */
		website_url?: string | null;
	}
	export interface SeriesAttributesFormProperties {

		/** If `null` or `true`, the ART19 web player will render an Amazon subscription badge */
		amazon_subscription_badge_enabled: FormControl<boolean | null | undefined>,

		/** The Amazon Music subscription URL */
		amazon_subscription_url: FormControl<string | null | undefined>,

		/** The CastBox subscription URL */
		castbox_subscription_url: FormControl<string | null | undefined>,

		/**
		 * This will be replaced by the relationship `cover_image` in a future update.<br/>
		 * The image ID of the cover art for this series. The `/images` endpoint provideds details to the image.
		 */
		cover_image_id: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** The description of the series eventually in HTML format */
		description: FormControl<string | null | undefined>,

		/** Determines whether `description` is in HTML format or plain. */
		description_is_html: FormControl<boolean | null | undefined>,

		/**
		 * The description with all HTML markup removed. If the description does not contain markup
		 * this is identitcal to `description`.
		 */
		description_plain: FormControl<string | null | undefined>,

		/** The URL of the series on Facebook */
		facebook_url: FormControl<string | null | undefined>,

		/** The Google subscription URL */
		google_subscription_url: FormControl<string | null | undefined>,

		/** The iHeartRadio subscription URL */
		iheart_subscription_url: FormControl<string | null | undefined>,

		/** The URL of the series on Instagram */
		instagram_url: FormControl<string | null | undefined>,

		/** If `null` or `true`, the ART19 web player will render an iTunes subscription badge */
		itunes_subscription_badge_enabled: FormControl<boolean | null | undefined>,

		/** The Apple iTunes subscription URL */
		itunes_subscription_url: FormControl<string | null | undefined>,

		/** The URL of the series on LinkedIn */
		linkedin_url: FormControl<string | null | undefined>,

		/** The Pocket Casts subscription URL */
		pocket_casts_subscription_url: FormControl<string | null | undefined>,

		/** The URL of the RSS feed */
		podcast_subscription_url: FormControl<string | null | undefined>,

		/**
		 * If this is `true`, a public web page for this series is available under
		 * `https://art19.com/shows/{slug}`, where `slug` is the value of the corresponding attribute.
		 * This public page provides details about the series as well as descriptive links to all its
		 * episodes. If this is `false`, no such public page is available.
		 */
		public_page_enabled: FormControl<boolean | null | undefined>,

		/** If present, this is the preferred title for the series in the RSS Feed */
		public_title: FormControl<string | null | undefined>,

		/** The RadioPublic subscription URL */
		radio_public_subscription_url: FormControl<string | null | undefined>,

		/** The author responsible for the RSS feed */
		rss_author: FormControl<string | null | undefined>,

		/** The copyright disclaimer for the contents of the show, appearing after a © symbol, e.g. `2020 ART19, Inc.` */
		rss_copyright: FormControl<string | null | undefined>,

		/** The pubic point of contact for the show */
		rss_email: FormControl<string | null | undefined>,

		/** The name of the contact for the show */
		rss_owner: FormControl<string | null | undefined>,

		/**
		 * This slug is unique over all series and networks system wide and is used to access the series' feed
		 * as well as its eventually enabled public page on ART19.
		 */
		slug: FormControl<string | null | undefined>,

		/**
		 * The title of the series modified for sorting. This converts all characters to
		 * lower case, removes an eventually leading `The` as well as leading and trailling whitespace characters.
		 */
		sort_title: FormControl<string | null | undefined>,

		/** If `null` or `true`, the ART19 web player will render a Spotify subscription badge */
		spotify_subscription_badge_enabled: FormControl<boolean | null | undefined>,

		/** The Spotify subscription URL */
		spotify_subscription_url: FormControl<string | null | undefined>,

		/** The status of the series */
		status: FormControl<EpisodeAttributesStatus | null | undefined>,

		/** If `null` or `true`, the ART19 web player will render a Stitcher subscription badge */
		stitcher_subscription_badge_enabled: FormControl<boolean | null | undefined>,

		/** The Stitcher subscription URL */
		stitcher_subscription_url: FormControl<string | null | undefined>,

		/** The title of the series */
		title: FormControl<string | null | undefined>,

		/** The URL of the series on Tumblr */
		tumblr_url: FormControl<string | null | undefined>,

		/** The TuneIn subscription URL */
		tune_in_subscription_url: FormControl<string | null | undefined>,

		/** The URL of the series on Twitter */
		twitter_url: FormControl<string | null | undefined>,

		/** The type of the series */
		type: FormControl<SeriesAttributesType | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,

		/** The custom website URL for the series */
		website_url: FormControl<string | null | undefined>,
	}
	export function CreateSeriesAttributesFormGroup() {
		return new FormGroup<SeriesAttributesFormProperties>({
			amazon_subscription_badge_enabled: new FormControl<boolean | null | undefined>(undefined),
			amazon_subscription_url: new FormControl<string | null | undefined>(undefined),
			castbox_subscription_url: new FormControl<string | null | undefined>(undefined),
			cover_image_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			description_is_html: new FormControl<boolean | null | undefined>(undefined),
			description_plain: new FormControl<string | null | undefined>(undefined),
			facebook_url: new FormControl<string | null | undefined>(undefined),
			google_subscription_url: new FormControl<string | null | undefined>(undefined),
			iheart_subscription_url: new FormControl<string | null | undefined>(undefined),
			instagram_url: new FormControl<string | null | undefined>(undefined),
			itunes_subscription_badge_enabled: new FormControl<boolean | null | undefined>(undefined),
			itunes_subscription_url: new FormControl<string | null | undefined>(undefined),
			linkedin_url: new FormControl<string | null | undefined>(undefined),
			pocket_casts_subscription_url: new FormControl<string | null | undefined>(undefined),
			podcast_subscription_url: new FormControl<string | null | undefined>(undefined),
			public_page_enabled: new FormControl<boolean | null | undefined>(undefined),
			public_title: new FormControl<string | null | undefined>(undefined),
			radio_public_subscription_url: new FormControl<string | null | undefined>(undefined),
			rss_author: new FormControl<string | null | undefined>(undefined),
			rss_copyright: new FormControl<string | null | undefined>(undefined),
			rss_email: new FormControl<string | null | undefined>(undefined),
			rss_owner: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			sort_title: new FormControl<string | null | undefined>(undefined),
			spotify_subscription_badge_enabled: new FormControl<boolean | null | undefined>(undefined),
			spotify_subscription_url: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EpisodeAttributesStatus | null | undefined>(undefined),
			stitcher_subscription_badge_enabled: new FormControl<boolean | null | undefined>(undefined),
			stitcher_subscription_url: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			tumblr_url: new FormControl<string | null | undefined>(undefined),
			tune_in_subscription_url: new FormControl<string | null | undefined>(undefined),
			twitter_url: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SeriesAttributesType | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			website_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SeriesAttributesType { Series = 'Series' }

	export interface SeriesRelationships {
		classification_inclusions?: SeriesRelationshipsClassification_inclusions;

		/** The cover image for the series */
		cover_image?: SeriesRelationshipsCover_image;
		credits?: SeriesRelationshipsCredits;
		episodes?: SeriesRelationshipsEpisodes;
		images?: SeriesRelationshipsImages;
		network?: SeriesRelationshipsNetwork;
		seasons?: SeriesRelationshipsSeasons;
		taggings?: SeriesRelationshipsTaggings;
		tags?: SeriesRelationshipsTags;
	}
	export interface SeriesRelationshipsFormProperties {
	}
	export function CreateSeriesRelationshipsFormGroup() {
		return new FormGroup<SeriesRelationshipsFormProperties>({
		});

	}

	export interface SeriesRelationshipsClassification_inclusions {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeriesRelationshipsClassification_inclusionsFormProperties {
	}
	export function CreateSeriesRelationshipsClassification_inclusionsFormGroup() {
		return new FormGroup<SeriesRelationshipsClassification_inclusionsFormProperties>({
		});

	}

	export interface SeriesRelationshipsCover_image {
		data?: ResourceIdentifier;
	}
	export interface SeriesRelationshipsCover_imageFormProperties {
	}
	export function CreateSeriesRelationshipsCover_imageFormGroup() {
		return new FormGroup<SeriesRelationshipsCover_imageFormProperties>({
		});

	}

	export interface SeriesRelationshipsCredits {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeriesRelationshipsCreditsFormProperties {
	}
	export function CreateSeriesRelationshipsCreditsFormGroup() {
		return new FormGroup<SeriesRelationshipsCreditsFormProperties>({
		});

	}

	export interface SeriesRelationshipsEpisodes {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeriesRelationshipsEpisodesFormProperties {
	}
	export function CreateSeriesRelationshipsEpisodesFormGroup() {
		return new FormGroup<SeriesRelationshipsEpisodesFormProperties>({
		});

	}

	export interface SeriesRelationshipsImages {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeriesRelationshipsImagesFormProperties {
	}
	export function CreateSeriesRelationshipsImagesFormGroup() {
		return new FormGroup<SeriesRelationshipsImagesFormProperties>({
		});

	}

	export interface SeriesRelationshipsNetwork {
		data?: ResourceIdentifier;
	}
	export interface SeriesRelationshipsNetworkFormProperties {
	}
	export function CreateSeriesRelationshipsNetworkFormGroup() {
		return new FormGroup<SeriesRelationshipsNetworkFormProperties>({
		});

	}

	export interface SeriesRelationshipsSeasons {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeriesRelationshipsSeasonsFormProperties {
	}
	export function CreateSeriesRelationshipsSeasonsFormGroup() {
		return new FormGroup<SeriesRelationshipsSeasonsFormProperties>({
		});

	}

	export interface SeriesRelationshipsTaggings {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeriesRelationshipsTaggingsFormProperties {
	}
	export function CreateSeriesRelationshipsTaggingsFormGroup() {
		return new FormGroup<SeriesRelationshipsTaggingsFormProperties>({
		});

	}

	export interface SeriesRelationshipsTags {
		data?: Array<ResourceIdentifier>;
	}
	export interface SeriesRelationshipsTagsFormProperties {
	}
	export function CreateSeriesRelationshipsTagsFormGroup() {
		return new FormGroup<SeriesRelationshipsTagsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get ClassificationInclusion records
		 * Classification Inclusions connect classifications with entities like series, episodes, or campaigns, amongst others.
		 * In order to retrieve a set of classification inclusions, at least one of the following filter parameters must
		 * be provided. Failing to do so renders a `400 Bad Request` response.
		 * - `ids[]`
		 * - `classified_id` and `classified_type`
		 * - `classified_id` and `classification_type`
		 * - `classification_id` and `classified_type`
		 * Get classification_inclusions
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @param {number} page_number Select which page number to receive results for. Pages are numbered starting at 1.
		 * @param {number} page_size Indicate how many records to return per page. The maximum is 100.
		 * @param {string} classification_id Limit the result to classification inclusions linked to a classification with this ID.
		 * @param {ClassificationAttributesType} classification_type The type of classification that the classification inclusions are linked to.
		 * Depending on the permissions of your credential, only a subset of these types are usable.
		 * @param {string} classified_id Limit the result to classification inclusions linked to a resource with this ID.
		 * You will have to use this filter together with either `classified_type` or `classification_type`.
		 * @param {ClassificationInclusionAttributesClassified_type} classified_type Limit the result to classification inclusions linked to this type of entity.
		 * @param {string} q Limit the result to classification inclusions linked to a classification containing
		 * the parameter value disregarding case.
		 * @param {Array<string>} sort Specify how to sort the result. Please refer to either the top section or the
		 * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
		 * @return {void} Success
		 */
		Classification_inclusionsGetByIds_AndPage_numberAndPage_sizeAndClassification_idAndClassification_typeAndClassified_idAndClassified_typeAndQAndSort(ids_: Array<string> | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, classification_id: string | null | undefined, classification_type: ClassificationAttributesType | null | undefined, classified_id: string | null | undefined, classified_type: ClassificationInclusionAttributesClassified_type | null | undefined, q: string | null | undefined, sort: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'classification_inclusions?' + ids_?.map(z => `ids[]=${encodeURIComponent(z)}`).join('&') + '&page_number=' + page_number + '&page_size=' + page_size + '&classification_id=' + (classification_id == null ? '' : encodeURIComponent(classification_id)) + '&classification_type=' + classification_type + '&classified_id=' + (classified_id == null ? '' : encodeURIComponent(classified_id)) + '&classified_type=' + classified_type + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific classification inclusion
		 * Get classification_inclusions/{id}
		 * @param {string} id The ID of the classification inclusion resource to load.
		 * @return {void} Success
		 */
		Classification_inclusions_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'classification_inclusions/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of classifications
		 * Get classifications
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @param {number} page_number Select which page number to receive results for. Pages are numbered starting at 1.
		 * @param {number} page_size Indicate how many records to return per page. The maximum is 100.
		 * @param {ClassificationAttributesType} type Limit the result to classifications of this type. The possible values for types
		 * depends on the privileges of the provided credential.
		 * @param {string} q Limit the result to classifications with a value containing the parameter value
		 * disregarding case.
		 * @param {string} is_country If this parameter is provided and not empty, limit the result to classifications
		 * of type `Geography` representing countries. The credential must have at least one
		 * privilege with a network, series, or advertiser profile.
		 * @param {Array<string>} sort Specify how to sort the result. Please refer to either the top section or the
		 * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
		 * @return {void} Success
		 */
		ClassificationsGetByIds_AndPage_numberAndPage_sizeAndTypeAndQAndIs_countryAndSort(ids_: Array<string> | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, type: ClassificationAttributesType | null | undefined, q: string | null | undefined, is_country: string | null | undefined, sort: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'classifications?' + ids_?.map(z => `ids[]=${encodeURIComponent(z)}`).join('&') + '&page_number=' + page_number + '&page_size=' + page_size + '&type=' + type + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&is_country=' + (is_country == null ? '' : encodeURIComponent(is_country)) + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific classification
		 * Get classifications/{id}
		 * @param {string} id The ID of the classification resource to load.
		 * @return {void} Success
		 */
		Classifications_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'classifications/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of credits
		 * Get credits
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @param {number} page_number Select which page number to receive results for. Pages are numbered starting at 1.
		 * @param {number} page_size Indicate how many records to return per page. The maximum is 100.
		 * @param {string} creditable_id Limit the result to credits for the entity with this ID only. If the entity is not
		 * published, the credential needs to have the right privilege to list the credits for it.
		 * @param {ClassificationInclusionAttributesClassified_type} creditable_type Limit the result to credits linked to this type of entity only.
		 * Depending on the privileges of the credential, this list might be further reduced to
		 * only published entities.
		 * @param {Array<string>} sort Specify how to sort the result. Please refer to either the top section or the
		 * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
		 * @return {void} Success
		 */
		CreditsGetByIds_AndPage_numberAndPage_sizeAndCreditable_idAndCreditable_typeAndSort(ids_: Array<string> | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, creditable_id: string | null | undefined, creditable_type: ClassificationInclusionAttributesClassified_type | null | undefined, sort: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'credits?' + ids_?.map(z => `ids[]=${encodeURIComponent(z)}`).join('&') + '&page_number=' + page_number + '&page_size=' + page_size + '&creditable_id=' + (creditable_id == null ? '' : encodeURIComponent(creditable_id)) + '&creditable_type=' + creditable_type + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific credit
		 * Get credits/{id}
		 * @param {string} id The ID of the credit resource to load.
		 * @return {void} Success
		 */
		Credits_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'credits/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of episodes
		 * One initial filter must be provided (`ids`, `series_id`, or `season_id`), otherwise a `400 Bad Request` response
		 * will be returned. Additional filters are allowed.
		 * This API will only return episodes that your credential has permission to access, which may not be exclusive to
		 * your account, depending on the filter(s) being used. Be careful to filter the results as needed.
		 * Get episodes
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @param {number} page_number Select which page number to receive results for. Pages are numbered starting at 1.
		 * @param {number} page_size Indicate how many records to return per page. The maximum is 100.
		 * @param {string} included_in_inventory_calendar Limit the result to episodes usable with an inventory management calendar for the provided AdDeal ID.
		 * @param {string} month Limit the result to episodes released in this month.
		 * @param {boolean} published If `true`, limit the result to published episodes only.
		 * If `false`, limit the result to _unpublished_ episodes only.
		 * @param {string} q Limit the result to episodes with a title containing this parameter in a case-insensitive way.
		 * @param {Date} released_after Limit the result to episodes released after this timestamp.
		 * @param {Date} released_before Limit the result to episodes released before this timestamp.
		 * @param {boolean} rss If `true`, limit the result to published and released episodes holding an available media file.
		 * If this is `true`, it also changes the default sort order to `-released_at`.
		 * @param {string} season_id Limit result to episodes linked to this season.
		 * @param {string} series_id Limit the result to episodes linked to this series.
		 * @param {Array<string>} sort Specify how to sort the result. Please refer to either the top section or the
		 * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
		 * @param {string} year Limit the result to episodes released in this year.
		 * @return {void} Success
		 */
		EpisodesGetByIds_AndPage_numberAndPage_sizeAndIncluded_in_inventory_calendarAndMonthAndPublishedAndQAndReleased_afterAndReleased_beforeAndRssAndSeason_idAndSeries_idAndSortAndYear(ids_: Array<string> | null | undefined, page_number: number, page_size: number, included_in_inventory_calendar: string | null | undefined, month: string | null | undefined, published: boolean | null | undefined, q: string | null | undefined, released_after: Date | null | undefined, released_before: Date | null | undefined, rss: boolean | null | undefined, season_id: string | null | undefined, series_id: string | null | undefined, sort: Array<string> | null | undefined, year: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'episodes?' + ids_?.map(z => `ids[]=${encodeURIComponent(z)}`).join('&') + '&page_number=' + page_number + '&page_size=' + page_size + '&included_in_inventory_calendar=' + (included_in_inventory_calendar == null ? '' : encodeURIComponent(included_in_inventory_calendar)) + '&month=' + (month == null ? '' : encodeURIComponent(month)) + '&published=' + published + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&released_after=' + released_after?.toISOString() + '&released_before=' + released_before?.toISOString() + '&rss=' + rss + '&season_id=' + (season_id == null ? '' : encodeURIComponent(season_id)) + '&series_id=' + (series_id == null ? '' : encodeURIComponent(series_id)) + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&year=' + (year == null ? '' : encodeURIComponent(year)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific episode
		 * Get episodes/{id}
		 * @param {string} id The ID of the episode resource to load.
		 * @return {void} Success
		 */
		Episodes_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'episodes/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the episode released right after the specified one
		 * Get episodes/{id}/next_sibling
		 * @param {string} id The ID of the episode to find the one episode released right after it.
		 * @param {boolean} rss If `true`, get the next released and published episode with an available media file.
		 * @return {void} Success
		 */
		Episodes_idNext_siblingGetByRss(id: string, rss: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'episodes/' + (id == null ? '' : encodeURIComponent(id)) + '/next_sibling&rss=' + rss, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the episode released right before the specified one
		 * Get episodes/{id}/previous_sibling
		 * @param {string} id The ID of the episode to find the one episode released right before it.
		 * @param {boolean} rss If `true`, get the previously released and published episode with an available media file.
		 * @return {void} Success
		 */
		Episodes_idPrevious_siblingGetByRss(id: string, rss: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'episodes/' + (id == null ? '' : encodeURIComponent(id)) + '/previous_sibling&rss=' + rss, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of images
		 * An image represents a piece of artwork attached to some entity like a series, season, or episode,
		 * and is _owned_ by an entity called the `bucket`.
		 * An image is also a container for several `MediaAssets` representing the physical files for various
		 * styles used.
		 * ## Media Asset Styles for Images
		 * Most media assets use square images. You may upload and use a square image, or upload an image of any
		 * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
		 * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
		 * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
		 * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
		 * version of the original file with the smaller of width or height as the square size.
		 * The original image as uploaded into the system is always retained unmodified and available through
		 * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
		 * An image has media assets with the following styles:
		 * - `original`: This is the original file provided. May not be available, depending on permissions
		 * and file type.
		 * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
		 * This should be used for any application needing the original, uncropped, image.
		 * - `regular`: If the image has cropping defined, this is the cropped image.
		 * If not, this is a square version of the original.
		 * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
		 * - `square-400`: A square version of the image with a size of `400x400` pixels.
		 * - `square-640`: A square version of the image with a size of `640x640` pixels.
		 * - `square-888`: A square version of the image with a size of `888x888` pixels.
		 * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
		 * This variant is only created if the cropped width & height are each at least 3000.
		 * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
		 * ### Preferred image used in feeds
		 * For the main series image used in feeds, it is ideal to use the `square-3000` version.
		 * If that is not available, the `itunes` version should be used instead.
		 * Get images
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @return {void} Success
		 */
		ImagesGetByIds_(ids_: Array<string>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'images?' + ids_.map(z => `ids[]=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific image
		 * An image represents a piece of artwork attached to some entity like a series, season, or episode,
		 * and is _owned_ by an entity called the `bucket`.
		 * An image is also a container for several `MediaAssets` representing the physical files for various
		 * styles used.
		 * ## Media Asset Styles for Images
		 * Most media assets use square images. You may upload and use a square image, or upload an image of any
		 * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
		 * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
		 * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
		 * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
		 * version of the original file with the smaller of width or height as the square size.
		 * The original image as uploaded into the system is always retained unmodified and available through
		 * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
		 * An image has media assets with the following styles:
		 * - `original`: This is the original file provided. May not be available, depending on permissions
		 * and file type.
		 * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
		 * This should be used for any application needing the original, uncropped, image.
		 * - `regular`: If the image has cropping defined, this is the cropped image.
		 * If not, this is a square version of the original.
		 * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
		 * - `square-400`: A square version of the image with a size of `400x400` pixels.
		 * - `square-640`: A square version of the image with a size of `640x640` pixels.
		 * - `square-888`: A square version of the image with a size of `888x888` pixels.
		 * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
		 * This variant is only created if the cropped width & height are each at least 3000.
		 * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
		 * ### Preferred image used in feeds
		 * For the main series image used in feeds, it is ideal to use the `square-3000` version.
		 * If that is not available, the `itunes` version should be used instead.
		 * Get images/{id}
		 * @param {string} id The ID of the image resource to load.
		 * @return {void} Success
		 */
		Images_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'images/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of media assets
		 * A media asset is part of a collection of assets or files representing an image or a piece of audio content
		 * like an episode or an ad. Images, for example, have differently sized versions for better rendering performance,
		 * and a piece of audio content usually comes in different encoding formats.
		 * The `style` attribute of a media asset describes the role an asset plays in the context of the collection.
		 * The collection is what an asset is attached to (`attachment_id|type`).
		 * ## Styles for Images
		 * Most media assets use square images. You may upload and use a square image, or upload an image of any
		 * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
		 * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
		 * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
		 * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
		 * version of the original file with the smaller of width or height as the square size.
		 * The original image as uploaded into the system is always retained unmodified and available through
		 * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
		 * An image has media assets with the following styles:
		 * - `original`: This is the original file provided. May not be available, depending on permissions
		 * and file type.
		 * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
		 * This should be used for any application needing the original, uncropped, image.
		 * - `regular`: If the image has cropping defined, this is the cropped image.
		 * If not, this is a square version of the original.
		 * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
		 * - `square-400`: A square version of the image with a size of `400x400` pixels.
		 * - `square-640`: A square version of the image with a size of `640x640` pixels.
		 * - `square-888`: A square version of the image with a size of `888x888` pixels.
		 * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
		 * This variant is only created if the cropped width & height are each at least 3000.
		 * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
		 * ### Preferred image used in feeds
		 * For the main series image used in feeds, it is ideal to use the `square-3000` version.
		 * If that is not available, the `itunes` version should be used instead.
		 * ## Styles for Audio
		 * - `medium`: A medium-quality version of the audio asset in various formats.
		 * - `original`: This is the original file provided. May not be available, depending on permissions
		 * and file type.
		 * - `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.
		 * Get media_assets
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @return {void} Success
		 */
		Media_assetsGetByIds_(ids_: Array<string>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'media_assets?' + ids_.map(z => `ids[]=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific media asset
		 * A media asset is part of a collection of assets or files representing an image or a piece of audio content
		 * like an episode or an ad. Images, for example, have differently sized versions for better rendering performance,
		 * and a piece of audio content usually comes in different encoding formats.
		 * The `style` attribute of a media asset describes the role an asset plays in the context of the collection.
		 * The collection is what an asset is attached to (`attachment_id|type`).
		 * ## Styles for Images
		 * Most media assets use square images. You may upload and use a square image, or upload an image of any
		 * shape and crop it to a square by specifying the cropping area. This area – identified by a coordinate
		 * `x, y` and a `width` & `height` – is the portion of the image used for all cover art. If an image has
		 * cropping defined, the cropped version of the image will be used in any `regular` or `square` style of media
		 * asset. If the original file is rectangular and does not have cropping, then the system will use a squared
		 * version of the original file with the smaller of width or height as the square size.
		 * The original image as uploaded into the system is always retained unmodified and available through
		 * the style `original`. All media asset styles except `stripped-original` consist of the cropped image.
		 * An image has media assets with the following styles:
		 * - `original`: This is the original file provided. May not be available, depending on permissions
		 * and file type.
		 * - `stripped-original`: The original file with all metadata (EXIF, XMP, PNG metadata, etc.) removed.
		 * This should be used for any application needing the original, uncropped, image.
		 * - `regular`: If the image has cropping defined, this is the cropped image.
		 * If not, this is a square version of the original.
		 * - `thumb`: A square thumbnail of the image with a size of `100x100` pixels.
		 * - `square-400`: A square version of the image with a size of `400x400` pixels.
		 * - `square-640`: A square version of the image with a size of `640x640` pixels.
		 * - `square-888`: A square version of the image with a size of `888x888` pixels.
		 * - `square-3000`: A square version of the image with a size of `3000x3000` pixels.
		 * This variant is only created if the cropped width & height are each at least 3000.
		 * - `itunes`: A square version of the image with a size of `1400x1400` pixels.
		 * ### Preferred image used in feeds
		 * For the main series image used in feeds, it is ideal to use the `square-3000` version.
		 * If that is not available, the `itunes` version should be used instead.
		 * ## Styles for Audio
		 * - `medium`: A medium-quality version of the audio asset in various formats.
		 * - `original`: This is the original file provided. May not be available, depending on permissions
		 * and file type.
		 * - `waveform_data`: The generated BBC Audiowaveform data in JSON or binary format.
		 * Get media_assets/{id}
		 * @param {string} id The ID of the media asset resource to load.
		 * @return {void} Success
		 */
		Media_assets_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'media_assets/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of networks
		 * ### Deprecations
		 * - The attribute `cover_image_id` has been replaced with the relationship `cover_image`
		 * and will be removed from the response in a future release.
		 * Get networks
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @param {number} page_number Select which page number to receive results for. Pages are numbered starting at 1.
		 * @param {number} page_size Indicate how many records to return per page. The maximum is 100.
		 * @param {string} q Limit the result to networks with a name containing this parameter in a case-insensitive way.
		 * @param {string} ad_rep_account_id Limit the result to networks containing at least one series with an ad deal of this Ad Ops profile.
		 * @param {Array<string>} ad_deal_status Limit the result to networks containing at least one series with an ad deal matching one of the
		 * values in this parameter.
		 * @param {Array<string>} sort Specify how to sort the result. Please refer to either the top section or the
		 * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
		 * @return {void} Success
		 */
		NetworksGetByIds_AndPage_numberAndPage_sizeAndQAndAd_rep_account_idAndAd_deal_statusAndSort(ids_: Array<string> | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, q: string | null | undefined, ad_rep_account_id: string | null | undefined, ad_deal_status: Array<string> | null | undefined, sort: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'networks?' + ids_?.map(z => `ids[]=${encodeURIComponent(z)}`).join('&') + '&page_number=' + page_number + '&page_size=' + page_size + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&ad_rep_account_id=' + (ad_rep_account_id == null ? '' : encodeURIComponent(ad_rep_account_id)) + '&' + ad_deal_status?.map(z => `ad_deal_status=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific network
		 * ### Deprecations
		 * - The attribute `cover_image_id` has been replaced with the relationship `cover_image`
		 * and will be removed from the response in a future release.
		 * Get networks/{id}
		 * @param {string} id The ID of the network resource to load.
		 * @return {void} Success
		 */
		Networks_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'networks/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of people
		 * Each series, season, and episode has a Credits section where you may add people and roles.
		 * This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
		 * Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.
		 * Get people
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @param {number} page_number Select which page number to receive results for. Pages are numbered starting at 1.
		 * @param {number} page_size Indicate how many records to return per page. The maximum is 100.
		 * @param {string} q Limit the result to people with a full name containing this parameter in a case-insensitive way.
		 * @param {Array<string>} sort Specify how to sort the result. Please refer to either the top section or the
		 * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
		 * @return {void} Success
		 */
		PeopleGetByIds_AndPage_numberAndPage_sizeAndQAndSort(ids_: Array<string> | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, q: string | null | undefined, sort: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'people?' + ids_?.map(z => `ids[]=${encodeURIComponent(z)}`).join('&') + '&page_number=' + page_number + '&page_size=' + page_size + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific person
		 * Each series, season, and episode has a Credits section where you may add people and roles.
		 * This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
		 * Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.
		 * Get people/{id}
		 * @param {string} id The ID of the person resource to load.
		 * @return {void} Success
		 */
		People_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'people/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of seasons
		 * When retrieving a list of seasons, the result is automatically filtered depending on the
		 * privileges the used credential holds. If there are no specific privileges to a series or network,
		 * only active seasons for active series are included.
		 * Get seasons
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @param {number} page_number Select which page number to receive results for. Pages are numbered starting at 1.
		 * @param {number} page_size Indicate how many records to return per page. The maximum is 100.
		 * @param {string} series_id Limit the result to seasons owned by this series.
		 * @param {string} q Limit the result to seasons with a title containing this parameter in a case-insensitive way.
		 * @param {Array<string>} sort Specify how to sort the result. Please refer to either the top section or the
		 * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
		 * @return {void} Success
		 */
		SeasonsGetByIds_AndPage_numberAndPage_sizeAndSeries_idAndQAndSort(ids_: Array<string> | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, series_id: string | null | undefined, q: string | null | undefined, sort: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seasons?' + ids_?.map(z => `ids[]=${encodeURIComponent(z)}`).join('&') + '&page_number=' + page_number + '&page_size=' + page_size + '&series_id=' + (series_id == null ? '' : encodeURIComponent(series_id)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific season
		 * Get seasons/{id}
		 * @param {string} id The ID of the season resource to load.
		 * @return {void} Success
		 */
		Seasons_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seasons/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of series
		 * When retrieving a list of series, the result is automatically filtered depending on the
		 * privileges the used credential holds. All credentials will have access to active series
		 * with a public page enabled (on ART19). Utilizing a filter to limit the result to series
		 * associated with your account is recommended.
		 * Get series
		 * @param {Array<string>} ids_ The list of IDs to filter by. Repeat this parameter for each ID you want to include in the filter.
		 * The brackets *MUST* be percent-encoded, per the requirements in
		 * [RFC 3986 § 3.4](https://tools.ietf.org/html/rfc3986#section-3.4).
		 * @param {number} page_number Select which page number to receive results for. Pages are numbered starting at 1.
		 * @param {number} page_size Indicate how many records to return per page. The maximum is 100.
		 * @param {string} ad_rep_account_id Limit the result to series with an ad deal of this Ad Ops profile.
		 * @param {string} network_id Limit the result to series owned by this network.
		 * @param {string} q Limit the result to series with a title or slug containing this parameter in a case-insensitive way.
		 * @param {Array<string>} sort Specify how to sort the result. Please refer to either the top section or the
		 * [JSON:API specification](https://jsonapi.org/format/#fetching-sorting) on how sorting works in general.
		 * @return {void} Success
		 */
		SeriesGetByIds_AndPage_numberAndPage_sizeAndAd_rep_account_idAndNetwork_idAndQAndSort(ids_: Array<string> | null | undefined, page_number: number | null | undefined, page_size: number | null | undefined, ad_rep_account_id: string | null | undefined, network_id: string | null | undefined, q: string | null | undefined, sort: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series?' + ids_?.map(z => `ids[]=${encodeURIComponent(z)}`).join('&') + '&page_number=' + page_number + '&page_size=' + page_size + '&ad_rep_account_id=' + (ad_rep_account_id == null ? '' : encodeURIComponent(ad_rep_account_id)) + '&network_id=' + (network_id == null ? '' : encodeURIComponent(network_id)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific series
		 * Get series/{id}
		 * @param {string} id The ID of the series resource to load.
		 * @return {void} Success
		 */
		Series_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'series/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

