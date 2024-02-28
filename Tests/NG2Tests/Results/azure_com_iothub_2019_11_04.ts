import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The JSON-serialized X509 Certificate. */
	export interface CertificateBodyDescription {

		/** base-64 representation of the X509 leaf certificate .cer file or just .pem file content. */
		certificate?: string | null;
	}

	/** The JSON-serialized X509 Certificate. */
	export interface CertificateBodyDescriptionFormProperties {

		/** base-64 representation of the X509 leaf certificate .cer file or just .pem file content. */
		certificate: FormControl<string | null | undefined>,
	}
	export function CreateCertificateBodyDescriptionFormGroup() {
		return new FormGroup<CertificateBodyDescriptionFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The X509 Certificate. */
	export interface CertificateDescription {

		/** The entity tag. */
		etag?: string | null;

		/** The resource identifier. */
		id?: string | null;

		/** The name of the certificate. */
		name?: string | null;

		/** The description of an X509 CA Certificate. */
		properties?: CertificateProperties;

		/** The resource type. */
		type?: string | null;
	}

	/** The X509 Certificate. */
	export interface CertificateDescriptionFormProperties {

		/** The entity tag. */
		etag: FormControl<string | null | undefined>,

		/** The resource identifier. */
		id: FormControl<string | null | undefined>,

		/** The name of the certificate. */
		name: FormControl<string | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCertificateDescriptionFormGroup() {
		return new FormGroup<CertificateDescriptionFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of an X509 CA Certificate. */
	export interface CertificateProperties {

		/** The certificate content */
		certificate?: string | null;

		/** The certificate's create date and time. */
		created?: string | null;

		/** The certificate's expiration date and time. */
		expiry?: string | null;

		/** Determines whether certificate has been verified. */
		isVerified?: boolean | null;

		/** The certificate's subject name. */
		subject?: string | null;

		/** The certificate's thumbprint. */
		thumbprint?: string | null;

		/** The certificate's last update date and time. */
		updated?: string | null;
	}

	/** The description of an X509 CA Certificate. */
	export interface CertificatePropertiesFormProperties {

		/** The certificate content */
		certificate: FormControl<string | null | undefined>,

		/** The certificate's create date and time. */
		created: FormControl<string | null | undefined>,

		/** The certificate's expiration date and time. */
		expiry: FormControl<string | null | undefined>,

		/** Determines whether certificate has been verified. */
		isVerified: FormControl<boolean | null | undefined>,

		/** The certificate's subject name. */
		subject: FormControl<string | null | undefined>,

		/** The certificate's thumbprint. */
		thumbprint: FormControl<string | null | undefined>,

		/** The certificate's last update date and time. */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateCertificatePropertiesFormGroup() {
		return new FormGroup<CertificatePropertiesFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<string | null | undefined>(undefined),
			expiry: new FormControl<string | null | undefined>(undefined),
			isVerified: new FormControl<boolean | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The JSON-serialized array of Certificate objects. */
	export interface CertificateListDescription {

		/** The array of Certificate objects. */
		value?: Array<CertificateDescription>;
	}

	/** The JSON-serialized array of Certificate objects. */
	export interface CertificateListDescriptionFormProperties {
	}
	export function CreateCertificateListDescriptionFormGroup() {
		return new FormGroup<CertificateListDescriptionFormProperties>({
		});

	}


	/** The description of an X509 CA Certificate including the challenge nonce issued for the Proof-Of-Possession flow. */
	export interface CertificatePropertiesWithNonce {

		/** The certificate content */
		certificate?: string | null;

		/** The certificate's create date and time. */
		created?: string | null;

		/** The certificate's expiration date and time. */
		expiry?: string | null;

		/** Determines whether certificate has been verified. */
		isVerified?: boolean | null;

		/** The certificate's subject name. */
		subject?: string | null;

		/** The certificate's thumbprint. */
		thumbprint?: string | null;

		/** The certificate's last update date and time. */
		updated?: string | null;

		/** The certificate's verification code that will be used for proof of possession. */
		verificationCode?: string | null;
	}

	/** The description of an X509 CA Certificate including the challenge nonce issued for the Proof-Of-Possession flow. */
	export interface CertificatePropertiesWithNonceFormProperties {

		/** The certificate content */
		certificate: FormControl<string | null | undefined>,

		/** The certificate's create date and time. */
		created: FormControl<string | null | undefined>,

		/** The certificate's expiration date and time. */
		expiry: FormControl<string | null | undefined>,

		/** Determines whether certificate has been verified. */
		isVerified: FormControl<boolean | null | undefined>,

		/** The certificate's subject name. */
		subject: FormControl<string | null | undefined>,

		/** The certificate's thumbprint. */
		thumbprint: FormControl<string | null | undefined>,

		/** The certificate's last update date and time. */
		updated: FormControl<string | null | undefined>,

		/** The certificate's verification code that will be used for proof of possession. */
		verificationCode: FormControl<string | null | undefined>,
	}
	export function CreateCertificatePropertiesWithNonceFormGroup() {
		return new FormGroup<CertificatePropertiesWithNonceFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<string | null | undefined>(undefined),
			expiry: new FormControl<string | null | undefined>(undefined),
			isVerified: new FormControl<boolean | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			verificationCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The JSON-serialized leaf certificate */
	export interface CertificateVerificationDescription {

		/** base-64 representation of X509 certificate .cer file or just .pem file content. */
		certificate?: string | null;
	}

	/** The JSON-serialized leaf certificate */
	export interface CertificateVerificationDescriptionFormProperties {

		/** base-64 representation of X509 certificate .cer file or just .pem file content. */
		certificate: FormControl<string | null | undefined>,
	}
	export function CreateCertificateVerificationDescriptionFormGroup() {
		return new FormGroup<CertificateVerificationDescriptionFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The X509 Certificate. */
	export interface CertificateWithNonceDescription {

		/** The entity tag. */
		etag?: string | null;

		/** The resource identifier. */
		id?: string | null;

		/** The name of the certificate. */
		name?: string | null;

		/** The description of an X509 CA Certificate including the challenge nonce issued for the Proof-Of-Possession flow. */
		properties?: CertificatePropertiesWithNonce;

		/** The resource type. */
		type?: string | null;
	}

	/** The X509 Certificate. */
	export interface CertificateWithNonceDescriptionFormProperties {

		/** The entity tag. */
		etag: FormControl<string | null | undefined>,

		/** The resource identifier. */
		id: FormControl<string | null | undefined>,

		/** The name of the certificate. */
		name: FormControl<string | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCertificateWithNonceDescriptionFormGroup() {
		return new FormGroup<CertificateWithNonceDescriptionFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The IoT hub cloud-to-device messaging properties. */
	export interface CloudToDeviceProperties {

		/** The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
		defaultTtlAsIso8601?: string | null;

		/** The properties of the feedback queue for cloud-to-device messages. */
		feedback?: FeedbackProperties;

		/**
		 * The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxDeliveryCount?: number | null;
	}

	/** The IoT hub cloud-to-device messaging properties. */
	export interface CloudToDevicePropertiesFormProperties {

		/** The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
		defaultTtlAsIso8601: FormControl<string | null | undefined>,

		/**
		 * The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxDeliveryCount: FormControl<number | null | undefined>,
	}
	export function CreateCloudToDevicePropertiesFormGroup() {
		return new FormGroup<CloudToDevicePropertiesFormProperties>({
			defaultTtlAsIso8601: new FormControl<string | null | undefined>(undefined),
			maxDeliveryCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}


	/** The properties of the feedback queue for cloud-to-device messages. */
	export interface FeedbackProperties {

		/** The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
		lockDurationAsIso8601?: string | null;

		/**
		 * The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxDeliveryCount?: number | null;

		/** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
		ttlAsIso8601?: string | null;
	}

	/** The properties of the feedback queue for cloud-to-device messages. */
	export interface FeedbackPropertiesFormProperties {

		/** The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
		lockDurationAsIso8601: FormControl<string | null | undefined>,

		/**
		 * The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxDeliveryCount: FormControl<number | null | undefined>,

		/** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages. */
		ttlAsIso8601: FormControl<string | null | undefined>,
	}
	export function CreateFeedbackPropertiesFormGroup() {
		return new FormGroup<FeedbackPropertiesFormProperties>({
			lockDurationAsIso8601: new FormControl<string | null | undefined>(undefined),
			maxDeliveryCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			ttlAsIso8601: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The health data for an endpoint */
	export interface EndpointHealthData {

		/** Id of the endpoint */
		endpointId?: string | null;

		/** Health statuses have following meanings. The 'healthy' status shows that the endpoint is accepting messages as expected. The 'unhealthy' status shows that the endpoint is not accepting messages as expected and IoT Hub is retrying to send data to this endpoint. The status of an unhealthy endpoint will be updated to healthy when IoT Hub has established an eventually consistent state of health. The 'dead' status shows that the endpoint is not accepting messages, after IoT Hub retried sending messages for the retrial period. See IoT Hub metrics to identify errors and monitor issues with endpoints. The 'unknown' status shows that the IoT Hub has not established a connection with the endpoint. No messages have been delivered to or rejected from this endpoint */
		healthStatus?: EndpointHealthDataHealthStatus | null;
	}

	/** The health data for an endpoint */
	export interface EndpointHealthDataFormProperties {

		/** Id of the endpoint */
		endpointId: FormControl<string | null | undefined>,

		/** Health statuses have following meanings. The 'healthy' status shows that the endpoint is accepting messages as expected. The 'unhealthy' status shows that the endpoint is not accepting messages as expected and IoT Hub is retrying to send data to this endpoint. The status of an unhealthy endpoint will be updated to healthy when IoT Hub has established an eventually consistent state of health. The 'dead' status shows that the endpoint is not accepting messages, after IoT Hub retried sending messages for the retrial period. See IoT Hub metrics to identify errors and monitor issues with endpoints. The 'unknown' status shows that the IoT Hub has not established a connection with the endpoint. No messages have been delivered to or rejected from this endpoint */
		healthStatus: FormControl<EndpointHealthDataHealthStatus | null | undefined>,
	}
	export function CreateEndpointHealthDataFormGroup() {
		return new FormGroup<EndpointHealthDataFormProperties>({
			endpointId: new FormControl<string | null | undefined>(undefined),
			healthStatus: new FormControl<EndpointHealthDataHealthStatus | null | undefined>(undefined),
		});

	}

	export enum EndpointHealthDataHealthStatus { unknown = 'unknown', healthy = 'healthy', unhealthy = 'unhealthy', dead = 'dead' }


	/** The JSON-serialized array of EndpointHealthData objects with a next link. */
	export interface EndpointHealthDataListResult {

		/** Link to more results */
		nextLink?: string | null;

		/** JSON-serialized array of Endpoint health data */
		value?: Array<EndpointHealthData>;
	}

	/** The JSON-serialized array of EndpointHealthData objects with a next link. */
	export interface EndpointHealthDataListResultFormProperties {

		/** Link to more results */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEndpointHealthDataListResultFormGroup() {
		return new FormGroup<EndpointHealthDataListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of an enrichment that your IoT hub applies to messages delivered to endpoints. */
	export interface EnrichmentProperties {

		/**
		 * The list of endpoints for which the enrichment is applied to the message.
		 * Required
		 * Minimum items: 1
		 */
		endpointNames: Array<string>;

		/**
		 * The key or name for the enrichment property.
		 * Required
		 */
		key: string;

		/**
		 * The value for the enrichment property.
		 * Required
		 */
		value: string;
	}

	/** The properties of an enrichment that your IoT hub applies to messages delivered to endpoints. */
	export interface EnrichmentPropertiesFormProperties {

		/**
		 * The key or name for the enrichment property.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * The value for the enrichment property.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnrichmentPropertiesFormGroup() {
		return new FormGroup<EnrichmentPropertiesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Error details. */
	export interface ErrorDetails {

		/** The error code. */
		code?: string | null;

		/** The error details. */
		details?: string | null;

		/** The HTTP status code. */
		httpStatusCode?: string | null;

		/** The error message. */
		message?: string | null;
	}

	/** Error details. */
	export interface ErrorDetailsFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error details. */
		details: FormControl<string | null | undefined>,

		/** The HTTP status code. */
		httpStatusCode: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the EventHubConsumerGroupInfo object. */
	export interface EventHubConsumerGroupInfo {

		/** The etag. */
		etag?: string | null;

		/** The Event Hub-compatible consumer group identifier. */
		id?: string | null;

		/** The Event Hub-compatible consumer group name. */
		name?: string | null;

		/** The tags. */
		properties?: {[id: string]: string };

		/** the resource type. */
		type?: string | null;
	}

	/** The properties of the EventHubConsumerGroupInfo object. */
	export interface EventHubConsumerGroupInfoFormProperties {

		/** The etag. */
		etag: FormControl<string | null | undefined>,

		/** The Event Hub-compatible consumer group identifier. */
		id: FormControl<string | null | undefined>,

		/** The Event Hub-compatible consumer group name. */
		name: FormControl<string | null | undefined>,

		/** The tags. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** the resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEventHubConsumerGroupInfoFormGroup() {
		return new FormGroup<EventHubConsumerGroupInfoFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The JSON-serialized array of Event Hub-compatible consumer group names with a next link. */
	export interface EventHubConsumerGroupsListResult {

		/** The next link. */
		nextLink?: string | null;

		/** List of consumer groups objects */
		value?: Array<EventHubConsumerGroupInfo>;
	}

	/** The JSON-serialized array of Event Hub-compatible consumer group names with a next link. */
	export interface EventHubConsumerGroupsListResultFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEventHubConsumerGroupsListResultFormGroup() {
		return new FormGroup<EventHubConsumerGroupsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the provisioned Event Hub-compatible endpoint used by the IoT hub. */
	export interface EventHubProperties {

		/** The Event Hub-compatible endpoint. */
		endpoint?: string | null;

		/**
		 * The number of partitions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		partitionCount?: number | null;

		/** The partition ids in the Event Hub-compatible endpoint. */
		partitionIds?: Array<string>;

		/** The Event Hub-compatible name. */
		path?: string | null;

		/**
		 * The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		retentionTimeInDays?: string | null;
	}

	/** The properties of the provisioned Event Hub-compatible endpoint used by the IoT hub. */
	export interface EventHubPropertiesFormProperties {

		/** The Event Hub-compatible endpoint. */
		endpoint: FormControl<string | null | undefined>,

		/**
		 * The number of partitions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		partitionCount: FormControl<number | null | undefined>,

		/** The Event Hub-compatible name. */
		path: FormControl<string | null | undefined>,

		/**
		 * The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		retentionTimeInDays: FormControl<string | null | undefined>,
	}
	export function CreateEventHubPropertiesFormGroup() {
		return new FormGroup<EventHubPropertiesFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			partitionCount: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			retentionTimeInDays: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use to provide parameters when requesting an export of all devices in the IoT hub. */
	export interface ExportDevicesRequest {

		/**
		 * The value indicating whether keys should be excluded during export.
		 * Required
		 */
		excludeKeys: boolean;

		/**
		 * The export blob container URI.
		 * Required
		 */
		exportBlobContainerUri: string;
	}

	/** Use to provide parameters when requesting an export of all devices in the IoT hub. */
	export interface ExportDevicesRequestFormProperties {

		/**
		 * The value indicating whether keys should be excluded during export.
		 * Required
		 */
		excludeKeys: FormControl<boolean | null | undefined>,

		/**
		 * The export blob container URI.
		 * Required
		 */
		exportBlobContainerUri: FormControl<string | null | undefined>,
	}
	export function CreateExportDevicesRequestFormGroup() {
		return new FormGroup<ExportDevicesRequestFormProperties>({
			excludeKeys: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			exportBlobContainerUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Use to provide failover region when requesting manual Failover for a hub. */
	export interface FailoverInput {

		/**
		 * Region the hub will be failed over to
		 * Required
		 */
		failoverRegion: string;
	}

	/** Use to provide failover region when requesting manual Failover for a hub. */
	export interface FailoverInputFormProperties {

		/**
		 * Region the hub will be failed over to
		 * Required
		 */
		failoverRegion: FormControl<string | null | undefined>,
	}
	export function CreateFailoverInputFormGroup() {
		return new FormGroup<FailoverInputFormProperties>({
			failoverRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties of the fallback route. IoT Hub uses these properties when it routes messages to the fallback endpoint. */
	export interface FallbackRouteProperties {

		/** The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language */
		condition?: string | null;

		/**
		 * The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		endpointNames: Array<string>;

		/**
		 * Used to specify whether the fallback route is enabled.
		 * Required
		 */
		isEnabled: boolean;

		/** The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique. */
		name?: string | null;

		/**
		 * The source to which the routing rule is to be applied to. For example, DeviceMessages
		 * Required
		 */
		source: FallbackRoutePropertiesSource;
	}

	/** The properties of the fallback route. IoT Hub uses these properties when it routes messages to the fallback endpoint. */
	export interface FallbackRoutePropertiesFormProperties {

		/** The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language */
		condition: FormControl<string | null | undefined>,

		/**
		 * Used to specify whether the fallback route is enabled.
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/** The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique. */
		name: FormControl<string | null | undefined>,

		/**
		 * The source to which the routing rule is to be applied to. For example, DeviceMessages
		 * Required
		 */
		source: FormControl<FallbackRoutePropertiesSource | null | undefined>,
	}
	export function CreateFallbackRoutePropertiesFormGroup() {
		return new FormGroup<FallbackRoutePropertiesFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<FallbackRoutePropertiesSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FallbackRoutePropertiesSource { DeviceMessages = 'DeviceMessages' }


	/** Use to provide parameters when requesting an import of all devices in the hub. */
	export interface ImportDevicesRequest {

		/**
		 * The input blob container URI.
		 * Required
		 */
		inputBlobContainerUri: string;

		/**
		 * The output blob container URI.
		 * Required
		 */
		outputBlobContainerUri: string;
	}

	/** Use to provide parameters when requesting an import of all devices in the hub. */
	export interface ImportDevicesRequestFormProperties {

		/**
		 * The input blob container URI.
		 * Required
		 */
		inputBlobContainerUri: FormControl<string | null | undefined>,

		/**
		 * The output blob container URI.
		 * Required
		 */
		outputBlobContainerUri: FormControl<string | null | undefined>,
	}
	export function CreateImportDevicesRequestFormGroup() {
		return new FormGroup<ImportDevicesRequestFormProperties>({
			inputBlobContainerUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputBlobContainerUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** IoT Hub capacity information. */
	export interface IotHubCapacity {

		/**
		 * The default number of units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		default?: string | null;

		/**
		 * The maximum number of units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maximum?: string | null;

		/**
		 * The minimum number of units.
		 * Minimum: 1
		 * Maximum: 1
		 */
		minimum?: string | null;

		/** The type of the scaling enabled. */
		scaleType?: IotHubCapacityScaleType | null;
	}

	/** IoT Hub capacity information. */
	export interface IotHubCapacityFormProperties {

		/**
		 * The default number of units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		default: FormControl<string | null | undefined>,

		/**
		 * The maximum number of units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maximum: FormControl<string | null | undefined>,

		/**
		 * The minimum number of units.
		 * Minimum: 1
		 * Maximum: 1
		 */
		minimum: FormControl<string | null | undefined>,

		/** The type of the scaling enabled. */
		scaleType: FormControl<IotHubCapacityScaleType | null | undefined>,
	}
	export function CreateIotHubCapacityFormGroup() {
		return new FormGroup<IotHubCapacityFormProperties>({
			default: new FormControl<string | null | undefined>(undefined),
			maximum: new FormControl<string | null | undefined>(undefined),
			minimum: new FormControl<string | null | undefined>(undefined, [Validators.min(1), Validators.max(1)]),
			scaleType: new FormControl<IotHubCapacityScaleType | null | undefined>(undefined),
		});

	}

	export enum IotHubCapacityScaleType { Automatic = 'Automatic', Manual = 'Manual', None = 'None' }


	/** The description of the IoT hub. */
	export interface IotHubDescription {

		/** The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. */
		etag?: string | null;

		/** The properties of an IoT hub. */
		properties?: IotHubProperties;

		/**
		 * Information about the SKU of the IoT hub.
		 * Required
		 */
		sku: IotHubSkuInfo;
	}

	/** The description of the IoT hub. */
	export interface IotHubDescriptionFormProperties {

		/** The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateIotHubDescriptionFormGroup() {
		return new FormGroup<IotHubDescriptionFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of an IoT hub. */
	export interface IotHubProperties {

		/** The shared access policies you can use to secure a connection to the IoT hub. */
		authorizationPolicies?: Array<SharedAccessSignatureAuthorizationRule>;

		/** The IoT hub cloud-to-device messaging properties. */
		cloudToDevice?: CloudToDeviceProperties;

		/** IoT hub comments. */
		comments?: string | null;

		/** If True, file upload notifications are enabled. */
		enableFileUploadNotifications?: boolean | null;

		/** The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub. */
		eventHubEndpoints?: {[id: string]: EventHubProperties };

		/** The capabilities and features enabled for the IoT hub. */
		features?: IotHubPropertiesFeatures | null;

		/** The name of the host. */
		hostName?: string | null;

		/** The IP filter rules. */
		ipFilterRules?: Array<IpFilterRule>;

		/** Primary and secondary location for iot hub */
		locations?: Array<IotHubLocationDescription>;

		/** The messaging endpoint properties for the file upload notification queue. */
		messagingEndpoints?: {[id: string]: MessagingEndpointProperties };

		/** The provisioning state. */
		provisioningState?: string | null;

		/** The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging */
		routing?: RoutingProperties;

		/** The hub state. */
		state?: string | null;

		/** The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown. */
		storageEndpoints?: {[id: string]: StorageEndpointProperties };
	}

	/** The properties of an IoT hub. */
	export interface IotHubPropertiesFormProperties {

		/** IoT hub comments. */
		comments: FormControl<string | null | undefined>,

		/** If True, file upload notifications are enabled. */
		enableFileUploadNotifications: FormControl<boolean | null | undefined>,

		/** The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub. */
		eventHubEndpoints: FormControl<{[id: string]: EventHubProperties } | null | undefined>,

		/** The capabilities and features enabled for the IoT hub. */
		features: FormControl<IotHubPropertiesFeatures | null | undefined>,

		/** The name of the host. */
		hostName: FormControl<string | null | undefined>,

		/** The messaging endpoint properties for the file upload notification queue. */
		messagingEndpoints: FormControl<{[id: string]: MessagingEndpointProperties } | null | undefined>,

		/** The provisioning state. */
		provisioningState: FormControl<string | null | undefined>,

		/** The hub state. */
		state: FormControl<string | null | undefined>,

		/** The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown. */
		storageEndpoints: FormControl<{[id: string]: StorageEndpointProperties } | null | undefined>,
	}
	export function CreateIotHubPropertiesFormGroup() {
		return new FormGroup<IotHubPropertiesFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
			enableFileUploadNotifications: new FormControl<boolean | null | undefined>(undefined),
			eventHubEndpoints: new FormControl<{[id: string]: EventHubProperties } | null | undefined>(undefined),
			features: new FormControl<IotHubPropertiesFeatures | null | undefined>(undefined),
			hostName: new FormControl<string | null | undefined>(undefined),
			messagingEndpoints: new FormControl<{[id: string]: MessagingEndpointProperties } | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			storageEndpoints: new FormControl<{[id: string]: StorageEndpointProperties } | null | undefined>(undefined),
		});

	}


	/** The properties of an IoT hub shared access policy. */
	export interface SharedAccessSignatureAuthorizationRule {

		/**
		 * The name of the shared access policy.
		 * Required
		 */
		keyName: string;

		/** The primary key. */
		primaryKey?: string | null;

		/**
		 * The permissions assigned to the shared access policy.
		 * Required
		 */
		rights: SharedAccessSignatureAuthorizationRuleRights;

		/** The secondary key. */
		secondaryKey?: string | null;
	}

	/** The properties of an IoT hub shared access policy. */
	export interface SharedAccessSignatureAuthorizationRuleFormProperties {

		/**
		 * The name of the shared access policy.
		 * Required
		 */
		keyName: FormControl<string | null | undefined>,

		/** The primary key. */
		primaryKey: FormControl<string | null | undefined>,

		/**
		 * The permissions assigned to the shared access policy.
		 * Required
		 */
		rights: FormControl<SharedAccessSignatureAuthorizationRuleRights | null | undefined>,

		/** The secondary key. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateSharedAccessSignatureAuthorizationRuleFormGroup() {
		return new FormGroup<SharedAccessSignatureAuthorizationRuleFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			primaryKey: new FormControl<string | null | undefined>(undefined),
			rights: new FormControl<SharedAccessSignatureAuthorizationRuleRights | null | undefined>(undefined, [Validators.required]),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SharedAccessSignatureAuthorizationRuleRights { RegistryRead = 'RegistryRead', RegistryWrite = 'RegistryWrite', ServiceConnect = 'ServiceConnect', DeviceConnect = 'DeviceConnect', 'RegistryRead, RegistryWrite' = 'RegistryRead, RegistryWrite', 'RegistryRead, ServiceConnect' = 'RegistryRead, ServiceConnect', 'RegistryRead, DeviceConnect' = 'RegistryRead, DeviceConnect', 'RegistryWrite, ServiceConnect' = 'RegistryWrite, ServiceConnect', 'RegistryWrite, DeviceConnect' = 'RegistryWrite, DeviceConnect', 'ServiceConnect, DeviceConnect' = 'ServiceConnect, DeviceConnect', 'RegistryRead, RegistryWrite, ServiceConnect' = 'RegistryRead, RegistryWrite, ServiceConnect', 'RegistryRead, RegistryWrite, DeviceConnect' = 'RegistryRead, RegistryWrite, DeviceConnect', 'RegistryRead, ServiceConnect, DeviceConnect' = 'RegistryRead, ServiceConnect, DeviceConnect', 'RegistryWrite, ServiceConnect, DeviceConnect' = 'RegistryWrite, ServiceConnect, DeviceConnect', 'RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect' = 'RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect' }

	export enum IotHubPropertiesFeatures { None = 'None', DeviceManagement = 'DeviceManagement' }


	/** The IP filter rules for the IoT hub. */
	export interface IpFilterRule {

		/**
		 * The desired action for requests captured by this rule.
		 * Required
		 */
		action: IpFilterRuleAction;

		/**
		 * The name of the IP filter rule.
		 * Required
		 */
		filterName: string;

		/**
		 * A string that contains the IP address range in CIDR notation for the rule.
		 * Required
		 */
		ipMask: string;
	}

	/** The IP filter rules for the IoT hub. */
	export interface IpFilterRuleFormProperties {

		/**
		 * The desired action for requests captured by this rule.
		 * Required
		 */
		action: FormControl<IpFilterRuleAction | null | undefined>,

		/**
		 * The name of the IP filter rule.
		 * Required
		 */
		filterName: FormControl<string | null | undefined>,

		/**
		 * A string that contains the IP address range in CIDR notation for the rule.
		 * Required
		 */
		ipMask: FormControl<string | null | undefined>,
	}
	export function CreateIpFilterRuleFormGroup() {
		return new FormGroup<IpFilterRuleFormProperties>({
			action: new FormControl<IpFilterRuleAction | null | undefined>(undefined, [Validators.required]),
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipMask: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IpFilterRuleAction { Accept = 'Accept', Reject = 'Reject' }


	/** Public representation of one of the locations where a resource is provisioned. */
	export interface IotHubLocationDescription {

		/** The name of the Azure region */
		location?: string | null;

		/** The role of the region, can be either primary or secondary. The primary region is where the IoT hub is currently provisioned. The secondary region is the Azure disaster recovery (DR) paired region and also the region where the IoT hub can failover to. */
		role?: IotHubLocationDescriptionRole | null;
	}

	/** Public representation of one of the locations where a resource is provisioned. */
	export interface IotHubLocationDescriptionFormProperties {

		/** The name of the Azure region */
		location: FormControl<string | null | undefined>,

		/** The role of the region, can be either primary or secondary. The primary region is where the IoT hub is currently provisioned. The secondary region is the Azure disaster recovery (DR) paired region and also the region where the IoT hub can failover to. */
		role: FormControl<IotHubLocationDescriptionRole | null | undefined>,
	}
	export function CreateIotHubLocationDescriptionFormGroup() {
		return new FormGroup<IotHubLocationDescriptionFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<IotHubLocationDescriptionRole | null | undefined>(undefined),
		});

	}

	export enum IotHubLocationDescriptionRole { primary = 'primary', secondary = 'secondary' }


	/** The properties of the messaging endpoints used by this IoT hub. */
	export interface MessagingEndpointProperties {

		/** The lock duration. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
		lockDurationAsIso8601?: string | null;

		/**
		 * The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxDeliveryCount?: number | null;

		/** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
		ttlAsIso8601?: string | null;
	}

	/** The properties of the messaging endpoints used by this IoT hub. */
	export interface MessagingEndpointPropertiesFormProperties {

		/** The lock duration. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
		lockDurationAsIso8601: FormControl<string | null | undefined>,

		/**
		 * The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxDeliveryCount: FormControl<number | null | undefined>,

		/** The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload. */
		ttlAsIso8601: FormControl<string | null | undefined>,
	}
	export function CreateMessagingEndpointPropertiesFormGroup() {
		return new FormGroup<MessagingEndpointPropertiesFormProperties>({
			lockDurationAsIso8601: new FormControl<string | null | undefined>(undefined),
			maxDeliveryCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			ttlAsIso8601: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging */
	export interface RoutingProperties {

		/** The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs. */
		endpoints?: RoutingEndpoints;

		/** The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid */
		enrichments?: Array<EnrichmentProperties>;

		/** The properties of the fallback route. IoT Hub uses these properties when it routes messages to the fallback endpoint. */
		fallbackRoute?: FallbackRouteProperties;

		/** The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs. */
		routes?: Array<RouteProperties>;
	}

	/** The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging */
	export interface RoutingPropertiesFormProperties {
	}
	export function CreateRoutingPropertiesFormGroup() {
		return new FormGroup<RoutingPropertiesFormProperties>({
		});

	}


	/** The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs. */
	export interface RoutingEndpoints {

		/** The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint. */
		eventHubs?: Array<RoutingEventHubProperties>;

		/** The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules. */
		serviceBusQueues?: Array<RoutingServiceBusQueueEndpointProperties>;

		/** The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules. */
		serviceBusTopics?: Array<RoutingServiceBusTopicEndpointProperties>;

		/** The list of storage container endpoints that IoT hub routes messages to, based on the routing rules. */
		storageContainers?: Array<RoutingStorageContainerProperties>;
	}

	/** The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs. */
	export interface RoutingEndpointsFormProperties {
	}
	export function CreateRoutingEndpointsFormGroup() {
		return new FormGroup<RoutingEndpointsFormProperties>({
		});

	}


	/** The properties related to an event hub endpoint. */
	export interface RoutingEventHubProperties {

		/**
		 * The connection string of the event hub endpoint.
		 * Required
		 */
		connectionString: string;

		/**
		 * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
		 * Required
		 */
		name: string;

		/** The name of the resource group of the event hub endpoint. */
		resourceGroup?: string | null;

		/** The subscription identifier of the event hub endpoint. */
		subscriptionId?: string | null;
	}

	/** The properties related to an event hub endpoint. */
	export interface RoutingEventHubPropertiesFormProperties {

		/**
		 * The connection string of the event hub endpoint.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The name of the resource group of the event hub endpoint. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The subscription identifier of the event hub endpoint. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateRoutingEventHubPropertiesFormGroup() {
		return new FormGroup<RoutingEventHubPropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9-._]{1,64}$')]),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties related to service bus queue endpoint types. */
	export interface RoutingServiceBusQueueEndpointProperties {

		/**
		 * The connection string of the service bus queue endpoint.
		 * Required
		 */
		connectionString: string;

		/**
		 * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name.
		 * Required
		 */
		name: string;

		/** The name of the resource group of the service bus queue endpoint. */
		resourceGroup?: string | null;

		/** The subscription identifier of the service bus queue endpoint. */
		subscriptionId?: string | null;
	}

	/** The properties related to service bus queue endpoint types. */
	export interface RoutingServiceBusQueueEndpointPropertiesFormProperties {

		/**
		 * The connection string of the service bus queue endpoint.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The name of the resource group of the service bus queue endpoint. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The subscription identifier of the service bus queue endpoint. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateRoutingServiceBusQueueEndpointPropertiesFormGroup() {
		return new FormGroup<RoutingServiceBusQueueEndpointPropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9-._]{1,64}$')]),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties related to service bus topic endpoint types. */
	export interface RoutingServiceBusTopicEndpointProperties {

		/**
		 * The connection string of the service bus topic endpoint.
		 * Required
		 */
		connectionString: string;

		/**
		 * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name.
		 * Required
		 */
		name: string;

		/** The name of the resource group of the service bus topic endpoint. */
		resourceGroup?: string | null;

		/** The subscription identifier of the service bus topic endpoint. */
		subscriptionId?: string | null;
	}

	/** The properties related to service bus topic endpoint types. */
	export interface RoutingServiceBusTopicEndpointPropertiesFormProperties {

		/**
		 * The connection string of the service bus topic endpoint.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The name of the resource group of the service bus topic endpoint. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The subscription identifier of the service bus topic endpoint. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateRoutingServiceBusTopicEndpointPropertiesFormGroup() {
		return new FormGroup<RoutingServiceBusTopicEndpointPropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9-._]{1,64}$')]),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties related to a storage container endpoint. */
	export interface RoutingStorageContainerProperties {

		/**
		 * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
		 * Minimum: 60
		 * Maximum: 720
		 */
		batchFrequencyInSeconds?: number | null;

		/**
		 * The connection string of the storage account.
		 * Required
		 */
		connectionString: string;

		/**
		 * The name of storage container in the storage account.
		 * Required
		 */
		containerName: string;

		/** Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'. */
		encoding?: RoutingStorageContainerPropertiesEncoding | null;

		/** File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered. */
		fileNameFormat?: string | null;

		/**
		 * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
		 * Minimum: 10485760
		 * Maximum: 524288000
		 */
		maxChunkSizeInBytes?: number | null;

		/**
		 * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
		 * Required
		 */
		name: string;

		/** The name of the resource group of the storage account. */
		resourceGroup?: string | null;

		/** The subscription identifier of the storage account. */
		subscriptionId?: string | null;
	}

	/** The properties related to a storage container endpoint. */
	export interface RoutingStorageContainerPropertiesFormProperties {

		/**
		 * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
		 * Minimum: 60
		 * Maximum: 720
		 */
		batchFrequencyInSeconds: FormControl<number | null | undefined>,

		/**
		 * The connection string of the storage account.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * The name of storage container in the storage account.
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/** Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'. */
		encoding: FormControl<RoutingStorageContainerPropertiesEncoding | null | undefined>,

		/** File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered. */
		fileNameFormat: FormControl<string | null | undefined>,

		/**
		 * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
		 * Minimum: 10485760
		 * Maximum: 524288000
		 */
		maxChunkSizeInBytes: FormControl<number | null | undefined>,

		/**
		 * The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The name of the resource group of the storage account. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The subscription identifier of the storage account. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateRoutingStorageContainerPropertiesFormGroup() {
		return new FormGroup<RoutingStorageContainerPropertiesFormProperties>({
			batchFrequencyInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(720)]),
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			encoding: new FormControl<RoutingStorageContainerPropertiesEncoding | null | undefined>(undefined),
			fileNameFormat: new FormControl<string | null | undefined>(undefined),
			maxChunkSizeInBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(10485760), Validators.max(524288000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9-._]{1,64}$')]),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoutingStorageContainerPropertiesEncoding { Avro = 'Avro', AvroDeflate = 'AvroDeflate', JSON = 'JSON' }


	/** The properties of a routing rule that your IoT hub uses to route messages to endpoints. */
	export interface RouteProperties {

		/** The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language */
		condition?: string | null;

		/**
		 * The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		endpointNames: Array<string>;

		/**
		 * Used to specify whether a route is enabled.
		 * Required
		 */
		isEnabled: boolean;

		/**
		 * The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
		 * Required
		 */
		name: string;

		/**
		 * The source that the routing rule is to be applied to, such as DeviceMessages.
		 * Required
		 */
		source: RoutePropertiesSource;
	}

	/** The properties of a routing rule that your IoT hub uses to route messages to endpoints. */
	export interface RoutePropertiesFormProperties {

		/** The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language */
		condition: FormControl<string | null | undefined>,

		/**
		 * Used to specify whether a route is enabled.
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The source that the routing rule is to be applied to, such as DeviceMessages.
		 * Required
		 */
		source: FormControl<RoutePropertiesSource | null | undefined>,
	}
	export function CreateRoutePropertiesFormGroup() {
		return new FormGroup<RoutePropertiesFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9-._]{1,64}$')]),
			source: new FormControl<RoutePropertiesSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RoutePropertiesSource { Invalid = 'Invalid', DeviceMessages = 'DeviceMessages', TwinChangeEvents = 'TwinChangeEvents', DeviceLifecycleEvents = 'DeviceLifecycleEvents', DeviceJobLifecycleEvents = 'DeviceJobLifecycleEvents' }


	/** The properties of the Azure Storage endpoint for file upload. */
	export interface StorageEndpointProperties {

		/**
		 * The connection string for the Azure Storage account to which files are uploaded.
		 * Required
		 */
		connectionString: string;

		/**
		 * The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified.
		 * Required
		 */
		containerName: string;

		/** The period of time for which the SAS URI generated by IoT Hub for file upload is valid. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options. */
		sasTtlAsIso8601?: string | null;
	}

	/** The properties of the Azure Storage endpoint for file upload. */
	export interface StorageEndpointPropertiesFormProperties {

		/**
		 * The connection string for the Azure Storage account to which files are uploaded.
		 * Required
		 */
		connectionString: FormControl<string | null | undefined>,

		/**
		 * The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified.
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/** The period of time for which the SAS URI generated by IoT Hub for file upload is valid. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options. */
		sasTtlAsIso8601: FormControl<string | null | undefined>,
	}
	export function CreateStorageEndpointPropertiesFormGroup() {
		return new FormGroup<StorageEndpointPropertiesFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sasTtlAsIso8601: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the SKU of the IoT hub. */
	export interface IotHubSkuInfo {

		/**
		 * The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		capacity?: string | null;

		/**
		 * The name of the SKU.
		 * Required
		 */
		name: IotHubSkuInfoName;

		/** The billing tier for the IoT hub. */
		tier?: IotHubSkuInfoTier | null;
	}

	/** Information about the SKU of the IoT hub. */
	export interface IotHubSkuInfoFormProperties {

		/**
		 * The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		capacity: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU.
		 * Required
		 */
		name: FormControl<IotHubSkuInfoName | null | undefined>,

		/** The billing tier for the IoT hub. */
		tier: FormControl<IotHubSkuInfoTier | null | undefined>,
	}
	export function CreateIotHubSkuInfoFormGroup() {
		return new FormGroup<IotHubSkuInfoFormProperties>({
			capacity: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<IotHubSkuInfoName | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<IotHubSkuInfoTier | null | undefined>(undefined),
		});

	}

	export enum IotHubSkuInfoName { F1 = 'F1', S1 = 'S1', S2 = 'S2', S3 = 'S3', B1 = 'B1', B2 = 'B2', B3 = 'B3' }

	export enum IotHubSkuInfoTier { Free = 'Free', Standard = 'Standard', Basic = 'Basic' }


	/** The JSON-serialized array of IotHubDescription objects with a next link. */
	export interface IotHubDescriptionListResult {

		/** The next link. */
		nextLink?: string | null;

		/** The array of IotHubDescription objects. */
		value?: Array<IotHubDescription>;
	}

	/** The JSON-serialized array of IotHubDescription objects with a next link. */
	export interface IotHubDescriptionListResultFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIotHubDescriptionListResultFormGroup() {
		return new FormGroup<IotHubDescriptionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties indicating whether a given IoT hub name is available. */
	export interface IotHubNameAvailabilityInfo {

		/** The detailed reason message. */
		message?: string | null;

		/** The value which indicates whether the provided name is available. */
		nameAvailable?: boolean | null;

		/** The reason for unavailability. */
		reason?: IotHubNameAvailabilityInfoReason | null;
	}

	/** The properties indicating whether a given IoT hub name is available. */
	export interface IotHubNameAvailabilityInfoFormProperties {

		/** The detailed reason message. */
		message: FormControl<string | null | undefined>,

		/** The value which indicates whether the provided name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason for unavailability. */
		reason: FormControl<IotHubNameAvailabilityInfoReason | null | undefined>,
	}
	export function CreateIotHubNameAvailabilityInfoFormGroup() {
		return new FormGroup<IotHubNameAvailabilityInfoFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<IotHubNameAvailabilityInfoReason | null | undefined>(undefined),
		});

	}

	export enum IotHubNameAvailabilityInfoReason { Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }


	/** Quota metrics properties. */
	export interface IotHubQuotaMetricInfo {

		/**
		 * The current value for the quota metric.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		currentValue?: string | null;

		/**
		 * The maximum value of the quota metric.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxValue?: string | null;

		/** The name of the quota metric. */
		name?: string | null;
	}

	/** Quota metrics properties. */
	export interface IotHubQuotaMetricInfoFormProperties {

		/**
		 * The current value for the quota metric.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		currentValue: FormControl<string | null | undefined>,

		/**
		 * The maximum value of the quota metric.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxValue: FormControl<string | null | undefined>,

		/** The name of the quota metric. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIotHubQuotaMetricInfoFormGroup() {
		return new FormGroup<IotHubQuotaMetricInfoFormProperties>({
			currentValue: new FormControl<string | null | undefined>(undefined),
			maxValue: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The JSON-serialized array of IotHubQuotaMetricInfo objects with a next link. */
	export interface IotHubQuotaMetricInfoListResult {

		/** The next link. */
		nextLink?: string | null;

		/** The array of quota metrics objects. */
		value?: Array<IotHubQuotaMetricInfo>;
	}

	/** The JSON-serialized array of IotHubQuotaMetricInfo objects with a next link. */
	export interface IotHubQuotaMetricInfoListResultFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIotHubQuotaMetricInfoListResultFormGroup() {
		return new FormGroup<IotHubQuotaMetricInfoListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SKU properties. */
	export interface IotHubSkuDescription {

		/**
		 * IoT Hub capacity information.
		 * Required
		 */
		capacity: IotHubCapacity;

		/** The type of the resource. */
		resourceType?: string | null;

		/**
		 * Information about the SKU of the IoT hub.
		 * Required
		 */
		sku: IotHubSkuInfo;
	}

	/** SKU properties. */
	export interface IotHubSkuDescriptionFormProperties {

		/** The type of the resource. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateIotHubSkuDescriptionFormGroup() {
		return new FormGroup<IotHubSkuDescriptionFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The JSON-serialized array of IotHubSkuDescription objects with a next link. */
	export interface IotHubSkuDescriptionListResult {

		/** The next link. */
		nextLink?: string | null;

		/** The array of IotHubSkuDescription. */
		value?: Array<IotHubSkuDescription>;
	}

	/** The JSON-serialized array of IotHubSkuDescription objects with a next link. */
	export interface IotHubSkuDescriptionListResultFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIotHubSkuDescriptionListResultFormGroup() {
		return new FormGroup<IotHubSkuDescriptionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the Job Response object. */
	export interface JobResponse {

		/** The time the job stopped processing. */
		endTimeUtc?: string | null;

		/** If status == failed, this string containing the reason for the failure. */
		failureReason?: string | null;

		/** The job identifier. */
		jobId?: string | null;

		/** The job identifier of the parent job, if any. */
		parentJobId?: string | null;

		/** The start time of the job. */
		startTimeUtc?: string | null;

		/** The status of the job. */
		status?: JobResponseStatus | null;

		/** The status message for the job. */
		statusMessage?: string | null;

		/** The type of the job. */
		type?: JobResponseType | null;
	}

	/** The properties of the Job Response object. */
	export interface JobResponseFormProperties {

		/** The time the job stopped processing. */
		endTimeUtc: FormControl<string | null | undefined>,

		/** If status == failed, this string containing the reason for the failure. */
		failureReason: FormControl<string | null | undefined>,

		/** The job identifier. */
		jobId: FormControl<string | null | undefined>,

		/** The job identifier of the parent job, if any. */
		parentJobId: FormControl<string | null | undefined>,

		/** The start time of the job. */
		startTimeUtc: FormControl<string | null | undefined>,

		/** The status of the job. */
		status: FormControl<JobResponseStatus | null | undefined>,

		/** The status message for the job. */
		statusMessage: FormControl<string | null | undefined>,

		/** The type of the job. */
		type: FormControl<JobResponseType | null | undefined>,
	}
	export function CreateJobResponseFormGroup() {
		return new FormGroup<JobResponseFormProperties>({
			endTimeUtc: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			parentJobId: new FormControl<string | null | undefined>(undefined),
			startTimeUtc: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<JobResponseStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<JobResponseType | null | undefined>(undefined),
		});

	}

	export enum JobResponseStatus { unknown = 'unknown', enqueued = 'enqueued', running = 'running', completed = 'completed', failed = 'failed', cancelled = 'cancelled' }

	export enum JobResponseType { unknown = 'unknown', export = 'export', import = 'import', backup = 'backup', readDeviceProperties = 'readDeviceProperties', writeDeviceProperties = 'writeDeviceProperties', updateDeviceConfiguration = 'updateDeviceConfiguration', rebootDevice = 'rebootDevice', factoryResetDevice = 'factoryResetDevice', firmwareUpdate = 'firmwareUpdate' }


	/** The JSON-serialized array of JobResponse objects with a next link. */
	export interface JobResponseListResult {

		/** The next link. */
		nextLink?: string | null;

		/** The array of JobResponse objects. */
		value?: Array<JobResponse>;
	}

	/** The JSON-serialized array of JobResponse objects with a next link. */
	export interface JobResponseListResultFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobResponseListResultFormGroup() {
		return new FormGroup<JobResponseListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Routes that matched */
	export interface MatchedRoute {

		/** The properties of a routing rule that your IoT hub uses to route messages to endpoints. */
		properties?: RouteProperties;
	}

	/** Routes that matched */
	export interface MatchedRouteFormProperties {
	}
	export function CreateMatchedRouteFormGroup() {
		return new FormGroup<MatchedRouteFormProperties>({
		});

	}


	/** Name of Iot Hub type */
	export interface Name {

		/** Localized value of name */
		localizedValue?: string | null;

		/** IotHub type */
		value?: string | null;
	}

	/** Name of Iot Hub type */
	export interface NameFormProperties {

		/** Localized value of name */
		localizedValue: FormControl<string | null | undefined>,

		/** IotHub type */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IoT Hub REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{read | write | action | delete} */
		name?: string | null;
	}

	/** IoT Hub REST API operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{read | write | action | delete} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input values. */
	export interface OperationInputs {

		/**
		 * The name of the IoT hub to check.
		 * Required
		 */
		name: string;
	}

	/** Input values. */
	export interface OperationInputsFormProperties {

		/**
		 * The name of the IoT hub to check.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationInputsFormGroup() {
		return new FormGroup<OperationInputsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Result of the request to list IoT Hub operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of IoT Hub operations supported by the Microsoft.Devices resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list IoT Hub operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identity registry statistics. */
	export interface RegistryStatistics {

		/**
		 * The count of disabled devices in the identity registry.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		disabledDeviceCount?: string | null;

		/**
		 * The count of enabled devices in the identity registry.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		enabledDeviceCount?: string | null;

		/**
		 * The total count of devices in the identity registry.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalDeviceCount?: string | null;
	}

	/** Identity registry statistics. */
	export interface RegistryStatisticsFormProperties {

		/**
		 * The count of disabled devices in the identity registry.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		disabledDeviceCount: FormControl<string | null | undefined>,

		/**
		 * The count of enabled devices in the identity registry.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		enabledDeviceCount: FormControl<string | null | undefined>,

		/**
		 * The total count of devices in the identity registry.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalDeviceCount: FormControl<string | null | undefined>,
	}
	export function CreateRegistryStatisticsFormGroup() {
		return new FormGroup<RegistryStatisticsFormProperties>({
			disabledDeviceCount: new FormControl<string | null | undefined>(undefined),
			enabledDeviceCount: new FormControl<string | null | undefined>(undefined),
			totalDeviceCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The common properties of an Azure resource. */
	export interface Resource {

		/** The resource identifier. */
		id?: string | null;

		/**
		 * The resource location.
		 * Required
		 */
		location: string;

		/** The resource name. */
		name?: string | null;

		/** The resource tags. */
		tags?: {[id: string]: string };

		/** The resource type. */
		type?: string | null;
	}

	/** The common properties of an Azure resource. */
	export interface ResourceFormProperties {

		/** The resource identifier. */
		id: FormControl<string | null | undefined>,

		/**
		 * The resource location.
		 * Required
		 */
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
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,49}[a-zA-Z0-9]$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compilation error when evaluating route */
	export interface RouteCompilationError {

		/** Range of route errors */
		location?: RouteErrorRange;

		/** Route error message */
		message?: string | null;

		/** Severity of the route error */
		severity?: RouteCompilationErrorSeverity | null;
	}

	/** Compilation error when evaluating route */
	export interface RouteCompilationErrorFormProperties {

		/** Route error message */
		message: FormControl<string | null | undefined>,

		/** Severity of the route error */
		severity: FormControl<RouteCompilationErrorSeverity | null | undefined>,
	}
	export function CreateRouteCompilationErrorFormGroup() {
		return new FormGroup<RouteCompilationErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<RouteCompilationErrorSeverity | null | undefined>(undefined),
		});

	}


	/** Range of route errors */
	export interface RouteErrorRange {

		/** Position where the route error happened */
		end?: RouteErrorPosition;

		/** Position where the route error happened */
		start?: RouteErrorPosition;
	}

	/** Range of route errors */
	export interface RouteErrorRangeFormProperties {
	}
	export function CreateRouteErrorRangeFormGroup() {
		return new FormGroup<RouteErrorRangeFormProperties>({
		});

	}


	/** Position where the route error happened */
	export interface RouteErrorPosition {

		/**
		 * Column where the route error happened
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		column?: number | null;

		/**
		 * Line where the route error happened
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		line?: number | null;
	}

	/** Position where the route error happened */
	export interface RouteErrorPositionFormProperties {

		/**
		 * Column where the route error happened
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		column: FormControl<number | null | undefined>,

		/**
		 * Line where the route error happened
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		line: FormControl<number | null | undefined>,
	}
	export function CreateRouteErrorPositionFormGroup() {
		return new FormGroup<RouteErrorPositionFormProperties>({
			column: new FormControl<number | null | undefined>(undefined),
			line: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RouteCompilationErrorSeverity { error = 'error', warning = 'warning' }


	/** Routing message */
	export interface RoutingMessage {

		/** App properties */
		appProperties?: {[id: string]: string };

		/** Body of routing message */
		body?: string | null;

		/** System properties */
		systemProperties?: {[id: string]: string };
	}

	/** Routing message */
	export interface RoutingMessageFormProperties {

		/** App properties */
		appProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Body of routing message */
		body: FormControl<string | null | undefined>,

		/** System properties */
		systemProperties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRoutingMessageFormGroup() {
		return new FormGroup<RoutingMessageFormProperties>({
			appProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			systemProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Twin reference input parameter. This is an optional parameter */
	export interface RoutingTwin {
		properties?: any;

		/** Twin Tags */
		tags?: string | null;
	}

	/** Twin reference input parameter. This is an optional parameter */
	export interface RoutingTwinFormProperties {
		properties: FormControl<any | null | undefined>,

		/** Twin Tags */
		tags: FormControl<string | null | undefined>,
	}
	export function CreateRoutingTwinFormGroup() {
		return new FormGroup<RoutingTwinFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of shared access policies with a next link. */
	export interface SharedAccessSignatureAuthorizationRuleListResult {

		/** The next link. */
		nextLink?: string | null;

		/** The list of shared access policies. */
		value?: Array<SharedAccessSignatureAuthorizationRule>;
	}

	/** The list of shared access policies with a next link. */
	export interface SharedAccessSignatureAuthorizationRuleListResultFormProperties {

		/** The next link. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSharedAccessSignatureAuthorizationRuleListResultFormGroup() {
		return new FormGroup<SharedAccessSignatureAuthorizationRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container holding only the Tags for a resource, allowing the user to update the tags on an IoT Hub instance. */
	export interface TagsResource {

		/** Resource tags */
		tags?: any;
	}

	/** A container holding only the Tags for a resource, allowing the user to update the tags on an IoT Hub instance. */
	export interface TagsResourceFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateTagsResourceFormGroup() {
		return new FormGroup<TagsResourceFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Input for testing all routes */
	export interface TestAllRoutesInput {

		/** Routing message */
		message?: RoutingMessage;

		/** Routing source */
		routingSource?: RoutePropertiesSource | null;

		/** Twin reference input parameter. This is an optional parameter */
		twin?: RoutingTwin;
	}

	/** Input for testing all routes */
	export interface TestAllRoutesInputFormProperties {

		/** Routing source */
		routingSource: FormControl<RoutePropertiesSource | null | undefined>,
	}
	export function CreateTestAllRoutesInputFormGroup() {
		return new FormGroup<TestAllRoutesInputFormProperties>({
			routingSource: new FormControl<RoutePropertiesSource | null | undefined>(undefined),
		});

	}


	/** Result of testing all routes */
	export interface TestAllRoutesResult {

		/** JSON-serialized array of matched routes */
		routes?: Array<MatchedRoute>;
	}

	/** Result of testing all routes */
	export interface TestAllRoutesResultFormProperties {
	}
	export function CreateTestAllRoutesResultFormGroup() {
		return new FormGroup<TestAllRoutesResultFormProperties>({
		});

	}


	/** Input for testing route */
	export interface TestRouteInput {

		/** Routing message */
		message?: RoutingMessage;

		/**
		 * The properties of a routing rule that your IoT hub uses to route messages to endpoints.
		 * Required
		 */
		route: RouteProperties;

		/** Twin reference input parameter. This is an optional parameter */
		twin?: RoutingTwin;
	}

	/** Input for testing route */
	export interface TestRouteInputFormProperties {
	}
	export function CreateTestRouteInputFormGroup() {
		return new FormGroup<TestRouteInputFormProperties>({
		});

	}


	/** Result of testing one route */
	export interface TestRouteResult {

		/** Detailed result of testing a route */
		details?: TestRouteResultDetails;

		/** Result of testing route */
		result?: TestRouteResultResult | null;
	}

	/** Result of testing one route */
	export interface TestRouteResultFormProperties {

		/** Result of testing route */
		result: FormControl<TestRouteResultResult | null | undefined>,
	}
	export function CreateTestRouteResultFormGroup() {
		return new FormGroup<TestRouteResultFormProperties>({
			result: new FormControl<TestRouteResultResult | null | undefined>(undefined),
		});

	}


	/** Detailed result of testing a route */
	export interface TestRouteResultDetails {

		/** JSON-serialized list of route compilation errors */
		compilationErrors?: Array<RouteCompilationError>;
	}

	/** Detailed result of testing a route */
	export interface TestRouteResultDetailsFormProperties {
	}
	export function CreateTestRouteResultDetailsFormGroup() {
		return new FormGroup<TestRouteResultDetailsFormProperties>({
		});

	}

	export enum TestRouteResultResult { undefined = 'undefined', false = 'false', true = 'true' }


	/** User subscription quota response */
	export interface UserSubscriptionQuota {

		/**
		 * Current number of IotHub type
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue?: number | null;

		/** IotHub type id */
		id?: string | null;

		/**
		 * Numerical limit on IotHub type
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** Name of Iot Hub type */
		name?: Name;

		/** Response type */
		type?: string | null;

		/** Unit of IotHub type */
		unit?: string | null;
	}

	/** User subscription quota response */
	export interface UserSubscriptionQuotaFormProperties {

		/**
		 * Current number of IotHub type
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue: FormControl<number | null | undefined>,

		/** IotHub type id */
		id: FormControl<string | null | undefined>,

		/**
		 * Numerical limit on IotHub type
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** Response type */
		type: FormControl<string | null | undefined>,

		/** Unit of IotHub type */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateUserSubscriptionQuotaFormGroup() {
		return new FormGroup<UserSubscriptionQuotaFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Json-serialized array of User subscription quota response */
	export interface UserSubscriptionQuotaListResult {
		nextLink?: string | null;
		value?: Array<UserSubscriptionQuota>;
	}

	/** Json-serialized array of User subscription quota response */
	export interface UserSubscriptionQuotaListResultFormProperties {
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUserSubscriptionQuotaListResultFormGroup() {
		return new FormGroup<UserSubscriptionQuotaListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available IoT Hub REST API operations.
		 * Get providers/Microsoft.Devices/operations
		 * @param {string} api_version The version of the API.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Devices/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all the IoT hubs in a subscription
		 * Get all the IoT hubs in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Devices/IotHubs
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @return {IotHubDescriptionListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoT hubs in the subscription.
		 */
		IotHubResource_ListBySubscription(api_version: string, subscriptionId: string): Observable<IotHubDescriptionListResult> {
			return this.http.get<IotHubDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Devices/IotHubs?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check if an IoT hub name is available
		 * Check if an IoT hub name is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkNameAvailability
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {OperationInputs} requestBody Set the name parameter in the OperationInputs structure to the name of the IoT hub to check.
		 * @return {IotHubNameAvailabilityInfo} This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the IoT hub name is available. If the name is not available, the body contains the reason.
		 */
		IotHubResource_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: OperationInputs): Observable<IotHubNameAvailabilityInfo> {
			return this.http.post<IotHubNameAvailabilityInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Devices/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the number of iot hubs in the subscription
		 * Get the number of free and paid iot hubs in the subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Devices/usages
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} api_version The version of the API.
		 * @return {UserSubscriptionQuotaListResult} OK
		 */
		ResourceProviderCommon_GetSubscriptionQuota(subscriptionId: string, api_version: string): Observable<UserSubscriptionQuotaListResult> {
			return this.http.get<UserSubscriptionQuotaListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Devices/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all the IoT hubs in a resource group
		 * Get all the IoT hubs in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @return {IotHubDescriptionListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoT hubs in the resource group.
		 */
		IotHubResource_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<IotHubDescriptionListResult> {
			return this.http.get<IotHubDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Manually initiate a failover for the IoT Hub to its secondary region
		 * Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see https://aka.ms/manualfailover
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover
		 * @param {string} iotHubName Name of the IoT hub to failover
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName Name of the resource group containing the IoT hub resource
		 * @param {string} api_version The version of the API.
		 * @param {FailoverInput} requestBody Region to failover to. Must be the Azure paired region. Get the value from the secondary location in the locations property. To learn more, see https://aka.ms/manualfailover/region
		 * @return {void} Long running manual failover operation for the IoT hub completed
		 */
		IotHub_ManualFailover(iotHubName: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: FailoverInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (iotHubName == null ? '' : encodeURIComponent(iotHubName)) + '/failover&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Test all routes
		 * Test all routes configured in this Iot Hub
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testall
		 * @param {string} iotHubName IotHub to be tested
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName resource group which Iot Hub belongs to
		 * @param {string} api_version The version of the API.
		 * @param {TestAllRoutesInput} requestBody Input for testing all routes
		 * @return {TestAllRoutesResult} OK
		 */
		IotHubResource_TestAllRoutes(iotHubName: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: TestAllRoutesInput): Observable<TestAllRoutesResult> {
			return this.http.post<TestAllRoutesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (iotHubName == null ? '' : encodeURIComponent(iotHubName)) + '/routing/routes/$testall&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Test the new route
		 * Test the new route for this Iot Hub
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routing/routes/$testnew
		 * @param {string} iotHubName IotHub to be tested
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName resource group which Iot Hub belongs to
		 * @param {string} api_version The version of the API.
		 * @param {TestRouteInput} requestBody Route that needs to be tested
		 * @return {TestRouteResult} OK
		 */
		IotHubResource_TestRoute(iotHubName: string, subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: TestRouteInput): Observable<TestRouteResult> {
			return this.http.post<TestRouteResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (iotHubName == null ? '' : encodeURIComponent(iotHubName)) + '/routing/routes/$testnew&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the health for routing endpoints
		 * Get the health for routing endpoints.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/routingEndpointsHealth
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} api_version The version of the API.
		 * @return {EndpointHealthDataListResult} OK
		 */
		IotHubResource_GetEndpointHealth(subscriptionId: string, resourceGroupName: string, iotHubName: string, api_version: string): Observable<EndpointHealthDataListResult> {
			return this.http.get<EndpointHealthDataListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (iotHubName == null ? '' : encodeURIComponent(iotHubName)) + '/routingEndpointsHealth&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the non-security related metadata of an IoT hub
		 * Get the non-security related metadata of an IoT hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @return {IotHubDescription} The body contains all the non-security properties of the IoT hub. Security-related properties are set to null.
		 */
		IotHubResource_Get(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<IotHubDescription> {
			return this.http.get<IotHubDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update the metadata of an IoT hub.
		 * Create or update the metadata of an Iot hub. The usual pattern to modify a property is to retrieve the IoT hub metadata and security metadata, and then combine them with the modified values in a new body to update the IoT hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {IotHubDescription} requestBody The IoT hub metadata and security metadata.
		 * @return {IotHubDescription} This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		IotHubResource_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: IotHubDescription): Observable<IotHubDescription> {
			return this.http.put<IotHubDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an IoT hub
		 * Delete an IoT hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @return {IotHubDescription} This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		IotHubResource_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<IotHubDescription> {
			return this.http.delete<IotHubDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update an existing IoT Hubs tags.
		 * Update an existing IoT Hub tags. to update other fields use the CreateOrUpdate method
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName Resource group identifier.
		 * @param {string} resourceName Name of iot hub to update.
		 * @param {string} api_version The version of the API.
		 * @param {TagsResource} requestBody Updated tag information to set into the iot hub instance.
		 * @return {IotHubDescription} Iot Hub was successfully updated
		 */
		IotHubResource_Update(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string, requestBody: TagsResource): Observable<IotHubDescription> {
			return this.http.patch<IotHubDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
		 * Get a shared access policy by name from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubKeys/{keyName}/listkeys
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} keyName The name of the shared access policy.
		 * @return {SharedAccessSignatureAuthorizationRule} This is a synchronous operation. The body contains a JSON-serialized shared access policy, including keys, that you can use to access one or more IoT hub endpoints.
		 */
		IotHubResource_GetKeysForKeyName(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, keyName: string): Observable<SharedAccessSignatureAuthorizationRule> {
			return this.http.post<SharedAccessSignatureAuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/IotHubKeys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '/listkeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get the statistics from an IoT hub
		 * Get the statistics from an IoT hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/IotHubStats
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @return {RegistryStatistics} This is a synchronous operation. The body contains JSON-serialized statistics from the identity registry in the IoT hub.
		 */
		IotHubResource_GetStats(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<RegistryStatistics> {
			return this.http.get<RegistryStatistics>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/IotHubStats?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the certificate list.
		 * Returns the list of certificates.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @return {CertificateListDescription} The body contains all the certificate list.
		 */
		Certificates_ListByIotHub(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<CertificateListDescription> {
			return this.http.get<CertificateListDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/certificates?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the certificate.
		 * Returns the certificate.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} certificateName The name of the certificate
		 * @return {CertificateDescription} The body contains the certificate.
		 */
		Certificates_Get(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, certificateName: string): Observable<CertificateDescription> {
			return this.http.get<CertificateDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Upload the certificate to the IoT hub.
		 * Adds new or replaces existing certificate.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} certificateName The name of the certificate
		 * @param {CertificateBodyDescription} requestBody The certificate body.
		 * @return {CertificateDescription} If certificate already exist and update was successful, the operation returns HTTP status code of 201 (OK).
		 */
		Certificates_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, certificateName: string, requestBody: CertificateBodyDescription): Observable<CertificateDescription> {
			return this.http.put<CertificateDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an X509 certificate.
		 * Deletes an existing X509 certificate or does nothing if it does not exist.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} certificateName The name of the certificate
		 * @return {void} Certificate has been deleted.
		 */
		Certificates_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, certificateName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate verification code for proof of possession flow.
		 * Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} certificateName The name of the certificate
		 * @return {CertificateWithNonceDescription} The body contains the certificate.
		 */
		Certificates_GenerateVerificationCode(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, certificateName: string): Observable<CertificateWithNonceDescription> {
			return this.http.post<CertificateWithNonceDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '/generateVerificationCode?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Verify certificate's private key possession.
		 * Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} certificateName The name of the certificate
		 * @param {CertificateVerificationDescription} requestBody The name of the certificate
		 * @return {CertificateDescription} The body contains the certificate.
		 */
		Certificates_Verify(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, certificateName: string, requestBody: CertificateVerificationDescription): Observable<CertificateDescription> {
			return this.http.post<CertificateDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '/verify?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub
		 * Get a list of the consumer groups in the Event Hub-compatible device-to-cloud endpoint in an IoT hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} eventHubEndpointName The name of the Event Hub-compatible endpoint.
		 * @return {EventHubConsumerGroupsListResult} This is a synchronous operation. The body contains a JSON-serialized list of the consumer groups in the Event Hub-compatible endpoint in this IoT hub
		 */
		IotHubResource_ListEventHubConsumerGroups(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, eventHubEndpointName: string): Observable<EventHubConsumerGroupsListResult> {
			return this.http.get<EventHubConsumerGroupsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/eventHubEndpoints/' + (eventHubEndpointName == null ? '' : encodeURIComponent(eventHubEndpointName)) + '/ConsumerGroups?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub
		 * Get a consumer group from the Event Hub-compatible device-to-cloud endpoint for an IoT hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
		 * @param {string} name The name of the consumer group to retrieve.
		 * @return {EventHubConsumerGroupInfo} This is a synchronous operation. The body contains a JSON-serialized consumer group.
		 */
		IotHubResource_GetEventHubConsumerGroup(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string): Observable<EventHubConsumerGroupInfo> {
			return this.http.get<EventHubConsumerGroupInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/eventHubEndpoints/' + (eventHubEndpointName == null ? '' : encodeURIComponent(eventHubEndpointName)) + '/ConsumerGroups/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub
		 * Add a consumer group to an Event Hub-compatible endpoint in an IoT hub.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
		 * @param {string} name The name of the consumer group to add.
		 * @return {EventHubConsumerGroupInfo} This is a synchronous operation.
		 */
		IotHubResource_CreateEventHubConsumerGroup(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string): Observable<EventHubConsumerGroupInfo> {
			return this.http.put<EventHubConsumerGroupInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/eventHubEndpoints/' + (eventHubEndpointName == null ? '' : encodeURIComponent(eventHubEndpointName)) + '/ConsumerGroups/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub
		 * Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/eventHubEndpoints/{eventHubEndpointName}/ConsumerGroups/{name}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} eventHubEndpointName The name of the Event Hub-compatible endpoint in the IoT hub.
		 * @param {string} name The name of the consumer group to delete.
		 * @return {void} This is a synchronous operation.
		 */
		IotHubResource_DeleteEventHubConsumerGroup(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/eventHubEndpoints/' + (eventHubEndpointName == null ? '' : encodeURIComponent(eventHubEndpointName)) + '/ConsumerGroups/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities
		 * Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/exportDevices
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {ExportDevicesRequest} requestBody The parameters that specify the export devices operation.
		 * @return {JobResponse} OK
		 */
		IotHubResource_ExportDevices(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: ExportDevicesRequest): Observable<JobResponse> {
			return this.http.post<JobResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/exportDevices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities
		 * Import, update, or delete device identities in the IoT hub identity registry from a blob. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/importDevices
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {ImportDevicesRequest} requestBody The parameters that specify the import devices operation.
		 * @return {JobResponse} OK
		 */
		IotHubResource_ImportDevices(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: ImportDevicesRequest): Observable<JobResponse> {
			return this.http.post<JobResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/importDevices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry
		 * Get a list of all the jobs in an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @return {JobResponseListResult} This is a synchronous operation. The response contains a JSON-serialized array of all the jobs in the IoT hub.
		 */
		IotHubResource_ListJobs(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<JobResponseListResult> {
			return this.http.get<JobResponseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/jobs?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry
		 * Get the details of a job from an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/jobs/{jobId}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @param {string} jobId The job identifier.
		 * @return {JobResponse} This is a synchronous operation. The response contains a JSON-serialized description of the job in the IoT hub.
		 */
		IotHubResource_GetJob(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, jobId: string): Observable<JobResponse> {
			return this.http.get<JobResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
		 * Get the security metadata for an IoT hub. For more information, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/listkeys
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @return {SharedAccessSignatureAuthorizationRuleListResult} This is a synchronous operation. The body contains a JSON-serialized array of shared access policies, including keys, that you can use to access the IoT hub endpoints.
		 */
		IotHubResource_ListKeys(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<SharedAccessSignatureAuthorizationRuleListResult> {
			return this.http.post<SharedAccessSignatureAuthorizationRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/listkeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get the quota metrics for an IoT hub
		 * Get the quota metrics for an IoT hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/quotaMetrics
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @return {IotHubQuotaMetricInfoListResult} This is a synchronous operation. The response contains a JSON-serialized array of the quota metrics for the IoT hub.
		 */
		IotHubResource_GetQuotaMetrics(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<IotHubQuotaMetricInfoListResult> {
			return this.http.get<IotHubQuotaMetricInfoListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/quotaMetrics?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the list of valid SKUs for an IoT hub
		 * Get the list of valid SKUs for an IoT hub.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/skus
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT hub.
		 * @param {string} resourceName The name of the IoT hub.
		 * @return {IotHubSkuDescriptionListResult} This is a synchronous operation. The body contains a JSON-serialized array of the valid SKUs for this IoT hub.
		 */
		IotHubResource_GetValidSkus(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<IotHubSkuDescriptionListResult> {
			return this.http.get<IotHubSkuDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Devices/IotHubs/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/skus?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

