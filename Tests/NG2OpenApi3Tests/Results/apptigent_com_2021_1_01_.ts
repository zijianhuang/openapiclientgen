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

	export enum InputCalculateMinMaxType { Minimum = 0, Maximum = 1 }

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

	export enum InputCaseConversionAlphacase { Upper = 0, Lower = 1, Title = 2 }

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

	export enum InputCollectionFilterMatch { Any = 0, All = 1, None = 2 }

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

	export enum InputCollectionReplaceIgnoreCase { true = 0, false = 1 }

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

	export enum InputCollectionSearchNumericType { Integer = 0, Decimal = 1 }

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

	export enum InputCollectionSortOrder { Ascending = 0, Descending = 1 }

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

	export enum InputConvertAngleSource { Arcminute = 0, Arcsecond = 1, Centiradian = 2, Deciradian = 3, Degree = 4, Gradian = 5, Microdegree = 6, Microradian = 7, Millidegree = 8, Milliradian = 9, Nanodegree = 10, Nanoradian = 11, Radian = 12, Revolution = 13 }

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

	export enum InputConvertAreaSource { Acre = 0, Hectare = 1, SquareCentimeter = 2, SquareDecimeter = 3, SquareFoot = 4, SquareInch = 5, SquareKilometer = 6, SquareMeter = 7, SquareMicrometer = 8, SquareMile = 9, SquareMillimeter = 10, SquareYard = 11 }

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

	export enum InputConvertDistanceSource { Centimeter = 0, Decimeter = 1, Fathom = 2, Foot = 3, Hectometer = 4, Inch = 5, Kilometer = 6, LightYear = 7, Meter = 8, Micrometer = 9, Mile = 10, Millimeter = 11, Nanometer = 12, NauticalMile = 13, Yard = 14 }

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

	export enum InputConvertDurationSource { Day = 0, Hour = 1, Microsecond = 2, Millisecond = 3, Minute = 4, Month = 5, Nanosecond = 6, Second = 7, Week = 8, Year = 9 }

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

	export enum InputConvertEnergySource { BritishThermalUnit = 0, Calorie = 1, ElectronVolt = 2, FootPound = 3, GigawattHour = 4, Joule = 5, Kilocalorie = 6, Kilojoule = 7, KilowattHour = 8, Megajoule = 9, MegawattHour = 10, TerawattHour = 11, 'Therm (EU)' = 12, 'Therm (UK)' = 13, 'Therm (US)' = 14, WattHour = 15 }

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

	export enum InputConvertPowerSource { BritishThermalUnitPerHour = 0, Decawatt = 1, Deciwatt = 2, ElectricalHorsepower = 3, Femtowatt = 4, Gigawatt = 5, HydraulicHorsepower = 6, Kilowatt = 7, MechanicalHorsepower = 8, Megawatt = 9, Microwatt = 10, Milliwatt = 11, Nanowatt = 12, Petawatt = 13, Picowatt = 14, Terawatt = 15, Watt = 16 }

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

	export enum InputConvertSpeedSource { CentimeterPerHour = 0, CentimeterPerMinute = 1, CentimeterPerSecond = 2, DecimeterPerMinute = 3, DecimeterPerSecond = 4, FootPerHour = 5, FootPerMinute = 6, FootPerSecond = 7, InchPerHour = 8, InchPerMinute = 9, InchPerSecond = 10, KilometerPerHour = 11, KilometerPerMinute = 12, KilometerPerSecond = 13, Knot = 14, MeterPerHour = 15, MeterPerMinute = 16, MeterPerSecond = 17, MicrometerPerMinute = 18, MicrometerPerSecond = 19, MilePerHour = 20, MillimeterPerHour = 21, MillimeterPerMinute = 22, MillimeterPerSecond = 23, NanometerPerMinute = 24, NanometerPerSecond = 25, YardPerHour = 26, YardPerMinute = 27, YardPerSecond = 28 }

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

	export enum InputConvertTemperatureSource { Celsius = 0, Fahrenheit = 1, Newton = 2, Kelvin = 3 }

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

	export enum InputConvertVolumeSource { Centiliter = 0, CubicCentimeter = 1, CubicDecimeter = 2, CubicFoot = 3, CubicHectometer = 4, CubicInch = 5, CubicKilometer = 6, CubicMeter = 7, CubicMillimeter = 8, CubicYard = 9, Deciliter = 10, ImperialBeerBarrel = 11, ImperialGallon = 12, ImperialOunce = 13, ImperialPint = 14, Kiloliter = 15, Liter = 16, Microliter = 17, Milliliter = 18, Gallon = 19, Cup = 20, Ounce = 21, Pint = 22, Quart = 23, Tablespoon = 24, Teaspoon = 25 }

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

	export enum InputConvertWeightSource { Centigram = 0, Decagram = 1, Decigram = 2, Grain = 3, Gram = 4, Hectogram = 5, Kilogram = 6, Microgram = 7, Milligram = 8, Nanogram = 9, Ounce = 10, Pound = 11, Stone = 12, 'Solar Mass' = 13, 'Earth Mass' = 14, Slug = 15, 'Short Ton' = 16, 'Long Ton' = 17, Ton = 18, Megaton = 19, 'Short Hundredweight' = 20, 'Long Hundredweight' = 21 }

	export enum InputConvertWeightTarget { Centigram = 0, Decagram = 1, Decigram = 2, Grain = 3, Gram = 4, Hectogram = 5, Kilogram = 6, Microgram = 7, Milligram = 8, Nanogram = 9, Ounce = 10, Pound = 11, Stone = 12, Ton = 13 }

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

	export enum InputCurrencyConversionSource { USD = 0, AUD = 1, BGN = 2, BRL = 3, CAD = 4, CHF = 5, CNY = 6, CZK = 7, DKK = 8, EUR = 9, GBP = 10, HKD = 11, HRK = 12, HUF = 13, IDR = 14, ILS = 15, INR = 16, ISK = 17, JPY = 18, KRW = 19, MXN = 20, MYR = 21, NOK = 22, NZD = 23, PHP = 24, PLN = 25, RON = 26, RUB = 27, SGD = 28, SEK = 29, THB = 30, TRY = 31, ZAR = 32 }

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

	export enum InputDateTimeConversionSource { 'GMT Standard Time - (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London' = 0, 'Greenwich Standard Time - (GMT) Monrovia, Reykjavik' = 1, 'W. Europe Standard Time - (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna' = 2, 'Central Europe Standard Time - (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague' = 3, 'Central European Standard Time - (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb' = 4, 'W. Central Africa Standard Time - (GMT+01:00) West Central Africa' = 5, 'GTB Standard Time - (GMT+02:00) Athens, Bucharest, Istanbul' = 6, 'Middle East Standard Time - (GMT+02:00) Beirut' = 7, 'Egypt Standard Time - (GMT+02:00) Cairo' = 8, 'South Africa Standard Time - (GMT+02:00) Harare, Pretoria' = 9, 'FLE Standard Time - (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius' = 10, 'Israel Standard Time - (GMT+02:00) Jerusalem' = 11, 'E. Europe Standard Time - (GMT+02:00) Minsk' = 12, 'Namibia Standard Time - (GMT+02:00) Windhoek' = 13, 'Arabic Standard Time - (GMT+03:00) Baghdad' = 14, 'Arab Standard Time - (GMT+03:00) Kuwait, Riyadh' = 15, 'Russian Standard Time - (GMT+03:00) Moscow, St. Petersburg, Volgograd' = 16, 'E. Africa Standard Time - (GMT+03:00) Nairobi' = 17, 'Georgian Standard Time - (GMT+03:00) Tbilisi' = 18, 'Iran Standard Time - (GMT+03:30) Tehran' = 19, 'Arabian Standard Time - (GMT+04:00) Abu Dhabi, Muscat' = 20, 'Azerbaijan Standard Time - (GMT+04:00) Baku' = 21, 'Mauritius Standard Time - (GMT+04:00) Port Louis' = 22, 'Caucasus Standard Time - (GMT+04:00) Yerevan' = 23, 'Afghanistan Standard Time - (GMT+04:30) Kabul' = 24, 'Ekaterinburg Standard Time - (GMT+05:00) Ekaterinburg' = 25, 'Pakistan Standard Time - (GMT+05:00) Islamabad, Karachi' = 26, 'West Asia Standard Time - (GMT+05:00) Tashkent' = 27, 'India Standard Time - (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi' = 28, 'Sri Lanka Standard Time - (GMT+05:30) Sri Jayawardenepura' = 29, 'Nepal Standard Time - (GMT+05:45) Kathmandu' = 30, 'N. Central Asia Standard Time - (GMT+06:00) Almaty, Novosibirsk' = 31, 'Central Asia Standard Time - (GMT+06:00) Astana, Dhaka' = 32, 'Myanmar Standard Time - (GMT+06:30) Yangon (Rangoon)' = 33, 'SE Asia Standard Time - (GMT+07:00) Bangkok, Hanoi, Jakarta' = 34, 'North Asia Standard Time - (GMT+07:00) Krasnoyarsk' = 35, 'China Standard Time - (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi' = 36, 'North Asia East Standard Time - (GMT+08:00) Irkutsk, Ulaan Bataar' = 37, 'Singapore Standard Time - (GMT+08:00) Kuala Lumpur, Singapore' = 38, 'W. Australia Standard Time - (GMT+08:00) Perth' = 39, 'Taipei Standard Time - (GMT+08:00) Taipei' = 40, 'Tokyo Standard Time - (GMT+09:00) Osaka, Sapporo, Tokyo' = 41, 'Korea Standard Time - (GMT+09:00) Seoul' = 42, 'Yakutsk Standard Time - (GMT+09:00) Yakutsk' = 43, 'Cen. Australia Standard Time - (GMT+09:30) Adelaide' = 44, 'AUS Central Standard Time - (GMT+09:30) Darwin' = 45, 'E. Australia Standard Time - (GMT+10:00) Brisbane' = 46, 'AUS Eastern Standard Time - (GMT+10:00) Canberra, Melbourne, Sydney' = 47, 'West Pacific Standard Time - (GMT+10:00) Guam, Port Moresby' = 48, 'Tasmania Standard Time - (GMT+10:00) Hobart' = 49, 'Vladivostok Standard Time - (GMT+10:00) Vladivostok' = 50, 'Central Pacific Standard Time - (GMT+11:00) Magadan, Solomon Is., New Caledonia' = 51, 'New Zealand Standard Time - (GMT+12:00) Auckland, Wellington' = 52, 'Fiji Standard Time - (GMT+12:00) Fiji, Kamchatka, Marshall Is.' = 53, 'Tonga Standard Time - (GMT+13:00) Nuku\'alofa' = 54, 'Azores Standard Time - (GMT-01:00) Azores' = 55, 'Cape Verde Standard Time - (GMT-01:00) Cape Verde Is.' = 56, 'Mid-Atlantic Standard Time - (GMT-02:00) Mid-Atlantic' = 57, 'E. South America Standard Time - (GMT-03:00) Brasilia' = 58, 'Argentina Standard Time - (GMT-03:00) Buenos Aires' = 59, 'SA Eastern Standard Time - (GMT-03:00) Georgetown' = 60, 'Greenland Standard Time - (GMT-03:00) Greenland' = 61, 'Montevideo Standard Time - (GMT-03:00) Montevideo' = 62, 'Newfoundland Standard Time - (GMT-03:30) Newfoundland' = 63, 'Atlantic Standard Time - (GMT-04:00) Atlantic Time (Canada)' = 64, 'SA Western Standard Time - (GMT-04:00) La Paz' = 65, 'Central Brazilian Standard Time - (GMT-04:00) Manaus' = 66, 'Pacific SA Standard Time - (GMT-04:00) Santiago' = 67, 'Venezuela Standard Time - (GMT-04:30) Caracas' = 68, 'SA Pacific Standard Time - (GMT-05:00) Bogota, Lima, Quito, Rio Branco' = 69, 'Eastern Standard Time - (GMT-05:00) Eastern Time (US & Canada)' = 70, 'US Eastern Standard Time - (GMT-05:00) Indiana (East)' = 71, 'Central America Standard Time - (GMT-06:00) Central America' = 72, 'Central Standard Time - (GMT-06:00) Central Time (US & Canada)' = 73, 'Central Standard Time (Mexico) - (GMT-06:00) Guadalajara, Mexico City, Monterrey' = 74, 'Canada Central Standard Time - (GMT-06:00) Saskatchewan' = 75, 'US Mountain Standard Time - (GMT-07:00) Arizona' = 76, 'Mountain Standard Time (Mexico) - (GMT-07:00) Chihuahua, La Paz, Mazatlan' = 77, 'Mountain Standard Time - (GMT-07:00) Mountain Time (US & Canada)' = 78, 'Pacific Standard Time - (GMT-08:00) Pacific Time (US & Canada)' = 79, 'Pacific Standard Time (Mexico) - (GMT-08:00) Tijuana, Baja California' = 80, 'Alaskan Standard Time - (GMT-09:00) Alaska' = 81, 'Hawaiian Standard Time - (GMT-10:00) Hawaii' = 82, 'Samoa Standard Time - (GMT-11:00) Midway Island, Samoa' = 83, 'Dateline Standard Time - (GMT-12:00) International Date Line West' = 84 }

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

	export enum InputDateTimeFormatCulture { 'en-US' = 0, 'af-ZA' = 1, 'ar-AE' = 2, 'ar-BH' = 3, 'ar-DZ' = 4, 'ar-EG' = 5, 'ar-IQ' = 6, 'ar-JO' = 7, 'ar-KW' = 8, 'ar-LB' = 9, 'ar-LY' = 10, 'ar-MA' = 11, 'ar-OM' = 12, 'ar-QA' = 13, 'ar-SA' = 14, 'ar-SY' = 15, 'ar-TN' = 16, 'ar-YE' = 17, 'az-AZ' = 18, 'be-BY' = 19, 'bg-BG' = 20, 'bs-BA' = 21, 'ca-ES' = 22, 'cs-CZ' = 23, 'cy-GB' = 24, 'da-DK' = 25, 'de-AT' = 26, 'de-CH' = 27, 'de-DE' = 28, 'de-LI' = 29, 'de-LU' = 30, 'el-GR' = 31, 'en-AU' = 32, 'en-BZ' = 33, 'en-CA' = 34, 'en-CB' = 35, 'en-GB' = 36, 'en-IE' = 37, 'en-JM' = 38, 'en-NZ' = 39, 'en-PH' = 40, 'en-TT' = 41, 'en-ZA' = 42, 'en-ZW' = 43, 'es-AR' = 44, 'es-BO' = 45, 'es-CL' = 46, 'es-CO' = 47, 'es-CR' = 48, 'es-DO' = 49, 'es-EC' = 50, 'es-ES' = 51, 'es-GT' = 52, 'es-HN' = 53, 'es-MX' = 54, 'es-NI' = 55, 'es-PA' = 56, 'es-PE' = 57, 'es-PR' = 58, 'es-PY' = 59, 'es-SV' = 60, 'es-UY' = 61, 'es-VE' = 62, 'et-EE' = 63, 'eu-ES' = 64, 'fa-IR' = 65, 'fi-FI' = 66, 'fo-FO' = 67, 'fr-BE' = 68, 'fr-CA' = 69, 'fr-CH' = 70, 'fr-FR' = 71, 'fr-LU' = 72, 'fr-MC' = 73, 'gl-ES' = 74, 'gu-IN' = 75, 'he-IL' = 76, 'hi-IN' = 77, 'hr-BA' = 78, 'hr-HR' = 79, 'hu-HU' = 80, 'hy-AM' = 81, 'id-ID' = 82, 'is-IS' = 83, 'it-CH' = 84, 'it-IT' = 85, 'ja-JP' = 86, 'ka-GE' = 87, 'kk-KZ' = 88, 'kn-IN' = 89, 'ko-KR' = 90, 'ky-KG' = 91, 'lt-LT' = 92, 'lv-LV' = 93, 'mi-NZ' = 94, 'mn-MN' = 95, 'mr-IN' = 96, 'ms-BN' = 97, 'ms-MY' = 98, 'mt-MT' = 99, 'nl-BE' = 100, 'nl-NL' = 101, 'nn-NO' = 102, 'ns-ZA' = 103, 'pa-IN' = 104, 'pl-PL' = 105, 'ps-AR' = 106, 'pt-BR' = 107, 'pt-PT' = 108, 'ro-RO' = 109, 'ru-RU' = 110, 'sa-IN' = 111, 'sk-SK' = 112, 'sl-SI' = 113, 'sq-AL' = 114, 'sr-BA' = 115, 'sr-SP' = 116, 'sv-FI' = 117, 'sv-SE' = 118, 'sw-KE' = 119, 'ta-IN' = 120, 'te-IN' = 121, 'th-TH' = 122, 'tl-PH' = 123, 'tn-ZA' = 124, 'tr-TR' = 125, 'uk-UA' = 126, 'ur-PK' = 127, 'uz-UZ' = 128, 'vi-VN' = 129, 'zh-CN' = 130, 'zh-HK' = 131, 'zh-MO' = 132, 'zh-SG' = 133, 'zh-TW' = 134, 'zu-ZA' = 135 }

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

	export enum InputGenerateHashAlgorithm { MD5 = 0, SHA1 = 1, SHA256 = 2, SHA384 = 3, SHA512 = 4 }

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

	export enum InputMarketIndexSymbol { 'DJA.INDX (Dow Jones Composite Average)' = 0, 'DJI.INDX (Dow Jones Industrial Average)' = 1, 'DJT.INDX (Dow Jones Transportation)' = 2, 'DJUS.INDX (Dow Jones US)' = 3, 'DXY.INDX (US Dollar Index)' = 4, 'GDOW.INDX (Global Dow USD)' = 5, 'NY.INDX (NYSE US 100 Index)' = 6, 'NYA.INDX (NYSE Composite)' = 7, 'IXIC.INDX (NASDAQ Composite)' = 8, 'NDX.INDX (NASDAQ 100)' = 9, 'GSPC.INDX (S&P 500)' = 10, 'ES.INDX (S&P 500 Futures)' = 11, 'MID.INDX (S&P Midcap 400)' = 12, 'GPTSE.INDX (S&P TSX Composite Index [Canada])' = 13, 'FTSE.INDX (FTSE 100 Index [UK])' = 14, 'CDAXX.INDX (DAX Composite Index [Germany])' = 15, 'GDAXI.INDX (DAX Index [Germany])' = 16, 'HSCE.INDX (Hang Seng China Enterprise (CEI))' = 17, 'HSI.INDX (Hang Seng Index [Hong Kong])' = 18, 'N100.INDX (EuroNext 100)' = 19, 'N225.INDX (Nikkei 225 Index)' = 20, 'RTSI.INDX (RTSI Index [Russia])' = 21, 'SSEC.INDX (Shanghai Composite)' = 22, 'SSMI.INDX (Swiss Market Index)' = 23 }

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

	export enum InputQRCodePayload { 'Plain Text (string)' = 0, 'Bitcoin Payment (address|amount|label|message)' = 1, 'Bookmark (url|title)' = 2, 'Calendar Event (subject|description|location|start|end|allDayEvent[\'true\' or \'false\']|format [\'universal\' or \'iCal\'])' = 3, 'Geolocation (latitude|longitude)' = 4, 'Mail (recipient|subject|message)' = 5, 'Phone Number (string)' = 6, 'SMS (number|message)' = 7, 'URL (string)' = 8, 'WiFi (ssid|password|authenticationMode [\'WEP\', \'WPA\' or \'WPA2\'])' = 9 }

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

	export enum InputStockPricesExchange { 'XNYS (New York Stock Exchange)' = 0, 'XNAS (NASDAQ Stock Exchange)' = 1, 'XBRU (Euronext Brussels)' = 2, 'XTSE (Toronto Stock Exchange)' = 3, 'XCNQ (Candadian Securities Exchange)' = 4, 'XSHG (Shanghai Stock Exchange)' = 5, 'XCSE (Copenhagen Stock Exchange)' = 6, 'XPAR (Euronext Paris)' = 7, 'XFRA (Deutsche Borse)' = 8, 'XHKG (Hong Kong Stock Exchange)' = 9, 'XNSE (National Stock Exchange India)' = 10, 'XTAE (Tel Aviv Stock Exchange)' = 11, 'XNGO (Nagoya Stock Exchange)' = 12, 'XFKA (Fukuoka Stock Exchange)' = 13, 'XSAP (Sapporo Stock Exchange)' = 14, 'XMEX (Mexican Stock Exchange)' = 15, 'XNZE (New Zealand Stock Exchange)' = 16, 'XLIS (Euronext Lisbon)' = 17, 'MISX (Moscow Stock Exchange)' = 18, 'XSES (Singapore Stock Exchange)' = 19, 'XLON (London Stock Exchange)' = 20, 'XASE (American Stock Exchange)' = 21, 'XASX (Australia Stock Exchange)' = 22, 'XDFM (Dubai Financial Market)' = 23, 'XBKK (Stock Exchange of Thailand)' = 24, 'XSWX (SIX Swiss Exchange)' = 25, 'XSTO (Stockholm Stock Exchange)' = 26, 'BMEX (Bolsas y Mercados Españoles)' = 27, 'XJSE (Johannesburg Stock Exchange)' = 28 }

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

	export enum InputStringToFileExtension { TXT = 0, CSV = 1, HTML = 2, XML = 3, CSS = 4, JSON = 5, JS = 6 }

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

	export enum InputTextToSpeechType { PlainText = 0, SSML = 1 }

	export enum InputTextToSpeechVoice { 'ar-EG, Hoda (Female)' = 0, 'ar-SA, Naayf (Male)' = 1, 'bg-BG, Ivan (Male)' = 2, 'ca-ES, Herena (Female)' = 3, 'cs-CZ, Jakub (Male)' = 4, 'da-DK, Helle (Female)' = 5, 'de-AT, Michael (Male)' = 6, 'de-CH, Karsten (Male)' = 7, 'de-DE, Hedda (Female)' = 8, 'de-DE, Stefan (Male)' = 9, 'el-GR, Stefanos (Male)' = 10, 'en-AU, Catherine (Female)' = 11, 'en-AU, Hayley (Female)' = 12, 'en-CA, Heather (Female)' = 13, 'en-CA, Linda (Female)' = 14, 'en-GB, George (Male)' = 15, 'en-GB, Hazel (Female)' = 16, 'en-GB, Susan (Female)' = 17, 'en-IE, Sean (Male)' = 18, 'en-IN, Heera (Female)' = 19, 'en-IN, Priya (Female)' = 20, 'en-IN, Ravi (Male)' = 21, 'en-US, Aria (Female)' = 22, 'en-US, Benjamin (Male)' = 23, 'en-US, Guy (Male)' = 24, 'en-US, Zira (Female)' = 25, 'es-ES, Helena (Female)' = 26, 'es-ES, Laura (Female)' = 27, 'es-ES, Pablo (Male)' = 28, 'es-MX, Hilda (Female)' = 29, 'es-MX, Raul (Male)' = 30, 'fi-FI, Heidi (Female)' = 31, 'fr-CA, Caroline (Female)' = 32, 'fr-CA, Harmonie (Female)' = 33, 'fr-CH, Guillaume (Male)' = 34, 'fr-FR, Hortense (Female)' = 35, 'fr-FR, Julie (Female)' = 36, 'fr-FR, Paul (Male)' = 37, 'he-IL, Asaf (Male)' = 38, 'hi-IN, Hemant (Male)' = 39, 'hi-IN, Kalpana (Female)' = 40, 'hr-HR, Matej (Male)' = 41, 'hu-HU, Szabolcs (Male)' = 42, 'id-ID, Andika (Male)' = 43, 'it-IT, Cosimo (Male)' = 44, 'it-IT, Lucia (Female)' = 45, 'ja-JP, Ayumi (Female)' = 46, 'ja-JP, Haruka (Female)' = 47, 'ja-JP, Ichiro (Male)' = 48, 'ko-KR, Heami (Female)' = 49, 'ms-MY, Rizwan (Male)' = 50, 'nb-NO, Hulda (Female)' = 51, 'nl-NL, Hanna (Female)' = 52, 'pl-PL, Paulina (Female)' = 53, 'pt-BR, Daniel (Male)' = 54, 'pt-BR, Heloisa (Female)' = 55, 'pt-PT, Helia (Female)' = 56, 'ro-RO, Andrei (Male)' = 57, 'ru-RU, Ekaterina (Female)' = 58, 'ru-RU, Irina (Female)' = 59, 'ru-RU, Pavel (Male)' = 60, 'sk-SK, Filip (Male)' = 61, 'sl-SI, Lado (Male)' = 62, 'sv-SE, Hedvig (Female)' = 63, 'ta-IN, Valluvar (Male)' = 64, 'te-IN, Chitra (Female)' = 65, 'th-TH, Pattara (Male)' = 66, 'tr-TR, Seda (Female)' = 67, 'vi-VN, An (Male)' = 68, 'zh-CN, Huihui (Female)' = 69, 'zh-CN, Kangkang (Male)' = 70, 'zh-CN, Yaoyao (Female)' = 71, 'zh-HK, Danny (Male)' = 72, 'zh-HK, Tracy (Female)' = 73, 'zh-TW, HanHan (Female)' = 74, 'zh-TW, Yating (Female)' = 75, 'zh-TW, Zhiwei (Male)' = 76 }

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

	export enum InputTranslateStringLanguage { Arabic = 0, 'Chinese (Simplified)' = 1, Czech = 2, Danish = 3, Dutch = 4, English = 5, Finnish = 6, French = 7, German = 8, Greek = 9, Hindi = 10, Hungarian = 11, Italian = 12, Japanese = 13, Klingon = 14, Korean = 15, Norweigan = 16, Polish = 17, Portuguese = 18, Russian = 19, Spanish = 20, Swedish = 21, Turkish = 22, Vietnamese = 23, Welsh = 24 }

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

	export enum InputTrimStringType { Start = 0, End = 1, Both = 2 }

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

