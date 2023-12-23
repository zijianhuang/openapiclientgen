import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateDetectorModelResponse {

		/** Information about how the detector model is configured. */
		detectorModelConfiguration?: DetectorModelConfiguration;
	}
	export interface CreateDetectorModelResponseFormProperties {
	}
	export function CreateCreateDetectorModelResponseFormGroup() {
		return new FormGroup<CreateDetectorModelResponseFormProperties>({
		});

	}


	/** Information about how the detector model is configured. */
	export interface DetectorModelConfiguration {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		detectorModelVersion?: string | null;

		/** Max length: 128 */
		detectorModelDescription?: string | null;
		detectorModelArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn?: string | null;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
		status?: DetectorModelConfigurationStatus | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$
		 */
		key?: string | null;
		evaluationMethod?: DetectorModelConfigurationEvaluationMethod | null;
	}

	/** Information about how the detector model is configured. */
	export interface DetectorModelConfigurationFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		detectorModelVersion: FormControl<string | null | undefined>,

		/** Max length: 128 */
		detectorModelDescription: FormControl<string | null | undefined>,
		detectorModelArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<DetectorModelConfigurationStatus | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$
		 */
		key: FormControl<string | null | undefined>,
		evaluationMethod: FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>,
	}
	export function CreateDetectorModelConfigurationFormGroup() {
		return new FormGroup<DetectorModelConfigurationFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			detectorModelVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			detectorModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			detectorModelArn: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DetectorModelConfigurationStatus | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			evaluationMethod: new FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>(undefined),
		});

	}

	export enum DetectorModelConfigurationStatus { ACTIVE = 0, ACTIVATING = 1, INACTIVE = 2, DEPRECATED = 3, DRAFT = 4, PAUSED = 5, FAILED = 6 }

	export enum DetectorModelConfigurationEvaluationMethod { BATCH = 0, SERIAL = 1 }


	/** Information that defines a state of a detector. */
	export interface State {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		stateName: string;

		/** Specifies the actions performed when the <code>condition</code> evaluates to TRUE. */
		onInput?: OnInputLifecycle;

		/** When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE. */
		onEnter?: OnEnterLifecycle;

		/** When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>. */
		onExit?: OnExitLifecycle;
	}

	/** Information that defines a state of a detector. */
	export interface StateFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		stateName: FormControl<string | null | undefined>,
	}
	export function CreateStateFormGroup() {
		return new FormGroup<StateFormProperties>({
			stateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Specifies the actions performed when the <code>condition</code> evaluates to TRUE. */
	export interface OnInputLifecycle {
		events?: Array<Event>;
		transitionEvents?: Array<TransitionEvent>;
	}

	/** Specifies the actions performed when the <code>condition</code> evaluates to TRUE. */
	export interface OnInputLifecycleFormProperties {
	}
	export function CreateOnInputLifecycleFormGroup() {
		return new FormGroup<OnInputLifecycleFormProperties>({
		});

	}


	/** Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE. */
	export interface Event {

		/**
		 * Required
		 * Max length: 128
		 */
		eventName: string;

		/** Max length: 512 */
		condition?: string | null;
		actions?: Array<Action>;
	}

	/** Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE. */
	export interface EventFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		eventName: FormControl<string | null | undefined>,

		/** Max length: 512 */
		condition: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128)]),
			condition: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
		});

	}


	/** An action to be performed when the <code>condition</code> is TRUE. */
	export interface Action {

		/** Information about the variable and its new value. */
		setVariable?: SetVariableAction;

		/** Information required to publish the Amazon SNS message. */
		sns?: SNSTopicPublishAction;

		/** Information required to publish the MQTT message through the AWS IoT message broker. */
		iotTopicPublish?: IotTopicPublishAction;

		/** Information needed to set the timer. */
		setTimer?: SetTimerAction;

		/** Information needed to clear the timer. */
		clearTimer?: ClearTimerAction;

		/** Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer. */
		resetTimer?: ResetTimerAction;

		/** Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. */
		lambda?: LambdaAction;

		/** Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action. */
		iotEvents?: IotEventsAction;

		/** Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. */
		sqs?: SqsAction;

		/** Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. */
		firehose?: FirehoseAction;

		/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>The <code>tableName</code> and <code>hashKeyField</code> values must match the table name and the partition key of the DynamoDB table. </p> <note> <p>If the DynamoDB table also has a sort key, you must specify <code>rangeKeyField</code>. The <code>rangeKeyField</code> value must match the sort key.</p> </note> <p/> <p>The <code>hashKeyValue</code> and <code>rangeKeyValue</code> use substitution templates. These templates provide data at runtime. The syntax is <code>${sql-expression}</code>.</p> <p>You can use expressions for parameters that are string data type. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <note> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The <code>payloadField</code> is <code>&lt;payload-field&gt;_raw</code>.</p> </note> */
		dynamoDB?: DynamoDBAction;

		/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <important> <p>The <code>type</code> value for <code>Payload</code> must be <code>JSON</code>.</p> </important> <p>You can use expressions for parameters that are strings. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
		dynamoDBv2?: DynamoDBv2Action;

		/** <p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <important> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> </important> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>propertyAlias</code> value can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>propertyAlias</code> value can be <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/${$input.TemperatureInput.sensorData.turbineID}/temperature'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
		iotSiteWise?: IotSiteWiseAction;
	}

	/** An action to be performed when the <code>condition</code> is TRUE. */
	export interface ActionFormProperties {
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
		});

	}


	/** Information about the variable and its new value. */
	export interface SetVariableAction {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		variableName: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		value: string;
	}

	/** Information about the variable and its new value. */
	export interface SetVariableActionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		variableName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSetVariableActionFormGroup() {
		return new FormGroup<SetVariableActionFormProperties>({
			variableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Information required to publish the Amazon SNS message. */
	export interface SNSTopicPublishAction {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		targetArn: string;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** Information required to publish the Amazon SNS message. */
	export interface SNSTopicPublishActionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		targetArn: FormControl<string | null | undefined>,
	}
	export function CreateSNSTopicPublishActionFormGroup() {
		return new FormGroup<SNSTopicPublishActionFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
	export interface Payload {

		/**
		 * Required
		 * Min length: 1
		 */
		contentExpression: string;

		/** Required */
		type: PayloadType;
	}

	/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
	export interface PayloadFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		contentExpression: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PayloadType | null | undefined>,
	}
	export function CreatePayloadFormGroup() {
		return new FormGroup<PayloadFormProperties>({
			contentExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<PayloadType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PayloadType { STRING = 0, JSON = 1 }


	/** Information required to publish the MQTT message through the AWS IoT message broker. */
	export interface IotTopicPublishAction {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		mqttTopic: string;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** Information required to publish the MQTT message through the AWS IoT message broker. */
	export interface IotTopicPublishActionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		mqttTopic: FormControl<string | null | undefined>,
	}
	export function CreateIotTopicPublishActionFormGroup() {
		return new FormGroup<IotTopicPublishActionFormProperties>({
			mqttTopic: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Information needed to set the timer. */
	export interface SetTimerAction {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		timerName: string;

		/**
		 * Minimum: 1
		 * Maximum: 31622400
		 */
		seconds?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		durationExpression?: string | null;
	}

	/** Information needed to set the timer. */
	export interface SetTimerActionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		timerName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 31622400
		 */
		seconds: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		durationExpression: FormControl<string | null | undefined>,
	}
	export function CreateSetTimerActionFormGroup() {
		return new FormGroup<SetTimerActionFormProperties>({
			timerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			seconds: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(31622400)]),
			durationExpression: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Information needed to clear the timer. */
	export interface ClearTimerAction {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		timerName: string;
	}

	/** Information needed to clear the timer. */
	export interface ClearTimerActionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		timerName: FormControl<string | null | undefined>,
	}
	export function CreateClearTimerActionFormGroup() {
		return new FormGroup<ClearTimerActionFormProperties>({
			timerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer. */
	export interface ResetTimerAction {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		timerName: string;
	}

	/** Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer. */
	export interface ResetTimerActionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		timerName: FormControl<string | null | undefined>,
	}
	export function CreateResetTimerActionFormGroup() {
		return new FormGroup<ResetTimerActionFormProperties>({
			timerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. */
	export interface LambdaAction {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		functionArn: string;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. */
	export interface LambdaActionFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		functionArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaActionFormGroup() {
		return new FormGroup<LambdaActionFormProperties>({
			functionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action. */
	export interface IotEventsAction {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: string;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action. */
	export interface IotEventsActionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: FormControl<string | null | undefined>,
	}
	export function CreateIotEventsActionFormGroup() {
		return new FormGroup<IotEventsActionFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. */
	export interface SqsAction {

		/** Required */
		queueUrl: string;
		useBase64?: boolean | null;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. */
	export interface SqsActionFormProperties {

		/** Required */
		queueUrl: FormControl<string | null | undefined>,
		useBase64: FormControl<boolean | null | undefined>,
	}
	export function CreateSqsActionFormGroup() {
		return new FormGroup<SqsActionFormProperties>({
			queueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useBase64: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. */
	export interface FirehoseAction {

		/** Required */
		deliveryStreamName: string;

		/** Pattern: ([\n\t])|(\r\n)|(,) */
		separator?: string | null;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. */
	export interface FirehoseActionFormProperties {

		/** Required */
		deliveryStreamName: FormControl<string | null | undefined>,

		/** Pattern: ([\n\t])|(\r\n)|(,) */
		separator: FormControl<string | null | undefined>,
	}
	export function CreateFirehoseActionFormGroup() {
		return new FormGroup<FirehoseActionFormProperties>({
			deliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			separator: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>The <code>tableName</code> and <code>hashKeyField</code> values must match the table name and the partition key of the DynamoDB table. </p> <note> <p>If the DynamoDB table also has a sort key, you must specify <code>rangeKeyField</code>. The <code>rangeKeyField</code> value must match the sort key.</p> </note> <p/> <p>The <code>hashKeyValue</code> and <code>rangeKeyValue</code> use substitution templates. These templates provide data at runtime. The syntax is <code>${sql-expression}</code>.</p> <p>You can use expressions for parameters that are string data type. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <note> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The <code>payloadField</code> is <code>&lt;payload-field&gt;_raw</code>.</p> </note> */
	export interface DynamoDBAction {
		hashKeyType?: string | null;

		/** Required */
		hashKeyField: string;

		/** Required */
		hashKeyValue: string;
		rangeKeyType?: string | null;
		rangeKeyField?: string | null;
		rangeKeyValue?: string | null;
		operation?: string | null;
		payloadField?: string | null;

		/** Required */
		tableName: string;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>The <code>tableName</code> and <code>hashKeyField</code> values must match the table name and the partition key of the DynamoDB table. </p> <note> <p>If the DynamoDB table also has a sort key, you must specify <code>rangeKeyField</code>. The <code>rangeKeyField</code> value must match the sort key.</p> </note> <p/> <p>The <code>hashKeyValue</code> and <code>rangeKeyValue</code> use substitution templates. These templates provide data at runtime. The syntax is <code>${sql-expression}</code>.</p> <p>You can use expressions for parameters that are string data type. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <note> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The <code>payloadField</code> is <code>&lt;payload-field&gt;_raw</code>.</p> </note> */
	export interface DynamoDBActionFormProperties {
		hashKeyType: FormControl<string | null | undefined>,

		/** Required */
		hashKeyField: FormControl<string | null | undefined>,

		/** Required */
		hashKeyValue: FormControl<string | null | undefined>,
		rangeKeyType: FormControl<string | null | undefined>,
		rangeKeyField: FormControl<string | null | undefined>,
		rangeKeyValue: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		payloadField: FormControl<string | null | undefined>,

		/** Required */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDBActionFormGroup() {
		return new FormGroup<DynamoDBActionFormProperties>({
			hashKeyType: new FormControl<string | null | undefined>(undefined),
			hashKeyField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hashKeyValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rangeKeyType: new FormControl<string | null | undefined>(undefined),
			rangeKeyField: new FormControl<string | null | undefined>(undefined),
			rangeKeyValue: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			payloadField: new FormControl<string | null | undefined>(undefined),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <important> <p>The <code>type</code> value for <code>Payload</code> must be <code>JSON</code>.</p> </important> <p>You can use expressions for parameters that are strings. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
	export interface DynamoDBv2Action {

		/** Required */
		tableName: string;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can also customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <important> <p>The <code>type</code> value for <code>Payload</code> must be <code>JSON</code>.</p> </important> <p>You can use expressions for parameters that are strings. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
	export interface DynamoDBv2ActionFormProperties {

		/** Required */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDBv2ActionFormGroup() {
		return new FormGroup<DynamoDBv2ActionFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <important> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> </important> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>propertyAlias</code> value can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>propertyAlias</code> value can be <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/${$input.TemperatureInput.sensorData.turbineID}/temperature'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface IotSiteWiseAction {
		entryId?: string | null;
		assetId?: string | null;
		propertyId?: string | null;
		propertyAlias?: string | null;

		/**
		 * <p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>quality</code> value can be <code>'GOOD'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>quality</code> value can be <code>$input.TemperatureInput.sensorData.quality</code> .</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul>
		 * Required
		 */
		propertyValue: AssetPropertyValue;
	}

	/** <p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <important> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> </important> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>propertyAlias</code> value can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>propertyAlias</code> value can be <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/${$input.TemperatureInput.sensorData.turbineID}/temperature'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface IotSiteWiseActionFormProperties {
		entryId: FormControl<string | null | undefined>,
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		propertyAlias: FormControl<string | null | undefined>,
	}
	export function CreateIotSiteWiseActionFormGroup() {
		return new FormGroup<IotSiteWiseActionFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined),
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			propertyAlias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>quality</code> value can be <code>'GOOD'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>quality</code> value can be <code>$input.TemperatureInput.sensorData.quality</code> .</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface AssetPropertyValue {

		/**
		 * <p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <important> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> </important> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>doubleValue</code> value can be <code>'47.9'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>doubleValue</code> value can be <code>$input.TemperatureInput.sensorData.temperature</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul>
		 * Required
		 */
		value: AssetPropertyVariant;

		/** <p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>timeInSeconds</code> value can be <code>'1586400675'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>timeInSeconds</code> value can be <code>'${$input.TemperatureInput.sensorData.timestamp/1000}'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
		timestamp?: AssetPropertyTimestamp;
		quality?: string | null;
	}

	/** <p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options: </p> <ul> <li> <p>Use a string. For example, the <code>quality</code> value can be <code>'GOOD'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>quality</code> value can be <code>$input.TemperatureInput.sensorData.quality</code> .</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface AssetPropertyValueFormProperties {
		quality: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyValueFormGroup() {
		return new FormGroup<AssetPropertyValueFormProperties>({
			quality: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <important> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> </important> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>doubleValue</code> value can be <code>'47.9'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>doubleValue</code> value can be <code>$input.TemperatureInput.sensorData.temperature</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface AssetPropertyVariant {
		stringValue?: string | null;
		integerValue?: string | null;
		doubleValue?: string | null;
		booleanValue?: string | null;
	}

	/** <p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <important> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> </important> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>doubleValue</code> value can be <code>'47.9'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>doubleValue</code> value can be <code>$input.TemperatureInput.sensorData.temperature</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface AssetPropertyVariantFormProperties {
		stringValue: FormControl<string | null | undefined>,
		integerValue: FormControl<string | null | undefined>,
		doubleValue: FormControl<string | null | undefined>,
		booleanValue: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyVariantFormGroup() {
		return new FormGroup<AssetPropertyVariantFormProperties>({
			stringValue: new FormControl<string | null | undefined>(undefined),
			integerValue: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<string | null | undefined>(undefined),
			booleanValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>timeInSeconds</code> value can be <code>'1586400675'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>timeInSeconds</code> value can be <code>'${$input.TemperatureInput.sensorData.timestamp/1000}'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface AssetPropertyTimestamp {

		/** Required */
		timeInSeconds: string;
		offsetInNanos?: string | null;
	}

	/** <p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>For parameters that are string data type, you can specify the following options:</p> <ul> <li> <p>Use a string. For example, the <code>timeInSeconds</code> value can be <code>'1586400675'</code>.</p> </li> <li> <p>Use an expression. For example, the <code>timeInSeconds</code> value can be <code>'${$input.TemperatureInput.sensorData.timestamp/1000}'</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> </li> </ul> */
	export interface AssetPropertyTimestampFormProperties {

		/** Required */
		timeInSeconds: FormControl<string | null | undefined>,
		offsetInNanos: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyTimestampFormGroup() {
		return new FormGroup<AssetPropertyTimestampFormProperties>({
			timeInSeconds: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offsetInNanos: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE. */
	export interface TransitionEvent {

		/**
		 * Required
		 * Max length: 128
		 */
		eventName: string;

		/**
		 * Required
		 * Max length: 512
		 */
		condition: string;
		actions?: Array<Action>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		nextState: string;
	}

	/** Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE. */
	export interface TransitionEventFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		eventName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 */
		condition: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		nextState: FormControl<string | null | undefined>,
	}
	export function CreateTransitionEventFormGroup() {
		return new FormGroup<TransitionEventFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128)]),
			condition: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512)]),
			nextState: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE. */
	export interface OnEnterLifecycle {
		events?: Array<Event>;
	}

	/** When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE. */
	export interface OnEnterLifecycleFormProperties {
	}
	export function CreateOnEnterLifecycleFormGroup() {
		return new FormGroup<OnEnterLifecycleFormProperties>({
		});

	}


	/** When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>. */
	export interface OnExitLifecycle {
		events?: Array<Event>;
	}

	/** When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>. */
	export interface OnExitLifecycleFormProperties {
	}
	export function CreateOnExitLifecycleFormGroup() {
		return new FormGroup<OnExitLifecycleFormProperties>({
		});

	}


	/** Metadata that can be used to manage the resource. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		value: string;
	}

	/** Metadata that can be used to manage the resource. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
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

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface CreateInputResponse {

		/** Information about the configuration of an input. */
		inputConfiguration?: InputConfiguration;
	}
	export interface CreateInputResponseFormProperties {
	}
	export function CreateCreateInputResponseFormGroup() {
		return new FormGroup<CreateInputResponseFormProperties>({
		});

	}


	/** Information about the configuration of an input. */
	export interface InputConfiguration {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: string;

		/** Max length: 128 */
		inputDescription?: string | null;

		/** Required */
		inputArn: string;

		/** Required */
		creationTime: Date;

		/** Required */
		lastUpdateTime: Date;

		/** Required */
		status: InputConfigurationStatus;
	}

	/** Information about the configuration of an input. */
	export interface InputConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: FormControl<string | null | undefined>,

		/** Max length: 128 */
		inputDescription: FormControl<string | null | undefined>,

		/** Required */
		inputArn: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<InputConfigurationStatus | null | undefined>,
	}
	export function CreateInputConfigurationFormGroup() {
		return new FormGroup<InputConfigurationFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			inputDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			inputArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<InputConfigurationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputConfigurationStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3 }


	/** The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors.  */
	export interface Attribute {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$
		 */
		jsonPath: string;
	}

	/** The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors.  */
	export interface AttributeFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$
		 */
		jsonPath: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			jsonPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface DeleteDetectorModelResponse {
	}
	export interface DeleteDetectorModelResponseFormProperties {
	}
	export function CreateDeleteDetectorModelResponseFormGroup() {
		return new FormGroup<DeleteDetectorModelResponseFormProperties>({
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

	export interface DeleteInputResponse {
	}
	export interface DeleteInputResponseFormProperties {
	}
	export function CreateDeleteInputResponseFormGroup() {
		return new FormGroup<DeleteInputResponseFormProperties>({
		});

	}

	export interface DescribeDetectorModelResponse {

		/** Information about the detector model. */
		detectorModel?: DetectorModel;
	}
	export interface DescribeDetectorModelResponseFormProperties {
	}
	export function CreateDescribeDetectorModelResponseFormGroup() {
		return new FormGroup<DescribeDetectorModelResponseFormProperties>({
		});

	}


	/** Information about the detector model. */
	export interface DetectorModel {

		/** Information that defines how a detector operates. */
		detectorModelDefinition?: DetectorModelDefinition;

		/** Information about how the detector model is configured. */
		detectorModelConfiguration?: DetectorModelConfiguration;
	}

	/** Information about the detector model. */
	export interface DetectorModelFormProperties {
	}
	export function CreateDetectorModelFormGroup() {
		return new FormGroup<DetectorModelFormProperties>({
		});

	}


	/** Information that defines how a detector operates. */
	export interface DetectorModelDefinition {

		/**
		 * Required
		 * Minimum items: 1
		 */
		states: Array<State>;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		initialStateName: string;
	}

	/** Information that defines how a detector operates. */
	export interface DetectorModelDefinitionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		initialStateName: FormControl<string | null | undefined>,
	}
	export function CreateDetectorModelDefinitionFormGroup() {
		return new FormGroup<DetectorModelDefinitionFormProperties>({
			initialStateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface DescribeInputResponse {

		/** Information about the input. */
		input?: Input;
	}
	export interface DescribeInputResponseFormProperties {
	}
	export function CreateDescribeInputResponseFormGroup() {
		return new FormGroup<DescribeInputResponseFormProperties>({
		});

	}


	/** Information about the input. */
	export interface Input {

		/** Information about the configuration of an input. */
		inputConfiguration?: InputConfiguration;

		/** The definition of the input. */
		inputDefinition?: InputDefinition;
	}

	/** Information about the input. */
	export interface InputFormProperties {
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
		});

	}


	/** The definition of the input. */
	export interface InputDefinition {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		attributes: Array<Attribute>;
	}

	/** The definition of the input. */
	export interface InputDefinitionFormProperties {
	}
	export function CreateInputDefinitionFormGroup() {
		return new FormGroup<InputDefinitionFormProperties>({
		});

	}

	export interface DescribeLoggingOptionsResponse {

		/** The values of the AWS IoT Events logging options. */
		loggingOptions?: LoggingOptions;
	}
	export interface DescribeLoggingOptionsResponseFormProperties {
	}
	export function CreateDescribeLoggingOptionsResponseFormGroup() {
		return new FormGroup<DescribeLoggingOptionsResponseFormProperties>({
		});

	}


	/** The values of the AWS IoT Events logging options. */
	export interface LoggingOptions {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: string;

		/** Required */
		level: LoggingOptionsLevel;

		/** Required */
		enabled: boolean;

		/** Minimum items: 1 */
		detectorDebugOptions?: Array<DetectorDebugOption>;
	}

	/** The values of the AWS IoT Events logging options. */
	export interface LoggingOptionsFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		level: FormControl<LoggingOptionsLevel | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingOptionsFormGroup() {
		return new FormGroup<LoggingOptionsFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			level: new FormControl<LoggingOptionsLevel | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LoggingOptionsLevel { ERROR = 0, INFO = 1, DEBUG = 2 }


	/** The detector model and the specific detectors (instances) for which the logging level is given. */
	export interface DetectorDebugOption {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9\-_:]+$
		 */
		keyValue?: string | null;
	}

	/** The detector model and the specific detectors (instances) for which the logging level is given. */
	export interface DetectorDebugOptionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9\-_:]+$
		 */
		keyValue: FormControl<string | null | undefined>,
	}
	export function CreateDetectorDebugOptionFormGroup() {
		return new FormGroup<DetectorDebugOptionFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			keyValue: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface ListDetectorModelVersionsResponse {
		detectorModelVersionSummaries?: Array<DetectorModelVersionSummary>;
		nextToken?: string | null;
	}
	export interface ListDetectorModelVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDetectorModelVersionsResponseFormGroup() {
		return new FormGroup<ListDetectorModelVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the detector model version. */
	export interface DetectorModelVersionSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		detectorModelVersion?: string | null;
		detectorModelArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn?: string | null;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
		status?: DetectorModelConfigurationStatus | null;
		evaluationMethod?: DetectorModelConfigurationEvaluationMethod | null;
	}

	/** Information about the detector model version. */
	export interface DetectorModelVersionSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		detectorModelVersion: FormControl<string | null | undefined>,
		detectorModelArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<DetectorModelConfigurationStatus | null | undefined>,
		evaluationMethod: FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>,
	}
	export function CreateDetectorModelVersionSummaryFormGroup() {
		return new FormGroup<DetectorModelVersionSummaryFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			detectorModelVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			detectorModelArn: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DetectorModelConfigurationStatus | null | undefined>(undefined),
			evaluationMethod: new FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface ListDetectorModelsResponse {
		detectorModelSummaries?: Array<DetectorModelSummary>;
		nextToken?: string | null;
	}
	export interface ListDetectorModelsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDetectorModelsResponseFormGroup() {
		return new FormGroup<ListDetectorModelsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the detector model. */
	export interface DetectorModelSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName?: string | null;

		/** Max length: 128 */
		detectorModelDescription?: string | null;
		creationTime?: Date | null;
	}

	/** Information about the detector model. */
	export interface DetectorModelSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/** Max length: 128 */
		detectorModelDescription: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDetectorModelSummaryFormGroup() {
		return new FormGroup<DetectorModelSummaryFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			detectorModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListInputsResponse {
		inputSummaries?: Array<InputSummary>;
		nextToken?: string | null;
	}
	export interface ListInputsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputsResponseFormGroup() {
		return new FormGroup<ListInputsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the input. */
	export interface InputSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName?: string | null;

		/** Max length: 128 */
		inputDescription?: string | null;
		inputArn?: string | null;
		creationTime?: Date | null;
		lastUpdateTime?: Date | null;
		status?: InputConfigurationStatus | null;
	}

	/** Information about the input. */
	export interface InputSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: FormControl<string | null | undefined>,

		/** Max length: 128 */
		inputDescription: FormControl<string | null | undefined>,
		inputArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<InputConfigurationStatus | null | undefined>,
	}
	export function CreateInputSummaryFormGroup() {
		return new FormGroup<InputSummaryFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			inputDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			inputArn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<InputConfigurationStatus | null | undefined>(undefined),
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

	export enum LoggingLevel { ERROR = 0, INFO = 1, DEBUG = 2 }

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

	export interface UpdateDetectorModelResponse {

		/** Information about how the detector model is configured. */
		detectorModelConfiguration?: DetectorModelConfiguration;
	}
	export interface UpdateDetectorModelResponseFormProperties {
	}
	export function CreateUpdateDetectorModelResponseFormGroup() {
		return new FormGroup<UpdateDetectorModelResponseFormProperties>({
		});

	}

	export interface UpdateInputResponse {

		/** Information about the configuration of an input. */
		inputConfiguration?: InputConfiguration;
	}
	export interface UpdateInputResponseFormProperties {
	}
	export function CreateUpdateInputResponseFormGroup() {
		return new FormGroup<UpdateInputResponseFormProperties>({
		});

	}

	export enum EvaluationMethod { BATCH = 0, SERIAL = 1 }

	export interface CreateDetectorModelRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: string;

		/**
		 * Information that defines how a detector operates.
		 * Required
		 */
		detectorModelDefinition: DetectorModelDefinition;

		/** Max length: 128 */
		detectorModelDescription?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$
		 */
		key?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: string;
		tags?: Array<Tag>;
		evaluationMethod?: DetectorModelConfigurationEvaluationMethod | null;
	}
	export interface CreateDetectorModelRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/** Max length: 128 */
		detectorModelDescription: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
		evaluationMethod: FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>,
	}
	export function CreateCreateDetectorModelRequestFormGroup() {
		return new FormGroup<CreateDetectorModelRequestFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			detectorModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			evaluationMethod: new FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface CreateInputRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: string;

		/** Max length: 128 */
		inputDescription?: string | null;

		/**
		 * The definition of the input.
		 * Required
		 */
		inputDefinition: InputDefinition;
		tags?: Array<Tag>;
	}
	export interface CreateInputRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: FormControl<string | null | undefined>,

		/** Max length: 128 */
		inputDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateInputRequestFormGroup() {
		return new FormGroup<CreateInputRequestFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			inputDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface DeleteDetectorModelRequest {
	}
	export interface DeleteDetectorModelRequestFormProperties {
	}
	export function CreateDeleteDetectorModelRequestFormGroup() {
		return new FormGroup<DeleteDetectorModelRequestFormProperties>({
		});

	}

	export interface DeleteInputRequest {
	}
	export interface DeleteInputRequestFormProperties {
	}
	export function CreateDeleteInputRequestFormGroup() {
		return new FormGroup<DeleteInputRequestFormProperties>({
		});

	}

	export interface DescribeDetectorModelRequest {
	}
	export interface DescribeDetectorModelRequestFormProperties {
	}
	export function CreateDescribeDetectorModelRequestFormGroup() {
		return new FormGroup<DescribeDetectorModelRequestFormProperties>({
		});

	}

	export interface DescribeInputRequest {
	}
	export interface DescribeInputRequestFormProperties {
	}
	export function CreateDescribeInputRequestFormGroup() {
		return new FormGroup<DescribeInputRequestFormProperties>({
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

	export enum DetectorModelVersionStatus { ACTIVE = 0, ACTIVATING = 1, INACTIVE = 2, DEPRECATED = 3, DRAFT = 4, PAUSED = 5, FAILED = 6 }

	export enum InputStatus { CREATING = 0, UPDATING = 1, ACTIVE = 2, DELETING = 3 }

	export interface ListDetectorModelVersionsRequest {
	}
	export interface ListDetectorModelVersionsRequestFormProperties {
	}
	export function CreateListDetectorModelVersionsRequestFormGroup() {
		return new FormGroup<ListDetectorModelVersionsRequestFormProperties>({
		});

	}

	export interface ListDetectorModelsRequest {
	}
	export interface ListDetectorModelsRequestFormProperties {
	}
	export function CreateListDetectorModelsRequestFormGroup() {
		return new FormGroup<ListDetectorModelsRequestFormProperties>({
		});

	}

	export interface ListInputsRequest {
	}
	export interface ListInputsRequestFormProperties {
	}
	export function CreateListInputsRequestFormGroup() {
		return new FormGroup<ListInputsRequestFormProperties>({
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
		 * The values of the AWS IoT Events logging options.
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

	export interface UpdateDetectorModelRequest {

		/**
		 * Information that defines how a detector operates.
		 * Required
		 */
		detectorModelDefinition: DetectorModelDefinition;

		/** Max length: 128 */
		detectorModelDescription?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: string;
		evaluationMethod?: DetectorModelConfigurationEvaluationMethod | null;
	}
	export interface UpdateDetectorModelRequestFormProperties {

		/** Max length: 128 */
		detectorModelDescription: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
		evaluationMethod: FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>,
	}
	export function CreateUpdateDetectorModelRequestFormGroup() {
		return new FormGroup<UpdateDetectorModelRequestFormProperties>({
			detectorModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			evaluationMethod: new FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateInputRequest {

		/** Max length: 128 */
		inputDescription?: string | null;

		/**
		 * The definition of the input.
		 * Required
		 */
		inputDefinition: InputDefinition;
	}
	export interface UpdateInputRequestFormProperties {

		/** Max length: 128 */
		inputDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputRequestFormGroup() {
		return new FormGroup<UpdateInputRequestFormProperties>({
			inputDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a detector model.
		 * Post detector-models
		 * @return {CreateDetectorModelResponse} Success
		 */
		CreateDetectorModel(requestBody: CreateDetectorModelPostBody): Observable<CreateDetectorModelResponse> {
			return this.http.post<CreateDetectorModelResponse>(this.baseUri + 'detector-models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the detector models you have created. Only the metadata associated with each detector model is returned.
		 * Get detector-models
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListDetectorModelsResponse} Success
		 */
		ListDetectorModels(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDetectorModelsResponse> {
			return this.http.get<ListDetectorModelsResponse>(this.baseUri + 'detector-models?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates an input.
		 * Post inputs
		 * @return {void} 
		 */
		CreateInput(requestBody: CreateInputPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inputs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the inputs you have created.
		 * Get inputs
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListInputsResponse} Success
		 */
		ListInputs(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListInputsResponse> {
			return this.http.get<ListInputsResponse>(this.baseUri + 'inputs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Deletes a detector model. Any active instances of the detector model are also deleted.
		 * Delete detector-models/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model to be deleted.
		 * @return {void} 
		 */
		DeleteDetectorModel(detectorModelName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
		 * Get detector-models/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model.
		 * @param {string} version The version of the detector model.
		 * @return {DescribeDetectorModelResponse} Success
		 */
		DescribeDetectorModel(detectorModelName: string, version: string | null | undefined): Observable<DescribeDetectorModelResponse> {
			return this.http.get<DescribeDetectorModelResponse>(this.baseUri + 'detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
		 * Post detector-models/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model that is updated.
		 * @return {UpdateDetectorModelResponse} Success
		 */
		UpdateDetectorModel(detectorModelName: string, requestBody: UpdateDetectorModelPostBody): Observable<UpdateDetectorModelResponse> {
			return this.http.post<UpdateDetectorModelResponse>(this.baseUri + 'detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an input.
		 * Delete inputs/{inputName}
		 * @param {string} inputName The name of the input to delete.
		 * @return {DeleteInputResponse} Success
		 */
		DeleteInput(inputName: string): Observable<DeleteInputResponse> {
			return this.http.delete<DeleteInputResponse>(this.baseUri + 'inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)), {});
		}

		/**
		 * Describes an input.
		 * Get inputs/{inputName}
		 * @param {string} inputName The name of the input.
		 * @return {DescribeInputResponse} Success
		 */
		DescribeInput(inputName: string): Observable<DescribeInputResponse> {
			return this.http.get<DescribeInputResponse>(this.baseUri + 'inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)), {});
		}

		/**
		 * Updates an input.
		 * Put inputs/{inputName}
		 * @param {string} inputName The name of the input you want to update.
		 * @return {UpdateInputResponse} Success
		 */
		UpdateInput(inputName: string, requestBody: UpdateInputPutBody): Observable<UpdateInputResponse> {
			return this.http.put<UpdateInputResponse>(this.baseUri + 'inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current settings of the AWS IoT Events logging options.
		 * Get logging
		 * @return {DescribeLoggingOptionsResponse} Success
		 */
		DescribeLoggingOptions(): Observable<DescribeLoggingOptionsResponse> {
			return this.http.get<DescribeLoggingOptionsResponse>(this.baseUri + 'logging', {});
		}

		/**
		 * <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
		 * Put logging
		 * @return {void} Success
		 */
		PutLoggingOptions(requestBody: PutLoggingOptionsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
		 * Get detector-models/{detectorModelName}/versions
		 * @param {string} detectorModelName The name of the detector model whose versions are returned.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListDetectorModelVersionsResponse} Success
		 */
		ListDetectorModelVersions(detectorModelName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDetectorModelVersionsResponse> {
			return this.http.get<ListDetectorModelVersionsResponse>(this.baseUri + 'detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '/versions&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the tags (metadata) you have assigned to the resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
		 * Post tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Delete tags#resourceArn&tagKeys
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {Array<string>} tagKeys A list of the keys of the tags to be removed from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags#resourceArn&tagKeys?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateDetectorModelPostBody {

		/**
		 * The name of the detector model.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: string;

		/**
		 * Information that defines how a detector operates.
		 * Required
		 */
		detectorModelDefinition: CreateDetectorModelPostBodyDetectorModelDefinition;

		/**
		 * A brief description of the detector model.
		 * Max length: 128
		 */
		detectorModelDescription?: string | null;

		/**
		 * The input attribute key used to identify a device or system to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression in the message payload of each input to specify the attribute-value pair that is used to identify the device associated with the input.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$
		 */
		key?: string | null;

		/**
		 * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: string;

		/** Metadata that can be used to manage the detector model. */
		tags?: Array<Tag>;

		/** Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod?: DetectorModelConfigurationEvaluationMethod | null;
	}
	export interface CreateDetectorModelPostBodyFormProperties {

		/**
		 * The name of the detector model.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_-]+$
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/**
		 * A brief description of the detector model.
		 * Max length: 128
		 */
		detectorModelDescription: FormControl<string | null | undefined>,

		/**
		 * The input attribute key used to identify a device or system to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression in the message payload of each input to specify the attribute-value pair that is used to identify the device associated with the input.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod: FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>,
	}
	export function CreateCreateDetectorModelPostBodyFormGroup() {
		return new FormGroup<CreateDetectorModelPostBodyFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			detectorModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			evaluationMethod: new FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface CreateDetectorModelPostBodyDetectorModelDefinition {

		/** Minimum items: 1 */
		states?: Array<State>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		initialStateName?: string | null;
	}
	export interface CreateDetectorModelPostBodyDetectorModelDefinitionFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		initialStateName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDetectorModelPostBodyDetectorModelDefinitionFormGroup() {
		return new FormGroup<CreateDetectorModelPostBodyDetectorModelDefinitionFormProperties>({
			initialStateName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface CreateInputPostBody {

		/**
		 * The name you want to give to the input.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: string;

		/**
		 * A brief description of the input.
		 * Max length: 128
		 */
		inputDescription?: string | null;

		/**
		 * The definition of the input.
		 * Required
		 */
		inputDefinition: CreateInputPostBodyInputDefinition;

		/** Metadata that can be used to manage the input. */
		tags?: Array<Tag>;
	}
	export interface CreateInputPostBodyFormProperties {

		/**
		 * The name you want to give to the input.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z][a-zA-Z0-9_]*$
		 */
		inputName: FormControl<string | null | undefined>,

		/**
		 * A brief description of the input.
		 * Max length: 128
		 */
		inputDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateInputPostBodyFormGroup() {
		return new FormGroup<CreateInputPostBodyFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			inputDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface CreateInputPostBodyInputDefinition {

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		attributes?: Array<Attribute>;
	}
	export interface CreateInputPostBodyInputDefinitionFormProperties {
	}
	export function CreateCreateInputPostBodyInputDefinitionFormGroup() {
		return new FormGroup<CreateInputPostBodyInputDefinitionFormProperties>({
		});

	}

	export interface UpdateDetectorModelPostBody {

		/**
		 * Information that defines how a detector operates.
		 * Required
		 */
		detectorModelDefinition: UpdateDetectorModelPostBodyDetectorModelDefinition;

		/**
		 * A brief description of the detector model.
		 * Max length: 128
		 */
		detectorModelDescription?: string | null;

		/**
		 * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: string;

		/** Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod?: DetectorModelConfigurationEvaluationMethod | null;
	}
	export interface UpdateDetectorModelPostBodyFormProperties {

		/**
		 * A brief description of the detector model.
		 * Max length: 128
		 */
		detectorModelDescription: FormControl<string | null | undefined>,

		/**
		 * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod: FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>,
	}
	export function CreateUpdateDetectorModelPostBodyFormGroup() {
		return new FormGroup<UpdateDetectorModelPostBodyFormProperties>({
			detectorModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			evaluationMethod: new FormControl<DetectorModelConfigurationEvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateDetectorModelPostBodyDetectorModelDefinition {

		/** Minimum items: 1 */
		states?: Array<State>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		initialStateName?: string | null;
	}
	export interface UpdateDetectorModelPostBodyDetectorModelDefinitionFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		initialStateName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDetectorModelPostBodyDetectorModelDefinitionFormGroup() {
		return new FormGroup<UpdateDetectorModelPostBodyDetectorModelDefinitionFormProperties>({
			initialStateName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface UpdateInputPutBody {

		/**
		 * A brief description of the input.
		 * Max length: 128
		 */
		inputDescription?: string | null;

		/**
		 * The definition of the input.
		 * Required
		 */
		inputDefinition: UpdateInputPutBodyInputDefinition;
	}
	export interface UpdateInputPutBodyFormProperties {

		/**
		 * A brief description of the input.
		 * Max length: 128
		 */
		inputDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputPutBodyFormGroup() {
		return new FormGroup<UpdateInputPutBodyFormProperties>({
			inputDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface UpdateInputPutBodyInputDefinition {

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		attributes?: Array<Attribute>;
	}
	export interface UpdateInputPutBodyInputDefinitionFormProperties {
	}
	export function CreateUpdateInputPutBodyInputDefinitionFormGroup() {
		return new FormGroup<UpdateInputPutBodyInputDefinitionFormProperties>({
		});

	}

	export interface PutLoggingOptionsPutBody {

		/**
		 * The values of the AWS IoT Events logging options.
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

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn?: string | null;
		level?: LoggingOptionsLevel | null;
		enabled?: boolean | null;

		/** Minimum items: 1 */
		detectorDebugOptions?: Array<DetectorDebugOption>;
	}
	export interface PutLoggingOptionsPutBodyLoggingOptionsFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
		level: FormControl<LoggingOptionsLevel | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutLoggingOptionsPutBodyLoggingOptionsFormGroup() {
		return new FormGroup<PutLoggingOptionsPutBodyLoggingOptionsFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			level: new FormControl<LoggingOptionsLevel | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The new or modified tags for the resource.
		 * Required
		 */
		tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

}

