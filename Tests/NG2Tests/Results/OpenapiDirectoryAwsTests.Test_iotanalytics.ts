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
		messageId?: string | null;
		errorCode?: string | null;
		errorMessage?: string | null;
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
		messageId: string;
		payload: string;
	}

	/** Information about a message. */
	export interface MessageFormProperties {
		messageId: FormControl<string | null | undefined>,
		payload: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			messageId: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
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
		channelName?: string | null;
		channelArn?: string | null;

		/** How long, in days, message data is kept. */
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


	/** Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
	export interface ServiceManagedChannelS3Storage {
	}

	/** Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
	export interface ServiceManagedChannelS3StorageFormProperties {
	}
	export function CreateServiceManagedChannelS3StorageFormGroup() {
		return new FormGroup<ServiceManagedChannelS3StorageFormProperties>({
		});

	}


	/** Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
	export interface CustomerManagedChannelS3Storage {
		bucket: string;
		keyPrefix?: string | null;
		roleArn: string;
	}

	/** Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
	export interface CustomerManagedChannelS3StorageFormProperties {
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomerManagedChannelS3StorageFormGroup() {
		return new FormGroup<CustomerManagedChannelS3StorageFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of key/value pairs which are used to manage the resource. */
	export interface Tag {
		key: string;
		value: string;
	}

	/** A set of key/value pairs which are used to manage the resource. */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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
		datasetName?: string | null;
		datasetArn?: string | null;

		/** How long, in days, message data is kept. */
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


	/** A "DatasetAction" object that specifies how data set contents are automatically created. */
	export interface DatasetAction {
		actionName?: string | null;

		/** The SQL query to modify the message. */
		queryAction?: SqlQueryDatasetAction;

		/** Information needed to run the "containerAction" to produce data set contents. */
		containerAction?: ContainerDatasetAction;
	}

	/** A "DatasetAction" object that specifies how data set contents are automatically created. */
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
		sqlQuery: string;
		filters?: Array<QueryFilter>;
	}

	/** The SQL query to modify the message. */
	export interface SqlQueryDatasetActionFormProperties {
		sqlQuery: FormControl<string | null | undefined>,
	}
	export function CreateSqlQueryDatasetActionFormGroup() {
		return new FormGroup<SqlQueryDatasetActionFormProperties>({
			sqlQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information which is used to filter message data, to segregate it according to the time frame in which it arrives. */
	export interface QueryFilter {

		/** Used to limit data to that which has arrived since the last execution of the action. */
		deltaTime?: DeltaTime;
	}

	/** Information which is used to filter message data, to segregate it according to the time frame in which it arrives. */
	export interface QueryFilterFormProperties {
	}
	export function CreateQueryFilterFormGroup() {
		return new FormGroup<QueryFilterFormProperties>({
		});

	}


	/** Used to limit data to that which has arrived since the last execution of the action. */
	export interface DeltaTime {
		offsetSeconds: number;
		timeExpression: string;
	}

	/** Used to limit data to that which has arrived since the last execution of the action. */
	export interface DeltaTimeFormProperties {
		offsetSeconds: FormControl<number | null | undefined>,
		timeExpression: FormControl<string | null | undefined>,
	}
	export function CreateDeltaTimeFormGroup() {
		return new FormGroup<DeltaTimeFormProperties>({
			offsetSeconds: new FormControl<number | null | undefined>(undefined),
			timeExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information needed to run the "containerAction" to produce data set contents. */
	export interface ContainerDatasetAction {
		image: string;
		executionRoleArn: string;

		/**
		 * The configuration of the resource used to execute the "containerAction".
		 * Required
		 */
		resourceConfiguration: ResourceConfiguration;
		variables?: Array<Variable>;
	}

	/** Information needed to run the "containerAction" to produce data set contents. */
	export interface ContainerDatasetActionFormProperties {
		image: FormControl<string | null | undefined>,
		executionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateContainerDatasetActionFormGroup() {
		return new FormGroup<ContainerDatasetActionFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			executionRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration of the resource used to execute the "containerAction". */
	export interface ResourceConfiguration {
		computeType: ResourceConfigurationComputeType;
		volumeSizeInGB: number;
	}

	/** The configuration of the resource used to execute the "containerAction". */
	export interface ResourceConfigurationFormProperties {
		computeType: FormControl<ResourceConfigurationComputeType | null | undefined>,
		volumeSizeInGB: FormControl<number | null | undefined>,
	}
	export function CreateResourceConfigurationFormGroup() {
		return new FormGroup<ResourceConfigurationFormProperties>({
			computeType: new FormControl<ResourceConfigurationComputeType | null | undefined>(undefined),
			volumeSizeInGB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResourceConfigurationComputeType { ACU_1 = 0, ACU_2 = 1 }


	/** An instance of a variable to be passed to the "containerAction" execution. Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue". */
	export interface Variable {
		name: string;
		stringValue?: string | null;
		doubleValue?: number | null;

		/** The data set whose latest contents are used as input to the notebook or application. */
		datasetContentVersionValue?: DatasetContentVersionValue;

		/** The value of the variable as a structure that specifies an output file URI. */
		outputFileUriValue?: OutputFileUriValue;
	}

	/** An instance of a variable to be passed to the "containerAction" execution. Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue". */
	export interface VariableFormProperties {
		name: FormControl<string | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data set whose latest contents are used as input to the notebook or application. */
	export interface DatasetContentVersionValue {
		datasetName: string;
	}

	/** The data set whose latest contents are used as input to the notebook or application. */
	export interface DatasetContentVersionValueFormProperties {
		datasetName: FormControl<string | null | undefined>,
	}
	export function CreateDatasetContentVersionValueFormGroup() {
		return new FormGroup<DatasetContentVersionValueFormProperties>({
			datasetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value of the variable as a structure that specifies an output file URI. */
	export interface OutputFileUriValue {
		fileName: string;
	}

	/** The value of the variable as a structure that specifies an output file URI. */
	export interface OutputFileUriValueFormProperties {
		fileName: FormControl<string | null | undefined>,
	}
	export function CreateOutputFileUriValueFormGroup() {
		return new FormGroup<OutputFileUriValueFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The "DatasetTrigger" that specifies when the data set is automatically updated. */
	export interface DatasetTrigger {

		/** The schedule for when to trigger an update. */
		schedule?: Schedule;

		/** Information about the data set whose content generation triggers the new data set content generation. */
		dataset?: TriggeringDataset;
	}

	/** The "DatasetTrigger" that specifies when the data set is automatically updated. */
	export interface DatasetTriggerFormProperties {
	}
	export function CreateDatasetTriggerFormGroup() {
		return new FormGroup<DatasetTriggerFormProperties>({
		});

	}


	/** The schedule for when to trigger an update. */
	export interface Schedule {
		expression?: string | null;
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


	/** Information about the data set whose content generation triggers the new data set content generation. */
	export interface TriggeringDataset {
		name: string;
	}

	/** Information about the data set whose content generation triggers the new data set content generation. */
	export interface TriggeringDatasetFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateTriggeringDatasetFormGroup() {
		return new FormGroup<TriggeringDatasetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** When data set contents are created they are delivered to destination specified here. */
	export interface DatasetContentDeliveryRule {
		entryName?: string | null;

		/**
		 * The destination to which data set contents are delivered.
		 * Required
		 */
		destination: DatasetContentDeliveryDestination;
	}

	/** When data set contents are created they are delivered to destination specified here. */
	export interface DatasetContentDeliveryRuleFormProperties {
		entryName: FormControl<string | null | undefined>,
	}
	export function CreateDatasetContentDeliveryRuleFormGroup() {
		return new FormGroup<DatasetContentDeliveryRuleFormProperties>({
			entryName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The destination to which data set contents are delivered. */
	export interface DatasetContentDeliveryDestination {

		/** Configuration information for delivery of data set contents to AWS IoT Events. */
		iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;

		/** Configuration information for delivery of data set contents to Amazon S3. */
		s3DestinationConfiguration?: S3DestinationConfiguration;
	}

	/** The destination to which data set contents are delivered. */
	export interface DatasetContentDeliveryDestinationFormProperties {
	}
	export function CreateDatasetContentDeliveryDestinationFormGroup() {
		return new FormGroup<DatasetContentDeliveryDestinationFormProperties>({
		});

	}


	/** Configuration information for delivery of data set contents to AWS IoT Events. */
	export interface IotEventsDestinationConfiguration {
		inputName: string;
		roleArn: string;
	}

	/** Configuration information for delivery of data set contents to AWS IoT Events. */
	export interface IotEventsDestinationConfigurationFormProperties {
		inputName: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateIotEventsDestinationConfigurationFormGroup() {
		return new FormGroup<IotEventsDestinationConfigurationFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information for delivery of data set contents to Amazon S3. */
	export interface S3DestinationConfiguration {
		bucket: string;
		key: string;

		/** Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service. */
		glueConfiguration?: GlueConfiguration;
		roleArn: string;
	}

	/** Configuration information for delivery of data set contents to Amazon S3. */
	export interface S3DestinationConfigurationFormProperties {
		bucket: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationConfigurationFormGroup() {
		return new FormGroup<S3DestinationConfigurationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service. */
	export interface GlueConfiguration {
		tableName: string;
		databaseName: string;
	}

	/** Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service. */
	export interface GlueConfigurationFormProperties {
		tableName: FormControl<string | null | undefined>,
		databaseName: FormControl<string | null | undefined>,
	}
	export function CreateGlueConfigurationFormGroup() {
		return new FormGroup<GlueConfigurationFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetContentResponse {
		versionId?: string | null;
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
		datastoreName?: string | null;
		datastoreArn?: string | null;

		/** How long, in days, message data is kept. */
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


	/** Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
	export interface ServiceManagedDatastoreS3Storage {
	}

	/** Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
	export interface ServiceManagedDatastoreS3StorageFormProperties {
	}
	export function CreateServiceManagedDatastoreS3StorageFormGroup() {
		return new FormGroup<ServiceManagedDatastoreS3StorageFormProperties>({
		});

	}


	/** Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
	export interface CustomerManagedDatastoreS3Storage {
		bucket: string;
		keyPrefix?: string | null;
		roleArn: string;
	}

	/** Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
	export interface CustomerManagedDatastoreS3StorageFormProperties {
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomerManagedDatastoreS3StorageFormGroup() {
		return new FormGroup<CustomerManagedDatastoreS3StorageFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePipelineResponse {
		pipelineName?: string | null;
		pipelineArn?: string | null;
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

		/** The activity that determines the source of the messages to be processed. */
		channel?: ChannelActivity;

		/** An activity that runs a Lambda function to modify the message. */
		lambda?: LambdaActivity;

		/** The 'datastore' activity that specifies where to store the processed data. */
		datastore?: DatastoreActivity;

		/** An activity that adds other attributes based on existing attributes in the message. */
		addAttributes?: AddAttributesActivity;

		/** An activity that removes attributes from a message. */
		removeAttributes?: RemoveAttributesActivity;

		/** Creates a new message using only the specified attributes from the original message. */
		selectAttributes?: SelectAttributesActivity;

		/** An activity that filters a message based on its attributes. */
		filter?: FilterActivity;

		/** An activity that computes an arithmetic expression using the message's attributes. */
		math?: MathActivity;

		/** An activity that adds data from the AWS IoT device registry to your message. */
		deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

		/** An activity that adds information from the AWS IoT Device Shadows service to a message. */
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
		name: string;
		channelName: string;
		next?: string | null;
	}

	/** The activity that determines the source of the messages to be processed. */
	export interface ChannelActivityFormProperties {
		name: FormControl<string | null | undefined>,
		channelName: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateChannelActivityFormGroup() {
		return new FormGroup<ChannelActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			channelName: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that runs a Lambda function to modify the message. */
	export interface LambdaActivity {
		name: string;
		lambdaName: string;
		batchSize: number;
		next?: string | null;
	}

	/** An activity that runs a Lambda function to modify the message. */
	export interface LambdaActivityFormProperties {
		name: FormControl<string | null | undefined>,
		lambdaName: FormControl<string | null | undefined>,
		batchSize: FormControl<number | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateLambdaActivityFormGroup() {
		return new FormGroup<LambdaActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			lambdaName: new FormControl<string | null | undefined>(undefined),
			batchSize: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The 'datastore' activity that specifies where to store the processed data. */
	export interface DatastoreActivity {
		name: string;
		datastoreName: string;
	}

	/** The 'datastore' activity that specifies where to store the processed data. */
	export interface DatastoreActivityFormProperties {
		name: FormControl<string | null | undefined>,
		datastoreName: FormControl<string | null | undefined>,
	}
	export function CreateDatastoreActivityFormGroup() {
		return new FormGroup<DatastoreActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			datastoreName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that adds other attributes based on existing attributes in the message. */
	export interface AddAttributesActivity {
		name: string;
		attributes: AttributeNameMapping;
		next?: string | null;
	}

	/** An activity that adds other attributes based on existing attributes in the message. */
	export interface AddAttributesActivityFormProperties {
		name: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateAddAttributesActivityFormGroup() {
		return new FormGroup<AddAttributesActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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
		name: string;
		attributes: Array<string>;
		next?: string | null;
	}

	/** An activity that removes attributes from a message. */
	export interface RemoveAttributesActivityFormProperties {
		name: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAttributesActivityFormGroup() {
		return new FormGroup<RemoveAttributesActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new message using only the specified attributes from the original message. */
	export interface SelectAttributesActivity {
		name: string;
		attributes: Array<string>;
		next?: string | null;
	}

	/** Creates a new message using only the specified attributes from the original message. */
	export interface SelectAttributesActivityFormProperties {
		name: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateSelectAttributesActivityFormGroup() {
		return new FormGroup<SelectAttributesActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that filters a message based on its attributes. */
	export interface FilterActivity {
		name: string;
		filter: string;
		next?: string | null;
	}

	/** An activity that filters a message based on its attributes. */
	export interface FilterActivityFormProperties {
		name: FormControl<string | null | undefined>,
		filter: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateFilterActivityFormGroup() {
		return new FormGroup<FilterActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that computes an arithmetic expression using the message's attributes. */
	export interface MathActivity {
		name: string;
		attribute: string;
		math: string;
		next?: string | null;
	}

	/** An activity that computes an arithmetic expression using the message's attributes. */
	export interface MathActivityFormProperties {
		name: FormControl<string | null | undefined>,
		attribute: FormControl<string | null | undefined>,
		math: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateMathActivityFormGroup() {
		return new FormGroup<MathActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			attribute: new FormControl<string | null | undefined>(undefined),
			math: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that adds data from the AWS IoT device registry to your message. */
	export interface DeviceRegistryEnrichActivity {
		name: string;
		attribute: string;
		thingName: string;
		roleArn: string;
		next?: string | null;
	}

	/** An activity that adds data from the AWS IoT device registry to your message. */
	export interface DeviceRegistryEnrichActivityFormProperties {
		name: FormControl<string | null | undefined>,
		attribute: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateDeviceRegistryEnrichActivityFormGroup() {
		return new FormGroup<DeviceRegistryEnrichActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			attribute: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An activity that adds information from the AWS IoT Device Shadows service to a message. */
	export interface DeviceShadowEnrichActivity {
		name: string;
		attribute: string;
		thingName: string;
		roleArn: string;
		next?: string | null;
	}

	/** An activity that adds information from the AWS IoT Device Shadows service to a message. */
	export interface DeviceShadowEnrichActivityFormProperties {
		name: FormControl<string | null | undefined>,
		attribute: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
	}
	export function CreateDeviceShadowEnrichActivityFormGroup() {
		return new FormGroup<DeviceShadowEnrichActivityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			attribute: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeChannelResponse {

		/** A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline. */
		channel?: Channel;

		/** Statistics information about the channel. */
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
		name?: string | null;

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		storage?: ChannelStorage;
		arn?: string | null;
		status?: ChannelStatus | null;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
	}

	/** A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline. */
	export interface ChannelFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
	export interface ChannelStorage {

		/** Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		serviceManagedS3?: ServiceManagedChannelS3Storage;

		/** Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		customerManagedS3?: CustomerManagedChannelS3Storage;
	}

	/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
	export interface ChannelStorageFormProperties {
	}
	export function CreateChannelStorageFormGroup() {
		return new FormGroup<ChannelStorageFormProperties>({
		});

	}

	export enum ChannelStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/** Statistics information about the channel. */
	export interface ChannelStatistics {

		/** The estimated size of the resource. */
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
		estimatedOn?: Date | null;
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

		/** Information about a data set. */
		dataset?: Dataset;
	}
	export interface DescribeDatasetResponseFormProperties {
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
		});

	}


	/** Information about a data set. */
	export interface Dataset {
		name?: string | null;
		arn?: string | null;
		actions?: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;
		status?: ChannelStatus | null;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: VersioningConfiguration;
	}

	/** Information about a data set. */
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


	/** Information about the versioning of data set contents. */
	export interface VersioningConfiguration {
		unlimited?: boolean | null;
		maxVersions?: number | null;
	}

	/** Information about the versioning of data set contents. */
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

		/** Information about a data store. */
		datastore?: Datastore;

		/** Statistical information about the data store. */
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
		name?: string | null;

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		storage?: DatastoreStorage;
		arn?: string | null;
		status?: ChannelStatus | null;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
	}

	/** Information about a data store. */
	export interface DatastoreFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatastoreFormGroup() {
		return new FormGroup<DatastoreFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
	export interface DatastoreStorage {

		/** Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;

		/** Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
	}

	/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
	export interface DatastoreStorageFormProperties {
	}
	export function CreateDatastoreStorageFormGroup() {
		return new FormGroup<DatastoreStorageFormProperties>({
		});

	}


	/** Statistical information about the data store. */
	export interface DatastoreStatistics {

		/** The estimated size of the resource. */
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

		/** Information about logging options. */
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
		roleArn: string;
		level: LoggingOptionsLevel;
		enabled: boolean;
	}

	/** Information about logging options. */
	export interface LoggingOptionsFormProperties {
		roleArn: FormControl<string | null | undefined>,
		level: FormControl<LoggingOptionsLevel | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingOptionsFormGroup() {
		return new FormGroup<LoggingOptionsFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<LoggingOptionsLevel | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LoggingOptionsLevel { ERROR = 0 }

	export interface DescribePipelineResponse {

		/** Contains information about a pipeline. */
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
		name?: string | null;
		arn?: string | null;
		activities?: Array<PipelineActivity>;
		reprocessingSummaries?: Array<ReprocessingSummary>;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
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
		id?: string | null;
		status?: ReprocessingSummaryStatus | null;
		creationTime?: Date | null;
	}

	/** Information about pipeline reprocessing. */
	export interface ReprocessingSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		status: FormControl<ReprocessingSummaryStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateReprocessingSummaryFormGroup() {
		return new FormGroup<ReprocessingSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReprocessingSummaryStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReprocessingSummaryStatus { RUNNING = 0, SUCCEEDED = 1, CANCELLED = 2, FAILED = 3 }

	export interface GetDatasetContentResponse {
		entries?: Array<DatasetEntry>;
		timestamp?: Date | null;

		/** The state of the data set contents and the reason they are in this state. */
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


	/** The reference to a data set entry. */
	export interface DatasetEntry {
		entryName?: string | null;
		dataURI?: string | null;
	}

	/** The reference to a data set entry. */
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


	/** The state of the data set contents and the reason they are in this state. */
	export interface DatasetContentStatus {
		state?: DatasetContentStatusState | null;
		reason?: string | null;
	}

	/** The state of the data set contents and the reason they are in this state. */
	export interface DatasetContentStatusFormProperties {
		state: FormControl<DatasetContentStatusState | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateDatasetContentStatusFormGroup() {
		return new FormGroup<DatasetContentStatusFormProperties>({
			state: new FormControl<DatasetContentStatusState | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatasetContentStatusState { CREATING = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface ListChannelsResponse {
		channelSummaries?: Array<ChannelSummary>;
		nextToken?: string | null;
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
		channelName?: string | null;

		/** Where channel data is stored. */
		channelStorage?: ChannelStorageSummary;
		status?: ChannelStatus | null;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
	}

	/** A summary of information about a channel. */
	export interface ChannelSummaryFormProperties {
		channelName: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateChannelSummaryFormGroup() {
		return new FormGroup<ChannelSummaryFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Where channel data is stored. */
	export interface ChannelStorageSummary {

		/** Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service. */
		serviceManagedS3?: ServiceManagedChannelS3StorageSummary;

		/** Used to store channel data in an S3 bucket that you manage. */
		customerManagedS3?: CustomerManagedChannelS3StorageSummary;
	}

	/** Where channel data is stored. */
	export interface ChannelStorageSummaryFormProperties {
	}
	export function CreateChannelStorageSummaryFormGroup() {
		return new FormGroup<ChannelStorageSummaryFormProperties>({
		});

	}


	/** Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service. */
	export interface ServiceManagedChannelS3StorageSummary {
	}

	/** Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service. */
	export interface ServiceManagedChannelS3StorageSummaryFormProperties {
	}
	export function CreateServiceManagedChannelS3StorageSummaryFormGroup() {
		return new FormGroup<ServiceManagedChannelS3StorageSummaryFormProperties>({
		});

	}


	/** Used to store channel data in an S3 bucket that you manage. */
	export interface CustomerManagedChannelS3StorageSummary {
		bucket?: string | null;
		keyPrefix?: string | null;
		roleArn?: string | null;
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
		nextToken?: string | null;
	}
	export interface ListDatasetContentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetContentsResponseFormGroup() {
		return new FormGroup<ListDatasetContentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about data set contents. */
	export interface DatasetContentSummary {
		version?: string | null;

		/** The state of the data set contents and the reason they are in this state. */
		status?: DatasetContentStatus;
		creationTime?: Date | null;
		scheduleTime?: Date | null;
		completionTime?: Date | null;
	}

	/** Summary information about data set contents. */
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
		nextToken?: string | null;
	}
	export interface ListDatasetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a data set. */
	export interface DatasetSummary {
		datasetName?: string | null;
		status?: ChannelStatus | null;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
		triggers?: Array<DatasetTrigger>;
		actions?: Array<DatasetActionSummary>;
	}

	/** A summary of information about a data set. */
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


	/** Information about the action which automatically creates the data set's contents. */
	export interface DatasetActionSummary {
		actionName?: string | null;
		actionType?: DatasetActionSummaryActionType | null;
	}

	/** Information about the action which automatically creates the data set's contents. */
	export interface DatasetActionSummaryFormProperties {
		actionName: FormControl<string | null | undefined>,
		actionType: FormControl<DatasetActionSummaryActionType | null | undefined>,
	}
	export function CreateDatasetActionSummaryFormGroup() {
		return new FormGroup<DatasetActionSummaryFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined),
			actionType: new FormControl<DatasetActionSummaryActionType | null | undefined>(undefined),
		});

	}

	export enum DatasetActionSummaryActionType { QUERY = 0, CONTAINER = 1 }

	export interface ListDatastoresResponse {
		datastoreSummaries?: Array<DatastoreSummary>;
		nextToken?: string | null;
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
		datastoreName?: string | null;

		/** Where data store data is stored. */
		datastoreStorage?: DatastoreStorageSummary;
		status?: ChannelStatus | null;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
	}

	/** A summary of information about a data store. */
	export interface DatastoreSummaryFormProperties {
		datastoreName: FormControl<string | null | undefined>,
		status: FormControl<ChannelStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatastoreSummaryFormGroup() {
		return new FormGroup<DatastoreSummaryFormProperties>({
			datastoreName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ChannelStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Where data store data is stored. */
	export interface DatastoreStorageSummary {

		/** Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service. */
		serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;

		/** Used to store data store data in an S3 bucket that you manage. */
		customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;
	}

	/** Where data store data is stored. */
	export interface DatastoreStorageSummaryFormProperties {
	}
	export function CreateDatastoreStorageSummaryFormGroup() {
		return new FormGroup<DatastoreStorageSummaryFormProperties>({
		});

	}


	/** Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service. */
	export interface ServiceManagedDatastoreS3StorageSummary {
	}

	/** Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service. */
	export interface ServiceManagedDatastoreS3StorageSummaryFormProperties {
	}
	export function CreateServiceManagedDatastoreS3StorageSummaryFormGroup() {
		return new FormGroup<ServiceManagedDatastoreS3StorageSummaryFormProperties>({
		});

	}


	/** Used to store data store data in an S3 bucket that you manage. */
	export interface CustomerManagedDatastoreS3StorageSummary {
		bucket?: string | null;
		keyPrefix?: string | null;
		roleArn?: string | null;
	}

	/** Used to store data store data in an S3 bucket that you manage. */
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

	export interface ListPipelinesResponse {
		pipelineSummaries?: Array<PipelineSummary>;
		nextToken?: string | null;
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
		pipelineName?: string | null;
		reprocessingSummaries?: Array<ReprocessingSummary>;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
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

	export enum LoggingLevel { ERROR = 0 }

	export interface RunPipelineActivityResponse {
		payloads?: Array<string>;
		logResult?: string | null;
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
		reprocessingId?: string | null;
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
		channelName: string;
		messages: Array<Message>;
	}
	export interface BatchPutMessageRequestFormProperties {
		channelName: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutMessageRequestFormGroup() {
		return new FormGroup<BatchPutMessageRequestFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined),
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

	export enum ComputeType { ACU_1 = 0, ACU_2 = 1 }

	export interface CreateChannelRequest {
		channelName: string;

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: ChannelStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		tags?: Array<Tag>;
	}
	export interface CreateChannelRequestFormProperties {
		channelName: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelRequestFormGroup() {
		return new FormGroup<CreateChannelRequestFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetContentRequest {
	}
	export interface CreateDatasetContentRequestFormProperties {
	}
	export function CreateCreateDatasetContentRequestFormGroup() {
		return new FormGroup<CreateDatasetContentRequestFormProperties>({
		});

	}

	export interface CreateDatasetRequest {
		datasetName: string;
		actions: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: VersioningConfiguration;
		tags?: Array<Tag>;
	}
	export interface CreateDatasetRequestFormProperties {
		datasetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			datasetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatastoreRequest {
		datastoreName: string;

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: DatastoreStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		tags?: Array<Tag>;
	}
	export interface CreateDatastoreRequestFormProperties {
		datastoreName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatastoreRequestFormGroup() {
		return new FormGroup<CreateDatastoreRequestFormProperties>({
			datastoreName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePipelineRequest {
		pipelineName: string;
		pipelineActivities: Array<PipelineActivity>;
		tags?: Array<Tag>;
	}
	export interface CreatePipelineRequestFormProperties {
		pipelineName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelineRequestFormGroup() {
		return new FormGroup<CreatePipelineRequestFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatasetStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }

	export enum DatasetActionType { QUERY = 0, CONTAINER = 1 }

	export enum DatasetContentState { CREATING = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum DatastoreStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }

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

		/**
		 * Information about logging options.
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

	export enum ReprocessingStatus { RUNNING = 0, SUCCEEDED = 1, CANCELLED = 2, FAILED = 3 }

	export interface RunPipelineActivityRequest {

		/**
		 * An activity that performs a transformation on a message.
		 * Required
		 */
		pipelineActivity: PipelineActivity;
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
		startTime?: Date | null;
		endTime?: Date | null;
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

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: ChannelStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
	}
	export interface UpdateChannelRequestFormProperties {
	}
	export function CreateUpdateChannelRequestFormGroup() {
		return new FormGroup<UpdateChannelRequestFormProperties>({
		});

	}

	export interface UpdateDatasetRequest {
		actions: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: VersioningConfiguration;
	}
	export interface UpdateDatasetRequestFormProperties {
	}
	export function CreateUpdateDatasetRequestFormGroup() {
		return new FormGroup<UpdateDatasetRequestFormProperties>({
		});

	}

	export interface UpdateDatastoreRequest {

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: DatastoreStorage;
	}
	export interface UpdateDatastoreRequestFormProperties {
	}
	export function CreateUpdateDatastoreRequestFormGroup() {
		return new FormGroup<UpdateDatastoreRequestFormProperties>({
		});

	}

	export interface UpdatePipelineRequest {
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
		 * @param {string} reprocessingId The ID of the reprocessing task (returned by "StartPipelineReprocessing").
		 * @return {CancelPipelineReprocessingResponse} Success
		 */
		CancelPipelineReprocessing(pipelineName: string, reprocessingId: string): Observable<CancelPipelineReprocessingResponse> {
			return this.http.delete<CancelPipelineReprocessingResponse>(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '/reprocessing/' + (reprocessingId == null ? '' : encodeURIComponent(reprocessingId)), {});
		}

		/**
		 * Creates a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
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
		 * Creates a data set. A data set stores data retrieved from a data store by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application). This operation creates the skeleton of a data set. The data set can be populated manually by calling "CreateDatasetContent" or automatically according to a "trigger" you specify.
		 * Post datasets
		 * @return {void} 
		 */
		CreateDataset(requestBody: CreateDatasetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about data sets.
		 * Get datasets
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDatasetsResponse> {
			return this.http.get<ListDatasetsResponse>(this.baseUri + 'datasets?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates the content of a data set by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application).
		 * Post datasets/{datasetName}/content
		 * @param {string} datasetName The name of the data set.
		 * @return {CreateDatasetContentResponse} Success
		 */
		CreateDatasetContent(datasetName: string): Observable<CreateDatasetContentResponse> {
			return this.http.post<CreateDatasetContentResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content', null, {});
		}

		/**
		 * Deletes the content of the specified data set.
		 * Delete datasets/{datasetName}/content
		 * @param {string} datasetName The name of the data set whose content is deleted.
		 * @param {string} versionId The version of the data set whose content is deleted. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.
		 * @return {void} 
		 */
		DeleteDatasetContent(datasetName: string, versionId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the contents of a data set as pre-signed URIs.
		 * Get datasets/{datasetName}/content
		 * @param {string} datasetName The name of the data set whose contents are retrieved.
		 * @param {string} versionId The version of the data set whose contents are retrieved. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.
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
		 * @param {boolean} includeStatistics If true, additional statistical information about the channel is included in the response. This feature cannot be used with a channel whose S3 storage is customer-managed.
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(channelName: string, includeStatistics: boolean | null | undefined): Observable<DescribeChannelResponse> {
			return this.http.get<DescribeChannelResponse>(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '&includeStatistics=' + includeStatistics, {});
		}

		/**
		 * Updates the settings of a channel.
		 * Put channels/{channelName}
		 * @param {string} channelName The name of the channel to be updated.
		 * @return {void} Success
		 */
		UpdateChannel(channelName: string, requestBody: UpdateChannelPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified data set.</p> <p>You do not have to delete the content of the data set before you perform this operation.</p>
		 * Delete datasets/{datasetName}
		 * @param {string} datasetName The name of the data set to delete.
		 * @return {void} 
		 */
		DeleteDataset(datasetName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a data set.
		 * Get datasets/{datasetName}
		 * @param {string} datasetName The name of the data set whose information is retrieved.
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(datasetName: string): Observable<DescribeDatasetResponse> {
			return this.http.get<DescribeDatasetResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), {});
		}

		/**
		 * Updates the settings of a data set.
		 * Put datasets/{datasetName}
		 * @param {string} datasetName The name of the data set to update.
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
		 * @param {boolean} includeStatistics If true, additional statistical information about the data store is included in the response. This feature cannot be used with a data store whose S3 storage is customer-managed.
		 * @return {DescribeDatastoreResponse} Success
		 */
		DescribeDatastore(datastoreName: string, includeStatistics: boolean | null | undefined): Observable<DescribeDatastoreResponse> {
			return this.http.get<DescribeDatastoreResponse>(this.baseUri + 'datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)) + '&includeStatistics=' + includeStatistics, {});
		}

		/**
		 * Updates the settings of a data store.
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
		 * Retrieves the current settings of the AWS IoT Analytics logging options.
		 * Get logging
		 * @return {DescribeLoggingOptionsResponse} Success
		 */
		DescribeLoggingOptions(): Observable<DescribeLoggingOptionsResponse> {
			return this.http.get<DescribeLoggingOptionsResponse>(this.baseUri + 'logging', {});
		}

		/**
		 * <p>Sets or updates the AWS IoT Analytics logging options.</p> <p>Note that if you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy) it takes up to 5 minutes for that change to take effect. </p>
		 * Put logging
		 * @return {void} Success
		 */
		PutLoggingOptions(requestBody: PutLoggingOptionsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about data set contents that have been created.
		 * Get datasets/{datasetName}/contents
		 * @param {string} datasetName The name of the data set whose contents information you want to list.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @param {Date} scheduledOnOrAfter A filter to limit results to those data set contents whose creation is scheduled on or after the given time. See the field <code>triggers.schedule</code> in the CreateDataset request. (timestamp)
		 * @param {Date} scheduledBefore A filter to limit results to those data set contents whose creation is scheduled before the given time. See the field <code>triggers.schedule</code> in the CreateDataset request. (timestamp)
		 * @return {ListDatasetContentsResponse} Success
		 */
		ListDatasetContents(datasetName: string, nextToken: string | null | undefined, maxResults: number | null | undefined, scheduledOnOrAfter: Date | null | undefined, scheduledBefore: Date | null | undefined): Observable<ListDatasetContentsResponse> {
			return this.http.get<ListDatasetContentsResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/contents&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&scheduledOnOrAfter=' + scheduledOnOrAfter?.toISOString() + '&scheduledBefore=' + scheduledBefore?.toISOString(), {});
		}

		/**
		 * Lists the tags (metadata) which you have assigned to the resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource whose tags you want to list.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
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
		 * @param {number} maxMessages The number of sample messages to be retrieved. The limit is 10, the default is also 10.
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
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		channelName: string;

		/**
		 * <p>The list of messages to be sent. Each message has format: '{ "messageId": "string", "payload": "string"}'.</p> <p>Note that the field names of message payloads (data) that you send to AWS IoT Analytics:</p> <ul> <li> <p>Must contain only alphanumeric characters and undescores (_); no other special characters are allowed.</p> </li> <li> <p>Must begin with an alphabetic character or single underscore (_).</p> </li> <li> <p>Cannot contain hyphens (-).</p> </li> <li> <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$". </p> </li> <li> <p>Cannot be greater than 255 characters.</p> </li> <li> <p>Are case-insensitive. (Fields named "foo" and "FOO" in the same payload are considered duplicates.)</p> </li> </ul> <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. </p>
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
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		channelName: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutMessagePostBodyFormGroup() {
		return new FormGroup<BatchPutMessagePostBodyFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBody {

		/**
		 * The name of the channel.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		channelName: string;

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
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
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		channelName: FormControl<string | null | undefined>,
	}
	export function CreateCreateChannelPostBodyFormGroup() {
		return new FormGroup<CreateChannelPostBodyFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateChannelPostBodyChannelStorage {

		/** Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		serviceManagedS3?: ServiceManagedChannelS3Storage;

		/** Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
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
		 * The name of the data set.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		datasetName: string;

		/**
		 * A list of actions that create the data set contents.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		actions: Array<DatasetAction>;

		/**
		 * A list of triggers. A trigger causes data set contents to be populated at a specified time interval or when another data set's contents are created. The list of triggers can be empty or contain up to five <b>DataSetTrigger</b> objects.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		triggers?: Array<DatasetTrigger>;

		/**
		 * When data set contents are created they are delivered to destinations specified here.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: CreateDatasetPostBodyRetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: CreateDatasetPostBodyVersioningConfiguration;

		/**
		 * Metadata which can be used to manage the data set.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateDatasetPostBodyFormProperties {

		/**
		 * The name of the data set.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		datasetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetPostBodyFormGroup() {
		return new FormGroup<CreateDatasetPostBodyFormProperties>({
			datasetName: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateDatastorePostBody {

		/**
		 * The name of the data store.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		datastoreName: string;

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: CreateDatastorePostBodyDatastoreStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: CreateDatastorePostBodyRetentionPeriod;

		/**
		 * Metadata which can be used to manage the data store.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}
	export interface CreateDatastorePostBodyFormProperties {

		/**
		 * The name of the data store.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		datastoreName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatastorePostBodyFormGroup() {
		return new FormGroup<CreateDatastorePostBodyFormProperties>({
			datastoreName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatastorePostBodyDatastoreStorage {

		/** Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;

		/** Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
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

	export interface CreatePipelinePostBody {

		/**
		 * The name of the pipeline.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		pipelineName: string;

		/**
		 * <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <b>PipelineActivity</b> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity, for example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
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
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		pipelineName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelinePostBodyFormGroup() {
		return new FormGroup<CreatePipelinePostBodyFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateChannelPutBody {

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
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

		/** Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		serviceManagedS3?: ServiceManagedChannelS3Storage;

		/** Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
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
		 * A list of "DatasetAction" objects.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		actions: Array<DatasetAction>;

		/**
		 * A list of "DatasetTrigger" objects. The list can be empty or can contain up to five <b>DataSetTrigger</b> objects.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		triggers?: Array<DatasetTrigger>;

		/**
		 * When data set contents are created they are delivered to destinations specified here.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: UpdateDatasetPutBodyRetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: UpdateDatasetPutBodyVersioningConfiguration;
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

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: UpdateDatastorePutBodyDatastoreStorage;
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

		/** Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;

		/** Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
	}
	export interface UpdateDatastorePutBodyDatastoreStorageFormProperties {
	}
	export function CreateUpdateDatastorePutBodyDatastoreStorageFormGroup() {
		return new FormGroup<UpdateDatastorePutBodyDatastoreStorageFormProperties>({
		});

	}

	export interface UpdatePipelinePutBody {

		/**
		 * <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <b>PipelineActivity</b> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity, for example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
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
		roleArn?: string | null;
		level?: LoggingOptionsLevel | null;
		enabled?: boolean | null;
	}
	export interface PutLoggingOptionsPutBodyLoggingOptionsFormProperties {
		roleArn: FormControl<string | null | undefined>,
		level: FormControl<LoggingOptionsLevel | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutLoggingOptionsPutBodyLoggingOptionsFormGroup() {
		return new FormGroup<PutLoggingOptionsPutBodyLoggingOptionsFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<LoggingOptionsLevel | null | undefined>(undefined),
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

		/** The activity that determines the source of the messages to be processed. */
		channel?: ChannelActivity;

		/** An activity that runs a Lambda function to modify the message. */
		lambda?: LambdaActivity;

		/** The 'datastore' activity that specifies where to store the processed data. */
		datastore?: DatastoreActivity;

		/** An activity that adds other attributes based on existing attributes in the message. */
		addAttributes?: AddAttributesActivity;

		/** An activity that removes attributes from a message. */
		removeAttributes?: RemoveAttributesActivity;

		/** Creates a new message using only the specified attributes from the original message. */
		selectAttributes?: SelectAttributesActivity;

		/** An activity that filters a message based on its attributes. */
		filter?: FilterActivity;

		/** An activity that computes an arithmetic expression using the message's attributes. */
		math?: MathActivity;

		/** An activity that adds data from the AWS IoT device registry to your message. */
		deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

		/** An activity that adds information from the AWS IoT Device Shadows service to a message. */
		deviceShadowEnrich?: DeviceShadowEnrichActivity;
	}
	export interface RunPipelineActivityPostBodyPipelineActivityFormProperties {
	}
	export function CreateRunPipelineActivityPostBodyPipelineActivityFormGroup() {
		return new FormGroup<RunPipelineActivityPostBodyPipelineActivityFormProperties>({
		});

	}

	export interface StartPipelineReprocessingPostBody {

		/** The start time (inclusive) of raw message data that is reprocessed. */
		startTime?: Date | null;

		/** The end time (exclusive) of raw message data that is reprocessed. */
		endTime?: Date | null;
	}
	export interface StartPipelineReprocessingPostBodyFormProperties {

		/** The start time (inclusive) of raw message data that is reprocessed. */
		startTime: FormControl<Date | null | undefined>,

		/** The end time (exclusive) of raw message data that is reprocessed. */
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartPipelineReprocessingPostBodyFormGroup() {
		return new FormGroup<StartPipelineReprocessingPostBodyFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

}

