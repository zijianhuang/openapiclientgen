import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchPutMessageResponse {
		batchPutMessageErrorEntries?: Array<BatchPutMessageErrorEntry>;
	}
	export interface BatchPutMessageResponseFormProperties {
	}
	export function CreateBatchPutMessageResponseFormGroup() {
		return new FormGroup<BatchPutMessageResponseFormProperties>({
		});

	}


	/** Contains informations about errors. */
	export interface BatchPutMessageErrorEntry {
		messageId?: string;
		errorCode?: string;
		errorMessage?: string;
	}

	/** Contains informations about errors. */
	export interface BatchPutMessageErrorEntryFormProperties {
		messageId: FormControl<string | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutMessageErrorEntryFormGroup() {
		return new FormGroup<BatchPutMessageErrorEntryFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a message. */
	export interface Message {

		/** Required */
		messageId: string;

		/** Required */
		payload: string;
	}

	/** Information about a message. */
	export interface MessageFormProperties {

		/** Required */
		messageId: FormControl<string | null | undefined>,

		/** Required */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
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

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
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

	export interface CancelPipelineReprocessingResponse {
	}
	export interface CancelPipelineReprocessingResponseFormProperties {
	}
	export function CreateCancelPipelineReprocessingResponseFormGroup() {
		return new FormGroup<CancelPipelineReprocessingResponseFormProperties>({
		});

	}

	export interface CreateChannelResponse {
		channelName?: string;
		channelArn?: string;
		retentionPeriod?: RetentionPeriod;
	}
	export interface CreateChannelResponseFormProperties {
		channelName: FormControl<string | null | undefined>,
		channelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelResponseFormGroup() {
		return new FormGroup<CreateChannelResponseFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined),
			channelArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** How long, in days, message data is kept. */
	export interface RetentionPeriod {
		unlimited?: boolean | null;
		numberOfDays?: number | null;
	}

	/** How long, in days, message data is kept. */
	export interface RetentionPeriodFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		numberOfDays: FormControl<number | null | undefined>,
	}
	export function CreateRetentionPeriodFormGroup() {
		return new FormGroup<RetentionPeriodFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			numberOfDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice of S3 storage after the data store is created. */
	export interface ServiceManagedChannelS3Storage {
	}

	/** Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice of S3 storage after the data store is created. */
	export interface ServiceManagedChannelS3StorageFormProperties {
	}
	export function CreateServiceManagedChannelS3StorageFormGroup() {
		return new FormGroup<ServiceManagedChannelS3StorageFormProperties>({
		});

	}


	/** Used to store channel data in an S3 bucket that you manage. If customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created. */
	export interface CustomerManagedChannelS3Storage {

		/** Required */
		bucket: string;
		keyPrefix?: string;

		/** Required */
		roleArn: string;
	}

	/** Used to store channel data in an S3 bucket that you manage. If customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created. */
	export interface CustomerManagedChannelS3StorageFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomerManagedChannelS3StorageFormGroup() {
		return new FormGroup<CustomerManagedChannelS3StorageFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A set of key-value pairs that are used to manage the resource. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** A set of key-value pairs that are used to manage the resource. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
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

	export interface CreateDatasetResponse {
		datasetName?: string;
		datasetArn?: string;
		retentionPeriod?: RetentionPeriod;
	}
	export interface CreateDatasetResponseFormProperties {
		datasetName: FormControl<string | null | undefined>,
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
			datasetName: new FormControl<string | null | undefined>(undefined),
			datasetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A <code>DatasetAction</code> object that specifies how dataset contents are automatically created. */
	export interface DatasetAction {
		actionName?: string;
		queryAction?: SqlQueryDatasetAction;
		containerAction?: ContainerDatasetAction;
	}

	/** A <code>DatasetAction</code> object that specifies how dataset contents are automatically created. */
	export interface DatasetActionFormProperties {
		actionName: FormControl<string | null | undefined>,
	}
	export function CreateDatasetActionFormGroup() {
		return new FormGroup<DatasetActionFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SQL query to modify the message. */
	export interface SqlQueryDatasetAction {

		/** Required */
		sqlQuery: string;
		filters?: Array<QueryFilter>;
	}

	/** The SQL query to modify the message. */
	export interface SqlQueryDatasetActionFormProperties {

		/** Required */
		sqlQuery: FormControl<string | null | undefined>,
	}
	export function CreateSqlQueryDatasetActionFormGroup() {
		return new FormGroup<SqlQueryDatasetActionFormProperties>({
			sqlQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information that is used to filter message data, to segregate it according to the timeframe in which it arrives. */
	export interface QueryFilter {
		deltaTime?: DeltaTime;
	}

	/** Information that is used to filter message data, to segregate it according to the timeframe in which it arrives. */
	export interface QueryFilterFormProperties {
	}
	export function CreateQueryFilterFormGroup() {
		return new FormGroup<QueryFilterFormProperties>({
		});

	}


	/** Used to limit data to that which has arrived since the last execution of the action. */
	export interface DeltaTime {

		/** Required */
		offsetSeconds: number;

		/** Required */
		timeExpression: string;
	}

	/** Used to limit data to that which has arrived since the last execution of the action. */
	export interface DeltaTimeFormProperties {

		/** Required */
		offsetSeconds: FormControl<number | null | undefined>,

		/** Required */
		timeExpression: FormControl<string | null | undefined>,
	}
	export function CreateDeltaTimeFormGroup() {
		return new FormGroup<DeltaTimeFormProperties>({
			offsetSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information required to run the <code>containerAction</code> to produce dataset contents. */
	export interface ContainerDatasetAction {

		/** Required */
		image: string;

		/** Required */
		executionRoleArn: string;

		/** Required */
		resourceConfiguration: ResourceConfiguration;
		variables?: Array<Variable>;
	}

	/** Information required to run the <code>containerAction</code> to produce dataset contents. */
	export interface ContainerDatasetActionFormProperties {

		/** Required */
		image: FormControl<string | null | undefined>,

		/** Required */
		executionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateContainerDatasetActionFormGroup() {
		return new FormGroup<ContainerDatasetActionFormProperties>({
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration of the resource used to execute the <code>containerAction</code>. */
	export interface ResourceConfiguration {

		/** Required */
		computeType: ComputeType;

		/** Required */
		volumeSizeInGB: number;
	}

	/** The configuration of the resource used to execute the <code>containerAction</code>. */
	export interface ResourceConfigurationFormProperties {

		/** Required */
		computeType: FormControl<ComputeType | null | undefined>,

		/** Required */
		volumeSizeInGB: FormControl<number | null | undefined>,
	}
	export function CreateResourceConfigurationFormGroup() {
		return new FormGroup<ResourceConfigurationFormProperties>({
			computeType: new FormControl<ComputeType | null | undefined>(undefined, [Validators.required]),
			volumeSizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComputeType { ACU_1 = 'ACU_1', ACU_2 = 'ACU_2' }


	/** An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>. */
	export interface Variable {

		/** Required */
		name: string;
		stringValue?: string;
		doubleValue?: number | null;
		datasetContentVersionValue?: DatasetContentVersionValue;
		outputFileUriValue?: OutputFileUriValue;
	}

	/** An instance of a variable to be passed to the <code>containerAction</code> execution. Each variable must have a name and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>. */
	export interface VariableFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stringValue: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The dataset whose latest contents are used as input to the notebook or application. */
	export interface DatasetContentVersionValue {

		/** Required */
		datasetName: string;
	}

	/** The dataset whose latest contents are used as input to the notebook or application. */
	export interface DatasetContentVersionValueFormProperties {

		/** Required */
		datasetName: FormControl<string | null | undefined>,
	}
	export function CreateDatasetContentVersionValueFormGroup() {
		return new FormGroup<DatasetContentVersionValueFormProperties>({
			datasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The value of the variable as a structure that specifies an output file URI. */
	export interface OutputFileUriValue {

		/** Required */
		fileName: string;
	}

	/** The value of the variable as a structure that specifies an output file URI. */
	export interface OutputFileUriValueFormProperties {

		/** Required */
		fileName: FormControl<string | null | undefined>,
	}
	export function CreateOutputFileUriValueFormGroup() {
		return new FormGroup<OutputFileUriValueFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated. */
	export interface DatasetTrigger {
		schedule?: Schedule;
		dataset?: TriggeringDataset;
	}

	/** The <code>DatasetTrigger</code> that specifies when the dataset is automatically updated. */
	export interface DatasetTriggerFormProperties {
	}
	export function CreateDatasetTriggerFormGroup() {
		return new FormGroup<DatasetTriggerFormProperties>({
		});

	}


	/** The schedule for when to trigger an update. */
	export interface Schedule {
		expression?: string;
	}

	/** The schedule for when to trigger an update. */
	export interface ScheduleFormProperties {
		expression: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the dataset whose content generation triggers the new dataset content generation. */
	export interface TriggeringDataset {

		/** Required */
		name: string;
	}

	/** Information about the dataset whose content generation triggers the new dataset content generation. */
	export interface TriggeringDatasetFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTriggeringDatasetFormGroup() {
		return new FormGroup<TriggeringDatasetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** When dataset contents are created, they are delivered to destination specified here. */
	export interface DatasetContentDeliveryRule {
		entryName?: string;

		/** Required */
		destination: DatasetContentDeliveryDestination;
	}

	/** When dataset contents are created, they are delivered to destination specified here. */
	export interface DatasetContentDeliveryRuleFormProperties {
		entryName: FormControl<string | null | undefined>,
	}
	export function CreateDatasetContentDeliveryRuleFormGroup() {
		return new FormGroup<DatasetContentDeliveryRuleFormProperties>({
			entryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The destination to which dataset contents are delivered. */
	export interface DatasetContentDeliveryDestination {
		iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;
		s3DestinationConfiguration?: S3DestinationConfiguration;
	}

	/** The destination to which dataset contents are delivered. */
	export interface DatasetContentDeliveryDestinationFormProperties {
	}
	export function CreateDatasetContentDeliveryDestinationFormGroup() {
		return new FormGroup<DatasetContentDeliveryDestinationFormProperties>({
		});

	}


	/** Configuration information for delivery of dataset contents to IoT Events. */
	export interface IotEventsDestinationConfiguration {

		/** Required */
		inputName: string;

		/** Required */
		roleArn: string;
	}

	/** Configuration information for delivery of dataset contents to IoT Events. */
	export interface IotEventsDestinationConfigurationFormProperties {

		/** Required */
		inputName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateIotEventsDestinationConfigurationFormGroup() {
		return new FormGroup<IotEventsDestinationConfigurationFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3). */
	export interface S3DestinationConfiguration {

		/** Required */
		bucket: string;

		/** Required */
		key: string;
		glueConfiguration?: GlueConfiguration;

		/** Required */
		roleArn: string;
	}

	/** Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3). */
	export interface S3DestinationConfigurationFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationConfigurationFormGroup() {
		return new FormGroup<S3DestinationConfigurationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service. */
	export interface GlueConfiguration {

		/** Required */
		tableName: string;

		/** Required */
		databaseName: string;
	}

	/** Configuration information for coordination with Glue, a fully managed extract, transform and load (ETL) service. */
	export interface GlueConfigurationFormProperties {

		/** Required */
		tableName: FormControl<string | null | undefined>,

		/** Required */
		databaseName: FormControl<string | null | undefined>,
	}
	export function CreateGlueConfigurationFormGroup() {
		return new FormGroup<GlueConfigurationFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure that contains the name and configuration information of a late data rule. */
	export interface LateDataRule {
		ruleName?: string;

		/** Required */
		ruleConfiguration: LateDataRuleConfiguration;
	}

	/** A structure that contains the name and configuration information of a late data rule. */
	export interface LateDataRuleFormProperties {
		ruleName: FormControl<string | null | undefined>,
	}
	export function CreateLateDataRuleFormGroup() {
		return new FormGroup<LateDataRuleFormProperties>({
			ruleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information needed to configure a delta time session window. */
	export interface LateDataRuleConfiguration {
		deltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration;
	}

	/** The information needed to configure a delta time session window. */
	export interface LateDataRuleConfigurationFormProperties {
	}
	export function CreateLateDataRuleConfigurationFormGroup() {
		return new FormGroup<LateDataRuleConfigurationFormProperties>({
		});

	}


	/** <p>A structure that contains the configuration information of a delta time session window.</p> <p> <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html"> <code>DeltaTime</code> </a> specifies a time interval. You can use <code>DeltaTime</code> to create dataset contents with data that has arrived in the data store since the last execution. For an example of <code>DeltaTime</code>, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/automate-create-dataset.html#automate-example6"> Creating a SQL dataset with a delta window (CLI)</a> in the <i>IoT Analytics User Guide</i>.</p> */
	export interface DeltaTimeSessionWindowConfiguration {

		/** Required */
		timeoutInMinutes: number;
	}

	/** <p>A structure that contains the configuration information of a delta time session window.</p> <p> <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html"> <code>DeltaTime</code> </a> specifies a time interval. You can use <code>DeltaTime</code> to create dataset contents with data that has arrived in the data store since the last execution. For an example of <code>DeltaTime</code>, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/automate-create-dataset.html#automate-example6"> Creating a SQL dataset with a delta window (CLI)</a> in the <i>IoT Analytics User Guide</i>.</p> */
	export interface DeltaTimeSessionWindowConfigurationFormProperties {

		/** Required */
		timeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateDeltaTimeSessionWindowConfigurationFormGroup() {
		return new FormGroup<DeltaTimeSessionWindowConfigurationFormProperties>({
			timeoutInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDatasetContentResponse {
		versionId?: string;
	}
	export interface CreateDatasetContentResponseFormProperties {
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetContentResponseFormGroup() {
		return new FormGroup<CreateDatasetContentResponseFormProperties>({
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatastoreResponse {
		datastoreName?: string;
		datastoreArn?: string;
		retentionPeriod?: RetentionPeriod;
	}
	export interface CreateDatastoreResponseFormProperties {
		datastoreName: FormControl<string | null | undefined>,
		datastoreArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatastoreResponseFormGroup() {
		return new FormGroup<CreateDatastoreResponseFormProperties>({
			datastoreName: new FormControl<string | null | undefined>(undefined),
			datastoreArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface ServiceManagedDatastoreS3Storage {
	}

	/** Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface ServiceManagedDatastoreS3StorageFormProperties {
	}
	export function CreateServiceManagedDatastoreS3StorageFormGroup() {
		return new FormGroup<ServiceManagedDatastoreS3StorageFormProperties>({
		});

	}


	/** S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface CustomerManagedDatastoreS3Storage {

		/** Required */
		bucket: string;
		keyPrefix?: string;

		/** Required */
		roleArn: string;
	}

	/** S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface CustomerManagedDatastoreS3StorageFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomerManagedDatastoreS3StorageFormGroup() {
		return new FormGroup<CustomerManagedDatastoreS3StorageFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface DatastoreIotSiteWiseMultiLayerStorage {

		/** Required */
		customerManagedS3Storage: IotSiteWiseCustomerManagedDatastoreS3Storage;
	}

	/**  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface DatastoreIotSiteWiseMultiLayerStorageFormProperties {
	}
	export function CreateDatastoreIotSiteWiseMultiLayerStorageFormGroup() {
		return new FormGroup<DatastoreIotSiteWiseMultiLayerStorageFormProperties>({
		});

	}


	/**  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface IotSiteWiseCustomerManagedDatastoreS3Storage {

		/** Required */
		bucket: string;
		keyPrefix?: string;
	}

	/**  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface IotSiteWiseCustomerManagedDatastoreS3StorageFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateIotSiteWiseCustomerManagedDatastoreS3StorageFormGroup() {
		return new FormGroup<IotSiteWiseCustomerManagedDatastoreS3StorageFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration information of the JSON format. */
	export interface JsonConfiguration {
	}

	/** Contains the configuration information of the JSON format. */
	export interface JsonConfigurationFormProperties {
	}
	export function CreateJsonConfigurationFormGroup() {
		return new FormGroup<JsonConfigurationFormProperties>({
		});

	}


	/** Contains the configuration information of the Parquet format. */
	export interface ParquetConfiguration {
		schemaDefinition?: SchemaDefinition;
	}

	/** Contains the configuration information of the Parquet format. */
	export interface ParquetConfigurationFormProperties {
	}
	export function CreateParquetConfigurationFormGroup() {
		return new FormGroup<ParquetConfigurationFormProperties>({
		});

	}


	/** Information needed to define a schema. */
	export interface SchemaDefinition {
		columns?: Array<Column>;
	}

	/** Information needed to define a schema. */
	export interface SchemaDefinitionFormProperties {
	}
	export function CreateSchemaDefinitionFormGroup() {
		return new FormGroup<SchemaDefinitionFormProperties>({
		});

	}


	/** Contains information about a column that stores your data. */
	export interface Column {

		/** Required */
		name: string;

		/** Required */
		type: string;
	}

	/** Contains information about a column that stores your data. */
	export interface ColumnFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateColumnFormGroup() {
		return new FormGroup<ColumnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>.  */
	export interface DatastorePartition {
		attributePartition?: Partition;
		timestampPartition?: TimestampPartition;
	}

	/**  A single dimension to partition a data store. The dimension must be an <code>AttributePartition</code> or a <code>TimestampPartition</code>.  */
	export interface DatastorePartitionFormProperties {
	}
	export function CreateDatastorePartitionFormGroup() {
		return new FormGroup<DatastorePartitionFormProperties>({
		});

	}


	/**  A partition dimension defined by an attribute.  */
	export interface Partition {

		/** Required */
		attributeName: string;
	}

	/**  A partition dimension defined by an attribute.  */
	export interface PartitionFormProperties {

		/** Required */
		attributeName: FormControl<string | null | undefined>,
	}
	export function CreatePartitionFormGroup() {
		return new FormGroup<PartitionFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A partition dimension defined by a timestamp attribute.  */
	export interface TimestampPartition {

		/** Required */
		attributeName: string;
		timestampFormat?: string;
	}

	/**  A partition dimension defined by a timestamp attribute.  */
	export interface TimestampPartitionFormProperties {

		/** Required */
		attributeName: FormControl<string | null | undefined>,
		timestampFormat: FormControl<string | null | undefined>,
	}
	export function CreateTimestampPartitionFormGroup() {
		return new FormGroup<TimestampPartitionFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestampFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePipelineResponse {
		pipelineName?: string;
		pipelineArn?: string;
	}
	export interface CreatePipelineResponseFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		pipelineArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelineResponseFormGroup() {
		return new FormGroup<CreatePipelineResponseFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			pipelineArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that performs a transformation on a message. */
	export interface PipelineActivity {
		channel?: ChannelActivity;
		lambda?: LambdaActivity;
		datastore?: DatastoreActivity;
		addAttributes?: AddAttributesActivity;
		removeAttributes?: RemoveAttributesActivity;
		selectAttributes?: SelectAttributesActivity;
		filter?: FilterActivity;
		math?: MathActivity;
		deviceRegistryEnrich?: DeviceRegistryEnrichActivity;
		deviceShadowEnrich?: DeviceShadowEnrichActivity;
	}

	/** An activity that performs a transformation on a message. */
	export interface PipelineActivityFormProperties {
	}
	export function CreatePipelineActivityFormGroup() {
		return new FormGroup<PipelineActivityFormProperties>({
		});

	}


	/** The activity that determines the source of the messages to be processed. */
	export interface ChannelActivity {

		/** Required */
		name: string;

		/** Required */
		channelName: string;
		next?: string;
	}

	/** The activity that determines the source of the messages to be processed. */
	export interface ChannelActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		channelName: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateChannelActivityFormGroup() {
		return new FormGroup<ChannelActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			channelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that runs a Lambda function to modify the message. */
	export interface LambdaActivity {

		/** Required */
		name: string;

		/** Required */
		lambdaName: string;

		/** Required */
		batchSize: number;
		next?: string;
	}

	/** An activity that runs a Lambda function to modify the message. */
	export interface LambdaActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		lambdaName: FormControl<string | null | undefined>,

		/** Required */
		batchSize: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateLambdaActivityFormGroup() {
		return new FormGroup<LambdaActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lambdaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			batchSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The datastore activity that specifies where to store the processed data. */
	export interface DatastoreActivity {

		/** Required */
		name: string;

		/** Required */
		datastoreName: string;
	}

	/** The datastore activity that specifies where to store the processed data. */
	export interface DatastoreActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		datastoreName: FormControl<string | null | undefined>,
	}
	export function CreateDatastoreActivityFormGroup() {
		return new FormGroup<DatastoreActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			datastoreName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An activity that adds other attributes based on existing attributes in the message. */
	export interface AddAttributesActivity {

		/** Required */
		name: string;

		/** Required */
		attributes: AttributeNameMapping;
		next?: string;
	}

	/** An activity that adds other attributes based on existing attributes in the message. */
	export interface AddAttributesActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateAddAttributesActivityFormGroup() {
		return new FormGroup<AddAttributesActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttributeNameMapping {
	}
	export interface AttributeNameMappingFormProperties {
	}
	export function CreateAttributeNameMappingFormGroup() {
		return new FormGroup<AttributeNameMappingFormProperties>({
		});

	}


	/** An activity that removes attributes from a message. */
	export interface RemoveAttributesActivity {

		/** Required */
		name: string;

		/** Required */
		attributes: Array<string>;
		next?: string;
	}

	/** An activity that removes attributes from a message. */
	export interface RemoveAttributesActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAttributesActivityFormGroup() {
		return new FormGroup<RemoveAttributesActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to create a new message using only the specified attributes from the original message. */
	export interface SelectAttributesActivity {

		/** Required */
		name: string;

		/** Required */
		attributes: Array<string>;
		next?: string;
	}

	/** Used to create a new message using only the specified attributes from the original message. */
	export interface SelectAttributesActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateSelectAttributesActivityFormGroup() {
		return new FormGroup<SelectAttributesActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that filters a message based on its attributes. */
	export interface FilterActivity {

		/** Required */
		name: string;

		/** Required */
		filter: string;
		next?: string;
	}

	/** An activity that filters a message based on its attributes. */
	export interface FilterActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		filter: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateFilterActivityFormGroup() {
		return new FormGroup<FilterActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that computes an arithmetic expression using the message's attributes. */
	export interface MathActivity {

		/** Required */
		name: string;

		/** Required */
		attribute: string;

		/** Required */
		math: string;
		next?: string;
	}

	/** An activity that computes an arithmetic expression using the message's attributes. */
	export interface MathActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		attribute: FormControl<string | null | undefined>,

		/** Required */
		math: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateMathActivityFormGroup() {
		return new FormGroup<MathActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			attribute: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			math: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that adds data from the IoT device registry to your message. */
	export interface DeviceRegistryEnrichActivity {

		/** Required */
		name: string;

		/** Required */
		attribute: string;

		/** Required */
		thingName: string;

		/** Required */
		roleArn: string;
		next?: string;
	}

	/** An activity that adds data from the IoT device registry to your message. */
	export interface DeviceRegistryEnrichActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		attribute: FormControl<string | null | undefined>,

		/** Required */
		thingName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateDeviceRegistryEnrichActivityFormGroup() {
		return new FormGroup<DeviceRegistryEnrichActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			attribute: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that adds information from the IoT Device Shadow service to a message. */
	export interface DeviceShadowEnrichActivity {

		/** Required */
		name: string;

		/** Required */
		attribute: string;

		/** Required */
		thingName: string;

		/** Required */
		roleArn: string;
		next?: string;
	}

	/** An activity that adds information from the IoT Device Shadow service to a message. */
	export interface DeviceShadowEnrichActivityFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		attribute: FormControl<string | null | undefined>,

		/** Required */
		thingName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateDeviceShadowEnrichActivityFormGroup() {
		return new FormGroup<DeviceShadowEnrichActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			attribute: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelResponse {
		channel?: Channel;
		statistics?: ChannelStatistics;
	}
	export interface DescribeChannelResponseFormProperties {
	}
	export function CreateDescribeChannelResponseFormGroup() {
		return new FormGroup<DescribeChannelResponseFormProperties>({
		});

	}


	/** A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline. */
	export interface Channel {
		name?: string;
		storage?: ChannelStorage;
		arn?: string;
		status?: ChannelStatus;
		retentionPeriod?: RetentionPeriod;
		creationTime?: Date;
		lastUpdateTime?: Date;
		lastMessageArrivalTime?: Date;
	}

	/** A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline. */
	export interface ChannelFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		lastMessageArrivalTime: FormControl<Date | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			lastMessageArrivalTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel. */
	export interface ChannelStorage {
		serviceManagedS3?: ServiceManagedChannelS3Storage;
		customerManagedS3?: CustomerManagedChannelS3Storage;
	}

	/** Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel. */
	export interface ChannelStorageFormProperties {
	}
	export function CreateChannelStorageFormGroup() {
		return new FormGroup<ChannelStorageFormProperties>({
		});

	}

	export enum ChannelStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING' }


	/** Statistics information about the channel. */
	export interface ChannelStatistics {
		size?: EstimatedResourceSize;
	}

	/** Statistics information about the channel. */
	export interface ChannelStatisticsFormProperties {
	}
	export function CreateChannelStatisticsFormGroup() {
		return new FormGroup<ChannelStatisticsFormProperties>({
		});

	}


	/** The estimated size of the resource. */
	export interface EstimatedResourceSize {
		estimatedSizeInBytes?: number | null;
		estimatedOn?: Date;
	}

	/** The estimated size of the resource. */
	export interface EstimatedResourceSizeFormProperties {
		estimatedSizeInBytes: FormControl<number | null | undefined>,
		estimatedOn: FormControl<Date | null | undefined>,
	}
	export function CreateEstimatedResourceSizeFormGroup() {
		return new FormGroup<EstimatedResourceSizeFormProperties>({
			estimatedSizeInBytes: new FormControl<number | null | undefined>(undefined),
			estimatedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetResponse {
		dataset?: Dataset;
	}
	export interface DescribeDatasetResponseFormProperties {
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
		});

	}


	/** Information about a dataset. */
	export interface Dataset {
		name?: string;
		arn?: string;
		actions?: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;
		status?: ChannelStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
		retentionPeriod?: RetentionPeriod;
		versioningConfiguration?: VersioningConfiguration;
		lateDataRules?: Array<LateDataRule>;
	}

	/** Information about a dataset. */
	export interface DatasetFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the versioning of dataset contents. */
	export interface VersioningConfiguration {
		unlimited?: boolean | null;
		maxVersions?: number | null;
	}

	/** Information about the versioning of dataset contents. */
	export interface VersioningConfigurationFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		maxVersions: FormControl<number | null | undefined>,
	}
	export function CreateVersioningConfigurationFormGroup() {
		return new FormGroup<VersioningConfigurationFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			maxVersions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDatastoreResponse {
		datastore?: Datastore;
		statistics?: DatastoreStatistics;
	}
	export interface DescribeDatastoreResponseFormProperties {
	}
	export function CreateDescribeDatastoreResponseFormGroup() {
		return new FormGroup<DescribeDatastoreResponseFormProperties>({
		});

	}


	/** Information about a data store. */
	export interface Datastore {
		name?: string;
		storage?: DatastoreStorage;
		arn?: string;
		status?: ChannelStatus;
		retentionPeriod?: RetentionPeriod;
		creationTime?: Date;
		lastUpdateTime?: Date;
		lastMessageArrivalTime?: Date;
		fileFormatConfiguration?: FileFormatConfiguration;
		datastorePartitions?: DatastorePartitions;
	}

	/** Information about a data store. */
	export interface DatastoreFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		lastMessageArrivalTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatastoreFormGroup() {
		return new FormGroup<DatastoreFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			lastMessageArrivalTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface DatastoreStorage {
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
		iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorage;
	}

	/** Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.  */
	export interface DatastoreStorageFormProperties {
	}
	export function CreateDatastoreStorageFormGroup() {
		return new FormGroup<DatastoreStorageFormProperties>({
		});

	}


	/** <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p> */
	export interface FileFormatConfiguration {
		jsonConfiguration?: JsonConfiguration;
		parquetConfiguration?: ParquetConfiguration;
	}

	/** <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p> */
	export interface FileFormatConfigurationFormProperties {
	}
	export function CreateFileFormatConfigurationFormGroup() {
		return new FormGroup<FileFormatConfigurationFormProperties>({
		});

	}


	/**  Contains information about the partition dimensions in a data store.  */
	export interface DatastorePartitions {
		partitions?: Array<DatastorePartition>;
	}

	/**  Contains information about the partition dimensions in a data store.  */
	export interface DatastorePartitionsFormProperties {
	}
	export function CreateDatastorePartitionsFormGroup() {
		return new FormGroup<DatastorePartitionsFormProperties>({
		});

	}


	/** Statistical information about the data store. */
	export interface DatastoreStatistics {
		size?: EstimatedResourceSize;
	}

	/** Statistical information about the data store. */
	export interface DatastoreStatisticsFormProperties {
	}
	export function CreateDatastoreStatisticsFormGroup() {
		return new FormGroup<DatastoreStatisticsFormProperties>({
		});

	}

	export interface DescribeLoggingOptionsResponse {
		loggingOptions?: LoggingOptions;
	}
	export interface DescribeLoggingOptionsResponseFormProperties {
	}
	export function CreateDescribeLoggingOptionsResponseFormGroup() {
		return new FormGroup<DescribeLoggingOptionsResponseFormProperties>({
		});

	}


	/** Information about logging options. */
	export interface LoggingOptions {

		/** Required */
		roleArn: string;

		/** Required */
		level: LoggingLevel;

		/** Required */
		enabled: boolean;
	}

	/** Information about logging options. */
	export interface LoggingOptionsFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		level: FormControl<LoggingLevel | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingOptionsFormGroup() {
		return new FormGroup<LoggingOptionsFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			level: new FormControl<LoggingLevel | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LoggingLevel { ERROR = 'ERROR' }

	export interface DescribePipelineResponse {
		pipeline?: Pipeline;
	}
	export interface DescribePipelineResponseFormProperties {
	}
	export function CreateDescribePipelineResponseFormGroup() {
		return new FormGroup<DescribePipelineResponseFormProperties>({
		});

	}


	/** Contains information about a pipeline. */
	export interface Pipeline {
		name?: string;
		arn?: string;
		activities?: Array<PipelineActivity>;
		reprocessingSummaries?: Array<ReprocessingSummary>;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	/** Contains information about a pipeline. */
	export interface PipelineFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreatePipelineFormGroup() {
		return new FormGroup<PipelineFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about pipeline reprocessing. */
	export interface ReprocessingSummary {
		id?: string;
		status?: ReprocessingStatus;
		creationTime?: Date;
	}

	/** Information about pipeline reprocessing. */
	export interface ReprocessingSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		status: FormControl<ReprocessingStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateReprocessingSummaryFormGroup() {
		return new FormGroup<ReprocessingSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReprocessingStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReprocessingStatus { RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', CANCELLED = 'CANCELLED', FAILED = 'FAILED' }

	export interface GetDatasetContentResponse {
		entries?: Array<DatasetEntry>;
		timestamp?: Date;
		status?: DatasetContentStatus;
	}
	export interface GetDatasetContentResponseFormProperties {
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetDatasetContentResponseFormGroup() {
		return new FormGroup<GetDatasetContentResponseFormProperties>({
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The reference to a dataset entry. */
	export interface DatasetEntry {
		entryName?: string;
		dataURI?: string;
	}

	/** The reference to a dataset entry. */
	export interface DatasetEntryFormProperties {
		entryName: FormControl<string | null | undefined>,
		dataURI: FormControl<string | null | undefined>,
	}
	export function CreateDatasetEntryFormGroup() {
		return new FormGroup<DatasetEntryFormProperties>({
			entryName: new FormControl<string | null | undefined>(undefined),
			dataURI: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The state of the dataset contents and the reason they are in this state. */
	export interface DatasetContentStatus {
		state?: DatasetContentState;
		reason?: string;
	}

	/** The state of the dataset contents and the reason they are in this state. */
	export interface DatasetContentStatusFormProperties {
		state: FormControl<DatasetContentState | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateDatasetContentStatusFormGroup() {
		return new FormGroup<DatasetContentStatusFormProperties>({
			state: new FormControl<DatasetContentState | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatasetContentState { CREATING = 'CREATING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }

	export interface ListChannelsResponse {
		channelSummaries?: Array<ChannelSummary>;
		nextToken?: string;
	}
	export interface ListChannelsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a channel. */
	export interface ChannelSummary {
		channelName?: string;
		channelStorage?: ChannelStorageSummary;
		status?: ChannelStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
		lastMessageArrivalTime?: Date;
	}

	/** A summary of information about a channel. */
	export interface ChannelSummaryFormProperties {
		channelName: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		lastMessageArrivalTime: FormControl<Date | null | undefined>,
	}
	export function CreateChannelSummaryFormGroup() {
		return new FormGroup<ChannelSummaryFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			lastMessageArrivalTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Where channel data is stored. */
	export interface ChannelStorageSummary {
		serviceManagedS3?: ServiceManagedChannelS3StorageSummary;
		customerManagedS3?: CustomerManagedChannelS3StorageSummary;
	}

	/** Where channel data is stored. */
	export interface ChannelStorageSummaryFormProperties {
	}
	export function CreateChannelStorageSummaryFormGroup() {
		return new FormGroup<ChannelStorageSummaryFormProperties>({
		});

	}


	/** Used to store channel data in an S3 bucket managed by IoT Analytics. */
	export interface ServiceManagedChannelS3StorageSummary {
	}

	/** Used to store channel data in an S3 bucket managed by IoT Analytics. */
	export interface ServiceManagedChannelS3StorageSummaryFormProperties {
	}
	export function CreateServiceManagedChannelS3StorageSummaryFormGroup() {
		return new FormGroup<ServiceManagedChannelS3StorageSummaryFormProperties>({
		});

	}


	/** Used to store channel data in an S3 bucket that you manage. */
	export interface CustomerManagedChannelS3StorageSummary {
		bucket?: string;
		keyPrefix?: string;
		roleArn?: string;
	}

	/** Used to store channel data in an S3 bucket that you manage. */
	export interface CustomerManagedChannelS3StorageSummaryFormProperties {
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomerManagedChannelS3StorageSummaryFormGroup() {
		return new FormGroup<CustomerManagedChannelS3StorageSummaryFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatasetContentsResponse {
		datasetContentSummaries?: Array<DatasetContentSummary>;
		nextToken?: string;
	}
	export interface ListDatasetContentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetContentsResponseFormGroup() {
		return new FormGroup<ListDatasetContentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about dataset contents. */
	export interface DatasetContentSummary {
		version?: string;
		status?: DatasetContentStatus;
		creationTime?: Date;
		scheduleTime?: Date;
		completionTime?: Date;
	}

	/** Summary information about dataset contents. */
	export interface DatasetContentSummaryFormProperties {
		version: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		scheduleTime: FormControl<Date | null | undefined>,
		completionTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetContentSummaryFormGroup() {
		return new FormGroup<DatasetContentSummaryFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			scheduleTime: new FormControl<Date | null | undefined>(undefined),
			completionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsResponse {
		datasetSummaries?: Array<DatasetSummary>;
		nextToken?: string;
	}
	export interface ListDatasetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a dataset. */
	export interface DatasetSummary {
		datasetName?: string;
		status?: ChannelStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
		triggers?: Array<DatasetTrigger>;
		actions?: Array<DatasetActionSummary>;
	}

	/** A summary of information about a dataset. */
	export interface DatasetSummaryFormProperties {
		datasetName: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetSummaryFormGroup() {
		return new FormGroup<DatasetSummaryFormProperties>({
			datasetName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the action that automatically creates the dataset's contents. */
	export interface DatasetActionSummary {
		actionName?: string;
		actionType?: DatasetActionType;
	}

	/** Information about the action that automatically creates the dataset's contents. */
	export interface DatasetActionSummaryFormProperties {
		actionName: FormControl<string | null | undefined>,
		actionType: FormControl<DatasetActionType | null | undefined>,
	}
	export function CreateDatasetActionSummaryFormGroup() {
		return new FormGroup<DatasetActionSummaryFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined),
			actionType: new FormControl<DatasetActionType | null | undefined>(undefined),
		});

	}

	export enum DatasetActionType { QUERY = 'QUERY', CONTAINER = 'CONTAINER' }

	export interface ListDatastoresResponse {
		datastoreSummaries?: Array<DatastoreSummary>;
		nextToken?: string;
	}
	export interface ListDatastoresResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatastoresResponseFormGroup() {
		return new FormGroup<ListDatastoresResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a data store. */
	export interface DatastoreSummary {
		datastoreName?: string;
		datastoreStorage?: DatastoreStorageSummary;
		status?: ChannelStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
		lastMessageArrivalTime?: Date;
		fileFormatType?: FileFormatType;
		datastorePartitions?: DatastorePartitions;
	}

	/** A summary of information about a data store. */
	export interface DatastoreSummaryFormProperties {
		datastoreName: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		lastMessageArrivalTime: FormControl<Date | null | undefined>,
		fileFormatType: FormControl<FileFormatType | null | undefined>,
	}
	export function CreateDatastoreSummaryFormGroup() {
		return new FormGroup<DatastoreSummaryFormProperties>({
			datastoreName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			lastMessageArrivalTime: new FormControl<Date | null | undefined>(undefined),
			fileFormatType: new FormControl<FileFormatType | null | undefined>(undefined),
		});

	}


	/** Contains information about your data store. */
	export interface DatastoreStorageSummary {
		serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;
		customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;
		iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorageSummary;
	}

	/** Contains information about your data store. */
	export interface DatastoreStorageSummaryFormProperties {
	}
	export function CreateDatastoreStorageSummaryFormGroup() {
		return new FormGroup<DatastoreStorageSummaryFormProperties>({
		});

	}


	/** Contains information about the data store that is managed by IoT Analytics. */
	export interface ServiceManagedDatastoreS3StorageSummary {
	}

	/** Contains information about the data store that is managed by IoT Analytics. */
	export interface ServiceManagedDatastoreS3StorageSummaryFormProperties {
	}
	export function CreateServiceManagedDatastoreS3StorageSummaryFormGroup() {
		return new FormGroup<ServiceManagedDatastoreS3StorageSummaryFormProperties>({
		});

	}


	/** Contains information about the data store that you manage. */
	export interface CustomerManagedDatastoreS3StorageSummary {
		bucket?: string;
		keyPrefix?: string;
		roleArn?: string;
	}

	/** Contains information about the data store that you manage. */
	export interface CustomerManagedDatastoreS3StorageSummaryFormProperties {
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomerManagedDatastoreS3StorageSummaryFormGroup() {
		return new FormGroup<CustomerManagedDatastoreS3StorageSummaryFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains information about the data store that you manage, which stores data used by IoT SiteWise.  */
	export interface DatastoreIotSiteWiseMultiLayerStorageSummary {
		customerManagedS3Storage?: IotSiteWiseCustomerManagedDatastoreS3StorageSummary;
	}

	/**  Contains information about the data store that you manage, which stores data used by IoT SiteWise.  */
	export interface DatastoreIotSiteWiseMultiLayerStorageSummaryFormProperties {
	}
	export function CreateDatastoreIotSiteWiseMultiLayerStorageSummaryFormGroup() {
		return new FormGroup<DatastoreIotSiteWiseMultiLayerStorageSummaryFormProperties>({
		});

	}


	/**  Contains information about the data store that you manage, which stores data used by IoT SiteWise.  */
	export interface IotSiteWiseCustomerManagedDatastoreS3StorageSummary {
		bucket?: string;
		keyPrefix?: string;
	}

	/**  Contains information about the data store that you manage, which stores data used by IoT SiteWise.  */
	export interface IotSiteWiseCustomerManagedDatastoreS3StorageSummaryFormProperties {
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateIotSiteWiseCustomerManagedDatastoreS3StorageSummaryFormGroup() {
		return new FormGroup<IotSiteWiseCustomerManagedDatastoreS3StorageSummaryFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileFormatType { JSON = 'JSON', PARQUET = 'PARQUET' }

	export interface ListPipelinesResponse {
		pipelineSummaries?: Array<PipelineSummary>;
		nextToken?: string;
	}
	export interface ListPipelinesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPipelinesResponseFormGroup() {
		return new FormGroup<ListPipelinesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a pipeline. */
	export interface PipelineSummary {
		pipelineName?: string;
		reprocessingSummaries?: Array<ReprocessingSummary>;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	/** A summary of information about a pipeline. */
	export interface PipelineSummaryFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreatePipelineSummaryFormGroup() {
		return new FormGroup<PipelineSummaryFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface RunPipelineActivityResponse {
		payloads?: Array<string>;
		logResult?: string;
	}
	export interface RunPipelineActivityResponseFormProperties {
		logResult: FormControl<string | null | undefined>,
	}
	export function CreateRunPipelineActivityResponseFormGroup() {
		return new FormGroup<RunPipelineActivityResponseFormProperties>({
			logResult: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SampleChannelDataResponse {
		payloads?: Array<string>;
	}
	export interface SampleChannelDataResponseFormProperties {
	}
	export function CreateSampleChannelDataResponseFormGroup() {
		return new FormGroup<SampleChannelDataResponseFormProperties>({
		});

	}

	export interface StartPipelineReprocessingResponse {
		reprocessingId?: string;
	}
	export interface StartPipelineReprocessingResponseFormProperties {
		reprocessingId: FormControl<string | null | undefined>,
	}
	export function CreateStartPipelineReprocessingResponseFormGroup() {
		return new FormGroup<StartPipelineReprocessingResponseFormProperties>({
			reprocessingId: new FormControl<string | null | undefined>(undefined),
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface BatchPutMessageRequest {

		/** Required */
		channelName: string;

		/** Required */
		messages: Array<Message>;
	}
	export interface BatchPutMessageRequestFormProperties {

		/** Required */
		channelName: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutMessageRequestFormGroup() {
		return new FormGroup<BatchPutMessageRequestFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelPipelineReprocessingRequest {
	}
	export interface CancelPipelineReprocessingRequestFormProperties {
	}
	export function CreateCancelPipelineReprocessingRequestFormGroup() {
		return new FormGroup<CancelPipelineReprocessingRequestFormProperties>({
		});

	}


	/** Specifies one or more sets of channel messages. */
	export interface ChannelMessages {
		s3Paths?: Array<string>;
	}

	/** Specifies one or more sets of channel messages. */
	export interface ChannelMessagesFormProperties {
	}
	export function CreateChannelMessagesFormGroup() {
		return new FormGroup<ChannelMessagesFormProperties>({
		});

	}

	export interface CreateChannelRequest {

		/** Required */
		channelName: string;
		channelStorage?: ChannelStorage;
		retentionPeriod?: RetentionPeriod;
		tags?: Array<Tag>;
	}
	export interface CreateChannelRequestFormProperties {

		/** Required */
		channelName: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDatasetContentRequest {
		versionId?: string;
	}
	export interface CreateDatasetContentRequestFormProperties {
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetContentRequestFormGroup() {
		return new FormGroup<CreateDatasetContentRequestFormProperties>({
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetRequest {

		/** Required */
		datasetName: string;

		/** Required */
		actions: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;
		retentionPeriod?: RetentionPeriod;
		versioningConfiguration?: VersioningConfiguration;
		tags?: Array<Tag>;
		lateDataRules?: Array<LateDataRule>;
	}
	export interface CreateDatasetRequestFormProperties {

		/** Required */
		datasetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			datasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDatastoreRequest {

		/** Required */
		datastoreName: string;
		datastoreStorage?: DatastoreStorage;
		retentionPeriod?: RetentionPeriod;
		tags?: Array<Tag>;
		fileFormatConfiguration?: FileFormatConfiguration;
		datastorePartitions?: DatastorePartitions;
	}
	export interface CreateDatastoreRequestFormProperties {

		/** Required */
		datastoreName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatastoreRequestFormGroup() {
		return new FormGroup<CreateDatastoreRequestFormProperties>({
			datastoreName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePipelineRequest {

		/** Required */
		pipelineName: string;

		/** Required */
		pipelineActivities: Array<PipelineActivity>;
		tags?: Array<Tag>;
	}
	export interface CreatePipelineRequestFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelineRequestFormGroup() {
		return new FormGroup<CreatePipelineRequestFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatasetStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING' }

	export enum DatastoreStatus { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING' }

	export interface DeleteChannelRequest {
	}
	export interface DeleteChannelRequestFormProperties {
	}
	export function CreateDeleteChannelRequestFormGroup() {
		return new FormGroup<DeleteChannelRequestFormProperties>({
		});

	}

	export interface DeleteDatasetContentRequest {
	}
	export interface DeleteDatasetContentRequestFormProperties {
	}
	export function CreateDeleteDatasetContentRequestFormGroup() {
		return new FormGroup<DeleteDatasetContentRequestFormProperties>({
		});

	}

	export interface DeleteDatasetRequest {
	}
	export interface DeleteDatasetRequestFormProperties {
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
		});

	}

	export interface DeleteDatastoreRequest {
	}
	export interface DeleteDatastoreRequestFormProperties {
	}
	export function CreateDeleteDatastoreRequestFormGroup() {
		return new FormGroup<DeleteDatastoreRequestFormProperties>({
		});

	}

	export interface DeletePipelineRequest {
	}
	export interface DeletePipelineRequestFormProperties {
	}
	export function CreateDeletePipelineRequestFormGroup() {
		return new FormGroup<DeletePipelineRequestFormProperties>({
		});

	}

	export interface DescribeChannelRequest {
	}
	export interface DescribeChannelRequestFormProperties {
	}
	export function CreateDescribeChannelRequestFormGroup() {
		return new FormGroup<DescribeChannelRequestFormProperties>({
		});

	}

	export interface DescribeDatasetRequest {
	}
	export interface DescribeDatasetRequestFormProperties {
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
		});

	}

	export interface DescribeDatastoreRequest {
	}
	export interface DescribeDatastoreRequestFormProperties {
	}
	export function CreateDescribeDatastoreRequestFormGroup() {
		return new FormGroup<DescribeDatastoreRequestFormProperties>({
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

	export interface DescribePipelineRequest {
	}
	export interface DescribePipelineRequestFormProperties {
	}
	export function CreateDescribePipelineRequestFormGroup() {
		return new FormGroup<DescribePipelineRequestFormProperties>({
		});

	}

	export interface GetDatasetContentRequest {
	}
	export interface GetDatasetContentRequestFormProperties {
	}
	export function CreateGetDatasetContentRequestFormGroup() {
		return new FormGroup<GetDatasetContentRequestFormProperties>({
		});

	}

	export interface ListChannelsRequest {
	}
	export interface ListChannelsRequestFormProperties {
	}
	export function CreateListChannelsRequestFormGroup() {
		return new FormGroup<ListChannelsRequestFormProperties>({
		});

	}

	export interface ListDatasetContentsRequest {
	}
	export interface ListDatasetContentsRequestFormProperties {
	}
	export function CreateListDatasetContentsRequestFormGroup() {
		return new FormGroup<ListDatasetContentsRequestFormProperties>({
		});

	}

	export interface ListDatasetsRequest {
	}
	export interface ListDatasetsRequestFormProperties {
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
		});

	}

	export interface ListDatastoresRequest {
	}
	export interface ListDatastoresRequestFormProperties {
	}
	export function CreateListDatastoresRequestFormGroup() {
		return new FormGroup<ListDatastoresRequestFormProperties>({
		});

	}

	export interface ListPipelinesRequest {
	}
	export interface ListPipelinesRequestFormProperties {
	}
	export function CreateListPipelinesRequestFormGroup() {
		return new FormGroup<ListPipelinesRequestFormProperties>({
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

	export interface PutLoggingOptionsRequest {

		/** Required */
		loggingOptions: LoggingOptions;
	}
	export interface PutLoggingOptionsRequestFormProperties {
	}
	export function CreatePutLoggingOptionsRequestFormGroup() {
		return new FormGroup<PutLoggingOptionsRequestFormProperties>({
		});

	}

	export interface RunPipelineActivityRequest {

		/** Required */
		pipelineActivity: PipelineActivity;

		/** Required */
		payloads: Array<string>;
	}
	export interface RunPipelineActivityRequestFormProperties {
	}
	export function CreateRunPipelineActivityRequestFormGroup() {
		return new FormGroup<RunPipelineActivityRequestFormProperties>({
		});

	}

	export interface SampleChannelDataRequest {
	}
	export interface SampleChannelDataRequestFormProperties {
	}
	export function CreateSampleChannelDataRequestFormGroup() {
		return new FormGroup<SampleChannelDataRequestFormProperties>({
		});

	}

	export interface StartPipelineReprocessingRequest {
		startTime?: Date;
		endTime?: Date;
		channelMessages?: ChannelMessages;
	}
	export interface StartPipelineReprocessingRequestFormProperties {
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartPipelineReprocessingRequestFormGroup() {
		return new FormGroup<StartPipelineReprocessingRequestFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: Array<Tag>;
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

	export interface UpdateChannelRequest {
		channelStorage?: ChannelStorage;
		retentionPeriod?: RetentionPeriod;
	}
	export interface UpdateChannelRequestFormProperties {
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
		});

	}

	export interface UpdateDatasetRequest {

		/** Required */
		actions: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;
		retentionPeriod?: RetentionPeriod;
		versioningConfiguration?: VersioningConfiguration;
		lateDataRules?: Array<LateDataRule>;
	}
	export interface UpdateDatasetRequestFormProperties {
	}
	export function CreateUpdateDatasetRequestFormGroup() {
		return new FormGroup<UpdateDatasetRequestFormProperties>({
		});

	}

	export interface UpdateDatastoreRequest {
		retentionPeriod?: RetentionPeriod;
		datastoreStorage?: DatastoreStorage;
		fileFormatConfiguration?: FileFormatConfiguration;
	}
	export interface UpdateDatastoreRequestFormProperties {
	}
	export function CreateUpdateDatastoreRequestFormGroup() {
		return new FormGroup<UpdateDatastoreRequestFormProperties>({
		});

	}

	export interface UpdatePipelineRequest {

		/** Required */
		pipelineActivities: Array<PipelineActivity>;
	}
	export interface UpdatePipelineRequestFormProperties {
	}
	export function CreateUpdatePipelineRequestFormGroup() {
		return new FormGroup<UpdatePipelineRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Sends messages to a channel.
		 * Post messages/batch
		 * @return {BatchPutMessageResponse} Success
		 */
		BatchPutMessage(requestBody: BatchPutMessagePostBody): Observable<BatchPutMessageResponse> {
			return this.http.post<BatchPutMessageResponse>(this.baseUri + 'messages/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the reprocessing of data through the pipeline.
		 * Delete pipelines/{pipelineName}/reprocessing/{reprocessingId}
		 * @param {string} pipelineName The name of pipeline for which data reprocessing is canceled.
		 * @param {string} reprocessingId The ID of the reprocessing task (returned by <code>StartPipelineReprocessing</code>).
		 * @return {CancelPipelineReprocessingResponse} Success
		 */
		CancelPipelineReprocessing(pipelineName: string, reprocessingId: string): Observable<CancelPipelineReprocessingResponse> {
			return this.http.delete<CancelPipelineReprocessingResponse>(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '/reprocessing/' + (reprocessingId == null ? '' : encodeURIComponent(reprocessingId)), {});
		}

		/**
		 * Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
		 * Post channels
		 * @return {void} 
		 */
		CreateChannel(requestBody: CreateChannelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of channels.
		 * Get channels
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'channels?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
		 * Post datasets
		 * @return {void} 
		 */
		CreateDataset(requestBody: CreateDatasetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about datasets.
		 * Get datasets
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDatasetsResponse> {
			return this.http.get<ListDatasetsResponse>(this.baseUri + 'datasets?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
		 * Post datasets/{datasetName}/content
		 * @param {string} datasetName The name of the dataset.
		 * @return {CreateDatasetContentResponse} Success
		 */
		CreateDatasetContent(datasetName: string, requestBody: CreateDatasetContentPostBody): Observable<CreateDatasetContentResponse> {
			return this.http.post<CreateDatasetContentResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the content of the specified dataset.
		 * Delete datasets/{datasetName}/content
		 * @param {string} datasetName The name of the dataset whose content is deleted.
		 * @param {string} versionId The version of the dataset whose content is deleted. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.
		 * @return {void} 
		 */
		DeleteDatasetContent(datasetName: string, versionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the contents of a dataset as presigned URIs.
		 * Get datasets/{datasetName}/content
		 * @param {string} datasetName The name of the dataset whose contents are retrieved.
		 * @param {string} versionId The version of the dataset whose contents are retrieved. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the latest or latest successfully completed dataset. If not specified, "$LATEST_SUCCEEDED" is the default.
		 * @return {GetDatasetContentResponse} Success
		 */
		GetDatasetContent(datasetName: string, versionId: string | null | undefined): Observable<GetDatasetContentResponse> {
			return this.http.get<GetDatasetContentResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), {});
		}

		/**
		 * Creates a data store, which is a repository for messages.
		 * Post datastores
		 * @return {void} 
		 */
		CreateDatastore(requestBody: CreateDatastorePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'datastores', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of data stores.
		 * Get datastores
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListDatastoresResponse} Success
		 */
		ListDatastores(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDatastoresResponse> {
			return this.http.get<ListDatastoresResponse>(this.baseUri + 'datastores?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
		 * Post pipelines
		 * @return {void} 
		 */
		CreatePipeline(requestBody: CreatePipelinePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of pipelines.
		 * Get pipelines
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListPipelinesResponse} Success
		 */
		ListPipelines(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListPipelinesResponse> {
			return this.http.get<ListPipelinesResponse>(this.baseUri + 'pipelines?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Deletes the specified channel.
		 * Delete channels/{channelName}
		 * @param {string} channelName The name of the channel to delete.
		 * @return {void} 
		 */
		DeleteChannel(channelName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a channel.
		 * Get channels/{channelName}
		 * @param {string} channelName The name of the channel whose information is retrieved.
		 * @param {boolean} includeStatistics If true, additional statistical information about the channel is included in the response. This feature can't be used with a channel whose S3 storage is customer-managed.
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(channelName: string, includeStatistics: boolean | null | undefined): Observable<DescribeChannelResponse> {
			return this.http.get<DescribeChannelResponse>(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '&includeStatistics=' + includeStatistics, {});
		}

		/**
		 * Used to update the settings of a channel.
		 * Put channels/{channelName}
		 * @param {string} channelName The name of the channel to be updated.
		 * @return {void} Success
		 */
		UpdateChannel(channelName: string, requestBody: UpdateChannelPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
		 * Delete datasets/{datasetName}
		 * @param {string} datasetName The name of the dataset to delete.
		 * @return {void} 
		 */
		DeleteDataset(datasetName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a dataset.
		 * Get datasets/{datasetName}
		 * @param {string} datasetName The name of the dataset whose information is retrieved.
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(datasetName: string): Observable<DescribeDatasetResponse> {
			return this.http.get<DescribeDatasetResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), {});
		}

		/**
		 * Updates the settings of a dataset.
		 * Put datasets/{datasetName}
		 * @param {string} datasetName The name of the dataset to update.
		 * @return {void} Success
		 */
		UpdateDataset(datasetName: string, requestBody: UpdateDatasetPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified data store.
		 * Delete datastores/{datastoreName}
		 * @param {string} datastoreName The name of the data store to delete.
		 * @return {void} 
		 */
		DeleteDatastore(datastoreName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a data store.
		 * Get datastores/{datastoreName}
		 * @param {string} datastoreName The name of the data store
		 * @param {boolean} includeStatistics If true, additional statistical information about the data store is included in the response. This feature can't be used with a data store whose S3 storage is customer-managed.
		 * @return {DescribeDatastoreResponse} Success
		 */
		DescribeDatastore(datastoreName: string, includeStatistics: boolean | null | undefined): Observable<DescribeDatastoreResponse> {
			return this.http.get<DescribeDatastoreResponse>(this.baseUri + 'datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)) + '&includeStatistics=' + includeStatistics, {});
		}

		/**
		 * Used to update the settings of a data store.
		 * Put datastores/{datastoreName}
		 * @param {string} datastoreName The name of the data store to be updated.
		 * @return {void} Success
		 */
		UpdateDatastore(datastoreName: string, requestBody: UpdateDatastorePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified pipeline.
		 * Delete pipelines/{pipelineName}
		 * @param {string} pipelineName The name of the pipeline to delete.
		 * @return {void} 
		 */
		DeletePipeline(pipelineName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a pipeline.
		 * Get pipelines/{pipelineName}
		 * @param {string} pipelineName The name of the pipeline whose information is retrieved.
		 * @return {DescribePipelineResponse} Success
		 */
		DescribePipeline(pipelineName: string): Observable<DescribePipelineResponse> {
			return this.http.get<DescribePipelineResponse>(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)), {});
		}

		/**
		 * Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
		 * Put pipelines/{pipelineName}
		 * @param {string} pipelineName The name of the pipeline to update.
		 * @return {void} Success
		 */
		UpdatePipeline(pipelineName: string, requestBody: UpdatePipelinePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the current settings of the IoT Analytics logging options.
		 * Get logging
		 * @return {DescribeLoggingOptionsResponse} Success
		 */
		DescribeLoggingOptions(): Observable<DescribeLoggingOptionsResponse> {
			return this.http.get<DescribeLoggingOptionsResponse>(this.baseUri + 'logging', {});
		}

		/**
		 * <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
		 * Put logging
		 * @return {void} Success
		 */
		PutLoggingOptions(requestBody: PutLoggingOptionsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about dataset contents that have been created.
		 * Get datasets/{datasetName}/contents
		 * @param {string} datasetName The name of the dataset whose contents information you want to list.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @param {Date} scheduledOnOrAfter A filter to limit results to those dataset contents whose creation is scheduled on or after the given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code> request. (timestamp)
		 * @param {Date} scheduledBefore A filter to limit results to those dataset contents whose creation is scheduled before the given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code> request. (timestamp)
		 * @return {ListDatasetContentsResponse} Success
		 */
		ListDatasetContents(datasetName: string, nextToken: string | null | undefined, maxResults: number | null | undefined, scheduledOnOrAfter: Date | null | undefined, scheduledBefore: Date | null | undefined): Observable<ListDatasetContentsResponse> {
			return this.http.get<ListDatasetContentsResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/contents&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&scheduledOnOrAfter=' + scheduledOnOrAfter?.toISOString() + '&scheduledBefore=' + scheduledBefore?.toISOString(), {});
		}

		/**
		 * Lists the tags (metadata) that you have assigned to the resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource whose tags you want to list.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
		 * Post tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource whose tags you want to modify.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Simulates the results of running a pipeline activity on a message payload.
		 * Post pipelineactivities/run
		 * @return {RunPipelineActivityResponse} Success
		 */
		RunPipelineActivity(requestBody: RunPipelineActivityPostBody): Observable<RunPipelineActivityResponse> {
			return this.http.post<RunPipelineActivityResponse>(this.baseUri + 'pipelineactivities/run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
		 * Get channels/{channelName}/sample
		 * @param {string} channelName The name of the channel whose message samples are retrieved.
		 * @param {number} maxMessages The number of sample messages to be retrieved. The limit is 10. The default is also 10.
		 * @param {Date} startTime The start of the time window from which sample messages are retrieved.
		 * @param {Date} endTime The end of the time window from which sample messages are retrieved.
		 * @return {SampleChannelDataResponse} Success
		 */
		SampleChannelData(channelName: string, maxMessages: number | null | undefined, startTime: Date | null | undefined, endTime: Date | null | undefined): Observable<SampleChannelDataResponse> {
			return this.http.get<SampleChannelDataResponse>(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '/sample&maxMessages=' + maxMessages + '&startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString(), {});
		}

		/**
		 * Starts the reprocessing of raw message data through the pipeline.
		 * Post pipelines/{pipelineName}/reprocessing
		 * @param {string} pipelineName The name of the pipeline on which to start reprocessing.
		 * @return {StartPipelineReprocessingResponse} Success
		 */
		StartPipelineReprocessing(pipelineName: string, requestBody: StartPipelineReprocessingPostBody): Observable<StartPipelineReprocessingResponse> {
			return this.http.post<StartPipelineReprocessingResponse>(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '/reprocessing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Delete tags#resourceArn&tagKeys
		 * @param {string} resourceArn The ARN of the resource whose tags you want to remove.
		 * @param {Array<string>} tagKeys The keys of those tags which you want to remove.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags#resourceArn&tagKeys?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface BatchPutMessagePostBody {

		/**
		 * The name of the channel where the messages are sent.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelName: string;

		/**
		 * <p>The list of messages to be sent. Each message has the format: { "messageId": "string", "payload": "string"}.</p> <p>The field names of message payloads (data) that you send to IoT Analytics:</p> <ul> <li> <p>Must contain only alphanumeric characters and undescores (_). No other special characters are allowed.</p> </li> <li> <p>Must begin with an alphabetic character or single underscore (_).</p> </li> <li> <p>Cannot contain hyphens (-).</p> </li> <li> <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$". </p> </li> <li> <p>Cannot be more than 255 characters.</p> </li> <li> <p>Are case insensitive. (Fields named foo and FOO in the same payload are considered duplicates.)</p> </li> </ul> <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. </p>
		 * Required
		 */
		messages: Array<Message>;
	}
	export interface BatchPutMessagePostBodyFormProperties {

		/**
		 * The name of the channel where the messages are sent.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelName: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutMessagePostBodyFormGroup() {
		return new FormGroup<BatchPutMessagePostBodyFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('(^(?!_{2}))(^[a-zA-Z0-9_]+$)')]),
		});

	}

	export interface CreateChannelPostBody {

		/**
		 * The name of the channel.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelName: string;

		/** Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel. */
		channelStorage?: CreateChannelPostBodyChannelStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: CreateChannelPostBodyRetentionPeriod;

		/**
		 * Metadata which can be used to manage the channel.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateChannelPostBodyFormProperties {

		/**
		 * The name of the channel.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		channelName: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFormGroup() {
		return new FormGroup<CreateChannelPostBodyFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('(^(?!_{2}))(^[a-zA-Z0-9_]+$)')]),
		});

	}

	export interface CreateChannelPostBodyChannelStorage {
		serviceManagedS3?: ServiceManagedChannelS3Storage;
		customerManagedS3?: CustomerManagedChannelS3Storage;
	}
	export interface CreateChannelPostBodyChannelStorageFormProperties {
	}
	export function CreateCreateChannelPostBodyChannelStorageFormGroup() {
		return new FormGroup<CreateChannelPostBodyChannelStorageFormProperties>({
		});

	}

	export interface CreateChannelPostBodyRetentionPeriod {
		unlimited?: boolean | null;
		numberOfDays?: number | null;
	}
	export interface CreateChannelPostBodyRetentionPeriodFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		numberOfDays: FormControl<number | null | undefined>,
	}
	export function CreateCreateChannelPostBodyRetentionPeriodFormGroup() {
		return new FormGroup<CreateChannelPostBodyRetentionPeriodFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			numberOfDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetPostBody {

		/**
		 * The name of the dataset.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		datasetName: string;

		/**
		 * A list of actions that create the dataset contents.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		actions: Array<DatasetAction>;

		/**
		 * A list of triggers. A trigger causes dataset contents to be populated at a specified time interval or when another dataset's contents are created. The list of triggers can be empty or contain up to five <code>DataSetTrigger</code> objects.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		triggers?: Array<DatasetTrigger>;

		/**
		 * When dataset contents are created, they are delivered to destinations specified here.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: CreateDatasetPostBodyRetentionPeriod;

		/** Information about the versioning of dataset contents. */
		versioningConfiguration?: CreateDatasetPostBodyVersioningConfiguration;

		/**
		 * Metadata which can be used to manage the dataset.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;

		/**
		 * A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		lateDataRules?: Array<LateDataRule>;
	}
	export interface CreateDatasetPostBodyFormProperties {

		/**
		 * The name of the dataset.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		datasetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetPostBodyFormGroup() {
		return new FormGroup<CreateDatasetPostBodyFormProperties>({
			datasetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('(^(?!_{2}))(^[a-zA-Z0-9_]+$)')]),
		});

	}

	export interface CreateDatasetPostBodyRetentionPeriod {
		unlimited?: boolean | null;
		numberOfDays?: number | null;
	}
	export interface CreateDatasetPostBodyRetentionPeriodFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		numberOfDays: FormControl<number | null | undefined>,
	}
	export function CreateCreateDatasetPostBodyRetentionPeriodFormGroup() {
		return new FormGroup<CreateDatasetPostBodyRetentionPeriodFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			numberOfDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetPostBodyVersioningConfiguration {
		unlimited?: boolean | null;
		maxVersions?: number | null;
	}
	export interface CreateDatasetPostBodyVersioningConfigurationFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		maxVersions: FormControl<number | null | undefined>,
	}
	export function CreateCreateDatasetPostBodyVersioningConfigurationFormGroup() {
		return new FormGroup<CreateDatasetPostBodyVersioningConfigurationFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			maxVersions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetContentPostBody {

		/**
		 * The version ID of the dataset content. To specify <code>versionId</code> for a dataset content, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.
		 * Max length: 36
		 * Min length: 7
		 */
		versionId?: string | null;
	}
	export interface CreateDatasetContentPostBodyFormProperties {

		/**
		 * The version ID of the dataset content. To specify <code>versionId</code> for a dataset content, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.
		 * Max length: 36
		 * Min length: 7
		 */
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetContentPostBodyFormGroup() {
		return new FormGroup<CreateDatasetContentPostBodyFormProperties>({
			versionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(7), Validators.maxLength(36)]),
		});

	}

	export interface CreateDatastorePostBody {

		/**
		 * The name of the data store.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		datastoreName: string;

		/** Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. */
		datastoreStorage?: CreateDatastorePostBodyDatastoreStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: CreateDatastorePostBodyRetentionPeriod;

		/**
		 * Metadata which can be used to manage the data store.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;

		/** <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p> */
		fileFormatConfiguration?: CreateDatastorePostBodyFileFormatConfiguration;

		/** Contains information about the partition dimensions in a data store. */
		datastorePartitions?: CreateDatastorePostBodyDatastorePartitions;
	}
	export interface CreateDatastorePostBodyFormProperties {

		/**
		 * The name of the data store.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		datastoreName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatastorePostBodyFormGroup() {
		return new FormGroup<CreateDatastorePostBodyFormProperties>({
			datastoreName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('(^(?!_{2}))(^[a-zA-Z0-9_]+$)')]),
		});

	}

	export interface CreateDatastorePostBodyDatastoreStorage {
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
		iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorage;
	}
	export interface CreateDatastorePostBodyDatastoreStorageFormProperties {
	}
	export function CreateCreateDatastorePostBodyDatastoreStorageFormGroup() {
		return new FormGroup<CreateDatastorePostBodyDatastoreStorageFormProperties>({
		});

	}

	export interface CreateDatastorePostBodyRetentionPeriod {
		unlimited?: boolean | null;
		numberOfDays?: number | null;
	}
	export interface CreateDatastorePostBodyRetentionPeriodFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		numberOfDays: FormControl<number | null | undefined>,
	}
	export function CreateCreateDatastorePostBodyRetentionPeriodFormGroup() {
		return new FormGroup<CreateDatastorePostBodyRetentionPeriodFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			numberOfDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDatastorePostBodyFileFormatConfiguration {
		jsonConfiguration?: JsonConfiguration;
		parquetConfiguration?: ParquetConfiguration;
	}
	export interface CreateDatastorePostBodyFileFormatConfigurationFormProperties {
	}
	export function CreateCreateDatastorePostBodyFileFormatConfigurationFormGroup() {
		return new FormGroup<CreateDatastorePostBodyFileFormatConfigurationFormProperties>({
		});

	}

	export interface CreateDatastorePostBodyDatastorePartitions {
		partitions?: Array<DatastorePartition>;
	}
	export interface CreateDatastorePostBodyDatastorePartitionsFormProperties {
	}
	export function CreateCreateDatastorePostBodyDatastorePartitionsFormGroup() {
		return new FormGroup<CreateDatastorePostBodyDatastorePartitionsFormProperties>({
		});

	}

	export interface CreatePipelinePostBody {

		/**
		 * The name of the pipeline.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		pipelineName: string;

		/**
		 * <p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda unctions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		pipelineActivities: Array<PipelineActivity>;

		/**
		 * Metadata which can be used to manage the pipeline.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreatePipelinePostBodyFormProperties {

		/**
		 * The name of the pipeline.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		pipelineName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelinePostBodyFormGroup() {
		return new FormGroup<CreatePipelinePostBodyFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('(^(?!_{2}))(^[a-zA-Z0-9_]+$)')]),
		});

	}

	export interface UpdateChannelPutBody {

		/** Where channel data is stored. You may choose one of <code>serviceManagedS3</code>, <code>customerManagedS3</code> storage. If not specified, the default is <code>serviceManagedS3</code>. This can't be changed after creation of the channel. */
		channelStorage?: UpdateChannelPutBodyChannelStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: UpdateChannelPutBodyRetentionPeriod;
	}
	export interface UpdateChannelPutBodyFormProperties {
	}
	export function CreateUpdateChannelPutBodyFormGroup() {
		return new FormGroup<UpdateChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateChannelPutBodyChannelStorage {
		serviceManagedS3?: ServiceManagedChannelS3Storage;
		customerManagedS3?: CustomerManagedChannelS3Storage;
	}
	export interface UpdateChannelPutBodyChannelStorageFormProperties {
	}
	export function CreateUpdateChannelPutBodyChannelStorageFormGroup() {
		return new FormGroup<UpdateChannelPutBodyChannelStorageFormProperties>({
		});

	}

	export interface UpdateChannelPutBodyRetentionPeriod {
		unlimited?: boolean | null;
		numberOfDays?: number | null;
	}
	export interface UpdateChannelPutBodyRetentionPeriodFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		numberOfDays: FormControl<number | null | undefined>,
	}
	export function CreateUpdateChannelPutBodyRetentionPeriodFormGroup() {
		return new FormGroup<UpdateChannelPutBodyRetentionPeriodFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			numberOfDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDatasetPutBody {

		/**
		 * A list of <code>DatasetAction</code> objects.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		actions: Array<DatasetAction>;

		/**
		 * A list of <code>DatasetTrigger</code> objects. The list can be empty or can contain up to five <code>DatasetTrigger</code> objects.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		triggers?: Array<DatasetTrigger>;

		/**
		 * When dataset contents are created, they are delivered to destinations specified here.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: UpdateDatasetPutBodyRetentionPeriod;

		/** Information about the versioning of dataset contents. */
		versioningConfiguration?: UpdateDatasetPutBodyVersioningConfiguration;

		/**
		 * A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		lateDataRules?: Array<LateDataRule>;
	}
	export interface UpdateDatasetPutBodyFormProperties {
	}
	export function CreateUpdateDatasetPutBodyFormGroup() {
		return new FormGroup<UpdateDatasetPutBodyFormProperties>({
		});

	}

	export interface UpdateDatasetPutBodyRetentionPeriod {
		unlimited?: boolean | null;
		numberOfDays?: number | null;
	}
	export interface UpdateDatasetPutBodyRetentionPeriodFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		numberOfDays: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDatasetPutBodyRetentionPeriodFormGroup() {
		return new FormGroup<UpdateDatasetPutBodyRetentionPeriodFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			numberOfDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDatasetPutBodyVersioningConfiguration {
		unlimited?: boolean | null;
		maxVersions?: number | null;
	}
	export interface UpdateDatasetPutBodyVersioningConfigurationFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		maxVersions: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDatasetPutBodyVersioningConfigurationFormGroup() {
		return new FormGroup<UpdateDatasetPutBodyVersioningConfigurationFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			maxVersions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDatastorePutBody {

		/** How long, in days, message data is kept. */
		retentionPeriod?: UpdateDatastorePutBodyRetentionPeriod;

		/** Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. */
		datastoreStorage?: UpdateDatastorePutBodyDatastoreStorage;

		/** <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p> */
		fileFormatConfiguration?: UpdateDatastorePutBodyFileFormatConfiguration;
	}
	export interface UpdateDatastorePutBodyFormProperties {
	}
	export function CreateUpdateDatastorePutBodyFormGroup() {
		return new FormGroup<UpdateDatastorePutBodyFormProperties>({
		});

	}

	export interface UpdateDatastorePutBodyRetentionPeriod {
		unlimited?: boolean | null;
		numberOfDays?: number | null;
	}
	export interface UpdateDatastorePutBodyRetentionPeriodFormProperties {
		unlimited: FormControl<boolean | null | undefined>,
		numberOfDays: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDatastorePutBodyRetentionPeriodFormGroup() {
		return new FormGroup<UpdateDatastorePutBodyRetentionPeriodFormProperties>({
			unlimited: new FormControl<boolean | null | undefined>(undefined),
			numberOfDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDatastorePutBodyDatastoreStorage {
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
		iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorage;
	}
	export interface UpdateDatastorePutBodyDatastoreStorageFormProperties {
	}
	export function CreateUpdateDatastorePutBodyDatastoreStorageFormGroup() {
		return new FormGroup<UpdateDatastorePutBodyDatastoreStorageFormProperties>({
		});

	}

	export interface UpdateDatastorePutBodyFileFormatConfiguration {
		jsonConfiguration?: JsonConfiguration;
		parquetConfiguration?: ParquetConfiguration;
	}
	export interface UpdateDatastorePutBodyFileFormatConfigurationFormProperties {
	}
	export function CreateUpdateDatastorePutBodyFileFormatConfigurationFormGroup() {
		return new FormGroup<UpdateDatastorePutBodyFileFormatConfigurationFormProperties>({
		});

	}

	export interface UpdatePipelinePutBody {

		/**
		 * <p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity. For example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		pipelineActivities: Array<PipelineActivity>;
	}
	export interface UpdatePipelinePutBodyFormProperties {
	}
	export function CreateUpdatePipelinePutBodyFormGroup() {
		return new FormGroup<UpdatePipelinePutBodyFormProperties>({
		});

	}

	export interface PutLoggingOptionsPutBody {

		/**
		 * Information about logging options.
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
		roleArn?: string;
		level?: LoggingLevel;
		enabled?: boolean | null;
	}
	export interface PutLoggingOptionsPutBodyLoggingOptionsFormProperties {
		roleArn: FormControl<string | null | undefined>,
		level: FormControl<LoggingLevel | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutLoggingOptionsPutBodyLoggingOptionsFormGroup() {
		return new FormGroup<PutLoggingOptionsPutBodyLoggingOptionsFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<LoggingLevel | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The new or modified tags for the resource.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface RunPipelineActivityPostBody {

		/**
		 * An activity that performs a transformation on a message.
		 * Required
		 */
		pipelineActivity: RunPipelineActivityPostBodyPipelineActivity;

		/**
		 * The sample message payloads on which the pipeline activity is run.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		payloads: Array<string>;
	}
	export interface RunPipelineActivityPostBodyFormProperties {
	}
	export function CreateRunPipelineActivityPostBodyFormGroup() {
		return new FormGroup<RunPipelineActivityPostBodyFormProperties>({
		});

	}

	export interface RunPipelineActivityPostBodyPipelineActivity {
		channel?: ChannelActivity;
		lambda?: LambdaActivity;
		datastore?: DatastoreActivity;
		addAttributes?: AddAttributesActivity;
		removeAttributes?: RemoveAttributesActivity;
		selectAttributes?: SelectAttributesActivity;
		filter?: FilterActivity;
		math?: MathActivity;
		deviceRegistryEnrich?: DeviceRegistryEnrichActivity;
		deviceShadowEnrich?: DeviceShadowEnrichActivity;
	}
	export interface RunPipelineActivityPostBodyPipelineActivityFormProperties {
	}
	export function CreateRunPipelineActivityPostBodyPipelineActivityFormGroup() {
		return new FormGroup<RunPipelineActivityPostBodyPipelineActivityFormProperties>({
		});

	}

	export interface StartPipelineReprocessingPostBody {

		/** <p>The start time (inclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>startTime</code> parameter, you must not use the <code>channelMessages</code> object.</p> */
		startTime?: Date | null;

		/** <p>The end time (exclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>endTime</code> parameter, you must not use the <code>channelMessages</code> object.</p> */
		endTime?: Date | null;

		/** Specifies one or more sets of channel messages. */
		channelMessages?: StartPipelineReprocessingPostBodyChannelMessages;
	}
	export interface StartPipelineReprocessingPostBodyFormProperties {

		/** <p>The start time (inclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>startTime</code> parameter, you must not use the <code>channelMessages</code> object.</p> */
		startTime: FormControl<Date | null | undefined>,

		/** <p>The end time (exclusive) of raw message data that is reprocessed.</p> <p>If you specify a value for the <code>endTime</code> parameter, you must not use the <code>channelMessages</code> object.</p> */
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartPipelineReprocessingPostBodyFormGroup() {
		return new FormGroup<StartPipelineReprocessingPostBodyFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartPipelineReprocessingPostBodyChannelMessages {
		s3Paths?: Array<string>;
	}
	export interface StartPipelineReprocessingPostBodyChannelMessagesFormProperties {
	}
	export function CreateStartPipelineReprocessingPostBodyChannelMessagesFormGroup() {
		return new FormGroup<StartPipelineReprocessingPostBodyChannelMessagesFormProperties>({
		});

	}

}

