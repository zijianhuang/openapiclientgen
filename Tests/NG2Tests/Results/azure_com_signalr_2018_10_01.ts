import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specifications of the Dimension of metrics. */
	export interface Dimension {

		/** Localized friendly display name of the dimension. */
		displayName?: string | null;

		/** Name of the dimension as it appears in MDM. */
		internalName?: string | null;

		/** The public facing name of the dimension. */
		name?: string | null;

		/** A Boolean flag indicating whether this dimension should be included for the shoebox export scenario. */
		toBeExportedForShoebox?: boolean | null;
	}

	/** Specifications of the Dimension of metrics. */
	export interface DimensionFormProperties {

		/** Localized friendly display name of the dimension. */
		displayName: FormControl<string | null | undefined>,

		/** Name of the dimension as it appears in MDM. */
		internalName: FormControl<string | null | undefined>,

		/** The public facing name of the dimension. */
		name: FormControl<string | null | undefined>,

		/** A Boolean flag indicating whether this dimension should be included for the shoebox export scenario. */
		toBeExportedForShoebox: FormControl<boolean | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			internalName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			toBeExportedForShoebox: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about an API error. */
	export interface ErrorResponse {

		/** Describes a particular API error with an error code and a message. */
		error?: ErrorResponseBody;
	}

	/** Contains information about an API error. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** Describes a particular API error with an error code and a message. */
	export interface ErrorResponseBody {

		/**
		 * An error code that describes the error condition more precisely than an HTTP status code.
		 * Can be used to programmatically handle specific error cases.
		 * Required
		 */
		code: string;

		/** Contains nested errors that are related to this error. */
		details?: Array<ErrorResponseBody>;

		/**
		 * A message that describes the error in detail and provides debugging information.
		 * Required
		 */
		message: string;

		/** The target of the particular error (for example, the name of the property in error). */
		target?: string | null;
	}

	/** Describes a particular API error with an error code and a message. */
	export interface ErrorResponseBodyFormProperties {

		/**
		 * An error code that describes the error condition more precisely than an HTTP status code.
		 * Can be used to programmatically handle specific error cases.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * A message that describes the error in detail and provides debugging information.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error (for example, the name of the property in error). */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseBodyFormGroup() {
		return new FormGroup<ErrorResponseBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifications of the Logs for Azure Monitoring. */
	export interface LogSpecification {

		/** Localized friendly display name of the log. */
		displayName?: string | null;

		/** Name of the log. */
		name?: string | null;
	}

	/** Specifications of the Logs for Azure Monitoring. */
	export interface LogSpecificationFormProperties {

		/** Localized friendly display name of the log. */
		displayName: FormControl<string | null | undefined>,

		/** Name of the log. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogSpecificationFormGroup() {
		return new FormGroup<LogSpecificationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifications of the Metrics for Azure Monitoring. */
	export interface MetricSpecification {

		/** Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count. */
		aggregationType?: string | null;

		/** The name of the metric category that the metric belongs to. A metric can only belong to a single category. */
		category?: string | null;

		/** The dimensions of the metrics. */
		dimensions?: Array<Dimension>;

		/** Localized friendly description of the metric. */
		displayDescription?: string | null;

		/** Localized friendly display name of the metric. */
		displayName?: string | null;

		/**
		 * Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published.
		 * Ex. a metric that returns the number of times a particular error code was emitted. The error code may not appear
		 * often, instead of the RP publishing 0, Shoebox can auto fill in 0s for time periods where nothing was emitted.
		 */
		fillGapWithZero?: string | null;

		/** Name of the metric. */
		name?: string | null;

		/** The unit that makes sense for the metric. */
		unit?: string | null;
	}

	/** Specifications of the Metrics for Azure Monitoring. */
	export interface MetricSpecificationFormProperties {

		/** Only provide one value for this field. Valid values: Average, Minimum, Maximum, Total, Count. */
		aggregationType: FormControl<string | null | undefined>,

		/** The name of the metric category that the metric belongs to. A metric can only belong to a single category. */
		category: FormControl<string | null | undefined>,

		/** Localized friendly description of the metric. */
		displayDescription: FormControl<string | null | undefined>,

		/** Localized friendly display name of the metric. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Optional. If set to true, then zero will be returned for time duration where no metric is emitted/published.
		 * Ex. a metric that returns the number of times a particular error code was emitted. The error code may not appear
		 * often, instead of the RP publishing 0, Shoebox can auto fill in 0s for time periods where nothing was emitted.
		 */
		fillGapWithZero: FormControl<string | null | undefined>,

		/** Name of the metric. */
		name: FormControl<string | null | undefined>,

		/** The unit that makes sense for the metric. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateMetricSpecificationFormGroup() {
		return new FormGroup<MetricSpecificationFormProperties>({
			aggregationType: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			fillGapWithZero: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to check name availability. It contains a flag and possible reason of failure. */
	export interface NameAvailability {

		/** The message of the operation. */
		message?: string | null;

		/** Indicates whether the name is available or not. */
		nameAvailable?: boolean | null;

		/** The reason of the availability. Required if name is not available. */
		reason?: string | null;
	}

	/** Result of the request to check name availability. It contains a flag and possible reason of failure. */
	export interface NameAvailabilityFormProperties {

		/** The message of the operation. */
		message: FormControl<string | null | undefined>,

		/** Indicates whether the name is available or not. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason of the availability. Required if name is not available. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateNameAvailabilityFormGroup() {
		return new FormGroup<NameAvailabilityFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data POST-ed to the nameAvailability action */
	export interface NameAvailabilityParameters {

		/**
		 * The SignalR service name to validate. e.g."my-signalR-name-here"
		 * Required
		 */
		name: string;

		/**
		 * The resource type. Should be always "Microsoft.SignalRService/SignalR".
		 * Required
		 */
		type: string;
	}

	/** Data POST-ed to the nameAvailability action */
	export interface NameAvailabilityParametersFormProperties {

		/**
		 * The SignalR service name to validate. e.g."my-signalR-name-here"
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource type. Should be always "Microsoft.SignalRService/SignalR".
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNameAvailabilityParametersFormGroup() {
		return new FormGroup<NameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** REST API operation supported by SignalR resource provider. */
	export interface Operation {

		/** The object that describes a operation. */
		display?: OperationDisplay;

		/** Name of the operation with format: {provider}/{resource}/{operation} */
		name?: string | null;

		/** Optional. The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. */
		origin?: string | null;

		/** Extra Operation properties. */
		properties?: OperationProperties;
	}

	/** REST API operation supported by SignalR resource provider. */
	export interface OperationFormProperties {

		/** Name of the operation with format: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,

		/** Optional. The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object that describes a operation. */
	export interface OperationDisplay {

		/** The localized friendly description for the operation */
		description?: string | null;

		/** The localized friendly name for the operation. */
		operation?: string | null;

		/** Friendly name of the resource provider */
		provider?: string | null;

		/** Resource type on which the operation is performed. */
		resource?: string | null;
	}

	/** The object that describes a operation. */
	export interface OperationDisplayFormProperties {

		/** The localized friendly description for the operation */
		description: FormControl<string | null | undefined>,

		/** The localized friendly name for the operation. */
		operation: FormControl<string | null | undefined>,

		/** Friendly name of the resource provider */
		provider: FormControl<string | null | undefined>,

		/** Resource type on which the operation is performed. */
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


	/** Extra Operation properties. */
	export interface OperationProperties {

		/** An object that describes a specification. */
		serviceSpecification?: ServiceSpecification;
	}

	/** Extra Operation properties. */
	export interface OperationPropertiesFormProperties {
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
		});

	}


	/** An object that describes a specification. */
	export interface ServiceSpecification {

		/** Specifications of the Logs for Azure Monitoring. */
		logSpecifications?: Array<LogSpecification>;

		/** Specifications of the Metrics for Azure Monitoring. */
		metricSpecifications?: Array<MetricSpecification>;
	}

	/** An object that describes a specification. */
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}


	/** Result of the request to list REST API operations. It contains a list of operations. */
	export interface OperationList {

		/**
		 * The URL the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** List of operations supported by the resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list REST API operations. It contains a list of operations. */
	export interface OperationListFormProperties {

		/**
		 * The URL the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters describes the request to regenerate access keys */
	export interface RegenerateKeyParameters {

		/** The keyType to regenerate. Must be either 'primary' or 'secondary'(case-insensitive). */
		keyType?: RegenerateKeyParametersKeyType | null;
	}

	/** Parameters describes the request to regenerate access keys */
	export interface RegenerateKeyParametersFormProperties {

		/** The keyType to regenerate. Must be either 'primary' or 'secondary'(case-insensitive). */
		keyType: FormControl<RegenerateKeyParametersKeyType | null | undefined>,
	}
	export function CreateRegenerateKeyParametersFormGroup() {
		return new FormGroup<RegenerateKeyParametersFormProperties>({
			keyType: new FormControl<RegenerateKeyParametersKeyType | null | undefined>(undefined),
		});

	}

	export enum RegenerateKeyParametersKeyType { Primary = 'Primary', Secondary = 'Secondary' }


	/** The core properties of ARM resources. */
	export interface Resource {

		/** Fully qualified resource Id for the resource. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The type of the service - e.g. "Microsoft.SignalRService/SignalR" */
		type?: string | null;
	}

	/** The core properties of ARM resources. */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the service - e.g. "Microsoft.SignalRService/SignalR" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The billing information of the SignalR resource. */
	export interface ResourceSku {

		/**
		 * Optional, integer. The unit count of SignalR resource. 1 by default.
		 * If present, following values are allowed:
		 * Free: 1
		 * Standard: 1,2,5,10,20,50,100
		 */
		capacity?: number | null;

		/** Optional string. For future use. */
		family?: string | null;

		/**
		 * The name of the SKU. Required.
		 * Allowed values: Standard_S1, Free_F1
		 * Required
		 */
		name: string;

		/** Optional string. For future use. */
		size?: string | null;

		/**
		 * Optional tier of this particular SKU. 'Standard' or 'Free'.
		 * `Basic` is deprecated, use `Standard` instead.
		 */
		tier?: ResourceSkuTier | null;
	}

	/** The billing information of the SignalR resource. */
	export interface ResourceSkuFormProperties {

		/**
		 * Optional, integer. The unit count of SignalR resource. 1 by default.
		 * If present, following values are allowed:
		 * Free: 1
		 * Standard: 1,2,5,10,20,50,100
		 */
		capacity: FormControl<number | null | undefined>,

		/** Optional string. For future use. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU. Required.
		 * Allowed values: Standard_S1, Free_F1
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Optional string. For future use. */
		size: FormControl<string | null | undefined>,

		/**
		 * Optional tier of this particular SKU. 'Standard' or 'Free'.
		 * `Basic` is deprecated, use `Standard` instead.
		 */
		tier: FormControl<ResourceSkuTier | null | undefined>,
	}
	export function CreateResourceSkuFormGroup() {
		return new FormGroup<ResourceSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<ResourceSkuTier | null | undefined>(undefined),
		});

	}

	export enum ResourceSkuTier { Free = 'Free', Basic = 'Basic', Standard = 'Standard', Premium = 'Premium' }


	/** Cross-Origin Resource Sharing (CORS) settings. */
	export interface SignalRCorsSettings {

		/** Gets or sets the list of origins that should be allowed to make cross-origin calls (for example: http://example.com:12345). Use "*" to allow all. If omitted, allow all by default. */
		allowedOrigins?: Array<string>;
	}

	/** Cross-Origin Resource Sharing (CORS) settings. */
	export interface SignalRCorsSettingsFormProperties {
	}
	export function CreateSignalRCorsSettingsFormGroup() {
		return new FormGroup<SignalRCorsSettingsFormProperties>({
		});

	}


	/** Settings used to provision or configure the resource. */
	export interface SignalRCreateOrUpdateProperties {

		/** Cross-Origin Resource Sharing (CORS) settings. */
		cors?: SignalRCorsSettings;

		/**
		 * List of SignalR featureFlags. e.g. ServiceMode.
		 * FeatureFlags that are not included in the parameters for the update operation will not be modified.
		 * And the response will only include featureFlags that are explicitly set.
		 * When a featureFlag is not explicitly set, SignalR service will use its globally default value.
		 * But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
		 */
		features?: Array<SignalRFeature>;

		/**
		 * Prefix for the hostName of the SignalR service. Retained for future use.
		 * The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
		 */
		hostNamePrefix?: string | null;
	}

	/** Settings used to provision or configure the resource. */
	export interface SignalRCreateOrUpdatePropertiesFormProperties {

		/**
		 * Prefix for the hostName of the SignalR service. Retained for future use.
		 * The hostname will be of format: &lt;hostNamePrefix&gt;.service.signalr.net.
		 */
		hostNamePrefix: FormControl<string | null | undefined>,
	}
	export function CreateSignalRCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<SignalRCreateOrUpdatePropertiesFormProperties>({
			hostNamePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Feature of a SignalR resource, which controls the SignalR runtime behavior. */
	export interface SignalRFeature {

		/**
		 * FeatureFlags is the supported features of Azure SignalR service.
		 * - ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
		 * - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
		 * Required
		 */
		flag: SignalRFeatureFlag;

		/** Optional properties related to this feature. */
		properties?: {[id: string]: string };

		/**
		 * Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		value: string;
	}

	/** Feature of a SignalR resource, which controls the SignalR runtime behavior. */
	export interface SignalRFeatureFormProperties {

		/**
		 * FeatureFlags is the supported features of Azure SignalR service.
		 * - ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
		 * - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
		 * Required
		 */
		flag: FormControl<SignalRFeatureFlag | null | undefined>,

		/** Optional properties related to this feature. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSignalRFeatureFormGroup() {
		return new FormGroup<SignalRFeatureFormProperties>({
			flag: new FormControl<SignalRFeatureFlag | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export enum SignalRFeatureFlag { ServiceMode = 'ServiceMode', EnableConnectivityLogs = 'EnableConnectivityLogs' }


	/**
	 * Parameters for SignalR service create/update operation.
	 * Keep the same schema as AzSignalR.Models.SignalRResource
	 */
	export interface SignalRCreateParameters {

		/**
		 * Azure GEO region: e.g. West US | East US | North Central US | South Central US | West Europe | North Europe | East Asia | Southeast Asia | etc.
		 * The geo region of a resource never changes after it is created.
		 * Required
		 */
		location: string;
	}

	/**
	 * Parameters for SignalR service create/update operation.
	 * Keep the same schema as AzSignalR.Models.SignalRResource
	 */
	export interface SignalRCreateParametersFormProperties {

		/**
		 * Azure GEO region: e.g. West US | East US | North Central US | South Central US | West Europe | North Europe | East Asia | Southeast Asia | etc.
		 * The geo region of a resource never changes after it is created.
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateSignalRCreateParametersFormGroup() {
		return new FormGroup<SignalRCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A class represents the access keys of SignalR service. */
	export interface SignalRKeys {

		/** SignalR connection string constructed via the primaryKey */
		primaryConnectionString?: string | null;

		/** The primary access key. */
		primaryKey?: string | null;

		/** SignalR connection string constructed via the secondaryKey */
		secondaryConnectionString?: string | null;

		/** The secondary access key. */
		secondaryKey?: string | null;
	}

	/** A class represents the access keys of SignalR service. */
	export interface SignalRKeysFormProperties {

		/** SignalR connection string constructed via the primaryKey */
		primaryConnectionString: FormControl<string | null | undefined>,

		/** The primary access key. */
		primaryKey: FormControl<string | null | undefined>,

		/** SignalR connection string constructed via the secondaryKey */
		secondaryConnectionString: FormControl<string | null | undefined>,

		/** The secondary access key. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateSignalRKeysFormGroup() {
		return new FormGroup<SignalRKeysFormProperties>({
			primaryConnectionString: new FormControl<string | null | undefined>(undefined),
			primaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryConnectionString: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A class that describes the properties of the SignalR service that should contain more read-only properties than AzSignalR.Models.SignalRCreateOrUpdateProperties */
	export interface SignalRProperties {

		/** The publicly accessible IP of the SignalR service. */
		externalIP?: string | null;

		/** FQDN of the SignalR service instance. Format: xxx.service.signalr.net */
		hostName?: string | null;

		/** Provisioning state of the resource. */
		provisioningState?: SignalRPropertiesProvisioningState | null;

		/** The publicly accessible port of the SignalR service which is designed for browser/client side usage. */
		publicPort?: number | null;

		/** The publicly accessible port of the SignalR service which is designed for customer server side usage. */
		serverPort?: number | null;

		/** Version of the SignalR resource. Probably you need the same or higher version of client SDKs. */
		version?: string | null;
	}

	/** A class that describes the properties of the SignalR service that should contain more read-only properties than AzSignalR.Models.SignalRCreateOrUpdateProperties */
	export interface SignalRPropertiesFormProperties {

		/** The publicly accessible IP of the SignalR service. */
		externalIP: FormControl<string | null | undefined>,

		/** FQDN of the SignalR service instance. Format: xxx.service.signalr.net */
		hostName: FormControl<string | null | undefined>,

		/** Provisioning state of the resource. */
		provisioningState: FormControl<SignalRPropertiesProvisioningState | null | undefined>,

		/** The publicly accessible port of the SignalR service which is designed for browser/client side usage. */
		publicPort: FormControl<number | null | undefined>,

		/** The publicly accessible port of the SignalR service which is designed for customer server side usage. */
		serverPort: FormControl<number | null | undefined>,

		/** Version of the SignalR resource. Probably you need the same or higher version of client SDKs. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSignalRPropertiesFormGroup() {
		return new FormGroup<SignalRPropertiesFormProperties>({
			externalIP: new FormControl<string | null | undefined>(undefined),
			hostName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<SignalRPropertiesProvisioningState | null | undefined>(undefined),
			publicPort: new FormControl<number | null | undefined>(undefined),
			serverPort: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SignalRPropertiesProvisioningState { Unknown = 'Unknown', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled', Running = 'Running', Creating = 'Creating', Updating = 'Updating', Deleting = 'Deleting', Moving = 'Moving' }


	/** A class represent a SignalR service resource. */
	export interface SignalRResource {

		/** Fully qualified resource Id for the resource. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** A class that describes the properties of the SignalR service that should contain more read-only properties than AzSignalR.Models.SignalRCreateOrUpdateProperties */
		properties?: SignalRProperties;

		/** The billing information of the SignalR resource. */
		sku?: ResourceSku;

		/** The type of the service - e.g. "Microsoft.SignalRService/SignalR" */
		type?: string | null;
	}

	/** A class represent a SignalR service resource. */
	export interface SignalRResourceFormProperties {

		/** Fully qualified resource Id for the resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the service - e.g. "Microsoft.SignalRService/SignalR" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSignalRResourceFormGroup() {
		return new FormGroup<SignalRResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object that includes an array of SignalR services and a possible link for next set. */
	export interface SignalRResourceList {

		/**
		 * The URL the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** List of SignalR services */
		value?: Array<SignalRResource>;
	}

	/** Object that includes an array of SignalR services and a possible link for next set. */
	export interface SignalRResourceListFormProperties {

		/**
		 * The URL the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSignalRResourceListFormGroup() {
		return new FormGroup<SignalRResourceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for SignalR service update operation */
	export interface SignalRUpdateParameters {

		/** Settings used to provision or configure the resource. */
		properties?: SignalRCreateOrUpdateProperties;

		/** The billing information of the SignalR resource. */
		sku?: ResourceSku;

		/** A list of key value pairs that describe the resource. */
		tags?: {[id: string]: string };
	}

	/** Parameters for SignalR service update operation */
	export interface SignalRUpdateParametersFormProperties {

		/** A list of key value pairs that describe the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSignalRUpdateParametersFormGroup() {
		return new FormGroup<SignalRUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Object that describes a specific usage of SignalR resources. */
	export interface SignalRUsage {

		/** Current value for the usage quota. */
		currentValue?: number | null;

		/** Fully qualified ARM resource id */
		id?: string | null;

		/** The maximum permitted value for the usage quota. If there is no limit, this value will be -1. */
		limit?: number | null;

		/** Localizable String object containing the name and a localized value. */
		name?: SignalRUsageName;

		/** Representing the units of the usage quota. Possible values are: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond. */
		unit?: string | null;
	}

	/** Object that describes a specific usage of SignalR resources. */
	export interface SignalRUsageFormProperties {

		/** Current value for the usage quota. */
		currentValue: FormControl<number | null | undefined>,

		/** Fully qualified ARM resource id */
		id: FormControl<string | null | undefined>,

		/** The maximum permitted value for the usage quota. If there is no limit, this value will be -1. */
		limit: FormControl<number | null | undefined>,

		/** Representing the units of the usage quota. Possible values are: Count, Bytes, Seconds, Percent, CountPerSecond, BytesPerSecond. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateSignalRUsageFormGroup() {
		return new FormGroup<SignalRUsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Localizable String object containing the name and a localized value. */
	export interface SignalRUsageName {

		/** Localized name of the usage. */
		localizedValue?: string | null;

		/** The identifier of the usage. */
		value?: string | null;
	}

	/** Localizable String object containing the name and a localized value. */
	export interface SignalRUsageNameFormProperties {

		/** Localized name of the usage. */
		localizedValue: FormControl<string | null | undefined>,

		/** The identifier of the usage. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSignalRUsageNameFormGroup() {
		return new FormGroup<SignalRUsageNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object that includes an array of SignalR resource usages and a possible link for next set. */
	export interface SignalRUsageList {

		/**
		 * The URL the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink?: string | null;

		/** List of SignalR usages */
		value?: Array<SignalRUsage>;
	}

	/** Object that includes an array of SignalR resource usages and a possible link for next set. */
	export interface SignalRUsageListFormProperties {

		/**
		 * The URL the client should use to fetch the next page (per server side paging).
		 * It's null for now, added for future use.
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSignalRUsageListFormGroup() {
		return new FormGroup<SignalRUsageListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM tracked top level resource. */
	export interface TrackedResource {

		/** The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US. */
		location?: string | null;

		/** Tags of the service which is a list of key value pairs that describe the resource. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource. */
	export interface TrackedResourceFormProperties {

		/** The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US. */
		location: FormControl<string | null | undefined>,

		/** Tags of the service which is a list of key value pairs that describe the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available REST API operations of the Microsoft.SignalRService provider.
		 * Get providers/Microsoft.SignalRService/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationList} Success. The response describes the list of operations.
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.SignalRService/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Handles requests to list all resources in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/SignalR
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SignalRResourceList} Success. The response describes the list of SignalR services in the subscription.
		 */
		SignalR_ListBySubscription(api_version: string, subscriptionId: string): Observable<SignalRResourceList> {
			return this.http.get<SignalRResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.SignalRService/SignalR?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks that the SignalR name is valid and is not already in use.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/checkNameAvailability
		 * @param {string} location the region
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {NameAvailabilityParameters} requestBody Parameters supplied to the operation.
		 * @return {NameAvailability} Success. The response describes the name availability.
		 */
		SignalR_CheckNameAvailability(location: string, api_version: string, subscriptionId: string, requestBody: NameAvailabilityParameters): Observable<NameAvailability> {
			return this.http.post<NameAvailability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.SignalRService/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List usage quotas for Azure SignalR service by location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.SignalRService/locations/{location}/usages
		 * @param {string} location the location like "eastus"
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {SignalRUsageList} Success. The response describe the usage quotas of a subscription in specified region.
		 */
		Usages_List(location: string, api_version: string, subscriptionId: string): Observable<SignalRUsageList> {
			return this.http.get<SignalRUsageList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.SignalRService/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Handles requests to list all resources in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/SignalR
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @return {SignalRResourceList} Success. The response describes the list of SignalR services in a resourceGroup.
		 */
		SignalR_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<SignalRResourceList> {
			return this.http.get<SignalRResourceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SignalRService/SignalR?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the access keys of the SignalR resource.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/SignalR/{resourceName}/listKeys
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} resourceName The name of the SignalR resource.
		 * @return {SignalRKeys} Success. The response describes SignalR service access keys.
		 */
		SignalR_ListKeys(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<SignalRKeys> {
			return this.http.post<SignalRKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SignalRService/SignalR/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/listKeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerate SignalR service access key. PrimaryKey and SecondaryKey cannot be regenerated at the same time.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/SignalR/{resourceName}/regenerateKey
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} resourceName The name of the SignalR resource.
		 * @param {RegenerateKeyParameters} requestBody Parameter that describes the Regenerate Key Operation.
		 * @return {void} 
		 */
		SignalR_RegenerateKey(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: RegenerateKeyParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SignalRService/SignalR/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/regenerateKey?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the SignalR service and its properties.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} resourceName The name of the SignalR resource.
		 * @return {SignalRResource} Success. The response describes the corresponding SignalR service.
		 */
		SignalR_Get(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<SignalRResource> {
			return this.http.get<SignalRResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SignalRService/signalR/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new SignalR service and update an exiting SignalR service.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} resourceName The name of the SignalR resource.
		 * @param {SignalRCreateParameters} requestBody Parameters for the create or update operation
		 * @return {SignalRResource} Success. The response describes a SignalR service.
		 */
		SignalR_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: SignalRCreateParameters): Observable<SignalRResource> {
			return this.http.put<SignalRResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SignalRService/signalR/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Operation to delete a SignalR service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} resourceName The name of the SignalR resource.
		 * @return {void} 
		 */
		SignalR_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SignalRService/signalR/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Operation to update an exiting SignalR service.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} resourceName The name of the SignalR resource.
		 * @param {SignalRUpdateParameters} requestBody Parameters for the update operation
		 * @return {SignalRResource} Success. The response describes a SignalR service.
		 */
		SignalR_Update(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: SignalRUpdateParameters): Observable<SignalRResource> {
			return this.http.patch<SignalRResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SignalRService/signalR/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Operation to restart a SignalR service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/signalR/{resourceName}/restart
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} resourceName The name of the SignalR resource.
		 * @return {void} 
		 */
		SignalR_Restart(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.SignalRService/signalR/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/restart?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

