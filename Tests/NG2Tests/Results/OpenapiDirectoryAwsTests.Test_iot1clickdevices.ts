import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ClaimDevicesByClaimCodeResponse {

		/**
		 * Max length: 40
		 * Min length: 12
		 */
		ClaimCode?: string | null;
		Total?: number | null;
	}
	export interface ClaimDevicesByClaimCodeResponseFormProperties {

		/**
		 * Max length: 40
		 * Min length: 12
		 */
		ClaimCode: FormControl<string | null | undefined>,
		Total: FormControl<number | null | undefined>,
	}
	export function CreateClaimDevicesByClaimCodeResponseFormGroup() {
		return new FormGroup<ClaimDevicesByClaimCodeResponseFormProperties>({
			ClaimCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(40)]),
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface DescribeDeviceResponse {
		DeviceDescription?: DeviceDescription;
	}
	export interface DescribeDeviceResponseFormProperties {
	}
	export function CreateDescribeDeviceResponseFormGroup() {
		return new FormGroup<DescribeDeviceResponseFormProperties>({
		});

	}

	export interface DeviceDescription {
		Arn?: string | null;

		/**
		 * DeviceAttributes is a string-to-string map specified by the user.
		 */
		Attributes?: DeviceAttributes;
		DeviceId?: string | null;
		Enabled?: boolean | null;
		RemainingLife?: number | null;
		Type?: string | null;
		Tags?: __mapOf__string;
	}
	export interface DeviceDescriptionFormProperties {
		Arn: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		RemainingLife: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateDeviceDescriptionFormGroup() {
		return new FormGroup<DeviceDescriptionFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			RemainingLife: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 *  DeviceAttributes is a string-to-string map specified by the user.
	 */
	export interface DeviceAttributes {
	}

	/**
	 *  DeviceAttributes is a string-to-string map specified by the user.
	 */
	export interface DeviceAttributesFormProperties {
	}
	export function CreateDeviceAttributesFormGroup() {
		return new FormGroup<DeviceAttributesFormProperties>({
		});

	}

	export interface __mapOf__string {
	}
	export interface __mapOf__stringFormProperties {
	}
	export function Create__mapOf__stringFormGroup() {
		return new FormGroup<__mapOf__stringFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface FinalizeDeviceClaimResponse {
		State?: string | null;
	}
	export interface FinalizeDeviceClaimResponseFormProperties {
		State: FormControl<string | null | undefined>,
	}
	export function CreateFinalizeDeviceClaimResponseFormGroup() {
		return new FormGroup<FinalizeDeviceClaimResponseFormProperties>({
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreconditionFailedException {
	}
	export interface PreconditionFailedExceptionFormProperties {
	}
	export function CreatePreconditionFailedExceptionFormGroup() {
		return new FormGroup<PreconditionFailedExceptionFormProperties>({
		});

	}

	export interface ResourceConflictException {
	}
	export interface ResourceConflictExceptionFormProperties {
	}
	export function CreateResourceConflictExceptionFormGroup() {
		return new FormGroup<ResourceConflictExceptionFormProperties>({
		});

	}

	export interface GetDeviceMethodsResponse {
		DeviceMethods?: Array<DeviceMethod>;
	}
	export interface GetDeviceMethodsResponseFormProperties {
	}
	export function CreateGetDeviceMethodsResponseFormGroup() {
		return new FormGroup<GetDeviceMethodsResponseFormProperties>({
		});

	}

	export interface DeviceMethod {
		DeviceType?: string | null;
		MethodName?: string | null;
	}
	export interface DeviceMethodFormProperties {
		DeviceType: FormControl<string | null | undefined>,
		MethodName: FormControl<string | null | undefined>,
	}
	export function CreateDeviceMethodFormGroup() {
		return new FormGroup<DeviceMethodFormProperties>({
			DeviceType: new FormControl<string | null | undefined>(undefined),
			MethodName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InitiateDeviceClaimResponse {
		State?: string | null;
	}
	export interface InitiateDeviceClaimResponseFormProperties {
		State: FormControl<string | null | undefined>,
	}
	export function CreateInitiateDeviceClaimResponseFormGroup() {
		return new FormGroup<InitiateDeviceClaimResponseFormProperties>({
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvokeDeviceMethodResponse {
		DeviceMethodResponse?: string | null;
	}
	export interface InvokeDeviceMethodResponseFormProperties {
		DeviceMethodResponse: FormControl<string | null | undefined>,
	}
	export function CreateInvokeDeviceMethodResponseFormGroup() {
		return new FormGroup<InvokeDeviceMethodResponseFormProperties>({
			DeviceMethodResponse: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RangeNotSatisfiableException {
	}
	export interface RangeNotSatisfiableExceptionFormProperties {
	}
	export function CreateRangeNotSatisfiableExceptionFormGroup() {
		return new FormGroup<RangeNotSatisfiableExceptionFormProperties>({
		});

	}

	export interface ListDeviceEventsResponse {
		Events?: Array<DeviceEvent>;
		NextToken?: string | null;
	}
	export interface ListDeviceEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceEventsResponseFormGroup() {
		return new FormGroup<ListDeviceEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceEvent {
		Device?: Device;
		StdEvent?: string | null;
	}
	export interface DeviceEventFormProperties {
		StdEvent: FormControl<string | null | undefined>,
	}
	export function CreateDeviceEventFormGroup() {
		return new FormGroup<DeviceEventFormProperties>({
			StdEvent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Device {
		Attributes?: Attributes;
		DeviceId?: string | null;
		Type?: string | null;
	}
	export interface DeviceFormProperties {
		DeviceId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Attributes {
	}
	export interface AttributesFormProperties {
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
		});

	}

	export interface ListDevicesResponse {
		Devices?: Array<DeviceDescription>;
		NextToken?: string | null;
	}
	export interface ListDevicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesResponseFormGroup() {
		return new FormGroup<ListDevicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: __mapOf__string;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface UnclaimDeviceResponse {
		State?: string | null;
	}
	export interface UnclaimDeviceResponseFormProperties {
		State: FormControl<string | null | undefined>,
	}
	export function CreateUnclaimDeviceResponseFormGroup() {
		return new FormGroup<UnclaimDeviceResponseFormProperties>({
			State: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeviceStateResponse {
	}
	export interface UpdateDeviceStateResponseFormProperties {
	}
	export function CreateUpdateDeviceStateResponseFormGroup() {
		return new FormGroup<UpdateDeviceStateResponseFormProperties>({
		});

	}

	export interface ClaimDevicesByClaimCodeRequest {
	}
	export interface ClaimDevicesByClaimCodeRequestFormProperties {
	}
	export function CreateClaimDevicesByClaimCodeRequestFormGroup() {
		return new FormGroup<ClaimDevicesByClaimCodeRequestFormProperties>({
		});

	}

	export interface DescribeDeviceRequest {
	}
	export interface DescribeDeviceRequestFormProperties {
	}
	export function CreateDescribeDeviceRequestFormGroup() {
		return new FormGroup<DescribeDeviceRequestFormProperties>({
		});

	}

	export interface FinalizeDeviceClaimRequest {
		Tags?: __mapOf__string;
	}
	export interface FinalizeDeviceClaimRequestFormProperties {
	}
	export function CreateFinalizeDeviceClaimRequestFormGroup() {
		return new FormGroup<FinalizeDeviceClaimRequestFormProperties>({
		});

	}

	export interface GetDeviceMethodsRequest {
	}
	export interface GetDeviceMethodsRequestFormProperties {
	}
	export function CreateGetDeviceMethodsRequestFormGroup() {
		return new FormGroup<GetDeviceMethodsRequestFormProperties>({
		});

	}

	export interface InitiateDeviceClaimRequest {
	}
	export interface InitiateDeviceClaimRequestFormProperties {
	}
	export function CreateInitiateDeviceClaimRequestFormGroup() {
		return new FormGroup<InitiateDeviceClaimRequestFormProperties>({
		});

	}

	export interface InvokeDeviceMethodRequest {
		DeviceMethod?: DeviceMethod;
		DeviceMethodParameters?: string | null;
	}
	export interface InvokeDeviceMethodRequestFormProperties {
		DeviceMethodParameters: FormControl<string | null | undefined>,
	}
	export function CreateInvokeDeviceMethodRequestFormGroup() {
		return new FormGroup<InvokeDeviceMethodRequestFormProperties>({
			DeviceMethodParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeviceEventsRequest {
	}
	export interface ListDeviceEventsRequestFormProperties {
	}
	export function CreateListDeviceEventsRequestFormGroup() {
		return new FormGroup<ListDeviceEventsRequestFormProperties>({
		});

	}

	export interface ListDevicesRequest {
	}
	export interface ListDevicesRequestFormProperties {
	}
	export function CreateListDevicesRequestFormGroup() {
		return new FormGroup<ListDevicesRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: __mapOf__string;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UnclaimDeviceRequest {
	}
	export interface UnclaimDeviceRequestFormProperties {
	}
	export function CreateUnclaimDeviceRequestFormGroup() {
		return new FormGroup<UnclaimDeviceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateDeviceStateRequest {
		Enabled?: boolean | null;
	}
	export interface UpdateDeviceStateRequestFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDeviceStateRequestFormGroup() {
		return new FormGroup<UpdateDeviceStateRequestFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

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
		ListDeviceEvents(deviceId: string, fromTimeStamp: Date, maxResults: number | null | undefined, nextToken: string | null | undefined, toTimeStamp: Date): Observable<ListDeviceEventsResponse> {
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
		ListDevices(deviceType: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListDevicesResponse> {
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
	export interface FinalizeDeviceClaimPutBodyFormProperties {

		/**
		 * <p>A collection of key/value pairs defining the resource tags. For example, {
		 * "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
		 * Tagging Strategies</a>.</p><p>
		 * </p>
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateFinalizeDeviceClaimPutBodyFormGroup() {
		return new FormGroup<FinalizeDeviceClaimPutBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface InvokeDeviceMethodPostBody {

		/** The device method to invoke. */
		deviceMethod?: InvokeDeviceMethodPostBodyDeviceMethod;

		/** A JSON encoded string containing the device method request parameters. */
		deviceMethodParameters?: string | null;
	}
	export interface InvokeDeviceMethodPostBodyFormProperties {

		/** A JSON encoded string containing the device method request parameters. */
		deviceMethodParameters: FormControl<string | null | undefined>,
	}
	export function CreateInvokeDeviceMethodPostBodyFormGroup() {
		return new FormGroup<InvokeDeviceMethodPostBodyFormProperties>({
			deviceMethodParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvokeDeviceMethodPostBodyDeviceMethod {
		DeviceType?: string | null;
		MethodName?: string | null;
	}
	export interface InvokeDeviceMethodPostBodyDeviceMethodFormProperties {
		DeviceType: FormControl<string | null | undefined>,
		MethodName: FormControl<string | null | undefined>,
	}
	export function CreateInvokeDeviceMethodPostBodyDeviceMethodFormGroup() {
		return new FormGroup<InvokeDeviceMethodPostBodyDeviceMethodFormProperties>({
			DeviceType: new FormControl<string | null | undefined>(undefined),
			MethodName: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface TagResourcePostBodyFormProperties {

		/**
		 * <p>A collection of key/value pairs defining the resource tags. For example, {
		 * "tags": {"key1": "value1", "key2": "value2"} }. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
		 * Tagging Strategies</a>.</p><p>
		 * </p>
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDeviceStatePutBody {

		/**
		 * If true, the device is enabled. If false, the device is
		 * disabled.
		 */
		enabled?: boolean | null;
	}
	export interface UpdateDeviceStatePutBodyFormProperties {

		/**
		 * If true, the device is enabled. If false, the device is
		 * disabled.
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDeviceStatePutBodyFormGroup() {
		return new FormGroup<UpdateDeviceStatePutBodyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

