import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information about the device connection state event. */
	export interface DeviceConnectionStateEventInfo {

		/** Sequence number is string representation of a hexadecimal number. string compare can be used to identify the larger number because both in ASCII and HEX numbers come after alphabets. If you are converting the string to hex, then the number is a 256 bit number. */
		sequenceNumber?: string | null;
	}

	/** Information about the device connection state event. */
	export interface DeviceConnectionStateEventInfoFormProperties {

		/** Sequence number is string representation of a hexadecimal number. string compare can be used to identify the larger number because both in ASCII and HEX numbers come after alphabets. If you are converting the string to hex, then the number is a 256 bit number. */
		sequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeviceConnectionStateEventInfoFormGroup() {
		return new FormGroup<DeviceConnectionStateEventInfoFormProperties>({
			sequenceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a device connection state event (DeviceConnected, DeviceDisconnected). */
	export interface DeviceConnectionStateEventProperties {

		/** Information about the device connection state event. */
		deviceConnectionStateEventInfo?: DeviceConnectionStateEventInfo;

		/** The unique identifier of the device. This case-sensitive string can be up to 128 characters long, and supports ASCII 7-bit alphanumeric characters plus the following special characters: - : . + % _ &#35; * ? ! ( ) , = @ ; $ '. */
		deviceId?: string | null;

		/** Name of the IoT Hub where the device was created or deleted. */
		hubName?: string | null;

		/** The unique identifier of the module. This case-sensitive string can be up to 128 characters long, and supports ASCII 7-bit alphanumeric characters plus the following special characters: - : . + % _ &#35; * ? ! ( ) , = @ ; $ '. */
		moduleId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a device connection state event (DeviceConnected, DeviceDisconnected). */
	export interface DeviceConnectionStateEventPropertiesFormProperties {

		/** The unique identifier of the device. This case-sensitive string can be up to 128 characters long, and supports ASCII 7-bit alphanumeric characters plus the following special characters: - : . + % _ &#35; * ? ! ( ) , = @ ; $ '. */
		deviceId: FormControl<string | null | undefined>,

		/** Name of the IoT Hub where the device was created or deleted. */
		hubName: FormControl<string | null | undefined>,

		/** The unique identifier of the module. This case-sensitive string can be up to 128 characters long, and supports ASCII 7-bit alphanumeric characters plus the following special characters: - : . + % _ &#35; * ? ! ( ) , = @ ; $ '. */
		moduleId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceConnectionStateEventPropertiesFormGroup() {
		return new FormGroup<DeviceConnectionStateEventPropertiesFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			hubName: new FormControl<string | null | undefined>(undefined),
			moduleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a device life cycle event (DeviceCreated, DeviceDeleted). */
	export interface DeviceLifeCycleEventProperties {

		/** The unique identifier of the device. This case-sensitive string can be up to 128 characters long, and supports ASCII 7-bit alphanumeric characters plus the following special characters: - : . + % _ &#35; * ? ! ( ) , = @ ; $ '. */
		deviceId?: string | null;

		/** Name of the IoT Hub where the device was created or deleted. */
		hubName?: string | null;

		/** Information about the device twin, which is the cloud representation of application device metadata. */
		twin?: DeviceTwinInfo;
	}

	/** Schema of the Data property of an EventGridEvent for a device life cycle event (DeviceCreated, DeviceDeleted). */
	export interface DeviceLifeCycleEventPropertiesFormProperties {

		/** The unique identifier of the device. This case-sensitive string can be up to 128 characters long, and supports ASCII 7-bit alphanumeric characters plus the following special characters: - : . + % _ &#35; * ? ! ( ) , = @ ; $ '. */
		deviceId: FormControl<string | null | undefined>,

		/** Name of the IoT Hub where the device was created or deleted. */
		hubName: FormControl<string | null | undefined>,
	}
	export function CreateDeviceLifeCycleEventPropertiesFormGroup() {
		return new FormGroup<DeviceLifeCycleEventPropertiesFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			hubName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the device twin, which is the cloud representation of application device metadata. */
	export interface DeviceTwinInfo {

		/** Authentication type used for this device: either SAS, SelfSigned, or CertificateAuthority. */
		authenticationType?: string | null;

		/**
		 * Count of cloud to device messages sent to this device.
		 * Type: double
		 */
		cloudToDeviceMessageCount?: number | null;

		/** Whether the device is connected or disconnected. */
		connectionState?: string | null;

		/** The unique identifier of the device twin. */
		deviceId?: string | null;

		/** A piece of information that describes the content of the device twin. Each etag is guaranteed to be unique per device twin. */
		etag?: string | null;

		/** The ISO8601 timestamp of the last activity. */
		lastActivityTime?: string | null;

		/** Properties JSON element. */
		properties?: DeviceTwinInfoProperties;

		/** Whether the device twin is enabled or disabled. */
		status?: string | null;

		/** The ISO8601 timestamp of the last device twin status update. */
		statusUpdateTime?: string | null;

		/**
		 * An integer that is incremented by one each time the device twin is updated.
		 * Type: double
		 */
		version?: number | null;

		/** The thumbprint is a unique value for the x509 certificate, commonly used to find a particular certificate in a certificate store. The thumbprint is dynamically generated using the SHA1 algorithm, and does not physically exist in the certificate. */
		x509Thumbprint?: DeviceTwinInfoX509Thumbprint;
	}

	/** Information about the device twin, which is the cloud representation of application device metadata. */
	export interface DeviceTwinInfoFormProperties {

		/** Authentication type used for this device: either SAS, SelfSigned, or CertificateAuthority. */
		authenticationType: FormControl<string | null | undefined>,

		/**
		 * Count of cloud to device messages sent to this device.
		 * Type: double
		 */
		cloudToDeviceMessageCount: FormControl<number | null | undefined>,

		/** Whether the device is connected or disconnected. */
		connectionState: FormControl<string | null | undefined>,

		/** The unique identifier of the device twin. */
		deviceId: FormControl<string | null | undefined>,

		/** A piece of information that describes the content of the device twin. Each etag is guaranteed to be unique per device twin. */
		etag: FormControl<string | null | undefined>,

		/** The ISO8601 timestamp of the last activity. */
		lastActivityTime: FormControl<string | null | undefined>,

		/** Whether the device twin is enabled or disabled. */
		status: FormControl<string | null | undefined>,

		/** The ISO8601 timestamp of the last device twin status update. */
		statusUpdateTime: FormControl<string | null | undefined>,

		/**
		 * An integer that is incremented by one each time the device twin is updated.
		 * Type: double
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateDeviceTwinInfoFormGroup() {
		return new FormGroup<DeviceTwinInfoFormProperties>({
			authenticationType: new FormControl<string | null | undefined>(undefined),
			cloudToDeviceMessageCount: new FormControl<number | null | undefined>(undefined),
			connectionState: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			lastActivityTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusUpdateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeviceTwinInfoProperties {

		/** A portion of the properties that can be written only by the application back-end, and read by the device. */
		desired?: DeviceTwinProperties;

		/** A portion of the properties that can be written only by the application back-end, and read by the device. */
		reported?: DeviceTwinProperties;
	}
	export interface DeviceTwinInfoPropertiesFormProperties {
	}
	export function CreateDeviceTwinInfoPropertiesFormGroup() {
		return new FormGroup<DeviceTwinInfoPropertiesFormProperties>({
		});

	}


	/** A portion of the properties that can be written only by the application back-end, and read by the device. */
	export interface DeviceTwinProperties {

		/** Metadata information for the properties JSON document. */
		metadata?: DeviceTwinMetadata;

		/**
		 * Version of device twin properties.
		 * Type: double
		 */
		version?: number | null;
	}

	/** A portion of the properties that can be written only by the application back-end, and read by the device. */
	export interface DeviceTwinPropertiesFormProperties {

		/**
		 * Version of device twin properties.
		 * Type: double
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateDeviceTwinPropertiesFormGroup() {
		return new FormGroup<DeviceTwinPropertiesFormProperties>({
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata information for the properties JSON document. */
	export interface DeviceTwinMetadata {

		/** The ISO8601 timestamp of the last time the properties were updated. */
		lastUpdated?: string | null;
	}

	/** Metadata information for the properties JSON document. */
	export interface DeviceTwinMetadataFormProperties {

		/** The ISO8601 timestamp of the last time the properties were updated. */
		lastUpdated: FormControl<string | null | undefined>,
	}
	export function CreateDeviceTwinMetadataFormGroup() {
		return new FormGroup<DeviceTwinMetadataFormProperties>({
			lastUpdated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceTwinInfoX509Thumbprint {

		/** Primary thumbprint for the x509 certificate. */
		primaryThumbprint?: string | null;

		/** Secondary thumbprint for the x509 certificate. */
		secondaryThumbprint?: string | null;
	}
	export interface DeviceTwinInfoX509ThumbprintFormProperties {

		/** Primary thumbprint for the x509 certificate. */
		primaryThumbprint: FormControl<string | null | undefined>,

		/** Secondary thumbprint for the x509 certificate. */
		secondaryThumbprint: FormControl<string | null | undefined>,
	}
	export function CreateDeviceTwinInfoX509ThumbprintFormGroup() {
		return new FormGroup<DeviceTwinInfoX509ThumbprintFormProperties>({
			primaryThumbprint: new FormControl<string | null | undefined>(undefined),
			secondaryThumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a device telemetry event (DeviceTelemetry). */
	export interface DeviceTelemetryEventProperties {

		/** The content of the message from the device. */
		body?: string | null;

		/** Application properties are user-defined strings that can be added to the message. These fields are optional. */
		properties?: {[id: string]: string };

		/** System properties help identify contents and source of the messages. */
		systemProperties?: {[id: string]: string };
	}

	/** Schema of the Data property of an EventGridEvent for a device telemetry event (DeviceTelemetry). */
	export interface DeviceTelemetryEventPropertiesFormProperties {

		/** The content of the message from the device. */
		body: FormControl<string | null | undefined>,

		/** Application properties are user-defined strings that can be added to the message. These fields are optional. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** System properties help identify contents and source of the messages. */
		systemProperties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDeviceTelemetryEventPropertiesFormGroup() {
		return new FormGroup<DeviceTelemetryEventPropertiesFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			systemProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Event data for Microsoft.Devices.DeviceConnected event. */
	export interface IotHubDeviceConnectedEventData {
	}

	/** Event data for Microsoft.Devices.DeviceConnected event. */
	export interface IotHubDeviceConnectedEventDataFormProperties {
	}
	export function CreateIotHubDeviceConnectedEventDataFormGroup() {
		return new FormGroup<IotHubDeviceConnectedEventDataFormProperties>({
		});

	}


	/** Event data for Microsoft.Devices.DeviceCreated event. */
	export interface IotHubDeviceCreatedEventData {
	}

	/** Event data for Microsoft.Devices.DeviceCreated event. */
	export interface IotHubDeviceCreatedEventDataFormProperties {
	}
	export function CreateIotHubDeviceCreatedEventDataFormGroup() {
		return new FormGroup<IotHubDeviceCreatedEventDataFormProperties>({
		});

	}


	/** Event data for Microsoft.Devices.DeviceDeleted event. */
	export interface IotHubDeviceDeletedEventData {
	}

	/** Event data for Microsoft.Devices.DeviceDeleted event. */
	export interface IotHubDeviceDeletedEventDataFormProperties {
	}
	export function CreateIotHubDeviceDeletedEventDataFormGroup() {
		return new FormGroup<IotHubDeviceDeletedEventDataFormProperties>({
		});

	}


	/** Event data for Microsoft.Devices.DeviceDisconnected event. */
	export interface IotHubDeviceDisconnectedEventData {
	}

	/** Event data for Microsoft.Devices.DeviceDisconnected event. */
	export interface IotHubDeviceDisconnectedEventDataFormProperties {
	}
	export function CreateIotHubDeviceDisconnectedEventDataFormGroup() {
		return new FormGroup<IotHubDeviceDisconnectedEventDataFormProperties>({
		});

	}


	/** Event data for Microsoft.Devices.DeviceTelemetry event. */
	export interface IotHubDeviceTelemetryEventData {
	}

	/** Event data for Microsoft.Devices.DeviceTelemetry event. */
	export interface IotHubDeviceTelemetryEventDataFormProperties {
	}
	export function CreateIotHubDeviceTelemetryEventDataFormGroup() {
		return new FormGroup<IotHubDeviceTelemetryEventDataFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

