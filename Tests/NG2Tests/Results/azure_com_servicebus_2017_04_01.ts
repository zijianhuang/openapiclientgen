import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Namespace/ServiceBus Connection String */
	export interface AccessKeys {

		/** Primary connection string of the alias if GEO DR is enabled */
		aliasPrimaryConnectionString?: string | null;

		/** Secondary  connection string of the alias if GEO DR is enabled */
		aliasSecondaryConnectionString?: string | null;

		/** A string that describes the authorization rule. */
		keyName?: string | null;

		/** Primary connection string of the created namespace authorization rule. */
		primaryConnectionString?: string | null;

		/** A base64-encoded 256-bit primary key for signing and validating the SAS token. */
		primaryKey?: string | null;

		/** Secondary connection string of the created namespace authorization rule. */
		secondaryConnectionString?: string | null;

		/** A base64-encoded 256-bit primary key for signing and validating the SAS token. */
		secondaryKey?: string | null;
	}

	/** Namespace/ServiceBus Connection String */
	export interface AccessKeysFormProperties {

		/** Primary connection string of the alias if GEO DR is enabled */
		aliasPrimaryConnectionString: FormControl<string | null | undefined>,

		/** Secondary  connection string of the alias if GEO DR is enabled */
		aliasSecondaryConnectionString: FormControl<string | null | undefined>,

		/** A string that describes the authorization rule. */
		keyName: FormControl<string | null | undefined>,

		/** Primary connection string of the created namespace authorization rule. */
		primaryConnectionString: FormControl<string | null | undefined>,

		/** A base64-encoded 256-bit primary key for signing and validating the SAS token. */
		primaryKey: FormControl<string | null | undefined>,

		/** Secondary connection string of the created namespace authorization rule. */
		secondaryConnectionString: FormControl<string | null | undefined>,

		/** A base64-encoded 256-bit primary key for signing and validating the SAS token. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateAccessKeysFormGroup() {
		return new FormGroup<AccessKeysFormProperties>({
			aliasPrimaryConnectionString: new FormControl<string | null | undefined>(undefined),
			aliasSecondaryConnectionString: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
			primaryConnectionString: new FormControl<string | null | undefined>(undefined),
			primaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryConnectionString: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression. */
	export interface Action {

		/**
		 * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibilityLevel?: number | null;

		/** Value that indicates whether the rule action requires preprocessing. */
		requiresPreprocessing?: boolean | null;

		/** SQL expression. e.g. MyProperty='ABC' */
		sqlExpression?: string | null;
	}

	/** Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression. */
	export interface ActionFormProperties {

		/**
		 * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibilityLevel: FormControl<number | null | undefined>,

		/** Value that indicates whether the rule action requires preprocessing. */
		requiresPreprocessing: FormControl<boolean | null | undefined>,

		/** SQL expression. e.g. MyProperty='ABC' */
		sqlExpression: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			compatibilityLevel: new FormControl<number | null | undefined>(undefined),
			requiresPreprocessing: new FormControl<boolean | null | undefined>(undefined),
			sqlExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Single item in List or Get Alias(Disaster Recovery configuration) operation */
	export interface ArmDisasterRecovery extends Resource {

		/** Properties required to the Create Or Update Alias(Disaster Recovery configurations) */
		properties?: any;
	}

	/** Single item in List or Get Alias(Disaster Recovery configuration) operation */
	export interface ArmDisasterRecoveryFormProperties extends ResourceFormProperties {

		/** Properties required to the Create Or Update Alias(Disaster Recovery configurations) */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateArmDisasterRecoveryFormGroup() {
		return new FormGroup<ArmDisasterRecoveryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The result of the List Alias(Disaster Recovery configuration) operation. */
	export interface ArmDisasterRecoveryListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of Alias(Disaster Recovery configuration) */
		nextLink?: string | null;

		/** List of Alias(Disaster Recovery configurations) */
		value?: Array<ArmDisasterRecovery>;
	}

	/** The result of the List Alias(Disaster Recovery configuration) operation. */
	export interface ArmDisasterRecoveryListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of Alias(Disaster Recovery configuration) */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateArmDisasterRecoveryListResultFormGroup() {
		return new FormGroup<ArmDisasterRecoveryListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AuthorizationRule properties. */
	export interface AuthorizationRuleProperties {

		/**
		 * The rights associated with the rule.
		 * Required
		 */
		rights: Array<string>;
	}

	/** AuthorizationRule properties. */
	export interface AuthorizationRulePropertiesFormProperties {
	}
	export function CreateAuthorizationRulePropertiesFormGroup() {
		return new FormGroup<AuthorizationRulePropertiesFormProperties>({
		});

	}


	/** Properties to configure capture description for eventhub */
	export interface CaptureDescription {

		/** Capture storage details for capture description */
		destination?: Destination;

		/** A value that indicates whether capture description is enabled. */
		enabled?: boolean | null;

		/** Enumerates the possible values for the encoding format of capture description. */
		encoding?: CaptureDescriptionEncoding | null;

		/**
		 * The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
		 * Minimum: 60
		 * Maximum: 900
		 */
		intervalInSeconds?: number | null;

		/**
		 * The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 and 524288000 bytes
		 * Minimum: 10485760
		 * Maximum: 524288000
		 */
		sizeLimitInBytes?: number | null;
	}

	/** Properties to configure capture description for eventhub */
	export interface CaptureDescriptionFormProperties {

		/** A value that indicates whether capture description is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Enumerates the possible values for the encoding format of capture description. */
		encoding: FormControl<CaptureDescriptionEncoding | null | undefined>,

		/**
		 * The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds
		 * Minimum: 60
		 * Maximum: 900
		 */
		intervalInSeconds: FormControl<number | null | undefined>,

		/**
		 * The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 and 524288000 bytes
		 * Minimum: 10485760
		 * Maximum: 524288000
		 */
		sizeLimitInBytes: FormControl<number | null | undefined>,
	}
	export function CreateCaptureDescriptionFormGroup() {
		return new FormGroup<CaptureDescriptionFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<CaptureDescriptionEncoding | null | undefined>(undefined),
			intervalInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(900)]),
			sizeLimitInBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(10485760), Validators.max(524288000)]),
		});

	}

	export enum CaptureDescriptionEncoding { Avro = 'Avro', AvroDeflate = 'AvroDeflate' }


	/** Description of a Check Name availability request properties. */
	export interface CheckNameAvailability {

		/**
		 * The Name to check the namespace name availability and The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
		 * Required
		 */
		name: string;
	}

	/** Description of a Check Name availability request properties. */
	export interface CheckNameAvailabilityFormProperties {

		/**
		 * The Name to check the namespace name availability and The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCheckNameAvailabilityFormGroup() {
		return new FormGroup<CheckNameAvailabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Description of a Check Name availability request properties. */
	export interface CheckNameAvailabilityResult {

		/** The detailed info regarding the reason associated with the namespace. */
		message?: string | null;

		/** Value indicating namespace is availability, true if the namespace is available; otherwise, false. */
		nameAvailable?: boolean | null;

		/** Specifies the reason for the unavailability of the service. */
		reason?: CheckNameAvailabilityResultReason | null;
	}

	/** Description of a Check Name availability request properties. */
	export interface CheckNameAvailabilityResultFormProperties {

		/** The detailed info regarding the reason associated with the namespace. */
		message: FormControl<string | null | undefined>,

		/** Value indicating namespace is availability, true if the namespace is available; otherwise, false. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Specifies the reason for the unavailability of the service. */
		reason: FormControl<CheckNameAvailabilityResultReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResultFormGroup() {
		return new FormGroup<CheckNameAvailabilityResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityResultReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityResultReason { None = 'None', InvalidName = 'InvalidName', SubscriptionIsDisabled = 'SubscriptionIsDisabled', NameInUse = 'NameInUse', NameInLockdown = 'NameInLockdown', TooManyNamespaceInCurrentSubscription = 'TooManyNamespaceInCurrentSubscription' }


	/** Represents the correlation filter expression. */
	export interface CorrelationFilter {

		/** Content type of the message. */
		contentType?: string | null;

		/** Identifier of the correlation. */
		correlationId?: string | null;

		/** Application specific label. */
		label?: string | null;

		/** Identifier of the message. */
		messageId?: string | null;

		/** dictionary object for custom filters */
		properties?: {[id: string]: string };

		/** Address of the queue to reply to. */
		replyTo?: string | null;

		/** Session identifier to reply to. */
		replyToSessionId?: string | null;

		/** Value that indicates whether the rule action requires preprocessing. */
		requiresPreprocessing?: boolean | null;

		/** Session identifier. */
		sessionId?: string | null;

		/** Address to send to. */
		to?: string | null;
	}

	/** Represents the correlation filter expression. */
	export interface CorrelationFilterFormProperties {

		/** Content type of the message. */
		contentType: FormControl<string | null | undefined>,

		/** Identifier of the correlation. */
		correlationId: FormControl<string | null | undefined>,

		/** Application specific label. */
		label: FormControl<string | null | undefined>,

		/** Identifier of the message. */
		messageId: FormControl<string | null | undefined>,

		/** dictionary object for custom filters */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Address of the queue to reply to. */
		replyTo: FormControl<string | null | undefined>,

		/** Session identifier to reply to. */
		replyToSessionId: FormControl<string | null | undefined>,

		/** Value that indicates whether the rule action requires preprocessing. */
		requiresPreprocessing: FormControl<boolean | null | undefined>,

		/** Session identifier. */
		sessionId: FormControl<string | null | undefined>,

		/** Address to send to. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateCorrelationFilterFormGroup() {
		return new FormGroup<CorrelationFilterFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			replyTo: new FormControl<string | null | undefined>(undefined),
			replyToSessionId: new FormControl<string | null | undefined>(undefined),
			requiresPreprocessing: new FormControl<boolean | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Capture storage details for capture description */
	export interface Destination {

		/** Name for capture destination */
		name?: string | null;

		/** Properties describing the storage account, blob container and archive name format for capture destination */
		properties?: any;
	}

	/** Capture storage details for capture description */
	export interface DestinationFormProperties {

		/** Name for capture destination */
		name: FormControl<string | null | undefined>,

		/** Properties describing the storage account, blob container and archive name format for capture destination */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Entity status. */
	export enum EntityStatus { Active = 'Active', Disabled = 'Disabled', Restoring = 'Restoring', SendDisabled = 'SendDisabled', ReceiveDisabled = 'ReceiveDisabled', Creating = 'Creating', Deleting = 'Deleting', Renaming = 'Renaming', Unknown = 'Unknown' }


	/** Error response indicates ServiceBus service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Error response indicates ServiceBus service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of the List EventHubs operation. */
	export interface EventHubListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of EventHubs. */
		nextLink?: string | null;

		/** Result of the List EventHubs operation. */
		value?: Array<Eventhub>;
	}

	/** The result of the List EventHubs operation. */
	export interface EventHubListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of EventHubs. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEventHubListResultFormGroup() {
		return new FormGroup<EventHubListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Single item in List or Get Event Hub operation */
	export interface Eventhub extends Resource {

		/** Properties supplied to the Create Or Update Event Hub operation. */
		properties?: any;
	}

	/** Single item in List or Get Event Hub operation */
	export interface EventhubFormProperties extends ResourceFormProperties {

		/** Properties supplied to the Create Or Update Event Hub operation. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateEventhubFormGroup() {
		return new FormGroup<EventhubFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Rule filter types */
	export enum FilterType { SqlFilter = 'SqlFilter', CorrelationFilter = 'CorrelationFilter' }


	/** Message Count Details. */
	export interface MessageCountDetails {

		/**
		 * Number of active messages in the queue, topic, or subscription.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		activeMessageCount?: string | null;

		/**
		 * Number of messages that are dead lettered.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		deadLetterMessageCount?: string | null;

		/**
		 * Number of scheduled messages.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		scheduledMessageCount?: string | null;

		/**
		 * Number of messages transferred into dead letters.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transferDeadLetterMessageCount?: string | null;

		/**
		 * Number of messages transferred to another queue, topic, or subscription.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transferMessageCount?: string | null;
	}

	/** Message Count Details. */
	export interface MessageCountDetailsFormProperties {

		/**
		 * Number of active messages in the queue, topic, or subscription.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		activeMessageCount: FormControl<string | null | undefined>,

		/**
		 * Number of messages that are dead lettered.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		deadLetterMessageCount: FormControl<string | null | undefined>,

		/**
		 * Number of scheduled messages.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		scheduledMessageCount: FormControl<string | null | undefined>,

		/**
		 * Number of messages transferred into dead letters.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transferDeadLetterMessageCount: FormControl<string | null | undefined>,

		/**
		 * Number of messages transferred to another queue, topic, or subscription.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		transferMessageCount: FormControl<string | null | undefined>,
	}
	export function CreateMessageCountDetailsFormGroup() {
		return new FormGroup<MessageCountDetailsFormProperties>({
			activeMessageCount: new FormControl<string | null | undefined>(undefined),
			deadLetterMessageCount: new FormControl<string | null | undefined>(undefined),
			scheduledMessageCount: new FormControl<string | null | undefined>(undefined),
			transferDeadLetterMessageCount: new FormControl<string | null | undefined>(undefined),
			transferMessageCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of the List migrationConfigurations operation. */
	export interface MigrationConfigListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of migrationConfigurations */
		nextLink?: string | null;

		/** List of Migration Configs */
		value?: Array<MigrationConfigProperties>;
	}

	/** The result of the List migrationConfigurations operation. */
	export interface MigrationConfigListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of migrationConfigurations */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMigrationConfigListResultFormGroup() {
		return new FormGroup<MigrationConfigListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Single item in List or Get Migration Config operation */
	export interface MigrationConfigProperties extends Resource {

		/** Properties required to the Create Migration Configuration */
		properties?: any;
	}

	/** Single item in List or Get Migration Config operation */
	export interface MigrationConfigPropertiesFormProperties extends ResourceFormProperties {

		/** Properties required to the Create Migration Configuration */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateMigrationConfigPropertiesFormGroup() {
		return new FormGroup<MigrationConfigPropertiesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Description of NetWorkRuleSet - IpRules resource. */
	export interface NWRuleSetIpRules {

		/** The IP Filter Action */
		action?: NWRuleSetIpRulesAction | null;

		/** IP Mask */
		ipMask?: string | null;
	}

	/** Description of NetWorkRuleSet - IpRules resource. */
	export interface NWRuleSetIpRulesFormProperties {

		/** The IP Filter Action */
		action: FormControl<NWRuleSetIpRulesAction | null | undefined>,

		/** IP Mask */
		ipMask: FormControl<string | null | undefined>,
	}
	export function CreateNWRuleSetIpRulesFormGroup() {
		return new FormGroup<NWRuleSetIpRulesFormProperties>({
			action: new FormControl<NWRuleSetIpRulesAction | null | undefined>(undefined),
			ipMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NWRuleSetIpRulesAction { Allow = 'Allow' }


	/** Description of VirtualNetworkRules - NetworkRules resource. */
	export interface NWRuleSetVirtualNetworkRules {

		/** Value that indicates whether to ignore missing VNet Service Endpoint */
		ignoreMissingVnetServiceEndpoint?: boolean | null;

		/** Properties supplied for Subnet */
		subnet?: Subnet;
	}

	/** Description of VirtualNetworkRules - NetworkRules resource. */
	export interface NWRuleSetVirtualNetworkRulesFormProperties {

		/** Value that indicates whether to ignore missing VNet Service Endpoint */
		ignoreMissingVnetServiceEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateNWRuleSetVirtualNetworkRulesFormGroup() {
		return new FormGroup<NWRuleSetVirtualNetworkRulesFormProperties>({
			ignoreMissingVnetServiceEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Description of NetworkRuleSet resource. */
	export interface NetworkRuleSet extends Resource {

		/** NetworkRuleSet properties */
		properties?: any;
	}

	/** Description of NetworkRuleSet resource. */
	export interface NetworkRuleSetFormProperties extends ResourceFormProperties {

		/** NetworkRuleSet properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateNetworkRuleSetFormGroup() {
		return new FormGroup<NetworkRuleSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The response of the List NetworkRuleSet operation. */
	export interface NetworkRuleSetListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of NetworkRuleSet. */
		nextLink?: string | null;

		/** Result of the List NetworkRuleSet operation. */
		value?: Array<NetworkRuleSet>;
	}

	/** The response of the List NetworkRuleSet operation. */
	export interface NetworkRuleSetListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of NetworkRuleSet. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateNetworkRuleSetListResultFormGroup() {
		return new FormGroup<NetworkRuleSetListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ServiceBus REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** A ServiceBus REST API operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
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


	/** Result of the request to list ServiceBus operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of ServiceBus operations supported by the Microsoft.ServiceBus resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list ServiceBus operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Premium Messaging Region */
	export interface PremiumMessagingRegions extends ResourceNamespacePatch {
		properties?: any;
	}

	/** Premium Messaging Region */
	export interface PremiumMessagingRegionsFormProperties extends ResourceNamespacePatchFormProperties {
		properties: FormControl<any | null | undefined>,
	}
	export function CreatePremiumMessagingRegionsFormGroup() {
		return new FormGroup<PremiumMessagingRegionsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The response of the List PremiumMessagingRegions operation. */
	export interface PremiumMessagingRegionsListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of PremiumMessagingRegions. */
		nextLink?: string | null;

		/** Result of the List PremiumMessagingRegions type. */
		value?: Array<PremiumMessagingRegions>;
	}

	/** The response of the List PremiumMessagingRegions operation. */
	export interface PremiumMessagingRegionsListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of PremiumMessagingRegions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePremiumMessagingRegionsListResultFormGroup() {
		return new FormGroup<PremiumMessagingRegionsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters supplied to the Regenerate Authorization Rule operation, specifies which key needs to be reset. */
	export interface RegenerateAccessKeyParameters {

		/** Optional, if the key value provided, is reset for KeyType value or autogenerate Key value set for keyType */
		key?: string | null;

		/**
		 * The access key to regenerate.
		 * Required
		 */
		keyType: RegenerateAccessKeyParametersKeyType;
	}

	/** Parameters supplied to the Regenerate Authorization Rule operation, specifies which key needs to be reset. */
	export interface RegenerateAccessKeyParametersFormProperties {

		/** Optional, if the key value provided, is reset for KeyType value or autogenerate Key value set for keyType */
		key: FormControl<string | null | undefined>,

		/**
		 * The access key to regenerate.
		 * Required
		 */
		keyType: FormControl<RegenerateAccessKeyParametersKeyType | null | undefined>,
	}
	export function CreateRegenerateAccessKeyParametersFormGroup() {
		return new FormGroup<RegenerateAccessKeyParametersFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			keyType: new FormControl<RegenerateAccessKeyParametersKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegenerateAccessKeyParametersKeyType { PrimaryKey = 'PrimaryKey', SecondaryKey = 'SecondaryKey' }


	/** The Resource definition for other than namespace. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** The Resource definition for other than namespace. */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Resource definition. */
	export interface ResourceNamespacePatch extends Resource {

		/** Resource location */
		location?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** The Resource definition. */
	export interface ResourceNamespacePatchFormProperties extends ResourceFormProperties {

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceNamespacePatchFormGroup() {
		return new FormGroup<ResourceNamespacePatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Description of Rule Resource. */
	export interface Rule extends Resource {

		/** Description of Rule Resource. */
		properties?: Ruleproperties;
	}

	/** Description of Rule Resource. */
	export interface RuleFormProperties extends ResourceFormProperties {
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of the List rule operation. */
	export interface RuleListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of rules */
		nextLink?: string | null;

		/** Result of the List Rules operation. */
		value?: Array<Rule>;
	}

	/** The response of the List rule operation. */
	export interface RuleListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of rules */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRuleListResultFormGroup() {
		return new FormGroup<RuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of Rule Resource. */
	export interface Ruleproperties {

		/** Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression. */
		action?: Action;

		/** Represents the correlation filter expression. */
		correlationFilter?: CorrelationFilter;

		/** Rule filter types */
		filterType?: FilterType | null;

		/** Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline. */
		sqlFilter?: SqlFilter;
	}

	/** Description of Rule Resource. */
	export interface RulepropertiesFormProperties {

		/** Rule filter types */
		filterType: FormControl<FilterType | null | undefined>,
	}
	export function CreateRulepropertiesFormGroup() {
		return new FormGroup<RulepropertiesFormProperties>({
			filterType: new FormControl<FilterType | null | undefined>(undefined),
		});

	}


	/** Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline. */
	export interface SqlFilter {

		/**
		 * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
		 * Minimum: 20
		 * Maximum: 20
		 */
		compatibilityLevel?: number | null;

		/** Value that indicates whether the rule action requires preprocessing. */
		requiresPreprocessing?: boolean | null;

		/** The SQL expression. e.g. MyProperty='ABC' */
		sqlExpression?: string | null;
	}

	/** Represents a filter which is a composition of an expression and an action that is executed in the pub/sub pipeline. */
	export interface SqlFilterFormProperties {

		/**
		 * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
		 * Minimum: 20
		 * Maximum: 20
		 */
		compatibilityLevel: FormControl<number | null | undefined>,

		/** Value that indicates whether the rule action requires preprocessing. */
		requiresPreprocessing: FormControl<boolean | null | undefined>,

		/** The SQL expression. e.g. MyProperty='ABC' */
		sqlExpression: FormControl<string | null | undefined>,
	}
	export function CreateSqlFilterFormGroup() {
		return new FormGroup<SqlFilterFormProperties>({
			compatibilityLevel: new FormControl<number | null | undefined>(undefined, [Validators.min(20), Validators.max(20)]),
			requiresPreprocessing: new FormControl<boolean | null | undefined>(undefined),
			sqlExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a namespace authorization rule. */
	export interface SBAuthorizationRule extends Resource {

		/** AuthorizationRule properties. */
		properties?: any;
	}

	/** Description of a namespace authorization rule. */
	export interface SBAuthorizationRuleFormProperties extends ResourceFormProperties {

		/** AuthorizationRule properties. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSBAuthorizationRuleFormGroup() {
		return new FormGroup<SBAuthorizationRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The response to the List Namespace operation. */
	export interface SBAuthorizationRuleListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of Authorization Rules. */
		nextLink?: string | null;

		/** Result of the List Authorization Rules operation. */
		value?: Array<SBAuthorizationRule>;
	}

	/** The response to the List Namespace operation. */
	export interface SBAuthorizationRuleListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of Authorization Rules. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSBAuthorizationRuleListResultFormGroup() {
		return new FormGroup<SBAuthorizationRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a namespace resource. */
	export interface SBNamespace extends TrackedResource {

		/** Properties of the namespace. */
		properties?: SBNamespaceProperties;

		/** SKU of the namespace. */
		sku?: SBSku;
	}

	/** Description of a namespace resource. */
	export interface SBNamespaceFormProperties extends TrackedResourceFormProperties {
	}
	export function CreateSBNamespaceFormGroup() {
		return new FormGroup<SBNamespaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** SKU of the namespace. */
	export interface SBSku {

		/**
		 * The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity?: number | null;

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: SBSkuName;

		/** The billing tier of this particular SKU. */
		tier?: SBSkuName | null;
	}

	/** SKU of the namespace. */
	export interface SBSkuFormProperties {

		/**
		 * The specified messaging units for the tier. For Premium tier, capacity are 1,2 and 4.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity: FormControl<number | null | undefined>,

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: FormControl<SBSkuName | null | undefined>,

		/** The billing tier of this particular SKU. */
		tier: FormControl<SBSkuName | null | undefined>,
	}
	export function CreateSBSkuFormGroup() {
		return new FormGroup<SBSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<SBSkuName | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<SBSkuName | null | undefined>(undefined),
		});

	}

	export enum SBSkuName { Basic = 'Basic', Standard = 'Standard', Premium = 'Premium' }


	/** The response of the List Namespace operation. */
	export interface SBNamespaceListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of Namespaces. */
		nextLink?: string | null;

		/** Result of the List Namespace operation. */
		value?: Array<SBNamespace>;
	}

	/** The response of the List Namespace operation. */
	export interface SBNamespaceListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of Namespaces. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSBNamespaceListResultFormGroup() {
		return new FormGroup<SBNamespaceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Namespace Migrate Object */
	export interface SBNamespaceMigrate {

		/**
		 * Type of namespaces
		 * Required
		 */
		targetNamespaceType: SBNamespaceMigrateTargetNamespaceType;
	}

	/** Namespace Migrate Object */
	export interface SBNamespaceMigrateFormProperties {

		/**
		 * Type of namespaces
		 * Required
		 */
		targetNamespaceType: FormControl<SBNamespaceMigrateTargetNamespaceType | null | undefined>,
	}
	export function CreateSBNamespaceMigrateFormGroup() {
		return new FormGroup<SBNamespaceMigrateFormProperties>({
			targetNamespaceType: new FormControl<SBNamespaceMigrateTargetNamespaceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SBNamespaceMigrateTargetNamespaceType { Messaging = 'Messaging', NotificationHub = 'NotificationHub', Mixed = 'Mixed', EventHub = 'EventHub', Relay = 'Relay' }


	/** Properties of the namespace. */
	export interface SBNamespaceProperties {

		/** The time the namespace was created. */
		createdAt?: Date | null;

		/** Identifier for Azure Insights metrics */
		metricId?: string | null;

		/** Provisioning state of the namespace. */
		provisioningState?: string | null;

		/** Endpoint you can use to perform Service Bus operations. */
		serviceBusEndpoint?: string | null;

		/** The time the namespace was updated. */
		updatedAt?: Date | null;
	}

	/** Properties of the namespace. */
	export interface SBNamespacePropertiesFormProperties {

		/** The time the namespace was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Identifier for Azure Insights metrics */
		metricId: FormControl<string | null | undefined>,

		/** Provisioning state of the namespace. */
		provisioningState: FormControl<string | null | undefined>,

		/** Endpoint you can use to perform Service Bus operations. */
		serviceBusEndpoint: FormControl<string | null | undefined>,

		/** The time the namespace was updated. */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSBNamespacePropertiesFormGroup() {
		return new FormGroup<SBNamespacePropertiesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			metricId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			serviceBusEndpoint: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Description of a namespace resource. */
	export interface SBNamespaceUpdateParameters extends ResourceNamespacePatch {

		/** Properties of the namespace. */
		properties?: SBNamespaceProperties;

		/** SKU of the namespace. */
		sku?: SBSku;
	}

	/** Description of a namespace resource. */
	export interface SBNamespaceUpdateParametersFormProperties extends ResourceNamespacePatchFormProperties {
	}
	export function CreateSBNamespaceUpdateParametersFormGroup() {
		return new FormGroup<SBNamespaceUpdateParametersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Description of queue Resource. */
	export interface SBQueue extends Resource {

		/** The Queue Properties definition. */
		properties?: SBQueueProperties;
	}

	/** Description of queue Resource. */
	export interface SBQueueFormProperties extends ResourceFormProperties {
	}
	export function CreateSBQueueFormGroup() {
		return new FormGroup<SBQueueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to the List Queues operation. */
	export interface SBQueueListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of queues. */
		nextLink?: string | null;

		/** Result of the List Queues operation. */
		value?: Array<SBQueue>;
	}

	/** The response to the List Queues operation. */
	export interface SBQueueListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of queues. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSBQueueListResultFormGroup() {
		return new FormGroup<SBQueueListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Queue Properties definition. */
	export interface SBQueueProperties {

		/** Last time a message was sent, or the last time there was a receive request to this queue. */
		accessedAt?: Date | null;

		/** ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes. */
		autoDeleteOnIdle?: string | null;

		/** Message Count Details. */
		countDetails?: MessageCountDetails;

		/** The exact time the message was created. */
		createdAt?: Date | null;

		/** A value that indicates whether this queue has dead letter support when a message expires. */
		deadLetteringOnMessageExpiration?: boolean | null;

		/** ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
		defaultMessageTimeToLive?: string | null;

		/** ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
		duplicateDetectionHistoryTimeWindow?: string | null;

		/** Value that indicates whether server-side batched operations are enabled. */
		enableBatchedOperations?: boolean | null;

		/** A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage. */
		enableExpress?: boolean | null;

		/** A value that indicates whether the queue is to be partitioned across multiple message brokers. */
		enablePartitioning?: boolean | null;

		/** Queue/Topic name to forward the Dead Letter message */
		forwardDeadLetteredMessagesTo?: string | null;

		/** Queue/Topic name to forward the messages */
		forwardTo?: string | null;

		/** ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute. */
		lockDuration?: string | null;

		/**
		 * The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDeliveryCount?: number | null;

		/**
		 * The maximum size of the queue in megabytes, which is the size of memory allocated for the queue. Default is 1024.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSizeInMegabytes?: number | null;

		/**
		 * The number of messages in the queue.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		messageCount?: string | null;

		/** A value indicating if this queue requires duplicate detection. */
		requiresDuplicateDetection?: boolean | null;

		/** A value that indicates whether the queue supports the concept of sessions. */
		requiresSession?: boolean | null;

		/**
		 * The size of the queue, in bytes.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sizeInBytes?: string | null;

		/** Entity status. */
		status?: EntityStatus | null;

		/** The exact time the message was updated. */
		updatedAt?: Date | null;
	}

	/** The Queue Properties definition. */
	export interface SBQueuePropertiesFormProperties {

		/** Last time a message was sent, or the last time there was a receive request to this queue. */
		accessedAt: FormControl<Date | null | undefined>,

		/** ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes. */
		autoDeleteOnIdle: FormControl<string | null | undefined>,

		/** The exact time the message was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** A value that indicates whether this queue has dead letter support when a message expires. */
		deadLetteringOnMessageExpiration: FormControl<boolean | null | undefined>,

		/** ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
		defaultMessageTimeToLive: FormControl<string | null | undefined>,

		/** ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
		duplicateDetectionHistoryTimeWindow: FormControl<string | null | undefined>,

		/** Value that indicates whether server-side batched operations are enabled. */
		enableBatchedOperations: FormControl<boolean | null | undefined>,

		/** A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage. */
		enableExpress: FormControl<boolean | null | undefined>,

		/** A value that indicates whether the queue is to be partitioned across multiple message brokers. */
		enablePartitioning: FormControl<boolean | null | undefined>,

		/** Queue/Topic name to forward the Dead Letter message */
		forwardDeadLetteredMessagesTo: FormControl<string | null | undefined>,

		/** Queue/Topic name to forward the messages */
		forwardTo: FormControl<string | null | undefined>,

		/** ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute. */
		lockDuration: FormControl<string | null | undefined>,

		/**
		 * The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDeliveryCount: FormControl<number | null | undefined>,

		/**
		 * The maximum size of the queue in megabytes, which is the size of memory allocated for the queue. Default is 1024.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSizeInMegabytes: FormControl<number | null | undefined>,

		/**
		 * The number of messages in the queue.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		messageCount: FormControl<string | null | undefined>,

		/** A value indicating if this queue requires duplicate detection. */
		requiresDuplicateDetection: FormControl<boolean | null | undefined>,

		/** A value that indicates whether the queue supports the concept of sessions. */
		requiresSession: FormControl<boolean | null | undefined>,

		/**
		 * The size of the queue, in bytes.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sizeInBytes: FormControl<string | null | undefined>,

		/** Entity status. */
		status: FormControl<EntityStatus | null | undefined>,

		/** The exact time the message was updated. */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSBQueuePropertiesFormGroup() {
		return new FormGroup<SBQueuePropertiesFormProperties>({
			accessedAt: new FormControl<Date | null | undefined>(undefined),
			autoDeleteOnIdle: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			deadLetteringOnMessageExpiration: new FormControl<boolean | null | undefined>(undefined),
			defaultMessageTimeToLive: new FormControl<string | null | undefined>(undefined),
			duplicateDetectionHistoryTimeWindow: new FormControl<string | null | undefined>(undefined),
			enableBatchedOperations: new FormControl<boolean | null | undefined>(undefined),
			enableExpress: new FormControl<boolean | null | undefined>(undefined),
			enablePartitioning: new FormControl<boolean | null | undefined>(undefined),
			forwardDeadLetteredMessagesTo: new FormControl<string | null | undefined>(undefined),
			forwardTo: new FormControl<string | null | undefined>(undefined),
			lockDuration: new FormControl<string | null | undefined>(undefined),
			maxDeliveryCount: new FormControl<number | null | undefined>(undefined),
			maxSizeInMegabytes: new FormControl<number | null | undefined>(undefined),
			messageCount: new FormControl<string | null | undefined>(undefined),
			requiresDuplicateDetection: new FormControl<boolean | null | undefined>(undefined),
			requiresSession: new FormControl<boolean | null | undefined>(undefined),
			sizeInBytes: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EntityStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Description of subscription resource. */
	export interface SBSubscription extends Resource {

		/** Description of Subscription Resource. */
		properties?: SBSubscriptionProperties;
	}

	/** Description of subscription resource. */
	export interface SBSubscriptionFormProperties extends ResourceFormProperties {
	}
	export function CreateSBSubscriptionFormGroup() {
		return new FormGroup<SBSubscriptionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to the List Subscriptions operation. */
	export interface SBSubscriptionListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of subscriptions. */
		nextLink?: string | null;

		/** Result of the List Subscriptions operation. */
		value?: Array<SBSubscription>;
	}

	/** The response to the List Subscriptions operation. */
	export interface SBSubscriptionListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of subscriptions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSBSubscriptionListResultFormGroup() {
		return new FormGroup<SBSubscriptionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of Subscription Resource. */
	export interface SBSubscriptionProperties {

		/** Last time there was a receive request to this subscription. */
		accessedAt?: Date | null;

		/** ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. */
		autoDeleteOnIdle?: string | null;

		/** Message Count Details. */
		countDetails?: MessageCountDetails;

		/** Exact time the message was created. */
		createdAt?: Date | null;

		/** Value that indicates whether a subscription has dead letter support on filter evaluation exceptions. */
		deadLetteringOnFilterEvaluationExceptions?: boolean | null;

		/** Value that indicates whether a subscription has dead letter support when a message expires. */
		deadLetteringOnMessageExpiration?: boolean | null;

		/** ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
		defaultMessageTimeToLive?: string | null;

		/** ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
		duplicateDetectionHistoryTimeWindow?: string | null;

		/** Value that indicates whether server-side batched operations are enabled. */
		enableBatchedOperations?: boolean | null;

		/** Queue/Topic name to forward the Dead Letter message */
		forwardDeadLetteredMessagesTo?: string | null;

		/** Queue/Topic name to forward the messages */
		forwardTo?: string | null;

		/** ISO 8061 lock duration timespan for the subscription. The default value is 1 minute. */
		lockDuration?: string | null;

		/**
		 * Number of maximum deliveries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDeliveryCount?: number | null;

		/**
		 * Number of messages.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		messageCount?: string | null;

		/** Value indicating if a subscription supports the concept of sessions. */
		requiresSession?: boolean | null;

		/** Entity status. */
		status?: EntityStatus | null;

		/** The exact time the message was updated. */
		updatedAt?: Date | null;
	}

	/** Description of Subscription Resource. */
	export interface SBSubscriptionPropertiesFormProperties {

		/** Last time there was a receive request to this subscription. */
		accessedAt: FormControl<Date | null | undefined>,

		/** ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. */
		autoDeleteOnIdle: FormControl<string | null | undefined>,

		/** Exact time the message was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Value that indicates whether a subscription has dead letter support on filter evaluation exceptions. */
		deadLetteringOnFilterEvaluationExceptions: FormControl<boolean | null | undefined>,

		/** Value that indicates whether a subscription has dead letter support when a message expires. */
		deadLetteringOnMessageExpiration: FormControl<boolean | null | undefined>,

		/** ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
		defaultMessageTimeToLive: FormControl<string | null | undefined>,

		/** ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
		duplicateDetectionHistoryTimeWindow: FormControl<string | null | undefined>,

		/** Value that indicates whether server-side batched operations are enabled. */
		enableBatchedOperations: FormControl<boolean | null | undefined>,

		/** Queue/Topic name to forward the Dead Letter message */
		forwardDeadLetteredMessagesTo: FormControl<string | null | undefined>,

		/** Queue/Topic name to forward the messages */
		forwardTo: FormControl<string | null | undefined>,

		/** ISO 8061 lock duration timespan for the subscription. The default value is 1 minute. */
		lockDuration: FormControl<string | null | undefined>,

		/**
		 * Number of maximum deliveries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDeliveryCount: FormControl<number | null | undefined>,

		/**
		 * Number of messages.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		messageCount: FormControl<string | null | undefined>,

		/** Value indicating if a subscription supports the concept of sessions. */
		requiresSession: FormControl<boolean | null | undefined>,

		/** Entity status. */
		status: FormControl<EntityStatus | null | undefined>,

		/** The exact time the message was updated. */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSBSubscriptionPropertiesFormGroup() {
		return new FormGroup<SBSubscriptionPropertiesFormProperties>({
			accessedAt: new FormControl<Date | null | undefined>(undefined),
			autoDeleteOnIdle: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			deadLetteringOnFilterEvaluationExceptions: new FormControl<boolean | null | undefined>(undefined),
			deadLetteringOnMessageExpiration: new FormControl<boolean | null | undefined>(undefined),
			defaultMessageTimeToLive: new FormControl<string | null | undefined>(undefined),
			duplicateDetectionHistoryTimeWindow: new FormControl<string | null | undefined>(undefined),
			enableBatchedOperations: new FormControl<boolean | null | undefined>(undefined),
			forwardDeadLetteredMessagesTo: new FormControl<string | null | undefined>(undefined),
			forwardTo: new FormControl<string | null | undefined>(undefined),
			lockDuration: new FormControl<string | null | undefined>(undefined),
			maxDeliveryCount: new FormControl<number | null | undefined>(undefined),
			messageCount: new FormControl<string | null | undefined>(undefined),
			requiresSession: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<EntityStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Description of topic resource. */
	export interface SBTopic extends Resource {

		/** The Topic Properties definition. */
		properties?: SBTopicProperties;
	}

	/** Description of topic resource. */
	export interface SBTopicFormProperties extends ResourceFormProperties {
	}
	export function CreateSBTopicFormGroup() {
		return new FormGroup<SBTopicFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to the List Topics operation. */
	export interface SBTopicListResult {

		/** Link to the next set of results. Not empty if Value contains incomplete list of topics. */
		nextLink?: string | null;

		/** Result of the List Topics operation. */
		value?: Array<SBTopic>;
	}

	/** The response to the List Topics operation. */
	export interface SBTopicListResultFormProperties {

		/** Link to the next set of results. Not empty if Value contains incomplete list of topics. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSBTopicListResultFormGroup() {
		return new FormGroup<SBTopicListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Topic Properties definition. */
	export interface SBTopicProperties {

		/** Last time the message was sent, or a request was received, for this topic. */
		accessedAt?: Date | null;

		/** ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. */
		autoDeleteOnIdle?: string | null;

		/** Message Count Details. */
		countDetails?: MessageCountDetails;

		/** Exact time the message was created. */
		createdAt?: Date | null;

		/** ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
		defaultMessageTimeToLive?: string | null;

		/** ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
		duplicateDetectionHistoryTimeWindow?: string | null;

		/** Value that indicates whether server-side batched operations are enabled. */
		enableBatchedOperations?: boolean | null;

		/** Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage. */
		enableExpress?: boolean | null;

		/** Value that indicates whether the topic to be partitioned across multiple message brokers is enabled. */
		enablePartitioning?: boolean | null;

		/**
		 * Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSizeInMegabytes?: number | null;

		/** Value indicating if this topic requires duplicate detection. */
		requiresDuplicateDetection?: boolean | null;

		/**
		 * Size of the topic, in bytes.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sizeInBytes?: string | null;

		/** Entity status. */
		status?: EntityStatus | null;

		/**
		 * Number of subscriptions.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionCount?: number | null;

		/** Value that indicates whether the topic supports ordering. */
		supportOrdering?: boolean | null;

		/** The exact time the message was updated. */
		updatedAt?: Date | null;
	}

	/** The Topic Properties definition. */
	export interface SBTopicPropertiesFormProperties {

		/** Last time the message was sent, or a request was received, for this topic. */
		accessedAt: FormControl<Date | null | undefined>,

		/** ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. */
		autoDeleteOnIdle: FormControl<string | null | undefined>,

		/** Exact time the message was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
		defaultMessageTimeToLive: FormControl<string | null | undefined>,

		/** ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
		duplicateDetectionHistoryTimeWindow: FormControl<string | null | undefined>,

		/** Value that indicates whether server-side batched operations are enabled. */
		enableBatchedOperations: FormControl<boolean | null | undefined>,

		/** Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage. */
		enableExpress: FormControl<boolean | null | undefined>,

		/** Value that indicates whether the topic to be partitioned across multiple message brokers is enabled. */
		enablePartitioning: FormControl<boolean | null | undefined>,

		/**
		 * Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSizeInMegabytes: FormControl<number | null | undefined>,

		/** Value indicating if this topic requires duplicate detection. */
		requiresDuplicateDetection: FormControl<boolean | null | undefined>,

		/**
		 * Size of the topic, in bytes.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sizeInBytes: FormControl<string | null | undefined>,

		/** Entity status. */
		status: FormControl<EntityStatus | null | undefined>,

		/**
		 * Number of subscriptions.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionCount: FormControl<number | null | undefined>,

		/** Value that indicates whether the topic supports ordering. */
		supportOrdering: FormControl<boolean | null | undefined>,

		/** The exact time the message was updated. */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSBTopicPropertiesFormGroup() {
		return new FormGroup<SBTopicPropertiesFormProperties>({
			accessedAt: new FormControl<Date | null | undefined>(undefined),
			autoDeleteOnIdle: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			defaultMessageTimeToLive: new FormControl<string | null | undefined>(undefined),
			duplicateDetectionHistoryTimeWindow: new FormControl<string | null | undefined>(undefined),
			enableBatchedOperations: new FormControl<boolean | null | undefined>(undefined),
			enableExpress: new FormControl<boolean | null | undefined>(undefined),
			enablePartitioning: new FormControl<boolean | null | undefined>(undefined),
			maxSizeInMegabytes: new FormControl<number | null | undefined>(undefined),
			requiresDuplicateDetection: new FormControl<boolean | null | undefined>(undefined),
			sizeInBytes: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EntityStatus | null | undefined>(undefined),
			subscriptionCount: new FormControl<number | null | undefined>(undefined),
			supportOrdering: new FormControl<boolean | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents set of actions written in SQL language-based syntax that is performed against a ServiceBus.Messaging.BrokeredMessage  */
	export interface SqlRuleAction {

		/**
		 * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibilityLevel?: number | null;

		/** Value that indicates whether the rule action requires preprocessing. */
		requiresPreprocessing?: boolean | null;

		/** SQL expression. e.g. MyProperty='ABC' */
		sqlExpression?: string | null;
	}

	/** Represents set of actions written in SQL language-based syntax that is performed against a ServiceBus.Messaging.BrokeredMessage  */
	export interface SqlRuleActionFormProperties {

		/**
		 * This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibilityLevel: FormControl<number | null | undefined>,

		/** Value that indicates whether the rule action requires preprocessing. */
		requiresPreprocessing: FormControl<boolean | null | undefined>,

		/** SQL expression. e.g. MyProperty='ABC' */
		sqlExpression: FormControl<string | null | undefined>,
	}
	export function CreateSqlRuleActionFormGroup() {
		return new FormGroup<SqlRuleActionFormProperties>({
			compatibilityLevel: new FormControl<number | null | undefined>(undefined),
			requiresPreprocessing: new FormControl<boolean | null | undefined>(undefined),
			sqlExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties supplied for Subnet */
	export interface Subnet {

		/**
		 * Resource ID of Virtual Network Subnet
		 * Required
		 */
		id: string;
	}

	/** Properties supplied for Subnet */
	export interface SubnetFormProperties {

		/**
		 * Resource ID of Virtual Network Subnet
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Resource definition. */
	export interface TrackedResource extends Resource {

		/**
		 * The Geo-location where the resource lives
		 * Required
		 */
		location: string;

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** The Resource definition. */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/**
		 * The Geo-location where the resource lives
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags */
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


	/** Specifies the reason for the unavailability of the service. */
	export enum UnavailableReason { None = 'None', InvalidName = 'InvalidName', SubscriptionIsDisabled = 'SubscriptionIsDisabled', NameInUse = 'NameInUse', NameInLockdown = 'NameInLockdown', TooManyNamespaceInCurrentSubscription = 'TooManyNamespaceInCurrentSubscription' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available ServiceBus REST API operations.
		 * Get providers/Microsoft.ServiceBus/operations
		 * @param {string} api_version Client API version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.ServiceBus/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check the give namespace name availability.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/CheckNameAvailability
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {CheckNameAvailability} requestBody Parameters to check availability of the given namespace name
		 * @return {CheckNameAvailabilityResult} check availability returned successfully.
		 */
		Namespaces_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: CheckNameAvailability): Observable<CheckNameAvailabilityResult> {
			return this.http.post<CheckNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceBus/CheckNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the available namespaces within the subscription, irrespective of the resource groups.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/namespaces
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBNamespaceListResult} Namespaces successfully returned.
		 */
		Namespaces_List(api_version: string, subscriptionId: string): Observable<SBNamespaceListResult> {
			return this.http.get<SBNamespaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceBus/namespaces?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the available premium messaging regions for servicebus
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/premiumMessagingRegions
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {PremiumMessagingRegionsListResult} Premium messaging regions successfully returned.
		 */
		PremiumMessagingRegions_List(api_version: string, subscriptionId: string): Observable<PremiumMessagingRegionsListResult> {
			return this.http.get<PremiumMessagingRegionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceBus/premiumMessagingRegions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the available Regions for a given sku
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ServiceBus/sku/{sku}/regions
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} sku The sku type.
		 * @return {PremiumMessagingRegionsListResult} Regions successfully returned.
		 */
		Regions_ListBySku(api_version: string, subscriptionId: string, sku: string): Observable<PremiumMessagingRegionsListResult> {
			return this.http.get<PremiumMessagingRegionsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ServiceBus/sku/' + (sku == null ? '' : encodeURIComponent(sku)) + '/regions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the available namespaces within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBNamespaceListResult} Namespaces successfully returned.
		 */
		Namespaces_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<SBNamespaceListResult> {
			return this.http.get<SBNamespaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a description for the specified namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBNamespace} Namespace successfully returned.
		 */
		Namespaces_Get(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<SBNamespace> {
			return this.http.get<SBNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBNamespace} requestBody Parameters supplied to create a namespace resource.
		 * @return {SBNamespace} Namespace created successfully.
		 */
		Namespaces_CreateOrUpdate(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: SBNamespace): Observable<SBNamespace> {
			return this.http.put<SBNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing namespace. This operation also removes all associated resources under the namespace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Namespace successfully deleted.
		 */
		Namespaces_Delete(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBNamespaceUpdateParameters} requestBody Parameters supplied to update a namespace resource.
		 * @return {SBNamespace} Namespace updated successfully.
		 */
		Namespaces_Update(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: SBNamespaceUpdateParameters): Observable<SBNamespace> {
			return this.http.patch<SBNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the authorization rules for a namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBAuthorizationRuleListResult} Namespace authorization rules returned successfully.
		 */
		Namespaces_ListAuthorizationRules(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<SBAuthorizationRuleListResult> {
			return this.http.get<SBAuthorizationRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/AuthorizationRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an authorization rule for a namespace by rule name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBAuthorizationRule} Namespace authorization rule returned successfully.
		 */
		Namespaces_GetAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<SBAuthorizationRule> {
			return this.http.get<SBAuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/AuthorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an authorization rule for a namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBAuthorizationRule} requestBody The shared access authorization rule.
		 * @return {SBAuthorizationRule} Namespace authorization rule created.
		 */
		Namespaces_CreateOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: SBAuthorizationRule): Observable<SBAuthorizationRule> {
			return this.http.put<SBAuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/AuthorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a namespace authorization rule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Namespace authorization rule successfully deleted.
		 */
		Namespaces_DeleteAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/AuthorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the primary and secondary connection strings for the namespace.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}/listKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AccessKeys} Connection strings successfully returned.
		 */
		Namespaces_ListKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/AuthorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates the primary or secondary connection strings for the namespace.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/AuthorizationRules/{authorizationRuleName}/regenerateKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RegenerateAccessKeyParameters} requestBody Parameters supplied to regenerate the authorization rule.
		 * @return {AccessKeys} Authorization rule successfully regenerated.
		 */
		Namespaces_RegenerateKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: RegenerateAccessKeyParameters): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/AuthorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/regenerateKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all Alias(Disaster Recovery configurations)
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ArmDisasterRecoveryListResult} Successfully retrieved the list of Alias(Disaster Recovery configurations) for servicebus namespace
		 */
		DisasterRecoveryConfigs_List(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<ArmDisasterRecoveryListResult> {
			return this.http.get<ArmDisasterRecoveryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check the give namespace name availability.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/CheckNameAvailability
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {CheckNameAvailability} requestBody Parameters to check availability of the given namespace name
		 * @return {CheckNameAvailabilityResult} check availability returned successfully.
		 */
		DisasterRecoveryConfigs_CheckNameAvailability(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: CheckNameAvailability): Observable<CheckNameAvailabilityResult> {
			return this.http.post<CheckNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs/CheckNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} alias The Disaster Recovery configuration name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ArmDisasterRecovery} Successfully retrieved the Alias(Disaster Recovery configurations)
		 */
		DisasterRecoveryConfigs_Get(resourceGroupName: string, namespaceName: string, alias: string, api_version: string, subscriptionId: string): Observable<ArmDisasterRecovery> {
			return this.http.get<ArmDisasterRecovery>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs/' + (alias == null ? '' : encodeURIComponent(alias)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a new Alias(Disaster Recovery configuration)
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} alias The Disaster Recovery configuration name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ArmDisasterRecovery} requestBody Parameters required to create an Alias(Disaster Recovery configuration)
		 * @return {ArmDisasterRecovery} Alias(Disaster Recovery configuration) successfully created
		 */
		DisasterRecoveryConfigs_CreateOrUpdate(resourceGroupName: string, namespaceName: string, alias: string, api_version: string, subscriptionId: string, requestBody: ArmDisasterRecovery): Observable<ArmDisasterRecovery> {
			return this.http.put<ArmDisasterRecovery>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs/' + (alias == null ? '' : encodeURIComponent(alias)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Alias(Disaster Recovery configuration)
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} alias The Disaster Recovery configuration name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete Alias(Disaster Recovery configuration) request accepted
		 */
		DisasterRecoveryConfigs_Delete(resourceGroupName: string, namespaceName: string, alias: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs/' + (alias == null ? '' : encodeURIComponent(alias)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the authorization rules for a namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/AuthorizationRules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} alias The Disaster Recovery configuration name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBAuthorizationRuleListResult} DisasterRecoveryConfigs authorization rules returned successfully.
		 */
		DisasterRecoveryConfigs_ListAuthorizationRules(resourceGroupName: string, namespaceName: string, alias: string, api_version: string, subscriptionId: string): Observable<SBAuthorizationRuleListResult> {
			return this.http.get<SBAuthorizationRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs/' + (alias == null ? '' : encodeURIComponent(alias)) + '/AuthorizationRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an authorization rule for a namespace by rule name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/AuthorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} alias The Disaster Recovery configuration name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBAuthorizationRule} DisasterRecoveryConfigs authorization rule returned successfully.
		 */
		DisasterRecoveryConfigs_GetAuthorizationRule(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<SBAuthorizationRule> {
			return this.http.get<SBAuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs/' + (alias == null ? '' : encodeURIComponent(alias)) + '/AuthorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the primary and secondary connection strings for the namespace.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/AuthorizationRules/{authorizationRuleName}/listKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} alias The Disaster Recovery configuration name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AccessKeys} Connection strings successfully returned.
		 */
		DisasterRecoveryConfigs_ListKeys(resourceGroupName: string, namespaceName: string, alias: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs/' + (alias == null ? '' : encodeURIComponent(alias)) + '/AuthorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/breakPairing
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} alias The Disaster Recovery configuration name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Break-Pairing operation is successful.
		 */
		DisasterRecoveryConfigs_BreakPairing(resourceGroupName: string, namespaceName: string, alias: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs/' + (alias == null ? '' : encodeURIComponent(alias)) + '/breakPairing&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/disasterRecoveryConfigs/{alias}/failover
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} alias The Disaster Recovery configuration name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Failover operation is successful.
		 */
		DisasterRecoveryConfigs_FailOver(resourceGroupName: string, namespaceName: string, alias: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/disasterRecoveryConfigs/' + (alias == null ? '' : encodeURIComponent(alias)) + '/failover&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the Event Hubs in a service bus Namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/eventhubs
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {EventHubListResult} Successfully retrieved the list of Event Hubs.
		 */
		EventHubs_ListByNamespace(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<EventHubListResult> {
			return this.http.get<EventHubListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/eventhubs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * This operation Migrate the given namespace to provided name type
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrate
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBNamespaceMigrate} requestBody Parameters supplied to migrate namespace type.
		 * @return {void} Migrate Namespace type is successful.
		 */
		Namespaces_Migrate(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: SBNamespaceMigrate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/migrate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all migrationConfigurations
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {MigrationConfigListResult} Successfully retrieved the list of migrationConfigurations for servicebus namespace
		 */
		MigrationConfigs_List(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<MigrationConfigListResult> {
			return this.http.get<MigrationConfigListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/migrationConfigurations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves Migration Config
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {MigrationConfigs_GetConfigName} configName The configuration name. Should always be "$default".
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {MigrationConfigProperties} Successfully retrieved Migration Config)
		 */
		MigrationConfigs_Get(resourceGroupName: string, namespaceName: string, configName: MigrationConfigs_GetConfigName, api_version: string, subscriptionId: string): Observable<MigrationConfigProperties> {
			return this.http.get<MigrationConfigProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/migrationConfigurations/' + configName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates Migration configuration and starts migration of entities from Standard to Premium namespace
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {MigrationConfigs_GetConfigName} configName The configuration name. Should always be "$default".
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {MigrationConfigProperties} requestBody Parameters required to create Migration Configuration
		 * @return {MigrationConfigProperties} Migration Config successfully created
		 */
		MigrationConfigs_CreateAndStartMigration(resourceGroupName: string, namespaceName: string, configName: MigrationConfigs_GetConfigName, api_version: string, subscriptionId: string, requestBody: MigrationConfigProperties): Observable<MigrationConfigProperties> {
			return this.http.put<MigrationConfigProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/migrationConfigurations/' + configName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a MigrationConfiguration
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {MigrationConfigs_GetConfigName} configName The configuration name. Should always be "$default".
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete Migration Config request accepted
		 */
		MigrationConfigs_Delete(resourceGroupName: string, namespaceName: string, configName: MigrationConfigs_GetConfigName, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/migrationConfigurations/' + configName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation reverts Migration
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}/revert
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {MigrationConfigs_GetConfigName} configName The configuration name. Should always be "$default".
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} MigrationConfig Revert operation is successful.
		 */
		MigrationConfigs_Revert(resourceGroupName: string, namespaceName: string, configName: MigrationConfigs_GetConfigName, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/migrationConfigurations/' + configName + '/revert&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation Completes Migration of entities by pointing the connection strings to Premium namespace and any entities created after the operation will be under Premium Namespace. CompleteMigration operation will fail when entity migration is in-progress.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}/upgrade
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {MigrationConfigs_GetConfigName} configName The configuration name. Should always be "$default".
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} upgrade operation of Migration Config is successful.
		 */
		MigrationConfigs_CompleteMigration(resourceGroupName: string, namespaceName: string, configName: MigrationConfigs_GetConfigName, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/migrationConfigurations/' + configName + '/upgrade&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets list of NetworkRuleSet for a Namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkRuleSets
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {NetworkRuleSetListResult} List of NetworkRuleSets for Namespace successfully returned.
		 */
		Namespaces_ListNetworkRuleSets(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<NetworkRuleSetListResult> {
			return this.http.get<NetworkRuleSetListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/networkRuleSets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets NetworkRuleSet for a Namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkRuleSets/default
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {NetworkRuleSet} Namespace NetworkRuleSet successfully returned.
		 */
		Namespaces_GetNetworkRuleSet(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<NetworkRuleSet> {
			return this.http.get<NetworkRuleSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/networkRuleSets/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update NetworkRuleSet for a Namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/networkRuleSets/default
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {NetworkRuleSet} requestBody The Namespace IpFilterRule.
		 * @return {NetworkRuleSet} Namespace NetworkRuleSet successfully returned.
		 */
		Namespaces_CreateOrUpdateNetworkRuleSet(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: NetworkRuleSet): Observable<NetworkRuleSet> {
			return this.http.put<NetworkRuleSet>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/networkRuleSets/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the queues within a namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {number} skip Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
		 * @param {number} top May be used to limit the number of results to the most recent N usageDetails.
		 * @return {SBQueueListResult} Queues successfully returned.
		 */
		Queues_ListByNamespace(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, skip: number | null | undefined, top: number | null | undefined): Observable<SBQueueListResult> {
			return this.http.get<SBQueueListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skip=' + skip + '&top=' + top, {});
		}

		/**
		 * Returns a description for the specified queue.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} queueName The queue name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBQueue} Queue description successfully returned.
		 */
		Queues_Get(resourceGroupName: string, namespaceName: string, queueName: string, api_version: string, subscriptionId: string): Observable<SBQueue> {
			return this.http.get<SBQueue>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a Service Bus queue. This operation is idempotent.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} queueName The queue name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBQueue} requestBody Parameters supplied to create or update a queue resource.
		 * @return {SBQueue} Queue successfully created.
		 */
		Queues_CreateOrUpdate(resourceGroupName: string, namespaceName: string, queueName: string, api_version: string, subscriptionId: string, requestBody: SBQueue): Observable<SBQueue> {
			return this.http.put<SBQueue>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a queue from the specified namespace in a resource group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} queueName The queue name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Queue successfully deleted.
		 */
		Queues_Delete(resourceGroupName: string, namespaceName: string, queueName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all authorization rules for a queue.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} queueName The queue name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBAuthorizationRuleListResult} Authorization rules successfully returned.
		 */
		Queues_ListAuthorizationRules(resourceGroupName: string, namespaceName: string, queueName: string, api_version: string, subscriptionId: string): Observable<SBAuthorizationRuleListResult> {
			return this.http.get<SBAuthorizationRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/authorizationRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an authorization rule for a queue by rule name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} queueName The queue name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBAuthorizationRule} Authorization rule successfully returned.
		 */
		Queues_GetAuthorizationRule(resourceGroupName: string, namespaceName: string, queueName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<SBAuthorizationRule> {
			return this.http.get<SBAuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an authorization rule for a queue.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} queueName The queue name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBAuthorizationRule} requestBody The shared access authorization rule.
		 * @return {SBAuthorizationRule} Authorization rule successfully created.
		 */
		Queues_CreateOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, queueName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: SBAuthorizationRule): Observable<SBAuthorizationRule> {
			return this.http.put<SBAuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a queue authorization rule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} queueName The queue name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Authorization rule successfully deleted.
		 */
		Queues_DeleteAuthorizationRule(resourceGroupName: string, namespaceName: string, queueName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Primary and secondary connection strings to the queue.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}/ListKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} queueName The queue name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AccessKeys} Connection strings successfully returned.
		 */
		Queues_ListKeys(resourceGroupName: string, namespaceName: string, queueName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/ListKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates the primary or secondary connection strings to the queue.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName}/regenerateKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} queueName The queue name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RegenerateAccessKeyParameters} requestBody Parameters supplied to regenerate the authorization rule.
		 * @return {AccessKeys} Connection strings successfully regenerated.
		 */
		Queues_RegenerateKeys(resourceGroupName: string, namespaceName: string, queueName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: RegenerateAccessKeyParameters): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/regenerateKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the topics in a namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {number} skip Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
		 * @param {number} top May be used to limit the number of results to the most recent N usageDetails.
		 * @return {SBTopicListResult} Successfully retrieved list of topics.
		 */
		Topics_ListByNamespace(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, skip: number | null | undefined, top: number | null | undefined): Observable<SBTopicListResult> {
			return this.http.get<SBTopicListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skip=' + skip + '&top=' + top, {});
		}

		/**
		 * Returns a description for the specified topic.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBTopic} Topic description successfully retrieved.
		 */
		Topics_Get(resourceGroupName: string, namespaceName: string, topicName: string, api_version: string, subscriptionId: string): Observable<SBTopic> {
			return this.http.get<SBTopic>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a topic in the specified namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBTopic} requestBody Parameters supplied to create a topic resource.
		 * @return {SBTopic} Topic successfully created.
		 */
		Topics_CreateOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, api_version: string, subscriptionId: string, requestBody: SBTopic): Observable<SBTopic> {
			return this.http.put<SBTopic>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a topic from the specified namespace and resource group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Topic successfully deleted.
		 */
		Topics_Delete(resourceGroupName: string, namespaceName: string, topicName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets authorization rules for a topic.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBAuthorizationRuleListResult} Authorization rules successfully returned.
		 */
		Topics_ListAuthorizationRules(resourceGroupName: string, namespaceName: string, topicName: string, api_version: string, subscriptionId: string): Observable<SBAuthorizationRuleListResult> {
			return this.http.get<SBAuthorizationRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/authorizationRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the specified authorization rule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBAuthorizationRule} Topic authorization rule returned successfully.
		 */
		Topics_GetAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<SBAuthorizationRule> {
			return this.http.get<SBAuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an authorization rule for the specified topic.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBAuthorizationRule} requestBody The shared access authorization rule.
		 * @return {SBAuthorizationRule} Topic authorization rule successfully created.
		 */
		Topics_CreateOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: SBAuthorizationRule): Observable<SBAuthorizationRule> {
			return this.http.put<SBAuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a topic authorization rule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Topic authorization rule successfully deleted.
		 */
		Topics_DeleteAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the primary and secondary connection strings for the topic.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}/ListKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AccessKeys} Connection strings successfully retrieved.
		 */
		Topics_ListKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/ListKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates primary or secondary connection strings for the topic.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}/regenerateKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RegenerateAccessKeyParameters} requestBody Parameters supplied to regenerate the authorization rule.
		 * @return {AccessKeys} Connection strings successfully regenerated.
		 */
		Topics_RegenerateKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: RegenerateAccessKeyParameters): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/regenerateKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all the subscriptions under a specified topic.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {number} skip Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
		 * @param {number} top May be used to limit the number of results to the most recent N usageDetails.
		 * @return {SBSubscriptionListResult} Successfully retrieved list of subscriptions.
		 */
		Subscriptions_ListByTopic(resourceGroupName: string, namespaceName: string, topicName: string, api_version: string, subscriptionId: string, skip: number | null | undefined, top: number | null | undefined): Observable<SBSubscriptionListResult> {
			return this.http.get<SBSubscriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/subscriptions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skip=' + skip + '&top=' + top, {});
		}

		/**
		 * Returns a subscription description for the specified topic.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} subscriptionName The subscription name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SBSubscription} Successfully retrieved subscription description.
		 */
		Subscriptions_Get(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, api_version: string, subscriptionId: string): Observable<SBSubscription> {
			return this.http.get<SBSubscription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/subscriptions/' + (subscriptionName == null ? '' : encodeURIComponent(subscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a topic subscription.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} subscriptionName The subscription name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {SBSubscription} requestBody Parameters supplied to create a subscription resource.
		 * @return {SBSubscription} Subscription create request accepted.
		 */
		Subscriptions_CreateOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, api_version: string, subscriptionId: string, requestBody: SBSubscription): Observable<SBSubscription> {
			return this.http.put<SBSubscription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/subscriptions/' + (subscriptionName == null ? '' : encodeURIComponent(subscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a subscription from the specified topic.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} subscriptionName The subscription name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Subscription successfully deleted.
		 */
		Subscriptions_Delete(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/subscriptions/' + (subscriptionName == null ? '' : encodeURIComponent(subscriptionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all the rules within given topic-subscription
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} subscriptionName The subscription name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {number} skip Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls.
		 * @param {number} top May be used to limit the number of results to the most recent N usageDetails.
		 * @return {RuleListResult} Successfully retrieved list of Rules.
		 */
		Rules_ListBySubscriptions(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, api_version: string, subscriptionId: string, skip: number | null | undefined, top: number | null | undefined): Observable<RuleListResult> {
			return this.http.get<RuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/subscriptions/' + (subscriptionName == null ? '' : encodeURIComponent(subscriptionName)) + '/rules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skip=' + skip + '&top=' + top, {});
		}

		/**
		 * Retrieves the description for the specified rule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} subscriptionName The subscription name.
		 * @param {string} ruleName The rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Rule} Successfully retrieved rule description.
		 */
		Rules_Get(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, api_version: string, subscriptionId: string): Observable<Rule> {
			return this.http.get<Rule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/subscriptions/' + (subscriptionName == null ? '' : encodeURIComponent(subscriptionName)) + '/rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new rule and updates an existing rule
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} subscriptionName The subscription name.
		 * @param {string} ruleName The rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {Rule} requestBody Parameters supplied to create a rule.
		 * @return {Rule} Rule created.
		 */
		Rules_CreateOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, api_version: string, subscriptionId: string, requestBody: Rule): Observable<Rule> {
			return this.http.put<Rule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/subscriptions/' + (subscriptionName == null ? '' : encodeURIComponent(subscriptionName)) + '/rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing rule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} topicName The topic name.
		 * @param {string} subscriptionName The subscription name.
		 * @param {string} ruleName The rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Rule deleted.
		 */
		Rules_Delete(resourceGroupName: string, namespaceName: string, topicName: string, subscriptionName: string, ruleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ServiceBus/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/topics/' + (topicName == null ? '' : encodeURIComponent(topicName)) + '/subscriptions/' + (subscriptionName == null ? '' : encodeURIComponent(subscriptionName)) + '/rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum MigrationConfigs_GetConfigName { '$default' = '$default' }

}

