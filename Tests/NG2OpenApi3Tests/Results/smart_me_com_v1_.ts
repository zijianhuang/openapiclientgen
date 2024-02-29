import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Container Class for the Put action of an Access Token */
	export interface AccessTokenToPut {

		/**
		 * The ID of the Card
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		CardId?: string | null;

		/**
		 * The ID of the User. The credentials provided must have permission to edit the user.
		 * If no ID is provided, the user in the credentials is taken.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		UserId?: string | null;
	}

	/** Container Class for the Put action of an Access Token */
	export interface AccessTokenToPutFormProperties {

		/**
		 * The ID of the Card
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		CardId: FormControl<string | null | undefined>,

		/**
		 * The ID of the User. The credentials provided must have permission to edit the user.
		 * If no ID is provided, the user in the credentials is taken.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateAccessTokenToPutFormGroup() {
		return new FormGroup<AccessTokenToPutFormProperties>({
			CardId: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Information about an Action of a device */
	export interface ActionInformation {

		/** The Type of this action. */
		ActionType?: ActionInformationActionType | null;

		/**
		 * The maximum value of this action (e.g. for an AnalogAction)
		 * Type: double
		 */
		MaxValue?: number | null;

		/**
		 * The minimum value of this action (e.g. for an AnalogAction)
		 * Type: double
		 */
		MinValue?: number | null;

		/** The Name of this action */
		Name?: string | null;

		/** The Obis Code of this action. This is used as ID. */
		ObisCode?: string | null;
	}

	/** The Information about an Action of a device */
	export interface ActionInformationFormProperties {

		/** The Type of this action. */
		ActionType: FormControl<ActionInformationActionType | null | undefined>,

		/**
		 * The maximum value of this action (e.g. for an AnalogAction)
		 * Type: double
		 */
		MaxValue: FormControl<number | null | undefined>,

		/**
		 * The minimum value of this action (e.g. for an AnalogAction)
		 * Type: double
		 */
		MinValue: FormControl<number | null | undefined>,

		/** The Name of this action */
		Name: FormControl<string | null | undefined>,

		/** The Obis Code of this action. This is used as ID. */
		ObisCode: FormControl<string | null | undefined>,
	}
	export function CreateActionInformationFormGroup() {
		return new FormGroup<ActionInformationFormProperties>({
			ActionType: new FormControl<ActionInformationActionType | null | undefined>(undefined),
			MaxValue: new FormControl<number | null | undefined>(undefined),
			MinValue: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ObisCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActionInformationActionType { OnOffAction = 'OnOffAction', AnalogAction = 'AnalogAction' }


	/** Container Class for an action to post */
	export interface ActionToPost {

		/** List with all Actions for this device */
		Actions?: Array<ActionToPostItem>;

		/** The ID of the Device */
		DeviceID?: string | null;
	}

	/** Container Class for an action to post */
	export interface ActionToPostFormProperties {

		/** The ID of the Device */
		DeviceID: FormControl<string | null | undefined>,
	}
	export function CreateActionToPostFormGroup() {
		return new FormGroup<ActionToPostFormProperties>({
			DeviceID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container class for an action item */
	export interface ActionToPostItem {

		/** The ObisCode (ID) of the Action */
		ObisCode?: string | null;

		/**
		 * The Value to Post
		 * Type: double
		 */
		Value?: number | null;
	}

	/** Container class for an action item */
	export interface ActionToPostItemFormProperties {

		/** The ObisCode (ID) of the Action */
		ObisCode: FormControl<string | null | undefined>,

		/**
		 * The Value to Post
		 * Type: double
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateActionToPostItemFormGroup() {
		return new FormGroup<ActionToPostItemFormProperties>({
			ObisCode: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional Information For a device */
	export interface AdditionalDeviceInformation {

		/** An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to. */
		AdditionalMeterSerialNumber?: string | null;

		/**
		 * The Firmware Version of a Meter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		FirmwareVersion?: number | null;

		/**
		 * The Hardware Version of a Meter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		HardwareVersion?: number | null;

		/** The ID of the device */
		ID?: string | null;

		/**
		 * The mode how the device is connected to the network. Valid values are:
		 * wifi, gprs, ltecatm1, ltenbiot, meshmobile, meshwifi
		 */
		NetworkConnection?: string | null;

		/**
		 * The connection RSSI value (0 is bad, 100 is best)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NetworkConnectionRSSI?: number | null;
	}

	/** Additional Information For a device */
	export interface AdditionalDeviceInformationFormProperties {

		/** An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to. */
		AdditionalMeterSerialNumber: FormControl<string | null | undefined>,

		/**
		 * The Firmware Version of a Meter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		FirmwareVersion: FormControl<number | null | undefined>,

		/**
		 * The Hardware Version of a Meter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		HardwareVersion: FormControl<number | null | undefined>,

		/** The ID of the device */
		ID: FormControl<string | null | undefined>,

		/**
		 * The mode how the device is connected to the network. Valid values are:
		 * wifi, gprs, ltecatm1, ltenbiot, meshmobile, meshwifi
		 */
		NetworkConnection: FormControl<string | null | undefined>,

		/**
		 * The connection RSSI value (0 is bad, 100 is best)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NetworkConnectionRSSI: FormControl<number | null | undefined>,
	}
	export function CreateAdditionalDeviceInformationFormGroup() {
		return new FormGroup<AdditionalDeviceInformationFormProperties>({
			AdditionalMeterSerialNumber: new FormControl<string | null | undefined>(undefined),
			FirmwareVersion: new FormControl<number | null | undefined>(undefined),
			HardwareVersion: new FormControl<number | null | undefined>(undefined),
			ID: new FormControl<string | null | undefined>(undefined),
			NetworkConnection: new FormControl<string | null | undefined>(undefined),
			NetworkConnectionRSSI: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings for the auto export functionality of a meter */
	export interface AutoExportSettings {

		/** The export format */
		ExportFormat?: string | null;

		/** The export interval of the auto export */
		ExportInterval?: AutoExportSettingsExportInterval | null;

		/** The meter point id set by the user */
		MeterPointId?: string | null;

		/** The upload type */
		UploadType?: string | null;
	}

	/** Settings for the auto export functionality of a meter */
	export interface AutoExportSettingsFormProperties {

		/** The export format */
		ExportFormat: FormControl<string | null | undefined>,

		/** The export interval of the auto export */
		ExportInterval: FormControl<AutoExportSettingsExportInterval | null | undefined>,

		/** The meter point id set by the user */
		MeterPointId: FormControl<string | null | undefined>,

		/** The upload type */
		UploadType: FormControl<string | null | undefined>,
	}
	export function CreateAutoExportSettingsFormGroup() {
		return new FormGroup<AutoExportSettingsFormProperties>({
			ExportFormat: new FormControl<string | null | undefined>(undefined),
			ExportInterval: new FormControl<AutoExportSettingsExportInterval | null | undefined>(undefined),
			MeterPointId: new FormControl<string | null | undefined>(undefined),
			UploadType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AutoExportSettingsExportInterval { NoExport = 'NoExport', Hourly = 'Hourly', Daily = 'Daily', Weekly = 'Weekly', Monthly = 'Monthly', QuaterYearly = 'QuaterYearly', HalfYearly = 'HalfYearly', Yearly = 'Yearly' }


	/** Container Class for the Web API */
	export interface CustomDeviceToPost {

		/** The ID of the device */
		Id?: string | null;

		/** The Name of the Device */
		Name?: string | null;

		/**
		 * The Serial number
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Serial?: string | null;

		/** The Date of the Value (in UTC). If this is null the Server Time is used. */
		ValueDate?: Date | null;

		/** The Values of the custom Device */
		Values?: Array<CustomDeviceValues>;
	}

	/** Container Class for the Web API */
	export interface CustomDeviceToPostFormProperties {

		/** The ID of the device */
		Id: FormControl<string | null | undefined>,

		/** The Name of the Device */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Serial number
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Serial: FormControl<string | null | undefined>,

		/** The Date of the Value (in UTC). If this is null the Server Time is used. */
		ValueDate: FormControl<Date | null | undefined>,
	}
	export function CreateCustomDeviceToPostFormGroup() {
		return new FormGroup<CustomDeviceToPostFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Serial: new FormControl<string | null | undefined>(undefined),
			ValueDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Container Class for the Custom Device Values */
	export interface CustomDeviceValues {

		/** The Name of the Value. */
		Name?: string | null;

		/**
		 * The Value
		 * Type: double
		 */
		Value?: number | null;
	}

	/** Container Class for the Custom Device Values */
	export interface CustomDeviceValuesFormProperties {

		/** The Name of the Value. */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Value
		 * Type: double
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateCustomDeviceValuesFormGroup() {
		return new FormGroup<CustomDeviceValuesFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container Class for the Web API */
	export interface Device {

		/**
		 * The Actvie Power or current flow rate
		 * Type: double
		 */
		ActivePower?: number | null;

		/**
		 * The Actvie Power Phase L1
		 * Type: double
		 */
		ActivePowerL1?: number | null;

		/**
		 * The Actvie Power Phase L2
		 * Type: double
		 */
		ActivePowerL2?: number | null;

		/**
		 * The Actvie Power Phase L3
		 * Type: double
		 */
		ActivePowerL3?: number | null;

		/** The Unit of the Active Power Value */
		ActivePowerUnit?: string | null;

		/**
		 * The Number of the Active Tariff
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActiveTariff?: number | null;

		/** An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to. */
		AdditionalMeterSerialNumber?: string | null;

		/**
		 * The analog output number 1 (PWM signal) (0 - 32183)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AnalogOutput1?: number | null;

		/**
		 * The analog output number 2 (PWM signal) (0 - 32183)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AnalogOutput2?: number | null;

		/** The state of a pico charging station. (Only available for pico charging stations) */
		ChargingStationState?: DeviceChargingStationState | null;

		/**
		 * The Meter Counter Reading (Total Energy used)
		 * Type: double
		 */
		CounterReading?: number | null;

		/**
		 * The Meter Counter Reading only export
		 * Type: double
		 */
		CounterReadingExport?: number | null;

		/**
		 * The Meter Counter Reading only import
		 * Type: double
		 */
		CounterReadingImport?: number | null;

		/**
		 * The Meter Counter Reading Tariff 1
		 * Type: double
		 */
		CounterReadingT1?: number | null;

		/**
		 * The Meter Counter Reading Tariff 2
		 * Type: double
		 */
		CounterReadingT2?: number | null;

		/**
		 * The Meter Counter Reading Tariff 3
		 * Type: double
		 */
		CounterReadingT3?: number | null;

		/**
		 * The Meter Counter Reading Tariff 4
		 * Type: double
		 */
		CounterReadingT4?: number | null;

		/** The Unit of the Counter Reading */
		CounterReadingUnit?: string | null;

		/**
		 * The Current (in A)
		 * Type: double
		 */
		Current?: number | null;

		/**
		 * The Current Phase L1 (in A)
		 * Type: double
		 */
		CurrentL1?: number | null;

		/**
		 * The Current Phase L2 (in A)
		 * Type: double
		 */
		CurrentL2?: number | null;

		/**
		 * The Current Phase L3 (in A)
		 * Type: double
		 */
		CurrentL3?: number | null;

		/** The Energy Type of this device */
		DeviceEnergyType?: DeviceDeviceEnergyType | null;

		/** The digital input number 1 */
		DigitalInput1?: boolean | null;

		/** The digital input number 2 */
		DigitalInput2?: boolean | null;

		/** The digital output number 1 */
		DigitalOutput1?: boolean | null;

		/** The digital output number 2 */
		DigitalOutput2?: boolean | null;

		/** The Family Type of the device. */
		FamilyType?: DeviceFamilyType | null;

		/**
		 * The current flow rate (e.g. m3/h)
		 * Type: double
		 */
		FlowRate?: number | null;

		/** The ID of the device */
		Id?: string | null;

		/** The sub meter type (e.g. warmwater or coldwater) */
		MeterSubType?: DeviceMeterSubType | null;

		/** The Name of the Device */
		Name?: string | null;

		/**
		 * The Power Factor (cos phi). Range: 0 - 1
		 * Type: double
		 */
		PowerFactor?: number | null;

		/**
		 * The Power Factor (cos phi) Phase L1. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL1?: number | null;

		/**
		 * The Power Factor (cos phi) Phase L2. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL2?: number | null;

		/**
		 * The Power Factor (cos phi) Phase L3. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL3?: number | null;

		/**
		 * The Serial number
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Serial?: string | null;

		/** Flag if the Switch is on on this device. */
		SwitchOn?: boolean | null;

		/** Flag if the Phase L1 is on on this device. */
		SwitchPhaseL1On?: boolean | null;

		/** Flag if the Phase L2 is on on this device. */
		SwitchPhaseL2On?: boolean | null;

		/** Flag if the Phase L3 is on on this device. */
		SwitchPhaseL3On?: boolean | null;

		/**
		 * The Temperature (in degree celsius)
		 * Type: double
		 */
		Temperature?: number | null;

		/** Time of last successful connection the the smart-me Cloud. */
		ValueDate?: Date | null;

		/**
		 * The Voltage (in V)
		 * Type: double
		 */
		Voltage?: number | null;

		/**
		 * The Voltage Phase L1 (in V)
		 * Type: double
		 */
		VoltageL1?: number | null;

		/**
		 * The Voltage Phase L2 (in V)
		 * Type: double
		 */
		VoltageL2?: number | null;

		/**
		 * The Voltage Phase L3 (in V)
		 * Type: double
		 */
		VoltageL3?: number | null;
	}

	/** Container Class for the Web API */
	export interface DeviceFormProperties {

		/**
		 * The Actvie Power or current flow rate
		 * Type: double
		 */
		ActivePower: FormControl<number | null | undefined>,

		/**
		 * The Actvie Power Phase L1
		 * Type: double
		 */
		ActivePowerL1: FormControl<number | null | undefined>,

		/**
		 * The Actvie Power Phase L2
		 * Type: double
		 */
		ActivePowerL2: FormControl<number | null | undefined>,

		/**
		 * The Actvie Power Phase L3
		 * Type: double
		 */
		ActivePowerL3: FormControl<number | null | undefined>,

		/** The Unit of the Active Power Value */
		ActivePowerUnit: FormControl<string | null | undefined>,

		/**
		 * The Number of the Active Tariff
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ActiveTariff: FormControl<number | null | undefined>,

		/** An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to. */
		AdditionalMeterSerialNumber: FormControl<string | null | undefined>,

		/**
		 * The analog output number 1 (PWM signal) (0 - 32183)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AnalogOutput1: FormControl<number | null | undefined>,

		/**
		 * The analog output number 2 (PWM signal) (0 - 32183)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		AnalogOutput2: FormControl<number | null | undefined>,

		/** The state of a pico charging station. (Only available for pico charging stations) */
		ChargingStationState: FormControl<DeviceChargingStationState | null | undefined>,

		/**
		 * The Meter Counter Reading (Total Energy used)
		 * Type: double
		 */
		CounterReading: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading only export
		 * Type: double
		 */
		CounterReadingExport: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading only import
		 * Type: double
		 */
		CounterReadingImport: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 1
		 * Type: double
		 */
		CounterReadingT1: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 2
		 * Type: double
		 */
		CounterReadingT2: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 3
		 * Type: double
		 */
		CounterReadingT3: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 4
		 * Type: double
		 */
		CounterReadingT4: FormControl<number | null | undefined>,

		/** The Unit of the Counter Reading */
		CounterReadingUnit: FormControl<string | null | undefined>,

		/**
		 * The Current (in A)
		 * Type: double
		 */
		Current: FormControl<number | null | undefined>,

		/**
		 * The Current Phase L1 (in A)
		 * Type: double
		 */
		CurrentL1: FormControl<number | null | undefined>,

		/**
		 * The Current Phase L2 (in A)
		 * Type: double
		 */
		CurrentL2: FormControl<number | null | undefined>,

		/**
		 * The Current Phase L3 (in A)
		 * Type: double
		 */
		CurrentL3: FormControl<number | null | undefined>,

		/** The Energy Type of this device */
		DeviceEnergyType: FormControl<DeviceDeviceEnergyType | null | undefined>,

		/** The digital input number 1 */
		DigitalInput1: FormControl<boolean | null | undefined>,

		/** The digital input number 2 */
		DigitalInput2: FormControl<boolean | null | undefined>,

		/** The digital output number 1 */
		DigitalOutput1: FormControl<boolean | null | undefined>,

		/** The digital output number 2 */
		DigitalOutput2: FormControl<boolean | null | undefined>,

		/** The Family Type of the device. */
		FamilyType: FormControl<DeviceFamilyType | null | undefined>,

		/**
		 * The current flow rate (e.g. m3/h)
		 * Type: double
		 */
		FlowRate: FormControl<number | null | undefined>,

		/** The ID of the device */
		Id: FormControl<string | null | undefined>,

		/** The sub meter type (e.g. warmwater or coldwater) */
		MeterSubType: FormControl<DeviceMeterSubType | null | undefined>,

		/** The Name of the Device */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Power Factor (cos phi). Range: 0 - 1
		 * Type: double
		 */
		PowerFactor: FormControl<number | null | undefined>,

		/**
		 * The Power Factor (cos phi) Phase L1. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL1: FormControl<number | null | undefined>,

		/**
		 * The Power Factor (cos phi) Phase L2. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL2: FormControl<number | null | undefined>,

		/**
		 * The Power Factor (cos phi) Phase L3. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL3: FormControl<number | null | undefined>,

		/**
		 * The Serial number
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Serial: FormControl<string | null | undefined>,

		/** Flag if the Switch is on on this device. */
		SwitchOn: FormControl<boolean | null | undefined>,

		/** Flag if the Phase L1 is on on this device. */
		SwitchPhaseL1On: FormControl<boolean | null | undefined>,

		/** Flag if the Phase L2 is on on this device. */
		SwitchPhaseL2On: FormControl<boolean | null | undefined>,

		/** Flag if the Phase L3 is on on this device. */
		SwitchPhaseL3On: FormControl<boolean | null | undefined>,

		/**
		 * The Temperature (in degree celsius)
		 * Type: double
		 */
		Temperature: FormControl<number | null | undefined>,

		/** Time of last successful connection the the smart-me Cloud. */
		ValueDate: FormControl<Date | null | undefined>,

		/**
		 * The Voltage (in V)
		 * Type: double
		 */
		Voltage: FormControl<number | null | undefined>,

		/**
		 * The Voltage Phase L1 (in V)
		 * Type: double
		 */
		VoltageL1: FormControl<number | null | undefined>,

		/**
		 * The Voltage Phase L2 (in V)
		 * Type: double
		 */
		VoltageL2: FormControl<number | null | undefined>,

		/**
		 * The Voltage Phase L3 (in V)
		 * Type: double
		 */
		VoltageL3: FormControl<number | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			ActivePower: new FormControl<number | null | undefined>(undefined),
			ActivePowerL1: new FormControl<number | null | undefined>(undefined),
			ActivePowerL2: new FormControl<number | null | undefined>(undefined),
			ActivePowerL3: new FormControl<number | null | undefined>(undefined),
			ActivePowerUnit: new FormControl<string | null | undefined>(undefined),
			ActiveTariff: new FormControl<number | null | undefined>(undefined),
			AdditionalMeterSerialNumber: new FormControl<string | null | undefined>(undefined),
			AnalogOutput1: new FormControl<number | null | undefined>(undefined),
			AnalogOutput2: new FormControl<number | null | undefined>(undefined),
			ChargingStationState: new FormControl<DeviceChargingStationState | null | undefined>(undefined),
			CounterReading: new FormControl<number | null | undefined>(undefined),
			CounterReadingExport: new FormControl<number | null | undefined>(undefined),
			CounterReadingImport: new FormControl<number | null | undefined>(undefined),
			CounterReadingT1: new FormControl<number | null | undefined>(undefined),
			CounterReadingT2: new FormControl<number | null | undefined>(undefined),
			CounterReadingT3: new FormControl<number | null | undefined>(undefined),
			CounterReadingT4: new FormControl<number | null | undefined>(undefined),
			CounterReadingUnit: new FormControl<string | null | undefined>(undefined),
			Current: new FormControl<number | null | undefined>(undefined),
			CurrentL1: new FormControl<number | null | undefined>(undefined),
			CurrentL2: new FormControl<number | null | undefined>(undefined),
			CurrentL3: new FormControl<number | null | undefined>(undefined),
			DeviceEnergyType: new FormControl<DeviceDeviceEnergyType | null | undefined>(undefined),
			DigitalInput1: new FormControl<boolean | null | undefined>(undefined),
			DigitalInput2: new FormControl<boolean | null | undefined>(undefined),
			DigitalOutput1: new FormControl<boolean | null | undefined>(undefined),
			DigitalOutput2: new FormControl<boolean | null | undefined>(undefined),
			FamilyType: new FormControl<DeviceFamilyType | null | undefined>(undefined),
			FlowRate: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MeterSubType: new FormControl<DeviceMeterSubType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PowerFactor: new FormControl<number | null | undefined>(undefined),
			PowerFactorL1: new FormControl<number | null | undefined>(undefined),
			PowerFactorL2: new FormControl<number | null | undefined>(undefined),
			PowerFactorL3: new FormControl<number | null | undefined>(undefined),
			Serial: new FormControl<string | null | undefined>(undefined),
			SwitchOn: new FormControl<boolean | null | undefined>(undefined),
			SwitchPhaseL1On: new FormControl<boolean | null | undefined>(undefined),
			SwitchPhaseL2On: new FormControl<boolean | null | undefined>(undefined),
			SwitchPhaseL3On: new FormControl<boolean | null | undefined>(undefined),
			Temperature: new FormControl<number | null | undefined>(undefined),
			ValueDate: new FormControl<Date | null | undefined>(undefined),
			Voltage: new FormControl<number | null | undefined>(undefined),
			VoltageL1: new FormControl<number | null | undefined>(undefined),
			VoltageL2: new FormControl<number | null | undefined>(undefined),
			VoltageL3: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DeviceChargingStationState { Booting = 'Booting', ReadyNoCarConnected = 'ReadyNoCarConnected', ReadyCarConnected = 'ReadyCarConnected', StartedWaitForCar = 'StartedWaitForCar', Charging = 'Charging', Installation = 'Installation', Authorize = 'Authorize', Offline = 'Offline' }

	export enum DeviceDeviceEnergyType { MeterTypeUnknown = 'MeterTypeUnknown', MeterTypeElectricity = 'MeterTypeElectricity', MeterTypeWater = 'MeterTypeWater', MeterTypeGas = 'MeterTypeGas', MeterTypeHeat = 'MeterTypeHeat', MeterTypeHCA = 'MeterTypeHCA', MeterTypeAllMeters = 'MeterTypeAllMeters', MeterTypeTemperature = 'MeterTypeTemperature', MeterTypeMBusGateway = 'MeterTypeMBusGateway', MeterTypeRS485Gateway = 'MeterTypeRS485Gateway', MeterTypeCustomDevice = 'MeterTypeCustomDevice', MeterTypeCompressedAir = 'MeterTypeCompressedAir', MeterTypeSolarLog = 'MeterTypeSolarLog', MeterTypeVirtualMeter = 'MeterTypeVirtualMeter', MeterTypeWMBusGateway = 'MeterTypeWMBusGateway' }

	export enum DeviceFamilyType { MeterFamilyTypeUnknown = 'MeterFamilyTypeUnknown', MeterFamilyTypeSmartMeConnectV1 = 'MeterFamilyTypeSmartMeConnectV1', MeterFamiliyTypeSmartMeMeter = 'MeterFamiliyTypeSmartMeMeter', MeterFamiliyTypeSmartMeMeterWithSwitch = 'MeterFamiliyTypeSmartMeMeterWithSwitch', MeterFamilyTypeMBusGatewayV1 = 'MeterFamilyTypeMBusGatewayV1', MeterFamilyTypeRS485GatewayV1 = 'MeterFamilyTypeRS485GatewayV1', MeterFamilyTypeKamstrupModule = 'MeterFamilyTypeKamstrupModule', MeterFamilyTypeSmartMe3PhaseMeter80A = 'MeterFamilyTypeSmartMe3PhaseMeter80A', MeterFamilyTypeSmartMe3PhaseMeter32A = 'MeterFamilyTypeSmartMe3PhaseMeter32A', MeterFamilyTypeSmartMe3PhaseTelstarTransformer = 'MeterFamilyTypeSmartMe3PhaseTelstarTransformer', MeterFamilyTypeLandisGyrModule = 'MeterFamilyTypeLandisGyrModule', MeterFamilyTypeFnnOpticalModule = 'MeterFamilyTypeFnnOpticalModule', MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi = 'MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi', MeterFamilyTypeSmartMe3PhaseTelstar80AMobile = 'MeterFamilyTypeSmartMe3PhaseTelstar80AMobile', MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi = 'MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi', MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi = 'MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi', MeterFamilyTypeSmartMe1PhaseMeter80AGprs = 'MeterFamilyTypeSmartMe1PhaseMeter80AGprs', MeterFamilyTypeSmartMe1PhaseMeter32AGprs = 'MeterFamilyTypeSmartMe1PhaseMeter32AGprs', MeterFamilyTypeWMBusGatewayV1 = 'MeterFamilyTypeWMBusGatewayV1', MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile = 'MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile', MeterFamilyTypeMithralHallV1 = 'MeterFamilyTypeMithralHallV1', MeterFamilyTypeRestApiMeter = 'MeterFamilyTypeRestApiMeter', MeterFamilyTypeVirtualBillingMeter = 'MeterFamilyTypeVirtualBillingMeter' }

	export enum DeviceMeterSubType { MeterSubTypeUnknown = 'MeterSubTypeUnknown', MeterSubTypeCold = 'MeterSubTypeCold', MeterSubTypeHeat = 'MeterSubTypeHeat', MeterSubTypeChargingStation = 'MeterSubTypeChargingStation', MeterSubTypeElectricity = 'MeterSubTypeElectricity', MeterSubTypeWater = 'MeterSubTypeWater', MeterSubTypeGas = 'MeterSubTypeGas', MeterSubTypeElectricityHeat = 'MeterSubTypeElectricityHeat', MeterSubTypeTemperature = 'MeterSubTypeTemperature', MeterSubTypeVirtualBattery = 'MeterSubTypeVirtualBattery' }


	/** Container Class for the Web API. Conatinas the MeterValues in the Past */
	export interface DeviceInPast {

		/**
		 * The Meter Counter Reading (Total Energy used)
		 * Type: double
		 */
		CounterReading?: number | null;

		/**
		 * The Meter Counter Reading Export
		 * Type: double
		 */
		CounterReadingExport?: number | null;

		/**
		 * The Meter Counter Reading Export Tariff 1
		 * Type: double
		 */
		CounterReadingExportT1?: number | null;

		/**
		 * The Meter Counter Reading Export Tariff 2
		 * Type: double
		 */
		CounterReadingExportT2?: number | null;

		/**
		 * The Meter Counter Reading Export Tariff 3
		 * Type: double
		 */
		CounterReadingExportT3?: number | null;

		/**
		 * The Meter Counter Reading Export Tariff 4
		 * Type: double
		 */
		CounterReadingExportT4?: number | null;

		/**
		 * The Meter Counter Reading Import
		 * Type: double
		 */
		CounterReadingImport?: number | null;

		/**
		 * The Meter Counter Reading Import Tariff 1
		 * Type: double
		 */
		CounterReadingImportT1?: number | null;

		/**
		 * The Meter Counter Reading Import Tariff 2
		 * Type: double
		 */
		CounterReadingImportT2?: number | null;

		/**
		 * The Meter Counter Reading Import Tariff 3
		 * Type: double
		 */
		CounterReadingImportT3?: number | null;

		/**
		 * The Meter Counter Reading Import Tariff 4
		 * Type: double
		 */
		CounterReadingImportT4?: number | null;

		/**
		 * The Meter Counter Reading Tariff 1
		 * Type: double
		 */
		CounterReadingT1?: number | null;

		/**
		 * The Meter Counter Reading Tariff 2
		 * Type: double
		 */
		CounterReadingT2?: number | null;

		/**
		 * The Meter Counter Reading Tariff 3
		 * Type: double
		 */
		CounterReadingT3?: number | null;

		/**
		 * The Meter Counter Reading Tariff 4
		 * Type: double
		 */
		CounterReadingT4?: number | null;

		/** The Unit of the Counter Reading */
		CounterReadingUnit?: string | null;

		/** The Date of the Values */
		Date?: Date | null;

		/** The ID of the device */
		Id?: string | null;

		/**
		 * The Serial number
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Serial?: string | null;
	}

	/** Container Class for the Web API. Conatinas the MeterValues in the Past */
	export interface DeviceInPastFormProperties {

		/**
		 * The Meter Counter Reading (Total Energy used)
		 * Type: double
		 */
		CounterReading: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Export
		 * Type: double
		 */
		CounterReadingExport: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Export Tariff 1
		 * Type: double
		 */
		CounterReadingExportT1: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Export Tariff 2
		 * Type: double
		 */
		CounterReadingExportT2: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Export Tariff 3
		 * Type: double
		 */
		CounterReadingExportT3: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Export Tariff 4
		 * Type: double
		 */
		CounterReadingExportT4: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Import
		 * Type: double
		 */
		CounterReadingImport: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Import Tariff 1
		 * Type: double
		 */
		CounterReadingImportT1: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Import Tariff 2
		 * Type: double
		 */
		CounterReadingImportT2: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Import Tariff 3
		 * Type: double
		 */
		CounterReadingImportT3: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Import Tariff 4
		 * Type: double
		 */
		CounterReadingImportT4: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 1
		 * Type: double
		 */
		CounterReadingT1: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 2
		 * Type: double
		 */
		CounterReadingT2: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 3
		 * Type: double
		 */
		CounterReadingT3: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 4
		 * Type: double
		 */
		CounterReadingT4: FormControl<number | null | undefined>,

		/** The Unit of the Counter Reading */
		CounterReadingUnit: FormControl<string | null | undefined>,

		/** The Date of the Values */
		Date: FormControl<Date | null | undefined>,

		/** The ID of the device */
		Id: FormControl<string | null | undefined>,

		/**
		 * The Serial number
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Serial: FormControl<string | null | undefined>,
	}
	export function CreateDeviceInPastFormGroup() {
		return new FormGroup<DeviceInPastFormProperties>({
			CounterReading: new FormControl<number | null | undefined>(undefined),
			CounterReadingExport: new FormControl<number | null | undefined>(undefined),
			CounterReadingExportT1: new FormControl<number | null | undefined>(undefined),
			CounterReadingExportT2: new FormControl<number | null | undefined>(undefined),
			CounterReadingExportT3: new FormControl<number | null | undefined>(undefined),
			CounterReadingExportT4: new FormControl<number | null | undefined>(undefined),
			CounterReadingImport: new FormControl<number | null | undefined>(undefined),
			CounterReadingImportT1: new FormControl<number | null | undefined>(undefined),
			CounterReadingImportT2: new FormControl<number | null | undefined>(undefined),
			CounterReadingImportT3: new FormControl<number | null | undefined>(undefined),
			CounterReadingImportT4: new FormControl<number | null | undefined>(undefined),
			CounterReadingT1: new FormControl<number | null | undefined>(undefined),
			CounterReadingT2: new FormControl<number | null | undefined>(undefined),
			CounterReadingT3: new FormControl<number | null | undefined>(undefined),
			CounterReadingT4: new FormControl<number | null | undefined>(undefined),
			CounterReadingUnit: new FormControl<string | null | undefined>(undefined),
			Date: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Serial: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container Class for the Web API */
	export interface DeviceToPost {

		/**
		 * The Active Power or current flow rate. In kW or m3/h
		 * Type: double
		 */
		ActivePower?: number | null;

		/**
		 * The Meter Counter Reading (Total Energy used) in kWh or m3.
		 * Type: double
		 */
		CounterReading?: number | null;

		/**
		 * The Meter Counter Reading only export
		 * Type: double
		 */
		CounterReadingExport?: number | null;

		/**
		 * The Meter Counter Reading only export (Tariff 1)
		 * Type: double
		 */
		CounterReadingExportT1?: number | null;

		/**
		 * The Meter Counter Reading only export (Tariff 2)
		 * Type: double
		 */
		CounterReadingExportT2?: number | null;

		/**
		 * The Meter Counter Reading Tariff 1 in kWh or m3.
		 * Type: double
		 */
		CounterReadingT1?: number | null;

		/**
		 * The Meter Counter Reading Tariff 2 in kWh or m3.
		 * Type: double
		 */
		CounterReadingT2?: number | null;

		/**
		 * The Current (in A)
		 * Type: double
		 */
		Current?: number | null;

		/**
		 * The Current Phase L1 (in A)
		 * Type: double
		 */
		CurrentL1?: number | null;

		/**
		 * The Current Phase L2 (in A)
		 * Type: double
		 */
		CurrentL2?: number | null;

		/**
		 * The Current Phase L3 (in A)
		 * Type: double
		 */
		CurrentL3?: number | null;

		/** The Energy Type of this device */
		DeviceEnergyType?: DeviceDeviceEnergyType | null;

		/** The digital input number 1 */
		DigitalInput1?: boolean | null;

		/** The ID of the device */
		Id?: string | null;

		/** The Sub Type of this Meter. */
		MeterSubType?: DeviceMeterSubType | null;

		/** The Name of the Device */
		Name?: string | null;

		/**
		 * The Power Factor (cos phi). Range: 0 - 1
		 * Type: double
		 */
		PowerFactor?: number | null;

		/**
		 * The Power Factor (cos phi) Phase L1. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL1?: number | null;

		/**
		 * The Power Factor (cos phi) Phase L2. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL2?: number | null;

		/**
		 * The Power Factor (cos phi) Phase L3. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL3?: number | null;

		/**
		 * The Serial number
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Serial?: string | null;

		/**
		 * The Temperature (in degree celsius)
		 * Type: double
		 */
		Temperature?: number | null;

		/** The Date of the Value (in UTC). If this is null the Server Time is used. */
		ValueDate?: Date | null;

		/**
		 * The Voltage (in V)
		 * Type: double
		 */
		Voltage?: number | null;

		/**
		 * The Voltage Phase L1 (in V)
		 * Type: double
		 */
		VoltageL1?: number | null;

		/**
		 * The Voltage Phase L2 (in V)
		 * Type: double
		 */
		VoltageL2?: number | null;

		/**
		 * The Voltage Phase L3 (in V)
		 * Type: double
		 */
		VoltageL3?: number | null;
	}

	/** Container Class for the Web API */
	export interface DeviceToPostFormProperties {

		/**
		 * The Active Power or current flow rate. In kW or m3/h
		 * Type: double
		 */
		ActivePower: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading (Total Energy used) in kWh or m3.
		 * Type: double
		 */
		CounterReading: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading only export
		 * Type: double
		 */
		CounterReadingExport: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading only export (Tariff 1)
		 * Type: double
		 */
		CounterReadingExportT1: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading only export (Tariff 2)
		 * Type: double
		 */
		CounterReadingExportT2: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 1 in kWh or m3.
		 * Type: double
		 */
		CounterReadingT1: FormControl<number | null | undefined>,

		/**
		 * The Meter Counter Reading Tariff 2 in kWh or m3.
		 * Type: double
		 */
		CounterReadingT2: FormControl<number | null | undefined>,

		/**
		 * The Current (in A)
		 * Type: double
		 */
		Current: FormControl<number | null | undefined>,

		/**
		 * The Current Phase L1 (in A)
		 * Type: double
		 */
		CurrentL1: FormControl<number | null | undefined>,

		/**
		 * The Current Phase L2 (in A)
		 * Type: double
		 */
		CurrentL2: FormControl<number | null | undefined>,

		/**
		 * The Current Phase L3 (in A)
		 * Type: double
		 */
		CurrentL3: FormControl<number | null | undefined>,

		/** The Energy Type of this device */
		DeviceEnergyType: FormControl<DeviceDeviceEnergyType | null | undefined>,

		/** The digital input number 1 */
		DigitalInput1: FormControl<boolean | null | undefined>,

		/** The ID of the device */
		Id: FormControl<string | null | undefined>,

		/** The Sub Type of this Meter. */
		MeterSubType: FormControl<DeviceMeterSubType | null | undefined>,

		/** The Name of the Device */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Power Factor (cos phi). Range: 0 - 1
		 * Type: double
		 */
		PowerFactor: FormControl<number | null | undefined>,

		/**
		 * The Power Factor (cos phi) Phase L1. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL1: FormControl<number | null | undefined>,

		/**
		 * The Power Factor (cos phi) Phase L2. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL2: FormControl<number | null | undefined>,

		/**
		 * The Power Factor (cos phi) Phase L3. Range: 0 - 1
		 * Type: double
		 */
		PowerFactorL3: FormControl<number | null | undefined>,

		/**
		 * The Serial number
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Serial: FormControl<string | null | undefined>,

		/**
		 * The Temperature (in degree celsius)
		 * Type: double
		 */
		Temperature: FormControl<number | null | undefined>,

		/** The Date of the Value (in UTC). If this is null the Server Time is used. */
		ValueDate: FormControl<Date | null | undefined>,

		/**
		 * The Voltage (in V)
		 * Type: double
		 */
		Voltage: FormControl<number | null | undefined>,

		/**
		 * The Voltage Phase L1 (in V)
		 * Type: double
		 */
		VoltageL1: FormControl<number | null | undefined>,

		/**
		 * The Voltage Phase L2 (in V)
		 * Type: double
		 */
		VoltageL2: FormControl<number | null | undefined>,

		/**
		 * The Voltage Phase L3 (in V)
		 * Type: double
		 */
		VoltageL3: FormControl<number | null | undefined>,
	}
	export function CreateDeviceToPostFormGroup() {
		return new FormGroup<DeviceToPostFormProperties>({
			ActivePower: new FormControl<number | null | undefined>(undefined),
			CounterReading: new FormControl<number | null | undefined>(undefined),
			CounterReadingExport: new FormControl<number | null | undefined>(undefined),
			CounterReadingExportT1: new FormControl<number | null | undefined>(undefined),
			CounterReadingExportT2: new FormControl<number | null | undefined>(undefined),
			CounterReadingT1: new FormControl<number | null | undefined>(undefined),
			CounterReadingT2: new FormControl<number | null | undefined>(undefined),
			Current: new FormControl<number | null | undefined>(undefined),
			CurrentL1: new FormControl<number | null | undefined>(undefined),
			CurrentL2: new FormControl<number | null | undefined>(undefined),
			CurrentL3: new FormControl<number | null | undefined>(undefined),
			DeviceEnergyType: new FormControl<DeviceDeviceEnergyType | null | undefined>(undefined),
			DigitalInput1: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MeterSubType: new FormControl<DeviceMeterSubType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			PowerFactor: new FormControl<number | null | undefined>(undefined),
			PowerFactorL1: new FormControl<number | null | undefined>(undefined),
			PowerFactorL2: new FormControl<number | null | undefined>(undefined),
			PowerFactorL3: new FormControl<number | null | undefined>(undefined),
			Serial: new FormControl<string | null | undefined>(undefined),
			Temperature: new FormControl<number | null | undefined>(undefined),
			ValueDate: new FormControl<Date | null | undefined>(undefined),
			Voltage: new FormControl<number | null | undefined>(undefined),
			VoltageL1: new FormControl<number | null | undefined>(undefined),
			VoltageL2: new FormControl<number | null | undefined>(undefined),
			VoltageL3: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container class for the folder API */
	export interface FolderData {

		/**
		 * The Counter values for electricity (kWh)
		 * Type: double
		 */
		ElectricityCounterValue?: number | null;

		/**
		 * The Power for electricity (kW)
		 * Type: double
		 */
		ElectricityPower?: number | null;

		/**
		 * The Counter values for Gas (m3)
		 * Type: double
		 */
		GasCounterValue?: number | null;

		/**
		 * The Flow Rate for Gas (m3/h)
		 * Type: double
		 */
		GasFlowRate?: number | null;

		/**
		 * The Counter values for Heat (kWh)
		 * Type: double
		 */
		HeatCounterValue?: number | null;

		/**
		 * The Power for Heat (kW)
		 * Type: double
		 */
		HeatPower?: number | null;

		/**
		 * The Counter values for Water (m3)
		 * Type: double
		 */
		WaterCounterValue?: number | null;

		/**
		 * The Flow Rate for Water (m3/h)
		 * Type: double
		 */
		WaterFlowRate?: number | null;
	}

	/** Container class for the folder API */
	export interface FolderDataFormProperties {

		/**
		 * The Counter values for electricity (kWh)
		 * Type: double
		 */
		ElectricityCounterValue: FormControl<number | null | undefined>,

		/**
		 * The Power for electricity (kW)
		 * Type: double
		 */
		ElectricityPower: FormControl<number | null | undefined>,

		/**
		 * The Counter values for Gas (m3)
		 * Type: double
		 */
		GasCounterValue: FormControl<number | null | undefined>,

		/**
		 * The Flow Rate for Gas (m3/h)
		 * Type: double
		 */
		GasFlowRate: FormControl<number | null | undefined>,

		/**
		 * The Counter values for Heat (kWh)
		 * Type: double
		 */
		HeatCounterValue: FormControl<number | null | undefined>,

		/**
		 * The Power for Heat (kW)
		 * Type: double
		 */
		HeatPower: FormControl<number | null | undefined>,

		/**
		 * The Counter values for Water (m3)
		 * Type: double
		 */
		WaterCounterValue: FormControl<number | null | undefined>,

		/**
		 * The Flow Rate for Water (m3/h)
		 * Type: double
		 */
		WaterFlowRate: FormControl<number | null | undefined>,
	}
	export function CreateFolderDataFormGroup() {
		return new FormGroup<FolderDataFormProperties>({
			ElectricityCounterValue: new FormControl<number | null | undefined>(undefined),
			ElectricityPower: new FormControl<number | null | undefined>(undefined),
			GasCounterValue: new FormControl<number | null | undefined>(undefined),
			GasFlowRate: new FormControl<number | null | undefined>(undefined),
			HeatCounterValue: new FormControl<number | null | undefined>(undefined),
			HeatPower: new FormControl<number | null | undefined>(undefined),
			WaterCounterValue: new FormControl<number | null | undefined>(undefined),
			WaterFlowRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Container Class for the Web API representing a folder menu and it's items */
	export interface FolderMenuConfiguration {

		/** The time zone name taken from the browser */
		BrowserTimeZoneName?: string | null;

		/** The UTC time taken from the browser */
		BrowserUtcTime?: string | null;
		Items?: Array<FolderMenuItem>;
	}

	/** Container Class for the Web API representing a folder menu and it's items */
	export interface FolderMenuConfigurationFormProperties {

		/** The time zone name taken from the browser */
		BrowserTimeZoneName: FormControl<string | null | undefined>,

		/** The UTC time taken from the browser */
		BrowserUtcTime: FormControl<string | null | undefined>,
	}
	export function CreateFolderMenuConfigurationFormGroup() {
		return new FormGroup<FolderMenuConfigurationFormProperties>({
			BrowserTimeZoneName: new FormControl<string | null | undefined>(undefined),
			BrowserUtcTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A folder menu item */
	export interface FolderMenuItem {

		/** Settings for the auto export functionality of a meter */
		AutoExportSettings?: AutoExportSettings;

		/** Children folder menu items (sub folder menu items) */
		Children?: Array<FolderMenuItem>;

		/** The Description of the folder */
		Description?: string | null;

		/** The folder type of the item */
		FolderType?: FolderMenuItemFolderType | null;

		/** The path to the Icon of this folder */
		Icon?: string | null;

		/** The id of the folder menu item */
		Id?: string | null;

		/**
		 * The serial number if the folder menu item is a meter.
		 * Serial number is handled as a string, as javascript on client side cannot handle long integers properly.
		 */
		MeterSerialNumber?: string | null;

		/** The Name of the item */
		Name?: string | null;

		/** The ID of the user of this folder (only for foldertype user) */
		UserId?: string | null;
	}

	/** A folder menu item */
	export interface FolderMenuItemFormProperties {

		/** The Description of the folder */
		Description: FormControl<string | null | undefined>,

		/** The folder type of the item */
		FolderType: FormControl<FolderMenuItemFolderType | null | undefined>,

		/** The path to the Icon of this folder */
		Icon: FormControl<string | null | undefined>,

		/** The id of the folder menu item */
		Id: FormControl<string | null | undefined>,

		/**
		 * The serial number if the folder menu item is a meter.
		 * Serial number is handled as a string, as javascript on client side cannot handle long integers properly.
		 */
		MeterSerialNumber: FormControl<string | null | undefined>,

		/** The Name of the item */
		Name: FormControl<string | null | undefined>,

		/** The ID of the user of this folder (only for foldertype user) */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateFolderMenuItemFormGroup() {
		return new FormGroup<FolderMenuItemFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			FolderType: new FormControl<FolderMenuItemFolderType | null | undefined>(undefined),
			Icon: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MeterSerialNumber: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FolderMenuItemFolderType { Folder = 'Folder', Location = 'Location', Factory = 'Factory', House = 'House', Office = 'Office', Machine = 'Machine', VirtualMeter = 'VirtualMeter', ElecticityFolder = 'ElecticityFolder', WaterFolder = 'WaterFolder', HeatFolder = 'HeatFolder', GasFolder = 'GasFolder', TemperatureFolder = 'TemperatureFolder', Sun = 'Sun', Light = 'Light', Ice = 'Ice', Sofa = 'Sofa', Food = 'Food', Coffee = 'Coffee', Car = 'Car', ChargingStation = 'ChargingStation', Meter = 'Meter', User = 'User', Trash = 'Trash', GridPhotovoltaicPowerSystem = 'GridPhotovoltaicPowerSystem' }


	/** Container for the folder settings */
	export interface FolderSettings {

		/** The Description of the folder or meter */
		Description?: string | null;

		/** Flag if the meter is enabled (folder not supported yet) */
		Enable?: boolean | null;

		/** The Type of the folder */
		FolderType?: FolderMenuItemFolderType | null;

		/** The Name of the folder or meter */
		Name?: string | null;

		/** The parent folder ID of this item */
		ParentFolderId?: string | null;

		/**
		 * The serial number (meter only)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		SerialNumber?: string | null;

		/** Flag if the meter is usable for virtual billing meters (e.g. washroom) */
		UseableForVirtualBillingMeters?: boolean | null;

		/**
		 * The value correction on this meter
		 * Type: double
		 */
		ValueCorrection?: number | null;

		/**
		 * The value correction on all parent folders. but not on the meter itself
		 * Type: double
		 */
		ValueCorrectionParentFolder?: number | null;

		/** The name of the visualization of the folder */
		VisualizationName?: string | null;
	}

	/** Container for the folder settings */
	export interface FolderSettingsFormProperties {

		/** The Description of the folder or meter */
		Description: FormControl<string | null | undefined>,

		/** Flag if the meter is enabled (folder not supported yet) */
		Enable: FormControl<boolean | null | undefined>,

		/** The Type of the folder */
		FolderType: FormControl<FolderMenuItemFolderType | null | undefined>,

		/** The Name of the folder or meter */
		Name: FormControl<string | null | undefined>,

		/** The parent folder ID of this item */
		ParentFolderId: FormControl<string | null | undefined>,

		/**
		 * The serial number (meter only)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		SerialNumber: FormControl<string | null | undefined>,

		/** Flag if the meter is usable for virtual billing meters (e.g. washroom) */
		UseableForVirtualBillingMeters: FormControl<boolean | null | undefined>,

		/**
		 * The value correction on this meter
		 * Type: double
		 */
		ValueCorrection: FormControl<number | null | undefined>,

		/**
		 * The value correction on all parent folders. but not on the meter itself
		 * Type: double
		 */
		ValueCorrectionParentFolder: FormControl<number | null | undefined>,

		/** The name of the visualization of the folder */
		VisualizationName: FormControl<string | null | undefined>,
	}
	export function CreateFolderSettingsFormGroup() {
		return new FormGroup<FolderSettingsFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Enable: new FormControl<boolean | null | undefined>(undefined),
			FolderType: new FormControl<FolderMenuItemFolderType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			UseableForVirtualBillingMeters: new FormControl<boolean | null | undefined>(undefined),
			ValueCorrection: new FormControl<number | null | undefined>(undefined),
			ValueCorrectionParentFolder: new FormControl<number | null | undefined>(undefined),
			VisualizationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the input of a meter (digital inputs) */
	export interface InputConfigurationContainer {

		/** The Name of the Input */
		Name?: string | null;

		/**
		 * The number of the Input. (1 for Input 1)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number?: number | null;

		/** The visualization text for an OFF action */
		OffText?: string | null;

		/** The visualization text for an ON action */
		OnText?: string | null;

		/** The Type of the output */
		Type?: InputConfigurationContainerType | null;
	}

	/** Configuration for the input of a meter (digital inputs) */
	export interface InputConfigurationContainerFormProperties {

		/** The Name of the Input */
		Name: FormControl<string | null | undefined>,

		/**
		 * The number of the Input. (1 for Input 1)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number: FormControl<number | null | undefined>,

		/** The visualization text for an OFF action */
		OffText: FormControl<string | null | undefined>,

		/** The visualization text for an ON action */
		OnText: FormControl<string | null | undefined>,

		/** The Type of the output */
		Type: FormControl<InputConfigurationContainerType | null | undefined>,
	}
	export function CreateInputConfigurationContainerFormGroup() {
		return new FormGroup<InputConfigurationContainerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			OffText: new FormControl<string | null | undefined>(undefined),
			OnText: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<InputConfigurationContainerType | null | undefined>(undefined),
		});

	}

	export enum InputConfigurationContainerType { TariffInput = 'TariffInput', DigitalInput = 'DigitalInput' }


	/** Informations about the Inputs of a Meter or Folder */
	export interface InputInformation {

		/** The Name of the Input */
		Name?: string | null;

		/**
		 * The Number of this Input. Use this as ID to switch it on or off.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number?: number | null;
	}

	/** Informations about the Inputs of a Meter or Folder */
	export interface InputInformationFormProperties {

		/** The Name of the Input */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Number of this Input. Use this as ID to switch it on or off.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number: FormControl<number | null | undefined>,
	}
	export function CreateInputInformationFormGroup() {
		return new FormGroup<InputInformationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MBusData {

		/** The Date of the M-BUS Telegram Readout (in UTC). If this is null the Server Time is used. */
		Date?: Date | null;

		/**
		 * The M-BUS Telegram as Hex string.
		 * Example: 68 1F 1F 68 08 02 72 78 56 34 12 24 40 01 07 55 00 00 00 03 13 15 31 00 DA 02 3B 13 01 8B 60 04 37 18 02 18 16
		 */
		Telegram?: string | null;
	}
	export interface MBusDataFormProperties {

		/** The Date of the M-BUS Telegram Readout (in UTC). If this is null the Server Time is used. */
		Date: FormControl<Date | null | undefined>,

		/**
		 * The M-BUS Telegram as Hex string.
		 * Example: 68 1F 1F 68 08 02 72 78 56 34 12 24 40 01 07 55 00 00 00 03 13 15 31 00 DA 02 3B 13 01 8B 60 04 37 18 02 18 16
		 */
		Telegram: FormControl<string | null | undefined>,
	}
	export function CreateMBusDataFormGroup() {
		return new FormGroup<MBusDataFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			Telegram: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container Class for the Web API */
	export interface MeterFolderInformation {

		/**
		 * The Version of the Communication Module (if exists)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CommunicationModuleFirmwareVersion?: number | null;

		/**
		 * The Version of the Communication Module (if exists)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CommunicationModuleHardwareVersion?: number | null;

		/**
		 * The Firmware Version of a Meter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		FirmwareVersion?: number | null;

		/**
		 * The Hardware Version of a Meter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		HardwareVersion?: number | null;

		/** Informations about the available Inputs */
		InputInformations?: Array<InputInformation>;

		/** Flag if it's a Folder or a Meter */
		IsFolder?: boolean | null;

		/** Name of the Meter or Folder */
		Name?: string | null;

		/** Informations about the available Outputs */
		OutputInformations?: Array<OutputInformation>;
	}

	/** Container Class for the Web API */
	export interface MeterFolderInformationFormProperties {

		/**
		 * The Version of the Communication Module (if exists)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CommunicationModuleFirmwareVersion: FormControl<number | null | undefined>,

		/**
		 * The Version of the Communication Module (if exists)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CommunicationModuleHardwareVersion: FormControl<number | null | undefined>,

		/**
		 * The Firmware Version of a Meter
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		FirmwareVersion: FormControl<number | null | undefined>,

		/**
		 * The Hardware Version of a Meter.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		HardwareVersion: FormControl<number | null | undefined>,

		/** Flag if it's a Folder or a Meter */
		IsFolder: FormControl<boolean | null | undefined>,

		/** Name of the Meter or Folder */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMeterFolderInformationFormGroup() {
		return new FormGroup<MeterFolderInformationFormProperties>({
			CommunicationModuleFirmwareVersion: new FormControl<number | null | undefined>(undefined),
			CommunicationModuleHardwareVersion: new FormControl<number | null | undefined>(undefined),
			FirmwareVersion: new FormControl<number | null | undefined>(undefined),
			HardwareVersion: new FormControl<number | null | undefined>(undefined),
			IsFolder: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Informations about the Outputs of a Meter or Folder */
	export interface OutputInformation {

		/** The type of the Output */
		ActionType?: ActionInformationActionType | null;

		/** The Name of the Output */
		Name?: string | null;

		/**
		 * The Number of this Output. Use this as ID to switch it on or off.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number?: number | null;

		/** The Obis Code for this Output */
		ObisCode?: string | null;
	}

	/** Informations about the Outputs of a Meter or Folder */
	export interface OutputInformationFormProperties {

		/** The type of the Output */
		ActionType: FormControl<ActionInformationActionType | null | undefined>,

		/** The Name of the Output */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Number of this Output. Use this as ID to switch it on or off.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number: FormControl<number | null | undefined>,

		/** The Obis Code for this Output */
		ObisCode: FormControl<string | null | undefined>,
	}
	export function CreateOutputInformationFormGroup() {
		return new FormGroup<OutputInformationFormProperties>({
			ActionType: new FormControl<ActionInformationActionType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			ObisCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for a Meter or Folder Information to Post */
	export interface MeterFolderInformationToPost {

		/** The ID of the device or folder */
		Id?: string | null;

		/** Name of the Meter or Folder */
		Name?: string | null;
	}

	/** Container for a Meter or Folder Information to Post */
	export interface MeterFolderInformationToPostFormProperties {

		/** The ID of the device or folder */
		Id: FormControl<string | null | undefined>,

		/** Name of the Meter or Folder */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateMeterFolderInformationToPostFormGroup() {
		return new FormGroup<MeterFolderInformationToPostFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Object {
	}
	export interface ObjectFormProperties {
	}
	export function CreateObjectFormGroup() {
		return new FormGroup<ObjectFormProperties>({
		});

	}


	/** Configuration for the outputs of a meter (analog/digital outputs) */
	export interface OutputConfigurationContainer {

		/** The Action when the device has lost the connection */
		DigitalOutputNoConnectionAction?: OutputConfigurationContainerDigitalOutputNoConnectionAction | null;

		/** The Name of the Output */
		Name?: string | null;

		/**
		 * The number of the Output. (1 for Output 1, 2 for Output 2)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number?: number | null;

		/** The S0 Pulse Value */
		S0PulseValue?: OutputConfigurationContainerS0PulseValue | null;

		/** The Type of the output */
		Type?: OutputConfigurationContainerType | null;
	}

	/** Configuration for the outputs of a meter (analog/digital outputs) */
	export interface OutputConfigurationContainerFormProperties {

		/** The Action when the device has lost the connection */
		DigitalOutputNoConnectionAction: FormControl<OutputConfigurationContainerDigitalOutputNoConnectionAction | null | undefined>,

		/** The Name of the Output */
		Name: FormControl<string | null | undefined>,

		/**
		 * The number of the Output. (1 for Output 1, 2 for Output 2)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number: FormControl<number | null | undefined>,

		/** The S0 Pulse Value */
		S0PulseValue: FormControl<OutputConfigurationContainerS0PulseValue | null | undefined>,

		/** The Type of the output */
		Type: FormControl<OutputConfigurationContainerType | null | undefined>,
	}
	export function CreateOutputConfigurationContainerFormGroup() {
		return new FormGroup<OutputConfigurationContainerFormProperties>({
			DigitalOutputNoConnectionAction: new FormControl<OutputConfigurationContainerDigitalOutputNoConnectionAction | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			S0PulseValue: new FormControl<OutputConfigurationContainerS0PulseValue | null | undefined>(undefined),
			Type: new FormControl<OutputConfigurationContainerType | null | undefined>(undefined),
		});

	}

	export enum OutputConfigurationContainerDigitalOutputNoConnectionAction { Nothing = 'Nothing', TurnOff = 'TurnOff', TurnOn = 'TurnOn', SetPwmValue = 'SetPwmValue' }

	export enum OutputConfigurationContainerS0PulseValue { PulseValue1000Kwh = 'PulseValue1000Kwh', PulseValue10000Kwh = 'PulseValue10000Kwh' }

	export enum OutputConfigurationContainerType { ImpulseOutputActiveEnergy = 'ImpulseOutputActiveEnergy', ImpulseOutputActiveEnergyImport = 'ImpulseOutputActiveEnergyImport', ImpulseOutputActiveEnergyExport = 'ImpulseOutputActiveEnergyExport', ImpulseOutputReactiveEnergy = 'ImpulseOutputReactiveEnergy', DigitalOutput = 'DigitalOutput', AnalogPwmSignalOutput = 'AnalogPwmSignalOutput', Disabled = 'Disabled' }


	/** Container class for the pico charging station API */
	export interface PicoChargingData {

		/**
		 * The energy used by this active charging (in kWh)
		 * Type: double
		 */
		ActiveChargingEnergy?: number | null;

		/**
		 * The power of the active charging (in kW)
		 * Type: double
		 */
		ActiveChargingPower?: number | null;

		/** The mode how this station is connected to the cloud */
		ConnectionMode?: PicoChargingDataConnectionMode | null;

		/**
		 * The duration of this charging in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Duration?: number | null;

		/** The last warning or error of the station. This message is only shown if the warning or error happend in the last 5 minutes. */
		LastWarningOrError?: PicoChargingDataLastWarningOrError | null;

		/** The message of the last warning or error of the station. */
		LastWarningOrErrorMessage?: string | null;

		/** The time when the LastWarningOrError happend */
		LastWarningOrErrorTime?: Date | null;

		/** Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A */
		LoadSheddingState?: PicoChargingDataLoadSheddingState | null;

		/** The name of the loadmanagement group. Or string.empty if the station is not in a group */
		LoadmanagementGroupName?: string | null;

		/**
		 * Max allowed charging current in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxAllowedChargingCurrent?: number | null;

		/**
		 * Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxDynamicCurrent?: number | null;

		/**
		 * Max. current of the loadmanagement group of this station (if there is any) in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxLoadmanagementGroupCurrent?: number | null;

		/**
		 * Max. current of the station in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxStationCurrent?: number | null;

		/**
		 * Min. current of the station in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinStationCurrent?: number | null;

		/**
		 * Received Signal Strength Indicator for the connection mode (wifi or mobile).
		 * -127 (min) to 0 (Max)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RSSI?: number | null;

		/** The state of the charging station */
		State?: DeviceChargingStationState | null;

		/** The date of this values */
		ValueDate?: Date | null;
	}

	/** Container class for the pico charging station API */
	export interface PicoChargingDataFormProperties {

		/**
		 * The energy used by this active charging (in kWh)
		 * Type: double
		 */
		ActiveChargingEnergy: FormControl<number | null | undefined>,

		/**
		 * The power of the active charging (in kW)
		 * Type: double
		 */
		ActiveChargingPower: FormControl<number | null | undefined>,

		/** The mode how this station is connected to the cloud */
		ConnectionMode: FormControl<PicoChargingDataConnectionMode | null | undefined>,

		/**
		 * The duration of this charging in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Duration: FormControl<number | null | undefined>,

		/** The last warning or error of the station. This message is only shown if the warning or error happend in the last 5 minutes. */
		LastWarningOrError: FormControl<PicoChargingDataLastWarningOrError | null | undefined>,

		/** The message of the last warning or error of the station. */
		LastWarningOrErrorMessage: FormControl<string | null | undefined>,

		/** The time when the LastWarningOrError happend */
		LastWarningOrErrorTime: FormControl<Date | null | undefined>,

		/** Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A */
		LoadSheddingState: FormControl<PicoChargingDataLoadSheddingState | null | undefined>,

		/** The name of the loadmanagement group. Or string.empty if the station is not in a group */
		LoadmanagementGroupName: FormControl<string | null | undefined>,

		/**
		 * Max allowed charging current in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxAllowedChargingCurrent: FormControl<number | null | undefined>,

		/**
		 * Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxDynamicCurrent: FormControl<number | null | undefined>,

		/**
		 * Max. current of the loadmanagement group of this station (if there is any) in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxLoadmanagementGroupCurrent: FormControl<number | null | undefined>,

		/**
		 * Max. current of the station in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxStationCurrent: FormControl<number | null | undefined>,

		/**
		 * Min. current of the station in A
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinStationCurrent: FormControl<number | null | undefined>,

		/**
		 * Received Signal Strength Indicator for the connection mode (wifi or mobile).
		 * -127 (min) to 0 (Max)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		RSSI: FormControl<number | null | undefined>,

		/** The state of the charging station */
		State: FormControl<DeviceChargingStationState | null | undefined>,

		/** The date of this values */
		ValueDate: FormControl<Date | null | undefined>,
	}
	export function CreatePicoChargingDataFormGroup() {
		return new FormGroup<PicoChargingDataFormProperties>({
			ActiveChargingEnergy: new FormControl<number | null | undefined>(undefined),
			ActiveChargingPower: new FormControl<number | null | undefined>(undefined),
			ConnectionMode: new FormControl<PicoChargingDataConnectionMode | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			LastWarningOrError: new FormControl<PicoChargingDataLastWarningOrError | null | undefined>(undefined),
			LastWarningOrErrorMessage: new FormControl<string | null | undefined>(undefined),
			LastWarningOrErrorTime: new FormControl<Date | null | undefined>(undefined),
			LoadSheddingState: new FormControl<PicoChargingDataLoadSheddingState | null | undefined>(undefined),
			LoadmanagementGroupName: new FormControl<string | null | undefined>(undefined),
			MaxAllowedChargingCurrent: new FormControl<number | null | undefined>(undefined),
			MaxDynamicCurrent: new FormControl<number | null | undefined>(undefined),
			MaxLoadmanagementGroupCurrent: new FormControl<number | null | undefined>(undefined),
			MaxStationCurrent: new FormControl<number | null | undefined>(undefined),
			MinStationCurrent: new FormControl<number | null | undefined>(undefined),
			RSSI: new FormControl<number | null | undefined>(undefined),
			State: new FormControl<DeviceChargingStationState | null | undefined>(undefined),
			ValueDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PicoChargingDataConnectionMode { NetworkToCloudConnectionMode_NoConnection = 'NetworkToCloudConnectionMode_NoConnection', NetworkToCloudConnectionMode_DirectWiFiConnection = 'NetworkToCloudConnectionMode_DirectWiFiConnection', NetworkToCloudConnectionMode_GPRSConnection = 'NetworkToCloudConnectionMode_GPRSConnection', NetworkToCloudConnectionMode_NBIotConnection = 'NetworkToCloudConnectionMode_NBIotConnection', NetworkToCloudConnectionMode_LteCatM1Connection = 'NetworkToCloudConnectionMode_LteCatM1Connection', NetworkToCloudConnectionMode_MeshWiFiConnection = 'NetworkToCloudConnectionMode_MeshWiFiConnection', NetworkToCloudConnectionMode_MeshMobileConnection = 'NetworkToCloudConnectionMode_MeshMobileConnection' }

	export enum PicoChargingDataLastWarningOrError { MeterDataloggerEvent = 'MeterDataloggerEvent', MeterRestart = 'MeterRestart', PowerDown = 'PowerDown', MissingPhaseL1 = 'MissingPhaseL1', MissingPhaseL2 = 'MissingPhaseL2', MissingPhaseL3 = 'MissingPhaseL3', TamperDetectionCover = 'TamperDetectionCover', MagneticFieldDetection = 'MagneticFieldDetection', ClockAdjusted = 'ClockAdjusted', Overvoltage = 'Overvoltage', Undervoltage = 'Undervoltage', OvervoltageL1 = 'OvervoltageL1', OvervoltageL2 = 'OvervoltageL2', OvervoltageL3 = 'OvervoltageL3', ChargingTransaction = 'ChargingTransaction', PicoErrorControllerPanic = 'PicoErrorControllerPanic', PicoErrorMidServicePanic = 'PicoErrorMidServicePanic', PicoWarningRcdTriggered = 'PicoWarningRcdTriggered', PicoWarningCableLockError = 'PicoWarningCableLockError', PicoWarningDiodeFailure = 'PicoWarningDiodeFailure', PicoWarningOverload = 'PicoWarningOverload', PicoWarningHighTemperature = 'PicoWarningHighTemperature' }

	export enum PicoChargingDataLoadSheddingState { MaxCurrent = 'MaxCurrent', HalfCurrent = 'HalfCurrent', MinCurrent = 'MinCurrent', NoCurrent = 'NoCurrent' }


	/** Api container for the charging station history */
	export interface PicoChargingHistoryData {

		/**
		 * The duration in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Duration?: number | null;

		/**
		 * The energy used (in kWh)
		 * Type: double
		 */
		EnergyUsed?: number | null;

		/** The starttime of the charging (in UTC) */
		StartTime?: Date | null;
		TransactionStopReason?: PicoChargingHistoryDataTransactionStopReason | null;
	}

	/** Api container for the charging station history */
	export interface PicoChargingHistoryDataFormProperties {

		/**
		 * The duration in seconds
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Duration: FormControl<number | null | undefined>,

		/**
		 * The energy used (in kWh)
		 * Type: double
		 */
		EnergyUsed: FormControl<number | null | undefined>,

		/** The starttime of the charging (in UTC) */
		StartTime: FormControl<Date | null | undefined>,
		TransactionStopReason: FormControl<PicoChargingHistoryDataTransactionStopReason | null | undefined>,
	}
	export function CreatePicoChargingHistoryDataFormGroup() {
		return new FormGroup<PicoChargingHistoryDataFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined),
			EnergyUsed: new FormControl<number | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			TransactionStopReason: new FormControl<PicoChargingHistoryDataTransactionStopReason | null | undefined>(undefined),
		});

	}

	export enum PicoChargingHistoryDataTransactionStopReason { Unknown = 'Unknown', CarDisconnected = 'CarDisconnected', RemoteStop = 'RemoteStop', ErrorStop = 'ErrorStop', InstallationMode = 'InstallationMode', CableError = 'CableError', DiodeError = 'DiodeError', RcdError = 'RcdError', OverloadError = 'OverloadError' }


	/** DTO for the pico loadmanagement group */
	export interface PicoLoadmanagementGroupDto {

		/** The ID of the loadmanagement group */
		Id?: string | null;

		/**
		 * The max current of this loadmanagement group
		 * Type: double
		 */
		MaxCurrent?: number | null;

		/** The name of the station */
		Name?: string | null;

		/**
		 * The number of assigned stations
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NumberOfStations?: number | null;
	}

	/** DTO for the pico loadmanagement group */
	export interface PicoLoadmanagementGroupDtoFormProperties {

		/** The ID of the loadmanagement group */
		Id: FormControl<string | null | undefined>,

		/**
		 * The max current of this loadmanagement group
		 * Type: double
		 */
		MaxCurrent: FormControl<number | null | undefined>,

		/** The name of the station */
		Name: FormControl<string | null | undefined>,

		/**
		 * The number of assigned stations
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NumberOfStations: FormControl<number | null | undefined>,
	}
	export function CreatePicoLoadmanagementGroupDtoFormGroup() {
		return new FormGroup<PicoLoadmanagementGroupDtoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			MaxCurrent: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NumberOfStations: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** DTO for the pico charging station settings */
	export interface PicoSettingsDto {

		/** The authentication type */
		AuthenticationType?: PicoSettingsDtoAuthenticationType | null;

		/** Flag if the car id detection is enabled */
		CarIdDetection?: boolean | null;

		/** The Brightness of the LCD Matrix display. 0 = minimum, 255 = maximum */
		DisplayBrightness?: string | null;

		/** The DNS name of the pico's internal ip */
		DnsName?: string | null;

		/** Enable the fix lock of the charging cable */
		FixCableLockEnable?: boolean | null;

		/** The url of the idle image */
		IdleImageUrl?: string | null;

		/** The internal IP address */
		InternalIp?: string | null;

		/** The ID of the loadmanagement group */
		LoadmanagementGroupId?: string | null;

		/**
		 * The max current of this station (in A)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxCurrent?: number | null;

		/**
		 * The max current of this station (in A)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinCurrent?: number | null;

		/** Flag if ModbusTcp is enabled */
		ModbusTcp?: boolean | null;

		/** The name of the station */
		Name?: string | null;

		/** The Serial number of the station */
		SerialNumber?: string | null;
	}

	/** DTO for the pico charging station settings */
	export interface PicoSettingsDtoFormProperties {

		/** The authentication type */
		AuthenticationType: FormControl<PicoSettingsDtoAuthenticationType | null | undefined>,

		/** Flag if the car id detection is enabled */
		CarIdDetection: FormControl<boolean | null | undefined>,

		/** The Brightness of the LCD Matrix display. 0 = minimum, 255 = maximum */
		DisplayBrightness: FormControl<string | null | undefined>,

		/** The DNS name of the pico's internal ip */
		DnsName: FormControl<string | null | undefined>,

		/** Enable the fix lock of the charging cable */
		FixCableLockEnable: FormControl<boolean | null | undefined>,

		/** The url of the idle image */
		IdleImageUrl: FormControl<string | null | undefined>,

		/** The internal IP address */
		InternalIp: FormControl<string | null | undefined>,

		/** The ID of the loadmanagement group */
		LoadmanagementGroupId: FormControl<string | null | undefined>,

		/**
		 * The max current of this station (in A)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MaxCurrent: FormControl<number | null | undefined>,

		/**
		 * The max current of this station (in A)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MinCurrent: FormControl<number | null | undefined>,

		/** Flag if ModbusTcp is enabled */
		ModbusTcp: FormControl<boolean | null | undefined>,

		/** The name of the station */
		Name: FormControl<string | null | undefined>,

		/** The Serial number of the station */
		SerialNumber: FormControl<string | null | undefined>,
	}
	export function CreatePicoSettingsDtoFormGroup() {
		return new FormGroup<PicoSettingsDtoFormProperties>({
			AuthenticationType: new FormControl<PicoSettingsDtoAuthenticationType | null | undefined>(undefined),
			CarIdDetection: new FormControl<boolean | null | undefined>(undefined),
			DisplayBrightness: new FormControl<string | null | undefined>(undefined),
			DnsName: new FormControl<string | null | undefined>(undefined),
			FixCableLockEnable: new FormControl<boolean | null | undefined>(undefined),
			IdleImageUrl: new FormControl<string | null | undefined>(undefined),
			InternalIp: new FormControl<string | null | undefined>(undefined),
			LoadmanagementGroupId: new FormControl<string | null | undefined>(undefined),
			MaxCurrent: new FormControl<number | null | undefined>(undefined),
			MinCurrent: new FormControl<number | null | undefined>(undefined),
			ModbusTcp: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PicoSettingsDtoAuthenticationType { None = 'None', Backend = 'Backend' }


	/** Container class for the register realtime API API */
	export interface RegisterRealtimeApiData {

		/** The URL of your endpoint. To this endpoint all the values are send to. */
		ApiUrl?: string | null;

		/** The Password (basic auth) of your endpoint. Leave empty of none. */
		BasicAuthPassword?: string | null;

		/** The Username (basic auth) of your endpoint. Leave empty of none. */
		BasicAuthUsername?: string | null;

		/** The ID of the registration */
		Id?: string | null;

		/** The ID of the Meter. Just used if the RegistrationType is "SingleMeterRegistration". */
		MeterId?: string | null;

		/** The Type of this registration (per meter, per user, ...) */
		RegistrationType?: RegisterRealtimeApiDataRegistrationType | null;

		/**
		 * The serial number of the Meter. Just used if the RegistrationType is "SingleMeterRegistration" and the MeterId is null.
		 * Example: 1 SME 01 63000000 or 6300000
		 */
		SerialNumber?: string | null;
	}

	/** Container class for the register realtime API API */
	export interface RegisterRealtimeApiDataFormProperties {

		/** The URL of your endpoint. To this endpoint all the values are send to. */
		ApiUrl: FormControl<string | null | undefined>,

		/** The Password (basic auth) of your endpoint. Leave empty of none. */
		BasicAuthPassword: FormControl<string | null | undefined>,

		/** The Username (basic auth) of your endpoint. Leave empty of none. */
		BasicAuthUsername: FormControl<string | null | undefined>,

		/** The ID of the registration */
		Id: FormControl<string | null | undefined>,

		/** The ID of the Meter. Just used if the RegistrationType is "SingleMeterRegistration". */
		MeterId: FormControl<string | null | undefined>,

		/** The Type of this registration (per meter, per user, ...) */
		RegistrationType: FormControl<RegisterRealtimeApiDataRegistrationType | null | undefined>,

		/**
		 * The serial number of the Meter. Just used if the RegistrationType is "SingleMeterRegistration" and the MeterId is null.
		 * Example: 1 SME 01 63000000 or 6300000
		 */
		SerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateRegisterRealtimeApiDataFormGroup() {
		return new FormGroup<RegisterRealtimeApiDataFormProperties>({
			ApiUrl: new FormControl<string | null | undefined>(undefined),
			BasicAuthPassword: new FormControl<string | null | undefined>(undefined),
			BasicAuthUsername: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			MeterId: new FormControl<string | null | undefined>(undefined),
			RegistrationType: new FormControl<RegisterRealtimeApiDataRegistrationType | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RegisterRealtimeApiDataRegistrationType { Disabled = 'Disabled', SingleMeterRegistration = 'SingleMeterRegistration', UserRegistration = 'UserRegistration' }


	/** API Container class for the meter configuration */
	export interface SmartMeDeviceConfigurationContainer {

		/** The encryption key used to decrypt messages received from an external meter (used only for the smart-me modules) */
		DeviceEncryptionKey?: string | null;

		/** PIN code to enter on a external meter (e.g. for the FNN meters) */
		DevicePinCode?: string | null;

		/** Configuration of the dynamic DNS service. More information: http://wiki.smart-me.com/index.php/Dynamisches_DNS */
		DnsUpdateState?: SmartMeDeviceConfigurationContainerDnsUpdateState | null;

		/** Enables or disables Modbus TCP (if the meter supports it). */
		EnableModbusTcp?: boolean | null;

		/** The ID of the device */
		Id?: string | null;

		/** The configuration for the intput outputs */
		InputConfiguration?: Array<InputConfigurationContainer>;

		/** The configuration for the external outputs */
		OutputConfiguration?: Array<OutputConfigurationContainer>;

		/** Shows the reactive energy values (if the meter supports it). */
		ShowReactiveEnergy?: boolean | null;

		/** The configuration for the phase switches */
		SwitchConfiguration?: Array<SwitchConfigurationContainer>;

		/** Number of seconds the device will upload the data. For smaller values maybe a professional license is needed. */
		UploadInterval?: SmartMeDeviceConfigurationContainerUploadInterval | null;
	}

	/** API Container class for the meter configuration */
	export interface SmartMeDeviceConfigurationContainerFormProperties {

		/** The encryption key used to decrypt messages received from an external meter (used only for the smart-me modules) */
		DeviceEncryptionKey: FormControl<string | null | undefined>,

		/** PIN code to enter on a external meter (e.g. for the FNN meters) */
		DevicePinCode: FormControl<string | null | undefined>,

		/** Configuration of the dynamic DNS service. More information: http://wiki.smart-me.com/index.php/Dynamisches_DNS */
		DnsUpdateState: FormControl<SmartMeDeviceConfigurationContainerDnsUpdateState | null | undefined>,

		/** Enables or disables Modbus TCP (if the meter supports it). */
		EnableModbusTcp: FormControl<boolean | null | undefined>,

		/** The ID of the device */
		Id: FormControl<string | null | undefined>,

		/** Shows the reactive energy values (if the meter supports it). */
		ShowReactiveEnergy: FormControl<boolean | null | undefined>,

		/** Number of seconds the device will upload the data. For smaller values maybe a professional license is needed. */
		UploadInterval: FormControl<SmartMeDeviceConfigurationContainerUploadInterval | null | undefined>,
	}
	export function CreateSmartMeDeviceConfigurationContainerFormGroup() {
		return new FormGroup<SmartMeDeviceConfigurationContainerFormProperties>({
			DeviceEncryptionKey: new FormControl<string | null | undefined>(undefined),
			DevicePinCode: new FormControl<string | null | undefined>(undefined),
			DnsUpdateState: new FormControl<SmartMeDeviceConfigurationContainerDnsUpdateState | null | undefined>(undefined),
			EnableModbusTcp: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			ShowReactiveEnergy: new FormControl<boolean | null | undefined>(undefined),
			UploadInterval: new FormControl<SmartMeDeviceConfigurationContainerUploadInterval | null | undefined>(undefined),
		});

	}

	export enum SmartMeDeviceConfigurationContainerDnsUpdateState { NoUpdate = 'NoUpdate', DnsUpdatePublicIp = 'DnsUpdatePublicIp', DnsUpdateInternalIp = 'DnsUpdateInternalIp' }


	/** The configuration for a phase switch */
	export interface SwitchConfigurationContainer {

		/** Flag if the switch can be turned off or is always on. */
		CanSwitchOff?: boolean | null;

		/**
		 * The number of the phase. (e.g. 1 for Phase L1)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number?: number | null;
	}

	/** The configuration for a phase switch */
	export interface SwitchConfigurationContainerFormProperties {

		/** Flag if the switch can be turned off or is always on. */
		CanSwitchOff: FormControl<boolean | null | undefined>,

		/**
		 * The number of the phase. (e.g. 1 for Phase L1)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Number: FormControl<number | null | undefined>,
	}
	export function CreateSwitchConfigurationContainerFormGroup() {
		return new FormGroup<SwitchConfigurationContainerFormProperties>({
			CanSwitchOff: new FormControl<boolean | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SmartMeDeviceConfigurationContainerUploadInterval { UploadInterval_1s = 'UploadInterval_1s', UploadInterval_5s = 'UploadInterval_5s', UploadInterval_10s = 'UploadInterval_10s', UploadInterval_30s = 'UploadInterval_30s', UploadInterval_60s = 'UploadInterval_60s', UploadInterval_5min = 'UploadInterval_5min', UploadInterval_15min = 'UploadInterval_15min', UploadInterval_30min = 'UploadInterval_30min', UploadInterval_60min = 'UploadInterval_60min', UploadInterval_6h = 'UploadInterval_6h', UploadInterval_12h = 'UploadInterval_12h', UploadInterval_24h = 'UploadInterval_24h' }


	/** Container data for the sub user */
	export interface SubUserData {

		/** The end date. until this date the user has access */
		AccessEndDate?: Date | null;

		/** The start date. From this date the user has access */
		AccessTimeStartDate?: Date | null;

		/** The Email adress */
		Email?: string | null;

		/** The ID of the user */
		Id?: string | null;

		/** If set this is used a new password */
		NewPassword?: string | null;

		/** The permission level of the user */
		PermissionLevel?: SubUserDataPermissionLevel | null;

		/** The username */
		Username?: string | null;
	}

	/** Container data for the sub user */
	export interface SubUserDataFormProperties {

		/** The end date. until this date the user has access */
		AccessEndDate: FormControl<Date | null | undefined>,

		/** The start date. From this date the user has access */
		AccessTimeStartDate: FormControl<Date | null | undefined>,

		/** The Email adress */
		Email: FormControl<string | null | undefined>,

		/** The ID of the user */
		Id: FormControl<string | null | undefined>,

		/** If set this is used a new password */
		NewPassword: FormControl<string | null | undefined>,

		/** The permission level of the user */
		PermissionLevel: FormControl<SubUserDataPermissionLevel | null | undefined>,

		/** The username */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateSubUserDataFormGroup() {
		return new FormGroup<SubUserDataFormProperties>({
			AccessEndDate: new FormControl<Date | null | undefined>(undefined),
			AccessTimeStartDate: new FormControl<Date | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			NewPassword: new FormControl<string | null | undefined>(undefined),
			PermissionLevel: new FormControl<SubUserDataPermissionLevel | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubUserDataPermissionLevel { SelectedFolderAndSubfoldersMeters = 'SelectedFolderAndSubfoldersMeters', SelectedFolderOnly = 'SelectedFolderOnly' }


	/** Container Class for the Web API */
	export interface User {

		/** The Users created by this users. */
		ChildUsers?: Array<User>;

		/** The EMail Address of the User */
		Email?: string | null;

		/**
		 * The ID of the User
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Id?: string | null;

		/** The ID of the user as string */
		IdAsString?: string | null;

		/** Flag if this User is an Admin User */
		IsAdmin?: boolean | null;

		/** Additional Permissions */
		Permissions?: Array<string>;

		/** The Username of the User */
		Username?: string | null;
	}

	/** Container Class for the Web API */
	export interface UserFormProperties {

		/** The EMail Address of the User */
		Email: FormControl<string | null | undefined>,

		/**
		 * The ID of the User
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		Id: FormControl<string | null | undefined>,

		/** The ID of the user as string */
		IdAsString: FormControl<string | null | undefined>,

		/** Flag if this User is an Admin User */
		IsAdmin: FormControl<boolean | null | undefined>,

		/** The Username of the User */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IdAsString: new FormControl<string | null | undefined>(undefined),
			IsAdmin: new FormControl<boolean | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Actives a virtual Meter */
	export interface VMeterToActivate {

		/** The Serialnumber of the Meter to activate. */
		SerialNumber?: string | null;
	}

	/** Actives a virtual Meter */
	export interface VMeterToActivateFormProperties {

		/** The Serialnumber of the Meter to activate. */
		SerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateVMeterToActivateFormGroup() {
		return new FormGroup<VMeterToActivateFormProperties>({
			SerialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deactivates a virtual Meter */
	export interface VMeterToDeactivate {

		/** The ID of the Virtual meter to deactivate */
		ID?: string | null;
	}

	/** Deactivates a virtual Meter */
	export interface VMeterToDeactivateFormProperties {

		/** The ID of the Virtual meter to deactivate */
		ID: FormControl<string | null | undefined>,
	}
	export function CreateVMeterToDeactivateFormGroup() {
		return new FormGroup<VMeterToDeactivateFormProperties>({
			ID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** API Container for a (Device) Value */
	export interface ValueData {

		/**
		 * The Obis code of this value.
		 * A description you can find here:
		 * http://wiki.smart-me.com/index.php/Obis_codes
		 */
		Obis?: string | null;

		/**
		 * The Value
		 * Type: double
		 */
		Value?: number | null;
	}

	/** API Container for a (Device) Value */
	export interface ValueDataFormProperties {

		/**
		 * The Obis code of this value.
		 * A description you can find here:
		 * http://wiki.smart-me.com/index.php/Obis_codes
		 */
		Obis: FormControl<string | null | undefined>,

		/**
		 * The Value
		 * Type: double
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateValueDataFormGroup() {
		return new FormGroup<ValueDataFormProperties>({
			Obis: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** API Container for a Meter Value */
	export interface ValuesData {

		/** The Date of the Value */
		Date?: Date | null;

		/** The ID of the device */
		DeviceId?: string | null;

		/** All values */
		Values?: Array<ValueData>;
	}

	/** API Container for a Meter Value */
	export interface ValuesDataFormProperties {

		/** The Date of the Value */
		Date: FormControl<Date | null | undefined>,

		/** The ID of the device */
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateValuesDataFormGroup() {
		return new FormGroup<ValuesDataFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VirtualTariff {

		/**
		 * Says how many of the active power is used in this tariff. This is calculated from the last meter values.
		 * Type: double
		 */
		Factor?: number | null;
		Id?: string | null;
		Name?: string | null;
		Type?: VirtualTariffType | null;
		Unit?: string | null;

		/**
		 * The Counter Value of this tariff
		 * Type: double
		 */
		Value?: number | null;
	}
	export interface VirtualTariffFormProperties {

		/**
		 * Says how many of the active power is used in this tariff. This is calculated from the last meter values.
		 * Type: double
		 */
		Factor: FormControl<number | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<VirtualTariffType | null | undefined>,
		Unit: FormControl<string | null | undefined>,

		/**
		 * The Counter Value of this tariff
		 * Type: double
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateVirtualTariffFormGroup() {
		return new FormGroup<VirtualTariffFormProperties>({
			Factor: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<VirtualTariffType | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VirtualTariffType { Battery = 'Battery', Solar = 'Solar', Normal = 'Normal' }


	/** Container class for the virtual tariff consumption */
	export interface VirtualTariffConsumptionData {

		/**
		 * The consumption (e.g. kWh) of this tariff
		 * Type: double
		 */
		Consumption?: number | null;

		/** The currency of the price */
		Currency?: string | null;

		/** The Name of this virtual tariff */
		Name?: string | null;

		/**
		 * The price of the energy in this timerange
		 * Type: double
		 */
		Price?: number | null;

		/** The type of the virtual tariff (e.g. solar) */
		TariffType?: VirtualTariffType | null;
	}

	/** Container class for the virtual tariff consumption */
	export interface VirtualTariffConsumptionDataFormProperties {

		/**
		 * The consumption (e.g. kWh) of this tariff
		 * Type: double
		 */
		Consumption: FormControl<number | null | undefined>,

		/** The currency of the price */
		Currency: FormControl<string | null | undefined>,

		/** The Name of this virtual tariff */
		Name: FormControl<string | null | undefined>,

		/**
		 * The price of the energy in this timerange
		 * Type: double
		 */
		Price: FormControl<number | null | undefined>,

		/** The type of the virtual tariff (e.g. solar) */
		TariffType: FormControl<VirtualTariffType | null | undefined>,
	}
	export function CreateVirtualTariffConsumptionDataFormGroup() {
		return new FormGroup<VirtualTariffConsumptionDataFormProperties>({
			Consumption: new FormControl<number | null | undefined>(undefined),
			Currency: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Price: new FormControl<number | null | undefined>(undefined),
			TariffType: new FormControl<VirtualTariffType | null | undefined>(undefined),
		});

	}

	export interface VirtualTariffsOfFolder {

		/** The DateTime (UTC) of this virtual tarfifs */
		Date?: Date | null;
		FolderId?: string | null;

		/** The name of this folder */
		Name?: string | null;
		VirtualTariffs?: Array<VirtualTariff>;
	}
	export interface VirtualTariffsOfFolderFormProperties {

		/** The DateTime (UTC) of this virtual tarfifs */
		Date: FormControl<Date | null | undefined>,
		FolderId: FormControl<string | null | undefined>,

		/** The name of this folder */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateVirtualTariffsOfFolderFormGroup() {
		return new FormGroup<VirtualTariffsOfFolderFormProperties>({
			Date: new FormControl<Date | null | undefined>(undefined),
			FolderId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a Access Token to write on a Card (e.g. NFC)
		 * Creates a Access Token to write on a Card (e.g. NFC)
		 * Put api/AccessToken
		 * @return {string} OK
		 */
		AccessToken_Put(requestBody: AccessTokenToPut): Observable<string> {
			return this.http.put(this.baseUri + 'api/AccessToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get api/Account/login
		 * @return {Object} OK
		 */
		Account_Login(): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'api/Account/login', {});
		}

		/**
		 * Post api/Account/login
		 * @return {Object} OK
		 */
		AccountPost(): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'api/Account/login', null, {});
		}

		/**
		 * Set an action for the specified device.
		 * Set an action for the specified device.
		 * Post api/Actions
		 * @param {ActionToPost} requestBody The Action Data
		 * @return {void} 
		 */
		Actions_Post(requestBody: ActionToPost): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/Actions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all available Actions of a Device
		 * Gets all available Actions of a Device
		 * Get api/Actions/{id}
		 * @param {string} id The ID of the device
		 * @return {Array<ActionInformation>} OK
		 */
		Actions_Get(id: string): Observable<Array<ActionInformation>> {
			return this.http.get<Array<ActionInformation>>(this.baseUri + 'api/Actions/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets the additional information (e.g. Firmware Version) about a device.
		 * Gets the additional information (e.g. Firmware Version) about a device.
		 * Get api/AdditionalDeviceInformation/{id}
		 * @param {string} id The ID of the device
		 * @return {AdditionalDeviceInformation} OK
		 */
		AdditionalDeviceInformation_Get(id: string): Observable<AdditionalDeviceInformation> {
			return this.http.get<AdditionalDeviceInformation>(this.baseUri + 'api/AdditionalDeviceInformation/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets all Custom Devices
		 * Gets all Devices
		 * Get api/CustomDevice
		 * @return {Array<CustomDeviceToPost>} OK
		 */
		CustomDevice_Get(): Observable<Array<CustomDeviceToPost>> {
			return this.http.get<Array<CustomDeviceToPost>>(this.baseUri + 'api/CustomDevice', {});
		}

		/**
		 * Creates or updates a Custom Device or updates it's values.
		 * Creates or updates a Custom Device or updates it's values.
		 * A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
		 * Only use a custom device for all non meters.
		 * For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
		 * To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
		 * Post api/CustomDevice
		 * @param {CustomDeviceToPost} requestBody Device object with all the data
		 * @return {CustomDeviceToPost} OK
		 */
		CustomDevice_Post(requestBody: CustomDeviceToPost): Observable<CustomDeviceToPost> {
			return this.http.post<CustomDeviceToPost>(this.baseUri + 'api/CustomDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a Custom Device by it's ID
		 * Gets a Device by it's ID
		 * Get api/CustomDevice/{id}
		 * @param {string} id The ID of the device
		 * @return {CustomDeviceToPost} OK
		 */
		CustomDeviceGetById(id: string): Observable<CustomDeviceToPost> {
			return this.http.get<CustomDeviceToPost>(this.baseUri + 'api/CustomDevice/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets a Device by it's Serial Number. The Serial is the part before the "-".
		 * Gets a Device by it's Serial Number. The Serial is the part before the "-".
		 * Get api/DeviceBySerial
		 * @param {string} serial The Serial Number of the device
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Device} OK
		 */
		DeviceBySerial_Get(serial: string): Observable<Device> {
			return this.http.get<Device>(this.baseUri + 'api/DeviceBySerial?serial=' + serial, {});
		}

		/**
		 * Gets all Devices
		 * Gets all Devices
		 * Get api/Devices
		 * @return {Array<Device>} OK
		 */
		Devices_Get(): Observable<Array<Device>> {
			return this.http.get<Array<Device>>(this.baseUri + 'api/Devices', {});
		}

		/**
		 * Creates or updates a Device or updates it's values.
		 * Creates or updates a Device or updates it's values.
		 * For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
		 * To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)
		 * Post api/Devices
		 * @param {DeviceToPost} requestBody Device object with all the data
		 * @return {DeviceToPost} OK
		 */
		Devices_Post(requestBody: DeviceToPost): Observable<DeviceToPost> {
			return this.http.post<DeviceToPost>(this.baseUri + 'api/Devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a Device by it's ID
		 * Gets a Device by it's ID
		 * Get api/Devices/{id}
		 * @param {string} id The ID of the device
		 * @return {Device} OK
		 */
		DevicesGetById(id: string): Observable<Device> {
			return this.http.get<Device>(this.baseUri + 'api/Devices/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates the On/Off Switch on a device.
		 * For new implementations please use the "actions" command
		 * Updates the On/Off Switch on a device
		 * For new implementations please use the "actions" command
		 * Put api/Devices/{id}
		 * @param {string} id The ID of the device
		 * @param {boolean} switchState The new state of the switch
		 * @param {number} switchNumber The number of the switch if there are multiple (1 for L1, 3 for L3)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Object} OK
		 */
		Devices_Put(id: string, switchState: boolean, switchNumber: number | null | undefined): Observable<Object> {
			return this.http.put<Object>(this.baseUri + 'api/Devices/' + (id == null ? '' : encodeURIComponent(id)) + '&switchState=' + switchState + '&switchNumber=' + switchNumber, null, {});
		}

		/**
		 * Gets all Devices for an Energy Type
		 * Gets all Devices for an Energy Type
		 * Get api/DevicesByEnergy
		 * @return {Array<Device>} OK
		 */
		DevicesByEnergy_Get(meterEnergyType: DeviceDeviceEnergyType): Observable<Array<Device>> {
			return this.http.get<Array<Device>>(this.baseUri + 'api/DevicesByEnergy?meterEnergyType=' + meterEnergyType, {});
		}

		/**
		 * Gets all Devices by it's Sub Type (e.g. E-Charging Station)
		 * Gets all Devices by it's Sub Type (e.g. E-Charging Station)
		 * Get api/DevicesBySubType
		 * @return {Array<Device>} OK
		 */
		DevicesBySubType_Get(meterSubType: DeviceMeterSubType): Observable<Array<Device>> {
			return this.http.get<Array<Device>>(this.baseUri + 'api/DevicesBySubType?meterSubType=' + meterSubType, {});
		}

		/**
		 * Force a device to send the data every second (if supported). This for about 30s.
		 * Don't use this call to force a device to send the data every second for a longer time.
		 * Get api/FastSendDeviceValues/{id}
		 * @return {void} 
		 */
		FastSendDeviceValues_Get(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/FastSendDeviceValues/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Values for a folder or a meter
		 * Gets the Values for a folder or a meter
		 * Get api/Folder/{id}
		 * @return {FolderData} OK
		 */
		Folder_Get(id: string): Observable<FolderData> {
			return this.http.get<FolderData>(this.baseUri + 'api/Folder/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets the folder menu items (each item might contain child items)
		 * Get api/FolderMenu
		 * @param {string} filter (optional) Filter for the folders and meters: 
		 *             all: load everything
		 *             assigned: load only folders and meters that are assigend to a folder
		 *             unassigend: load only meters that are not assigend to a folder
		 *             user: load only folder and all users assigned to this folders
		 *             subuserlist: load all subusers as a list
		 * @return {FolderMenuConfiguration} OK
		 */
		FolderMenu_Get(filter: string | null | undefined): Observable<FolderMenuConfiguration> {
			return this.http.get<FolderMenuConfiguration>(this.baseUri + 'api/FolderMenu?filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Creates and updates the folder menu items
		 * Post api/FolderMenu
		 * @return {void} 
		 */
		FolderMenu_Post(requestBody: FolderMenuConfiguration): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/FolderMenu', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * A method returning HTTP 200 OK when queried.
		 * It is used by Kubernetes probes to determine whether the app is healthy.
		 * Get api/Health
		 * @return {Object} OK
		 */
		Health_Get(): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'api/Health', {});
		}

		/**
		 * M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
		 * Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
		 * M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
		 * Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
		 * Post api/MBus
		 * @param {MBusData} requestBody The M-BUS Telegram
		 * @return {Object} OK
		 */
		MBus_Post(requestBody: MBusData): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'api/MBus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the Name of a Meter or a Folder
		 * Sets the Name of a Meter or a Folder
		 * Post api/MeterFolderInformation
		 * @return {void} 
		 */
		MeterFolderInformation_Post(requestBody: MeterFolderInformationToPost): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/MeterFolderInformation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Beta: Gets the General Information for a Meter or a Folder
		 * Beta: Gets the General Information for a Meter or a Folder
		 * Get api/MeterFolderInformation/{id}
		 * @return {MeterFolderInformation} OK
		 */
		MeterFolderInformation_Get(id: string): Observable<MeterFolderInformation> {
			return this.http.get<MeterFolderInformation>(this.baseUri + 'api/MeterFolderInformation/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets the Values for a Meter at a given Date.
		 * The first Value found before the given Date is returned.
		 * Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.
		 * Get api/MeterValues/{id}
		 * @return {DeviceInPast} OK
		 */
		MeterValues_Get(id: string, date: Date): Observable<DeviceInPast> {
			return this.http.get<DeviceInPast>(this.baseUri + 'api/MeterValues/' + (id == null ? '' : encodeURIComponent(id)) + '&date=' + date.toISOString(), {});
		}

		/**
		 * Gets all registrations for the Realtime API.
		 * Gets all registrations for the Realtime API.
		 * Get api/RegisterForRealtimeApi
		 * @return {Array<RegisterRealtimeApiData>} OK
		 */
		RegisterForRealtimeApi_Get(): Observable<Array<RegisterRealtimeApiData>> {
			return this.http.get<Array<RegisterRealtimeApiData>>(this.baseUri + 'api/RegisterForRealtimeApi', {});
		}

		/**
		 * Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud.
		 * More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
		 * Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx
		 * Post api/RegisterForRealtimeApi
		 * @return {void} 
		 */
		RegisterForRealtimeApi_Post(requestBody: RegisterRealtimeApiData): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/RegisterForRealtimeApi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a realtime API registration.
		 * Deletes a realtime API registration.
		 * Delete api/RegisterForRealtimeApi/{id}
		 * @param {string} id The ID of the realtime API registration
		 * @return {void} 
		 */
		RegisterForRealtimeApi_Delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/RegisterForRealtimeApi/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the configuration of a smart-me device. The device needs to be online.
		 * Post api/SmartMeDeviceConfiguration
		 * @return {void} 
		 */
		SmartMeDeviceConfiguration_Post(requestBody: SmartMeDeviceConfigurationContainer): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/SmartMeDeviceConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the configuration of a smart-me device.
		 * Get api/SmartMeDeviceConfiguration/{id}
		 * @return {SmartMeDeviceConfigurationContainer} OK
		 */
		SmartMeDeviceConfiguration_Get(id: string): Observable<SmartMeDeviceConfigurationContainer> {
			return this.http.get<SmartMeDeviceConfigurationContainer>(this.baseUri + 'api/SmartMeDeviceConfiguration/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Creates or updates a subuser.
		 * To create a new user set no ID (empty)
		 * Post api/SubUser
		 * @return {void} 
		 */
		SubUser_Post(requestBody: SubUserData): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/SubUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a subuser
		 * Delete api/SubUser/{id}
		 * @return {void} 
		 */
		SubUser_Delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/SubUser/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a sub user. The user must be assigend to the user that makes this call.
		 * Get api/SubUser/{id}
		 * @return {SubUserData} OK
		 */
		SubUser_Get(id: string): Observable<SubUserData> {
			return this.http.get<SubUserData>(this.baseUri + 'api/SubUser/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Triggers user account deletion.
		 * Delete api/User
		 * @return {Object} OK
		 */
		User_Delete(): Observable<Object> {
			return this.http.delete<Object>(this.baseUri + 'api/User', {});
		}

		/**
		 * Gets the informations for the user.
		 * Gets the informations for the user.
		 * Get api/User
		 * @return {User} OK
		 */
		User_Get(): Observable<User> {
			return this.http.get<User>(this.baseUri + 'api/User', {});
		}

		/**
		 * Gets all (last) values of a device
		 * Get api/Values/{id}
		 * @param {string} id The ID of the device
		 * @return {ValuesData} OK
		 */
		Values_Get(id: string): Observable<ValuesData> {
			return this.http.get<ValuesData>(this.baseUri + 'api/Values/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets all (last) values of a device
		 * The first Value found before the given Date is returned.
		 * Gets the Values for a device at a given Date. The first Value found before the given Date is returned.
		 * Get api/ValuesInPast/{id}
		 * @param {string} id The ID of the device
		 * @param {Date} date the date of the value
		 * @return {ValuesData} OK
		 */
		ValuesInPast_Get(id: string, date: Date): Observable<ValuesData> {
			return this.http.get<ValuesData>(this.baseUri + 'api/ValuesInPast/' + (id == null ? '' : encodeURIComponent(id)) + '&date=' + date.toISOString(), {});
		}

		/**
		 * Gets multiple values of a device. This call needs a smart-me professional licence.
		 * Get api/ValuesInPastMultiple/{id}
		 * @param {string} id The ID of the device
		 * @param {Date} startDate The date when the first value should start
		 * @param {Date} endDate The date when the last value should start
		 * @param {number} interval The interval in minutes betwenn the values. 0 means as fast as possible. Only 1000 values can be get in one call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<ValuesData>} OK
		 */
		ValuesInPastMultiple_Get(id: string, startDate: Date, endDate: Date, interval: number): Observable<Array<ValuesData>> {
			return this.http.get<Array<ValuesData>>(this.baseUri + 'api/ValuesInPastMultiple/' + (id == null ? '' : encodeURIComponent(id)) + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&interval=' + interval, {});
		}

		/**
		 * Beta: Gets all active virtual meters
		 * Beta: Gets all active virtual meters.
		 * Get api/VirtualBillingMeterActive
		 * @return {Array<Device>} OK
		 */
		VirtualBillingMeterActive_Get(): Observable<Array<Device>> {
			return this.http.get<Array<Device>>(this.baseUri + 'api/VirtualBillingMeterActive', {});
		}

		/**
		 * Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
		 * Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
		 * Post api/VirtualBillingMeterActive
		 * @param {VMeterToActivate} requestBody The Meter to activate
		 * @return {Device} OK
		 */
		VirtualBillingMeterActive_Post(requestBody: VMeterToActivate): Observable<Device> {
			return this.http.post<Device>(this.baseUri + 'api/VirtualBillingMeterActive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Beta: Virtual Meter API: Deactivates a Virtual Meter.
		 * Beta: Virtual Meter API: Deactivates a Virtual Meter.
		 * Post api/VirtualBillingMeterDeactivate
		 * @param {VMeterToDeactivate} requestBody The Meter to activate
		 * @return {Object} OK
		 */
		VirtualBillingMeterDeactivate_Post(requestBody: VMeterToDeactivate): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'api/VirtualBillingMeterDeactivate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Beta: Gets all Meters available to activate as a Virtual Meter.
		 * Beta: Gets all Meters available to activate as a Virtual Meter.
		 * Get api/VirtualBillingMeters
		 * @return {Array<Device>} OK
		 */
		VirtualBillingMeters_Get(): Observable<Array<Device>> {
			return this.http.get<Array<Device>>(this.baseUri + 'api/VirtualBillingMeters', {});
		}

		/**
		 * Calculates a virtual meter from a formula.
		 * A meter is coded as ID("METERID")
		 * Calculates a virtual meter from a formula.
		 * A meter is coded as ID("METERID")
		 * Ariphmetical operators:
		 * ()  parentheses;
		 * +   plus (a + b);
		 * -  minus (a - b);
		 * *  multiplycation symbol (a * b);
		 * /  divide symbol (a / b);
		 * Example: (ID("63ac09cb-4e5f-4f3e-bd27-ad8c30bdfc0c") + ID("0209555e-9dc4-4e84-a166-a864488b4b12")) * 2
		 * Get api/VirtualMeterCalculateFormula
		 * @return {Device} OK
		 */
		VirtualMeterCalculateFormula_Get(formula: string): Observable<Device> {
			return this.http.get<Device>(this.baseUri + 'api/VirtualMeterCalculateFormula?formula=' + (formula == null ? '' : encodeURIComponent(formula)), {});
		}

		/**
		 * Gets all Virtual Tariffs of a user
		 * Gets all Virtual Tariffs of a user
		 * Get api/VirtualTariff
		 * @return {Array<VirtualTariffsOfFolder>} OK
		 */
		VirtualTariff_Get(): Observable<Array<VirtualTariffsOfFolder>> {
			return this.http.get<Array<VirtualTariffsOfFolder>>(this.baseUri + 'api/VirtualTariff', {});
		}

		/**
		 * Gets all virtual tariffs of a folder
		 * Gets all virtual tariffs of a folder
		 * Get api/VirtualTariff/{id}
		 * @param {string} id The ID of the Folder
		 * @return {VirtualTariffsOfFolder} OK
		 */
		VirtualTariffGetById(id: string): Observable<VirtualTariffsOfFolder> {
			return this.http.get<VirtualTariffsOfFolder>(this.baseUri + 'api/VirtualTariff/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets the consumption of a folder with a virtuall tariffs.
		 * Gets the consumption of a folder with a virtuall tariffs.
		 * Get api/VirtualTariffConsumption
		 * @param {string} folderId The ID of the Folder
		 * @param {Date} startDate The start date (UTC)
		 * @param {Date} endDate The end date (UTC)
		 * @return {Array<VirtualTariffConsumptionData>} OK
		 */
		VirtualTariffConsumption_Get(folderId: string, startDate: Date, endDate: Date): Observable<Array<VirtualTariffConsumptionData>> {
			return this.http.get<Array<VirtualTariffConsumptionData>>(this.baseUri + 'api/VirtualTariffConsumption?folderId=' + (folderId == null ? '' : encodeURIComponent(folderId)) + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString(), {});
		}

		/**
		 * Gets all Virtual Tariffs for a property (folder)
		 * Gets all Virtual Tariffs for a property (folder)
		 * Get api/VirtualTariffsForProperty/{id}
		 * @return {Array<VirtualTariffsOfFolder>} OK
		 */
		VirtualTariffsForProperty_Get(id: string): Observable<Array<VirtualTariffsOfFolder>> {
			return this.http.get<Array<VirtualTariffsOfFolder>>(this.baseUri + 'api/VirtualTariffsForProperty/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets the calculation status for a virtual tariff property
		 * Get api/VirtualTariffsStatusForProperty/{id}
		 * @return {string} OK
		 */
		VirtualTariffsStatusForProperty_Get(id: string): Observable<string> {
			return this.http.get(this.baseUri + 'api/VirtualTariffsStatusForProperty/' + (id == null ? '' : encodeURIComponent(id)), { responseType: 'text' });
		}

		/**
		 * Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.
		 * Post api/folder/assign
		 * @param {string} source The ID of the meter or folder that should be assign
		 * @param {string} target The ID of the meter or folder that should be the parent
		 * @return {void} 
		 */
		FolderAssign_Post(source: string, target: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/folder/assign?source=' + (source == null ? '' : encodeURIComponent(source)) + '&target=' + (target == null ? '' : encodeURIComponent(target)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a folder
		 * Delete api/folder/settings/{id}
		 * @param {string} id The ID of the folder
		 * @return {void} 
		 */
		FolderSettings_Delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/folder/settings/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the settings of a folder or meter
		 * Get api/folder/settings/{id}
		 * @return {FolderSettings} OK
		 */
		FolderSettings_Get(id: string): Observable<FolderSettings> {
			return this.http.get<FolderSettings>(this.baseUri + 'api/folder/settings/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Add or edit a folder or a meter. To add a new folder use and empty ID
		 * Post api/folder/settings/{id}
		 * @param {string} id The ID of the folder or meter to edit. Use and empty ID to add a new folder
		 * @param {FolderSettings} requestBody The folder or meter data
		 * @return {FolderMenuItem} OK
		 */
		FolderSettings_Post(id: string, requestBody: FolderSettings): Observable<FolderMenuItem> {
			return this.http.post<FolderMenuItem>(this.baseUri + 'api/folder/settings/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user to folder assignement
		 * Delete api/folder/user/assign
		 * @param {string} source The ID of the user that should be de-assign
		 * @param {string} target The ID of the folder
		 * @return {void} 
		 */
		UserToFolderAssign_Delete(source: string, target: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/folder/user/assign?source=' + (source == null ? '' : encodeURIComponent(source)) + '&target=' + (target == null ? '' : encodeURIComponent(target)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Assign a user to a folder
		 * Post api/folder/user/assign
		 * @param {string} source The ID of the user that should be assign
		 * @param {string} target The ID of the folder that should be the parent
		 * @param {string} oldFolder The ID of the old folder (in case of a drag and drop to a new folder)
		 * @return {void} 
		 */
		UserToFolderAssign_Post(source: string, target: string, oldFolder: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/folder/user/assign?source=' + (source == null ? '' : encodeURIComponent(source)) + '&target=' + (target == null ? '' : encodeURIComponent(target)) + '&oldFolder=' + (oldFolder == null ? '' : encodeURIComponent(oldFolder)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/oauth/authorize
		 * @return {Object} OK
		 */
		OAuth_Authorize(client_id: string, redirect_uri: string, state: string, scope: string | null | undefined, client_secret: string | null | undefined): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'api/oauth/authorize?client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&client_secret=' + (client_secret == null ? '' : encodeURIComponent(client_secret)), {});
		}

		/**
		 * Post api/oauth/authorize
		 * @return {Object} OK
		 */
		OAuthPostByClient_idAndRedirect_uriAndStateAndScopeAndClient_secret(client_id: string, redirect_uri: string, state: string, scope: string | null | undefined, client_secret: string | null | undefined): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'api/oauth/authorize?client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&client_secret=' + (client_secret == null ? '' : encodeURIComponent(client_secret)), null, {});
		}

		/**
		 * Gets all pico charging stations for this user
		 * Get api/pico
		 * @return {Array<Device>} OK
		 */
		Pico_Get(): Observable<Array<Device>> {
			return this.http.get<Array<Device>>(this.baseUri + 'api/pico', {});
		}

		/**
		 * Gets the active charging data of a pico station
		 * Get api/pico/charging/{id}
		 * @return {PicoChargingData} OK
		 */
		PicoCharging_Get(id: string): Observable<PicoChargingData> {
			return this.http.get<PicoChargingData>(this.baseUri + 'api/pico/charging/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets the last charging history for a pico station
		 * Get api/pico/history/{id}
		 * @return {Array<PicoChargingHistoryData>} OK
		 */
		PicoChargingHistory_Get(id: string): Observable<Array<PicoChargingHistoryData>> {
			return this.http.get<Array<PicoChargingHistoryData>>(this.baseUri + 'api/pico/history/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * GET: api/pico/loadmanagementgroup
		 * Returns all available load management groups
		 * Get api/pico/loadmanagementgroup
		 * @return {Array<PicoLoadmanagementGroupDto>} OK
		 */
		PicoLoadmanagementGroupGet(): Observable<Array<PicoLoadmanagementGroupDto>> {
			return this.http.get<Array<PicoLoadmanagementGroupDto>>(this.baseUri + 'api/pico/loadmanagementgroup', {});
		}

		/**
		 * Sets the dynamic current of a load management group or a single station.
		 * Post api/pico/loadmanagementgroup/current/{serial}
		 * @param {string} serial The serial number can be any pico serial in the group (e.g. 700001)
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} current The dynamic current of the group (in mA)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Object} OK
		 */
		PicoLoadmanagementSetDynamicCurrent_Post(serial: string, current: number): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'api/pico/loadmanagementgroup/current/' + serial + '?current=' + current, null, {});
		}

		/**
		 * GET: api/pico/loadmanagementgroup
		 * Returns a pico load management group by it's id
		 * Get api/pico/loadmanagementgroup/{id}
		 * @return {PicoLoadmanagementGroupDto} OK
		 */
		PicoLoadmanagementGroup_Get(id: string): Observable<PicoLoadmanagementGroupDto> {
			return this.http.get<PicoLoadmanagementGroupDto>(this.baseUri + 'api/pico/loadmanagementgroup/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * GET: api/pico/settings
		 * Returns the settings of a pico charging station.
		 * Get api/pico/settings/{id}
		 * @return {PicoSettingsDto} OK
		 */
		PicoSettings_Get(id: string): Observable<PicoSettingsDto> {
			return this.http.get<PicoSettingsDto>(this.baseUri + 'api/pico/settings/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.
		 * Post api/pico/tryenablecablelock/{id}
		 * @param {string} id The ID of the pico
		 * @return {Object} OK
		 */
		PicoEnableFixCableLock_Post(id: string): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'api/pico/tryenablecablelock/' + (id == null ? '' : encodeURIComponent(id)), null, {});
		}
	}

}

