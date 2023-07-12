import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Request for `BindDeviceToGateway`. */
	export interface BindDeviceToGatewayRequest {

		/**
		 * Required. The device to associate with the specified gateway. The value of
		 * `device_id` can be either the device numeric ID or the user-defined device
		 * identifier.
		 */
		deviceId?: string;

		/**
		 * Required. The value of `gateway_id` can be either the device numeric ID or the
		 * user-defined device identifier.
		 */
		gatewayId?: string;
	}


	/** Response for `BindDeviceToGateway`. */
	export interface BindDeviceToGatewayResponse {
	}


	/** Associates `members` with a `role`. */
	export interface Binding {

		/**
		 * Represents a textual expression in the Common Expression Language (CEL)
		 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
		 * are documented at https://github.com/google/cel-spec.
		 * Example (Comparison):
		 * title: "Summary size limit"
		 * description: "Determines if a summary is less than 100 chars"
		 * expression: "document.summary.size() < 100"
		 * Example (Equality):
		 * title: "Requestor is owner"
		 * description: "Determines if requestor is the document owner"
		 * expression: "document.owner == request.auth.claims.email"
		 * Example (Logic):
		 * title: "Public documents"
		 * description: "Determine whether the document should be publicly visible"
		 * expression: "document.type != 'private' && document.type != 'internal'"
		 * Example (Data Manipulation):
		 * title: "Notification string"
		 * description: "Create a notification string with a timestamp."
		 * expression: "'New message received at ' + string(document.create_time)"
		 * The exact variables and functions that may be referenced within an expression
		 * are determined by the service that evaluates it. See the service
		 * documentation for additional information.
		 */
		condition?: Expr;

		/**
		 * Specifies the identities requesting access for a Cloud Platform resource.
		 * `members` can have the following values:
		 * * `allUsers`: A special identifier that represents anyone who is
		 * on the internet; with or without a Google account.
		 * * `allAuthenticatedUsers`: A special identifier that represents anyone
		 * who is authenticated with a Google account or a service account.
		 * * `user:{emailid}`: An email address that represents a specific Google
		 * account. For example, `alice@example.com` .
		 * * `serviceAccount:{emailid}`: An email address that represents a service
		 * account. For example, `my-other-app@appspot.gserviceaccount.com`.
		 * * `group:{emailid}`: An email address that represents a Google group.
		 * For example, `admins@example.com`.
		 * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a user that has been recently deleted. For
		 * example, `alice@example.com?uid=123456789012345678901`. If the user is
		 * recovered, this value reverts to `user:{emailid}` and the recovered user
		 * retains the role in the binding.
		 * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
		 * unique identifier) representing a service account that has been recently
		 * deleted. For example,
		 * `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
		 * If the service account is undeleted, this value reverts to
		 * `serviceAccount:{emailid}` and the undeleted service account retains the
		 * role in the binding.
		 * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
		 * identifier) representing a Google group that has been recently
		 * deleted. For example, `admins@example.com?uid=123456789012345678901`. If
		 * the group is recovered, this value reverts to `group:{emailid}` and the
		 * recovered group retains the role in the binding.
		 * * `domain:{domain}`: The G Suite domain (primary) that represents all the
		 * users of that domain. For example, `google.com` or `example.com`.
		 */
		members?: Array<string>;

		/**
		 * Role that is assigned to `members`.
		 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
		 */
		role?: string;
	}


	/**
	 * Represents a textual expression in the Common Expression Language (CEL)
	 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
	 * are documented at https://github.com/google/cel-spec.
	 * Example (Comparison):
	 *     title: "Summary size limit"
	 *     description: "Determines if a summary is less than 100 chars"
	 *     expression: "document.summary.size() < 100"
	 * Example (Equality):
	 *     title: "Requestor is owner"
	 *     description: "Determines if requestor is the document owner"
	 *     expression: "document.owner == request.auth.claims.email"
	 * Example (Logic):
	 *     title: "Public documents"
	 *     description: "Determine whether the document should be publicly visible"
	 *     expression: "document.type != 'private' && document.type != 'internal'"
	 * Example (Data Manipulation):
	 *     title: "Notification string"
	 *     description: "Create a notification string with a timestamp."
	 *     expression: "'New message received at ' + string(document.create_time)"
	 * The exact variables and functions that may be referenced within an expression
	 * are determined by the service that evaluates it. See the service
	 * documentation for additional information.
	 */
	export interface Expr {

		/**
		 * Optional. Description of the expression. This is a longer text which
		 * describes the expression, e.g. when hovered over it in a UI.
		 */
		description?: string;

		/**
		 * Textual representation of an expression in Common Expression Language
		 * syntax.
		 */
		expression?: string;

		/**
		 * Optional. String indicating the location of the expression for error
		 * reporting, e.g. a file name and a position in the file.
		 */
		location?: string;

		/**
		 * Optional. Title for the expression, i.e. a short string describing
		 * its purpose. This can be used e.g. in UIs which allow to enter the
		 * expression.
		 */
		title?: string;
	}


	/** The device resource. */
	export interface Device {

		/**
		 * If a device is blocked, connections or requests from this device will fail.
		 * Can be used to temporarily prevent the device from connecting if, for
		 * example, the sensor is generating bad data and needs maintenance.
		 */
		blocked?: boolean;

		/** The device configuration. Eventually delivered to devices. */
		config?: DeviceConfig;

		/**
		 * The credentials used to authenticate this device. To allow credential
		 * rotation without interruption, multiple device credentials can be bound to
		 * this device. No more than 3 credentials can be bound to a single device at
		 * a time. When new credentials are added to a device, they are verified
		 * against the registry credentials. For details, see the description of the
		 * `DeviceRegistry.credentials` field.
		 */
		credentials?: Array<DeviceCredential>;

		/** Gateway-related configuration and state. */
		gatewayConfig?: GatewayConfig;

		/**
		 * The user-defined device identifier. The device ID must be unique
		 * within a device registry.
		 */
		id?: string;

		/**
		 * [Output only] The last time a cloud-to-device config version acknowledgment
		 * was received from the device. This field is only for configurations
		 * sent through MQTT.
		 */
		lastConfigAckTime?: string;

		/**
		 * [Output only] The last time a cloud-to-device config version was sent to
		 * the device.
		 */
		lastConfigSendTime?: string;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		lastErrorStatus?: Status;

		/**
		 * [Output only] The time the most recent error occurred, such as a failure to
		 * publish to Cloud Pub/Sub. This field is the timestamp of
		 * 'last_error_status'.
		 */
		lastErrorTime?: string;

		/**
		 * [Output only] The last time a telemetry event was received. Timestamps are
		 * periodically collected and written to storage; they may be stale by a few
		 * minutes.
		 */
		lastEventTime?: string;

		/**
		 * [Output only] The last time an MQTT `PINGREQ` was received. This field
		 * applies only to devices connecting through MQTT. MQTT clients usually only
		 * send `PINGREQ` messages if the connection is idle, and no other messages
		 * have been sent. Timestamps are periodically collected and written to
		 * storage; they may be stale by a few minutes.
		 */
		lastHeartbeatTime?: string;

		/**
		 * [Output only] The last time a state event was received. Timestamps are
		 * periodically collected and written to storage; they may be stale by a few
		 * minutes.
		 */
		lastStateTime?: string;

		/**
		 * **Beta Feature**
		 * The logging verbosity for device activity. If unspecified,
		 * DeviceRegistry.log_level will be used.
		 */
		logLevel?: DeviceLogLevel;

		/**
		 * The metadata key-value pairs assigned to the device. This metadata is not
		 * interpreted or indexed by Cloud IoT Core. It can be used to add contextual
		 * information for the device.
		 * Keys must conform to the regular expression a-zA-Z+ and
		 * be less than 128 bytes in length.
		 * Values are free-form strings. Each value must be less than or equal to 32
		 * KB in size.
		 * The total size of all keys and values must be less than 256 KB, and the
		 * maximum number of key-value pairs is 500.
		 */
		metadata?: {[id: string]: string };

		/**
		 * The resource path name. For example,
		 * `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
		 * `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
		 * When `name` is populated as a response from the service, it always ends
		 * in the device numeric ID.
		 */
		name?: string;

		/**
		 * [Output only] A server-defined unique numeric ID for the device. This is a
		 * more compact way to identify devices, and it is globally unique.
		 */
		numId?: string;

		/** The device state, as reported by the device. */
		state?: DeviceState;
	}


	/** The device configuration. Eventually delivered to devices. */
	export interface DeviceConfig {

		/** The device configuration data. */
		binaryData?: string;

		/**
		 * [Output only] The time at which this configuration version was updated in
		 * Cloud IoT Core. This timestamp is set by the server.
		 */
		cloudUpdateTime?: string;

		/**
		 * [Output only] The time at which Cloud IoT Core received the
		 * acknowledgment from the device, indicating that the device has received
		 * this configuration version. If this field is not present, the device has
		 * not yet acknowledged that it received this version. Note that when
		 * the config was sent to the device, many config versions may have been
		 * available in Cloud IoT Core while the device was disconnected, and on
		 * connection, only the latest version is sent to the device. Some
		 * versions may never be sent to the device, and therefore are never
		 * acknowledged. This timestamp is set by Cloud IoT Core.
		 */
		deviceAckTime?: string;

		/**
		 * [Output only] The version of this update. The version number is assigned by
		 * the server, and is always greater than 0 after device creation. The
		 * version must be 0 on the `CreateDevice` request if a `config` is
		 * specified; the response of `CreateDevice` will always have a value of 1.
		 */
		version?: string;
	}


	/** A server-stored device credential used for authentication. */
	export interface DeviceCredential {

		/**
		 * [Optional] The time at which this credential becomes invalid. This
		 * credential will be ignored for new client authentication requests after
		 * this timestamp; however, it will not be automatically deleted.
		 */
		expirationTime?: string;

		/** A public key format and data. */
		publicKey?: PublicKeyCredential;
	}


	/** A public key format and data. */
	export interface PublicKeyCredential {

		/** The format of the key. */
		format?: PublicKeyCredentialFormat;

		/** The key data. */
		key?: string;
	}

	export enum PublicKeyCredentialFormat { UNSPECIFIED_PUBLIC_KEY_FORMAT = 0, RSA_PEM = 1, RSA_X509_PEM = 2, ES256_PEM = 3, ES256_X509_PEM = 4 }


	/** Gateway-related configuration and state. */
	export interface GatewayConfig {

		/**
		 * Indicates how to authorize and/or authenticate devices to access the
		 * gateway.
		 */
		gatewayAuthMethod?: GatewayConfigGatewayAuthMethod;

		/** Indicates whether the device is a gateway. */
		gatewayType?: GatewayConfigGatewayType;

		/** [Output only] The ID of the gateway the device accessed most recently. */
		lastAccessedGatewayId?: string;

		/**
		 * [Output only] The most recent time at which the device accessed the gateway
		 * specified in `last_accessed_gateway`.
		 */
		lastAccessedGatewayTime?: string;
	}

	export enum GatewayConfigGatewayAuthMethod { GATEWAY_AUTH_METHOD_UNSPECIFIED = 0, ASSOCIATION_ONLY = 1, DEVICE_AUTH_TOKEN_ONLY = 2, ASSOCIATION_AND_DEVICE_AUTH_TOKEN = 3 }

	export enum GatewayConfigGatewayType { GATEWAY_TYPE_UNSPECIFIED = 0, GATEWAY = 1, NON_GATEWAY = 2 }


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}

	export enum DeviceLogLevel { LOG_LEVEL_UNSPECIFIED = 0, NONE = 1, ERROR = 2, INFO = 3, DEBUG = 4 }


	/** The device state, as reported by the device. */
	export interface DeviceState {

		/** The device state data. */
		binaryData?: string;

		/**
		 * [Output only] The time at which this state version was updated in Cloud
		 * IoT Core.
		 */
		updateTime?: string;
	}


	/** A container for a group of devices. */
	export interface DeviceRegistry {

		/**
		 * The credentials used to verify the device credentials. No more than 10
		 * credentials can be bound to a single registry at a time. The verification
		 * process occurs at the time of device creation or update. If this field is
		 * empty, no verification is performed. Otherwise, the credentials of a newly
		 * created device or added credentials of an updated device should be signed
		 * with one of these registry credentials.
		 * Note, however, that existing devices will never be affected by
		 * modifications to this list of credentials: after a device has been
		 * successfully created in a registry, it should be able to connect even if
		 * its registry credentials are revoked, deleted, or modified.
		 */
		credentials?: Array<RegistryCredential>;

		/**
		 * The configuration for notification of telemetry events received from the
		 * device. All telemetry events that were successfully published by the
		 * device and acknowledged by Cloud IoT Core are guaranteed to be
		 * delivered to Cloud Pub/Sub. If multiple configurations match a message,
		 * only the first matching configuration is used. If you try to publish a
		 * device telemetry event using MQTT without specifying a Cloud Pub/Sub topic
		 * for the device's registry, the connection closes automatically. If you try
		 * to do so using an HTTP connection, an error is returned. Up to 10
		 * configurations may be provided.
		 */
		eventNotificationConfigs?: Array<EventNotificationConfig>;

		/** The configuration of the HTTP bridge for a device registry. */
		httpConfig?: HttpConfig;

		/** The identifier of this device registry. For example, `myRegistry`. */
		id?: string;

		/**
		 * **Beta Feature**
		 * The default logging verbosity for activity from devices in this registry.
		 * The verbosity level can be overridden by Device.log_level.
		 */
		logLevel?: DeviceLogLevel;

		/** The configuration of MQTT for a device registry. */
		mqttConfig?: MqttConfig;

		/**
		 * The resource path name. For example,
		 * `projects/example-project/locations/us-central1/registries/my-registry`.
		 */
		name?: string;

		/** The configuration for notification of new states received from the device. */
		stateNotificationConfig?: StateNotificationConfig;
	}


	/** A server-stored registry credential used to validate device credentials. */
	export interface RegistryCredential {

		/** A public key certificate format and data. */
		publicKeyCertificate?: PublicKeyCertificate;
	}


	/** A public key certificate format and data. */
	export interface PublicKeyCertificate {

		/** The certificate data. */
		certificate?: string;

		/** The certificate format. */
		format?: PublicKeyCertificateFormat;

		/** Details of an X.509 certificate. For informational purposes only. */
		x509Details?: X509CertificateDetails;
	}

	export enum PublicKeyCertificateFormat { UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT = 0, X509_CERTIFICATE_PEM = 1 }


	/** Details of an X.509 certificate. For informational purposes only. */
	export interface X509CertificateDetails {

		/** The time the certificate becomes invalid. */
		expiryTime?: string;

		/** The entity that signed the certificate. */
		issuer?: string;

		/** The type of public key in the certificate. */
		publicKeyType?: string;

		/** The algorithm used to sign the certificate. */
		signatureAlgorithm?: string;

		/** The time the certificate becomes valid. */
		startTime?: string;

		/** The entity the certificate and public key belong to. */
		subject?: string;
	}


	/** The configuration for forwarding telemetry events. */
	export interface EventNotificationConfig {

		/**
		 * A Cloud Pub/Sub topic name. For example,
		 * `projects/myProject/topics/deviceEvents`.
		 */
		pubsubTopicName?: string;

		/**
		 * If the subfolder name matches this string exactly, this configuration will
		 * be used. The string must not include the leading '/' character. If empty,
		 * all strings are matched. This field is used only for telemetry events;
		 * subfolders are not supported for state changes.
		 */
		subfolderMatches?: string;
	}


	/** The configuration of the HTTP bridge for a device registry. */
	export interface HttpConfig {

		/**
		 * If enabled, allows devices to use DeviceService via the HTTP protocol.
		 * Otherwise, any requests to DeviceService will fail for this registry.
		 */
		httpEnabledState?: HttpConfigHttpEnabledState;
	}

	export enum HttpConfigHttpEnabledState { HTTP_STATE_UNSPECIFIED = 0, HTTP_ENABLED = 1, HTTP_DISABLED = 2 }


	/** The configuration of MQTT for a device registry. */
	export interface MqttConfig {

		/**
		 * If enabled, allows connections using the MQTT protocol. Otherwise, MQTT
		 * connections to this registry will fail.
		 */
		mqttEnabledState?: MqttConfigMqttEnabledState;
	}

	export enum MqttConfigMqttEnabledState { MQTT_STATE_UNSPECIFIED = 0, MQTT_ENABLED = 1, MQTT_DISABLED = 2 }


	/** The configuration for notification of new states received from the device. */
	export interface StateNotificationConfig {

		/**
		 * A Cloud Pub/Sub topic name. For example,
		 * `projects/myProject/topics/deviceEvents`.
		 */
		pubsubTopicName?: string;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/**
		 * Optional. The policy format version to be returned.
		 * Valid values are 0, 1, and 3. Requests specifying an invalid value will be
		 * rejected.
		 * Requests for policies with any conditional bindings must specify version 3.
		 * Policies without any conditional bindings may specify any valid value or
		 * leave the field unset.
		 */
		requestedPolicyVersion?: number;
	}


	/** Response for `ListDeviceConfigVersions`. */
	export interface ListDeviceConfigVersionsResponse {

		/**
		 * The device configuration for the last few versions. Versions are listed
		 * in decreasing order, starting from the most recent one.
		 */
		deviceConfigs?: Array<DeviceConfig>;
	}


	/** Response for `ListDeviceRegistries`. */
	export interface ListDeviceRegistriesResponse {

		/** The registries that matched the query. */
		deviceRegistries?: Array<DeviceRegistry>;

		/**
		 * If not empty, indicates that there may be more registries that match the
		 * request; this value should be passed in a new
		 * `ListDeviceRegistriesRequest`.
		 */
		nextPageToken?: string;
	}


	/** Response for `ListDeviceStates`. */
	export interface ListDeviceStatesResponse {

		/**
		 * The last few device states. States are listed in descending order of server
		 * update time, starting from the most recent one.
		 */
		deviceStates?: Array<DeviceState>;
	}


	/** Response for `ListDevices`. */
	export interface ListDevicesResponse {

		/** The devices that match the request. */
		devices?: Array<Device>;

		/**
		 * If not empty, indicates that there may be more devices that match the
		 * request; this value should be passed in a new `ListDevicesRequest`.
		 */
		nextPageToken?: string;
	}


	/** Request for `ModifyCloudToDeviceConfig`. */
	export interface ModifyCloudToDeviceConfigRequest {

		/** Required. The configuration data for the device. */
		binaryData?: string;

		/**
		 * The version number to update. If this value is zero, it will not check the
		 * version number of the server and will always update the current version;
		 * otherwise, this update will fail if the version number found on the server
		 * does not match this version number. This is used to support multiple
		 * simultaneous updates without losing data.
		 */
		versionToUpdate?: string;
	}


	/**
	 * An Identity and Access Management (IAM) policy, which specifies access
	 * controls for Google Cloud resources.
	 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
	 * `members` to a single `role`. Members can be user accounts, service accounts,
	 * Google groups, and domains (such as G Suite). A `role` is a named list of
	 * permissions; each `role` can be an IAM predefined role or a user-created
	 * custom role.
	 * Optionally, a `binding` can specify a `condition`, which is a logical
	 * expression that allows access to a resource only if the expression evaluates
	 * to `true`. A condition can add constraints based on attributes of the
	 * request, the resource, or both.
	 * **JSON example:**
	 *     {
	 *       "bindings": [
	 *         {
	 *           "role": "roles/resourcemanager.organizationAdmin",
	 *           "members": [
	 *             "user:mike@example.com",
	 *             "group:admins@example.com",
	 *             "domain:google.com",
	 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
	 *           ]
	 *         },
	 *         {
	 *           "role": "roles/resourcemanager.organizationViewer",
	 *           "members": ["user:eve@example.com"],
	 *           "condition": {
	 *             "title": "expirable access",
	 *             "description": "Does not grant access after Sep 2020",
	 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
	 *           }
	 *         }
	 *       ],
	 *       "etag": "BwWWja0YfJA=",
	 *       "version": 3
	 *     }
	 * **YAML example:**
	 *     bindings:
	 *     - members:
	 *       - user:mike@example.com
	 *       - group:admins@example.com
	 *       - domain:google.com
	 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
	 *       role: roles/resourcemanager.organizationAdmin
	 *     - members:
	 *       - user:eve@example.com
	 *       role: roles/resourcemanager.organizationViewer
	 *       condition:
	 *         title: expirable access
	 *         description: Does not grant access after Sep 2020
	 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
	 *     - etag: BwWWja0YfJA=
	 *     - version: 3
	 * For a description of IAM and its features, see the
	 * [IAM documentation](https://cloud.google.com/iam/docs/).
	 */
	export interface Policy {

		/**
		 * Associates a list of `members` to a `role`. Optionally, may specify a
		 * `condition` that determines how and when the `bindings` are applied. Each
		 * of the `bindings` must contain at least one member.
		 */
		bindings?: Array<Binding>;

		/**
		 * `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of a policy from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform policy updates in order to avoid race
		 * conditions: An `etag` is returned in the response to `getIamPolicy`, and
		 * systems are expected to put that etag in the request to `setIamPolicy` to
		 * ensure that their change will be applied to the same version of the policy.
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 */
		etag?: string;

		/**
		 * Specifies the format of the policy.
		 * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
		 * are rejected.
		 * Any operation that affects conditional role bindings must specify version
		 * `3`. This requirement applies to the following operations:
		 * * Getting a policy that includes a conditional role binding
		 * * Adding a conditional role binding to a policy
		 * * Changing a conditional role binding in a policy
		 * * Removing any role binding, with or without a condition, from a policy
		 * that includes conditions
		 * **Important:** If you use IAM Conditions, you must include the `etag` field
		 * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
		 * you to overwrite a version `3` policy with a version `1` policy, and all of
		 * the conditions in the version `3` policy are lost.
		 * If a policy does not include any conditions, operations on that policy may
		 * specify any valid version or leave the field unset.
		 */
		version?: number;
	}


	/** Request for `SendCommandToDevice`. */
	export interface SendCommandToDeviceRequest {

		/** Required. The command data to send to the device. */
		binaryData?: string;

		/**
		 * Optional subfolder for the command. If empty, the command will be delivered
		 * to the /devices/{device-id}/commands topic, otherwise it will be delivered
		 * to the /devices/{device-id}/commands/{subfolder} topic. Multi-level
		 * subfolders are allowed. This field must not have more than 256 characters,
		 * and must not contain any MQTT wildcards ("+" or "#") or null characters.
		 */
		subfolder?: string;
	}


	/** Response for `SendCommandToDevice`. */
	export interface SendCommandToDeviceResponse {
	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/**
		 * An Identity and Access Management (IAM) policy, which specifies access
		 * controls for Google Cloud resources.
		 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
		 * `members` to a single `role`. Members can be user accounts, service accounts,
		 * Google groups, and domains (such as G Suite). A `role` is a named list of
		 * permissions; each `role` can be an IAM predefined role or a user-created
		 * custom role.
		 * Optionally, a `binding` can specify a `condition`, which is a logical
		 * expression that allows access to a resource only if the expression evaluates
		 * to `true`. A condition can add constraints based on attributes of the
		 * request, the resource, or both.
		 * **JSON example:**
		 * {
		 * "bindings": [
		 * {
		 * "role": "roles/resourcemanager.organizationAdmin",
		 * "members": [
		 * "user:mike@example.com",
		 * "group:admins@example.com",
		 * "domain:google.com",
		 * "serviceAccount:my-project-id@appspot.gserviceaccount.com"
		 * ]
		 * },
		 * {
		 * "role": "roles/resourcemanager.organizationViewer",
		 * "members": ["user:eve@example.com"],
		 * "condition": {
		 * "title": "expirable access",
		 * "description": "Does not grant access after Sep 2020",
		 * "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
		 * }
		 * }
		 * ],
		 * "etag": "BwWWja0YfJA=",
		 * "version": 3
		 * }
		 * **YAML example:**
		 * bindings:
		 * - members:
		 * - user:mike@example.com
		 * - group:admins@example.com
		 * - domain:google.com
		 * - serviceAccount:my-project-id@appspot.gserviceaccount.com
		 * role: roles/resourcemanager.organizationAdmin
		 * - members:
		 * - user:eve@example.com
		 * role: roles/resourcemanager.organizationViewer
		 * condition:
		 * title: expirable access
		 * description: Does not grant access after Sep 2020
		 * expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
		 * - etag: BwWWja0YfJA=
		 * - version: 3
		 * For a description of IAM and its features, see the
		 * [IAM documentation](https://cloud.google.com/iam/docs/).
		 */
		policy?: Policy;
	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/**
		 * The set of permissions to check for the `resource`. Permissions with
		 * wildcards (such as '*' or 'storage.*') are not allowed. For more
		 * information see
		 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
		 */
		permissions?: Array<string>;
	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/**
		 * A subset of `TestPermissionsRequest.permissions` that the caller is
		 * allowed.
		 */
		permissions?: Array<string>;
	}


	/** Request for `UnbindDeviceFromGateway`. */
	export interface UnbindDeviceFromGatewayRequest {

		/**
		 * Required. The device to disassociate from the specified gateway. The value of
		 * `device_id` can be either the device numeric ID or the user-defined device
		 * identifier.
		 */
		deviceId?: string;

		/**
		 * Required. The value of `gateway_id` can be either the device numeric ID or the
		 * user-defined device identifier.
		 */
		gatewayId?: string;
	}


	/** Response for `UnbindDeviceFromGateway`. */
	export interface UnbindDeviceFromGatewayResponse {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a device.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the device. For example,
		 * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
		 * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_devices_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets details about a device.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the device. For example,
		 * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
		 * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
		 * @param {string} fieldMask The fields of the `Device` resource to be returned in the response. If the
		 * field mask is unset or empty, all fields are returned.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_devices_get(name: string, fieldMask: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a device.
		 * Patch v1/{name}
		 * @param {string} name The resource path name. For example,
		 * `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
		 * `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
		 * When `name` is populated as a response from the service, it always ends
		 * in the device numeric ID.
		 * @param {string} updateMask Required. Only updates the `device` fields indicated by this mask.
		 * The field mask must not be empty, and it must not contain fields that
		 * are immutable or only set by the server.
		 * Mutable top-level fields: `credentials`, `blocked`, and `metadata`
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_devices_patch(name: string, updateMask: string, requestBody: Device): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the last few versions of the device configuration in descending
		 * order (i.e.: newest first).
		 * Get v1/{name}/configVersions
		 * @param {string} name Required. The name of the device. For example,
		 * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
		 * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
		 * @param {number} numVersions The number of versions to list. Versions are listed in decreasing order of
		 * the version number. The maximum number of versions retained is 10. If this
		 * value is zero, it will return all the versions available.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_devices_configVersions_list(name: string, numVersions: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/configVersions&numVersions=' + numVersions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the last few versions of the device state in descending order (i.e.:
		 * newest first).
		 * Get v1/{name}/states
		 * @param {string} name Required. The name of the device. For example,
		 * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
		 * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
		 * @param {number} numStates The number of states to list. States are listed in descending order of
		 * update time. The maximum number of states retained is 10. If this
		 * value is zero, it will return all the states available.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_devices_states_list(name: string, numStates: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/states&numStates=' + numStates, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the configuration for the device, which is eventually sent from
		 * the Cloud IoT Core servers. Returns the modified configuration version and
		 * its metadata.
		 * Post v1/{name}:modifyCloudToDeviceConfig
		 * @param {string} name Required. The name of the device. For example,
		 * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
		 * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_devices_modifyCloudToDeviceConfig(name: string, requestBody: ModifyCloudToDeviceConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':modifyCloudToDeviceConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends a command to the specified device. In order for a device to be able
		 * to receive commands, it must:
		 * 1) be connected to Cloud IoT Core using the MQTT protocol, and
		 * 2) be subscribed to the group of MQTT topics specified by
		 * /devices/{device-id}/commands/#. This subscription will receive commands
		 * at the top-level topic /devices/{device-id}/commands as well as commands
		 * for subfolders, like /devices/{device-id}/commands/subfolder.
		 * Note that subscribing to specific subfolders is not supported.
		 * If the command could not be delivered to the device, this method will
		 * return an error; in particular, if the device is not subscribed, this
		 * method will return FAILED_PRECONDITION. Otherwise, this method will
		 * return OK. If the subscription is QoS 1, at least once delivery will be
		 * guaranteed; for QoS 0, no acknowledgment will be expected from the device.
		 * Post v1/{name}:sendCommandToDevice
		 * @param {string} name Required. The name of the device. For example,
		 * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
		 * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_devices_sendCommandToDevice(name: string, requestBody: SendCommandToDeviceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':sendCommandToDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List devices in a device registry.
		 * Get v1/{parent}/devices
		 * @param {string} parent Required. The device registry path. Required. For example,
		 * `projects/my-project/locations/us-central1/registries/my-registry`.
		 * @param {Array<string>} deviceIds A list of device string IDs. For example, `['device0', 'device12']`.
		 * If empty, this field is ignored. Maximum IDs: 10,000
		 * @param {Array<string>} deviceNumIds A list of device numeric IDs. If empty, this field is ignored. Maximum
		 * IDs: 10,000.
		 * @param {string} fieldMask The fields of the `Device` resource to be returned in the response. The
		 * fields `id` and `num_id` are always returned, along with any
		 * other fields specified.
		 * @param {string} gatewayListOptions_associationsDeviceId If set, returns only the gateways with which the specified device is
		 * associated. The device ID can be numeric (`num_id`) or the user-defined
		 * string (`id`). For example, if `456` is specified, returns only the
		 * gateways to which the device with `num_id` 456 is bound.
		 * @param {string} gatewayListOptions_associationsGatewayId If set, only devices associated with the specified gateway are returned.
		 * The gateway ID can be numeric (`num_id`) or the user-defined string
		 * (`id`). For example, if `123` is specified, only devices bound to the
		 * gateway with `num_id` 123 are returned.
		 * @param {GatewayConfigGatewayType} gatewayListOptions_gatewayType If `GATEWAY` is specified, only gateways are returned. If `NON_GATEWAY`
		 * is specified, only non-gateway devices are returned. If
		 * `GATEWAY_TYPE_UNSPECIFIED` is specified, all devices are returned.
		 * @param {number} pageSize The maximum number of devices to return in the response. If this value
		 * is zero, the service will select a default size. A call may return fewer
		 * objects than requested. A non-empty `next_page_token` in the response
		 * indicates that more data is available.
		 * @param {string} pageToken The value returned by the last `ListDevicesResponse`; indicates
		 * that this is a continuation of a prior `ListDevices` call and
		 * the system should return the next page of data.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_devices_list(parent: string, deviceIds: Array<string>, deviceNumIds: Array<string>, fieldMask: string, gatewayListOptions_associationsDeviceId: string, gatewayListOptions_associationsGatewayId: string, gatewayListOptions_gatewayType: GatewayConfigGatewayType, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices&' + deviceIds.map(z => `deviceIds=${encodeURIComponent(z)}`).join('&') + '&' + deviceNumIds.map(z => `deviceNumIds=${encodeURIComponent(z)}`).join('&') + '&fieldMask=' + (fieldMask == null ? '' : encodeURIComponent(fieldMask)) + '&gatewayListOptions_associationsDeviceId=' + (gatewayListOptions_associationsDeviceId == null ? '' : encodeURIComponent(gatewayListOptions_associationsDeviceId)) + '&gatewayListOptions_associationsGatewayId=' + (gatewayListOptions_associationsGatewayId == null ? '' : encodeURIComponent(gatewayListOptions_associationsGatewayId)) + '&gatewayListOptions_gatewayType=' + gatewayListOptions_gatewayType + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a device in a device registry.
		 * Post v1/{parent}/devices
		 * @param {string} parent Required. The name of the device registry where this device should be created.
		 * For example,
		 * `projects/example-project/locations/us-central1/registries/my-registry`.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_devices_create(parent: string, requestBody: Device): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists device registries.
		 * Get v1/{parent}/registries
		 * @param {string} parent Required. The project and cloud region path. For example,
		 * `projects/example-project/locations/us-central1`.
		 * @param {number} pageSize The maximum number of registries to return in the response. If this value
		 * is zero, the service will select a default size. A call may return fewer
		 * objects than requested. A non-empty `next_page_token` in the response
		 * indicates that more data is available.
		 * @param {string} pageToken The value returned by the last `ListDeviceRegistriesResponse`; indicates
		 * that this is a continuation of a prior `ListDeviceRegistries` call and
		 * the system should return the next page of data.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/registries&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a device registry that contains devices.
		 * Post v1/{parent}/registries
		 * @param {string} parent Required. The project and cloud region where this device registry must be created.
		 * For example, `projects/example-project/locations/us-central1`.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_create(parent: string, requestBody: DeviceRegistry): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/registries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates the device with the gateway.
		 * Post v1/{parent}:bindDeviceToGateway
		 * @param {string} parent Required. The name of the registry. For example,
		 * `projects/example-project/locations/us-central1/registries/my-registry`.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_bindDeviceToGateway(parent: string, requestBody: BindDeviceToGatewayRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':bindDeviceToGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the association between the device and the gateway.
		 * Post v1/{parent}:unbindDeviceFromGateway
		 * @param {string} parent Required. The name of the registry. For example,
		 * `projects/example-project/locations/us-central1/registries/my-registry`.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_unbindDeviceFromGateway(parent: string, requestBody: UnbindDeviceFromGatewayRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':unbindDeviceFromGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the access control policy for a resource.
		 * Returns an empty policy if the resource exists and does not have a policy
		 * set.
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_groups_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any
		 * existing policy.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_groups_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns permissions that a caller has on the specified resource.
		 * If the resource does not exist, this will return an empty set of
		 * permissions, not a NOT_FOUND error.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested.
		 * See the operation documentation for the appropriate value for this field.
		 * @return {void} Successful response
		 */
		Cloudiot_projects_locations_registries_groups_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

