import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Article {
		editionName?: string | null;
		htmlBody?: string | null;
	}
	export interface ArticleFormProperties {
		editionName: FormControl<string | null | undefined>,
		htmlBody: FormControl<string | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			editionName: new FormControl<string | null | undefined>(undefined),
			htmlBody: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Asset {
		key?: string | null;
		label?: string | null;
		length?: number | null;
	}
	export interface AssetFormProperties {
		key: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		length: FormControl<number | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Category {
		audioUri?: string | null;
		featurePostKey?: string | null;
		flickrUri?: string | null;
		isActive?: boolean | null;
		name?: string | null;
		topPostKey?: string | null;
		twitterFeedUsername?: string | null;
		youtubeUri?: string | null;
	}
	export interface CategoryFormProperties {
		audioUri: FormControl<string | null | undefined>,
		featurePostKey: FormControl<string | null | undefined>,
		flickrUri: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		topPostKey: FormControl<string | null | undefined>,
		twitterFeedUsername: FormControl<string | null | undefined>,
		youtubeUri: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			featurePostKey: new FormControl<string | null | undefined>(undefined),
			flickrUri: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topPostKey: new FormControl<string | null | undefined>(undefined),
			twitterFeedUsername: new FormControl<string | null | undefined>(undefined),
			youtubeUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contact {
		emailAddress?: string | null;
		fullName?: string | null;
		mobileNumber?: string | null;
		phoneNumber?: string | null;
	}
	export interface ContactFormProperties {
		emailAddress: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,
		mobileNumber: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataIndex {
		featurePostKey?: string | null;
		kind?: string | null;
		name?: string | null;
		topPostKey?: string | null;
	}
	export interface DataIndexFormProperties {
		featurePostKey: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		topPostKey: FormControl<string | null | undefined>,
	}
	export function CreateDataIndexFormGroup() {
		return new FormGroup<DataIndexFormProperties>({
			featurePostKey: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topPostKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataModel {
		key?: string | null;
		timestamp?: Date | null;
	}
	export interface DataModelFormProperties {
		key: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDataModelFormGroup() {
		return new FormGroup<DataModelFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Document {
		byline?: string | null;
		contacts?: Array<DocumentContact>;
		detailsHtml?: string | null;
		headline?: string | null;
		languageId?: number | null;
		pageTitle?: string | null;
		subheadline?: string | null;
	}
	export interface DocumentFormProperties {
		byline: FormControl<string | null | undefined>,
		detailsHtml: FormControl<string | null | undefined>,
		headline: FormControl<string | null | undefined>,
		languageId: FormControl<number | null | undefined>,
		pageTitle: FormControl<string | null | undefined>,
		subheadline: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			byline: new FormControl<string | null | undefined>(undefined),
			detailsHtml: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			languageId: new FormControl<number | null | undefined>(undefined),
			pageTitle: new FormControl<string | null | undefined>(undefined),
			subheadline: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentContact {
		details?: string | null;
		title?: string | null;
	}
	export interface DocumentContactFormProperties {
		details: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateDocumentContactFormGroup() {
		return new FormGroup<DocumentContactFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Edition {
		htmlBody?: string | null;
		name?: string | null;
	}
	export interface EditionFormProperties {
		htmlBody: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateEditionFormGroup() {
		return new FormGroup<EditionFormProperties>({
			htmlBody: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EditionImage {
		fileName?: string | null;
		imageBytes?: string | null;
		imageType?: string | null;
	}
	export interface EditionImageFormProperties {
		fileName: FormControl<string | null | undefined>,
		imageBytes: FormControl<string | null | undefined>,
		imageType: FormControl<string | null | undefined>,
	}
	export function CreateEditionImageFormGroup() {
		return new FormGroup<EditionImageFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			imageBytes: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FacebookPost {
		content?: string | null;
		facebookObjectId?: number | null;
		pictureUri?: string | null;
		postComments?: number | null;
		postLikes?: number | null;
		postShares?: number | null;
		poster?: string | null;
		posterLikes?: number | null;
		posterLogo?: string | null;
		posterSubtitle?: string | null;
		type?: string | null;
	}
	export interface FacebookPostFormProperties {
		content: FormControl<string | null | undefined>,
		facebookObjectId: FormControl<number | null | undefined>,
		pictureUri: FormControl<string | null | undefined>,
		postComments: FormControl<number | null | undefined>,
		postLikes: FormControl<number | null | undefined>,
		postShares: FormControl<number | null | undefined>,
		poster: FormControl<string | null | undefined>,
		posterLikes: FormControl<number | null | undefined>,
		posterLogo: FormControl<string | null | undefined>,
		posterSubtitle: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateFacebookPostFormGroup() {
		return new FormGroup<FacebookPostFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			facebookObjectId: new FormControl<number | null | undefined>(undefined),
			pictureUri: new FormControl<string | null | undefined>(undefined),
			postComments: new FormControl<number | null | undefined>(undefined),
			postLikes: new FormControl<number | null | undefined>(undefined),
			postShares: new FormControl<number | null | undefined>(undefined),
			poster: new FormControl<string | null | undefined>(undefined),
			posterLikes: new FormControl<number | null | undefined>(undefined),
			posterLogo: new FormControl<string | null | undefined>(undefined),
			posterSubtitle: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Home {
		featurePostKey?: string | null;
		liveWebcastFlashMediaManifestUrl?: string | null;
		liveWebcastM3uPlaylist?: string | null;
		name?: string | null;
		topPostKey?: string | null;
	}
	export interface HomeFormProperties {
		featurePostKey: FormControl<string | null | undefined>,
		liveWebcastFlashMediaManifestUrl: FormControl<string | null | undefined>,
		liveWebcastM3uPlaylist: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		topPostKey: FormControl<string | null | undefined>,
	}
	export function CreateHomeFormGroup() {
		return new FormGroup<HomeFormProperties>({
			featurePostKey: new FormControl<string | null | undefined>(undefined),
			liveWebcastFlashMediaManifestUrl: new FormControl<string | null | undefined>(undefined),
			liveWebcastM3uPlaylist: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topPostKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeyValuePair_2 {
		key?: string | null;
		value?: string | null;
	}
	export interface KeyValuePair_2FormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValuePair_2FormGroup() {
		return new FormGroup<KeyValuePair_2FormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Minister {
		details?: string | null;
		emailHtml?: string | null;
		headline?: string | null;
		photo?: string | null;
		post?: string | null;
		summary?: string | null;
	}
	export interface MinisterFormProperties {
		details: FormControl<string | null | undefined>,
		emailHtml: FormControl<string | null | undefined>,
		headline: FormControl<string | null | undefined>,
		photo: FormControl<string | null | undefined>,
		post: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
	}
	export function CreateMinisterFormGroup() {
		return new FormGroup<MinisterFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			emailHtml: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			photo: new FormControl<string | null | undefined>(undefined),
			post: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Ministry {
		audioUri?: string | null;
		childMinistryKey?: string | null;
		contactUser?: Contact;
		displayAdditionalName?: string | null;
		featurePostKey?: string | null;
		flickrUri?: string | null;
		isActive?: boolean | null;
		ministerName?: string | null;
		ministryUrl?: string | null;
		name?: string | null;
		newsletterLinks?: Array<ResourceLink>;
		parentMinistryKey?: string | null;
		secondContactUser?: Contact;
		serviceLinks?: Array<ResourceLink>;
		topPostKey?: string | null;
		topicLinks?: Array<ResourceLink>;
		twitterFeedUsername?: string | null;
		weekendContactNumber?: string | null;
		youtubeUri?: string | null;
	}
	export interface MinistryFormProperties {
		audioUri: FormControl<string | null | undefined>,
		childMinistryKey: FormControl<string | null | undefined>,
		displayAdditionalName: FormControl<string | null | undefined>,
		featurePostKey: FormControl<string | null | undefined>,
		flickrUri: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		ministerName: FormControl<string | null | undefined>,
		ministryUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parentMinistryKey: FormControl<string | null | undefined>,
		topPostKey: FormControl<string | null | undefined>,
		twitterFeedUsername: FormControl<string | null | undefined>,
		weekendContactNumber: FormControl<string | null | undefined>,
		youtubeUri: FormControl<string | null | undefined>,
	}
	export function CreateMinistryFormGroup() {
		return new FormGroup<MinistryFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			childMinistryKey: new FormControl<string | null | undefined>(undefined),
			displayAdditionalName: new FormControl<string | null | undefined>(undefined),
			featurePostKey: new FormControl<string | null | undefined>(undefined),
			flickrUri: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			ministerName: new FormControl<string | null | undefined>(undefined),
			ministryUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentMinistryKey: new FormControl<string | null | undefined>(undefined),
			topPostKey: new FormControl<string | null | undefined>(undefined),
			twitterFeedUsername: new FormControl<string | null | undefined>(undefined),
			weekendContactNumber: new FormControl<string | null | undefined>(undefined),
			youtubeUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceLink {
		uri?: string | null;
	}
	export interface ResourceLinkFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateResourceLinkFormGroup() {
		return new FormGroup<ResourceLinkFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Newsletter {
		description?: string | null;
		editions?: Array<KeyValuePair_2>;
		ministryName?: string | null;
		name?: string | null;
	}
	export interface NewsletterFormProperties {
		description: FormControl<string | null | undefined>,
		ministryName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateNewsletterFormGroup() {
		return new FormGroup<NewsletterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			ministryName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Post {
		assetUrl?: string | null;
		atomId?: string | null;
		azureAssets?: Array<Asset>;
		documents?: Array<Document>;
		facebookPictureUri?: string | null;
		hasMediaAssets?: boolean | null;
		isNewsOnDemand?: boolean | null;
		keywords?: string | null;
		kind?: string | null;
		leadMinistryKey?: string | null;
		location?: string | null;
		ministryKeys?: Array<string>;
		publishDate?: Date | null;
		redirectUri?: string | null;
		reference?: string | null;
		sectorKeys?: Array<string>;
		serviceKeys?: Array<string>;
		socialMediaHeadline?: string | null;
		socialMediaSummary?: string | null;
		summary?: string | null;
	}
	export interface PostFormProperties {
		assetUrl: FormControl<string | null | undefined>,
		atomId: FormControl<string | null | undefined>,
		facebookPictureUri: FormControl<string | null | undefined>,
		hasMediaAssets: FormControl<boolean | null | undefined>,
		isNewsOnDemand: FormControl<boolean | null | undefined>,
		keywords: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
		leadMinistryKey: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		publishDate: FormControl<Date | null | undefined>,
		redirectUri: FormControl<string | null | undefined>,
		reference: FormControl<string | null | undefined>,
		socialMediaHeadline: FormControl<string | null | undefined>,
		socialMediaSummary: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
	}
	export function CreatePostFormGroup() {
		return new FormGroup<PostFormProperties>({
			assetUrl: new FormControl<string | null | undefined>(undefined),
			atomId: new FormControl<string | null | undefined>(undefined),
			facebookPictureUri: new FormControl<string | null | undefined>(undefined),
			hasMediaAssets: new FormControl<boolean | null | undefined>(undefined),
			isNewsOnDemand: new FormControl<boolean | null | undefined>(undefined),
			keywords: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			leadMinistryKey: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			publishDate: new FormControl<Date | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			socialMediaHeadline: new FormControl<string | null | undefined>(undefined),
			socialMediaSummary: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sector {
		audioUri?: string | null;
		featurePostKey?: string | null;
		flickrUri?: string | null;
		isActive?: boolean | null;
		name?: string | null;
		topPostKey?: string | null;
		twitterFeedUsername?: string | null;
		youtubeUri?: string | null;
	}
	export interface SectorFormProperties {
		audioUri: FormControl<string | null | undefined>,
		featurePostKey: FormControl<string | null | undefined>,
		flickrUri: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		topPostKey: FormControl<string | null | undefined>,
		twitterFeedUsername: FormControl<string | null | undefined>,
		youtubeUri: FormControl<string | null | undefined>,
	}
	export function CreateSectorFormGroup() {
		return new FormGroup<SectorFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			featurePostKey: new FormControl<string | null | undefined>(undefined),
			flickrUri: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topPostKey: new FormControl<string | null | undefined>(undefined),
			twitterFeedUsername: new FormControl<string | null | undefined>(undefined),
			youtubeUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Service {
		audioUri?: string | null;
		featurePostKey?: string | null;
		flickrUri?: string | null;
		isActive?: boolean | null;
		name?: string | null;
		topPostKey?: string | null;
		twitterFeedUsername?: string | null;
		youtubeUri?: string | null;
	}
	export interface ServiceFormProperties {
		audioUri: FormControl<string | null | undefined>,
		featurePostKey: FormControl<string | null | undefined>,
		flickrUri: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		topPostKey: FormControl<string | null | undefined>,
		twitterFeedUsername: FormControl<string | null | undefined>,
		youtubeUri: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			featurePostKey: new FormControl<string | null | undefined>(undefined),
			flickrUri: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topPostKey: new FormControl<string | null | undefined>(undefined),
			twitterFeedUsername: new FormControl<string | null | undefined>(undefined),
			youtubeUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Slide {
		actionLabel?: string | null;
		actionUri?: string | null;
		facebookPostUri?: string | null;
		headline?: string | null;
		image?: string | null;
		imageType?: string | null;
		justify?: string | null;
		slideId?: string | null;
		summary?: string | null;
	}
	export interface SlideFormProperties {
		actionLabel: FormControl<string | null | undefined>,
		actionUri: FormControl<string | null | undefined>,
		facebookPostUri: FormControl<string | null | undefined>,
		headline: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		imageType: FormControl<string | null | undefined>,
		justify: FormControl<string | null | undefined>,
		slideId: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
	}
	export function CreateSlideFormGroup() {
		return new FormGroup<SlideFormProperties>({
			actionLabel: new FormControl<string | null | undefined>(undefined),
			actionUri: new FormControl<string | null | undefined>(undefined),
			facebookPostUri: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<string | null | undefined>(undefined),
			justify: new FormControl<string | null | undefined>(undefined),
			slideId: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag {
		audioUri?: string | null;
		featurePostKey?: string | null;
		flickrUri?: string | null;
		isActive?: boolean | null;
		name?: string | null;
		topPostKey?: string | null;
		twitterFeedUsername?: string | null;
		youtubeUri?: string | null;
	}
	export interface TagFormProperties {
		audioUri: FormControl<string | null | undefined>,
		featurePostKey: FormControl<string | null | undefined>,
		flickrUri: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		topPostKey: FormControl<string | null | undefined>,
		twitterFeedUsername: FormControl<string | null | undefined>,
		youtubeUri: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			featurePostKey: new FormControl<string | null | undefined>(undefined),
			flickrUri: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topPostKey: new FormControl<string | null | undefined>(undefined),
			twitterFeedUsername: new FormControl<string | null | undefined>(undefined),
			youtubeUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Theme {
		audioUri?: string | null;
		featurePostKey?: string | null;
		flickrUri?: string | null;
		isActive?: boolean | null;
		name?: string | null;
		topPostKey?: string | null;
		twitterFeedUsername?: string | null;
		youtubeUri?: string | null;
	}
	export interface ThemeFormProperties {
		audioUri: FormControl<string | null | undefined>,
		featurePostKey: FormControl<string | null | undefined>,
		flickrUri: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		topPostKey: FormControl<string | null | undefined>,
		twitterFeedUsername: FormControl<string | null | undefined>,
		youtubeUri: FormControl<string | null | undefined>,
	}
	export function CreateThemeFormGroup() {
		return new FormGroup<ThemeFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			featurePostKey: new FormControl<string | null | undefined>(undefined),
			flickrUri: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topPostKey: new FormControl<string | null | undefined>(undefined),
			twitterFeedUsername: new FormControl<string | null | undefined>(undefined),
			youtubeUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a Facebook post based on a Uri
		 * Get api/FacebookPosts/ByUri
		 * @param {string} api_version The requested API version
		 * @return {FacebookPost} Success
		 */
		ApiFacebookPostsByUriGetByUriAndApi_version(uri: string | null | undefined, api_version: string, headersHandler?: () => HttpHeaders): Observable<FacebookPost> {
			return this.http.get<FacebookPost>(this.baseUri + 'api/FacebookPosts/ByUri?uri=' + (uri == null ? '' : encodeURIComponent(uri)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the top level content for the home page
		 * Get api/Home
		 * @param {string} api_version The requested API version
		 * @return {Home} Success
		 */
		ApiHomeGetByApi_version(api_version: string, headersHandler?: () => HttpHeaders): Observable<Home> {
			return this.http.get<Home>(this.baseUri + 'api/Home?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all ministries
		 * Get api/Ministries
		 * @param {string} api_version The requested API version
		 * @return {Array<Ministry>} Success
		 */
		ApiMinistriesGetByApi_version(api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<Ministry>> {
			return this.http.get<Array<Ministry>>(this.baseUri + 'api/Ministries?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the Ministry associated with the ministry key
		 * Get api/Ministries/{key}
		 * @param {string} api_version The requested API version
		 * @return {Ministry} Success
		 */
		ApiMinistries_keyGetByApi_version(key: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Ministry> {
			return this.http.get<Ministry>(this.baseUri + 'api/Ministries/' + (key == null ? '' : encodeURIComponent(key)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the Minister associated with the ministry key
		 * Get api/Ministries/{key}/Minister
		 * @param {string} api_version The requested API version
		 * @return {Minister} Success
		 */
		ApiMinistries_keyMinisterGetByApi_version(key: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Minister> {
			return this.http.get<Minister>(this.baseUri + 'api/Ministries/' + (key == null ? '' : encodeURIComponent(key)) + '/Minister&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all newsletters
		 * Get api/Newsletters
		 * @param {string} api_version The requested API version
		 * @return {Array<Newsletter>} Success
		 */
		ApiNewslettersGetByApi_version(api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<Newsletter>> {
			return this.http.get<Array<Newsletter>>(this.baseUri + 'api/Newsletters?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the image object reference by of a Newsletter Edition associated with the image guid
		 * Get api/Newsletters/Images/{guid}
		 * @param {string} api_version The requested API version
		 * @return {EditionImage} Success
		 */
		ApiNewslettersImages_guidGetByApi_version(guid: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<EditionImage> {
			return this.http.get<EditionImage>(this.baseUri + 'api/Newsletters/Images/' + (guid == null ? '' : encodeURIComponent(guid)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a specific newsletter
		 * Get api/Newsletters/{newsletterKey}
		 * @param {string} api_version The requested API version
		 * @return {Newsletter} Success
		 */
		ApiNewsletters_newsletterKeyGetByApi_version(newsletterKey: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Newsletter> {
			return this.http.get<Newsletter>(this.baseUri + 'api/Newsletters/' + (newsletterKey == null ? '' : encodeURIComponent(newsletterKey)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a specific edition of a newsletter
		 * Get api/Newsletters/{newsletterKey}/Editions/{editionKey}
		 * @param {string} api_version The requested API version
		 * @return {Edition} Success
		 */
		ApiNewsletters_newsletterKeyEditions_editionKeyGetByApi_version(newsletterKey: string, editionKey: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Edition> {
			return this.http.get<Edition>(this.baseUri + 'api/Newsletters/' + (newsletterKey == null ? '' : encodeURIComponent(newsletterKey)) + '/Editions/' + (editionKey == null ? '' : encodeURIComponent(editionKey)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an article belonging to a Newsletter edition
		 * Get api/Newsletters/{newsletterKey}/Editions/{editionKey}/Articles/{articleKey}
		 * @param {string} api_version The requested API version
		 * @return {Article} Success
		 */
		ApiNewsletters_newsletterKeyEditions_editionKeyArticles_articleKeyGetByApi_version(newsletterKey: string, editionKey: string, articleKey: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Article> {
			return this.http.get<Article>(this.baseUri + 'api/Newsletters/' + (newsletterKey == null ? '' : encodeURIComponent(newsletterKey)) + '/Editions/' + (editionKey == null ? '' : encodeURIComponent(editionKey)) + '/Articles/' + (articleKey == null ? '' : encodeURIComponent(articleKey)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the posts associated with the keys in the list passed in.
		 * Get api/Posts
		 * @param {string} api_version The requested API version
		 * @return {Array<Post>} Success
		 */
		ApiPostsGetByPostKeysAndApi_version(postKeys: Array<string> | null | undefined, api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<Post>> {
			return this.http.get<Array<Post>>(this.baseUri + 'api/Posts?' + postKeys?.map(z => `postKeys=${encodeURIComponent(z)}`).join('&') + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all keys for the specified index (newsroom or category)
		 * Get api/Posts/Keys/{indexKind}/{indexKey}
		 * @param {string} indexKind home or one of categories
		 * @param {string} indexKey default or one key of the categories (ministries, sectors, services, tags, themes)
		 * @param {string} postKind One of: releases, stories, factsheets, updates or default (releases+stories+factsheets)
		 * @param {number} count number of posts to return
		 * @param {number} skip number of posts to skip
		 * @param {string} api_version The requested API version
		 * @return {Array<KeyValuePair_2>} Success
		 */
		ApiPostsKeys_indexKind_indexKeyGetByPostKindAndCountAndSkipAndApi_version(indexKind: string, indexKey: string, postKind: string | null | undefined, count: number | null | undefined, skip: number | null | undefined, api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<KeyValuePair_2>> {
			return this.http.get<Array<KeyValuePair_2>>(this.baseUri + 'api/Posts/Keys/' + (indexKind == null ? '' : encodeURIComponent(indexKind)) + '/' + (indexKey == null ? '' : encodeURIComponent(indexKey)) + '&postKind=' + (postKind == null ? '' : encodeURIComponent(postKind)) + '&count=' + count + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the post key associated with the reference.
		 * Get api/Posts/Keys/{reference}
		 * @param {string} api_version The requested API version
		 * @return {KeyValuePair_2} Success
		 */
		ApiPostsKeys_referenceGetByApi_version(reference: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<KeyValuePair_2> {
			return this.http.get<KeyValuePair_2>(this.baseUri + 'api/Posts/Keys/' + (reference == null ? '' : encodeURIComponent(reference)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the latest posts of postKind for the specified index (default or category)
		 * Get api/Posts/Latest/{indexKind}/{indexKey}
		 * @param {string} indexKind home or one of categories
		 * @param {string} indexKey default or one key of the categories (ministries, sectors, services, tags, themes)
		 * @param {string} postKind One of: releases, stories, factsheets, updates or default (releases+stories except top/feature)
		 * @param {number} count number of posts to return
		 * @param {number} skip number of posts to skip
		 * @param {string} api_version The requested API version
		 * @return {Array<Post>} Success
		 */
		ApiPostsLatest_indexKind_indexKeyGetByPostKindAndCountAndSkipAndApi_version(indexKind: string, indexKey: string, postKind: string | null | undefined, count: number | null | undefined, skip: number | null | undefined, api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<Post>> {
			return this.http.get<Array<Post>>(this.baseUri + 'api/Posts/Latest/' + (indexKind == null ? '' : encodeURIComponent(indexKind)) + '/' + (indexKey == null ? '' : encodeURIComponent(indexKey)) + '&postKind=' + (postKind == null ? '' : encodeURIComponent(postKind)) + '&count=' + count + '&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the latest Social Media post for the social media type passed in.
		 * Get api/Posts/LatestMediaUri/{mediaType}
		 * @param {string} api_version The requested API version
		 * @return {string} Success
		 */
		ApiPostsLatestMediaUri_mediaTypeGetByApi_version(mediaType: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/Posts/LatestMediaUri/' + (mediaType == null ? '' : encodeURIComponent(mediaType)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get the post associated with the key
		 * Get api/Posts/{key}
		 * @param {string} api_version The requested API version
		 * @return {Post} Success
		 */
		ApiPosts_keyGetByApi_version(key: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Post> {
			return this.http.get<Post>(this.baseUri + 'api/Posts/' + (key == null ? '' : encodeURIComponent(key)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all resource links
		 * Get api/ResourceLinks
		 * @param {string} api_version The requested API version
		 * @return {Array<ResourceLink>} Success
		 */
		ApiResourceLinksGetByApi_version(api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<ResourceLink>> {
			return this.http.get<Array<ResourceLink>>(this.baseUri + 'api/ResourceLinks?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Sectors
		 * Get api/Sectors
		 * @param {string} api_version The requested API version
		 * @return {Array<Sector>} Success
		 */
		ApiSectorsGetByApi_version(api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<Sector>> {
			return this.http.get<Array<Sector>>(this.baseUri + 'api/Sectors?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the sector associated with the key
		 * Get api/Sectors/{key}
		 * @param {string} api_version The requested API version
		 * @return {Sector} Success
		 */
		ApiSectors_keyGetByApi_version(key: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Sector> {
			return this.http.get<Sector>(this.baseUri + 'api/Sectors/' + (key == null ? '' : encodeURIComponent(key)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Services
		 * Get api/Services
		 * @param {string} api_version The requested API version
		 * @return {Array<Service>} Success
		 */
		ApiServicesGetByApi_version(api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'api/Services?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the service associated with the passed key
		 * Get api/Services/{key}
		 * @param {string} api_version The requested API version
		 * @return {Service} Success
		 */
		ApiServices_keyGetByApi_version(key: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Service> {
			return this.http.get<Service>(this.baseUri + 'api/Services/' + (key == null ? '' : encodeURIComponent(key)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Slides
		 * Get api/Slides
		 * @param {string} api_version The requested API version
		 * @return {Array<Slide>} Success
		 */
		ApiSlidesGetByApi_version(api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<Slide>> {
			return this.http.get<Array<Slide>>(this.baseUri + 'api/Slides?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the slide associated to the id
		 * Get api/Slides/{id}
		 * @param {string} api_version The requested API version
		 * @return {Slide} Success
		 */
		ApiSlides_idGetByApi_version(id: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Slide> {
			return this.http.get<Slide>(this.baseUri + 'api/Slides/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Tags
		 * Get api/Tags
		 * @param {string} api_version The requested API version
		 * @return {Array<Tag>} Success
		 */
		ApiTagsGetByApi_version(api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<Tag>> {
			return this.http.get<Array<Tag>>(this.baseUri + 'api/Tags?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the Tag associated with the key
		 * Get api/Tags/{key}
		 * @param {string} api_version The requested API version
		 * @return {Tag} Success
		 */
		ApiTags_keyGetByApi_version(key: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'api/Tags/' + (key == null ? '' : encodeURIComponent(key)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get all Themes
		 * Get api/Themes
		 * @param {string} api_version The requested API version
		 * @return {Array<Theme>} Success
		 */
		ApiThemesGetByApi_version(api_version: string, headersHandler?: () => HttpHeaders): Observable<Array<Theme>> {
			return this.http.get<Array<Theme>>(this.baseUri + 'api/Themes?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the Theme associated with the key
		 * Get api/Themes/{key}
		 * @param {string} api_version The requested API version
		 * @return {Theme} Success
		 */
		ApiThemes_keyGetByApi_version(key: string, api_version: string, headersHandler?: () => HttpHeaders): Observable<Theme> {
			return this.http.get<Theme>(this.baseUri + 'api/Themes/' + (key == null ? '' : encodeURIComponent(key)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

