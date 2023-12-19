import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ConflictingOperationException {
	}
	export interface ConflictingOperationExceptionFormProperties {
	}
	export function CreateConflictingOperationExceptionFormGroup() {
		return new FormGroup<ConflictingOperationExceptionFormProperties>({
		});

	}

	export interface BatchAssociateProjectAssetsResponse {
		errors?: Array<AssetErrorDetails>;
	}
	export interface BatchAssociateProjectAssetsResponseFormProperties {
	}
	export function CreateBatchAssociateProjectAssetsResponseFormGroup() {
		return new FormGroup<BatchAssociateProjectAssetsResponseFormProperties>({
		});

	}


	/** Contains error details for the requested associate project asset action. */
	export interface AssetErrorDetails {
		assetId: string;
		code: AssetErrorDetailsCode;
		message: string;
	}

	/** Contains error details for the requested associate project asset action. */
	export interface AssetErrorDetailsFormProperties {
		assetId: FormControl<string | null | undefined>,
		code: FormControl<AssetErrorDetailsCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAssetErrorDetailsFormGroup() {
		return new FormGroup<AssetErrorDetailsFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<AssetErrorDetailsCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetErrorDetailsCode { INTERNAL_FAILURE = 0 }

	export interface BatchDisassociateProjectAssetsResponse {
		errors?: Array<AssetErrorDetails>;
	}
	export interface BatchDisassociateProjectAssetsResponseFormProperties {
	}
	export function CreateBatchDisassociateProjectAssetsResponseFormGroup() {
		return new FormGroup<BatchDisassociateProjectAssetsResponseFormProperties>({
		});

	}

	export interface BatchPutAssetPropertyValueResponse {
		errorEntries: Array<BatchPutAssetPropertyErrorEntry>;
	}
	export interface BatchPutAssetPropertyValueResponseFormProperties {
	}
	export function CreateBatchPutAssetPropertyValueResponseFormGroup() {
		return new FormGroup<BatchPutAssetPropertyValueResponseFormProperties>({
		});

	}


	/** Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API. */
	export interface BatchPutAssetPropertyErrorEntry {
		entryId: string;
		errors: Array<BatchPutAssetPropertyError>;
	}

	/** Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API. */
	export interface BatchPutAssetPropertyErrorEntryFormProperties {
		entryId: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutAssetPropertyErrorEntryFormGroup() {
		return new FormGroup<BatchPutAssetPropertyErrorEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains error information from updating a batch of asset property values. */
	export interface BatchPutAssetPropertyError {
		errorCode: BatchPutAssetPropertyErrorErrorCode;
		errorMessage: string;
		timestamps: Array<TimeInNanos>;
	}

	/** Contains error information from updating a batch of asset property values. */
	export interface BatchPutAssetPropertyErrorFormProperties {
		errorCode: FormControl<BatchPutAssetPropertyErrorErrorCode | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutAssetPropertyErrorFormGroup() {
		return new FormGroup<BatchPutAssetPropertyErrorFormProperties>({
			errorCode: new FormControl<BatchPutAssetPropertyErrorErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchPutAssetPropertyErrorErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, InternalFailureException = 2, ServiceUnavailableException = 3, ThrottlingException = 4, LimitExceededException = 5, ConflictingOperationException = 6, TimestampOutOfRangeException = 7, AccessDeniedException = 8 }


	/** Contains a timestamp with optional nanosecond granularity. */
	export interface TimeInNanos {
		timeInSeconds: number;
		offsetInNanos?: number | null;
	}

	/** Contains a timestamp with optional nanosecond granularity. */
	export interface TimeInNanosFormProperties {
		timeInSeconds: FormControl<number | null | undefined>,
		offsetInNanos: FormControl<number | null | undefined>,
	}
	export function CreateTimeInNanosFormGroup() {
		return new FormGroup<TimeInNanosFormProperties>({
			timeInSeconds: new FormControl<number | null | undefined>(undefined),
			offsetInNanos: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API. */
	export interface PutAssetPropertyValueEntry {
		entryId: string;
		assetId?: string | null;
		propertyId?: string | null;
		propertyAlias?: string | null;
		propertyValues: Array<AssetPropertyValue>;
	}

	/** Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API. */
	export interface PutAssetPropertyValueEntryFormProperties {
		entryId: FormControl<string | null | undefined>,
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		propertyAlias: FormControl<string | null | undefined>,
	}
	export function CreatePutAssetPropertyValueEntryFormGroup() {
		return new FormGroup<PutAssetPropertyValueEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined),
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			propertyAlias: new FormControl<string | null | undefined>(undefined),
		});

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
		quality?: AssetPropertyValueQuality | null;
	}

	/** Contains asset property value information. */
	export interface AssetPropertyValueFormProperties {
		quality: FormControl<AssetPropertyValueQuality | null | undefined>,
	}
	export function CreateAssetPropertyValueFormGroup() {
		return new FormGroup<AssetPropertyValueFormProperties>({
			quality: new FormControl<AssetPropertyValueQuality | null | undefined>(undefined),
		});

	}


	/** Contains an asset property value (of a single type only). */
	export interface Variant {
		stringValue?: string | null;
		integerValue?: number | null;
		doubleValue?: number | null;
		booleanValue?: boolean | null;
	}

	/** Contains an asset property value (of a single type only). */
	export interface VariantFormProperties {
		stringValue: FormControl<string | null | undefined>,
		integerValue: FormControl<number | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		booleanValue: FormControl<boolean | null | undefined>,
	}
	export function CreateVariantFormGroup() {
		return new FormGroup<VariantFormProperties>({
			stringValue: new FormControl<string | null | undefined>(undefined),
			integerValue: new FormControl<number | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AssetPropertyValueQuality { GOOD = 0, BAD = 1, UNCERTAIN = 2 }

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface CreateAccessPolicyResponse {
		accessPolicyId: string;
		accessPolicyArn: string;
	}
	export interface CreateAccessPolicyResponseFormProperties {
		accessPolicyId: FormControl<string | null | undefined>,
		accessPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPolicyResponseFormGroup() {
		return new FormGroup<CreateAccessPolicyResponseFormProperties>({
			accessPolicyId: new FormControl<string | null | undefined>(undefined),
			accessPolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information for a user identity in an access policy. */
	export interface UserIdentity {
		id: string;
	}

	/** Contains information for a user identity in an access policy. */
	export interface UserIdentityFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information for a group identity in an access policy. */
	export interface GroupIdentity {
		id: string;
	}

	/** Contains information for a group identity in an access policy. */
	export interface GroupIdentityFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateGroupIdentityFormGroup() {
		return new FormGroup<GroupIdentityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies an AWS IoT SiteWise Monitor portal. */
	export interface PortalResource {
		id: string;
	}

	/** Identifies an AWS IoT SiteWise Monitor portal. */
	export interface PortalResourceFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreatePortalResourceFormGroup() {
		return new FormGroup<PortalResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies a specific AWS IoT SiteWise Monitor project. */
	export interface ProjectResource {
		id: string;
	}

	/** Identifies a specific AWS IoT SiteWise Monitor project. */
	export interface ProjectResourceFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateProjectResourceFormGroup() {
		return new FormGroup<ProjectResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface CreateAssetResponseFormProperties {
		assetId: FormControl<string | null | undefined>,
		assetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetResponseFormGroup() {
		return new FormGroup<CreateAssetResponseFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			assetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface AssetStatus {
		state: AssetStatusState;

		/** Contains the details of an AWS IoT SiteWise error. */
		error?: ErrorDetails;
	}

	/** Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface AssetStatusFormProperties {
		state: FormControl<AssetStatusState | null | undefined>,
	}
	export function CreateAssetStatusFormGroup() {
		return new FormGroup<AssetStatusFormProperties>({
			state: new FormControl<AssetStatusState | null | undefined>(undefined),
		});

	}

	export enum AssetStatusState { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }


	/** Contains the details of an AWS IoT SiteWise error. */
	export interface ErrorDetails {
		code: ErrorDetailsCode;
		message: string;
	}

	/** Contains the details of an AWS IoT SiteWise error. */
	export interface ErrorDetailsFormProperties {
		code: FormControl<ErrorDetailsCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<ErrorDetailsCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorDetailsCode { VALIDATION_ERROR = 0, INTERNAL_FAILURE = 1 }

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

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
	export interface CreateAssetModelResponseFormProperties {
		assetModelId: FormControl<string | null | undefined>,
		assetModelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetModelResponseFormGroup() {
		return new FormGroup<CreateAssetModelResponseFormProperties>({
			assetModelId: new FormControl<string | null | undefined>(undefined),
			assetModelArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface AssetModelStatus {
		state: AssetModelStatusState;

		/** Contains the details of an AWS IoT SiteWise error. */
		error?: ErrorDetails;
	}

	/** Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface AssetModelStatusFormProperties {
		state: FormControl<AssetModelStatusState | null | undefined>,
	}
	export function CreateAssetModelStatusFormGroup() {
		return new FormGroup<AssetModelStatusFormProperties>({
			state: new FormControl<AssetModelStatusState | null | undefined>(undefined),
		});

	}

	export enum AssetModelStatusState { CREATING = 0, ACTIVE = 1, UPDATING = 2, PROPAGATING = 3, DELETING = 4, FAILED = 5 }


	/** Contains an asset model property definition. This property definition is applied to all assets created from the asset model. */
	export interface AssetModelPropertyDefinition {
		name: string;
		dataType: AssetModelPropertyDefinitionDataType;
		unit?: string | null;

		/**
		 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
		 * Required
		 */
		type: PropertyType;
	}

	/** Contains an asset model property definition. This property definition is applied to all assets created from the asset model. */
	export interface AssetModelPropertyDefinitionFormProperties {
		name: FormControl<string | null | undefined>,
		dataType: FormControl<AssetModelPropertyDefinitionDataType | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelPropertyDefinitionFormGroup() {
		return new FormGroup<AssetModelPropertyDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<AssetModelPropertyDefinitionDataType | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>. */
	export interface PropertyTypeFormProperties {
	}
	export function CreatePropertyTypeFormGroup() {
		return new FormGroup<PropertyTypeFormProperties>({
		});

	}


	/** Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface Attribute {
		defaultValue?: string | null;
	}

	/** Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface AttributeFormProperties {
		defaultValue: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an asset measurement property. This structure is empty. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface Measurement {
	}

	/** Contains an asset measurement property. This structure is empty. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface MeasurementFormProperties {
	}
	export function CreateMeasurementFormGroup() {
		return new FormGroup<MeasurementFormProperties>({
		});

	}


	/** <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
	export interface Transform {
		expression: string;
		variables: Array<ExpressionVariable>;
	}

	/** <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
	export interface TransformFormProperties {
		expression: FormControl<string | null | undefined>,
	}
	export function CreateTransformFormGroup() {
		return new FormGroup<TransformFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Contains expression variable information. */
	export interface ExpressionVariableFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateExpressionVariableFormGroup() {
		return new FormGroup<ExpressionVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies a property value used in an expression. */
	export interface VariableValue {
		propertyId: string;
		hierarchyId?: string | null;
	}

	/** Identifies a property value used in an expression. */
	export interface VariableValueFormProperties {
		propertyId: FormControl<string | null | undefined>,
		hierarchyId: FormControl<string | null | undefined>,
	}
	export function CreateVariableValueFormGroup() {
		return new FormGroup<VariableValueFormProperties>({
			propertyId: new FormControl<string | null | undefined>(undefined),
			hierarchyId: new FormControl<string | null | undefined>(undefined),
		});

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

	/** <p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> */
	export interface MetricFormProperties {
		expression: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on). */
	export interface MetricWindow {

		/** Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations. */
		tumbling?: TumblingWindow;
	}

	/** Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on). */
	export interface MetricWindowFormProperties {
	}
	export function CreateMetricWindowFormGroup() {
		return new FormGroup<MetricWindowFormProperties>({
		});

	}


	/** Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations. */
	export interface TumblingWindow {
		interval: string;
	}

	/** Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations. */
	export interface TumblingWindowFormProperties {
		interval: FormControl<string | null | undefined>,
	}
	export function CreateTumblingWindowFormGroup() {
		return new FormGroup<TumblingWindowFormProperties>({
			interval: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy. */
	export interface AssetModelHierarchyDefinition {
		name: string;
		childAssetModelId: string;
	}

	/** Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy. */
	export interface AssetModelHierarchyDefinitionFormProperties {
		name: FormControl<string | null | undefined>,
		childAssetModelId: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelHierarchyDefinitionFormGroup() {
		return new FormGroup<AssetModelHierarchyDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			childAssetModelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDashboardResponse {
		dashboardId: string;
		dashboardArn: string;
	}
	export interface CreateDashboardResponseFormProperties {
		dashboardId: FormControl<string | null | undefined>,
		dashboardArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDashboardResponseFormGroup() {
		return new FormGroup<CreateDashboardResponseFormProperties>({
			dashboardId: new FormControl<string | null | undefined>(undefined),
			dashboardArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGatewayResponse {
		gatewayId: string;
		gatewayArn: string;
	}
	export interface CreateGatewayResponseFormProperties {
		gatewayId: FormControl<string | null | undefined>,
		gatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayResponseFormGroup() {
		return new FormGroup<CreateGatewayResponseFormProperties>({
			gatewayId: new FormControl<string | null | undefined>(undefined),
			gatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface Greengrass {
		groupArn: string;
	}

	/** Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface GreengrassFormProperties {
		groupArn: FormControl<string | null | undefined>,
	}
	export function CreateGreengrassFormGroup() {
		return new FormGroup<GreengrassFormProperties>({
			groupArn: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface CreatePortalResponseFormProperties {
		portalId: FormControl<string | null | undefined>,
		portalArn: FormControl<string | null | undefined>,
		portalStartUrl: FormControl<string | null | undefined>,
		ssoApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortalResponseFormGroup() {
		return new FormGroup<CreatePortalResponseFormProperties>({
			portalId: new FormControl<string | null | undefined>(undefined),
			portalArn: new FormControl<string | null | undefined>(undefined),
			portalStartUrl: new FormControl<string | null | undefined>(undefined),
			ssoApplicationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the current status of a portal. */
	export interface PortalStatus {
		state: PortalStatusState;

		/** Contains AWS IoT SiteWise Monitor error details. */
		error?: MonitorErrorDetails;
	}

	/** Contains information about the current status of a portal. */
	export interface PortalStatusFormProperties {
		state: FormControl<PortalStatusState | null | undefined>,
	}
	export function CreatePortalStatusFormGroup() {
		return new FormGroup<PortalStatusFormProperties>({
			state: new FormControl<PortalStatusState | null | undefined>(undefined),
		});

	}

	export enum PortalStatusState { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3, FAILED = 4 }


	/** Contains AWS IoT SiteWise Monitor error details. */
	export interface MonitorErrorDetails {
		code?: AssetErrorDetailsCode | null;
		message?: string | null;
	}

	/** Contains AWS IoT SiteWise Monitor error details. */
	export interface MonitorErrorDetailsFormProperties {
		code: FormControl<AssetErrorDetailsCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateMonitorErrorDetailsFormGroup() {
		return new FormGroup<MonitorErrorDetailsFormProperties>({
			code: new FormControl<AssetErrorDetailsCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageFileType { PNG = 0 }

	export interface CreateProjectResponse {
		projectId: string;
		projectArn: string;
	}
	export interface CreateProjectResponseFormProperties {
		projectId: FormControl<string | null | undefined>,
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectResponseFormGroup() {
		return new FormGroup<CreateProjectResponseFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			projectArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAccessPolicyResponse {
	}
	export interface DeleteAccessPolicyResponseFormProperties {
	}
	export function CreateDeleteAccessPolicyResponseFormGroup() {
		return new FormGroup<DeleteAccessPolicyResponseFormProperties>({
		});

	}

	export interface DeleteAssetResponse {

		/**
		 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetStatus: AssetStatus;
	}
	export interface DeleteAssetResponseFormProperties {
	}
	export function CreateDeleteAssetResponseFormGroup() {
		return new FormGroup<DeleteAssetResponseFormProperties>({
		});

	}

	export interface DeleteAssetModelResponse {

		/**
		 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetModelStatus: AssetModelStatus;
	}
	export interface DeleteAssetModelResponseFormProperties {
	}
	export function CreateDeleteAssetModelResponseFormGroup() {
		return new FormGroup<DeleteAssetModelResponseFormProperties>({
		});

	}

	export interface DeleteDashboardResponse {
	}
	export interface DeleteDashboardResponseFormProperties {
	}
	export function CreateDeleteDashboardResponseFormGroup() {
		return new FormGroup<DeleteDashboardResponseFormProperties>({
		});

	}

	export interface DeletePortalResponse {

		/**
		 * Contains information about the current status of a portal.
		 * Required
		 */
		portalStatus: PortalStatus;
	}
	export interface DeletePortalResponseFormProperties {
	}
	export function CreateDeletePortalResponseFormGroup() {
		return new FormGroup<DeletePortalResponseFormProperties>({
		});

	}

	export interface DeleteProjectResponse {
	}
	export interface DeleteProjectResponseFormProperties {
	}
	export function CreateDeleteProjectResponseFormGroup() {
		return new FormGroup<DeleteProjectResponseFormProperties>({
		});

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
	export interface DescribeAccessPolicyResponseFormProperties {
		accessPolicyId: FormControl<string | null | undefined>,
		accessPolicyArn: FormControl<string | null | undefined>,
		accessPolicyPermission: FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>,
		accessPolicyCreationDate: FormControl<Date | null | undefined>,
		accessPolicyLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAccessPolicyResponseFormGroup() {
		return new FormGroup<DescribeAccessPolicyResponseFormProperties>({
			accessPolicyId: new FormControl<string | null | undefined>(undefined),
			accessPolicyArn: new FormControl<string | null | undefined>(undefined),
			accessPolicyPermission: new FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>(undefined),
			accessPolicyCreationDate: new FormControl<Date | null | undefined>(undefined),
			accessPolicyLastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>Contains an AWS SSO identity ID for a user or group.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note> */
	export interface Identity {

		/** Contains information for a user identity in an access policy. */
		user?: UserIdentity;

		/** Contains information for a group identity in an access policy. */
		group?: GroupIdentity;
	}

	/** <p>Contains an AWS SSO identity ID for a user or group.</p> <note> <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p> </note> */
	export interface IdentityFormProperties {
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
		});

	}


	/** Contains an AWS IoT SiteWise Monitor resource ID for a portal or project. */
	export interface Resource {

		/** Identifies an AWS IoT SiteWise Monitor portal. */
		portal?: PortalResource;

		/** Identifies a specific AWS IoT SiteWise Monitor project. */
		project?: ProjectResource;
	}

	/** Contains an AWS IoT SiteWise Monitor resource ID for a portal or project. */
	export interface ResourceFormProperties {
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
		});

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
	export interface DescribeAssetResponseFormProperties {
		assetId: FormControl<string | null | undefined>,
		assetArn: FormControl<string | null | undefined>,
		assetName: FormControl<string | null | undefined>,
		assetModelId: FormControl<string | null | undefined>,
		assetCreationDate: FormControl<Date | null | undefined>,
		assetLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAssetResponseFormGroup() {
		return new FormGroup<DescribeAssetResponseFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			assetArn: new FormControl<string | null | undefined>(undefined),
			assetName: new FormControl<string | null | undefined>(undefined),
			assetModelId: new FormControl<string | null | undefined>(undefined),
			assetCreationDate: new FormControl<Date | null | undefined>(undefined),
			assetLastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains asset property information. */
	export interface AssetProperty {
		id: string;
		name: string;
		alias?: string | null;

		/** Contains asset property value notification information. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		notification?: PropertyNotification;
		dataType: AssetModelPropertyDefinitionDataType;
		unit?: string | null;
	}

	/** Contains asset property information. */
	export interface AssetPropertyFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,
		dataType: FormControl<AssetModelPropertyDefinitionDataType | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyFormGroup() {
		return new FormGroup<AssetPropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<AssetModelPropertyDefinitionDataType | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains asset property value notification information. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface PropertyNotification {
		topic: string;
		state: PropertyNotificationState;
	}

	/** Contains asset property value notification information. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>. */
	export interface PropertyNotificationFormProperties {
		topic: FormControl<string | null | undefined>,
		state: FormControl<PropertyNotificationState | null | undefined>,
	}
	export function CreatePropertyNotificationFormGroup() {
		return new FormGroup<PropertyNotificationFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PropertyNotificationState | null | undefined>(undefined),
		});

	}

	export enum PropertyNotificationState { ENABLED = 0, DISABLED = 1 }


	/** Describes an asset hierarchy that contains a hierarchy's name and ID. */
	export interface AssetHierarchy {
		id?: string | null;
		name: string;
	}

	/** Describes an asset hierarchy that contains a hierarchy's name and ID. */
	export interface AssetHierarchyFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssetHierarchyFormGroup() {
		return new FormGroup<AssetHierarchyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface DescribeAssetModelResponseFormProperties {
		assetModelId: FormControl<string | null | undefined>,
		assetModelArn: FormControl<string | null | undefined>,
		assetModelName: FormControl<string | null | undefined>,
		assetModelDescription: FormControl<string | null | undefined>,
		assetModelCreationDate: FormControl<Date | null | undefined>,
		assetModelLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAssetModelResponseFormGroup() {
		return new FormGroup<DescribeAssetModelResponseFormProperties>({
			assetModelId: new FormControl<string | null | undefined>(undefined),
			assetModelArn: new FormControl<string | null | undefined>(undefined),
			assetModelName: new FormControl<string | null | undefined>(undefined),
			assetModelDescription: new FormControl<string | null | undefined>(undefined),
			assetModelCreationDate: new FormControl<Date | null | undefined>(undefined),
			assetModelLastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains information about an asset model property. */
	export interface AssetModelProperty {
		id?: string | null;
		name: string;
		dataType: AssetModelPropertyDefinitionDataType;
		unit?: string | null;

		/**
		 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
		 * Required
		 */
		type: PropertyType;
	}

	/** Contains information about an asset model property. */
	export interface AssetModelPropertyFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		dataType: FormControl<AssetModelPropertyDefinitionDataType | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelPropertyFormGroup() {
		return new FormGroup<AssetModelPropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<AssetModelPropertyDefinitionDataType | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy. */
	export interface AssetModelHierarchy {
		id?: string | null;
		name: string;
		childAssetModelId: string;
	}

	/** Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy. */
	export interface AssetModelHierarchyFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		childAssetModelId: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelHierarchyFormGroup() {
		return new FormGroup<AssetModelHierarchyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			childAssetModelId: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface DescribeAssetPropertyResponseFormProperties {
		assetId: FormControl<string | null | undefined>,
		assetName: FormControl<string | null | undefined>,
		assetModelId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssetPropertyResponseFormGroup() {
		return new FormGroup<DescribeAssetPropertyResponseFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			assetName: new FormControl<string | null | undefined>(undefined),
			assetModelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains asset property information. */
	export interface Property {
		id: string;
		name: string;
		alias?: string | null;

		/** Contains asset property value notification information. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		notification?: PropertyNotification;
		dataType: AssetModelPropertyDefinitionDataType;
		unit?: string | null;

		/** Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>. */
		type?: PropertyType;
	}

	/** Contains asset property information. */
	export interface PropertyFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,
		dataType: FormControl<AssetModelPropertyDefinitionDataType | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreatePropertyFormGroup() {
		return new FormGroup<PropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<AssetModelPropertyDefinitionDataType | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDashboardResponse {
		dashboardId: string;
		dashboardArn: string;
		dashboardName: string;
		projectId: string;
		dashboardDescription?: string | null;
		dashboardDefinition: string;
		dashboardCreationDate: Date;
		dashboardLastUpdateDate: Date;
	}
	export interface DescribeDashboardResponseFormProperties {
		dashboardId: FormControl<string | null | undefined>,
		dashboardArn: FormControl<string | null | undefined>,
		dashboardName: FormControl<string | null | undefined>,
		projectId: FormControl<string | null | undefined>,
		dashboardDescription: FormControl<string | null | undefined>,
		dashboardDefinition: FormControl<string | null | undefined>,
		dashboardCreationDate: FormControl<Date | null | undefined>,
		dashboardLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDashboardResponseFormGroup() {
		return new FormGroup<DescribeDashboardResponseFormProperties>({
			dashboardId: new FormControl<string | null | undefined>(undefined),
			dashboardArn: new FormControl<string | null | undefined>(undefined),
			dashboardName: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			dashboardDescription: new FormControl<string | null | undefined>(undefined),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined),
			dashboardCreationDate: new FormControl<Date | null | undefined>(undefined),
			dashboardLastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

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
	export interface DescribeGatewayResponseFormProperties {
		gatewayId: FormControl<string | null | undefined>,
		gatewayName: FormControl<string | null | undefined>,
		gatewayArn: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeGatewayResponseFormGroup() {
		return new FormGroup<DescribeGatewayResponseFormProperties>({
			gatewayId: new FormControl<string | null | undefined>(undefined),
			gatewayName: new FormControl<string | null | undefined>(undefined),
			gatewayArn: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains a gateway's platform information. */
	export interface GatewayPlatform {

		/**
		 * Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		greengrass: Greengrass;
	}

	/** Contains a gateway's platform information. */
	export interface GatewayPlatformFormProperties {
	}
	export function CreateGatewayPlatformFormGroup() {
		return new FormGroup<GatewayPlatformFormProperties>({
		});

	}


	/** Contains a summary of a gateway capability configuration. */
	export interface GatewayCapabilitySummary {
		capabilityNamespace: string;
		capabilitySyncStatus: GatewayCapabilitySummaryCapabilitySyncStatus;
	}

	/** Contains a summary of a gateway capability configuration. */
	export interface GatewayCapabilitySummaryFormProperties {
		capabilityNamespace: FormControl<string | null | undefined>,
		capabilitySyncStatus: FormControl<GatewayCapabilitySummaryCapabilitySyncStatus | null | undefined>,
	}
	export function CreateGatewayCapabilitySummaryFormGroup() {
		return new FormGroup<GatewayCapabilitySummaryFormProperties>({
			capabilityNamespace: new FormControl<string | null | undefined>(undefined),
			capabilitySyncStatus: new FormControl<GatewayCapabilitySummaryCapabilitySyncStatus | null | undefined>(undefined),
		});

	}

	export enum GatewayCapabilitySummaryCapabilitySyncStatus { IN_SYNC = 0, OUT_OF_SYNC = 1, SYNC_FAILED = 2 }

	export interface DescribeGatewayCapabilityConfigurationResponse {
		gatewayId: string;
		capabilityNamespace: string;
		capabilityConfiguration: string;
		capabilitySyncStatus: GatewayCapabilitySummaryCapabilitySyncStatus;
	}
	export interface DescribeGatewayCapabilityConfigurationResponseFormProperties {
		gatewayId: FormControl<string | null | undefined>,
		capabilityNamespace: FormControl<string | null | undefined>,
		capabilityConfiguration: FormControl<string | null | undefined>,
		capabilitySyncStatus: FormControl<GatewayCapabilitySummaryCapabilitySyncStatus | null | undefined>,
	}
	export function CreateDescribeGatewayCapabilityConfigurationResponseFormGroup() {
		return new FormGroup<DescribeGatewayCapabilityConfigurationResponseFormProperties>({
			gatewayId: new FormControl<string | null | undefined>(undefined),
			capabilityNamespace: new FormControl<string | null | undefined>(undefined),
			capabilityConfiguration: new FormControl<string | null | undefined>(undefined),
			capabilitySyncStatus: new FormControl<GatewayCapabilitySummaryCapabilitySyncStatus | null | undefined>(undefined),
		});

	}

	export interface DescribeLoggingOptionsResponse {

		/**
		 * Contains logging options.
		 * Required
		 */
		loggingOptions: LoggingOptions;
	}
	export interface DescribeLoggingOptionsResponseFormProperties {
	}
	export function CreateDescribeLoggingOptionsResponseFormGroup() {
		return new FormGroup<DescribeLoggingOptionsResponseFormProperties>({
		});

	}


	/** Contains logging options. */
	export interface LoggingOptions {
		level: LoggingOptionsLevel;
	}

	/** Contains logging options. */
	export interface LoggingOptionsFormProperties {
		level: FormControl<LoggingOptionsLevel | null | undefined>,
	}
	export function CreateLoggingOptionsFormGroup() {
		return new FormGroup<LoggingOptionsFormProperties>({
			level: new FormControl<LoggingOptionsLevel | null | undefined>(undefined),
		});

	}

	export enum LoggingOptionsLevel { ERROR = 0, INFO = 1, OFF = 2 }

	export interface DescribePortalResponse {
		portalId: string;
		portalArn: string;
		portalName: string;
		portalDescription?: string | null;
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
		roleArn?: string | null;
	}
	export interface DescribePortalResponseFormProperties {
		portalId: FormControl<string | null | undefined>,
		portalArn: FormControl<string | null | undefined>,
		portalName: FormControl<string | null | undefined>,
		portalDescription: FormControl<string | null | undefined>,
		portalClientId: FormControl<string | null | undefined>,
		portalStartUrl: FormControl<string | null | undefined>,
		portalContactEmail: FormControl<string | null | undefined>,
		portalCreationDate: FormControl<Date | null | undefined>,
		portalLastUpdateDate: FormControl<Date | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribePortalResponseFormGroup() {
		return new FormGroup<DescribePortalResponseFormProperties>({
			portalId: new FormControl<string | null | undefined>(undefined),
			portalArn: new FormControl<string | null | undefined>(undefined),
			portalName: new FormControl<string | null | undefined>(undefined),
			portalDescription: new FormControl<string | null | undefined>(undefined),
			portalClientId: new FormControl<string | null | undefined>(undefined),
			portalStartUrl: new FormControl<string | null | undefined>(undefined),
			portalContactEmail: new FormControl<string | null | undefined>(undefined),
			portalCreationDate: new FormControl<Date | null | undefined>(undefined),
			portalLastUpdateDate: new FormControl<Date | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an image that is uploaded to AWS IoT SiteWise and available at a URL. */
	export interface ImageLocation {
		id: string;
		url: string;
	}

	/** Contains an image that is uploaded to AWS IoT SiteWise and available at a URL. */
	export interface ImageLocationFormProperties {
		id: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageLocationFormGroup() {
		return new FormGroup<ImageLocationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProjectResponse {
		projectId: string;
		projectArn: string;
		projectName: string;
		portalId: string;
		projectDescription?: string | null;
		projectCreationDate: Date;
		projectLastUpdateDate: Date;
	}
	export interface DescribeProjectResponseFormProperties {
		projectId: FormControl<string | null | undefined>,
		projectArn: FormControl<string | null | undefined>,
		projectName: FormControl<string | null | undefined>,
		portalId: FormControl<string | null | undefined>,
		projectDescription: FormControl<string | null | undefined>,
		projectCreationDate: FormControl<Date | null | undefined>,
		projectLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeProjectResponseFormGroup() {
		return new FormGroup<DescribeProjectResponseFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			projectArn: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			portalId: new FormControl<string | null | undefined>(undefined),
			projectDescription: new FormControl<string | null | undefined>(undefined),
			projectCreationDate: new FormControl<Date | null | undefined>(undefined),
			projectLastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetAssetPropertyAggregatesResponse {
		aggregatedValues: Array<AggregatedValue>;
		nextToken?: string | null;
	}
	export interface GetAssetPropertyAggregatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAssetPropertyAggregatesResponseFormGroup() {
		return new FormGroup<GetAssetPropertyAggregatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains aggregated asset property values (for example, average, minimum, and maximum). */
	export interface AggregatedValue {
		timestamp: Date;
		quality?: AssetPropertyValueQuality | null;

		/**
		 * Contains the (pre-calculated) aggregate values for an asset property.
		 * Required
		 */
		value: Aggregates;
	}

	/** Contains aggregated asset property values (for example, average, minimum, and maximum). */
	export interface AggregatedValueFormProperties {
		timestamp: FormControl<Date | null | undefined>,
		quality: FormControl<AssetPropertyValueQuality | null | undefined>,
	}
	export function CreateAggregatedValueFormGroup() {
		return new FormGroup<AggregatedValueFormProperties>({
			timestamp: new FormControl<Date | null | undefined>(undefined),
			quality: new FormControl<AssetPropertyValueQuality | null | undefined>(undefined),
		});

	}


	/** Contains the (pre-calculated) aggregate values for an asset property. */
	export interface Aggregates {
		average?: number | null;
		count?: number | null;
		maximum?: number | null;
		minimum?: number | null;
		sum?: number | null;
		standardDeviation?: number | null;
	}

	/** Contains the (pre-calculated) aggregate values for an asset property. */
	export interface AggregatesFormProperties {
		average: FormControl<number | null | undefined>,
		count: FormControl<number | null | undefined>,
		maximum: FormControl<number | null | undefined>,
		minimum: FormControl<number | null | undefined>,
		sum: FormControl<number | null | undefined>,
		standardDeviation: FormControl<number | null | undefined>,
	}
	export function CreateAggregatesFormGroup() {
		return new FormGroup<AggregatesFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			sum: new FormControl<number | null | undefined>(undefined),
			standardDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AggregateType { AVERAGE = 0, COUNT = 1, MAXIMUM = 2, MINIMUM = 3, SUM = 4, STANDARD_DEVIATION = 5 }

	export enum Quality { GOOD = 0, BAD = 1, UNCERTAIN = 2 }

	export interface GetAssetPropertyValueResponse {

		/** Contains asset property value information. */
		propertyValue?: AssetPropertyValue;
	}
	export interface GetAssetPropertyValueResponseFormProperties {
	}
	export function CreateGetAssetPropertyValueResponseFormGroup() {
		return new FormGroup<GetAssetPropertyValueResponseFormProperties>({
		});

	}

	export interface GetAssetPropertyValueHistoryResponse {
		assetPropertyValueHistory: Array<AssetPropertyValue>;
		nextToken?: string | null;
	}
	export interface GetAssetPropertyValueHistoryResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAssetPropertyValueHistoryResponseFormGroup() {
		return new FormGroup<GetAssetPropertyValueHistoryResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccessPoliciesResponse {
		accessPolicySummaries: Array<AccessPolicySummary>;
		nextToken?: string | null;
	}
	export interface ListAccessPoliciesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessPoliciesResponseFormGroup() {
		return new FormGroup<ListAccessPoliciesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		creationDate?: Date | null;
		lastUpdateDate?: Date | null;
	}

	/** Contains an access policy that defines an AWS SSO identity's access to an AWS IoT SiteWise Monitor resource. */
	export interface AccessPolicySummaryFormProperties {
		id: FormControl<string | null | undefined>,
		permission: FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateAccessPolicySummaryFormGroup() {
		return new FormGroup<AccessPolicySummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAssetModelsResponse {
		assetModelSummaries: Array<AssetModelSummary>;
		nextToken?: string | null;
	}
	export interface ListAssetModelsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetModelsResponseFormGroup() {
		return new FormGroup<ListAssetModelsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Contains a summary of an asset model. */
	export interface AssetModelSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateAssetModelSummaryFormGroup() {
		return new FormGroup<AssetModelSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAssetsResponse {
		assetSummaries: Array<AssetSummary>;
		nextToken?: string | null;
	}
	export interface ListAssetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetsResponseFormGroup() {
		return new FormGroup<ListAssetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Contains a summary of an asset. */
	export interface AssetSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		assetModelId: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateAssetSummaryFormGroup() {
		return new FormGroup<AssetSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			assetModelId: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedAssetsResponse {
		assetSummaries: Array<AssociatedAssetsSummary>;
		nextToken?: string | null;
	}
	export interface ListAssociatedAssetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedAssetsResponseFormGroup() {
		return new FormGroup<ListAssociatedAssetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Contains a summary of an associated asset. */
	export interface AssociatedAssetsSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		assetModelId: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateAssociatedAssetsSummaryFormGroup() {
		return new FormGroup<AssociatedAssetsSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			assetModelId: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDashboardsResponse {
		dashboardSummaries: Array<DashboardSummary>;
		nextToken?: string | null;
	}
	export interface ListDashboardsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDashboardsResponseFormGroup() {
		return new FormGroup<ListDashboardsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a dashboard summary. */
	export interface DashboardSummary {
		id: string;
		name: string;
		description?: string | null;
		creationDate?: Date | null;
		lastUpdateDate?: Date | null;
	}

	/** Contains a dashboard summary. */
	export interface DashboardSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDashboardSummaryFormGroup() {
		return new FormGroup<DashboardSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListGatewaysResponse {
		gatewaySummaries: Array<GatewaySummary>;
		nextToken?: string | null;
	}
	export interface ListGatewaysResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaysResponseFormGroup() {
		return new FormGroup<ListGatewaysResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of a gateway. */
	export interface GatewaySummary {
		gatewayId: string;
		gatewayName: string;
		gatewayCapabilitySummaries?: Array<GatewayCapabilitySummary>;
		creationDate: Date;
		lastUpdateDate: Date;
	}

	/** Contains a summary of a gateway. */
	export interface GatewaySummaryFormProperties {
		gatewayId: FormControl<string | null | undefined>,
		gatewayName: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateGatewaySummaryFormGroup() {
		return new FormGroup<GatewaySummaryFormProperties>({
			gatewayId: new FormControl<string | null | undefined>(undefined),
			gatewayName: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPortalsResponse {
		portalSummaries?: Array<PortalSummary>;
		nextToken?: string | null;
	}
	export interface ListPortalsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPortalsResponseFormGroup() {
		return new FormGroup<ListPortalsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a portal summary. */
	export interface PortalSummary {
		id: string;
		name: string;
		description?: string | null;
		startUrl: string;
		creationDate?: Date | null;
		lastUpdateDate?: Date | null;
		roleArn?: string | null;
	}

	/** Contains a portal summary. */
	export interface PortalSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		startUrl: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreatePortalSummaryFormGroup() {
		return new FormGroup<PortalSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			startUrl: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectAssetsResponse {
		assetIds: Array<string>;
		nextToken?: string | null;
	}
	export interface ListProjectAssetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectAssetsResponseFormGroup() {
		return new FormGroup<ListProjectAssetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectsResponse {
		projectSummaries: Array<ProjectSummary>;
		nextToken?: string | null;
	}
	export interface ListProjectsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResponseFormGroup() {
		return new FormGroup<ListProjectsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains project summary information. */
	export interface ProjectSummary {
		id: string;
		name: string;
		description?: string | null;
		creationDate?: Date | null;
		lastUpdateDate?: Date | null;
	}

	/** Contains project summary information. */
	export interface ProjectSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateProjectSummaryFormGroup() {
		return new FormGroup<ProjectSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface PutLoggingOptionsResponse {
	}
	export interface PutLoggingOptionsResponseFormProperties {
	}
	export function CreatePutLoggingOptionsResponseFormGroup() {
		return new FormGroup<PutLoggingOptionsResponseFormProperties>({
		});

	}

	export enum LoggingLevel { ERROR = 0, INFO = 1, OFF = 2 }

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAccessPolicyResponse {
	}
	export interface UpdateAccessPolicyResponseFormProperties {
	}
	export function CreateUpdateAccessPolicyResponseFormGroup() {
		return new FormGroup<UpdateAccessPolicyResponseFormProperties>({
		});

	}

	export interface UpdateAssetResponse {

		/**
		 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetStatus: AssetStatus;
	}
	export interface UpdateAssetResponseFormProperties {
	}
	export function CreateUpdateAssetResponseFormGroup() {
		return new FormGroup<UpdateAssetResponseFormProperties>({
		});

	}

	export interface UpdateAssetModelResponse {

		/**
		 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		assetModelStatus: AssetModelStatus;
	}
	export interface UpdateAssetModelResponseFormProperties {
	}
	export function CreateUpdateAssetModelResponseFormGroup() {
		return new FormGroup<UpdateAssetModelResponseFormProperties>({
		});

	}

	export interface UpdateDashboardResponse {
	}
	export interface UpdateDashboardResponseFormProperties {
	}
	export function CreateUpdateDashboardResponseFormGroup() {
		return new FormGroup<UpdateDashboardResponseFormProperties>({
		});

	}

	export interface UpdateGatewayCapabilityConfigurationResponse {
		capabilityNamespace: string;
		capabilitySyncStatus: GatewayCapabilitySummaryCapabilitySyncStatus;
	}
	export interface UpdateGatewayCapabilityConfigurationResponseFormProperties {
		capabilityNamespace: FormControl<string | null | undefined>,
		capabilitySyncStatus: FormControl<GatewayCapabilitySummaryCapabilitySyncStatus | null | undefined>,
	}
	export function CreateUpdateGatewayCapabilityConfigurationResponseFormGroup() {
		return new FormGroup<UpdateGatewayCapabilityConfigurationResponseFormProperties>({
			capabilityNamespace: new FormControl<string | null | undefined>(undefined),
			capabilitySyncStatus: new FormControl<GatewayCapabilitySummaryCapabilitySyncStatus | null | undefined>(undefined),
		});

	}

	export interface UpdatePortalResponse {

		/**
		 * Contains information about the current status of a portal.
		 * Required
		 */
		portalStatus: PortalStatus;
	}
	export interface UpdatePortalResponseFormProperties {
	}
	export function CreateUpdatePortalResponseFormGroup() {
		return new FormGroup<UpdatePortalResponseFormProperties>({
		});

	}


	/** Contains an image file. */
	export interface ImageFile {
		data: string;
		type: ImageFileType;
	}

	/** Contains an image file. */
	export interface ImageFileFormProperties {
		data: FormControl<string | null | undefined>,
		type: FormControl<ImageFileType | null | undefined>,
	}
	export function CreateImageFileFormGroup() {
		return new FormGroup<ImageFileFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ImageFileType | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectResponse {
	}
	export interface UpdateProjectResponseFormProperties {
	}
	export function CreateUpdateProjectResponseFormGroup() {
		return new FormGroup<UpdateProjectResponseFormProperties>({
		});

	}

	export enum Permission { ADMINISTRATOR = 0, VIEWER = 1 }

	export enum AssetErrorCode { INTERNAL_FAILURE = 0 }

	export enum PropertyDataType { STRING = 0, INTEGER = 1, DOUBLE = 2, BOOLEAN = 3 }

	export enum AssetModelState { CREATING = 0, ACTIVE = 1, UPDATING = 2, PROPAGATING = 3, DELETING = 4, FAILED = 5 }

	export enum AssetState { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }

	export interface AssociateAssetsRequest {
		hierarchyId: string;
		childAssetId: string;
		clientToken?: string | null;
	}
	export interface AssociateAssetsRequestFormProperties {
		hierarchyId: FormControl<string | null | undefined>,
		childAssetId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAssetsRequestFormGroup() {
		return new FormGroup<AssociateAssetsRequestFormProperties>({
			hierarchyId: new FormControl<string | null | undefined>(undefined),
			childAssetId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchAssociateProjectAssetsRequest {
		assetIds: Array<string>;
		clientToken?: string | null;
	}
	export interface BatchAssociateProjectAssetsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateProjectAssetsRequestFormGroup() {
		return new FormGroup<BatchAssociateProjectAssetsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDisassociateProjectAssetsRequest {
		assetIds: Array<string>;
		clientToken?: string | null;
	}
	export interface BatchDisassociateProjectAssetsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateProjectAssetsRequestFormGroup() {
		return new FormGroup<BatchDisassociateProjectAssetsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchPutAssetPropertyValueErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, InternalFailureException = 2, ServiceUnavailableException = 3, ThrottlingException = 4, LimitExceededException = 5, ConflictingOperationException = 6, TimestampOutOfRangeException = 7, AccessDeniedException = 8 }

	export interface BatchPutAssetPropertyValueRequest {
		entries: Array<PutAssetPropertyValueEntry>;
	}
	export interface BatchPutAssetPropertyValueRequestFormProperties {
	}
	export function CreateBatchPutAssetPropertyValueRequestFormGroup() {
		return new FormGroup<BatchPutAssetPropertyValueRequestFormProperties>({
		});

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
		clientToken?: string | null;
		tags?: TagMap;
	}
	export interface CreateAccessPolicyRequestFormProperties {
		accessPolicyPermission: FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPolicyRequestFormGroup() {
		return new FormGroup<CreateAccessPolicyRequestFormProperties>({
			accessPolicyPermission: new FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssetModelRequest {
		assetModelName: string;
		assetModelDescription?: string | null;
		assetModelProperties?: Array<AssetModelPropertyDefinition>;
		assetModelHierarchies?: Array<AssetModelHierarchyDefinition>;
		clientToken?: string | null;
		tags?: TagMap;
	}
	export interface CreateAssetModelRequestFormProperties {
		assetModelName: FormControl<string | null | undefined>,
		assetModelDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetModelRequestFormGroup() {
		return new FormGroup<CreateAssetModelRequestFormProperties>({
			assetModelName: new FormControl<string | null | undefined>(undefined),
			assetModelDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssetRequest {
		assetName: string;
		assetModelId: string;
		clientToken?: string | null;
		tags?: TagMap;
	}
	export interface CreateAssetRequestFormProperties {
		assetName: FormControl<string | null | undefined>,
		assetModelId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetRequestFormGroup() {
		return new FormGroup<CreateAssetRequestFormProperties>({
			assetName: new FormControl<string | null | undefined>(undefined),
			assetModelId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDashboardRequest {
		projectId: string;
		dashboardName: string;
		dashboardDescription?: string | null;
		dashboardDefinition: string;
		clientToken?: string | null;
		tags?: TagMap;
	}
	export interface CreateDashboardRequestFormProperties {
		projectId: FormControl<string | null | undefined>,
		dashboardName: FormControl<string | null | undefined>,
		dashboardDescription: FormControl<string | null | undefined>,
		dashboardDefinition: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDashboardRequestFormGroup() {
		return new FormGroup<CreateDashboardRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			dashboardName: new FormControl<string | null | undefined>(undefined),
			dashboardDescription: new FormControl<string | null | undefined>(undefined),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface CreateGatewayRequestFormProperties {
		gatewayName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayRequestFormGroup() {
		return new FormGroup<CreateGatewayRequestFormProperties>({
			gatewayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePortalRequest {
		portalName: string;
		portalDescription?: string | null;
		portalContactEmail: string;
		clientToken?: string | null;

		/** Contains an image file. */
		portalLogoImageFile?: ImageFile;
		roleArn: string;
		tags?: TagMap;
	}
	export interface CreatePortalRequestFormProperties {
		portalName: FormControl<string | null | undefined>,
		portalDescription: FormControl<string | null | undefined>,
		portalContactEmail: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortalRequestFormGroup() {
		return new FormGroup<CreatePortalRequestFormProperties>({
			portalName: new FormControl<string | null | undefined>(undefined),
			portalDescription: new FormControl<string | null | undefined>(undefined),
			portalContactEmail: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectRequest {
		portalId: string;
		projectName: string;
		projectDescription?: string | null;
		clientToken?: string | null;
		tags?: TagMap;
	}
	export interface CreateProjectRequestFormProperties {
		portalId: FormControl<string | null | undefined>,
		projectName: FormControl<string | null | undefined>,
		projectDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			portalId: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			projectDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAccessPolicyRequest {
	}
	export interface DeleteAccessPolicyRequestFormProperties {
	}
	export function CreateDeleteAccessPolicyRequestFormGroup() {
		return new FormGroup<DeleteAccessPolicyRequestFormProperties>({
		});

	}

	export interface DeleteAssetModelRequest {
	}
	export interface DeleteAssetModelRequestFormProperties {
	}
	export function CreateDeleteAssetModelRequestFormGroup() {
		return new FormGroup<DeleteAssetModelRequestFormProperties>({
		});

	}

	export interface DeleteAssetRequest {
	}
	export interface DeleteAssetRequestFormProperties {
	}
	export function CreateDeleteAssetRequestFormGroup() {
		return new FormGroup<DeleteAssetRequestFormProperties>({
		});

	}

	export interface DeleteDashboardRequest {
	}
	export interface DeleteDashboardRequestFormProperties {
	}
	export function CreateDeleteDashboardRequestFormGroup() {
		return new FormGroup<DeleteDashboardRequestFormProperties>({
		});

	}

	export interface DeleteGatewayRequest {
	}
	export interface DeleteGatewayRequestFormProperties {
	}
	export function CreateDeleteGatewayRequestFormGroup() {
		return new FormGroup<DeleteGatewayRequestFormProperties>({
		});

	}

	export interface DeletePortalRequest {
	}
	export interface DeletePortalRequestFormProperties {
	}
	export function CreateDeletePortalRequestFormGroup() {
		return new FormGroup<DeletePortalRequestFormProperties>({
		});

	}

	export interface DeleteProjectRequest {
	}
	export interface DeleteProjectRequestFormProperties {
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
		});

	}

	export interface DescribeAccessPolicyRequest {
	}
	export interface DescribeAccessPolicyRequestFormProperties {
	}
	export function CreateDescribeAccessPolicyRequestFormGroup() {
		return new FormGroup<DescribeAccessPolicyRequestFormProperties>({
		});

	}

	export interface DescribeAssetModelRequest {
	}
	export interface DescribeAssetModelRequestFormProperties {
	}
	export function CreateDescribeAssetModelRequestFormGroup() {
		return new FormGroup<DescribeAssetModelRequestFormProperties>({
		});

	}

	export interface DescribeAssetPropertyRequest {
	}
	export interface DescribeAssetPropertyRequestFormProperties {
	}
	export function CreateDescribeAssetPropertyRequestFormGroup() {
		return new FormGroup<DescribeAssetPropertyRequestFormProperties>({
		});

	}

	export interface DescribeAssetRequest {
	}
	export interface DescribeAssetRequestFormProperties {
	}
	export function CreateDescribeAssetRequestFormGroup() {
		return new FormGroup<DescribeAssetRequestFormProperties>({
		});

	}

	export interface DescribeDashboardRequest {
	}
	export interface DescribeDashboardRequestFormProperties {
	}
	export function CreateDescribeDashboardRequestFormGroup() {
		return new FormGroup<DescribeDashboardRequestFormProperties>({
		});

	}

	export interface DescribeGatewayCapabilityConfigurationRequest {
	}
	export interface DescribeGatewayCapabilityConfigurationRequestFormProperties {
	}
	export function CreateDescribeGatewayCapabilityConfigurationRequestFormGroup() {
		return new FormGroup<DescribeGatewayCapabilityConfigurationRequestFormProperties>({
		});

	}

	export interface DescribeGatewayRequest {
	}
	export interface DescribeGatewayRequestFormProperties {
	}
	export function CreateDescribeGatewayRequestFormGroup() {
		return new FormGroup<DescribeGatewayRequestFormProperties>({
		});

	}

	export interface DescribeLoggingOptionsRequest {
	}
	export interface DescribeLoggingOptionsRequestFormProperties {
	}
	export function CreateDescribeLoggingOptionsRequestFormGroup() {
		return new FormGroup<DescribeLoggingOptionsRequestFormProperties>({
		});

	}

	export interface DescribePortalRequest {
	}
	export interface DescribePortalRequestFormProperties {
	}
	export function CreateDescribePortalRequestFormGroup() {
		return new FormGroup<DescribePortalRequestFormProperties>({
		});

	}

	export interface DescribeProjectRequest {
	}
	export interface DescribeProjectRequestFormProperties {
	}
	export function CreateDescribeProjectRequestFormGroup() {
		return new FormGroup<DescribeProjectRequestFormProperties>({
		});

	}

	export interface DisassociateAssetsRequest {
		hierarchyId: string;
		childAssetId: string;
		clientToken?: string | null;
	}
	export interface DisassociateAssetsRequestFormProperties {
		hierarchyId: FormControl<string | null | undefined>,
		childAssetId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAssetsRequestFormGroup() {
		return new FormGroup<DisassociateAssetsRequestFormProperties>({
			hierarchyId: new FormControl<string | null | undefined>(undefined),
			childAssetId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { VALIDATION_ERROR = 0, INTERNAL_FAILURE = 1 }

	export enum TimeOrdering { ASCENDING = 0, DESCENDING = 1 }

	export interface GetAssetPropertyAggregatesRequest {
	}
	export interface GetAssetPropertyAggregatesRequestFormProperties {
	}
	export function CreateGetAssetPropertyAggregatesRequestFormGroup() {
		return new FormGroup<GetAssetPropertyAggregatesRequestFormProperties>({
		});

	}

	export interface GetAssetPropertyValueHistoryRequest {
	}
	export interface GetAssetPropertyValueHistoryRequestFormProperties {
	}
	export function CreateGetAssetPropertyValueHistoryRequestFormGroup() {
		return new FormGroup<GetAssetPropertyValueHistoryRequestFormProperties>({
		});

	}

	export interface GetAssetPropertyValueRequest {
	}
	export interface GetAssetPropertyValueRequestFormProperties {
	}
	export function CreateGetAssetPropertyValueRequestFormGroup() {
		return new FormGroup<GetAssetPropertyValueRequestFormProperties>({
		});

	}

	export enum IdentityType { USER = 0, GROUP = 1 }


	/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
	export interface Image {
		id?: string | null;

		/** Contains an image file. */
		file?: ImageFile;
	}

	/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
	export interface ImageFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceType { PORTAL = 0, PROJECT = 1 }

	export interface ListAccessPoliciesRequest {
	}
	export interface ListAccessPoliciesRequestFormProperties {
	}
	export function CreateListAccessPoliciesRequestFormGroup() {
		return new FormGroup<ListAccessPoliciesRequestFormProperties>({
		});

	}

	export interface ListAssetModelsRequest {
	}
	export interface ListAssetModelsRequestFormProperties {
	}
	export function CreateListAssetModelsRequestFormGroup() {
		return new FormGroup<ListAssetModelsRequestFormProperties>({
		});

	}

	export enum ListAssetsFilter { ALL = 0, TOP_LEVEL = 1 }

	export interface ListAssetsRequest {
	}
	export interface ListAssetsRequestFormProperties {
	}
	export function CreateListAssetsRequestFormGroup() {
		return new FormGroup<ListAssetsRequestFormProperties>({
		});

	}

	export interface ListAssociatedAssetsRequest {
	}
	export interface ListAssociatedAssetsRequestFormProperties {
	}
	export function CreateListAssociatedAssetsRequestFormGroup() {
		return new FormGroup<ListAssociatedAssetsRequestFormProperties>({
		});

	}

	export interface ListDashboardsRequest {
	}
	export interface ListDashboardsRequestFormProperties {
	}
	export function CreateListDashboardsRequestFormGroup() {
		return new FormGroup<ListDashboardsRequestFormProperties>({
		});

	}

	export interface ListGatewaysRequest {
	}
	export interface ListGatewaysRequestFormProperties {
	}
	export function CreateListGatewaysRequestFormGroup() {
		return new FormGroup<ListGatewaysRequestFormProperties>({
		});

	}

	export interface ListPortalsRequest {
	}
	export interface ListPortalsRequestFormProperties {
	}
	export function CreateListPortalsRequestFormGroup() {
		return new FormGroup<ListPortalsRequestFormProperties>({
		});

	}

	export interface ListProjectAssetsRequest {
	}
	export interface ListProjectAssetsRequestFormProperties {
	}
	export function CreateListProjectAssetsRequestFormGroup() {
		return new FormGroup<ListProjectAssetsRequestFormProperties>({
		});

	}

	export interface ListProjectsRequest {
	}
	export interface ListProjectsRequestFormProperties {
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

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
	export interface PutLoggingOptionsRequestFormProperties {
	}
	export function CreatePutLoggingOptionsRequestFormGroup() {
		return new FormGroup<PutLoggingOptionsRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

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
		clientToken?: string | null;
	}
	export interface UpdateAccessPolicyRequestFormProperties {
		accessPolicyPermission: FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessPolicyRequestFormGroup() {
		return new FormGroup<UpdateAccessPolicyRequestFormProperties>({
			accessPolicyPermission: new FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssetModelRequest {
		assetModelName: string;
		assetModelDescription?: string | null;
		assetModelProperties?: Array<AssetModelProperty>;
		assetModelHierarchies?: Array<AssetModelHierarchy>;
		clientToken?: string | null;
	}
	export interface UpdateAssetModelRequestFormProperties {
		assetModelName: FormControl<string | null | undefined>,
		assetModelDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetModelRequestFormGroup() {
		return new FormGroup<UpdateAssetModelRequestFormProperties>({
			assetModelName: new FormControl<string | null | undefined>(undefined),
			assetModelDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssetPropertyRequest {
		propertyAlias?: string | null;
		propertyNotificationState?: PropertyNotificationState | null;
		clientToken?: string | null;
	}
	export interface UpdateAssetPropertyRequestFormProperties {
		propertyAlias: FormControl<string | null | undefined>,
		propertyNotificationState: FormControl<PropertyNotificationState | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetPropertyRequestFormGroup() {
		return new FormGroup<UpdateAssetPropertyRequestFormProperties>({
			propertyAlias: new FormControl<string | null | undefined>(undefined),
			propertyNotificationState: new FormControl<PropertyNotificationState | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssetRequest {
		assetName: string;
		clientToken?: string | null;
	}
	export interface UpdateAssetRequestFormProperties {
		assetName: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetRequestFormGroup() {
		return new FormGroup<UpdateAssetRequestFormProperties>({
			assetName: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDashboardRequest {
		dashboardName: string;
		dashboardDescription?: string | null;
		dashboardDefinition: string;
		clientToken?: string | null;
	}
	export interface UpdateDashboardRequestFormProperties {
		dashboardName: FormControl<string | null | undefined>,
		dashboardDescription: FormControl<string | null | undefined>,
		dashboardDefinition: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDashboardRequestFormGroup() {
		return new FormGroup<UpdateDashboardRequestFormProperties>({
			dashboardName: new FormControl<string | null | undefined>(undefined),
			dashboardDescription: new FormControl<string | null | undefined>(undefined),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayCapabilityConfigurationRequest {
		capabilityNamespace: string;
		capabilityConfiguration: string;
	}
	export interface UpdateGatewayCapabilityConfigurationRequestFormProperties {
		capabilityNamespace: FormControl<string | null | undefined>,
		capabilityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayCapabilityConfigurationRequestFormGroup() {
		return new FormGroup<UpdateGatewayCapabilityConfigurationRequestFormProperties>({
			capabilityNamespace: new FormControl<string | null | undefined>(undefined),
			capabilityConfiguration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayRequest {
		gatewayName: string;
	}
	export interface UpdateGatewayRequestFormProperties {
		gatewayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayRequestFormGroup() {
		return new FormGroup<UpdateGatewayRequestFormProperties>({
			gatewayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePortalRequest {
		portalName: string;
		portalDescription?: string | null;
		portalContactEmail: string;

		/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
		portalLogoImage?: Image;
		roleArn: string;
		clientToken?: string | null;
	}
	export interface UpdatePortalRequestFormProperties {
		portalName: FormControl<string | null | undefined>,
		portalDescription: FormControl<string | null | undefined>,
		portalContactEmail: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortalRequestFormGroup() {
		return new FormGroup<UpdatePortalRequestFormProperties>({
			portalName: new FormControl<string | null | undefined>(undefined),
			portalDescription: new FormControl<string | null | undefined>(undefined),
			portalContactEmail: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectRequest {
		projectName: string;
		projectDescription?: string | null;
		clientToken?: string | null;
	}
	export interface UpdateProjectRequestFormProperties {
		projectName: FormControl<string | null | undefined>,
		projectDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined),
			projectDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

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
		ListAccessPolicies(identityType: IdentityType | null | undefined, identityId: string | null | undefined, resourceType: ResourceType | null | undefined, resourceId: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAccessPoliciesResponse> {
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
		ListAssets(nextToken: string | null | undefined, maxResults: number | null | undefined, assetModelId: string | null | undefined, filter: ListAssetsFilter | null | undefined): Observable<ListAssetsResponse> {
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
		ListAssetModels(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssetModelsResponse> {
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
		ListGateways(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListGatewaysResponse> {
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
		ListPortals(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListPortalsResponse> {
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
		DeleteAccessPolicy(accessPolicyId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		DeleteAsset(assetId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		DeleteAssetModel(assetModelId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		DeleteDashboard(dashboardId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		DeletePortal(portalId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		DeleteProject(projectId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		GetAssetPropertyAggregates(assetId: string | null | undefined, propertyId: string | null | undefined, propertyAlias: string | null | undefined, aggregateTypes: Array<AggregateType>, resolution: string, qualities: Array<Quality> | null | undefined, startDate: Date, endDate: Date, timeOrdering: TimeOrdering | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetAssetPropertyAggregatesResponse> {
			return this.http.get<GetAssetPropertyAggregatesResponse>(this.baseUri + 'properties/aggregates#aggregateTypes&resolution&startDate&endDate?assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)) + '&propertyAlias=' + (propertyAlias == null ? '' : encodeURIComponent(propertyAlias)) + '&' + aggregateTypes.map(z => `aggregateTypes=${z}`).join('&') + '&resolution=' + (resolution == null ? '' : encodeURIComponent(resolution)) + '&' + qualities?.map(z => `qualities=${z}`).join('&') + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&timeOrdering=' + timeOrdering + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying Current Property Values</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
		 * Get properties/latest
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @param {string} propertyAlias The property alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * @return {GetAssetPropertyValueResponse} Success
		 */
		GetAssetPropertyValue(assetId: string | null | undefined, propertyId: string | null | undefined, propertyAlias: string | null | undefined): Observable<GetAssetPropertyValueResponse> {
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
		GetAssetPropertyValueHistory(assetId: string | null | undefined, propertyId: string | null | undefined, propertyAlias: string | null | undefined, startDate: Date, endDate: Date, qualities: Array<Quality> | null | undefined, timeOrdering: TimeOrdering | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetAssetPropertyValueHistoryResponse> {
			return this.http.get<GetAssetPropertyValueHistoryResponse>(this.baseUri + 'properties/history#startDate&endDate?assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)) + '&propertyAlias=' + (propertyAlias == null ? '' : encodeURIComponent(propertyAlias)) + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&' + qualities?.map(z => `qualities=${z}`).join('&') + '&timeOrdering=' + timeOrdering + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
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
		ListAssociatedAssets(assetId: string, hierarchyId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssociatedAssetsResponse> {
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
		ListDashboards(projectId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDashboardsResponse> {
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
		ListProjectAssets(projectId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListProjectAssetsResponse> {
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
		ListProjects(portalId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListProjectsResponse> {
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
		clientToken?: string | null;
	}
	export interface AssociateAssetsPostBodyFormProperties {

		/**
		 * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		hierarchyId: FormControl<string | null | undefined>,

		/**
		 * The ID of the child asset to be associated.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		childAssetId: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAssetsPostBodyFormGroup() {
		return new FormGroup<AssociateAssetsPostBodyFormProperties>({
			hierarchyId: new FormControl<string | null | undefined>(undefined),
			childAssetId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

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
		clientToken?: string | null;
	}
	export interface BatchAssociateProjectAssetsPostBodyFormProperties {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateProjectAssetsPostBodyFormGroup() {
		return new FormGroup<BatchAssociateProjectAssetsPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

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
		clientToken?: string | null;
	}
	export interface BatchDisassociateProjectAssetsPostBodyFormProperties {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateProjectAssetsPostBodyFormGroup() {
		return new FormGroup<BatchDisassociateProjectAssetsPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPutAssetPropertyValuePostBody {

		/**
		 * The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.
		 * Required
		 */
		entries: Array<PutAssetPropertyValueEntry>;
	}
	export interface BatchPutAssetPropertyValuePostBodyFormProperties {
	}
	export function CreateBatchPutAssetPropertyValuePostBodyFormGroup() {
		return new FormGroup<BatchPutAssetPropertyValuePostBodyFormProperties>({
		});

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
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateAccessPolicyPostBodyFormProperties {

		/**
		 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
		 * Required
		 */
		accessPolicyPermission: FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAccessPolicyPostBodyFormGroup() {
		return new FormGroup<CreateAccessPolicyPostBodyFormProperties>({
			accessPolicyPermission: new FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAccessPolicyPostBodyAccessPolicyIdentity {

		/** Contains information for a user identity in an access policy. */
		user?: UserIdentity;

		/** Contains information for a group identity in an access policy. */
		group?: GroupIdentity;
	}
	export interface CreateAccessPolicyPostBodyAccessPolicyIdentityFormProperties {
	}
	export function CreateCreateAccessPolicyPostBodyAccessPolicyIdentityFormGroup() {
		return new FormGroup<CreateAccessPolicyPostBodyAccessPolicyIdentityFormProperties>({
		});

	}

	export interface CreateAccessPolicyPostBodyAccessPolicyResource {

		/** Identifies an AWS IoT SiteWise Monitor portal. */
		portal?: PortalResource;

		/** Identifies a specific AWS IoT SiteWise Monitor project. */
		project?: ProjectResource;
	}
	export interface CreateAccessPolicyPostBodyAccessPolicyResourceFormProperties {
	}
	export function CreateCreateAccessPolicyPostBodyAccessPolicyResourceFormGroup() {
		return new FormGroup<CreateAccessPolicyPostBodyAccessPolicyResourceFormProperties>({
		});

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
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateAssetPostBodyFormProperties {

		/**
		 * A unique, friendly name for the asset.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetName: FormControl<string | null | undefined>,

		/**
		 * The ID of the asset model from which to create the asset.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		assetModelId: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAssetPostBodyFormGroup() {
		return new FormGroup<CreateAssetPostBodyFormProperties>({
			assetName: new FormControl<string | null | undefined>(undefined),
			assetModelId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
		assetModelDescription?: string | null;

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
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateAssetModelPostBodyFormProperties {

		/**
		 * A unique, friendly name for the asset model.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetModelName: FormControl<string | null | undefined>,

		/**
		 * A description for the asset model.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetModelDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAssetModelPostBodyFormGroup() {
		return new FormGroup<CreateAssetModelPostBodyFormProperties>({
			assetModelName: new FormControl<string | null | undefined>(undefined),
			assetModelDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
		dashboardDescription?: string | null;

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
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the dashboard. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateDashboardPostBodyFormProperties {

		/**
		 * The ID of the project in which to create the dashboard.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * A friendly name for the dashboard.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		dashboardName: FormControl<string | null | undefined>,

		/**
		 * A description for the dashboard.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		dashboardDescription: FormControl<string | null | undefined>,

		/**
		 * The dashboard definition specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating Dashboards (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 0
		 * Pattern: .+
		 */
		dashboardDefinition: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the dashboard. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDashboardPostBodyFormGroup() {
		return new FormGroup<CreateDashboardPostBodyFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			dashboardName: new FormControl<string | null | undefined>(undefined),
			dashboardDescription: new FormControl<string | null | undefined>(undefined),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
	export interface CreateGatewayPostBodyFormProperties {

		/**
		 * A unique, friendly name for the gateway.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		gatewayName: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the gateway. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateGatewayPostBodyFormGroup() {
		return new FormGroup<CreateGatewayPostBodyFormProperties>({
			gatewayName: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateGatewayPostBodyGatewayPlatform {

		/** Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		greengrass?: Greengrass;
	}
	export interface CreateGatewayPostBodyGatewayPlatformFormProperties {
	}
	export function CreateCreateGatewayPostBodyGatewayPlatformFormGroup() {
		return new FormGroup<CreateGatewayPostBodyGatewayPlatformFormProperties>({
		});

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
		portalDescription?: string | null;

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
		clientToken?: string | null;

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
	export interface CreatePortalPostBodyFormProperties {

		/**
		 * A friendly name for the portal.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		portalName: FormControl<string | null | undefined>,

		/**
		 * A description for the portal.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		portalDescription: FormControl<string | null | undefined>,

		/**
		 * The AWS administrator's contact email address.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [^@]+@[^@]+
		 */
		portalContactEmail: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 * Pattern: .*
		 */
		roleArn: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePortalPostBodyFormGroup() {
		return new FormGroup<CreatePortalPostBodyFormProperties>({
			portalName: new FormControl<string | null | undefined>(undefined),
			portalDescription: new FormControl<string | null | undefined>(undefined),
			portalContactEmail: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreatePortalPostBodyPortalLogoImageFile {
		data?: string | null;
		type?: ImageFileType | null;
	}
	export interface CreatePortalPostBodyPortalLogoImageFileFormProperties {
		data: FormControl<string | null | undefined>,
		type: FormControl<ImageFileType | null | undefined>,
	}
	export function CreateCreatePortalPostBodyPortalLogoImageFileFormGroup() {
		return new FormGroup<CreatePortalPostBodyPortalLogoImageFileFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ImageFileType | null | undefined>(undefined),
		});

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
		projectDescription?: string | null;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateProjectPostBodyFormProperties {

		/**
		 * The ID of the portal in which to create the project.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		portalId: FormControl<string | null | undefined>,

		/**
		 * A friendly name for the project.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		projectName: FormControl<string | null | undefined>,

		/**
		 * A description for the project.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		projectDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateProjectPostBodyFormGroup() {
		return new FormGroup<CreateProjectPostBodyFormProperties>({
			portalId: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			projectDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
		clientToken?: string | null;
	}
	export interface UpdateAccessPolicyPutBodyFormProperties {

		/**
		 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
		 * Required
		 */
		accessPolicyPermission: FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessPolicyPutBodyFormGroup() {
		return new FormGroup<UpdateAccessPolicyPutBodyFormProperties>({
			accessPolicyPermission: new FormControl<DescribeAccessPolicyResponseAccessPolicyPermission | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAccessPolicyPutBodyAccessPolicyIdentity {

		/** Contains information for a user identity in an access policy. */
		user?: UserIdentity;

		/** Contains information for a group identity in an access policy. */
		group?: GroupIdentity;
	}
	export interface UpdateAccessPolicyPutBodyAccessPolicyIdentityFormProperties {
	}
	export function CreateUpdateAccessPolicyPutBodyAccessPolicyIdentityFormGroup() {
		return new FormGroup<UpdateAccessPolicyPutBodyAccessPolicyIdentityFormProperties>({
		});

	}

	export interface UpdateAccessPolicyPutBodyAccessPolicyResource {

		/** Identifies an AWS IoT SiteWise Monitor portal. */
		portal?: PortalResource;

		/** Identifies a specific AWS IoT SiteWise Monitor project. */
		project?: ProjectResource;
	}
	export interface UpdateAccessPolicyPutBodyAccessPolicyResourceFormProperties {
	}
	export function CreateUpdateAccessPolicyPutBodyAccessPolicyResourceFormGroup() {
		return new FormGroup<UpdateAccessPolicyPutBodyAccessPolicyResourceFormProperties>({
		});

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
		clientToken?: string | null;
	}
	export interface UpdateAssetPutBodyFormProperties {

		/**
		 * A unique, friendly name for the asset.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetName: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetPutBodyFormGroup() {
		return new FormGroup<UpdateAssetPutBodyFormProperties>({
			assetName: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

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
		assetModelDescription?: string | null;

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
		clientToken?: string | null;
	}
	export interface UpdateAssetModelPutBodyFormProperties {

		/**
		 * A unique, friendly name for the asset model.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetModelName: FormControl<string | null | undefined>,

		/**
		 * A description for the asset model.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		assetModelDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetModelPutBodyFormGroup() {
		return new FormGroup<UpdateAssetModelPutBodyFormProperties>({
			assetModelName: new FormControl<string | null | undefined>(undefined),
			assetModelDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

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
		dashboardDescription?: string | null;

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
		clientToken?: string | null;
	}
	export interface UpdateDashboardPutBodyFormProperties {

		/**
		 * A new friendly name for the dashboard.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		dashboardName: FormControl<string | null | undefined>,

		/**
		 * A new description for the dashboard.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		dashboardDescription: FormControl<string | null | undefined>,

		/**
		 * The new dashboard definition, as specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating Dashboards (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 0
		 * Pattern: .+
		 */
		dashboardDefinition: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDashboardPutBodyFormGroup() {
		return new FormGroup<UpdateDashboardPutBodyFormProperties>({
			dashboardName: new FormControl<string | null | undefined>(undefined),
			dashboardDescription: new FormControl<string | null | undefined>(undefined),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface UpdateGatewayPutBodyFormProperties {

		/**
		 * A unique, friendly name for the gateway.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		gatewayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayPutBodyFormGroup() {
		return new FormGroup<UpdateGatewayPutBodyFormProperties>({
			gatewayName: new FormControl<string | null | undefined>(undefined),
		});

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
		portalDescription?: string | null;

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
		clientToken?: string | null;
	}
	export interface UpdatePortalPutBodyFormProperties {

		/**
		 * A new friendly name for the portal.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		portalName: FormControl<string | null | undefined>,

		/**
		 * A new description for the portal.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		portalDescription: FormControl<string | null | undefined>,

		/**
		 * The AWS administrator's contact email address.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [^@]+@[^@]+
		 */
		portalContactEmail: FormControl<string | null | undefined>,

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 * Pattern: .*
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortalPutBodyFormGroup() {
		return new FormGroup<UpdatePortalPutBodyFormProperties>({
			portalName: new FormControl<string | null | undefined>(undefined),
			portalDescription: new FormControl<string | null | undefined>(undefined),
			portalContactEmail: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePortalPutBodyPortalLogoImage {
		id?: string | null;

		/** Contains an image file. */
		file?: ImageFile;
	}
	export interface UpdatePortalPutBodyPortalLogoImageFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortalPutBodyPortalLogoImageFormGroup() {
		return new FormGroup<UpdatePortalPutBodyPortalLogoImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

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
		projectDescription?: string | null;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string | null;
	}
	export interface UpdateProjectPutBodyFormProperties {

		/**
		 * A new friendly name for the project.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		projectName: FormControl<string | null | undefined>,

		/**
		 * A new description for the project.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		projectDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectPutBodyFormGroup() {
		return new FormGroup<UpdateProjectPutBodyFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined),
			projectDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssetPropertyPutBody {

		/**
		 * <p>The property alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the alias is removed from the property.</p>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		propertyAlias?: string | null;

		/** <p>The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p> */
		propertyNotificationState?: PropertyNotificationState | null;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken?: string | null;
	}
	export interface UpdateAssetPropertyPutBodyFormProperties {

		/**
		 * <p>The property alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the alias is removed from the property.</p>
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [^\u0000-\u001F\u007F]+
		 */
		propertyAlias: FormControl<string | null | undefined>,

		/** <p>The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, AWS IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p> */
		propertyNotificationState: FormControl<PropertyNotificationState | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetPropertyPutBodyFormGroup() {
		return new FormGroup<UpdateAssetPropertyPutBodyFormProperties>({
			propertyAlias: new FormControl<string | null | undefined>(undefined),
			propertyNotificationState: new FormControl<PropertyNotificationState | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutLoggingOptionsPutBody {

		/**
		 * Contains logging options.
		 * Required
		 */
		loggingOptions: PutLoggingOptionsPutBodyLoggingOptions;
	}
	export interface PutLoggingOptionsPutBodyFormProperties {
	}
	export function CreatePutLoggingOptionsPutBodyFormGroup() {
		return new FormGroup<PutLoggingOptionsPutBodyFormProperties>({
		});

	}

	export interface PutLoggingOptionsPutBodyLoggingOptions {
		level?: LoggingOptionsLevel | null;
	}
	export interface PutLoggingOptionsPutBodyLoggingOptionsFormProperties {
		level: FormControl<LoggingOptionsLevel | null | undefined>,
	}
	export function CreatePutLoggingOptionsPutBodyLoggingOptionsFormGroup() {
		return new FormGroup<PutLoggingOptionsPutBodyLoggingOptionsFormProperties>({
			level: new FormControl<LoggingOptionsLevel | null | undefined>(undefined),
		});

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
		clientToken?: string | null;
	}
	export interface DisassociateAssetsPostBodyFormProperties {

		/**
		 * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		hierarchyId: FormControl<string | null | undefined>,

		/**
		 * The ID of the child asset to disassociate.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 * Pattern: ^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$
		 */
		childAssetId: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 * Pattern: \S{36,64}
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAssetsPostBodyFormGroup() {
		return new FormGroup<DisassociateAssetsPostBodyFormProperties>({
			hierarchyId: new FormControl<string | null | undefined>(undefined),
			childAssetId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
	export interface UpdateGatewayCapabilityConfigurationPostBodyFormProperties {

		/**
		 * The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: ^[a-zA-Z]+:[a-zA-Z]+:[0-9]+$
		 */
		capabilityNamespace: FormControl<string | null | undefined>,

		/**
		 * The JSON document that defines the configuration for the gateway capability. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 1
		 */
		capabilityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayCapabilityConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateGatewayCapabilityConfigurationPostBodyFormProperties>({
			capabilityNamespace: new FormControl<string | null | undefined>(undefined),
			capabilityConfiguration: new FormControl<string | null | undefined>(undefined),
		});

	}

}

