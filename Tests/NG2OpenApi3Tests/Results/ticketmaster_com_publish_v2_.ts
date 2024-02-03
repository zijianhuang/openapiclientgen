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


	/** Address */
	export interface Address {

		/** Aaddress first line - multi-lingual fields */
		line1s?: {[id: string]: string };

		/** Address second line - multi-lingual fields */
		line2s?: {[id: string]: string };

		/** Address third line - multi-lingual fields */
		line3s?: {[id: string]: string };
	}

	/** Address */
	export interface AddressFormProperties {

		/** Aaddress first line - multi-lingual fields */
		line1s: FormControl<{[id: string]: string } | null | undefined>,

		/** Address second line - multi-lingual fields */
		line2s: FormControl<{[id: string]: string } | null | undefined>,

		/** Address third line - multi-lingual fields */
		line3s: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			line1s: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			line2s: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			line3s: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Area */
	export interface Area {

		/** Names of the entity - multi-lingual fields */
		names?: {[id: string]: string };
	}

	/** Area */
	export interface AreaFormProperties {

		/** Names of the entity - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAreaFormGroup() {
		return new FormGroup<AreaFormProperties>({
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Attraction */
	export interface Attraction {

		/** Indicate if the entity is active, inactive entity won't appear in Discovery API */
		active?: boolean | null;

		/** Additional informations of the entity - multi-lingual fields */
		additionalInfos?: {[id: string]: string };

		/** Attraction's classifications */
		classifications?: Array<Classification>;

		/** Descriptions of the entity - multi-lingual fields */
		descriptions?: {[id: string]: string };

		/** True if the entity is dicoverable in discovery API */
		discoverable?: boolean | null;

		/** Images of the entity */
		images?: Array<Image>;

		/** Names of the entity - multi-lingual fields */
		names?: {[id: string]: string };

		/** References of this entity in an other system. Reference is the exact same entity */
		references?: {[id: string]: string };

		/** Relationships on the entity, like if the entity is a duplicate of another one */
		relationships?: Array<Relationship>;

		/** Source */
		source?: Source;

		/** Indicate if this is a test entity, by default test entities won't appear in discovery API */
		test?: boolean | null;

		/**
		 * Type of the entity
		 * Required
		 */
		type: AttractionType;

		/** URL of a web site detail page of the entity */
		url?: string | null;

		/** Version of the entity. Version is to avoid updated an entity with an older version */
		version?: number | null;
	}

	/** Attraction */
	export interface AttractionFormProperties {

		/** Indicate if the entity is active, inactive entity won't appear in Discovery API */
		active: FormControl<boolean | null | undefined>,

		/** Additional informations of the entity - multi-lingual fields */
		additionalInfos: FormControl<{[id: string]: string } | null | undefined>,

		/** Descriptions of the entity - multi-lingual fields */
		descriptions: FormControl<{[id: string]: string } | null | undefined>,

		/** True if the entity is dicoverable in discovery API */
		discoverable: FormControl<boolean | null | undefined>,

		/** Names of the entity - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,

		/** References of this entity in an other system. Reference is the exact same entity */
		references: FormControl<{[id: string]: string } | null | undefined>,

		/** Indicate if this is a test entity, by default test entities won't appear in discovery API */
		test: FormControl<boolean | null | undefined>,

		/**
		 * Type of the entity
		 * Required
		 */
		type: FormControl<AttractionType | null | undefined>,

		/** URL of a web site detail page of the entity */
		url: FormControl<string | null | undefined>,

		/** Version of the entity. Version is to avoid updated an entity with an older version */
		version: FormControl<number | null | undefined>,
	}
	export function CreateAttractionFormGroup() {
		return new FormGroup<AttractionFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			additionalInfos: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			descriptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			discoverable: new FormControl<boolean | null | undefined>(undefined),
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			references: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<AttractionType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Classification */
	export interface Classification {
		genre?: Level;
		primary?: boolean | null;

		/** Segment */
		segment?: Segment;
		subGenre?: Level;
		subType?: Level;
		type?: Level;
	}

	/** Classification */
	export interface ClassificationFormProperties {
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

		/** The Name of the classification's level - multi-lingual fields */
		names?: {[id: string]: string };
	}
	export interface LevelFormProperties {

		/** The ID of the classification's level */
		id: FormControl<string | null | undefined>,

		/** The Name of the classification's level - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLevelFormGroup() {
		return new FormGroup<LevelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Segment */
	export interface Segment {

		/** The ID of the classification's level */
		id?: string | null;

		/** The Name of the classification's level - multi-lingual fields */
		names?: {[id: string]: string };
	}

	/** Segment */
	export interface SegmentFormProperties {

		/** The ID of the classification's level */
		id: FormControl<string | null | undefined>,

		/** The Name of the classification's level - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Image */
	export interface Image {

		/** Attribution of the image */
		attribution?: string | null;

		/** Domains on which this image should be displayed */
		domains?: Array<string>;

		/** true if the image is not the event's image but a fallbak image */
		fallback?: boolean | null;

		/** Height of the image */
		height?: number | null;

		/** Aspect ratio of the image */
		ratio?: ImageRatio | null;

		/** Public URL of the image */
		url?: string | null;

		/** Width of the image */
		width?: number | null;
	}

	/** Image */
	export interface ImageFormProperties {

		/** Attribution of the image */
		attribution: FormControl<string | null | undefined>,

		/** true if the image is not the event's image but a fallbak image */
		fallback: FormControl<boolean | null | undefined>,

		/** Height of the image */
		height: FormControl<number | null | undefined>,

		/** Aspect ratio of the image */
		ratio: FormControl<ImageRatio | null | undefined>,

		/** Public URL of the image */
		url: FormControl<string | null | undefined>,

		/** Width of the image */
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


	/** Relationship */
	export interface Relationship {
	}

	/** Relationship */
	export interface RelationshipFormProperties {
	}
	export function CreateRelationshipFormGroup() {
		return new FormGroup<RelationshipFormProperties>({
		});

	}


	/** Source */
	export interface Source {

		/** ID of the entity in the source's system */
		id?: string | null;

		/** Source's name */
		name?: string | null;
	}

	/** Source */
	export interface SourceFormProperties {

		/** ID of the entity in the source's system */
		id: FormControl<string | null | undefined>,

		/** Source's name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_-]*$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9_-]*$')]),
		});

	}

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


	/** This class defines the Augmentation Data on the Publish API */
	export interface AugmentationData {

		/**
		 * List of changes to apply to the related entity
		 * Required
		 */
		changes: Array<Change>;

		/**
		 * Id of the entity to apply the augmentation data.
		 * Required
		 */
		relatedEntityId: string;

		/**
		 * The type of the entity to apply the augmentation data.
		 * Required
		 */
		relatedEntityType: AugmentationDataRelatedEntityType;

		/** The confidence (%) level of the accuracy of this augmention data. 100 is the better */
		score?: number | null;

		/**
		 * The source where the augementation data came from
		 * Required
		 */
		source: string;

		/**
		 * Vesion of this augmentation data. This field is to avoid updating entity with old data.
		 * Required
		 */
		versionNumber: number;
	}

	/** This class defines the Augmentation Data on the Publish API */
	export interface AugmentationDataFormProperties {

		/**
		 * Id of the entity to apply the augmentation data.
		 * Required
		 */
		relatedEntityId: FormControl<string | null | undefined>,

		/**
		 * The type of the entity to apply the augmentation data.
		 * Required
		 */
		relatedEntityType: FormControl<AugmentationDataRelatedEntityType | null | undefined>,

		/** The confidence (%) level of the accuracy of this augmention data. 100 is the better */
		score: FormControl<number | null | undefined>,

		/**
		 * The source where the augementation data came from
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * Vesion of this augmentation data. This field is to avoid updating entity with old data.
		 * Required
		 */
		versionNumber: FormControl<number | null | undefined>,
	}
	export function CreateAugmentationDataFormGroup() {
		return new FormGroup<AugmentationDataFormProperties>({
			relatedEntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relatedEntityType: new FormControl<AugmentationDataRelatedEntityType | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			versionNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This class defines the Changes on the Publish API */
	export interface Change {

		/** Json path of the source entity when using the move operation. */
		from?: string | null;

		/**
		 * Operation to apply on the entity.
		 * Required
		 */
		op: ChangeOp;

		/**
		 * Json path from the root of the document to the place where the change should be applied.
		 * Required
		 */
		path: string;

		/** Data to change. MUST be a valid json object. */
		value?: string | null;
	}

	/** This class defines the Changes on the Publish API */
	export interface ChangeFormProperties {

		/** Json path of the source entity when using the move operation. */
		from: FormControl<string | null | undefined>,

		/**
		 * Operation to apply on the entity.
		 * Required
		 */
		op: FormControl<ChangeOp | null | undefined>,

		/**
		 * Json path from the root of the document to the place where the change should be applied.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** Data to change. MUST be a valid json object. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			op: new FormControl<ChangeOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChangeOp { add = 'add', remove = 'remove', replace = 'replace', move = 'move', copy = 'copy', test = 'test' }

	export enum AugmentationDataRelatedEntityType { event = 'event', attraction = 'attraction', venue = 'venue' }

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

		/** Names of the entity - multi-lingual fields */
		names?: {[id: string]: string };
	}

	/** City */
	export interface CityFormProperties {

		/** Names of the entity - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCityFormGroup() {
		return new FormGroup<CityFormProperties>({
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Country */
	export interface Country {

		/** Country code (ISO 3166) */
		countryCode?: string | null;

		/** Names of the entity - multi-lingual fields */
		names?: {[id: string]: string };
	}

	/** Country */
	export interface CountryFormProperties {

		/** Country code (ISO 3166) */
		countryCode: FormControl<string | null | undefined>,

		/** Names of the entity - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DateTimeField {
		durationField?: DurationField;
		leapDurationField?: DurationField;
		lenient?: boolean | null;
		maximumValue?: number | null;
		minimumValue?: number | null;
		name?: string | null;
		rangeDurationField?: DurationField;
		supported?: boolean | null;
		type?: DateTimeFieldType;
	}
	export interface DateTimeFieldFormProperties {
		lenient: FormControl<boolean | null | undefined>,
		maximumValue: FormControl<number | null | undefined>,
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
		unitMillis?: number | null;
	}
	export interface DurationFieldFormProperties {
		name: FormControl<string | null | undefined>,
		precise: FormControl<boolean | null | undefined>,
		supported: FormControl<boolean | null | undefined>,
		unitMillis: FormControl<number | null | undefined>,
	}
	export function CreateDurationFieldFormGroup() {
		return new FormGroup<DurationFieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			precise: new FormControl<boolean | null | undefined>(undefined),
			supported: new FormControl<boolean | null | undefined>(undefined),
			unitMillis: new FormControl<number | null | undefined>(undefined),
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
	}

	/** Event's display settings extension */
	export interface DisplaySettingExtensionFormProperties {
	}
	export function CreateDisplaySettingExtensionFormGroup() {
		return new FormGroup<DisplaySettingExtensionFormProperties>({
		});

	}


	/** DMA (Designated Market Area) */
	export interface Dma {

		/** DMS's id */
		id?: number | null;
	}

	/** DMA (Designated Market Area) */
	export interface DmaFormProperties {

		/** DMS's id */
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
		localTime?: LocalTime;
	}

	/** Event's End Dates */
	export interface EndDatesFormProperties {

		/** Boolean flag to indicate whether or not the end date is approximated */
		approximate: FormControl<boolean | null | undefined>,

		/** The event end date time */
		dateTime: FormControl<Date | null | undefined>,
	}
	export function CreateEndDatesFormGroup() {
		return new FormGroup<EndDatesFormProperties>({
			approximate: new FormControl<boolean | null | undefined>(undefined),
			dateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface LocalTime {
		chronology?: Chronology;
		fieldTypes?: Array<DateTimeFieldType>;
		fields?: Array<DateTimeField>;
		hourOfDay?: number | null;
		millisOfDay?: number | null;
		millisOfSecond?: number | null;
		minuteOfHour?: number | null;
		secondOfMinute?: number | null;
		values?: Array<number>;
	}
	export interface LocalTimeFormProperties {
		hourOfDay: FormControl<number | null | undefined>,
		millisOfDay: FormControl<number | null | undefined>,
		millisOfSecond: FormControl<number | null | undefined>,
		minuteOfHour: FormControl<number | null | undefined>,
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


	/** This class defines an entitlement data on the Publish API */
	export interface Entitlement {

		/**
		 * The actual entitlements information to add to the entity
		 * Required
		 */
		data: string;

		/** Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided */
		relatedEntityId?: string | null;

		/** Source */
		relatedEntitySource?: Source;

		/**
		 * The type of the entity to add this entitlement to
		 * Required
		 */
		relatedEntityType: AttractionType;

		/**
		 * Source of the extension, where it came from
		 * Required
		 */
		source: EntitlementSource;

		/** Version of the entitlements. Version is to prevent to override an entitlements with an older one */
		versionNumber?: number | null;
	}

	/** This class defines an entitlement data on the Publish API */
	export interface EntitlementFormProperties {

		/**
		 * The actual entitlements information to add to the entity
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/** Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided */
		relatedEntityId: FormControl<string | null | undefined>,

		/**
		 * The type of the entity to add this entitlement to
		 * Required
		 */
		relatedEntityType: FormControl<AttractionType | null | undefined>,

		/**
		 * Source of the extension, where it came from
		 * Required
		 */
		source: FormControl<EntitlementSource | null | undefined>,

		/** Version of the entitlements. Version is to prevent to override an entitlements with an older one */
		versionNumber: FormControl<number | null | undefined>,
	}
	export function CreateEntitlementFormGroup() {
		return new FormGroup<EntitlementFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relatedEntityId: new FormControl<string | null | undefined>(undefined),
			relatedEntityType: new FormControl<AttractionType | null | undefined>(undefined, [Validators.required, Validators.pattern('^event|venue|attraction$')]),
			source: new FormControl<EntitlementSource | null | undefined>(undefined, [Validators.required]),
			versionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EntitlementSource { ticketmaster = 'ticketmaster' }

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

		/** Indicate if the entity is active, inactive entity won't appear in Discovery API */
		active?: boolean | null;

		/** Additional informations of the entity - multi-lingual fields */
		additionalInfos?: {[id: string]: string };

		/** Ordered Attraction related to the event */
		attractions?: Array<Attraction>;

		/** Event's classifications */
		classifications?: Array<Classification>;

		/** Event's Dates */
		dates?: EventDates;

		/** Descriptions of the entity - multi-lingual fields */
		descriptions?: {[id: string]: string };

		/** True if the entity is dicoverable in discovery API */
		discoverable?: boolean | null;
		distance?: number | null;

		/** Images of the entity */
		images?: Array<Image>;

		/** Any information related to the event - multi-lingual fields */
		infos?: {[id: string]: string };

		/** Location */
		location?: Location;

		/** Names of the entity - multi-lingual fields */
		names?: {[id: string]: string };

		/** Place */
		place?: Place;

		/** Any notes related to the event - multi-lingual fields */
		pleaseNotes?: {[id: string]: string };

		/** Price ranges of this event */
		priceRanges?: Array<PriceRange>;

		/** Promoter */
		promoter?: Promoter;

		/** The class defines the public visibility period on the Discovery/Publish API. */
		publicVisibility?: PublicVisibility;

		/** References of this entity in an other system. Reference is the exact same entity */
		references?: {[id: string]: string };

		/** Relationships on the entity, like if the entity is a duplicate of another one */
		relationships?: Array<Relationship>;

		/** Event's Sales Dates */
		sales?: EventSalesDates;

		/** Source */
		source?: Source;

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

		/** Venue */
		venue?: Venue;

		/** Version of the entity. Version is to avoid updated an entity with an older version */
		version?: number | null;
	}

	/** Event */
	export interface EventFormProperties {

		/** Indicate if the entity is active, inactive entity won't appear in Discovery API */
		active: FormControl<boolean | null | undefined>,

		/** Additional informations of the entity - multi-lingual fields */
		additionalInfos: FormControl<{[id: string]: string } | null | undefined>,

		/** Descriptions of the entity - multi-lingual fields */
		descriptions: FormControl<{[id: string]: string } | null | undefined>,

		/** True if the entity is dicoverable in discovery API */
		discoverable: FormControl<boolean | null | undefined>,
		distance: FormControl<number | null | undefined>,

		/** Any information related to the event - multi-lingual fields */
		infos: FormControl<{[id: string]: string } | null | undefined>,

		/** Names of the entity - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,

		/** Any notes related to the event - multi-lingual fields */
		pleaseNotes: FormControl<{[id: string]: string } | null | undefined>,

		/** References of this entity in an other system. Reference is the exact same entity */
		references: FormControl<{[id: string]: string } | null | undefined>,

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

		/** Version of the entity. Version is to avoid updated an entity with an older version */
		version: FormControl<number | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			additionalInfos: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			descriptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			discoverable: new FormControl<boolean | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			infos: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pleaseNotes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			references: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<AttractionType | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Event's Dates */
	export interface EventDates {

		/** Event's Access Date */
		access?: AccessDates;

		/** Event's End Dates */
		end?: EndDates;

		/** Event's Start Dates */
		start?: StartDates;

		/** Event's Status */
		status?: EventStatus;

		/** Event's timezone */
		timezone?: string | null;
	}

	/** Event's Dates */
	export interface EventDatesFormProperties {

		/** Event's timezone */
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateEventDatesFormGroup() {
		return new FormGroup<EventDatesFormProperties>({
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

		/** The event start date in local date */
		localDate?: Date | null;
		localTime?: LocalTime;

		/** Boolean flag to indicate whether or not the event has no specific time */
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

		/** The event start date in local date */
		localDate: FormControl<Date | null | undefined>,

		/** Boolean flag to indicate whether or not the event has no specific time */
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

		/** Latitude */
		latitude?: number | null;

		/** Longitude */
		longitude?: number | null;
	}

	/** Location */
	export interface LocationFormProperties {

		/** Latitude */
		latitude: FormControl<number | null | undefined>,

		/** Longitude */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
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

		/** Names of the entity - multi-lingual fields */
		names?: {[id: string]: string };

		/** Postal code / zipcode of the place */
		postalCode?: string | null;

		/** State */
		state?: State;
	}

	/** Place */
	export interface PlaceFormProperties {

		/** Names of the entity - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,

		/** Postal code / zipcode of the place */
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State */
	export interface State {

		/** Names of the entity - multi-lingual fields */
		names?: {[id: string]: string };

		/** State code */
		stateCode?: string | null;
	}

	/** State */
	export interface StateFormProperties {

		/** Names of the entity - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,

		/** State code */
		stateCode: FormControl<string | null | undefined>,
	}
	export function CreateStateFormGroup() {
		return new FormGroup<StateFormProperties>({
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			stateCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PriceRange */
	export interface PriceRange {

		/** Currency */
		currency?: string | null;

		/** Maximum price */
		max?: number | null;

		/** Minimum price */
		min?: number | null;

		/** Type of price */
		type?: PriceRangeType | null;
	}

	/** PriceRange */
	export interface PriceRangeFormProperties {

		/** Currency */
		currency: FormControl<string | null | undefined>,

		/** Maximum price */
		max: FormControl<number | null | undefined>,

		/** Minimum price */
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


	/** Promoter */
	export interface Promoter {

		/** Description of the promoter - multi-lingual fields */
		descriptions?: {[id: string]: string };

		/** Id of the promoter */
		id?: string | null;

		/** Name of the promoter - multi-lingual fields */
		names?: {[id: string]: string };
	}

	/** Promoter */
	export interface PromoterFormProperties {

		/** Description of the promoter - multi-lingual fields */
		descriptions: FormControl<{[id: string]: string } | null | undefined>,

		/** Id of the promoter */
		id: FormControl<string | null | undefined>,

		/** Name of the promoter - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePromoterFormGroup() {
		return new FormGroup<PromoterFormProperties>({
			descriptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The class defines the public visibility period on the Discovery/Publish API. */
	export interface PublicVisibility {

		/** The end of the public visibility. The date and time when the event will be public visible */
		endDateTime?: Date | null;

		/** The start of the public visibility. The date and time when the event will be public visible */
		startDateTime?: Date | null;

		/** True if you want to have the event visible in the discovery API */
		visible?: boolean | null;
	}

	/** The class defines the public visibility period on the Discovery/Publish API. */
	export interface PublicVisibilityFormProperties {

		/** The end of the public visibility. The date and time when the event will be public visible */
		endDateTime: FormControl<Date | null | undefined>,

		/** The start of the public visibility. The date and time when the event will be public visible */
		startDateTime: FormControl<Date | null | undefined>,

		/** True if you want to have the event visible in the discovery API */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreatePublicVisibilityFormGroup() {
		return new FormGroup<PublicVisibilityFormProperties>({
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
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

		/** Description of the presale - multi-lingual fields */
		descriptions?: {[id: string]: string };

		/** Presale's end dates. The date and time when the presale will end */
		endDateTime?: Date | null;

		/** Name of the presale - multi-lingual fields */
		names?: {[id: string]: string };

		/** Presale's start dates. The date and time when the presale will start */
		startDateTime?: Date | null;

		/** Presale link URL */
		url?: string | null;
	}

	/** Event's Presale Info */
	export interface PresaleFormProperties {

		/** Description of the presale - multi-lingual fields */
		descriptions: FormControl<{[id: string]: string } | null | undefined>,

		/** Presale's end dates. The date and time when the presale will end */
		endDateTime: FormControl<Date | null | undefined>,

		/** Name of the presale - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,

		/** Presale's start dates. The date and time when the presale will start */
		startDateTime: FormControl<Date | null | undefined>,

		/** Presale link URL */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePresaleFormGroup() {
		return new FormGroup<PresaleFormProperties>({
			descriptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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


	/** Venue */
	export interface Venue {

		/** Venue accessible seating details - multi-lingual fields */
		accessibleSeatingDetails?: {[id: string]: string };

		/** Indicate if the entity is active, inactive entity won't appear in Discovery API */
		active?: boolean | null;

		/** Additional informations of the entity - multi-lingual fields */
		additionalInfos?: {[id: string]: string };

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

		/** Descriptions of the entity - multi-lingual fields */
		descriptions?: {[id: string]: string };

		/** True if the entity is dicoverable in discovery API */
		discoverable?: boolean | null;
		distance?: number | null;

		/** The list of associated DMAs (Designated Market Areas) of the venue */
		dma?: Array<Dma>;

		/** Venue general information */
		generalInfo?: VenueGeneralInfo;

		/** Images of the entity */
		images?: Array<Image>;

		/** Location */
		location?: Location;

		/** Markets of the venue */
		markets?: Array<Market>;

		/** Names of the entity - multi-lingual fields */
		names?: {[id: string]: string };

		/** Venue parking info - multi-lingual fields */
		parkingDetails?: {[id: string]: string };

		/** Postal code / zipcode of the venue */
		postalCode?: string | null;

		/** References of this entity in an other system. Reference is the exact same entity */
		references?: {[id: string]: string };

		/** Relationships on the entity, like if the entity is a duplicate of another one */
		relationships?: Array<Relationship>;

		/** Social networks data */
		social?: Social;

		/** Source */
		source?: Source;

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

		/** URL of a web site detail page of the entity */
		url?: string | null;

		/** Version of the entity. Version is to avoid updated an entity with an older version */
		version?: number | null;
	}

	/** Venue */
	export interface VenueFormProperties {

		/** Venue accessible seating details - multi-lingual fields */
		accessibleSeatingDetails: FormControl<{[id: string]: string } | null | undefined>,

		/** Indicate if the entity is active, inactive entity won't appear in Discovery API */
		active: FormControl<boolean | null | undefined>,

		/** Additional informations of the entity - multi-lingual fields */
		additionalInfos: FormControl<{[id: string]: string } | null | undefined>,

		/** Default currency of ticket prices for events in this venue */
		currency: FormControl<string | null | undefined>,

		/** Descriptions of the entity - multi-lingual fields */
		descriptions: FormControl<{[id: string]: string } | null | undefined>,

		/** True if the entity is dicoverable in discovery API */
		discoverable: FormControl<boolean | null | undefined>,
		distance: FormControl<number | null | undefined>,

		/** Names of the entity - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,

		/** Venue parking info - multi-lingual fields */
		parkingDetails: FormControl<{[id: string]: string } | null | undefined>,

		/** Postal code / zipcode of the venue */
		postalCode: FormControl<string | null | undefined>,

		/** References of this entity in an other system. Reference is the exact same entity */
		references: FormControl<{[id: string]: string } | null | undefined>,

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

		/** URL of a web site detail page of the entity */
		url: FormControl<string | null | undefined>,

		/** Version of the entity. Version is to avoid updated an entity with an older version */
		version: FormControl<number | null | undefined>,
	}
	export function CreateVenueFormGroup() {
		return new FormGroup<VenueFormProperties>({
			accessibleSeatingDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			additionalInfos: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			descriptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			discoverable: new FormControl<boolean | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parkingDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			references: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AttractionType | null | undefined>(undefined, [Validators.required]),
			units: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Venue box office information */
	export interface VenueBoxOfficeInfo {

		/** Venue box office accepted payment details - multi-lingual fields */
		acceptedPaymentDetails?: {[id: string]: string };

		/** Venue box office opening hours - multi-lingual fields */
		openHoursDetails?: {[id: string]: string };

		/** Venue box office phone number - multi-lingual fields */
		phoneNumberDetails?: {[id: string]: string };

		/** Venue box office will call details - multi-lingual fields */
		willCallDetails?: {[id: string]: string };
	}

	/** Venue box office information */
	export interface VenueBoxOfficeInfoFormProperties {

		/** Venue box office accepted payment details - multi-lingual fields */
		acceptedPaymentDetails: FormControl<{[id: string]: string } | null | undefined>,

		/** Venue box office opening hours - multi-lingual fields */
		openHoursDetails: FormControl<{[id: string]: string } | null | undefined>,

		/** Venue box office phone number - multi-lingual fields */
		phoneNumberDetails: FormControl<{[id: string]: string } | null | undefined>,

		/** Venue box office will call details - multi-lingual fields */
		willCallDetails: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateVenueBoxOfficeInfoFormGroup() {
		return new FormGroup<VenueBoxOfficeInfoFormProperties>({
			acceptedPaymentDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			openHoursDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			phoneNumberDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			willCallDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Venue general information */
	export interface VenueGeneralInfo {

		/** Venue children rules - multi-lingual fields */
		childRules?: {[id: string]: string };

		/** Venue general rules - multi-lingual fields */
		generalRules?: {[id: string]: string };
	}

	/** Venue general information */
	export interface VenueGeneralInfoFormProperties {

		/** Venue children rules - multi-lingual fields */
		childRules: FormControl<{[id: string]: string } | null | undefined>,

		/** Venue general rules - multi-lingual fields */
		generalRules: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateVenueGeneralInfoFormGroup() {
		return new FormGroup<VenueGeneralInfoFormProperties>({
			childRules: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			generalRules: new FormControl<{[id: string]: string } | null | undefined>(undefined),
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

	export interface Extension {
	}
	export interface ExtensionFormProperties {
	}
	export function CreateExtensionFormGroup() {
		return new FormGroup<ExtensionFormProperties>({
		});

	}


	/** This class defines an extenstion data on the Publish API */
	export interface ExtensionData {

		/**
		 * The actual information to add to the entity
		 * Required
		 */
		data: string;

		/** Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided */
		relatedEntityId?: string | null;

		/** Source */
		relatedEntitySource?: Source;

		/**
		 * The type of the entity to add this extensions to
		 * Required
		 */
		relatedEntityType: AttractionType;

		/**
		 * Source of the extension, where it came from
		 * Required
		 */
		source: string;

		/**
		 * The type of the extension. This represent the data sent
		 * Required
		 */
		type: string;

		/** Version of the extensions. Version is to prevent to override an extension with an older one */
		versionNumber?: number | null;
	}

	/** This class defines an extenstion data on the Publish API */
	export interface ExtensionDataFormProperties {

		/**
		 * The actual information to add to the entity
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/** Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided */
		relatedEntityId: FormControl<string | null | undefined>,

		/**
		 * The type of the entity to add this extensions to
		 * Required
		 */
		relatedEntityType: FormControl<AttractionType | null | undefined>,

		/**
		 * Source of the extension, where it came from
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * The type of the extension. This represent the data sent
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** Version of the extensions. Version is to prevent to override an extension with an older one */
		versionNumber: FormControl<number | null | undefined>,
	}
	export function CreateExtensionDataFormGroup() {
		return new FormGroup<ExtensionDataFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relatedEntityId: new FormControl<string | null | undefined>(undefined),
			relatedEntityType: new FormControl<AttractionType | null | undefined>(undefined, [Validators.required, Validators.pattern('^event|venue|attraction$')]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			versionNumber: new FormControl<number | null | undefined>(undefined),
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
	}

	/** Venue's geocode extension */
	export interface GeolocationVenueExtensionsFormProperties {
	}
	export function CreateGeolocationVenueExtensionsFormGroup() {
		return new FormGroup<GeolocationVenueExtensionsFormProperties>({
		});

	}


	/** Venue's Host extension */
	export interface HostExtension {
	}

	/** Venue's Host extension */
	export interface HostExtensionFormProperties {
	}
	export function CreateHostExtensionFormGroup() {
		return new FormGroup<HostExtensionFormProperties>({
		});

	}


	/** This class defines the IngestionResult on the Publish API */
	export interface IngestionResult {

		/** Id of the entity ingested in the discovery api */
		id?: string | null;

		/** List properties that are ignored in the validation */
		ignoredProperties?: {[id: string]: any };

		/** List of invalid properties */
		invalidProperties?: {[id: string]: any };

		/** List of invalid values */
		invalidValues?: {[id: string]: any };

		/** List of properties that should be present in your entity to ease its dicovery */
		missingProperties?: {[id: string]: any };

		/**
		 * Status of the result
		 * Required
		 */
		status: IngestionResultStatus;

		/** List of unknown properties that will be dropped */
		unknownProperties?: {[id: string]: any };
	}

	/** This class defines the IngestionResult on the Publish API */
	export interface IngestionResultFormProperties {

		/** Id of the entity ingested in the discovery api */
		id: FormControl<string | null | undefined>,

		/** List properties that are ignored in the validation */
		ignoredProperties: FormControl<{[id: string]: any } | null | undefined>,

		/** List of invalid properties */
		invalidProperties: FormControl<{[id: string]: any } | null | undefined>,

		/** List of invalid values */
		invalidValues: FormControl<{[id: string]: any } | null | undefined>,

		/** List of properties that should be present in your entity to ease its dicovery */
		missingProperties: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Status of the result
		 * Required
		 */
		status: FormControl<IngestionResultStatus | null | undefined>,

		/** List of unknown properties that will be dropped */
		unknownProperties: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateIngestionResultFormGroup() {
		return new FormGroup<IngestionResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			ignoredProperties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			invalidProperties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			invalidValues: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			missingProperties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			status: new FormControl<IngestionResultStatus | null | undefined>(undefined, [Validators.required]),
			unknownProperties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum IngestionResultStatus { Error = 'Error', SuccessWarning = 'SuccessWarning', Success = 'Success' }


	/** This class defines an entitlement data on the Publish API */
	export interface LicensingInformation {

		/**
		 * License name
		 * Required
		 */
		license: string;

		/** This class defines an entitlement data on the Publish API */
		regionRestriction?: RegionRestrictions;
	}

	/** This class defines an entitlement data on the Publish API */
	export interface LicensingInformationFormProperties {

		/**
		 * License name
		 * Required
		 */
		license: FormControl<string | null | undefined>,
	}
	export function CreateLicensingInformationFormGroup() {
		return new FormGroup<LicensingInformationFormProperties>({
			license: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This class defines an entitlement data on the Publish API */
	export interface RegionRestrictions {

		/** Restrictions based on regions */
		allowed?: Array<string>;
	}

	/** This class defines an entitlement data on the Publish API */
	export interface RegionRestrictionsFormProperties {
	}
	export function CreateRegionRestrictionsFormGroup() {
		return new FormGroup<RegionRestrictionsFormProperties>({
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


	/** Parking */
	export interface Parking {

		/** Names of the entity - multi-lingual fields */
		names?: {[id: string]: string };

		/** Url to the web page of the parking */
		url?: string | null;
	}

	/** Parking */
	export interface ParkingFormProperties {

		/** Names of the entity - multi-lingual fields */
		names: FormControl<{[id: string]: string } | null | undefined>,

		/** Url to the web page of the parking */
		url: FormControl<string | null | undefined>,
	}
	export function CreateParkingFormGroup() {
		return new FormGroup<ParkingFormProperties>({
			names: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
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


	/** All Venue's extensions */
	export interface VenueExtensions {
	}

	/** All Venue's extensions */
	export interface VenueExtensionsFormProperties {
	}
	export function CreateVenueExtensionsFormGroup() {
		return new FormGroup<VenueExtensionsFormProperties>({
		});

	}


	/** This class defines an entitlement data on the Publish API */
	export interface Video {

		/** The url of the embeded video */
		embedUrl?: string | null;

		/**
		 * This class defines an entitlement data on the Publish API
		 * Required
		 */
		licensingInformation: LicensingInformation;

		/**
		 * Source
		 * Required
		 */
		source: Source;

		/**
		 * The url of the video
		 * Required
		 */
		url: string;
	}

	/** This class defines an entitlement data on the Publish API */
	export interface VideoFormProperties {

		/** The url of the embeded video */
		embedUrl: FormControl<string | null | undefined>,

		/**
		 * The url of the video
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
			embedUrl: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Publish an attractions
		 * Since 1.0.0
		 * Post publish/v2/attractions
		 * @param {Attraction} requestBody Attraction
		 * @return {void} successful operation
		 */
		PublishAttraction(requestBody: Attraction): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'publish/v2/attractions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish a patch on an attraction
		 * Since 1.0.0
		 * Patch publish/v2/attractions/{id}
		 * @param {string} id ID of the attraction the patch will be applied
		 * @param {AugmentationData} requestBody Patch to apply
		 * @return {void} successful operation
		 */
		PatchAttraction(id: string, requestBody: AugmentationData): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'publish/v2/attractions/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish a video on an attraction
		 * Since 1.0.0
		 * Post publish/v2/attractions/{id}/videos
		 * @param {string} id ID of the attraction the video is linked to
		 * @param {Video} requestBody Video data
		 * @return {void} successful operation
		 */
		PublishAttractionVideos(id: string, requestBody: Video): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'publish/v2/attractions/' + (id == null ? '' : encodeURIComponent(id)) + '/videos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish entitlements on an entity
		 * Since 2.0.0
		 * Post publish/v2/entitlements
		 * @param {Entitlement} requestBody Entitlements information to add to the entity
		 * @return {void} successful operation
		 */
		PublishEntitlements(requestBody: Entitlement): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'publish/v2/entitlements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish an event
		 * Since 1.0.0
		 * Post publish/v2/events
		 * @param {Event} requestBody Event
		 * @return {void} successful operation
		 */
		PublishEvent(requestBody: Event): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'publish/v2/events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish a patch on an event
		 * Since 1.0.0
		 * Patch publish/v2/events/{id}
		 * @param {string} id ID of the event the patch will be applied
		 * @param {AugmentationData} requestBody Patch to apply
		 * @return {void} successful operation
		 */
		PatchEvent(id: string, requestBody: AugmentationData): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'publish/v2/events/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish a video on an event
		 * Since 1.0.0
		 * Post publish/v2/events/{id}/videos
		 * @param {string} id ID of the event the video is linked to
		 * @param {Video} requestBody Video data
		 * @return {void} successful operation
		 */
		PublishEventVideos(id: string, requestBody: Video): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'publish/v2/events/' + (id == null ? '' : encodeURIComponent(id)) + '/videos', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish extension on an entity
		 * Since 1.0.0
		 * Post publish/v2/extensions
		 * @param {ExtensionData} requestBody Extension information to add to the entity
		 * @return {void} successful operation
		 */
		PublishExtension(requestBody: ExtensionData): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'publish/v2/extensions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish a venue
		 * Since 1.0.0
		 * Post publish/v2/venues
		 * @param {Venue} requestBody Venue
		 * @return {void} successful operation
		 */
		PublishVenue(requestBody: Venue): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'publish/v2/venues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publish a patch on a venue
		 * Since 1.0.0
		 * Patch publish/v2/venues/{id}
		 * @param {string} id ID of the venue the patch will be applied
		 * @param {AugmentationData} requestBody Patch to apply
		 * @return {void} successful operation
		 */
		PatchVenue(id: string, requestBody: AugmentationData): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'publish/v2/venues/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

