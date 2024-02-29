import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcquireAssetLicensesRequest {

		/** Required */
		extended_licenses: Array<ExtendedLicenses>;

		/** Defaults to false. */
		use_team_credits?: boolean | null;
	}
	export interface AcquireAssetLicensesRequestFormProperties {

		/** Defaults to false. */
		use_team_credits: FormControl<boolean | null | undefined>,
	}
	export function CreateAcquireAssetLicensesRequestFormGroup() {
		return new FormGroup<AcquireAssetLicensesRequestFormProperties>({
			use_team_credits: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ExtendedLicenses { multiseat = 'multiseat', unlimited = 'unlimited', resale = 'resale', indemnification = 'indemnification' }

	export interface AddBoardAssetsResult {
		assets_added?: Array<BoardAsset>;
		assets_not_added?: Array<string>;
	}
	export interface AddBoardAssetsResultFormProperties {
	}
	export function CreateAddBoardAssetsResultFormGroup() {
		return new FormGroup<AddBoardAssetsResultFormProperties>({
		});

	}

	export interface BoardAsset {

		/** Required */
		asset_id: string;
	}
	export interface BoardAssetFormProperties {

		/** Required */
		asset_id: FormControl<string | null | undefined>,
	}
	export function CreateBoardAssetFormGroup() {
		return new FormGroup<BoardAssetFormProperties>({
			asset_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AffiliateImage {
		caption?: string | null;
		destination_url?: string | null;
		id?: string | null;
		preview_urls?: AffiliateImageUrls;
		title?: string | null;
	}
	export interface AffiliateImageFormProperties {
		caption: FormControl<string | null | undefined>,
		destination_url: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAffiliateImageFormGroup() {
		return new FormGroup<AffiliateImageFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			destination_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AffiliateImageUrls {
		large?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		large_height?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		large_width?: number | null;
		medium?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		medium_height?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		medium_width?: number | null;
		small?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		small_height?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		small_width?: number | null;
	}
	export interface AffiliateImageUrlsFormProperties {
		large: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		large_height: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		large_width: FormControl<number | null | undefined>,
		medium: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		medium_height: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		medium_width: FormControl<number | null | undefined>,
		small: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		small_height: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		small_width: FormControl<number | null | undefined>,
	}
	export function CreateAffiliateImageUrlsFormGroup() {
		return new FormGroup<AffiliateImageUrlsFormProperties>({
			large: new FormControl<string | null | undefined>(undefined),
			large_height: new FormControl<number | null | undefined>(undefined),
			large_width: new FormControl<number | null | undefined>(undefined),
			medium: new FormControl<string | null | undefined>(undefined),
			medium_height: new FormControl<number | null | undefined>(undefined),
			medium_width: new FormControl<number | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
			small_height: new FormControl<number | null | undefined>(undefined),
			small_width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AffiliateImageSearchResponse {
		auto_corrections?: AutoCorrections;
		images?: Array<AffiliateImage>;
	}
	export interface AffiliateImageSearchResponseFormProperties {
	}
	export function CreateAffiliateImageSearchResponseFormGroup() {
		return new FormGroup<AffiliateImageSearchResponseFormProperties>({
		});

	}

	export interface AutoCorrections {
		phrase?: string | null;
	}
	export interface AutoCorrectionsFormProperties {
		phrase: FormControl<string | null | undefined>,
	}
	export function CreateAutoCorrectionsFormGroup() {
		return new FormGroup<AutoCorrectionsFormProperties>({
			phrase: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the graphical style of images desired. */
	export enum AffiliateSearchStyle { photography = 'photography', vector = 'vector' }

	export interface AffiliateVideo {
		caption?: string | null;
		clip_length?: string | null;
		destination_url?: string | null;
		id?: string | null;
		preview_urls?: AffiliateVideoUrls;
		title?: string | null;
	}
	export interface AffiliateVideoFormProperties {
		caption: FormControl<string | null | undefined>,
		clip_length: FormControl<string | null | undefined>,
		destination_url: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateAffiliateVideoFormGroup() {
		return new FormGroup<AffiliateVideoFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			clip_length: new FormControl<string | null | undefined>(undefined),
			destination_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AffiliateVideoUrls {
		large_motion?: string | null;
		large_still?: string | null;
		medium_still?: string | null;
		small_motion?: string | null;
		small_still?: string | null;
	}
	export interface AffiliateVideoUrlsFormProperties {
		large_motion: FormControl<string | null | undefined>,
		large_still: FormControl<string | null | undefined>,
		medium_still: FormControl<string | null | undefined>,
		small_motion: FormControl<string | null | undefined>,
		small_still: FormControl<string | null | undefined>,
	}
	export function CreateAffiliateVideoUrlsFormGroup() {
		return new FormGroup<AffiliateVideoUrlsFormProperties>({
			large_motion: new FormControl<string | null | undefined>(undefined),
			large_still: new FormControl<string | null | undefined>(undefined),
			medium_still: new FormControl<string | null | undefined>(undefined),
			small_motion: new FormControl<string | null | undefined>(undefined),
			small_still: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AffiliateVideoSearchResponse {
		auto_corrections?: AutoCorrections;
		videos?: Array<AffiliateVideo>;
	}
	export interface AffiliateVideoSearchResponseFormProperties {
	}
	export function CreateAffiliateVideoSearchResponseFormGroup() {
		return new FormGroup<AffiliateVideoSearchResponseFormProperties>({
		});

	}

	export enum AgeOfPeopleFilterType { newborn = 'newborn', baby = 'baby', child = 'child', teenager = 'teenager', young_adult = 'young_adult', adult = 'adult', adults_only = 'adults_only', mature_adult = 'mature_adult', senior_adult = 'senior_adult', '0-1_months' = '0-1_months', '2-5_months' = '2-5_months', '6-11_months' = '6-11_months', '12-17_months' = '12-17_months', '18-23_months' = '18-23_months', '2-3_years' = '2-3_years', '4-5_years' = '4-5_years', '6-7_years' = '6-7_years', '8-9_years' = '8-9_years', '10-11_years' = '10-11_years', '12-13_years' = '12-13_years', '14-15_years' = '14-15_years', '16-17_years' = '16-17_years', '18-19_years' = '18-19_years', '20-24_years' = '20-24_years', '20-29_years' = '20-29_years', '25-29_years' = '25-29_years', '30-34_years' = '30-34_years', '30-39_years' = '30-39_years', '35-39_years' = '35-39_years', '40-44_years' = '40-44_years', '40-49_years' = '40-49_years', '45-49_years' = '45-49_years', '50-54_years' = '50-54_years', '50-59_years' = '50-59_years', '55-59_years' = '55-59_years', '60-64_years' = '60-64_years', '60-69_years' = '60-69_years', '65-69_years' = '65-69_years', '70-79_years' = '70-79_years', '80-89_years' = '80-89_years', '90_plus_years' = '90_plus_years', '100_over' = '100_over' }

	export interface AllowedUse {

		/** Indicates how the asset can be used */
		how_can_i_use_it?: string | null;

		/** Indicates release status */
		release_info?: string | null;

		/** Indicates asset usage restriction, if any */
		usage_restrictions?: Array<string>;
	}
	export interface AllowedUseFormProperties {

		/** Indicates how the asset can be used */
		how_can_i_use_it: FormControl<string | null | undefined>,

		/** Indicates release status */
		release_info: FormControl<string | null | undefined>,
	}
	export function CreateAllowedUseFormGroup() {
		return new FormGroup<AllowedUseFormProperties>({
			how_can_i_use_it: new FormControl<string | null | undefined>(undefined),
			release_info: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Artist {
		name?: string | null;
	}
	export interface ArtistFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateArtistFormGroup() {
		return new FormGroup<ArtistFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArtistsImageSearchFieldValues { id = 'id', allowed_use = 'allowed_use', alternative_ids = 'alternative_ids', artist = 'artist', asset_family = 'asset_family', asset_type = 'asset_type', call_for_image = 'call_for_image', caption = 'caption', collection_id = 'collection_id', collection_code = 'collection_code', collection_name = 'collection_name', comp = 'comp', copyright = 'copyright', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', editorial_segments = 'editorial_segments', event_ids = 'event_ids', graphical_style = 'graphical_style', keywords = 'keywords', license_model = 'license_model', max_dimensions = 'max_dimensions', orientation = 'orientation', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', summary_set = 'summary_set', thumb = 'thumb', title = 'title' }

	export enum ArtistsVideoSearchFieldValues { id = 'id', allowed_use = 'allowed_use', alternative_ids = 'alternative_ids', artist = 'artist', asset_family = 'asset_family', asset_type = 'asset_type', call_for_image = 'call_for_image', caption = 'caption', clip_length = 'clip_length', collection_id = 'collection_id', collection_code = 'collection_code', collection_name = 'collection_name', comp = 'comp', copyright = 'copyright', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', editorial_segments = 'editorial_segments', event_ids = 'event_ids', graphical_style = 'graphical_style', keywords = 'keywords', license_model = 'license_model', max_dimensions = 'max_dimensions', orientation = 'orientation', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', summary_set = 'summary_set', thumb = 'thumb', title = 'title' }

	export interface Asset {
		asset_type?: string | null;
		date_added?: Date | null;
		display_sizes?: Array<DisplaySize>;
		id?: string | null;
	}
	export interface AssetFormProperties {
		asset_type: FormControl<string | null | undefined>,
		date_added: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			asset_type: new FormControl<string | null | undefined>(undefined),
			date_added: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisplaySize {
		name?: string | null;
		uri?: string | null;
	}
	export interface DisplaySizeFormProperties {
		name: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateDisplaySizeFormGroup() {
		return new FormGroup<DisplaySizeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssetChanges {

		/** Contains the identifier for the change-set resource. Passed into ConfirmAssetChanges requests to confirm receipt of the asset changes in the response. */
		change_set_id?: string | null;

		/** Contains a list of ChangedAssetList results for the query. */
		changed_assets?: Array<ChangedAssetDetail>;
	}
	export interface AssetChangesFormProperties {

		/** Contains the identifier for the change-set resource. Passed into ConfirmAssetChanges requests to confirm receipt of the asset changes in the response. */
		change_set_id: FormControl<string | null | undefined>,
	}
	export function CreateAssetChangesFormGroup() {
		return new FormGroup<AssetChangesFormProperties>({
			change_set_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangedAssetDetail {

		/** Contains the date of the asset change. */
		asset_changed_utc_datetime?: Date | null;

		/** Contains the type of change this asset change is. (i.e. "New," "Updated" or "Deleted") */
		asset_lifecycle?: string | null;

		/** Contains the type of asset this asset change is (i.e. "Image"). */
		asset_type?: string | null;

		/** Contains the Id for the asset change. */
		id?: string | null;

		/** Contains the asset download URL for assets with an AssetLifecycle of "New." */
		uri?: string | null;
	}
	export interface ChangedAssetDetailFormProperties {

		/** Contains the date of the asset change. */
		asset_changed_utc_datetime: FormControl<Date | null | undefined>,

		/** Contains the type of change this asset change is. (i.e. "New," "Updated" or "Deleted") */
		asset_lifecycle: FormControl<string | null | undefined>,

		/** Contains the type of asset this asset change is (i.e. "Image"). */
		asset_type: FormControl<string | null | undefined>,

		/** Contains the Id for the asset change. */
		id: FormControl<string | null | undefined>,

		/** Contains the asset download URL for assets with an AssetLifecycle of "New." */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChangedAssetDetailFormGroup() {
		return new FormGroup<ChangedAssetDetailFormProperties>({
			asset_changed_utc_datetime: new FormControl<Date | null | undefined>(undefined),
			asset_lifecycle: new FormControl<string | null | undefined>(undefined),
			asset_type: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssetDownloadHistoryResults {
		downloads?: any;
		id?: string | null;
	}
	export interface AssetDownloadHistoryResultsFormProperties {
		downloads: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateAssetDownloadHistoryResultsFormGroup() {
		return new FormGroup<AssetDownloadHistoryResultsFormProperties>({
			downloads: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssetEvent {
		asset_id?: string | null;
		email_address?: string | null;
		timestamp?: Date | null;
	}
	export interface AssetEventFormProperties {
		asset_id: FormControl<string | null | undefined>,
		email_address: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAssetEventFormGroup() {
		return new FormGroup<AssetEventFormProperties>({
			asset_id: new FormControl<string | null | undefined>(undefined),
			email_address: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AssetFamily { NotSet = 'NotSet', Editorial = 'Editorial', Creative = 'Creative', Both = 'Both' }

	export interface AssetIdFromOrder {
		id?: string | null;
	}
	export interface AssetIdFromOrderFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateAssetIdFromOrderFormGroup() {
		return new FormGroup<AssetIdFromOrderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetLicenseName { Standard = 'Standard', Multiseat = 'Multiseat', Unlimited = 'Unlimited', Resale = 'Resale', Indemnification = 'Indemnification' }

	export interface AssetLicensingResponse {
		acquired_licenses?: Array<ExtendedLicenses>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		credits_used?: number | null;
	}
	export interface AssetLicensingResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		credits_used: FormControl<number | null | undefined>,
	}
	export function CreateAssetLicensingResponseFormGroup() {
		return new FormGroup<AssetLicensingResponseFormProperties>({
			credits_used: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AssetType { NotSet = 'NotSet', Image = 'Image', Film = 'Film', Music = 'Music' }

	export enum AssociatedVideoDetailFieldValues { allowed_use = 'allowed_use', artist = 'artist', aspect_ratio = 'aspect_ratio', asset_family = 'asset_family', call_for_image = 'call_for_image', caption = 'caption', clip_length = 'clip_length', collection_code = 'collection_code', collection_id = 'collection_id', collection_name = 'collection_name', color_type = 'color_type', comp = 'comp', copyright = 'copyright', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', download_product = 'download_product', download_sizes = 'download_sizes', editorial_segments = 'editorial_segments', entity_details = 'entity_details', era = 'era', event_ids = 'event_ids', id = 'id', istock_collection = 'istock_collection', keywords = 'keywords', largest_downloads = 'largest_downloads', license_model = 'license_model', mastered_to = 'mastered_to', orientation = 'orientation', originally_shot_on = 'originally_shot_on', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', shot_speed = 'shot_speed', source = 'source', summary_set = 'summary_set', thumb = 'thumb', title = 'title', istock_licenses = 'istock_licenses' }

	export enum BlendedImageSortOrder { best_match = 'best_match', most_popular = 'most_popular', newest = 'newest', random = 'random' }

	export interface BlendedVideoSearchItem {
		allowed_use?: AllowedUse;
		artist?: string | null;
		asset_family?: string | null;
		caption?: string | null;
		clip_length?: string | null;
		collection_code?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id?: number | null;
		collection_name?: string | null;
		color_type?: string | null;
		copyright?: string | null;
		date_created?: Date | null;
		display_sizes?: Array<VideoSearchItemDisplaySize>;
		download_product?: string | null;
		era?: string | null;
		event_ids?: Array<number>;
		id?: string | null;
		istock_licenses?: Array<IStockLicense>;
		keywords?: Array<Keyword>;
		largest_downloads?: Array<Download>;
		license_model?: string | null;
		mastered_to?: string | null;
		originally_shot_on?: string | null;
		product_types?: Array<string>;
		referral_destinations?: Array<ReferralDestination>;
		shot_speed?: string | null;
		source?: string | null;
		title?: string | null;
	}
	export interface BlendedVideoSearchItemFormProperties {
		artist: FormControl<string | null | undefined>,
		asset_family: FormControl<string | null | undefined>,
		caption: FormControl<string | null | undefined>,
		clip_length: FormControl<string | null | undefined>,
		collection_code: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id: FormControl<number | null | undefined>,
		collection_name: FormControl<string | null | undefined>,
		color_type: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		download_product: FormControl<string | null | undefined>,
		era: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		license_model: FormControl<string | null | undefined>,
		mastered_to: FormControl<string | null | undefined>,
		originally_shot_on: FormControl<string | null | undefined>,
		shot_speed: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateBlendedVideoSearchItemFormGroup() {
		return new FormGroup<BlendedVideoSearchItemFormProperties>({
			artist: new FormControl<string | null | undefined>(undefined),
			asset_family: new FormControl<string | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			clip_length: new FormControl<string | null | undefined>(undefined),
			collection_code: new FormControl<string | null | undefined>(undefined),
			collection_id: new FormControl<number | null | undefined>(undefined),
			collection_name: new FormControl<string | null | undefined>(undefined),
			color_type: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			download_product: new FormControl<string | null | undefined>(undefined),
			era: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			license_model: new FormControl<string | null | undefined>(undefined),
			mastered_to: new FormControl<string | null | undefined>(undefined),
			originally_shot_on: new FormControl<string | null | undefined>(undefined),
			shot_speed: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoSearchItemDisplaySize {
		aspect_ratio?: string | null;
		is_watermarked?: boolean | null;
		name?: string | null;
		uri?: string | null;
	}
	export interface VideoSearchItemDisplaySizeFormProperties {
		aspect_ratio: FormControl<string | null | undefined>,
		is_watermarked: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVideoSearchItemDisplaySizeFormGroup() {
		return new FormGroup<VideoSearchItemDisplaySizeFormProperties>({
			aspect_ratio: new FormControl<string | null | undefined>(undefined),
			is_watermarked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IStockLicense {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		credits?: number | null;
		license_type?: AssetLicenseName | null;
	}
	export interface IStockLicenseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		credits: FormControl<number | null | undefined>,
		license_type: FormControl<AssetLicenseName | null | undefined>,
	}
	export function CreateIStockLicenseFormGroup() {
		return new FormGroup<IStockLicenseFormProperties>({
			credits: new FormControl<number | null | undefined>(undefined),
			license_type: new FormControl<AssetLicenseName | null | undefined>(undefined),
		});

	}

	export interface Keyword {
		entity_types?: Array<string>;
		entity_uris?: Array<string>;
		keyword_id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		relevance?: number | null;
		text?: string | null;
		type?: string | null;
	}
	export interface KeywordFormProperties {
		keyword_id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		relevance: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateKeywordFormGroup() {
		return new FormGroup<KeywordFormProperties>({
			keyword_id: new FormControl<string | null | undefined>(undefined),
			relevance: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Download {
		agreement_name?: string | null;
		product_id?: string | null;
		product_type?: string | null;
		uri?: string | null;
	}
	export interface DownloadFormProperties {
		agreement_name: FormControl<string | null | undefined>,
		product_id: FormControl<string | null | undefined>,
		product_type: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateDownloadFormGroup() {
		return new FormGroup<DownloadFormProperties>({
			agreement_name: new FormControl<string | null | undefined>(undefined),
			product_id: new FormControl<string | null | undefined>(undefined),
			product_type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReferralDestination {
		site_name?: string | null;
		uri?: string | null;
	}
	export interface ReferralDestinationFormProperties {
		site_name: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateReferralDestinationFormGroup() {
		return new FormGroup<ReferralDestinationFormProperties>({
			site_name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlendedVideoSearchResults {
		facets?: SearchFacetsResponse;
		related_searches?: Array<RelatedSearch>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
		videos?: Array<BlendedVideoSearchItem>;
	}
	export interface BlendedVideoSearchResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateBlendedVideoSearchResultsFormGroup() {
		return new FormGroup<BlendedVideoSearchResultsFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchFacetsResponse {
		artists?: Array<Artist>;
		entertainment?: Array<Entertainment>;
		events?: Array<FacetEvent>;
		locations?: Array<Location>;
		specific_people?: Array<SpecificPeople>;
	}
	export interface SearchFacetsResponseFormProperties {
	}
	export function CreateSearchFacetsResponseFormGroup() {
		return new FormGroup<SearchFacetsResponseFormProperties>({
		});

	}

	export interface Entertainment {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface EntertainmentFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateEntertainmentFormGroup() {
		return new FormGroup<EntertainmentFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FacetEvent {
		date?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface FacetEventFormProperties {
		date: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFacetEventFormGroup() {
		return new FormGroup<FacetEventFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Location {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface LocationFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SpecificPeople {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface SpecificPeopleFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSpecificPeopleFormGroup() {
		return new FormGroup<SpecificPeopleFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RelatedSearch {
		phrase?: string | null;
		url?: string | null;
	}
	export interface RelatedSearchFormProperties {
		phrase: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRelatedSearchFormGroup() {
		return new FormGroup<RelatedSearchFormProperties>({
			phrase: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BlendedVideosFieldValues { allowed_use = 'allowed_use', artist = 'artist', aspect_ratio = 'aspect_ratio', asset_family = 'asset_family', call_for_image = 'call_for_image', caption = 'caption', clip_length = 'clip_length', collection_code = 'collection_code', collection_id = 'collection_id', collection_name = 'collection_name', color_type = 'color_type', comp = 'comp', copyright = 'copyright', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', download_product = 'download_product', download_sizes = 'download_sizes', editorial_segments = 'editorial_segments', entity_details = 'entity_details', era = 'era', event_ids = 'event_ids', id = 'id', istock_collection = 'istock_collection', keywords = 'keywords', largest_downloads = 'largest_downloads', license_model = 'license_model', mastered_to = 'mastered_to', object_name = 'object_name', orientation = 'orientation', originally_shot_on = 'originally_shot_on', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', shot_speed = 'shot_speed', source = 'source', summary_set = 'summary_set', thumb = 'thumb', title = 'title', istock_licenses = 'istock_licenses' }

	export interface BoardCommentPermissions {
		can_add_comment?: boolean | null;
	}
	export interface BoardCommentPermissionsFormProperties {
		can_add_comment: FormControl<boolean | null | undefined>,
	}
	export function CreateBoardCommentPermissionsFormGroup() {
		return new FormGroup<BoardCommentPermissionsFormProperties>({
			can_add_comment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BoardCreated {
		id?: string | null;
	}
	export interface BoardCreatedFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateBoardCreatedFormGroup() {
		return new FormGroup<BoardCreatedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoardDetail {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		asset_count?: number | null;
		assets?: Array<Asset>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comment_count?: number | null;
		date_created?: Date | null;
		date_last_updated?: Date | null;
		description?: string | null;
		id?: string | null;
		links?: Links;
		name?: string | null;
		permissions?: BoardPermissions;
	}
	export interface BoardDetailFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		asset_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		comment_count: FormControl<number | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_last_updated: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateBoardDetailFormGroup() {
		return new FormGroup<BoardDetailFormProperties>({
			asset_count: new FormControl<number | null | undefined>(undefined),
			comment_count: new FormControl<number | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_last_updated: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Links {
		invitation?: string | null;
		share?: string | null;
	}
	export interface LinksFormProperties {
		invitation: FormControl<string | null | undefined>,
		share: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			invitation: new FormControl<string | null | undefined>(undefined),
			share: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BoardPermissions {
		can_add_assets?: boolean | null;
		can_delete_board?: boolean | null;
		can_invite_to_board?: boolean | null;
		can_remove_assets?: boolean | null;
		can_update_description?: boolean | null;
		can_update_name?: boolean | null;
	}
	export interface BoardPermissionsFormProperties {
		can_add_assets: FormControl<boolean | null | undefined>,
		can_delete_board: FormControl<boolean | null | undefined>,
		can_invite_to_board: FormControl<boolean | null | undefined>,
		can_remove_assets: FormControl<boolean | null | undefined>,
		can_update_description: FormControl<boolean | null | undefined>,
		can_update_name: FormControl<boolean | null | undefined>,
	}
	export function CreateBoardPermissionsFormGroup() {
		return new FormGroup<BoardPermissionsFormProperties>({
			can_add_assets: new FormControl<boolean | null | undefined>(undefined),
			can_delete_board: new FormControl<boolean | null | undefined>(undefined),
			can_invite_to_board: new FormControl<boolean | null | undefined>(undefined),
			can_remove_assets: new FormControl<boolean | null | undefined>(undefined),
			can_update_description: new FormControl<boolean | null | undefined>(undefined),
			can_update_name: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BoardInfo {
		description?: string | null;

		/** Required */
		name: string;
	}
	export interface BoardInfoFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBoardInfoFormGroup() {
		return new FormGroup<BoardInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BoardList {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		board_count?: number | null;
		boards?: Array<BoardListBoard>;
	}
	export interface BoardListFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		board_count: FormControl<number | null | undefined>,
	}
	export function CreateBoardListFormGroup() {
		return new FormGroup<BoardListFormProperties>({
			board_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BoardListBoard {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		asset_count?: number | null;
		board_relationship?: string | null;
		date_created?: Date | null;
		date_last_updated?: Date | null;
		description?: string | null;
		hero_asset?: Asset;
		id?: string | null;
		name?: string | null;
	}
	export interface BoardListBoardFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		asset_count: FormControl<number | null | undefined>,
		board_relationship: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		date_last_updated: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateBoardListBoardFormGroup() {
		return new FormGroup<BoardListBoardFormProperties>({
			asset_count: new FormControl<number | null | undefined>(undefined),
			board_relationship: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_last_updated: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BoardRelationship { owned = 'owned', invited = 'invited' }

	export enum BoardSortOrder { date_last_updated_descending = 'date_last_updated_descending', date_last_updated_ascending = 'date_last_updated_ascending', name_ascending = 'name_ascending', name_decending = 'name_decending' }

	export interface Channel {
		AssetChangeType?: string | null;
		AssetFamily?: AssetFamily | null;
		AssetType?: AssetType | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChannelId?: number | null;
		CreateDateUtc?: Date | null;
		Metadata?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NotificationCount?: number | null;
		OldestChangeNotificationDateUtc?: Date | null;
	}
	export interface ChannelFormProperties {
		AssetChangeType: FormControl<string | null | undefined>,
		AssetFamily: FormControl<AssetFamily | null | undefined>,
		AssetType: FormControl<AssetType | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ChannelId: FormControl<number | null | undefined>,
		CreateDateUtc: FormControl<Date | null | undefined>,
		Metadata: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		NotificationCount: FormControl<number | null | undefined>,
		OldestChangeNotificationDateUtc: FormControl<Date | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			AssetChangeType: new FormControl<string | null | undefined>(undefined),
			AssetFamily: new FormControl<AssetFamily | null | undefined>(undefined),
			AssetType: new FormControl<AssetType | null | undefined>(undefined),
			ChannelId: new FormControl<number | null | undefined>(undefined),
			CreateDateUtc: new FormControl<Date | null | undefined>(undefined),
			Metadata: new FormControl<string | null | undefined>(undefined),
			NotificationCount: new FormControl<number | null | undefined>(undefined),
			OldestChangeNotificationDateUtc: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Collaborator {
		first_name?: string | null;
		last_name?: string | null;
	}
	export interface CollaboratorFormProperties {
		first_name: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
	}
	export function CreateCollaboratorFormGroup() {
		return new FormGroup<CollaboratorFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Collection {
		asset_family?: string | null;
		code?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		license_model?: string | null;
		name?: string | null;
		product_types?: Array<string>;
	}
	export interface CollectionFormProperties {
		asset_family: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		license_model: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCollectionFormGroup() {
		return new FormGroup<CollectionFormProperties>({
			asset_family: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			license_model: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CollectionsFilterType { include = 'include', exclude = 'exclude' }

	export interface CollectionsList {
		collections?: Array<Collection>;
	}
	export interface CollectionsListFormProperties {
	}
	export function CreateCollectionsListFormGroup() {
		return new FormGroup<CollectionsListFormProperties>({
		});

	}

	export interface Comment {
		created_by?: Collaborator;
		date_created?: Date | null;
		id?: string | null;
		permissions?: CommentPermissions;
		text?: string | null;
	}
	export interface CommentFormProperties {
		date_created: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			date_created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentPermissions {
		can_delete_comment?: boolean | null;
	}
	export interface CommentPermissionsFormProperties {
		can_delete_comment: FormControl<boolean | null | undefined>,
	}
	export function CreateCommentPermissionsFormGroup() {
		return new FormGroup<CommentPermissionsFormProperties>({
			can_delete_comment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CommentCreated {
		id?: string | null;
	}
	export interface CommentCreatedFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateCommentCreatedFormGroup() {
		return new FormGroup<CommentCreatedFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentRequest {
		text?: string | null;
	}
	export interface CommentRequestFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateCommentRequestFormGroup() {
		return new FormGroup<CommentRequestFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentsList {
		comments?: Array<Comment>;
		permissions?: BoardCommentPermissions;
	}
	export interface CommentsListFormProperties {
	}
	export function CreateCommentsListFormGroup() {
		return new FormGroup<CommentsListFormProperties>({
		});

	}

	export enum CompositionsFilterType { abstract = 'abstract', candid = 'candid', close_up = 'close_up', copy_space = 'copy_space', cut_out = 'cut_out', full_frame = 'full_frame', full_length = 'full_length', headshot = 'headshot', looking_at_camera = 'looking_at_camera', macro = 'macro', portrait = 'portrait', sparse = 'sparse', still_life = 'still_life', three_quarter_length = 'three_quarter_length', waist_up = 'waist_up' }


	/** Contributor information for an image or video */
	export interface Contributor {

		/** The contributor's display name */
		display_name?: string | null;

		/** The contributor's member name */
		member_name?: string | null;
	}

	/** Contributor information for an image or video */
	export interface ContributorFormProperties {

		/** The contributor's display name */
		display_name: FormControl<string | null | undefined>,

		/** The contributor's member name */
		member_name: FormControl<string | null | undefined>,
	}
	export function CreateContributorFormGroup() {
		return new FormGroup<ContributorFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			member_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CountriesList {
		countries?: Array<Country>;
	}
	export interface CountriesListFormProperties {
	}
	export function CreateCountriesListFormGroup() {
		return new FormGroup<CountriesListFormProperties>({
		});

	}

	export interface Country {
		iso_alpha_2?: string | null;
		iso_alpha_3?: string | null;
		name?: string | null;
	}
	export interface CountryFormProperties {
		iso_alpha_2: FormControl<string | null | undefined>,
		iso_alpha_3: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			iso_alpha_2: new FormControl<string | null | undefined>(undefined),
			iso_alpha_3: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateImageSearchFacetsFields { artists = 'artists', locations = 'locations' }

	export enum CreateVideoSearchFacetsFields { artists = 'artists', locations = 'locations' }

	export interface CreativeImageSearchResults {
		auto_corrections?: AutoCorrections;
		images?: Array<ImageSearchItemCreative>;
		related_searches?: Array<RelatedSearch>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
	}
	export interface CreativeImageSearchResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateCreativeImageSearchResultsFormGroup() {
		return new FormGroup<CreativeImageSearchResultsFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImageSearchItemCreative {
		allowed_use?: AllowedUse;
		alternative_ids?: {[id: string]: string };
		artist?: string | null;
		asset_family?: string | null;
		call_for_image?: boolean | null;
		caption?: string | null;
		collection_code?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id?: number | null;
		collection_name?: string | null;
		color_type?: string | null;
		copyright?: string | null;
		date_camera_shot?: Date | null;
		date_created?: Date | null;
		display_sizes?: Array<ImageSearchItemDisplaySize>;
		download_product?: string | null;
		graphical_style?: string | null;
		id?: string | null;
		keywords?: Array<Keyword>;
		largest_downloads?: Array<Download>;
		license_model?: string | null;
		max_dimensions?: MaxDimensions;
		orientation?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		quality_rank?: number | null;
		referral_destinations?: Array<ReferralDestination>;
		title?: string | null;
		uri_oembed?: string | null;
	}
	export interface ImageSearchItemCreativeFormProperties {
		alternative_ids: FormControl<{[id: string]: string } | null | undefined>,
		artist: FormControl<string | null | undefined>,
		asset_family: FormControl<string | null | undefined>,
		call_for_image: FormControl<boolean | null | undefined>,
		caption: FormControl<string | null | undefined>,
		collection_code: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id: FormControl<number | null | undefined>,
		collection_name: FormControl<string | null | undefined>,
		color_type: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		date_camera_shot: FormControl<Date | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		download_product: FormControl<string | null | undefined>,
		graphical_style: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		license_model: FormControl<string | null | undefined>,
		orientation: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		quality_rank: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		uri_oembed: FormControl<string | null | undefined>,
	}
	export function CreateImageSearchItemCreativeFormGroup() {
		return new FormGroup<ImageSearchItemCreativeFormProperties>({
			alternative_ids: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			artist: new FormControl<string | null | undefined>(undefined),
			asset_family: new FormControl<string | null | undefined>(undefined),
			call_for_image: new FormControl<boolean | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			collection_code: new FormControl<string | null | undefined>(undefined),
			collection_id: new FormControl<number | null | undefined>(undefined),
			collection_name: new FormControl<string | null | undefined>(undefined),
			color_type: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			date_camera_shot: new FormControl<Date | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			download_product: new FormControl<string | null | undefined>(undefined),
			graphical_style: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			license_model: new FormControl<string | null | undefined>(undefined),
			orientation: new FormControl<string | null | undefined>(undefined),
			quality_rank: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri_oembed: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageSearchItemDisplaySize {
		is_watermarked?: boolean | null;
		name?: string | null;
		uri?: string | null;
	}
	export interface ImageSearchItemDisplaySizeFormProperties {
		is_watermarked: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateImageSearchItemDisplaySizeFormGroup() {
		return new FormGroup<ImageSearchItemDisplaySizeFormProperties>({
			is_watermarked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MaxDimensions {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface MaxDimensionsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMaxDimensionsFormGroup() {
		return new FormGroup<MaxDimensionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreativeImageSortOrder { best_match = 'best_match', most_popular = 'most_popular', newest = 'newest', random = 'random' }

	export enum CreativeImagesFieldValues { allowed_use = 'allowed_use', alternative_ids = 'alternative_ids', artist = 'artist', asset_family = 'asset_family', call_for_image = 'call_for_image', caption = 'caption', collection_code = 'collection_code', collection_id = 'collection_id', collection_name = 'collection_name', color_type = 'color_type', comp = 'comp', copyright = 'copyright', date_camera_shot = 'date_camera_shot', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', download_product = 'download_product', download_sizes = 'download_sizes', graphical_style = 'graphical_style', id = 'id', istock_collection = 'istock_collection', keywords = 'keywords', largest_downloads = 'largest_downloads', license_model = 'license_model', max_dimensions = 'max_dimensions', orientation = 'orientation', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', summary_set = 'summary_set', thumb = 'thumb', title = 'title', uri_oembed = 'uri_oembed' }

	export interface CreativeVideoSearchItem {
		allowed_use?: AllowedUse;
		artist?: string | null;
		asset_family?: string | null;
		caption?: string | null;
		clip_length?: string | null;
		collection_code?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id?: number | null;
		collection_name?: string | null;
		color_type?: string | null;
		copyright?: string | null;
		date_created?: Date | null;
		display_sizes?: Array<VideoSearchItemDisplaySize>;
		download_product?: string | null;
		era?: string | null;
		event_ids?: Array<number>;
		id?: string | null;
		istock_licenses?: Array<IStockLicense>;
		keywords?: Array<Keyword>;
		largest_downloads?: Array<Download>;
		license_model?: string | null;
		mastered_to?: string | null;
		originally_shot_on?: string | null;
		product_types?: Array<string>;
		referral_destinations?: Array<ReferralDestination>;
		shot_speed?: string | null;
		title?: string | null;
	}
	export interface CreativeVideoSearchItemFormProperties {
		artist: FormControl<string | null | undefined>,
		asset_family: FormControl<string | null | undefined>,
		caption: FormControl<string | null | undefined>,
		clip_length: FormControl<string | null | undefined>,
		collection_code: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id: FormControl<number | null | undefined>,
		collection_name: FormControl<string | null | undefined>,
		color_type: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		download_product: FormControl<string | null | undefined>,
		era: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		license_model: FormControl<string | null | undefined>,
		mastered_to: FormControl<string | null | undefined>,
		originally_shot_on: FormControl<string | null | undefined>,
		shot_speed: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateCreativeVideoSearchItemFormGroup() {
		return new FormGroup<CreativeVideoSearchItemFormProperties>({
			artist: new FormControl<string | null | undefined>(undefined),
			asset_family: new FormControl<string | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			clip_length: new FormControl<string | null | undefined>(undefined),
			collection_code: new FormControl<string | null | undefined>(undefined),
			collection_id: new FormControl<number | null | undefined>(undefined),
			collection_name: new FormControl<string | null | undefined>(undefined),
			color_type: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			download_product: new FormControl<string | null | undefined>(undefined),
			era: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			license_model: new FormControl<string | null | undefined>(undefined),
			mastered_to: new FormControl<string | null | undefined>(undefined),
			originally_shot_on: new FormControl<string | null | undefined>(undefined),
			shot_speed: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreativeVideoSearchResults {
		auto_corrections?: AutoCorrections;
		facets?: SearchFacetsResponse;
		related_searches?: Array<RelatedSearch>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
		videos?: Array<CreativeVideoSearchItem>;
	}
	export interface CreativeVideoSearchResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateCreativeVideoSearchResultsFormGroup() {
		return new FormGroup<CreativeVideoSearchResultsFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreativeVideoSortOrder { best_match = 'best_match', most_popular = 'most_popular', newest = 'newest', random = 'random' }

	export enum CreativeVideosFieldValues { allowed_use = 'allowed_use', artist = 'artist', aspect_ratio = 'aspect_ratio', asset_family = 'asset_family', call_for_image = 'call_for_image', caption = 'caption', clip_length = 'clip_length', collection_code = 'collection_code', collection_id = 'collection_id', collection_name = 'collection_name', color_type = 'color_type', comp = 'comp', copyright = 'copyright', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', download_product = 'download_product', download_sizes = 'download_sizes', era = 'era', id = 'id', istock_collection = 'istock_collection', keywords = 'keywords', largest_downloads = 'largest_downloads', license_model = 'license_model', mastered_to = 'mastered_to', object_name = 'object_name', orientation = 'orientation', originally_shot_on = 'originally_shot_on', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', shot_speed = 'shot_speed', summary_set = 'summary_set', thumb = 'thumb', title = 'title' }

	export interface CuratedSet {
		assets?: Array<string>;
		date_created?: Date | null;
		date_last_updated?: Date | null;
		description?: string | null;
		hero_image_uri?: string | null;
		keywords?: Array<string>;
		set_id?: string | null;
		title?: string | null;
	}
	export interface CuratedSetFormProperties {
		date_created: FormControl<Date | null | undefined>,
		date_last_updated: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		hero_image_uri: FormControl<string | null | undefined>,
		set_id: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateCuratedSetFormGroup() {
		return new FormGroup<CuratedSetFormProperties>({
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_last_updated: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			hero_image_uri: new FormControl<string | null | undefined>(undefined),
			set_id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerInfoResponse {
		first_name?: string | null;
		last_name?: string | null;
		middle_name?: string | null;
	}
	export interface CustomerInfoResponseFormProperties {
		first_name: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		middle_name: FormControl<string | null | undefined>,
	}
	export function CreateCustomerInfoResponseFormGroup() {
		return new FormGroup<CustomerInfoResponseFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Dimensions {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dpi?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface DimensionsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dpi: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDimensionsFormGroup() {
		return new FormGroup<DimensionsFormProperties>({
			dpi: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DownloadDetails {
		download_notes?: string | null;
		project_code?: string | null;
	}
	export interface DownloadDetailsFormProperties {
		download_notes: FormControl<string | null | undefined>,
		project_code: FormControl<string | null | undefined>,
	}
	export function CreateDownloadDetailsFormGroup() {
		return new FormGroup<DownloadDetailsFormProperties>({
			download_notes: new FormControl<string | null | undefined>(undefined),
			project_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DownloadFileType { eps = 'eps', jpg = 'jpg' }

	export interface DownloadRequirements {
		is_note_required?: boolean | null;
		is_project_code_required?: boolean | null;
		project_codes?: Array<string>;
	}
	export interface DownloadRequirementsFormProperties {
		is_note_required: FormControl<boolean | null | undefined>,
		is_project_code_required: FormControl<boolean | null | undefined>,
	}
	export function CreateDownloadRequirementsFormGroup() {
		return new FormGroup<DownloadRequirementsFormProperties>({
			is_note_required: new FormControl<boolean | null | undefined>(undefined),
			is_project_code_required: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EditorialGraphicalStyle { photography = 'photography', illustration = 'illustration', vector = 'vector' }

	export enum EditorialImageSearchFacetsFields { artists = 'artists', events = 'events', locations = 'locations', specific_people = 'specific_people' }

	export interface EditorialImageSearchResults {
		images?: Array<ImageSearchItemEditorial>;
		related_searches?: Array<RelatedSearch>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
	}
	export interface EditorialImageSearchResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialImageSearchResultsFormGroup() {
		return new FormGroup<EditorialImageSearchResultsFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImageSearchItemEditorial {
		allowed_use?: AllowedUse;
		alternative_ids?: {[id: string]: string };
		artist?: string | null;
		asset_family?: string | null;
		call_for_image?: boolean | null;
		caption?: string | null;
		collection_code?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id?: number | null;
		collection_name?: string | null;
		color_type?: string | null;
		copyright?: string | null;
		date_camera_shot?: Date | null;
		date_created?: Date | null;
		display_sizes?: Array<ImageSearchItemDisplaySize>;
		download_product?: string | null;
		editorial_segments?: Array<string>;
		editorial_source?: EditorialSource;
		event_ids?: Array<number>;
		graphical_style?: string | null;
		id?: string | null;
		keywords?: Array<Keyword>;
		largest_downloads?: Array<Download>;
		license_model?: string | null;
		max_dimensions?: MaxDimensions;
		orientation?: string | null;
		people?: Array<string>;
		product_types?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		quality_rank?: number | null;
		referral_destinations?: Array<ReferralDestination>;
		title?: string | null;
		uri_oembed?: string | null;
	}
	export interface ImageSearchItemEditorialFormProperties {
		alternative_ids: FormControl<{[id: string]: string } | null | undefined>,
		artist: FormControl<string | null | undefined>,
		asset_family: FormControl<string | null | undefined>,
		call_for_image: FormControl<boolean | null | undefined>,
		caption: FormControl<string | null | undefined>,
		collection_code: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id: FormControl<number | null | undefined>,
		collection_name: FormControl<string | null | undefined>,
		color_type: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		date_camera_shot: FormControl<Date | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		download_product: FormControl<string | null | undefined>,
		graphical_style: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		license_model: FormControl<string | null | undefined>,
		orientation: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		quality_rank: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		uri_oembed: FormControl<string | null | undefined>,
	}
	export function CreateImageSearchItemEditorialFormGroup() {
		return new FormGroup<ImageSearchItemEditorialFormProperties>({
			alternative_ids: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			artist: new FormControl<string | null | undefined>(undefined),
			asset_family: new FormControl<string | null | undefined>(undefined),
			call_for_image: new FormControl<boolean | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			collection_code: new FormControl<string | null | undefined>(undefined),
			collection_id: new FormControl<number | null | undefined>(undefined),
			collection_name: new FormControl<string | null | undefined>(undefined),
			color_type: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			date_camera_shot: new FormControl<Date | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			download_product: new FormControl<string | null | undefined>(undefined),
			graphical_style: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			license_model: new FormControl<string | null | undefined>(undefined),
			orientation: new FormControl<string | null | undefined>(undefined),
			quality_rank: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri_oembed: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EditorialSource {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
	}
	export interface EditorialSourceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateEditorialSourceFormGroup() {
		return new FormGroup<EditorialSourceFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EditorialImagesFieldValues { allowed_use = 'allowed_use', alternative_ids = 'alternative_ids', artist = 'artist', asset_family = 'asset_family', call_for_image = 'call_for_image', caption = 'caption', collection_code = 'collection_code', collection_id = 'collection_id', collection_name = 'collection_name', color_type = 'color_type', comp = 'comp', copyright = 'copyright', date_camera_shot = 'date_camera_shot', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', download_product = 'download_product', download_sizes = 'download_sizes', editorial_segments = 'editorial_segments', editorial_source = 'editorial_source', event_ids = 'event_ids', graphical_style = 'graphical_style', id = 'id', keywords = 'keywords', largest_downloads = 'largest_downloads', license_model = 'license_model', max_dimensions = 'max_dimensions', orientation = 'orientation', people = 'people', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', summary_set = 'summary_set', thumb = 'thumb', title = 'title', uri_oembed = 'uri_oembed' }

	export enum EditorialSegmentContract { archival = 'archival', entertainment = 'entertainment', news = 'news', publicity = 'publicity', royalty = 'royalty', sport = 'sport' }

	export enum EditorialVideoSearchFacetsFields { artists = 'artists', events = 'events', locations = 'locations', specific_people = 'specific_people' }

	export interface EditorialVideoSearchItem {
		allowed_use?: AllowedUse;
		artist?: string | null;
		asset_family?: string | null;
		caption?: string | null;
		clip_length?: string | null;
		collection_code?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id?: number | null;
		collection_name?: string | null;
		color_type?: string | null;
		copyright?: string | null;
		date_created?: Date | null;
		display_sizes?: Array<VideoSearchItemDisplaySize>;
		download_product?: string | null;
		era?: string | null;
		event_ids?: Array<number>;
		id?: string | null;
		istock_licenses?: Array<IStockLicense>;
		keywords?: Array<Keyword>;
		largest_downloads?: Array<Download>;
		license_model?: string | null;
		mastered_to?: string | null;
		originally_shot_on?: string | null;
		product_types?: Array<string>;
		referral_destinations?: Array<ReferralDestination>;
		shot_speed?: string | null;
		source?: string | null;
		title?: string | null;
	}
	export interface EditorialVideoSearchItemFormProperties {
		artist: FormControl<string | null | undefined>,
		asset_family: FormControl<string | null | undefined>,
		caption: FormControl<string | null | undefined>,
		clip_length: FormControl<string | null | undefined>,
		collection_code: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id: FormControl<number | null | undefined>,
		collection_name: FormControl<string | null | undefined>,
		color_type: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		download_product: FormControl<string | null | undefined>,
		era: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		license_model: FormControl<string | null | undefined>,
		mastered_to: FormControl<string | null | undefined>,
		originally_shot_on: FormControl<string | null | undefined>,
		shot_speed: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateEditorialVideoSearchItemFormGroup() {
		return new FormGroup<EditorialVideoSearchItemFormProperties>({
			artist: new FormControl<string | null | undefined>(undefined),
			asset_family: new FormControl<string | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			clip_length: new FormControl<string | null | undefined>(undefined),
			collection_code: new FormControl<string | null | undefined>(undefined),
			collection_id: new FormControl<number | null | undefined>(undefined),
			collection_name: new FormControl<string | null | undefined>(undefined),
			color_type: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			download_product: new FormControl<string | null | undefined>(undefined),
			era: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			license_model: new FormControl<string | null | undefined>(undefined),
			mastered_to: new FormControl<string | null | undefined>(undefined),
			originally_shot_on: new FormControl<string | null | undefined>(undefined),
			shot_speed: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EditorialVideoSearchResults {
		facets?: SearchFacetsResponse;
		related_searches?: Array<RelatedSearch>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
		videos?: Array<EditorialVideoSearchItem>;
	}
	export interface EditorialVideoSearchResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateEditorialVideoSearchResultsFormGroup() {
		return new FormGroup<EditorialVideoSearchResultsFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EditorialVideoType { raw = 'raw', produced = 'produced' }

	export enum EditorialVideosFieldValues { allowed_use = 'allowed_use', artist = 'artist', aspect_ratio = 'aspect_ratio', asset_family = 'asset_family', call_for_image = 'call_for_image', caption = 'caption', clip_length = 'clip_length', collection_code = 'collection_code', collection_id = 'collection_id', collection_name = 'collection_name', color_type = 'color_type', comp = 'comp', copyright = 'copyright', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', download_product = 'download_product', download_sizes = 'download_sizes', editorial_segments = 'editorial_segments', era = 'era', event_ids = 'event_ids', id = 'id', istock_collection = 'istock_collection', keywords = 'keywords', largest_downloads = 'largest_downloads', license_model = 'license_model', mastered_to = 'mastered_to', object_name = 'object_name', orientation = 'orientation', originally_shot_on = 'originally_shot_on', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', shot_speed = 'shot_speed', source = 'source', summary_set = 'summary_set', thumb = 'thumb', title = 'title', istock_licenses = 'istock_licenses' }

	export enum EthnicityFilterType { black = 'black', caucasian = 'caucasian', east_asian = 'east_asian', hispanic_latino = 'hispanic_latino', japanese = 'japanese', middle_eastern = 'middle_eastern', mixed_race_person = 'mixed_race_person', multiethnic_group = 'multiethnic_group', native_american_first_nations = 'native_american_first_nations', pacific_islander = 'pacific_islander', south_asian = 'south_asian', southeast_asian = 'southeast_asian' }

	export interface Event {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		child_event_count?: number | null;
		editorial_segments?: Array<string>;
		hero_image?: HeroImage;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		image_count?: number | null;
		location?: LocationEvent;
		name?: string | null;
		start_date?: Date | null;
	}
	export interface EventFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		child_event_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		image_count: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		start_date: FormControl<Date | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			child_event_count: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			image_count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface HeroImage {
		display_sizes?: Array<HeroImageDisplaySize>;
		id?: string | null;
	}
	export interface HeroImageFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateHeroImageFormGroup() {
		return new FormGroup<HeroImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HeroImageDisplaySize {
		is_watermarked?: boolean | null;
		name?: string | null;
		uri?: string | null;
	}
	export interface HeroImageDisplaySizeFormProperties {
		is_watermarked: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateHeroImageDisplaySizeFormGroup() {
		return new FormGroup<HeroImageDisplaySizeFormProperties>({
			is_watermarked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationEvent {
		city?: string | null;
		country?: string | null;
		state_province?: string | null;
		venue?: string | null;
	}
	export interface LocationEventFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		state_province: FormControl<string | null | undefined>,
		venue: FormControl<string | null | undefined>,
	}
	export function CreateLocationEventFormGroup() {
		return new FormGroup<LocationEventFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			state_province: new FormControl<string | null | undefined>(undefined),
			venue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventDetailFieldValues { id = 'id', child_event_count = 'child_event_count', editorial_segments = 'editorial_segments', hero_image = 'hero_image', image_count = 'image_count', location = 'location', name = 'name', start_date = 'start_date', type = 'type' }

	export enum EventFieldValues { id = 'id', child_event_count = 'child_event_count', editorial_segments = 'editorial_segments', hero_image = 'hero_image', image_count = 'image_count', keywords = 'keywords', location = 'location', name = 'name', start_date = 'start_date', type = 'type' }

	export enum EventSearchSortOrder { newest = 'newest', oldest = 'oldest' }

	export interface EventsSearchResult {
		events?: Array<Event>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
	}
	export interface EventsSearchResultFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateEventsSearchResultFormGroup() {
		return new FormGroup<EventsSearchResultFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDownloadsResponse {
		downloads?: Array<HistoricalDownload>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
	}
	export interface GetDownloadsResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateGetDownloadsResponseFormGroup() {
		return new FormGroup<GetDownloadsResponseFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface HistoricalDownload {
		agreement_name?: string | null;
		asset_type?: string | null;
		date_downloaded?: Date | null;
		dimensions?: Dimensions;
		download_details?: DownloadDetails;
		download_source?: string | null;
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		product_id?: number | null;
		product_type?: string | null;
		size_name?: string | null;
		thumb_uri?: string | null;
		user?: User;
	}
	export interface HistoricalDownloadFormProperties {
		agreement_name: FormControl<string | null | undefined>,
		asset_type: FormControl<string | null | undefined>,
		date_downloaded: FormControl<Date | null | undefined>,
		download_source: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		product_id: FormControl<number | null | undefined>,
		product_type: FormControl<string | null | undefined>,
		size_name: FormControl<string | null | undefined>,
		thumb_uri: FormControl<string | null | undefined>,
	}
	export function CreateHistoricalDownloadFormGroup() {
		return new FormGroup<HistoricalDownloadFormProperties>({
			agreement_name: new FormControl<string | null | undefined>(undefined),
			asset_type: new FormControl<string | null | undefined>(undefined),
			date_downloaded: new FormControl<Date | null | undefined>(undefined),
			download_source: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			product_id: new FormControl<number | null | undefined>(undefined),
			product_type: new FormControl<string | null | undefined>(undefined),
			size_name: new FormControl<string | null | undefined>(undefined),
			thumb_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {
		first_name?: string | null;
		last_name?: string | null;
		middle_name?: string | null;
		username?: string | null;
	}
	export interface UserFormProperties {
		first_name: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		middle_name: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			middle_name: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSendEventsResponse {
		asset_send_events?: Array<AssetEvent>;
		last_offset?: Date | null;
	}
	export interface GetSendEventsResponseFormProperties {
		last_offset: FormControl<Date | null | undefined>,
	}
	export function CreateGetSendEventsResponseFormGroup() {
		return new FormGroup<GetSendEventsResponseFormProperties>({
			last_offset: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GraphicalStyle { fine_art = 'fine_art', illustration = 'illustration', photography = 'photography', vector = 'vector' }

	export enum GraphicalStylesFilterType { include = 'include', exclude = 'exclude' }

	export enum ImageDetailFieldValues { allowed_use = 'allowed_use', alternative_ids = 'alternative_ids', artist = 'artist', artist_title = 'artist_title', asset_family = 'asset_family', call_for_image = 'call_for_image', caption = 'caption', city = 'city', collection_code = 'collection_code', collection_id = 'collection_id', collection_name = 'collection_name', color_type = 'color_type', comp = 'comp', copyright = 'copyright', country = 'country', credit_line = 'credit_line', date_camera_shot = 'date_camera_shot', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', download_sizes = 'download_sizes', download_product = 'download_product', downloads = 'downloads', editorial_segments = 'editorial_segments', editorial_source = 'editorial_source', entity_details = 'entity_details', event_ids = 'event_ids', graphical_style = 'graphical_style', id = 'id', istock_collection = 'istock_collection', istock_licenses = 'istock_licenses', keywords = 'keywords', largest_downloads = 'largest_downloads', license_model = 'license_model', links = 'links', max_dimensions = 'max_dimensions', object_name = 'object_name', orientation = 'orientation', people = 'people', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', state_province = 'state_province', summary_set = 'summary_set', thumb = 'thumb', title = 'title', uri_oembed = 'uri_oembed' }

	export enum ImageOrientationRequest { horizontal = 'horizontal', vertical = 'vertical', square = 'square', panoramic_horizontal = 'panoramic_horizontal', panoramic_vertical = 'panoramic_vertical' }

	export interface ImageSearchItem {
		allowed_use?: AllowedUse;
		alternative_ids?: {[id: string]: string };
		artist?: string | null;
		asset_family?: string | null;
		call_for_image?: boolean | null;
		caption?: string | null;
		collection_code?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id?: number | null;
		collection_name?: string | null;
		color_type?: string | null;
		copyright?: string | null;
		date_camera_shot?: Date | null;
		date_created?: Date | null;
		display_sizes?: Array<ImageSearchItemDisplaySize>;
		download_product?: string | null;
		editorial_segments?: Array<string>;
		event_ids?: Array<number>;
		graphical_style?: string | null;
		id?: string | null;
		istock_licenses?: Array<IStockLicense>;
		keywords?: Array<Keyword>;
		largest_downloads?: Array<Download>;
		license_model?: string | null;
		max_dimensions?: MaxDimensions;
		orientation?: string | null;
		people?: Array<string>;
		product_types?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		quality_rank?: number | null;
		referral_destinations?: Array<ReferralDestination>;
		title?: string | null;
		uri_oembed?: string | null;
	}
	export interface ImageSearchItemFormProperties {
		alternative_ids: FormControl<{[id: string]: string } | null | undefined>,
		artist: FormControl<string | null | undefined>,
		asset_family: FormControl<string | null | undefined>,
		call_for_image: FormControl<boolean | null | undefined>,
		caption: FormControl<string | null | undefined>,
		collection_code: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		collection_id: FormControl<number | null | undefined>,
		collection_name: FormControl<string | null | undefined>,
		color_type: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		date_camera_shot: FormControl<Date | null | undefined>,
		date_created: FormControl<Date | null | undefined>,
		download_product: FormControl<string | null | undefined>,
		graphical_style: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		license_model: FormControl<string | null | undefined>,
		orientation: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		quality_rank: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		uri_oembed: FormControl<string | null | undefined>,
	}
	export function CreateImageSearchItemFormGroup() {
		return new FormGroup<ImageSearchItemFormProperties>({
			alternative_ids: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			artist: new FormControl<string | null | undefined>(undefined),
			asset_family: new FormControl<string | null | undefined>(undefined),
			call_for_image: new FormControl<boolean | null | undefined>(undefined),
			caption: new FormControl<string | null | undefined>(undefined),
			collection_code: new FormControl<string | null | undefined>(undefined),
			collection_id: new FormControl<number | null | undefined>(undefined),
			collection_name: new FormControl<string | null | undefined>(undefined),
			color_type: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			date_camera_shot: new FormControl<Date | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			download_product: new FormControl<string | null | undefined>(undefined),
			graphical_style: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			license_model: new FormControl<string | null | undefined>(undefined),
			orientation: new FormControl<string | null | undefined>(undefined),
			quality_rank: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri_oembed: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageSearchItemSearchResults {
		images?: Array<ImageSearchItem>;
		related_searches?: Array<RelatedSearch>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
	}
	export interface ImageSearchItemSearchResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateImageSearchItemSearchResultsFormGroup() {
		return new FormGroup<ImageSearchItemSearchResultsFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ImageTechniquesFilterType { realtime = 'realtime', time_lapse = 'time_lapse', slow_motion = 'slow_motion', color = 'color', black_and_white = 'black_and_white', animation = 'animation', selective_focus = 'selective_focus' }

	export interface ImagesDetailResults {
		images?: any;
		images_not_found?: Array<string>;
	}
	export interface ImagesDetailResultsFormProperties {
		images: FormControl<any | null | undefined>,
	}
	export function CreateImagesDetailResultsFormGroup() {
		return new FormGroup<ImagesDetailResultsFormProperties>({
			images: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum ImagesFieldValues { accessrestriction = 'accessrestriction', allowed_use = 'allowed_use', alternative_ids = 'alternative_ids', artist = 'artist', asset_family = 'asset_family', call_for_image = 'call_for_image', caption = 'caption', collection_code = 'collection_code', collection_id = 'collection_id', collection_name = 'collection_name', color_type = 'color_type', comp = 'comp', copyright = 'copyright', date_camera_shot = 'date_camera_shot', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', download_product = 'download_product', download_sizes = 'download_sizes', editorial_segments = 'editorial_segments', editorial_source = 'editorial_source', entity_details = 'entity_details', event_ids = 'event_ids', graphical_style = 'graphical_style', id = 'id', istock_collection = 'istock_collection', keywords = 'keywords', largest_downloads = 'largest_downloads', license_model = 'license_model', max_dimensions = 'max_dimensions', orientation = 'orientation', people = 'people', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', summary_set = 'summary_set', thumb = 'thumb', title = 'title', uri_oembed = 'uri_oembed' }

	export enum LicenseModelImageRequest { rightsmanaged = 'rightsmanaged', royaltyfree = 'royaltyfree' }

	export enum LicenseModelVideoRequest { rightsready = 'rightsready', royaltyfree = 'royaltyfree' }

	export enum LogLevel { Trace = 'Trace', Debug = 'Debug', Information = 'Information', Warning = 'Warning', Error = 'Error', Critical = 'Critical', None = 'None' }

	export interface MemcachedLogEntry {
		ExceptionMessage?: string | null;
		LogLevel?: LogLevel | null;
		Message?: string | null;
		Time?: Date | null;
	}
	export interface MemcachedLogEntryFormProperties {
		ExceptionMessage: FormControl<string | null | undefined>,
		LogLevel: FormControl<LogLevel | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Time: FormControl<Date | null | undefined>,
	}
	export function CreateMemcachedLogEntryFormGroup() {
		return new FormGroup<MemcachedLogEntryFormProperties>({
			ExceptionMessage: new FormControl<string | null | undefined>(undefined),
			LogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum NumberOfPeopleFilterType { none = 'none', one = 'one', two = 'two', group = 'group' }

	export interface OrderDetail {
		assets?: Array<AssetIdFromOrder>;
		end_client?: string | null;
		id?: string | null;
		invoice_number?: string | null;
		notes?: OrderNotes;
		order_date?: Date | null;
	}
	export interface OrderDetailFormProperties {
		end_client: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		invoice_number: FormControl<string | null | undefined>,
		order_date: FormControl<Date | null | undefined>,
	}
	export function CreateOrderDetailFormGroup() {
		return new FormGroup<OrderDetailFormProperties>({
			end_client: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			invoice_number: new FormControl<string | null | undefined>(undefined),
			order_date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OrderNotes {
		licensee_name?: string | null;
		ordered_by?: string | null;
		project_title?: string | null;
		purchase_order_number?: string | null;
	}
	export interface OrderNotesFormProperties {
		licensee_name: FormControl<string | null | undefined>,
		ordered_by: FormControl<string | null | undefined>,
		project_title: FormControl<string | null | undefined>,
		purchase_order_number: FormControl<string | null | undefined>,
	}
	export function CreateOrderNotesFormGroup() {
		return new FormGroup<OrderNotesFormProperties>({
			licensee_name: new FormControl<string | null | undefined>(undefined),
			ordered_by: new FormControl<string | null | undefined>(undefined),
			project_title: new FormControl<string | null | undefined>(undefined),
			purchase_order_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OverageDetails {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit?: number | null;
		overages_reached?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		remaining?: number | null;
	}
	export interface OverageDetailsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit: FormControl<number | null | undefined>,
		overages_reached: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		remaining: FormControl<number | null | undefined>,
	}
	export function CreateOverageDetailsFormGroup() {
		return new FormGroup<OverageDetailsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			overages_reached: new FormControl<boolean | null | undefined>(undefined),
			remaining: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PremiumAccessDownloadData {
		download_notes?: string | null;
		project_code?: string | null;
	}
	export interface PremiumAccessDownloadDataFormProperties {
		download_notes: FormControl<string | null | undefined>,
		project_code: FormControl<string | null | undefined>,
	}
	export function CreatePremiumAccessDownloadDataFormGroup() {
		return new FormGroup<PremiumAccessDownloadDataFormProperties>({
			download_notes: new FormControl<string | null | undefined>(undefined),
			project_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreviousAssetPurchase {
		asset_id?: string | null;
		asset_type?: string | null;
		date_purchased?: Date | null;
		download_uri?: string | null;
		file_size_in_bytes?: string | null;
		license_model?: string | null;
		order_id?: string | null;
		purchased_by?: string | null;
		size_name?: string | null;
		thumb_uri?: string | null;
	}
	export interface PreviousAssetPurchaseFormProperties {
		asset_id: FormControl<string | null | undefined>,
		asset_type: FormControl<string | null | undefined>,
		date_purchased: FormControl<Date | null | undefined>,
		download_uri: FormControl<string | null | undefined>,
		file_size_in_bytes: FormControl<string | null | undefined>,
		license_model: FormControl<string | null | undefined>,
		order_id: FormControl<string | null | undefined>,
		purchased_by: FormControl<string | null | undefined>,
		size_name: FormControl<string | null | undefined>,
		thumb_uri: FormControl<string | null | undefined>,
	}
	export function CreatePreviousAssetPurchaseFormGroup() {
		return new FormGroup<PreviousAssetPurchaseFormProperties>({
			asset_id: new FormControl<string | null | undefined>(undefined),
			asset_type: new FormControl<string | null | undefined>(undefined),
			date_purchased: new FormControl<Date | null | undefined>(undefined),
			download_uri: new FormControl<string | null | undefined>(undefined),
			file_size_in_bytes: new FormControl<string | null | undefined>(undefined),
			license_model: new FormControl<string | null | undefined>(undefined),
			order_id: new FormControl<string | null | undefined>(undefined),
			purchased_by: new FormControl<string | null | undefined>(undefined),
			size_name: new FormControl<string | null | undefined>(undefined),
			thumb_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreviousAssetPurchases {
		previous_purchases?: Array<PreviousAssetPurchase>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
	}
	export interface PreviousAssetPurchasesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreatePreviousAssetPurchasesFormGroup() {
		return new FormGroup<PreviousAssetPurchasesFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PreviousPurchase {
		date_purchased?: Date | null;
		image_id?: string | null;
		license_model?: string | null;
		order_id?: string | null;
		thumb_uri?: string | null;
	}
	export interface PreviousPurchaseFormProperties {
		date_purchased: FormControl<Date | null | undefined>,
		image_id: FormControl<string | null | undefined>,
		license_model: FormControl<string | null | undefined>,
		order_id: FormControl<string | null | undefined>,
		thumb_uri: FormControl<string | null | undefined>,
	}
	export function CreatePreviousPurchaseFormGroup() {
		return new FormGroup<PreviousPurchaseFormProperties>({
			date_purchased: new FormControl<Date | null | undefined>(undefined),
			image_id: new FormControl<string | null | undefined>(undefined),
			license_model: new FormControl<string | null | undefined>(undefined),
			order_id: new FormControl<string | null | undefined>(undefined),
			thumb_uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreviousPurchases {
		previous_purchases?: Array<PreviousPurchase>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
	}
	export interface PreviousPurchasesFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreatePreviousPurchasesFormGroup() {
		return new FormGroup<PreviousPurchasesFormProperties>({
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Product {
		agreement_name?: string | null;
		application_website?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		credits_remaining?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		download_limit?: number | null;
		download_limit_duration?: string | null;
		download_limit_reset_utc_date?: Date | null;
		download_requirements?: DownloadRequirements;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		downloads_remaining?: number | null;
		expiration_utc_date?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		imagepack_resolution?: string | null;
		name?: string | null;
		overage?: OverageDetails;
		status?: ProductStatus | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		team_credits?: number | null;
		type?: ProductType | null;
	}
	export interface ProductFormProperties {
		agreement_name: FormControl<string | null | undefined>,
		application_website: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		credits_remaining: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		download_limit: FormControl<number | null | undefined>,
		download_limit_duration: FormControl<string | null | undefined>,
		download_limit_reset_utc_date: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		downloads_remaining: FormControl<number | null | undefined>,
		expiration_utc_date: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		imagepack_resolution: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<ProductStatus | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		team_credits: FormControl<number | null | undefined>,
		type: FormControl<ProductType | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			agreement_name: new FormControl<string | null | undefined>(undefined),
			application_website: new FormControl<string | null | undefined>(undefined),
			credits_remaining: new FormControl<number | null | undefined>(undefined),
			download_limit: new FormControl<number | null | undefined>(undefined),
			download_limit_duration: new FormControl<string | null | undefined>(undefined),
			download_limit_reset_utc_date: new FormControl<Date | null | undefined>(undefined),
			downloads_remaining: new FormControl<number | null | undefined>(undefined),
			expiration_utc_date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			imagepack_resolution: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ProductStatus | null | undefined>(undefined),
			team_credits: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<ProductType | null | undefined>(undefined),
		});

	}

	export enum ProductStatus { active = 'active', inactive = 'inactive' }

	export enum ProductType { easyaccess = 'easyaccess', editorialsubscription = 'editorialsubscription', imagepack = 'imagepack', premiumaccess = 'premiumaccess', royaltyfreesubscription = 'royaltyfreesubscription', creditpack = 'creditpack' }

	export enum ProductFieldValues { download_requirements = 'download_requirements' }

	export enum ProductStatusRequest { all = 'all', active = 'active', inactive = 'inactive' }

	export enum ProductTypeForDownloads { easyaccess = 'easyaccess', editorialsubscription = 'editorialsubscription', imagepack = 'imagepack', premiumaccess = 'premiumaccess', royaltyfreesubscription = 'royaltyfreesubscription', creditpack = 'creditpack' }

	export enum ProductTypeResponse { easyaccess = 'easyaccess', editorialsubscription = 'editorialsubscription', imagepack = 'imagepack', premiumaccess = 'premiumaccess', royaltyfreesubscription = 'royaltyfreesubscription', creditpack = 'creditpack' }

	export interface ProductsResult {
		products?: Array<Product>;
	}
	export interface ProductsResultFormProperties {
	}
	export function CreateProductsResultFormGroup() {
		return new FormGroup<ProductsResultFormProperties>({
		});

	}

	export enum ReleaseStatus { release_not_important = 'release_not_important', fully_released = 'fully_released' }

	export interface SearchByImageResourceResults {
		auto_corrections?: AutoCorrections;
		facets?: SearchFacetsResponse;
		image_fingerprint?: string | null;
		images?: any;
		related_searches?: Array<RelatedSearch>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count?: number | null;
	}
	export interface SearchByImageResourceResultsFormProperties {
		image_fingerprint: FormControl<string | null | undefined>,
		images: FormControl<any | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		result_count: FormControl<number | null | undefined>,
	}
	export function CreateSearchByImageResourceResultsFormGroup() {
		return new FormGroup<SearchByImageResourceResultsFormProperties>({
			image_fingerprint: new FormControl<string | null | undefined>(undefined),
			images: new FormControl<any | null | undefined>(undefined),
			result_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SearchFileType { eps = 'eps', jpg = 'jpg' }

	export interface SelfResult {
		email?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface SelfResultFormProperties {
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSelfResultFormGroup() {
		return new FormGroup<SelfResultFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SortOrder { best_match = 'best_match', most_popular = 'most_popular', newest = 'newest', oldest = 'oldest', random = 'random' }

	export enum TeeShirtSize { x_small = 'x_small', small = 'small', medium = 'medium', large = 'large', x_large = 'x_large', xx_large = 'xx_large', vector = 'vector' }

	export interface TerritoryRestriction {
		country_code?: string | null;
		description?: string | null;
		type?: string | null;
	}
	export interface TerritoryRestrictionFormProperties {
		country_code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTerritoryRestrictionFormGroup() {
		return new FormGroup<TerritoryRestrictionFormProperties>({
			country_code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoAspectRatioFilterType { '16:9' = '16:9', '9:16' = '9:16', '3:4' = '3:4', '4:3' = '4:3', '4:5' = '4:5', '2:1' = '2:1', '17:9' = '17:9', '9:17' = '9:17' }

	export enum VideoDetailFieldValues { id = 'id', allowed_use = 'allowed_use', artist = 'artist', asset_family = 'asset_family', call_for_image = 'call_for_image', caption = 'caption', city = 'city', clip_length = 'clip_length', collection_code = 'collection_code', collection_id = 'collection_id', collection_name = 'collection_name', color_type = 'color_type', comp = 'comp', copyright = 'copyright', country = 'country', date_created = 'date_created', date_submitted = 'date_submitted', detail_set = 'detail_set', display_set = 'display_set', download_sizes = 'download_sizes', download_product = 'download_product', downloads = 'downloads', editorial_segments = 'editorial_segments', entity_details = 'entity_details', era = 'era', event_ids = 'event_ids', istock_collection = 'istock_collection', istock_licenses = 'istock_licenses', key_frames = 'key_frames', keywords = 'keywords', license_model = 'license_model', mastered_to = 'mastered_to', object_name = 'object_name', orientation = 'orientation', originally_shot_on = 'originally_shot_on', preview = 'preview', product_types = 'product_types', quality_rank = 'quality_rank', referral_destinations = 'referral_destinations', shot_speed = 'shot_speed', source = 'source', state_province = 'state_province', summary_set = 'summary_set', thumb = 'thumb', title = 'title' }

	export enum VideoFormatsRequest { sd = 'sd', hd = 'hd', '4k' = '4k', hd_web = 'hd_web' }

	export enum VideoFrameRates { _23_98 = '23.98', _24 = '24', _25 = '25', _29_97 = '29.97', _30 = '30', _50 = '50', _59_94 = '59.94', _60 = '60' }

	export enum VideoOrientationRequest { horizontal = 'horizontal', vertical = 'vertical' }

	export enum ViewpointsFilterType { lockdown = 'lockdown', panning = 'panning', tracking_shot = 'tracking_shot', aerial_view = 'aerial_view', high_angle_view = 'high_angle_view', low_angle_view = 'low_angle_view', tilt = 'tilt', point_of_view = 'point_of_view' }


	/** Specifies the id, usage Quantity, and date of when an asset was used. */
	export interface Asset_usage {

		/** Specifies the Id of the asset that was used. */
		asset_id?: string | null;

		/**
		 * Specifies the number of times the asset was used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Identifies the date the asset was used, in ISO 8601 format (e.g., YYYY-MM-DD), time is not needed. */
		usage_date?: Date | null;
	}

	/** Specifies the id, usage Quantity, and date of when an asset was used. */
	export interface Asset_usageFormProperties {

		/** Specifies the Id of the asset that was used. */
		asset_id: FormControl<string | null | undefined>,

		/**
		 * Specifies the number of times the asset was used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Identifies the date the asset was used, in ISO 8601 format (e.g., YYYY-MM-DD), time is not needed. */
		usage_date: FormControl<Date | null | undefined>,
	}
	export function CreateAsset_usageFormGroup() {
		return new FormGroup<Asset_usageFormProperties>({
			asset_id: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			usage_date: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Specifies the request information for the Batch Usages endpoint. */
	export interface Report_usage_batch_request {

		/** Identifies the list of asset id, usage count and date of usage combinations to record. */
		asset_usages?: Array<Asset_usage>;
	}

	/** Specifies the request information for the Batch Usages endpoint. */
	export interface Report_usage_batch_requestFormProperties {
	}
	export function CreateReport_usage_batch_requestFormGroup() {
		return new FormGroup<Report_usage_batch_requestFormProperties>({
		});

	}


	/** Specifies the response from the Batch Usages endpoint. */
	export interface Report_usage_batch_response {

		/** Identifies a list of asset ids submitted that did not match known Getty asset ids. */
		invalid_assets?: Array<string>;

		/**
		 * Specifies the number of asset usage records that were successfully recorded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_asset_usages_processed?: number | null;
	}

	/** Specifies the response from the Batch Usages endpoint. */
	export interface Report_usage_batch_responseFormProperties {

		/**
		 * Specifies the number of asset usage records that were successfully recorded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_asset_usages_processed: FormControl<number | null | undefined>,
	}
	export function CreateReport_usage_batch_responseFormGroup() {
		return new FormGroup<Report_usage_batch_responseFormProperties>({
			total_asset_usages_processed: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v3/affiliates/search/images
		 * @param {string} phrase Search images using a search phrase.
		 * @param {AffiliateSearchStyle} style Filter based on graphical style of the image.
		 * @return {AffiliateImageSearchResponse} Success
		 */
		V3AffiliatesSearchImagesGetByPhraseAndStyle(phrase: string | null | undefined, style: AffiliateSearchStyle | null | undefined, headersHandler?: () => HttpHeaders): Observable<AffiliateImageSearchResponse> {
			return this.http.get<AffiliateImageSearchResponse>(this.baseUri + 'v3/affiliates/search/images?phrase=' + (phrase == null ? '' : encodeURIComponent(phrase)) + '&style=' + style, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get v3/affiliates/search/videos
		 * @return {AffiliateVideoSearchResponse} Success
		 */
		V3AffiliatesSearchVideosGetByPhrase(phrase: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AffiliateVideoSearchResponse> {
			return this.http.get<AffiliateVideoSearchResponse>(this.baseUri + 'v3/affiliates/search/videos?phrase=' + (phrase == null ? '' : encodeURIComponent(phrase)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for images by a photographer
		 * Get v3/artists/images
		 * @param {string} artist_name Name of artist for desired images
		 * @param {Array<ArtistsImageSearchFieldValues>} fields Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
		 * @param {number} page Identifies page to return. Default page is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default page_size is 10, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		V3ArtistsImagesGetByArtist_nameAndFieldsAndPageAndPage_size(artist_name: string | null | undefined, fields: Array<ArtistsImageSearchFieldValues> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/artists/images?artist_name=' + (artist_name == null ? '' : encodeURIComponent(artist_name)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for videos by a photographer
		 * Get v3/artists/videos
		 * @param {string} artist_name Name of artist for desired images
		 * @param {Array<ArtistsVideoSearchFieldValues>} fields Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
		 * @param {number} page Identifies page to return. Default page is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default page_size is 10, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		V3ArtistsVideosGetByArtist_nameAndFieldsAndPageAndPage_size(artist_name: string | null | undefined, fields: Array<ArtistsVideoSearchFieldValues> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/artists/videos?artist_name=' + (artist_name == null ? '' : encodeURIComponent(artist_name)) + '&' + fields?.map(z => `fields=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get asset change notifications.
		 * # Asset Changes
		 * Get notifications about new, updated or deleted assets for a specific channel.
		 * ##  Quickstart
		 * You'll need an API key and an access token to use this resource.
		 * Maximum batch size is 2200.
		 * Change-sets must be confirmed before a new batch of notifications can be retrieved from this endpoint. Use the DELETE asset-changes/change-sets/{change-set-id} endpoint to confirm reciept of these notifications.
		 * Values returned for asset_type include Image, Film, and null. Values returned for asset_lifecycle include New, Update, and Delete.
		 * Delete notifications may be provided for asset ids that have not previously been received as New or Update notifications. Delete notifications may return null for the asset_type.
		 * If there are no notifications in the channel an empty response body will be returned.
		 * Notifications older than 60 days will be removed from partner channels.
		 * Put v3/asset-changes/change-sets
		 * @param {number} channel_id Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} batch_size Specifies the number of assets to return. The default is 2200; maximum is 2200.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {AssetChanges} Success - Channel contains unconfirmed asset change notifications
		 */
		V3Asset_changesChange_setsPutByChannel_idAndBatch_size(channel_id: number | null | undefined, batch_size: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<AssetChanges> {
			return this.http.put<AssetChanges>(this.baseUri + 'v3/asset-changes/change-sets?channel_id=' + channel_id + '&batch_size=' + batch_size, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Confirm asset change notifications.
		 * # Delete Asset Changes
		 * Confirm asset changes acknowledges receipt of asset changes (from the PUT asset-changes endpoint).
		 * ##  Quickstart
		 * You'll need an API key and an access token to use this resource.
		 * Use the change_set_id from the PUT asset-changes/change-sets endpoint to confirm receipt of notifications.
		 * Delete v3/asset-changes/change-sets/{change_set_id}
		 * @param {string} change_set_id Specify the change-set-id associated with a transaction resource whose receipt you want to confirm.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} Success
		 */
		V3Asset_changesChange_sets_change_set_idDelete(change_set_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/asset-changes/change-sets/{change_set_id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of asset change notification channels.
		 * # Get Partner Channels
		 * Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
		 * ##  Quickstart
		 * You'll need an API key and an access token to use this resource.
		 * Partners who have a channel that has been removed should contact their sales representative to be set up again.
		 * Get v3/asset-changes/channels
		 * @return {Array<Channel>} Success
		 */
		V3Asset_changesChannelsGet(headersHandler?: () => HttpHeaders): Observable<Array<Channel>> {
			return this.http.get<Array<Channel>>(this.baseUri + 'v3/asset-changes/channels', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Endpoint for acquiring extended licenses with iStock credits for an asset.
		 * Post v3/asset-licensing/{assetId}
		 * @param {string} assetId Getty Images assetId - examples 520621493, 112301284
		 * @param {AcquireAssetLicensesRequest} requestBody Structure that specifies an array of LicenseTypes (multiseat, unlimited, resale, indemnification) to acquire,
		 *             and whether or not to use Team Credits. Authenticated User must have access to Team Credits if UseTeamCredits is set to "true".
		 * @return {AssetLicensingResponse} Success
		 */
		V3Asset_licensing_assetIdPost(assetId: string, requestBody: AcquireAssetLicensesRequest, headersHandler?: () => HttpHeaders): Observable<AssetLicensingResponse> {
			return this.http.post<AssetLicensingResponse>(this.baseUri + 'v3/asset-licensing/' + (assetId == null ? '' : encodeURIComponent(assetId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get v3/asset-management/assets/send-events
		 * @param {Date} last_offset Specifies a date/time (with timezone information) for continuing retrieval of events.
		 * Events occuring _after_ the `last_offset` value provided will be returned.
		 * @param {number} event_count Specifies the number of events to return. Default is 50, maximum value is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetSendEventsResponse} Success
		 */
		V3Asset_managementAssetsSend_eventsGetByLast_offsetAndEvent_count(last_offset: Date | null | undefined, event_count: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetSendEventsResponse> {
			return this.http.get<GetSendEventsResponse>(this.baseUri + 'v3/asset-management/assets/send-events?last_offset=' + last_offset?.toISOString() + '&event_count=' + event_count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all boards that the user participates in
		 * Get v3/boards
		 * @param {number} page Request results starting at a page number (default is 1).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {BoardRelationship} board_relationship Search for boards the user owns or has been invited to as an editor.
		 * @param {BoardSortOrder} sort_order Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.
		 * @param {number} pageSize Request number of boards to return in each page. (default is 30).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BoardList} Success
		 */
		V3BoardsGetByPageAndBoard_relationshipAndSort_orderAndPageSize(page: number | null | undefined, board_relationship: BoardRelationship | null | undefined, sort_order: BoardSortOrder | null | undefined, pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BoardList> {
			return this.http.get<BoardList>(this.baseUri + 'v3/boards?page=' + page + '&board_relationship=' + board_relationship + '&sort_order=' + sort_order + '&pageSize=' + pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new board
		 * Post v3/boards
		 * @param {BoardInfo} requestBody Specify a name and description of the board to create (name is required).
		 * @return {void} 
		 */
		V3BoardsPost(requestBody: BoardInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/boards', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a board
		 * Delete v3/boards/{board_id}
		 * @param {string} board_id Specify the board to delete.
		 * @return {void} Success
		 */
		V3Boards_board_idDelete(board_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get assets and metadata for a specific board
		 * Get v3/boards/{board_id}
		 * @param {string} board_id Retrieve details for a specific board.
		 * @return {BoardDetail} Success
		 */
		V3Boards_board_idGet(board_id: string, headersHandler?: () => HttpHeaders): Observable<BoardDetail> {
			return this.http.get<BoardDetail>(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a board
		 * Put v3/boards/{board_id}
		 * @param {string} board_id Specify the board to update.
		 * @param {BoardInfo} requestBody Specify a new name and description for the board (name is required).
		 * @return {void} Success
		 */
		V3Boards_board_idPut(board_id: string, requestBody: BoardInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove assets from a board
		 * Delete v3/boards/{board_id}/assets
		 * @param {string} board_id Specify the board to remove assets from.
		 * @param {Array<string>} asset_ids List the assets to be removed from the board.
		 * @return {void} Success
		 */
		V3Boards_board_idAssetsDeleteByAsset_ids(board_id: string, asset_ids: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)) + '/assets&' + asset_ids?.map(z => `asset_ids=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add assets to a board
		 * Put v3/boards/{board_id}/assets
		 * @param {string} board_id Specify the board to add assets to.
		 * @param {Array<BoardAsset>} requestBody List assets to add to the board.
		 * @return {void} 
		 */
		V3Boards_board_idAssetsPut(board_id: string, requestBody: Array<BoardAsset>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)) + '/assets', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an asset from a board
		 * Delete v3/boards/{board_id}/assets/{asset_id}
		 * @param {string} board_id Specify the board to remove an asset from.
		 * @param {string} asset_id Specify the asset to remove from the board.
		 * @return {void} Success
		 */
		V3Boards_board_idAssets_asset_idDelete(board_id: string, asset_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)) + '/assets/' + (asset_id == null ? '' : encodeURIComponent(asset_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add an asset to a board
		 * Put v3/boards/{board_id}/assets/{asset_id}
		 * @param {string} board_id Specify the board to add an asset to.
		 * @param {string} asset_id Specify the asset to add to the board. If it is already in the board's asset collection, no action is taken.
		 * @return {void} 
		 */
		V3Boards_board_idAssets_asset_idPut(board_id: string, asset_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)) + '/assets/' + (asset_id == null ? '' : encodeURIComponent(asset_id)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get comments from a board
		 * Get v3/boards/{board_id}/comments
		 * @param {string} board_id Specify the board to retrieve comments from.
		 * @return {CommentsList} Success
		 */
		V3Boards_board_idCommentsGet(board_id: string, headersHandler?: () => HttpHeaders): Observable<CommentsList> {
			return this.http.get<CommentsList>(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)) + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a comment to a board
		 * Post v3/boards/{board_id}/comments
		 * @param {string} board_id Specify the board to add a comment to.
		 * @param {CommentRequest} requestBody Comment to be added to the board.
		 * @return {void} 
		 */
		V3Boards_board_idCommentsPost(board_id: string, requestBody: CommentRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)) + '/comments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a comment from a board
		 * Delete v3/boards/{board_id}/comments/{comment_id}
		 * @param {string} board_id Specify the board containing the comment to delete.
		 * @param {string} comment_id Specify the comment to delete.
		 * @return {void} Success
		 */
		V3Boards_board_idComments_comment_idDelete(board_id: string, comment_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/boards/' + (board_id == null ? '' : encodeURIComponent(board_id)) + '/comments/' + (comment_id == null ? '' : encodeURIComponent(comment_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets collections applicable for the customer.
		 * Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).
		 * You'll need an API key and access token to use this resource.
		 * Get v3/collections
		 * @return {CollectionsList} OK
		 */
		V3CollectionsGet(headersHandler?: () => HttpHeaders): Observable<CollectionsList> {
			return this.http.get<CollectionsList>(this.baseUri + 'v3/collections', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets countries codes and names.
		 * Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.
		 * You'll need an API key and access token to use this resource.
		 * Get v3/countries
		 * @return {CountriesList} OK
		 */
		V3CountriesGet(headersHandler?: () => HttpHeaders): Observable<CountriesList> {
			return this.http.get<CountriesList>(this.baseUri + 'v3/countries', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns information about the current user.
		 * Returns the first, middle and last name of the authenticated user.
		 * You'll need an API key and access token to use this resource.
		 * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
		 * Get v3/customers/current
		 * @return {CustomerInfoResponse} OK
		 */
		V3CustomersCurrentGet(headersHandler?: () => HttpHeaders): Observable<CustomerInfoResponse> {
			return this.http.get<CustomerInfoResponse>(this.baseUri + 'v3/customers/current', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns information about a customer's downloaded assets.
		 * Returns information about a customer's previously downloaded assets.
		 * You'll need an API key and access token to use this resource.
		 * This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use,
		 * you need to also include an authorization token in the header of your request.
		 * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
		 * Get v3/downloads
		 * @param {Date} date_from If specified, selects assets downloaded on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD). 
		 * Any hour, minute, second values in the request are not used, unless useTimePart parameter is included.
		 * Date/times in the response are UTC. Default is 30 days prior to date_to
		 * @param {Date} date_to If specified, selects assets downloaded on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)
		 * Any hour, minute, second values in the request are not used, unless useTimePart parameter is included.
		 * Date/times in the response are UTC. Default is current date or 30 days after specified start date, whichever one is earlier.
		 * @param {boolean} use_time If specified, time values provided with date_to or date_from will be used. Time values should be appended to the date value in ISO 8601 format
		 * i.e.: 2019-09-19T19:30:37 or 2019-09-19 19:30:37.  Time zone can be specified as optional.
		 * Default value is false
		 * @param {number} page Identifies page to return. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ProductType} product_type Specifies product type to be included in the previous download results. Product types easyaccess, editorialsubscription, imagepack, and premiumaccess are for GettyImages API keys. Product types royaltyfreesubscription and creditpack are for iStock API keys. To get previous iStockPhoto credit downloads, creditpack must be selected.
		 * @param {boolean} company_downloads If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.
		 * @return {GetDownloadsResponse} OK
		 */
		V3DownloadsGetByDate_fromAndDate_toAndUse_timeAndPageAndPage_sizeAndProduct_typeAndCompany_downloads(date_from: Date | null | undefined, date_to: Date | null | undefined, use_time: boolean | null | undefined, page: number | null | undefined, page_size: number | null | undefined, product_type: ProductType | null | undefined, company_downloads: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetDownloadsResponse> {
			return this.http.get<GetDownloadsResponse>(this.baseUri + 'v3/downloads?date_from=' + date_from?.toISOString() + '&date_to=' + date_to?.toISOString() + '&use_time=' + use_time + '&page=' + page + '&page_size=' + page_size + '&product_type=' + product_type + '&company_downloads=' + company_downloads, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Download an image
		 * Use this endpoint to generate download URLs and related data for images you are authorized to download.
		 * Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
		 * The download limit for a given download period is covered in your product agreement established with Getty Images.
		 * You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
		 * ## Auto Downloads
		 * The `auto_download` request query parameter specifies whether to automatically download the image.
		 * If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
		 * Client Request:
		 * ```
		 * https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
		 * ```
		 * Server Response:
		 * Your client code should follow redirect (3xx) status codes returned from the URI in the response Location header. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).
		 * ```
		 * HTTP/1.1 303 See Other
		 * Location: https://delivery.gettyimages.com/...
		 * ```
		 * If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image.
		 * Client Request:
		 * ```
		 * https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
		 * ```
		 * Server Response:
		 * ```
		 * HTTP/1.1 200 OK
		 * {
		 * "uri": "https://delivery.gettyimages.com/..."
		 * }
		 * ```
		 * ## Downloading Via the Returned URI
		 * Your client code should follow redirect (3xx) status codes returned from the URI in the response. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).
		 * The URI returned by this call should be considered opaque and the format could change at any time.
		 * In order to get the filename, length or file type, the response headers must be inspected. An example
		 * response follows:
		 * ```
		 * content-length: 33959979
		 * content-type: image/jpeg
		 * content-disposition: attachment; filename=GettyImages-1167612765.jpg
		 * ```
		 * The `content-disposition` header must be parsed to get a usable filename.
		 * ## Download URI expiration
		 * Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
		 * Post v3/downloads/images/{id}
		 * @param {string} id <remarks>
		 *                     Id of image to download.
		 *                 </remarks>
		 * @param {boolean} auto_download <remarks>
		 *                     Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a
		 *                     Location header set to the location of the image.
		 *                     If false is specified, the download URI will be returned in the response message. Default is true.
		 *                 </remarks>
		 * @param {DownloadFileType} file_type <remarks>
		 *                     File Type expressed with three character file extension.
		 *                 </remarks>
		 * @param {string} height <remarks>
		 *                     Specifies the pixel height of the particular image to download.
		 *                     Available heights can be found in the images/{ids} response for the specific image.
		 *                     If left blank, it will return the largest available size.
		 *                 </remarks>
		 * @param {number} product_id <remarks>
		 *                     Identifier of the instance for the selected product offering type.
		 *                 </remarks>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ProductType} product_type <remarks>
		 *                     Product types easyaccess, editorialsubscription, imagepack, and premiumaccess are for GettyImages API keys. Product types royaltyfreesubscription and creditpack are for iStock API keys. Default product type for iStock API keys is creditpack.
		 *                 </remarks>
		 * @param {boolean} use_team_credits Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.
		 * @param {PremiumAccessDownloadData} requestBody <remarks>
		 *                     Additional information required from specific customers when downloading. 
		 *                     Only users who have been set up with a project code by Getty Images Sales need to use this field.
		 *                 </remarks>
		 * @return {void} OK
		 */
		V3DownloadsImages_idPostByAuto_downloadAndFile_typeAndHeightAndProduct_idAndProduct_typeAndUse_team_credits(id: string, auto_download: boolean | null | undefined, file_type: DownloadFileType | null | undefined, height: string | null | undefined, product_id: number | null | undefined, product_type: ProductType | null | undefined, use_team_credits: boolean | null | undefined, requestBody: PremiumAccessDownloadData, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/downloads/images/' + (id == null ? '' : encodeURIComponent(id)) + '&auto_download=' + auto_download + '&file_type=' + file_type + '&height=' + (height == null ? '' : encodeURIComponent(height)) + '&product_id=' + product_id + '&product_type=' + product_type + '&use_team_credits=' + use_team_credits, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Download a video
		 * Use this endpoint to generate download URLs and related data for videos you are authorized to download.
		 * Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
		 * The download limit for a given download period is covered in your product agreement established with Getty Images.
		 * You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
		 * ## Auto Downloads
		 * The `auto_download` request query parameter specifies whether to automatically download the video.
		 * If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
		 * Client Request:
		 * ```
		 * https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
		 * ```
		 * Server Response:
		 * Your client code should follow redirect (3xx) status codes returned from the URI in the response Location header. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).
		 * ```
		 * HTTP/1.1 303 See Other
		 * Location: https://delivery.gettyimages.com/...
		 * ```
		 * If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video.
		 * Client Request:
		 * ```
		 * https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
		 * ```
		 * Server Response:
		 * ```
		 * HTTP/1.1 200 OK
		 * {
		 * "uri": "https://delivery.gettyimages.com/..."
		 * }
		 * ```
		 * ## Downloading Via the Returned URI
		 * Your client code should follow redirect (3xx) status codes returned from the URI in the response. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).
		 * The URI returned by this call should be considered opaque and the format could change at any time.
		 * In order to get the filename, length or file type, the response headers must be inspected. An example
		 * response follows:
		 * ```
		 * content-length: 283925783
		 * content-type: video/quicktime
		 * content-disposition: attachment; filename=GettyImages-690773579.mov
		 * ```
		 * The `content-disposition` header must be parsed to get a usable filename.
		 * ## Download URI expiration
		 * Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
		 * Post v3/downloads/videos/{id}
		 * @param {string} id <remarks>
		 *                     Id of video to download.
		 *                 </remarks>
		 * @param {boolean} auto_download <remarks>
		 *                     Specifies whether to auto-download the video. If true is specified, a 303 SeeOther status is returned with a
		 *                     Location header set to the location of the video.
		 *                     If false is specified, the download URI will be returned in the response message. Default is false.
		 *                 </remarks>
		 * @param {string} size Specifies the size to be downloaded.
		 * @param {number} product_id <remarks>
		 *                     Identifier of the instance for the selected product offering type.
		 *                 </remarks>
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ProductType} product_type <remarks>
		 *                     Product types easyaccess, editorialsubscription, imagepack, and premiumaccess are for GettyImages API keys. Product types royaltyfreesubscription and creditpack are for iStock API keys. Default product type for iStock API keys is creditpack.
		 *                 </remarks>
		 * @param {boolean} use_team_credits Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.
		 * @param {PremiumAccessDownloadData} requestBody <remarks>
		 *                     Additional information required from specific customers when downloading. 
		 *                     Only users who have been set up with a project code by Getty Images Sales need to use this field.
		 *                 </remarks>
		 * @return {void} OK
		 */
		V3DownloadsVideos_idPostByAuto_downloadAndSizeAndProduct_idAndProduct_typeAndUse_team_credits(id: string, auto_download: boolean | null | undefined, size: string | null | undefined, product_id: number | null | undefined, product_type: ProductType | null | undefined, use_team_credits: boolean | null | undefined, requestBody: PremiumAccessDownloadData, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/downloads/videos/' + (id == null ? '' : encodeURIComponent(id)) + '&auto_download=' + auto_download + '&size=' + (size == null ? '' : encodeURIComponent(size)) + '&product_id=' + product_id + '&product_type=' + product_type + '&use_team_credits=' + use_team_credits, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata for multiple events
		 * This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
		 * videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with
		 * an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content
		 * produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image)
		 * will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as
		 * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
		 * You'll need an API key and access token to use this resource.
		 * Get v3/events
		 * @param {Array<number>} ids A comma separated list of event ids.
		 * @param {Array<EventDetailFieldValues>} fields A comma separated list of fields to return in the response.
		 * @return {void} OK
		 */
		V3EventsGetByIdsAndFields(ids: Array<number> | null | undefined, fields: Array<EventDetailFieldValues> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/events?' + ids?.map(z => `ids=${z}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata for a single event
		 * This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment
		 * photographers and videographers cover editorially relevant events occurring around the world.
		 * All images or video clips produced in association with an event, are assigned the same EventID.
		 * EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images
		 * brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be
		 * consistently assigned an EventID. The Event framework may also be used to group similar content, such as
		 * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
		 * You'll need an API key and access token to use this resource.
		 * Get v3/events/{id}
		 * @param {number} id An event id.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<EventDetailFieldValues>} fields A comma separated list of fields to return in the response.
		 * @return {void} OK
		 */
		V3Events_idGetByFields(id: number, fields: Array<EventDetailFieldValues> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/events/' + id + '?' + fields?.map(z => `fields=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata for multiple images by supplying multiple image ids
		 * This endpoint returns the detailed image metadata for all specified images.
		 * You'll need an API key and access token to use this resource.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
		 * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "artist",
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "license_model",
		 * "max_dimensions",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
		 * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "artist_title",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "city",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "color_type",
		 * "copyright",
		 * "country",
		 * "credit_line",
		 * "date_created",
		 * "date_submitted",
		 * "download_sizes",
		 * "editorial_segments",
		 * "event_ids",
		 * "graphical_style",
		 * "license_model",
		 * "max_dimensions",
		 * "orientation",
		 * "product_types",
		 * "quality_rank",
		 * "referral_destinations",
		 * "state_province",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
		 * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image
		 * in your result set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "images":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * ## Request Usage Considerations
		 * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
		 * Get v3/images
		 * @param {Array<string>} ids Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.
		 * @param {Array<ImageDetailFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.
		 * @return {ImagesDetailResults} OK
		 */
		V3ImagesGetByIdsAndFields(ids: Array<string> | null | undefined, fields: Array<ImageDetailFieldValues> | null | undefined, headersHandler?: () => HttpHeaders): Observable<ImagesDetailResults> {
			return this.http.get<ImagesDetailResults>(this.baseUri + 'v3/images?' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get metadata for a single image by supplying one image id
		 * This endpoint returns the detailed image metadata for a specified image.
		 * You'll need an API key and access token to use this resource.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that
		 * are often used to build search response results. The following fields are provided for every image in your
		 * result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "artist",
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "license_model",
		 * "max_dimensions",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are
		 * often used to build a detailed view of images. The following fields are provided for every image in your
		 * result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "artist_title",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "city",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "color_type",
		 * "copyright",
		 * "country",
		 * "credit_line",
		 * "date_created",
		 * "date_submitted",
		 * "download_sizes",
		 * "editorial_segments",
		 * "event_ids",
		 * "graphical_style",
		 * "license_model",
		 * "max_dimensions",
		 * "orientation",
		 * "product_types",
		 * "quality_rank",
		 * "referral_destinations",
		 * "state_province",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
		 * resolution files that are most frequently used to build a UI displaying search results. The following fields are provided
		 * for every image in your result set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "images":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * ## Request Usage Considerations
		 * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
		 * "name": "string",
		 * "uri": "string"
		 * Get v3/images/{id}
		 * @param {string} id An image id. For more than one image please use the /v3/images endpoint.
		 * @param {Array<ImageDetailFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.
		 * @return {ImagesDetailResults} OK
		 */
		V3Images_idGetByFields(id: string, fields: Array<ImageDetailFieldValues> | null | undefined, headersHandler?: () => HttpHeaders): Observable<ImagesDetailResults> {
			return this.http.get<ImagesDetailResults>(this.baseUri + 'v3/images/' + (id == null ? '' : encodeURIComponent(id)) + '&' + fields?.map(z => `fields=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns information about a customer's download history for a specific asset
		 * Get v3/images/{id}/downloadhistory
		 * @param {string} id An image id.
		 * @param {boolean} company_downloads If specified, returns the list of previously downloaded images for all users in your company.
		 *             Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.
		 * @return {AssetDownloadHistoryResults} OK
		 */
		V3Images_idDownloadhistoryGetByCompany_downloads(id: string, company_downloads: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<AssetDownloadHistoryResults> {
			return this.http.get<AssetDownloadHistoryResults>(this.baseUri + 'v3/images/' + (id == null ? '' : encodeURIComponent(id)) + '/downloadhistory&company_downloads=' + company_downloads, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve creative images from the same series
		 * This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
		 * You'll need an API key and access token to use this resource.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
		 * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "thumb"
		 * }
		 * ]
		 * "license_model",
		 * "max_dimensions",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
		 * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "editorial_segments",
		 * "event_ids",
		 * "graphical_style",
		 * "license_model",
		 * "max_dimensions",
		 * "orientation",
		 * "product_types",
		 * "quality_rank",
		 * "referral_destinations",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
		 * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
		 * set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "images":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * Get v3/images/{id}/same-series
		 * @param {string} id Identifies an existing image
		 * @param {Array<ImagesFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.
		 * @param {number} page Identifies page to return. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ImageSearchItemSearchResults} OK
		 */
		V3Images_idSame_seriesGetByFieldsAndPageAndPage_size(id: string, fields: Array<ImagesFieldValues> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ImageSearchItemSearchResults> {
			return this.http.get<ImageSearchItemSearchResults>(this.baseUri + 'v3/images/' + (id == null ? '' : encodeURIComponent(id)) + '/same-series&' + fields?.map(z => `fields=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve similar images
		 * This endpoint will provide a list of images that are similar to the specified asset id.
		 * You'll need an API key and access token to use this resource.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
		 * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "thumb"
		 * }
		 * ]
		 * "license_model",
		 * "max_dimensions",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
		 * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "editorial_segments",
		 * "event_ids",
		 * "graphical_style",
		 * "license_model",
		 * "max_dimensions",
		 * "orientation",
		 * "product_types",
		 * "quality_rank",
		 * "referral_destinations",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
		 * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
		 * set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "images":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * Get v3/images/{id}/similar
		 * @param {string} id Identifies an existing image
		 * @param {Array<ImagesFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.
		 * @param {number} page Identifies page to return. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ImageSearchItemSearchResults} OK
		 */
		V3Images_idSimilarGetByFieldsAndPageAndPage_size(id: string, fields: Array<ImagesFieldValues> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ImageSearchItemSearchResults> {
			return this.http.get<ImageSearchItemSearchResults>(this.baseUri + 'v3/images/' + (id == null ? '' : encodeURIComponent(id)) + '/similar&' + fields?.map(z => `fields=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get order metadata
		 * This endpoint returns detailed order metadata for a specified order.
		 * Use of this endpoint requires configuration changes to your API key.
		 * You'll need an API key and access token to use this resource.
		 * Get v3/orders/{id}
		 * @param {number} id An order id.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {OrderDetail} OK
		 */
		V3Orders_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<OrderDetail> {
			return this.http.get<OrderDetail>(this.baseUri + 'v3/orders/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Products
		 * This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
		 * a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.
		 * You'll need an API key and access token to use this resource.
		 * Get v3/products
		 * @param {Array<ProductFieldValues>} fields Comma separated list of fields. Allows product download requirements to be returned.
		 * @return {ProductsResult} OK
		 */
		V3ProductsGetByFields(fields: Array<ProductFieldValues> | null | undefined, headersHandler?: () => HttpHeaders): Observable<ProductsResult> {
			return this.http.get<ProductsResult>(this.baseUri + 'v3/products?' + fields?.map(z => `fields=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Previously Purchased Images and Video
		 * This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication.
		 * Use of this endpoint requires configuration changes to your API key. Please contact your sales representative
		 * to learn more.
		 * You'll need an API key and access token to use this resource.
		 * Get v3/purchased-assets
		 * @param {Date} date_to If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
		 * @param {number} page Identifies page to return. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default is 75, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Date} date_from If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
		 * @param {boolean} company_purchases If specified, returns the list of previously purchased assets for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.
		 * @return {PreviousAssetPurchases} OK
		 */
		V3Purchased_assetsGetByDate_toAndPageAndPage_sizeAndDate_fromAndCompany_purchases(date_to: Date | null | undefined, page: number | null | undefined, page_size: number | null | undefined, date_from: Date | null | undefined, company_purchases: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<PreviousAssetPurchases> {
			return this.http.get<PreviousAssetPurchases>(this.baseUri + 'v3/purchased-assets?date_to=' + date_to?.toISOString() + '&page=' + page + '&page_size=' + page_size + '&date_from=' + date_from?.toISOString() + '&company_purchases=' + company_purchases, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for events
		 * Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
		 * You'll need an API key and access token to use this resource.
		 * You can show different information in the response by specifying values on the "fields" parameter (see details below).
		 * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
		 * Get v3/search/events
		 * @param {EditorialSegmentContract} editorial_segment Filters to events with a matching editorial segment.
		 * @param {Date} date_from Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.
		 * @param {Date} date_to Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.
		 * @param {Array<EventFieldValues>} fields Specifies fields to return. Default set is 'id','name','start_date'.
		 * @param {number} page Request results starting at a page number (default is 1, maximum is 50).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Request number of events to return in each page. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} phrase Filters to events related to this phrase
		 * @param {EventSearchSortOrder} sort_order Specifies the order in which to sort the results. Default is `newest`.
		 * @return {EventsSearchResult} OK
		 */
		V3SearchEventsGetByEditorial_segmentAndDate_fromAndDate_toAndFieldsAndPageAndPage_sizeAndPhraseAndSort_order(editorial_segment: EditorialSegmentContract | null | undefined, date_from: Date | null | undefined, date_to: Date | null | undefined, fields: Array<EventFieldValues> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, phrase: string | null | undefined, sort_order: EventSearchSortOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<EventsSearchResult> {
			return this.http.get<EventsSearchResult>(this.baseUri + 'v3/search/events?editorial_segment=' + editorial_segment + '&date_from=' + date_from?.toISOString() + '&date_to=' + date_to?.toISOString() + '&' + fields?.map(z => `fields=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&phrase=' + (phrase == null ? '' : encodeURIComponent(phrase)) + '&sort_order=' + sort_order, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for both creative and editorial images - *** DEPRECATED ***
		 * ## _This endpoint draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons,_ _**it is highly recommended that those endpoints are used instead of this blended endpoint.**_
		 * You'll need an API key and access token to use this resource.
		 * You can show different information in the response by specifying values on the "fields" parameter (see details below).
		 * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>
		 * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
		 * -H "Authorization: Bearer <your-token>"
		 * Search requests without a phrase parameter are not supported and may not always work.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "license_model",
		 * "max_dimensions",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images.
		 * The following fields are provided for every image in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "editorial_segments",
		 * "event_ids",
		 * "graphical_style",
		 * "license_model",
		 * "max_dimensions",
		 * "orientation",
		 * "product_types",
		 * "quality_rank",
		 * "referral_destinations",
		 * "title"
		 * ]
		 * ]
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most
		 * frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**
		 * in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "images":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * ## Request Usage Considerations
		 * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
		 * Get v3/search/images
		 * @param {Array<AgeOfPeopleFilterType>} age_of_people Filter based on the age of individuals in an image.
		 * @param {string} artists Search for images by specific artists (free-text, comma-separated list of artists).
		 * @param {Array<string>} collection_codes Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
		 * @param {CollectionsFilterType} collections_filter_type Provides searching based on specified collection(s). The default is Include
		 * @param {string} color Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.
		 * @param {Array<CompositionsFilterType>} compositions Filter based on image composition.
		 * @param {string} download_product Filters based on which product the asset will download against.
		 *                     Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.
		 *                     If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
		 *                     For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. 
		 *                     Product ID can be obtained from the GET /products response.
		 * @param {boolean} embed_content_only Restrict search results to embeddable images. The default is false.
		 * @param {Array<number>} event_ids Filter based on specific events
		 * @param {Array<EthnicityFilterType>} ethnicity Filter search results based on the ethnicity of individuals in an image.
		 * @param {boolean} exclude_nudity Excludes images containing nudity. The default is false.
		 * @param {Array<ImagesFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'.
		 * @param {Array<SearchFileType>} file_types Return only images having a specific file type.
		 * @param {Array<GraphicalStyle>} graphical_styles Filter based on graphical style of the image.
		 * @param {CollectionsFilterType} graphical_styles_filter_type Provides searching based on specified graphical style(s). The default is Include
		 * @param {boolean} include_related_searches Specifies whether or not to include related searches in the response. The default is false.
		 * @param {Array<number>} keyword_ids Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
		 * @param {TeeShirtSize} minimum_size Filter based on minimum size requested. The default is x-small
		 * @param {Array<NumberOfPeopleFilterType>} number_of_people Filter based on the number of people in the image.
		 * @param {Array<ImageOrientationRequest>} orientations Return only images with selected aspect ratios.
		 * @param {number} page Request results starting at a page number (default is 1).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Request number of images to return in each page. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} phrase Search images using a search phrase.
		 * @param {BlendedImageSortOrder} sort_order Select sort order of results.  The default is best_match
		 * @param {Array<string>} specific_people Return only images associated with specific people (using a comma-delimited list).
		 * @return {ImageSearchItemSearchResults} OK
		 */
		V3SearchImagesGetByAge_of_peopleAndArtistsAndCollection_codesAndCollections_filter_typeAndColorAndCompositionsAndDownload_productAndEmbed_content_onlyAndEvent_idsAndEthnicityAndExclude_nudityAndFieldsAndFile_typesAndGraphical_stylesAndGraphical_styles_filter_typeAndInclude_related_searchesAndKeyword_idsAndMinimum_sizeAndNumber_of_peopleAndOrientationsAndPageAndPage_sizeAndPhraseAndSort_orderAndSpecific_people(age_of_people: Array<AgeOfPeopleFilterType> | null | undefined, artists: string | null | undefined, collection_codes: Array<string> | null | undefined, collections_filter_type: CollectionsFilterType | null | undefined, color: string | null | undefined, compositions: Array<CompositionsFilterType> | null | undefined, download_product: string | null | undefined, embed_content_only: boolean | null | undefined, event_ids: Array<number> | null | undefined, ethnicity: Array<EthnicityFilterType> | null | undefined, exclude_nudity: boolean | null | undefined, fields: Array<ImagesFieldValues> | null | undefined, file_types: Array<SearchFileType> | null | undefined, graphical_styles: Array<GraphicalStyle> | null | undefined, graphical_styles_filter_type: CollectionsFilterType | null | undefined, include_related_searches: boolean | null | undefined, keyword_ids: Array<number> | null | undefined, minimum_size: TeeShirtSize | null | undefined, number_of_people: Array<NumberOfPeopleFilterType> | null | undefined, orientations: Array<ImageOrientationRequest> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, phrase: string | null | undefined, sort_order: BlendedImageSortOrder | null | undefined, specific_people: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<ImageSearchItemSearchResults> {
			return this.http.get<ImageSearchItemSearchResults>(this.baseUri + 'v3/search/images?' + age_of_people?.map(z => `age_of_people=${z}`).join('&') + '&artists=' + (artists == null ? '' : encodeURIComponent(artists)) + '&' + collection_codes?.map(z => `collection_codes=${encodeURIComponent(z)}`).join('&') + '&collections_filter_type=' + collections_filter_type + '&color=' + (color == null ? '' : encodeURIComponent(color)) + '&' + compositions?.map(z => `compositions=${z}`).join('&') + '&download_product=' + (download_product == null ? '' : encodeURIComponent(download_product)) + '&embed_content_only=' + embed_content_only + '&' + event_ids?.map(z => `event_ids=${z}`).join('&') + '&' + ethnicity?.map(z => `ethnicity=${z}`).join('&') + '&exclude_nudity=' + exclude_nudity + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + file_types?.map(z => `file_types=${z}`).join('&') + '&' + graphical_styles?.map(z => `graphical_styles=${z}`).join('&') + '&graphical_styles_filter_type=' + graphical_styles_filter_type + '&include_related_searches=' + include_related_searches + '&' + keyword_ids?.map(z => `keyword_ids=${z}`).join('&') + '&minimum_size=' + minimum_size + '&' + number_of_people?.map(z => `number_of_people=${z}`).join('&') + '&' + orientations?.map(z => `orientations=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&phrase=' + (phrase == null ? '' : encodeURIComponent(phrase)) + '&sort_order=' + sort_order + '&' + specific_people?.map(z => `specific_people=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for creative images only
		 * Use this endpoint to search our contemporary stock photos, illustrations and archival images.
		 * You'll need an API key and access token to use this resource.
		 * You can show different information in the response by specifying values on the "fields" parameter (see details below).
		 * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
		 * Search requests without a phrase parameter are not supported and may not always work.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to
		 * build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "license_model",
		 * "max_dimensions",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to
		 * build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "editorial_segments",
		 * "event_ids",
		 * "graphical_style",
		 * "license_model",
		 * "max_dimensions",
		 * "orientation",
		 * "product_types",
		 * "quality_rank",
		 * "referral_destinations",
		 * "title"
		 * ]
		 * ]
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
		 * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image
		 * in your result set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "images":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * Get v3/search/images/creative
		 * @param {Array<AgeOfPeopleFilterType>} age_of_people Filter based on the age of individuals in an image.
		 * @param {string} artists Search for images by specific artists (free-text, comma-separated list of artists).
		 * @param {Array<string>} collection_codes Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
		 * @param {CollectionsFilterType} collections_filter_type Use to include or exclude collections from search. The default is include
		 * @param {string} color Filter based on predominant color in an image. Use 6 character hexadecimal format (e.g., #002244).
		 * @param {Array<CompositionsFilterType>} compositions Filter based on image composition.
		 * @param {string} download_product Filters based on which product the asset will download against.
		 *                     Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.
		 *                     If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
		 *                     For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. 
		 *                     Product ID can be obtained from the GET /products response.
		 * @param {boolean} embed_content_only Restrict search results to embeddable images. The default is false.
		 * @param {Array<EthnicityFilterType>} ethnicity Filter search results based on the ethnicity of individuals in an image.
		 * @param {Array<number>} exclude_keyword_ids Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.
		 * @param {boolean} exclude_nudity Excludes images containing nudity. The default is false.
		 * @param {boolean} exclude_editorial_use_only Exclude images that are only available for editorial (non-commercial) use. Default value is false.
		 * @param {Array<CreativeImagesFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.
		 * @param {Array<SearchFileType>} file_types Return only images having a specific file type.
		 * @param {Array<GraphicalStyle>} graphical_styles Filter based on graphical style of the image.
		 * @param {CollectionsFilterType} graphical_styles_filter_type Provides searching based on specified graphical style(s). The default is include.
		 * @param {boolean} include_related_searches Specifies whether or not to include related searches in the response. The default is false.
		 * @param {Array<number>} keyword_ids Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
		 * @param {TeeShirtSize} minimum_size Filter based on minimum size requested. The default is x-small.
		 * @param {Array<NumberOfPeopleFilterType>} number_of_people Filter based on the number of people in the image.
		 * @param {Array<ImageOrientationRequest>} orientations Return only images with selected aspect ratios.
		 * @param {number} page Request results starting at a page number (default is 1).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Request number of images to return in each page. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} phrase Search images using a search phrase.
		 * @param {boolean} safe_search Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it's possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.
		 * @param {BlendedImageSortOrder} sort_order Select sort order of results.  The default is best_match
		 * @param {Array<CreateImageSearchFacetsFields>} facet_fields Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
		 *                    The include_facets parameter must be set to "true" for facets to be returned.
		 * @param {boolean} include_facets Specifies whether or not to include facets in the result set. Default is "false".
		 * @param {number} facet_max_count Specifies the maximum number of facets to return per type. Default is 300.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CreativeImageSearchResults} OK
		 */
		V3SearchImagesCreativeGetByAge_of_peopleAndArtistsAndCollection_codesAndCollections_filter_typeAndColorAndCompositionsAndDownload_productAndEmbed_content_onlyAndEthnicityAndExclude_keyword_idsAndExclude_nudityAndExclude_editorial_use_onlyAndFieldsAndFile_typesAndGraphical_stylesAndGraphical_styles_filter_typeAndInclude_related_searchesAndKeyword_idsAndMinimum_sizeAndNumber_of_peopleAndOrientationsAndPageAndPage_sizeAndPhraseAndSafe_searchAndSort_orderAndFacet_fieldsAndInclude_facetsAndFacet_max_count(age_of_people: Array<AgeOfPeopleFilterType> | null | undefined, artists: string | null | undefined, collection_codes: Array<string> | null | undefined, collections_filter_type: CollectionsFilterType | null | undefined, color: string | null | undefined, compositions: Array<CompositionsFilterType> | null | undefined, download_product: string | null | undefined, embed_content_only: boolean | null | undefined, ethnicity: Array<EthnicityFilterType> | null | undefined, exclude_keyword_ids: Array<number> | null | undefined, exclude_nudity: boolean | null | undefined, exclude_editorial_use_only: boolean | null | undefined, fields: Array<CreativeImagesFieldValues> | null | undefined, file_types: Array<SearchFileType> | null | undefined, graphical_styles: Array<GraphicalStyle> | null | undefined, graphical_styles_filter_type: CollectionsFilterType | null | undefined, include_related_searches: boolean | null | undefined, keyword_ids: Array<number> | null | undefined, minimum_size: TeeShirtSize | null | undefined, number_of_people: Array<NumberOfPeopleFilterType> | null | undefined, orientations: Array<ImageOrientationRequest> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, phrase: string | null | undefined, safe_search: boolean | null | undefined, sort_order: BlendedImageSortOrder | null | undefined, facet_fields: Array<CreateImageSearchFacetsFields> | null | undefined, include_facets: boolean | null | undefined, facet_max_count: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<CreativeImageSearchResults> {
			return this.http.get<CreativeImageSearchResults>(this.baseUri + 'v3/search/images/creative?' + age_of_people?.map(z => `age_of_people=${z}`).join('&') + '&artists=' + (artists == null ? '' : encodeURIComponent(artists)) + '&' + collection_codes?.map(z => `collection_codes=${encodeURIComponent(z)}`).join('&') + '&collections_filter_type=' + collections_filter_type + '&color=' + (color == null ? '' : encodeURIComponent(color)) + '&' + compositions?.map(z => `compositions=${z}`).join('&') + '&download_product=' + (download_product == null ? '' : encodeURIComponent(download_product)) + '&embed_content_only=' + embed_content_only + '&' + ethnicity?.map(z => `ethnicity=${z}`).join('&') + '&' + exclude_keyword_ids?.map(z => `exclude_keyword_ids=${z}`).join('&') + '&exclude_nudity=' + exclude_nudity + '&exclude_editorial_use_only=' + exclude_editorial_use_only + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + file_types?.map(z => `file_types=${z}`).join('&') + '&' + graphical_styles?.map(z => `graphical_styles=${z}`).join('&') + '&graphical_styles_filter_type=' + graphical_styles_filter_type + '&include_related_searches=' + include_related_searches + '&' + keyword_ids?.map(z => `keyword_ids=${z}`).join('&') + '&minimum_size=' + minimum_size + '&' + number_of_people?.map(z => `number_of_people=${z}`).join('&') + '&' + orientations?.map(z => `orientations=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&phrase=' + (phrase == null ? '' : encodeURIComponent(phrase)) + '&safe_search=' + safe_search + '&sort_order=' + sort_order + '&' + facet_fields?.map(z => `facet_fields=${z}`).join('&') + '&include_facets=' + include_facets + '&facet_max_count=' + facet_max_count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for creative images based on url
		 * Search for **similar creative images** by passing an `image_url` to an uploaded image OR an `asset_id` of an asset in our catalog.  All responses will have the `exclude_nudity` filter automatically applied.
		 * ## Searching by URL
		 * Before calling the search by image endpoint, an image in JPEG format must be uploaded to `https://api.gettyimages.com/v3/search/by-image/uploads/{CLIENT_IMAGE.jpg}`, where the client defines the `{CLIENT_IMAGE.jpg}` portion of the URL.
		 * For example, using cURL:
		 * ``` sh
		 * curl -i -X PUT https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg -H 'Content-Type: image/jpeg' -H 'Api-Key: API_KEY' --data-binary "@testimage.jpg"
		 * ```
		 * Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg`.
		 * - Uploaded files must be 10MB or smaller.
		 * - Uploads to the same URL will overwrite each other, so ensure that the client application is handling naming uniqueness appropriately.
		 * - Uploads expire after 24 hours.
		 * - Uploads and searches must be performed using the _same_ API Key.
		 * ## Searching by asset id
		 * When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used as the source for similar images.
		 * Get v3/search/images/creative/by-image
		 * @param {string} asset_id Specifies the Getty image id to use in the search.
		 * @param {boolean} exclude_editorial_use_only Exclude images that are only available for editorial (non-commercial) use. Default value is false.
		 * @param {Array<CreateImageSearchFacetsFields>} facet_fields Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
		 *                     The include_facets parameter must be set to "true" for facets to be returned.
		 * @param {number} facet_max_count Specifies the maximum number of facets to return per type. Default is 300.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<CreativeImagesFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.
		 * @param {string} image_url Specifies the location of the image to use in the search.
		 * @param {boolean} include_facets Specifies whether or not to include facets in the result set. Default is "false".
		 * @param {number} page Request results starting at a page number (default is 1).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Request number of images to return in each page. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} product_types Filter images to those from one of your product types. 
		 *                     Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. 
		 *                     If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
		 *                     For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. 
		 *                     Product ID can be obtained from the GET /products response.
		 * @return {SearchByImageResourceResults} Success
		 */
		V3SearchImagesCreativeBy_imageGetByAsset_idAndExclude_editorial_use_onlyAndFacet_fieldsAndFacet_max_countAndFieldsAndImage_urlAndInclude_facetsAndPageAndPage_sizeAndProduct_types(asset_id: string | null | undefined, exclude_editorial_use_only: boolean | null | undefined, facet_fields: Array<CreateImageSearchFacetsFields> | null | undefined, facet_max_count: number | null | undefined, fields: Array<CreativeImagesFieldValues> | null | undefined, image_url: string | null | undefined, include_facets: boolean | null | undefined, page: number | null | undefined, page_size: number | null | undefined, product_types: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<SearchByImageResourceResults> {
			return this.http.get<SearchByImageResourceResults>(this.baseUri + 'v3/search/images/creative/by-image?asset_id=' + (asset_id == null ? '' : encodeURIComponent(asset_id)) + '&exclude_editorial_use_only=' + exclude_editorial_use_only + '&' + facet_fields?.map(z => `facet_fields=${z}`).join('&') + '&facet_max_count=' + facet_max_count + '&' + fields?.map(z => `fields=${z}`).join('&') + '&image_url=' + (image_url == null ? '' : encodeURIComponent(image_url)) + '&include_facets=' + include_facets + '&page=' + page + '&page_size=' + page_size + '&' + product_types?.map(z => `product_types=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for editorial images only
		 * Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.
		 * You'll need an API key and access token to use this resource.
		 * You can show different information in the response by specifying values on the "fields" parameter (see details below).
		 * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
		 * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
		 * -H "Authorization: Bearer <your-token>"
		 * Search requests without a phrase parameter are not supported and may not always work.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "license_model",
		 * "max_dimensions",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "images":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "editorial_segments",
		 * "event_ids",
		 * "graphical_style",
		 * "license_model",
		 * "max_dimensions",
		 * "orientation",
		 * "product_types",
		 * "quality_rank",
		 * "referral_destinations",
		 * "title"
		 * ]
		 * ]
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "images":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * Get v3/search/images/editorial
		 * @param {Array<AgeOfPeopleFilterType>} age_of_people Filter based on the age of individuals in an image.
		 * @param {string} artists Search for images by specific artists (free-text, comma-separated list of artists).
		 * @param {Array<string>} collection_codes Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.
		 * @param {CollectionsFilterType} collections_filter_type Use to include or exclude collections from search. The default is include
		 * @param {Array<CompositionsFilterType>} compositions Filter based on image composition.
		 * @param {Date} date_from Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).
		 * @param {Date} date_to Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).
		 * @param {string} download_product Filters based on which product the asset will download against.
		 *                     Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.
		 *                     If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
		 *                     For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. 
		 *                     Product ID can be obtained from the GET /products response.
		 * @param {Array<EditorialSegmentContract>} editorial_segments Return only events with a matching editorial segment.
		 * @param {boolean} embed_content_only Restrict search results to embeddable images. The default is false.
		 * @param {Array<EthnicityFilterType>} ethnicity Filter search results based on the ethnicity of individuals in an image.
		 * @param {Array<number>} event_ids Filter based on specific events
		 * @param {Array<number>} exclude_keyword_ids Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.
		 * @param {Array<EditorialImagesFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.
		 * @param {Array<SearchFileType>} file_types Return only images having a specific file type.
		 * @param {Array<EditorialGraphicalStyle>} graphical_styles Filter based on graphical style of the image.
		 * @param {CollectionsFilterType} graphical_styles_filter_type Provides searching based on specified graphical style(s). The default is include.
		 * @param {boolean} include_related_searches Specifies whether or not to include related searches in the response. The default is false.
		 * @param {Array<number>} keyword_ids Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
		 * @param {TeeShirtSize} minimum_size Filter based on minimum size requested. The default is x-small.
		 * @param {Array<NumberOfPeopleFilterType>} number_of_people Filter based on the number of people in the image.
		 * @param {Array<ImageOrientationRequest>} orientations Return only images with selected aspect ratios.
		 * @param {number} page Request results starting at a page number (default is 1).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Request number of images to return in each page. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} phrase Search images using a search phrase.
		 * @param {SortOrder} sort_order Select sort order of results.  The default is best_match
		 * @param {Array<string>} specific_people Return only images associated with specific people (using a comma-delimited list).
		 * @param {number} minimum_quality_rank Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<EditorialImageSearchFacetsFields>} facet_fields Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
		 *                    The include_facets parameter must be set to "true" for facets to be returned.
		 * @param {boolean} include_facets Specifies whether or not to include facets in the result set. Default is "false".
		 * @param {number} facet_max_count Specifies the maximum number of facets to return per type. Default is 300.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {EditorialImageSearchResults} OK
		 */
		V3SearchImagesEditorialGetByAge_of_peopleAndArtistsAndCollection_codesAndCollections_filter_typeAndCompositionsAndDate_fromAndDate_toAndDownload_productAndEditorial_segmentsAndEmbed_content_onlyAndEthnicityAndEvent_idsAndExclude_keyword_idsAndFieldsAndFile_typesAndGraphical_stylesAndGraphical_styles_filter_typeAndInclude_related_searchesAndKeyword_idsAndMinimum_sizeAndNumber_of_peopleAndOrientationsAndPageAndPage_sizeAndPhraseAndSort_orderAndSpecific_peopleAndMinimum_quality_rankAndFacet_fieldsAndInclude_facetsAndFacet_max_count(age_of_people: Array<AgeOfPeopleFilterType> | null | undefined, artists: string | null | undefined, collection_codes: Array<string> | null | undefined, collections_filter_type: CollectionsFilterType | null | undefined, compositions: Array<CompositionsFilterType> | null | undefined, date_from: Date | null | undefined, date_to: Date | null | undefined, download_product: string | null | undefined, editorial_segments: Array<EditorialSegmentContract> | null | undefined, embed_content_only: boolean | null | undefined, ethnicity: Array<EthnicityFilterType> | null | undefined, event_ids: Array<number> | null | undefined, exclude_keyword_ids: Array<number> | null | undefined, fields: Array<EditorialImagesFieldValues> | null | undefined, file_types: Array<SearchFileType> | null | undefined, graphical_styles: Array<EditorialGraphicalStyle> | null | undefined, graphical_styles_filter_type: CollectionsFilterType | null | undefined, include_related_searches: boolean | null | undefined, keyword_ids: Array<number> | null | undefined, minimum_size: TeeShirtSize | null | undefined, number_of_people: Array<NumberOfPeopleFilterType> | null | undefined, orientations: Array<ImageOrientationRequest> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, phrase: string | null | undefined, sort_order: SortOrder | null | undefined, specific_people: Array<string> | null | undefined, minimum_quality_rank: number | null | undefined, facet_fields: Array<EditorialImageSearchFacetsFields> | null | undefined, include_facets: boolean | null | undefined, facet_max_count: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<EditorialImageSearchResults> {
			return this.http.get<EditorialImageSearchResults>(this.baseUri + 'v3/search/images/editorial?' + age_of_people?.map(z => `age_of_people=${z}`).join('&') + '&artists=' + (artists == null ? '' : encodeURIComponent(artists)) + '&' + collection_codes?.map(z => `collection_codes=${encodeURIComponent(z)}`).join('&') + '&collections_filter_type=' + collections_filter_type + '&' + compositions?.map(z => `compositions=${z}`).join('&') + '&date_from=' + date_from?.toISOString() + '&date_to=' + date_to?.toISOString() + '&download_product=' + (download_product == null ? '' : encodeURIComponent(download_product)) + '&' + editorial_segments?.map(z => `editorial_segments=${z}`).join('&') + '&embed_content_only=' + embed_content_only + '&' + ethnicity?.map(z => `ethnicity=${z}`).join('&') + '&' + event_ids?.map(z => `event_ids=${z}`).join('&') + '&' + exclude_keyword_ids?.map(z => `exclude_keyword_ids=${z}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&') + '&' + file_types?.map(z => `file_types=${z}`).join('&') + '&' + graphical_styles?.map(z => `graphical_styles=${z}`).join('&') + '&graphical_styles_filter_type=' + graphical_styles_filter_type + '&include_related_searches=' + include_related_searches + '&' + keyword_ids?.map(z => `keyword_ids=${z}`).join('&') + '&minimum_size=' + minimum_size + '&' + number_of_people?.map(z => `number_of_people=${z}`).join('&') + '&' + orientations?.map(z => `orientations=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&phrase=' + (phrase == null ? '' : encodeURIComponent(phrase)) + '&sort_order=' + sort_order + '&' + specific_people?.map(z => `specific_people=${encodeURIComponent(z)}`).join('&') + '&minimum_quality_rank=' + minimum_quality_rank + '&' + facet_fields?.map(z => `facet_fields=${z}`).join('&') + '&include_facets=' + include_facets + '&facet_max_count=' + facet_max_count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for creative videos
		 * Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.
		 * You'll need an API key and access token to use this resource.
		 * You can show different information in the response by specifying values on the "fields" parameter (see details below).
		 * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without
		 * being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only
		 * assets that you have a license to use, you need to also include an authorization token in the header of your request.
		 * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
		 * Search requests without a phrase parameter are not supported and may not always work.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search
		 * response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "license_model",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a
		 * detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "clip_length",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "color_type",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "era",
		 * "license_model",
		 * "mastered_to",
		 * "originally_shot_on",
		 * "product_types",
		 * "quality_rank",
		 * "shot_speed",
		 * "source",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files
		 * that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result
		 * set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * Get v3/search/videos/creative
		 * @param {Array<AgeOfPeopleFilterType>} age_of_people Provides filtering according to the age of individuals in a video.
		 * @param {string} artists Search for videos by specific artists (free-text, comma-separated list of artists).
		 * @param {Array<VideoAspectRatioFilterType>} aspect_ratios Search for videos by specific aspect ratios.
		 * @param {Array<string>} collection_codes Provides filtering by collection code.
		 * @param {CollectionsFilterType} collections_filter_type Use to include or exclude collections from search. The default is include
		 * @param {Array<CompositionsFilterType>} compositions Filter based on video composition.
		 * @param {string} download_product Filters based on which product the asset will download against.
		 *                     Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.
		 *                     If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
		 *                     For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. 
		 *                     Product ID can be obtained from the GET /products response.
		 * @param {boolean} exclude_nudity Excludes videos containing nudity. The default is false.
		 * @param {boolean} exclude_editorial_use_only Exclude videos that are only available for editorial (non-commercial) use. Default value is false.
		 * @param {Array<number>} exclude_keyword_ids Return only videos not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also do not contain the requested keyword(s) are returned.
		 * @param {Array<CreativeVideosFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.
		 * @param {VideoFormatsRequest} format_available Filters according to the digital video format available on a film asset.
		 * @param {Array<VideoFrameRates>} frame_rates Provides filtering by video frame rate (frames/second).
		 * @param {Array<ImageTechniquesFilterType>} image_techniques Filter based on image technique.
		 * @param {boolean} include_related_searches Specifies whether or not to include related searches in the response. The default is false.
		 * @param {Array<number>} keyword_ids Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.
		 * @param {Array<LicenseModelVideoRequest>} license_models Specifies the video licensing model(s).
		 * @param {Array<VideoOrientationRequest>} orientations Return only videos with selected orientations.
		 * @param {number} min_clip_length Provides filtering by minimum length of video clip, in seconds
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_clip_length Provides filtering by maximum length of video, in seconds
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Identifies page to return. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} phrase Free-text search query.
		 * @param {boolean} safe_search Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it's possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.
		 * @param {BlendedImageSortOrder} sort_order Select sort order of results.  The default is best_match
		 * @param {ReleaseStatus} release_status Allows filtering by type of model release.
		 * @param {Array<CreateVideoSearchFacetsFields>} facet_fields Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
		 *                    The include_facets parameter must be set to "true" for facets to be returned.
		 * @param {number} facet_max_count Specifies the maximum number of facets to return per type. Default is 300.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} include_facets Specifies whether or not to include facets in the result set. Default is "false".
		 * @param {Array<ViewpointsFilterType>} viewpoints Filter based on viewpoint.
		 * @return {CreativeVideoSearchResults} OK
		 */
		V3SearchVideosCreativeGetByAge_of_peopleAndArtistsAndAspect_ratiosAndCollection_codesAndCollections_filter_typeAndCompositionsAndDownload_productAndExclude_nudityAndExclude_editorial_use_onlyAndExclude_keyword_idsAndFieldsAndFormat_availableAndFrame_ratesAndImage_techniquesAndInclude_related_searchesAndKeyword_idsAndLicense_modelsAndOrientationsAndMin_clip_lengthAndMax_clip_lengthAndPageAndPage_sizeAndPhraseAndSafe_searchAndSort_orderAndRelease_statusAndFacet_fieldsAndFacet_max_countAndInclude_facetsAndViewpoints(age_of_people: Array<AgeOfPeopleFilterType> | null | undefined, artists: string | null | undefined, aspect_ratios: Array<VideoAspectRatioFilterType> | null | undefined, collection_codes: Array<string> | null | undefined, collections_filter_type: CollectionsFilterType | null | undefined, compositions: Array<CompositionsFilterType> | null | undefined, download_product: string | null | undefined, exclude_nudity: boolean | null | undefined, exclude_editorial_use_only: boolean | null | undefined, exclude_keyword_ids: Array<number> | null | undefined, fields: Array<CreativeVideosFieldValues> | null | undefined, format_available: VideoFormatsRequest | null | undefined, frame_rates: Array<VideoFrameRates> | null | undefined, image_techniques: Array<ImageTechniquesFilterType> | null | undefined, include_related_searches: boolean | null | undefined, keyword_ids: Array<number> | null | undefined, license_models: Array<LicenseModelVideoRequest> | null | undefined, orientations: Array<VideoOrientationRequest> | null | undefined, min_clip_length: number | null | undefined, max_clip_length: number | null | undefined, page: number | null | undefined, page_size: number | null | undefined, phrase: string | null | undefined, safe_search: boolean | null | undefined, sort_order: BlendedImageSortOrder | null | undefined, release_status: ReleaseStatus | null | undefined, facet_fields: Array<CreateVideoSearchFacetsFields> | null | undefined, facet_max_count: number | null | undefined, include_facets: boolean | null | undefined, viewpoints: Array<ViewpointsFilterType> | null | undefined, headersHandler?: () => HttpHeaders): Observable<CreativeVideoSearchResults> {
			return this.http.get<CreativeVideoSearchResults>(this.baseUri + 'v3/search/videos/creative?' + age_of_people?.map(z => `age_of_people=${z}`).join('&') + '&artists=' + (artists == null ? '' : encodeURIComponent(artists)) + '&' + aspect_ratios?.map(z => `aspect_ratios=${z}`).join('&') + '&' + collection_codes?.map(z => `collection_codes=${encodeURIComponent(z)}`).join('&') + '&collections_filter_type=' + collections_filter_type + '&' + compositions?.map(z => `compositions=${z}`).join('&') + '&download_product=' + (download_product == null ? '' : encodeURIComponent(download_product)) + '&exclude_nudity=' + exclude_nudity + '&exclude_editorial_use_only=' + exclude_editorial_use_only + '&' + exclude_keyword_ids?.map(z => `exclude_keyword_ids=${z}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&') + '&format_available=' + format_available + '&' + frame_rates?.map(z => `frame_rates=${z}`).join('&') + '&' + image_techniques?.map(z => `image_techniques=${z}`).join('&') + '&include_related_searches=' + include_related_searches + '&' + keyword_ids?.map(z => `keyword_ids=${z}`).join('&') + '&' + license_models?.map(z => `license_models=${z}`).join('&') + '&' + orientations?.map(z => `orientations=${z}`).join('&') + '&min_clip_length=' + min_clip_length + '&max_clip_length=' + max_clip_length + '&page=' + page + '&page_size=' + page_size + '&phrase=' + (phrase == null ? '' : encodeURIComponent(phrase)) + '&safe_search=' + safe_search + '&sort_order=' + sort_order + '&release_status=' + release_status + '&' + facet_fields?.map(z => `facet_fields=${z}`).join('&') + '&facet_max_count=' + facet_max_count + '&include_facets=' + include_facets + '&' + viewpoints?.map(z => `viewpoints=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for creative videos based on url
		 * Search for **similar creative videos** by passing an `image_url` to an uploaded image/frame grab from a video OR an `asset_id` of an asset in our catalog.  All responses will have the `exclude_nudity` filter automatically applied.
		 * ## Searching by URL
		 * Before calling the search by image endpoint, an image or frame grab in JPEG format must be uploaded to `https://api.gettyimages.com/v3/search/by-image/uploads/{CLIENT_IMAGE.jpg}`, where the client defines the `{CLIENT_IMAGE.jpg}` portion of the URL.
		 * For example, using cURL:
		 * ``` sh
		 * curl -i -X PUT https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg -H 'Content-Type: image/jpeg' -H 'Api-Key: API_KEY' --data-binary "@testimage.jpg"
		 * ```
		 * Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg`.
		 * - Uploaded files must be 10MB or smaller
		 * - Uploads to the same URL will overwrite each other, so ensure that the client application is handling naming uniqueness appropriately.
		 * - Uploads expire after 24 hours.
		 * - Uploads and searches must be performed using the _same_ API Key.
		 * ## Searching by asset id
		 * When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used as the source for similar videos.
		 * Get v3/search/videos/creative/by-image
		 * @param {string} asset_id Specifies the Getty video id to use in the search.
		 * @param {boolean} exclude_editorial_use_only Exclude videos that are only available for editorial (non-commercial) use. Default value is false.
		 * @param {Array<CreateVideoSearchFacetsFields>} facet_fields Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
		 *                     The include_facets parameter must be set to "true" for facets to be returned.
		 * @param {number} facet_max_count Specifies the maximum number of facets to return per type. Default is 300.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<CreativeVideosFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.
		 * @param {string} image_url Specifies the location of the image to use in the search.
		 * @param {boolean} include_facets Specifies whether or not to include facets in the result set. Default is "false".
		 * @param {number} page Request results starting at a page number (default is 1).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Request number of images to return in each page. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} product_types Filter images to those from one of your product types. 
		 *                     Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. 
		 *                     If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
		 *                     For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. 
		 *                     Product ID can be obtained from the GET /products response.
		 * @return {CreativeVideoSearchResults} Success
		 */
		V3SearchVideosCreativeBy_imageGetByAsset_idAndExclude_editorial_use_onlyAndFacet_fieldsAndFacet_max_countAndFieldsAndImage_urlAndInclude_facetsAndPageAndPage_sizeAndProduct_types(asset_id: string | null | undefined, exclude_editorial_use_only: boolean | null | undefined, facet_fields: Array<CreateVideoSearchFacetsFields> | null | undefined, facet_max_count: number | null | undefined, fields: Array<CreativeVideosFieldValues> | null | undefined, image_url: string | null | undefined, include_facets: boolean | null | undefined, page: number | null | undefined, page_size: number | null | undefined, product_types: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<CreativeVideoSearchResults> {
			return this.http.get<CreativeVideoSearchResults>(this.baseUri + 'v3/search/videos/creative/by-image?asset_id=' + (asset_id == null ? '' : encodeURIComponent(asset_id)) + '&exclude_editorial_use_only=' + exclude_editorial_use_only + '&' + facet_fields?.map(z => `facet_fields=${z}`).join('&') + '&facet_max_count=' + facet_max_count + '&' + fields?.map(z => `fields=${z}`).join('&') + '&image_url=' + (image_url == null ? '' : encodeURIComponent(image_url)) + '&include_facets=' + include_facets + '&page=' + page + '&page_size=' + page_size + '&' + product_types?.map(z => `product_types=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for editorial videos
		 * Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.
		 * You'll need an API key and access token to use this resource.
		 * You can show different information in the response by specifying values on the "fields" parameter (see details below).
		 * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
		 * Search requests without a phrase parameter are not supported and may not always work.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "license_model",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "clip_length",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "color_type",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "era",
		 * "event_ids",
		 * "license_model",
		 * "mastered_to",
		 * "originally_shot_on",
		 * "product_types",
		 * "quality_rank",
		 * "shot_speed",
		 * "source",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * Get v3/search/videos/editorial
		 * @param {Array<AgeOfPeopleFilterType>} age_of_people Provides filtering according to the age of individuals in a video.
		 * @param {string} artists Search for videos by specific artists (free-text, comma-separated list of artists).
		 * @param {Array<VideoAspectRatioFilterType>} aspect_ratios Search for videos by specific aspect ratios.
		 * @param {Array<string>} collection_codes Provides filtering by collection code.
		 * @param {CollectionsFilterType} collections_filter_type Use to include or exclude collections from search. The default is include
		 * @param {Array<CompositionsFilterType>} compositions Filter based on video composition.
		 * @param {Date} date_from Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).
		 * @param {Date} date_to Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).
		 * @param {string} download_product Filters based on which product the asset will download against.
		 *                     Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.
		 *                     If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. 
		 *                     For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. 
		 *                     Product ID can be obtained from the GET /products response.
		 * @param {Array<EditorialVideoType>} editorial_video_types Allows filtering by types of video.
		 * @param {Array<EditorialVideosFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.
		 * @param {VideoFormatsRequest} format_available Filters according to the digital video format available on a film asset.
		 * @param {Array<VideoFrameRates>} frame_rates Provides filtering by video frame rate (frames/second).
		 * @param {Array<ImageTechniquesFilterType>} image_techniques Filter based on image technique.
		 * @param {boolean} include_related_searches Specifies whether or not to include related searches in the response. The default is false.
		 * @param {Array<number>} keyword_ids Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.
		 * @param {number} min_clip_length Provides filtering by minimum length of video clip, in seconds
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} max_clip_length Provides filtering by maximum length of video clip, in seconds
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<VideoOrientationRequest>} orientations Return only videos with selected orientations.
		 * @param {number} page Identifies page to return. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} phrase Free-text search query.
		 * @param {SortOrder} sort_order Select sort order of results.  The default is best_match
		 * @param {Array<string>} specific_people Allows filtering by specific peoples' names.
		 * @param {ReleaseStatus} release_status Allows filtering by type of model release.
		 * @param {Array<EditorialVideoSearchFacetsFields>} facet_fields Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
		 *                    The include_facets parameter must be set to "true" for facets to be returned.
		 * @param {boolean} include_facets Specifies whether or not to include facets in the result set. Default is "false".
		 * @param {number} facet_max_count Specifies the maximum number of facets to return per type. Default is 300.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<ViewpointsFilterType>} viewpoints Filter based on viewpoint.
		 * @return {EditorialVideoSearchResults} OK
		 */
		V3SearchVideosEditorialGetByAge_of_peopleAndArtistsAndAspect_ratiosAndCollection_codesAndCollections_filter_typeAndCompositionsAndDate_fromAndDate_toAndDownload_productAndEditorial_video_typesAndFieldsAndFormat_availableAndFrame_ratesAndImage_techniquesAndInclude_related_searchesAndKeyword_idsAndMin_clip_lengthAndMax_clip_lengthAndOrientationsAndPageAndPage_sizeAndPhraseAndSort_orderAndSpecific_peopleAndRelease_statusAndFacet_fieldsAndInclude_facetsAndFacet_max_countAndViewpoints(age_of_people: Array<AgeOfPeopleFilterType> | null | undefined, artists: string | null | undefined, aspect_ratios: Array<VideoAspectRatioFilterType> | null | undefined, collection_codes: Array<string> | null | undefined, collections_filter_type: CollectionsFilterType | null | undefined, compositions: Array<CompositionsFilterType> | null | undefined, date_from: Date | null | undefined, date_to: Date | null | undefined, download_product: string | null | undefined, editorial_video_types: Array<EditorialVideoType> | null | undefined, fields: Array<EditorialVideosFieldValues> | null | undefined, format_available: VideoFormatsRequest | null | undefined, frame_rates: Array<VideoFrameRates> | null | undefined, image_techniques: Array<ImageTechniquesFilterType> | null | undefined, include_related_searches: boolean | null | undefined, keyword_ids: Array<number> | null | undefined, min_clip_length: number | null | undefined, max_clip_length: number | null | undefined, orientations: Array<VideoOrientationRequest> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, phrase: string | null | undefined, sort_order: SortOrder | null | undefined, specific_people: Array<string> | null | undefined, release_status: ReleaseStatus | null | undefined, facet_fields: Array<EditorialVideoSearchFacetsFields> | null | undefined, include_facets: boolean | null | undefined, facet_max_count: number | null | undefined, viewpoints: Array<ViewpointsFilterType> | null | undefined, headersHandler?: () => HttpHeaders): Observable<EditorialVideoSearchResults> {
			return this.http.get<EditorialVideoSearchResults>(this.baseUri + 'v3/search/videos/editorial?' + age_of_people?.map(z => `age_of_people=${z}`).join('&') + '&artists=' + (artists == null ? '' : encodeURIComponent(artists)) + '&' + aspect_ratios?.map(z => `aspect_ratios=${z}`).join('&') + '&' + collection_codes?.map(z => `collection_codes=${encodeURIComponent(z)}`).join('&') + '&collections_filter_type=' + collections_filter_type + '&' + compositions?.map(z => `compositions=${z}`).join('&') + '&date_from=' + date_from?.toISOString() + '&date_to=' + date_to?.toISOString() + '&download_product=' + (download_product == null ? '' : encodeURIComponent(download_product)) + '&' + editorial_video_types?.map(z => `editorial_video_types=${z}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&') + '&format_available=' + format_available + '&' + frame_rates?.map(z => `frame_rates=${z}`).join('&') + '&' + image_techniques?.map(z => `image_techniques=${z}`).join('&') + '&include_related_searches=' + include_related_searches + '&' + keyword_ids?.map(z => `keyword_ids=${z}`).join('&') + '&min_clip_length=' + min_clip_length + '&max_clip_length=' + max_clip_length + '&' + orientations?.map(z => `orientations=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size + '&phrase=' + (phrase == null ? '' : encodeURIComponent(phrase)) + '&sort_order=' + sort_order + '&' + specific_people?.map(z => `specific_people=${encodeURIComponent(z)}`).join('&') + '&release_status=' + release_status + '&' + facet_fields?.map(z => `facet_fields=${z}`).join('&') + '&include_facets=' + include_facets + '&facet_max_count=' + facet_max_count + '&' + viewpoints?.map(z => `viewpoints=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Report usage of assets via a batch format.
		 * # Report Usage
		 * Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.
		 * ##  Quickstart
		 * You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
		 * Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.
		 * _Note_: Date of use can be in any unambiguous date format.
		 * Put v3/usage-batches/{id}
		 * @param {string} id Specifies a unique batch transaction id to identify the report.
		 * @param {Report_usage_batch_request} requestBody Specifies up to 1000 sets of asset Id, usage count, and date of use to submit usages for. 
		 *             Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. 
		 *             All dates must be on or before this date and the format should be ISO 8601 (ex: YYYY-MM-DD), time is not needed.
		 * @return {void} 
		 */
		V3Usage_batches_idPut(id: string, requestBody: Report_usage_batch_request, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v3/usage-batches/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata for multiple videos by supplying multiple video ids
		 * Use this endpoint to return detailed video metadata for all the specified video ids.
		 * You'll need an API key and access token to use this resource.
		 * You can show different information in the response by specifying values on the "fields" parameter (see details below).
		 * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "license_model",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "clip_length",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "color_type",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "download_sizes",
		 * "era",
		 * "event_ids",
		 * "license_model",
		 * "mastered_to",
		 * "originally_shot_on",
		 * "product_types",
		 * "quality_rank",
		 * "shot_speed",
		 * "source",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "videos":
		 * [
		 * {
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ],
		 * "key_frames": [
		 * {
		 * "uri": "<link>"
		 * },
		 * {
		 * "uri": "<link>"
		 * },
		 * {
		 * "uri": "<link>"
		 * },
		 * {
		 * "uri": "<link>"
		 * },
		 * {
		 * "uri": "<link>"
		 * }
		 * ]
		 * }
		 * ]
		 * }
		 * ```
		 * ## Request Usage Considerations
		 * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
		 * Get v3/videos
		 * @param {Array<string>} ids Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.
		 * @param {Array<VideoDetailFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.
		 * @return {void} OK
		 */
		V3VideosGetByIdsAndFields(ids: Array<string> | null | undefined, fields: Array<VideoDetailFieldValues> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/videos?' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + fields?.map(z => `fields=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metadata for a single video by supplying one video id
		 * Use this endpoint to return detailed video metadata for the specified video id.
		 * You'll need an API key and access token to use this resource.
		 * You can show different information in the response by specifying values on the "fields" parameter (see details below).
		 * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "license_model",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "clip_length",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "color_type",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "download_sizes",
		 * "era",
		 * "event_ids",
		 * "license_model",
		 * "mastered_to",
		 * "originally_shot_on",
		 * "product_types",
		 * "quality_rank",
		 * "shot_speed",
		 * "source",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "display_sizes": [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ],
		 * "key_frames": [
		 * {
		 * "uri": "<link>"
		 * },
		 * {
		 * "uri": "<link>"
		 * },
		 * {
		 * "uri": "<link>"
		 * },
		 * {
		 * "uri": "<link>"
		 * },
		 * {
		 * "uri": "<link>"
		 * }
		 * ]
		 * }
		 * ```
		 * ## Request Usage Considerations
		 * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
		 * Get v3/videos/{id}
		 * @param {string} id A video id. For more than one video please use the /v3/video endpoint.
		 * @param {Array<VideoDetailFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.
		 * @return {void} OK
		 */
		V3Videos_idGetByFields(id: string, fields: Array<VideoDetailFieldValues> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/videos/' + (id == null ? '' : encodeURIComponent(id)) + '&' + fields?.map(z => `fields=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a customer's download history for a specific asset
		 * Get v3/videos/{id}/downloadhistory
		 * @param {string} id A video id.
		 * @param {boolean} company_downloads If specified, returns the list of previously downloaded videos for all users in your company.
		 *             Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.
		 * @return {AssetDownloadHistoryResults} OK
		 */
		V3Videos_idDownloadhistoryGetByCompany_downloads(id: string, company_downloads: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<AssetDownloadHistoryResults> {
			return this.http.get<AssetDownloadHistoryResults>(this.baseUri + 'v3/videos/' + (id == null ? '' : encodeURIComponent(id)) + '/downloadhistory&company_downloads=' + company_downloads, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve creative videos from the same series
		 * This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
		 * You'll need an API key and access token to use this resource.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "license_model",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "clip_length",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "color_type",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "download_sizes",
		 * "era",
		 * "license_model",
		 * "mastered_to",
		 * "originally_shot_on",
		 * "product_types",
		 * "quality_rank",
		 * "shot_speed",
		 * "source",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * Get v3/videos/{id}/same-series
		 * @param {string} id Identifies an existing video
		 * @param {Array<AssociatedVideoDetailFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.
		 * @param {number} page Identifies page to return. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		V3Videos_idSame_seriesGetByFieldsAndPageAndPage_size(id: string, fields: Array<AssociatedVideoDetailFieldValues> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/videos/' + (id == null ? '' : encodeURIComponent(id)) + '/same-series&' + fields?.map(z => `fields=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve similar videos
		 * This endpoint will provide a list of videos that are similar to the specified asset id.
		 * You'll need an API key and access token to use this resource.
		 * ## Working with Fields Sets
		 * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
		 * #### Summary Fields Set
		 * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "asset_family",
		 * "caption",
		 * "collection_code",
		 * "collection_name",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "license_model",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Detail Fields Set
		 * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "allowed_use",
		 * "artist",
		 * "asset_family",
		 * "call_for_image",
		 * "caption",
		 * "clip_length",
		 * "collection_code",
		 * "collection_id",
		 * "collection_name",
		 * "color_type",
		 * "copyright",
		 * "date_created",
		 * "display_sizes":
		 * [
		 * {
		 * "name": "comp"
		 * },
		 * {
		 * "name": "preview"
		 * },
		 * {
		 * "name": "thumb"
		 * }
		 * ],
		 * "download_sizes",
		 * "era",
		 * "event_ids",
		 * "license_model",
		 * "mastered_to",
		 * "originally_shot_on",
		 * "product_types",
		 * "quality_rank",
		 * "shot_speed",
		 * "source",
		 * "title"
		 * ]
		 * }
		 * ```
		 * #### Display Fields Set
		 * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
		 * The URI provided is subject to change at any time and must be used as-is with no modification.
		 * ```
		 * {
		 * "videos":
		 * [
		 * "display_sizes":
		 * [
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "comp",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "preview",
		 * "uri": "<link>"
		 * },
		 * {
		 * "is_watermarked": <boolean>,
		 * "name": "thumb",
		 * "uri": "<link>"
		 * }
		 * ]
		 * ]
		 * }
		 * ```
		 * Get v3/videos/{id}/similar
		 * @param {string} id A video id.
		 * @param {Array<AssociatedVideoDetailFieldValues>} fields Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.
		 * @param {number} page Identifies page to return. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size Specifies page size. Default is 30, maximum page_size is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		V3Videos_idSimilarGetByFieldsAndPageAndPage_size(id: string, fields: Array<AssociatedVideoDetailFieldValues> | null | undefined, page: number | null | undefined, page_size: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/videos/' + (id == null ? '' : encodeURIComponent(id)) + '/similar&' + fields?.map(z => `fields=${z}`).join('&') + '&page=' + page + '&page_size=' + page_size, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

