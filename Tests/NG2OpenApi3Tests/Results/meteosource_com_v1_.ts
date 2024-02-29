import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AirQuality_PointData {

		/** Required */
		data: Array<AirQuality_PointHourlyData>;

		/**
		 * Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elevation: number;

		/**
		 * Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
		 * Required
		 */
		lat: string;

		/**
		 * Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
		 * Required
		 */
		lon: string;

		/** Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID. */
		timezone?: string | null;
	}
	export interface AirQuality_PointDataFormProperties {

		/**
		 * Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elevation: FormControl<number | null | undefined>,

		/**
		 * Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
		 * Required
		 */
		lat: FormControl<string | null | undefined>,

		/**
		 * Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
		 * Required
		 */
		lon: FormControl<string | null | undefined>,

		/** Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID. */
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateAirQuality_PointDataFormGroup() {
		return new FormGroup<AirQuality_PointDataFormProperties>({
			elevation: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AirQuality_PointHourlyData {

		/**
		 * Total aerosol optical depth at 550 nm.
		 * Unit: dimensionless
		 * Type: double
		 */
		aerosol_550?: number | null;

		/**
		 * Air quality index. The following values can appear:
		 * * 1 - Very good
		 * * 2 - Good
		 * * 3 - Medium
		 * * 4 - Poor
		 * * 5 - Very poor
		 * * 6 - Extremely poor
		 * Unit: index
		 * Type: double
		 */
		air_quality?: number | null;

		/**
		 * Carbon monoxide at surface level.
		 * Unit: µg/m3
		 * Type: double
		 */
		co_surface?: number | null;

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		date?: Date | null;

		/**
		 * Dust aerosol optical depth at 550 nm.
		 * Unit: dimensionless
		 * Type: double
		 */
		dust_550nm?: number | null;

		/**
		 * Dust aerosol (0.55 - 0.9 µm) mixing ratio.
		 * Unit: kg/kg
		 * Type: double
		 */
		dust_mixing_ratio_05?: number | null;

		/**
		 * Nitrogen dioxide at surface level.
		 * Unit: µg/m3
		 * Type: double
		 */
		no2_surface?: number | null;

		/**
		 * Nitrogen monoxide at surface level.
		 * Unit: µg/m3
		 * Type: double
		 */
		no_surface?: number | null;

		/**
		 * Ozone.
		 * Unit: µg/m3
		 * Type: double
		 */
		ozone_surface?: number | null;

		/**
		 * Total column ozone.
		 * Unit: Dobson
		 * Type: double
		 */
		ozone_total?: number | null;

		/**
		 * Particulate matter d < 10 µm (PM10).
		 * Unit: µg/m3
		 * Type: double
		 */
		pm10?: number | null;

		/**
		 * Particulate matter d < 2.5 µm (PM2.5).
		 * Unit: µg/m3
		 * Type: double
		 */
		pm25?: number | null;

		/**
		 * Sulphur dioxide at surface level.
		 * Unit: µg/m3
		 * Type: double
		 */
		so2_surface?: number | null;
	}
	export interface AirQuality_PointHourlyDataFormProperties {

		/**
		 * Total aerosol optical depth at 550 nm.
		 * Unit: dimensionless
		 * Type: double
		 */
		aerosol_550: FormControl<number | null | undefined>,

		/**
		 * Air quality index. The following values can appear:
		 * * 1 - Very good
		 * * 2 - Good
		 * * 3 - Medium
		 * * 4 - Poor
		 * * 5 - Very poor
		 * * 6 - Extremely poor
		 * Unit: index
		 * Type: double
		 */
		air_quality: FormControl<number | null | undefined>,

		/**
		 * Carbon monoxide at surface level.
		 * Unit: µg/m3
		 * Type: double
		 */
		co_surface: FormControl<number | null | undefined>,

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		date: FormControl<Date | null | undefined>,

		/**
		 * Dust aerosol optical depth at 550 nm.
		 * Unit: dimensionless
		 * Type: double
		 */
		dust_550nm: FormControl<number | null | undefined>,

		/**
		 * Dust aerosol (0.55 - 0.9 µm) mixing ratio.
		 * Unit: kg/kg
		 * Type: double
		 */
		dust_mixing_ratio_05: FormControl<number | null | undefined>,

		/**
		 * Nitrogen dioxide at surface level.
		 * Unit: µg/m3
		 * Type: double
		 */
		no2_surface: FormControl<number | null | undefined>,

		/**
		 * Nitrogen monoxide at surface level.
		 * Unit: µg/m3
		 * Type: double
		 */
		no_surface: FormControl<number | null | undefined>,

		/**
		 * Ozone.
		 * Unit: µg/m3
		 * Type: double
		 */
		ozone_surface: FormControl<number | null | undefined>,

		/**
		 * Total column ozone.
		 * Unit: Dobson
		 * Type: double
		 */
		ozone_total: FormControl<number | null | undefined>,

		/**
		 * Particulate matter d < 10 µm (PM10).
		 * Unit: µg/m3
		 * Type: double
		 */
		pm10: FormControl<number | null | undefined>,

		/**
		 * Particulate matter d < 2.5 µm (PM2.5).
		 * Unit: µg/m3
		 * Type: double
		 */
		pm25: FormControl<number | null | undefined>,

		/**
		 * Sulphur dioxide at surface level.
		 * Unit: µg/m3
		 * Type: double
		 */
		so2_surface: FormControl<number | null | undefined>,
	}
	export function CreateAirQuality_PointHourlyDataFormGroup() {
		return new FormGroup<AirQuality_PointHourlyDataFormProperties>({
			aerosol_550: new FormControl<number | null | undefined>(undefined),
			air_quality: new FormControl<number | null | undefined>(undefined),
			co_surface: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			dust_550nm: new FormControl<number | null | undefined>(undefined),
			dust_mixing_ratio_05: new FormControl<number | null | undefined>(undefined),
			no2_surface: new FormControl<number | null | undefined>(undefined),
			no_surface: new FormControl<number | null | undefined>(undefined),
			ozone_surface: new FormControl<number | null | undefined>(undefined),
			ozone_total: new FormControl<number | null | undefined>(undefined),
			pm10: new FormControl<number | null | undefined>(undefined),
			pm25: new FormControl<number | null | undefined>(undefined),
			so2_surface: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FindPlacesModel {

		/** first-level administrative area (a US state, for example) */
		adm_area1?: string | null;

		/** second-level administrative area (a US county, for example) */
		adm_area2?: string | null;

		/** name of the country */
		country?: string | null;

		/** Latitude of the point, always in the format \<float><N/S>, for example ``23.5S`` */
		lat?: string | null;

		/** Longitude of the point, always in format \<float><E/W>, for example ``23.5W`` */
		lon?: string | null;

		/** name of the place */
		name?: string | null;

		/** unique identifier of the place, which can be used in /point and /map endpoints */
		place_id?: string | null;

		/** Timezone of the point in tzinfo format. */
		timezone?: string | null;

		/**
		 * The character of the place. May be one of the following values:
		 * * administrative areas (states, counties, districts...): ``administrative_area``
		 * * country: ``country``
		 * * a different political entity from a country (for example, a dependent teritory): ``political_entity``
		 * * villages, towns and cities: ``settlement``
		 * * air industry locations: ``airbase``, ``airfield``, ``heliport``, ``airport``, ``airport_terminal``
		 * * places related to water: ``bay``, ``channel``, ``fjord``, ``lake``, ``pond``, ``falls``, ``gulf``,
		 * ``harbor``, ``reservoir``, ``sea``, ``dam``, ``cape``, ``island``, ``peninsula``
		 * * places related to mountain areas: ``hill``, ``mountain``, ``peak``, ``valley``, ``volcano``, ``canyon``
		 * * other places related to nature: ``park``, ``reserve``, ``resort``, ``desert``
		 * * places based on postcodes: ``postcode``
		 */
		type?: string | null;
	}
	export interface FindPlacesModelFormProperties {

		/** first-level administrative area (a US state, for example) */
		adm_area1: FormControl<string | null | undefined>,

		/** second-level administrative area (a US county, for example) */
		adm_area2: FormControl<string | null | undefined>,

		/** name of the country */
		country: FormControl<string | null | undefined>,

		/** Latitude of the point, always in the format \<float><N/S>, for example ``23.5S`` */
		lat: FormControl<string | null | undefined>,

		/** Longitude of the point, always in format \<float><E/W>, for example ``23.5W`` */
		lon: FormControl<string | null | undefined>,

		/** name of the place */
		name: FormControl<string | null | undefined>,

		/** unique identifier of the place, which can be used in /point and /map endpoints */
		place_id: FormControl<string | null | undefined>,

		/** Timezone of the point in tzinfo format. */
		timezone: FormControl<string | null | undefined>,

		/**
		 * The character of the place. May be one of the following values:
		 * * administrative areas (states, counties, districts...): ``administrative_area``
		 * * country: ``country``
		 * * a different political entity from a country (for example, a dependent teritory): ``political_entity``
		 * * villages, towns and cities: ``settlement``
		 * * air industry locations: ``airbase``, ``airfield``, ``heliport``, ``airport``, ``airport_terminal``
		 * * places related to water: ``bay``, ``channel``, ``fjord``, ``lake``, ``pond``, ``falls``, ``gulf``,
		 * ``harbor``, ``reservoir``, ``sea``, ``dam``, ``cape``, ``island``, ``peninsula``
		 * * places related to mountain areas: ``hill``, ``mountain``, ``peak``, ``valley``, ``volcano``, ``canyon``
		 * * other places related to nature: ``park``, ``reserve``, ``resort``, ``desert``
		 * * places based on postcodes: ``postcode``
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFindPlacesModelFormGroup() {
		return new FormGroup<FindPlacesModelFormProperties>({
			adm_area1: new FormControl<string | null | undefined>(undefined),
			adm_area2: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<string | null | undefined>(undefined),
			lon: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			place_id: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeneralRequestError {

		/** Required */
		detail: string;
	}
	export interface GeneralRequestErrorFormProperties {

		/** Required */
		detail: FormControl<string | null | undefined>,
	}
	export function CreateGeneralRequestErrorFormGroup() {
		return new FormGroup<GeneralRequestErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An enumeration. */
	export enum Language { cs = 'cs', en = 'en', de = 'de', es = 'es', fr = 'fr', pl = 'pl', pt = 'pt' }

	export interface Point_PointAlerts {
		data?: string | null;
	}
	export interface Point_PointAlertsFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointAlertsFormGroup() {
		return new FormGroup<Point_PointAlertsFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Point_PointCurrentData {

		/**
		 * Percentage of sky covered by clouds.
		 * Unit: \%
		 * Type: double
		 */
		cloud_cover?: number | null;

		/**
		 * Current dew point temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point?: number | null;

		/**
		 * Feels like temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like?: number | null;

		/**
		 * Relative humidity.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity?: number | null;

		/** String identifier of current weather icon, e.g. `light_rain`. */
		icon?: string | null;

		/**
		 * Numeric identifier of current weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: weather_ico0_36
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon_num?: number | null;

		/**
		 * Global downward short-wave radiation flux.
		 * Unit: W/m2
		 * Type: double
		 */
		irradiance?: number | null;

		/**
		 * Total column of ozone.
		 * Unit: Dobson
		 * Type: double
		 */
		ozone?: number | null;

		/** Required */
		precipitation: Point_PointCurrentPrecipitationData;

		/**
		 * Atmospheric pressure at mean sea level.
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure?: number | null;

		/** Short text summary of current weather, e.g. `Light rain`. */
		summary?: string | null;

		/**
		 * Current temperature 2 metres above ground.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm).
		 * Unit: uv_index
		 * Type: double
		 */
		uv_index?: number | null;

		/**
		 * Visibility.
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility?: number | null;

		/** Required */
		wind: Point_PointCurrentWindData;

		/**
		 * Windchill temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill?: number | null;
	}
	export interface Point_PointCurrentDataFormProperties {

		/**
		 * Percentage of sky covered by clouds.
		 * Unit: \%
		 * Type: double
		 */
		cloud_cover: FormControl<number | null | undefined>,

		/**
		 * Current dew point temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point: FormControl<number | null | undefined>,

		/**
		 * Feels like temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like: FormControl<number | null | undefined>,

		/**
		 * Relative humidity.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity: FormControl<number | null | undefined>,

		/** String identifier of current weather icon, e.g. `light_rain`. */
		icon: FormControl<string | null | undefined>,

		/**
		 * Numeric identifier of current weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: weather_ico0_36
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon_num: FormControl<number | null | undefined>,

		/**
		 * Global downward short-wave radiation flux.
		 * Unit: W/m2
		 * Type: double
		 */
		irradiance: FormControl<number | null | undefined>,

		/**
		 * Total column of ozone.
		 * Unit: Dobson
		 * Type: double
		 */
		ozone: FormControl<number | null | undefined>,

		/**
		 * Atmospheric pressure at mean sea level.
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure: FormControl<number | null | undefined>,

		/** Short text summary of current weather, e.g. `Light rain`. */
		summary: FormControl<string | null | undefined>,

		/**
		 * Current temperature 2 metres above ground.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature: FormControl<number | null | undefined>,

		/**
		 * UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm).
		 * Unit: uv_index
		 * Type: double
		 */
		uv_index: FormControl<number | null | undefined>,

		/**
		 * Visibility.
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility: FormControl<number | null | undefined>,

		/**
		 * Windchill temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointCurrentDataFormGroup() {
		return new FormGroup<Point_PointCurrentDataFormProperties>({
			cloud_cover: new FormControl<number | null | undefined>(undefined),
			dew_point: new FormControl<number | null | undefined>(undefined),
			feels_like: new FormControl<number | null | undefined>(undefined),
			humidity: new FormControl<number | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			icon_num: new FormControl<number | null | undefined>(undefined),
			irradiance: new FormControl<number | null | undefined>(undefined),
			ozone: new FormControl<number | null | undefined>(undefined),
			pressure: new FormControl<number | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			uv_index: new FormControl<number | null | undefined>(undefined),
			visibility: new FormControl<number | null | undefined>(undefined),
			wind_chill: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointCurrentPrecipitationData {

		/**
		 * Current amount of precipitation.
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: prec_str
		 */
		type?: string | null;
	}
	export interface Point_PointCurrentPrecipitationDataFormProperties {

		/**
		 * Current amount of precipitation.
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: prec_str
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointCurrentPrecipitationDataFormGroup() {
		return new FormGroup<Point_PointCurrentPrecipitationDataFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Point_PointCurrentWindData {

		/**
		 * Wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle?: number | null;

		/**
		 * Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir?: string | null;

		/**
		 * Wind gust speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts?: number | null;

		/**
		 * Wind speed 10 metres above the ground.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed?: number | null;
	}
	export interface Point_PointCurrentWindDataFormProperties {

		/**
		 * Wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle: FormControl<number | null | undefined>,

		/**
		 * Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir: FormControl<string | null | undefined>,

		/**
		 * Wind gust speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts: FormControl<number | null | undefined>,

		/**
		 * Wind speed 10 metres above the ground.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointCurrentWindDataFormGroup() {
		return new FormGroup<Point_PointCurrentWindDataFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			gusts: new FormControl<number | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDaily {

		/** Required */
		data: Array<Point_PointDailyData>;
	}
	export interface Point_PointDailyFormProperties {
	}
	export function CreatePoint_PointDailyFormGroup() {
		return new FormGroup<Point_PointDailyFormProperties>({
		});

	}

	export interface Point_PointDailyData {
		afternoon?: Point_PointDailyAfternoonData;

		/** Required */
		all_day: Point_PointDailyAllDayData;

		/** Required */
		astro: Point_PointDailyAstroData;

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		day?: string | null;
		evening?: Point_PointDailyEveningData;

		/**
		 * Numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon?: number | null;
		morning?: Point_PointDailyMorningData;

		/**
		 * Weather predictability. Values from 1 (very high predictability) to 5 (very low predictability).
		 * Unit: 1-5
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		predictability?: number | null;

		/** Required */
		statistics: Point_PointDailyStatsData;

		/** Short text summary of the weather, e.g. `Light rain`. */
		summary?: string | null;

		/** All day string identifier of the weather icon, e.g. `light_rain`. */
		weather?: string | null;
	}
	export interface Point_PointDailyDataFormProperties {

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		day: FormControl<string | null | undefined>,

		/**
		 * Numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon: FormControl<number | null | undefined>,

		/**
		 * Weather predictability. Values from 1 (very high predictability) to 5 (very low predictability).
		 * Unit: 1-5
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		predictability: FormControl<number | null | undefined>,

		/** Short text summary of the weather, e.g. `Light rain`. */
		summary: FormControl<string | null | undefined>,

		/** All day string identifier of the weather icon, e.g. `light_rain`. */
		weather: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointDailyDataFormGroup() {
		return new FormGroup<Point_PointDailyDataFormProperties>({
			day: new FormControl<string | null | undefined>(undefined),
			icon: new FormControl<number | null | undefined>(undefined),
			predictability: new FormControl<number | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			weather: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAfternoonData {

		/** Required */
		cloud_cover: Point_PointDailyAfternoonCloudCoverData;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like?: number | null;

		/**
		 * Relative humidity. (afternoon avg)
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity?: number | null;

		/**
		 * Afternoon umeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon?: number | null;

		/**
		 * Total column of ozone. (afternoon avg)
		 * Unit: Dobson
		 * Type: double
		 */
		ozone?: number | null;

		/** Required */
		precipitation: Point_PointDailyAfternoonPrecipitationData;

		/**
		 * Atmospheric pressure at mean sea level. (afternoon avg)
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure?: number | null;

		/** Required */
		probability: Point_PointDailyAfternoonProbData;

		/**
		 * Snow depth. (afternoon avg)
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature?: number | null;

		/**
		 * Temperature 2 metres above ground. (afternoon avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Visibility. (afternoon avg)
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility?: number | null;

		/** Afternoon day string identifier of the weather icon, e.g. `light_rain`. */
		weather?: string | null;

		/** Required */
		wind: Point_PointDailyAfternoonWindData;

		/**
		 * Temperature 2 metres above ground. (afternoon avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill?: number | null;
	}
	export interface Point_PointDailyAfternoonDataFormProperties {

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like: FormControl<number | null | undefined>,

		/**
		 * Relative humidity. (afternoon avg)
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity: FormControl<number | null | undefined>,

		/**
		 * Afternoon umeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon: FormControl<number | null | undefined>,

		/**
		 * Total column of ozone. (afternoon avg)
		 * Unit: Dobson
		 * Type: double
		 */
		ozone: FormControl<number | null | undefined>,

		/**
		 * Atmospheric pressure at mean sea level. (afternoon avg)
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure: FormControl<number | null | undefined>,

		/**
		 * Snow depth. (afternoon avg)
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature: FormControl<number | null | undefined>,

		/**
		 * Temperature 2 metres above ground. (afternoon avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature: FormControl<number | null | undefined>,

		/**
		 * Visibility. (afternoon avg)
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility: FormControl<number | null | undefined>,

		/** Afternoon day string identifier of the weather icon, e.g. `light_rain`. */
		weather: FormControl<string | null | undefined>,

		/**
		 * Temperature 2 metres above ground. (afternoon avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyAfternoonDataFormGroup() {
		return new FormGroup<Point_PointDailyAfternoonDataFormProperties>({
			dew_point: new FormControl<number | null | undefined>(undefined),
			feels_like: new FormControl<number | null | undefined>(undefined),
			humidity: new FormControl<number | null | undefined>(undefined),
			icon: new FormControl<number | null | undefined>(undefined),
			ozone: new FormControl<number | null | undefined>(undefined),
			pressure: new FormControl<number | null | undefined>(undefined),
			snow_depth: new FormControl<number | null | undefined>(undefined),
			soil_temperature: new FormControl<number | null | undefined>(undefined),
			surface_temperature: new FormControl<number | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			visibility: new FormControl<number | null | undefined>(undefined),
			weather: new FormControl<string | null | undefined>(undefined),
			wind_chill: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAfternoonCloudCoverData {

		/**
		 * Percentage of sky covered by high clouds. (afternoon avg)
		 * Unit: \%
		 * Type: double
		 */
		high?: number | null;

		/**
		 * Percentage of sky covered by low clouds. (afternoon avg)
		 * Unit: \%
		 * Type: double
		 */
		low?: number | null;

		/**
		 * Percentage of sky covered by middle clouds. (afternoon avg)
		 * Unit: \%
		 * Type: double
		 */
		middle?: number | null;

		/**
		 * Percentage of sky covered by clouds. (afternoon avg)
		 * Unit: \%
		 * Type: double
		 */
		total?: number | null;
	}
	export interface Point_PointDailyAfternoonCloudCoverDataFormProperties {

		/**
		 * Percentage of sky covered by high clouds. (afternoon avg)
		 * Unit: \%
		 * Type: double
		 */
		high: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by low clouds. (afternoon avg)
		 * Unit: \%
		 * Type: double
		 */
		low: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by middle clouds. (afternoon avg)
		 * Unit: \%
		 * Type: double
		 */
		middle: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by clouds. (afternoon avg)
		 * Unit: \%
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyAfternoonCloudCoverDataFormGroup() {
		return new FormGroup<Point_PointDailyAfternoonCloudCoverDataFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			middle: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAfternoonPrecipitationData {

		/**
		 * Total precipitation amount accumulated since last hour. (afternoon sum)
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type?: string | null;
	}
	export interface Point_PointDailyAfternoonPrecipitationDataFormProperties {

		/**
		 * Total precipitation amount accumulated since last hour. (afternoon sum)
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointDailyAfternoonPrecipitationDataFormGroup() {
		return new FormGroup<Point_PointDailyAfternoonPrecipitationDataFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAfternoonProbData {

		/**
		 * Probability the temperature drops below 0 °C. (afternoon avg)
		 * Unit: %
		 * Type: double
		 */
		freeze?: number | null;

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation?: number | null;

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm?: number | null;
	}
	export interface Point_PointDailyAfternoonProbDataFormProperties {

		/**
		 * Probability the temperature drops below 0 °C. (afternoon avg)
		 * Unit: %
		 * Type: double
		 */
		freeze: FormControl<number | null | undefined>,

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation: FormControl<number | null | undefined>,

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyAfternoonProbDataFormGroup() {
		return new FormGroup<Point_PointDailyAfternoonProbDataFormProperties>({
			freeze: new FormControl<number | null | undefined>(undefined),
			precipitation: new FormControl<number | null | undefined>(undefined),
			storm: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAfternoonWindData {

		/**
		 * Afternoon wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle?: number | null;

		/**
		 * Afternoon wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir?: string | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts?: number | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed?: number | null;
	}
	export interface Point_PointDailyAfternoonWindDataFormProperties {

		/**
		 * Afternoon wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle: FormControl<number | null | undefined>,

		/**
		 * Afternoon wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir: FormControl<string | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts: FormControl<number | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyAfternoonWindDataFormGroup() {
		return new FormGroup<Point_PointDailyAfternoonWindDataFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			gusts: new FormControl<number | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAllDayData {

		/** Required */
		cloud_cover: Point_PointDailyAllDayCloudCoverData;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point_max?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point_min?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like_max?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like_min?: number | null;

		/**
		 * Relative humidity. (allday avg)
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity?: number | null;

		/**
		 * Numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon?: number | null;

		/**
		 * Total column of ozone. (allday avg)
		 * Unit: Dobson
		 * Type: double
		 */
		ozone?: number | null;

		/** Required */
		precipitation: Point_PointDailyAllDayPrecipitationData;

		/**
		 * Atmospheric pressure at mean sea level. (allday avg)
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure?: number | null;

		/** Required */
		probability: Point_PointDailyAllDayProbData;

		/**
		 * Snow depth. (allday avg)
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature_max?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature_min?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature_max?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature_min?: number | null;

		/**
		 * Temperature 2 metres above ground. (allday avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature_max?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature_min?: number | null;

		/**
		 * Visibility. (allday avg)
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility?: number | null;

		/** All day string identifier of the weather icon, e.g. `light_rain`. */
		weather?: string | null;

		/** Required */
		wind: Point_PointDailyAllDayWindData;

		/**
		 * Temperature 2 metres above ground. (allday avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill_max?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill_min?: number | null;
	}
	export interface Point_PointDailyAllDayDataFormProperties {

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point_max: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point_min: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like_max: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like_min: FormControl<number | null | undefined>,

		/**
		 * Relative humidity. (allday avg)
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity: FormControl<number | null | undefined>,

		/**
		 * Numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon: FormControl<number | null | undefined>,

		/**
		 * Total column of ozone. (allday avg)
		 * Unit: Dobson
		 * Type: double
		 */
		ozone: FormControl<number | null | undefined>,

		/**
		 * Atmospheric pressure at mean sea level. (allday avg)
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure: FormControl<number | null | undefined>,

		/**
		 * Snow depth. (allday avg)
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature_max: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature_min: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature_max: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature_min: FormControl<number | null | undefined>,

		/**
		 * Temperature 2 metres above ground. (allday avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature_max: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature_min: FormControl<number | null | undefined>,

		/**
		 * Visibility. (allday avg)
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility: FormControl<number | null | undefined>,

		/** All day string identifier of the weather icon, e.g. `light_rain`. */
		weather: FormControl<string | null | undefined>,

		/**
		 * Temperature 2 metres above ground. (allday avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill_max: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill_min: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyAllDayDataFormGroup() {
		return new FormGroup<Point_PointDailyAllDayDataFormProperties>({
			dew_point: new FormControl<number | null | undefined>(undefined),
			dew_point_max: new FormControl<number | null | undefined>(undefined),
			dew_point_min: new FormControl<number | null | undefined>(undefined),
			feels_like: new FormControl<number | null | undefined>(undefined),
			feels_like_max: new FormControl<number | null | undefined>(undefined),
			feels_like_min: new FormControl<number | null | undefined>(undefined),
			humidity: new FormControl<number | null | undefined>(undefined),
			icon: new FormControl<number | null | undefined>(undefined),
			ozone: new FormControl<number | null | undefined>(undefined),
			pressure: new FormControl<number | null | undefined>(undefined),
			snow_depth: new FormControl<number | null | undefined>(undefined),
			soil_temperature: new FormControl<number | null | undefined>(undefined),
			soil_temperature_max: new FormControl<number | null | undefined>(undefined),
			soil_temperature_min: new FormControl<number | null | undefined>(undefined),
			surface_temperature: new FormControl<number | null | undefined>(undefined),
			surface_temperature_max: new FormControl<number | null | undefined>(undefined),
			surface_temperature_min: new FormControl<number | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			temperature_max: new FormControl<number | null | undefined>(undefined),
			temperature_min: new FormControl<number | null | undefined>(undefined),
			visibility: new FormControl<number | null | undefined>(undefined),
			weather: new FormControl<string | null | undefined>(undefined),
			wind_chill: new FormControl<number | null | undefined>(undefined),
			wind_chill_max: new FormControl<number | null | undefined>(undefined),
			wind_chill_min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAllDayCloudCoverData {

		/**
		 * Percentage of sky covered by high clouds. (allday avg)
		 * Unit: \%
		 * Type: double
		 */
		high?: number | null;

		/**
		 * Percentage of sky covered by low clouds. (allday avg)
		 * Unit: \%
		 * Type: double
		 */
		low?: number | null;

		/**
		 * Percentage of sky covered by middle clouds. (allday avg)
		 * Unit: \%
		 * Type: double
		 */
		middle?: number | null;

		/**
		 * Percentage of sky covered by clouds. (allday avg)
		 * Unit: \%
		 * Type: double
		 */
		total?: number | null;
	}
	export interface Point_PointDailyAllDayCloudCoverDataFormProperties {

		/**
		 * Percentage of sky covered by high clouds. (allday avg)
		 * Unit: \%
		 * Type: double
		 */
		high: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by low clouds. (allday avg)
		 * Unit: \%
		 * Type: double
		 */
		low: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by middle clouds. (allday avg)
		 * Unit: \%
		 * Type: double
		 */
		middle: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by clouds. (allday avg)
		 * Unit: \%
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyAllDayCloudCoverDataFormGroup() {
		return new FormGroup<Point_PointDailyAllDayCloudCoverDataFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			middle: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAllDayPrecipitationData {

		/**
		 * Total precipitation amount accumulated since last hour. (allday sum)
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type?: string | null;
	}
	export interface Point_PointDailyAllDayPrecipitationDataFormProperties {

		/**
		 * Total precipitation amount accumulated since last hour. (allday sum)
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointDailyAllDayPrecipitationDataFormGroup() {
		return new FormGroup<Point_PointDailyAllDayPrecipitationDataFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAllDayProbData {

		/**
		 * Probability the temperature drops below 0 °C. (allday avg)
		 * Unit: %
		 * Type: double
		 */
		freeze?: number | null;

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation?: number | null;

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm?: number | null;
	}
	export interface Point_PointDailyAllDayProbDataFormProperties {

		/**
		 * Probability the temperature drops below 0 °C. (allday avg)
		 * Unit: %
		 * Type: double
		 */
		freeze: FormControl<number | null | undefined>,

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation: FormControl<number | null | undefined>,

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyAllDayProbDataFormGroup() {
		return new FormGroup<Point_PointDailyAllDayProbDataFormProperties>({
			freeze: new FormControl<number | null | undefined>(undefined),
			precipitation: new FormControl<number | null | undefined>(undefined),
			storm: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAllDayWindData {

		/**
		 * All day wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle?: number | null;

		/**
		 * All day wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir?: string | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts?: number | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed?: number | null;
	}
	export interface Point_PointDailyAllDayWindDataFormProperties {

		/**
		 * All day wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle: FormControl<number | null | undefined>,

		/**
		 * All day wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir: FormControl<string | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts: FormControl<number | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyAllDayWindDataFormGroup() {
		return new FormGroup<Point_PointDailyAllDayWindDataFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			gusts: new FormControl<number | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyAstroData {

		/** Required */
		moon: Point_PointDailyMoonData;

		/** Required */
		sun: Point_PointDailySunData;
	}
	export interface Point_PointDailyAstroDataFormProperties {
	}
	export function CreatePoint_PointDailyAstroDataFormGroup() {
		return new FormGroup<Point_PointDailyAstroDataFormProperties>({
		});

	}

	export interface Point_PointDailyMoonData {

		/** True if the moon never rises on given day, false otherwise. */
		always_down?: boolean | null;

		/** True if the moon never sets on given day, false otherwise. */
		always_up?: boolean | null;

		/** Name of the moon phase, one of 'new_moon', 'first_quarter', 'full_moon', 'last_quarter'. */
		phase?: string | null;

		/** Datetime of the moonrise or null if the moon does not rise on given day. */
		rise?: Date | null;

		/** Datetime of the moonset or null if the moon does not set on given day. */
		set?: Date | null;
	}
	export interface Point_PointDailyMoonDataFormProperties {

		/** True if the moon never rises on given day, false otherwise. */
		always_down: FormControl<boolean | null | undefined>,

		/** True if the moon never sets on given day, false otherwise. */
		always_up: FormControl<boolean | null | undefined>,

		/** Name of the moon phase, one of 'new_moon', 'first_quarter', 'full_moon', 'last_quarter'. */
		phase: FormControl<string | null | undefined>,

		/** Datetime of the moonrise or null if the moon does not rise on given day. */
		rise: FormControl<Date | null | undefined>,

		/** Datetime of the moonset or null if the moon does not set on given day. */
		set: FormControl<Date | null | undefined>,
	}
	export function CreatePoint_PointDailyMoonDataFormGroup() {
		return new FormGroup<Point_PointDailyMoonDataFormProperties>({
			always_down: new FormControl<boolean | null | undefined>(undefined),
			always_up: new FormControl<boolean | null | undefined>(undefined),
			phase: new FormControl<string | null | undefined>(undefined),
			rise: new FormControl<Date | null | undefined>(undefined),
			set: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailySunData {

		/** True if the sun never rises on given day (polar night), false otherwise. */
		always_down?: boolean | null;

		/** True if the sun never sets on given day (polar day), false otherwise. */
		always_up?: boolean | null;

		/** Datetime of the sunrise or null during polar day/night. */
		rise?: Date | null;

		/** Datetime of the sunset or null during polar day/night. */
		set?: Date | null;
	}
	export interface Point_PointDailySunDataFormProperties {

		/** True if the sun never rises on given day (polar night), false otherwise. */
		always_down: FormControl<boolean | null | undefined>,

		/** True if the sun never sets on given day (polar day), false otherwise. */
		always_up: FormControl<boolean | null | undefined>,

		/** Datetime of the sunrise or null during polar day/night. */
		rise: FormControl<Date | null | undefined>,

		/** Datetime of the sunset or null during polar day/night. */
		set: FormControl<Date | null | undefined>,
	}
	export function CreatePoint_PointDailySunDataFormGroup() {
		return new FormGroup<Point_PointDailySunDataFormProperties>({
			always_down: new FormControl<boolean | null | undefined>(undefined),
			always_up: new FormControl<boolean | null | undefined>(undefined),
			rise: new FormControl<Date | null | undefined>(undefined),
			set: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyEveningData {

		/** Required */
		cloud_cover: Point_PointDailyEveningCloudCoverData;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like?: number | null;

		/**
		 * Relative humidity. (evening avg)
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity?: number | null;

		/**
		 * Evening numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon?: number | null;

		/**
		 * Total column of ozone. (evening avg)
		 * Unit: Dobson
		 * Type: double
		 */
		ozone?: number | null;

		/** Required */
		precipitation: Point_PointDailyEveningPrecipitationData;

		/**
		 * Atmospheric pressure at mean sea level. (evening avg)
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure?: number | null;

		/** Required */
		probability: Point_PointDailyEveningProbData;

		/**
		 * Snow depth. (evening avg)
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature?: number | null;

		/**
		 * Temperature 2 metres above ground. (evening avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Visibility. (evening avg)
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility?: number | null;

		/** Evening day string identifier of the weather icon, e.g. `light_rain`. */
		weather?: string | null;

		/** Required */
		wind: Point_PointDailyEveningWindData;

		/**
		 * Temperature 2 metres above ground. (evening avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill?: number | null;
	}
	export interface Point_PointDailyEveningDataFormProperties {

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like: FormControl<number | null | undefined>,

		/**
		 * Relative humidity. (evening avg)
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity: FormControl<number | null | undefined>,

		/**
		 * Evening numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon: FormControl<number | null | undefined>,

		/**
		 * Total column of ozone. (evening avg)
		 * Unit: Dobson
		 * Type: double
		 */
		ozone: FormControl<number | null | undefined>,

		/**
		 * Atmospheric pressure at mean sea level. (evening avg)
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure: FormControl<number | null | undefined>,

		/**
		 * Snow depth. (evening avg)
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature: FormControl<number | null | undefined>,

		/**
		 * Temperature 2 metres above ground. (evening avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature: FormControl<number | null | undefined>,

		/**
		 * Visibility. (evening avg)
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility: FormControl<number | null | undefined>,

		/** Evening day string identifier of the weather icon, e.g. `light_rain`. */
		weather: FormControl<string | null | undefined>,

		/**
		 * Temperature 2 metres above ground. (evening avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyEveningDataFormGroup() {
		return new FormGroup<Point_PointDailyEveningDataFormProperties>({
			dew_point: new FormControl<number | null | undefined>(undefined),
			feels_like: new FormControl<number | null | undefined>(undefined),
			humidity: new FormControl<number | null | undefined>(undefined),
			icon: new FormControl<number | null | undefined>(undefined),
			ozone: new FormControl<number | null | undefined>(undefined),
			pressure: new FormControl<number | null | undefined>(undefined),
			snow_depth: new FormControl<number | null | undefined>(undefined),
			soil_temperature: new FormControl<number | null | undefined>(undefined),
			surface_temperature: new FormControl<number | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			visibility: new FormControl<number | null | undefined>(undefined),
			weather: new FormControl<string | null | undefined>(undefined),
			wind_chill: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyEveningCloudCoverData {

		/**
		 * Percentage of sky covered by high clouds. (evening avg)
		 * Unit: \%
		 * Type: double
		 */
		high?: number | null;

		/**
		 * Percentage of sky covered by low clouds. (evening avg)
		 * Unit: \%
		 * Type: double
		 */
		low?: number | null;

		/**
		 * Percentage of sky covered by middle clouds. (evening avg)
		 * Unit: \%
		 * Type: double
		 */
		middle?: number | null;

		/**
		 * Percentage of sky covered by clouds. (evening avg)
		 * Unit: \%
		 * Type: double
		 */
		total?: number | null;
	}
	export interface Point_PointDailyEveningCloudCoverDataFormProperties {

		/**
		 * Percentage of sky covered by high clouds. (evening avg)
		 * Unit: \%
		 * Type: double
		 */
		high: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by low clouds. (evening avg)
		 * Unit: \%
		 * Type: double
		 */
		low: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by middle clouds. (evening avg)
		 * Unit: \%
		 * Type: double
		 */
		middle: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by clouds. (evening avg)
		 * Unit: \%
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyEveningCloudCoverDataFormGroup() {
		return new FormGroup<Point_PointDailyEveningCloudCoverDataFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			middle: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyEveningPrecipitationData {

		/**
		 * Total precipitation amount accumulated since last hour. (evening sum)
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type?: string | null;
	}
	export interface Point_PointDailyEveningPrecipitationDataFormProperties {

		/**
		 * Total precipitation amount accumulated since last hour. (evening sum)
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointDailyEveningPrecipitationDataFormGroup() {
		return new FormGroup<Point_PointDailyEveningPrecipitationDataFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyEveningProbData {

		/**
		 * Probability the temperature drops below 0 °C. (evening avg)
		 * Unit: %
		 * Type: double
		 */
		freeze?: number | null;

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation?: number | null;

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm?: number | null;
	}
	export interface Point_PointDailyEveningProbDataFormProperties {

		/**
		 * Probability the temperature drops below 0 °C. (evening avg)
		 * Unit: %
		 * Type: double
		 */
		freeze: FormControl<number | null | undefined>,

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation: FormControl<number | null | undefined>,

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyEveningProbDataFormGroup() {
		return new FormGroup<Point_PointDailyEveningProbDataFormProperties>({
			freeze: new FormControl<number | null | undefined>(undefined),
			precipitation: new FormControl<number | null | undefined>(undefined),
			storm: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyEveningWindData {

		/**
		 * Evening wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle?: number | null;

		/**
		 * Evening wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir?: string | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts?: number | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed?: number | null;
	}
	export interface Point_PointDailyEveningWindDataFormProperties {

		/**
		 * Evening wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle: FormControl<number | null | undefined>,

		/**
		 * Evening wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir: FormControl<string | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts: FormControl<number | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyEveningWindDataFormGroup() {
		return new FormGroup<Point_PointDailyEveningWindDataFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			gusts: new FormControl<number | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyMorningData {

		/** Required */
		cloud_cover: Point_PointDailyMorningCloudCoverData;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like?: number | null;

		/**
		 * Relative humidity. (morning avg)
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity?: number | null;

		/**
		 * Morning numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon?: number | null;

		/**
		 * Total column of ozone. (morning avg)
		 * Unit: Dobson
		 * Type: double
		 */
		ozone?: number | null;

		/** Required */
		precipitation: Point_PointDailyMorningPrecipitationData;

		/**
		 * Atmospheric pressure at mean sea level. (morning avg)
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure?: number | null;

		/** Required */
		probability: Point_PointDailyMorningProbData;

		/**
		 * Snow depth. (morning avg)
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature?: number | null;

		/**
		 * Temperature 2 metres above ground. (morning avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * Visibility. (morning avg)
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility?: number | null;

		/** Morning day string identifier of the weather icon, e.g. `light_rain`. */
		weather?: string | null;

		/** Required */
		wind: Point_PointDailyMorningWindData;

		/**
		 * Temperature 2 metres above ground. (morning avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill?: number | null;
	}
	export interface Point_PointDailyMorningDataFormProperties {

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like: FormControl<number | null | undefined>,

		/**
		 * Relative humidity. (morning avg)
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity: FormControl<number | null | undefined>,

		/**
		 * Morning numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: icon
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon: FormControl<number | null | undefined>,

		/**
		 * Total column of ozone. (morning avg)
		 * Unit: Dobson
		 * Type: double
		 */
		ozone: FormControl<number | null | undefined>,

		/**
		 * Atmospheric pressure at mean sea level. (morning avg)
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure: FormControl<number | null | undefined>,

		/**
		 * Snow depth. (morning avg)
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature: FormControl<number | null | undefined>,

		/**
		 * Temperature 2 metres above ground. (morning avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature: FormControl<number | null | undefined>,

		/**
		 * Visibility. (morning avg)
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility: FormControl<number | null | undefined>,

		/** Morning day string identifier of the weather icon, e.g. `light_rain`. */
		weather: FormControl<string | null | undefined>,

		/**
		 * Temperature 2 metres above ground. (morning avg)
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyMorningDataFormGroup() {
		return new FormGroup<Point_PointDailyMorningDataFormProperties>({
			dew_point: new FormControl<number | null | undefined>(undefined),
			feels_like: new FormControl<number | null | undefined>(undefined),
			humidity: new FormControl<number | null | undefined>(undefined),
			icon: new FormControl<number | null | undefined>(undefined),
			ozone: new FormControl<number | null | undefined>(undefined),
			pressure: new FormControl<number | null | undefined>(undefined),
			snow_depth: new FormControl<number | null | undefined>(undefined),
			soil_temperature: new FormControl<number | null | undefined>(undefined),
			surface_temperature: new FormControl<number | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			visibility: new FormControl<number | null | undefined>(undefined),
			weather: new FormControl<string | null | undefined>(undefined),
			wind_chill: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyMorningCloudCoverData {

		/**
		 * Percentage of sky covered by high clouds. (morning avg)
		 * Unit: \%
		 * Type: double
		 */
		high?: number | null;

		/**
		 * Percentage of sky covered by low clouds. (morning avg)
		 * Unit: \%
		 * Type: double
		 */
		low?: number | null;

		/**
		 * Percentage of sky covered by middle clouds. (morning avg)
		 * Unit: \%
		 * Type: double
		 */
		middle?: number | null;

		/**
		 * Percentage of sky covered by clouds. (morning avg)
		 * Unit: \%
		 * Type: double
		 */
		total?: number | null;
	}
	export interface Point_PointDailyMorningCloudCoverDataFormProperties {

		/**
		 * Percentage of sky covered by high clouds. (morning avg)
		 * Unit: \%
		 * Type: double
		 */
		high: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by low clouds. (morning avg)
		 * Unit: \%
		 * Type: double
		 */
		low: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by middle clouds. (morning avg)
		 * Unit: \%
		 * Type: double
		 */
		middle: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by clouds. (morning avg)
		 * Unit: \%
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyMorningCloudCoverDataFormGroup() {
		return new FormGroup<Point_PointDailyMorningCloudCoverDataFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			middle: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyMorningPrecipitationData {

		/**
		 * Total precipitation amount accumulated since last hour. (morning sum)
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type?: string | null;
	}
	export interface Point_PointDailyMorningPrecipitationDataFormProperties {

		/**
		 * Total precipitation amount accumulated since last hour. (morning sum)
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointDailyMorningPrecipitationDataFormGroup() {
		return new FormGroup<Point_PointDailyMorningPrecipitationDataFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyMorningProbData {

		/**
		 * Probability the temperature drops below 0 °C. (morning avg)
		 * Unit: %
		 * Type: double
		 */
		freeze?: number | null;

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation?: number | null;

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm?: number | null;
	}
	export interface Point_PointDailyMorningProbDataFormProperties {

		/**
		 * Probability the temperature drops below 0 °C. (morning avg)
		 * Unit: %
		 * Type: double
		 */
		freeze: FormControl<number | null | undefined>,

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation: FormControl<number | null | undefined>,

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyMorningProbDataFormGroup() {
		return new FormGroup<Point_PointDailyMorningProbDataFormProperties>({
			freeze: new FormControl<number | null | undefined>(undefined),
			precipitation: new FormControl<number | null | undefined>(undefined),
			storm: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyMorningWindData {

		/**
		 * Morning wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle?: number | null;

		/**
		 * Morning wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir?: string | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts?: number | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed?: number | null;
	}
	export interface Point_PointDailyMorningWindDataFormProperties {

		/**
		 * Morning wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle: FormControl<number | null | undefined>,

		/**
		 * Morning wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir: FormControl<string | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts: FormControl<number | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyMorningWindDataFormGroup() {
		return new FormGroup<Point_PointDailyMorningWindDataFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			gusts: new FormControl<number | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyStatsData {

		/** Required */
		precipitation: Point_PointDailyStatsPrecipitationData;

		/** Required */
		temperature: Point_PointDailyStatsTemperatureData;

		/** Required */
		wind: Point_PointDailyStatsWindData;
	}
	export interface Point_PointDailyStatsDataFormProperties {
	}
	export function CreatePoint_PointDailyStatsDataFormGroup() {
		return new FormGroup<Point_PointDailyStatsDataFormProperties>({
		});

	}

	export interface Point_PointDailyStatsPrecipitationData {

		/**
		 * Long-term average daily precipitation amount.
		 * Units: metric = mm/day, us = inches per day, uk = mm/day, ca = mm/day
		 * Type: double
		 */
		avg?: number | null;

		/**
		 * Long-term average precipitation probability.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		probability?: number | null;
	}
	export interface Point_PointDailyStatsPrecipitationDataFormProperties {

		/**
		 * Long-term average daily precipitation amount.
		 * Units: metric = mm/day, us = inches per day, uk = mm/day, ca = mm/day
		 * Type: double
		 */
		avg: FormControl<number | null | undefined>,

		/**
		 * Long-term average precipitation probability.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		probability: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyStatsPrecipitationDataFormGroup() {
		return new FormGroup<Point_PointDailyStatsPrecipitationDataFormProperties>({
			avg: new FormControl<number | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyStatsTemperatureData {

		/**
		 * Long-term temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg?: number | null;

		/**
		 * Long-term daily maximum temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg_max?: number | null;

		/**
		 * Long-term daily minimum temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg_min?: number | null;

		/**
		 * Historical daily maximum.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		record_max?: number | null;

		/**
		 * Historical daily minimum temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		record_min?: number | null;
	}
	export interface Point_PointDailyStatsTemperatureDataFormProperties {

		/**
		 * Long-term temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg: FormControl<number | null | undefined>,

		/**
		 * Long-term daily maximum temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg_max: FormControl<number | null | undefined>,

		/**
		 * Long-term daily minimum temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg_min: FormControl<number | null | undefined>,

		/**
		 * Historical daily maximum.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		record_max: FormControl<number | null | undefined>,

		/**
		 * Historical daily minimum temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		record_min: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyStatsTemperatureDataFormGroup() {
		return new FormGroup<Point_PointDailyStatsTemperatureDataFormProperties>({
			avg: new FormControl<number | null | undefined>(undefined),
			avg_max: new FormControl<number | null | undefined>(undefined),
			avg_min: new FormControl<number | null | undefined>(undefined),
			record_max: new FormControl<number | null | undefined>(undefined),
			record_min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointDailyStatsWindData {

		/**
		 * Long-term average wind angle.
		 * Unit: deg
		 * Type: double
		 */
		avg_angle?: number | null;

		/**
		 * Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.
		 * Unit: 16dir
		 */
		avg_dir?: string | null;

		/**
		 * Long-term average wind speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		avg_speed?: number | null;

		/**
		 * Historical daily maximum wind gust speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		max_gust?: number | null;

		/**
		 * Historical daily maximum wind speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		max_speed?: number | null;
	}
	export interface Point_PointDailyStatsWindDataFormProperties {

		/**
		 * Long-term average wind angle.
		 * Unit: deg
		 * Type: double
		 */
		avg_angle: FormControl<number | null | undefined>,

		/**
		 * Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.
		 * Unit: 16dir
		 */
		avg_dir: FormControl<string | null | undefined>,

		/**
		 * Long-term average wind speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		avg_speed: FormControl<number | null | undefined>,

		/**
		 * Historical daily maximum wind gust speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		max_gust: FormControl<number | null | undefined>,

		/**
		 * Historical daily maximum wind speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		max_speed: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointDailyStatsWindDataFormGroup() {
		return new FormGroup<Point_PointDailyStatsWindDataFormProperties>({
			avg_angle: new FormControl<number | null | undefined>(undefined),
			avg_dir: new FormControl<string | null | undefined>(undefined),
			avg_speed: new FormControl<number | null | undefined>(undefined),
			max_gust: new FormControl<number | null | undefined>(undefined),
			max_speed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointData {

		/** Required */
		alerts: Point_PointAlerts;
		current?: Point_PointCurrentData;
		daily?: Point_PointDaily;

		/**
		 * Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elevation: number;
		hourly?: Point_PointHourly;

		/**
		 * Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
		 * Required
		 */
		lat: string;

		/**
		 * Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
		 * Required
		 */
		lon: string;
		minutely?: Point_PointMinutely;

		/** Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID. */
		timezone?: string | null;

		/**
		 * Unit system (metric, uk, ca or us)
		 * Required
		 */
		units: string;
	}
	export interface Point_PointDataFormProperties {

		/**
		 * Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elevation: FormControl<number | null | undefined>,

		/**
		 * Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
		 * Required
		 */
		lat: FormControl<string | null | undefined>,

		/**
		 * Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
		 * Required
		 */
		lon: FormControl<string | null | undefined>,

		/** Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID. */
		timezone: FormControl<string | null | undefined>,

		/**
		 * Unit system (metric, uk, ca or us)
		 * Required
		 */
		units: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointDataFormGroup() {
		return new FormGroup<Point_PointDataFormProperties>({
			elevation: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timezone: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Point_PointHourly {

		/** Required */
		data: Array<Point_PointHourlyData>;
	}
	export interface Point_PointHourlyFormProperties {
	}
	export function CreatePoint_PointHourlyFormGroup() {
		return new FormGroup<Point_PointHourlyFormProperties>({
		});

	}

	export interface Point_PointHourlyData {

		/**
		 * Convective available potential energy.
		 * Unit: J/kg
		 * Type: double
		 */
		cape?: number | null;

		/** Required */
		cloud_cover: Point_PointHourlyCloudCoverData;

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		date?: Date | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point?: number | null;

		/**
		 * Evaporation of liquid water into water vapor.
		 * Unit: mm/h
		 * Type: double
		 */
		evaporation?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like?: number | null;

		/**
		 * Relative humidity.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity?: number | null;

		/**
		 * Numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: weather_ico0_36
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon?: number | null;

		/**
		 * Global downward short-wave radiation flux.
		 * Unit: W/m2
		 * Type: double
		 */
		irradiance?: number | null;

		/**
		 * Surface lifted index.
		 * Unit: K
		 * Type: double
		 */
		lftx?: number | null;

		/**
		 * Total column of ozone.
		 * Unit: Dobson
		 * Type: double
		 */
		ozone?: number | null;

		/** Required */
		precipitation: Point_PointHourlyPrecipitationData;

		/**
		 * Atmospheric pressure at mean sea level.
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure?: number | null;

		/** Required */
		probability: Point_PointHourlyProbData;

		/**
		 * Snow depth.
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature?: number | null;

		/** Short text summary of the weather, e.g. `Light rain`. */
		summary?: string | null;

		/**
		 * Sunshine duration since start of previous hour.
		 * Unit: s
		 * Type: double
		 */
		sunshine_duration?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature?: number | null;

		/**
		 * UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm).
		 * Unit: uv_index
		 * Type: double
		 */
		uv_index?: number | null;

		/**
		 * Visibility.
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility?: number | null;

		/** String identifier of the weather icon, e.g. `light_rain`. */
		weather?: string | null;

		/** Required */
		wind: Point_PointHourlyWindData;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill?: number | null;
	}
	export interface Point_PointHourlyDataFormProperties {

		/**
		 * Convective available potential energy.
		 * Unit: J/kg
		 * Type: double
		 */
		cape: FormControl<number | null | undefined>,

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		date: FormControl<Date | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point: FormControl<number | null | undefined>,

		/**
		 * Evaporation of liquid water into water vapor.
		 * Unit: mm/h
		 * Type: double
		 */
		evaporation: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like: FormControl<number | null | undefined>,

		/**
		 * Relative humidity.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity: FormControl<number | null | undefined>,

		/**
		 * Numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: weather_ico0_36
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon: FormControl<number | null | undefined>,

		/**
		 * Global downward short-wave radiation flux.
		 * Unit: W/m2
		 * Type: double
		 */
		irradiance: FormControl<number | null | undefined>,

		/**
		 * Surface lifted index.
		 * Unit: K
		 * Type: double
		 */
		lftx: FormControl<number | null | undefined>,

		/**
		 * Total column of ozone.
		 * Unit: Dobson
		 * Type: double
		 */
		ozone: FormControl<number | null | undefined>,

		/**
		 * Atmospheric pressure at mean sea level.
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure: FormControl<number | null | undefined>,

		/**
		 * Snow depth.
		 * Units: metric = cm, us = inch, uk = cm, ca = cm
		 * Type: double
		 */
		snow_depth: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature: FormControl<number | null | undefined>,

		/** Short text summary of the weather, e.g. `Light rain`. */
		summary: FormControl<string | null | undefined>,

		/**
		 * Sunshine duration since start of previous hour.
		 * Unit: s
		 * Type: double
		 */
		sunshine_duration: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature: FormControl<number | null | undefined>,

		/**
		 * UV index, values from zero (low risk of harm) to 11+ (extreme risk of harm).
		 * Unit: uv_index
		 * Type: double
		 */
		uv_index: FormControl<number | null | undefined>,

		/**
		 * Visibility.
		 * Units: metric = km, us = mi, uk = mi, ca = km
		 * Type: double
		 */
		visibility: FormControl<number | null | undefined>,

		/** String identifier of the weather icon, e.g. `light_rain`. */
		weather: FormControl<string | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointHourlyDataFormGroup() {
		return new FormGroup<Point_PointHourlyDataFormProperties>({
			cape: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			dew_point: new FormControl<number | null | undefined>(undefined),
			evaporation: new FormControl<number | null | undefined>(undefined),
			feels_like: new FormControl<number | null | undefined>(undefined),
			humidity: new FormControl<number | null | undefined>(undefined),
			icon: new FormControl<number | null | undefined>(undefined),
			irradiance: new FormControl<number | null | undefined>(undefined),
			lftx: new FormControl<number | null | undefined>(undefined),
			ozone: new FormControl<number | null | undefined>(undefined),
			pressure: new FormControl<number | null | undefined>(undefined),
			snow_depth: new FormControl<number | null | undefined>(undefined),
			soil_temperature: new FormControl<number | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			sunshine_duration: new FormControl<number | null | undefined>(undefined),
			surface_temperature: new FormControl<number | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			uv_index: new FormControl<number | null | undefined>(undefined),
			visibility: new FormControl<number | null | undefined>(undefined),
			weather: new FormControl<string | null | undefined>(undefined),
			wind_chill: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointHourlyCloudCoverData {

		/**
		 * Percentage of sky covered by high clouds.
		 * Unit: \%
		 * Type: double
		 */
		high?: number | null;

		/**
		 * Percentage of sky covered by low clouds.
		 * Unit: \%
		 * Type: double
		 */
		low?: number | null;

		/**
		 * Percentage of sky covered by middle clouds.
		 * Unit: \%
		 * Type: double
		 */
		middle?: number | null;

		/**
		 * Unit: \%
		 * Type: double
		 */
		total?: number | null;
	}
	export interface Point_PointHourlyCloudCoverDataFormProperties {

		/**
		 * Percentage of sky covered by high clouds.
		 * Unit: \%
		 * Type: double
		 */
		high: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by low clouds.
		 * Unit: \%
		 * Type: double
		 */
		low: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by middle clouds.
		 * Unit: \%
		 * Type: double
		 */
		middle: FormControl<number | null | undefined>,

		/**
		 * Unit: \%
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointHourlyCloudCoverDataFormGroup() {
		return new FormGroup<Point_PointHourlyCloudCoverDataFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			middle: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointHourlyPrecipitationData {

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		convective?: number | null;

		/**
		 * Precipitation in the surrounding of queried location. The data is 7x7 ASCII art string, queried location being in the center. Character `#` means there is precipitation, `.` means no precipitation. The distance between neighboring cells is 0.25°.
		 * Unit: rainspot
		 */
		rainspot?: string | null;

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type?: string | null;
	}
	export interface Point_PointHourlyPrecipitationDataFormProperties {

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		convective: FormControl<number | null | undefined>,

		/**
		 * Precipitation in the surrounding of queried location. The data is 7x7 ASCII art string, queried location being in the center. Character `#` means there is precipitation, `.` means no precipitation. The distance between neighboring cells is 0.25°.
		 * Unit: rainspot
		 */
		rainspot: FormControl<string | null | undefined>,

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointHourlyPrecipitationDataFormGroup() {
		return new FormGroup<Point_PointHourlyPrecipitationDataFormProperties>({
			convective: new FormControl<number | null | undefined>(undefined),
			rainspot: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Point_PointHourlyProbData {

		/**
		 * Unit: \%
		 * Type: double
		 */
		freeze?: number | null;

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation?: number | null;

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm?: number | null;
	}
	export interface Point_PointHourlyProbDataFormProperties {

		/**
		 * Unit: \%
		 * Type: double
		 */
		freeze: FormControl<number | null | undefined>,

		/**
		 * Probability of non-zero precipitation.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		precipitation: FormControl<number | null | undefined>,

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Unit: mm/h
		 * Type: double
		 */
		storm: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointHourlyProbDataFormGroup() {
		return new FormGroup<Point_PointHourlyProbDataFormProperties>({
			freeze: new FormControl<number | null | undefined>(undefined),
			precipitation: new FormControl<number | null | undefined>(undefined),
			storm: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointHourlyWindData {

		/**
		 * Wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle?: number | null;

		/**
		 * Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir?: string | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts?: number | null;

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed?: number | null;
	}
	export interface Point_PointHourlyWindDataFormProperties {

		/**
		 * Wind direction angle in degrees, 180° means wind from the south.
		 * Unit: degrees
		 * Type: double
		 */
		angle: FormControl<number | null | undefined>,

		/**
		 * Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir: FormControl<string | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		gusts: FormControl<number | null | undefined>,

		/**
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		speed: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointHourlyWindDataFormGroup() {
		return new FormGroup<Point_PointHourlyWindDataFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			gusts: new FormControl<number | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point_PointMinutely {

		/** Required */
		data: Array<Point_PointMinutelyPrecipitationData>;

		/**
		 * Text summary about upcoming precipitation.
		 * Unit: summary
		 */
		summary?: string | null;
	}
	export interface Point_PointMinutelyFormProperties {

		/**
		 * Text summary about upcoming precipitation.
		 * Unit: summary
		 */
		summary: FormControl<string | null | undefined>,
	}
	export function CreatePoint_PointMinutelyFormGroup() {
		return new FormGroup<Point_PointMinutelyFormProperties>({
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Point_PointMinutelyPrecipitationData {

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		date?: Date | null;

		/**
		 * Minutely precipitation amount (per hour). For the startup tier, showing one value per 10 minutes.
		 * For other tiers, showing one value per each minute.
		 * Unit: mm/h
		 * Type: double
		 */
		precipitation?: number | null;
	}
	export interface Point_PointMinutelyPrecipitationDataFormProperties {

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		date: FormControl<Date | null | undefined>,

		/**
		 * Minutely precipitation amount (per hour). For the startup tier, showing one value per 10 minutes.
		 * For other tiers, showing one value per each minute.
		 * Unit: mm/h
		 * Type: double
		 */
		precipitation: FormControl<number | null | undefined>,
	}
	export function CreatePoint_PointMinutelyPrecipitationDataFormGroup() {
		return new FormGroup<Point_PointMinutelyPrecipitationDataFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			precipitation: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TimeMachine_PointDailyStatsData {

		/** Required */
		precipitation: TimeMachine_PointDailyStatsPrecipitationData;

		/** Required */
		temperature: TimeMachine_PointDailyStatsTemperatureData;

		/** Required */
		wind: TimeMachine_PointDailyStatsWindData;
	}
	export interface TimeMachine_PointDailyStatsDataFormProperties {
	}
	export function CreateTimeMachine_PointDailyStatsDataFormGroup() {
		return new FormGroup<TimeMachine_PointDailyStatsDataFormProperties>({
		});

	}

	export interface TimeMachine_PointDailyStatsPrecipitationData {

		/**
		 * Long-term average daily precipitation amount.
		 * Units: metric = mm/day, us = inches per day, uk = mm/day, ca = mm/day
		 * Type: double
		 */
		avg?: number | null;

		/**
		 * Long-term average precipitation probability.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		probability?: number | null;
	}
	export interface TimeMachine_PointDailyStatsPrecipitationDataFormProperties {

		/**
		 * Long-term average daily precipitation amount.
		 * Units: metric = mm/day, us = inches per day, uk = mm/day, ca = mm/day
		 * Type: double
		 */
		avg: FormControl<number | null | undefined>,

		/**
		 * Long-term average precipitation probability.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		probability: FormControl<number | null | undefined>,
	}
	export function CreateTimeMachine_PointDailyStatsPrecipitationDataFormGroup() {
		return new FormGroup<TimeMachine_PointDailyStatsPrecipitationDataFormProperties>({
			avg: new FormControl<number | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TimeMachine_PointDailyStatsTemperatureData {

		/**
		 * Long-term temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg?: number | null;

		/**
		 * Long-term daily maximum temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg_max?: number | null;

		/**
		 * Long-term daily minimum temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg_min?: number | null;

		/**
		 * Historical daily maximum.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		record_max?: number | null;

		/**
		 * Historical daily minimum temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		record_min?: number | null;
	}
	export interface TimeMachine_PointDailyStatsTemperatureDataFormProperties {

		/**
		 * Long-term temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg: FormControl<number | null | undefined>,

		/**
		 * Long-term daily maximum temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg_max: FormControl<number | null | undefined>,

		/**
		 * Long-term daily minimum temperature average.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		avg_min: FormControl<number | null | undefined>,

		/**
		 * Historical daily maximum.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		record_max: FormControl<number | null | undefined>,

		/**
		 * Historical daily minimum temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		record_min: FormControl<number | null | undefined>,
	}
	export function CreateTimeMachine_PointDailyStatsTemperatureDataFormGroup() {
		return new FormGroup<TimeMachine_PointDailyStatsTemperatureDataFormProperties>({
			avg: new FormControl<number | null | undefined>(undefined),
			avg_max: new FormControl<number | null | undefined>(undefined),
			avg_min: new FormControl<number | null | undefined>(undefined),
			record_max: new FormControl<number | null | undefined>(undefined),
			record_min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TimeMachine_PointDailyStatsWindData {

		/**
		 * Long-term average wind angle.
		 * Unit: deg
		 * Type: double
		 */
		avg_angle?: number | null;

		/**
		 * Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.
		 * Unit: 16dir
		 */
		avg_dir?: string | null;

		/**
		 * Long-term average wind speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		avg_speed?: number | null;

		/**
		 * Historical daily maximum wind gust speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		max_gust?: number | null;

		/**
		 * Historical daily maximum wind speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		max_speed?: number | null;
	}
	export interface TimeMachine_PointDailyStatsWindDataFormProperties {

		/**
		 * Long-term average wind angle.
		 * Unit: deg
		 * Type: double
		 */
		avg_angle: FormControl<number | null | undefined>,

		/**
		 * Long-term average wind direction in 'N', 'NNE', 'NE', ... 'NNW' format.
		 * Unit: 16dir
		 */
		avg_dir: FormControl<string | null | undefined>,

		/**
		 * Long-term average wind speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		avg_speed: FormControl<number | null | undefined>,

		/**
		 * Historical daily maximum wind gust speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		max_gust: FormControl<number | null | undefined>,

		/**
		 * Historical daily maximum wind speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: double
		 */
		max_speed: FormControl<number | null | undefined>,
	}
	export function CreateTimeMachine_PointDailyStatsWindDataFormGroup() {
		return new FormGroup<TimeMachine_PointDailyStatsWindDataFormProperties>({
			avg_angle: new FormControl<number | null | undefined>(undefined),
			avg_dir: new FormControl<string | null | undefined>(undefined),
			avg_speed: new FormControl<number | null | undefined>(undefined),
			max_gust: new FormControl<number | null | undefined>(undefined),
			max_speed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TimeMachine_TimeMachine {

		/** Required */
		data: Array<TimeMachine_TimeMachineHourlyData>;

		/**
		 * Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elevation: number;

		/**
		 * Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
		 * Required
		 */
		lat: string;

		/**
		 * Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
		 * Required
		 */
		lon: string;

		/** Required */
		statistics: TimeMachine_PointDailyStatsData;

		/** Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID. */
		timezone?: string | null;

		/**
		 * Unit system (metric, uk, ca or us)
		 * Required
		 */
		units: string;
	}
	export interface TimeMachine_TimeMachineFormProperties {

		/**
		 * Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		elevation: FormControl<number | null | undefined>,

		/**
		 * Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
		 * Required
		 */
		lat: FormControl<string | null | undefined>,

		/**
		 * Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
		 * Required
		 */
		lon: FormControl<string | null | undefined>,

		/** Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID. */
		timezone: FormControl<string | null | undefined>,

		/**
		 * Unit system (metric, uk, ca or us)
		 * Required
		 */
		units: FormControl<string | null | undefined>,
	}
	export function CreateTimeMachine_TimeMachineFormGroup() {
		return new FormGroup<TimeMachine_TimeMachineFormProperties>({
			elevation: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timezone: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TimeMachine_TimeMachineHourlyData {

		/**
		 * Convective available potential energy.
		 * Unit: J/kg
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cape?: number | null;

		/** Required */
		cloud_cover: TimeMachine_TimeMachineCloudCoverData;

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		date?: Date | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point?: number | null;

		/**
		 * Evaporation of liquid water into water vapor.
		 * Unit: mm/h
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		evaporation?: number | null;

		/**
		 * Feels like temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like?: number | null;

		/**
		 * Relative humidity.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity?: number | null;

		/**
		 * Numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: N/A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon?: number | null;

		/**
		 * Global downward short-wave radiation flux.
		 * Unit: W/m2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		irradiance?: number | null;

		/**
		 * Total column of ozone.
		 * Unit: Dobson
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ozone?: number | null;

		/** Required */
		precipitation: TimeMachine_TimeMachinePrecipitationData;

		/**
		 * Atmospheric pressure at mean sea level.
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature?: number | null;

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature?: number | null;

		/** String identifier of the weather icon, e.g. `light_rain`. */
		weather?: string | null;

		/** Required */
		wind: TimeMachine_TimeMachineWindData;

		/**
		 * Windchill temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill?: number | null;
	}
	export interface TimeMachine_TimeMachineHourlyDataFormProperties {

		/**
		 * Convective available potential energy.
		 * Unit: J/kg
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cape: FormControl<number | null | undefined>,

		/** Datetime in YYYY-MM-DDTHH:MM:SS format. */
		date: FormControl<Date | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		dew_point: FormControl<number | null | undefined>,

		/**
		 * Evaporation of liquid water into water vapor.
		 * Unit: mm/h
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		evaporation: FormControl<number | null | undefined>,

		/**
		 * Feels like temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		feels_like: FormControl<number | null | undefined>,

		/**
		 * Relative humidity.
		 * Unit: \%
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		humidity: FormControl<number | null | undefined>,

		/**
		 * Numeric identifier of the weather icon. The following values can appear:
		 * * 1 - Not available
		 * * 2 - Sunny
		 * * 3 - Mostly sunny
		 * * 4 - Partly sunny
		 * * 5 - Mostly cloudy
		 * * 6 - Cloudy
		 * * 7 - Overcast
		 * * 8 - Overcast with low clouds
		 * * 9 - Fog
		 * * 10 - Light rain
		 * * 11 - Rain
		 * * 12 - Possible rain
		 * * 13 - Rain shower
		 * * 14 - Thunderstorm
		 * * 15 - Local thunderstorms
		 * * 16 - Light snow
		 * * 17 - Snow
		 * * 18 - Possible snow
		 * * 19 - Snow shower
		 * * 20 - Rain and snow
		 * * 21 - Possible rain and snow
		 * * 22 - Rain and snow
		 * * 23 - Freezing rain
		 * * 24 - Possible freezing rain
		 * * 25 - Hail
		 * * 26 - Clear (night)
		 * * 27 - Mostly clear (night)
		 * * 28 - Partly clear (night)
		 * * 29 - Mostly cloudy (night)
		 * * 30 - Cloudy (night)
		 * * 31 - Overcast with low clouds (night)
		 * * 32 - Rain shower (night)
		 * * 33 - Local thunderstorms (night)
		 * * 34 - Snow shower (night)
		 * * 35 - Rain and snow (night)
		 * * 36 - Possible freezing rain (night)
		 * Unit: N/A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		icon: FormControl<number | null | undefined>,

		/**
		 * Global downward short-wave radiation flux.
		 * Unit: W/m2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		irradiance: FormControl<number | null | undefined>,

		/**
		 * Total column of ozone.
		 * Unit: Dobson
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ozone: FormControl<number | null | undefined>,

		/**
		 * Atmospheric pressure at mean sea level.
		 * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
		 * Type: double
		 */
		pressure: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		soil_temperature: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		surface_temperature: FormControl<number | null | undefined>,

		/**
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		temperature: FormControl<number | null | undefined>,

		/** String identifier of the weather icon, e.g. `light_rain`. */
		weather: FormControl<string | null | undefined>,

		/**
		 * Windchill temperature.
		 * Units: metric = °C, us = °F, uk = °C, ca = °C
		 * Type: double
		 */
		wind_chill: FormControl<number | null | undefined>,
	}
	export function CreateTimeMachine_TimeMachineHourlyDataFormGroup() {
		return new FormGroup<TimeMachine_TimeMachineHourlyDataFormProperties>({
			cape: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			dew_point: new FormControl<number | null | undefined>(undefined),
			evaporation: new FormControl<number | null | undefined>(undefined),
			feels_like: new FormControl<number | null | undefined>(undefined),
			humidity: new FormControl<number | null | undefined>(undefined),
			icon: new FormControl<number | null | undefined>(undefined),
			irradiance: new FormControl<number | null | undefined>(undefined),
			ozone: new FormControl<number | null | undefined>(undefined),
			pressure: new FormControl<number | null | undefined>(undefined),
			soil_temperature: new FormControl<number | null | undefined>(undefined),
			surface_temperature: new FormControl<number | null | undefined>(undefined),
			temperature: new FormControl<number | null | undefined>(undefined),
			weather: new FormControl<string | null | undefined>(undefined),
			wind_chill: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TimeMachine_TimeMachineCloudCoverData {

		/**
		 * Percentage of sky covered by high clouds.
		 * Unit: %
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		high?: number | null;

		/**
		 * Percentage of sky covered by low clouds.
		 * Unit: %
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		low?: number | null;

		/**
		 * Percentage of sky covered by middle clouds.
		 * Unit: %
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		middle?: number | null;

		/**
		 * Percentage of sky covered by clouds.
		 * Unit: %
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}
	export interface TimeMachine_TimeMachineCloudCoverDataFormProperties {

		/**
		 * Percentage of sky covered by high clouds.
		 * Unit: %
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		high: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by low clouds.
		 * Unit: %
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		low: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by middle clouds.
		 * Unit: %
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		middle: FormControl<number | null | undefined>,

		/**
		 * Percentage of sky covered by clouds.
		 * Unit: %
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateTimeMachine_TimeMachineCloudCoverDataFormGroup() {
		return new FormGroup<TimeMachine_TimeMachineCloudCoverDataFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			middle: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TimeMachine_TimeMachinePrecipitationData {

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total?: number | null;

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type?: string | null;
	}
	export interface TimeMachine_TimeMachinePrecipitationDataFormProperties {

		/**
		 * Total precipitation amount accumulated since last hour.
		 * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Precipitation type, may be one of:
		 * * `none`, it there is no precipitation
		 * * `rain`
		 * * `snow`
		 * * `rain_snow`
		 * * `ice pellets`
		 * * `frozen rain`
		 * Unit: precipitation type
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTimeMachine_TimeMachinePrecipitationDataFormGroup() {
		return new FormGroup<TimeMachine_TimeMachinePrecipitationDataFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimeMachine_TimeMachineWindData {

		/**
		 * Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: deg
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		angle?: number | null;

		/**
		 * Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir?: string | null;

		/**
		 * Wind gust speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gusts?: number | null;

		/**
		 * Wind speed 10 metres above the ground.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		speed?: number | null;
	}
	export interface TimeMachine_TimeMachineWindDataFormProperties {

		/**
		 * Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: deg
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		angle: FormControl<number | null | undefined>,

		/**
		 * Wind direction in `N`, `NNE`, `NE`, ..., `NNW` format.
		 * Unit: 16dir
		 */
		dir: FormControl<string | null | undefined>,

		/**
		 * Wind gust speed.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gusts: FormControl<number | null | undefined>,

		/**
		 * Wind speed 10 metres above the ground.
		 * Units: metric = m/s, us = mph, uk = mph, ca = km/h
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		speed: FormControl<number | null | undefined>,
	}
	export function CreateTimeMachine_TimeMachineWindDataFormGroup() {
		return new FormGroup<TimeMachine_TimeMachineWindDataFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			gusts: new FormControl<number | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An enumeration. */
	export enum Units { auto = 'auto', metric = 'metric', us = 'us', uk = 'uk', ca = 'ca' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns air quality data for a single point (geographic name or GPS)
		 * ## Air quality forecast for a single location
		 * ### Location specification
		 * The location of the weather data is the only parameter that is required and must be specified. There are two ways to do this:
		 * 1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
		 * 2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
		 * ### Notes
		 * * **For a detailed description of variables, please consult ⚠️ <a href="https://www.meteosource.com/documentation#description_aq" target="_blank">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).**
		 * * Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them.
		 * * The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**.
		 * * Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request.
		 * * When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`).
		 * Get air_quality
		 * @param {string} place_id Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
		 * @param {string} lat Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4
		 * @param {string} lon Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4
		 * @param {string} timezone Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.
		 * The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.
		 * Alternatively you may use the value ``auto`` in which case the local timezone of the location is used.
		 * The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
		 * @param {string} key Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
		 * @return {AirQuality_PointData} Successful Response
		 */
		Air_quality_air_quality_get(place_id: string | null | undefined, lat: string | null | undefined, lon: string | null | undefined, timezone: string | null | undefined, key: string | null | undefined): Observable<AirQuality_PointData> {
			return this.http.get<AirQuality_PointData>(this.baseUri + 'air_quality?place_id=' + (place_id == null ? '' : encodeURIComponent(place_id)) + '&lat=' + (lat == null ? '' : encodeURIComponent(lat)) + '&lon=' + (lon == null ? '' : encodeURIComponent(lon)) + '&timezone=' + (timezone == null ? '' : encodeURIComponent(timezone)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Search for places. Complete words required.
		 * ## Search for places
		 * You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint.
		 * The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.
		 * Unlike the `/find_place_prefix` endpoint, complete words are required here. You can search for cities,
		 * mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance.
		 * You can then identify the one you want by coordinates, country, or the administrative area.
		 * Get find_places
		 * @param {string} text Place name or ZIP code
		 * @param {Language} language The language of text summaries and place names (variable names are never translated). Available languages are:
		 *    * ``en``: English
		 *    * ``es``: Spanish
		 *    * ``fr``: French
		 *    * ``de``: German
		 *    * ``pl``: Polish
		 *    * ``pt``: Portuguese
		 *    * ``cs``: Czech
		 * @param {string} key Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
		 * @return {Array<FindPlacesModel>} Successful Response
		 */
		Find_places_find_places_get(text: string, language: Language | null | undefined, key: string | null | undefined): Observable<Array<FindPlacesModel>> {
			return this.http.get<Array<FindPlacesModel>>(this.baseUri + 'find_places?text=' + (text == null ? '' : encodeURIComponent(text)) + '&language=' + language + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Prefix search for places. Useful for autocomplete forms.
		 * ## Search for places by prefix
		 * You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint. The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.
		 * Unlike the `/find_places` endpoint, you should only specify the prefix of the place you are looking for. This is particularly useful for autocomplete forms. You can search for cities, mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance. You can then identify the one you want by coordinates, country, or the administrative area.
		 * Get find_places_prefix
		 * @param {string} text Place name or ZIP code
		 * @param {Language} language The language of text summaries and place names (variable names are never translated). Available languages are:
		 *    * ``en``: English
		 *    * ``es``: Spanish
		 *    * ``fr``: French
		 *    * ``de``: German
		 *    * ``pl``: Polish
		 *    * ``pt``: Portuguese
		 *    * ``cs``: Czech
		 * @param {string} key Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
		 * @return {Array<FindPlacesModel>} Successful Response
		 */
		Find_places_prefix_find_places_prefix_get(text: string, language: Language | null | undefined, key: string | null | undefined): Observable<Array<FindPlacesModel>> {
			return this.http.get<Array<FindPlacesModel>>(this.baseUri + 'find_places_prefix?text=' + (text == null ? '' : encodeURIComponent(text)) + '&language=' + language + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Returns PNG weather map for given area and variable
		 * ## PNG weather forecast maps for given area and variable
		 * ### Area specification
		 * There are two ways to specify geographical area you need for your map:
		 * 1. Specify `X` and `Y` coordinates and zoom level `Z` of desired tile in <a href="https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/" rel="nofollow" target="_blank">Google Maps Tile notation</a>.
		 * 2. Specify latitude and longitude bounds of the area you want to cover.
		 * ### Notes
		 * * The resulting PNG maps are **always** in <a href="https://epsg.io/3857" rel="nofollow" target="_blank">Google Mercator projection (EPSG:3857)</a>.
		 * * As Meteosource only covers areas between latitudes 80° and -80°, you can only request maps within these bounds, when specifying the latitude and longitude boundaries. When specifying the area using Google Maps Tile notation, the regions outside our supported latitudes will be fully transparent.
		 * * The finest resolution is not available for maps covering very large regions. The resulting map will be automatically downscaled in this case, to guarantee high-speed responses.
		 * * Weather maps are only supported for forecasts, not for archive data.
		 * Get map
		 * @param {number} tile_x The X coordinate of Google Maps tile
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} tile_y The Y coordinate of Google Maps tile
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} tile_zoom The zoom level of Google Maps tile
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} min_lat Minimal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2
		 * @param {string} min_lon Minimal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2
		 * @param {string} max_lat Maximal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2.
		 * @param {string} max_lon Maximal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2
		 * @param {string} variable Name of the variable for your map. Available values are:
		 * * `temperature`: Temperature 2 metres above ground
		 * * `feels_like_temperature`: Feels like temperature
		 * * `clouds`: Percentage of sky covered by clouds
		 * * `precipitation`: Total precipitation amount accumulated since last hour
		 * * `wind_speed`: Wind speed 10 metres above the ground
		 * * `wind_gust`: Wind gust speed
		 * * `pressure`: Atmospheric pressure at mean sea level
		 * * `humidity`: Relative humidity
		 * * `wave_height`: Wave height
		 * * `wave_period`: Wave period
		 * * `sea_temperature`: Sea temperature (available only for +-24 hours)
		 * * `air_quality`: Air quality index
		 * * `ozone_surface`: Ozone at surface level
		 * * `ozone_total`: Total column ozone
		 * * `no2`: Nitrogen dioxide at surface level
		 * * `pm2.5`: Particulate matter d < 2.5 µm (PM2.5)
		 * @param {string} datetime There are two ways to specify date and time for your map:
		 * 1. Datetime in `YYYY-MM-DDTHH:MM` format and `UTC` timezone, e.g. `2021-08-24T12:00`
		 * 2. Offset from current time in `[+-]<minutes|hours|days>` format, e.g. `+10minutes`, `-2hours` or `+1days`
		 * @param {string} key Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
		 * @return {void} Successful Response
		 */
		Map_map_get(tile_x: number | null | undefined, tile_y: number | null | undefined, tile_zoom: number | null | undefined, min_lat: string | null | undefined, min_lon: string | null | undefined, max_lat: string | null | undefined, max_lon: string | null | undefined, variable: string, datetime: string, key: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'map?tile_x=' + tile_x + '&tile_y=' + tile_y + '&tile_zoom=' + tile_zoom + '&min_lat=' + (min_lat == null ? '' : encodeURIComponent(min_lat)) + '&min_lon=' + (min_lon == null ? '' : encodeURIComponent(min_lon)) + '&max_lat=' + (max_lat == null ? '' : encodeURIComponent(max_lat)) + '&max_lon=' + (max_lon == null ? '' : encodeURIComponent(max_lon)) + '&variable=' + (variable == null ? '' : encodeURIComponent(variable)) + '&datetime=' + (datetime == null ? '' : encodeURIComponent(datetime)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the nearest named location for a given GPS coordinates.
		 * ## Search for nearest place by coordinates
		 * You can use this endpoint to find the nearest place from given coordinates.
		 * *Note: If you specify coordinates of a secluded place (e.g. middle of the ocean), the nearest point can be very far from the coordinates.*
		 * Get nearest_place
		 * @param {string} lat Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4
		 * @param {string} lon Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4
		 * @param {Language} language The language of text summaries and place names (variable names are never translated). Available languages are:
		 *    * ``en``: English
		 *    * ``es``: Spanish
		 *    * ``fr``: French
		 *    * ``de``: German
		 *    * ``pl``: Polish
		 *    * ``pt``: Portuguese
		 *    * ``cs``: Czech
		 * @param {string} key Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
		 * @return {FindPlacesModel} Successful Response
		 */
		Nearest_place_nearest_place_get(lat: string, lon: string, language: Language | null | undefined, key: string | null | undefined): Observable<FindPlacesModel> {
			return this.http.get<FindPlacesModel>(this.baseUri + 'nearest_place?lat=' + (lat == null ? '' : encodeURIComponent(lat)) + '&lon=' + (lon == null ? '' : encodeURIComponent(lon)) + '&language=' + language + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Returns weather data for a single point (geographic name or GPS)
		 * ## Current weather and forecast for single location
		 * ### Location specification
		 * The location of the weather data is the only parameter that is required and must be specified. There are two ways to do this:
		 * 1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
		 * 2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
		 * *Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive forecasts for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*
		 * ### Sections
		 * The endpoint can return multiple sections of data. To obtain the best performance, we advise only requesting the sections you actually need. The available sections are as follows:
		 * * Current weather situation
		 * * Hourly forecast (for 24/48/96/168 hours, depending on the tier)
		 * * Daily forecast (for 7/10/30 days, depending on the tier)
		 * * Minutely precipitation forecast (for 60 minutes in the following hour, only for higher tiers)
		 * * Weather alerts (only for higher tiers)
		 * By default, only the current and hourly sections are returned. The division into daily parts (morning, afternoon and evening) is only available for the first 7 days of the forecast. For details regarding available parameters, see the parameter description below.
		 * ### Notes
		 * * **For a detailed description of variables (e.g. icons), please consult ⚠️ <a href="https://www.meteosource.com/documentation#description" target="_blank">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).**
		 * * Variables can be instantaneous, averaged, or accumulated over certain time. For example, `precipitation` forecast provides the precipitation accumulated until the next hour (data with timestamp as `12:00:00` is rain accumulated from `12:00:00` to `13:00:00`).
		 * * Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them.
		 * * The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**.
		 * * Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request.
		 * * When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`).
		 * * The detailed description of weather alerts is only available in English. The alert category is translated into selected language.
		 * Get point
		 * @param {string} place_id Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
		 * @param {string} lat Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4
		 * @param {string} lon Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4
		 * @param {string} sections Sections to be included in the response. You can specify more section by separating the values with a comma. The available values are:
		 * * ``current``: Current weather situation
		 * * ``daily``: Forecasts for each whole day, without the daily parts
		 * * ``daily-parts``: Forecasts for each whole day, morning, afternoon and evening
		 *     * Important: forecast for the morning, afternoon and evening is available only for the first
		 *       7 days in the forecast
		 * * ``hourly``: Forecasts with hourly resolution
		 * * ``minutely``: Precipitation forecast with 1 minute resolution
		 * * ``alerts``: The weather alerts
		 * * ``all``: All sections
		 * @param {string} timezone Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.
		 * The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.
		 * Alternatively you may use the value ``auto`` in which case the local timezone of the location is used.
		 * The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
		 * @param {Language} language The language of text summaries and place names (variable names are never translated). Available languages are:
		 *    * ``en``: English
		 *    * ``es``: Spanish
		 *    * ``fr``: French
		 *    * ``de``: German
		 *    * ``pl``: Polish
		 *    * ``pt``: Portuguese
		 *    * ``cs``: Czech
		 * @param {Units} units Unit system to be used. The available values are:
		 * * `auto`: Select the system automatically, based on the forecast location.
		 * * `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).
		 * * `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).
		 * * `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.
		 * * `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.
		 * @param {string} key Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
		 * @return {Point_PointData} Successful Response
		 */
		Point_point_get(place_id: string | null | undefined, lat: string | null | undefined, lon: string | null | undefined, sections: string | null | undefined, timezone: string | null | undefined, language: Language | null | undefined, units: Units | null | undefined, key: string | null | undefined): Observable<Point_PointData> {
			return this.http.get<Point_PointData>(this.baseUri + 'point?place_id=' + (place_id == null ? '' : encodeURIComponent(place_id)) + '&lat=' + (lat == null ? '' : encodeURIComponent(lat)) + '&lon=' + (lon == null ? '' : encodeURIComponent(lon)) + '&sections=' + (sections == null ? '' : encodeURIComponent(sections)) + '&timezone=' + (timezone == null ? '' : encodeURIComponent(timezone)) + '&language=' + language + '&units=' + units + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Returns weather data for a single location and given day in the past
		 * ## Actual weather data for a single location and day in the past
		 * The output contains actual weather data for each day up to 20 years in the past, and long-term statistics of selected weather variables aggregated over 40 years.
		 * ### Location specification
		 * The location of the weather data must be specified. There are two ways to do this:
		 * 1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
		 * 2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
		 * *Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive data for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*
		 * Get time_machine
		 * @param {string} place_id Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
		 * @param {string} lat Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4
		 * @param {string} lon Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4
		 * @param {Date} date The day of the data in the past. Specify in `YYYY-MM-DD` format, e.g. `2021-08-24`.
		 *     Type: DateOnly
		 * @param {string} timezone Timezone to be used for the date fields. If not specified, local timezone of the location will be used.
		 * The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.
		 * Alternatively you may use the value ``auto`` in which case the local timezone of the location is used.
		 * The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
		 * @param {Units} units Unit system to be used. The available values are:
		 * * `auto`: Select the system automatically, based on the forecast location.
		 * * `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).
		 * * `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).
		 * * `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.
		 * * `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.
		 * @param {string} key Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
		 * @return {TimeMachine_TimeMachine} Successful Response
		 */
		Time_machine_time_machine_get(place_id: string | null | undefined, lat: string | null | undefined, lon: string | null | undefined, date: Date, timezone: string | null | undefined, units: Units | null | undefined, key: string | null | undefined): Observable<TimeMachine_TimeMachine> {
			return this.http.get<TimeMachine_TimeMachine>(this.baseUri + 'time_machine?place_id=' + (place_id == null ? '' : encodeURIComponent(place_id)) + '&lat=' + (lat == null ? '' : encodeURIComponent(lat)) + '&lon=' + (lon == null ? '' : encodeURIComponent(lon)) + '&date=' + date.toISOString() + '&timezone=' + (timezone == null ? '' : encodeURIComponent(timezone)) + '&units=' + units + '&key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}
	}

}

