import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Parameters body to pass for resource name availability check. */
	export interface CheckNameAvailabilityParameters {

		/**
		 * Resource name.
		 * Required
		 */
		name: string;

		/**
		 * Resource type. The only legal value of this property for checking redis cache name availability is 'Microsoft.Cache/redis'.
		 * Required
		 */
		type: string;
	}

	/** Parameters body to pass for resource name availability check. */
	export interface CheckNameAvailabilityParametersFormProperties {

		/**
		 * Resource name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Resource type. The only legal value of this property for checking redis cache name availability is 'Microsoft.Cache/redis'.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckNameAvailabilityParametersFormGroup() {
		return new FormGroup<CheckNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters for Redis export operation. */
	export interface ExportRDBParameters {

		/**
		 * Container name to export to.
		 * Required
		 */
		container: string;

		/** File format. */
		format?: string | null;

		/**
		 * Prefix to use for exported files.
		 * Required
		 */
		prefix: string;
	}

	/** Parameters for Redis export operation. */
	export interface ExportRDBParametersFormProperties {

		/**
		 * Container name to export to.
		 * Required
		 */
		container: FormControl<string | null | undefined>,

		/** File format. */
		format: FormControl<string | null | undefined>,

		/**
		 * Prefix to use for exported files.
		 * Required
		 */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateExportRDBParametersFormGroup() {
		return new FormGroup<ExportRDBParametersFormProperties>({
			container: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters for Redis import operation. */
	export interface ImportRDBParameters {

		/**
		 * files to import.
		 * Required
		 */
		files: Array<string>;

		/** File format. */
		format?: string | null;
	}

	/** Parameters for Redis import operation. */
	export interface ImportRDBParametersFormProperties {

		/** File format. */
		format: FormControl<string | null | undefined>,
	}
	export function CreateImportRDBParametersFormGroup() {
		return new FormGroup<ImportRDBParametersFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of listUpgradeNotifications. */
	export interface NotificationListResponse {

		/** Link for next set of notifications. */
		nextLink?: string | null;

		/** List of all notifications. */
		value?: Array<UpgradeNotification>;
	}

	/** The response of listUpgradeNotifications. */
	export interface NotificationListResponseFormProperties {

		/** Link for next set of notifications. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateNotificationListResponseFormGroup() {
		return new FormGroup<NotificationListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of upgrade notification. */
	export interface UpgradeNotification {

		/** Name of upgrade notification. */
		name?: string | null;

		/** Timestamp when upgrade notification occurred. */
		timestamp?: Date | null;

		/** Details about this upgrade notification */
		upsellNotification?: {[id: string]: string };
	}

	/** Properties of upgrade notification. */
	export interface UpgradeNotificationFormProperties {

		/** Name of upgrade notification. */
		name: FormControl<string | null | undefined>,

		/** Timestamp when upgrade notification occurred. */
		timestamp: FormControl<Date | null | undefined>,

		/** Details about this upgrade notification */
		upsellNotification: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpgradeNotificationFormGroup() {
		return new FormGroup<UpgradeNotificationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			upsellNotification: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** REST API operation */
	export interface Operation {

		/** The object that describes the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** REST API operation */
	export interface OperationFormProperties {

		/** The object that describes the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of operations supported by the resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResource {
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** Redis cache access keys. */
	export interface RedisAccessKeys {

		/** The current primary key that clients can use to authenticate with Redis cache. */
		primaryKey?: string | null;

		/** The current secondary key that clients can use to authenticate with Redis cache. */
		secondaryKey?: string | null;
	}

	/** Redis cache access keys. */
	export interface RedisAccessKeysFormProperties {

		/** The current primary key that clients can use to authenticate with Redis cache. */
		primaryKey: FormControl<string | null | undefined>,

		/** The current secondary key that clients can use to authenticate with Redis cache. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateRedisAccessKeysFormGroup() {
		return new FormGroup<RedisAccessKeysFormProperties>({
			primaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Create/Update/Get common properties of the redis cache. */
	export interface RedisCommonProperties {

		/** Specifies whether the non-ssl Redis server port (6379) is enabled. */
		enableNonSslPort?: boolean | null;

		/** Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2') */
		minimumTlsVersion?: RedisCommonPropertiesMinimumTlsVersion | null;

		/** All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc. */
		redisConfiguration?: {[id: string]: string };

		/** The number of replicas to be created per master. */
		replicasPerMaster?: number | null;

		/** The number of shards to be created on a Premium Cluster Cache. */
		shardCount?: number | null;

		/** A dictionary of tenant settings */
		tenantSettings?: {[id: string]: string };
	}

	/** Create/Update/Get common properties of the redis cache. */
	export interface RedisCommonPropertiesFormProperties {

		/** Specifies whether the non-ssl Redis server port (6379) is enabled. */
		enableNonSslPort: FormControl<boolean | null | undefined>,

		/** Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2') */
		minimumTlsVersion: FormControl<RedisCommonPropertiesMinimumTlsVersion | null | undefined>,

		/** All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc. */
		redisConfiguration: FormControl<{[id: string]: string } | null | undefined>,

		/** The number of replicas to be created per master. */
		replicasPerMaster: FormControl<number | null | undefined>,

		/** The number of shards to be created on a Premium Cluster Cache. */
		shardCount: FormControl<number | null | undefined>,

		/** A dictionary of tenant settings */
		tenantSettings: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRedisCommonPropertiesFormGroup() {
		return new FormGroup<RedisCommonPropertiesFormProperties>({
			enableNonSslPort: new FormControl<boolean | null | undefined>(undefined),
			minimumTlsVersion: new FormControl<RedisCommonPropertiesMinimumTlsVersion | null | undefined>(undefined),
			redisConfiguration: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			replicasPerMaster: new FormControl<number | null | undefined>(undefined),
			shardCount: new FormControl<number | null | undefined>(undefined),
			tenantSettings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum RedisCommonPropertiesMinimumTlsVersion { _1_0 = '1.0', _1_1 = '1.1', _1_2 = '1.2' }


	/** Parameters supplied to the Create Redis operation. */
	export interface RedisCreateParameters {

		/**
		 * The geo-location where the resource lives
		 * Required
		 */
		location: string;

		/**
		 * Properties supplied to Create Redis operation.
		 * Required
		 */
		properties: RedisCreateProperties;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** A list of availability zones denoting where the resource needs to come from. */
		zones?: Array<string>;
	}

	/** Parameters supplied to the Create Redis operation. */
	export interface RedisCreateParametersFormProperties {

		/**
		 * The geo-location where the resource lives
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRedisCreateParametersFormGroup() {
		return new FormGroup<RedisCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties supplied to Create Redis operation. */
	export interface RedisCreateProperties extends RedisCommonProperties {

		/**
		 * SKU parameters supplied to the create Redis operation.
		 * Required
		 */
		sku: Sku;

		/** Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network. */
		staticIP?: string | null;

		/** The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1 */
		subnetId?: string | null;
	}

	/** Properties supplied to Create Redis operation. */
	export interface RedisCreatePropertiesFormProperties extends RedisCommonPropertiesFormProperties {

		/** Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network. */
		staticIP: FormControl<string | null | undefined>,

		/** The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1 */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateRedisCreatePropertiesFormGroup() {
		return new FormGroup<RedisCreatePropertiesFormProperties>({
			enableNonSslPort: new FormControl<boolean | null | undefined>(undefined),
			minimumTlsVersion: new FormControl<RedisCommonPropertiesMinimumTlsVersion | null | undefined>(undefined),
			redisConfiguration: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			replicasPerMaster: new FormControl<number | null | undefined>(undefined),
			shardCount: new FormControl<number | null | undefined>(undefined),
			tenantSettings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			staticIP: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+\.\d+\.\d+\.\d+$')]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^/subscriptions/[^/]*/resourceGroups/[^/]*/providers/Microsoft.(ClassicNetwork|Network)/virtualNetworks/[^/]*/subnets/[^/]*$')]),
		});

	}


	/** A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect */
	export interface RedisFirewallRule extends ProxyResource {

		/**
		 * Specifies a range of IP addresses permitted to connect to the cache
		 * Required
		 */
		properties: RedisFirewallRuleProperties;
	}

	/** A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect */
	export interface RedisFirewallRuleFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateRedisFirewallRuleFormGroup() {
		return new FormGroup<RedisFirewallRuleFormProperties>({
		});

	}


	/** Parameters required for creating a firewall rule on redis cache. */
	export interface RedisFirewallRuleCreateParameters {

		/**
		 * Specifies a range of IP addresses permitted to connect to the cache
		 * Required
		 */
		properties: RedisFirewallRuleProperties;
	}

	/** Parameters required for creating a firewall rule on redis cache. */
	export interface RedisFirewallRuleCreateParametersFormProperties {
	}
	export function CreateRedisFirewallRuleCreateParametersFormGroup() {
		return new FormGroup<RedisFirewallRuleCreateParametersFormProperties>({
		});

	}


	/** The response of list firewall rules Redis operation. */
	export interface RedisFirewallRuleListResult {

		/** Link for next page of results. */
		nextLink?: string | null;

		/** Results of the list firewall rules operation. */
		value?: Array<RedisFirewallRule>;
	}

	/** The response of list firewall rules Redis operation. */
	export interface RedisFirewallRuleListResultFormProperties {

		/** Link for next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRedisFirewallRuleListResultFormGroup() {
		return new FormGroup<RedisFirewallRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a range of IP addresses permitted to connect to the cache */
	export interface RedisFirewallRuleProperties {

		/**
		 * highest IP address included in the range
		 * Required
		 */
		endIP: string;

		/**
		 * lowest IP address included in the range
		 * Required
		 */
		startIP: string;
	}

	/** Specifies a range of IP addresses permitted to connect to the cache */
	export interface RedisFirewallRulePropertiesFormProperties {

		/**
		 * highest IP address included in the range
		 * Required
		 */
		endIP: FormControl<string | null | undefined>,

		/**
		 * lowest IP address included in the range
		 * Required
		 */
		startIP: FormControl<string | null | undefined>,
	}
	export function CreateRedisFirewallRulePropertiesFormGroup() {
		return new FormGroup<RedisFirewallRulePropertiesFormProperties>({
			endIP: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startIP: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response to force reboot for Redis cache. */
	export interface RedisForceRebootResponse {

		/** Status message */
		message?: string | null;
	}

	/** Response to force reboot for Redis cache. */
	export interface RedisForceRebootResponseFormProperties {

		/** Status message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateRedisForceRebootResponseFormGroup() {
		return new FormGroup<RedisForceRebootResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of single instance of redis. */
	export interface RedisInstanceDetails {

		/** If enableNonSslPort is true, provides Redis instance Non-SSL port. */
		nonSslPort?: number | null;

		/** If clustering is enabled, the Shard ID of Redis Instance */
		shardId?: number | null;

		/** Redis instance SSL port. */
		sslPort?: number | null;

		/** If the Cache uses availability zones, specifies availability zone where this instance is located. */
		zone?: string | null;
	}

	/** Details of single instance of redis. */
	export interface RedisInstanceDetailsFormProperties {

		/** If enableNonSslPort is true, provides Redis instance Non-SSL port. */
		nonSslPort: FormControl<number | null | undefined>,

		/** If clustering is enabled, the Shard ID of Redis Instance */
		shardId: FormControl<number | null | undefined>,

		/** Redis instance SSL port. */
		sslPort: FormControl<number | null | undefined>,

		/** If the Cache uses availability zones, specifies availability zone where this instance is located. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateRedisInstanceDetailsFormGroup() {
		return new FormGroup<RedisInstanceDetailsFormProperties>({
			nonSslPort: new FormControl<number | null | undefined>(undefined),
			shardId: new FormControl<number | null | undefined>(undefined),
			sslPort: new FormControl<number | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Linked server Id */
	export interface RedisLinkedServer {

		/** Linked server Id. */
		id?: string | null;
	}

	/** Linked server Id */
	export interface RedisLinkedServerFormProperties {

		/** Linked server Id. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRedisLinkedServerFormGroup() {
		return new FormGroup<RedisLinkedServerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameter required for creating a linked server to redis cache. */
	export interface RedisLinkedServerCreateParameters {

		/**
		 * Create properties for a linked server
		 * Required
		 */
		properties: RedisLinkedServerCreateProperties;
	}

	/** Parameter required for creating a linked server to redis cache. */
	export interface RedisLinkedServerCreateParametersFormProperties {
	}
	export function CreateRedisLinkedServerCreateParametersFormGroup() {
		return new FormGroup<RedisLinkedServerCreateParametersFormProperties>({
		});

	}


	/** Create properties for a linked server */
	export interface RedisLinkedServerCreateProperties {

		/**
		 * Fully qualified resourceId of the linked redis cache.
		 * Required
		 */
		linkedRedisCacheId: string;

		/**
		 * Location of the linked redis cache.
		 * Required
		 */
		linkedRedisCacheLocation: string;

		/**
		 * Role of the linked server.
		 * Required
		 */
		serverRole: RedisLinkedServerCreatePropertiesServerRole;
	}

	/** Create properties for a linked server */
	export interface RedisLinkedServerCreatePropertiesFormProperties {

		/**
		 * Fully qualified resourceId of the linked redis cache.
		 * Required
		 */
		linkedRedisCacheId: FormControl<string | null | undefined>,

		/**
		 * Location of the linked redis cache.
		 * Required
		 */
		linkedRedisCacheLocation: FormControl<string | null | undefined>,

		/**
		 * Role of the linked server.
		 * Required
		 */
		serverRole: FormControl<RedisLinkedServerCreatePropertiesServerRole | null | undefined>,
	}
	export function CreateRedisLinkedServerCreatePropertiesFormGroup() {
		return new FormGroup<RedisLinkedServerCreatePropertiesFormProperties>({
			linkedRedisCacheId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedRedisCacheLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverRole: new FormControl<RedisLinkedServerCreatePropertiesServerRole | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RedisLinkedServerCreatePropertiesServerRole { Primary = 'Primary', Secondary = 'Secondary' }


	/** Properties of a linked server to be returned in get/put response */
	export interface RedisLinkedServerProperties extends RedisLinkedServerCreateProperties {

		/** Terminal state of the link between primary and secondary redis cache. */
		provisioningState?: string | null;
	}

	/** Properties of a linked server to be returned in get/put response */
	export interface RedisLinkedServerPropertiesFormProperties extends RedisLinkedServerCreatePropertiesFormProperties {

		/** Terminal state of the link between primary and secondary redis cache. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateRedisLinkedServerPropertiesFormGroup() {
		return new FormGroup<RedisLinkedServerPropertiesFormProperties>({
			linkedRedisCacheId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkedRedisCacheLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverRole: new FormControl<RedisLinkedServerCreatePropertiesServerRole | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to put/get linked server (with properties) for Redis cache. */
	export interface RedisLinkedServerWithProperties extends ProxyResource {

		/** Properties of a linked server to be returned in get/put response */
		properties?: RedisLinkedServerProperties;
	}

	/** Response to put/get linked server (with properties) for Redis cache. */
	export interface RedisLinkedServerWithPropertiesFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateRedisLinkedServerWithPropertiesFormGroup() {
		return new FormGroup<RedisLinkedServerWithPropertiesFormProperties>({
		});

	}


	/** List of linked servers (with properties) of a Redis cache. */
	export interface RedisLinkedServerWithPropertiesList {

		/** Link for next set. */
		nextLink?: string | null;

		/** List of linked servers (with properties) of a Redis cache. */
		value?: Array<RedisLinkedServerWithProperties>;
	}

	/** List of linked servers (with properties) of a Redis cache. */
	export interface RedisLinkedServerWithPropertiesListFormProperties {

		/** Link for next set. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRedisLinkedServerWithPropertiesListFormGroup() {
		return new FormGroup<RedisLinkedServerWithPropertiesListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of list Redis operation. */
	export interface RedisListResult {

		/** Link for next page of results. */
		nextLink?: string | null;

		/** List of Redis cache instances. */
		value?: Array<RedisResource>;
	}

	/** The response of list Redis operation. */
	export interface RedisListResultFormProperties {

		/** Link for next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRedisListResultFormGroup() {
		return new FormGroup<RedisListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single Redis item in List or Get Operation. */
	export interface RedisResource extends TrackedResource {

		/**
		 * Properties of the redis cache.
		 * Required
		 */
		properties: RedisProperties;

		/** A list of availability zones denoting where the resource needs to come from. */
		zones?: Array<string>;
	}

	/** A single Redis item in List or Get Operation. */
	export interface RedisResourceFormProperties extends TrackedResourceFormProperties {
	}
	export function CreateRedisResourceFormGroup() {
		return new FormGroup<RedisResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Response to put/get patch schedules for Redis cache. */
	export interface RedisPatchSchedule extends ProxyResource {

		/**
		 * List of patch schedules for a Redis cache.
		 * Required
		 */
		properties: ScheduleEntries;
	}

	/** Response to put/get patch schedules for Redis cache. */
	export interface RedisPatchScheduleFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateRedisPatchScheduleFormGroup() {
		return new FormGroup<RedisPatchScheduleFormProperties>({
		});

	}


	/** The response of list patch schedules Redis operation. */
	export interface RedisPatchScheduleListResult {

		/** Link for next page of results. */
		nextLink?: string | null;

		/** Results of the list patch schedules operation. */
		value?: Array<RedisPatchSchedule>;
	}

	/** The response of list patch schedules Redis operation. */
	export interface RedisPatchScheduleListResultFormProperties {

		/** Link for next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRedisPatchScheduleListResultFormGroup() {
		return new FormGroup<RedisPatchScheduleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the redis cache. */
	export interface RedisProperties extends RedisCreateProperties {

		/** Redis cache access keys. */
		accessKeys?: RedisAccessKeys;

		/** Redis host name. */
		hostName?: string | null;

		/** List of the Redis instances associated with the cache */
		instances?: Array<RedisInstanceDetails>;

		/** List of the linked servers associated with the cache */
		linkedServers?: Array<RedisLinkedServer>;

		/** Redis non-SSL port. */
		port?: number | null;

		/** Redis instance provisioning status. */
		provisioningState?: RedisPropertiesProvisioningState | null;

		/** Redis version. */
		redisVersion?: string | null;

		/** Redis SSL port. */
		sslPort?: number | null;
	}

	/** Properties of the redis cache. */
	export interface RedisPropertiesFormProperties extends RedisCreatePropertiesFormProperties {

		/** Redis host name. */
		hostName: FormControl<string | null | undefined>,

		/** Redis non-SSL port. */
		port: FormControl<number | null | undefined>,

		/** Redis instance provisioning status. */
		provisioningState: FormControl<RedisPropertiesProvisioningState | null | undefined>,

		/** Redis version. */
		redisVersion: FormControl<string | null | undefined>,

		/** Redis SSL port. */
		sslPort: FormControl<number | null | undefined>,
	}
	export function CreateRedisPropertiesFormGroup() {
		return new FormGroup<RedisPropertiesFormProperties>({
			enableNonSslPort: new FormControl<boolean | null | undefined>(undefined),
			minimumTlsVersion: new FormControl<RedisCommonPropertiesMinimumTlsVersion | null | undefined>(undefined),
			redisConfiguration: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			replicasPerMaster: new FormControl<number | null | undefined>(undefined),
			shardCount: new FormControl<number | null | undefined>(undefined),
			tenantSettings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			staticIP: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\d+\.\d+\.\d+\.\d+$')]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^/subscriptions/[^/]*/resourceGroups/[^/]*/providers/Microsoft.(ClassicNetwork|Network)/virtualNetworks/[^/]*/subnets/[^/]*$')]),
			hostName: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<RedisPropertiesProvisioningState | null | undefined>(undefined),
			redisVersion: new FormControl<string | null | undefined>(undefined),
			sslPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RedisPropertiesProvisioningState { Creating = 'Creating', Deleting = 'Deleting', Disabled = 'Disabled', Failed = 'Failed', Linking = 'Linking', Provisioning = 'Provisioning', RecoveringScaleFailure = 'RecoveringScaleFailure', Scaling = 'Scaling', Succeeded = 'Succeeded', Unlinking = 'Unlinking', Unprovisioning = 'Unprovisioning', Updating = 'Updating' }


	/** Specifies which Redis node(s) to reboot. */
	export interface RedisRebootParameters {

		/**
		 * Which Redis node(s) to reboot. Depending on this value data loss is possible.
		 * Required
		 */
		rebootType: RedisRebootParametersRebootType;

		/** If clustering is enabled, the ID of the shard to be rebooted. */
		shardId?: number | null;
	}

	/** Specifies which Redis node(s) to reboot. */
	export interface RedisRebootParametersFormProperties {

		/**
		 * Which Redis node(s) to reboot. Depending on this value data loss is possible.
		 * Required
		 */
		rebootType: FormControl<RedisRebootParametersRebootType | null | undefined>,

		/** If clustering is enabled, the ID of the shard to be rebooted. */
		shardId: FormControl<number | null | undefined>,
	}
	export function CreateRedisRebootParametersFormGroup() {
		return new FormGroup<RedisRebootParametersFormProperties>({
			rebootType: new FormControl<RedisRebootParametersRebootType | null | undefined>(undefined, [Validators.required]),
			shardId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RedisRebootParametersRebootType { PrimaryNode = 'PrimaryNode', SecondaryNode = 'SecondaryNode', AllNodes = 'AllNodes' }


	/** Specifies which Redis access keys to reset. */
	export interface RedisRegenerateKeyParameters {

		/**
		 * The Redis access key to regenerate.
		 * Required
		 */
		keyType: RedisLinkedServerCreatePropertiesServerRole;
	}

	/** Specifies which Redis access keys to reset. */
	export interface RedisRegenerateKeyParametersFormProperties {

		/**
		 * The Redis access key to regenerate.
		 * Required
		 */
		keyType: FormControl<RedisLinkedServerCreatePropertiesServerRole | null | undefined>,
	}
	export function CreateRedisRegenerateKeyParametersFormGroup() {
		return new FormGroup<RedisRegenerateKeyParametersFormProperties>({
			keyType: new FormControl<RedisLinkedServerCreatePropertiesServerRole | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters supplied to the Update Redis operation. */
	export interface RedisUpdateParameters {

		/** Patchable properties of the redis cache. */
		properties?: RedisUpdateProperties;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Parameters supplied to the Update Redis operation. */
	export interface RedisUpdateParametersFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRedisUpdateParametersFormGroup() {
		return new FormGroup<RedisUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Patchable properties of the redis cache. */
	export interface RedisUpdateProperties extends RedisCommonProperties {

		/** SKU parameters supplied to the create Redis operation. */
		sku?: Sku;
	}

	/** Patchable properties of the redis cache. */
	export interface RedisUpdatePropertiesFormProperties extends RedisCommonPropertiesFormProperties {
	}
	export function CreateRedisUpdatePropertiesFormGroup() {
		return new FormGroup<RedisUpdatePropertiesFormProperties>({
			enableNonSslPort: new FormControl<boolean | null | undefined>(undefined),
			minimumTlsVersion: new FormControl<RedisCommonPropertiesMinimumTlsVersion | null | undefined>(undefined),
			redisConfiguration: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			replicasPerMaster: new FormControl<number | null | undefined>(undefined),
			shardCount: new FormControl<number | null | undefined>(undefined),
			tenantSettings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The Resource definition. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** The Resource definition. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of patch schedules for a Redis cache. */
	export interface ScheduleEntries {

		/**
		 * List of patch schedules for a Redis cache.
		 * Required
		 */
		scheduleEntries: Array<ScheduleEntry>;
	}

	/** List of patch schedules for a Redis cache. */
	export interface ScheduleEntriesFormProperties {
	}
	export function CreateScheduleEntriesFormGroup() {
		return new FormGroup<ScheduleEntriesFormProperties>({
		});

	}


	/** Patch schedule entry for a Premium Redis Cache. */
	export interface ScheduleEntry {

		/**
		 * Day of the week when a cache can be patched.
		 * Required
		 */
		dayOfWeek: ScheduleEntryDayOfWeek;

		/** ISO8601 timespan specifying how much time cache patching can take. */
		maintenanceWindow?: string | null;

		/**
		 * Start hour after which cache patching can start.
		 * Required
		 */
		startHourUtc: number;
	}

	/** Patch schedule entry for a Premium Redis Cache. */
	export interface ScheduleEntryFormProperties {

		/**
		 * Day of the week when a cache can be patched.
		 * Required
		 */
		dayOfWeek: FormControl<ScheduleEntryDayOfWeek | null | undefined>,

		/** ISO8601 timespan specifying how much time cache patching can take. */
		maintenanceWindow: FormControl<string | null | undefined>,

		/**
		 * Start hour after which cache patching can start.
		 * Required
		 */
		startHourUtc: FormControl<number | null | undefined>,
	}
	export function CreateScheduleEntryFormGroup() {
		return new FormGroup<ScheduleEntryFormProperties>({
			dayOfWeek: new FormControl<ScheduleEntryDayOfWeek | null | undefined>(undefined, [Validators.required]),
			maintenanceWindow: new FormControl<string | null | undefined>(undefined),
			startHourUtc: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduleEntryDayOfWeek { Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', Saturday = 'Saturday', Sunday = 'Sunday', Everyday = 'Everyday', Weekend = 'Weekend' }


	/** SKU parameters supplied to the create Redis operation. */
	export interface Sku {

		/**
		 * The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
		 * Required
		 */
		capacity: number;

		/**
		 * The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
		 * Required
		 */
		family: SkuFamily;

		/**
		 * The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
		 * Required
		 */
		name: SkuName;
	}

	/** SKU parameters supplied to the create Redis operation. */
	export interface SkuFormProperties {

		/**
		 * The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
		 * Required
		 */
		capacity: FormControl<number | null | undefined>,

		/**
		 * The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
		 * Required
		 */
		family: FormControl<SkuFamily | null | undefined>,

		/**
		 * The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			family: new FormControl<SkuFamily | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SkuFamily { C = 'C', P = 'P' }

	export enum SkuName { Basic = 'Basic', Standard = 'Standard', Premium = 'Premium' }


	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResource extends Resource {

		/**
		 * The geo-location where the resource lives
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/**
		 * The geo-location where the resource lives
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available REST API operations of the Microsoft.Cache provider.
		 * Get providers/Microsoft.Cache/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} Success. The response describes the list of operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Cache/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks that the redis cache name is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Cache/CheckNameAvailability
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {CheckNameAvailabilityParameters} requestBody Parameters supplied to the CheckNameAvailability Redis operation. The only supported resource type is 'Microsoft.Cache/redis'
		 * @return {void} Name is available
		 */
		Redis_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: CheckNameAvailabilityParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Cache/CheckNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all Redis caches in the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Cache/Redis
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RedisListResult} 
		 */
		Redis_List(api_version: string, subscriptionId: string): Observable<RedisListResult> {
			return this.http.get<RedisListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Cache/Redis?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Redis caches in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RedisListResult} 
		 */
		Redis_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<RedisListResult> {
			return this.http.get<RedisListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all firewall rules in the specified redis cache.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} cacheName The name of the Redis cache.
		 * @return {RedisFirewallRuleListResult} Successfully got the current rules
		 */
		FirewallRules_ListByRedisResource(api_version: string, subscriptionId: string, resourceGroupName: string, cacheName: string): Observable<RedisFirewallRuleListResult> {
			return this.http.get<RedisFirewallRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/firewallRules?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a single firewall rule in a specified redis cache.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} cacheName The name of the Redis cache.
		 * @param {string} ruleName The name of the firewall rule.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RedisFirewallRule} Successfully found the rule
		 */
		FirewallRules_Get(resourceGroupName: string, cacheName: string, ruleName: string, api_version: string, subscriptionId: string): Observable<RedisFirewallRule> {
			return this.http.get<RedisFirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/firewallRules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a redis cache firewall rule
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} cacheName The name of the Redis cache.
		 * @param {string} ruleName The name of the firewall rule.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RedisFirewallRuleCreateParameters} requestBody Parameters supplied to the create or update redis firewall rule operation.
		 * @return {RedisFirewallRule} Resource was successfully updated
		 */
		FirewallRules_CreateOrUpdate(resourceGroupName: string, cacheName: string, ruleName: string, api_version: string, subscriptionId: string, requestBody: RedisFirewallRuleCreateParameters): Observable<RedisFirewallRule> {
			return this.http.put<RedisFirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/firewallRules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a single firewall rule in a specified redis cache.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} cacheName The name of the Redis cache.
		 * @param {string} ruleName The name of the firewall rule.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Successfully deleted the rule
		 */
		FirewallRules_Delete(resourceGroupName: string, cacheName: string, ruleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/firewallRules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all patch schedules in the specified redis cache (there is only one).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/patchSchedules
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} cacheName The name of the Redis cache.
		 * @return {RedisPatchScheduleListResult} Successfully got the current patch schedules
		 */
		PatchSchedules_ListByRedisResource(api_version: string, subscriptionId: string, resourceGroupName: string, cacheName: string): Observable<RedisPatchScheduleListResult> {
			return this.http.get<RedisPatchScheduleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/patchSchedules?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Redis cache (resource description).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RedisResource} The redis cache was successfully found.
		 */
		Redis_Get(resourceGroupName: string, name: string, api_version: string, subscriptionId: string): Observable<RedisResource> {
			return this.http.get<RedisResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RedisCreateParameters} requestBody Parameters supplied to the Create Redis operation.
		 * @return {RedisResource} The existing redis cache was successfully updated. Check provisioningState to see detailed status.
		 */
		Redis_Create(resourceGroupName: string, name: string, api_version: string, subscriptionId: string, requestBody: RedisCreateParameters): Observable<RedisResource> {
			return this.http.put<RedisResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Redis cache.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} The redis cache was successfully deleted.
		 */
		Redis_Delete(resourceGroupName: string, name: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing Redis cache.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RedisUpdateParameters} requestBody Parameters supplied to the Update Redis operation.
		 * @return {RedisResource} The existing redis cache was successfully updated. Check provisioningState to see detailed status.
		 */
		Redis_Update(resourceGroupName: string, name: string, api_version: string, subscriptionId: string, requestBody: RedisUpdateParameters): Observable<RedisResource> {
			return this.http.patch<RedisResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Export data from the redis cache to blobs in a container.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/export
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ExportRDBParameters} requestBody Parameters for Redis export operation.
		 * @return {void} Export operation succeeded.
		 */
		Redis_ExportData(resourceGroupName: string, name: string, api_version: string, subscriptionId: string, requestBody: ExportRDBParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/export&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/forceReboot
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RedisRebootParameters} requestBody Specifies which Redis node(s) to reboot.
		 * @return {RedisForceRebootResponse} Reboot operation successfully enqueued
		 */
		Redis_ForceReboot(resourceGroupName: string, name: string, api_version: string, subscriptionId: string, requestBody: RedisRebootParameters): Observable<RedisForceRebootResponse> {
			return this.http.post<RedisForceRebootResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/forceReboot&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Import data into Redis cache.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/import
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ImportRDBParameters} requestBody Parameters for Redis import operation.
		 * @return {void} Import operation succeeded.
		 */
		Redis_ImportData(resourceGroupName: string, name: string, api_version: string, subscriptionId: string, requestBody: ImportRDBParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/import&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the list of linked servers associated with this redis cache (requires Premium SKU).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RedisLinkedServerWithPropertiesList} Response of get linked servers.
		 */
		LinkedServer_List(resourceGroupName: string, name: string, api_version: string, subscriptionId: string): Observable<RedisLinkedServerWithPropertiesList> {
			return this.http.get<RedisLinkedServerWithPropertiesList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/linkedServers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers/{linkedServerName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the redis cache.
		 * @param {string} linkedServerName The name of the linked server.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RedisLinkedServerWithProperties} Response of get linked server.
		 */
		LinkedServer_Get(resourceGroupName: string, name: string, linkedServerName: string, api_version: string, subscriptionId: string): Observable<RedisLinkedServerWithProperties> {
			return this.http.get<RedisLinkedServerWithProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/linkedServers/' + (linkedServerName == null ? '' : encodeURIComponent(linkedServerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Adds a linked server to the Redis cache (requires Premium SKU).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers/{linkedServerName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} linkedServerName The name of the linked server that is being added to the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RedisLinkedServerCreateParameters} requestBody Parameters supplied to the Create Linked server operation.
		 * @return {RedisLinkedServerWithProperties} The linked server was successfully added.
		 */
		LinkedServer_Create(resourceGroupName: string, name: string, linkedServerName: string, api_version: string, subscriptionId: string, requestBody: RedisLinkedServerCreateParameters): Observable<RedisLinkedServerWithProperties> {
			return this.http.put<RedisLinkedServerWithProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/linkedServers/' + (linkedServerName == null ? '' : encodeURIComponent(linkedServerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the linked server from a redis cache (requires Premium SKU).
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers/{linkedServerName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the redis cache.
		 * @param {string} linkedServerName The name of the linked server that is being added to the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Linked server was successfully deleted.
		 */
		LinkedServer_Delete(resourceGroupName: string, name: string, linkedServerName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/linkedServers/' + (linkedServerName == null ? '' : encodeURIComponent(linkedServerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/listKeys
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RedisAccessKeys} Lists the keys for the specified Redis cache.
		 */
		Redis_ListKeys(resourceGroupName: string, name: string, api_version: string, subscriptionId: string): Observable<RedisAccessKeys> {
			return this.http.post<RedisAccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets any upgrade notifications for a Redis cache.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/listUpgradeNotifications
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {number} history how many minutes in past to look for upgrade notifications
		 * @return {NotificationListResponse} All upgrade notifications in given time range
		 */
		Redis_ListUpgradeNotifications(resourceGroupName: string, name: string, api_version: string, subscriptionId: string, history: number): Observable<NotificationListResponse> {
			return this.http.get<NotificationListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/listUpgradeNotifications&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&history=' + history, {});
		}

		/**
		 * Gets the patching schedule of a redis cache (requires Premium SKU).
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the redis cache.
		 * @param {PatchSchedules_GetDefault} _default Default string modeled as parameter for auto generation to work correctly.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RedisPatchSchedule} Response of get patch schedules.
		 */
		PatchSchedules_Get(resourceGroupName: string, name: string, _default: PatchSchedules_GetDefault, api_version: string, subscriptionId: string): Observable<RedisPatchSchedule> {
			return this.http.get<RedisPatchSchedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/patchSchedules/' + _default + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or replace the patching schedule for Redis cache (requires Premium SKU).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {PatchSchedules_GetDefault} _default Default string modeled as parameter for auto generation to work correctly.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RedisPatchSchedule} requestBody Parameters to set the patching schedule for Redis cache.
		 * @return {RedisPatchSchedule} The patch schedule was successfully updated.
		 */
		PatchSchedules_CreateOrUpdate(resourceGroupName: string, name: string, _default: PatchSchedules_GetDefault, api_version: string, subscriptionId: string, requestBody: RedisPatchSchedule): Observable<RedisPatchSchedule> {
			return this.http.put<RedisPatchSchedule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/patchSchedules/' + _default + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the patching schedule of a redis cache (requires Premium SKU).
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/{default}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the redis cache.
		 * @param {PatchSchedules_GetDefault} _default Default string modeled as parameter for auto generation to work correctly.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Success.
		 */
		PatchSchedules_Delete(resourceGroupName: string, name: string, _default: PatchSchedules_GetDefault, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/patchSchedules/' + _default + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Regenerate Redis cache's access keys. This operation requires write permission to the cache resource.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/regenerateKey
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} name The name of the Redis cache.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RedisRegenerateKeyParameters} requestBody Specifies which key to regenerate.
		 * @return {RedisAccessKeys} Lists the regenerated keys for Redis Cache
		 */
		Redis_RegenerateKey(resourceGroupName: string, name: string, api_version: string, subscriptionId: string, requestBody: RedisRegenerateKeyParameters): Observable<RedisAccessKeys> {
			return this.http.post<RedisAccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Cache/Redis/' + (name == null ? '' : encodeURIComponent(name)) + '/regenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum PatchSchedules_GetDefault { default = 'default' }

}

