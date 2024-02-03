import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateNetworkSmTargetGroupCreatenetworksmtargetgroup {

		/** The name of this target group */
		name?: string | null;

		/** The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty. */
		scope?: string | null;
	}
	export interface CreateNetworkSmTargetGroupCreatenetworksmtargetgroupFormProperties {

		/** The name of this target group */
		name: FormControl<string | null | undefined>,

		/** The scope and tag options of the target group. Comma separated values beginning with one of withAny, withAll, withoutAny, withoutAll, all, none, followed by tags. Default to none if empty. */
		scope: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSmTargetGroupCreatenetworksmtargetgroupFormGroup() {
		return new FormGroup<CreateNetworkSmTargetGroupCreatenetworksmtargetgroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrules {

		/** An ordered array of the firewall rules (not including the default rule) */
		UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRules?: Array<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRules>;

		/** Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional) */
		syslogDefaultRule?: boolean | null;
	}
	export interface UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesFormProperties {

		/** Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional) */
		syslogDefaultRule: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesFormGroup() {
		return new FormGroup<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesFormProperties>({
			syslogDefaultRule: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRules {

		/** Description of the rule (optional) */
		comment?: string | null;

		/**
		 * Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
		 * Required
		 */
		destCidr: string;

		/** Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any' */
		destPort?: string | null;

		/**
		 * 'allow' or 'deny' traffic specified by this rule
		 * Required
		 */
		policy: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy;

		/**
		 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
		 * Required
		 */
		protocol: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol;

		/**
		 * Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
		 * Required
		 */
		srcCidr: string;

		/** Comma-separated list of source port(s) (integer in the range 1-65535), or 'any' */
		srcPort?: string | null;

		/** Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional) */
		syslogEnabled?: boolean | null;
	}
	export interface UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesFormProperties {

		/** Description of the rule (optional) */
		comment: FormControl<string | null | undefined>,

		/**
		 * Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
		 * Required
		 */
		destCidr: FormControl<string | null | undefined>,

		/** Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any' */
		destPort: FormControl<string | null | undefined>,

		/**
		 * 'allow' or 'deny' traffic specified by this rule
		 * Required
		 */
		policy: FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy | null | undefined>,

		/**
		 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
		 * Required
		 */
		protocol: FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol | null | undefined>,

		/**
		 * Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
		 * Required
		 */
		srcCidr: FormControl<string | null | undefined>,

		/** Comma-separated list of source port(s) (integer in the range 1-65535), or 'any' */
		srcPort: FormControl<string | null | undefined>,

		/** Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional) */
		syslogEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesFormGroup() {
		return new FormGroup<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			destCidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destPort: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol | null | undefined>(undefined, [Validators.required]),
			srcCidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			srcPort: new FormControl<string | null | undefined>(undefined),
			syslogEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy { allow = 'allow', deny = 'deny' }

	export enum UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol { any = 'any', icmp = 'icmp', icmp6 = 'icmp6', tcp = 'tcp', udp = 'udp' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns live state from camera of analytics zones
		 * Returns live state from camera of analytics zones
		 * Get devices/{serial}/camera/analytics/live
		 * @return {string} Successful operation
		 */
		GetDeviceCameraAnalyticsLive(serial: string): Observable<string> {
			return this.http.get(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/camera/analytics/live', { responseType: 'text' });
		}

		/**
		 * Returns an overview of aggregate analytics data for a timespan
		 * Returns an overview of aggregate analytics data for a timespan
		 * Get devices/{serial}/camera/analytics/overview
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour.
		 * @param {GetDeviceCameraAnalyticsOverviewObjectType} objectType [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
		 * @return {Array<string>} Successful operation
		 */
		GetDeviceCameraAnalyticsOverview(serial: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, objectType: GetDeviceCameraAnalyticsOverviewObjectType | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/camera/analytics/overview&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&objectType=' + objectType, {});
		}

		/**
		 * Returns most recent record for analytics zones
		 * Returns most recent record for analytics zones
		 * Get devices/{serial}/camera/analytics/recent
		 * @param {GetDeviceCameraAnalyticsOverviewObjectType} objectType [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
		 * @return {Array<string>} Successful operation
		 */
		GetDeviceCameraAnalyticsRecent(serial: string, objectType: GetDeviceCameraAnalyticsOverviewObjectType | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/camera/analytics/recent&objectType=' + objectType, {});
		}

		/**
		 * Returns all configured analytic zones for this camera
		 * Returns all configured analytic zones for this camera
		 * Get devices/{serial}/camera/analytics/zones
		 * @return {Array<string>} Successful operation
		 */
		GetDeviceCameraAnalyticsZones(serial: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/camera/analytics/zones', {});
		}

		/**
		 * Return historical records for analytic zones
		 * Return historical records for analytic zones
		 * Get devices/{serial}/camera/analytics/zones/{zoneId}/history
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.
		 * @param {number} resolution The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.
		 * @param {GetDeviceCameraAnalyticsOverviewObjectType} objectType [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
		 * @return {Array<string>} Successful operation
		 */
		GetDeviceCameraAnalyticsZoneHistory(serial: string, zoneId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, resolution: number | null | undefined, objectType: GetDeviceCameraAnalyticsOverviewObjectType | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/camera/analytics/zones/' + (zoneId == null ? '' : encodeURIComponent(zoneId)) + '/history&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&resolution=' + resolution + '&objectType=' + objectType, {});
		}

		/**
		 * Returns video settings for the given camera
		 * Returns video settings for the given camera
		 * Get devices/{serial}/camera/video/settings
		 * @return {string} Successful operation
		 */
		GetDeviceCameraVideoSettings(serial: string): Observable<string> {
			return this.http.get(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/camera/video/settings', { responseType: 'text' });
		}

		/**
		 * Update video settings for the given camera
		 * Update video settings for the given camera
		 * Put devices/{serial}/camera/video/settings
		 * @return {string} Successful operation
		 */
		UpdateDeviceCameraVideoSettings(serial: string, requestBody: UpdateDeviceCameraVideoSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/camera/video/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Show the LAN Settings of a MG
		 * Show the LAN Settings of a MG
		 * Get devices/{serial}/cellularGateway/settings
		 * @return {string} Successful operation
		 */
		GetDeviceCellularGatewaySettings(serial: string): Observable<string> {
			return this.http.get(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/cellularGateway/settings', { responseType: 'text' });
		}

		/**
		 * Update the LAN Settings for a single MG.
		 * Update the LAN Settings for a single MG.
		 * Put devices/{serial}/cellularGateway/settings
		 * @return {string} Successful operation
		 */
		UpdateDeviceCellularGatewaySettings(serial: string, requestBody: UpdateDeviceCellularGatewaySettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/cellularGateway/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns the port forwarding rules for a single MG.
		 * Returns the port forwarding rules for a single MG.
		 * Get devices/{serial}/cellularGateway/settings/portForwardingRules
		 * @return {string} Successful operation
		 */
		GetDeviceCellularGatewaySettingsPortForwardingRules(serial: string): Observable<string> {
			return this.http.get(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/cellularGateway/settings/portForwardingRules', { responseType: 'text' });
		}

		/**
		 * Updates the port forwarding rules for a single MG.
		 * Updates the port forwarding rules for a single MG.
		 * Put devices/{serial}/cellularGateway/settings/portForwardingRules
		 * @return {string} Successful operation
		 */
		UpdateDeviceCellularGatewaySettingsPortForwardingRules(serial: string, requestBody: UpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/cellularGateway/settings/portForwardingRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the clients of a device, up to a maximum of a month ago
		 * List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
		 * Get devices/{serial}/clients
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
		 * @return {Array<string>} Successful operation
		 */
		GetDeviceClients(serial: string, t0: string | null | undefined, timespan: number | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/clients&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&timespan=' + timespan, {});
		}

		/**
		 * Cycle a set of switch ports
		 * Cycle a set of switch ports
		 * Post devices/{serial}/switch/ports/cycle
		 * @return {string} Successful operation
		 */
		CycleDeviceSwitchPorts(serial: string, requestBody: CycleDeviceSwitchPortsPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/switch/ports/cycle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the status for all the ports of a switch
		 * Return the status for all the ports of a switch
		 * Get devices/{serial}/switchPortStatuses
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
		 * @return {Array<string>} Successful operation
		 */
		GetDeviceSwitchPortStatuses(serial: string, t0: string | null | undefined, timespan: number | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/switchPortStatuses&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&timespan=' + timespan, {});
		}

		/**
		 * Return the packet counters for all the ports of a switch
		 * Return the packet counters for all the ports of a switch
		 * Get devices/{serial}/switchPortStatuses/packets
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 1 day from today.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.
		 * @return {Array<string>} Successful operation
		 */
		GetDeviceSwitchPortStatusesPackets(serial: string, t0: string | null | undefined, timespan: number | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/switchPortStatuses/packets&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&timespan=' + timespan, {});
		}

		/**
		 * Update the bluetooth settings for a wireless device
		 * Update the bluetooth settings for a wireless device
		 * Put devices/{serial}/wireless/bluetooth/settings
		 * @return {UpdateDeviceWirelessBluetoothSettingsReturn} Successful operation
		 */
		UpdateDeviceWirelessBluetoothSettings(serial: string, requestBody: UpdateDeviceWirelessBluetoothSettingsPutBody): Observable<UpdateDeviceWirelessBluetoothSettingsReturn> {
			return this.http.put<UpdateDeviceWirelessBluetoothSettingsReturn>(this.baseUri + 'devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/wireless/bluetooth/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a network
		 * Delete a network
		 * Delete networks/{networkId}
		 * @return {void} 
		 */
		DeleteNetwork(networkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a network
		 * Return a network
		 * Get networks/{networkId}
		 * @return {string} Successful operation
		 */
		GetNetwork(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)), { responseType: 'text' });
		}

		/**
		 * Update a network
		 * Update a network
		 * Put networks/{networkId}
		 * @return {string} Successful operation
		 */
		UpdateNetwork(networkId: string, requestBody: UpdateNetworkPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the access policies for this network
		 * List the access policies for this network. Only valid for MS networks.
		 * Get networks/{networkId}/accessPolicies
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkAccessPolicies(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/accessPolicies', {});
		}

		/**
		 * List Air Marshal scan results from a network
		 * List Air Marshal scan results from a network
		 * Get networks/{networkId}/airMarshal
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkAirMarshal(networkId: string, t0: string | null | undefined, timespan: number | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/airMarshal&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&timespan=' + timespan, {});
		}

		/**
		 * Return the alert configuration for this network
		 * Return the alert configuration for this network
		 * Get networks/{networkId}/alertSettings
		 * @return {string} Successful operation
		 */
		GetNetworkAlertSettings(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/alertSettings', { responseType: 'text' });
		}

		/**
		 * Update the alert configuration for this network
		 * Update the alert configuration for this network
		 * Put networks/{networkId}/alertSettings
		 * @return {string} Successful operation
		 */
		UpdateNetworkAlertSettings(networkId: string, requestBody: UpdateNetworkAlertSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/alertSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the inbound firewall rules for an MX network
		 * Return the inbound firewall rules for an MX network
		 * Get networks/{networkId}/appliance/firewall/inboundFirewallRules
		 * @return {string} Successful operation
		 */
		GetNetworkApplianceFirewallInboundFirewallRules(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/appliance/firewall/inboundFirewallRules', { responseType: 'text' });
		}

		/**
		 * Update the inbound firewall rules of an MX network
		 * Update the inbound firewall rules of an MX network
		 * Put networks/{networkId}/appliance/firewall/inboundFirewallRules
		 * @return {string} Successful operation
		 */
		UpdateNetworkApplianceFirewallInboundFirewallRules(networkId: string, requestBody: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrules): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/appliance/firewall/inboundFirewallRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List per-port VLAN settings for all ports of a MX.
		 * List per-port VLAN settings for all ports of a MX.
		 * Get networks/{networkId}/appliancePorts
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkAppliancePorts(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/appliancePorts', {});
		}

		/**
		 * Return per-port VLAN settings for a single MX port.
		 * Return per-port VLAN settings for a single MX port.
		 * Get networks/{networkId}/appliancePorts/{appliancePortId}
		 * @return {string} Successful operation
		 */
		GetNetworkAppliancePort(networkId: string, appliancePortId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/appliancePorts/' + (appliancePortId == null ? '' : encodeURIComponent(appliancePortId)), { responseType: 'text' });
		}

		/**
		 * Update the per-port VLAN settings for a single MX port.
		 * Update the per-port VLAN settings for a single MX port.
		 * Put networks/{networkId}/appliancePorts/{appliancePortId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkAppliancePort(networkId: string, appliancePortId: string, requestBody: UpdateNetworkAppliancePortPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/appliancePorts/' + (appliancePortId == null ? '' : encodeURIComponent(appliancePortId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Bind a network to a template.
		 * Bind a network to a template.
		 * Post networks/{networkId}/bind
		 * @return {void} Successful operation
		 */
		BindNetwork(networkId: string, requestBody: BindNetworkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/bind', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the Bluetooth clients seen by APs in this network
		 * List the Bluetooth clients seen by APs in this network
		 * Get networks/{networkId}/bluetoothClients
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 7 days from today.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day.
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {boolean} includeConnectivityHistory Include the connectivity history for this client
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkBluetoothClients(networkId: string, t0: string | null | undefined, timespan: number | null | undefined, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined, includeConnectivityHistory: boolean | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/bluetoothClients&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&timespan=' + timespan + '&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)) + '&includeConnectivityHistory=' + includeConnectivityHistory, {});
		}

		/**
		 * Return a Bluetooth client
		 * Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
		 * Get networks/{networkId}/bluetoothClients/{bluetoothClientId}
		 * @param {boolean} includeConnectivityHistory Include the connectivity history for this client
		 * @param {number} connectivityHistoryTimespan The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used.
		 * @return {string} Successful operation
		 */
		GetNetworkBluetoothClient(networkId: string, bluetoothClientId: string, includeConnectivityHistory: boolean | null | undefined, connectivityHistoryTimespan: number | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/bluetoothClients/' + (bluetoothClientId == null ? '' : encodeURIComponent(bluetoothClientId)) + '&includeConnectivityHistory=' + includeConnectivityHistory + '&connectivityHistoryTimespan=' + connectivityHistoryTimespan, { responseType: 'text' });
		}

		/**
		 * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
		 * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
		 * Get networks/{networkId}/bluetoothSettings
		 * @return {GetNetworkBluetoothSettingsReturn} Successful operation
		 */
		GetNetworkBluetoothSettings(networkId: string): Observable<GetNetworkBluetoothSettingsReturn> {
			return this.http.get<GetNetworkBluetoothSettingsReturn>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/bluetoothSettings', {});
		}

		/**
		 * Update the Bluetooth settings for a network
		 * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
		 * Put networks/{networkId}/bluetoothSettings
		 * @return {UpdateNetworkBluetoothSettingsReturn} Successful operation
		 */
		UpdateNetworkBluetoothSettings(networkId: string, requestBody: UpdateNetworkBluetoothSettingsPutBody): Observable<UpdateNetworkBluetoothSettingsReturn> {
			return this.http.put<UpdateNetworkBluetoothSettingsReturn>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/bluetoothSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the quality retention profiles for this network
		 * List the quality retention profiles for this network
		 * Get networks/{networkId}/camera/qualityRetentionProfiles
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkCameraQualityRetentionProfiles(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/camera/qualityRetentionProfiles', {});
		}

		/**
		 * Creates new quality retention profile for this network.
		 * Creates new quality retention profile for this network.
		 * Post networks/{networkId}/camera/qualityRetentionProfiles
		 * @return {string} Successful operation
		 */
		CreateNetworkCameraQualityRetentionProfile(networkId: string, requestBody: CreateNetworkCameraQualityRetentionProfilePostBody): Observable<string> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/camera/qualityRetentionProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete an existing quality retention profile for this network.
		 * Delete an existing quality retention profile for this network.
		 * Delete networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}
		 * @return {void} 
		 */
		DeleteNetworkCameraQualityRetentionProfile(networkId: string, qualityRetentionProfileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/camera/qualityRetentionProfiles/' + (qualityRetentionProfileId == null ? '' : encodeURIComponent(qualityRetentionProfileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a single quality retention profile
		 * Retrieve a single quality retention profile
		 * Get networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}
		 * @return {string} Successful operation
		 */
		GetNetworkCameraQualityRetentionProfile(networkId: string, qualityRetentionProfileId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/camera/qualityRetentionProfiles/' + (qualityRetentionProfileId == null ? '' : encodeURIComponent(qualityRetentionProfileId)), { responseType: 'text' });
		}

		/**
		 * Update an existing quality retention profile for this network.
		 * Update an existing quality retention profile for this network.
		 * Put networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkCameraQualityRetentionProfile(networkId: string, qualityRetentionProfileId: string, requestBody: UpdateNetworkCameraQualityRetentionProfilePutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/camera/qualityRetentionProfiles/' + (qualityRetentionProfileId == null ? '' : encodeURIComponent(qualityRetentionProfileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns a list of all camera recording schedules.
		 * Returns a list of all camera recording schedules.
		 * Get networks/{networkId}/camera/schedules
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkCameraSchedules(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/camera/schedules', {});
		}

		/**
		 * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
		 * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
		 * Post networks/{networkId}/cameras/{serial}/snapshot
		 * @return {void} 
		 */
		GenerateNetworkCameraSnapshot(networkId: string, serial: string, requestBody: GenerateNetworkCameraSnapshotPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/cameras/' + (serial == null ? '' : encodeURIComponent(serial)) + '/snapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns video link to the specified camera
		 * Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.
		 * Get networks/{networkId}/cameras/{serial}/videoLink
		 * @param {string} timestamp [optional] The video link will start at this timestamp. The timestamp is in UNIX Epoch time (milliseconds). If no timestamp is specified, we will assume current time.
		 * @return {string} Successful operation
		 */
		GetNetworkCameraVideoLink(networkId: string, serial: string, timestamp: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/cameras/' + (serial == null ? '' : encodeURIComponent(serial)) + '/videoLink&timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), { responseType: 'text' });
		}

		/**
		 * Return the cellular firewall rules for an MX network
		 * Return the cellular firewall rules for an MX network
		 * Get networks/{networkId}/cellularFirewallRules
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkCellularFirewallRules(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/cellularFirewallRules', {});
		}

		/**
		 * Update the cellular firewall rules of an MX network
		 * Update the cellular firewall rules of an MX network
		 * Put networks/{networkId}/cellularFirewallRules
		 * @return {Array<string>} Successful operation
		 */
		UpdateNetworkCellularFirewallRules(networkId: string, requestBody: UpdateNetworkCellularFirewallRulesPutBody): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/cellularFirewallRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the clients that have used this network in the timespan
		 * List the clients that have used this network in the timespan
		 * Get networks/{networkId}/clients
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @return {GetNetworkClientsReturn} Successful operation
		 */
		GetNetworkClients(networkId: string, t0: string | null | undefined, timespan: number | null | undefined, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined): Observable<GetNetworkClientsReturn> {
			return this.http.get<GetNetworkClientsReturn>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&timespan=' + timespan + '&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)), {});
		}

		/**
		 * Aggregated connectivity info for this network, grouped by clients
		 * Aggregated connectivity info for this network, grouped by clients
		 * Get networks/{networkId}/clients/connectionStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkClientsConnectionStats(networkId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/connectionStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)), {});
		}

		/**
		 * Aggregated latency info for this network, grouped by clients
		 * Aggregated latency info for this network, grouped by clients
		 * Get networks/{networkId}/clients/latencyStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @param {string} fields Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkClientsLatencyStats(networkId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined, fields: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/latencyStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Provisions a client with a name and policy
		 * Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
		 * Post networks/{networkId}/clients/provision
		 * @return {void} 
		 */
		ProvisionNetworkClients(networkId: string, requestBody: ProvisionNetworkClientsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/provision', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the client associated with the given identifier
		 * Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
		 * Get networks/{networkId}/clients/{clientId}
		 * @return {string} Successful operation
		 */
		GetNetworkClient(networkId: string, clientId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)), { responseType: 'text' });
		}

		/**
		 * Aggregated connectivity info for a given client on this network
		 * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
		 * Get networks/{networkId}/clients/{clientId}/connectionStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @return {string} Successful operation
		 */
		GetNetworkClientConnectionStats(networkId: string, clientId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/connectionStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)), { responseType: 'text' });
		}

		/**
		 * Return the events associated with this client
		 * Return the events associated with this client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
		 * Get networks/{networkId}/clients/{clientId}/events
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 100. Default is 100.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkClientEvents(networkId: string, clientId: string, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/events&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)), {});
		}

		/**
		 * Return the latency history for a client
		 * Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
		 * Get networks/{networkId}/clients/{clientId}/latencyHistory
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 791 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day.
		 * @param {number} resolution The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkClientLatencyHistory(networkId: string, clientId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, resolution: number | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/latencyHistory&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&resolution=' + resolution, {});
		}

		/**
		 * Aggregated latency info for a given client on this network
		 * Aggregated latency info for a given client on this network. Clients are identified by their MAC.
		 * Get networks/{networkId}/clients/{clientId}/latencyStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @param {string} fields Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
		 * @return {string} Successful operation
		 */
		GetNetworkClientLatencyStats(networkId: string, clientId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined, fields: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/latencyStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { responseType: 'text' });
		}

		/**
		 * Return the policy assigned to a client on the network
		 * Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
		 * Get networks/{networkId}/clients/{clientId}/policy
		 * @return {string} Successful operation
		 */
		GetNetworkClientPolicy(networkId: string, clientId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/policy', { responseType: 'text' });
		}

		/**
		 * Update the policy assigned to a client on the network
		 * Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
		 * Put networks/{networkId}/clients/{clientId}/policy
		 * @return {string} Successful operation
		 */
		UpdateNetworkClientPolicy(networkId: string, clientId: string, requestBody: UpdateNetworkClientPolicyPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the splash authorization for a client, for each SSID they've associated with through splash
		 * Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
		 * Get networks/{networkId}/clients/{clientId}/splashAuthorizationStatus
		 * @return {string} Successful operation
		 */
		GetNetworkClientSplashAuthorizationStatus(networkId: string, clientId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/splashAuthorizationStatus', { responseType: 'text' });
		}

		/**
		 * Update a client's splash authorization
		 * Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
		 * Put networks/{networkId}/clients/{clientId}/splashAuthorizationStatus
		 * @return {string} Successful operation
		 */
		UpdateNetworkClientSplashAuthorizationStatus(networkId: string, clientId: string, requestBody: UpdateNetworkClientSplashAuthorizationStatusPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/splashAuthorizationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the client's daily usage history
		 * Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
		 * Get networks/{networkId}/clients/{clientId}/usageHistory
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkClientUsageHistory(networkId: string, clientId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/clients/' + (clientId == null ? '' : encodeURIComponent(clientId)) + '/usageHistory', {});
		}

		/**
		 * Aggregated connectivity info for this network
		 * Aggregated connectivity info for this network
		 * Get networks/{networkId}/connectionStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @return {string} Successful operation
		 */
		GetNetworkConnectionStats(networkId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/connectionStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)), { responseType: 'text' });
		}

		/**
		 * Return the content filtering settings for an MX network
		 * Return the content filtering settings for an MX network
		 * Get networks/{networkId}/contentFiltering
		 * @return {string} Successful operation
		 */
		GetNetworkContentFiltering(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/contentFiltering', { responseType: 'text' });
		}

		/**
		 * Update the content filtering settings for an MX network
		 * Update the content filtering settings for an MX network
		 * Put networks/{networkId}/contentFiltering
		 * @return {string} Successful operation
		 */
		UpdateNetworkContentFiltering(networkId: string, requestBody: UpdateNetworkContentFilteringPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/contentFiltering', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List all available content filtering categories for an MX network
		 * List all available content filtering categories for an MX network
		 * Get networks/{networkId}/contentFiltering/categories
		 * @return {string} Successful operation
		 */
		GetNetworkContentFilteringCategories(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/contentFiltering/categories', { responseType: 'text' });
		}

		/**
		 * List the devices in a network
		 * List the devices in a network
		 * Get networks/{networkId}/devices
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkDevices(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices', {});
		}

		/**
		 * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
		 * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
		 * Post networks/{networkId}/devices/claim
		 * @return {void} Successful operation
		 */
		ClaimNetworkDevices(networkId: string, requestBody: ClaimNetworkDevicesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/claim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Aggregated connectivity info for this network, grouped by node
		 * Aggregated connectivity info for this network, grouped by node
		 * Get networks/{networkId}/devices/connectionStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkDevicesConnectionStats(networkId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/connectionStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)), {});
		}

		/**
		 * Aggregated latency info for this network, grouped by node
		 * Aggregated latency info for this network, grouped by node
		 * Get networks/{networkId}/devices/latencyStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @param {string} fields Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkDevicesLatencyStats(networkId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined, fields: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/latencyStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Return a single device
		 * Return a single device
		 * Get networks/{networkId}/devices/{serial}
		 * @return {string} Successful operation
		 */
		GetNetworkDevice(networkId: string, serial: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)), { responseType: 'text' });
		}

		/**
		 * Update the attributes of a device
		 * Update the attributes of a device
		 * Put networks/{networkId}/devices/{serial}
		 * @return {string} Successful operation
		 */
		UpdateNetworkDevice(networkId: string, serial: string, requestBody: UpdateNetworkDevicePutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Aggregated connectivity info for a given AP on this network
		 * Aggregated connectivity info for a given AP on this network
		 * Get networks/{networkId}/devices/{serial}/connectionStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @return {string} Successful operation
		 */
		GetNetworkDeviceConnectionStats(networkId: string, serial: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/connectionStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)), { responseType: 'text' });
		}

		/**
		 * Aggregated latency info for a given AP on this network
		 * Aggregated latency info for a given AP on this network
		 * Get networks/{networkId}/devices/{serial}/latencyStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @param {string} fields Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
		 * @return {string} Successful operation
		 */
		GetNetworkDeviceLatencyStats(networkId: string, serial: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined, fields: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/latencyStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { responseType: 'text' });
		}

		/**
		 * Get the uplink loss percentage and latency in milliseconds for a wired network device.
		 * Get the uplink loss percentage and latency in milliseconds for a wired network device.
		 * Get networks/{networkId}/devices/{serial}/lossAndLatencyHistory
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 60 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
		 * @param {number} resolution The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60.
		 * @param {GetNetworkDeviceLossAndLatencyHistoryUplink} uplink The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1.
		 * @param {string} ip The destination IP used to obtain the requested stats. This is required.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkDeviceLossAndLatencyHistory(networkId: string, serial: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, resolution: number | null | undefined, uplink: GetNetworkDeviceLossAndLatencyHistoryUplink | null | undefined, ip: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/lossAndLatencyHistory&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&resolution=' + resolution + '&uplink=' + uplink + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)), {});
		}

		/**
		 * Return the performance score for a single MX
		 * Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.
		 * Get networks/{networkId}/devices/{serial}/performance
		 * @return {string} Successful operation
		 */
		GetNetworkDevicePerformance(networkId: string, serial: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/performance', { responseType: 'text' });
		}

		/**
		 * Reboot a device
		 * Reboot a device
		 * Post networks/{networkId}/devices/{serial}/reboot
		 * @return {string} Successful operation
		 */
		RebootNetworkDevice(networkId: string, serial: string): Observable<string> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/reboot', null, { responseType: 'text' });
		}

		/**
		 * Remove a single device
		 * Remove a single device
		 * Post networks/{networkId}/devices/{serial}/remove
		 * @return {void} 
		 */
		RemoveNetworkDevice(networkId: string, serial: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/remove', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the uplink information for a device.
		 * Return the uplink information for a device.
		 * Get networks/{networkId}/devices/{serial}/uplink
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkDeviceUplink(networkId: string, serial: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/uplink', {});
		}

		/**
		 * Return the SSID statuses of an access point
		 * Return the SSID statuses of an access point
		 * Get networks/{networkId}/devices/{serial}/wireless/status
		 * @return {string} Successful operation
		 */
		GetNetworkDeviceWirelessStatus(networkId: string, serial: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/devices/' + (serial == null ? '' : encodeURIComponent(serial)) + '/wireless/status', { responseType: 'text' });
		}

		/**
		 * List the events for the network
		 * List the events for the network
		 * Get networks/{networkId}/events
		 * @param {string} productType The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and environmental
		 * @param {Array<string>} includedEventTypes A list of event types. The returned events will be filtered to only include events with these types.
		 * @param {Array<string>} excludedEventTypes A list of event types. The returned events will be filtered to exclude events with these types.
		 * @param {string} deviceMac The MAC address of the Meraki device which the list of events will be filtered with
		 * @param {string} deviceSerial The serial of the Meraki device which the list of events will be filtered with
		 * @param {string} deviceName The name of the Meraki device which the list of events will be filtered with
		 * @param {string} clientIp The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks.
		 * @param {string} clientMac The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks.
		 * @param {string} clientName The name, or partial name, of the client which the list of events will be filtered with
		 * @param {string} smDeviceMac The MAC address of the Systems Manager device which the list of events will be filtered with
		 * @param {string} smDeviceName The name of the Systems Manager device which the list of events will be filtered with
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @return {string} Successful operation
		 */
		GetNetworkEvents(networkId: string, productType: string | null | undefined, includedEventTypes: Array<string> | null | undefined, excludedEventTypes: Array<string> | null | undefined, deviceMac: string | null | undefined, deviceSerial: string | null | undefined, deviceName: string | null | undefined, clientIp: string | null | undefined, clientMac: string | null | undefined, clientName: string | null | undefined, smDeviceMac: string | null | undefined, smDeviceName: string | null | undefined, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/events&productType=' + (productType == null ? '' : encodeURIComponent(productType)) + '&' + includedEventTypes?.map(z => `includedEventTypes=${encodeURIComponent(z)}`).join('&') + '&' + excludedEventTypes?.map(z => `excludedEventTypes=${encodeURIComponent(z)}`).join('&') + '&deviceMac=' + (deviceMac == null ? '' : encodeURIComponent(deviceMac)) + '&deviceSerial=' + (deviceSerial == null ? '' : encodeURIComponent(deviceSerial)) + '&deviceName=' + (deviceName == null ? '' : encodeURIComponent(deviceName)) + '&clientIp=' + (clientIp == null ? '' : encodeURIComponent(clientIp)) + '&clientMac=' + (clientMac == null ? '' : encodeURIComponent(clientMac)) + '&clientName=' + (clientName == null ? '' : encodeURIComponent(clientName)) + '&smDeviceMac=' + (smDeviceMac == null ? '' : encodeURIComponent(smDeviceMac)) + '&smDeviceName=' + (smDeviceName == null ? '' : encodeURIComponent(smDeviceName)) + '&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)), { responseType: 'text' });
		}

		/**
		 * List the event type to human-readable description
		 * List the event type to human-readable description
		 * Get networks/{networkId}/events/eventTypes
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkEventsEventTypes(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/events/eventTypes', {});
		}

		/**
		 * List of all failed client connection events on this network in a given time range
		 * List of all failed client connection events on this network in a given time range
		 * Get networks/{networkId}/failedConnections
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @param {string} serial Filter by AP
		 * @param {string} clientId Filter by client MAC
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkFailedConnections(networkId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined, serial: string | null | undefined, clientId: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/failedConnections&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)) + '&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)), {});
		}

		/**
		 * List the appliance services and their accessibility rules
		 * List the appliance services and their accessibility rules
		 * Get networks/{networkId}/firewalledServices
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkFirewalledServices(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/firewalledServices', {});
		}

		/**
		 * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
		 * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
		 * Get networks/{networkId}/firewalledServices/{service}
		 * @return {string} Successful operation
		 */
		GetNetworkFirewalledService(networkId: string, service: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/firewalledServices/' + (service == null ? '' : encodeURIComponent(service)), { responseType: 'text' });
		}

		/**
		 * List the floor plans that belong to your network
		 * List the floor plans that belong to your network
		 * Get networks/{networkId}/floorPlans
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkFloorPlans(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/floorPlans', {});
		}

		/**
		 * Upload a floor plan
		 * Upload a floor plan
		 * Post networks/{networkId}/floorPlans
		 * @return {void} 
		 */
		CreateNetworkFloorPlan(networkId: string, requestBody: CreateNetworkFloorPlanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/floorPlans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Destroy a floor plan
		 * Destroy a floor plan
		 * Delete networks/{networkId}/floorPlans/{floorPlanId}
		 * @return {void} 
		 */
		DeleteNetworkFloorPlan(networkId: string, floorPlanId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/floorPlans/' + (floorPlanId == null ? '' : encodeURIComponent(floorPlanId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Find a floor plan by ID
		 * Find a floor plan by ID
		 * Get networks/{networkId}/floorPlans/{floorPlanId}
		 * @return {string} Successful operation
		 */
		GetNetworkFloorPlan(networkId: string, floorPlanId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/floorPlans/' + (floorPlanId == null ? '' : encodeURIComponent(floorPlanId)), { responseType: 'text' });
		}

		/**
		 * Update a floor plan's geolocation and other meta data
		 * Update a floor plan's geolocation and other meta data
		 * Put networks/{networkId}/floorPlans/{floorPlanId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkFloorPlan(networkId: string, floorPlanId: string, requestBody: UpdateNetworkFloorPlanPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/floorPlans/' + (floorPlanId == null ? '' : encodeURIComponent(floorPlanId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the L3 firewall rules for an MX network
		 * Return the L3 firewall rules for an MX network
		 * Get networks/{networkId}/l3FirewallRules
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkL3FirewallRules(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/l3FirewallRules', {});
		}

		/**
		 * Update the L3 firewall rules of an MX network
		 * Update the L3 firewall rules of an MX network
		 * Put networks/{networkId}/l3FirewallRules
		 * @return {Array<string>} Successful operation
		 */
		UpdateNetworkL3FirewallRules(networkId: string, requestBody: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrules): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/l3FirewallRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the MX L7 firewall rules for an MX network
		 * List the MX L7 firewall rules for an MX network
		 * Get networks/{networkId}/l7FirewallRules
		 * @return {string} Successful operation
		 */
		GetNetworkL7FirewallRules(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/l7FirewallRules', { responseType: 'text' });
		}

		/**
		 * Update the MX L7 firewall rules for an MX network
		 * Update the MX L7 firewall rules for an MX network
		 * Put networks/{networkId}/l7FirewallRules
		 * @return {string} Successful operation
		 */
		UpdateNetworkL7FirewallRules(networkId: string, requestBody: UpdateNetworkL7FirewallRulesPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/l7FirewallRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the L7 firewall application categories and their associated applications for an MX network
		 * Return the L7 firewall application categories and their associated applications for an MX network
		 * Get networks/{networkId}/l7FirewallRules/applicationCategories
		 * @return {string} Successful operation
		 */
		GetNetworkL7FirewallRulesApplicationCategories(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/l7FirewallRules/applicationCategories', { responseType: 'text' });
		}

		/**
		 * Aggregated latency info for this network
		 * Aggregated latency info for this network
		 * Get networks/{networkId}/latencyStats
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
		 * @param {GetNetworkClientsConnectionStatsBand} band Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information.
		 * @param {number} ssid Filter results by SSID
		 * @param {number} vlan Filter results by VLAN
		 * @param {string} apTag Filter results by AP Tag
		 * @param {string} fields Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
		 * @return {string} Successful operation
		 */
		GetNetworkLatencyStats(networkId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, band: GetNetworkClientsConnectionStatsBand | null | undefined, ssid: number | null | undefined, vlan: number | null | undefined, apTag: string | null | undefined, fields: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/latencyStats&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&band=' + band + '&ssid=' + ssid + '&vlan=' + vlan + '&apTag=' + (apTag == null ? '' : encodeURIComponent(apTag)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { responseType: 'text' });
		}

		/**
		 * List the splash or RADIUS users configured under Meraki Authentication for a network
		 * List the splash or RADIUS users configured under Meraki Authentication for a network
		 * Get networks/{networkId}/merakiAuthUsers
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkMerakiAuthUsers(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/merakiAuthUsers', {});
		}

		/**
		 * Return the Meraki Auth splash or RADIUS user
		 * Return the Meraki Auth splash or RADIUS user
		 * Get networks/{networkId}/merakiAuthUsers/{merakiAuthUserId}
		 * @return {string} Successful operation
		 */
		GetNetworkMerakiAuthUser(networkId: string, merakiAuthUserId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/merakiAuthUsers/' + (merakiAuthUserId == null ? '' : encodeURIComponent(merakiAuthUserId)), { responseType: 'text' });
		}

		/**
		 * Return the 1:Many NAT mapping rules for an MX network
		 * Return the 1:Many NAT mapping rules for an MX network
		 * Get networks/{networkId}/oneToManyNatRules
		 * @return {string} Successful operation
		 */
		GetNetworkOneToManyNatRules(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/oneToManyNatRules', { responseType: 'text' });
		}

		/**
		 * Set the 1:Many NAT mapping rules for an MX network
		 * Set the 1:Many NAT mapping rules for an MX network
		 * Put networks/{networkId}/oneToManyNatRules
		 * @return {string} Successful operation
		 */
		UpdateNetworkOneToManyNatRules(networkId: string, requestBody: UpdateNetworkOneToManyNatRulesPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/oneToManyNatRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the 1:1 NAT mapping rules for an MX network
		 * Return the 1:1 NAT mapping rules for an MX network
		 * Get networks/{networkId}/oneToOneNatRules
		 * @return {string} Successful operation
		 */
		GetNetworkOneToOneNatRules(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/oneToOneNatRules', { responseType: 'text' });
		}

		/**
		 * Set the 1:1 NAT mapping rules for an MX network
		 * Set the 1:1 NAT mapping rules for an MX network
		 * Put networks/{networkId}/oneToOneNatRules
		 * @return {string} Successful operation
		 */
		UpdateNetworkOneToOneNatRules(networkId: string, requestBody: UpdateNetworkOneToOneNatRulesPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/oneToOneNatRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the keys required to access Personally Identifiable Information (PII) for a given identifier
		 * List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.
		 * ## ALTERNATE PATH
		 * ```
		 * /organizations/{organizationId}/pii/piiKeys
		 * ```
		 * Get networks/{networkId}/pii/piiKeys
		 * @param {string} username The username of a Systems Manager user
		 * @param {string} email The email of a network user account or a Systems Manager device
		 * @param {string} mac The MAC of a network client device or a Systems Manager device
		 * @param {string} serial The serial of a Systems Manager device
		 * @param {string} imei The IMEI of a Systems Manager device
		 * @param {string} bluetoothMac The MAC of a Bluetooth client
		 * @return {string} Successful operation
		 */
		GetNetworkPiiPiiKeys(networkId: string, username: string | null | undefined, email: string | null | undefined, mac: string | null | undefined, serial: string | null | undefined, imei: string | null | undefined, bluetoothMac: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/pii/piiKeys&username=' + (username == null ? '' : encodeURIComponent(username)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&mac=' + (mac == null ? '' : encodeURIComponent(mac)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)) + '&imei=' + (imei == null ? '' : encodeURIComponent(imei)) + '&bluetoothMac=' + (bluetoothMac == null ? '' : encodeURIComponent(bluetoothMac)), { responseType: 'text' });
		}

		/**
		 * List the PII requests for this network or organization
		 * List the PII requests for this network or organization
		 * ## ALTERNATE PATH
		 * ```
		 * /organizations/{organizationId}/pii/requests
		 * ```
		 * Get networks/{networkId}/pii/requests
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkPiiRequests(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/pii/requests', {});
		}

		/**
		 * Submit a new delete or restrict processing PII request
		 * Submit a new delete or restrict processing PII request
		 * ## ALTERNATE PATH
		 * ```
		 * /organizations/{organizationId}/pii/requests
		 * ```
		 * Post networks/{networkId}/pii/requests
		 * @return {void} 
		 */
		CreateNetworkPiiRequest(networkId: string, requestBody: CreateNetworkPiiRequestPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/pii/requests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a restrict processing PII request
		 * Delete a restrict processing PII request
		 * ## ALTERNATE PATH
		 * ```
		 * /organizations/{organizationId}/pii/requests/{requestId}
		 * ```
		 * Delete networks/{networkId}/pii/requests/{requestId}
		 * @return {void} 
		 */
		DeleteNetworkPiiRequest(networkId: string, requestId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/pii/requests/' + (requestId == null ? '' : encodeURIComponent(requestId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a PII request
		 * Return a PII request
		 * ## ALTERNATE PATH
		 * ```
		 * /organizations/{organizationId}/pii/requests/{requestId}
		 * ```
		 * Get networks/{networkId}/pii/requests/{requestId}
		 * @return {string} Successful operation
		 */
		GetNetworkPiiRequest(networkId: string, requestId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/pii/requests/' + (requestId == null ? '' : encodeURIComponent(requestId)), { responseType: 'text' });
		}

		/**
		 * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
		 * Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
		 * ## ALTERNATE PATH
		 * ```
		 * /organizations/{organizationId}/pii/smDevicesForKey
		 * ```
		 * Get networks/{networkId}/pii/smDevicesForKey
		 * @param {string} username The username of a Systems Manager user
		 * @param {string} email The email of a network user account or a Systems Manager device
		 * @param {string} mac The MAC of a network client device or a Systems Manager device
		 * @param {string} serial The serial of a Systems Manager device
		 * @param {string} imei The IMEI of a Systems Manager device
		 * @param {string} bluetoothMac The MAC of a Bluetooth client
		 * @return {string} Successful operation
		 */
		GetNetworkPiiSmDevicesForKey(networkId: string, username: string | null | undefined, email: string | null | undefined, mac: string | null | undefined, serial: string | null | undefined, imei: string | null | undefined, bluetoothMac: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/pii/smDevicesForKey&username=' + (username == null ? '' : encodeURIComponent(username)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&mac=' + (mac == null ? '' : encodeURIComponent(mac)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)) + '&imei=' + (imei == null ? '' : encodeURIComponent(imei)) + '&bluetoothMac=' + (bluetoothMac == null ? '' : encodeURIComponent(bluetoothMac)), { responseType: 'text' });
		}

		/**
		 * Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
		 * Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
		 * ## ALTERNATE PATH
		 * ```
		 * /organizations/{organizationId}/pii/smOwnersForKey
		 * ```
		 * Get networks/{networkId}/pii/smOwnersForKey
		 * @param {string} username The username of a Systems Manager user
		 * @param {string} email The email of a network user account or a Systems Manager device
		 * @param {string} mac The MAC of a network client device or a Systems Manager device
		 * @param {string} serial The serial of a Systems Manager device
		 * @param {string} imei The IMEI of a Systems Manager device
		 * @param {string} bluetoothMac The MAC of a Bluetooth client
		 * @return {string} Successful operation
		 */
		GetNetworkPiiSmOwnersForKey(networkId: string, username: string | null | undefined, email: string | null | undefined, mac: string | null | undefined, serial: string | null | undefined, imei: string | null | undefined, bluetoothMac: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/pii/smOwnersForKey&username=' + (username == null ? '' : encodeURIComponent(username)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&mac=' + (mac == null ? '' : encodeURIComponent(mac)) + '&serial=' + (serial == null ? '' : encodeURIComponent(serial)) + '&imei=' + (imei == null ? '' : encodeURIComponent(imei)) + '&bluetoothMac=' + (bluetoothMac == null ? '' : encodeURIComponent(bluetoothMac)), { responseType: 'text' });
		}

		/**
		 * Return the port forwarding rules for an MX network
		 * Return the port forwarding rules for an MX network
		 * Get networks/{networkId}/portForwardingRules
		 * @return {string} Successful operation
		 */
		GetNetworkPortForwardingRules(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/portForwardingRules', { responseType: 'text' });
		}

		/**
		 * Update the port forwarding rules for an MX network
		 * Update the port forwarding rules for an MX network
		 * Put networks/{networkId}/portForwardingRules
		 * @return {string} Successful operation
		 */
		UpdateNetworkPortForwardingRules(networkId: string, requestBody: UpdateNetworkPortForwardingRulesPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/portForwardingRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns all supported intrusion settings for an MX network
		 * Returns all supported intrusion settings for an MX network
		 * Get networks/{networkId}/security/intrusionSettings
		 * @return {string} Successful operation
		 */
		GetNetworkSecurityIntrusionSettings(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/security/intrusionSettings', { responseType: 'text' });
		}

		/**
		 * Set the supported intrusion settings for an MX network
		 * Set the supported intrusion settings for an MX network
		 * Put networks/{networkId}/security/intrusionSettings
		 * @return {string} Successful operation
		 */
		UpdateNetworkSecurityIntrusionSettings(networkId: string, requestBody: UpdateNetworkSecurityIntrusionSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/security/intrusionSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns all supported malware settings for an MX network
		 * Returns all supported malware settings for an MX network
		 * Get networks/{networkId}/security/malwareSettings
		 * @return {string} Successful operation
		 */
		GetNetworkSecurityMalwareSettings(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/security/malwareSettings', { responseType: 'text' });
		}

		/**
		 * Set the supported malware settings for an MX network
		 * Set the supported malware settings for an MX network
		 * Put networks/{networkId}/security/malwareSettings
		 * @return {string} Successful operation
		 */
		UpdateNetworkSecurityMalwareSettings(networkId: string, requestBody: UpdateNetworkSecurityMalwareSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/security/malwareSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the security events (intrusion detection only) for a network
		 * List the security events (intrusion detection only) for a network
		 * Get networks/{networkId}/securityEvents
		 * @param {string} t0 The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSecurityEvents(networkId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/securityEvents&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)), {});
		}

		/**
		 * Return the site-to-site VPN settings of a network
		 * Return the site-to-site VPN settings of a network. Only valid for MX networks.
		 * Get networks/{networkId}/siteToSiteVpn
		 * @return {string} Successful operation
		 */
		GetNetworkSiteToSiteVpn(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/siteToSiteVpn', { responseType: 'text' });
		}

		/**
		 * Update the site-to-site VPN settings of a network
		 * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
		 * Put networks/{networkId}/siteToSiteVpn
		 * @return {string} Successful operation
		 */
		UpdateNetworkSiteToSiteVpn(networkId: string, requestBody: UpdateNetworkSiteToSiteVpnPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/siteToSiteVpn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Bypass activation lock attempt
		 * Bypass activation lock attempt
		 * Post networks/{networkId}/sm/bypassActivationLockAttempts
		 * @return {void} 
		 */
		CreateNetworkSmBypassActivationLockAttempt(networkId: string, requestBody: CreateNetworkSmBypassActivationLockAttemptPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/bypassActivationLockAttempts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Bypass activation lock attempt status
		 * Bypass activation lock attempt status
		 * Get networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}
		 * @return {string} Successful operation
		 */
		GetNetworkSmBypassActivationLockAttempt(networkId: string, attemptId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/bypassActivationLockAttempts/' + (attemptId == null ? '' : encodeURIComponent(attemptId)), { responseType: 'text' });
		}

		/**
		 * Modify the fields of a device
		 * Modify the fields of a device
		 * Put networks/{networkId}/sm/device/fields
		 * @return {string} Successful operation
		 */
		UpdateNetworkSmDeviceFields(networkId: string, requestBody: UpdateNetworkSmDeviceFieldsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/device/fields', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Wipe a device
		 * Wipe a device
		 * Put networks/{networkId}/sm/device/wipe
		 * @return {string} Successful operation
		 */
		WipeNetworkSmDevice(networkId: string, requestBody: WipeNetworkSmDevicePutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/device/wipe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Refresh the details of a device
		 * Refresh the details of a device
		 * Post networks/{networkId}/sm/device/{deviceId}/refreshDetails
		 * @return {void} Successful operation
		 */
		RefreshNetworkSmDeviceDetails(networkId: string, deviceId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/device/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/refreshDetails', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the devices enrolled in an SM network with various specified fields and filters
		 * List the devices enrolled in an SM network with various specified fields and filters
		 * Get networks/{networkId}/sm/devices
		 * @param {string} fields Additional fields that will be displayed for each device. Multiple fields can be passed in as comma separated values.
		 *     The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,
		 *     systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,
		 *     ownerEmail, ownerUsername, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,
		 *     simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,
		 *     isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,
		 *     hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, and androidSecurityPatchVersion.
		 * @param {string} wifiMacs Filter devices by wifi mac(s). Multiple wifi macs can be passed in as comma separated values.
		 * @param {string} serials Filter devices by serial(s). Multiple serials can be passed in as comma separated values.
		 * @param {string} ids Filter devices by id(s). Multiple ids can be passed in as comma separated values.
		 * @param {string} scope Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags as comma separated values.
		 * @param {number} batchSize Number of devices to return, 1000 is the default as well as the max.
		 * @param {string} batchToken If the network has more devices than the batch size, a batch token will be returned
		 *     as a part of the device list. To see the remainder of the devices, pass in the batchToken as a parameter in the next request.
		 *     Requests made with the batchToken do not require additional parameters as the batchToken includes the parameters passed in
		 *     with the original request. Additional parameters passed in with the batchToken will be ignored.
		 * @return {string} Successful operation
		 */
		GetNetworkSmDevices(networkId: string, fields: string | null | undefined, wifiMacs: string | null | undefined, serials: string | null | undefined, ids: string | null | undefined, scope: string | null | undefined, batchSize: number | null | undefined, batchToken: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/devices&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&wifiMacs=' + (wifiMacs == null ? '' : encodeURIComponent(wifiMacs)) + '&serials=' + (serials == null ? '' : encodeURIComponent(serials)) + '&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&batchSize=' + batchSize + '&batchToken=' + (batchToken == null ? '' : encodeURIComponent(batchToken)), { responseType: 'text' });
		}

		/**
		 * Add, delete, or update the tags of a set of devices
		 * Add, delete, or update the tags of a set of devices
		 * Put networks/{networkId}/sm/devices/tags
		 * @return {string} Successful operation
		 */
		UpdateNetworkSmDevicesTags(networkId: string, requestBody: UpdateNetworkSmDevicesTagsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/devices/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Unenroll a device
		 * Unenroll a device
		 * Post networks/{networkId}/sm/devices/{deviceId}/unenroll
		 * @return {string} Successful operation
		 */
		UnenrollNetworkSmDevice(networkId: string, deviceId: string): Observable<string> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/unenroll', null, { responseType: 'text' });
		}

		/**
		 * List all the profiles in the network
		 * List all the profiles in the network
		 * Get networks/{networkId}/sm/profiles
		 * @return {string} Successful operation
		 */
		GetNetworkSmProfiles(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/profiles', { responseType: 'text' });
		}

		/**
		 * List the target groups in this network
		 * List the target groups in this network
		 * Get networks/{networkId}/sm/targetGroups
		 * @param {boolean} withDetails Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmTargetGroups(networkId: string, withDetails: boolean | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/targetGroups&withDetails=' + withDetails, {});
		}

		/**
		 * Add a target group
		 * Add a target group
		 * Post networks/{networkId}/sm/targetGroups
		 * @return {void} 
		 */
		CreateNetworkSmTargetGroup(networkId: string, requestBody: CreateNetworkSmTargetGroupCreatenetworksmtargetgroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/targetGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a target group from a network
		 * Delete a target group from a network
		 * Delete networks/{networkId}/sm/targetGroups/{targetGroupId}
		 * @return {void} 
		 */
		DeleteNetworkSmTargetGroup(networkId: string, targetGroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/targetGroups/' + (targetGroupId == null ? '' : encodeURIComponent(targetGroupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a target group
		 * Return a target group
		 * Get networks/{networkId}/sm/targetGroups/{targetGroupId}
		 * @param {boolean} withDetails Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response
		 * @return {string} Successful operation
		 */
		GetNetworkSmTargetGroup(networkId: string, targetGroupId: string, withDetails: boolean | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/targetGroups/' + (targetGroupId == null ? '' : encodeURIComponent(targetGroupId)) + '&withDetails=' + withDetails, { responseType: 'text' });
		}

		/**
		 * Update a target group
		 * Update a target group
		 * Put networks/{networkId}/sm/targetGroups/{targetGroupId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkSmTargetGroup(networkId: string, targetGroupId: string, requestBody: CreateNetworkSmTargetGroupCreatenetworksmtargetgroup): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/targetGroups/' + (targetGroupId == null ? '' : encodeURIComponent(targetGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get the profiles associated with a user
		 * Get the profiles associated with a user
		 * Get networks/{networkId}/sm/user/{userId}/deviceProfiles
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmUserDeviceProfiles(networkId: string, userId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/deviceProfiles', {});
		}

		/**
		 * Get a list of softwares associated with a user
		 * Get a list of softwares associated with a user
		 * Get networks/{networkId}/sm/user/{userId}/softwares
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmUserSoftwares(networkId: string, userId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/softwares', {});
		}

		/**
		 * List the owners in an SM network with various specified fields and filters
		 * List the owners in an SM network with various specified fields and filters
		 * Get networks/{networkId}/sm/users
		 * @param {string} ids Filter users by id(s). Multiple ids can be passed in as comma separated values.
		 * @param {string} usernames Filter users by username(s). Multiple usernames can be passed in as comma separated values.
		 * @param {string} emails Filter users by email(s). Multiple emails can be passed in as comma separated values.
		 * @param {string} scope Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags as comma separated values.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmUsers(networkId: string, ids: string | null | undefined, usernames: string | null | undefined, emails: string | null | undefined, scope: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/users&ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&usernames=' + (usernames == null ? '' : encodeURIComponent(usernames)) + '&emails=' + (emails == null ? '' : encodeURIComponent(emails)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)), {});
		}

		/**
		 * Return the client's daily cellular data usage history
		 * Return the client's daily cellular data usage history. Usage data is in kilobytes.
		 * Get networks/{networkId}/sm/{deviceId}/cellularUsageHistory
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmCellularUsageHistory(networkId: string, deviceId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/cellularUsageHistory', {});
		}

		/**
		 * List the certs on a device
		 * List the certs on a device
		 * Get networks/{networkId}/sm/{deviceId}/certs
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmCerts(networkId: string, deviceId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/certs', {});
		}

		/**
		 * Get the profiles associated with a device
		 * Get the profiles associated with a device
		 * Get networks/{networkId}/sm/{deviceId}/deviceProfiles
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmDeviceProfiles(networkId: string, deviceId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/deviceProfiles', {});
		}

		/**
		 * List the network adapters of a device
		 * List the network adapters of a device
		 * Get networks/{networkId}/sm/{deviceId}/networkAdapters
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmNetworkAdapters(networkId: string, deviceId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/networkAdapters', {});
		}

		/**
		 * List the restrictions on a device
		 * List the restrictions on a device
		 * Get networks/{networkId}/sm/{deviceId}/restrictions
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmRestrictions(networkId: string, deviceId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/restrictions', {});
		}

		/**
		 * List the security centers on a device
		 * List the security centers on a device
		 * Get networks/{networkId}/sm/{deviceId}/securityCenters
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmSecurityCenters(networkId: string, deviceId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/securityCenters', {});
		}

		/**
		 * Get a list of softwares associated with a device
		 * Get a list of softwares associated with a device
		 * Get networks/{networkId}/sm/{deviceId}/softwares
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmSoftwares(networkId: string, deviceId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/softwares', {});
		}

		/**
		 * List the saved SSID names on a device
		 * List the saved SSID names on a device
		 * Get networks/{networkId}/sm/{deviceId}/wlanLists
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmWlanLists(networkId: string, deviceId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/sm/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '/wlanLists', {});
		}

		/**
		 * Return the SNMP settings for a network
		 * Return the SNMP settings for a network
		 * Get networks/{networkId}/snmpSettings
		 * @return {string} Successful operation
		 */
		GetNetworkSnmpSettings(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/snmpSettings', { responseType: 'text' });
		}

		/**
		 * List the splash login attempts for a network
		 * List the splash login attempts for a network
		 * Get networks/{networkId}/splashLoginAttempts
		 * @param {GetNetworkSplashLoginAttemptsSsidNumber} ssidNumber Only return the login attempts for the specified SSID
		 * @param {string} loginIdentifier The username, email, or phone number used during login
		 * @param {number} timespan The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSplashLoginAttempts(networkId: string, ssidNumber: GetNetworkSplashLoginAttemptsSsidNumber | null | undefined, loginIdentifier: string | null | undefined, timespan: number | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/splashLoginAttempts&ssidNumber=' + ssidNumber + '&loginIdentifier=' + (loginIdentifier == null ? '' : encodeURIComponent(loginIdentifier)) + '&timespan=' + timespan, {});
		}

		/**
		 * Split a combined network into individual networks for each type of device
		 * Split a combined network into individual networks for each type of device
		 * Post networks/{networkId}/split
		 * @return {string} Successful operation
		 */
		SplitNetwork(networkId: string): Observable<string> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/split', null, { responseType: 'text' });
		}

		/**
		 * List the SSIDs in a network
		 * List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.
		 * Get networks/{networkId}/ssids
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSsids(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/ssids', {});
		}

		/**
		 * Return a single SSID
		 * Return a single SSID
		 * Get networks/{networkId}/ssids/{number}
		 * @return {string} Successful operation
		 */
		GetNetworkSsid(networkId: string, number: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/ssids/' + (number == null ? '' : encodeURIComponent(number)), { responseType: 'text' });
		}

		/**
		 * Update the attributes of an SSID
		 * Update the attributes of an SSID
		 * Put networks/{networkId}/ssids/{number}
		 * @return {string} Successful operation
		 */
		UpdateNetworkSsid(networkId: string, number: string, requestBody: UpdateNetworkSsidPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/ssids/' + (number == null ? '' : encodeURIComponent(number)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the L3 firewall rules for an SSID on an MR network
		 * Return the L3 firewall rules for an SSID on an MR network
		 * Get networks/{networkId}/ssids/{number}/l3FirewallRules
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSsidL3FirewallRules(networkId: string, number: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/ssids/' + (number == null ? '' : encodeURIComponent(number)) + '/l3FirewallRules', {});
		}

		/**
		 * Update the L3 firewall rules of an SSID on an MR network
		 * Update the L3 firewall rules of an SSID on an MR network
		 * Put networks/{networkId}/ssids/{number}/l3FirewallRules
		 * @return {Array<string>} Successful operation
		 */
		UpdateNetworkSsidL3FirewallRules(networkId: string, number: string, requestBody: UpdateNetworkSsidL3FirewallRulesPutBody): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/ssids/' + (number == null ? '' : encodeURIComponent(number)) + '/l3FirewallRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Display the splash page settings for the given SSID
		 * Display the splash page settings for the given SSID
		 * Get networks/{networkId}/ssids/{number}/splashSettings
		 * @return {string} Successful operation
		 */
		GetNetworkSsidSplashSettings(networkId: string, number: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/ssids/' + (number == null ? '' : encodeURIComponent(number)) + '/splashSettings', { responseType: 'text' });
		}

		/**
		 * Modify the splash page settings for the given SSID
		 * Modify the splash page settings for the given SSID
		 * Put networks/{networkId}/ssids/{number}/splashSettings
		 * @return {string} Successful operation
		 */
		UpdateNetworkSsidSplashSettings(networkId: string, number: string, requestBody: UpdateNetworkSsidSplashSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/ssids/' + (number == null ? '' : encodeURIComponent(number)) + '/splashSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the static routes for an MX or teleworker network
		 * List the static routes for an MX or teleworker network
		 * Get networks/{networkId}/staticRoutes
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkStaticRoutes(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/staticRoutes', {});
		}

		/**
		 * Add a static route for an MX or teleworker network
		 * Add a static route for an MX or teleworker network
		 * Post networks/{networkId}/staticRoutes
		 * @return {void} 
		 */
		CreateNetworkStaticRoute(networkId: string, requestBody: CreateNetworkStaticRoutePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/staticRoutes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a static route from an MX or teleworker network
		 * Delete a static route from an MX or teleworker network
		 * Delete networks/{networkId}/staticRoutes/{staticRouteId}
		 * @return {void} 
		 */
		DeleteNetworkStaticRoute(networkId: string, staticRouteId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/staticRoutes/' + (staticRouteId == null ? '' : encodeURIComponent(staticRouteId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a static route for an MX or teleworker network
		 * Return a static route for an MX or teleworker network
		 * Get networks/{networkId}/staticRoutes/{staticRouteId}
		 * @return {string} Successful operation
		 */
		GetNetworkStaticRoute(networkId: string, staticRouteId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/staticRoutes/' + (staticRouteId == null ? '' : encodeURIComponent(staticRouteId)), { responseType: 'text' });
		}

		/**
		 * Update a static route for an MX or teleworker network
		 * Update a static route for an MX or teleworker network
		 * Put networks/{networkId}/staticRoutes/{staticRouteId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkStaticRoute(networkId: string, staticRouteId: string, requestBody: UpdateNetworkStaticRoutePutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/staticRoutes/' + (staticRouteId == null ? '' : encodeURIComponent(staticRouteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Swap MX primary and warm spare appliances
		 * Swap MX primary and warm spare appliances
		 * Post networks/{networkId}/swapWarmSpare
		 * @return {string} Successful operation
		 */
		SwapNetworkWarmSpare(networkId: string): Observable<string> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/swapWarmSpare', null, { responseType: 'text' });
		}

		/**
		 * List link aggregation groups
		 * List link aggregation groups
		 * Get networks/{networkId}/switch/linkAggregations
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSwitchLinkAggregations(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/linkAggregations', {});
		}

		/**
		 * Create a link aggregation group
		 * Create a link aggregation group
		 * Post networks/{networkId}/switch/linkAggregations
		 * @return {void} 
		 */
		CreateNetworkSwitchLinkAggregation(networkId: string, requestBody: CreateNetworkSwitchLinkAggregationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/linkAggregations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Split a link aggregation group into separate ports
		 * Split a link aggregation group into separate ports
		 * Delete networks/{networkId}/switch/linkAggregations/{linkAggregationId}
		 * @return {void} 
		 */
		DeleteNetworkSwitchLinkAggregation(networkId: string, linkAggregationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/linkAggregations/' + (linkAggregationId == null ? '' : encodeURIComponent(linkAggregationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a link aggregation group
		 * Update a link aggregation group
		 * Put networks/{networkId}/switch/linkAggregations/{linkAggregationId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkSwitchLinkAggregation(networkId: string, linkAggregationId: string, requestBody: UpdateNetworkSwitchLinkAggregationPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/linkAggregations/' + (linkAggregationId == null ? '' : encodeURIComponent(linkAggregationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List switch port schedules
		 * List switch port schedules
		 * Get networks/{networkId}/switch/portSchedules
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSwitchPortSchedules(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/portSchedules', {});
		}

		/**
		 * Add a switch port schedule
		 * Add a switch port schedule
		 * Post networks/{networkId}/switch/portSchedules
		 * @return {void} 
		 */
		CreateNetworkSwitchPortSchedule(networkId: string, requestBody: CreateNetworkSwitchPortSchedulePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/portSchedules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a switch port schedule
		 * Delete a switch port schedule
		 * Delete networks/{networkId}/switch/portSchedules/{portScheduleId}
		 * @return {void} 
		 */
		DeleteNetworkSwitchPortSchedule(networkId: string, portScheduleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/portSchedules/' + (portScheduleId == null ? '' : encodeURIComponent(portScheduleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a switch port schedule
		 * Update a switch port schedule
		 * Put networks/{networkId}/switch/portSchedules/{portScheduleId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkSwitchPortSchedule(networkId: string, portScheduleId: string, requestBody: UpdateNetworkSwitchPortSchedulePutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/portSchedules/' + (portScheduleId == null ? '' : encodeURIComponent(portScheduleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns the switch network settings
		 * Returns the switch network settings
		 * Get networks/{networkId}/switch/settings
		 * @return {string} Successful operation
		 */
		GetNetworkSwitchSettings(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings', { responseType: 'text' });
		}

		/**
		 * Update switch network settings
		 * Update switch network settings
		 * Put networks/{networkId}/switch/settings
		 * @return {string} Successful operation
		 */
		UpdateNetworkSwitchSettings(networkId: string, requestBody: UpdateNetworkSwitchSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the MTU configuration
		 * Return the MTU configuration
		 * Get networks/{networkId}/switch/settings/mtu
		 * @return {string} Successful operation
		 */
		GetNetworkSwitchSettingsMtu(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/mtu', { responseType: 'text' });
		}

		/**
		 * Return multicast settings for a network
		 * Return multicast settings for a network
		 * Get networks/{networkId}/switch/settings/multicast
		 * @return {string} Successful operation
		 */
		GetNetworkSwitchSettingsMulticast(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/multicast', { responseType: 'text' });
		}

		/**
		 * Update multicast settings for a network
		 * Update multicast settings for a network
		 * Put networks/{networkId}/switch/settings/multicast
		 * @return {string} Successful operation
		 */
		UpdateNetworkSwitchSettingsMulticast(networkId: string, requestBody: UpdateNetworkSwitchSettingsMulticastPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/multicast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List quality of service rules
		 * List quality of service rules
		 * Get networks/{networkId}/switch/settings/qosRules
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSwitchSettingsQosRules(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/qosRules', {});
		}

		/**
		 * Add a quality of service rule
		 * Add a quality of service rule
		 * Post networks/{networkId}/switch/settings/qosRules
		 * @return {void} 
		 */
		CreateNetworkSwitchSettingsQosRule(networkId: string, requestBody: CreateNetworkSwitchSettingsQosRulePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/qosRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the quality of service rule IDs by order in which they will be processed by the switch
		 * Return the quality of service rule IDs by order in which they will be processed by the switch
		 * Get networks/{networkId}/switch/settings/qosRules/order
		 * @return {string} Successful operation
		 */
		GetNetworkSwitchSettingsQosRulesOrder(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/qosRules/order', { responseType: 'text' });
		}

		/**
		 * Update the order in which the rules should be processed by the switch
		 * Update the order in which the rules should be processed by the switch
		 * Put networks/{networkId}/switch/settings/qosRules/order
		 * @return {string} Successful operation
		 */
		UpdateNetworkSwitchSettingsQosRulesOrder(networkId: string, requestBody: UpdateNetworkSwitchSettingsQosRulesOrderPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/qosRules/order', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Delete a quality of service rule
		 * Delete a quality of service rule
		 * Delete networks/{networkId}/switch/settings/qosRules/{qosRuleId}
		 * @return {void} 
		 */
		DeleteNetworkSwitchSettingsQosRule(networkId: string, qosRuleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/qosRules/' + (qosRuleId == null ? '' : encodeURIComponent(qosRuleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a quality of service rule
		 * Return a quality of service rule
		 * Get networks/{networkId}/switch/settings/qosRules/{qosRuleId}
		 * @return {string} Successful operation
		 */
		GetNetworkSwitchSettingsQosRule(networkId: string, qosRuleId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/qosRules/' + (qosRuleId == null ? '' : encodeURIComponent(qosRuleId)), { responseType: 'text' });
		}

		/**
		 * Update a quality of service rule
		 * Update a quality of service rule
		 * Put networks/{networkId}/switch/settings/qosRules/{qosRuleId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkSwitchSettingsQosRule(networkId: string, qosRuleId: string, requestBody: UpdateNetworkSwitchSettingsQosRulePutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/qosRules/' + (qosRuleId == null ? '' : encodeURIComponent(qosRuleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the storm control configuration for a switch network
		 * Return the storm control configuration for a switch network
		 * Get networks/{networkId}/switch/settings/stormControl
		 * @return {string} Successful operation
		 */
		GetNetworkSwitchSettingsStormControl(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/stormControl', { responseType: 'text' });
		}

		/**
		 * Update the storm control configuration for a switch network
		 * Update the storm control configuration for a switch network
		 * Put networks/{networkId}/switch/settings/stormControl
		 * @return {string} Successful operation
		 */
		UpdateNetworkSwitchSettingsStormControl(networkId: string, requestBody: UpdateNetworkSwitchSettingsStormControlPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switch/settings/stormControl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the switch stacks in a network
		 * List the switch stacks in a network
		 * Get networks/{networkId}/switchStacks
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSwitchStacks(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/switchStacks', {});
		}

		/**
		 * List the syslog servers for a network
		 * List the syslog servers for a network
		 * Get networks/{networkId}/syslogServers
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSyslogServers(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/syslogServers', {});
		}

		/**
		 * Update the syslog servers for a network
		 * Update the syslog servers for a network
		 * Put networks/{networkId}/syslogServers
		 * @return {Array<string>} Successful operation
		 */
		UpdateNetworkSyslogServers(networkId: string, requestBody: UpdateNetworkSyslogServersPutBody): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/syslogServers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return the traffic analysis data for this network
		 * Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.
		 * Get networks/{networkId}/traffic
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 30 days from today.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.
		 * @param {GetNetworkTrafficDeviceType} deviceType Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkTraffic(networkId: string, t0: string | null | undefined, timespan: number | null | undefined, deviceType: GetNetworkTrafficDeviceType | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/traffic&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&timespan=' + timespan + '&deviceType=' + deviceType, {});
		}

		/**
		 * Unbind a network from a template.
		 * Unbind a network from a template.
		 * Post networks/{networkId}/unbind
		 * @return {void} Successful operation
		 */
		UnbindNetwork(networkId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/unbind', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the uplink settings for your MX network.
		 * Returns the uplink settings for your MX network.
		 * Get networks/{networkId}/uplinkSettings
		 * @return {string} Successful operation
		 */
		GetNetworkUplinkSettings(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/uplinkSettings', { responseType: 'text' });
		}

		/**
		 * Updates the uplink settings for your MX network.
		 * Updates the uplink settings for your MX network.
		 * Put networks/{networkId}/uplinkSettings
		 * @return {string} Successful operation
		 */
		UpdateNetworkUplinkSettings(networkId: string, requestBody: UpdateNetworkUplinkSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/uplinkSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the VLANs for an MX network
		 * List the VLANs for an MX network
		 * Get networks/{networkId}/vlans
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkVlans(networkId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/vlans', {});
		}

		/**
		 * Add a VLAN
		 * Add a VLAN
		 * Post networks/{networkId}/vlans
		 * @return {void} 
		 */
		CreateNetworkVlan(networkId: string, requestBody: CreateNetworkVlanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/vlans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a VLAN from a network
		 * Delete a VLAN from a network
		 * Delete networks/{networkId}/vlans/{vlanId}
		 * @return {void} 
		 */
		DeleteNetworkVlan(networkId: string, vlanId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/vlans/' + (vlanId == null ? '' : encodeURIComponent(vlanId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a VLAN
		 * Return a VLAN
		 * Get networks/{networkId}/vlans/{vlanId}
		 * @return {string} Successful operation
		 */
		GetNetworkVlan(networkId: string, vlanId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/vlans/' + (vlanId == null ? '' : encodeURIComponent(vlanId)), { responseType: 'text' });
		}

		/**
		 * Update a VLAN
		 * Update a VLAN
		 * Put networks/{networkId}/vlans/{vlanId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkVlan(networkId: string, vlanId: string, requestBody: UpdateNetworkVlanPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/vlans/' + (vlanId == null ? '' : encodeURIComponent(vlanId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns the enabled status of VLANs for the network
		 * Returns the enabled status of VLANs for the network
		 * Get networks/{networkId}/vlansEnabledState
		 * @return {string} Successful operation
		 */
		GetNetworkVlansEnabledState(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/vlansEnabledState', { responseType: 'text' });
		}

		/**
		 * Enable/Disable VLANs for the given network
		 * Enable/Disable VLANs for the given network
		 * Put networks/{networkId}/vlansEnabledState
		 * @return {string} Successful operation
		 */
		UpdateNetworkVlansEnabledState(networkId: string, requestBody: UpdateNetworkVlansEnabledStatePutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/vlansEnabledState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return MX warm spare settings
		 * Return MX warm spare settings
		 * Get networks/{networkId}/warmSpareSettings
		 * @return {string} Successful operation
		 */
		GetNetworkWarmSpareSettings(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/warmSpareSettings', { responseType: 'text' });
		}

		/**
		 * Update MX warm spare settings
		 * Update MX warm spare settings
		 * Put networks/{networkId}/warmSpareSettings
		 * @return {string} Successful operation
		 */
		UpdateNetworkWarmSpareSettings(networkId: string, requestBody: UpdateNetworkWarmSpareSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/warmSpareSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the non-basic RF profiles for this network
		 * List the non-basic RF profiles for this network
		 * Get networks/{networkId}/wireless/rfProfiles
		 * @param {boolean} includeTemplateProfiles If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkWirelessRfProfiles(networkId: string, includeTemplateProfiles: boolean | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/wireless/rfProfiles&includeTemplateProfiles=' + includeTemplateProfiles, {});
		}

		/**
		 * Creates new RF profile for this network
		 * Creates new RF profile for this network
		 * Post networks/{networkId}/wireless/rfProfiles
		 * @return {void} 
		 */
		CreateNetworkWirelessRfProfile(networkId: string, requestBody: CreateNetworkWirelessRfProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/wireless/rfProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a RF Profile
		 * Delete a RF Profile
		 * Delete networks/{networkId}/wireless/rfProfiles/{rfProfileId}
		 * @return {void} 
		 */
		DeleteNetworkWirelessRfProfile(networkId: string, rfProfileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/wireless/rfProfiles/' + (rfProfileId == null ? '' : encodeURIComponent(rfProfileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a RF profile
		 * Return a RF profile
		 * Get networks/{networkId}/wireless/rfProfiles/{rfProfileId}
		 * @return {string} Successful operation
		 */
		GetNetworkWirelessRfProfile(networkId: string, rfProfileId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/wireless/rfProfiles/' + (rfProfileId == null ? '' : encodeURIComponent(rfProfileId)), { responseType: 'text' });
		}

		/**
		 * Updates specified RF profile for this network
		 * Updates specified RF profile for this network
		 * Put networks/{networkId}/wireless/rfProfiles/{rfProfileId}
		 * @return {string} Successful operation
		 */
		UpdateNetworkWirelessRfProfile(networkId: string, rfProfileId: string, requestBody: UpdateNetworkWirelessRfProfilePutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/wireless/rfProfiles/' + (rfProfileId == null ? '' : encodeURIComponent(rfProfileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the wireless settings for a network
		 * Return the wireless settings for a network
		 * Get networks/{networkId}/wireless/settings
		 * @return {string} Successful operation
		 */
		GetNetworkWirelessSettings(networkId: string): Observable<string> {
			return this.http.get(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/wireless/settings', { responseType: 'text' });
		}

		/**
		 * Update the wireless settings for a network
		 * Update the wireless settings for a network
		 * Put networks/{networkId}/wireless/settings
		 * @return {string} Successful operation
		 */
		UpdateNetworkWirelessSettings(networkId: string, requestBody: UpdateNetworkWirelessSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (networkId == null ? '' : encodeURIComponent(networkId)) + '/wireless/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Lock a set of devices
		 * Lock a set of devices
		 * Put networks/{network_id}/sm/devices/lock
		 * @return {string} Successful operation
		 */
		LockNetworkSmDevices(network_id: string, requestBody: LockNetworkSmDevicesPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'networks/' + (network_id == null ? '' : encodeURIComponent(network_id)) + '/sm/devices/lock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
		 * Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
		 * Get networks/{network_id}/sm/{id}/connectivity
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmConnectivity(network_id: string, id: string, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (network_id == null ? '' : encodeURIComponent(network_id)) + '/sm/' + (id == null ? '' : encodeURIComponent(id)) + '/connectivity&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)), {});
		}

		/**
		 * Return historical records of various Systems Manager network connection details for desktop devices.
		 * Return historical records of various Systems Manager network connection details for desktop devices.
		 * Get networks/{network_id}/sm/{id}/desktopLogs
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmDesktopLogs(network_id: string, id: string, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (network_id == null ? '' : encodeURIComponent(network_id)) + '/sm/' + (id == null ? '' : encodeURIComponent(id)) + '/desktopLogs&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)), {});
		}

		/**
		 * Return historical records of commands sent to Systems Manager devices
		 * Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.
		 * Get networks/{network_id}/sm/{id}/deviceCommandLogs
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmDeviceCommandLogs(network_id: string, id: string, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (network_id == null ? '' : encodeURIComponent(network_id)) + '/sm/' + (id == null ? '' : encodeURIComponent(id)) + '/deviceCommandLogs&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)), {});
		}

		/**
		 * Return historical records of various Systems Manager client metrics for desktop devices.
		 * Return historical records of various Systems Manager client metrics for desktop devices.
		 * Get networks/{network_id}/sm/{id}/performanceHistory
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @return {Array<string>} Successful operation
		 */
		GetNetworkSmPerformanceHistory(network_id: string, id: string, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'networks/' + (network_id == null ? '' : encodeURIComponent(network_id)) + '/sm/' + (id == null ? '' : encodeURIComponent(id)) + '/performanceHistory&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)), {});
		}

		/**
		 * List the organizations that the user has privileges on
		 * List the organizations that the user has privileges on
		 * Get organizations
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizations(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations', {});
		}

		/**
		 * Return an organization
		 * Return an organization
		 * Get organizations/{organizationId}
		 * @return {string} Successful operation
		 */
		GetOrganization(organizationId: string): Observable<string> {
			return this.http.get(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)), { responseType: 'text' });
		}

		/**
		 * Return the list of action batches in the organization
		 * Return the list of action batches in the organization
		 * Get organizations/{organizationId}/actionBatches
		 * @param {GetOrganizationActionBatchesStatus} status Filter batches by status. Valid types are pending, completed, and failed.
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationActionBatches(organizationId: string, status: GetOrganizationActionBatchesStatus | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/actionBatches&status=' + status, {});
		}

		/**
		 * Create an action batch
		 * Create an action batch
		 * Post organizations/{organizationId}/actionBatches
		 * @return {void} 
		 */
		CreateOrganizationActionBatch(organizationId: string, requestBody: CreateOrganizationActionBatchPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/actionBatches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an action batch
		 * Delete an action batch
		 * Delete organizations/{organizationId}/actionBatches/{actionBatchId}
		 * @return {void} 
		 */
		DeleteOrganizationActionBatch(organizationId: string, actionBatchId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/actionBatches/' + (actionBatchId == null ? '' : encodeURIComponent(actionBatchId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an action batch
		 * Update an action batch
		 * Put organizations/{organizationId}/actionBatches/{actionBatchId}
		 * @return {string} Successful operation
		 */
		UpdateOrganizationActionBatch(organizationId: string, actionBatchId: string, requestBody: UpdateOrganizationActionBatchPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/actionBatches/' + (actionBatchId == null ? '' : encodeURIComponent(actionBatchId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the dashboard administrators in this organization
		 * List the dashboard administrators in this organization
		 * Get organizations/{organizationId}/admins
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationAdmins(organizationId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/admins', {});
		}

		/**
		 * Create a new dashboard administrator
		 * Create a new dashboard administrator
		 * Post organizations/{organizationId}/admins
		 * @return {void} 
		 */
		CreateOrganizationAdmin(organizationId: string, requestBody: CreateOrganizationAdminPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/admins', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revoke all access for a dashboard administrator within this organization
		 * Revoke all access for a dashboard administrator within this organization
		 * Delete organizations/{organizationId}/admins/{adminId}
		 * @return {void} 
		 */
		DeleteOrganizationAdmin(organizationId: string, adminId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/admins/' + (adminId == null ? '' : encodeURIComponent(adminId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an administrator
		 * Update an administrator
		 * Put organizations/{organizationId}/admins/{adminId}
		 * @return {string} Successful operation
		 */
		UpdateOrganizationAdmin(organizationId: string, adminId: string, requestBody: UpdateOrganizationAdminPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/admins/' + (adminId == null ? '' : encodeURIComponent(adminId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the API requests made by an organization
		 * List the API requests made by an organization
		 * Get organizations/{organizationId}/apiRequests
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} adminId Filter the results by the ID of the admin who made the API requests
		 * @param {string} path Filter the results by the path of the API requests
		 * @param {string} method Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE')
		 * @param {number} responseCode Filter the results by the response code of the API requests
		 * @param {string} sourceIp Filter the results by the IP address of the originating API request
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationApiRequests(organizationId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined, adminId: string | null | undefined, path: string | null | undefined, method: string | null | undefined, responseCode: number | null | undefined, sourceIp: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/apiRequests&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)) + '&adminId=' + (adminId == null ? '' : encodeURIComponent(adminId)) + '&path=' + (path == null ? '' : encodeURIComponent(path)) + '&method=' + (method == null ? '' : encodeURIComponent(method)) + '&responseCode=' + responseCode + '&sourceIp=' + (sourceIp == null ? '' : encodeURIComponent(sourceIp)), {});
		}

		/**
		 * Return an aggregated overview of API requests data
		 * Return an aggregated overview of API requests data
		 * Get organizations/{organizationId}/apiRequests/overview
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days.
		 * @return {string} Successful operation
		 */
		GetOrganizationApiRequestsOverview(organizationId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/apiRequests/overview&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan, { responseType: 'text' });
		}

		/**
		 * Claim a list of devices, licenses, and/or orders into an organization
		 * Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
		 * Post organizations/{organizationId}/claim
		 * @return {string} Successful operation
		 */
		ClaimIntoOrganization(organizationId: string, requestBody: ClaimIntoOrganizationPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/claim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Create a new organization by cloning the addressed organization
		 * Create a new organization by cloning the addressed organization
		 * Post organizations/{organizationId}/clone
		 * @return {void} 
		 */
		CloneOrganization(organizationId: string, requestBody: CloneOrganizationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the configuration templates for this organization
		 * List the configuration templates for this organization
		 * Get organizations/{organizationId}/configTemplates
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationConfigTemplates(organizationId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/configTemplates', {});
		}

		/**
		 * Remove a configuration template
		 * Remove a configuration template
		 * Delete organizations/{organizationId}/configTemplates/{configTemplateId}
		 * @return {void} 
		 */
		DeleteOrganizationConfigTemplate(organizationId: string, configTemplateId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/configTemplates/' + (configTemplateId == null ? '' : encodeURIComponent(configTemplateId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the switch profiles for your switch template configuration
		 * List the switch profiles for your switch template configuration
		 * Get organizations/{organizationId}/configTemplates/{configTemplateId}/switchProfiles
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationConfigTemplateSwitchProfiles(organizationId: string, configTemplateId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/configTemplates/' + (configTemplateId == null ? '' : encodeURIComponent(configTemplateId)) + '/switchProfiles', {});
		}

		/**
		 * View the Change Log for your organization
		 * View the Change Log for your organization
		 * Get organizations/{organizationId}/configurationChanges
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days.
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} networkId Filters on the given network
		 * @param {string} adminId Filters on the given Admin
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationConfigurationChanges(organizationId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined, networkId: string | null | undefined, adminId: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/configurationChanges&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)) + '&networkId=' + (networkId == null ? '' : encodeURIComponent(networkId)) + '&adminId=' + (adminId == null ? '' : encodeURIComponent(adminId)), {});
		}

		/**
		 * List the status of every Meraki device in the organization
		 * List the status of every Meraki device in the organization
		 * Get organizations/{organizationId}/deviceStatuses
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationDeviceStatuses(organizationId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/deviceStatuses', {});
		}

		/**
		 * List the devices in an organization
		 * List the devices in an organization
		 * Get organizations/{organizationId}/devices
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} configurationUpdatedAfter Filter results by whether or not the device's configuration has been updated after the given timestamp
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationDevices(organizationId: string, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined, configurationUpdatedAfter: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/devices&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)) + '&configurationUpdatedAfter=' + (configurationUpdatedAfter == null ? '' : encodeURIComponent(configurationUpdatedAfter)), {});
		}

		/**
		 * Return the inventory for an organization
		 * Return the inventory for an organization
		 * Get organizations/{organizationId}/inventory
		 * @param {boolean} includeLicenseInfo When this parameter is true, each entity in the response will include the license expiration date of the device (if any). Only applies to organizations that are on the per-device licensing model. Defaults to false.
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationInventory(organizationId: string, includeLicenseInfo: boolean | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/inventory&includeLicenseInfo=' + includeLicenseInfo, {});
		}

		/**
		 * Return an overview of the license state for an organization
		 * Return an overview of the license state for an organization
		 * Get organizations/{organizationId}/licenseState
		 * @return {string} Successful operation
		 */
		GetOrganizationLicenseState(organizationId: string): Observable<string> {
			return this.http.get(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/licenseState', { responseType: 'text' });
		}

		/**
		 * List the licenses for an organization
		 * List the licenses for an organization
		 * Get organizations/{organizationId}/licenses
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} deviceSerial Filter the licenses to those assigned to a particular device
		 * @param {string} networkId Filter the licenses to those assigned in a particular network
		 * @param {GetOrganizationLicensesState} state Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'recentlyQueued', 'unused' or 'unusedActive'
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationLicenses(organizationId: string, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined, deviceSerial: string | null | undefined, networkId: string | null | undefined, state: GetOrganizationLicensesState | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/licenses&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)) + '&deviceSerial=' + (deviceSerial == null ? '' : encodeURIComponent(deviceSerial)) + '&networkId=' + (networkId == null ? '' : encodeURIComponent(networkId)) + '&state=' + state, {});
		}

		/**
		 * Assign SM seats to a network
		 * Assign SM seats to a network. This will increase the managed SM device limit of the network
		 * Post organizations/{organizationId}/licenses/assignSeats
		 * @return {string} Successful operation
		 */
		AssignOrganizationLicensesSeats(organizationId: string, requestBody: AssignOrganizationLicensesSeatsPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/licenses/assignSeats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Move SM seats to another organization
		 * Move SM seats to another organization
		 * Post organizations/{organizationId}/licenses/moveSeats
		 * @return {string} Successful operation
		 */
		MoveOrganizationLicensesSeats(organizationId: string, requestBody: MoveOrganizationLicensesSeatsPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/licenses/moveSeats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Renew SM seats of a license
		 * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
		 * Post organizations/{organizationId}/licenses/renewSeats
		 * @return {string} Successful operation
		 */
		RenewOrganizationLicensesSeats(organizationId: string, requestBody: RenewOrganizationLicensesSeatsPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/licenses/renewSeats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Display a license
		 * Display a license
		 * Get organizations/{organizationId}/licenses/{licenseId}
		 * @return {string} Successful operation
		 */
		GetOrganizationLicense(organizationId: string, licenseId: string): Observable<string> {
			return this.http.get(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/licenses/' + (licenseId == null ? '' : encodeURIComponent(licenseId)), { responseType: 'text' });
		}

		/**
		 * List the networks in an organization
		 * List the networks in an organization
		 * Get organizations/{organizationId}/networks
		 * @param {string} configTemplateId An optional parameter that is the ID of a config template. Will return all networks bound to that template.
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationNetworks(organizationId: string, configTemplateId: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/networks&configTemplateId=' + (configTemplateId == null ? '' : encodeURIComponent(configTemplateId)), {});
		}

		/**
		 * Create a network
		 * Create a network
		 * Post organizations/{organizationId}/networks
		 * @return {void} 
		 */
		CreateOrganizationNetwork(organizationId: string, requestBody: CreateOrganizationNetworkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/networks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Combine multiple networks into a single network
		 * Combine multiple networks into a single network
		 * Post organizations/{organizationId}/networks/combine
		 * @return {string} Successful operation
		 */
		CombineOrganizationNetworks(organizationId: string, requestBody: CombineOrganizationNetworksPostBody): Observable<string> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/networks/combine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
		 * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
		 * Get organizations/{organizationId}/openapiSpec
		 * @return {string} Successful operation
		 */
		GetOrganizationOpenapiSpec(organizationId: string): Observable<string> {
			return this.http.get(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/openapiSpec', { responseType: 'text' });
		}

		/**
		 * List the SAML roles for this organization
		 * List the SAML roles for this organization
		 * Get organizations/{organizationId}/samlRoles
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationSamlRoles(organizationId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/samlRoles', {});
		}

		/**
		 * Create a SAML role
		 * Create a SAML role
		 * Post organizations/{organizationId}/samlRoles
		 * @return {void} 
		 */
		CreateOrganizationSamlRole(organizationId: string, requestBody: CreateOrganizationSamlRolePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/samlRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a SAML role
		 * Return a SAML role
		 * Get organizations/{organizationId}/samlRoles/{samlRoleId}
		 * @return {string} Successful operation
		 */
		GetOrganizationSamlRole(organizationId: string, samlRoleId: string): Observable<string> {
			return this.http.get(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/samlRoles/' + (samlRoleId == null ? '' : encodeURIComponent(samlRoleId)), { responseType: 'text' });
		}

		/**
		 * Update a SAML role
		 * Update a SAML role
		 * Put organizations/{organizationId}/samlRoles/{samlRoleId}
		 * @return {string} Successful operation
		 */
		UpdateOrganizationSamlRole(organizationId: string, samlRoleId: string, requestBody: UpdateOrganizationSamlRolePutBody): Observable<string> {
			return this.http.put(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/samlRoles/' + (samlRoleId == null ? '' : encodeURIComponent(samlRoleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Returns all supported intrusion settings for an organization
		 * Returns all supported intrusion settings for an organization
		 * Get organizations/{organizationId}/security/intrusionSettings
		 * @return {string} Successful operation
		 */
		GetOrganizationSecurityIntrusionSettings(organizationId: string): Observable<string> {
			return this.http.get(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/security/intrusionSettings', { responseType: 'text' });
		}

		/**
		 * Sets supported intrusion settings for an organization
		 * Sets supported intrusion settings for an organization
		 * Put organizations/{organizationId}/security/intrusionSettings
		 * @return {string} Successful operation
		 */
		UpdateOrganizationSecurityIntrusionSettings(organizationId: string, requestBody: UpdateOrganizationSecurityIntrusionSettingsPutBody): Observable<string> {
			return this.http.put(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/security/intrusionSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * List the security events (intrusion detection only) for an organization
		 * List the security events (intrusion detection only) for an organization
		 * Get organizations/{organizationId}/securityEvents
		 * @param {string} t0 The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 365 days after t0.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days.
		 * @param {number} perPage The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
		 * @param {string} startingAfter A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @param {string} endingBefore A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationSecurityEvents(organizationId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, perPage: number | null | undefined, startingAfter: string | null | undefined, endingBefore: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/securityEvents&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&perPage=' + perPage + '&startingAfter=' + (startingAfter == null ? '' : encodeURIComponent(startingAfter)) + '&endingBefore=' + (endingBefore == null ? '' : encodeURIComponent(endingBefore)), {});
		}

		/**
		 * Return the SNMP settings for an organization
		 * Return the SNMP settings for an organization
		 * Get organizations/{organizationId}/snmp
		 * @return {string} Successful operation
		 */
		GetOrganizationSnmp(organizationId: string): Observable<string> {
			return this.http.get(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/snmp', { responseType: 'text' });
		}

		/**
		 * Return the third party VPN peers for an organization
		 * Return the third party VPN peers for an organization
		 * Get organizations/{organizationId}/thirdPartyVPNPeers
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationThirdPartyVPNPeers(organizationId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/thirdPartyVPNPeers', {});
		}

		/**
		 * Update the third party VPN peers for an organization
		 * Update the third party VPN peers for an organization
		 * Put organizations/{organizationId}/thirdPartyVPNPeers
		 * @return {Array<string>} Successful operation
		 */
		UpdateOrganizationThirdPartyVPNPeers(organizationId: string, requestBody: UpdateOrganizationThirdPartyVPNPeersPutBody): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/thirdPartyVPNPeers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
		 * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
		 * Get organizations/{organizationId}/uplinksLossAndLatency
		 * @param {string} t0 The beginning of the timespan for the data. The maximum lookback period is 60 days from today.
		 * @param {string} t1 The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past.
		 * @param {number} timespan The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes.
		 * @param {GetNetworkDeviceLossAndLatencyHistoryUplink} uplink Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks.
		 * @param {string} ip Optional filter for a specific destination IP. Default will return all destination IPs.
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationUplinksLossAndLatency(organizationId: string, t0: string | null | undefined, t1: string | null | undefined, timespan: number | null | undefined, uplink: GetNetworkDeviceLossAndLatencyHistoryUplink | null | undefined, ip: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/uplinksLossAndLatency&t0=' + (t0 == null ? '' : encodeURIComponent(t0)) + '&t1=' + (t1 == null ? '' : encodeURIComponent(t1)) + '&timespan=' + timespan + '&uplink=' + uplink + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)), {});
		}

		/**
		 * Return the firewall rules for an organization's site-to-site VPN
		 * Return the firewall rules for an organization's site-to-site VPN
		 * Get organizations/{organizationId}/vpnFirewallRules
		 * @return {Array<string>} Successful operation
		 */
		GetOrganizationVpnFirewallRules(organizationId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/vpnFirewallRules', {});
		}

		/**
		 * Update the firewall rules of an organization's site-to-site VPN
		 * Update the firewall rules of an organization's site-to-site VPN
		 * Put organizations/{organizationId}/vpnFirewallRules
		 * @return {Array<string>} Successful operation
		 */
		UpdateOrganizationVpnFirewallRules(organizationId: string, requestBody: UpdateOrganizationVpnFirewallRulesPutBody): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/vpnFirewallRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GetDeviceCameraAnalyticsOverviewObjectType { person = 'person', vehicle = 'vehicle' }

	export interface UpdateDeviceCameraVideoSettingsPutBody {

		/** Boolean indicating if external rtsp stream is exposed */
		externalRtspEnabled?: boolean | null;
	}
	export interface UpdateDeviceCameraVideoSettingsPutBodyFormProperties {

		/** Boolean indicating if external rtsp stream is exposed */
		externalRtspEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDeviceCameraVideoSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateDeviceCameraVideoSettingsPutBodyFormProperties>({
			externalRtspEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDeviceCellularGatewaySettingsPutBody {

		/** list of all fixed IP assignments for a single MG */
		UpdateDeviceCellularGatewaySettingsPutBodyFixedIpAssignments?: Array<UpdateDeviceCellularGatewaySettingsPutBodyFixedIpAssignments>;

		/** list of all reserved IP ranges for a single MG */
		UpdateDeviceCellularGatewaySettingsPutBodyReservedIpRanges?: Array<UpdateDeviceCellularGatewaySettingsPutBodyReservedIpRanges>;
	}
	export interface UpdateDeviceCellularGatewaySettingsPutBodyFormProperties {
	}
	export function CreateUpdateDeviceCellularGatewaySettingsPutBodyFormGroup() {
		return new FormGroup<UpdateDeviceCellularGatewaySettingsPutBodyFormProperties>({
		});

	}

	export interface UpdateDeviceCellularGatewaySettingsPutBodyFixedIpAssignments {

		/**
		 * The IP address you want to assign to a specific server or device
		 * Required
		 */
		ip: string;

		/**
		 * The MAC address of the server or device that hosts the internal resource that you wish to receive the specified IP address
		 * Required
		 */
		mac: string;

		/** A descriptive name of the assignment */
		name?: string | null;
	}
	export interface UpdateDeviceCellularGatewaySettingsPutBodyFixedIpAssignmentsFormProperties {

		/**
		 * The IP address you want to assign to a specific server or device
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/**
		 * The MAC address of the server or device that hosts the internal resource that you wish to receive the specified IP address
		 * Required
		 */
		mac: FormControl<string | null | undefined>,

		/** A descriptive name of the assignment */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceCellularGatewaySettingsPutBodyFixedIpAssignmentsFormGroup() {
		return new FormGroup<UpdateDeviceCellularGatewaySettingsPutBodyFixedIpAssignmentsFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mac: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeviceCellularGatewaySettingsPutBodyReservedIpRanges {

		/**
		 * Comment explaining the reserved IP range
		 * Required
		 */
		comment: string;

		/**
		 * Ending IP included in the reserved range of IPs
		 * Required
		 */
		end: string;

		/**
		 * Starting IP included in the reserved range of IPs
		 * Required
		 */
		start: string;
	}
	export interface UpdateDeviceCellularGatewaySettingsPutBodyReservedIpRangesFormProperties {

		/**
		 * Comment explaining the reserved IP range
		 * Required
		 */
		comment: FormControl<string | null | undefined>,

		/**
		 * Ending IP included in the reserved range of IPs
		 * Required
		 */
		end: FormControl<string | null | undefined>,

		/**
		 * Starting IP included in the reserved range of IPs
		 * Required
		 */
		start: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceCellularGatewaySettingsPutBodyReservedIpRangesFormGroup() {
		return new FormGroup<UpdateDeviceCellularGatewaySettingsPutBodyReservedIpRangesFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			end: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBody {

		/** An array of port forwarding params */
		UpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBodyRules?: Array<UpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBodyRules>;
	}
	export interface UpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBodyFormProperties {
	}
	export function CreateUpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBodyFormGroup() {
		return new FormGroup<UpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBodyFormProperties>({
		});

	}

	export interface UpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBodyRules {

		/**
		 * `any` or `restricted`. Specify the right to make inbound connections on the specified ports or port ranges. If `restricted`, a list of allowed IPs is mandatory.
		 * Required
		 */
		access: string;

		/** An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges. */
		allowedIps?: Array<string>;

		/**
		 * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
		 * Required
		 */
		lanIp: string;

		/**
		 * A port or port ranges that will receive the forwarded traffic from the WAN
		 * Required
		 */
		localPort: string;

		/** A descriptive name for the rule */
		name?: string | null;

		/**
		 * TCP or UDP
		 * Required
		 */
		protocol: string;

		/**
		 * A port or port ranges that will be forwarded to the host on the LAN
		 * Required
		 */
		publicPort: string;
	}
	export interface UpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBodyRulesFormProperties {

		/**
		 * `any` or `restricted`. Specify the right to make inbound connections on the specified ports or port ranges. If `restricted`, a list of allowed IPs is mandatory.
		 * Required
		 */
		access: FormControl<string | null | undefined>,

		/**
		 * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
		 * Required
		 */
		lanIp: FormControl<string | null | undefined>,

		/**
		 * A port or port ranges that will receive the forwarded traffic from the WAN
		 * Required
		 */
		localPort: FormControl<string | null | undefined>,

		/** A descriptive name for the rule */
		name: FormControl<string | null | undefined>,

		/**
		 * TCP or UDP
		 * Required
		 */
		protocol: FormControl<string | null | undefined>,

		/**
		 * A port or port ranges that will be forwarded to the host on the LAN
		 * Required
		 */
		publicPort: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBodyRulesFormGroup() {
		return new FormGroup<UpdateDeviceCellularGatewaySettingsPortForwardingRulesPutBodyRulesFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lanIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localPort: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publicPort: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CycleDeviceSwitchPortsPostBody {

		/**
		 * List of switch ports. Example: [1, 2-5, 1_MA-MOD-8X10G_1, 1_MA-MOD-8X10G_2-1_MA-MOD-8X10G_8]
		 * Required
		 */
		ports: Array<string>;
	}
	export interface CycleDeviceSwitchPortsPostBodyFormProperties {
	}
	export function CreateCycleDeviceSwitchPortsPostBodyFormGroup() {
		return new FormGroup<CycleDeviceSwitchPortsPostBodyFormProperties>({
		});

	}

	export interface UpdateDeviceWirelessBluetoothSettingsPutBody {

		/** Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		major?: number | null;

		/** Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		minor?: number | null;

		/** Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		uuid?: string | null;
	}
	export interface UpdateDeviceWirelessBluetoothSettingsPutBodyFormProperties {

		/** Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		major: FormControl<number | null | undefined>,

		/** Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		minor: FormControl<number | null | undefined>,

		/** Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceWirelessBluetoothSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateDeviceWirelessBluetoothSettingsPutBodyFormProperties>({
			major: new FormControl<number | null | undefined>(undefined),
			minor: new FormControl<number | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeviceWirelessBluetoothSettingsReturn {

		/** Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		major?: number | null;

		/** Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		minor?: number | null;

		/** Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		uuid?: string | null;
	}
	export interface UpdateDeviceWirelessBluetoothSettingsReturnFormProperties {

		/** Desired major value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		major: FormControl<number | null | undefined>,

		/** Desired minor value of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		minor: FormControl<number | null | undefined>,

		/** Desired UUID of the beacon. If the value is set to null it will reset to Dashboard's automatically generated value. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceWirelessBluetoothSettingsReturnFormGroup() {
		return new FormGroup<UpdateDeviceWirelessBluetoothSettingsReturnFormProperties>({
			major: new FormControl<number | null | undefined>(undefined),
			minor: new FormControl<number | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkPutBody {

		/** Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false) */
		disableMyMerakiCom?: boolean | null;

		/** Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false */
		disableRemoteStatusPage?: boolean | null;

		/** A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. */
		enrollmentString?: string | null;

		/** The name of the network */
		name?: string | null;

		/** A space-separated list of tags to be applied to the network */
		tags?: string | null;

		/** The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a> */
		timeZone?: string | null;
	}
	export interface UpdateNetworkPutBodyFormProperties {

		/** Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false) */
		disableMyMerakiCom: FormControl<boolean | null | undefined>,

		/** Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false */
		disableRemoteStatusPage: FormControl<boolean | null | undefined>,

		/** A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. */
		enrollmentString: FormControl<string | null | undefined>,

		/** The name of the network */
		name: FormControl<string | null | undefined>,

		/** A space-separated list of tags to be applied to the network */
		tags: FormControl<string | null | undefined>,

		/** The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a> */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkPutBodyFormProperties>({
			disableMyMerakiCom: new FormControl<boolean | null | undefined>(undefined),
			disableRemoteStatusPage: new FormControl<boolean | null | undefined>(undefined),
			enrollmentString: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkAlertSettingsPutBody {

		/** Alert-specific configuration for each type. Only alerts that pertain to the network can be updated. */
		UpdateNetworkAlertSettingsPutBodyAlerts?: Array<UpdateNetworkAlertSettingsPutBodyAlerts>;

		/** The network-wide destinations for all alerts on the network. */
		defaultDestinations?: UpdateNetworkAlertSettingsPutBodyDefaultDestinations;
	}
	export interface UpdateNetworkAlertSettingsPutBodyFormProperties {
	}
	export function CreateUpdateNetworkAlertSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkAlertSettingsPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkAlertSettingsPutBodyAlerts {

		/** A hash of destinations for this specific alert */
		alertDestinations?: UpdateNetworkAlertSettingsPutBodyAlertsAlertDestinations;

		/** A boolean depicting if the alert is turned on or off */
		enabled?: boolean | null;

		/** A hash of specific configuration data for the alert. Only filters specific to the alert will be updated. */
		filters?: string | null;

		/**
		 * The type of alert
		 * Required
		 */
		type: string;
	}
	export interface UpdateNetworkAlertSettingsPutBodyAlertsFormProperties {

		/** A boolean depicting if the alert is turned on or off */
		enabled: FormControl<boolean | null | undefined>,

		/** A hash of specific configuration data for the alert. Only filters specific to the alert will be updated. */
		filters: FormControl<string | null | undefined>,

		/**
		 * The type of alert
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkAlertSettingsPutBodyAlertsFormGroup() {
		return new FormGroup<UpdateNetworkAlertSettingsPutBodyAlertsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			filters: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkAlertSettingsPutBodyAlertsAlertDestinations {

		/** If true, then all network admins will receive emails for this alert */
		allAdmins?: boolean | null;

		/** A list of emails that will receive information about the alert */
		emails?: Array<string>;

		/** A list of HTTP server IDs to send a Webhook to for this alert */
		httpServerIds?: Array<string>;

		/** If true, then an SNMP trap will be sent for this alert if there is an SNMP trap server configured for this network */
		snmp?: boolean | null;
	}
	export interface UpdateNetworkAlertSettingsPutBodyAlertsAlertDestinationsFormProperties {

		/** If true, then all network admins will receive emails for this alert */
		allAdmins: FormControl<boolean | null | undefined>,

		/** If true, then an SNMP trap will be sent for this alert if there is an SNMP trap server configured for this network */
		snmp: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkAlertSettingsPutBodyAlertsAlertDestinationsFormGroup() {
		return new FormGroup<UpdateNetworkAlertSettingsPutBodyAlertsAlertDestinationsFormProperties>({
			allAdmins: new FormControl<boolean | null | undefined>(undefined),
			snmp: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkAlertSettingsPutBodyDefaultDestinations {

		/** If true, then all network admins will receive emails. */
		allAdmins?: boolean | null;

		/** A list of emails that will recieve the alert(s). */
		emails?: Array<string>;

		/** A list of HTTP server IDs to send a Webhook to */
		httpServerIds?: Array<string>;

		/** If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network. */
		snmp?: boolean | null;
	}
	export interface UpdateNetworkAlertSettingsPutBodyDefaultDestinationsFormProperties {

		/** If true, then all network admins will receive emails. */
		allAdmins: FormControl<boolean | null | undefined>,

		/** If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network. */
		snmp: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkAlertSettingsPutBodyDefaultDestinationsFormGroup() {
		return new FormGroup<UpdateNetworkAlertSettingsPutBodyDefaultDestinationsFormProperties>({
			allAdmins: new FormControl<boolean | null | undefined>(undefined),
			snmp: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkAppliancePortPutBody {

		/** The name of the policy. Only applicable to Access ports. Valid values are: 'open', '8021x-radius', 'mac-radius', 'hybris-radius' for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, 'open' is the only valid value and 'open' is the default value if the field is missing. */
		accessPolicy?: string | null;

		/** Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port. */
		allowedVlans?: string | null;

		/** Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true. */
		dropUntaggedTraffic?: boolean | null;

		/** The status of the port */
		enabled?: boolean | null;

		/** The type of the port: 'access' or 'trunk'. */
		type?: string | null;

		/** Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode. */
		vlan?: number | null;
	}
	export interface UpdateNetworkAppliancePortPutBodyFormProperties {

		/** The name of the policy. Only applicable to Access ports. Valid values are: 'open', '8021x-radius', 'mac-radius', 'hybris-radius' for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, 'open' is the only valid value and 'open' is the default value if the field is missing. */
		accessPolicy: FormControl<string | null | undefined>,

		/** Comma-delimited list of the VLAN ID's allowed on the port, or 'all' to permit all VLAN's on the port. */
		allowedVlans: FormControl<string | null | undefined>,

		/** Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true. */
		dropUntaggedTraffic: FormControl<boolean | null | undefined>,

		/** The status of the port */
		enabled: FormControl<boolean | null | undefined>,

		/** The type of the port: 'access' or 'trunk'. */
		type: FormControl<string | null | undefined>,

		/** Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode. */
		vlan: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkAppliancePortPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkAppliancePortPutBodyFormProperties>({
			accessPolicy: new FormControl<string | null | undefined>(undefined),
			allowedVlans: new FormControl<string | null | undefined>(undefined),
			dropUntaggedTraffic: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			vlan: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BindNetworkPostBody {

		/** Optional boolean indicating whether the network's switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model. */
		autoBind?: boolean | null;

		/**
		 * The ID of the template to which the network should be bound.
		 * Required
		 */
		configTemplateId: string;
	}
	export interface BindNetworkPostBodyFormProperties {

		/** Optional boolean indicating whether the network's switches should automatically bind to profiles of the same model. Defaults to false if left unspecified. This option only affects switch networks and switch templates. Auto-bind is not valid unless the switch template has at least one profile and has at most one profile per switch model. */
		autoBind: FormControl<boolean | null | undefined>,

		/**
		 * The ID of the template to which the network should be bound.
		 * Required
		 */
		configTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateBindNetworkPostBodyFormGroup() {
		return new FormGroup<BindNetworkPostBodyFormProperties>({
			autoBind: new FormControl<boolean | null | undefined>(undefined),
			configTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetNetworkBluetoothSettingsReturn {

		/** Whether APs will advertise beacons. */
		advertisingEnabled?: boolean | null;

		/** The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		major?: number | null;

		/** The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique') */
		majorMinorAssignmentMode?: string | null;

		/** The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		minor?: number | null;

		/** Whether APs will scan for Bluetooth enabled clients. */
		scanningEnabled?: boolean | null;

		/** The UUID to be used in the beacon identifier. */
		uuid?: string | null;
	}
	export interface GetNetworkBluetoothSettingsReturnFormProperties {

		/** Whether APs will advertise beacons. */
		advertisingEnabled: FormControl<boolean | null | undefined>,

		/** The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		major: FormControl<number | null | undefined>,

		/** The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique') */
		majorMinorAssignmentMode: FormControl<string | null | undefined>,

		/** The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		minor: FormControl<number | null | undefined>,

		/** Whether APs will scan for Bluetooth enabled clients. */
		scanningEnabled: FormControl<boolean | null | undefined>,

		/** The UUID to be used in the beacon identifier. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkBluetoothSettingsReturnFormGroup() {
		return new FormGroup<GetNetworkBluetoothSettingsReturnFormProperties>({
			advertisingEnabled: new FormControl<boolean | null | undefined>(undefined),
			major: new FormControl<number | null | undefined>(undefined),
			majorMinorAssignmentMode: new FormControl<string | null | undefined>(undefined),
			minor: new FormControl<number | null | undefined>(undefined),
			scanningEnabled: new FormControl<boolean | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkBluetoothSettingsPutBody {

		/** Whether APs will advertise beacons. */
		advertisingEnabled?: boolean | null;

		/** The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		major?: number | null;

		/** The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique') */
		majorMinorAssignmentMode?: UpdateNetworkBluetoothSettingsPutBodyMajorMinorAssignmentMode | null;

		/** The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		minor?: number | null;

		/** Whether APs will scan for Bluetooth enabled clients. */
		scanningEnabled?: boolean | null;

		/** The UUID to be used in the beacon identifier. */
		uuid?: string | null;
	}
	export interface UpdateNetworkBluetoothSettingsPutBodyFormProperties {

		/** Whether APs will advertise beacons. */
		advertisingEnabled: FormControl<boolean | null | undefined>,

		/** The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		major: FormControl<number | null | undefined>,

		/** The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique') */
		majorMinorAssignmentMode: FormControl<UpdateNetworkBluetoothSettingsPutBodyMajorMinorAssignmentMode | null | undefined>,

		/** The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		minor: FormControl<number | null | undefined>,

		/** Whether APs will scan for Bluetooth enabled clients. */
		scanningEnabled: FormControl<boolean | null | undefined>,

		/** The UUID to be used in the beacon identifier. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkBluetoothSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkBluetoothSettingsPutBodyFormProperties>({
			advertisingEnabled: new FormControl<boolean | null | undefined>(undefined),
			major: new FormControl<number | null | undefined>(undefined),
			majorMinorAssignmentMode: new FormControl<UpdateNetworkBluetoothSettingsPutBodyMajorMinorAssignmentMode | null | undefined>(undefined),
			minor: new FormControl<number | null | undefined>(undefined),
			scanningEnabled: new FormControl<boolean | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkBluetoothSettingsPutBodyMajorMinorAssignmentMode { 'Non-unique' = 'Non-unique', Unique = 'Unique' }

	export interface UpdateNetworkBluetoothSettingsReturn {

		/** Whether APs will advertise beacons. */
		advertisingEnabled?: boolean | null;

		/** The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		major?: number | null;

		/** The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique') */
		majorMinorAssignmentMode?: string | null;

		/** The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		minor?: number | null;

		/** Whether APs will scan for Bluetooth enabled clients. */
		scanningEnabled?: boolean | null;

		/** The UUID to be used in the beacon identifier. */
		uuid?: string | null;
	}
	export interface UpdateNetworkBluetoothSettingsReturnFormProperties {

		/** Whether APs will advertise beacons. */
		advertisingEnabled: FormControl<boolean | null | undefined>,

		/** The major number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		major: FormControl<number | null | undefined>,

		/** The way major and minor number should be assigned to nodes in the network. ('Unique', 'Non-unique') */
		majorMinorAssignmentMode: FormControl<string | null | undefined>,

		/** The minor number to be used in the beacon identifier. Only valid in 'Non-unique' mode. */
		minor: FormControl<number | null | undefined>,

		/** Whether APs will scan for Bluetooth enabled clients. */
		scanningEnabled: FormControl<boolean | null | undefined>,

		/** The UUID to be used in the beacon identifier. */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkBluetoothSettingsReturnFormGroup() {
		return new FormGroup<UpdateNetworkBluetoothSettingsReturnFormProperties>({
			advertisingEnabled: new FormControl<boolean | null | undefined>(undefined),
			major: new FormControl<number | null | undefined>(undefined),
			majorMinorAssignmentMode: new FormControl<string | null | undefined>(undefined),
			minor: new FormControl<number | null | undefined>(undefined),
			scanningEnabled: new FormControl<boolean | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkCameraQualityRetentionProfilePostBody {

		/** Whether or not to record audio. Can be either true or false. Defaults to false. */
		audioRecordingEnabled?: boolean | null;

		/** Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false. */
		cloudArchiveEnabled?: boolean | null;

		/** The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days. */
		maxRetentionDays?: number | null;

		/** Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. */
		motionBasedRetentionEnabled?: boolean | null;

		/** The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2. */
		motionDetectorVersion?: number | null;

		/**
		 * The name of the new profile. Must be unique. This parameter is required.
		 * Required
		 */
		name: string;

		/** Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. */
		restrictedBandwidthModeEnabled?: boolean | null;

		/** Schedule for which this camera will record video, or 'null' to always record. */
		scheduleId?: string | null;

		/** Video quality and resolution settings for all the camera models. */
		videoSettings?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyFormProperties {

		/** Whether or not to record audio. Can be either true or false. Defaults to false. */
		audioRecordingEnabled: FormControl<boolean | null | undefined>,

		/** Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false. */
		cloudArchiveEnabled: FormControl<boolean | null | undefined>,

		/** The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days. */
		maxRetentionDays: FormControl<number | null | undefined>,

		/** Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. */
		motionBasedRetentionEnabled: FormControl<boolean | null | undefined>,

		/** The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2. */
		motionDetectorVersion: FormControl<number | null | undefined>,

		/**
		 * The name of the new profile. Must be unique. This parameter is required.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. */
		restrictedBandwidthModeEnabled: FormControl<boolean | null | undefined>,

		/** Schedule for which this camera will record video, or 'null' to always record. */
		scheduleId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyFormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyFormProperties>({
			audioRecordingEnabled: new FormControl<boolean | null | undefined>(undefined),
			cloudArchiveEnabled: new FormControl<boolean | null | undefined>(undefined),
			maxRetentionDays: new FormControl<number | null | undefined>(undefined),
			motionBasedRetentionEnabled: new FormControl<boolean | null | undefined>(undefined),
			motionDetectorVersion: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			restrictedBandwidthModeEnabled: new FormControl<boolean | null | undefined>(undefined),
			scheduleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings {

		/** Quality and resolution for MV12/MV22/MV72 camera models. */
		'MV12/MV22/MV72'?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_;

		/** Quality and resolution for MV12WE camera models. */
		MV12WE?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV12WE;

		/** Quality and resolution for MV13 camera models. */
		MV13?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13;

		/** Quality and resolution for MV21/MV71 camera models. */
		'MV21/MV71'?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_;

		/** Quality and resolution for MV22X/MV72X camera models. */
		'MV22X/MV72X'?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_;

		/** Quality and resolution for MV32 camera models. */
		MV32?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32;

		/** Quality and resolution for MV33 camera models. */
		MV33?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33;

		/** Quality and resolution for MV52 camera models. */
		MV52?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52;

		/** Quality and resolution for MV63 camera models. */
		MV63?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63;

		/** Quality and resolution for MV63X camera models. */
		MV63X?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63X;

		/** Quality and resolution for MV93 camera models. */
		MV93?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93;

		/** Quality and resolution for MV93X camera models. */
		MV93X?: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93X;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsFormProperties {
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsFormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsFormProperties>({
		});

	}

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_ {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_FormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality { Enhanced = 'Enhanced', High = 'High', Standard = 'Standard' }

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution { '1280x720' = '1280x720', '1920x1080' = '1920x1080' }

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV12WE {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV12WEFormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV12WEFormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV12WEFormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2688x1512'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2688x1512'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13FormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13Resolution { '1080x1080' = '1080x1080', '2688x1512' = '2688x1512' }

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_ {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_FormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_Resolution { '1280x720' = '1280x720' }

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_ {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_FormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_Resolution { '1280x720' = '1280x720', '1920x1080' = '1920x1080', '2688x1512' = '2688x1512' }

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32FormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32Resolution { '1080x1080' = '1080x1080', '2058x2058' = '2058x2058' }

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33FormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution { '1080x1080' = '1080x1080', '2112x2112' = '2112x2112' }

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720', '1920x1080', '2688x1512' or '3840x2160'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720', '1920x1080', '2688x1512' or '3840x2160'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52FormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52Resolution { '1280x720' = '1280x720', '1920x1080' = '1920x1080', '2688x1512' = '2688x1512', '3840x2160' = '3840x2160' }

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1920x1080' or '2688x1512'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1920x1080' or '2688x1512'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63FormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63Resolution { '1920x1080' = '1920x1080', '2688x1512' = '2688x1512' }

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63X {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1920x1080', '2688x1512' or '3840x2160'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XResolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XFormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1920x1080', '2688x1512' or '3840x2160'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XResolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XFormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XFormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XResolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XResolution { '1920x1080' = '1920x1080', '2688x1512' = '2688x1512', '3840x2160' = '3840x2160' }

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93FormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93X {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080', '2112x2112' or '2880x2880'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XResolution;
	}
	export interface CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XFormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080', '2112x2112' or '2880x2880'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XResolution | null | undefined>,
	}
	export function CreateCreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XFormGroup() {
		return new FormGroup<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XFormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XResolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XResolution { '1080x1080' = '1080x1080', '2112x2112' = '2112x2112', '2880x2880' = '2880x2880' }

	export interface UpdateNetworkCameraQualityRetentionProfilePutBody {

		/** Whether or not to record audio. Can be either true or false. Defaults to false. */
		audioRecordingEnabled?: boolean | null;

		/** Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false. */
		cloudArchiveEnabled?: boolean | null;

		/** The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days. */
		maxRetentionDays?: number | null;

		/** Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. */
		motionBasedRetentionEnabled?: boolean | null;

		/** The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2. */
		motionDetectorVersion?: number | null;

		/** The name of the new profile. Must be unique. */
		name?: string | null;

		/** Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. */
		restrictedBandwidthModeEnabled?: boolean | null;

		/** Schedule for which this camera will record video, or 'null' to always record. */
		scheduleId?: string | null;

		/** Video quality and resolution settings for all the camera models. */
		videoSettings?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyFormProperties {

		/** Whether or not to record audio. Can be either true or false. Defaults to false. */
		audioRecordingEnabled: FormControl<boolean | null | undefined>,

		/** Create redundant video backup using Cloud Archive. Can be either true or false. Defaults to false. */
		cloudArchiveEnabled: FormControl<boolean | null | undefined>,

		/** The maximum number of days for which the data will be stored, or 'null' to keep data until storage space runs out. If the former, it can be one of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 30, 60, 90] days. */
		maxRetentionDays: FormControl<number | null | undefined>,

		/** Deletes footage older than 3 days in which no motion was detected. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. */
		motionBasedRetentionEnabled: FormControl<boolean | null | undefined>,

		/** The version of the motion detector that will be used by the camera. Only applies to Gen 2 cameras. Defaults to v2. */
		motionDetectorVersion: FormControl<number | null | undefined>,

		/** The name of the new profile. Must be unique. */
		name: FormControl<string | null | undefined>,

		/** Disable features that require additional bandwidth such as Motion Recap. Can be either true or false. Defaults to false. This setting does not apply to MV2 cameras. */
		restrictedBandwidthModeEnabled: FormControl<boolean | null | undefined>,

		/** Schedule for which this camera will record video, or 'null' to always record. */
		scheduleId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyFormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyFormProperties>({
			audioRecordingEnabled: new FormControl<boolean | null | undefined>(undefined),
			cloudArchiveEnabled: new FormControl<boolean | null | undefined>(undefined),
			maxRetentionDays: new FormControl<number | null | undefined>(undefined),
			motionBasedRetentionEnabled: new FormControl<boolean | null | undefined>(undefined),
			motionDetectorVersion: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			restrictedBandwidthModeEnabled: new FormControl<boolean | null | undefined>(undefined),
			scheduleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings {

		/** Quality and resolution for MV12/MV22/MV72 camera models. */
		'MV12/MV22/MV72'?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV12SlashMV22SlashMV72_;

		/** Quality and resolution for MV12WE camera models. */
		MV12WE?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV12WE;

		/** Quality and resolution for MV13 camera models. */
		MV13?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV13;

		/** Quality and resolution for MV21/MV71 camera models. */
		'MV21/MV71'?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV21SlashMV71_;

		/** Quality and resolution for MV22X/MV72X camera models. */
		'MV22X/MV72X'?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV22XSlashMV72X_;

		/** Quality and resolution for MV32 camera models. */
		MV32?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV32;

		/** Quality and resolution for MV33 camera models. */
		MV33?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV33;

		/** Quality and resolution for MV52 camera models. */
		MV52?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV52;

		/** Quality and resolution for MV63 camera models. */
		MV63?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63;

		/** Quality and resolution for MV63X camera models. */
		MV63X?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63X;

		/** Quality and resolution for MV93 camera models. */
		MV93?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93;

		/** Quality and resolution for MV93X camera models. */
		MV93X?: UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93X;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsFormProperties {
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsFormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsFormProperties>({
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV12SlashMV22SlashMV72_ {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV12SlashMV22SlashMV72_FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV12SlashMV22SlashMV72_FormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV12SlashMV22SlashMV72_FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV12WE {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV12WEFormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720' or '1920x1080'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV12WEFormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV12WEFormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV13 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2688x1512'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV13FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2688x1512'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV13FormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV13FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV13Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV21SlashMV71_ {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV21SlashMV71_FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV21SlashMV71_FormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV21SlashMV71_FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV21SlashMV71_Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV22XSlashMV72X_ {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV22XSlashMV72X_FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720', '1920x1080' or '2688x1512'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV22XSlashMV72X_FormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettings_MV22XSlashMV72X_FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV22XSlashMV72X_Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV32 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV32FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2058x2058'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV32FormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV32FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV32Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV33 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV33FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV33FormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV33FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV52 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1280x720', '1920x1080', '2688x1512' or '3840x2160'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV52FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1280x720', '1920x1080', '2688x1512' or '3840x2160'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV52FormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV52FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV52Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1920x1080' or '2688x1512'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1920x1080' or '2688x1512'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63FormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63X {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1920x1080', '2688x1512' or '3840x2160'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XResolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63XFormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1920x1080', '2688x1512' or '3840x2160'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XResolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63XFormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV63XFormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV63XResolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93 {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93FormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080' or '2112x2112'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93FormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93FormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV33Resolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93X {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality;

		/**
		 * Resolution of the camera. Can be one of '1080x1080', '2112x2112' or '2880x2880'.
		 * Required
		 */
		resolution: CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XResolution;
	}
	export interface UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93XFormProperties {

		/**
		 * Quality of the camera. Can be one of 'Standard', 'Enhanced' or 'High'.
		 * Required
		 */
		quality: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>,

		/**
		 * Resolution of the camera. Can be one of '1080x1080', '2112x2112' or '2880x2880'.
		 * Required
		 */
		resolution: FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XResolution | null | undefined>,
	}
	export function CreateUpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93XFormGroup() {
		return new FormGroup<UpdateNetworkCameraQualityRetentionProfilePutBodyVideoSettingsMV93XFormProperties>({
			quality: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettings_MV12SlashMV22SlashMV72_Quality | null | undefined>(undefined, [Validators.required]),
			resolution: new FormControl<CreateNetworkCameraQualityRetentionProfilePostBodyVideoSettingsMV93XResolution | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateNetworkCameraSnapshotPostBody {

		/** [optional] If set to "true" the snapshot will be taken at full sensor resolution. This will error if used with timestamp. */
		fullframe?: boolean | null;

		/** [optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time. */
		timestamp?: Date | null;
	}
	export interface GenerateNetworkCameraSnapshotPostBodyFormProperties {

		/** [optional] If set to "true" the snapshot will be taken at full sensor resolution. This will error if used with timestamp. */
		fullframe: FormControl<boolean | null | undefined>,

		/** [optional] The snapshot will be taken from this time on the camera. The timestamp is expected to be in ISO 8601 format. If no timestamp is specified, we will assume current time. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGenerateNetworkCameraSnapshotPostBodyFormGroup() {
		return new FormGroup<GenerateNetworkCameraSnapshotPostBodyFormProperties>({
			fullframe: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkCellularFirewallRulesPutBody {

		/** An ordered array of the firewall rules (not including the default rule) */
		UpdateNetworkCellularFirewallRulesPutBodyRules?: Array<UpdateNetworkCellularFirewallRulesPutBodyRules>;
	}
	export interface UpdateNetworkCellularFirewallRulesPutBodyFormProperties {
	}
	export function CreateUpdateNetworkCellularFirewallRulesPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkCellularFirewallRulesPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkCellularFirewallRulesPutBodyRules {

		/** Description of the rule (optional) */
		comment?: string | null;

		/**
		 * Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
		 * Required
		 */
		destCidr: string;

		/** Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any' */
		destPort?: string | null;

		/**
		 * 'allow' or 'deny' traffic specified by this rule
		 * Required
		 */
		policy: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy;

		/**
		 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
		 * Required
		 */
		protocol: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol;

		/**
		 * Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
		 * Required
		 */
		srcCidr: string;

		/** Comma-separated list of source port(s) (integer in the range 1-65535), or 'any' */
		srcPort?: string | null;

		/** Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional) */
		syslogEnabled?: boolean | null;
	}
	export interface UpdateNetworkCellularFirewallRulesPutBodyRulesFormProperties {

		/** Description of the rule (optional) */
		comment: FormControl<string | null | undefined>,

		/**
		 * Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
		 * Required
		 */
		destCidr: FormControl<string | null | undefined>,

		/** Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any' */
		destPort: FormControl<string | null | undefined>,

		/**
		 * 'allow' or 'deny' traffic specified by this rule
		 * Required
		 */
		policy: FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy | null | undefined>,

		/**
		 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
		 * Required
		 */
		protocol: FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol | null | undefined>,

		/**
		 * Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
		 * Required
		 */
		srcCidr: FormControl<string | null | undefined>,

		/** Comma-separated list of source port(s) (integer in the range 1-65535), or 'any' */
		srcPort: FormControl<string | null | undefined>,

		/** Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional) */
		syslogEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkCellularFirewallRulesPutBodyRulesFormGroup() {
		return new FormGroup<UpdateNetworkCellularFirewallRulesPutBodyRulesFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			destCidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destPort: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol | null | undefined>(undefined, [Validators.required]),
			srcCidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			srcPort: new FormControl<string | null | undefined>(undefined),
			syslogEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetNetworkClientsReturn {

		/** Short description of the client */
		description?: string | null;

		/** Timestamp client was first seen in the network */
		firstSeen?: number | null;

		/** 802.1x group policy of the client */
		groupPolicy8021x?: string | null;

		/** The ID of the client */
		id?: string | null;

		/** The IP address of the client */
		ip?: string | null;

		/** The IPv6 address of the client */
		ip6?: string | null;

		/** Local IPv6 address of the client */
		ip6Local?: string | null;

		/** Timestamp client was last seen in the network */
		lastSeen?: number | null;

		/** The MAC address of the client */
		mac?: string | null;

		/** Manufacturer of the client */
		manufacturer?: string | null;

		/** Notes on the client */
		notes?: string | null;

		/** The operating system of the client */
		os?: string | null;

		/** The MAC address of the node that the device was last connected to */
		recentDeviceMac?: string | null;

		/** The name of the node the device was last connected to */
		recentDeviceName?: string | null;

		/** The serial of the node the device was last connected to */
		recentDeviceSerial?: string | null;

		/** Status of SM for the client */
		smInstalled?: boolean | null;

		/** The name of the SSID that the client is connected to */
		ssid?: string | null;

		/** The connection status of the client */
		status?: GetNetworkClientsReturnStatus | null;

		/** The switch port that the client is connected to */
		switchport?: string | null;

		/** Usage, sent and received */
		usage?: GetNetworkClientsReturnUsage;

		/** The username of the user of the client */
		user?: string | null;

		/** The name of the VLAN that the client is connected to */
		vlan?: string | null;
	}
	export interface GetNetworkClientsReturnFormProperties {

		/** Short description of the client */
		description: FormControl<string | null | undefined>,

		/** Timestamp client was first seen in the network */
		firstSeen: FormControl<number | null | undefined>,

		/** 802.1x group policy of the client */
		groupPolicy8021x: FormControl<string | null | undefined>,

		/** The ID of the client */
		id: FormControl<string | null | undefined>,

		/** The IP address of the client */
		ip: FormControl<string | null | undefined>,

		/** The IPv6 address of the client */
		ip6: FormControl<string | null | undefined>,

		/** Local IPv6 address of the client */
		ip6Local: FormControl<string | null | undefined>,

		/** Timestamp client was last seen in the network */
		lastSeen: FormControl<number | null | undefined>,

		/** The MAC address of the client */
		mac: FormControl<string | null | undefined>,

		/** Manufacturer of the client */
		manufacturer: FormControl<string | null | undefined>,

		/** Notes on the client */
		notes: FormControl<string | null | undefined>,

		/** The operating system of the client */
		os: FormControl<string | null | undefined>,

		/** The MAC address of the node that the device was last connected to */
		recentDeviceMac: FormControl<string | null | undefined>,

		/** The name of the node the device was last connected to */
		recentDeviceName: FormControl<string | null | undefined>,

		/** The serial of the node the device was last connected to */
		recentDeviceSerial: FormControl<string | null | undefined>,

		/** Status of SM for the client */
		smInstalled: FormControl<boolean | null | undefined>,

		/** The name of the SSID that the client is connected to */
		ssid: FormControl<string | null | undefined>,

		/** The connection status of the client */
		status: FormControl<GetNetworkClientsReturnStatus | null | undefined>,

		/** The switch port that the client is connected to */
		switchport: FormControl<string | null | undefined>,

		/** The username of the user of the client */
		user: FormControl<string | null | undefined>,

		/** The name of the VLAN that the client is connected to */
		vlan: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkClientsReturnFormGroup() {
		return new FormGroup<GetNetworkClientsReturnFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			firstSeen: new FormControl<number | null | undefined>(undefined),
			groupPolicy8021x: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			ip6: new FormControl<string | null | undefined>(undefined),
			ip6Local: new FormControl<string | null | undefined>(undefined),
			lastSeen: new FormControl<number | null | undefined>(undefined),
			mac: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			recentDeviceMac: new FormControl<string | null | undefined>(undefined),
			recentDeviceName: new FormControl<string | null | undefined>(undefined),
			recentDeviceSerial: new FormControl<string | null | undefined>(undefined),
			smInstalled: new FormControl<boolean | null | undefined>(undefined),
			ssid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GetNetworkClientsReturnStatus | null | undefined>(undefined),
			switchport: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			vlan: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetNetworkClientsReturnStatus { Offline = 'Offline', Online = 'Online' }

	export interface GetNetworkClientsReturnUsage {

		/** Usage received by the client */
		recv?: number | null;

		/** Usage sent by the client */
		sent?: number | null;
	}
	export interface GetNetworkClientsReturnUsageFormProperties {

		/** Usage received by the client */
		recv: FormControl<number | null | undefined>,

		/** Usage sent by the client */
		sent: FormControl<number | null | undefined>,
	}
	export function CreateGetNetworkClientsReturnUsageFormGroup() {
		return new FormGroup<GetNetworkClientsReturnUsageFormProperties>({
			recv: new FormControl<number | null | undefined>(undefined),
			sent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GetNetworkClientsConnectionStatsBand { _2_4 = '2.4', _5 = '5' }

	export interface ProvisionNetworkClientsPostBody {

		/**
		 * The policy to apply to the specified client. Can be 'Group policy', 'Whitelisted', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyDevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;

		/**
		 * The MAC address of the client. Required.
		 * Required
		 */
		mac: string;

		/** The display name for the client. Optional. Limited to 255 bytes. */
		name?: string | null;

		/** An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network) */
		policiesBySecurityAppliance?: ProvisionNetworkClientsPostBodyPoliciesBySecurityAppliance;

		/** An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy */
		policiesBySsid?: ProvisionNetworkClientsPostBodyPoliciesBySsid;
	}
	export interface ProvisionNetworkClientsPostBodyFormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Group policy', 'Whitelisted', 'Allowed', 'Blocked', 'Per connection' or 'Normal'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyDevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,

		/**
		 * The MAC address of the client. Required.
		 * Required
		 */
		mac: FormControl<string | null | undefined>,

		/** The display name for the client. Optional. Limited to 255 bytes. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyFormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyFormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyDevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
			mac: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProvisionNetworkClientsPostBodyDevicePolicy { Allowed = 'Allowed', Blocked = 'Blocked', 'Group policy' = 'Group policy', Normal = 'Normal', 'Per connection' = 'Per connection', Whitelisted = 'Whitelisted' }

	export interface ProvisionNetworkClientsPostBodyPoliciesBySecurityAppliance {

		/** The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked' or 'Normal'. Required. */
		devicePolicy?: ProvisionNetworkClientsPostBodyPoliciesBySecurityApplianceDevicePolicy | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySecurityApplianceFormProperties {

		/** The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked' or 'Normal'. Required. */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySecurityApplianceDevicePolicy | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySecurityApplianceFormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySecurityApplianceFormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySecurityApplianceDevicePolicy | null | undefined>(undefined),
		});

	}

	export enum ProvisionNetworkClientsPostBodyPoliciesBySecurityApplianceDevicePolicy { Blocked = 'Blocked', Normal = 'Normal', Whitelisted = 'Whitelisted' }

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid {

		/** The number for the SSID */
		'0'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_;

		/** The number for the SSID */
		'1'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_1_;

		/** The number for the SSID */
		'2'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_2_;

		/** The number for the SSID */
		'3'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_3_;

		/** The number for the SSID */
		'4'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_4_;

		/** The number for the SSID */
		'5'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_5_;

		/** The number for the SSID */
		'6'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_6_;

		/** The number for the SSID */
		'7'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_7_;

		/** The number for the SSID */
		'8'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_8_;

		/** The number for the SSID */
		'9'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_9_;

		/** The number for the SSID */
		'10'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_10_;

		/** The number for the SSID */
		'11'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_11_;

		/** The number for the SSID */
		'12'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_12_;

		/** The number for the SSID */
		'13'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_13_;

		/** The number for the SSID */
		'14'?: ProvisionNetworkClientsPostBodyPoliciesBySsid_14_;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsidFormProperties {
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsidFormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsidFormProperties>({
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_0_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_0_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_0_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy { Blocked = 'Blocked', 'Group policy' = 'Group policy', Normal = 'Normal', Whitelisted = 'Whitelisted' }

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_1_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_1_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_1_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_1_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_2_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_2_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_2_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_2_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_3_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_3_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_3_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_3_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_4_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_4_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_4_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_4_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_5_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_5_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_5_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_5_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_6_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_6_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_6_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_6_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_7_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_7_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_7_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_7_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_8_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_8_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_8_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_8_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_9_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_9_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_9_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_9_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_10_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_10_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_10_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_10_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_11_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_11_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_11_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_11_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_12_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_12_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_12_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_12_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_13_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_13_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_13_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_13_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_14_ {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy;

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId?: string | null;
	}
	export interface ProvisionNetworkClientsPostBodyPoliciesBySsid_14_FormProperties {

		/**
		 * The policy to apply to the specified client. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>,

		/** The ID of the desired group policy to apply to the client. Required if 'devicePolicy' is set to "Group policy". Otherwise this is ignored. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateProvisionNetworkClientsPostBodyPoliciesBySsid_14_FormGroup() {
		return new FormGroup<ProvisionNetworkClientsPostBodyPoliciesBySsid_14_FormProperties>({
			devicePolicy: new FormControl<ProvisionNetworkClientsPostBodyPoliciesBySsid_0_DevicePolicy | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientPolicyPutBody {

		/**
		 * The policy to assign. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: string;

		/** [optional] If 'devicePolicy' is set to 'Group policy' this param is used to specify the group policy ID. */
		groupPolicyId?: string | null;
	}
	export interface UpdateNetworkClientPolicyPutBodyFormProperties {

		/**
		 * The policy to assign. Can be 'Whitelisted', 'Blocked', 'Normal' or 'Group policy'. Required.
		 * Required
		 */
		devicePolicy: FormControl<string | null | undefined>,

		/** [optional] If 'devicePolicy' is set to 'Group policy' this param is used to specify the group policy ID. */
		groupPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkClientPolicyPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkClientPolicyPutBodyFormProperties>({
			devicePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBody {

		/**
		 * The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs
		 * Required
		 */
		ssids: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodyFormProperties {
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids {

		/** Splash authorization for SSID 0 */
		'0'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_0_;

		/** Splash authorization for SSID 1 */
		'1'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_1_;

		/** Splash authorization for SSID 2 */
		'2'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_2_;

		/** Splash authorization for SSID 3 */
		'3'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_3_;

		/** Splash authorization for SSID 4 */
		'4'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_4_;

		/** Splash authorization for SSID 5 */
		'5'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_5_;

		/** Splash authorization for SSID 6 */
		'6'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_6_;

		/** Splash authorization for SSID 7 */
		'7'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_7_;

		/** Splash authorization for SSID 8 */
		'8'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_8_;

		/** Splash authorization for SSID 9 */
		'9'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_9_;

		/** Splash authorization for SSID 10 */
		'10'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_10_;

		/** Splash authorization for SSID 11 */
		'11'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_11_;

		/** Splash authorization for SSID 12 */
		'12'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_12_;

		/** Splash authorization for SSID 13 */
		'13'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_13_;

		/** Splash authorization for SSID 14 */
		'14'?: UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_14_;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsidsFormProperties {
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsidsFormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsidsFormProperties>({
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_0_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_0_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_0_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_0_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_1_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_1_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_1_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_1_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_2_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_2_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_2_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_2_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_3_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_3_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_3_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_3_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_4_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_4_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_4_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_4_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_5_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_5_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_5_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_5_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_6_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_6_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_6_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_6_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_7_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_7_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_7_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_7_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_8_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_8_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_8_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_8_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_9_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_9_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_9_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_9_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_10_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_10_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_10_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_10_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_11_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_11_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_11_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_11_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_12_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_12_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_12_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_12_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_13_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_13_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_13_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_13_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_14_ {

		/** New authorization status for the SSID (true, false). */
		isAuthorized?: boolean | null;
	}
	export interface UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_14_FormProperties {

		/** New authorization status for the SSID (true, false). */
		isAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkClientSplashAuthorizationStatusPutBodySsids_14_FormGroup() {
		return new FormGroup<UpdateNetworkClientSplashAuthorizationStatusPutBodySsids_14_FormProperties>({
			isAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkContentFilteringPutBody {

		/** A list of URL patterns that are allowed */
		allowedUrlPatterns?: Array<string>;

		/** A list of URL categories to block */
		blockedUrlCategories?: Array<string>;

		/** A list of URL patterns that are blocked */
		blockedUrlPatterns?: Array<string>;

		/** URL category list size which is either 'topSites' or 'fullList' */
		urlCategoryListSize?: UpdateNetworkContentFilteringPutBodyUrlCategoryListSize | null;
	}
	export interface UpdateNetworkContentFilteringPutBodyFormProperties {

		/** URL category list size which is either 'topSites' or 'fullList' */
		urlCategoryListSize: FormControl<UpdateNetworkContentFilteringPutBodyUrlCategoryListSize | null | undefined>,
	}
	export function CreateUpdateNetworkContentFilteringPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkContentFilteringPutBodyFormProperties>({
			urlCategoryListSize: new FormControl<UpdateNetworkContentFilteringPutBodyUrlCategoryListSize | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkContentFilteringPutBodyUrlCategoryListSize { fullList = 'fullList', topSites = 'topSites' }

	export interface ClaimNetworkDevicesPostBody {

		/** [DEPRECATED] The serial of a device to claim */
		serial?: string | null;

		/** A list of serials of devices to claim */
		serials?: Array<string>;
	}
	export interface ClaimNetworkDevicesPostBodyFormProperties {

		/** [DEPRECATED] The serial of a device to claim */
		serial: FormControl<string | null | undefined>,
	}
	export function CreateClaimNetworkDevicesPostBodyFormGroup() {
		return new FormGroup<ClaimNetworkDevicesPostBodyFormProperties>({
			serial: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkDevicePutBody {

		/** The address of a device */
		address?: string | null;

		/** The floor plan to associate to this device. null disassociates the device from the floorplan. */
		floorPlanId?: string | null;

		/** The latitude of a device */
		lat?: number | null;

		/** The longitude of a device */
		lng?: number | null;

		/** Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified. */
		moveMapMarker?: boolean | null;

		/** The name of a device */
		name?: string | null;

		/** The notes for the device. String. Limited to 255 characters. */
		notes?: string | null;

		/** The ID of a switch profile to bind to the device (for available switch profiles, see the 'Switch Profiles' endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch profile, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template. */
		switchProfileId?: string | null;

		/** The tags of a device */
		tags?: string | null;
	}
	export interface UpdateNetworkDevicePutBodyFormProperties {

		/** The address of a device */
		address: FormControl<string | null | undefined>,

		/** The floor plan to associate to this device. null disassociates the device from the floorplan. */
		floorPlanId: FormControl<string | null | undefined>,

		/** The latitude of a device */
		lat: FormControl<number | null | undefined>,

		/** The longitude of a device */
		lng: FormControl<number | null | undefined>,

		/** Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified. */
		moveMapMarker: FormControl<boolean | null | undefined>,

		/** The name of a device */
		name: FormControl<string | null | undefined>,

		/** The notes for the device. String. Limited to 255 characters. */
		notes: FormControl<string | null | undefined>,

		/** The ID of a switch profile to bind to the device (for available switch profiles, see the 'Switch Profiles' endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch profile, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template. */
		switchProfileId: FormControl<string | null | undefined>,

		/** The tags of a device */
		tags: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkDevicePutBodyFormGroup() {
		return new FormGroup<UpdateNetworkDevicePutBodyFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			floorPlanId: new FormControl<string | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
			moveMapMarker: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			switchProfileId: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetNetworkDeviceLossAndLatencyHistoryUplink { cellular = 'cellular', wan1 = 'wan1', wan2 = 'wan2' }

	export interface CreateNetworkFloorPlanPostBody {

		/** The longitude and latitude of the bottom left corner of your floor plan. */
		bottomLeftCorner?: CreateNetworkFloorPlanPostBodyBottomLeftCorner;

		/** The longitude and latitude of the bottom right corner of your floor plan. */
		bottomRightCorner?: CreateNetworkFloorPlanPostBodyBottomRightCorner;

		/** The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair. */
		center?: CreateNetworkFloorPlanPostBodyCenter;

		/**
		 * The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.
		 * Required
		 */
		imageContents: string;

		/**
		 * The name of your floor plan.
		 * Required
		 */
		name: string;

		/** The longitude and latitude of the top left corner of your floor plan. */
		topLeftCorner?: CreateNetworkFloorPlanPostBodyTopLeftCorner;

		/** The longitude and latitude of the top right corner of your floor plan. */
		topRightCorner?: CreateNetworkFloorPlanPostBodyTopRightCorner;
	}
	export interface CreateNetworkFloorPlanPostBodyFormProperties {

		/**
		 * The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.
		 * Required
		 */
		imageContents: FormControl<string | null | undefined>,

		/**
		 * The name of your floor plan.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkFloorPlanPostBodyFormGroup() {
		return new FormGroup<CreateNetworkFloorPlanPostBodyFormProperties>({
			imageContents: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkFloorPlanPostBodyBottomLeftCorner {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface CreateNetworkFloorPlanPostBodyBottomLeftCornerFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateCreateNetworkFloorPlanPostBodyBottomLeftCornerFormGroup() {
		return new FormGroup<CreateNetworkFloorPlanPostBodyBottomLeftCornerFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkFloorPlanPostBodyBottomRightCorner {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface CreateNetworkFloorPlanPostBodyBottomRightCornerFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateCreateNetworkFloorPlanPostBodyBottomRightCornerFormGroup() {
		return new FormGroup<CreateNetworkFloorPlanPostBodyBottomRightCornerFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkFloorPlanPostBodyCenter {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface CreateNetworkFloorPlanPostBodyCenterFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateCreateNetworkFloorPlanPostBodyCenterFormGroup() {
		return new FormGroup<CreateNetworkFloorPlanPostBodyCenterFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkFloorPlanPostBodyTopLeftCorner {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface CreateNetworkFloorPlanPostBodyTopLeftCornerFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateCreateNetworkFloorPlanPostBodyTopLeftCornerFormGroup() {
		return new FormGroup<CreateNetworkFloorPlanPostBodyTopLeftCornerFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkFloorPlanPostBodyTopRightCorner {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface CreateNetworkFloorPlanPostBodyTopRightCornerFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateCreateNetworkFloorPlanPostBodyTopRightCornerFormGroup() {
		return new FormGroup<CreateNetworkFloorPlanPostBodyTopRightCornerFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkFloorPlanPutBody {

		/** The longitude and latitude of the bottom left corner of your floor plan. */
		bottomLeftCorner?: UpdateNetworkFloorPlanPutBodyBottomLeftCorner;

		/** The longitude and latitude of the bottom right corner of your floor plan. */
		bottomRightCorner?: UpdateNetworkFloorPlanPutBodyBottomRightCorner;

		/** The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair. */
		center?: UpdateNetworkFloorPlanPutBodyCenter;

		/** The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields ('center, 'topLeftCorner', etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image. */
		imageContents?: string | null;

		/** The name of your floor plan. */
		name?: string | null;

		/** The longitude and latitude of the top left corner of your floor plan. */
		topLeftCorner?: UpdateNetworkFloorPlanPutBodyTopLeftCorner;

		/** The longitude and latitude of the top right corner of your floor plan. */
		topRightCorner?: UpdateNetworkFloorPlanPutBodyTopRightCorner;
	}
	export interface UpdateNetworkFloorPlanPutBodyFormProperties {

		/** The file contents (a base 64 encoded string) of your new image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in. If you upload a new image, and you do NOT specify any new geolocation fields ('center, 'topLeftCorner', etc), the floor plan will be recentered with no rotation in order to maintain the aspect ratio of your new image. */
		imageContents: FormControl<string | null | undefined>,

		/** The name of your floor plan. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkFloorPlanPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkFloorPlanPutBodyFormProperties>({
			imageContents: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkFloorPlanPutBodyBottomLeftCorner {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface UpdateNetworkFloorPlanPutBodyBottomLeftCornerFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkFloorPlanPutBodyBottomLeftCornerFormGroup() {
		return new FormGroup<UpdateNetworkFloorPlanPutBodyBottomLeftCornerFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkFloorPlanPutBodyBottomRightCorner {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface UpdateNetworkFloorPlanPutBodyBottomRightCornerFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkFloorPlanPutBodyBottomRightCornerFormGroup() {
		return new FormGroup<UpdateNetworkFloorPlanPutBodyBottomRightCornerFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkFloorPlanPutBodyCenter {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface UpdateNetworkFloorPlanPutBodyCenterFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkFloorPlanPutBodyCenterFormGroup() {
		return new FormGroup<UpdateNetworkFloorPlanPutBodyCenterFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkFloorPlanPutBodyTopLeftCorner {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface UpdateNetworkFloorPlanPutBodyTopLeftCornerFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkFloorPlanPutBodyTopLeftCornerFormGroup() {
		return new FormGroup<UpdateNetworkFloorPlanPutBodyTopLeftCornerFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkFloorPlanPutBodyTopRightCorner {

		/** Latitude */
		lat?: number | null;

		/** Longitude */
		lng?: number | null;
	}
	export interface UpdateNetworkFloorPlanPutBodyTopRightCornerFormProperties {

		/** Latitude */
		lat: FormControl<number | null | undefined>,

		/** Longitude */
		lng: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkFloorPlanPutBodyTopRightCornerFormGroup() {
		return new FormGroup<UpdateNetworkFloorPlanPutBodyTopRightCornerFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkL7FirewallRulesPutBody {

		/** An ordered array of the MX L7 firewall rules */
		UpdateNetworkL7FirewallRulesPutBodyRules?: Array<UpdateNetworkL7FirewallRulesPutBodyRules>;
	}
	export interface UpdateNetworkL7FirewallRulesPutBodyFormProperties {
	}
	export function CreateUpdateNetworkL7FirewallRulesPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkL7FirewallRulesPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkL7FirewallRulesPutBodyRules {

		/** 'Deny' traffic specified by this rule */
		policy?: UpdateNetworkL7FirewallRulesPutBodyRulesPolicy | null;

		/** Type of the L7 rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange' */
		type?: UpdateNetworkL7FirewallRulesPutBodyRulesType | null;

		/** The 'value' of what you want to block. Format of 'value' varies depending on type of the rule. The application categories and application ids can be retrieved from the the 'MX L7 application categories' endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format. */
		value?: string | null;
	}
	export interface UpdateNetworkL7FirewallRulesPutBodyRulesFormProperties {

		/** 'Deny' traffic specified by this rule */
		policy: FormControl<UpdateNetworkL7FirewallRulesPutBodyRulesPolicy | null | undefined>,

		/** Type of the L7 rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange' */
		type: FormControl<UpdateNetworkL7FirewallRulesPutBodyRulesType | null | undefined>,

		/** The 'value' of what you want to block. Format of 'value' varies depending on type of the rule. The application categories and application ids can be retrieved from the the 'MX L7 application categories' endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkL7FirewallRulesPutBodyRulesFormGroup() {
		return new FormGroup<UpdateNetworkL7FirewallRulesPutBodyRulesFormProperties>({
			policy: new FormControl<UpdateNetworkL7FirewallRulesPutBodyRulesPolicy | null | undefined>(undefined),
			type: new FormControl<UpdateNetworkL7FirewallRulesPutBodyRulesType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkL7FirewallRulesPutBodyRulesPolicy { deny = 'deny' }

	export enum UpdateNetworkL7FirewallRulesPutBodyRulesType { application = 'application', applicationCategory = 'applicationCategory', host = 'host', ipRange = 'ipRange', port = 'port' }

	export interface UpdateNetworkOneToManyNatRulesPutBody {

		/**
		 * An array of 1:Many nat rules
		 * Required
		 */
		UpdateNetworkOneToManyNatRulesPutBodyRules: Array<UpdateNetworkOneToManyNatRulesPutBodyRules>;
	}
	export interface UpdateNetworkOneToManyNatRulesPutBodyFormProperties {
	}
	export function CreateUpdateNetworkOneToManyNatRulesPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkOneToManyNatRulesPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkOneToManyNatRulesPutBodyRules {

		/**
		 * An array of associated forwarding rules
		 * Required
		 */
		UpdateNetworkOneToManyNatRulesPutBodyRulesPortRules: Array<UpdateNetworkOneToManyNatRulesPutBodyRulesPortRules>;

		/**
		 * The IP address that will be used to access the internal resource from the WAN
		 * Required
		 */
		publicIp: string;

		/**
		 * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
		 * Required
		 */
		uplink: UpdateNetworkOneToManyNatRulesPutBodyRulesUplink;
	}
	export interface UpdateNetworkOneToManyNatRulesPutBodyRulesFormProperties {

		/**
		 * The IP address that will be used to access the internal resource from the WAN
		 * Required
		 */
		publicIp: FormControl<string | null | undefined>,

		/**
		 * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
		 * Required
		 */
		uplink: FormControl<UpdateNetworkOneToManyNatRulesPutBodyRulesUplink | null | undefined>,
	}
	export function CreateUpdateNetworkOneToManyNatRulesPutBodyRulesFormGroup() {
		return new FormGroup<UpdateNetworkOneToManyNatRulesPutBodyRulesFormProperties>({
			publicIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uplink: new FormControl<UpdateNetworkOneToManyNatRulesPutBodyRulesUplink | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkOneToManyNatRulesPutBodyRulesPortRules {

		/** Remote IP addresses or ranges that are permitted to access the internal resource via this port forwarding rule, or 'any' */
		allowedIps?: Array<string>;

		/** Local IP address to which traffic will be forwarded */
		localIp?: string | null;

		/** Destination port of the forwarded traffic that will be sent from the MX to the specified host on the LAN. If you simply wish to forward the traffic without translating the port, this should be the same as the Public port */
		localPort?: string | null;

		/** A description of the rule */
		name?: string | null;

		/** 'tcp' or 'udp' */
		protocol?: UpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesProtocol | null;

		/** Destination port of the traffic that is arriving on the WAN */
		publicPort?: string | null;
	}
	export interface UpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesFormProperties {

		/** Local IP address to which traffic will be forwarded */
		localIp: FormControl<string | null | undefined>,

		/** Destination port of the forwarded traffic that will be sent from the MX to the specified host on the LAN. If you simply wish to forward the traffic without translating the port, this should be the same as the Public port */
		localPort: FormControl<string | null | undefined>,

		/** A description of the rule */
		name: FormControl<string | null | undefined>,

		/** 'tcp' or 'udp' */
		protocol: FormControl<UpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesProtocol | null | undefined>,

		/** Destination port of the traffic that is arriving on the WAN */
		publicPort: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesFormGroup() {
		return new FormGroup<UpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesFormProperties>({
			localIp: new FormControl<string | null | undefined>(undefined),
			localPort: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<UpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesProtocol | null | undefined>(undefined),
			publicPort: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesProtocol { tcp = 'tcp', udp = 'udp' }

	export enum UpdateNetworkOneToManyNatRulesPutBodyRulesUplink { internet1 = 'internet1', internet2 = 'internet2' }

	export interface UpdateNetworkOneToOneNatRulesPutBody {

		/**
		 * An array of 1:1 nat rules
		 * Required
		 */
		UpdateNetworkOneToOneNatRulesPutBodyRules: Array<UpdateNetworkOneToOneNatRulesPutBodyRules>;
	}
	export interface UpdateNetworkOneToOneNatRulesPutBodyFormProperties {
	}
	export function CreateUpdateNetworkOneToOneNatRulesPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkOneToOneNatRulesPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkOneToOneNatRulesPutBodyRules {

		/** The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource */
		UpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInbound?: Array<UpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInbound>;

		/**
		 * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
		 * Required
		 */
		lanIp: string;

		/** A descriptive name for the rule */
		name?: string | null;

		/** The IP address that will be used to access the internal resource from the WAN */
		publicIp?: string | null;

		/** The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2') */
		uplink?: UpdateNetworkOneToManyNatRulesPutBodyRulesUplink | null;
	}
	export interface UpdateNetworkOneToOneNatRulesPutBodyRulesFormProperties {

		/**
		 * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
		 * Required
		 */
		lanIp: FormControl<string | null | undefined>,

		/** A descriptive name for the rule */
		name: FormControl<string | null | undefined>,

		/** The IP address that will be used to access the internal resource from the WAN */
		publicIp: FormControl<string | null | undefined>,

		/** The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2') */
		uplink: FormControl<UpdateNetworkOneToManyNatRulesPutBodyRulesUplink | null | undefined>,
	}
	export function CreateUpdateNetworkOneToOneNatRulesPutBodyRulesFormGroup() {
		return new FormGroup<UpdateNetworkOneToOneNatRulesPutBodyRulesFormProperties>({
			lanIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			publicIp: new FormControl<string | null | undefined>(undefined),
			uplink: new FormControl<UpdateNetworkOneToManyNatRulesPutBodyRulesUplink | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInbound {

		/** An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or 'any' */
		allowedIps?: Array<string>;

		/** An array of ports or port ranges that will be forwarded to the host on the LAN */
		destinationPorts?: Array<string>;

		/** Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any' */
		protocol?: UpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInboundProtocol | null;
	}
	export interface UpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInboundFormProperties {

		/** Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any' */
		protocol: FormControl<UpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInboundProtocol | null | undefined>,
	}
	export function CreateUpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInboundFormGroup() {
		return new FormGroup<UpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInboundFormProperties>({
			protocol: new FormControl<UpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInboundProtocol | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkOneToOneNatRulesPutBodyRulesAllowedInboundProtocol { any = 'any', 'icmp-ping' = 'icmp-ping', tcp = 'tcp', udp = 'udp' }

	export interface CreateNetworkPiiRequestPostBody {

		/** The datasets related to the provided key that should be deleted. Only applies to "delete" requests. The value "all" will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user) */
		datasets?: Array<string>;

		/** The email of a network user account. Only applies to "delete" requests. */
		email?: string | null;

		/** The MAC of a network client device. Applies to both "restrict processing" and "delete" requests. */
		mac?: string | null;

		/** The sm_device_id of a Systems Manager device. The only way to "restrict processing" or "delete" a Systems Manager device. Must include "device" in the dataset for a "delete" request to destroy the device. */
		smDeviceId?: string | null;

		/** The sm_user_id of a Systems Manager user. The only way to "restrict processing" or "delete" a Systems Manager user. Must include "user" in the dataset for a "delete" request to destroy the user. */
		smUserId?: string | null;

		/** One of "delete" or "restrict processing" */
		type?: CreateNetworkPiiRequestPostBodyType | null;

		/** The username of a network log in. Only applies to "delete" requests. */
		username?: string | null;
	}
	export interface CreateNetworkPiiRequestPostBodyFormProperties {

		/** The email of a network user account. Only applies to "delete" requests. */
		email: FormControl<string | null | undefined>,

		/** The MAC of a network client device. Applies to both "restrict processing" and "delete" requests. */
		mac: FormControl<string | null | undefined>,

		/** The sm_device_id of a Systems Manager device. The only way to "restrict processing" or "delete" a Systems Manager device. Must include "device" in the dataset for a "delete" request to destroy the device. */
		smDeviceId: FormControl<string | null | undefined>,

		/** The sm_user_id of a Systems Manager user. The only way to "restrict processing" or "delete" a Systems Manager user. Must include "user" in the dataset for a "delete" request to destroy the user. */
		smUserId: FormControl<string | null | undefined>,

		/** One of "delete" or "restrict processing" */
		type: FormControl<CreateNetworkPiiRequestPostBodyType | null | undefined>,

		/** The username of a network log in. Only applies to "delete" requests. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkPiiRequestPostBodyFormGroup() {
		return new FormGroup<CreateNetworkPiiRequestPostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			mac: new FormControl<string | null | undefined>(undefined),
			smDeviceId: new FormControl<string | null | undefined>(undefined),
			smUserId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreateNetworkPiiRequestPostBodyType | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateNetworkPiiRequestPostBodyType { delete = 'delete', 'restrict processing' = 'restrict processing' }

	export interface UpdateNetworkPortForwardingRulesPutBody {

		/**
		 * An array of port forwarding params
		 * Required
		 */
		UpdateNetworkPortForwardingRulesPutBodyRules: Array<UpdateNetworkPortForwardingRulesPutBodyRules>;
	}
	export interface UpdateNetworkPortForwardingRulesPutBodyFormProperties {
	}
	export function CreateUpdateNetworkPortForwardingRulesPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkPortForwardingRulesPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkPortForwardingRulesPutBodyRules {

		/**
		 * An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges (or any)
		 * Required
		 */
		allowedIps: Array<string>;

		/**
		 * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
		 * Required
		 */
		lanIp: string;

		/**
		 * A port or port ranges that will receive the forwarded traffic from the WAN
		 * Required
		 */
		localPort: string;

		/** A descriptive name for the rule */
		name?: string | null;

		/**
		 * TCP or UDP
		 * Required
		 */
		protocol: UpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesProtocol;

		/**
		 * A port or port ranges that will be forwarded to the host on the LAN
		 * Required
		 */
		publicPort: string;

		/** The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2' or 'both') */
		uplink?: UpdateNetworkPortForwardingRulesPutBodyRulesUplink | null;
	}
	export interface UpdateNetworkPortForwardingRulesPutBodyRulesFormProperties {

		/**
		 * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
		 * Required
		 */
		lanIp: FormControl<string | null | undefined>,

		/**
		 * A port or port ranges that will receive the forwarded traffic from the WAN
		 * Required
		 */
		localPort: FormControl<string | null | undefined>,

		/** A descriptive name for the rule */
		name: FormControl<string | null | undefined>,

		/**
		 * TCP or UDP
		 * Required
		 */
		protocol: FormControl<UpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesProtocol | null | undefined>,

		/**
		 * A port or port ranges that will be forwarded to the host on the LAN
		 * Required
		 */
		publicPort: FormControl<string | null | undefined>,

		/** The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2' or 'both') */
		uplink: FormControl<UpdateNetworkPortForwardingRulesPutBodyRulesUplink | null | undefined>,
	}
	export function CreateUpdateNetworkPortForwardingRulesPutBodyRulesFormGroup() {
		return new FormGroup<UpdateNetworkPortForwardingRulesPutBodyRulesFormProperties>({
			lanIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			localPort: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<UpdateNetworkOneToManyNatRulesPutBodyRulesPortRulesProtocol | null | undefined>(undefined, [Validators.required]),
			publicPort: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uplink: new FormControl<UpdateNetworkPortForwardingRulesPutBodyRulesUplink | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkPortForwardingRulesPutBodyRulesUplink { both = 'both', internet1 = 'internet1', internet2 = 'internet2' }

	export interface UpdateNetworkSecurityIntrusionSettingsPutBody {

		/** Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved */
		idsRulesets?: UpdateNetworkSecurityIntrusionSettingsPutBodyIdsRulesets | null;

		/** Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged) */
		mode?: UpdateNetworkSecurityIntrusionSettingsPutBodyMode | null;

		/** Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode */
		protectedNetworks?: UpdateNetworkSecurityIntrusionSettingsPutBodyProtectedNetworks;
	}
	export interface UpdateNetworkSecurityIntrusionSettingsPutBodyFormProperties {

		/** Set the detection ruleset 'connectivity'/'balanced'/'security' (optional - omitting will leave current config unchanged). Default value is 'balanced' if none currently saved */
		idsRulesets: FormControl<UpdateNetworkSecurityIntrusionSettingsPutBodyIdsRulesets | null | undefined>,

		/** Set mode to 'disabled'/'detection'/'prevention' (optional - omitting will leave current config unchanged) */
		mode: FormControl<UpdateNetworkSecurityIntrusionSettingsPutBodyMode | null | undefined>,
	}
	export function CreateUpdateNetworkSecurityIntrusionSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSecurityIntrusionSettingsPutBodyFormProperties>({
			idsRulesets: new FormControl<UpdateNetworkSecurityIntrusionSettingsPutBodyIdsRulesets | null | undefined>(undefined),
			mode: new FormControl<UpdateNetworkSecurityIntrusionSettingsPutBodyMode | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkSecurityIntrusionSettingsPutBodyIdsRulesets { balanced = 'balanced', connectivity = 'connectivity', security = 'security' }

	export enum UpdateNetworkSecurityIntrusionSettingsPutBodyMode { detection = 'detection', disabled = 'disabled', prevention = 'prevention' }

	export interface UpdateNetworkSecurityIntrusionSettingsPutBodyProtectedNetworks {

		/** list of IP addresses or subnets being excluded from protection (required if 'useDefault' is false) */
		excludedCidr?: Array<string>;

		/** list of IP addresses or subnets being protected (required if 'useDefault' is false) */
		includedCidr?: Array<string>;

		/** true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved */
		useDefault?: boolean | null;
	}
	export interface UpdateNetworkSecurityIntrusionSettingsPutBodyProtectedNetworksFormProperties {

		/** true/false whether to use special IPv4 addresses: https://tools.ietf.org/html/rfc5735 (required). Default value is true if none currently saved */
		useDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkSecurityIntrusionSettingsPutBodyProtectedNetworksFormGroup() {
		return new FormGroup<UpdateNetworkSecurityIntrusionSettingsPutBodyProtectedNetworksFormProperties>({
			useDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSecurityMalwareSettingsPutBody {

		/** The sha256 digests of files that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing */
		UpdateNetworkSecurityMalwareSettingsPutBodyAllowedFiles?: Array<UpdateNetworkSecurityMalwareSettingsPutBodyAllowedFiles>;

		/** The urls that should be permitted by the malware detection engine. If omitted, the current config will remain unchanged. This is available only if your network supports AMP allow listing */
		UpdateNetworkSecurityMalwareSettingsPutBodyAllowedUrls?: Array<UpdateNetworkSecurityMalwareSettingsPutBodyAllowedUrls>;

		/**
		 * Set mode to 'enabled' to enable malware prevention, otherwise 'disabled'
		 * Required
		 */
		mode: UpdateNetworkSecurityMalwareSettingsPutBodyMode;
	}
	export interface UpdateNetworkSecurityMalwareSettingsPutBodyFormProperties {

		/**
		 * Set mode to 'enabled' to enable malware prevention, otherwise 'disabled'
		 * Required
		 */
		mode: FormControl<UpdateNetworkSecurityMalwareSettingsPutBodyMode | null | undefined>,
	}
	export function CreateUpdateNetworkSecurityMalwareSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSecurityMalwareSettingsPutBodyFormProperties>({
			mode: new FormControl<UpdateNetworkSecurityMalwareSettingsPutBodyMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkSecurityMalwareSettingsPutBodyAllowedFiles {

		/**
		 * Comment about the allowed entity
		 * Required
		 */
		comment: string;

		/**
		 * The file sha256 hash to allow
		 * Required
		 */
		sha256: string;
	}
	export interface UpdateNetworkSecurityMalwareSettingsPutBodyAllowedFilesFormProperties {

		/**
		 * Comment about the allowed entity
		 * Required
		 */
		comment: FormControl<string | null | undefined>,

		/**
		 * The file sha256 hash to allow
		 * Required
		 */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSecurityMalwareSettingsPutBodyAllowedFilesFormGroup() {
		return new FormGroup<UpdateNetworkSecurityMalwareSettingsPutBodyAllowedFilesFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sha256: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkSecurityMalwareSettingsPutBodyAllowedUrls {

		/**
		 * Comment about the allowed entity
		 * Required
		 */
		comment: string;

		/**
		 * The url to allow
		 * Required
		 */
		url: string;
	}
	export interface UpdateNetworkSecurityMalwareSettingsPutBodyAllowedUrlsFormProperties {

		/**
		 * Comment about the allowed entity
		 * Required
		 */
		comment: FormControl<string | null | undefined>,

		/**
		 * The url to allow
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSecurityMalwareSettingsPutBodyAllowedUrlsFormGroup() {
		return new FormGroup<UpdateNetworkSecurityMalwareSettingsPutBodyAllowedUrlsFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateNetworkSecurityMalwareSettingsPutBodyMode { disabled = 'disabled', enabled = 'enabled' }

	export interface UpdateNetworkSiteToSiteVpnPutBody {

		/** The list of VPN hubs, in order of preference. In spoke mode, at least 1 hub is required. */
		UpdateNetworkSiteToSiteVpnPutBodyHubs?: Array<UpdateNetworkSiteToSiteVpnPutBodyHubs>;

		/**
		 * The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'
		 * Required
		 */
		mode: UpdateNetworkSiteToSiteVpnPutBodyMode;

		/** The list of subnets and their VPN presence. */
		UpdateNetworkSiteToSiteVpnPutBodySubnets?: Array<UpdateNetworkSiteToSiteVpnPutBodySubnets>;
	}
	export interface UpdateNetworkSiteToSiteVpnPutBodyFormProperties {

		/**
		 * The site-to-site VPN mode. Can be one of 'none', 'spoke' or 'hub'
		 * Required
		 */
		mode: FormControl<UpdateNetworkSiteToSiteVpnPutBodyMode | null | undefined>,
	}
	export function CreateUpdateNetworkSiteToSiteVpnPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSiteToSiteVpnPutBodyFormProperties>({
			mode: new FormControl<UpdateNetworkSiteToSiteVpnPutBodyMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkSiteToSiteVpnPutBodyHubs {

		/**
		 * The network ID of the hub.
		 * Required
		 */
		hubId: string;

		/** Only valid in 'spoke' mode. Indicates whether default route traffic should be sent to this hub. */
		useDefaultRoute?: boolean | null;
	}
	export interface UpdateNetworkSiteToSiteVpnPutBodyHubsFormProperties {

		/**
		 * The network ID of the hub.
		 * Required
		 */
		hubId: FormControl<string | null | undefined>,

		/** Only valid in 'spoke' mode. Indicates whether default route traffic should be sent to this hub. */
		useDefaultRoute: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkSiteToSiteVpnPutBodyHubsFormGroup() {
		return new FormGroup<UpdateNetworkSiteToSiteVpnPutBodyHubsFormProperties>({
			hubId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useDefaultRoute: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkSiteToSiteVpnPutBodyMode { hub = 'hub', none = 'none', spoke = 'spoke' }

	export interface UpdateNetworkSiteToSiteVpnPutBodySubnets {

		/**
		 * The CIDR notation subnet used within the VPN
		 * Required
		 */
		localSubnet: string;

		/** Indicates the presence of the subnet in the VPN */
		useVpn?: boolean | null;
	}
	export interface UpdateNetworkSiteToSiteVpnPutBodySubnetsFormProperties {

		/**
		 * The CIDR notation subnet used within the VPN
		 * Required
		 */
		localSubnet: FormControl<string | null | undefined>,

		/** Indicates the presence of the subnet in the VPN */
		useVpn: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkSiteToSiteVpnPutBodySubnetsFormGroup() {
		return new FormGroup<UpdateNetworkSiteToSiteVpnPutBodySubnetsFormProperties>({
			localSubnet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useVpn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSmBypassActivationLockAttemptPostBody {

		/**
		 * The ids of the devices to attempt activation lock bypass.
		 * Required
		 */
		ids: Array<string>;
	}
	export interface CreateNetworkSmBypassActivationLockAttemptPostBodyFormProperties {
	}
	export function CreateCreateNetworkSmBypassActivationLockAttemptPostBodyFormGroup() {
		return new FormGroup<CreateNetworkSmBypassActivationLockAttemptPostBodyFormProperties>({
		});

	}

	export interface UpdateNetworkSmDeviceFieldsPutBody {

		/**
		 * The new fields of the device. Each field of this object is optional.
		 * Required
		 */
		deviceFields: UpdateNetworkSmDeviceFieldsPutBodyDeviceFields;

		/** The id of the device to be modified. */
		id?: string | null;

		/** The serial of the device to be modified. */
		serial?: string | null;

		/** The wifiMac of the device to be modified. */
		wifiMac?: string | null;
	}
	export interface UpdateNetworkSmDeviceFieldsPutBodyFormProperties {

		/** The id of the device to be modified. */
		id: FormControl<string | null | undefined>,

		/** The serial of the device to be modified. */
		serial: FormControl<string | null | undefined>,

		/** The wifiMac of the device to be modified. */
		wifiMac: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSmDeviceFieldsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSmDeviceFieldsPutBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			serial: new FormControl<string | null | undefined>(undefined),
			wifiMac: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSmDeviceFieldsPutBodyDeviceFields {

		/** New name for the device */
		name?: string | null;

		/** New notes for the device */
		notes?: string | null;
	}
	export interface UpdateNetworkSmDeviceFieldsPutBodyDeviceFieldsFormProperties {

		/** New name for the device */
		name: FormControl<string | null | undefined>,

		/** New notes for the device */
		notes: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSmDeviceFieldsPutBodyDeviceFieldsFormGroup() {
		return new FormGroup<UpdateNetworkSmDeviceFieldsPutBodyDeviceFieldsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WipeNetworkSmDevicePutBody {

		/** The id of the device to be wiped. */
		id?: string | null;

		/** The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices. */
		pin?: number | null;

		/** The serial of the device to be wiped. */
		serial?: string | null;

		/** The wifiMac of the device to be wiped. */
		wifiMac?: string | null;
	}
	export interface WipeNetworkSmDevicePutBodyFormProperties {

		/** The id of the device to be wiped. */
		id: FormControl<string | null | undefined>,

		/** The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices. */
		pin: FormControl<number | null | undefined>,

		/** The serial of the device to be wiped. */
		serial: FormControl<string | null | undefined>,

		/** The wifiMac of the device to be wiped. */
		wifiMac: FormControl<string | null | undefined>,
	}
	export function CreateWipeNetworkSmDevicePutBodyFormGroup() {
		return new FormGroup<WipeNetworkSmDevicePutBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			pin: new FormControl<number | null | undefined>(undefined),
			serial: new FormControl<string | null | undefined>(undefined),
			wifiMac: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSmDevicesTagsPutBody {

		/** The ids of the devices to be modified. */
		ids?: string | null;

		/** The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified. */
		scope?: string | null;

		/** The serials of the devices to be modified. */
		serials?: string | null;

		/**
		 * The tags to be added, deleted, or updated.
		 * Required
		 */
		tags: string;

		/**
		 * One of add, delete, or update. Only devices that have been modified will be returned.
		 * Required
		 */
		updateAction: string;

		/** The wifiMacs of the devices to be modified. */
		wifiMacs?: string | null;
	}
	export interface UpdateNetworkSmDevicesTagsPutBodyFormProperties {

		/** The ids of the devices to be modified. */
		ids: FormControl<string | null | undefined>,

		/** The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be modified. */
		scope: FormControl<string | null | undefined>,

		/** The serials of the devices to be modified. */
		serials: FormControl<string | null | undefined>,

		/**
		 * The tags to be added, deleted, or updated.
		 * Required
		 */
		tags: FormControl<string | null | undefined>,

		/**
		 * One of add, delete, or update. Only devices that have been modified will be returned.
		 * Required
		 */
		updateAction: FormControl<string | null | undefined>,

		/** The wifiMacs of the devices to be modified. */
		wifiMacs: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSmDevicesTagsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSmDevicesTagsPutBodyFormProperties>({
			ids: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			serials: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updateAction: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wifiMacs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetNetworkSplashLoginAttemptsSsidNumber { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4, _5 = 5, _6 = 6, _7 = 7, _8 = 8, _9 = 9, _10 = 10, _11 = 11, _12 = 12, _13 = 13, _14 = 14 }

	export interface UpdateNetworkSsidPutBody {

		/** The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming' */
		UpdateNetworkSsidPutBodyApTagsAndVlanIds?: Array<UpdateNetworkSsidPutBodyApTagsAndVlanIds>;

		/** The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-localradius', 'ipsk-with-radius' or 'ipsk-without-radius') */
		authMode?: UpdateNetworkSsidPutBodyAuthMode | null;

		/** Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list. */
		availabilityTags?: Array<string>;

		/** Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags. */
		availableOnAllAps?: boolean | null;

		/** The client-serving radio frequencies of this SSID in the default indoor RF profile. ('Dual band operation', '5 GHz band only' or 'Dual band operation with Band Steering') */
		bandSelection?: string | null;

		/** The concentrator to use when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'. */
		concentratorNetworkId?: string | null;

		/** The default VLAN ID used for 'all other APs'. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming' */
		defaultVlanId?: number | null;

		/** Disassociate clients when 'VPN' concentrator failover occurs in order to trigger clients to re-associate and generate new DHCP requests. This param is only valid if ipAssignmentMode is 'VPN'. */
		disassociateClientsOnVpnFailover?: boolean | null;

		/** Whether or not the SSID is enabled */
		enabled?: boolean | null;

		/** The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk' */
		encryptionMode?: UpdateNetworkSsidPutBodyEncryptionMode | null;

		/** Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled') */
		enterpriseAdminAccess?: UpdateNetworkSsidPutBodyEnterpriseAdminAccess | null;

		/** The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Ethernet over GRE', 'Layer 3 roaming with a concentrator' or 'VPN') */
		ipAssignmentMode?: string | null;

		/** Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'. */
		lanIsolationEnabled?: boolean | null;

		/** The minimum bitrate in Mbps of this SSID in the default indoor RF profile. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54') */
		minBitrate?: number | null;

		/** The name of the SSID */
		name?: string | null;

		/** The download bandwidth limit in Kbps. (0 represents no limit.) */
		perClientBandwidthLimitDown?: number | null;

		/** The upload bandwidth limit in Kbps. (0 represents no limit.) */
		perClientBandwidthLimitUp?: number | null;

		/** The passkey for the SSID. This param is only valid if the authMode is 'psk' */
		psk?: string | null;

		/** Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' */
		radiusAccountingEnabled?: boolean | null;

		/** The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' and radiusAccountingEnabled is 'true' */
		UpdateNetworkSsidPutBodyRadiusAccountingServers?: Array<UpdateNetworkSsidPutBodyRadiusAccountingServers>;

		/** Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message */
		radiusAttributeForGroupPolicies?: string | null;

		/** If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server. */
		radiusCoaEnabled?: boolean | null;

		/** This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access') */
		radiusFailoverPolicy?: UpdateNetworkSsidPutBodyRadiusFailoverPolicy | null;

		/** This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin') */
		radiusLoadBalancingPolicy?: UpdateNetworkSsidPutBodyRadiusLoadBalancingPolicy | null;

		/** If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'. */
		radiusOverride?: boolean | null;

		/** The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' */
		UpdateNetworkSsidPutBodyRadiusServers?: Array<UpdateNetworkSsidPutBodyRadiusServers>;

		/** The secondary concentrator to use when the ipAssignmentMode is 'VPN'. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. ('disabled' represents no secondary concentrator.) */
		secondaryConcentratorNetworkId?: string | null;

		/** The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children. */
		splashPage?: UpdateNetworkSsidPutBodySplashPage | null;

		/** Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming' */
		useVlanTagging?: boolean | null;

		/** Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true */
		visible?: boolean | null;

		/** The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN' */
		vlanId?: number | null;

		/** Allow access to a configurable list of IP ranges, which users may access prior to sign-on. */
		walledGardenEnabled?: boolean | null;

		/** Specify your walled garden by entering space-separated addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. 192.168.1.1/24 192.168.37.10/32 www.yahoo.com *.google.com). Meraki's splash page is automatically included in your walled garden. */
		walledGardenRanges?: string | null;

		/** The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode', 'WPA3 only' or 'WPA3 192-bit Security') */
		wpaEncryptionMode?: UpdateNetworkSsidPutBodyWpaEncryptionMode | null;
	}
	export interface UpdateNetworkSsidPutBodyFormProperties {

		/** The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-localradius', 'ipsk-with-radius' or 'ipsk-without-radius') */
		authMode: FormControl<UpdateNetworkSsidPutBodyAuthMode | null | undefined>,

		/** Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags. */
		availableOnAllAps: FormControl<boolean | null | undefined>,

		/** The client-serving radio frequencies of this SSID in the default indoor RF profile. ('Dual band operation', '5 GHz band only' or 'Dual band operation with Band Steering') */
		bandSelection: FormControl<string | null | undefined>,

		/** The concentrator to use when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'. */
		concentratorNetworkId: FormControl<string | null | undefined>,

		/** The default VLAN ID used for 'all other APs'. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming' */
		defaultVlanId: FormControl<number | null | undefined>,

		/** Disassociate clients when 'VPN' concentrator failover occurs in order to trigger clients to re-associate and generate new DHCP requests. This param is only valid if ipAssignmentMode is 'VPN'. */
		disassociateClientsOnVpnFailover: FormControl<boolean | null | undefined>,

		/** Whether or not the SSID is enabled */
		enabled: FormControl<boolean | null | undefined>,

		/** The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk' */
		encryptionMode: FormControl<UpdateNetworkSsidPutBodyEncryptionMode | null | undefined>,

		/** Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled') */
		enterpriseAdminAccess: FormControl<UpdateNetworkSsidPutBodyEnterpriseAdminAccess | null | undefined>,

		/** The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Ethernet over GRE', 'Layer 3 roaming with a concentrator' or 'VPN') */
		ipAssignmentMode: FormControl<string | null | undefined>,

		/** Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'. */
		lanIsolationEnabled: FormControl<boolean | null | undefined>,

		/** The minimum bitrate in Mbps of this SSID in the default indoor RF profile. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54') */
		minBitrate: FormControl<number | null | undefined>,

		/** The name of the SSID */
		name: FormControl<string | null | undefined>,

		/** The download bandwidth limit in Kbps. (0 represents no limit.) */
		perClientBandwidthLimitDown: FormControl<number | null | undefined>,

		/** The upload bandwidth limit in Kbps. (0 represents no limit.) */
		perClientBandwidthLimitUp: FormControl<number | null | undefined>,

		/** The passkey for the SSID. This param is only valid if the authMode is 'psk' */
		psk: FormControl<string | null | undefined>,

		/** Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' */
		radiusAccountingEnabled: FormControl<boolean | null | undefined>,

		/** Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message */
		radiusAttributeForGroupPolicies: FormControl<string | null | undefined>,

		/** If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server. */
		radiusCoaEnabled: FormControl<boolean | null | undefined>,

		/** This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access') */
		radiusFailoverPolicy: FormControl<UpdateNetworkSsidPutBodyRadiusFailoverPolicy | null | undefined>,

		/** This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin') */
		radiusLoadBalancingPolicy: FormControl<UpdateNetworkSsidPutBodyRadiusLoadBalancingPolicy | null | undefined>,

		/** If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'. */
		radiusOverride: FormControl<boolean | null | undefined>,

		/** The secondary concentrator to use when the ipAssignmentMode is 'VPN'. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. ('disabled' represents no secondary concentrator.) */
		secondaryConcentratorNetworkId: FormControl<string | null | undefined>,

		/** The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children. */
		splashPage: FormControl<UpdateNetworkSsidPutBodySplashPage | null | undefined>,

		/** Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming' */
		useVlanTagging: FormControl<boolean | null | undefined>,

		/** Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true */
		visible: FormControl<boolean | null | undefined>,

		/** The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN' */
		vlanId: FormControl<number | null | undefined>,

		/** Allow access to a configurable list of IP ranges, which users may access prior to sign-on. */
		walledGardenEnabled: FormControl<boolean | null | undefined>,

		/** Specify your walled garden by entering space-separated addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. 192.168.1.1/24 192.168.37.10/32 www.yahoo.com *.google.com). Meraki's splash page is automatically included in your walled garden. */
		walledGardenRanges: FormControl<string | null | undefined>,

		/** The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode', 'WPA3 only' or 'WPA3 192-bit Security') */
		wpaEncryptionMode: FormControl<UpdateNetworkSsidPutBodyWpaEncryptionMode | null | undefined>,
	}
	export function CreateUpdateNetworkSsidPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSsidPutBodyFormProperties>({
			authMode: new FormControl<UpdateNetworkSsidPutBodyAuthMode | null | undefined>(undefined),
			availableOnAllAps: new FormControl<boolean | null | undefined>(undefined),
			bandSelection: new FormControl<string | null | undefined>(undefined),
			concentratorNetworkId: new FormControl<string | null | undefined>(undefined),
			defaultVlanId: new FormControl<number | null | undefined>(undefined),
			disassociateClientsOnVpnFailover: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			encryptionMode: new FormControl<UpdateNetworkSsidPutBodyEncryptionMode | null | undefined>(undefined),
			enterpriseAdminAccess: new FormControl<UpdateNetworkSsidPutBodyEnterpriseAdminAccess | null | undefined>(undefined),
			ipAssignmentMode: new FormControl<string | null | undefined>(undefined),
			lanIsolationEnabled: new FormControl<boolean | null | undefined>(undefined),
			minBitrate: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			perClientBandwidthLimitDown: new FormControl<number | null | undefined>(undefined),
			perClientBandwidthLimitUp: new FormControl<number | null | undefined>(undefined),
			psk: new FormControl<string | null | undefined>(undefined),
			radiusAccountingEnabled: new FormControl<boolean | null | undefined>(undefined),
			radiusAttributeForGroupPolicies: new FormControl<string | null | undefined>(undefined),
			radiusCoaEnabled: new FormControl<boolean | null | undefined>(undefined),
			radiusFailoverPolicy: new FormControl<UpdateNetworkSsidPutBodyRadiusFailoverPolicy | null | undefined>(undefined),
			radiusLoadBalancingPolicy: new FormControl<UpdateNetworkSsidPutBodyRadiusLoadBalancingPolicy | null | undefined>(undefined),
			radiusOverride: new FormControl<boolean | null | undefined>(undefined),
			secondaryConcentratorNetworkId: new FormControl<string | null | undefined>(undefined),
			splashPage: new FormControl<UpdateNetworkSsidPutBodySplashPage | null | undefined>(undefined),
			useVlanTagging: new FormControl<boolean | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
			vlanId: new FormControl<number | null | undefined>(undefined),
			walledGardenEnabled: new FormControl<boolean | null | undefined>(undefined),
			walledGardenRanges: new FormControl<string | null | undefined>(undefined),
			wpaEncryptionMode: new FormControl<UpdateNetworkSsidPutBodyWpaEncryptionMode | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSsidPutBodyApTagsAndVlanIds {

		/** Comma-separated list of AP tags */
		tags?: string | null;

		/** Numerical identifier that is assigned to the VLAN */
		vlanId?: number | null;
	}
	export interface UpdateNetworkSsidPutBodyApTagsAndVlanIdsFormProperties {

		/** Comma-separated list of AP tags */
		tags: FormControl<string | null | undefined>,

		/** Numerical identifier that is assigned to the VLAN */
		vlanId: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkSsidPutBodyApTagsAndVlanIdsFormGroup() {
		return new FormGroup<UpdateNetworkSsidPutBodyApTagsAndVlanIdsFormProperties>({
			tags: new FormControl<string | null | undefined>(undefined),
			vlanId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkSsidPutBodyAuthMode { '8021x-google' = '8021x-google', '8021x-localradius' = '8021x-localradius', '8021x-meraki' = '8021x-meraki', '8021x-nac' = '8021x-nac', '8021x-radius' = '8021x-radius', 'ipsk-with-radius' = 'ipsk-with-radius', 'ipsk-without-radius' = 'ipsk-without-radius', open = 'open', 'open-enhanced' = 'open-enhanced', 'open-with-nac' = 'open-with-nac', 'open-with-radius' = 'open-with-radius', psk = 'psk' }

	export enum UpdateNetworkSsidPutBodyEncryptionMode { wep = 'wep', wpa = 'wpa' }

	export enum UpdateNetworkSsidPutBodyEnterpriseAdminAccess { 'access disabled' = 'access disabled', 'access enabled' = 'access enabled' }

	export interface UpdateNetworkSsidPutBodyRadiusAccountingServers {

		/**
		 * IP address to which the APs will send RADIUS accounting messages
		 * Required
		 */
		host: string;

		/** Port on the RADIUS server that is listening for accounting messages */
		port?: number | null;

		/** Shared key used to authenticate messages between the APs and RADIUS server */
		secret?: string | null;
	}
	export interface UpdateNetworkSsidPutBodyRadiusAccountingServersFormProperties {

		/**
		 * IP address to which the APs will send RADIUS accounting messages
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** Port on the RADIUS server that is listening for accounting messages */
		port: FormControl<number | null | undefined>,

		/** Shared key used to authenticate messages between the APs and RADIUS server */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSsidPutBodyRadiusAccountingServersFormGroup() {
		return new FormGroup<UpdateNetworkSsidPutBodyRadiusAccountingServersFormProperties>({
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkSsidPutBodyRadiusFailoverPolicy { 'Allow access' = 'Allow access', 'Deny access' = 'Deny access' }

	export enum UpdateNetworkSsidPutBodyRadiusLoadBalancingPolicy { 'Round robin' = 'Round robin', 'Strict priority order' = 'Strict priority order' }

	export interface UpdateNetworkSsidPutBodyRadiusServers {

		/**
		 * IP address of your RADIUS server
		 * Required
		 */
		host: string;

		/** UDP port the RADIUS server listens on for Access-requests */
		port?: number | null;

		/** RADIUS client shared secret */
		secret?: string | null;
	}
	export interface UpdateNetworkSsidPutBodyRadiusServersFormProperties {

		/**
		 * IP address of your RADIUS server
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/** UDP port the RADIUS server listens on for Access-requests */
		port: FormControl<number | null | undefined>,

		/** RADIUS client shared secret */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSsidPutBodyRadiusServersFormGroup() {
		return new FormGroup<UpdateNetworkSsidPutBodyRadiusServersFormProperties>({
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkSsidPutBodySplashPage { Billing = 'Billing', 'Cisco ISE' = 'Cisco ISE', 'Click-through splash page' = 'Click-through splash page', 'Facebook Wi-Fi' = 'Facebook Wi-Fi', 'Google Apps domain' = 'Google Apps domain', 'Google OAuth' = 'Google OAuth', None = 'None', 'Password-protected with Active Directory' = 'Password-protected with Active Directory', 'Password-protected with LDAP' = 'Password-protected with LDAP', 'Password-protected with Meraki RADIUS' = 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS' = 'Password-protected with custom RADIUS', 'SMS authentication' = 'SMS authentication', 'Sponsored guest' = 'Sponsored guest', 'Systems Manager Sentry' = 'Systems Manager Sentry' }

	export enum UpdateNetworkSsidPutBodyWpaEncryptionMode { 'WPA1 and WPA2' = 'WPA1 and WPA2', 'WPA1 only' = 'WPA1 only', 'WPA2 only' = 'WPA2 only', 'WPA3 192-bit Security' = 'WPA3 192-bit Security', 'WPA3 Transition Mode' = 'WPA3 Transition Mode', 'WPA3 only' = 'WPA3 only' }

	export interface UpdateNetworkSsidL3FirewallRulesPutBody {

		/** Allow wireless client access to local LAN (boolean value - true allows access and false denies access) (optional) */
		allowLanAccess?: boolean | null;

		/** An ordered array of the firewall rules for this SSID (not including the local LAN access rule or the default rule) */
		UpdateNetworkSsidL3FirewallRulesPutBodyRules?: Array<UpdateNetworkSsidL3FirewallRulesPutBodyRules>;
	}
	export interface UpdateNetworkSsidL3FirewallRulesPutBodyFormProperties {

		/** Allow wireless client access to local LAN (boolean value - true allows access and false denies access) (optional) */
		allowLanAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkSsidL3FirewallRulesPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSsidL3FirewallRulesPutBodyFormProperties>({
			allowLanAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSsidL3FirewallRulesPutBodyRules {

		/** Description of the rule (optional) */
		comment?: string | null;

		/**
		 * Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
		 * Required
		 */
		destCidr: string;

		/** Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any' */
		destPort?: string | null;

		/**
		 * 'allow' or 'deny' traffic specified by this rule
		 * Required
		 */
		policy: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy;

		/**
		 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
		 * Required
		 */
		protocol: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol;
	}
	export interface UpdateNetworkSsidL3FirewallRulesPutBodyRulesFormProperties {

		/** Description of the rule (optional) */
		comment: FormControl<string | null | undefined>,

		/**
		 * Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
		 * Required
		 */
		destCidr: FormControl<string | null | undefined>,

		/** Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any' */
		destPort: FormControl<string | null | undefined>,

		/**
		 * 'allow' or 'deny' traffic specified by this rule
		 * Required
		 */
		policy: FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy | null | undefined>,

		/**
		 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
		 * Required
		 */
		protocol: FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol | null | undefined>,
	}
	export function CreateUpdateNetworkSsidL3FirewallRulesPutBodyRulesFormGroup() {
		return new FormGroup<UpdateNetworkSsidL3FirewallRulesPutBodyRulesFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			destCidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destPort: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkSsidSplashSettingsPutBody {

		/** [optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl' */
		splashUrl?: string | null;

		/** [optional] Boolean indicating whether the user will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL. */
		useSplashUrl?: boolean | null;
	}
	export interface UpdateNetworkSsidSplashSettingsPutBodyFormProperties {

		/** [optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see 'useSplashUrl' */
		splashUrl: FormControl<string | null | undefined>,

		/** [optional] Boolean indicating whether the user will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID's access control settings, it may not be possible to use the custom splash URL. */
		useSplashUrl: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkSsidSplashSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSsidSplashSettingsPutBodyFormProperties>({
			splashUrl: new FormControl<string | null | undefined>(undefined),
			useSplashUrl: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkStaticRoutePostBody {

		/**
		 * The gateway IP (next hop) of the static route
		 * Required
		 */
		gatewayIp: string;

		/**
		 * The name of the new static route
		 * Required
		 */
		name: string;

		/**
		 * The subnet of the static route
		 * Required
		 */
		subnet: string;
	}
	export interface CreateNetworkStaticRoutePostBodyFormProperties {

		/**
		 * The gateway IP (next hop) of the static route
		 * Required
		 */
		gatewayIp: FormControl<string | null | undefined>,

		/**
		 * The name of the new static route
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The subnet of the static route
		 * Required
		 */
		subnet: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkStaticRoutePostBodyFormGroup() {
		return new FormGroup<CreateNetworkStaticRoutePostBodyFormProperties>({
			gatewayIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subnet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkStaticRoutePutBody {

		/** The enabled state of the static route */
		enabled?: boolean | null;

		/** The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details. */
		fixedIpAssignments?: string | null;

		/** The gateway IP (next hop) of the static route */
		gatewayIp?: string | null;

		/** The name of the static route */
		name?: string | null;

		/** The DHCP reserved IP ranges on the static route */
		UpdateNetworkStaticRoutePutBodyReservedIpRanges?: Array<UpdateNetworkStaticRoutePutBodyReservedIpRanges>;

		/** The subnet of the static route */
		subnet?: string | null;
	}
	export interface UpdateNetworkStaticRoutePutBodyFormProperties {

		/** The enabled state of the static route */
		enabled: FormControl<boolean | null | undefined>,

		/** The DHCP fixed IP assignments on the static route. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details. */
		fixedIpAssignments: FormControl<string | null | undefined>,

		/** The gateway IP (next hop) of the static route */
		gatewayIp: FormControl<string | null | undefined>,

		/** The name of the static route */
		name: FormControl<string | null | undefined>,

		/** The subnet of the static route */
		subnet: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkStaticRoutePutBodyFormGroup() {
		return new FormGroup<UpdateNetworkStaticRoutePutBodyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			fixedIpAssignments: new FormControl<string | null | undefined>(undefined),
			gatewayIp: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkStaticRoutePutBodyReservedIpRanges {

		/**
		 * A text comment for the reserved range
		 * Required
		 */
		comment: string;

		/**
		 * The last IP in the reserved range
		 * Required
		 */
		end: string;

		/**
		 * The first IP in the reserved range
		 * Required
		 */
		start: string;
	}
	export interface UpdateNetworkStaticRoutePutBodyReservedIpRangesFormProperties {

		/**
		 * A text comment for the reserved range
		 * Required
		 */
		comment: FormControl<string | null | undefined>,

		/**
		 * The last IP in the reserved range
		 * Required
		 */
		end: FormControl<string | null | undefined>,

		/**
		 * The first IP in the reserved range
		 * Required
		 */
		start: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkStaticRoutePutBodyReservedIpRangesFormGroup() {
		return new FormGroup<UpdateNetworkStaticRoutePutBodyReservedIpRangesFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			end: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkSwitchLinkAggregationPostBody {

		/** Array of switch or stack ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported. */
		CreateNetworkSwitchLinkAggregationPostBodySwitchPorts?: Array<CreateNetworkSwitchLinkAggregationPostBodySwitchPorts>;

		/** Array of switch profile ports for creating aggregation group. Minimum 2 and maximum 8 ports are supported. */
		CreateNetworkSwitchLinkAggregationPostBodySwitchProfilePorts?: Array<CreateNetworkSwitchLinkAggregationPostBodySwitchProfilePorts>;
	}
	export interface CreateNetworkSwitchLinkAggregationPostBodyFormProperties {
	}
	export function CreateCreateNetworkSwitchLinkAggregationPostBodyFormGroup() {
		return new FormGroup<CreateNetworkSwitchLinkAggregationPostBodyFormProperties>({
		});

	}

	export interface CreateNetworkSwitchLinkAggregationPostBodySwitchPorts {

		/**
		 * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
		 * Required
		 */
		portId: string;

		/**
		 * Serial number of the switch.
		 * Required
		 */
		serial: string;
	}
	export interface CreateNetworkSwitchLinkAggregationPostBodySwitchPortsFormProperties {

		/**
		 * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
		 * Required
		 */
		portId: FormControl<string | null | undefined>,

		/**
		 * Serial number of the switch.
		 * Required
		 */
		serial: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchLinkAggregationPostBodySwitchPortsFormGroup() {
		return new FormGroup<CreateNetworkSwitchLinkAggregationPostBodySwitchPortsFormProperties>({
			portId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serial: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkSwitchLinkAggregationPostBodySwitchProfilePorts {

		/**
		 * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
		 * Required
		 */
		portId: string;

		/**
		 * Profile identifier.
		 * Required
		 */
		profile: string;
	}
	export interface CreateNetworkSwitchLinkAggregationPostBodySwitchProfilePortsFormProperties {

		/**
		 * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
		 * Required
		 */
		portId: FormControl<string | null | undefined>,

		/**
		 * Profile identifier.
		 * Required
		 */
		profile: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchLinkAggregationPostBodySwitchProfilePortsFormGroup() {
		return new FormGroup<CreateNetworkSwitchLinkAggregationPostBodySwitchProfilePortsFormProperties>({
			portId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkSwitchLinkAggregationPutBody {

		/** Array of switch or stack ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported. */
		UpdateNetworkSwitchLinkAggregationPutBodySwitchPorts?: Array<UpdateNetworkSwitchLinkAggregationPutBodySwitchPorts>;

		/** Array of switch profile ports for updating aggregation group. Minimum 2 and maximum 8 ports are supported. */
		UpdateNetworkSwitchLinkAggregationPutBodySwitchProfilePorts?: Array<UpdateNetworkSwitchLinkAggregationPutBodySwitchProfilePorts>;
	}
	export interface UpdateNetworkSwitchLinkAggregationPutBodyFormProperties {
	}
	export function CreateUpdateNetworkSwitchLinkAggregationPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSwitchLinkAggregationPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkSwitchLinkAggregationPutBodySwitchPorts {

		/**
		 * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
		 * Required
		 */
		portId: string;

		/**
		 * Serial number of the switch.
		 * Required
		 */
		serial: string;
	}
	export interface UpdateNetworkSwitchLinkAggregationPutBodySwitchPortsFormProperties {

		/**
		 * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
		 * Required
		 */
		portId: FormControl<string | null | undefined>,

		/**
		 * Serial number of the switch.
		 * Required
		 */
		serial: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchLinkAggregationPutBodySwitchPortsFormGroup() {
		return new FormGroup<UpdateNetworkSwitchLinkAggregationPutBodySwitchPortsFormProperties>({
			portId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serial: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkSwitchLinkAggregationPutBodySwitchProfilePorts {

		/**
		 * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
		 * Required
		 */
		portId: string;

		/**
		 * Profile identifier.
		 * Required
		 */
		profile: string;
	}
	export interface UpdateNetworkSwitchLinkAggregationPutBodySwitchProfilePortsFormProperties {

		/**
		 * Port identifier of switch port. For modules, the identifier is "SlotNumber_ModuleType_PortNumber" (Ex: "1_8X10G_1"), otherwise it is just the port number (Ex: "8").
		 * Required
		 */
		portId: FormControl<string | null | undefined>,

		/**
		 * Profile identifier.
		 * Required
		 */
		profile: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchLinkAggregationPutBodySwitchProfilePortsFormGroup() {
		return new FormGroup<UpdateNetworkSwitchLinkAggregationPutBodySwitchProfilePortsFormProperties>({
			portId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkSwitchPortSchedulePostBody {

		/**
		 * The name for your port schedule. Required
		 * Required
		 */
		name: string;

		/**
		 * The schedule for switch port scheduling. Schedules are applied to days of the week.
		 * When it's empty, default schedule with all days of a week are configured.
		 * Any unspecified day in the schedule is added as a default schedule configuration of the day.
		 */
		portSchedule?: CreateNetworkSwitchPortSchedulePostBodyPortSchedule;
	}
	export interface CreateNetworkSwitchPortSchedulePostBodyFormProperties {

		/**
		 * The name for your port schedule. Required
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchPortSchedulePostBodyFormGroup() {
		return new FormGroup<CreateNetworkSwitchPortSchedulePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkSwitchPortSchedulePostBodyPortSchedule {

		/** The schedule object for Friday. */
		friday?: CreateNetworkSwitchPortSchedulePostBodyPortScheduleFriday;

		/** The schedule object for Monday. */
		monday?: CreateNetworkSwitchPortSchedulePostBodyPortScheduleMonday;

		/** The schedule object for Saturday. */
		saturday?: CreateNetworkSwitchPortSchedulePostBodyPortScheduleSaturday;

		/** The schedule object for Sunday. */
		sunday?: CreateNetworkSwitchPortSchedulePostBodyPortScheduleSunday;

		/** The schedule object for Thursday. */
		thursday?: CreateNetworkSwitchPortSchedulePostBodyPortScheduleThursday;

		/** The schedule object for Tuesday. */
		tuesday?: CreateNetworkSwitchPortSchedulePostBodyPortScheduleTuesday;

		/** The schedule object for Wednesday. */
		wednesday?: CreateNetworkSwitchPortSchedulePostBodyPortScheduleWednesday;
	}
	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleFormProperties {
	}
	export function CreateCreateNetworkSwitchPortSchedulePostBodyPortScheduleFormGroup() {
		return new FormGroup<CreateNetworkSwitchPortSchedulePostBodyPortScheduleFormProperties>({
		});

	}

	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleFriday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleFridayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchPortSchedulePostBodyPortScheduleFridayFormGroup() {
		return new FormGroup<CreateNetworkSwitchPortSchedulePostBodyPortScheduleFridayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleMonday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleMondayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchPortSchedulePostBodyPortScheduleMondayFormGroup() {
		return new FormGroup<CreateNetworkSwitchPortSchedulePostBodyPortScheduleMondayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleSaturday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleSaturdayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchPortSchedulePostBodyPortScheduleSaturdayFormGroup() {
		return new FormGroup<CreateNetworkSwitchPortSchedulePostBodyPortScheduleSaturdayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleSunday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleSundayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchPortSchedulePostBodyPortScheduleSundayFormGroup() {
		return new FormGroup<CreateNetworkSwitchPortSchedulePostBodyPortScheduleSundayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleThursday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleThursdayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchPortSchedulePostBodyPortScheduleThursdayFormGroup() {
		return new FormGroup<CreateNetworkSwitchPortSchedulePostBodyPortScheduleThursdayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleTuesday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleTuesdayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchPortSchedulePostBodyPortScheduleTuesdayFormGroup() {
		return new FormGroup<CreateNetworkSwitchPortSchedulePostBodyPortScheduleTuesdayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleWednesday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface CreateNetworkSwitchPortSchedulePostBodyPortScheduleWednesdayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSwitchPortSchedulePostBodyPortScheduleWednesdayFormGroup() {
		return new FormGroup<CreateNetworkSwitchPortSchedulePostBodyPortScheduleWednesdayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchPortSchedulePutBody {

		/** The name for your port schedule. */
		name?: string | null;

		/**
		 * The schedule for switch port scheduling. Schedules are applied to days of the week.
		 * When it's empty, default schedule with all days of a week are configured.
		 * Any unspecified day in the schedule is added as a default schedule configuration of the day.
		 */
		portSchedule?: UpdateNetworkSwitchPortSchedulePutBodyPortSchedule;
	}
	export interface UpdateNetworkSwitchPortSchedulePutBodyFormProperties {

		/** The name for your port schedule. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchPortSchedulePutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSwitchPortSchedulePutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchPortSchedulePutBodyPortSchedule {

		/** The schedule object for Friday. */
		friday?: UpdateNetworkSwitchPortSchedulePutBodyPortScheduleFriday;

		/** The schedule object for Monday. */
		monday?: UpdateNetworkSwitchPortSchedulePutBodyPortScheduleMonday;

		/** The schedule object for Saturday. */
		saturday?: UpdateNetworkSwitchPortSchedulePutBodyPortScheduleSaturday;

		/** The schedule object for Sunday. */
		sunday?: UpdateNetworkSwitchPortSchedulePutBodyPortScheduleSunday;

		/** The schedule object for Thursday. */
		thursday?: UpdateNetworkSwitchPortSchedulePutBodyPortScheduleThursday;

		/** The schedule object for Tuesday. */
		tuesday?: UpdateNetworkSwitchPortSchedulePutBodyPortScheduleTuesday;

		/** The schedule object for Wednesday. */
		wednesday?: UpdateNetworkSwitchPortSchedulePutBodyPortScheduleWednesday;
	}
	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleFormProperties {
	}
	export function CreateUpdateNetworkSwitchPortSchedulePutBodyPortScheduleFormGroup() {
		return new FormGroup<UpdateNetworkSwitchPortSchedulePutBodyPortScheduleFormProperties>({
		});

	}

	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleFriday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleFridayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchPortSchedulePutBodyPortScheduleFridayFormGroup() {
		return new FormGroup<UpdateNetworkSwitchPortSchedulePutBodyPortScheduleFridayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleMonday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleMondayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchPortSchedulePutBodyPortScheduleMondayFormGroup() {
		return new FormGroup<UpdateNetworkSwitchPortSchedulePutBodyPortScheduleMondayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleSaturday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleSaturdayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchPortSchedulePutBodyPortScheduleSaturdayFormGroup() {
		return new FormGroup<UpdateNetworkSwitchPortSchedulePutBodyPortScheduleSaturdayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleSunday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleSundayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchPortSchedulePutBodyPortScheduleSundayFormGroup() {
		return new FormGroup<UpdateNetworkSwitchPortSchedulePutBodyPortScheduleSundayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleThursday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleThursdayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchPortSchedulePutBodyPortScheduleThursdayFormGroup() {
		return new FormGroup<UpdateNetworkSwitchPortSchedulePutBodyPortScheduleThursdayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleTuesday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleTuesdayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchPortSchedulePutBodyPortScheduleTuesdayFormGroup() {
		return new FormGroup<UpdateNetworkSwitchPortSchedulePutBodyPortScheduleTuesdayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleWednesday {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active?: boolean | null;

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from?: string | null;

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to?: string | null;
	}
	export interface UpdateNetworkSwitchPortSchedulePutBodyPortScheduleWednesdayFormProperties {

		/** Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. */
		active: FormControl<boolean | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. */
		from: FormControl<string | null | undefined>,

		/** The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchPortSchedulePutBodyPortScheduleWednesdayFormGroup() {
		return new FormGroup<UpdateNetworkSwitchPortSchedulePutBodyPortScheduleWednesdayFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchSettingsPutBody {

		/** Exceptions on a per switch basis to "useCombinedPower" */
		UpdateNetworkSwitchSettingsPutBodyPowerExceptions?: Array<UpdateNetworkSwitchSettingsPutBodyPowerExceptions>;

		/** The use Combined Power as the default behavior of secondary power supplies on supported devices. */
		useCombinedPower?: boolean | null;

		/** Management VLAN */
		vlan?: number | null;
	}
	export interface UpdateNetworkSwitchSettingsPutBodyFormProperties {

		/** The use Combined Power as the default behavior of secondary power supplies on supported devices. */
		useCombinedPower: FormControl<boolean | null | undefined>,

		/** Management VLAN */
		vlan: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSwitchSettingsPutBodyFormProperties>({
			useCombinedPower: new FormControl<boolean | null | undefined>(undefined),
			vlan: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchSettingsPutBodyPowerExceptions {

		/**
		 * Per switch exception (combined, redundant, useNetworkSetting)
		 * Required
		 */
		powerType: UpdateNetworkSwitchSettingsPutBodyPowerExceptionsPowerType;

		/**
		 * Serial number of the switch
		 * Required
		 */
		serial: string;
	}
	export interface UpdateNetworkSwitchSettingsPutBodyPowerExceptionsFormProperties {

		/**
		 * Per switch exception (combined, redundant, useNetworkSetting)
		 * Required
		 */
		powerType: FormControl<UpdateNetworkSwitchSettingsPutBodyPowerExceptionsPowerType | null | undefined>,

		/**
		 * Serial number of the switch
		 * Required
		 */
		serial: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchSettingsPutBodyPowerExceptionsFormGroup() {
		return new FormGroup<UpdateNetworkSwitchSettingsPutBodyPowerExceptionsFormProperties>({
			powerType: new FormControl<UpdateNetworkSwitchSettingsPutBodyPowerExceptionsPowerType | null | undefined>(undefined, [Validators.required]),
			serial: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateNetworkSwitchSettingsPutBodyPowerExceptionsPowerType { combined = 'combined', redundant = 'redundant', useNetworkSetting = 'useNetworkSetting' }

	export interface UpdateNetworkSwitchSettingsMulticastPutBody {

		/** Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default. */
		defaultSettings?: UpdateNetworkSwitchSettingsMulticastPutBodyDefaultSettings;

		/** Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings. */
		UpdateNetworkSwitchSettingsMulticastPutBodyOverrides?: Array<UpdateNetworkSwitchSettingsMulticastPutBodyOverrides>;
	}
	export interface UpdateNetworkSwitchSettingsMulticastPutBodyFormProperties {
	}
	export function CreateUpdateNetworkSwitchSettingsMulticastPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSwitchSettingsMulticastPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkSwitchSettingsMulticastPutBodyDefaultSettings {

		/** Flood unknown multicast traffic setting for entire network */
		floodUnknownMulticastTrafficEnabled?: boolean | null;

		/** IGMP snooping setting for entire network */
		igmpSnoopingEnabled?: boolean | null;
	}
	export interface UpdateNetworkSwitchSettingsMulticastPutBodyDefaultSettingsFormProperties {

		/** Flood unknown multicast traffic setting for entire network */
		floodUnknownMulticastTrafficEnabled: FormControl<boolean | null | undefined>,

		/** IGMP snooping setting for entire network */
		igmpSnoopingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchSettingsMulticastPutBodyDefaultSettingsFormGroup() {
		return new FormGroup<UpdateNetworkSwitchSettingsMulticastPutBodyDefaultSettingsFormProperties>({
			floodUnknownMulticastTrafficEnabled: new FormControl<boolean | null | undefined>(undefined),
			igmpSnoopingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchSettingsMulticastPutBodyOverrides {

		/**
		 * Flood unknown multicast traffic setting for switches, switch stacks or switch profiles
		 * Required
		 */
		floodUnknownMulticastTrafficEnabled: boolean;

		/**
		 * IGMP snooping setting for switches, switch stacks or switch profiles
		 * Required
		 */
		igmpSnoopingEnabled: boolean;

		/** List of switch stack ids for non-template network */
		stacks?: Array<string>;

		/** List of switch profiles ids for template network */
		switchProfiles?: Array<string>;

		/** List of switch serials for non-template network */
		switches?: Array<string>;
	}
	export interface UpdateNetworkSwitchSettingsMulticastPutBodyOverridesFormProperties {

		/**
		 * Flood unknown multicast traffic setting for switches, switch stacks or switch profiles
		 * Required
		 */
		floodUnknownMulticastTrafficEnabled: FormControl<boolean | null | undefined>,

		/**
		 * IGMP snooping setting for switches, switch stacks or switch profiles
		 * Required
		 */
		igmpSnoopingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchSettingsMulticastPutBodyOverridesFormGroup() {
		return new FormGroup<UpdateNetworkSwitchSettingsMulticastPutBodyOverridesFormProperties>({
			floodUnknownMulticastTrafficEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			igmpSnoopingEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkSwitchSettingsQosRulePostBody {

		/** DSCP tag. Set this to -1 to trust incoming DSCP. Default value is 0 */
		dscp?: number | null;

		/** The destination port of the incoming packet. Applicable only if protocol is TCP or UDP. */
		dstPort?: number | null;

		/** The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 */
		dstPortRange?: string | null;

		/** The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY" */
		protocol?: CreateNetworkSwitchSettingsQosRulePostBodyProtocol | null;

		/** The source port of the incoming packet. Applicable only if protocol is TCP or UDP. */
		srcPort?: number | null;

		/** The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 */
		srcPortRange?: string | null;

		/**
		 * The VLAN of the incoming packet. A null value will match any VLAN.
		 * Required
		 */
		vlan: number;
	}
	export interface CreateNetworkSwitchSettingsQosRulePostBodyFormProperties {

		/** DSCP tag. Set this to -1 to trust incoming DSCP. Default value is 0 */
		dscp: FormControl<number | null | undefined>,

		/** The destination port of the incoming packet. Applicable only if protocol is TCP or UDP. */
		dstPort: FormControl<number | null | undefined>,

		/** The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 */
		dstPortRange: FormControl<string | null | undefined>,

		/** The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY" */
		protocol: FormControl<CreateNetworkSwitchSettingsQosRulePostBodyProtocol | null | undefined>,

		/** The source port of the incoming packet. Applicable only if protocol is TCP or UDP. */
		srcPort: FormControl<number | null | undefined>,

		/** The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 */
		srcPortRange: FormControl<string | null | undefined>,

		/**
		 * The VLAN of the incoming packet. A null value will match any VLAN.
		 * Required
		 */
		vlan: FormControl<number | null | undefined>,
	}
	export function CreateCreateNetworkSwitchSettingsQosRulePostBodyFormGroup() {
		return new FormGroup<CreateNetworkSwitchSettingsQosRulePostBodyFormProperties>({
			dscp: new FormControl<number | null | undefined>(undefined),
			dstPort: new FormControl<number | null | undefined>(undefined),
			dstPortRange: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<CreateNetworkSwitchSettingsQosRulePostBodyProtocol | null | undefined>(undefined),
			srcPort: new FormControl<number | null | undefined>(undefined),
			srcPortRange: new FormControl<string | null | undefined>(undefined),
			vlan: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateNetworkSwitchSettingsQosRulePostBodyProtocol { ANY = 'ANY', TCP = 'TCP', UDP = 'UDP' }

	export interface UpdateNetworkSwitchSettingsQosRulesOrderPutBody {

		/**
		 * A list of quality of service rule IDs arranged in order in which they should be processed by the switch.
		 * Required
		 */
		ruleIds: Array<string>;
	}
	export interface UpdateNetworkSwitchSettingsQosRulesOrderPutBodyFormProperties {
	}
	export function CreateUpdateNetworkSwitchSettingsQosRulesOrderPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSwitchSettingsQosRulesOrderPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkSwitchSettingsQosRulePutBody {

		/** DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0. */
		dscp?: number | null;

		/** The destination port of the incoming packet. Applicable only if protocol is TCP or UDP. */
		dstPort?: number | null;

		/** The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 */
		dstPortRange?: string | null;

		/** The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY". */
		protocol?: CreateNetworkSwitchSettingsQosRulePostBodyProtocol | null;

		/** The source port of the incoming packet. Applicable only if protocol is TCP or UDP. */
		srcPort?: number | null;

		/** The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 */
		srcPortRange?: string | null;

		/** The VLAN of the incoming packet. A null value will match any VLAN. */
		vlan?: number | null;
	}
	export interface UpdateNetworkSwitchSettingsQosRulePutBodyFormProperties {

		/** DSCP tag that should be assigned to incoming packet. Set this to -1 to trust incoming DSCP. Default value is 0. */
		dscp: FormControl<number | null | undefined>,

		/** The destination port of the incoming packet. Applicable only if protocol is TCP or UDP. */
		dstPort: FormControl<number | null | undefined>,

		/** The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 */
		dstPortRange: FormControl<string | null | undefined>,

		/** The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY". */
		protocol: FormControl<CreateNetworkSwitchSettingsQosRulePostBodyProtocol | null | undefined>,

		/** The source port of the incoming packet. Applicable only if protocol is TCP or UDP. */
		srcPort: FormControl<number | null | undefined>,

		/** The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80 */
		srcPortRange: FormControl<string | null | undefined>,

		/** The VLAN of the incoming packet. A null value will match any VLAN. */
		vlan: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchSettingsQosRulePutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSwitchSettingsQosRulePutBodyFormProperties>({
			dscp: new FormControl<number | null | undefined>(undefined),
			dstPort: new FormControl<number | null | undefined>(undefined),
			dstPortRange: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<CreateNetworkSwitchSettingsQosRulePostBodyProtocol | null | undefined>(undefined),
			srcPort: new FormControl<number | null | undefined>(undefined),
			srcPortRange: new FormControl<string | null | undefined>(undefined),
			vlan: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSwitchSettingsStormControlPutBody {

		/** Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration. */
		broadcastThreshold?: number | null;

		/** Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration. */
		multicastThreshold?: number | null;

		/** Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration. */
		unknownUnicastThreshold?: number | null;
	}
	export interface UpdateNetworkSwitchSettingsStormControlPutBodyFormProperties {

		/** Percentage (1 to 99) of total available port bandwidth for broadcast traffic type. Default value 100 percent rate is to clear the configuration. */
		broadcastThreshold: FormControl<number | null | undefined>,

		/** Percentage (1 to 99) of total available port bandwidth for multicast traffic type. Default value 100 percent rate is to clear the configuration. */
		multicastThreshold: FormControl<number | null | undefined>,

		/** Percentage (1 to 99) of total available port bandwidth for unknown unicast (dlf-destination lookup failure) traffic type. Default value 100 percent rate is to clear the configuration. */
		unknownUnicastThreshold: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkSwitchSettingsStormControlPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSwitchSettingsStormControlPutBodyFormProperties>({
			broadcastThreshold: new FormControl<number | null | undefined>(undefined),
			multicastThreshold: new FormControl<number | null | undefined>(undefined),
			unknownUnicastThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSyslogServersPutBody {

		/**
		 * A list of the syslog servers for this network
		 * Required
		 */
		UpdateNetworkSyslogServersPutBodyServers: Array<UpdateNetworkSyslogServersPutBodyServers>;
	}
	export interface UpdateNetworkSyslogServersPutBodyFormProperties {
	}
	export function CreateUpdateNetworkSyslogServersPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSyslogServersPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkSyslogServersPutBodyServers {

		/**
		 * The IP address of the syslog server
		 * Required
		 */
		host: string;

		/**
		 * The port of the syslog server
		 * Required
		 */
		port: number;

		/**
		 * A list of roles for the syslog server. Options (case-insensitive): 'Wireless event log', 'Appliance event log', 'Switch event log', 'Air Marshal events', 'Flows', 'URLs', 'IDS alerts', 'Security events'
		 * Required
		 */
		roles: Array<string>;
	}
	export interface UpdateNetworkSyslogServersPutBodyServersFormProperties {

		/**
		 * The IP address of the syslog server
		 * Required
		 */
		host: FormControl<string | null | undefined>,

		/**
		 * The port of the syslog server
		 * Required
		 */
		port: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkSyslogServersPutBodyServersFormGroup() {
		return new FormGroup<UpdateNetworkSyslogServersPutBodyServersFormProperties>({
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GetNetworkTrafficDeviceType { appliance = 'appliance', combined = 'combined', switch = 'switch', wireless = 'wireless' }

	export interface UpdateNetworkUplinkSettingsPutBody {

		/** A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network) */
		bandwidthLimits?: UpdateNetworkUplinkSettingsPutBodyBandwidthLimits;
	}
	export interface UpdateNetworkUplinkSettingsPutBodyFormProperties {
	}
	export function CreateUpdateNetworkUplinkSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkUplinkSettingsPutBodyFormProperties>({
		});

	}

	export interface UpdateNetworkUplinkSettingsPutBodyBandwidthLimits {

		/** The bandwidth settings for the 'cellular' uplink */
		cellular?: UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsCellular;

		/** The bandwidth settings for the 'wan1' uplink */
		wan1?: UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan1;

		/** The bandwidth settings for the 'wan2' uplink */
		wan2?: UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan2;
	}
	export interface UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsFormProperties {
	}
	export function CreateUpdateNetworkUplinkSettingsPutBodyBandwidthLimitsFormGroup() {
		return new FormGroup<UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsFormProperties>({
		});

	}

	export interface UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsCellular {

		/** The maximum download limit (integer, in Kbps). null indicates no limit */
		limitDown?: number | null;

		/** The maximum upload limit (integer, in Kbps). null indicates no limit */
		limitUp?: number | null;
	}
	export interface UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsCellularFormProperties {

		/** The maximum download limit (integer, in Kbps). null indicates no limit */
		limitDown: FormControl<number | null | undefined>,

		/** The maximum upload limit (integer, in Kbps). null indicates no limit */
		limitUp: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkUplinkSettingsPutBodyBandwidthLimitsCellularFormGroup() {
		return new FormGroup<UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsCellularFormProperties>({
			limitDown: new FormControl<number | null | undefined>(undefined),
			limitUp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan1 {

		/** The maximum download limit (integer, in Kbps). null indicates no limit */
		limitDown?: number | null;

		/** The maximum upload limit (integer, in Kbps). null indicates no limit */
		limitUp?: number | null;
	}
	export interface UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan1FormProperties {

		/** The maximum download limit (integer, in Kbps). null indicates no limit */
		limitDown: FormControl<number | null | undefined>,

		/** The maximum upload limit (integer, in Kbps). null indicates no limit */
		limitUp: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan1FormGroup() {
		return new FormGroup<UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan1FormProperties>({
			limitDown: new FormControl<number | null | undefined>(undefined),
			limitUp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan2 {

		/** The maximum download limit (integer, in Kbps). null indicates no limit */
		limitDown?: number | null;

		/** The maximum upload limit (integer, in Kbps). null indicates no limit */
		limitUp?: number | null;
	}
	export interface UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan2FormProperties {

		/** The maximum download limit (integer, in Kbps). null indicates no limit */
		limitDown: FormControl<number | null | undefined>,

		/** The maximum upload limit (integer, in Kbps). null indicates no limit */
		limitUp: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan2FormGroup() {
		return new FormGroup<UpdateNetworkUplinkSettingsPutBodyBandwidthLimitsWan2FormProperties>({
			limitDown: new FormControl<number | null | undefined>(undefined),
			limitUp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkVlanPostBody {

		/**
		 * The local IP of the appliance on the VLAN
		 * Required
		 */
		applianceIp: string;

		/** The id of the desired group policy to apply to the VLAN */
		groupPolicyId?: string | null;

		/**
		 * The VLAN ID of the new VLAN (must be between 1 and 4094)
		 * Required
		 */
		id: string;

		/**
		 * The name of the new VLAN
		 * Required
		 */
		name: string;

		/**
		 * The subnet of the VLAN
		 * Required
		 */
		subnet: string;
	}
	export interface CreateNetworkVlanPostBodyFormProperties {

		/**
		 * The local IP of the appliance on the VLAN
		 * Required
		 */
		applianceIp: FormControl<string | null | undefined>,

		/** The id of the desired group policy to apply to the VLAN */
		groupPolicyId: FormControl<string | null | undefined>,

		/**
		 * The VLAN ID of the new VLAN (must be between 1 and 4094)
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the new VLAN
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The subnet of the VLAN
		 * Required
		 */
		subnet: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkVlanPostBodyFormGroup() {
		return new FormGroup<CreateNetworkVlanPostBodyFormProperties>({
			applianceIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subnet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkVlanPutBody {

		/** The local IP of the appliance on the VLAN */
		applianceIp?: string | null;

		/** DHCP boot option for boot filename */
		dhcpBootFilename?: string | null;

		/** DHCP boot option to direct boot clients to the server to load the boot file from */
		dhcpBootNextServer?: string | null;

		/** Use DHCP boot options specified in other properties */
		dhcpBootOptionsEnabled?: boolean | null;

		/** The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests' */
		dhcpHandling?: UpdateNetworkVlanPutBodyDhcpHandling | null;

		/** The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week' */
		dhcpLeaseTime?: UpdateNetworkVlanPutBodyDhcpLeaseTime | null;

		/** The list of DHCP options that will be included in DHCP responses. Each object in the list should have "code", "type", and "value" properties. */
		UpdateNetworkVlanPutBodyDhcpOptions?: Array<UpdateNetworkVlanPutBodyDhcpOptions>;

		/** The IPs of the DHCP servers that DHCP requests should be relayed to */
		dhcpRelayServerIps?: Array<string>;

		/** The DNS nameservers used for DHCP responses, either "upstream_dns", "google_dns", "opendns", or a newline seperated string of IP addresses or domain names */
		dnsNameservers?: string | null;

		/** The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details. */
		fixedIpAssignments?: string | null;

		/** The id of the desired group policy to apply to the VLAN */
		groupPolicyId?: string | null;

		/** The name of the VLAN */
		name?: string | null;

		/** The DHCP reserved IP ranges on the VLAN */
		UpdateNetworkVlanPutBodyReservedIpRanges?: Array<UpdateNetworkVlanPutBodyReservedIpRanges>;

		/** The subnet of the VLAN */
		subnet?: string | null;

		/** The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN */
		vpnNatSubnet?: string | null;
	}
	export interface UpdateNetworkVlanPutBodyFormProperties {

		/** The local IP of the appliance on the VLAN */
		applianceIp: FormControl<string | null | undefined>,

		/** DHCP boot option for boot filename */
		dhcpBootFilename: FormControl<string | null | undefined>,

		/** DHCP boot option to direct boot clients to the server to load the boot file from */
		dhcpBootNextServer: FormControl<string | null | undefined>,

		/** Use DHCP boot options specified in other properties */
		dhcpBootOptionsEnabled: FormControl<boolean | null | undefined>,

		/** The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests' */
		dhcpHandling: FormControl<UpdateNetworkVlanPutBodyDhcpHandling | null | undefined>,

		/** The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week' */
		dhcpLeaseTime: FormControl<UpdateNetworkVlanPutBodyDhcpLeaseTime | null | undefined>,

		/** The DNS nameservers used for DHCP responses, either "upstream_dns", "google_dns", "opendns", or a newline seperated string of IP addresses or domain names */
		dnsNameservers: FormControl<string | null | undefined>,

		/** The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details. */
		fixedIpAssignments: FormControl<string | null | undefined>,

		/** The id of the desired group policy to apply to the VLAN */
		groupPolicyId: FormControl<string | null | undefined>,

		/** The name of the VLAN */
		name: FormControl<string | null | undefined>,

		/** The subnet of the VLAN */
		subnet: FormControl<string | null | undefined>,

		/** The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN */
		vpnNatSubnet: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkVlanPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkVlanPutBodyFormProperties>({
			applianceIp: new FormControl<string | null | undefined>(undefined),
			dhcpBootFilename: new FormControl<string | null | undefined>(undefined),
			dhcpBootNextServer: new FormControl<string | null | undefined>(undefined),
			dhcpBootOptionsEnabled: new FormControl<boolean | null | undefined>(undefined),
			dhcpHandling: new FormControl<UpdateNetworkVlanPutBodyDhcpHandling | null | undefined>(undefined),
			dhcpLeaseTime: new FormControl<UpdateNetworkVlanPutBodyDhcpLeaseTime | null | undefined>(undefined),
			dnsNameservers: new FormControl<string | null | undefined>(undefined),
			fixedIpAssignments: new FormControl<string | null | undefined>(undefined),
			groupPolicyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
			vpnNatSubnet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkVlanPutBodyDhcpHandling { 'Do not respond to DHCP requests' = 'Do not respond to DHCP requests', 'Relay DHCP to another server' = 'Relay DHCP to another server', 'Run a DHCP server' = 'Run a DHCP server' }

	export enum UpdateNetworkVlanPutBodyDhcpLeaseTime { '1 day' = '1 day', '1 hour' = '1 hour', '1 week' = '1 week', '12 hours' = '12 hours', '30 minutes' = '30 minutes', '4 hours' = '4 hours' }

	export interface UpdateNetworkVlanPutBodyDhcpOptions {

		/**
		 * The code for the DHCP option. This should be an integer between 2 and 254.
		 * Required
		 */
		code: string;

		/**
		 * The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'
		 * Required
		 */
		type: UpdateNetworkVlanPutBodyDhcpOptionsType;

		/**
		 * The value for the DHCP option
		 * Required
		 */
		value: string;
	}
	export interface UpdateNetworkVlanPutBodyDhcpOptionsFormProperties {

		/**
		 * The code for the DHCP option. This should be an integer between 2 and 254.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'
		 * Required
		 */
		type: FormControl<UpdateNetworkVlanPutBodyDhcpOptionsType | null | undefined>,

		/**
		 * The value for the DHCP option
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkVlanPutBodyDhcpOptionsFormGroup() {
		return new FormGroup<UpdateNetworkVlanPutBodyDhcpOptionsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<UpdateNetworkVlanPutBodyDhcpOptionsType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateNetworkVlanPutBodyDhcpOptionsType { hex = 'hex', integer = 'integer', ip = 'ip', text = 'text' }

	export interface UpdateNetworkVlanPutBodyReservedIpRanges {

		/**
		 * A text comment for the reserved range
		 * Required
		 */
		comment: string;

		/**
		 * The last IP in the reserved range
		 * Required
		 */
		end: string;

		/**
		 * The first IP in the reserved range
		 * Required
		 */
		start: string;
	}
	export interface UpdateNetworkVlanPutBodyReservedIpRangesFormProperties {

		/**
		 * A text comment for the reserved range
		 * Required
		 */
		comment: FormControl<string | null | undefined>,

		/**
		 * The last IP in the reserved range
		 * Required
		 */
		end: FormControl<string | null | undefined>,

		/**
		 * The first IP in the reserved range
		 * Required
		 */
		start: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkVlanPutBodyReservedIpRangesFormGroup() {
		return new FormGroup<UpdateNetworkVlanPutBodyReservedIpRangesFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			end: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkVlansEnabledStatePutBody {

		/**
		 * Boolean indicating whether to enable (true) or disable (false) VLANs for the network
		 * Required
		 */
		enabled: boolean;
	}
	export interface UpdateNetworkVlansEnabledStatePutBodyFormProperties {

		/**
		 * Boolean indicating whether to enable (true) or disable (false) VLANs for the network
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkVlansEnabledStatePutBodyFormGroup() {
		return new FormGroup<UpdateNetworkVlansEnabledStatePutBodyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkWarmSpareSettingsPutBody {

		/**
		 * Enable warm spare
		 * Required
		 */
		enabled: boolean;

		/** Serial number of the warm spare appliance */
		spareSerial?: string | null;

		/** Uplink mode, either virtual or public */
		uplinkMode?: string | null;

		/** The WAN 1 shared IP */
		virtualIp1?: string | null;

		/** The WAN 2 shared IP */
		virtualIp2?: string | null;
	}
	export interface UpdateNetworkWarmSpareSettingsPutBodyFormProperties {

		/**
		 * Enable warm spare
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/** Serial number of the warm spare appliance */
		spareSerial: FormControl<string | null | undefined>,

		/** Uplink mode, either virtual or public */
		uplinkMode: FormControl<string | null | undefined>,

		/** The WAN 1 shared IP */
		virtualIp1: FormControl<string | null | undefined>,

		/** The WAN 2 shared IP */
		virtualIp2: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkWarmSpareSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkWarmSpareSettingsPutBodyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			spareSerial: new FormControl<string | null | undefined>(undefined),
			uplinkMode: new FormControl<string | null | undefined>(undefined),
			virtualIp1: new FormControl<string | null | undefined>(undefined),
			virtualIp2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkWirelessRfProfilePostBody {

		/** Settings that will be enabled if selectionType is set to 'ap'. */
		apBandSettings?: CreateNetworkWirelessRfProfilePostBodyApBandSettings;

		/**
		 * Band selection can be set to either 'ssid' or 'ap'. This param is required on creation.
		 * Required
		 */
		bandSelectionType: CreateNetworkWirelessRfProfilePostBodyBandSelectionType;

		/** Steers client to best available access point. Can be either true or false. Defaults to true. */
		clientBalancingEnabled?: boolean | null;

		/** Settings related to 5Ghz band */
		fiveGhzSettings?: CreateNetworkWirelessRfProfilePostBodyFiveGhzSettings;

		/** Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band. */
		minBitrateType?: CreateNetworkWirelessRfProfilePostBodyMinBitrateType | null;

		/**
		 * The name of the new profile. Must be unique. This param is required on creation.
		 * Required
		 */
		name: string;

		/** Settings related to 2.4Ghz band */
		twoFourGhzSettings?: CreateNetworkWirelessRfProfilePostBodyTwoFourGhzSettings;
	}
	export interface CreateNetworkWirelessRfProfilePostBodyFormProperties {

		/**
		 * Band selection can be set to either 'ssid' or 'ap'. This param is required on creation.
		 * Required
		 */
		bandSelectionType: FormControl<CreateNetworkWirelessRfProfilePostBodyBandSelectionType | null | undefined>,

		/** Steers client to best available access point. Can be either true or false. Defaults to true. */
		clientBalancingEnabled: FormControl<boolean | null | undefined>,

		/** Minimum bitrate can be set to either 'band' or 'ssid'. Defaults to band. */
		minBitrateType: FormControl<CreateNetworkWirelessRfProfilePostBodyMinBitrateType | null | undefined>,

		/**
		 * The name of the new profile. Must be unique. This param is required on creation.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkWirelessRfProfilePostBodyFormGroup() {
		return new FormGroup<CreateNetworkWirelessRfProfilePostBodyFormProperties>({
			bandSelectionType: new FormControl<CreateNetworkWirelessRfProfilePostBodyBandSelectionType | null | undefined>(undefined, [Validators.required]),
			clientBalancingEnabled: new FormControl<boolean | null | undefined>(undefined),
			minBitrateType: new FormControl<CreateNetworkWirelessRfProfilePostBodyMinBitrateType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkWirelessRfProfilePostBodyApBandSettings {

		/** Choice between 'dual', '2.4ghz' or '5ghz'. Defaults to dual. */
		bandOperationMode?: CreateNetworkWirelessRfProfilePostBodyApBandSettingsBandOperationMode | null;

		/** Steers client to most open band. Can be either true or false. Defaults to true. */
		bandSteeringEnabled?: boolean | null;
	}
	export interface CreateNetworkWirelessRfProfilePostBodyApBandSettingsFormProperties {

		/** Choice between 'dual', '2.4ghz' or '5ghz'. Defaults to dual. */
		bandOperationMode: FormControl<CreateNetworkWirelessRfProfilePostBodyApBandSettingsBandOperationMode | null | undefined>,

		/** Steers client to most open band. Can be either true or false. Defaults to true. */
		bandSteeringEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateNetworkWirelessRfProfilePostBodyApBandSettingsFormGroup() {
		return new FormGroup<CreateNetworkWirelessRfProfilePostBodyApBandSettingsFormProperties>({
			bandOperationMode: new FormControl<CreateNetworkWirelessRfProfilePostBodyApBandSettingsBandOperationMode | null | undefined>(undefined),
			bandSteeringEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CreateNetworkWirelessRfProfilePostBodyApBandSettingsBandOperationMode { '2.4ghz' = '2.4ghz', '5ghz' = '5ghz', dual = 'dual' }

	export enum CreateNetworkWirelessRfProfilePostBodyBandSelectionType { ap = 'ap', ssid = 'ssid' }

	export interface CreateNetworkWirelessRfProfilePostBodyFiveGhzSettings {

		/** Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'. Defaults to auto. */
		channelWidth?: string | null;

		/** Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 30. */
		maxPower?: number | null;

		/** Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'. Defaults to 12. */
		minBitrate?: number | null;

		/** Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 8. */
		minPower?: number | null;

		/** The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default. */
		rxsop?: number | null;

		/** Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'.Defaults to [36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 149, 153, 157, 161, 165]. */
		validAutoChannels?: Array<number>;
	}
	export interface CreateNetworkWirelessRfProfilePostBodyFiveGhzSettingsFormProperties {

		/** Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'. Defaults to auto. */
		channelWidth: FormControl<string | null | undefined>,

		/** Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 30. */
		maxPower: FormControl<number | null | undefined>,

		/** Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'. Defaults to 12. */
		minBitrate: FormControl<number | null | undefined>,

		/** Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30. Defaults to 8. */
		minPower: FormControl<number | null | undefined>,

		/** The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default. */
		rxsop: FormControl<number | null | undefined>,
	}
	export function CreateCreateNetworkWirelessRfProfilePostBodyFiveGhzSettingsFormGroup() {
		return new FormGroup<CreateNetworkWirelessRfProfilePostBodyFiveGhzSettingsFormProperties>({
			channelWidth: new FormControl<string | null | undefined>(undefined),
			maxPower: new FormControl<number | null | undefined>(undefined),
			minBitrate: new FormControl<number | null | undefined>(undefined),
			minPower: new FormControl<number | null | undefined>(undefined),
			rxsop: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreateNetworkWirelessRfProfilePostBodyMinBitrateType { band = 'band', ssid = 'ssid' }

	export interface CreateNetworkWirelessRfProfilePostBodyTwoFourGhzSettings {

		/** Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true. */
		axEnabled?: boolean | null;

		/** Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 30. */
		maxPower?: number | null;

		/** Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'. Defaults to 11. */
		minBitrate?: number | null;

		/** Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 5. */
		minPower?: number | null;

		/** The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default. */
		rxsop?: number | null;

		/** Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'. Defaults to [1, 6, 11]. */
		validAutoChannels?: Array<number>;
	}
	export interface CreateNetworkWirelessRfProfilePostBodyTwoFourGhzSettingsFormProperties {

		/** Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. Defaults to true. */
		axEnabled: FormControl<boolean | null | undefined>,

		/** Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 30. */
		maxPower: FormControl<number | null | undefined>,

		/** Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'. Defaults to 11. */
		minBitrate: FormControl<number | null | undefined>,

		/** Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. Defaults to 5. */
		minPower: FormControl<number | null | undefined>,

		/** The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default. */
		rxsop: FormControl<number | null | undefined>,
	}
	export function CreateCreateNetworkWirelessRfProfilePostBodyTwoFourGhzSettingsFormGroup() {
		return new FormGroup<CreateNetworkWirelessRfProfilePostBodyTwoFourGhzSettingsFormProperties>({
			axEnabled: new FormControl<boolean | null | undefined>(undefined),
			maxPower: new FormControl<number | null | undefined>(undefined),
			minBitrate: new FormControl<number | null | undefined>(undefined),
			minPower: new FormControl<number | null | undefined>(undefined),
			rxsop: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkWirelessRfProfilePutBody {

		/** Settings that will be enabled if selectionType is set to 'ap'. */
		apBandSettings?: UpdateNetworkWirelessRfProfilePutBodyApBandSettings;

		/** Band selection can be set to either 'ssid' or 'ap'. */
		bandSelectionType?: CreateNetworkWirelessRfProfilePostBodyBandSelectionType | null;

		/** Steers client to best available access point. Can be either true or false. */
		clientBalancingEnabled?: boolean | null;

		/** Settings related to 5Ghz band */
		fiveGhzSettings?: UpdateNetworkWirelessRfProfilePutBodyFiveGhzSettings;

		/** Minimum bitrate can be set to either 'band' or 'ssid'. */
		minBitrateType?: CreateNetworkWirelessRfProfilePostBodyMinBitrateType | null;

		/** The name of the new profile. Must be unique. */
		name?: string | null;

		/** Settings related to 2.4Ghz band */
		twoFourGhzSettings?: UpdateNetworkWirelessRfProfilePutBodyTwoFourGhzSettings;
	}
	export interface UpdateNetworkWirelessRfProfilePutBodyFormProperties {

		/** Band selection can be set to either 'ssid' or 'ap'. */
		bandSelectionType: FormControl<CreateNetworkWirelessRfProfilePostBodyBandSelectionType | null | undefined>,

		/** Steers client to best available access point. Can be either true or false. */
		clientBalancingEnabled: FormControl<boolean | null | undefined>,

		/** Minimum bitrate can be set to either 'band' or 'ssid'. */
		minBitrateType: FormControl<CreateNetworkWirelessRfProfilePostBodyMinBitrateType | null | undefined>,

		/** The name of the new profile. Must be unique. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkWirelessRfProfilePutBodyFormGroup() {
		return new FormGroup<UpdateNetworkWirelessRfProfilePutBodyFormProperties>({
			bandSelectionType: new FormControl<CreateNetworkWirelessRfProfilePostBodyBandSelectionType | null | undefined>(undefined),
			clientBalancingEnabled: new FormControl<boolean | null | undefined>(undefined),
			minBitrateType: new FormControl<CreateNetworkWirelessRfProfilePostBodyMinBitrateType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkWirelessRfProfilePutBodyApBandSettings {

		/** Choice between 'dual', '2.4ghz' or '5ghz'. */
		bandOperationMode?: CreateNetworkWirelessRfProfilePostBodyApBandSettingsBandOperationMode | null;

		/** Steers client to most open band. Can be either true or false. */
		bandSteeringEnabled?: boolean | null;
	}
	export interface UpdateNetworkWirelessRfProfilePutBodyApBandSettingsFormProperties {

		/** Choice between 'dual', '2.4ghz' or '5ghz'. */
		bandOperationMode: FormControl<CreateNetworkWirelessRfProfilePostBodyApBandSettingsBandOperationMode | null | undefined>,

		/** Steers client to most open band. Can be either true or false. */
		bandSteeringEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateNetworkWirelessRfProfilePutBodyApBandSettingsFormGroup() {
		return new FormGroup<UpdateNetworkWirelessRfProfilePutBodyApBandSettingsFormProperties>({
			bandOperationMode: new FormControl<CreateNetworkWirelessRfProfilePostBodyApBandSettingsBandOperationMode | null | undefined>(undefined),
			bandSteeringEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkWirelessRfProfilePutBodyFiveGhzSettings {

		/** Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'. */
		channelWidth?: string | null;

		/** Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30. */
		maxPower?: number | null;

		/** Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'. */
		minBitrate?: number | null;

		/** Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30. */
		minPower?: number | null;

		/** The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default. */
		rxsop?: number | null;

		/** Sets valid auto channels for 5Ghz band. Can be one of '36', '40', '44', '48', '52', '56', '60', '64', '100', '104', '108', '112', '116', '120', '124', '128', '132', '136', '140', '144', '149', '153', '157', '161' or '165'. */
		validAutoChannels?: Array<number>;
	}
	export interface UpdateNetworkWirelessRfProfilePutBodyFiveGhzSettingsFormProperties {

		/** Sets channel width (MHz) for 5Ghz band. Can be one of 'auto', '20', '40' or '80'. */
		channelWidth: FormControl<string | null | undefined>,

		/** Sets max power (dBm) of 5Ghz band. Can be integer between 2 and 30. */
		maxPower: FormControl<number | null | undefined>,

		/** Sets min bitrate (Mbps) of 5Ghz band. Can be one of '6', '9', '12', '18', '24', '36', '48' or '54'. */
		minBitrate: FormControl<number | null | undefined>,

		/** Sets min power (dBm) of 5Ghz band. Can be integer between 2 and 30. */
		minPower: FormControl<number | null | undefined>,

		/** The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default. */
		rxsop: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkWirelessRfProfilePutBodyFiveGhzSettingsFormGroup() {
		return new FormGroup<UpdateNetworkWirelessRfProfilePutBodyFiveGhzSettingsFormProperties>({
			channelWidth: new FormControl<string | null | undefined>(undefined),
			maxPower: new FormControl<number | null | undefined>(undefined),
			minBitrate: new FormControl<number | null | undefined>(undefined),
			minPower: new FormControl<number | null | undefined>(undefined),
			rxsop: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkWirelessRfProfilePutBodyTwoFourGhzSettings {

		/** Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. */
		axEnabled?: boolean | null;

		/** Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. */
		maxPower?: number | null;

		/** Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'. */
		minBitrate?: number | null;

		/** Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. */
		minPower?: number | null;

		/** The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default. */
		rxsop?: number | null;

		/** Sets valid auto channels for 2.4Ghz band. Can be one of '1', '6' or '11'. */
		validAutoChannels?: Array<number>;
	}
	export interface UpdateNetworkWirelessRfProfilePutBodyTwoFourGhzSettingsFormProperties {

		/** Determines whether ax radio on 2.4Ghz band is on or off. Can be either true or false. If false, we highly recommend disabling band steering. */
		axEnabled: FormControl<boolean | null | undefined>,

		/** Sets max power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. */
		maxPower: FormControl<number | null | undefined>,

		/** Sets min bitrate (Mbps) of 2.4Ghz band. Can be one of '1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54'. */
		minBitrate: FormControl<number | null | undefined>,

		/** Sets min power (dBm) of 2.4Ghz band. Can be integer between 2 and 30. */
		minPower: FormControl<number | null | undefined>,

		/** The RX-SOP level controls the sensitivity of the radio. It is strongly recommended to use RX-SOP only after consulting a wireless expert. RX-SOP can be configured in the range of -65 to -95 (dBm). A value of null will reset this to the default. */
		rxsop: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNetworkWirelessRfProfilePutBodyTwoFourGhzSettingsFormGroup() {
		return new FormGroup<UpdateNetworkWirelessRfProfilePutBodyTwoFourGhzSettingsFormProperties>({
			axEnabled: new FormControl<boolean | null | undefined>(undefined),
			maxPower: new FormControl<number | null | undefined>(undefined),
			minBitrate: new FormControl<number | null | undefined>(undefined),
			minPower: new FormControl<number | null | undefined>(undefined),
			rxsop: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkWirelessSettingsPutBody {

		/** Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode) */
		ipv6BridgeEnabled?: boolean | null;

		/** Toggle for enabling or disabling LED lights on all APs in the network (making them run dark) */
		ledLightsOn?: boolean | null;

		/** Toggle for enabling or disabling location analytics for your network */
		locationAnalyticsEnabled?: boolean | null;

		/** Toggle for enabling or disabling meshing in a network */
		meshingEnabled?: boolean | null;

		/** The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher' */
		upgradeStrategy?: UpdateNetworkWirelessSettingsPutBodyUpgradeStrategy | null;
	}
	export interface UpdateNetworkWirelessSettingsPutBodyFormProperties {

		/** Toggle for enabling or disabling IPv6 bridging in a network (Note: if enabled, SSIDs must also be configured to use bridge mode) */
		ipv6BridgeEnabled: FormControl<boolean | null | undefined>,

		/** Toggle for enabling or disabling LED lights on all APs in the network (making them run dark) */
		ledLightsOn: FormControl<boolean | null | undefined>,

		/** Toggle for enabling or disabling location analytics for your network */
		locationAnalyticsEnabled: FormControl<boolean | null | undefined>,

		/** Toggle for enabling or disabling meshing in a network */
		meshingEnabled: FormControl<boolean | null | undefined>,

		/** The upgrade strategy to apply to the network. Must be one of 'minimizeUpgradeTime' or 'minimizeClientDowntime'. Requires firmware version MR 26.8 or higher' */
		upgradeStrategy: FormControl<UpdateNetworkWirelessSettingsPutBodyUpgradeStrategy | null | undefined>,
	}
	export function CreateUpdateNetworkWirelessSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkWirelessSettingsPutBodyFormProperties>({
			ipv6BridgeEnabled: new FormControl<boolean | null | undefined>(undefined),
			ledLightsOn: new FormControl<boolean | null | undefined>(undefined),
			locationAnalyticsEnabled: new FormControl<boolean | null | undefined>(undefined),
			meshingEnabled: new FormControl<boolean | null | undefined>(undefined),
			upgradeStrategy: new FormControl<UpdateNetworkWirelessSettingsPutBodyUpgradeStrategy | null | undefined>(undefined),
		});

	}

	export enum UpdateNetworkWirelessSettingsPutBodyUpgradeStrategy { minimizeClientDowntime = 'minimizeClientDowntime', minimizeUpgradeTime = 'minimizeUpgradeTime' }

	export interface LockNetworkSmDevicesPutBody {

		/** The ids of the devices to be locked. */
		ids?: string | null;

		/** The pin number for locking macOS devices (a six digit number). Required only for macOS devices. */
		pin?: number | null;

		/** The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be wiped. */
		scope?: string | null;

		/** The serials of the devices to be locked. */
		serials?: string | null;

		/** The wifiMacs of the devices to be locked. */
		wifiMacs?: string | null;
	}
	export interface LockNetworkSmDevicesPutBodyFormProperties {

		/** The ids of the devices to be locked. */
		ids: FormControl<string | null | undefined>,

		/** The pin number for locking macOS devices (a six digit number). Required only for macOS devices. */
		pin: FormControl<number | null | undefined>,

		/** The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be wiped. */
		scope: FormControl<string | null | undefined>,

		/** The serials of the devices to be locked. */
		serials: FormControl<string | null | undefined>,

		/** The wifiMacs of the devices to be locked. */
		wifiMacs: FormControl<string | null | undefined>,
	}
	export function CreateLockNetworkSmDevicesPutBodyFormGroup() {
		return new FormGroup<LockNetworkSmDevicesPutBodyFormProperties>({
			ids: new FormControl<string | null | undefined>(undefined),
			pin: new FormControl<number | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			serials: new FormControl<string | null | undefined>(undefined),
			wifiMacs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetOrganizationActionBatchesStatus { completed = 'completed', failed = 'failed', pending = 'pending' }

	export interface CreateOrganizationActionBatchPostBody {

		/**
		 * A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>)
		 * Required
		 */
		CreateOrganizationActionBatchPostBodyActions: Array<CreateOrganizationActionBatchPostBodyActions>;

		/** Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false. */
		confirmed?: boolean | null;

		/** Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false. */
		synchronous?: boolean | null;
	}
	export interface CreateOrganizationActionBatchPostBodyFormProperties {

		/** Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false. */
		confirmed: FormControl<boolean | null | undefined>,

		/** Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false. */
		synchronous: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateOrganizationActionBatchPostBodyFormGroup() {
		return new FormGroup<CreateOrganizationActionBatchPostBodyFormProperties>({
			confirmed: new FormControl<boolean | null | undefined>(undefined),
			synchronous: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateOrganizationActionBatchPostBodyActions {

		/** The body of the action */
		body?: string | null;

		/**
		 * The operation to be used
		 * Required
		 */
		operation: string;

		/**
		 * Unique identifier for the resource to be acted on
		 * Required
		 */
		resource: string;
	}
	export interface CreateOrganizationActionBatchPostBodyActionsFormProperties {

		/** The body of the action */
		body: FormControl<string | null | undefined>,

		/**
		 * The operation to be used
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the resource to be acted on
		 * Required
		 */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrganizationActionBatchPostBodyActionsFormGroup() {
		return new FormGroup<CreateOrganizationActionBatchPostBodyActionsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationActionBatchPutBody {

		/** A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true. */
		confirmed?: boolean | null;

		/** Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. */
		synchronous?: boolean | null;
	}
	export interface UpdateOrganizationActionBatchPutBodyFormProperties {

		/** A boolean representing whether or not the batch has been confirmed. This property cannot be unset once it is true. */
		confirmed: FormControl<boolean | null | undefined>,

		/** Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. */
		synchronous: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationActionBatchPutBodyFormGroup() {
		return new FormGroup<UpdateOrganizationActionBatchPutBodyFormProperties>({
			confirmed: new FormControl<boolean | null | undefined>(undefined),
			synchronous: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateOrganizationAdminPostBody {

		/** The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication */
		authenticationMethod?: CreateOrganizationAdminPostBodyAuthenticationMethod | null;

		/**
		 * The email of the dashboard administrator. This attribute can not be updated.
		 * Required
		 */
		email: string;

		/**
		 * The name of the dashboard administrator
		 * Required
		 */
		name: string;

		/** The list of networks that the dashboard administrator has privileges on */
		CreateOrganizationAdminPostBodyNetworks?: Array<CreateOrganizationAdminPostBodyNetworks>;

		/**
		 * The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
		 * Required
		 */
		orgAccess: CreateOrganizationAdminPostBodyOrgAccess;

		/** The list of tags that the dashboard administrator has privileges on */
		CreateOrganizationAdminPostBodyTags?: Array<CreateOrganizationAdminPostBodyTags>;
	}
	export interface CreateOrganizationAdminPostBodyFormProperties {

		/** The method of authentication the user will use to sign in to the Meraki dashboard. Can be one of 'Email' or 'Cisco SecureX Sign-On'. The default is Email authentication */
		authenticationMethod: FormControl<CreateOrganizationAdminPostBodyAuthenticationMethod | null | undefined>,

		/**
		 * The email of the dashboard administrator. This attribute can not be updated.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * The name of the dashboard administrator
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none'
		 * Required
		 */
		orgAccess: FormControl<CreateOrganizationAdminPostBodyOrgAccess | null | undefined>,
	}
	export function CreateCreateOrganizationAdminPostBodyFormGroup() {
		return new FormGroup<CreateOrganizationAdminPostBodyFormProperties>({
			authenticationMethod: new FormControl<CreateOrganizationAdminPostBodyAuthenticationMethod | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgAccess: new FormControl<CreateOrganizationAdminPostBodyOrgAccess | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateOrganizationAdminPostBodyAuthenticationMethod { 'Cisco SecureX Sign-On' = 'Cisco SecureX Sign-On', Email = 'Email' }

	export interface CreateOrganizationAdminPostBodyNetworks {

		/**
		 * The privilege of the dashboard administrator on the network
		 * Required
		 */
		access: string;

		/**
		 * The network ID
		 * Required
		 */
		id: string;
	}
	export interface CreateOrganizationAdminPostBodyNetworksFormProperties {

		/**
		 * The privilege of the dashboard administrator on the network
		 * Required
		 */
		access: FormControl<string | null | undefined>,

		/**
		 * The network ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrganizationAdminPostBodyNetworksFormGroup() {
		return new FormGroup<CreateOrganizationAdminPostBodyNetworksFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateOrganizationAdminPostBodyOrgAccess { enterprise = 'enterprise', full = 'full', none = 'none', 'read-only' = 'read-only' }

	export interface CreateOrganizationAdminPostBodyTags {

		/**
		 * The privilege of the dashboard administrator on the tag
		 * Required
		 */
		access: string;

		/**
		 * The name of the tag
		 * Required
		 */
		tag: string;
	}
	export interface CreateOrganizationAdminPostBodyTagsFormProperties {

		/**
		 * The privilege of the dashboard administrator on the tag
		 * Required
		 */
		access: FormControl<string | null | undefined>,

		/**
		 * The name of the tag
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrganizationAdminPostBodyTagsFormGroup() {
		return new FormGroup<CreateOrganizationAdminPostBodyTagsFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationAdminPutBody {

		/** The name of the dashboard administrator */
		name?: string | null;

		/** The list of networks that the dashboard administrator has privileges on */
		UpdateOrganizationAdminPutBodyNetworks?: Array<UpdateOrganizationAdminPutBodyNetworks>;

		/** The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none' */
		orgAccess?: CreateOrganizationAdminPostBodyOrgAccess | null;

		/** The list of tags that the dashboard administrator has privileges on */
		UpdateOrganizationAdminPutBodyTags?: Array<UpdateOrganizationAdminPutBodyTags>;
	}
	export interface UpdateOrganizationAdminPutBodyFormProperties {

		/** The name of the dashboard administrator */
		name: FormControl<string | null | undefined>,

		/** The privilege of the dashboard administrator on the organization. Can be one of 'full', 'read-only', 'enterprise' or 'none' */
		orgAccess: FormControl<CreateOrganizationAdminPostBodyOrgAccess | null | undefined>,
	}
	export function CreateUpdateOrganizationAdminPutBodyFormGroup() {
		return new FormGroup<UpdateOrganizationAdminPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			orgAccess: new FormControl<CreateOrganizationAdminPostBodyOrgAccess | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationAdminPutBodyNetworks {

		/**
		 * The privilege of the dashboard administrator on the network
		 * Required
		 */
		access: string;

		/**
		 * The network ID
		 * Required
		 */
		id: string;
	}
	export interface UpdateOrganizationAdminPutBodyNetworksFormProperties {

		/**
		 * The privilege of the dashboard administrator on the network
		 * Required
		 */
		access: FormControl<string | null | undefined>,

		/**
		 * The network ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOrganizationAdminPutBodyNetworksFormGroup() {
		return new FormGroup<UpdateOrganizationAdminPutBodyNetworksFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationAdminPutBodyTags {

		/**
		 * The privilege of the dashboard administrator on the tag
		 * Required
		 */
		access: string;

		/**
		 * The name of the tag
		 * Required
		 */
		tag: string;
	}
	export interface UpdateOrganizationAdminPutBodyTagsFormProperties {

		/**
		 * The privilege of the dashboard administrator on the tag
		 * Required
		 */
		access: FormControl<string | null | undefined>,

		/**
		 * The name of the tag
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOrganizationAdminPutBodyTagsFormGroup() {
		return new FormGroup<UpdateOrganizationAdminPutBodyTagsFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClaimIntoOrganizationPostBody {

		/** The licenses that should be claimed */
		ClaimIntoOrganizationPostBodyLicenses?: Array<ClaimIntoOrganizationPostBodyLicenses>;

		/** The numbers of the orders that should be claimed */
		orders?: Array<string>;

		/** The serials of the devices that should be claimed */
		serials?: Array<string>;
	}
	export interface ClaimIntoOrganizationPostBodyFormProperties {
	}
	export function CreateClaimIntoOrganizationPostBodyFormGroup() {
		return new FormGroup<ClaimIntoOrganizationPostBodyFormProperties>({
		});

	}

	export interface ClaimIntoOrganizationPostBodyLicenses {

		/**
		 * The key of the license
		 * Required
		 */
		key: string;

		/** Either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. Defaults to 'addDevices'. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. This parameter is legacy and does not apply to organizations with per-device licensing enabled. */
		mode?: ClaimIntoOrganizationPostBodyLicensesMode | null;
	}
	export interface ClaimIntoOrganizationPostBodyLicensesFormProperties {

		/**
		 * The key of the license
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/** Either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. Defaults to 'addDevices'. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. This parameter is legacy and does not apply to organizations with per-device licensing enabled. */
		mode: FormControl<ClaimIntoOrganizationPostBodyLicensesMode | null | undefined>,
	}
	export function CreateClaimIntoOrganizationPostBodyLicensesFormGroup() {
		return new FormGroup<ClaimIntoOrganizationPostBodyLicensesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mode: new FormControl<ClaimIntoOrganizationPostBodyLicensesMode | null | undefined>(undefined),
		});

	}

	export enum ClaimIntoOrganizationPostBodyLicensesMode { addDevices = 'addDevices', renew = 'renew' }

	export interface CloneOrganizationPostBody {

		/**
		 * The name of the new organization
		 * Required
		 */
		name: string;
	}
	export interface CloneOrganizationPostBodyFormProperties {

		/**
		 * The name of the new organization
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCloneOrganizationPostBodyFormGroup() {
		return new FormGroup<CloneOrganizationPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GetOrganizationLicensesState { active = 'active', expired = 'expired', expiring = 'expiring', recentlyQueued = 'recentlyQueued', unused = 'unused', unusedActive = 'unusedActive' }

	export interface AssignOrganizationLicensesSeatsPostBody {

		/**
		 * The ID of the SM license to assign seats from
		 * Required
		 */
		licenseId: string;

		/**
		 * The ID of the SM network to assign the seats to
		 * Required
		 */
		networkId: string;

		/**
		 * The number of seats to assign to the SM network. Must be less than or equal to the total number of seats of the license
		 * Required
		 */
		seatCount: number;
	}
	export interface AssignOrganizationLicensesSeatsPostBodyFormProperties {

		/**
		 * The ID of the SM license to assign seats from
		 * Required
		 */
		licenseId: FormControl<string | null | undefined>,

		/**
		 * The ID of the SM network to assign the seats to
		 * Required
		 */
		networkId: FormControl<string | null | undefined>,

		/**
		 * The number of seats to assign to the SM network. Must be less than or equal to the total number of seats of the license
		 * Required
		 */
		seatCount: FormControl<number | null | undefined>,
	}
	export function CreateAssignOrganizationLicensesSeatsPostBodyFormGroup() {
		return new FormGroup<AssignOrganizationLicensesSeatsPostBodyFormProperties>({
			licenseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			networkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			seatCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MoveOrganizationLicensesSeatsPostBody {

		/**
		 * The ID of the organization to move the SM seats to
		 * Required
		 */
		destOrganizationId: string;

		/**
		 * The ID of the SM license to move the seats from
		 * Required
		 */
		licenseId: string;

		/**
		 * The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license
		 * Required
		 */
		seatCount: number;
	}
	export interface MoveOrganizationLicensesSeatsPostBodyFormProperties {

		/**
		 * The ID of the organization to move the SM seats to
		 * Required
		 */
		destOrganizationId: FormControl<string | null | undefined>,

		/**
		 * The ID of the SM license to move the seats from
		 * Required
		 */
		licenseId: FormControl<string | null | undefined>,

		/**
		 * The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license
		 * Required
		 */
		seatCount: FormControl<number | null | undefined>,
	}
	export function CreateMoveOrganizationLicensesSeatsPostBodyFormGroup() {
		return new FormGroup<MoveOrganizationLicensesSeatsPostBodyFormProperties>({
			destOrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			licenseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			seatCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RenewOrganizationLicensesSeatsPostBody {

		/**
		 * The ID of the SM license to renew. This license must already be assigned to an SM network
		 * Required
		 */
		licenseIdToRenew: string;

		/**
		 * The SM license to use to renew the seats on 'licenseIdToRenew'. This license must have at least as many seats available as there are seats on 'licenseIdToRenew'
		 * Required
		 */
		unusedLicenseId: string;
	}
	export interface RenewOrganizationLicensesSeatsPostBodyFormProperties {

		/**
		 * The ID of the SM license to renew. This license must already be assigned to an SM network
		 * Required
		 */
		licenseIdToRenew: FormControl<string | null | undefined>,

		/**
		 * The SM license to use to renew the seats on 'licenseIdToRenew'. This license must have at least as many seats available as there are seats on 'licenseIdToRenew'
		 * Required
		 */
		unusedLicenseId: FormControl<string | null | undefined>,
	}
	export function CreateRenewOrganizationLicensesSeatsPostBodyFormGroup() {
		return new FormGroup<RenewOrganizationLicensesSeatsPostBodyFormProperties>({
			licenseIdToRenew: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unusedLicenseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOrganizationNetworkPostBody {

		/** The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly. */
		copyFromNetworkId?: string | null;

		/** Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false) */
		disableMyMerakiCom?: boolean | null;

		/** Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false */
		disableRemoteStatusPage?: boolean | null;

		/**
		 * The name of the new network
		 * Required
		 */
		name: string;

		/** A space-separated list of tags to be applied to the network */
		tags?: string | null;

		/** The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a> */
		timeZone?: string | null;

		/**
		 * The type of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, environmental, or a space-separated list of those for a combined network.
		 * Required
		 */
		type: string;
	}
	export interface CreateOrganizationNetworkPostBodyFormProperties {

		/** The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly. */
		copyFromNetworkId: FormControl<string | null | undefined>,

		/** Disables the local device status pages (<a target='_blank' href='http://my.meraki.com/'>my.meraki.com, </a><a target='_blank' href='http://ap.meraki.com/'>ap.meraki.com, </a><a target='_blank' href='http://switch.meraki.com/'>switch.meraki.com, </a><a target='_blank' href='http://wired.meraki.com/'>wired.meraki.com</a>). Optional (defaults to false) */
		disableMyMerakiCom: FormControl<boolean | null | undefined>,

		/** Disables access to the device status page (<a target='_blank'>http://[device's LAN IP])</a>. Optional. Can only be set if disableMyMerakiCom is set to false */
		disableRemoteStatusPage: FormControl<boolean | null | undefined>,

		/**
		 * The name of the new network
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** A space-separated list of tags to be applied to the network */
		tags: FormControl<string | null | undefined>,

		/** The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a> */
		timeZone: FormControl<string | null | undefined>,

		/**
		 * The type of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, environmental, or a space-separated list of those for a combined network.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrganizationNetworkPostBodyFormGroup() {
		return new FormGroup<CreateOrganizationNetworkPostBodyFormProperties>({
			copyFromNetworkId: new FormControl<string | null | undefined>(undefined),
			disableMyMerakiCom: new FormControl<boolean | null | undefined>(undefined),
			disableRemoteStatusPage: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CombineOrganizationNetworksPostBody {

		/** A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted. */
		enrollmentString?: string | null;

		/**
		 * The name of the combined network
		 * Required
		 */
		name: string;

		/**
		 * A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network
		 * Required
		 */
		networkIds: Array<string>;
	}
	export interface CombineOrganizationNetworksPostBodyFormProperties {

		/** A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted. */
		enrollmentString: FormControl<string | null | undefined>,

		/**
		 * The name of the combined network
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCombineOrganizationNetworksPostBodyFormGroup() {
		return new FormGroup<CombineOrganizationNetworksPostBodyFormProperties>({
			enrollmentString: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOrganizationSamlRolePostBody {

		/** The list of networks that the SAML administrator has privileges on */
		CreateOrganizationSamlRolePostBodyNetworks?: Array<CreateOrganizationSamlRolePostBodyNetworks>;

		/**
		 * The privilege of the SAML administrator on the organization
		 * Required
		 */
		orgAccess: string;

		/**
		 * The role of the SAML administrator
		 * Required
		 */
		role: string;

		/** The list of tags that the SAML administrator has privleges on */
		CreateOrganizationSamlRolePostBodyTags?: Array<CreateOrganizationSamlRolePostBodyTags>;
	}
	export interface CreateOrganizationSamlRolePostBodyFormProperties {

		/**
		 * The privilege of the SAML administrator on the organization
		 * Required
		 */
		orgAccess: FormControl<string | null | undefined>,

		/**
		 * The role of the SAML administrator
		 * Required
		 */
		role: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrganizationSamlRolePostBodyFormGroup() {
		return new FormGroup<CreateOrganizationSamlRolePostBodyFormProperties>({
			orgAccess: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOrganizationSamlRolePostBodyNetworks {

		/**
		 * The privilege of the SAML administrator on the network
		 * Required
		 */
		access: string;

		/**
		 * The network ID
		 * Required
		 */
		id: string;
	}
	export interface CreateOrganizationSamlRolePostBodyNetworksFormProperties {

		/**
		 * The privilege of the SAML administrator on the network
		 * Required
		 */
		access: FormControl<string | null | undefined>,

		/**
		 * The network ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrganizationSamlRolePostBodyNetworksFormGroup() {
		return new FormGroup<CreateOrganizationSamlRolePostBodyNetworksFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOrganizationSamlRolePostBodyTags {

		/**
		 * The privilege of the SAML administrator on the tag
		 * Required
		 */
		access: string;

		/**
		 * The name of the tag
		 * Required
		 */
		tag: string;
	}
	export interface CreateOrganizationSamlRolePostBodyTagsFormProperties {

		/**
		 * The privilege of the SAML administrator on the tag
		 * Required
		 */
		access: FormControl<string | null | undefined>,

		/**
		 * The name of the tag
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrganizationSamlRolePostBodyTagsFormGroup() {
		return new FormGroup<CreateOrganizationSamlRolePostBodyTagsFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationSamlRolePutBody {

		/** The list of networks that the SAML administrator has privileges on */
		UpdateOrganizationSamlRolePutBodyNetworks?: Array<UpdateOrganizationSamlRolePutBodyNetworks>;

		/** The privilege of the SAML administrator on the organization */
		orgAccess?: string | null;

		/** The role of the SAML administrator */
		role?: string | null;

		/** The list of tags that the SAML administrator has privleges on */
		UpdateOrganizationSamlRolePutBodyTags?: Array<UpdateOrganizationSamlRolePutBodyTags>;
	}
	export interface UpdateOrganizationSamlRolePutBodyFormProperties {

		/** The privilege of the SAML administrator on the organization */
		orgAccess: FormControl<string | null | undefined>,

		/** The role of the SAML administrator */
		role: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOrganizationSamlRolePutBodyFormGroup() {
		return new FormGroup<UpdateOrganizationSamlRolePutBodyFormProperties>({
			orgAccess: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationSamlRolePutBodyNetworks {

		/**
		 * The privilege of the SAML administrator on the network
		 * Required
		 */
		access: string;

		/**
		 * The network ID
		 * Required
		 */
		id: string;
	}
	export interface UpdateOrganizationSamlRolePutBodyNetworksFormProperties {

		/**
		 * The privilege of the SAML administrator on the network
		 * Required
		 */
		access: FormControl<string | null | undefined>,

		/**
		 * The network ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOrganizationSamlRolePutBodyNetworksFormGroup() {
		return new FormGroup<UpdateOrganizationSamlRolePutBodyNetworksFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationSamlRolePutBodyTags {

		/**
		 * The privilege of the SAML administrator on the tag
		 * Required
		 */
		access: string;

		/**
		 * The name of the tag
		 * Required
		 */
		tag: string;
	}
	export interface UpdateOrganizationSamlRolePutBodyTagsFormProperties {

		/**
		 * The privilege of the SAML administrator on the tag
		 * Required
		 */
		access: FormControl<string | null | undefined>,

		/**
		 * The name of the tag
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOrganizationSamlRolePutBodyTagsFormGroup() {
		return new FormGroup<UpdateOrganizationSamlRolePutBodyTagsFormProperties>({
			access: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationSecurityIntrusionSettingsPutBody {

		/**
		 * Sets a list of specific SNORT signatures to allow
		 * Required
		 */
		UpdateOrganizationSecurityIntrusionSettingsPutBodyWhitelistedRules: Array<UpdateOrganizationSecurityIntrusionSettingsPutBodyWhitelistedRules>;
	}
	export interface UpdateOrganizationSecurityIntrusionSettingsPutBodyFormProperties {
	}
	export function CreateUpdateOrganizationSecurityIntrusionSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateOrganizationSecurityIntrusionSettingsPutBodyFormProperties>({
		});

	}

	export interface UpdateOrganizationSecurityIntrusionSettingsPutBodyWhitelistedRules {

		/** Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET */
		message?: string | null;

		/**
		 * A rule identifier of the format meraki:intrusion/snort/GID/<gid>/SID/<sid>. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents
		 * Required
		 */
		ruleId: string;
	}
	export interface UpdateOrganizationSecurityIntrusionSettingsPutBodyWhitelistedRulesFormProperties {

		/** Message is optional and is ignored on a PUT call. It is allowed in order for PUT to be compatible with GET */
		message: FormControl<string | null | undefined>,

		/**
		 * A rule identifier of the format meraki:intrusion/snort/GID/<gid>/SID/<sid>. gid and sid can be obtained from either https://www.snort.org/rule-docs or as ruleIds from the security events in /organization/[orgId]/securityEvents
		 * Required
		 */
		ruleId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOrganizationSecurityIntrusionSettingsPutBodyWhitelistedRulesFormGroup() {
		return new FormGroup<UpdateOrganizationSecurityIntrusionSettingsPutBodyWhitelistedRulesFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ruleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateOrganizationThirdPartyVPNPeersPutBody {

		/**
		 * The list of VPN peers
		 * Required
		 */
		UpdateOrganizationThirdPartyVPNPeersPutBodyPeers: Array<UpdateOrganizationThirdPartyVPNPeersPutBodyPeers>;
	}
	export interface UpdateOrganizationThirdPartyVPNPeersPutBodyFormProperties {
	}
	export function CreateUpdateOrganizationThirdPartyVPNPeersPutBodyFormGroup() {
		return new FormGroup<UpdateOrganizationThirdPartyVPNPeersPutBodyFormProperties>({
		});

	}

	export interface UpdateOrganizationThirdPartyVPNPeersPutBodyPeers {

		/** [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted. */
		ikeVersion?: UpdateOrganizationThirdPartyVPNPeersPutBodyPeersIkeVersion | null;

		/** Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used. */
		ipsecPolicies?: UpdateOrganizationThirdPartyVPNPeersPutBodyPeersIpsecPolicies;

		/** One of the following available presets: 'default', 'aws', 'azure'. If this is provided, the 'ipsecPolicies' parameter is ignored. */
		ipsecPoliciesPreset?: string | null;

		/**
		 * The name of the VPN peer
		 * Required
		 */
		name: string;

		/** A list of network tags that will connect with this peer. Use ['all'] for all networks. Use ['none'] for no networks. If not included, the default is ['all']. */
		networkTags?: Array<string>;

		/**
		 * The list of the private subnets of the VPN peer
		 * Required
		 */
		privateSubnets: Array<string>;

		/**
		 * The public IP of the VPN peer
		 * Required
		 */
		publicIp: string;

		/** [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN. */
		remoteId?: string | null;

		/**
		 * The shared secret with the VPN peer
		 * Required
		 */
		secret: string;
	}
	export interface UpdateOrganizationThirdPartyVPNPeersPutBodyPeersFormProperties {

		/** [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to '1' when omitted. */
		ikeVersion: FormControl<UpdateOrganizationThirdPartyVPNPeersPutBodyPeersIkeVersion | null | undefined>,

		/** One of the following available presets: 'default', 'aws', 'azure'. If this is provided, the 'ipsecPolicies' parameter is ignored. */
		ipsecPoliciesPreset: FormControl<string | null | undefined>,

		/**
		 * The name of the VPN peer
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The public IP of the VPN peer
		 * Required
		 */
		publicIp: FormControl<string | null | undefined>,

		/** [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN. */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * The shared secret with the VPN peer
		 * Required
		 */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateUpdateOrganizationThirdPartyVPNPeersPutBodyPeersFormGroup() {
		return new FormGroup<UpdateOrganizationThirdPartyVPNPeersPutBodyPeersFormProperties>({
			ikeVersion: new FormControl<UpdateOrganizationThirdPartyVPNPeersPutBodyPeersIkeVersion | null | undefined>(undefined),
			ipsecPoliciesPreset: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publicIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteId: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateOrganizationThirdPartyVPNPeersPutBodyPeersIkeVersion { _1 = '1', _2 = '2' }

	export interface UpdateOrganizationThirdPartyVPNPeersPutBodyPeersIpsecPolicies {

		/** This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5' */
		childAuthAlgo?: Array<string>;

		/** This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des', 'null' */
		childCipherAlgo?: Array<string>;

		/** The lifetime of the Phase 2 SA in seconds. */
		childLifetime?: number | null;

		/** This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: 'disabled','group14', 'group5', 'group2', 'group1' */
		childPfsGroup?: Array<string>;

		/** This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'sha256', 'sha1', 'md5' */
		ikeAuthAlgo?: Array<string>;

		/** This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: 'aes256', 'aes192', 'aes128', 'tripledes', 'des' */
		ikeCipherAlgo?: Array<string>;

		/** This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: 'group14', 'group5', 'group2', 'group1' */
		ikeDiffieHellmanGroup?: Array<string>;

		/** The lifetime of the Phase 1 SA in seconds. */
		ikeLifetime?: number | null;

		/** [optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: 'prfsha256', 'prfsha1', 'prfmd5', 'default'. The 'default' option can be used to default to the Authentication algorithm. */
		ikePrfAlgo?: Array<string>;
	}
	export interface UpdateOrganizationThirdPartyVPNPeersPutBodyPeersIpsecPoliciesFormProperties {

		/** The lifetime of the Phase 2 SA in seconds. */
		childLifetime: FormControl<number | null | undefined>,

		/** The lifetime of the Phase 1 SA in seconds. */
		ikeLifetime: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOrganizationThirdPartyVPNPeersPutBodyPeersIpsecPoliciesFormGroup() {
		return new FormGroup<UpdateOrganizationThirdPartyVPNPeersPutBodyPeersIpsecPoliciesFormProperties>({
			childLifetime: new FormControl<number | null | undefined>(undefined),
			ikeLifetime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationVpnFirewallRulesPutBody {

		/** An ordered array of the firewall rules (not including the default rule) */
		UpdateOrganizationVpnFirewallRulesPutBodyRules?: Array<UpdateOrganizationVpnFirewallRulesPutBodyRules>;

		/** Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional) */
		syslogDefaultRule?: boolean | null;
	}
	export interface UpdateOrganizationVpnFirewallRulesPutBodyFormProperties {

		/** Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional) */
		syslogDefaultRule: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationVpnFirewallRulesPutBodyFormGroup() {
		return new FormGroup<UpdateOrganizationVpnFirewallRulesPutBodyFormProperties>({
			syslogDefaultRule: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateOrganizationVpnFirewallRulesPutBodyRules {

		/** Description of the rule (optional) */
		comment?: string | null;

		/**
		 * Comma-separated list of destination IP address(es) (in IP or CIDR notation) or 'any' (FQDN not supported)
		 * Required
		 */
		destCidr: string;

		/** Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any' */
		destPort?: string | null;

		/**
		 * 'allow' or 'deny' traffic specified by this rule
		 * Required
		 */
		policy: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy;

		/**
		 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
		 * Required
		 */
		protocol: UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol;

		/**
		 * Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (FQDN not supported)
		 * Required
		 */
		srcCidr: string;

		/** Comma-separated list of source port(s) (integer in the range 1-65535), or 'any' */
		srcPort?: string | null;

		/** Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional) */
		syslogEnabled?: boolean | null;
	}
	export interface UpdateOrganizationVpnFirewallRulesPutBodyRulesFormProperties {

		/** Description of the rule (optional) */
		comment: FormControl<string | null | undefined>,

		/**
		 * Comma-separated list of destination IP address(es) (in IP or CIDR notation) or 'any' (FQDN not supported)
		 * Required
		 */
		destCidr: FormControl<string | null | undefined>,

		/** Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any' */
		destPort: FormControl<string | null | undefined>,

		/**
		 * 'allow' or 'deny' traffic specified by this rule
		 * Required
		 */
		policy: FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy | null | undefined>,

		/**
		 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
		 * Required
		 */
		protocol: FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol | null | undefined>,

		/**
		 * Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (FQDN not supported)
		 * Required
		 */
		srcCidr: FormControl<string | null | undefined>,

		/** Comma-separated list of source port(s) (integer in the range 1-65535), or 'any' */
		srcPort: FormControl<string | null | undefined>,

		/** Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional) */
		syslogEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOrganizationVpnFirewallRulesPutBodyRulesFormGroup() {
		return new FormGroup<UpdateOrganizationVpnFirewallRulesPutBodyRulesFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			destCidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destPort: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesPolicy | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<UpdateNetworkApplianceFirewallInboundFirewallRulesUpdatenetworkappliancefirewallinboundfirewallrulesRulesProtocol | null | undefined>(undefined, [Validators.required]),
			srcCidr: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			srcPort: new FormControl<string | null | undefined>(undefined),
			syslogEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

