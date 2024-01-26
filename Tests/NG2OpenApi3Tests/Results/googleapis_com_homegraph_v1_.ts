import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Third-party device ID for one device. */
	export interface AgentDeviceId {

		/** Third-party device ID. */
		id?: string | null;
	}

	/** Third-party device ID for one device. */
	export interface AgentDeviceIdFormProperties {

		/** Third-party device ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAgentDeviceIdFormGroup() {
		return new FormGroup<AgentDeviceIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alternate third-party device ID. */
	export interface AgentOtherDeviceId {

		/** Project ID for your smart home Action. */
		agentId?: string | null;

		/** Unique third-party device ID. */
		deviceId?: string | null;
	}

	/** Alternate third-party device ID. */
	export interface AgentOtherDeviceIdFormProperties {

		/** Project ID for your smart home Action. */
		agentId: FormControl<string | null | undefined>,

		/** Unique third-party device ID. */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateAgentOtherDeviceIdFormGroup() {
		return new FormGroup<AgentOtherDeviceIdFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Third-party device definition. */
	export interface Device {

		/** Attributes for the traits supported by the device. */
		attributes?: {[id: string]: any };

		/** Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.home.google.com/cloud-to-cloud/intents/query) and [EXECUTE](https://developers.home.google.com/cloud-to-cloud/intents/execute) intent. Data in this object has a few constraints: No sensitive information, including but not limited to Personally Identifiable Information. */
		customData?: {[id: string]: any };

		/** Device information. */
		deviceInfo?: DeviceInfo;

		/** Third-party device ID. */
		id?: string | null;

		/** Identifiers used to describe the device. */
		name?: DeviceNames;

		/** Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification. If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices. */
		notificationSupportedByAgent?: boolean | null;

		/** Alternate IDs associated with this device. This is used to identify cloud synced devices enabled for [local fulfillment](https://developers.home.google.com/local-home/overview). */
		otherDeviceIds?: Array<AgentOtherDeviceId>;

		/** Suggested name for the room where this device is installed. Google attempts to use this value during user setup. */
		roomHint?: string | null;

		/** Suggested name for the structure where this device is installed. Google attempts to use this value during user setup. */
		structureHint?: string | null;

		/** Traits supported by the device. See [device traits](https://developers.home.google.com/cloud-to-cloud/traits). */
		traits?: Array<string>;

		/** Hardware type of the device. See [device types](https://developers.home.google.com/cloud-to-cloud/guides). */
		type?: string | null;

		/** Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification. */
		willReportState?: boolean | null;
	}

	/** Third-party device definition. */
	export interface DeviceFormProperties {

		/** Attributes for the traits supported by the device. */
		attributes: FormControl<{[id: string]: any } | null | undefined>,

		/** Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.home.google.com/cloud-to-cloud/intents/query) and [EXECUTE](https://developers.home.google.com/cloud-to-cloud/intents/execute) intent. Data in this object has a few constraints: No sensitive information, including but not limited to Personally Identifiable Information. */
		customData: FormControl<{[id: string]: any } | null | undefined>,

		/** Third-party device ID. */
		id: FormControl<string | null | undefined>,

		/** Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification. If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices. */
		notificationSupportedByAgent: FormControl<boolean | null | undefined>,

		/** Suggested name for the room where this device is installed. Google attempts to use this value during user setup. */
		roomHint: FormControl<string | null | undefined>,

		/** Suggested name for the structure where this device is installed. Google attempts to use this value during user setup. */
		structureHint: FormControl<string | null | undefined>,

		/** Hardware type of the device. See [device types](https://developers.home.google.com/cloud-to-cloud/guides). */
		type: FormControl<string | null | undefined>,

		/** Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification. */
		willReportState: FormControl<boolean | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			attributes: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			customData: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			notificationSupportedByAgent: new FormControl<boolean | null | undefined>(undefined),
			roomHint: new FormControl<string | null | undefined>(undefined),
			structureHint: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			willReportState: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Device information. */
	export interface DeviceInfo {

		/** Device hardware version. */
		hwVersion?: string | null;

		/** Device manufacturer. */
		manufacturer?: string | null;

		/** Device model. */
		model?: string | null;

		/** Device software version. */
		swVersion?: string | null;
	}

	/** Device information. */
	export interface DeviceInfoFormProperties {

		/** Device hardware version. */
		hwVersion: FormControl<string | null | undefined>,

		/** Device manufacturer. */
		manufacturer: FormControl<string | null | undefined>,

		/** Device model. */
		model: FormControl<string | null | undefined>,

		/** Device software version. */
		swVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeviceInfoFormGroup() {
		return new FormGroup<DeviceInfoFormProperties>({
			hwVersion: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			swVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifiers used to describe the device. */
	export interface DeviceNames {

		/** List of names provided by the manufacturer rather than the user, such as serial numbers, SKUs, etc. */
		defaultNames?: Array<string>;

		/** Primary name of the device, generally provided by the user. */
		name?: string | null;

		/** Additional names provided by the user for the device. */
		nicknames?: Array<string>;
	}

	/** Identifiers used to describe the device. */
	export interface DeviceNamesFormProperties {

		/** Primary name of the device, generally provided by the user. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeviceNamesFormGroup() {
		return new FormGroup<DeviceNamesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. */
	export interface QueryRequest {

		/** Required. Third-party user ID. */
		agentUserId?: string | null;

		/** Required. Inputs containing third-party device IDs for which to get the device states. */
		inputs?: Array<QueryRequestInput>;

		/** Request ID used for debugging. */
		requestId?: string | null;
	}

	/** Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. */
	export interface QueryRequestFormProperties {

		/** Required. Third-party user ID. */
		agentUserId: FormControl<string | null | undefined>,

		/** Request ID used for debugging. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateQueryRequestFormGroup() {
		return new FormGroup<QueryRequestFormProperties>({
			agentUserId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Device ID inputs to QueryRequest. */
	export interface QueryRequestInput {

		/** Payload containing device IDs. */
		payload?: QueryRequestPayload;
	}

	/** Device ID inputs to QueryRequest. */
	export interface QueryRequestInputFormProperties {
	}
	export function CreateQueryRequestInputFormGroup() {
		return new FormGroup<QueryRequestInputFormProperties>({
		});

	}


	/** Payload containing device IDs. */
	export interface QueryRequestPayload {

		/** Third-party device IDs for which to get the device states. */
		devices?: Array<AgentDeviceId>;
	}

	/** Payload containing device IDs. */
	export interface QueryRequestPayloadFormProperties {
	}
	export function CreateQueryRequestPayloadFormGroup() {
		return new FormGroup<QueryRequestPayloadFormProperties>({
		});

	}


	/** Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.home.google.com/cloud-to-cloud/intents/query). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "devices": { "123": { "on": true, "online": true }, "456": { "on": true, "online": true, "brightness": 80, "color": { "name": "cerulean", "spectrumRGB": 31655 } } } } } ``` */
	export interface QueryResponse {

		/** Payload containing device states information. */
		payload?: QueryResponsePayload;

		/** Request ID used for debugging. Copied from the request. */
		requestId?: string | null;
	}

	/** Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.home.google.com/cloud-to-cloud/intents/query). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "devices": { "123": { "on": true, "online": true }, "456": { "on": true, "online": true, "brightness": 80, "color": { "name": "cerulean", "spectrumRGB": 31655 } } } } } ``` */
	export interface QueryResponseFormProperties {

		/** Request ID used for debugging. Copied from the request. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateQueryResponseFormGroup() {
		return new FormGroup<QueryResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload containing device states information. */
	export interface QueryResponsePayload {

		/** States of the devices. Map of third-party device ID to struct of device states. */
		devices?: {[id: string]: any };
	}

	/** Payload containing device states information. */
	export interface QueryResponsePayloadFormProperties {

		/** States of the devices. Map of third-party device ID to struct of device states. */
		devices: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateQueryResponsePayloadFormGroup() {
		return new FormGroup<QueryResponsePayloadFormProperties>({
			devices: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The states and notifications specific to a device. */
	export interface ReportStateAndNotificationDevice {

		/** Notifications metadata for devices. See the **Device NOTIFICATIONS** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits). */
		notifications?: {[id: string]: any };

		/** States of devices to update. See the **Device STATES** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits). */
		states?: {[id: string]: any };
	}

	/** The states and notifications specific to a device. */
	export interface ReportStateAndNotificationDeviceFormProperties {

		/** Notifications metadata for devices. See the **Device NOTIFICATIONS** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits). */
		notifications: FormControl<{[id: string]: any } | null | undefined>,

		/** States of devices to update. See the **Device STATES** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits). */
		states: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateReportStateAndNotificationDeviceFormGroup() {
		return new FormGroup<ReportStateAndNotificationDeviceFormProperties>({
			notifications: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			states: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, "123" and "456" in the following example). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "agentUserId": "1234", "payload": { "devices": { "states": { "123": { "on": true }, "456": { "on": true, "brightness": 10 } }, } } } ``` */
	export interface ReportStateAndNotificationRequest {

		/** Required. Third-party user ID. */
		agentUserId?: string | null;

		/** Unique identifier per event (for example, a doorbell press). */
		eventId?: string | null;

		/** Deprecated. */
		followUpToken?: string | null;

		/** Payload containing the state and notification information for devices. */
		payload?: StateAndNotificationPayload;

		/** Request ID used for debugging. */
		requestId?: string | null;
	}

	/** Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, "123" and "456" in the following example). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "agentUserId": "1234", "payload": { "devices": { "states": { "123": { "on": true }, "456": { "on": true, "brightness": 10 } }, } } } ``` */
	export interface ReportStateAndNotificationRequestFormProperties {

		/** Required. Third-party user ID. */
		agentUserId: FormControl<string | null | undefined>,

		/** Unique identifier per event (for example, a doorbell press). */
		eventId: FormControl<string | null | undefined>,

		/** Deprecated. */
		followUpToken: FormControl<string | null | undefined>,

		/** Request ID used for debugging. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateReportStateAndNotificationRequestFormGroup() {
		return new FormGroup<ReportStateAndNotificationRequestFormProperties>({
			agentUserId: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			followUpToken: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload containing the state and notification information for devices. */
	export interface StateAndNotificationPayload {

		/** The states and notifications specific to a device. */
		devices?: ReportStateAndNotificationDevice;
	}

	/** Payload containing the state and notification information for devices. */
	export interface StateAndNotificationPayloadFormProperties {
	}
	export function CreateStateAndNotificationPayloadFormGroup() {
		return new FormGroup<StateAndNotificationPayloadFormProperties>({
		});

	}


	/** Response type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. */
	export interface ReportStateAndNotificationResponse {

		/** Request ID copied from ReportStateAndNotificationRequest. */
		requestId?: string | null;
	}

	/** Response type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. */
	export interface ReportStateAndNotificationResponseFormProperties {

		/** Request ID copied from ReportStateAndNotificationRequest. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateReportStateAndNotificationResponseFormGroup() {
		return new FormGroup<ReportStateAndNotificationResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call. */
	export interface RequestSyncDevicesRequest {

		/** Required. Third-party user ID. */
		agentUserId?: string | null;

		/** Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given `agent_user_id`, but the caller will not receive any error responses. */
		async?: boolean | null;
	}

	/** Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call. */
	export interface RequestSyncDevicesRequestFormProperties {

		/** Required. Third-party user ID. */
		agentUserId: FormControl<string | null | undefined>,

		/** Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given `agent_user_id`, but the caller will not receive any error responses. */
		async: FormControl<boolean | null | undefined>,
	}
	export function CreateRequestSyncDevicesRequestFormGroup() {
		return new FormGroup<RequestSyncDevicesRequestFormProperties>({
			agentUserId: new FormControl<string | null | undefined>(undefined),
			async: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call. Intentionally empty upon success. An HTTP response code is returned with more details upon failure. */
	export interface RequestSyncDevicesResponse {
	}

	/** Response type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call. Intentionally empty upon success. An HTTP response code is returned with more details upon failure. */
	export interface RequestSyncDevicesResponseFormProperties {
	}
	export function CreateRequestSyncDevicesResponseFormGroup() {
		return new FormGroup<RequestSyncDevicesResponseFormProperties>({
		});

	}


	/** Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. */
	export interface SyncRequest {

		/** Required. Third-party user ID. */
		agentUserId?: string | null;

		/** Request ID used for debugging. */
		requestId?: string | null;
	}

	/** Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. */
	export interface SyncRequestFormProperties {

		/** Required. Third-party user ID. */
		agentUserId: FormControl<string | null | undefined>,

		/** Request ID used for debugging. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateSyncRequestFormGroup() {
		return new FormGroup<SyncRequestFormProperties>({
			agentUserId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Google smart home `action.devices.SYNC` [response](https://developers.home.google.com/cloud-to-cloud/intents/sync). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "agentUserId": "1836.15267389", "devices": [{ "id": "123", "type": "action.devices.types.OUTLET", "traits": [ "action.devices.traits.OnOff" ], "name": { "defaultNames": ["My Outlet 1234"], "name": "Night light", "nicknames": ["wall plug"] }, "willReportState": false, "deviceInfo": { "manufacturer": "lights-out-inc", "model": "hs1234", "hwVersion": "3.2", "swVersion": "11.4" }, "customData": { "fooValue": 74, "barValue": true, "bazValue": "foo" } }] } } ``` */
	export interface SyncResponse {

		/** Payload containing device information. */
		payload?: SyncResponsePayload;

		/** Request ID used for debugging. Copied from the request. */
		requestId?: string | null;
	}

	/** Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Google smart home `action.devices.SYNC` [response](https://developers.home.google.com/cloud-to-cloud/intents/sync). Example: ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "agentUserId": "1836.15267389", "devices": [{ "id": "123", "type": "action.devices.types.OUTLET", "traits": [ "action.devices.traits.OnOff" ], "name": { "defaultNames": ["My Outlet 1234"], "name": "Night light", "nicknames": ["wall plug"] }, "willReportState": false, "deviceInfo": { "manufacturer": "lights-out-inc", "model": "hs1234", "hwVersion": "3.2", "swVersion": "11.4" }, "customData": { "fooValue": 74, "barValue": true, "bazValue": "foo" } }] } } ``` */
	export interface SyncResponseFormProperties {

		/** Request ID used for debugging. Copied from the request. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateSyncResponseFormGroup() {
		return new FormGroup<SyncResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload containing device information. */
	export interface SyncResponsePayload {

		/** Third-party user ID */
		agentUserId?: string | null;

		/** Devices associated with the third-party user. */
		devices?: Array<Device>;
	}

	/** Payload containing device information. */
	export interface SyncResponsePayloadFormProperties {

		/** Third-party user ID */
		agentUserId: FormControl<string | null | undefined>,
	}
	export function CreateSyncResponsePayloadFormGroup() {
		return new FormGroup<SyncResponsePayloadFormProperties>({
			agentUserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.
		 * Post v1/devices:query
		 * @return {QueryResponse} Successful response
		 */
		Homegraph_devices_query(requestBody: QueryRequest): Observable<QueryResponse> {
			return this.http.post<QueryResponse>(this.baseUri + 'v1/devices:query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.home.google.com/cloud-to-cloud/integration/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.home.google.com/cloud-to-cloud/primer/device-types-and-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.
		 * Post v1/devices:reportStateAndNotification
		 * @return {ReportStateAndNotificationResponse} Successful response
		 */
		Homegraph_devices_reportStateAndNotification(requestBody: ReportStateAndNotificationRequest): Observable<ReportStateAndNotificationResponse> {
			return this.http.post<ReportStateAndNotificationResponse>(this.baseUri + 'v1/devices:reportStateAndNotification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests Google to send an `action.devices.SYNC` [intent](https://developers.home.google.com/cloud-to-cloud/intents/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.
		 * Post v1/devices:requestSync
		 * @return {RequestSyncDevicesResponse} Successful response
		 */
		Homegraph_devices_requestSync(requestBody: RequestSyncDevicesRequest): Observable<RequestSyncDevicesResponse> {
			return this.http.post<RequestSyncDevicesResponse>(this.baseUri + 'v1/devices:requestSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.
		 * Post v1/devices:sync
		 * @return {SyncResponse} Successful response
		 */
		Homegraph_devices_sync(requestBody: SyncRequest): Observable<SyncResponse> {
			return this.http.post<SyncResponse>(this.baseUri + 'v1/devices:sync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted. For more details on how users link their accounts, see [fulfillment and authentication](https://developers.home.google.com/cloud-to-cloud/primer/fulfillment). The third-party user's identity is passed in via the `agent_user_id` (see DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project.
		 * Delete v1/{agentUserId}
		 * @param {string} agentUserId Required. Third-party user ID.
		 * @param {string} requestId Request ID used for debugging.
		 * @return {Empty} Successful response
		 */
		Homegraph_agentUsers_delete(agentUserId: string, requestId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (agentUserId == null ? '' : encodeURIComponent(agentUserId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}
	}

}

