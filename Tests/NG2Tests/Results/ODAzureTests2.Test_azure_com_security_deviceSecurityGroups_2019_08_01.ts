import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A custom alert rule that checks if a value (depends on the custom alert type) is allowed. */
	export interface AllowlistCustomAlertRule {

		/**
		 * The values to allow. The format of the values depends on the rule type.
		 * Required
		 */
		allowlistValues: Array<string>;

		/** The type of the custom alert rule. */
		ruleType?: AllowlistCustomAlertRuleRuleType | null;
	}

	/** A custom alert rule that checks if a value (depends on the custom alert type) is allowed. */
	export interface AllowlistCustomAlertRuleFormProperties {

		/** The type of the custom alert rule. */
		ruleType: FormControl<AllowlistCustomAlertRuleRuleType | null | undefined>,
	}
	export function CreateAllowlistCustomAlertRuleFormGroup() {
		return new FormGroup<AllowlistCustomAlertRuleFormProperties>({
			ruleType: new FormControl<AllowlistCustomAlertRuleRuleType | null | undefined>(undefined),
		});

	}

	export enum AllowlistCustomAlertRuleRuleType { ConnectionToIpNotAllowed = 0, LocalUserNotAllowed = 1, ProcessNotAllowed = 2 }


	/** A custom alert rule. */
	export interface CustomAlertRule {

		/** The description of the custom alert. */
		description?: string | null;

		/** The display name of the custom alert. */
		displayName?: string | null;

		/**
		 * Status of the custom alert.
		 * Required
		 */
		isEnabled: boolean;

		/**
		 * The type of the custom alert rule.
		 * Required
		 */
		ruleType: string;
	}

	/** A custom alert rule. */
	export interface CustomAlertRuleFormProperties {

		/** The description of the custom alert. */
		description: FormControl<string | null | undefined>,

		/** The display name of the custom alert. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Status of the custom alert.
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The type of the custom alert rule.
		 * Required
		 */
		ruleType: FormControl<string | null | undefined>,
	}
	export function CreateCustomAlertRuleFormGroup() {
		return new FormGroup<CustomAlertRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ruleType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A custom alert rule that checks if a value (depends on the custom alert type) is denied. */
	export interface DenylistCustomAlertRule {

		/**
		 * The values to deny. The format of the values depends on the rule type.
		 * Required
		 */
		denylistValues: Array<string>;
	}

	/** A custom alert rule that checks if a value (depends on the custom alert type) is denied. */
	export interface DenylistCustomAlertRuleFormProperties {
	}
	export function CreateDenylistCustomAlertRuleFormGroup() {
		return new FormGroup<DenylistCustomAlertRuleFormProperties>({
		});

	}


	/** The device security group resource */
	export interface DeviceSecurityGroup {

		/** describes properties of a security group. */
		properties?: DeviceSecurityGroupProperties;
	}

	/** The device security group resource */
	export interface DeviceSecurityGroupFormProperties {
	}
	export function CreateDeviceSecurityGroupFormGroup() {
		return new FormGroup<DeviceSecurityGroupFormProperties>({
		});

	}


	/** describes properties of a security group. */
	export interface DeviceSecurityGroupProperties {

		/** The allow-list custom alert rules. */
		allowlistRules?: Array<AllowlistCustomAlertRule>;

		/** The deny-list custom alert rules. */
		denylistRules?: Array<DenylistCustomAlertRule>;

		/** The list of custom alert threshold rules. */
		thresholdRules?: Array<ThresholdCustomAlertRule>;

		/** The list of custom alert time-window rules. */
		timeWindowRules?: Array<TimeWindowCustomAlertRule>;
	}

	/** describes properties of a security group. */
	export interface DeviceSecurityGroupPropertiesFormProperties {
	}
	export function CreateDeviceSecurityGroupPropertiesFormGroup() {
		return new FormGroup<DeviceSecurityGroupPropertiesFormProperties>({
		});

	}


	/** A custom alert rule that checks if a value (depends on the custom alert type) is within the given range. */
	export interface ThresholdCustomAlertRule {

		/**
		 * The maximum threshold.
		 * Required
		 */
		maxThreshold: number;

		/**
		 * The minimum threshold.
		 * Required
		 */
		minThreshold: number;
	}

	/** A custom alert rule that checks if a value (depends on the custom alert type) is within the given range. */
	export interface ThresholdCustomAlertRuleFormProperties {

		/**
		 * The maximum threshold.
		 * Required
		 */
		maxThreshold: FormControl<number | null | undefined>,

		/**
		 * The minimum threshold.
		 * Required
		 */
		minThreshold: FormControl<number | null | undefined>,
	}
	export function CreateThresholdCustomAlertRuleFormGroup() {
		return new FormGroup<ThresholdCustomAlertRuleFormProperties>({
			maxThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minThreshold: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range. */
	export interface TimeWindowCustomAlertRule {

		/** The type of the custom alert rule. */
		ruleType?: TimeWindowCustomAlertRuleRuleType | null;

		/**
		 * The time window size in iso8601 format.
		 * Required
		 */
		timeWindowSize: string;
	}

	/** A custom alert rule that checks if the number of activities (depends on the custom alert type) in a time window is within the given range. */
	export interface TimeWindowCustomAlertRuleFormProperties {

		/** The type of the custom alert rule. */
		ruleType: FormControl<TimeWindowCustomAlertRuleRuleType | null | undefined>,

		/**
		 * The time window size in iso8601 format.
		 * Required
		 */
		timeWindowSize: FormControl<string | null | undefined>,
	}
	export function CreateTimeWindowCustomAlertRuleFormGroup() {
		return new FormGroup<TimeWindowCustomAlertRuleFormProperties>({
			ruleType: new FormControl<TimeWindowCustomAlertRuleRuleType | null | undefined>(undefined),
			timeWindowSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TimeWindowCustomAlertRuleRuleType { ActiveConnectionsNotInAllowedRange = 0, AmqpC2DMessagesNotInAllowedRange = 1, MqttC2DMessagesNotInAllowedRange = 2, HttpC2DMessagesNotInAllowedRange = 3, AmqpC2DRejectedMessagesNotInAllowedRange = 4, MqttC2DRejectedMessagesNotInAllowedRange = 5, HttpC2DRejectedMessagesNotInAllowedRange = 6, AmqpD2CMessagesNotInAllowedRange = 7, MqttD2CMessagesNotInAllowedRange = 8, HttpD2CMessagesNotInAllowedRange = 9, DirectMethodInvokesNotInAllowedRange = 10, FailedLocalLoginsNotInAllowedRange = 11, FileUploadsNotInAllowedRange = 12, QueuePurgesNotInAllowedRange = 13, TwinUpdatesNotInAllowedRange = 14, UnauthorizedOperationsNotInAllowedRange = 15 }


	/** List of device security groups */
	export interface DeviceSecurityGroupList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of device security group objects */
		value?: Array<DeviceSecurityGroup>;
	}

	/** List of device security groups */
	export interface DeviceSecurityGroupListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDeviceSecurityGroupListFormGroup() {
		return new FormGroup<DeviceSecurityGroupListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A List custom alert rule. */
	export interface ListCustomAlertRule {

		/** The value type of the items in the list. */
		valueType?: ListCustomAlertRuleValueType | null;
	}

	/** A List custom alert rule. */
	export interface ListCustomAlertRuleFormProperties {

		/** The value type of the items in the list. */
		valueType: FormControl<ListCustomAlertRuleValueType | null | undefined>,
	}
	export function CreateListCustomAlertRuleFormGroup() {
		return new FormGroup<ListCustomAlertRuleFormProperties>({
			valueType: new FormControl<ListCustomAlertRuleValueType | null | undefined>(undefined),
		});

	}

	export enum ListCustomAlertRuleValueType { IpCidr = 0, String = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Use this method get the list of device security groups for the specified IoT Hub resource.
		 * Get {resourceId}/providers/Microsoft.Security/deviceSecurityGroups
		 * @param {string} api_version API version for the operation
		 * @param {string} resourceId The identifier of the resource.
		 * @return {DeviceSecurityGroupList} OK
		 */
		DeviceSecurityGroups_List(api_version: string, resourceId: string): Observable<DeviceSecurityGroupList> {
			return this.http.get<DeviceSecurityGroupList>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/providers/Microsoft.Security/deviceSecurityGroups?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Use this method to get the device security group for the specified IoT Hub resource.
		 * Get {resourceId}/providers/Microsoft.Security/deviceSecurityGroups/{deviceSecurityGroupName}
		 * @param {string} api_version API version for the operation
		 * @param {string} resourceId The identifier of the resource.
		 * @param {string} deviceSecurityGroupName The name of the device security group. Note that the name of the device security group is case insensitive.
		 * @return {DeviceSecurityGroup} Successful request to get device security group.
		 */
		DeviceSecurityGroups_Get(api_version: string, resourceId: string, deviceSecurityGroupName: string): Observable<DeviceSecurityGroup> {
			return this.http.get<DeviceSecurityGroup>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/providers/Microsoft.Security/deviceSecurityGroups/' + (deviceSecurityGroupName == null ? '' : encodeURIComponent(deviceSecurityGroupName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Use this method to creates or updates the device security group on a specified IoT Hub resource.
		 * Put {resourceId}/providers/Microsoft.Security/deviceSecurityGroups/{deviceSecurityGroupName}
		 * @param {string} api_version API version for the operation
		 * @param {string} resourceId The identifier of the resource.
		 * @param {string} deviceSecurityGroupName The name of the device security group. Note that the name of the device security group is case insensitive.
		 * @param {DeviceSecurityGroup} requestBody Security group object.
		 * @return {DeviceSecurityGroup} Security group was updated.
		 */
		DeviceSecurityGroups_CreateOrUpdate(api_version: string, resourceId: string, deviceSecurityGroupName: string, requestBody: DeviceSecurityGroup): Observable<DeviceSecurityGroup> {
			return this.http.put<DeviceSecurityGroup>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/providers/Microsoft.Security/deviceSecurityGroups/' + (deviceSecurityGroupName == null ? '' : encodeURIComponent(deviceSecurityGroupName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * User this method to deletes the device security group.
		 * Delete {resourceId}/providers/Microsoft.Security/deviceSecurityGroups/{deviceSecurityGroupName}
		 * @param {string} api_version API version for the operation
		 * @param {string} resourceId The identifier of the resource.
		 * @param {string} deviceSecurityGroupName The name of the device security group. Note that the name of the device security group is case insensitive.
		 * @return {void} Device security group has been deleted.
		 */
		DeviceSecurityGroups_Delete(api_version: string, resourceId: string, deviceSecurityGroupName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/providers/Microsoft.Security/deviceSecurityGroups/' + (deviceSecurityGroupName == null ? '' : encodeURIComponent(deviceSecurityGroupName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}
	}

}

