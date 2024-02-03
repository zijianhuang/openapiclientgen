import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AlertSearchMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitEntryWithReferencesTransitSearch;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface AlertSearchMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateAlertSearchMethodResponseFormGroup() {
		return new FormGroup<AlertSearchMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitSearch {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class?: string | null;

		/** A lekért adat. */
		entry?: TransitSearch;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitSearchFormProperties {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitEntryWithReferencesTransitSearchFormGroup() {
		return new FormGroup<TransitEntryWithReferencesTransitSearchFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adat. */
	export interface TransitSearch {

		/** Az illeszkedő zavarok azonosítói. */
		alertIds?: Array<string>;

		/** A keresett kifejezés. */
		query?: string | null;

		/** Az illeszkedő járatok azonosítói. */
		routeIds?: Array<string>;

		/** Az illeszkedő megállók azonosítói. */
		stopIds?: Array<string>;
	}

	/** A lekért adat. */
	export interface TransitSearchFormProperties {

		/** A keresett kifejezés. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateTransitSearchFormGroup() {
		return new FormGroup<TransitSearchFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A válaszhoz tartozó referenciák. */
	export interface TransitReferences {
	}

	/** A válaszhoz tartozó referenciák. */
	export interface TransitReferencesFormProperties {
	}
	export function CreateTransitReferencesFormGroup() {
		return new FormGroup<TransitReferencesFormProperties>({
		});

	}

	export enum AlertSearchMethodResponseStatus { NOT_MODIFIED = 'NOT_MODIFIED', OK = 'OK', UNKNOWN_ERROR = 'UNKNOWN_ERROR', NOT_FOUND = 'NOT_FOUND', INVALID_VALUE = 'INVALID_VALUE', NOT_OPERATING = 'NOT_OPERATING', OUTSIDE_BOUNDS = 'OUTSIDE_BOUNDS', PATH_NOT_FOUND = 'PATH_NOT_FOUND', NO_TRANSIT_TIMES = 'NO_TRANSIT_TIMES', REQUEST_TIMEOUT = 'REQUEST_TIMEOUT', BOGUS_PARAMETER = 'BOGUS_PARAMETER', TOO_CLOSE = 'TOO_CLOSE', LOCATION_NOT_ACCESSIBLE = 'LOCATION_NOT_ACCESSIBLE', MISSING_MODE = 'MISSING_MODE', ERROR_NO_GRAPH = 'ERROR_NO_GRAPH', PLANNER_SERVICE_UNAVAILABLE = 'PLANNER_SERVICE_UNAVAILABLE', ERROR_VEHICLE_LOCATION_SERVICE = 'ERROR_VEHICLE_LOCATION_SERVICE', ERROR_BIKE_RENTAL_SERVICE = 'ERROR_BIKE_RENTAL_SERVICE', ERROR_TICKETING_SERVICE = 'ERROR_TICKETING_SERVICE', ERROR_TRANSIT_INDEX_SERVICE = 'ERROR_TRANSIT_INDEX_SERVICE', MOVED_TEMPORARILY = 'MOVED_TEMPORARILY' }


	/** A tervezés metaadatai. Tartalmazza a következő és az előző tervezési időablakot a lapozás megvalósításához ezred másodpercben. */
	export interface ApiTripSearchMetadata {
		nextDateTime?: number | null;
		prevDateTime?: number | null;
		searchWindowUsed?: number | null;
	}

	/** A tervezés metaadatai. Tartalmazza a következő és az előző tervezési időablakot a lapozás megvalósításához ezred másodpercben. */
	export interface ApiTripSearchMetadataFormProperties {
		nextDateTime: FormControl<number | null | undefined>,
		prevDateTime: FormControl<number | null | undefined>,
		searchWindowUsed: FormControl<number | null | undefined>,
	}
	export function CreateApiTripSearchMetadataFormGroup() {
		return new FormGroup<ApiTripSearchMetadataFormProperties>({
			nextDateTime: new FormControl<number | null | undefined>(undefined),
			prevDateTime: new FormControl<number | null | undefined>(undefined),
			searchWindowUsed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ApiVersion { _2 = '2', _3 = '3', _4 = '4' }

	export interface ArrivalsAndDeparturesForLocationOTPMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitDepartureGroup;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface ArrivalsAndDeparturesForLocationOTPMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateArrivalsAndDeparturesForLocationOTPMethodResponseFormGroup() {
		return new FormGroup<ArrivalsAndDeparturesForLocationOTPMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitDepartureGroup {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class?: string | null;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A lekért adatok listája. */
		list?: Array<TransitDepartureGroup>;

		/** Az értéke mindig `false`. */
		outOfRange?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitDepartureGroupFormProperties {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,

		/** Az értéke mindig `false`. */
		outOfRange: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitListEntryWithReferencesTransitDepartureGroupFormGroup() {
		return new FormGroup<TransitListEntryWithReferencesTransitDepartureGroupFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
			outOfRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adatok listája. */
	export interface TransitDepartureGroup {

		/** A csoporthoz tartozó célállomás. */
		headsign?: string | null;

		/** A csoporthoz tartozó járat azonosító. */
		routeId?: string | null;

		/** A csoport menetrendi bejegyzései. */
		stopTimes?: Array<TransitScheduleStopTime>;
	}

	/** A lekért adatok listája. */
	export interface TransitDepartureGroupFormProperties {

		/** A csoporthoz tartozó célállomás. */
		headsign: FormControl<string | null | undefined>,

		/** A csoporthoz tartozó járat azonosító. */
		routeId: FormControl<string | null | undefined>,
	}
	export function CreateTransitDepartureGroupFormGroup() {
		return new FormGroup<TransitDepartureGroupFormProperties>({
			headsign: new FormControl<string | null | undefined>(undefined),
			routeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Az irányhoz tartozó menetrendi bejegyzések. */
	export interface TransitScheduleStopTime {

		/** A megállóhoz tartozó aktív zavarok azonosítóinak listája. */
		alertIds?: Array<string>;

		/** A megállóba érkezés tervezett ideje epoch másodbercben. Az első megállónál hiányzik. */
		arrivalTime?: number | null;

		/** A megállóból való indulás tervezett ideje epoch másodbercben. Az utolsó megállónál hiányzik. */
		departureTime?: number | null;

		/** A megálló csoportjának azonosítója. */
		groupIds?: Array<string>;

		/** Igaz, ha a menet legalább egy rákövetkező megállója foglalást igényel. */
		mayRequireBooking?: boolean | null;

		/** A megállóba érkezés becsült ideje epoch másodbercben, ha a járathoz van valós idejű adat. Az első megállónál hiányzik. */
		predictedArrivalTime?: number | null;

		/** A megállóból való becsült indulás ideje epoch másodbercben, ha a járathoz van valós idejű adat. Az utolsó megállónál hiányzik. */
		predictedDepartureTime?: number | null;

		/** A bejegyzéshez tartozó menet menetrendi napja. */
		serviceDate?: string | null;

		/** A megállóban kijelzett célállomás. */
		stopHeadsign?: string | null;

		/** A megálló azonosítója */
		stopId?: string | null;

		/** A bejegyzést tartalmazó menet azonosítója. */
		tripId?: string | null;

		/** Igaz, ha a menethez tartozó valós idejű adatok bizonytalanok. */
		uncertain?: boolean | null;

		/** A bejegyzéshez tartozó menet alacsonypadlóssága. */
		wheelchairAccessible?: boolean | null;
	}

	/** Az irányhoz tartozó menetrendi bejegyzések. */
	export interface TransitScheduleStopTimeFormProperties {

		/** A megállóba érkezés tervezett ideje epoch másodbercben. Az első megállónál hiányzik. */
		arrivalTime: FormControl<number | null | undefined>,

		/** A megállóból való indulás tervezett ideje epoch másodbercben. Az utolsó megállónál hiányzik. */
		departureTime: FormControl<number | null | undefined>,

		/** Igaz, ha a menet legalább egy rákövetkező megállója foglalást igényel. */
		mayRequireBooking: FormControl<boolean | null | undefined>,

		/** A megállóba érkezés becsült ideje epoch másodbercben, ha a járathoz van valós idejű adat. Az első megállónál hiányzik. */
		predictedArrivalTime: FormControl<number | null | undefined>,

		/** A megállóból való becsült indulás ideje epoch másodbercben, ha a járathoz van valós idejű adat. Az utolsó megállónál hiányzik. */
		predictedDepartureTime: FormControl<number | null | undefined>,

		/** A bejegyzéshez tartozó menet menetrendi napja. */
		serviceDate: FormControl<string | null | undefined>,

		/** A megállóban kijelzett célállomás. */
		stopHeadsign: FormControl<string | null | undefined>,

		/** A megálló azonosítója */
		stopId: FormControl<string | null | undefined>,

		/** A bejegyzést tartalmazó menet azonosítója. */
		tripId: FormControl<string | null | undefined>,

		/** Igaz, ha a menethez tartozó valós idejű adatok bizonytalanok. */
		uncertain: FormControl<boolean | null | undefined>,

		/** A bejegyzéshez tartozó menet alacsonypadlóssága. */
		wheelchairAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitScheduleStopTimeFormGroup() {
		return new FormGroup<TransitScheduleStopTimeFormProperties>({
			arrivalTime: new FormControl<number | null | undefined>(undefined),
			departureTime: new FormControl<number | null | undefined>(undefined),
			mayRequireBooking: new FormControl<boolean | null | undefined>(undefined),
			predictedArrivalTime: new FormControl<number | null | undefined>(undefined),
			predictedDepartureTime: new FormControl<number | null | undefined>(undefined),
			serviceDate: new FormControl<string | null | undefined>(undefined),
			stopHeadsign: new FormControl<string | null | undefined>(undefined),
			stopId: new FormControl<string | null | undefined>(undefined),
			tripId: new FormControl<string | null | undefined>(undefined),
			uncertain: new FormControl<boolean | null | undefined>(undefined),
			wheelchairAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ArrivalsAndDeparturesForStopOTPMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitEntryWithReferencesTransitArrivalsAndDepartures;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface ArrivalsAndDeparturesForStopOTPMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateArrivalsAndDeparturesForStopOTPMethodResponseFormGroup() {
		return new FormGroup<ArrivalsAndDeparturesForStopOTPMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitArrivalsAndDepartures {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class?: string | null;

		/** A lekért adat. */
		entry?: TransitArrivalsAndDepartures;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitArrivalsAndDeparturesFormProperties {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitEntryWithReferencesTransitArrivalsAndDeparturesFormGroup() {
		return new FormGroup<TransitEntryWithReferencesTransitArrivalsAndDeparturesFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adat. */
	export interface TransitArrivalsAndDepartures {

		/** A megállóhoz tartozó aktív zavarok. */
		alertIds?: Array<string>;

		/** A közeli megállók azonosítói. */
		nearbyStopIds?: Array<string>;

		/** A megállóhoz tartozó járatok azonosítói. */
		routeIds?: Array<string>;

		/** A megálló azonosítója. */
		stopId?: string | null;

		/** A megállóhoz tartozó menetrendi bejegyzések. */
		stopTimes?: Array<TransitScheduleStopTime>;
	}

	/** A lekért adat. */
	export interface TransitArrivalsAndDeparturesFormProperties {

		/** A megálló azonosítója. */
		stopId: FormControl<string | null | undefined>,
	}
	export function CreateTransitArrivalsAndDeparturesFormGroup() {
		return new FormGroup<TransitArrivalsAndDeparturesFormProperties>({
			stopId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BicycleRentalMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitBikeRentalStation;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface BicycleRentalMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateBicycleRentalMethodResponseFormGroup() {
		return new FormGroup<BicycleRentalMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitBikeRentalStation {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class?: string | null;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A lekért adatok listája. */
		list?: Array<TransitBikeRentalStation>;

		/** Az értéke mindig `false`. */
		outOfRange?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitBikeRentalStationFormProperties {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,

		/** Az értéke mindig `false`. */
		outOfRange: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitListEntryWithReferencesTransitBikeRentalStationFormGroup() {
		return new FormGroup<TransitListEntryWithReferencesTransitBikeRentalStationFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
			outOfRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adatok listája. */
	export interface TransitBikeRentalStation {

		/** Az állomáson elérhető kerékpárok száma. */
		bikes?: number | null;

		/** Az állomás kódja. */
		code?: string | null;

		/** Az állomás azonosítója. */
		id?: string | null;

		/** Az állomás szélességi koordinátája. */
		lat?: number | null;

		/** Az állomás hosszúsági koordinátája. */
		lon?: number | null;

		/** Az állomás neve. */
		name?: string | null;

		/** Az állomás összes helyének száma. Ez mindig fix 999. */
		spaces?: number | null;

		/** Az állomás típusa. */
		type?: string | null;
	}

	/** A lekért adatok listája. */
	export interface TransitBikeRentalStationFormProperties {

		/** Az állomáson elérhető kerékpárok száma. */
		bikes: FormControl<number | null | undefined>,

		/** Az állomás kódja. */
		code: FormControl<string | null | undefined>,

		/** Az állomás azonosítója. */
		id: FormControl<string | null | undefined>,

		/** Az állomás szélességi koordinátája. */
		lat: FormControl<number | null | undefined>,

		/** Az állomás hosszúsági koordinátája. */
		lon: FormControl<number | null | undefined>,

		/** Az állomás neve. */
		name: FormControl<string | null | undefined>,

		/** Az állomás összes helyének száma. Ez mindig fix 999. */
		spaces: FormControl<number | null | undefined>,

		/** Az állomás típusa. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransitBikeRentalStationFormGroup() {
		return new FormGroup<TransitBikeRentalStationFormProperties>({
			bikes: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			spaces: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Kerékpáros útszakaszok kategórizálásai. */
	export enum BikeStreetCategory { CYCLEWAY = 'CYCLEWAY', CYCLELANE = 'CYCLELANE', LOW_TRAFFIC = 'LOW_TRAFFIC', OTHER = 'OTHER', PEDESTRIAN = 'PEDESTRIAN' }

	export enum Dialect { otp = 'otp', mobile = 'mobile' }


	/** Az útiterv kivonatos megjelenítéséhez használható  lábak és adatok. */
	export interface DisplayedLeg {

		/** Jelzi, ha a láb az első az útitervben. */
		first?: boolean | null;

		/** Jelzi, ha a láb az utolsó az útitervben. */
		last?: boolean | null;

		/** Az indulási hely neve, kivéve az utolsón, ahol a érkezési helyé. */
		name?: string | null;

		/** Az utolsó lábon az érkezési idő, az összes többin az indulási. */
		time?: number | null;

		/** Jelzi, hogy a láb nem tranzit típusú. */
		walkTo?: boolean | null;
	}

	/** Az útiterv kivonatos megjelenítéséhez használható  lábak és adatok. */
	export interface DisplayedLegFormProperties {

		/** Jelzi, ha a láb az első az útitervben. */
		first: FormControl<boolean | null | undefined>,

		/** Jelzi, ha a láb az utolsó az útitervben. */
		last: FormControl<boolean | null | undefined>,

		/** Az indulási hely neve, kivéve az utolsón, ahol a érkezési helyé. */
		name: FormControl<string | null | undefined>,

		/** Az utolsó lábon az érkezési idő, az összes többin az indulási. */
		time: FormControl<number | null | undefined>,

		/** Jelzi, hogy a láb nem tranzit típusú. */
		walkTo: FormControl<boolean | null | undefined>,
	}
	export function CreateDisplayedLegFormGroup() {
		return new FormGroup<DisplayedLegFormProperties>({
			first: new FormControl<boolean | null | undefined>(undefined),
			last: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			walkTo: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A zavar hatásának típusa. */
	export enum EffectType { NO_SERVICE = 'NO_SERVICE', WARNING = 'WARNING' }


	/** A lábhoz tartozó magassági adatok. */
	export interface ElevationPoint {

		/** A magassági pont távolsága a láb kezdetéhez képest méterben. */
		distance?: number | null;

		/** A pont magassága. */
		elevation?: number | null;
	}

	/** A lábhoz tartozó magassági adatok. */
	export interface ElevationPointFormProperties {

		/** A magassági pont távolsága a láb kezdetéhez képest méterben. */
		distance: FormControl<number | null | undefined>,

		/** A pont magassága. */
		elevation: FormControl<number | null | undefined>,
	}
	export function CreateElevationPointFormGroup() {
		return new FormGroup<ElevationPointFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined),
			elevation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A láb geometriája. */
	export interface EncodedPolylineBean {

		/** A geometria (polyline) pontjainak száma. */
		length?: number | null;

		/** A geometria (polyline) pontjai kódolva. */
		points?: string | null;
	}

	/** A láb geometriája. */
	export interface EncodedPolylineBeanFormProperties {

		/** A geometria (polyline) pontjainak száma. */
		length: FormControl<number | null | undefined>,

		/** A geometria (polyline) pontjai kódolva. */
		points: FormControl<string | null | undefined>,
	}
	export function CreateEncodedPolylineBeanFormGroup() {
		return new FormGroup<EncodedPolylineBeanFormProperties>({
			length: new FormControl<number | null | undefined>(undefined),
			points: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A talált útvonalak listája. */
	export interface Itinerary {

		/** Az útiterv során hány méter kerékpározást tartalmaztak az egyes kategóriák. Az objektum kulcsai a kategóriák (`BikeStreetCategory`). */
		bikeCategoryDistances?: {[id: string]: number };

		/** Kerékpározási távolság az útvonalon méterben. */
		bikeDistance?: number | null;

		/** Kerékpározási idő az útvonalon másodpercben. */
		bikeTime?: number | null;

		/** Jelzi, ha az útvonalhoz kell termékajánlást mutatni. */
		displayProductRecommendation?: boolean | null;

		/** Az útiterv kivonatos megjelenítéséhez használható  lábak és adatok. */
		displayedLegs?: Array<DisplayedLeg>;

		/** Az útvonal hossza másodpercben. */
		duration?: number | null;

		/** Az útiterv során hány métert emelkedik az útvonal. */
		elevationGained?: number | null;

		/** Az útiterv során hány métert süllyed az útvonal. */
		elevationLost?: number | null;

		/** Az érkezési időpont ezredmásodpercben. */
		endTime?: Date | null;

		/** Az utazástervező algoritmus által használt súly. */
		generalizedCost?: number | null;

		/** Az útiterv lábai (részei). */
		legs?: Array<Leg>;

		/** Jelzi, hogy a visszaadott útvonalak tartalmazhatnak olyan járatokat (pl.: vonatok), amire a terv során érintett jegyértékesítési helyen nem lehet jegyet váltani. */
		notAllTicketsAvailable?: boolean | null;

		/** Útitervminták engedélyezése esetén a minták időtartam-adatai. */
		patternDuration?: PatternStatistics;

		/** Útitervminták engedélyezése esetén a minták időtartam-adatai. */
		patternFrequency?: PatternStatistics;

		/** Útitervminták engedélyezése esetén a mintába tartozó útitervek. */
		patternItineraries?: Array<Itinerary>;

		/** Az indulási időpont ezredmásodpercben. */
		startTime?: Date | null;

		/** Jelzi, ha az útvonal meredekebb, mint a paraméterekben kért. */
		tooSloped?: boolean | null;

		/** Átszállások száma az útitervben. */
		transfers?: number | null;

		/** Járművön töltött idő az útvonalon másodpercben. */
		transitTime?: number | null;

		/** A várakozási idővel igazított súly. */
		waitTimeAdjustedGeneralizedCost?: number | null;

		/** Várakozási idő járműre az útvonalon másodpercben. */
		waitingTime?: number | null;

		/** Sétálási távolság az útvonalon méterben. */
		walkDistance?: number | null;

		/** Jelzi, hogy a sétálási limit túl lett lépve az útitervben. */
		walkLimitExceeded?: boolean | null;

		/** Sétálási idő az útvonalon másodpercben. */
		walkTime?: number | null;
	}

	/** A talált útvonalak listája. */
	export interface ItineraryFormProperties {

		/** Az útiterv során hány méter kerékpározást tartalmaztak az egyes kategóriák. Az objektum kulcsai a kategóriák (`BikeStreetCategory`). */
		bikeCategoryDistances: FormControl<{[id: string]: number } | null | undefined>,

		/** Kerékpározási távolság az útvonalon méterben. */
		bikeDistance: FormControl<number | null | undefined>,

		/** Kerékpározási idő az útvonalon másodpercben. */
		bikeTime: FormControl<number | null | undefined>,

		/** Jelzi, ha az útvonalhoz kell termékajánlást mutatni. */
		displayProductRecommendation: FormControl<boolean | null | undefined>,

		/** Az útvonal hossza másodpercben. */
		duration: FormControl<number | null | undefined>,

		/** Az útiterv során hány métert emelkedik az útvonal. */
		elevationGained: FormControl<number | null | undefined>,

		/** Az útiterv során hány métert süllyed az útvonal. */
		elevationLost: FormControl<number | null | undefined>,

		/** Az érkezési időpont ezredmásodpercben. */
		endTime: FormControl<Date | null | undefined>,

		/** Az utazástervező algoritmus által használt súly. */
		generalizedCost: FormControl<number | null | undefined>,

		/** Jelzi, hogy a visszaadott útvonalak tartalmazhatnak olyan járatokat (pl.: vonatok), amire a terv során érintett jegyértékesítési helyen nem lehet jegyet váltani. */
		notAllTicketsAvailable: FormControl<boolean | null | undefined>,

		/** Az indulási időpont ezredmásodpercben. */
		startTime: FormControl<Date | null | undefined>,

		/** Jelzi, ha az útvonal meredekebb, mint a paraméterekben kért. */
		tooSloped: FormControl<boolean | null | undefined>,

		/** Átszállások száma az útitervben. */
		transfers: FormControl<number | null | undefined>,

		/** Járművön töltött idő az útvonalon másodpercben. */
		transitTime: FormControl<number | null | undefined>,

		/** A várakozási idővel igazított súly. */
		waitTimeAdjustedGeneralizedCost: FormControl<number | null | undefined>,

		/** Várakozási idő járműre az útvonalon másodpercben. */
		waitingTime: FormControl<number | null | undefined>,

		/** Sétálási távolság az útvonalon méterben. */
		walkDistance: FormControl<number | null | undefined>,

		/** Jelzi, hogy a sétálási limit túl lett lépve az útitervben. */
		walkLimitExceeded: FormControl<boolean | null | undefined>,

		/** Sétálási idő az útvonalon másodpercben. */
		walkTime: FormControl<number | null | undefined>,
	}
	export function CreateItineraryFormGroup() {
		return new FormGroup<ItineraryFormProperties>({
			bikeCategoryDistances: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			bikeDistance: new FormControl<number | null | undefined>(undefined),
			bikeTime: new FormControl<number | null | undefined>(undefined),
			displayProductRecommendation: new FormControl<boolean | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			elevationGained: new FormControl<number | null | undefined>(undefined),
			elevationLost: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			generalizedCost: new FormControl<number | null | undefined>(undefined),
			notAllTicketsAvailable: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			tooSloped: new FormControl<boolean | null | undefined>(undefined),
			transfers: new FormControl<number | null | undefined>(undefined),
			transitTime: new FormControl<number | null | undefined>(undefined),
			waitTimeAdjustedGeneralizedCost: new FormControl<number | null | undefined>(undefined),
			waitingTime: new FormControl<number | null | undefined>(undefined),
			walkDistance: new FormControl<number | null | undefined>(undefined),
			walkLimitExceeded: new FormControl<boolean | null | undefined>(undefined),
			walkTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Az útiterv lábai (részei). */
	export interface Leg {

		/** Tranzit láb esetén a járatot biztosító szolgáltató azonosítója. */
		agencyId?: string | null;

		/** Tranzit láb esetén a járatot biztosító szolgáltató neve. */
		agencyName?: string | null;

		/** Tranzit láb esetén a járatot biztosító szolgáltató időzónájának eltolódása. */
		agencyTimeZoneOffset?: number | null;

		/** Tranzit láb esetén a járatot biztosító szolgáltató linkje. */
		agencyUrl?: string | null;

		/** A lábhoz tartozó aktív zavarok azonosítói. */
		alertIds?: Array<string>;

		/** Igényvezérelt menet esetén a leszállási szabály. */
		alightRule?: string | null;

		/** Tranzit láb esetén a láb vége és a tényleges leszállás közötti késleltetés. */
		arrivalDelay?: number | null;

		/** Igényvezérelt menet esetén a felszállási szabály. */
		boardRule?: string | null;

		/** Tranzit láb esetén a láb indulása és a tényleges felszállás közötti késleltetés. */
		departureDelay?: number | null;

		/** A láb bejárása alatt megtett táv méterben. */
		distance?: number | null;
		duration?: number | null;

		/** A láb vége ezredmásodpercben. */
		endTime?: Date | null;

		/** Tranzit láb esetén a köztes megállók a láb kezdete és végződése között. */
		from?: Place;

		/** Az utazástervező algoritmus által használt súly. */
		generalizedCost?: number | null;

		/** Útiterv minták esetén jelzi, hogy a mintában a megfelelő lábak valamelyikén szerepel aktív riasztás. Nincs kitöltve, ha az útiterv minták ki vannak kapcsolva. */
		hasAlertInPattern?: boolean | null;

		/** Tranzit láb esetén a menet célállomása. */
		headsign?: string | null;

		/** Jelzi, hogy az utas maradjon a járművön a végállomásnál, mert másik menetként folytatódik (hurokjárat). */
		interlineWithPreviousLeg?: boolean | null;

		/** Tranzit láb esetén a köztes megállók a láb kezdete és végződése között. */
		intermediateStops?: Array<Place>;

		/** A lábhoz tartozó magassági adatok. */
		legElevation?: Array<ElevationPoint>;

		/** A láb geometriája. */
		legGeometry?: EncodedPolylineBean;

		/** A lábon használt közlekedési mód. */
		mode?: string | null;

		/** Igaz, ha járatról történt a tervezés. */
		onBoardAccess?: boolean | null;

		/** Jelzi, hogy a láb egy pathway (pl. metró lejáró). */
		pathway?: boolean | null;

		/** Jelzi, hogy a láb adatai valós idejű forrásból származnak. */
		realTime?: boolean | null;

		/** Jelzi, hogy a lábat bérelt kerékpárral kell bejárni. */
		rentedBike?: boolean | null;

		/** Igaz, ha szükséges foglalás. */
		requiresBooking?: boolean | null;

		/** Tranzit láb esetén a járat hátterének színe a megjelenítéséhez. */
		routeColor?: string | null;

		/** Tranzit láb esetén a járat azonosítója. */
		routeId?: string | null;

		/** Útiterv minták esetén, a lábnak a mintában megfelelő, más lábakon használt járatok azonosítóinak listája. */
		routeIds?: Array<string>;

		/** Tranzit láb esetén a járat hosszú neve. */
		routeLongName?: string | null;

		/** Tranzit láb esetén a járat rövid neve. */
		routeShortName?: string | null;

		/** Tranzit láb esetén a járat szövegének színe a megjelenítéséhez. */
		routeTextColor?: string | null;

		/** Tranzit láb esetén a menet menetrendi napja. */
		serviceDate?: string | null;

		/** A láb kezdete ezredmásodpercben. */
		startTime?: Date | null;

		/** Az útvonal lépései gyalogos, kerékpáros vagy autós láb lesetén. */
		steps?: Array<WalkStep>;
		timeZone?: LegTimeZone;

		/** Tranzit láb esetén a köztes megállók a láb kezdete és végződése között. */
		to?: Place;
		transitLeg?: boolean | null;

		/** Tranzit láb esetén a menethez tartozó GTFS block_id, amennyiben létezik. */
		tripBlockId?: string | null;

		/** Tranzit láb esetén a menet azonosítója. */
		tripId?: string | null;

		/** Útiterv minták esetén, a lábnak a mintában megfelelő, más lábakon használt menetek azonosítóinak listája. */
		tripIds?: Array<string>;

		/** A menet utazástervező azonosítója, amelyet a `fromPlace` megadásához lehet használni. */
		vertex?: string | null;

		/** A várakozási idő mennyiségi típusa a tranzit típusú lábon. */
		wait?: LegWait | null;
	}

	/** Az útiterv lábai (részei). */
	export interface LegFormProperties {

		/** Tranzit láb esetén a járatot biztosító szolgáltató azonosítója. */
		agencyId: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a járatot biztosító szolgáltató neve. */
		agencyName: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a járatot biztosító szolgáltató időzónájának eltolódása. */
		agencyTimeZoneOffset: FormControl<number | null | undefined>,

		/** Tranzit láb esetén a járatot biztosító szolgáltató linkje. */
		agencyUrl: FormControl<string | null | undefined>,

		/** Igényvezérelt menet esetén a leszállási szabály. */
		alightRule: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a láb vége és a tényleges leszállás közötti késleltetés. */
		arrivalDelay: FormControl<number | null | undefined>,

		/** Igényvezérelt menet esetén a felszállási szabály. */
		boardRule: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a láb indulása és a tényleges felszállás közötti késleltetés. */
		departureDelay: FormControl<number | null | undefined>,

		/** A láb bejárása alatt megtett táv méterben. */
		distance: FormControl<number | null | undefined>,
		duration: FormControl<number | null | undefined>,

		/** A láb vége ezredmásodpercben. */
		endTime: FormControl<Date | null | undefined>,

		/** Az utazástervező algoritmus által használt súly. */
		generalizedCost: FormControl<number | null | undefined>,

		/** Útiterv minták esetén jelzi, hogy a mintában a megfelelő lábak valamelyikén szerepel aktív riasztás. Nincs kitöltve, ha az útiterv minták ki vannak kapcsolva. */
		hasAlertInPattern: FormControl<boolean | null | undefined>,

		/** Tranzit láb esetén a menet célállomása. */
		headsign: FormControl<string | null | undefined>,

		/** Jelzi, hogy az utas maradjon a járművön a végállomásnál, mert másik menetként folytatódik (hurokjárat). */
		interlineWithPreviousLeg: FormControl<boolean | null | undefined>,

		/** A lábon használt közlekedési mód. */
		mode: FormControl<string | null | undefined>,

		/** Igaz, ha járatról történt a tervezés. */
		onBoardAccess: FormControl<boolean | null | undefined>,

		/** Jelzi, hogy a láb egy pathway (pl. metró lejáró). */
		pathway: FormControl<boolean | null | undefined>,

		/** Jelzi, hogy a láb adatai valós idejű forrásból származnak. */
		realTime: FormControl<boolean | null | undefined>,

		/** Jelzi, hogy a lábat bérelt kerékpárral kell bejárni. */
		rentedBike: FormControl<boolean | null | undefined>,

		/** Igaz, ha szükséges foglalás. */
		requiresBooking: FormControl<boolean | null | undefined>,

		/** Tranzit láb esetén a járat hátterének színe a megjelenítéséhez. */
		routeColor: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a járat azonosítója. */
		routeId: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a járat hosszú neve. */
		routeLongName: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a járat rövid neve. */
		routeShortName: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a járat szövegének színe a megjelenítéséhez. */
		routeTextColor: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a menet menetrendi napja. */
		serviceDate: FormControl<string | null | undefined>,

		/** A láb kezdete ezredmásodpercben. */
		startTime: FormControl<Date | null | undefined>,
		transitLeg: FormControl<boolean | null | undefined>,

		/** Tranzit láb esetén a menethez tartozó GTFS block_id, amennyiben létezik. */
		tripBlockId: FormControl<string | null | undefined>,

		/** Tranzit láb esetén a menet azonosítója. */
		tripId: FormControl<string | null | undefined>,

		/** A menet utazástervező azonosítója, amelyet a `fromPlace` megadásához lehet használni. */
		vertex: FormControl<string | null | undefined>,

		/** A várakozási idő mennyiségi típusa a tranzit típusú lábon. */
		wait: FormControl<LegWait | null | undefined>,
	}
	export function CreateLegFormGroup() {
		return new FormGroup<LegFormProperties>({
			agencyId: new FormControl<string | null | undefined>(undefined),
			agencyName: new FormControl<string | null | undefined>(undefined),
			agencyTimeZoneOffset: new FormControl<number | null | undefined>(undefined),
			agencyUrl: new FormControl<string | null | undefined>(undefined),
			alightRule: new FormControl<string | null | undefined>(undefined),
			arrivalDelay: new FormControl<number | null | undefined>(undefined),
			boardRule: new FormControl<string | null | undefined>(undefined),
			departureDelay: new FormControl<number | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			generalizedCost: new FormControl<number | null | undefined>(undefined),
			hasAlertInPattern: new FormControl<boolean | null | undefined>(undefined),
			headsign: new FormControl<string | null | undefined>(undefined),
			interlineWithPreviousLeg: new FormControl<boolean | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			onBoardAccess: new FormControl<boolean | null | undefined>(undefined),
			pathway: new FormControl<boolean | null | undefined>(undefined),
			realTime: new FormControl<boolean | null | undefined>(undefined),
			rentedBike: new FormControl<boolean | null | undefined>(undefined),
			requiresBooking: new FormControl<boolean | null | undefined>(undefined),
			routeColor: new FormControl<string | null | undefined>(undefined),
			routeId: new FormControl<string | null | undefined>(undefined),
			routeLongName: new FormControl<string | null | undefined>(undefined),
			routeShortName: new FormControl<string | null | undefined>(undefined),
			routeTextColor: new FormControl<string | null | undefined>(undefined),
			serviceDate: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			transitLeg: new FormControl<boolean | null | undefined>(undefined),
			tripBlockId: new FormControl<string | null | undefined>(undefined),
			tripId: new FormControl<string | null | undefined>(undefined),
			vertex: new FormControl<string | null | undefined>(undefined),
			wait: new FormControl<LegWait | null | undefined>(undefined),
		});

	}


	/** Tranzit láb esetén a köztes megállók a láb kezdete és végződése között. */
	export interface Place {

		/** A helyre érkezés időpontja ezredmásodpercben. */
		arrival?: Date | null;

		/** A helyről való indulás időpontja ezredmásodpercben. */
		departure?: Date | null;

		/** A hely szélességi koordinátája. */
		lat?: number | null;

		/** A hely hosszúsági koordinátája. */
		lon?: number | null;

		/** Megálló esetén a megálló neve, POI-nál a POI neve. */
		name?: string | null;

		/** Az indulási és az érkezési hely címkéje. Az első és az utolsó útvonal lábon van kitöltve. */
		orig?: string | null;

		/** A megálló peron-kódja, ha a hely egy megálló. */
		platformCode?: string | null;

		/** A megálló kódja, ha a hely egy megálló. */
		stopCode?: string | null;

		/** A megálló azonosítója, ha a hely egy megálló. */
		stopId?: string | null;

		/** A megálló indexe, ha a hely egy megálló. */
		stopIndex?: number | null;

		/** A megálló sorszáma a meneten, ha a hely egy megálló. */
		stopSequence?: number | null;

		/** A jegyértékesítési pontok listája. */
		ticketingLocation?: TicketingLocation;
	}

	/** Tranzit láb esetén a köztes megállók a láb kezdete és végződése között. */
	export interface PlaceFormProperties {

		/** A helyre érkezés időpontja ezredmásodpercben. */
		arrival: FormControl<Date | null | undefined>,

		/** A helyről való indulás időpontja ezredmásodpercben. */
		departure: FormControl<Date | null | undefined>,

		/** A hely szélességi koordinátája. */
		lat: FormControl<number | null | undefined>,

		/** A hely hosszúsági koordinátája. */
		lon: FormControl<number | null | undefined>,

		/** Megálló esetén a megálló neve, POI-nál a POI neve. */
		name: FormControl<string | null | undefined>,

		/** Az indulási és az érkezési hely címkéje. Az első és az utolsó útvonal lábon van kitöltve. */
		orig: FormControl<string | null | undefined>,

		/** A megálló peron-kódja, ha a hely egy megálló. */
		platformCode: FormControl<string | null | undefined>,

		/** A megálló kódja, ha a hely egy megálló. */
		stopCode: FormControl<string | null | undefined>,

		/** A megálló azonosítója, ha a hely egy megálló. */
		stopId: FormControl<string | null | undefined>,

		/** A megálló indexe, ha a hely egy megálló. */
		stopIndex: FormControl<number | null | undefined>,

		/** A megálló sorszáma a meneten, ha a hely egy megálló. */
		stopSequence: FormControl<number | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			arrival: new FormControl<Date | null | undefined>(undefined),
			departure: new FormControl<Date | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orig: new FormControl<string | null | undefined>(undefined),
			platformCode: new FormControl<string | null | undefined>(undefined),
			stopCode: new FormControl<string | null | undefined>(undefined),
			stopId: new FormControl<string | null | undefined>(undefined),
			stopIndex: new FormControl<number | null | undefined>(undefined),
			stopSequence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A jegyértékesítési pontok listája. */
	export interface TicketingLocation {

		/** A jegyértékesítési hely címe. */
		address?: string | null;

		/** Jelzi, hogy a jegyértékesítési helyen elfogadnak készpénzt. */
		cashAccepted?: boolean | null;

		/** Jelzi, hogy a jegyértékesítési helyen elfogadnak bankkártyát. */
		creditCardsAccepted?: boolean | null;

		/** A jegyértékesítési hely leírása. */
		description?: string | null;

		/** A jegyértékesítési hely azonosítója. */
		id?: string | null;

		/** A jegyértékesítési hely utolsó frissítésének időpontja ezredmásodpercben. */
		lastModified?: Date | null;

		/** A jegyértékesítési hely szélességi koordinátája. */
		lat?: number | null;

		/** A jegyértékesítési hely hosszúsági koordinátája. */
		lon?: number | null;

		/** A jegyértékesítési hely nyitvatartása. */
		openingPeriods?: Array<TicketingPeriod>;

		/** A jegyértékesítési hely üzemeltetője. */
		operator?: string | null;

		/** Lehet-e a helyszínen igazolványt csináltatni. */
		passIdCreation?: boolean | null;

		/** A jegyértékesítési hely helye. */
		place?: string | null;

		/** Az árusított termékek azonosítói. */
		products?: Array<string>;

		/** A jegyértékesítési hely állapota. */
		state?: TicketingLocationState | null;

		/** Be lehet-e váltani a helyszínen jegyet. */
		ticketPassExchange?: boolean | null;

		/** A jegyértékesítési hely típusa. */
		type?: TicketingLocationType | null;

		/** Ha `false`, akkor hibás az adat, így a felületen elrejtésre kerül. */
		visible?: boolean | null;
	}

	/** A jegyértékesítési pontok listája. */
	export interface TicketingLocationFormProperties {

		/** A jegyértékesítési hely címe. */
		address: FormControl<string | null | undefined>,

		/** Jelzi, hogy a jegyértékesítési helyen elfogadnak készpénzt. */
		cashAccepted: FormControl<boolean | null | undefined>,

		/** Jelzi, hogy a jegyértékesítési helyen elfogadnak bankkártyát. */
		creditCardsAccepted: FormControl<boolean | null | undefined>,

		/** A jegyértékesítési hely leírása. */
		description: FormControl<string | null | undefined>,

		/** A jegyértékesítési hely azonosítója. */
		id: FormControl<string | null | undefined>,

		/** A jegyértékesítési hely utolsó frissítésének időpontja ezredmásodpercben. */
		lastModified: FormControl<Date | null | undefined>,

		/** A jegyértékesítési hely szélességi koordinátája. */
		lat: FormControl<number | null | undefined>,

		/** A jegyértékesítési hely hosszúsági koordinátája. */
		lon: FormControl<number | null | undefined>,

		/** A jegyértékesítési hely üzemeltetője. */
		operator: FormControl<string | null | undefined>,

		/** Lehet-e a helyszínen igazolványt csináltatni. */
		passIdCreation: FormControl<boolean | null | undefined>,

		/** A jegyértékesítési hely helye. */
		place: FormControl<string | null | undefined>,

		/** A jegyértékesítési hely állapota. */
		state: FormControl<TicketingLocationState | null | undefined>,

		/** Be lehet-e váltani a helyszínen jegyet. */
		ticketPassExchange: FormControl<boolean | null | undefined>,

		/** A jegyértékesítési hely típusa. */
		type: FormControl<TicketingLocationType | null | undefined>,

		/** Ha `false`, akkor hibás az adat, így a felületen elrejtésre kerül. */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateTicketingLocationFormGroup() {
		return new FormGroup<TicketingLocationFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			cashAccepted: new FormControl<boolean | null | undefined>(undefined),
			creditCardsAccepted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			passIdCreation: new FormControl<boolean | null | undefined>(undefined),
			place: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<TicketingLocationState | null | undefined>(undefined),
			ticketPassExchange: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<TicketingLocationType | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A jegyértékesítési hely nyitvatartása. */
	export interface TicketingPeriod {

		/** Zárási idő HH:mm formátumban. */
		closes?: string | null;

		/** Zárási idő másodpercben. */
		closesSeconds?: number | null;

		/** A nyitvatartási idő napja. Lehet HOL (ünnepnap) és 0247 (éjjel-nappali). */
		dayOfWeek?: TicketingPeriodDayOfWeek | null;

		/** Nyitási idő HH:mm formátumban. */
		opens?: string | null;

		/** Nyitási idő másodpercben. */
		opensSeconds?: number | null;
	}

	/** A jegyértékesítési hely nyitvatartása. */
	export interface TicketingPeriodFormProperties {

		/** Zárási idő HH:mm formátumban. */
		closes: FormControl<string | null | undefined>,

		/** Zárási idő másodpercben. */
		closesSeconds: FormControl<number | null | undefined>,

		/** A nyitvatartási idő napja. Lehet HOL (ünnepnap) és 0247 (éjjel-nappali). */
		dayOfWeek: FormControl<TicketingPeriodDayOfWeek | null | undefined>,

		/** Nyitási idő HH:mm formátumban. */
		opens: FormControl<string | null | undefined>,

		/** Nyitási idő másodpercben. */
		opensSeconds: FormControl<number | null | undefined>,
	}
	export function CreateTicketingPeriodFormGroup() {
		return new FormGroup<TicketingPeriodFormProperties>({
			closes: new FormControl<string | null | undefined>(undefined),
			closesSeconds: new FormControl<number | null | undefined>(undefined),
			dayOfWeek: new FormControl<TicketingPeriodDayOfWeek | null | undefined>(undefined),
			opens: new FormControl<string | null | undefined>(undefined),
			opensSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TicketingPeriodDayOfWeek { MON = 'MON', TUE = 'TUE', WED = 'WED', THU = 'THU', FRI = 'FRI', SAT = 'SAT', SUN = 'SUN', HOL = 'HOL', O247 = 'O247' }

	export enum TicketingLocationState { PLANNED = 'PLANNED', OPERATIONAL = 'OPERATIONAL', INOPERATIVE = 'INOPERATIVE' }

	export enum TicketingLocationType { CUSTOMER_CENTER = 'CUSTOMER_CENTER', CASHIER = 'CASHIER', VENDING_MACHINE = 'VENDING_MACHINE', RESELLER = 'RESELLER' }


	/** Az útvonal lépései gyalogos, kerékpáros vagy autós láb lesetén. */
	export interface WalkStep {

		/** A lépés abszolút iránya. */
		absoluteDirection?: WalkStepAbsoluteDirection | null;

		/** Jelzi, hogy a lépés egy nyílt terület, pl.: pláza, vagy vonat peron. */
		area?: boolean | null;

		/** Kerékpáros útszakaszok kategórizálásai. */
		bicycleCategory?: BikeStreetCategory | null;

		/** A szakasz egyirányúsága. */
		bicycleStreetDirection?: WalkStepBicycleStreetDirection | null;

		/** Jelzi, hogy az utca nevét a rendszer generálta. */
		bogusName?: boolean | null;

		/** A lépés hossza méterben. */
		distance?: number | null;

		/** A láb geometriája. */
		geometry?: EncodedPolylineBean;

		/** A lépés kezdetének szélességi koordinátája. */
		lat?: number | null;

		/** A lépés kezdetének hosszúsági koordinátája. */
		lon?: number | null;

		/** A lépés iránya. */
		relativeDirection?: WalkStepRelativeDirection | null;

		/** Jelzi, hogy az utca irányt vált egy kereszteződésben. */
		stayOn?: boolean | null;

		/** Az utca neve, amin a lépés halad. */
		streetName?: string | null;

		/** Jelzi, hogy a szakszon sétálni kell kerékpáros tervezés esetén. */
		walkingBike?: boolean | null;
	}

	/** Az útvonal lépései gyalogos, kerékpáros vagy autós láb lesetén. */
	export interface WalkStepFormProperties {

		/** A lépés abszolút iránya. */
		absoluteDirection: FormControl<WalkStepAbsoluteDirection | null | undefined>,

		/** Jelzi, hogy a lépés egy nyílt terület, pl.: pláza, vagy vonat peron. */
		area: FormControl<boolean | null | undefined>,

		/** Kerékpáros útszakaszok kategórizálásai. */
		bicycleCategory: FormControl<BikeStreetCategory | null | undefined>,

		/** A szakasz egyirányúsága. */
		bicycleStreetDirection: FormControl<WalkStepBicycleStreetDirection | null | undefined>,

		/** Jelzi, hogy az utca nevét a rendszer generálta. */
		bogusName: FormControl<boolean | null | undefined>,

		/** A lépés hossza méterben. */
		distance: FormControl<number | null | undefined>,

		/** A lépés kezdetének szélességi koordinátája. */
		lat: FormControl<number | null | undefined>,

		/** A lépés kezdetének hosszúsági koordinátája. */
		lon: FormControl<number | null | undefined>,

		/** A lépés iránya. */
		relativeDirection: FormControl<WalkStepRelativeDirection | null | undefined>,

		/** Jelzi, hogy az utca irányt vált egy kereszteződésben. */
		stayOn: FormControl<boolean | null | undefined>,

		/** Az utca neve, amin a lépés halad. */
		streetName: FormControl<string | null | undefined>,

		/** Jelzi, hogy a szakszon sétálni kell kerékpáros tervezés esetén. */
		walkingBike: FormControl<boolean | null | undefined>,
	}
	export function CreateWalkStepFormGroup() {
		return new FormGroup<WalkStepFormProperties>({
			absoluteDirection: new FormControl<WalkStepAbsoluteDirection | null | undefined>(undefined),
			area: new FormControl<boolean | null | undefined>(undefined),
			bicycleCategory: new FormControl<BikeStreetCategory | null | undefined>(undefined),
			bicycleStreetDirection: new FormControl<WalkStepBicycleStreetDirection | null | undefined>(undefined),
			bogusName: new FormControl<boolean | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			relativeDirection: new FormControl<WalkStepRelativeDirection | null | undefined>(undefined),
			stayOn: new FormControl<boolean | null | undefined>(undefined),
			streetName: new FormControl<string | null | undefined>(undefined),
			walkingBike: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum WalkStepAbsoluteDirection { NORTH = 'NORTH', NORTHEAST = 'NORTHEAST', EAST = 'EAST', SOUTHEAST = 'SOUTHEAST', SOUTH = 'SOUTH', SOUTHWEST = 'SOUTHWEST', WEST = 'WEST', NORTHWEST = 'NORTHWEST' }

	export enum WalkStepBicycleStreetDirection { BIDIRECTIONAL = 'BIDIRECTIONAL', ONEWAY_WITH_TRAFFIC = 'ONEWAY_WITH_TRAFFIC', ONEWAY_AGAINST_TRAFFIC = 'ONEWAY_AGAINST_TRAFFIC' }

	export enum WalkStepRelativeDirection { DEPART = 'DEPART', HARD_LEFT = 'HARD_LEFT', LEFT = 'LEFT', SLIGHTLY_LEFT = 'SLIGHTLY_LEFT', CONTINUE = 'CONTINUE', SLIGHTLY_RIGHT = 'SLIGHTLY_RIGHT', RIGHT = 'RIGHT', HARD_RIGHT = 'HARD_RIGHT', CIRCLE_CLOCKWISE = 'CIRCLE_CLOCKWISE', CIRCLE_COUNTERCLOCKWISE = 'CIRCLE_COUNTERCLOCKWISE', ELEVATOR = 'ELEVATOR', UTURN_LEFT = 'UTURN_LEFT', UTURN_RIGHT = 'UTURN_RIGHT' }

	export interface LegTimeZone {
		displayName?: string | null;
		dstsavings?: number | null;
		id?: string | null;
		rawOffset?: number | null;
	}
	export interface LegTimeZoneFormProperties {
		displayName: FormControl<string | null | undefined>,
		dstsavings: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		rawOffset: FormControl<number | null | undefined>,
	}
	export function CreateLegTimeZoneFormGroup() {
		return new FormGroup<LegTimeZoneFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			dstsavings: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			rawOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LegWait { SHORT = 'SHORT', LONG = 'LONG' }


	/** Útitervminták engedélyezése esetén a minták időtartam-adatai. */
	export interface PatternStatistics {

		/** Átlag érték. Akkor van kitöltve, ha az adatok megegyeznek. */
		avg?: number | null;

		/** Maximum érték. Akkor van kitöltve, ha az adatok különbözőek. */
		max?: number | null;

		/** Minimum érték. Akkor van kitöltve, ha az adatok különbözőek. */
		min?: number | null;

		/** A klienseken megjelenített szöveg. */
		text?: string | null;
	}

	/** Útitervminták engedélyezése esetén a minták időtartam-adatai. */
	export interface PatternStatisticsFormProperties {

		/** Átlag érték. Akkor van kitöltve, ha az adatok megegyeznek. */
		avg: FormControl<number | null | undefined>,

		/** Maximum érték. Akkor van kitöltve, ha az adatok különbözőek. */
		max: FormControl<number | null | undefined>,

		/** Minimum érték. Akkor van kitöltve, ha az adatok különbözőek. */
		min: FormControl<number | null | undefined>,

		/** A klienseken megjelenített szöveg. */
		text: FormControl<string | null | undefined>,
	}
	export function CreatePatternStatisticsFormGroup() {
		return new FormGroup<PatternStatisticsFormProperties>({
			avg: new FormControl<number | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MetadataResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitEntryWithReferencesTransitMetadata;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface MetadataResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateMetadataResponseFormGroup() {
		return new FormGroup<MetadataResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitMetadata {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class?: string | null;

		/** A lekért adat. */
		entry?: TransitMetadata;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitMetadataFormProperties {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitEntryWithReferencesTransitMetadataFormGroup() {
		return new FormGroup<TransitEntryWithReferencesTransitMetadataFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adat. */
	export interface TransitMetadata {

		/** Az egész alkalmazásra vonatkozó aktív zavarok azonosítói. */
		alertIds?: Array<string>;

		/** A betöltött adatokat határoló sokszög vonala (polyline). */
		boundingPolyLine?: string | null;

		/** Azon időszak vége, amelyre az összes szolgáltató biztosít adatot. Több szolgáltató esetén korábbi lehet, mint a `validityEnd`. */
		completeValidityEnd?: string | null;

		/** Azon időszak kezdete, amelyre az összes szolgáltató biztosít adatot. Több szolgáltató esetén későbbi lehet, mint a `validityStart`. */
		completeValidityStart?: string | null;

		/** A menetrendi napok, és a hozzá tartozó napok típusát tartalmazó összerendelés egy hétre (az aktuális nap, és a következő 6). */
		dayTypes?: {[id: string]: string };

		/** Az aktív adatforrások azonosítói. */
		feedIds?: Array<string>;

		/** A betöltött adatok területének befoglaló téglalapjának két sarokpontja. */
		lowerLeftLatitude?: number | null;

		/** A betöltött adatok területének befoglaló téglalapjának két sarokpontja. */
		lowerLeftLongitude?: number | null;

		/** A szerver ideje ISO8601 formátumban. */
		readableTime?: string | null;

		/** Aktuális szerveridő ezredmásodpercben. */
		time?: number | null;

		/** A szerver tranzit adatainak időzónája. */
		timeZone?: string | null;

		/** A betöltött adatok területének befoglaló téglalapjának két sarokpontja. */
		upperRightLatitude?: number | null;

		/** A betöltött adatok területének befoglaló téglalapjának két sarokpontja. */
		upperRightLongitude?: number | null;

		/** A szerveren található adatok érvényességének vége. */
		validityEnd?: string | null;

		/** A szerveren található adatok érvényességének kezdete. */
		validityStart?: string | null;
	}

	/** A lekért adat. */
	export interface TransitMetadataFormProperties {

		/** A betöltött adatokat határoló sokszög vonala (polyline). */
		boundingPolyLine: FormControl<string | null | undefined>,

		/** Azon időszak vége, amelyre az összes szolgáltató biztosít adatot. Több szolgáltató esetén korábbi lehet, mint a `validityEnd`. */
		completeValidityEnd: FormControl<string | null | undefined>,

		/** Azon időszak kezdete, amelyre az összes szolgáltató biztosít adatot. Több szolgáltató esetén későbbi lehet, mint a `validityStart`. */
		completeValidityStart: FormControl<string | null | undefined>,

		/** A menetrendi napok, és a hozzá tartozó napok típusát tartalmazó összerendelés egy hétre (az aktuális nap, és a következő 6). */
		dayTypes: FormControl<{[id: string]: string } | null | undefined>,

		/** A betöltött adatok területének befoglaló téglalapjának két sarokpontja. */
		lowerLeftLatitude: FormControl<number | null | undefined>,

		/** A betöltött adatok területének befoglaló téglalapjának két sarokpontja. */
		lowerLeftLongitude: FormControl<number | null | undefined>,

		/** A szerver ideje ISO8601 formátumban. */
		readableTime: FormControl<string | null | undefined>,

		/** Aktuális szerveridő ezredmásodpercben. */
		time: FormControl<number | null | undefined>,

		/** A szerver tranzit adatainak időzónája. */
		timeZone: FormControl<string | null | undefined>,

		/** A betöltött adatok területének befoglaló téglalapjának két sarokpontja. */
		upperRightLatitude: FormControl<number | null | undefined>,

		/** A betöltött adatok területének befoglaló téglalapjának két sarokpontja. */
		upperRightLongitude: FormControl<number | null | undefined>,

		/** A szerveren található adatok érvényességének vége. */
		validityEnd: FormControl<string | null | undefined>,

		/** A szerveren található adatok érvényességének kezdete. */
		validityStart: FormControl<string | null | undefined>,
	}
	export function CreateTransitMetadataFormGroup() {
		return new FormGroup<TransitMetadataFormProperties>({
			boundingPolyLine: new FormControl<string | null | undefined>(undefined),
			completeValidityEnd: new FormControl<string | null | undefined>(undefined),
			completeValidityStart: new FormControl<string | null | undefined>(undefined),
			dayTypes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lowerLeftLatitude: new FormControl<number | null | undefined>(undefined),
			lowerLeftLongitude: new FormControl<number | null | undefined>(undefined),
			readableTime: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			upperRightLatitude: new FormControl<number | null | undefined>(undefined),
			upperRightLongitude: new FormControl<number | null | undefined>(undefined),
			validityEnd: new FormControl<string | null | undefined>(undefined),
			validityStart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MobileTransitReferences {

		/** Szolgáltatók referenciáinak listája. */
		agencies?: Array<TransitAgency>;

		/** Zavarok referenciáinak listája. */
		alerts?: Array<TransitAlert>;

		/** Járatok referenciáinak listája. */
		routes?: Array<TransitRoute>;

		/** Megállók referenciáinak listája. */
		stops?: Array<TransitStop>;

		/** Menetek referenciáinak listája. */
		trips?: Array<TransitTrip>;
	}
	export interface MobileTransitReferencesFormProperties {
	}
	export function CreateMobileTransitReferencesFormGroup() {
		return new FormGroup<MobileTransitReferencesFormProperties>({
		});

	}


	/** Szolgáltatók referenciáinak listája. */
	export interface TransitAgency {

		/** A szolgáltató azonosítója. */
		id?: string | null;

		/** A szolgáltató nyelve. */
		lang?: string | null;

		/** A szolgáltató neve. */
		name?: string | null;

		/** A szolgáltató telefonszáma. */
		phone?: string | null;

		/** A szolgáltató időzónája. */
		timezone?: string | null;

		/** A szolgáltató linkje. */
		url?: string | null;
	}

	/** Szolgáltatók referenciáinak listája. */
	export interface TransitAgencyFormProperties {

		/** A szolgáltató azonosítója. */
		id: FormControl<string | null | undefined>,

		/** A szolgáltató nyelve. */
		lang: FormControl<string | null | undefined>,

		/** A szolgáltató neve. */
		name: FormControl<string | null | undefined>,

		/** A szolgáltató telefonszáma. */
		phone: FormControl<string | null | undefined>,

		/** A szolgáltató időzónája. */
		timezone: FormControl<string | null | undefined>,

		/** A szolgáltató linkje. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTransitAgencyFormGroup() {
		return new FormGroup<TransitAgencyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Zavarok referenciáinak listája. */
	export interface TransitAlert {

		/** A zavar végének időpontjához tartozó szöveg. */
		description?: TranslatedString;

		/** A zavar hatására használhatatlan lesz-e az alkalmazás. */
		disableApp?: boolean | null;

		/** A zavar végének időpontja másodpercben. */
		end?: number | null;

		/** A zavar végének időpontjához tartozó szöveg. */
		endText?: TranslatedString;

		/** A zavar végének időpontjához tartozó szöveg. */
		header?: TranslatedString;

		/** A zavar azonosítója. */
		id?: string | null;

		/** A zavar utolsó módosításának időpontja másodpercben. */
		modifiedTime?: number | null;

		/** A zavar által érintett járatok azonosítóinak listája. */
		routeIds?: Array<string>;

		/** A zavar által érintett járatok listája. */
		routes?: Array<TransitAlertRoute>;

		/** A zavar kezdő időpontja másodpercben. */
		start?: number | null;

		/** A zavar végének időpontjához tartozó szöveg. */
		startText?: TranslatedString;

		/** A zavar által érintett megállók azonosítóinak listája. */
		stopIds?: Array<string>;

		/** A zavar időbélyege másodpercben. */
		timestamp?: number | null;

		/** A zavar végének időpontjához tartozó szöveg. */
		url?: TranslatedString;
	}

	/** Zavarok referenciáinak listája. */
	export interface TransitAlertFormProperties {

		/** A zavar hatására használhatatlan lesz-e az alkalmazás. */
		disableApp: FormControl<boolean | null | undefined>,

		/** A zavar végének időpontja másodpercben. */
		end: FormControl<number | null | undefined>,

		/** A zavar azonosítója. */
		id: FormControl<string | null | undefined>,

		/** A zavar utolsó módosításának időpontja másodpercben. */
		modifiedTime: FormControl<number | null | undefined>,

		/** A zavar kezdő időpontja másodpercben. */
		start: FormControl<number | null | undefined>,

		/** A zavar időbélyege másodpercben. */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateTransitAlertFormGroup() {
		return new FormGroup<TransitAlertFormProperties>({
			disableApp: new FormControl<boolean | null | undefined>(undefined),
			end: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modifiedTime: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A zavar végének időpontjához tartozó szöveg. */
	export interface TranslatedString {

		/** A fordítás-összerendelések első eleme. */
		someTranslation?: string | null;

		/** Lokalizáció és a hozzá tartozó fordítások összerendelése. */
		translations?: {[id: string]: string };
	}

	/** A zavar végének időpontjához tartozó szöveg. */
	export interface TranslatedStringFormProperties {

		/** A fordítás-összerendelések első eleme. */
		someTranslation: FormControl<string | null | undefined>,

		/** Lokalizáció és a hozzá tartozó fordítások összerendelése. */
		translations: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTranslatedStringFormGroup() {
		return new FormGroup<TranslatedStringFormProperties>({
			someTranslation: new FormControl<string | null | undefined>(undefined),
			translations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A zavar által érintett járatok listája. */
	export interface TransitAlertRoute {

		/** A zavar hatásának típusa. */
		effectType?: EffectType | null;

		/** A zavar végének időpontjához tartozó szöveg. */
		header?: TranslatedString;

		/** A zavar által érintett járat azonosítója. */
		routeId?: string | null;

		/** A zavar által érintett megállók azonosítóinak listája a járaton. */
		stopIds?: Array<string>;
	}

	/** A zavar által érintett járatok listája. */
	export interface TransitAlertRouteFormProperties {

		/** A zavar hatásának típusa. */
		effectType: FormControl<EffectType | null | undefined>,

		/** A zavar által érintett járat azonosítója. */
		routeId: FormControl<string | null | undefined>,
	}
	export function CreateTransitAlertRouteFormGroup() {
		return new FormGroup<TransitAlertRouteFormProperties>({
			effectType: new FormControl<EffectType | null | undefined>(undefined),
			routeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Járatok referenciáinak listája. */
	export interface TransitRoute {

		/** A járatot üzemeltető szolgáltató azonosítója. */
		agencyId?: string | null;

		/** Kerékpár szállítása engedélyezett-e a járaton. */
		bikesAllowed?: boolean | null;

		/** A járat színe. Deprecated: használjuk a `style` attribútumot helyette. */
		color?: string | null;

		/** A járat neve. Ha egy | szerepel a névben, akkor a végállomásokat választja el amelyek külön sorokban megjeleníthetőek. COMPACT referenciák kérése esetében nincs kitöltve. */
		description?: string | null;

		/** A járat ikonjának megjelenítési szövege. Deprecated: használjuk a `style` attribútumot helyette. */
		iconDisplayText?: string | null;

		/** A járat ikonjának megjelenítési típusa. Deprecated: használjuk a `style` attribútumot helyette. */
		iconDisplayType?: string | null;

		/** A járat azonosítója. */
		id?: string | null;

		/** A járat hosszú neve. */
		longName?: string | null;

		/** A járat rövid neve. */
		shortName?: string | null;

		/** A járat rendezési sorszáma a többi járathoz viszonyítva. */
		sortOrder?: number | null;

		/** A járat megjelenítési stílusa. */
		style?: TransitRouteStyle;

		/** A járat szövegének színe. Deprecated: használjuk a `style` attribútumot helyette. */
		textColor?: string | null;

		/** A járat típusa. */
		type?: TransitRouteType | null;

		/** A járat linkje. */
		url?: string | null;
	}

	/** Járatok referenciáinak listája. */
	export interface TransitRouteFormProperties {

		/** A járatot üzemeltető szolgáltató azonosítója. */
		agencyId: FormControl<string | null | undefined>,

		/** Kerékpár szállítása engedélyezett-e a járaton. */
		bikesAllowed: FormControl<boolean | null | undefined>,

		/** A járat színe. Deprecated: használjuk a `style` attribútumot helyette. */
		color: FormControl<string | null | undefined>,

		/** A járat neve. Ha egy | szerepel a névben, akkor a végállomásokat választja el amelyek külön sorokban megjeleníthetőek. COMPACT referenciák kérése esetében nincs kitöltve. */
		description: FormControl<string | null | undefined>,

		/** A járat ikonjának megjelenítési szövege. Deprecated: használjuk a `style` attribútumot helyette. */
		iconDisplayText: FormControl<string | null | undefined>,

		/** A járat ikonjának megjelenítési típusa. Deprecated: használjuk a `style` attribútumot helyette. */
		iconDisplayType: FormControl<string | null | undefined>,

		/** A járat azonosítója. */
		id: FormControl<string | null | undefined>,

		/** A járat hosszú neve. */
		longName: FormControl<string | null | undefined>,

		/** A járat rövid neve. */
		shortName: FormControl<string | null | undefined>,

		/** A járat rendezési sorszáma a többi járathoz viszonyítva. */
		sortOrder: FormControl<number | null | undefined>,

		/** A járat szövegének színe. Deprecated: használjuk a `style` attribútumot helyette. */
		textColor: FormControl<string | null | undefined>,

		/** A járat típusa. */
		type: FormControl<TransitRouteType | null | undefined>,

		/** A járat linkje. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTransitRouteFormGroup() {
		return new FormGroup<TransitRouteFormProperties>({
			agencyId: new FormControl<string | null | undefined>(undefined),
			bikesAllowed: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			iconDisplayText: new FormControl<string | null | undefined>(undefined),
			iconDisplayType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			longName: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			textColor: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TransitRouteType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A járat megjelenítési stílusa. */
	export interface TransitRouteStyle {

		/** A járat színe. */
		color?: string | null;

		/** A járathoz tartozó ikon stílusa. */
		icon?: TransitRouteStyleIcon;

		/** A megálló stílusa. */
		stop?: TransitStopStyle;

		/** A járathoz tartozó jármű ikon stílus. */
		vehicleIcon?: TransitVehicleStyleIcon;
	}

	/** A járat megjelenítési stílusa. */
	export interface TransitRouteStyleFormProperties {

		/** A járat színe. */
		color: FormControl<string | null | undefined>,
	}
	export function CreateTransitRouteStyleFormGroup() {
		return new FormGroup<TransitRouteStyleFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A járathoz tartozó ikon stílusa. */
	export interface TransitRouteStyleIcon {

		/** Az ikon felirata. */
		text?: string | null;

		/** Az ikon feliratának színe. */
		textColor?: string | null;

		/** Az ikon típusa. */
		type?: TransitRouteStyleIconType | null;
	}

	/** A járathoz tartozó ikon stílusa. */
	export interface TransitRouteStyleIconFormProperties {

		/** Az ikon felirata. */
		text: FormControl<string | null | undefined>,

		/** Az ikon feliratának színe. */
		textColor: FormControl<string | null | undefined>,

		/** Az ikon típusa. */
		type: FormControl<TransitRouteStyleIconType | null | undefined>,
	}
	export function CreateTransitRouteStyleIconFormGroup() {
		return new FormGroup<TransitRouteStyleIconFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			textColor: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TransitRouteStyleIconType | null | undefined>(undefined),
		});

	}

	export enum TransitRouteStyleIconType { BOX = 'BOX', CIRCLE = 'CIRCLE' }


	/** A megálló stílusa. */
	export interface TransitStopStyle {

		/** A megálló stílushoz tartozó színek tömbje. */
		colors?: Array<string>;

		/** A megálló stílus képe. */
		image?: string | null;

		/** A megálló stílus típusa. */
		type?: TransitStopStyleType | null;
	}

	/** A megálló stílusa. */
	export interface TransitStopStyleFormProperties {

		/** A megálló stílus képe. */
		image: FormControl<string | null | undefined>,

		/** A megálló stílus típusa. */
		type: FormControl<TransitStopStyleType | null | undefined>,
	}
	export function CreateTransitStopStyleFormGroup() {
		return new FormGroup<TransitStopStyleFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TransitStopStyleType | null | undefined>(undefined),
		});

	}

	export enum TransitStopStyleType { PRIORITY = 'PRIORITY' }


	/** A járathoz tartozó jármű ikon stílus. */
	export interface TransitVehicleStyleIcon {

		/** Az ikon neve. */
		name?: string | null;
	}

	/** A járathoz tartozó jármű ikon stílus. */
	export interface TransitVehicleStyleIconFormProperties {

		/** Az ikon neve. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTransitVehicleStyleIconFormGroup() {
		return new FormGroup<TransitVehicleStyleIconFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransitRouteType { WALK = 'WALK', BICYCLE = 'BICYCLE', CAR = 'CAR', TRAM = 'TRAM', SUBWAY = 'SUBWAY', SUBURBAN_RAILWAY = 'SUBURBAN_RAILWAY', RAIL = 'RAIL', COACH = 'COACH', BUS = 'BUS', TROLLEYBUS = 'TROLLEYBUS', FERRY = 'FERRY', CABLE_CAR = 'CABLE_CAR', GONDOLA = 'GONDOLA', FUNICULAR = 'FUNICULAR', TRANSIT = 'TRANSIT', TRAINISH = 'TRAINISH', BUSISH = 'BUSISH', LEG_SWITCH = 'LEG_SWITCH', CUSTOM_MOTOR_VEHICLE = 'CUSTOM_MOTOR_VEHICLE' }


	/** Megállók referenciáinak listája. */
	export interface TransitStop {

		/** A megállóra vonatkozó aktív zavarok azonosítói. */
		alertIds?: Array<string>;

		/** A megálló kódja. */
		code?: string | null;

		/** A megálló leírása. */
		description?: string | null;

		/** A megálló iránya. */
		direction?: string | null;

		/** A megálló azonosítója. */
		id?: string | null;

		/** A megálló szélességi koordinátája. */
		lat?: number | null;

		/** A megálló hely-altípusa. */
		locationSubType?: string | null;

		/** A megálló hely-típusa. */
		locationType?: number | null;

		/** A megálló hosszúsági koordinátája. */
		lon?: number | null;

		/** A megálló neve. */
		name?: string | null;

		/** A szülő-megálló azonosítója. */
		parentStationId?: string | null;

		/** A megálló peron-kódja. */
		platformCode?: string | null;

		/** A megállót érintő járatok azonosítói. */
		routeIds?: Array<string>;

		/** A megálló színezésének típusa. Deprecated: használjuk a `style` attribútumot. */
		stopColorType?: string | null;

		/** A megálló stílusa. */
		style?: TransitStopStyle;

		/** A megálló típusa. Deprecated: használjuk a `style` attribútumot. */
		type?: TransitRouteType | null;

		/** A megálló utazástervező azonosítója, amelyet a `fromPlace` és a `toPlace` megadásához lehet használni. */
		vertex?: string | null;

		/** Akadálymentesített-e a megálló. */
		wheelchairBoarding?: boolean | null;
	}

	/** Megállók referenciáinak listája. */
	export interface TransitStopFormProperties {

		/** A megálló kódja. */
		code: FormControl<string | null | undefined>,

		/** A megálló leírása. */
		description: FormControl<string | null | undefined>,

		/** A megálló iránya. */
		direction: FormControl<string | null | undefined>,

		/** A megálló azonosítója. */
		id: FormControl<string | null | undefined>,

		/** A megálló szélességi koordinátája. */
		lat: FormControl<number | null | undefined>,

		/** A megálló hely-altípusa. */
		locationSubType: FormControl<string | null | undefined>,

		/** A megálló hely-típusa. */
		locationType: FormControl<number | null | undefined>,

		/** A megálló hosszúsági koordinátája. */
		lon: FormControl<number | null | undefined>,

		/** A megálló neve. */
		name: FormControl<string | null | undefined>,

		/** A szülő-megálló azonosítója. */
		parentStationId: FormControl<string | null | undefined>,

		/** A megálló peron-kódja. */
		platformCode: FormControl<string | null | undefined>,

		/** A megálló színezésének típusa. Deprecated: használjuk a `style` attribútumot. */
		stopColorType: FormControl<string | null | undefined>,

		/** A megálló típusa. Deprecated: használjuk a `style` attribútumot. */
		type: FormControl<TransitRouteType | null | undefined>,

		/** A megálló utazástervező azonosítója, amelyet a `fromPlace` és a `toPlace` megadásához lehet használni. */
		vertex: FormControl<string | null | undefined>,

		/** Akadálymentesített-e a megálló. */
		wheelchairBoarding: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitStopFormGroup() {
		return new FormGroup<TransitStopFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			locationSubType: new FormControl<string | null | undefined>(undefined),
			locationType: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentStationId: new FormControl<string | null | undefined>(undefined),
			platformCode: new FormControl<string | null | undefined>(undefined),
			stopColorType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TransitRouteType | null | undefined>(undefined),
			vertex: new FormControl<string | null | undefined>(undefined),
			wheelchairBoarding: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Menetek referenciáinak listája. */
	export interface TransitTrip {

		/** Szállítható-e kerékpár a meneten. */
		bikesAllowed?: boolean | null;

		/** A menethez tartozó GTFS block_id, amennyiben létezik. */
		blockId?: string | null;

		/** A menet irányának azonosítója. */
		directionId?: string | null;

		/** A menet azonosítója. */
		id?: string | null;

		/** A menethez tartozó járat azonosítója. */
		routeId?: string | null;

		/** A menet közlekedési naptárának azonosítója. */
		serviceId?: string | null;

		/** A menet útvonalvezetésének azonosítója. */
		shapeId?: string | null;

		/** A menet célállomása. */
		tripHeadsign?: string | null;

		/** A menet rövid neve. */
		tripShortName?: string | null;

		/** Alacsonypadlós-e a menet. */
		wheelchairAccessible?: boolean | null;
	}

	/** Menetek referenciáinak listája. */
	export interface TransitTripFormProperties {

		/** Szállítható-e kerékpár a meneten. */
		bikesAllowed: FormControl<boolean | null | undefined>,

		/** A menethez tartozó GTFS block_id, amennyiben létezik. */
		blockId: FormControl<string | null | undefined>,

		/** A menet irányának azonosítója. */
		directionId: FormControl<string | null | undefined>,

		/** A menet azonosítója. */
		id: FormControl<string | null | undefined>,

		/** A menethez tartozó járat azonosítója. */
		routeId: FormControl<string | null | undefined>,

		/** A menet közlekedési naptárának azonosítója. */
		serviceId: FormControl<string | null | undefined>,

		/** A menet útvonalvezetésének azonosítója. */
		shapeId: FormControl<string | null | undefined>,

		/** A menet célállomása. */
		tripHeadsign: FormControl<string | null | undefined>,

		/** A menet rövid neve. */
		tripShortName: FormControl<string | null | undefined>,

		/** Alacsonypadlós-e a menet. */
		wheelchairAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitTripFormGroup() {
		return new FormGroup<TransitTripFormProperties>({
			bikesAllowed: new FormControl<boolean | null | undefined>(undefined),
			blockId: new FormControl<string | null | undefined>(undefined),
			directionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			routeId: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			shapeId: new FormControl<string | null | undefined>(undefined),
			tripHeadsign: new FormControl<string | null | undefined>(undefined),
			tripShortName: new FormControl<string | null | undefined>(undefined),
			wheelchairAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MultiRouteDetailsMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitRouteDetails;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface MultiRouteDetailsMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateMultiRouteDetailsMethodResponseFormGroup() {
		return new FormGroup<MultiRouteDetailsMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitRouteDetails {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class?: string | null;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A lekért adatok listája. */
		list?: Array<TransitRouteDetails>;

		/** Az értéke mindig `false`. */
		outOfRange?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitRouteDetailsFormProperties {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,

		/** Az értéke mindig `false`. */
		outOfRange: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitListEntryWithReferencesTransitRouteDetailsFormGroup() {
		return new FormGroup<TransitListEntryWithReferencesTransitRouteDetailsFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
			outOfRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adat. */
	export interface TransitRouteDetails {

		/** A járatot üzemeltető szolgáltató azonosítója. */
		agencyId?: string | null;

		/** A járaton található aktív zavarok azonosítóinak listája. */
		alertIds?: Array<string>;

		/** Kerékpár szállítása engedélyezett-e a járaton. */
		bikesAllowed?: boolean | null;

		/** A járat színe. Deprecated: használjuk a `style` attribútumot helyette. */
		color?: string | null;

		/** A járat neve. Ha egy | szerepel a névben, akkor a végállomásokat választja el amelyek külön sorokban megjeleníthetőek. COMPACT referenciák kérése esetében nincs kitöltve. */
		description?: string | null;

		/** A járat ikonjának megjelenítési szövege. Deprecated: használjuk a `style` attribútumot helyette. */
		iconDisplayText?: string | null;

		/** A járat ikonjának megjelenítési típusa. Deprecated: használjuk a `style` attribútumot helyette. */
		iconDisplayType?: string | null;

		/** A járat azonosítója. */
		id?: string | null;

		/** A járat hosszú neve. */
		longName?: string | null;

		/** A járat rövid neve. */
		shortName?: string | null;

		/** A járat rendezési sorszáma a többi járathoz viszonyítva. */
		sortOrder?: number | null;

		/** A járat megjelenítési stílusa. */
		style?: TransitRouteStyle;

		/** A járat szövegének színe. Deprecated: használjuk a `style` attribútumot helyette. */
		textColor?: string | null;

		/** A járat típusa. */
		type?: TransitRouteType | null;

		/** A járat linkje. */
		url?: string | null;

		/** A járathoz tartozó járat variánsok listája. */
		variants?: Array<TransitRouteVariant>;
	}

	/** A lekért adat. */
	export interface TransitRouteDetailsFormProperties {

		/** A járatot üzemeltető szolgáltató azonosítója. */
		agencyId: FormControl<string | null | undefined>,

		/** Kerékpár szállítása engedélyezett-e a járaton. */
		bikesAllowed: FormControl<boolean | null | undefined>,

		/** A járat színe. Deprecated: használjuk a `style` attribútumot helyette. */
		color: FormControl<string | null | undefined>,

		/** A járat neve. Ha egy | szerepel a névben, akkor a végállomásokat választja el amelyek külön sorokban megjeleníthetőek. COMPACT referenciák kérése esetében nincs kitöltve. */
		description: FormControl<string | null | undefined>,

		/** A járat ikonjának megjelenítési szövege. Deprecated: használjuk a `style` attribútumot helyette. */
		iconDisplayText: FormControl<string | null | undefined>,

		/** A járat ikonjának megjelenítési típusa. Deprecated: használjuk a `style` attribútumot helyette. */
		iconDisplayType: FormControl<string | null | undefined>,

		/** A járat azonosítója. */
		id: FormControl<string | null | undefined>,

		/** A járat hosszú neve. */
		longName: FormControl<string | null | undefined>,

		/** A járat rövid neve. */
		shortName: FormControl<string | null | undefined>,

		/** A járat rendezési sorszáma a többi járathoz viszonyítva. */
		sortOrder: FormControl<number | null | undefined>,

		/** A járat szövegének színe. Deprecated: használjuk a `style` attribútumot helyette. */
		textColor: FormControl<string | null | undefined>,

		/** A járat típusa. */
		type: FormControl<TransitRouteType | null | undefined>,

		/** A járat linkje. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTransitRouteDetailsFormGroup() {
		return new FormGroup<TransitRouteDetailsFormProperties>({
			agencyId: new FormControl<string | null | undefined>(undefined),
			bikesAllowed: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			iconDisplayText: new FormControl<string | null | undefined>(undefined),
			iconDisplayType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			longName: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			textColor: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TransitRouteType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A járathoz tartozó járat variánsok listája. */
	export interface TransitRouteVariant {

		/** A járat variáns megálló azonosítói, amelyekre lehetséges lehet a foglalás. */
		bookableStopIds?: Array<string>;

		/** A járat variáns iránya. */
		direction?: string | null;

		/** A járat variáns célállomása. */
		headsign?: string | null;

		/** Igaz, ha a járaton vannak olyan menetek, amelyeken szükséges lehet az előre foglalás. */
		mayRequireBooking?: boolean | null;

		/** A járat variáns neve. */
		name?: string | null;

		/** A menethez tartozó kódolt minta (polyline). */
		polyline?: TransitPolyline;

		/** A járat variánshoz tartozó járat azonosítója. Akkor van kitöltve, ha különbözik az eredetitől. */
		routeId?: string | null;

		/** A járat variáns megállóinak azonosítói. */
		stopIds?: Array<string>;

		/** A járat variáns típusa. */
		type?: string | null;
	}

	/** A járathoz tartozó járat variánsok listája. */
	export interface TransitRouteVariantFormProperties {

		/** A járat variáns iránya. */
		direction: FormControl<string | null | undefined>,

		/** A járat variáns célállomása. */
		headsign: FormControl<string | null | undefined>,

		/** Igaz, ha a járaton vannak olyan menetek, amelyeken szükséges lehet az előre foglalás. */
		mayRequireBooking: FormControl<boolean | null | undefined>,

		/** A járat variáns neve. */
		name: FormControl<string | null | undefined>,

		/** A járat variánshoz tartozó járat azonosítója. Akkor van kitöltve, ha különbözik az eredetitől. */
		routeId: FormControl<string | null | undefined>,

		/** A járat variáns típusa. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransitRouteVariantFormGroup() {
		return new FormGroup<TransitRouteVariantFormProperties>({
			direction: new FormControl<string | null | undefined>(undefined),
			headsign: new FormControl<string | null | undefined>(undefined),
			mayRequireBooking: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			routeId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A menethez tartozó kódolt minta (polyline). */
	export interface TransitPolyline {

		/** A minta pontjainak száma. */
		length?: number | null;

		/** A minta magassági adatai (mindig üres). */
		levels?: string | null;

		/** A minta kódolt pontjai. */
		points?: string | null;
	}

	/** A menethez tartozó kódolt minta (polyline). */
	export interface TransitPolylineFormProperties {

		/** A minta pontjainak száma. */
		length: FormControl<number | null | undefined>,

		/** A minta magassági adatai (mindig üres). */
		levels: FormControl<string | null | undefined>,

		/** A minta kódolt pontjai. */
		points: FormControl<string | null | undefined>,
	}
	export function CreateTransitPolylineFormGroup() {
		return new FormGroup<TransitPolylineFormProperties>({
			length: new FormControl<number | null | undefined>(undefined),
			levels: new FormControl<string | null | undefined>(undefined),
			points: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OTPTransitReferences {

		/** Szolgáltatók referenciáinak listája. */
		agencies?: {[id: string]: TransitAgency };

		/** Zavarok referenciáinak listája. */
		alerts?: {[id: string]: TransitAlert };

		/** Járatok referenciáinak listája. */
		routes?: {[id: string]: TransitRoute };

		/** Megállók referenciáinak listája. */
		stops?: {[id: string]: TransitStop };

		/** Menetek referenciáinak listája. */
		trips?: {[id: string]: TransitTrip };
	}
	export interface OTPTransitReferencesFormProperties {

		/** Szolgáltatók referenciáinak listája. */
		agencies: FormControl<{[id: string]: TransitAgency } | null | undefined>,

		/** Zavarok referenciáinak listája. */
		alerts: FormControl<{[id: string]: TransitAlert } | null | undefined>,

		/** Járatok referenciáinak listája. */
		routes: FormControl<{[id: string]: TransitRoute } | null | undefined>,

		/** Megállók referenciáinak listája. */
		stops: FormControl<{[id: string]: TransitStop } | null | undefined>,

		/** Menetek referenciáinak listája. */
		trips: FormControl<{[id: string]: TransitTrip } | null | undefined>,
	}
	export function CreateOTPTransitReferencesFormGroup() {
		return new FormGroup<OTPTransitReferencesFormProperties>({
			agencies: new FormControl<{[id: string]: TransitAgency } | null | undefined>(undefined),
			alerts: new FormControl<{[id: string]: TransitAlert } | null | undefined>(undefined),
			routes: new FormControl<{[id: string]: TransitRoute } | null | undefined>(undefined),
			stops: new FormControl<{[id: string]: TransitStop } | null | undefined>(undefined),
			trips: new FormControl<{[id: string]: TransitTrip } | null | undefined>(undefined),
		});

	}

	export interface OnboardDepartPosition {

		/** A pontossága egy pozició pontnak méterben. */
		accuracy?: number | null;

		/**
		 * A szélességi koordinátája egy pozició pontnak.
		 * Required
		 */
		lat: number;

		/**
		 * A hosszúsági koordinátája egy pozició pontnak.
		 * Required
		 */
		lon: number;

		/** A sebesség egy pozició pontban m/s-ban. */
		speed?: number | null;

		/**
		 * Az időpontja egy pozició pontnak epoch másodpercben.
		 * Required
		 */
		timestamp: number;
	}
	export interface OnboardDepartPositionFormProperties {

		/** A pontossága egy pozició pontnak méterben. */
		accuracy: FormControl<number | null | undefined>,

		/**
		 * A szélességi koordinátája egy pozició pontnak.
		 * Required
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * A hosszúsági koordinátája egy pozició pontnak.
		 * Required
		 */
		lon: FormControl<number | null | undefined>,

		/** A sebesség egy pozició pontban m/s-ban. */
		speed: FormControl<number | null | undefined>,

		/**
		 * Az időpontja egy pozició pontnak epoch másodpercben.
		 * Required
		 */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateOnboardDepartPositionFormGroup() {
		return new FormGroup<OnboardDepartPositionFormProperties>({
			accuracy: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lon: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			speed: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OnboardDepartSearchMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitVehicle;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface OnboardDepartSearchMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateOnboardDepartSearchMethodResponseFormGroup() {
		return new FormGroup<OnboardDepartSearchMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitVehicle {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class?: string | null;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A lekért adatok listája. */
		list?: Array<TransitVehicle>;

		/** Az értéke mindig `false`. */
		outOfRange?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitVehicleFormProperties {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,

		/** Az értéke mindig `false`. */
		outOfRange: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitListEntryWithReferencesTransitVehicleFormGroup() {
		return new FormGroup<TransitListEntryWithReferencesTransitVehicleFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
			outOfRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adatok listája. */
	export interface TransitVehicle {

		/** A jármű irányszöge. */
		bearing?: number | null;

		/** A jármű kapacitása. */
		capacity?: TransitVehicleOccupancy;

		/** A járműhöz tartozó torlódási állapot. */
		congestionLevel?: TransitVehicleCongestionLevel | null;

		/** Igaz, ha a jármű letért az útvonaláról. */
		deviated?: boolean | null;

		/** A jármű kijelzőjén megjelenő célállomáskép. */
		label?: string | null;

		/** A járműhöz tartozó utolsó valós idejű adat időbélyege másodpercben. */
		lastUpdateTime?: number | null;

		/** A jármű rendszáma. */
		licensePlate?: string | null;

		/** A jármű pozíciója. */
		location?: TransitCoordinatePoint;

		/** A jármű típusa. */
		model?: string | null;

		/** A jármű kapacitása. */
		occupancy?: TransitVehicleOccupancy;

		/** A menethez tartozó járat azonosítója, amit a jármű teljesít. */
		routeId?: string | null;

		/** A jármű által teljesített menet menetrendi napja. */
		serviceDate?: string | null;

		/** Igaz, ha a jármű pozíciója kiöregedett. */
		stale?: boolean | null;

		/** A jármű állapota. */
		status?: TransitVehicleStatus | null;

		/** Hol tart a jármű a két megálló közti szakaszon, százalékban. */
		stopDistancePercent?: number | null;

		/** A járműhöz tartozó megálló azonosítója. */
		stopId?: string | null;

		/** A jármű által érintett aktuális megálló sorszáma a meneten. */
		stopSequence?: number | null;

		/** A járműhöz tartozó stílus. */
		style?: TransitVehicleStyle;

		/** A járműhöz tartozó menet azonosítója. */
		tripId?: string | null;

		/** A jármű azonosítója. */
		vehicleId?: string | null;

		/** A jármű fajtája. Deprecated: használjuk a `style` attribútumot. */
		vehicleRouteType?: TransitRouteType | null;

		/** A menet utazástervező azonosítója, amelyet a `fromPlace` megadásához lehet használni. */
		vertex?: string | null;

		/** Igaz, ha a jármű alacsonypadlós. */
		wheelchairAccessible?: boolean | null;
	}

	/** A lekért adatok listája. */
	export interface TransitVehicleFormProperties {

		/** A jármű irányszöge. */
		bearing: FormControl<number | null | undefined>,

		/** A járműhöz tartozó torlódási állapot. */
		congestionLevel: FormControl<TransitVehicleCongestionLevel | null | undefined>,

		/** Igaz, ha a jármű letért az útvonaláról. */
		deviated: FormControl<boolean | null | undefined>,

		/** A jármű kijelzőjén megjelenő célállomáskép. */
		label: FormControl<string | null | undefined>,

		/** A járműhöz tartozó utolsó valós idejű adat időbélyege másodpercben. */
		lastUpdateTime: FormControl<number | null | undefined>,

		/** A jármű rendszáma. */
		licensePlate: FormControl<string | null | undefined>,

		/** A jármű típusa. */
		model: FormControl<string | null | undefined>,

		/** A menethez tartozó járat azonosítója, amit a jármű teljesít. */
		routeId: FormControl<string | null | undefined>,

		/** A jármű által teljesített menet menetrendi napja. */
		serviceDate: FormControl<string | null | undefined>,

		/** Igaz, ha a jármű pozíciója kiöregedett. */
		stale: FormControl<boolean | null | undefined>,

		/** A jármű állapota. */
		status: FormControl<TransitVehicleStatus | null | undefined>,

		/** Hol tart a jármű a két megálló közti szakaszon, százalékban. */
		stopDistancePercent: FormControl<number | null | undefined>,

		/** A járműhöz tartozó megálló azonosítója. */
		stopId: FormControl<string | null | undefined>,

		/** A jármű által érintett aktuális megálló sorszáma a meneten. */
		stopSequence: FormControl<number | null | undefined>,

		/** A járműhöz tartozó menet azonosítója. */
		tripId: FormControl<string | null | undefined>,

		/** A jármű azonosítója. */
		vehicleId: FormControl<string | null | undefined>,

		/** A jármű fajtája. Deprecated: használjuk a `style` attribútumot. */
		vehicleRouteType: FormControl<TransitRouteType | null | undefined>,

		/** A menet utazástervező azonosítója, amelyet a `fromPlace` megadásához lehet használni. */
		vertex: FormControl<string | null | undefined>,

		/** Igaz, ha a jármű alacsonypadlós. */
		wheelchairAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitVehicleFormGroup() {
		return new FormGroup<TransitVehicleFormProperties>({
			bearing: new FormControl<number | null | undefined>(undefined),
			congestionLevel: new FormControl<TransitVehicleCongestionLevel | null | undefined>(undefined),
			deviated: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<number | null | undefined>(undefined),
			licensePlate: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			routeId: new FormControl<string | null | undefined>(undefined),
			serviceDate: new FormControl<string | null | undefined>(undefined),
			stale: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<TransitVehicleStatus | null | undefined>(undefined),
			stopDistancePercent: new FormControl<number | null | undefined>(undefined),
			stopId: new FormControl<string | null | undefined>(undefined),
			stopSequence: new FormControl<number | null | undefined>(undefined),
			tripId: new FormControl<string | null | undefined>(undefined),
			vehicleId: new FormControl<string | null | undefined>(undefined),
			vehicleRouteType: new FormControl<TransitRouteType | null | undefined>(undefined),
			vertex: new FormControl<string | null | undefined>(undefined),
			wheelchairAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A jármű kapacitása. */
	export interface TransitVehicleOccupancy {

		/** Hány felnőtt van a járművön. */
		adults?: number | null;

		/** Hány gyermek van a járművön. */
		children?: number | null;

		/** Hány be nem kategorizált entitás van a járművön. */
		other?: number | null;

		/** Hány babakocsi van a járművön */
		strollers?: number | null;

		/** Hány kerekesszék van a járművön. */
		wheelchairs?: number | null;
	}

	/** A jármű kapacitása. */
	export interface TransitVehicleOccupancyFormProperties {

		/** Hány felnőtt van a járművön. */
		adults: FormControl<number | null | undefined>,

		/** Hány gyermek van a járművön. */
		children: FormControl<number | null | undefined>,

		/** Hány be nem kategorizált entitás van a járművön. */
		other: FormControl<number | null | undefined>,

		/** Hány babakocsi van a járművön */
		strollers: FormControl<number | null | undefined>,

		/** Hány kerekesszék van a járművön. */
		wheelchairs: FormControl<number | null | undefined>,
	}
	export function CreateTransitVehicleOccupancyFormGroup() {
		return new FormGroup<TransitVehicleOccupancyFormProperties>({
			adults: new FormControl<number | null | undefined>(undefined),
			children: new FormControl<number | null | undefined>(undefined),
			other: new FormControl<number | null | undefined>(undefined),
			strollers: new FormControl<number | null | undefined>(undefined),
			wheelchairs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TransitVehicleCongestionLevel { UNKNOWN = 'UNKNOWN', CONGESTION = 'CONGESTION' }


	/** A jármű pozíciója. */
	export interface TransitCoordinatePoint {

		/** Szélességi koordináta. */
		lat?: number | null;

		/** Hosszúsági koordináta. */
		lon?: number | null;
	}

	/** A jármű pozíciója. */
	export interface TransitCoordinatePointFormProperties {

		/** Szélességi koordináta. */
		lat: FormControl<number | null | undefined>,

		/** Hosszúsági koordináta. */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateTransitCoordinatePointFormGroup() {
		return new FormGroup<TransitCoordinatePointFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TransitVehicleStatus { INCOMING_AT = 'INCOMING_AT', STOPPED_AT = 'STOPPED_AT', IN_TRANSIT_TO = 'IN_TRANSIT_TO' }


	/** A járműhöz tartozó stílus. */
	export interface TransitVehicleStyle {

		/** A járathoz tartozó jármű ikon stílus. */
		icon?: TransitVehicleStyleIcon;
	}

	/** A járműhöz tartozó stílus. */
	export interface TransitVehicleStyleFormProperties {
	}
	export function CreateTransitVehicleStyleFormGroup() {
		return new FormGroup<TransitVehicleStyleFormProperties>({
		});

	}

	export interface PlanTripResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitEntryWithReferencesResponse;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface PlanTripResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePlanTripResponseFormGroup() {
		return new FormGroup<PlanTripResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitEntryWithReferencesResponse {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class?: string | null;

		/** A lekért adat. */
		entry?: Response;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitEntryWithReferencesResponseFormProperties {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitEntryWithReferencesResponseFormGroup() {
		return new FormGroup<TransitEntryWithReferencesResponseFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adat. */
	export interface Response {

		/** A hibát tartalmazza, ha nem sikerült a tervezés. */
		error?: PlannerError;

		/** A tervezés metaadatai. Tartalmazza a következő és az előző tervezési időablakot a lapozás megvalósításához ezred másodpercben. */
		metadata?: ApiTripSearchMetadata;

		/** A tervezett útvonalak. */
		plan?: TripPlan;

		/** A tervezési paraméterek. */
		requestParameters?: {[id: string]: string };
	}

	/** A lekért adat. */
	export interface ResponseFormProperties {

		/** A tervezési paraméterek. */
		requestParameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			requestParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A hibát tartalmazza, ha nem sikerült a tervezés. */
	export interface PlannerError {

		/** A hibaüzenet azonosítója. */
		id?: number | null;

		/** A hibaüzenet kódja. */
		message?: PlannerErrorMessage | null;

		/** A rossz paraméterek listája. */
		missing?: Array<string>;
		msgFromMessage?: PlannerErrorMessage | null;

		/** Igaz, ha nem sikerült útvonalat találni. */
		noPath?: boolean | null;
	}

	/** A hibát tartalmazza, ha nem sikerült a tervezés. */
	export interface PlannerErrorFormProperties {

		/** A hibaüzenet azonosítója. */
		id: FormControl<number | null | undefined>,

		/** A hibaüzenet kódja. */
		message: FormControl<PlannerErrorMessage | null | undefined>,
		msgFromMessage: FormControl<PlannerErrorMessage | null | undefined>,

		/** Igaz, ha nem sikerült útvonalat találni. */
		noPath: FormControl<boolean | null | undefined>,
	}
	export function CreatePlannerErrorFormGroup() {
		return new FormGroup<PlannerErrorFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<PlannerErrorMessage | null | undefined>(undefined),
			msgFromMessage: new FormControl<PlannerErrorMessage | null | undefined>(undefined),
			noPath: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PlannerErrorMessage { PLAN_OK = 'PLAN_OK', SYSTEM_ERROR = 'SYSTEM_ERROR', GRAPH_UNAVAILABLE = 'GRAPH_UNAVAILABLE', PLANNER_SERVICE_UNAVAILABLE = 'PLANNER_SERVICE_UNAVAILABLE', OUTSIDE_BOUNDS = 'OUTSIDE_BOUNDS', PATH_NOT_FOUND = 'PATH_NOT_FOUND', NO_TRANSIT_TIMES = 'NO_TRANSIT_TIMES', REQUEST_TIMEOUT = 'REQUEST_TIMEOUT', BOGUS_PARAMETER = 'BOGUS_PARAMETER', GEOCODE_FROM_NOT_FOUND = 'GEOCODE_FROM_NOT_FOUND', GEOCODE_TO_NOT_FOUND = 'GEOCODE_TO_NOT_FOUND', GEOCODE_FROM_TO_NOT_FOUND = 'GEOCODE_FROM_TO_NOT_FOUND', TOO_CLOSE = 'TOO_CLOSE', LOCATION_NOT_ACCESSIBLE = 'LOCATION_NOT_ACCESSIBLE', MISSING_MODE = 'MISSING_MODE', GEOCODE_FROM_AMBIGUOUS = 'GEOCODE_FROM_AMBIGUOUS', GEOCODE_TO_AMBIGUOUS = 'GEOCODE_TO_AMBIGUOUS', GEOCODE_FROM_TO_AMBIGUOUS = 'GEOCODE_FROM_TO_AMBIGUOUS', UNDERSPECIFIED_TRIANGLE = 'UNDERSPECIFIED_TRIANGLE', TRIANGLE_NOT_AFFINE = 'TRIANGLE_NOT_AFFINE', TRIANGLE_OPTIMIZE_TYPE_NOT_SET = 'TRIANGLE_OPTIMIZE_TYPE_NOT_SET', TRIANGLE_VALUES_NOT_SET = 'TRIANGLE_VALUES_NOT_SET' }


	/** A tervezett útvonalak. */
	export interface TripPlan {

		/** Az útvonal kezdete ezredmásodpercben. */
		date?: Date | null;

		/** Tranzit láb esetén a köztes megállók a láb kezdete és végződése között. */
		from?: Place;

		/** A talált útvonalak listája. */
		itineraries?: Array<Itinerary>;

		/** Tranzit láb esetén a köztes megállók a láb kezdete és végződése között. */
		to?: Place;
	}

	/** A tervezett útvonalak. */
	export interface TripPlanFormProperties {

		/** Az útvonal kezdete ezredmásodpercben. */
		date: FormControl<Date | null | undefined>,
	}
	export function CreateTripPlanFormGroup() {
		return new FormGroup<TripPlanFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ReferencesMethodErrors {

		/** A szolgáltató ID-k, amelyek feloldása sikertelen volt. */
		agencyIds?: Array<string>;

		/** A zavar ID-k, amelyek feloldása sikertelen volt. */
		alertIds?: Array<string>;

		/** A járat ID-k, amelyek feloldása sikertelen volt. */
		routeIds?: Array<string>;

		/** A megálló ID-k, amelyek feloldása sikertelen volt. */
		stopIds?: Array<string>;
	}
	export interface ReferencesMethodErrorsFormProperties {
	}
	export function CreateReferencesMethodErrorsFormGroup() {
		return new FormGroup<ReferencesMethodErrorsFormProperties>({
		});

	}

	export interface ReferencesMethodResponse {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class?: string | null;

		/** A lekért adat. */
		entry?: ReferencesMethodResult;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}
	export interface ReferencesMethodResponseFormProperties {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateReferencesMethodResponseFormGroup() {
		return new FormGroup<ReferencesMethodResponseFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adat. */
	export interface ReferencesMethodResult {
		errors?: ReferencesMethodErrors;
	}

	/** A lekért adat. */
	export interface ReferencesMethodResultFormProperties {
	}
	export function CreateReferencesMethodResultFormGroup() {
		return new FormGroup<ReferencesMethodResultFormProperties>({
		});

	}

	export enum ReferencesSchema { true = 'true', false = 'false', compact = 'compact', agencies = 'agencies', routes = 'routes', trips = 'trips', stops = 'stops', alerts = 'alerts', stations = 'stations' }

	export interface RouteDetailsForStopMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitRoute;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface RouteDetailsForStopMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateRouteDetailsForStopMethodResponseFormGroup() {
		return new FormGroup<RouteDetailsForStopMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitRoute {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class?: string | null;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A lekért adatok listája. */
		list?: Array<TransitRoute>;

		/** Az értéke mindig `false`. */
		outOfRange?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitRouteFormProperties {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,

		/** Az értéke mindig `false`. */
		outOfRange: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitListEntryWithReferencesTransitRouteFormGroup() {
		return new FormGroup<TransitListEntryWithReferencesTransitRouteFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
			outOfRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RouteDetailsMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitEntryWithReferencesTransitRouteDetails;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface RouteDetailsMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateRouteDetailsMethodResponseFormGroup() {
		return new FormGroup<RouteDetailsMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitRouteDetails {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class?: string | null;

		/** A lekért adat. */
		entry?: TransitRouteDetails;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitRouteDetailsFormProperties {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitEntryWithReferencesTransitRouteDetailsFormGroup() {
		return new FormGroup<TransitEntryWithReferencesTransitRouteDetailsFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ScheduleForStopOTPMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitEntryWithReferencesTransitSchedule;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface ScheduleForStopOTPMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateScheduleForStopOTPMethodResponseFormGroup() {
		return new FormGroup<ScheduleForStopOTPMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitSchedule {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class?: string | null;

		/** A lekért adat. */
		entry?: TransitSchedule;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitScheduleFormProperties {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitEntryWithReferencesTransitScheduleFormGroup() {
		return new FormGroup<TransitEntryWithReferencesTransitScheduleFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adat. */
	export interface TransitSchedule {

		/** A megállóhoz tartozó aktív zavarok azonosítói. */
		alertIds?: Array<string>;

		/** A menetrendhez tartozó dátum. */
		date?: Date | null;

		/** A közeli megállók azonosítói. */
		nearbyStopIds?: Array<string>;

		/** A menetrendhez tartozó járatok azonosítói. */
		routeIds?: Array<string>;

		/** A megállóhoz tartozó menetrend. */
		schedules?: Array<TransitRouteSchedule>;

		/** A menetrendhez tartozó dátum. */
		serviceDate?: string | null;

		/** A menetrend megállójának azonosítója. */
		stopId?: string | null;
	}

	/** A lekért adat. */
	export interface TransitScheduleFormProperties {

		/** A menetrendhez tartozó dátum. */
		date: FormControl<Date | null | undefined>,

		/** A menetrendhez tartozó dátum. */
		serviceDate: FormControl<string | null | undefined>,

		/** A menetrend megállójának azonosítója. */
		stopId: FormControl<string | null | undefined>,
	}
	export function CreateTransitScheduleFormGroup() {
		return new FormGroup<TransitScheduleFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			serviceDate: new FormControl<string | null | undefined>(undefined),
			stopId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A megállóhoz tartozó menetrend. */
	export interface TransitRouteSchedule {

		/** A járathoz tartozó aktív zavarok. */
		alertIds?: Array<string>;

		/** A menetrendi adatok irány szerint csoportosítva. */
		directions?: Array<TransitRouteScheduleForDirection>;

		/** A menetrendhez tarozó járat azonosítója. */
		routeId?: string | null;
	}

	/** A megállóhoz tartozó menetrend. */
	export interface TransitRouteScheduleFormProperties {

		/** A menetrendhez tarozó járat azonosítója. */
		routeId: FormControl<string | null | undefined>,
	}
	export function CreateTransitRouteScheduleFormGroup() {
		return new FormGroup<TransitRouteScheduleFormProperties>({
			routeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A menetrendi adatok irány szerint csoportosítva. */
	export interface TransitRouteScheduleForDirection {

		/** Az irány azonosítója. */
		directionId?: string | null;

		/** Célmegálló és a hozzá tartozó menetrendi adatok összerendelése. */
		groups?: {[id: string]: TransitScheduleGroup };

		/** Az irányhoz tartozó menetrendi bejegyzések. */
		stopTimes?: Array<TransitScheduleStopTime>;
	}

	/** A menetrendi adatok irány szerint csoportosítva. */
	export interface TransitRouteScheduleForDirectionFormProperties {

		/** Az irány azonosítója. */
		directionId: FormControl<string | null | undefined>,

		/** Célmegálló és a hozzá tartozó menetrendi adatok összerendelése. */
		groups: FormControl<{[id: string]: TransitScheduleGroup } | null | undefined>,
	}
	export function CreateTransitRouteScheduleForDirectionFormGroup() {
		return new FormGroup<TransitRouteScheduleForDirectionFormProperties>({
			directionId: new FormControl<string | null | undefined>(undefined),
			groups: new FormControl<{[id: string]: TransitScheduleGroup } | null | undefined>(undefined),
		});

	}


	/** Célmegálló és a hozzá tartozó menetrendi adatok összerendelése. */
	export interface TransitScheduleGroup {

		/** A menetrendi csoport leírása. */
		description?: string | null;

		/** A menetrendi csoport azonosítója. */
		groupId?: string | null;

		/** A menetrendi csoport célállomása. */
		headsign?: string | null;
	}

	/** Célmegálló és a hozzá tartozó menetrendi adatok összerendelése. */
	export interface TransitScheduleGroupFormProperties {

		/** A menetrendi csoport leírása. */
		description: FormControl<string | null | undefined>,

		/** A menetrendi csoport azonosítója. */
		groupId: FormControl<string | null | undefined>,

		/** A menetrendi csoport célállomása. */
		headsign: FormControl<string | null | undefined>,
	}
	export function CreateTransitScheduleGroupFormGroup() {
		return new FormGroup<TransitScheduleGroupFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			headsign: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitEntryWithReferencesTransitSearch;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface SearchMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateSearchMethodResponseFormGroup() {
		return new FormGroup<SearchMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StatisticsResponse {

		/** Egyszerű válasz. */
		result?: string | null;
	}
	export interface StatisticsResponseFormProperties {

		/** Egyszerű válasz. */
		result: FormControl<string | null | undefined>,
	}
	export function CreateStatisticsResponseFormGroup() {
		return new FormGroup<StatisticsResponseFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A válasz státusza. */
	export enum Status { NOT_MODIFIED = 'NOT_MODIFIED', OK = 'OK', UNKNOWN_ERROR = 'UNKNOWN_ERROR', NOT_FOUND = 'NOT_FOUND', INVALID_VALUE = 'INVALID_VALUE', NOT_OPERATING = 'NOT_OPERATING', OUTSIDE_BOUNDS = 'OUTSIDE_BOUNDS', PATH_NOT_FOUND = 'PATH_NOT_FOUND', NO_TRANSIT_TIMES = 'NO_TRANSIT_TIMES', REQUEST_TIMEOUT = 'REQUEST_TIMEOUT', BOGUS_PARAMETER = 'BOGUS_PARAMETER', TOO_CLOSE = 'TOO_CLOSE', LOCATION_NOT_ACCESSIBLE = 'LOCATION_NOT_ACCESSIBLE', MISSING_MODE = 'MISSING_MODE', ERROR_NO_GRAPH = 'ERROR_NO_GRAPH', PLANNER_SERVICE_UNAVAILABLE = 'PLANNER_SERVICE_UNAVAILABLE', ERROR_VEHICLE_LOCATION_SERVICE = 'ERROR_VEHICLE_LOCATION_SERVICE', ERROR_BIKE_RENTAL_SERVICE = 'ERROR_BIKE_RENTAL_SERVICE', ERROR_TICKETING_SERVICE = 'ERROR_TICKETING_SERVICE', ERROR_TRANSIT_INDEX_SERVICE = 'ERROR_TRANSIT_INDEX_SERVICE', MOVED_TEMPORARILY = 'MOVED_TEMPORARILY' }

	export interface StopsForLocationResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitStop;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface StopsForLocationResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateStopsForLocationResponseFormGroup() {
		return new FormGroup<StopsForLocationResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitStop {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class?: string | null;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A lekért adatok listája. */
		list?: Array<TransitStop>;

		/** Az értéke mindig `false`. */
		outOfRange?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitListEntryWithReferencesTransitStopFormProperties {

		/** Az adat típusa. Lista esetén "listWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,

		/** Az értéke mindig `false`. */
		outOfRange: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitListEntryWithReferencesTransitStopFormGroup() {
		return new FormGroup<TransitListEntryWithReferencesTransitStopFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
			outOfRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TicketingMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitEntryWithReferencesTransitTicketing;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface TicketingMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateTicketingMethodResponseFormGroup() {
		return new FormGroup<TicketingMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitTicketing {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class?: string | null;

		/** A lekért adat. */
		entry?: TransitTicketing;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitTicketingFormProperties {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitEntryWithReferencesTransitTicketingFormGroup() {
		return new FormGroup<TransitEntryWithReferencesTransitTicketingFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adat. */
	export interface TransitTicketing {

		/** A jegyértékesítési adatok legutóbbi módosulásának időpontja. */
		lastModifiedTime?: number | null;

		/** A jegyértékesítési pontok listája. */
		locations?: Array<TicketingLocation>;

		/** A legrégebb óta módosított értékesítési hely vagy termék módosításának időpontja. */
		oldestModifiedTime?: number | null;

		/** A termékek listája. */
		products?: Array<TicketingProduct>;
	}

	/** A lekért adat. */
	export interface TransitTicketingFormProperties {

		/** A jegyértékesítési adatok legutóbbi módosulásának időpontja. */
		lastModifiedTime: FormControl<number | null | undefined>,

		/** A legrégebb óta módosított értékesítési hely vagy termék módosításának időpontja. */
		oldestModifiedTime: FormControl<number | null | undefined>,
	}
	export function CreateTransitTicketingFormGroup() {
		return new FormGroup<TransitTicketingFormProperties>({
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
			oldestModifiedTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A termékek listája. */
	export interface TicketingProduct {

		/** A termék csoportjának azonosítója. */
		groupId?: string | null;

		/** A termék csoportjának neve. */
		groupName?: string | null;

		/** A termék azonosítója. */
		id?: string | null;

		/** A termék utolsó frissítésének időpontja ezred másodpercben. */
		lastModified?: Date | null;

		/** A termék neve. */
		name?: string | null;

		/** A termék ára. */
		price?: string | null;

		/** A termék linkje. */
		url?: string | null;

		/** Ha `false`, akkor hibás az adat, így a felületen elrejtésre kerül. */
		visible?: boolean | null;
	}

	/** A termékek listája. */
	export interface TicketingProductFormProperties {

		/** A termék csoportjának azonosítója. */
		groupId: FormControl<string | null | undefined>,

		/** A termék csoportjának neve. */
		groupName: FormControl<string | null | undefined>,

		/** A termék azonosítója. */
		id: FormControl<string | null | undefined>,

		/** A termék utolsó frissítésének időpontja ezred másodpercben. */
		lastModified: FormControl<Date | null | undefined>,

		/** A termék neve. */
		name: FormControl<string | null | undefined>,

		/** A termék ára. */
		price: FormControl<string | null | undefined>,

		/** A termék linkje. */
		url: FormControl<string | null | undefined>,

		/** Ha `false`, akkor hibás az adat, így a felületen elrejtésre kerül. */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateTicketingProductFormGroup() {
		return new FormGroup<TicketingProductFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitTripDetailsOTP {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class?: string | null;

		/** A lekért adat. */
		entry?: TransitTripDetailsOTP;

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded?: boolean | null;

		/** A válaszhoz tartozó referenciák. */
		references?: TransitReferences;
	}

	/** A válasz adat. */
	export interface TransitEntryWithReferencesTransitTripDetailsOTPFormProperties {

		/** Az adat típusa. Egy entitás esetén "entryWithReferences". */
		class: FormControl<string | null | undefined>,

		/** Igaz, ha a lista több elemet tartalmaz, mint a limit paraméter. Indulási és érkezési idő típusú lekéréseknél használjuk. */
		limitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitEntryWithReferencesTransitTripDetailsOTPFormGroup() {
		return new FormGroup<TransitEntryWithReferencesTransitTripDetailsOTPFormProperties>({
			class: new FormControl<string | null | undefined>(undefined),
			limitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A lekért adat. */
	export interface TransitTripDetailsOTP {

		/** Aktív zavarok a meneten. */
		alertIds?: Array<string>;

		/** Igaz, ha a menet (legalább egy szakasza) foglalást igényel. */
		mayRequireBooking?: boolean | null;

		/** A következő menet azonosítója a csoportban, ha a menet hurokjárat. */
		nextBlockTripId?: string | null;

		/** A menethez tartozó kódolt minta (polyline). */
		polyline?: TransitPolyline;

		/** A menet menetrendi napja. */
		serviceDate?: string | null;

		/** Menet megállóinak listája. */
		stopTimes?: Array<TransitTripStopTime>;

		/** A menet azonosítója. */
		tripId?: string | null;

		/** A lekért adatok listája. */
		vehicle?: TransitVehicle;

		/** A menet utazástervező azonosítója, amelyet a `fromPlace` megadásához lehet használni. */
		vertex?: string | null;
	}

	/** A lekért adat. */
	export interface TransitTripDetailsOTPFormProperties {

		/** Igaz, ha a menet (legalább egy szakasza) foglalást igényel. */
		mayRequireBooking: FormControl<boolean | null | undefined>,

		/** A következő menet azonosítója a csoportban, ha a menet hurokjárat. */
		nextBlockTripId: FormControl<string | null | undefined>,

		/** A menet menetrendi napja. */
		serviceDate: FormControl<string | null | undefined>,

		/** A menet azonosítója. */
		tripId: FormControl<string | null | undefined>,

		/** A menet utazástervező azonosítója, amelyet a `fromPlace` megadásához lehet használni. */
		vertex: FormControl<string | null | undefined>,
	}
	export function CreateTransitTripDetailsOTPFormGroup() {
		return new FormGroup<TransitTripDetailsOTPFormProperties>({
			mayRequireBooking: new FormControl<boolean | null | undefined>(undefined),
			nextBlockTripId: new FormControl<string | null | undefined>(undefined),
			serviceDate: new FormControl<string | null | undefined>(undefined),
			tripId: new FormControl<string | null | undefined>(undefined),
			vertex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Menet megállóinak listája. */
	export interface TransitTripStopTime {

		/** A megállóba érkezés tervezett ideje epoch másodbercben. Az első megállónál hiányzik. */
		arrivalTime?: number | null;

		/** A megállóból való indulás tervezett ideje epoch másodbercben. Az utolsó megállónál hiányzik. */
		departureTime?: number | null;

		/** A megállóba érkezés becsült ideje epoch másodbercben, ha a járathoz van valós idejű adat. Az első megállónál hiányzik. */
		predictedArrivalTime?: number | null;

		/** A megállóból való becsült indulás ideje epoch másodbercben, ha a járathoz van valós idejű adat. Az utolsó megállónál hiányzik. */
		predictedDepartureTime?: number | null;

		/** Igaz, ha ez a megálló foglalást igényel. */
		requiresBooking?: boolean | null;

		/** Milyen messze található a megálló az elsőtől a minta mentén méterben. */
		shapeDistTraveled?: number | null;

		/** A megállóban kijelzett célállomás. */
		stopHeadsign?: string | null;

		/** A megálló azonosítója */
		stopId?: string | null;

		/** A megálló sorrendje a járaton. */
		stopSequence?: number | null;

		/** Igaz, ha a menethez tartozó valós idejű adatok bizonytalanok. */
		uncertain?: boolean | null;
	}

	/** Menet megállóinak listája. */
	export interface TransitTripStopTimeFormProperties {

		/** A megállóba érkezés tervezett ideje epoch másodbercben. Az első megállónál hiányzik. */
		arrivalTime: FormControl<number | null | undefined>,

		/** A megállóból való indulás tervezett ideje epoch másodbercben. Az utolsó megállónál hiányzik. */
		departureTime: FormControl<number | null | undefined>,

		/** A megállóba érkezés becsült ideje epoch másodbercben, ha a járathoz van valós idejű adat. Az első megállónál hiányzik. */
		predictedArrivalTime: FormControl<number | null | undefined>,

		/** A megállóból való becsült indulás ideje epoch másodbercben, ha a járathoz van valós idejű adat. Az utolsó megállónál hiányzik. */
		predictedDepartureTime: FormControl<number | null | undefined>,

		/** Igaz, ha ez a megálló foglalást igényel. */
		requiresBooking: FormControl<boolean | null | undefined>,

		/** Milyen messze található a megálló az elsőtől a minta mentén méterben. */
		shapeDistTraveled: FormControl<number | null | undefined>,

		/** A megállóban kijelzett célállomás. */
		stopHeadsign: FormControl<string | null | undefined>,

		/** A megálló azonosítója */
		stopId: FormControl<string | null | undefined>,

		/** A megálló sorrendje a járaton. */
		stopSequence: FormControl<number | null | undefined>,

		/** Igaz, ha a menethez tartozó valós idejű adatok bizonytalanok. */
		uncertain: FormControl<boolean | null | undefined>,
	}
	export function CreateTransitTripStopTimeFormGroup() {
		return new FormGroup<TransitTripStopTimeFormProperties>({
			arrivalTime: new FormControl<number | null | undefined>(undefined),
			departureTime: new FormControl<number | null | undefined>(undefined),
			predictedArrivalTime: new FormControl<number | null | undefined>(undefined),
			predictedDepartureTime: new FormControl<number | null | undefined>(undefined),
			requiresBooking: new FormControl<boolean | null | undefined>(undefined),
			shapeDistTraveled: new FormControl<number | null | undefined>(undefined),
			stopHeadsign: new FormControl<string | null | undefined>(undefined),
			stopId: new FormControl<string | null | undefined>(undefined),
			stopSequence: new FormControl<number | null | undefined>(undefined),
			uncertain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TraverseMode { WALK = 'WALK', BICYCLE = 'BICYCLE', CAR = 'CAR', TRAM = 'TRAM', SUBWAY = 'SUBWAY', RAIL = 'RAIL', BUS = 'BUS', FERRY = 'FERRY', CABLE_CAR = 'CABLE_CAR', GONDOLA = 'GONDOLA', FUNICULAR = 'FUNICULAR', TRANSIT = 'TRANSIT', AIRPLANE = 'AIRPLANE', TROLLEYBUS = 'TROLLEYBUS', MONORAIL = 'MONORAIL', SUBURBAN_RAILWAY = 'SUBURBAN_RAILWAY', COACH = 'COACH' }

	export interface TripDetailsOTPMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitEntryWithReferencesTransitTripDetailsOTP;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface TripDetailsOTPMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateTripDetailsOTPMethodResponseFormGroup() {
		return new FormGroup<TripDetailsOTPMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VehicleForTripMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitVehicle;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface VehicleForTripMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateVehicleForTripMethodResponseFormGroup() {
		return new FormGroup<VehicleForTripMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VehiclesForLocationMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitVehicle;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface VehiclesForLocationMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateVehiclesForLocationMethodResponseFormGroup() {
		return new FormGroup<VehiclesForLocationMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VehiclesForRouteMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitVehicle;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface VehiclesForRouteMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateVehiclesForRouteMethodResponseFormGroup() {
		return new FormGroup<VehiclesForRouteMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VehiclesForStopMethodResponse {

		/** A válasz státusz kódja. */
		code?: number | null;

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime?: number | null;

		/** A válasz adat. */
		data?: TransitListEntryWithReferencesTransitVehicle;

		/** A válasz státusza. */
		status?: AlertSearchMethodResponseStatus | null;

		/** A válasz szövege. */
		text?: string | null;

		/** A válasz API verziója. */
		version?: number | null;
	}
	export interface VehiclesForStopMethodResponseFormProperties {

		/** A válasz státusz kódja. */
		code: FormControl<number | null | undefined>,

		/** Az aktuális szerveridő ezredmásodpercben. */
		currentTime: FormControl<number | null | undefined>,

		/** A válasz státusza. */
		status: FormControl<AlertSearchMethodResponseStatus | null | undefined>,

		/** A válasz szövege. */
		text: FormControl<string | null | undefined>,

		/** A válasz API verziója. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateVehiclesForStopMethodResponseFormGroup() {
		return new FormGroup<VehiclesForStopMethodResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			currentTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AlertSearchMethodResponseStatus | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum WalkProfile { SLOW = 'SLOW', MID = 'MID', FAST = 'FAST' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get {dialect}/api/where/alert-search
		 * @param {string} query A keresési feltétel, amit a zavar fejlécével, leírásával, vagy azonosítójával illesztünk.
		 * @param {number} start A keresés időintervallumának eleje epoch másodpercben.
		 * @param {number} end A keresési időintervallum vége epoch másodpercben.
		 * @param {number} minResult A visszaadott elemek minimális száma.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {AlertSearchMethodResponse} Visszatér a `query` paraméterben megadott keresési feltételnek megfelelő zavarokkal, amik aktívak a megadott időintervallumnban.
		 */
		SearchAlerts(query: string | null | undefined, start: number | null | undefined, end: number | null | undefined, minResult: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<AlertSearchMethodResponse> {
			return this.http.get<AlertSearchMethodResponse>(this.baseUri + dialect + '/api/where/alert-search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&start=' + start + '&end=' + end + '&minResult=' + minResult + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/arrivals-and-departures-for-location
		 * @param {number} groupLimit Menetrendi adatok maximális száma egy csoportban.
		 * @param {number} clientLon A kliens hosszúsági koordinátája.
		 * @param {number} clientLat A kliens szélességi koordinátája.
		 * @param {number} minutesBefore A lekérdezési időablak a `time` paraméter előtt ennyi perccel indul.
		 * @param {number} minutesAfter A lekérdezési időablak a `time` paraméter után ennyi perccel ér véget.
		 * @param {Array<string>} stopId A megállók azonosítóinak listája, amelyekhez a lekérést végezzük.
		 * @param {Array<string>} includeRouteId A válasz szűrésére használt járatok azonosítóinak listája.
		 * @param {number} time A lekérdezés kiértékeléséhez használt időpont. Alapértelmezetten az aktuális szerveridő.
		 * @param {boolean} onlyDepartures Ha igaz akkor csak az érkezési (és előrejelzett érkezési) idők nem szerepelnek a válaszban.
		 * @param {number} limit A visszaadott indulási és érkezési idők listájának maximális hossza.
		 * @param {number} lat A helyszín középpontjának szélessgéi koordinátája.
		 * @param {number} lon A helyszín középpontjának hosszúsági koordinátája.
		 * @param {number} latSpan A lekérési terület szélességi íve. (Terület szélessége: `lat +/- latspan`).
		 * @param {number} lonSpan A lekérési terület hosszúsági íve. (Terület hosszúsága: `lon +/- lonSpan`).
		 * @param {number} radius Ha a `latSpan` vagy a `longSpan` nincs kitöltve, a keresési terület a középpontól számított `radius` méter távolság mind a négy irányban.
		 * @param {string} query A válasz szűrésére használt keresési kifejezés.
		 * @param {number} minResult A visszaadott elemek minimális száma.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {ArrivalsAndDeparturesForLocationOTPMethodResponse} Visszaadja egy területhez tartozó érkezési és indulási időket járatazonosítók és célállomások szerint csoportosítva.
		 */
		GetArrivalsAndDeparturesForLocation(groupLimit: number | null | undefined, clientLon: number | null | undefined, clientLat: number | null | undefined, minutesBefore: number | null | undefined, minutesAfter: number | null | undefined, stopId: Array<string> | null | undefined, includeRouteId: Array<string> | null | undefined, time: number | null | undefined, onlyDepartures: boolean | null | undefined, limit: number | null | undefined, lat: number | null | undefined, lon: number | null | undefined, latSpan: number | null | undefined, lonSpan: number | null | undefined, radius: number | null | undefined, query: string | null | undefined, minResult: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<ArrivalsAndDeparturesForLocationOTPMethodResponse> {
			return this.http.get<ArrivalsAndDeparturesForLocationOTPMethodResponse>(this.baseUri + dialect + '/api/where/arrivals-and-departures-for-location?groupLimit=' + groupLimit + '&clientLon=' + clientLon + '&clientLat=' + clientLat + '&minutesBefore=' + minutesBefore + '&minutesAfter=' + minutesAfter + '&' + stopId?.map(z => `stopId=${encodeURIComponent(z)}`).join('&') + '&' + includeRouteId?.map(z => `includeRouteId=${encodeURIComponent(z)}`).join('&') + '&time=' + time + '&onlyDepartures=' + onlyDepartures + '&limit=' + limit + '&lat=' + lat + '&lon=' + lon + '&latSpan=' + latSpan + '&lonSpan=' + lonSpan + '&radius=' + radius + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&minResult=' + minResult + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/arrivals-and-departures-for-stop
		 * @param {number} minutesBefore A lekérdezési időablak a `time` paraméter előtt ennyi perccel indul.
		 * @param {number} minutesAfter A lekérdezési időablak a `time` paraméter után ennyi perccel ér véget.
		 * @param {Array<string>} stopId A megállók azonosítóinak listája, amelyekhez a lekérést végezzük.
		 * @param {Array<string>} includeRouteId A válasz szűrésére használt járatok azonosítóinak listája.
		 * @param {number} time A lekérdezés kiértékeléséhez használt időpont. Alapértelmezetten az aktuális szerveridő.
		 * @param {boolean} onlyDepartures Ha igaz akkor csak az érkezési (és előrejelzett érkezési) idők nem szerepelnek a válaszban.
		 * @param {number} limit A visszaadott indulási és érkezési idők listájának maximális hossza.
		 * @param {number} lat A helyszín középpontjának szélessgéi koordinátája.
		 * @param {number} lon A helyszín középpontjának hosszúsági koordinátája.
		 * @param {number} latSpan A lekérési terület szélességi íve. (Terület szélessége: `lat +/- latspan`).
		 * @param {number} lonSpan A lekérési terület hosszúsági íve. (Terület hosszúsága: `lon +/- lonSpan`).
		 * @param {number} radius Ha a `latSpan` vagy a `longSpan` nincs kitöltve, a keresési terület a középpontól számított `radius` méter távolság mind a négy irányban.
		 * @param {string} query A válasz szűrésére használt keresési kifejezés.
		 * @param {number} minResult A visszaadott elemek minimális száma.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {ArrivalsAndDeparturesForStopOTPMethodResponse} Lekéri a megállóhoz tartozó érkezési és indulási időket.
		 */
		GetArrivalsAndDeparturesForStop(minutesBefore: number | null | undefined, minutesAfter: number | null | undefined, stopId: Array<string> | null | undefined, includeRouteId: Array<string> | null | undefined, time: number | null | undefined, onlyDepartures: boolean | null | undefined, limit: number | null | undefined, lat: number | null | undefined, lon: number | null | undefined, latSpan: number | null | undefined, lonSpan: number | null | undefined, radius: number | null | undefined, query: string | null | undefined, minResult: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<ArrivalsAndDeparturesForStopOTPMethodResponse> {
			return this.http.get<ArrivalsAndDeparturesForStopOTPMethodResponse>(this.baseUri + dialect + '/api/where/arrivals-and-departures-for-stop?minutesBefore=' + minutesBefore + '&minutesAfter=' + minutesAfter + '&' + stopId?.map(z => `stopId=${encodeURIComponent(z)}`).join('&') + '&' + includeRouteId?.map(z => `includeRouteId=${encodeURIComponent(z)}`).join('&') + '&time=' + time + '&onlyDepartures=' + onlyDepartures + '&limit=' + limit + '&lat=' + lat + '&lon=' + lon + '&latSpan=' + latSpan + '&lonSpan=' + lonSpan + '&radius=' + radius + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&minResult=' + minResult + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/bicycle-rental
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {BicycleRentalMethodResponse} Visszatér az összes kerékpárkölcsönző állomással.
		 */
		GetBicycleRentalStations(appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<BicycleRentalMethodResponse> {
			return this.http.get<BicycleRentalMethodResponse>(this.baseUri + dialect + '/api/where/bicycle-rental?appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/booking-redirect
		 * @param {string} routeId A járat azonosítója.
		 * @param {string} directionId A járat íránya.
		 * @param {string} tripId A menet azonosítója.
		 * @param {string} serviceDate A menet üzem napja.
		 * @param {string} boardStopId A felszállási megálló azonosítója.
		 * @param {string} alightStopId A leszállási megálló azonosítója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @return {void} 
		 */
		BookingRedirect(routeId: string | null | undefined, directionId: string | null | undefined, tripId: string | null | undefined, serviceDate: string | null | undefined, boardStopId: string | null | undefined, alightStopId: string | null | undefined, version: ApiVersion | null | undefined, appVersion: string | null | undefined, dialect: Dialect): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + dialect + '/api/where/booking-redirect?routeId=' + (routeId == null ? '' : encodeURIComponent(routeId)) + '&directionId=' + (directionId == null ? '' : encodeURIComponent(directionId)) + '&tripId=' + (tripId == null ? '' : encodeURIComponent(tripId)) + '&serviceDate=' + (serviceDate == null ? '' : encodeURIComponent(serviceDate)) + '&boardStopId=' + (boardStopId == null ? '' : encodeURIComponent(boardStopId)) + '&alightStopId=' + (alightStopId == null ? '' : encodeURIComponent(alightStopId)) + '&version=' + version + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {dialect}/api/where/metadata
		 * @param {number} time A lekérés kiértékelésének időpontja epoch másodpercben (az aktív zavarok lekéréséhez szükséges).A szerver ideje az alapértelmezett értéke.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {MetadataResponse} A szerver metaadataival tér vissza.
		 */
		GetMetadata(time: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<MetadataResponse> {
			return this.http.get<MetadataResponse>(this.baseUri + dialect + '/api/where/metadata?time=' + time + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/multi-route-details
		 * @param {Array<string>} routeId A lekért járatok azonosítói.
		 * @param {string} date Az aktív zavarok lekéréséhez használt dátum. Alapértelmezett értéke az aktuális nap.
		 * @param {boolean} related Ha igaz, akkor az útvonalhoz tartozó kapcsolódó útvonalak is szerepelnek a válaszban.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {MultiRouteDetailsMethodResponse} Az összes járatot visszaadja a megadott azonosítókhoz.
		 */
		GetMultiRouteDetails(routeId: Array<string>, date: string | null | undefined, related: boolean | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<MultiRouteDetailsMethodResponse> {
			return this.http.get<MultiRouteDetailsMethodResponse>(this.baseUri + dialect + '/api/where/multi-route-details?' + routeId.map(z => `routeId=${encodeURIComponent(z)}`).join('&') + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&related=' + related + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Post {dialect}/api/where/onboard-depart-search
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {OnboardDepartSearchMethodResponse} Visszatér az utas útvonalára illeszkedő járművekkel.
		 */
		SearchForOnboardDepartVehicles(appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined, requestBody: Array<OnboardDepartPosition>): Observable<OnboardDepartSearchMethodResponse> {
			return this.http.post<OnboardDepartSearchMethodResponse>(this.baseUri + dialect + '/api/where/onboard-depart-search?appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get {dialect}/api/where/plan-access
		 * @param {ApiVersion} version Az API verziója.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @param {string} date A dátum, amikor a tervezés indul (`arriveBy` esetén érkezik).
		 * @param {string} time Az idő, amikor a tervezés indul (`arriveBy` esetén érkezik).
		 * @param {string} fromPlace Az indulási hely adatai `név::hely` formában. A `név` az adott hely tetszőleges neve, amely az útiterv kiindulási pontjának lesz a neve (`leg.from.name`). A `hely` lehet koordináta `lat,lon` formában, vagy a geocoder API által visszaadott `vertex` azonosítója.
		 * @param {string} toPlace Az érkezési hely adatai `név::hely` formában. A `név` az adott hely tetszőleges neve, amely az útiterv érkezési pontjának lesz a neve (`leg.to.name`). A `hely` lehet koordináta `lat,lon` formában, vagy a geocoder API által visszaadott `vertex` azonosítója.
		 * @param {Array<TraverseMode>} mode A tervező milyen közlekedési módokat használjon. A kerékpár kölcsönzés a `BICYCLE,WALK` paraméterekkel kapcsolható be.
		 * @param {boolean} shouldBuyTickets Az első járműre szállás előtt történjen-e jegyvásárlás.
		 * @param {boolean} showIntermediateStops A válasz tartalmazza-e a járatok által érintett köztes megállókat is.
		 * @param {boolean} arriveBy Érkezési időre tervezzünk-e a megadott `date` és `time` paraméterrel.
		 * @param {boolean} wheelchair Az összes járat alacsonypadlós legyen-e.
		 * @param {number} triangleSafetyFactor Kerékpáros háromszög módú tervezés esetén mennyire számít a biztonság. 0 és 1 közötti szám, és 1-et kell kiadnia a másik két faktor összegével.
		 * @param {number} triangleSlopeFactor Kerékpáros háromszög módú tervezés esetén mennyire számít az útvonal síksága. 0 és 1 közötti szám, és 1-et kell kiadnia a másik két faktor összegével.
		 * @param {number} triangleTimeFactor Kerékpáros háromszög módú tervezés esetén mennyire számít a gyorsaság. 0 és 1 közötti szám, és 1-et kell kiadnia a másik két faktor összegével.
		 * @param {PlanAccessOptimize} optimize A kereső mire optimalizálja az útvonalakat.
		 * @param {WalkProfile} walkProfile A séta sebességét meghatározó profil.
		 * @param {number} numItineraries Legfeljebb hány útvonal szerepeljen a válaszban.
		 * @return {PlanTripResponse} A megadott paraméterekkel tervez megállóba útvonalat.
		 */
		PlanAccess(version: ApiVersion | null | undefined, appVersion: string | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined, date: string | null | undefined, time: string | null | undefined, fromPlace: string, toPlace: string, mode: Array<TraverseMode>, shouldBuyTickets: boolean | null | undefined, showIntermediateStops: boolean | null | undefined, arriveBy: boolean | null | undefined, wheelchair: boolean | null | undefined, triangleSafetyFactor: number | null | undefined, triangleSlopeFactor: number | null | undefined, triangleTimeFactor: number | null | undefined, optimize: PlanAccessOptimize | null | undefined, walkProfile: WalkProfile | null | undefined, numItineraries: number | null | undefined): Observable<PlanTripResponse> {
			return this.http.get<PlanTripResponse>(this.baseUri + dialect + '/api/where/plan-access?version=' + version + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&time=' + (time == null ? '' : encodeURIComponent(time)) + '&fromPlace=' + (fromPlace == null ? '' : encodeURIComponent(fromPlace)) + '&toPlace=' + (toPlace == null ? '' : encodeURIComponent(toPlace)) + '&' + mode.map(z => `mode=${z}`).join('&') + '&shouldBuyTickets=' + shouldBuyTickets + '&showIntermediateStops=' + showIntermediateStops + '&arriveBy=' + arriveBy + '&wheelchair=' + wheelchair + '&triangleSafetyFactor=' + triangleSafetyFactor + '&triangleSlopeFactor=' + triangleSlopeFactor + '&triangleTimeFactor=' + triangleTimeFactor + '&optimize=' + optimize + '&walkProfile=' + walkProfile + '&numItineraries=' + numItineraries + '', {});
		}

		/**
		 * Get {dialect}/api/where/plan-trip
		 * @param {ApiVersion} version Az API verziója.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @param {string} date A dátum, amikor a tervezés indul (`arriveBy` esetén érkezik).
		 * @param {string} time Az idő, amikor a tervezés indul (`arriveBy` esetén érkezik).
		 * @param {string} fromPlace Az indulási hely adatai `név::hely` formában. A `név` az adott hely tetszőleges neve, amely az útiterv kiindulási pontjának lesz a neve (`leg.from.name`). A `hely` lehet koordináta `lat,lon` formában, vagy a geocoder API által visszaadott `vertex` azonosítója.
		 * @param {string} toPlace Az érkezési hely adatai `név::hely` formában. A `név` az adott hely tetszőleges neve, amely az útiterv érkezési pontjának lesz a neve (`leg.to.name`). A `hely` lehet koordináta `lat,lon` formában, vagy a geocoder API által visszaadott `vertex` azonosítója.
		 * @param {Array<TraverseMode>} mode A tervező milyen közlekedési módokat használjon. A kerékpár kölcsönzés a `BICYCLE,WALK` paraméterekkel kapcsolható be.
		 * @param {boolean} shouldBuyTickets Az első járműre szállás előtt történjen-e jegyvásárlás.
		 * @param {boolean} showIntermediateStops A válasz tartalmazza-e a járatok által érintett köztes megállókat is.
		 * @param {boolean} arriveBy Érkezési időre tervezzünk-e a megadott `date` és `time` paraméterrel.
		 * @param {boolean} wheelchair Az összes járat alacsonypadlós legyen-e.
		 * @param {number} triangleSafetyFactor Kerékpáros háromszög módú tervezés esetén mennyire számít a biztonság. 0 és 1 közötti szám, és 1-et kell kiadnia a másik két faktor összegével.
		 * @param {number} triangleSlopeFactor Kerékpáros háromszög módú tervezés esetén mennyire számít az útvonal síksága. 0 és 1 közötti szám, és 1-et kell kiadnia a másik két faktor összegével.
		 * @param {number} triangleTimeFactor Kerékpáros háromszög módú tervezés esetén mennyire számít a gyorsaság. 0 és 1 közötti szám, és 1-et kell kiadnia a másik két faktor összegével.
		 * @param {PlanAccessOptimize} optimize A kereső mire optimalizálja az útvonalakat.
		 * @param {WalkProfile} walkProfile A séta sebességét meghatározó profil.
		 * @param {number} numItineraries Legfeljebb hány útvonal szerepeljen a válaszban.
		 * @return {PlanTripResponse} A megadott paraméterekkel tervez útvonalat.
		 */
		PlanTrip(version: ApiVersion | null | undefined, appVersion: string | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined, date: string | null | undefined, time: string | null | undefined, fromPlace: string, toPlace: string, mode: Array<TraverseMode>, shouldBuyTickets: boolean | null | undefined, showIntermediateStops: boolean | null | undefined, arriveBy: boolean | null | undefined, wheelchair: boolean | null | undefined, triangleSafetyFactor: number | null | undefined, triangleSlopeFactor: number | null | undefined, triangleTimeFactor: number | null | undefined, optimize: PlanAccessOptimize | null | undefined, walkProfile: WalkProfile | null | undefined, numItineraries: number | null | undefined): Observable<PlanTripResponse> {
			return this.http.get<PlanTripResponse>(this.baseUri + dialect + '/api/where/plan-trip?version=' + version + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&time=' + (time == null ? '' : encodeURIComponent(time)) + '&fromPlace=' + (fromPlace == null ? '' : encodeURIComponent(fromPlace)) + '&toPlace=' + (toPlace == null ? '' : encodeURIComponent(toPlace)) + '&' + mode.map(z => `mode=${z}`).join('&') + '&shouldBuyTickets=' + shouldBuyTickets + '&showIntermediateStops=' + showIntermediateStops + '&arriveBy=' + arriveBy + '&wheelchair=' + wheelchair + '&triangleSafetyFactor=' + triangleSafetyFactor + '&triangleSlopeFactor=' + triangleSlopeFactor + '&triangleTimeFactor=' + triangleTimeFactor + '&optimize=' + optimize + '&walkProfile=' + walkProfile + '&numItineraries=' + numItineraries + '', {});
		}

		/**
		 * Get {dialect}/api/where/references
		 * @param {Array<string>} agencyId A szolgáltató ID-je.
		 * @param {Array<string>} alertId A zavar ID-je.
		 * @param {Array<string>} routeId A járat ID-ja.
		 * @param {Array<string>} stopId A megálló ID-ja.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {ReferencesMethodResponse} ID alapú referencia lekérdezés.
		 */
		GetReferences(agencyId: Array<string> | null | undefined, alertId: Array<string> | null | undefined, routeId: Array<string> | null | undefined, stopId: Array<string> | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<ReferencesMethodResponse> {
			return this.http.get<ReferencesMethodResponse>(this.baseUri + dialect + '/api/where/references?' + agencyId?.map(z => `agencyId=${encodeURIComponent(z)}`).join('&') + '&' + alertId?.map(z => `alertId=${encodeURIComponent(z)}`).join('&') + '&' + routeId?.map(z => `routeId=${encodeURIComponent(z)}`).join('&') + '&' + stopId?.map(z => `stopId=${encodeURIComponent(z)}`).join('&') + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/route-details
		 * @param {string} routeId A járat ID-ja.
		 * @param {string} date Az aktív zavarok lekéréséhez használt dátum. Alapértelmezett értéke az aktuális nap.
		 * @param {boolean} related Ha igaz, akkor az útvonalhoz tartozó kapcsolódó útvonalak is szerepelnek a válaszban.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {RouteDetailsMethodResponse} Visszaadja a megadott ID-val rendelkező járatot.
		 */
		GetRouteDetails(routeId: string, date: string | null | undefined, related: boolean | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<RouteDetailsMethodResponse> {
			return this.http.get<RouteDetailsMethodResponse>(this.baseUri + dialect + '/api/where/route-details?routeId=' + (routeId == null ? '' : encodeURIComponent(routeId)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&related=' + related + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/route-details-for-stop
		 * @param {string} stopId A lekért megálló azonosítója.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {RouteDetailsForStopMethodResponse} A megállóhoz és a testvérmegállóihoz tartozó összes járattal tér vissza.
		 */
		GetRouteDetailsForStop(stopId: string | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<RouteDetailsForStopMethodResponse> {
			return this.http.get<RouteDetailsForStopMethodResponse>(this.baseUri + dialect + '/api/where/route-details-for-stop?stopId=' + (stopId == null ? '' : encodeURIComponent(stopId)) + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/schedule-for-stop
		 * @param {Array<string>} stopId A releváns megállók azonosítói.
		 * @param {string} date A kért dátum.
		 * @param {boolean} onlyDepartures Igaz esetén az érkezési és előrejelzett érkezési idők ki lesznek hagyva a válaszból.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {ScheduleForStopOTPMethodResponse} Visszaadja a menetrendet az adott megállóhoz.
		 */
		GetScheduleForStop(stopId: Array<string> | null | undefined, date: string | null | undefined, onlyDepartures: boolean | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<ScheduleForStopOTPMethodResponse> {
			return this.http.get<ScheduleForStopOTPMethodResponse>(this.baseUri + dialect + '/api/where/schedule-for-stop?' + stopId?.map(z => `stopId=${encodeURIComponent(z)}`).join('&') + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&onlyDepartures=' + onlyDepartures + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/search
		 * @param {string} query Szűrőfeltétel, amire illesztve vannak a zavarok, járatok és megállók.
		 * @param {number} lat A látható térkép középpontjának szélessgéi koordinátája.
		 * @param {number} lon A látható térkép középpontjának hosszúsági koordinátája.
		 * @param {number} minResult A visszaadott elemek minimális száma.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {SearchMethodResponse} Visszaadja az olyan zavarokat, megállókat és járatokat, amelyek tulajdonságai illeszkednek a megadott szűrőrfeltételre.
		 */
		Search(query: string | null | undefined, lat: number | null | undefined, lon: number | null | undefined, minResult: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<SearchMethodResponse> {
			return this.http.get<SearchMethodResponse>(this.baseUri + dialect + '/api/where/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&lat=' + lat + '&lon=' + lon + '&minResult=' + minResult + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/statistics
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @return {StatisticsResponse} Egyszerű végpont hibakereséshez, ami egy "OK" választ ad vissza.
		 */
		GetStatistics(dialect: Dialect): Observable<StatisticsResponse> {
			return this.http.get<StatisticsResponse>(this.baseUri + dialect + '/api/where/statistics', {});
		}

		/**
		 * Get {dialect}/api/where/stops-for-location
		 * @param {number} lat A helyszín középpontjának szélessgéi koordinátája.
		 * @param {number} lon A helyszín középpontjának hosszúsági koordinátája.
		 * @param {number} latSpan A lekérési terület szélességi íve. (Terület szélessége: `lat +/- latspan`).
		 * @param {number} lonSpan A lekérési terület hosszúsági íve. (Terület hosszúsága: `lon +/- lonSpan`).
		 * @param {number} radius Ha a `latSpan` vagy a `longSpan` nincs kitöltve, a keresési terület a középpontól számított `radius` méter távolság mind a négy irányban.
		 * @param {string} query A válasz szűrésére használt keresési kifejezés.
		 * @param {number} minResult A visszaadott elemek minimális száma.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {StopsForLocationResponse} Egy megállólistát ad vissza az adott helyhez. Ha a lat vagy a lon null, akkor az összes megálló bekerül a válaszba.
		 */
		GetStopsForLocation(lat: number | null | undefined, lon: number | null | undefined, latSpan: number | null | undefined, lonSpan: number | null | undefined, radius: number | null | undefined, query: string | null | undefined, minResult: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<StopsForLocationResponse> {
			return this.http.get<StopsForLocationResponse>(this.baseUri + dialect + '/api/where/stops-for-location?lat=' + lat + '&lon=' + lon + '&latSpan=' + latSpan + '&lonSpan=' + lonSpan + '&radius=' + radius + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&minResult=' + minResult + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/ticketing-locations
		 * @param {number} ifModifiedSince Csak azokat az elemeket adjuk vissza, amik módosultak az itt megadott időbélyeg (UNIX időbélyeg másodpercben) után. Ha nincs változás üres listákkal tér vissza. Elsőbbsége van a header paraméterrel szemben.
		 * @param {boolean} full Ha igaz, és az adat változott az `ifModifiedSince` query paraméterben megadott időpont óta, akkor az összes adat visszaadásra kerül. Ha nincs megadva csak a módosult elemek szerepelnek a válaszban. Csak az `ifModifiedSince` query paraméterrel együtt szerepelhet, mivel az `If-Modified-Since` fejléc minden esetben a teljes választ tartalmazza.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {TicketingMethodResponse} Visszaadja a jegyértékesítő helyeket és jegytípusokat.
		 */
		GetTicketingData(ifModifiedSince: number | null | undefined, full: boolean | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<TicketingMethodResponse> {
			return this.http.get<TicketingMethodResponse>(this.baseUri + dialect + '/api/where/ticketing-locations?ifModifiedSince=' + ifModifiedSince + '&full=' + full + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/trip-details
		 * @param {string} vehicleId Amennyiben meg van adva, azon menet érkezik a válaszban, amit az adott jármű teljesít.
		 * @param {string} tripId Ha nincs kitöltve a járműazonosító, az itt megadott azonosítóval rendelkező menet lesz a válaszban.
		 * @param {string} date Ha nincs kitöltve a járműazonosító, ezen a dátumon lesz keresve az adott azonosítójú menet.
		 * @param {number} ifModifiedSince Akkor adunk vissza adatot, ha az módosult az itt megadott időbélyeg (UNIX időbélyeg másodpercben) után. Ellenkező esetben HTTP 304 a válasz, ha nincs változás. Elsőbbsége van a header paraméterrel szemben.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {TripDetailsOTPMethodResponse} Visszaadja a részletes információit egy menetnek, ami az azonosítója és a dátum alapján, vagy az azt teljesítő jármű azonosítója alapján lett lekérve.
		 */
		GetTripDetails(vehicleId: string | null | undefined, tripId: string | null | undefined, date: string | null | undefined, ifModifiedSince: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<TripDetailsOTPMethodResponse> {
			return this.http.get<TripDetailsOTPMethodResponse>(this.baseUri + dialect + '/api/where/trip-details?vehicleId=' + (vehicleId == null ? '' : encodeURIComponent(vehicleId)) + '&tripId=' + (tripId == null ? '' : encodeURIComponent(tripId)) + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&ifModifiedSince=' + ifModifiedSince + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/vehicle-for-trip
		 * @param {Array<string>} tripId A lekért menetek azonosítói.
		 * @param {Array<string>} date A lekért menetrendi napok. Alapértelmezetten az aktuális nap.
		 * @param {number} ifModifiedSince Akkor adunk vissza adatot, ha az módosult az itt megadott időbélyeg (UNIX időbélyeg másodpercben) után. Ellenkező esetben HTTP 304 a válasz, ha nincs változás. Elsőbbsége van a header paraméterrel szemben.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {VehicleForTripMethodResponse} Visszatér a megadott menetekhez és menetrendi napokhoz tartozó járművekkel.
		 */
		GetVehicleForTrip(tripId: Array<string>, date: Array<string> | null | undefined, ifModifiedSince: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<VehicleForTripMethodResponse> {
			return this.http.get<VehicleForTripMethodResponse>(this.baseUri + dialect + '/api/where/vehicle-for-trip?' + tripId.map(z => `tripId=${encodeURIComponent(z)}`).join('&') + '&' + date?.map(z => `date=${encodeURIComponent(z)}`).join('&') + '&ifModifiedSince=' + ifModifiedSince + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/vehicles-for-location
		 * @param {string} query A válasz listát szűrő feltétel, amit tartalmaznia kell a jármű azonosítójának, rendszámának vagy a típusának.
		 * @param {number} lat A terület középpontjának szélességi koordinátája.
		 * @param {number} lon A terület középpontjának hosszúsági koordinátája.
		 * @param {number} latSpan A lekérési terület szélességi íve. (Terület szélessége: `lat +/- latspan`).
		 * @param {number} lonSpan A lekérési terület hosszúsági íve. (Terület hosszúsága: `lon +/- lonSpan`).
		 * @param {number} radius Ha a `latSpan` vagy a `longSpan` nincs kitöltve, a keresési terület a középpontól számított `radius` méter távolság mind a négy irányban.
		 * @param {number} ifModifiedSince Akkor adunk vissza adatot, ha az módosult az itt megadott időbélyeg (UNIX időbélyeg másodpercben) után. Ellenkező esetben HTTP 304 a válasz, ha nincs változás. Elsőbbsége van a header paraméterrel szemben.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {VehiclesForLocationMethodResponse} Visszatér az adott területen található összes járművel. Ha a `lat` vagy a `lon` null, az összes jármű benne lesz a válaszban.
		 */
		GetVehiclesForLocation(query: string | null | undefined, lat: number | null | undefined, lon: number | null | undefined, latSpan: number | null | undefined, lonSpan: number | null | undefined, radius: number | null | undefined, ifModifiedSince: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<VehiclesForLocationMethodResponse> {
			return this.http.get<VehiclesForLocationMethodResponse>(this.baseUri + dialect + '/api/where/vehicles-for-location?query=' + (query == null ? '' : encodeURIComponent(query)) + '&lat=' + lat + '&lon=' + lon + '&latSpan=' + latSpan + '&lonSpan=' + lonSpan + '&radius=' + radius + '&ifModifiedSince=' + ifModifiedSince + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/vehicles-for-route
		 * @param {Array<string>} routeId A lekért járatok azonosítói.
		 * @param {boolean} related Tartalmazza-e a válasz a kapcsolódó járatokat is a referenciákban.
		 * @param {number} ifModifiedSince Akkor adunk vissza adatot, ha az módosult az itt megadott időbélyeg (UNIX időbélyeg másodpercben) után. Ellenkező esetben HTTP 304 a válasz, ha nincs változás. Elsőbbsége van a header paraméterrel szemben.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {VehiclesForRouteMethodResponse} A megadott járat azonosítókhoz tartozó járművekkel tér vissza.
		 */
		GetVehiclesForRoute(routeId: Array<string>, related: boolean | null | undefined, ifModifiedSince: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<VehiclesForRouteMethodResponse> {
			return this.http.get<VehiclesForRouteMethodResponse>(this.baseUri + dialect + '/api/where/vehicles-for-route?' + routeId.map(z => `routeId=${encodeURIComponent(z)}`).join('&') + '&related=' + related + '&ifModifiedSince=' + ifModifiedSince + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}

		/**
		 * Get {dialect}/api/where/vehicles-for-stop
		 * @param {string} stopId A lekért megálló azonosítója.
		 * @param {number} ifModifiedSince Akkor adunk vissza adatot, ha az módosult az itt megadott időbélyeg (UNIX időbélyeg másodpercben) után. Ellenkező esetben HTTP 304 a válasz, ha nincs változás. Elsőbbsége van a header paraméterrel szemben.
		 * @param {string} appVersion A kliensalkalmazás verziója.
		 * @param {ApiVersion} version Az API verziója.
		 * @param {Dialect} dialect Az API referenciáinak dialektusa.
		 * @param {Array<ReferencesSchema>} includeReferences A referenciák típusát határozza meg. `true` vagy `COMPACT` esetén minden referencia szerepel, `false` esetén üres. `COMPACT` módban a route referenciák `description` mezője kihagyásra kerül.
		 * @return {VehiclesForStopMethodResponse} Visszaadja az összes járművet, ami olyan menetet teljesít, ami tartalmazza a megadott megállót.
		 */
		GetVehiclesForStop(stopId: string, ifModifiedSince: number | null | undefined, appVersion: string | null | undefined, version: ApiVersion | null | undefined, dialect: Dialect, includeReferences: Array<ReferencesSchema> | null | undefined): Observable<VehiclesForStopMethodResponse> {
			return this.http.get<VehiclesForStopMethodResponse>(this.baseUri + dialect + '/api/where/vehicles-for-stop?stopId=' + (stopId == null ? '' : encodeURIComponent(stopId)) + '&ifModifiedSince=' + ifModifiedSince + '&appVersion=' + (appVersion == null ? '' : encodeURIComponent(appVersion)) + '&version=' + version + '&' + includeReferences?.map(z => `includeReferences=${z}`).join('&') + '', {});
		}
	}

	export enum PlanAccessOptimize { BEST = 'BEST', WALK = 'WALK', TRANSFERS = 'TRANSFERS' }

}

