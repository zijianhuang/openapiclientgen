import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InputCalculateMinMax {

		/**
		 * Colllection of values to calculate
		 * Required
		 */
		input: Array<number>;

		/**
		 * Minimum or Maximum
		 * Required
		 */
		type: InputCalculateMinMaxType;
	}
	export interface InputCalculateMinMaxFormProperties {

		/**
		 * Minimum or Maximum
		 * Required
		 */
		type: FormControl<InputCalculateMinMaxType | null | undefined>,
	}
	export function CreateInputCalculateMinMaxFormGroup() {
		return new FormGroup<InputCalculateMinMaxFormProperties>({
			type: new FormControl<InputCalculateMinMaxType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputCalculateMinMaxType { Minimum = 'Minimum', Maximum = 'Maximum' }

	export interface InputCalculateNumber {

		/**
		 * Round to number of decimal places
		 * Required
		 * Minimum: 0
		 */
		decimals: number;

		/**
		 * Numeric value to calculate
		 * Required
		 */
		input: number;
	}
	export interface InputCalculateNumberFormProperties {

		/**
		 * Round to number of decimal places
		 * Required
		 * Minimum: 0
		 */
		decimals: FormControl<number | null | undefined>,

		/**
		 * Numeric value to calculate
		 * Required
		 */
		input: FormControl<number | null | undefined>,
	}
	export function CreateInputCalculateNumberFormGroup() {
		return new FormGroup<InputCalculateNumberFormProperties>({
			decimals: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputCalculateNumbers {

		/**
		 * Round to number of decimal places
		 * Required
		 * Minimum: 0
		 */
		decimals: number;

		/**
		 * Numeric value
		 * Required
		 */
		input: number;

		/**
		 * Addend, subtrahend, factor, divisor or radicand
		 * Required
		 */
		value: number;
	}
	export interface InputCalculateNumbersFormProperties {

		/**
		 * Round to number of decimal places
		 * Required
		 * Minimum: 0
		 */
		decimals: FormControl<number | null | undefined>,

		/**
		 * Numeric value
		 * Required
		 */
		input: FormControl<number | null | undefined>,

		/**
		 * Addend, subtrahend, factor, divisor or radicand
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateInputCalculateNumbersFormGroup() {
		return new FormGroup<InputCalculateNumbersFormProperties>({
			decimals: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputCalculatePower {

		/**
		 * Round to number of decimal places
		 * Required
		 * Minimum: 0
		 */
		decimals: number;

		/**
		 * Number to raise
		 * Required
		 */
		input: number;

		/**
		 * Power
		 * Required
		 */
		power: number;
	}
	export interface InputCalculatePowerFormProperties {

		/**
		 * Round to number of decimal places
		 * Required
		 * Minimum: 0
		 */
		decimals: FormControl<number | null | undefined>,

		/**
		 * Number to raise
		 * Required
		 */
		input: FormControl<number | null | undefined>,

		/**
		 * Power
		 * Required
		 */
		power: FormControl<number | null | undefined>,
	}
	export function CreateInputCalculatePowerFormGroup() {
		return new FormGroup<InputCalculatePowerFormProperties>({
			decimals: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			power: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputCalculateSeries {

		/**
		 * Round to number of decimal places
		 * Required
		 * Minimum: 0
		 */
		decimals: number;

		/**
		 * Colllection of values to calculate
		 * Required
		 */
		input: Array<number>;
	}
	export interface InputCalculateSeriesFormProperties {

		/**
		 * Round to number of decimal places
		 * Required
		 * Minimum: 0
		 */
		decimals: FormControl<number | null | undefined>,
	}
	export function CreateInputCalculateSeriesFormGroup() {
		return new FormGroup<InputCalculateSeriesFormProperties>({
			decimals: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface InputCaseConversion {

		/**
		 * Case of conversion result
		 * Required
		 */
		alphacase: InputCaseConversionAlphacase;

		/**
		 * String containing the text to convert
		 * Required
		 */
		input: string;
	}
	export interface InputCaseConversionFormProperties {

		/**
		 * Case of conversion result
		 * Required
		 */
		alphacase: FormControl<InputCaseConversionAlphacase | null | undefined>,

		/**
		 * String containing the text to convert
		 * Required
		 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateInputCaseConversionFormGroup() {
		return new FormGroup<InputCaseConversionFormProperties>({
			alphacase: new FormControl<InputCaseConversionAlphacase | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputCaseConversionAlphacase { Upper = 'Upper', Lower = 'Lower', Title = 'Title' }

	export interface InputCollectionConversion {

		/**
		 * Collection containing strings to convert
		 * Required
		 */
		input: Array<string>;

		/**
		 * Collection name
		 * Required
		 */
		name: string;
	}
	export interface InputCollectionConversionFormProperties {

		/**
		 * Collection name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInputCollectionConversionFormGroup() {
		return new FormGroup<InputCollectionConversionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputCollectionConversionXML {

		/**
		 * Name of child XML node(s)
		 * Required
		 */
		child: string;

		/**
		 * Collection containing strings to convert
		 * Required
		 */
		input: Array<string>;

		/**
		 * Name of root XML node
		 * Required
		 */
		root: string;
	}
	export interface InputCollectionConversionXMLFormProperties {

		/**
		 * Name of child XML node(s)
		 * Required
		 */
		child: FormControl<string | null | undefined>,

		/**
		 * Name of root XML node
		 * Required
		 */
		root: FormControl<string | null | undefined>,
	}
	export function CreateInputCollectionConversionXMLFormGroup() {
		return new FormGroup<InputCollectionConversionXMLFormProperties>({
			child: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			root: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputCollectionCount {

		/**
		 * Collection of items to count
		 * Required
		 */
		input: Array<string>;
	}
	export interface InputCollectionCountFormProperties {
	}
	export function CreateInputCollectionCountFormGroup() {
		return new FormGroup<InputCollectionCountFormProperties>({
		});

	}

	export interface InputCollectionFilter {

		/**
		 * Collection of strings to filter
		 * Required
		 */
		input: Array<string>;

		/**
		 * Keywords (separate multiple values with commas)
		 * Required
		 */
		keywords: string;

		/**
		 * Match type
		 * Required
		 */
		match: InputCollectionFilterMatch;
	}
	export interface InputCollectionFilterFormProperties {

		/**
		 * Keywords (separate multiple values with commas)
		 * Required
		 */
		keywords: FormControl<string | null | undefined>,

		/**
		 * Match type
		 * Required
		 */
		match: FormControl<InputCollectionFilterMatch | null | undefined>,
	}
	export function CreateInputCollectionFilterFormGroup() {
		return new FormGroup<InputCollectionFilterFormProperties>({
			keywords: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			match: new FormControl<InputCollectionFilterMatch | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputCollectionFilterMatch { Any = 'Any', All = 'All', None = 'None' }

	export interface InputCollectionModify {

		/** Index position for operation (leave blank to specify end of collection) */
		index?: string | null;

		/**
		 * Collection of values or objects to modify
		 * Required
		 */
		input: Array<string>;

		/** Item (for multiple items, leave blank and use Items) */
		item?: string | null;

		/** Items (Collection, for a single item leave blank and use Item) */
		items?: Array<string>;
	}
	export interface InputCollectionModifyFormProperties {

		/** Index position for operation (leave blank to specify end of collection) */
		index: FormControl<string | null | undefined>,

		/** Item (for multiple items, leave blank and use Items) */
		item: FormControl<string | null | undefined>,
	}
	export function CreateInputCollectionModifyFormGroup() {
		return new FormGroup<InputCollectionModifyFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			item: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InputCollectionReplace {

		/**
		 * Ignore case
		 * Required
		 */
		ignoreCase: InputCollectionReplaceIgnoreCase;

		/**
		 * Collection of strings
		 * Required
		 */
		input: Array<string>;

		/**
		 * Match value
		 * Required
		 */
		match: string;

		/**
		 * Replacement value
		 * Required
		 */
		replacement: string;
	}
	export interface InputCollectionReplaceFormProperties {

		/**
		 * Ignore case
		 * Required
		 */
		ignoreCase: FormControl<InputCollectionReplaceIgnoreCase | null | undefined>,

		/**
		 * Match value
		 * Required
		 */
		match: FormControl<string | null | undefined>,

		/**
		 * Replacement value
		 * Required
		 */
		replacement: FormControl<string | null | undefined>,
	}
	export function CreateInputCollectionReplaceFormGroup() {
		return new FormGroup<InputCollectionReplaceFormProperties>({
			ignoreCase: new FormControl<InputCollectionReplaceIgnoreCase | null | undefined>(undefined, [Validators.required]),
			match: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replacement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputCollectionReplaceIgnoreCase { true = 'true', false = 'false' }

	export interface InputCollectionSearch {

		/** Ignore case when performing comparison */
		ignorecase?: InputCollectionReplaceIgnoreCase | null;

		/**
		 * Collection of strings to search
		 * Required
		 */
		input: Array<string>;

		/**
		 * Text to match
		 * Required
		 */
		match: string;

		/** Trim white space from comparison string */
		trim?: InputCollectionReplaceIgnoreCase | null;
	}
	export interface InputCollectionSearchFormProperties {

		/** Ignore case when performing comparison */
		ignorecase: FormControl<InputCollectionReplaceIgnoreCase | null | undefined>,

		/**
		 * Text to match
		 * Required
		 */
		match: FormControl<string | null | undefined>,

		/** Trim white space from comparison string */
		trim: FormControl<InputCollectionReplaceIgnoreCase | null | undefined>,
	}
	export function CreateInputCollectionSearchFormGroup() {
		return new FormGroup<InputCollectionSearchFormProperties>({
			ignorecase: new FormControl<InputCollectionReplaceIgnoreCase | null | undefined>(undefined),
			match: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trim: new FormControl<InputCollectionReplaceIgnoreCase | null | undefined>(undefined),
		});

	}

	export interface InputCollectionSearchNumeric {

		/**
		 * Collection of strings to search
		 * Required
		 */
		input: Array<number>;

		/**
		 * Number to match
		 * Required
		 */
		match: number;

		/** Type of number - integer or decimal */
		type?: InputCollectionSearchNumericType | null;
	}
	export interface InputCollectionSearchNumericFormProperties {

		/**
		 * Number to match
		 * Required
		 */
		match: FormControl<number | null | undefined>,

		/** Type of number - integer or decimal */
		type: FormControl<InputCollectionSearchNumericType | null | undefined>,
	}
	export function CreateInputCollectionSearchNumericFormGroup() {
		return new FormGroup<InputCollectionSearchNumericFormProperties>({
			match: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<InputCollectionSearchNumericType | null | undefined>(undefined),
		});

	}

	export enum InputCollectionSearchNumericType { Integer = 'Integer', Decimal = 'Decimal' }

	export interface InputCollectionSort {

		/**
		 * Collection of strings to sort
		 * Required
		 */
		input: Array<string>;

		/**
		 * Sort order
		 * Required
		 */
		order: InputCollectionSortOrder;
	}
	export interface InputCollectionSortFormProperties {

		/**
		 * Sort order
		 * Required
		 */
		order: FormControl<InputCollectionSortOrder | null | undefined>,
	}
	export function CreateInputCollectionSortFormGroup() {
		return new FormGroup<InputCollectionSortFormProperties>({
			order: new FormControl<InputCollectionSortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputCollectionSortOrder { Ascending = 'Ascending', Descending = 'Descending' }

	export interface InputCollectionSplit {

		/** Index location to split (leave empty to use Match value) */
		index?: string | null;

		/**
		 * Collection of items to split
		 * Required
		 */
		input: Array<string>;

		/** String to match (explicit, case-insensitive, leave empty to use Index) */
		match?: string | null;
	}
	export interface InputCollectionSplitFormProperties {

		/** Index location to split (leave empty to use Match value) */
		index: FormControl<string | null | undefined>,

		/** String to match (explicit, case-insensitive, leave empty to use Index) */
		match: FormControl<string | null | undefined>,
	}
	export function CreateInputCollectionSplitFormGroup() {
		return new FormGroup<InputCollectionSplitFormProperties>({
			index: new FormControl<string | null | undefined>(undefined),
			match: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InputConvertAngle {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertAngleSource;

		/** Required */
		target: InputConvertAngleSource;
	}
	export interface InputConvertAngleFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertAngleSource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertAngleSource | null | undefined>,
	}
	export function CreateInputConvertAngleFormGroup() {
		return new FormGroup<InputConvertAngleFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertAngleSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertAngleSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertAngleSource { Arcminute = 'Arcminute', Arcsecond = 'Arcsecond', Centiradian = 'Centiradian', Deciradian = 'Deciradian', Degree = 'Degree', Gradian = 'Gradian', Microdegree = 'Microdegree', Microradian = 'Microradian', Millidegree = 'Millidegree', Milliradian = 'Milliradian', Nanodegree = 'Nanodegree', Nanoradian = 'Nanoradian', Radian = 'Radian', Revolution = 'Revolution' }

	export interface InputConvertArea {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertAreaSource;

		/** Required */
		target: InputConvertAreaSource;
	}
	export interface InputConvertAreaFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertAreaSource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertAreaSource | null | undefined>,
	}
	export function CreateInputConvertAreaFormGroup() {
		return new FormGroup<InputConvertAreaFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertAreaSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertAreaSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertAreaSource { Acre = 'Acre', Hectare = 'Hectare', SquareCentimeter = 'SquareCentimeter', SquareDecimeter = 'SquareDecimeter', SquareFoot = 'SquareFoot', SquareInch = 'SquareInch', SquareKilometer = 'SquareKilometer', SquareMeter = 'SquareMeter', SquareMicrometer = 'SquareMicrometer', SquareMile = 'SquareMile', SquareMillimeter = 'SquareMillimeter', SquareYard = 'SquareYard' }

	export interface InputConvertDistance {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertDistanceSource;

		/** Required */
		target: InputConvertDistanceSource;
	}
	export interface InputConvertDistanceFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertDistanceSource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertDistanceSource | null | undefined>,
	}
	export function CreateInputConvertDistanceFormGroup() {
		return new FormGroup<InputConvertDistanceFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertDistanceSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertDistanceSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertDistanceSource { Centimeter = 'Centimeter', Decimeter = 'Decimeter', Fathom = 'Fathom', Foot = 'Foot', Hectometer = 'Hectometer', Inch = 'Inch', Kilometer = 'Kilometer', LightYear = 'LightYear', Meter = 'Meter', Micrometer = 'Micrometer', Mile = 'Mile', Millimeter = 'Millimeter', Nanometer = 'Nanometer', NauticalMile = 'NauticalMile', Yard = 'Yard' }

	export interface InputConvertDuration {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertDurationSource;

		/** Required */
		target: InputConvertDurationSource;
	}
	export interface InputConvertDurationFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertDurationSource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertDurationSource | null | undefined>,
	}
	export function CreateInputConvertDurationFormGroup() {
		return new FormGroup<InputConvertDurationFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertDurationSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertDurationSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertDurationSource { Day = 'Day', Hour = 'Hour', Microsecond = 'Microsecond', Millisecond = 'Millisecond', Minute = 'Minute', Month = 'Month', Nanosecond = 'Nanosecond', Second = 'Second', Week = 'Week', Year = 'Year' }

	export interface InputConvertEnergy {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertEnergySource;

		/** Required */
		target: InputConvertEnergySource;
	}
	export interface InputConvertEnergyFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertEnergySource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertEnergySource | null | undefined>,
	}
	export function CreateInputConvertEnergyFormGroup() {
		return new FormGroup<InputConvertEnergyFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertEnergySource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertEnergySource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertEnergySource { BritishThermalUnit = 'BritishThermalUnit', Calorie = 'Calorie', ElectronVolt = 'ElectronVolt', FootPound = 'FootPound', GigawattHour = 'GigawattHour', Joule = 'Joule', Kilocalorie = 'Kilocalorie', Kilojoule = 'Kilojoule', KilowattHour = 'KilowattHour', Megajoule = 'Megajoule', MegawattHour = 'MegawattHour', TerawattHour = 'TerawattHour', 'Therm (EU)' = 'Therm (EU)', 'Therm (UK)' = 'Therm (UK)', 'Therm (US)' = 'Therm (US)', WattHour = 'WattHour' }

	export interface InputConvertPower {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertPowerSource;

		/** Required */
		target: InputConvertPowerSource;
	}
	export interface InputConvertPowerFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertPowerSource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertPowerSource | null | undefined>,
	}
	export function CreateInputConvertPowerFormGroup() {
		return new FormGroup<InputConvertPowerFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertPowerSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertPowerSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertPowerSource { BritishThermalUnitPerHour = 'BritishThermalUnitPerHour', Decawatt = 'Decawatt', Deciwatt = 'Deciwatt', ElectricalHorsepower = 'ElectricalHorsepower', Femtowatt = 'Femtowatt', Gigawatt = 'Gigawatt', HydraulicHorsepower = 'HydraulicHorsepower', Kilowatt = 'Kilowatt', MechanicalHorsepower = 'MechanicalHorsepower', Megawatt = 'Megawatt', Microwatt = 'Microwatt', Milliwatt = 'Milliwatt', Nanowatt = 'Nanowatt', Petawatt = 'Petawatt', Picowatt = 'Picowatt', Terawatt = 'Terawatt', Watt = 'Watt' }

	export interface InputConvertSpeed {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertSpeedSource;

		/** Required */
		target: InputConvertSpeedSource;
	}
	export interface InputConvertSpeedFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertSpeedSource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertSpeedSource | null | undefined>,
	}
	export function CreateInputConvertSpeedFormGroup() {
		return new FormGroup<InputConvertSpeedFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertSpeedSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertSpeedSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertSpeedSource { CentimeterPerHour = 'CentimeterPerHour', CentimeterPerMinute = 'CentimeterPerMinute', CentimeterPerSecond = 'CentimeterPerSecond', DecimeterPerMinute = 'DecimeterPerMinute', DecimeterPerSecond = 'DecimeterPerSecond', FootPerHour = 'FootPerHour', FootPerMinute = 'FootPerMinute', FootPerSecond = 'FootPerSecond', InchPerHour = 'InchPerHour', InchPerMinute = 'InchPerMinute', InchPerSecond = 'InchPerSecond', KilometerPerHour = 'KilometerPerHour', KilometerPerMinute = 'KilometerPerMinute', KilometerPerSecond = 'KilometerPerSecond', Knot = 'Knot', MeterPerHour = 'MeterPerHour', MeterPerMinute = 'MeterPerMinute', MeterPerSecond = 'MeterPerSecond', MicrometerPerMinute = 'MicrometerPerMinute', MicrometerPerSecond = 'MicrometerPerSecond', MilePerHour = 'MilePerHour', MillimeterPerHour = 'MillimeterPerHour', MillimeterPerMinute = 'MillimeterPerMinute', MillimeterPerSecond = 'MillimeterPerSecond', NanometerPerMinute = 'NanometerPerMinute', NanometerPerSecond = 'NanometerPerSecond', YardPerHour = 'YardPerHour', YardPerMinute = 'YardPerMinute', YardPerSecond = 'YardPerSecond' }

	export interface InputConvertTemperature {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertTemperatureSource;

		/** Required */
		target: InputConvertTemperatureSource;
	}
	export interface InputConvertTemperatureFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertTemperatureSource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertTemperatureSource | null | undefined>,
	}
	export function CreateInputConvertTemperatureFormGroup() {
		return new FormGroup<InputConvertTemperatureFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertTemperatureSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertTemperatureSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertTemperatureSource { Celsius = 'Celsius', Fahrenheit = 'Fahrenheit', Newton = 'Newton', Kelvin = 'Kelvin' }

	export interface InputConvertVolume {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertVolumeSource;

		/** Required */
		target: InputConvertVolumeSource;
	}
	export interface InputConvertVolumeFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertVolumeSource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertVolumeSource | null | undefined>,
	}
	export function CreateInputConvertVolumeFormGroup() {
		return new FormGroup<InputConvertVolumeFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertVolumeSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertVolumeSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertVolumeSource { Centiliter = 'Centiliter', CubicCentimeter = 'CubicCentimeter', CubicDecimeter = 'CubicDecimeter', CubicFoot = 'CubicFoot', CubicHectometer = 'CubicHectometer', CubicInch = 'CubicInch', CubicKilometer = 'CubicKilometer', CubicMeter = 'CubicMeter', CubicMillimeter = 'CubicMillimeter', CubicYard = 'CubicYard', Deciliter = 'Deciliter', ImperialBeerBarrel = 'ImperialBeerBarrel', ImperialGallon = 'ImperialGallon', ImperialOunce = 'ImperialOunce', ImperialPint = 'ImperialPint', Kiloliter = 'Kiloliter', Liter = 'Liter', Microliter = 'Microliter', Milliliter = 'Milliliter', Gallon = 'Gallon', Cup = 'Cup', Ounce = 'Ounce', Pint = 'Pint', Quart = 'Quart', Tablespoon = 'Tablespoon', Teaspoon = 'Teaspoon' }

	export interface InputConvertWeight {

		/** Required */
		input: number;

		/** Required */
		source: InputConvertWeightSource;

		/** Required */
		target: InputConvertWeightTarget;
	}
	export interface InputConvertWeightFormProperties {

		/** Required */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputConvertWeightSource | null | undefined>,

		/** Required */
		target: FormControl<InputConvertWeightTarget | null | undefined>,
	}
	export function CreateInputConvertWeightFormGroup() {
		return new FormGroup<InputConvertWeightFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputConvertWeightSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputConvertWeightTarget | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConvertWeightSource { Centigram = 'Centigram', Decagram = 'Decagram', Decigram = 'Decigram', Grain = 'Grain', Gram = 'Gram', Hectogram = 'Hectogram', Kilogram = 'Kilogram', Microgram = 'Microgram', Milligram = 'Milligram', Nanogram = 'Nanogram', Ounce = 'Ounce', Pound = 'Pound', Stone = 'Stone', 'Solar Mass' = 'Solar Mass', 'Earth Mass' = 'Earth Mass', Slug = 'Slug', 'Short Ton' = 'Short Ton', 'Long Ton' = 'Long Ton', Ton = 'Ton', Megaton = 'Megaton', 'Short Hundredweight' = 'Short Hundredweight', 'Long Hundredweight' = 'Long Hundredweight' }

	export enum InputConvertWeightTarget { Centigram = 'Centigram', Decagram = 'Decagram', Decigram = 'Decigram', Grain = 'Grain', Gram = 'Gram', Hectogram = 'Hectogram', Kilogram = 'Kilogram', Microgram = 'Microgram', Milligram = 'Milligram', Nanogram = 'Nanogram', Ounce = 'Ounce', Pound = 'Pound', Stone = 'Stone', Ton = 'Ton' }

	export interface InputCsvConversionJSON {

		/**
		 * Include header row
		 * Required
		 */
		header: boolean;

		/**
		 * CSV string
		 * Required
		 */
		input: string;
	}
	export interface InputCsvConversionJSONFormProperties {

		/**
		 * Include header row
		 * Required
		 */
		header: FormControl<boolean | null | undefined>,

		/**
		 * CSV string
		 * Required
		 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateInputCsvConversionJSONFormGroup() {
		return new FormGroup<InputCsvConversionJSONFormProperties>({
			header: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputCurrencyConversion {

		/**
		 * Amount to convert
		 * Required
		 */
		input: number;

		/** Required */
		source: InputCurrencyConversionSource;

		/** Required */
		target: InputCurrencyConversionSource;
	}
	export interface InputCurrencyConversionFormProperties {

		/**
		 * Amount to convert
		 * Required
		 */
		input: FormControl<number | null | undefined>,

		/** Required */
		source: FormControl<InputCurrencyConversionSource | null | undefined>,

		/** Required */
		target: FormControl<InputCurrencyConversionSource | null | undefined>,
	}
	export function CreateInputCurrencyConversionFormGroup() {
		return new FormGroup<InputCurrencyConversionFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputCurrencyConversionSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputCurrencyConversionSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputCurrencyConversionSource { USD = 'USD', AUD = 'AUD', BGN = 'BGN', BRL = 'BRL', CAD = 'CAD', CHF = 'CHF', CNY = 'CNY', CZK = 'CZK', DKK = 'DKK', EUR = 'EUR', GBP = 'GBP', HKD = 'HKD', HRK = 'HRK', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', INR = 'INR', ISK = 'ISK', JPY = 'JPY', KRW = 'KRW', MXN = 'MXN', MYR = 'MYR', NOK = 'NOK', NZD = 'NZD', PHP = 'PHP', PLN = 'PLN', RON = 'RON', RUB = 'RUB', SGD = 'SGD', SEK = 'SEK', THB = 'THB', TRY = 'TRY', ZAR = 'ZAR' }

	export interface InputCurrencyFormat {

		/**
		 * Amount to format
		 * Required
		 */
		input: number;

		/** Required */
		target: InputCurrencyConversionSource;
	}
	export interface InputCurrencyFormatFormProperties {

		/**
		 * Amount to format
		 * Required
		 */
		input: FormControl<number | null | undefined>,

		/** Required */
		target: FormControl<InputCurrencyConversionSource | null | undefined>,
	}
	export function CreateInputCurrencyFormatFormGroup() {
		return new FormGroup<InputCurrencyFormatFormProperties>({
			input: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputCurrencyConversionSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputDataQuery {

		/**
		 * XML or JSON string
		 * Required
		 */
		input: string;

		/**
		 * XPath or JSONPath query
		 * Required
		 */
		query: string;
	}
	export interface InputDataQueryFormProperties {

		/**
		 * XML or JSON string
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/**
		 * XPath or JSONPath query
		 * Required
		 */
		query: FormControl<string | null | undefined>,
	}
	export function CreateInputDataQueryFormGroup() {
		return new FormGroup<InputDataQueryFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputDateTimeConversion {

		/** Display format (defaults to 'yyyy-MM-dd HH:mm:ss') */
		format?: string | null;

		/**
		 * Source date and time
		 * Required
		 */
		input: string;

		/** Required */
		source: InputDateTimeConversionSource;

		/** Required */
		target: InputDateTimeConversionSource;
	}
	export interface InputDateTimeConversionFormProperties {

		/** Display format (defaults to 'yyyy-MM-dd HH:mm:ss') */
		format: FormControl<string | null | undefined>,

		/**
		 * Source date and time
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<InputDateTimeConversionSource | null | undefined>,

		/** Required */
		target: FormControl<InputDateTimeConversionSource | null | undefined>,
	}
	export function CreateInputDateTimeConversionFormGroup() {
		return new FormGroup<InputDateTimeConversionFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<InputDateTimeConversionSource | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<InputDateTimeConversionSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputDateTimeConversionSource { 'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London' = 'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London', 'Greenwich Standard Time - (GMT) Monrovia, Reykjavik' = 'Greenwich Standard Time - (GMT) Monrovia, Reykjavik', 'W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna' = 'W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna', 'Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague' = 'Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague', 'Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb' = 'Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb', 'W. Central Africa Standard Time - (GMT+01:00) West Central Africa' = 'W. Central Africa Standard Time - (GMT+01:00) West Central Africa', 'GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul' = 'GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul', 'Middle East Standard Time - (GMT+02:00) Beirut' = 'Middle East Standard Time - (GMT+02:00) Beirut', 'Egypt Standard Time - (GMT+02:00) Cairo' = 'Egypt Standard Time - (GMT+02:00) Cairo', 'South Africa Standard Time - (GMT+02:00) Harare, Pretoria' = 'South Africa Standard Time - (GMT+02:00) Harare, Pretoria', 'FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius' = 'FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius', 'Israel Standard Time - (GMT+02:00) Jerusalem' = 'Israel Standard Time - (GMT+02:00) Jerusalem', 'E. Europe Standard Time - (GMT+02:00) Minsk' = 'E. Europe Standard Time - (GMT+02:00) Minsk', 'Namibia Standard Time - (GMT+02:00) Windhoek' = 'Namibia Standard Time - (GMT+02:00) Windhoek', 'Arabic Standard Time - (GMT+03:00) Baghdad' = 'Arabic Standard Time - (GMT+03:00) Baghdad', 'Arab Standard Time - (GMT+03:00) Kuwait, Riyadh' = 'Arab Standard Time - (GMT+03:00) Kuwait, Riyadh', 'Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd' = 'Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd', 'E. Africa Standard Time - (GMT+03:00) Nairobi' = 'E. Africa Standard Time - (GMT+03:00) Nairobi', 'Georgian Standard Time - (GMT+03:00) Tbilisi' = 'Georgian Standard Time - (GMT+03:00) Tbilisi', 'Iran Standard Time - (GMT+03:30) Tehran' = 'Iran Standard Time - (GMT+03:30) Tehran', 'Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat' = 'Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat', 'Azerbaijan Standard Time - (GMT+04:00) Baku' = 'Azerbaijan Standard Time - (GMT+04:00) Baku', 'Mauritius Standard Time - (GMT+04:00) Port Louis' = 'Mauritius Standard Time - (GMT+04:00) Port Louis', 'Caucasus Standard Time - (GMT+04:00) Yerevan' = 'Caucasus Standard Time - (GMT+04:00) Yerevan', 'Afghanistan Standard Time - (GMT+04:30) Kabul' = 'Afghanistan Standard Time - (GMT+04:30) Kabul', 'Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg' = 'Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg', 'Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi' = 'Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi', 'West Asia Standard Time - (GMT+05:00) Tashkent' = 'West Asia Standard Time - (GMT+05:00) Tashkent', 'India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi' = 'India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi', 'Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura' = 'Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura', 'Nepal Standard Time - (GMT+05:45) Kathmandu' = 'Nepal Standard Time - (GMT+05:45) Kathmandu', 'N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk' = 'N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk', 'Central Asia Standard Time - (GMT+06:00) Astana, Dhaka' = 'Central Asia Standard Time - (GMT+06:00) Astana, Dhaka', 'Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)' = 'Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)', 'SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta' = 'SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta', 'North Asia Standard Time - (GMT+07:00) Krasnoyarsk' = 'North Asia Standard Time - (GMT+07:00) Krasnoyarsk', 'China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi' = 'China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi', 'North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar' = 'North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar', 'Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore' = 'Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore', 'W. Australia Standard Time - (GMT+08:00) Perth' = 'W. Australia Standard Time - (GMT+08:00) Perth', 'Taipei Standard Time - (GMT+08:00) Taipei' = 'Taipei Standard Time - (GMT+08:00) Taipei', 'Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo' = 'Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo', 'Korea Standard Time - (GMT+09:00) Seoul' = 'Korea Standard Time - (GMT+09:00) Seoul', 'Yakutsk Standard Time - (GMT+09:00) Yakutsk' = 'Yakutsk Standard Time - (GMT+09:00) Yakutsk', 'Cen. Australia Standard Time - (GMT+09:30) Adelaide' = 'Cen. Australia Standard Time - (GMT+09:30) Adelaide', 'AUS Central Standard Time - (GMT+09:30) Darwin' = 'AUS Central Standard Time - (GMT+09:30) Darwin', 'E. Australia Standard Time - (GMT+10:00) Brisbane' = 'E. Australia Standard Time - (GMT+10:00) Brisbane', 'AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney' = 'AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney', 'West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby' = 'West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby', 'Tasmania Standard Time - (GMT+10:00) Hobart' = 'Tasmania Standard Time - (GMT+10:00) Hobart', 'Vladivostok Standard Time - (GMT+10:00) Vladivostok' = 'Vladivostok Standard Time - (GMT+10:00) Vladivostok', 'Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia' = 'Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia', 'New Zealand Standard Time - (GMT+12:00) Auckland, Wellington' = 'New Zealand Standard Time - (GMT+12:00) Auckland, Wellington', 'Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.' = 'Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.', 'Tonga Standard Time - (GMT+13:00) Nuku\'alofa' = 'Tonga Standard Time - (GMT+13:00) Nuku\'alofa', 'Azores Standard Time - (GMT-01:00) Azores' = 'Azores Standard Time - (GMT-01:00) Azores', 'Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.' = 'Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.', 'Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic' = 'Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic', 'E. South America Standard Time - (GMT-03:00) Brasilia' = 'E. South America Standard Time - (GMT-03:00) Brasilia', 'Argentina Standard Time - (GMT-03:00) Buenos Aires' = 'Argentina Standard Time - (GMT-03:00) Buenos Aires', 'SA Eastern Standard Time - (GMT-03:00) Georgetown' = 'SA Eastern Standard Time - (GMT-03:00) Georgetown', 'Greenland Standard Time - (GMT-03:00) Greenland' = 'Greenland Standard Time - (GMT-03:00) Greenland', 'Montevideo Standard Time - (GMT-03:00) Montevideo' = 'Montevideo Standard Time - (GMT-03:00) Montevideo', 'Newfoundland Standard Time - (GMT-03:30) Newfoundland' = 'Newfoundland Standard Time - (GMT-03:30) Newfoundland', 'Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)' = 'Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)', 'SA Western Standard Time - (GMT-04:00) La Paz' = 'SA Western Standard Time - (GMT-04:00) La Paz', 'Central Brazilian Standard Time - (GMT-04:00) Manaus' = 'Central Brazilian Standard Time - (GMT-04:00) Manaus', 'Pacific SA Standard Time - (GMT-04:00) Santiago' = 'Pacific SA Standard Time - (GMT-04:00) Santiago', 'Venezuela Standard Time - (GMT-04:30) Caracas' = 'Venezuela Standard Time - (GMT-04:30) Caracas', 'SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco' = 'SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco', 'Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)' = 'Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)', 'US Eastern Standard Time - (GMT-05:00) Indiana (East)' = 'US Eastern Standard Time - (GMT-05:00) Indiana (East)', 'Central America Standard Time - (GMT-06:00) Central America' = 'Central America Standard Time - (GMT-06:00) Central America', 'Central Standard Time - (GMT-06:00) Central Time (US & Canada)' = 'Central Standard Time - (GMT-06:00) Central Time (US & Canada)', 'Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey' = 'Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey', 'Canada Central Standard Time - (GMT-06:00) Saskatchewan' = 'Canada Central Standard Time - (GMT-06:00) Saskatchewan', 'US Mountain Standard Time - (GMT-07:00) Arizona' = 'US Mountain Standard Time - (GMT-07:00) Arizona', 'Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan' = 'Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan', 'Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)' = 'Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)', 'Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)' = 'Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)', 'Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California' = 'Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California', 'Alaskan Standard Time - (GMT-09:00) Alaska' = 'Alaskan Standard Time - (GMT-09:00) Alaska', 'Hawaiian Standard Time - (GMT-10:00) Hawaii' = 'Hawaiian Standard Time - (GMT-10:00) Hawaii', 'Samoa Standard Time - (GMT-11:00) Midway Island, Samoa' = 'Samoa Standard Time - (GMT-11:00) Midway Island, Samoa', 'Dateline Standard Time - (GMT-12:00) International Date Line West' = 'Dateline Standard Time - (GMT-12:00) International Date Line West' }

	export interface InputDateTimeDifference {

		/**
		 * First date/time value
		 * Required
		 */
		dateTime1: string;

		/**
		 * Second date/time value
		 * Required
		 */
		dateTime2: string;
	}
	export interface InputDateTimeDifferenceFormProperties {

		/**
		 * First date/time value
		 * Required
		 */
		dateTime1: FormControl<string | null | undefined>,

		/**
		 * Second date/time value
		 * Required
		 */
		dateTime2: FormControl<string | null | undefined>,
	}
	export function CreateInputDateTimeDifferenceFormGroup() {
		return new FormGroup<InputDateTimeDifferenceFormProperties>({
			dateTime1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dateTime2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputDateTimeFormat {

		/**
		 * Language culture
		 * Required
		 */
		culture: InputDateTimeFormatCulture;

		/**
		 * Output format
		 * Required
		 */
		format: string;

		/**
		 * Source date and time
		 * Required
		 */
		input: string;
	}
	export interface InputDateTimeFormatFormProperties {

		/**
		 * Language culture
		 * Required
		 */
		culture: FormControl<InputDateTimeFormatCulture | null | undefined>,

		/**
		 * Output format
		 * Required
		 */
		format: FormControl<string | null | undefined>,

		/**
		 * Source date and time
		 * Required
		 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateInputDateTimeFormatFormGroup() {
		return new FormGroup<InputDateTimeFormatFormProperties>({
			culture: new FormControl<InputDateTimeFormatCulture | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputDateTimeFormatCulture { 'en-US' = 'en-US', 'af-ZA' = 'af-ZA', 'ar-AE' = 'ar-AE', 'ar-BH' = 'ar-BH', 'ar-DZ' = 'ar-DZ', 'ar-EG' = 'ar-EG', 'ar-IQ' = 'ar-IQ', 'ar-JO' = 'ar-JO', 'ar-KW' = 'ar-KW', 'ar-LB' = 'ar-LB', 'ar-LY' = 'ar-LY', 'ar-MA' = 'ar-MA', 'ar-OM' = 'ar-OM', 'ar-QA' = 'ar-QA', 'ar-SA' = 'ar-SA', 'ar-SY' = 'ar-SY', 'ar-TN' = 'ar-TN', 'ar-YE' = 'ar-YE', 'az-AZ' = 'az-AZ', 'be-BY' = 'be-BY', 'bg-BG' = 'bg-BG', 'bs-BA' = 'bs-BA', 'ca-ES' = 'ca-ES', 'cs-CZ' = 'cs-CZ', 'cy-GB' = 'cy-GB', 'da-DK' = 'da-DK', 'de-AT' = 'de-AT', 'de-CH' = 'de-CH', 'de-DE' = 'de-DE', 'de-LI' = 'de-LI', 'de-LU' = 'de-LU', 'el-GR' = 'el-GR', 'en-AU' = 'en-AU', 'en-BZ' = 'en-BZ', 'en-CA' = 'en-CA', 'en-CB' = 'en-CB', 'en-GB' = 'en-GB', 'en-IE' = 'en-IE', 'en-JM' = 'en-JM', 'en-NZ' = 'en-NZ', 'en-PH' = 'en-PH', 'en-TT' = 'en-TT', 'en-ZA' = 'en-ZA', 'en-ZW' = 'en-ZW', 'es-AR' = 'es-AR', 'es-BO' = 'es-BO', 'es-CL' = 'es-CL', 'es-CO' = 'es-CO', 'es-CR' = 'es-CR', 'es-DO' = 'es-DO', 'es-EC' = 'es-EC', 'es-ES' = 'es-ES', 'es-GT' = 'es-GT', 'es-HN' = 'es-HN', 'es-MX' = 'es-MX', 'es-NI' = 'es-NI', 'es-PA' = 'es-PA', 'es-PE' = 'es-PE', 'es-PR' = 'es-PR', 'es-PY' = 'es-PY', 'es-SV' = 'es-SV', 'es-UY' = 'es-UY', 'es-VE' = 'es-VE', 'et-EE' = 'et-EE', 'eu-ES' = 'eu-ES', 'fa-IR' = 'fa-IR', 'fi-FI' = 'fi-FI', 'fo-FO' = 'fo-FO', 'fr-BE' = 'fr-BE', 'fr-CA' = 'fr-CA', 'fr-CH' = 'fr-CH', 'fr-FR' = 'fr-FR', 'fr-LU' = 'fr-LU', 'fr-MC' = 'fr-MC', 'gl-ES' = 'gl-ES', 'gu-IN' = 'gu-IN', 'he-IL' = 'he-IL', 'hi-IN' = 'hi-IN', 'hr-BA' = 'hr-BA', 'hr-HR' = 'hr-HR', 'hu-HU' = 'hu-HU', 'hy-AM' = 'hy-AM', 'id-ID' = 'id-ID', 'is-IS' = 'is-IS', 'it-CH' = 'it-CH', 'it-IT' = 'it-IT', 'ja-JP' = 'ja-JP', 'ka-GE' = 'ka-GE', 'kk-KZ' = 'kk-KZ', 'kn-IN' = 'kn-IN', 'ko-KR' = 'ko-KR', 'ky-KG' = 'ky-KG', 'lt-LT' = 'lt-LT', 'lv-LV' = 'lv-LV', 'mi-NZ' = 'mi-NZ', 'mn-MN' = 'mn-MN', 'mr-IN' = 'mr-IN', 'ms-BN' = 'ms-BN', 'ms-MY' = 'ms-MY', 'mt-MT' = 'mt-MT', 'nl-BE' = 'nl-BE', 'nl-NL' = 'nl-NL', 'nn-NO' = 'nn-NO', 'ns-ZA' = 'ns-ZA', 'pa-IN' = 'pa-IN', 'pl-PL' = 'pl-PL', 'ps-AR' = 'ps-AR', 'pt-BR' = 'pt-BR', 'pt-PT' = 'pt-PT', 'ro-RO' = 'ro-RO', 'ru-RU' = 'ru-RU', 'sa-IN' = 'sa-IN', 'sk-SK' = 'sk-SK', 'sl-SI' = 'sl-SI', 'sq-AL' = 'sq-AL', 'sr-BA' = 'sr-BA', 'sr-SP' = 'sr-SP', 'sv-FI' = 'sv-FI', 'sv-SE' = 'sv-SE', 'sw-KE' = 'sw-KE', 'ta-IN' = 'ta-IN', 'te-IN' = 'te-IN', 'th-TH' = 'th-TH', 'tl-PH' = 'tl-PH', 'tn-ZA' = 'tn-ZA', 'tr-TR' = 'tr-TR', 'uk-UA' = 'uk-UA', 'ur-PK' = 'ur-PK', 'uz-UZ' = 'uz-UZ', 'vi-VN' = 'vi-VN', 'zh-CN' = 'zh-CN', 'zh-HK' = 'zh-HK', 'zh-MO' = 'zh-MO', 'zh-SG' = 'zh-SG', 'zh-TW' = 'zh-TW', 'zu-ZA' = 'zu-ZA' }

	export interface InputDateTimeInfo {

		/**
		 * Language culture
		 * Required
		 */
		culture: InputDateTimeFormatCulture;

		/**
		 * Source date and time
		 * Required
		 */
		input: string;
	}
	export interface InputDateTimeInfoFormProperties {

		/**
		 * Language culture
		 * Required
		 */
		culture: FormControl<InputDateTimeFormatCulture | null | undefined>,

		/**
		 * Source date and time
		 * Required
		 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateInputDateTimeInfoFormGroup() {
		return new FormGroup<InputDateTimeInfoFormProperties>({
			culture: new FormControl<InputDateTimeFormatCulture | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputGenerateHash {

		/**
		 * Hash algorithm
		 * Required
		 */
		algorithm: InputGenerateHashAlgorithm;

		/**
		 * Hash source string
		 * Required
		 */
		input: string;
	}
	export interface InputGenerateHashFormProperties {

		/**
		 * Hash algorithm
		 * Required
		 */
		algorithm: FormControl<InputGenerateHashAlgorithm | null | undefined>,

		/**
		 * Hash source string
		 * Required
		 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateInputGenerateHashFormGroup() {
		return new FormGroup<InputGenerateHashFormProperties>({
			algorithm: new FormControl<InputGenerateHashAlgorithm | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputGenerateHashAlgorithm { MD5 = 'MD5', SHA1 = 'SHA1', SHA256 = 'SHA256', SHA384 = 'SHA384', SHA512 = 'SHA512' }

	export interface InputGenerateUniqueID {

		/**
		 * All uppercase alpha characters
		 * Required
		 */
		uppercase: InputCollectionReplaceIgnoreCase;
	}
	export interface InputGenerateUniqueIDFormProperties {

		/**
		 * All uppercase alpha characters
		 * Required
		 */
		uppercase: FormControl<InputCollectionReplaceIgnoreCase | null | undefined>,
	}
	export function CreateInputGenerateUniqueIDFormGroup() {
		return new FormGroup<InputGenerateUniqueIDFormProperties>({
			uppercase: new FormControl<InputCollectionReplaceIgnoreCase | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputJoinStrings {

		/**
		 * Collection of strings to be joined
		 * Required
		 */
		input: Array<string>;

		/**
		 * Convert strings in collection to lowercase
		 * Required
		 */
		lower: InputCollectionReplaceIgnoreCase;

		/**
		 * Separator character
		 * Required
		 */
		separator: string;

		/**
		 * Trim strings in collection
		 * Required
		 */
		trim: InputCollectionReplaceIgnoreCase;
	}
	export interface InputJoinStringsFormProperties {

		/**
		 * Convert strings in collection to lowercase
		 * Required
		 */
		lower: FormControl<InputCollectionReplaceIgnoreCase | null | undefined>,

		/**
		 * Separator character
		 * Required
		 */
		separator: FormControl<string | null | undefined>,

		/**
		 * Trim strings in collection
		 * Required
		 */
		trim: FormControl<InputCollectionReplaceIgnoreCase | null | undefined>,
	}
	export function CreateInputJoinStringsFormGroup() {
		return new FormGroup<InputJoinStringsFormProperties>({
			lower: new FormControl<InputCollectionReplaceIgnoreCase | null | undefined>(undefined, [Validators.required]),
			separator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trim: new FormControl<InputCollectionReplaceIgnoreCase | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputJsonConversionCSV {

		/**
		 * Include header row
		 * Required
		 */
		header: boolean;

		/**
		 * JSON array object
		 * Required
		 */
		input: string;

		/** Columns to omit (comma separated) */
		omit?: string | null;

		/** Column order (comma separated) */
		order?: string | null;
	}
	export interface InputJsonConversionCSVFormProperties {

		/**
		 * Include header row
		 * Required
		 */
		header: FormControl<boolean | null | undefined>,

		/**
		 * JSON array object
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/** Columns to omit (comma separated) */
		omit: FormControl<string | null | undefined>,

		/** Column order (comma separated) */
		order: FormControl<string | null | undefined>,
	}
	export function CreateInputJsonConversionCSVFormGroup() {
		return new FormGroup<InputJsonConversionCSVFormProperties>({
			header: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			omit: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InputJsonConversionHTML {

		/** Alternate header row markup */
		alternate?: string | null;

		/** Optional table attributes (single quoted values) */
		attributes?: string | null;

		/**
		 * Include header row
		 * Required
		 */
		header: boolean;

		/**
		 * JSON array object
		 * Required
		 */
		input: string;

		/** Columns to omit (comma separated) */
		omit?: string | null;

		/** Column order (comma separated) */
		order?: string | null;
	}
	export interface InputJsonConversionHTMLFormProperties {

		/** Alternate header row markup */
		alternate: FormControl<string | null | undefined>,

		/** Optional table attributes (single quoted values) */
		attributes: FormControl<string | null | undefined>,

		/**
		 * Include header row
		 * Required
		 */
		header: FormControl<boolean | null | undefined>,

		/**
		 * JSON array object
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/** Columns to omit (comma separated) */
		omit: FormControl<string | null | undefined>,

		/** Column order (comma separated) */
		order: FormControl<string | null | undefined>,
	}
	export function CreateInputJsonConversionHTMLFormGroup() {
		return new FormGroup<InputJsonConversionHTMLFormProperties>({
			alternate: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			header: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			omit: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InputJsonConversionXML {

		/**
		 * JSON array object
		 * Required
		 */
		input: string;

		/**
		 * Name of root node
		 * Required
		 */
		root: string;
	}
	export interface InputJsonConversionXMLFormProperties {

		/**
		 * JSON array object
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/**
		 * Name of root node
		 * Required
		 */
		root: FormControl<string | null | undefined>,
	}
	export function CreateInputJsonConversionXMLFormGroup() {
		return new FormGroup<InputJsonConversionXMLFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			root: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputMarketIndex {

		/** Date (yyyy-MM-dd, leave empty for last trading day) */
		date?: string | null;

		/**
		 * Market index
		 * Required
		 */
		symbol: InputMarketIndexSymbol;
	}
	export interface InputMarketIndexFormProperties {

		/** Date (yyyy-MM-dd, leave empty for last trading day) */
		date: FormControl<string | null | undefined>,

		/**
		 * Market index
		 * Required
		 */
		symbol: FormControl<InputMarketIndexSymbol | null | undefined>,
	}
	export function CreateInputMarketIndexFormGroup() {
		return new FormGroup<InputMarketIndexFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<InputMarketIndexSymbol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputMarketIndexSymbol { 'DJA.INDX (Dow Jones Composite Average)' = 'DJA.INDX (Dow Jones Composite Average)', 'DJI.INDX (Dow Jones Industrial Average)' = 'DJI.INDX (Dow Jones Industrial Average)', 'DJT.INDX (Dow Jones Transportation)' = 'DJT.INDX (Dow Jones Transportation)', 'DJUS.INDX (Dow Jones US)' = 'DJUS.INDX (Dow Jones US)', 'DXY.INDX (US Dollar Index)' = 'DXY.INDX (US Dollar Index)', 'GDOW.INDX (Global Dow USD)' = 'GDOW.INDX (Global Dow USD)', 'NY.INDX (NYSE US 100 Index)' = 'NY.INDX (NYSE US 100 Index)', 'NYA.INDX (NYSE Composite)' = 'NYA.INDX (NYSE Composite)', 'IXIC.INDX (NASDAQ Composite)' = 'IXIC.INDX (NASDAQ Composite)', 'NDX.INDX (NASDAQ 100)' = 'NDX.INDX (NASDAQ 100)', 'GSPC.INDX (S&P 500)' = 'GSPC.INDX (S&P 500)', 'ES.INDX (S&P 500 Futures)' = 'ES.INDX (S&P 500 Futures)', 'MID.INDX (S&P Midcap 400)' = 'MID.INDX (S&P Midcap 400)', 'GPTSE.INDX (S&P TSX Composite Index [Canada])' = 'GPTSE.INDX (S&P TSX Composite Index [Canada])', 'FTSE.INDX (FTSE 100 Index [UK])' = 'FTSE.INDX (FTSE 100 Index [UK])', 'CDAXX.INDX (DAX Composite Index [Germany])' = 'CDAXX.INDX (DAX Composite Index [Germany])', 'GDAXI.INDX (DAX Index [Germany])' = 'GDAXI.INDX (DAX Index [Germany])', 'HSCE.INDX (Hang Seng China Enterprise (CEI))' = 'HSCE.INDX (Hang Seng China Enterprise (CEI))', 'HSI.INDX (Hang Seng Index [Hong Kong])' = 'HSI.INDX (Hang Seng Index [Hong Kong])', 'N100.INDX (EuroNext 100)' = 'N100.INDX (EuroNext 100)', 'N225.INDX (Nikkei 225 Index)' = 'N225.INDX (Nikkei 225 Index)', 'RTSI.INDX (RTSI Index [Russia])' = 'RTSI.INDX (RTSI Index [Russia])', 'SSEC.INDX (Shanghai Composite)' = 'SSEC.INDX (Shanghai Composite)', 'SSMI.INDX (Swiss Market Index)' = 'SSMI.INDX (Swiss Market Index)' }

	export interface InputNumberRange {

		/**
		 * End of range
		 * Required
		 * Minimum: 0
		 */
		end: number;

		/**
		 * Start of range
		 * Required
		 * Minimum: 0
		 */
		start: number;
	}
	export interface InputNumberRangeFormProperties {

		/**
		 * End of range
		 * Required
		 * Minimum: 0
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * Start of range
		 * Required
		 * Minimum: 0
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateInputNumberRangeFormGroup() {
		return new FormGroup<InputNumberRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			start: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface InputQRCode {

		/**
		 * Text value(s) (vertical bar delimited by type)
		 * Required
		 */
		input: string;

		/**
		 * Payload type
		 * Required
		 */
		payload: InputQRCodePayload;
	}
	export interface InputQRCodeFormProperties {

		/**
		 * Text value(s) (vertical bar delimited by type)
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/**
		 * Payload type
		 * Required
		 */
		payload: FormControl<InputQRCodePayload | null | undefined>,
	}
	export function CreateInputQRCodeFormGroup() {
		return new FormGroup<InputQRCodeFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payload: new FormControl<InputQRCodePayload | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputQRCodePayload { 'Plain Text (string)' = 'Plain Text (string)', 'Bitcoin Payment (address|amount|label|message)' = 'Bitcoin Payment (address|amount|label|message)', 'Bookmark (url|title)' = 'Bookmark (url|title)', 'Calendar Event (subject|description|location|start|end|allDayEvent[\'true\' or \'false\']|format [\'universal\' or \'iCal\'])' = 'Calendar Event (subject|description|location|start|end|allDayEvent[\'true\' or \'false\']|format [\'universal\' or \'iCal\'])', 'Geolocation (latitude|longitude)' = 'Geolocation (latitude|longitude)', 'Mail (recipient|subject|message)' = 'Mail (recipient|subject|message)', 'Phone Number (string)' = 'Phone Number (string)', 'SMS (number|message)' = 'SMS (number|message)', 'URL (string)' = 'URL (string)', 'WiFi (ssid|password|authenticationMode [\'WEP\', \'WPA\' or \'WPA2\'])' = 'WiFi (ssid|password|authenticationMode [\'WEP\', \'WPA\' or \'WPA2\'])' }

	export interface InputRedactString {

		/** Regular expression pattern for matching strings */
		regex?: string | null;

		/**
		 * String containing the complete text
		 * Required
		 */
		source: string;

		/** Individual string to redact */
		value?: string | null;

		/** Collection of strings to redact */
		values?: Array<string>;
	}
	export interface InputRedactStringFormProperties {

		/** Regular expression pattern for matching strings */
		regex: FormControl<string | null | undefined>,

		/**
		 * String containing the complete text
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/** Individual string to redact */
		value: FormControl<string | null | undefined>,
	}
	export function CreateInputRedactStringFormGroup() {
		return new FormGroup<InputRedactStringFormProperties>({
			regex: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InputReplaceString {

		/**
		 * Replacement text
		 * Required
		 */
		replacement: string;

		/**
		 * String containing the text to be replaced
		 * Required
		 */
		source: string;

		/**
		 * Text to replace
		 * Required
		 */
		value: string;
	}
	export interface InputReplaceStringFormProperties {

		/**
		 * Replacement text
		 * Required
		 */
		replacement: FormControl<string | null | undefined>,

		/**
		 * String containing the text to be replaced
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * Text to replace
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateInputReplaceStringFormGroup() {
		return new FormGroup<InputReplaceStringFormProperties>({
			replacement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputSplitString {

		/**
		 * One or more characters that will be used to split the text
		 * Required
		 */
		characters: string;

		/**
		 * Text to split
		 * Required
		 */
		input: string;
	}
	export interface InputSplitStringFormProperties {

		/**
		 * One or more characters that will be used to split the text
		 * Required
		 */
		characters: FormControl<string | null | undefined>,

		/**
		 * Text to split
		 * Required
		 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateInputSplitStringFormGroup() {
		return new FormGroup<InputSplitStringFormProperties>({
			characters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputStockPrices {

		/** Date (yyyy-MM-dd, leave empty for latest) */
		date?: string | null;

		/** Stock exchange */
		exchange?: InputStockPricesExchange | null;

		/**
		 * Stock ticker symbols (comma-separated, max 20)
		 * Required
		 */
		symbols: string;
	}
	export interface InputStockPricesFormProperties {

		/** Date (yyyy-MM-dd, leave empty for latest) */
		date: FormControl<string | null | undefined>,

		/** Stock exchange */
		exchange: FormControl<InputStockPricesExchange | null | undefined>,

		/**
		 * Stock ticker symbols (comma-separated, max 20)
		 * Required
		 */
		symbols: FormControl<string | null | undefined>,
	}
	export function CreateInputStockPricesFormGroup() {
		return new FormGroup<InputStockPricesFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			exchange: new FormControl<InputStockPricesExchange | null | undefined>(undefined),
			symbols: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputStockPricesExchange { 'XNYS (New York Stock Exchange)' = 'XNYS (New York Stock Exchange)', 'XNAS (NASDAQ Stock Exchange)' = 'XNAS (NASDAQ Stock Exchange)', 'XBRU (Euronext Brussels)' = 'XBRU (Euronext Brussels)', 'XTSE (Toronto Stock Exchange)' = 'XTSE (Toronto Stock Exchange)', 'XCNQ (Candadian Securities Exchange)' = 'XCNQ (Candadian Securities Exchange)', 'XSHG (Shanghai Stock Exchange)' = 'XSHG (Shanghai Stock Exchange)', 'XCSE (Copenhagen Stock Exchange)' = 'XCSE (Copenhagen Stock Exchange)', 'XPAR (Euronext Paris)' = 'XPAR (Euronext Paris)', 'XFRA (Deutsche Borse)' = 'XFRA (Deutsche Borse)', 'XHKG (Hong Kong Stock Exchange)' = 'XHKG (Hong Kong Stock Exchange)', 'XNSE (National Stock Exchange India)' = 'XNSE (National Stock Exchange India)', 'XTAE (Tel Aviv Stock Exchange)' = 'XTAE (Tel Aviv Stock Exchange)', 'XNGO (Nagoya Stock Exchange)' = 'XNGO (Nagoya Stock Exchange)', 'XFKA (Fukuoka Stock Exchange)' = 'XFKA (Fukuoka Stock Exchange)', 'XSAP (Sapporo Stock Exchange)' = 'XSAP (Sapporo Stock Exchange)', 'XMEX (Mexican Stock Exchange)' = 'XMEX (Mexican Stock Exchange)', 'XNZE (New Zealand Stock Exchange)' = 'XNZE (New Zealand Stock Exchange)', 'XLIS (Euronext Lisbon)' = 'XLIS (Euronext Lisbon)', 'MISX (Moscow Stock Exchange)' = 'MISX (Moscow Stock Exchange)', 'XSES (Singapore Stock Exchange)' = 'XSES (Singapore Stock Exchange)', 'XLON (London Stock Exchange)' = 'XLON (London Stock Exchange)', 'XASE (American Stock Exchange)' = 'XASE (American Stock Exchange)', 'XASX (Australia Stock Exchange)' = 'XASX (Australia Stock Exchange)', 'XDFM (Dubai Financial Market)' = 'XDFM (Dubai Financial Market)', 'XBKK (Stock Exchange of Thailand)' = 'XBKK (Stock Exchange of Thailand)', 'XSWX (SIX Swiss Exchange)' = 'XSWX (SIX Swiss Exchange)', 'XSTO (Stockholm Stock Exchange)' = 'XSTO (Stockholm Stock Exchange)', 'BMEX (Bolsas y Mercados Españoles)' = 'BMEX (Bolsas y Mercados Españoles)', 'XJSE (Johannesburg Stock Exchange)' = 'XJSE (Johannesburg Stock Exchange)' }

	export interface InputString {

		/**
		 * String variable or text value
		 * Required
		 */
		source: string;
	}
	export interface InputStringFormProperties {

		/**
		 * String variable or text value
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateInputStringFormGroup() {
		return new FormGroup<InputStringFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputStringComparison {

		/**
		 * Comparison string
		 * Required
		 */
		compare: string;

		/**
		 * Original string
		 * Required
		 */
		input: string;

		/**
		 * Convert strings to lowercase before comparison
		 * Required
		 */
		lower: InputCollectionReplaceIgnoreCase;

		/**
		 * Trim strings before comparison
		 * Required
		 */
		trim: InputCollectionReplaceIgnoreCase;
	}
	export interface InputStringComparisonFormProperties {

		/**
		 * Comparison string
		 * Required
		 */
		compare: FormControl<string | null | undefined>,

		/**
		 * Original string
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/**
		 * Convert strings to lowercase before comparison
		 * Required
		 */
		lower: FormControl<InputCollectionReplaceIgnoreCase | null | undefined>,

		/**
		 * Trim strings before comparison
		 * Required
		 */
		trim: FormControl<InputCollectionReplaceIgnoreCase | null | undefined>,
	}
	export function CreateInputStringComparisonFormGroup() {
		return new FormGroup<InputStringComparisonFormProperties>({
			compare: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lower: new FormControl<InputCollectionReplaceIgnoreCase | null | undefined>(undefined, [Validators.required]),
			trim: new FormControl<InputCollectionReplaceIgnoreCase | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputStringContains {

		/**
		 * Text to match
		 * Required
		 */
		find: string;

		/**
		 * Text to search
		 * Required
		 */
		input: string;

		/**
		 * Convert strings to lowercase
		 * Required
		 */
		lower: InputCollectionReplaceIgnoreCase;
	}
	export interface InputStringContainsFormProperties {

		/**
		 * Text to match
		 * Required
		 */
		find: FormControl<string | null | undefined>,

		/**
		 * Text to search
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/**
		 * Convert strings to lowercase
		 * Required
		 */
		lower: FormControl<InputCollectionReplaceIgnoreCase | null | undefined>,
	}
	export function CreateInputStringContainsFormGroup() {
		return new FormGroup<InputStringContainsFormProperties>({
			find: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lower: new FormControl<InputCollectionReplaceIgnoreCase | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputStringToFile {

		/**
		 * File extension
		 * Required
		 */
		extension: InputStringToFileExtension;

		/**
		 * Name of file (without extension)
		 * Required
		 */
		filename: string;

		/**
		 * Text string (body of file)
		 * Required
		 */
		input: string;
	}
	export interface InputStringToFileFormProperties {

		/**
		 * File extension
		 * Required
		 */
		extension: FormControl<InputStringToFileExtension | null | undefined>,

		/**
		 * Name of file (without extension)
		 * Required
		 */
		filename: FormControl<string | null | undefined>,

		/**
		 * Text string (body of file)
		 * Required
		 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateInputStringToFileFormGroup() {
		return new FormGroup<InputStringToFileFormProperties>({
			extension: new FormControl<InputStringToFileExtension | null | undefined>(undefined, [Validators.required]),
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputStringToFileExtension { TXT = 'TXT', CSV = 'CSV', HTML = 'HTML', XML = 'XML', CSS = 'CSS', JSON = 'JSON', JS = 'JS' }

	export interface InputTextToSpeech {

		/**
		 * Text to convert (10,000 characters max)
		 * Required
		 */
		text: string;

		/**
		 * Text or file type
		 * Required
		 */
		type: InputTextToSpeechType;

		/**
		 * Voice locale (must match language of input text)
		 * Required
		 */
		voice: InputTextToSpeechVoice;
	}
	export interface InputTextToSpeechFormProperties {

		/**
		 * Text to convert (10,000 characters max)
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * Text or file type
		 * Required
		 */
		type: FormControl<InputTextToSpeechType | null | undefined>,

		/**
		 * Voice locale (must match language of input text)
		 * Required
		 */
		voice: FormControl<InputTextToSpeechVoice | null | undefined>,
	}
	export function CreateInputTextToSpeechFormGroup() {
		return new FormGroup<InputTextToSpeechFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<InputTextToSpeechType | null | undefined>(undefined, [Validators.required]),
			voice: new FormControl<InputTextToSpeechVoice | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputTextToSpeechType { PlainText = 'PlainText', SSML = 'SSML' }

	export enum InputTextToSpeechVoice { 'ar-EG, Hoda (Female)' = 'ar-EG, Hoda (Female)', 'ar-SA, Naayf (Male)' = 'ar-SA, Naayf (Male)', 'bg-BG, Ivan (Male)' = 'bg-BG, Ivan (Male)', 'ca-ES, Herena (Female)' = 'ca-ES, Herena (Female)', 'cs-CZ, Jakub (Male)' = 'cs-CZ, Jakub (Male)', 'da-DK, Helle (Female)' = 'da-DK, Helle (Female)', 'de-AT, Michael (Male)' = 'de-AT, Michael (Male)', 'de-CH, Karsten (Male)' = 'de-CH, Karsten (Male)', 'de-DE, Hedda (Female)' = 'de-DE, Hedda (Female)', 'de-DE, Stefan (Male)' = 'de-DE, Stefan (Male)', 'el-GR, Stefanos (Male)' = 'el-GR, Stefanos (Male)', 'en-AU, Catherine (Female)' = 'en-AU, Catherine (Female)', 'en-AU, Hayley (Female)' = 'en-AU, Hayley (Female)', 'en-CA, Heather (Female)' = 'en-CA, Heather (Female)', 'en-CA, Linda (Female)' = 'en-CA, Linda (Female)', 'en-GB, George (Male)' = 'en-GB, George (Male)', 'en-GB, Hazel (Female)' = 'en-GB, Hazel (Female)', 'en-GB, Susan (Female)' = 'en-GB, Susan (Female)', 'en-IE, Sean (Male)' = 'en-IE, Sean (Male)', 'en-IN, Heera (Female)' = 'en-IN, Heera (Female)', 'en-IN, Priya (Female)' = 'en-IN, Priya (Female)', 'en-IN, Ravi (Male)' = 'en-IN, Ravi (Male)', 'en-US, Aria (Female)' = 'en-US, Aria (Female)', 'en-US, Benjamin (Male)' = 'en-US, Benjamin (Male)', 'en-US, Guy (Male)' = 'en-US, Guy (Male)', 'en-US, Zira (Female)' = 'en-US, Zira (Female)', 'es-ES, Helena (Female)' = 'es-ES, Helena (Female)', 'es-ES, Laura (Female)' = 'es-ES, Laura (Female)', 'es-ES, Pablo (Male)' = 'es-ES, Pablo (Male)', 'es-MX, Hilda (Female)' = 'es-MX, Hilda (Female)', 'es-MX, Raul (Male)' = 'es-MX, Raul (Male)', 'fi-FI, Heidi (Female)' = 'fi-FI, Heidi (Female)', 'fr-CA, Caroline (Female)' = 'fr-CA, Caroline (Female)', 'fr-CA, Harmonie (Female)' = 'fr-CA, Harmonie (Female)', 'fr-CH, Guillaume (Male)' = 'fr-CH, Guillaume (Male)', 'fr-FR, Hortense (Female)' = 'fr-FR, Hortense (Female)', 'fr-FR, Julie (Female)' = 'fr-FR, Julie (Female)', 'fr-FR, Paul (Male)' = 'fr-FR, Paul (Male)', 'he-IL, Asaf (Male)' = 'he-IL, Asaf (Male)', 'hi-IN, Hemant (Male)' = 'hi-IN, Hemant (Male)', 'hi-IN, Kalpana (Female)' = 'hi-IN, Kalpana (Female)', 'hr-HR, Matej (Male)' = 'hr-HR, Matej (Male)', 'hu-HU, Szabolcs (Male)' = 'hu-HU, Szabolcs (Male)', 'id-ID, Andika (Male)' = 'id-ID, Andika (Male)', 'it-IT, Cosimo (Male)' = 'it-IT, Cosimo (Male)', 'it-IT, Lucia (Female)' = 'it-IT, Lucia (Female)', 'ja-JP, Ayumi (Female)' = 'ja-JP, Ayumi (Female)', 'ja-JP, Haruka (Female)' = 'ja-JP, Haruka (Female)', 'ja-JP, Ichiro (Male)' = 'ja-JP, Ichiro (Male)', 'ko-KR, Heami (Female)' = 'ko-KR, Heami (Female)', 'ms-MY, Rizwan (Male)' = 'ms-MY, Rizwan (Male)', 'nb-NO, Hulda (Female)' = 'nb-NO, Hulda (Female)', 'nl-NL, Hanna (Female)' = 'nl-NL, Hanna (Female)', 'pl-PL, Paulina (Female)' = 'pl-PL, Paulina (Female)', 'pt-BR, Daniel (Male)' = 'pt-BR, Daniel (Male)', 'pt-BR, Heloisa (Female)' = 'pt-BR, Heloisa (Female)', 'pt-PT, Helia (Female)' = 'pt-PT, Helia (Female)', 'ro-RO, Andrei (Male)' = 'ro-RO, Andrei (Male)', 'ru-RU, Ekaterina (Female)' = 'ru-RU, Ekaterina (Female)', 'ru-RU, Irina (Female)' = 'ru-RU, Irina (Female)', 'ru-RU, Pavel (Male)' = 'ru-RU, Pavel (Male)', 'sk-SK, Filip (Male)' = 'sk-SK, Filip (Male)', 'sl-SI, Lado (Male)' = 'sl-SI, Lado (Male)', 'sv-SE, Hedvig (Female)' = 'sv-SE, Hedvig (Female)', 'ta-IN, Valluvar (Male)' = 'ta-IN, Valluvar (Male)', 'te-IN, Chitra (Female)' = 'te-IN, Chitra (Female)', 'th-TH, Pattara (Male)' = 'th-TH, Pattara (Male)', 'tr-TR, Seda (Female)' = 'tr-TR, Seda (Female)', 'vi-VN, An (Male)' = 'vi-VN, An (Male)', 'zh-CN, Huihui (Female)' = 'zh-CN, Huihui (Female)', 'zh-CN, Kangkang (Male)' = 'zh-CN, Kangkang (Male)', 'zh-CN, Yaoyao (Female)' = 'zh-CN, Yaoyao (Female)', 'zh-HK, Danny (Male)' = 'zh-HK, Danny (Male)', 'zh-HK, Tracy (Female)' = 'zh-HK, Tracy (Female)', 'zh-TW, HanHan (Female)' = 'zh-TW, HanHan (Female)', 'zh-TW, Yating (Female)' = 'zh-TW, Yating (Female)', 'zh-TW, Zhiwei (Male)' = 'zh-TW, Zhiwei (Male)' }

	export interface InputTranslateString {

		/**
		 * String containing the text to be translated
		 * Required
		 */
		input: string;

		/**
		 * Translation language
		 * Required
		 */
		language: InputTranslateStringLanguage;
	}
	export interface InputTranslateStringFormProperties {

		/**
		 * String containing the text to be translated
		 * Required
		 */
		input: FormControl<string | null | undefined>,

		/**
		 * Translation language
		 * Required
		 */
		language: FormControl<InputTranslateStringLanguage | null | undefined>,
	}
	export function CreateInputTranslateStringFormGroup() {
		return new FormGroup<InputTranslateStringFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<InputTranslateStringLanguage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputTranslateStringLanguage { Arabic = 'Arabic', 'Chinese (Simplified)' = 'Chinese (Simplified)', Czech = 'Czech', Danish = 'Danish', Dutch = 'Dutch', English = 'English', Finnish = 'Finnish', French = 'French', German = 'German', Greek = 'Greek', Hindi = 'Hindi', Hungarian = 'Hungarian', Italian = 'Italian', Japanese = 'Japanese', Klingon = 'Klingon', Korean = 'Korean', Norweigan = 'Norweigan', Polish = 'Polish', Portuguese = 'Portuguese', Russian = 'Russian', Spanish = 'Spanish', Swedish = 'Swedish', Turkish = 'Turkish', Vietnamese = 'Vietnamese', Welsh = 'Welsh' }

	export interface InputTrimString {

		/**
		 * String containing the text to be trimmed
		 * Required
		 */
		source: string;

		/**
		 * Type of white space to remove
		 * Required
		 */
		type: InputTrimStringType;
	}
	export interface InputTrimStringFormProperties {

		/**
		 * String containing the text to be trimmed
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * Type of white space to remove
		 * Required
		 */
		type: FormControl<InputTrimStringType | null | undefined>,
	}
	export function CreateInputTrimStringFormGroup() {
		return new FormGroup<InputTrimStringFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<InputTrimStringType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputTrimStringType { Start = 'Start', End = 'End', Both = 'Both' }

	export interface InputVerifyHash {

		/**
		 * Hash algorithm
		 * Required
		 */
		algorithm: InputGenerateHashAlgorithm;

		/**
		 * Hashed result
		 * Required
		 */
		hash: string;

		/**
		 * Original source string
		 * Required
		 */
		input: string;
	}
	export interface InputVerifyHashFormProperties {

		/**
		 * Hash algorithm
		 * Required
		 */
		algorithm: FormControl<InputGenerateHashAlgorithm | null | undefined>,

		/**
		 * Hashed result
		 * Required
		 */
		hash: FormControl<string | null | undefined>,

		/**
		 * Original source string
		 * Required
		 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateInputVerifyHashFormGroup() {
		return new FormGroup<InputVerifyHashFormProperties>({
			algorithm: new FormControl<InputGenerateHashAlgorithm | null | undefined>(undefined, [Validators.required]),
			hash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InputXmlConversionJSON {

		/**
		 * XML string
		 * Required
		 */
		input: string;
	}
	export interface InputXmlConversionJSONFormProperties {

		/**
		 * XML string
		 * Required
		 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateInputXmlConversionJSONFormGroup() {
		return new FormGroup<InputXmlConversionJSONFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OutputBoolean {

		/** Result */
		result?: boolean | null;
	}
	export interface OutputBooleanFormProperties {

		/** Result */
		result: FormControl<boolean | null | undefined>,
	}
	export function CreateOutputBooleanFormGroup() {
		return new FormGroup<OutputBooleanFormProperties>({
			result: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OutputCollectionNumber {

		/** First Value */
		item?: number | null;

		/** All Values */
		items?: Array<number>;

		/** Success */
		status?: boolean | null;
	}
	export interface OutputCollectionNumberFormProperties {

		/** First Value */
		item: FormControl<number | null | undefined>,

		/** Success */
		status: FormControl<boolean | null | undefined>,
	}
	export function CreateOutputCollectionNumberFormGroup() {
		return new FormGroup<OutputCollectionNumberFormProperties>({
			item: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OutputCollectionResult {

		/** Modified collection result */
		result?: Array<string>;
	}
	export interface OutputCollectionResultFormProperties {
	}
	export function CreateOutputCollectionResultFormGroup() {
		return new FormGroup<OutputCollectionResultFormProperties>({
		});

	}

	export interface OutputCollectionString {

		/** First Value */
		item?: string | null;

		/** All Values */
		items?: Array<string>;

		/** Success */
		status?: boolean | null;
	}
	export interface OutputCollectionStringFormProperties {

		/** First Value */
		item: FormControl<string | null | undefined>,

		/** Success */
		status: FormControl<boolean | null | undefined>,
	}
	export function CreateOutputCollectionStringFormGroup() {
		return new FormGroup<OutputCollectionStringFormProperties>({
			item: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OutputDateDifference {

		/** Days */
		days?: number | null;

		/** Hours */
		hours?: number | null;

		/** Milliseconds */
		milliseconds?: number | null;

		/** Minutes */
		minutes?: number | null;

		/** Months */
		months?: number | null;

		/** Ticks */
		ticks?: number | null;

		/** Total Days */
		totalDays?: number | null;

		/** Total Hours */
		totalHours?: number | null;

		/** Total Milliseconds */
		totalMilliseconds?: number | null;

		/** Total Minutes */
		totalMinutes?: number | null;

		/** Total Months */
		totalMonths?: number | null;

		/** Total Seconds */
		totalSeconds?: number | null;

		/** Total Years */
		totalYears?: number | null;

		/** Years */
		years?: number | null;
	}
	export interface OutputDateDifferenceFormProperties {

		/** Days */
		days: FormControl<number | null | undefined>,

		/** Hours */
		hours: FormControl<number | null | undefined>,

		/** Milliseconds */
		milliseconds: FormControl<number | null | undefined>,

		/** Minutes */
		minutes: FormControl<number | null | undefined>,

		/** Months */
		months: FormControl<number | null | undefined>,

		/** Ticks */
		ticks: FormControl<number | null | undefined>,

		/** Total Days */
		totalDays: FormControl<number | null | undefined>,

		/** Total Hours */
		totalHours: FormControl<number | null | undefined>,

		/** Total Milliseconds */
		totalMilliseconds: FormControl<number | null | undefined>,

		/** Total Minutes */
		totalMinutes: FormControl<number | null | undefined>,

		/** Total Months */
		totalMonths: FormControl<number | null | undefined>,

		/** Total Seconds */
		totalSeconds: FormControl<number | null | undefined>,

		/** Total Years */
		totalYears: FormControl<number | null | undefined>,

		/** Years */
		years: FormControl<number | null | undefined>,
	}
	export function CreateOutputDateDifferenceFormGroup() {
		return new FormGroup<OutputDateDifferenceFormProperties>({
			days: new FormControl<number | null | undefined>(undefined),
			hours: new FormControl<number | null | undefined>(undefined),
			milliseconds: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			months: new FormControl<number | null | undefined>(undefined),
			ticks: new FormControl<number | null | undefined>(undefined),
			totalDays: new FormControl<number | null | undefined>(undefined),
			totalHours: new FormControl<number | null | undefined>(undefined),
			totalMilliseconds: new FormControl<number | null | undefined>(undefined),
			totalMinutes: new FormControl<number | null | undefined>(undefined),
			totalMonths: new FormControl<number | null | undefined>(undefined),
			totalSeconds: new FormControl<number | null | undefined>(undefined),
			totalYears: new FormControl<number | null | undefined>(undefined),
			years: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OutputDateInfo {

		/** DayOfWeek */
		DayOfWeek?: number | null;

		/** DayOfYear */
		DayOfYear?: number | null;

		/** MinutesInDay */
		MinutesInDay?: number | null;

		/** SecondsInDay */
		SecondsInDay?: number | null;

		/** Ticks */
		Ticks?: number | null;

		/** WeekOfYear */
		WeekOfYear?: number | null;
	}
	export interface OutputDateInfoFormProperties {

		/** DayOfWeek */
		DayOfWeek: FormControl<number | null | undefined>,

		/** DayOfYear */
		DayOfYear: FormControl<number | null | undefined>,

		/** MinutesInDay */
		MinutesInDay: FormControl<number | null | undefined>,

		/** SecondsInDay */
		SecondsInDay: FormControl<number | null | undefined>,

		/** Ticks */
		Ticks: FormControl<number | null | undefined>,

		/** WeekOfYear */
		WeekOfYear: FormControl<number | null | undefined>,
	}
	export function CreateOutputDateInfoFormGroup() {
		return new FormGroup<OutputDateInfoFormProperties>({
			DayOfWeek: new FormControl<number | null | undefined>(undefined),
			DayOfYear: new FormControl<number | null | undefined>(undefined),
			MinutesInDay: new FormControl<number | null | undefined>(undefined),
			SecondsInDay: new FormControl<number | null | undefined>(undefined),
			Ticks: new FormControl<number | null | undefined>(undefined),
			WeekOfYear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OutputFileByte {

		/** Result */
		result?: string | null;
	}
	export interface OutputFileByteFormProperties {

		/** Result */
		result: FormControl<string | null | undefined>,
	}
	export function CreateOutputFileByteFormGroup() {
		return new FormGroup<OutputFileByteFormProperties>({
			result: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$')]),
		});

	}

	export interface OutputMarketIndex {

		/** Adjusted close value */
		adj_close?: number | null;

		/** Adjusted high value */
		adj_high?: number | null;

		/** Adjusted low value */
		adj_low?: number | null;

		/** Adjusted open value */
		adj_open?: number | null;

		/** Adjusted trading volume */
		adj_volume?: number | null;

		/** Close value */
		close?: number | null;

		/** Date */
		date?: string | null;

		/** Market exchange */
		exchange?: string | null;

		/** High value */
		high?: number | null;

		/** Low value */
		low?: number | null;

		/** Open value */
		open?: number | null;

		/** Index symbol */
		symbol?: string | null;

		/** Trading volume */
		volume?: number | null;
	}
	export interface OutputMarketIndexFormProperties {

		/** Adjusted close value */
		adj_close: FormControl<number | null | undefined>,

		/** Adjusted high value */
		adj_high: FormControl<number | null | undefined>,

		/** Adjusted low value */
		adj_low: FormControl<number | null | undefined>,

		/** Adjusted open value */
		adj_open: FormControl<number | null | undefined>,

		/** Adjusted trading volume */
		adj_volume: FormControl<number | null | undefined>,

		/** Close value */
		close: FormControl<number | null | undefined>,

		/** Date */
		date: FormControl<string | null | undefined>,

		/** Market exchange */
		exchange: FormControl<string | null | undefined>,

		/** High value */
		high: FormControl<number | null | undefined>,

		/** Low value */
		low: FormControl<number | null | undefined>,

		/** Open value */
		open: FormControl<number | null | undefined>,

		/** Index symbol */
		symbol: FormControl<string | null | undefined>,

		/** Trading volume */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateOutputMarketIndexFormGroup() {
		return new FormGroup<OutputMarketIndexFormProperties>({
			adj_close: new FormControl<number | null | undefined>(undefined),
			adj_high: new FormControl<number | null | undefined>(undefined),
			adj_low: new FormControl<number | null | undefined>(undefined),
			adj_open: new FormControl<number | null | undefined>(undefined),
			adj_volume: new FormControl<number | null | undefined>(undefined),
			close: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			exchange: new FormControl<string | null | undefined>(undefined),
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			open: new FormControl<number | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			volume: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OutputMultiCollection {

		/** First collection result */
		result1?: Array<string>;

		/** Second collection result */
		result2?: Array<string>;
	}
	export interface OutputMultiCollectionFormProperties {
	}
	export function CreateOutputMultiCollectionFormGroup() {
		return new FormGroup<OutputMultiCollectionFormProperties>({
		});

	}

	export interface OutputNumber {

		/** Result */
		result?: number | null;
	}
	export interface OutputNumberFormProperties {

		/** Result */
		result: FormControl<number | null | undefined>,
	}
	export function CreateOutputNumberFormGroup() {
		return new FormGroup<OutputNumberFormProperties>({
			result: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OutputStockPrice {

		/** Stock price information */
		OutputStockPriceResult?: Array<OutputStockPriceResult>;
	}
	export interface OutputStockPriceFormProperties {
	}
	export function CreateOutputStockPriceFormGroup() {
		return new FormGroup<OutputStockPriceFormProperties>({
		});

	}

	export interface OutputStockPriceResult {

		/** Close */
		close?: number | null;

		/** Date */
		date?: string | null;

		/** Stock exchange */
		exchange?: string | null;

		/** High */
		high?: number | null;

		/** Low */
		low?: number | null;

		/** Open */
		open?: number | null;

		/** Ticker symbol */
		symbol?: string | null;

		/** Volume */
		volume?: number | null;
	}
	export interface OutputStockPriceResultFormProperties {

		/** Close */
		close: FormControl<number | null | undefined>,

		/** Date */
		date: FormControl<string | null | undefined>,

		/** Stock exchange */
		exchange: FormControl<string | null | undefined>,

		/** High */
		high: FormControl<number | null | undefined>,

		/** Low */
		low: FormControl<number | null | undefined>,

		/** Open */
		open: FormControl<number | null | undefined>,

		/** Ticker symbol */
		symbol: FormControl<string | null | undefined>,

		/** Volume */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateOutputStockPriceResultFormGroup() {
		return new FormGroup<OutputStockPriceResultFormProperties>({
			close: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			exchange: new FormControl<string | null | undefined>(undefined),
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			open: new FormControl<number | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			volume: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OutputString {

		/** Result */
		result?: string | null;
	}
	export interface OutputStringFormProperties {

		/** Result */
		result: FormControl<string | null | undefined>,
	}
	export function CreateOutputStringFormGroup() {
		return new FormGroup<OutputStringFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OutputStringArray {

		/** data */
		data?: Array<string>;
	}
	export interface OutputStringArrayFormProperties {
	}
	export function CreateOutputStringArrayFormGroup() {
		return new FormGroup<OutputStringArrayFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Collections - Add to collection
		 * Add an item to a collection
		 * Post AddToCollection
		 * @param {InputCollectionModify} requestBody Collection modification parameters
		 * @return {OutputCollectionResult} OK
		 */
		AddToCollection(requestBody: InputCollectionModify): Observable<OutputCollectionResult> {
			return this.http.post<OutputCollectionResult>(this.baseUri + 'AddToCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Data - CSV to JSON
		 * Convert a CSV string to a JSON array
		 * Post CSVtoJSON
		 * @return {OutputString} OK
		 */
		CsvToJson(requestBody: InputCsvConversionJSON): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'CSVtoJSON', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Absolute
		 * Calculate the absolute value of a number
		 * Post CalculateAbsolute
		 * @param {InputCalculateNumber} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateAbsolute(requestBody: InputCalculateNumber): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateAbsolute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Addition
		 * Calculate the sum of two numbers
		 * Post CalculateAddition
		 * @param {InputCalculateNumbers} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateAddition(requestBody: InputCalculateNumbers): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateAddition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate average
		 * Calculate the average of two or more numbers
		 * Post CalculateAverage
		 * @param {InputCalculateSeries} requestBody Series calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateAverage(requestBody: InputCalculateSeries): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateAverage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Cosine
		 * Calculate the cosine value of an angle
		 * Post CalculateCosine
		 * @param {InputCalculateNumber} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateCosine(requestBody: InputCalculateNumber): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateCosine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Division
		 * Calculate the quotient of two numbers
		 * Post CalculateDivision
		 * @param {InputCalculateNumbers} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateDivision(requestBody: InputCalculateNumbers): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateDivision', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Logarithm
		 * Calculate the logarithm of a number
		 * Post CalculateLogarithm
		 * @param {InputCalculateNumber} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateLogarithm(requestBody: InputCalculateNumber): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateLogarithm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate median
		 * Calculate the median of two or more numbers
		 * Post CalculateMedian
		 * @param {InputCalculateSeries} requestBody Series calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateMedian(requestBody: InputCalculateSeries): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateMedian', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate minimum or maximum
		 * Calculate the minimum or maximum value in a sequence of numbers
		 * Post CalculateMinMax
		 * @param {InputCalculateMinMax} requestBody Series calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateMinMax(requestBody: InputCalculateMinMax): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateMinMax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Modulo
		 * Calculate the remainder of dividing two numbers
		 * Post CalculateModulo
		 * @param {InputCalculateNumbers} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateModulo(requestBody: InputCalculateNumbers): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateModulo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Multiplication
		 * Calculate the product of two numbers
		 * Post CalculateMultiplication
		 * @param {InputCalculateNumbers} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateMultiplication(requestBody: InputCalculateNumbers): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateMultiplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Nth Root
		 * Calculate the n-th root of a number
		 * Post CalculateNthRoot
		 * @param {InputCalculateNumbers} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateNthRoot(requestBody: InputCalculateNumbers): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateNthRoot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate power
		 * Raise number to a specified power
		 * Post CalculatePower
		 * @param {InputCalculatePower} requestBody Power calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculatePower(requestBody: InputCalculatePower): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculatePower', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Sine
		 * Calculate the sine value of an angle
		 * Post CalculateSine
		 * @param {InputCalculateNumber} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateSine(requestBody: InputCalculateNumber): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateSine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Square Root
		 * Calculate the square root of a number
		 * Post CalculateSquareRoot
		 * @param {InputCalculateNumber} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateSquareRoot(requestBody: InputCalculateNumber): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateSquareRoot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Subtraction
		 * Calculate the difference between two numbers
		 * Post CalculateSubtraction
		 * @param {InputCalculateNumbers} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateSubtraction(requestBody: InputCalculateNumbers): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateSubtraction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate sum
		 * Calculate the sum of two or more numbers
		 * Post CalculateSum
		 * @param {InputCalculateSeries} requestBody Series calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateSum(requestBody: InputCalculateSeries): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateSum', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate Tangent
		 * Calculate the tangent value of an angle
		 * Post CalculateTangent
		 * @param {InputCalculateNumber} requestBody Number calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateTangent(requestBody: InputCalculateNumber): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateTangent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate variance
		 * Calculate the statistical variance of two or more numbers
		 * Post CalculateVariance
		 * @param {InputCalculateSeries} requestBody Series calculation parameters
		 * @return {OutputNumber} OK
		 */
		CalculateVariance(requestBody: InputCalculateSeries): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CalculateVariance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Contains number
		 * Determine if a collection contains a specific number
		 * Post CollectionContainsNumber
		 * @param {InputCollectionSearchNumeric} requestBody Collection search parameters
		 * @return {OutputCollectionNumber} OK
		 */
		CollectionContainsNumber(requestBody: InputCollectionSearchNumeric): Observable<OutputCollectionNumber> {
			return this.http.post<OutputCollectionNumber>(this.baseUri + 'CollectionContainsNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Contains string
		 * Determine if any items in a collection contain a specific string
		 * Post CollectionContainsString
		 * @param {InputCollectionSearch} requestBody Collection search parameters
		 * @return {OutputCollectionString} OK
		 */
		CollectionContainsString(requestBody: InputCollectionSearch): Observable<OutputCollectionString> {
			return this.http.post<OutputCollectionString>(this.baseUri + 'CollectionContainsString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Ends with string
		 * Determine if any items in a collection end with a specific string
		 * Post CollectionEndsWithString
		 * @param {InputCollectionSearch} requestBody Collection search parameters
		 * @return {OutputCollectionString} OK
		 */
		CollectionEndsWithString(requestBody: InputCollectionSearch): Observable<OutputCollectionString> {
			return this.http.post<OutputCollectionString>(this.baseUri + 'CollectionEndsWithString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Starts with string
		 * Determine if any items in a collection start with a specific string
		 * Post CollectionStartsWithString
		 * @param {InputCollectionSearch} requestBody Collection search parameters
		 * @return {OutputCollectionString} OK
		 */
		CollectionStartsWithString(requestBody: InputCollectionSearch): Observable<OutputCollectionString> {
			return this.http.post<OutputCollectionString>(this.baseUri + 'CollectionStartsWithString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Collection to JSON
		 * Convert a collection to a named JSON object
		 * Post CollectionToJSON
		 * @return {OutputString} OK
		 */
		CollectionToJSON(requestBody: InputCollectionConversion): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'CollectionToJSON', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Collection to XML
		 * Convert a collection to an XML string
		 * Post CollectionToXML
		 * @return {OutputString} OK
		 */
		CollectionToXml(requestBody: InputCollectionConversionXML): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'CollectionToXML', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Compare strings
		 * Perform a comparison of two strings
		 * Post CompareStrings
		 * @return {OutputString} OK
		 */
		CompareStrings(requestBody: InputStringComparison): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'CompareStrings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Contains string
		 * Determine if a string contains another string
		 * Post ContainsString
		 * @return {OutputString} OK
		 */
		ContainsString(requestBody: InputStringContains): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'ContainsString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert angle
		 * Convert value from one angle measurement to another
		 * Post ConvertAngle
		 * @return {OutputNumber} OK
		 */
		ConvertAngle(requestBody: InputConvertAngle): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertAngle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert area
		 * Convert value from one area measurement to another
		 * Post ConvertArea
		 * @return {OutputNumber} OK
		 */
		ConvertArea(requestBody: InputConvertArea): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertArea', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Convert case
		 * Convert string to upper, lower or title case
		 * Post ConvertCase
		 * @return {OutputString} OK
		 */
		ConvertCase(requestBody: InputCaseConversion): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'ConvertCase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Currency - Convert currency
		 * Calculate monetary value in a different currency
		 * Post ConvertCurrency
		 * @return {OutputNumber} OK
		 */
		ConvertCurrency(requestBody: InputCurrencyConversion): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertCurrency', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert distance
		 * Convert value from one distance measurement to another
		 * Post ConvertDistance
		 * @return {OutputNumber} OK
		 */
		ConvertDistance(requestBody: InputConvertDistance): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertDistance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert duration
		 * Convert value from one duration measurement to another
		 * Post ConvertDuration
		 * @return {OutputNumber} OK
		 */
		ConvertDuration(requestBody: InputConvertDuration): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertDuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert energy
		 * Convert value from one energy measurement to another
		 * Post ConvertEnergy
		 * @return {OutputNumber} OK
		 */
		ConvertEnergy(requestBody: InputConvertEnergy): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertEnergy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert power
		 * Convert value from one power measurement to another
		 * Post ConvertPower
		 * @return {OutputNumber} OK
		 */
		ConvertPower(requestBody: InputConvertPower): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertPower', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert speed
		 * Convert value from one speed measurement to another
		 * Post ConvertSpeed
		 * @return {OutputNumber} OK
		 */
		ConvertSpeed(requestBody: InputConvertSpeed): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertSpeed', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert temperature
		 * Convert value from one temperature measurement to another
		 * Post ConvertTemperature
		 * @return {OutputNumber} OK
		 */
		ConvertTemperature(requestBody: InputConvertTemperature): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertTemperature', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert volume
		 * Convert value from one volume measurement to another
		 * Post ConvertVolume
		 * @return {OutputNumber} OK
		 */
		ConvertVolume(requestBody: InputConvertVolume): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertVolume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Convert weight
		 * Convert value from one weight measurement to another
		 * Post ConvertWeight
		 * @return {OutputNumber} OK
		 */
		ConvertWeight(requestBody: InputConvertWeight): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'ConvertWeight', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Count collection
		 * Count a collection of items
		 * Post CountCollection
		 * @param {InputCollectionCount} requestBody Count collection parameters
		 * @return {OutputNumber} OK
		 */
		CountCollection(requestBody: InputCollectionCount): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'CountCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DateTime - DateTime difference
		 * Calculate the difference between two dates
		 * Post DateTimeDifference
		 * @return {OutputDateDifference} OK
		 */
		DateTimeDifference(requestBody: InputDateTimeDifference): Observable<OutputDateDifference> {
			return this.http.post<OutputDateDifference>(this.baseUri + 'DateTimeDifference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DateTime - Get date and time information
		 * Retrieve useful date and time information, such as day of year, total seconds and ticks
		 * Post DateTimeInfo
		 * @return {OutputDateInfo} OK
		 */
		DateTimeInfo(requestBody: InputDateTimeInfo): Observable<OutputDateInfo> {
			return this.http.post<OutputDateInfo>(this.baseUri + 'DateTimeInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Decode string
		 * Decode a string encoded with Base64 encoding
		 * Post DecodeString
		 * @return {OutputString} OK
		 */
		DecodeString(requestBody: DecodeStringPostBody): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'DecodeString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Encode string
		 * Encode a string using Base64 encoding
		 * Post EncodeString
		 * @return {OutputString} OK
		 */
		EncodeString(requestBody: InputString): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'EncodeString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Filter collection
		 * Filter a collection of strings by keyword
		 * Post FilterCollection
		 * @param {InputCollectionFilter} requestBody Filter collection parameters
		 * @return {OutputCollectionResult} OK
		 */
		FilterCollection(requestBody: InputCollectionFilter): Observable<OutputCollectionResult> {
			return this.http.post<OutputCollectionResult>(this.baseUri + 'FilterCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Currency - Format currency
		 * Apply currency symbol to a numeric value
		 * Post FormatCurrency
		 * @return {OutputString} OK
		 */
		FormatCurrency(requestBody: InputCurrencyFormat): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'FormatCurrency', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DateTime - Format date and time
		 * Create a date/time string in a specific format
		 * Post FormatDateTime
		 * @return {OutputString} OK
		 */
		FormatDateTime(requestBody: InputDateTimeFormat): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'FormatDateTime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Generate GUID
		 * Generate a globally unique identifier
		 * Post GenerateGuid
		 * @return {OutputString} OK
		 */
		GenerateGuid(requestBody: InputGenerateUniqueID): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'GenerateGuid', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Generate hash
		 * Generate a hash value from a string
		 * Post GenerateHash
		 * @return {OutputString} OK
		 */
		GenerateHash(requestBody: InputGenerateHash): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'GenerateHash', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Files - Generate QR code
		 * Generate a QR code image
		 * Post GenerateQRCode
		 * @return {void} OK
		 */
		GenerateQRCode(requestBody: InputQRCode): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'GenerateQRCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Data - JSON to CSV
		 * Convert a JSON array to CSV string
		 * Post JSONtoCSV
		 * @return {OutputString} OK
		 */
		JsonToCsv(requestBody: InputJsonConversionCSV): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'JSONtoCSV', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Data - JSON to HTML Table
		 * Convert a JSON array to an HTML table
		 * Post JSONtoHTML
		 * @return {OutputString} OK
		 */
		JsonToHtml(requestBody: InputJsonConversionHTML): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'JSONtoHTML', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Data - JSON to XML
		 * Convert a JSON object to an XML string
		 * Post JSONtoXML
		 * @return {OutputString} OK
		 */
		JsonToXml(requestBody: InputJsonConversionXML): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'JSONtoXML', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Join strings
		 * Join a collection of strings
		 * Post JoinStrings
		 * @return {OutputString} OK
		 */
		JoinStrings(requestBody: InputJoinStrings): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'JoinStrings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finance - Market index
		 * Get current and historical market index information
		 * Post MarketIndex
		 * @return {OutputMarketIndex} OK
		 */
		MarketIndex(requestBody: InputMarketIndex): Observable<OutputMarketIndex> {
			return this.http.post<OutputMarketIndex>(this.baseUri + 'MarketIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Data - Query JSON
		 * Query a JSON object using a JSONPath expression
		 * Post QueryJSON
		 * @return {OutputString} OK
		 */
		QueryJson(requestBody: InputDataQuery): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'QueryJSON', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Data - Query XML
		 * Query an XML string using an XPath expression
		 * Post QueryXML
		 * @return {OutputString} OK
		 */
		QueryXml(requestBody: InputDataQuery): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'QueryXML', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Random number
		 * Generate a random number within a specified range
		 * Post RandomNumber
		 * @return {OutputNumber} OK
		 */
		RandomNumber(requestBody: InputNumberRange): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'RandomNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Redact string
		 * Redact a strng containing sensitive content
		 * Post RedactString
		 * @return {OutputString} OK
		 */
		RedactString(requestBody: InputRedactString): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'RedactString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Remove from collection
		 * Remove an item from a collection
		 * Post RemoveFromCollection
		 * @param {InputCollectionModify} requestBody Collection modification parameters
		 * @return {OutputCollectionResult} OK
		 */
		RemoveFromCollection(requestBody: InputCollectionModify): Observable<OutputCollectionResult> {
			return this.http.post<OutputCollectionResult>(this.baseUri + 'RemoveFromCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Replace string
		 * Replace one value with another in a string
		 * Post ReplaceString
		 * @return {OutputString} OK
		 */
		ReplaceString(requestBody: InputReplaceString): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'ReplaceString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Replace values in collection
		 * Replace whole or partial strings in a collection
		 * Post ReplaceValuesInCollection
		 * @param {InputCollectionReplace} requestBody Replace values in collection parameters
		 * @return {OutputCollectionResult} OK
		 */
		ReplaceValuesInCollection(requestBody: InputCollectionReplace): Observable<OutputCollectionResult> {
			return this.http.post<OutputCollectionResult>(this.baseUri + 'ReplaceValuesInCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Round number
		 * Round a numeric value up or down
		 * Post RoundNumber
		 * @param {InputCalculateNumber} requestBody Numeric calculation parameters
		 * @return {OutputNumber} OK
		 */
		RoundNumber(requestBody: InputCalculateNumber): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'RoundNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Shorten hyperlink
		 * Generate a simple, short URL from a complex URL
		 * Post ShortenLink
		 * @return {OutputString} OK
		 */
		ShortenLink(requestBody: ShortenLinkPostBody): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'ShortenLink', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Sort collection
		 * Sort a collection of strings
		 * Post SortCollection
		 * @param {InputCollectionSort} requestBody Sort collection parameters
		 * @return {OutputCollectionResult} OK
		 */
		SortCollection(requestBody: InputCollectionSort): Observable<OutputCollectionResult> {
			return this.http.post<OutputCollectionResult>(this.baseUri + 'SortCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collections - Split collection
		 * Split a collection of items by matching value or index
		 * Post SplitCollection
		 * @param {InputCollectionSplit} requestBody Split collection parameters
		 * @return {OutputMultiCollection} OK
		 */
		SplitCollection(requestBody: InputCollectionSplit): Observable<OutputMultiCollection> {
			return this.http.post<OutputMultiCollection>(this.baseUri + 'SplitCollection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Split string
		 * Split a string based upon one or more characters
		 * Post SplitString
		 * @return {OutputStringArray} OK
		 */
		SplitString(requestBody: InputSplitString): Observable<OutputStringArray> {
			return this.http.post<OutputStringArray>(this.baseUri + 'SplitString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Math - Calculate standard deviation
		 * Calculate the standard deviation of two or more numbers
		 * Post StandardDeviation
		 * @param {InputCalculateSeries} requestBody Series calculation parameters
		 * @return {OutputNumber} OK
		 */
		StandardDeviation(requestBody: InputCalculateSeries): Observable<OutputNumber> {
			return this.http.post<OutputNumber>(this.baseUri + 'StandardDeviation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finance - Stock prices
		 * Get current and historical stock price information
		 * Post StockPrices
		 * @return {OutputStockPrice} OK
		 */
		StockPrices(requestBody: InputStockPrices): Observable<OutputStockPrice> {
			return this.http.post<OutputStockPrice>(this.baseUri + 'StockPrices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - String to File
		 * Convert text string to file
		 * Post StringToFile
		 * @return {string} OK
		 */
		StringToFile(requestBody: InputStringToFile): Observable<string> {
			return this.http.post(this.baseUri + 'StringToFile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Text - Text to Speech
		 * Convert text to an audio file using AI-driven speech synthesis.
		 * Post TextToSpeech
		 * @return {void} OK
		 */
		TextToSpeech(requestBody: InputTextToSpeech): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'TextToSpeech', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Text - Translate string
		 * Translate a string into a different language
		 * Post TranslateString
		 * @return {OutputString} OK
		 */
		TranslateString(requestBody: InputTranslateString): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'TranslateString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Trim string
		 * Trim leading or trailing whitespace from a string
		 * Post TrimString
		 * @return {OutputString} OK
		 */
		TrimString(requestBody: InputTrimString): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'TrimString', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Decode URL
		 * Decode an encoded URL
		 * Post URLDecode
		 * @return {OutputString} OK
		 */
		UrlDecode(requestBody: UrlDecodePostBody): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'URLDecode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Encode URL
		 * Generate an encoded string from a complex hyperlink
		 * Post URLEncode
		 * @return {OutputString} OK
		 */
		UrlEncode(requestBody: InputString): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'URLEncode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Validate email
		 * Determine if an email address is valid
		 * Post ValidateEmail
		 * @return {OutputString} OK
		 */
		ValidateEmail(requestBody: ValidateEmailPostBody): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'ValidateEmail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Text - Verify hash
		 * Verify a hashed value against the original source string
		 * Post VerifyHash
		 * @return {OutputBoolean} OK
		 */
		VerifyHash(requestBody: InputVerifyHash): Observable<OutputBoolean> {
			return this.http.post<OutputBoolean>(this.baseUri + 'VerifyHash', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DateTime - Get world time
		 * Convert date and time from one time zone to another
		 * Post WorldTime
		 * @return {OutputString} OK
		 */
		WorldTime(requestBody: InputDateTimeConversion): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'WorldTime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Data - XML to JSON
		 * Convert an XML string to a JSON object
		 * Post XMLtoJSON
		 * @return {OutputString} OK
		 */
		XmlToJson(requestBody: InputXmlConversionJSON): Observable<OutputString> {
			return this.http.post<OutputString>(this.baseUri + 'XMLtoJSON', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface DecodeStringPostBody {

		/**
		 * Encoded string variable or text value
		 * Required
		 */
		source: string;
	}
	export interface DecodeStringPostBodyFormProperties {

		/**
		 * Encoded string variable or text value
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateDecodeStringPostBodyFormGroup() {
		return new FormGroup<DecodeStringPostBodyFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShortenLinkPostBody {

		/**
		 * String variable or text value
		 * Required
		 */
		source: string;
	}
	export interface ShortenLinkPostBodyFormProperties {

		/**
		 * String variable or text value
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateShortenLinkPostBodyFormGroup() {
		return new FormGroup<ShortenLinkPostBodyFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UrlDecodePostBody {

		/**
		 * Encoded string variable or text value
		 * Required
		 */
		source: string;
	}
	export interface UrlDecodePostBodyFormProperties {

		/**
		 * Encoded string variable or text value
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateUrlDecodePostBodyFormGroup() {
		return new FormGroup<UrlDecodePostBodyFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateEmailPostBody {

		/**
		 * String variable or text value
		 * Required
		 */
		source: string;
	}
	export interface ValidateEmailPostBodyFormProperties {

		/**
		 * String variable or text value
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateValidateEmailPostBodyFormGroup() {
		return new FormGroup<ValidateEmailPostBodyFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

