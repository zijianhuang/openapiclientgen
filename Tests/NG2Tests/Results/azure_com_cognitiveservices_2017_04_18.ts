import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Check Domain availability parameter. */
	export interface CheckDomainAvailabilityParameter {

		/**
		 * The subdomain name to use.
		 * Required
		 */
		subdomainName: string;

		/**
		 * The Type of the resource.
		 * Required
		 */
		type: string;
	}

	/** Check Domain availability parameter. */
	export interface CheckDomainAvailabilityParameterFormProperties {

		/**
		 * The subdomain name to use.
		 * Required
		 */
		subdomainName: FormControl<string | null | undefined>,

		/**
		 * The Type of the resource.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckDomainAvailabilityParameterFormGroup() {
		return new FormGroup<CheckDomainAvailabilityParameterFormProperties>({
			subdomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Check Domain availability result. */
	export interface CheckDomainAvailabilityResult {

		/** Indicates the given SKU is available or not. */
		isSubdomainAvailable?: boolean | null;

		/** Reason why the SKU is not available. */
		reason?: string | null;

		/** The subdomain name to use. */
		subdomainName?: string | null;

		/** The Type of the resource. */
		type?: string | null;
	}

	/** Check Domain availability result. */
	export interface CheckDomainAvailabilityResultFormProperties {

		/** Indicates the given SKU is available or not. */
		isSubdomainAvailable: FormControl<boolean | null | undefined>,

		/** Reason why the SKU is not available. */
		reason: FormControl<string | null | undefined>,

		/** The subdomain name to use. */
		subdomainName: FormControl<string | null | undefined>,

		/** The Type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckDomainAvailabilityResultFormGroup() {
		return new FormGroup<CheckDomainAvailabilityResultFormProperties>({
			isSubdomainAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			subdomainName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Check SKU availability parameter. */
	export interface CheckSkuAvailabilityParameter {

		/**
		 * Required. Indicates the type of cognitive service account.
		 * Required
		 */
		kind: string;

		/**
		 * The SKU of the resource.
		 * Required
		 */
		skus: Array<string>;

		/**
		 * The Type of the resource.
		 * Required
		 */
		type: string;
	}

	/** Check SKU availability parameter. */
	export interface CheckSkuAvailabilityParameterFormProperties {

		/**
		 * Required. Indicates the type of cognitive service account.
		 * Required
		 */
		kind: FormControl<string | null | undefined>,

		/**
		 * The Type of the resource.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckSkuAvailabilityParameterFormGroup() {
		return new FormGroup<CheckSkuAvailabilityParameterFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Check SKU availability result. */
	export interface CheckSkuAvailabilityResult {

		/** Required. Indicates the type of cognitive service account. */
		kind?: string | null;

		/** Additional error message. */
		message?: string | null;

		/** Reason why the SKU is not available. */
		reason?: string | null;

		/** Indicates the given SKU is available or not. */
		skuAvailable?: boolean | null;

		/** The name of SKU. */
		skuName?: string | null;

		/** The Type of the resource. */
		type?: string | null;
	}

	/** Check SKU availability result. */
	export interface CheckSkuAvailabilityResultFormProperties {

		/** Required. Indicates the type of cognitive service account. */
		kind: FormControl<string | null | undefined>,

		/** Additional error message. */
		message: FormControl<string | null | undefined>,

		/** Reason why the SKU is not available. */
		reason: FormControl<string | null | undefined>,

		/** Indicates the given SKU is available or not. */
		skuAvailable: FormControl<boolean | null | undefined>,

		/** The name of SKU. */
		skuName: FormControl<string | null | undefined>,

		/** The Type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckSkuAvailabilityResultFormGroup() {
		return new FormGroup<CheckSkuAvailabilityResultFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			skuAvailable: new FormControl<boolean | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Check SKU availability result list. */
	export interface CheckSkuAvailabilityResultList {

		/** Check SKU availability result list. */
		value?: Array<CheckSkuAvailabilityResult>;
	}

	/** Check SKU availability result list. */
	export interface CheckSkuAvailabilityResultListFormProperties {
	}
	export function CreateCheckSkuAvailabilityResultListFormGroup() {
		return new FormGroup<CheckSkuAvailabilityResultListFormProperties>({
		});

	}


	/** Cognitive Services Account is an Azure resource representing the provisioned account, its type, location and SKU. */
	export interface CognitiveServicesAccount {

		/** Entity Tag */
		etag?: string | null;

		/** The id of the created account */
		id?: string | null;

		/** Required. Indicates the type of cognitive service account. */
		kind?: string | null;

		/** The location of the resource */
		location?: string | null;

		/** The name of the created account */
		name?: string | null;

		/** Properties of Cognitive Services account. */
		properties?: CognitiveServicesAccountProperties;

		/** The SKU of the cognitive services account. */
		sku?: Sku;

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** Cognitive Services Account is an Azure resource representing the provisioned account, its type, location and SKU. */
	export interface CognitiveServicesAccountFormProperties {

		/** Entity Tag */
		etag: FormControl<string | null | undefined>,

		/** The id of the created account */
		id: FormControl<string | null | undefined>,

		/** Required. Indicates the type of cognitive service account. */
		kind: FormControl<string | null | undefined>,

		/** The location of the resource */
		location: FormControl<string | null | undefined>,

		/** The name of the created account */
		name: FormControl<string | null | undefined>,

		/** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCognitiveServicesAccountFormGroup() {
		return new FormGroup<CognitiveServicesAccountFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The api properties for special APIs. */
	export interface CognitiveServicesAccountApiProperties {

		/**
		 * (Personalization Only) The flag to enable statistics of Bing Search.
		 * Max length: 1000
		 */
		eventHubConnectionString?: string | null;

		/** (QnAMaker Only) The runtime endpoint of QnAMaker. */
		qnaRuntimeEndpoint?: string | null;

		/** (Bing Search Only) The flag to enable statistics of Bing Search. */
		statisticsEnabled?: boolean | null;

		/**
		 * (Personalization Only) The storage account connection string.
		 * Max length: 1000
		 */
		storageAccountConnectionString?: string | null;
	}

	/** The api properties for special APIs. */
	export interface CognitiveServicesAccountApiPropertiesFormProperties {

		/**
		 * (Personalization Only) The flag to enable statistics of Bing Search.
		 * Max length: 1000
		 */
		eventHubConnectionString: FormControl<string | null | undefined>,

		/** (QnAMaker Only) The runtime endpoint of QnAMaker. */
		qnaRuntimeEndpoint: FormControl<string | null | undefined>,

		/** (Bing Search Only) The flag to enable statistics of Bing Search. */
		statisticsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * (Personalization Only) The storage account connection string.
		 * Max length: 1000
		 */
		storageAccountConnectionString: FormControl<string | null | undefined>,
	}
	export function CreateCognitiveServicesAccountApiPropertiesFormGroup() {
		return new FormGroup<CognitiveServicesAccountApiPropertiesFormProperties>({
			eventHubConnectionString: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^( *)Endpoint=sb://(.*);( *)SharedAccessKeyName=(.*);( *)SharedAccessKey=(.*)$')]),
			qnaRuntimeEndpoint: new FormControl<string | null | undefined>(undefined),
			statisticsEnabled: new FormControl<boolean | null | undefined>(undefined),
			storageAccountConnectionString: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('^(( *)DefaultEndpointsProtocol=(http|https)( *);( *))?AccountName=(.*)AccountKey=(.*)EndpointSuffix=(.*)$')]),
		});

	}


	/** The list of cognitive services accounts operation response. */
	export interface CognitiveServicesAccountEnumerateSkusResult {

		/** Gets the list of Cognitive Services accounts and their properties. */
		value?: Array<CognitiveServicesResourceAndSku>;
	}

	/** The list of cognitive services accounts operation response. */
	export interface CognitiveServicesAccountEnumerateSkusResultFormProperties {
	}
	export function CreateCognitiveServicesAccountEnumerateSkusResultFormGroup() {
		return new FormGroup<CognitiveServicesAccountEnumerateSkusResultFormProperties>({
		});

	}


	/** Cognitive Services resource type and SKU. */
	export interface CognitiveServicesResourceAndSku {

		/** Resource Namespace and Type */
		resourceType?: string | null;

		/** The SKU of the cognitive services account. */
		sku?: Sku;
	}

	/** Cognitive Services resource type and SKU. */
	export interface CognitiveServicesResourceAndSkuFormProperties {

		/** Resource Namespace and Type */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateCognitiveServicesResourceAndSkuFormGroup() {
		return new FormGroup<CognitiveServicesResourceAndSkuFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The access keys for the cognitive services account. */
	export interface CognitiveServicesAccountKeys {

		/** Gets the value of key 1. */
		key1?: string | null;

		/** Gets the value of key 2. */
		key2?: string | null;
	}

	/** The access keys for the cognitive services account. */
	export interface CognitiveServicesAccountKeysFormProperties {

		/** Gets the value of key 1. */
		key1: FormControl<string | null | undefined>,

		/** Gets the value of key 2. */
		key2: FormControl<string | null | undefined>,
	}
	export function CreateCognitiveServicesAccountKeysFormGroup() {
		return new FormGroup<CognitiveServicesAccountKeysFormProperties>({
			key1: new FormControl<string | null | undefined>(undefined),
			key2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of cognitive services accounts operation response. */
	export interface CognitiveServicesAccountListResult {

		/** The link used to get the next page of accounts. */
		nextLink?: string | null;

		/** Gets the list of Cognitive Services accounts and their properties. */
		value?: Array<CognitiveServicesAccount>;
	}

	/** The list of cognitive services accounts operation response. */
	export interface CognitiveServicesAccountListResultFormProperties {

		/** The link used to get the next page of accounts. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCognitiveServicesAccountListResultFormGroup() {
		return new FormGroup<CognitiveServicesAccountListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of Cognitive Services account. */
	export interface CognitiveServicesAccountProperties {

		/** The api properties for special APIs. */
		apiProperties?: CognitiveServicesAccountApiProperties;

		/** Optional subdomain name used for token-based authentication. */
		customSubDomainName?: string | null;

		/** Endpoint of the created account. */
		endpoint?: string | null;

		/** The internal identifier. */
		internalId?: string | null;

		/** A set of rules governing the network accessibility. */
		networkAcls?: NetworkRuleSet;

		/** Gets the status of the cognitive services account at the time the operation was called. */
		provisioningState?: CognitiveServicesAccountPropertiesProvisioningState | null;
	}

	/** Properties of Cognitive Services account. */
	export interface CognitiveServicesAccountPropertiesFormProperties {

		/** Optional subdomain name used for token-based authentication. */
		customSubDomainName: FormControl<string | null | undefined>,

		/** Endpoint of the created account. */
		endpoint: FormControl<string | null | undefined>,

		/** The internal identifier. */
		internalId: FormControl<string | null | undefined>,

		/** Gets the status of the cognitive services account at the time the operation was called. */
		provisioningState: FormControl<CognitiveServicesAccountPropertiesProvisioningState | null | undefined>,
	}
	export function CreateCognitiveServicesAccountPropertiesFormGroup() {
		return new FormGroup<CognitiveServicesAccountPropertiesFormProperties>({
			customSubDomainName: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			internalId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<CognitiveServicesAccountPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum CognitiveServicesAccountPropertiesProvisioningState { Creating = 'Creating', ResolvingDNS = 'ResolvingDNS', Moving = 'Moving', Deleting = 'Deleting', Succeeded = 'Succeeded', Failed = 'Failed' }


	/** Cognitive Services error object. */
	export interface Error {

		/** Cognitive Services error body. */
		error?: ErrorBody;
	}

	/** Cognitive Services error object. */
	export interface ErrorFormProperties {
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
		});

	}


	/** Cognitive Services error body. */
	export interface ErrorBody {

		/**
		 * error code
		 * Required
		 */
		code: string;

		/**
		 * error message
		 * Required
		 */
		message: string;
	}

	/** Cognitive Services error body. */
	export interface ErrorBodyFormProperties {

		/**
		 * error code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorBodyFormGroup() {
		return new FormGroup<ErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A rule governing the accessibility from a specific ip address or ip range. */
	export interface IpRule {

		/**
		 * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
		 * Required
		 */
		value: string;
	}

	/** A rule governing the accessibility from a specific ip address or ip range. */
	export interface IpRuleFormProperties {

		/**
		 * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIpRuleFormGroup() {
		return new FormGroup<IpRuleFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A metric name. */
	export interface MetricName {

		/** The friendly name of the metric. */
		localizedValue?: string | null;

		/** The name of the metric. */
		value?: string | null;
	}

	/** A metric name. */
	export interface MetricNameFormProperties {

		/** The friendly name of the metric. */
		localizedValue: FormControl<string | null | undefined>,

		/** The name of the metric. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetricNameFormGroup() {
		return new FormGroup<MetricNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of rules governing the network accessibility. */
	export interface NetworkRuleSet {

		/** The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated. */
		defaultAction?: NetworkRuleSetDefaultAction | null;

		/** The list of IP address rules. */
		ipRules?: Array<IpRule>;

		/** The list of virtual network rules. */
		virtualNetworkRules?: Array<VirtualNetworkRule>;
	}

	/** A set of rules governing the network accessibility. */
	export interface NetworkRuleSetFormProperties {

		/** The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated. */
		defaultAction: FormControl<NetworkRuleSetDefaultAction | null | undefined>,
	}
	export function CreateNetworkRuleSetFormGroup() {
		return new FormGroup<NetworkRuleSetFormProperties>({
			defaultAction: new FormControl<NetworkRuleSetDefaultAction | null | undefined>(undefined),
		});

	}

	export enum NetworkRuleSetDefaultAction { Allow = 'Allow', Deny = 'Deny' }


	/** A rule governing the accessibility from a specific virtual network. */
	export interface VirtualNetworkRule {

		/**
		 * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
		 * Required
		 */
		id: string;

		/** Ignore missing vnet service endpoint or not. */
		ignoreMissingVnetServiceEndpoint?: boolean | null;

		/** Gets the state of virtual network rule. */
		state?: string | null;
	}

	/** A rule governing the accessibility from a specific virtual network. */
	export interface VirtualNetworkRuleFormProperties {

		/**
		 * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Ignore missing vnet service endpoint or not. */
		ignoreMissingVnetServiceEndpoint: FormControl<boolean | null | undefined>,

		/** Gets the state of virtual network rule. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkRuleFormGroup() {
		return new FormGroup<VirtualNetworkRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ignoreMissingVnetServiceEndpoint: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by Cognitive Services. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Microsoft Cognitive Services. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The operation supported by Cognitive Services. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft Cognitive Services. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by Cognitive Services. */
	export interface OperationEntity {

		/** The operation supported by Cognitive Services. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;

		/** The origin of the operation. */
		origin?: string | null;

		/** Additional properties. */
		properties?: string | null;
	}

	/** The operation supported by Cognitive Services. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,

		/** The origin of the operation. */
		origin: FormControl<string | null | undefined>,

		/** Additional properties. */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of cognitive services accounts operation response. */
	export interface OperationEntityListResult {

		/** The link used to get the next page of operations. */
		nextLink?: string | null;

		/** The list of operations. */
		value?: Array<OperationEntity>;
	}

	/** The list of cognitive services accounts operation response. */
	export interface OperationEntityListResultFormProperties {

		/** The link used to get the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityListResultFormGroup() {
		return new FormGroup<OperationEntityListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Regenerate key parameters. */
	export interface RegenerateKeyParameters {

		/**
		 * key name to generate (Key1|Key2)
		 * Required
		 */
		keyName: RegenerateKeyParametersKeyName;
	}

	/** Regenerate key parameters. */
	export interface RegenerateKeyParametersFormProperties {

		/**
		 * key name to generate (Key1|Key2)
		 * Required
		 */
		keyName: FormControl<RegenerateKeyParametersKeyName | null | undefined>,
	}
	export function CreateRegenerateKeyParametersFormGroup() {
		return new FormGroup<RegenerateKeyParametersFormProperties>({
			keyName: new FormControl<RegenerateKeyParametersKeyName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegenerateKeyParametersKeyName { Key1 = 'Key1', Key2 = 'Key2' }


	/** Describes an available Cognitive Services SKU. */
	export interface ResourceSku {

		/** The Kind of resources that are supported in this SKU. */
		kind?: string | null;

		/** The set of locations that the SKU is available. */
		locations?: Array<string>;

		/** The name of SKU. */
		name?: string | null;

		/** The type of resource the SKU applies to. */
		resourceType?: string | null;

		/** The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. */
		restrictions?: Array<ResourceSkuRestrictions>;

		/** Specifies the tier of Cognitive Services account. */
		tier?: string | null;
	}

	/** Describes an available Cognitive Services SKU. */
	export interface ResourceSkuFormProperties {

		/** The Kind of resources that are supported in this SKU. */
		kind: FormControl<string | null | undefined>,

		/** The name of SKU. */
		name: FormControl<string | null | undefined>,

		/** The type of resource the SKU applies to. */
		resourceType: FormControl<string | null | undefined>,

		/** Specifies the tier of Cognitive Services account. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkuFormGroup() {
		return new FormGroup<ResourceSkuFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes restrictions of a SKU. */
	export interface ResourceSkuRestrictions {

		/** The reason for restriction. */
		reasonCode?: ResourceSkuRestrictionsReasonCode | null;
		restrictionInfo?: ResourceSkuRestrictionInfo;

		/** The type of restrictions. */
		type?: ResourceSkuRestrictionsType | null;

		/** The value of restrictions. If the restriction type is set to location. This would be different locations where the SKU is restricted. */
		values?: Array<string>;
	}

	/** Describes restrictions of a SKU. */
	export interface ResourceSkuRestrictionsFormProperties {

		/** The reason for restriction. */
		reasonCode: FormControl<ResourceSkuRestrictionsReasonCode | null | undefined>,

		/** The type of restrictions. */
		type: FormControl<ResourceSkuRestrictionsType | null | undefined>,
	}
	export function CreateResourceSkuRestrictionsFormGroup() {
		return new FormGroup<ResourceSkuRestrictionsFormProperties>({
			reasonCode: new FormControl<ResourceSkuRestrictionsReasonCode | null | undefined>(undefined),
			type: new FormControl<ResourceSkuRestrictionsType | null | undefined>(undefined),
		});

	}

	export enum ResourceSkuRestrictionsReasonCode { QuotaId = 'QuotaId', NotAvailableForSubscription = 'NotAvailableForSubscription' }

	export enum ResourceSkuRestrictionsType { Location = 'Location', Zone = 'Zone' }

	export interface ResourceSkuRestrictionInfo {

		/** Locations where the SKU is restricted */
		locations?: Array<string>;

		/** List of availability zones where the SKU is restricted. */
		zones?: Array<string>;
	}
	export interface ResourceSkuRestrictionInfoFormProperties {
	}
	export function CreateResourceSkuRestrictionInfoFormGroup() {
		return new FormGroup<ResourceSkuRestrictionInfoFormProperties>({
		});

	}


	/** The Get Skus operation response. */
	export interface ResourceSkusResult {

		/** The uri to fetch the next page of Skus. */
		nextLink?: string | null;

		/**
		 * The list of skus available for the subscription.
		 * Required
		 */
		value: Array<ResourceSku>;
	}

	/** The Get Skus operation response. */
	export interface ResourceSkusResultFormProperties {

		/** The uri to fetch the next page of Skus. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkusResultFormGroup() {
		return new FormGroup<ResourceSkusResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SKU of the cognitive services account. */
	export interface Sku {

		/**
		 * The name of SKU.
		 * Required
		 */
		name: string;

		/** Gets the sku tier. This is based on the SKU name. */
		tier?: SkuTier | null;
	}

	/** The SKU of the cognitive services account. */
	export interface SkuFormProperties {

		/**
		 * The name of SKU.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Gets the sku tier. This is based on the SKU name. */
		tier: FormControl<SkuTier | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<SkuTier | null | undefined>(undefined),
		});

	}

	export enum SkuTier { Free = 'Free', Standard = 'Standard', Premium = 'Premium' }


	/** The unit of the metric. */
	export enum UnitType { Count = 'Count', Bytes = 'Bytes', Seconds = 'Seconds', Percent = 'Percent', CountPerSecond = 'CountPerSecond', BytesPerSecond = 'BytesPerSecond', Milliseconds = 'Milliseconds' }


	/** The usage data for a usage request. */
	export interface Usage {

		/** Current value for this metric. */
		currentValue?: number | null;

		/** Maximum value for this metric. */
		limit?: number | null;

		/** A metric name. */
		name?: MetricName;

		/** Next reset time for current quota. */
		nextResetTime?: string | null;

		/** The quota period used to summarize the usage values. */
		quotaPeriod?: string | null;

		/** Cognitive Services account quota usage status. */
		status?: UsageStatus | null;

		/** The unit of the metric. */
		unit?: UnitType | null;
	}

	/** The usage data for a usage request. */
	export interface UsageFormProperties {

		/** Current value for this metric. */
		currentValue: FormControl<number | null | undefined>,

		/** Maximum value for this metric. */
		limit: FormControl<number | null | undefined>,

		/** Next reset time for current quota. */
		nextResetTime: FormControl<string | null | undefined>,

		/** The quota period used to summarize the usage values. */
		quotaPeriod: FormControl<string | null | undefined>,

		/** Cognitive Services account quota usage status. */
		status: FormControl<UsageStatus | null | undefined>,

		/** The unit of the metric. */
		unit: FormControl<UnitType | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			nextResetTime: new FormControl<string | null | undefined>(undefined),
			quotaPeriod: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<UsageStatus | null | undefined>(undefined),
			unit: new FormControl<UnitType | null | undefined>(undefined),
		});

	}

	export enum UsageStatus { Included = 'Included', Blocked = 'Blocked', InOverage = 'InOverage', Unknown = 'Unknown' }


	/** The response to a list usage request. */
	export interface UsagesResult {

		/** The list of usages for Cognitive Service account. */
		value?: Array<Usage>;
	}

	/** The response to a list usage request. */
	export interface UsagesResultFormProperties {
	}
	export function CreateUsagesResultFormGroup() {
		return new FormGroup<UsagesResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the available Cognitive Services account operations.
		 * Get providers/Microsoft.CognitiveServices/operations
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @return {OperationEntityListResult} OK.
		 */
		Operations_List(api_version: string): Observable<OperationEntityListResult> {
			return this.http.get<OperationEntityListResult>(this.baseUri + 'providers/Microsoft.CognitiveServices/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all the resources of a particular type belonging to a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/accounts
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {CognitiveServicesAccountListResult} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses. If a resource provider does not support paging, it should return the same body but leave nextLink empty for future compatibility.
		 * For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section. 
		 */
		Accounts_List(api_version: string, subscriptionId: string): Observable<CognitiveServicesAccountListResult> {
			return this.http.get<CognitiveServicesAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CognitiveServices/accounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check whether a domain is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/checkDomainAvailability
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {CheckDomainAvailabilityParameter} requestBody Check Domain Availability parameter.
		 * @return {CheckDomainAvailabilityResult} OK.
		 */
		CheckDomainAvailability(subscriptionId: string, api_version: string, requestBody: CheckDomainAvailabilityParameter): Observable<CheckDomainAvailabilityResult> {
			return this.http.post<CheckDomainAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CognitiveServices/checkDomainAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check available SKUs.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/locations/{location}/checkSkuAvailability
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} location Resource location.
		 * @param {CheckSkuAvailabilityParameter} requestBody Check SKU Availability POST body.
		 * @return {CheckSkuAvailabilityResultList} OK.
		 */
		CheckSkuAvailability(subscriptionId: string, api_version: string, location: string, requestBody: CheckSkuAvailabilityParameter): Observable<CheckSkuAvailabilityResultList> {
			return this.http.post<CheckSkuAvailabilityResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CognitiveServices/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkSkuAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the list of Microsoft.CognitiveServices SKUs available for your Subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/skus
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {ResourceSkusResult} OK
		 */
		ResourceSkus_List(api_version: string, subscriptionId: string): Observable<ResourceSkusResult> {
			return this.http.get<ResourceSkusResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CognitiveServices/skus?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all the resources of a particular type belonging to a resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @return {CognitiveServicesAccountListResult} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with "value" property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility.
		 * The nextLink should be implemented using following query parameters:
		 * · skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink.
		 * · top: the optional client query parameter which defines the maximum number of records to be returned by the server.
		 * Implementation details:
		 * · NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query. 
		 * · Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response. 
		 * Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed.
		 */
		Accounts_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<CognitiveServicesAccountListResult> {
			return this.http.get<CognitiveServicesAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CognitiveServices/accounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a Cognitive Services account specified by the parameters.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} accountName The name of Cognitive Services account.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {CognitiveServicesAccount} The resource provider should return 200 (OK) to indicate that the operation completed successfully.
		 * For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section. The only GET specific properties are "name," "type" and "id."
		 * Field	Description
		 * Kind	required.  String.
		 * 	The API set for this API account. It can be 
		 * 	· a single API, for example: Face API, Vision API, Speech API. 
		 * 	a bundle of APIs:  Face + Speech, Vision + Emotion, etc.
		 * sku.name	Required.
		 * 	The pricing tier/plan of this API. Could be: 
		 * 	F0 - Free
		 * 	B0 - Basic
		 * 	S0 - Standard
		 * 	P0 - Premium
		 */
		Accounts_GetProperties(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<CognitiveServicesAccount> {
			return this.http.get<CognitiveServicesAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CognitiveServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create Cognitive Services Account. Accounts is a resource group wide resource type. It holds the keys for developer to access intelligent APIs. It's also the resource type for billing.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} accountName The name of Cognitive Services account.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {CognitiveServicesAccount} requestBody The parameters to provide for the created account.
		 * @return {CognitiveServicesAccount} If resource is created successfully or already existed, the service should return 200 (OK).
		 */
		Accounts_Create(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: CognitiveServicesAccount): Observable<CognitiveServicesAccount> {
			return this.http.put<CognitiveServicesAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CognitiveServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Cognitive Services account from the resource group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} accountName The name of Cognitive Services account.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {void} A 200 (OK) should be returned if the object exists and was deleted successfully;
		 */
		Accounts_Delete(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CognitiveServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Cognitive Services account
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} accountName The name of Cognitive Services account.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {CognitiveServicesAccount} requestBody The parameters to provide for the created account.
		 * @return {CognitiveServicesAccount} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		Accounts_Update(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: CognitiveServicesAccount): Observable<CognitiveServicesAccount> {
			return this.http.patch<CognitiveServicesAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CognitiveServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the account keys for the specified Cognitive Services account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/listKeys
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} accountName The name of Cognitive Services account.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {CognitiveServicesAccountKeys} Returns with a response body containing the subscription keys for the resource: key1
		 * The first API key for authentication when client calls the API endpoint.
		 * key2
		 * The second API key for authentication when client calls the API endpoint.
		 */
		Accounts_ListKeys(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<CognitiveServicesAccountKeys> {
			return this.http.post<CognitiveServicesAccountKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CognitiveServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates the specified account key for the specified Cognitive Services account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/regenerateKey
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} accountName The name of Cognitive Services account.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {RegenerateKeyParameters} requestBody regenerate key parameters.
		 * @return {CognitiveServicesAccountKeys} 
		 */
		Accounts_RegenerateKey(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: RegenerateKeyParameters): Observable<CognitiveServicesAccountKeys> {
			return this.http.post<CognitiveServicesAccountKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CognitiveServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/regenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List available SKUs for the requested Cognitive Services account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/skus
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} accountName The name of Cognitive Services account.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {CognitiveServicesAccountEnumerateSkusResult} The resource provider should return 200 (OK) to indicate that the operation completed successfully.
		 * For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section. The only GET specific properties are "name," "type" and "id."
		 * Field	Description
		 * sku	Required, object
		 * 	The exact set of keys that define this sku. This matches the fields on the respective resource.
		 * sku.name	Required, string
		 * 	The name of the SKU. This is typically a letter + number code, such as A0 or P3
		 * sku.tier	Required, string
		 * 	The tier of this particular SKU. Typically one of:
		 * 	· Free
		 * 	· Basic
		 * 	· Standard
		 * 	· Premium
		 */
		Accounts_ListSkus(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<CognitiveServicesAccountEnumerateSkusResult> {
			return this.http.get<CognitiveServicesAccountEnumerateSkusResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CognitiveServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get usages for the requested Cognitive Services account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/usages
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} accountName The name of Cognitive Services account.
		 * @param {string} api_version Version of the API to be used with the client request. Current version is 2017-04-18
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} filter An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names).
		 * @return {UsagesResult} The usages for Cognitive Services account were retrieved successfully.
		 */
		Accounts_GetUsages(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, filter: string | null | undefined): Observable<UsagesResult> {
			return this.http.get<UsagesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CognitiveServices/accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}
	}

}

