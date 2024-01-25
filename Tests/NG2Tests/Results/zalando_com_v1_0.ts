import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A single article */
	export interface Article {

		/**
		 * timestamp the article was available in the Zalando webshop
		 * Required
		 */
		activationDate: Date;

		/**
		 * any additional information of the article
		 * Required
		 * Minimum items: 0
		 */
		additionalInfos: Array<string>;

		/**
		 * age group of the article belongs to
		 * Required
		 * Minimum items: 1
		 */
		ageGroups: Array<string>;

		/**
		 * article attributes
		 * Required
		 * Minimum items: 0
		 */
		attributes: Array<Article_Attribute>;

		/**
		 * will be true if at least one article unit is available
		 * Required
		 */
		available: boolean;

		/**
		 * Zalando API Brand Schema
		 * Required
		 */
		brand: Brand;

		/**
		 * category keys of the article belongs to
		 * Required
		 * Minimum items: 1
		 */
		categoryKeys: Array<string>;

		/**
		 * the main color of the article
		 * Required
		 */
		color: string;

		/**
		 * gender of the article belongs to
		 * Required
		 * Minimum items: 1
		 */
		genders: Array<string>;

		/**
		 * unique article id
		 * Required
		 */
		id: string;

		/**
		 * Zalando API Article Media Schema
		 * Required
		 */
		media: Article_Media;

		/**
		 * unique article model id
		 * Required
		 */
		modelId: string;

		/**
		 * article name
		 * Required
		 */
		name: string;

		/**
		 * collection season the article belongs to
		 * Required
		 */
		season: ArticleSeason;

		/**
		 * collection year the article belongs to. Could be either a year or 'ALL'
		 * Required
		 */
		seasonYear: string;

		/**
		 * url of the article within the Zalando webshop
		 * Required
		 */
		shopUrl: string;
		tags?: Array<string>;

		/**
		 * price of the article
		 * Required
		 * Minimum items: 1
		 */
		units: Array<Article_Unit>;
	}

	/** A single article */
	export interface ArticleFormProperties {

		/**
		 * timestamp the article was available in the Zalando webshop
		 * Required
		 */
		activationDate: FormControl<Date | null | undefined>,

		/**
		 * will be true if at least one article unit is available
		 * Required
		 */
		available: FormControl<boolean | null | undefined>,

		/**
		 * the main color of the article
		 * Required
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * unique article id
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * unique article model id
		 * Required
		 */
		modelId: FormControl<string | null | undefined>,

		/**
		 * article name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * collection season the article belongs to
		 * Required
		 */
		season: FormControl<ArticleSeason | null | undefined>,

		/**
		 * collection year the article belongs to. Could be either a year or 'ALL'
		 * Required
		 */
		seasonYear: FormControl<string | null | undefined>,

		/**
		 * url of the article within the Zalando webshop
		 * Required
		 */
		shopUrl: FormControl<string | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			activationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			available: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			color: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			season: new FormControl<ArticleSeason | null | undefined>(undefined, [Validators.required]),
			seasonYear: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ALL$|^20[0-9]{2}$')]),
			shopUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API Article Attribute Schema */
	export interface Article_Attribute {

		/**
		 * name of the article attribute
		 * Required
		 */
		name: string;

		/**
		 * value of the article attribute
		 * Required
		 * Minimum items: 1
		 */
		values: Array<string>;
	}

	/** Zalando API Article Attribute Schema */
	export interface Article_AttributeFormProperties {

		/**
		 * name of the article attribute
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateArticle_AttributeFormGroup() {
		return new FormGroup<Article_AttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API Brand Schema */
	export interface Brand {

		/** Zalando API BrandFamily Schema */
		brandFamily?: BrandFamily;

		/**
		 * The unique key for a brand
		 * Required
		 */
		key: string;

		/** The url of the large brand logo within the Zalando web shop */
		logoLargeUrl?: string | null;

		/** The url of the brand logo within the Zalando web shop */
		logoUrl?: string | null;

		/**
		 * Name of the brand
		 * Required
		 */
		name: string;

		/**
		 * The url of the brand within the Zalando web shop
		 * Required
		 */
		shopUrl: string;
	}

	/** Zalando API Brand Schema */
	export interface BrandFormProperties {

		/**
		 * The unique key for a brand
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/** The url of the large brand logo within the Zalando web shop */
		logoLargeUrl: FormControl<string | null | undefined>,

		/** The url of the brand logo within the Zalando web shop */
		logoUrl: FormControl<string | null | undefined>,

		/**
		 * Name of the brand
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The url of the brand within the Zalando web shop
		 * Required
		 */
		shopUrl: FormControl<string | null | undefined>,
	}
	export function CreateBrandFormGroup() {
		return new FormGroup<BrandFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logoLargeUrl: new FormControl<string | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shopUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API BrandFamily Schema */
	export interface BrandFamily {

		/**
		 * The unique key for a brandFamily
		 * Required
		 */
		key: string;

		/**
		 * Name of the brandFamily
		 * Required
		 */
		name: string;

		/**
		 * The url of the brandFamily within the Zalando web shop
		 * Required
		 */
		shopUrl: string;
	}

	/** Zalando API BrandFamily Schema */
	export interface BrandFamilyFormProperties {

		/**
		 * The unique key for a brandFamily
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Name of the brandFamily
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The url of the brandFamily within the Zalando web shop
		 * Required
		 */
		shopUrl: FormControl<string | null | undefined>,
	}
	export function CreateBrandFamilyFormGroup() {
		return new FormGroup<BrandFamilyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shopUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API Article Media Schema */
	export interface Article_Media {

		/**
		 * Required
		 * Minimum items: 0
		 */
		images: Array<Article_Image>;
	}

	/** Zalando API Article Media Schema */
	export interface Article_MediaFormProperties {
	}
	export function CreateArticle_MediaFormGroup() {
		return new FormGroup<Article_MediaFormProperties>({
		});

	}


	/** Zalando API Article Image Schema */
	export interface Article_Image {

		/**
		 * large HD image of the article
		 * Required
		 */
		largeHdUrl: string;

		/**
		 * large image of the article
		 * Required
		 */
		largeUrl: string;

		/**
		 * medium HD image of the article
		 * Required
		 */
		mediumHdUrl: string;

		/**
		 * medium image of the article
		 * Required
		 */
		mediumUrl: string;

		/**
		 * sequence of the article images
		 * Required
		 */
		orderNumber: number;

		/**
		 * small HD image of the article
		 * Required
		 */
		smallHdUrl: string;

		/**
		 * small image of the article
		 * Required
		 */
		smallUrl: string;

		/**
		 * thumbnail HD url of the article images
		 * Required
		 */
		thumbnailHdUrl: string;

		/**
		 * model or non model type article images
		 * Required
		 */
		type: string;
	}

	/** Zalando API Article Image Schema */
	export interface Article_ImageFormProperties {

		/**
		 * large HD image of the article
		 * Required
		 */
		largeHdUrl: FormControl<string | null | undefined>,

		/**
		 * large image of the article
		 * Required
		 */
		largeUrl: FormControl<string | null | undefined>,

		/**
		 * medium HD image of the article
		 * Required
		 */
		mediumHdUrl: FormControl<string | null | undefined>,

		/**
		 * medium image of the article
		 * Required
		 */
		mediumUrl: FormControl<string | null | undefined>,

		/**
		 * sequence of the article images
		 * Required
		 */
		orderNumber: FormControl<number | null | undefined>,

		/**
		 * small HD image of the article
		 * Required
		 */
		smallHdUrl: FormControl<string | null | undefined>,

		/**
		 * small image of the article
		 * Required
		 */
		smallUrl: FormControl<string | null | undefined>,

		/**
		 * thumbnail HD url of the article images
		 * Required
		 */
		thumbnailHdUrl: FormControl<string | null | undefined>,

		/**
		 * model or non model type article images
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateArticle_ImageFormGroup() {
		return new FormGroup<Article_ImageFormProperties>({
			largeHdUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			largeUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mediumHdUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mediumUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			smallHdUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			smallUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumbnailHdUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ArticleSeason { SUMMER = 0, WINTER = 1, ALL = 2 }


	/** Zalando API Article Unit Schema */
	export interface Article_Unit {

		/**
		 * availability of the article
		 * Required
		 */
		available: boolean;

		/**
		 * article id (sku)
		 * Required
		 */
		id: string;

		/**
		 * Zalando API Article Price Schema
		 * Required
		 */
		originalPrice: Article_Price;

		/** partner id (vendor id) of the article */
		partnerId?: string | null;

		/**
		 * Zalando API Article Price Schema
		 * Required
		 */
		price: Article_Price;

		/**
		 * article size
		 * Required
		 */
		size: string;

		/**
		 * stock of the article
		 * Required
		 */
		stock: number;
	}

	/** Zalando API Article Unit Schema */
	export interface Article_UnitFormProperties {

		/**
		 * availability of the article
		 * Required
		 */
		available: FormControl<boolean | null | undefined>,

		/**
		 * article id (sku)
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** partner id (vendor id) of the article */
		partnerId: FormControl<string | null | undefined>,

		/**
		 * article size
		 * Required
		 */
		size: FormControl<string | null | undefined>,

		/**
		 * stock of the article
		 * Required
		 */
		stock: FormControl<number | null | undefined>,
	}
	export function CreateArticle_UnitFormGroup() {
		return new FormGroup<Article_UnitFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			partnerId: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stock: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API Article Price Schema */
	export interface Article_Price {

		/** Required */
		currency: string;

		/** Required */
		formatted: string;

		/** Required */
		value: number;
	}

	/** Zalando API Article Price Schema */
	export interface Article_PriceFormProperties {

		/** Required */
		currency: FormControl<string | null | undefined>,

		/** Required */
		formatted: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateArticle_PriceFormGroup() {
		return new FormGroup<Article_PriceFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formatted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API Article Review Schema */
	export interface Article_Review {

		/** Required */
		articleId: string;

		/** Required */
		articleModelId: string;
		articleSizeRatings?: Article_ReviewArticleSizeRatings;

		/**
		 * article review created date and time
		 * Required
		 */
		created: Date;

		/** customer city in the article review */
		customerCity?: string | null;

		/** customer country in the article review */
		customerCountry?: string | null;

		/** Customer short name in the article review */
		customerNickname?: string | null;

		/**
		 * description of the article review
		 * Required
		 */
		description: string;

		/**
		 * customer review helpful count of the article
		 * Required
		 */
		helpfulCount: number;

		/**
		 * language in the article review
		 * Required
		 */
		language: string;

		/**
		 * customer rating of the article
		 * Required
		 */
		rating: number;

		/** customer recommend to the article */
		recommend?: boolean | null;

		/**
		 * unique article review id
		 * Required
		 */
		reviewId: string;

		/**
		 * title in the article review
		 * Required
		 */
		title: string;

		/**
		 * customer review unhelpful count of the article
		 * Required
		 */
		unhelpfulCount: number;
	}

	/** Zalando API Article Review Schema */
	export interface Article_ReviewFormProperties {

		/** Required */
		articleId: FormControl<string | null | undefined>,

		/** Required */
		articleModelId: FormControl<string | null | undefined>,

		/**
		 * article review created date and time
		 * Required
		 */
		created: FormControl<Date | null | undefined>,

		/** customer city in the article review */
		customerCity: FormControl<string | null | undefined>,

		/** customer country in the article review */
		customerCountry: FormControl<string | null | undefined>,

		/** Customer short name in the article review */
		customerNickname: FormControl<string | null | undefined>,

		/**
		 * description of the article review
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * customer review helpful count of the article
		 * Required
		 */
		helpfulCount: FormControl<number | null | undefined>,

		/**
		 * language in the article review
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * customer rating of the article
		 * Required
		 */
		rating: FormControl<number | null | undefined>,

		/** customer recommend to the article */
		recommend: FormControl<boolean | null | undefined>,

		/**
		 * unique article review id
		 * Required
		 */
		reviewId: FormControl<string | null | undefined>,

		/**
		 * title in the article review
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * customer review unhelpful count of the article
		 * Required
		 */
		unhelpfulCount: FormControl<number | null | undefined>,
	}
	export function CreateArticle_ReviewFormGroup() {
		return new FormGroup<Article_ReviewFormProperties>({
			articleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			articleModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			customerCity: new FormControl<string | null | undefined>(undefined),
			customerCountry: new FormControl<string | null | undefined>(undefined),
			customerNickname: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			helpfulCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			recommend: new FormControl<boolean | null | undefined>(undefined),
			reviewId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unhelpfulCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Article_ReviewArticleSizeRatings {
		BOOTLEG_WIDTH?: number | null;
		CHEST?: number | null;
		CHEST_GIRTH?: number | null;
		COLLAR_SIZE?: number | null;
		CUP_SIZE?: number | null;
		HIPS_OR_REAR?: number | null;
		LEG_FIT?: number | null;
		LENGTH?: number | null;
		OVERALL?: number | null;
		SHOE_WIDTH?: number | null;
		SHOULDERS?: number | null;
		SLEEVES?: number | null;
	}
	export interface Article_ReviewArticleSizeRatingsFormProperties {
		BOOTLEG_WIDTH: FormControl<number | null | undefined>,
		CHEST: FormControl<number | null | undefined>,
		CHEST_GIRTH: FormControl<number | null | undefined>,
		COLLAR_SIZE: FormControl<number | null | undefined>,
		CUP_SIZE: FormControl<number | null | undefined>,
		HIPS_OR_REAR: FormControl<number | null | undefined>,
		LEG_FIT: FormControl<number | null | undefined>,
		LENGTH: FormControl<number | null | undefined>,
		OVERALL: FormControl<number | null | undefined>,
		SHOE_WIDTH: FormControl<number | null | undefined>,
		SHOULDERS: FormControl<number | null | undefined>,
		SLEEVES: FormControl<number | null | undefined>,
	}
	export function CreateArticle_ReviewArticleSizeRatingsFormGroup() {
		return new FormGroup<Article_ReviewArticleSizeRatingsFormProperties>({
			BOOTLEG_WIDTH: new FormControl<number | null | undefined>(undefined),
			CHEST: new FormControl<number | null | undefined>(undefined),
			CHEST_GIRTH: new FormControl<number | null | undefined>(undefined),
			COLLAR_SIZE: new FormControl<number | null | undefined>(undefined),
			CUP_SIZE: new FormControl<number | null | undefined>(undefined),
			HIPS_OR_REAR: new FormControl<number | null | undefined>(undefined),
			LEG_FIT: new FormControl<number | null | undefined>(undefined),
			LENGTH: new FormControl<number | null | undefined>(undefined),
			OVERALL: new FormControl<number | null | undefined>(undefined),
			SHOE_WIDTH: new FormControl<number | null | undefined>(undefined),
			SHOULDERS: new FormControl<number | null | undefined>(undefined),
			SLEEVES: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Zalando API Paged Article Reviews Schema */
	export interface Article_Reviews {
	}

	/** Zalando API Paged Article Reviews Schema */
	export interface Article_ReviewsFormProperties {
	}
	export function CreateArticle_ReviewsFormGroup() {
		return new FormGroup<Article_ReviewsFormProperties>({
		});

	}


	/** Zalando API Paged Article Reviews Summaries Schema */
	export interface Article_Reviews_Summaries {
	}

	/** Zalando API Paged Article Reviews Summaries Schema */
	export interface Article_Reviews_SummariesFormProperties {
	}
	export function CreateArticle_Reviews_SummariesFormGroup() {
		return new FormGroup<Article_Reviews_SummariesFormProperties>({
		});

	}


	/** Zalando API Article Reviews Summary Schema */
	export interface Article_Reviews_Summary {

		/** Required */
		articleModelId: string;

		/** size rating of the article */
		articleSizeRatings?: Article_Reviews_SummaryArticleSizeRatings;

		/**
		 * average star rating of the article
		 * Required
		 */
		averageStarRating: number;

		/**
		 * number of positive recommendations to the article
		 * Required
		 */
		numberOfUserPositiveRecommendations: number;

		/**
		 * number of users recommended to the article
		 * Required
		 */
		numberOfUserRecommendations: number;

		/**
		 * number of user reviews of the article
		 * Required
		 */
		numberOfUserReviews: number;

		/**
		 * start rating distribution of the article
		 * Required
		 */
		starRatingDistribution: Article_Reviews_SummaryStarRatingDistribution;
	}

	/** Zalando API Article Reviews Summary Schema */
	export interface Article_Reviews_SummaryFormProperties {

		/** Required */
		articleModelId: FormControl<string | null | undefined>,

		/**
		 * average star rating of the article
		 * Required
		 */
		averageStarRating: FormControl<number | null | undefined>,

		/**
		 * number of positive recommendations to the article
		 * Required
		 */
		numberOfUserPositiveRecommendations: FormControl<number | null | undefined>,

		/**
		 * number of users recommended to the article
		 * Required
		 */
		numberOfUserRecommendations: FormControl<number | null | undefined>,

		/**
		 * number of user reviews of the article
		 * Required
		 */
		numberOfUserReviews: FormControl<number | null | undefined>,
	}
	export function CreateArticle_Reviews_SummaryFormGroup() {
		return new FormGroup<Article_Reviews_SummaryFormProperties>({
			articleModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			averageStarRating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numberOfUserPositiveRecommendations: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numberOfUserRecommendations: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numberOfUserReviews: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Article_Reviews_SummaryArticleSizeRatings {
		BOOTLEG_WIDTH?: number | null;
		CHEST?: number | null;
		CHEST_GIRTH?: number | null;
		COLLAR_SIZE?: number | null;
		CUP_SIZE?: number | null;
		HIPS_OR_REAR?: number | null;
		LEG_FIT?: number | null;
		LENGTH?: number | null;
		OVERALL?: number | null;
		SHOE_WIDTH?: number | null;
		SHOULDERS?: number | null;
		SLEEVES?: number | null;
	}
	export interface Article_Reviews_SummaryArticleSizeRatingsFormProperties {
		BOOTLEG_WIDTH: FormControl<number | null | undefined>,
		CHEST: FormControl<number | null | undefined>,
		CHEST_GIRTH: FormControl<number | null | undefined>,
		COLLAR_SIZE: FormControl<number | null | undefined>,
		CUP_SIZE: FormControl<number | null | undefined>,
		HIPS_OR_REAR: FormControl<number | null | undefined>,
		LEG_FIT: FormControl<number | null | undefined>,
		LENGTH: FormControl<number | null | undefined>,
		OVERALL: FormControl<number | null | undefined>,
		SHOE_WIDTH: FormControl<number | null | undefined>,
		SHOULDERS: FormControl<number | null | undefined>,
		SLEEVES: FormControl<number | null | undefined>,
	}
	export function CreateArticle_Reviews_SummaryArticleSizeRatingsFormGroup() {
		return new FormGroup<Article_Reviews_SummaryArticleSizeRatingsFormProperties>({
			BOOTLEG_WIDTH: new FormControl<number | null | undefined>(undefined),
			CHEST: new FormControl<number | null | undefined>(undefined),
			CHEST_GIRTH: new FormControl<number | null | undefined>(undefined),
			COLLAR_SIZE: new FormControl<number | null | undefined>(undefined),
			CUP_SIZE: new FormControl<number | null | undefined>(undefined),
			HIPS_OR_REAR: new FormControl<number | null | undefined>(undefined),
			LEG_FIT: new FormControl<number | null | undefined>(undefined),
			LENGTH: new FormControl<number | null | undefined>(undefined),
			OVERALL: new FormControl<number | null | undefined>(undefined),
			SHOE_WIDTH: new FormControl<number | null | undefined>(undefined),
			SHOULDERS: new FormControl<number | null | undefined>(undefined),
			SLEEVES: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Article_Reviews_SummaryStarRatingDistribution {

		/** Required */
		'1': number;

		/** Required */
		'2': number;

		/** Required */
		'3': number;

		/** Required */
		'4': number;

		/** Required */
		'5': number;
	}
	export interface Article_Reviews_SummaryStarRatingDistributionFormProperties {

		/** Required */
		'1': FormControl<number | null | undefined>,

		/** Required */
		'2': FormControl<number | null | undefined>,

		/** Required */
		'3': FormControl<number | null | undefined>,

		/** Required */
		'4': FormControl<number | null | undefined>,

		/** Required */
		'5': FormControl<number | null | undefined>,
	}
	export function CreateArticle_Reviews_SummaryStarRatingDistributionFormGroup() {
		return new FormGroup<Article_Reviews_SummaryStarRatingDistributionFormProperties>({
			'1': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'2': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'3': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'4': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			'5': new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A simple container object that carries paging information as well as a list of articles on the `content` property. */
	export interface Articles {
	}

	/** A simple container object that carries paging information as well as a list of articles on the `content` property. */
	export interface ArticlesFormProperties {
	}
	export function CreateArticlesFormGroup() {
		return new FormGroup<ArticlesFormProperties>({
		});

	}


	/** Zalando API Paged Brands Schema */
	export interface Brands {
	}

	/** Zalando API Paged Brands Schema */
	export interface BrandsFormProperties {
	}
	export function CreateBrandsFormGroup() {
		return new FormGroup<BrandsFormProperties>({
		});

	}


	/** Zalando API Paged Categories Schema */
	export interface Categories {
	}

	/** Zalando API Paged Categories Schema */
	export interface CategoriesFormProperties {
	}
	export function CreateCategoriesFormGroup() {
		return new FormGroup<CategoriesFormProperties>({
		});

	}


	/** Zalando API Category Schema */
	export interface Category {

		/**
		 * The list of keys of the child categories
		 * Required
		 * Minimum items: 0
		 */
		childKeys: Array<string>;

		/** The numeric ID for a category. */
		cid?: number | null;

		/** The category is hidden and not shown on the Zalando web shop */
		hidden?: boolean | null;

		/**
		 * The unique key for a category
		 * Required
		 */
		key: string;

		/**
		 * Name of the category
		 * Required
		 */
		name: string;

		/** Containing articles are from last seasons */
		outlet?: boolean | null;

		/** The key of the parent category */
		parentKey?: string | null;

		/**
		 * list of filter names that are reasonable to use within this category
		 * Required
		 * Minimum items: 1
		 */
		suggestedFilters: Array<string>;

		/**
		 * The target group of the articles from this category
		 * Required
		 */
		targetGroup: CategoryTargetGroup;

		/** The type of the category. */
		type?: string | null;
	}

	/** Zalando API Category Schema */
	export interface CategoryFormProperties {

		/** The numeric ID for a category. */
		cid: FormControl<number | null | undefined>,

		/** The category is hidden and not shown on the Zalando web shop */
		hidden: FormControl<boolean | null | undefined>,

		/**
		 * The unique key for a category
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Name of the category
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Containing articles are from last seasons */
		outlet: FormControl<boolean | null | undefined>,

		/** The key of the parent category */
		parentKey: FormControl<string | null | undefined>,

		/**
		 * The target group of the articles from this category
		 * Required
		 */
		targetGroup: FormControl<CategoryTargetGroup | null | undefined>,

		/** The type of the category. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			cid: new FormControl<number | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outlet: new FormControl<boolean | null | undefined>(undefined),
			parentKey: new FormControl<string | null | undefined>(undefined),
			targetGroup: new FormControl<CategoryTargetGroup | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CategoryTargetGroup { ALL = 0, WOMEN = 1, MEN = 2, KIDS = 3 }


	/** Zalando API Domain Schema */
	export interface Domain {

		/**
		 * domain country code
		 * Required
		 */
		countryCode: string;

		/**
		 * domain currency code
		 * Required
		 */
		currencyCode: string;

		/**
		 * domain language
		 * Required
		 */
		languageCode: string;

		/**
		 * domain root category
		 * Required
		 */
		rootCategoryKey: string;

		/**
		 * domain specific url
		 * Required
		 */
		shopUrl: string;

		/**
		 * domain tax rate
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		taxRate: number;
	}

	/** Zalando API Domain Schema */
	export interface DomainFormProperties {

		/**
		 * domain country code
		 * Required
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * domain currency code
		 * Required
		 */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * domain language
		 * Required
		 */
		languageCode: FormControl<string | null | undefined>,

		/**
		 * domain root category
		 * Required
		 */
		rootCategoryKey: FormControl<string | null | undefined>,

		/**
		 * domain specific url
		 * Required
		 */
		shopUrl: FormControl<string | null | undefined>,

		/**
		 * domain tax rate
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		taxRate: FormControl<number | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			languageCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rootCategoryKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shopUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxRate: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
		});

	}

	export interface ErrorDetail {
		invalidName?: boolean | null;
		invalidValues?: Array<string>;
		key?: string | null;
		name?: string | null;
		value?: string | null;
	}
	export interface ErrorDetailFormProperties {
		invalidName: FormControl<boolean | null | undefined>,
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			invalidName: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorMessage {
		errors?: Array<ErrorDetail>;

		/** Required */
		message: string;

		/** Required */
		status: number;
	}
	export interface ErrorMessageFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorMessageFormGroup() {
		return new FormGroup<ErrorMessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API Facet Schema */
	export interface Facet {

		/**
		 * list of the calculated article counts for each filter value
		 * Required
		 * Minimum items: 1
		 */
		facets: Array<Facet_Value>;

		/** Required */
		filter: string;
	}

	/** Zalando API Facet Schema */
	export interface FacetFormProperties {

		/** Required */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateFacetFormGroup() {
		return new FormGroup<FacetFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API FacetValue Schema */
	export interface Facet_Value {

		/**
		 * number of articles matching this filter value
		 * Required
		 */
		count: number;

		/** Required */
		displayName: string;

		/** Required */
		key: string;
	}

	/** Zalando API FacetValue Schema */
	export interface Facet_ValueFormProperties {

		/**
		 * number of articles matching this filter value
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreateFacet_ValueFormGroup() {
		return new FormGroup<Facet_ValueFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API Filter Schema */
	export interface Filter {

		/**
		 * can this filter be used multiple times with different values in one search request
		 * Required
		 */
		multiValue: boolean;

		/**
		 * The unique name for a filter
		 * Required
		 */
		name: string;

		/**
		 * filter enum types
		 * Required
		 */
		type: FilterType;

		/**
		 * only if type is 'enum' this list contains all possible filter values
		 * Required
		 * Minimum items: 0
		 */
		values: Array<Filter_Value>;
	}

	/** Zalando API Filter Schema */
	export interface FilterFormProperties {

		/**
		 * can this filter be used multiple times with different values in one search request
		 * Required
		 */
		multiValue: FormControl<boolean | null | undefined>,

		/**
		 * The unique name for a filter
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * filter enum types
		 * Required
		 */
		type: FormControl<FilterType | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			multiValue: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<FilterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterType { SKU = 0, KEY = 1, ENUM = 2, STRING = 3, RANGE = 4 }


	/** Zalando API FilterValue Schema */
	export interface Filter_Value {

		/**
		 * translated display name
		 * Required
		 */
		displayName: string;

		/**
		 * The key for a filterValue. Only unique within one filter
		 * Required
		 */
		key: string;
	}

	/** Zalando API FilterValue Schema */
	export interface Filter_ValueFormProperties {

		/**
		 * translated display name
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The key for a filterValue. Only unique within one filter
		 * Required
		 */
		key: FormControl<string | null | undefined>,
	}
	export function CreateFilter_ValueFormGroup() {
		return new FormGroup<Filter_ValueFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** wrapper object for paged responses */
	export interface Page {

		/**
		 * page content
		 * Required
		 * Minimum items: 0
		 */
		content: Array<string>;

		/**
		 * page number
		 * Required
		 */
		page: number;

		/**
		 * total number of elements in a page
		 * Required
		 */
		size: number;

		/**
		 * total elements in the response
		 * Required
		 */
		totalElements: number;

		/**
		 * total number of pages in the response
		 * Required
		 */
		totalPages: number;
	}

	/** wrapper object for paged responses */
	export interface PageFormProperties {

		/**
		 * page number
		 * Required
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * total number of elements in a page
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * total elements in the response
		 * Required
		 */
		totalElements: FormControl<number | null | undefined>,

		/**
		 * total number of pages in the response
		 * Required
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalElements: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalPages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Zalando API Recommendation Article Schema */
	export interface Recommendations_Article {

		/** Required */
		id: string;

		/**
		 * Zalando API Article Media Schema
		 * Required
		 */
		media: Article_Media;

		/** Required */
		modelId: string;

		/** Required */
		name: string;

		/** Required */
		shopUrl: string;
	}

	/** Zalando API Recommendation Article Schema */
	export interface Recommendations_ArticleFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		shopUrl: FormControl<string | null | undefined>,
	}
	export function CreateRecommendations_ArticleFormGroup() {
		return new FormGroup<Recommendations_ArticleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shopUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Article Reviews
		 * Zalando API Article Reviews Schema
		 * Get article-reviews
		 * @param {Array<string>} articleId Article IDs. A list of config SKUs for which the article reviews will be returned.
		 * Required if articleModelId is empty.
		 * @param {Array<string>} articleModelId Article model IDs. A list of model SKUs for which the article reviews will be returned.
		 * Required if articleId is empty.
		 * @param {string} minStarRating To get reviews with minimum star rating.
		 * @param {string} maxStarRating To get reviews with maximum star rating.
		 * @param {Article_reviewsGetByArticleIdAndArticleModelIdAndMinStarRatingAndMaxStarRatingAndSortAndPageAndPageSizeAndFieldsSort} sort articles are sorted on reviews provided by customers (eg: best)
		 * @param {string} page to request with required page number or pagination
		 * @param {string} pageSize to request with required page size in a page
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Article_Reviews} Articles Reviews response.
		 */
		Article_reviewsGetByArticleIdAndArticleModelIdAndMinStarRatingAndMaxStarRatingAndSortAndPageAndPageSizeAndFields(articleId: Array<string> | null | undefined, articleModelId: Array<string> | null | undefined, minStarRating: string | null | undefined, maxStarRating: string | null | undefined, sort: Article_reviewsGetByArticleIdAndArticleModelIdAndMinStarRatingAndMaxStarRatingAndSortAndPageAndPageSizeAndFieldsSort | null | undefined, page: string | null | undefined, pageSize: string | null | undefined, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Article_Reviews> {
			return this.http.get<Article_Reviews>(this.baseUri + 'article-reviews?' + articleId?.map(z => `articleId=${encodeURIComponent(z)}`).join('&') + '&' + articleModelId?.map(z => `articleModelId=${encodeURIComponent(z)}`).join('&') + '&minStarRating=' + (minStarRating == null ? '' : encodeURIComponent(minStarRating)) + '&maxStarRating=' + (maxStarRating == null ? '' : encodeURIComponent(maxStarRating)) + '&sort=' + sort + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&pageSize=' + (pageSize == null ? '' : encodeURIComponent(pageSize)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article Reviews Summaries
		 * Zalando API Article Reviews Summaries Schema
		 * Get article-reviews-summaries
		 * @param {Array<string>} articleModelId Article model IDs. A list of model SKUs for which the article review summaries will be returned.
		 * @param {string} page to request with required page number or pagination
		 * @param {string} pageSize to request with required page size in a page
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Article_Reviews_Summaries} Articles Reviews Summaries response.
		 */
		Article_reviews_summariesGetByArticleModelIdAndPageAndPageSizeAndFields(articleModelId: Array<string>, page: string | null | undefined, pageSize: string | null | undefined, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Article_Reviews_Summaries> {
			return this.http.get<Article_Reviews_Summaries>(this.baseUri + 'article-reviews-summaries?' + articleModelId.map(z => `articleModelId=${encodeURIComponent(z)}`).join('&') + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&pageSize=' + (pageSize == null ? '' : encodeURIComponent(pageSize)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article Reviews Summaries by articleModelId
		 * Zalando API ArticleReviewsSummaries Schema
		 * Get article-reviews-summaries/{articleModelId}
		 * @param {string} articleModelId To get unique reviews summary from article model Id.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Article_Reviews_Summary} Articles Reviews Summaries by articleModelId response.
		 */
		Article_reviews_summaries_articleModelIdGetByFields(articleModelId: string, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Article_Reviews_Summary> {
			return this.http.get<Article_Reviews_Summary>(this.baseUri + 'article-reviews-summaries/' + (articleModelId == null ? '' : encodeURIComponent(articleModelId)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article Reviews by reviewId
		 * Zalando API ArticleReviews Schema
		 * Get article-reviews/{reviewId}
		 * @param {string} reviewId To get unique review by review Id.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Article_Review} Articles Reviews by reviewId response.
		 */
		Article_reviews_reviewIdGetByFields(reviewId: string, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Article_Review> {
			return this.http.get<Article_Review>(this.baseUri + 'article-reviews/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for Articles
		 * Search for articles based on various different possible filter like e.g. the `brandFamily`, the `catagory` or a
		 * specific `color`. See [Filters](https://todo) for a list of all available filter options.
		 * The default `pageSize` for responses is set to `20`. You can add a `pageSize` request parameter to adjust that.
		 * Please keep in mind that the maximum `pageSize` for this resource is `200`.
		 * The endpoint also supports reducing the fields returned for each article via the `fields` parameter. Please
		 * refer to [fields parameter](https://todo) for more details.
		 * Get articles
		 * @param {Array<string>} articleId The `articleIds` to use use for filtering.
		 * One or more `articleIds` might be used as a filter criteria. Submit multiple `articleId` request parameters for
		 * more than one to be used. They will be treated as `OR` criteria.
		 * @param {Array<string>} articleModelId filters by article ModelId
		 * @param {Array<string>} articleUnitId filters by article's unit id
		 * @param {Array<string>} activationDate period or time the articles are activated for selling in the shop
		 * @param {Array<string>} ageGroup filters by age group (eg: kids)
		 * @param {Array<string>} assortmentArea filters by classification of articles (eg: maternity) 
		 * @param {Array<string>} brand filters by brand key given by user (eg: SA5)
		 * @param {Array<string>} brandfamily filters by brand family key (eg: nike) 
		 * @param {Array<string>} category filters by category (eg: Socks, Rain Coats)
		 * @param {Array<string>} color filters by color (eg: red, blue)
		 * @param {Array<string>} den filters by den 
		 * @param {Array<string>} filling filters by different kinds of garment filling materials (eg: satin, wolle)
		 * @param {string} fullText filters by text (eg: search by 'as' gives result with articles of brand Sass)
		 * @param {Array<string>} gender filters by gender
		 * @param {Array<string>} heelForm filters by heel form (eg: flat)
		 * @param {Array<string>} heelHeight filters by height of the heel size or length (eg: xs)
		 * @param {string} length filters by garments length (eg: 3/4 length, knee-length)
		 * @param {Array<string>} occasion filters by type of occasion (eg: party, business)
		 * @param {Array<string>} pattern filters by pattern on the garments (eg: animal print, plain)
		 * @param {string} price filters all articles in price range (eg: 9-90)
		 * @param {Array<string>} sale filters discounted articles marked as sale
		 * @param {Array<string>} season filters by season (Autumn/Winter or Spring/Summer)
		 * @param {Array<string>} shaftHeight filters by shaft height (eg: s, xs)
		 * @param {Array<string>} shaftWidth filters by shaft width (eg: s, l)
		 * @param {Array<string>} shirtCollar filters by shirt collar styles (eg: low V neck, lined collar)
		 * @param {Array<string>} shoeFastener filters by shoe fastener types (eg: buckle, lacing)
		 * @param {Array<string>} shoeToecap filters by shoe toe cap variants (eg: pointed, square)
		 * @param {Array<string>} shopArea filters by classification of articles
		 * @param {string} size filters by size
		 * @param {Array<string>} sports filters by different sport activities (eg: football)
		 * @param {Array<string>} technology filters by technology used to produce the articles
		 * @param {Array<string>} trouserRise filters by trouser rise
		 * @param {Array<string>} upperMaterial filters by different type of upper material used on garments (eg: lace)
		 * @param {Array<string>} volume filters by volume
		 * @param {string} page to request with required page number or pagination
		 * @param {string} pageSize to request with required page size in a page
		 * @param {ArticlesGetByArticleIdAndArticleModelIdAndArticleUnitIdAndActivationDateAndAgeGroupAndAssortmentAreaAndBrandAndBrandfamilyAndCategoryAndColorAndDenAndFillingAndFullTextAndGenderAndHeelFormAndHeelHeightAndLengthAndOccasionAndPatternAndPriceAndSaleAndSeasonAndShaftHeightAndShaftWidthAndShirtCollarAndShoeFastenerAndShoeToecapAndShopAreaAndSizeAndSportsAndTechnologyAndTrouserRiseAndUpperMaterialAndVolumeAndPageAndPageSizeAndSortAndFieldsSort} sort sorting order (eg: popularity)
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Articles} Articles response.
		 */
		ArticlesGetByArticleIdAndArticleModelIdAndArticleUnitIdAndActivationDateAndAgeGroupAndAssortmentAreaAndBrandAndBrandfamilyAndCategoryAndColorAndDenAndFillingAndFullTextAndGenderAndHeelFormAndHeelHeightAndLengthAndOccasionAndPatternAndPriceAndSaleAndSeasonAndShaftHeightAndShaftWidthAndShirtCollarAndShoeFastenerAndShoeToecapAndShopAreaAndSizeAndSportsAndTechnologyAndTrouserRiseAndUpperMaterialAndVolumeAndPageAndPageSizeAndSortAndFields(articleId: Array<string> | null | undefined, articleModelId: Array<string> | null | undefined, articleUnitId: Array<string> | null | undefined, activationDate: Array<string> | null | undefined, ageGroup: Array<string> | null | undefined, assortmentArea: Array<string> | null | undefined, brand: Array<string> | null | undefined, brandfamily: Array<string> | null | undefined, category: Array<string> | null | undefined, color: Array<string> | null | undefined, den: Array<string> | null | undefined, filling: Array<string> | null | undefined, fullText: string | null | undefined, gender: Array<string> | null | undefined, heelForm: Array<string> | null | undefined, heelHeight: Array<string> | null | undefined, length: string | null | undefined, occasion: Array<string> | null | undefined, pattern: Array<string> | null | undefined, price: string | null | undefined, sale: Array<string> | null | undefined, season: Array<string> | null | undefined, shaftHeight: Array<string> | null | undefined, shaftWidth: Array<string> | null | undefined, shirtCollar: Array<string> | null | undefined, shoeFastener: Array<string> | null | undefined, shoeToecap: Array<string> | null | undefined, shopArea: Array<string> | null | undefined, size: string | null | undefined, sports: Array<string> | null | undefined, technology: Array<string> | null | undefined, trouserRise: Array<string> | null | undefined, upperMaterial: Array<string> | null | undefined, volume: Array<string> | null | undefined, page: string | null | undefined, pageSize: string | null | undefined, sort: ArticlesGetByArticleIdAndArticleModelIdAndArticleUnitIdAndActivationDateAndAgeGroupAndAssortmentAreaAndBrandAndBrandfamilyAndCategoryAndColorAndDenAndFillingAndFullTextAndGenderAndHeelFormAndHeelHeightAndLengthAndOccasionAndPatternAndPriceAndSaleAndSeasonAndShaftHeightAndShaftWidthAndShirtCollarAndShoeFastenerAndShoeToecapAndShopAreaAndSizeAndSportsAndTechnologyAndTrouserRiseAndUpperMaterialAndVolumeAndPageAndPageSizeAndSortAndFieldsSort | null | undefined, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Articles> {
			return this.http.get<Articles>(this.baseUri + 'articles?' + articleId?.map(z => `articleId=${encodeURIComponent(z)}`).join('&') + '&' + articleModelId?.map(z => `articleModelId=${encodeURIComponent(z)}`).join('&') + '&' + articleUnitId?.map(z => `articleUnitId=${encodeURIComponent(z)}`).join('&') + '&' + activationDate?.map(z => `activationDate=${encodeURIComponent(z)}`).join('&') + '&' + ageGroup?.map(z => `ageGroup=${encodeURIComponent(z)}`).join('&') + '&' + assortmentArea?.map(z => `assortmentArea=${encodeURIComponent(z)}`).join('&') + '&' + brand?.map(z => `brand=${encodeURIComponent(z)}`).join('&') + '&' + brandfamily?.map(z => `brandfamily=${encodeURIComponent(z)}`).join('&') + '&' + category?.map(z => `category=${encodeURIComponent(z)}`).join('&') + '&' + color?.map(z => `color=${encodeURIComponent(z)}`).join('&') + '&' + den?.map(z => `den=${encodeURIComponent(z)}`).join('&') + '&' + filling?.map(z => `filling=${encodeURIComponent(z)}`).join('&') + '&fullText=' + (fullText == null ? '' : encodeURIComponent(fullText)) + '&' + gender?.map(z => `gender=${encodeURIComponent(z)}`).join('&') + '&' + heelForm?.map(z => `heelForm=${encodeURIComponent(z)}`).join('&') + '&' + heelHeight?.map(z => `heelHeight=${encodeURIComponent(z)}`).join('&') + '&length=' + (length == null ? '' : encodeURIComponent(length)) + '&' + occasion?.map(z => `occasion=${encodeURIComponent(z)}`).join('&') + '&' + pattern?.map(z => `pattern=${encodeURIComponent(z)}`).join('&') + '&price=' + (price == null ? '' : encodeURIComponent(price)) + '&' + sale?.map(z => `sale=${encodeURIComponent(z)}`).join('&') + '&' + season?.map(z => `season=${encodeURIComponent(z)}`).join('&') + '&' + shaftHeight?.map(z => `shaftHeight=${encodeURIComponent(z)}`).join('&') + '&' + shaftWidth?.map(z => `shaftWidth=${encodeURIComponent(z)}`).join('&') + '&' + shirtCollar?.map(z => `shirtCollar=${encodeURIComponent(z)}`).join('&') + '&' + shoeFastener?.map(z => `shoeFastener=${encodeURIComponent(z)}`).join('&') + '&' + shoeToecap?.map(z => `shoeToecap=${encodeURIComponent(z)}`).join('&') + '&' + shopArea?.map(z => `shopArea=${encodeURIComponent(z)}`).join('&') + '&size=' + (size == null ? '' : encodeURIComponent(size)) + '&' + sports?.map(z => `sports=${encodeURIComponent(z)}`).join('&') + '&' + technology?.map(z => `technology=${encodeURIComponent(z)}`).join('&') + '&' + trouserRise?.map(z => `trouserRise=${encodeURIComponent(z)}`).join('&') + '&' + upperMaterial?.map(z => `upperMaterial=${encodeURIComponent(z)}`).join('&') + '&' + volume?.map(z => `volume=${encodeURIComponent(z)}`).join('&') + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&pageSize=' + (pageSize == null ? '' : encodeURIComponent(pageSize)) + '&sort=' + sort + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article by articleId
		 * Zalando API Article Schema
		 * Get articles/{articleId}
		 * @param {string} articleId To get unique article for article Id.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Article} Article response.
		 */
		Articles_articleIdGetByFields(articleId: string, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Article> {
			return this.http.get<Article>(this.baseUri + 'articles/' + (articleId == null ? '' : encodeURIComponent(articleId)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article media by articleId
		 * Zalando API Article Schema
		 * Get articles/{articleId}/media
		 * @param {string} articleId To get unique article for article Id media.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Article_Media} Article response.
		 */
		Articles_articleIdMediaGetByFields(articleId: string, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Article_Media> {
			return this.http.get<Article_Media>(this.baseUri + 'articles/' + (articleId == null ? '' : encodeURIComponent(articleId)) + '/media&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article reviews by articleId
		 * Zalando API Article Schema
		 * Get articles/{articleId}/reviews
		 * @param {string} articleId To get unique article for article Id reviews.
		 * @param {string} minStarRating To get reviews with minimum star rating.
		 * @param {string} maxStarRating To get reviews with maximum star rating.
		 * @param {Article_reviewsGetByArticleIdAndArticleModelIdAndMinStarRatingAndMaxStarRatingAndSortAndPageAndPageSizeAndFieldsSort} sort articles are sorted on reviews provided by customers (eg: best)
		 * @param {string} page to request with required page number or pagination
		 * @param {string} pageSize to request with required page size in a page
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Article_Reviews} Article response.
		 */
		Articles_articleIdReviewsGetByMinStarRatingAndMaxStarRatingAndSortAndPageAndPageSizeAndFields(articleId: string, minStarRating: string | null | undefined, maxStarRating: string | null | undefined, sort: Article_reviewsGetByArticleIdAndArticleModelIdAndMinStarRatingAndMaxStarRatingAndSortAndPageAndPageSizeAndFieldsSort | null | undefined, page: string | null | undefined, pageSize: string | null | undefined, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Article_Reviews> {
			return this.http.get<Article_Reviews>(this.baseUri + 'articles/' + (articleId == null ? '' : encodeURIComponent(articleId)) + '/reviews&minStarRating=' + (minStarRating == null ? '' : encodeURIComponent(minStarRating)) + '&maxStarRating=' + (maxStarRating == null ? '' : encodeURIComponent(maxStarRating)) + '&sort=' + sort + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&pageSize=' + (pageSize == null ? '' : encodeURIComponent(pageSize)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article reviews summary by articleId
		 * Zalando API Article Schema
		 * Get articles/{articleId}/reviews-summary
		 * @param {string} articleId To get unique article for article Id reviews summary.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Article_Reviews_Summary} Article response.
		 */
		Articles_articleIdReviews_summaryGetByFields(articleId: string, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Article_Reviews_Summary> {
			return this.http.get<Article_Reviews_Summary>(this.baseUri + 'articles/' + (articleId == null ? '' : encodeURIComponent(articleId)) + '/reviews-summary&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article units by articleId
		 * Zalando API Article Schema
		 * Get articles/{articleId}/units
		 * @param {string} articleId To get unique article for article Id units.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Array<Article_Unit>} Article response.
		 */
		Articles_articleIdUnitsGetByFields(articleId: string, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Article_Unit>> {
			return this.http.get<Array<Article_Unit>>(this.baseUri + 'articles/' + (articleId == null ? '' : encodeURIComponent(articleId)) + '/units&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article units by articleId snd unitId
		 * Zalando API Article Schema
		 * Get articles/{articleId}/units/{unitId}
		 * @param {string} articleId To get unique article for article Id.
		 * @param {string} unitId To get unique article for article Id unit.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Article_Unit} Article response.
		 */
		Articles_articleIdUnits_unitIdGetByFields(articleId: string, unitId: string, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Article_Unit> {
			return this.http.get<Article_Unit>(this.baseUri + 'articles/' + (articleId == null ? '' : encodeURIComponent(articleId)) + '/units/' + (unitId == null ? '' : encodeURIComponent(unitId)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Shop Brands
		 * Zalando API Brands Schema
		 * Get brands
		 * @param {Array<string>} key Request Brand by key
		 * @param {Array<string>} name Request Brand by name
		 * @param {Array<string>} brandFamilyName Request Brand by brandFamilyName
		 * @param {Array<string>} brandFamilyKey Request Brand by brandFamilyKey
		 * @param {string} page to request with required page number or pagination
		 * @param {string} pageSize to request with required page size in a page
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Brands} Brands response.
		 */
		BrandsGetByKeyAndNameAndBrandFamilyNameAndBrandFamilyKeyAndPageAndPageSizeAndFields(key: Array<string> | null | undefined, name: Array<string> | null | undefined, brandFamilyName: Array<string> | null | undefined, brandFamilyKey: Array<string> | null | undefined, page: string | null | undefined, pageSize: string | null | undefined, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Brands> {
			return this.http.get<Brands>(this.baseUri + 'brands?' + key?.map(z => `key=${encodeURIComponent(z)}`).join('&') + '&' + name?.map(z => `name=${encodeURIComponent(z)}`).join('&') + '&' + brandFamilyName?.map(z => `brandFamilyName=${encodeURIComponent(z)}`).join('&') + '&' + brandFamilyKey?.map(z => `brandFamilyKey=${encodeURIComponent(z)}`).join('&') + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&pageSize=' + (pageSize == null ? '' : encodeURIComponent(pageSize)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Single Brand by Key
		 * Zalando API Brand Schema
		 * Get brands/{key}
		 * @param {string} key To get unique Brand by key.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Brand} Brand Key response.
		 */
		Brands_keyGetByFields(key: string, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Brand> {
			return this.http.get<Brand>(this.baseUri + 'brands/' + (key == null ? '' : encodeURIComponent(key)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Shop Categories
		 * Zalando API Categories Schema
		 * Get categories
		 * @param {Array<string>} name Request Categories by names
		 * @param {string} type Request Categories by type
		 * @param {string} outlet Request Categories by outlet
		 * @param {string} hidden Request Categories by hidden
		 * @param {string} targetGroup Request Categories by target group
		 * @param {Array<string>} key Request Categories by keys
		 * @param {Array<string>} parentKey Request Categories by parent keys
		 * @param {Array<string>} childKey Request Categories by child keys
		 * @param {Array<string>} suggestedFilter Request Categories by suggested filters
		 * @param {string} page to request with required page number or pagination
		 * @param {string} pageSize to request with required page size in a page
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Categories} Categories response.
		 */
		CategoriesGetByNameAndTypeAndOutletAndHiddenAndTargetGroupAndKeyAndParentKeyAndChildKeyAndSuggestedFilterAndPageAndPageSizeAndFields(name: Array<string> | null | undefined, type: string | null | undefined, outlet: string | null | undefined, hidden: string | null | undefined, targetGroup: string | null | undefined, key: Array<string> | null | undefined, parentKey: Array<string> | null | undefined, childKey: Array<string> | null | undefined, suggestedFilter: Array<string> | null | undefined, page: string | null | undefined, pageSize: string | null | undefined, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Categories> {
			return this.http.get<Categories>(this.baseUri + 'categories?' + name?.map(z => `name=${encodeURIComponent(z)}`).join('&') + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&outlet=' + (outlet == null ? '' : encodeURIComponent(outlet)) + '&hidden=' + (hidden == null ? '' : encodeURIComponent(hidden)) + '&targetGroup=' + (targetGroup == null ? '' : encodeURIComponent(targetGroup)) + '&' + key?.map(z => `key=${encodeURIComponent(z)}`).join('&') + '&' + parentKey?.map(z => `parentKey=${encodeURIComponent(z)}`).join('&') + '&' + childKey?.map(z => `childKey=${encodeURIComponent(z)}`).join('&') + '&' + suggestedFilter?.map(z => `suggestedFilter=${encodeURIComponent(z)}`).join('&') + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&pageSize=' + (pageSize == null ? '' : encodeURIComponent(pageSize)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Single Category by Key
		 * Zalando API Category Schema
		 * Get categories/{key}
		 * @param {Array<string>} key To get unique Category by key.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Category} Category Key response.
		 */
		Categories_keyGetByFields(key: Array<string>, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Category> {
			return this.http.get<Category>(this.baseUri + 'categories/{key}?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Shop Domains
		 * Zalando API Domains Schema
		 * Get domains
		 * @return {Array<Domain>} Domains response.
		 */
		DomainsGet(headersHandler?: () => HttpHeaders): Observable<Array<Domain>> {
			return this.http.get<Array<Domain>>(this.baseUri + 'domains', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Shop Facets
		 * Zalando API Facets Schema
		 * Get facets
		 * @param {Array<string>} ageGroup filters by age group (eg: kids)
		 * @param {Array<string>} articleId The `articleIds` to use use for filtering.
		 * One or more `articleIds` might be used as a filter criteria. Submit multiple `articleId` request parameters for
		 * more than one to be used. They will be treated as `OR` criteria.
		 * @param {Array<string>} activationDate period or time the articles are activated for selling in the shop
		 * @param {Array<string>} articleModelId filters by article ModelId
		 * @param {Array<string>} assortmentArea filters by classification of articles (eg: maternity) 
		 * @param {Array<string>} brand filters by brand key given by user (eg: SA5)
		 * @param {Array<string>} brandfamily filters by brand family key (eg: nike) 
		 * @param {Array<string>} category filters by category (eg: Socks, Rain Coats)
		 * @param {Array<string>} color filters by color (eg: red, blue)
		 * @param {Array<string>} den filters by den 
		 * @param {Array<string>} filling filters by different kinds of garment filling materials (eg: satin, wolle)
		 * @param {Array<string>} gender filters by gender
		 * @param {Array<string>} heelForm filters by heel form (eg: flat)
		 * @param {Array<string>} heelHeight filters by height of the heel size or length (eg: xs)
		 * @param {string} length filters by garments length (eg: 3/4 length, knee-length)
		 * @param {Array<string>} occasion filters by type of occasion (eg: party, business)
		 * @param {Array<string>} pattern filters by pattern on the garments (eg: animal print, plain)
		 * @param {string} price filters all articles in price range (eg: 9-90)
		 * @param {Array<string>} sale filters discounted articles marked as sale
		 * @param {Array<string>} season filters by season (Autumn/Winter or Spring/Summer)
		 * @param {Array<string>} shaftHeight filters by shaft height (eg: s, xs)
		 * @param {Array<string>} shaftWidth filters by shaft width (eg: s, l)
		 * @param {Array<string>} shirtCollar filters by shirt collar styles (eg: low V neck, lined collar)
		 * @param {Array<string>} shoeFastener filters by shoe fastener types (eg: buckle, lacing)
		 * @param {Array<string>} shoeToecap filters by shoe toe cap variants (eg: pointed, square)
		 * @param {Array<string>} shopArea filters by classification of articles
		 * @param {string} size filters by size
		 * @param {Array<string>} sports filters by different sport activities (eg: football)
		 * @param {Array<string>} technology filters by technology used to produce the articles
		 * @param {Array<string>} trouserRise filters by trouser rise
		 * @param {Array<string>} upperMaterial filters by different type of upper material used on garments (eg: lace)
		 * @param {Array<string>} volume filters by volume
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Array<Facet>} Facets response.
		 */
		FacetsGetByAgeGroupAndArticleIdAndActivationDateAndArticleModelIdAndAssortmentAreaAndBrandAndBrandfamilyAndCategoryAndColorAndDenAndFillingAndGenderAndHeelFormAndHeelHeightAndLengthAndOccasionAndPatternAndPriceAndSaleAndSeasonAndShaftHeightAndShaftWidthAndShirtCollarAndShoeFastenerAndShoeToecapAndShopAreaAndSizeAndSportsAndTechnologyAndTrouserRiseAndUpperMaterialAndVolumeAndFields(ageGroup: Array<string> | null | undefined, articleId: Array<string> | null | undefined, activationDate: Array<string> | null | undefined, articleModelId: Array<string> | null | undefined, assortmentArea: Array<string> | null | undefined, brand: Array<string> | null | undefined, brandfamily: Array<string> | null | undefined, category: Array<string> | null | undefined, color: Array<string> | null | undefined, den: Array<string> | null | undefined, filling: Array<string> | null | undefined, gender: Array<string> | null | undefined, heelForm: Array<string> | null | undefined, heelHeight: Array<string> | null | undefined, length: string | null | undefined, occasion: Array<string> | null | undefined, pattern: Array<string> | null | undefined, price: string | null | undefined, sale: Array<string> | null | undefined, season: Array<string> | null | undefined, shaftHeight: Array<string> | null | undefined, shaftWidth: Array<string> | null | undefined, shirtCollar: Array<string> | null | undefined, shoeFastener: Array<string> | null | undefined, shoeToecap: Array<string> | null | undefined, shopArea: Array<string> | null | undefined, size: string | null | undefined, sports: Array<string> | null | undefined, technology: Array<string> | null | undefined, trouserRise: Array<string> | null | undefined, upperMaterial: Array<string> | null | undefined, volume: Array<string> | null | undefined, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Facet>> {
			return this.http.get<Array<Facet>>(this.baseUri + 'facets?' + ageGroup?.map(z => `ageGroup=${encodeURIComponent(z)}`).join('&') + '&' + articleId?.map(z => `articleId=${encodeURIComponent(z)}`).join('&') + '&' + activationDate?.map(z => `activationDate=${encodeURIComponent(z)}`).join('&') + '&' + articleModelId?.map(z => `articleModelId=${encodeURIComponent(z)}`).join('&') + '&' + assortmentArea?.map(z => `assortmentArea=${encodeURIComponent(z)}`).join('&') + '&' + brand?.map(z => `brand=${encodeURIComponent(z)}`).join('&') + '&' + brandfamily?.map(z => `brandfamily=${encodeURIComponent(z)}`).join('&') + '&' + category?.map(z => `category=${encodeURIComponent(z)}`).join('&') + '&' + color?.map(z => `color=${encodeURIComponent(z)}`).join('&') + '&' + den?.map(z => `den=${encodeURIComponent(z)}`).join('&') + '&' + filling?.map(z => `filling=${encodeURIComponent(z)}`).join('&') + '&' + gender?.map(z => `gender=${encodeURIComponent(z)}`).join('&') + '&' + heelForm?.map(z => `heelForm=${encodeURIComponent(z)}`).join('&') + '&' + heelHeight?.map(z => `heelHeight=${encodeURIComponent(z)}`).join('&') + '&length=' + (length == null ? '' : encodeURIComponent(length)) + '&' + occasion?.map(z => `occasion=${encodeURIComponent(z)}`).join('&') + '&' + pattern?.map(z => `pattern=${encodeURIComponent(z)}`).join('&') + '&price=' + (price == null ? '' : encodeURIComponent(price)) + '&' + sale?.map(z => `sale=${encodeURIComponent(z)}`).join('&') + '&' + season?.map(z => `season=${encodeURIComponent(z)}`).join('&') + '&' + shaftHeight?.map(z => `shaftHeight=${encodeURIComponent(z)}`).join('&') + '&' + shaftWidth?.map(z => `shaftWidth=${encodeURIComponent(z)}`).join('&') + '&' + shirtCollar?.map(z => `shirtCollar=${encodeURIComponent(z)}`).join('&') + '&' + shoeFastener?.map(z => `shoeFastener=${encodeURIComponent(z)}`).join('&') + '&' + shoeToecap?.map(z => `shoeToecap=${encodeURIComponent(z)}`).join('&') + '&' + shopArea?.map(z => `shopArea=${encodeURIComponent(z)}`).join('&') + '&size=' + (size == null ? '' : encodeURIComponent(size)) + '&' + sports?.map(z => `sports=${encodeURIComponent(z)}`).join('&') + '&' + technology?.map(z => `technology=${encodeURIComponent(z)}`).join('&') + '&' + trouserRise?.map(z => `trouserRise=${encodeURIComponent(z)}`).join('&') + '&' + upperMaterial?.map(z => `upperMaterial=${encodeURIComponent(z)}`).join('&') + '&' + volume?.map(z => `volume=${encodeURIComponent(z)}`).join('&') + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Shop Filters
		 * Zalando API Filters Schema
		 * Get filters
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Array<Filter>} Filters response.
		 */
		FiltersGetByFields(fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Filter>> {
			return this.http.get<Array<Filter>>(this.baseUri + 'filters?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Single Filter by filterName
		 * Zalando API Filters Schema
		 * Get filters/{filterName}
		 * @param {string} filterName To get Filter by filterName.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Filter} Filters response.
		 */
		Filters_filterNameGetByFields(filterName: string, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Filter> {
			return this.http.get<Filter>(this.baseUri + 'filters/' + (filterName == null ? '' : encodeURIComponent(filterName)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Recommendations by articleId
		 * Zalando API Recommendations Schema
		 * Get recommendations/{articleIds}
		 * @param {Array<string>} articleIds To get Recommendations by articleIds.
		 * @param {string} maxResults To get maximum results of Recommendations by articleId.
		 * @param {Array<string>} fields Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.
		 * Example: id,name,brand.key,brand.name, units.id,units.size,units.price.formatted
		 * @return {Array<Recommendations_Article>} Recommendations response.
		 */
		Recommendations_articleIdsGetByMaxResultsAndFields(articleIds: Array<string>, maxResults: string | null | undefined, fields: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Recommendations_Article>> {
			return this.http.get<Array<Recommendations_Article>>(this.baseUri + 'recommendations/{articleIds}?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum Article_reviewsGetByArticleIdAndArticleModelIdAndMinStarRatingAndMaxStarRatingAndSortAndPageAndPageSizeAndFieldsSort { newest = 0, best = 1, worst = 2, most_helpful = 3 }

	export enum Article_reviewsGetByArticleIdAndArticleModelIdAndMinStarRatingAndMaxStarRatingAndSortAndPageAndPageSizeAndFieldsAccept_Language { 'da-DK' = 0, 'de-AT' = 1, 'de-CH' = 2, 'de-DE' = 3, 'en-GB' = 4, 'es-ES' = 5, 'fi-FI' = 6, 'fr-BE' = 7, 'fr-CH' = 8, 'fr-FR' = 9, 'it-IT' = 10, 'nl-BE' = 11, 'nl-NL' = 12, 'no-NO' = 13, 'pl-PL' = 14, 'sv-SE' = 15 }

	export enum ArticlesGetByArticleIdAndArticleModelIdAndArticleUnitIdAndActivationDateAndAgeGroupAndAssortmentAreaAndBrandAndBrandfamilyAndCategoryAndColorAndDenAndFillingAndFullTextAndGenderAndHeelFormAndHeelHeightAndLengthAndOccasionAndPatternAndPriceAndSaleAndSeasonAndShaftHeightAndShaftWidthAndShirtCollarAndShoeFastenerAndShoeToecapAndShopAreaAndSizeAndSportsAndTechnologyAndTrouserRiseAndUpperMaterialAndVolumeAndPageAndPageSizeAndSortAndFieldsSort { popularity = 0, activationdate = 1, pricedesc = 2, priceasc = 3, sale = 4 }

}

