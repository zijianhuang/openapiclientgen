import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchPutPropertyValuesResponse {

		/** Required */
		errorEntries: Array<BatchPutPropertyErrorEntry>;
	}
	export interface BatchPutPropertyValuesResponseFormProperties {
	}
	export function CreateBatchPutPropertyValuesResponseFormGroup() {
		return new FormGroup<BatchPutPropertyValuesResponseFormProperties>({
		});

	}


	/** An object that contains information about errors returned by the <code>BatchPutProperty</code> action. */
	export interface BatchPutPropertyErrorEntry {

		/** Required */
		errors: Array<BatchPutPropertyError>;
	}

	/** An object that contains information about errors returned by the <code>BatchPutProperty</code> action. */
	export interface BatchPutPropertyErrorEntryFormProperties {
	}
	export function CreateBatchPutPropertyErrorEntryFormGroup() {
		return new FormGroup<BatchPutPropertyErrorEntryFormProperties>({
		});

	}


	/** An error returned by the <code>BatchPutProperty</code> action. */
	export interface BatchPutPropertyError {

		/** Required */
		errorCode: string;

		/** Required */
		errorMessage: string;

		/** Required */
		entry: PropertyValueEntry;
	}

	/** An error returned by the <code>BatchPutProperty</code> action. */
	export interface BatchPutPropertyErrorFormProperties {

		/** Required */
		errorCode: FormControl<string | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutPropertyErrorFormGroup() {
		return new FormGroup<BatchPutPropertyErrorFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that specifies information about time series property values. This object is used and consumed by the <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html">BatchPutPropertyValues</a> action. */
	export interface PropertyValueEntry {

		/** Required */
		entityPropertyReference: EntityPropertyReference;
		propertyValues?: Array<PropertyValue>;
	}

	/** An object that specifies information about time series property values. This object is used and consumed by the <a href="https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_BatchPutPropertyValues.html">BatchPutPropertyValues</a> action. */
	export interface PropertyValueEntryFormProperties {
	}
	export function CreatePropertyValueEntryFormGroup() {
		return new FormGroup<PropertyValueEntryFormProperties>({
		});

	}


	/** An object that uniquely identifies an entity property. */
	export interface EntityPropertyReference {
		componentName?: string;
		externalIdProperty?: ExternalIdProperty;
		entityId?: string;

		/** Required */
		propertyName: string;
	}

	/** An object that uniquely identifies an entity property. */
	export interface EntityPropertyReferenceFormProperties {
		componentName: FormControl<string | null | undefined>,
		entityId: FormControl<string | null | undefined>,

		/** Required */
		propertyName: FormControl<string | null | undefined>,
	}
	export function CreateEntityPropertyReferenceFormGroup() {
		return new FormGroup<EntityPropertyReferenceFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			propertyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExternalIdProperty {
	}
	export interface ExternalIdPropertyFormProperties {
	}
	export function CreateExternalIdPropertyFormGroup() {
		return new FormGroup<ExternalIdPropertyFormProperties>({
		});

	}


	/** An object that contains information about a value for a time series property. */
	export interface PropertyValue {
		timestamp?: Date;

		/** Required */
		value: DataValue;
		time?: string;
	}

	/** An object that contains information about a value for a time series property. */
	export interface PropertyValueFormProperties {
		timestamp: FormControl<Date | null | undefined>,
		time: FormControl<string | null | undefined>,
	}
	export function CreatePropertyValueFormGroup() {
		return new FormGroup<PropertyValueFormProperties>({
			timestamp: new FormControl<Date | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that specifies a value for a property. */
	export interface DataValue {
		booleanValue?: boolean | null;
		doubleValue?: number | null;
		integerValue?: number | null;
		longValue?: number | null;
		stringValue?: string;
		listValue?: Array<DataValue>;
		mapValue?: DataValueMap;
		relationshipValue?: RelationshipValue;
		expression?: string;
	}

	/** An object that specifies a value for a property. */
	export interface DataValueFormProperties {
		booleanValue: FormControl<boolean | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		integerValue: FormControl<number | null | undefined>,
		longValue: FormControl<number | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
		expression: FormControl<string | null | undefined>,
	}
	export function CreateDataValueFormGroup() {
		return new FormGroup<DataValueFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			integerValue: new FormControl<number | null | undefined>(undefined),
			longValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataValueMap {
	}
	export interface DataValueMapFormProperties {
	}
	export function CreateDataValueMapFormGroup() {
		return new FormGroup<DataValueMapFormProperties>({
		});

	}


	/** A value that associates a component and an entity. */
	export interface RelationshipValue {
		targetEntityId?: string;
		targetComponentName?: string;
	}

	/** A value that associates a component and an entity. */
	export interface RelationshipValueFormProperties {
		targetEntityId: FormControl<string | null | undefined>,
		targetComponentName: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipValueFormGroup() {
		return new FormGroup<RelationshipValueFormProperties>({
			targetEntityId: new FormControl<string | null | undefined>(undefined),
			targetComponentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface CreateComponentTypeResponse {

		/** Required */
		arn: string;

		/** Required */
		creationDateTime: Date;

		/** Required */
		state: State;
	}
	export interface CreateComponentTypeResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<State | null | undefined>,
	}
	export function CreateCreateComponentTypeResponseFormGroup() {
		return new FormGroup<CreateComponentTypeResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<State | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum State { CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', ACTIVE = 'ACTIVE', ERROR = 'ERROR' }


	/** An object that sets information about a property. */
	export interface PropertyDefinitionRequest {
		dataType?: DataType;
		isRequiredInEntity?: boolean | null;
		isExternalId?: boolean | null;
		isStoredExternally?: boolean | null;
		isTimeSeries?: boolean | null;
		defaultValue?: DataValue;
		configuration?: Configuration;
		displayName?: string;
	}

	/** An object that sets information about a property. */
	export interface PropertyDefinitionRequestFormProperties {
		isRequiredInEntity: FormControl<boolean | null | undefined>,
		isExternalId: FormControl<boolean | null | undefined>,
		isStoredExternally: FormControl<boolean | null | undefined>,
		isTimeSeries: FormControl<boolean | null | undefined>,
		displayName: FormControl<string | null | undefined>,
	}
	export function CreatePropertyDefinitionRequestFormGroup() {
		return new FormGroup<PropertyDefinitionRequestFormProperties>({
			isRequiredInEntity: new FormControl<boolean | null | undefined>(undefined),
			isExternalId: new FormControl<boolean | null | undefined>(undefined),
			isStoredExternally: new FormControl<boolean | null | undefined>(undefined),
			isTimeSeries: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that specifies the data type of a property. */
	export interface DataType {

		/** Required */
		type: Type;
		nestedType?: DataType;
		allowedValues?: Array<DataValue>;
		unitOfMeasure?: string;
		relationship?: Relationship;
	}

	/** An object that specifies the data type of a property. */
	export interface DataTypeFormProperties {

		/** Required */
		type: FormControl<Type | null | undefined>,
		unitOfMeasure: FormControl<string | null | undefined>,
	}
	export function CreateDataTypeFormGroup() {
		return new FormGroup<DataTypeFormProperties>({
			type: new FormControl<Type | null | undefined>(undefined, [Validators.required]),
			unitOfMeasure: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Type { RELATIONSHIP = 'RELATIONSHIP', STRING = 'STRING', LONG = 'LONG', BOOLEAN = 'BOOLEAN', INTEGER = 'INTEGER', DOUBLE = 'DOUBLE', LIST = 'LIST', MAP = 'MAP' }


	/** An object that specifies a relationship with another component type. */
	export interface Relationship {
		targetComponentTypeId?: string;
		relationshipType?: string;
	}

	/** An object that specifies a relationship with another component type. */
	export interface RelationshipFormProperties {
		targetComponentTypeId: FormControl<string | null | undefined>,
		relationshipType: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipFormGroup() {
		return new FormGroup<RelationshipFormProperties>({
			targetComponentTypeId: new FormControl<string | null | undefined>(undefined),
			relationshipType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Configuration {
	}
	export interface ConfigurationFormProperties {
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
		});

	}


	/** The function request body. */
	export interface FunctionRequest {
		requiredProperties?: Array<string>;
		scope?: Scope;
		implementedBy?: DataConnector;
	}

	/** The function request body. */
	export interface FunctionRequestFormProperties {
		scope: FormControl<Scope | null | undefined>,
	}
	export function CreateFunctionRequestFormGroup() {
		return new FormGroup<FunctionRequestFormProperties>({
			scope: new FormControl<Scope | null | undefined>(undefined),
		});

	}

	export enum Scope { ENTITY = 'ENTITY', WORKSPACE = 'WORKSPACE' }


	/** The data connector. */
	export interface DataConnector {
		lambda?: LambdaFunction;
		isNative?: boolean | null;
	}

	/** The data connector. */
	export interface DataConnectorFormProperties {
		isNative: FormControl<boolean | null | undefined>,
	}
	export function CreateDataConnectorFormGroup() {
		return new FormGroup<DataConnectorFormProperties>({
			isNative: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Lambda function. */
	export interface LambdaFunction {

		/** Required */
		arn: string;
	}

	/** The Lambda function. */
	export interface LambdaFunctionFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionFormGroup() {
		return new FormGroup<LambdaFunctionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface PropertyGroupRequest {
		groupType?: GroupType;
		propertyNames?: Array<string>;
	}

	/** <p/> */
	export interface PropertyGroupRequestFormProperties {
		groupType: FormControl<GroupType | null | undefined>,
	}
	export function CreatePropertyGroupRequestFormGroup() {
		return new FormGroup<PropertyGroupRequestFormProperties>({
			groupType: new FormControl<GroupType | null | undefined>(undefined),
		});

	}

	export enum GroupType { TABULAR = 'TABULAR' }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateEntityResponse {

		/** Required */
		entityId: string;

		/** Required */
		arn: string;

		/** Required */
		creationDateTime: Date;

		/** Required */
		state: State;
	}
	export interface CreateEntityResponseFormProperties {

		/** Required */
		entityId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<State | null | undefined>,
	}
	export function CreateCreateEntityResponseFormGroup() {
		return new FormGroup<CreateEntityResponseFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<State | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that sets information about a component type create or update request. */
	export interface ComponentRequest {
		description?: string;
		componentTypeId?: string;

		/** An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object. */
		properties?: any;
		propertyGroups?: ComponentPropertyGroupRequests;
	}

	/** An object that sets information about a component type create or update request. */
	export interface ComponentRequestFormProperties {
		description: FormControl<string | null | undefined>,
		componentTypeId: FormControl<string | null | undefined>,

		/** An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateComponentRequestFormGroup() {
		return new FormGroup<ComponentRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface ComponentPropertyGroupRequests {
	}
	export interface ComponentPropertyGroupRequestsFormProperties {
	}
	export function CreateComponentPropertyGroupRequestsFormGroup() {
		return new FormGroup<ComponentPropertyGroupRequestsFormProperties>({
		});

	}

	export interface CreateSceneResponse {

		/** Required */
		arn: string;

		/** Required */
		creationDateTime: Date;
	}
	export interface CreateSceneResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateSceneResponseFormGroup() {
		return new FormGroup<CreateSceneResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSyncJobResponse {

		/** Required */
		arn: string;

		/** Required */
		creationDateTime: Date;

		/** Required */
		state: SyncJobState;
	}
	export interface CreateSyncJobResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<SyncJobState | null | undefined>,
	}
	export function CreateCreateSyncJobResponseFormGroup() {
		return new FormGroup<CreateSyncJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<SyncJobState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SyncJobState { CREATING = 'CREATING', INITIALIZING = 'INITIALIZING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', ERROR = 'ERROR' }

	export interface CreateWorkspaceResponse {

		/** Required */
		arn: string;

		/** Required */
		creationDateTime: Date;
	}
	export interface CreateWorkspaceResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateWorkspaceResponseFormGroup() {
		return new FormGroup<CreateWorkspaceResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteComponentTypeResponse {

		/** Required */
		state: State;
	}
	export interface DeleteComponentTypeResponseFormProperties {

		/** Required */
		state: FormControl<State | null | undefined>,
	}
	export function CreateDeleteComponentTypeResponseFormGroup() {
		return new FormGroup<DeleteComponentTypeResponseFormProperties>({
			state: new FormControl<State | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEntityResponse {

		/** Required */
		state: State;
	}
	export interface DeleteEntityResponseFormProperties {

		/** Required */
		state: FormControl<State | null | undefined>,
	}
	export function CreateDeleteEntityResponseFormGroup() {
		return new FormGroup<DeleteEntityResponseFormProperties>({
			state: new FormControl<State | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSceneResponse {
	}
	export interface DeleteSceneResponseFormProperties {
	}
	export function CreateDeleteSceneResponseFormGroup() {
		return new FormGroup<DeleteSceneResponseFormProperties>({
		});

	}

	export interface DeleteSyncJobResponse {

		/** Required */
		state: SyncJobState;
	}
	export interface DeleteSyncJobResponseFormProperties {

		/** Required */
		state: FormControl<SyncJobState | null | undefined>,
	}
	export function CreateDeleteSyncJobResponseFormGroup() {
		return new FormGroup<DeleteSyncJobResponseFormProperties>({
			state: new FormControl<SyncJobState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkspaceResponse {
	}
	export interface DeleteWorkspaceResponseFormProperties {
	}
	export function CreateDeleteWorkspaceResponseFormGroup() {
		return new FormGroup<DeleteWorkspaceResponseFormProperties>({
		});

	}

	export interface ExecuteQueryResponse {
		columnDescriptions?: Array<ColumnDescription>;
		rows?: Array<Row>;
		nextToken?: string;
	}
	export interface ExecuteQueryResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateExecuteQueryResponseFormGroup() {
		return new FormGroup<ExecuteQueryResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of the column in the query results. */
	export interface ColumnDescription {
		name?: string;
		type?: ColumnType;
	}

	/** A description of the column in the query results. */
	export interface ColumnDescriptionFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<ColumnType | null | undefined>,
	}
	export function CreateColumnDescriptionFormGroup() {
		return new FormGroup<ColumnDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ColumnType | null | undefined>(undefined),
		});

	}

	export enum ColumnType { NODE = 'NODE', EDGE = 'EDGE', VALUE = 'VALUE' }


	/** Represents a single row in the query results. */
	export interface Row {
		rowData?: Array<QueryResultValue>;
	}

	/** Represents a single row in the query results. */
	export interface RowFormProperties {
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
		});

	}

	export interface QueryResultValue {
	}
	export interface QueryResultValueFormProperties {
	}
	export function CreateQueryResultValueFormGroup() {
		return new FormGroup<QueryResultValueFormProperties>({
		});

	}

	export interface QueryTimeoutException {
	}
	export interface QueryTimeoutExceptionFormProperties {
	}
	export function CreateQueryTimeoutExceptionFormGroup() {
		return new FormGroup<QueryTimeoutExceptionFormProperties>({
		});

	}

	export interface GetComponentTypeResponse {

		/** Required */
		workspaceId: string;
		isSingleton?: boolean | null;

		/** Required */
		componentTypeId: string;
		description?: string;
		propertyDefinitions?: PropertyDefinitionsResponse;
		extendsFrom?: Array<string>;
		functions?: FunctionsResponse;

		/** Required */
		creationDateTime: Date;

		/** Required */
		updateDateTime: Date;

		/** Required */
		arn: string;
		isAbstract?: boolean | null;
		isSchemaInitialized?: boolean | null;
		status?: Status;
		propertyGroups?: PropertyGroupsResponse;
		syncSource?: string;
		componentTypeName?: string;
	}
	export interface GetComponentTypeResponseFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
		isSingleton: FormControl<boolean | null | undefined>,

		/** Required */
		componentTypeId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		isAbstract: FormControl<boolean | null | undefined>,
		isSchemaInitialized: FormControl<boolean | null | undefined>,
		syncSource: FormControl<string | null | undefined>,
		componentTypeName: FormControl<string | null | undefined>,
	}
	export function CreateGetComponentTypeResponseFormGroup() {
		return new FormGroup<GetComponentTypeResponseFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isSingleton: new FormControl<boolean | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isAbstract: new FormControl<boolean | null | undefined>(undefined),
			isSchemaInitialized: new FormControl<boolean | null | undefined>(undefined),
			syncSource: new FormControl<string | null | undefined>(undefined),
			componentTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PropertyDefinitionsResponse {
	}
	export interface PropertyDefinitionsResponseFormProperties {
	}
	export function CreatePropertyDefinitionsResponseFormGroup() {
		return new FormGroup<PropertyDefinitionsResponseFormProperties>({
		});

	}

	export interface FunctionsResponse {
	}
	export interface FunctionsResponseFormProperties {
	}
	export function CreateFunctionsResponseFormGroup() {
		return new FormGroup<FunctionsResponseFormProperties>({
		});

	}


	/** An object that represents the status of an entity, component, component type, or workspace. */
	export interface Status {
		state?: State;
		error?: ErrorDetails;
	}

	/** An object that represents the status of an entity, component, component type, or workspace. */
	export interface StatusFormProperties {
		state: FormControl<State | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			state: new FormControl<State | null | undefined>(undefined),
		});

	}


	/** The error details. */
	export interface ErrorDetails {
		code?: ErrorCode;
		message?: string;
	}

	/** The error details. */
	export interface ErrorDetailsFormProperties {
		code: FormControl<ErrorCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { VALIDATION_ERROR = 'VALIDATION_ERROR', INTERNAL_FAILURE = 'INTERNAL_FAILURE', SYNC_INITIALIZING_ERROR = 'SYNC_INITIALIZING_ERROR', SYNC_CREATING_ERROR = 'SYNC_CREATING_ERROR', SYNC_PROCESSING_ERROR = 'SYNC_PROCESSING_ERROR' }

	export interface PropertyGroupsResponse {
	}
	export interface PropertyGroupsResponseFormProperties {
	}
	export function CreatePropertyGroupsResponseFormGroup() {
		return new FormGroup<PropertyGroupsResponseFormProperties>({
		});

	}

	export interface GetEntityResponse {

		/** Required */
		entityId: string;

		/** Required */
		entityName: string;

		/** Required */
		arn: string;

		/** Required */
		status: Status;

		/** Required */
		workspaceId: string;
		description?: string;
		components?: ComponentsMap;

		/** Required */
		parentEntityId: string;

		/** Required */
		hasChildEntities: boolean;

		/** Required */
		creationDateTime: Date;

		/** Required */
		updateDateTime: Date;
		syncSource?: string;
	}
	export interface GetEntityResponseFormProperties {

		/** Required */
		entityId: FormControl<string | null | undefined>,

		/** Required */
		entityName: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		parentEntityId: FormControl<string | null | undefined>,

		/** Required */
		hasChildEntities: FormControl<boolean | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
		syncSource: FormControl<string | null | undefined>,
	}
	export function CreateGetEntityResponseFormGroup() {
		return new FormGroup<GetEntityResponseFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entityName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			parentEntityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hasChildEntities: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			syncSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComponentsMap {
	}
	export interface ComponentsMapFormProperties {
	}
	export function CreateComponentsMapFormGroup() {
		return new FormGroup<ComponentsMapFormProperties>({
		});

	}

	export interface GetPricingPlanResponse {

		/** Required */
		currentPricingPlan: PricingPlan;
		pendingPricingPlan?: PricingPlan;
	}
	export interface GetPricingPlanResponseFormProperties {
	}
	export function CreateGetPricingPlanResponseFormGroup() {
		return new FormGroup<GetPricingPlanResponseFormProperties>({
		});

	}


	/** The pricing plan. */
	export interface PricingPlan {
		billableEntityCount?: number | null;
		bundleInformation?: BundleInformation;

		/** Required */
		effectiveDateTime: Date;

		/** Required */
		pricingMode: PricingMode;

		/** Required */
		updateDateTime: Date;

		/** Required */
		updateReason: UpdateReason;
	}

	/** The pricing plan. */
	export interface PricingPlanFormProperties {
		billableEntityCount: FormControl<number | null | undefined>,

		/** Required */
		effectiveDateTime: FormControl<Date | null | undefined>,

		/** Required */
		pricingMode: FormControl<PricingMode | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateReason: FormControl<UpdateReason | null | undefined>,
	}
	export function CreatePricingPlanFormGroup() {
		return new FormGroup<PricingPlanFormProperties>({
			billableEntityCount: new FormControl<number | null | undefined>(undefined),
			effectiveDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			pricingMode: new FormControl<PricingMode | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateReason: new FormControl<UpdateReason | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the pricing bundle. */
	export interface BundleInformation {

		/** Required */
		bundleNames: Array<string>;
		pricingTier?: PricingTier;
	}

	/** Information about the pricing bundle. */
	export interface BundleInformationFormProperties {
		pricingTier: FormControl<PricingTier | null | undefined>,
	}
	export function CreateBundleInformationFormGroup() {
		return new FormGroup<BundleInformationFormProperties>({
			pricingTier: new FormControl<PricingTier | null | undefined>(undefined),
		});

	}

	export enum PricingTier { TIER_1 = 'TIER_1', TIER_2 = 'TIER_2', TIER_3 = 'TIER_3', TIER_4 = 'TIER_4' }

	export enum PricingMode { BASIC = 'BASIC', STANDARD = 'STANDARD', TIERED_BUNDLE = 'TIERED_BUNDLE' }

	export enum UpdateReason { DEFAULT = 'DEFAULT', PRICING_TIER_UPDATE = 'PRICING_TIER_UPDATE', ENTITY_COUNT_UPDATE = 'ENTITY_COUNT_UPDATE', PRICING_MODE_UPDATE = 'PRICING_MODE_UPDATE', OVERWRITTEN = 'OVERWRITTEN' }

	export interface GetPropertyValueResponse {
		propertyValues?: PropertyLatestValueMap;
		nextToken?: string;
		tabularPropertyValues?: Array<Array<PropertyTableValue>>;
	}
	export interface GetPropertyValueResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetPropertyValueResponseFormGroup() {
		return new FormGroup<GetPropertyValueResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PropertyLatestValueMap {
	}
	export interface PropertyLatestValueMapFormProperties {
	}
	export function CreatePropertyLatestValueMapFormGroup() {
		return new FormGroup<PropertyLatestValueMapFormProperties>({
		});

	}

	export interface PropertyTableValue {
	}
	export interface PropertyTableValueFormProperties {
	}
	export function CreatePropertyTableValueFormGroup() {
		return new FormGroup<PropertyTableValueFormProperties>({
		});

	}


	/** Filter criteria that orders the return output. It can be sorted in ascending or descending order. */
	export interface OrderBy {
		order?: Order;

		/** Required */
		propertyName: string;
	}

	/** Filter criteria that orders the return output. It can be sorted in ascending or descending order. */
	export interface OrderByFormProperties {
		order: FormControl<Order | null | undefined>,

		/** Required */
		propertyName: FormControl<string | null | undefined>,
	}
	export function CreateOrderByFormGroup() {
		return new FormGroup<OrderByFormProperties>({
			order: new FormControl<Order | null | undefined>(undefined),
			propertyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Order { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }


	/** An object that filters items returned by a property request. */
	export interface PropertyFilter {
		propertyName?: string;
		operator?: string;
		value?: DataValue;
	}

	/** An object that filters items returned by a property request. */
	export interface PropertyFilterFormProperties {
		propertyName: FormControl<string | null | undefined>,
		operator: FormControl<string | null | undefined>,
	}
	export function CreatePropertyFilterFormGroup() {
		return new FormGroup<PropertyFilterFormProperties>({
			propertyName: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectorFailureException {
	}
	export interface ConnectorFailureExceptionFormProperties {
	}
	export function CreateConnectorFailureExceptionFormGroup() {
		return new FormGroup<ConnectorFailureExceptionFormProperties>({
		});

	}

	export interface ConnectorTimeoutException {
	}
	export interface ConnectorTimeoutExceptionFormProperties {
	}
	export function CreateConnectorTimeoutExceptionFormGroup() {
		return new FormGroup<ConnectorTimeoutExceptionFormProperties>({
		});

	}

	export interface GetPropertyValueHistoryResponse {

		/** Required */
		propertyValues: Array<PropertyValueHistory>;
		nextToken?: string;
	}
	export interface GetPropertyValueHistoryResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetPropertyValueHistoryResponseFormGroup() {
		return new FormGroup<GetPropertyValueHistoryResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The history of values for a time series property. */
	export interface PropertyValueHistory {

		/** Required */
		entityPropertyReference: EntityPropertyReference;
		values?: Array<PropertyValue>;
	}

	/** The history of values for a time series property. */
	export interface PropertyValueHistoryFormProperties {
	}
	export function CreatePropertyValueHistoryFormGroup() {
		return new FormGroup<PropertyValueHistoryFormProperties>({
		});

	}

	export enum InterpolationType { LINEAR = 'LINEAR' }

	export interface GetSceneResponse {

		/** Required */
		workspaceId: string;

		/** Required */
		sceneId: string;

		/** Required */
		contentLocation: string;

		/** Required */
		arn: string;

		/** Required */
		creationDateTime: Date;

		/** Required */
		updateDateTime: Date;
		description?: string;
		capabilities?: Array<string>;
		sceneMetadata?: SceneMetadataMap;
		generatedSceneMetadata?: GeneratedSceneMetadataMap;
		error?: SceneError;
	}
	export interface GetSceneResponseFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,

		/** Required */
		sceneId: FormControl<string | null | undefined>,

		/** Required */
		contentLocation: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateGetSceneResponseFormGroup() {
		return new FormGroup<GetSceneResponseFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sceneId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SceneMetadataMap {
	}
	export interface SceneMetadataMapFormProperties {
	}
	export function CreateSceneMetadataMapFormGroup() {
		return new FormGroup<SceneMetadataMapFormProperties>({
		});

	}

	export interface GeneratedSceneMetadataMap {
	}
	export interface GeneratedSceneMetadataMapFormProperties {
	}
	export function CreateGeneratedSceneMetadataMapFormGroup() {
		return new FormGroup<GeneratedSceneMetadataMapFormProperties>({
		});

	}


	/** The scene error. */
	export interface SceneError {
		code?: SceneErrorCode;
		message?: string;
	}

	/** The scene error. */
	export interface SceneErrorFormProperties {
		code: FormControl<SceneErrorCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateSceneErrorFormGroup() {
		return new FormGroup<SceneErrorFormProperties>({
			code: new FormControl<SceneErrorCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SceneErrorCode { MATTERPORT_ERROR = 'MATTERPORT_ERROR' }

	export interface GetSyncJobResponse {

		/** Required */
		arn: string;

		/** Required */
		workspaceId: string;

		/** Required */
		syncSource: string;

		/** Required */
		syncRole: string;

		/** Required */
		status: SyncJobStatus;

		/** Required */
		creationDateTime: Date;

		/** Required */
		updateDateTime: Date;
	}
	export interface GetSyncJobResponseFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,

		/** Required */
		syncSource: FormControl<string | null | undefined>,

		/** Required */
		syncRole: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetSyncJobResponseFormGroup() {
		return new FormGroup<GetSyncJobResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			syncSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			syncRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The SyncJob status. */
	export interface SyncJobStatus {
		state?: SyncJobState;
		error?: ErrorDetails;
	}

	/** The SyncJob status. */
	export interface SyncJobStatusFormProperties {
		state: FormControl<SyncJobState | null | undefined>,
	}
	export function CreateSyncJobStatusFormGroup() {
		return new FormGroup<SyncJobStatusFormProperties>({
			state: new FormControl<SyncJobState | null | undefined>(undefined),
		});

	}

	export interface GetWorkspaceResponse {

		/** Required */
		workspaceId: string;

		/** Required */
		arn: string;
		description?: string;

		/** Required */
		s3Location: string;

		/** Required */
		role: string;

		/** Required */
		creationDateTime: Date;

		/** Required */
		updateDateTime: Date;
	}
	export interface GetWorkspaceResponseFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		s3Location: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetWorkspaceResponseFormGroup() {
		return new FormGroup<GetWorkspaceResponseFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			s3Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListComponentTypesResponse {

		/** Required */
		workspaceId: string;

		/** Required */
		componentTypeSummaries: Array<ComponentTypeSummary>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListComponentTypesResponseFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComponentTypesResponseFormGroup() {
		return new FormGroup<ListComponentTypesResponseFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains information about a component type. */
	export interface ComponentTypeSummary {

		/** Required */
		arn: string;

		/** Required */
		componentTypeId: string;

		/** Required */
		creationDateTime: Date;

		/** Required */
		updateDateTime: Date;
		description?: string;
		status?: Status;
		componentTypeName?: string;
	}

	/** An object that contains information about a component type. */
	export interface ComponentTypeSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		componentTypeId: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		componentTypeName: FormControl<string | null | undefined>,
	}
	export function CreateComponentTypeSummaryFormGroup() {
		return new FormGroup<ComponentTypeSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			componentTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An object that filters items in a list of component types.</p> <note> <p>Only one object is accepted as a valid input.</p> </note> */
	export interface ListComponentTypesFilter {
		extendsFrom?: string;
		namespace?: string;
		isAbstract?: boolean | null;
	}

	/** <p>An object that filters items in a list of component types.</p> <note> <p>Only one object is accepted as a valid input.</p> </note> */
	export interface ListComponentTypesFilterFormProperties {
		extendsFrom: FormControl<string | null | undefined>,
		namespace: FormControl<string | null | undefined>,
		isAbstract: FormControl<boolean | null | undefined>,
	}
	export function CreateListComponentTypesFilterFormGroup() {
		return new FormGroup<ListComponentTypesFilterFormProperties>({
			extendsFrom: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			isAbstract: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListEntitiesResponse {
		entitySummaries?: Array<EntitySummary>;
		nextToken?: string;
	}
	export interface ListEntitiesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesResponseFormGroup() {
		return new FormGroup<ListEntitiesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains information about an entity. */
	export interface EntitySummary {

		/** Required */
		entityId: string;

		/** Required */
		entityName: string;

		/** Required */
		arn: string;
		parentEntityId?: string;

		/** Required */
		status: Status;
		description?: string;
		hasChildEntities?: boolean | null;

		/** Required */
		creationDateTime: Date;

		/** Required */
		updateDateTime: Date;
	}

	/** An object that contains information about an entity. */
	export interface EntitySummaryFormProperties {

		/** Required */
		entityId: FormControl<string | null | undefined>,

		/** Required */
		entityName: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		parentEntityId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		hasChildEntities: FormControl<boolean | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateEntitySummaryFormGroup() {
		return new FormGroup<EntitySummaryFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entityName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentEntityId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			hasChildEntities: new FormControl<boolean | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that filters items in a list of entities. */
	export interface ListEntitiesFilter {
		parentEntityId?: string;
		componentTypeId?: string;
		externalId?: string;
	}

	/** An object that filters items in a list of entities. */
	export interface ListEntitiesFilterFormProperties {
		parentEntityId: FormControl<string | null | undefined>,
		componentTypeId: FormControl<string | null | undefined>,
		externalId: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesFilterFormGroup() {
		return new FormGroup<ListEntitiesFilterFormProperties>({
			parentEntityId: new FormControl<string | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListScenesResponse {
		sceneSummaries?: Array<SceneSummary>;
		nextToken?: string;
	}
	export interface ListScenesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScenesResponseFormGroup() {
		return new FormGroup<ListScenesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains information about a scene. */
	export interface SceneSummary {

		/** Required */
		sceneId: string;

		/** Required */
		contentLocation: string;

		/** Required */
		arn: string;

		/** Required */
		creationDateTime: Date;

		/** Required */
		updateDateTime: Date;
		description?: string;
	}

	/** An object that contains information about a scene. */
	export interface SceneSummaryFormProperties {

		/** Required */
		sceneId: FormControl<string | null | undefined>,

		/** Required */
		contentLocation: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateSceneSummaryFormGroup() {
		return new FormGroup<SceneSummaryFormProperties>({
			sceneId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncJobsResponse {
		syncJobSummaries?: Array<SyncJobSummary>;
		nextToken?: string;
	}
	export interface ListSyncJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSyncJobsResponseFormGroup() {
		return new FormGroup<ListSyncJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SyncJob summary. */
	export interface SyncJobSummary {
		arn?: string;
		workspaceId?: string;
		syncSource?: string;
		status?: SyncJobStatus;
		creationDateTime?: Date;
		updateDateTime?: Date;
	}

	/** The SyncJob summary. */
	export interface SyncJobSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		workspaceId: FormControl<string | null | undefined>,
		syncSource: FormControl<string | null | undefined>,
		creationDateTime: FormControl<Date | null | undefined>,
		updateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSyncJobSummaryFormGroup() {
		return new FormGroup<SyncJobSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
			syncSource: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined),
			updateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSyncResourcesResponse {
		syncResources?: Array<SyncResourceSummary>;
		nextToken?: string;
	}
	export interface ListSyncResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSyncResourcesResponseFormGroup() {
		return new FormGroup<ListSyncResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The sync resource summary. */
	export interface SyncResourceSummary {
		resourceType?: SyncResourceType;
		externalId?: string;
		resourceId?: string;
		status?: SyncResourceStatus;
		updateDateTime?: Date;
	}

	/** The sync resource summary. */
	export interface SyncResourceSummaryFormProperties {
		resourceType: FormControl<SyncResourceType | null | undefined>,
		externalId: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		updateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSyncResourceSummaryFormGroup() {
		return new FormGroup<SyncResourceSummaryFormProperties>({
			resourceType: new FormControl<SyncResourceType | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			updateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SyncResourceType { ENTITY = 'ENTITY', COMPONENT_TYPE = 'COMPONENT_TYPE' }


	/** The sync resource status. */
	export interface SyncResourceStatus {
		state?: SyncResourceState;
		error?: ErrorDetails;
	}

	/** The sync resource status. */
	export interface SyncResourceStatusFormProperties {
		state: FormControl<SyncResourceState | null | undefined>,
	}
	export function CreateSyncResourceStatusFormGroup() {
		return new FormGroup<SyncResourceStatusFormProperties>({
			state: new FormControl<SyncResourceState | null | undefined>(undefined),
		});

	}

	export enum SyncResourceState { INITIALIZING = 'INITIALIZING', PROCESSING = 'PROCESSING', DELETED = 'DELETED', IN_SYNC = 'IN_SYNC', ERROR = 'ERROR' }


	/** The sync resource filter. */
	export interface SyncResourceFilter {
		state?: SyncResourceState;
		resourceType?: SyncResourceType;
		resourceId?: string;
		externalId?: string;
	}

	/** The sync resource filter. */
	export interface SyncResourceFilterFormProperties {
		state: FormControl<SyncResourceState | null | undefined>,
		resourceType: FormControl<SyncResourceType | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		externalId: FormControl<string | null | undefined>,
	}
	export function CreateSyncResourceFilterFormGroup() {
		return new FormGroup<SyncResourceFilterFormProperties>({
			state: new FormControl<SyncResourceState | null | undefined>(undefined),
			resourceType: new FormControl<SyncResourceType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
		nextToken?: string;
	}
	export interface ListTagsForResourceResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface ListWorkspacesResponse {
		workspaceSummaries?: Array<WorkspaceSummary>;
		nextToken?: string;
	}
	export interface ListWorkspacesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkspacesResponseFormGroup() {
		return new FormGroup<ListWorkspacesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains information about a workspace. */
	export interface WorkspaceSummary {

		/** Required */
		workspaceId: string;

		/** Required */
		arn: string;
		description?: string;

		/** Required */
		creationDateTime: Date;

		/** Required */
		updateDateTime: Date;
	}

	/** An object that contains information about a workspace. */
	export interface WorkspaceSummaryFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkspaceSummaryFormGroup() {
		return new FormGroup<WorkspaceSummaryFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

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

	export interface UpdateComponentTypeResponse {

		/** Required */
		workspaceId: string;

		/** Required */
		arn: string;

		/** Required */
		componentTypeId: string;

		/** Required */
		state: State;
	}
	export interface UpdateComponentTypeResponseFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		componentTypeId: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<State | null | undefined>,
	}
	export function CreateUpdateComponentTypeResponseFormGroup() {
		return new FormGroup<UpdateComponentTypeResponseFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<State | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEntityResponse {

		/** Required */
		updateDateTime: Date;

		/** Required */
		state: State;
	}
	export interface UpdateEntityResponseFormProperties {

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,

		/** Required */
		state: FormControl<State | null | undefined>,
	}
	export function CreateUpdateEntityResponseFormGroup() {
		return new FormGroup<UpdateEntityResponseFormProperties>({
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<State | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The component update request. */
	export interface ComponentUpdateRequest {
		updateType?: ComponentUpdateType;
		description?: string;
		componentTypeId?: string;
		propertyUpdates?: PropertyRequests;
		propertyGroupUpdates?: ComponentPropertyGroupRequests;
	}

	/** The component update request. */
	export interface ComponentUpdateRequestFormProperties {
		updateType: FormControl<ComponentUpdateType | null | undefined>,
		description: FormControl<string | null | undefined>,
		componentTypeId: FormControl<string | null | undefined>,
	}
	export function CreateComponentUpdateRequestFormGroup() {
		return new FormGroup<ComponentUpdateRequestFormProperties>({
			updateType: new FormControl<ComponentUpdateType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComponentUpdateType { CREATE = 'CREATE', UPDATE = 'UPDATE', DELETE = 'DELETE' }

	export interface PropertyRequests {
	}
	export interface PropertyRequestsFormProperties {
	}
	export function CreatePropertyRequestsFormGroup() {
		return new FormGroup<PropertyRequestsFormProperties>({
		});

	}

	export enum ParentEntityUpdateType { UPDATE = 'UPDATE', DELETE = 'DELETE' }

	export interface UpdatePricingPlanResponse {

		/** Required */
		currentPricingPlan: PricingPlan;
		pendingPricingPlan?: PricingPlan;
	}
	export interface UpdatePricingPlanResponseFormProperties {
	}
	export function CreateUpdatePricingPlanResponseFormGroup() {
		return new FormGroup<UpdatePricingPlanResponseFormProperties>({
		});

	}

	export interface UpdateSceneResponse {

		/** Required */
		updateDateTime: Date;
	}
	export interface UpdateSceneResponseFormProperties {

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateSceneResponseFormGroup() {
		return new FormGroup<UpdateSceneResponseFormProperties>({
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWorkspaceResponse {

		/** Required */
		updateDateTime: Date;
	}
	export interface UpdateWorkspaceResponseFormProperties {

		/** Required */
		updateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateWorkspaceResponseFormGroup() {
		return new FormGroup<UpdateWorkspaceResponseFormProperties>({
			updateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchPutPropertyValuesRequest {

		/** Required */
		entries: Array<PropertyValueEntry>;
	}
	export interface BatchPutPropertyValuesRequestFormProperties {
	}
	export function CreateBatchPutPropertyValuesRequestFormGroup() {
		return new FormGroup<BatchPutPropertyValuesRequestFormProperties>({
		});

	}

	export enum PropertyGroupUpdateType { UPDATE = 'UPDATE', DELETE = 'DELETE', CREATE = 'CREATE' }


	/** The component property group request. */
	export interface ComponentPropertyGroupRequest {
		groupType?: GroupType;
		propertyNames?: Array<string>;
		updateType?: PropertyGroupUpdateType;
	}

	/** The component property group request. */
	export interface ComponentPropertyGroupRequestFormProperties {
		groupType: FormControl<GroupType | null | undefined>,
		updateType: FormControl<PropertyGroupUpdateType | null | undefined>,
	}
	export function CreateComponentPropertyGroupRequestFormGroup() {
		return new FormGroup<ComponentPropertyGroupRequestFormProperties>({
			groupType: new FormControl<GroupType | null | undefined>(undefined),
			updateType: new FormControl<PropertyGroupUpdateType | null | undefined>(undefined),
		});

	}


	/** The component property group response. */
	export interface ComponentPropertyGroupResponse {

		/** Required */
		groupType: GroupType;

		/** Required */
		propertyNames: Array<string>;

		/** Required */
		isInherited: boolean;
	}

	/** The component property group response. */
	export interface ComponentPropertyGroupResponseFormProperties {

		/** Required */
		groupType: FormControl<GroupType | null | undefined>,

		/** Required */
		isInherited: FormControl<boolean | null | undefined>,
	}
	export function CreateComponentPropertyGroupResponseFormGroup() {
		return new FormGroup<ComponentPropertyGroupResponseFormProperties>({
			groupType: new FormControl<GroupType | null | undefined>(undefined, [Validators.required]),
			isInherited: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ComponentPropertyGroupResponses {
	}
	export interface ComponentPropertyGroupResponsesFormProperties {
	}
	export function CreateComponentPropertyGroupResponsesFormGroup() {
		return new FormGroup<ComponentPropertyGroupResponsesFormProperties>({
		});

	}


	/** An object that returns information about a component type create or update request. */
	export interface ComponentResponse {
		componentName?: string;
		description?: string;
		componentTypeId?: string;
		status?: Status;
		definedIn?: string;

		/** An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object. */
		properties?: any;
		propertyGroups?: ComponentPropertyGroupResponses;
		syncSource?: string;
	}

	/** An object that returns information about a component type create or update request. */
	export interface ComponentResponseFormProperties {
		componentName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		componentTypeId: FormControl<string | null | undefined>,
		definedIn: FormControl<string | null | undefined>,

		/** An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object. */
		properties: FormControl<any | null | undefined>,
		syncSource: FormControl<string | null | undefined>,
	}
	export function CreateComponentResponseFormGroup() {
		return new FormGroup<ComponentResponseFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined),
			definedIn: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			syncSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComponentUpdatesMapRequest {
	}
	export interface ComponentUpdatesMapRequestFormProperties {
	}
	export function CreateComponentUpdatesMapRequestFormGroup() {
		return new FormGroup<ComponentUpdatesMapRequestFormProperties>({
		});

	}

	export interface ComponentsMapRequest {
	}
	export interface ComponentsMapRequestFormProperties {
	}
	export function CreateComponentsMapRequestFormGroup() {
		return new FormGroup<ComponentsMapRequestFormProperties>({
		});

	}

	export interface PropertyDefinitionsRequest {
	}
	export interface PropertyDefinitionsRequestFormProperties {
	}
	export function CreatePropertyDefinitionsRequestFormGroup() {
		return new FormGroup<PropertyDefinitionsRequestFormProperties>({
		});

	}

	export interface FunctionsRequest {
	}
	export interface FunctionsRequestFormProperties {
	}
	export function CreateFunctionsRequestFormGroup() {
		return new FormGroup<FunctionsRequestFormProperties>({
		});

	}

	export interface PropertyGroupsRequest {
	}
	export interface PropertyGroupsRequestFormProperties {
	}
	export function CreatePropertyGroupsRequestFormGroup() {
		return new FormGroup<PropertyGroupsRequestFormProperties>({
		});

	}

	export interface CreateComponentTypeRequest {
		isSingleton?: boolean | null;
		description?: string;
		propertyDefinitions?: PropertyDefinitionsRequest;
		extendsFrom?: Array<string>;
		functions?: FunctionsRequest;
		tags?: TagMap;
		propertyGroups?: PropertyGroupsRequest;
		componentTypeName?: string;
	}
	export interface CreateComponentTypeRequestFormProperties {
		isSingleton: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		componentTypeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentTypeRequestFormGroup() {
		return new FormGroup<CreateComponentTypeRequestFormProperties>({
			isSingleton: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			componentTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEntityRequest {
		entityId?: string;

		/** Required */
		entityName: string;
		description?: string;
		components?: ComponentsMapRequest;
		parentEntityId?: string;
		tags?: TagMap;
	}
	export interface CreateEntityRequestFormProperties {
		entityId: FormControl<string | null | undefined>,

		/** Required */
		entityName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		parentEntityId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEntityRequestFormGroup() {
		return new FormGroup<CreateEntityRequestFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined),
			entityName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			parentEntityId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSceneRequest {

		/** Required */
		sceneId: string;

		/** Required */
		contentLocation: string;
		description?: string;
		capabilities?: Array<string>;
		tags?: TagMap;
		sceneMetadata?: SceneMetadataMap;
	}
	export interface CreateSceneRequestFormProperties {

		/** Required */
		sceneId: FormControl<string | null | undefined>,

		/** Required */
		contentLocation: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSceneRequestFormGroup() {
		return new FormGroup<CreateSceneRequestFormProperties>({
			sceneId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contentLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSyncJobRequest {

		/** Required */
		syncRole: string;
		tags?: TagMap;
	}
	export interface CreateSyncJobRequestFormProperties {

		/** Required */
		syncRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateSyncJobRequestFormGroup() {
		return new FormGroup<CreateSyncJobRequestFormProperties>({
			syncRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkspaceRequest {
		description?: string;

		/** Required */
		s3Location: string;

		/** Required */
		role: string;
		tags?: TagMap;
	}
	export interface CreateWorkspaceRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		s3Location: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspaceRequestFormGroup() {
		return new FormGroup<CreateWorkspaceRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			s3Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteComponentTypeRequest {
	}
	export interface DeleteComponentTypeRequestFormProperties {
	}
	export function CreateDeleteComponentTypeRequestFormGroup() {
		return new FormGroup<DeleteComponentTypeRequestFormProperties>({
		});

	}

	export interface DeleteEntityRequest {
	}
	export interface DeleteEntityRequestFormProperties {
	}
	export function CreateDeleteEntityRequestFormGroup() {
		return new FormGroup<DeleteEntityRequestFormProperties>({
		});

	}

	export interface DeleteSceneRequest {
	}
	export interface DeleteSceneRequestFormProperties {
	}
	export function CreateDeleteSceneRequestFormGroup() {
		return new FormGroup<DeleteSceneRequestFormProperties>({
		});

	}

	export interface DeleteSyncJobRequest {
	}
	export interface DeleteSyncJobRequestFormProperties {
	}
	export function CreateDeleteSyncJobRequestFormGroup() {
		return new FormGroup<DeleteSyncJobRequestFormProperties>({
		});

	}

	export interface DeleteWorkspaceRequest {
	}
	export interface DeleteWorkspaceRequestFormProperties {
	}
	export function CreateDeleteWorkspaceRequestFormGroup() {
		return new FormGroup<DeleteWorkspaceRequestFormProperties>({
		});

	}

	export interface ExecuteQueryRequest {

		/** Required */
		workspaceId: string;

		/** Required */
		queryStatement: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ExecuteQueryRequestFormProperties {

		/** Required */
		workspaceId: FormControl<string | null | undefined>,

		/** Required */
		queryStatement: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateExecuteQueryRequestFormGroup() {
		return new FormGroup<ExecuteQueryRequestFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queryStatement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The function response. */
	export interface FunctionResponse {
		requiredProperties?: Array<string>;
		scope?: Scope;
		implementedBy?: DataConnector;
		isInherited?: boolean | null;
	}

	/** The function response. */
	export interface FunctionResponseFormProperties {
		scope: FormControl<Scope | null | undefined>,
		isInherited: FormControl<boolean | null | undefined>,
	}
	export function CreateFunctionResponseFormGroup() {
		return new FormGroup<FunctionResponseFormProperties>({
			scope: new FormControl<Scope | null | undefined>(undefined),
			isInherited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetComponentTypeRequest {
	}
	export interface GetComponentTypeRequestFormProperties {
	}
	export function CreateGetComponentTypeRequestFormGroup() {
		return new FormGroup<GetComponentTypeRequestFormProperties>({
		});

	}

	export interface GetEntityRequest {
	}
	export interface GetEntityRequestFormProperties {
	}
	export function CreateGetEntityRequestFormGroup() {
		return new FormGroup<GetEntityRequestFormProperties>({
		});

	}

	export interface GetPricingPlanRequest {
	}
	export interface GetPricingPlanRequestFormProperties {
	}
	export function CreateGetPricingPlanRequestFormGroup() {
		return new FormGroup<GetPricingPlanRequestFormProperties>({
		});

	}


	/** An object that specifies how to interpolate data in a list. */
	export interface InterpolationParameters {
		interpolationType?: InterpolationType;
		intervalInSeconds?: number | null;
	}

	/** An object that specifies how to interpolate data in a list. */
	export interface InterpolationParametersFormProperties {
		interpolationType: FormControl<InterpolationType | null | undefined>,
		intervalInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateInterpolationParametersFormGroup() {
		return new FormGroup<InterpolationParametersFormProperties>({
			interpolationType: new FormControl<InterpolationType | null | undefined>(undefined),
			intervalInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OrderByTime { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface GetPropertyValueHistoryRequest {
		entityId?: string;
		componentName?: string;
		componentTypeId?: string;

		/** Required */
		selectedProperties: Array<string>;
		propertyFilters?: Array<PropertyFilter>;
		startDateTime?: Date;
		endDateTime?: Date;
		interpolation?: InterpolationParameters;
		nextToken?: string;
		maxResults?: number | null;
		orderByTime?: Order;
		startTime?: string;
		endTime?: string;
	}
	export interface GetPropertyValueHistoryRequestFormProperties {
		entityId: FormControl<string | null | undefined>,
		componentName: FormControl<string | null | undefined>,
		componentTypeId: FormControl<string | null | undefined>,
		startDateTime: FormControl<Date | null | undefined>,
		endDateTime: FormControl<Date | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		orderByTime: FormControl<Order | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGetPropertyValueHistoryRequestFormGroup() {
		return new FormGroup<GetPropertyValueHistoryRequestFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			orderByTime: new FormControl<Order | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The tabular conditions. */
	export interface TabularConditions {
		orderBy?: Array<OrderBy>;
		propertyFilters?: Array<PropertyFilter>;
	}

	/** The tabular conditions. */
	export interface TabularConditionsFormProperties {
	}
	export function CreateTabularConditionsFormGroup() {
		return new FormGroup<TabularConditionsFormProperties>({
		});

	}

	export interface GetPropertyValueRequest {
		componentName?: string;
		componentTypeId?: string;
		entityId?: string;

		/** Required */
		selectedProperties: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
		propertyGroupName?: string;
		tabularConditions?: TabularConditions;
	}
	export interface GetPropertyValueRequestFormProperties {
		componentName: FormControl<string | null | undefined>,
		componentTypeId: FormControl<string | null | undefined>,
		entityId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		propertyGroupName: FormControl<string | null | undefined>,
	}
	export function CreateGetPropertyValueRequestFormGroup() {
		return new FormGroup<GetPropertyValueRequestFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined),
			componentTypeId: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			propertyGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSceneRequest {
	}
	export interface GetSceneRequestFormProperties {
	}
	export function CreateGetSceneRequestFormGroup() {
		return new FormGroup<GetSceneRequestFormProperties>({
		});

	}

	export interface GetSyncJobRequest {
	}
	export interface GetSyncJobRequestFormProperties {
	}
	export function CreateGetSyncJobRequestFormGroup() {
		return new FormGroup<GetSyncJobRequestFormProperties>({
		});

	}

	export interface GetWorkspaceRequest {
	}
	export interface GetWorkspaceRequestFormProperties {
	}
	export function CreateGetWorkspaceRequestFormGroup() {
		return new FormGroup<GetWorkspaceRequestFormProperties>({
		});

	}

	export interface ListComponentTypesRequest {
		filters?: Array<ListComponentTypesFilter>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListComponentTypesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComponentTypesRequestFormGroup() {
		return new FormGroup<ListComponentTypesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEntitiesRequest {
		filters?: Array<ListEntitiesFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListEntitiesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesRequestFormGroup() {
		return new FormGroup<ListEntitiesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListScenesRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListScenesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScenesRequestFormGroup() {
		return new FormGroup<ListScenesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncJobsRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListSyncJobsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSyncJobsRequestFormGroup() {
		return new FormGroup<ListSyncJobsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncResourcesRequest {
		filters?: Array<SyncResourceFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListSyncResourcesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSyncResourcesRequestFormGroup() {
		return new FormGroup<ListSyncResourcesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceARN: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceARN: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkspacesRequest {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListWorkspacesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkspacesRequestFormGroup() {
		return new FormGroup<ListWorkspacesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parent entity update request. */
	export interface ParentEntityUpdateRequest {

		/** Required */
		updateType: ParentEntityUpdateType;
		parentEntityId?: string;
	}

	/** The parent entity update request. */
	export interface ParentEntityUpdateRequestFormProperties {

		/** Required */
		updateType: FormControl<ParentEntityUpdateType | null | undefined>,
		parentEntityId: FormControl<string | null | undefined>,
	}
	export function CreateParentEntityUpdateRequestFormGroup() {
		return new FormGroup<ParentEntityUpdateRequestFormProperties>({
			updateType: new FormControl<ParentEntityUpdateType | null | undefined>(undefined, [Validators.required]),
			parentEntityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains response data from a property definition request. */
	export interface PropertyDefinitionResponse {

		/** Required */
		dataType: DataType;

		/** Required */
		isTimeSeries: boolean;

		/** Required */
		isRequiredInEntity: boolean;

		/** Required */
		isExternalId: boolean;

		/** Required */
		isStoredExternally: boolean;

		/** Required */
		isImported: boolean;

		/** Required */
		isFinal: boolean;

		/** Required */
		isInherited: boolean;
		defaultValue?: DataValue;
		configuration?: Configuration;
		displayName?: string;
	}

	/** An object that contains response data from a property definition request. */
	export interface PropertyDefinitionResponseFormProperties {

		/** Required */
		isTimeSeries: FormControl<boolean | null | undefined>,

		/** Required */
		isRequiredInEntity: FormControl<boolean | null | undefined>,

		/** Required */
		isExternalId: FormControl<boolean | null | undefined>,

		/** Required */
		isStoredExternally: FormControl<boolean | null | undefined>,

		/** Required */
		isImported: FormControl<boolean | null | undefined>,

		/** Required */
		isFinal: FormControl<boolean | null | undefined>,

		/** Required */
		isInherited: FormControl<boolean | null | undefined>,
		displayName: FormControl<string | null | undefined>,
	}
	export function CreatePropertyDefinitionResponseFormGroup() {
		return new FormGroup<PropertyDefinitionResponseFormProperties>({
			isTimeSeries: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isRequiredInEntity: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isExternalId: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isStoredExternally: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isImported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isFinal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isInherited: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The property group response */
	export interface PropertyGroupResponse {

		/** Required */
		groupType: GroupType;

		/** Required */
		propertyNames: Array<string>;

		/** Required */
		isInherited: boolean;
	}

	/** The property group response */
	export interface PropertyGroupResponseFormProperties {

		/** Required */
		groupType: FormControl<GroupType | null | undefined>,

		/** Required */
		isInherited: FormControl<boolean | null | undefined>,
	}
	export function CreatePropertyGroupResponseFormGroup() {
		return new FormGroup<PropertyGroupResponseFormProperties>({
			groupType: new FormControl<GroupType | null | undefined>(undefined, [Validators.required]),
			isInherited: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The latest value of the property. */
	export interface PropertyLatestValue {

		/** Required */
		propertyReference: EntityPropertyReference;
		propertyValue?: DataValue;
	}

	/** The latest value of the property. */
	export interface PropertyLatestValueFormProperties {
	}
	export function CreatePropertyLatestValueFormGroup() {
		return new FormGroup<PropertyLatestValueFormProperties>({
		});

	}

	export enum PropertyUpdateType { UPDATE = 'UPDATE', DELETE = 'DELETE', CREATE = 'CREATE' }


	/** An object that sets information about a property. */
	export interface PropertyRequest {
		definition?: PropertyDefinitionRequest;
		value?: DataValue;
		updateType?: PropertyGroupUpdateType;
	}

	/** An object that sets information about a property. */
	export interface PropertyRequestFormProperties {
		updateType: FormControl<PropertyGroupUpdateType | null | undefined>,
	}
	export function CreatePropertyRequestFormGroup() {
		return new FormGroup<PropertyRequestFormProperties>({
			updateType: new FormControl<PropertyGroupUpdateType | null | undefined>(undefined),
		});

	}


	/** An object that contains information about a property response. */
	export interface PropertyResponse {
		definition?: PropertyDefinitionResponse;
		value?: DataValue;
	}

	/** An object that contains information about a property response. */
	export interface PropertyResponseFormProperties {
	}
	export function CreatePropertyResponseFormGroup() {
		return new FormGroup<PropertyResponseFormProperties>({
		});

	}

	export interface PropertyResponses {
	}
	export interface PropertyResponsesFormProperties {
	}
	export function CreatePropertyResponsesFormGroup() {
		return new FormGroup<PropertyResponsesFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		resourceARN: string;

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateComponentTypeRequest {
		isSingleton?: boolean | null;
		description?: string;
		propertyDefinitions?: PropertyDefinitionsRequest;
		extendsFrom?: Array<string>;
		functions?: FunctionsRequest;
		propertyGroups?: PropertyGroupsRequest;
		componentTypeName?: string;
	}
	export interface UpdateComponentTypeRequestFormProperties {
		isSingleton: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		componentTypeName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComponentTypeRequestFormGroup() {
		return new FormGroup<UpdateComponentTypeRequestFormProperties>({
			isSingleton: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			componentTypeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEntityRequest {
		entityName?: string;
		description?: string;
		componentUpdates?: ComponentUpdatesMapRequest;
		parentEntityUpdate?: ParentEntityUpdateRequest;
	}
	export interface UpdateEntityRequestFormProperties {
		entityName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEntityRequestFormGroup() {
		return new FormGroup<UpdateEntityRequestFormProperties>({
			entityName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePricingPlanRequest {

		/** Required */
		pricingMode: PricingMode;
		bundleNames?: Array<string>;
	}
	export interface UpdatePricingPlanRequestFormProperties {

		/** Required */
		pricingMode: FormControl<PricingMode | null | undefined>,
	}
	export function CreateUpdatePricingPlanRequestFormGroup() {
		return new FormGroup<UpdatePricingPlanRequestFormProperties>({
			pricingMode: new FormControl<PricingMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSceneRequest {
		contentLocation?: string;
		description?: string;
		capabilities?: Array<string>;
		sceneMetadata?: SceneMetadataMap;
	}
	export interface UpdateSceneRequestFormProperties {
		contentLocation: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSceneRequestFormGroup() {
		return new FormGroup<UpdateSceneRequestFormProperties>({
			contentLocation: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspaceRequest {
		description?: string;
		role?: string;
	}
	export interface UpdateWorkspaceRequestFormProperties {
		description: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspaceRequestFormGroup() {
		return new FormGroup<UpdateWorkspaceRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Sets values for multiple time series properties.
		 * Post workspaces/{workspaceId}/entity-properties
		 * @param {string} workspaceId The ID of the workspace that contains the properties to set.
		 * @return {BatchPutPropertyValuesResponse} Success
		 */
		BatchPutPropertyValues(workspaceId: string, requestBody: BatchPutPropertyValuesPostBody): Observable<BatchPutPropertyValuesResponse> {
			return this.http.post<BatchPutPropertyValuesResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/entity-properties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a component type.
		 * Post workspaces/{workspaceId}/component-types/{componentTypeId}
		 * @param {string} workspaceId The ID of the workspace that contains the component type.
		 * @param {string} componentTypeId The ID of the component type.
		 * @return {CreateComponentTypeResponse} Success
		 */
		CreateComponentType(workspaceId: string, componentTypeId: string, requestBody: CreateComponentTypePostBody): Observable<CreateComponentTypeResponse> {
			return this.http.post<CreateComponentTypeResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/component-types/' + (componentTypeId == null ? '' : encodeURIComponent(componentTypeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a component type.
		 * Delete workspaces/{workspaceId}/component-types/{componentTypeId}
		 * @param {string} workspaceId The ID of the workspace that contains the component type.
		 * @param {string} componentTypeId The ID of the component type to delete.
		 * @return {DeleteComponentTypeResponse} Success
		 */
		DeleteComponentType(workspaceId: string, componentTypeId: string): Observable<DeleteComponentTypeResponse> {
			return this.http.delete<DeleteComponentTypeResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/component-types/' + (componentTypeId == null ? '' : encodeURIComponent(componentTypeId)), {});
		}

		/**
		 * Retrieves information about a component type.
		 * Get workspaces/{workspaceId}/component-types/{componentTypeId}
		 * @param {string} workspaceId The ID of the workspace that contains the component type.
		 * @param {string} componentTypeId The ID of the component type.
		 * @return {GetComponentTypeResponse} Success
		 */
		GetComponentType(workspaceId: string, componentTypeId: string): Observable<GetComponentTypeResponse> {
			return this.http.get<GetComponentTypeResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/component-types/' + (componentTypeId == null ? '' : encodeURIComponent(componentTypeId)), {});
		}

		/**
		 * Updates information in a component type.
		 * Put workspaces/{workspaceId}/component-types/{componentTypeId}
		 * @param {string} workspaceId The ID of the workspace.
		 * @param {string} componentTypeId The ID of the component type.
		 * @return {UpdateComponentTypeResponse} Success
		 */
		UpdateComponentType(workspaceId: string, componentTypeId: string, requestBody: UpdateComponentTypePutBody): Observable<UpdateComponentTypeResponse> {
			return this.http.put<UpdateComponentTypeResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/component-types/' + (componentTypeId == null ? '' : encodeURIComponent(componentTypeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an entity.
		 * Post workspaces/{workspaceId}/entities
		 * @param {string} workspaceId The ID of the workspace that contains the entity.
		 * @return {CreateEntityResponse} Success
		 */
		CreateEntity(workspaceId: string, requestBody: CreateEntityPostBody): Observable<CreateEntityResponse> {
			return this.http.post<CreateEntityResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/entities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a scene.
		 * Post workspaces/{workspaceId}/scenes
		 * @param {string} workspaceId The ID of the workspace that contains the scene.
		 * @return {CreateSceneResponse} Success
		 */
		CreateScene(workspaceId: string, requestBody: CreateScenePostBody): Observable<CreateSceneResponse> {
			return this.http.post<CreateSceneResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/scenes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This action creates a SyncJob.
		 * Post workspaces/{workspaceId}/sync-jobs/{syncSource}
		 * @param {string} workspaceId The workspace ID.
		 * @param {string} syncSource <p>The sync source.</p> <note> <p>Currently the only supported syncSoource is <code>SITEWISE </code>.</p> </note>
		 * @return {CreateSyncJobResponse} Success
		 */
		CreateSyncJob(workspaceId: string, syncSource: string, requestBody: CreateSyncJobPostBody): Observable<CreateSyncJobResponse> {
			return this.http.post<CreateSyncJobResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/sync-jobs/' + (syncSource == null ? '' : encodeURIComponent(syncSource)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the SyncJob.
		 * Delete workspaces/{workspaceId}/sync-jobs/{syncSource}
		 * @param {string} workspaceId The workspace ID.
		 * @param {string} syncSource <p>The sync source.</p> <note> <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p> </note>
		 * @return {DeleteSyncJobResponse} Success
		 */
		DeleteSyncJob(workspaceId: string, syncSource: string): Observable<DeleteSyncJobResponse> {
			return this.http.delete<DeleteSyncJobResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/sync-jobs/' + (syncSource == null ? '' : encodeURIComponent(syncSource)), {});
		}

		/**
		 * Creates a workplace.
		 * Post workspaces/{workspaceId}
		 * @param {string} workspaceId The ID of the workspace.
		 * @return {CreateWorkspaceResponse} Success
		 */
		CreateWorkspace(workspaceId: string, requestBody: CreateWorkspacePostBody): Observable<CreateWorkspaceResponse> {
			return this.http.post<CreateWorkspaceResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workspace.
		 * Delete workspaces/{workspaceId}
		 * @param {string} workspaceId The ID of the workspace to delete.
		 * @return {DeleteWorkspaceResponse} Success
		 */
		DeleteWorkspace(workspaceId: string): Observable<DeleteWorkspaceResponse> {
			return this.http.delete<DeleteWorkspaceResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), {});
		}

		/**
		 * Retrieves information about a workspace.
		 * Get workspaces/{workspaceId}
		 * @param {string} workspaceId The ID of the workspace.
		 * @return {GetWorkspaceResponse} Success
		 */
		GetWorkspace(workspaceId: string): Observable<GetWorkspaceResponse> {
			return this.http.get<GetWorkspaceResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), {});
		}

		/**
		 * Updates a workspace.
		 * Put workspaces/{workspaceId}
		 * @param {string} workspaceId The ID of the workspace.
		 * @return {UpdateWorkspaceResponse} Success
		 */
		UpdateWorkspace(workspaceId: string, requestBody: UpdateWorkspacePutBody): Observable<UpdateWorkspaceResponse> {
			return this.http.put<UpdateWorkspaceResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an entity.
		 * Delete workspaces/{workspaceId}/entities/{entityId}
		 * @param {string} workspaceId The ID of the workspace that contains the entity to delete.
		 * @param {string} entityId The ID of the entity to delete.
		 * @param {boolean} isRecursive A Boolean value that specifies whether the operation deletes child entities.
		 * @return {DeleteEntityResponse} Success
		 */
		DeleteEntity(workspaceId: string, entityId: string, isRecursive: boolean | null | undefined): Observable<DeleteEntityResponse> {
			return this.http.delete<DeleteEntityResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/entities/' + (entityId == null ? '' : encodeURIComponent(entityId)) + '&isRecursive=' + isRecursive, {});
		}

		/**
		 * Retrieves information about an entity.
		 * Get workspaces/{workspaceId}/entities/{entityId}
		 * @param {string} workspaceId The ID of the workspace.
		 * @param {string} entityId The ID of the entity.
		 * @return {GetEntityResponse} Success
		 */
		GetEntity(workspaceId: string, entityId: string): Observable<GetEntityResponse> {
			return this.http.get<GetEntityResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/entities/' + (entityId == null ? '' : encodeURIComponent(entityId)), {});
		}

		/**
		 * Updates an entity.
		 * Put workspaces/{workspaceId}/entities/{entityId}
		 * @param {string} workspaceId The ID of the workspace that contains the entity.
		 * @param {string} entityId The ID of the entity.
		 * @return {UpdateEntityResponse} Success
		 */
		UpdateEntity(workspaceId: string, entityId: string, requestBody: UpdateEntityPutBody): Observable<UpdateEntityResponse> {
			return this.http.put<UpdateEntityResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/entities/' + (entityId == null ? '' : encodeURIComponent(entityId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a scene.
		 * Delete workspaces/{workspaceId}/scenes/{sceneId}
		 * @param {string} workspaceId The ID of the workspace.
		 * @param {string} sceneId The ID of the scene to delete.
		 * @return {DeleteSceneResponse} Success
		 */
		DeleteScene(workspaceId: string, sceneId: string): Observable<DeleteSceneResponse> {
			return this.http.delete<DeleteSceneResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/scenes/' + (sceneId == null ? '' : encodeURIComponent(sceneId)), {});
		}

		/**
		 * Retrieves information about a scene.
		 * Get workspaces/{workspaceId}/scenes/{sceneId}
		 * @param {string} workspaceId The ID of the workspace that contains the scene.
		 * @param {string} sceneId The ID of the scene.
		 * @return {GetSceneResponse} Success
		 */
		GetScene(workspaceId: string, sceneId: string): Observable<GetSceneResponse> {
			return this.http.get<GetSceneResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/scenes/' + (sceneId == null ? '' : encodeURIComponent(sceneId)), {});
		}

		/**
		 * Updates a scene.
		 * Put workspaces/{workspaceId}/scenes/{sceneId}
		 * @param {string} workspaceId The ID of the workspace that contains the scene.
		 * @param {string} sceneId The ID of the scene.
		 * @return {UpdateSceneResponse} Success
		 */
		UpdateScene(workspaceId: string, sceneId: string, requestBody: UpdateScenePutBody): Observable<UpdateSceneResponse> {
			return this.http.put<UpdateSceneResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/scenes/' + (sceneId == null ? '' : encodeURIComponent(sceneId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Run queries to access information from your knowledge graph of entities within individual workspaces.
		 * Post queries/execution
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ExecuteQueryResponse} Success
		 */
		ExecuteQuery(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ExecuteQueryPostBody): Observable<ExecuteQueryResponse> {
			return this.http.post<ExecuteQueryResponse>(this.baseUri + 'queries/execution?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the pricing plan.
		 * Get pricingplan
		 * @return {GetPricingPlanResponse} Success
		 */
		GetPricingPlan(): Observable<GetPricingPlanResponse> {
			return this.http.get<GetPricingPlanResponse>(this.baseUri + 'pricingplan', {});
		}

		/**
		 * Update the pricing plan.
		 * Post pricingplan
		 * @return {UpdatePricingPlanResponse} Success
		 */
		UpdatePricingPlan(requestBody: UpdatePricingPlanPostBody): Observable<UpdatePricingPlanResponse> {
			return this.http.post<UpdatePricingPlanResponse>(this.baseUri + 'pricingplan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
		 * Post workspaces/{workspaceId}/entity-properties/value
		 * @param {string} workspaceId The ID of the workspace whose values the operation returns.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetPropertyValueResponse} Success
		 */
		GetPropertyValue(workspaceId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetPropertyValuePostBody): Observable<GetPropertyValueResponse> {
			return this.http.post<GetPropertyValueResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/entity-properties/value&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
		 * Post workspaces/{workspaceId}/entity-properties/history
		 * @param {string} workspaceId The ID of the workspace.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetPropertyValueHistoryResponse} Success
		 */
		GetPropertyValueHistory(workspaceId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetPropertyValueHistoryPostBody): Observable<GetPropertyValueHistoryResponse> {
			return this.http.post<GetPropertyValueHistoryResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/entity-properties/history&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the SyncJob.
		 * Get sync-jobs/{syncSource}
		 * @param {string} syncSource <p>The sync source.</p> <note> <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p> </note>
		 * @param {string} workspace The workspace ID.
		 * @return {GetSyncJobResponse} Success
		 */
		GetSyncJob(syncSource: string, workspace: string | null | undefined): Observable<GetSyncJobResponse> {
			return this.http.get<GetSyncJobResponse>(this.baseUri + 'sync-jobs/' + (syncSource == null ? '' : encodeURIComponent(syncSource)) + '&workspace=' + (workspace == null ? '' : encodeURIComponent(workspace)), {});
		}

		/**
		 * Lists all component types in a workspace.
		 * Post workspaces/{workspaceId}/component-types-list
		 * @param {string} workspaceId The ID of the workspace.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListComponentTypesResponse} Success
		 */
		ListComponentTypes(workspaceId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListComponentTypesPostBody): Observable<ListComponentTypesResponse> {
			return this.http.post<ListComponentTypesResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/component-types-list&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all entities in a workspace.
		 * Post workspaces/{workspaceId}/entities-list
		 * @param {string} workspaceId The ID of the workspace.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEntitiesResponse} Success
		 */
		ListEntities(workspaceId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEntitiesPostBody): Observable<ListEntitiesResponse> {
			return this.http.post<ListEntitiesResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/entities-list&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all scenes in a workspace.
		 * Post workspaces/{workspaceId}/scenes-list
		 * @param {string} workspaceId The ID of the workspace that contains the scenes.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListScenesResponse} Success
		 */
		ListScenes(workspaceId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListScenesPostBody): Observable<ListScenesResponse> {
			return this.http.post<ListScenesResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/scenes-list&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all SyncJobs.
		 * Post workspaces/{workspaceId}/sync-jobs-list
		 * @param {string} workspaceId The ID of the workspace that contains the sync job.
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSyncJobsResponse} Success
		 */
		ListSyncJobs(workspaceId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSyncJobsPostBody): Observable<ListSyncJobsResponse> {
			return this.http.post<ListSyncJobsResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/sync-jobs-list&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the sync resources.
		 * Post workspaces/{workspaceId}/sync-jobs/{syncSource}/resources-list
		 * @param {string} workspaceId The ID of the workspace that contains the sync job.
		 * @param {string} syncSource <p>The sync source.</p> <note> <p>Currently the only supported syncSource is <code>SITEWISE </code>.</p> </note>
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListSyncResourcesResponse} Success
		 */
		ListSyncResources(workspaceId: string, syncSource: string, maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListSyncResourcesPostBody): Observable<ListSyncResourcesResponse> {
			return this.http.post<ListSyncResourcesResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/sync-jobs/' + (syncSource == null ? '' : encodeURIComponent(syncSource)) + '/resources-list&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags associated with a resource.
		 * Post tags-list
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourcePostBody): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + 'tags-list', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about workspaces in the current account.
		 * Post workspaces-list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListWorkspacesResponse} Success
		 */
		ListWorkspaces(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListWorkspacesPostBody): Observable<ListWorkspacesResponse> {
			return this.http.post<ListWorkspacesResponse>(this.baseUri + 'workspaces-list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds tags to a resource.
		 * Post tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource.
		 * Delete tags#resourceARN&tagKeys
		 * @param {string} resourceARN The ARN of the resource.
		 * @param {Array<string>} tagKeys A list of tag key names to remove from the resource. You don't specify the value. Both the key and its associated value are removed.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceARN: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags#resourceARN&tagKeys?resourceARN=' + (resourceARN == null ? '' : encodeURIComponent(resourceARN)) + '&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface BatchPutPropertyValuesPostBody {

		/**
		 * An object that maps strings to the property value entries to set. Each string in the mapping must be unique to this object.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		entries: Array<PropertyValueEntry>;
	}
	export interface BatchPutPropertyValuesPostBodyFormProperties {
	}
	export function CreateBatchPutPropertyValuesPostBodyFormGroup() {
		return new FormGroup<BatchPutPropertyValuesPostBodyFormProperties>({
		});

	}

	export interface CreateComponentTypePostBody {

		/** A Boolean value that specifies whether an entity can have more than one component of this type. */
		isSingleton?: boolean | null;

		/**
		 * The description of the component type.
		 * Max length: 2048
		 * Min length: 0
		 */
		description?: string | null;

		/** An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object. */
		propertyDefinitions?: {[id: string]: PropertyDefinitionRequest };

		/** Specifies the parent component type to extend. */
		extendsFrom?: Array<string>;

		/** An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object. */
		functions?: {[id: string]: FunctionRequest };

		/** Metadata that you can use to manage the component type. */
		tags?: {[id: string]: string };

		/** <p/> */
		propertyGroups?: {[id: string]: PropertyGroupRequest };

		/**
		 * A friendly name for the component type.
		 * Max length: 256
		 * Min length: 0
		 */
		componentTypeName?: string | null;
	}
	export interface CreateComponentTypePostBodyFormProperties {

		/** A Boolean value that specifies whether an entity can have more than one component of this type. */
		isSingleton: FormControl<boolean | null | undefined>,

		/**
		 * The description of the component type.
		 * Max length: 2048
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object. */
		propertyDefinitions: FormControl<{[id: string]: PropertyDefinitionRequest } | null | undefined>,

		/** An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object. */
		functions: FormControl<{[id: string]: FunctionRequest } | null | undefined>,

		/** Metadata that you can use to manage the component type. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** <p/> */
		propertyGroups: FormControl<{[id: string]: PropertyGroupRequest } | null | undefined>,

		/**
		 * A friendly name for the component type.
		 * Max length: 256
		 * Min length: 0
		 */
		componentTypeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentTypePostBodyFormGroup() {
		return new FormGroup<CreateComponentTypePostBodyFormProperties>({
			isSingleton: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			propertyDefinitions: new FormControl<{[id: string]: PropertyDefinitionRequest } | null | undefined>(undefined),
			functions: new FormControl<{[id: string]: FunctionRequest } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			propertyGroups: new FormControl<{[id: string]: PropertyGroupRequest } | null | undefined>(undefined),
			componentTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('.*[^\u0000-\u001F\u007F]*.*')]),
		});

	}

	export interface UpdateComponentTypePutBody {

		/** A Boolean value that specifies whether an entity can have more than one component of this type. */
		isSingleton?: boolean | null;

		/**
		 * The description of the component type.
		 * Max length: 2048
		 * Min length: 0
		 */
		description?: string | null;

		/** An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object. */
		propertyDefinitions?: {[id: string]: PropertyDefinitionRequest };

		/** Specifies the component type that this component type extends. */
		extendsFrom?: Array<string>;

		/** An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object. */
		functions?: {[id: string]: FunctionRequest };

		/** The property groups. */
		propertyGroups?: {[id: string]: PropertyGroupRequest };

		/**
		 * The component type name.
		 * Max length: 256
		 * Min length: 0
		 */
		componentTypeName?: string | null;
	}
	export interface UpdateComponentTypePutBodyFormProperties {

		/** A Boolean value that specifies whether an entity can have more than one component of this type. */
		isSingleton: FormControl<boolean | null | undefined>,

		/**
		 * The description of the component type.
		 * Max length: 2048
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object. */
		propertyDefinitions: FormControl<{[id: string]: PropertyDefinitionRequest } | null | undefined>,

		/** An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object. */
		functions: FormControl<{[id: string]: FunctionRequest } | null | undefined>,

		/** The property groups. */
		propertyGroups: FormControl<{[id: string]: PropertyGroupRequest } | null | undefined>,

		/**
		 * The component type name.
		 * Max length: 256
		 * Min length: 0
		 */
		componentTypeName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComponentTypePutBodyFormGroup() {
		return new FormGroup<UpdateComponentTypePutBodyFormProperties>({
			isSingleton: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			propertyDefinitions: new FormControl<{[id: string]: PropertyDefinitionRequest } | null | undefined>(undefined),
			functions: new FormControl<{[id: string]: FunctionRequest } | null | undefined>(undefined),
			propertyGroups: new FormControl<{[id: string]: PropertyGroupRequest } | null | undefined>(undefined),
			componentTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('.*[^\u0000-\u001F\u007F]*.*')]),
		});

	}

	export interface CreateEntityPostBody {

		/**
		 * The ID of the entity.
		 * Max length: 128
		 * Min length: 1
		 */
		entityId?: string | null;

		/**
		 * The name of the entity.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		entityName: string;

		/**
		 * The description of the entity.
		 * Max length: 2048
		 * Min length: 0
		 */
		description?: string | null;

		/** An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object. */
		components?: {[id: string]: ComponentRequest };

		/**
		 * The ID of the entity's parent entity.
		 * Max length: 128
		 * Min length: 1
		 */
		parentEntityId?: string | null;

		/** Metadata that you can use to manage the entity. */
		tags?: {[id: string]: string };
	}
	export interface CreateEntityPostBodyFormProperties {

		/**
		 * The ID of the entity.
		 * Max length: 128
		 * Min length: 1
		 */
		entityId: FormControl<string | null | undefined>,

		/**
		 * The name of the entity.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		entityName: FormControl<string | null | undefined>,

		/**
		 * The description of the entity.
		 * Max length: 2048
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object. */
		components: FormControl<{[id: string]: ComponentRequest } | null | undefined>,

		/**
		 * The ID of the entity's parent entity.
		 * Max length: 128
		 * Min length: 1
		 */
		parentEntityId: FormControl<string | null | undefined>,

		/** Metadata that you can use to manage the entity. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateEntityPostBodyFormGroup() {
		return new FormGroup<CreateEntityPostBodyFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+')]),
			entityName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			components: new FormControl<{[id: string]: ComponentRequest } | null | undefined>(undefined),
			parentEntityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('\$ROOT|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateScenePostBody {

		/**
		 * The ID of the scene.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		sceneId: string;

		/**
		 * The relative path that specifies the location of the content definition file.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		contentLocation: string;

		/**
		 * The description for this scene.
		 * Max length: 2048
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * A list of capabilities that the scene uses to render itself.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		capabilities?: Array<string>;

		/** Metadata that you can use to manage the scene. */
		tags?: {[id: string]: string };

		/** The request metadata. */
		sceneMetadata?: {[id: string]: string };
	}
	export interface CreateScenePostBodyFormProperties {

		/**
		 * The ID of the scene.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		sceneId: FormControl<string | null | undefined>,

		/**
		 * The relative path that specifies the location of the content definition file.
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		contentLocation: FormControl<string | null | undefined>,

		/**
		 * The description for this scene.
		 * Max length: 2048
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** Metadata that you can use to manage the scene. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The request metadata. */
		sceneMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateScenePostBodyFormGroup() {
		return new FormGroup<CreateScenePostBodyFormProperties>({
			sceneId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z_0-9][a-zA-Z_\-0-9]*[a-zA-Z0-9]+')]),
			contentLocation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[sS]3://[A-Za-z0-9._/-]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			sceneMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSyncJobPostBody {

		/**
		 * The SyncJob IAM role. This IAM role is used by the SyncJob to read from the syncSource, and create, update, or delete the corresponding resources.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		syncRole: string;

		/** The SyncJob tags. */
		tags?: {[id: string]: string };
	}
	export interface CreateSyncJobPostBodyFormProperties {

		/**
		 * The SyncJob IAM role. This IAM role is used by the SyncJob to read from the syncSource, and create, update, or delete the corresponding resources.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		syncRole: FormControl<string | null | undefined>,

		/** The SyncJob tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSyncJobPostBodyFormGroup() {
		return new FormGroup<CreateSyncJobPostBodyFormProperties>({
			syncRole: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:((aws)|(aws-cn)|(aws-us-gov)):iam::[0-9]{12}:role/.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateWorkspacePostBody {

		/**
		 * The description of the workspace.
		 * Max length: 2048
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The ARN of the S3 bucket where resources associated with the workspace are stored.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		s3Location: string;

		/**
		 * The ARN of the execution role associated with the workspace.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		role: string;

		/** Metadata that you can use to manage the workspace */
		tags?: {[id: string]: string };
	}
	export interface CreateWorkspacePostBodyFormProperties {

		/**
		 * The description of the workspace.
		 * Max length: 2048
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ARN of the S3 bucket where resources associated with the workspace are stored.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		s3Location: FormControl<string | null | undefined>,

		/**
		 * The ARN of the execution role associated with the workspace.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		role: FormControl<string | null | undefined>,

		/** Metadata that you can use to manage the workspace */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateWorkspacePostBodyFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			s3Location: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*(^arn:((aws)|(aws-cn)|(aws-us-gov)):s3:::)([a-zA-Z0-9_-]+$).*')]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:((aws)|(aws-cn)|(aws-us-gov)):iam::[0-9]{12}:role/.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspacePutBody {

		/**
		 * The description of the workspace.
		 * Max length: 2048
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The ARN of the execution role associated with the workspace.
		 * Max length: 2048
		 * Min length: 20
		 */
		role?: string | null;
	}
	export interface UpdateWorkspacePutBodyFormProperties {

		/**
		 * The description of the workspace.
		 * Max length: 2048
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ARN of the execution role associated with the workspace.
		 * Max length: 2048
		 * Min length: 20
		 */
		role: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspacePutBodyFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:((aws)|(aws-cn)|(aws-us-gov)):iam::[0-9]{12}:role/.*')]),
		});

	}

	export interface UpdateEntityPutBody {

		/**
		 * The name of the entity.
		 * Max length: 256
		 * Min length: 1
		 */
		entityName?: string | null;

		/**
		 * The description of the entity.
		 * Max length: 2048
		 * Min length: 0
		 */
		description?: string | null;

		/** An object that maps strings to the component updates in the request. Each string in the mapping must be unique to this object. */
		componentUpdates?: {[id: string]: ComponentUpdateRequest };

		/** The parent entity update request. */
		parentEntityUpdate?: UpdateEntityPutBodyParentEntityUpdate;
	}
	export interface UpdateEntityPutBodyFormProperties {

		/**
		 * The name of the entity.
		 * Max length: 256
		 * Min length: 1
		 */
		entityName: FormControl<string | null | undefined>,

		/**
		 * The description of the entity.
		 * Max length: 2048
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** An object that maps strings to the component updates in the request. Each string in the mapping must be unique to this object. */
		componentUpdates: FormControl<{[id: string]: ComponentUpdateRequest } | null | undefined>,
	}
	export function CreateUpdateEntityPutBodyFormGroup() {
		return new FormGroup<UpdateEntityPutBodyFormProperties>({
			entityName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			componentUpdates: new FormControl<{[id: string]: ComponentUpdateRequest } | null | undefined>(undefined),
		});

	}

	export interface UpdateEntityPutBodyParentEntityUpdate {
		updateType?: ParentEntityUpdateType;
		parentEntityId?: string;
	}
	export interface UpdateEntityPutBodyParentEntityUpdateFormProperties {
		updateType: FormControl<ParentEntityUpdateType | null | undefined>,
		parentEntityId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEntityPutBodyParentEntityUpdateFormGroup() {
		return new FormGroup<UpdateEntityPutBodyParentEntityUpdateFormProperties>({
			updateType: new FormControl<ParentEntityUpdateType | null | undefined>(undefined),
			parentEntityId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateScenePutBody {

		/**
		 * The relative path that specifies the location of the content definition file.
		 * Max length: 256
		 * Min length: 0
		 */
		contentLocation?: string | null;

		/**
		 * The description of this scene.
		 * Max length: 2048
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * A list of capabilities that the scene uses to render.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		capabilities?: Array<string>;

		/** The scene metadata. */
		sceneMetadata?: {[id: string]: string };
	}
	export interface UpdateScenePutBodyFormProperties {

		/**
		 * The relative path that specifies the location of the content definition file.
		 * Max length: 256
		 * Min length: 0
		 */
		contentLocation: FormControl<string | null | undefined>,

		/**
		 * The description of this scene.
		 * Max length: 2048
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** The scene metadata. */
		sceneMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateScenePutBodyFormGroup() {
		return new FormGroup<UpdateScenePutBodyFormProperties>({
			contentLocation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('[sS]3://[A-Za-z0-9._/-]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*')]),
			sceneMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ExecuteQueryPostBody {

		/**
		 * The ID of the workspace.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		workspaceId: string;

		/**
		 * The query statement.
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		queryStatement: string;

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ExecuteQueryPostBodyFormProperties {

		/**
		 * The ID of the workspace.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		workspaceId: FormControl<string | null | undefined>,

		/**
		 * The query statement.
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		queryStatement: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateExecuteQueryPostBodyFormGroup() {
		return new FormGroup<ExecuteQueryPostBodyFormProperties>({
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z_0-9][a-zA-Z_\-0-9]*[a-zA-Z0-9]+')]),
			queryStatement: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('[\s\S]+')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
		});

	}

	export interface UpdatePricingPlanPostBody {

		/**
		 * The pricing mode.
		 * Required
		 */
		pricingMode: PricingMode;

		/**
		 * The bundle names.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		bundleNames?: Array<string>;
	}
	export interface UpdatePricingPlanPostBodyFormProperties {

		/**
		 * The pricing mode.
		 * Required
		 */
		pricingMode: FormControl<PricingMode | null | undefined>,
	}
	export function CreateUpdatePricingPlanPostBodyFormGroup() {
		return new FormGroup<UpdatePricingPlanPostBodyFormProperties>({
			pricingMode: new FormControl<PricingMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPropertyValuePostBody {

		/**
		 * The name of the component whose property values the operation returns.
		 * Max length: 256
		 * Min length: 1
		 */
		componentName?: string | null;

		/**
		 * The ID of the component type whose property values the operation returns.
		 * Max length: 256
		 * Min length: 1
		 */
		componentTypeId?: string | null;

		/**
		 * The ID of the entity whose property values the operation returns.
		 * Max length: 128
		 * Min length: 1
		 */
		entityId?: string | null;

		/**
		 * The properties whose values the operation returns.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		selectedProperties: Array<string>;

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults?: number | null;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;

		/**
		 * The property group name.
		 * Max length: 256
		 * Min length: 1
		 */
		propertyGroupName?: string | null;

		/** The tabular conditions. */
		tabularConditions?: GetPropertyValuePostBodyTabularConditions;
	}
	export interface GetPropertyValuePostBodyFormProperties {

		/**
		 * The name of the component whose property values the operation returns.
		 * Max length: 256
		 * Min length: 1
		 */
		componentName: FormControl<string | null | undefined>,

		/**
		 * The ID of the component type whose property values the operation returns.
		 * Max length: 256
		 * Min length: 1
		 */
		componentTypeId: FormControl<string | null | undefined>,

		/**
		 * The ID of the entity whose property values the operation returns.
		 * Max length: 128
		 * Min length: 1
		 */
		entityId: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The property group name.
		 * Max length: 256
		 * Min length: 1
		 */
		propertyGroupName: FormControl<string | null | undefined>,
	}
	export function CreateGetPropertyValuePostBodyFormGroup() {
		return new FormGroup<GetPropertyValuePostBodyFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z_\-0-9]+')]),
			componentTypeId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z_\.\-0-9:]+')]),
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(200)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
			propertyGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z_\-0-9]+')]),
		});

	}

	export interface GetPropertyValuePostBodyTabularConditions {
		orderBy?: Array<OrderBy>;
		propertyFilters?: Array<PropertyFilter>;
	}
	export interface GetPropertyValuePostBodyTabularConditionsFormProperties {
	}
	export function CreateGetPropertyValuePostBodyTabularConditionsFormGroup() {
		return new FormGroup<GetPropertyValuePostBodyTabularConditionsFormProperties>({
		});

	}

	export interface GetPropertyValueHistoryPostBody {

		/**
		 * The ID of the entity.
		 * Max length: 128
		 * Min length: 1
		 */
		entityId?: string | null;

		/**
		 * The name of the component.
		 * Max length: 256
		 * Min length: 1
		 */
		componentName?: string | null;

		/**
		 * The ID of the component type.
		 * Max length: 256
		 * Min length: 1
		 */
		componentTypeId?: string | null;

		/**
		 * A list of properties whose value histories the request retrieves.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		selectedProperties: Array<string>;

		/**
		 * A list of objects that filter the property value history request.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		propertyFilters?: Array<PropertyFilter>;

		/** supports epoch seconds value */
		startDateTime?: Date | null;

		/** supports epoch seconds value */
		endDateTime?: Date | null;

		/** An object that specifies how to interpolate data in a list. */
		interpolation?: GetPropertyValueHistoryPostBodyInterpolation;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults?: number | null;

		/** The time direction to use in the result order. */
		orderByTime?: Order | null;

		/**
		 * Timestamp represented in ISO 8601 format
		 * Max length: 35
		 * Min length: 20
		 */
		startTime?: string | null;

		/**
		 * Timestamp represented in ISO 8601 format
		 * Max length: 35
		 * Min length: 20
		 */
		endTime?: string | null;
	}
	export interface GetPropertyValueHistoryPostBodyFormProperties {

		/**
		 * The ID of the entity.
		 * Max length: 128
		 * Min length: 1
		 */
		entityId: FormControl<string | null | undefined>,

		/**
		 * The name of the component.
		 * Max length: 256
		 * Min length: 1
		 */
		componentName: FormControl<string | null | undefined>,

		/**
		 * The ID of the component type.
		 * Max length: 256
		 * Min length: 1
		 */
		componentTypeId: FormControl<string | null | undefined>,

		/** supports epoch seconds value */
		startDateTime: FormControl<Date | null | undefined>,

		/** supports epoch seconds value */
		endDateTime: FormControl<Date | null | undefined>,

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,

		/** The time direction to use in the result order. */
		orderByTime: FormControl<Order | null | undefined>,

		/**
		 * Timestamp represented in ISO 8601 format
		 * Max length: 35
		 * Min length: 20
		 */
		startTime: FormControl<string | null | undefined>,

		/**
		 * Timestamp represented in ISO 8601 format
		 * Max length: 35
		 * Min length: 20
		 */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGetPropertyValueHistoryPostBodyFormGroup() {
		return new FormGroup<GetPropertyValueHistoryPostBodyFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|^[a-zA-Z0-9][a-zA-Z_\-0-9.:]*[a-zA-Z0-9]+')]),
			componentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z_\-0-9]+')]),
			componentTypeId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z_\.\-0-9:]+')]),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(200)]),
			orderByTime: new FormControl<Order | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(35)]),
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(35)]),
		});

	}

	export interface GetPropertyValueHistoryPostBodyInterpolation {
		interpolationType?: InterpolationType;
		intervalInSeconds?: number | null;
	}
	export interface GetPropertyValueHistoryPostBodyInterpolationFormProperties {
		interpolationType: FormControl<InterpolationType | null | undefined>,
		intervalInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetPropertyValueHistoryPostBodyInterpolationFormGroup() {
		return new FormGroup<GetPropertyValueHistoryPostBodyInterpolationFormProperties>({
			interpolationType: new FormControl<InterpolationType | null | undefined>(undefined),
			intervalInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListComponentTypesPostBody {

		/** A list of objects that filter the request. */
		filters?: Array<ListComponentTypesFilter>;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults?: number | null;
	}
	export interface ListComponentTypesPostBodyFormProperties {

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListComponentTypesPostBodyFormGroup() {
		return new FormGroup<ListComponentTypesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(200)]),
		});

	}

	export interface ListEntitiesPostBody {

		/** <p>A list of objects that filter the request.</p> <note> <p>Only one object is accepted as a valid input.</p> </note> */
		filters?: Array<ListEntitiesFilter>;

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults?: number | null;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListEntitiesPostBodyFormProperties {

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesPostBodyFormGroup() {
		return new FormGroup<ListEntitiesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(200)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
		});

	}

	export interface ListScenesPostBody {

		/**
		 * Specifies the maximum number of results to display.
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults?: number | null;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListScenesPostBodyFormProperties {

		/**
		 * Specifies the maximum number of results to display.
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScenesPostBodyFormGroup() {
		return new FormGroup<ListScenesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(200)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
		});

	}

	export interface ListSyncJobsPostBody {

		/**
		 * <p>The maximum number of results to return at one time. The default is 50.</p> <p>Valid Range: Minimum value of 0. Maximum value of 200.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults?: number | null;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListSyncJobsPostBodyFormProperties {

		/**
		 * <p>The maximum number of results to return at one time. The default is 50.</p> <p>Valid Range: Minimum value of 0. Maximum value of 200.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSyncJobsPostBodyFormGroup() {
		return new FormGroup<ListSyncJobsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(200)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
		});

	}

	export interface ListSyncResourcesPostBody {

		/** <p>A list of objects that filter the request.</p> <p>The following filter combinations are supported:</p> <ul> <li> <p>Filter with state</p> </li> <li> <p>Filter with ResourceType and ResourceId</p> </li> <li> <p>Filter with ResourceType and ExternalId</p> </li> </ul> */
		filters?: Array<SyncResourceFilter>;

		/**
		 * <p>The maximum number of results to return at one time. The default is 50.</p> <p>Valid Range: Minimum value of 0. Maximum value of 200.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults?: number | null;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListSyncResourcesPostBodyFormProperties {

		/**
		 * <p>The maximum number of results to return at one time. The default is 50.</p> <p>Valid Range: Minimum value of 0. Maximum value of 200.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSyncResourcesPostBodyFormGroup() {
		return new FormGroup<ListSyncResourcesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(200)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
		});

	}

	export interface ListTagsForResourcePostBody {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		resourceARN: string;

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults?: number | null;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListTagsForResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		resourceARN: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourcePostBodyFormGroup() {
		return new FormGroup<ListTagsForResourcePostBodyFormProperties>({
			resourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\/a-zA-Z0-9_\-\.:]+')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(200)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
		});

	}

	export interface ListWorkspacesPostBody {

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults?: number | null;

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListWorkspacesPostBodyFormProperties {

		/**
		 * <p>The maximum number of results to return at one time. The default is 25.</p> <p>Valid Range: Minimum value of 1. Maximum value of 250.</p>
		 * Minimum: 0
		 * Maximum: 200
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The string that specifies the next page of results.
		 * Max length: 17880
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkspacesPostBodyFormGroup() {
		return new FormGroup<ListWorkspacesPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(200)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(17880), Validators.pattern('.*')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		resourceARN: string;

		/**
		 * Metadata to add to this resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		resourceARN: FormControl<string | null | undefined>,

		/**
		 * Metadata to add to this resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			resourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:[a-z0-9-]+:[0-9]{12}:[\/a-zA-Z0-9_\-\.:]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

