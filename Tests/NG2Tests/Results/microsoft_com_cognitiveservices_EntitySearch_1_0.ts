import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Airport {
		iataCode?: string | null;
		icaoCode?: string | null;
	}
	export interface AirportFormProperties {
		iataCode: FormControl<string | null | undefined>,
		icaoCode: FormControl<string | null | undefined>,
	}
	export function CreateAirportFormGroup() {
		return new FormGroup<AirportFormProperties>({
			iataCode: new FormControl<string | null | undefined>(undefined),
			icaoCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Answer {
	}
	export interface AnswerFormProperties {
	}
	export function CreateAnswerFormGroup() {
		return new FormGroup<AnswerFormProperties>({
		});

	}

	export interface CivicStructure {
	}
	export interface CivicStructureFormProperties {
	}
	export function CreateCivicStructureFormGroup() {
		return new FormGroup<CivicStructureFormProperties>({
		});

	}

	export interface ContractualRulesAttribution {

		/** A Boolean value that determines whether the contents of the rule must be placed in close proximity to the field that the rule applies to. If true, the contents must be placed in close proximity. If false, or this field does not exist, the contents may be placed at the caller's discretion. */
		mustBeCloseToContent?: boolean | null;
	}
	export interface ContractualRulesAttributionFormProperties {

		/** A Boolean value that determines whether the contents of the rule must be placed in close proximity to the field that the rule applies to. If true, the contents must be placed in close proximity. If false, or this field does not exist, the contents may be placed at the caller's discretion. */
		mustBeCloseToContent: FormControl<boolean | null | undefined>,
	}
	export function CreateContractualRulesAttributionFormGroup() {
		return new FormGroup<ContractualRulesAttributionFormProperties>({
			mustBeCloseToContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ContractualRulesContractualRule {

		/** Required */
		_type: string;

		/** The name of the field that the rule applies to. */
		targetPropertyName?: string | null;
	}
	export interface ContractualRulesContractualRuleFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,

		/** The name of the field that the rule applies to. */
		targetPropertyName: FormControl<string | null | undefined>,
	}
	export function CreateContractualRulesContractualRuleFormGroup() {
		return new FormGroup<ContractualRulesContractualRuleFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetPropertyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a contractual rule for license attribution. */
	export interface ContractualRulesLicenseAttribution {

		/** Defines the license under which the text or photo may be used. */
		license?: License;

		/** The license to display next to the targeted field. */
		licenseNotice?: string | null;
	}

	/** Defines a contractual rule for license attribution. */
	export interface ContractualRulesLicenseAttributionFormProperties {

		/** The license to display next to the targeted field. */
		licenseNotice: FormControl<string | null | undefined>,
	}
	export function CreateContractualRulesLicenseAttributionFormGroup() {
		return new FormGroup<ContractualRulesLicenseAttributionFormProperties>({
			licenseNotice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the license under which the text or photo may be used. */
	export interface License {
	}

	/** Defines the license under which the text or photo may be used. */
	export interface LicenseFormProperties {
	}
	export function CreateLicenseFormGroup() {
		return new FormGroup<LicenseFormProperties>({
		});

	}


	/** Defines a contractual rule for link attribution. */
	export interface ContractualRulesLinkAttribution {

		/** Indicates whether this provider's attribution is optional. */
		optionalForListDisplay?: boolean | null;

		/**
		 * The attribution text.
		 * Required
		 */
		text: string;

		/**
		 * The URL to the provider's website. Use text and URL to create the hyperlink.
		 * Required
		 */
		url: string;
	}

	/** Defines a contractual rule for link attribution. */
	export interface ContractualRulesLinkAttributionFormProperties {

		/** Indicates whether this provider's attribution is optional. */
		optionalForListDisplay: FormControl<boolean | null | undefined>,

		/**
		 * The attribution text.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The URL to the provider's website. Use text and URL to create the hyperlink.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateContractualRulesLinkAttributionFormGroup() {
		return new FormGroup<ContractualRulesLinkAttributionFormProperties>({
			optionalForListDisplay: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a contractual rule for media attribution. */
	export interface ContractualRulesMediaAttribution {

		/** The URL that you use to create of hyperlink of the media content. For example, if the target is an image, you would use the URL to make the image clickable. */
		url?: string | null;
	}

	/** Defines a contractual rule for media attribution. */
	export interface ContractualRulesMediaAttributionFormProperties {

		/** The URL that you use to create of hyperlink of the media content. For example, if the target is an image, you would use the URL to make the image clickable. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateContractualRulesMediaAttributionFormGroup() {
		return new FormGroup<ContractualRulesMediaAttributionFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a contractual rule for text attribution. */
	export interface ContractualRulesTextAttribution {

		/** Indicates whether this provider's attribution is optional. */
		optionalForListDisplay?: boolean | null;

		/**
		 * The attribution text. Text attribution applies to the entity as a whole and should be displayed immediately following the entity presentation. If there are multiple text or link attribution rules that do not specify a target, you should concatenate them and display them using a "Data from:" label.
		 * Required
		 */
		text: string;
	}

	/** Defines a contractual rule for text attribution. */
	export interface ContractualRulesTextAttributionFormProperties {

		/** Indicates whether this provider's attribution is optional. */
		optionalForListDisplay: FormControl<boolean | null | undefined>,

		/**
		 * The attribution text. Text attribution applies to the entity as a whole and should be displayed immediately following the entity presentation. If there are multiple text or link attribution rules that do not specify a target, you should concatenate them and display them using a "Data from:" label.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateContractualRulesTextAttributionFormGroup() {
		return new FormGroup<ContractualRulesTextAttributionFormProperties>({
			optionalForListDisplay: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreativeWork {

		/** The source of the creative work. */
		provider?: Array<Thing>;
		text?: string | null;

		/** The URL to a thumbnail of the item. */
		thumbnailUrl?: string | null;
	}
	export interface CreativeWorkFormProperties {
		text: FormControl<string | null | undefined>,

		/** The URL to a thumbnail of the item. */
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreativeWorkFormGroup() {
		return new FormGroup<CreativeWorkFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Thing {

		/** An ID that uniquely identifies this item. */
		bingId?: string | null;

		/** A short description of the item. */
		description?: string | null;

		/** Defines additional information about an entity such as type hints. */
		entityPresentationInfo?: EntitiesEntityPresentationInfo;

		/** Defines an image */
		image?: ImageObject;

		/** The name of the thing represented by this object. */
		name?: string | null;

		/** The URL to get more information about the thing represented by this object. */
		url?: string | null;
	}
	export interface ThingFormProperties {

		/** An ID that uniquely identifies this item. */
		bingId: FormControl<string | null | undefined>,

		/** A short description of the item. */
		description: FormControl<string | null | undefined>,

		/** The name of the thing represented by this object. */
		name: FormControl<string | null | undefined>,

		/** The URL to get more information about the thing represented by this object. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateThingFormGroup() {
		return new FormGroup<ThingFormProperties>({
			bingId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines additional information about an entity such as type hints. */
	export interface EntitiesEntityPresentationInfo {

		/**
		 * The supported scenario.
		 * Required
		 */
		entityScenario: EntitiesEntityPresentationInfoEntityScenario;

		/** A display version of the entity hint. For example, if entityTypeHints is Artist, this field may be set to American Singer. */
		entityTypeDisplayHint?: string | null;

		/** A list of hints that indicate the entity's type. The list could contain a single hint such as Movie or a list of hints such as Place, LocalBusiness, Restaurant. Each successive hint in the array narrows the entity's type. */
		entityTypeHints?: Array<string>;
	}

	/** Defines additional information about an entity such as type hints. */
	export interface EntitiesEntityPresentationInfoFormProperties {

		/**
		 * The supported scenario.
		 * Required
		 */
		entityScenario: FormControl<EntitiesEntityPresentationInfoEntityScenario | null | undefined>,

		/** A display version of the entity hint. For example, if entityTypeHints is Artist, this field may be set to American Singer. */
		entityTypeDisplayHint: FormControl<string | null | undefined>,
	}
	export function CreateEntitiesEntityPresentationInfoFormGroup() {
		return new FormGroup<EntitiesEntityPresentationInfoFormProperties>({
			entityScenario: new FormControl<EntitiesEntityPresentationInfoEntityScenario | null | undefined>(undefined, [Validators.required]),
			entityTypeDisplayHint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EntitiesEntityPresentationInfoEntityScenario { DominantEntity = 'DominantEntity', DisambiguationItem = 'DisambiguationItem', ListItem = 'ListItem' }


	/** Defines an image */
	export interface ImageObject {

		/** Defines an image */
		thumbnail?: ImageObject;
	}

	/** Defines an image */
	export interface ImageObjectFormProperties {
	}
	export function CreateImageObjectFormGroup() {
		return new FormGroup<ImageObjectFormProperties>({
		});

	}

	export interface EntertainmentBusiness {
	}
	export interface EntertainmentBusinessFormProperties {
	}
	export function CreateEntertainmentBusinessFormGroup() {
		return new FormGroup<EntertainmentBusinessFormProperties>({
		});

	}


	/** Defines an entity answer. */
	export interface Entities {

		/** The supported query scenario. This field is set to DominantEntity or DisambiguationItem. The field is set to DominantEntity if Bing determines that only a single entity satisfies the request. For example, a book, movie, person, or attraction. If multiple entities could satisfy the request, the field is set to DisambiguationItem. For example, if the request uses the generic title of a movie franchise, the entity's type would likely be DisambiguationItem. But, if the request specifies a specific title from the franchise, the entity's type would likely be DominantEntity. */
		queryScenario?: EntitiesQueryScenario | null;

		/**
		 * A list of entities.
		 * Required
		 */
		value: Array<Thing>;
	}

	/** Defines an entity answer. */
	export interface EntitiesFormProperties {

		/** The supported query scenario. This field is set to DominantEntity or DisambiguationItem. The field is set to DominantEntity if Bing determines that only a single entity satisfies the request. For example, a book, movie, person, or attraction. If multiple entities could satisfy the request, the field is set to DisambiguationItem. For example, if the request uses the generic title of a movie franchise, the entity's type would likely be DisambiguationItem. But, if the request specifies a specific title from the franchise, the entity's type would likely be DominantEntity. */
		queryScenario: FormControl<EntitiesQueryScenario | null | undefined>,
	}
	export function CreateEntitiesFormGroup() {
		return new FormGroup<EntitiesFormProperties>({
			queryScenario: new FormControl<EntitiesQueryScenario | null | undefined>(undefined),
		});

	}

	export enum EntitiesQueryScenario { DominantEntity = 'DominantEntity', DominantEntityWithDisambiguation = 'DominantEntityWithDisambiguation', Disambiguation = 'Disambiguation', List = 'List', ListWithPivot = 'ListWithPivot' }


	/** Defines the error that occurred. */
	export interface Error {

		/**
		 * The error code that identifies the category of error.
		 * Required
		 */
		code: ErrorCode;

		/**
		 * A description of the error.
		 * Required
		 */
		message: string;

		/** A description that provides additional information about the error. */
		moreDetails?: string | null;

		/** The parameter in the request that caused the error. */
		parameter?: string | null;

		/** The error code that further helps to identify the error. */
		subCode?: ErrorSubCode | null;

		/** The parameter's value in the request that was not valid. */
		value?: string | null;
	}

	/** Defines the error that occurred. */
	export interface ErrorFormProperties {

		/**
		 * The error code that identifies the category of error.
		 * Required
		 */
		code: FormControl<ErrorCode | null | undefined>,

		/**
		 * A description of the error.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A description that provides additional information about the error. */
		moreDetails: FormControl<string | null | undefined>,

		/** The parameter in the request that caused the error. */
		parameter: FormControl<string | null | undefined>,

		/** The error code that further helps to identify the error. */
		subCode: FormControl<ErrorSubCode | null | undefined>,

		/** The parameter's value in the request that was not valid. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			moreDetails: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			subCode: new FormControl<ErrorSubCode | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { None = 'None', ServerError = 'ServerError', InvalidRequest = 'InvalidRequest', RateLimitExceeded = 'RateLimitExceeded', InvalidAuthorization = 'InvalidAuthorization', InsufficientAuthorization = 'InsufficientAuthorization' }

	export enum ErrorSubCode { UnexpectedError = 'UnexpectedError', ResourceError = 'ResourceError', NotImplemented = 'NotImplemented', ParameterMissing = 'ParameterMissing', ParameterInvalidValue = 'ParameterInvalidValue', HttpNotAllowed = 'HttpNotAllowed', Blocked = 'Blocked', AuthorizationMissing = 'AuthorizationMissing', AuthorizationRedundancy = 'AuthorizationRedundancy', AuthorizationDisabled = 'AuthorizationDisabled', AuthorizationExpired = 'AuthorizationExpired' }


	/** The top-level response that represents a failed request. */
	export interface ErrorResponse {

		/**
		 * A list of errors that describe the reasons why the request failed.
		 * Required
		 */
		errors: Array<Error>;
	}

	/** The top-level response that represents a failed request. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}

	export interface FoodEstablishment {
	}
	export interface FoodEstablishmentFormProperties {
	}
	export function CreateFoodEstablishmentFormGroup() {
		return new FormGroup<FoodEstablishmentFormProperties>({
		});

	}

	export interface Hotel {
		amenities?: Array<string>;
		hotelClass?: string | null;
	}
	export interface HotelFormProperties {
		hotelClass: FormControl<string | null | undefined>,
	}
	export function CreateHotelFormGroup() {
		return new FormGroup<HotelFormProperties>({
			hotelClass: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the identity of a resource. */
	export interface Identifiable {

		/** A String identifier. */
		id?: string | null;
	}

	/** Defines the identity of a resource. */
	export interface IdentifiableFormProperties {

		/** A String identifier. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateIdentifiableFormGroup() {
		return new FormGroup<IdentifiableFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Intangible {
	}
	export interface IntangibleFormProperties {
	}
	export function CreateIntangibleFormGroup() {
		return new FormGroup<IntangibleFormProperties>({
		});

	}

	export interface LocalBusiness {
		isPermanentlyClosed?: boolean | null;
		panoramas?: Array<ImageObject>;

		/** $$. */
		priceRange?: string | null;
		tagLine?: string | null;
	}
	export interface LocalBusinessFormProperties {
		isPermanentlyClosed: FormControl<boolean | null | undefined>,

		/** $$. */
		priceRange: FormControl<string | null | undefined>,
		tagLine: FormControl<string | null | undefined>,
	}
	export function CreateLocalBusinessFormGroup() {
		return new FormGroup<LocalBusinessFormProperties>({
			isPermanentlyClosed: new FormControl<boolean | null | undefined>(undefined),
			priceRange: new FormControl<string | null | undefined>(undefined),
			tagLine: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LodgingBusiness {
	}
	export interface LodgingBusinessFormProperties {
	}
	export function CreateLodgingBusinessFormGroup() {
		return new FormGroup<LodgingBusinessFormProperties>({
		});

	}

	export interface MediaObject {

		/** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
		contentUrl?: string | null;

		/**
		 * The height of the source media object, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** URL of the page that hosts the media object. */
		hostPageUrl?: string | null;

		/**
		 * The width of the source media object, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface MediaObjectFormProperties {

		/** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
		contentUrl: FormControl<string | null | undefined>,

		/**
		 * The height of the source media object, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** URL of the page that hosts the media object. */
		hostPageUrl: FormControl<string | null | undefined>,

		/**
		 * The width of the source media object, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMediaObjectFormGroup() {
		return new FormGroup<MediaObjectFormProperties>({
			contentUrl: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			hostPageUrl: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MovieTheater {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		screenCount?: number | null;
	}
	export interface MovieTheaterFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		screenCount: FormControl<number | null | undefined>,
	}
	export function CreateMovieTheaterFormGroup() {
		return new FormGroup<MovieTheaterFormProperties>({
			screenCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines an organization. */
	export interface Organization {
	}

	/** Defines an organization. */
	export interface OrganizationFormProperties {
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
		});

	}


	/** Defines information about a local entity, such as a restaurant or hotel. */
	export interface Place {

		/** Defines a postal address. */
		address?: PostalAddress;

		/** The entity's telephone number */
		telephone?: string | null;
	}

	/** Defines information about a local entity, such as a restaurant or hotel. */
	export interface PlaceFormProperties {

		/** The entity's telephone number */
		telephone: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			telephone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a postal address. */
	export interface PostalAddress {

		/** The country/region where the street address is located. This could be the two-letter ISO code. For example, US, or the full name, United States. */
		addressCountry?: string | null;

		/** The city where the street address is located. For example, Seattle. */
		addressLocality?: string | null;

		/** The state or province code where the street address is located. This could be the two-letter code. For example, WA, or the full name , Washington. */
		addressRegion?: string | null;

		/** Region Abbreviation. For example, WA. */
		addressRegionAbbreviation?: string | null;
		addressSubregion?: string | null;

		/** The two letter ISO code of this country. For example, US. */
		countryIso?: string | null;

		/** The neighborhood where the street address is located. For example, Westlake. */
		neighborhood?: string | null;
		postOfficeBoxNumber?: string | null;

		/** The zip code or postal code where the street address is located. For example, 98052. */
		postalCode?: string | null;
		streetAddress?: string | null;

		/** The complete address. For example, 2100 Westlake Ave N, Bellevue, WA 98052. */
		text?: string | null;
	}

	/** Defines a postal address. */
	export interface PostalAddressFormProperties {

		/** The country/region where the street address is located. This could be the two-letter ISO code. For example, US, or the full name, United States. */
		addressCountry: FormControl<string | null | undefined>,

		/** The city where the street address is located. For example, Seattle. */
		addressLocality: FormControl<string | null | undefined>,

		/** The state or province code where the street address is located. This could be the two-letter code. For example, WA, or the full name , Washington. */
		addressRegion: FormControl<string | null | undefined>,

		/** Region Abbreviation. For example, WA. */
		addressRegionAbbreviation: FormControl<string | null | undefined>,
		addressSubregion: FormControl<string | null | undefined>,

		/** The two letter ISO code of this country. For example, US. */
		countryIso: FormControl<string | null | undefined>,

		/** The neighborhood where the street address is located. For example, Westlake. */
		neighborhood: FormControl<string | null | undefined>,
		postOfficeBoxNumber: FormControl<string | null | undefined>,

		/** The zip code or postal code where the street address is located. For example, 98052. */
		postalCode: FormControl<string | null | undefined>,
		streetAddress: FormControl<string | null | undefined>,

		/** The complete address. For example, 2100 Westlake Ave N, Bellevue, WA 98052. */
		text: FormControl<string | null | undefined>,
	}
	export function CreatePostalAddressFormGroup() {
		return new FormGroup<PostalAddressFormProperties>({
			addressCountry: new FormControl<string | null | undefined>(undefined),
			addressLocality: new FormControl<string | null | undefined>(undefined),
			addressRegion: new FormControl<string | null | undefined>(undefined),
			addressRegionAbbreviation: new FormControl<string | null | undefined>(undefined),
			addressSubregion: new FormControl<string | null | undefined>(undefined),
			countryIso: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			postOfficeBoxNumber: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			streetAddress: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a local entity answer. */
	export interface Places {

		/**
		 * A list of local entities, such as restaurants or hotels.
		 * Required
		 */
		value: Array<Thing>;
	}

	/** Defines a local entity answer. */
	export interface PlacesFormProperties {
	}
	export function CreatePlacesFormGroup() {
		return new FormGroup<PlacesFormProperties>({
		});

	}


	/** Defines the query context that Bing used for the request. */
	export interface QueryContext {

		/** A Boolean value that indicates whether the specified query has adult intent. The value is true if the query has adult intent; otherwise, false. */
		adultIntent?: boolean | null;

		/** The query string to use to force Bing to use the original string. For example, if the query string is "saling downwind", the override query string will be "+saling downwind". Remember to encode the query string which results in "%2Bsaling+downwind". This field is included only if the original query string contains a spelling mistake. */
		alterationOverrideQuery?: string | null;

		/** The query string used by Bing to perform the query. Bing uses the altered query string if the original query string contained spelling mistakes. For example, if the query string is "saling downwind", the altered query string will be "sailing downwind". This field is included only if the original query string contains a spelling mistake. */
		alteredQuery?: string | null;

		/** A Boolean value that indicates whether Bing requires the user's location to provide accurate results. If you specified the user's location by using the X-MSEdge-ClientIP and X-Search-Location headers, you can ignore this field. For location aware queries, such as "today's weather" or "restaurants near me" that need the user's location to provide accurate results, this field is set to true. For location aware queries that include the location (for example, "Seattle weather"), this field is set to false. This field is also set to false for queries that are not location aware, such as "best sellers". */
		askUserForLocation?: boolean | null;

		/**
		 * The query string as specified in the request.
		 * Required
		 */
		originalQuery: string;
	}

	/** Defines the query context that Bing used for the request. */
	export interface QueryContextFormProperties {

		/** A Boolean value that indicates whether the specified query has adult intent. The value is true if the query has adult intent; otherwise, false. */
		adultIntent: FormControl<boolean | null | undefined>,

		/** The query string to use to force Bing to use the original string. For example, if the query string is "saling downwind", the override query string will be "+saling downwind". Remember to encode the query string which results in "%2Bsaling+downwind". This field is included only if the original query string contains a spelling mistake. */
		alterationOverrideQuery: FormControl<string | null | undefined>,

		/** The query string used by Bing to perform the query. Bing uses the altered query string if the original query string contained spelling mistakes. For example, if the query string is "saling downwind", the altered query string will be "sailing downwind". This field is included only if the original query string contains a spelling mistake. */
		alteredQuery: FormControl<string | null | undefined>,

		/** A Boolean value that indicates whether Bing requires the user's location to provide accurate results. If you specified the user's location by using the X-MSEdge-ClientIP and X-Search-Location headers, you can ignore this field. For location aware queries, such as "today's weather" or "restaurants near me" that need the user's location to provide accurate results, this field is set to true. For location aware queries that include the location (for example, "Seattle weather"), this field is set to false. This field is also set to false for queries that are not location aware, such as "best sellers". */
		askUserForLocation: FormControl<boolean | null | undefined>,

		/**
		 * The query string as specified in the request.
		 * Required
		 */
		originalQuery: FormControl<string | null | undefined>,
	}
	export function CreateQueryContextFormGroup() {
		return new FormGroup<QueryContextFormProperties>({
			adultIntent: new FormControl<boolean | null | undefined>(undefined),
			alterationOverrideQuery: new FormControl<string | null | undefined>(undefined),
			alteredQuery: new FormControl<string | null | undefined>(undefined),
			askUserForLocation: new FormControl<boolean | null | undefined>(undefined),
			originalQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface Response {

		/** A list of rules that you must adhere to if you display the item. */
		contractualRules?: Array<ContractualRulesContractualRule>;

		/** The URL To Bing's search result for this item. */
		webSearchUrl?: string | null;
	}

	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface ResponseFormProperties {

		/** The URL To Bing's search result for this item. */
		webSearchUrl: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			webSearchUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseBase {

		/** Required */
		_type: string;
	}
	export interface ResponseBaseFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,
	}
	export function CreateResponseBaseFormGroup() {
		return new FormGroup<ResponseBaseFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Restaurant {
		acceptsReservations?: boolean | null;
		menuUrl?: string | null;
		reservationUrl?: string | null;
		servesCuisine?: Array<string>;
	}
	export interface RestaurantFormProperties {
		acceptsReservations: FormControl<boolean | null | undefined>,
		menuUrl: FormControl<string | null | undefined>,
		reservationUrl: FormControl<string | null | undefined>,
	}
	export function CreateRestaurantFormGroup() {
		return new FormGroup<RestaurantFormProperties>({
			acceptsReservations: new FormControl<boolean | null | undefined>(undefined),
			menuUrl: new FormControl<string | null | undefined>(undefined),
			reservationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the top-level object that the response includes when the request succeeds. */
	export interface SearchResponse {

		/** Defines an entity answer. */
		entities?: Entities;

		/** Defines a local entity answer. */
		places?: Places;

		/** Defines the query context that Bing used for the request. */
		queryContext?: QueryContext;
	}

	/** Defines the top-level object that the response includes when the request succeeds. */
	export interface SearchResponseFormProperties {
	}
	export function CreateSearchResponseFormGroup() {
		return new FormGroup<SearchResponseFormProperties>({
		});

	}

	export interface SearchResultsAnswer {

		/** Defines the query context that Bing used for the request. */
		queryContext?: QueryContext;
	}
	export interface SearchResultsAnswerFormProperties {
	}
	export function CreateSearchResultsAnswerFormGroup() {
		return new FormGroup<SearchResultsAnswerFormProperties>({
		});

	}

	export interface StructuredValue {
	}
	export interface StructuredValueFormProperties {
	}
	export function CreateStructuredValueFormGroup() {
		return new FormGroup<StructuredValueFormProperties>({
		});

	}

	export interface TouristAttraction {
	}
	export interface TouristAttractionFormProperties {
	}
	export function CreateTouristAttractionFormGroup() {
		return new FormGroup<TouristAttractionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The Entity Search API lets you send a search query to Bing and get back search results that include entities and places. Place results include restaurants, hotel, or other local businesses. For places, the query can specify the name of the local business or it can ask for a list (for example, restaurants near me). Entity results include persons, places, or things. Place in this context is tourist attractions, states, countries, etc.
		 * Get entities
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {string} mkt The market where the results come from. You are strongly encouraged to always specify the market, if known. Specifying the market helps Bing route the request and return an appropriate and optimal response. This parameter and the cc query parameter are mutually exclusive—do not specify both.
		 * @param {string} q The user's search term.
		 * @param {Array<string>} ResponseFilter A comma-delimited list of answers to include in the response. If you do not specify this parameter, the response includes all search answers for which there's relevant data.
		 * @param {Array<string>} ResponseFormat The media type to use for the response. The following are the possible case-insensitive values: JSON, JSONLD. The default is JSON. If you specify JSONLD, the response body includes JSON-LD objects that contain the search results.
		 * @param {Entities_SearchSafeSearch} SafeSearch A filter used to filter adult content. Off: Return webpages with adult text, images, or videos. Moderate: Return webpages with adult text, but not adult images or videos. Strict: Do not return webpages with adult text, images, or videos. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} SetLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the Accept-Language header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @return {SearchResponse} Success.
		 */
		Entities_Search(cc: string | null | undefined, mkt: string | null | undefined, q: string, ResponseFilter: Array<string> | null | undefined, ResponseFormat: Array<string> | null | undefined, SafeSearch: Entities_SearchSafeSearch | null | undefined, SetLang: string | null | undefined): Observable<SearchResponse> {
			return this.http.get<SearchResponse>(this.baseUri + 'entities?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + ResponseFilter?.map(z => `ResponseFilter=${encodeURIComponent(z)}`).join('&') + '&' + ResponseFormat?.map(z => `ResponseFormat=${encodeURIComponent(z)}`).join('&') + '&SafeSearch=' + SafeSearch + '&SetLang=' + (SetLang == null ? '' : encodeURIComponent(SetLang)), {});
		}
	}

	export enum Entities_SearchX_BingApis_SDK { true = 'true' }

	export enum Entities_SearchSafeSearch { Off = 'Off', Moderate = 'Moderate', Strict = 'Strict' }

}

