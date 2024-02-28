import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** API key payload which is exposed in the request/response of the resource provider. */
	export interface ApiKey {

		/** Gets or sets the API key name. */
		keyName?: string | null;

		/** Gets or sets the API key value. */
		value?: string | null;
	}

	/** API key payload which is exposed in the request/response of the resource provider. */
	export interface ApiKeyFormProperties {

		/** Gets or sets the API key name. */
		keyName: FormControl<string | null | undefined>,

		/** Gets or sets the API key value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyFormGroup() {
		return new FormGroup<ApiKeyFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of the API key payload which is exposed in the response of the resource provider. */
	export interface ApiKeyCollection {

		/** Gets or sets the collection of API key. */
		keys?: Array<ApiKey>;
	}

	/** Collection of the API key payload which is exposed in the response of the resource provider. */
	export interface ApiKeyCollectionFormProperties {
	}
	export function CreateApiKeyCollectionFormGroup() {
		return new FormGroup<ApiKeyCollectionFormProperties>({
		});

	}


	/** Payload of the blockchain member which is exposed in the request/response of the resource provider. */
	export interface BlockchainMember {

		/** Payload of the blockchain member properties for a blockchain member. */
		properties?: BlockchainMemberProperties;

		/** Blockchain member Sku in payload */
		sku?: Sku;
	}

	/** Payload of the blockchain member which is exposed in the request/response of the resource provider. */
	export interface BlockchainMemberFormProperties {
	}
	export function CreateBlockchainMemberFormGroup() {
		return new FormGroup<BlockchainMemberFormProperties>({
		});

	}


	/** Payload of the blockchain member properties for a blockchain member. */
	export interface BlockchainMemberProperties {

		/** Gets or sets the consortium for the blockchain member. */
		consortium?: string | null;

		/** Gets the managed consortium management account address. */
		consortiumManagementAccountAddress?: string | null;

		/** Sets the managed consortium management account password. */
		consortiumManagementAccountPassword?: string | null;

		/** Gets the display name of the member in the consortium. */
		consortiumMemberDisplayName?: string | null;

		/** Gets the role of the member in the consortium. */
		consortiumRole?: string | null;

		/** Gets the dns endpoint of the blockchain member. */
		dns?: string | null;

		/** Gets or sets firewall rules */
		firewallRules?: Array<FirewallRule>;

		/** Sets the basic auth password of the blockchain member. */
		password?: string | null;

		/** Gets or sets the blockchain protocol. */
		protocol?: BlockchainMemberPropertiesProtocol | null;

		/** Gets or sets the blockchain member provision state. */
		provisioningState?: BlockchainMemberPropertiesProvisioningState | null;

		/** Gets the public key of the blockchain member (default transaction node). */
		publicKey?: string | null;

		/** Gets the Ethereum root contract address of the blockchain. */
		rootContractAddress?: string | null;

		/** Gets the auth user name of the blockchain member. */
		userName?: string | null;

		/** Payload of the blockchain member nodes Sku for a blockchain member. */
		validatorNodesSku?: BlockchainMemberNodesSku;
	}

	/** Payload of the blockchain member properties for a blockchain member. */
	export interface BlockchainMemberPropertiesFormProperties {

		/** Gets or sets the consortium for the blockchain member. */
		consortium: FormControl<string | null | undefined>,

		/** Gets the managed consortium management account address. */
		consortiumManagementAccountAddress: FormControl<string | null | undefined>,

		/** Sets the managed consortium management account password. */
		consortiumManagementAccountPassword: FormControl<string | null | undefined>,

		/** Gets the display name of the member in the consortium. */
		consortiumMemberDisplayName: FormControl<string | null | undefined>,

		/** Gets the role of the member in the consortium. */
		consortiumRole: FormControl<string | null | undefined>,

		/** Gets the dns endpoint of the blockchain member. */
		dns: FormControl<string | null | undefined>,

		/** Sets the basic auth password of the blockchain member. */
		password: FormControl<string | null | undefined>,

		/** Gets or sets the blockchain protocol. */
		protocol: FormControl<BlockchainMemberPropertiesProtocol | null | undefined>,

		/** Gets or sets the blockchain member provision state. */
		provisioningState: FormControl<BlockchainMemberPropertiesProvisioningState | null | undefined>,

		/** Gets the public key of the blockchain member (default transaction node). */
		publicKey: FormControl<string | null | undefined>,

		/** Gets the Ethereum root contract address of the blockchain. */
		rootContractAddress: FormControl<string | null | undefined>,

		/** Gets the auth user name of the blockchain member. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateBlockchainMemberPropertiesFormGroup() {
		return new FormGroup<BlockchainMemberPropertiesFormProperties>({
			consortium: new FormControl<string | null | undefined>(undefined),
			consortiumManagementAccountAddress: new FormControl<string | null | undefined>(undefined),
			consortiumManagementAccountPassword: new FormControl<string | null | undefined>(undefined),
			consortiumMemberDisplayName: new FormControl<string | null | undefined>(undefined),
			consortiumRole: new FormControl<string | null | undefined>(undefined),
			dns: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<BlockchainMemberPropertiesProtocol | null | undefined>(undefined),
			provisioningState: new FormControl<BlockchainMemberPropertiesProvisioningState | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			rootContractAddress: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ip range for firewall rules */
	export interface FirewallRule {

		/** Gets or sets the end IP address of the firewall rule range. */
		endIpAddress?: string | null;

		/** Gets or sets the name of the firewall rules. */
		ruleName?: string | null;

		/** Gets or sets the start IP address of the firewall rule range. */
		startIpAddress?: string | null;
	}

	/** Ip range for firewall rules */
	export interface FirewallRuleFormProperties {

		/** Gets or sets the end IP address of the firewall rule range. */
		endIpAddress: FormControl<string | null | undefined>,

		/** Gets or sets the name of the firewall rules. */
		ruleName: FormControl<string | null | undefined>,

		/** Gets or sets the start IP address of the firewall rule range. */
		startIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateFirewallRuleFormGroup() {
		return new FormGroup<FirewallRuleFormProperties>({
			endIpAddress: new FormControl<string | null | undefined>(undefined),
			ruleName: new FormControl<string | null | undefined>(undefined),
			startIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BlockchainMemberPropertiesProtocol { NotSpecified = 'NotSpecified', Parity = 'Parity', Quorum = 'Quorum', Corda = 'Corda' }

	export enum BlockchainMemberPropertiesProvisioningState { NotSpecified = 'NotSpecified', Updating = 'Updating', Deleting = 'Deleting', Succeeded = 'Succeeded', Failed = 'Failed', Stale = 'Stale' }


	/** Payload of the blockchain member nodes Sku for a blockchain member. */
	export interface BlockchainMemberNodesSku {

		/**
		 * Gets or sets the nodes capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity?: number | null;
	}

	/** Payload of the blockchain member nodes Sku for a blockchain member. */
	export interface BlockchainMemberNodesSkuFormProperties {

		/**
		 * Gets or sets the nodes capacity.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity: FormControl<number | null | undefined>,
	}
	export function CreateBlockchainMemberNodesSkuFormGroup() {
		return new FormGroup<BlockchainMemberNodesSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Blockchain member Sku in payload */
	export interface Sku {

		/** Gets or sets Sku name */
		name?: string | null;

		/** Gets or sets Sku tier */
		tier?: string | null;
	}

	/** Blockchain member Sku in payload */
	export interface SkuFormProperties {

		/** Gets or sets Sku name */
		name: FormControl<string | null | undefined>,

		/** Gets or sets Sku tier */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of the blockchain member payload which is exposed in the request/response of the resource provider. */
	export interface BlockchainMemberCollection {

		/**
		 * Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** Gets or sets the collection of blockchain members. */
		value?: Array<BlockchainMember>;
	}

	/** Collection of the blockchain member payload which is exposed in the request/response of the resource provider. */
	export interface BlockchainMemberCollectionFormProperties {

		/**
		 * Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBlockchainMemberCollectionFormGroup() {
		return new FormGroup<BlockchainMemberCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update the payload of the blockchain member properties for a blockchain member. */
	export interface BlockchainMemberPropertiesUpdate {

		/** Sets the managed consortium management account password. */
		consortiumManagementAccountPassword?: string | null;
	}

	/** Update the payload of the blockchain member properties for a blockchain member. */
	export interface BlockchainMemberPropertiesUpdateFormProperties {

		/** Sets the managed consortium management account password. */
		consortiumManagementAccountPassword: FormControl<string | null | undefined>,
	}
	export function CreateBlockchainMemberPropertiesUpdateFormGroup() {
		return new FormGroup<BlockchainMemberPropertiesUpdateFormProperties>({
			consortiumManagementAccountPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update the payload of the blockchain member which is exposed in the request/response of the resource provider. */
	export interface BlockchainMemberUpdate {

		/** Update the payload of the blockchain member properties for a blockchain member. */
		properties?: BlockchainMemberPropertiesUpdate;

		/** Tags of the service which is a list of key value pairs that describes the resource. */
		tags?: {[id: string]: string };
	}

	/** Update the payload of the blockchain member which is exposed in the request/response of the resource provider. */
	export interface BlockchainMemberUpdateFormProperties {

		/** Tags of the service which is a list of key value pairs that describes the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBlockchainMemberUpdateFormGroup() {
		return new FormGroup<BlockchainMemberUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Consortium payload */
	export interface Consortium {

		/** Gets or sets the blockchain member name. */
		name?: string | null;

		/** Gets or sets the protocol for the consortium. */
		protocol?: BlockchainMemberPropertiesProtocol | null;
	}

	/** Consortium payload */
	export interface ConsortiumFormProperties {

		/** Gets or sets the blockchain member name. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the protocol for the consortium. */
		protocol: FormControl<BlockchainMemberPropertiesProtocol | null | undefined>,
	}
	export function CreateConsortiumFormGroup() {
		return new FormGroup<ConsortiumFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<BlockchainMemberPropertiesProtocol | null | undefined>(undefined),
		});

	}


	/** Collection of the consortium payload. */
	export interface ConsortiumCollection {

		/** Gets or sets the collection of consortiums. */
		value?: Array<Consortium>;
	}

	/** Collection of the consortium payload. */
	export interface ConsortiumCollectionFormProperties {
	}
	export function CreateConsortiumCollectionFormGroup() {
		return new FormGroup<ConsortiumCollectionFormProperties>({
		});

	}


	/** Consortium approval */
	export interface ConsortiumMember {

		/** Gets the consortium member modified date. */
		dateModified?: Date | null;

		/** Gets the consortium member display name. */
		displayName?: string | null;

		/** Gets the consortium member join date. */
		joinDate?: Date | null;

		/** Gets the consortium member name. */
		name?: string | null;

		/** Gets the consortium member role. */
		role?: string | null;

		/** Gets the consortium member status. */
		status?: string | null;

		/** Gets the consortium member subscription id. */
		subscriptionId?: string | null;
	}

	/** Consortium approval */
	export interface ConsortiumMemberFormProperties {

		/** Gets the consortium member modified date. */
		dateModified: FormControl<Date | null | undefined>,

		/** Gets the consortium member display name. */
		displayName: FormControl<string | null | undefined>,

		/** Gets the consortium member join date. */
		joinDate: FormControl<Date | null | undefined>,

		/** Gets the consortium member name. */
		name: FormControl<string | null | undefined>,

		/** Gets the consortium member role. */
		role: FormControl<string | null | undefined>,

		/** Gets the consortium member status. */
		status: FormControl<string | null | undefined>,

		/** Gets the consortium member subscription id. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateConsortiumMemberFormGroup() {
		return new FormGroup<ConsortiumMemberFormProperties>({
			dateModified: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			joinDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of consortium payload. */
	export interface ConsortiumMemberCollection {

		/**
		 * Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** Gets or sets the collection of consortiums. */
		value?: Array<ConsortiumMember>;
	}

	/** Collection of consortium payload. */
	export interface ConsortiumMemberCollectionFormProperties {

		/**
		 * Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConsortiumMemberCollectionFormGroup() {
		return new FormGroup<ConsortiumMemberCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Name availability payload which is exposed in the response of the resource provider. */
	export interface NameAvailability {

		/** Gets or sets the message. */
		message?: string | null;

		/** Gets or sets the value indicating whether the name is available. */
		nameAvailable?: boolean | null;

		/** Gets or sets the name availability reason. */
		reason?: NameAvailabilityReason | null;
	}

	/** Name availability payload which is exposed in the response of the resource provider. */
	export interface NameAvailabilityFormProperties {

		/** Gets or sets the message. */
		message: FormControl<string | null | undefined>,

		/** Gets or sets the value indicating whether the name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Gets or sets the name availability reason. */
		reason: FormControl<NameAvailabilityReason | null | undefined>,
	}
	export function CreateNameAvailabilityFormGroup() {
		return new FormGroup<NameAvailabilityFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<NameAvailabilityReason | null | undefined>(undefined),
		});

	}

	export enum NameAvailabilityReason { NotSpecified = 'NotSpecified', AlreadyExists = 'AlreadyExists', Invalid = 'Invalid' }


	/** Name availability request payload which is exposed in the request of the resource provider. */
	export interface NameAvailabilityRequest {

		/** Gets or sets the name to check. */
		name?: string | null;

		/** Gets or sets the type of the resource to check. */
		type?: string | null;
	}

	/** Name availability request payload which is exposed in the request of the resource provider. */
	export interface NameAvailabilityRequestFormProperties {

		/** Gets or sets the name to check. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the type of the resource to check. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNameAvailabilityRequestFormGroup() {
		return new FormGroup<NameAvailabilityRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation result payload which is exposed in the response of the resource provider. */
	export interface OperationResult {

		/** Gets or sets the operation end time. */
		endTime?: Date | null;

		/** Gets or sets the operation name. */
		name?: string | null;

		/** Gets or sets the operation start time. */
		startTime?: Date | null;
	}

	/** Operation result payload which is exposed in the response of the resource provider. */
	export interface OperationResultFormProperties {

		/** Gets or sets the operation end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Gets or sets the operation name. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the operation start time. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateOperationResultFormGroup() {
		return new FormGroup<OperationResultFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The core properties of the resources. */
	export interface Resource {

		/** Fully qualified resource Id of the resource. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The type of the service - e.g. "Microsoft.Blockchain" */
		type?: string | null;
	}

	/** The core properties of the resources. */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id of the resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the service - e.g. "Microsoft.Blockchain" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation payload which is exposed in the response of the resource provider. */
	export interface ResourceProviderOperation {

		/** Operation display payload which is exposed in the response of the resource provider. */
		display?: ResourceProviderOperationDisplay;

		/** Gets or sets a value indicating whether the operation is a data action or not. */
		isDataAction?: boolean | null;

		/** Gets or sets the operation name. */
		name?: string | null;

		/** Gets or sets the origin. */
		origin?: string | null;
	}

	/** Operation payload which is exposed in the response of the resource provider. */
	export interface ResourceProviderOperationFormProperties {

		/** Gets or sets a value indicating whether the operation is a data action or not. */
		isDataAction: FormControl<boolean | null | undefined>,

		/** Gets or sets the operation name. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the origin. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationFormGroup() {
		return new FormGroup<ResourceProviderOperationFormProperties>({
			isDataAction: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation display payload which is exposed in the response of the resource provider. */
	export interface ResourceProviderOperationDisplay {

		/** Gets or sets the description of the provider for display purposes. */
		description?: string | null;

		/** Gets or sets the name of the operation for display purposes. */
		operation?: string | null;

		/** Gets or sets the name of the provider for display purposes. */
		provider?: string | null;

		/** Gets or sets the name of the resource type for display purposes. */
		resource?: string | null;
	}

	/** Operation display payload which is exposed in the response of the resource provider. */
	export interface ResourceProviderOperationDisplayFormProperties {

		/** Gets or sets the description of the provider for display purposes. */
		description: FormControl<string | null | undefined>,

		/** Gets or sets the name of the operation for display purposes. */
		operation: FormControl<string | null | undefined>,

		/** Gets or sets the name of the provider for display purposes. */
		provider: FormControl<string | null | undefined>,

		/** Gets or sets the name of the resource type for display purposes. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationDisplayFormGroup() {
		return new FormGroup<ResourceProviderOperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of operation payload which is exposed in the response of the resource provider. */
	export interface ResourceProviderOperationCollection {

		/**
		 * Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** Gets or sets the collection of operations. */
		value?: Array<ResourceProviderOperation>;
	}

	/** Collection of operation payload which is exposed in the response of the resource provider. */
	export interface ResourceProviderOperationCollectionFormProperties {

		/**
		 * Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationCollectionFormGroup() {
		return new FormGroup<ResourceProviderOperationCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource type Sku. */
	export interface ResourceTypeSku {

		/** Gets or sets the resource type */
		resourceType?: string | null;

		/** Gets or sets the Skus */
		skus?: Array<SkuSetting>;
	}

	/** Resource type Sku. */
	export interface ResourceTypeSkuFormProperties {

		/** Gets or sets the resource type */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceTypeSkuFormGroup() {
		return new FormGroup<ResourceTypeSkuFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sku Setting. */
	export interface SkuSetting {

		/** Gets or sets the locations. */
		locations?: Array<string>;

		/** Gets or sets the Sku name. */
		name?: string | null;

		/** Gets or sets the required features. */
		requiredFeatures?: Array<string>;

		/** Gets or sets the Sku tier. */
		tier?: string | null;
	}

	/** Sku Setting. */
	export interface SkuSettingFormProperties {

		/** Gets or sets the Sku name. */
		name: FormControl<string | null | undefined>,

		/** Gets or sets the Sku tier. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuSettingFormGroup() {
		return new FormGroup<SkuSettingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of the resource type Sku. */
	export interface ResourceTypeSkuCollection {

		/** Gets or sets the collection of resource type Sku. */
		value?: Array<ResourceTypeSku>;
	}

	/** Collection of the resource type Sku. */
	export interface ResourceTypeSkuCollectionFormProperties {
	}
	export function CreateResourceTypeSkuCollectionFormGroup() {
		return new FormGroup<ResourceTypeSkuCollectionFormProperties>({
		});

	}


	/** The resource model definition for a top level resource. */
	export interface TrackedResource {

		/** The GEO location of the blockchain service. */
		location?: string | null;

		/** Tags of the service which is a list of key value pairs that describes the resource. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a top level resource. */
	export interface TrackedResourceFormProperties {

		/** The GEO location of the blockchain service. */
		location: FormControl<string | null | undefined>,

		/** Tags of the service which is a list of key value pairs that describes the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Payload of the transaction node which is the request/response of the resource provider. */
	export interface TransactionNode {

		/** Gets or sets the transaction node location. */
		location?: string | null;

		/** Payload of transaction node properties payload in the transaction node payload. */
		properties?: TransactionNodeProperties;
	}

	/** Payload of the transaction node which is the request/response of the resource provider. */
	export interface TransactionNodeFormProperties {

		/** Gets or sets the transaction node location. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateTransactionNodeFormGroup() {
		return new FormGroup<TransactionNodeFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Payload of transaction node properties payload in the transaction node payload. */
	export interface TransactionNodeProperties {

		/** Gets or sets the transaction node dns endpoint. */
		dns?: string | null;

		/** Gets or sets the firewall rules. */
		firewallRules?: Array<FirewallRule>;

		/** Sets the transaction node dns endpoint basic auth password. */
		password?: string | null;

		/** Gets or sets the blockchain member provision state. */
		provisioningState?: TransactionNodePropertiesProvisioningState | null;

		/** Gets or sets the transaction node public key. */
		publicKey?: string | null;

		/** Gets or sets the transaction node dns endpoint basic auth user name. */
		userName?: string | null;
	}

	/** Payload of transaction node properties payload in the transaction node payload. */
	export interface TransactionNodePropertiesFormProperties {

		/** Gets or sets the transaction node dns endpoint. */
		dns: FormControl<string | null | undefined>,

		/** Sets the transaction node dns endpoint basic auth password. */
		password: FormControl<string | null | undefined>,

		/** Gets or sets the blockchain member provision state. */
		provisioningState: FormControl<TransactionNodePropertiesProvisioningState | null | undefined>,

		/** Gets or sets the transaction node public key. */
		publicKey: FormControl<string | null | undefined>,

		/** Gets or sets the transaction node dns endpoint basic auth user name. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateTransactionNodePropertiesFormGroup() {
		return new FormGroup<TransactionNodePropertiesFormProperties>({
			dns: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<TransactionNodePropertiesProvisioningState | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransactionNodePropertiesProvisioningState { NotSpecified = 'NotSpecified', Updating = 'Updating', Deleting = 'Deleting', Succeeded = 'Succeeded', Failed = 'Failed' }


	/** Collection of transaction node payload which is exposed in the request/response of the resource provider. */
	export interface TransactionNodeCollection {

		/**
		 * Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** Gets or sets the collection of transaction nodes. */
		value?: Array<TransactionNode>;
	}

	/** Collection of transaction node payload which is exposed in the request/response of the resource provider. */
	export interface TransactionNodeCollectionFormProperties {

		/**
		 * Gets or sets the URL, that the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTransactionNodeCollectionFormGroup() {
		return new FormGroup<TransactionNodeCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update the payload of the transaction node properties in the transaction node payload. */
	export interface TransactionNodePropertiesUpdate {

		/** Gets or sets the firewall rules. */
		firewallRules?: Array<FirewallRule>;

		/** Sets the transaction node dns endpoint basic auth password. */
		password?: string | null;
	}

	/** Update the payload of the transaction node properties in the transaction node payload. */
	export interface TransactionNodePropertiesUpdateFormProperties {

		/** Sets the transaction node dns endpoint basic auth password. */
		password: FormControl<string | null | undefined>,
	}
	export function CreateTransactionNodePropertiesUpdateFormGroup() {
		return new FormGroup<TransactionNodePropertiesUpdateFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update the transaction node payload which is exposed in the request/response of the resource provider. */
	export interface TransactionNodeUpdate {

		/** Update the payload of the transaction node properties in the transaction node payload. */
		properties?: TransactionNodePropertiesUpdate;
	}

	/** Update the transaction node payload which is exposed in the request/response of the resource provider. */
	export interface TransactionNodeUpdateFormProperties {
	}
	export function CreateTransactionNodeUpdateFormGroup() {
		return new FormGroup<TransactionNodeUpdateFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the available operations of Microsoft.Blockchain resource provider.
		 * Get providers/Microsoft.Blockchain/operations
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @return {ResourceProviderOperationCollection} Success
		 */
		Operations_List(api_version: Operations_ListApi_version): Observable<ResourceProviderOperationCollection> {
			return this.http.get<ResourceProviderOperationCollection>(this.baseUri + 'providers/Microsoft.Blockchain/operations?api_version=' + api_version, {});
		}

		/**
		 * Lists the blockchain members for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Blockchain/blockchainMembers
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @return {BlockchainMemberCollection} Success
		 */
		BlockchainMembers_ListAll(api_version: Operations_ListApi_version, subscriptionId: string): Observable<BlockchainMemberCollection> {
			return this.http.get<BlockchainMemberCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Blockchain/blockchainMembers?api_version=' + api_version, {});
		}

		/**
		 * Get Async operation result.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Blockchain/locations/{locationName}/blockchainMemberOperationResults/{operationId}
		 * @param {string} locationName Location name.
		 * @param {string} operationId Operation Id.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @return {OperationResult} Success
		 */
		BlockchainMemberOperationResults_Get(locationName: string, operationId: string, api_version: Operations_ListApi_version, subscriptionId: string): Observable<OperationResult> {
			return this.http.get<OperationResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Blockchain/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/blockchainMemberOperationResults/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + api_version, {});
		}

		/**
		 * To check whether a resource name is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Blockchain/locations/{locationName}/checkNameAvailability
		 * @param {string} locationName Location Name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {NameAvailabilityRequest} requestBody Name availability request payload.
		 * @return {NameAvailability} Success
		 */
		Locations_CheckNameAvailability(locationName: string, api_version: Operations_ListApi_version, subscriptionId: string, requestBody: NameAvailabilityRequest): Observable<NameAvailability> {
			return this.http.post<NameAvailability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Blockchain/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/checkNameAvailability&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the available consortiums for a subscription.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Blockchain/locations/{locationName}/listConsortiums
		 * @param {string} locationName Location Name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @return {ConsortiumCollection} Success
		 */
		Locations_ListConsortiums(locationName: string, api_version: Operations_ListApi_version, subscriptionId: string): Observable<ConsortiumCollection> {
			return this.http.post<ConsortiumCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Blockchain/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/listConsortiums&api_version=' + api_version, null, {});
		}

		/**
		 * Lists the Skus of the resource type.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Blockchain/skus
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @return {ResourceTypeSkuCollection} Success
		 */
		Skus_List(api_version: Operations_ListApi_version, subscriptionId: string): Observable<ResourceTypeSkuCollection> {
			return this.http.get<ResourceTypeSkuCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Blockchain/skus?api_version=' + api_version, {});
		}

		/**
		 * Lists the blockchain members for a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {BlockchainMemberCollection} Success
		 */
		BlockchainMembers_List(api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<BlockchainMemberCollection> {
			return this.http.get<BlockchainMemberCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers?api_version=' + api_version, {});
		}

		/**
		 * Get details about a blockchain member.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {BlockchainMember} Success
		 */
		BlockchainMembers_Get(blockchainMemberName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<BlockchainMember> {
			return this.http.get<BlockchainMember>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Create a blockchain member.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {BlockchainMember} requestBody Payload to create a blockchain member.
		 * @return {BlockchainMember} Success
		 */
		BlockchainMembers_Create(blockchainMemberName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, requestBody: BlockchainMember): Observable<BlockchainMember> {
			return this.http.put<BlockchainMember>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a blockchain member.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}
		 * @param {string} blockchainMemberName Blockchain member name
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {void} 
		 */
		BlockchainMembers_Delete(blockchainMemberName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a blockchain member.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {BlockchainMemberUpdate} requestBody Payload to update the blockchain member.
		 * @return {BlockchainMember} Success
		 */
		BlockchainMembers_Update(blockchainMemberName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, requestBody: BlockchainMemberUpdate): Observable<BlockchainMember> {
			return this.http.patch<BlockchainMember>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the consortium members for a blockchain member.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/consortiumMembers
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {ConsortiumMemberCollection} Success
		 */
		BlockchainMembers_ListConsortiumMembers(blockchainMemberName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<ConsortiumMemberCollection> {
			return this.http.get<ConsortiumMemberCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/consortiumMembers&api_version=' + api_version, {});
		}

		/**
		 * Lists the API keys for a blockchain member.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/listApiKeys
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {ApiKeyCollection} Success
		 */
		BlockchainMembers_ListApiKeys(blockchainMemberName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<ApiKeyCollection> {
			return this.http.post<ApiKeyCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/listApiKeys&api_version=' + api_version, null, {});
		}

		/**
		 * Regenerate the API keys for a blockchain member.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/regenerateApiKeys
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {ApiKey} requestBody api key to be regenerate
		 * @return {ApiKeyCollection} Success
		 */
		BlockchainMembers_ListRegenerateApiKeys(blockchainMemberName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, requestBody: ApiKey): Observable<ApiKeyCollection> {
			return this.http.post<ApiKeyCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/regenerateApiKeys&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the transaction nodes for a blockchain member.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {TransactionNodeCollection} Success
		 */
		TransactionNodes_List(blockchainMemberName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<TransactionNodeCollection> {
			return this.http.get<TransactionNodeCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/transactionNodes&api_version=' + api_version, {});
		}

		/**
		 * Get the details of the transaction node.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName}
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {string} transactionNodeName Transaction node name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {TransactionNode} Success
		 */
		TransactionNodes_Get(blockchainMemberName: string, transactionNodeName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<TransactionNode> {
			return this.http.get<TransactionNode>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/transactionNodes/' + (transactionNodeName == null ? '' : encodeURIComponent(transactionNodeName)) + '&api_version=' + api_version, {});
		}

		/**
		 * Create or update the transaction node.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName}
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {string} transactionNodeName Transaction node name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {TransactionNode} requestBody Payload to create the transaction node.
		 * @return {TransactionNode} Success
		 */
		TransactionNodes_Create(blockchainMemberName: string, transactionNodeName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, requestBody: TransactionNode): Observable<TransactionNode> {
			return this.http.put<TransactionNode>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/transactionNodes/' + (transactionNodeName == null ? '' : encodeURIComponent(transactionNodeName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the transaction node.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName}
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {string} transactionNodeName Transaction node name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {void} 
		 */
		TransactionNodes_Delete(blockchainMemberName: string, transactionNodeName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/transactionNodes/' + (transactionNodeName == null ? '' : encodeURIComponent(transactionNodeName)) + '&api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the transaction node.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName}
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {string} transactionNodeName Transaction node name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {TransactionNodeUpdate} requestBody Payload to create the transaction node.
		 * @return {TransactionNode} Success
		 */
		TransactionNodes_Update(blockchainMemberName: string, transactionNodeName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, requestBody: TransactionNodeUpdate): Observable<TransactionNode> {
			return this.http.patch<TransactionNode>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/transactionNodes/' + (transactionNodeName == null ? '' : encodeURIComponent(transactionNodeName)) + '&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the API keys for the transaction node.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName}/listApiKeys
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {string} transactionNodeName Transaction node name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {ApiKeyCollection} Success
		 */
		TransactionNodes_ListApiKeys(blockchainMemberName: string, transactionNodeName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<ApiKeyCollection> {
			return this.http.post<ApiKeyCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/transactionNodes/' + (transactionNodeName == null ? '' : encodeURIComponent(transactionNodeName)) + '/listApiKeys&api_version=' + api_version, null, {});
		}

		/**
		 * Regenerate the API keys for the blockchain member.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Blockchain/blockchainMembers/{blockchainMemberName}/transactionNodes/{transactionNodeName}/regenerateApiKeys
		 * @param {string} blockchainMemberName Blockchain member name.
		 * @param {string} transactionNodeName Transaction node name.
		 * @param {Operations_ListApi_version} api_version Client API Version.
		 * @param {string} subscriptionId Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {ApiKey} requestBody api key to be regenerated
		 * @return {ApiKeyCollection} Success
		 */
		TransactionNodes_ListRegenerateApiKeys(blockchainMemberName: string, transactionNodeName: string, api_version: Operations_ListApi_version, subscriptionId: string, resourceGroupName: string, requestBody: ApiKey): Observable<ApiKeyCollection> {
			return this.http.post<ApiKeyCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Blockchain/blockchainMembers/' + (blockchainMemberName == null ? '' : encodeURIComponent(blockchainMemberName)) + '/transactionNodes/' + (transactionNodeName == null ? '' : encodeURIComponent(transactionNodeName)) + '/regenerateApiKeys&api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Operations_ListApi_version { '2018-06-01-preview' = '2018-06-01-preview' }

}

