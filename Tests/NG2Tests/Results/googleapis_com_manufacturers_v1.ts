import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * Attributes of the product. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116.
	 */
	export interface Attributes {

		/**
		 * The additional images of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#addlimage.
		 */
		additionalImageLink?: Array<Image>;

		/**
		 * The target age group of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#agegroup.
		 */
		ageGroup?: string | null;

		/**
		 * The brand name of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#brand.
		 */
		brand?: string | null;

		/**
		 * The capacity of a product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#capacity.
		 */
		capacity?: Capacity;

		/**
		 * The color of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#color.
		 */
		color?: string | null;

		/**
		 * The number of products in a single package. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#count.
		 */
		count?: Count;

		/**
		 * The description of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#description.
		 */
		description?: string | null;

		/**
		 * The disclosure date of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#disclosure.
		 */
		disclosureDate?: string | null;

		/** A list of excluded destinations. */
		excludedDestination?: Array<string>;

		/**
		 * The rich format description of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#featuredesc.
		 */
		featureDescription?: Array<FeatureDescription>;

		/**
		 * The flavor of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#flavor.
		 */
		flavor?: string | null;

		/**
		 * The format of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#format.
		 */
		format?: string | null;

		/**
		 * The target gender of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#gender.
		 */
		gender?: string | null;

		/**
		 * The Global Trade Item Number (GTIN) of the product. For more information,
		 * see https://support.google.com/manufacturers/answer/6124116#gtin.
		 */
		gtin?: Array<string>;

		/** An image. */
		imageLink?: Image;

		/** A list of included destinations. */
		includedDestination?: Array<string>;

		/**
		 * The item group id of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#itemgroupid.
		 */
		itemGroupId?: string | null;

		/**
		 * The material of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#material.
		 */
		material?: string | null;

		/**
		 * The Manufacturer Part Number (MPN) of the product. For more information,
		 * see https://support.google.com/manufacturers/answer/6124116#mpn.
		 */
		mpn?: string | null;

		/**
		 * The pattern of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#pattern.
		 */
		pattern?: string | null;

		/**
		 * The details of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#productdetail.
		 */
		productDetail?: Array<ProductDetail>;

		/**
		 * The name of the group of products related to the product. For more
		 * information, see
		 * https://support.google.com/manufacturers/answer/6124116#productline.
		 */
		productLine?: string | null;

		/**
		 * The canonical name of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#productname.
		 */
		productName?: string | null;

		/**
		 * The URL of the detail page of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#productpage.
		 */
		productPageUrl?: string | null;

		/**
		 * The type or category of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#producttype.
		 */
		productType?: Array<string>;

		/**
		 * The release date of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#release.
		 */
		releaseDate?: string | null;

		/**
		 * Rich product content. For more information, see
		 * https://support.google.com/manufacturers/answer/9389865
		 */
		richProductContent?: Array<string>;

		/**
		 * The scent of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#scent.
		 */
		scent?: string | null;

		/**
		 * The size of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#size.
		 */
		size?: string | null;

		/**
		 * The size system of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#sizesystem.
		 */
		sizeSystem?: string | null;

		/**
		 * The size type of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#sizetype.
		 */
		sizeType?: string | null;

		/** A price. */
		suggestedRetailPrice?: Price;

		/**
		 * The target client id. Should only be used in the accounts of the data
		 * partners.
		 */
		targetClientId?: string | null;

		/**
		 * The theme of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#theme.
		 */
		theme?: string | null;

		/**
		 * The title of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#title.
		 */
		title?: string | null;

		/**
		 * The videos of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#video.
		 */
		videoLink?: Array<string>;
	}

	/**
	 * Attributes of the product. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116.
	 */
	export interface AttributesFormProperties {

		/**
		 * The target age group of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#agegroup.
		 */
		ageGroup: FormControl<string | null | undefined>,

		/**
		 * The brand name of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#brand.
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * The color of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#color.
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * The description of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#description.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The disclosure date of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#disclosure.
		 */
		disclosureDate: FormControl<string | null | undefined>,

		/**
		 * The flavor of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#flavor.
		 */
		flavor: FormControl<string | null | undefined>,

		/**
		 * The format of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#format.
		 */
		format: FormControl<string | null | undefined>,

		/**
		 * The target gender of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#gender.
		 */
		gender: FormControl<string | null | undefined>,

		/**
		 * The item group id of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#itemgroupid.
		 */
		itemGroupId: FormControl<string | null | undefined>,

		/**
		 * The material of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#material.
		 */
		material: FormControl<string | null | undefined>,

		/**
		 * The Manufacturer Part Number (MPN) of the product. For more information,
		 * see https://support.google.com/manufacturers/answer/6124116#mpn.
		 */
		mpn: FormControl<string | null | undefined>,

		/**
		 * The pattern of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#pattern.
		 */
		pattern: FormControl<string | null | undefined>,

		/**
		 * The name of the group of products related to the product. For more
		 * information, see
		 * https://support.google.com/manufacturers/answer/6124116#productline.
		 */
		productLine: FormControl<string | null | undefined>,

		/**
		 * The canonical name of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#productname.
		 */
		productName: FormControl<string | null | undefined>,

		/**
		 * The URL of the detail page of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#productpage.
		 */
		productPageUrl: FormControl<string | null | undefined>,

		/**
		 * The release date of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#release.
		 */
		releaseDate: FormControl<string | null | undefined>,

		/**
		 * The scent of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#scent.
		 */
		scent: FormControl<string | null | undefined>,

		/**
		 * The size of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#size.
		 */
		size: FormControl<string | null | undefined>,

		/**
		 * The size system of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#sizesystem.
		 */
		sizeSystem: FormControl<string | null | undefined>,

		/**
		 * The size type of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#sizetype.
		 */
		sizeType: FormControl<string | null | undefined>,

		/**
		 * The target client id. Should only be used in the accounts of the data
		 * partners.
		 */
		targetClientId: FormControl<string | null | undefined>,

		/**
		 * The theme of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#theme.
		 */
		theme: FormControl<string | null | undefined>,

		/**
		 * The title of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#title.
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
			ageGroup: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disclosureDate: new FormControl<string | null | undefined>(undefined),
			flavor: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			itemGroupId: new FormControl<string | null | undefined>(undefined),
			material: new FormControl<string | null | undefined>(undefined),
			mpn: new FormControl<string | null | undefined>(undefined),
			pattern: new FormControl<string | null | undefined>(undefined),
			productLine: new FormControl<string | null | undefined>(undefined),
			productName: new FormControl<string | null | undefined>(undefined),
			productPageUrl: new FormControl<string | null | undefined>(undefined),
			releaseDate: new FormControl<string | null | undefined>(undefined),
			scent: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			sizeSystem: new FormControl<string | null | undefined>(undefined),
			sizeType: new FormControl<string | null | undefined>(undefined),
			targetClientId: new FormControl<string | null | undefined>(undefined),
			theme: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image. */
	export interface Image {

		/**
		 * The URL of the image. For crawled images, this is the provided URL. For
		 * uploaded images, this is a serving URL from Google if the image has been
		 * processed successfully.
		 */
		imageUrl?: string | null;

		/**
		 * The status of the image.
		 * @OutputOnly
		 */
		status?: ImageStatus | null;

		/**
		 * The type of the image, i.e., crawled or uploaded.
		 * @OutputOnly
		 */
		type?: ImageType | null;
	}

	/** An image. */
	export interface ImageFormProperties {

		/**
		 * The URL of the image. For crawled images, this is the provided URL. For
		 * uploaded images, this is a serving URL from Google if the image has been
		 * processed successfully.
		 */
		imageUrl: FormControl<string | null | undefined>,

		/**
		 * The status of the image.
		 * @OutputOnly
		 */
		status: FormControl<ImageStatus | null | undefined>,

		/**
		 * The type of the image, i.e., crawled or uploaded.
		 * @OutputOnly
		 */
		type: FormControl<ImageType | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			imageUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ImageStatus | null | undefined>(undefined),
			type: new FormControl<ImageType | null | undefined>(undefined),
		});

	}

	export enum ImageStatus { STATUS_UNSPECIFIED = 0, PENDING_PROCESSING = 1, PENDING_CRAWL = 2, OK = 3, ROBOTED = 4, XROBOTED = 5, CRAWL_ERROR = 6, PROCESSING_ERROR = 7, DECODING_ERROR = 8, TOO_BIG = 9, CRAWL_SKIPPED = 10, HOSTLOADED = 11, HTTP_404 = 12 }

	export enum ImageType { TYPE_UNSPECIFIED = 0, CRAWLED = 1, UPLOADED = 2 }


	/**
	 * The capacity of a product. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116#capacity.
	 */
	export interface Capacity {

		/** The unit of the capacity, i.e., MB, GB, or TB. */
		unit?: string | null;

		/** The numeric value of the capacity. */
		value?: string | null;
	}

	/**
	 * The capacity of a product. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116#capacity.
	 */
	export interface CapacityFormProperties {

		/** The unit of the capacity, i.e., MB, GB, or TB. */
		unit: FormControl<string | null | undefined>,

		/** The numeric value of the capacity. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCapacityFormGroup() {
		return new FormGroup<CapacityFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The number of products in a single package. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116#count.
	 */
	export interface Count {

		/** The unit in which these products are counted. */
		unit?: string | null;

		/** The numeric value of the number of products in a package. */
		value?: string | null;
	}

	/**
	 * The number of products in a single package. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116#count.
	 */
	export interface CountFormProperties {

		/** The unit in which these products are counted. */
		unit: FormControl<string | null | undefined>,

		/** The numeric value of the number of products in a package. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCountFormGroup() {
		return new FormGroup<CountFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A feature description of the product. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116#featuredesc.
	 */
	export interface FeatureDescription {

		/** A short description of the feature. */
		headline?: string | null;

		/** An image. */
		image?: Image;

		/** A detailed description of the feature. */
		text?: string | null;
	}

	/**
	 * A feature description of the product. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116#featuredesc.
	 */
	export interface FeatureDescriptionFormProperties {

		/** A short description of the feature. */
		headline: FormControl<string | null | undefined>,

		/** A detailed description of the feature. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateFeatureDescriptionFormGroup() {
		return new FormGroup<FeatureDescriptionFormProperties>({
			headline: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A product detail of the product. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116#productdetail.
	 */
	export interface ProductDetail {

		/** The name of the attribute. */
		attributeName?: string | null;

		/** The value of the attribute. */
		attributeValue?: string | null;

		/** A short section name that can be reused between multiple product details. */
		sectionName?: string | null;
	}

	/**
	 * A product detail of the product. For more information, see
	 * https://support.google.com/manufacturers/answer/6124116#productdetail.
	 */
	export interface ProductDetailFormProperties {

		/** The name of the attribute. */
		attributeName: FormControl<string | null | undefined>,

		/** The value of the attribute. */
		attributeValue: FormControl<string | null | undefined>,

		/** A short section name that can be reused between multiple product details. */
		sectionName: FormControl<string | null | undefined>,
	}
	export function CreateProductDetailFormGroup() {
		return new FormGroup<ProductDetailFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			attributeValue: new FormControl<string | null | undefined>(undefined),
			sectionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A price. */
	export interface Price {

		/** The numeric value of the price. */
		amount?: string | null;

		/** The currency in which the price is denoted. */
		currency?: string | null;
	}

	/** A price. */
	export interface PriceFormProperties {

		/** The numeric value of the price. */
		amount: FormControl<string | null | undefined>,

		/** The currency in which the price is denoted. */
		currency: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The destination status. */
	export interface DestinationStatus {

		/** The name of the destination. */
		destination?: string | null;

		/** The status of the destination. */
		status?: DestinationStatusStatus | null;
	}

	/** The destination status. */
	export interface DestinationStatusFormProperties {

		/** The name of the destination. */
		destination: FormControl<string | null | undefined>,

		/** The status of the destination. */
		status: FormControl<DestinationStatusStatus | null | undefined>,
	}
	export function CreateDestinationStatusFormGroup() {
		return new FormGroup<DestinationStatusFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DestinationStatusStatus | null | undefined>(undefined),
		});

	}

	export enum DestinationStatusStatus { UNKNOWN = 0, ACTIVE = 1, PENDING = 2, DISAPPROVED = 3 }


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Product issue. */
	export interface Issue {

		/**
		 * If present, the attribute that triggered the issue. For more information
		 * about attributes, see
		 * https://support.google.com/manufacturers/answer/6124116.
		 */
		attribute?: string | null;

		/** Longer description of the issue focused on how to resolve it. */
		description?: string | null;

		/** The destination this issue applies to. */
		destination?: string | null;

		/** What needs to happen to resolve the issue. */
		resolution?: IssueResolution | null;

		/** The severity of the issue. */
		severity?: IssueSeverity | null;

		/** The timestamp when this issue appeared. */
		timestamp?: string | null;

		/** Short title describing the nature of the issue. */
		title?: string | null;

		/**
		 * The server-generated type of the issue, for example,
		 * “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.
		 */
		type?: string | null;
	}

	/** Product issue. */
	export interface IssueFormProperties {

		/**
		 * If present, the attribute that triggered the issue. For more information
		 * about attributes, see
		 * https://support.google.com/manufacturers/answer/6124116.
		 */
		attribute: FormControl<string | null | undefined>,

		/** Longer description of the issue focused on how to resolve it. */
		description: FormControl<string | null | undefined>,

		/** The destination this issue applies to. */
		destination: FormControl<string | null | undefined>,

		/** What needs to happen to resolve the issue. */
		resolution: FormControl<IssueResolution | null | undefined>,

		/** The severity of the issue. */
		severity: FormControl<IssueSeverity | null | undefined>,

		/** The timestamp when this issue appeared. */
		timestamp: FormControl<string | null | undefined>,

		/** Short title describing the nature of the issue. */
		title: FormControl<string | null | undefined>,

		/**
		 * The server-generated type of the issue, for example,
		 * “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIssueFormGroup() {
		return new FormGroup<IssueFormProperties>({
			attribute: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			resolution: new FormControl<IssueResolution | null | undefined>(undefined),
			severity: new FormControl<IssueSeverity | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IssueResolution { RESOLUTION_UNSPECIFIED = 0, USER_ACTION = 1, PENDING_PROCESSING = 2 }

	export enum IssueSeverity { SEVERITY_UNSPECIFIED = 0, ERROR = 1, WARNING = 2, INFO = 3 }

	export interface ListProductsResponse {

		/** The token for the retrieval of the next page of product statuses. */
		nextPageToken?: string | null;

		/** List of the products. */
		products?: Array<Product>;
	}
	export interface ListProductsResponseFormProperties {

		/** The token for the retrieval of the next page of product statuses. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProductsResponseFormGroup() {
		return new FormGroup<ListProductsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Product data. */
	export interface Product {

		/**
		 * Attributes of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116.
		 */
		attributes?: Attributes;

		/**
		 * The content language of the product as a two-letter ISO 639-1 language code
		 * (for example, en).
		 */
		contentLanguage?: string | null;

		/** The status of the destinations. */
		destinationStatuses?: Array<DestinationStatus>;

		/** A server-generated list of issues associated with the product. */
		issues?: Array<Issue>;

		/**
		 * Name in the format `{target_country}:{content_language}:{product_id}`.
		 * `target_country`   - The target country of the product as a CLDR territory
		 * code (for example, US).
		 * `content_language` - The content language of the product as a two-letter
		 * ISO 639-1 language code (for example, en).
		 * `product_id`     -   The ID of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#id.
		 */
		name?: string | null;

		/**
		 * Parent ID in the format `accounts/{account_id}`.
		 * `account_id` - The ID of the Manufacturer Center account.
		 */
		parent?: string | null;

		/**
		 * The ID of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#id.
		 */
		productId?: string | null;

		/**
		 * The target country of the product as a CLDR territory code (for example,
		 * US).
		 */
		targetCountry?: string | null;
	}

	/** Product data. */
	export interface ProductFormProperties {

		/**
		 * The content language of the product as a two-letter ISO 639-1 language code
		 * (for example, en).
		 */
		contentLanguage: FormControl<string | null | undefined>,

		/**
		 * Name in the format `{target_country}:{content_language}:{product_id}`.
		 * `target_country`   - The target country of the product as a CLDR territory
		 * code (for example, US).
		 * `content_language` - The content language of the product as a two-letter
		 * ISO 639-1 language code (for example, en).
		 * `product_id`     -   The ID of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#id.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Parent ID in the format `accounts/{account_id}`.
		 * `account_id` - The ID of the Manufacturer Center account.
		 */
		parent: FormControl<string | null | undefined>,

		/**
		 * The ID of the product. For more information, see
		 * https://support.google.com/manufacturers/answer/6124116#id.
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * The target country of the product as a CLDR territory code (for example,
		 * US).
		 */
		targetCountry: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the products in a Manufacturer Center account.
		 * Get v1/{parent}/products
		 * @param {string} parent Parent ID in the format `accounts/{account_id}`.
		 * `account_id` - The ID of the Manufacturer Center account.
		 * @param {Array<string>} include The information to be included in the response. Only sections listed here
		 * will be returned.
		 * @param {number} pageSize Maximum number of product statuses to return in the response, used for
		 * paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Manufacturers_accounts_products_list(parent: string, include: Array<string> | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the product from a Manufacturer Center account.
		 * Delete v1/{parent}/products/{name}
		 * @param {string} parent Parent ID in the format `accounts/{account_id}`.
		 * `account_id` - The ID of the Manufacturer Center account.
		 * @param {string} name Name in the format `{target_country}:{content_language}:{product_id}`.
		 * `target_country`   - The target country of the product as a CLDR territory
		 *                      code (for example, US).
		 * `content_language` - The content language of the product as a two-letter
		 *                      ISO 639-1 language code (for example, en).
		 * `product_id`     -   The ID of the product. For more information, see
		 *                      https://support.google.com/manufacturers/answer/6124116#id.
		 * @return {void} Successful response
		 */
		Manufacturers_accounts_products_delete(parent: string, name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the product from a Manufacturer Center account, including product
		 * issues.
		 * A recently updated product takes around 15 minutes to process. Changes are
		 * only visible after it has been processed. While some issues may be
		 * available once the product has been processed, other issues may take days
		 * to appear.
		 * Get v1/{parent}/products/{name}
		 * @param {string} parent Parent ID in the format `accounts/{account_id}`.
		 * `account_id` - The ID of the Manufacturer Center account.
		 * @param {string} name Name in the format `{target_country}:{content_language}:{product_id}`.
		 * `target_country`   - The target country of the product as a CLDR territory
		 *                      code (for example, US).
		 * `content_language` - The content language of the product as a two-letter
		 *                      ISO 639-1 language code (for example, en).
		 * `product_id`     -   The ID of the product. For more information, see
		 *                      https://support.google.com/manufacturers/answer/6124116#id.
		 * @param {Array<string>} include The information to be included in the response. Only sections listed here
		 * will be returned.
		 * @return {void} Successful response
		 */
		Manufacturers_accounts_products_get(parent: string, name: string, include: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products/' + (name == null ? '' : encodeURIComponent(name)) + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts or updates the attributes of the product in a Manufacturer Center
		 * account.
		 * Creates a product with the provided attributes. If the product already
		 * exists, then all attributes are replaced with the new ones. The checks at
		 * upload time are minimal. All required attributes need to be present for a
		 * product to be valid. Issues may show up later after the API has accepted a
		 * new upload for a product and it is possible to overwrite an existing valid
		 * product with an invalid product. To detect this, you should retrieve the
		 * product and check it for issues once the new version is available.
		 * Uploaded attributes first need to be processed before they can be
		 * retrieved. Until then, new products will be unavailable, and retrieval
		 * of previously uploaded products will return the original state of the
		 * product.
		 * Put v1/{parent}/products/{name}
		 * @param {string} parent Parent ID in the format `accounts/{account_id}`.
		 * `account_id` - The ID of the Manufacturer Center account.
		 * @param {string} name Name in the format `{target_country}:{content_language}:{product_id}`.
		 * `target_country`   - The target country of the product as a CLDR territory
		 *                      code (for example, US).
		 * `content_language` - The content language of the product as a two-letter
		 *                      ISO 639-1 language code (for example, en).
		 * `product_id`     -   The ID of the product. For more information, see
		 *                      https://support.google.com/manufacturers/answer/6124116#id.
		 * @return {void} Successful response
		 */
		Manufacturers_accounts_products_update(parent: string, name: string, requestBody: Attributes): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

