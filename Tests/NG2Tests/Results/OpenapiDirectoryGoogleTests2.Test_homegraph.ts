import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Third-party device ID for one device. */
	export interface AgentDeviceId {

		/** Third-party device ID. */
		id?: string;
	}


	/** Alternate third-party device ID. */
	export interface AgentOtherDeviceId {

		/** Project ID for your smart home Action. */
		agentId?: string;

		/** Unique third-party device ID. */
		deviceId?: string;
	}


	/** Third-party device definition. */
	export interface Device {

		/** Attributes for the traits supported by the device. */
		attributes?: {[id: string]: any };

		/**
		 * Custom device attributes stored in Home Graph and provided to your
		 * smart home Action in each
		 * [QUERY](https://developers.google.com/assistant/smarthome/reference/intent/query)
		 * and
		 * [EXECUTE](https://developers.google.com/assistant/smarthome/reference/intent/execute)
		 * intent.
		 */
		customData?: {[id: string]: any };

		/** Device information. */
		deviceInfo?: DeviceInfo;

		/** Third-party device ID. */
		id?: string;

		/** Identifiers used to describe the device. */
		name?: DeviceNames;

		/**
		 * Indicates whether your smart home Action will report notifications
		 * to Google for this device via
		 * ReportStateAndNotification.
		 * If your smart home Action enables users to control device notifications,
		 * you should update this field and call
		 * RequestSyncDevices.
		 */
		notificationSupportedByAgent?: boolean;

		/**
		 * Alternate IDs associated with this device.
		 * This is used to identify cloud synced devices enabled for [local
		 * fulfillment](https://developers.google.com/assistant/smarthome/concepts/local).
		 */
		otherDeviceIds?: Array<AgentOtherDeviceId>;

		/**
		 * Suggested name for the room where this device is installed.
		 * Google attempts to use this value during user setup.
		 */
		roomHint?: string;

		/**
		 * Suggested name for the structure where this device is installed.
		 * Google attempts to use this value during user setup.
		 */
		structureHint?: string;

		/**
		 * Traits supported by the device.
		 * See [device
		 * traits](https://developers.google.com/assistant/smarthome/traits).
		 */
		traits?: Array<string>;

		/**
		 * Hardware type of the device.
		 * See [device
		 * types](https://developers.google.com/assistant/smarthome/guides).
		 */
		type?: string;

		/**
		 * Indicates whether your smart home Action will report state of this device
		 * to Google via
		 * ReportStateAndNotification.
		 */
		willReportState?: boolean;
	}


	/** Device information. */
	export interface DeviceInfo {

		/** Device hardware version. */
		hwVersion?: string;

		/** Device manufacturer. */
		manufacturer?: string;

		/** Device model. */
		model?: string;

		/** Device software version. */
		swVersion?: string;
	}


	/** Identifiers used to describe the device. */
	export interface DeviceNames {

		/**
		 * List of names provided by the manufacturer rather than the user, such as
		 * serial numbers, SKUs, etc.
		 */
		defaultNames?: Array<string>;

		/** Primary name of the device, generally provided by the user. */
		name?: string;

		/** Additional names provided by the user for the device. */
		nicknames?: Array<string>;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/**
	 * Request type for the
	 * [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
	 */
	export interface QueryRequest {

		/** Required. Third-party user ID. */
		agentUserId?: string;

		/**
		 * Required. Inputs containing third-party device IDs for which to
		 * get the device states.
		 */
		inputs?: Array<QueryRequestInput>;

		/** Request ID used for debugging. */
		requestId?: string;
	}


	/** Device ID inputs to QueryRequest. */
	export interface QueryRequestInput {

		/** Payload containing device IDs. */
		payload?: QueryRequestPayload;
	}


	/** Payload containing device IDs. */
	export interface QueryRequestPayload {

		/** Third-party device IDs for which to get the device states. */
		devices?: Array<AgentDeviceId>;
	}


	/**
	 * Response type for the
	 * [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
	 * This should follow the same format as the Google smart home
	 * `action.devices.QUERY`
	 * [response](https://developers.google.com/assistant/smarthome/reference/intent/query).
	 * # Example
	 * ```json
	 * {
	 *   "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf",
	 *   "payload": {
	 *     "devices": {
	 *       "123": {
	 *         "on": true,
	 *         "online": true
	 *       },
	 *       "456": {
	 *         "on": true,
	 *         "online": true,
	 *         "brightness": 80,
	 *         "color": {
	 *           "name": "cerulean",
	 *           "spectrumRGB": 31655
	 *         }
	 *       }
	 *     }
	 *   }
	 * }
	 * ```
	 */
	export interface QueryResponse {

		/** Payload containing device states information. */
		payload?: QueryResponsePayload;

		/** Request ID used for debugging. Copied from the request. */
		requestId?: string;
	}


	/** Payload containing device states information. */
	export interface QueryResponsePayload {

		/**
		 * States of the devices. Map of third-party device ID to struct of device
		 * states.
		 */
		devices?: {[id: string]: any };
	}


	/** The states and notifications specific to a device. */
	export interface ReportStateAndNotificationDevice {

		/**
		 * Notifications metadata for devices. See the **Device NOTIFICATIONS**
		 * section of the individual trait [reference
		 * guides](https://developers.google.com/assistant/smarthome/traits).
		 */
		notifications?: {[id: string]: any };

		/**
		 * States of devices to update. See the **Device STATES** section
		 * of the individual trait [reference
		 * guides](https://developers.google.com/assistant/smarthome/traits).
		 */
		states?: {[id: string]: any };
	}


	/**
	 * Request type for the
	 * [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification)
	 * call. It may include states, notifications, or both. States and notifications
	 * are defined per `device_id` (for example, "123" and "456" in the following
	 * example).
	 * # Example
	 * ```json
	 * {
	 *   "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf",
	 *   "agentUserId": "1234",
	 *   "payload": {
	 *     "devices": {
	 *       "states": {
	 *         "123": {
	 *           "on": true
	 *         },
	 *         "456": {
	 *           "on": true,
	 *           "brightness": 10
	 *         }
	 *       },
	 *     }
	 *   }
	 * }
	 * ```
	 */
	export interface ReportStateAndNotificationRequest {

		/** Required. Third-party user ID. */
		agentUserId?: string;

		/** Unique identifier per event (for example, a doorbell press). */
		eventId?: string;

		/** Token to maintain state in the follow up notification response. */
		followUpToken?: string;

		/** Payload containing the state and notification information for devices. */
		payload?: StateAndNotificationPayload;

		/** Request ID used for debugging. */
		requestId?: string;
	}


	/** Payload containing the state and notification information for devices. */
	export interface StateAndNotificationPayload {

		/** The states and notifications specific to a device. */
		devices?: ReportStateAndNotificationDevice;
	}


	/**
	 * Response type for the
	 * [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification)
	 * call.
	 */
	export interface ReportStateAndNotificationResponse {

		/** Request ID copied from ReportStateAndNotificationRequest. */
		requestId?: string;
	}


	/**
	 * Request type for the
	 * [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices)
	 * call.
	 */
	export interface RequestSyncDevicesRequest {

		/** Required. Third-party user ID. */
		agentUserId?: string;

		/**
		 * Optional. If set, the request will be added to a queue and a response will
		 * be returned immediately. This enables concurrent requests for the given
		 * `agent_user_id`, but the caller will not receive any error responses.
		 */
		async?: boolean;
	}


	/**
	 * Response type for the
	 * [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices)
	 * call.
	 * Intentionally empty upon success. An HTTP response code is returned
	 * with more details upon failure.
	 */
	export interface RequestSyncDevicesResponse {
	}


	/**
	 * Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync)
	 * call.
	 */
	export interface SyncRequest {

		/** Required. Third-party user ID. */
		agentUserId?: string;

		/** Request ID used for debugging. */
		requestId?: string;
	}


	/**
	 * Response type for the
	 * [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.
	 * This should follow the same format as the Google smart home
	 * `action.devices.SYNC`
	 * [response](https://developers.google.com/assistant/smarthome/reference/intent/sync).
	 * # Example
	 * ```json
	 * {
	 *   "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf",
	 *   "payload": {
	 *     "agentUserId": "1836.15267389",
	 *     "devices": [{
	 *       "id": "123",
	 *       "type": "action.devices.types.OUTLET",
	 *       "traits": [
	 *         "action.devices.traits.OnOff"
	 *       ],
	 *       "name": {
	 *         "defaultNames": ["My Outlet 1234"],
	 *         "name": "Night light",
	 *         "nicknames": ["wall plug"]
	 *       },
	 *       "willReportState": false,
	 *       "deviceInfo": {
	 *         "manufacturer": "lights-out-inc",
	 *         "model": "hs1234",
	 *         "hwVersion": "3.2",
	 *         "swVersion": "11.4"
	 *       },
	 *       "customData": {
	 *         "fooValue": 74,
	 *         "barValue": true,
	 *         "bazValue": "foo"
	 *       }
	 *     }]
	 *   }
	 * }
	 * ```
	 */
	export interface SyncResponse {

		/** Payload containing device information. */
		payload?: SyncResponsePayload;

		/** Request ID used for debugging. Copied from the request. */
		requestId?: string;
	}


	/** Payload containing device information. */
	export interface SyncResponsePayload {

		/** Third-party user ID */
		agentUserId?: string;

		/** Devices associated with the third-party user. */
		devices?: Array<Device>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the current states in Home Graph for the given set of the third-party
		 * user's devices.
		 * The third-party user's identity is passed in via the `agent_user_id`
		 * (see QueryRequest).
		 * This request must be authorized using service account credentials from your
		 * Actions console project.
		 * Post v1/devices:query
		 * @return {void} Successful response
		 */
		Homegraph_devices_query(requestBody: QueryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/devices:query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports device state and optionally sends device notifications.
		 * Called by your smart home Action when the state of a third-party device
		 * changes or you need to send a notification about the device.
		 * See [Implement Report
		 * State](https://developers.google.com/assistant/smarthome/develop/report-state)
		 * for more information.
		 * This method updates the device state according to its declared
		 * [traits](https://developers.google.com/assistant/smarthome/concepts/devices-traits).
		 * Publishing a new state value outside of these traits will result in an
		 * `INVALID_ARGUMENT` error response.
		 * The third-party user's identity is passed in via the `agent_user_id`
		 * (see ReportStateAndNotificationRequest).
		 * This request must be authorized using service account credentials from your
		 * Actions console project.
		 * Post v1/devices:reportStateAndNotification
		 * @return {void} Successful response
		 */
		Homegraph_devices_reportStateAndNotification(requestBody: ReportStateAndNotificationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/devices:reportStateAndNotification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Requests Google to send an `action.devices.SYNC`
		 * [intent](https://developers.google.com/assistant/smarthome/reference/intent/sync)
		 * to your smart home Action to update device metadata for the given user.
		 * The third-party user's identity is passed via the `agent_user_id`
		 * (see RequestSyncDevicesRequest).
		 * This request must be authorized using service account credentials from your
		 * Actions console project.
		 * Post v1/devices:requestSync
		 * @return {void} Successful response
		 */
		Homegraph_devices_requestSync(requestBody: RequestSyncDevicesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/devices:requestSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the devices associated with the given third-party user.
		 * The third-party user's identity is passed in via the `agent_user_id`
		 * (see SyncRequest).
		 * This request must be authorized using service account credentials from your
		 * Actions console project.
		 * Post v1/devices:sync
		 * @return {void} Successful response
		 */
		Homegraph_devices_sync(requestBody: SyncRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/devices:sync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unlinks the given third-party user from your smart home Action.
		 * All data related to this user will be deleted.
		 * For more details on how users link their accounts, see
		 * [fulfillment and
		 * authentication](https://developers.google.com/assistant/smarthome/concepts/fulfillment-authentication).
		 * The third-party user's identity is passed in via the `agent_user_id`
		 * (see DeleteAgentUserRequest).
		 * This request must be authorized using service account credentials from your
		 * Actions console project.
		 * Delete v1/{agentUserId}
		 * @param {string} agentUserId Required. Third-party user ID.
		 * @param {string} requestId Request ID used for debugging.
		 * @return {void} Successful response
		 */
		Homegraph_agentUsers_delete(agentUserId: string, requestId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (agentUserId == null ? '' : encodeURIComponent(agentUserId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), { observe: 'response', responseType: 'text' });
		}
	}

}

