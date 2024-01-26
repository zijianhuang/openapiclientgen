import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface APIKey {
		client_id?: string | null;
		comment?: string | null;
		counter?: number | null;
		created_at?: number | null;
		created_by?: string | null;

		/** Required */
		id: string;
		inactive?: boolean | null;
		last_used_at?: number | null;
		last_used_ip?: string | null;
		last_used_ua?: string | null;
		organization_id?: string | null;
		token?: string | null;
		type?: string | null;
		usage_limit?: number | null;
		usage_today?: number | null;
	}
	export interface APIKeyFormProperties {
		client_id: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
		counter: FormControl<number | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		created_by: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		inactive: FormControl<boolean | null | undefined>,
		last_used_at: FormControl<number | null | undefined>,
		last_used_ip: FormControl<string | null | undefined>,
		last_used_ua: FormControl<string | null | undefined>,
		organization_id: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		usage_limit: FormControl<number | null | undefined>,
		usage_today: FormControl<number | null | undefined>,
	}
	export function CreateAPIKeyFormGroup() {
		return new FormGroup<APIKeyFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			counter: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inactive: new FormControl<boolean | null | undefined>(undefined),
			last_used_at: new FormControl<number | null | undefined>(undefined),
			last_used_ip: new FormControl<string | null | undefined>(undefined),
			last_used_ua: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			usage_limit: new FormControl<number | null | undefined>(undefined),
			usage_today: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface APIKeyOptions {
		comment?: string | null;
		organization_id?: string | null;
	}
	export interface APIKeyOptionsFormProperties {
		comment: FormControl<string | null | undefined>,
		organization_id: FormControl<string | null | undefined>,
	}
	export function CreateAPIKeyOptionsFormGroup() {
		return new FormGroup<APIKeyOptionsFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AWSCredentialFields {

		/** Required */
		access_key: string;
		regions?: string | null;
		role?: string | null;

		/** Required */
		secret_access_key: string;
		use_cross_account_org?: string | null;
	}
	export interface AWSCredentialFieldsFormProperties {

		/** Required */
		access_key: FormControl<string | null | undefined>,
		regions: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,

		/** Required */
		secret_access_key: FormControl<string | null | undefined>,
		use_cross_account_org: FormControl<string | null | undefined>,
	}
	export function CreateAWSCredentialFieldsFormGroup() {
		return new FormGroup<AWSCredentialFieldsFormProperties>({
			access_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			regions: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			secret_access_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			use_cross_account_org: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Agent {
		arch?: string | null;
		client_id?: string | null;
		connected?: boolean | null;
		created_at?: number | null;
		deactivated_at?: number | null;
		external_ip?: string | null;
		host_id?: string | null;
		hub_id?: string | null;

		/** Required */
		id: string;
		inactive?: boolean | null;
		internal_ip?: string | null;
		last_checkin?: number | null;
		name?: string | null;
		organization_id?: string | null;
		os?: string | null;
		site_id?: string | null;
		system_info?: string | null;
		updated_at?: number | null;
		version?: string | null;
	}
	export interface AgentFormProperties {
		arch: FormControl<string | null | undefined>,
		client_id: FormControl<string | null | undefined>,
		connected: FormControl<boolean | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		deactivated_at: FormControl<number | null | undefined>,
		external_ip: FormControl<string | null | undefined>,
		host_id: FormControl<string | null | undefined>,
		hub_id: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		inactive: FormControl<boolean | null | undefined>,
		internal_ip: FormControl<string | null | undefined>,
		last_checkin: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		organization_id: FormControl<string | null | undefined>,
		os: FormControl<string | null | undefined>,
		site_id: FormControl<string | null | undefined>,
		system_info: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateAgentFormGroup() {
		return new FormGroup<AgentFormProperties>({
			arch: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			connected: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			deactivated_at: new FormControl<number | null | undefined>(undefined),
			external_ip: new FormControl<string | null | undefined>(undefined),
			host_id: new FormControl<string | null | undefined>(undefined),
			hub_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inactive: new FormControl<boolean | null | undefined>(undefined),
			internal_ip: new FormControl<string | null | undefined>(undefined),
			last_checkin: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			site_id: new FormControl<string | null | undefined>(undefined),
			system_info: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AgentSiteID {

		/** Required */
		site_id: string;
	}
	export interface AgentSiteIDFormProperties {

		/** Required */
		site_id: FormControl<string | null | undefined>,
	}
	export function CreateAgentSiteIDFormGroup() {
		return new FormGroup<AgentSiteIDFormProperties>({
			site_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Asset {
		addresses?: Array<string>;
		addresses_extra?: Array<string>;
		agent_name?: string | null;
		alive?: string | null;
		attributes?: {[id: string]: string };
		comments?: string | null;
		created_at?: number | null;
		credentials?: {[id: string]: string };
		detected_by?: string | null;
		domains?: Array<string>;
		first_seen?: number | null;
		hw?: string | null;

		/** Required */
		id: string;
		last_agent_id?: string | null;
		last_seen?: number | null;
		last_task_id?: string | null;
		lowest_rtt?: number | null;
		lowest_ttl?: number | null;
		mac_vendors?: Array<string>;
		macs?: Array<string>;
		names?: Array<string>;
		newest_mac?: string | null;
		newest_mac_age?: number | null;
		newest_mac_vendor?: string | null;
		org_name?: string | null;
		organization_id?: string | null;
		os?: string | null;
		os_version?: string | null;
		rtts?: string | null;
		service_count?: number | null;
		service_count_arp?: number | null;
		service_count_icmp?: number | null;
		service_count_tcp?: number | null;
		service_count_udp?: number | null;
		service_ports_products?: Array<string>;
		service_ports_protocols?: Array<string>;
		service_ports_tcp?: Array<string>;
		service_ports_udp?: Array<string>;
		services?: {[id: string]: any };
		site_id?: string | null;
		site_name?: string | null;
		tags?: {[id: string]: string };
		type?: string | null;
		updated_at?: number | null;
	}
	export interface AssetFormProperties {
		agent_name: FormControl<string | null | undefined>,
		alive: FormControl<string | null | undefined>,
		attributes: FormControl<{[id: string]: string } | null | undefined>,
		comments: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		credentials: FormControl<{[id: string]: string } | null | undefined>,
		detected_by: FormControl<string | null | undefined>,
		first_seen: FormControl<number | null | undefined>,
		hw: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		last_agent_id: FormControl<string | null | undefined>,
		last_seen: FormControl<number | null | undefined>,
		last_task_id: FormControl<string | null | undefined>,
		lowest_rtt: FormControl<number | null | undefined>,
		lowest_ttl: FormControl<number | null | undefined>,
		newest_mac: FormControl<string | null | undefined>,
		newest_mac_age: FormControl<number | null | undefined>,
		newest_mac_vendor: FormControl<string | null | undefined>,
		org_name: FormControl<string | null | undefined>,
		organization_id: FormControl<string | null | undefined>,
		os: FormControl<string | null | undefined>,
		os_version: FormControl<string | null | undefined>,
		rtts: FormControl<string | null | undefined>,
		service_count: FormControl<number | null | undefined>,
		service_count_arp: FormControl<number | null | undefined>,
		service_count_icmp: FormControl<number | null | undefined>,
		service_count_tcp: FormControl<number | null | undefined>,
		service_count_udp: FormControl<number | null | undefined>,
		services: FormControl<{[id: string]: any } | null | undefined>,
		site_id: FormControl<string | null | undefined>,
		site_name: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			agent_name: new FormControl<string | null | undefined>(undefined),
			alive: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			credentials: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			detected_by: new FormControl<string | null | undefined>(undefined),
			first_seen: new FormControl<number | null | undefined>(undefined),
			hw: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_agent_id: new FormControl<string | null | undefined>(undefined),
			last_seen: new FormControl<number | null | undefined>(undefined),
			last_task_id: new FormControl<string | null | undefined>(undefined),
			lowest_rtt: new FormControl<number | null | undefined>(undefined),
			lowest_ttl: new FormControl<number | null | undefined>(undefined),
			newest_mac: new FormControl<string | null | undefined>(undefined),
			newest_mac_age: new FormControl<number | null | undefined>(undefined),
			newest_mac_vendor: new FormControl<string | null | undefined>(undefined),
			org_name: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			os_version: new FormControl<string | null | undefined>(undefined),
			rtts: new FormControl<string | null | undefined>(undefined),
			service_count: new FormControl<number | null | undefined>(undefined),
			service_count_arp: new FormControl<number | null | undefined>(undefined),
			service_count_icmp: new FormControl<number | null | undefined>(undefined),
			service_count_tcp: new FormControl<number | null | undefined>(undefined),
			service_count_udp: new FormControl<number | null | undefined>(undefined),
			services: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			site_id: new FormControl<string | null | undefined>(undefined),
			site_name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AssetComments {

		/** Required */
		comments: string;
	}
	export interface AssetCommentsFormProperties {

		/** Required */
		comments: FormControl<string | null | undefined>,
	}
	export function CreateAssetCommentsFormGroup() {
		return new FormGroup<AssetCommentsFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetServiceNow {
		addresses_extra?: string | null;
		addresses_scope?: string | null;
		alive?: string | null;

		/** Required */
		asset_id: string;
		comments?: string | null;
		detected_by?: string | null;
		domains?: string | null;
		first_discovered?: string | null;
		hw_product?: string | null;
		hw_vendor?: string | null;
		hw_version?: string | null;
		ip_address?: string | null;
		last_discovered?: string | null;
		last_updated?: string | null;
		lowest_rtt?: number | null;
		lowest_ttl?: number | null;
		mac_address?: string | null;
		mac_manufacturer?: string | null;
		mac_vendors?: string | null;
		macs?: string | null;
		name?: string | null;
		newest_mac_age?: string | null;
		organization?: string | null;
		os_product?: string | null;
		os_vendor?: string | null;
		os_version?: string | null;
		service_count?: number | null;
		service_count_arp?: number | null;
		service_count_icmp?: number | null;
		service_count_tcp?: number | null;
		service_count_udp?: number | null;
		site?: string | null;
		sys_class_name?: string | null;
		tags?: string | null;
		type?: string | null;
	}
	export interface AssetServiceNowFormProperties {
		addresses_extra: FormControl<string | null | undefined>,
		addresses_scope: FormControl<string | null | undefined>,
		alive: FormControl<string | null | undefined>,

		/** Required */
		asset_id: FormControl<string | null | undefined>,
		comments: FormControl<string | null | undefined>,
		detected_by: FormControl<string | null | undefined>,
		domains: FormControl<string | null | undefined>,
		first_discovered: FormControl<string | null | undefined>,
		hw_product: FormControl<string | null | undefined>,
		hw_vendor: FormControl<string | null | undefined>,
		hw_version: FormControl<string | null | undefined>,
		ip_address: FormControl<string | null | undefined>,
		last_discovered: FormControl<string | null | undefined>,
		last_updated: FormControl<string | null | undefined>,
		lowest_rtt: FormControl<number | null | undefined>,
		lowest_ttl: FormControl<number | null | undefined>,
		mac_address: FormControl<string | null | undefined>,
		mac_manufacturer: FormControl<string | null | undefined>,
		mac_vendors: FormControl<string | null | undefined>,
		macs: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		newest_mac_age: FormControl<string | null | undefined>,
		organization: FormControl<string | null | undefined>,
		os_product: FormControl<string | null | undefined>,
		os_vendor: FormControl<string | null | undefined>,
		os_version: FormControl<string | null | undefined>,
		service_count: FormControl<number | null | undefined>,
		service_count_arp: FormControl<number | null | undefined>,
		service_count_icmp: FormControl<number | null | undefined>,
		service_count_tcp: FormControl<number | null | undefined>,
		service_count_udp: FormControl<number | null | undefined>,
		site: FormControl<string | null | undefined>,
		sys_class_name: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAssetServiceNowFormGroup() {
		return new FormGroup<AssetServiceNowFormProperties>({
			addresses_extra: new FormControl<string | null | undefined>(undefined),
			addresses_scope: new FormControl<string | null | undefined>(undefined),
			alive: new FormControl<string | null | undefined>(undefined),
			asset_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comments: new FormControl<string | null | undefined>(undefined),
			detected_by: new FormControl<string | null | undefined>(undefined),
			domains: new FormControl<string | null | undefined>(undefined),
			first_discovered: new FormControl<string | null | undefined>(undefined),
			hw_product: new FormControl<string | null | undefined>(undefined),
			hw_vendor: new FormControl<string | null | undefined>(undefined),
			hw_version: new FormControl<string | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			last_discovered: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<string | null | undefined>(undefined),
			lowest_rtt: new FormControl<number | null | undefined>(undefined),
			lowest_ttl: new FormControl<number | null | undefined>(undefined),
			mac_address: new FormControl<string | null | undefined>(undefined),
			mac_manufacturer: new FormControl<string | null | undefined>(undefined),
			mac_vendors: new FormControl<string | null | undefined>(undefined),
			macs: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newest_mac_age: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			os_product: new FormControl<string | null | undefined>(undefined),
			os_vendor: new FormControl<string | null | undefined>(undefined),
			os_version: new FormControl<string | null | undefined>(undefined),
			service_count: new FormControl<number | null | undefined>(undefined),
			service_count_arp: new FormControl<number | null | undefined>(undefined),
			service_count_icmp: new FormControl<number | null | undefined>(undefined),
			service_count_tcp: new FormControl<number | null | undefined>(undefined),
			service_count_udp: new FormControl<number | null | undefined>(undefined),
			site: new FormControl<string | null | undefined>(undefined),
			sys_class_name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssetTags {

		/** Required */
		tags: string;
	}
	export interface AssetTagsFormProperties {

		/** Required */
		tags: FormControl<string | null | undefined>,
	}
	export function CreateAssetTagsFormGroup() {
		return new FormGroup<AssetTagsFormProperties>({
			tags: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetTagsWithSearch {

		/** Required */
		search: string;

		/** Required */
		tags: string;
	}
	export interface AssetTagsWithSearchFormProperties {

		/** Required */
		search: FormControl<string | null | undefined>,

		/** Required */
		tags: FormControl<string | null | undefined>,
	}
	export function CreateAssetTagsWithSearchFormGroup() {
		return new FormGroup<AssetTagsWithSearchFormProperties>({
			search: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssetsWithCheckpoint {

		/** Required */
		assets: Array<Asset>;

		/** Required */
		since: number;
	}
	export interface AssetsWithCheckpointFormProperties {

		/** Required */
		since: FormControl<number | null | undefined>,
	}
	export function CreateAssetsWithCheckpointFormGroup() {
		return new FormGroup<AssetsWithCheckpointFormProperties>({
			since: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureClientSecretCredentialFields {

		/** Required */
		client_id: string;

		/** Required */
		client_secret: string;
		multi_subscription?: string | null;
		subscription_id?: string | null;

		/** Required */
		tenant_id: string;
	}
	export interface AzureClientSecretCredentialFieldsFormProperties {

		/** Required */
		client_id: FormControl<string | null | undefined>,

		/** Required */
		client_secret: FormControl<string | null | undefined>,
		multi_subscription: FormControl<string | null | undefined>,
		subscription_id: FormControl<string | null | undefined>,

		/** Required */
		tenant_id: FormControl<string | null | undefined>,
	}
	export function CreateAzureClientSecretCredentialFieldsFormGroup() {
		return new FormGroup<AzureClientSecretCredentialFieldsFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multi_subscription: new FormControl<string | null | undefined>(undefined),
			subscription_id: new FormControl<string | null | undefined>(undefined),
			tenant_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureUsernamePasswordCredentialFields {

		/** Required */
		client_id: string;

		/** Required */
		password: string;

		/** Required */
		tenant_id: string;

		/** Required */
		username: string;
	}
	export interface AzureUsernamePasswordCredentialFieldsFormProperties {

		/** Required */
		client_id: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		tenant_id: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAzureUsernamePasswordCredentialFieldsFormGroup() {
		return new FormGroup<AzureUsernamePasswordCredentialFieldsFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenant_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CensysCredentialFields {
		api_url?: string | null;

		/** Required */
		client_id: string;

		/** Required */
		client_secret: string;
	}
	export interface CensysCredentialFieldsFormProperties {
		api_url: FormControl<string | null | undefined>,

		/** Required */
		client_id: FormControl<string | null | undefined>,

		/** Required */
		client_secret: FormControl<string | null | undefined>,
	}
	export function CreateCensysCredentialFieldsFormGroup() {
		return new FormGroup<CensysCredentialFieldsFormProperties>({
			api_url: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A component ID and version */
	export interface ComponentVersion {

		/** Required */
		id: string;

		/** Required */
		version: string;
	}

	/** A component ID and version */
	export interface ComponentVersionFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateComponentVersionFormGroup() {
		return new FormGroup<ComponentVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Credential {
		acl?: string | null;
		cidrs?: Array<string>;
		client_id?: string | null;
		created_at?: number | null;
		created_by_email?: string | null;
		created_by_id?: string | null;
		global?: boolean | null;

		/** Required */
		id: string;
		last_used_at?: number | null;
		last_used_by_id?: string | null;
		name?: string | null;

		/** The service the credentials are for. */
		type?: CredentialType | null;
	}
	export interface CredentialFormProperties {
		acl: FormControl<string | null | undefined>,
		client_id: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		created_by_email: FormControl<string | null | undefined>,
		created_by_id: FormControl<string | null | undefined>,
		global: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		last_used_at: FormControl<number | null | undefined>,
		last_used_by_id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** The service the credentials are for. */
		type: FormControl<CredentialType | null | undefined>,
	}
	export function CreateCredentialFormGroup() {
		return new FormGroup<CredentialFormProperties>({
			acl: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			created_by_email: new FormControl<string | null | undefined>(undefined),
			created_by_id: new FormControl<string | null | undefined>(undefined),
			global: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_used_at: new FormControl<number | null | undefined>(undefined),
			last_used_by_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CredentialType | null | undefined>(undefined),
		});

	}

	export enum CredentialType { miradore_api_key_v1 = 0, aws_access_secret = 1, crowdstrike_api_key = 2, azure_client_secret = 3, azure_username_password = 4, censys_search_api_key = 5, snmpv2_community = 6, snmpv3_credential = 7, vmware_username_password = 8 }

	export interface CredentialFields {
	}
	export interface CredentialFieldsFormProperties {
	}
	export function CreateCredentialFieldsFormGroup() {
		return new FormGroup<CredentialFieldsFormProperties>({
		});

	}

	export interface CredentialOptions {
		acl?: string | null;
		cidrs?: string | null;
		global?: boolean | null;
		name?: string | null;
		secret?: CredentialFields;
		type?: CredentialOptionsType | null;
	}
	export interface CredentialOptionsFormProperties {
		acl: FormControl<string | null | undefined>,
		cidrs: FormControl<string | null | undefined>,
		global: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<CredentialOptionsType | null | undefined>,
	}
	export function CreateCredentialOptionsFormGroup() {
		return new FormGroup<CredentialOptionsFormProperties>({
			acl: new FormControl<string | null | undefined>(undefined),
			cidrs: new FormControl<string | null | undefined>(undefined),
			global: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CredentialOptionsType | null | undefined>(undefined),
		});

	}

	export enum CredentialOptionsType { miradore_api_key_v1 = 0, aws_access_secret = 1 }

	export interface CrowdstrikeCredentialFields {

		/** Required */
		api_url: string;

		/** Required */
		client_id: string;

		/** Required */
		client_secret: string;
	}
	export interface CrowdstrikeCredentialFieldsFormProperties {

		/** Required */
		api_url: FormControl<string | null | undefined>,

		/** Required */
		client_id: FormControl<string | null | undefined>,

		/** Required */
		client_secret: FormControl<string | null | undefined>,
	}
	export function CreateCrowdstrikeCredentialFieldsFormGroup() {
		return new FormGroup<CrowdstrikeCredentialFieldsFormProperties>({
			api_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Event {
		action?: string | null;
		client_id?: string | null;
		created_at?: number | null;
		details?: string | null;
		id?: string | null;
		organization_id?: string | null;
		processed_at?: number | null;
		processor_id?: string | null;
		site_id?: string | null;
		source_id?: string | null;
		source_name?: string | null;
		source_type?: string | null;
		state?: string | null;
		success?: boolean | null;
		target_id?: string | null;
		target_name?: string | null;
		target_type?: string | null;
	}
	export interface EventFormProperties {
		action: FormControl<string | null | undefined>,
		client_id: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		organization_id: FormControl<string | null | undefined>,
		processed_at: FormControl<number | null | undefined>,
		processor_id: FormControl<string | null | undefined>,
		site_id: FormControl<string | null | undefined>,
		source_id: FormControl<string | null | undefined>,
		source_name: FormControl<string | null | undefined>,
		source_type: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
		target_id: FormControl<string | null | undefined>,
		target_name: FormControl<string | null | undefined>,
		target_type: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			processed_at: new FormControl<number | null | undefined>(undefined),
			processor_id: new FormControl<string | null | undefined>(undefined),
			site_id: new FormControl<string | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined),
			source_name: new FormControl<string | null | undefined>(undefined),
			source_type: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			target_id: new FormControl<string | null | undefined>(undefined),
			target_name: new FormControl<string | null | undefined>(undefined),
			target_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group {
		created_at?: number | null;
		created_by_email?: string | null;
		description?: string | null;
		expires_at?: number | null;

		/** Required */
		id: string;
		name?: string | null;
		org_default_role?: string | null;
		org_roles?: string | null;
		role_summary?: string | null;
		updated_at?: number | null;
		user_count?: number | null;
	}
	export interface GroupFormProperties {
		created_at: FormControl<number | null | undefined>,
		created_by_email: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		expires_at: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		org_default_role: FormControl<string | null | undefined>,
		org_roles: FormControl<string | null | undefined>,
		role_summary: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
		user_count: FormControl<number | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined),
			created_by_email: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			org_default_role: new FormControl<string | null | undefined>(undefined),
			org_roles: new FormControl<string | null | undefined>(undefined),
			role_summary: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
			user_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GroupMapping {
		created_at?: number | null;
		created_by_email?: string | null;
		description?: string | null;

		/** Required */
		group_id: string;
		group_name?: string | null;

		/** Required */
		id: string;

		/** Required */
		sso_attribute: string;

		/** Required */
		sso_value: string;
		updated_at?: number | null;
	}
	export interface GroupMappingFormProperties {
		created_at: FormControl<number | null | undefined>,
		created_by_email: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		group_id: FormControl<string | null | undefined>,
		group_name: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		sso_attribute: FormControl<string | null | undefined>,

		/** Required */
		sso_value: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateGroupMappingFormGroup() {
		return new FormGroup<GroupMappingFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined),
			created_by_email: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sso_attribute: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sso_value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GroupPost {
		description?: string | null;
		expires_at?: number | null;
		name?: string | null;
		org_default_role?: string | null;
		org_roles?: string | null;
	}
	export interface GroupPostFormProperties {
		description: FormControl<string | null | undefined>,
		expires_at: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		org_default_role: FormControl<string | null | undefined>,
		org_roles: FormControl<string | null | undefined>,
	}
	export function CreateGroupPostFormGroup() {
		return new FormGroup<GroupPostFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			org_default_role: new FormControl<string | null | undefined>(undefined),
			org_roles: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupPut {
		description?: string | null;
		expires_at?: number | null;
		id?: string | null;
		name?: string | null;
		org_default_role?: string | null;
		org_roles?: string | null;
	}
	export interface GroupPutFormProperties {
		description: FormControl<string | null | undefined>,
		expires_at: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		org_default_role: FormControl<string | null | undefined>,
		org_roles: FormControl<string | null | undefined>,
	}
	export function CreateGroupPutFormGroup() {
		return new FormGroup<GroupPutFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			org_default_role: new FormControl<string | null | undefined>(undefined),
			org_roles: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface License {
		activated_at?: number | null;
		address_city?: string | null;
		address_country?: string | null;
		address_postal?: string | null;
		address_region?: string | null;
		address_street?: string | null;
		created_at?: number | null;
		id?: string | null;
		license_expiration?: number | null;
		license_live_asset_count?: number | null;
		license_max_assets?: number | null;
		license_project_asset_count?: number | null;
		license_type?: string | null;
		name?: string | null;
		partner?: string | null;
		phone?: string | null;
		settings?: string | null;
		sso_default_role?: string | null;
		sso_domain?: string | null;
		sso_login_issuer_url?: string | null;
		sso_login_login_url?: string | null;
		sso_login_logout_url?: string | null;
		sso_login_message?: string | null;
		sso_mode?: string | null;
		sso_type?: string | null;
		subscription_cancel_at?: number | null;
		subscription_canceled_at?: number | null;
		subscription_period_end?: number | null;
		subscription_period_start?: number | null;
		updated_at?: number | null;
		via_reseller?: boolean | null;
	}
	export interface LicenseFormProperties {
		activated_at: FormControl<number | null | undefined>,
		address_city: FormControl<string | null | undefined>,
		address_country: FormControl<string | null | undefined>,
		address_postal: FormControl<string | null | undefined>,
		address_region: FormControl<string | null | undefined>,
		address_street: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		license_expiration: FormControl<number | null | undefined>,
		license_live_asset_count: FormControl<number | null | undefined>,
		license_max_assets: FormControl<number | null | undefined>,
		license_project_asset_count: FormControl<number | null | undefined>,
		license_type: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		partner: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		settings: FormControl<string | null | undefined>,
		sso_default_role: FormControl<string | null | undefined>,
		sso_domain: FormControl<string | null | undefined>,
		sso_login_issuer_url: FormControl<string | null | undefined>,
		sso_login_login_url: FormControl<string | null | undefined>,
		sso_login_logout_url: FormControl<string | null | undefined>,
		sso_login_message: FormControl<string | null | undefined>,
		sso_mode: FormControl<string | null | undefined>,
		sso_type: FormControl<string | null | undefined>,
		subscription_cancel_at: FormControl<number | null | undefined>,
		subscription_canceled_at: FormControl<number | null | undefined>,
		subscription_period_end: FormControl<number | null | undefined>,
		subscription_period_start: FormControl<number | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
		via_reseller: FormControl<boolean | null | undefined>,
	}
	export function CreateLicenseFormGroup() {
		return new FormGroup<LicenseFormProperties>({
			activated_at: new FormControl<number | null | undefined>(undefined),
			address_city: new FormControl<string | null | undefined>(undefined),
			address_country: new FormControl<string | null | undefined>(undefined),
			address_postal: new FormControl<string | null | undefined>(undefined),
			address_region: new FormControl<string | null | undefined>(undefined),
			address_street: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			license_expiration: new FormControl<number | null | undefined>(undefined),
			license_live_asset_count: new FormControl<number | null | undefined>(undefined),
			license_max_assets: new FormControl<number | null | undefined>(undefined),
			license_project_asset_count: new FormControl<number | null | undefined>(undefined),
			license_type: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partner: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
			sso_default_role: new FormControl<string | null | undefined>(undefined),
			sso_domain: new FormControl<string | null | undefined>(undefined),
			sso_login_issuer_url: new FormControl<string | null | undefined>(undefined),
			sso_login_login_url: new FormControl<string | null | undefined>(undefined),
			sso_login_logout_url: new FormControl<string | null | undefined>(undefined),
			sso_login_message: new FormControl<string | null | undefined>(undefined),
			sso_mode: new FormControl<string | null | undefined>(undefined),
			sso_type: new FormControl<string | null | undefined>(undefined),
			subscription_cancel_at: new FormControl<number | null | undefined>(undefined),
			subscription_canceled_at: new FormControl<number | null | undefined>(undefined),
			subscription_period_end: new FormControl<number | null | undefined>(undefined),
			subscription_period_start: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
			via_reseller: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MiradoreCredentialFields {

		/** Required */
		api_key: string;

		/** Required */
		hostname: string;
	}
	export interface MiradoreCredentialFieldsFormProperties {

		/** Required */
		api_key: FormControl<string | null | undefined>,

		/** Required */
		hostname: FormControl<string | null | undefined>,
	}
	export function CreateMiradoreCredentialFieldsFormGroup() {
		return new FormGroup<MiradoreCredentialFieldsFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hostname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrgOptions {
		description?: string | null;
		expiration_assets_offline?: string | null;
		expiration_assets_stale?: string | null;
		expiration_scans?: string | null;
		export_token?: string | null;
		name?: string | null;
		parent_id?: string | null;
		project?: string | null;
	}
	export interface OrgOptionsFormProperties {
		description: FormControl<string | null | undefined>,
		expiration_assets_offline: FormControl<string | null | undefined>,
		expiration_assets_stale: FormControl<string | null | undefined>,
		expiration_scans: FormControl<string | null | undefined>,
		export_token: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parent_id: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateOrgOptionsFormGroup() {
		return new FormGroup<OrgOptionsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expiration_assets_offline: new FormControl<string | null | undefined>(undefined),
			expiration_assets_stale: new FormControl<string | null | undefined>(undefined),
			expiration_scans: new FormControl<string | null | undefined>(undefined),
			export_token: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Organization {
		asset_count?: number | null;
		client_id?: string | null;
		created_at?: number | null;
		deactivated_at?: number | null;
		description?: string | null;
		download_token?: string | null;
		download_token_created_at?: number | null;
		expiration_assets_offline?: number | null;
		expiration_assets_stale?: number | null;
		expiration_scans?: number | null;
		export_token?: string | null;
		export_token_counter?: number | null;
		export_token_created_at?: number | null;
		export_token_last_used_at?: number | null;
		export_token_last_used_by?: string | null;

		/** Required */
		id: string;
		inactive?: boolean | null;

		/** Required */
		name: string;
		parent_id?: string | null;
		permanent?: boolean | null;
		project?: boolean | null;
		service_count?: number | null;
		service_count_arp?: number | null;
		service_count_icmp?: number | null;
		service_count_tcp?: number | null;
		service_count_udp?: number | null;
		updated_at?: number | null;
	}
	export interface OrganizationFormProperties {
		asset_count: FormControl<number | null | undefined>,
		client_id: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		deactivated_at: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		download_token: FormControl<string | null | undefined>,
		download_token_created_at: FormControl<number | null | undefined>,
		expiration_assets_offline: FormControl<number | null | undefined>,
		expiration_assets_stale: FormControl<number | null | undefined>,
		expiration_scans: FormControl<number | null | undefined>,
		export_token: FormControl<string | null | undefined>,
		export_token_counter: FormControl<number | null | undefined>,
		export_token_created_at: FormControl<number | null | undefined>,
		export_token_last_used_at: FormControl<number | null | undefined>,
		export_token_last_used_by: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		inactive: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		parent_id: FormControl<string | null | undefined>,
		permanent: FormControl<boolean | null | undefined>,
		project: FormControl<boolean | null | undefined>,
		service_count: FormControl<number | null | undefined>,
		service_count_arp: FormControl<number | null | undefined>,
		service_count_icmp: FormControl<number | null | undefined>,
		service_count_tcp: FormControl<number | null | undefined>,
		service_count_udp: FormControl<number | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			asset_count: new FormControl<number | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			deactivated_at: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			download_token: new FormControl<string | null | undefined>(undefined),
			download_token_created_at: new FormControl<number | null | undefined>(undefined),
			expiration_assets_offline: new FormControl<number | null | undefined>(undefined),
			expiration_assets_stale: new FormControl<number | null | undefined>(undefined),
			expiration_scans: new FormControl<number | null | undefined>(undefined),
			export_token: new FormControl<string | null | undefined>(undefined),
			export_token_counter: new FormControl<number | null | undefined>(undefined),
			export_token_created_at: new FormControl<number | null | undefined>(undefined),
			export_token_last_used_at: new FormControl<number | null | undefined>(undefined),
			export_token_last_used_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inactive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_id: new FormControl<string | null | undefined>(undefined),
			permanent: new FormControl<boolean | null | undefined>(undefined),
			project: new FormControl<boolean | null | undefined>(undefined),
			service_count: new FormControl<number | null | undefined>(undefined),
			service_count_arp: new FormControl<number | null | undefined>(undefined),
			service_count_icmp: new FormControl<number | null | undefined>(undefined),
			service_count_tcp: new FormControl<number | null | undefined>(undefined),
			service_count_udp: new FormControl<number | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SNMPv2CommunitiesCredentialFields {

		/** Required */
		community: string;
	}
	export interface SNMPv2CommunitiesCredentialFieldsFormProperties {

		/** Required */
		community: FormControl<string | null | undefined>,
	}
	export function CreateSNMPv2CommunitiesCredentialFieldsFormGroup() {
		return new FormGroup<SNMPv2CommunitiesCredentialFieldsFormProperties>({
			community: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SNMPv3CredentialFields {
		'auth-passphrase'?: string | null;
		'auth-protocol'?: string | null;
		context?: string | null;
		'privacy-passphrase'?: string | null;
		'privacy-protocol'?: string | null;

		/** Required */
		username: string;
	}
	export interface SNMPv3CredentialFieldsFormProperties {
		'auth-passphrase': FormControl<string | null | undefined>,
		'auth-protocol': FormControl<string | null | undefined>,
		context: FormControl<string | null | undefined>,
		'privacy-passphrase': FormControl<string | null | undefined>,
		'privacy-protocol': FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSNMPv3CredentialFieldsFormGroup() {
		return new FormGroup<SNMPv3CredentialFieldsFormProperties>({
			'auth-passphrase': new FormControl<string | null | undefined>(undefined),
			'auth-protocol': new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
			'privacy-passphrase': new FormControl<string | null | undefined>(undefined),
			'privacy-protocol': new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScanOptions {
		agent?: string | null;
		excludes?: string | null;
		'host-ping'?: string | null;
		'max-attempts'?: string | null;
		'max-group-size'?: string | null;
		'max-host-rate'?: string | null;
		'max-sockets'?: string | null;
		'max-ttl'?: string | null;
		nameservers?: string | null;
		passes?: string | null;

		/** Optional probe list, otherwise all probes are used */
		probes?: string | null;
		rate?: string | null;
		'scan-description'?: string | null;
		'scan-frequency'?: ScanOptionsScan_frequency | null;
		'scan-grace-period'?: string | null;
		'scan-name'?: string | null;
		'scan-start'?: string | null;
		'scan-tags'?: string | null;
		screenshots?: string | null;
		'subnet-ping'?: string | null;
		'subnet-ping-net-size'?: string | null;
		'subnet-ping-sample-rate'?: string | null;

		/** Required */
		targets: string;
		'tcp-excludes'?: string | null;
		'tcp-ports'?: string | null;
	}
	export interface ScanOptionsFormProperties {
		agent: FormControl<string | null | undefined>,
		excludes: FormControl<string | null | undefined>,
		'host-ping': FormControl<string | null | undefined>,
		'max-attempts': FormControl<string | null | undefined>,
		'max-group-size': FormControl<string | null | undefined>,
		'max-host-rate': FormControl<string | null | undefined>,
		'max-sockets': FormControl<string | null | undefined>,
		'max-ttl': FormControl<string | null | undefined>,
		nameservers: FormControl<string | null | undefined>,
		passes: FormControl<string | null | undefined>,

		/** Optional probe list, otherwise all probes are used */
		probes: FormControl<string | null | undefined>,
		rate: FormControl<string | null | undefined>,
		'scan-description': FormControl<string | null | undefined>,
		'scan-frequency': FormControl<ScanOptionsScan_frequency | null | undefined>,
		'scan-grace-period': FormControl<string | null | undefined>,
		'scan-name': FormControl<string | null | undefined>,
		'scan-start': FormControl<string | null | undefined>,
		'scan-tags': FormControl<string | null | undefined>,
		screenshots: FormControl<string | null | undefined>,
		'subnet-ping': FormControl<string | null | undefined>,
		'subnet-ping-net-size': FormControl<string | null | undefined>,
		'subnet-ping-sample-rate': FormControl<string | null | undefined>,

		/** Required */
		targets: FormControl<string | null | undefined>,
		'tcp-excludes': FormControl<string | null | undefined>,
		'tcp-ports': FormControl<string | null | undefined>,
	}
	export function CreateScanOptionsFormGroup() {
		return new FormGroup<ScanOptionsFormProperties>({
			agent: new FormControl<string | null | undefined>(undefined),
			excludes: new FormControl<string | null | undefined>(undefined),
			'host-ping': new FormControl<string | null | undefined>(undefined),
			'max-attempts': new FormControl<string | null | undefined>(undefined),
			'max-group-size': new FormControl<string | null | undefined>(undefined),
			'max-host-rate': new FormControl<string | null | undefined>(undefined),
			'max-sockets': new FormControl<string | null | undefined>(undefined),
			'max-ttl': new FormControl<string | null | undefined>(undefined),
			nameservers: new FormControl<string | null | undefined>(undefined),
			passes: new FormControl<string | null | undefined>(undefined),
			probes: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<string | null | undefined>(undefined),
			'scan-description': new FormControl<string | null | undefined>(undefined),
			'scan-frequency': new FormControl<ScanOptionsScan_frequency | null | undefined>(undefined),
			'scan-grace-period': new FormControl<string | null | undefined>(undefined),
			'scan-name': new FormControl<string | null | undefined>(undefined),
			'scan-start': new FormControl<string | null | undefined>(undefined),
			'scan-tags': new FormControl<string | null | undefined>(undefined),
			screenshots: new FormControl<string | null | undefined>(undefined),
			'subnet-ping': new FormControl<string | null | undefined>(undefined),
			'subnet-ping-net-size': new FormControl<string | null | undefined>(undefined),
			'subnet-ping-sample-rate': new FormControl<string | null | undefined>(undefined),
			targets: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'tcp-excludes': new FormControl<string | null | undefined>(undefined),
			'tcp-ports': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanOptionsScan_frequency { once = 0, hourly = 1, daily = 2, weekly = 3, monthly = 4, continuous = 5 }

	export interface ScanTemplate {

		/** Required */
		acl: string;
		agent_id?: string | null;
		client_id?: string | null;
		created_at?: number | null;
		created_by?: string | null;
		created_by_user_id?: string | null;
		cruncher_id?: string | null;
		description?: string | null;
		error?: string | null;

		/** Required */
		global: boolean;
		grace_period?: string | null;
		hidden?: boolean | null;
		hosted_zone_id?: string | null;

		/** Required */
		id: string;
		linked_task_count?: number | null;
		name?: string | null;
		organization_id?: string | null;
		params?: {[id: string]: string };
		parent_id?: string | null;
		recur?: boolean | null;
		recur_frequency?: string | null;
		recur_last?: number | null;
		recur_last_task_id?: string | null;
		recur_next?: number | null;
		site_id?: string | null;
		size_data?: number | null;
		size_results?: number | null;
		size_site?: number | null;
		source_id?: string | null;
		start_time?: number | null;
		stats?: string | null;
		status?: string | null;
		template_id?: string | null;
		type?: string | null;
		updated_at?: number | null;
	}
	export interface ScanTemplateFormProperties {

		/** Required */
		acl: FormControl<string | null | undefined>,
		agent_id: FormControl<string | null | undefined>,
		client_id: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		created_by: FormControl<string | null | undefined>,
		created_by_user_id: FormControl<string | null | undefined>,
		cruncher_id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,

		/** Required */
		global: FormControl<boolean | null | undefined>,
		grace_period: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		hosted_zone_id: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		linked_task_count: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		organization_id: FormControl<string | null | undefined>,
		params: FormControl<{[id: string]: string } | null | undefined>,
		parent_id: FormControl<string | null | undefined>,
		recur: FormControl<boolean | null | undefined>,
		recur_frequency: FormControl<string | null | undefined>,
		recur_last: FormControl<number | null | undefined>,
		recur_last_task_id: FormControl<string | null | undefined>,
		recur_next: FormControl<number | null | undefined>,
		site_id: FormControl<string | null | undefined>,
		size_data: FormControl<number | null | undefined>,
		size_results: FormControl<number | null | undefined>,
		size_site: FormControl<number | null | undefined>,
		source_id: FormControl<string | null | undefined>,
		start_time: FormControl<number | null | undefined>,
		stats: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		template_id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateScanTemplateFormGroup() {
		return new FormGroup<ScanTemplateFormProperties>({
			acl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			agent_id: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			created_by_user_id: new FormControl<string | null | undefined>(undefined),
			cruncher_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			global: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			grace_period: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			hosted_zone_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linked_task_count: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			recur: new FormControl<boolean | null | undefined>(undefined),
			recur_frequency: new FormControl<string | null | undefined>(undefined),
			recur_last: new FormControl<number | null | undefined>(undefined),
			recur_last_task_id: new FormControl<string | null | undefined>(undefined),
			recur_next: new FormControl<number | null | undefined>(undefined),
			site_id: new FormControl<string | null | undefined>(undefined),
			size_data: new FormControl<number | null | undefined>(undefined),
			size_results: new FormControl<number | null | undefined>(undefined),
			size_site: new FormControl<number | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined),
			start_time: new FormControl<number | null | undefined>(undefined),
			stats: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			template_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScanTemplateOptions {

		/** Required */
		acl: string;
		description?: string | null;

		/** Required */
		global: boolean;

		/** Required */
		name: string;
		params?: {[id: string]: string };
	}
	export interface ScanTemplateOptionsFormProperties {

		/** Required */
		acl: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		global: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		params: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateScanTemplateOptionsFormGroup() {
		return new FormGroup<ScanTemplateOptionsFormProperties>({
			acl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			global: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface Search {

		/** Required */
		search: string;
	}
	export interface SearchFormProperties {

		/** Required */
		search: FormControl<string | null | undefined>,
	}
	export function CreateSearchFormGroup() {
		return new FormGroup<SearchFormProperties>({
			search: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Service {
		addresses?: Array<string>;
		addresses_extra?: Array<string>;
		agent_name?: string | null;
		alive?: string | null;
		attributes?: {[id: string]: string };
		comments?: string | null;
		created_at?: number | null;
		credentials?: {[id: string]: string };
		detected_by?: string | null;
		domains?: Array<string>;
		first_seen?: number | null;
		hw?: string | null;

		/** Required */
		id: string;
		last_agent_id?: string | null;
		last_seen?: number | null;
		last_task_id?: string | null;
		lowest_rtt?: number | null;
		lowest_ttl?: number | null;
		mac_vendors?: Array<string>;
		macs?: Array<string>;
		names?: Array<string>;
		newest_mac?: string | null;
		newest_mac_age?: number | null;
		newest_mac_vendor?: string | null;
		org_name?: string | null;
		organization_id?: string | null;
		os?: string | null;
		os_version?: string | null;
		rtts?: string | null;
		service_address?: string | null;
		service_asset_id?: string | null;
		service_count?: number | null;
		service_count_arp?: number | null;
		service_count_icmp?: number | null;
		service_count_tcp?: number | null;
		service_count_udp?: number | null;
		service_created_at?: number | null;
		service_data?: {[id: string]: string };

		/** Required */
		service_id: string;
		service_link?: string | null;
		service_port?: string | null;
		service_ports_products?: Array<string>;
		service_ports_protocols?: Array<string>;
		service_ports_tcp?: Array<string>;
		service_ports_udp?: Array<string>;
		service_protocol?: string | null;
		service_screenshot_link?: string | null;
		service_summary?: string | null;
		service_transport?: string | null;
		service_updated_at?: number | null;
		service_vhost?: string | null;
		services?: {[id: string]: any };
		site_id?: string | null;
		site_name?: string | null;
		tags?: {[id: string]: string };
		type?: string | null;
		updated_at?: number | null;
	}
	export interface ServiceFormProperties {
		agent_name: FormControl<string | null | undefined>,
		alive: FormControl<string | null | undefined>,
		attributes: FormControl<{[id: string]: string } | null | undefined>,
		comments: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		credentials: FormControl<{[id: string]: string } | null | undefined>,
		detected_by: FormControl<string | null | undefined>,
		first_seen: FormControl<number | null | undefined>,
		hw: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		last_agent_id: FormControl<string | null | undefined>,
		last_seen: FormControl<number | null | undefined>,
		last_task_id: FormControl<string | null | undefined>,
		lowest_rtt: FormControl<number | null | undefined>,
		lowest_ttl: FormControl<number | null | undefined>,
		newest_mac: FormControl<string | null | undefined>,
		newest_mac_age: FormControl<number | null | undefined>,
		newest_mac_vendor: FormControl<string | null | undefined>,
		org_name: FormControl<string | null | undefined>,
		organization_id: FormControl<string | null | undefined>,
		os: FormControl<string | null | undefined>,
		os_version: FormControl<string | null | undefined>,
		rtts: FormControl<string | null | undefined>,
		service_address: FormControl<string | null | undefined>,
		service_asset_id: FormControl<string | null | undefined>,
		service_count: FormControl<number | null | undefined>,
		service_count_arp: FormControl<number | null | undefined>,
		service_count_icmp: FormControl<number | null | undefined>,
		service_count_tcp: FormControl<number | null | undefined>,
		service_count_udp: FormControl<number | null | undefined>,
		service_created_at: FormControl<number | null | undefined>,
		service_data: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		service_id: FormControl<string | null | undefined>,
		service_link: FormControl<string | null | undefined>,
		service_port: FormControl<string | null | undefined>,
		service_protocol: FormControl<string | null | undefined>,
		service_screenshot_link: FormControl<string | null | undefined>,
		service_summary: FormControl<string | null | undefined>,
		service_transport: FormControl<string | null | undefined>,
		service_updated_at: FormControl<number | null | undefined>,
		service_vhost: FormControl<string | null | undefined>,
		services: FormControl<{[id: string]: any } | null | undefined>,
		site_id: FormControl<string | null | undefined>,
		site_name: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			agent_name: new FormControl<string | null | undefined>(undefined),
			alive: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			credentials: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			detected_by: new FormControl<string | null | undefined>(undefined),
			first_seen: new FormControl<number | null | undefined>(undefined),
			hw: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_agent_id: new FormControl<string | null | undefined>(undefined),
			last_seen: new FormControl<number | null | undefined>(undefined),
			last_task_id: new FormControl<string | null | undefined>(undefined),
			lowest_rtt: new FormControl<number | null | undefined>(undefined),
			lowest_ttl: new FormControl<number | null | undefined>(undefined),
			newest_mac: new FormControl<string | null | undefined>(undefined),
			newest_mac_age: new FormControl<number | null | undefined>(undefined),
			newest_mac_vendor: new FormControl<string | null | undefined>(undefined),
			org_name: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
			os_version: new FormControl<string | null | undefined>(undefined),
			rtts: new FormControl<string | null | undefined>(undefined),
			service_address: new FormControl<string | null | undefined>(undefined),
			service_asset_id: new FormControl<string | null | undefined>(undefined),
			service_count: new FormControl<number | null | undefined>(undefined),
			service_count_arp: new FormControl<number | null | undefined>(undefined),
			service_count_icmp: new FormControl<number | null | undefined>(undefined),
			service_count_tcp: new FormControl<number | null | undefined>(undefined),
			service_count_udp: new FormControl<number | null | undefined>(undefined),
			service_created_at: new FormControl<number | null | undefined>(undefined),
			service_data: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service_link: new FormControl<string | null | undefined>(undefined),
			service_port: new FormControl<string | null | undefined>(undefined),
			service_protocol: new FormControl<string | null | undefined>(undefined),
			service_screenshot_link: new FormControl<string | null | undefined>(undefined),
			service_summary: new FormControl<string | null | undefined>(undefined),
			service_transport: new FormControl<string | null | undefined>(undefined),
			service_updated_at: new FormControl<number | null | undefined>(undefined),
			service_vhost: new FormControl<string | null | undefined>(undefined),
			services: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			site_id: new FormControl<string | null | undefined>(undefined),
			site_name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Site {
		created_at?: number | null;
		description?: string | null;
		excludes?: string | null;

		/** Required */
		id: string;

		/** Required */
		name: string;
		permanent?: boolean | null;
		scope?: string | null;
		subnets?: string | null;
		updated_at?: number | null;
	}
	export interface SiteFormProperties {
		created_at: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		excludes: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		permanent: FormControl<boolean | null | undefined>,
		scope: FormControl<string | null | undefined>,
		subnets: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			excludes: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permanent: new FormControl<boolean | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			subnets: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SiteOptions {
		description?: string | null;
		excludes?: string | null;

		/** Required */
		name: string;
		scope?: string | null;
	}
	export interface SiteOptionsFormProperties {
		description: FormControl<string | null | undefined>,
		excludes: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		scope: FormControl<string | null | undefined>,
	}
	export function CreateSiteOptionsFormGroup() {
		return new FormGroup<SiteOptionsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			excludes: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatusMessage {
	}
	export interface StatusMessageFormProperties {
	}
	export function CreateStatusMessageFormGroup() {
		return new FormGroup<StatusMessageFormProperties>({
		});

	}

	export interface Task_ {
		agent_id?: string | null;
		client_id?: string | null;
		created_at?: number | null;
		created_by?: string | null;
		created_by_user_id?: string | null;
		cruncher_id?: string | null;
		description?: string | null;
		error?: string | null;
		hidden?: boolean | null;

		/** Required */
		id: string;
		name?: string | null;
		organization_id?: string | null;
		params?: {[id: string]: string };
		parent_id?: string | null;
		recur?: boolean | null;
		recur_frequency?: string | null;
		recur_last?: number | null;
		recur_last_task_id?: string | null;
		recur_next?: number | null;
		site_id?: string | null;
		start_time?: number | null;
		stats?: string | null;
		status?: string | null;
		template_id?: string | null;
		type?: string | null;
		updated_at?: number | null;
	}
	export interface Task_FormProperties {
		agent_id: FormControl<string | null | undefined>,
		client_id: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		created_by: FormControl<string | null | undefined>,
		created_by_user_id: FormControl<string | null | undefined>,
		cruncher_id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		organization_id: FormControl<string | null | undefined>,
		params: FormControl<{[id: string]: string } | null | undefined>,
		parent_id: FormControl<string | null | undefined>,
		recur: FormControl<boolean | null | undefined>,
		recur_frequency: FormControl<string | null | undefined>,
		recur_last: FormControl<number | null | undefined>,
		recur_last_task_id: FormControl<string | null | undefined>,
		recur_next: FormControl<number | null | undefined>,
		site_id: FormControl<string | null | undefined>,
		start_time: FormControl<number | null | undefined>,
		stats: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		template_id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateTask_FormGroup() {
		return new FormGroup<Task_FormProperties>({
			agent_id: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			created_by_user_id: new FormControl<string | null | undefined>(undefined),
			cruncher_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parent_id: new FormControl<string | null | undefined>(undefined),
			recur: new FormControl<boolean | null | undefined>(undefined),
			recur_frequency: new FormControl<string | null | undefined>(undefined),
			recur_last: new FormControl<number | null | undefined>(undefined),
			recur_last_task_id: new FormControl<string | null | undefined>(undefined),
			recur_next: new FormControl<number | null | undefined>(undefined),
			site_id: new FormControl<string | null | undefined>(undefined),
			start_time: new FormControl<number | null | undefined>(undefined),
			stats: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			template_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A URL to a resource */
	export interface URL {
		id?: string | null;
	}

	/** A URL to a resource */
	export interface URLFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateURLFormGroup() {
		return new FormGroup<URLFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {
		client_admin?: boolean | null;
		client_id?: string | null;
		created_at?: number | null;
		email?: string | null;
		first_name?: string | null;

		/** Required */
		id: string;
		invite_token_expiration?: number | null;
		last_login_at?: number | null;
		last_login_ip?: string | null;
		last_login_ua?: string | null;
		last_name?: string | null;
		login_failures?: number | null;
		org_default_role?: string | null;
		org_roles?: string | null;
		reset_token_expiration?: number | null;
		sso_only?: boolean | null;
		updated_at?: number | null;
	}
	export interface UserFormProperties {
		client_admin: FormControl<boolean | null | undefined>,
		client_id: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		email: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		invite_token_expiration: FormControl<number | null | undefined>,
		last_login_at: FormControl<number | null | undefined>,
		last_login_ip: FormControl<string | null | undefined>,
		last_login_ua: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		login_failures: FormControl<number | null | undefined>,
		org_default_role: FormControl<string | null | undefined>,
		org_roles: FormControl<string | null | undefined>,
		reset_token_expiration: FormControl<number | null | undefined>,
		sso_only: FormControl<boolean | null | undefined>,
		updated_at: FormControl<number | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			client_admin: new FormControl<boolean | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invite_token_expiration: new FormControl<number | null | undefined>(undefined),
			last_login_at: new FormControl<number | null | undefined>(undefined),
			last_login_ip: new FormControl<string | null | undefined>(undefined),
			last_login_ua: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			login_failures: new FormControl<number | null | undefined>(undefined),
			org_default_role: new FormControl<string | null | undefined>(undefined),
			org_roles: new FormControl<string | null | undefined>(undefined),
			reset_token_expiration: new FormControl<number | null | undefined>(undefined),
			sso_only: new FormControl<boolean | null | undefined>(undefined),
			updated_at: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserInviteOptions {
		client_admin?: boolean | null;
		email?: string | null;
		first_name?: string | null;
		last_name?: string | null;
		message?: string | null;
		org_default_role?: string | null;
		org_roles?: string | null;
		subject?: string | null;
	}
	export interface UserInviteOptionsFormProperties {
		client_admin: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		org_default_role: FormControl<string | null | undefined>,
		org_roles: FormControl<string | null | undefined>,
		subject: FormControl<string | null | undefined>,
	}
	export function CreateUserInviteOptionsFormGroup() {
		return new FormGroup<UserInviteOptionsFormProperties>({
			client_admin: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			org_default_role: new FormControl<string | null | undefined>(undefined),
			org_roles: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserOptions {
		client_admin?: boolean | null;
		email?: string | null;
		first_name?: string | null;
		last_name?: string | null;
		org_default_role?: string | null;
		org_roles?: string | null;
	}
	export interface UserOptionsFormProperties {
		client_admin: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		org_default_role: FormControl<string | null | undefined>,
		org_roles: FormControl<string | null | undefined>,
	}
	export function CreateUserOptionsFormGroup() {
		return new FormGroup<UserOptionsFormProperties>({
			client_admin: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			org_default_role: new FormControl<string | null | undefined>(undefined),
			org_roles: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VMwareCredentialFields {
		insecure?: string | null;

		/** Required */
		password: string;
		thumbprints?: string | null;

		/** Required */
		username: string;
	}
	export interface VMwareCredentialFieldsFormProperties {
		insecure: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
		thumbprints: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateVMwareCredentialFieldsFormGroup() {
		return new FormGroup<VMwareCredentialFieldsFormProperties>({
			insecure: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumbprints: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Wireless {
		agent_name?: string | null;
		authentication?: string | null;
		bssid?: string | null;
		channels?: string | null;
		created_at?: number | null;
		data?: {[id: string]: string };
		encryption?: string | null;
		essid?: string | null;
		family?: string | null;

		/** Required */
		id: string;
		interface?: string | null;
		last_agent_id?: string | null;
		last_seen?: number | null;
		last_task_id?: string | null;
		org_name?: string | null;
		organization_id?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		signal?: number | null;
		site_id?: string | null;
		site_name?: string | null;
		type?: string | null;
		vendor?: string | null;
	}
	export interface WirelessFormProperties {
		agent_name: FormControl<string | null | undefined>,
		authentication: FormControl<string | null | undefined>,
		bssid: FormControl<string | null | undefined>,
		channels: FormControl<string | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		data: FormControl<{[id: string]: string } | null | undefined>,
		encryption: FormControl<string | null | undefined>,
		essid: FormControl<string | null | undefined>,
		family: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		interface: FormControl<string | null | undefined>,
		last_agent_id: FormControl<string | null | undefined>,
		last_seen: FormControl<number | null | undefined>,
		last_task_id: FormControl<string | null | undefined>,
		org_name: FormControl<string | null | undefined>,
		organization_id: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		signal: FormControl<number | null | undefined>,
		site_id: FormControl<string | null | undefined>,
		site_name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateWirelessFormGroup() {
		return new FormGroup<WirelessFormProperties>({
			agent_name: new FormControl<string | null | undefined>(undefined),
			authentication: new FormControl<string | null | undefined>(undefined),
			bssid: new FormControl<string | null | undefined>(undefined),
			channels: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			data: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			encryption: new FormControl<string | null | undefined>(undefined),
			essid: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interface: new FormControl<string | null | undefined>(undefined),
			last_agent_id: new FormControl<string | null | undefined>(undefined),
			last_seen: new FormControl<number | null | undefined>(undefined),
			last_task_id: new FormControl<string | null | undefined>(undefined),
			org_name: new FormControl<string | null | undefined>(undefined),
			organization_id: new FormControl<string | null | undefined>(undefined),
			signal: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			site_id: new FormControl<string | null | undefined>(undefined),
			site_name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all agents across all organizations
		 * Get account/agents
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<Agent>} array of tasks
		 */
		GetAccountAgents(search: string | null | undefined): Observable<Array<Agent>> {
			return this.http.get<Array<Agent>>(this.baseUri + 'account/agents?search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Get all account credentials
		 * Get account/credentials
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<Credential>} array of credentials
		 */
		GetAccountCredentials(search: string | null | undefined): Observable<Array<Credential>> {
			return this.http.get<Array<Credential>>(this.baseUri + 'account/credentials?search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Create a new credential
		 * Put account/credentials
		 * @param {CredentialOptions} requestBody credential parameters
		 * @return {Credential} credential details
		 */
		CreateAccountCredential(requestBody: CredentialOptions): Observable<Credential> {
			return this.http.put<Credential>(this.baseUri + 'account/credentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove this credential
		 * Delete account/credentials/{credential_id}
		 * @param {string} credential_id UUID of the credential to delete
		 * @return {void} 
		 */
		RemoveAccountCredential(credential_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/credentials/' + (credential_id == null ? '' : encodeURIComponent(credential_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get credential details
		 * Get account/credentials/{credential_id}
		 * @param {string} credential_id UUID of the credential to retrieve
		 * @return {Credential} credential details
		 */
		GetAccountCredential(credential_id: string): Observable<Credential> {
			return this.http.get<Credential>(this.baseUri + 'account/credentials/' + (credential_id == null ? '' : encodeURIComponent(credential_id)), {});
		}

		/**
		 * System event log as JSON
		 * Get account/events.json
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {Array<Event>} filtered event results
		 */
		ExportEventsJSON(search: string | null | undefined, fields: string | null | undefined): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'account/events.json?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * System event log as JSON line-delimited
		 * Get account/events.jsonl
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {Array<Event>} filtered event results
		 */
		ExportEventsJSONL(search: string | null | undefined, fields: string | null | undefined): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'account/events.jsonl?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Get all groups
		 * Get account/groups
		 * @return {void} Automatically created
		 */
		GetAccountGroups(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/groups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new group
		 * Post account/groups
		 * @return {void} Automatically created
		 */
		CreateAccountGroup(requestBody: GroupPost): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing group
		 * Put account/groups
		 * @return {void} Automatically created
		 */
		UpdateAccountGroup(requestBody: GroupPut): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove this group
		 * Delete account/groups/{group_id}
		 * @return {void} 
		 */
		RemoveAccountGroup(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/groups/{group_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get group details
		 * Get account/groups/{group_id}
		 * @return {void} Automatically created
		 */
		GetAccountGroup(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/groups/{group_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all active API keys
		 * Get account/keys
		 * @return {Array<APIKey>} array of keys
		 */
		GetAccountKeys(): Observable<Array<APIKey>> {
			return this.http.get<Array<APIKey>>(this.baseUri + 'account/keys', {});
		}

		/**
		 * Create a new key
		 * Put account/keys
		 * @param {APIKeyOptions} requestBody key parameters
		 * @return {APIKey} key details
		 */
		CreateAccountKey(requestBody: APIKeyOptions): Observable<APIKey> {
			return this.http.put<APIKey>(this.baseUri + 'account/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove this key
		 * Delete account/keys/{key_id}
		 * @param {string} key_id UUID of the key to retrieve
		 * @return {void} 
		 */
		RemoveAccountKey(key_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/keys/' + (key_id == null ? '' : encodeURIComponent(key_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get key details
		 * Get account/keys/{key_id}
		 * @param {string} key_id UUID of the key to retrieve
		 * @return {void} Automatically created
		 */
		GetAccountKey(key_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/keys/' + (key_id == null ? '' : encodeURIComponent(key_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Rotates the key secret
		 * Patch account/keys/{key_id}/rotate
		 * @param {string} key_id UUID of the key to retrieve
		 * @return {APIKey} key details
		 */
		RotateAccountKey(key_id: string): Observable<APIKey> {
			return this.http.patch<APIKey>(this.baseUri + 'account/keys/' + (key_id == null ? '' : encodeURIComponent(key_id)) + '/rotate', null, {});
		}

		/**
		 * Get license details
		 * Get account/license
		 * @return {void} Automatically created
		 */
		GetAccountLicense(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/license', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all organization details
		 * Get account/orgs
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<Organization>} array of organizations
		 */
		GetAccountOrganizations(search: string | null | undefined): Observable<Array<Organization>> {
			return this.http.get<Array<Organization>>(this.baseUri + 'account/orgs?search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Create a new organization
		 * Put account/orgs
		 * @param {OrgOptions} requestBody organization definition
		 * @return {Organization} organization details
		 */
		CreateAccountOrganization(requestBody: OrgOptions): Observable<Organization> {
			return this.http.put<Organization>(this.baseUri + 'account/orgs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove this organization
		 * Delete account/orgs/{org_id}
		 * @param {string} org_id UUID of the organization to retrieve
		 * @return {void} 
		 */
		RemoveAccountOrganization(org_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/orgs/' + (org_id == null ? '' : encodeURIComponent(org_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organization details
		 * Get account/orgs/{org_id}
		 * @param {string} org_id UUID of the organization to retrieve
		 * @return {void} Automatically created
		 */
		GetAccountOrganization(org_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/orgs/' + (org_id == null ? '' : encodeURIComponent(org_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update organization details
		 * Patch account/orgs/{org_id}
		 * @param {string} org_id UUID of the organization to retrieve
		 * @param {OrgOptions} requestBody organization options
		 * @return {Organization} organization details
		 */
		UpdateAccountOrganization(org_id: string, requestBody: OrgOptions): Observable<Organization> {
			return this.http.patch<Organization>(this.baseUri + 'account/orgs/' + (org_id == null ? '' : encodeURIComponent(org_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the export token from the specified organization
		 * Delete account/orgs/{org_id}/exportToken
		 * @param {string} org_id UUID of the organization to retrieve
		 * @return {void} 
		 */
		DeleteAccountOrganizationExportToken(org_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/orgs/' + (org_id == null ? '' : encodeURIComponent(org_id)) + '/exportToken', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Rotates the organization export token and returns the updated organization
		 * Patch account/orgs/{org_id}/exportToken/rotate
		 * @param {string} org_id UUID of the organization to retrieve
		 * @return {Organization} organization details
		 */
		RotateAccountOrganizationExportToken(org_id: string): Observable<Organization> {
			return this.http.patch<Organization>(this.baseUri + 'account/orgs/' + (org_id == null ? '' : encodeURIComponent(org_id)) + '/exportToken/rotate', null, {});
		}

		/**
		 * Get all sites details across all organizations
		 * Get account/sites
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<Site>} array of sites
		 */
		GetAccountSites(search: string | null | undefined): Observable<Array<Site>> {
			return this.http.get<Array<Site>>(this.baseUri + 'account/sites?search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Get all SSO group mappings
		 * Get account/sso/groups
		 * @return {void} Automatically created
		 */
		GetAccountGroupMappings(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/sso/groups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new SSO group mapping
		 * Post account/sso/groups
		 * @return {void} Automatically created
		 */
		CreateAccountGroupMapping(requestBody: GroupMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/sso/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing SSO group mapping
		 * Put account/sso/groups
		 * @return {void} Automatically created
		 */
		UpdateAccountGroupMapping(requestBody: GroupMapping): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/sso/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove this SSO group mapping
		 * Delete account/sso/groups/{group_mapping_id}
		 * @return {void} 
		 */
		RemoveAccountGroupMapping(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/sso/groups/{group_mapping_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get SSO group mapping details
		 * Get account/sso/groups/{group_mapping_id}
		 * @return {void} Automatically created
		 */
		GetAccountGroupMapping(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/sso/groups/{group_mapping_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all task details across all organizations (up to 1000)
		 * Get account/tasks
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<Task_>} array of tasks
		 */
		GetAccountTasks(search: string | null | undefined): Observable<Array<Task_>> {
			return this.http.get<Array<Task_>>(this.baseUri + 'account/tasks?search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Get all scan templates across all organizations (up to 1000)
		 * Get account/tasks/templates
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<ScanTemplate>} array of scan templates
		 */
		GetAccountScanTemplates(search: string | null | undefined): Observable<Array<ScanTemplate>> {
			return this.http.get<Array<ScanTemplate>>(this.baseUri + 'account/tasks/templates?search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Create a new scan template
		 * Post account/tasks/templates
		 * @return {ScanTemplate} scan template
		 */
		CreateAccountScanTemplate(requestBody: ScanTemplateOptions): Observable<ScanTemplate> {
			return this.http.post<ScanTemplate>(this.baseUri + 'account/tasks/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update scan template
		 * Put account/tasks/templates
		 * @return {ScanTemplate} scan template
		 */
		UpdateAccountScanTemplate(requestBody: ScanTemplate): Observable<ScanTemplate> {
			return this.http.put<ScanTemplate>(this.baseUri + 'account/tasks/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove scan template
		 * Delete account/tasks/templates/{scan_template_id}
		 * @param {string} scan_template_id UUID of the scan template to remove
		 * @return {ScanTemplate} scan template
		 */
		RemoveAccountScanTemplate(scan_template_id: string): Observable<ScanTemplate> {
			return this.http.delete<ScanTemplate>(this.baseUri + 'account/tasks/templates/' + (scan_template_id == null ? '' : encodeURIComponent(scan_template_id)), {});
		}

		/**
		 * Get scan template details
		 * Get account/tasks/templates/{scan_template_id}
		 * @param {string} scan_template_id UUID of the scan template to retrieve
		 * @return {ScanTemplate} scan template
		 */
		GetAccountScanTemplate(scan_template_id: string): Observable<ScanTemplate> {
			return this.http.get<ScanTemplate>(this.baseUri + 'account/tasks/templates/' + (scan_template_id == null ? '' : encodeURIComponent(scan_template_id)), {});
		}

		/**
		 * Get all users
		 * Get account/users
		 * @return {Array<User>} array of users
		 */
		GetAccountUsers(): Observable<Array<User>> {
			return this.http.get<Array<User>>(this.baseUri + 'account/users', {});
		}

		/**
		 * Create a new user account
		 * Put account/users
		 * @param {UserOptions} requestBody user parameters
		 * @return {User} key details
		 */
		CreateAccountUser(requestBody: UserOptions): Observable<User> {
			return this.http.put<User>(this.baseUri + 'account/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new user account and send an email invite
		 * Put account/users/invite
		 * @param {UserInviteOptions} requestBody user invite parameters
		 * @return {User} key details
		 */
		CreateAccountUserInvite(requestBody: UserInviteOptions): Observable<User> {
			return this.http.put<User>(this.baseUri + 'account/users/invite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove this user
		 * Delete account/users/{user_id}
		 * @param {string} user_id UUID of the user to delete
		 * @return {void} 
		 */
		RemoveAccountUser(user_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user details
		 * Get account/users/{user_id}
		 * @param {string} user_id UUID of the user to retrieve
		 * @return {void} Automatically created
		 */
		GetAccountUser(user_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a user's details
		 * Patch account/users/{user_id}
		 * @param {string} user_id UUID of the user to retrieve
		 * @param {UserOptions} requestBody user parameters
		 * @return {void} Automatically created
		 */
		UpdateAccountUser(user_id: string, requestBody: UserOptions): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'account/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets the user's lockout status
		 * Patch account/users/{user_id}/resetLockout
		 * @param {string} user_id UUID of the user to retrieve
		 * @return {void} Automatically created
		 */
		ResetAccountUserLockout(user_id: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'account/users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/resetLockout', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resets the user's MFA tokens
		 * Patch account/users/{user_id}/resetMFA
		 * @param {string} user_id UUID of the user to retrieve
		 * @return {void} Automatically created
		 */
		ResetAccountUserMFA(user_id: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'account/users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/resetMFA', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends the user a password reset email
		 * Patch account/users/{user_id}/resetPassword
		 * @param {string} user_id UUID of the user to retrieve
		 * @return {void} Automatically created
		 */
		ResetAccountUserPassword(user_id: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'account/users/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/resetPassword', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cisco serial number and model name export for Cisco Smart Net Total Care Service.
		 * Get export/org/assets.cisco.csv
		 * @param {string} search an optional search string for filtering results
		 * @return {void} filtered asset results
		 */
		ExportAssetsCiscoCSV(search: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/org/assets.cisco.csv?search=' + (search == null ? '' : encodeURIComponent(search)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Asset inventory as CSV
		 * Get export/org/assets.csv
		 * @param {string} search an optional search string for filtering results
		 * @return {void} filtered asset results
		 */
		ExportAssetsCSV(search: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/org/assets.csv?search=' + (search == null ? '' : encodeURIComponent(search)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports the asset inventory
		 * Get export/org/assets.json
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {Array<Asset>} filtered asset results
		 */
		ExportAssetsJSON(search: string | null | undefined, fields: string | null | undefined): Observable<Array<Asset>> {
			return this.http.get<Array<Asset>>(this.baseUri + 'export/org/assets.json?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Asset inventory as JSON line-delimited
		 * Get export/org/assets.jsonl
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {string} filtered asset results
		 */
		ExportAssetsJSONL(search: string | null | undefined, fields: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'export/org/assets.jsonl?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { responseType: 'text' });
		}

		/**
		 * Asset inventory as Nmap-style XML
		 * Get export/org/assets.nmap.xml
		 * @param {string} search an optional search string for filtering results
		 * @return {void} filtered asset results
		 */
		ExportAssetsNmapXML(search: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/org/assets.nmap.xml?search=' + (search == null ? '' : encodeURIComponent(search)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Export an asset inventory as CSV for ServiceNow integration
		 * Get export/org/assets.servicenow.csv
		 * @return {void} asset export
		 */
		SnowExportAssetsCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/org/assets.servicenow.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports the asset inventory as JSON
		 * Get export/org/assets.servicenow.json
		 * @return {Array<AssetServiceNow>} filtered asset results
		 */
		SnowExportAssetsJSON(): Observable<Array<AssetServiceNow>> {
			return this.http.get<Array<AssetServiceNow>>(this.baseUri + 'export/org/assets.servicenow.json', {});
		}

		/**
		 * Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
		 * Get export/org/assets/sync/created/assets.json
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @param {number} since an optional unix timestamp to use as a checkpoint
		 * @return {AssetsWithCheckpoint} filtered asset results with a checkpoint wrapper
		 */
		SplunkAssetSyncCreatedJSON(search: string | null | undefined, fields: string | null | undefined, since: number | null | undefined): Observable<AssetsWithCheckpoint> {
			return this.http.get<AssetsWithCheckpoint>(this.baseUri + 'export/org/assets/sync/created/assets.json?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&since=' + since, {});
		}

		/**
		 * Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.
		 * Get export/org/assets/sync/updated/assets.json
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @param {number} since an optional unix timestamp to use as a checkpoint
		 * @return {AssetsWithCheckpoint} filtered asset results with a checkpoint wrapper
		 */
		SplunkAssetSyncUpdatedJSON(search: string | null | undefined, fields: string | null | undefined, since: number | null | undefined): Observable<AssetsWithCheckpoint> {
			return this.http.get<AssetsWithCheckpoint>(this.baseUri + 'export/org/assets/sync/updated/assets.json?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&since=' + since, {});
		}

		/**
		 * Service inventory as CSV
		 * Get export/org/services.csv
		 * @param {string} search an optional search string for filtering results
		 * @return {void} filtered service results
		 */
		ExportServicesCSV(search: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/org/services.csv?search=' + (search == null ? '' : encodeURIComponent(search)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Service inventory as JSON
		 * Get export/org/services.json
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {Array<Service>} filtered service results
		 */
		ExportServicesJSON(search: string | null | undefined, fields: string | null | undefined): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'export/org/services.json?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Service inventory as JSON line-delimited
		 * Get export/org/services.jsonl
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {string} filtered service results
		 */
		ExportServicesJSONL(search: string | null | undefined, fields: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'export/org/services.jsonl?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { responseType: 'text' });
		}

		/**
		 * Export a service inventory as CSV for ServiceNow integration
		 * Get export/org/services.servicenow.csv
		 * @return {void} services export
		 */
		SnowExportServicesCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/org/services.servicenow.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Site list as CSV
		 * Get export/org/sites.csv
		 * @return {void} all sites
		 */
		ExportSitesCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/org/sites.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Export all sites
		 * Get export/org/sites.json
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {Array<Site>} all sites
		 */
		ExportSitesJSON(search: string | null | undefined, fields: string | null | undefined): Observable<Array<Site>> {
			return this.http.get<Array<Site>>(this.baseUri + 'export/org/sites.json?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Site list as JSON line-delimited
		 * Get export/org/sites.jsonl
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {string} all sites
		 */
		ExportSitesJSONL(search: string | null | undefined, fields: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'export/org/sites.jsonl?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { responseType: 'text' });
		}

		/**
		 * Wireless inventory as CSV
		 * Get export/org/wireless.csv
		 * @param {string} search an optional search string for filtering results
		 * @return {void} filtered wireless results
		 */
		ExportWirelessCSV(search: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'export/org/wireless.csv?search=' + (search == null ? '' : encodeURIComponent(search)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Wireless inventory as JSON
		 * Get export/org/wireless.json
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {Array<Wireless>} filtered wireless results
		 */
		ExportWirelessJSON(search: string | null | undefined, fields: string | null | undefined): Observable<Array<Wireless>> {
			return this.http.get<Array<Wireless>>(this.baseUri + 'export/org/wireless.json?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), {});
		}

		/**
		 * Wireless inventory as JSON line-delimited
		 * Get export/org/wireless.jsonl
		 * @param {string} search an optional search string for filtering results
		 * @param {string} fields an optional list of fields to export, comma-separated
		 * @return {string} filtered wireless results
		 */
		ExportWirelessJSONL(search: string | null | undefined, fields: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'export/org/wireless.jsonl?search=' + (search == null ? '' : encodeURIComponent(search)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { responseType: 'text' });
		}

		/**
		 * Get organization details
		 * Get org
		 * @return {Organization} organization details
		 */
		GetOrganization(): Observable<Organization> {
			return this.http.get<Organization>(this.baseUri + 'org', {});
		}

		/**
		 * Update organization details
		 * Patch org
		 * @param {OrgOptions} requestBody organization options
		 * @return {Organization} organization details
		 */
		UpdateOrganization(requestBody: OrgOptions): Observable<Organization> {
			return this.http.patch<Organization>(this.baseUri + 'org', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all agents
		 * Get org/agents
		 * @return {Array<Agent>} array of agents
		 */
		GetAgents(): Observable<Array<Agent>> {
			return this.http.get<Array<Agent>>(this.baseUri + 'org/agents', {});
		}

		/**
		 * Remove and uninstall an agent
		 * Delete org/agents/{agent_id}
		 * @param {string} agent_id UUID of the agent to remove
		 * @return {void} 
		 */
		RemoveAgent(agent_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'org/agents/' + (agent_id == null ? '' : encodeURIComponent(agent_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details for a single agent
		 * Get org/agents/{agent_id}
		 * @param {string} agent_id UUID of the agent
		 * @return {Agent} agent details
		 */
		GetAgent(agent_id: string): Observable<Agent> {
			return this.http.get<Agent>(this.baseUri + 'org/agents/' + (agent_id == null ? '' : encodeURIComponent(agent_id)), {});
		}

		/**
		 * Update the site associated with agent
		 * Patch org/agents/{agent_id}
		 * @param {string} agent_id UUID of the agent to update
		 * @param {AgentSiteID} requestBody site_id to associate with the agent
		 * @return {Agent} agent details
		 */
		UpdateAgentSite(agent_id: string, requestBody: AgentSiteID): Observable<Agent> {
			return this.http.patch<Agent>(this.baseUri + 'org/agents/' + (agent_id == null ? '' : encodeURIComponent(agent_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Force an agent to update and restart
		 * Post org/agents/{agent_id}/update
		 * @param {string} agent_id UUID of the agent to update
		 * @return {void} 
		 */
		UpgradeAgent(agent_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'org/agents/' + (agent_id == null ? '' : encodeURIComponent(agent_id)) + '/update', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all assets
		 * Get org/assets
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<Asset>} array of assets
		 */
		GetAssets(search: string | null | undefined): Observable<Array<Asset>> {
			return this.http.get<Array<Asset>>(this.baseUri + 'org/assets?search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Clear all tags across multiple assets based on a search query
		 * Post org/assets/bulk/clearTags
		 * @param {Search} requestBody search query to filter
		 * @return {void} status message
		 */
		ClearBulkAssetTags(requestBody: Search): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'org/assets/bulk/clearTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update tags across multiple assets based on a search query
		 * Patch org/assets/bulk/tags
		 * @param {AssetTagsWithSearch} requestBody search query to filter and tags to apply
		 * @return {void} status message
		 */
		UpdateBulkAssetTags(requestBody: AssetTagsWithSearch): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'org/assets/bulk/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Top asset hardware products as CSV
		 * Get org/assets/top.hw.csv
		 * @return {void} top asset hardware platforms and counts as csv
		 */
		ExportAssetTopHWCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/assets/top.hw.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Top asset operating systems as CSV
		 * Get org/assets/top.os.csv
		 * @return {void} top operating systems and counts as csv
		 */
		ExportAssetTopOSCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/assets/top.os.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Top asset tags as CSV
		 * Get org/assets/top.tags.csv
		 * @return {void} top asset tags and counts as csv
		 */
		ExportAssetTopTagsCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/assets/top.tags.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Top asset types as CSV
		 * Get org/assets/top.types.csv
		 * @return {void} top asset types and counts as csv
		 */
		ExportAssetTopTypesCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/assets/top.types.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an asset
		 * Delete org/assets/{asset_id}
		 * @param {string} asset_id UUID of the asset to remove
		 * @return {void} 
		 */
		RemoveAsset(asset_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'org/assets/' + (asset_id == null ? '' : encodeURIComponent(asset_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get asset details
		 * Get org/assets/{asset_id}
		 * @param {string} asset_id UUID of the asset to retrieve
		 * @return {Asset} asset details
		 */
		GetAsset(asset_id: string): Observable<Asset> {
			return this.http.get<Asset>(this.baseUri + 'org/assets/' + (asset_id == null ? '' : encodeURIComponent(asset_id)), {});
		}

		/**
		 * Update asset comments
		 * Patch org/assets/{asset_id}/comments
		 * @param {string} asset_id UUID of the asset to update
		 * @param {AssetComments} requestBody comments to apply to the asset
		 * @return {Asset} asset details
		 */
		UpdateAssetComments(asset_id: string, requestBody: AssetComments): Observable<Asset> {
			return this.http.patch<Asset>(this.baseUri + 'org/assets/' + (asset_id == null ? '' : encodeURIComponent(asset_id)) + '/comments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update asset tags
		 * Patch org/assets/{asset_id}/tags
		 * @param {string} asset_id UUID of the asset to update
		 * @param {AssetTags} requestBody tags to apply to the asset
		 * @return {Asset} asset details
		 */
		UpdateAssetTags(asset_id: string, requestBody: AssetTags): Observable<Asset> {
			return this.http.patch<Asset>(this.baseUri + 'org/assets/' + (asset_id == null ? '' : encodeURIComponent(asset_id)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove the current API key
		 * Delete org/key
		 * @return {void} 
		 */
		RemoveKey(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'org/key', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get API key details
		 * Get org/key
		 * @return {APIKey} api key details
		 */
		GetKey(): Observable<APIKey> {
			return this.http.get<APIKey>(this.baseUri + 'org/key', {});
		}

		/**
		 * Rotate the API key secret and return the updated key
		 * Patch org/key/rotate
		 * @return {APIKey} api key details
		 */
		RotateKey(): Observable<APIKey> {
			return this.http.patch<APIKey>(this.baseUri + 'org/key/rotate', null, {});
		}

		/**
		 * Get all services
		 * Get org/services
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<Service>} array of services
		 */
		GetServices(search: string | null | undefined): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'org/services?search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Subnet utilization statistics as as CSV
		 * Get org/services/subnet.stats.csv
		 * @param {string} mask an optional subnet mask size (ex:24)
		 * @return {void} subnet utilization stats as csv
		 */
		ExportSubnetUtilizationStatsCSV(mask: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/services/subnet.stats.csv?mask=' + (mask == null ? '' : encodeURIComponent(mask)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Top service products as CSV
		 * Get org/services/top.products.csv
		 * @return {void} top service products and counts as csv
		 */
		ExportServicesTopProductsCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/services/top.products.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Top service protocols as CSV
		 * Get org/services/top.protocols.csv
		 * @return {void} top service protocols and counts as csv
		 */
		ExportServicesTopProtocolsCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/services/top.protocols.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Top TCP services as CSV
		 * Get org/services/top.tcp.csv
		 * @return {void} top TCP services and counts as csv
		 */
		ExportServicesTopTCPCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/services/top.tcp.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Top UDP services as CSV
		 * Get org/services/top.udp.csv
		 * @return {void} top UDP services and counts as csv
		 */
		ExportServicesTopUDPCSV(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/services/top.udp.csv', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a service
		 * Delete org/services/{service_id}
		 * @param {string} service_id UUID of the service to remove
		 * @return {void} 
		 */
		RemoveService(service_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'org/services/' + (service_id == null ? '' : encodeURIComponent(service_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get service details
		 * Get org/services/{service_id}
		 * @param {string} service_id UUID of the service to retrieve
		 * @return {Service} service details
		 */
		GetService(service_id: string): Observable<Service> {
			return this.http.get<Service>(this.baseUri + 'org/services/' + (service_id == null ? '' : encodeURIComponent(service_id)), {});
		}

		/**
		 * Get all sites
		 * Get org/sites
		 * @return {Array<Site>} array of sites
		 */
		GetSites(): Observable<Array<Site>> {
			return this.http.get<Array<Site>>(this.baseUri + 'org/sites', {});
		}

		/**
		 * Create a new site
		 * Put org/sites
		 * @param {SiteOptions} requestBody site definition
		 * @return {Site} site details
		 */
		CreateSite(requestBody: SiteOptions): Observable<Site> {
			return this.http.put<Site>(this.baseUri + 'org/sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a site and associated assets
		 * Delete org/sites/{site_id}
		 * @param {string} site_id UUID or name of the site to remove
		 * @return {void} 
		 */
		RemoveSite(site_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'org/sites/' + (site_id == null ? '' : encodeURIComponent(site_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get site details
		 * Get org/sites/{site_id}
		 * @param {string} site_id UUID or name of the site
		 * @return {Site} site details
		 */
		GetSite(site_id: string): Observable<Site> {
			return this.http.get<Site>(this.baseUri + 'org/sites/' + (site_id == null ? '' : encodeURIComponent(site_id)), {});
		}

		/**
		 * Update a site definition
		 * Patch org/sites/{site_id}
		 * @param {string} site_id UUID or name of the site to update
		 * @param {SiteOptions} requestBody site object
		 * @return {Site} site details
		 */
		UpdateSite(site_id: string, requestBody: SiteOptions): Observable<Site> {
			return this.http.patch<Site>(this.baseUri + 'org/sites/' + (site_id == null ? '' : encodeURIComponent(site_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all tasks (last 1000)
		 * Get org/tasks
		 * @param {string} status an optional status string for filtering results
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<Task_>} array of tasks
		 */
		GetTasks(status: string | null | undefined, search: string | null | undefined): Observable<Array<Task_>> {
			return this.http.get<Array<Task_>>(this.baseUri + 'org/tasks?status=' + (status == null ? '' : encodeURIComponent(status)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Get task details
		 * Get org/tasks/{task_id}
		 * @param {string} task_id UUID of the task to retrieve
		 * @return {Task_} task details
		 */
		GetTask(task_id: string): Observable<Task_> {
			return this.http.get<Task_>(this.baseUri + 'org/tasks/' + (task_id == null ? '' : encodeURIComponent(task_id)), {});
		}

		/**
		 * Update task parameters
		 * Patch org/tasks/{task_id}
		 * @param {string} task_id UUID of the task to update
		 * @param {Task_} requestBody task object
		 * @return {Task_} task details
		 */
		UpdateTask(task_id: string, requestBody: Task_): Observable<Task_> {
			return this.http.patch<Task_>(this.baseUri + 'org/tasks/' + (task_id == null ? '' : encodeURIComponent(task_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a temporary task change report data url
		 * Get org/tasks/{task_id}/changes
		 * @param {string} task_id UUID of the task
		 * @return {void} Automatically created
		 */
		GetTaskChangeReport(task_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/tasks/' + (task_id == null ? '' : encodeURIComponent(task_id)) + '/changes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a temporary task scan data url
		 * Get org/tasks/{task_id}/data
		 * @param {string} task_id UUID of the task
		 * @return {void} Automatically created
		 */
		GetTaskScanData(task_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/tasks/' + (task_id == null ? '' : encodeURIComponent(task_id)) + '/data', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Signal that a completed task should be hidden
		 * Post org/tasks/{task_id}/hide
		 * @param {string} task_id UUID of the task to hide
		 * @return {void} Automatically created
		 */
		HideTask(task_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'org/tasks/' + (task_id == null ? '' : encodeURIComponent(task_id)) + '/hide', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a temporary task log data url
		 * Get org/tasks/{task_id}/log
		 * @param {string} task_id UUID of the task
		 * @return {void} Automatically created
		 */
		GetTaskLog(task_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'org/tasks/' + (task_id == null ? '' : encodeURIComponent(task_id)) + '/log', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Signal that a task should be stopped or canceledThis will also remove recurring and scheduled tasks
		 * Post org/tasks/{task_id}/stop
		 * @param {string} task_id UUID of the task to stop
		 * @return {void} Automatically created
		 */
		StopTask(task_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'org/tasks/' + (task_id == null ? '' : encodeURIComponent(task_id)) + '/stop', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all wireless LANs
		 * Get org/wireless
		 * @param {string} search an optional search string for filtering results
		 * @return {Array<Wireless>} array of wireless LANs
		 */
		GetWirelessLANs(search: string | null | undefined): Observable<Array<Wireless>> {
			return this.http.get<Array<Wireless>>(this.baseUri + 'org/wireless?search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Remove a wireless LAN
		 * Delete org/wireless/{wireless_id}
		 * @param {string} wireless_id UUID of the wireless LAN to remove
		 * @return {void} 
		 */
		RemoveWirelessLAN(wireless_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'org/wireless/' + (wireless_id == null ? '' : encodeURIComponent(wireless_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get wireless LAN details
		 * Get org/wireless/{wireless_id}
		 * @param {string} wireless_id UUID of the wireless LAN to retrieve
		 * @return {Wireless} wireless details
		 */
		GetWirelessLAN(wireless_id: string): Observable<Wireless> {
			return this.http.get<Wireless>(this.baseUri + 'org/wireless/' + (wireless_id == null ? '' : encodeURIComponent(wireless_id)), {});
		}

		/**
		 * Returns latest agent version
		 * Get releases/agent/version
		 * @return {ComponentVersion} component version
		 */
		GetLatestAgentVersion(): Observable<ComponentVersion> {
			return this.http.get<ComponentVersion>(this.baseUri + 'releases/agent/version', {});
		}

		/**
		 * Returns latest platform version
		 * Get releases/platform/version
		 * @return {ComponentVersion} component version
		 */
		GetLatestPlatformVersion(): Observable<ComponentVersion> {
			return this.http.get<ComponentVersion>(this.baseUri + 'releases/platform/version', {});
		}

		/**
		 * Returns latest scanner version
		 * Get releases/scanner/version
		 * @return {ComponentVersion} component version
		 */
		GetLatestScannerVersion(): Observable<ComponentVersion> {
			return this.http.get<ComponentVersion>(this.baseUri + 'releases/scanner/version', {});
		}
	}

}

