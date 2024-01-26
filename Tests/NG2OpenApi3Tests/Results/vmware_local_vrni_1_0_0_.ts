import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum AllEntityType { Group = 0, BaseSecurityGroup = 1, BaseEvent = 2, BaseVirtualMachine = 3, BaseFirewallRule = 4, BaseIPSet = 5, BaseL2Network = 6, BaseFirewall = 7, BaseService = 8, BaseServiceGroup = 9, BaseVnic = 10, VirtualMachine = 11, EC2Instance = 12, Host = 13, Vnic = 14, Vmknic = 15, VxlanLayer2Network = 16, VlanL2Network = 17, Cluster = 18, SecurityTag = 19, ResourcePool = 20, NSXIPSet = 21, EC2IPSet = 22, NSXSecurityGroup = 23, EC2SecurityGroup = 24, Flow = 25, ProblemEvent = 26, Application = 27, Tier = 28, NSXFirewallRule = 29, EC2SGFirewallRule = 30, NSXRedirectRule = 31, VCenterManager = 32, NSXVManager = 33, BaseManager = 34, BaseNSXManager = 35, NSXService = 36, EC2Service = 37, VPC = 38, NSXDistributedFirewall = 39, EC2Firewall = 40, NSXServiceGroup = 41, DistributedVirtualSwitch = 42, DistributedVirtualPortgroup = 43, VCDatacenter = 44, Datastore = 45, Folder = 46 }

	export interface ApiError {
		code?: number | null;
		details?: Array<ErrorDetail>;
		message?: string | null;
	}
	export interface ApiErrorFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateApiErrorFormGroup() {
		return new FormGroup<ApiErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {
		code?: number | null;
		message?: string | null;
		target?: Array<string>;
	}
	export interface ErrorDetailFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Application extends BaseEntity {
		create_time?: number | null;
		created_by?: string | null;
		last_modified_by?: string | null;
		last_modified_time?: number | null;
	}
	export interface ApplicationFormProperties extends BaseEntityFormProperties {
		create_time: FormControl<number | null | undefined>,
		created_by: FormControl<string | null | undefined>,
		last_modified_by: FormControl<string | null | undefined>,
		last_modified_time: FormControl<number | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			create_time: new FormControl<number | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			last_modified_by: new FormControl<string | null | undefined>(undefined),
			last_modified_time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApplicationRequest {
		name?: string | null;
	}
	export interface ApplicationRequestFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateApplicationRequestFormGroup() {
		return new FormGroup<ApplicationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AristaSwitchDataSource {
	}
	export interface AristaSwitchDataSourceFormProperties {
	}
	export function CreateAristaSwitchDataSourceFormGroup() {
		return new FormGroup<AristaSwitchDataSourceFormProperties>({
		});

	}

	export interface AristaSwitchDataSourceRequest {
	}
	export interface AristaSwitchDataSourceRequestFormProperties {
	}
	export function CreateAristaSwitchDataSourceRequestFormGroup() {
		return new FormGroup<AristaSwitchDataSourceRequestFormProperties>({
		});

	}

	export interface BaseDataSource {
		enabled?: boolean | null;
		entity_id?: string | null;
		entity_type?: BaseDataSourceEntity_type | null;
		fqdn?: string | null;
		ip?: string | null;
		nickname?: string | null;
		notes?: string | null;

		/** proxy vm which should register this vcenter */
		proxy_id?: string | null;
	}
	export interface BaseDataSourceFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		entity_id: FormControl<string | null | undefined>,
		entity_type: FormControl<BaseDataSourceEntity_type | null | undefined>,
		fqdn: FormControl<string | null | undefined>,
		ip: FormControl<string | null | undefined>,
		nickname: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,

		/** proxy vm which should register this vcenter */
		proxy_id: FormControl<string | null | undefined>,
	}
	export function CreateBaseDataSourceFormGroup() {
		return new FormGroup<BaseDataSourceFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseDataSourceEntity_type | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BaseDataSourceEntity_type { CiscoSwitchDataSource = 0, DellSwitchDataSource = 1, AristaSwitchDataSource = 2, BrocadeSwitchDataSource = 3, JuniperSwitchDataSource = 4, VCenterDataSource = 5, NSXVManagerDataSource = 6, UCSManagerDataSource = 7, HPVCManagerDataSource = 8, HPOneViewDataSource = 9, PanFirewallDataSource = 10, CheckpointFirewallDataSource = 11 }

	export interface BaseDataSourceRequest {
		enabled?: boolean | null;
		fqdn?: string | null;
		ip?: string | null;

		/** Required */
		nickname: string;
		notes?: string | null;

		/**
		 * proxy vm which should register this vcenter
		 * Required
		 */
		proxy_id: string;
	}
	export interface BaseDataSourceRequestFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		fqdn: FormControl<string | null | undefined>,
		ip: FormControl<string | null | undefined>,

		/** Required */
		nickname: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,

		/**
		 * proxy vm which should register this vcenter
		 * Required
		 */
		proxy_id: FormControl<string | null | undefined>,
	}
	export function CreateBaseDataSourceRequestFormGroup() {
		return new FormGroup<BaseDataSourceRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BaseEntity {
		entity_id?: string | null;
		entity_type?: BaseEntityEntity_type | null;
		name?: string | null;
	}
	export interface BaseEntityFormProperties {
		entity_id: FormControl<string | null | undefined>,
		entity_type: FormControl<BaseEntityEntity_type | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateBaseEntityFormGroup() {
		return new FormGroup<BaseEntityFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BaseEntityEntity_type { VirtualMachine = 0, EC2Instance = 1, Host = 2, Vnic = 3, Vmknic = 4, VxlanLayer2Network = 5, VlanL2Network = 6, Cluster = 7, SecurityTag = 8, ResourcePool = 9, NSXIPSet = 10, EC2IPSet = 11, NSXSecurityGroup = 12, EC2SecurityGroup = 13, Flow = 14, ProblemEvent = 15, Application = 16, Tier = 17, NSXFirewallRule = 18, EC2SGFirewallRule = 19, NSXRedirectRule = 20, VCenterManager = 21, NSXVManager = 22, NSXService = 23, EC2Service = 24, VPC = 25, NSXDistributedFirewall = 26, EC2Firewall = 27, NSXServiceGroup = 28, DistributedVirtualSwitch = 29, DistributedVirtualPortgroup = 30, VCDatacenter = 31, Datastore = 32, Folder = 33 }

	export interface BaseEvent extends BaseEntity {
		admin_state?: BaseEventAdmin_state | null;
		anchor_entities?: Array<Reference>;
		archived?: boolean | null;
		event_tags?: Array<string>;
		event_time_epoch_ms?: number | null;
		message?: string | null;
		related_entities?: Array<Reference>;
	}
	export interface BaseEventFormProperties extends BaseEntityFormProperties {
		admin_state: FormControl<BaseEventAdmin_state | null | undefined>,
		archived: FormControl<boolean | null | undefined>,
		event_time_epoch_ms: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateBaseEventFormGroup() {
		return new FormGroup<BaseEventFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			admin_state: new FormControl<BaseEventAdmin_state | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			event_time_epoch_ms: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BaseEventAdmin_state { ENABLED = 0, DISABLED = 1 }

	export interface Reference {
		entity_id?: string | null;
		entity_type?: BaseEntityEntity_type | null;
	}
	export interface ReferenceFormProperties {
		entity_id: FormControl<string | null | undefined>,
		entity_type: FormControl<BaseEntityEntity_type | null | undefined>,
	}
	export function CreateReferenceFormGroup() {
		return new FormGroup<ReferenceFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
		});

	}

	export interface BaseFirewall extends BaseEntity {
		exclusions?: Array<Reference>;
		firewall_rules?: Array<RuleSet>;
	}
	export interface BaseFirewallFormProperties extends BaseEntityFormProperties {
	}
	export function CreateBaseFirewallFormGroup() {
		return new FormGroup<BaseFirewallFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RuleSet {
		firewall?: Reference;
		rule_set_type?: RuleSetRule_set_type | null;
		rules?: Array<Reference>;
	}
	export interface RuleSetFormProperties {
		rule_set_type: FormControl<RuleSetRule_set_type | null | undefined>,
	}
	export function CreateRuleSetFormGroup() {
		return new FormGroup<RuleSetFormProperties>({
			rule_set_type: new FormControl<RuleSetRule_set_type | null | undefined>(undefined),
		});

	}

	export enum RuleSetRule_set_type { NSX_STANDARD = 0, NSX_REDIRECT = 1, AWS_STANDARD = 2 }

	export interface BaseFirewallRule extends BaseEntity {
		action?: BaseFirewallRuleAction | null;
		destination_any?: boolean | null;
		destination_inversion?: boolean | null;
		destinations?: Array<Reference>;
		disabled?: boolean | null;
		port_ranges?: Array<PortRange>;
		rule_id?: string | null;
		section_id?: string | null;
		section_name?: string | null;
		sequence_number?: number | null;
		service_any?: boolean | null;
		services?: Array<Reference>;
		source_any?: boolean | null;
		source_inversion?: boolean | null;
		sources?: Array<Reference>;
	}
	export interface BaseFirewallRuleFormProperties extends BaseEntityFormProperties {
		action: FormControl<BaseFirewallRuleAction | null | undefined>,
		destination_any: FormControl<boolean | null | undefined>,
		destination_inversion: FormControl<boolean | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		rule_id: FormControl<string | null | undefined>,
		section_id: FormControl<string | null | undefined>,
		section_name: FormControl<string | null | undefined>,
		sequence_number: FormControl<number | null | undefined>,
		service_any: FormControl<boolean | null | undefined>,
		source_any: FormControl<boolean | null | undefined>,
		source_inversion: FormControl<boolean | null | undefined>,
	}
	export function CreateBaseFirewallRuleFormGroup() {
		return new FormGroup<BaseFirewallRuleFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<BaseFirewallRuleAction | null | undefined>(undefined),
			destination_any: new FormControl<boolean | null | undefined>(undefined),
			destination_inversion: new FormControl<boolean | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			rule_id: new FormControl<string | null | undefined>(undefined),
			section_id: new FormControl<string | null | undefined>(undefined),
			section_name: new FormControl<string | null | undefined>(undefined),
			sequence_number: new FormControl<number | null | undefined>(undefined),
			service_any: new FormControl<boolean | null | undefined>(undefined),
			source_any: new FormControl<boolean | null | undefined>(undefined),
			source_inversion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum BaseFirewallRuleAction { ALLOW = 0, ACCEPT = 1, DENY = 2, DROP = 3, REJECT = 4, REDIRECT = 5, DO_NOT_REDIRECT = 6 }

	export interface PortRange {
		display?: string | null;
		end?: number | null;
		iana_name?: string | null;
		iana_port_display?: string | null;
		start?: number | null;
	}
	export interface PortRangeFormProperties {
		display: FormControl<string | null | undefined>,
		end: FormControl<number | null | undefined>,
		iana_name: FormControl<string | null | undefined>,
		iana_port_display: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
	}
	export function CreatePortRangeFormGroup() {
		return new FormGroup<PortRangeFormProperties>({
			display: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<number | null | undefined>(undefined),
			iana_name: new FormControl<string | null | undefined>(undefined),
			iana_port_display: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BaseIPSet extends BaseEntity {
		direct_destination_rules?: Array<RuleSet>;
		direct_source_rules?: Array<RuleSet>;
		indirect_destination_rules?: Array<RuleSet>;
		indirect_source_rules?: Array<RuleSet>;
		ip_addresses?: Array<IpV4Address>;
		ip_numeric_ranges?: Array<IpNumericRange>;
		ip_ranges?: Array<IpAddressRange>;
		parent_security_groups?: Array<Reference>;
		translated_vm_count?: number | null;
		vendor?: string | null;
		vendor_id?: string | null;
	}
	export interface BaseIPSetFormProperties extends BaseEntityFormProperties {
		translated_vm_count: FormControl<number | null | undefined>,
		vendor: FormControl<string | null | undefined>,
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateBaseIPSetFormGroup() {
		return new FormGroup<BaseIPSetFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			translated_vm_count: new FormControl<number | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpV4Address {
		ip_address?: string | null;
		netmask?: string | null;
		network_address?: string | null;
	}
	export interface IpV4AddressFormProperties {
		ip_address: FormControl<string | null | undefined>,
		netmask: FormControl<string | null | undefined>,
		network_address: FormControl<string | null | undefined>,
	}
	export function CreateIpV4AddressFormGroup() {
		return new FormGroup<IpV4AddressFormProperties>({
			ip_address: new FormControl<string | null | undefined>(undefined),
			netmask: new FormControl<string | null | undefined>(undefined),
			network_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IpNumericRange {
		end?: number | null;
		start?: number | null;
	}
	export interface IpNumericRangeFormProperties {
		end: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
	}
	export function CreateIpNumericRangeFormGroup() {
		return new FormGroup<IpNumericRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IpAddressRange {
		end_ip?: string | null;
		start_ip?: string | null;
	}
	export interface IpAddressRangeFormProperties {
		end_ip: FormControl<string | null | undefined>,
		start_ip: FormControl<string | null | undefined>,
	}
	export function CreateIpAddressRangeFormGroup() {
		return new FormGroup<IpAddressRangeFormProperties>({
			end_ip: new FormControl<string | null | undefined>(undefined),
			start_ip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BaseL2Network extends BaseEntity {
		gateways?: Array<string>;
		network_addresses?: Array<string>;
	}
	export interface BaseL2NetworkFormProperties extends BaseEntityFormProperties {
	}
	export function CreateBaseL2NetworkFormGroup() {
		return new FormGroup<BaseL2NetworkFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BaseManager {
	}
	export interface BaseManagerFormProperties {
	}
	export function CreateBaseManagerFormGroup() {
		return new FormGroup<BaseManagerFormProperties>({
		});

	}

	export interface BaseNSXManager {
	}
	export interface BaseNSXManagerFormProperties {
	}
	export function CreateBaseNSXManagerFormGroup() {
		return new FormGroup<BaseNSXManagerFormProperties>({
		});

	}

	export interface BaseSecurityGroup extends Group {
		direct_destination_rules?: Array<RuleSet>;
		direct_members?: Array<Reference>;
		direct_source_rules?: Array<RuleSet>;
		excluded_members?: Array<Reference>;
		indirect_destination_rules?: Array<RuleSet>;
		indirect_source_rules?: Array<RuleSet>;
		members?: Array<Reference>;
		parents?: Array<Reference>;
		translated_vm_count?: number | null;
		vendor_id?: string | null;
	}
	export interface BaseSecurityGroupFormProperties extends GroupFormProperties {
		translated_vm_count: FormControl<number | null | undefined>,
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateBaseSecurityGroupFormGroup() {
		return new FormGroup<BaseSecurityGroupFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			translated_vm_count: new FormControl<number | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BaseService extends BaseEntity {
		port_ranges?: Array<PortRange>;
		protocol?: string | null;
	}
	export interface BaseServiceFormProperties extends BaseEntityFormProperties {
		protocol: FormControl<string | null | undefined>,
	}
	export function CreateBaseServiceFormGroup() {
		return new FormGroup<BaseServiceFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BaseServiceGroup {
	}
	export interface BaseServiceGroupFormProperties {
	}
	export function CreateBaseServiceGroupFormGroup() {
		return new FormGroup<BaseServiceGroupFormProperties>({
		});

	}

	export interface BaseVirtualMachine {
	}
	export interface BaseVirtualMachineFormProperties {
	}
	export function CreateBaseVirtualMachineFormGroup() {
		return new FormGroup<BaseVirtualMachineFormProperties>({
		});

	}

	export interface BaseVnic extends BaseEntity {
		ip_addresses?: Array<IpV4Address>;
		layer2_network?: Reference;
		vlan?: Vlan;
		vm?: Reference;
	}
	export interface BaseVnicFormProperties extends BaseEntityFormProperties {
	}
	export function CreateBaseVnicFormGroup() {
		return new FormGroup<BaseVnicFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Vlan {
		begin?: number | null;
		end?: number | null;
	}
	export interface VlanFormProperties {
		begin: FormControl<number | null | undefined>,
		end: FormControl<number | null | undefined>,
	}
	export function CreateVlanFormGroup() {
		return new FormGroup<VlanFormProperties>({
			begin: new FormControl<number | null | undefined>(undefined),
			end: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BrocadeSwitchDataSource {
	}
	export interface BrocadeSwitchDataSourceFormProperties {
	}
	export function CreateBrocadeSwitchDataSourceFormGroup() {
		return new FormGroup<BrocadeSwitchDataSourceFormProperties>({
		});

	}

	export interface BrocadeSwitchDataSourceRequest {
	}
	export interface BrocadeSwitchDataSourceRequestFormProperties {
	}
	export function CreateBrocadeSwitchDataSourceRequestFormGroup() {
		return new FormGroup<BrocadeSwitchDataSourceRequestFormProperties>({
		});

	}

	export interface CheckpointFirewallDataSource {
	}
	export interface CheckpointFirewallDataSourceFormProperties {
	}
	export function CreateCheckpointFirewallDataSourceFormGroup() {
		return new FormGroup<CheckpointFirewallDataSourceFormProperties>({
		});

	}

	export interface CheckpointFirewallDataSourceRequest {
	}
	export interface CheckpointFirewallDataSourceRequestFormProperties {
	}
	export function CreateCheckpointFirewallDataSourceRequestFormGroup() {
		return new FormGroup<CheckpointFirewallDataSourceRequestFormProperties>({
		});

	}

	export interface CiscoSwitchDataSource extends SwitchDataSource {
		switch_type?: CiscoSwitchDataSourceSwitch_type | null;
	}
	export interface CiscoSwitchDataSourceFormProperties extends SwitchDataSourceFormProperties {
		switch_type: FormControl<CiscoSwitchDataSourceSwitch_type | null | undefined>,
	}
	export function CreateCiscoSwitchDataSourceFormGroup() {
		return new FormGroup<CiscoSwitchDataSourceFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseDataSourceEntity_type | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined),
			switch_type: new FormControl<CiscoSwitchDataSourceSwitch_type | null | undefined>(undefined),
		});

	}

	export enum CiscoSwitchDataSourceSwitch_type { CATALYST_3000 = 0, CATALYST_4500 = 1, CATALYST_6500 = 2, NEXUS_5K = 3, NEXUS_7K = 4, NEXUS_9K = 5 }

	export interface CiscoSwitchDataSourceRequest extends SwitchDataSourceRequest {
		switch_type?: CiscoSwitchDataSourceSwitch_type | null;
	}
	export interface CiscoSwitchDataSourceRequestFormProperties extends SwitchDataSourceRequestFormProperties {
		switch_type: FormControl<CiscoSwitchDataSourceSwitch_type | null | undefined>,
	}
	export function CreateCiscoSwitchDataSourceRequestFormGroup() {
		return new FormGroup<CiscoSwitchDataSourceRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			switch_type: new FormControl<CiscoSwitchDataSourceSwitch_type | null | undefined>(undefined),
		});

	}

	export enum CiscoSwitchType { CATALYST_3000 = 0, CATALYST_4500 = 1, CATALYST_6500 = 2, NEXUS_5K = 3, NEXUS_7K = 4, NEXUS_9K = 5 }

	export interface Cluster {
	}
	export interface ClusterFormProperties {
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
		});

	}

	export interface DataSourceEntityId {

		/** Entity Identifier */
		entity_id?: string | null;
		entity_type?: BaseDataSourceEntity_type | null;
	}
	export interface DataSourceEntityIdFormProperties {

		/** Entity Identifier */
		entity_id: FormControl<string | null | undefined>,
		entity_type: FormControl<BaseDataSourceEntity_type | null | undefined>,
	}
	export function CreateDataSourceEntityIdFormGroup() {
		return new FormGroup<DataSourceEntityIdFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseDataSourceEntity_type | null | undefined>(undefined),
		});

	}

	export interface DataSourceListResponse {
		results?: Array<DataSourceEntityId>;
		total_count?: number | null;
	}
	export interface DataSourceListResponseFormProperties {
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateDataSourceListResponseFormGroup() {
		return new FormGroup<DataSourceListResponseFormProperties>({
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DataSourceType { CiscoSwitchDataSource = 0, DellSwitchDataSource = 1, AristaSwitchDataSource = 2, BrocadeSwitchDataSource = 3, JuniperSwitchDataSource = 4, VCenterDataSource = 5, NSXVManagerDataSource = 6, UCSManagerDataSource = 7, HPVCManagerDataSource = 8, HPOneViewDataSource = 9, PanFirewallDataSource = 10, CheckpointFirewallDataSource = 11 }


	/** Datasource Health state */
	export interface DatasourceHealth {
		health_error_code?: string | null;
		health_message?: string | null;
		health_status?: DatasourceHealthHealth_status | null;
	}

	/** Datasource Health state */
	export interface DatasourceHealthFormProperties {
		health_error_code: FormControl<string | null | undefined>,
		health_message: FormControl<string | null | undefined>,
		health_status: FormControl<DatasourceHealthHealth_status | null | undefined>,
	}
	export function CreateDatasourceHealthFormGroup() {
		return new FormGroup<DatasourceHealthFormProperties>({
			health_error_code: new FormControl<string | null | undefined>(undefined),
			health_message: new FormControl<string | null | undefined>(undefined),
			health_status: new FormControl<DatasourceHealthHealth_status | null | undefined>(undefined),
		});

	}

	export enum DatasourceHealthHealth_status { HEALTHY = 0, HEALTHY_WITH_WARNINGS = 1, UNHEALTHY = 2 }

	export interface Datastore {
	}
	export interface DatastoreFormProperties {
	}
	export function CreateDatastoreFormGroup() {
		return new FormGroup<DatastoreFormProperties>({
		});

	}

	export interface DellSwitchDataSource extends SwitchDataSource {
		switch_type?: DellSwitchDataSourceSwitch_type | null;
	}
	export interface DellSwitchDataSourceFormProperties extends SwitchDataSourceFormProperties {
		switch_type: FormControl<DellSwitchDataSourceSwitch_type | null | undefined>,
	}
	export function CreateDellSwitchDataSourceFormGroup() {
		return new FormGroup<DellSwitchDataSourceFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseDataSourceEntity_type | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined),
			switch_type: new FormControl<DellSwitchDataSourceSwitch_type | null | undefined>(undefined),
		});

	}

	export enum DellSwitchDataSourceSwitch_type { FORCE_10_MXL_10 = 0, POWERCONNECT_8024 = 1, S4048 = 2, Z9100 = 3, S6000 = 4 }

	export interface DellSwitchDataSourceRequest extends SwitchDataSourceRequest {
		switch_type?: DellSwitchDataSourceSwitch_type | null;
	}
	export interface DellSwitchDataSourceRequestFormProperties extends SwitchDataSourceRequestFormProperties {
		switch_type: FormControl<DellSwitchDataSourceSwitch_type | null | undefined>,
	}
	export function CreateDellSwitchDataSourceRequestFormGroup() {
		return new FormGroup<DellSwitchDataSourceRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			switch_type: new FormControl<DellSwitchDataSourceSwitch_type | null | undefined>(undefined),
		});

	}

	export enum DellSwitchType { FORCE_10_MXL_10 = 0, POWERCONNECT_8024 = 1, S4048 = 2, Z9100 = 3, S6000 = 4 }

	export interface DistributedVirtualPortgroup {
	}
	export interface DistributedVirtualPortgroupFormProperties {
	}
	export function CreateDistributedVirtualPortgroupFormGroup() {
		return new FormGroup<DistributedVirtualPortgroupFormProperties>({
		});

	}

	export interface DistributedVirtualSwitch {
	}
	export interface DistributedVirtualSwitchFormProperties {
	}
	export function CreateDistributedVirtualSwitchFormGroup() {
		return new FormGroup<DistributedVirtualSwitchFormProperties>({
		});

	}

	export interface Domain {
		domain_type?: DomainDomain_type | null;

		/** domain value, not required for LOCAL domain */
		value?: string | null;
	}
	export interface DomainFormProperties {
		domain_type: FormControl<DomainDomain_type | null | undefined>,

		/** domain value, not required for LOCAL domain */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			domain_type: new FormControl<DomainDomain_type | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainDomain_type { LDAP = 0, LOCAL = 1 }

	export interface EC2Firewall {
	}
	export interface EC2FirewallFormProperties {
	}
	export function CreateEC2FirewallFormGroup() {
		return new FormGroup<EC2FirewallFormProperties>({
		});

	}

	export enum EC2FirewallDirection { INBOUND = 0, OUTBOUND = 1 }

	export interface EC2IPSet {
	}
	export interface EC2IPSetFormProperties {
	}
	export function CreateEC2IPSetFormGroup() {
		return new FormGroup<EC2IPSetFormProperties>({
		});

	}

	export interface EC2Instance extends BaseVirtualMachine {
		region?: string | null;
		vpc?: Reference;
	}
	export interface EC2InstanceFormProperties extends BaseVirtualMachineFormProperties {
		region: FormControl<string | null | undefined>,
	}
	export function CreateEC2InstanceFormGroup() {
		return new FormGroup<EC2InstanceFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EC2NetworkInterface {
	}
	export interface EC2NetworkInterfaceFormProperties {
	}
	export function CreateEC2NetworkInterfaceFormGroup() {
		return new FormGroup<EC2NetworkInterfaceFormProperties>({
		});

	}

	export interface EC2SGFirewallRule extends BaseFirewallRule {
		direction?: EC2FirewallDirection | null;
		owner_security_group?: Reference;
		vpc?: Reference;
	}
	export interface EC2SGFirewallRuleFormProperties extends BaseFirewallRuleFormProperties {
		direction: FormControl<EC2FirewallDirection | null | undefined>,
	}
	export function CreateEC2SGFirewallRuleFormGroup() {
		return new FormGroup<EC2SGFirewallRuleFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<BaseFirewallRuleAction | null | undefined>(undefined),
			destination_any: new FormControl<boolean | null | undefined>(undefined),
			destination_inversion: new FormControl<boolean | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			rule_id: new FormControl<string | null | undefined>(undefined),
			section_id: new FormControl<string | null | undefined>(undefined),
			section_name: new FormControl<string | null | undefined>(undefined),
			sequence_number: new FormControl<number | null | undefined>(undefined),
			service_any: new FormControl<boolean | null | undefined>(undefined),
			source_any: new FormControl<boolean | null | undefined>(undefined),
			source_inversion: new FormControl<boolean | null | undefined>(undefined),
			direction: new FormControl<EC2FirewallDirection | null | undefined>(undefined),
		});

	}

	export interface EC2SecurityGroup extends BaseSecurityGroup {
		region?: string | null;
		vpc?: Reference;
	}
	export interface EC2SecurityGroupFormProperties extends BaseSecurityGroupFormProperties {
		region: FormControl<string | null | undefined>,
	}
	export function CreateEC2SecurityGroupFormGroup() {
		return new FormGroup<EC2SecurityGroupFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			translated_vm_count: new FormControl<number | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EC2Service {
	}
	export interface EC2ServiceFormProperties {
	}
	export function CreateEC2ServiceFormGroup() {
		return new FormGroup<EC2ServiceFormProperties>({
		});

	}

	export interface EntityId {

		/** Entity Identifier */
		entity_id?: string | null;
		entity_type?: BaseEntityEntity_type | null;
	}
	export interface EntityIdFormProperties {

		/** Entity Identifier */
		entity_id: FormControl<string | null | undefined>,
		entity_type: FormControl<BaseEntityEntity_type | null | undefined>,
	}
	export function CreateEntityIdFormGroup() {
		return new FormGroup<EntityIdFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
		});

	}

	export interface EntityIdWithTime {

		/** Entity Identifier */
		entity_id?: string | null;
		entity_type?: BaseEntityEntity_type | null;
		time?: number | null;
	}
	export interface EntityIdWithTimeFormProperties {

		/** Entity Identifier */
		entity_id: FormControl<string | null | undefined>,
		entity_type: FormControl<BaseEntityEntity_type | null | undefined>,
		time: FormControl<number | null | undefined>,
	}
	export function CreateEntityIdWithTimeFormGroup() {
		return new FormGroup<EntityIdWithTimeFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EntityName extends EntityIdWithTime {
		name?: string | null;
	}
	export interface EntityNameFormProperties extends EntityIdWithTimeFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateEntityNameFormGroup() {
		return new FormGroup<EntityNameFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EntityType { VirtualMachine = 0, EC2Instance = 1, Host = 2, Vnic = 3, Vmknic = 4, VxlanLayer2Network = 5, VlanL2Network = 6, Cluster = 7, SecurityTag = 8, ResourcePool = 9, NSXIPSet = 10, EC2IPSet = 11, NSXSecurityGroup = 12, EC2SecurityGroup = 13, Flow = 14, ProblemEvent = 15, Application = 16, Tier = 17, NSXFirewallRule = 18, EC2SGFirewallRule = 19, NSXRedirectRule = 20, VCenterManager = 21, NSXVManager = 22, NSXService = 23, EC2Service = 24, VPC = 25, NSXDistributedFirewall = 26, EC2Firewall = 27, NSXServiceGroup = 28, DistributedVirtualSwitch = 29, DistributedVirtualPortgroup = 30, VCDatacenter = 31, Datastore = 32, Folder = 33 }

	export enum FirewallAction { ALLOW = 0, ACCEPT = 1, DENY = 2, DROP = 3, REJECT = 4, REDIRECT = 5, DO_NOT_REDIRECT = 6 }

	export enum FirewallDirection { IN = 0, OUT = 1, INOUT = 2 }

	export interface Flow extends BaseEntity {
		destination_cluster?: Reference;
		destination_datacenter?: Reference;
		destination_folders?: Array<Reference>;
		destination_host?: Reference;
		destination_ip?: IpV4Address;
		destination_ip_sets?: Array<Reference>;
		destination_l2_network?: Reference;
		destination_resource_pool?: Reference;
		destination_security_groups?: Array<Reference>;
		destination_security_tags?: Array<Reference>;
		destination_vm?: Reference;
		destination_vm_tags?: Array<string>;
		destination_vnic?: Reference;
		destination_vpc?: Reference;
		firewall_action?: BaseFirewallRuleAction | null;
		flow_tag?: Array<FlowTag>;
		port?: PortRange;
		protocol?: FlowProtocol | null;
		source_cluster?: Reference;
		source_datacenter?: Reference;
		source_folders?: Array<Reference>;
		source_host?: Reference;
		source_ip?: IpV4Address;
		source_ip_sets?: Array<Reference>;
		source_l2_network?: Reference;
		source_resource_pool?: Reference;
		source_security_groups?: Array<Reference>;
		source_security_tags?: Array<Reference>;
		source_vm?: Reference;
		source_vm_tags?: Array<string>;
		source_vnic?: Reference;
		source_vpc?: Reference;
		traffic_type?: FlowTraffic_type | null;
		within_host?: boolean | null;
	}
	export interface FlowFormProperties extends BaseEntityFormProperties {
		firewall_action: FormControl<BaseFirewallRuleAction | null | undefined>,
		protocol: FormControl<FlowProtocol | null | undefined>,
		traffic_type: FormControl<FlowTraffic_type | null | undefined>,
		within_host: FormControl<boolean | null | undefined>,
	}
	export function CreateFlowFormGroup() {
		return new FormGroup<FlowFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			firewall_action: new FormControl<BaseFirewallRuleAction | null | undefined>(undefined),
			protocol: new FormControl<FlowProtocol | null | undefined>(undefined),
			traffic_type: new FormControl<FlowTraffic_type | null | undefined>(undefined),
			within_host: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FlowTag { TAG_TRAFFIC_TYPE_UNKNOWN = 0, TAG_INTERNET_TRAFFIC = 1, TAG_EAST_WEST_TRAFFIC = 2, TAG_VM_VM_TRAFFIC = 3, TAG_VM_PHY_TRAFFIC = 4, TAG_PHY_PHY_TRAFFIC = 5, TAG_SRC_IP_VMKNIC = 6, TAG_DST_IP_VMKNIC = 7, TAG_SRC_IP_VM = 8, TAG_DST_IP_VM = 9, TAG_SRC_IP_INTERNET = 10, TAG_DST_IP_INTERNET = 11, TAG_SRC_IP_PHYSICAL = 12, TAG_DST_IP_PHYSICAL = 13, TAG_SAME_HOST = 14, TAG_DIFF_HOST = 15, TAG_SHARED_SERVICE = 16, TAG_NOT_SHARED_SERVICE = 17, TAG_NETWORK_SWITCHED = 18, TAG_NETWORK_ROUTED = 19, TAG_NETWORK_UNKNOWN = 20, TAG_SRC_IP_VTEP = 21, TAG_DST_IP_VTEP = 22, TAG_UNICAST = 23, TAG_BROADCAST = 24, TAG_MULTICAST = 25, TAG_SRC_IP_LINK_LOCAL = 26, TAG_DST_IP_LINK_LOCAL = 27, TAG_SRC_IP_CLASS_E = 28, TAG_DST_IP_CLASS_E = 29, TAG_SRC_IP_CLASS_A_RESERVED = 30, TAG_DST_IP_CLASS_A_RESERVED = 31, TAG_INVALID_IP_PACKETS = 32, TAG_NOT_ANALYZED = 33, TAG_GENERIC_INTERNET_SRC_IP = 34, TAG_SNAT_DNAT_FLOW = 35, TAG_MULTINICS = 36, TAG_SRC_VC = 37, TAG_DST_VC = 38, TAG_SRC_AWS = 39, TAG_DST_AWS = 40, TAG_WITHIN_DC = 41, TAG_DIFF_DC = 42, TAG_WITHIN_VPC = 43, TAG_DIFF_VPC = 44 }

	export enum FlowProtocol { TCP = 0, UDP = 1, OTHER = 2 }

	export enum FlowTraffic_type { INTERNET_TRAFFIC = 0, EAST_WEST_TRAFFIC = 1 }

	export enum FlowTrafficType { INTERNET_TRAFFIC = 0, EAST_WEST_TRAFFIC = 1 }

	export interface Folder {
	}
	export interface FolderFormProperties {
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
		});

	}

	export interface Group extends BaseEntity {
		members?: Array<Reference>;
	}
	export interface GroupFormProperties extends BaseEntityFormProperties {
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EntityType currently restricted to VirtualMachine */
	export interface GroupMembershipCriteria {

		/** Ip Address membership definition */
		ip_address_membership_criteria?: IpAddressMembershipCriteria;
		membership_type?: GroupMembershipCriteriaMembership_type | null;
		search_membership_criteria?: SearchMembershipCriteria;
	}

	/** EntityType currently restricted to VirtualMachine */
	export interface GroupMembershipCriteriaFormProperties {
		membership_type: FormControl<GroupMembershipCriteriaMembership_type | null | undefined>,
	}
	export function CreateGroupMembershipCriteriaFormGroup() {
		return new FormGroup<GroupMembershipCriteriaFormProperties>({
			membership_type: new FormControl<GroupMembershipCriteriaMembership_type | null | undefined>(undefined),
		});

	}


	/** Ip Address membership definition */
	export interface IpAddressMembershipCriteria {
		ip_addresses?: Array<string>;
	}

	/** Ip Address membership definition */
	export interface IpAddressMembershipCriteriaFormProperties {
	}
	export function CreateIpAddressMembershipCriteriaFormGroup() {
		return new FormGroup<IpAddressMembershipCriteriaFormProperties>({
		});

	}

	export enum GroupMembershipCriteriaMembership_type { SearchMembershipCriteria = 0, IPAddressMembershipCriteria = 1 }

	export interface SearchMembershipCriteria {
		entity_type?: AllEntityType | null;

		/** As defined in search end point */
		filter?: string | null;
	}
	export interface SearchMembershipCriteriaFormProperties {
		entity_type: FormControl<AllEntityType | null | undefined>,

		/** As defined in search end point */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateSearchMembershipCriteriaFormGroup() {
		return new FormGroup<SearchMembershipCriteriaFormProperties>({
			entity_type: new FormControl<AllEntityType | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HPOneViewManagerDataSource {
	}
	export interface HPOneViewManagerDataSourceFormProperties {
	}
	export function CreateHPOneViewManagerDataSourceFormGroup() {
		return new FormGroup<HPOneViewManagerDataSourceFormProperties>({
		});

	}

	export interface HPOneViewManagerDataSourceRequest {
	}
	export interface HPOneViewManagerDataSourceRequestFormProperties {
	}
	export function CreateHPOneViewManagerDataSourceRequestFormGroup() {
		return new FormGroup<HPOneViewManagerDataSourceRequestFormProperties>({
		});

	}

	export interface HPVCManagerDataSource {
	}
	export interface HPVCManagerDataSourceFormProperties {
	}
	export function CreateHPVCManagerDataSourceFormGroup() {
		return new FormGroup<HPVCManagerDataSourceFormProperties>({
		});

	}

	export interface HPVCManagerDataSourceRequest {
	}
	export interface HPVCManagerDataSourceRequestFormProperties {
	}
	export function CreateHPVCManagerDataSourceRequestFormGroup() {
		return new FormGroup<HPVCManagerDataSourceRequestFormProperties>({
		});

	}

	export interface Host extends BaseEntity {
		cluster?: Reference;
		connection_state?: string | null;
		datastores?: Array<Reference>;
		maintenance_mode?: string | null;
		nsx_manager?: Reference;
		service_tag?: string | null;
		vcenter_manager?: Reference;
		vendor_id?: string | null;
		vm_count?: number | null;
		vmknics?: Array<Reference>;
	}
	export interface HostFormProperties extends BaseEntityFormProperties {
		connection_state: FormControl<string | null | undefined>,
		maintenance_mode: FormControl<string | null | undefined>,
		service_tag: FormControl<string | null | undefined>,
		vendor_id: FormControl<string | null | undefined>,
		vm_count: FormControl<number | null | undefined>,
	}
	export function CreateHostFormGroup() {
		return new FormGroup<HostFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			connection_state: new FormControl<string | null | undefined>(undefined),
			maintenance_mode: new FormControl<string | null | undefined>(undefined),
			service_tag: new FormControl<string | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
			vm_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JuniperSwitchDataSource {
	}
	export interface JuniperSwitchDataSourceFormProperties {
	}
	export function CreateJuniperSwitchDataSourceFormGroup() {
		return new FormGroup<JuniperSwitchDataSourceFormProperties>({
		});

	}

	export interface JuniperSwitchDataSourceRequest {
	}
	export interface JuniperSwitchDataSourceRequestFormProperties {
	}
	export function CreateJuniperSwitchDataSourceRequestFormGroup() {
		return new FormGroup<JuniperSwitchDataSourceRequestFormProperties>({
		});

	}

	export enum MetaEntityType { Group = 0, BaseSecurityGroup = 1, BaseEvent = 2, BaseVirtualMachine = 3, BaseFirewallRule = 4, BaseIPSet = 5, BaseL2Network = 6, BaseManager = 7, BaseNSXManager = 8, BaseFirewall = 9, BaseService = 10, BaseServiceGroup = 11, BaseVnic = 12 }

	export interface MicroSecGroup {
		entity?: Reference;
	}
	export interface MicroSecGroupFormProperties {
	}
	export function CreateMicroSecGroupFormGroup() {
		return new FormGroup<MicroSecGroupFormProperties>({
		});

	}

	export interface NSXControllerDataCollection {
		controller_password?: string | null;
		enabled?: boolean | null;
	}
	export interface NSXControllerDataCollectionFormProperties {
		controller_password: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateNSXControllerDataCollectionFormGroup() {
		return new FormGroup<NSXControllerDataCollectionFormProperties>({
			controller_password: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NSXDistributedFirewall extends BaseFirewall {
		vendor_id?: string | null;
	}
	export interface NSXDistributedFirewallFormProperties extends BaseFirewallFormProperties {
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateNSXDistributedFirewallFormGroup() {
		return new FormGroup<NSXDistributedFirewallFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NSXFirewallRule extends BaseFirewallRule {
		direction?: FirewallDirection | null;
		logging_enabled?: boolean | null;
		nsx_managers?: Array<Reference>;
		scope?: NSXFirewallRuleScope | null;
	}
	export interface NSXFirewallRuleFormProperties extends BaseFirewallRuleFormProperties {
		direction: FormControl<FirewallDirection | null | undefined>,
		logging_enabled: FormControl<boolean | null | undefined>,
		scope: FormControl<NSXFirewallRuleScope | null | undefined>,
	}
	export function CreateNSXFirewallRuleFormGroup() {
		return new FormGroup<NSXFirewallRuleFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<BaseFirewallRuleAction | null | undefined>(undefined),
			destination_any: new FormControl<boolean | null | undefined>(undefined),
			destination_inversion: new FormControl<boolean | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			rule_id: new FormControl<string | null | undefined>(undefined),
			section_id: new FormControl<string | null | undefined>(undefined),
			section_name: new FormControl<string | null | undefined>(undefined),
			sequence_number: new FormControl<number | null | undefined>(undefined),
			service_any: new FormControl<boolean | null | undefined>(undefined),
			source_any: new FormControl<boolean | null | undefined>(undefined),
			source_inversion: new FormControl<boolean | null | undefined>(undefined),
			direction: new FormControl<FirewallDirection | null | undefined>(undefined),
			logging_enabled: new FormControl<boolean | null | undefined>(undefined),
			scope: new FormControl<NSXFirewallRuleScope | null | undefined>(undefined),
		});

	}

	export enum NSXFirewallRuleScope { UNIVERSAL = 0, GLOBAL = 1 }

	export interface NSXIPSet extends BaseIPSet {
		nsx_managers?: Array<Reference>;
		scope?: NSXFirewallRuleScope | null;
	}
	export interface NSXIPSetFormProperties extends BaseIPSetFormProperties {
		scope: FormControl<NSXFirewallRuleScope | null | undefined>,
	}
	export function CreateNSXIPSetFormGroup() {
		return new FormGroup<NSXIPSetFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			translated_vm_count: new FormControl<number | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<NSXFirewallRuleScope | null | undefined>(undefined),
		});

	}

	export interface NSXRedirectRule extends BaseFirewallRule {
		direction?: FirewallDirection | null;
		logging_enabled?: boolean | null;
		service_profile?: string | null;
	}
	export interface NSXRedirectRuleFormProperties extends BaseFirewallRuleFormProperties {
		direction: FormControl<FirewallDirection | null | undefined>,
		logging_enabled: FormControl<boolean | null | undefined>,
		service_profile: FormControl<string | null | undefined>,
	}
	export function CreateNSXRedirectRuleFormGroup() {
		return new FormGroup<NSXRedirectRuleFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<BaseFirewallRuleAction | null | undefined>(undefined),
			destination_any: new FormControl<boolean | null | undefined>(undefined),
			destination_inversion: new FormControl<boolean | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			rule_id: new FormControl<string | null | undefined>(undefined),
			section_id: new FormControl<string | null | undefined>(undefined),
			section_name: new FormControl<string | null | undefined>(undefined),
			sequence_number: new FormControl<number | null | undefined>(undefined),
			service_any: new FormControl<boolean | null | undefined>(undefined),
			source_any: new FormControl<boolean | null | undefined>(undefined),
			source_inversion: new FormControl<boolean | null | undefined>(undefined),
			direction: new FormControl<FirewallDirection | null | undefined>(undefined),
			logging_enabled: new FormControl<boolean | null | undefined>(undefined),
			service_profile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NSXSecurityGroup extends BaseSecurityGroup {
		ip_sets?: Array<Reference>;
		nsx_managers?: Array<Reference>;
		scope?: NSXFirewallRuleScope | null;
		security_tags?: Array<Reference>;
	}
	export interface NSXSecurityGroupFormProperties extends BaseSecurityGroupFormProperties {
		scope: FormControl<NSXFirewallRuleScope | null | undefined>,
	}
	export function CreateNSXSecurityGroupFormGroup() {
		return new FormGroup<NSXSecurityGroupFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			translated_vm_count: new FormControl<number | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<NSXFirewallRuleScope | null | undefined>(undefined),
		});

	}

	export interface NSXService extends BaseService {
		nsx_managers?: Array<Reference>;
		scope?: NSXFirewallRuleScope | null;
		vendor_id?: string | null;
	}
	export interface NSXServiceFormProperties extends BaseServiceFormProperties {
		scope: FormControl<NSXFirewallRuleScope | null | undefined>,
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateNSXServiceFormGroup() {
		return new FormGroup<NSXServiceFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<NSXFirewallRuleScope | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NSXServiceGroup extends BaseServiceGroup {
		nsx_managers?: Array<Reference>;
		scope?: NSXFirewallRuleScope | null;
		vendor_id?: string | null;
	}
	export interface NSXServiceGroupFormProperties extends BaseServiceGroupFormProperties {
		scope: FormControl<NSXFirewallRuleScope | null | undefined>,
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateNSXServiceGroupFormGroup() {
		return new FormGroup<NSXServiceGroupFormProperties>({
			scope: new FormControl<NSXFirewallRuleScope | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NSXVManager extends BaseNSXManager {
		fqdn?: string | null;
		ip_address?: IpV4Address;
		primary_nsx_manager?: Reference;
		role?: string | null;
		version?: string | null;
		vm?: Reference;
	}
	export interface NSXVManagerFormProperties extends BaseNSXManagerFormProperties {
		fqdn: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateNSXVManagerFormGroup() {
		return new FormGroup<NSXVManagerFormProperties>({
			fqdn: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NSXVManagerDataSource extends BaseDataSource {
		central_cli_enabled?: boolean | null;
		credentials?: PasswordCredentials;
		ipfix_enabled?: boolean | null;

		/** Associated vcenter data source entity Id */
		vcenter_id?: string | null;
	}
	export interface NSXVManagerDataSourceFormProperties extends BaseDataSourceFormProperties {
		central_cli_enabled: FormControl<boolean | null | undefined>,
		ipfix_enabled: FormControl<boolean | null | undefined>,

		/** Associated vcenter data source entity Id */
		vcenter_id: FormControl<string | null | undefined>,
	}
	export function CreateNSXVManagerDataSourceFormGroup() {
		return new FormGroup<NSXVManagerDataSourceFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseDataSourceEntity_type | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined),
			central_cli_enabled: new FormControl<boolean | null | undefined>(undefined),
			ipfix_enabled: new FormControl<boolean | null | undefined>(undefined),
			vcenter_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PasswordCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface PasswordCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreatePasswordCredentialsFormGroup() {
		return new FormGroup<PasswordCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NSXVManagerDataSourceRequest extends BaseDataSourceRequest {
		central_cli_enabled?: boolean | null;

		/** Required */
		credentials: PasswordCredentials;
		ipfix_enabled?: boolean | null;

		/**
		 * Associated vcenter data source entity Id
		 * Required
		 */
		vcenter_id: string;
	}
	export interface NSXVManagerDataSourceRequestFormProperties extends BaseDataSourceRequestFormProperties {
		central_cli_enabled: FormControl<boolean | null | undefined>,
		ipfix_enabled: FormControl<boolean | null | undefined>,

		/**
		 * Associated vcenter data source entity Id
		 * Required
		 */
		vcenter_id: FormControl<string | null | undefined>,
	}
	export function CreateNSXVManagerDataSourceRequestFormGroup() {
		return new FormGroup<NSXVManagerDataSourceRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			central_cli_enabled: new FormControl<boolean | null | undefined>(undefined),
			ipfix_enabled: new FormControl<boolean | null | undefined>(undefined),
			vcenter_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NameRequestParam {
		entity_id?: string | null;
		time?: number | null;
	}
	export interface NameRequestParamFormProperties {
		entity_id: FormControl<string | null | undefined>,
		time: FormControl<number | null | undefined>,
	}
	export function CreateNameRequestParamFormGroup() {
		return new FormGroup<NameRequestParamFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NamesRequest {
		entities?: Array<NameRequestParam>;
	}
	export interface NamesRequestFormProperties {
	}
	export function CreateNamesRequestFormGroup() {
		return new FormGroup<NamesRequestFormProperties>({
		});

	}

	export interface NamesResponse {
		entities?: Array<EntityName>;
	}
	export interface NamesResponseFormProperties {
	}
	export function CreateNamesResponseFormGroup() {
		return new FormGroup<NamesResponseFormProperties>({
		});

	}

	export interface Node {
		entity_type?: NodeEntity_type | null;
		id?: string | null;
		ip_address?: string | null;
		name?: string | null;
		node_id?: string | null;
		node_type?: NodeNode_type | null;
	}
	export interface NodeFormProperties {
		entity_type: FormControl<NodeEntity_type | null | undefined>,
		id: FormControl<string | null | undefined>,
		ip_address: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		node_id: FormControl<string | null | undefined>,
		node_type: FormControl<NodeNode_type | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			entity_type: new FormControl<NodeEntity_type | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			node_id: new FormControl<string | null | undefined>(undefined),
			node_type: new FormControl<NodeNode_type | null | undefined>(undefined),
		});

	}

	export enum NodeEntity_type { Node = 0 }

	export enum NodeNode_type { PROXY_VM = 0, PLATFORM_VM = 1 }

	export interface NodeId {
		entity_type?: NodeEntity_type | null;

		/** Entity Identifier */
		id?: string | null;
	}
	export interface NodeIdFormProperties {
		entity_type: FormControl<NodeEntity_type | null | undefined>,

		/** Entity Identifier */
		id: FormControl<string | null | undefined>,
	}
	export function CreateNodeIdFormGroup() {
		return new FormGroup<NodeIdFormProperties>({
			entity_type: new FormControl<NodeEntity_type | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NodeListResult {
		results?: Array<NodeId>;
		total_count?: number | null;
	}
	export interface NodeListResultFormProperties {
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateNodeListResultFormGroup() {
		return new FormGroup<NodeListResultFormProperties>({
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum NodeType { Node = 0 }

	export interface PagedListResponse {
		cursor?: string | null;
		end_time?: number | null;
		results?: Array<EntityId>;
		start_time?: number | null;
		total_count?: number | null;
	}
	export interface PagedListResponseFormProperties {
		cursor: FormControl<string | null | undefined>,
		end_time: FormControl<number | null | undefined>,
		start_time: FormControl<number | null | undefined>,
		total_count: FormControl<number | null | undefined>,
	}
	export function CreatePagedListResponseFormGroup() {
		return new FormGroup<PagedListResponseFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<number | null | undefined>(undefined),
			start_time: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagedListResponseWithTime {
		cursor?: string | null;
		end_time?: number | null;
		results?: Array<EntityIdWithTime>;
		start_time?: number | null;
		total_count?: number | null;
	}
	export interface PagedListResponseWithTimeFormProperties {
		cursor: FormControl<string | null | undefined>,
		end_time: FormControl<number | null | undefined>,
		start_time: FormControl<number | null | undefined>,
		total_count: FormControl<number | null | undefined>,
	}
	export function CreatePagedListResponseWithTimeFormGroup() {
		return new FormGroup<PagedListResponseWithTimeFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<number | null | undefined>(undefined),
			start_time: new FormControl<number | null | undefined>(undefined),
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PanFirewallDataSource {
	}
	export interface PanFirewallDataSourceFormProperties {
	}
	export function CreatePanFirewallDataSourceFormGroup() {
		return new FormGroup<PanFirewallDataSourceFormProperties>({
		});

	}

	export interface PanFirewallDataSourceRequest {
	}
	export interface PanFirewallDataSourceRequestFormProperties {
	}
	export function CreatePanFirewallDataSourceRequestFormGroup() {
		return new FormGroup<PanFirewallDataSourceRequestFormProperties>({
		});

	}

	export interface ProblemEvent extends BaseEvent {
		event_close_time_epoch_ms?: number | null;
		severity?: ProblemEventSeverity | null;
	}
	export interface ProblemEventFormProperties extends BaseEventFormProperties {
		event_close_time_epoch_ms: FormControl<number | null | undefined>,
		severity: FormControl<ProblemEventSeverity | null | undefined>,
	}
	export function CreateProblemEventFormGroup() {
		return new FormGroup<ProblemEventFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			admin_state: new FormControl<BaseEventAdmin_state | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			event_time_epoch_ms: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			event_close_time_epoch_ms: new FormControl<number | null | undefined>(undefined),
			severity: new FormControl<ProblemEventSeverity | null | undefined>(undefined),
		});

	}

	export enum ProblemEventSeverity { CRITICAL = 0, MODERATE = 1, WARNING = 2, INFO = 3 }

	export enum Protocol { TCP = 0, UDP = 1, OTHER = 2 }

	export interface RecommendedRule {
		action?: RecommendedRuleAction | null;
		destinations?: Array<Reference>;
		port_ranges?: Array<SimplePortRange>;
		protocols?: Array<string>;
		sources?: Array<Reference>;
	}
	export interface RecommendedRuleFormProperties {
		action: FormControl<RecommendedRuleAction | null | undefined>,
	}
	export function CreateRecommendedRuleFormGroup() {
		return new FormGroup<RecommendedRuleFormProperties>({
			action: new FormControl<RecommendedRuleAction | null | undefined>(undefined),
		});

	}

	export enum RecommendedRuleAction { ALLOW = 0, DROP = 1 }

	export interface SimplePortRange {
		end?: number | null;
		start?: number | null;
	}
	export interface SimplePortRangeFormProperties {
		end: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
	}
	export function CreateSimplePortRangeFormGroup() {
		return new FormGroup<SimplePortRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RecommendedRules {
		results?: Array<RecommendedRule>;
		time_range?: TimeRange;
	}
	export interface RecommendedRulesFormProperties {
	}
	export function CreateRecommendedRulesFormGroup() {
		return new FormGroup<RecommendedRulesFormProperties>({
		});

	}

	export interface TimeRange {
		end_time?: number | null;
		start_time?: number | null;
	}
	export interface TimeRangeFormProperties {
		end_time: FormControl<number | null | undefined>,
		start_time: FormControl<number | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			end_time: new FormControl<number | null | undefined>(undefined),
			start_time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RecommendedRulesRequest {
		group_1?: MicroSecGroup;
		group_2?: MicroSecGroup;
		time_range?: TimeRange;
	}
	export interface RecommendedRulesRequestFormProperties {
	}
	export function CreateRecommendedRulesRequestFormGroup() {
		return new FormGroup<RecommendedRulesRequestFormProperties>({
		});

	}

	export interface ResourcePool extends BaseEntity {
		vcenter_manager?: Reference;
		vendor_id?: string | null;
	}
	export interface ResourcePoolFormProperties extends BaseEntityFormProperties {
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateResourcePoolFormGroup() {
		return new FormGroup<ResourcePoolFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SNMP2cConfig {
		community_string?: string | null;
	}
	export interface SNMP2cConfigFormProperties {
		community_string: FormControl<string | null | undefined>,
	}
	export function CreateSNMP2cConfigFormGroup() {
		return new FormGroup<SNMP2cConfigFormProperties>({
			community_string: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SNMP3Config {
		authentication_password?: string | null;
		authentication_type?: SNMP3ConfigAuthentication_type | null;
		context_name?: string | null;
		privacy_password?: string | null;
		privacy_type?: SNMP3ConfigPrivacy_type | null;
		username?: string | null;
	}
	export interface SNMP3ConfigFormProperties {
		authentication_password: FormControl<string | null | undefined>,
		authentication_type: FormControl<SNMP3ConfigAuthentication_type | null | undefined>,
		context_name: FormControl<string | null | undefined>,
		privacy_password: FormControl<string | null | undefined>,
		privacy_type: FormControl<SNMP3ConfigPrivacy_type | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateSNMP3ConfigFormGroup() {
		return new FormGroup<SNMP3ConfigFormProperties>({
			authentication_password: new FormControl<string | null | undefined>(undefined),
			authentication_type: new FormControl<SNMP3ConfigAuthentication_type | null | undefined>(undefined),
			context_name: new FormControl<string | null | undefined>(undefined),
			privacy_password: new FormControl<string | null | undefined>(undefined),
			privacy_type: new FormControl<SNMP3ConfigPrivacy_type | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SNMP3ConfigAuthentication_type { NO_AUTH = 0, MD5 = 1, SHA = 2 }

	export enum SNMP3ConfigPrivacy_type { AES = 0, DES = 1, AES128 = 2, AES192 = 3, AES256 = 4, '3DES' = 5, NO_PRIV = 6 }

	export interface SNMPConfig {
		config_snmp_2c?: SNMP2cConfig;
		config_snmp_3?: SNMP3Config;
		snmp_enabled?: boolean | null;
		snmp_version?: SNMPConfigSnmp_version | null;
	}
	export interface SNMPConfigFormProperties {
		snmp_enabled: FormControl<boolean | null | undefined>,
		snmp_version: FormControl<SNMPConfigSnmp_version | null | undefined>,
	}
	export function CreateSNMPConfigFormGroup() {
		return new FormGroup<SNMPConfigFormProperties>({
			snmp_enabled: new FormControl<boolean | null | undefined>(undefined),
			snmp_version: new FormControl<SNMPConfigSnmp_version | null | undefined>(undefined),
		});

	}

	export enum SNMPConfigSnmp_version { v2c = 0, v3 = 1 }

	export enum ScopeEnum { UNIVERSAL = 0, GLOBAL = 1 }

	export interface SearchRequest {
		cursor?: string | null;
		entity_type?: AllEntityType | null;

		/** query filter */
		filter?: string | null;
		size?: number | null;
		sort_by?: SortByClause;
		time_range?: TimeRange;
	}
	export interface SearchRequestFormProperties {
		cursor: FormControl<string | null | undefined>,
		entity_type: FormControl<AllEntityType | null | undefined>,

		/** query filter */
		filter: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
	}
	export function CreateSearchRequestFormGroup() {
		return new FormGroup<SearchRequestFormProperties>({
			cursor: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<AllEntityType | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SortByClause {
		field?: string | null;
		order?: SortByClauseOrder | null;
	}
	export interface SortByClauseFormProperties {
		field: FormControl<string | null | undefined>,
		order: FormControl<SortByClauseOrder | null | undefined>,
	}
	export function CreateSortByClauseFormGroup() {
		return new FormGroup<SortByClauseFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<SortByClauseOrder | null | undefined>(undefined),
		});

	}

	export enum SortByClauseOrder { ASC = 0, DESC = 1 }

	export interface SecurityTag extends BaseEntity {
		description?: string | null;
		direct_security_groups?: Array<Reference>;
		nsx_manager?: Reference;
		security_groups?: Array<Reference>;
		vendor_id?: string | null;
	}
	export interface SecurityTagFormProperties extends BaseEntityFormProperties {
		description: FormControl<string | null | undefined>,
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateSecurityTagFormGroup() {
		return new FormGroup<SecurityTagFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimpleListResponse {
		results?: Array<EntityId>;
		total_count?: number | null;
	}
	export interface SimpleListResponseFormProperties {
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateSimpleListResponseFormGroup() {
		return new FormGroup<SimpleListResponseFormProperties>({
			total_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SwitchDataSource extends BaseDataSource {
		credentials?: PasswordCredentials;
	}
	export interface SwitchDataSourceFormProperties extends BaseDataSourceFormProperties {
	}
	export function CreateSwitchDataSourceFormGroup() {
		return new FormGroup<SwitchDataSourceFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseDataSourceEntity_type | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SwitchDataSourceRequest extends BaseDataSourceRequest {
		credentials?: PasswordCredentials;
	}
	export interface SwitchDataSourceRequestFormProperties extends BaseDataSourceRequestFormProperties {
	}
	export function CreateSwitchDataSourceRequestFormGroup() {
		return new FormGroup<SwitchDataSourceRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Tier extends BaseEntity {
		application?: Reference;
		group_membership_criteria?: Array<GroupMembershipCriteria>;
	}
	export interface TierFormProperties extends BaseEntityFormProperties {
	}
	export function CreateTierFormGroup() {
		return new FormGroup<TierFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TierListResponse {
		results?: Array<Tier>;
	}
	export interface TierListResponseFormProperties {
	}
	export function CreateTierListResponseFormGroup() {
		return new FormGroup<TierListResponseFormProperties>({
		});

	}

	export interface TierRequest {
		group_membership_criteria?: Array<GroupMembershipCriteria>;
		name?: string | null;
	}
	export interface TierRequestFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateTierRequestFormGroup() {
		return new FormGroup<TierRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Token {

		/** expiry epoch time in secs. */
		expiry?: number | null;
		token?: string | null;
	}
	export interface TokenFormProperties {

		/** expiry epoch time in secs. */
		expiry: FormControl<number | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			expiry: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UCSManagerDataSource {
	}
	export interface UCSManagerDataSourceFormProperties {
	}
	export function CreateUCSManagerDataSourceFormGroup() {
		return new FormGroup<UCSManagerDataSourceFormProperties>({
		});

	}

	export interface UCSManagerDataSourceRequest {
	}
	export interface UCSManagerDataSourceRequestFormProperties {
	}
	export function CreateUCSManagerDataSourceRequestFormGroup() {
		return new FormGroup<UCSManagerDataSourceRequestFormProperties>({
		});

	}

	export interface UserCredential {
		domain?: Domain;
		password?: string | null;
		username?: string | null;
	}
	export interface UserCredentialFormProperties {
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserCredentialFormGroup() {
		return new FormGroup<UserCredentialFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VCDatacenter {
	}
	export interface VCDatacenterFormProperties {
	}
	export function CreateVCDatacenterFormGroup() {
		return new FormGroup<VCDatacenterFormProperties>({
		});

	}

	export interface VCenterDataSource extends BaseDataSource {
		credentials?: PasswordCredentials;
	}
	export interface VCenterDataSourceFormProperties extends BaseDataSourceFormProperties {
	}
	export function CreateVCenterDataSourceFormGroup() {
		return new FormGroup<VCenterDataSourceFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseDataSourceEntity_type | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VCenterDataSourceRequest extends BaseDataSourceRequest {
		credentials?: PasswordCredentials;
	}
	export interface VCenterDataSourceRequestFormProperties extends BaseDataSourceRequestFormProperties {
	}
	export function CreateVCenterDataSourceRequestFormGroup() {
		return new FormGroup<VCenterDataSourceRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			nickname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			proxy_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VCenterManager extends BaseManager {
		fqdn?: string | null;
		ip_address?: IpV4Address;
		nsx_manager?: Reference;
		vm?: Reference;
	}
	export interface VCenterManagerFormProperties extends BaseManagerFormProperties {
		fqdn: FormControl<string | null | undefined>,
	}
	export function CreateVCenterManagerFormGroup() {
		return new FormGroup<VCenterManagerFormProperties>({
			fqdn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VPC extends BaseEntity {
		cidr_block?: IpV4Address;
		default_vpc?: boolean | null;
		last_synched_time?: number | null;
		region?: string | null;
		state?: string | null;
		vendor_id?: string | null;
	}
	export interface VPCFormProperties extends BaseEntityFormProperties {
		default_vpc: FormControl<boolean | null | undefined>,
		last_synched_time: FormControl<number | null | undefined>,
		region: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateVPCFormGroup() {
		return new FormGroup<VPCFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			default_vpc: new FormControl<boolean | null | undefined>(undefined),
			last_synched_time: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VersionResponse {
		api_version?: string | null;
	}
	export interface VersionResponseFormProperties {
		api_version: FormControl<string | null | undefined>,
	}
	export function CreateVersionResponseFormGroup() {
		return new FormGroup<VersionResponseFormProperties>({
			api_version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VirtualMachine extends BaseVirtualMachine {
		applied_to_destination_rules?: Array<RuleSet>;
		applied_to_source_rules?: Array<RuleSet>;
		cluster?: Reference;
		datacenter?: Reference;
		datastores?: Array<Reference>;
		destination_inversion_rules?: Array<RuleSet>;
		folders?: Array<Reference>;
		host?: Reference;
		layer2_networks?: Array<Reference>;
		nsx_manager?: Reference;
		resource_pool?: Reference;
		security_tags?: Array<Reference>;
		source_inversion_rules?: Array<RuleSet>;
		vcenter_manager?: Reference;
		vendor_id?: string | null;
		vlans?: Array<Vlan>;
	}
	export interface VirtualMachineFormProperties extends BaseVirtualMachineFormProperties {
		vendor_id: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineFormGroup() {
		return new FormGroup<VirtualMachineFormProperties>({
			vendor_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VlanL2Network extends BaseL2Network {
		distributed_virtual_portgroups?: Array<Reference>;
		distributed_virtual_switches?: Array<Reference>;
		vlan_id?: string | null;
	}
	export interface VlanL2NetworkFormProperties extends BaseL2NetworkFormProperties {
		vlan_id: FormControl<string | null | undefined>,
	}
	export function CreateVlanL2NetworkFormGroup() {
		return new FormGroup<VlanL2NetworkFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			vlan_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Vmknic extends BaseEntity {
		host?: Reference;
		ip_addresses?: Array<IpV4Address>;
		layer2_network?: Reference;
		vlan?: Vlan;
	}
	export interface VmknicFormProperties extends BaseEntityFormProperties {
	}
	export function CreateVmknicFormGroup() {
		return new FormGroup<VmknicFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Vnic {
	}
	export interface VnicFormProperties {
	}
	export function CreateVnicFormGroup() {
		return new FormGroup<VnicFormProperties>({
		});

	}

	export interface VxlanLayer2Network extends BaseL2Network {
		nsx_managers?: Array<Reference>;
		scope?: NSXFirewallRuleScope | null;
		segment_id?: number | null;
		vteps?: Array<Reference>;
	}
	export interface VxlanLayer2NetworkFormProperties extends BaseL2NetworkFormProperties {
		scope: FormControl<NSXFirewallRuleScope | null | undefined>,
		segment_id: FormControl<number | null | undefined>,
	}
	export function CreateVxlanLayer2NetworkFormGroup() {
		return new FormGroup<VxlanLayer2NetworkFormProperties>({
			entity_id: new FormControl<string | null | undefined>(undefined),
			entity_type: new FormControl<BaseEntityEntity_type | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<NSXFirewallRuleScope | null | undefined>(undefined),
			segment_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete an auth token.
		 * Deletes the auth token provided in Authorization header.
		 * Deleting an expired or invalid token will result in 401 Unauthorized error.
		 * Delete auth/token
		 * @return {void} 
		 */
		Delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'auth/token', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an auth token
		 * <html><body> vRealize Network Insight supports token based authentication.Tokens are non-modifiable identifiers returned by the system when the user has successfully authenticated using valid credentials. Token expires after expiry time returned in the response. All API requests must provide the auth token in Authorization header in following format.<br> Authorization &#58; NetworkInsight {token} <br> If a token is invalid or expired, 401-Unauthorized error gets returned in the response of the API request. </body></html>
		 * Post auth/token
		 * @param {UserCredential} requestBody User Credentials
		 * @return {Token} Success
		 */
		Create(requestBody: UserCredential): Observable<Token> {
			return this.http.post<Token>(this.baseUri + 'auth/token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List arista switch data sources
		 * List arista switch data sources
		 * Get data-sources/arista-switches
		 * @return {DataSourceListResponse} OK
		 */
		ListAristaSwitches(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/arista-switches', {});
		}

		/**
		 * Create an arista switch data source
		 * Add arista switch data source
		 * Post data-sources/arista-switches
		 * @param {AristaSwitchDataSourceRequest} requestBody Add a cisco switch as datasource
		 * @return {void} 
		 */
		AddAristaSwitch(requestBody: AristaSwitchDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/arista-switches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an arista switch data source
		 * Delete an arista switch data source
		 * Delete data-sources/arista-switches/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteAristaSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/arista-switches/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show arista switch data source details
		 * Show arista switch data source details
		 * Get data-sources/arista-switches/{id}
		 * @param {string} id entity id
		 * @return {AristaSwitchDataSource} OK
		 */
		GetAristaSwitch(id: string): Observable<AristaSwitchDataSource> {
			return this.http.get<AristaSwitchDataSource>(this.baseUri + 'data-sources/arista-switches/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update an arista switch data source
		 * Update an switch data source
		 * Put data-sources/arista-switches/{id}
		 * @param {string} id entity id
		 * @return {AristaSwitchDataSource} OK
		 */
		UpdateAristaSwitch(id: string, requestBody: AristaSwitchDataSource): Observable<AristaSwitchDataSource> {
			return this.http.put<AristaSwitchDataSource>(this.baseUri + 'data-sources/arista-switches/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable an arista switch data source
		 * Disable an arista switch data source
		 * Post data-sources/arista-switches/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableAristaSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/arista-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable an arista switch data source
		 * Enable an arista switch data source
		 * Post data-sources/arista-switches/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableAristaSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/arista-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show snmp config for arista switch data source
		 * Show snmp config for arista switch data source
		 * Get data-sources/arista-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		GetAristaSwitchSnmpConfig(id: string): Observable<SNMPConfig> {
			return this.http.get<SNMPConfig>(this.baseUri + 'data-sources/arista-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', {});
		}

		/**
		 * Update snmp config for arista switch data source
		 * Update snmp config for arista switch data source
		 * Put data-sources/arista-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		UpdateAristaSwitchSnmpConfig(id: string, requestBody: SNMPConfig): Observable<SNMPConfig> {
			return this.http.put<SNMPConfig>(this.baseUri + 'data-sources/arista-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List brocade switch data sources
		 * List brocade switch data sources
		 * Get data-sources/brocade-switches
		 * @return {DataSourceListResponse} OK
		 */
		ListBrocadeSwitches(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/brocade-switches', {});
		}

		/**
		 * Create a brocade switch data source
		 * Add brocade switch as a data source
		 * Post data-sources/brocade-switches
		 * @return {void} 
		 */
		AddBrocadeSwitch(requestBody: BrocadeSwitchDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/brocade-switches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a brocade switch data source
		 * Delete a brocade switch data source
		 * Delete data-sources/brocade-switches/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteBrocadeSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/brocade-switches/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show brocade switch data source details
		 * Show brocade switch data source details
		 * Get data-sources/brocade-switches/{id}
		 * @param {string} id entity id
		 * @return {BrocadeSwitchDataSource} OK
		 */
		GetBrocadeSwitch(id: string): Observable<BrocadeSwitchDataSource> {
			return this.http.get<BrocadeSwitchDataSource>(this.baseUri + 'data-sources/brocade-switches/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a brocade switch data source
		 * Update a brocade switch data source. Only credentials, nickname and notes can be updated.
		 * Put data-sources/brocade-switches/{id}
		 * @param {string} id entity id
		 * @return {BrocadeSwitchDataSource} OK
		 */
		UpdateBrocadeSwitch(id: string, requestBody: BrocadeSwitchDataSource): Observable<BrocadeSwitchDataSource> {
			return this.http.put<BrocadeSwitchDataSource>(this.baseUri + 'data-sources/brocade-switches/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a brocade switch data source
		 * Post data-sources/brocade-switches/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableBrocadeSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/brocade-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a brocade switch data source
		 * Post data-sources/brocade-switches/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableBrocadeSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/brocade-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show snmp config for brocade switch data source
		 * Show snmp config for brocade switch data source
		 * Get data-sources/brocade-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		GetBrocadeSwitchSnmpConfig(id: string): Observable<SNMPConfig> {
			return this.http.get<SNMPConfig>(this.baseUri + 'data-sources/brocade-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', {});
		}

		/**
		 * Update snmp config for brocade switch data source
		 * Update snmp config for brocade switch data source
		 * Put data-sources/brocade-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		UpdateBrocadeSwitchSnmpConfig(id: string, requestBody: SNMPConfig): Observable<SNMPConfig> {
			return this.http.put<SNMPConfig>(this.baseUri + 'data-sources/brocade-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List checkpoint firewall data sources
		 * List checkpoint firewall data sources
		 * Get data-sources/checkpoint-firewalls
		 * @return {DataSourceListResponse} OK
		 */
		ListCheckpointFirewalls(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/checkpoint-firewalls', {});
		}

		/**
		 * Create a checkpoint firewall
		 * Add checkpoint firewall as data source
		 * Post data-sources/checkpoint-firewalls
		 * @param {CheckpointFirewallDataSourceRequest} requestBody Add a vSec Checkpoint firewall as data source
		 * @return {void} 
		 */
		AddCheckpointFirewall(requestBody: CheckpointFirewallDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/checkpoint-firewalls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a checkpoint firewall data source
		 * Delete a checkpoint firewall data source
		 * Delete data-sources/checkpoint-firewalls/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteCheckpointFirewall(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/checkpoint-firewalls/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show checkpoint firewall data source details
		 * Show checkpoint firewall data source details
		 * Get data-sources/checkpoint-firewalls/{id}
		 * @param {string} id entity id
		 * @return {CheckpointFirewallDataSource} OK
		 */
		GetCheckpointFirewall(id: string): Observable<CheckpointFirewallDataSource> {
			return this.http.get<CheckpointFirewallDataSource>(this.baseUri + 'data-sources/checkpoint-firewalls/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a checkpoint firewall data source
		 * Update a checkpoint firewall data source
		 * Put data-sources/checkpoint-firewalls/{id}
		 * @param {string} id entity id
		 * @return {CheckpointFirewallDataSource} OK
		 */
		UpdateCheckpointFirewall(id: string, requestBody: CheckpointFirewallDataSource): Observable<CheckpointFirewallDataSource> {
			return this.http.put<CheckpointFirewallDataSource>(this.baseUri + 'data-sources/checkpoint-firewalls/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a checkpoint firewall data source
		 * Disable a checkpoint firewall data source
		 * Post data-sources/checkpoint-firewalls/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableCheckpointFirewall(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/checkpoint-firewalls/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a checkpoint firewall data source
		 * Enable a checkpoint firewall data source
		 * Post data-sources/checkpoint-firewalls/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableCheckpointFirewall(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/checkpoint-firewalls/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List cisco switch data sources
		 * List cisco switch data sources
		 * Get data-sources/cisco-switches
		 * @return {DataSourceListResponse} OK
		 */
		ListCiscoSwitches(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/cisco-switches', {});
		}

		/**
		 * Create a cisco switch data source
		 * Add cisco switch as data source. User must provide one of ip or fqdn field in the request body.
		 * Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.
		 * Post data-sources/cisco-switches
		 * @param {CiscoSwitchDataSourceRequest} requestBody Add a cisco switch as datasource.
		 * @return {void} 
		 */
		AddCiscoSwitch(requestBody: CiscoSwitchDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/cisco-switches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a cisco switch data source
		 * Delete a cisco switch data source
		 * Delete data-sources/cisco-switches/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteCiscoSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/cisco-switches/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show cisco switch data source details
		 * Show cisco switch data source details
		 * Get data-sources/cisco-switches/{id}
		 * @param {string} id entity id
		 * @return {CiscoSwitchDataSource} OK
		 */
		GetCiscoSwitch(id: string): Observable<CiscoSwitchDataSource> {
			return this.http.get<CiscoSwitchDataSource>(this.baseUri + 'data-sources/cisco-switches/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a cisco switch data source
		 * Update a cisco switch data source. Only credentials, nickname and notes can be updated.
		 * Put data-sources/cisco-switches/{id}
		 * @param {string} id entity id
		 * @return {CiscoSwitchDataSource} OK
		 */
		UpdateCiscoSwitch(id: string, requestBody: CiscoSwitchDataSource): Observable<CiscoSwitchDataSource> {
			return this.http.put<CiscoSwitchDataSource>(this.baseUri + 'data-sources/cisco-switches/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a cisco switch data source
		 * Disable a cisco switch data source
		 * Post data-sources/cisco-switches/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableCiscoSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/cisco-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a cisco switch data source
		 * Enable a cisco switch data source
		 * Post data-sources/cisco-switches/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableCiscoSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/cisco-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show snmp config for cisco switch data source
		 * Show snmp config for cisco switch data source
		 * Get data-sources/cisco-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		GetCiscoSwitchSnmpConfig(id: string): Observable<SNMPConfig> {
			return this.http.get<SNMPConfig>(this.baseUri + 'data-sources/cisco-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', {});
		}

		/**
		 * Update snmp config for cisco switch data source
		 * Update snmp config for cisco switch data source
		 * Put data-sources/cisco-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		UpdateCiscoSwitchSnmpConfig(id: string, requestBody: SNMPConfig): Observable<SNMPConfig> {
			return this.http.put<SNMPConfig>(this.baseUri + 'data-sources/cisco-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List dell switch data sources
		 * List dell switch data sources
		 * Get data-sources/dell-switches
		 * @return {DataSourceListResponse} OK
		 */
		ListDellSwitches(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/dell-switches', {});
		}

		/**
		 * Create a dell switch data source
		 * Add a dell switch as data source
		 * Post data-sources/dell-switches
		 * @return {void} 
		 */
		AddDellSwitch(requestBody: DellSwitchDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/dell-switches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a dell switch data source
		 * Delete a data source
		 * Delete data-sources/dell-switches/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteDellSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/dell-switches/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show dell switch data source details
		 * Get a dell switch data source details
		 * Get data-sources/dell-switches/{id}
		 * @param {string} id entity id
		 * @return {DellSwitchDataSource} OK
		 */
		GetDellSwitch(id: string): Observable<DellSwitchDataSource> {
			return this.http.get<DellSwitchDataSource>(this.baseUri + 'data-sources/dell-switches/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a dell switch data source
		 * Update a dell switch data source. Only credentials, nickname and notes can be updated
		 * Put data-sources/dell-switches/{id}
		 * @param {string} id entity id
		 * @return {DellSwitchDataSource} OK
		 */
		UpdateDellSwitch(id: string, requestBody: DellSwitchDataSource): Observable<DellSwitchDataSource> {
			return this.http.put<DellSwitchDataSource>(this.baseUri + 'data-sources/dell-switches/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a dell switch data source
		 * Disable a dell switch data source
		 * Post data-sources/dell-switches/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableDellSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/dell-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a dell switch data source
		 * Enable a dell switch data source
		 * Post data-sources/dell-switches/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableDellSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/dell-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show snmp config for dell switch data source
		 * Show snmp config for dell switch data source
		 * Get data-sources/dell-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		GetDellSwitchSnmpConfig(id: string): Observable<SNMPConfig> {
			return this.http.get<SNMPConfig>(this.baseUri + 'data-sources/dell-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', {});
		}

		/**
		 * Update snmp config for dell switch data source
		 * Update snmp config for dell switch data source
		 * Put data-sources/dell-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		UpdateDellSwitchSnmpConfig(id: string, requestBody: SNMPConfig): Observable<SNMPConfig> {
			return this.http.put<SNMPConfig>(this.baseUri + 'data-sources/dell-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List hp oneview manager data sources
		 * List hp oneview manager data sources
		 * Get data-sources/hpov-managers
		 * @return {DataSourceListResponse} OK
		 */
		ListHpovManagers(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/hpov-managers', {});
		}

		/**
		 * Create a hp oneview manager data source
		 * Add a hp oneview manager data source
		 * Post data-sources/hpov-managers
		 * @return {void} 
		 */
		AddHpovManager(requestBody: HPOneViewManagerDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/hpov-managers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a hp oneview data source
		 * Delete a hp oneview data source
		 * Delete data-sources/hpov-managers/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteHpovManager(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/hpov-managers/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show hp oneview data source details
		 * Show hp oneview data source details
		 * Get data-sources/hpov-managers/{id}
		 * @param {string} id entity id
		 * @return {HPOneViewManagerDataSource} OK
		 */
		GetHpovManager(id: string): Observable<HPOneViewManagerDataSource> {
			return this.http.get<HPOneViewManagerDataSource>(this.baseUri + 'data-sources/hpov-managers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a hp oneview data source
		 * Update a hp oneview data source
		 * Put data-sources/hpov-managers/{id}
		 * @param {string} id entity id
		 * @return {HPOneViewManagerDataSource} OK
		 */
		UpdateHpovManager(id: string, requestBody: HPOneViewManagerDataSource): Observable<HPOneViewManagerDataSource> {
			return this.http.put<HPOneViewManagerDataSource>(this.baseUri + 'data-sources/hpov-managers/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a hp oneview data source
		 * Disable a hp oneview data source
		 * Post data-sources/hpov-managers/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableHpovManager(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/hpov-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a hp oneview data source
		 * Enable a hp oneview data source
		 * Post data-sources/hpov-managers/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableHpovManager(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/hpov-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List hpvc manager data sources
		 * List hpvc manager data sources
		 * Get data-sources/hpvc-managers
		 * @return {DataSourceListResponse} OK
		 */
		ListHpvcManagers(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/hpvc-managers', {});
		}

		/**
		 * Create a hpvc manager data source
		 * Add hpvc manager data source
		 * Post data-sources/hpvc-managers
		 * @param {HPVCManagerDataSourceRequest} requestBody Add a switch as datasource
		 * @return {void} 
		 */
		AddHpvcManager(requestBody: HPVCManagerDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/hpvc-managers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a hpvc manager data source
		 * Delete a hpvc manager data source
		 * Delete data-sources/hpvc-managers/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteHpvcManager(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/hpvc-managers/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show hpvc data source details
		 * Show hpvc data source details
		 * Get data-sources/hpvc-managers/{id}
		 * @param {string} id entity id
		 * @return {HPVCManagerDataSource} OK
		 */
		GetHpvcManager(id: string): Observable<HPVCManagerDataSource> {
			return this.http.get<HPVCManagerDataSource>(this.baseUri + 'data-sources/hpvc-managers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a hpvc manager data source
		 * Update a hpvc manager data source
		 * Put data-sources/hpvc-managers/{id}
		 * @param {string} id entity id
		 * @return {HPVCManagerDataSource} OK
		 */
		UpdateHpvcManager(id: string, requestBody: HPVCManagerDataSource): Observable<HPVCManagerDataSource> {
			return this.http.put<HPVCManagerDataSource>(this.baseUri + 'data-sources/hpvc-managers/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a hpvc manager data source
		 * Disable a hpvc manager data source
		 * Post data-sources/hpvc-managers/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableHpvcManager(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/hpvc-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a hpvc manager data source
		 * Enable a hpvc manager data source
		 * Post data-sources/hpvc-managers/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableHpvcManager(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/hpvc-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List juniper switch data sources
		 * List juniper switch data sources
		 * Get data-sources/juniper-switches
		 * @return {DataSourceListResponse} OK
		 */
		ListJuniperSwitches(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/juniper-switches', {});
		}

		/**
		 * Add a juniper switch as data source
		 * Add switch Datasource
		 * Post data-sources/juniper-switches
		 * @param {JuniperSwitchDataSourceRequest} requestBody Add a cisco switch as datasource
		 * @return {void} 
		 */
		AddJuniperSwitch(requestBody: JuniperSwitchDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/juniper-switches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a juniper switch data source
		 * Delete a juniper switch data source
		 * Delete data-sources/juniper-switches/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteJuniperSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/juniper-switches/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show juniper switch data source details
		 * Show juniper switch data source details
		 * Get data-sources/juniper-switches/{id}
		 * @param {string} id entity id
		 * @return {JuniperSwitchDataSource} OK
		 */
		GetJuniperSwitch(id: string): Observable<JuniperSwitchDataSource> {
			return this.http.get<JuniperSwitchDataSource>(this.baseUri + 'data-sources/juniper-switches/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a juniper switch data source
		 * Update a juniper switch data source
		 * Put data-sources/juniper-switches/{id}
		 * @param {string} id entity id
		 * @return {JuniperSwitchDataSource} OK
		 */
		UpdateJuniperSwitch(id: string, requestBody: JuniperSwitchDataSource): Observable<JuniperSwitchDataSource> {
			return this.http.put<JuniperSwitchDataSource>(this.baseUri + 'data-sources/juniper-switches/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a juniper switch data source
		 * Disable a juniper switch data source
		 * Post data-sources/juniper-switches/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableJuniperSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/juniper-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a juniper switch data source
		 * Enable a juniper switch data source
		 * Post data-sources/juniper-switches/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableJuniperSwitch(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/juniper-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show snmp config for juniper switch data source
		 * Show snmp config for juniper switch data source
		 * Get data-sources/juniper-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		GetJuniperSwitchSnmpConfig(id: string): Observable<SNMPConfig> {
			return this.http.get<SNMPConfig>(this.baseUri + 'data-sources/juniper-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', {});
		}

		/**
		 * Update snmp config for a juniper switch data source
		 * Update snmp config for a juniper switch data source
		 * Put data-sources/juniper-switches/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		UpdateJuniperSwitchSnmpConfig(id: string, requestBody: SNMPConfig): Observable<SNMPConfig> {
			return this.http.put<SNMPConfig>(this.baseUri + 'data-sources/juniper-switches/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List nsx-v manager data sources
		 * List nsx-v manager data sources
		 * Get data-sources/nsxv-managers
		 * @return {DataSourceListResponse} OK
		 */
		ListNsxvManagers(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/nsxv-managers', {});
		}

		/**
		 * Create a nsx-v manager data source
		 * Add a nsx-v manager data source
		 * Post data-sources/nsxv-managers
		 * @return {void} 
		 */
		AddNsxvManagerDatasource(requestBody: NSXVManagerDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/nsxv-managers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a nsx-v manager data source
		 * Delete a nsx-v manager data source
		 * Delete data-sources/nsxv-managers/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteNsxvManager(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/nsxv-managers/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show nsx-v manager data source details
		 * Show nsx-v manager data source details
		 * Get data-sources/nsxv-managers/{id}
		 * @param {string} id entity id
		 * @return {NSXVManagerDataSource} OK
		 */
		GetNsxvManager(id: string): Observable<NSXVManagerDataSource> {
			return this.http.get<NSXVManagerDataSource>(this.baseUri + 'data-sources/nsxv-managers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a nsx-v manager data source
		 * Update a nsx-v manager data source
		 * Put data-sources/nsxv-managers/{id}
		 * @param {string} id entity id
		 * @return {NSXVManagerDataSource} OK
		 */
		UpdateNsxvManager(id: string, requestBody: NSXVManagerDataSource): Observable<NSXVManagerDataSource> {
			return this.http.put<NSXVManagerDataSource>(this.baseUri + 'data-sources/nsxv-managers/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Show nsx controller-cluster details
		 * Show nsx controller-cluster details
		 * Get data-sources/nsxv-managers/{id}/controller-cluster
		 * @param {string} id entity id
		 * @return {NSXControllerDataCollection} OK
		 */
		GetNsxvControllerCluster(id: string): Observable<NSXControllerDataCollection> {
			return this.http.get<NSXControllerDataCollection>(this.baseUri + 'data-sources/nsxv-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/controller-cluster', {});
		}

		/**
		 * Update nsx controller-cluster details
		 * Update nsx controller-cluster details
		 * Put data-sources/nsxv-managers/{id}/controller-cluster
		 * @param {string} id entity id
		 * @return {NSXControllerDataCollection} OK
		 */
		UpdateNsxvControllerCluster(id: string, requestBody: NSXControllerDataCollection): Observable<NSXControllerDataCollection> {
			return this.http.put<NSXControllerDataCollection>(this.baseUri + 'data-sources/nsxv-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/controller-cluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a nsx-v manager data source
		 * Disable a nsx-v manager data source
		 * Post data-sources/nsxv-managers/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableNsxvManager(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/nsxv-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a nsx-v manager data source
		 * Enable a nsx-v manager data source
		 * Post data-sources/nsxv-managers/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableNsxvManager(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/nsxv-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List panorama firewall data sources
		 * List panorama firewall data sources
		 * Get data-sources/panorama-firewalls
		 * @return {DataSourceListResponse} OK
		 */
		ListPanoramaFirewalls(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/panorama-firewalls', {});
		}

		/**
		 * Create panorama firewall data source
		 * Add panorama firewall as data source
		 * Post data-sources/panorama-firewalls
		 * @param {PanFirewallDataSourceRequest} requestBody Add a panorama firewall as datasource
		 * @return {void} 
		 */
		AddPanoramaFirewall(requestBody: PanFirewallDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/panorama-firewalls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a panorama firewall data source
		 * Delete a panorama firewall data source
		 * Delete data-sources/panorama-firewalls/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeletePanoramaFirewall(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/panorama-firewalls/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show panorama firewall data source details
		 * Show panorama firewall data source details
		 * Get data-sources/panorama-firewalls/{id}
		 * @param {string} id entity id
		 * @return {PanFirewallDataSource} OK
		 */
		GetPanoramaFirewall(id: string): Observable<PanFirewallDataSource> {
			return this.http.get<PanFirewallDataSource>(this.baseUri + 'data-sources/panorama-firewalls/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a panorama firewall data source
		 * Update a panorama firewall data source
		 * Put data-sources/panorama-firewalls/{id}
		 * @param {string} id entity id
		 * @return {PanFirewallDataSource} OK
		 */
		UpdatePanoramaFirewall(id: string, requestBody: PanFirewallDataSource): Observable<PanFirewallDataSource> {
			return this.http.put<PanFirewallDataSource>(this.baseUri + 'data-sources/panorama-firewalls/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a panorama firewall data source
		 * Disable a panorama firewall data source
		 * Post data-sources/panorama-firewalls/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisablePanoramaFirewall(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/panorama-firewalls/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a panorama firewall data source
		 * Enable a panorama firewall data source
		 * Post data-sources/panorama-firewalls/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnablePanoramaFirewall(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/panorama-firewalls/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List ucs manager data sources
		 * List ucs manager data sources
		 * Get data-sources/ucs-managers
		 * @return {DataSourceListResponse} OK
		 */
		ListUcsManagers(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/ucs-managers', {});
		}

		/**
		 * Create an ucs manager data source
		 * Add an ucs manager as data source
		 * Post data-sources/ucs-managers
		 * @return {void} 
		 */
		AddUcsManager(requestBody: UCSManagerDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/ucs-managers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an ucs manager data source
		 * Delete an ucs manager data source
		 * Delete data-sources/ucs-managers/{id}
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DeleteUcsManager(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/ucs-managers/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show ucs manager data source details
		 * Show ucs manager data source details
		 * Get data-sources/ucs-managers/{id}
		 * @param {string} id entity id
		 * @return {UCSManagerDataSource} OK
		 */
		GetUcsManager(id: string): Observable<UCSManagerDataSource> {
			return this.http.get<UCSManagerDataSource>(this.baseUri + 'data-sources/ucs-managers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update an ucs manager data source
		 * Update an ucs manager data source
		 * Put data-sources/ucs-managers/{id}
		 * @param {string} id entity id
		 * @return {UCSManagerDataSource} OK
		 */
		UpdateUcsManager(id: string, requestBody: UCSManagerDataSource): Observable<UCSManagerDataSource> {
			return this.http.put<UCSManagerDataSource>(this.baseUri + 'data-sources/ucs-managers/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable an ucs manager data source
		 * Disable an ucs manager data source
		 * Post data-sources/ucs-managers/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableUcsManager(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/ucs-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable an ucs manager data source
		 * Enable an ucs manager data source
		 * Post data-sources/ucs-managers/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableUcsManager(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/ucs-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show snmp config for ucs fabric interconnects
		 * Show snmp config for ucs fabric interconnects
		 * Get data-sources/ucs-managers/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		GetUcsSnmpConfig(id: string): Observable<SNMPConfig> {
			return this.http.get<SNMPConfig>(this.baseUri + 'data-sources/ucs-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', {});
		}

		/**
		 * Update snmp config for ucs fabric interconnects
		 * Update snmp config for ucs fabric interconnects
		 * Put data-sources/ucs-managers/{id}/snmp-config
		 * @param {string} id entity id
		 * @return {SNMPConfig} OK
		 */
		UpdateUcsSnmpConfig(id: string, requestBody: SNMPConfig): Observable<SNMPConfig> {
			return this.http.put<SNMPConfig>(this.baseUri + 'data-sources/ucs-managers/' + (id == null ? '' : encodeURIComponent(id)) + '/snmp-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List vCenter data sources
		 * List vCenter data sources
		 * Get data-sources/vcenters
		 * @return {DataSourceListResponse} OK
		 */
		ListVcenters(): Observable<DataSourceListResponse> {
			return this.http.get<DataSourceListResponse>(this.baseUri + 'data-sources/vcenters', {});
		}

		/**
		 * Create a vCenter data source
		 * Add a vcenter data source. User must provide one of ip or fqdn field in the request body.
		 * Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.
		 * Post data-sources/vcenters
		 * @param {VCenterDataSourceRequest} requestBody VCenter Credentials
		 * @return {void} 
		 */
		AddVcenterDatasource(requestBody: VCenterDataSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/vcenters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a vCenter data source
		 * Delete a data source
		 * Delete data-sources/vcenters/{id}
		 * @param {string} id entity id
		 * @return {void} 
		 */
		DeleteVcenter(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'data-sources/vcenters/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show vCenter data source details
		 * Show vCenter data source details
		 * Get data-sources/vcenters/{id}
		 * @param {string} id entity id
		 * @return {VCenterDataSource} OK
		 */
		GetVcenter(id: string): Observable<VCenterDataSource> {
			return this.http.get<VCenterDataSource>(this.baseUri + 'data-sources/vcenters/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a vCenter data source.
		 * Update a vcenter data source. Only nickname, notes and credentials can be updated.
		 * Put data-sources/vcenters/{id}
		 * @param {string} id entity id
		 * @return {VCenterDataSource} OK
		 */
		UpdateVcenter(id: string, requestBody: VCenterDataSource): Observable<VCenterDataSource> {
			return this.http.put<VCenterDataSource>(this.baseUri + 'data-sources/vcenters/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a vCenter data source
		 * Disable a vCenter data source
		 * Post data-sources/vcenters/{id}/disable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		DisableVcenter(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/vcenters/' + (id == null ? '' : encodeURIComponent(id)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a vCenter data source
		 * Enable a vCenter data source
		 * Post data-sources/vcenters/{id}/enable
		 * @param {string} id entity id
		 * @return {void} OK
		 */
		EnableVcenter(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data-sources/vcenters/' + (id == null ? '' : encodeURIComponent(id)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List clusters
		 * List clusters
		 * Get entities/clusters
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListClusters(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/clusters?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show cluster details
		 * Show cluster details
		 * Get entities/clusters/{id}
		 * @param {number} time time in epoch seconds
		 * @param {string} id entity id
		 * @return {Cluster} OK
		 */
		GetCluster(time: number | null | undefined, id: string): Observable<Cluster> {
			return this.http.get<Cluster>(this.baseUri + 'entities/clusters/' + (id == null ? '' : encodeURIComponent(id)) + '?time=' + time, {});
		}

		/**
		 * List datastores
		 * List datastores
		 * Get entities/datastores
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListDatastores(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/datastores?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show datastore details
		 * Show datastore details
		 * Get entities/datastores/{id}
		 * @param {number} time time in epoch seconds
		 * @param {string} id entity id
		 * @return {Datastore} OK
		 */
		GetDatastore(time: number | null | undefined, id: string): Observable<Datastore> {
			return this.http.get<Datastore>(this.baseUri + 'entities/datastores/' + (id == null ? '' : encodeURIComponent(id)) + '?time=' + time, {});
		}

		/**
		 * List distributed virtual portgroups
		 * List distributed virtual portgroups
		 * Get entities/distributed-virtual-portgroups
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListDistributedVirtualPortgroups(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/distributed-virtual-portgroups?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show distributed virtual portgroup details
		 * Show distributed virtual portgroup details
		 * Get entities/distributed-virtual-portgroups/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {DistributedVirtualPortgroup} OK
		 */
		GetDistributedVirtualPortgroup(id: string, time: number | null | undefined): Observable<DistributedVirtualPortgroup> {
			return this.http.get<DistributedVirtualPortgroup>(this.baseUri + 'entities/distributed-virtual-portgroups/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List distributed virtual switches
		 * List distributed virtual switches
		 * Get entities/distributed-virtual-switches
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListDistributedVirtualSwitches(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/distributed-virtual-switches?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show distributed virtual switch details
		 * Show distributed virtual switch details
		 * Get entities/distributed-virtual-switches/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {DistributedVirtualSwitch} OK
		 */
		GetDistributedVirtualSwitch(id: string, time: number | null | undefined): Observable<DistributedVirtualSwitch> {
			return this.http.get<DistributedVirtualSwitch>(this.baseUri + 'entities/distributed-virtual-switches/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List firewall rules
		 * List firewall rules
		 * Get entities/firewall-rules
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListFirewallRules(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/firewall-rules?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show firewall rule details
		 * Show firewall rule details
		 * Get entities/firewall-rules/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseFirewallRule} OK
		 */
		GetFirewallRule(id: string, time: number | null | undefined): Observable<BaseFirewallRule> {
			return this.http.get<BaseFirewallRule>(this.baseUri + 'entities/firewall-rules/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List firewalls
		 * List firewalls
		 * Get entities/firewalls
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListFirewalls(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/firewalls?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show firewall details
		 * Show firewall details
		 * Get entities/firewalls/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseFirewallRule} OK
		 */
		GetFirewall(id: string, time: number | null | undefined): Observable<BaseFirewallRule> {
			return this.http.get<BaseFirewallRule>(this.baseUri + 'entities/firewalls/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List flows
		 * List flows
		 * Get entities/flows
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		GetFlows(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/flows?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show flow details
		 * Show flow details
		 * Get entities/flows/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {Flow} OK
		 */
		GetFlow(id: string, time: number | null | undefined): Observable<Flow> {
			return this.http.get<Flow>(this.baseUri + 'entities/flows/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List folders
		 * List folders
		 * Get entities/folders
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListFolders(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/folders?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show folder details
		 * Show folder details
		 * Get entities/folders/{id}
		 * @param {number} time time in epoch seconds
		 * @param {string} id entity id
		 * @return {Folder} OK
		 */
		GetFolder(time: number | null | undefined, id: string): Observable<Folder> {
			return this.http.get<Folder>(this.baseUri + 'entities/folders/' + (id == null ? '' : encodeURIComponent(id)) + '?time=' + time, {});
		}

		/**
		 * List hosts
		 * List hosts
		 * Get entities/hosts
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListHosts(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/hosts?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show host details
		 * Show host details
		 * Get entities/hosts/{id}
		 * @param {number} time time in epoch seconds
		 * @param {string} id entity id
		 * @return {Host} OK
		 */
		GetHost(time: number | null | undefined, id: string): Observable<Host> {
			return this.http.get<Host>(this.baseUri + 'entities/hosts/' + (id == null ? '' : encodeURIComponent(id)) + '?time=' + time, {});
		}

		/**
		 * List ip sets
		 * List ip sets
		 * Get entities/ip-sets
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListIPSets(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/ip-sets?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show ip set details
		 * Show ip set details
		 * Get entities/ip-sets/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseIPSet} OK
		 */
		GetIPSet(id: string, time: number | null | undefined): Observable<BaseIPSet> {
			return this.http.get<BaseIPSet>(this.baseUri + 'entities/ip-sets/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List layer2 networks
		 * List layer2 networks
		 * Get entities/layer2-networks
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListLayer2Networks(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/layer2-networks?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show layer2 network details
		 * Show layer2 network details
		 * Get entities/layer2-networks/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseL2Network} OK
		 */
		GetLayer2Network(id: string, time: number | null | undefined): Observable<BaseL2Network> {
			return this.http.get<BaseL2Network>(this.baseUri + 'entities/layer2-networks/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * Get names for entities
		 * Get names for entities.Limit of 1000 entities in a single request.
		 * Post entities/names
		 * @param {NamesRequest} requestBody Names Request
		 * @return {NamesResponse} OK
		 */
		GetNames(requestBody: NamesRequest): Observable<NamesResponse> {
			return this.http.post<NamesResponse>(this.baseUri + 'entities/names', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get name of an entity
		 * Get name of an entity
		 * Get entities/names/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {EntityName} OK
		 */
		GetName(id: string, time: number | null | undefined): Observable<EntityName> {
			return this.http.get<EntityName>(this.baseUri + 'entities/names/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List nsx managers
		 * List nsx managers
		 * Get entities/nsx-managers
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListNSXManagers(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/nsx-managers?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show nsx manager details
		 * Show nsx manager details
		 * Get entities/nsx-managers/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseNSXManager} OK
		 */
		GetNSXManager(id: string, time: number | null | undefined): Observable<BaseNSXManager> {
			return this.http.get<BaseNSXManager>(this.baseUri + 'entities/nsx-managers/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List problems
		 * List problem events.
		 * Get entities/problems
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListProblemEvents(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/problems?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show problem details
		 * Show problem event details.
		 * Get entities/problems/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {ProblemEvent} OK
		 */
		GetProblemEvent(id: string, time: number | null | undefined): Observable<ProblemEvent> {
			return this.http.get<ProblemEvent>(this.baseUri + 'entities/problems/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List security groups
		 * List security groups
		 * Get entities/security-groups
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListSecurityGroups(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/security-groups?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show security group details
		 * Show security group details
		 * Get entities/security-groups/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseSecurityGroup} OK
		 */
		GetSecurityGroup(id: string, time: number | null | undefined): Observable<BaseSecurityGroup> {
			return this.http.get<BaseSecurityGroup>(this.baseUri + 'entities/security-groups/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List security tags
		 * List security tags
		 * Get entities/security-tags
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListSecurityTags(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/security-tags?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show security tag details
		 * Show security tag details
		 * Get entities/security-tags/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {SecurityTag} OK
		 */
		GetSecurityTag(id: string, time: number | null | undefined): Observable<SecurityTag> {
			return this.http.get<SecurityTag>(this.baseUri + 'entities/security-tags/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List service groups
		 * List service groups
		 * Get entities/service-groups
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListServiceGroups(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/service-groups?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show service group details
		 * Show service group details
		 * Get entities/service-groups/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseServiceGroup} OK
		 */
		GetServiceGroup(id: string, time: number | null | undefined): Observable<BaseServiceGroup> {
			return this.http.get<BaseServiceGroup>(this.baseUri + 'entities/service-groups/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List services
		 * List services
		 * Get entities/services
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListServices(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/services?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show service details
		 * Show service details
		 * Get entities/services/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseService} OK
		 */
		GetService(id: string, time: number | null | undefined): Observable<BaseService> {
			return this.http.get<BaseService>(this.baseUri + 'entities/services/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List vCenter datacenters
		 * List vCenter datacenters
		 * Get entities/vc-datacenters
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListDatacenters(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/vc-datacenters?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show vCenter datacenter details
		 * Show vCenter datacenter details
		 * Get entities/vc-datacenters/{id}
		 * @param {number} time time in epoch seconds
		 * @param {string} id entity id
		 * @return {VCDatacenter} OK
		 */
		GetDatacenter(time: number | null | undefined, id: string): Observable<VCDatacenter> {
			return this.http.get<VCDatacenter>(this.baseUri + 'entities/vc-datacenters/' + (id == null ? '' : encodeURIComponent(id)) + '?time=' + time, {});
		}

		/**
		 * List vCenter managers
		 * List vCenter managers
		 * Get entities/vcenter-managers
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListVcenterManagers(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/vcenter-managers?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show vCenter manager details
		 * Show vCenter manager details
		 * Get entities/vcenter-managers/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {VCenterManager} OK
		 */
		GetVcenterManager(id: string, time: number | null | undefined): Observable<VCenterManager> {
			return this.http.get<VCenterManager>(this.baseUri + 'entities/vcenter-managers/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List vmknics
		 * List vmknics
		 * Get entities/vmknics
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListVmknics(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/vmknics?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show vmknic details
		 * Show vmknic details
		 * Get entities/vmknics/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {Vmknic} OK
		 */
		GetVmknic(id: string, time: number | null | undefined): Observable<Vmknic> {
			return this.http.get<Vmknic>(this.baseUri + 'entities/vmknics/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List vms
		 * List vms
		 * Get entities/vms
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListVms(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/vms?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show vm details
		 * Show vm details
		 * Get entities/vms/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseVirtualMachine} OK
		 */
		GetVm(id: string, time: number | null | undefined): Observable<BaseVirtualMachine> {
			return this.http.get<BaseVirtualMachine>(this.baseUri + 'entities/vms/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List vnics
		 * List vnics
		 * Get entities/vnics
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponseWithTime} OK
		 */
		ListVnics(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponseWithTime> {
			return this.http.get<PagedListResponseWithTime>(this.baseUri + 'entities/vnics?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Show vnic details
		 * Show vnic details
		 * Get entities/vnics/{id}
		 * @param {string} id entity id
		 * @param {number} time time in epoch seconds
		 * @return {BaseVnic} OK
		 */
		GetVnic(id: string, time: number | null | undefined): Observable<BaseVnic> {
			return this.http.get<BaseVnic>(this.baseUri + 'entities/vnics/' + (id == null ? '' : encodeURIComponent(id)) + '&time=' + time, {});
		}

		/**
		 * List applications
		 * List applications
		 * Get groups/applications
		 * @param {number} size page size of results
		 * @param {string} cursor cursor from previous response
		 * @param {number} start_time start time for query in epoch seconds
		 * @param {number} end_time end time for query in epoch seconds
		 * @return {PagedListResponse} OK
		 */
		ListApplications(size: number | null | undefined, cursor: string | null | undefined, start_time: number | null | undefined, end_time: number | null | undefined): Observable<PagedListResponse> {
			return this.http.get<PagedListResponse>(this.baseUri + 'groups/applications?size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_time=' + start_time + '&end_time=' + end_time, {});
		}

		/**
		 * Create an application
		 * Application is a group of tiers. A tier is a group of virtual machines based on membership criteria. Tiers are bound to single
		 * application. An application name is unique and should not conflict with another application name.
		 * Post groups/applications
		 * @return {void} 
		 */
		AddApplication(requestBody: ApplicationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'groups/applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an application
		 * Deleting an application deletes all the tiers of the application along with the application
		 * Delete groups/applications/{id}
		 * @param {string} id entity id
		 * @return {void} 
		 */
		DeleteApplication(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/applications/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show application details
		 * Show application details
		 * Get groups/applications/{id}
		 * @param {string} id entity id
		 * @return {Application} OK
		 */
		GetApplication(id: string): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'groups/applications/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List tiers of an application
		 * List tiers of an application
		 * Get groups/applications/{id}/tiers
		 * @param {string} id entity id
		 * @return {TierListResponse} OK
		 */
		ListApplicationTiers(id: string): Observable<TierListResponse> {
			return this.http.get<TierListResponse>(this.baseUri + 'groups/applications/' + (id == null ? '' : encodeURIComponent(id)) + '/tiers', {});
		}

		/**
		 * Create tier in application
		 * Create a tier of an application by with specified membership criteria. The membership criteria id defined in terms of
		 * virtual machines or ip addresses/subnet. Please refer to API Guide on how to construct membership criteria.
		 * Post groups/applications/{id}/tiers
		 * @param {string} id entity id
		 * @return {void} 
		 */
		AddTier(id: string, requestBody: TierRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'groups/applications/' + (id == null ? '' : encodeURIComponent(id)) + '/tiers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete tier
		 * Delete tier of an application
		 * Delete groups/applications/{id}/tiers/{tier_id}
		 * @param {string} id entity id
		 * @return {void} 
		 */
		DeleteTier(id: string, tier_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'groups/applications/' + (id == null ? '' : encodeURIComponent(id)) + '/tiers/{tier_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Show tier details
		 * Show tier details
		 * Get groups/applications/{id}/tiers/{tier_id}
		 * @param {string} id entity id
		 * @return {Tier} OK
		 */
		GetApplicationTier(id: string, tier_id: string): Observable<Tier> {
			return this.http.get<Tier>(this.baseUri + 'groups/applications/' + (id == null ? '' : encodeURIComponent(id)) + '/tiers/{tier_id}', {});
		}

		/**
		 * Show tier details
		 * Show tier details
		 * Get groups/tiers/{tier_id}
		 * @return {Tier} OK
		 */
		GetTier(tier_id: string): Observable<Tier> {
			return this.http.get<Tier>(this.baseUri + 'groups/tiers/{tier_id}', {});
		}

		/**
		 * Show version info
		 * Show version info
		 * Get info/version
		 * @return {VersionResponse} OK
		 */
		GetVersion(): Observable<VersionResponse> {
			return this.http.get<VersionResponse>(this.baseUri + 'info/version', {});
		}

		/**
		 * List nodes
		 * Get list of infrastructure nodes. Only admin users can retrieve this information.
		 * Get infra/nodes
		 * @return {NodeListResult} OK
		 */
		ListNodes(): Observable<NodeListResult> {
			return this.http.get<NodeListResult>(this.baseUri + 'infra/nodes', {});
		}

		/**
		 * Show node details
		 * Get details of infrastructure nodes. Only admin users can get this information. The proxy id is
		 * required for adding a data source for selecting appropriate proxy node to add the data source.
		 * Get infra/nodes/{id}
		 * @param {string} id entity id
		 * @return {Node} OK
		 */
		GetNode(id: string): Observable<Node> {
			return this.http.get<Node>(this.baseUri + 'infra/nodes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get logical recommended rules
		 * Get recommended firewall rules based on the flow data gathered by vRealize Network Insight.
		 * This API provides service to retrieve recommended rules based on flow traffic that is observed between
		 * two groups OR for a single group based on all the inbound and outboud traffic for that group.
		 * In case two groups are provided, both the groups should be of same type.
		 * Currently supported groups are Application, Tier, NSXSecurityGroup, EC2SecurityGroup.
		 * Post micro-seg/recommended-rules
		 * @param {RecommendedRulesRequest} requestBody Recommended Rules Request
		 * @return {RecommendedRules} Success
		 */
		ListRecommendedRules(requestBody: RecommendedRulesRequest): Observable<RecommendedRules> {
			return this.http.post<RecommendedRules>(this.baseUri + 'micro-seg/recommended-rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Export recommended rules for NSX-V
		 * Export recommended firewall rules based on the flow data gathered by vRealize Network Insight in NSX-V compatible
		 * format
		 * Post micro-seg/recommended-rules/nsx
		 * @param {RecommendedRulesRequest} requestBody NSX Recommended Rules Request
		 * @return {void} Success
		 */
		ExportNsxRecommendedRules(requestBody: RecommendedRulesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'micro-seg/recommended-rules/nsx', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search entities
		 * Using search API you can search vRealize Network Insight entities by specifying entity type and filter expression.
		 * A filter expression is a predicate expression (similar to SQL where clause) used to define the search criteria.
		 * Please refer to API Guide on details of how to construct filter expression. A successful search request will return a
		 * list of entity ids that matches the search criteria.
		 * Post search
		 * @param {SearchRequest} requestBody Search Request
		 * @return {PagedListResponseWithTime} Success
		 */
		SearchEntities(requestBody: SearchRequest): Observable<PagedListResponseWithTime> {
			return this.http.post<PagedListResponseWithTime>(this.baseUri + 'search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

