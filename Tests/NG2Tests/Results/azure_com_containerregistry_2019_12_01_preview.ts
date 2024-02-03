import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The agent that initiated the event. For most situations, this could be from the authorization context of the request. */
	export interface Actor {

		/** The subject or username associated with the request context that generated the event. */
		name?: string | null;
	}

	/** The agent that initiated the event. For most situations, this could be from the authorization context of the request. */
	export interface ActorFormProperties {

		/** The subject or username associated with the request context that generated the event. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateActorFormGroup() {
		return new FormGroup<ActorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of service URI and custom headers for the webhook. */
	export interface CallbackConfig {

		/** Custom headers that will be added to the webhook notifications. */
		customHeaders?: {[id: string]: string };

		/**
		 * The service URI for the webhook to post notifications.
		 * Required
		 */
		serviceUri: string;
	}

	/** The configuration of service URI and custom headers for the webhook. */
	export interface CallbackConfigFormProperties {

		/** Custom headers that will be added to the webhook notifications. */
		customHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The service URI for the webhook to post notifications.
		 * Required
		 */
		serviceUri: FormControl<string | null | undefined>,
	}
	export function CreateCallbackConfigFormGroup() {
		return new FormGroup<CallbackConfigFormProperties>({
			customHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EncryptionProperty {
		keyVaultProperties?: KeyVaultProperties;

		/** Indicates whether or not the encryption is enabled for container registry. */
		status?: EncryptionPropertyStatus | null;
	}
	export interface EncryptionPropertyFormProperties {

		/** Indicates whether or not the encryption is enabled for container registry. */
		status: FormControl<EncryptionPropertyStatus | null | undefined>,
	}
	export function CreateEncryptionPropertyFormGroup() {
		return new FormGroup<EncryptionPropertyFormProperties>({
			status: new FormControl<EncryptionPropertyStatus | null | undefined>(undefined),
		});

	}

	export interface KeyVaultProperties {

		/** The client id of the identity which will be used to access key vault. */
		identity?: string | null;

		/** Key vault uri to access the encryption key. */
		keyIdentifier?: string | null;
	}
	export interface KeyVaultPropertiesFormProperties {

		/** The client id of the identity which will be used to access key vault. */
		identity: FormControl<string | null | undefined>,

		/** Key vault uri to access the encryption key. */
		keyIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultPropertiesFormGroup() {
		return new FormGroup<KeyVaultPropertiesFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined),
			keyIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionPropertyStatus { enabled = 'enabled', disabled = 'disabled' }


	/** The event for a webhook. */
	export interface Event {

		/** The event request message sent to the service URI. */
		eventRequestMessage?: EventRequestMessage;

		/** The event response message received from the service URI. */
		eventResponseMessage?: EventResponseMessage;
	}

	/** The event for a webhook. */
	export interface EventFormProperties {
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
		});

	}


	/** The event request message sent to the service URI. */
	export interface EventRequestMessage {

		/** The content of the event request message. */
		content?: EventContent;

		/** The headers of the event request message. */
		headers?: {[id: string]: string };

		/** The HTTP method used to send the event request message. */
		method?: string | null;

		/** The URI used to send the event request message. */
		requestUri?: string | null;

		/** The HTTP message version. */
		version?: string | null;
	}

	/** The event request message sent to the service URI. */
	export interface EventRequestMessageFormProperties {

		/** The headers of the event request message. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** The HTTP method used to send the event request message. */
		method: FormControl<string | null | undefined>,

		/** The URI used to send the event request message. */
		requestUri: FormControl<string | null | undefined>,

		/** The HTTP message version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateEventRequestMessageFormGroup() {
		return new FormGroup<EventRequestMessageFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			requestUri: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The content of the event request message. */
	export interface EventContent {

		/** The action that encompasses the provided event. */
		action?: string | null;

		/** The agent that initiated the event. For most situations, this could be from the authorization context of the request. */
		actor?: Actor;

		/** The event ID. */
		id?: string | null;

		/** The request that generated the event. */
		request?: Request;

		/** The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it. */
		source?: Source;

		/** The target of the event. */
		target?: Target;

		/** The time at which the event occurred. */
		timestamp?: Date | null;
	}

	/** The content of the event request message. */
	export interface EventContentFormProperties {

		/** The action that encompasses the provided event. */
		action: FormControl<string | null | undefined>,

		/** The event ID. */
		id: FormControl<string | null | undefined>,

		/** The time at which the event occurred. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEventContentFormGroup() {
		return new FormGroup<EventContentFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The request that generated the event. */
	export interface Request {

		/** The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request. */
		addr?: string | null;

		/** The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests. */
		host?: string | null;

		/** The ID of the request that initiated the event. */
		id?: string | null;

		/** The request method that generated the event. */
		method?: string | null;

		/** The user agent header of the request. */
		useragent?: string | null;
	}

	/** The request that generated the event. */
	export interface RequestFormProperties {

		/** The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request. */
		addr: FormControl<string | null | undefined>,

		/** The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests. */
		host: FormControl<string | null | undefined>,

		/** The ID of the request that initiated the event. */
		id: FormControl<string | null | undefined>,

		/** The request method that generated the event. */
		method: FormControl<string | null | undefined>,

		/** The user agent header of the request. */
		useragent: FormControl<string | null | undefined>,
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
			addr: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			useragent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it. */
	export interface Source {

		/** The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port. */
		addr?: string | null;

		/** The running instance of an application. Changes after each restart. */
		instanceID?: string | null;
	}

	/** The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it. */
	export interface SourceFormProperties {

		/** The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port. */
		addr: FormControl<string | null | undefined>,

		/** The running instance of an application. Changes after each restart. */
		instanceID: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			addr: new FormControl<string | null | undefined>(undefined),
			instanceID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The target of the event. */
	export interface Target {

		/** The digest of the content, as defined by the Registry V2 HTTP API Specification. */
		digest?: string | null;

		/** The number of bytes of the content. Same as Size field. */
		length?: number | null;

		/** The MIME type of the referenced object. */
		mediaType?: string | null;

		/** The name of the artifact. */
		name?: string | null;

		/** The repository name. */
		repository?: string | null;

		/** The number of bytes of the content. Same as Length field. */
		size?: number | null;

		/** The tag name. */
		tag?: string | null;

		/** The direct URL to the content. */
		url?: string | null;

		/** The version of the artifact. */
		version?: string | null;
	}

	/** The target of the event. */
	export interface TargetFormProperties {

		/** The digest of the content, as defined by the Registry V2 HTTP API Specification. */
		digest: FormControl<string | null | undefined>,

		/** The number of bytes of the content. Same as Size field. */
		length: FormControl<number | null | undefined>,

		/** The MIME type of the referenced object. */
		mediaType: FormControl<string | null | undefined>,

		/** The name of the artifact. */
		name: FormControl<string | null | undefined>,

		/** The repository name. */
		repository: FormControl<string | null | undefined>,

		/** The number of bytes of the content. Same as Length field. */
		size: FormControl<number | null | undefined>,

		/** The tag name. */
		tag: FormControl<string | null | undefined>,

		/** The direct URL to the content. */
		url: FormControl<string | null | undefined>,

		/** The version of the artifact. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The event response message received from the service URI. */
	export interface EventResponseMessage {

		/** The content of the event response message. */
		content?: string | null;

		/** The headers of the event response message. */
		headers?: {[id: string]: string };

		/** The reason phrase of the event response message. */
		reasonPhrase?: string | null;

		/** The status code of the event response message. */
		statusCode?: string | null;

		/** The HTTP message version. */
		version?: string | null;
	}

	/** The event response message received from the service URI. */
	export interface EventResponseMessageFormProperties {

		/** The content of the event response message. */
		content: FormControl<string | null | undefined>,

		/** The headers of the event response message. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** The reason phrase of the event response message. */
		reasonPhrase: FormControl<string | null | undefined>,

		/** The status code of the event response message. */
		statusCode: FormControl<string | null | undefined>,

		/** The HTTP message version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateEventResponseMessageFormGroup() {
		return new FormGroup<EventResponseMessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			reasonPhrase: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The basic information of an event. */
	export interface EventInfo {

		/** The event ID. */
		id?: string | null;
	}

	/** The basic information of an event. */
	export interface EventInfoFormProperties {

		/** The event ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateEventInfoFormGroup() {
		return new FormGroup<EventInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a request to list events for a webhook. */
	export interface EventListResult {

		/** The URI that can be used to request the next list of events. */
		nextLink?: string | null;

		/** The list of events. Since this list may be incomplete, the nextLink field should be used to request the next list of events. */
		value?: Array<Event>;
	}

	/** The result of a request to list events for a webhook. */
	export interface EventListResultFormProperties {

		/** The URI that can be used to request the next list of events. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEventListResultFormGroup() {
		return new FormGroup<EventListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IP rule with specific IP or IP range in CIDR format. */
	export interface IPRule {

		/** The action of IP ACL rule. */
		action?: IPRuleAction | null;

		/**
		 * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
		 * Required
		 */
		value: string;
	}

	/** IP rule with specific IP or IP range in CIDR format. */
	export interface IPRuleFormProperties {

		/** The action of IP ACL rule. */
		action: FormControl<IPRuleAction | null | undefined>,

		/**
		 * Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIPRuleFormGroup() {
		return new FormGroup<IPRuleFormProperties>({
			action: new FormControl<IPRuleAction | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IPRuleAction { Allow = 'Allow' }


	/** Managed identity for the resource. */
	export interface IdentityProperties {

		/** The principal ID of resource identity. */
		principalId?: string | null;

		/** The tenant ID of resource. */
		tenantId?: string | null;

		/** The identity type. */
		type?: IdentityPropertiesType | null;

		/**
		 * The list of user identities associated with the resource. The user identity
		 * dictionary key references will be ARM resource ids in the form:
		 * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
		 * providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
		 */
		userAssignedIdentities?: {[id: string]: UserIdentityProperties };
	}

	/** Managed identity for the resource. */
	export interface IdentityPropertiesFormProperties {

		/** The principal ID of resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant ID of resource. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. */
		type: FormControl<IdentityPropertiesType | null | undefined>,

		/**
		 * The list of user identities associated with the resource. The user identity
		 * dictionary key references will be ARM resource ids in the form:
		 * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/
		 * providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
		 */
		userAssignedIdentities: FormControl<{[id: string]: UserIdentityProperties } | null | undefined>,
	}
	export function CreateIdentityPropertiesFormGroup() {
		return new FormGroup<IdentityPropertiesFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityPropertiesType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: UserIdentityProperties } | null | undefined>(undefined),
		});

	}

	export enum IdentityPropertiesType { SystemAssigned = 'SystemAssigned', UserAssigned = 'UserAssigned', 'SystemAssigned, UserAssigned' = 'SystemAssigned, UserAssigned', None = 'None' }

	export interface UserIdentityProperties {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface UserIdentityPropertiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityPropertiesFormGroup() {
		return new FormGroup<UserIdentityPropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportImageParameters {

		/** When Force, any existing target tags will be overwritten. When NoForce, any existing target tags will fail the operation before any copying begins. */
		mode?: ImportImageParametersMode | null;

		/** Required */
		source: ImportSource;

		/** List of strings of the form repo[:tag]. When tag is omitted the source will be used (or 'latest' if source tag is also omitted). */
		targetTags?: Array<string>;

		/** List of strings of repository names to do a manifest only copy. No tag will be created. */
		untaggedTargetRepositories?: Array<string>;
	}
	export interface ImportImageParametersFormProperties {

		/** When Force, any existing target tags will be overwritten. When NoForce, any existing target tags will fail the operation before any copying begins. */
		mode: FormControl<ImportImageParametersMode | null | undefined>,
	}
	export function CreateImportImageParametersFormGroup() {
		return new FormGroup<ImportImageParametersFormProperties>({
			mode: new FormControl<ImportImageParametersMode | null | undefined>(undefined),
		});

	}

	export enum ImportImageParametersMode { NoForce = 'NoForce', Force = 'Force' }

	export interface ImportSource {
		credentials?: ImportSourceCredentials;

		/** The address of the source registry (e.g. 'mcr.microsoft.com'). */
		registryUri?: string | null;

		/** The resource identifier of the source Azure Container Registry. */
		resourceId?: string | null;

		/**
		 * Repository name of the source image.
		 * Specify an image by repository ('hello-world'). This will use the 'latest' tag.
		 * Specify an image by tag ('hello-world:latest').
		 * Specify an image by sha256-based manifest digest ('hello-world@sha256:abc123').
		 * Required
		 */
		sourceImage: string;
	}
	export interface ImportSourceFormProperties {

		/** The address of the source registry (e.g. 'mcr.microsoft.com'). */
		registryUri: FormControl<string | null | undefined>,

		/** The resource identifier of the source Azure Container Registry. */
		resourceId: FormControl<string | null | undefined>,

		/**
		 * Repository name of the source image.
		 * Specify an image by repository ('hello-world'). This will use the 'latest' tag.
		 * Specify an image by tag ('hello-world:latest').
		 * Specify an image by sha256-based manifest digest ('hello-world@sha256:abc123').
		 * Required
		 */
		sourceImage: FormControl<string | null | undefined>,
	}
	export function CreateImportSourceFormGroup() {
		return new FormGroup<ImportSourceFormProperties>({
			registryUri: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			sourceImage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportSourceCredentials {

		/**
		 * The password used to authenticate with the source registry.
		 * Required
		 */
		password: string;

		/** The username to authenticate with the source registry. */
		username?: string | null;
	}
	export interface ImportSourceCredentialsFormProperties {

		/**
		 * The password used to authenticate with the source registry.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/** The username to authenticate with the source registry. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateImportSourceCredentialsFormGroup() {
		return new FormGroup<ImportSourceCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The network rule set for a container registry. */
	export interface NetworkRuleSet {

		/**
		 * The default action of allow or deny when no other rules match.
		 * Required
		 */
		defaultAction: NetworkRuleSetDefaultAction;

		/** The IP ACL rules. */
		ipRules?: Array<IPRule>;

		/** The virtual network rules. */
		virtualNetworkRules?: Array<VirtualNetworkRule>;
	}

	/** The network rule set for a container registry. */
	export interface NetworkRuleSetFormProperties {

		/**
		 * The default action of allow or deny when no other rules match.
		 * Required
		 */
		defaultAction: FormControl<NetworkRuleSetDefaultAction | null | undefined>,
	}
	export function CreateNetworkRuleSetFormGroup() {
		return new FormGroup<NetworkRuleSetFormProperties>({
			defaultAction: new FormControl<NetworkRuleSetDefaultAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NetworkRuleSetDefaultAction { Allow = 'Allow', Deny = 'Deny' }


	/** Virtual network rule. */
	export interface VirtualNetworkRule {

		/** The action of virtual network rule. */
		action?: IPRuleAction | null;

		/**
		 * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
		 * Required
		 */
		id: string;
	}

	/** Virtual network rule. */
	export interface VirtualNetworkRuleFormProperties {

		/** The action of virtual network rule. */
		action: FormControl<IPRuleAction | null | undefined>,

		/**
		 * Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkRuleFormGroup() {
		return new FormGroup<VirtualNetworkRuleFormProperties>({
			action: new FormControl<IPRuleAction | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The definition of a container registry operation. */
	export interface OperationDefinition {

		/** The display information for a container registry operation. */
		display?: OperationDisplayDefinition;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;

		/** The origin information of the container registry operation. */
		origin?: string | null;

		/** The definition of Azure Monitoring properties. */
		properties?: OperationPropertiesDefinition;
	}

	/** The definition of a container registry operation. */
	export interface OperationDefinitionFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,

		/** The origin information of the container registry operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationDefinitionFormGroup() {
		return new FormGroup<OperationDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The display information for a container registry operation. */
	export interface OperationDisplayDefinition {

		/** The description for the operation. */
		description?: string | null;

		/** The operation that users can perform. */
		operation?: string | null;

		/** The resource provider name: Microsoft.ContainerRegistry. */
		provider?: string | null;

		/** The resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The display information for a container registry operation. */
	export interface OperationDisplayDefinitionFormProperties {

		/** The description for the operation. */
		description: FormControl<string | null | undefined>,

		/** The operation that users can perform. */
		operation: FormControl<string | null | undefined>,

		/** The resource provider name: Microsoft.ContainerRegistry. */
		provider: FormControl<string | null | undefined>,

		/** The resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayDefinitionFormGroup() {
		return new FormGroup<OperationDisplayDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of Azure Monitoring properties. */
	export interface OperationPropertiesDefinition {

		/** The definition of Azure Monitoring list. */
		serviceSpecification?: OperationServiceSpecificationDefinition;
	}

	/** The definition of Azure Monitoring properties. */
	export interface OperationPropertiesDefinitionFormProperties {
	}
	export function CreateOperationPropertiesDefinitionFormGroup() {
		return new FormGroup<OperationPropertiesDefinitionFormProperties>({
		});

	}


	/** The definition of Azure Monitoring list. */
	export interface OperationServiceSpecificationDefinition {

		/** A list of Azure Monitoring metrics definition. */
		metricSpecifications?: Array<OperationMetricSpecificationDefinition>;
	}

	/** The definition of Azure Monitoring list. */
	export interface OperationServiceSpecificationDefinitionFormProperties {
	}
	export function CreateOperationServiceSpecificationDefinitionFormGroup() {
		return new FormGroup<OperationServiceSpecificationDefinitionFormProperties>({
		});

	}


	/** The definition of Azure Monitoring metric. */
	export interface OperationMetricSpecificationDefinition {

		/** Metric aggregation type. */
		aggregationType?: string | null;

		/** Metric description. */
		displayDescription?: string | null;

		/** Metric display name. */
		displayName?: string | null;

		/** Internal metric name. */
		internalMetricName?: string | null;

		/** Metric name. */
		name?: string | null;

		/** Metric unit. */
		unit?: string | null;
	}

	/** The definition of Azure Monitoring metric. */
	export interface OperationMetricSpecificationDefinitionFormProperties {

		/** Metric aggregation type. */
		aggregationType: FormControl<string | null | undefined>,

		/** Metric description. */
		displayDescription: FormControl<string | null | undefined>,

		/** Metric display name. */
		displayName: FormControl<string | null | undefined>,

		/** Internal metric name. */
		internalMetricName: FormControl<string | null | undefined>,

		/** Metric name. */
		name: FormControl<string | null | undefined>,

		/** Metric unit. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetricSpecificationDefinitionFormGroup() {
		return new FormGroup<OperationMetricSpecificationDefinitionFormProperties>({
			aggregationType: new FormControl<string | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			internalMetricName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a request to list container registry operations. */
	export interface OperationListResult {

		/** The URI that can be used to request the next list of container registry operations. */
		nextLink?: string | null;

		/** The list of container registry operations. Since this list may be incomplete, the nextLink field should be used to request the next list of operations. */
		value?: Array<OperationDefinition>;
	}

	/** The result of a request to list container registry operations. */
	export interface OperationListResultFormProperties {

		/** The URI that can be used to request the next list of container registry operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policies for a container registry. */
	export interface Policies {

		/** The quarantine policy for a container registry. */
		quarantinePolicy?: QuarantinePolicy;

		/** The retention policy for a container registry. */
		retentionPolicy?: RetentionPolicy;

		/** The content trust policy for a container registry. */
		trustPolicy?: TrustPolicy;
	}

	/** The policies for a container registry. */
	export interface PoliciesFormProperties {
	}
	export function CreatePoliciesFormGroup() {
		return new FormGroup<PoliciesFormProperties>({
		});

	}


	/** The quarantine policy for a container registry. */
	export interface QuarantinePolicy {

		/** The value that indicates whether the policy is enabled or not. */
		status?: EncryptionPropertyStatus | null;
	}

	/** The quarantine policy for a container registry. */
	export interface QuarantinePolicyFormProperties {

		/** The value that indicates whether the policy is enabled or not. */
		status: FormControl<EncryptionPropertyStatus | null | undefined>,
	}
	export function CreateQuarantinePolicyFormGroup() {
		return new FormGroup<QuarantinePolicyFormProperties>({
			status: new FormControl<EncryptionPropertyStatus | null | undefined>(undefined),
		});

	}


	/** The retention policy for a container registry. */
	export interface RetentionPolicy {

		/** The number of days to retain an untagged manifest after which it gets purged. */
		days?: number | null;

		/** The timestamp when the policy was last updated. */
		lastUpdatedTime?: Date | null;

		/** The value that indicates whether the policy is enabled or not. */
		status?: EncryptionPropertyStatus | null;
	}

	/** The retention policy for a container registry. */
	export interface RetentionPolicyFormProperties {

		/** The number of days to retain an untagged manifest after which it gets purged. */
		days: FormControl<number | null | undefined>,

		/** The timestamp when the policy was last updated. */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** The value that indicates whether the policy is enabled or not. */
		status: FormControl<EncryptionPropertyStatus | null | undefined>,
	}
	export function CreateRetentionPolicyFormGroup() {
		return new FormGroup<RetentionPolicyFormProperties>({
			days: new FormControl<number | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<EncryptionPropertyStatus | null | undefined>(undefined),
		});

	}


	/** The content trust policy for a container registry. */
	export interface TrustPolicy {

		/** The value that indicates whether the policy is enabled or not. */
		status?: EncryptionPropertyStatus | null;

		/** The type of trust policy. */
		type?: TrustPolicyType | null;
	}

	/** The content trust policy for a container registry. */
	export interface TrustPolicyFormProperties {

		/** The value that indicates whether the policy is enabled or not. */
		status: FormControl<EncryptionPropertyStatus | null | undefined>,

		/** The type of trust policy. */
		type: FormControl<TrustPolicyType | null | undefined>,
	}
	export function CreateTrustPolicyFormGroup() {
		return new FormGroup<TrustPolicyFormProperties>({
			status: new FormControl<EncryptionPropertyStatus | null | undefined>(undefined),
			type: new FormControl<TrustPolicyType | null | undefined>(undefined),
		});

	}

	export enum TrustPolicyType { Notary = 'Notary' }


	/** The parameters used to regenerate the login credential. */
	export interface RegenerateCredentialParameters {

		/**
		 * Specifies name of the password which should be regenerated -- password or password2.
		 * Required
		 */
		name: RegenerateCredentialParametersName;
	}

	/** The parameters used to regenerate the login credential. */
	export interface RegenerateCredentialParametersFormProperties {

		/**
		 * Specifies name of the password which should be regenerated -- password or password2.
		 * Required
		 */
		name: FormControl<RegenerateCredentialParametersName | null | undefined>,
	}
	export function CreateRegenerateCredentialParametersFormGroup() {
		return new FormGroup<RegenerateCredentialParametersFormProperties>({
			name: new FormControl<RegenerateCredentialParametersName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegenerateCredentialParametersName { password = 'password', password2 = 'password2' }


	/** An object that represents a container registry. */
	export interface Registry {

		/** Managed identity for the resource. */
		identity?: IdentityProperties;

		/** The properties of a container registry. */
		properties?: RegistryProperties;

		/**
		 * The SKU of a container registry.
		 * Required
		 */
		sku: Sku;
	}

	/** An object that represents a container registry. */
	export interface RegistryFormProperties {
	}
	export function CreateRegistryFormGroup() {
		return new FormGroup<RegistryFormProperties>({
		});

	}


	/** The properties of a container registry. */
	export interface RegistryProperties {

		/** The value that indicates whether the admin user is enabled. */
		adminUserEnabled?: boolean | null;

		/** The creation date of the container registry in ISO8601 format. */
		creationDate?: Date | null;
		encryption?: EncryptionProperty;

		/** The URL that can be used to log into the container registry. */
		loginServer?: string | null;

		/** The network rule set for a container registry. */
		networkRuleSet?: NetworkRuleSet;

		/** The policies for a container registry. */
		policies?: Policies;

		/** The provisioning state of the container registry at the time the operation was called. */
		provisioningState?: RegistryPropertiesProvisioningState | null;

		/** The status of an Azure resource at the time the operation was called. */
		status?: Status;

		/** The properties of a storage account for a container registry. Only applicable to Classic SKU. */
		storageAccount?: StorageAccountProperties;
	}

	/** The properties of a container registry. */
	export interface RegistryPropertiesFormProperties {

		/** The value that indicates whether the admin user is enabled. */
		adminUserEnabled: FormControl<boolean | null | undefined>,

		/** The creation date of the container registry in ISO8601 format. */
		creationDate: FormControl<Date | null | undefined>,

		/** The URL that can be used to log into the container registry. */
		loginServer: FormControl<string | null | undefined>,

		/** The provisioning state of the container registry at the time the operation was called. */
		provisioningState: FormControl<RegistryPropertiesProvisioningState | null | undefined>,
	}
	export function CreateRegistryPropertiesFormGroup() {
		return new FormGroup<RegistryPropertiesFormProperties>({
			adminUserEnabled: new FormControl<boolean | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			loginServer: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<RegistryPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum RegistryPropertiesProvisioningState { Creating = 'Creating', Updating = 'Updating', Deleting = 'Deleting', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled' }


	/** The status of an Azure resource at the time the operation was called. */
	export interface Status {

		/** The short label for the status. */
		displayStatus?: string | null;

		/** The detailed message for the status, including alerts and error messages. */
		message?: string | null;

		/** The timestamp when the status was changed to the current value. */
		timestamp?: Date | null;
	}

	/** The status of an Azure resource at the time the operation was called. */
	export interface StatusFormProperties {

		/** The short label for the status. */
		displayStatus: FormControl<string | null | undefined>,

		/** The detailed message for the status, including alerts and error messages. */
		message: FormControl<string | null | undefined>,

		/** The timestamp when the status was changed to the current value. */
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			displayStatus: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The properties of a storage account for a container registry. Only applicable to Classic SKU. */
	export interface StorageAccountProperties {

		/**
		 * The resource ID of the storage account.
		 * Required
		 */
		id: string;
	}

	/** The properties of a storage account for a container registry. Only applicable to Classic SKU. */
	export interface StorageAccountPropertiesFormProperties {

		/**
		 * The resource ID of the storage account.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountPropertiesFormGroup() {
		return new FormGroup<StorageAccountPropertiesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The SKU of a container registry. */
	export interface Sku {

		/**
		 * The SKU name of the container registry. Required for registry creation.
		 * Required
		 */
		name: SkuName;

		/** The SKU tier based on the SKU name. */
		tier?: SkuName | null;
	}

	/** The SKU of a container registry. */
	export interface SkuFormProperties {

		/**
		 * The SKU name of the container registry. Required for registry creation.
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,

		/** The SKU tier based on the SKU name. */
		tier: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<SkuName | null | undefined>(undefined),
		});

	}

	export enum SkuName { Classic = 'Classic', Basic = 'Basic', Standard = 'Standard', Premium = 'Premium' }


	/** The response from the ListCredentials operation. */
	export interface RegistryListCredentialsResult {

		/** The list of passwords for a container registry. */
		passwords?: Array<RegistryPassword>;

		/** The username for a container registry. */
		username?: string | null;
	}

	/** The response from the ListCredentials operation. */
	export interface RegistryListCredentialsResultFormProperties {

		/** The username for a container registry. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateRegistryListCredentialsResultFormGroup() {
		return new FormGroup<RegistryListCredentialsResultFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The login password for the container registry. */
	export interface RegistryPassword {

		/** The password name. */
		name?: RegenerateCredentialParametersName | null;

		/** The password value. */
		value?: string | null;
	}

	/** The login password for the container registry. */
	export interface RegistryPasswordFormProperties {

		/** The password name. */
		name: FormControl<RegenerateCredentialParametersName | null | undefined>,

		/** The password value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateRegistryPasswordFormGroup() {
		return new FormGroup<RegistryPasswordFormProperties>({
			name: new FormControl<RegenerateCredentialParametersName | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a request to list container registries. */
	export interface RegistryListResult {

		/** The URI that can be used to request the next list of container registries. */
		nextLink?: string | null;

		/** The list of container registries. Since this list may be incomplete, the nextLink field should be used to request the next list of container registries. */
		value?: Array<Registry>;
	}

	/** The result of a request to list container registries. */
	export interface RegistryListResultFormProperties {

		/** The URI that can be used to request the next list of container registries. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRegistryListResultFormGroup() {
		return new FormGroup<RegistryListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to check whether a container registry name is available. */
	export interface RegistryNameCheckRequest {

		/**
		 * The name of the container registry.
		 * Required
		 * Max length: 50
		 * Min length: 5
		 */
		name: string;

		/**
		 * The resource type of the container registry. This field must be set to 'Microsoft.ContainerRegistry/registries'.
		 * Required
		 */
		type: RegistryNameCheckRequestType;
	}

	/** A request to check whether a container registry name is available. */
	export interface RegistryNameCheckRequestFormProperties {

		/**
		 * The name of the container registry.
		 * Required
		 * Max length: 50
		 * Min length: 5
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource type of the container registry. This field must be set to 'Microsoft.ContainerRegistry/registries'.
		 * Required
		 */
		type: FormControl<RegistryNameCheckRequestType | null | undefined>,
	}
	export function CreateRegistryNameCheckRequestFormGroup() {
		return new FormGroup<RegistryNameCheckRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9]*$')]),
			type: new FormControl<RegistryNameCheckRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegistryNameCheckRequestType { 'Microsoft.ContainerRegistry/registries' = 'Microsoft.ContainerRegistry/registries' }


	/** The result of a request to check the availability of a container registry name. */
	export interface RegistryNameStatus {

		/** If any, the error message that provides more detail for the reason that the name is not available. */
		message?: string | null;

		/** The value that indicates whether the name is available. */
		nameAvailable?: boolean | null;

		/** If any, the reason that the name is not available. */
		reason?: string | null;
	}

	/** The result of a request to check the availability of a container registry name. */
	export interface RegistryNameStatusFormProperties {

		/** If any, the error message that provides more detail for the reason that the name is not available. */
		message: FormControl<string | null | undefined>,

		/** The value that indicates whether the name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** If any, the reason that the name is not available. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateRegistryNameStatusFormGroup() {
		return new FormGroup<RegistryNameStatusFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for updating the properties of a container registry. */
	export interface RegistryPropertiesUpdateParameters {

		/** The value that indicates whether the admin user is enabled. */
		adminUserEnabled?: boolean | null;
		encryption?: EncryptionProperty;

		/** The network rule set for a container registry. */
		networkRuleSet?: NetworkRuleSet;

		/** The policies for a container registry. */
		policies?: Policies;
	}

	/** The parameters for updating the properties of a container registry. */
	export interface RegistryPropertiesUpdateParametersFormProperties {

		/** The value that indicates whether the admin user is enabled. */
		adminUserEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateRegistryPropertiesUpdateParametersFormGroup() {
		return new FormGroup<RegistryPropertiesUpdateParametersFormProperties>({
			adminUserEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The parameters for updating a container registry. */
	export interface RegistryUpdateParameters {

		/** Managed identity for the resource. */
		identity?: IdentityProperties;

		/** The parameters for updating the properties of a container registry. */
		properties?: RegistryPropertiesUpdateParameters;

		/** The SKU of a container registry. */
		sku?: Sku;

		/** The tags for the container registry. */
		tags?: {[id: string]: string };
	}

	/** The parameters for updating a container registry. */
	export interface RegistryUpdateParametersFormProperties {

		/** The tags for the container registry. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRegistryUpdateParametersFormGroup() {
		return new FormGroup<RegistryUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The quota usage for a container registry. */
	export interface RegistryUsage {

		/** The current value of the usage. */
		currentValue?: number | null;

		/** The limit of the usage. */
		limit?: number | null;

		/** The name of the usage. */
		name?: string | null;

		/** The unit of measurement. */
		unit?: RegistryUsageUnit | null;
	}

	/** The quota usage for a container registry. */
	export interface RegistryUsageFormProperties {

		/** The current value of the usage. */
		currentValue: FormControl<number | null | undefined>,

		/** The limit of the usage. */
		limit: FormControl<number | null | undefined>,

		/** The name of the usage. */
		name: FormControl<string | null | undefined>,

		/** The unit of measurement. */
		unit: FormControl<RegistryUsageUnit | null | undefined>,
	}
	export function CreateRegistryUsageFormGroup() {
		return new FormGroup<RegistryUsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<RegistryUsageUnit | null | undefined>(undefined),
		});

	}

	export enum RegistryUsageUnit { Count = 'Count', Bytes = 'Bytes' }


	/** The result of a request to get container registry quota usages. */
	export interface RegistryUsageListResult {

		/** The list of container registry quota usages. */
		value?: Array<RegistryUsage>;
	}

	/** The result of a request to get container registry quota usages. */
	export interface RegistryUsageListResultFormProperties {
	}
	export function CreateRegistryUsageListResultFormGroup() {
		return new FormGroup<RegistryUsageListResultFormProperties>({
		});

	}


	/** An object that represents a replication for a container registry. */
	export interface Replication {

		/** The properties of a replication. */
		properties?: ReplicationProperties;
	}

	/** An object that represents a replication for a container registry. */
	export interface ReplicationFormProperties {
	}
	export function CreateReplicationFormGroup() {
		return new FormGroup<ReplicationFormProperties>({
		});

	}


	/** The properties of a replication. */
	export interface ReplicationProperties {

		/** The provisioning state of the replication at the time the operation was called. */
		provisioningState?: RegistryPropertiesProvisioningState | null;

		/** The status of an Azure resource at the time the operation was called. */
		status?: Status;
	}

	/** The properties of a replication. */
	export interface ReplicationPropertiesFormProperties {

		/** The provisioning state of the replication at the time the operation was called. */
		provisioningState: FormControl<RegistryPropertiesProvisioningState | null | undefined>,
	}
	export function CreateReplicationPropertiesFormGroup() {
		return new FormGroup<ReplicationPropertiesFormProperties>({
			provisioningState: new FormControl<RegistryPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** The result of a request to list replications for a container registry. */
	export interface ReplicationListResult {

		/** The URI that can be used to request the next list of replications. */
		nextLink?: string | null;

		/** The list of replications. Since this list may be incomplete, the nextLink field should be used to request the next list of replications. */
		value?: Array<Replication>;
	}

	/** The result of a request to list replications for a container registry. */
	export interface ReplicationListResultFormProperties {

		/** The URI that can be used to request the next list of replications. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateReplicationListResultFormGroup() {
		return new FormGroup<ReplicationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for updating a replication. */
	export interface ReplicationUpdateParameters {

		/** The tags for the replication. */
		tags?: {[id: string]: string };
	}

	/** The parameters for updating a replication. */
	export interface ReplicationUpdateParametersFormProperties {

		/** The tags for the replication. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateReplicationUpdateParametersFormGroup() {
		return new FormGroup<ReplicationUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** An Azure resource. */
	export interface Resource {

		/** The resource ID. */
		id?: string | null;

		/**
		 * The location of the resource. This cannot be changed after the resource is created.
		 * Required
		 */
		location: string;

		/** The name of the resource. */
		name?: string | null;

		/** The tags of the resource. */
		tags?: {[id: string]: string };

		/** The type of the resource. */
		type?: string | null;
	}

	/** An Azure resource. */
	export interface ResourceFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * The location of the resource. This cannot be changed after the resource is created.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a webhook for a container registry. */
	export interface Webhook {

		/** The properties of a webhook. */
		properties?: WebhookProperties;
	}

	/** An object that represents a webhook for a container registry. */
	export interface WebhookFormProperties {
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
		});

	}


	/** The properties of a webhook. */
	export interface WebhookProperties {

		/**
		 * The list of actions that trigger the webhook to post notifications.
		 * Required
		 */
		actions: Array<string>;

		/** The provisioning state of the webhook at the time the operation was called. */
		provisioningState?: RegistryPropertiesProvisioningState | null;

		/** The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events. */
		scope?: string | null;

		/** The status of the webhook at the time the operation was called. */
		status?: EncryptionPropertyStatus | null;
	}

	/** The properties of a webhook. */
	export interface WebhookPropertiesFormProperties {

		/** The provisioning state of the webhook at the time the operation was called. */
		provisioningState: FormControl<RegistryPropertiesProvisioningState | null | undefined>,

		/** The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events. */
		scope: FormControl<string | null | undefined>,

		/** The status of the webhook at the time the operation was called. */
		status: FormControl<EncryptionPropertyStatus | null | undefined>,
	}
	export function CreateWebhookPropertiesFormGroup() {
		return new FormGroup<WebhookPropertiesFormProperties>({
			provisioningState: new FormControl<RegistryPropertiesProvisioningState | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EncryptionPropertyStatus | null | undefined>(undefined),
		});

	}


	/** The parameters for creating a webhook. */
	export interface WebhookCreateParameters {

		/**
		 * The location of the webhook. This cannot be changed after the resource is created.
		 * Required
		 */
		location: string;

		/** The parameters for creating the properties of a webhook. */
		properties?: WebhookPropertiesCreateParameters;

		/** The tags for the webhook. */
		tags?: {[id: string]: string };
	}

	/** The parameters for creating a webhook. */
	export interface WebhookCreateParametersFormProperties {

		/**
		 * The location of the webhook. This cannot be changed after the resource is created.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The tags for the webhook. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateWebhookCreateParametersFormGroup() {
		return new FormGroup<WebhookCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The parameters for creating the properties of a webhook. */
	export interface WebhookPropertiesCreateParameters {

		/**
		 * The list of actions that trigger the webhook to post notifications.
		 * Required
		 */
		actions: Array<string>;

		/** Custom headers that will be added to the webhook notifications. */
		customHeaders?: {[id: string]: string };

		/** The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events. */
		scope?: string | null;

		/**
		 * The service URI for the webhook to post notifications.
		 * Required
		 */
		serviceUri: string;

		/** The status of the webhook at the time the operation was called. */
		status?: EncryptionPropertyStatus | null;
	}

	/** The parameters for creating the properties of a webhook. */
	export interface WebhookPropertiesCreateParametersFormProperties {

		/** Custom headers that will be added to the webhook notifications. */
		customHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/** The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events. */
		scope: FormControl<string | null | undefined>,

		/**
		 * The service URI for the webhook to post notifications.
		 * Required
		 */
		serviceUri: FormControl<string | null | undefined>,

		/** The status of the webhook at the time the operation was called. */
		status: FormControl<EncryptionPropertyStatus | null | undefined>,
	}
	export function CreateWebhookPropertiesCreateParametersFormGroup() {
		return new FormGroup<WebhookPropertiesCreateParametersFormProperties>({
			customHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<EncryptionPropertyStatus | null | undefined>(undefined),
		});

	}


	/** The result of a request to list webhooks for a container registry. */
	export interface WebhookListResult {

		/** The URI that can be used to request the next list of webhooks. */
		nextLink?: string | null;

		/** The list of webhooks. Since this list may be incomplete, the nextLink field should be used to request the next list of webhooks. */
		value?: Array<Webhook>;
	}

	/** The result of a request to list webhooks for a container registry. */
	export interface WebhookListResultFormProperties {

		/** The URI that can be used to request the next list of webhooks. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebhookListResultFormGroup() {
		return new FormGroup<WebhookListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for updating the properties of a webhook. */
	export interface WebhookPropertiesUpdateParameters {

		/** The list of actions that trigger the webhook to post notifications. */
		actions?: Array<string>;

		/** Custom headers that will be added to the webhook notifications. */
		customHeaders?: {[id: string]: string };

		/** The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events. */
		scope?: string | null;

		/** The service URI for the webhook to post notifications. */
		serviceUri?: string | null;

		/** The status of the webhook at the time the operation was called. */
		status?: EncryptionPropertyStatus | null;
	}

	/** The parameters for updating the properties of a webhook. */
	export interface WebhookPropertiesUpdateParametersFormProperties {

		/** Custom headers that will be added to the webhook notifications. */
		customHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/** The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events. */
		scope: FormControl<string | null | undefined>,

		/** The service URI for the webhook to post notifications. */
		serviceUri: FormControl<string | null | undefined>,

		/** The status of the webhook at the time the operation was called. */
		status: FormControl<EncryptionPropertyStatus | null | undefined>,
	}
	export function CreateWebhookPropertiesUpdateParametersFormGroup() {
		return new FormGroup<WebhookPropertiesUpdateParametersFormProperties>({
			customHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EncryptionPropertyStatus | null | undefined>(undefined),
		});

	}


	/** The parameters for updating a webhook. */
	export interface WebhookUpdateParameters {

		/** The parameters for updating the properties of a webhook. */
		properties?: WebhookPropertiesUpdateParameters;

		/** The tags for the webhook. */
		tags?: {[id: string]: string };
	}

	/** The parameters for updating a webhook. */
	export interface WebhookUpdateParametersFormProperties {

		/** The tags for the webhook. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateWebhookUpdateParametersFormGroup() {
		return new FormGroup<WebhookUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Azure Container Registry REST API operations.
		 * Get providers/Microsoft.ContainerRegistry/operations
		 * @param {string} api_version The client API version.
		 * @return {OperationListResult} The request was successful; the request was well-formed and received properly.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.ContainerRegistry/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks whether the container registry name is available for use. The name must contain only alphanumeric characters, be globally unique, and between 5 and 50 characters in length.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.ContainerRegistry/checkNameAvailability
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {RegistryNameCheckRequest} requestBody The object containing information for the availability request.
		 * @return {RegistryNameStatus} The request was successful; the request was well-formed and received properly.
		 */
		Registries_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: RegistryNameCheckRequest): Observable<RegistryNameStatus> {
			return this.http.post<RegistryNameStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ContainerRegistry/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the container registries under the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ContainerRegistry/registries
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @return {RegistryListResult} The request was successful; the request was well-formed and received properly.
		 */
		Registries_List(api_version: string, subscriptionId: string): Observable<RegistryListResult> {
			return this.http.get<RegistryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ContainerRegistry/registries?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the container registries under the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @return {RegistryListResult} The request was successful; the request was well-formed and received properly.
		 */
		Registries_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<RegistryListResult> {
			return this.http.get<RegistryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the properties of the specified container registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @return {Registry} The request was successful; the request was well-formed and received properly.
		 */
		Registries_Get(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string): Observable<Registry> {
			return this.http.get<Registry>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a container registry with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {Registry} requestBody The parameters for creating a container registry.
		 * @return {Registry} The request was successful; the request was well-formed and received properly.
		 */
		Registries_Create(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, requestBody: Registry): Observable<Registry> {
			return this.http.put<Registry>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a container registry.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		Registries_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a container registry with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {RegistryUpdateParameters} requestBody The parameters for updating a container registry.
		 * @return {Registry} The request was successful; the request was well-formed and received properly.
		 */
		Registries_Update(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, requestBody: RegistryUpdateParameters): Observable<Registry> {
			return this.http.patch<Registry>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Copies an image to this container registry from the specified container registry.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/importImage
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {ImportImageParameters} requestBody The parameters specifying the image to copy and the source container registry.
		 * @return {void} The request was successful; the operation has completed successfully.
		 */
		Registries_ImportImage(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, requestBody: ImportImageParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/importImage?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the login credentials for the specified container registry.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/listCredentials
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @return {RegistryListCredentialsResult} The request was successful; the list of credentials retrieved and returned successfully.
		 */
		Registries_ListCredentials(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string): Observable<RegistryListCredentialsResult> {
			return this.http.post<RegistryListCredentialsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/listCredentials?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the quota usages for the specified container registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/listUsages
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @return {RegistryUsageListResult} The request was successful; the registry usages retrieved and returned successfully.
		 */
		Registries_ListUsages(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string): Observable<RegistryUsageListResult> {
			return this.http.get<RegistryUsageListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/listUsages?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Regenerates one of the login credentials for the specified container registry.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/regenerateCredential
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {RegenerateCredentialParameters} requestBody Specifies name of the password which should be regenerated -- password or password2.
		 * @return {RegistryListCredentialsResult} The request was successful; the specified credential regenerated successfully.
		 */
		Registries_RegenerateCredential(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, requestBody: RegenerateCredentialParameters): Observable<RegistryListCredentialsResult> {
			return this.http.post<RegistryListCredentialsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/regenerateCredential?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the replications for the specified container registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @return {ReplicationListResult} The request was successful; the request was well-formed and received properly.
		 */
		Replications_List(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string): Observable<ReplicationListResult> {
			return this.http.get<ReplicationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/replications?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the properties of the specified replication.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications/{replicationName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} replicationName The name of the replication.
		 * @return {Replication} The request was successful; the request was well-formed and received properly.
		 */
		Replications_Get(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, replicationName: string): Observable<Replication> {
			return this.http.get<Replication>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/replications/' + (replicationName == null ? '' : encodeURIComponent(replicationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a replication for a container registry with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications/{replicationName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} replicationName The name of the replication.
		 * @param {Replication} requestBody The parameters for creating a replication.
		 * @return {Replication} The request was successful; the request was well-formed and received properly.
		 */
		Replications_Create(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, replicationName: string, requestBody: Replication): Observable<Replication> {
			return this.http.put<Replication>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/replications/' + (replicationName == null ? '' : encodeURIComponent(replicationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a replication from a container registry.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications/{replicationName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} replicationName The name of the replication.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		Replications_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, replicationName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/replications/' + (replicationName == null ? '' : encodeURIComponent(replicationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a replication for a container registry with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/replications/{replicationName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} replicationName The name of the replication.
		 * @param {ReplicationUpdateParameters} requestBody The parameters for updating a replication.
		 * @return {Replication} The request was successful; the request was well-formed and received properly.
		 */
		Replications_Update(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, replicationName: string, requestBody: ReplicationUpdateParameters): Observable<Replication> {
			return this.http.patch<Replication>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/replications/' + (replicationName == null ? '' : encodeURIComponent(replicationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the webhooks for the specified container registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @return {WebhookListResult} The request was successful; the request was well-formed and received properly.
		 */
		Webhooks_List(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string): Observable<WebhookListResult> {
			return this.http.get<WebhookListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/webhooks?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the properties of the specified webhook.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} webhookName The name of the webhook.
		 * @return {Webhook} The request was successful; the request was well-formed and received properly.
		 */
		Webhooks_Get(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, webhookName: string): Observable<Webhook> {
			return this.http.get<Webhook>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a webhook for a container registry with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} webhookName The name of the webhook.
		 * @param {WebhookCreateParameters} requestBody The parameters for creating a webhook.
		 * @return {Webhook} The request was successful; the request was well-formed and received properly.
		 */
		Webhooks_Create(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, webhookName: string, requestBody: WebhookCreateParameters): Observable<Webhook> {
			return this.http.put<Webhook>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a webhook from a container registry.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} webhookName The name of the webhook.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		Webhooks_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, webhookName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a webhook with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} webhookName The name of the webhook.
		 * @param {WebhookUpdateParameters} requestBody The parameters for updating a webhook.
		 * @return {Webhook} The request was successful; the request was well-formed and received properly.
		 */
		Webhooks_Update(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, webhookName: string, requestBody: WebhookUpdateParameters): Observable<Webhook> {
			return this.http.patch<Webhook>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the configuration of service URI and custom headers for the webhook.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}/getCallbackConfig
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} webhookName The name of the webhook.
		 * @return {CallbackConfig} The request was successful; the request was well-formed and received properly.
		 */
		Webhooks_GetCallbackConfig(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, webhookName: string): Observable<CallbackConfig> {
			return this.http.post<CallbackConfig>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '/getCallbackConfig?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Lists recent events for the specified webhook.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}/listEvents
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} webhookName The name of the webhook.
		 * @return {EventListResult} The request was successful; the request was well-formed and received properly.
		 */
		Webhooks_ListEvents(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, webhookName: string): Observable<EventListResult> {
			return this.http.post<EventListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '/listEvents?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Triggers a ping event to be sent to the webhook.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/webhooks/{webhookName}/ping
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} registryName The name of the container registry.
		 * @param {string} webhookName The name of the webhook.
		 * @return {EventInfo} The request was successful; the request was well-formed and received properly.
		 */
		Webhooks_Ping(api_version: string, subscriptionId: string, resourceGroupName: string, registryName: string, webhookName: string): Observable<EventInfo> {
			return this.http.post<EventInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ContainerRegistry/registries/' + (registryName == null ? '' : encodeURIComponent(registryName)) + '/webhooks/' + (webhookName == null ? '' : encodeURIComponent(webhookName)) + '/ping?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

