import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Abstract bean representing a Service or API Exchange. */
	export interface AbstractExchange {

		/**
		 * Discriminant type for identifying kind of exchange
		 * Required
		 */
		type: AbstractExchangeType;
	}

	/** Abstract bean representing a Service or API Exchange. */
	export interface AbstractExchangeFormProperties {

		/**
		 * Discriminant type for identifying kind of exchange
		 * Required
		 */
		type: FormControl<AbstractExchangeType | null | undefined>,
	}
	export function CreateAbstractExchangeFormGroup() {
		return new FormGroup<AbstractExchangeFormProperties>({
			type: new FormControl<AbstractExchangeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AbstractExchangeType { reqRespPair = 0, unidirEvent = 1 }


	/**
	 * Artifact to be imported by Microcks.
	 * This structure represents a mime-multipart file upload (as specified here: https://swagger.io/docs/specification/describing-request-body/file-upload/)
	 */
	export interface ArtifactUpload {

		/**
		 * The artifact to upload
		 * Required
		 */
		file: string;
	}

	/**
	 * Artifact to be imported by Microcks.
	 * This structure represents a mime-multipart file upload (as specified here: https://swagger.io/docs/specification/describing-request-body/file-upload/)
	 */
	export interface ArtifactUploadFormProperties {

		/**
		 * The artifact to upload
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreateArtifactUploadFormGroup() {
		return new FormGroup<ArtifactUploadFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Protocol binding details for asynchronous operations */
	export interface Binding {

		/**
		 * Name of destination for asynchronous messages of this operation
		 * Required
		 */
		destinationName: string;

		/** Type of destination for asynchronous messages of this operation */
		destinationType?: string | null;

		/** Type of key for Kafka messages */
		keyType?: string | null;

		/** HTTP method for WebSocket binding */
		method?: string | null;

		/** Persistent attribute for MQTT binding */
		persistent?: boolean | null;

		/** Quality of Service attribute for MQTT binding */
		qoS?: string | null;

		/**
		 * Protocol binding identifier
		 * Required
		 */
		type: BindingType;
	}

	/** Protocol binding details for asynchronous operations */
	export interface BindingFormProperties {

		/**
		 * Name of destination for asynchronous messages of this operation
		 * Required
		 */
		destinationName: FormControl<string | null | undefined>,

		/** Type of destination for asynchronous messages of this operation */
		destinationType: FormControl<string | null | undefined>,

		/** Type of key for Kafka messages */
		keyType: FormControl<string | null | undefined>,

		/** HTTP method for WebSocket binding */
		method: FormControl<string | null | undefined>,

		/** Persistent attribute for MQTT binding */
		persistent: FormControl<boolean | null | undefined>,

		/** Quality of Service attribute for MQTT binding */
		qoS: FormControl<string | null | undefined>,

		/**
		 * Protocol binding identifier
		 * Required
		 */
		type: FormControl<BindingType | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationType: new FormControl<string | null | undefined>(undefined),
			keyType: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			qoS: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BindingType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BindingType { KAFKA = 0, MQTT = 1, WS = 2, AMQP = 3, NATS = 4, GOOGLEPUBSUB = 5 }


	/** A simple Counter type. */
	export interface Counter {

		/** Number of items in a resource collection */
		counter?: number | null;
	}

	/** A simple Counter type. */
	export interface CounterFormProperties {

		/** Number of items in a resource collection */
		counter: FormControl<number | null | undefined>,
	}
	export function CreateCounterFormGroup() {
		return new FormGroup<CounterFormProperties>({
			counter: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A generic map of counter */
	export interface CounterMap {
	}

	/** A generic map of counter */
	export interface CounterMapFormProperties {
	}
	export function CreateCounterMapFormGroup() {
		return new FormGroup<CounterMapFormProperties>({
		});

	}


	/** The daily statistic of a service mock invocations */
	export interface DailyInvocationStatistic {

		/**
		 * The number of service mock invocations on this day
		 * Required
		 */
		dailyCount: number;

		/**
		 * The day (formatted as yyyyMMdd string) represented by this statistic
		 * Required
		 */
		day: string;

		/** The number of service mock invocations per hour of the day (keys range from 0 to 23) */
		hourlyCount?: string | null;

		/**
		 * Unique identifier of this statistic object
		 * Required
		 */
		id: string;

		/** The number of service mock invocations per minute of the day (keys range from 0 to 1439) */
		minuteCount?: string | null;

		/**
		 * The name of the service this statistic is related to
		 * Required
		 */
		serviceName: string;

		/**
		 * The version of the service this statistic is related to
		 * Required
		 */
		serviceVersion: string;
	}

	/** The daily statistic of a service mock invocations */
	export interface DailyInvocationStatisticFormProperties {

		/**
		 * The number of service mock invocations on this day
		 * Required
		 */
		dailyCount: FormControl<number | null | undefined>,

		/**
		 * The day (formatted as yyyyMMdd string) represented by this statistic
		 * Required
		 */
		day: FormControl<string | null | undefined>,

		/** The number of service mock invocations per hour of the day (keys range from 0 to 23) */
		hourlyCount: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of this statistic object
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The number of service mock invocations per minute of the day (keys range from 0 to 1439) */
		minuteCount: FormControl<string | null | undefined>,

		/**
		 * The name of the service this statistic is related to
		 * Required
		 */
		serviceName: FormControl<string | null | undefined>,

		/**
		 * The version of the service this statistic is related to
		 * Required
		 */
		serviceVersion: FormControl<string | null | undefined>,
	}
	export function CreateDailyInvocationStatisticFormGroup() {
		return new FormGroup<DailyInvocationStatisticFormProperties>({
			dailyCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			day: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hourlyCount: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			minuteCount: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventMessage {

		/** Body content for this message */
		content?: string | null;

		/** Headers for this message */
		headers?: Array<Header>;

		/**
		 * Unique identifier of this message
		 * Required
		 */
		id: string;

		/**
		 * Content type of message
		 * Required
		 */
		mediaType: string;

		/** Unique distinct name of this message */
		name?: string | null;

		/** Identifier of Operation this message is associated to */
		operationId?: string | null;

		/** Unique identifier of TestCase this message is attached (in case of a test) */
		testCaseId?: string | null;
	}
	export interface EventMessageFormProperties {

		/** Body content for this message */
		content: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of this message
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Content type of message
		 * Required
		 */
		mediaType: FormControl<string | null | undefined>,

		/** Unique distinct name of this message */
		name: FormControl<string | null | undefined>,

		/** Identifier of Operation this message is associated to */
		operationId: FormControl<string | null | undefined>,

		/** Unique identifier of TestCase this message is attached (in case of a test) */
		testCaseId: FormControl<string | null | undefined>,
	}
	export function CreateEventMessageFormGroup() {
		return new FormGroup<EventMessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mediaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			testCaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Transport headers for both Requests and Responses */
	export interface Header {

		/**
		 * Unique distinct name of this Header
		 * Required
		 */
		name: string;

		/**
		 * Values for this Header
		 * Required
		 */
		values: Array<string>;
	}

	/** Transport headers for both Requests and Responses */
	export interface HeaderFormProperties {

		/**
		 * Unique distinct name of this Header
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHeaderFormGroup() {
		return new FormGroup<HeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Abstract representation of a Service or API exchange type (request/response, event based, ...) */
	export interface Exchange {
	}

	/** Abstract representation of a Service or API exchange type (request/response, event based, ...) */
	export interface ExchangeFormProperties {
	}
	export function CreateExchangeFormGroup() {
		return new FormGroup<ExchangeFormProperties>({
		});

	}


	/** Representation of optional features configuration used by Microcks server */
	export interface FeaturesConfig {

		/** Asynchronous feature properties */
		'async-api'?: FeaturesConfig_async_api_;

		/** Microcks Hub feature properties */
		'microcks-hub'?: FeaturesConfig_microcks_hub_;

		/** Repository filtering feature properties */
		'repository-filter'?: FeaturesConfig_repository_filter_;

		/** Repository tenancy feature properties */
		'repository-tenancy'?: FeaturesConfig_repository_tenancy_;
	}

	/** Representation of optional features configuration used by Microcks server */
	export interface FeaturesConfigFormProperties {
	}
	export function CreateFeaturesConfigFormGroup() {
		return new FormGroup<FeaturesConfigFormProperties>({
		});

	}

	export interface FeaturesConfig_async_api_ {
		'default-binding'?: string | null;
		enabled?: string | null;
		'endpoint-AMQP'?: string | null;
		'endpoint-GOOGLEPUBSUB'?: string | null;
		'endpoint-KAFKA'?: string | null;
		'endpoint-MQTT'?: string | null;
		'endpoint-NATS'?: string | null;
		'endpoint-WS'?: string | null;
		frequencies?: string | null;
	}
	export interface FeaturesConfig_async_api_FormProperties {
		'default-binding': FormControl<string | null | undefined>,
		enabled: FormControl<string | null | undefined>,
		'endpoint-AMQP': FormControl<string | null | undefined>,
		'endpoint-GOOGLEPUBSUB': FormControl<string | null | undefined>,
		'endpoint-KAFKA': FormControl<string | null | undefined>,
		'endpoint-MQTT': FormControl<string | null | undefined>,
		'endpoint-NATS': FormControl<string | null | undefined>,
		'endpoint-WS': FormControl<string | null | undefined>,
		frequencies: FormControl<string | null | undefined>,
	}
	export function CreateFeaturesConfig_async_api_FormGroup() {
		return new FormGroup<FeaturesConfig_async_api_FormProperties>({
			'default-binding': new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<string | null | undefined>(undefined),
			'endpoint-AMQP': new FormControl<string | null | undefined>(undefined),
			'endpoint-GOOGLEPUBSUB': new FormControl<string | null | undefined>(undefined),
			'endpoint-KAFKA': new FormControl<string | null | undefined>(undefined),
			'endpoint-MQTT': new FormControl<string | null | undefined>(undefined),
			'endpoint-NATS': new FormControl<string | null | undefined>(undefined),
			'endpoint-WS': new FormControl<string | null | undefined>(undefined),
			frequencies: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeaturesConfig_microcks_hub_ {
		'allowed-roles'?: string | null;
		enabled?: string | null;
		endpoint?: string | null;
	}
	export interface FeaturesConfig_microcks_hub_FormProperties {
		'allowed-roles': FormControl<string | null | undefined>,
		enabled: FormControl<string | null | undefined>,
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateFeaturesConfig_microcks_hub_FormGroup() {
		return new FormGroup<FeaturesConfig_microcks_hub_FormProperties>({
			'allowed-roles': new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeaturesConfig_repository_filter_ {
		enabled?: string | null;
		'label-key'?: string | null;
		'label-label'?: string | null;
		'label-list'?: string | null;
	}
	export interface FeaturesConfig_repository_filter_FormProperties {
		enabled: FormControl<string | null | undefined>,
		'label-key': FormControl<string | null | undefined>,
		'label-label': FormControl<string | null | undefined>,
		'label-list': FormControl<string | null | undefined>,
	}
	export function CreateFeaturesConfig_repository_filter_FormGroup() {
		return new FormGroup<FeaturesConfig_repository_filter_FormProperties>({
			enabled: new FormControl<string | null | undefined>(undefined),
			'label-key': new FormControl<string | null | undefined>(undefined),
			'label-label': new FormControl<string | null | undefined>(undefined),
			'label-list': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeaturesConfig_repository_tenancy_ {
		'artifact-import-allowed-roles'?: string | null;
		enabled?: string | null;
	}
	export interface FeaturesConfig_repository_tenancy_FormProperties {
		'artifact-import-allowed-roles': FormControl<string | null | undefined>,
		enabled: FormControl<string | null | undefined>,
	}
	export function CreateFeaturesConfig_repository_tenancy_FormGroup() {
		return new FormGroup<FeaturesConfig_repository_tenancy_FormProperties>({
			'artifact-import-allowed-roles': new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Transfert Object for headers of both Requests and Responses */
	export interface HeaderDTO {

		/**
		 * Unique distinct name of this Header
		 * Required
		 */
		name: string;

		/**
		 * Values for this header (comma separated strings)
		 * Required
		 */
		values: string;
	}

	/** Data Transfert Object for headers of both Requests and Responses */
	export interface HeaderDTOFormProperties {

		/**
		 * Unique distinct name of this Header
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Values for this header (comma separated strings)
		 * Required
		 */
		values: FormControl<string | null | undefined>,
	}
	export function CreateHeaderDTOFormGroup() {
		return new FormGroup<HeaderDTOFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			values: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An ImportJob allow defining a repository artifact to poll for discovering Services and APIs mocks and tests */
	export interface ImportJob {

		/** Whether this ImportJob is active (ie. scheduled for execution) */
		active?: boolean | null;

		/** Creation date for this ImportJob */
		createdDate?: Date | null;

		/** Etag of repository URL during previous import. Is used for not re-importing if no recent changes */
		etag?: string | null;

		/** Reserved for future usage */
		frequency?: string | null;

		/** Unique identifier of ImportJob */
		id?: string | null;

		/** Date last import was done */
		lastImportDate?: Date | null;

		/** Error message of last import (if any) */
		lastImportError?: string | null;

		/** Flag telling if considered as primary or secondary artifact. Default to `true` */
		mainArtifact?: boolean | null;

		/** Commodity object for holding metadata on any entity. This object is inspired by Kubernetes metadata. */
		metadata?: Metadata;

		/**
		 * Unique distinct name of this ImportJob
		 * Required
		 */
		name: string;

		/** Whether to disable SSL certificate verification when checking repository */
		repositoryDisableSSLValidation?: boolean | null;

		/**
		 * URL of mocks and tests repository artifact
		 * Required
		 */
		repositoryUrl: string;

		/** Lightweight reference for an existing Secret */
		secretRef?: SecretRef;

		/** References of Services discovered when checking repository */
		serviceRefs?: Array<ServiceRef>;
	}

	/** An ImportJob allow defining a repository artifact to poll for discovering Services and APIs mocks and tests */
	export interface ImportJobFormProperties {

		/** Whether this ImportJob is active (ie. scheduled for execution) */
		active: FormControl<boolean | null | undefined>,

		/** Creation date for this ImportJob */
		createdDate: FormControl<Date | null | undefined>,

		/** Etag of repository URL during previous import. Is used for not re-importing if no recent changes */
		etag: FormControl<string | null | undefined>,

		/** Reserved for future usage */
		frequency: FormControl<string | null | undefined>,

		/** Unique identifier of ImportJob */
		id: FormControl<string | null | undefined>,

		/** Date last import was done */
		lastImportDate: FormControl<Date | null | undefined>,

		/** Error message of last import (if any) */
		lastImportError: FormControl<string | null | undefined>,

		/** Flag telling if considered as primary or secondary artifact. Default to `true` */
		mainArtifact: FormControl<boolean | null | undefined>,

		/**
		 * Unique distinct name of this ImportJob
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Whether to disable SSL certificate verification when checking repository */
		repositoryDisableSSLValidation: FormControl<boolean | null | undefined>,

		/**
		 * URL of mocks and tests repository artifact
		 * Required
		 */
		repositoryUrl: FormControl<string | null | undefined>,
	}
	export function CreateImportJobFormGroup() {
		return new FormGroup<ImportJobFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastImportDate: new FormControl<Date | null | undefined>(undefined),
			lastImportError: new FormControl<string | null | undefined>(undefined),
			mainArtifact: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repositoryDisableSSLValidation: new FormControl<boolean | null | undefined>(undefined),
			repositoryUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Commodity object for holding metadata on any entity. This object is inspired by Kubernetes metadata. */
	export interface Metadata {

		/** Annotations of attached object */
		annotations?: {[id: string]: string };

		/**
		 * Creation date of attached object
		 * Required
		 */
		createdOn: number;

		/** Labels put on attached object */
		labels?: {[id: string]: string };

		/**
		 * Last update of attached object
		 * Required
		 */
		lastUpdate: number;
	}

	/** Commodity object for holding metadata on any entity. This object is inspired by Kubernetes metadata. */
	export interface MetadataFormProperties {

		/** Annotations of attached object */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Creation date of attached object
		 * Required
		 */
		createdOn: FormControl<number | null | undefined>,

		/** Labels put on attached object */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Last update of attached object
		 * Required
		 */
		lastUpdate: FormControl<number | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createdOn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastUpdate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Lightweight reference of an existing Service */
	export interface ServiceRef {

		/**
		 * The Service name
		 * Required
		 */
		name: string;

		/**
		 * Unique reference of a Service
		 * Required
		 */
		serviceId: string;

		/**
		 * The Service version
		 * Required
		 */
		version: string;
	}

	/** Lightweight reference of an existing Service */
	export interface ServiceRefFormProperties {

		/**
		 * The Service name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Unique reference of a Service
		 * Required
		 */
		serviceId: FormControl<string | null | undefined>,

		/**
		 * The Service version
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateServiceRefFormGroup() {
		return new FormGroup<ServiceRefFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Representation of Keycloak / SSO configuration used by Microcks server */
	export interface KeycloakConfig {

		/**
		 * SSO Server authentication url
		 * Required
		 */
		'auth-server-url': string;

		/**
		 * Whether Keycloak authentification and usage is enabled
		 * Required
		 */
		enabled: boolean;

		/**
		 * Name of public-client that can be used for requesting OAuth token
		 * Required
		 */
		'public-client': string;

		/**
		 * Authentication realm name
		 * Required
		 */
		realm: string;

		/**
		 * Name of Keycloak resource/application used on client side
		 * Required
		 */
		resource: string;

		/**
		 * SSL certificates requirements
		 * Required
		 */
		'ssl-required': KeycloakConfigSsl_required;
	}

	/** Representation of Keycloak / SSO configuration used by Microcks server */
	export interface KeycloakConfigFormProperties {

		/**
		 * SSO Server authentication url
		 * Required
		 */
		'auth-server-url': FormControl<string | null | undefined>,

		/**
		 * Whether Keycloak authentification and usage is enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Name of public-client that can be used for requesting OAuth token
		 * Required
		 */
		'public-client': FormControl<string | null | undefined>,

		/**
		 * Authentication realm name
		 * Required
		 */
		realm: FormControl<string | null | undefined>,

		/**
		 * Name of Keycloak resource/application used on client side
		 * Required
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * SSL certificates requirements
		 * Required
		 */
		'ssl-required': FormControl<KeycloakConfigSsl_required | null | undefined>,
	}
	export function CreateKeycloakConfigFormGroup() {
		return new FormGroup<KeycloakConfigFormProperties>({
			'auth-server-url': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			'public-client': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			realm: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'ssl-required': new FormControl<KeycloakConfigSsl_required | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum KeycloakConfigSsl_required { none = 0, external = 1 }


	/** A map which keys are already used labels keys and values are already used values for this key */
	export interface LabelsMap {
	}

	/** A map which keys are already used labels keys and values are already used values for this key */
	export interface LabelsMapFormProperties {
	}
	export function CreateLabelsMapFormGroup() {
		return new FormGroup<LabelsMapFormProperties>({
		});

	}


	/** An Operation of a Service or API */
	export interface Operation {

		/** Map of protocol binding details for this operation */
		bindings?: {[id: string]: Binding };

		/** Default response time delay for mocks */
		defaultDelay?: number | null;

		/** Dispatcher strategy used for mocks */
		dispatcher?: string | null;

		/** DispatcherRules used for mocks */
		dispatcherRules?: string | null;

		/** Name of input parameters in case of Xml based Service */
		inputName?: string | null;

		/**
		 * Represents transport method
		 * Required
		 */
		method: string;

		/**
		 * Unique name of this Operation within Service scope
		 * Required
		 */
		name: string;

		/** Name of output parameters in case of Xml based Service */
		outputName?: string | null;

		/** Contraints that may apply to mock invocatino on this operation */
		parameterContraints?: Array<ParameterConstraint>;

		/** Paths the mocks endpoints are mapped on */
		resourcePaths?: Array<string>;
	}

	/** An Operation of a Service or API */
	export interface OperationFormProperties {

		/** Map of protocol binding details for this operation */
		bindings: FormControl<{[id: string]: Binding } | null | undefined>,

		/** Default response time delay for mocks */
		defaultDelay: FormControl<number | null | undefined>,

		/** Dispatcher strategy used for mocks */
		dispatcher: FormControl<string | null | undefined>,

		/** DispatcherRules used for mocks */
		dispatcherRules: FormControl<string | null | undefined>,

		/** Name of input parameters in case of Xml based Service */
		inputName: FormControl<string | null | undefined>,

		/**
		 * Represents transport method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/**
		 * Unique name of this Operation within Service scope
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Name of output parameters in case of Xml based Service */
		outputName: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			bindings: new FormControl<{[id: string]: Binding } | null | undefined>(undefined),
			defaultDelay: new FormControl<number | null | undefined>(undefined),
			dispatcher: new FormControl<string | null | undefined>(undefined),
			dispatcherRules: new FormControl<string | null | undefined>(undefined),
			inputName: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Companion object for Operation that may be used to express constraints on request parameters */
	export interface ParameterConstraint {

		/** Parameter location */
		in?: ParameterConstraintIn | null;

		/** Whether it's a regular expression matching constraint */
		mustMatchRegexp?: string | null;

		/**
		 * Parameter name
		 * Required
		 */
		name: string;

		/** Whether it's a recopy constraint */
		recopy?: boolean | null;

		/** Whether it's a required constraint */
		required?: boolean | null;
	}

	/** Companion object for Operation that may be used to express constraints on request parameters */
	export interface ParameterConstraintFormProperties {

		/** Parameter location */
		in: FormControl<ParameterConstraintIn | null | undefined>,

		/** Whether it's a regular expression matching constraint */
		mustMatchRegexp: FormControl<string | null | undefined>,

		/**
		 * Parameter name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Whether it's a recopy constraint */
		recopy: FormControl<boolean | null | undefined>,

		/** Whether it's a required constraint */
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateParameterConstraintFormGroup() {
		return new FormGroup<ParameterConstraintFormProperties>({
			in: new FormControl<ParameterConstraintIn | null | undefined>(undefined),
			mustMatchRegexp: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			recopy: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ParameterConstraintIn { path = 0, query = 1, header = 2 }


	/** Specification of additional headers for a Service/API operations. Keys are operation name or "globals" (if header applies to all), values are Header objects DTO. */
	export interface OperationHeaders {
	}

	/** Specification of additional headers for a Service/API operations. Keys are operation name or "globals" (if header applies to all), values are Header objects DTO. */
	export interface OperationHeadersFormProperties {
	}
	export function CreateOperationHeadersFormGroup() {
		return new FormGroup<OperationHeadersFormProperties>({
		});

	}


	/** Data Transfer object for grouping the mutable properties of an Operation */
	export interface OperationOverrideDTO {

		/** Default delay in milliseconds to apply to mock responses on this operation */
		defaultDelay?: number | null;

		/** Type of dispatcher to apply for this operation */
		dispatcher?: string | null;

		/** Rules of dispatcher for this operation */
		dispatcherRules?: string | null;

		/** Constraints that may apply to incoming parameters on this operation */
		parameterConstraints?: Array<ParameterConstraint>;
	}

	/** Data Transfer object for grouping the mutable properties of an Operation */
	export interface OperationOverrideDTOFormProperties {

		/** Default delay in milliseconds to apply to mock responses on this operation */
		defaultDelay: FormControl<number | null | undefined>,

		/** Type of dispatcher to apply for this operation */
		dispatcher: FormControl<string | null | undefined>,

		/** Rules of dispatcher for this operation */
		dispatcherRules: FormControl<string | null | undefined>,
	}
	export function CreateOperationOverrideDTOFormGroup() {
		return new FormGroup<OperationOverrideDTOFormProperties>({
			defaultDelay: new FormControl<number | null | undefined>(undefined),
			dispatcher: new FormControl<string | null | undefined>(undefined),
			dispatcherRules: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A mock invocation or test request */
	export interface Request {

		/** Body content for this request */
		content?: string | null;

		/** Headers for this Request */
		headers?: Array<Header>;

		/** Unique identifier of Request */
		id?: string | null;

		/**
		 * Unique distinct name of this Request
		 * Required
		 */
		name: string;

		/**
		 * Identifier of Operation this Request is associated to
		 * Required
		 */
		operationId: string;

		/** Unique identifier of TestCase this Request is attached (in case of a test) */
		testCaseId?: string | null;
	}

	/** A mock invocation or test request */
	export interface RequestFormProperties {

		/** Body content for this request */
		content: FormControl<string | null | undefined>,

		/** Unique identifier of Request */
		id: FormControl<string | null | undefined>,

		/**
		 * Unique distinct name of this Request
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Identifier of Operation this Request is associated to
		 * Required
		 */
		operationId: FormControl<string | null | undefined>,

		/** Unique identifier of TestCase this Request is attached (in case of a test) */
		testCaseId: FormControl<string | null | undefined>,
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			testCaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request associated with corresponding Response */
	export interface RequestResponsePair {
	}

	/** Request associated with corresponding Response */
	export interface RequestResponsePairFormProperties {
	}
	export function CreateRequestResponsePairFormGroup() {
		return new FormGroup<RequestResponsePairFormProperties>({
		});

	}


	/** Resource represents a Service or API artifacts such as specification, contract */
	export interface Resource {

		/**
		 * String content of this resource
		 * Required
		 */
		content: string;

		/**
		 * Uniquer identifier of this Service or API Resource
		 * Required
		 */
		id: string;

		/**
		 * Unique name/business identifier for this Service or API resource
		 * Required
		 */
		name: string;

		/** Relatvie path of this resource regarding main resource */
		path?: string | null;

		/**
		 * Unique identifier of the Servoce or API this resource is attached to
		 * Required
		 */
		serviceId: string;

		/** Short name of the artifact this resource was extracted from */
		sourceArtifact?: string | null;

		/**
		 * Types of managed resources for Services or APIs
		 * Required
		 */
		type: ResourceType;
	}

	/** Resource represents a Service or API artifacts such as specification, contract */
	export interface ResourceFormProperties {

		/**
		 * String content of this resource
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * Uniquer identifier of this Service or API Resource
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Unique name/business identifier for this Service or API resource
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Relatvie path of this resource regarding main resource */
		path: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the Servoce or API this resource is attached to
		 * Required
		 */
		serviceId: FormControl<string | null | undefined>,

		/** Short name of the artifact this resource was extracted from */
		sourceArtifact: FormControl<string | null | undefined>,

		/**
		 * Types of managed resources for Services or APIs
		 * Required
		 */
		type: FormControl<ResourceType | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceArtifact: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceType { WSDL = 0, XSD = 1, JSON_SCHEMA = 2, OPEN_API_SPEC = 3, OPEN_API_SCHEMA = 4, ASYNC_API_SPEC = 5, ASYNC_API_SCHEMA = 6, AVRO_SCHEMA = 7, PROTOBUF_SCHEMA = 8, PROTOBUF_DESCRIPTION = 9, GRAPHQL_SCHEMA = 10 }


	/** A mock invocation or test response */
	export interface Response {

		/** Body content of this Response */
		content?: string | null;

		/** Headers for this Response */
		headers?: Array<Header>;

		/** Unique identifier of Response */
		id?: string | null;

		/**
		 * Unique distinct name of this Response
		 * Required
		 */
		name: string;

		/**
		 * Identifier of Operation this Response is associated to
		 * Required
		 */
		operationId: string;

		/** Unique identifier of TestCase this Response is attached (in case of a test) */
		testCaseId?: string | null;
	}

	/** A mock invocation or test response */
	export interface ResponseFormProperties {

		/** Body content of this Response */
		content: FormControl<string | null | undefined>,

		/** Unique identifier of Response */
		id: FormControl<string | null | undefined>,

		/**
		 * Unique distinct name of this Response
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Identifier of Operation this Response is associated to
		 * Required
		 */
		operationId: FormControl<string | null | undefined>,

		/** Unique identifier of TestCase this Response is attached (in case of a test) */
		testCaseId: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			testCaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Secret allows grouping informations on how to access a restricted resource such as a repsoitory URL. Secrets are typically used by ImpoortJobs. */
	export interface Secret {
		caCertPem?: string | null;

		/**
		 * Description of this Secret
		 * Required
		 */
		description: string;

		/** Unique identifier of Secret */
		id?: string | null;

		/**
		 * Unique distinct name of Secret
		 * Required
		 */
		name: string;
		password?: string | null;
		token?: string | null;
		tokenHeader?: string | null;
		username?: string | null;
	}

	/** A Secret allows grouping informations on how to access a restricted resource such as a repsoitory URL. Secrets are typically used by ImpoortJobs. */
	export interface SecretFormProperties {
		caCertPem: FormControl<string | null | undefined>,

		/**
		 * Description of this Secret
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** Unique identifier of Secret */
		id: FormControl<string | null | undefined>,

		/**
		 * Unique distinct name of Secret
		 * Required
		 */
		name: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
		tokenHeader: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			caCertPem: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			tokenHeader: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lightweight reference for an existing Secret */
	export interface SecretRef {

		/**
		 * Distinct name of the referenced Secret
		 * Required
		 */
		name: string;

		/**
		 * Unique identifier or referenced Secret
		 * Required
		 */
		secretId: string;
	}

	/** Lightweight reference for an existing Secret */
	export interface SecretRefFormProperties {

		/**
		 * Distinct name of the referenced Secret
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Unique identifier or referenced Secret
		 * Required
		 */
		secretId: FormControl<string | null | undefined>,
	}
	export function CreateSecretRefFormGroup() {
		return new FormGroup<SecretRefFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a Service or API definition as registred into Microcks repository */
	export interface Service {

		/** Unique identifier for this Service or API */
		id?: string | null;

		/** Commodity object for holding metadata on any entity. This object is inspired by Kubernetes metadata. */
		metadata?: Metadata;

		/**
		 * Distinct name for this Service or API (maybe shared among many versions)
		 * Required
		 */
		name: string;

		/** Set of Operations for Service or API */
		operations?: Array<Operation>;

		/**
		 * Service or API Type
		 * Required
		 */
		type: ServiceType;

		/**
		 * Distinct version for a named Service or API
		 * Required
		 */
		version: string;

		/** Associated Xml Namespace in case of Xml based Service */
		xmlNS?: string | null;
	}

	/** Represents a Service or API definition as registred into Microcks repository */
	export interface ServiceFormProperties {

		/** Unique identifier for this Service or API */
		id: FormControl<string | null | undefined>,

		/**
		 * Distinct name for this Service or API (maybe shared among many versions)
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Service or API Type
		 * Required
		 */
		type: FormControl<ServiceType | null | undefined>,

		/**
		 * Distinct version for a named Service or API
		 * Required
		 */
		version: FormControl<string | null | undefined>,

		/** Associated Xml Namespace in case of Xml based Service */
		xmlNS: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ServiceType | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xmlNS: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceType { REST = 0, SOAP_HTTP = 1, GENERIC_REST = 2, GENERIC_EVENT = 3, EVENT = 4, GRPC = 5, GRAPHQL = 6 }


	/** Aggregate bean for grouping a Service an its messages pairs */
	export interface ServiceView {

		/**
		 * Map of messages for this Service. Keys are operation name, values are array of messages for this operation
		 * Required
		 */
		messagesMap: {[id: string]: Array<Exchange> };

		/**
		 * Represents a Service or API definition as registred into Microcks repository
		 * Required
		 */
		service: Service;
	}

	/** Aggregate bean for grouping a Service an its messages pairs */
	export interface ServiceViewFormProperties {

		/**
		 * Map of messages for this Service. Keys are operation name, values are array of messages for this operation
		 * Required
		 */
		messagesMap: FormControl<{[id: string]: Array<Exchange> } | null | undefined>,
	}
	export function CreateServiceViewFormGroup() {
		return new FormGroup<ServiceViewFormProperties>({
			messagesMap: new FormControl<{[id: string]: Array<Exchange> } | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Upload of a repository snapshot file */
	export interface SnapshotUpload {

		/**
		 * The repository snapshot file
		 * Required
		 */
		file: string;
	}

	/** Upload of a repository snapshot file */
	export interface SnapshotUploadFormProperties {

		/**
		 * The repository snapshot file
		 * Required
		 */
		file: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotUploadFormGroup() {
		return new FormGroup<SnapshotUploadFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Companion objects for TestResult. Each TestCaseResult correspond to a particuliar service operation / action reference by the operationName field. TestCaseResults owns a collection of TestStepResults (one for every request associated to service operation / action). */
	export interface TestCaseResult {

		/**
		 * Elapsed time in milliseconds since the test case beginning
		 * Required
		 */
		elapsedTime: number;

		/**
		 * Name of operation this test case is bound to
		 * Required
		 */
		operationName: string;

		/**
		 * Flag telling if test case is a success
		 * Required
		 */
		success: boolean;

		/** Test steps associated to this test case */
		testStepResults?: Array<TestStepResult>;
	}

	/** Companion objects for TestResult. Each TestCaseResult correspond to a particuliar service operation / action reference by the operationName field. TestCaseResults owns a collection of TestStepResults (one for every request associated to service operation / action). */
	export interface TestCaseResultFormProperties {

		/**
		 * Elapsed time in milliseconds since the test case beginning
		 * Required
		 */
		elapsedTime: FormControl<number | null | undefined>,

		/**
		 * Name of operation this test case is bound to
		 * Required
		 */
		operationName: FormControl<string | null | undefined>,

		/**
		 * Flag telling if test case is a success
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateTestCaseResultFormGroup() {
		return new FormGroup<TestCaseResultFormProperties>({
			elapsedTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			operationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** TestStepResult is an entity embedded within TestCaseResult. They are created for each request associated with an operation / action of a microservice. */
	export interface TestStepResult {

		/** Elapsed time in milliseconds since the test step beginning */
		elapsedTime?: number | null;

		/** Name of event this test step is bound to */
		eventMessageName?: string | null;

		/** Error message that may be associated to this test step */
		message?: string | null;

		/** Name of request this test step is bound to */
		requestName?: string | null;

		/**
		 * Flag telling if test case is a success
		 * Required
		 */
		success: boolean;
	}

	/** TestStepResult is an entity embedded within TestCaseResult. They are created for each request associated with an operation / action of a microservice. */
	export interface TestStepResultFormProperties {

		/** Elapsed time in milliseconds since the test step beginning */
		elapsedTime: FormControl<number | null | undefined>,

		/** Name of event this test step is bound to */
		eventMessageName: FormControl<string | null | undefined>,

		/** Error message that may be associated to this test step */
		message: FormControl<string | null | undefined>,

		/** Name of request this test step is bound to */
		requestName: FormControl<string | null | undefined>,

		/**
		 * Flag telling if test case is a success
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateTestStepResultFormGroup() {
		return new FormGroup<TestStepResultFormProperties>({
			elapsedTime: new FormControl<number | null | undefined>(undefined),
			eventMessageName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			requestName: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestCaseReturnDTO {

		/**
		 * Name of related operation for this TestCase
		 * Required
		 */
		operationName: string;
	}
	export interface TestCaseReturnDTOFormProperties {

		/**
		 * Name of related operation for this TestCase
		 * Required
		 */
		operationName: FormControl<string | null | undefined>,
	}
	export function CreateTestCaseReturnDTOFormGroup() {
		return new FormGroup<TestCaseReturnDTOFormProperties>({
			operationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the test conformance metrics (current score, history and evolution trend) of a Service */
	export interface TestConformanceMetric {

		/** Value of the label used for metrics aggregation (if any) */
		aggregationLabelValue?: string | null;

		/**
		 * Current test conformance score for the related Service
		 * Required
		 */
		currentScore: number;

		/**
		 * Unique identifier of coverage metric
		 * Required
		 */
		id: string;

		/** The day of latest score update (in yyyyMMdd format) */
		lastUpdateDay?: string | null;

		/** History of latest scores (key is date with format yyyyMMdd, value is score as double) */
		latestScores?: {[id: string]: number };

		/** Evolution trend qualifier */
		latestTrend?: TestConformanceMetricLatestTrend | null;

		/**
		 * Maximum conformance score that can be reached (depends on samples expresiveness)
		 * Required
		 */
		maxPossibleScore: number;

		/**
		 * Unique identifier of the Service this metric is related to
		 * Required
		 */
		serviceId: string;
	}

	/** Represents the test conformance metrics (current score, history and evolution trend) of a Service */
	export interface TestConformanceMetricFormProperties {

		/** Value of the label used for metrics aggregation (if any) */
		aggregationLabelValue: FormControl<string | null | undefined>,

		/**
		 * Current test conformance score for the related Service
		 * Required
		 */
		currentScore: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of coverage metric
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The day of latest score update (in yyyyMMdd format) */
		lastUpdateDay: FormControl<string | null | undefined>,

		/** History of latest scores (key is date with format yyyyMMdd, value is score as double) */
		latestScores: FormControl<{[id: string]: number } | null | undefined>,

		/** Evolution trend qualifier */
		latestTrend: FormControl<TestConformanceMetricLatestTrend | null | undefined>,

		/**
		 * Maximum conformance score that can be reached (depends on samples expresiveness)
		 * Required
		 */
		maxPossibleScore: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the Service this metric is related to
		 * Required
		 */
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateTestConformanceMetricFormGroup() {
		return new FormGroup<TestConformanceMetricFormProperties>({
			aggregationLabelValue: new FormControl<string | null | undefined>(undefined),
			currentScore: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdateDay: new FormControl<string | null | undefined>(undefined),
			latestScores: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			latestTrend: new FormControl<TestConformanceMetricLatestTrend | null | undefined>(undefined),
			maxPossibleScore: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TestConformanceMetricLatestTrend { DOWN = 0, LOW_DOWN = 1, STABLE = 2, LOW_UP = 3, UP = 4 }


	/** Test request is a minimalist wrapper for requesting the launch of a new test */
	export interface TestRequest {

		/** A restriction on service operations to test */
		filteredOperations?: Array<string>;

		/** Specification of additional headers for a Service/API operations. Keys are operation name or "globals" (if header applies to all), values are Header objects DTO. */
		operationHeaders?: OperationHeaders;

		/**
		 * Type of test strategy (different strategies are implemented by different runners)
		 * Required
		 */
		runnerType: TestRequestRunnerType;

		/** The name of Secret to use for connecting the test endpoint */
		secretName?: string | null;

		/**
		 * Unique identifier of service to test
		 * Required
		 */
		serviceId: string;

		/**
		 * Endpoint to test for this service
		 * Required
		 */
		testEndpoint: string;

		/**
		 * The maximum time (in milliseconds) to wait for this test ends
		 * Required
		 */
		timeout: number;
	}

	/** Test request is a minimalist wrapper for requesting the launch of a new test */
	export interface TestRequestFormProperties {

		/**
		 * Type of test strategy (different strategies are implemented by different runners)
		 * Required
		 */
		runnerType: FormControl<TestRequestRunnerType | null | undefined>,

		/** The name of Secret to use for connecting the test endpoint */
		secretName: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of service to test
		 * Required
		 */
		serviceId: FormControl<string | null | undefined>,

		/**
		 * Endpoint to test for this service
		 * Required
		 */
		testEndpoint: FormControl<string | null | undefined>,

		/**
		 * The maximum time (in milliseconds) to wait for this test ends
		 * Required
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateTestRequestFormGroup() {
		return new FormGroup<TestRequestFormProperties>({
			runnerType: new FormControl<TestRequestRunnerType | null | undefined>(undefined, [Validators.required]),
			secretName: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			testEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TestRequestRunnerType { HTTP = 0, SOAP_HTTP = 1, SOAP_UI = 2, POSTMAN = 3, OPEN_API_SCHEMA = 4, ASYNC_API_SCHEMA = 5, GRPC_PROTOBUF = 6, GRAPHQL_SCHEMA = 7 }


	/** Represents the result of a Service or API test run by Microcks. Tests are related to a service and made of multiple test cases corresponding to each operations / actions composing service. Tests are run against a specific endpoint named testedEndpoint. It holds global markers telling if test still ran, is a success, how many times is has taken and so on ... */
	export interface TestResult {

		/** Elapsed time in milliseconds since test beginning */
		elapsedTime?: number | null;

		/**
		 * Unique identifier of TestResult
		 * Required
		 */
		id: string;

		/**
		 * Flag telling is test is still in progress
		 * Required
		 */
		inProgress: boolean;

		/** Specification of additional headers for a Service/API operations. Keys are operation name or "globals" (if header applies to all), values are Header objects DTO. */
		operationHeaders?: OperationHeaders;

		/**
		 * Type of test strategy (different strategies are implemented by different runners)
		 * Required
		 */
		runnerType: TestRequestRunnerType;

		/** Lightweight reference for an existing Secret */
		secretRef?: SecretRef;

		/**
		 * Unique identifier of service tested
		 * Required
		 */
		serviceId: string;

		/**
		 * Flag telling if test is a success
		 * Required
		 */
		success: boolean;

		/** TestCase results associated to this test */
		testCaseResults?: Array<TestCaseResult>;

		/**
		 * Timestamp of creation date of this service
		 * Required
		 */
		testDate: number;

		/**
		 * Incremental number for tracking number of tests of a service
		 * Required
		 */
		testNumber: number;

		/**
		 * Endpoint used during test
		 * Required
		 */
		testedEndpoint: string;

		/** The maximum time (in milliseconds) to wait for this test ends */
		timeout?: number | null;

		/**
		 * Revision number of this test
		 * Required
		 */
		version: number;
	}

	/** Represents the result of a Service or API test run by Microcks. Tests are related to a service and made of multiple test cases corresponding to each operations / actions composing service. Tests are run against a specific endpoint named testedEndpoint. It holds global markers telling if test still ran, is a success, how many times is has taken and so on ... */
	export interface TestResultFormProperties {

		/** Elapsed time in milliseconds since test beginning */
		elapsedTime: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of TestResult
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Flag telling is test is still in progress
		 * Required
		 */
		inProgress: FormControl<boolean | null | undefined>,

		/**
		 * Type of test strategy (different strategies are implemented by different runners)
		 * Required
		 */
		runnerType: FormControl<TestRequestRunnerType | null | undefined>,

		/**
		 * Unique identifier of service tested
		 * Required
		 */
		serviceId: FormControl<string | null | undefined>,

		/**
		 * Flag telling if test is a success
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,

		/**
		 * Timestamp of creation date of this service
		 * Required
		 */
		testDate: FormControl<number | null | undefined>,

		/**
		 * Incremental number for tracking number of tests of a service
		 * Required
		 */
		testNumber: FormControl<number | null | undefined>,

		/**
		 * Endpoint used during test
		 * Required
		 */
		testedEndpoint: FormControl<string | null | undefined>,

		/** The maximum time (in milliseconds) to wait for this test ends */
		timeout: FormControl<number | null | undefined>,

		/**
		 * Revision number of this test
		 * Required
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateTestResultFormGroup() {
		return new FormGroup<TestResultFormProperties>({
			elapsedTime: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inProgress: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			runnerType: new FormControl<TestRequestRunnerType | null | undefined>(undefined, [Validators.required]),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			testDate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			testNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			testedEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the summary result of a Service or API test run by Microcks.  */
	export interface TestResultSummary {

		/**
		 * Unique identifier of TestResult
		 * Required
		 */
		id: string;

		/**
		 * Unique identifier of service tested
		 * Required
		 */
		serviceId: string;

		/**
		 * Flag telling if test is a success
		 * Required
		 */
		success: boolean;

		/**
		 * Timestamp of creation date of this service
		 * Required
		 */
		testDate: number;
	}

	/** Represents the summary result of a Service or API test run by Microcks.  */
	export interface TestResultSummaryFormProperties {

		/**
		 * Unique identifier of TestResult
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of service tested
		 * Required
		 */
		serviceId: FormControl<string | null | undefined>,

		/**
		 * Flag telling if test is a success
		 * Required
		 */
		success: FormControl<boolean | null | undefined>,

		/**
		 * Timestamp of creation date of this service
		 * Required
		 */
		testDate: FormControl<number | null | undefined>,
	}
	export function CreateTestResultSummaryFormGroup() {
		return new FormGroup<TestResultSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			testDate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** TestReturn is used for wrapping the return code of a test step execution */
	export interface TestReturn {

		/**
		 * Return code for test (0 means Success, 1 means Failure)
		 * Required
		 */
		code: number;

		/**
		 * Elapsed time in milliseconds
		 * Required
		 */
		elapsedTime: number;
		eventMessage?: EventMessage;

		/** Error message if any */
		message?: string | null;

		/** A mock invocation or test request */
		request?: Request;

		/** A mock invocation or test response */
		response?: Response;
	}

	/** TestReturn is used for wrapping the return code of a test step execution */
	export interface TestReturnFormProperties {

		/**
		 * Return code for test (0 means Success, 1 means Failure)
		 * Required
		 */
		code: FormControl<number | null | undefined>,

		/**
		 * Elapsed time in milliseconds
		 * Required
		 */
		elapsedTime: FormControl<number | null | undefined>,

		/** Error message if any */
		message: FormControl<string | null | undefined>,
	}
	export function CreateTestReturnFormGroup() {
		return new FormGroup<TestReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			elapsedTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type of test strategy (different strategies are implemented by different runners) */
	export enum TestRunnerType { HTTP = 0, SOAP_HTTP = 1, SOAP_UI = 2, POSTMAN = 3, OPEN_API_SCHEMA = 4, ASYNC_API_SCHEMA = 5, GRPC_PROTOBUF = 6, GRAPHQL_SCHEMA = 7 }


	/** Evolution trend qualifier */
	export enum Trend { DOWN = 0, LOW_DOWN = 1, STABLE = 2, LOW_UP = 3, UP = 4 }


	/** Representation of an unidirectional exchange as an event message */
	export interface UnidirectionalEvent {
	}

	/** Representation of an unidirectional exchange as an event message */
	export interface UnidirectionalEventFormProperties {
	}
	export function CreateUnidirectionalEventFormGroup() {
		return new FormGroup<UnidirectionalEventFormProperties>({
		});

	}


	/** Value of a metric with an associated weight */
	export interface WeightedMetricValue {

		/**
		 * Metric name or serie name
		 * Required
		 */
		name: string;

		/**
		 * The value of this metric
		 * Required
		 */
		value: number;

		/**
		 * Weight of this metric value (typically a percentage)
		 * Required
		 */
		weight: number;
	}

	/** Value of a metric with an associated weight */
	export interface WeightedMetricValueFormProperties {

		/**
		 * Metric name or serie name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of this metric
		 * Required
		 */
		value: FormControl<number | null | undefined>,

		/**
		 * Weight of this metric value (typically a percentage)
		 * Required
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateWeightedMetricValueFormGroup() {
		return new FormGroup<WeightedMetricValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Export a snapshot
		 * Export a repostiory snapshot with requested services
		 * Get export
		 * @param {Array<string>} serviceIds List of service identifiers to export
		 * @return {string} Snapshot file representing the export of requested services
		 */
		ExportSnapshot(serviceIds: Array<string>): Observable<string> {
			return this.http.get(this.baseUri + 'export?' + serviceIds.map(z => `serviceIds=${encodeURIComponent(z)}`).join('&'), { responseType: 'text' });
		}

		/**
		 * Get features configuration
		 * Get features/config
		 * @return {void} Get features configuration
		 */
		GetFeaturesConfiguration(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'features/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ImportJobs
		 * Retrieve a list of ImportJobs
		 * Get jobs
		 * @param {number} page Page of ImportJobs to retrieve (starts at and defaults to 0)
		 * @param {number} size Size of a page. Maximum number of ImportJobs to include in a response (defaults to 20)
		 * @param {string} name Name like criterion for query
		 * @return {Array<ImportJob>} List of found ImportJobs
		 */
		GetImportJobs(page: number | null | undefined, size: number | null | undefined, name: string | null | undefined): Observable<Array<ImportJob>> {
			return this.http.get<Array<ImportJob>>(this.baseUri + 'jobs?page=' + page + '&size=' + size + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Create ImportJob
		 * Create a new ImportJob
		 * Post jobs
		 * @return {void} 
		 */
		CreateImportJob(requestBody: ImportJob): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the ImportJobs counter
		 * Get jobs/count
		 * @return {Counter} Number of ImportJobs in datastore
		 */
		GetImportJobCounter(): Observable<Counter> {
			return this.http.get<Counter>(this.baseUri + 'jobs/count', {});
		}

		/**
		 * Delete ImportJob
		 * Delete an ImportJob
		 * Delete jobs/{id}
		 * @return {void} ImportJob deleted
		 */
		DeleteImportJob(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ImportJob
		 * Retrieve an ImportJob using its identifier
		 * Get jobs/{id}
		 * @return {ImportJob} Found ImportJob
		 */
		JobGet(): Observable<ImportJob> {
			return this.http.get<ImportJob>(this.baseUri + 'jobs/{id}', {});
		}

		/**
		 * Update ImportJob
		 * Update an ImportJob
		 * Post jobs/{id}
		 * @return {ImportJob} Updated ImportJob
		 */
		JobPost(requestBody: ImportJob): Observable<ImportJob> {
			return this.http.post<ImportJob>(this.baseUri + 'jobs/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activate an ImportJob
		 * Make an ImportJob active, so that it is executed
		 * Put jobs/{id}/activate
		 * @return {ImportJob} ImportJob is activated
		 */
		ActivateImportJob(): Observable<ImportJob> {
			return this.http.put<ImportJob>(this.baseUri + 'jobs/{id}/activate', null, {});
		}

		/**
		 * Start an ImportJob
		 * Starting an ImportJob forces it to immediatly import mock definitions
		 * Put jobs/{id}/start
		 * @return {ImportJob} Started ImportJob
		 */
		StartImportJob(): Observable<ImportJob> {
			return this.http.put<ImportJob>(this.baseUri + 'jobs/{id}/start', null, {});
		}

		/**
		 * Stop an ImportJob
		 * Stopping an ImportJob desactivate it, so that it won't execute at next schedule
		 * Put jobs/{id}/stop
		 * @return {ImportJob} Stopped ImportJob
		 */
		StopImportJob(): Observable<ImportJob> {
			return this.http.put<ImportJob>(this.baseUri + 'jobs/{id}/stop', null, {});
		}

		/**
		 * Get authentification configuration
		 * Get keycloak/config
		 * @return {KeycloakConfig} Get current configuration
		 */
		GetKeycloakConfig(): Observable<KeycloakConfig> {
			return this.http.get<KeycloakConfig>(this.baseUri + 'keycloak/config', {});
		}

		/**
		 * Get aggregation of conformance metrics
		 * Get metrics/conformance/aggregate
		 * @return {Array<WeightedMetricValue>} Get aggregated coverage metric value
		 */
		GetConformanceMetricsAggregation(): Observable<Array<WeightedMetricValue>> {
			return this.http.get<Array<WeightedMetricValue>>(this.baseUri + 'metrics/conformance/aggregate', {});
		}

		/**
		 * Get conformance metrics for a Service
		 * Get metrics/conformance/service/{serviceId}
		 * @return {TestConformanceMetric} Test coverage metric for Service
		 */
		GetServiceTestConformanceMetric(): Observable<TestConformanceMetric> {
			return this.http.get<TestConformanceMetric>(this.baseUri + 'metrics/conformance/service/{serviceId}', {});
		}

		/**
		 * Get aggregated invocation statistics for a day
		 * Get metrics/invocations/global
		 * @param {string} day The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.
		 * @return {DailyInvocationStatistic} Aggregated invocation statistics for specified day
		 */
		GetAggregatedInvocationsStats(day: string | null | undefined): Observable<DailyInvocationStatistic> {
			return this.http.get<DailyInvocationStatistic>(this.baseUri + 'metrics/invocations/global?day=' + (day == null ? '' : encodeURIComponent(day)), {});
		}

		/**
		 * Get aggregated invocations statistics for latest days
		 * Get metrics/invocations/global/latest
		 * @param {number} limit Number of days to get back in time. Default is 20.
		 * @return {CounterMap} A map where keys are day (formatted using yyyyMMdd pattern) and values are counter of invocations on this day
		 */
		GetLatestAggregatedInvocationsStats(limit: number | null | undefined): Observable<CounterMap> {
			return this.http.get<CounterMap>(this.baseUri + 'metrics/invocations/global/latest?limit=' + limit, {});
		}

		/**
		 * Get top invocation statistics for a day
		 * Get metrics/invocations/top
		 * @param {string} day The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.
		 * @param {number} limit The number of top invoked mocks to return
		 * @return {Array<DailyInvocationStatistic>} Top invocations for a defined day
		 */
		GetTopIvnocationsStatsByDay(day: string | null | undefined, limit: number | null | undefined): Observable<Array<DailyInvocationStatistic>> {
			return this.http.get<Array<DailyInvocationStatistic>>(this.baseUri + 'metrics/invocations/top?day=' + (day == null ? '' : encodeURIComponent(day)) + '&limit=' + limit, {});
		}

		/**
		 * Get invocation statistics for Service
		 * Get metrics/invocations/{serviceName}/{serviceVersion}
		 * @param {string} day The day to get statistics for (formatted with yyyyMMdd pattern). Default to today if not provided.
		 * @return {DailyInvocationStatistic} Invocation statistics for service for specified day
		 */
		GetInvocationStatsByService(day: string | null | undefined): Observable<DailyInvocationStatistic> {
			return this.http.get<DailyInvocationStatistic>(this.baseUri + 'metrics/invocations/{serviceName}/{serviceVersion}?day=' + (day == null ? '' : encodeURIComponent(day)), {});
		}

		/**
		 * Get latest tests results
		 * Get metrics/tests/latest
		 * @param {number} limit Number of days to consider for test results to return. Default is 7 (one week)
		 * @return {Array<TestResultSummary>} Test results summary for specified <limit> last days.
		 */
		GetLatestTestResults(limit: number | null | undefined): Observable<Array<TestResultSummary>> {
			return this.http.get<Array<TestResultSummary>>(this.baseUri + 'metrics/tests/latest?limit=' + limit, {});
		}

		/**
		 * Get Resources by Service
		 * Get resources/service/{serviceId}
		 * @return {Array<Resource>} List the resources attached to a Service or API
		 */
		GetResourcesByService(): Observable<Array<Resource>> {
			return this.http.get<Array<Resource>>(this.baseUri + 'resources/service/{serviceId}', {});
		}

		/**
		 * Get Resource
		 * Get resources/{name}
		 * @return {Resource} Retrieve the resource having this name
		 */
		GetResource(): Observable<Resource> {
			return this.http.get<Resource>(this.baseUri + 'resources/{name}', {});
		}

		/**
		 * Get Secrets
		 * Get secrets
		 * @param {number} page Page of Secrets to retrieve (starts at and defaults to 0)
		 * @param {number} size Size of a page. Maximum number of Secrets to include in a response (defaults to 20)
		 * @return {Array<Secret>} List of found Secrets
		 */
		GetSecrets(page: number | null | undefined, size: number | null | undefined): Observable<Array<Secret>> {
			return this.http.get<Array<Secret>>(this.baseUri + 'secrets?page=' + page + '&size=' + size, {});
		}

		/**
		 * Create a new Secret
		 * Post secrets
		 * @return {void} 
		 */
		CreateSecret(requestBody: Secret): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'secrets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the Secrets counter
		 * Get secrets/count
		 * @return {Counter} Number of Secrets in datastore
		 */
		GetSecretsCounter(): Observable<Counter> {
			return this.http.get<Counter>(this.baseUri + 'secrets/count', {});
		}

		/**
		 * Delete Secret
		 * Delete a Secret
		 * Delete secrets/{id}
		 * @return {void} Secret has been deleted
		 */
		DeleteSecret(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'secrets/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Secret
		 * Retrieve a Secret
		 * Get secrets/{id}
		 * @return {Secret} Found Secret
		 */
		GetSecret(): Observable<Secret> {
			return this.http.get<Secret>(this.baseUri + 'secrets/{id}', {});
		}

		/**
		 * Update Secret
		 * Update a Secret
		 * Put secrets/{id}
		 * @return {void} Updated Secret
		 */
		UpdateSecret(): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'secrets/{id}', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Services and APIs
		 * Get services
		 * @param {number} page Page of Services to retrieve (starts at and defaults to 0)
		 * @param {number} size Size of a page. Maximum number of Services to include in a response (defaults to 20)
		 * @return {Service} List of found Services
		 */
		GetServices(page: number | null | undefined, size: number | null | undefined): Observable<Service> {
			return this.http.get<Service>(this.baseUri + 'services?page=' + page + '&size=' + size, {});
		}

		/**
		 * Get the Services counter
		 * Get services/count
		 * @return {Counter} Number of Services in datastore
		 */
		GetServicesCounter(): Observable<Counter> {
			return this.http.get<Counter>(this.baseUri + 'services/count', {});
		}

		/**
		 * Get the already used labels for Services
		 * Get services/labels
		 * @return {LabelsMap} Already used labels: keys are label Keys, values are array of label Values
		 */
		GetServicesLabels(): Observable<LabelsMap> {
			return this.http.get<LabelsMap>(this.baseUri + 'services/labels', {});
		}

		/**
		 * Search for Services and APIs
		 * Get services/search
		 * @param {{[id: string]: string }} queryMap Map of criterion. Key can be simply 'name' with value as the searched string. You can also search by label using keys like 'labels.x' where 'x' is the label and value the label value
		 * @return {Array<Service>} List of found Services (filtered according search criteria)
		 */
		SearchServices(queryMap: {[id: string]: string }): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'services/search?queryMap=' + queryMap, {});
		}

		/**
		 * Delete Service
		 * Delete a Service
		 * Delete services/{id}
		 * @return {void} Service has been deleted
		 */
		DeleteService(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'services/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Service
		 * Get services/{id}
		 * @param {boolean} messages Whether to include details on services messages into result. Default is false
		 * @return {Service} 
		 */
		GetService(messages: boolean | null | undefined): Observable<Service> {
			return this.http.get<Service>(this.baseUri + 'services/{id}?messages=' + messages, {});
		}

		/**
		 * Update Service Metadata
		 * Put services/{id}/metadata
		 * @return {void} Service metadata has been updated
		 */
		UpdateServiceMetadata(requestBody: Metadata): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'services/{id}/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Override Service Operation
		 * Put services/{id}/operation
		 * @param {string} operationName Name of operation to update
		 * @return {void} Operation has been updated
		 */
		OverrideServiceOperation(operationName: string, requestBody: OperationOverrideDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'services/{id}/operation?operationName=' + (operationName == null ? '' : encodeURIComponent(operationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new Test
		 * Post tests
		 * @return {void} 
		 */
		CreateTest(requestBody: TestRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get TestResults by Service
		 * Get tests/service/{serviceId}
		 * @return {Array<TestResult>} List of TestResults for the Service having the requested id
		 */
		GetTestResultsByService(): Observable<Array<TestResult>> {
			return this.http.get<Array<TestResult>>(this.baseUri + 'tests/service/{serviceId}', {});
		}

		/**
		 * Get the TestResults for Service counter
		 * Get tests/service/{serviceId}/count
		 * @return {Counter} Number of TestResults for this Service in datastore
		 */
		GetTestResultsByServiceCounter(): Observable<Counter> {
			return this.http.get<Counter>(this.baseUri + 'tests/service/{serviceId}/count', {});
		}

		/**
		 * Get TestResult
		 * Get tests/{id}
		 * @return {TestResult} Requested TestResult
		 */
		GetTestResult(): Observable<TestResult> {
			return this.http.get<TestResult>(this.baseUri + 'tests/{id}', {});
		}

		/**
		 * Get events for TestCase
		 * Get tests/{id}/events/{testCaseId}
		 * @return {Array<UnidirectionalEvent>} List of event messages for this TestCase
		 */
		GetEventsByTestCase(): Observable<Array<UnidirectionalEvent>> {
			return this.http.get<Array<UnidirectionalEvent>>(this.baseUri + 'tests/{id}/events/{testCaseId}', {});
		}

		/**
		 * Get messages for TestCase
		 * Get tests/{id}/messages/{testCaseId}
		 * @return {Array<RequestResponsePair>} List of request and response messages for this TestCase
		 */
		GetMessagesByTestCase(): Observable<Array<RequestResponsePair>> {
			return this.http.get<Array<RequestResponsePair>>(this.baseUri + 'tests/{id}/messages/{testCaseId}', {});
		}

		/**
		 * Report and create a new TestCaseResult
		 * Report a TestCaseResult (typically used by a Test runner)
		 * Post tests/{id}/testCaseResult
		 * @param {TestCaseReturnDTO} requestBody TestCase return wrapper object
		 * @return {TestCaseResult} TestCaseResult is reported
		 */
		ReportTestCaseResult(requestBody: TestCaseReturnDTO): Observable<TestCaseResult> {
			return this.http.post<TestCaseResult>(this.baseUri + 'tests/{id}/testCaseResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

