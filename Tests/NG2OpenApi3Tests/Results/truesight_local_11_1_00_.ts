import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The object encapsulating the output of an operation affecting the PATROL Agent. */
	export interface ActionResponse {

		/** The output of the underlying PSL operation. */
		pslOutput?: string | null;
	}

	/** The object encapsulating the output of an operation affecting the PATROL Agent. */
	export interface ActionResponseFormProperties {

		/** The output of the underlying PSL operation. */
		pslOutput: FormControl<string | null | undefined>,
	}
	export function CreateActionResponseFormGroup() {
		return new FormGroup<ActionResponseFormProperties>({
			pslOutput: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplicationSummary {

		/** The currency in which all energy cost values are being expressed. */
		costUnit?: string | null;

		/** The list of devices attached to the application.<br><u>Note</u>: when using the <b>Applications</b> service, this list is always empty. It is populated only when using the <b>Application Details</b> service. */
		deviceSummaries?: Array<DeviceSummary>;

		/** The unit in which all CO<sub>2</sub> emission values are being expressed. */
		emittedCo2Unit?: string | null;

		/** The unit in which all energy consumption values are being expressed. */
		energyConsumptionUnit?: string | null;

		/** The lowest heating margin among the heating margins of the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin?: number | null;

		/** The percentage of devices attached to the application, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginCoverage?: number | null;

		/** The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceName?: string | null;

		/** The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceUrl?: string | null;

		/** The unit in which the heating margin of the application is being expressed. */
		heatingMarginUnit?: string | null;

		/** The name of the key used to identify the application in the history table. */
		historyParentIdKey?: string | null;

		/** The ID of the application. */
		id?: string | null;

		/** The name of the application. */
		name?: string | null;

		/** The number of devices attached to the application. */
		numberOfDevices?: number | null;

		/** The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneDayConfidence?: number | null;

		/** The daily cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayCost?: number | null;

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one day.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayEmittedCo2?: number | null;

		/** The quantity of energy consumed by the devices attached to the application during one day. */
		oneDayEnergyConsumption?: number | null;

		/** The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneMonthConfidence?: number | null;

		/** The monthly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthCost?: number | null;

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one month.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthEmittedCo2?: number | null;

		/** The quantity of energy consumed by the devices attached to the application during one month. */
		oneMonthEnergyConsumption?: number | null;

		/** The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneYearConfidence?: number | null;

		/** The yearly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearCost?: number | null;

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the application in one year.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearEmittedCo2?: number | null;

		/** The quantity of energy consumed by the devices attached to the application during one year. */
		oneYearEnergyConsumption?: number | null;

		/** The total power consumption of the devices attached to the application. */
		totalPowerConsumption?: number | null;

		/** The unit in which the total power consumption of the devices attached to the application is being expressed. */
		totalPowerConsumptionUnit?: string | null;

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp?: number | null;

		/** The link to the application details. */
		url?: string | null;
	}
	export interface ApplicationSummaryFormProperties {

		/** The currency in which all energy cost values are being expressed. */
		costUnit: FormControl<string | null | undefined>,

		/** The unit in which all CO<sub>2</sub> emission values are being expressed. */
		emittedCo2Unit: FormControl<string | null | undefined>,

		/** The unit in which all energy consumption values are being expressed. */
		energyConsumptionUnit: FormControl<string | null | undefined>,

		/** The lowest heating margin among the heating margins of the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin: FormControl<number | null | undefined>,

		/** The percentage of devices attached to the application, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginCoverage: FormControl<number | null | undefined>,

		/** The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceName: FormControl<string | null | undefined>,

		/** The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceUrl: FormControl<string | null | undefined>,

		/** The unit in which the heating margin of the application is being expressed. */
		heatingMarginUnit: FormControl<string | null | undefined>,

		/** The name of the key used to identify the application in the history table. */
		historyParentIdKey: FormControl<string | null | undefined>,

		/** The ID of the application. */
		id: FormControl<string | null | undefined>,

		/** The name of the application. */
		name: FormControl<string | null | undefined>,

		/** The number of devices attached to the application. */
		numberOfDevices: FormControl<number | null | undefined>,

		/** The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneDayConfidence: FormControl<number | null | undefined>,

		/** The daily cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayCost: FormControl<number | null | undefined>,

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one day.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayEmittedCo2: FormControl<number | null | undefined>,

		/** The quantity of energy consumed by the devices attached to the application during one day. */
		oneDayEnergyConsumption: FormControl<number | null | undefined>,

		/** The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneMonthConfidence: FormControl<number | null | undefined>,

		/** The monthly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthCost: FormControl<number | null | undefined>,

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one month.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthEmittedCo2: FormControl<number | null | undefined>,

		/** The quantity of energy consumed by the devices attached to the application during one month. */
		oneMonthEnergyConsumption: FormControl<number | null | undefined>,

		/** The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneYearConfidence: FormControl<number | null | undefined>,

		/** The yearly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearCost: FormControl<number | null | undefined>,

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the application in one year.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearEmittedCo2: FormControl<number | null | undefined>,

		/** The quantity of energy consumed by the devices attached to the application during one year. */
		oneYearEnergyConsumption: FormControl<number | null | undefined>,

		/** The total power consumption of the devices attached to the application. */
		totalPowerConsumption: FormControl<number | null | undefined>,

		/** The unit in which the total power consumption of the devices attached to the application is being expressed. */
		totalPowerConsumptionUnit: FormControl<string | null | undefined>,

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp: FormControl<number | null | undefined>,

		/** The link to the application details. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			costUnit: new FormControl<string | null | undefined>(undefined),
			emittedCo2Unit: new FormControl<string | null | undefined>(undefined),
			energyConsumptionUnit: new FormControl<string | null | undefined>(undefined),
			heatingMargin: new FormControl<number | null | undefined>(undefined),
			heatingMarginCoverage: new FormControl<number | null | undefined>(undefined),
			heatingMarginDeviceName: new FormControl<string | null | undefined>(undefined),
			heatingMarginDeviceUrl: new FormControl<string | null | undefined>(undefined),
			heatingMarginUnit: new FormControl<string | null | undefined>(undefined),
			historyParentIdKey: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numberOfDevices: new FormControl<number | null | undefined>(undefined),
			oneDayConfidence: new FormControl<number | null | undefined>(undefined),
			oneDayCost: new FormControl<number | null | undefined>(undefined),
			oneDayEmittedCo2: new FormControl<number | null | undefined>(undefined),
			oneDayEnergyConsumption: new FormControl<number | null | undefined>(undefined),
			oneMonthConfidence: new FormControl<number | null | undefined>(undefined),
			oneMonthCost: new FormControl<number | null | undefined>(undefined),
			oneMonthEmittedCo2: new FormControl<number | null | undefined>(undefined),
			oneMonthEnergyConsumption: new FormControl<number | null | undefined>(undefined),
			oneYearConfidence: new FormControl<number | null | undefined>(undefined),
			oneYearCost: new FormControl<number | null | undefined>(undefined),
			oneYearEmittedCo2: new FormControl<number | null | undefined>(undefined),
			oneYearEnergyConsumption: new FormControl<number | null | undefined>(undefined),
			totalPowerConsumption: new FormControl<number | null | undefined>(undefined),
			totalPowerConsumptionUnit: new FormControl<string | null | undefined>(undefined),
			updateTimestamp: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceSummary {

		/** The ID of the PATROL Agent the device is attached to. */
		agentId?: number | null;

		/** The name of the PATROL Agent the device is attached to. */
		agentName?: string | null;

		/** The ambient temperature of the device. */
		ambientTemperature?: number | null;

		/** The collection time of the heating margin (as an Epoch time, in seconds).<br><u>Note</u>:This field will only be present if a value could be found. */
		collectTime?: string | null;

		/** The TSMOKey of the device. */
		deviceTSMOKey?: string | null;

		/** The link to the device details. */
		deviceUrl?: string | null;

		/** The heating margin of the device.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin?: number | null;

		/** The unit in which the heating margin of the device is being expressed.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginUnit?: string | null;

		/** The ID of the device. */
		id?: number | null;

		/** The ID of the device. */
		name?: string | null;

		/** The power consumption of the device. */
		powerConsumption?: number | null;

		/** The unit in which the power consumption of the device is being expressed. */
		powerConsumptionUnit?: string | null;

		/** The Hardware Sentry KM version of the device's Monitor.<br><u>Note</u>:This field will only be present if a value could be found. */
		productVersion?: string | null;

		/** The ID of the server the device is attached to. */
		serverId?: number | null;

		/** The name of the server the device is attached to. */
		serverName?: string | null;

		/** The SID of the device. */
		sid?: string | null;
		type?: DeviceSummaryType | null;

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp?: number | null;
	}
	export interface DeviceSummaryFormProperties {

		/** The ID of the PATROL Agent the device is attached to. */
		agentId: FormControl<number | null | undefined>,

		/** The name of the PATROL Agent the device is attached to. */
		agentName: FormControl<string | null | undefined>,

		/** The ambient temperature of the device. */
		ambientTemperature: FormControl<number | null | undefined>,

		/** The collection time of the heating margin (as an Epoch time, in seconds).<br><u>Note</u>:This field will only be present if a value could be found. */
		collectTime: FormControl<string | null | undefined>,

		/** The TSMOKey of the device. */
		deviceTSMOKey: FormControl<string | null | undefined>,

		/** The link to the device details. */
		deviceUrl: FormControl<string | null | undefined>,

		/** The heating margin of the device.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin: FormControl<number | null | undefined>,

		/** The unit in which the heating margin of the device is being expressed.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginUnit: FormControl<string | null | undefined>,

		/** The ID of the device. */
		id: FormControl<number | null | undefined>,

		/** The ID of the device. */
		name: FormControl<string | null | undefined>,

		/** The power consumption of the device. */
		powerConsumption: FormControl<number | null | undefined>,

		/** The unit in which the power consumption of the device is being expressed. */
		powerConsumptionUnit: FormControl<string | null | undefined>,

		/** The Hardware Sentry KM version of the device's Monitor.<br><u>Note</u>:This field will only be present if a value could be found. */
		productVersion: FormControl<string | null | undefined>,

		/** The ID of the server the device is attached to. */
		serverId: FormControl<number | null | undefined>,

		/** The name of the server the device is attached to. */
		serverName: FormControl<string | null | undefined>,

		/** The SID of the device. */
		sid: FormControl<string | null | undefined>,
		type: FormControl<DeviceSummaryType | null | undefined>,

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateDeviceSummaryFormGroup() {
		return new FormGroup<DeviceSummaryFormProperties>({
			agentId: new FormControl<number | null | undefined>(undefined),
			agentName: new FormControl<string | null | undefined>(undefined),
			ambientTemperature: new FormControl<number | null | undefined>(undefined),
			collectTime: new FormControl<string | null | undefined>(undefined),
			deviceTSMOKey: new FormControl<string | null | undefined>(undefined),
			deviceUrl: new FormControl<string | null | undefined>(undefined),
			heatingMargin: new FormControl<number | null | undefined>(undefined),
			heatingMarginUnit: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			powerConsumption: new FormControl<number | null | undefined>(undefined),
			powerConsumptionUnit: new FormControl<string | null | undefined>(undefined),
			productVersion: new FormControl<string | null | undefined>(undefined),
			serverId: new FormControl<number | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DeviceSummaryType | null | undefined>(undefined),
			updateTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DeviceSummaryType { DEFAULT = 0, ESX_HOST = 1, VIRTUAL_MACHINE = 2, VIRTUAL_CENTER = 3, XEN_HOST = 4, XEN_MASTER_SERVER = 5, XEN_VIRTUAL_MACHINE = 6, XENAPP_CONTROLLER = 7, XENAPP_MACHINE = 8, VBLOCK_ESX = 9, VBLOCK_VIRTUAL_MACHINE = 10, VBLOCK_SWITCH = 11, VBLOCK_STORAGE = 12, VBLOCK_CHASSIS = 13, VBLOCK_BLADE = 14, VBLOCK_ENV = 15, AIX_BOX = 16, AIX_HARD_PARTITION = 17, AIX_POOL = 18, AIX_LPAR = 19, AIX_WPAR = 20, SOL_SYSTEM = 21, SOL_FRAME = 22, SOL_ZONE = 23, SOL_LDOM = 24, REDHAT_KVM_HOST = 25, REDHAT_KVM_GUEST_INSTANCE = 26, REDHAT_XEN_HOST = 27, REDHAT_VM = 28, HP_SYSTEM = 29, HP_NPAR = 30, HP_VPAR = 31, HP_INT_VM = 32, HP_INT_HOST = 33, MS_HOST = 34, MS_VM = 35, AZURE_VIRTUALMACHINE = 36, AMAZON_EC2 = 37, OS400_HOST = 38, DOCKER_HOST = 39, DOCKER_NODE = 40, DOCKER_CONTAINER = 41, ROUTER = 42, HUB = 43, PRINTER = 44, REPEATER = 45, WORKSTATION = 46, NTSERVER = 47, PRINETSERVER = 48, RMONPROBE = 49, WEBSERVER = 50, DBSERVER = 51, MAILSERVER = 52, FIREWALL = 53, OTHERS = 54, APPSERVER = 55, DEDICATEDAGENT = 56, REMOTEAGENT = 57, LAYER_3_SWITCH = 58, CENTRAL_OFFICE_SWITCH = 59, ACCESS_SERVER = 60, I_O = 61, WEB_CACHING = 62, MANAGEMENT = 63, BLOCK_SERVER = 64, FILE_SERVER = 65, MOBILE_USER_DEVICE = 66, BRIDGE_OR_EXTENDER = 67, GATEWAY = 68, LOADBALANCER = 69, MAINFRAME = 70, SANSWITCH = 71, SANHUB = 72, SANBRIDGE = 73, SANROUTER = 74, SANDIRECTOR = 75, RAIDSTORAGEDEVICE = 76, VIRTUAL_TAPE_LIBRARY = 77, JBOD = 78, STORAGESUBSYSTEM = 79, STORAGE_VIRTUALIZER = 80, MEDIA_LIBRARY = 81, EXTENDERNODE = 82, NAS_HEAD = 83, SELFCONTAINED_NAS = 84, UPS = 85, IP_PHONE = 86, MANAGEMENT_CONTROLLER = 87, CHASSIS_MANAGER = 88, HOSTBASED_RAID_CONTROLLER = 89, STORAGE_DEVICE_ENCLOSURE = 90, DESKTOP = 91, LAPTOP = 92, VIRTUAL_LIBRARY_SYSTEM = 93, BLADE_SYSTEM = 94, BLADE_SERVER = 95, VPN_CONCENTRATOR = 96, PROXY_SERVER = 97, LAYER_3_PROXY_SERVER = 98, WAN_ACCELERATOR = 99, SAN_PROCESSOR = 100, VIRTUAL_SERVER_RHL = 101, VIRTUAL_SERVER_WINDOWS = 102, ESXi = 103, VIRTUAL_SERVER = 104, HYPERVISOR = 105, AWS_AMI = 106, MS_AZURE = 107, UNKNOWN = 108 }


	/** Contains all information regarding a specific PATROL Agent. */
	export interface DeviceAgent {

		/** The status of the PATROL Agent's connection. */
		connectionStatus?: string | null;

		/** The ID of the PATROL Agent. */
		id?: string | null;

		/** The FQDN of the PATROL Agent. */
		name?: string | null;

		/** The operating system the PATROL Agent is running on. */
		os?: string | null;

		/** The port the PATROL Agent is running on. */
		port?: string | null;

		/** The link to the 'Monitors' tab of the PATROL Agent. */
		url?: string | null;

		/** The version of the PATROL Agent. */
		version?: string | null;
	}

	/** Contains all information regarding a specific PATROL Agent. */
	export interface DeviceAgentFormProperties {

		/** The status of the PATROL Agent's connection. */
		connectionStatus: FormControl<string | null | undefined>,

		/** The ID of the PATROL Agent. */
		id: FormControl<string | null | undefined>,

		/** The FQDN of the PATROL Agent. */
		name: FormControl<string | null | undefined>,

		/** The operating system the PATROL Agent is running on. */
		os: FormControl<string | null | undefined>,

		/** The port the PATROL Agent is running on. */
		port: FormControl<string | null | undefined>,

		/** The link to the 'Monitors' tab of the PATROL Agent. */
		url: FormControl<string | null | undefined>,

		/** The version of the PATROL Agent. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDeviceAgentFormGroup() {
		return new FormGroup<DeviceAgentFormProperties>({
			connectionStatus: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {

		/** The error's business identifier. */
		code?: string | null;

		/** The timestamp of the error. */
		date?: Date | null;

		/** The error message. */
		message?: string | null;
	}
	export interface ErrorResponseFormProperties {

		/** The error's business identifier. */
		code: FormControl<string | null | undefined>,

		/** The timestamp of the error. */
		date: FormControl<Date | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlobalSummary {

		/** The CO<sub>2</sub> emissions for all devices. This value can be updated by users with sufficient permissions. */
		co2Emission?: number | null;

		/** The unit in which the CO<sub>2</sub> emission is being expressed. */
		co2EmissionUnit?: string | null;

		/** If <em>true</em>, indicates that you do not have sufficient rights to update the global settings. However, you may still have sufficient rights to update a specific group's setting. */
		editable?: boolean | null;

		/** The electricity rate for all devices. This value can be updated by users with sufficient permissions. */
		energyCost?: number | null;

		/** The unit in which the electricity rate is being expressed. */
		energyCostUnit?: string | null;

		/** Regular expression used to filter the groups for which the power consumption will be reported. */
		groupNameFilter?: string | null;

		/** The lowest heating margin among the heating margins of all the devices.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin?: number | null;

		/** The percentage of devices whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginCoverage?: number | null;

		/** The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceName?: string | null;

		/** The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceUrl?: string | null;

		/** The unit in which the heating margin is being expressed. */
		heatingMarginUnit?: string | null;

		/** The ID of the global summary (this ID will always be "global"). */
		id?: string | null;

		/** The total power consumption of all the devices. */
		totalPowerConsumption?: number | null;

		/** The unit in which the total power consumption is being expressed. */
		totalPowerConsumptionUnit?: string | null;

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp?: number | null;
	}
	export interface GlobalSummaryFormProperties {

		/** The CO<sub>2</sub> emissions for all devices. This value can be updated by users with sufficient permissions. */
		co2Emission: FormControl<number | null | undefined>,

		/** The unit in which the CO<sub>2</sub> emission is being expressed. */
		co2EmissionUnit: FormControl<string | null | undefined>,

		/** If <em>true</em>, indicates that you do not have sufficient rights to update the global settings. However, you may still have sufficient rights to update a specific group's setting. */
		editable: FormControl<boolean | null | undefined>,

		/** The electricity rate for all devices. This value can be updated by users with sufficient permissions. */
		energyCost: FormControl<number | null | undefined>,

		/** The unit in which the electricity rate is being expressed. */
		energyCostUnit: FormControl<string | null | undefined>,

		/** Regular expression used to filter the groups for which the power consumption will be reported. */
		groupNameFilter: FormControl<string | null | undefined>,

		/** The lowest heating margin among the heating margins of all the devices.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin: FormControl<number | null | undefined>,

		/** The percentage of devices whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginCoverage: FormControl<number | null | undefined>,

		/** The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceName: FormControl<string | null | undefined>,

		/** The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceUrl: FormControl<string | null | undefined>,

		/** The unit in which the heating margin is being expressed. */
		heatingMarginUnit: FormControl<string | null | undefined>,

		/** The ID of the global summary (this ID will always be "global"). */
		id: FormControl<string | null | undefined>,

		/** The total power consumption of all the devices. */
		totalPowerConsumption: FormControl<number | null | undefined>,

		/** The unit in which the total power consumption is being expressed. */
		totalPowerConsumptionUnit: FormControl<string | null | undefined>,

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateGlobalSummaryFormGroup() {
		return new FormGroup<GlobalSummaryFormProperties>({
			co2Emission: new FormControl<number | null | undefined>(undefined),
			co2EmissionUnit: new FormControl<string | null | undefined>(undefined),
			editable: new FormControl<boolean | null | undefined>(undefined),
			energyCost: new FormControl<number | null | undefined>(undefined),
			energyCostUnit: new FormControl<string | null | undefined>(undefined),
			groupNameFilter: new FormControl<string | null | undefined>(undefined),
			heatingMargin: new FormControl<number | null | undefined>(undefined),
			heatingMarginCoverage: new FormControl<number | null | undefined>(undefined),
			heatingMarginDeviceName: new FormControl<string | null | undefined>(undefined),
			heatingMarginDeviceUrl: new FormControl<string | null | undefined>(undefined),
			heatingMarginUnit: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			totalPowerConsumption: new FormControl<number | null | undefined>(undefined),
			totalPowerConsumptionUnit: new FormControl<string | null | undefined>(undefined),
			updateTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The deserialized form of the <b>Energy Footprint Update</b> service's request payload. */
	export interface GroupConfiguration {

		/** Updates the CO<sub>2</sub> emission (unit: kg/kWh). */
		co2Emission?: number | null;

		/** Updates the electricity rate (unit: $/kWh). */
		energyCost?: number | null;

		/** Updates the regular expression used to filter the groups for which the power consumption should be reported. */
		groupNameFilter?: string | null;
	}

	/** The deserialized form of the <b>Energy Footprint Update</b> service's request payload. */
	export interface GroupConfigurationFormProperties {

		/** Updates the CO<sub>2</sub> emission (unit: kg/kWh). */
		co2Emission: FormControl<number | null | undefined>,

		/** Updates the electricity rate (unit: $/kWh). */
		energyCost: FormControl<number | null | undefined>,

		/** Updates the regular expression used to filter the groups for which the power consumption should be reported. */
		groupNameFilter: FormControl<string | null | undefined>,
	}
	export function CreateGroupConfigurationFormGroup() {
		return new FormGroup<GroupConfigurationFormProperties>({
			co2Emission: new FormControl<number | null | undefined>(undefined),
			energyCost: new FormControl<number | null | undefined>(undefined),
			groupNameFilter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupSummary {

		/** The average ambient temperature based on the ambient temperatures of the devices attached to the group. */
		ambientTemperature?: number | null;

		/** The unit in which the ambient temperature value is being expressed. */
		ambientTemperatureUnit?: string | null;

		/** The CO<sub>2</sub> emissions for all devices attached to the group. This value can be updated by users with sufficient permissions. */
		co2Emission?: number | null;

		/** The unit in which the user-defined CO<sub>2</sub> emission value is being expressed. */
		co2EmissionUnit?: string | null;

		/** The currency in which all energy cost values are being expressed. */
		costUnit?: string | null;
		deviceSummaries?: Array<DeviceSummary>;

		/** The name of the key used to identify the group in the history table. */
		editable?: boolean | null;

		/** The unit in which all emitted CO<sub>2</sub> quantities are being expressed. */
		emittedCo2Unit?: string | null;

		/** The unit in which all energy consumption values are being expressed. */
		energyConsumptionUnit?: string | null;

		/** The electricity rate for all devices attached to the group. This value can be updated by users with sufficient permissions. */
		energyCost?: number | null;

		/** The unit in which th euser-defined electricity rate value is being expressed. */
		energyCostUnit?: string | null;

		/** The lowest heating margin among the heating margins of the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin?: number | null;

		/** The percentage of devices attached to the group, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginCoverage?: number | null;

		/** The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceName?: string | null;

		/** The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceUrl?: string | null;

		/** The unit in which the heating margin of the group is being expressed. */
		heatingMarginUnit?: string | null;
		historyParentIdKey?: string | null;

		/** The ID of the group. */
		id?: string | null;

		/** The name of the group. */
		name?: string | null;

		/** The number of devices attached to the group. */
		numberOfDevices?: number | null;

		/** The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneDayConfidence?: number | null;

		/** The daily cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayCost?: number | null;

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one day.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayEmittedCo2?: number | null;

		/** The quantity of energy consumed by the devices attached to the group during one day. */
		oneDayEnergyConsumption?: number | null;

		/** The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneMonthConfidence?: number | null;

		/** The monthly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthCost?: number | null;

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one month.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthEmittedCo2?: number | null;

		/** The quantity of energy consumed by the devices attached to the group during one month. */
		oneMonthEnergyConsumption?: number | null;

		/** The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneYearConfidence?: number | null;

		/** The yearly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearCost?: number | null;

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the group in one year.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearEmittedCo2?: number | null;

		/** The quantity of energy consumed by the devices attached to the group during one year. */
		oneYearEnergyConsumption?: number | null;

		/** The ID of the server the group is attached to. */
		serverId?: number | null;

		/** The total power consumption of the devices attached to the group. */
		totalPowerConsumption?: number | null;

		/** The unit in which the total power consumption of the devices attached to the group is being expressed. */
		totalPowerConsumptionUnit?: string | null;

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp?: number | null;

		/** The link to the group details. */
		url?: string | null;
	}
	export interface GroupSummaryFormProperties {

		/** The average ambient temperature based on the ambient temperatures of the devices attached to the group. */
		ambientTemperature: FormControl<number | null | undefined>,

		/** The unit in which the ambient temperature value is being expressed. */
		ambientTemperatureUnit: FormControl<string | null | undefined>,

		/** The CO<sub>2</sub> emissions for all devices attached to the group. This value can be updated by users with sufficient permissions. */
		co2Emission: FormControl<number | null | undefined>,

		/** The unit in which the user-defined CO<sub>2</sub> emission value is being expressed. */
		co2EmissionUnit: FormControl<string | null | undefined>,

		/** The currency in which all energy cost values are being expressed. */
		costUnit: FormControl<string | null | undefined>,

		/** The name of the key used to identify the group in the history table. */
		editable: FormControl<boolean | null | undefined>,

		/** The unit in which all emitted CO<sub>2</sub> quantities are being expressed. */
		emittedCo2Unit: FormControl<string | null | undefined>,

		/** The unit in which all energy consumption values are being expressed. */
		energyConsumptionUnit: FormControl<string | null | undefined>,

		/** The electricity rate for all devices attached to the group. This value can be updated by users with sufficient permissions. */
		energyCost: FormControl<number | null | undefined>,

		/** The unit in which th euser-defined electricity rate value is being expressed. */
		energyCostUnit: FormControl<string | null | undefined>,

		/** The lowest heating margin among the heating margins of the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin: FormControl<number | null | undefined>,

		/** The percentage of devices attached to the group, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginCoverage: FormControl<number | null | undefined>,

		/** The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceName: FormControl<string | null | undefined>,

		/** The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceUrl: FormControl<string | null | undefined>,

		/** The unit in which the heating margin of the group is being expressed. */
		heatingMarginUnit: FormControl<string | null | undefined>,
		historyParentIdKey: FormControl<string | null | undefined>,

		/** The ID of the group. */
		id: FormControl<string | null | undefined>,

		/** The name of the group. */
		name: FormControl<string | null | undefined>,

		/** The number of devices attached to the group. */
		numberOfDevices: FormControl<number | null | undefined>,

		/** The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneDayConfidence: FormControl<number | null | undefined>,

		/** The daily cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayCost: FormControl<number | null | undefined>,

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one day.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayEmittedCo2: FormControl<number | null | undefined>,

		/** The quantity of energy consumed by the devices attached to the group during one day. */
		oneDayEnergyConsumption: FormControl<number | null | undefined>,

		/** The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneMonthConfidence: FormControl<number | null | undefined>,

		/** The monthly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthCost: FormControl<number | null | undefined>,

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one month.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthEmittedCo2: FormControl<number | null | undefined>,

		/** The quantity of energy consumed by the devices attached to the group during one month. */
		oneMonthEnergyConsumption: FormControl<number | null | undefined>,

		/** The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneYearConfidence: FormControl<number | null | undefined>,

		/** The yearly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearCost: FormControl<number | null | undefined>,

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the group in one year.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearEmittedCo2: FormControl<number | null | undefined>,

		/** The quantity of energy consumed by the devices attached to the group during one year. */
		oneYearEnergyConsumption: FormControl<number | null | undefined>,

		/** The ID of the server the group is attached to. */
		serverId: FormControl<number | null | undefined>,

		/** The total power consumption of the devices attached to the group. */
		totalPowerConsumption: FormControl<number | null | undefined>,

		/** The unit in which the total power consumption of the devices attached to the group is being expressed. */
		totalPowerConsumptionUnit: FormControl<string | null | undefined>,

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp: FormControl<number | null | undefined>,

		/** The link to the group details. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGroupSummaryFormGroup() {
		return new FormGroup<GroupSummaryFormProperties>({
			ambientTemperature: new FormControl<number | null | undefined>(undefined),
			ambientTemperatureUnit: new FormControl<string | null | undefined>(undefined),
			co2Emission: new FormControl<number | null | undefined>(undefined),
			co2EmissionUnit: new FormControl<string | null | undefined>(undefined),
			costUnit: new FormControl<string | null | undefined>(undefined),
			editable: new FormControl<boolean | null | undefined>(undefined),
			emittedCo2Unit: new FormControl<string | null | undefined>(undefined),
			energyConsumptionUnit: new FormControl<string | null | undefined>(undefined),
			energyCost: new FormControl<number | null | undefined>(undefined),
			energyCostUnit: new FormControl<string | null | undefined>(undefined),
			heatingMargin: new FormControl<number | null | undefined>(undefined),
			heatingMarginCoverage: new FormControl<number | null | undefined>(undefined),
			heatingMarginDeviceName: new FormControl<string | null | undefined>(undefined),
			heatingMarginDeviceUrl: new FormControl<string | null | undefined>(undefined),
			heatingMarginUnit: new FormControl<string | null | undefined>(undefined),
			historyParentIdKey: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numberOfDevices: new FormControl<number | null | undefined>(undefined),
			oneDayConfidence: new FormControl<number | null | undefined>(undefined),
			oneDayCost: new FormControl<number | null | undefined>(undefined),
			oneDayEmittedCo2: new FormControl<number | null | undefined>(undefined),
			oneDayEnergyConsumption: new FormControl<number | null | undefined>(undefined),
			oneMonthConfidence: new FormControl<number | null | undefined>(undefined),
			oneMonthCost: new FormControl<number | null | undefined>(undefined),
			oneMonthEmittedCo2: new FormControl<number | null | undefined>(undefined),
			oneMonthEnergyConsumption: new FormControl<number | null | undefined>(undefined),
			oneYearConfidence: new FormControl<number | null | undefined>(undefined),
			oneYearCost: new FormControl<number | null | undefined>(undefined),
			oneYearEmittedCo2: new FormControl<number | null | undefined>(undefined),
			oneYearEnergyConsumption: new FormControl<number | null | undefined>(undefined),
			serverId: new FormControl<number | null | undefined>(undefined),
			totalPowerConsumption: new FormControl<number | null | undefined>(undefined),
			totalPowerConsumptionUnit: new FormControl<string | null | undefined>(undefined),
			updateTimestamp: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The deserialized form of the <b>Reinitialize</b> service's request payload. */
	export interface ReinitializeActionConfiguration {

		/** When set to <em>1</em>, removes all manually set Alert Actions and reverts to basic default actions i.e. trigger a PATROL event and annotate a parameter graph. */
		resetAlertActions?: ReinitializeActionConfigurationResetAlertActions;

		/** When set to <em>1</em>, resets the number of times thresholds can be breached before triggering an alert to their default values (1 time) for numeric, discrete, connector status and present parameters. */
		resetAlertAfterNTimes?: ReinitializeActionConfigurationResetAlertAfterNTimes;

		/** When set to <em>1</em>, deactivates the debug mode when it was manually enabled. */
		resetDebugMode?: ReinitializeActionConfigurationResetDebugMode;

		/** When set to <em>1</em>, removes all user-defined frequencies for discovery and polling processes to their default values (respectively 1 hour and 2 minutes). */
		resetDiscoveryAndPollingIntervals?: ReinitializeActionConfigurationResetDiscoveryAndPollingIntervals;

		/** When set to <em>1</em>, removes the custom Java settings (path and credentials). The KM will try to automatically find a suitable JRE. */
		resetJavaSettings?: ReinitializeActionConfigurationResetJavaSettings;

		/** When set to <em>1</em>, reverts any manually performed configuration changes to the default Hardware Sentry values. */
		resetOtherAlertSettings?: ReinitializeActionConfigurationResetOtherAlertSettings;

		/** When set to <em>1</em>, reactivates the monitoring of all paused or removed objects. */
		resetRemovedPausedObjectList?: ReinitializeActionConfigurationResetRemovedPausedObjectList;

		/** When set to <em>1</em>, clears the report schedule. */
		resetReportSettings?: ReinitializeActionConfigurationResetReportSettings;

		/** When set to <em>1</em>, resets all thresholds. */
		resetThresholds?: ReinitializeActionConfigurationResetThresholds;
	}

	/** The deserialized form of the <b>Reinitialize</b> service's request payload. */
	export interface ReinitializeActionConfigurationFormProperties {

		/** When set to <em>1</em>, removes all manually set Alert Actions and reverts to basic default actions i.e. trigger a PATROL event and annotate a parameter graph. */
		resetAlertActions: FormControl<ReinitializeActionConfigurationResetAlertActions | null | undefined>,

		/** When set to <em>1</em>, resets the number of times thresholds can be breached before triggering an alert to their default values (1 time) for numeric, discrete, connector status and present parameters. */
		resetAlertAfterNTimes: FormControl<ReinitializeActionConfigurationResetAlertAfterNTimes | null | undefined>,

		/** When set to <em>1</em>, deactivates the debug mode when it was manually enabled. */
		resetDebugMode: FormControl<ReinitializeActionConfigurationResetDebugMode | null | undefined>,

		/** When set to <em>1</em>, removes all user-defined frequencies for discovery and polling processes to their default values (respectively 1 hour and 2 minutes). */
		resetDiscoveryAndPollingIntervals: FormControl<ReinitializeActionConfigurationResetDiscoveryAndPollingIntervals | null | undefined>,

		/** When set to <em>1</em>, removes the custom Java settings (path and credentials). The KM will try to automatically find a suitable JRE. */
		resetJavaSettings: FormControl<ReinitializeActionConfigurationResetJavaSettings | null | undefined>,

		/** When set to <em>1</em>, reverts any manually performed configuration changes to the default Hardware Sentry values. */
		resetOtherAlertSettings: FormControl<ReinitializeActionConfigurationResetOtherAlertSettings | null | undefined>,

		/** When set to <em>1</em>, reactivates the monitoring of all paused or removed objects. */
		resetRemovedPausedObjectList: FormControl<ReinitializeActionConfigurationResetRemovedPausedObjectList | null | undefined>,

		/** When set to <em>1</em>, clears the report schedule. */
		resetReportSettings: FormControl<ReinitializeActionConfigurationResetReportSettings | null | undefined>,

		/** When set to <em>1</em>, resets all thresholds. */
		resetThresholds: FormControl<ReinitializeActionConfigurationResetThresholds | null | undefined>,
	}
	export function CreateReinitializeActionConfigurationFormGroup() {
		return new FormGroup<ReinitializeActionConfigurationFormProperties>({
			resetAlertActions: new FormControl<ReinitializeActionConfigurationResetAlertActions | null | undefined>(undefined),
			resetAlertAfterNTimes: new FormControl<ReinitializeActionConfigurationResetAlertAfterNTimes | null | undefined>(undefined),
			resetDebugMode: new FormControl<ReinitializeActionConfigurationResetDebugMode | null | undefined>(undefined),
			resetDiscoveryAndPollingIntervals: new FormControl<ReinitializeActionConfigurationResetDiscoveryAndPollingIntervals | null | undefined>(undefined),
			resetJavaSettings: new FormControl<ReinitializeActionConfigurationResetJavaSettings | null | undefined>(undefined),
			resetOtherAlertSettings: new FormControl<ReinitializeActionConfigurationResetOtherAlertSettings | null | undefined>(undefined),
			resetRemovedPausedObjectList: new FormControl<ReinitializeActionConfigurationResetRemovedPausedObjectList | null | undefined>(undefined),
			resetReportSettings: new FormControl<ReinitializeActionConfigurationResetReportSettings | null | undefined>(undefined),
			resetThresholds: new FormControl<ReinitializeActionConfigurationResetThresholds | null | undefined>(undefined),
		});

	}

	export enum ReinitializeActionConfigurationResetAlertActions { _0 = 0, _1 = 1 }

	export enum ReinitializeActionConfigurationResetAlertAfterNTimes { _0 = 0, _1 = 1 }

	export enum ReinitializeActionConfigurationResetDebugMode { _0 = 0, _1 = 1 }

	export enum ReinitializeActionConfigurationResetDiscoveryAndPollingIntervals { _0 = 0, _1 = 1 }

	export enum ReinitializeActionConfigurationResetJavaSettings { _0 = 0, _1 = 1 }

	export enum ReinitializeActionConfigurationResetOtherAlertSettings { _0 = 0, _1 = 1 }

	export enum ReinitializeActionConfigurationResetRemovedPausedObjectList { _0 = 0, _1 = 1 }

	export enum ReinitializeActionConfigurationResetReportSettings { _0 = 0, _1 = 1 }

	export enum ReinitializeActionConfigurationResetThresholds { _0 = 0, _1 = 1 }


	/** Encapsulates a list of results. */
	export interface ResultPage {

		/** The list of currently accessible results. */
		items?: Array<string>;

		/** If <em>true</em>, indicates that you are denied access to part of, or all the results. */
		restrictedRights?: boolean | null;

		/** The total number of accessible results, including the results not listed in <em>items</em>. */
		total?: number | null;
	}

	/** Encapsulates a list of results. */
	export interface ResultPageFormProperties {

		/** If <em>true</em>, indicates that you are denied access to part of, or all the results. */
		restrictedRights: FormControl<boolean | null | undefined>,

		/** The total number of accessible results, including the results not listed in <em>items</em>. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateResultPageFormGroup() {
		return new FormGroup<ResultPageFormProperties>({
			restrictedRights: new FormControl<boolean | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceSummary {

		/** The currency in which all energy cost values are being expressed. */
		costUnit?: string | null;

		/** The list of devices attached to the service.<br><u>Note</u>: when using the <b>Services</b> service, this list is always empty. It is populated only when using the <b>Service Details</b> service. */
		deviceSummaries?: Array<DeviceSummary>;

		/** The unit in which all CO<sub>2</sub> emission values are being expressed. */
		emittedCo2Unit?: string | null;

		/** The unit in which all energy consumption values are being expressed. */
		energyConsumptionUnit?: string | null;

		/** The lowest heating margin among the heating margins of the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin?: number | null;

		/** The percentage of devices attached to the service, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginCoverage?: number | null;

		/** The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceName?: string | null;

		/** The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceUrl?: string | null;

		/** The unit in which the heating margin of the service is being expressed. */
		heatingMarginUnit?: string | null;

		/** The name of the key used to identify the service in the history table. */
		historyParentIdKey?: string | null;

		/** The ID of the service. */
		id?: string | null;

		/** The name of the service. */
		name?: string | null;

		/** The number of devices attached to the service. */
		numberOfDevices?: number | null;

		/** The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneDayConfidence?: number | null;

		/** The daily cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayCost?: number | null;

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the service during one day.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayEmittedCo2?: number | null;

		/** The quantity of energy consumed by the devices attached to the service during one day. */
		oneDayEnergyConsumption?: number | null;

		/** The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneMonthConfidence?: number | null;

		/** The monthly cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthCost?: number | null;

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the service during one month.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthEmittedCo2?: number | null;

		/** The quantity of energy consumed by the devices attached to the service during one month. */
		oneMonthEnergyConsumption?: number | null;

		/** The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneYearConfidence?: number | null;

		/** The yearly cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearCost?: number | null;

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the service in one year.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearEmittedCo2?: number | null;

		/** The quantity of energy consumed by the devices attached to the service during one year. */
		oneYearEnergyConsumption?: number | null;

		/** The ID of the server providing the service. */
		providerId?: string | null;

		/** The total power consumption of the devices attached to the service. */
		totalPowerConsumption?: number | null;

		/** The unit in which the total power consumption of the devices attached to the service is being expressed. */
		totalPowerConsumptionUnit?: string | null;

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp?: number | null;

		/** The link to the service details. */
		url?: string | null;
	}
	export interface ServiceSummaryFormProperties {

		/** The currency in which all energy cost values are being expressed. */
		costUnit: FormControl<string | null | undefined>,

		/** The unit in which all CO<sub>2</sub> emission values are being expressed. */
		emittedCo2Unit: FormControl<string | null | undefined>,

		/** The unit in which all energy consumption values are being expressed. */
		energyConsumptionUnit: FormControl<string | null | undefined>,

		/** The lowest heating margin among the heating margins of the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMargin: FormControl<number | null | undefined>,

		/** The percentage of devices attached to the service, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginCoverage: FormControl<number | null | undefined>,

		/** The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceName: FormControl<string | null | undefined>,

		/** The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found. */
		heatingMarginDeviceUrl: FormControl<string | null | undefined>,

		/** The unit in which the heating margin of the service is being expressed. */
		heatingMarginUnit: FormControl<string | null | undefined>,

		/** The name of the key used to identify the service in the history table. */
		historyParentIdKey: FormControl<string | null | undefined>,

		/** The ID of the service. */
		id: FormControl<string | null | undefined>,

		/** The name of the service. */
		name: FormControl<string | null | undefined>,

		/** The number of devices attached to the service. */
		numberOfDevices: FormControl<number | null | undefined>,

		/** The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneDayConfidence: FormControl<number | null | undefined>,

		/** The daily cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayCost: FormControl<number | null | undefined>,

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the service during one day.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneDayEmittedCo2: FormControl<number | null | undefined>,

		/** The quantity of energy consumed by the devices attached to the service during one day. */
		oneDayEnergyConsumption: FormControl<number | null | undefined>,

		/** The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneMonthConfidence: FormControl<number | null | undefined>,

		/** The monthly cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthCost: FormControl<number | null | undefined>,

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the service during one month.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneMonthEmittedCo2: FormControl<number | null | undefined>,

		/** The quantity of energy consumed by the devices attached to the service during one month. */
		oneMonthEnergyConsumption: FormControl<number | null | undefined>,

		/** The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are. */
		oneYearConfidence: FormControl<number | null | undefined>,

		/** The yearly cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearCost: FormControl<number | null | undefined>,

		/** The quantity of CO<sub>2</sub> emitted by the devices attached to the service in one year.<br><u>Note</u>:This field will only be present if a value could be computed. */
		oneYearEmittedCo2: FormControl<number | null | undefined>,

		/** The quantity of energy consumed by the devices attached to the service during one year. */
		oneYearEnergyConsumption: FormControl<number | null | undefined>,

		/** The ID of the server providing the service. */
		providerId: FormControl<string | null | undefined>,

		/** The total power consumption of the devices attached to the service. */
		totalPowerConsumption: FormControl<number | null | undefined>,

		/** The unit in which the total power consumption of the devices attached to the service is being expressed. */
		totalPowerConsumptionUnit: FormControl<string | null | undefined>,

		/** The data collection time (as an Epoch time, in seconds). */
		updateTimestamp: FormControl<number | null | undefined>,

		/** The link to the service details. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServiceSummaryFormGroup() {
		return new FormGroup<ServiceSummaryFormProperties>({
			costUnit: new FormControl<string | null | undefined>(undefined),
			emittedCo2Unit: new FormControl<string | null | undefined>(undefined),
			energyConsumptionUnit: new FormControl<string | null | undefined>(undefined),
			heatingMargin: new FormControl<number | null | undefined>(undefined),
			heatingMarginCoverage: new FormControl<number | null | undefined>(undefined),
			heatingMarginDeviceName: new FormControl<string | null | undefined>(undefined),
			heatingMarginDeviceUrl: new FormControl<string | null | undefined>(undefined),
			heatingMarginUnit: new FormControl<string | null | undefined>(undefined),
			historyParentIdKey: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numberOfDevices: new FormControl<number | null | undefined>(undefined),
			oneDayConfidence: new FormControl<number | null | undefined>(undefined),
			oneDayCost: new FormControl<number | null | undefined>(undefined),
			oneDayEmittedCo2: new FormControl<number | null | undefined>(undefined),
			oneDayEnergyConsumption: new FormControl<number | null | undefined>(undefined),
			oneMonthConfidence: new FormControl<number | null | undefined>(undefined),
			oneMonthCost: new FormControl<number | null | undefined>(undefined),
			oneMonthEmittedCo2: new FormControl<number | null | undefined>(undefined),
			oneMonthEnergyConsumption: new FormControl<number | null | undefined>(undefined),
			oneYearConfidence: new FormControl<number | null | undefined>(undefined),
			oneYearCost: new FormControl<number | null | undefined>(undefined),
			oneYearEmittedCo2: new FormControl<number | null | undefined>(undefined),
			oneYearEnergyConsumption: new FormControl<number | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			totalPowerConsumption: new FormControl<number | null | undefined>(undefined),
			totalPowerConsumptionUnit: new FormControl<string | null | undefined>(undefined),
			updateTimestamp: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Triggers a new collect on a specific device.
		 * You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.
		 * Post hardware/actions/{deviceId}/collect-now
		 * @param {number} deviceId The ID of the device.
		 * @param {string} monitorClass The Monitor Class of the device.
		 * @return {void} Successful operation
		 */
		CollectNow(deviceId: number, monitorClass: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hardware/actions/' + deviceId + '/collect-now?monitorClass=' + (monitorClass == null ? '' : encodeURIComponent(monitorClass)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Triggers a new discovery on a specific device.
		 * You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
		 * Post hardware/actions/{deviceId}/rediscover
		 * @param {number} deviceId The ID of the device.
		 * @return {void} Successful operation
		 */
		Rediscover(deviceId: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hardware/actions/' + deviceId + '/rediscover', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends a 'Reinitialize KM' command.
		 * Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.
		 * Post hardware/actions/{deviceId}/reinitialize
		 * @param {number} deviceId The ID of the device.
		 * @param {ReinitializeActionConfiguration} requestBody The request body as a JSON payload.
		 * @return {void} Successful operation
		 */
		Reinitialize(deviceId: number, requestBody: ReinitializeActionConfiguration): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hardware/actions/' + deviceId + '/reinitialize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a specific instance from the monitoring environment.
		 * You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).
		 * Post hardware/actions/{deviceId}/remove
		 * @param {number} deviceId The ID of the device.
		 * @param {string} monitorClass The Monitor Class of the device.
		 * @param {string} monitorSid The Monitor SID of the device.
		 * @return {void} Successful operation
		 */
		Remove(deviceId: number, monitorClass: string, monitorSid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hardware/actions/' + deviceId + '/remove?monitorClass=' + (monitorClass == null ? '' : encodeURIComponent(monitorClass)) + '&monitorSid=' + (monitorSid == null ? '' : encodeURIComponent(monitorSid)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets the Error Count parameter.
		 * Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).
		 * Post hardware/actions/{deviceId}/reset-error-count
		 * @param {number} deviceId The ID of the device.
		 * @param {string} monitorClass The Monitor Class of the device.
		 * @param {string} monitorSid The Monitor SID of the device.
		 * @return {void} Successful operation
		 */
		Reset(deviceId: number, monitorClass: string, monitorSid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'hardware/actions/' + deviceId + '/reset-error-count?monitorClass=' + (monitorClass == null ? '' : encodeURIComponent(monitorClass)) + '&monitorSid=' + (monitorSid == null ? '' : encodeURIComponent(monitorSid)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets summarized information about all monitored applications.
		 * Lists all the available ApplicationSummary instances.
		 * Get hardware/applications
		 * @param {string} page The page number to retrieve (first page is 0).
		 * @param {number} limit The maximum number of entries per page.
		 * @param {GetApplicationsDirection} direction The sorting order (case insensitive).
		 * @param {string} sort The column to sort by (case insensitive).
		 * @return {void} Successful operation
		 */
		GetApplications(page: string | null | undefined, limit: number | null | undefined, direction: GetApplicationsDirection | null | undefined, sort: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/applications?page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&direction=' + direction + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets detailed information for a specific application.
		 * You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.
		 * Get hardware/applications/{applicationId}
		 * @param {string} applicationId The ID of the application.
		 * @return {void} Successful operation
		 */
		GetOneApplication(applicationId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Monitors for a specific device.
		 * You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs.
		 * Get hardware/device-monitors/{deviceId}
		 * @param {number} deviceId The ID of the device.
		 * @return {void} Successful operation
		 */
		GetDeviceMonitors(deviceId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/device-monitors/' + deviceId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets summarized information about all monitored devices.
		 * Lists the available DeviceSummary instances.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
		 * Get hardware/devices
		 * @param {string} page The page number to retrieve (first page is 0).
		 * @param {number} limit The maximum number of entries per page.
		 * @param {GetApplicationsDirection} direction The sorting order (case insensitive).
		 * @param {string} sort The column to sort by (case insensitive).
		 * @param {string} groupId The ID of the group.
		 * @param {string} applicationId The ID of the application.
		 * @param {string} serviceId The ID of the service.
		 * @return {void} Successful operation
		 */
		GetDevices(page: string | null | undefined, limit: number | null | undefined, direction: GetApplicationsDirection | null | undefined, sort: string | null | undefined, groupId: string | null | undefined, applicationId: string | null | undefined, serviceId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/devices?page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&direction=' + direction + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&applicationId=' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets overall information for all devices.
		 * Lists the GlobalSummary instance for all the monitored devices.
		 * Get hardware/devices-summary
		 * @return {void} Successful operation
		 */
		GetDevicesSummary(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/devices-summary', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets detailed information about a specific device.
		 * You need to provide a <b>Device ID</b>:<br>-use the <b>hardware/devices</b> service to get all available device IDs.
		 * Get hardware/devices/{deviceId}
		 * @param {number} deviceId The ID of the device.
		 * @return {void} Successful operation
		 */
		GetDevice(deviceId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/devices/' + deviceId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets detailed information about an Agent.
		 * You need to provide a <b>Device ID</b> to retrieve detailed information about the Agent that Monitors the device:<br>-use the <b>hardware/devices</b> service to get all available device IDs.
		 * Get hardware/devices/{deviceId}/agent
		 * @param {number} deviceId The ID of the device.
		 * @return {void} Successful operation
		 */
		GetDeviceAgent(deviceId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/devices/' + deviceId + '/agent', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of all the devices monitored by an Agent.
		 * You need to provide the <b>Device ID</b> of a device to retrieve any other devices monitored by the same Agent:<br>-use the <b>hardware/devices</b> service to get all available device IDs.
		 * Get hardware/devices/{deviceId}/agent-devices
		 * @param {number} deviceId The ID of the device.
		 * @return {void} Successful operation
		 */
		GetAgentDevices(deviceId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/devices/' + deviceId + '/agent-devices', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets data history for a parameter of a specific device over a given period.
		 * You need to provide the <b>Device ID</b>, <b>Parameter Name</b>, <b>Monitor Type</b> and <b>Monitor SID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs<br>- use the <b>/hardware/device-monitors/{deviceId}</b> to get the parameter name, the Monitor type and the Monitor SID.<br><br>Finally, define the period for which you wish to retrieve data history.
		 * Get hardware/devices/{deviceId}/parameter-history
		 * @param {number} deviceId The ID of the device.
		 * @param {string} parameterName The name of the parameter.
		 * @param {string} monitorType The unique name of the Monitor type.
		 * @param {number} from Beginning of the period (Epoch time, in seconds).
		 * @param {number} to End of the period (Epoch time, in seconds).
		 * @param {string} monitorSid The Monitor SID (to filter the list of Monitors).
		 * @return {void} Successful operation
		 */
		GetDeviceParameterHistory(deviceId: number, parameterName: string, monitorType: string, from: number | null | undefined, to: number | null | undefined, monitorSid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/devices/' + deviceId + '/parameter-history?parameterName=' + (parameterName == null ? '' : encodeURIComponent(parameterName)) + '&monitorType=' + (monitorType == null ? '' : encodeURIComponent(monitorType)) + '&from=' + from + '&to=' + to + '&monitorSid=' + (monitorSid == null ? '' : encodeURIComponent(monitorSid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the energy usage for a specific device and a given period.
		 * You need to provide the device ID:<br>- use the <b>hardware/devices</b> service to get all available device IDs.
		 * Get hardware/energy-usage/{deviceId}
		 * @param {number} deviceId The ID of the device.
		 * @param {GetDeviceEnergyUsageRollPeriod} rollPeriod The period for which you wish to retrieve energy usage data.
		 * @param {GetDeviceEnergyUsageBasis} basis Subdivision of the period for which you wish to retrieve energy usage data.
		 * @return {void} Successful operation
		 */
		GetDeviceEnergyUsage(deviceId: number, rollPeriod: GetDeviceEnergyUsageRollPeriod | null | undefined, basis: GetDeviceEnergyUsageBasis | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/energy-usage/' + deviceId + '?rollPeriod=' + rollPeriod + '&basis=' + basis, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all group summaries.
		 * Lists the available GroupSummary instances.
		 * Get hardware/groups
		 * @param {string} page The page number to retrieve (first page is 0).
		 * @param {number} limit The maximum number of entries per page.
		 * @param {GetApplicationsDirection} direction The sorting order (case insensitive).
		 * @param {string} sort The column to sort by (case insensitive).
		 * @return {void} Successful operation
		 */
		GetGroups(page: string | null | undefined, limit: number | null | undefined, direction: GetApplicationsDirection | null | undefined, sort: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/groups?page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&direction=' + direction + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets detailed information about a specific group.
		 * You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.
		 * Get hardware/groups/{groupId}
		 * @param {string} groupId The ID of the group.
		 * @return {void} Successful operation
		 */
		GetOneGroup(groupId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the values of the energy footprint parameter for a specific group.
		 * You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.<br><br>If the ID is <em>"global"</em>, then the group being updated is the GlobalSummary.
		 * Put hardware/groups/{groupId}
		 * @param {string} groupId The ID of the group.
		 * @param {GroupConfiguration} requestBody The values you wish to assign.
		 * @return {void} Successful operation
		 */
		UpdateEnergyCost(groupId: string, requestBody: GroupConfiguration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'hardware/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the heating margin values for each monitored device, when available.
		 * If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
		 * Get hardware/heating-margin-devices
		 * @param {boolean} covered If set to <em>true</em>, only gets devices whose heating margin information is available.<br>Otherwise, gets any other devices.
		 * @param {string} page The page number to retrieve (first page is 0).
		 * @param {number} limit The maximum number of entries per page.
		 * @param {GetApplicationsDirection} direction The sorting order (case insensitive).
		 * @param {string} sort The column to sort by (case insensitive).
		 * @param {string} groupId The ID of the group.
		 * @param {string} applicationId The ID of the application.
		 * @param {string} serviceId The ID of the service.
		 * @return {void} Successful operation
		 */
		GetHeatingMarginCoverage(covered: boolean | null | undefined, page: string | null | undefined, limit: number | null | undefined, direction: GetApplicationsDirection | null | undefined, sort: string | null | undefined, groupId: string | null | undefined, applicationId: string | null | undefined, serviceId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/heating-margin-devices?covered=' + covered + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&direction=' + direction + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&applicationId=' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets historical data for a specific group, application or service.
		 * Gets the historical data for a specific group, application or service, for a given period.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
		 * Get hardware/history
		 * @param {string} groupId The ID of the group.
		 * @param {string} applicationId The ID of the application.
		 * @param {string} serviceId The ID of the service.
		 * @param {number} from Beginning of the period (Epoch time, in seconds).
		 * @param {number} to End of the period (Epoch time, in seconds).
		 * @return {void} Successful operation
		 */
		GetHistory(groupId: string | null | undefined, applicationId: string | null | undefined, serviceId: string | null | undefined, from: number | null | undefined, to: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/history?groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&applicationId=' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&from=' + from + '&to=' + to, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches devices by name, model, manufacturer or serial number.
		 * Gets the DeviceSummary instances whose name, model, manufacturer or serial number match the specified criteria.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>
		 * Get hardware/search-devices
		 * @param {string} searchTerms Space-separated search criteria.
		 * @param {string} groupId The ID of the group.
		 * @param {string} applicationId The ID of the application.
		 * @param {string} serviceId The ID of the service.
		 * @param {string} page The page number to retrieve (first page is 0).
		 * @param {number} limit The maximum number of entries per page.
		 * @return {void} Successful operation
		 */
		SearchDevices(searchTerms: string, groupId: string | null | undefined, applicationId: string | null | undefined, serviceId: string | null | undefined, page: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/search-devices?searchTerms=' + (searchTerms == null ? '' : encodeURIComponent(searchTerms)) + '&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&applicationId=' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets summarized information about all monitored services.
		 * Lists the available ServiceSummary instances.
		 * Get hardware/services
		 * @param {string} page The page number to retrieve (first page is 0).
		 * @param {number} limit The maximum number of entries per page.
		 * @param {GetApplicationsDirection} direction The sorting order (case insensitive).
		 * @param {string} sort The column to sort by (case insensitive).
		 * @return {void} Successful operation
		 */
		GetServices(page: string | null | undefined, limit: number | null | undefined, direction: GetApplicationsDirection | null | undefined, sort: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/services?page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&direction=' + direction + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets detailed information about a specific service.
		 * You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.
		 * Get hardware/services/{serviceId}
		 * @param {string} serviceId The ID of the service.
		 * @return {void} Successful operation
		 */
		GetOneService(serviceId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hardware/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum GetApplicationsDirection { asc = 0, desc = 1 }

	export enum GetDeviceEnergyUsageRollPeriod { ONE_DAY = 0, ONE_WEEK = 1, ONE_MONTH = 2, SIX_MONTHS = 3, ONE_YEAR = 4 }

	export enum GetDeviceEnergyUsageBasis { MONTHLY = 0, DAILY = 1, HOURLY = 2 }

}

