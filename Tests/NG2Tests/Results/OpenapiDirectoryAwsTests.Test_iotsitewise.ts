import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface InvalidRequestException {
	}

	export interface ResourceNotFoundException {
	}

	export interface InternalFailureException {
	}

	export interface LimitExceededException {
	}

	export interface ThrottlingException {
	}

	export interface ConflictingOperationException {
	}

	export interface BatchAssociateProjectAssetsResponse {
		errors?: Array<AssetErrorDetails>;
	}


	/** Contains error details for the requested associate project asset action. */
	export interface AssetErrorDetails {
		assetId: string;
		code: AssetErrorDetailsCode;
		message: string;
	}

	export enum AssetErrorDetailsCode { INTERNAL_FAILURE = 0 }

	export interface BatchDisassociateProjectAssetsResponse {
		errors?: Array<AssetErrorDetails>;
	}

	export interface BatchPutAssetPropertyValueResponse {
		errorEntries: Array<BatchPutAssetPropertyErrorEntry>;
	}


	/** Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API. */
	export interface BatchPutAssetPropertyErrorEntry {
		entryId: string;
		errors: Array<BatchPutAssetPropertyError>;
	}


	/** Contains error information from updating a batch of asset property values. */
	export interface BatchPutAssetPropertyError {
		errorCode: BatchPutAssetPropertyErrorErrorCode;
		errorMessage: string;
		timestamps: Array<TimeInNanos>;
	}

	export enum BatchPutAssetPropertyErrorErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, InternalFailureException = 2, ServiceUnavailableException = 3, ThrottlingException = 4, LimitExceededException = 5, ConflictingOperationException = 6, TimestampOutOfRangeException = 7, AccessDeniedException = 8 }


	/** Contains a timestamp with optional nanosecond granularity. */
	export interface TimeInNanos {
		timeInSeconds: number;
		offsetInNanos?: number;
	}


	/** Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API. */
	export interface PutAssetPropertyValueEntry {
		entryId: string;
		assetId?: string;
		propertyId?: string;
		propertyAlias?: string;
		propertyValues: Array<AssetPropertyValue>;
	}


	/** Contains asset property value information. */
	export interface AssetPropertyValue {

		/**
		 * Contains an asset property value (of a single type only).
		 * Required
		 */
		value: Variant;

		/**
		 * Contains a timestamp with optional nanosecond granularity.
		 * Required
		 */
		timestamp: TimeInNanos;
		quality?: AssetPropertyValueQuality;
	}


	/** Contains an asset property value (of a single type only). */
	export interface Variant {
		stringValue?: string;
		integerValue?: number;
		doubleValue?: number;
		booleanValue?: boolean;
	}

	export enum AssetPropertyValueQuality { GOOD = 0, BAD = 1, UNCERTAIN = 2 }

	export interface ServiceUnavailableException {
	}

	export interface CreateAccessPolicyResponse {
		accessPolicyId: string;
		accessPolicyArn: string;
	}


	/** Contains information for a user identity in an access policy. */
	export interface UserIdentity {
		id: string;
	}


	/** Contains information for a group identity in an access policy. */
	export interface GroupIdentity {
		id: string;
	}


	/** Identifies an AWS IoT SiteWise Monitor portal. */
	export interface PortalResource {
		id: string;
	}


	/** Identifies a specific AWS IoT SiteWise Monitor project. */
	export interface ProjectResource {
		id: string;
	}

	export interface CreateAssetResponse {
		assetId: string;
		assetArn: string;

		/**
		 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetStatus: AssetStatus;
	}


	/** Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface AssetStatus {
		state: AssetStatusState;

		/** Contains the details of an AWS IoT SiteWise error. */
		error?: ErrorDetails;
	}

	export enum AssetStatusState { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }


	/** Contains the details of an AWS IoT SiteWise error. */
	export interface ErrorDetails {
		code: ErrorDetailsCode;
		message: string;
	}

	export enum ErrorDetailsCode { VALIDATION_ERROR = 0, INTERNAL_FAILURE = 1 }

	export interface ResourceAlreadyExistsException {
	}

	export interface CreateAssetModelResponse {
		assetModelId: string;
		assetModelArn: string;

		/**
		 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetModelStatus: AssetModelStatus;
	}


	/** Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface AssetModelStatus {
		state: AssetModelStatusState;

		/** Contains the details of an AWS IoT SiteWise error. */
		error?: ErrorDetails;
	}

	export enum AssetModelStatusState { CREATING = 0, ACTIVE = 1, UPDATING = 2, PROPAGATING = 3, DELETING = 4, FAILED = 5 }


	/** Contains an asset model property definition. This property definition is applied to all assets created from the asset model. */
	export interface AssetModelPropertyDefinition {
		name: string;
		dataType: AssetModelPropertyDefinitionDataType;
		unit?: string;

		/**
		 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
		 * Required
		 */
		type: PropertyType;
	}

	export enum AssetModelPropertyDefinitionDataType { STRING = 0, INTEGER = 1, DOUBLE = 2, BOOLEAN = 3 }


	/** Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>. */
	export interface PropertyType {

		/** Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		attribute?: Attribute;

		/** Contains an asset measurement property. This structure is empty. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		measurement?: Measurement;

		/** <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
		transform?: Transform;

		/** <p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
		metric?: Metric;
	}


	/** Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface Attribute {
		defaultValue?: string;
	}


	/** Contains an asset measurement property. This structure is empty. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface Measurement {
	}


	/** <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
	export interface Transform {
		expression: string;
		variables: Array<ExpressionVariable>;
	}


	/** Contains expression variable information. */
	export interface ExpressionVariable {
		name: string;

		/**
		 * Identifies a property value used in an expression.
		 * Required
		 */
		value: VariableValue;
	}


	/** Identifies a property value used in an expression. */
	export interface VariableValue {
		propertyId: string;
		hierarchyId?: string;
	}


	/** <p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
	export interface Metric {
		expression: string;
		variables: Array<ExpressionVariable>;

		/**
		 * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
		 * Required
		 */
		window: MetricWindow;
	}


	/** Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on). */
	export interface MetricWindow {

		/** Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations. */
		tumbling?: TumblingWindow;
	}


	/** Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations. */
	export interface TumblingWindow {
		interval: string;
	}


	/** Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy. */
	export interface AssetModelHierarchyDefinition {
		name: string;
		childAssetModelId: string;
	}

	export interface CreateDashboardResponse {
		dashboardId: string;
		dashboardArn: string;
	}

	export interface CreateGatewayResponse {
		gatewayId: string;
		gatewayArn: string;
	}


	/** Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface Greengrass {
		groupArn: string;
	}

	export interface CreatePortalResponse {
		portalId: string;
		portalArn: string;
		portalStartUrl: string;

		/**
		 * Contains information about the current status of a portal.
		 * Required
		 */
		portalStatus: PortalStatus;
		ssoApplicationId: string;
	}


	/** Contains information about the current status of a portal. */
	export interface PortalStatus {
		state: PortalStatusState;

		/** Contains AWS IoT SiteWise Monitor error details. */
		error?: MonitorErrorDetails;
	}

	export enum PortalStatusState { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3, FAILED = 4 }


	/** Contains AWS IoT SiteWise Monitor error details. */
	export interface MonitorErrorDetails {
		code?: AssetErrorDetailsCode;
		message?: string;
	}

	export enum ImageFileType { PNG = 0 }

	export interface CreateProjectResponse {
		projectId: string;
		projectArn: string;
	}

	export interface DeleteAccessPolicyResponse {
	}

	export interface DeleteAssetResponse {

		/**
		 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetStatus: AssetStatus;
	}

	export interface DeleteAssetModelResponse {

		/**
		 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetModelStatus: AssetModelStatus;
	}

	export interface DeleteDashboardResponse {
	}

	export interface DeletePortalResponse {

		/**
		 * Contains information about the current status of a portal.
		 * Required
		 */
		portalStatus: PortalStatus;
	}

	export interface DeleteProjectResponse {
	}

	export interface DescribeAccessPolicyResponse {
		accessPolicyId: string;
		accessPolicyArn: string;

		/**
		 * <p>Contains an AWS SSO identity ID for a user or group.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note>
		 * Required
		 */
		accessPolicyIdentity: Identity;

		/**
		 * Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.
		 * Required
		 */
		accessPolicyResource: Resource;
		accessPolicyPermission: DescribeAccessPolicyResponseAccessPolicyPermission;
		accessPolicyCreationDate: Date;
		accessPolicyLastUpdateDate: Date;
	}


	/** <p>Contains an AWS SSO identity ID for a user or group.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note> */
	export interface Identity {

		/** Contains information for a user identity in an access policy. */
		user?: UserIdentity;

		/** Contains information for a group identity in an access policy. */
		group?: GroupIdentity;
	}


	/** Contains an AWS IoT SiteWise Monitor resource ID for a portal or project. */
	export interface Resource {

		/** Identifies an AWS IoT SiteWise Monitor portal. */
		portal?: PortalResource;

		/** Identifies a specific AWS IoT SiteWise Monitor project. */
		project?: ProjectResource;
	}

	export enum DescribeAccessPolicyResponseAccessPolicyPermission { ADMINISTRATOR = 0, VIEWER = 1 }

	export interface DescribeAssetResponse {
		assetId: string;
		assetArn: string;
		assetName: string;
		assetModelId: string;
		assetProperties: Array<AssetProperty>;
		assetHierarchies: Array<AssetHierarchy>;
		assetCreationDate: Date;
		assetLastUpdateDate: Date;

		/**
		 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetStatus: AssetStatus;
	}


	/** Contains asset property information. */
	export interface AssetProperty {
		id: string;
		name: string;
		alias?: string;

		/** Contains asset property value notification information. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		notification?: PropertyNotification;
		dataType: AssetModelPropertyDefinitionDataType;
		unit?: string;
	}


	/** Contains asset property value notification information. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface PropertyNotification {
		topic: string;
		state: PropertyNotificationState;
	}

	export enum PropertyNotificationState { ENABLED = 0, DISABLED = 1 }


	/** Describes an asset hierarchy that contains a hierarchy's name and ID. */
	export interface AssetHierarchy {
		id?: string;
		name: string;
	}

	export interface DescribeAssetModelResponse {
		assetModelId: string;
		assetModelArn: string;
		assetModelName: string;
		assetModelDescription: string;
		assetModelProperties: Array<AssetModelProperty>;
		assetModelHierarchies: Array<AssetModelHierarchy>;
		assetModelCreationDate: Date;
		assetModelLastUpdateDate: Date;

		/**
		 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetModelStatus: AssetModelStatus;
	}


	/** Contains information about an asset model property. */
	export interface AssetModelProperty {
		id?: string;
		name: string;
		dataType: AssetModelPropertyDefinitionDataType;
		unit?: string;

		/**
		 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
		 * Required
		 */
		type: PropertyType;
	}


	/** Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy. */
	export interface AssetModelHierarchy {
		id?: string;
		name: string;
		childAssetModelId: string;
	}

	export interface DescribeAssetPropertyResponse {
		assetId: string;
		assetName: string;
		assetModelId: string;

		/**
		 * Contains asset property information.
		 * Required
		 */
		assetProperty: Property;
	}


	/** Contains asset property information. */
	export interface Property {
		id: string;
		name: string;
		alias?: string;

		/** Contains asset property value notification information. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		notification?: PropertyNotification;
		dataType: AssetModelPropertyDefinitionDataType;
		unit?: string;

		/** Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>. */
		type?: PropertyType;
	}

	export interface DescribeDashboardResponse {
		dashboardId: string;
		dashboardArn: string;
		dashboardName: string;
		projectId: string;
		dashboardDescription?: string;
		dashboardDefinition: string;
		dashboardCreationDate: Date;
		dashboardLastUpdateDate: Date;
	}

	export interface DescribeGatewayResponse {
		gatewayId: string;
		gatewayName: string;
		gatewayArn: string;

		/** Contains a gateway's platform information. */
		gatewayPlatform?: GatewayPlatform;
		gatewayCapabilitySummaries: Array<GatewayCapabilitySummary>;
		creationDate: Date;
		lastUpdateDate: Date;
	}


	/** Contains a gateway's platform information. */
	export interface GatewayPlatform {

		/**
		 * Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		greengrass: Greengrass;
	}


	/** Contains a summary of a gateway capability configuration. */
	export interface GatewayCapabilitySummary {
		capabilityNamespace: string;
		capabilitySyncStatus: GatewayCapabilitySummaryCapabilitySyncStatus;
	}

	export enum GatewayCapabilitySummaryCapabilitySyncStatus { IN_SYNC = 0, OUT_OF_SYNC = 1, SYNC_FAILED = 2 }

	export interface DescribeGatewayCapabilityConfigurationResponse {
		gatewayId: string;
		capabilityNamespace: string;
		capabilityConfiguration: string;
		capabilitySyncStatus: GatewayCapabilitySummaryCapabilitySyncStatus;
	}

	export interface DescribeLoggingOptionsResponse {

		/**
		 * Contains logging options.
		 * Required
		 */
		loggingOptions: LoggingOptions;
	}


	/** Contains logging options. */
	export interface LoggingOptions {
		level: LoggingOptionsLevel;
	}

	export enum LoggingOptionsLevel { ERROR = 0, INFO = 1, OFF = 2 }

	export interface DescribePortalResponse {
		portalId: string;
		portalArn: string;
		portalName: string;
		portalDescription?: string;
		portalClientId: string;
		portalStartUrl: string;
		portalContactEmail: string;

		/**
		 * Contains information about the current status of a portal.
		 * Required
		 */
		portalStatus: PortalStatus;
		portalCreationDate: Date;
		portalLastUpdateDate: Date;

		/** Contains an image that is uploaded to AWS IoT SiteWise and available at a URL. */
		portalLogoImageLocation?: ImageLocation;
		roleArn?: string;
	}


	/** Contains an image that is uploaded to AWS IoT SiteWise and available at a URL. */
	export interface ImageLocation {
		id: string;
		url: string;
	}

	export interface DescribeProjectResponse {
		projectId: string;
		projectArn: string;
		projectName: string;
		portalId: string;
		projectDescription?: string;
		projectCreationDate: Date;
		projectLastUpdateDate: Date;
	}

	export interface GetAssetPropertyAggregatesResponse {
		aggregatedValues: Array<AggregatedValue>;
		nextToken?: string;
	}


	/** Contains aggregated asset property values (for example, average, minimum, and maximum). */
	export interface AggregatedValue {
		timestamp: Date;
		quality?: AssetPropertyValueQuality;

		/**
		 * Contains the (pre-calculated) aggregate values for an asset property.
		 * Required
		 */
		value: Aggregates;
	}


	/** Contains the (pre-calculated) aggregate values for an asset property. */
	export interface Aggregates {
		average?: number;
		count?: number;
		maximum?: number;
		minimum?: number;
		sum?: number;
		standardDeviation?: number;
	}

	export enum AggregateType { AVERAGE = 0, COUNT = 1, MAXIMUM = 2, MINIMUM = 3, SUM = 4, STANDARD_DEVIATION = 5 }

	export enum Quality { GOOD = 0, BAD = 1, UNCERTAIN = 2 }

	export interface GetAssetPropertyValueResponse {

		/** Contains asset property value information. */
		propertyValue?: AssetPropertyValue;
	}

	export interface GetAssetPropertyValueHistoryResponse {
		assetPropertyValueHistory: Array<AssetPropertyValue>;
		nextToken?: string;
	}

	export interface ListAccessPoliciesResponse {
		accessPolicySummaries: Array<AccessPolicySummary>;
		nextToken?: string;
	}


	/** Contains an access policy that defines an AWS SSO identity's access to an AWS IoT SiteWise Monitor resource. */
	export interface AccessPolicySummary {
		id: string;

		/**
		 * <p>Contains an AWS SSO identity ID for a user or group.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note>
		 * Required
		 */
		identity: Identity;

		/**
		 * Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.
		 * Required
		 */
		resource: Resource;
		permission: DescribeAccessPolicyResponseAccessPolicyPermission;
		creationDate?: Date;
		lastUpdateDate?: Date;
	}

	export interface ListAssetModelsResponse {
		assetModelSummaries: Array<AssetModelSummary>;
		nextToken?: string;
	}


	/** Contains a summary of an asset model. */
	export interface AssetModelSummary {
		id: string;
		arn: string;
		name: string;
		description: string;
		creationDate: Date;
		lastUpdateDate: Date;

		/**
		 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		status: AssetModelStatus;
	}

	export interface ListAssetsResponse {
		assetSummaries: Array<AssetSummary>;
		nextToken?: string;
	}


	/** Contains a summary of an asset. */
	export interface AssetSummary {
		id: string;
		arn: string;
		name: string;
		assetModelId: string;
		creationDate: Date;
		lastUpdateDate: Date;

		/**
		 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		status: AssetStatus;
		hierarchies: Array<AssetHierarchy>;
	}

	export interface ListAssociatedAssetsResponse {
		assetSummaries: Array<AssociatedAssetsSummary>;
		nextToken?: string;
	}


	/** Contains a summary of an associated asset. */
	export interface AssociatedAssetsSummary {
		id: string;
		arn: string;
		name: string;
		assetModelId: string;
		creationDate: Date;
		lastUpdateDate: Date;

		/**
		 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		status: AssetStatus;
		hierarchies: Array<AssetHierarchy>;
	}

	export interface ListDashboardsResponse {
		dashboardSummaries: Array<DashboardSummary>;
		nextToken?: string;
	}


	/** Contains a dashboard summary. */
	export interface DashboardSummary {
		id: string;
		name: string;
		description?: string;
		creationDate?: Date;
		lastUpdateDate?: Date;
	}

	export interface ListGatewaysResponse {
		gatewaySummaries: Array<GatewaySummary>;
		nextToken?: string;
	}


	/** Contains a summary of a gateway. */
	export interface GatewaySummary {
		gatewayId: string;
		gatewayName: string;
		gatewayCapabilitySummaries?: Array<GatewayCapabilitySummary>;
		creationDate: Date;
		lastUpdateDate: Date;
	}

	export interface ListPortalsResponse {
		portalSummaries?: Array<PortalSummary>;
		nextToken?: string;
	}


	/** Contains a portal summary. */
	export interface PortalSummary {
		id: string;
		name: string;
		description?: string;
		startUrl: string;
		creationDate?: Date;
		lastUpdateDate?: Date;
		roleArn?: string;
	}

	export interface ListProjectAssetsResponse {
		assetIds: Array<string>;
		nextToken?: string;
	}

	export interface ListProjectsResponse {
		projectSummaries: Array<ProjectSummary>;
		nextToken?: string;
	}


	/** Contains project summary information. */
	export interface ProjectSummary {
		id: string;
		name: string;
		description?: string;
		creationDate?: Date;
		lastUpdateDate?: Date;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}

	export interface TagMap {
	}

	export interface PutLoggingOptionsResponse {
	}

	export enum LoggingLevel { ERROR = 0, INFO = 1, OFF = 2 }

	export interface TagResourceResponse {
	}

	export interface TooManyTagsException {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateAccessPolicyResponse {
	}

	export interface UpdateAssetResponse {

		/**
		 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetStatus: AssetStatus;
	}

	export interface UpdateAssetModelResponse {

		/**
		 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetModelStatus: AssetModelStatus;
	}

	export interface UpdateDashboardResponse {
	}

	export interface UpdateGatewayCapabilityConfigurationResponse {
		capabilityNamespace: string;
		capabilitySyncStatus: GatewayCapabilitySummaryCapabilitySyncStatus;
	}

	export interface UpdatePortalResponse {

		/**
		 * Contains information about the current status of a portal.
		 * Required
		 */
		portalStatus: PortalStatus;
	}


	/** Contains an image file. */
	export interface ImageFile {
		data: string;
		type: ImageFileType;
	}

	export interface UpdateProjectResponse {
	}

	export enum Permission { ADMINISTRATOR = 0, VIEWER = 1 }

	export enum AssetErrorCode { INTERNAL_FAILURE = 0 }

	export enum PropertyDataType { STRING = 0, INTEGER = 1, DOUBLE = 2, BOOLEAN = 3 }

	export enum AssetModelState { CREATING = 0, ACTIVE = 1, UPDATING = 2, PROPAGATING = 3, DELETING = 4, FAILED = 5 }

	export enum AssetState { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }

	export interface AssociateAssetsRequest {
		hierarchyId: string;
		childAssetId: string;
		clientToken?: string;
	}

	export interface BatchAssociateProjectAssetsRequest {
		assetIds: Array<string>;
		clientToken?: string;
	}

	export interface BatchDisassociateProjectAssetsRequest {
		assetIds: Array<string>;
		clientToken?: string;
	}

	export enum BatchPutAssetPropertyValueErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, InternalFailureException = 2, ServiceUnavailableException = 3, ThrottlingException = 4, LimitExceededException = 5, ConflictingOperationException = 6, TimestampOutOfRangeException = 7, AccessDeniedException = 8 }

	export interface BatchPutAssetPropertyValueRequest {
		entries: Array<PutAssetPropertyValueEntry>;
	}

	export enum CapabilitySyncStatus { IN_SYNC = 0, OUT_OF_SYNC = 1, SYNC_FAILED = 2 }

	export interface CreateAccessPolicyRequest {

		/**
		 * <p>Contains an AWS SSO identity ID for a user or group.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note>
		 * Required
		 */
		accessPolicyIdentity: Identity;

		/**
		 * Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.
		 * Required
		 */
		accessPolicyResource: Resource;
		accessPolicyPermission: DescribeAccessPolicyResponseAccessPolicyPermission;
		clientToken?: string;
		tags?: TagMap;
	}

	export interface CreateAssetModelRequest {
		assetModelName: string;
		assetModelDescription?: string;
		assetModelProperties?: Array<AssetModelPropertyDefinition>;
		assetModelHierarchies?: Array<AssetModelHierarchyDefinition>;
		clientToken?: string;
		tags?: TagMap;
	}

	export interface CreateAssetRequest {
		assetName: string;
		assetModelId: string;
		clientToken?: string;
		tags?: TagMap;
	}

	export interface CreateDashboardRequest {
		projectId: string;
		dashboardName: string;
		dashboardDescription?: string;
		dashboardDefinition: string;
		clientToken?: string;
		tags?: TagMap;
	}

	export interface CreateGatewayRequest {
		gatewayName: string;

		/**
		 * Contains a gateway's platform information.
		 * Required
		 */
		gatewayPlatform: GatewayPlatform;
		tags?: TagMap;
	}

	export interface CreatePortalRequest {
		portalName: string;
		portalDescription?: string;
		portalContactEmail: string;
		clientToken?: string;

		/** Contains an image file. */
		portalLogoImageFile?: ImageFile;
		roleArn: string;
		tags?: TagMap;
	}

	export interface CreateProjectRequest {
		portalId: string;
		projectName: string;
		projectDescription?: string;
		clientToken?: string;
		tags?: TagMap;
	}

	export interface DeleteAccessPolicyRequest {
	}

	export interface DeleteAssetModelRequest {
	}

	export interface DeleteAssetRequest {
	}

	export interface DeleteDashboardRequest {
	}

	export interface DeleteGatewayRequest {
	}

	export interface DeletePortalRequest {
	}

	export interface DeleteProjectRequest {
	}

	export interface DescribeAccessPolicyRequest {
	}

	export interface DescribeAssetModelRequest {
	}

	export interface DescribeAssetPropertyRequest {
	}

	export interface DescribeAssetRequest {
	}

	export interface DescribeDashboardRequest {
	}

	export interface DescribeGatewayCapabilityConfigurationRequest {
	}

	export interface DescribeGatewayRequest {
	}

	export interface DescribeLoggingOptionsRequest {
	}

	export interface DescribePortalRequest {
	}

	export interface DescribeProjectRequest {
	}

	export interface DisassociateAssetsRequest {
		hierarchyId: string;
		childAssetId: string;
		clientToken?: string;
	}

	export enum ErrorCode { VALIDATION_ERROR = 0, INTERNAL_FAILURE = 1 }

	export enum TimeOrdering { ASCENDING = 0, DESCENDING = 1 }

	export interface GetAssetPropertyAggregatesRequest {
	}

	export interface GetAssetPropertyValueHistoryRequest {
	}

	export interface GetAssetPropertyValueRequest {
	}

	export enum IdentityType { USER = 0, GROUP = 1 }


	/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
	export interface Image {
		id?: string;

		/** Contains an image file. */
		file?: ImageFile;
	}

	export enum ResourceType { PORTAL = 0, PROJECT = 1 }

	export interface ListAccessPoliciesRequest {
	}

	export interface ListAssetModelsRequest {
	}

	export enum ListAssetsFilter { ALL = 0, TOP_LEVEL = 1 }

	export interface ListAssetsRequest {
	}

	export interface ListAssociatedAssetsRequest {
	}

	export interface ListDashboardsRequest {
	}

	export interface ListGatewaysRequest {
	}

	export interface ListPortalsRequest {
	}

	export interface ListProjectAssetsRequest {
	}

	export interface ListProjectsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export enum MonitorErrorCode { INTERNAL_FAILURE = 0 }

	export enum PortalState { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3, FAILED = 4 }

	export interface PutLoggingOptionsRequest {

		/**
		 * Contains logging options.
		 * Required
		 */
		loggingOptions: LoggingOptions;
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateAccessPolicyRequest {

		/**
		 * <p>Contains an AWS SSO identity ID for a user or group.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note>
		 * Required
		 */
		accessPolicyIdentity: Identity;

		/**
		 * Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.
		 * Required
		 */
		accessPolicyResource: Resource;
		accessPolicyPermission: DescribeAccessPolicyResponseAccessPolicyPermission;
		clientToken?: string;
	}

	export interface UpdateAssetModelRequest {
		assetModelName: string;
		assetModelDescription?: string;
		assetModelProperties?: Array<AssetModelProperty>;
		assetModelHierarchies?: Array<AssetModelHierarchy>;
		clientToken?: string;
	}

	export interface UpdateAssetPropertyRequest {
		propertyAlias?: string;
		propertyNotificationState?: PropertyNotificationState;
		clientToken?: string;
	}

	export interface UpdateAssetRequest {
		assetName: string;
		clientToken?: string;
	}

	export interface UpdateDashboardRequest {
		dashboardName: string;
		dashboardDescription?: string;
		dashboardDefinition: string;
		clientToken?: string;
	}

	export interface UpdateGatewayCapabilityConfigurationRequest {
		capabilityNamespace: string;
		capabilityConfiguration: string;
	}

	export interface UpdateGatewayRequest {
		gatewayName: string;
	}

	export interface UpdatePortalRequest {
		portalName: string;
		portalDescription?: string;
		portalContactEmail: string;

		/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
		portalLogoImage?: Image;
		roleArn: string;
		clientToken?: string;
	}

	export interface UpdateProjectRequest {
		projectName: string;
		projectDescription?: string;
		clientToken?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating Assets</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Post assets/{assetId}/associate
		 * @param {string} assetId The ID of the parent asset.
		 * @return {void} Success
		 */
		AssociateAssets(assetId: string, requestBody: AssociateAssetsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/associate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a group (batch) of assets with an AWS IoT SiteWise Monitor project.
		 * Post projects/{projectId}/assets/associate
		 * @param {string} projectId The ID of the project to which to associate the assets.
		 * @return {BatchAssociateProjectAssetsResponse} Success
		 */
		BatchAssociateProjectAssets(projectId: string, requestBody: BatchAssociateProjectAssetsPostBody): Observable<BatchAssociateProjectAssetsResponse> {
			return this.http.post<BatchAssociateProjectAssetsResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/assets/associate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a group (batch) of assets from an AWS IoT SiteWise Monitor project.
		 * Post projects/{projectId}/assets/disassociate
		 * @param {string} projectId The ID of the project from which to disassociate the assets.
		 * @return {BatchDisassociateProjectAssetsResponse} Success
		 */
		BatchDisassociateProjectAssets(projectId: string, requestBody: BatchDisassociateProjectAssetsPostBody): Observable<BatchDisassociateProjectAssetsResponse> {
			return this.http.post<BatchDisassociateProjectAssetsResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/assets/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends a list of asset property values to AWS IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting Data Using the API</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, AWS IoT SiteWise accepts only TQVs that have a timestamp of no more than 15 minutes in the past and no more than 5 minutes in the future. AWS IoT SiteWise rejects timestamps outside of the inclusive range of [-15, +5] minutes and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, AWS IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important>
		 * Post properties
		 * @return {BatchPutAssetPropertyValueResponse} Success
		 */
		BatchPutAssetPropertyValue(requestBody: BatchPutAssetPropertyValuePostBody): Observable<BatchPutAssetPropertyValueResponse> {
			return this.http.post<BatchPutAssetPropertyValueResponse>(this.baseUri + 'properties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an access policy that grants the specified AWS Single Sign-On user or group access to the specified AWS IoT SiteWise Monitor portal or project resource.
		 * Post access-policies
		 * @return {void} 
		 */
		CreateAccessPolicy(requestBody: CreateAccessPolicyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'access-policies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of access policies for an AWS SSO identity (a user or group) or an AWS IoT SiteWise Monitor resource (a portal or project).
		 * Get access-policies
		 * @param {IdentityType} identityType The type of identity (user or group). This parameter is required if you specify <code>identityId</code>.
		 * @param {string} identityId The ID of the identity. This parameter is required if you specify <code>identityType</code>.
		 * @param {ResourceType} resourceType The type of resource (portal or project). This parameter is required if you specify <code>resourceId</code>.
		 * @param {string} resourceId The ID of the resource. This parameter is required if you specify <code>resourceType</code>.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {ListAccessPoliciesResponse} Success
		 */
		ListAccessPolicies(identityType: IdentityType, identityId: string, resourceType: ResourceType, resourceId: string, nextToken: string, maxResults: number): Observable<ListAccessPoliciesResponse> {
			return this.http.get<ListAccessPoliciesResponse>(this.baseUri + 'access-policies?identityType=' + identityType + '&identityId=' + (identityId == null ? '' : encodeURIComponent(identityId)) + '&resourceType=' + resourceType + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating Assets</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Post assets
		 * @return {void} 
		 */
		CreateAsset(requestBody: CreateAssetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'assets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>
		 * Get assets
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @param {string} assetModelId The ID of the asset model by which to filter the list of assets. This parameter is required if you choose <code>ALL</code> for <code>filter</code>.
		 * @param {ListAssetsFilter} filter <p>The filter for the requested list of assets. Choose one of the following options. Defaults to <code>ALL</code>.</p> <ul> <li> <p> <code>ALL</code> – The list includes all assets for a given asset model ID. The <code>assetModelId</code> parameter is required if you filter by <code>ALL</code>.</p> </li> <li> <p> <code>TOP_LEVEL</code> – The list includes only top-level assets in the asset hierarchy tree.</p> </li> </ul>
		 * @return {ListAssetsResponse} Success
		 */
		ListAssets(nextToken: string, maxResults: number, assetModelId: string, filter: ListAssetsFilter): Observable<ListAssetsResponse> {
			return this.http.get<ListAssetsResponse>(this.baseUri + 'assets?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&assetModelId=' + (assetModelId == null ? '' : encodeURIComponent(assetModelId)) + '&filter=' + filter, {});
		}

		/**
		 * Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining Asset Models</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Post asset-models
		 * @return {void} 
		 */
		CreateAssetModel(requestBody: CreateAssetModelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'asset-models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of summaries of all asset models.
		 * Get asset-models
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {ListAssetModelsResponse} Success
		 */
		ListAssetModels(nextToken: string, maxResults: number): Observable<ListAssetModelsResponse> {
			return this.http.get<ListAssetModelsResponse>(this.baseUri + 'asset-models?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a dashboard in an AWS IoT SiteWise Monitor project.
		 * Post dashboards
		 * @return {void} 
		 */
		CreateDashboard(requestBody: CreateDashboardPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dashboards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Post 20200301/gateways
		 * @return {void} 
		 */
		CreateGateway(requestBody: CreateGatewayPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '20200301/gateways', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of gateways.
		 * Get 20200301/gateways
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {ListGatewaysResponse} Success
		 */
		ListGateways(nextToken: string, maxResults: number): Observable<ListGatewaysResponse> {
			return this.http.get<ListGatewaysResponse>(this.baseUri + '20200301/gateways?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Creates a portal, which can contain projects and dashboards. Before you can create a portal, you must configure AWS Single Sign-On in the current Region. AWS IoT SiteWise Monitor uses AWS SSO to manage user permissions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso">Enabling AWS SSO</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <note> <p>Before you can sign in to a new portal, you must add at least one AWS SSO user or group to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or Removing Portal Administrators</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> </note>
		 * Post portals
		 * @return {void} 
		 */
		CreatePortal(requestBody: CreatePortalPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'portals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of AWS IoT SiteWise Monitor portals.
		 * Get portals
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {ListPortalsResponse} Success
		 */
		ListPortals(nextToken: string, maxResults: number): Observable<ListPortalsResponse> {
			return this.http.get<ListPortalsResponse>(this.baseUri + 'portals?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a project in the specified portal.
		 * Post projects
		 * @return {void} 
		 */
		CreateProject(requestBody: CreateProjectPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an access policy that grants the specified AWS Single Sign-On identity access to the specified AWS IoT SiteWise Monitor resource. You can use this operation to revoke access to an AWS IoT SiteWise Monitor resource.
		 * Delete access-policies/{accessPolicyId}
		 * @param {string} accessPolicyId The ID of the access policy to be deleted.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteAccessPolicy(accessPolicyId: string, clientToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'access-policies/' + (accessPolicyId == null ? '' : encodeURIComponent(accessPolicyId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes an access policy, which specifies an AWS SSO user or group's access to an AWS IoT SiteWise Monitor portal or project.
		 * Get access-policies/{accessPolicyId}
		 * @param {string} accessPolicyId The ID of the access policy.
		 * @return {DescribeAccessPolicyResponse} Success
		 */
		DescribeAccessPolicy(accessPolicyId: string): Observable<DescribeAccessPolicyResponse> {
			return this.http.get<DescribeAccessPolicyResponse>(this.baseUri + 'access-policies/' + (accessPolicyId == null ? '' : encodeURIComponent(accessPolicyId)), {});
		}

		/**
		 * Updates an existing access policy that specifies an AWS SSO user or group's access to an AWS IoT SiteWise Monitor portal or project resource.
		 * Put access-policies/{accessPolicyId}
		 * @param {string} accessPolicyId The ID of the access policy.
		 * @return {UpdateAccessPolicyResponse} Success
		 */
		UpdateAccessPolicy(accessPolicyId: string, requestBody: UpdateAccessPolicyPutBody): Observable<UpdateAccessPolicyResponse> {
			return this.http.put<UpdateAccessPolicyResponse>(this.baseUri + 'access-policies/' + (accessPolicyId == null ? '' : encodeURIComponent(accessPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting Assets and Models</a> in the <i>AWS IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>
		 * Delete assets/{assetId}
		 * @param {string} assetId The ID of the asset to delete.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteAsset(assetId: string, clientToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an asset.
		 * Get assets/{assetId}
		 * @param {string} assetId The ID of the asset.
		 * @return {DescribeAssetResponse} Success
		 */
		DescribeAsset(assetId: string): Observable<DescribeAssetResponse> {
			return this.http.get<DescribeAssetResponse>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)), {});
		}

		/**
		 * Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating Assets and Models</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Put assets/{assetId}
		 * @param {string} assetId The ID of the asset to update.
		 * @return {void} 
		 */
		UpdateAsset(assetId: string, requestBody: UpdateAssetPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting Assets and Models</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Delete asset-models/{assetModelId}
		 * @param {string} assetModelId The ID of the asset model to delete.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteAssetModel(assetModelId: string, clientToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'asset-models/' + (assetModelId == null ? '' : encodeURIComponent(assetModelId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an asset model.
		 * Get asset-models/{assetModelId}
		 * @param {string} assetModelId The ID of the asset model.
		 * @return {DescribeAssetModelResponse} Success
		 */
		DescribeAssetModel(assetModelId: string): Observable<DescribeAssetModelResponse> {
			return this.http.get<DescribeAssetModelResponse>(this.baseUri + 'asset-models/' + (assetModelId == null ? '' : encodeURIComponent(assetModelId)), {});
		}

		/**
		 * <p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating Assets and Models</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model or update a property's formula expression, AWS IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, AWS IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>
		 * Put asset-models/{assetModelId}
		 * @param {string} assetModelId The ID of the asset model to update.
		 * @return {void} 
		 */
		UpdateAssetModel(assetModelId: string, requestBody: UpdateAssetModelPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'asset-models/' + (assetModelId == null ? '' : encodeURIComponent(assetModelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a dashboard from AWS IoT SiteWise Monitor.
		 * Delete dashboards/{dashboardId}
		 * @param {string} dashboardId The ID of the dashboard to delete.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteDashboard(dashboardId: string, clientToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dashboards/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a dashboard.
		 * Get dashboards/{dashboardId}
		 * @param {string} dashboardId The ID of the dashboard.
		 * @return {DescribeDashboardResponse} Success
		 */
		DescribeDashboard(dashboardId: string): Observable<DescribeDashboardResponse> {
			return this.http.get<DescribeDashboardResponse>(this.baseUri + 'dashboards/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)), {});
		}

		/**
		 * Updates an AWS IoT SiteWise Monitor dashboard.
		 * Put dashboards/{dashboardId}
		 * @param {string} dashboardId The ID of the dashboard to update.
		 * @return {UpdateDashboardResponse} Success
		 */
		UpdateDashboard(dashboardId: string, requestBody: UpdateDashboardPutBody): Observable<UpdateDashboardResponse> {
			return this.http.put<UpdateDashboardResponse>(this.baseUri + 'dashboards/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a gateway from AWS IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-retention.html">Data retention</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Delete 20200301/gateways/{gatewayId}
		 * @param {string} gatewayId The ID of the gateway to delete.
		 * @return {void} Success
		 */
		DeleteGateway(gatewayId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a gateway.
		 * Get 20200301/gateways/{gatewayId}
		 * @param {string} gatewayId The ID of the gateway device.
		 * @return {DescribeGatewayResponse} Success
		 */
		DescribeGateway(gatewayId: string): Observable<DescribeGatewayResponse> {
			return this.http.get<DescribeGatewayResponse>(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)), {});
		}

		/**
		 * Updates a gateway's name.
		 * Put 20200301/gateways/{gatewayId}
		 * @param {string} gatewayId The ID of the gateway to update.
		 * @return {void} Success
		 */
		UpdateGateway(gatewayId: string, requestBody: UpdateGatewayPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a portal from AWS IoT SiteWise Monitor.
		 * Delete portals/{portalId}
		 * @param {string} portalId The ID of the portal to delete.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeletePortal(portalId: string, clientToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'portals/' + (portalId == null ? '' : encodeURIComponent(portalId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a portal.
		 * Get portals/{portalId}
		 * @param {string} portalId The ID of the portal.
		 * @return {DescribePortalResponse} Success
		 */
		DescribePortal(portalId: string): Observable<DescribePortalResponse> {
			return this.http.get<DescribePortalResponse>(this.baseUri + 'portals/' + (portalId == null ? '' : encodeURIComponent(portalId)), {});
		}

		/**
		 * Updates an AWS IoT SiteWise Monitor portal.
		 * Put portals/{portalId}
		 * @param {string} portalId The ID of the portal to update.
		 * @return {void} 
		 */
		UpdatePortal(portalId: string, requestBody: UpdatePortalPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'portals/' + (portalId == null ? '' : encodeURIComponent(portalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project from AWS IoT SiteWise Monitor.
		 * Delete projects/{projectId}
		 * @param {string} projectId The ID of the project.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteProject(projectId: string, clientToken: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a project.
		 * Get projects/{projectId}
		 * @param {string} projectId The ID of the project.
		 * @return {DescribeProjectResponse} Success
		 */
		DescribeProject(projectId: string): Observable<DescribeProjectResponse> {
			return this.http.get<DescribeProjectResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Updates an AWS IoT SiteWise Monitor project.
		 * Put projects/{projectId}
		 * @param {string} projectId The ID of the project to update.
		 * @return {UpdateProjectResponse} Success
		 */
		UpdateProject(projectId: string, requestBody: UpdateProjectPutBody): Observable<UpdateProjectResponse> {
			return this.http.put<UpdateProjectResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about an asset's property.
		 * Get assets/{assetId}/properties/{propertyId}
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @return {DescribeAssetPropertyResponse} Success
		 */
		DescribeAssetProperty(assetId: string, propertyId: string): Observable<DescribeAssetPropertyResponse> {
			return this.http.get<DescribeAssetPropertyResponse>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/properties/' + (propertyId == null ? '' : encodeURIComponent(propertyId)), {});
		}

		/**
		 * <p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>
		 * Put assets/{assetId}/properties/{propertyId}
		 * @param {string} assetId The ID of the asset to be updated.
		 * @param {string} propertyId The ID of the asset property to be updated.
		 * @return {void} Success
		 */
		UpdateAssetProperty(assetId: string, propertyId: string, requestBody: UpdateAssetPropertyPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/properties/' + (propertyId == null ? '' : encodeURIComponent(propertyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
		 * Get 20200301/gateways/{gatewayId}/capability/{capabilityNamespace}
		 * @param {string} gatewayId The ID of the gateway that defines the capability configuration.
		 * @param {string} capabilityNamespace The namespace of the capability configuration. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.
		 * @return {DescribeGatewayCapabilityConfigurationResponse} Success
		 */
		DescribeGatewayCapabilityConfiguration(gatewayId: string, capabilityNamespace: string): Observable<DescribeGatewayCapabilityConfigurationResponse> {
			return this.http.get<DescribeGatewayCapabilityConfigurationResponse>(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)) + '/capability/' + (capabilityNamespace == null ? '' : encodeURIComponent(capabilityNamespace)), {});
		}

		/**
		 * Retrieves the current AWS IoT SiteWise logging options.
		 * Get logging
		 * @return {DescribeLoggingOptionsResponse} Success
		 */
		DescribeLoggingOptions(): Observable<DescribeLoggingOptionsResponse> {
			return this.http.get<DescribeLoggingOptionsResponse>(this.baseUri + 'logging', {});
		}

		/**
		 * Sets logging options for AWS IoT SiteWise.
		 * Put logging
		 * @return {PutLoggingOptionsResponse} Success
		 */
		PutLoggingOptions(requestBody: PutLoggingOptionsPutBody): Observable<PutLoggingOptionsResponse> {
			return this.http.put<PutLoggingOptionsResponse>(this.baseUri + 'logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
		 * Post assets/{assetId}/disassociate
		 * @param {string} assetId The ID of the parent asset from which to disassociate the child asset.
		 * @return {void} Success
		 */
		DisassociateAssets(assetId: string, requestBody: DisassociateAssetsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying Aggregated Property Values</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
		 * Get properties/aggregates#aggregateTypes&resolution&startDate&endDate
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @param {string} propertyAlias The property alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * @param {Array<AggregateType>} aggregateTypes The data aggregating function.
		 * @param {string} resolution The time interval over which to aggregate data.
		 * @param {Array<Quality>} qualities The quality by which to filter asset data.
		 * @param {Date} startDate The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
		 * @param {Date} endDate The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
		 * @param {TimeOrdering} timeOrdering The chronological sorting order of the requested information.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {GetAssetPropertyAggregatesResponse} Success
		 */
		GetAssetPropertyAggregates(assetId: string, propertyId: string, propertyAlias: string, aggregateTypes: Array<AggregateType>, resolution: string, qualities: Array<Quality>, startDate: Date, endDate: Date, timeOrdering: TimeOrdering, nextToken: string, maxResults: number): Observable<GetAssetPropertyAggregatesResponse> {
			return this.http.get<GetAssetPropertyAggregatesResponse>(this.baseUri + 'properties/aggregates#aggregateTypes&resolution&startDate&endDate?assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)) + '&propertyAlias=' + (propertyAlias == null ? '' : encodeURIComponent(propertyAlias)) + '&' + aggregateTypes.map(z => `aggregateTypes=${z}`).join('&') + '&resolution=' + (resolution == null ? '' : encodeURIComponent(resolution)) + '&' + qualities.map(z => `qualities=${z}`).join('&') + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&timeOrdering=' + timeOrdering + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying Current Property Values</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
		 * Get properties/latest
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @param {string} propertyAlias The property alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * @return {GetAssetPropertyValueResponse} Success
		 */
		GetAssetPropertyValue(assetId: string, propertyId: string, propertyAlias: string): Observable<GetAssetPropertyValueResponse> {
			return this.http.get<GetAssetPropertyValueResponse>(this.baseUri + 'properties/latest?assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)) + '&propertyAlias=' + (propertyAlias == null ? '' : encodeURIComponent(propertyAlias)), {});
		}

		/**
		 * <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying Historical Property Values</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
		 * Get properties/history#startDate&endDate
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @param {string} propertyAlias The property alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * @param {Date} startDate The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
		 * @param {Date} endDate The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
		 * @param {Array<Quality>} qualities The quality by which to filter asset data.
		 * @param {TimeOrdering} timeOrdering The chronological sorting order of the requested information.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {GetAssetPropertyValueHistoryResponse} Success
		 */
		GetAssetPropertyValueHistory(assetId: string, propertyId: string, propertyAlias: string, startDate: Date, endDate: Date, qualities: Array<Quality>, timeOrdering: TimeOrdering, nextToken: string, maxResults: number): Observable<GetAssetPropertyValueHistoryResponse> {
			return this.http.get<GetAssetPropertyValueHistoryResponse>(this.baseUri + 'properties/history#startDate&endDate?assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)) + '&propertyAlias=' + (propertyAlias == null ? '' : encodeURIComponent(propertyAlias)) + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&' + qualities.map(z => `qualities=${z}`).join('&') + '&timeOrdering=' + timeOrdering + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves a paginated list of the assets associated to a parent asset (<code>assetId</code>) by a given hierarchy (<code>hierarchyId</code>).
		 * Get assets/{assetId}/hierarchies#hierarchyId
		 * @param {string} assetId The ID of the parent asset.
		 * @param {string} hierarchyId <p>The hierarchy ID (of the parent asset model) whose associated assets are returned. To find a hierarchy ID, use the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html">DescribeAsset</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a> actions.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {ListAssociatedAssetsResponse} Success
		 */
		ListAssociatedAssets(assetId: string, hierarchyId: string, nextToken: string, maxResults: number): Observable<ListAssociatedAssetsResponse> {
			return this.http.get<ListAssociatedAssetsResponse>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/hierarchies#hierarchyId&hierarchyId=' + (hierarchyId == null ? '' : encodeURIComponent(hierarchyId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves a paginated list of dashboards for an AWS IoT SiteWise Monitor project.
		 * Get dashboards#projectId
		 * @param {string} projectId The ID of the project.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {ListDashboardsResponse} Success
		 */
		ListDashboards(projectId: string, nextToken: string, maxResults: number): Observable<ListDashboardsResponse> {
			return this.http.get<ListDashboardsResponse>(this.baseUri + 'dashboards#projectId?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves a paginated list of assets associated with an AWS IoT SiteWise Monitor project.
		 * Get projects/{projectId}/assets
		 * @param {string} projectId The ID of the project.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {ListProjectAssetsResponse} Success
		 */
		ListProjectAssets(projectId: string, nextToken: string, maxResults: number): Observable<ListProjectAssetsResponse> {
			return this.http.get<ListProjectAssetsResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/assets&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves a paginated list of projects for an AWS IoT SiteWise Monitor portal.
		 * Get projects#portalId
		 * @param {string} portalId The ID of the portal.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to be returned per paginated request.
		 * @return {ListProjectsResponse} Success
		 */
		ListProjects(portalId: string, nextToken: string, maxResults: number): Observable<ListProjectsResponse> {
			return this.http.get<ListProjectsResponse>(this.baseUri + 'projects#portalId?portalId=' + (portalId == null ? '' : encodeURIComponent(portalId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves the list of tags for an AWS IoT SiteWise resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds tags to an AWS IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
		 * Post tags#resourceArn
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from an AWS IoT SiteWise resource.
		 * Delete tags#resourceArn&tagKeys
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.
		 * @param {Array<string>} tagKeys A list of keys for tags to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags#resourceArn&tagKeys?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
		 * Post 20200301/gateways/{gatewayId}/capability
		 * @param {string} gatewayId The ID of the gateway to be updated.
		 * @return {void} 
		 */
		UpdateGatewayCapabilityConfiguration(gatewayId: string, requestBody: UpdateGatewayCapabilityConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)) + '/capability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface AssociateAssetsPostBody {

		/**
		 * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		hierarchyId: string;

		/**
		 * The ID of the child asset to be associated.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		childAssetId: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface BatchAssociateProjectAssetsPostBody {

		/**
		 * The IDs of the assets to be associated to the project.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		assetIds: Array<string>;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface BatchDisassociateProjectAssetsPostBody {

		/**
		 * The IDs of the assets to be disassociated from the project.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		assetIds: Array<string>;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface BatchPutAssetPropertyValuePostBody {

		/**
		 * The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.
		 * Required
		 */
		entries: Array<PutAssetPropertyValueEntry>;
	}

	export interface CreateAccessPolicyPostBody {

		/**
		 * <p>Contains an AWS SSO identity ID for a user or group.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note>
		 * Required
		 */
		accessPolicyIdentity: CreateAccessPolicyPostBodyAccessPolicyIdentity;

		/**
		 * Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.
		 * Required
		 */
		accessPolicyResource: CreateAccessPolicyPostBodyAccessPolicyResource;

		/**
		 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
		 * Required
		 */
		accessPolicyPermission: DescribeAccessPolicyResponseAccessPolicyPermission;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;

		/** A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}

	export interface CreateAccessPolicyPostBodyAccessPolicyIdentity {

		/** Contains information for a user identity in an access policy. */
		user?: UserIdentity;

		/** Contains information for a group identity in an access policy. */
		group?: GroupIdentity;
	}

	export interface CreateAccessPolicyPostBodyAccessPolicyResource {

		/** Identifies an AWS IoT SiteWise Monitor portal. */
		portal?: PortalResource;

		/** Identifies a specific AWS IoT SiteWise Monitor project. */
		project?: ProjectResource;
	}

	export interface CreateAssetPostBody {

		/**
		 * A unique, friendly name for the asset.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetName: string;

		/**
		 * The ID of the asset model from which to create the asset.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		assetModelId: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;

		/** A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}

	export interface CreateAssetModelPostBody {

		/**
		 * A unique, friendly name for the asset model.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetModelName: string;

		/**
		 * A description for the asset model.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetModelDescription?: string;

		/** <p>The property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
		assetModelProperties?: Array<AssetModelPropertyDefinition>;

		/** <p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
		assetModelHierarchies?: Array<AssetModelHierarchyDefinition>;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;

		/** A list of key-value pairs that contain metadata for the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}

	export interface CreateDashboardPostBody {

		/**
		 * The ID of the project in which to create the dashboard.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		projectId: string;

		/**
		 * A friendly name for the dashboard.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		dashboardName: string;

		/**
		 * A description for the dashboard.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		dashboardDescription?: string;

		/**
		 * The dashboard definition specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating Dashboards (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 0
		 * Pattern: .+
		 */
		dashboardDefinition: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;

		/** A list of key-value pairs that contain metadata for the dashboard. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}

	export interface CreateGatewayPostBody {

		/**
		 * A unique, friendly name for the gateway.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		gatewayName: string;

		/**
		 * Contains a gateway's platform information.
		 * Required
		 */
		gatewayPlatform: CreateGatewayPostBodyGatewayPlatform;

		/** A list of key-value pairs that contain metadata for the gateway. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}

	export interface CreateGatewayPostBodyGatewayPlatform {

		/** Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		greengrass?: Greengrass;
	}

	export interface CreatePortalPostBody {

		/**
		 * A friendly name for the portal.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		portalName: string;

		/**
		 * A description for the portal.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		portalDescription?: string;

		/**
		 * The AWS administrator's contact email address.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [^@]+@[^@]+
		 */
		portalContactEmail: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;

		/** Contains an image file. */
		portalLogoImageFile?: CreatePortalPostBodyPortalLogoImageFile;

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 * Pattern: .*
		 */
		roleArn: string;

		/** A list of key-value pairs that contain metadata for the portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}

	export interface CreatePortalPostBodyPortalLogoImageFile {
		data?: string;
		type?: ImageFileType;
	}

	export interface CreateProjectPostBody {

		/**
		 * The ID of the portal in which to create the project.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		portalId: string;

		/**
		 * A friendly name for the project.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		projectName: string;

		/**
		 * A description for the project.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		projectDescription?: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;

		/** A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}

	export interface UpdateAccessPolicyPutBody {

		/**
		 * <p>Contains an AWS SSO identity ID for a user or group.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note>
		 * Required
		 */
		accessPolicyIdentity: UpdateAccessPolicyPutBodyAccessPolicyIdentity;

		/**
		 * Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.
		 * Required
		 */
		accessPolicyResource: UpdateAccessPolicyPutBodyAccessPolicyResource;

		/**
		 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
		 * Required
		 */
		accessPolicyPermission: DescribeAccessPolicyResponseAccessPolicyPermission;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface UpdateAccessPolicyPutBodyAccessPolicyIdentity {

		/** Contains information for a user identity in an access policy. */
		user?: UserIdentity;

		/** Contains information for a group identity in an access policy. */
		group?: GroupIdentity;
	}

	export interface UpdateAccessPolicyPutBodyAccessPolicyResource {

		/** Identifies an AWS IoT SiteWise Monitor portal. */
		portal?: PortalResource;

		/** Identifies a specific AWS IoT SiteWise Monitor project. */
		project?: ProjectResource;
	}

	export interface UpdateAssetPutBody {

		/**
		 * A unique, friendly name for the asset.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetName: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface UpdateAssetModelPutBody {

		/**
		 * A unique, friendly name for the asset model.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetModelName: string;

		/**
		 * A description for the asset model.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetModelDescription?: string;

		/** <p>The updated property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
		assetModelProperties?: Array<AssetModelProperty>;

		/** <p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
		assetModelHierarchies?: Array<AssetModelHierarchy>;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface UpdateDashboardPutBody {

		/**
		 * A new friendly name for the dashboard.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		dashboardName: string;

		/**
		 * A new description for the dashboard.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		dashboardDescription?: string;

		/**
		 * The new dashboard definition, as specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating Dashboards (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 0
		 * Pattern: .+
		 */
		dashboardDefinition: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface UpdateGatewayPutBody {

		/**
		 * A unique, friendly name for the gateway.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		gatewayName: string;
	}

	export interface UpdatePortalPutBody {

		/**
		 * A new friendly name for the portal.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		portalName: string;

		/**
		 * A new description for the portal.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		portalDescription?: string;

		/**
		 * The AWS administrator's contact email address.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [^@]+@[^@]+
		 */
		portalContactEmail: string;

		/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
		portalLogoImage?: UpdatePortalPutBodyPortalLogoImage;

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 * Pattern: .*
		 */
		roleArn: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface UpdatePortalPutBodyPortalLogoImage {
		id?: string;

		/** Contains an image file. */
		file?: ImageFile;
	}

	export interface UpdateProjectPutBody {

		/**
		 * A new friendly name for the project.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		projectName: string;

		/**
		 * A new description for the project.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		projectDescription?: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface UpdateAssetPropertyPutBody {

		/**
		 * <p>The property alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the alias is removed from the property.</p>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		propertyAlias?: string;

		/** <p>The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p> */
		propertyNotificationState?: PropertyNotificationState;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface PutLoggingOptionsPutBody {

		/**
		 * Contains logging options.
		 * Required
		 */
		loggingOptions: PutLoggingOptionsPutBodyLoggingOptions;
	}

	export interface PutLoggingOptionsPutBodyLoggingOptions {
		level?: LoggingOptionsLevel;
	}

	export interface DisassociateAssetsPostBody {

		/**
		 * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		hierarchyId: string;

		/**
		 * The ID of the child asset to disassociate.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		childAssetId: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string;
	}

	export interface TagResourcePostBody {

		/**
		 * A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface UpdateGatewayCapabilityConfigurationPostBody {

		/**
		 * The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: ^[a-zA-Z]+:[a-zA-Z]+:[0-9]+$
		 */
		capabilityNamespace: string;

		/**
		 * The JSON document that defines the configuration for the gateway capability. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 1
		 */
		capabilityConfiguration: string;
	}

}

