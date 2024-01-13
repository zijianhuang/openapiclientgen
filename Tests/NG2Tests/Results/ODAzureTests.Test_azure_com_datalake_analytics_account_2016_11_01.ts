import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The parameters used to add a new Data Lake Store account. */
	export interface AddDataLakeStoreParameters {

		/** The Data Lake Store account properties to use when adding a new Data Lake Store account. */
		properties?: AddDataLakeStoreProperties;
	}

	/** The parameters used to add a new Data Lake Store account. */
	export interface AddDataLakeStoreParametersFormProperties {
	}
	export function CreateAddDataLakeStoreParametersFormGroup() {
		return new FormGroup<AddDataLakeStoreParametersFormProperties>({
		});

	}


	/** The Data Lake Store account properties to use when adding a new Data Lake Store account. */
	export interface AddDataLakeStoreProperties {

		/** The optional suffix for the Data Lake Store account. */
		suffix?: string | null;
	}

	/** The Data Lake Store account properties to use when adding a new Data Lake Store account. */
	export interface AddDataLakeStorePropertiesFormProperties {

		/** The optional suffix for the Data Lake Store account. */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateAddDataLakeStorePropertiesFormGroup() {
		return new FormGroup<AddDataLakeStorePropertiesFormProperties>({
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to add a new Data Lake Store account while creating a new Data Lake Analytics account. */
	export interface AddDataLakeStoreWithAccountParameters {

		/**
		 * The unique name of the Data Lake Store account to add.
		 * Required
		 */
		name: string;

		/** The Data Lake Store account properties to use when adding a new Data Lake Store account. */
		properties?: AddDataLakeStoreProperties;
	}

	/** The parameters used to add a new Data Lake Store account while creating a new Data Lake Analytics account. */
	export interface AddDataLakeStoreWithAccountParametersFormProperties {

		/**
		 * The unique name of the Data Lake Store account to add.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddDataLakeStoreWithAccountParametersFormGroup() {
		return new FormGroup<AddDataLakeStoreWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters used to add a new Azure Storage account. */
	export interface AddStorageAccountParameters {

		/**
		 * The Azure Storage account properties to use when adding a new Azure Storage account.
		 * Required
		 */
		properties: AddStorageAccountProperties;
	}

	/** The parameters used to add a new Azure Storage account. */
	export interface AddStorageAccountParametersFormProperties {
	}
	export function CreateAddStorageAccountParametersFormGroup() {
		return new FormGroup<AddStorageAccountParametersFormProperties>({
		});

	}


	/** The Azure Storage account properties to use when adding a new Azure Storage account. */
	export interface AddStorageAccountProperties {

		/**
		 * The access key associated with this Azure Storage account that will be used to connect to it.
		 * Required
		 */
		accessKey: string;

		/** The optional suffix for the storage account. */
		suffix?: string | null;
	}

	/** The Azure Storage account properties to use when adding a new Azure Storage account. */
	export interface AddStorageAccountPropertiesFormProperties {

		/**
		 * The access key associated with this Azure Storage account that will be used to connect to it.
		 * Required
		 */
		accessKey: FormControl<string | null | undefined>,

		/** The optional suffix for the storage account. */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateAddStorageAccountPropertiesFormGroup() {
		return new FormGroup<AddStorageAccountPropertiesFormProperties>({
			accessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to add a new Azure Storage account while creating a new Data Lake Analytics account. */
	export interface AddStorageAccountWithAccountParameters {

		/**
		 * The unique name of the Azure Storage account to add.
		 * Required
		 */
		name: string;

		/**
		 * The Azure Storage account properties to use when adding a new Azure Storage account.
		 * Required
		 */
		properties: AddStorageAccountProperties;
	}

	/** The parameters used to add a new Azure Storage account while creating a new Data Lake Analytics account. */
	export interface AddStorageAccountWithAccountParametersFormProperties {

		/**
		 * The unique name of the Azure Storage account to add.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddStorageAccountWithAccountParametersFormGroup() {
		return new FormGroup<AddStorageAccountWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Subscription-level properties and limits for Data Lake Analytics. */
	export interface CapabilityInformation {

		/** The current number of accounts under this subscription. */
		accountCount?: number | null;

		/** The maximum supported number of accounts under this subscription. */
		maxAccountCount?: number | null;

		/** The Boolean value of true or false to indicate the maintenance state. */
		migrationState?: boolean | null;

		/** The subscription state. */
		state?: CapabilityInformationState | null;

		/** The subscription credentials that uniquely identifies the subscription. */
		subscriptionId?: string | null;
	}

	/** Subscription-level properties and limits for Data Lake Analytics. */
	export interface CapabilityInformationFormProperties {

		/** The current number of accounts under this subscription. */
		accountCount: FormControl<number | null | undefined>,

		/** The maximum supported number of accounts under this subscription. */
		maxAccountCount: FormControl<number | null | undefined>,

		/** The Boolean value of true or false to indicate the maintenance state. */
		migrationState: FormControl<boolean | null | undefined>,

		/** The subscription state. */
		state: FormControl<CapabilityInformationState | null | undefined>,

		/** The subscription credentials that uniquely identifies the subscription. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateCapabilityInformationFormGroup() {
		return new FormGroup<CapabilityInformationFormProperties>({
			accountCount: new FormControl<number | null | undefined>(undefined),
			maxAccountCount: new FormControl<number | null | undefined>(undefined),
			migrationState: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<CapabilityInformationState | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CapabilityInformationState { Registered = 0, Suspended = 1, Deleted = 2, Unregistered = 3, Warned = 4 }


	/** Data Lake Analytics account name availability check parameters. */
	export interface CheckNameAvailabilityParameters {

		/**
		 * The Data Lake Analytics name to check availability for.
		 * Required
		 */
		name: string;

		/**
		 * The resource type. Note: This should not be set by the user, as the constant value is Microsoft.DataLakeAnalytics/accounts
		 * Required
		 */
		type: CheckNameAvailabilityParametersType;
	}

	/** Data Lake Analytics account name availability check parameters. */
	export interface CheckNameAvailabilityParametersFormProperties {

		/**
		 * The Data Lake Analytics name to check availability for.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource type. Note: This should not be set by the user, as the constant value is Microsoft.DataLakeAnalytics/accounts
		 * Required
		 */
		type: FormControl<CheckNameAvailabilityParametersType | null | undefined>,
	}
	export function CreateCheckNameAvailabilityParametersFormGroup() {
		return new FormGroup<CheckNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameAvailabilityParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameAvailabilityParametersType { 'Microsoft.DataLakeAnalytics/accounts' = 0 }


	/** Data Lake Analytics compute policy information. */
	export interface ComputePolicy extends SubResource {

		/** The compute policy properties. */
		properties?: ComputePolicyProperties;
	}

	/** Data Lake Analytics compute policy information. */
	export interface ComputePolicyFormProperties extends SubResourceFormProperties {
	}
	export function CreateComputePolicyFormGroup() {
		return new FormGroup<ComputePolicyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of compute policies in the account. */
	export interface ComputePolicyListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<ComputePolicy>;
	}

	/** The list of compute policies in the account. */
	export interface ComputePolicyListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateComputePolicyListResultFormGroup() {
		return new FormGroup<ComputePolicyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The compute policy properties. */
	export interface ComputePolicyProperties {

		/**
		 * The maximum degree of parallelism per job this user can use to submit jobs.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob?: number | null;

		/**
		 * The minimum priority per job this user can use to submit jobs.
		 * Minimum: 1
		 */
		minPriorityPerJob?: number | null;

		/** The AAD object identifier for the entity to create a policy for. */
		objectId?: string | null;

		/** The type of AAD object the object identifier refers to. */
		objectType?: ComputePolicyPropertiesObjectType | null;
	}

	/** The compute policy properties. */
	export interface ComputePolicyPropertiesFormProperties {

		/**
		 * The maximum degree of parallelism per job this user can use to submit jobs.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob: FormControl<number | null | undefined>,

		/**
		 * The minimum priority per job this user can use to submit jobs.
		 * Minimum: 1
		 */
		minPriorityPerJob: FormControl<number | null | undefined>,

		/** The AAD object identifier for the entity to create a policy for. */
		objectId: FormControl<string | null | undefined>,

		/** The type of AAD object the object identifier refers to. */
		objectType: FormControl<ComputePolicyPropertiesObjectType | null | undefined>,
	}
	export function CreateComputePolicyPropertiesFormGroup() {
		return new FormGroup<ComputePolicyPropertiesFormProperties>({
			maxDegreeOfParallelismPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			minPriorityPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			objectId: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<ComputePolicyPropertiesObjectType | null | undefined>(undefined),
		});

	}

	export enum ComputePolicyPropertiesObjectType { User = 0, Group = 1, ServicePrincipal = 2 }


	/** The parameters used to create a new compute policy while creating a new Data Lake Analytics account. */
	export interface CreateComputePolicyWithAccountParameters {

		/**
		 * The unique name of the compute policy to create.
		 * Required
		 */
		name: string;

		/**
		 * The compute policy properties to use when creating a new compute policy.
		 * Required
		 */
		properties: CreateOrUpdateComputePolicyProperties;
	}

	/** The parameters used to create a new compute policy while creating a new Data Lake Analytics account. */
	export interface CreateComputePolicyWithAccountParametersFormProperties {

		/**
		 * The unique name of the compute policy to create.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateComputePolicyWithAccountParametersFormGroup() {
		return new FormGroup<CreateComputePolicyWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters to use for creating a Data Lake Analytics account. */
	export interface CreateDataLakeAnalyticsAccountParameters {

		/**
		 * The resource location.
		 * Required
		 */
		location: string;

		/** Required */
		properties: CreateDataLakeAnalyticsAccountProperties;

		/** The resource tags. */
		tags?: {[id: string]: string };
	}

	/** The parameters to use for creating a Data Lake Analytics account. */
	export interface CreateDataLakeAnalyticsAccountParametersFormProperties {

		/**
		 * The resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDataLakeAnalyticsAccountParametersFormGroup() {
		return new FormGroup<CreateDataLakeAnalyticsAccountParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDataLakeAnalyticsAccountProperties {

		/** The list of compute policies associated with this account. */
		computePolicies?: Array<CreateComputePolicyWithAccountParameters>;

		/**
		 * The list of Data Lake Store accounts associated with this account.
		 * Required
		 */
		dataLakeStoreAccounts: Array<AddDataLakeStoreWithAccountParameters>;

		/**
		 * The default Data Lake Store account associated with this account.
		 * Required
		 */
		defaultDataLakeStoreAccount: string;

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps?: CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null;

		/** The list of firewall rules associated with this account. */
		firewallRules?: Array<CreateFirewallRuleWithAccountParameters>;

		/** The current state of the IP address firewall for this account. */
		firewallState?: CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null;

		/**
		 * The maximum supported degree of parallelism for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelism?: number | null;

		/**
		 * The maximum supported degree of parallelism per job for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob?: number | null;

		/**
		 * The maximum supported jobs running under the account at the same time.
		 * Minimum: 1
		 */
		maxJobCount?: number | null;

		/**
		 * The minimum supported priority per job for this account.
		 * Minimum: 1
		 */
		minPriorityPerJob?: number | null;

		/** The commitment tier for the next month. */
		newTier?: CreateDataLakeAnalyticsAccountPropertiesNewTier | null;

		/**
		 * The number of days that job metadata is retained.
		 * Minimum: 1
		 * Maximum: 180
		 */
		queryStoreRetention?: number | null;

		/** The list of Azure Blob Storage accounts associated with this account. */
		storageAccounts?: Array<AddStorageAccountWithAccountParameters>;
	}
	export interface CreateDataLakeAnalyticsAccountPropertiesFormProperties {

		/**
		 * The default Data Lake Store account associated with this account.
		 * Required
		 */
		defaultDataLakeStoreAccount: FormControl<string | null | undefined>,

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps: FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>,

		/** The current state of the IP address firewall for this account. */
		firewallState: FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>,

		/**
		 * The maximum supported degree of parallelism for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelism: FormControl<number | null | undefined>,

		/**
		 * The maximum supported degree of parallelism per job for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob: FormControl<number | null | undefined>,

		/**
		 * The maximum supported jobs running under the account at the same time.
		 * Minimum: 1
		 */
		maxJobCount: FormControl<number | null | undefined>,

		/**
		 * The minimum supported priority per job for this account.
		 * Minimum: 1
		 */
		minPriorityPerJob: FormControl<number | null | undefined>,

		/** The commitment tier for the next month. */
		newTier: FormControl<CreateDataLakeAnalyticsAccountPropertiesNewTier | null | undefined>,

		/**
		 * The number of days that job metadata is retained.
		 * Minimum: 1
		 * Maximum: 180
		 */
		queryStoreRetention: FormControl<number | null | undefined>,
	}
	export function CreateCreateDataLakeAnalyticsAccountPropertiesFormGroup() {
		return new FormGroup<CreateDataLakeAnalyticsAccountPropertiesFormProperties>({
			defaultDataLakeStoreAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firewallAllowAzureIps: new FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>(undefined),
			firewallState: new FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>(undefined),
			maxDegreeOfParallelism: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			maxDegreeOfParallelismPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			maxJobCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			minPriorityPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			newTier: new FormControl<CreateDataLakeAnalyticsAccountPropertiesNewTier | null | undefined>(undefined),
			queryStoreRetention: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(180)]),
		});

	}

	export enum CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps { Enabled = 0, Disabled = 1 }


	/** The parameters used to create a new firewall rule while creating a new Data Lake Analytics account. */
	export interface CreateFirewallRuleWithAccountParameters {

		/**
		 * The unique name of the firewall rule to create.
		 * Required
		 */
		name: string;

		/**
		 * The firewall rule properties to use when creating a new firewall rule.
		 * Required
		 */
		properties: CreateOrUpdateFirewallRuleProperties;
	}

	/** The parameters used to create a new firewall rule while creating a new Data Lake Analytics account. */
	export interface CreateFirewallRuleWithAccountParametersFormProperties {

		/**
		 * The unique name of the firewall rule to create.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFirewallRuleWithAccountParametersFormGroup() {
		return new FormGroup<CreateFirewallRuleWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateDataLakeAnalyticsAccountPropertiesNewTier { Consumption = 0, Commitment_100AUHours = 1, Commitment_500AUHours = 2, Commitment_1000AUHours = 3, Commitment_5000AUHours = 4, Commitment_10000AUHours = 5, Commitment_50000AUHours = 6, Commitment_100000AUHours = 7, Commitment_500000AUHours = 8 }


	/** The parameters used to create a new compute policy. */
	export interface CreateOrUpdateComputePolicyParameters {

		/**
		 * The compute policy properties to use when creating a new compute policy.
		 * Required
		 */
		properties: CreateOrUpdateComputePolicyProperties;
	}

	/** The parameters used to create a new compute policy. */
	export interface CreateOrUpdateComputePolicyParametersFormProperties {
	}
	export function CreateCreateOrUpdateComputePolicyParametersFormGroup() {
		return new FormGroup<CreateOrUpdateComputePolicyParametersFormProperties>({
		});

	}


	/** The compute policy properties to use when creating a new compute policy. */
	export interface CreateOrUpdateComputePolicyProperties {

		/**
		 * The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob?: number | null;

		/**
		 * The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
		 * Minimum: 1
		 */
		minPriorityPerJob?: number | null;

		/**
		 * The AAD object identifier for the entity to create a policy for.
		 * Required
		 */
		objectId: string;

		/**
		 * The type of AAD object the object identifier refers to.
		 * Required
		 */
		objectType: ComputePolicyPropertiesObjectType;
	}

	/** The compute policy properties to use when creating a new compute policy. */
	export interface CreateOrUpdateComputePolicyPropertiesFormProperties {

		/**
		 * The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob: FormControl<number | null | undefined>,

		/**
		 * The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
		 * Minimum: 1
		 */
		minPriorityPerJob: FormControl<number | null | undefined>,

		/**
		 * The AAD object identifier for the entity to create a policy for.
		 * Required
		 */
		objectId: FormControl<string | null | undefined>,

		/**
		 * The type of AAD object the object identifier refers to.
		 * Required
		 */
		objectType: FormControl<ComputePolicyPropertiesObjectType | null | undefined>,
	}
	export function CreateCreateOrUpdateComputePolicyPropertiesFormGroup() {
		return new FormGroup<CreateOrUpdateComputePolicyPropertiesFormProperties>({
			maxDegreeOfParallelismPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			minPriorityPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			objectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			objectType: new FormControl<ComputePolicyPropertiesObjectType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters used to create a new firewall rule. */
	export interface CreateOrUpdateFirewallRuleParameters {

		/**
		 * The firewall rule properties to use when creating a new firewall rule.
		 * Required
		 */
		properties: CreateOrUpdateFirewallRuleProperties;
	}

	/** The parameters used to create a new firewall rule. */
	export interface CreateOrUpdateFirewallRuleParametersFormProperties {
	}
	export function CreateCreateOrUpdateFirewallRuleParametersFormGroup() {
		return new FormGroup<CreateOrUpdateFirewallRuleParametersFormProperties>({
		});

	}


	/** The firewall rule properties to use when creating a new firewall rule. */
	export interface CreateOrUpdateFirewallRuleProperties {

		/**
		 * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
		 * Required
		 */
		endIpAddress: string;

		/**
		 * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
		 * Required
		 */
		startIpAddress: string;
	}

	/** The firewall rule properties to use when creating a new firewall rule. */
	export interface CreateOrUpdateFirewallRulePropertiesFormProperties {

		/**
		 * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
		 * Required
		 */
		endIpAddress: FormControl<string | null | undefined>,

		/**
		 * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
		 * Required
		 */
		startIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrUpdateFirewallRulePropertiesFormGroup() {
		return new FormGroup<CreateOrUpdateFirewallRulePropertiesFormProperties>({
			endIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account. */
	export interface DataLakeAnalyticsAccount extends Resource {

		/** The account specific properties that are associated with an underlying Data Lake Analytics account. Returned only when retrieving a specific account. */
		properties?: DataLakeAnalyticsAccountProperties;
	}

	/** A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account. */
	export interface DataLakeAnalyticsAccountFormProperties extends ResourceFormProperties {
	}
	export function CreateDataLakeAnalyticsAccountFormGroup() {
		return new FormGroup<DataLakeAnalyticsAccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account. */
	export interface DataLakeAnalyticsAccountBasic extends Resource {

		/** The basic account specific properties that are associated with an underlying Data Lake Analytics account. */
		properties?: DataLakeAnalyticsAccountPropertiesBasic;
	}

	/** A Data Lake Analytics account object, containing all information associated with the named Data Lake Analytics account. */
	export interface DataLakeAnalyticsAccountBasicFormProperties extends ResourceFormProperties {
	}
	export function CreateDataLakeAnalyticsAccountBasicFormGroup() {
		return new FormGroup<DataLakeAnalyticsAccountBasicFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Analytics account list information. */
	export interface DataLakeAnalyticsAccountListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<DataLakeAnalyticsAccountBasic>;
	}

	/** Data Lake Analytics account list information. */
	export interface DataLakeAnalyticsAccountListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeAnalyticsAccountListResultFormGroup() {
		return new FormGroup<DataLakeAnalyticsAccountListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The account specific properties that are associated with an underlying Data Lake Analytics account. Returned only when retrieving a specific account. */
	export interface DataLakeAnalyticsAccountProperties extends DataLakeAnalyticsAccountPropertiesBasic {

		/** The list of compute policies associated with this account. */
		computePolicies?: Array<ComputePolicy>;

		/** The commitment tier in use for the current month. */
		currentTier?: CreateDataLakeAnalyticsAccountPropertiesNewTier | null;

		/** The list of Data Lake Store accounts associated with this account. */
		dataLakeStoreAccounts?: Array<DataLakeStoreAccountInformation>;

		/** The default Data Lake Store account associated with this account. */
		defaultDataLakeStoreAccount?: string | null;

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps?: CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null;

		/** The list of firewall rules associated with this account. */
		firewallRules?: Array<FirewallRule>;

		/** The current state of the IP address firewall for this account. */
		firewallState?: CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null;

		/**
		 * The maximum supported degree of parallelism for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelism?: number | null;

		/**
		 * The maximum supported degree of parallelism per job for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob?: number | null;

		/**
		 * The maximum supported jobs running under the account at the same time.
		 * Minimum: 1
		 */
		maxJobCount?: number | null;

		/**
		 * The minimum supported priority per job for this account.
		 * Minimum: 1
		 */
		minPriorityPerJob?: number | null;

		/** The commitment tier for the next month. */
		newTier?: CreateDataLakeAnalyticsAccountPropertiesNewTier | null;

		/**
		 * The number of days that job metadata is retained.
		 * Minimum: 1
		 * Maximum: 180
		 */
		queryStoreRetention?: number | null;

		/** The list of Azure Blob Storage accounts associated with this account. */
		storageAccounts?: Array<StorageAccountInformation>;

		/** The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account. */
		systemMaxDegreeOfParallelism?: number | null;

		/** The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account. */
		systemMaxJobCount?: number | null;
	}

	/** The account specific properties that are associated with an underlying Data Lake Analytics account. Returned only when retrieving a specific account. */
	export interface DataLakeAnalyticsAccountPropertiesFormProperties extends DataLakeAnalyticsAccountPropertiesBasicFormProperties {

		/** The commitment tier in use for the current month. */
		currentTier: FormControl<CreateDataLakeAnalyticsAccountPropertiesNewTier | null | undefined>,

		/** The default Data Lake Store account associated with this account. */
		defaultDataLakeStoreAccount: FormControl<string | null | undefined>,

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps: FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>,

		/** The current state of the IP address firewall for this account. */
		firewallState: FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>,

		/**
		 * The maximum supported degree of parallelism for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelism: FormControl<number | null | undefined>,

		/**
		 * The maximum supported degree of parallelism per job for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob: FormControl<number | null | undefined>,

		/**
		 * The maximum supported jobs running under the account at the same time.
		 * Minimum: 1
		 */
		maxJobCount: FormControl<number | null | undefined>,

		/**
		 * The minimum supported priority per job for this account.
		 * Minimum: 1
		 */
		minPriorityPerJob: FormControl<number | null | undefined>,

		/** The commitment tier for the next month. */
		newTier: FormControl<CreateDataLakeAnalyticsAccountPropertiesNewTier | null | undefined>,

		/**
		 * The number of days that job metadata is retained.
		 * Minimum: 1
		 * Maximum: 180
		 */
		queryStoreRetention: FormControl<number | null | undefined>,

		/** The system defined maximum supported degree of parallelism for this account, which restricts the maximum value of parallelism the user can set for the account. */
		systemMaxDegreeOfParallelism: FormControl<number | null | undefined>,

		/** The system defined maximum supported jobs running under the account at the same time, which restricts the maximum number of running jobs the user can set for the account. */
		systemMaxJobCount: FormControl<number | null | undefined>,
	}
	export function CreateDataLakeAnalyticsAccountPropertiesFormGroup() {
		return new FormGroup<DataLakeAnalyticsAccountPropertiesFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<DataLakeAnalyticsAccountPropertiesBasicProvisioningState | null | undefined>(undefined),
			state: new FormControl<DataLakeAnalyticsAccountPropertiesBasicState | null | undefined>(undefined),
			currentTier: new FormControl<CreateDataLakeAnalyticsAccountPropertiesNewTier | null | undefined>(undefined),
			defaultDataLakeStoreAccount: new FormControl<string | null | undefined>(undefined),
			firewallAllowAzureIps: new FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>(undefined),
			firewallState: new FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>(undefined),
			maxDegreeOfParallelism: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			maxDegreeOfParallelismPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			maxJobCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			minPriorityPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			newTier: new FormControl<CreateDataLakeAnalyticsAccountPropertiesNewTier | null | undefined>(undefined),
			queryStoreRetention: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(180)]),
			systemMaxDegreeOfParallelism: new FormControl<number | null | undefined>(undefined),
			systemMaxJobCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data Lake Store account information. */
	export interface DataLakeStoreAccountInformation extends SubResource {

		/** The Data Lake Store account properties. */
		properties?: DataLakeStoreAccountInformationProperties;
	}

	/** Data Lake Store account information. */
	export interface DataLakeStoreAccountInformationFormProperties extends SubResourceFormProperties {
	}
	export function CreateDataLakeStoreAccountInformationFormGroup() {
		return new FormGroup<DataLakeStoreAccountInformationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Analytics firewall rule information. */
	export interface FirewallRule extends SubResource {

		/** The firewall rule properties. */
		properties?: FirewallRuleProperties;
	}

	/** Data Lake Analytics firewall rule information. */
	export interface FirewallRuleFormProperties extends SubResourceFormProperties {
	}
	export function CreateFirewallRuleFormGroup() {
		return new FormGroup<FirewallRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Storage account information. */
	export interface StorageAccountInformation extends SubResource {

		/** The Azure Storage account properties. */
		properties?: StorageAccountInformationProperties;
	}

	/** Azure Storage account information. */
	export interface StorageAccountInformationFormProperties extends SubResourceFormProperties {
	}
	export function CreateStorageAccountInformationFormGroup() {
		return new FormGroup<StorageAccountInformationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The basic account specific properties that are associated with an underlying Data Lake Analytics account. */
	export interface DataLakeAnalyticsAccountPropertiesBasic {

		/** The unique identifier associated with this Data Lake Analytics account. */
		accountId?: string | null;

		/** The account creation time. */
		creationTime?: Date | null;

		/** The full CName endpoint for this account. */
		endpoint?: string | null;

		/** The account last modified time. */
		lastModifiedTime?: Date | null;

		/** The provisioning status of the Data Lake Analytics account. */
		provisioningState?: DataLakeAnalyticsAccountPropertiesBasicProvisioningState | null;

		/** The state of the Data Lake Analytics account. */
		state?: DataLakeAnalyticsAccountPropertiesBasicState | null;
	}

	/** The basic account specific properties that are associated with an underlying Data Lake Analytics account. */
	export interface DataLakeAnalyticsAccountPropertiesBasicFormProperties {

		/** The unique identifier associated with this Data Lake Analytics account. */
		accountId: FormControl<string | null | undefined>,

		/** The account creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The full CName endpoint for this account. */
		endpoint: FormControl<string | null | undefined>,

		/** The account last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** The provisioning status of the Data Lake Analytics account. */
		provisioningState: FormControl<DataLakeAnalyticsAccountPropertiesBasicProvisioningState | null | undefined>,

		/** The state of the Data Lake Analytics account. */
		state: FormControl<DataLakeAnalyticsAccountPropertiesBasicState | null | undefined>,
	}
	export function CreateDataLakeAnalyticsAccountPropertiesBasicFormGroup() {
		return new FormGroup<DataLakeAnalyticsAccountPropertiesBasicFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<DataLakeAnalyticsAccountPropertiesBasicProvisioningState | null | undefined>(undefined),
			state: new FormControl<DataLakeAnalyticsAccountPropertiesBasicState | null | undefined>(undefined),
		});

	}

	export enum DataLakeAnalyticsAccountPropertiesBasicProvisioningState { Failed = 0, Creating = 1, Running = 2, Succeeded = 3, Patching = 4, Suspending = 5, Resuming = 6, Deleting = 7, Deleted = 8, Undeleting = 9, Canceled = 10 }

	export enum DataLakeAnalyticsAccountPropertiesBasicState { Active = 0, Suspended = 1 }


	/** Data Lake Store account list information. */
	export interface DataLakeStoreAccountInformationListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<DataLakeStoreAccountInformation>;
	}

	/** Data Lake Store account list information. */
	export interface DataLakeStoreAccountInformationListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeStoreAccountInformationListResultFormGroup() {
		return new FormGroup<DataLakeStoreAccountInformationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Data Lake Store account properties. */
	export interface DataLakeStoreAccountInformationProperties {

		/** The optional suffix for the Data Lake Store account. */
		suffix?: string | null;
	}

	/** The Data Lake Store account properties. */
	export interface DataLakeStoreAccountInformationPropertiesFormProperties {

		/** The optional suffix for the Data Lake Store account. */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeStoreAccountInformationPropertiesFormGroup() {
		return new FormGroup<DataLakeStoreAccountInformationPropertiesFormProperties>({
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Analytics firewall rule list information. */
	export interface FirewallRuleListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<FirewallRule>;
	}

	/** Data Lake Analytics firewall rule list information. */
	export interface FirewallRuleListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFirewallRuleListResultFormGroup() {
		return new FormGroup<FirewallRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The firewall rule properties. */
	export interface FirewallRuleProperties {

		/** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
		endIpAddress?: string | null;

		/** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
		startIpAddress?: string | null;
	}

	/** The firewall rule properties. */
	export interface FirewallRulePropertiesFormProperties {

		/** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
		endIpAddress: FormControl<string | null | undefined>,

		/** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
		startIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateFirewallRulePropertiesFormGroup() {
		return new FormGroup<FirewallRulePropertiesFormProperties>({
			endIpAddress: new FormControl<string | null | undefined>(undefined),
			startIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Analytics account name availability result information. */
	export interface NameAvailabilityInformation {

		/** The message describing why the Data Lake Analytics account name is not available, if nameAvailable is false. */
		message?: string | null;

		/** The Boolean value of true or false to indicate whether the Data Lake Analytics account name is available or not. */
		nameAvailable?: boolean | null;

		/** The reason why the Data Lake Analytics account name is not available, if nameAvailable is false. */
		reason?: string | null;
	}

	/** Data Lake Analytics account name availability result information. */
	export interface NameAvailabilityInformationFormProperties {

		/** The message describing why the Data Lake Analytics account name is not available, if nameAvailable is false. */
		message: FormControl<string | null | undefined>,

		/** The Boolean value of true or false to indicate whether the Data Lake Analytics account name is available or not. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason why the Data Lake Analytics account name is not available, if nameAvailable is false. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateNameAvailabilityInformationFormGroup() {
		return new FormGroup<NameAvailabilityInformationFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An available operation for Data Lake Analytics. */
	export interface Operation {

		/** The display information for a particular operation. */
		display?: OperationDisplay;

		/** The name of the operation. */
		name?: string | null;

		/** The intended executor of the operation. */
		origin?: OperationOrigin | null;
	}

	/** An available operation for Data Lake Analytics. */
	export interface OperationFormProperties {

		/** The name of the operation. */
		name: FormControl<string | null | undefined>,

		/** The intended executor of the operation. */
		origin: FormControl<OperationOrigin | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<OperationOrigin | null | undefined>(undefined),
		});

	}

	export enum OperationOrigin { user = 0, system = 1, 'user,system' = 2 }


	/** The display information for a particular operation. */
	export interface OperationDisplay {

		/** A friendly description of the operation. */
		description?: string | null;

		/** A friendly name of the operation. */
		operation?: string | null;

		/** The resource provider of the operation. */
		provider?: string | null;

		/** The resource type of the operation. */
		resource?: string | null;
	}

	/** The display information for a particular operation. */
	export interface OperationDisplayFormProperties {

		/** A friendly description of the operation. */
		description: FormControl<string | null | undefined>,

		/** A friendly name of the operation. */
		operation: FormControl<string | null | undefined>,

		/** The resource provider of the operation. */
		provider: FormControl<string | null | undefined>,

		/** The resource type of the operation. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of available operations for Data Lake Analytics. */
	export interface OperationListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<Operation>;
	}

	/** The list of available operations for Data Lake Analytics. */
	export interface OperationListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition. */
	export interface Resource {

		/** The resource identifer. */
		id?: string | null;

		/** The resource location. */
		location?: string | null;

		/** The resource name. */
		name?: string | null;

		/** The resource tags. */
		tags?: {[id: string]: string };

		/** The resource type. */
		type?: string | null;
	}

	/** The resource model definition. */
	export interface ResourceFormProperties {

		/** The resource identifer. */
		id: FormControl<string | null | undefined>,

		/** The resource location. */
		location: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SAS token information. */
	export interface SasTokenInformation {

		/** The access token for the associated Azure Storage Container. */
		accessToken?: string | null;
	}

	/** SAS token information. */
	export interface SasTokenInformationFormProperties {

		/** The access token for the associated Azure Storage Container. */
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateSasTokenInformationFormGroup() {
		return new FormGroup<SasTokenInformationFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SAS response that contains the storage account, container and associated SAS token for connection use. */
	export interface SasTokenInformationListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<SasTokenInformation>;
	}

	/** The SAS response that contains the storage account, container and associated SAS token for connection use. */
	export interface SasTokenInformationListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSasTokenInformationListResultFormGroup() {
		return new FormGroup<SasTokenInformationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Storage account list information. */
	export interface StorageAccountInformationListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<StorageAccountInformation>;
	}

	/** Azure Storage account list information. */
	export interface StorageAccountInformationListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountInformationListResultFormGroup() {
		return new FormGroup<StorageAccountInformationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure Storage account properties. */
	export interface StorageAccountInformationProperties {

		/** The optional suffix for the storage account. */
		suffix?: string | null;
	}

	/** The Azure Storage account properties. */
	export interface StorageAccountInformationPropertiesFormProperties {

		/** The optional suffix for the storage account. */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountInformationPropertiesFormGroup() {
		return new FormGroup<StorageAccountInformationPropertiesFormProperties>({
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Storage blob container information. */
	export interface StorageContainer extends SubResource {

		/** Azure Storage blob container properties information. */
		properties?: StorageContainerProperties;
	}

	/** Azure Storage blob container information. */
	export interface StorageContainerFormProperties extends SubResourceFormProperties {
	}
	export function CreateStorageContainerFormGroup() {
		return new FormGroup<StorageContainerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of blob containers associated with the storage account attached to the Data Lake Analytics account. */
	export interface StorageContainerListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<StorageContainer>;
	}

	/** The list of blob containers associated with the storage account attached to the Data Lake Analytics account. */
	export interface StorageContainerListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStorageContainerListResultFormGroup() {
		return new FormGroup<StorageContainerListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Storage blob container properties information. */
	export interface StorageContainerProperties {

		/** The last modified time of the blob container. */
		lastModifiedTime?: Date | null;
	}

	/** Azure Storage blob container properties information. */
	export interface StorageContainerPropertiesFormProperties {

		/** The last modified time of the blob container. */
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateStorageContainerPropertiesFormGroup() {
		return new FormGroup<StorageContainerPropertiesFormProperties>({
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a nested resource. */
	export interface SubResource {

		/** The resource identifier. */
		id?: string | null;

		/** The resource name. */
		name?: string | null;

		/** The resource type. */
		type?: string | null;
	}

	/** The resource model definition for a nested resource. */
	export interface SubResourceFormProperties {

		/** The resource identifier. */
		id: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to update a compute policy. */
	export interface UpdateComputePolicyParameters {

		/** The compute policy properties to use when updating a compute policy. */
		properties?: UpdateComputePolicyProperties;
	}

	/** The parameters used to update a compute policy. */
	export interface UpdateComputePolicyParametersFormProperties {
	}
	export function CreateUpdateComputePolicyParametersFormGroup() {
		return new FormGroup<UpdateComputePolicyParametersFormProperties>({
		});

	}


	/** The compute policy properties to use when updating a compute policy. */
	export interface UpdateComputePolicyProperties {

		/**
		 * The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob?: number | null;

		/**
		 * The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
		 * Minimum: 1
		 */
		minPriorityPerJob?: number | null;

		/** The AAD object identifier for the entity to create a policy for. */
		objectId?: string | null;

		/** The type of AAD object the object identifier refers to. */
		objectType?: ComputePolicyPropertiesObjectType | null;
	}

	/** The compute policy properties to use when updating a compute policy. */
	export interface UpdateComputePolicyPropertiesFormProperties {

		/**
		 * The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob: FormControl<number | null | undefined>,

		/**
		 * The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
		 * Minimum: 1
		 */
		minPriorityPerJob: FormControl<number | null | undefined>,

		/** The AAD object identifier for the entity to create a policy for. */
		objectId: FormControl<string | null | undefined>,

		/** The type of AAD object the object identifier refers to. */
		objectType: FormControl<ComputePolicyPropertiesObjectType | null | undefined>,
	}
	export function CreateUpdateComputePolicyPropertiesFormGroup() {
		return new FormGroup<UpdateComputePolicyPropertiesFormProperties>({
			maxDegreeOfParallelismPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			minPriorityPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			objectId: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<ComputePolicyPropertiesObjectType | null | undefined>(undefined),
		});

	}


	/** The parameters used to update a compute policy while updating a Data Lake Analytics account. */
	export interface UpdateComputePolicyWithAccountParameters {

		/**
		 * The unique name of the compute policy to update.
		 * Required
		 */
		name: string;

		/** The compute policy properties to use when updating a compute policy. */
		properties?: UpdateComputePolicyProperties;
	}

	/** The parameters used to update a compute policy while updating a Data Lake Analytics account. */
	export interface UpdateComputePolicyWithAccountParametersFormProperties {

		/**
		 * The unique name of the compute policy to update.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComputePolicyWithAccountParametersFormGroup() {
		return new FormGroup<UpdateComputePolicyWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters that can be used to update an existing Data Lake Analytics account. */
	export interface UpdateDataLakeAnalyticsAccountParameters {

		/** The properties to update that are associated with an underlying Data Lake Analytics account. */
		properties?: UpdateDataLakeAnalyticsAccountProperties;

		/** The resource tags. */
		tags?: {[id: string]: string };
	}

	/** The parameters that can be used to update an existing Data Lake Analytics account. */
	export interface UpdateDataLakeAnalyticsAccountParametersFormProperties {

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateDataLakeAnalyticsAccountParametersFormGroup() {
		return new FormGroup<UpdateDataLakeAnalyticsAccountParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The properties to update that are associated with an underlying Data Lake Analytics account. */
	export interface UpdateDataLakeAnalyticsAccountProperties {

		/** The list of compute policies associated with this account. */
		computePolicies?: Array<UpdateComputePolicyWithAccountParameters>;

		/** The list of Data Lake Store accounts associated with this account. */
		dataLakeStoreAccounts?: Array<UpdateDataLakeStoreWithAccountParameters>;

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps?: CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null;

		/** The list of firewall rules associated with this account. */
		firewallRules?: Array<UpdateFirewallRuleWithAccountParameters>;

		/** The current state of the IP address firewall for this account. Disabling the firewall does not remove existing rules, they will just be ignored until the firewall is re-enabled. */
		firewallState?: CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null;

		/**
		 * The maximum supported degree of parallelism for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelism?: number | null;

		/**
		 * The maximum supported degree of parallelism per job for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob?: number | null;

		/**
		 * The maximum supported jobs running under the account at the same time.
		 * Minimum: 1
		 */
		maxJobCount?: number | null;

		/**
		 * The minimum supported priority per job for this account.
		 * Minimum: 1
		 */
		minPriorityPerJob?: number | null;

		/** The commitment tier to use for next month. */
		newTier?: CreateDataLakeAnalyticsAccountPropertiesNewTier | null;

		/**
		 * The number of days that job metadata is retained.
		 * Minimum: 1
		 * Maximum: 180
		 */
		queryStoreRetention?: number | null;

		/** The list of Azure Blob storage accounts associated with this account. */
		storageAccounts?: Array<UpdateStorageAccountWithAccountParameters>;
	}

	/** The properties to update that are associated with an underlying Data Lake Analytics account. */
	export interface UpdateDataLakeAnalyticsAccountPropertiesFormProperties {

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps: FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>,

		/** The current state of the IP address firewall for this account. Disabling the firewall does not remove existing rules, they will just be ignored until the firewall is re-enabled. */
		firewallState: FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>,

		/**
		 * The maximum supported degree of parallelism for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelism: FormControl<number | null | undefined>,

		/**
		 * The maximum supported degree of parallelism per job for this account.
		 * Minimum: 1
		 */
		maxDegreeOfParallelismPerJob: FormControl<number | null | undefined>,

		/**
		 * The maximum supported jobs running under the account at the same time.
		 * Minimum: 1
		 */
		maxJobCount: FormControl<number | null | undefined>,

		/**
		 * The minimum supported priority per job for this account.
		 * Minimum: 1
		 */
		minPriorityPerJob: FormControl<number | null | undefined>,

		/** The commitment tier to use for next month. */
		newTier: FormControl<CreateDataLakeAnalyticsAccountPropertiesNewTier | null | undefined>,

		/**
		 * The number of days that job metadata is retained.
		 * Minimum: 1
		 * Maximum: 180
		 */
		queryStoreRetention: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataLakeAnalyticsAccountPropertiesFormGroup() {
		return new FormGroup<UpdateDataLakeAnalyticsAccountPropertiesFormProperties>({
			firewallAllowAzureIps: new FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>(undefined),
			firewallState: new FormControl<CreateDataLakeAnalyticsAccountPropertiesFirewallAllowAzureIps | null | undefined>(undefined),
			maxDegreeOfParallelism: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			maxDegreeOfParallelismPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			maxJobCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			minPriorityPerJob: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			newTier: new FormControl<CreateDataLakeAnalyticsAccountPropertiesNewTier | null | undefined>(undefined),
			queryStoreRetention: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(180)]),
		});

	}


	/** The parameters used to update a Data Lake Store account while updating a Data Lake Analytics account. */
	export interface UpdateDataLakeStoreWithAccountParameters {

		/**
		 * The unique name of the Data Lake Store account to update.
		 * Required
		 */
		name: string;

		/** The Data Lake Store account properties to use when updating a Data Lake Store account. */
		properties?: UpdateDataLakeStoreProperties;
	}

	/** The parameters used to update a Data Lake Store account while updating a Data Lake Analytics account. */
	export interface UpdateDataLakeStoreWithAccountParametersFormProperties {

		/**
		 * The unique name of the Data Lake Store account to update.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataLakeStoreWithAccountParametersFormGroup() {
		return new FormGroup<UpdateDataLakeStoreWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters used to update a firewall rule while updating a Data Lake Analytics account. */
	export interface UpdateFirewallRuleWithAccountParameters {

		/**
		 * The unique name of the firewall rule to update.
		 * Required
		 */
		name: string;

		/** The firewall rule properties to use when updating a firewall rule. */
		properties?: UpdateFirewallRuleProperties;
	}

	/** The parameters used to update a firewall rule while updating a Data Lake Analytics account. */
	export interface UpdateFirewallRuleWithAccountParametersFormProperties {

		/**
		 * The unique name of the firewall rule to update.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallRuleWithAccountParametersFormGroup() {
		return new FormGroup<UpdateFirewallRuleWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters used to update an Azure Storage account while updating a Data Lake Analytics account. */
	export interface UpdateStorageAccountWithAccountParameters {

		/**
		 * The unique name of the Azure Storage account to update.
		 * Required
		 */
		name: string;

		/** The Azure Storage account properties to use when updating an Azure Storage account. */
		properties?: UpdateStorageAccountProperties;
	}

	/** The parameters used to update an Azure Storage account while updating a Data Lake Analytics account. */
	export interface UpdateStorageAccountWithAccountParametersFormProperties {

		/**
		 * The unique name of the Azure Storage account to update.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStorageAccountWithAccountParametersFormGroup() {
		return new FormGroup<UpdateStorageAccountWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Data Lake Store account properties to use when updating a Data Lake Store account. */
	export interface UpdateDataLakeStoreProperties {

		/** The optional suffix for the Data Lake Store account. */
		suffix?: string | null;
	}

	/** The Data Lake Store account properties to use when updating a Data Lake Store account. */
	export interface UpdateDataLakeStorePropertiesFormProperties {

		/** The optional suffix for the Data Lake Store account. */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataLakeStorePropertiesFormGroup() {
		return new FormGroup<UpdateDataLakeStorePropertiesFormProperties>({
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to update a firewall rule. */
	export interface UpdateFirewallRuleParameters {

		/** The firewall rule properties to use when updating a firewall rule. */
		properties?: UpdateFirewallRuleProperties;
	}

	/** The parameters used to update a firewall rule. */
	export interface UpdateFirewallRuleParametersFormProperties {
	}
	export function CreateUpdateFirewallRuleParametersFormGroup() {
		return new FormGroup<UpdateFirewallRuleParametersFormProperties>({
		});

	}


	/** The firewall rule properties to use when updating a firewall rule. */
	export interface UpdateFirewallRuleProperties {

		/** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
		endIpAddress?: string | null;

		/** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
		startIpAddress?: string | null;
	}

	/** The firewall rule properties to use when updating a firewall rule. */
	export interface UpdateFirewallRulePropertiesFormProperties {

		/** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
		endIpAddress: FormControl<string | null | undefined>,

		/** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
		startIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFirewallRulePropertiesFormGroup() {
		return new FormGroup<UpdateFirewallRulePropertiesFormProperties>({
			endIpAddress: new FormControl<string | null | undefined>(undefined),
			startIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to update an Azure Storage account. */
	export interface UpdateStorageAccountParameters {

		/** The Azure Storage account properties to use when updating an Azure Storage account. */
		properties?: UpdateStorageAccountProperties;
	}

	/** The parameters used to update an Azure Storage account. */
	export interface UpdateStorageAccountParametersFormProperties {
	}
	export function CreateUpdateStorageAccountParametersFormGroup() {
		return new FormGroup<UpdateStorageAccountParametersFormProperties>({
		});

	}


	/** The Azure Storage account properties to use when updating an Azure Storage account. */
	export interface UpdateStorageAccountProperties {

		/** The updated access key associated with this Azure Storage account that will be used to connect to it. */
		accessKey?: string | null;

		/** The optional suffix for the storage account. */
		suffix?: string | null;
	}

	/** The Azure Storage account properties to use when updating an Azure Storage account. */
	export interface UpdateStorageAccountPropertiesFormProperties {

		/** The updated access key associated with this Azure Storage account that will be used to connect to it. */
		accessKey: FormControl<string | null | undefined>,

		/** The optional suffix for the storage account. */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStorageAccountPropertiesFormGroup() {
		return new FormGroup<UpdateStorageAccountPropertiesFormProperties>({
			accessKey: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Data Lake Analytics REST API operations.
		 * Get providers/Microsoft.DataLakeAnalytics/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} Successfully listed the available operations for Data Lake Analytics.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.DataLakeAnalytics/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the first page of Data Lake Analytics accounts, if any, within the current subscription. This includes a link to the next page, if any.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DataLakeAnalytics/accounts
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {DataLakeAnalyticsAccountListResult} Successfully retrieved the list of Azure Data Lake Analytics accounts.
		 */
		Accounts_List(subscriptionId: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<DataLakeAnalyticsAccountListResult> {
			return this.http.get<DataLakeAnalyticsAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataLakeAnalytics/accounts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets subscription-level properties and limits for Data Lake Analytics specified by resource location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DataLakeAnalytics/locations/{location}/capability
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The resource location without whitespace.
		 * @param {string} api_version Client Api Version.
		 * @return {CapabilityInformation} Successfully retrieved the subscription-level properties and limits for Data Lake Analytics specified by resource location.
		 */
		Locations_GetCapability(subscriptionId: string, location: string, api_version: string): Observable<CapabilityInformation> {
			return this.http.get<CapabilityInformation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataLakeAnalytics/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/capability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks whether the specified account name is available or taken.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DataLakeAnalytics/locations/{location}/checkNameAvailability
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The resource location without whitespace.
		 * @param {string} api_version Client Api Version.
		 * @param {CheckNameAvailabilityParameters} requestBody Parameters supplied to check the Data Lake Analytics account name availability.
		 * @return {NameAvailabilityInformation} Successfully retrieved the Data Lake Analytics account name availability information.
		 */
		Accounts_CheckNameAvailability(subscriptionId: string, location: string, api_version: string, requestBody: CheckNameAvailabilityParameters): Observable<NameAvailabilityInformation> {
			return this.http.post<NameAvailabilityInformation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataLakeAnalytics/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the first page of Data Lake Analytics accounts, if any, within a specific resource group. This includes a link to the next page, if any.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {DataLakeAnalyticsAccountListResult} Successfully retrieved the list of accounts in the specified resource group.
		 */
		Accounts_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<DataLakeAnalyticsAccountListResult> {
			return this.http.get<DataLakeAnalyticsAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets details of the specified Data Lake Analytics account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} api_version Client Api Version.
		 * @return {DataLakeAnalyticsAccount} Successfully retrieved the details of the specified account.
		 */
		Accounts_Get(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<DataLakeAnalyticsAccount> {
			return this.http.get<DataLakeAnalyticsAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates the specified Data Lake Analytics account. This supplies the user with computation services for Data Lake Analytics workloads.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} api_version Client Api Version.
		 * @param {CreateDataLakeAnalyticsAccountParameters} requestBody Parameters supplied to create a new Data Lake Analytics account.
		 * @return {DataLakeAnalyticsAccount} Successfully created the specified account.
		 */
		Accounts_Create(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: CreateDataLakeAnalyticsAccountParameters): Observable<DataLakeAnalyticsAccount> {
			return this.http.put<DataLakeAnalyticsAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins the delete process for the Data Lake Analytics account object specified by the account name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted the specified account.
		 */
		Accounts_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the Data Lake Analytics account object specified by the accountName with the contents of the account object.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} api_version Client Api Version.
		 * @param {UpdateDataLakeAnalyticsAccountParameters} requestBody Parameters supplied to the update Data Lake Analytics account operation.
		 * @return {DataLakeAnalyticsAccount} Successfully updated the specified account.
		 */
		Accounts_Update(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: UpdateDataLakeAnalyticsAccountParameters): Observable<DataLakeAnalyticsAccount> {
			return this.http.patch<DataLakeAnalyticsAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Data Lake Analytics compute policies within the specified Data Lake Analytics account. An account supports, at most, 50 policies
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} api_version Client Api Version.
		 * @return {ComputePolicyListResult} Successfully listed the compute policies.
		 */
		ComputePolicies_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<ComputePolicyListResult> {
			return this.http.get<ComputePolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/computePolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Data Lake Analytics compute policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} computePolicyName The name of the compute policy to retrieve.
		 * @param {string} api_version Client Api Version.
		 * @return {ComputePolicy} Successfully retrieved the specified compute policy.
		 */
		ComputePolicies_Get(subscriptionId: string, resourceGroupName: string, accountName: string, computePolicyName: string, api_version: string): Observable<ComputePolicy> {
			return this.http.get<ComputePolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/computePolicies/' + (computePolicyName == null ? '' : encodeURIComponent(computePolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the specified compute policy. During update, the compute policy with the specified name will be replaced with this new compute policy. An account supports, at most, 50 policies
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} computePolicyName The name of the compute policy to create or update.
		 * @param {string} api_version Client Api Version.
		 * @param {CreateOrUpdateComputePolicyParameters} requestBody Parameters supplied to create or update the compute policy. The max degree of parallelism per job property, min priority per job property, or both must be present.
		 * @return {ComputePolicy} Successfully created or updated the specified compute policy
		 */
		ComputePolicies_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, computePolicyName: string, api_version: string, requestBody: CreateOrUpdateComputePolicyParameters): Observable<ComputePolicy> {
			return this.http.put<ComputePolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/computePolicies/' + (computePolicyName == null ? '' : encodeURIComponent(computePolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified compute policy from the specified Data Lake Analytics account
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} computePolicyName The name of the compute policy to delete.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted the specified compute policy
		 */
		ComputePolicies_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, computePolicyName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/computePolicies/' + (computePolicyName == null ? '' : encodeURIComponent(computePolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified compute policy.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/computePolicies/{computePolicyName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} computePolicyName The name of the compute policy to update.
		 * @param {string} api_version Client Api Version.
		 * @param {UpdateComputePolicyParameters} requestBody Parameters supplied to update the compute policy.
		 * @return {ComputePolicy} Successfully updated the specified compute policy
		 */
		ComputePolicies_Update(subscriptionId: string, resourceGroupName: string, accountName: string, computePolicyName: string, api_version: string, requestBody: UpdateComputePolicyParameters): Observable<ComputePolicy> {
			return this.http.patch<ComputePolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/computePolicies/' + (computePolicyName == null ? '' : encodeURIComponent(computePolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {DataLakeStoreAccountInformationListResult} Successfully retrieved the list of Data Lake Store accounts.
		 */
		DataLakeStoreAccounts_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<DataLakeStoreAccountInformationListResult> {
			return this.http.get<DataLakeStoreAccountInformationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/dataLakeStoreAccounts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Data Lake Store account details in the specified Data Lake Analytics account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} dataLakeStoreAccountName The name of the Data Lake Store account to retrieve
		 * @param {string} api_version Client Api Version.
		 * @return {DataLakeStoreAccountInformation} Successfully retrieved the specified Azure Data Lake Store account information.
		 */
		DataLakeStoreAccounts_Get(subscriptionId: string, resourceGroupName: string, accountName: string, dataLakeStoreAccountName: string, api_version: string): Observable<DataLakeStoreAccountInformation> {
			return this.http.get<DataLakeStoreAccountInformation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/dataLakeStoreAccounts/' + (dataLakeStoreAccountName == null ? '' : encodeURIComponent(dataLakeStoreAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the specified Data Lake Analytics account to include the additional Data Lake Store account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} dataLakeStoreAccountName The name of the Data Lake Store account to add.
		 * @param {string} api_version Client Api Version.
		 * @param {AddDataLakeStoreParameters} requestBody The details of the Data Lake Store account.
		 * @return {void} Successfully added the specified Azure Data Lake Store account information.
		 */
		DataLakeStoreAccounts_Add(subscriptionId: string, resourceGroupName: string, accountName: string, dataLakeStoreAccountName: string, api_version: string, requestBody: AddDataLakeStoreParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/dataLakeStoreAccounts/' + (dataLakeStoreAccountName == null ? '' : encodeURIComponent(dataLakeStoreAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/dataLakeStoreAccounts/{dataLakeStoreAccountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} dataLakeStoreAccountName The name of the Data Lake Store account to remove
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully removed the specified Azure Data Lake Store account information from the specified Azure Data Lake Analytics account.
		 */
		DataLakeStoreAccounts_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, dataLakeStoreAccountName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/dataLakeStoreAccounts/' + (dataLakeStoreAccountName == null ? '' : encodeURIComponent(dataLakeStoreAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Data Lake Analytics firewall rules within the specified Data Lake Analytics account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} api_version Client Api Version.
		 * @return {FirewallRuleListResult} Successfully listed the firewall rules.
		 */
		FirewallRules_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<FirewallRuleListResult> {
			return this.http.get<FirewallRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Data Lake Analytics firewall rule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} firewallRuleName The name of the firewall rule to retrieve.
		 * @param {string} api_version Client Api Version.
		 * @return {FirewallRule} Successfully retrieved the specified firewall rule.
		 */
		FirewallRules_Get(subscriptionId: string, resourceGroupName: string, accountName: string, firewallRuleName: string, api_version: string): Observable<FirewallRule> {
			return this.http.get<FirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the specified firewall rule. During update, the firewall rule with the specified name will be replaced with this new firewall rule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} firewallRuleName The name of the firewall rule to create or update.
		 * @param {string} api_version Client Api Version.
		 * @param {CreateOrUpdateFirewallRuleParameters} requestBody Parameters supplied to create or update the firewall rule.
		 * @return {FirewallRule} Successfully created or updated the specified firewall rule
		 */
		FirewallRules_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, firewallRuleName: string, api_version: string, requestBody: CreateOrUpdateFirewallRuleParameters): Observable<FirewallRule> {
			return this.http.put<FirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified firewall rule from the specified Data Lake Analytics account
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} firewallRuleName The name of the firewall rule to delete.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted the specified firewall rule
		 */
		FirewallRules_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, firewallRuleName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified firewall rule.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} firewallRuleName The name of the firewall rule to update.
		 * @param {string} api_version Client Api Version.
		 * @param {UpdateFirewallRuleParameters} requestBody Parameters supplied to update the firewall rule.
		 * @return {FirewallRule} Successfully updated the specified firewall rule
		 */
		FirewallRules_Update(subscriptionId: string, resourceGroupName: string, accountName: string, firewallRuleName: string, api_version: string, requestBody: UpdateFirewallRuleParameters): Observable<FirewallRule> {
			return this.http.patch<FirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} filter The OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {StorageAccountInformationListResult} Successfully retrieved the list of Azure Storage accounts.
		 */
		StorageAccounts_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<StorageAccountInformationListResult> {
			return this.http.get<StorageAccountInformationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/storageAccounts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Azure Storage account linked to the given Data Lake Analytics account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} storageAccountName The name of the Azure Storage account for which to retrieve the details.
		 * @param {string} api_version Client Api Version.
		 * @return {StorageAccountInformation} Successfully retrieved the specified Azure Storage account information.
		 */
		StorageAccounts_Get(subscriptionId: string, resourceGroupName: string, accountName: string, storageAccountName: string, api_version: string): Observable<StorageAccountInformation> {
			return this.http.get<StorageAccountInformation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/storageAccounts/' + (storageAccountName == null ? '' : encodeURIComponent(storageAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates the specified Data Lake Analytics account to add an Azure Storage account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} storageAccountName The name of the Azure Storage account to add
		 * @param {string} api_version Client Api Version.
		 * @param {AddStorageAccountParameters} requestBody The parameters containing the access key and optional suffix for the Azure Storage Account.
		 * @return {void} Successfully added the specified Azure Storage account information to the specified Azure Data Lake Analytics account.
		 */
		StorageAccounts_Add(subscriptionId: string, resourceGroupName: string, accountName: string, storageAccountName: string, api_version: string, requestBody: AddStorageAccountParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/storageAccounts/' + (storageAccountName == null ? '' : encodeURIComponent(storageAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified Data Lake Analytics account to remove an Azure Storage account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} storageAccountName The name of the Azure Storage account to remove
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted the specified Azure Storage account information from the Azure Data Lake Analytics account.
		 */
		StorageAccounts_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, storageAccountName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/storageAccounts/' + (storageAccountName == null ? '' : encodeURIComponent(storageAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the Data Lake Analytics account to replace Azure Storage blob account details, such as the access key and/or suffix.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} storageAccountName The Azure Storage account to modify
		 * @param {string} api_version Client Api Version.
		 * @param {UpdateStorageAccountParameters} requestBody The parameters containing the access key and suffix to update the storage account with, if any. Passing nothing results in no change.
		 * @return {void} Successfully update the specified Azure Storage account information for the specified Azure Data Lake Analytics account.
		 */
		StorageAccounts_Update(subscriptionId: string, resourceGroupName: string, accountName: string, storageAccountName: string, api_version: string, requestBody: UpdateStorageAccountParameters): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/storageAccounts/' + (storageAccountName == null ? '' : encodeURIComponent(storageAccountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Azure Storage containers, if any, associated with the specified Data Lake Analytics and Azure Storage account combination. The response includes a link to the next page of results, if any.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}/containers
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} storageAccountName The name of the Azure storage account from which to list blob containers.
		 * @param {string} api_version Client Api Version.
		 * @return {StorageContainerListResult} Successfully retrieved the list of Azure Storage containers under the specified Azure Data Lake Analytics account.
		 */
		StorageAccounts_ListStorageContainers(subscriptionId: string, resourceGroupName: string, accountName: string, storageAccountName: string, api_version: string): Observable<StorageContainerListResult> {
			return this.http.get<StorageContainerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/storageAccounts/' + (storageAccountName == null ? '' : encodeURIComponent(storageAccountName)) + '/containers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Azure Storage container associated with the given Data Lake Analytics and Azure Storage accounts.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}/containers/{containerName}
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} storageAccountName The name of the Azure storage account from which to retrieve the blob container.
		 * @param {string} containerName The name of the Azure storage container to retrieve
		 * @param {string} api_version Client Api Version.
		 * @return {StorageContainer} Successfully retrieved the specified Azure Storage container information.
		 */
		StorageAccounts_GetStorageContainer(subscriptionId: string, resourceGroupName: string, accountName: string, storageAccountName: string, containerName: string, api_version: string): Observable<StorageContainer> {
			return this.http.get<StorageContainer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/storageAccounts/' + (storageAccountName == null ? '' : encodeURIComponent(storageAccountName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the SAS token associated with the specified Data Lake Analytics and Azure Storage account and container combination.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/storageAccounts/{storageAccountName}/containers/{containerName}/listSasTokens
		 * @param {string} subscriptionId Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Analytics account.
		 * @param {string} storageAccountName The name of the Azure storage account for which the SAS token is being requested.
		 * @param {string} containerName The name of the Azure storage container for which the SAS token is being requested.
		 * @param {string} api_version Client Api Version.
		 * @return {SasTokenInformationListResult} Successfully retrieved the list of Storage Account SAS tokens for the specified Azure Storage account container.
		 */
		StorageAccounts_ListSasTokens(subscriptionId: string, resourceGroupName: string, accountName: string, storageAccountName: string, containerName: string, api_version: string): Observable<SasTokenInformationListResult> {
			return this.http.post<SasTokenInformationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeAnalytics/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/storageAccounts/' + (storageAccountName == null ? '' : encodeURIComponent(storageAccountName)) + '/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/listSasTokens&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

