import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Class represents provider operation */
	export interface AvailableProviderOperation {

		/**
		 * Contains the localized display information for this particular operation / action.
		 * These value will be used by several clients for
		 * (1) custom role definitions for RBAC;
		 * (2) complex query filters for the event service; and (3) audit history / records for management operations.
		 */
		display?: AvailableProviderOperationDisplay;

		/**
		 * Gets or Sets Name of the operations
		 * Required
		 */
		name: string;

		/**
		 * Gets or sets Origin
		 * The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX.
		 * Default value is “user,system”
		 */
		origin?: string | null;

		/** Class represents Properties in AvailableProviderOperations */
		properties?: AvailableProviderOperationProperties;
	}

	/** Class represents provider operation */
	export interface AvailableProviderOperationFormProperties {

		/**
		 * Gets or Sets Name of the operations
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Gets or sets Origin
		 * The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX.
		 * Default value is “user,system”
		 */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateAvailableProviderOperationFormGroup() {
		return new FormGroup<AvailableProviderOperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Contains the localized display information for this particular operation / action. 
	 * These value will be used by several clients for 
	 * (1) custom role definitions for RBAC; 
	 * (2) complex query filters for the event service; and (3) audit history / records for management operations.
	 */
	export interface AvailableProviderOperationDisplay {

		/**
		 * Gets or sets Description
		 * The localized friendly description for the operation, as it should be shown to the user.
		 * It should be thorough, yet concise – it will be used in tool tips and detailed views.
		 */
		description?: string | null;

		/**
		 * Gets or sets Operation
		 * The localized friendly name for the operation, as it should be shown to the user.
		 * It should be concise (to fit in drop downs) but clear (i.e. self-documenting). It should use Title Casing and include the entity/resource to which it applies.
		 */
		operation?: string | null;

		/**
		 * Gets or sets Provider
		 * The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible.
		 * It should use Title Casing and begin with “Microsoft” for 1st party services.
		 */
		provider?: string | null;

		/**
		 * Gets or sets Resource
		 * The localized friendly form of the resource type related to this action/operation – it should match the public documentation for the resource provider.
		 * It should use Title Casing – for examples, please refer to the “name” section.
		 */
		resource?: string | null;
	}

	/**
	 * Contains the localized display information for this particular operation / action. 
	 * These value will be used by several clients for 
	 * (1) custom role definitions for RBAC; 
	 * (2) complex query filters for the event service; and (3) audit history / records for management operations.
	 */
	export interface AvailableProviderOperationDisplayFormProperties {

		/**
		 * Gets or sets Description
		 * The localized friendly description for the operation, as it should be shown to the user.
		 * It should be thorough, yet concise – it will be used in tool tips and detailed views.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Gets or sets Operation
		 * The localized friendly name for the operation, as it should be shown to the user.
		 * It should be concise (to fit in drop downs) but clear (i.e. self-documenting). It should use Title Casing and include the entity/resource to which it applies.
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * Gets or sets Provider
		 * The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible.
		 * It should use Title Casing and begin with “Microsoft” for 1st party services.
		 */
		provider: FormControl<string | null | undefined>,

		/**
		 * Gets or sets Resource
		 * The localized friendly form of the resource type related to this action/operation – it should match the public documentation for the resource provider.
		 * It should use Title Casing – for examples, please refer to the “name” section.
		 */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateAvailableProviderOperationDisplayFormGroup() {
		return new FormGroup<AvailableProviderOperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Class represents Properties in AvailableProviderOperations */
	export interface AvailableProviderOperationProperties {
	}

	/** Class represents Properties in AvailableProviderOperations */
	export interface AvailableProviderOperationPropertiesFormProperties {
	}
	export function CreateAvailableProviderOperationPropertiesFormGroup() {
		return new FormGroup<AvailableProviderOperationPropertiesFormProperties>({
		});

	}


	/** Class for set of operations used for discovery of available provider operations. */
	export interface AvailableProviderOperations {

		/** Link for the next set of operations. */
		nextLink?: string | null;

		/** List of operations. */
		value?: Array<AvailableProviderOperation>;
	}

	/** Class for set of operations used for discovery of available provider operations. */
	export interface AvailableProviderOperationsFormProperties {

		/** Link for the next set of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAvailableProviderOperationsFormGroup() {
		return new FormGroup<AvailableProviderOperationsFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The pair of customer secret. */
	export interface CustomerSecret {

		/**
		 * The encryption algorithm used to encrypt data.
		 * Required
		 */
		algorithm: CustomerSecretAlgorithm;

		/**
		 * The identifier to the data service input object which this secret corresponds to.
		 * Required
		 */
		keyIdentifier: string;

		/**
		 * It contains the encrypted customer secret.
		 * Required
		 */
		keyValue: string;
	}

	/** The pair of customer secret. */
	export interface CustomerSecretFormProperties {

		/**
		 * The encryption algorithm used to encrypt data.
		 * Required
		 */
		algorithm: FormControl<CustomerSecretAlgorithm | null | undefined>,

		/**
		 * The identifier to the data service input object which this secret corresponds to.
		 * Required
		 */
		keyIdentifier: FormControl<string | null | undefined>,

		/**
		 * It contains the encrypted customer secret.
		 * Required
		 */
		keyValue: FormControl<string | null | undefined>,
	}
	export function CreateCustomerSecretFormGroup() {
		return new FormGroup<CustomerSecretFormProperties>({
			algorithm: new FormControl<CustomerSecretAlgorithm | null | undefined>(undefined, [Validators.required]),
			keyIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomerSecretAlgorithm { None = 'None', RSA1_5 = 'RSA1_5', RSA_OAEP = 'RSA_OAEP', PlainText = 'PlainText' }


	/** The DataManager resource. */
	export interface DataManager {

		/** Etag of the Resource. */
		etag?: string | null;
	}

	/** The DataManager resource. */
	export interface DataManagerFormProperties {

		/** Etag of the Resource. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateDataManagerFormGroup() {
		return new FormGroup<DataManagerFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataManager resources Collection. */
	export interface DataManagerList {

		/** Link for the next set of data stores. */
		nextLink?: string | null;

		/** List of data manager resources. */
		value?: Array<DataManager>;
	}

	/** DataManager resources Collection. */
	export interface DataManagerListFormProperties {

		/** Link for the next set of data stores. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataManagerListFormGroup() {
		return new FormGroup<DataManagerListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The DataManagerUpdateParameter. */
	export interface DataManagerUpdateParameter {

		/** The sku type. */
		sku?: Sku;

		/**
		 * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
		 * (across resource groups).
		 */
		tags?: {[id: string]: string };
	}

	/** The DataManagerUpdateParameter. */
	export interface DataManagerUpdateParameterFormProperties {

		/**
		 * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
		 * (across resource groups).
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDataManagerUpdateParameterFormGroup() {
		return new FormGroup<DataManagerUpdateParameterFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The sku type. */
	export interface Sku {

		/** The sku name. Required for data manager creation, optional for update. */
		name?: string | null;

		/** The sku tier. This is based on the SKU name. */
		tier?: string | null;
	}

	/** The sku type. */
	export interface SkuFormProperties {

		/** The sku name. Required for data manager creation, optional for update. */
		name: FormControl<string | null | undefined>,

		/** The sku tier. This is based on the SKU name. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Service. */
	export interface DataService {

		/**
		 * Data Service properties.
		 * Required
		 */
		properties: DataServiceProperties;
	}

	/** Data Service. */
	export interface DataServiceFormProperties {
	}
	export function CreateDataServiceFormGroup() {
		return new FormGroup<DataServiceFormProperties>({
		});

	}


	/** Data Service properties. */
	export interface DataServiceProperties {

		/**
		 * State of the data service.
		 * Required
		 */
		state: DataServicePropertiesState;

		/** Supported data store types which can be used as a sink. */
		supportedDataSinkTypes?: Array<string>;

		/** Supported data store types which can be used as a source. */
		supportedDataSourceTypes?: Array<string>;
	}

	/** Data Service properties. */
	export interface DataServicePropertiesFormProperties {

		/**
		 * State of the data service.
		 * Required
		 */
		state: FormControl<DataServicePropertiesState | null | undefined>,
	}
	export function CreateDataServicePropertiesFormGroup() {
		return new FormGroup<DataServicePropertiesFormProperties>({
			state: new FormControl<DataServicePropertiesState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataServicePropertiesState { Disabled = 'Disabled', Enabled = 'Enabled', Supported = 'Supported' }


	/** Data Service Collection. */
	export interface DataServiceList {

		/** Link for the next set of data services. */
		nextLink?: string | null;

		/** List of data services. */
		value?: Array<DataService>;
	}

	/** Data Service Collection. */
	export interface DataServiceListFormProperties {

		/** Link for the next set of data services. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataServiceListFormGroup() {
		return new FormGroup<DataServiceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data store. */
	export interface DataStore {

		/**
		 * Data Store for sources and sinks
		 * Required
		 */
		properties: DataStoreProperties;
	}

	/** Data store. */
	export interface DataStoreFormProperties {
	}
	export function CreateDataStoreFormGroup() {
		return new FormGroup<DataStoreFormProperties>({
		});

	}


	/** Data Store for sources and sinks */
	export interface DataStoreProperties {

		/** List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys. */
		customerSecrets?: Array<CustomerSecret>;

		/**
		 * The arm id of the data store type.
		 * Required
		 */
		dataStoreTypeId: string;

		/** A generic json used differently by each data source type. */
		extendedProperties?: string | null;

		/** Arm Id for the manager resource to which the data source is associated. This is optional. */
		repositoryId?: string | null;

		/**
		 * State of the data source.
		 * Required
		 */
		state: DataServicePropertiesState;
	}

	/** Data Store for sources and sinks */
	export interface DataStorePropertiesFormProperties {

		/**
		 * The arm id of the data store type.
		 * Required
		 */
		dataStoreTypeId: FormControl<string | null | undefined>,

		/** A generic json used differently by each data source type. */
		extendedProperties: FormControl<string | null | undefined>,

		/** Arm Id for the manager resource to which the data source is associated. This is optional. */
		repositoryId: FormControl<string | null | undefined>,

		/**
		 * State of the data source.
		 * Required
		 */
		state: FormControl<DataServicePropertiesState | null | undefined>,
	}
	export function CreateDataStorePropertiesFormGroup() {
		return new FormGroup<DataStorePropertiesFormProperties>({
			dataStoreTypeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			extendedProperties: new FormControl<string | null | undefined>(undefined),
			repositoryId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DataServicePropertiesState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the information about the filters for the DataStore. */
	export interface DataStoreFilter {

		/** The data store type id. */
		dataStoreTypeId?: string | null;
	}

	/** Contains the information about the filters for the DataStore. */
	export interface DataStoreFilterFormProperties {

		/** The data store type id. */
		dataStoreTypeId: FormControl<string | null | undefined>,
	}
	export function CreateDataStoreFilterFormGroup() {
		return new FormGroup<DataStoreFilterFormProperties>({
			dataStoreTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Store Collection. */
	export interface DataStoreList {

		/** Link for the next set of data stores. */
		nextLink?: string | null;

		/** List of data stores. */
		value?: Array<DataStore>;
	}

	/** Data Store Collection. */
	export interface DataStoreListFormProperties {

		/** Link for the next set of data stores. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataStoreListFormGroup() {
		return new FormGroup<DataStoreListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data Store Type. */
	export interface DataStoreType {

		/**
		 * Data Store Type properties.
		 * Required
		 */
		properties: DataStoreTypeProperties;
	}

	/** Data Store Type. */
	export interface DataStoreTypeFormProperties {
	}
	export function CreateDataStoreTypeFormGroup() {
		return new FormGroup<DataStoreTypeFormProperties>({
		});

	}


	/** Data Store Type properties. */
	export interface DataStoreTypeProperties {

		/** Arm type for the manager resource to which the data source type is associated. This is optional. */
		repositoryType?: string | null;

		/**
		 * State of the data store type.
		 * Required
		 */
		state: DataServicePropertiesState;

		/** Supported data services where it can be used as a sink. */
		supportedDataServicesAsSink?: Array<string>;

		/** Supported data services where it can be used as a source. */
		supportedDataServicesAsSource?: Array<string>;
	}

	/** Data Store Type properties. */
	export interface DataStoreTypePropertiesFormProperties {

		/** Arm type for the manager resource to which the data source type is associated. This is optional. */
		repositoryType: FormControl<string | null | undefined>,

		/**
		 * State of the data store type.
		 * Required
		 */
		state: FormControl<DataServicePropertiesState | null | undefined>,
	}
	export function CreateDataStoreTypePropertiesFormGroup() {
		return new FormGroup<DataStoreTypePropertiesFormProperties>({
			repositoryType: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DataServicePropertiesState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Data Store Type Collection. */
	export interface DataStoreTypeList {

		/** Link for the next set of data store types. */
		nextLink?: string | null;

		/** List of DataStoreType. */
		value?: Array<DataStoreType>;
	}

	/** Data Store Type Collection. */
	export interface DataStoreTypeListFormProperties {

		/** Link for the next set of data store types. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataStoreTypeListFormGroup() {
		return new FormGroup<DataStoreTypeListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base class for all objects under DataManager Service */
	export interface DmsBaseObject {

		/** Id of the object. */
		id?: string | null;

		/** Name of the object. */
		name?: string | null;

		/** Type of the object. */
		type?: string | null;
	}

	/** Base class for all objects under DataManager Service */
	export interface DmsBaseObjectFormProperties {

		/** Id of the object. */
		id: FormControl<string | null | undefined>,

		/** Name of the object. */
		name: FormControl<string | null | undefined>,

		/** Type of the object. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDmsBaseObjectFormGroup() {
		return new FormGroup<DmsBaseObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Top level error for the job. */
	export interface Error {

		/**
		 * Error code that can be used to programmatically identify the error.
		 * Required
		 */
		code: string;

		/** Describes the error in detail and provides debugging information. */
		message?: string | null;
	}

	/** Top level error for the job. */
	export interface ErrorFormProperties {

		/**
		 * Error code that can be used to programmatically identify the error.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Describes the error in detail and provides debugging information. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error Details */
	export interface ErrorDetails {

		/**
		 * Error code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode?: number | null;

		/** Error message. */
		errorMessage?: string | null;

		/** Contains the non localized exception message */
		exceptionMessage?: string | null;

		/** Recommended action for the error. */
		recommendedAction?: string | null;
	}

	/** Error Details */
	export interface ErrorDetailsFormProperties {

		/**
		 * Error code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode: FormControl<number | null | undefined>,

		/** Error message. */
		errorMessage: FormControl<string | null | undefined>,

		/** Contains the non localized exception message */
		exceptionMessage: FormControl<string | null | undefined>,

		/** Recommended action for the error. */
		recommendedAction: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			errorCode: new FormControl<number | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			exceptionMessage: new FormControl<string | null | undefined>(undefined),
			recommendedAction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data service job. */
	export interface Job {

		/** Time at which the job ended in UTC ISO 8601 format. */
		endTime?: Date | null;

		/** Top level error for the job. */
		error?: Error;

		/**
		 * Job Properties
		 * Required
		 */
		properties: JobProperties;

		/**
		 * Time at which the job was started in UTC ISO 8601 format.
		 * Required
		 */
		startTime: Date;

		/**
		 * Status of the job.
		 * Required
		 */
		status: JobStagesStageStatus;
	}

	/** Data service job. */
	export interface JobFormProperties {

		/** Time at which the job ended in UTC ISO 8601 format. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * Time at which the job was started in UTC ISO 8601 format.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * Status of the job.
		 * Required
		 */
		status: FormControl<JobStagesStageStatus | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStagesStageStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Job Properties */
	export interface JobProperties {

		/**
		 * Number of bytes processed by the job as of now.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		bytesProcessed?: string | null;

		/** Name of the data sink on which the job was triggered. */
		dataSinkName?: string | null;

		/** Name of the data source on which the job was triggered. */
		dataSourceName?: string | null;

		/** Job details. */
		details?: JobDetails;

		/**
		 * Describes whether the job is cancellable.
		 * Required
		 */
		isCancellable: JobPropertiesIsCancellable;

		/**
		 * Number of items processed by the job as of now
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		itemsProcessed?: string | null;

		/**
		 * Number of bytes to be processed by the job in total.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalBytesToProcess?: string | null;

		/**
		 * Number of items to be processed by the job in total
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalItemsToProcess?: string | null;
	}

	/** Job Properties */
	export interface JobPropertiesFormProperties {

		/**
		 * Number of bytes processed by the job as of now.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		bytesProcessed: FormControl<string | null | undefined>,

		/** Name of the data sink on which the job was triggered. */
		dataSinkName: FormControl<string | null | undefined>,

		/** Name of the data source on which the job was triggered. */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * Describes whether the job is cancellable.
		 * Required
		 */
		isCancellable: FormControl<JobPropertiesIsCancellable | null | undefined>,

		/**
		 * Number of items processed by the job as of now
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		itemsProcessed: FormControl<string | null | undefined>,

		/**
		 * Number of bytes to be processed by the job in total.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalBytesToProcess: FormControl<string | null | undefined>,

		/**
		 * Number of items to be processed by the job in total
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalItemsToProcess: FormControl<string | null | undefined>,
	}
	export function CreateJobPropertiesFormGroup() {
		return new FormGroup<JobPropertiesFormProperties>({
			bytesProcessed: new FormControl<string | null | undefined>(undefined),
			dataSinkName: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined),
			isCancellable: new FormControl<JobPropertiesIsCancellable | null | undefined>(undefined, [Validators.required]),
			itemsProcessed: new FormControl<string | null | undefined>(undefined),
			totalBytesToProcess: new FormControl<string | null | undefined>(undefined),
			totalItemsToProcess: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job details. */
	export interface JobDetails {

		/** Error details for failure. This is optional. */
		errorDetails?: Array<ErrorDetails>;

		/** Item Details Link to download files or see details */
		itemDetailsLink?: string | null;

		/** Job Definition. */
		jobDefinition?: JobDefinition;

		/** List of stages that ran in the job */
		jobStages?: Array<JobStages>;
	}

	/** Job details. */
	export interface JobDetailsFormProperties {

		/** Item Details Link to download files or see details */
		itemDetailsLink: FormControl<string | null | undefined>,
	}
	export function CreateJobDetailsFormGroup() {
		return new FormGroup<JobDetailsFormProperties>({
			itemDetailsLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job Definition. */
	export interface JobDefinition {

		/**
		 * Job Definition
		 * Required
		 */
		properties: JobDefinitionProperties;
	}

	/** Job Definition. */
	export interface JobDefinitionFormProperties {
	}
	export function CreateJobDefinitionFormGroup() {
		return new FormGroup<JobDefinitionFormProperties>({
		});

	}


	/** Job Definition */
	export interface JobDefinitionProperties {

		/** List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys. */
		customerSecrets?: Array<CustomerSecret>;

		/** A generic json used differently by each data service type. */
		dataServiceInput?: string | null;

		/**
		 * Data Sink Id associated to the job definition.
		 * Required
		 */
		dataSinkId: string;

		/**
		 * Data Source Id associated to the job definition.
		 * Required
		 */
		dataSourceId: string;

		/** Last modified time of the job definition. */
		lastModifiedTime?: Date | null;

		/** This is the preferred geo location for the job to run. */
		runLocation?: JobDefinitionPropertiesRunLocation | null;

		/** Schedule for running the job definition */
		schedules?: Array<Schedule>;

		/**
		 * State of the job definition.
		 * Required
		 */
		state: DataServicePropertiesState;

		/** Enum to detect if user confirmation is required. If not passed will default to NotRequired. */
		userConfirmation?: JobDefinitionPropertiesUserConfirmation | null;
	}

	/** Job Definition */
	export interface JobDefinitionPropertiesFormProperties {

		/** A generic json used differently by each data service type. */
		dataServiceInput: FormControl<string | null | undefined>,

		/**
		 * Data Sink Id associated to the job definition.
		 * Required
		 */
		dataSinkId: FormControl<string | null | undefined>,

		/**
		 * Data Source Id associated to the job definition.
		 * Required
		 */
		dataSourceId: FormControl<string | null | undefined>,

		/** Last modified time of the job definition. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** This is the preferred geo location for the job to run. */
		runLocation: FormControl<JobDefinitionPropertiesRunLocation | null | undefined>,

		/**
		 * State of the job definition.
		 * Required
		 */
		state: FormControl<DataServicePropertiesState | null | undefined>,

		/** Enum to detect if user confirmation is required. If not passed will default to NotRequired. */
		userConfirmation: FormControl<JobDefinitionPropertiesUserConfirmation | null | undefined>,
	}
	export function CreateJobDefinitionPropertiesFormGroup() {
		return new FormGroup<JobDefinitionPropertiesFormProperties>({
			dataServiceInput: new FormControl<string | null | undefined>(undefined),
			dataSinkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			runLocation: new FormControl<JobDefinitionPropertiesRunLocation | null | undefined>(undefined),
			state: new FormControl<DataServicePropertiesState | null | undefined>(undefined, [Validators.required]),
			userConfirmation: new FormControl<JobDefinitionPropertiesUserConfirmation | null | undefined>(undefined),
		});

	}

	export enum JobDefinitionPropertiesRunLocation { none = 'none', australiaeast = 'australiaeast', australiasoutheast = 'australiasoutheast', brazilsouth = 'brazilsouth', canadacentral = 'canadacentral', canadaeast = 'canadaeast', centralindia = 'centralindia', centralus = 'centralus', eastasia = 'eastasia', eastus = 'eastus', eastus2 = 'eastus2', japaneast = 'japaneast', japanwest = 'japanwest', koreacentral = 'koreacentral', koreasouth = 'koreasouth', southeastasia = 'southeastasia', southcentralus = 'southcentralus', southindia = 'southindia', northcentralus = 'northcentralus', northeurope = 'northeurope', uksouth = 'uksouth', ukwest = 'ukwest', westcentralus = 'westcentralus', westeurope = 'westeurope', westindia = 'westindia', westus = 'westus', westus2 = 'westus2' }


	/** Schedule for the job run. */
	export interface Schedule {

		/** Name of the schedule. */
		name?: string | null;

		/** A list of repetition intervals in ISO 8601 format. */
		policyList?: Array<string>;
	}

	/** Schedule for the job run. */
	export interface ScheduleFormProperties {

		/** Name of the schedule. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobDefinitionPropertiesUserConfirmation { NotRequired = 'NotRequired', Required = 'Required' }


	/** Job stages. */
	export interface JobStages {

		/** Error details for the stage. This is optional */
		errorDetails?: Array<ErrorDetails>;

		/** Job Stage Details */
		jobStageDetails?: string | null;

		/** Name of the job stage. */
		stageName?: string | null;

		/**
		 * Status of the job stage.
		 * Required
		 */
		stageStatus: JobStagesStageStatus;
	}

	/** Job stages. */
	export interface JobStagesFormProperties {

		/** Job Stage Details */
		jobStageDetails: FormControl<string | null | undefined>,

		/** Name of the job stage. */
		stageName: FormControl<string | null | undefined>,

		/**
		 * Status of the job stage.
		 * Required
		 */
		stageStatus: FormControl<JobStagesStageStatus | null | undefined>,
	}
	export function CreateJobStagesFormGroup() {
		return new FormGroup<JobStagesFormProperties>({
			jobStageDetails: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			stageStatus: new FormControl<JobStagesStageStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobStagesStageStatus { None = 'None', InProgress = 'InProgress', Succeeded = 'Succeeded', WaitingForAction = 'WaitingForAction', Failed = 'Failed', Cancelled = 'Cancelled', Cancelling = 'Cancelling' }

	export enum JobPropertiesIsCancellable { NotCancellable = 'NotCancellable', Cancellable = 'Cancellable' }


	/** Contains the supported job definition filters. */
	export interface JobDefinitionFilter {

		/** The data source associated with the job definition */
		dataSource?: string | null;

		/** The last modified date time of the data source. */
		lastModified?: Date | null;

		/**
		 * The state of the job definition.
		 * Required
		 */
		state: DataServicePropertiesState;
	}

	/** Contains the supported job definition filters. */
	export interface JobDefinitionFilterFormProperties {

		/** The data source associated with the job definition */
		dataSource: FormControl<string | null | undefined>,

		/** The last modified date time of the data source. */
		lastModified: FormControl<Date | null | undefined>,

		/**
		 * The state of the job definition.
		 * Required
		 */
		state: FormControl<DataServicePropertiesState | null | undefined>,
	}
	export function CreateJobDefinitionFilterFormGroup() {
		return new FormGroup<JobDefinitionFilterFormProperties>({
			dataSource: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<DataServicePropertiesState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Job Definition Collection. */
	export interface JobDefinitionList {

		/** Link for the next set of job definitions. */
		nextLink?: string | null;

		/** List of job definitions. */
		value?: Array<JobDefinition>;
	}

	/** Job Definition Collection. */
	export interface JobDefinitionListFormProperties {

		/** Link for the next set of job definitions. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobDefinitionListFormGroup() {
		return new FormGroup<JobDefinitionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the information about the filters for the job. */
	export interface JobFilter {

		/** The start time of the job. */
		startTime?: Date | null;

		/**
		 * The status of the job.
		 * Required
		 */
		status: JobStagesStageStatus;
	}

	/** Contains the information about the filters for the job. */
	export interface JobFilterFormProperties {

		/** The start time of the job. */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The status of the job.
		 * Required
		 */
		status: FormControl<JobStagesStageStatus | null | undefined>,
	}
	export function CreateJobFilterFormGroup() {
		return new FormGroup<JobFilterFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<JobStagesStageStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Job Collection. */
	export interface JobList {

		/** Link for the next set of jobs. */
		nextLink?: string | null;

		/** List of jobs. */
		value?: Array<Job>;
	}

	/** Job Collection. */
	export interface JobListFormProperties {

		/** Link for the next set of jobs. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobListFormGroup() {
		return new FormGroup<JobListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encryption Key. */
	export interface Key {

		/**
		 * The maximum byte size that can be encrypted by the key. For a key size larger than the size, break into chunks and encrypt each chunk, append each encrypted chunk with : to mark the end of the chunk.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		encryptionChunkSizeInBytes: number;

		/**
		 * Exponent of the encryption key.
		 * Required
		 */
		keyExponent: string;

		/**
		 * Modulus of the encryption key.
		 * Required
		 */
		keyModulus: string;
	}

	/** Encryption Key. */
	export interface KeyFormProperties {

		/**
		 * The maximum byte size that can be encrypted by the key. For a key size larger than the size, break into chunks and encrypt each chunk, append each encrypted chunk with : to mark the end of the chunk.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		encryptionChunkSizeInBytes: FormControl<number | null | undefined>,

		/**
		 * Exponent of the encryption key.
		 * Required
		 */
		keyExponent: FormControl<string | null | undefined>,

		/**
		 * Modulus of the encryption key.
		 * Required
		 */
		keyModulus: FormControl<string | null | undefined>,
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
			encryptionChunkSizeInBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			keyExponent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyModulus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Public key */
	export interface PublicKey {

		/**
		 * PublicKey Properties
		 * Required
		 */
		properties: PublicKeyProperties;
	}

	/** Public key */
	export interface PublicKeyFormProperties {
	}
	export function CreatePublicKeyFormGroup() {
		return new FormGroup<PublicKeyFormProperties>({
		});

	}


	/** PublicKey Properties */
	export interface PublicKeyProperties {

		/**
		 * Encryption Key.
		 * Required
		 */
		dataServiceLevel1Key: Key;

		/**
		 * Encryption Key.
		 * Required
		 */
		dataServiceLevel2Key: Key;
	}

	/** PublicKey Properties */
	export interface PublicKeyPropertiesFormProperties {
	}
	export function CreatePublicKeyPropertiesFormGroup() {
		return new FormGroup<PublicKeyPropertiesFormProperties>({
		});

	}


	/** PublicKey Collection */
	export interface PublicKeyList {

		/** Link for the next set of public keys. */
		nextLink?: string | null;

		/** List of public keys. */
		value?: Array<PublicKey>;
	}

	/** PublicKey Collection */
	export interface PublicKeyListFormProperties {

		/** Link for the next set of public keys. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyListFormGroup() {
		return new FormGroup<PublicKeyListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model of the Resource. */
	export interface Resource {

		/** The Resource Id. */
		id?: string | null;

		/**
		 * The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
		 * US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
		 * region is specified on update the request will succeed.
		 * Required
		 */
		location: string;

		/** The Resource Name. */
		name?: string | null;

		/** The sku type. */
		sku?: Sku;

		/**
		 * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
		 * (across resource groups).
		 */
		tags?: {[id: string]: string };

		/** The Resource type. */
		type?: string | null;
	}

	/** Model of the Resource. */
	export interface ResourceFormProperties {

		/** The Resource Id. */
		id: FormControl<string | null | undefined>,

		/**
		 * The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
		 * US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
		 * region is specified on update the request will succeed.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The Resource Name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
		 * (across resource groups).
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The Resource type. */
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


	/** Run parameters for a job. */
	export interface RunParameters {

		/** List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys. */
		customerSecrets?: Array<CustomerSecret>;

		/** A generic json used differently by each data service type. */
		dataServiceInput?: string | null;

		/** Enum to detect if user confirmation is required. If not passed will default to NotRequired. */
		userConfirmation?: JobDefinitionPropertiesUserConfirmation | null;
	}

	/** Run parameters for a job. */
	export interface RunParametersFormProperties {

		/** A generic json used differently by each data service type. */
		dataServiceInput: FormControl<string | null | undefined>,

		/** Enum to detect if user confirmation is required. If not passed will default to NotRequired. */
		userConfirmation: FormControl<JobDefinitionPropertiesUserConfirmation | null | undefined>,
	}
	export function CreateRunParametersFormGroup() {
		return new FormGroup<RunParametersFormProperties>({
			dataServiceInput: new FormControl<string | null | undefined>(undefined),
			userConfirmation: new FormControl<JobDefinitionPropertiesUserConfirmation | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This method gets all the operations.
		 * Get providers/Microsoft.HybridData/operations
		 * @param {string} api_version The API Version
		 * @return {AvailableProviderOperations} This method gets all the operations.
		 */
		Operations_List(api_version: string): Observable<AvailableProviderOperations> {
			return this.http.get<AvailableProviderOperations>(this.baseUri + 'providers/Microsoft.HybridData/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the data manager resources available under the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HybridData/dataManagers
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} api_version The API Version
		 * @return {DataManagerList} List of data manager resources available under the subscription.
		 */
		DataManagers_List(subscriptionId: string, api_version: string): Observable<DataManagerList> {
			return this.http.get<DataManagerList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HybridData/dataManagers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the data manager resources available under the given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} api_version The API Version
		 * @return {DataManagerList} List of data manager resources by resource group.
		 */
		DataManagers_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<DataManagerList> {
			return this.http.get<DataManagerList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified data manager resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {DataManager} Data Manager Resource object.
		 */
		DataManagers_Get(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<DataManager> {
			return this.http.get<DataManager>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new data manager resource with the specified parameters. Existing resources cannot be updated with this API
		 * and should instead be updated with the Update data manager resource API.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {DataManager} requestBody Data manager resource details from request body.
		 * @return {DataManager} Data Manager Resource object.
		 */
		DataManagers_Create(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, requestBody: DataManager): Observable<DataManager> {
			return this.http.put<DataManager>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a data manager resource in Microsoft Azure.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {void} 
		 */
		DataManagers_Delete(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the properties of an existing data manager resource.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {DataManagerUpdateParameter} requestBody Data manager resource details from request body.
		 * @return {DataManager} Data Manager Resource object.
		 */
		DataManagers_Update(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, requestBody: DataManagerUpdateParameter): Observable<DataManager> {
			return this.http.patch<DataManager>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method gets all the data services.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {DataServiceList} The list of data services.
		 */
		DataServices_ListByDataManager(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<DataServiceList> {
			return this.http.get<DataServiceList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the data service that match the data service name given.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}
		 * @param {string} dataServiceName The name of the data service that is being queried.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {DataService} The data service that matches the name.
		 */
		DataServices_Get(dataServiceName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<DataService> {
			return this.http.get<DataService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * This method gets all the job definitions of the given data service name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions
		 * @param {string} dataServiceName The data service type of interest.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {string} filter OData Filter options
		 * @return {JobDefinitionList} The list of job definitions of the given data service type.
		 */
		JobDefinitions_ListByDataService(dataServiceName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, filter: string | null | undefined): Observable<JobDefinitionList> {
			return this.http.get<JobDefinitionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobDefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * This method gets job definition object by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}
		 * @param {string} dataServiceName The data service name of the job definition
		 * @param {string} jobDefinitionName The job definition name that is being queried.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {JobDefinition} The job definition that matches the criteria.
		 */
		JobDefinitions_Get(dataServiceName: string, jobDefinitionName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<JobDefinition> {
			return this.http.get<JobDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobDefinitions/' + (jobDefinitionName == null ? '' : encodeURIComponent(jobDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a job definition.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}
		 * @param {string} dataServiceName The data service type of the job definition.
		 * @param {string} jobDefinitionName The job definition name to be created or updated.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {JobDefinition} requestBody Job Definition object to be created or updated.
		 * @return {JobDefinition} JobDefinition object.
		 */
		JobDefinitions_CreateOrUpdate(dataServiceName: string, jobDefinitionName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, requestBody: JobDefinition): Observable<JobDefinition> {
			return this.http.put<JobDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobDefinitions/' + (jobDefinitionName == null ? '' : encodeURIComponent(jobDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method deletes the given job definition.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}
		 * @param {string} dataServiceName The data service type of the job definition.
		 * @param {string} jobDefinitionName The job definition name to be deleted.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {void} 
		 */
		JobDefinitions_Delete(dataServiceName: string, jobDefinitionName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobDefinitions/' + (jobDefinitionName == null ? '' : encodeURIComponent(jobDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method gets all the jobs of a given job definition.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/jobs
		 * @param {string} dataServiceName The name of the data service of the job definition.
		 * @param {string} jobDefinitionName The name of the job definition for which jobs are needed.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {string} filter OData Filter options
		 * @return {JobList} The list of jobs.
		 */
		Jobs_ListByJobDefinition(dataServiceName: string, jobDefinitionName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, filter: string | null | undefined): Observable<JobList> {
			return this.http.get<JobList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobDefinitions/' + (jobDefinitionName == null ? '' : encodeURIComponent(jobDefinitionName)) + '/jobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * This method gets a data manager job given the jobId.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/jobs/{jobId}
		 * @param {string} dataServiceName The name of the data service of the job definition.
		 * @param {string} jobDefinitionName The name of the job definition of the job.
		 * @param {string} jobId The job id of the job queried.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {string} expand $expand is supported on details parameter for job, which provides details on the job stages.
		 * @return {Job} The job that matches the given criteria.
		 */
		Jobs_Get(dataServiceName: string, jobDefinitionName: string, jobId: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, expand: string | null | undefined): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobDefinitions/' + (jobDefinitionName == null ? '' : encodeURIComponent(jobDefinitionName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Cancels the given job.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/jobs/{jobId}/cancel
		 * @param {string} dataServiceName The name of the data service of the job definition.
		 * @param {string} jobDefinitionName The name of the job definition of the job.
		 * @param {string} jobId The job id of the job queried.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {void} 
		 */
		Jobs_Cancel(dataServiceName: string, jobDefinitionName: string, jobId: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobDefinitions/' + (jobDefinitionName == null ? '' : encodeURIComponent(jobDefinitionName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resumes the given job.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/jobs/{jobId}/resume
		 * @param {string} dataServiceName The name of the data service of the job definition.
		 * @param {string} jobDefinitionName The name of the job definition of the job.
		 * @param {string} jobId The job id of the job queried.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {void} 
		 */
		Jobs_Resume(dataServiceName: string, jobDefinitionName: string, jobId: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobDefinitions/' + (jobDefinitionName == null ? '' : encodeURIComponent(jobDefinitionName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/resume&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method runs a job instance of the given job definition.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobDefinitions/{jobDefinitionName}/run
		 * @param {string} dataServiceName The data service type of the job definition.
		 * @param {string} jobDefinitionName Name of the job definition.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {RunParameters} requestBody Run time parameters for the job definition.
		 * @return {void} 
		 */
		JobDefinitions_Run(dataServiceName: string, jobDefinitionName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, requestBody: RunParameters): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobDefinitions/' + (jobDefinitionName == null ? '' : encodeURIComponent(jobDefinitionName)) + '/run&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method gets all the jobs of a data service type in a given resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataServices/{dataServiceName}/jobs
		 * @param {string} dataServiceName The name of the data service of interest.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {string} filter OData Filter options
		 * @return {JobList} The list of jobs that match the service and resource.
		 */
		Jobs_ListByDataService(dataServiceName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, filter: string | null | undefined): Observable<JobList> {
			return this.http.get<JobList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataServices/' + (dataServiceName == null ? '' : encodeURIComponent(dataServiceName)) + '/jobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets all the data store/repository types that the resource supports.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataStoreTypes
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {DataStoreTypeList} The list of data store types that are supported.
		 */
		DataStoreTypes_ListByDataManager(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<DataStoreTypeList> {
			return this.http.get<DataStoreTypeList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataStoreTypes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the data store/repository type given its name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataStoreTypes/{dataStoreTypeName}
		 * @param {string} dataStoreTypeName The data store/repository type name for which details are needed.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {DataStoreType} The data store/repository type.
		 */
		DataStoreTypes_Get(dataStoreTypeName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<DataStoreType> {
			return this.http.get<DataStoreType>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataStoreTypes/' + (dataStoreTypeName == null ? '' : encodeURIComponent(dataStoreTypeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the data stores/repositories in the given resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataStores
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {string} filter OData Filter options
		 * @return {DataStoreList} The list of data stores/repositories in the given resource.
		 */
		DataStores_ListByDataManager(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, filter: string | null | undefined): Observable<DataStoreList> {
			return this.http.get<DataStoreList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataStores&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * This method gets the data store/repository by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataStores/{dataStoreName}
		 * @param {string} dataStoreName The data store/repository name queried.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {DataStore} The data store/repository which matches the name given.
		 */
		DataStores_Get(dataStoreName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<DataStore> {
			return this.http.get<DataStore>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataStores/' + (dataStoreName == null ? '' : encodeURIComponent(dataStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the data store/repository in the data manager.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataStores/{dataStoreName}
		 * @param {string} dataStoreName The data store/repository name to be created or updated.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {DataStore} requestBody The data store/repository object to be created or updated.
		 * @return {DataStore} The data store/repository object.
		 */
		DataStores_CreateOrUpdate(dataStoreName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, requestBody: DataStore): Observable<DataStore> {
			return this.http.put<DataStore>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataStores/' + (dataStoreName == null ? '' : encodeURIComponent(dataStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This method deletes the given data store/repository.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/dataStores/{dataStoreName}
		 * @param {string} dataStoreName The data store/repository name to be deleted.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {void} 
		 */
		DataStores_Delete(dataStoreName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/dataStores/' + (dataStoreName == null ? '' : encodeURIComponent(dataStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This method gets all the job definitions of the given data manager resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/jobDefinitions
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {string} filter OData Filter options
		 * @return {JobDefinitionList} The list of job definitions in that resource.OK
		 */
		JobDefinitions_ListByDataManager(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, filter: string | null | undefined): Observable<JobDefinitionList> {
			return this.http.get<JobDefinitionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/jobDefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * This method gets all the jobs at the data manager resource level.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/jobs
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @param {string} filter OData Filter options
		 * @return {JobList} The list of jobs in the resource specified.
		 */
		Jobs_ListByDataManager(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string, filter: string | null | undefined): Observable<JobList> {
			return this.http.get<JobList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/jobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * This method gets the list view of public keys, however it will only have one element.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/publicKeys
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {PublicKeyList} The list of public keys.
		 */
		PublicKeys_ListByDataManager(subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<PublicKeyList> {
			return this.http.get<PublicKeyList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/publicKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * This method gets the public keys.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridData/dataManagers/{dataManagerName}/publicKeys/{publicKeyName}
		 * @param {string} publicKeyName Name of the public key.
		 * @param {string} subscriptionId The Subscription Id
		 * @param {string} resourceGroupName The Resource Group Name
		 * @param {string} dataManagerName The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
		 *     Min length: 3    Max length: 24
		 * @param {string} api_version The API Version
		 * @return {PublicKey} The public keys.
		 */
		PublicKeys_Get(publicKeyName: string, subscriptionId: string, resourceGroupName: string, dataManagerName: string, api_version: string): Observable<PublicKey> {
			return this.http.get<PublicKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HybridData/dataManagers/' + (dataManagerName == null ? '' : encodeURIComponent(dataManagerName)) + '/publicKeys/' + (publicKeyName == null ? '' : encodeURIComponent(publicKeyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

