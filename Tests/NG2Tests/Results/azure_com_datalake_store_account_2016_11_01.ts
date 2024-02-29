import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Subscription-level properties and limits for Data Lake Store. */
	export interface CapabilityInformation {

		/**
		 * The current number of accounts under this subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountCount?: number | null;

		/**
		 * The maximum supported number of accounts under this subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxAccountCount?: number | null;

		/** The Boolean value of true or false to indicate the maintenance state. */
		migrationState?: boolean | null;

		/** The subscription state. */
		state?: CapabilityInformationState | null;

		/** The subscription credentials that uniquely identifies the subscription. */
		subscriptionId?: string | null;
	}

	/** Subscription-level properties and limits for Data Lake Store. */
	export interface CapabilityInformationFormProperties {

		/**
		 * The current number of accounts under this subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountCount: FormControl<number | null | undefined>,

		/**
		 * The maximum supported number of accounts under this subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

	export enum CapabilityInformationState { Registered = 'Registered', Suspended = 'Suspended', Deleted = 'Deleted', Unregistered = 'Unregistered', Warned = 'Warned' }


	/** Data Lake Store account name availability check parameters. */
	export interface CheckNameAvailabilityParameters {

		/**
		 * The Data Lake Store name to check availability for.
		 * Required
		 */
		name: string;

		/**
		 * The resource type. Note: This should not be set by the user, as the constant value is Microsoft.DataLakeStore/accounts
		 * Required
		 */
		type: CheckNameAvailabilityParametersType;
	}

	/** Data Lake Store account name availability check parameters. */
	export interface CheckNameAvailabilityParametersFormProperties {

		/**
		 * The Data Lake Store name to check availability for.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource type. Note: This should not be set by the user, as the constant value is Microsoft.DataLakeStore/accounts
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

	export enum CheckNameAvailabilityParametersType { 'Microsoft.DataLakeStore/accounts' = 'Microsoft.DataLakeStore/accounts' }

	export interface CreateDataLakeStoreAccountParameters {

		/** The encryption identity properties. */
		identity?: EncryptionIdentity;

		/**
		 * The resource location.
		 * Required
		 */
		location: string;
		properties?: CreateDataLakeStoreAccountProperties;

		/** The resource tags. */
		tags?: {[id: string]: string };
	}
	export interface CreateDataLakeStoreAccountParametersFormProperties {

		/**
		 * The resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDataLakeStoreAccountParametersFormGroup() {
		return new FormGroup<CreateDataLakeStoreAccountParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDataLakeStoreAccountProperties {

		/** The default owner group for all new folders and files created in the Data Lake Store account. */
		defaultGroup?: string | null;

		/** The encryption configuration for the account. */
		encryptionConfig?: EncryptionConfig;

		/** The current state of encryption for this Data Lake Store account. */
		encryptionState?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The list of firewall rules associated with this Data Lake Store account. */
		firewallRules?: Array<CreateFirewallRuleWithAccountParameters>;

		/** The current state of the IP address firewall for this Data Lake Store account. */
		firewallState?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The commitment tier to use for next month. */
		newTier?: CreateDataLakeStoreAccountPropertiesNewTier | null;

		/** The current state of the trusted identity provider feature for this Data Lake Store account. */
		trustedIdProviderState?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The list of trusted identity providers associated with this Data Lake Store account. */
		trustedIdProviders?: Array<CreateTrustedIdProviderWithAccountParameters>;

		/** The list of virtual network rules associated with this Data Lake Store account. */
		virtualNetworkRules?: Array<CreateVirtualNetworkRuleWithAccountParameters>;
	}
	export interface CreateDataLakeStoreAccountPropertiesFormProperties {

		/** The default owner group for all new folders and files created in the Data Lake Store account. */
		defaultGroup: FormControl<string | null | undefined>,

		/** The current state of encryption for this Data Lake Store account. */
		encryptionState: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,

		/** The current state of the IP address firewall for this Data Lake Store account. */
		firewallState: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,

		/** The commitment tier to use for next month. */
		newTier: FormControl<CreateDataLakeStoreAccountPropertiesNewTier | null | undefined>,

		/** The current state of the trusted identity provider feature for this Data Lake Store account. */
		trustedIdProviderState: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,
	}
	export function CreateCreateDataLakeStoreAccountPropertiesFormGroup() {
		return new FormGroup<CreateDataLakeStoreAccountPropertiesFormProperties>({
			defaultGroup: new FormControl<string | null | undefined>(undefined),
			encryptionState: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
			firewallAllowAzureIps: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
			firewallState: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
			newTier: new FormControl<CreateDataLakeStoreAccountPropertiesNewTier | null | undefined>(undefined),
			trustedIdProviderState: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
		});

	}

	export enum CreateDataLakeStoreAccountPropertiesEncryptionState { Enabled = 'Enabled', Disabled = 'Disabled' }


	/** The parameters used to create a new firewall rule while creating a new Data Lake Store account. */
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

	/** The parameters used to create a new firewall rule while creating a new Data Lake Store account. */
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

	export enum CreateDataLakeStoreAccountPropertiesNewTier { Consumption = 'Consumption', Commitment_1TB = 'Commitment_1TB', Commitment_10TB = 'Commitment_10TB', Commitment_100TB = 'Commitment_100TB', Commitment_500TB = 'Commitment_500TB', Commitment_1PB = 'Commitment_1PB', Commitment_5PB = 'Commitment_5PB' }


	/** The parameters used to create a new trusted identity provider while creating a new Data Lake Store account. */
	export interface CreateTrustedIdProviderWithAccountParameters {

		/**
		 * The unique name of the trusted identity provider to create.
		 * Required
		 */
		name: string;

		/**
		 * The trusted identity provider properties to use when creating a new trusted identity provider.
		 * Required
		 */
		properties: CreateOrUpdateTrustedIdProviderProperties;
	}

	/** The parameters used to create a new trusted identity provider while creating a new Data Lake Store account. */
	export interface CreateTrustedIdProviderWithAccountParametersFormProperties {

		/**
		 * The unique name of the trusted identity provider to create.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrustedIdProviderWithAccountParametersFormGroup() {
		return new FormGroup<CreateTrustedIdProviderWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters used to create a new virtual network rule while creating a new Data Lake Store account. */
	export interface CreateVirtualNetworkRuleWithAccountParameters {

		/**
		 * The unique name of the virtual network rule to create.
		 * Required
		 */
		name: string;

		/**
		 * The virtual network rule properties to use when creating a new virtual network rule.
		 * Required
		 */
		properties: CreateOrUpdateVirtualNetworkRuleProperties;
	}

	/** The parameters used to create a new virtual network rule while creating a new Data Lake Store account. */
	export interface CreateVirtualNetworkRuleWithAccountParametersFormProperties {

		/**
		 * The unique name of the virtual network rule to create.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateVirtualNetworkRuleWithAccountParametersFormGroup() {
		return new FormGroup<CreateVirtualNetworkRuleWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** The parameters used to create a new trusted identity provider. */
	export interface CreateOrUpdateTrustedIdProviderParameters {

		/**
		 * The trusted identity provider properties to use when creating a new trusted identity provider.
		 * Required
		 */
		properties: CreateOrUpdateTrustedIdProviderProperties;
	}

	/** The parameters used to create a new trusted identity provider. */
	export interface CreateOrUpdateTrustedIdProviderParametersFormProperties {
	}
	export function CreateCreateOrUpdateTrustedIdProviderParametersFormGroup() {
		return new FormGroup<CreateOrUpdateTrustedIdProviderParametersFormProperties>({
		});

	}


	/** The trusted identity provider properties to use when creating a new trusted identity provider. */
	export interface CreateOrUpdateTrustedIdProviderProperties {

		/**
		 * The URL of this trusted identity provider.
		 * Required
		 */
		idProvider: string;
	}

	/** The trusted identity provider properties to use when creating a new trusted identity provider. */
	export interface CreateOrUpdateTrustedIdProviderPropertiesFormProperties {

		/**
		 * The URL of this trusted identity provider.
		 * Required
		 */
		idProvider: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrUpdateTrustedIdProviderPropertiesFormGroup() {
		return new FormGroup<CreateOrUpdateTrustedIdProviderPropertiesFormProperties>({
			idProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters used to create a new virtual network rule. */
	export interface CreateOrUpdateVirtualNetworkRuleParameters {

		/**
		 * The virtual network rule properties to use when creating a new virtual network rule.
		 * Required
		 */
		properties: CreateOrUpdateVirtualNetworkRuleProperties;
	}

	/** The parameters used to create a new virtual network rule. */
	export interface CreateOrUpdateVirtualNetworkRuleParametersFormProperties {
	}
	export function CreateCreateOrUpdateVirtualNetworkRuleParametersFormGroup() {
		return new FormGroup<CreateOrUpdateVirtualNetworkRuleParametersFormProperties>({
		});

	}


	/** The virtual network rule properties to use when creating a new virtual network rule. */
	export interface CreateOrUpdateVirtualNetworkRuleProperties {

		/**
		 * The resource identifier for the subnet.
		 * Required
		 */
		subnetId: string;
	}

	/** The virtual network rule properties to use when creating a new virtual network rule. */
	export interface CreateOrUpdateVirtualNetworkRulePropertiesFormProperties {

		/**
		 * The resource identifier for the subnet.
		 * Required
		 */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrUpdateVirtualNetworkRulePropertiesFormGroup() {
		return new FormGroup<CreateOrUpdateVirtualNetworkRulePropertiesFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Data Lake Store account information. */
	export interface DataLakeStoreAccount extends Resource {

		/** The encryption identity properties. */
		identity?: EncryptionIdentity;

		/** Data Lake Store account properties information. */
		properties?: DataLakeStoreAccountProperties;
	}

	/** Data Lake Store account information. */
	export interface DataLakeStoreAccountFormProperties extends ResourceFormProperties {
	}
	export function CreateDataLakeStoreAccountFormGroup() {
		return new FormGroup<DataLakeStoreAccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic Data Lake Store account information, returned on list calls. */
	export interface DataLakeStoreAccountBasic extends Resource {

		/** The basic account specific properties that are associated with an underlying Data Lake Store account. */
		properties?: DataLakeStoreAccountPropertiesBasic;
	}

	/** Basic Data Lake Store account information, returned on list calls. */
	export interface DataLakeStoreAccountBasicFormProperties extends ResourceFormProperties {
	}
	export function CreateDataLakeStoreAccountBasicFormGroup() {
		return new FormGroup<DataLakeStoreAccountBasicFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Store account list information response. */
	export interface DataLakeStoreAccountListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<DataLakeStoreAccountBasic>;
	}

	/** Data Lake Store account list information response. */
	export interface DataLakeStoreAccountListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataLakeStoreAccountListResultFormGroup() {
		return new FormGroup<DataLakeStoreAccountListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Store account properties information. */
	export interface DataLakeStoreAccountProperties extends DataLakeStoreAccountPropertiesBasic {

		/** The commitment tier in use for the current month. */
		currentTier?: CreateDataLakeStoreAccountPropertiesNewTier | null;

		/** The default owner group for all new folders and files created in the Data Lake Store account. */
		defaultGroup?: string | null;

		/** The encryption configuration for the account. */
		encryptionConfig?: EncryptionConfig;

		/** The current state of encryption provisioning for this Data Lake Store account. */
		encryptionProvisioningState?: DataLakeStoreAccountPropertiesEncryptionProvisioningState | null;

		/** The current state of encryption for this Data Lake Store account. */
		encryptionState?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The list of firewall rules associated with this Data Lake Store account. */
		firewallRules?: Array<FirewallRule>;

		/** The current state of the IP address firewall for this Data Lake Store account. */
		firewallState?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The commitment tier to use for next month. */
		newTier?: CreateDataLakeStoreAccountPropertiesNewTier | null;

		/** The current state of the trusted identity provider feature for this Data Lake Store account. */
		trustedIdProviderState?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The list of trusted identity providers associated with this Data Lake Store account. */
		trustedIdProviders?: Array<TrustedIdProvider>;

		/** The list of virtual network rules associated with this Data Lake Store account. */
		virtualNetworkRules?: Array<VirtualNetworkRule>;
	}

	/** Data Lake Store account properties information. */
	export interface DataLakeStoreAccountPropertiesFormProperties extends DataLakeStoreAccountPropertiesBasicFormProperties {

		/** The commitment tier in use for the current month. */
		currentTier: FormControl<CreateDataLakeStoreAccountPropertiesNewTier | null | undefined>,

		/** The default owner group for all new folders and files created in the Data Lake Store account. */
		defaultGroup: FormControl<string | null | undefined>,

		/** The current state of encryption provisioning for this Data Lake Store account. */
		encryptionProvisioningState: FormControl<DataLakeStoreAccountPropertiesEncryptionProvisioningState | null | undefined>,

		/** The current state of encryption for this Data Lake Store account. */
		encryptionState: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,

		/** The current state of the IP address firewall for this Data Lake Store account. */
		firewallState: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,

		/** The commitment tier to use for next month. */
		newTier: FormControl<CreateDataLakeStoreAccountPropertiesNewTier | null | undefined>,

		/** The current state of the trusted identity provider feature for this Data Lake Store account. */
		trustedIdProviderState: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,
	}
	export function CreateDataLakeStoreAccountPropertiesFormGroup() {
		return new FormGroup<DataLakeStoreAccountPropertiesFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<DataLakeStoreAccountPropertiesBasicProvisioningState | null | undefined>(undefined),
			state: new FormControl<DataLakeStoreAccountPropertiesBasicState | null | undefined>(undefined),
			currentTier: new FormControl<CreateDataLakeStoreAccountPropertiesNewTier | null | undefined>(undefined),
			defaultGroup: new FormControl<string | null | undefined>(undefined),
			encryptionProvisioningState: new FormControl<DataLakeStoreAccountPropertiesEncryptionProvisioningState | null | undefined>(undefined),
			encryptionState: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
			firewallAllowAzureIps: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
			firewallState: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
			newTier: new FormControl<CreateDataLakeStoreAccountPropertiesNewTier | null | undefined>(undefined),
			trustedIdProviderState: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
		});

	}

	export enum DataLakeStoreAccountPropertiesEncryptionProvisioningState { Creating = 'Creating', Succeeded = 'Succeeded' }


	/** Data Lake Store firewall rule information. */
	export interface FirewallRule extends SubResource {

		/** The firewall rule properties. */
		properties?: FirewallRuleProperties;
	}

	/** Data Lake Store firewall rule information. */
	export interface FirewallRuleFormProperties extends SubResourceFormProperties {
	}
	export function CreateFirewallRuleFormGroup() {
		return new FormGroup<FirewallRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Store trusted identity provider information. */
	export interface TrustedIdProvider extends SubResource {

		/** The trusted identity provider properties. */
		properties?: TrustedIdProviderProperties;
	}

	/** Data Lake Store trusted identity provider information. */
	export interface TrustedIdProviderFormProperties extends SubResourceFormProperties {
	}
	export function CreateTrustedIdProviderFormGroup() {
		return new FormGroup<TrustedIdProviderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Store virtual network rule information. */
	export interface VirtualNetworkRule extends SubResource {

		/** The virtual network rule properties. */
		properties?: VirtualNetworkRuleProperties;
	}

	/** Data Lake Store virtual network rule information. */
	export interface VirtualNetworkRuleFormProperties extends SubResourceFormProperties {
	}
	export function CreateVirtualNetworkRuleFormGroup() {
		return new FormGroup<VirtualNetworkRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The basic account specific properties that are associated with an underlying Data Lake Store account. */
	export interface DataLakeStoreAccountPropertiesBasic {

		/** The unique identifier associated with this Data Lake Store account. */
		accountId?: string | null;

		/** The account creation time. */
		creationTime?: Date | null;

		/** The full CName endpoint for this account. */
		endpoint?: string | null;

		/** The account last modified time. */
		lastModifiedTime?: Date | null;

		/** The provisioning status of the Data Lake Store account. */
		provisioningState?: DataLakeStoreAccountPropertiesBasicProvisioningState | null;

		/** The state of the Data Lake Store account. */
		state?: DataLakeStoreAccountPropertiesBasicState | null;
	}

	/** The basic account specific properties that are associated with an underlying Data Lake Store account. */
	export interface DataLakeStoreAccountPropertiesBasicFormProperties {

		/** The unique identifier associated with this Data Lake Store account. */
		accountId: FormControl<string | null | undefined>,

		/** The account creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The full CName endpoint for this account. */
		endpoint: FormControl<string | null | undefined>,

		/** The account last modified time. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** The provisioning status of the Data Lake Store account. */
		provisioningState: FormControl<DataLakeStoreAccountPropertiesBasicProvisioningState | null | undefined>,

		/** The state of the Data Lake Store account. */
		state: FormControl<DataLakeStoreAccountPropertiesBasicState | null | undefined>,
	}
	export function CreateDataLakeStoreAccountPropertiesBasicFormGroup() {
		return new FormGroup<DataLakeStoreAccountPropertiesBasicFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<DataLakeStoreAccountPropertiesBasicProvisioningState | null | undefined>(undefined),
			state: new FormControl<DataLakeStoreAccountPropertiesBasicState | null | undefined>(undefined),
		});

	}

	export enum DataLakeStoreAccountPropertiesBasicProvisioningState { Failed = 'Failed', Creating = 'Creating', Running = 'Running', Succeeded = 'Succeeded', Patching = 'Patching', Suspending = 'Suspending', Resuming = 'Resuming', Deleting = 'Deleting', Deleted = 'Deleted', Undeleting = 'Undeleting', Canceled = 'Canceled' }

	export enum DataLakeStoreAccountPropertiesBasicState { Active = 'Active', Suspended = 'Suspended' }


	/** The encryption configuration for the account. */
	export interface EncryptionConfig {

		/** Metadata information used by account encryption. */
		keyVaultMetaInfo?: KeyVaultMetaInfo;

		/**
		 * The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.
		 * Required
		 */
		type: EncryptionConfigType;
	}

	/** The encryption configuration for the account. */
	export interface EncryptionConfigFormProperties {

		/**
		 * The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.
		 * Required
		 */
		type: FormControl<EncryptionConfigType | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			type: new FormControl<EncryptionConfigType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionConfigType { UserManaged = 'UserManaged', ServiceManaged = 'ServiceManaged' }


	/** The encryption identity properties. */
	export interface EncryptionIdentity {

		/** The principal identifier associated with the encryption. */
		principalId?: string | null;

		/** The tenant identifier associated with the encryption. */
		tenantId?: string | null;

		/**
		 * The type of encryption being used. Currently the only supported type is 'SystemAssigned'.
		 * Required
		 */
		type: EncryptionIdentityType;
	}

	/** The encryption identity properties. */
	export interface EncryptionIdentityFormProperties {

		/** The principal identifier associated with the encryption. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant identifier associated with the encryption. */
		tenantId: FormControl<string | null | undefined>,

		/**
		 * The type of encryption being used. Currently the only supported type is 'SystemAssigned'.
		 * Required
		 */
		type: FormControl<EncryptionIdentityType | null | undefined>,
	}
	export function CreateEncryptionIdentityFormGroup() {
		return new FormGroup<EncryptionIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EncryptionIdentityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionIdentityType { SystemAssigned = 'SystemAssigned' }


	/** Data Lake Store firewall rule list information. */
	export interface FirewallRuleListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<FirewallRule>;
	}

	/** Data Lake Store firewall rule list information. */
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


	/** Metadata information used by account encryption. */
	export interface KeyVaultMetaInfo {

		/**
		 * The name of the user managed encryption key.
		 * Required
		 */
		encryptionKeyName: string;

		/**
		 * The version of the user managed encryption key.
		 * Required
		 */
		encryptionKeyVersion: string;

		/**
		 * The resource identifier for the user managed Key Vault being used to encrypt.
		 * Required
		 */
		keyVaultResourceId: string;
	}

	/** Metadata information used by account encryption. */
	export interface KeyVaultMetaInfoFormProperties {

		/**
		 * The name of the user managed encryption key.
		 * Required
		 */
		encryptionKeyName: FormControl<string | null | undefined>,

		/**
		 * The version of the user managed encryption key.
		 * Required
		 */
		encryptionKeyVersion: FormControl<string | null | undefined>,

		/**
		 * The resource identifier for the user managed Key Vault being used to encrypt.
		 * Required
		 */
		keyVaultResourceId: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultMetaInfoFormGroup() {
		return new FormGroup<KeyVaultMetaInfoFormProperties>({
			encryptionKeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encryptionKeyVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyVaultResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Data Lake Store account name availability result information. */
	export interface NameAvailabilityInformation {

		/** The message describing why the Data Lake Store account name is not available, if nameAvailable is false. */
		message?: string | null;

		/** The Boolean value of true or false to indicate whether the Data Lake Store account name is available or not. */
		nameAvailable?: boolean | null;

		/** The reason why the Data Lake Store account name is not available, if nameAvailable is false. */
		reason?: string | null;
	}

	/** Data Lake Store account name availability result information. */
	export interface NameAvailabilityInformationFormProperties {

		/** The message describing why the Data Lake Store account name is not available, if nameAvailable is false. */
		message: FormControl<string | null | undefined>,

		/** The Boolean value of true or false to indicate whether the Data Lake Store account name is available or not. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason why the Data Lake Store account name is not available, if nameAvailable is false. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateNameAvailabilityInformationFormGroup() {
		return new FormGroup<NameAvailabilityInformationFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An available operation for Data Lake Store. */
	export interface Operation {

		/** The display information for a particular operation. */
		display?: OperationDisplay;

		/** The name of the operation. */
		name?: string | null;

		/** The intended executor of the operation. */
		origin?: OperationOrigin | null;
	}

	/** An available operation for Data Lake Store. */
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

	export enum OperationOrigin { user = 'user', system = 'system', 'user,system' = 'user,system' }


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


	/** The list of available operations for Data Lake Store. */
	export interface OperationListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<Operation>;
	}

	/** The list of available operations for Data Lake Store. */
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

		/** The resource identifier. */
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

		/** The resource identifier. */
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


	/** Data Lake Store trusted identity provider list information. */
	export interface TrustedIdProviderListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<TrustedIdProvider>;
	}

	/** Data Lake Store trusted identity provider list information. */
	export interface TrustedIdProviderListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTrustedIdProviderListResultFormGroup() {
		return new FormGroup<TrustedIdProviderListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The trusted identity provider properties. */
	export interface TrustedIdProviderProperties {

		/** The URL of this trusted identity provider. */
		idProvider?: string | null;
	}

	/** The trusted identity provider properties. */
	export interface TrustedIdProviderPropertiesFormProperties {

		/** The URL of this trusted identity provider. */
		idProvider: FormControl<string | null | undefined>,
	}
	export function CreateTrustedIdProviderPropertiesFormGroup() {
		return new FormGroup<TrustedIdProviderPropertiesFormProperties>({
			idProvider: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Store account information to update. */
	export interface UpdateDataLakeStoreAccountParameters {

		/** Data Lake Store account properties information to be updated. */
		properties?: UpdateDataLakeStoreAccountProperties;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** Data Lake Store account information to update. */
	export interface UpdateDataLakeStoreAccountParametersFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateDataLakeStoreAccountParametersFormGroup() {
		return new FormGroup<UpdateDataLakeStoreAccountParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Data Lake Store account properties information to be updated. */
	export interface UpdateDataLakeStoreAccountProperties {

		/** The default owner group for all new folders and files created in the Data Lake Store account. */
		defaultGroup?: string | null;

		/** The encryption configuration used to update a user managed Key Vault key. */
		encryptionConfig?: UpdateEncryptionConfig;

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The list of firewall rules associated with this Data Lake Store account. */
		firewallRules?: Array<UpdateFirewallRuleWithAccountParameters>;

		/** The current state of the IP address firewall for this Data Lake Store account. Disabling the firewall does not remove existing rules, they will just be ignored until the firewall is re-enabled. */
		firewallState?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The commitment tier to use for next month. */
		newTier?: CreateDataLakeStoreAccountPropertiesNewTier | null;

		/** The current state of the trusted identity provider feature for this Data Lake Store account. Disabling trusted identity provider functionality does not remove the providers, they will just be ignored until this feature is re-enabled. */
		trustedIdProviderState?: CreateDataLakeStoreAccountPropertiesEncryptionState | null;

		/** The list of trusted identity providers associated with this Data Lake Store account. */
		trustedIdProviders?: Array<UpdateTrustedIdProviderWithAccountParameters>;

		/** The list of virtual network rules associated with this Data Lake Store account. */
		virtualNetworkRules?: Array<UpdateVirtualNetworkRuleWithAccountParameters>;
	}

	/** Data Lake Store account properties information to be updated. */
	export interface UpdateDataLakeStoreAccountPropertiesFormProperties {

		/** The default owner group for all new folders and files created in the Data Lake Store account. */
		defaultGroup: FormControl<string | null | undefined>,

		/** The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced. */
		firewallAllowAzureIps: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,

		/** The current state of the IP address firewall for this Data Lake Store account. Disabling the firewall does not remove existing rules, they will just be ignored until the firewall is re-enabled. */
		firewallState: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,

		/** The commitment tier to use for next month. */
		newTier: FormControl<CreateDataLakeStoreAccountPropertiesNewTier | null | undefined>,

		/** The current state of the trusted identity provider feature for this Data Lake Store account. Disabling trusted identity provider functionality does not remove the providers, they will just be ignored until this feature is re-enabled. */
		trustedIdProviderState: FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>,
	}
	export function CreateUpdateDataLakeStoreAccountPropertiesFormGroup() {
		return new FormGroup<UpdateDataLakeStoreAccountPropertiesFormProperties>({
			defaultGroup: new FormControl<string | null | undefined>(undefined),
			firewallAllowAzureIps: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
			firewallState: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
			newTier: new FormControl<CreateDataLakeStoreAccountPropertiesNewTier | null | undefined>(undefined),
			trustedIdProviderState: new FormControl<CreateDataLakeStoreAccountPropertiesEncryptionState | null | undefined>(undefined),
		});

	}


	/** The parameters used to update a firewall rule while updating a Data Lake Store account. */
	export interface UpdateFirewallRuleWithAccountParameters {

		/**
		 * The unique name of the firewall rule to update.
		 * Required
		 */
		name: string;

		/** The firewall rule properties to use when updating a firewall rule. */
		properties?: UpdateFirewallRuleProperties;
	}

	/** The parameters used to update a firewall rule while updating a Data Lake Store account. */
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


	/** The parameters used to update a trusted identity provider while updating a Data Lake Store account. */
	export interface UpdateTrustedIdProviderWithAccountParameters {

		/**
		 * The unique name of the trusted identity provider to update.
		 * Required
		 */
		name: string;

		/** The trusted identity provider properties to use when updating a trusted identity provider. */
		properties?: UpdateTrustedIdProviderProperties;
	}

	/** The parameters used to update a trusted identity provider while updating a Data Lake Store account. */
	export interface UpdateTrustedIdProviderWithAccountParametersFormProperties {

		/**
		 * The unique name of the trusted identity provider to update.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrustedIdProviderWithAccountParametersFormGroup() {
		return new FormGroup<UpdateTrustedIdProviderWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters used to update a virtual network rule while updating a Data Lake Store account. */
	export interface UpdateVirtualNetworkRuleWithAccountParameters {

		/**
		 * The unique name of the virtual network rule to update.
		 * Required
		 */
		name: string;

		/** The virtual network rule properties to use when updating a virtual network rule. */
		properties?: UpdateVirtualNetworkRuleProperties;
	}

	/** The parameters used to update a virtual network rule while updating a Data Lake Store account. */
	export interface UpdateVirtualNetworkRuleWithAccountParametersFormProperties {

		/**
		 * The unique name of the virtual network rule to update.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualNetworkRuleWithAccountParametersFormGroup() {
		return new FormGroup<UpdateVirtualNetworkRuleWithAccountParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The encryption configuration used to update a user managed Key Vault key. */
	export interface UpdateEncryptionConfig {

		/** The Key Vault update information used for user managed key rotation. */
		keyVaultMetaInfo?: UpdateKeyVaultMetaInfo;
	}

	/** The encryption configuration used to update a user managed Key Vault key. */
	export interface UpdateEncryptionConfigFormProperties {
	}
	export function CreateUpdateEncryptionConfigFormGroup() {
		return new FormGroup<UpdateEncryptionConfigFormProperties>({
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


	/** The Key Vault update information used for user managed key rotation. */
	export interface UpdateKeyVaultMetaInfo {

		/** The version of the user managed encryption key to update through a key rotation. */
		encryptionKeyVersion?: string | null;
	}

	/** The Key Vault update information used for user managed key rotation. */
	export interface UpdateKeyVaultMetaInfoFormProperties {

		/** The version of the user managed encryption key to update through a key rotation. */
		encryptionKeyVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateKeyVaultMetaInfoFormGroup() {
		return new FormGroup<UpdateKeyVaultMetaInfoFormProperties>({
			encryptionKeyVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to update a trusted identity provider. */
	export interface UpdateTrustedIdProviderParameters {

		/** The trusted identity provider properties to use when updating a trusted identity provider. */
		properties?: UpdateTrustedIdProviderProperties;
	}

	/** The parameters used to update a trusted identity provider. */
	export interface UpdateTrustedIdProviderParametersFormProperties {
	}
	export function CreateUpdateTrustedIdProviderParametersFormGroup() {
		return new FormGroup<UpdateTrustedIdProviderParametersFormProperties>({
		});

	}


	/** The trusted identity provider properties to use when updating a trusted identity provider. */
	export interface UpdateTrustedIdProviderProperties {

		/** The URL of this trusted identity provider. */
		idProvider?: string | null;
	}

	/** The trusted identity provider properties to use when updating a trusted identity provider. */
	export interface UpdateTrustedIdProviderPropertiesFormProperties {

		/** The URL of this trusted identity provider. */
		idProvider: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrustedIdProviderPropertiesFormGroup() {
		return new FormGroup<UpdateTrustedIdProviderPropertiesFormProperties>({
			idProvider: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to update a virtual network rule. */
	export interface UpdateVirtualNetworkRuleParameters {

		/** The virtual network rule properties to use when updating a virtual network rule. */
		properties?: UpdateVirtualNetworkRuleProperties;
	}

	/** The parameters used to update a virtual network rule. */
	export interface UpdateVirtualNetworkRuleParametersFormProperties {
	}
	export function CreateUpdateVirtualNetworkRuleParametersFormGroup() {
		return new FormGroup<UpdateVirtualNetworkRuleParametersFormProperties>({
		});

	}


	/** The virtual network rule properties to use when updating a virtual network rule. */
	export interface UpdateVirtualNetworkRuleProperties {

		/** The resource identifier for the subnet. */
		subnetId?: string | null;
	}

	/** The virtual network rule properties to use when updating a virtual network rule. */
	export interface UpdateVirtualNetworkRulePropertiesFormProperties {

		/** The resource identifier for the subnet. */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVirtualNetworkRulePropertiesFormGroup() {
		return new FormGroup<UpdateVirtualNetworkRulePropertiesFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the Resource Usage. */
	export interface Usage {

		/**
		 * Gets the current count of the allocated resources in the subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue?: number | null;

		/** Resource identifier. */
		id?: string | null;

		/**
		 * Gets the maximum count of the resources that can be allocated in the subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The usage names that can be used. */
		name?: UsageName;

		/** Gets the unit of measurement. */
		unit?: UsageUnit | null;
	}

	/** Describes the Resource Usage. */
	export interface UsageFormProperties {

		/**
		 * Gets the current count of the allocated resources in the subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue: FormControl<number | null | undefined>,

		/** Resource identifier. */
		id: FormControl<string | null | undefined>,

		/**
		 * Gets the maximum count of the resources that can be allocated in the subscription.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** Gets the unit of measurement. */
		unit: FormControl<UsageUnit | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<UsageUnit | null | undefined>(undefined),
		});

	}

	export enum UsageUnit { Count = 'Count', Bytes = 'Bytes', Seconds = 'Seconds', Percent = 'Percent', CountsPerSecond = 'CountsPerSecond', BytesPerSecond = 'BytesPerSecond' }


	/** The response from the List Usages operation. */
	export interface UsageListResult {

		/** Gets or sets the list of Storage Resource Usages. */
		value?: Array<Usage>;
	}

	/** The response from the List Usages operation. */
	export interface UsageListResultFormProperties {
	}
	export function CreateUsageListResultFormGroup() {
		return new FormGroup<UsageListResultFormProperties>({
		});

	}


	/** The usage names that can be used. */
	export interface UsageName {

		/** Gets a localized string describing the resource name. */
		localizedValue?: string | null;

		/** Gets a string describing the resource name. */
		value?: string | null;
	}

	/** The usage names that can be used. */
	export interface UsageNameFormProperties {

		/** Gets a localized string describing the resource name. */
		localizedValue: FormControl<string | null | undefined>,

		/** Gets a string describing the resource name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUsageNameFormGroup() {
		return new FormGroup<UsageNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Lake Store virtual network rule list information. */
	export interface VirtualNetworkRuleListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The results of the list operation. */
		value?: Array<VirtualNetworkRule>;
	}

	/** Data Lake Store virtual network rule list information. */
	export interface VirtualNetworkRuleListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkRuleListResultFormGroup() {
		return new FormGroup<VirtualNetworkRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The virtual network rule properties. */
	export interface VirtualNetworkRuleProperties {

		/** The resource identifier for the subnet. */
		subnetId?: string | null;
	}

	/** The virtual network rule properties. */
	export interface VirtualNetworkRulePropertiesFormProperties {

		/** The resource identifier for the subnet. */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkRulePropertiesFormGroup() {
		return new FormGroup<VirtualNetworkRulePropertiesFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Data Lake Store REST API operations.
		 * Get providers/Microsoft.DataLakeStore/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} Successfully listed the available operations for Data Lake Store.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.DataLakeStore/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the Data Lake Store accounts within the subscription. The response includes a link to the next page of results, if any.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/accounts
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 *     Minimum: 1
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 *     Minimum: 1
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {DataLakeStoreAccountListResult} Successfully retrieved the list of accounts.
		 */
		Accounts_List(subscriptionId: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<DataLakeStoreAccountListResult> {
			return this.http.get<DataLakeStoreAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataLakeStore/accounts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets subscription-level properties and limits for Data Lake Store specified by resource location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/locations/{location}/capability
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The resource location without whitespace.
		 * @param {string} api_version Client Api Version.
		 * @return {CapabilityInformation} Successfully retrieved the subscription-level properties and limits for Data Lake Store specified by resource location.
		 */
		Locations_GetCapability(subscriptionId: string, location: string, api_version: string): Observable<CapabilityInformation> {
			return this.http.get<CapabilityInformation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataLakeStore/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/capability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks whether the specified account name is available or taken.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/locations/{location}/checkNameAvailability
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The resource location without whitespace.
		 * @param {string} api_version Client Api Version.
		 * @param {CheckNameAvailabilityParameters} requestBody Parameters supplied to check the Data Lake Store account name availability.
		 * @return {NameAvailabilityInformation} Successfully retrieved the Data Lake Store account name availability information.
		 */
		Accounts_CheckNameAvailability(subscriptionId: string, location: string, api_version: string, requestBody: CheckNameAvailabilityParameters): Observable<NameAvailabilityInformation> {
			return this.http.post<NameAvailabilityInformation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataLakeStore/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the current usage count and the limit for the resources of the location under the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DataLakeStore/locations/{location}/usages
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The resource location without whitespace.
		 * @return {UsageListResult} OK -- current usage count and limit retrieved and returned successfully.
		 */
		Locations_GetUsage(api_version: string, subscriptionId: string, location: string): Observable<UsageListResult> {
			return this.http.get<UsageListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataLakeStore/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/usages?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the Data Lake Store accounts within a specific resource group. The response includes a link to the next page of results, if any.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} filter OData filter. Optional.
		 * @param {number} top The number of items to return. Optional.
		 *     Minimum: 1
		 * @param {number} skip The number of items to skip over before returning elements. Optional.
		 *     Minimum: 1
		 * @param {string} select OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional.
		 * @param {string} orderby OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional.
		 * @param {boolean} count A Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. Optional.
		 * @param {string} api_version Client Api Version.
		 * @return {DataLakeStoreAccountListResult} Successfully retrieved the list of accounts in the specified resource group.
		 */
		Accounts_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, filter: string | null | undefined, top: number | null | undefined, skip: number | null | undefined, select: string | null | undefined, orderby: string | null | undefined, count: boolean | null | undefined, api_version: string): Observable<DataLakeStoreAccountListResult> {
			return this.http.get<DataLakeStoreAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skip=' + skip + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&count=' + count + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Data Lake Store account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} api_version Client Api Version.
		 * @return {DataLakeStoreAccount} Successfully retrieved details of the specified account.
		 */
		Accounts_Get(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<DataLakeStoreAccount> {
			return this.http.get<DataLakeStoreAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates the specified Data Lake Store account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} api_version Client Api Version.
		 * @param {CreateDataLakeStoreAccountParameters} requestBody Parameters supplied to create the Data Lake Store account.
		 * @return {DataLakeStoreAccount} Successfully created the account.
		 */
		Accounts_Create(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: CreateDataLakeStoreAccountParameters): Observable<DataLakeStoreAccount> {
			return this.http.put<DataLakeStoreAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Data Lake Store account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted the specified account.
		 */
		Accounts_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified Data Lake Store account information.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} api_version Client Api Version.
		 * @param {UpdateDataLakeStoreAccountParameters} requestBody Parameters supplied to update the Data Lake Store account.
		 * @return {DataLakeStoreAccount} Successfully updated the account details.
		 */
		Accounts_Update(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: UpdateDataLakeStoreAccountParameters): Observable<DataLakeStoreAccount> {
			return this.http.patch<DataLakeStoreAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to enable a user managed Key Vault for encryption of the specified Data Lake Store account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/enableKeyVault
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully enabled the user-managed Key Vault settings used for encrypting this Data Lake Store account.
		 */
		Accounts_EnableKeyVault(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/enableKeyVault&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Data Lake Store firewall rules within the specified Data Lake Store account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} api_version Client Api Version.
		 * @return {FirewallRuleListResult} Successfully retrieved the list of firewall rules.
		 */
		FirewallRules_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<FirewallRuleListResult> {
			return this.http.get<FirewallRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Data Lake Store firewall rule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} firewallRuleName The name of the firewall rule to retrieve.
		 * @param {string} api_version Client Api Version.
		 * @return {FirewallRule} Successfully retrieved the firewall rule.
		 */
		FirewallRules_Get(subscriptionId: string, resourceGroupName: string, accountName: string, firewallRuleName: string, api_version: string): Observable<FirewallRule> {
			return this.http.get<FirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the specified firewall rule. During update, the firewall rule with the specified name will be replaced with this new firewall rule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} firewallRuleName The name of the firewall rule to create or update.
		 * @param {string} api_version Client Api Version.
		 * @param {CreateOrUpdateFirewallRuleParameters} requestBody Parameters supplied to create or update the firewall rule.
		 * @return {FirewallRule} Successfully created or updated the specified firewall rule.
		 */
		FirewallRules_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, firewallRuleName: string, api_version: string, requestBody: CreateOrUpdateFirewallRuleParameters): Observable<FirewallRule> {
			return this.http.put<FirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified firewall rule from the specified Data Lake Store account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} firewallRuleName The name of the firewall rule to delete.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted the specified firewall rule.
		 */
		FirewallRules_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, firewallRuleName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified firewall rule.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/firewallRules/{firewallRuleName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} firewallRuleName The name of the firewall rule to update.
		 * @param {string} api_version Client Api Version.
		 * @param {UpdateFirewallRuleParameters} requestBody Parameters supplied to update the firewall rule.
		 * @return {FirewallRule} Successfully updated the specified firewall rule.
		 */
		FirewallRules_Update(subscriptionId: string, resourceGroupName: string, accountName: string, firewallRuleName: string, api_version: string, requestBody: UpdateFirewallRuleParameters): Observable<FirewallRule> {
			return this.http.patch<FirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Data Lake Store trusted identity providers within the specified Data Lake Store account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} api_version Client Api Version.
		 * @return {TrustedIdProviderListResult} Successfully retrieved the list of trusted identity providers.
		 */
		TrustedIdProviders_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<TrustedIdProviderListResult> {
			return this.http.get<TrustedIdProviderListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/trustedIdProviders&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Data Lake Store trusted identity provider.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} trustedIdProviderName The name of the trusted identity provider to retrieve.
		 * @param {string} api_version Client Api Version.
		 * @return {TrustedIdProvider} Successfully retrieved details of the specified trusted identity provider.
		 */
		TrustedIdProviders_Get(subscriptionId: string, resourceGroupName: string, accountName: string, trustedIdProviderName: string, api_version: string): Observable<TrustedIdProvider> {
			return this.http.get<TrustedIdProvider>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/trustedIdProviders/' + (trustedIdProviderName == null ? '' : encodeURIComponent(trustedIdProviderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the specified trusted identity provider. During update, the trusted identity provider with the specified name will be replaced with this new provider
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} trustedIdProviderName The name of the trusted identity provider. This is used for differentiation of providers in the account.
		 * @param {string} api_version Client Api Version.
		 * @param {CreateOrUpdateTrustedIdProviderParameters} requestBody Parameters supplied to create or replace the trusted identity provider.
		 * @return {TrustedIdProvider} Successfully added the trusted identity provider.
		 */
		TrustedIdProviders_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, trustedIdProviderName: string, api_version: string, requestBody: CreateOrUpdateTrustedIdProviderParameters): Observable<TrustedIdProvider> {
			return this.http.put<TrustedIdProvider>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/trustedIdProviders/' + (trustedIdProviderName == null ? '' : encodeURIComponent(trustedIdProviderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified trusted identity provider from the specified Data Lake Store account
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} trustedIdProviderName The name of the trusted identity provider to delete.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted the specified trusted identity provider details.
		 */
		TrustedIdProviders_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, trustedIdProviderName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/trustedIdProviders/' + (trustedIdProviderName == null ? '' : encodeURIComponent(trustedIdProviderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified trusted identity provider.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/trustedIdProviders/{trustedIdProviderName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} trustedIdProviderName The name of the trusted identity provider. This is used for differentiation of providers in the account.
		 * @param {string} api_version Client Api Version.
		 * @param {UpdateTrustedIdProviderParameters} requestBody Parameters supplied to update the trusted identity provider.
		 * @return {TrustedIdProvider} Successfully added the trusted identity provider.
		 */
		TrustedIdProviders_Update(subscriptionId: string, resourceGroupName: string, accountName: string, trustedIdProviderName: string, api_version: string, requestBody: UpdateTrustedIdProviderParameters): Observable<TrustedIdProvider> {
			return this.http.patch<TrustedIdProvider>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/trustedIdProviders/' + (trustedIdProviderName == null ? '' : encodeURIComponent(trustedIdProviderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Data Lake Store virtual network rules within the specified Data Lake Store account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} api_version Client Api Version.
		 * @return {VirtualNetworkRuleListResult} Successfully retrieved the list of virtual network rules.
		 */
		VirtualNetworkRules_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<VirtualNetworkRuleListResult> {
			return this.http.get<VirtualNetworkRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/virtualNetworkRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Data Lake Store virtual network rule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} virtualNetworkRuleName The name of the virtual network rule to retrieve.
		 * @param {string} api_version Client Api Version.
		 * @return {VirtualNetworkRule} Successfully retrieved the virtual network rule.
		 */
		VirtualNetworkRules_Get(subscriptionId: string, resourceGroupName: string, accountName: string, virtualNetworkRuleName: string, api_version: string): Observable<VirtualNetworkRule> {
			return this.http.get<VirtualNetworkRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/virtualNetworkRules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the specified virtual network rule. During update, the virtual network rule with the specified name will be replaced with this new virtual network rule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} virtualNetworkRuleName The name of the virtual network rule to create or update.
		 * @param {string} api_version Client Api Version.
		 * @param {CreateOrUpdateVirtualNetworkRuleParameters} requestBody Parameters supplied to create or update the virtual network rule.
		 * @return {VirtualNetworkRule} Successfully created or updated the specified virtual network rule.
		 */
		VirtualNetworkRules_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, virtualNetworkRuleName: string, api_version: string, requestBody: CreateOrUpdateVirtualNetworkRuleParameters): Observable<VirtualNetworkRule> {
			return this.http.put<VirtualNetworkRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/virtualNetworkRules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified virtual network rule from the specified Data Lake Store account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} virtualNetworkRuleName The name of the virtual network rule to delete.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Successfully deleted the specified virtual network rule.
		 */
		VirtualNetworkRules_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, virtualNetworkRuleName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/virtualNetworkRules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified virtual network rule.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the Azure resource group.
		 * @param {string} accountName The name of the Data Lake Store account.
		 * @param {string} virtualNetworkRuleName The name of the virtual network rule to update.
		 * @param {string} api_version Client Api Version.
		 * @param {UpdateVirtualNetworkRuleParameters} requestBody Parameters supplied to update the virtual network rule.
		 * @return {VirtualNetworkRule} Successfully updated the specified virtual network rule.
		 */
		VirtualNetworkRules_Update(subscriptionId: string, resourceGroupName: string, accountName: string, virtualNetworkRuleName: string, api_version: string, requestBody: UpdateVirtualNetworkRuleParameters): Observable<VirtualNetworkRule> {
			return this.http.patch<VirtualNetworkRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataLakeStore/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/virtualNetworkRules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

