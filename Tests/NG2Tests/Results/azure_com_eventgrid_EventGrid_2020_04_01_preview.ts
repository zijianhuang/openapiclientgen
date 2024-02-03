import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This is the base type that represents an advanced filter. To configure an advanced filter, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class such as BoolEqualsAdvancedFilter, NumberInAdvancedFilter, StringEqualsAdvancedFilter etc. depending on the type of the key based on which you want to filter. */
	export interface AdvancedFilter {

		/** The field/property in the event based on which you want to filter. */
		key?: string | null;

		/**
		 * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
		 * Required
		 */
		operatorType: AdvancedFilterOperatorType;
	}

	/** This is the base type that represents an advanced filter. To configure an advanced filter, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class such as BoolEqualsAdvancedFilter, NumberInAdvancedFilter, StringEqualsAdvancedFilter etc. depending on the type of the key based on which you want to filter. */
	export interface AdvancedFilterFormProperties {

		/** The field/property in the event based on which you want to filter. */
		key: FormControl<string | null | undefined>,

		/**
		 * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
		 * Required
		 */
		operatorType: FormControl<AdvancedFilterOperatorType | null | undefined>,
	}
	export function CreateAdvancedFilterFormGroup() {
		return new FormGroup<AdvancedFilterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			operatorType: new FormControl<AdvancedFilterOperatorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AdvancedFilterOperatorType { NumberIn = 'NumberIn', NumberNotIn = 'NumberNotIn', NumberLessThan = 'NumberLessThan', NumberGreaterThan = 'NumberGreaterThan', NumberLessThanOrEquals = 'NumberLessThanOrEquals', NumberGreaterThanOrEquals = 'NumberGreaterThanOrEquals', BoolEquals = 'BoolEquals', StringIn = 'StringIn', StringNotIn = 'StringNotIn', StringBeginsWith = 'StringBeginsWith', StringEndsWith = 'StringEndsWith', StringContains = 'StringContains' }


	/** Information about the azure function destination for an event subscription. */
	export interface AzureFunctionEventSubscriptionDestination {

		/** The properties that represent the Azure Function destination of an event subscription. */
		properties?: AzureFunctionEventSubscriptionDestinationProperties;
	}

	/** Information about the azure function destination for an event subscription. */
	export interface AzureFunctionEventSubscriptionDestinationFormProperties {
	}
	export function CreateAzureFunctionEventSubscriptionDestinationFormGroup() {
		return new FormGroup<AzureFunctionEventSubscriptionDestinationFormProperties>({
		});

	}


	/** The properties that represent the Azure Function destination of an event subscription. */
	export interface AzureFunctionEventSubscriptionDestinationProperties {

		/** Maximum number of events per batch. */
		maxEventsPerBatch?: number | null;

		/** Preferred batch size in Kilobytes. */
		preferredBatchSizeInKilobytes?: number | null;

		/** The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription. */
		resourceId?: string | null;
	}

	/** The properties that represent the Azure Function destination of an event subscription. */
	export interface AzureFunctionEventSubscriptionDestinationPropertiesFormProperties {

		/** Maximum number of events per batch. */
		maxEventsPerBatch: FormControl<number | null | undefined>,

		/** Preferred batch size in Kilobytes. */
		preferredBatchSizeInKilobytes: FormControl<number | null | undefined>,

		/** The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateAzureFunctionEventSubscriptionDestinationPropertiesFormGroup() {
		return new FormGroup<AzureFunctionEventSubscriptionDestinationPropertiesFormProperties>({
			maxEventsPerBatch: new FormControl<number | null | undefined>(undefined),
			preferredBatchSizeInKilobytes: new FormControl<number | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BoolEquals Advanced Filter. */
	export interface BoolEqualsAdvancedFilter {

		/** The boolean filter value. */
		value?: boolean | null;
	}

	/** BoolEquals Advanced Filter. */
	export interface BoolEqualsAdvancedFilterFormProperties {

		/** The boolean filter value. */
		value: FormControl<boolean | null | undefined>,
	}
	export function CreateBoolEqualsAdvancedFilterFormGroup() {
		return new FormGroup<BoolEqualsAdvancedFilterFormProperties>({
			value: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class. */
	export interface DeadLetterDestination {

		/**
		 * Type of the endpoint for the dead letter destination
		 * Required
		 */
		endpointType: DeadLetterDestinationEndpointType;
	}

	/** Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class. */
	export interface DeadLetterDestinationFormProperties {

		/**
		 * Type of the endpoint for the dead letter destination
		 * Required
		 */
		endpointType: FormControl<DeadLetterDestinationEndpointType | null | undefined>,
	}
	export function CreateDeadLetterDestinationFormGroup() {
		return new FormGroup<DeadLetterDestinationFormProperties>({
			endpointType: new FormControl<DeadLetterDestinationEndpointType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeadLetterDestinationEndpointType { StorageBlob = 'StorageBlob' }


	/** EventGrid Domain. */
	export interface Domain {

		/** Properties of the Domain. */
		properties?: DomainProperties;
	}

	/** EventGrid Domain. */
	export interface DomainFormProperties {
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
		});

	}


	/** Properties of the Domain. */
	export interface DomainProperties {

		/** This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. */
		allowTrafficFromAllIPs?: boolean | null;

		/** Endpoint for the domain. */
		endpoint?: string | null;

		/** This determines the IP filtering rules that ought be applied when events are received on this domain. */
		inboundIpRules?: Array<InboundIpRule>;

		/** This determines the format that Event Grid should expect for incoming events published to the domain. */
		inputSchema?: DomainPropertiesInputSchema | null;

		/** By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'. */
		inputSchemaMapping?: InputSchemaMapping;

		/** Metric resource id for the domain. */
		metricResourceId?: string | null;

		/** Provisioning state of the domain. */
		provisioningState?: DomainPropertiesProvisioningState | null;
	}

	/** Properties of the Domain. */
	export interface DomainPropertiesFormProperties {

		/** This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. */
		allowTrafficFromAllIPs: FormControl<boolean | null | undefined>,

		/** Endpoint for the domain. */
		endpoint: FormControl<string | null | undefined>,

		/** This determines the format that Event Grid should expect for incoming events published to the domain. */
		inputSchema: FormControl<DomainPropertiesInputSchema | null | undefined>,

		/** Metric resource id for the domain. */
		metricResourceId: FormControl<string | null | undefined>,

		/** Provisioning state of the domain. */
		provisioningState: FormControl<DomainPropertiesProvisioningState | null | undefined>,
	}
	export function CreateDomainPropertiesFormGroup() {
		return new FormGroup<DomainPropertiesFormProperties>({
			allowTrafficFromAllIPs: new FormControl<boolean | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			inputSchema: new FormControl<DomainPropertiesInputSchema | null | undefined>(undefined),
			metricResourceId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<DomainPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export interface InboundIpRule {

		/** Action to perform based on the match or no match of the IpMask. */
		action?: InboundIpRuleAction | null;

		/** IP Address in CIDR notation e.g., 10.0.0.0/8. */
		ipMask?: string | null;
	}
	export interface InboundIpRuleFormProperties {

		/** Action to perform based on the match or no match of the IpMask. */
		action: FormControl<InboundIpRuleAction | null | undefined>,

		/** IP Address in CIDR notation e.g., 10.0.0.0/8. */
		ipMask: FormControl<string | null | undefined>,
	}
	export function CreateInboundIpRuleFormGroup() {
		return new FormGroup<InboundIpRuleFormProperties>({
			action: new FormControl<InboundIpRuleAction | null | undefined>(undefined),
			ipMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InboundIpRuleAction { Allow = 'Allow' }

	export enum DomainPropertiesInputSchema { EventGridSchema = 'EventGridSchema', CustomEventSchema = 'CustomEventSchema', CloudEventSchemaV1_0 = 'CloudEventSchemaV1_0' }


	/** By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'. */
	export interface InputSchemaMapping {

		/**
		 * Type of the custom mapping
		 * Required
		 */
		inputSchemaMappingType: InputSchemaMappingInputSchemaMappingType;
	}

	/** By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'. */
	export interface InputSchemaMappingFormProperties {

		/**
		 * Type of the custom mapping
		 * Required
		 */
		inputSchemaMappingType: FormControl<InputSchemaMappingInputSchemaMappingType | null | undefined>,
	}
	export function CreateInputSchemaMappingFormGroup() {
		return new FormGroup<InputSchemaMappingFormProperties>({
			inputSchemaMappingType: new FormControl<InputSchemaMappingInputSchemaMappingType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputSchemaMappingInputSchemaMappingType { Json = 'Json' }

	export enum DomainPropertiesProvisioningState { Creating = 'Creating', Updating = 'Updating', Deleting = 'Deleting', Succeeded = 'Succeeded', Canceled = 'Canceled', Failed = 'Failed' }


	/** Domain regenerate share access key request. */
	export interface DomainRegenerateKeyRequest {

		/**
		 * Key name to regenerate key1 or key2.
		 * Required
		 */
		keyName: string;
	}

	/** Domain regenerate share access key request. */
	export interface DomainRegenerateKeyRequestFormProperties {

		/**
		 * Key name to regenerate key1 or key2.
		 * Required
		 */
		keyName: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegenerateKeyRequestFormGroup() {
		return new FormGroup<DomainRegenerateKeyRequestFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Shared access keys of the Domain. */
	export interface DomainSharedAccessKeys {

		/** Shared access key1 for the domain. */
		key1?: string | null;

		/** Shared access key2 for the domain. */
		key2?: string | null;
	}

	/** Shared access keys of the Domain. */
	export interface DomainSharedAccessKeysFormProperties {

		/** Shared access key1 for the domain. */
		key1: FormControl<string | null | undefined>,

		/** Shared access key2 for the domain. */
		key2: FormControl<string | null | undefined>,
	}
	export function CreateDomainSharedAccessKeysFormGroup() {
		return new FormGroup<DomainSharedAccessKeysFormProperties>({
			key1: new FormControl<string | null | undefined>(undefined),
			key2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Domain Topic. */
	export interface DomainTopic {

		/** Properties of the Domain Topic. */
		properties?: DomainTopicProperties;
	}

	/** Domain Topic. */
	export interface DomainTopicFormProperties {
	}
	export function CreateDomainTopicFormGroup() {
		return new FormGroup<DomainTopicFormProperties>({
		});

	}


	/** Properties of the Domain Topic. */
	export interface DomainTopicProperties {

		/** Provisioning state of the domain topic. */
		provisioningState?: DomainPropertiesProvisioningState | null;
	}

	/** Properties of the Domain Topic. */
	export interface DomainTopicPropertiesFormProperties {

		/** Provisioning state of the domain topic. */
		provisioningState: FormControl<DomainPropertiesProvisioningState | null | undefined>,
	}
	export function CreateDomainTopicPropertiesFormGroup() {
		return new FormGroup<DomainTopicPropertiesFormProperties>({
			provisioningState: new FormControl<DomainPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** Result of the List Domain Topics operation */
	export interface DomainTopicsListResult {

		/** A link for the next page of domain topics */
		nextLink?: string | null;

		/** A collection of Domain Topics */
		value?: Array<DomainTopic>;
	}

	/** Result of the List Domain Topics operation */
	export interface DomainTopicsListResultFormProperties {

		/** A link for the next page of domain topics */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDomainTopicsListResultFormGroup() {
		return new FormGroup<DomainTopicsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the Domain update */
	export interface DomainUpdateParameters {

		/** This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. */
		allowTrafficFromAllIPs?: boolean | null;

		/** This determines the IP filtering rules that ought be applied when events are received on this domain. */
		inboundIpRules?: Array<InboundIpRule>;

		/** Tags of the domains resource */
		tags?: {[id: string]: string };
	}

	/** Properties of the Domain update */
	export interface DomainUpdateParametersFormProperties {

		/** This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. */
		allowTrafficFromAllIPs: FormControl<boolean | null | undefined>,

		/** Tags of the domains resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDomainUpdateParametersFormGroup() {
		return new FormGroup<DomainUpdateParametersFormProperties>({
			allowTrafficFromAllIPs: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Result of the List Domains operation */
	export interface DomainsListResult {

		/** A link for the next page of domains */
		nextLink?: string | null;

		/** A collection of Domains */
		value?: Array<Domain>;
	}

	/** Result of the List Domains operation */
	export interface DomainsListResultFormProperties {

		/** A link for the next page of domains */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDomainsListResultFormGroup() {
		return new FormGroup<DomainsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the event hub destination for an event subscription. */
	export interface EventHubEventSubscriptionDestination {

		/** The properties for a event hub destination. */
		properties?: EventHubEventSubscriptionDestinationProperties;
	}

	/** Information about the event hub destination for an event subscription. */
	export interface EventHubEventSubscriptionDestinationFormProperties {
	}
	export function CreateEventHubEventSubscriptionDestinationFormGroup() {
		return new FormGroup<EventHubEventSubscriptionDestinationFormProperties>({
		});

	}


	/** The properties for a event hub destination. */
	export interface EventHubEventSubscriptionDestinationProperties {

		/** The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription. */
		resourceId?: string | null;
	}

	/** The properties for a event hub destination. */
	export interface EventHubEventSubscriptionDestinationPropertiesFormProperties {

		/** The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateEventHubEventSubscriptionDestinationPropertiesFormGroup() {
		return new FormGroup<EventHubEventSubscriptionDestinationPropertiesFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event Subscription */
	export interface EventSubscription {

		/** Properties of the Event Subscription. */
		properties?: EventSubscriptionProperties;
	}

	/** Event Subscription */
	export interface EventSubscriptionFormProperties {
	}
	export function CreateEventSubscriptionFormGroup() {
		return new FormGroup<EventSubscriptionFormProperties>({
		});

	}


	/** Properties of the Event Subscription. */
	export interface EventSubscriptionProperties {

		/** Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class. */
		deadLetterDestination?: DeadLetterDestination;

		/** Information about the destination for an event subscription */
		destination?: EventSubscriptionDestination;

		/** The event delivery schema for the event subscription. */
		eventDeliverySchema?: EventSubscriptionPropertiesEventDeliverySchema | null;

		/** Expiration time of the event subscription. */
		expirationTimeUtc?: Date | null;

		/** Filter for the Event Subscription. */
		filter?: EventSubscriptionFilter;

		/** List of user defined labels. */
		labels?: Array<string>;

		/** Provisioning state of the event subscription. */
		provisioningState?: EventSubscriptionPropertiesProvisioningState | null;

		/** Information about the retry policy for an event subscription. */
		retryPolicy?: RetryPolicy;

		/** Name of the topic of the event subscription. */
		topic?: string | null;
	}

	/** Properties of the Event Subscription. */
	export interface EventSubscriptionPropertiesFormProperties {

		/** The event delivery schema for the event subscription. */
		eventDeliverySchema: FormControl<EventSubscriptionPropertiesEventDeliverySchema | null | undefined>,

		/** Expiration time of the event subscription. */
		expirationTimeUtc: FormControl<Date | null | undefined>,

		/** Provisioning state of the event subscription. */
		provisioningState: FormControl<EventSubscriptionPropertiesProvisioningState | null | undefined>,

		/** Name of the topic of the event subscription. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionPropertiesFormGroup() {
		return new FormGroup<EventSubscriptionPropertiesFormProperties>({
			eventDeliverySchema: new FormControl<EventSubscriptionPropertiesEventDeliverySchema | null | undefined>(undefined),
			expirationTimeUtc: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<EventSubscriptionPropertiesProvisioningState | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the destination for an event subscription */
	export interface EventSubscriptionDestination {

		/**
		 * Type of the endpoint for the event subscription destination
		 * Required
		 */
		endpointType: EventSubscriptionDestinationEndpointType;
	}

	/** Information about the destination for an event subscription */
	export interface EventSubscriptionDestinationFormProperties {

		/**
		 * Type of the endpoint for the event subscription destination
		 * Required
		 */
		endpointType: FormControl<EventSubscriptionDestinationEndpointType | null | undefined>,
	}
	export function CreateEventSubscriptionDestinationFormGroup() {
		return new FormGroup<EventSubscriptionDestinationFormProperties>({
			endpointType: new FormControl<EventSubscriptionDestinationEndpointType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventSubscriptionDestinationEndpointType { WebHook = 'WebHook', EventHub = 'EventHub', StorageQueue = 'StorageQueue', HybridConnection = 'HybridConnection', ServiceBusQueue = 'ServiceBusQueue', ServiceBusTopic = 'ServiceBusTopic', AzureFunction = 'AzureFunction' }

	export enum EventSubscriptionPropertiesEventDeliverySchema { EventGridSchema = 'EventGridSchema', CustomInputSchema = 'CustomInputSchema', CloudEventSchemaV1_0 = 'CloudEventSchemaV1_0' }


	/** Filter for the Event Subscription. */
	export interface EventSubscriptionFilter {

		/** An array of advanced filters that are used for filtering event subscriptions. */
		advancedFilters?: Array<AdvancedFilter>;

		/** A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null. */
		includedEventTypes?: Array<string>;

		/**
		 * Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter
		 * should be compared in a case sensitive manner.
		 */
		isSubjectCaseSensitive?: boolean | null;

		/**
		 * An optional string to filter events for an event subscription based on a resource path prefix.
		 * The format of this depends on the publisher of the events.
		 * Wildcard characters are not supported in this path.
		 */
		subjectBeginsWith?: string | null;

		/**
		 * An optional string to filter events for an event subscription based on a resource path suffix.
		 * Wildcard characters are not supported in this path.
		 */
		subjectEndsWith?: string | null;
	}

	/** Filter for the Event Subscription. */
	export interface EventSubscriptionFilterFormProperties {

		/**
		 * Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filter
		 * should be compared in a case sensitive manner.
		 */
		isSubjectCaseSensitive: FormControl<boolean | null | undefined>,

		/**
		 * An optional string to filter events for an event subscription based on a resource path prefix.
		 * The format of this depends on the publisher of the events.
		 * Wildcard characters are not supported in this path.
		 */
		subjectBeginsWith: FormControl<string | null | undefined>,

		/**
		 * An optional string to filter events for an event subscription based on a resource path suffix.
		 * Wildcard characters are not supported in this path.
		 */
		subjectEndsWith: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionFilterFormGroup() {
		return new FormGroup<EventSubscriptionFilterFormProperties>({
			isSubjectCaseSensitive: new FormControl<boolean | null | undefined>(undefined),
			subjectBeginsWith: new FormControl<string | null | undefined>(undefined),
			subjectEndsWith: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventSubscriptionPropertiesProvisioningState { Creating = 'Creating', Updating = 'Updating', Deleting = 'Deleting', Succeeded = 'Succeeded', Canceled = 'Canceled', Failed = 'Failed', AwaitingManualAction = 'AwaitingManualAction' }


	/** Information about the retry policy for an event subscription. */
	export interface RetryPolicy {

		/** Time To Live (in minutes) for events. */
		eventTimeToLiveInMinutes?: number | null;

		/** Maximum number of delivery retry attempts for events. */
		maxDeliveryAttempts?: number | null;
	}

	/** Information about the retry policy for an event subscription. */
	export interface RetryPolicyFormProperties {

		/** Time To Live (in minutes) for events. */
		eventTimeToLiveInMinutes: FormControl<number | null | undefined>,

		/** Maximum number of delivery retry attempts for events. */
		maxDeliveryAttempts: FormControl<number | null | undefined>,
	}
	export function CreateRetryPolicyFormGroup() {
		return new FormGroup<RetryPolicyFormProperties>({
			eventTimeToLiveInMinutes: new FormControl<number | null | undefined>(undefined),
			maxDeliveryAttempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Full endpoint url of an event subscription */
	export interface EventSubscriptionFullUrl {

		/** The URL that represents the endpoint of the destination of an event subscription. */
		endpointUrl?: string | null;
	}

	/** Full endpoint url of an event subscription */
	export interface EventSubscriptionFullUrlFormProperties {

		/** The URL that represents the endpoint of the destination of an event subscription. */
		endpointUrl: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionFullUrlFormGroup() {
		return new FormGroup<EventSubscriptionFullUrlFormProperties>({
			endpointUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the Event Subscription update. */
	export interface EventSubscriptionUpdateParameters {

		/** Information about the dead letter destination for an event subscription. To configure a deadletter destination, do not directly instantiate an object of this class. Instead, instantiate an object of a derived class. Currently, StorageBlobDeadLetterDestination is the only class that derives from this class. */
		deadLetterDestination?: DeadLetterDestination;

		/** Information about the destination for an event subscription */
		destination?: EventSubscriptionDestination;

		/** The event delivery schema for the event subscription. */
		eventDeliverySchema?: EventSubscriptionPropertiesEventDeliverySchema | null;

		/** Information about the expiration time for the event subscription. */
		expirationTimeUtc?: Date | null;

		/** Filter for the Event Subscription. */
		filter?: EventSubscriptionFilter;

		/** List of user defined labels. */
		labels?: Array<string>;

		/** Information about the retry policy for an event subscription. */
		retryPolicy?: RetryPolicy;
	}

	/** Properties of the Event Subscription update. */
	export interface EventSubscriptionUpdateParametersFormProperties {

		/** The event delivery schema for the event subscription. */
		eventDeliverySchema: FormControl<EventSubscriptionPropertiesEventDeliverySchema | null | undefined>,

		/** Information about the expiration time for the event subscription. */
		expirationTimeUtc: FormControl<Date | null | undefined>,
	}
	export function CreateEventSubscriptionUpdateParametersFormGroup() {
		return new FormGroup<EventSubscriptionUpdateParametersFormProperties>({
			eventDeliverySchema: new FormControl<EventSubscriptionPropertiesEventDeliverySchema | null | undefined>(undefined),
			expirationTimeUtc: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Result of the List EventSubscriptions operation */
	export interface EventSubscriptionsListResult {

		/** A link for the next page of event subscriptions */
		nextLink?: string | null;

		/** A collection of EventSubscriptions */
		value?: Array<EventSubscription>;
	}

	/** Result of the List EventSubscriptions operation */
	export interface EventSubscriptionsListResultFormProperties {

		/** A link for the next page of event subscriptions */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEventSubscriptionsListResultFormGroup() {
		return new FormGroup<EventSubscriptionsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event Type for a subject under a topic */
	export interface EventType {

		/** Properties of the event type */
		properties?: EventTypeProperties;
	}

	/** Event Type for a subject under a topic */
	export interface EventTypeFormProperties {
	}
	export function CreateEventTypeFormGroup() {
		return new FormGroup<EventTypeFormProperties>({
		});

	}


	/** Properties of the event type */
	export interface EventTypeProperties {

		/** Description of the event type. */
		description?: string | null;

		/** Display name of the event type. */
		displayName?: string | null;

		/** IsInDefaultSet flag of the event type. */
		isInDefaultSet?: boolean | null;

		/** Url of the schema for this event type. */
		schemaUrl?: string | null;
	}

	/** Properties of the event type */
	export interface EventTypePropertiesFormProperties {

		/** Description of the event type. */
		description: FormControl<string | null | undefined>,

		/** Display name of the event type. */
		displayName: FormControl<string | null | undefined>,

		/** IsInDefaultSet flag of the event type. */
		isInDefaultSet: FormControl<boolean | null | undefined>,

		/** Url of the schema for this event type. */
		schemaUrl: FormControl<string | null | undefined>,
	}
	export function CreateEventTypePropertiesFormGroup() {
		return new FormGroup<EventTypePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isInDefaultSet: new FormControl<boolean | null | undefined>(undefined),
			schemaUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the List Event Types operation */
	export interface EventTypesListResult {

		/** A collection of event types */
		value?: Array<EventType>;
	}

	/** Result of the List Event Types operation */
	export interface EventTypesListResultFormProperties {
	}
	export function CreateEventTypesListResultFormGroup() {
		return new FormGroup<EventTypesListResultFormProperties>({
		});

	}


	/** Information about the HybridConnection destination for an event subscription. */
	export interface HybridConnectionEventSubscriptionDestination {

		/** The properties for a hybrid connection destination. */
		properties?: HybridConnectionEventSubscriptionDestinationProperties;
	}

	/** Information about the HybridConnection destination for an event subscription. */
	export interface HybridConnectionEventSubscriptionDestinationFormProperties {
	}
	export function CreateHybridConnectionEventSubscriptionDestinationFormGroup() {
		return new FormGroup<HybridConnectionEventSubscriptionDestinationFormProperties>({
		});

	}


	/** The properties for a hybrid connection destination. */
	export interface HybridConnectionEventSubscriptionDestinationProperties {

		/** The Azure Resource ID of an hybrid connection that is the destination of an event subscription. */
		resourceId?: string | null;
	}

	/** The properties for a hybrid connection destination. */
	export interface HybridConnectionEventSubscriptionDestinationPropertiesFormProperties {

		/** The Azure Resource ID of an hybrid connection that is the destination of an event subscription. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateHybridConnectionEventSubscriptionDestinationPropertiesFormGroup() {
		return new FormGroup<HybridConnectionEventSubscriptionDestinationPropertiesFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema. */
	export interface JsonField {

		/** Name of a field in the input event schema that's to be used as the source of a mapping. */
		sourceField?: string | null;
	}

	/** This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema. */
	export interface JsonFieldFormProperties {

		/** Name of a field in the input event schema that's to be used as the source of a mapping. */
		sourceField: FormControl<string | null | undefined>,
	}
	export function CreateJsonFieldFormGroup() {
		return new FormGroup<JsonFieldFormProperties>({
			sourceField: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * This is used to express the source of an input schema mapping for a single target field
	 * in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
	 * 'eventtype' and 'dataversion' properties. This represents a field in the input event schema
	 * along with a default value to be used, and at least one of these two properties should be provided.
	 */
	export interface JsonFieldWithDefault {

		/** The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload. */
		defaultValue?: string | null;

		/** Name of a field in the input event schema that's to be used as the source of a mapping. */
		sourceField?: string | null;
	}

	/**
	 * This is used to express the source of an input schema mapping for a single target field
	 * in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
	 * 'eventtype' and 'dataversion' properties. This represents a field in the input event schema
	 * along with a default value to be used, and at least one of these two properties should be provided.
	 */
	export interface JsonFieldWithDefaultFormProperties {

		/** The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload. */
		defaultValue: FormControl<string | null | undefined>,

		/** Name of a field in the input event schema that's to be used as the source of a mapping. */
		sourceField: FormControl<string | null | undefined>,
	}
	export function CreateJsonFieldWithDefaultFormGroup() {
		return new FormGroup<JsonFieldWithDefaultFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			sourceField: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema. */
	export interface JsonInputSchemaMapping {

		/** This can be used to map properties of a source schema (or default values, for certain supported properties) to properties of the EventGridEvent schema. */
		properties?: JsonInputSchemaMappingProperties;
	}

	/** This enables publishing to Event Grid using a custom input schema. This can be used to map properties from a custom input JSON schema to the Event Grid event schema. */
	export interface JsonInputSchemaMappingFormProperties {
	}
	export function CreateJsonInputSchemaMappingFormGroup() {
		return new FormGroup<JsonInputSchemaMappingFormProperties>({
		});

	}


	/** This can be used to map properties of a source schema (or default values, for certain supported properties) to properties of the EventGridEvent schema. */
	export interface JsonInputSchemaMappingProperties {

		/**
		 * This is used to express the source of an input schema mapping for a single target field
		 * in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
		 * 'eventtype' and 'dataversion' properties. This represents a field in the input event schema
		 * along with a default value to be used, and at least one of these two properties should be provided.
		 */
		dataVersion?: JsonFieldWithDefault;

		/** This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema. */
		eventTime?: JsonField;

		/**
		 * This is used to express the source of an input schema mapping for a single target field
		 * in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
		 * 'eventtype' and 'dataversion' properties. This represents a field in the input event schema
		 * along with a default value to be used, and at least one of these two properties should be provided.
		 */
		eventType?: JsonFieldWithDefault;

		/** This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema. */
		id?: JsonField;

		/**
		 * This is used to express the source of an input schema mapping for a single target field
		 * in the Event Grid Event schema. This is currently used in the mappings for the 'subject',
		 * 'eventtype' and 'dataversion' properties. This represents a field in the input event schema
		 * along with a default value to be used, and at least one of these two properties should be provided.
		 */
		subject?: JsonFieldWithDefault;

		/** This is used to express the source of an input schema mapping for a single target field in the Event Grid Event schema. This is currently used in the mappings for the 'id', 'topic' and 'eventtime' properties. This represents a field in the input event schema. */
		topic?: JsonField;
	}

	/** This can be used to map properties of a source schema (or default values, for certain supported properties) to properties of the EventGridEvent schema. */
	export interface JsonInputSchemaMappingPropertiesFormProperties {
	}
	export function CreateJsonInputSchemaMappingPropertiesFormGroup() {
		return new FormGroup<JsonInputSchemaMappingPropertiesFormProperties>({
		});

	}


	/** NumberGreaterThan Advanced Filter. */
	export interface NumberGreaterThanAdvancedFilter {

		/** The filter value. */
		value?: number | null;
	}

	/** NumberGreaterThan Advanced Filter. */
	export interface NumberGreaterThanAdvancedFilterFormProperties {

		/** The filter value. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateNumberGreaterThanAdvancedFilterFormGroup() {
		return new FormGroup<NumberGreaterThanAdvancedFilterFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** NumberGreaterThanOrEquals Advanced Filter. */
	export interface NumberGreaterThanOrEqualsAdvancedFilter {

		/** The filter value. */
		value?: number | null;
	}

	/** NumberGreaterThanOrEquals Advanced Filter. */
	export interface NumberGreaterThanOrEqualsAdvancedFilterFormProperties {

		/** The filter value. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateNumberGreaterThanOrEqualsAdvancedFilterFormGroup() {
		return new FormGroup<NumberGreaterThanOrEqualsAdvancedFilterFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** NumberIn Advanced Filter. */
	export interface NumberInAdvancedFilter {

		/** The set of filter values. */
		values?: Array<number>;
	}

	/** NumberIn Advanced Filter. */
	export interface NumberInAdvancedFilterFormProperties {
	}
	export function CreateNumberInAdvancedFilterFormGroup() {
		return new FormGroup<NumberInAdvancedFilterFormProperties>({
		});

	}


	/** NumberLessThan Advanced Filter. */
	export interface NumberLessThanAdvancedFilter {

		/** The filter value. */
		value?: number | null;
	}

	/** NumberLessThan Advanced Filter. */
	export interface NumberLessThanAdvancedFilterFormProperties {

		/** The filter value. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateNumberLessThanAdvancedFilterFormGroup() {
		return new FormGroup<NumberLessThanAdvancedFilterFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** NumberLessThanOrEquals Advanced Filter. */
	export interface NumberLessThanOrEqualsAdvancedFilter {

		/** The filter value. */
		value?: number | null;
	}

	/** NumberLessThanOrEquals Advanced Filter. */
	export interface NumberLessThanOrEqualsAdvancedFilterFormProperties {

		/** The filter value. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateNumberLessThanOrEqualsAdvancedFilterFormGroup() {
		return new FormGroup<NumberLessThanOrEqualsAdvancedFilterFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** NumberNotIn Advanced Filter. */
	export interface NumberNotInAdvancedFilter {

		/** The set of filter values. */
		values?: Array<number>;
	}

	/** NumberNotIn Advanced Filter. */
	export interface NumberNotInAdvancedFilterFormProperties {
	}
	export function CreateNumberNotInAdvancedFilterFormGroup() {
		return new FormGroup<NumberNotInAdvancedFilterFormProperties>({
		});

	}


	/** Represents an operation returned by the GetOperations request */
	export interface Operation {

		/** Information about an operation */
		display?: OperationInfo;

		/** Name of the operation */
		name?: string | null;

		/** Origin of the operation */
		origin?: string | null;

		/** Properties of the operation */
		properties?: string | null;
	}

	/** Represents an operation returned by the GetOperations request */
	export interface OperationFormProperties {

		/** Name of the operation */
		name: FormControl<string | null | undefined>,

		/** Origin of the operation */
		origin: FormControl<string | null | undefined>,

		/** Properties of the operation */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an operation */
	export interface OperationInfo {

		/** Description of the operation */
		description?: string | null;

		/** Name of the operation */
		operation?: string | null;

		/** Name of the provider */
		provider?: string | null;

		/** Name of the resource type */
		resource?: string | null;
	}

	/** Information about an operation */
	export interface OperationInfoFormProperties {

		/** Description of the operation */
		description: FormControl<string | null | undefined>,

		/** Name of the operation */
		operation: FormControl<string | null | undefined>,

		/** Name of the provider */
		provider: FormControl<string | null | undefined>,

		/** Name of the resource type */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationInfoFormGroup() {
		return new FormGroup<OperationInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the List Operations operation */
	export interface OperationsListResult {

		/** A collection of operations */
		value?: Array<Operation>;
	}

	/** Result of the List Operations operation */
	export interface OperationsListResultFormProperties {
	}
	export function CreateOperationsListResultFormGroup() {
		return new FormGroup<OperationsListResultFormProperties>({
		});

	}


	/** Definition of a Resource */
	export interface Resource {

		/** Fully qualified identifier of the resource. */
		id?: string | null;

		/** Name of the resource */
		name?: string | null;

		/** Type of the resource */
		type?: string | null;
	}

	/** Definition of a Resource */
	export interface ResourceFormProperties {

		/** Fully qualified identifier of the resource. */
		id: FormControl<string | null | undefined>,

		/** Name of the resource */
		name: FormControl<string | null | undefined>,

		/** Type of the resource */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the service bus destination for an event subscription. */
	export interface ServiceBusQueueEventSubscriptionDestination {

		/** The properties that represent the Service Bus destination of an event subscription. */
		properties?: ServiceBusQueueEventSubscriptionDestinationProperties;
	}

	/** Information about the service bus destination for an event subscription. */
	export interface ServiceBusQueueEventSubscriptionDestinationFormProperties {
	}
	export function CreateServiceBusQueueEventSubscriptionDestinationFormGroup() {
		return new FormGroup<ServiceBusQueueEventSubscriptionDestinationFormProperties>({
		});

	}


	/** The properties that represent the Service Bus destination of an event subscription. */
	export interface ServiceBusQueueEventSubscriptionDestinationProperties {

		/** The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription. */
		resourceId?: string | null;
	}

	/** The properties that represent the Service Bus destination of an event subscription. */
	export interface ServiceBusQueueEventSubscriptionDestinationPropertiesFormProperties {

		/** The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateServiceBusQueueEventSubscriptionDestinationPropertiesFormGroup() {
		return new FormGroup<ServiceBusQueueEventSubscriptionDestinationPropertiesFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the service bus topic destination for an event subscription. */
	export interface ServiceBusTopicEventSubscriptionDestination {

		/** The properties that represent the Service Bus Topic destination of an event subscription. */
		properties?: ServiceBusTopicEventSubscriptionDestinationProperties;
	}

	/** Information about the service bus topic destination for an event subscription. */
	export interface ServiceBusTopicEventSubscriptionDestinationFormProperties {
	}
	export function CreateServiceBusTopicEventSubscriptionDestinationFormGroup() {
		return new FormGroup<ServiceBusTopicEventSubscriptionDestinationFormProperties>({
		});

	}


	/** The properties that represent the Service Bus Topic destination of an event subscription. */
	export interface ServiceBusTopicEventSubscriptionDestinationProperties {

		/** The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription. */
		resourceId?: string | null;
	}

	/** The properties that represent the Service Bus Topic destination of an event subscription. */
	export interface ServiceBusTopicEventSubscriptionDestinationPropertiesFormProperties {

		/** The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateServiceBusTopicEventSubscriptionDestinationPropertiesFormGroup() {
		return new FormGroup<ServiceBusTopicEventSubscriptionDestinationPropertiesFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the storage blob based dead letter destination. */
	export interface StorageBlobDeadLetterDestination {

		/** Properties of the storage blob based dead letter destination. */
		properties?: StorageBlobDeadLetterDestinationProperties;
	}

	/** Information about the storage blob based dead letter destination. */
	export interface StorageBlobDeadLetterDestinationFormProperties {
	}
	export function CreateStorageBlobDeadLetterDestinationFormGroup() {
		return new FormGroup<StorageBlobDeadLetterDestinationFormProperties>({
		});

	}


	/** Properties of the storage blob based dead letter destination. */
	export interface StorageBlobDeadLetterDestinationProperties {

		/** The name of the Storage blob container that is the destination of the deadletter events */
		blobContainerName?: string | null;

		/** The Azure Resource ID of the storage account that is the destination of the deadletter events */
		resourceId?: string | null;
	}

	/** Properties of the storage blob based dead letter destination. */
	export interface StorageBlobDeadLetterDestinationPropertiesFormProperties {

		/** The name of the Storage blob container that is the destination of the deadletter events */
		blobContainerName: FormControl<string | null | undefined>,

		/** The Azure Resource ID of the storage account that is the destination of the deadletter events */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateStorageBlobDeadLetterDestinationPropertiesFormGroup() {
		return new FormGroup<StorageBlobDeadLetterDestinationPropertiesFormProperties>({
			blobContainerName: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the storage queue destination for an event subscription. */
	export interface StorageQueueEventSubscriptionDestination {

		/** The properties for a storage queue destination. */
		properties?: StorageQueueEventSubscriptionDestinationProperties;
	}

	/** Information about the storage queue destination for an event subscription. */
	export interface StorageQueueEventSubscriptionDestinationFormProperties {
	}
	export function CreateStorageQueueEventSubscriptionDestinationFormGroup() {
		return new FormGroup<StorageQueueEventSubscriptionDestinationFormProperties>({
		});

	}


	/** The properties for a storage queue destination. */
	export interface StorageQueueEventSubscriptionDestinationProperties {

		/** The name of the Storage queue under a storage account that is the destination of an event subscription. */
		queueName?: string | null;

		/** The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription. */
		resourceId?: string | null;
	}

	/** The properties for a storage queue destination. */
	export interface StorageQueueEventSubscriptionDestinationPropertiesFormProperties {

		/** The name of the Storage queue under a storage account that is the destination of an event subscription. */
		queueName: FormControl<string | null | undefined>,

		/** The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateStorageQueueEventSubscriptionDestinationPropertiesFormGroup() {
		return new FormGroup<StorageQueueEventSubscriptionDestinationPropertiesFormProperties>({
			queueName: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** StringBeginsWith Advanced Filter. */
	export interface StringBeginsWithAdvancedFilter {

		/** The set of filter values. */
		values?: Array<string>;
	}

	/** StringBeginsWith Advanced Filter. */
	export interface StringBeginsWithAdvancedFilterFormProperties {
	}
	export function CreateStringBeginsWithAdvancedFilterFormGroup() {
		return new FormGroup<StringBeginsWithAdvancedFilterFormProperties>({
		});

	}


	/** StringContains Advanced Filter. */
	export interface StringContainsAdvancedFilter {

		/** The set of filter values. */
		values?: Array<string>;
	}

	/** StringContains Advanced Filter. */
	export interface StringContainsAdvancedFilterFormProperties {
	}
	export function CreateStringContainsAdvancedFilterFormGroup() {
		return new FormGroup<StringContainsAdvancedFilterFormProperties>({
		});

	}


	/** StringEndsWith Advanced Filter. */
	export interface StringEndsWithAdvancedFilter {

		/** The set of filter values. */
		values?: Array<string>;
	}

	/** StringEndsWith Advanced Filter. */
	export interface StringEndsWithAdvancedFilterFormProperties {
	}
	export function CreateStringEndsWithAdvancedFilterFormGroup() {
		return new FormGroup<StringEndsWithAdvancedFilterFormProperties>({
		});

	}


	/** StringIn Advanced Filter. */
	export interface StringInAdvancedFilter {

		/** The set of filter values. */
		values?: Array<string>;
	}

	/** StringIn Advanced Filter. */
	export interface StringInAdvancedFilterFormProperties {
	}
	export function CreateStringInAdvancedFilterFormGroup() {
		return new FormGroup<StringInAdvancedFilterFormProperties>({
		});

	}


	/** StringNotIn Advanced Filter. */
	export interface StringNotInAdvancedFilter {

		/** The set of filter values. */
		values?: Array<string>;
	}

	/** StringNotIn Advanced Filter. */
	export interface StringNotInAdvancedFilterFormProperties {
	}
	export function CreateStringNotInAdvancedFilterFormGroup() {
		return new FormGroup<StringNotInAdvancedFilterFormProperties>({
		});

	}


	/** EventGrid Topic */
	export interface Topic {

		/** Properties of the Topic */
		properties?: TopicProperties;
	}

	/** EventGrid Topic */
	export interface TopicFormProperties {
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
		});

	}


	/** Properties of the Topic */
	export interface TopicProperties {

		/** This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. */
		allowTrafficFromAllIPs?: boolean | null;

		/** Endpoint for the topic. */
		endpoint?: string | null;

		/** This determines the IP filtering rules that ought to be applied when events are received on this topic. */
		inboundIpRules?: Array<InboundIpRule>;

		/** This determines the format that Event Grid should expect for incoming events published to the topic. */
		inputSchema?: DomainPropertiesInputSchema | null;

		/** By default, Event Grid expects events to be in the Event Grid event schema. Specifying an input schema mapping enables publishing to Event Grid using a custom input schema. Currently, the only supported type of InputSchemaMapping is 'JsonInputSchemaMapping'. */
		inputSchemaMapping?: InputSchemaMapping;

		/** Metric resource id for the topic. */
		metricResourceId?: string | null;

		/** Provisioning state of the topic. */
		provisioningState?: DomainPropertiesProvisioningState | null;
	}

	/** Properties of the Topic */
	export interface TopicPropertiesFormProperties {

		/** This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. */
		allowTrafficFromAllIPs: FormControl<boolean | null | undefined>,

		/** Endpoint for the topic. */
		endpoint: FormControl<string | null | undefined>,

		/** This determines the format that Event Grid should expect for incoming events published to the topic. */
		inputSchema: FormControl<DomainPropertiesInputSchema | null | undefined>,

		/** Metric resource id for the topic. */
		metricResourceId: FormControl<string | null | undefined>,

		/** Provisioning state of the topic. */
		provisioningState: FormControl<DomainPropertiesProvisioningState | null | undefined>,
	}
	export function CreateTopicPropertiesFormGroup() {
		return new FormGroup<TopicPropertiesFormProperties>({
			allowTrafficFromAllIPs: new FormControl<boolean | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			inputSchema: new FormControl<DomainPropertiesInputSchema | null | undefined>(undefined),
			metricResourceId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<DomainPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** Topic regenerate share access key request */
	export interface TopicRegenerateKeyRequest {

		/**
		 * Key name to regenerate key1 or key2
		 * Required
		 */
		keyName: string;
	}

	/** Topic regenerate share access key request */
	export interface TopicRegenerateKeyRequestFormProperties {

		/**
		 * Key name to regenerate key1 or key2
		 * Required
		 */
		keyName: FormControl<string | null | undefined>,
	}
	export function CreateTopicRegenerateKeyRequestFormGroup() {
		return new FormGroup<TopicRegenerateKeyRequestFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Shared access keys of the Topic */
	export interface TopicSharedAccessKeys {

		/** Shared access key1 for the topic. */
		key1?: string | null;

		/** Shared access key2 for the topic. */
		key2?: string | null;
	}

	/** Shared access keys of the Topic */
	export interface TopicSharedAccessKeysFormProperties {

		/** Shared access key1 for the topic. */
		key1: FormControl<string | null | undefined>,

		/** Shared access key2 for the topic. */
		key2: FormControl<string | null | undefined>,
	}
	export function CreateTopicSharedAccessKeysFormGroup() {
		return new FormGroup<TopicSharedAccessKeysFormProperties>({
			key1: new FormControl<string | null | undefined>(undefined),
			key2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a topic type info. */
	export interface TopicTypeInfo {

		/** Properties of a topic type. */
		properties?: TopicTypeProperties;
	}

	/** Properties of a topic type info. */
	export interface TopicTypeInfoFormProperties {
	}
	export function CreateTopicTypeInfoFormGroup() {
		return new FormGroup<TopicTypeInfoFormProperties>({
		});

	}


	/** Properties of a topic type. */
	export interface TopicTypeProperties {

		/** Description of the topic type. */
		description?: string | null;

		/** Display Name for the topic type. */
		displayName?: string | null;

		/** Namespace of the provider of the topic type. */
		provider?: string | null;

		/** Provisioning state of the topic type */
		provisioningState?: DomainPropertiesProvisioningState | null;

		/** Region type of the resource. */
		resourceRegionType?: TopicTypePropertiesResourceRegionType | null;

		/** Source resource format. */
		sourceResourceFormat?: string | null;

		/** List of locations supported by this topic type. */
		supportedLocations?: Array<string>;
	}

	/** Properties of a topic type. */
	export interface TopicTypePropertiesFormProperties {

		/** Description of the topic type. */
		description: FormControl<string | null | undefined>,

		/** Display Name for the topic type. */
		displayName: FormControl<string | null | undefined>,

		/** Namespace of the provider of the topic type. */
		provider: FormControl<string | null | undefined>,

		/** Provisioning state of the topic type */
		provisioningState: FormControl<DomainPropertiesProvisioningState | null | undefined>,

		/** Region type of the resource. */
		resourceRegionType: FormControl<TopicTypePropertiesResourceRegionType | null | undefined>,

		/** Source resource format. */
		sourceResourceFormat: FormControl<string | null | undefined>,
	}
	export function CreateTopicTypePropertiesFormGroup() {
		return new FormGroup<TopicTypePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<DomainPropertiesProvisioningState | null | undefined>(undefined),
			resourceRegionType: new FormControl<TopicTypePropertiesResourceRegionType | null | undefined>(undefined),
			sourceResourceFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TopicTypePropertiesResourceRegionType { RegionalResource = 'RegionalResource', GlobalResource = 'GlobalResource' }


	/** Result of the List Topic Types operation */
	export interface TopicTypesListResult {

		/** A collection of topic types */
		value?: Array<TopicTypeInfo>;
	}

	/** Result of the List Topic Types operation */
	export interface TopicTypesListResultFormProperties {
	}
	export function CreateTopicTypesListResultFormGroup() {
		return new FormGroup<TopicTypesListResultFormProperties>({
		});

	}


	/** Properties of the Topic update */
	export interface TopicUpdateParameters {

		/** This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. */
		allowTrafficFromAllIPs?: boolean | null;

		/** This determines the IP filtering rules that ought be applied when events are received on this domain. */
		inboundIpRules?: Array<InboundIpRule>;

		/** Tags of the resource. */
		tags?: {[id: string]: string };
	}

	/** Properties of the Topic update */
	export interface TopicUpdateParametersFormProperties {

		/** This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. */
		allowTrafficFromAllIPs: FormControl<boolean | null | undefined>,

		/** Tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTopicUpdateParametersFormGroup() {
		return new FormGroup<TopicUpdateParametersFormProperties>({
			allowTrafficFromAllIPs: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Result of the List Topics operation */
	export interface TopicsListResult {

		/** A link for the next page of topics */
		nextLink?: string | null;

		/** A collection of Topics */
		value?: Array<Topic>;
	}

	/** Result of the List Topics operation */
	export interface TopicsListResultFormProperties {

		/** A link for the next page of topics */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTopicsListResultFormGroup() {
		return new FormGroup<TopicsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a Tracked Resource. */
	export interface TrackedResource {

		/**
		 * Location of the resource.
		 * Required
		 */
		location: string;

		/** Tags of the resource. */
		tags?: {[id: string]: string };
	}

	/** Definition of a Tracked Resource. */
	export interface TrackedResourceFormProperties {

		/**
		 * Location of the resource.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Information about the webhook destination for an event subscription. */
	export interface WebHookEventSubscriptionDestination {

		/** Information about the webhook destination properties for an event subscription. */
		properties?: WebHookEventSubscriptionDestinationProperties;
	}

	/** Information about the webhook destination for an event subscription. */
	export interface WebHookEventSubscriptionDestinationFormProperties {
	}
	export function CreateWebHookEventSubscriptionDestinationFormGroup() {
		return new FormGroup<WebHookEventSubscriptionDestinationFormProperties>({
		});

	}


	/** Information about the webhook destination properties for an event subscription. */
	export interface WebHookEventSubscriptionDestinationProperties {

		/** The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests. */
		azureActiveDirectoryApplicationIdOrUri?: string | null;

		/** The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests. */
		azureActiveDirectoryTenantId?: string | null;

		/** The base URL that represents the endpoint of the destination of an event subscription. */
		endpointBaseUrl?: string | null;

		/** The URL that represents the endpoint of the destination of an event subscription. */
		endpointUrl?: string | null;

		/** Maximum number of events per batch. */
		maxEventsPerBatch?: number | null;

		/** Preferred batch size in Kilobytes. */
		preferredBatchSizeInKilobytes?: number | null;
	}

	/** Information about the webhook destination properties for an event subscription. */
	export interface WebHookEventSubscriptionDestinationPropertiesFormProperties {

		/** The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests. */
		azureActiveDirectoryApplicationIdOrUri: FormControl<string | null | undefined>,

		/** The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests. */
		azureActiveDirectoryTenantId: FormControl<string | null | undefined>,

		/** The base URL that represents the endpoint of the destination of an event subscription. */
		endpointBaseUrl: FormControl<string | null | undefined>,

		/** The URL that represents the endpoint of the destination of an event subscription. */
		endpointUrl: FormControl<string | null | undefined>,

		/** Maximum number of events per batch. */
		maxEventsPerBatch: FormControl<number | null | undefined>,

		/** Preferred batch size in Kilobytes. */
		preferredBatchSizeInKilobytes: FormControl<number | null | undefined>,
	}
	export function CreateWebHookEventSubscriptionDestinationPropertiesFormGroup() {
		return new FormGroup<WebHookEventSubscriptionDestinationPropertiesFormProperties>({
			azureActiveDirectoryApplicationIdOrUri: new FormControl<string | null | undefined>(undefined),
			azureActiveDirectoryTenantId: new FormControl<string | null | undefined>(undefined),
			endpointBaseUrl: new FormControl<string | null | undefined>(undefined),
			endpointUrl: new FormControl<string | null | undefined>(undefined),
			maxEventsPerBatch: new FormControl<number | null | undefined>(undefined),
			preferredBatchSizeInKilobytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List available operations.
		 * List the available operations supported by the Microsoft.EventGrid resource provider.
		 * Get providers/Microsoft.EventGrid/operations
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {OperationsListResult} OK
		 */
		Operations_List(api_version: string): Observable<OperationsListResult> {
			return this.http.get<OperationsListResult>(this.baseUri + 'providers/Microsoft.EventGrid/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List topic types.
		 * List all registered topic types.
		 * Get providers/Microsoft.EventGrid/topicTypes
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {TopicTypesListResult} OK
		 */
		TopicTypes_List(api_version: string): Observable<TopicTypesListResult> {
			return this.http.get<TopicTypesListResult>(this.baseUri + 'providers/Microsoft.EventGrid/topicTypes?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a topic type.
		 * Get information about a topic type.
		 * Get providers/Microsoft.EventGrid/topicTypes/{topicTypeName}
		 * @param {string} topicTypeName Name of the topic type.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {TopicTypeInfo} OK
		 */
		TopicTypes_Get(topicTypeName: string, api_version: string): Observable<TopicTypeInfo> {
			return this.http.get<TopicTypeInfo>(this.baseUri + 'providers/Microsoft.EventGrid/topicTypes/' + (topicTypeName == null ? '' : encodeURIComponent(topicTypeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List event types.
		 * List event types for a topic type.
		 * Get providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventTypes
		 * @param {string} topicTypeName Name of the topic type.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {EventTypesListResult} OK
		 */
		TopicTypes_ListEventTypes(topicTypeName: string, api_version: string): Observable<EventTypesListResult> {
			return this.http.get<EventTypesListResult>(this.baseUri + 'providers/Microsoft.EventGrid/topicTypes/' + (topicTypeName == null ? '' : encodeURIComponent(topicTypeName)) + '/eventTypes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List domains under an Azure subscription.
		 * List all the domains under an Azure subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/domains
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {DomainsListResult} OK
		 */
		Domains_ListBySubscription(subscriptionId: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<DomainsListResult> {
			return this.http.get<DomainsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EventGrid/domains&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * Get an aggregated list of all global event subscriptions under an Azure subscription.
		 * List all aggregated global event subscriptions under a specific Azure subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListGlobalBySubscription(subscriptionId: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EventGrid/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List all regional event subscriptions under an Azure subscription.
		 * List all event subscriptions from the given location under a specific Azure subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/locations/{location}/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Name of the location.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListRegionalBySubscription(subscriptionId: string, location: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EventGrid/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List all regional event subscriptions under an Azure subscription for a topic type.
		 * List all event subscriptions from the given location under a specific Azure subscription and topic type.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/locations/{location}/topicTypes/{topicTypeName}/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Name of the location.
		 * @param {string} topicTypeName Name of the topic type.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListRegionalBySubscriptionForTopicType(subscriptionId: string, location: string, topicTypeName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EventGrid/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/topicTypes/' + (topicTypeName == null ? '' : encodeURIComponent(topicTypeName)) + '/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List all global event subscriptions for a topic type.
		 * List all global event subscriptions under an Azure subscription for a topic type.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} topicTypeName Name of the topic type.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListGlobalBySubscriptionForTopicType(subscriptionId: string, topicTypeName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EventGrid/topicTypes/' + (topicTypeName == null ? '' : encodeURIComponent(topicTypeName)) + '/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List topics under an Azure subscription.
		 * List all the topics under an Azure subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/topics
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {TopicsListResult} OK
		 */
		Topics_ListBySubscription(subscriptionId: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<TopicsListResult> {
			return this.http.get<TopicsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EventGrid/topics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List domains under a resource group.
		 * List all the domains under a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {DomainsListResult} OK
		 */
		Domains_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<DomainsListResult> {
			return this.http.get<DomainsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * Get a domain.
		 * Get properties of a domain.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the domain.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {Domain} OK
		 */
		Domains_Get(subscriptionId: string, resourceGroupName: string, domainName: string, api_version: string): Observable<Domain> {
			return this.http.get<Domain>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a domain.
		 * Asynchronously creates or updates a new domain with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the domain.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {Domain} requestBody Domain information.
		 * @return {void} 
		 */
		Domains_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, domainName: string, api_version: string, requestBody: Domain): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a domain.
		 * Delete existing domain.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the domain.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} 
		 */
		Domains_Delete(subscriptionId: string, resourceGroupName: string, domainName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a domain.
		 * Asynchronously updates a domain with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the domain.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {DomainUpdateParameters} requestBody Domain update information.
		 * @return {void} 
		 */
		Domains_Update(subscriptionId: string, resourceGroupName: string, domainName: string, api_version: string, requestBody: DomainUpdateParameters): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List keys for a domain.
		 * List the two keys used to publish to a domain.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/listKeys
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the domain.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {DomainSharedAccessKeys} OK
		 */
		Domains_ListSharedAccessKeys(subscriptionId: string, resourceGroupName: string, domainName: string, api_version: string): Observable<DomainSharedAccessKeys> {
			return this.http.post<DomainSharedAccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerate key for a domain.
		 * Regenerate a shared access key for a domain.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/regenerateKey
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the domain.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {DomainRegenerateKeyRequest} requestBody Request body to regenerate key.
		 * @return {DomainSharedAccessKeys} OK
		 */
		Domains_RegenerateKey(subscriptionId: string, resourceGroupName: string, domainName: string, api_version: string, requestBody: DomainRegenerateKeyRequest): Observable<DomainSharedAccessKeys> {
			return this.http.post<DomainSharedAccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/regenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List domain topics.
		 * List all the topics in a domain.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Domain name.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {DomainTopicsListResult} OK
		 */
		DomainTopics_ListByDomain(subscriptionId: string, resourceGroupName: string, domainName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<DomainTopicsListResult> {
			return this.http.get<DomainTopicsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/topics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * Get a domain topic.
		 * Get properties of a domain topic.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the domain.
		 * @param {string} domainTopicName Name of the topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {DomainTopic} OK
		 */
		DomainTopics_Get(subscriptionId: string, resourceGroupName: string, domainName: string, domainTopicName: string, api_version: string): Observable<DomainTopic> {
			return this.http.get<DomainTopic>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/topics/' + (domainTopicName == null ? '' : encodeURIComponent(domainTopicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a domain topic.
		 * Asynchronously creates or updates a new domain topic with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the domain.
		 * @param {string} domainTopicName Name of the domain topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} 
		 */
		DomainTopics_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, domainName: string, domainTopicName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/topics/' + (domainTopicName == null ? '' : encodeURIComponent(domainTopicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a domain topic.
		 * Delete existing domain topic.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the domain.
		 * @param {string} domainTopicName Name of the domain topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} 
		 */
		DomainTopics_Delete(subscriptionId: string, resourceGroupName: string, domainName: string, domainTopicName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/topics/' + (domainTopicName == null ? '' : encodeURIComponent(domainTopicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all event subscriptions for a specific domain topic.
		 * List all event subscriptions that have been created for a specific domain topic.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/providers/Microsoft.EventGrid/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} domainName Name of the top level domain.
		 * @param {string} topicName Name of the domain topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListByDomainTopic(subscriptionId: string, resourceGroupName: string, domainName: string, topicName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/domains/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/providers/Microsoft.EventGrid/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List all global event subscriptions under an Azure subscription and resource group.
		 * List all global event subscriptions under a specific Azure subscription and resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListGlobalByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List all regional event subscriptions under an Azure subscription and resource group.
		 * List all event subscriptions from the given location under a specific Azure subscription and resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/locations/{location}/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} location Name of the location.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListRegionalByResourceGroup(subscriptionId: string, resourceGroupName: string, location: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List all regional event subscriptions under an Azure subscription and resource group for a topic type.
		 * List all event subscriptions from the given location under a specific Azure subscription and resource group and topic type.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/locations/{location}/topicTypes/{topicTypeName}/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} location Name of the location.
		 * @param {string} topicTypeName Name of the topic type.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListRegionalByResourceGroupForTopicType(subscriptionId: string, resourceGroupName: string, location: string, topicTypeName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/topicTypes/' + (topicTypeName == null ? '' : encodeURIComponent(topicTypeName)) + '/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List all global event subscriptions under a resource group for a topic type.
		 * List all global event subscriptions under a resource group for a specific topic type.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} topicTypeName Name of the topic type.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListGlobalByResourceGroupForTopicType(subscriptionId: string, resourceGroupName: string, topicTypeName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/topicTypes/' + (topicTypeName == null ? '' : encodeURIComponent(topicTypeName)) + '/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List topics under a resource group.
		 * List all the topics under a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {TopicsListResult} OK
		 */
		Topics_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<TopicsListResult> {
			return this.http.get<TopicsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/topics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * Get a topic.
		 * Get properties of a topic.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} topicName Name of the topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {Topic} OK
		 */
		Topics_Get(subscriptionId: string, resourceGroupName: string, topicName: string, api_version: string): Observable<Topic> {
			return this.http.get<Topic>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a topic.
		 * Asynchronously creates a new topic with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} topicName Name of the topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {Topic} requestBody Topic information.
		 * @return {void} 
		 */
		Topics_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, topicName: string, api_version: string, requestBody: Topic): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a topic.
		 * Delete existing topic.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} topicName Name of the topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} 
		 */
		Topics_Delete(subscriptionId: string, resourceGroupName: string, topicName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a topic.
		 * Asynchronously updates a topic with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} topicName Name of the topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {TopicUpdateParameters} requestBody Topic update information.
		 * @return {void} 
		 */
		Topics_Update(subscriptionId: string, resourceGroupName: string, topicName: string, api_version: string, requestBody: TopicUpdateParameters): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List keys for a topic.
		 * List the two keys used to publish to a topic.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/listKeys
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} topicName Name of the topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {TopicSharedAccessKeys} OK
		 */
		Topics_ListSharedAccessKeys(subscriptionId: string, resourceGroupName: string, topicName: string, api_version: string): Observable<TopicSharedAccessKeys> {
			return this.http.post<TopicSharedAccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerate key for a topic.
		 * Regenerate a shared access key for a topic.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/regenerateKey
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} topicName Name of the topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {TopicRegenerateKeyRequest} requestBody Request body to regenerate key.
		 * @return {TopicSharedAccessKeys} OK
		 */
		Topics_RegenerateKey(subscriptionId: string, resourceGroupName: string, topicName: string, api_version: string, requestBody: TopicRegenerateKeyRequest): Observable<TopicSharedAccessKeys> {
			return this.http.post<TopicSharedAccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EventGrid/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/regenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all event subscriptions for a specific topic.
		 * List all event subscriptions that have been created for a specific topic.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerNamespace}/{resourceTypeName}/{resourceName}/providers/Microsoft.EventGrid/eventSubscriptions
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} providerNamespace Namespace of the provider of the topic.
		 * @param {string} resourceTypeName Name of the resource type.
		 * @param {string} resourceName Name of the resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} filter The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
		 * @param {number} top The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
		 * @return {EventSubscriptionsListResult} OK
		 */
		EventSubscriptions_ListByResource(subscriptionId: string, resourceGroupName: string, providerNamespace: string, resourceTypeName: string, resourceName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined): Observable<EventSubscriptionsListResult> {
			return this.http.get<EventSubscriptionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerNamespace == null ? '' : encodeURIComponent(providerNamespace)) + '/' + (resourceTypeName == null ? '' : encodeURIComponent(resourceTypeName)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.EventGrid/eventSubscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top, {});
		}

		/**
		 * List topic event types.
		 * List event types for a topic.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerNamespace}/{resourceTypeName}/{resourceName}/providers/Microsoft.EventGrid/eventTypes
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription.
		 * @param {string} providerNamespace Namespace of the provider of the topic.
		 * @param {string} resourceTypeName Name of the topic type.
		 * @param {string} resourceName Name of the topic.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {EventTypesListResult} OK
		 */
		Topics_ListEventTypes(subscriptionId: string, resourceGroupName: string, providerNamespace: string, resourceTypeName: string, resourceName: string, api_version: string): Observable<EventTypesListResult> {
			return this.http.get<EventTypesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (providerNamespace == null ? '' : encodeURIComponent(providerNamespace)) + '/' + (resourceTypeName == null ? '' : encodeURIComponent(resourceTypeName)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.EventGrid/eventTypes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an event subscription.
		 * Get properties of an event subscription.
		 * Get {scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}
		 * @param {string} scope The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
		 * @param {string} eventSubscriptionName Name of the event subscription.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {EventSubscription} OK
		 */
		EventSubscriptions_Get(scope: string, eventSubscriptionName: string, api_version: string): Observable<EventSubscription> {
			return this.http.get<EventSubscription>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.EventGrid/eventSubscriptions/' + (eventSubscriptionName == null ? '' : encodeURIComponent(eventSubscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Create or update an event subscription.
		 * Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
		 * Put {scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}
		 * @param {string} scope The identifier of the resource to which the event subscription needs to be created or updated. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
		 * @param {string} eventSubscriptionName Name of the event subscription. Event subscription names must be between 3 and 64 characters in length and should use alphanumeric letters only.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {EventSubscription} requestBody Event subscription properties containing the destination and filter information.
		 * @return {void} 
		 */
		EventSubscriptions_CreateOrUpdate(scope: string, eventSubscriptionName: string, api_version: string, requestBody: EventSubscription): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.EventGrid/eventSubscriptions/' + (eventSubscriptionName == null ? '' : encodeURIComponent(eventSubscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an event subscription.
		 * Delete an existing event subscription.
		 * Delete {scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}
		 * @param {string} scope The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
		 * @param {string} eventSubscriptionName Name of the event subscription.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} OK
		 */
		EventSubscriptions_Delete(scope: string, eventSubscriptionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.EventGrid/eventSubscriptions/' + (eventSubscriptionName == null ? '' : encodeURIComponent(eventSubscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an event subscription.
		 * Asynchronously updates an existing event subscription.
		 * Patch {scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}
		 * @param {string} scope The scope of existing event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
		 * @param {string} eventSubscriptionName Name of the event subscription to be updated.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {EventSubscriptionUpdateParameters} requestBody Updated event subscription information.
		 * @return {void} 
		 */
		EventSubscriptions_Update(scope: string, eventSubscriptionName: string, api_version: string, requestBody: EventSubscriptionUpdateParameters): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.EventGrid/eventSubscriptions/' + (eventSubscriptionName == null ? '' : encodeURIComponent(eventSubscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get full URL of an event subscription.
		 * Get the full endpoint URL for an event subscription.
		 * Post {scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}/getFullUrl
		 * @param {string} scope The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
		 * @param {string} eventSubscriptionName Name of the event subscription.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {EventSubscriptionFullUrl} OK
		 */
		EventSubscriptions_GetFullUrl(scope: string, eventSubscriptionName: string, api_version: string): Observable<EventSubscriptionFullUrl> {
			return this.http.post<EventSubscriptionFullUrl>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.EventGrid/eventSubscriptions/' + (eventSubscriptionName == null ? '' : encodeURIComponent(eventSubscriptionName)) + '/getFullUrl&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', null, {});
		}
	}

}

