import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface SystemDataSpatialDbGeography {
		geography?: SystemDataSpatialDbGeographyWellKnownValue;
	}
	export interface SystemDataSpatialDbGeographyFormProperties {
	}
	export function CreateSystemDataSpatialDbGeographyFormGroup() {
		return new FormGroup<SystemDataSpatialDbGeographyFormProperties>({
		});

	}

	export interface SystemDataSpatialDbGeographyWellKnownValue {
		coordinateSystemId?: number | null;
		wellKnownBinary?: string | null;
		wellKnownText?: string | null;
	}
	export interface SystemDataSpatialDbGeographyWellKnownValueFormProperties {
		coordinateSystemId: FormControl<number | null | undefined>,
		wellKnownBinary: FormControl<string | null | undefined>,
		wellKnownText: FormControl<string | null | undefined>,
	}
	export function CreateSystemDataSpatialDbGeographyWellKnownValueFormGroup() {
		return new FormGroup<SystemDataSpatialDbGeographyWellKnownValueFormProperties>({
			coordinateSystemId: new FormControl<number | null | undefined>(undefined),
			wellKnownBinary: new FormControl<string | null | undefined>(undefined),
			wellKnownText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SystemObject {
	}
	export interface SystemObjectFormProperties {
	}
	export function CreateSystemObjectFormGroup() {
		return new FormGroup<SystemObjectFormProperties>({
		});

	}

	export interface TflApiCommonApiVersionInfo {
		assemblies?: Array<string>;
		label?: string | null;
		timestamp?: Date | null;
		version?: string | null;
	}
	export interface TflApiCommonApiVersionInfoFormProperties {
		label: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateTflApiCommonApiVersionInfoFormGroup() {
		return new FormGroup<TflApiCommonApiVersionInfoFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiCommonDateRange {
		endDate?: Date | null;
		startDate?: Date | null;
	}
	export interface TflApiCommonDateRangeFormProperties {
		endDate: FormControl<Date | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiCommonDateRangeFormGroup() {
		return new FormGroup<TflApiCommonDateRangeFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TflApiCommonDateRangeNullable {
		endDate?: Date | null;
		startDate?: Date | null;
	}
	export interface TflApiCommonDateRangeNullableFormProperties {
		endDate: FormControl<Date | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiCommonDateRangeNullableFormGroup() {
		return new FormGroup<TflApiCommonDateRangeNullableFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TflApiCommonGeoPoint {

		/** Required */
		lat: number;

		/** Required */
		lon: number;
	}
	export interface TflApiCommonGeoPointFormProperties {

		/** Required */
		lat: FormControl<number | null | undefined>,

		/** Required */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateTflApiCommonGeoPointFormGroup() {
		return new FormGroup<TflApiCommonGeoPointFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lon: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TflApiCommonJourneyPlannerJpElevation {
		distance?: number | null;
		endLat?: number | null;
		endLon?: number | null;
		gradient?: number | null;
		heightFromPreviousPoint?: number | null;
		startLat?: number | null;
		startLon?: number | null;
	}
	export interface TflApiCommonJourneyPlannerJpElevationFormProperties {
		distance: FormControl<number | null | undefined>,
		endLat: FormControl<number | null | undefined>,
		endLon: FormControl<number | null | undefined>,
		gradient: FormControl<number | null | undefined>,
		heightFromPreviousPoint: FormControl<number | null | undefined>,
		startLat: FormControl<number | null | undefined>,
		startLon: FormControl<number | null | undefined>,
	}
	export function CreateTflApiCommonJourneyPlannerJpElevationFormGroup() {
		return new FormGroup<TflApiCommonJourneyPlannerJpElevationFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined),
			endLat: new FormControl<number | null | undefined>(undefined),
			endLon: new FormControl<number | null | undefined>(undefined),
			gradient: new FormControl<number | null | undefined>(undefined),
			heightFromPreviousPoint: new FormControl<number | null | undefined>(undefined),
			startLat: new FormControl<number | null | undefined>(undefined),
			startLon: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiCommonPlaceGeo {
		lat?: number | null;
		lon?: number | null;
		neLat?: number | null;
		neLon?: number | null;
		swLat?: number | null;
		swLon?: number | null;
	}
	export interface TflApiCommonPlaceGeoFormProperties {
		lat: FormControl<number | null | undefined>,
		lon: FormControl<number | null | undefined>,
		neLat: FormControl<number | null | undefined>,
		neLon: FormControl<number | null | undefined>,
		swLat: FormControl<number | null | undefined>,
		swLon: FormControl<number | null | undefined>,
	}
	export function CreateTflApiCommonPlaceGeoFormGroup() {
		return new FormGroup<TflApiCommonPlaceGeoFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			neLat: new FormControl<number | null | undefined>(undefined),
			neLon: new FormControl<number | null | undefined>(undefined),
			swLat: new FormControl<number | null | undefined>(undefined),
			swLon: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiCommonPostcodeInput {
		postcode?: string | null;
	}
	export interface TflApiCommonPostcodeInputFormProperties {
		postcode: FormControl<string | null | undefined>,
	}
	export function CreateTflApiCommonPostcodeInputFormGroup() {
		return new FormGroup<TflApiCommonPostcodeInputFormProperties>({
			postcode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$')]),
		});

	}

	export interface TflApiPresentationEntitiesAccidentStatsAccidentDetail {
		borough?: string | null;
		casualties?: Array<TflApiPresentationEntitiesAccidentStatsCasualty>;
		date?: Date | null;
		id?: number | null;
		lat?: number | null;
		location?: string | null;
		lon?: number | null;
		severity?: string | null;
		vehicles?: Array<TflApiPresentationEntitiesAccidentStatsVehicle>;
	}
	export interface TflApiPresentationEntitiesAccidentStatsAccidentDetailFormProperties {
		borough: FormControl<string | null | undefined>,
		date: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		lat: FormControl<number | null | undefined>,
		location: FormControl<string | null | undefined>,
		lon: FormControl<number | null | undefined>,
		severity: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesAccidentStatsAccidentDetailFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesAccidentStatsAccidentDetailFormProperties>({
			borough: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesAccidentStatsCasualty {
		age?: number | null;
		ageBand?: string | null;
		class?: string | null;
		mode?: string | null;
		severity?: string | null;
	}
	export interface TflApiPresentationEntitiesAccidentStatsCasualtyFormProperties {
		age: FormControl<number | null | undefined>,
		ageBand: FormControl<string | null | undefined>,
		class: FormControl<string | null | undefined>,
		mode: FormControl<string | null | undefined>,
		severity: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesAccidentStatsCasualtyFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesAccidentStatsCasualtyFormProperties>({
			age: new FormControl<number | null | undefined>(undefined),
			ageBand: new FormControl<string | null | undefined>(undefined),
			class: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesAccidentStatsVehicle {
		type?: string | null;
	}
	export interface TflApiPresentationEntitiesAccidentStatsVehicleFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesAccidentStatsVehicleFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesAccidentStatsVehicleFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesAccidentStatsAccidentStatsOrderedSummary {
		accidents?: number | null;
		borough?: string | null;
		year?: number | null;
	}
	export interface TflApiPresentationEntitiesAccidentStatsAccidentStatsOrderedSummaryFormProperties {
		accidents: FormControl<number | null | undefined>,
		borough: FormControl<string | null | undefined>,
		year: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesAccidentStatsAccidentStatsOrderedSummaryFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesAccidentStatsAccidentStatsOrderedSummaryFormProperties>({
			accidents: new FormControl<number | null | undefined>(undefined),
			borough: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesActiveServiceType {
		mode?: string | null;
		serviceType?: string | null;
	}
	export interface TflApiPresentationEntitiesActiveServiceTypeFormProperties {
		mode: FormControl<string | null | undefined>,
		serviceType: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesActiveServiceTypeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesActiveServiceTypeFormProperties>({
			mode: new FormControl<string | null | undefined>(undefined),
			serviceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesAdditionalProperties {
		category?: string | null;
		key?: string | null;
		modified?: Date | null;
		sourceSystemKey?: string | null;
		value?: string | null;
	}
	export interface TflApiPresentationEntitiesAdditionalPropertiesFormProperties {
		category: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		modified: FormControl<Date | null | undefined>,
		sourceSystemKey: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesAdditionalPropertiesFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesAdditionalPropertiesFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<Date | null | undefined>(undefined),
			sourceSystemKey: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DTO to capture the prediction details */
	export interface TflApiPresentationEntitiesArrivalDeparture {

		/** Reason for cancellation or delay */
		cause?: string | null;

		/** Status of departure */
		departureStatus?: TflApiPresentationEntitiesArrivalDepartureDepartureStatus | null;

		/** Name of the destination */
		destinationName?: string | null;

		/** Naptan Identifier for the prediction's destination */
		destinationNaptanId?: string | null;

		/** Estimated time of arrival */
		estimatedTimeOfArrival?: Date | null;

		/** Estimated time of arrival */
		estimatedTimeOfDeparture?: Date | null;

		/** Estimated time of arrival */
		minutesAndSecondsToArrival?: string | null;

		/** Estimated time of arrival */
		minutesAndSecondsToDeparture?: string | null;

		/** Identifier for the prediction */
		naptanId?: string | null;

		/** Platform name (for bus, this is the stop letter) */
		platformName?: string | null;

		/** Estimated time of arrival */
		scheduledTimeOfArrival?: Date | null;

		/** Estimated time of arrival */
		scheduledTimeOfDeparture?: Date | null;

		/** Station name */
		stationName?: string | null;
		timing?: TflApiPresentationEntitiesPredictionTiming;
	}

	/** DTO to capture the prediction details */
	export interface TflApiPresentationEntitiesArrivalDepartureFormProperties {

		/** Reason for cancellation or delay */
		cause: FormControl<string | null | undefined>,

		/** Status of departure */
		departureStatus: FormControl<TflApiPresentationEntitiesArrivalDepartureDepartureStatus | null | undefined>,

		/** Name of the destination */
		destinationName: FormControl<string | null | undefined>,

		/** Naptan Identifier for the prediction's destination */
		destinationNaptanId: FormControl<string | null | undefined>,

		/** Estimated time of arrival */
		estimatedTimeOfArrival: FormControl<Date | null | undefined>,

		/** Estimated time of arrival */
		estimatedTimeOfDeparture: FormControl<Date | null | undefined>,

		/** Estimated time of arrival */
		minutesAndSecondsToArrival: FormControl<string | null | undefined>,

		/** Estimated time of arrival */
		minutesAndSecondsToDeparture: FormControl<string | null | undefined>,

		/** Identifier for the prediction */
		naptanId: FormControl<string | null | undefined>,

		/** Platform name (for bus, this is the stop letter) */
		platformName: FormControl<string | null | undefined>,

		/** Estimated time of arrival */
		scheduledTimeOfArrival: FormControl<Date | null | undefined>,

		/** Estimated time of arrival */
		scheduledTimeOfDeparture: FormControl<Date | null | undefined>,

		/** Station name */
		stationName: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesArrivalDepartureFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesArrivalDepartureFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
			departureStatus: new FormControl<TflApiPresentationEntitiesArrivalDepartureDepartureStatus | null | undefined>(undefined),
			destinationName: new FormControl<string | null | undefined>(undefined),
			destinationNaptanId: new FormControl<string | null | undefined>(undefined),
			estimatedTimeOfArrival: new FormControl<Date | null | undefined>(undefined),
			estimatedTimeOfDeparture: new FormControl<Date | null | undefined>(undefined),
			minutesAndSecondsToArrival: new FormControl<string | null | undefined>(undefined),
			minutesAndSecondsToDeparture: new FormControl<string | null | undefined>(undefined),
			naptanId: new FormControl<string | null | undefined>(undefined),
			platformName: new FormControl<string | null | undefined>(undefined),
			scheduledTimeOfArrival: new FormControl<Date | null | undefined>(undefined),
			scheduledTimeOfDeparture: new FormControl<Date | null | undefined>(undefined),
			stationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TflApiPresentationEntitiesArrivalDepartureDepartureStatus { OnTime = 0, Delayed = 1, Cancelled = 2, NotStoppingAtStation = 3 }

	export interface TflApiPresentationEntitiesPredictionTiming {
		countdownServerAdjustment?: string | null;
		insert?: Date | null;
		read?: Date | null;
		received?: Date | null;
		sent?: Date | null;
		source?: Date | null;
	}
	export interface TflApiPresentationEntitiesPredictionTimingFormProperties {
		countdownServerAdjustment: FormControl<string | null | undefined>,
		insert: FormControl<Date | null | undefined>,
		read: FormControl<Date | null | undefined>,
		received: FormControl<Date | null | undefined>,
		sent: FormControl<Date | null | undefined>,
		source: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesPredictionTimingFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesPredictionTimingFormProperties>({
			countdownServerAdjustment: new FormControl<string | null | undefined>(undefined),
			insert: new FormControl<Date | null | undefined>(undefined),
			read: new FormControl<Date | null | undefined>(undefined),
			received: new FormControl<Date | null | undefined>(undefined),
			sent: new FormControl<Date | null | undefined>(undefined),
			source: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DTO to capture the prediction details */
	export interface TflApiPresentationEntitiesArrivalDepartureWithLine {

		/** Reason for cancellation or delay */
		cause?: string | null;

		/** Status of departure */
		departureStatus?: TflApiPresentationEntitiesArrivalDepartureDepartureStatus | null;

		/** Name of the destination */
		destinationName?: string | null;

		/** Naptan Identifier for the prediction's destination */
		destinationNaptanId?: string | null;

		/** Estimated time of arrival */
		estimatedTimeOfArrival?: Date | null;

		/** Estimated time of arrival */
		estimatedTimeOfDeparture?: Date | null;

		/** Train operating company name */
		lineId?: string | null;

		/** Train operating company code */
		lineName?: string | null;

		/** Estimated time of arrival */
		minutesAndSecondsToArrival?: string | null;

		/** Estimated time of arrival */
		minutesAndSecondsToDeparture?: string | null;

		/** Identifier for the prediction */
		naptanId?: string | null;

		/** Platform name (for bus, this is the stop letter) */
		platformName?: string | null;

		/** Estimated time of arrival */
		scheduledTimeOfArrival?: Date | null;

		/** Estimated time of arrival */
		scheduledTimeOfDeparture?: Date | null;

		/** Station name */
		stationName?: string | null;
		timing?: TflApiPresentationEntitiesPredictionTiming;
	}

	/** DTO to capture the prediction details */
	export interface TflApiPresentationEntitiesArrivalDepartureWithLineFormProperties {

		/** Reason for cancellation or delay */
		cause: FormControl<string | null | undefined>,

		/** Status of departure */
		departureStatus: FormControl<TflApiPresentationEntitiesArrivalDepartureDepartureStatus | null | undefined>,

		/** Name of the destination */
		destinationName: FormControl<string | null | undefined>,

		/** Naptan Identifier for the prediction's destination */
		destinationNaptanId: FormControl<string | null | undefined>,

		/** Estimated time of arrival */
		estimatedTimeOfArrival: FormControl<Date | null | undefined>,

		/** Estimated time of arrival */
		estimatedTimeOfDeparture: FormControl<Date | null | undefined>,

		/** Train operating company name */
		lineId: FormControl<string | null | undefined>,

		/** Train operating company code */
		lineName: FormControl<string | null | undefined>,

		/** Estimated time of arrival */
		minutesAndSecondsToArrival: FormControl<string | null | undefined>,

		/** Estimated time of arrival */
		minutesAndSecondsToDeparture: FormControl<string | null | undefined>,

		/** Identifier for the prediction */
		naptanId: FormControl<string | null | undefined>,

		/** Platform name (for bus, this is the stop letter) */
		platformName: FormControl<string | null | undefined>,

		/** Estimated time of arrival */
		scheduledTimeOfArrival: FormControl<Date | null | undefined>,

		/** Estimated time of arrival */
		scheduledTimeOfDeparture: FormControl<Date | null | undefined>,

		/** Station name */
		stationName: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesArrivalDepartureWithLineFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesArrivalDepartureWithLineFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
			departureStatus: new FormControl<TflApiPresentationEntitiesArrivalDepartureDepartureStatus | null | undefined>(undefined),
			destinationName: new FormControl<string | null | undefined>(undefined),
			destinationNaptanId: new FormControl<string | null | undefined>(undefined),
			estimatedTimeOfArrival: new FormControl<Date | null | undefined>(undefined),
			estimatedTimeOfDeparture: new FormControl<Date | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined),
			lineName: new FormControl<string | null | undefined>(undefined),
			minutesAndSecondsToArrival: new FormControl<string | null | undefined>(undefined),
			minutesAndSecondsToDeparture: new FormControl<string | null | undefined>(undefined),
			naptanId: new FormControl<string | null | undefined>(undefined),
			platformName: new FormControl<string | null | undefined>(undefined),
			scheduledTimeOfArrival: new FormControl<Date | null | undefined>(undefined),
			scheduledTimeOfDeparture: new FormControl<Date | null | undefined>(undefined),
			stationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesBay {
		bayCount?: number | null;
		bayType?: string | null;
		free?: number | null;
		occupied?: number | null;
	}
	export interface TflApiPresentationEntitiesBayFormProperties {
		bayCount: FormControl<number | null | undefined>,
		bayType: FormControl<string | null | undefined>,
		free: FormControl<number | null | undefined>,
		occupied: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesBayFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesBayFormProperties>({
			bayCount: new FormControl<number | null | undefined>(undefined),
			bayType: new FormControl<string | null | undefined>(undefined),
			free: new FormControl<number | null | undefined>(undefined),
			occupied: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Bike point occupancy */
	export interface TflApiPresentationEntitiesBikePointOccupancy {

		/** Total bike counts */
		bikesCount?: number | null;

		/** Total ebikes count */
		eBikesCount?: number | null;

		/** Empty docks */
		emptyDocks?: number | null;

		/** Id of the bike point such as BikePoints_1 */
		id?: string | null;

		/** Name / Common name of the bike point */
		name?: string | null;

		/** Total standard bikes count */
		standardBikesCount?: number | null;

		/** Total docks available */
		totalDocks?: number | null;
	}

	/** Bike point occupancy */
	export interface TflApiPresentationEntitiesBikePointOccupancyFormProperties {

		/** Total bike counts */
		bikesCount: FormControl<number | null | undefined>,

		/** Total ebikes count */
		eBikesCount: FormControl<number | null | undefined>,

		/** Empty docks */
		emptyDocks: FormControl<number | null | undefined>,

		/** Id of the bike point such as BikePoints_1 */
		id: FormControl<string | null | undefined>,

		/** Name / Common name of the bike point */
		name: FormControl<string | null | undefined>,

		/** Total standard bikes count */
		standardBikesCount: FormControl<number | null | undefined>,

		/** Total docks available */
		totalDocks: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesBikePointOccupancyFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesBikePointOccupancyFormProperties>({
			bikesCount: new FormControl<number | null | undefined>(undefined),
			eBikesCount: new FormControl<number | null | undefined>(undefined),
			emptyDocks: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			standardBikesCount: new FormControl<number | null | undefined>(undefined),
			totalDocks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesCarParkOccupancy {
		bays?: Array<TflApiPresentationEntitiesBay>;
		carParkDetailsUrl?: string | null;
		id?: string | null;
		name?: string | null;
	}
	export interface TflApiPresentationEntitiesCarParkOccupancyFormProperties {
		carParkDetailsUrl: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesCarParkOccupancyFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesCarParkOccupancyFormProperties>({
			carParkDetailsUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesChargeConnectorOccupancy {
		id?: number | null;
		sourceSystemPlaceId?: string | null;
		status?: string | null;
	}
	export interface TflApiPresentationEntitiesChargeConnectorOccupancyFormProperties {
		id: FormControl<number | null | undefined>,
		sourceSystemPlaceId: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesChargeConnectorOccupancyFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesChargeConnectorOccupancyFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			sourceSystemPlaceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesCoordinate {
		easting?: number | null;
		latitude?: number | null;
		longitude?: number | null;
		northing?: number | null;
		xCoord?: number | null;
		yCoord?: number | null;
	}
	export interface TflApiPresentationEntitiesCoordinateFormProperties {
		easting: FormControl<number | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
		northing: FormControl<number | null | undefined>,
		xCoord: FormControl<number | null | undefined>,
		yCoord: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesCoordinateFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesCoordinateFormProperties>({
			easting: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			northing: new FormControl<number | null | undefined>(undefined),
			xCoord: new FormControl<number | null | undefined>(undefined),
			yCoord: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesCrowding {

		/** Busiest times at a station (static information) */
		passengerFlows?: Array<TflApiPresentationEntitiesPassengerFlow>;

		/** Train Loading on a scale 1-6, 1 being "Very quiet" and 6 being "Exceptionally busy" (static information) */
		trainLoadings?: Array<TflApiPresentationEntitiesTrainLoading>;
	}
	export interface TflApiPresentationEntitiesCrowdingFormProperties {
	}
	export function CreateTflApiPresentationEntitiesCrowdingFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesCrowdingFormProperties>({
		});

	}

	export interface TflApiPresentationEntitiesPassengerFlow {

		/** Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc. */
		timeSlice?: string | null;

		/** Count of passenger flow towards a platform */
		value?: number | null;
	}
	export interface TflApiPresentationEntitiesPassengerFlowFormProperties {

		/** Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc. */
		timeSlice: FormControl<string | null | undefined>,

		/** Count of passenger flow towards a platform */
		value: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesPassengerFlowFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesPassengerFlowFormProperties>({
			timeSlice: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesTrainLoading {

		/** Direction in regards to Journey Planner i.e. inbound or outbound */
		direction?: string | null;

		/** The Line Name e.g. "Victoria" */
		line?: string | null;

		/** Direction of the Line e.g. NB, SB, WB etc. */
		lineDirection?: string | null;

		/** Naptan of the adjacent station */
		naptanTo?: string | null;

		/** Direction displayed on the platform e.g. NB, SB, WB etc. */
		platformDirection?: string | null;

		/** Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc. */
		timeSlice?: string | null;

		/**
		 * Scale between 1-6,
		 * 1 = Very quiet, 2 = Quiet, 3 = Fairly busy, 4 = Busy, 5 = Very busy, 6 = Exceptionally busy
		 */
		value?: number | null;
	}
	export interface TflApiPresentationEntitiesTrainLoadingFormProperties {

		/** Direction in regards to Journey Planner i.e. inbound or outbound */
		direction: FormControl<string | null | undefined>,

		/** The Line Name e.g. "Victoria" */
		line: FormControl<string | null | undefined>,

		/** Direction of the Line e.g. NB, SB, WB etc. */
		lineDirection: FormControl<string | null | undefined>,

		/** Naptan of the adjacent station */
		naptanTo: FormControl<string | null | undefined>,

		/** Direction displayed on the platform e.g. NB, SB, WB etc. */
		platformDirection: FormControl<string | null | undefined>,

		/** Time in 24hr format with 15 minute intervals e.g. 0500-0515, 0515-0530 etc. */
		timeSlice: FormControl<string | null | undefined>,

		/**
		 * Scale between 1-6,
		 * 1 = Very quiet, 2 = Quiet, 3 = Fairly busy, 4 = Busy, 5 = Very busy, 6 = Exceptionally busy
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesTrainLoadingFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesTrainLoadingFormProperties>({
			direction: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
			lineDirection: new FormControl<string | null | undefined>(undefined),
			naptanTo: new FormControl<string | null | undefined>(undefined),
			platformDirection: new FormControl<string | null | undefined>(undefined),
			timeSlice: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesCycleSuperhighway {
		geography?: SystemDataSpatialDbGeography;

		/** The Id */
		id?: string | null;

		/** The long label to show on maps when zoomed in */
		label?: string | null;

		/** The short label to show on maps */
		labelShort?: string | null;

		/** When the data was last updated */
		modified?: Date | null;

		/** Type of cycle route e.g CycleSuperhighways, Quietways, MiniHollands etc */
		routeType?: TflApiPresentationEntitiesCycleSuperhighwayRouteType | null;

		/** True if the route is split into segments */
		segmented?: boolean | null;

		/** Cycle route status i.e Proposed, Existing etc */
		status?: TflApiPresentationEntitiesCycleSuperhighwayStatus | null;
	}
	export interface TflApiPresentationEntitiesCycleSuperhighwayFormProperties {

		/** The Id */
		id: FormControl<string | null | undefined>,

		/** The long label to show on maps when zoomed in */
		label: FormControl<string | null | undefined>,

		/** The short label to show on maps */
		labelShort: FormControl<string | null | undefined>,

		/** When the data was last updated */
		modified: FormControl<Date | null | undefined>,

		/** Type of cycle route e.g CycleSuperhighways, Quietways, MiniHollands etc */
		routeType: FormControl<TflApiPresentationEntitiesCycleSuperhighwayRouteType | null | undefined>,

		/** True if the route is split into segments */
		segmented: FormControl<boolean | null | undefined>,

		/** Cycle route status i.e Proposed, Existing etc */
		status: FormControl<TflApiPresentationEntitiesCycleSuperhighwayStatus | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesCycleSuperhighwayFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesCycleSuperhighwayFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			labelShort: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<Date | null | undefined>(undefined),
			routeType: new FormControl<TflApiPresentationEntitiesCycleSuperhighwayRouteType | null | undefined>(undefined),
			segmented: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<TflApiPresentationEntitiesCycleSuperhighwayStatus | null | undefined>(undefined),
		});

	}

	export enum TflApiPresentationEntitiesCycleSuperhighwayRouteType { Unknown = 0, All = 1, 'Cycle Superhighways' = 2, Quietways = 3, Cycleways = 4, 'Mini-Hollands' = 5, 'Central London Grid' = 6, 'Streetspace Route' = 7 }

	export enum TflApiPresentationEntitiesCycleSuperhighwayStatus { Unknown = 0, All = 1, Open = 2, 'In Progress' = 3, Planned = 4, 'Planned - Subject to feasibility and consultation.' = 5, 'Not Open' = 6 }

	export interface TflApiPresentationEntitiesDisruptedPoint {
		additionalInformation?: string | null;
		appearance?: string | null;
		atcoCode?: string | null;
		commonName?: string | null;
		description?: string | null;
		fromDate?: Date | null;
		mode?: string | null;
		stationAtcoCode?: string | null;
		toDate?: Date | null;
		type?: string | null;
	}
	export interface TflApiPresentationEntitiesDisruptedPointFormProperties {
		additionalInformation: FormControl<string | null | undefined>,
		appearance: FormControl<string | null | undefined>,
		atcoCode: FormControl<string | null | undefined>,
		commonName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		fromDate: FormControl<Date | null | undefined>,
		mode: FormControl<string | null | undefined>,
		stationAtcoCode: FormControl<string | null | undefined>,
		toDate: FormControl<Date | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesDisruptedPointFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesDisruptedPointFormProperties>({
			additionalInformation: new FormControl<string | null | undefined>(undefined),
			appearance: new FormControl<string | null | undefined>(undefined),
			atcoCode: new FormControl<string | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fromDate: new FormControl<Date | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			stationAtcoCode: new FormControl<string | null | undefined>(undefined),
			toDate: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** keep old RouteSection name so as not to break contract */
	export interface TflApiPresentationEntitiesDisruptedRoute {

		/** The name of the Destination StopPoint */
		destinationName?: string | null;

		/** Inbound or Outbound */
		direction?: string | null;

		/** The Id of the route */
		id?: string | null;

		/** Whether this represents the entire route section */
		isEntireRouteSection?: boolean | null;

		/** The Id of the Line */
		lineId?: string | null;

		/** The co-ordinates of the route's path as a geoJSON lineString */
		lineString?: string | null;

		/** Name such as "72" */
		name?: string | null;

		/** The name of the Origin StopPoint */
		originationName?: string | null;

		/** The route code */
		routeCode?: string | null;
		routeSectionNaptanEntrySequence?: Array<TflApiPresentationEntitiesRouteSectionNaptanEntrySequence>;

		/** The DateTime that the Service containing this Route is valid from. */
		validFrom?: Date | null;

		/** The DateTime that the Service containing this Route is valid until. */
		validTo?: Date | null;
		via?: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence;
	}

	/** keep old RouteSection name so as not to break contract */
	export interface TflApiPresentationEntitiesDisruptedRouteFormProperties {

		/** The name of the Destination StopPoint */
		destinationName: FormControl<string | null | undefined>,

		/** Inbound or Outbound */
		direction: FormControl<string | null | undefined>,

		/** The Id of the route */
		id: FormControl<string | null | undefined>,

		/** Whether this represents the entire route section */
		isEntireRouteSection: FormControl<boolean | null | undefined>,

		/** The Id of the Line */
		lineId: FormControl<string | null | undefined>,

		/** The co-ordinates of the route's path as a geoJSON lineString */
		lineString: FormControl<string | null | undefined>,

		/** Name such as "72" */
		name: FormControl<string | null | undefined>,

		/** The name of the Origin StopPoint */
		originationName: FormControl<string | null | undefined>,

		/** The route code */
		routeCode: FormControl<string | null | undefined>,

		/** The DateTime that the Service containing this Route is valid from. */
		validFrom: FormControl<Date | null | undefined>,

		/** The DateTime that the Service containing this Route is valid until. */
		validTo: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesDisruptedRouteFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesDisruptedRouteFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isEntireRouteSection: new FormControl<boolean | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined),
			lineString: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			originationName: new FormControl<string | null | undefined>(undefined),
			routeCode: new FormControl<string | null | undefined>(undefined),
			validFrom: new FormControl<Date | null | undefined>(undefined),
			validTo: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRouteSectionNaptanEntrySequence {
		ordinal?: number | null;
		stopPoint?: TflApiPresentationEntitiesStopPoint;
	}
	export interface TflApiPresentationEntitiesRouteSectionNaptanEntrySequenceFormProperties {
		ordinal: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRouteSectionNaptanEntrySequenceFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRouteSectionNaptanEntrySequenceFormProperties>({
			ordinal: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesStopPoint {
		accessibilitySummary?: string | null;

		/** A bag of additional key/value pairs with extra information about this place. */
		additionalProperties?: Array<TflApiPresentationEntitiesAdditionalProperties>;
		children?: Array<TflApiPresentationEntitiesPlace>;
		childrenUrls?: Array<string>;

		/** A human readable name. */
		commonName?: string | null;

		/**
		 * The distance of the place from its search point, if this is the result
		 * of a geographical search, otherwise zero.
		 */
		distance?: number | null;
		fullName?: string | null;
		hubNaptanCode?: string | null;
		icsCode?: string | null;

		/** A unique identifier. */
		id?: string | null;

		/** The indicator of the stop point e.g. "Stop K" */
		indicator?: string | null;
		individualStopId?: string | null;

		/** WGS84 latitude of the location. */
		lat?: number | null;
		lineGroup?: Array<TflApiPresentationEntitiesLineGroup>;
		lineModeGroups?: Array<TflApiPresentationEntitiesLineModeGroup>;
		lines?: Array<TflApiPresentationEntitiesIdentifier>;

		/** WGS84 longitude of the location. */
		lon?: number | null;
		modes?: Array<string>;
		naptanId?: string | null;
		naptanMode?: string | null;

		/** The type of Place. See /Place/Meta/placeTypes for possible values. */
		placeType?: string | null;
		platformName?: string | null;
		smsCode?: string | null;
		stationNaptan?: string | null;
		status?: boolean | null;

		/** The stop letter, if it could be cleansed from the Indicator e.g. "K" */
		stopLetter?: string | null;
		stopType?: string | null;

		/** The unique location of this resource. */
		url?: string | null;
	}
	export interface TflApiPresentationEntitiesStopPointFormProperties {
		accessibilitySummary: FormControl<string | null | undefined>,

		/** A human readable name. */
		commonName: FormControl<string | null | undefined>,

		/**
		 * The distance of the place from its search point, if this is the result
		 * of a geographical search, otherwise zero.
		 */
		distance: FormControl<number | null | undefined>,
		fullName: FormControl<string | null | undefined>,
		hubNaptanCode: FormControl<string | null | undefined>,
		icsCode: FormControl<string | null | undefined>,

		/** A unique identifier. */
		id: FormControl<string | null | undefined>,

		/** The indicator of the stop point e.g. "Stop K" */
		indicator: FormControl<string | null | undefined>,
		individualStopId: FormControl<string | null | undefined>,

		/** WGS84 latitude of the location. */
		lat: FormControl<number | null | undefined>,

		/** WGS84 longitude of the location. */
		lon: FormControl<number | null | undefined>,
		naptanId: FormControl<string | null | undefined>,
		naptanMode: FormControl<string | null | undefined>,

		/** The type of Place. See /Place/Meta/placeTypes for possible values. */
		placeType: FormControl<string | null | undefined>,
		platformName: FormControl<string | null | undefined>,
		smsCode: FormControl<string | null | undefined>,
		stationNaptan: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,

		/** The stop letter, if it could be cleansed from the Indicator e.g. "K" */
		stopLetter: FormControl<string | null | undefined>,
		stopType: FormControl<string | null | undefined>,

		/** The unique location of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesStopPointFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesStopPointFormProperties>({
			accessibilitySummary: new FormControl<string | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			hubNaptanCode: new FormControl<string | null | undefined>(undefined),
			icsCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			indicator: new FormControl<string | null | undefined>(undefined),
			individualStopId: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			naptanId: new FormControl<string | null | undefined>(undefined),
			naptanMode: new FormControl<string | null | undefined>(undefined),
			placeType: new FormControl<string | null | undefined>(undefined),
			platformName: new FormControl<string | null | undefined>(undefined),
			smsCode: new FormControl<string | null | undefined>(undefined),
			stationNaptan: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			stopLetter: new FormControl<string | null | undefined>(undefined),
			stopType: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesPlace {

		/** A bag of additional key/value pairs with extra information about this place. */
		additionalProperties?: Array<TflApiPresentationEntitiesAdditionalProperties>;
		children?: Array<TflApiPresentationEntitiesPlace>;
		childrenUrls?: Array<string>;

		/** A human readable name. */
		commonName?: string | null;

		/**
		 * The distance of the place from its search point, if this is the result
		 * of a geographical search, otherwise zero.
		 */
		distance?: number | null;

		/** A unique identifier. */
		id?: string | null;

		/** WGS84 latitude of the location. */
		lat?: number | null;

		/** WGS84 longitude of the location. */
		lon?: number | null;

		/** The type of Place. See /Place/Meta/placeTypes for possible values. */
		placeType?: string | null;

		/** The unique location of this resource. */
		url?: string | null;
	}
	export interface TflApiPresentationEntitiesPlaceFormProperties {

		/** A human readable name. */
		commonName: FormControl<string | null | undefined>,

		/**
		 * The distance of the place from its search point, if this is the result
		 * of a geographical search, otherwise zero.
		 */
		distance: FormControl<number | null | undefined>,

		/** A unique identifier. */
		id: FormControl<string | null | undefined>,

		/** WGS84 latitude of the location. */
		lat: FormControl<number | null | undefined>,

		/** WGS84 longitude of the location. */
		lon: FormControl<number | null | undefined>,

		/** The type of Place. See /Place/Meta/placeTypes for possible values. */
		placeType: FormControl<string | null | undefined>,

		/** The unique location of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesPlaceFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesPlaceFormProperties>({
			commonName: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			placeType: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesLineGroup {
		lineIdentifier?: Array<string>;
		naptanIdReference?: string | null;
		stationAtcoCode?: string | null;
	}
	export interface TflApiPresentationEntitiesLineGroupFormProperties {
		naptanIdReference: FormControl<string | null | undefined>,
		stationAtcoCode: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesLineGroupFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesLineGroupFormProperties>({
			naptanIdReference: new FormControl<string | null | undefined>(undefined),
			stationAtcoCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesLineModeGroup {
		lineIdentifier?: Array<string>;
		modeName?: string | null;
	}
	export interface TflApiPresentationEntitiesLineModeGroupFormProperties {
		modeName: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesLineModeGroupFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesLineModeGroupFormProperties>({
			modeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesIdentifier {
		crowding?: TflApiPresentationEntitiesCrowding;
		fullName?: string | null;
		id?: string | null;
		motType?: string | null;
		name?: string | null;
		network?: string | null;
		routeType?: TflApiPresentationEntitiesCycleSuperhighwayRouteType | null;
		status?: TflApiPresentationEntitiesCycleSuperhighwayStatus | null;
		type?: string | null;
		uri?: string | null;
	}
	export interface TflApiPresentationEntitiesIdentifierFormProperties {
		fullName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		motType: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		network: FormControl<string | null | undefined>,
		routeType: FormControl<TflApiPresentationEntitiesCycleSuperhighwayRouteType | null | undefined>,
		status: FormControl<TflApiPresentationEntitiesCycleSuperhighwayStatus | null | undefined>,
		type: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesIdentifierFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesIdentifierFormProperties>({
			fullName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			motType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			routeType: new FormControl<TflApiPresentationEntitiesCycleSuperhighwayRouteType | null | undefined>(undefined),
			status: new FormControl<TflApiPresentationEntitiesCycleSuperhighwayStatus | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a disruption to a route within the transport network. */
	export interface TflApiPresentationEntitiesDisruption {

		/** Gets or sets the additionaInfo of this disruption. */
		additionalInfo?: string | null;

		/** Gets or sets the routes affected by this disruption */
		affectedRoutes?: Array<TflApiPresentationEntitiesDisruptedRoute>;

		/** Gets or sets the stops affected by this disruption */
		affectedStops?: Array<TflApiPresentationEntitiesStopPoint>;

		/** Gets or sets the category of this dispruption. */
		category?: TflApiPresentationEntitiesDisruptionCategory | null;

		/** Gets or sets the description of the category. */
		categoryDescription?: string | null;

		/** Text describing the closure type */
		closureText?: string | null;

		/** Gets or sets the date/time when this disruption was created. */
		created?: Date | null;

		/** Gets or sets the description of this disruption. */
		description?: string | null;

		/** Gets or sets the date/time when this disruption was last updated. */
		lastUpdate?: Date | null;

		/** Gets or sets the summary of this disruption. */
		summary?: string | null;

		/** Gets or sets the disruption type of this dispruption. */
		type?: string | null;
	}

	/** Represents a disruption to a route within the transport network. */
	export interface TflApiPresentationEntitiesDisruptionFormProperties {

		/** Gets or sets the additionaInfo of this disruption. */
		additionalInfo: FormControl<string | null | undefined>,

		/** Gets or sets the category of this dispruption. */
		category: FormControl<TflApiPresentationEntitiesDisruptionCategory | null | undefined>,

		/** Gets or sets the description of the category. */
		categoryDescription: FormControl<string | null | undefined>,

		/** Text describing the closure type */
		closureText: FormControl<string | null | undefined>,

		/** Gets or sets the date/time when this disruption was created. */
		created: FormControl<Date | null | undefined>,

		/** Gets or sets the description of this disruption. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the date/time when this disruption was last updated. */
		lastUpdate: FormControl<Date | null | undefined>,

		/** Gets or sets the summary of this disruption. */
		summary: FormControl<string | null | undefined>,

		/** Gets or sets the disruption type of this dispruption. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesDisruptionFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesDisruptionFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<TflApiPresentationEntitiesDisruptionCategory | null | undefined>(undefined),
			categoryDescription: new FormControl<string | null | undefined>(undefined),
			closureText: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TflApiPresentationEntitiesDisruptionCategory { Undefined = 0, RealTime = 1, PlannedWork = 2, Information = 3, Event = 4, Crowding = 5, StatusAlert = 6 }

	export interface TflApiPresentationEntitiesFaresFare {
		cap?: number | null;
		cost?: string | null;
		description?: string | null;
		id?: number | null;
		mode?: string | null;
		passengerType?: string | null;
		ticketTime?: string | null;
		ticketType?: string | null;
		validFrom?: Date | null;
		validUntil?: Date | null;
		zone?: string | null;
	}
	export interface TflApiPresentationEntitiesFaresFareFormProperties {
		cap: FormControl<number | null | undefined>,
		cost: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		mode: FormControl<string | null | undefined>,
		passengerType: FormControl<string | null | undefined>,
		ticketTime: FormControl<string | null | undefined>,
		ticketType: FormControl<string | null | undefined>,
		validFrom: FormControl<Date | null | undefined>,
		validUntil: FormControl<Date | null | undefined>,
		zone: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresFareFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresFareFormProperties>({
			cap: new FormControl<number | null | undefined>(undefined),
			cost: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			passengerType: new FormControl<string | null | undefined>(undefined),
			ticketTime: new FormControl<string | null | undefined>(undefined),
			ticketType: new FormControl<string | null | undefined>(undefined),
			validFrom: new FormControl<Date | null | undefined>(undefined),
			validUntil: new FormControl<Date | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresFareBounds {
		description?: string | null;
		displayName?: string | null;
		displayOrder?: number | null;
		from?: string | null;
		id?: number | null;
		isPopularFare?: boolean | null;
		isPopularTravelCard?: boolean | null;
		isTour?: boolean | null;
		messages?: Array<TflApiPresentationEntitiesMessage>;
		operator?: string | null;
		routeCode?: string | null;
		to?: string | null;
		via?: string | null;
	}
	export interface TflApiPresentationEntitiesFaresFareBoundsFormProperties {
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		displayOrder: FormControl<number | null | undefined>,
		from: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		isPopularFare: FormControl<boolean | null | undefined>,
		isPopularTravelCard: FormControl<boolean | null | undefined>,
		isTour: FormControl<boolean | null | undefined>,
		operator: FormControl<string | null | undefined>,
		routeCode: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		via: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresFareBoundsFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresFareBoundsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isPopularFare: new FormControl<boolean | null | undefined>(undefined),
			isPopularTravelCard: new FormControl<boolean | null | undefined>(undefined),
			isTour: new FormControl<boolean | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			routeCode: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			via: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesMessage {
		bulletOrder?: number | null;
		header?: boolean | null;
		linkText?: string | null;
		messageText?: string | null;
		url?: string | null;
	}
	export interface TflApiPresentationEntitiesMessageFormProperties {
		bulletOrder: FormControl<number | null | undefined>,
		header: FormControl<boolean | null | undefined>,
		linkText: FormControl<string | null | undefined>,
		messageText: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesMessageFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesMessageFormProperties>({
			bulletOrder: new FormControl<number | null | undefined>(undefined),
			header: new FormControl<boolean | null | undefined>(undefined),
			linkText: new FormControl<string | null | undefined>(undefined),
			messageText: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresFareDetails {
		boundsId?: number | null;
		contactlessPAYGOnlyFare?: boolean | null;
		displayName?: string | null;
		displayOrder?: number | null;
		endDate?: Date | null;
		from?: string | null;
		fromStation?: string | null;
		isTour?: boolean | null;
		messages?: Array<TflApiPresentationEntitiesMessage>;
		mode?: string | null;
		operator?: string | null;
		passengerType?: string | null;
		routeCode?: string | null;
		routeDescription?: string | null;
		specialFare?: boolean | null;
		startDate?: Date | null;
		throughFare?: boolean | null;
		ticketsAvailable?: Array<TflApiPresentationEntitiesFaresTicket>;
		to?: string | null;
		toStation?: string | null;
		validatorInformation?: string | null;
		via?: string | null;
	}
	export interface TflApiPresentationEntitiesFaresFareDetailsFormProperties {
		boundsId: FormControl<number | null | undefined>,
		contactlessPAYGOnlyFare: FormControl<boolean | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		displayOrder: FormControl<number | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		from: FormControl<string | null | undefined>,
		fromStation: FormControl<string | null | undefined>,
		isTour: FormControl<boolean | null | undefined>,
		mode: FormControl<string | null | undefined>,
		operator: FormControl<string | null | undefined>,
		passengerType: FormControl<string | null | undefined>,
		routeCode: FormControl<string | null | undefined>,
		routeDescription: FormControl<string | null | undefined>,
		specialFare: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		throughFare: FormControl<boolean | null | undefined>,
		to: FormControl<string | null | undefined>,
		toStation: FormControl<string | null | undefined>,
		validatorInformation: FormControl<string | null | undefined>,
		via: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresFareDetailsFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresFareDetailsFormProperties>({
			boundsId: new FormControl<number | null | undefined>(undefined),
			contactlessPAYGOnlyFare: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			fromStation: new FormControl<string | null | undefined>(undefined),
			isTour: new FormControl<boolean | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			passengerType: new FormControl<string | null | undefined>(undefined),
			routeCode: new FormControl<string | null | undefined>(undefined),
			routeDescription: new FormControl<string | null | undefined>(undefined),
			specialFare: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			throughFare: new FormControl<boolean | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			toStation: new FormControl<string | null | undefined>(undefined),
			validatorInformation: new FormControl<string | null | undefined>(undefined),
			via: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresTicket {
		cost?: string | null;
		description?: string | null;
		displayOrder?: number | null;
		messages?: Array<TflApiPresentationEntitiesMessage>;
		mode?: string | null;
		passengerType?: string | null;
		ticketTime?: TflApiPresentationEntitiesFaresTicketTime;
		ticketType?: TflApiPresentationEntitiesFaresTicketType;
	}
	export interface TflApiPresentationEntitiesFaresTicketFormProperties {
		cost: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayOrder: FormControl<number | null | undefined>,
		mode: FormControl<string | null | undefined>,
		passengerType: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresTicketFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresTicketFormProperties>({
			cost: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			passengerType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresTicketTime {
		description?: string | null;
		type?: string | null;
	}
	export interface TflApiPresentationEntitiesFaresTicketTimeFormProperties {
		description: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresTicketTimeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresTicketTimeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresTicketType {
		description?: string | null;
		type?: string | null;
	}
	export interface TflApiPresentationEntitiesFaresTicketTypeFormProperties {
		description: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresTicketTypeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresTicketTypeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresFareStation {
		atcoCode?: string | null;
		commonName?: string | null;
		fareCategory?: TflApiPresentationEntitiesFaresFareStationFareCategory | null;
	}
	export interface TflApiPresentationEntitiesFaresFareStationFormProperties {
		atcoCode: FormControl<string | null | undefined>,
		commonName: FormControl<string | null | undefined>,
		fareCategory: FormControl<TflApiPresentationEntitiesFaresFareStationFareCategory | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresFareStationFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresFareStationFormProperties>({
			atcoCode: new FormControl<string | null | undefined>(undefined),
			commonName: new FormControl<string | null | undefined>(undefined),
			fareCategory: new FormControl<TflApiPresentationEntitiesFaresFareStationFareCategory | null | undefined>(undefined),
		});

	}

	export enum TflApiPresentationEntitiesFaresFareStationFareCategory { Cash = 0, Oyster = 1, Contactless = 2, ContactlessOnly = 3, All = 4 }

	export interface TflApiPresentationEntitiesFaresFaresMode {
		description?: string | null;
		id?: number | null;
		name?: string | null;
	}
	export interface TflApiPresentationEntitiesFaresFaresModeFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresFaresModeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresFaresModeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresFaresPeriod {
		endDate?: Date | null;
		id?: number | null;
		isFuture?: boolean | null;
		startDate?: Date | null;
		viewableDate?: Date | null;
	}
	export interface TflApiPresentationEntitiesFaresFaresPeriodFormProperties {
		endDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		isFuture: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		viewableDate: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresFaresPeriodFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresFaresPeriodFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isFuture: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			viewableDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresFaresSection {
		header?: string | null;
		index?: number | null;
		journey?: TflApiPresentationEntitiesFaresJourney;
		messages?: Array<TflApiPresentationEntitiesMessage>;
		rows?: Array<TflApiPresentationEntitiesFaresFareDetails>;
	}
	export interface TflApiPresentationEntitiesFaresFaresSectionFormProperties {
		header: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresFaresSectionFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresFaresSectionFormProperties>({
			header: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresJourney {
		fromStation?: TflApiPresentationEntitiesFaresFareStation;
		toStation?: TflApiPresentationEntitiesFaresFareStation;
	}
	export interface TflApiPresentationEntitiesFaresJourneyFormProperties {
	}
	export function CreateTflApiPresentationEntitiesFaresJourneyFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresJourneyFormProperties>({
		});

	}

	export interface TflApiPresentationEntitiesFaresPassengerType {
		description?: string | null;
		displayName?: string | null;
		displayOrder?: number | null;
		type?: string | null;
	}
	export interface TflApiPresentationEntitiesFaresPassengerTypeFormProperties {
		description: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		displayOrder: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresPassengerTypeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresPassengerTypeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresRecommendation {
		cost?: string | null;
		discountCard?: string | null;
		fareType?: string | null;
		gettingYourTicket?: Array<TflApiPresentationEntitiesMessage>;
		id?: number | null;
		keyFeatures?: Array<TflApiPresentationEntitiesMessage>;
		notes?: Array<TflApiPresentationEntitiesMessage>;
		priceComparison?: string | null;
		priceDescription?: string | null;
		product?: string | null;
		productType?: string | null;
		rank?: number | null;
		recommendedTopUp?: string | null;
		rule?: number | null;
		singleFare?: number | null;
		ticketTime?: string | null;
		ticketType?: string | null;
		zones?: string | null;
	}
	export interface TflApiPresentationEntitiesFaresRecommendationFormProperties {
		cost: FormControl<string | null | undefined>,
		discountCard: FormControl<string | null | undefined>,
		fareType: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		priceComparison: FormControl<string | null | undefined>,
		priceDescription: FormControl<string | null | undefined>,
		product: FormControl<string | null | undefined>,
		productType: FormControl<string | null | undefined>,
		rank: FormControl<number | null | undefined>,
		recommendedTopUp: FormControl<string | null | undefined>,
		rule: FormControl<number | null | undefined>,
		singleFare: FormControl<number | null | undefined>,
		ticketTime: FormControl<string | null | undefined>,
		ticketType: FormControl<string | null | undefined>,
		zones: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesFaresRecommendationFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresRecommendationFormProperties>({
			cost: new FormControl<string | null | undefined>(undefined),
			discountCard: new FormControl<string | null | undefined>(undefined),
			fareType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			priceComparison: new FormControl<string | null | undefined>(undefined),
			priceDescription: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			productType: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			recommendedTopUp: new FormControl<string | null | undefined>(undefined),
			rule: new FormControl<number | null | undefined>(undefined),
			singleFare: new FormControl<number | null | undefined>(undefined),
			ticketTime: new FormControl<string | null | undefined>(undefined),
			ticketType: new FormControl<string | null | undefined>(undefined),
			zones: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesFaresRecommendationResponse {
		recommendations?: Array<TflApiPresentationEntitiesFaresRecommendation>;
	}
	export interface TflApiPresentationEntitiesFaresRecommendationResponseFormProperties {
	}
	export function CreateTflApiPresentationEntitiesFaresRecommendationResponseFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesFaresRecommendationResponseFormProperties>({
		});

	}

	export interface TflApiPresentationEntitiesGeoCodeSearchMatch {

		/** A string describing the formatted address of the place. Adds additional context to the place's Name. */
		address?: string | null;
		id?: string | null;
		lat?: number | null;
		lon?: number | null;
		name?: string | null;

		/** The type of the place e.g. "street_address" */
		types?: Array<string>;
		url?: string | null;
	}
	export interface TflApiPresentationEntitiesGeoCodeSearchMatchFormProperties {

		/** A string describing the formatted address of the place. Adds additional context to the place's Name. */
		address: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lat: FormControl<number | null | undefined>,
		lon: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesGeoCodeSearchMatchFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesGeoCodeSearchMatchFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesInstruction {
		detailed?: string | null;
		steps?: Array<TflApiPresentationEntitiesInstructionStep>;
		summary?: string | null;
	}
	export interface TflApiPresentationEntitiesInstructionFormProperties {
		detailed: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesInstructionFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesInstructionFormProperties>({
			detailed: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesInstructionStep {
		cumulativeDistance?: number | null;
		cumulativeTravelTime?: number | null;
		description?: string | null;
		descriptionHeading?: string | null;
		distance?: number | null;
		latitude?: number | null;
		longitude?: number | null;
		pathAttribute?: TflApiPresentationEntitiesPathAttribute;
		skyDirection?: number | null;
		skyDirectionDescription?: TflApiPresentationEntitiesInstructionStepSkyDirectionDescription | null;
		streetName?: string | null;
		trackType?: TflApiPresentationEntitiesInstructionStepTrackType | null;
		turnDirection?: string | null;
	}
	export interface TflApiPresentationEntitiesInstructionStepFormProperties {
		cumulativeDistance: FormControl<number | null | undefined>,
		cumulativeTravelTime: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		descriptionHeading: FormControl<string | null | undefined>,
		distance: FormControl<number | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
		skyDirection: FormControl<number | null | undefined>,
		skyDirectionDescription: FormControl<TflApiPresentationEntitiesInstructionStepSkyDirectionDescription | null | undefined>,
		streetName: FormControl<string | null | undefined>,
		trackType: FormControl<TflApiPresentationEntitiesInstructionStepTrackType | null | undefined>,
		turnDirection: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesInstructionStepFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesInstructionStepFormProperties>({
			cumulativeDistance: new FormControl<number | null | undefined>(undefined),
			cumulativeTravelTime: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			descriptionHeading: new FormControl<string | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			skyDirection: new FormControl<number | null | undefined>(undefined),
			skyDirectionDescription: new FormControl<TflApiPresentationEntitiesInstructionStepSkyDirectionDescription | null | undefined>(undefined),
			streetName: new FormControl<string | null | undefined>(undefined),
			trackType: new FormControl<TflApiPresentationEntitiesInstructionStepTrackType | null | undefined>(undefined),
			turnDirection: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesPathAttribute {
		name?: string | null;
		value?: string | null;
	}
	export interface TflApiPresentationEntitiesPathAttributeFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesPathAttributeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesPathAttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TflApiPresentationEntitiesInstructionStepSkyDirectionDescription { North = 0, NorthEast = 1, East = 2, SouthEast = 3, South = 4, SouthWest = 5, West = 6, NorthWest = 7 }

	export enum TflApiPresentationEntitiesInstructionStepTrackType { CycleSuperHighway = 0, CanalTowpath = 1, QuietRoad = 2, ProvisionForCyclists = 3, BusyRoads = 4, None = 5, PushBike = 6, Quietway = 7 }

	export interface TflApiPresentationEntitiesInterval {
		stopId?: string | null;
		timeToArrival?: number | null;
	}
	export interface TflApiPresentationEntitiesIntervalFormProperties {
		stopId: FormControl<string | null | undefined>,
		timeToArrival: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesIntervalFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesIntervalFormProperties>({
			stopId: new FormControl<string | null | undefined>(undefined),
			timeToArrival: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerFare {
		chargeLevel?: string | null;
		chargeProfileName?: string | null;
		cost?: number | null;
		highZone?: number | null;
		isHopperFare?: boolean | null;
		lowZone?: number | null;
		offPeak?: number | null;
		peak?: number | null;
		taps?: Array<TflApiPresentationEntitiesJourneyPlannerFareTap>;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerFareFormProperties {
		chargeLevel: FormControl<string | null | undefined>,
		chargeProfileName: FormControl<string | null | undefined>,
		cost: FormControl<number | null | undefined>,
		highZone: FormControl<number | null | undefined>,
		isHopperFare: FormControl<boolean | null | undefined>,
		lowZone: FormControl<number | null | undefined>,
		offPeak: FormControl<number | null | undefined>,
		peak: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerFareFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerFareFormProperties>({
			chargeLevel: new FormControl<string | null | undefined>(undefined),
			chargeProfileName: new FormControl<string | null | undefined>(undefined),
			cost: new FormControl<number | null | undefined>(undefined),
			highZone: new FormControl<number | null | undefined>(undefined),
			isHopperFare: new FormControl<boolean | null | undefined>(undefined),
			lowZone: new FormControl<number | null | undefined>(undefined),
			offPeak: new FormControl<number | null | undefined>(undefined),
			peak: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerFareTap {
		atcoCode?: string | null;
		tapDetails?: TflApiPresentationEntitiesJourneyPlannerFareTapDetails;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerFareTapFormProperties {
		atcoCode: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerFareTapFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerFareTapFormProperties>({
			atcoCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerFareTapDetails {
		busRouteId?: string | null;
		hostDeviceType?: string | null;
		modeType?: string | null;
		nationalLocationCode?: number | null;
		tapTimestamp?: Date | null;
		validationType?: string | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerFareTapDetailsFormProperties {
		busRouteId: FormControl<string | null | undefined>,
		hostDeviceType: FormControl<string | null | undefined>,
		modeType: FormControl<string | null | undefined>,
		nationalLocationCode: FormControl<number | null | undefined>,
		tapTimestamp: FormControl<Date | null | undefined>,
		validationType: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerFareTapDetailsFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerFareTapDetailsFormProperties>({
			busRouteId: new FormControl<string | null | undefined>(undefined),
			hostDeviceType: new FormControl<string | null | undefined>(undefined),
			modeType: new FormControl<string | null | undefined>(undefined),
			nationalLocationCode: new FormControl<number | null | undefined>(undefined),
			tapTimestamp: new FormControl<Date | null | undefined>(undefined),
			validationType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerFareCaveat {
		text?: string | null;
		type?: string | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerFareCaveatFormProperties {
		text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerFareCaveatFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerFareCaveatFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A DTO representing a list of possible journeys. */
	export interface TflApiPresentationEntitiesJourneyPlannerItineraryResult {
		cycleHireDockingStationData?: TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData;
		journeyVector?: TflApiPresentationEntitiesJourneyPlannerJourneyVector;
		journeys?: Array<TflApiPresentationEntitiesJourneyPlannerJourney>;
		lines?: Array<TflApiPresentationEntitiesLine>;
		recommendedMaxAgeMinutes?: number | null;
		searchCriteria?: TflApiPresentationEntitiesJourneyPlannerSearchCriteria;
		stopMessages?: Array<string>;
	}

	/** A DTO representing a list of possible journeys. */
	export interface TflApiPresentationEntitiesJourneyPlannerItineraryResultFormProperties {
		recommendedMaxAgeMinutes: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerItineraryResultFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerItineraryResultFormProperties>({
			recommendedMaxAgeMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData {
		destinationId?: string | null;
		destinationNumberOfBikes?: number | null;
		destinationNumberOfEmptySlots?: number | null;
		originId?: string | null;
		originNumberOfBikes?: number | null;
		originNumberOfEmptySlots?: number | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationDataFormProperties {
		destinationId: FormControl<string | null | undefined>,
		destinationNumberOfBikes: FormControl<number | null | undefined>,
		destinationNumberOfEmptySlots: FormControl<number | null | undefined>,
		originId: FormControl<string | null | undefined>,
		originNumberOfBikes: FormControl<number | null | undefined>,
		originNumberOfEmptySlots: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationDataFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationDataFormProperties>({
			destinationId: new FormControl<string | null | undefined>(undefined),
			destinationNumberOfBikes: new FormControl<number | null | undefined>(undefined),
			destinationNumberOfEmptySlots: new FormControl<number | null | undefined>(undefined),
			originId: new FormControl<string | null | undefined>(undefined),
			originNumberOfBikes: new FormControl<number | null | undefined>(undefined),
			originNumberOfEmptySlots: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerJourneyVector {
		from?: string | null;
		to?: string | null;
		uri?: string | null;
		via?: string | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerJourneyVectorFormProperties {
		from: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		via: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerJourneyVectorFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerJourneyVectorFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			via: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object that represents an end to end journey (see schematic). */
	export interface TflApiPresentationEntitiesJourneyPlannerJourney {
		arrivalDateTime?: Date | null;
		duration?: number | null;
		fare?: TflApiPresentationEntitiesJourneyPlannerJourneyFare;
		legs?: Array<TflApiPresentationEntitiesJourneyPlannerLeg>;
		startDateTime?: Date | null;
	}

	/** Object that represents an end to end journey (see schematic). */
	export interface TflApiPresentationEntitiesJourneyPlannerJourneyFormProperties {
		arrivalDateTime: FormControl<Date | null | undefined>,
		duration: FormControl<number | null | undefined>,
		startDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerJourneyFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerJourneyFormProperties>({
			arrivalDateTime: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerJourneyFare {
		caveats?: Array<TflApiPresentationEntitiesJourneyPlannerFareCaveat>;
		fares?: Array<TflApiPresentationEntitiesJourneyPlannerFare>;
		totalCost?: number | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerJourneyFareFormProperties {
		totalCost: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerJourneyFareFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerJourneyFareFormProperties>({
			totalCost: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerLeg {

		/** Represents a point located at a latitude and longitude using the WGS84 co-ordinate system. */
		arrivalPoint?: TflApiPresentationEntitiesPoint;
		arrivalTime?: Date | null;

		/** Represents a point located at a latitude and longitude using the WGS84 co-ordinate system. */
		departurePoint?: TflApiPresentationEntitiesPoint;
		departureTime?: Date | null;
		disruptions?: Array<TflApiPresentationEntitiesDisruption>;
		distance?: number | null;
		duration?: number | null;
		hasFixedLocations?: boolean | null;
		instruction?: TflApiPresentationEntitiesInstruction;
		interChangeDuration?: string | null;
		interChangePosition?: string | null;
		isDisrupted?: boolean | null;
		mode?: TflApiPresentationEntitiesIdentifier;
		obstacles?: Array<TflApiPresentationEntitiesJourneyPlannerObstacle>;
		path?: TflApiPresentationEntitiesJourneyPlannerPath;
		plannedWorks?: Array<TflApiPresentationEntitiesJourneyPlannerPlannedWork>;
		routeOptions?: Array<TflApiPresentationEntitiesJourneyPlannerRouteOption>;
		scheduledArrivalTime?: Date | null;
		scheduledDepartureTime?: Date | null;
		speed?: string | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerLegFormProperties {
		arrivalTime: FormControl<Date | null | undefined>,
		departureTime: FormControl<Date | null | undefined>,
		distance: FormControl<number | null | undefined>,
		duration: FormControl<number | null | undefined>,
		hasFixedLocations: FormControl<boolean | null | undefined>,
		interChangeDuration: FormControl<string | null | undefined>,
		interChangePosition: FormControl<string | null | undefined>,
		isDisrupted: FormControl<boolean | null | undefined>,
		scheduledArrivalTime: FormControl<Date | null | undefined>,
		scheduledDepartureTime: FormControl<Date | null | undefined>,
		speed: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerLegFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerLegFormProperties>({
			arrivalTime: new FormControl<Date | null | undefined>(undefined),
			departureTime: new FormControl<Date | null | undefined>(undefined),
			distance: new FormControl<number | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			hasFixedLocations: new FormControl<boolean | null | undefined>(undefined),
			interChangeDuration: new FormControl<string | null | undefined>(undefined),
			interChangePosition: new FormControl<string | null | undefined>(undefined),
			isDisrupted: new FormControl<boolean | null | undefined>(undefined),
			scheduledArrivalTime: new FormControl<Date | null | undefined>(undefined),
			scheduledDepartureTime: new FormControl<Date | null | undefined>(undefined),
			speed: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a point located at a latitude and longitude using the WGS84 co-ordinate system. */
	export interface TflApiPresentationEntitiesPoint {

		/** WGS84 latitude of the location. */
		lat?: number | null;

		/** WGS84 longitude of the location. */
		lon?: number | null;
	}

	/** Represents a point located at a latitude and longitude using the WGS84 co-ordinate system. */
	export interface TflApiPresentationEntitiesPointFormProperties {

		/** WGS84 latitude of the location. */
		lat: FormControl<number | null | undefined>,

		/** WGS84 longitude of the location. */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesPointFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesPointFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerObstacle {
		incline?: string | null;
		position?: string | null;
		stopId?: number | null;
		type?: string | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerObstacleFormProperties {
		incline: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		stopId: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerObstacleFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerObstacleFormProperties>({
			incline: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			stopId: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerPath {
		elevation?: Array<TflApiCommonJourneyPlannerJpElevation>;
		lineString?: string | null;
		stopPoints?: Array<TflApiPresentationEntitiesIdentifier>;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerPathFormProperties {
		lineString: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerPathFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerPathFormProperties>({
			lineString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerPlannedWork {
		createdDateTime?: Date | null;
		description?: string | null;
		id?: string | null;
		lastUpdateDateTime?: Date | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerPlannedWorkFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastUpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerPlannedWorkFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerPlannedWorkFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerRouteOption {

		/** The direction of the route, i.e. outbound or inbound. */
		direction?: string | null;
		directions?: Array<string>;

		/** The Id of the route */
		id?: string | null;
		lineIdentifier?: TflApiPresentationEntitiesIdentifier;

		/** Name such as "72" */
		name?: string | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerRouteOptionFormProperties {

		/** The direction of the route, i.e. outbound or inbound. */
		direction: FormControl<string | null | undefined>,

		/** The Id of the route */
		id: FormControl<string | null | undefined>,

		/** Name such as "72" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerRouteOptionFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerRouteOptionFormProperties>({
			direction: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesLine {
		created?: Date | null;
		crowding?: TflApiPresentationEntitiesCrowding;
		disruptions?: Array<TflApiPresentationEntitiesDisruption>;
		id?: string | null;
		lineStatuses?: Array<TflApiPresentationEntitiesLineStatus>;
		modeName?: string | null;
		modified?: Date | null;
		name?: string | null;
		routeSections?: Array<TflApiPresentationEntitiesMatchedRoute>;
		serviceTypes?: Array<TflApiPresentationEntitiesLineServiceTypeInfo>;
	}
	export interface TflApiPresentationEntitiesLineFormProperties {
		created: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		modeName: FormControl<string | null | undefined>,
		modified: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesLineFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesLineFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modeName: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesLineStatus {
		created?: Date | null;

		/** Represents a disruption to a route within the transport network. */
		disruption?: TflApiPresentationEntitiesDisruption;
		id?: number | null;
		lineId?: string | null;
		modified?: Date | null;
		reason?: string | null;
		statusSeverity?: number | null;
		statusSeverityDescription?: string | null;
		validityPeriods?: Array<TflApiPresentationEntitiesValidityPeriod>;
	}
	export interface TflApiPresentationEntitiesLineStatusFormProperties {
		created: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		lineId: FormControl<string | null | undefined>,
		modified: FormControl<Date | null | undefined>,
		reason: FormControl<string | null | undefined>,
		statusSeverity: FormControl<number | null | undefined>,
		statusSeverityDescription: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesLineStatusFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesLineStatusFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined),
			modified: new FormControl<Date | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			statusSeverity: new FormControl<number | null | undefined>(undefined),
			statusSeverityDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a period for which a planned works is valid. */
	export interface TflApiPresentationEntitiesValidityPeriod {

		/** Gets or sets the start date. */
		fromDate?: Date | null;

		/** If true is a realtime status rather than planned or info */
		isNow?: boolean | null;

		/** Gets or sets the end date. */
		toDate?: Date | null;
	}

	/** Represents a period for which a planned works is valid. */
	export interface TflApiPresentationEntitiesValidityPeriodFormProperties {

		/** Gets or sets the start date. */
		fromDate: FormControl<Date | null | undefined>,

		/** If true is a realtime status rather than planned or info */
		isNow: FormControl<boolean | null | undefined>,

		/** Gets or sets the end date. */
		toDate: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesValidityPeriodFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesValidityPeriodFormProperties>({
			fromDate: new FormControl<Date | null | undefined>(undefined),
			isNow: new FormControl<boolean | null | undefined>(undefined),
			toDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Description of a Route used in Route search results. */
	export interface TflApiPresentationEntitiesMatchedRoute {

		/** The Id (NaPTAN code) or the Destination StopPoint */
		destination?: string | null;

		/** The name of the Destination StopPoint */
		destinationName?: string | null;

		/** Inbound or Outbound */
		direction?: string | null;

		/** Name such as "72" */
		name?: string | null;

		/** The name of the Origin StopPoint */
		originationName?: string | null;

		/** The Id (NaPTAN code) of the Origin StopPoint */
		originator?: string | null;

		/** The route code */
		routeCode?: string | null;

		/** Regular or Night */
		serviceType?: string | null;

		/** The DateTime that the Service containing this Route is valid from. */
		validFrom?: Date | null;

		/** The DateTime that the Service containing this Route is valid until. */
		validTo?: Date | null;
	}

	/** Description of a Route used in Route search results. */
	export interface TflApiPresentationEntitiesMatchedRouteFormProperties {

		/** The Id (NaPTAN code) or the Destination StopPoint */
		destination: FormControl<string | null | undefined>,

		/** The name of the Destination StopPoint */
		destinationName: FormControl<string | null | undefined>,

		/** Inbound or Outbound */
		direction: FormControl<string | null | undefined>,

		/** Name such as "72" */
		name: FormControl<string | null | undefined>,

		/** The name of the Origin StopPoint */
		originationName: FormControl<string | null | undefined>,

		/** The Id (NaPTAN code) of the Origin StopPoint */
		originator: FormControl<string | null | undefined>,

		/** The route code */
		routeCode: FormControl<string | null | undefined>,

		/** Regular or Night */
		serviceType: FormControl<string | null | undefined>,

		/** The DateTime that the Service containing this Route is valid from. */
		validFrom: FormControl<Date | null | undefined>,

		/** The DateTime that the Service containing this Route is valid until. */
		validTo: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesMatchedRouteFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesMatchedRouteFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			destinationName: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			originationName: new FormControl<string | null | undefined>(undefined),
			originator: new FormControl<string | null | undefined>(undefined),
			routeCode: new FormControl<string | null | undefined>(undefined),
			serviceType: new FormControl<string | null | undefined>(undefined),
			validFrom: new FormControl<Date | null | undefined>(undefined),
			validTo: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesLineServiceTypeInfo {
		name?: string | null;
		uri?: string | null;
	}
	export interface TflApiPresentationEntitiesLineServiceTypeInfoFormProperties {
		name: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesLineServiceTypeInfoFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesLineServiceTypeInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerSearchCriteria {
		dateTime?: Date | null;
		dateTimeType?: TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeType | null;
		timeAdjustments?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustments;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerSearchCriteriaFormProperties {
		dateTime: FormControl<Date | null | undefined>,
		dateTimeType: FormControl<TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeType | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerSearchCriteriaFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerSearchCriteriaFormProperties>({
			dateTime: new FormControl<Date | null | undefined>(undefined),
			dateTimeType: new FormControl<TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeType | null | undefined>(undefined),
		});

	}

	export enum TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeType { Arriving = 0, Departing = 1 }

	export interface TflApiPresentationEntitiesJourneyPlannerTimeAdjustments {
		earlier?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;
		earliest?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;
		later?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;
		latest?: TflApiPresentationEntitiesJourneyPlannerTimeAdjustment;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentsFormProperties {
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerTimeAdjustmentsFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentsFormProperties>({
		});

	}

	export interface TflApiPresentationEntitiesJourneyPlannerTimeAdjustment {
		date?: string | null;
		time?: string | null;
		timeIs?: string | null;
		uri?: string | null;
	}
	export interface TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentFormProperties {
		date: FormControl<string | null | undefined>,
		time: FormControl<string | null | undefined>,
		timeIs: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesJourneyPlannerTimeAdjustmentFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesJourneyPlannerTimeAdjustmentFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
			timeIs: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesKnownJourney {
		hour?: string | null;
		intervalId?: number | null;
		minute?: string | null;
	}
	export interface TflApiPresentationEntitiesKnownJourneyFormProperties {
		hour: FormControl<string | null | undefined>,
		intervalId: FormControl<number | null | undefined>,
		minute: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesKnownJourneyFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesKnownJourneyFormProperties>({
			hour: new FormControl<string | null | undefined>(undefined),
			intervalId: new FormControl<number | null | undefined>(undefined),
			minute: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesLineRouteSection {
		destination?: string | null;
		direction?: string | null;
		fromStation?: string | null;
		routeId?: number | null;
		serviceType?: string | null;
		toStation?: string | null;
		vehicleDestinationText?: string | null;
	}
	export interface TflApiPresentationEntitiesLineRouteSectionFormProperties {
		destination: FormControl<string | null | undefined>,
		direction: FormControl<string | null | undefined>,
		fromStation: FormControl<string | null | undefined>,
		routeId: FormControl<number | null | undefined>,
		serviceType: FormControl<string | null | undefined>,
		toStation: FormControl<string | null | undefined>,
		vehicleDestinationText: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesLineRouteSectionFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesLineRouteSectionFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			fromStation: new FormControl<string | null | undefined>(undefined),
			routeId: new FormControl<number | null | undefined>(undefined),
			serviceType: new FormControl<string | null | undefined>(undefined),
			toStation: new FormControl<string | null | undefined>(undefined),
			vehicleDestinationText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesLineServiceType {
		lineName?: string | null;
		lineSpecificServiceTypes?: Array<TflApiPresentationEntitiesLineSpecificServiceType>;
	}
	export interface TflApiPresentationEntitiesLineServiceTypeFormProperties {
		lineName: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesLineServiceTypeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesLineServiceTypeFormProperties>({
			lineName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesLineSpecificServiceType {
		serviceType?: TflApiPresentationEntitiesLineServiceTypeInfo;
		stopServesServiceType?: boolean | null;
	}
	export interface TflApiPresentationEntitiesLineSpecificServiceTypeFormProperties {
		stopServesServiceType: FormControl<boolean | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesLineSpecificServiceTypeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesLineSpecificServiceTypeFormProperties>({
			stopServesServiceType: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesMatchedRouteSections {
		id?: number | null;
	}
	export interface TflApiPresentationEntitiesMatchedRouteSectionsFormProperties {
		id: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesMatchedRouteSectionsFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesMatchedRouteSectionsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesMatchedStop {
		accessibilitySummary?: string | null;
		direction?: string | null;
		hasDisruption?: boolean | null;
		icsId?: string | null;
		id?: string | null;
		lat?: number | null;
		lines?: Array<TflApiPresentationEntitiesIdentifier>;
		lon?: number | null;
		modes?: Array<string>;
		name?: string | null;
		parentId?: string | null;
		routeId?: number | null;
		stationId?: string | null;
		status?: boolean | null;
		stopLetter?: string | null;
		stopType?: string | null;
		topMostParentId?: string | null;
		towards?: string | null;
		url?: string | null;
		zone?: string | null;
	}
	export interface TflApiPresentationEntitiesMatchedStopFormProperties {
		accessibilitySummary: FormControl<string | null | undefined>,
		direction: FormControl<string | null | undefined>,
		hasDisruption: FormControl<boolean | null | undefined>,
		icsId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lat: FormControl<number | null | undefined>,
		lon: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		parentId: FormControl<string | null | undefined>,
		routeId: FormControl<number | null | undefined>,
		stationId: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,
		stopLetter: FormControl<string | null | undefined>,
		stopType: FormControl<string | null | undefined>,
		topMostParentId: FormControl<string | null | undefined>,
		towards: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		zone: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesMatchedStopFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesMatchedStopFormProperties>({
			accessibilitySummary: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			hasDisruption: new FormControl<boolean | null | undefined>(undefined),
			icsId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			routeId: new FormControl<number | null | undefined>(undefined),
			stationId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			stopLetter: new FormControl<string | null | undefined>(undefined),
			stopType: new FormControl<string | null | undefined>(undefined),
			topMostParentId: new FormControl<string | null | undefined>(undefined),
			towards: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesMode {
		isFarePaying?: boolean | null;
		isScheduledService?: boolean | null;
		isTflService?: boolean | null;
		modeName?: string | null;
		motType?: string | null;
		network?: string | null;
	}
	export interface TflApiPresentationEntitiesModeFormProperties {
		isFarePaying: FormControl<boolean | null | undefined>,
		isScheduledService: FormControl<boolean | null | undefined>,
		isTflService: FormControl<boolean | null | undefined>,
		modeName: FormControl<string | null | undefined>,
		motType: FormControl<string | null | undefined>,
		network: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesModeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesModeFormProperties>({
			isFarePaying: new FormControl<boolean | null | undefined>(undefined),
			isScheduledService: new FormControl<boolean | null | undefined>(undefined),
			isTflService: new FormControl<boolean | null | undefined>(undefined),
			modeName: new FormControl<string | null | undefined>(undefined),
			motType: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represent travel network status */
	export interface TflApiPresentationEntitiesNetworkStatus {
		message?: string | null;
		operator?: string | null;
		status?: string | null;
		statusLevel?: number | null;
	}

	/** Represent travel network status */
	export interface TflApiPresentationEntitiesNetworkStatusFormProperties {
		message: FormControl<string | null | undefined>,
		operator: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		statusLevel: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesNetworkStatusFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesNetworkStatusFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusLevel: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesOrderedRoute {
		name?: string | null;
		naptanIds?: Array<string>;
		serviceType?: string | null;
	}
	export interface TflApiPresentationEntitiesOrderedRouteFormProperties {
		name: FormControl<string | null | undefined>,
		serviceType: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesOrderedRouteFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesOrderedRouteFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			serviceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesPeriod {
		frequency?: TflApiPresentationEntitiesServiceFrequency;
		fromTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;
		toTime?: TflApiPresentationEntitiesTwentyFourHourClockTime;
		type?: TflApiPresentationEntitiesPeriodType | null;
	}
	export interface TflApiPresentationEntitiesPeriodFormProperties {
		type: FormControl<TflApiPresentationEntitiesPeriodType | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesPeriodFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesPeriodFormProperties>({
			type: new FormControl<TflApiPresentationEntitiesPeriodType | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesServiceFrequency {
		highestFrequency?: number | null;
		lowestFrequency?: number | null;
	}
	export interface TflApiPresentationEntitiesServiceFrequencyFormProperties {
		highestFrequency: FormControl<number | null | undefined>,
		lowestFrequency: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesServiceFrequencyFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesServiceFrequencyFormProperties>({
			highestFrequency: new FormControl<number | null | undefined>(undefined),
			lowestFrequency: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesTwentyFourHourClockTime {
		hour?: string | null;
		minute?: string | null;
	}
	export interface TflApiPresentationEntitiesTwentyFourHourClockTimeFormProperties {
		hour: FormControl<string | null | undefined>,
		minute: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesTwentyFourHourClockTimeFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesTwentyFourHourClockTimeFormProperties>({
			hour: new FormControl<string | null | undefined>(undefined),
			minute: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TflApiPresentationEntitiesPeriodType { Normal = 0, FrequencyHours = 1, FrequencyMinutes = 2, Unknown = 3 }

	export interface TflApiPresentationEntitiesPlaceCategory {
		availableKeys?: Array<string>;
		category?: string | null;
	}
	export interface TflApiPresentationEntitiesPlaceCategoryFormProperties {
		category: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesPlaceCategoryFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesPlaceCategoryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesPlacePolygon {
		commonName?: string | null;
		geoPoints?: Array<TflApiCommonGeoPoint>;
	}
	export interface TflApiPresentationEntitiesPlacePolygonFormProperties {
		commonName: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesPlacePolygonFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesPlacePolygonFormProperties>({
			commonName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DTO to capture the prediction details */
	export interface TflApiPresentationEntitiesPrediction {

		/** Bearing (between 0 to 359) */
		bearing?: string | null;

		/** The current location of the vehicle. */
		currentLocation?: string | null;

		/** Name of the destination */
		destinationName?: string | null;

		/** Naptan Identifier for the prediction's destination */
		destinationNaptanId?: string | null;

		/** Direction (unified to inbound/outbound) */
		direction?: string | null;

		/** The expected arrival time of the vehicle at the stop/station */
		expectedArrival?: Date | null;

		/** The identitier for the prediction */
		id?: string | null;

		/** Unique identifier for the Line */
		lineId?: string | null;

		/** Line Name */
		lineName?: string | null;

		/** The mode name of the station/line the prediction relates to */
		modeName?: string | null;

		/** Identifier for the prediction */
		naptanId?: string | null;

		/** The type of the operation (1: is new or has been updated, 2: should be deleted from any client cache) */
		operationType?: number | null;

		/** Platform name (for bus, this is the stop letter) */
		platformName?: string | null;

		/** Station name */
		stationName?: string | null;

		/** The expiry time for the prediction */
		timeToLive?: Date | null;

		/** Prediction of the Time to station in seconds */
		timeToStation?: number | null;

		/** Timestamp for when the prediction was inserted/modified (source column drives what objects are broadcast on each iteration) */
		timestamp?: Date | null;
		timing?: TflApiPresentationEntitiesPredictionTiming;

		/** Routing information or other descriptive text about the path of the vehicle towards the destination */
		towards?: string | null;

		/** The actual vehicle in transit (for train modes, the leading car of the rolling set) */
		vehicleId?: string | null;
	}

	/** DTO to capture the prediction details */
	export interface TflApiPresentationEntitiesPredictionFormProperties {

		/** Bearing (between 0 to 359) */
		bearing: FormControl<string | null | undefined>,

		/** The current location of the vehicle. */
		currentLocation: FormControl<string | null | undefined>,

		/** Name of the destination */
		destinationName: FormControl<string | null | undefined>,

		/** Naptan Identifier for the prediction's destination */
		destinationNaptanId: FormControl<string | null | undefined>,

		/** Direction (unified to inbound/outbound) */
		direction: FormControl<string | null | undefined>,

		/** The expected arrival time of the vehicle at the stop/station */
		expectedArrival: FormControl<Date | null | undefined>,

		/** The identitier for the prediction */
		id: FormControl<string | null | undefined>,

		/** Unique identifier for the Line */
		lineId: FormControl<string | null | undefined>,

		/** Line Name */
		lineName: FormControl<string | null | undefined>,

		/** The mode name of the station/line the prediction relates to */
		modeName: FormControl<string | null | undefined>,

		/** Identifier for the prediction */
		naptanId: FormControl<string | null | undefined>,

		/** The type of the operation (1: is new or has been updated, 2: should be deleted from any client cache) */
		operationType: FormControl<number | null | undefined>,

		/** Platform name (for bus, this is the stop letter) */
		platformName: FormControl<string | null | undefined>,

		/** Station name */
		stationName: FormControl<string | null | undefined>,

		/** The expiry time for the prediction */
		timeToLive: FormControl<Date | null | undefined>,

		/** Prediction of the Time to station in seconds */
		timeToStation: FormControl<number | null | undefined>,

		/** Timestamp for when the prediction was inserted/modified (source column drives what objects are broadcast on each iteration) */
		timestamp: FormControl<Date | null | undefined>,

		/** Routing information or other descriptive text about the path of the vehicle towards the destination */
		towards: FormControl<string | null | undefined>,

		/** The actual vehicle in transit (for train modes, the leading car of the rolling set) */
		vehicleId: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesPredictionFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesPredictionFormProperties>({
			bearing: new FormControl<string | null | undefined>(undefined),
			currentLocation: new FormControl<string | null | undefined>(undefined),
			destinationName: new FormControl<string | null | undefined>(undefined),
			destinationNaptanId: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			expectedArrival: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined),
			lineName: new FormControl<string | null | undefined>(undefined),
			modeName: new FormControl<string | null | undefined>(undefined),
			naptanId: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<number | null | undefined>(undefined),
			platformName: new FormControl<string | null | undefined>(undefined),
			stationName: new FormControl<string | null | undefined>(undefined),
			timeToLive: new FormControl<Date | null | undefined>(undefined),
			timeToStation: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			towards: new FormControl<string | null | undefined>(undefined),
			vehicleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRedirect {
		active?: boolean | null;
		longUrl?: string | null;
		shortUrl?: string | null;
	}
	export interface TflApiPresentationEntitiesRedirectFormProperties {
		active: FormControl<boolean | null | undefined>,
		longUrl: FormControl<string | null | undefined>,
		shortUrl: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRedirectFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRedirectFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			longUrl: new FormControl<string | null | undefined>(undefined),
			shortUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRoadCorridor {

		/**
		 * The Bounds of the Corridor, given by the south-east followed by the north-west co-ordinate
		 * pair in geoJSON format e.g. "[[-1.241531,51.242151],[1.641223,53.765721]]"
		 */
		bounds?: string | null;

		/**
		 * The display name of the Corridor e.g. "North Circular (A406)". This
		 * may be identical to the Id.
		 */
		displayName?: string | null;

		/**
		 * The Envelope of the Corridor, given by the corner co-ordinates of a rectangular (four-point) polygon
		 * in geoJSON format e.g. "[[-1.241531,51.242151],[-1.241531,53.765721],[1.641223,53.765721],[1.641223,51.242151]]"
		 */
		envelope?: string | null;

		/** The group name of the Corridor e.g. "Central London". Most corridors are not grouped, in which case this field can be null. */
		group?: string | null;

		/** The Id of the Corridor e.g. "A406" */
		id?: string | null;

		/** The end of the period over which status has been aggregated, or null if this is the current corridor status. */
		statusAggregationEndDate?: Date | null;

		/** The start of the period over which status has been aggregated, or null if this is the current corridor status. */
		statusAggregationStartDate?: Date | null;

		/** Standard multi-mode status severity code */
		statusSeverity?: string | null;

		/** Description of the status severity as applied to RoadCorridors */
		statusSeverityDescription?: string | null;

		/** URL to retrieve this Corridor. */
		url?: string | null;
	}
	export interface TflApiPresentationEntitiesRoadCorridorFormProperties {

		/**
		 * The Bounds of the Corridor, given by the south-east followed by the north-west co-ordinate
		 * pair in geoJSON format e.g. "[[-1.241531,51.242151],[1.641223,53.765721]]"
		 */
		bounds: FormControl<string | null | undefined>,

		/**
		 * The display name of the Corridor e.g. "North Circular (A406)". This
		 * may be identical to the Id.
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The Envelope of the Corridor, given by the corner co-ordinates of a rectangular (four-point) polygon
		 * in geoJSON format e.g. "[[-1.241531,51.242151],[-1.241531,53.765721],[1.641223,53.765721],[1.641223,51.242151]]"
		 */
		envelope: FormControl<string | null | undefined>,

		/** The group name of the Corridor e.g. "Central London". Most corridors are not grouped, in which case this field can be null. */
		group: FormControl<string | null | undefined>,

		/** The Id of the Corridor e.g. "A406" */
		id: FormControl<string | null | undefined>,

		/** The end of the period over which status has been aggregated, or null if this is the current corridor status. */
		statusAggregationEndDate: FormControl<Date | null | undefined>,

		/** The start of the period over which status has been aggregated, or null if this is the current corridor status. */
		statusAggregationStartDate: FormControl<Date | null | undefined>,

		/** Standard multi-mode status severity code */
		statusSeverity: FormControl<string | null | undefined>,

		/** Description of the status severity as applied to RoadCorridors */
		statusSeverityDescription: FormControl<string | null | undefined>,

		/** URL to retrieve this Corridor. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRoadCorridorFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRoadCorridorFormProperties>({
			bounds: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			envelope: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			statusAggregationEndDate: new FormControl<Date | null | undefined>(undefined),
			statusAggregationStartDate: new FormControl<Date | null | undefined>(undefined),
			statusSeverity: new FormControl<string | null | undefined>(undefined),
			statusSeverityDescription: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRoadDisruption {

		/** Describes the nature of disruption e.g. Traffic Incidents, Works */
		category?: string | null;

		/** Full text of comments describing the disruption, including details of any road closures and diversions, where appropriate. */
		comments?: string | null;

		/** The Ids of affected corridors, if any. */
		corridorIds?: Array<string>;

		/**
		 * Text of the most recent update from the LSTCC on the state of the
		 * disruption, including the current traffic impact and any advice to
		 * road users.
		 */
		currentUpdate?: string | null;

		/**
		 * The time when the last CurrentUpdate description was recorded,
		 * or null if no CurrentUpdate has been applied.
		 */
		currentUpdateDateTime?: Date | null;

		/**
		 * The date and time on which the disruption ended. For planned disruptions, this date will have a valid value. For unplanned
		 * disruptions in progress, this field will be omitted.
		 */
		endDateTime?: Date | null;
		geography?: SystemDataSpatialDbGeography;
		geometry?: SystemDataSpatialDbGeography;

		/**
		 * True if any of the affected Streets have a "Full Closure" status, false otherwise. A RoadDisruption that has HasClosures is considered a
		 * Severe or Serious disruption for severity filtering purposes.
		 */
		hasClosures?: boolean | null;

		/** Unique identifier for the road disruption */
		id?: string | null;

		/** True if the disruption is planned on a future date that is open to change */
		isProvisional?: boolean | null;

		/**
		 * The date and time on which the disruption was last modified in the system. This information can reliably be used by a developer to quickly
		 * compare two instances of the same disruption to determine if it has been changed.
		 */
		lastModifiedTime?: Date | null;

		/**
		 * This describes the level of potential impact on traffic operations of the disruption.
		 * High = e.g. a one-off disruption on a major or high profile route which will require a high level of operational attention
		 * Medium = This is the default value
		 * Low = e.g. a frequently occurring disruption which is well known
		 */
		levelOfInterest?: string | null;

		/** The text of any associated link */
		linkText?: string | null;

		/** The url of any associated link */
		linkUrl?: string | null;

		/** Main road name / number (borough) or preset area name where the disruption is located. This might be useful for a map popup where space is limited. */
		location?: string | null;

		/** An ordinal of the disruption based on severity, level of interest and corridor. */
		ordinal?: number | null;

		/** Latitude and longitude (WGS84) of the centroid of the disruption, stored in a geoJSON-formatted string. */
		point?: string | null;
		publishEndDate?: Date | null;

		/** TDM Additional properties */
		publishStartDate?: Date | null;
		recurringSchedules?: Array<TflApiPresentationEntitiesRoadDisruptionSchedule>;
		roadDisruptionImpactAreas?: Array<TflApiPresentationEntitiesRoadDisruptionImpactArea>;
		roadDisruptionLines?: Array<TflApiPresentationEntitiesRoadDisruptionLine>;
		roadProject?: TflApiPresentationEntitiesRoadProject;

		/** A description of the severity of the disruption. */
		severity?: string | null;

		/**
		 * The date and time which the disruption started. For a planned disruption (i.e. planned road works) this date will be in the future.
		 * For unplanned disruptions, this will default to the date on which the disruption was first recorded, but may be adjusted by the operator.
		 */
		startDateTime?: Date | null;

		/**
		 * This describes the status of the disruption.
		 * Active = currently in progress
		 * Active Long Term = currently in progress and long term
		 * Scheduled = scheduled to start within the next 180 days
		 * Recurring Works = planned maintenance works that follow a regular routine or pattern and whose next occurrence is to start within the next 180 days.
		 * Recently Cleared = recently cleared in the last 24 hours
		 * Note that the status of Scheduled or Recurring Works disruptions will change to Active when they start, and will change status again when they end.
		 */
		status?: string | null;

		/** A collection of zero or more streets affected by the disruption. */
		streets?: Array<TflApiPresentationEntitiesStreet>;

		/** Describes the sub-category of disruption e.g. Collapsed Manhole, Abnormal Load */
		subCategory?: string | null;
		timeFrame?: string | null;

		/** URL to retrieve this road disruption */
		url?: string | null;
	}
	export interface TflApiPresentationEntitiesRoadDisruptionFormProperties {

		/** Describes the nature of disruption e.g. Traffic Incidents, Works */
		category: FormControl<string | null | undefined>,

		/** Full text of comments describing the disruption, including details of any road closures and diversions, where appropriate. */
		comments: FormControl<string | null | undefined>,

		/**
		 * Text of the most recent update from the LSTCC on the state of the
		 * disruption, including the current traffic impact and any advice to
		 * road users.
		 */
		currentUpdate: FormControl<string | null | undefined>,

		/**
		 * The time when the last CurrentUpdate description was recorded,
		 * or null if no CurrentUpdate has been applied.
		 */
		currentUpdateDateTime: FormControl<Date | null | undefined>,

		/**
		 * The date and time on which the disruption ended. For planned disruptions, this date will have a valid value. For unplanned
		 * disruptions in progress, this field will be omitted.
		 */
		endDateTime: FormControl<Date | null | undefined>,

		/**
		 * True if any of the affected Streets have a "Full Closure" status, false otherwise. A RoadDisruption that has HasClosures is considered a
		 * Severe or Serious disruption for severity filtering purposes.
		 */
		hasClosures: FormControl<boolean | null | undefined>,

		/** Unique identifier for the road disruption */
		id: FormControl<string | null | undefined>,

		/** True if the disruption is planned on a future date that is open to change */
		isProvisional: FormControl<boolean | null | undefined>,

		/**
		 * The date and time on which the disruption was last modified in the system. This information can reliably be used by a developer to quickly
		 * compare two instances of the same disruption to determine if it has been changed.
		 */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/**
		 * This describes the level of potential impact on traffic operations of the disruption.
		 * High = e.g. a one-off disruption on a major or high profile route which will require a high level of operational attention
		 * Medium = This is the default value
		 * Low = e.g. a frequently occurring disruption which is well known
		 */
		levelOfInterest: FormControl<string | null | undefined>,

		/** The text of any associated link */
		linkText: FormControl<string | null | undefined>,

		/** The url of any associated link */
		linkUrl: FormControl<string | null | undefined>,

		/** Main road name / number (borough) or preset area name where the disruption is located. This might be useful for a map popup where space is limited. */
		location: FormControl<string | null | undefined>,

		/** An ordinal of the disruption based on severity, level of interest and corridor. */
		ordinal: FormControl<number | null | undefined>,

		/** Latitude and longitude (WGS84) of the centroid of the disruption, stored in a geoJSON-formatted string. */
		point: FormControl<string | null | undefined>,
		publishEndDate: FormControl<Date | null | undefined>,

		/** TDM Additional properties */
		publishStartDate: FormControl<Date | null | undefined>,

		/** A description of the severity of the disruption. */
		severity: FormControl<string | null | undefined>,

		/**
		 * The date and time which the disruption started. For a planned disruption (i.e. planned road works) this date will be in the future.
		 * For unplanned disruptions, this will default to the date on which the disruption was first recorded, but may be adjusted by the operator.
		 */
		startDateTime: FormControl<Date | null | undefined>,

		/**
		 * This describes the status of the disruption.
		 * Active = currently in progress
		 * Active Long Term = currently in progress and long term
		 * Scheduled = scheduled to start within the next 180 days
		 * Recurring Works = planned maintenance works that follow a regular routine or pattern and whose next occurrence is to start within the next 180 days.
		 * Recently Cleared = recently cleared in the last 24 hours
		 * Note that the status of Scheduled or Recurring Works disruptions will change to Active when they start, and will change status again when they end.
		 */
		status: FormControl<string | null | undefined>,

		/** Describes the sub-category of disruption e.g. Collapsed Manhole, Abnormal Load */
		subCategory: FormControl<string | null | undefined>,
		timeFrame: FormControl<string | null | undefined>,

		/** URL to retrieve this road disruption */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRoadDisruptionFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRoadDisruptionFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			currentUpdate: new FormControl<string | null | undefined>(undefined),
			currentUpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			hasClosures: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isProvisional: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			levelOfInterest: new FormControl<string | null | undefined>(undefined),
			linkText: new FormControl<string | null | undefined>(undefined),
			linkUrl: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			ordinal: new FormControl<number | null | undefined>(undefined),
			point: new FormControl<string | null | undefined>(undefined),
			publishEndDate: new FormControl<Date | null | undefined>(undefined),
			publishStartDate: new FormControl<Date | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subCategory: new FormControl<string | null | undefined>(undefined),
			timeFrame: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRoadDisruptionSchedule {
		endTime?: Date | null;
		startTime?: Date | null;
	}
	export interface TflApiPresentationEntitiesRoadDisruptionScheduleFormProperties {
		endTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRoadDisruptionScheduleFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRoadDisruptionScheduleFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRoadDisruptionImpactArea {
		endDate?: Date | null;
		endTime?: string | null;
		id?: number | null;
		polygon?: SystemDataSpatialDbGeography;
		roadDisruptionId?: string | null;
		startDate?: Date | null;
		startTime?: string | null;
	}
	export interface TflApiPresentationEntitiesRoadDisruptionImpactAreaFormProperties {
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		roadDisruptionId: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRoadDisruptionImpactAreaFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRoadDisruptionImpactAreaFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			roadDisruptionId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRoadDisruptionLine {
		endDate?: Date | null;
		endTime?: string | null;
		id?: number | null;
		isDiversion?: boolean | null;
		multiLineString?: SystemDataSpatialDbGeography;
		roadDisruptionId?: string | null;
		startDate?: Date | null;
		startTime?: string | null;
	}
	export interface TflApiPresentationEntitiesRoadDisruptionLineFormProperties {
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		isDiversion: FormControl<boolean | null | undefined>,
		roadDisruptionId: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRoadDisruptionLineFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRoadDisruptionLineFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isDiversion: new FormControl<boolean | null | undefined>(undefined),
			roadDisruptionId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRoadProject {
		boroughsBenefited?: Array<string>;
		constructionEndDate?: Date | null;
		constructionStartDate?: Date | null;
		consultationEndDate?: Date | null;
		consultationPageUrl?: string | null;
		consultationStartDate?: Date | null;
		contactEmail?: string | null;
		contactName?: string | null;
		cycleSuperhighwayId?: string | null;
		externalPageUrl?: string | null;
		phase?: TflApiPresentationEntitiesRoadProjectPhase | null;
		projectDescription?: string | null;
		projectId?: string | null;
		projectName?: string | null;
		projectPageUrl?: string | null;
		projectSummaryPageUrl?: string | null;
		schemeName?: string | null;
	}
	export interface TflApiPresentationEntitiesRoadProjectFormProperties {
		constructionEndDate: FormControl<Date | null | undefined>,
		constructionStartDate: FormControl<Date | null | undefined>,
		consultationEndDate: FormControl<Date | null | undefined>,
		consultationPageUrl: FormControl<string | null | undefined>,
		consultationStartDate: FormControl<Date | null | undefined>,
		contactEmail: FormControl<string | null | undefined>,
		contactName: FormControl<string | null | undefined>,
		cycleSuperhighwayId: FormControl<string | null | undefined>,
		externalPageUrl: FormControl<string | null | undefined>,
		phase: FormControl<TflApiPresentationEntitiesRoadProjectPhase | null | undefined>,
		projectDescription: FormControl<string | null | undefined>,
		projectId: FormControl<string | null | undefined>,
		projectName: FormControl<string | null | undefined>,
		projectPageUrl: FormControl<string | null | undefined>,
		projectSummaryPageUrl: FormControl<string | null | undefined>,
		schemeName: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRoadProjectFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRoadProjectFormProperties>({
			constructionEndDate: new FormControl<Date | null | undefined>(undefined),
			constructionStartDate: new FormControl<Date | null | undefined>(undefined),
			consultationEndDate: new FormControl<Date | null | undefined>(undefined),
			consultationPageUrl: new FormControl<string | null | undefined>(undefined),
			consultationStartDate: new FormControl<Date | null | undefined>(undefined),
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactName: new FormControl<string | null | undefined>(undefined),
			cycleSuperhighwayId: new FormControl<string | null | undefined>(undefined),
			externalPageUrl: new FormControl<string | null | undefined>(undefined),
			phase: new FormControl<TflApiPresentationEntitiesRoadProjectPhase | null | undefined>(undefined),
			projectDescription: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			projectPageUrl: new FormControl<string | null | undefined>(undefined),
			projectSummaryPageUrl: new FormControl<string | null | undefined>(undefined),
			schemeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TflApiPresentationEntitiesRoadProjectPhase { Unscoped = 0, Concept = 1, ConsultationEnded = 2, Consultation = 3, Construction = 4, Complete = 5 }

	export interface TflApiPresentationEntitiesStreet {

		/**
		 * Type of road closure. Some example values:
		 * Open = road is open, not blocked, not closed, not restricted. It maybe that the disruption has been moved out of the carriageway.
		 * Partial Closure = road is partially blocked, closed or restricted.
		 * Full Closure = road is fully blocked or closed.
		 */
		closure?: string | null;

		/**
		 * The direction of the disruption on the street. Some example values:
		 * All Directions
		 * All Approaches
		 * Clockwise
		 * Anti-Clockwise
		 * Northbound
		 * Eastbound
		 * Southbound
		 * Westbound
		 * Both Directions
		 */
		directions?: string | null;

		/** Street name */
		name?: string | null;

		/** Geographic description of the sections of this street that are affected. */
		segments?: Array<TflApiPresentationEntitiesStreetSegment>;

		/** The ID from the source system of the disruption that this street belongs to. */
		sourceSystemId?: number | null;

		/** The key of the source system of the disruption that this street belongs to. */
		sourceSystemKey?: string | null;
	}
	export interface TflApiPresentationEntitiesStreetFormProperties {

		/**
		 * Type of road closure. Some example values:
		 * Open = road is open, not blocked, not closed, not restricted. It maybe that the disruption has been moved out of the carriageway.
		 * Partial Closure = road is partially blocked, closed or restricted.
		 * Full Closure = road is fully blocked or closed.
		 */
		closure: FormControl<string | null | undefined>,

		/**
		 * The direction of the disruption on the street. Some example values:
		 * All Directions
		 * All Approaches
		 * Clockwise
		 * Anti-Clockwise
		 * Northbound
		 * Eastbound
		 * Southbound
		 * Westbound
		 * Both Directions
		 */
		directions: FormControl<string | null | undefined>,

		/** Street name */
		name: FormControl<string | null | undefined>,

		/** The ID from the source system of the disruption that this street belongs to. */
		sourceSystemId: FormControl<number | null | undefined>,

		/** The key of the source system of the disruption that this street belongs to. */
		sourceSystemKey: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesStreetFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesStreetFormProperties>({
			closure: new FormControl<string | null | undefined>(undefined),
			directions: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceSystemId: new FormControl<number | null | undefined>(undefined),
			sourceSystemKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesStreetSegment {

		/** geoJSON formatted LineString containing two latitude/longitude (WGS84) pairs that identify the start and end points of the street segment. */
		lineString?: string | null;

		/** The ID from the source system of the disruption that this street belongs to. */
		sourceSystemId?: number | null;

		/** The key of the source system of the disruption that this street belongs to. */
		sourceSystemKey?: string | null;

		/** A 16 digit unique integer identifying a OS ITN (Ordnance Survey Integrated Transport Network) road link. */
		toid?: string | null;
	}
	export interface TflApiPresentationEntitiesStreetSegmentFormProperties {

		/** geoJSON formatted LineString containing two latitude/longitude (WGS84) pairs that identify the start and end points of the street segment. */
		lineString: FormControl<string | null | undefined>,

		/** The ID from the source system of the disruption that this street belongs to. */
		sourceSystemId: FormControl<number | null | undefined>,

		/** The key of the source system of the disruption that this street belongs to. */
		sourceSystemKey: FormControl<string | null | undefined>,

		/** A 16 digit unique integer identifying a OS ITN (Ordnance Survey Integrated Transport Network) road link. */
		toid: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesStreetSegmentFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesStreetSegmentFormProperties>({
			lineString: new FormControl<string | null | undefined>(undefined),
			sourceSystemId: new FormControl<number | null | undefined>(undefined),
			sourceSystemKey: new FormControl<string | null | undefined>(undefined),
			toid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRouteSearchMatch {
		id?: string | null;
		lat?: number | null;
		lineId?: string | null;
		lineName?: string | null;
		lineRouteSection?: Array<TflApiPresentationEntitiesLineRouteSection>;
		lon?: number | null;
		matchedRouteSections?: Array<TflApiPresentationEntitiesMatchedRouteSections>;
		matchedStops?: Array<TflApiPresentationEntitiesMatchedStop>;
		mode?: string | null;
		name?: string | null;
		url?: string | null;
	}
	export interface TflApiPresentationEntitiesRouteSearchMatchFormProperties {
		id: FormControl<string | null | undefined>,
		lat: FormControl<number | null | undefined>,
		lineId: FormControl<string | null | undefined>,
		lineName: FormControl<string | null | undefined>,
		lon: FormControl<number | null | undefined>,
		mode: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRouteSearchMatchFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRouteSearchMatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined),
			lineName: new FormControl<string | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRouteSearchResponse {
		input?: string | null;
		searchMatches?: Array<TflApiPresentationEntitiesRouteSearchMatch>;
	}
	export interface TflApiPresentationEntitiesRouteSearchResponseFormProperties {
		input: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRouteSearchResponseFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRouteSearchResponseFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesRouteSequence {
		direction?: string | null;
		isOutboundOnly?: boolean | null;
		lineId?: string | null;
		lineName?: string | null;
		lineStrings?: Array<string>;
		mode?: string | null;
		orderedLineRoutes?: Array<TflApiPresentationEntitiesOrderedRoute>;
		stations?: Array<TflApiPresentationEntitiesMatchedStop>;
		stopPointSequences?: Array<TflApiPresentationEntitiesStopPointSequence>;
	}
	export interface TflApiPresentationEntitiesRouteSequenceFormProperties {
		direction: FormControl<string | null | undefined>,
		isOutboundOnly: FormControl<boolean | null | undefined>,
		lineId: FormControl<string | null | undefined>,
		lineName: FormControl<string | null | undefined>,
		mode: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesRouteSequenceFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesRouteSequenceFormProperties>({
			direction: new FormControl<string | null | undefined>(undefined),
			isOutboundOnly: new FormControl<boolean | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined),
			lineName: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesStopPointSequence {

		/** The id of this branch. */
		branchId?: number | null;
		direction?: string | null;
		lineId?: string | null;
		lineName?: string | null;

		/**
		 * The ids of the next branch(es) in the sequence. Note that the next and previous branch id can be
		 * identical in the case of a looped route e.g. the Circle line.
		 */
		nextBranchIds?: Array<number>;

		/**
		 * The ids of the previous branch(es) in the sequence. Note that the next and previous branch id can be
		 * identical in the case of a looped route e.g. the Circle line.
		 */
		prevBranchIds?: Array<number>;
		serviceType?: TflApiPresentationEntitiesStopPointSequenceServiceType | null;
		stopPoint?: Array<TflApiPresentationEntitiesMatchedStop>;
	}
	export interface TflApiPresentationEntitiesStopPointSequenceFormProperties {

		/** The id of this branch. */
		branchId: FormControl<number | null | undefined>,
		direction: FormControl<string | null | undefined>,
		lineId: FormControl<string | null | undefined>,
		lineName: FormControl<string | null | undefined>,
		serviceType: FormControl<TflApiPresentationEntitiesStopPointSequenceServiceType | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesStopPointSequenceFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesStopPointSequenceFormProperties>({
			branchId: new FormControl<number | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined),
			lineName: new FormControl<string | null | undefined>(undefined),
			serviceType: new FormControl<TflApiPresentationEntitiesStopPointSequenceServiceType | null | undefined>(undefined),
		});

	}

	export enum TflApiPresentationEntitiesStopPointSequenceServiceType { Regular = 0, Night = 1 }

	export interface TflApiPresentationEntitiesSchedule {
		firstJourney?: TflApiPresentationEntitiesKnownJourney;
		knownJourneys?: Array<TflApiPresentationEntitiesKnownJourney>;
		lastJourney?: TflApiPresentationEntitiesKnownJourney;
		name?: string | null;
		periods?: Array<TflApiPresentationEntitiesPeriod>;
	}
	export interface TflApiPresentationEntitiesScheduleFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesScheduleFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesScheduleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesSearchMatch {
		id?: string | null;
		lat?: number | null;
		lon?: number | null;
		name?: string | null;
		url?: string | null;
	}
	export interface TflApiPresentationEntitiesSearchMatchFormProperties {
		id: FormControl<string | null | undefined>,
		lat: FormControl<number | null | undefined>,
		lon: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesSearchMatchFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesSearchMatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesSearchResponse {
		from?: number | null;
		matches?: Array<TflApiPresentationEntitiesSearchMatch>;
		maxScore?: number | null;
		page?: number | null;
		pageSize?: number | null;
		provider?: string | null;
		query?: string | null;
		total?: number | null;
	}
	export interface TflApiPresentationEntitiesSearchResponseFormProperties {
		from: FormControl<number | null | undefined>,
		maxScore: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		pageSize: FormControl<number | null | undefined>,
		provider: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesSearchResponseFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesSearchResponseFormProperties>({
			from: new FormControl<number | null | undefined>(undefined),
			maxScore: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesStationInterval {
		id?: string | null;
		intervals?: Array<TflApiPresentationEntitiesInterval>;
	}
	export interface TflApiPresentationEntitiesStationIntervalFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesStationIntervalFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesStationIntervalFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesStatusSeverity {
		description?: string | null;
		modeName?: string | null;
		severityLevel?: number | null;
	}
	export interface TflApiPresentationEntitiesStatusSeverityFormProperties {
		description: FormControl<string | null | undefined>,
		modeName: FormControl<string | null | undefined>,
		severityLevel: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesStatusSeverityFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesStatusSeverityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			modeName: new FormControl<string | null | undefined>(undefined),
			severityLevel: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesStopPointCategory {
		availableKeys?: Array<string>;
		category?: string | null;
	}
	export interface TflApiPresentationEntitiesStopPointCategoryFormProperties {
		category: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesStopPointCategoryFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesStopPointCategoryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesStopPointRouteSection {
		destinationName?: string | null;
		direction?: string | null;
		isActive?: boolean | null;
		lineId?: string | null;
		lineString?: string | null;
		mode?: string | null;
		naptanId?: string | null;
		routeSectionName?: string | null;
		serviceType?: string | null;
		validFrom?: Date | null;
		validTo?: Date | null;
		vehicleDestinationText?: string | null;
	}
	export interface TflApiPresentationEntitiesStopPointRouteSectionFormProperties {
		destinationName: FormControl<string | null | undefined>,
		direction: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lineId: FormControl<string | null | undefined>,
		lineString: FormControl<string | null | undefined>,
		mode: FormControl<string | null | undefined>,
		naptanId: FormControl<string | null | undefined>,
		routeSectionName: FormControl<string | null | undefined>,
		serviceType: FormControl<string | null | undefined>,
		validFrom: FormControl<Date | null | undefined>,
		validTo: FormControl<Date | null | undefined>,
		vehicleDestinationText: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesStopPointRouteSectionFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesStopPointRouteSectionFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined),
			lineString: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			naptanId: new FormControl<string | null | undefined>(undefined),
			routeSectionName: new FormControl<string | null | undefined>(undefined),
			serviceType: new FormControl<string | null | undefined>(undefined),
			validFrom: new FormControl<Date | null | undefined>(undefined),
			validTo: new FormControl<Date | null | undefined>(undefined),
			vehicleDestinationText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paged response containing StopPoints */
	export interface TflApiPresentationEntitiesStopPointsResponse {

		/** The centre latitude/longitude of this list of StopPoints */
		centrePoint?: Array<number>;

		/** The index of this page */
		page?: number | null;

		/** The maximum size of the page in this response i.e. the maximum number of StopPoints */
		pageSize?: number | null;

		/** Collection of stop points */
		stopPoints?: Array<TflApiPresentationEntitiesStopPoint>;

		/** The total number of StopPoints available across all pages */
		total?: number | null;
	}

	/** A paged response containing StopPoints */
	export interface TflApiPresentationEntitiesStopPointsResponseFormProperties {

		/** The index of this page */
		page: FormControl<number | null | undefined>,

		/** The maximum size of the page in this response i.e. the maximum number of StopPoints */
		pageSize: FormControl<number | null | undefined>,

		/** The total number of StopPoints available across all pages */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesStopPointsResponseFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesStopPointsResponseFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesTimetable {
		departureStopId?: string | null;
		routes?: Array<TflApiPresentationEntitiesTimetableRoute>;
	}
	export interface TflApiPresentationEntitiesTimetableFormProperties {
		departureStopId: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesTimetableFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesTimetableFormProperties>({
			departureStopId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesTimetableRoute {
		schedules?: Array<TflApiPresentationEntitiesSchedule>;
		stationIntervals?: Array<TflApiPresentationEntitiesStationInterval>;
	}
	export interface TflApiPresentationEntitiesTimetableRouteFormProperties {
	}
	export function CreateTflApiPresentationEntitiesTimetableRouteFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesTimetableRouteFormProperties>({
		});

	}

	export interface TflApiPresentationEntitiesTimetableResponse {
		direction?: string | null;
		disambiguation?: TflApiPresentationEntitiesTimetablesDisambiguation;
		lineId?: string | null;
		lineName?: string | null;
		pdfUrl?: string | null;
		stations?: Array<TflApiPresentationEntitiesMatchedStop>;
		statusErrorMessage?: string | null;
		stops?: Array<TflApiPresentationEntitiesMatchedStop>;
		timetable?: TflApiPresentationEntitiesTimetable;
	}
	export interface TflApiPresentationEntitiesTimetableResponseFormProperties {
		direction: FormControl<string | null | undefined>,
		lineId: FormControl<string | null | undefined>,
		lineName: FormControl<string | null | undefined>,
		pdfUrl: FormControl<string | null | undefined>,
		statusErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesTimetableResponseFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesTimetableResponseFormProperties>({
			direction: new FormControl<string | null | undefined>(undefined),
			lineId: new FormControl<string | null | undefined>(undefined),
			lineName: new FormControl<string | null | undefined>(undefined),
			pdfUrl: new FormControl<string | null | undefined>(undefined),
			statusErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TflApiPresentationEntitiesTimetablesDisambiguation {
		disambiguationOptions?: Array<TflApiPresentationEntitiesTimetablesDisambiguationOption>;
	}
	export interface TflApiPresentationEntitiesTimetablesDisambiguationFormProperties {
	}
	export function CreateTflApiPresentationEntitiesTimetablesDisambiguationFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesTimetablesDisambiguationFormProperties>({
		});

	}

	export interface TflApiPresentationEntitiesTimetablesDisambiguationOption {
		description?: string | null;
		uri?: string | null;
	}
	export interface TflApiPresentationEntitiesTimetablesDisambiguationOptionFormProperties {
		description: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTflApiPresentationEntitiesTimetablesDisambiguationOptionFormGroup() {
		return new FormGroup<TflApiPresentationEntitiesTimetablesDisambiguationOptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all accident details for accidents occuring in the specified year
		 * Get AccidentStats/{year}
		 * @param {number} year The year for which to filter the accidents on.
		 * @return {Array<TflApiPresentationEntitiesAccidentStatsAccidentDetail>} OK
		 */
		AccidentStats_Get(year: number): Observable<Array<TflApiPresentationEntitiesAccidentStatsAccidentDetail>> {
			return this.http.get<Array<TflApiPresentationEntitiesAccidentStatsAccidentDetail>>(this.baseUri + 'AccidentStats/' + year, {});
		}

		/**
		 * Gets air quality data feed
		 * Get AirQuality
		 * @return {SystemObject} OK
		 */
		AirQuality_Get(): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'AirQuality', {});
		}

		/**
		 * Gets all bike point locations. The Place object has an addtionalProperties array which contains the nbBikes, nbDocks and nbSpaces
		 * numbers which give the status of the BikePoint. A mismatch in these numbers i.e. nbDocks - (nbBikes + nbSpaces) != 0 indicates broken docks.
		 * Get BikePoint
		 * @return {Array<TflApiPresentationEntitiesPlace>} OK
		 */
		BikePoint_GetAll(): Observable<Array<TflApiPresentationEntitiesPlace>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlace>>(this.baseUri + 'BikePoint', {});
		}

		/**
		 * Search for bike stations by their name, a bike point's name often contains information about the name of the street
		 * or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status
		 * or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on /BikePoint/id.
		 * Get BikePoint/Search
		 * @param {string} query The search term e.g. "St. James"
		 * @return {Array<TflApiPresentationEntitiesPlace>} OK
		 */
		BikePoint_Search(query: string): Observable<Array<TflApiPresentationEntitiesPlace>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlace>>(this.baseUri + 'BikePoint/Search?query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Gets the bike point with the given id.
		 * Get BikePoint/{id}
		 * @param {string} id A bike point id (a list of ids can be obtained from the above BikePoint call)
		 * @return {TflApiPresentationEntitiesPlace} OK
		 */
		BikePoint_Get(id: string): Observable<TflApiPresentationEntitiesPlace> {
			return this.http.get<TflApiPresentationEntitiesPlace>(this.baseUri + 'BikePoint/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets taxis and minicabs contact information
		 * Get Cabwise/search
		 * @param {number} lat Latitude
		 * @param {number} lon Longitude
		 * @param {string} optype Operator Type e.g Minicab, Executive, Limousine
		 * @param {string} wc Wheelchair accessible
		 * @param {number} radius The radius of the bounding circle in metres
		 * @param {string} name Trading name of operating company
		 * @param {number} maxResults An optional parameter to limit the number of results return. Default and maximum is 20.
		 * @param {boolean} legacyFormat Legacy Format
		 * @param {boolean} forceXml Force Xml
		 * @param {boolean} twentyFourSevenOnly Twenty Four Seven Only
		 * @return {SystemObject} OK
		 */
		Cabwise_Get(lat: number, lon: number, optype: string | null | undefined, wc: string | null | undefined, radius: number | null | undefined, name: string | null | undefined, maxResults: number | null | undefined, legacyFormat: boolean | null | undefined, forceXml: boolean | null | undefined, twentyFourSevenOnly: boolean | null | undefined): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'Cabwise/search?lat=' + lat + '&lon=' + lon + '&optype=' + (optype == null ? '' : encodeURIComponent(optype)) + '&wc=' + (wc == null ? '' : encodeURIComponent(wc)) + '&radius=' + radius + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&maxResults=' + maxResults + '&legacyFormat=' + legacyFormat + '&forceXml=' + forceXml + '&twentyFourSevenOnly=' + twentyFourSevenOnly, {});
		}

		/**
		 * Perform a Journey Planner search from the parameters specified in simple types
		 * Get Journey/JourneyResults/{from}/to/{to}
		 * @param {string} from Origin of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
		 * @param {string} to Destination of the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
		 * @param {string} via Travel through point on the journey. Can be WGS84 coordinates expressed as "lat,long", a UK postcode, a Naptan (StopPoint) id, an ICS StopId, or a free-text string (will cause disambiguation unless it exactly matches a point of interest name).
		 * @param {boolean} nationalSearch Does the journey cover stops outside London? eg. "nationalSearch=true"
		 * @param {string} date The date must be in yyyyMMdd format
		 * @param {string} time The time must be in HHmm format
		 * @param {TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeType} timeIs Does the time given relate to arrival or leaving time? Possible options: "departing" | "arriving"
		 * @param {Journey_JourneyResultsJourneyPreference} journeyPreference The journey preference eg possible options: "leastinterchange" | "leasttime" | "leastwalking"
		 * @param {Array<string>} mode The mode must be a comma separated list of modes. eg possible options: "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"
		 * @param {Array<string>} accessibilityPreference The accessibility preference must be a comma separated list eg. "noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"
		 * @param {string} fromName An optional name to associate with the origin of the journey in the results.
		 * @param {string} toName An optional name to associate with the destination of the journey in the results.
		 * @param {string} viaName An optional name to associate with the via point of the journey in the results.
		 * @param {string} maxTransferMinutes The max walking time in minutes for transfer eg. "120"
		 * @param {string} maxWalkingMinutes The max walking time in minutes for journeys eg. "120"
		 * @param {Journey_JourneyResultsWalkingSpeed} walkingSpeed The walking speed. eg possible options: "slow" | "average" | "fast".
		 * @param {Journey_JourneyResultsCyclePreference} cyclePreference The cycle preference. eg possible options: "allTheWay" | "leaveAtStation" | "takeOnTransport" | "cycleHire"
		 * @param {string} adjustment Time adjustment command. eg possible options: "TripFirst" | "TripLast"
		 * @param {Array<string>} bikeProficiency A comma separated list of cycling proficiency levels. eg possible options: "easy,moderate,fast"
		 * @param {boolean} alternativeCycle Option to determine whether to return alternative cycling journey
		 * @param {boolean} alternativeWalking Option to determine whether to return alternative walking journey
		 * @param {boolean} applyHtmlMarkup Flag to determine whether certain text (e.g. walking instructions) should be output with HTML tags or not.
		 * @param {boolean} useMultiModalCall A boolean to indicate whether or not to return 3 public transport journeys, a bus journey, a cycle hire journey, a personal cycle journey and a walking journey
		 * @param {boolean} walkingOptimization A boolean to indicate whether to optimize journeys using walking
		 * @param {boolean} taxiOnlyTrip A boolean to indicate whether to return one or more taxi journeys. Note, setting this to true will override "useMultiModalCall".
		 * @param {boolean} routeBetweenEntrances A boolean to indicate whether public transport routes should include directions between platforms and station entrances.
		 * @param {boolean} useRealTimeLiveArrivals A boolean to indicate if we want to receive real time live arrivals data where available.
		 * @param {boolean} calcOneDirection A boolean to make Journey Planner calculate journeys in one temporal direction only. In other words, only calculate journeys after the 'depart' time, or before the 'arrive' time. By default, the Journey Planner engine (EFA) calculates journeys in both temporal directions.
		 * @return {TflApiPresentationEntitiesJourneyPlannerItineraryResult} OK
		 */
		Journey_JourneyResults(from: string, to: string, via: string | null | undefined, nationalSearch: boolean | null | undefined, date: string | null | undefined, time: string | null | undefined, timeIs: TflApiPresentationEntitiesJourneyPlannerSearchCriteriaDateTimeType | null | undefined, journeyPreference: Journey_JourneyResultsJourneyPreference | null | undefined, mode: Array<string> | null | undefined, accessibilityPreference: Array<string> | null | undefined, fromName: string | null | undefined, toName: string | null | undefined, viaName: string | null | undefined, maxTransferMinutes: string | null | undefined, maxWalkingMinutes: string | null | undefined, walkingSpeed: Journey_JourneyResultsWalkingSpeed | null | undefined, cyclePreference: Journey_JourneyResultsCyclePreference | null | undefined, adjustment: string | null | undefined, bikeProficiency: Array<string> | null | undefined, alternativeCycle: boolean | null | undefined, alternativeWalking: boolean | null | undefined, applyHtmlMarkup: boolean | null | undefined, useMultiModalCall: boolean | null | undefined, walkingOptimization: boolean | null | undefined, taxiOnlyTrip: boolean | null | undefined, routeBetweenEntrances: boolean | null | undefined, useRealTimeLiveArrivals: boolean | null | undefined, calcOneDirection: boolean | null | undefined): Observable<TflApiPresentationEntitiesJourneyPlannerItineraryResult> {
			return this.http.get<TflApiPresentationEntitiesJourneyPlannerItineraryResult>(this.baseUri + 'Journey/JourneyResults/' + (from == null ? '' : encodeURIComponent(from)) + '/to/' + (to == null ? '' : encodeURIComponent(to)) + '&via=' + (via == null ? '' : encodeURIComponent(via)) + '&nationalSearch=' + nationalSearch + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&time=' + (time == null ? '' : encodeURIComponent(time)) + '&timeIs=' + timeIs + '&journeyPreference=' + journeyPreference + '&' + mode?.map(z => `mode=${encodeURIComponent(z)}`).join('&') + '&' + accessibilityPreference?.map(z => `accessibilityPreference=${encodeURIComponent(z)}`).join('&') + '&fromName=' + (fromName == null ? '' : encodeURIComponent(fromName)) + '&toName=' + (toName == null ? '' : encodeURIComponent(toName)) + '&viaName=' + (viaName == null ? '' : encodeURIComponent(viaName)) + '&maxTransferMinutes=' + (maxTransferMinutes == null ? '' : encodeURIComponent(maxTransferMinutes)) + '&maxWalkingMinutes=' + (maxWalkingMinutes == null ? '' : encodeURIComponent(maxWalkingMinutes)) + '&walkingSpeed=' + walkingSpeed + '&cyclePreference=' + cyclePreference + '&adjustment=' + (adjustment == null ? '' : encodeURIComponent(adjustment)) + '&' + bikeProficiency?.map(z => `bikeProficiency=${encodeURIComponent(z)}`).join('&') + '&alternativeCycle=' + alternativeCycle + '&alternativeWalking=' + alternativeWalking + '&applyHtmlMarkup=' + applyHtmlMarkup + '&useMultiModalCall=' + useMultiModalCall + '&walkingOptimization=' + walkingOptimization + '&taxiOnlyTrip=' + taxiOnlyTrip + '&routeBetweenEntrances=' + routeBetweenEntrances + '&useRealTimeLiveArrivals=' + useRealTimeLiveArrivals + '&calcOneDirection=' + calcOneDirection, {});
		}

		/**
		 * Gets a list of all of the available journey planner modes
		 * Get Journey/Meta/Modes
		 * @return {Array<TflApiPresentationEntitiesMode>} OK
		 */
		Journey_Meta(): Observable<Array<TflApiPresentationEntitiesMode>> {
			return this.http.get<Array<TflApiPresentationEntitiesMode>>(this.baseUri + 'Journey/Meta/Modes', {});
		}

		/**
		 * Gets a list of valid disruption categories
		 * Get Line/Meta/DisruptionCategories
		 * @return {Array<string>} OK
		 */
		Line_MetaDisruptionCategories(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'Line/Meta/DisruptionCategories', {});
		}

		/**
		 * Gets a list of valid modes
		 * Get Line/Meta/Modes
		 * @return {Array<TflApiPresentationEntitiesMode>} OK
		 */
		Line_MetaModes(): Observable<Array<TflApiPresentationEntitiesMode>> {
			return this.http.get<Array<TflApiPresentationEntitiesMode>>(this.baseUri + 'Line/Meta/Modes', {});
		}

		/**
		 * Gets a list of valid ServiceTypes to filter on
		 * Get Line/Meta/ServiceTypes
		 * @return {Array<string>} OK
		 */
		Line_MetaServiceTypes(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'Line/Meta/ServiceTypes', {});
		}

		/**
		 * Gets a list of valid severity codes
		 * Get Line/Meta/Severity
		 * @return {Array<TflApiPresentationEntitiesStatusSeverity>} OK
		 */
		Line_MetaSeverity(): Observable<Array<TflApiPresentationEntitiesStatusSeverity>> {
			return this.http.get<Array<TflApiPresentationEntitiesStatusSeverity>>(this.baseUri + 'Line/Meta/Severity', {});
		}

		/**
		 * Gets lines that serve the given modes.
		 * Get Line/Mode/{modes}
		 * @param {Array<string>} modes A comma-separated list of modes e.g. tube,dlr
		 * @return {Array<TflApiPresentationEntitiesLine>} OK
		 */
		Line_GetByMode(modes: Array<string>): Observable<Array<TflApiPresentationEntitiesLine>> {
			return this.http.get<Array<TflApiPresentationEntitiesLine>>(this.baseUri + 'Line/Mode/{modes}', {});
		}

		/**
		 * Get disruptions for all lines of the given modes.
		 * Get Line/Mode/{modes}/Disruption
		 * @param {Array<string>} modes A comma-separated list of modes e.g. tube,dlr
		 * @return {Array<TflApiPresentationEntitiesDisruption>} OK
		 */
		Line_DisruptionByMode(modes: Array<string>): Observable<Array<TflApiPresentationEntitiesDisruption>> {
			return this.http.get<Array<TflApiPresentationEntitiesDisruption>>(this.baseUri + 'Line/Mode/{modes}/Disruption', {});
		}

		/**
		 * Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
		 * Get Line/Mode/{modes}/Route
		 * @param {Array<string>} modes A comma-separated list of modes e.g. tube,dlr
		 * @param {Array<TflApiPresentationEntitiesStopPointSequenceServiceType>} serviceTypes A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
		 * @return {Array<TflApiPresentationEntitiesLine>} OK
		 */
		Line_RouteByMode(modes: Array<string>, serviceTypes: Array<TflApiPresentationEntitiesStopPointSequenceServiceType> | null | undefined): Observable<Array<TflApiPresentationEntitiesLine>> {
			return this.http.get<Array<TflApiPresentationEntitiesLine>>(this.baseUri + 'Line/Mode/{modes}/Route?' + serviceTypes?.map(z => `serviceTypes=${z}`).join('&'), {});
		}

		/**
		 * Gets the line status of for all lines for the given modes
		 * Get Line/Mode/{modes}/Status
		 * @param {Array<string>} modes A comma-separated list of modes to filter by. e.g. tube,dlr
		 * @param {boolean} detail Include details of the disruptions that are causing the line status including the affected stops and routes
		 * @param {string} severityLevel If specified, ensures that only those line status(es) are returned within the lines that have disruptions with the matching severity level.
		 * @return {Array<TflApiPresentationEntitiesLine>} OK
		 */
		Line_StatusByMode(modes: Array<string>, detail: boolean | null | undefined, severityLevel: string | null | undefined): Observable<Array<TflApiPresentationEntitiesLine>> {
			return this.http.get<Array<TflApiPresentationEntitiesLine>>(this.baseUri + 'Line/Mode/{modes}/Status?detail=' + detail + '&severityLevel=' + (severityLevel == null ? '' : encodeURIComponent(severityLevel)), {});
		}

		/**
		 * Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
		 * Get Line/Route
		 * @param {Array<TflApiPresentationEntitiesStopPointSequenceServiceType>} serviceTypes A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
		 * @return {Array<TflApiPresentationEntitiesLine>} OK
		 */
		Line_Route(serviceTypes: Array<TflApiPresentationEntitiesStopPointSequenceServiceType> | null | undefined): Observable<Array<TflApiPresentationEntitiesLine>> {
			return this.http.get<Array<TflApiPresentationEntitiesLine>>(this.baseUri + 'Line/Route?' + serviceTypes?.map(z => `serviceTypes=${z}`).join('&'), {});
		}

		/**
		 * Search for lines or routes matching the query string
		 * Get Line/Search/{query}
		 * @param {string} query Search term e.g victoria
		 * @param {Array<string>} modes Optionally filter by the specified modes
		 * @param {Array<TflApiPresentationEntitiesStopPointSequenceServiceType>} serviceTypes A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
		 * @return {TflApiPresentationEntitiesRouteSearchResponse} OK
		 */
		Line_Search(query: string, modes: Array<string> | null | undefined, serviceTypes: Array<TflApiPresentationEntitiesStopPointSequenceServiceType> | null | undefined): Observable<TflApiPresentationEntitiesRouteSearchResponse> {
			return this.http.get<TflApiPresentationEntitiesRouteSearchResponse>(this.baseUri + 'Line/Search/' + (query == null ? '' : encodeURIComponent(query)) + '&' + modes?.map(z => `modes=${encodeURIComponent(z)}`).join('&') + '&' + serviceTypes?.map(z => `serviceTypes=${z}`).join('&'), {});
		}

		/**
		 * Gets the line status for all lines with a given severity
		 * A list of valid severity codes can be obtained from a call to Line/Meta/Severity
		 * Get Line/Status/{severity}
		 * @param {number} severity The level of severity (eg: a number from 0 to 14)
		 * @return {Array<TflApiPresentationEntitiesLine>} OK
		 */
		Line_StatusBySeverity(severity: number): Observable<Array<TflApiPresentationEntitiesLine>> {
			return this.http.get<Array<TflApiPresentationEntitiesLine>>(this.baseUri + 'Line/Status/' + severity, {});
		}

		/**
		 * Gets lines that match the specified line ids.
		 * Get Line/{ids}
		 * @param {Array<string>} ids A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
		 * @return {Array<TflApiPresentationEntitiesLine>} OK
		 */
		Line_Get(ids: Array<string>): Observable<Array<TflApiPresentationEntitiesLine>> {
			return this.http.get<Array<TflApiPresentationEntitiesLine>>(this.baseUri + 'Line/{ids}', {});
		}

		/**
		 * Get the list of arrival predictions for given line ids based at the given stop
		 * Get Line/{ids}/Arrivals/{stopPointId}
		 * @param {Array<string>} ids A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
		 * @param {string} stopPointId Optional. Id of stop to get arrival predictions for (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
		 * @param {Line_ArrivalsDirection} direction Optional. The direction of travel. Can be inbound or outbound or all. If left blank, and destinationStopId is set, will default to all
		 * @param {string} destinationStationId Optional. Id of destination stop
		 * @return {Array<TflApiPresentationEntitiesPrediction>} OK
		 */
		Line_Arrivals(ids: Array<string>, stopPointId: string, direction: Line_ArrivalsDirection | null | undefined, destinationStationId: string | null | undefined): Observable<Array<TflApiPresentationEntitiesPrediction>> {
			return this.http.get<Array<TflApiPresentationEntitiesPrediction>>(this.baseUri + 'Line/{ids}/Arrivals/' + (stopPointId == null ? '' : encodeURIComponent(stopPointId)) + '&direction=' + direction + '&destinationStationId=' + (destinationStationId == null ? '' : encodeURIComponent(destinationStationId)), {});
		}

		/**
		 * Get disruptions for the given line ids
		 * Get Line/{ids}/Disruption
		 * @param {Array<string>} ids A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
		 * @return {Array<TflApiPresentationEntitiesDisruption>} OK
		 */
		Line_Disruption(ids: Array<string>): Observable<Array<TflApiPresentationEntitiesDisruption>> {
			return this.http.get<Array<TflApiPresentationEntitiesDisruption>>(this.baseUri + 'Line/{ids}/Disruption', {});
		}

		/**
		 * Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
		 * Get Line/{ids}/Route
		 * @param {Array<string>} ids A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
		 * @param {Array<TflApiPresentationEntitiesStopPointSequenceServiceType>} serviceTypes A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
		 * @return {Array<TflApiPresentationEntitiesLine>} OK
		 */
		Line_LineRoutesByIds(ids: Array<string>, serviceTypes: Array<TflApiPresentationEntitiesStopPointSequenceServiceType> | null | undefined): Observable<Array<TflApiPresentationEntitiesLine>> {
			return this.http.get<Array<TflApiPresentationEntitiesLine>>(this.baseUri + 'Line/{ids}/Route?' + serviceTypes?.map(z => `serviceTypes=${z}`).join('&'), {});
		}

		/**
		 * Gets the line status of for given line ids e.g Minor Delays
		 * Get Line/{ids}/Status
		 * @param {Array<string>} ids A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
		 * @param {boolean} detail Include details of the disruptions that are causing the line status including the affected stops and routes
		 * @return {Array<TflApiPresentationEntitiesLine>} OK
		 */
		Line_StatusByIds(ids: Array<string>, detail: boolean | null | undefined): Observable<Array<TflApiPresentationEntitiesLine>> {
			return this.http.get<Array<TflApiPresentationEntitiesLine>>(this.baseUri + 'Line/{ids}/Status?detail=' + detail, {});
		}

		/**
		 * Gets the line status for given line ids during the provided dates e.g Minor Delays
		 * Get Line/{ids}/Status/{StartDate}/to/{EndDate}
		 * @param {Array<string>} ids A comma-separated list of line ids e.g. victoria,circle,N133. Max. approx. 20 ids.
		 * @param {boolean} detail Include details of the disruptions that are causing the line status including the affected stops and routes
		 * @param {string} StartDate Automatically added
		 * @param {string} EndDate Automatically added
		 * @return {Array<TflApiPresentationEntitiesLine>} OK
		 */
		Line_Status(ids: Array<string>, detail: boolean | null | undefined, startDate: string, endDate: string, dateRange_startDate: Date | null | undefined, dateRange_endDate: Date | null | undefined, StartDate: string, EndDate: string): Observable<Array<TflApiPresentationEntitiesLine>> {
			return this.http.get<Array<TflApiPresentationEntitiesLine>>(this.baseUri + 'Line/{ids}/Status/' + (StartDate == null ? '' : encodeURIComponent(StartDate)) + '/to/' + (EndDate == null ? '' : encodeURIComponent(EndDate)) + '?detail=' + detail + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&dateRange_startDate=' + dateRange_startDate?.toISOString() + '&dateRange_endDate=' + dateRange_endDate?.toISOString(), {});
		}

		/**
		 * Gets all valid routes for given line id, including the sequence of stops on each route.
		 * Get Line/{id}/Route/Sequence/{direction}
		 * @param {string} id A single line id e.g. victoria
		 * @param {Line_ArrivalsDirection} direction The direction of travel. Can be inbound or outbound.
		 * @param {Array<TflApiPresentationEntitiesStopPointSequenceServiceType>} serviceTypes A comma seperated list of service types to filter on. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
		 * @param {boolean} excludeCrowding That excludes crowding from line disruptions. Can be true or false.
		 * @return {TflApiPresentationEntitiesRouteSequence} OK
		 */
		Line_RouteSequence(id: string, direction: Line_ArrivalsDirection, serviceTypes: Array<TflApiPresentationEntitiesStopPointSequenceServiceType> | null | undefined, excludeCrowding: boolean | null | undefined): Observable<TflApiPresentationEntitiesRouteSequence> {
			return this.http.get<TflApiPresentationEntitiesRouteSequence>(this.baseUri + 'Line/' + (id == null ? '' : encodeURIComponent(id)) + '/Route/Sequence/' + direction + '&' + serviceTypes?.map(z => `serviceTypes=${z}`).join('&') + '&excludeCrowding=' + excludeCrowding, {});
		}

		/**
		 * Gets a list of the stations that serve the given line id
		 * Get Line/{id}/StopPoints
		 * @param {string} id A single line id e.g. victoria
		 * @param {boolean} tflOperatedNationalRailStationsOnly If the national-rail line is requested, this flag will filter the national rail stations so that only those operated by TfL are returned
		 * @return {Array<TflApiPresentationEntitiesStopPoint>} OK
		 */
		Line_StopPoints(id: string, tflOperatedNationalRailStationsOnly: boolean | null | undefined): Observable<Array<TflApiPresentationEntitiesStopPoint>> {
			return this.http.get<Array<TflApiPresentationEntitiesStopPoint>>(this.baseUri + 'Line/' + (id == null ? '' : encodeURIComponent(id)) + '/StopPoints&tflOperatedNationalRailStationsOnly=' + tflOperatedNationalRailStationsOnly, {});
		}

		/**
		 * Gets the timetable for a specified station on the give line
		 * Get Line/{id}/Timetable/{fromStopPointId}
		 * @param {string} fromStopPointId The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
		 * @param {string} id A single line id e.g. victoria
		 * @return {TflApiPresentationEntitiesTimetableResponse} OK
		 */
		Line_Timetable(fromStopPointId: string, id: string): Observable<TflApiPresentationEntitiesTimetableResponse> {
			return this.http.get<TflApiPresentationEntitiesTimetableResponse>(this.baseUri + 'Line/' + (id == null ? '' : encodeURIComponent(id)) + '/Timetable/' + (fromStopPointId == null ? '' : encodeURIComponent(fromStopPointId)), {});
		}

		/**
		 * Gets the timetable for a specified station on the give line with specified destination
		 * Get Line/{id}/Timetable/{fromStopPointId}/to/{toStopPointId}
		 * @param {string} fromStopPointId The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
		 * @param {string} id A single line id e.g. victoria
		 * @param {string} toStopPointId The destination stations's Naptan code
		 * @return {TflApiPresentationEntitiesTimetableResponse} OK
		 */
		Line_TimetableTo(fromStopPointId: string, id: string, toStopPointId: string): Observable<TflApiPresentationEntitiesTimetableResponse> {
			return this.http.get<TflApiPresentationEntitiesTimetableResponse>(this.baseUri + 'Line/' + (id == null ? '' : encodeURIComponent(id)) + '/Timetable/' + (fromStopPointId == null ? '' : encodeURIComponent(fromStopPointId)) + '/to/' + (toStopPointId == null ? '' : encodeURIComponent(toStopPointId)), {});
		}

		/**
		 * Returns the service type active for a mode.
		 * Currently only supports tube
		 * Get Mode/ActiveServiceTypes
		 * @return {Array<TflApiPresentationEntitiesActiveServiceType>} OK
		 */
		Mode_GetActiveServiceTypes(): Observable<Array<TflApiPresentationEntitiesActiveServiceType>> {
			return this.http.get<Array<TflApiPresentationEntitiesActiveServiceType>>(this.baseUri + 'Mode/ActiveServiceTypes', {});
		}

		/**
		 * Gets the next arrival predictions for all stops of a given mode
		 * Get Mode/{mode}/Arrivals
		 * @param {string} mode A mode name e.g. tube, dlr
		 * @param {number} count A number of arrivals to return for each stop, -1 to return all available.
		 * @return {Array<TflApiPresentationEntitiesPrediction>} OK
		 */
		Mode_Arrivals(mode: string, count: number | null | undefined): Observable<Array<TflApiPresentationEntitiesPrediction>> {
			return this.http.get<Array<TflApiPresentationEntitiesPrediction>>(this.baseUri + 'Mode/' + (mode == null ? '' : encodeURIComponent(mode)) + '/Arrivals&count=' + count, {});
		}

		/**
		 * Get the occupancy for bike points.
		 * Get Occupancy/BikePoints/{ids}
		 * @return {Array<TflApiPresentationEntitiesBikePointOccupancy>} OK
		 */
		Occupancy_GetBikePointsOccupancies(ids: Array<string>): Observable<Array<TflApiPresentationEntitiesBikePointOccupancy>> {
			return this.http.get<Array<TflApiPresentationEntitiesBikePointOccupancy>>(this.baseUri + 'Occupancy/BikePoints/{ids}', {});
		}

		/**
		 * Gets the occupancy for all car parks that have occupancy data
		 * Get Occupancy/CarPark
		 * @return {Array<TflApiPresentationEntitiesCarParkOccupancy>} OK
		 */
		OccupancyGet(): Observable<Array<TflApiPresentationEntitiesCarParkOccupancy>> {
			return this.http.get<Array<TflApiPresentationEntitiesCarParkOccupancy>>(this.baseUri + 'Occupancy/CarPark', {});
		}

		/**
		 * Gets the occupancy for a car park with a given id
		 * Get Occupancy/CarPark/{id}
		 * @return {TflApiPresentationEntitiesCarParkOccupancy} OK
		 */
		Occupancy_Get(id: string): Observable<TflApiPresentationEntitiesCarParkOccupancy> {
			return this.http.get<TflApiPresentationEntitiesCarParkOccupancy>(this.baseUri + 'Occupancy/CarPark/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets the occupancy for all charge connectors
		 * Get Occupancy/ChargeConnector
		 * @return {Array<TflApiPresentationEntitiesChargeConnectorOccupancy>} OK
		 */
		Occupancy_GetAllChargeConnectorStatus(): Observable<Array<TflApiPresentationEntitiesChargeConnectorOccupancy>> {
			return this.http.get<Array<TflApiPresentationEntitiesChargeConnectorOccupancy>>(this.baseUri + 'Occupancy/ChargeConnector', {});
		}

		/**
		 * Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
		 * Get Occupancy/ChargeConnector/{ids}
		 * @return {Array<TflApiPresentationEntitiesChargeConnectorOccupancy>} OK
		 */
		Occupancy_GetChargeConnectorStatus(ids: Array<string>): Observable<Array<TflApiPresentationEntitiesChargeConnectorOccupancy>> {
			return this.http.get<Array<TflApiPresentationEntitiesChargeConnectorOccupancy>>(this.baseUri + 'Occupancy/ChargeConnector/{ids}', {});
		}

		/**
		 * Gets the places that lie within a geographic region. The geographic region of interest can either be specified
		 * by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
		 * its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
		 * Optionally filters on type and can strip properties for a smaller payload.
		 * Get Place
		 * @param {number} radius The radius of the bounding circle in metres when only lat/lon are specified.
		 * @param {Array<string>} categories An optional list of comma separated property categories to return in the Place's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /Place/Meta/categories endpoint)
		 * @param {boolean} includeChildren Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned
		 * @param {Array<string>} type Place types to filter on, or null to return all types
		 * @param {boolean} activeOnly An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)
		 * @param {number} numberOfPlacesToReturn If specified, limits the number of returned places equal to the given value
		 * @return {Array<TflApiPresentationEntitiesStopPoint>} OK
		 */
		Place_GetByGeo(radius: number | null | undefined, categories: Array<string> | null | undefined, includeChildren: boolean | null | undefined, type: Array<string> | null | undefined, activeOnly: boolean | null | undefined, numberOfPlacesToReturn: number | null | undefined, placeGeo_swLat: number | null | undefined, placeGeo_swLon: number | null | undefined, placeGeo_neLat: number | null | undefined, placeGeo_neLon: number | null | undefined, placeGeo_lat: number | null | undefined, placeGeo_lon: number | null | undefined): Observable<Array<TflApiPresentationEntitiesStopPoint>> {
			return this.http.get<Array<TflApiPresentationEntitiesStopPoint>>(this.baseUri + 'Place?radius=' + radius + '&' + categories?.map(z => `categories=${encodeURIComponent(z)}`).join('&') + '&includeChildren=' + includeChildren + '&' + type?.map(z => `type=${encodeURIComponent(z)}`).join('&') + '&activeOnly=' + activeOnly + '&numberOfPlacesToReturn=' + numberOfPlacesToReturn + '&placeGeo_swLat=' + placeGeo_swLat + '&placeGeo_swLon=' + placeGeo_swLon + '&placeGeo_neLat=' + placeGeo_neLat + '&placeGeo_neLon=' + placeGeo_neLon + '&placeGeo_lat=' + placeGeo_lat + '&placeGeo_lon=' + placeGeo_lon, {});
		}

		/**
		 * Gets the set of streets associated with a post code.
		 * Get Place/Address/Streets/{Postcode}
		 * @param {string} Postcode Automatically added
		 * @return {SystemObject} OK
		 */
		Place_GetStreetsByPostCode(postcode: string, postcodeInput_postcode: string | null | undefined, Postcode: string): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'Place/Address/Streets/' + (Postcode == null ? '' : encodeURIComponent(Postcode)) + '?postcode=' + (postcode == null ? '' : encodeURIComponent(postcode)) + '&postcodeInput_postcode=' + (postcodeInput_postcode == null ? '' : encodeURIComponent(postcodeInput_postcode)), {});
		}

		/**
		 * Gets a list of all of the available place property categories and keys.
		 * Get Place/Meta/Categories
		 * @return {Array<TflApiPresentationEntitiesPlaceCategory>} OK
		 */
		Place_MetaCategories(): Observable<Array<TflApiPresentationEntitiesPlaceCategory>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlaceCategory>>(this.baseUri + 'Place/Meta/Categories', {});
		}

		/**
		 * Gets a list of the available types of Place.
		 * Get Place/Meta/PlaceTypes
		 * @return {Array<TflApiPresentationEntitiesPlaceCategory>} OK
		 */
		Place_MetaPlaceTypes(): Observable<Array<TflApiPresentationEntitiesPlaceCategory>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlaceCategory>>(this.baseUri + 'Place/Meta/PlaceTypes', {});
		}

		/**
		 * Gets all places that matches the given query
		 * Get Place/Search
		 * @param {string} name The name of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their names.
		 * @param {Array<string>} types A comma-separated list of the types to return. Max. approx 12 types.
		 * @return {Array<TflApiPresentationEntitiesPlace>} OK
		 */
		Place_Search(name: string, types: Array<string> | null | undefined): Observable<Array<TflApiPresentationEntitiesPlace>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlace>>(this.baseUri + 'Place/Search?name=' + (name == null ? '' : encodeURIComponent(name)) + '&' + types?.map(z => `types=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Gets all places of a given type
		 * Get Place/Type/{types}
		 * @param {Array<string>} types A comma-separated list of the types to return. Max. approx 12 types.
		 *             A valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint.
		 * @param {boolean} activeOnly An optional parameter to limit the results to active records only (Currently only the 'VariableMessageSign' place type is supported)
		 * @return {Array<TflApiPresentationEntitiesPlace>} OK
		 */
		Place_GetByType(types: Array<string>, activeOnly: boolean | null | undefined): Observable<Array<TflApiPresentationEntitiesPlace>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlace>>(this.baseUri + 'Place/Type/{types}?activeOnly=' + activeOnly, {});
		}

		/**
		 * Gets the place with the given id.
		 * Get Place/{id}
		 * @param {string} id The id of the place, you can use the /Place/Types/{types} endpoint to get a list of places for a given type including their ids
		 * @param {boolean} includeChildren Defaults to false. If true child places e.g. individual charging stations at a charge point while be included, otherwise just the URLs of any child places will be returned
		 * @return {Array<TflApiPresentationEntitiesPlace>} OK
		 */
		Place_Get(id: string, includeChildren: boolean | null | undefined): Observable<Array<TflApiPresentationEntitiesPlace>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlace>>(this.baseUri + 'Place/' + (id == null ? '' : encodeURIComponent(id)) + '&includeChildren=' + includeChildren, {});
		}

		/**
		 * Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
		 * must be polygonal e.g. a BoroughBoundary.
		 * Get Place/{type}/At/{Lat}/{Lon}
		 * @param {Array<string>} type The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)
		 * @param {string} Lat Automatically added
		 * @param {string} Lon Automatically added
		 * @return {SystemObject} OK
		 */
		Place_GetAt(type: Array<string>, lat: string, lon: string, location_lat: number, location_lon: number, Lat: string, Lon: string): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'Place/{type}/At/' + (Lat == null ? '' : encodeURIComponent(Lat)) + '/' + (Lon == null ? '' : encodeURIComponent(Lon)) + '?lat=' + (lat == null ? '' : encodeURIComponent(lat)) + '&lon=' + (lon == null ? '' : encodeURIComponent(lon)) + '&location_lat=' + location_lat + '&location_lon=' + location_lon, {});
		}

		/**
		 * Gets the place overlay for a given set of co-ordinates and a given width/height.
		 * Get Place/{type}/overlay/{z}/{Lat}/{Lon}/{width}/{height}
		 * @param {number} z The zoom level
		 * @param {Array<string>} type The place type (a valid list of place types can be obtained from the /Place/Meta/placeTypes endpoint)
		 * @param {number} width The width of the requested overlay.
		 * @param {number} height The height of the requested overlay.
		 * @param {string} Lat Automatically added
		 * @param {string} Lon Automatically added
		 * @return {SystemObject} OK
		 */
		Place_GetOverlay(z: number, type: Array<string>, width: number, height: number, lat: string, lon: string, location_lat: number, location_lon: number, Lat: string, Lon: string): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'Place/{type}/overlay/' + z + '/' + (Lat == null ? '' : encodeURIComponent(Lat)) + '/' + (Lon == null ? '' : encodeURIComponent(Lon)) + '/' + width + '/' + height + '?lat=' + (lat == null ? '' : encodeURIComponent(lat)) + '&lon=' + (lon == null ? '' : encodeURIComponent(lon)) + '&location_lat=' + location_lat + '&location_lon=' + location_lon, {});
		}

		/**
		 * Gets all roads managed by TfL
		 * Get Road
		 * @return {Array<TflApiPresentationEntitiesRoadCorridor>} OK
		 */
		Road_Get(): Observable<Array<TflApiPresentationEntitiesRoadCorridor>> {
			return this.http.get<Array<TflApiPresentationEntitiesRoadCorridor>>(this.baseUri + 'Road', {});
		}

		/**
		 * Gets a list of valid RoadDisruption categories
		 * Get Road/Meta/Categories
		 * @return {Array<string>} OK
		 */
		Road_MetaCategories(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'Road/Meta/Categories', {});
		}

		/**
		 * Gets a list of valid RoadDisruption severity codes
		 * Get Road/Meta/Severities
		 * @return {Array<TflApiPresentationEntitiesStatusSeverity>} OK
		 */
		Road_MetaSeverities(): Observable<Array<TflApiPresentationEntitiesStatusSeverity>> {
			return this.http.get<Array<TflApiPresentationEntitiesStatusSeverity>>(this.baseUri + 'Road/Meta/Severities', {});
		}

		/**
		 * Gets a list of active disruptions filtered by disruption Ids.
		 * Get Road/all/Disruption/{disruptionIds}
		 * @param {Array<string>} disruptionIds Comma-separated list of disruption identifiers to filter by.
		 * @param {boolean} stripContent Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location and comments.
		 * @return {TflApiPresentationEntitiesRoadDisruption} OK
		 */
		Road_DisruptionById(disruptionIds: Array<string>, stripContent: boolean | null | undefined): Observable<TflApiPresentationEntitiesRoadDisruption> {
			return this.http.get<TflApiPresentationEntitiesRoadDisruption>(this.baseUri + 'Road/all/Disruption/{disruptionIds}?stripContent=' + stripContent, {});
		}

		/**
		 * Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
		 * Get Road/all/Street/Disruption
		 * @param {Date} startDate Optional, the start time to filter on.
		 * @param {Date} endDate Optional, The end time to filter on.
		 * @return {SystemObject} OK
		 */
		Road_DisruptedStreets(startDate: Date, endDate: Date): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'Road/all/Street/Disruption?startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString(), {});
		}

		/**
		 * Gets the road with the specified id (e.g. A1)
		 * Get Road/{ids}
		 * @param {Array<string>} ids Comma-separated list of road identifiers e.g. "A406, A2" (a full list of supported road identifiers can be found at the /Road/ endpoint)
		 * @return {Array<TflApiPresentationEntitiesRoadCorridor>} OK
		 */
		RoadGetByIds(ids: Array<string>): Observable<Array<TflApiPresentationEntitiesRoadCorridor>> {
			return this.http.get<Array<TflApiPresentationEntitiesRoadCorridor>>(this.baseUri + 'Road/{ids}', {});
		}

		/**
		 * Get active disruptions, filtered by road ids
		 * Get Road/{ids}/Disruption
		 * @param {Array<string>} ids Comma-separated list of road identifiers e.g. "A406, A2" use all for all to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)
		 * @param {boolean} stripContent Optional, defaults to false. When true, removes every property/node except for id, point, severity, severityDescription, startDate, endDate, corridor details, location, comments and streets
		 * @param {Array<string>} severities an optional list of Severity names to filter on (a valid list of severities can be obtained from the /Road/Meta/severities endpoint)
		 * @param {Array<string>} categories an optional list of category names to filter on (a valid list of categories can be obtained from the /Road/Meta/categories endpoint)
		 * @param {boolean} closures Optional, defaults to true. When true, always includes disruptions that have road closures, regardless of the severity filter. When false, the severity filter works as normal.
		 * @return {Array<TflApiPresentationEntitiesRoadDisruption>} OK
		 */
		Road_Disruption(ids: Array<string>, stripContent: boolean | null | undefined, severities: Array<string> | null | undefined, categories: Array<string> | null | undefined, closures: boolean | null | undefined): Observable<Array<TflApiPresentationEntitiesRoadDisruption>> {
			return this.http.get<Array<TflApiPresentationEntitiesRoadDisruption>>(this.baseUri + 'Road/{ids}/Disruption?stripContent=' + stripContent + '&' + severities?.map(z => `severities=${encodeURIComponent(z)}`).join('&') + '&' + categories?.map(z => `categories=${encodeURIComponent(z)}`).join('&') + '&closures=' + closures, {});
		}

		/**
		 * Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
		 * Get Road/{ids}/Status
		 * @param {Array<string>} ids Comma-separated list of road identifiers e.g. "A406, A2" or use "all" to ignore id filter (a full list of supported road identifiers can be found at the /Road/ endpoint)
		 * @return {Array<TflApiPresentationEntitiesRoadCorridor>} OK
		 */
		Road_Status(ids: Array<string>, dateRangeNullable_startDate: Date | null | undefined, dateRangeNullable_endDate: Date | null | undefined): Observable<Array<TflApiPresentationEntitiesRoadCorridor>> {
			return this.http.get<Array<TflApiPresentationEntitiesRoadCorridor>>(this.baseUri + 'Road/{ids}/Status?dateRangeNullable_startDate=' + dateRangeNullable_startDate?.toISOString() + '&dateRangeNullable_endDate=' + dateRangeNullable_endDate?.toISOString(), {});
		}

		/**
		 * Search the site for occurrences of the query string. The maximum number of results returned is equal to the maximum page size
		 * of 100. To return subsequent pages, use the paginated overload.
		 * Get Search
		 * @param {string} query The search query
		 * @return {TflApiPresentationEntitiesSearchResponse} OK
		 */
		Search_Get(query: string): Observable<TflApiPresentationEntitiesSearchResponse> {
			return this.http.get<TflApiPresentationEntitiesSearchResponse>(this.baseUri + 'Search?query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Searches the bus schedules folder on S3 for a given bus number.
		 * Get Search/BusSchedules
		 * @param {string} query The search query
		 * @return {TflApiPresentationEntitiesSearchResponse} OK
		 */
		Search_BusSchedules(query: string): Observable<TflApiPresentationEntitiesSearchResponse> {
			return this.http.get<TflApiPresentationEntitiesSearchResponse>(this.baseUri + 'Search/BusSchedules?query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Gets the available search categories.
		 * Get Search/Meta/Categories
		 * @return {Array<string>} OK
		 */
		Search_MetaCategories(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'Search/Meta/Categories', {});
		}

		/**
		 * Gets the available searchProvider names.
		 * Get Search/Meta/SearchProviders
		 * @return {Array<string>} OK
		 */
		Search_MetaSearchProviders(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'Search/Meta/SearchProviders', {});
		}

		/**
		 * Gets the available sorting options.
		 * Get Search/Meta/Sorts
		 * @return {Array<string>} OK
		 */
		Search_MetaSorts(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'Search/Meta/Sorts', {});
		}

		/**
		 * Gets a list of StopPoints within {radius} by the specified criteria
		 * Get StopPoint
		 * @param {Array<string>} stopTypes a list of stopTypes that should be returned (a list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint)
		 * @param {number} radius the radius of the bounding circle in metres (default : 200)
		 * @param {boolean} useStopPointHierarchy Re-arrange the output into a parent/child hierarchy
		 * @param {Array<string>} modes the list of modes to search (comma separated mode names e.g. tube,dlr)
		 * @param {Array<string>} categories an optional list of comma separated property categories to return in the StopPoint's property bag. If null or empty, all categories of property are returned. Pass the keyword "none" to return no properties (a valid list of categories can be obtained from the /StopPoint/Meta/categories endpoint)
		 * @param {boolean} returnLines true to return the lines that each stop point serves as a nested resource
		 * @return {TflApiPresentationEntitiesStopPointsResponse} OK
		 */
		StopPoint_GetByGeoPoint(stopTypes: Array<string>, radius: number | null | undefined, useStopPointHierarchy: boolean | null | undefined, modes: Array<string> | null | undefined, categories: Array<string> | null | undefined, returnLines: boolean | null | undefined, location_lat: number, location_lon: number): Observable<TflApiPresentationEntitiesStopPointsResponse> {
			return this.http.get<TflApiPresentationEntitiesStopPointsResponse>(this.baseUri + 'StopPoint?' + stopTypes.map(z => `stopTypes=${encodeURIComponent(z)}`).join('&') + '&radius=' + radius + '&useStopPointHierarchy=' + useStopPointHierarchy + '&' + modes?.map(z => `modes=${encodeURIComponent(z)}`).join('&') + '&' + categories?.map(z => `categories=${encodeURIComponent(z)}`).join('&') + '&returnLines=' + returnLines + '&location_lat=' + location_lat + '&location_lon=' + location_lon, {});
		}

		/**
		 * Gets the list of available StopPoint additional information categories
		 * Get StopPoint/Meta/Categories
		 * @return {Array<TflApiPresentationEntitiesStopPointCategory>} OK
		 */
		StopPoint_MetaCategories(): Observable<Array<TflApiPresentationEntitiesStopPointCategory>> {
			return this.http.get<Array<TflApiPresentationEntitiesStopPointCategory>>(this.baseUri + 'StopPoint/Meta/Categories', {});
		}

		/**
		 * Gets the list of available StopPoint modes
		 * Get StopPoint/Meta/Modes
		 * @return {Array<TflApiPresentationEntitiesMode>} OK
		 */
		StopPoint_MetaModes(): Observable<Array<TflApiPresentationEntitiesMode>> {
			return this.http.get<Array<TflApiPresentationEntitiesMode>>(this.baseUri + 'StopPoint/Meta/Modes', {});
		}

		/**
		 * Gets the list of available StopPoint types
		 * Get StopPoint/Meta/StopTypes
		 * @return {Array<string>} OK
		 */
		StopPoint_MetaStopTypes(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'StopPoint/Meta/StopTypes', {});
		}

		/**
		 * Gets a list of StopPoints filtered by the modes available at that StopPoint.
		 * Get StopPoint/Mode/{modes}
		 * @param {Array<string>} modes A comma-seperated list of modes e.g. tube,dlr
		 * @param {number} page The data set page to return. Page 1 equates to the first 1000 stop points, page 2 equates to 1001-2000 etc. Must be entered for bus mode as data set is too large.
		 * @return {TflApiPresentationEntitiesStopPointsResponse} OK
		 */
		StopPoint_GetByMode(modes: Array<string>, page: number | null | undefined): Observable<TflApiPresentationEntitiesStopPointsResponse> {
			return this.http.get<TflApiPresentationEntitiesStopPointsResponse>(this.baseUri + 'StopPoint/Mode/{modes}?page=' + page, {});
		}

		/**
		 * Gets a distinct list of disrupted stop points for the given modes
		 * Get StopPoint/Mode/{modes}/Disruption
		 * @param {Array<string>} modes A comma-seperated list of modes e.g. tube,dlr
		 * @return {Array<TflApiPresentationEntitiesDisruptedPoint>} OK
		 */
		StopPoint_DisruptionByMode(modes: Array<string>, includeRouteBlockedStops: boolean | null | undefined): Observable<Array<TflApiPresentationEntitiesDisruptedPoint>> {
			return this.http.get<Array<TflApiPresentationEntitiesDisruptedPoint>>(this.baseUri + 'StopPoint/Mode/{modes}/Disruption?includeRouteBlockedStops=' + includeRouteBlockedStops, {});
		}

		/**
		 * Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
		 * Get StopPoint/Search
		 * @param {string} query The query string, case-insensitive. Leading and trailing wildcards are applied automatically.
		 * @param {Array<string>} modes An optional, parameter separated list of the modes to filter by
		 * @param {boolean} faresOnly True to only return stations in that have Fares data available for single fares to another station.
		 * @param {number} maxResults An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,
		 *             it is possible that the flattened result set will contain more than 50 items.
		 * @param {Array<string>} lines An optional, parameter separated list of the lines to filter by
		 * @param {boolean} includeHubs If true, returns results including HUBs.
		 * @param {boolean} tflOperatedNationalRailStationsOnly If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned
		 * @return {TflApiPresentationEntitiesSearchResponse} OK
		 */
		StopPointGetByQueryAndModesAndFaresOnlyAndMaxResultsAndLinesAndIncludeHubsAndTflOperatedNationalRailStationsOnly(query: string, modes: Array<string> | null | undefined, faresOnly: boolean | null | undefined, maxResults: number | null | undefined, lines: Array<string> | null | undefined, includeHubs: boolean | null | undefined, tflOperatedNationalRailStationsOnly: boolean | null | undefined): Observable<TflApiPresentationEntitiesSearchResponse> {
			return this.http.get<TflApiPresentationEntitiesSearchResponse>(this.baseUri + 'StopPoint/Search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + modes?.map(z => `modes=${encodeURIComponent(z)}`).join('&') + '&faresOnly=' + faresOnly + '&maxResults=' + maxResults + '&' + lines?.map(z => `lines=${encodeURIComponent(z)}`).join('&') + '&includeHubs=' + includeHubs + '&tflOperatedNationalRailStationsOnly=' + tflOperatedNationalRailStationsOnly, {});
		}

		/**
		 * Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
		 * Get StopPoint/Search/{query}
		 * @param {string} query The query string, case-insensitive. Leading and trailing wildcards are applied automatically.
		 * @param {Array<string>} modes An optional, parameter separated list of the modes to filter by
		 * @param {boolean} faresOnly True to only return stations in that have Fares data available for single fares to another station.
		 * @param {number} maxResults An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,
		 *             it is possible that the flattened result set will contain more than 50 items.
		 * @param {Array<string>} lines An optional, parameter separated list of the lines to filter by
		 * @param {boolean} includeHubs If true, returns results including HUBs.
		 * @param {boolean} tflOperatedNationalRailStationsOnly If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned
		 * @return {TflApiPresentationEntitiesSearchResponse} OK
		 */
		StopPoint_Search(query: string, modes: Array<string> | null | undefined, faresOnly: boolean | null | undefined, maxResults: number | null | undefined, lines: Array<string> | null | undefined, includeHubs: boolean | null | undefined, tflOperatedNationalRailStationsOnly: boolean | null | undefined): Observable<TflApiPresentationEntitiesSearchResponse> {
			return this.http.get<TflApiPresentationEntitiesSearchResponse>(this.baseUri + 'StopPoint/Search/' + (query == null ? '' : encodeURIComponent(query)) + '&' + modes?.map(z => `modes=${encodeURIComponent(z)}`).join('&') + '&faresOnly=' + faresOnly + '&maxResults=' + maxResults + '&' + lines?.map(z => `lines=${encodeURIComponent(z)}`).join('&') + '&includeHubs=' + includeHubs + '&tflOperatedNationalRailStationsOnly=' + tflOperatedNationalRailStationsOnly, {});
		}

		/**
		 * Gets the service types for a given stoppoint
		 * Get StopPoint/ServiceTypes
		 * @param {string} id The Naptan id of the stop
		 * @param {Array<string>} lineIds The lines which contain the given Naptan id (all lines relevant to the given stoppoint if empty)
		 * @param {Array<string>} modes The modes which the lines are relevant to (all if empty)
		 * @return {Array<TflApiPresentationEntitiesLineServiceType>} OK
		 */
		StopPoint_GetServiceTypes(id: string, lineIds: Array<string> | null | undefined, modes: Array<string> | null | undefined): Observable<Array<TflApiPresentationEntitiesLineServiceType>> {
			return this.http.get<Array<TflApiPresentationEntitiesLineServiceType>>(this.baseUri + 'StopPoint/ServiceTypes?id=' + (id == null ? '' : encodeURIComponent(id)) + '&' + lineIds?.map(z => `lineIds=${encodeURIComponent(z)}`).join('&') + '&' + modes?.map(z => `modes=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Gets a StopPoint for a given sms code.
		 * Get StopPoint/Sms/{id}
		 * @param {string} id A 5-digit Countdown Bus Stop Code e.g. 73241, 50435, 56334.
		 * @param {string} output If set to "web", a 302 redirect to relevant website bus stop page is returned. Valid values are : web. All other values are ignored.
		 * @return {SystemObject} OK
		 */
		StopPoint_GetBySms(id: string, output: string | null | undefined): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'StopPoint/Sms/' + (id == null ? '' : encodeURIComponent(id)) + '&output=' + (output == null ? '' : encodeURIComponent(output)), {});
		}

		/**
		 * Gets all stop points of a given type
		 * Get StopPoint/Type/{types}
		 * @param {Array<string>} types A comma-separated list of the types to return. Max. approx. 12 types. 
		 *             A list of valid stop types can be obtained from the StopPoint/meta/stoptypes endpoint.
		 * @return {Array<TflApiPresentationEntitiesStopPoint>} OK
		 */
		StopPoint_GetByType(types: Array<string>): Observable<Array<TflApiPresentationEntitiesStopPoint>> {
			return this.http.get<Array<TflApiPresentationEntitiesStopPoint>>(this.baseUri + 'StopPoint/Type/{types}', {});
		}

		/**
		 * Gets all the stop points of given type(s) with a page number
		 * Get StopPoint/Type/{types}/page/{page}
		 * @return {Array<TflApiPresentationEntitiesStopPoint>} OK
		 */
		StopPoint_GetByTypeWithPagination(types: Array<string>, page: number): Observable<Array<TflApiPresentationEntitiesStopPoint>> {
			return this.http.get<Array<TflApiPresentationEntitiesStopPoint>>(this.baseUri + 'StopPoint/Type/{types}/page/' + page, {});
		}

		/**
		 * Gets a list of StopPoints corresponding to the given list of stop ids.
		 * Get StopPoint/{ids}
		 * @param {Array<string>} ids A comma-separated list of stop point ids (station naptan code e.g. 940GZZLUASL). Max. approx. 20 ids.
		 *             You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name.
		 * @param {boolean} includeCrowdingData Include the crowding data (static). To Filter further use: /StopPoint/{ids}/Crowding/{line}
		 * @return {Array<TflApiPresentationEntitiesStopPoint>} OK
		 */
		StopPoint_Get(ids: Array<string>, includeCrowdingData: boolean | null | undefined): Observable<Array<TflApiPresentationEntitiesStopPoint>> {
			return this.http.get<Array<TflApiPresentationEntitiesStopPoint>>(this.baseUri + 'StopPoint/{ids}?includeCrowdingData=' + includeCrowdingData, {});
		}

		/**
		 * Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
		 * Get StopPoint/{ids}/Disruption
		 * @param {Array<string>} ids A comma-seperated list of stop point ids. Max. approx. 20 ids.
		 *             You can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name.
		 * @param {boolean} getFamily Specify true to return disruptions for entire family, or false to return disruptions for just this stop point. Defaults to false.
		 * @param {boolean} flattenResponse Specify true to associate all disruptions with parent stop point. (Only applicable when getFamily is true).
		 * @return {Array<TflApiPresentationEntitiesDisruptedPoint>} OK
		 */
		StopPoint_Disruption(ids: Array<string>, getFamily: boolean | null | undefined, includeRouteBlockedStops: boolean | null | undefined, flattenResponse: boolean | null | undefined): Observable<Array<TflApiPresentationEntitiesDisruptedPoint>> {
			return this.http.get<Array<TflApiPresentationEntitiesDisruptedPoint>>(this.baseUri + 'StopPoint/{ids}/Disruption?getFamily=' + getFamily + '&includeRouteBlockedStops=' + includeRouteBlockedStops + '&flattenResponse=' + flattenResponse, {});
		}

		/**
		 * Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)
		 * Get StopPoint/{id}/ArrivalDepartures
		 * @param {string} id A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
		 * @param {Array<string>} lineIds A comma-separated list of line ids e.g. elizabeth, london-overground, thameslink
		 * @return {Array<TflApiPresentationEntitiesArrivalDeparture>} OK
		 */
		StopPoint_ArrivalDepartures(id: string, lineIds: Array<string>): Observable<Array<TflApiPresentationEntitiesArrivalDeparture>> {
			return this.http.get<Array<TflApiPresentationEntitiesArrivalDeparture>>(this.baseUri + 'StopPoint/' + (id == null ? '' : encodeURIComponent(id)) + '/ArrivalDepartures&' + lineIds.map(z => `lineIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Gets the list of arrival predictions for the given stop point id
		 * Get StopPoint/{id}/Arrivals
		 * @param {string} id A StopPoint id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
		 * @return {Array<TflApiPresentationEntitiesPrediction>} OK
		 */
		StopPoint_Arrivals(id: string): Observable<Array<TflApiPresentationEntitiesPrediction>> {
			return this.http.get<Array<TflApiPresentationEntitiesPrediction>>(this.baseUri + 'StopPoint/' + (id == null ? '' : encodeURIComponent(id)) + '/Arrivals', {});
		}

		/**
		 * Gets Stopoints that are reachable from a station/line combination.
		 * Get StopPoint/{id}/CanReachOnLine/{lineId}
		 * @param {string} id The id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name) of the stop point to filter by
		 * @param {string} lineId Line id of the line to filter by (e.g. victoria)
		 * @param {Array<TflApiPresentationEntitiesStopPointSequenceServiceType>} serviceTypes A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
		 * @return {Array<TflApiPresentationEntitiesStopPoint>} OK
		 */
		StopPoint_ReachableFrom(id: string, lineId: string, serviceTypes: Array<TflApiPresentationEntitiesStopPointSequenceServiceType> | null | undefined): Observable<Array<TflApiPresentationEntitiesStopPoint>> {
			return this.http.get<Array<TflApiPresentationEntitiesStopPoint>>(this.baseUri + 'StopPoint/' + (id == null ? '' : encodeURIComponent(id)) + '/CanReachOnLine/' + (lineId == null ? '' : encodeURIComponent(lineId)) + '&' + serviceTypes?.map(z => `serviceTypes=${z}`).join('&'), {});
		}

		/**
		 * Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
		 * Get StopPoint/{id}/Crowding/{line}
		 * @param {string} id The Naptan id of the stop
		 * @param {string} line A particular line e.g. victoria, circle, northern etc.
		 * @param {Line_ArrivalsDirection} direction The direction of travel. Can be inbound or outbound.
		 * @return {Array<TflApiPresentationEntitiesStopPoint>} OK
		 */
		StopPoint_Crowding(id: string, line: string, direction: Line_ArrivalsDirection): Observable<Array<TflApiPresentationEntitiesStopPoint>> {
			return this.http.get<Array<TflApiPresentationEntitiesStopPoint>>(this.baseUri + 'StopPoint/' + (id == null ? '' : encodeURIComponent(id)) + '/Crowding/' + (line == null ? '' : encodeURIComponent(line)) + '&direction=' + direction, {});
		}

		/**
		 * Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
		 * Get StopPoint/{id}/DirectionTo/{toStopPointId}
		 * @param {string} id Originating stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
		 * @param {string} toStopPointId Destination stop id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
		 * @param {string} lineId Optional line id filter e.g. victoria
		 * @return {string} OK
		 */
		StopPoint_Direction(id: string, toStopPointId: string, lineId: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'StopPoint/' + (id == null ? '' : encodeURIComponent(id)) + '/DirectionTo/' + (toStopPointId == null ? '' : encodeURIComponent(toStopPointId)) + '&lineId=' + (lineId == null ? '' : encodeURIComponent(lineId)), { responseType: 'text' });
		}

		/**
		 * Returns the route sections for all the lines that service the given stop point ids
		 * Get StopPoint/{id}/Route
		 * @param {string} id A stop point id (station naptan codes e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
		 * @param {Array<TflApiPresentationEntitiesStopPointSequenceServiceType>} serviceTypes A comma-separated list of service types to filter on. If not specified. Supported values: Regular, Night. Defaulted to 'Regular' if not specified
		 * @return {Array<TflApiPresentationEntitiesStopPointRouteSection>} OK
		 */
		StopPoint_Route(id: string, serviceTypes: Array<TflApiPresentationEntitiesStopPointSequenceServiceType> | null | undefined): Observable<Array<TflApiPresentationEntitiesStopPointRouteSection>> {
			return this.http.get<Array<TflApiPresentationEntitiesStopPointRouteSection>>(this.baseUri + 'StopPoint/' + (id == null ? '' : encodeURIComponent(id)) + '/Route&' + serviceTypes?.map(z => `serviceTypes=${z}`).join('&'), {});
		}

		/**
		 * Get a list of places corresponding to a given id and place types.
		 * Get StopPoint/{id}/placeTypes
		 * @param {string} id A naptan id for a stop point (station naptan code e.g. 940GZZLUASL).
		 * @param {Array<string>} placeTypes A comcomma-separated value representing the place types.
		 * @return {Array<TflApiPresentationEntitiesPlace>} OK
		 */
		StopPointGetByIdAndPlaceTypes(id: string, placeTypes: Array<string>): Observable<Array<TflApiPresentationEntitiesPlace>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlace>>(this.baseUri + 'StopPoint/' + (id == null ? '' : encodeURIComponent(id)) + '/placeTypes&' + placeTypes.map(z => `placeTypes=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get car parks corresponding to the given stop point id.
		 * Get StopPoint/{stopPointId}/CarParks
		 * @param {string} stopPointId stopPointId is required to get the car parks.
		 * @return {Array<TflApiPresentationEntitiesPlace>} OK
		 */
		StopPoint_GetCarParksById(stopPointId: string): Observable<Array<TflApiPresentationEntitiesPlace>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlace>>(this.baseUri + 'StopPoint/' + (stopPointId == null ? '' : encodeURIComponent(stopPointId)) + '/CarParks', {});
		}

		/**
		 * Gets a list of taxi ranks corresponding to the given stop point id.
		 * Get StopPoint/{stopPointId}/TaxiRanks
		 * @param {string} stopPointId stopPointId is required to get the taxi ranks.
		 * @return {Array<TflApiPresentationEntitiesPlace>} OK
		 */
		StopPoint_GetTaxiRanksByIds(stopPointId: string): Observable<Array<TflApiPresentationEntitiesPlace>> {
			return this.http.get<Array<TflApiPresentationEntitiesPlace>>(this.baseUri + 'StopPoint/' + (stopPointId == null ? '' : encodeURIComponent(stopPointId)) + '/TaxiRanks', {});
		}

		/**
		 * Gets the TravelTime overlay.
		 * Get TravelTimes/compareOverlay/{z}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}
		 * @param {number} z The zoom level.
		 * @param {number} pinLat The latitude of the pin.
		 * @param {number} pinLon The longitude of the pin.
		 * @param {number} mapCenterLat The map center latitude.
		 * @param {number} mapCenterLon The map center longitude.
		 * @param {string} scenarioTitle The title of the scenario.
		 * @param {string} timeOfDayId The id for the time of day (AM/INTER/PM)
		 * @param {string} modeId The id of the mode.
		 * @param {number} width The width of the requested overlay.
		 * @param {number} height The height of the requested overlay.
		 * @param {TravelTime_GetCompareOverlayDirection} direction The direction of travel.
		 * @param {number} travelTimeInterval The total minutes between the travel time bands
		 * @return {SystemObject} OK
		 */
		TravelTime_GetCompareOverlay(z: number, pinLat: number, pinLon: number, mapCenterLat: number, mapCenterLon: number, scenarioTitle: string, timeOfDayId: string, modeId: string, width: number, height: number, direction: TravelTime_GetCompareOverlayDirection, travelTimeInterval: number, compareType: string, compareValue: string): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'TravelTimes/compareOverlay/' + z + '/mapcenter/' + mapCenterLat + '/' + mapCenterLon + '/pinlocation/' + pinLat + '/' + pinLon + '/dimensions/' + width + '/' + height + '?scenarioTitle=' + (scenarioTitle == null ? '' : encodeURIComponent(scenarioTitle)) + '&timeOfDayId=' + (timeOfDayId == null ? '' : encodeURIComponent(timeOfDayId)) + '&modeId=' + (modeId == null ? '' : encodeURIComponent(modeId)) + '&direction=' + direction + '&travelTimeInterval=' + travelTimeInterval + '&compareType=' + (compareType == null ? '' : encodeURIComponent(compareType)) + '&compareValue=' + (compareValue == null ? '' : encodeURIComponent(compareValue)), {});
		}

		/**
		 * Gets the TravelTime overlay.
		 * Get TravelTimes/overlay/{z}/mapcenter/{mapCenterLat}/{mapCenterLon}/pinlocation/{pinLat}/{pinLon}/dimensions/{width}/{height}
		 * @param {number} z The zoom level.
		 * @param {number} pinLat The latitude of the pin.
		 * @param {number} pinLon The longitude of the pin.
		 * @param {number} mapCenterLat The map center latitude.
		 * @param {number} mapCenterLon The map center longitude.
		 * @param {string} scenarioTitle The title of the scenario.
		 * @param {string} timeOfDayId The id for the time of day (AM/INTER/PM)
		 * @param {string} modeId The id of the mode.
		 * @param {number} width The width of the requested overlay.
		 * @param {number} height The height of the requested overlay.
		 * @param {TravelTime_GetCompareOverlayDirection} direction The direction of travel.
		 * @param {number} travelTimeInterval The total minutes between the travel time bands
		 * @return {SystemObject} OK
		 */
		TravelTime_GetOverlay(z: number, pinLat: number, pinLon: number, mapCenterLat: number, mapCenterLon: number, scenarioTitle: string, timeOfDayId: string, modeId: string, width: number, height: number, direction: TravelTime_GetCompareOverlayDirection, travelTimeInterval: number): Observable<SystemObject> {
			return this.http.get<SystemObject>(this.baseUri + 'TravelTimes/overlay/' + z + '/mapcenter/' + mapCenterLat + '/' + mapCenterLon + '/pinlocation/' + pinLat + '/' + pinLon + '/dimensions/' + width + '/' + height + '?scenarioTitle=' + (scenarioTitle == null ? '' : encodeURIComponent(scenarioTitle)) + '&timeOfDayId=' + (timeOfDayId == null ? '' : encodeURIComponent(timeOfDayId)) + '&modeId=' + (modeId == null ? '' : encodeURIComponent(modeId)) + '&direction=' + direction + '&travelTimeInterval=' + travelTimeInterval, {});
		}

		/**
		 * Gets the predictions for a given list of vehicle Id's.
		 * Get Vehicle/{ids}/Arrivals
		 * @param {Array<string>} ids A comma-separated list of vehicle ids e.g. LX58CFV,LX11AZB,LX58CFE. Max approx. 25 ids.
		 * @return {Array<TflApiPresentationEntitiesPrediction>} OK
		 */
		Vehicle_Get(ids: Array<string>): Observable<Array<TflApiPresentationEntitiesPrediction>> {
			return this.http.get<Array<TflApiPresentationEntitiesPrediction>>(this.baseUri + 'Vehicle/{ids}/Arrivals', {});
		}
	}

	export enum Journey_JourneyResultsJourneyPreference { LeastInterchange = 0, LeastTime = 1, LeastWalking = 2 }

	export enum Journey_JourneyResultsWalkingSpeed { Slow = 0, Average = 1, Fast = 2 }

	export enum Journey_JourneyResultsCyclePreference { None = 0, LeaveAtStation = 1, TakeOnTransport = 2, AllTheWay = 3, CycleHire = 4 }

	export enum Line_ArrivalsDirection { inbound = 0, outbound = 1, all = 2 }

	export enum TravelTime_GetCompareOverlayDirection { Average = 0, From = 1, To = 2 }

}

