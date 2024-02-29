import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Event's Access Date */
	export interface AccessDates {

		/** Boolean flag to indicate whether or not the access end date is approximated */
		endApproximate?: boolean | null;

		/** Event's end access time */
		endDateTime?: Date | null;

		/** Boolean flag to indicate whether or not the access start date is approximated */
		startApproximate?: boolean | null;

		/** Event's start access time */
		startDateTime?: Date | null;
	}

	/** Event's Access Date */
	export interface AccessDatesFormProperties {

		/** Boolean flag to indicate whether or not the access end date is approximated */
		endApproximate: FormControl<boolean | null | undefined>,

		/** Event's end access time */
		endDateTime: FormControl<Date | null | undefined>,

		/** Boolean flag to indicate whether or not the access start date is approximated */
		startApproximate: FormControl<boolean | null | undefined>,

		/** Event's start access time */
		startDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAccessDatesFormGroup() {
		return new FormGroup<AccessDatesFormProperties>({
			endApproximate: new FormControl<boolean | null | undefined>(undefined),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			startApproximate: new FormControl<boolean | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Additional information for people who experience disabilities */
	export interface Accessibility {

		/** Accessibility's information */
		info?: string | null;
	}

	/** Additional information for people who experience disabilities */
	export interface AccessibilityFormProperties {

		/** Accessibility's information */
		info: FormControl<string | null | undefined>,
	}
	export function CreateAccessibilityFormGroup() {
		return new FormGroup<AccessibilityFormProperties>({
			info: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Address */
	export interface Address {

		/** Address first line */
		line1?: string | null;

		/** Address second line */
		line2?: string | null;

		/** Address third line */
		line3?: string | null;
	}

	/** Address */
	export interface AddressFormProperties {

		/** Address first line */
		line1: FormControl<string | null | undefined>,

		/** Address second line */
		line2: FormControl<string | null | undefined>,

		/** Address third line */
		line3: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			line1: new FormControl<string | null | undefined>(undefined),
			line2: new FormControl<string | null | undefined>(undefined),
			line3: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Area */
	export interface Area {

		/** Name of the entity */
		name?: string | null;
	}

	/** Area */
	export interface AreaFormProperties {

		/** Name of the entity */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAreaFormGroup() {
		return new FormGroup<AreaFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attraction */
	export interface Attraction {

		/** Additional information of the entity */
		additionalInfo?: string | null;

		/** Attraction's classifications */
		classifications?: Array<Classification>;

		/** Description's of the entity */
		description?: string | null;

		/** List of external links */
		externalLinks?: {[id: string]: Array<ExternalLink> };

		/**
		 * Unique id of the entity in the discovery API
		 * Required
		 */
		id: string;

		/** Images of the entity */
		images?: Array<Image>;

		/** Locale in which the content is returned */
		locale?: string | null;

		/** Name of the entity */
		name?: string | null;

		/** Indicate if this is a test entity, by default test entities won't appear in discovery API */
		test?: boolean | null;

		/**
		 * Type of the entity
		 * Required
		 */
		type: AttractionType;

		/** number of upcoming events */
		upcomingEvents?: {[id: string]: number };

		/** URL of a web site detail page of the entity */
		url?: string | null;
	}

	/** Attraction */
	export interface AttractionFormProperties {

		/** Additional information of the entity */
		additionalInfo: FormControl<string | null | undefined>,

		/** Description's of the entity */
		description: FormControl<string | null | undefined>,

		/** List of external links */
		externalLinks: FormControl<{[id: string]: Array<ExternalLink> } | null | undefined>,

		/**
		 * Unique id of the entity in the discovery API
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Locale in which the content is returned */
		locale: FormControl<string | null | undefined>,

		/** Name of the entity */
		name: FormControl<string | null | undefined>,

		/** Indicate if this is a test entity, by default test entities won't appear in discovery API */
		test: FormControl<boolean | null | undefined>,

		/**
		 * Type of the entity
		 * Required
		 */
		type: FormControl<AttractionType | null | undefined>,

		/** number of upcoming events */
		upcomingEvents: FormControl<{[id: string]: number } | null | undefined>,

		/** URL of a web site detail page of the entity */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAttractionFormGroup() {
		return new FormGroup<AttractionFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			externalLinks: new FormControl<{[id: string]: Array<ExternalLink> } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locale: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<AttractionType | null | undefined>(undefined, [Validators.required]),
			upcomingEvents: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Classification */
	export interface Classification {
		genre?: Level;

		/** True if this is the entity's primary classification */
		primary?: boolean | null;

		/** Segment */
		segment?: Segment;
		subGenre?: Level;
		subType?: Level;
		type?: Level;
	}

	/** Classification */
	export interface ClassificationFormProperties {

		/** True if this is the entity's primary classification */
		primary: FormControl<boolean | null | undefined>,
	}
	export function CreateClassificationFormGroup() {
		return new FormGroup<ClassificationFormProperties>({
			primary: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Level {

		/** The ID of the classification's level */
		id?: string | null;

		/** The Name of the classification's level */
		name?: string | null;
	}
	export interface LevelFormProperties {

		/** The ID of the classification's level */
		id: FormControl<string | null | undefined>,

		/** The Name of the classification's level */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLevelFormGroup() {
		return new FormGroup<LevelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Segment */
	export interface Segment {

		/** The ID of the classification's level */
		id?: string | null;

		/** The Name of the classification's level */
		name?: string | null;
	}

	/** Segment */
	export interface SegmentFormProperties {

		/** The ID of the classification's level */
		id: FormControl<string | null | undefined>,

		/** The Name of the classification's level */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExternalLink */
	export interface ExternalLink {

		/** An external link id is the unique identifier of a resource on a different domain or api */
		id?: string | null;

		/** An external link url is a url that goes to a different domain or api */
		url?: string | null;
	}

	/** ExternalLink */
	export interface ExternalLinkFormProperties {

		/** An external link id is the unique identifier of a resource on a different domain or api */
		id: FormControl<string | null | undefined>,

		/** An external link url is a url that goes to a different domain or api */
		url: FormControl<string | null | undefined>,
	}
	export function CreateExternalLinkFormGroup() {
		return new FormGroup<ExternalLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Image */
	export interface Image {

		/** Attribution of the image */
		attribution?: string | null;

		/** true if the image is not the event's image but a fallbak image */
		fallback?: boolean | null;

		/**
		 * Height of the image
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** Aspect ratio of the image */
		ratio?: ImageRatio | null;

		/** Public URL of the image */
		url?: string | null;

		/**
		 * Width of the image
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Image */
	export interface ImageFormProperties {

		/** Attribution of the image */
		attribution: FormControl<string | null | undefined>,

		/** true if the image is not the event's image but a fallbak image */
		fallback: FormControl<boolean | null | undefined>,

		/**
		 * Height of the image
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** Aspect ratio of the image */
		ratio: FormControl<ImageRatio | null | undefined>,

		/** Public URL of the image */
		url: FormControl<string | null | undefined>,

		/**
		 * Width of the image
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			fallback: new FormControl<boolean | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			ratio: new FormControl<ImageRatio | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ImageRatio { '16_9' = '16_9', '3_2' = '3_2', '4_3' = '4_3' }

	export enum AttractionType { event = 'event', venue = 'venue', attraction = 'attraction' }


	/** All Attraction's extensions */
	export interface AttractionExtensions {
	}

	/** All Attraction's extensions */
	export interface AttractionExtensionsFormProperties {
	}
	export function CreateAttractionExtensionsFormGroup() {
		return new FormGroup<AttractionExtensionsFormProperties>({
		});

	}


	/** Attribution */
	export interface Attribution {

		/** LicenceName */
		licenceName?: string | null;

		/** LicenceUrl */
		licenceUrl?: string | null;

		/** SourceName */
		sourceName?: string | null;

		/** SourceUrl */
		sourceUrl?: string | null;
	}

	/** Attribution */
	export interface AttributionFormProperties {

		/** LicenceName */
		licenceName: FormControl<string | null | undefined>,

		/** LicenceUrl */
		licenceUrl: FormControl<string | null | undefined>,

		/** SourceName */
		sourceName: FormControl<string | null | undefined>,

		/** SourceUrl */
		sourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateAttributionFormGroup() {
		return new FormGroup<AttributionFormProperties>({
			licenceName: new FormControl<string | null | undefined>(undefined),
			licenceUrl: new FormControl<string | null | undefined>(undefined),
			sourceName: new FormControl<string | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributions */
	export interface Attributions {

		/** Attribution */
		description?: Attribution;

		/** Attribution descriptions - multi-lingual fields */
		descriptions?: {[id: string]: Attribution };
	}

	/** Attributions */
	export interface AttributionsFormProperties {

		/** Attribution descriptions - multi-lingual fields */
		descriptions: FormControl<{[id: string]: Attribution } | null | undefined>,
	}
	export function CreateAttributionsFormGroup() {
		return new FormGroup<AttributionsFormProperties>({
			descriptions: new FormControl<{[id: string]: Attribution } | null | undefined>(undefined),
		});

	}

	export interface Chronology {
		zone?: DateTimeZone;
	}
	export interface ChronologyFormProperties {
	}
	export function CreateChronologyFormGroup() {
		return new FormGroup<ChronologyFormProperties>({
		});

	}

	export interface DateTimeZone {
		fixed?: boolean | null;
		id?: string | null;
	}
	export interface DateTimeZoneFormProperties {
		fixed: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateDateTimeZoneFormGroup() {
		return new FormGroup<DateTimeZoneFormProperties>({
			fixed: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** City */
	export interface City {

		/** Name of the entity */
		name?: string | null;
	}

	/** City */
	export interface CityFormProperties {

		/** Name of the entity */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCityFormGroup() {
		return new FormGroup<CityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Country */
	export interface Country {

		/** Country code (ISO 3166) */
		countryCode?: string | null;

		/** Name of the entity */
		name?: string | null;
	}

	/** Country */
	export interface CountryFormProperties {

		/** Country code (ISO 3166) */
		countryCode: FormControl<string | null | undefined>,

		/** Name of the entity */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DateTimeField {
		durationField?: DurationField;
		leapDurationField?: DurationField;
		lenient?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maximumValue?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimumValue?: number | null;
		name?: string | null;
		rangeDurationField?: DurationField;
		supported?: boolean | null;
		type?: DateTimeFieldType;
	}
	export interface DateTimeFieldFormProperties {
		lenient: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maximumValue: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimumValue: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		supported: FormControl<boolean | null | undefined>,
	}
	export function CreateDateTimeFieldFormGroup() {
		return new FormGroup<DateTimeFieldFormProperties>({
			lenient: new FormControl<boolean | null | undefined>(undefined),
			maximumValue: new FormControl<number | null | undefined>(undefined),
			minimumValue: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			supported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DurationField {
		name?: string | null;
		precise?: boolean | null;
		supported?: boolean | null;
		type?: DurationFieldType;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		unitMillis?: string | null;
	}
	export interface DurationFieldFormProperties {
		name: FormControl<string | null | undefined>,
		precise: FormControl<boolean | null | undefined>,
		supported: FormControl<boolean | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		unitMillis: FormControl<string | null | undefined>,
	}
	export function CreateDurationFieldFormGroup() {
		return new FormGroup<DurationFieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			precise: new FormControl<boolean | null | undefined>(undefined),
			supported: new FormControl<boolean | null | undefined>(undefined),
			unitMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DurationFieldType {
		name?: string | null;
	}
	export interface DurationFieldTypeFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateDurationFieldTypeFormGroup() {
		return new FormGroup<DurationFieldTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DateTimeFieldType {
		durationType?: DurationFieldType;
		name?: string | null;
		rangeDurationType?: DurationFieldType;
	}
	export interface DateTimeFieldTypeFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateDateTimeFieldTypeFormGroup() {
		return new FormGroup<DateTimeFieldTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event's display settings extension */
	export interface DisplaySettingExtension {

		/** True the landing is Soft otherwise it's Comingled */
		softLanding?: boolean | null;
	}

	/** Event's display settings extension */
	export interface DisplaySettingExtensionFormProperties {

		/** True the landing is Soft otherwise it's Comingled */
		softLanding: FormControl<boolean | null | undefined>,
	}
	export function CreateDisplaySettingExtensionFormGroup() {
		return new FormGroup<DisplaySettingExtensionFormProperties>({
			softLanding: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** DMA (Designated Market Area) */
	export interface Dma {

		/**
		 * DMS's id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;
	}

	/** DMA (Designated Market Area) */
	export interface DmaFormProperties {

		/**
		 * DMS's id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateDmaFormGroup() {
		return new FormGroup<DmaFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Event's End Dates */
	export interface EndDates {

		/** Boolean flag to indicate whether or not the end date is approximated */
		approximate?: boolean | null;

		/** The event end date time */
		dateTime?: Date | null;

		/**
		 * The event end date in local date
		 * Type: DateOnly
		 */
		localDate?: Date | null;
		localTime?: LocalTime;

		/** Boolean flag to indicate whether or not the event end time has no specific time */
		noSpecificTime?: boolean | null;
	}

	/** Event's End Dates */
	export interface EndDatesFormProperties {

		/** Boolean flag to indicate whether or not the end date is approximated */
		approximate: FormControl<boolean | null | undefined>,

		/** The event end date time */
		dateTime: FormControl<Date | null | undefined>,

		/**
		 * The event end date in local date
		 * Type: DateOnly
		 */
		localDate: FormControl<Date | null | undefined>,

		/** Boolean flag to indicate whether or not the event end time has no specific time */
		noSpecificTime: FormControl<boolean | null | undefined>,
	}
	export function CreateEndDatesFormGroup() {
		return new FormGroup<EndDatesFormProperties>({
			approximate: new FormControl<boolean | null | undefined>(undefined),
			dateTime: new FormControl<Date | null | undefined>(undefined),
			localDate: new FormControl<Date | null | undefined>(undefined),
			noSpecificTime: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LocalTime {
		chronology?: Chronology;
		fieldTypes?: Array<DateTimeFieldType>;
		fields?: Array<DateTimeField>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		hourOfDay?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		millisOfDay?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		millisOfSecond?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minuteOfHour?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondOfMinute?: number | null;
		values?: Array<number>;
	}
	export interface LocalTimeFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		hourOfDay: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		millisOfDay: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		millisOfSecond: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minuteOfHour: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		secondOfMinute: FormControl<number | null | undefined>,
	}
	export function CreateLocalTimeFormGroup() {
		return new FormGroup<LocalTimeFormProperties>({
			hourOfDay: new FormControl<number | null | undefined>(undefined),
			millisOfDay: new FormControl<number | null | undefined>(undefined),
			millisOfSecond: new FormControl<number | null | undefined>(undefined),
			minuteOfHour: new FormControl<number | null | undefined>(undefined),
			secondOfMinute: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EntityChanges {
		changes?: Array<string>;
		newlyCreated?: boolean | null;
	}
	export interface EntityChangesFormProperties {
		newlyCreated: FormControl<boolean | null | undefined>,
	}
	export function CreateEntityChangesFormGroup() {
		return new FormGroup<EntityChangesFormProperties>({
			newlyCreated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Event */
	export interface Event {

		/** Additional information for people who experience disabilities */
		accessibility?: Accessibility;

		/** Additional information of the entity */
		additionalInfo?: string | null;

		/** Event's classifications */
		classifications?: Array<Classification>;

		/** Event's Dates */
		dates?: EventDates;

		/** Description's of the entity */
		description?: string | null;

		/** Type: double */
		distance?: number | null;

		/** List of external links */
		externalLinks?: {[id: string]: Array<ExternalLink> };

		/**
		 * Unique id of the entity in the discovery API
		 * Required
		 */
		id: string;

		/** Images of the entity */
		images?: Array<Image>;

		/** Any information related to the event */
		info?: string | null;

		/** Locale in which the content is returned */
		locale?: string | null;

		/** Location */
		location?: Location;

		/** Name of the entity */
		name?: string | null;

		/** Related outlets informations */
		outlets?: Array<Outlet>;

		/** Place */
		place?: Place;

		/** Any notes related to the event */
		pleaseNote?: string | null;

		/** Price ranges of this event */
		priceRanges?: Array<PriceRange>;

		/** Related products informations */
		products?: Array<Product>;

		/** Promoter */
		promoter?: Promoter;

		/** Event's promoters */
		promoters?: Array<Promoter>;

		/** Event's Sales Dates */
		sales?: EventSalesDates;

		/** Seatmap */
		seatmap?: SeatMap;

		/** Indicate if this is a test entity, by default test entities won't appear in discovery API */
		test?: boolean | null;

		/**
		 * Type of the entity
		 * Required
		 */
		type: AttractionType;
		units?: string | null;

		/** URL of a web site detail page of the entity */
		url?: string | null;
	}

	/** Event */
	export interface EventFormProperties {

		/** Additional information of the entity */
		additionalInfo: FormControl<string | null | undefined>,

		/** Description's of the entity */
		description: FormControl<string | null | undefined>,

		/** Type: double */
		distance: FormControl<number | null | undefined>,

		/** List of external links */
		externalLinks: FormControl<{[id: string]: Array<ExternalLink> } | null | undefined>,

		/**
		 * Unique id of the entity in the discovery API
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Any information related to the event */
		info: FormControl<string | null | undefined>,

		/** Locale in which the content is returned */
		locale: FormControl<string | null | undefined>,

		/** Name of the entity */
		name: FormControl<string | null | undefined>,

		/** Any notes related to the event */
		pleaseNote: FormControl<string | null | undefined>,

		/** Indicate if this is a test entity, by default test entities won't appear in discovery API */
		test: FormControl<boolean | null | undefined>,

		/**
		 * Type of the entity
		 * Required
		 */
		type: FormControl<AttractionType | null | undefined>,
		units: FormControl<string | null | undefined>,

		/** URL of a web site detail page of the entity */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			externalLinks: new FormControl<{[id: string]: Array<ExternalLink> } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			info: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pleaseNote: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<AttractionType | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event's Dates */
	export interface EventDates {

		/** Event's Access Date */
		access?: AccessDates;

		/** Event's End Dates */
		end?: EndDates;

		/** Flag indicating if date spans of multiple days */
		spanMultipleDays?: boolean | null;

		/** Event's Start Dates */
		start?: StartDates;

		/** Event's Status */
		status?: EventStatus;

		/** Event's timezone */
		timezone?: string | null;
	}

	/** Event's Dates */
	export interface EventDatesFormProperties {

		/** Flag indicating if date spans of multiple days */
		spanMultipleDays: FormControl<boolean | null | undefined>,

		/** Event's timezone */
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateEventDatesFormGroup() {
		return new FormGroup<EventDatesFormProperties>({
			spanMultipleDays: new FormControl<boolean | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event's Start Dates */
	export interface StartDates {

		/** Boolean flag to indicate whether or not the start date is TBA */
		dateTBA?: boolean | null;

		/** Boolean flag to indicate whether or not the start date is TBD */
		dateTBD?: boolean | null;

		/** The event start datetime */
		dateTime?: Date | null;

		/**
		 * The event start date in local date
		 * Type: DateOnly
		 */
		localDate?: Date | null;
		localTime?: LocalTime;

		/** Boolean flag to indicate whether or not the event start time has no specific time */
		noSpecificTime?: boolean | null;

		/** Boolean flag to indicate whether or not the start time is TBA */
		timeTBA?: boolean | null;
	}

	/** Event's Start Dates */
	export interface StartDatesFormProperties {

		/** Boolean flag to indicate whether or not the start date is TBA */
		dateTBA: FormControl<boolean | null | undefined>,

		/** Boolean flag to indicate whether or not the start date is TBD */
		dateTBD: FormControl<boolean | null | undefined>,

		/** The event start datetime */
		dateTime: FormControl<Date | null | undefined>,

		/**
		 * The event start date in local date
		 * Type: DateOnly
		 */
		localDate: FormControl<Date | null | undefined>,

		/** Boolean flag to indicate whether or not the event start time has no specific time */
		noSpecificTime: FormControl<boolean | null | undefined>,

		/** Boolean flag to indicate whether or not the start time is TBA */
		timeTBA: FormControl<boolean | null | undefined>,
	}
	export function CreateStartDatesFormGroup() {
		return new FormGroup<StartDatesFormProperties>({
			dateTBA: new FormControl<boolean | null | undefined>(undefined),
			dateTBD: new FormControl<boolean | null | undefined>(undefined),
			dateTime: new FormControl<Date | null | undefined>(undefined),
			localDate: new FormControl<Date | null | undefined>(undefined),
			noSpecificTime: new FormControl<boolean | null | undefined>(undefined),
			timeTBA: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Event's Status */
	export interface EventStatus {

		/** The event's status code */
		code?: EventStatusCode | null;
	}

	/** Event's Status */
	export interface EventStatusFormProperties {

		/** The event's status code */
		code: FormControl<EventStatusCode | null | undefined>,
	}
	export function CreateEventStatusFormGroup() {
		return new FormGroup<EventStatusFormProperties>({
			code: new FormControl<EventStatusCode | null | undefined>(undefined),
		});

	}

	export enum EventStatusCode { onsale = 'onsale', offsale = 'offsale', canceled = 'canceled', postponed = 'postponed', rescheduled = 'rescheduled' }


	/** Location */
	export interface Location {

		/**
		 * Latitude
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * Longitude
		 * Type: double
		 */
		longitude?: number | null;
	}

	/** Location */
	export interface LocationFormProperties {

		/**
		 * Latitude
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * Longitude
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A selling point for tickets. */
	export interface Outlet {

		/** Outlet's type */
		type?: string | null;

		/** Outlet's url */
		url?: string | null;
	}

	/** A selling point for tickets. */
	export interface OutletFormProperties {

		/** Outlet's type */
		type: FormControl<string | null | undefined>,

		/** Outlet's url */
		url: FormControl<string | null | undefined>,
	}
	export function CreateOutletFormGroup() {
		return new FormGroup<OutletFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Place */
	export interface Place {

		/** Address */
		address?: Address;

		/** Area */
		area?: Area;

		/** City */
		city?: City;

		/** Country */
		country?: Country;

		/** Location */
		location?: Location;

		/** Name of the entity */
		name?: string | null;

		/** Postal code / zipcode of the place */
		postalCode?: string | null;

		/** State */
		state?: State;
	}

	/** Place */
	export interface PlaceFormProperties {

		/** Name of the entity */
		name: FormControl<string | null | undefined>,

		/** Postal code / zipcode of the place */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State */
	export interface State {

		/** Name of the entity */
		name?: string | null;

		/** State code */
		stateCode?: string | null;
	}

	/** State */
	export interface StateFormProperties {

		/** Name of the entity */
		name: FormControl<string | null | undefined>,

		/** State code */
		stateCode: FormControl<string | null | undefined>,
	}
	export function CreateStateFormGroup() {
		return new FormGroup<StateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PriceRange */
	export interface PriceRange {

		/** Currency */
		currency?: string | null;

		/**
		 * Maximum price
		 * Type: double
		 */
		max?: number | null;

		/**
		 * Minimum price
		 * Type: double
		 */
		min?: number | null;

		/** Type of price */
		type?: PriceRangeType | null;
	}

	/** PriceRange */
	export interface PriceRangeFormProperties {

		/** Currency */
		currency: FormControl<string | null | undefined>,

		/**
		 * Maximum price
		 * Type: double
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * Minimum price
		 * Type: double
		 */
		min: FormControl<number | null | undefined>,

		/** Type of price */
		type: FormControl<PriceRangeType | null | undefined>,
	}
	export function CreatePriceRangeFormGroup() {
		return new FormGroup<PriceRangeFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<PriceRangeType | null | undefined>(undefined),
		});

	}

	export enum PriceRangeType { standard = 'standard' }


	/** Product */
	export interface Product {

		/** Product's primary id */
		id?: string | null;

		/** Name of the entity */
		name?: string | null;

		/** Product's type */
		type?: string | null;

		/** Product's url */
		url?: string | null;
	}

	/** Product */
	export interface ProductFormProperties {

		/** Product's primary id */
		id: FormControl<string | null | undefined>,

		/** Name of the entity */
		name: FormControl<string | null | undefined>,

		/** Product's type */
		type: FormControl<string | null | undefined>,

		/** Product's url */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Promoter */
	export interface Promoter {

		/** Description of the promoter */
		description?: string | null;

		/** Id of the promoter */
		id?: string | null;

		/** Name of the promoter */
		name?: string | null;
	}

	/** Promoter */
	export interface PromoterFormProperties {

		/** Description of the promoter */
		description: FormControl<string | null | undefined>,

		/** Id of the promoter */
		id: FormControl<string | null | undefined>,

		/** Name of the promoter */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePromoterFormGroup() {
		return new FormGroup<PromoterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event's Sales Dates */
	export interface EventSalesDates {

		/** Presale information on this event */
		presales?: Array<Presale>;

		/** Event's Public Onsales Dates */
		public?: PublicSaleDates;
	}

	/** Event's Sales Dates */
	export interface EventSalesDatesFormProperties {
	}
	export function CreateEventSalesDatesFormGroup() {
		return new FormGroup<EventSalesDatesFormProperties>({
		});

	}


	/** Event's Presale Info */
	export interface Presale {

		/** Description of the presame */
		description?: string | null;

		/** Presale's end dates. The date and time when the presale will end */
		endDateTime?: Date | null;

		/** Name of the presale */
		name?: string | null;

		/** Presale's start dates. The date and time when the presale will start */
		startDateTime?: Date | null;

		/** Presale link URL */
		url?: string | null;
	}

	/** Event's Presale Info */
	export interface PresaleFormProperties {

		/** Description of the presame */
		description: FormControl<string | null | undefined>,

		/** Presale's end dates. The date and time when the presale will end */
		endDateTime: FormControl<Date | null | undefined>,

		/** Name of the presale */
		name: FormControl<string | null | undefined>,

		/** Presale's start dates. The date and time when the presale will start */
		startDateTime: FormControl<Date | null | undefined>,

		/** Presale link URL */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePresaleFormGroup() {
		return new FormGroup<PresaleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event's Public Onsales Dates */
	export interface PublicSaleDates {

		/** Public sale's end dates. The date and time when the public sale will end */
		endDateTime?: Date | null;

		/** Public sale's start dates. The date and time when the public sale will start */
		startDateTime?: Date | null;

		/** True if the public sale's date is to be determined */
		startTBD?: boolean | null;
	}

	/** Event's Public Onsales Dates */
	export interface PublicSaleDatesFormProperties {

		/** Public sale's end dates. The date and time when the public sale will end */
		endDateTime: FormControl<Date | null | undefined>,

		/** Public sale's start dates. The date and time when the public sale will start */
		startDateTime: FormControl<Date | null | undefined>,

		/** True if the public sale's date is to be determined */
		startTBD: FormControl<boolean | null | undefined>,
	}
	export function CreatePublicSaleDatesFormGroup() {
		return new FormGroup<PublicSaleDatesFormProperties>({
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			startTBD: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Seatmap */
	export interface SeatMap {

		/** Static Seatmap Url */
		staticUrl?: string | null;
	}

	/** Seatmap */
	export interface SeatMapFormProperties {

		/** Static Seatmap Url */
		staticUrl: FormControl<string | null | undefined>,
	}
	export function CreateSeatMapFormGroup() {
		return new FormGroup<SeatMapFormProperties>({
			staticUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** All Event's extensions */
	export interface EventExtensions {
	}

	/** All Event's extensions */
	export interface EventExtensionsFormProperties {
	}
	export function CreateEventExtensionsFormGroup() {
		return new FormGroup<EventExtensionsFormProperties>({
		});

	}


	/** This class defines an Event with only images view on the Discovery API */
	export interface EventImages {

		/**
		 * Unique id of the entity in the discovery API
		 * Required
		 */
		id: string;

		/** Images of the entity */
		images?: Array<Image>;

		/**
		 * Type of the entity
		 * Required
		 */
		type: EventImagesType;
	}

	/** This class defines an Event with only images view on the Discovery API */
	export interface EventImagesFormProperties {

		/**
		 * Unique id of the entity in the discovery API
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Type of the entity
		 * Required
		 */
		type: FormControl<EventImagesType | null | undefined>,
	}
	export function CreateEventImagesFormGroup() {
		return new FormGroup<EventImagesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EventImagesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventImagesType { event = 'event' }

	export interface Extension {
	}
	export interface ExtensionFormProperties {
	}
	export function CreateExtensionFormGroup() {
		return new FormGroup<ExtensionFormProperties>({
		});

	}


	/** Secondary Genre */
	export interface Genre {

		/** The ID of the classification's level */
		id?: string | null;

		/** The Name of the classification's level */
		name?: string | null;
	}

	/** Secondary Genre */
	export interface GenreFormProperties {

		/** The ID of the classification's level */
		id: FormControl<string | null | undefined>,

		/** The Name of the classification's level */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGenreFormGroup() {
		return new FormGroup<GenreFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeocodeExtension {
		city?: string | null;
		country?: string | null;
		county?: string | null;
		formattedAddress?: string | null;
		geometry?: Geometry;
		postalCode?: string | null;
		route?: string | null;
		state?: string | null;
		streetNumber?: string | null;
	}
	export interface GeocodeExtensionFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		county: FormControl<string | null | undefined>,
		formattedAddress: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		route: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		streetNumber: FormControl<string | null | undefined>,
	}
	export function CreateGeocodeExtensionFormGroup() {
		return new FormGroup<GeocodeExtensionFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			formattedAddress: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			route: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			streetNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Geometry {

		/** Location */
		location?: Location;
	}
	export interface GeometryFormProperties {
	}
	export function CreateGeometryFormGroup() {
		return new FormGroup<GeometryFormProperties>({
		});

	}


	/** Venue's geocode extension */
	export interface GeolocationVenueExtensions {
		geocode?: GeocodeExtension;
	}

	/** Venue's geocode extension */
	export interface GeolocationVenueExtensionsFormProperties {
	}
	export function CreateGeolocationVenueExtensionsFormGroup() {
		return new FormGroup<GeolocationVenueExtensionsFormProperties>({
		});

	}


	/** Event's Host extension */
	export interface HostExtension {
	}

	/** Event's Host extension */
	export interface HostExtensionFormProperties {
	}
	export function CreateHostExtensionFormGroup() {
		return new FormGroup<HostExtensionFormProperties>({
		});

	}

	export interface Locale {
		country?: string | null;
		displayCountry?: string | null;
		displayLanguage?: string | null;
		displayName?: string | null;
		displayScript?: string | null;
		displayVariant?: string | null;
		extensionKeys?: Array<string>;
		iso3Country?: string | null;
		iso3Language?: string | null;
		language?: string | null;
		script?: string | null;
		unicodeLocaleAttributes?: Array<string>;
		unicodeLocaleKeys?: Array<string>;
		variant?: string | null;
	}
	export interface LocaleFormProperties {
		country: FormControl<string | null | undefined>,
		displayCountry: FormControl<string | null | undefined>,
		displayLanguage: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		displayScript: FormControl<string | null | undefined>,
		displayVariant: FormControl<string | null | undefined>,
		iso3Country: FormControl<string | null | undefined>,
		iso3Language: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		script: FormControl<string | null | undefined>,
		variant: FormControl<string | null | undefined>,
	}
	export function CreateLocaleFormGroup() {
		return new FormGroup<LocaleFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			displayCountry: new FormControl<string | null | undefined>(undefined),
			displayLanguage: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			displayScript: new FormControl<string | null | undefined>(undefined),
			displayVariant: new FormControl<string | null | undefined>(undefined),
			iso3Country: new FormControl<string | null | undefined>(undefined),
			iso3Language: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			variant: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Market */
	export interface Market {

		/** Market's id */
		id?: string | null;
	}

	/** Market */
	export interface MarketFormProperties {

		/** Market's id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateMarketFormGroup() {
		return new FormGroup<MarketFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parking */
	export interface Parking {

		/** Name of the entity */
		name?: string | null;

		/** Url to the web page of the parking */
		url?: string | null;
	}

	/** Parking */
	export interface ParkingFormProperties {

		/** Name of the entity */
		name: FormControl<string | null | undefined>,

		/** Url to the web page of the parking */
		url: FormControl<string | null | undefined>,
	}
	export function CreateParkingFormGroup() {
		return new FormGroup<ParkingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The class defines the public visibility period on the Discovery/Publish API. */
	export interface PublicVisibility {
	}

	/** The class defines the public visibility period on the Discovery/Publish API. */
	export interface PublicVisibilityFormProperties {
	}
	export function CreatePublicVisibilityFormGroup() {
		return new FormGroup<PublicVisibilityFormProperties>({
		});

	}


	/** Relationship */
	export interface Relationship {

		/** The ID of the related entity */
		id?: string | null;

		/** References of this relationship in another system. Reference is the exact same entity */
		references?: {[id: string]: string };

		/** The source name of the related entity */
		source?: string | null;

		/** The type of the relationship */
		type?: RelationshipType | null;
	}

	/** Relationship */
	export interface RelationshipFormProperties {

		/** The ID of the related entity */
		id: FormControl<string | null | undefined>,

		/** References of this relationship in another system. Reference is the exact same entity */
		references: FormControl<{[id: string]: string } | null | undefined>,

		/** The source name of the related entity */
		source: FormControl<string | null | undefined>,

		/** The type of the relationship */
		type: FormControl<RelationshipType | null | undefined>,
	}
	export function CreateRelationshipFormGroup() {
		return new FormGroup<RelationshipFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			references: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<RelationshipType | null | undefined>(undefined),
		});

	}

	export enum RelationshipType { duplicate = 'duplicate' }


	/** Social networks data */
	export interface Social {

		/** Twitter data */
		twitter?: Twitter;
	}

	/** Social networks data */
	export interface SocialFormProperties {
	}
	export function CreateSocialFormGroup() {
		return new FormGroup<SocialFormProperties>({
		});

	}


	/** Twitter data */
	export interface Twitter {

		/** Twitter handle */
		handle?: TwitterHandle | null;

		/** Twitter hashtags */
		hashtags?: Array<string>;
	}

	/** Twitter data */
	export interface TwitterFormProperties {

		/** Twitter handle */
		handle: FormControl<TwitterHandle | null | undefined>,
	}
	export function CreateTwitterFormGroup() {
		return new FormGroup<TwitterFormProperties>({
			handle: new FormControl<TwitterHandle | null | undefined>(undefined),
		});

	}

	export enum TwitterHandle { '@a Twitter handle' = '@a Twitter handle' }


	/** Source */
	export interface Source {
	}

	/** Source */
	export interface SourceFormProperties {
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
		});

	}


	/** The Attraction Tool (TAT) extension */
	export interface TatExtension {
	}

	/** The Attraction Tool (TAT) extension */
	export interface TatExtensionFormProperties {
	}
	export function CreateTatExtensionFormGroup() {
		return new FormGroup<TatExtensionFormProperties>({
		});

	}


	/** Attraction's extension (ticketmaster source) */
	export interface TicketmasterAttractionExtensions {
	}

	/** Attraction's extension (ticketmaster source) */
	export interface TicketmasterAttractionExtensionsFormProperties {
	}
	export function CreateTicketmasterAttractionExtensionsFormGroup() {
		return new FormGroup<TicketmasterAttractionExtensionsFormProperties>({
		});

	}


	/** Event's extension (ticketmaster source) */
	export interface TicketmasterEventExtensions {

		/** Event's display settings extension */
		displaySettings?: DisplaySettingExtension;
	}

	/** Event's extension (ticketmaster source) */
	export interface TicketmasterEventExtensionsFormProperties {
	}
	export function CreateTicketmasterEventExtensionsFormGroup() {
		return new FormGroup<TicketmasterEventExtensionsFormProperties>({
		});

	}


	/** Venue's extension (ticketmaster source) */
	export interface TicketmasterVenueExtensions {
	}

	/** Venue's extension (ticketmaster source) */
	export interface TicketmasterVenueExtensionsFormProperties {
	}
	export function CreateTicketmasterVenueExtensionsFormGroup() {
		return new FormGroup<TicketmasterVenueExtensionsFormProperties>({
		});

	}


	/** Venue */
	export interface Venue {

		/** Venue accessible seating detail */
		accessibleSeatingDetail?: string | null;

		/** Additional information of the entity */
		additionalInfo?: string | null;

		/** Address */
		address?: Address;

		/** Venue box office information */
		boxOfficeInfo?: VenueBoxOfficeInfo;

		/** City */
		city?: City;

		/** Country */
		country?: Country;

		/** Default currency of ticket prices for events in this venue */
		currency?: string | null;

		/** Description's of the entity */
		description?: string | null;

		/** Type: double */
		distance?: number | null;

		/** The list of associated DMAs (Designated Market Areas) of the venue */
		dma?: Array<Dma>;

		/** List of external links */
		externalLinks?: {[id: string]: Array<ExternalLink> };

		/** Venue general information */
		generalInfo?: VenueGeneralInfo;

		/**
		 * Unique id of the entity in the discovery API
		 * Required
		 */
		id: string;

		/** Images of the entity */
		images?: Array<Image>;

		/** Locale in which the content is returned */
		locale?: string | null;

		/** Location */
		location?: Location;

		/** Markets of the venue */
		markets?: Array<Market>;

		/** Name of the entity */
		name?: string | null;

		/** Venue parking info */
		parkingDetail?: string | null;

		/** Postal code / zipcode of the venue */
		postalCode?: string | null;

		/** Social networks data */
		social?: Social;

		/** State */
		state?: State;

		/** Indicate if this is a test entity, by default test entities won't appear in discovery API */
		test?: boolean | null;

		/** Timezone of the venue */
		timezone?: string | null;

		/**
		 * Type of the entity
		 * Required
		 */
		type: AttractionType;
		units?: string | null;

		/** number of upcoming events */
		upcomingEvents?: {[id: string]: number };

		/** URL of a web site detail page of the entity */
		url?: string | null;
	}

	/** Venue */
	export interface VenueFormProperties {

		/** Venue accessible seating detail */
		accessibleSeatingDetail: FormControl<string | null | undefined>,

		/** Additional information of the entity */
		additionalInfo: FormControl<string | null | undefined>,

		/** Default currency of ticket prices for events in this venue */
		currency: FormControl<string | null | undefined>,

		/** Description's of the entity */
		description: FormControl<string | null | undefined>,

		/** Type: double */
		distance: FormControl<number | null | undefined>,

		/** List of external links */
		externalLinks: FormControl<{[id: string]: Array<ExternalLink> } | null | undefined>,

		/**
		 * Unique id of the entity in the discovery API
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Locale in which the content is returned */
		locale: FormControl<string | null | undefined>,

		/** Name of the entity */
		name: FormControl<string | null | undefined>,

		/** Venue parking info */
		parkingDetail: FormControl<string | null | undefined>,

		/** Postal code / zipcode of the venue */
		postalCode: FormControl<string | null | undefined>,

		/** Indicate if this is a test entity, by default test entities won't appear in discovery API */
		test: FormControl<boolean | null | undefined>,

		/** Timezone of the venue */
		timezone: FormControl<string | null | undefined>,

		/**
		 * Type of the entity
		 * Required
		 */
		type: FormControl<AttractionType | null | undefined>,
		units: FormControl<string | null | undefined>,

		/** number of upcoming events */
		upcomingEvents: FormControl<{[id: string]: number } | null | undefined>,

		/** URL of a web site detail page of the entity */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVenueFormGroup() {
		return new FormGroup<VenueFormProperties>({
			accessibleSeatingDetail: new FormControl<string | null | undefined>(undefined),
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			externalLinks: new FormControl<{[id: string]: Array<ExternalLink> } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locale: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parkingDetail: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AttractionType | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<string | null | undefined>(undefined),
			upcomingEvents: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Venue box office information */
	export interface VenueBoxOfficeInfo {

		/** Venue box office accepted payment details */
		acceptedPaymentDetail?: string | null;

		/** Venue box office opening hours */
		openHoursDetail?: string | null;

		/** Venue box office phone number */
		phoneNumberDetail?: string | null;

		/** Venue box office will call details */
		willCallDetail?: string | null;
	}

	/** Venue box office information */
	export interface VenueBoxOfficeInfoFormProperties {

		/** Venue box office accepted payment details */
		acceptedPaymentDetail: FormControl<string | null | undefined>,

		/** Venue box office opening hours */
		openHoursDetail: FormControl<string | null | undefined>,

		/** Venue box office phone number */
		phoneNumberDetail: FormControl<string | null | undefined>,

		/** Venue box office will call details */
		willCallDetail: FormControl<string | null | undefined>,
	}
	export function CreateVenueBoxOfficeInfoFormGroup() {
		return new FormGroup<VenueBoxOfficeInfoFormProperties>({
			acceptedPaymentDetail: new FormControl<string | null | undefined>(undefined),
			openHoursDetail: new FormControl<string | null | undefined>(undefined),
			phoneNumberDetail: new FormControl<string | null | undefined>(undefined),
			willCallDetail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Venue general information */
	export interface VenueGeneralInfo {

		/** Venue children rule */
		childRule?: string | null;

		/** Venue general rules */
		generalRule?: string | null;
	}

	/** Venue general information */
	export interface VenueGeneralInfoFormProperties {

		/** Venue children rule */
		childRule: FormControl<string | null | undefined>,

		/** Venue general rules */
		generalRule: FormControl<string | null | undefined>,
	}
	export function CreateVenueGeneralInfoFormGroup() {
		return new FormGroup<VenueGeneralInfoFormProperties>({
			childRule: new FormControl<string | null | undefined>(undefined),
			generalRule: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** All Venue's extensions */
	export interface VenueExtensions {

		/** Venue's geocode extension */
		geolocation?: GeolocationVenueExtensions;
	}

	/** All Venue's extensions */
	export interface VenueExtensionsFormProperties {
	}
	export function CreateVenueExtensionsFormGroup() {
		return new FormGroup<VenueExtensionsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Attraction Search
		 * Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.
		 * Get discovery/v2/attractions
		 * @param {string} sort Sorting order of the search result. Allowable Values : 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc'
		 * @param {Array<string>} classificationName Filter attractions by classification name: name of any segment, genre, sub-genre, type, sub-type
		 * @param {Array<string>} classificationId Filter attractions by classification id: id of any segment, genre, sub-genre, type, sub-type
		 * @param {string} keyword Keyword to search on
		 * @param {string} id Filter entities by its id
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource} source Filter entities by its source name
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest} includeTest True if you want to have entities flag as test in the response. Only, if you only wanted test entities
		 * @param {string} page Page number
		 *     Minimum: 0
		 * @param {string} size Page size of the response
		 *     Minimum: 1    Maximum: 500
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent Yes if you want to display licensed content
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeSpellcheck yes, to include spell check suggestions in the response.
		 * @return {void} successful operation
		 */
		DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheck(sort: string | null | undefined, classificationName: Array<string> | null | undefined, classificationId: Array<string> | null | undefined, keyword: string | null | undefined, id: string | null | undefined, source: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource | null | undefined, includeTest: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest | null | undefined, page: string | null | undefined, size: string | null | undefined, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, includeSpellcheck: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/attractions?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&' + classificationName?.map(z => `classificationName=${encodeURIComponent(z)}`).join('&') + '&' + classificationId?.map(z => `classificationId=${encodeURIComponent(z)}`).join('&') + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&source=' + source + '&includeTest=' + includeTest + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&size=' + (size == null ? '' : encodeURIComponent(size)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent + '&includeSpellcheck=' + includeSpellcheck, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Attraction Details
		 * Get details for a specific attraction using the unique identifier for the attraction.
		 * Get discovery/v2/attractions/{id}
		 * @param {string} id ID of the attraction
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent True if you want to display licensed content
		 * @return {void} successful operation
		 */
		DiscoveryV2Attractions_idGetByLocaleAndIncludeLicensedContent(id: string, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/attractions/' + (id == null ? '' : encodeURIComponent(id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Classification Search
		 * Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.
		 * Get discovery/v2/classifications
		 * @param {string} sort Sorting order of the search result
		 * @param {string} keyword Keyword to search on
		 * @param {string} id Filter entities by its id
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource} source Filter entities by its source name
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest} includeTest True if you want to have entities flag as test in the response. Only, if you only wanted test entities
		 * @param {string} page Page number
		 *     Minimum: 0
		 * @param {string} size Page size of the response
		 *     Minimum: 1    Maximum: 500
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent Yes if you want to display licensed content
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeSpellcheck yes, to include spell check suggestions in the response.
		 * @return {void} successful operation
		 */
		DiscoveryV2ClassificationsGetBySortAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheck(sort: string | null | undefined, keyword: string | null | undefined, id: string | null | undefined, source: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource | null | undefined, includeTest: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest | null | undefined, page: string | null | undefined, size: string | null | undefined, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, includeSpellcheck: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/classifications?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&source=' + source + '&includeTest=' + includeTest + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&size=' + (size == null ? '' : encodeURIComponent(size)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent + '&includeSpellcheck=' + includeSpellcheck, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Genre Details
		 * Get details for a specific genre using its unique identifier.
		 * Get discovery/v2/classifications/genres/{id}
		 * @param {string} id ID of the genre
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent True if you want to display licensed content
		 * @return {void} successful operation
		 */
		DiscoveryV2ClassificationsGenres_idGetByLocaleAndIncludeLicensedContent(id: string, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/classifications/genres/' + (id == null ? '' : encodeURIComponent(id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Segment Details
		 * Get details for a specific segment using its unique identifier.
		 * Get discovery/v2/classifications/segments/{id}
		 * @param {string} id ID of the segment
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent True if you want to display licensed content
		 * @return {void} successful operation
		 */
		DiscoveryV2ClassificationsSegments_idGetByLocaleAndIncludeLicensedContent(id: string, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/classifications/segments/' + (id == null ? '' : encodeURIComponent(id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Sub-Genre Details
		 * Get details for a specific sub-genre using its unique identifier.
		 * Get discovery/v2/classifications/subgenres/{id}
		 * @param {string} id ID of the subgenre
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent True if you want to display licensed content
		 * @return {void} successful operation
		 */
		DiscoveryV2ClassificationsSubgenres_idGetByLocaleAndIncludeLicensedContent(id: string, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/classifications/subgenres/' + (id == null ? '' : encodeURIComponent(id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Classification Details
		 * Get details for a specific segment, genre, or sub-genre using its unique identifier.
		 * Get discovery/v2/classifications/{id}
		 * @param {string} id ID of the segment, genre, or sub-genre
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent True if you want to display licensed content
		 * @return {void} successful operation
		 */
		DiscoveryV2Classifications_idGetByLocaleAndIncludeLicensedContent(id: string, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/classifications/' + (id == null ? '' : encodeURIComponent(id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Event Search
		 * Find events and filter your search by location, date, availability, and much more.
		 * Get discovery/v2/events
		 * @param {string} sort Sorting order of the search result. Allowable values : 'name,asc', 'name,desc', 'date,asc', 'date,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'name,date,asc', 'name,date,desc', 'date,name,asc', 'date,name,desc','onsaleStartDate,asc', 'id,asc'
		 * @param {string} startDateTime Filter events with a start date after this date
		 * @param {string} endDateTime Filter events with a start date before this date
		 * @param {string} onsaleStartDateTime Filter events with onsale start date after this date
		 * @param {string} onsaleOnStartDate Filter events with onsale start date on this date
		 * @param {string} onsaleOnAfterStartDate Filter events with onsale range within this date
		 * @param {string} onsaleEndDateTime Filter events with onsale end date before this date
		 * @param {string} city Filter events by city
		 * @param {string} countryCode Filter events by country code
		 * @param {string} stateCode Filter events by state code
		 * @param {string} postalCode Filter events by postal code / zipcode
		 * @param {string} venueId Filter events by venue id
		 * @param {string} attractionId Filter events by attraction id
		 * @param {string} segmentId Filter events by segment id
		 * @param {string} segmentName Filter events by segment name
		 * @param {Array<string>} classificationName Filter events by classification name: name of any segment, genre, sub-genre, type, sub-type
		 * @param {Array<string>} classificationId Filter events by classification id: id of any segment, genre, sub-genre, type, sub-type
		 * @param {string} marketId Filter events by market id
		 * @param {string} promoterId Filter events by promoter id
		 * @param {string} dmaId Filter events by dma id
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest} includeTBA True, to include events with date to be announce (TBA)
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest} includeTBD True, to include event with a date to be defined (TBD)
		 * @param {string} clientVisibility Filter events by clientName
		 * @param {string} latlong Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead
		 * @param {string} radius Radius of the area in which we want to search for events.
		 * @param {DiscoveryV2EventsGetBySortAndStartDateTimeAndEndDateTimeAndOnsaleStartDateTimeAndOnsaleOnStartDateAndOnsaleOnAfterStartDateAndOnsaleEndDateTimeAndCityAndCountryCodeAndStateCodeAndPostalCodeAndVenueIdAndAttractionIdAndSegmentIdAndSegmentNameAndClassificationNameAndClassificationIdAndMarketIdAndPromoterIdAndDmaIdAndIncludeTBAAndIncludeTBDAndClientVisibilityAndLatlongAndRadiusAndUnitAndGeoPointAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckUnit} unit Unit of the radius
		 * @param {string} geoPoint filter events by geoHash
		 * @param {string} keyword Keyword to search on
		 * @param {string} id Filter entities by its id
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource} source Filter entities by its source name
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest} includeTest True if you want to have entities flag as test in the response. Only, if you only wanted test entities
		 * @param {string} page Page number
		 *     Minimum: 0
		 * @param {string} size Page size of the response
		 *     Minimum: 1    Maximum: 500
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent Yes if you want to display licensed content
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeSpellcheck yes, to include spell check suggestions in the response.
		 * @return {void} successful operation
		 */
		DiscoveryV2EventsGetBySortAndStartDateTimeAndEndDateTimeAndOnsaleStartDateTimeAndOnsaleOnStartDateAndOnsaleOnAfterStartDateAndOnsaleEndDateTimeAndCityAndCountryCodeAndStateCodeAndPostalCodeAndVenueIdAndAttractionIdAndSegmentIdAndSegmentNameAndClassificationNameAndClassificationIdAndMarketIdAndPromoterIdAndDmaIdAndIncludeTBAAndIncludeTBDAndClientVisibilityAndLatlongAndRadiusAndUnitAndGeoPointAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheck(sort: string | null | undefined, startDateTime: string | null | undefined, endDateTime: string | null | undefined, onsaleStartDateTime: string | null | undefined, onsaleOnStartDate: string | null | undefined, onsaleOnAfterStartDate: string | null | undefined, onsaleEndDateTime: string | null | undefined, city: string | null | undefined, countryCode: string | null | undefined, stateCode: string | null | undefined, postalCode: string | null | undefined, venueId: string | null | undefined, attractionId: string | null | undefined, segmentId: string | null | undefined, segmentName: string | null | undefined, classificationName: Array<string> | null | undefined, classificationId: Array<string> | null | undefined, marketId: string | null | undefined, promoterId: string | null | undefined, dmaId: string | null | undefined, includeTBA: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest | null | undefined, includeTBD: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest | null | undefined, clientVisibility: string | null | undefined, latlong: string | null | undefined, radius: string | null | undefined, unit: DiscoveryV2EventsGetBySortAndStartDateTimeAndEndDateTimeAndOnsaleStartDateTimeAndOnsaleOnStartDateAndOnsaleOnAfterStartDateAndOnsaleEndDateTimeAndCityAndCountryCodeAndStateCodeAndPostalCodeAndVenueIdAndAttractionIdAndSegmentIdAndSegmentNameAndClassificationNameAndClassificationIdAndMarketIdAndPromoterIdAndDmaIdAndIncludeTBAAndIncludeTBDAndClientVisibilityAndLatlongAndRadiusAndUnitAndGeoPointAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckUnit | null | undefined, geoPoint: string | null | undefined, keyword: string | null | undefined, id: string | null | undefined, source: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource | null | undefined, includeTest: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest | null | undefined, page: string | null | undefined, size: string | null | undefined, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, includeSpellcheck: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/events?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&startDateTime=' + (startDateTime == null ? '' : encodeURIComponent(startDateTime)) + '&endDateTime=' + (endDateTime == null ? '' : encodeURIComponent(endDateTime)) + '&onsaleStartDateTime=' + (onsaleStartDateTime == null ? '' : encodeURIComponent(onsaleStartDateTime)) + '&onsaleOnStartDate=' + (onsaleOnStartDate == null ? '' : encodeURIComponent(onsaleOnStartDate)) + '&onsaleOnAfterStartDate=' + (onsaleOnAfterStartDate == null ? '' : encodeURIComponent(onsaleOnAfterStartDate)) + '&onsaleEndDateTime=' + (onsaleEndDateTime == null ? '' : encodeURIComponent(onsaleEndDateTime)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&countryCode=' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '&stateCode=' + (stateCode == null ? '' : encodeURIComponent(stateCode)) + '&postalCode=' + (postalCode == null ? '' : encodeURIComponent(postalCode)) + '&venueId=' + (venueId == null ? '' : encodeURIComponent(venueId)) + '&attractionId=' + (attractionId == null ? '' : encodeURIComponent(attractionId)) + '&segmentId=' + (segmentId == null ? '' : encodeURIComponent(segmentId)) + '&segmentName=' + (segmentName == null ? '' : encodeURIComponent(segmentName)) + '&' + classificationName?.map(z => `classificationName=${encodeURIComponent(z)}`).join('&') + '&' + classificationId?.map(z => `classificationId=${encodeURIComponent(z)}`).join('&') + '&marketId=' + (marketId == null ? '' : encodeURIComponent(marketId)) + '&promoterId=' + (promoterId == null ? '' : encodeURIComponent(promoterId)) + '&dmaId=' + (dmaId == null ? '' : encodeURIComponent(dmaId)) + '&includeTBA=' + includeTBA + '&includeTBD=' + includeTBD + '&clientVisibility=' + (clientVisibility == null ? '' : encodeURIComponent(clientVisibility)) + '&latlong=' + (latlong == null ? '' : encodeURIComponent(latlong)) + '&radius=' + (radius == null ? '' : encodeURIComponent(radius)) + '&unit=' + unit + '&geoPoint=' + (geoPoint == null ? '' : encodeURIComponent(geoPoint)) + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&source=' + source + '&includeTest=' + includeTest + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&size=' + (size == null ? '' : encodeURIComponent(size)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent + '&includeSpellcheck=' + includeSpellcheck, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Event Details
		 * Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.
		 * Get discovery/v2/events/{id}
		 * @param {string} id ID of the event
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent True if you want to display licensed content
		 * @return {void} successful operation
		 */
		DiscoveryV2Events_idGetByLocaleAndIncludeLicensedContent(id: string, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/events/' + (id == null ? '' : encodeURIComponent(id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Event Images
		 * Get images for a specific event using the unique identifier for the event.
		 * Get discovery/v2/events/{id}/images
		 * @param {string} id ID of the event
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent True if you want to display licensed content
		 * @return {void} successful operation
		 */
		DiscoveryV2Events_idImagesGetByLocaleAndIncludeLicensedContent(id: string, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/events/' + (id == null ? '' : encodeURIComponent(id)) + '/images&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find Suggest
		 * Find search suggestions and filter your suggestions by location, source, etc.
		 * Get discovery/v2/suggest
		 * @param {string} keyword Keyword to search on
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource} source Filter entities by its source name
		 * @param {string} latlong Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead
		 * @param {string} radius Radius of the area in which we want to search for events.
		 * @param {DiscoveryV2EventsGetBySortAndStartDateTimeAndEndDateTimeAndOnsaleStartDateTimeAndOnsaleOnStartDateAndOnsaleOnAfterStartDateAndOnsaleEndDateTimeAndCityAndCountryCodeAndStateCodeAndPostalCodeAndVenueIdAndAttractionIdAndSegmentIdAndSegmentNameAndClassificationNameAndClassificationIdAndMarketIdAndPromoterIdAndDmaIdAndIncludeTBAAndIncludeTBDAndClientVisibilityAndLatlongAndRadiusAndUnitAndGeoPointAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckUnit} unit Unit of the radius
		 * @param {string} size Size of every entity returned in the response
		 *     Minimum: 1    Maximum: 5
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeFuzzy yes, to include fuzzy matches in the search. This has performance impact.
		 * @param {string} clientVisibility Filter events to clientName
		 * @param {string} countryCode Filter suggestions by country code
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest} includeTBA True, to include events with date to be announce (TBA)
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest} includeTBD True, to include event with a date to be defined (TBD)
		 * @param {string} segmentId Filter suggestions by segment id
		 * @param {string} geoPoint filter events by geoHash
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent Yes if you want to display licensed content
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeSpellcheck yes, to include spell check suggestions in the response.
		 * @return {void} successful operation
		 */
		DiscoveryV2SuggestGetByKeywordAndSourceAndLatlongAndRadiusAndUnitAndSizeAndIncludeFuzzyAndClientVisibilityAndCountryCodeAndIncludeTBAAndIncludeTBDAndSegmentIdAndGeoPointAndLocaleAndIncludeLicensedContentAndIncludeSpellcheck(keyword: string | null | undefined, source: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource | null | undefined, latlong: string | null | undefined, radius: string | null | undefined, unit: DiscoveryV2EventsGetBySortAndStartDateTimeAndEndDateTimeAndOnsaleStartDateTimeAndOnsaleOnStartDateAndOnsaleOnAfterStartDateAndOnsaleEndDateTimeAndCityAndCountryCodeAndStateCodeAndPostalCodeAndVenueIdAndAttractionIdAndSegmentIdAndSegmentNameAndClassificationNameAndClassificationIdAndMarketIdAndPromoterIdAndDmaIdAndIncludeTBAAndIncludeTBDAndClientVisibilityAndLatlongAndRadiusAndUnitAndGeoPointAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckUnit | null | undefined, size: string | null | undefined, includeFuzzy: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, clientVisibility: string | null | undefined, countryCode: string | null | undefined, includeTBA: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest | null | undefined, includeTBD: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest | null | undefined, segmentId: string | null | undefined, geoPoint: string | null | undefined, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, includeSpellcheck: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/suggest?keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&source=' + source + '&latlong=' + (latlong == null ? '' : encodeURIComponent(latlong)) + '&radius=' + (radius == null ? '' : encodeURIComponent(radius)) + '&unit=' + unit + '&size=' + (size == null ? '' : encodeURIComponent(size)) + '&includeFuzzy=' + includeFuzzy + '&clientVisibility=' + (clientVisibility == null ? '' : encodeURIComponent(clientVisibility)) + '&countryCode=' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '&includeTBA=' + includeTBA + '&includeTBD=' + includeTBD + '&segmentId=' + (segmentId == null ? '' : encodeURIComponent(segmentId)) + '&geoPoint=' + (geoPoint == null ? '' : encodeURIComponent(geoPoint)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent + '&includeSpellcheck=' + includeSpellcheck, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Venue Search
		 * Find venues and filter your search by name, and much more.
		 * Get discovery/v2/venues
		 * @param {string} sort Sorting order of the search result. Allowable Values: 'name,asc', 'name,desc', 'relevance,asc', 'relevance,desc', 'distance,asc', 'distance,desc'
		 * @param {string} stateCode Filter venues by state / province code
		 * @param {string} countryCode Filter venues by country code
		 * @param {string} latlong Filter events by latitude and longitude, this filter is deprecated and maybe removed in a future release, please use geoPoint instead
		 * @param {string} radius Radius of the area in which we want to search for events.
		 * @param {DiscoveryV2EventsGetBySortAndStartDateTimeAndEndDateTimeAndOnsaleStartDateTimeAndOnsaleOnStartDateAndOnsaleOnAfterStartDateAndOnsaleEndDateTimeAndCityAndCountryCodeAndStateCodeAndPostalCodeAndVenueIdAndAttractionIdAndSegmentIdAndSegmentNameAndClassificationNameAndClassificationIdAndMarketIdAndPromoterIdAndDmaIdAndIncludeTBAAndIncludeTBDAndClientVisibilityAndLatlongAndRadiusAndUnitAndGeoPointAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckUnit} unit Unit of the radius
		 * @param {string} geoPoint filter events by geoHash
		 * @param {string} keyword Keyword to search on
		 * @param {string} id Filter entities by its id
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource} source Filter entities by its source name
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest} includeTest True if you want to have entities flag as test in the response. Only, if you only wanted test entities
		 * @param {string} page Page number
		 *     Minimum: 0
		 * @param {string} size Page size of the response
		 *     Minimum: 1    Maximum: 500
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent Yes if you want to display licensed content
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeSpellcheck yes, to include spell check suggestions in the response.
		 * @return {void} successful operation
		 */
		DiscoveryV2VenuesGetBySortAndStateCodeAndCountryCodeAndLatlongAndRadiusAndUnitAndGeoPointAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheck(sort: string | null | undefined, stateCode: string | null | undefined, countryCode: string | null | undefined, latlong: string | null | undefined, radius: string | null | undefined, unit: DiscoveryV2EventsGetBySortAndStartDateTimeAndEndDateTimeAndOnsaleStartDateTimeAndOnsaleOnStartDateAndOnsaleOnAfterStartDateAndOnsaleEndDateTimeAndCityAndCountryCodeAndStateCodeAndPostalCodeAndVenueIdAndAttractionIdAndSegmentIdAndSegmentNameAndClassificationNameAndClassificationIdAndMarketIdAndPromoterIdAndDmaIdAndIncludeTBAAndIncludeTBDAndClientVisibilityAndLatlongAndRadiusAndUnitAndGeoPointAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckUnit | null | undefined, geoPoint: string | null | undefined, keyword: string | null | undefined, id: string | null | undefined, source: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource | null | undefined, includeTest: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest | null | undefined, page: string | null | undefined, size: string | null | undefined, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, includeSpellcheck: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/venues?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&stateCode=' + (stateCode == null ? '' : encodeURIComponent(stateCode)) + '&countryCode=' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '&latlong=' + (latlong == null ? '' : encodeURIComponent(latlong)) + '&radius=' + (radius == null ? '' : encodeURIComponent(radius)) + '&unit=' + unit + '&geoPoint=' + (geoPoint == null ? '' : encodeURIComponent(geoPoint)) + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&source=' + source + '&includeTest=' + includeTest + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&size=' + (size == null ? '' : encodeURIComponent(size)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent + '&includeSpellcheck=' + includeSpellcheck, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Venue Details
		 * Get details for a specific venue using the unique identifier for the venue.
		 * Get discovery/v2/venues/{id}
		 * @param {string} id ID of the venue
		 * @param {string} locale The locale in ISO code format. Multiple comma-separated values can be provided. When omitting the country part of the code (e.g. only 'en' or 'fr') then the first matching locale is used. When using a '*' it matches all locales. '*' can only be used at the end (e.g. 'en-us,en,*') 
		 * @param {DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent} includeLicensedContent True if you want to display licensed content
		 * @return {void} successful operation
		 */
		DiscoveryV2Venues_idGetByLocaleAndIncludeLicensedContent(id: string, locale: string | null | undefined, includeLicensedContent: DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'discovery/v2/venues/' + (id == null ? '' : encodeURIComponent(id)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&includeLicensedContent=' + includeLicensedContent, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckSource { ticketmaster = 'ticketmaster', ' universe' = ' universe', ' frontgate' = ' frontgate', ' tmr' = ' tmr' }

	export enum DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeTest { yes = 'yes', ' no' = ' no', ' only' = ' only' }

	export enum DiscoveryV2AttractionsGetBySortAndClassificationNameAndClassificationIdAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckIncludeLicensedContent { yes = 'yes', ' no' = ' no' }

	export enum DiscoveryV2EventsGetBySortAndStartDateTimeAndEndDateTimeAndOnsaleStartDateTimeAndOnsaleOnStartDateAndOnsaleOnAfterStartDateAndOnsaleEndDateTimeAndCityAndCountryCodeAndStateCodeAndPostalCodeAndVenueIdAndAttractionIdAndSegmentIdAndSegmentNameAndClassificationNameAndClassificationIdAndMarketIdAndPromoterIdAndDmaIdAndIncludeTBAAndIncludeTBDAndClientVisibilityAndLatlongAndRadiusAndUnitAndGeoPointAndKeywordAndIdAndSourceAndIncludeTestAndPageAndSizeAndLocaleAndIncludeLicensedContentAndIncludeSpellcheckUnit { miles = 'miles', km = 'km' }

}

