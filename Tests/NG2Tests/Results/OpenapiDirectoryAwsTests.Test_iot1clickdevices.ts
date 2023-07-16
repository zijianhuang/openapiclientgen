import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ClaimDevicesByClaimCodeResponse {
		ClaimCode?: string;
		Total?: number;
	}

	export interface InvalidRequestException {
	}

	export interface InternalFailureException {
	}

	export interface ForbiddenException {
	}

	export interface DescribeDeviceResponse {
		DeviceDescription?: DeviceDescription;
	}

	export interface DeviceDescription {
		Arn?: string;

		/**
		 * DeviceAttributes is a string-to-string map specified by the user.
		 */
		Attributes?: DeviceAttributes;
		DeviceId?: string;
		Enabled?: boolean;
		RemainingLife?: number;
		Type?: string;
		Tags?: __mapOf__string;
	}


	/**
	 *  DeviceAttributes is a string-to-string map specified by the user.
	 */
	export interface DeviceAttributes {
	}

	export interface __mapOf__string {
	}

	export interface ResourceNotFoundException {
	}

	export interface FinalizeDeviceClaimResponse {
		State?: string;
	}

	export interface PreconditionFailedException {
	}

	export interface ResourceConflictException {
	}

	export interface GetDeviceMethodsResponse {
		DeviceMethods?: Array<DeviceMethod>;
	}

	export interface DeviceMethod {
		DeviceType?: string;
		MethodName?: string;
	}

	export interface InitiateDeviceClaimResponse {
		State?: string;
	}

	export interface InvokeDeviceMethodResponse {
		DeviceMethodResponse?: string;
	}

	export interface RangeNotSatisfiableException {
	}

	export interface ListDeviceEventsResponse {
		Events?: Array<DeviceEvent>;
		NextToken?: string;
	}

	export interface DeviceEvent {
		Device?: Device;
		StdEvent?: string;
	}

	export interface Device {
		Attributes?: Attributes;
		DeviceId?: string;
		Type?: string;
	}

	export interface Attributes {
	}

	export interface ListDevicesResponse {
		Devices?: Array<DeviceDescription>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string;
	}

	export interface UnclaimDeviceResponse {
		State?: string;
	}

	export interface UpdateDeviceStateResponse {
	}

	export interface ClaimDevicesByClaimCodeRequest {
	}

	export interface DescribeDeviceRequest {
	}

	export interface FinalizeDeviceClaimRequest {
		Tags?: __mapOf__string;
	}

	export interface GetDeviceMethodsRequest {
	}

	export interface InitiateDeviceClaimRequest {
	}

	export interface InvokeDeviceMethodRequest {
		DeviceMethod?: DeviceMethod;
		DeviceMethodParameters?: string;
	}

	export interface ListDeviceEventsRequest {
	}

	export interface ListDevicesRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface TagResourceRequest {
		Tags: __mapOf__string;
	}

	export interface UnclaimDeviceRequest {
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateDeviceStateRequest {
		Enabled?: boolean;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds device(s) to your account (i.e., claim one or more devices) if and only if you
		 * received a claim code with the device(s).
		 * Put claims/{claimCode}
		 * @param {string} claimCode The claim code, starting with "C-", as provided by the device manufacturer.
		 * @return {ClaimDevicesByClaimCodeResponse} Success
		 */
		ClaimDevicesByClaimCode(claimCode: string): Observable<ClaimDevicesByClaimCodeResponse> {
			return this.http.put<ClaimDevicesByClaimCodeResponse>(this.baseUri + 'claims/' + (claimCode == null ? '' : encodeURIComponent(claimCode)), null, {});
		}

		/**
		 * Given a device ID, returns a DescribeDeviceResponse object describing the
		 * details of the device.
		 * Get devices/{deviceId}
		 * @param {string} deviceId The unique identifier of the device.
		 * @return {DescribeDeviceResponse} Success
		 */
		DescribeDevice(deviceId: string): Observable<DescribeDeviceResponse> {
			return this.http.get<DescribeDeviceResponse>(this.baseUri + 'devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)), {});
		}

		/**
		 * <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
		 * <p>Claiming a device consists of initiating a claim, then publishing a device event,
		 * and finalizing the claim. For a device of type button, a device event can
		 * be published by simply clicking the device.</p>
		 * </note>
		 * Put devices/{deviceId}/finalize-claim
		 * @param {string} deviceId The unique identifier of the device.
		 * @return {FinalizeDeviceClaimResponse} Success
		 */
		FinalizeDeviceClaim(deviceId: string, requestBody: FinalizeDeviceClaimPutBody): Observable<FinalizeDeviceClaimResponse> {
			return this.http.put<FinalizeDeviceClaimResponse>(this.baseUri + 'devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/finalize-claim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Given a device ID, returns the invokable methods associated with the device.
		 * Get devices/{deviceId}/methods
		 * @param {string} deviceId The unique identifier of the device.
		 * @return {GetDeviceMethodsResponse} Success
		 */
		GetDeviceMethods(deviceId: string): Observable<GetDeviceMethodsResponse> {
			return this.http.get<GetDeviceMethodsResponse>(this.baseUri + 'devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/methods', {});
		}

		/**
		 * Given a device ID, issues a request to invoke a named device method (with possible
		 * parameters). See the "Example POST" code snippet below.
		 * Post devices/{deviceId}/methods
		 * @param {string} deviceId The unique identifier of the device.
		 * @return {InvokeDeviceMethodResponse} Success
		 */
		InvokeDeviceMethod(deviceId: string, requestBody: InvokeDeviceMethodPostBody): Observable<InvokeDeviceMethodResponse> {
			return this.http.post<InvokeDeviceMethodResponse>(this.baseUri + 'devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/methods', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Given a device ID, initiates a claim request for the associated device.</p><note>
		 * <p>Claiming a device consists of initiating a claim, then publishing a device event,
		 * and finalizing the claim. For a device of type button, a device event can
		 * be published by simply clicking the device.</p>
		 * </note>
		 * Put devices/{deviceId}/initiate-claim
		 * @param {string} deviceId The unique identifier of the device.
		 * @return {InitiateDeviceClaimResponse} Success
		 */
		InitiateDeviceClaim(deviceId: string): Observable<InitiateDeviceClaimResponse> {
			return this.http.put<InitiateDeviceClaimResponse>(this.baseUri + 'devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/initiate-claim', null, {});
		}

		/**
		 * Using a device ID, returns a DeviceEventsResponse object containing an
		 * array of events for the device.
		 * Get devices/{deviceId}/events#fromTimeStamp&toTimeStamp
		 * @param {string} deviceId The unique identifier of the device.
		 * @param {Date} fromTimeStamp The start date for the device event query, in ISO8061 format. For example,
		 *  2018-03-28T15:45:12.880Z
		 *  
		 * @param {number} maxResults The maximum number of results to return per request. If not set, a default value of
		 *  100 is used.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {Date} toTimeStamp The end date for the device event query, in ISO8061 format. For example,
		 *  2018-03-28T15:45:12.880Z
		 *  
		 * @return {ListDeviceEventsResponse} Success
		 */
		ListDeviceEvents(deviceId: string, fromTimeStamp: Date, maxResults: number, nextToken: string, toTimeStamp: Date): Observable<ListDeviceEventsResponse> {
			return this.http.get<ListDeviceEventsResponse>(this.baseUri + 'devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/events#fromTimeStamp&toTimeStamp&fromTimeStamp=' + fromTimeStamp.toISOString() + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&toTimeStamp=' + toTimeStamp.toISOString(), {});
		}

		/**
		 * Lists the 1-Click compatible devices associated with your AWS account.
		 * Get devices
		 * @param {string} deviceType The type of the device, such as "button".
		 * @param {number} maxResults The maximum number of results to return per request. If not set, a default value of
		 *  100 is used.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListDevicesResponse} Success
		 */
		ListDevices(deviceType: string, maxResults: number, nextToken: string): Observable<ListDevicesResponse> {
			return this.http.get<ListDevicesResponse>(this.baseUri + 'devices?deviceType=' + (deviceType == null ? '' : encodeURIComponent(deviceType)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists the tags associated with the specified resource ARN.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Adds or updates the tags associated with the resource ARN. See <a href="https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-appendix.html#1click-limits">AWS IoT 1-Click Service Limits</a> for the maximum number of tags allowed per
		 * resource.
		 * Post tags/{resource_arn}
		 * @param {string} resource_arn The ARN of the resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates a device from your AWS account using its device ID.
		 * Put devices/{deviceId}/unclaim
		 * @param {string} deviceId The unique identifier of the device.
		 * @return {UnclaimDeviceResponse} Success
		 */
		UnclaimDevice(deviceId: string): Observable<UnclaimDeviceResponse> {
			return this.http.put<UnclaimDeviceResponse>(this.baseUri + 'devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/unclaim', null, {});
		}

		/**
		 * Using tag keys, deletes the tags (key/value pairs) associated with the specified
		 * resource ARN.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The ARN of the resource.
		 * @param {Array<string>} tagKeys A collections of tag keys. For example, {"key1","key2"}
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Using a Boolean value (true or false), this operation
		 * enables or disables the device given a device ID.
		 * Put devices/{deviceId}/state
		 * @param {string} deviceId The unique identifier of the device.
		 * @return {UpdateDeviceStateResponse} Success
		 */
		UpdateDeviceState(deviceId: string, requestBody: UpdateDeviceStatePutBody): Observable<UpdateDeviceStateResponse> {
			return this.http.put<UpdateDeviceStateResponse>(this.baseUri + 'devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface FinalizeDeviceClaimPutBody {

		/**
		 * <p>A collection of key/value pairs defining the resource tags. For example, {
		 * "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
		 * Tagging Strategies</a>.</p><p>
		 * </p>
		 */
		tags?: {[id: string]: string };
	}

	export interface InvokeDeviceMethodPostBody {

		/** The device method to invoke. */
		deviceMethod?: InvokeDeviceMethodPostBodyDeviceMethod;

		/** A JSON encoded string containing the device method request parameters. */
		deviceMethodParameters?: string;
	}

	export interface InvokeDeviceMethodPostBodyDeviceMethod {
		DeviceType?: string;
		MethodName?: string;
	}

	export interface TagResourcePostBody {

		/**
		 * <p>A collection of key/value pairs defining the resource tags. For example, {
		 * "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
		 * Tagging Strategies</a>.</p><p>
		 * </p>
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface UpdateDeviceStatePutBody {

		/**
		 * If true, the device is enabled. If false, the device is
		 * disabled.
		 */
		enabled?: boolean;
	}

}

