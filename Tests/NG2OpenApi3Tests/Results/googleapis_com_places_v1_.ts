import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A latitude-longitude viewport, represented as two diagonally opposite `low` and `high` points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include: - If `low` = `high`, the viewport consists of that single point. - If `low.longitude` > `high.longitude`, the longitude range is inverted (the viewport crosses the 180 degree longitude line). - If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees, the viewport includes all longitudes. - If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees, the longitude range is empty. - If `low.latitude` > `high.latitude`, the latitude range is empty. Both `low` and `high` must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error. For example, this viewport fully encloses New York City: { "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } } */
	export interface GoogleGeoTypeViewport {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		high?: GoogleTypeLatLng;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		low?: GoogleTypeLatLng;
	}

	/** A latitude-longitude viewport, represented as two diagonally opposite `low` and `high` points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include: - If `low` = `high`, the viewport consists of that single point. - If `low.longitude` > `high.longitude`, the longitude range is inverted (the viewport crosses the 180 degree longitude line). - If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees, the viewport includes all longitudes. - If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees, the longitude range is empty. - If `low.latitude` > `high.latitude`, the latitude range is empty. Both `low` and `high` must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error. For example, this viewport fully encloses New York City: { "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } } */
	export interface GoogleGeoTypeViewportFormProperties {
	}
	export function CreateGoogleGeoTypeViewportFormGroup() {
		return new FormGroup<GoogleGeoTypeViewportFormProperties>({
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface GoogleTypeLatLng {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface GoogleTypeLatLngFormProperties {

		/**
		 * The latitude in degrees. It must be in the range [-90.0, +90.0].
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The longitude in degrees. It must be in the range [-180.0, +180.0].
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeLatLngFormGroup() {
		return new FormGroup<GoogleTypeLatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the author of the UGC data. Used in Photo, and Review. */
	export interface GoogleMapsPlacesV1AuthorAttribution {

		/** Name of the author of the Photo or Review. */
		displayName?: string | null;

		/** Profile photo URI of the author of the Photo or Review. */
		photoUri?: string | null;

		/** URI of the author of the Photo or Review. */
		uri?: string | null;
	}

	/** Information about the author of the UGC data. Used in Photo, and Review. */
	export interface GoogleMapsPlacesV1AuthorAttributionFormProperties {

		/** Name of the author of the Photo or Review. */
		displayName: FormControl<string | null | undefined>,

		/** Profile photo URI of the author of the Photo or Review. */
		photoUri: FormControl<string | null | undefined>,

		/** URI of the author of the Photo or Review. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1AuthorAttributionFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1AuthorAttributionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			photoUri: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Circle with a LatLng as center and radius. */
	export interface GoogleMapsPlacesV1Circle {

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		center?: GoogleTypeLatLng;

		/**
		 * Required. Radius measured in meters. The radius must be within [0.0, 50000.0].
		 * Type: double
		 */
		radius?: number | null;
	}

	/** Circle with a LatLng as center and radius. */
	export interface GoogleMapsPlacesV1CircleFormProperties {

		/**
		 * Required. Radius measured in meters. The radius must be within [0.0, 50000.0].
		 * Type: double
		 */
		radius: FormControl<number | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1CircleFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1CircleFormProperties>({
			radius: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the EV Charge Station hosted in Place. Terminology follows https://afdc.energy.gov/fuels/electricity_infrastructure.html One port could charge one car at a time. One port has one or more connectors. One station has one or more ports. */
	export interface GoogleMapsPlacesV1EVChargeOptions {

		/** A list of EV charging connector aggregations that contain connectors of the same type and same charge rate. */
		connectorAggregation?: Array<GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation>;

		/**
		 * Number of connectors at this station. However, because some ports can have multiple connectors but only be able to charge one car at a time (e.g.) the number of connectors may be greater than the total number of cars which can charge simultaneously.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connectorCount?: number | null;
	}

	/** Information about the EV Charge Station hosted in Place. Terminology follows https://afdc.energy.gov/fuels/electricity_infrastructure.html One port could charge one car at a time. One port has one or more connectors. One station has one or more ports. */
	export interface GoogleMapsPlacesV1EVChargeOptionsFormProperties {

		/**
		 * Number of connectors at this station. However, because some ports can have multiple connectors but only be able to charge one car at a time (e.g.) the number of connectors may be greater than the total number of cars which can charge simultaneously.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connectorCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1EVChargeOptionsFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1EVChargeOptionsFormProperties>({
			connectorCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** EV charging information grouped by [type, max_charge_rate_kw]. Shows EV charge aggregation of connectors that have the same type and max charge rate in kw. */
	export interface GoogleMapsPlacesV1EVChargeOptionsConnectorAggregation {

		/** The timestamp when the connector availability information in this aggregation was last updated. */
		availabilityLastUpdateTime?: string | null;

		/**
		 * Number of connectors in this aggregation that are currently available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableCount?: number | null;

		/**
		 * Number of connectors in this aggregation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * The static max charging rate in kw of each connector in the aggregation.
		 * Type: double
		 */
		maxChargeRateKw?: number | null;

		/**
		 * Number of connectors in this aggregation that are currently out of service.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		outOfServiceCount?: number | null;

		/** The connector type of this aggregation. */
		type?: GoogleMapsPlacesV1EVChargeOptionsConnectorAggregationType | null;
	}

	/** EV charging information grouped by [type, max_charge_rate_kw]. Shows EV charge aggregation of connectors that have the same type and max charge rate in kw. */
	export interface GoogleMapsPlacesV1EVChargeOptionsConnectorAggregationFormProperties {

		/** The timestamp when the connector availability information in this aggregation was last updated. */
		availabilityLastUpdateTime: FormControl<string | null | undefined>,

		/**
		 * Number of connectors in this aggregation that are currently available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableCount: FormControl<number | null | undefined>,

		/**
		 * Number of connectors in this aggregation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The static max charging rate in kw of each connector in the aggregation.
		 * Type: double
		 */
		maxChargeRateKw: FormControl<number | null | undefined>,

		/**
		 * Number of connectors in this aggregation that are currently out of service.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		outOfServiceCount: FormControl<number | null | undefined>,

		/** The connector type of this aggregation. */
		type: FormControl<GoogleMapsPlacesV1EVChargeOptionsConnectorAggregationType | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1EVChargeOptionsConnectorAggregationFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1EVChargeOptionsConnectorAggregationFormProperties>({
			availabilityLastUpdateTime: new FormControl<string | null | undefined>(undefined),
			availableCount: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			maxChargeRateKw: new FormControl<number | null | undefined>(undefined),
			outOfServiceCount: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleMapsPlacesV1EVChargeOptionsConnectorAggregationType | null | undefined>(undefined),
		});

	}

	export enum GoogleMapsPlacesV1EVChargeOptionsConnectorAggregationType { EV_CONNECTOR_TYPE_UNSPECIFIED = 'EV_CONNECTOR_TYPE_UNSPECIFIED', EV_CONNECTOR_TYPE_OTHER = 'EV_CONNECTOR_TYPE_OTHER', EV_CONNECTOR_TYPE_J1772 = 'EV_CONNECTOR_TYPE_J1772', EV_CONNECTOR_TYPE_TYPE_2 = 'EV_CONNECTOR_TYPE_TYPE_2', EV_CONNECTOR_TYPE_CHADEMO = 'EV_CONNECTOR_TYPE_CHADEMO', EV_CONNECTOR_TYPE_CCS_COMBO_1 = 'EV_CONNECTOR_TYPE_CCS_COMBO_1', EV_CONNECTOR_TYPE_CCS_COMBO_2 = 'EV_CONNECTOR_TYPE_CCS_COMBO_2', EV_CONNECTOR_TYPE_TESLA = 'EV_CONNECTOR_TYPE_TESLA', EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T = 'EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T', EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET = 'EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET' }


	/** The most recent information about fuel options in a gas station. This information is updated regularly. */
	export interface GoogleMapsPlacesV1FuelOptions {

		/** The last known fuel price for each type of fuel this station has. There is one entry per fuel type this station has. Order is not important. */
		fuelPrices?: Array<GoogleMapsPlacesV1FuelOptionsFuelPrice>;
	}

	/** The most recent information about fuel options in a gas station. This information is updated regularly. */
	export interface GoogleMapsPlacesV1FuelOptionsFormProperties {
	}
	export function CreateGoogleMapsPlacesV1FuelOptionsFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1FuelOptionsFormProperties>({
		});

	}


	/** Fuel price information for a given type. */
	export interface GoogleMapsPlacesV1FuelOptionsFuelPrice {

		/** Represents an amount of money with its currency type. */
		price?: GoogleTypeMoney;

		/** The type of fuel. */
		type?: GoogleMapsPlacesV1FuelOptionsFuelPriceType | null;

		/** The time the fuel price was last updated. */
		updateTime?: string | null;
	}

	/** Fuel price information for a given type. */
	export interface GoogleMapsPlacesV1FuelOptionsFuelPriceFormProperties {

		/** The type of fuel. */
		type: FormControl<GoogleMapsPlacesV1FuelOptionsFuelPriceType | null | undefined>,

		/** The time the fuel price was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1FuelOptionsFuelPriceFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1FuelOptionsFuelPriceFormProperties>({
			type: new FormControl<GoogleMapsPlacesV1FuelOptionsFuelPriceType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoney {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeMoneyFormGroup() {
		return new FormGroup<GoogleTypeMoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleMapsPlacesV1FuelOptionsFuelPriceType { FUEL_TYPE_UNSPECIFIED = 'FUEL_TYPE_UNSPECIFIED', DIESEL = 'DIESEL', REGULAR_UNLEADED = 'REGULAR_UNLEADED', MIDGRADE = 'MIDGRADE', PREMIUM = 'PREMIUM', SP91 = 'SP91', SP91_E10 = 'SP91_E10', SP92 = 'SP92', SP95 = 'SP95', SP95_E10 = 'SP95_E10', SP98 = 'SP98', SP99 = 'SP99', SP100 = 'SP100', LPG = 'LPG', E80 = 'E80', E85 = 'E85', METHANE = 'METHANE', BIO_DIESEL = 'BIO_DIESEL', TRUCK_DIESEL = 'TRUCK_DIESEL' }


	/** Information about a photo of a place. */
	export interface GoogleMapsPlacesV1Photo {

		/** This photo's authors. */
		authorAttributions?: Array<GoogleMapsPlacesV1AuthorAttribution>;

		/**
		 * The maximum available height, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		heightPx?: number | null;

		/** Identifier. A reference representing this place photo which may be used to look up this place photo again (also called the API "resource" name: `places/{place_id}/photos/{photo}`). */
		name?: string | null;

		/**
		 * The maximum available width, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		widthPx?: number | null;
	}

	/** Information about a photo of a place. */
	export interface GoogleMapsPlacesV1PhotoFormProperties {

		/**
		 * The maximum available height, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		heightPx: FormControl<number | null | undefined>,

		/** Identifier. A reference representing this place photo which may be used to look up this place photo again (also called the API "resource" name: `places/{place_id}/photos/{photo}`). */
		name: FormControl<string | null | undefined>,

		/**
		 * The maximum available width, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		widthPx: FormControl<number | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PhotoFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PhotoFormProperties>({
			heightPx: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			widthPx: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A photo media from Places API. */
	export interface GoogleMapsPlacesV1PhotoMedia {

		/** The resource name of a photo media in the format: `places/{place_id}/photos/{photo_reference}/media`. */
		name?: string | null;

		/** A short-lived uri that can be used to render the photo. */
		photoUri?: string | null;
	}

	/** A photo media from Places API. */
	export interface GoogleMapsPlacesV1PhotoMediaFormProperties {

		/** The resource name of a photo media in the format: `places/{place_id}/photos/{photo_reference}/media`. */
		name: FormControl<string | null | undefined>,

		/** A short-lived uri that can be used to render the photo. */
		photoUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PhotoMediaFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PhotoMediaFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			photoUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** All the information representing a Place. */
	export interface GoogleMapsPlacesV1Place {

		/** Information about the accessibility options a place offers. */
		accessibilityOptions?: GoogleMapsPlacesV1PlaceAccessibilityOptions;

		/** Repeated components for each locality level. Note the following facts about the address_components[] array: - The array of address components may contain more components than the formatted_address. - The array does not necessarily include all the political entities that contain an address, apart from those included in the formatted_address. To retrieve all the political entities that contain a specific address, you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request. - The format of the response is not guaranteed to remain the same between requests. In particular, the number of address_components varies based on the address requested and can change over time for the same address. A component can change position in the array. The type of the component can change. A particular component may be missing in a later response. */
		addressComponents?: Array<GoogleMapsPlacesV1PlaceAddressComponent>;

		/** The place's address in adr microformat: http://microformats.org/wiki/adr. */
		adrFormatAddress?: string | null;

		/** Place allows dogs. */
		allowsDogs?: boolean | null;

		/** A set of data provider that must be shown with this result. */
		attributions?: Array<GoogleMapsPlacesV1PlaceAttribution>;

		/** The business status for the place. */
		businessStatus?: GoogleMapsPlacesV1PlaceBusinessStatus | null;

		/** Specifies if the business supports curbside pickup. */
		curbsidePickup?: boolean | null;

		/** Information about business hour of the place. */
		currentOpeningHours?: GoogleMapsPlacesV1PlaceOpeningHours;

		/** Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. This field includes the special_days subfield of all hours, set for dates that have exceptional hours. */
		currentSecondaryOpeningHours?: Array<GoogleMapsPlacesV1PlaceOpeningHours>;

		/** Specifies if the business supports delivery. */
		delivery?: boolean | null;

		/** Specifies if the business supports indoor or outdoor seating options. */
		dineIn?: boolean | null;

		/** Localized variant of a text in a particular language. */
		displayName?: GoogleTypeLocalizedText;

		/** Localized variant of a text in a particular language. */
		editorialSummary?: GoogleTypeLocalizedText;

		/** Information about the EV Charge Station hosted in Place. Terminology follows https://afdc.energy.gov/fuels/electricity_infrastructure.html One port could charge one car at a time. One port has one or more connectors. One station has one or more ports. */
		evChargeOptions?: GoogleMapsPlacesV1EVChargeOptions;

		/** A full, human-readable address for this place. */
		formattedAddress?: string | null;

		/** The most recent information about fuel options in a gas station. This information is updated regularly. */
		fuelOptions?: GoogleMapsPlacesV1FuelOptions;

		/** Place is good for children. */
		goodForChildren?: boolean | null;

		/** Place accommodates groups. */
		goodForGroups?: boolean | null;

		/** Place is suitable for watching sports. */
		goodForWatchingSports?: boolean | null;

		/** A URL providing more information about this place. */
		googleMapsUri?: string | null;

		/** Background color for icon_mask in hex format, e.g. #909CE1. */
		iconBackgroundColor?: string | null;

		/** A truncated URL to an icon mask. User can access different icon type by appending type suffix to the end (eg, ".svg" or ".png"). */
		iconMaskBaseUri?: string | null;

		/** The unique identifier of a place. */
		id?: string | null;

		/** A human-readable phone number for the place, in international format. */
		internationalPhoneNumber?: string | null;

		/** Place provides live music. */
		liveMusic?: boolean | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		location?: GoogleTypeLatLng;

		/** Place has a children's menu. */
		menuForChildren?: boolean | null;

		/** An ID representing this place which may be used to look up this place again (a.k.a. the API "resource" name: places/place_id). */
		name?: string | null;

		/** A human-readable phone number for the place, in national format. */
		nationalPhoneNumber?: string | null;

		/** Place provides outdoor seating. */
		outdoorSeating?: boolean | null;

		/** Information about parking options for the place. A parking lot could support more than one option at the same time. */
		parkingOptions?: GoogleMapsPlacesV1PlaceParkingOptions;

		/** Payment options the place accepts. */
		paymentOptions?: GoogleMapsPlacesV1PlacePaymentOptions;

		/** Information (including references) about photos of this place. */
		photos?: Array<GoogleMapsPlacesV1Photo>;

		/** Plus code (http://plus.codes) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location. */
		plusCode?: GoogleMapsPlacesV1PlacePlusCode;

		/** Price level of the place. */
		priceLevel?: GoogleMapsPlacesV1PlacePriceLevel | null;

		/** The primary type of the given result. This type must one of the Places API supported types. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types */
		primaryType?: string | null;

		/** Localized variant of a text in a particular language. */
		primaryTypeDisplayName?: GoogleTypeLocalizedText;

		/**
		 * A rating between 1.0 and 5.0, based on user reviews of this place.
		 * Type: double
		 */
		rating?: number | null;

		/** Information about business hour of the place. */
		regularOpeningHours?: GoogleMapsPlacesV1PlaceOpeningHours;

		/** Contains an array of entries for information about regular secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. */
		regularSecondaryOpeningHours?: Array<GoogleMapsPlacesV1PlaceOpeningHours>;

		/** Specifies if the place supports reservations. */
		reservable?: boolean | null;

		/** Place has restroom. */
		restroom?: boolean | null;

		/** List of reviews about this place, sorted by relevance. */
		reviews?: Array<GoogleMapsPlacesV1Review>;

		/** Specifies if the place serves beer. */
		servesBeer?: boolean | null;

		/** Specifies if the place serves breakfast. */
		servesBreakfast?: boolean | null;

		/** Specifies if the place serves brunch. */
		servesBrunch?: boolean | null;

		/** Place serves cocktails. */
		servesCocktails?: boolean | null;

		/** Place serves coffee. */
		servesCoffee?: boolean | null;

		/** Place serves dessert. */
		servesDessert?: boolean | null;

		/** Specifies if the place serves dinner. */
		servesDinner?: boolean | null;

		/** Specifies if the place serves lunch. */
		servesLunch?: boolean | null;

		/** Specifies if the place serves vegetarian food. */
		servesVegetarianFood?: boolean | null;

		/** Specifies if the place serves wine. */
		servesWine?: boolean | null;

		/** A short, human-readable address for this place. */
		shortFormattedAddress?: string | null;

		/** A list of sub destinations related to the place. */
		subDestinations?: Array<GoogleMapsPlacesV1PlaceSubDestination>;

		/** Specifies if the business supports takeout. */
		takeout?: boolean | null;

		/** A set of type tags for this result. For example, "political" and "locality". For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types */
		types?: Array<string>;

		/**
		 * The total number of reviews (with or without text) for this place.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userRatingCount?: number | null;

		/**
		 * Number of minutes this place's timezone is currently offset from UTC. This is expressed in minutes to support timezones that are offset by fractions of an hour, e.g. X hours and 15 minutes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		utcOffsetMinutes?: number | null;

		/** A latitude-longitude viewport, represented as two diagonally opposite `low` and `high` points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include: - If `low` = `high`, the viewport consists of that single point. - If `low.longitude` > `high.longitude`, the longitude range is inverted (the viewport crosses the 180 degree longitude line). - If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees, the viewport includes all longitudes. - If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees, the longitude range is empty. - If `low.latitude` > `high.latitude`, the latitude range is empty. Both `low` and `high` must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error. For example, this viewport fully encloses New York City: { "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } } */
		viewport?: GoogleGeoTypeViewport;

		/** The authoritative website for this place, e.g. a business' homepage. Note that for places that are part of a chain (e.g. an IKEA store), this will usually be the website for the individual store, not the overall chain. */
		websiteUri?: string | null;
	}

	/** All the information representing a Place. */
	export interface GoogleMapsPlacesV1PlaceFormProperties {

		/** The place's address in adr microformat: http://microformats.org/wiki/adr. */
		adrFormatAddress: FormControl<string | null | undefined>,

		/** Place allows dogs. */
		allowsDogs: FormControl<boolean | null | undefined>,

		/** The business status for the place. */
		businessStatus: FormControl<GoogleMapsPlacesV1PlaceBusinessStatus | null | undefined>,

		/** Specifies if the business supports curbside pickup. */
		curbsidePickup: FormControl<boolean | null | undefined>,

		/** Specifies if the business supports delivery. */
		delivery: FormControl<boolean | null | undefined>,

		/** Specifies if the business supports indoor or outdoor seating options. */
		dineIn: FormControl<boolean | null | undefined>,

		/** A full, human-readable address for this place. */
		formattedAddress: FormControl<string | null | undefined>,

		/** Place is good for children. */
		goodForChildren: FormControl<boolean | null | undefined>,

		/** Place accommodates groups. */
		goodForGroups: FormControl<boolean | null | undefined>,

		/** Place is suitable for watching sports. */
		goodForWatchingSports: FormControl<boolean | null | undefined>,

		/** A URL providing more information about this place. */
		googleMapsUri: FormControl<string | null | undefined>,

		/** Background color for icon_mask in hex format, e.g. #909CE1. */
		iconBackgroundColor: FormControl<string | null | undefined>,

		/** A truncated URL to an icon mask. User can access different icon type by appending type suffix to the end (eg, ".svg" or ".png"). */
		iconMaskBaseUri: FormControl<string | null | undefined>,

		/** The unique identifier of a place. */
		id: FormControl<string | null | undefined>,

		/** A human-readable phone number for the place, in international format. */
		internationalPhoneNumber: FormControl<string | null | undefined>,

		/** Place provides live music. */
		liveMusic: FormControl<boolean | null | undefined>,

		/** Place has a children's menu. */
		menuForChildren: FormControl<boolean | null | undefined>,

		/** An ID representing this place which may be used to look up this place again (a.k.a. the API "resource" name: places/place_id). */
		name: FormControl<string | null | undefined>,

		/** A human-readable phone number for the place, in national format. */
		nationalPhoneNumber: FormControl<string | null | undefined>,

		/** Place provides outdoor seating. */
		outdoorSeating: FormControl<boolean | null | undefined>,

		/** Price level of the place. */
		priceLevel: FormControl<GoogleMapsPlacesV1PlacePriceLevel | null | undefined>,

		/** The primary type of the given result. This type must one of the Places API supported types. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types */
		primaryType: FormControl<string | null | undefined>,

		/**
		 * A rating between 1.0 and 5.0, based on user reviews of this place.
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/** Specifies if the place supports reservations. */
		reservable: FormControl<boolean | null | undefined>,

		/** Place has restroom. */
		restroom: FormControl<boolean | null | undefined>,

		/** Specifies if the place serves beer. */
		servesBeer: FormControl<boolean | null | undefined>,

		/** Specifies if the place serves breakfast. */
		servesBreakfast: FormControl<boolean | null | undefined>,

		/** Specifies if the place serves brunch. */
		servesBrunch: FormControl<boolean | null | undefined>,

		/** Place serves cocktails. */
		servesCocktails: FormControl<boolean | null | undefined>,

		/** Place serves coffee. */
		servesCoffee: FormControl<boolean | null | undefined>,

		/** Place serves dessert. */
		servesDessert: FormControl<boolean | null | undefined>,

		/** Specifies if the place serves dinner. */
		servesDinner: FormControl<boolean | null | undefined>,

		/** Specifies if the place serves lunch. */
		servesLunch: FormControl<boolean | null | undefined>,

		/** Specifies if the place serves vegetarian food. */
		servesVegetarianFood: FormControl<boolean | null | undefined>,

		/** Specifies if the place serves wine. */
		servesWine: FormControl<boolean | null | undefined>,

		/** A short, human-readable address for this place. */
		shortFormattedAddress: FormControl<string | null | undefined>,

		/** Specifies if the business supports takeout. */
		takeout: FormControl<boolean | null | undefined>,

		/**
		 * The total number of reviews (with or without text) for this place.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userRatingCount: FormControl<number | null | undefined>,

		/**
		 * Number of minutes this place's timezone is currently offset from UTC. This is expressed in minutes to support timezones that are offset by fractions of an hour, e.g. X hours and 15 minutes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		utcOffsetMinutes: FormControl<number | null | undefined>,

		/** The authoritative website for this place, e.g. a business' homepage. Note that for places that are part of a chain (e.g. an IKEA store), this will usually be the website for the individual store, not the overall chain. */
		websiteUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlaceFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceFormProperties>({
			adrFormatAddress: new FormControl<string | null | undefined>(undefined),
			allowsDogs: new FormControl<boolean | null | undefined>(undefined),
			businessStatus: new FormControl<GoogleMapsPlacesV1PlaceBusinessStatus | null | undefined>(undefined),
			curbsidePickup: new FormControl<boolean | null | undefined>(undefined),
			delivery: new FormControl<boolean | null | undefined>(undefined),
			dineIn: new FormControl<boolean | null | undefined>(undefined),
			formattedAddress: new FormControl<string | null | undefined>(undefined),
			goodForChildren: new FormControl<boolean | null | undefined>(undefined),
			goodForGroups: new FormControl<boolean | null | undefined>(undefined),
			goodForWatchingSports: new FormControl<boolean | null | undefined>(undefined),
			googleMapsUri: new FormControl<string | null | undefined>(undefined),
			iconBackgroundColor: new FormControl<string | null | undefined>(undefined),
			iconMaskBaseUri: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internationalPhoneNumber: new FormControl<string | null | undefined>(undefined),
			liveMusic: new FormControl<boolean | null | undefined>(undefined),
			menuForChildren: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nationalPhoneNumber: new FormControl<string | null | undefined>(undefined),
			outdoorSeating: new FormControl<boolean | null | undefined>(undefined),
			priceLevel: new FormControl<GoogleMapsPlacesV1PlacePriceLevel | null | undefined>(undefined),
			primaryType: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			reservable: new FormControl<boolean | null | undefined>(undefined),
			restroom: new FormControl<boolean | null | undefined>(undefined),
			servesBeer: new FormControl<boolean | null | undefined>(undefined),
			servesBreakfast: new FormControl<boolean | null | undefined>(undefined),
			servesBrunch: new FormControl<boolean | null | undefined>(undefined),
			servesCocktails: new FormControl<boolean | null | undefined>(undefined),
			servesCoffee: new FormControl<boolean | null | undefined>(undefined),
			servesDessert: new FormControl<boolean | null | undefined>(undefined),
			servesDinner: new FormControl<boolean | null | undefined>(undefined),
			servesLunch: new FormControl<boolean | null | undefined>(undefined),
			servesVegetarianFood: new FormControl<boolean | null | undefined>(undefined),
			servesWine: new FormControl<boolean | null | undefined>(undefined),
			shortFormattedAddress: new FormControl<string | null | undefined>(undefined),
			takeout: new FormControl<boolean | null | undefined>(undefined),
			userRatingCount: new FormControl<number | null | undefined>(undefined),
			utcOffsetMinutes: new FormControl<number | null | undefined>(undefined),
			websiteUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the accessibility options a place offers. */
	export interface GoogleMapsPlacesV1PlaceAccessibilityOptions {

		/** Places has wheelchair accessible entrance. */
		wheelchairAccessibleEntrance?: boolean | null;

		/** Place offers wheelchair accessible parking. */
		wheelchairAccessibleParking?: boolean | null;

		/** Place has wheelchair accessible restroom. */
		wheelchairAccessibleRestroom?: boolean | null;

		/** Place has wheelchair accessible seating. */
		wheelchairAccessibleSeating?: boolean | null;
	}

	/** Information about the accessibility options a place offers. */
	export interface GoogleMapsPlacesV1PlaceAccessibilityOptionsFormProperties {

		/** Places has wheelchair accessible entrance. */
		wheelchairAccessibleEntrance: FormControl<boolean | null | undefined>,

		/** Place offers wheelchair accessible parking. */
		wheelchairAccessibleParking: FormControl<boolean | null | undefined>,

		/** Place has wheelchair accessible restroom. */
		wheelchairAccessibleRestroom: FormControl<boolean | null | undefined>,

		/** Place has wheelchair accessible seating. */
		wheelchairAccessibleSeating: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlaceAccessibilityOptionsFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceAccessibilityOptionsFormProperties>({
			wheelchairAccessibleEntrance: new FormControl<boolean | null | undefined>(undefined),
			wheelchairAccessibleParking: new FormControl<boolean | null | undefined>(undefined),
			wheelchairAccessibleRestroom: new FormControl<boolean | null | undefined>(undefined),
			wheelchairAccessibleSeating: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The structured components that form the formatted address, if this information is available. */
	export interface GoogleMapsPlacesV1PlaceAddressComponent {

		/** The language used to format this components, in CLDR notation. */
		languageCode?: string | null;

		/** The full text description or name of the address component. For example, an address component for the country Australia may have a long_name of "Australia". */
		longText?: string | null;

		/** An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short_name of "AU". */
		shortText?: string | null;

		/** An array indicating the type(s) of the address component. */
		types?: Array<string>;
	}

	/** The structured components that form the formatted address, if this information is available. */
	export interface GoogleMapsPlacesV1PlaceAddressComponentFormProperties {

		/** The language used to format this components, in CLDR notation. */
		languageCode: FormControl<string | null | undefined>,

		/** The full text description or name of the address component. For example, an address component for the country Australia may have a long_name of "Australia". */
		longText: FormControl<string | null | undefined>,

		/** An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short_name of "AU". */
		shortText: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlaceAddressComponentFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceAddressComponentFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			longText: new FormControl<string | null | undefined>(undefined),
			shortText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about data providers of this place. */
	export interface GoogleMapsPlacesV1PlaceAttribution {

		/** Name of the Place's data provider. */
		provider?: string | null;

		/** URI to the Place's data provider. */
		providerUri?: string | null;
	}

	/** Information about data providers of this place. */
	export interface GoogleMapsPlacesV1PlaceAttributionFormProperties {

		/** Name of the Place's data provider. */
		provider: FormControl<string | null | undefined>,

		/** URI to the Place's data provider. */
		providerUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlaceAttributionFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceAttributionFormProperties>({
			provider: new FormControl<string | null | undefined>(undefined),
			providerUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleMapsPlacesV1PlaceBusinessStatus { BUSINESS_STATUS_UNSPECIFIED = 'BUSINESS_STATUS_UNSPECIFIED', OPERATIONAL = 'OPERATIONAL', CLOSED_TEMPORARILY = 'CLOSED_TEMPORARILY', CLOSED_PERMANENTLY = 'CLOSED_PERMANENTLY' }


	/** Information about business hour of the place. */
	export interface GoogleMapsPlacesV1PlaceOpeningHours {

		/** Is this place open right now? Always present unless we lack time-of-day or timezone data for these opening hours. */
		openNow?: boolean | null;

		/** The periods that this place is open during the week. The periods are in chronological order, starting with Sunday in the place-local timezone. An empty (but not absent) value indicates a place that is never open, e.g. because it is closed temporarily for renovations. */
		periods?: Array<GoogleMapsPlacesV1PlaceOpeningHoursPeriod>;

		/** A type string used to identify the type of secondary hours. */
		secondaryHoursType?: GoogleMapsPlacesV1PlaceOpeningHoursSecondaryHoursType | null;

		/** Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. Set for current_opening_hours and current_secondary_opening_hours if there are exceptional hours. */
		specialDays?: Array<GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay>;

		/** Localized strings describing the opening hours of this place, one string for each day of the week. Will be empty if the hours are unknown or could not be converted to localized text. Example: "Sun: 18:00–06:00" */
		weekdayDescriptions?: Array<string>;
	}

	/** Information about business hour of the place. */
	export interface GoogleMapsPlacesV1PlaceOpeningHoursFormProperties {

		/** Is this place open right now? Always present unless we lack time-of-day or timezone data for these opening hours. */
		openNow: FormControl<boolean | null | undefined>,

		/** A type string used to identify the type of secondary hours. */
		secondaryHoursType: FormControl<GoogleMapsPlacesV1PlaceOpeningHoursSecondaryHoursType | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlaceOpeningHoursFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceOpeningHoursFormProperties>({
			openNow: new FormControl<boolean | null | undefined>(undefined),
			secondaryHoursType: new FormControl<GoogleMapsPlacesV1PlaceOpeningHoursSecondaryHoursType | null | undefined>(undefined),
		});

	}


	/** A period the place remains in open_now status. */
	export interface GoogleMapsPlacesV1PlaceOpeningHoursPeriod {

		/** Status changing points. */
		close?: GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint;

		/** Status changing points. */
		open?: GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint;
	}

	/** A period the place remains in open_now status. */
	export interface GoogleMapsPlacesV1PlaceOpeningHoursPeriodFormProperties {
	}
	export function CreateGoogleMapsPlacesV1PlaceOpeningHoursPeriodFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceOpeningHoursPeriodFormProperties>({
		});

	}


	/** Status changing points. */
	export interface GoogleMapsPlacesV1PlaceOpeningHoursPeriodPoint {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: GoogleTypeDate;

		/**
		 * A day of the week, as an integer in the range 0-6. 0 is Sunday, 1 is Monday, etc.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * The hour in 2 digits. Ranges from 00 to 23.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hour?: number | null;

		/**
		 * The minute in 2 digits. Ranges from 00 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minute?: number | null;

		/** Whether or not this endpoint was truncated. Truncation occurs when the real hours are outside the times we are willing to return hours between, so we truncate the hours back to these boundaries. This ensures that at most 24 * 7 hours from midnight of the day of the request are returned. */
		truncated?: boolean | null;
	}

	/** Status changing points. */
	export interface GoogleMapsPlacesV1PlaceOpeningHoursPeriodPointFormProperties {

		/**
		 * A day of the week, as an integer in the range 0-6. 0 is Sunday, 1 is Monday, etc.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * The hour in 2 digits. Ranges from 00 to 23.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hour: FormControl<number | null | undefined>,

		/**
		 * The minute in 2 digits. Ranges from 00 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minute: FormControl<number | null | undefined>,

		/** Whether or not this endpoint was truncated. Truncation occurs when the real hours are outside the times we are willing to return hours between, so we truncate the hours back to these boundaries. This ensures that at most 24 * 7 hours from midnight of the day of the request are returned. */
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlaceOpeningHoursPeriodPointFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceOpeningHoursPeriodPointFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			hour: new FormControl<number | null | undefined>(undefined),
			minute: new FormControl<number | null | undefined>(undefined),
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleMapsPlacesV1PlaceOpeningHoursSecondaryHoursType { SECONDARY_HOURS_TYPE_UNSPECIFIED = 'SECONDARY_HOURS_TYPE_UNSPECIFIED', DRIVE_THROUGH = 'DRIVE_THROUGH', HAPPY_HOUR = 'HAPPY_HOUR', DELIVERY = 'DELIVERY', TAKEOUT = 'TAKEOUT', KITCHEN = 'KITCHEN', BREAKFAST = 'BREAKFAST', LUNCH = 'LUNCH', DINNER = 'DINNER', BRUNCH = 'BRUNCH', PICKUP = 'PICKUP', ACCESS = 'ACCESS', SENIOR_HOURS = 'SENIOR_HOURS', ONLINE_SERVICE_HOURS = 'ONLINE_SERVICE_HOURS' }


	/** Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. */
	export interface GoogleMapsPlacesV1PlaceOpeningHoursSpecialDay {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: GoogleTypeDate;
	}

	/** Structured information for special days that fall within the period that the returned opening hours cover. Special days are days that could impact the business hours of a place, e.g. Christmas day. */
	export interface GoogleMapsPlacesV1PlaceOpeningHoursSpecialDayFormProperties {
	}
	export function CreateGoogleMapsPlacesV1PlaceOpeningHoursSpecialDayFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceOpeningHoursSpecialDayFormProperties>({
		});

	}


	/** Localized variant of a text in a particular language. */
	export interface GoogleTypeLocalizedText {

		/** The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Localized string in the language corresponding to language_code below. */
		text?: string | null;
	}

	/** Localized variant of a text in a particular language. */
	export interface GoogleTypeLocalizedTextFormProperties {

		/** The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Localized string in the language corresponding to language_code below. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeLocalizedTextFormGroup() {
		return new FormGroup<GoogleTypeLocalizedTextFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about parking options for the place. A parking lot could support more than one option at the same time. */
	export interface GoogleMapsPlacesV1PlaceParkingOptions {

		/** Place offers free garage parking. */
		freeGarageParking?: boolean | null;

		/** Place offers free parking lots. */
		freeParkingLot?: boolean | null;

		/** Place offers free street parking. */
		freeStreetParking?: boolean | null;

		/** Place offers paid garage parking. */
		paidGarageParking?: boolean | null;

		/** Place offers paid parking lots. */
		paidParkingLot?: boolean | null;

		/** Place offers paid street parking. */
		paidStreetParking?: boolean | null;

		/** Place offers valet parking. */
		valetParking?: boolean | null;
	}

	/** Information about parking options for the place. A parking lot could support more than one option at the same time. */
	export interface GoogleMapsPlacesV1PlaceParkingOptionsFormProperties {

		/** Place offers free garage parking. */
		freeGarageParking: FormControl<boolean | null | undefined>,

		/** Place offers free parking lots. */
		freeParkingLot: FormControl<boolean | null | undefined>,

		/** Place offers free street parking. */
		freeStreetParking: FormControl<boolean | null | undefined>,

		/** Place offers paid garage parking. */
		paidGarageParking: FormControl<boolean | null | undefined>,

		/** Place offers paid parking lots. */
		paidParkingLot: FormControl<boolean | null | undefined>,

		/** Place offers paid street parking. */
		paidStreetParking: FormControl<boolean | null | undefined>,

		/** Place offers valet parking. */
		valetParking: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlaceParkingOptionsFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceParkingOptionsFormProperties>({
			freeGarageParking: new FormControl<boolean | null | undefined>(undefined),
			freeParkingLot: new FormControl<boolean | null | undefined>(undefined),
			freeStreetParking: new FormControl<boolean | null | undefined>(undefined),
			paidGarageParking: new FormControl<boolean | null | undefined>(undefined),
			paidParkingLot: new FormControl<boolean | null | undefined>(undefined),
			paidStreetParking: new FormControl<boolean | null | undefined>(undefined),
			valetParking: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Payment options the place accepts. */
	export interface GoogleMapsPlacesV1PlacePaymentOptions {

		/** Place accepts cash only as payment. Places with this attribute may still accept other payment methods. */
		acceptsCashOnly?: boolean | null;

		/** Place accepts credit cards as payment. */
		acceptsCreditCards?: boolean | null;

		/** Place accepts debit cards as payment. */
		acceptsDebitCards?: boolean | null;

		/** Place accepts NFC payments. */
		acceptsNfc?: boolean | null;
	}

	/** Payment options the place accepts. */
	export interface GoogleMapsPlacesV1PlacePaymentOptionsFormProperties {

		/** Place accepts cash only as payment. Places with this attribute may still accept other payment methods. */
		acceptsCashOnly: FormControl<boolean | null | undefined>,

		/** Place accepts credit cards as payment. */
		acceptsCreditCards: FormControl<boolean | null | undefined>,

		/** Place accepts debit cards as payment. */
		acceptsDebitCards: FormControl<boolean | null | undefined>,

		/** Place accepts NFC payments. */
		acceptsNfc: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlacePaymentOptionsFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlacePaymentOptionsFormProperties>({
			acceptsCashOnly: new FormControl<boolean | null | undefined>(undefined),
			acceptsCreditCards: new FormControl<boolean | null | undefined>(undefined),
			acceptsDebitCards: new FormControl<boolean | null | undefined>(undefined),
			acceptsNfc: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Plus code (http://plus.codes) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location. */
	export interface GoogleMapsPlacesV1PlacePlusCode {

		/** Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity. */
		compoundCode?: string | null;

		/** Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (~14 by 14 meters). */
		globalCode?: string | null;
	}

	/** Plus code (http://plus.codes) is a location reference with two formats: global code defining a 14mx14m (1/8000th of a degree) or smaller rectangle, and compound code, replacing the prefix with a reference location. */
	export interface GoogleMapsPlacesV1PlacePlusCodeFormProperties {

		/** Place's compound code, such as "33GV+HQ, Ramberg, Norway", containing the suffix of the global code and replacing the prefix with a formatted name of a reference entity. */
		compoundCode: FormControl<string | null | undefined>,

		/** Place's global (full) code, such as "9FWM33GV+HQ", representing an 1/8000 by 1/8000 degree area (~14 by 14 meters). */
		globalCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlacePlusCodeFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlacePlusCodeFormProperties>({
			compoundCode: new FormControl<string | null | undefined>(undefined),
			globalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleMapsPlacesV1PlacePriceLevel { PRICE_LEVEL_UNSPECIFIED = 'PRICE_LEVEL_UNSPECIFIED', PRICE_LEVEL_FREE = 'PRICE_LEVEL_FREE', PRICE_LEVEL_INEXPENSIVE = 'PRICE_LEVEL_INEXPENSIVE', PRICE_LEVEL_MODERATE = 'PRICE_LEVEL_MODERATE', PRICE_LEVEL_EXPENSIVE = 'PRICE_LEVEL_EXPENSIVE', PRICE_LEVEL_VERY_EXPENSIVE = 'PRICE_LEVEL_VERY_EXPENSIVE' }


	/** Information about a review of a place. */
	export interface GoogleMapsPlacesV1Review {

		/** Information about the author of the UGC data. Used in Photo, and Review. */
		authorAttribution?: GoogleMapsPlacesV1AuthorAttribution;

		/** A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: `places/{place_id}/reviews/{review}`). */
		name?: string | null;

		/** Localized variant of a text in a particular language. */
		originalText?: GoogleTypeLocalizedText;

		/** Timestamp for the review. */
		publishTime?: string | null;

		/**
		 * A number between 1.0 and 5.0, also called the number of stars.
		 * Type: double
		 */
		rating?: number | null;

		/** A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. */
		relativePublishTimeDescription?: string | null;

		/** Localized variant of a text in a particular language. */
		text?: GoogleTypeLocalizedText;
	}

	/** Information about a review of a place. */
	export interface GoogleMapsPlacesV1ReviewFormProperties {

		/** A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: `places/{place_id}/reviews/{review}`). */
		name: FormControl<string | null | undefined>,

		/** Timestamp for the review. */
		publishTime: FormControl<string | null | undefined>,

		/**
		 * A number between 1.0 and 5.0, also called the number of stars.
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/** A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. */
		relativePublishTimeDescription: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1ReviewFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1ReviewFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			relativePublishTimeDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Place resource name and id of sub destinations that relate to the place. For example, different terminals are different destinations of an airport. */
	export interface GoogleMapsPlacesV1PlaceSubDestination {

		/** The place id of the sub destination. */
		id?: string | null;

		/** The resource name of the sub destination. */
		name?: string | null;
	}

	/** Place resource name and id of sub destinations that relate to the place. For example, different terminals are different destinations of an airport. */
	export interface GoogleMapsPlacesV1PlaceSubDestinationFormProperties {

		/** The place id of the sub destination. */
		id: FormControl<string | null | undefined>,

		/** The resource name of the sub destination. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1PlaceSubDestinationFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1PlaceSubDestinationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request proto for Search Nearby.  */
	export interface GoogleMapsPlacesV1SearchNearbyRequest {

		/** Excluded primary Place type (e.g. "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting primary types, i.e. a type appears in both included_primary_types and excluded_primary_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants". */
		excludedPrimaryTypes?: Array<string>;

		/** Excluded Place type (eg, "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If the client provides both included_types (e.g. restaurant) and excluded_types (e.g. cafe), then the response should include places that are restaurant but not cafe. The response includes places that match at least one of the included_types and none of the excluded_types. If there are any conflicting types, i.e. a type appears in both included_types and excluded_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants". */
		excludedTypes?: Array<string>;

		/** Included primary Place type (e.g. "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. A place can only have a single primary type from the supported types table associated with it. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting primary types, i.e. a type appears in both included_primary_types and excluded_primary_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants". */
		includedPrimaryTypes?: Array<string>;

		/** Included Place type (eg, "restaurant" or "gas_station") from https://developers.google.com/maps/documentation/places/web-service/place-types. Up to 50 types from [Table A](https://developers.google.com/maps/documentation/places/web-service/place-types#table-a) may be specified. If there are any conflicting types, i.e. a type appears in both included_types and excluded_types, an INVALID_ARGUMENT error is returned. If a Place type is specified with multiple type restrictions, only places that satisfy all of the restrictions are returned. For example, if we have {included_types = ["restaurant"], excluded_primary_types = ["restaurant"]}, the returned places provide "restaurant" related services but do not operate primarily as "restaurants". */
		includedTypes?: Array<string>;

		/** Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport. */
		languageCode?: string | null;

		/** The region to search. */
		locationRestriction?: GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction;

		/**
		 * Maximum number of results to return. It must be between 1 and 20 (default), inclusively. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResultCount?: number | null;

		/** How results will be ranked in the response. */
		rankPreference?: GoogleMapsPlacesV1SearchNearbyRequestRankPreference | null;

		/** The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported. */
		regionCode?: string | null;
	}

	/** Request proto for Search Nearby.  */
	export interface GoogleMapsPlacesV1SearchNearbyRequestFormProperties {

		/** Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport. */
		languageCode: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to return. It must be between 1 and 20 (default), inclusively. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResultCount: FormControl<number | null | undefined>,

		/** How results will be ranked in the response. */
		rankPreference: FormControl<GoogleMapsPlacesV1SearchNearbyRequestRankPreference | null | undefined>,

		/** The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1SearchNearbyRequestFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1SearchNearbyRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			maxResultCount: new FormControl<number | null | undefined>(undefined),
			rankPreference: new FormControl<GoogleMapsPlacesV1SearchNearbyRequestRankPreference | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The region to search. */
	export interface GoogleMapsPlacesV1SearchNearbyRequestLocationRestriction {

		/** Circle with a LatLng as center and radius. */
		circle?: GoogleMapsPlacesV1Circle;
	}

	/** The region to search. */
	export interface GoogleMapsPlacesV1SearchNearbyRequestLocationRestrictionFormProperties {
	}
	export function CreateGoogleMapsPlacesV1SearchNearbyRequestLocationRestrictionFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1SearchNearbyRequestLocationRestrictionFormProperties>({
		});

	}

	export enum GoogleMapsPlacesV1SearchNearbyRequestRankPreference { RANK_PREFERENCE_UNSPECIFIED = 'RANK_PREFERENCE_UNSPECIFIED', DISTANCE = 'DISTANCE', POPULARITY = 'POPULARITY' }


	/** Response proto for Search Nearby.  */
	export interface GoogleMapsPlacesV1SearchNearbyResponse {

		/** A list of places that meets user's requirements like places types, number of places and specific location restriction. */
		places?: Array<GoogleMapsPlacesV1Place>;
	}

	/** Response proto for Search Nearby.  */
	export interface GoogleMapsPlacesV1SearchNearbyResponseFormProperties {
	}
	export function CreateGoogleMapsPlacesV1SearchNearbyResponseFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1SearchNearbyResponseFormProperties>({
		});

	}


	/** Request proto for SearchText.  */
	export interface GoogleMapsPlacesV1SearchTextRequest {

		/** The requested place type. Full list of types supported: https://developers.google.com/maps/documentation/places/web-service/place-types. Only support one included type. */
		includedType?: string | null;

		/** Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport. */
		languageCode?: string | null;

		/** The region to search. This location serves as a bias which means results around given location might be returned. */
		locationBias?: GoogleMapsPlacesV1SearchTextRequestLocationBias;

		/** The region to search. This location serves as a restriction which means results outside given location will not be returned. */
		locationRestriction?: GoogleMapsPlacesV1SearchTextRequestLocationRestriction;

		/**
		 * Maximum number of results to return. It must be between 1 and 20, inclusively. The default is 20. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResultCount?: number | null;

		/**
		 * Filter out results whose average user rating is strictly less than this limit. A valid value must be a float between 0 and 5 (inclusively) at a 0.5 cadence i.e. [0, 0.5, 1.0, ... , 5.0] inclusively. The input rating will round up to the nearest 0.5(ceiling). For instance, a rating of 0.6 will eliminate all results with a less than 1.0 rating.
		 * Type: double
		 */
		minRating?: number | null;

		/** Used to restrict the search to places that are currently open. The default is false. */
		openNow?: boolean | null;

		/** Used to restrict the search to places that are marked as certain price levels. Users can choose any combinations of price levels. Default to select all price levels. */
		priceLevels?: Array<GoogleMapsPlacesV1PlacePriceLevel>;

		/** How results will be ranked in the response. */
		rankPreference?: GoogleMapsPlacesV1SearchTextRequestRankPreference | null;

		/** The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported. */
		regionCode?: string | null;

		/** Used to set strict type filtering for included_type. If set to true, only results of the same type will be returned. Default to false. */
		strictTypeFiltering?: boolean | null;

		/** Required. The text query for textual search. */
		textQuery?: string | null;
	}

	/** Request proto for SearchText.  */
	export interface GoogleMapsPlacesV1SearchTextRequestFormProperties {

		/** The requested place type. Full list of types supported: https://developers.google.com/maps/documentation/places/web-service/place-types. Only support one included type. */
		includedType: FormControl<string | null | undefined>,

		/** Place details will be displayed with the preferred language if available. If the language code is unspecified or unrecognized, place details of any language may be returned, with a preference for English if such details exist. Current list of supported languages: https://developers.google.com/maps/faq#languagesupport. */
		languageCode: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to return. It must be between 1 and 20, inclusively. The default is 20. If the number is unset, it falls back to the upper limit. If the number is set to negative or exceeds the upper limit, an INVALID_ARGUMENT error is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResultCount: FormControl<number | null | undefined>,

		/**
		 * Filter out results whose average user rating is strictly less than this limit. A valid value must be a float between 0 and 5 (inclusively) at a 0.5 cadence i.e. [0, 0.5, 1.0, ... , 5.0] inclusively. The input rating will round up to the nearest 0.5(ceiling). For instance, a rating of 0.6 will eliminate all results with a less than 1.0 rating.
		 * Type: double
		 */
		minRating: FormControl<number | null | undefined>,

		/** Used to restrict the search to places that are currently open. The default is false. */
		openNow: FormControl<boolean | null | undefined>,

		/** How results will be ranked in the response. */
		rankPreference: FormControl<GoogleMapsPlacesV1SearchTextRequestRankPreference | null | undefined>,

		/** The Unicode country/region code (CLDR) of the location where the request is coming from. This parameter is used to display the place details, like region-specific place name, if available. The parameter can affect results based on applicable law. For more information, see https://www.unicode.org/cldr/charts/latest/supplemental/territory_language_information.html. Note that 3-digit region codes are not currently supported. */
		regionCode: FormControl<string | null | undefined>,

		/** Used to set strict type filtering for included_type. If set to true, only results of the same type will be returned. Default to false. */
		strictTypeFiltering: FormControl<boolean | null | undefined>,

		/** Required. The text query for textual search. */
		textQuery: FormControl<string | null | undefined>,
	}
	export function CreateGoogleMapsPlacesV1SearchTextRequestFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1SearchTextRequestFormProperties>({
			includedType: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			maxResultCount: new FormControl<number | null | undefined>(undefined),
			minRating: new FormControl<number | null | undefined>(undefined),
			openNow: new FormControl<boolean | null | undefined>(undefined),
			rankPreference: new FormControl<GoogleMapsPlacesV1SearchTextRequestRankPreference | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			strictTypeFiltering: new FormControl<boolean | null | undefined>(undefined),
			textQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The region to search. This location serves as a bias which means results around given location might be returned. */
	export interface GoogleMapsPlacesV1SearchTextRequestLocationBias {

		/** Circle with a LatLng as center and radius. */
		circle?: GoogleMapsPlacesV1Circle;

		/** A latitude-longitude viewport, represented as two diagonally opposite `low` and `high` points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include: - If `low` = `high`, the viewport consists of that single point. - If `low.longitude` > `high.longitude`, the longitude range is inverted (the viewport crosses the 180 degree longitude line). - If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees, the viewport includes all longitudes. - If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees, the longitude range is empty. - If `low.latitude` > `high.latitude`, the latitude range is empty. Both `low` and `high` must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error. For example, this viewport fully encloses New York City: { "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } } */
		rectangle?: GoogleGeoTypeViewport;
	}

	/** The region to search. This location serves as a bias which means results around given location might be returned. */
	export interface GoogleMapsPlacesV1SearchTextRequestLocationBiasFormProperties {
	}
	export function CreateGoogleMapsPlacesV1SearchTextRequestLocationBiasFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1SearchTextRequestLocationBiasFormProperties>({
		});

	}


	/** The region to search. This location serves as a restriction which means results outside given location will not be returned. */
	export interface GoogleMapsPlacesV1SearchTextRequestLocationRestriction {

		/** A latitude-longitude viewport, represented as two diagonally opposite `low` and `high` points. A viewport is considered a closed region, i.e. it includes its boundary. The latitude bounds must range between -90 to 90 degrees inclusive, and the longitude bounds must range between -180 to 180 degrees inclusive. Various cases include: - If `low` = `high`, the viewport consists of that single point. - If `low.longitude` > `high.longitude`, the longitude range is inverted (the viewport crosses the 180 degree longitude line). - If `low.longitude` = -180 degrees and `high.longitude` = 180 degrees, the viewport includes all longitudes. - If `low.longitude` = 180 degrees and `high.longitude` = -180 degrees, the longitude range is empty. - If `low.latitude` > `high.latitude`, the latitude range is empty. Both `low` and `high` must be populated, and the represented box cannot be empty (as specified by the definitions above). An empty viewport will result in an error. For example, this viewport fully encloses New York City: { "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } } */
		rectangle?: GoogleGeoTypeViewport;
	}

	/** The region to search. This location serves as a restriction which means results outside given location will not be returned. */
	export interface GoogleMapsPlacesV1SearchTextRequestLocationRestrictionFormProperties {
	}
	export function CreateGoogleMapsPlacesV1SearchTextRequestLocationRestrictionFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1SearchTextRequestLocationRestrictionFormProperties>({
		});

	}

	export enum GoogleMapsPlacesV1SearchTextRequestRankPreference { RANK_PREFERENCE_UNSPECIFIED = 'RANK_PREFERENCE_UNSPECIFIED', DISTANCE = 'DISTANCE', RELEVANCE = 'RELEVANCE' }


	/** Response proto for SearchText.  */
	export interface GoogleMapsPlacesV1SearchTextResponse {

		/** A list of places that meet the user's text search criteria. */
		places?: Array<GoogleMapsPlacesV1Place>;
	}

	/** Response proto for SearchText.  */
	export interface GoogleMapsPlacesV1SearchTextResponseFormProperties {
	}
	export function CreateGoogleMapsPlacesV1SearchTextResponseFormGroup() {
		return new FormGroup<GoogleMapsPlacesV1SearchTextResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Search for places near locations.
		 * Post v1/places:searchNearby
		 * @return {GoogleMapsPlacesV1SearchNearbyResponse} Successful response
		 */
		Places_places_searchNearby(requestBody: GoogleMapsPlacesV1SearchNearbyRequest): Observable<GoogleMapsPlacesV1SearchNearbyResponse> {
			return this.http.post<GoogleMapsPlacesV1SearchNearbyResponse>(this.baseUri + 'v1/places:searchNearby', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text query based place search.
		 * Post v1/places:searchText
		 * @return {GoogleMapsPlacesV1SearchTextResponse} Successful response
		 */
		Places_places_searchText(requestBody: GoogleMapsPlacesV1SearchTextRequest): Observable<GoogleMapsPlacesV1SearchTextResponse> {
			return this.http.post<GoogleMapsPlacesV1SearchTextResponse>(this.baseUri + 'v1/places:searchText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a photo media with a photo reference string.
		 * Get v1/{name}
		 * @param {string} name Required. The resource name of a photo media in the format: `places/{place_id}/photos/{photo_reference}/media`. The resource name of a photo as returned in a Place object's `photos.name` field comes with the format `places/{place_id}/photos/{photo_reference}`. You need to append `/media` at the end of the photo resource to get the photo media resource name.
		 * @param {number} maxHeightPx Optional. Specifies the maximum desired height, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the max_height_px and max_width_px properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned. At least one of max_height_px or max_width_px needs to be specified. If neither max_height_px nor max_width_px is specified, an INVALID_ARGUMENT error will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} maxWidthPx Optional. Specifies the maximum desired width, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the max_height_px and max_width_px properties accept an integer between 1 and 4800, inclusively. If the value is not within the allowed range, an INVALID_ARGUMENT error will be returned. At least one of max_height_px or max_width_px needs to be specified. If neither max_height_px nor max_width_px is specified, an INVALID_ARGUMENT error will be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} skipHttpRedirect Optional. If set, skip the default HTTP redirect behavior and render a text format (for example, in JSON format for HTTP use case) response. If not set, an HTTP redirect will be issued to redirect the call to the image media. This option is ignored for non-HTTP requests.
		 * @return {GoogleMapsPlacesV1PhotoMedia} Successful response
		 */
		Places_places_photos_getMedia(name: string, maxHeightPx: number | null | undefined, maxWidthPx: number | null | undefined, skipHttpRedirect: boolean | null | undefined): Observable<GoogleMapsPlacesV1PhotoMedia> {
			return this.http.get<GoogleMapsPlacesV1PhotoMedia>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&maxHeightPx=' + maxHeightPx + '&maxWidthPx=' + maxWidthPx + '&skipHttpRedirect=' + skipHttpRedirect, {});
		}
	}

}

