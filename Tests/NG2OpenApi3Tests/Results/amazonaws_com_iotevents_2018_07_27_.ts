import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAlarmModelResponse {
		creationTime?: Date;
		alarmModelArn?: string;
		alarmModelVersion?: string;
		lastUpdateTime?: Date;
		status?: AlarmModelVersionStatus;
	}
	export interface CreateAlarmModelResponseFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		alarmModelArn: FormControl<string | null | undefined>,
		alarmModelVersion: FormControl<string | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<AlarmModelVersionStatus | null | undefined>,
	}
	export function CreateCreateAlarmModelResponseFormGroup() {
		return new FormGroup<CreateAlarmModelResponseFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			alarmModelArn: new FormControl<string | null | undefined>(undefined),
			alarmModelVersion: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<AlarmModelVersionStatus | null | undefined>(undefined),
		});

	}

	export enum AlarmModelVersionStatus { ACTIVE = 'ACTIVE', ACTIVATING = 'ACTIVATING', INACTIVE = 'INACTIVE', FAILED = 'FAILED' }


	/** Metadata that can be used to manage the resource. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** Metadata that can be used to manage the resource. */
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


	/** A rule that compares an input property value to a threshold value with a comparison operator. */
	export interface SimpleRule {

		/** Required */
		inputProperty: string;

		/** Required */
		comparisonOperator: ComparisonOperator;

		/** Required */
		threshold: string;
	}

	/** A rule that compares an input property value to a threshold value with a comparison operator. */
	export interface SimpleRuleFormProperties {

		/** Required */
		inputProperty: FormControl<string | null | undefined>,

		/** Required */
		comparisonOperator: FormControl<ComparisonOperator | null | undefined>,

		/** Required */
		threshold: FormControl<string | null | undefined>,
	}
	export function CreateSimpleRuleFormGroup() {
		return new FormGroup<SimpleRuleFormProperties>({
			inputProperty: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			comparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComparisonOperator { GREATER = 'GREATER', GREATER_OR_EQUAL = 'GREATER_OR_EQUAL', LESS = 'LESS', LESS_OR_EQUAL = 'LESS_OR_EQUAL', EQUAL = 'EQUAL', NOT_EQUAL = 'NOT_EQUAL' }


	/** Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model. */
	export interface NotificationAction {

		/** Required */
		action: NotificationTargetActions;
		smsConfigurations?: Array<SMSConfiguration>;
		emailConfigurations?: Array<EmailConfiguration>;
	}

	/** Contains the notification settings of an alarm model. The settings apply to all alarms that were created based on this alarm model. */
	export interface NotificationActionFormProperties {
	}
	export function CreateNotificationActionFormGroup() {
		return new FormGroup<NotificationActionFormProperties>({
		});

	}


	/** Specifies an AWS Lambda function to manage alarm notifications. You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>. */
	export interface NotificationTargetActions {

		/** Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. */
		lambdaAction?: LambdaAction;
	}

	/** Specifies an AWS Lambda function to manage alarm notifications. You can create one or use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">AWS Lambda function provided by AWS IoT Events</a>. */
	export interface NotificationTargetActionsFormProperties {
	}
	export function CreateNotificationTargetActionsFormGroup() {
		return new FormGroup<NotificationTargetActionsFormProperties>({
		});

	}


	/** Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. */
	export interface LambdaAction {

		/** Required */
		functionArn: string;
		payload?: Payload;
	}

	/** Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. */
	export interface LambdaActionFormProperties {

		/** Required */
		functionArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaActionFormGroup() {
		return new FormGroup<LambdaActionFormProperties>({
			functionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
	export interface Payload {

		/** Required */
		contentExpression: string;

		/** Required */
		type: PayloadType;
	}

	/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
	export interface PayloadFormProperties {

		/** Required */
		contentExpression: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PayloadType | null | undefined>,
	}
	export function CreatePayloadFormGroup() {
		return new FormGroup<PayloadFormProperties>({
			contentExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PayloadType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PayloadType { STRING = 'STRING', JSON = 'JSON' }


	/** Contains the configuration information of SMS notifications. */
	export interface SMSConfiguration {
		senderId?: string;
		additionalMessage?: string;

		/** Required */
		recipients: Array<RecipientDetail>;
	}

	/** Contains the configuration information of SMS notifications. */
	export interface SMSConfigurationFormProperties {
		senderId: FormControl<string | null | undefined>,
		additionalMessage: FormControl<string | null | undefined>,
	}
	export function CreateSMSConfigurationFormGroup() {
		return new FormGroup<SMSConfigurationFormProperties>({
			senderId: new FormControl<string | null | undefined>(undefined),
			additionalMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information that identifies the recipient. */
	export interface RecipientDetail {
		ssoIdentity?: SSOIdentity;
	}

	/** The information that identifies the recipient. */
	export interface RecipientDetailFormProperties {
	}
	export function CreateRecipientDetailFormGroup() {
		return new FormGroup<RecipientDetailFormProperties>({
		});

	}


	/** Contains information about your identity source in AWS Single Sign-On. For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On User Guide</a>. */
	export interface SSOIdentity {

		/** Required */
		identityStoreId: string;
		userId?: string;
	}

	/** Contains information about your identity source in AWS Single Sign-On. For more information, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">AWS Single Sign-On User Guide</a>. */
	export interface SSOIdentityFormProperties {

		/** Required */
		identityStoreId: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSSOIdentityFormGroup() {
		return new FormGroup<SSOIdentityFormProperties>({
			identityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration information of email notifications. */
	export interface EmailConfiguration {

		/** Required */
		from: string;
		content?: EmailContent;

		/** Required */
		recipients: EmailRecipients;
	}

	/** Contains the configuration information of email notifications. */
	export interface EmailConfigurationFormProperties {

		/** Required */
		from: FormControl<string | null | undefined>,
	}
	export function CreateEmailConfigurationFormGroup() {
		return new FormGroup<EmailConfigurationFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the subject and message of an email. */
	export interface EmailContent {
		subject?: string;
		additionalMessage?: string;
	}

	/** Contains the subject and message of an email. */
	export interface EmailContentFormProperties {
		subject: FormControl<string | null | undefined>,
		additionalMessage: FormControl<string | null | undefined>,
	}
	export function CreateEmailContentFormGroup() {
		return new FormGroup<EmailContentFormProperties>({
			subject: new FormControl<string | null | undefined>(undefined),
			additionalMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p> </important> */
	export interface EmailRecipients {
		to?: Array<RecipientDetail>;
	}

	/** <p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p> </important> */
	export interface EmailRecipientsFormProperties {
	}
	export function CreateEmailRecipientsFormGroup() {
		return new FormGroup<EmailRecipientsFormProperties>({
		});

	}


	/** Specifies one of the following actions to receive notifications when the alarm state changes. */
	export interface AlarmAction {

		/** Information required to publish the Amazon SNS message. */
		sns?: SNSTopicPublishAction;

		/** Information required to publish the MQTT message through the AWS IoT message broker. */
		iotTopicPublish?: IotTopicPublishAction;

		/** Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action. */
		lambda?: LambdaAction;

		/** Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action. */
		iotEvents?: IotEventsAction;

		/** Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. */
		sqs?: SqsAction;

		/** Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. */
		firehose?: FirehoseAction;

		/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code>&lt;payload-field&gt;_raw</code>.</p> */
		dynamoDB?: DynamoDBAction;

		/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>tableName</code> parameter can be <code>'GreenhouseTemperatureTable'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>tableName</code> parameter can be <code>$variable.ddbtableName</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>contentExpression</code> parameter in <code>Payload</code> uses a substitution template. </p> <p> <code>'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>The value for the <code>type</code> parameter in <code>Payload</code> must be <code>JSON</code>.</p> */
		dynamoDBv2?: DynamoDBv2Action;

		/** <p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <p>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The expressions accept literals, operators, functions, references, and substitutions templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>propertyAlias</code> parameter can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>assetId</code> parameter can be <code>$input.TurbineInput.assetId1</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>propertyAlias</code> parameter uses a substitution template. </p> <p> <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'</code> </p> </li> </ul> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
		iotSiteWise?: IotSiteWiseAction;
	}

	/** Specifies one of the following actions to receive notifications when the alarm state changes. */
	export interface AlarmActionFormProperties {
	}
	export function CreateAlarmActionFormGroup() {
		return new FormGroup<AlarmActionFormProperties>({
		});

	}


	/** Information required to publish the Amazon SNS message. */
	export interface SNSTopicPublishAction {

		/** Required */
		targetArn: string;
		payload?: Payload;
	}

	/** Information required to publish the Amazon SNS message. */
	export interface SNSTopicPublishActionFormProperties {

		/** Required */
		targetArn: FormControl<string | null | undefined>,
	}
	export function CreateSNSTopicPublishActionFormGroup() {
		return new FormGroup<SNSTopicPublishActionFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information required to publish the MQTT message through the AWS IoT message broker. */
	export interface IotTopicPublishAction {

		/** Required */
		mqttTopic: string;
		payload?: Payload;
	}

	/** Information required to publish the MQTT message through the AWS IoT message broker. */
	export interface IotTopicPublishActionFormProperties {

		/** Required */
		mqttTopic: FormControl<string | null | undefined>,
	}
	export function CreateIotTopicPublishActionFormGroup() {
		return new FormGroup<IotTopicPublishActionFormProperties>({
			mqttTopic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action. */
	export interface IotEventsAction {

		/** Required */
		inputName: string;
		payload?: Payload;
	}

	/** Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action. */
	export interface IotEventsActionFormProperties {

		/** Required */
		inputName: FormControl<string | null | undefined>,
	}
	export function CreateIotEventsActionFormGroup() {
		return new FormGroup<IotEventsActionFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue. */
	export interface SqsAction {

		/** Required */
		queueUrl: string;
		useBase64?: boolean | null;
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
		separator?: string;
		payload?: Payload;
	}

	/** Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream. */
	export interface FirehoseActionFormProperties {

		/** Required */
		deliveryStreamName: FormControl<string | null | undefined>,
		separator: FormControl<string | null | undefined>,
	}
	export function CreateFirehoseActionFormGroup() {
		return new FormGroup<FirehoseActionFormProperties>({
			deliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			separator: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code>&lt;payload-field&gt;_raw</code>.</p> */
	export interface DynamoDBAction {
		hashKeyType?: string;

		/** Required */
		hashKeyField: string;

		/** Required */
		hashKeyValue: string;
		rangeKeyType?: string;
		rangeKeyField?: string;
		rangeKeyValue?: string;
		operation?: string;
		payloadField?: string;

		/** Required */
		tableName: string;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code>&lt;payload-field&gt;_raw</code>.</p> */
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


	/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>tableName</code> parameter can be <code>'GreenhouseTemperatureTable'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>tableName</code> parameter can be <code>$variable.ddbtableName</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>contentExpression</code> parameter in <code>Payload</code> uses a substitution template. </p> <p> <code>'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>The value for the <code>type</code> parameter in <code>Payload</code> must be <code>JSON</code>.</p> */
	export interface DynamoDBv2Action {

		/** Required */
		tableName: string;

		/** <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p> */
		payload?: Payload;
	}

	/** <p>Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBv2Action</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>tableName</code> parameter can be <code>'GreenhouseTemperatureTable'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>tableName</code> parameter can be <code>$variable.ddbtableName</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>contentExpression</code> parameter in <code>Payload</code> uses a substitution template. </p> <p> <code>'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>The value for the <code>type</code> parameter in <code>Payload</code> must be <code>JSON</code>.</p> */
	export interface DynamoDBv2ActionFormProperties {

		/** Required */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDBv2ActionFormGroup() {
		return new FormGroup<DynamoDBv2ActionFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <p>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The expressions accept literals, operators, functions, references, and substitutions templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>propertyAlias</code> parameter can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>assetId</code> parameter can be <code>$input.TurbineInput.assetId1</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>propertyAlias</code> parameter uses a substitution template. </p> <p> <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'</code> </p> </li> </ul> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
	export interface IotSiteWiseAction {
		entryId?: string;
		assetId?: string;
		propertyId?: string;
		propertyAlias?: string;
		propertyValue?: AssetPropertyValue;
	}

	/** <p>Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.</p> <p>You must use expressions for all parameters in <code>IotSiteWiseAction</code>. The expressions accept literals, operators, functions, references, and substitutions templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>propertyAlias</code> parameter can be <code>'/company/windfarm/3/turbine/7/temperature'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>assetId</code> parameter can be <code>$input.TurbineInput.assetId1</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>propertyAlias</code> parameter uses a substitution template. </p> <p> <code>'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'</code> </p> </li> </ul> <p>You must specify either <code>propertyAlias</code> or both <code>assetId</code> and <code>propertyId</code> to identify the target asset property in AWS IoT SiteWise.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
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


	/** <p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyValue</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>quality</code> parameter can be <code>'GOOD'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>quality</code> parameter can be <code>$input.TemperatureInput.sensorData.quality</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
	export interface AssetPropertyValue {
		value?: AssetPropertyVariant;
		timestamp?: AssetPropertyTimestamp;
		quality?: string;
	}

	/** <p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyValue</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>quality</code> parameter can be <code>'GOOD'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>quality</code> parameter can be <code>$input.TemperatureInput.sensorData.quality</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
	export interface AssetPropertyValueFormProperties {
		quality: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyValueFormGroup() {
		return new FormGroup<AssetPropertyValueFormProperties>({
			quality: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyVariant</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>integerValue</code> parameter can be <code>'100'</code>.</p> </li> <li> <p>For references, you must specify either variables or parameters. For example, the value for the <code>booleanValue</code> parameter can be <code>$variable.offline</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates. </p> <p>In the following example, the value for the <code>doubleValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> */
	export interface AssetPropertyVariant {
		stringValue?: string;
		integerValue?: string;
		doubleValue?: string;
		booleanValue?: string;
	}

	/** <p>A structure that contains an asset property value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html">Variant</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyVariant</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>integerValue</code> parameter can be <code>'100'</code>.</p> </li> <li> <p>For references, you must specify either variables or parameters. For example, the value for the <code>booleanValue</code> parameter can be <code>$variable.offline</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates. </p> <p>In the following example, the value for the <code>doubleValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.TemperatureInput.sensorData.temperature * 6 / 5 + 32}'</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You must specify one of the following value types, depending on the <code>dataType</code> of the specified asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html">AssetProperty</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> */
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


	/** <p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyTimestamp</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>timeInSeconds</code> parameter can be <code>'1586400675'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>offsetInNanos</code> parameter can be <code>$variable.time</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>timeInSeconds</code> parameter uses a substitution template.</p> <p> <code>'${$input.TemperatureInput.sensorData.timestamp / 1000}'</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
	export interface AssetPropertyTimestamp {

		/** Required */
		timeInSeconds: string;
		offsetInNanos?: string;
	}

	/** <p>A structure that contains timestamp information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html">TimeInNanos</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyTimestamp</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>timeInSeconds</code> parameter can be <code>'1586400675'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>offsetInNanos</code> parameter can be <code>$variable.time</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>timeInSeconds</code> parameter uses a substitution template.</p> <p> <code>'${$input.TemperatureInput.sensorData.timestamp / 1000}'</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> */
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


	/** Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model. */
	export interface InitializationConfiguration {

		/** Required */
		disabledOnInitialization: boolean;
	}

	/** Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model. */
	export interface InitializationConfigurationFormProperties {

		/** Required */
		disabledOnInitialization: FormControl<boolean | null | undefined>,
	}
	export function CreateInitializationConfigurationFormGroup() {
		return new FormGroup<InitializationConfigurationFormProperties>({
			disabledOnInitialization: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies whether to get notified for alarm state changes. */
	export interface AcknowledgeFlow {

		/** Required */
		enabled: boolean;
	}

	/** Specifies whether to get notified for alarm state changes. */
	export interface AcknowledgeFlowFormProperties {

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAcknowledgeFlowFormGroup() {
		return new FormGroup<AcknowledgeFlowFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateDetectorModelResponse {
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
		detectorModelName?: string;
		detectorModelVersion?: string;
		detectorModelDescription?: string;
		detectorModelArn?: string;
		roleArn?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		status?: DetectorModelVersionStatus;
		key?: string;
		evaluationMethod?: EvaluationMethod;
	}

	/** Information about how the detector model is configured. */
	export interface DetectorModelConfigurationFormProperties {
		detectorModelName: FormControl<string | null | undefined>,
		detectorModelVersion: FormControl<string | null | undefined>,
		detectorModelDescription: FormControl<string | null | undefined>,
		detectorModelArn: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<DetectorModelVersionStatus | null | undefined>,
		key: FormControl<string | null | undefined>,
		evaluationMethod: FormControl<EvaluationMethod | null | undefined>,
	}
	export function CreateDetectorModelConfigurationFormGroup() {
		return new FormGroup<DetectorModelConfigurationFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined),
			detectorModelVersion: new FormControl<string | null | undefined>(undefined),
			detectorModelDescription: new FormControl<string | null | undefined>(undefined),
			detectorModelArn: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DetectorModelVersionStatus | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			evaluationMethod: new FormControl<EvaluationMethod | null | undefined>(undefined),
		});

	}

	export enum DetectorModelVersionStatus { ACTIVE = 'ACTIVE', ACTIVATING = 'ACTIVATING', INACTIVE = 'INACTIVE', DEPRECATED = 'DEPRECATED', DRAFT = 'DRAFT', PAUSED = 'PAUSED', FAILED = 'FAILED' }

	export enum EvaluationMethod { BATCH = 'BATCH', SERIAL = 'SERIAL' }


	/** Information that defines a state of a detector. */
	export interface State {

		/** Required */
		stateName: string;
		onInput?: OnInputLifecycle;
		onEnter?: OnEnterLifecycle;
		onExit?: OnExitLifecycle;
	}

	/** Information that defines a state of a detector. */
	export interface StateFormProperties {

		/** Required */
		stateName: FormControl<string | null | undefined>,
	}
	export function CreateStateFormGroup() {
		return new FormGroup<StateFormProperties>({
			stateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		eventName: string;
		condition?: string;
		actions?: Array<Action>;
	}

	/** Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE. */
	export interface EventFormProperties {

		/** Required */
		eventName: FormControl<string | null | undefined>,
		condition: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			condition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action to be performed when the <code>condition</code> is TRUE. */
	export interface Action {
		setVariable?: SetVariableAction;
		sns?: SNSTopicPublishAction;
		iotTopicPublish?: IotTopicPublishAction;
		setTimer?: SetTimerAction;
		clearTimer?: ClearTimerAction;
		resetTimer?: ResetTimerAction;
		lambda?: LambdaAction;
		iotEvents?: IotEventsAction;
		sqs?: SqsAction;
		firehose?: FirehoseAction;
		dynamoDB?: DynamoDBAction;
		dynamoDBv2?: DynamoDBv2Action;
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

		/** Required */
		variableName: string;

		/** Required */
		value: string;
	}

	/** Information about the variable and its new value. */
	export interface SetVariableActionFormProperties {

		/** Required */
		variableName: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSetVariableActionFormGroup() {
		return new FormGroup<SetVariableActionFormProperties>({
			variableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information needed to set the timer. */
	export interface SetTimerAction {

		/** Required */
		timerName: string;
		seconds?: number | null;
		durationExpression?: string;
	}

	/** Information needed to set the timer. */
	export interface SetTimerActionFormProperties {

		/** Required */
		timerName: FormControl<string | null | undefined>,
		seconds: FormControl<number | null | undefined>,
		durationExpression: FormControl<string | null | undefined>,
	}
	export function CreateSetTimerActionFormGroup() {
		return new FormGroup<SetTimerActionFormProperties>({
			timerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			seconds: new FormControl<number | null | undefined>(undefined),
			durationExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information needed to clear the timer. */
	export interface ClearTimerAction {

		/** Required */
		timerName: string;
	}

	/** Information needed to clear the timer. */
	export interface ClearTimerActionFormProperties {

		/** Required */
		timerName: FormControl<string | null | undefined>,
	}
	export function CreateClearTimerActionFormGroup() {
		return new FormGroup<ClearTimerActionFormProperties>({
			timerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer. */
	export interface ResetTimerAction {

		/** Required */
		timerName: string;
	}

	/** Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer. */
	export interface ResetTimerActionFormProperties {

		/** Required */
		timerName: FormControl<string | null | undefined>,
	}
	export function CreateResetTimerActionFormGroup() {
		return new FormGroup<ResetTimerActionFormProperties>({
			timerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE. */
	export interface TransitionEvent {

		/** Required */
		eventName: string;

		/** Required */
		condition: string;
		actions?: Array<Action>;

		/** Required */
		nextState: string;
	}

	/** Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE. */
	export interface TransitionEventFormProperties {

		/** Required */
		eventName: FormControl<string | null | undefined>,

		/** Required */
		condition: FormControl<string | null | undefined>,

		/** Required */
		nextState: FormControl<string | null | undefined>,
	}
	export function CreateTransitionEventFormGroup() {
		return new FormGroup<TransitionEventFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			condition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextState: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateInputResponse {
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

		/** Required */
		inputName: string;
		inputDescription?: string;

		/** Required */
		inputArn: string;

		/** Required */
		creationTime: Date;

		/** Required */
		lastUpdateTime: Date;

		/** Required */
		status: InputStatus;
	}

	/** Information about the configuration of an input. */
	export interface InputConfigurationFormProperties {

		/** Required */
		inputName: FormControl<string | null | undefined>,
		inputDescription: FormControl<string | null | undefined>,

		/** Required */
		inputArn: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdateTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<InputStatus | null | undefined>,
	}
	export function CreateInputConfigurationFormGroup() {
		return new FormGroup<InputConfigurationFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputDescription: new FormControl<string | null | undefined>(undefined),
			inputArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<InputStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputStatus { CREATING = 'CREATING', UPDATING = 'UPDATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING' }


	/** The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors.  */
	export interface Attribute {

		/** Required */
		jsonPath: string;
	}

	/** The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using <code>BatchPutMessage</code>. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the <code>condition</code> expressions used by detectors.  */
	export interface AttributeFormProperties {

		/** Required */
		jsonPath: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			jsonPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAlarmModelResponse {
	}
	export interface DeleteAlarmModelResponseFormProperties {
	}
	export function CreateDeleteAlarmModelResponseFormGroup() {
		return new FormGroup<DeleteAlarmModelResponseFormProperties>({
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

	export interface DeleteDetectorModelResponse {
	}
	export interface DeleteDetectorModelResponseFormProperties {
	}
	export function CreateDeleteDetectorModelResponseFormGroup() {
		return new FormGroup<DeleteDetectorModelResponseFormProperties>({
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

	export interface DescribeAlarmModelResponse {
		creationTime?: Date;
		alarmModelArn?: string;
		alarmModelVersion?: string;
		lastUpdateTime?: Date;
		status?: AlarmModelVersionStatus;
		statusMessage?: string;
		alarmModelName?: string;
		alarmModelDescription?: string;
		roleArn?: string;
		key?: string;
		severity?: number | null;
		alarmRule?: AlarmRule;
		alarmNotification?: AlarmNotification;
		alarmEventActions?: AlarmEventActions;
		alarmCapabilities?: AlarmCapabilities;
	}
	export interface DescribeAlarmModelResponseFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		alarmModelArn: FormControl<string | null | undefined>,
		alarmModelVersion: FormControl<string | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<AlarmModelVersionStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		alarmModelName: FormControl<string | null | undefined>,
		alarmModelDescription: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		severity: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAlarmModelResponseFormGroup() {
		return new FormGroup<DescribeAlarmModelResponseFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			alarmModelArn: new FormControl<string | null | undefined>(undefined),
			alarmModelVersion: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<AlarmModelVersionStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			alarmModelName: new FormControl<string | null | undefined>(undefined),
			alarmModelDescription: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines when your alarm is invoked. */
	export interface AlarmRule {
		simpleRule?: SimpleRule;
	}

	/** Defines when your alarm is invoked. */
	export interface AlarmRuleFormProperties {
	}
	export function CreateAlarmRuleFormGroup() {
		return new FormGroup<AlarmRuleFormProperties>({
		});

	}


	/** Contains information about one or more notification actions. */
	export interface AlarmNotification {
		notificationActions?: Array<NotificationAction>;
	}

	/** Contains information about one or more notification actions. */
	export interface AlarmNotificationFormProperties {
	}
	export function CreateAlarmNotificationFormGroup() {
		return new FormGroup<AlarmNotificationFormProperties>({
		});

	}


	/** Contains information about one or more alarm actions. */
	export interface AlarmEventActions {
		alarmActions?: Array<AlarmAction>;
	}

	/** Contains information about one or more alarm actions. */
	export interface AlarmEventActionsFormProperties {
	}
	export function CreateAlarmEventActionsFormGroup() {
		return new FormGroup<AlarmEventActionsFormProperties>({
		});

	}


	/** Contains the configuration information of alarm state changes. */
	export interface AlarmCapabilities {
		initializationConfiguration?: InitializationConfiguration;
		acknowledgeFlow?: AcknowledgeFlow;
	}

	/** Contains the configuration information of alarm state changes. */
	export interface AlarmCapabilitiesFormProperties {
	}
	export function CreateAlarmCapabilitiesFormGroup() {
		return new FormGroup<AlarmCapabilitiesFormProperties>({
		});

	}

	export interface DescribeDetectorModelResponse {
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
		detectorModelDefinition?: DetectorModelDefinition;
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

		/** Required */
		states: Array<State>;

		/** Required */
		initialStateName: string;
	}

	/** Information that defines how a detector operates. */
	export interface DetectorModelDefinitionFormProperties {

		/** Required */
		initialStateName: FormControl<string | null | undefined>,
	}
	export function CreateDetectorModelDefinitionFormGroup() {
		return new FormGroup<DetectorModelDefinitionFormProperties>({
			initialStateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDetectorModelAnalysisResponse {
		status?: AnalysisStatus;
	}
	export interface DescribeDetectorModelAnalysisResponseFormProperties {
		status: FormControl<AnalysisStatus | null | undefined>,
	}
	export function CreateDescribeDetectorModelAnalysisResponseFormGroup() {
		return new FormGroup<DescribeDetectorModelAnalysisResponseFormProperties>({
			status: new FormControl<AnalysisStatus | null | undefined>(undefined),
		});

	}

	export enum AnalysisStatus { RUNNING = 'RUNNING', COMPLETE = 'COMPLETE', FAILED = 'FAILED' }

	export interface DescribeInputResponse {
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
		inputConfiguration?: InputConfiguration;
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

		/** Required */
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

		/** Required */
		roleArn: string;

		/** Required */
		level: LoggingLevel;

		/** Required */
		enabled: boolean;
		detectorDebugOptions?: Array<DetectorDebugOption>;
	}

	/** The values of the AWS IoT Events logging options. */
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

	export enum LoggingLevel { ERROR = 'ERROR', INFO = 'INFO', DEBUG = 'DEBUG' }


	/** The detector model and the specific detectors (instances) for which the logging level is given. */
	export interface DetectorDebugOption {

		/** Required */
		detectorModelName: string;
		keyValue?: string;
	}

	/** The detector model and the specific detectors (instances) for which the logging level is given. */
	export interface DetectorDebugOptionFormProperties {

		/** Required */
		detectorModelName: FormControl<string | null | undefined>,
		keyValue: FormControl<string | null | undefined>,
	}
	export function CreateDetectorDebugOptionFormGroup() {
		return new FormGroup<DetectorDebugOptionFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyValue: new FormControl<string | null | undefined>(undefined),
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

	export interface GetDetectorModelAnalysisResultsResponse {
		analysisResults?: Array<AnalysisResult>;
		nextToken?: string;
	}
	export interface GetDetectorModelAnalysisResultsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDetectorModelAnalysisResultsResponseFormGroup() {
		return new FormGroup<GetDetectorModelAnalysisResultsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the result of the analysis. */
	export interface AnalysisResult {
		type?: string;
		level?: AnalysisResultLevel;
		message?: string;
		locations?: Array<AnalysisResultLocation>;
	}

	/** Contains the result of the analysis. */
	export interface AnalysisResultFormProperties {
		type: FormControl<string | null | undefined>,
		level: FormControl<AnalysisResultLevel | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisResultFormGroup() {
		return new FormGroup<AnalysisResultFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<AnalysisResultLevel | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalysisResultLevel { INFO = 'INFO', WARNING = 'WARNING', ERROR = 'ERROR' }


	/** Contains information that you can use to locate the field in your detector model that the analysis result references. */
	export interface AnalysisResultLocation {
		path?: string;
	}

	/** Contains information that you can use to locate the field in your detector model that the analysis result references. */
	export interface AnalysisResultLocationFormProperties {
		path: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisResultLocationFormGroup() {
		return new FormGroup<AnalysisResultLocationFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAlarmModelVersionsResponse {
		alarmModelVersionSummaries?: Array<AlarmModelVersionSummary>;
		nextToken?: string;
	}
	export interface ListAlarmModelVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlarmModelVersionsResponseFormGroup() {
		return new FormGroup<ListAlarmModelVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of an alarm model version. */
	export interface AlarmModelVersionSummary {
		alarmModelName?: string;
		alarmModelArn?: string;
		alarmModelVersion?: string;
		roleArn?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		status?: AlarmModelVersionStatus;
		statusMessage?: string;
	}

	/** Contains a summary of an alarm model version. */
	export interface AlarmModelVersionSummaryFormProperties {
		alarmModelName: FormControl<string | null | undefined>,
		alarmModelArn: FormControl<string | null | undefined>,
		alarmModelVersion: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<AlarmModelVersionStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateAlarmModelVersionSummaryFormGroup() {
		return new FormGroup<AlarmModelVersionSummaryFormProperties>({
			alarmModelName: new FormControl<string | null | undefined>(undefined),
			alarmModelArn: new FormControl<string | null | undefined>(undefined),
			alarmModelVersion: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<AlarmModelVersionStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAlarmModelsResponse {
		alarmModelSummaries?: Array<AlarmModelSummary>;
		nextToken?: string;
	}
	export interface ListAlarmModelsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlarmModelsResponseFormGroup() {
		return new FormGroup<ListAlarmModelsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of an alarm model. */
	export interface AlarmModelSummary {
		creationTime?: Date;
		alarmModelDescription?: string;
		alarmModelName?: string;
	}

	/** Contains a summary of an alarm model. */
	export interface AlarmModelSummaryFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		alarmModelDescription: FormControl<string | null | undefined>,
		alarmModelName: FormControl<string | null | undefined>,
	}
	export function CreateAlarmModelSummaryFormGroup() {
		return new FormGroup<AlarmModelSummaryFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			alarmModelDescription: new FormControl<string | null | undefined>(undefined),
			alarmModelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDetectorModelVersionsResponse {
		detectorModelVersionSummaries?: Array<DetectorModelVersionSummary>;
		nextToken?: string;
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
		detectorModelName?: string;
		detectorModelVersion?: string;
		detectorModelArn?: string;
		roleArn?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		status?: DetectorModelVersionStatus;
		evaluationMethod?: EvaluationMethod;
	}

	/** Information about the detector model version. */
	export interface DetectorModelVersionSummaryFormProperties {
		detectorModelName: FormControl<string | null | undefined>,
		detectorModelVersion: FormControl<string | null | undefined>,
		detectorModelArn: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<DetectorModelVersionStatus | null | undefined>,
		evaluationMethod: FormControl<EvaluationMethod | null | undefined>,
	}
	export function CreateDetectorModelVersionSummaryFormGroup() {
		return new FormGroup<DetectorModelVersionSummaryFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined),
			detectorModelVersion: new FormControl<string | null | undefined>(undefined),
			detectorModelArn: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DetectorModelVersionStatus | null | undefined>(undefined),
			evaluationMethod: new FormControl<EvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface ListDetectorModelsResponse {
		detectorModelSummaries?: Array<DetectorModelSummary>;
		nextToken?: string;
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
		detectorModelName?: string;
		detectorModelDescription?: string;
		creationTime?: Date;
	}

	/** Information about the detector model. */
	export interface DetectorModelSummaryFormProperties {
		detectorModelName: FormControl<string | null | undefined>,
		detectorModelDescription: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDetectorModelSummaryFormGroup() {
		return new FormGroup<DetectorModelSummaryFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined),
			detectorModelDescription: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListInputRoutingsResponse {
		routedResources?: Array<RoutedResource>;
		nextToken?: string;
	}
	export interface ListInputRoutingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputRoutingsResponseFormGroup() {
		return new FormGroup<ListInputRoutingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains information about the routed resource.  */
	export interface RoutedResource {
		name?: string;
		arn?: string;
	}

	/**  Contains information about the routed resource.  */
	export interface RoutedResourceFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateRoutedResourceFormGroup() {
		return new FormGroup<RoutedResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The identifier of the input routed to AWS IoT Events.  */
	export interface IotEventsInputIdentifier {

		/** Required */
		inputName: string;
	}

	/**  The identifier of the input routed to AWS IoT Events.  */
	export interface IotEventsInputIdentifierFormProperties {

		/** Required */
		inputName: FormControl<string | null | undefined>,
	}
	export function CreateIotEventsInputIdentifierFormGroup() {
		return new FormGroup<IotEventsInputIdentifierFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The identifer of the input routed from AWS IoT SiteWise.  */
	export interface IotSiteWiseInputIdentifier {
		iotSiteWiseAssetModelPropertyIdentifier?: IotSiteWiseAssetModelPropertyIdentifier;
	}

	/**  The identifer of the input routed from AWS IoT SiteWise.  */
	export interface IotSiteWiseInputIdentifierFormProperties {
	}
	export function CreateIotSiteWiseInputIdentifierFormGroup() {
		return new FormGroup<IotSiteWiseInputIdentifierFormProperties>({
		});

	}


	/**  The asset model property identifer of the input routed from AWS IoT SiteWise.  */
	export interface IotSiteWiseAssetModelPropertyIdentifier {

		/** Required */
		assetModelId: string;

		/** Required */
		propertyId: string;
	}

	/**  The asset model property identifer of the input routed from AWS IoT SiteWise.  */
	export interface IotSiteWiseAssetModelPropertyIdentifierFormProperties {

		/** Required */
		assetModelId: FormControl<string | null | undefined>,

		/** Required */
		propertyId: FormControl<string | null | undefined>,
	}
	export function CreateIotSiteWiseAssetModelPropertyIdentifierFormGroup() {
		return new FormGroup<IotSiteWiseAssetModelPropertyIdentifierFormProperties>({
			assetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			propertyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListInputsResponse {
		inputSummaries?: Array<InputSummary>;
		nextToken?: string;
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
		inputName?: string;
		inputDescription?: string;
		inputArn?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		status?: InputStatus;
	}

	/** Information about the input. */
	export interface InputSummaryFormProperties {
		inputName: FormControl<string | null | undefined>,
		inputDescription: FormControl<string | null | undefined>,
		inputArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<InputStatus | null | undefined>,
	}
	export function CreateInputSummaryFormGroup() {
		return new FormGroup<InputSummaryFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined),
			inputDescription: new FormControl<string | null | undefined>(undefined),
			inputArn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<InputStatus | null | undefined>(undefined),
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

	export interface StartDetectorModelAnalysisResponse {
		analysisId?: string;
	}
	export interface StartDetectorModelAnalysisResponseFormProperties {
		analysisId: FormControl<string | null | undefined>,
	}
	export function CreateStartDetectorModelAnalysisResponseFormGroup() {
		return new FormGroup<StartDetectorModelAnalysisResponseFormProperties>({
			analysisId: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateAlarmModelResponse {
		creationTime?: Date;
		alarmModelArn?: string;
		alarmModelVersion?: string;
		lastUpdateTime?: Date;
		status?: AlarmModelVersionStatus;
	}
	export interface UpdateAlarmModelResponseFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		alarmModelArn: FormControl<string | null | undefined>,
		alarmModelVersion: FormControl<string | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<AlarmModelVersionStatus | null | undefined>,
	}
	export function CreateUpdateAlarmModelResponseFormGroup() {
		return new FormGroup<UpdateAlarmModelResponseFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			alarmModelArn: new FormControl<string | null | undefined>(undefined),
			alarmModelVersion: new FormControl<string | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<AlarmModelVersionStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateDetectorModelResponse {
		detectorModelConfiguration?: DetectorModelConfiguration;
	}
	export interface UpdateDetectorModelResponseFormProperties {
	}
	export function CreateUpdateDetectorModelResponseFormGroup() {
		return new FormGroup<UpdateDetectorModelResponseFormProperties>({
		});

	}

	export interface UpdateInputResponse {
		inputConfiguration?: InputConfiguration;
	}
	export interface UpdateInputResponseFormProperties {
	}
	export function CreateUpdateInputResponseFormGroup() {
		return new FormGroup<UpdateInputResponseFormProperties>({
		});

	}

	export interface CreateAlarmModelRequest {

		/** Required */
		alarmModelName: string;
		alarmModelDescription?: string;

		/** Required */
		roleArn: string;
		tags?: Array<Tag>;
		key?: string;
		severity?: number | null;

		/** Required */
		alarmRule: AlarmRule;
		alarmNotification?: AlarmNotification;
		alarmEventActions?: AlarmEventActions;
		alarmCapabilities?: AlarmCapabilities;
	}
	export interface CreateAlarmModelRequestFormProperties {

		/** Required */
		alarmModelName: FormControl<string | null | undefined>,
		alarmModelDescription: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		severity: FormControl<number | null | undefined>,
	}
	export function CreateCreateAlarmModelRequestFormGroup() {
		return new FormGroup<CreateAlarmModelRequestFormProperties>({
			alarmModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alarmModelDescription: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDetectorModelRequest {

		/** Required */
		detectorModelName: string;

		/** Required */
		detectorModelDefinition: DetectorModelDefinition;
		detectorModelDescription?: string;
		key?: string;

		/** Required */
		roleArn: string;
		tags?: Array<Tag>;
		evaluationMethod?: EvaluationMethod;
	}
	export interface CreateDetectorModelRequestFormProperties {

		/** Required */
		detectorModelName: FormControl<string | null | undefined>,
		detectorModelDescription: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		evaluationMethod: FormControl<EvaluationMethod | null | undefined>,
	}
	export function CreateCreateDetectorModelRequestFormGroup() {
		return new FormGroup<CreateDetectorModelRequestFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorModelDescription: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			evaluationMethod: new FormControl<EvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface CreateInputRequest {

		/** Required */
		inputName: string;
		inputDescription?: string;

		/** Required */
		inputDefinition: InputDefinition;
		tags?: Array<Tag>;
	}
	export interface CreateInputRequestFormProperties {

		/** Required */
		inputName: FormControl<string | null | undefined>,
		inputDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateInputRequestFormGroup() {
		return new FormGroup<CreateInputRequestFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAlarmModelRequest {
	}
	export interface DeleteAlarmModelRequestFormProperties {
	}
	export function CreateDeleteAlarmModelRequestFormGroup() {
		return new FormGroup<DeleteAlarmModelRequestFormProperties>({
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

	export interface DescribeAlarmModelRequest {
	}
	export interface DescribeAlarmModelRequestFormProperties {
	}
	export function CreateDescribeAlarmModelRequestFormGroup() {
		return new FormGroup<DescribeAlarmModelRequestFormProperties>({
		});

	}

	export interface DescribeDetectorModelAnalysisRequest {
	}
	export interface DescribeDetectorModelAnalysisRequestFormProperties {
	}
	export function CreateDescribeDetectorModelAnalysisRequestFormGroup() {
		return new FormGroup<DescribeDetectorModelAnalysisRequestFormProperties>({
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

	export interface GetDetectorModelAnalysisResultsRequest {
	}
	export interface GetDetectorModelAnalysisResultsRequestFormProperties {
	}
	export function CreateGetDetectorModelAnalysisResultsRequestFormGroup() {
		return new FormGroup<GetDetectorModelAnalysisResultsRequestFormProperties>({
		});

	}


	/**  The identifer of the input.  */
	export interface InputIdentifier {
		iotEventsInputIdentifier?: IotEventsInputIdentifier;
		iotSiteWiseInputIdentifier?: IotSiteWiseInputIdentifier;
	}

	/**  The identifer of the input.  */
	export interface InputIdentifierFormProperties {
	}
	export function CreateInputIdentifierFormGroup() {
		return new FormGroup<InputIdentifierFormProperties>({
		});

	}

	export interface ListAlarmModelVersionsRequest {
	}
	export interface ListAlarmModelVersionsRequestFormProperties {
	}
	export function CreateListAlarmModelVersionsRequestFormGroup() {
		return new FormGroup<ListAlarmModelVersionsRequestFormProperties>({
		});

	}

	export interface ListAlarmModelsRequest {
	}
	export interface ListAlarmModelsRequestFormProperties {
	}
	export function CreateListAlarmModelsRequestFormGroup() {
		return new FormGroup<ListAlarmModelsRequestFormProperties>({
		});

	}

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

	export interface ListInputRoutingsRequest {

		/** Required */
		inputIdentifier: InputIdentifier;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListInputRoutingsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputRoutingsRequestFormGroup() {
		return new FormGroup<ListInputRoutingsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		loggingOptions: LoggingOptions;
	}
	export interface PutLoggingOptionsRequestFormProperties {
	}
	export function CreatePutLoggingOptionsRequestFormGroup() {
		return new FormGroup<PutLoggingOptionsRequestFormProperties>({
		});

	}

	export interface StartDetectorModelAnalysisRequest {

		/**
		 * Information that defines how a detector operates.
		 * Required
		 */
		detectorModelDefinition: DetectorModelDefinition;
	}
	export interface StartDetectorModelAnalysisRequestFormProperties {
	}
	export function CreateStartDetectorModelAnalysisRequestFormGroup() {
		return new FormGroup<StartDetectorModelAnalysisRequestFormProperties>({
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

	export interface UpdateAlarmModelRequest {
		alarmModelDescription?: string;

		/** Required */
		roleArn: string;
		severity?: number | null;

		/** Required */
		alarmRule: AlarmRule;
		alarmNotification?: AlarmNotification;
		alarmEventActions?: AlarmEventActions;
		alarmCapabilities?: AlarmCapabilities;
	}
	export interface UpdateAlarmModelRequestFormProperties {
		alarmModelDescription: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		severity: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAlarmModelRequestFormGroup() {
		return new FormGroup<UpdateAlarmModelRequestFormProperties>({
			alarmModelDescription: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			severity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDetectorModelRequest {

		/** Required */
		detectorModelDefinition: DetectorModelDefinition;
		detectorModelDescription?: string;

		/** Required */
		roleArn: string;
		evaluationMethod?: EvaluationMethod;
	}
	export interface UpdateDetectorModelRequestFormProperties {
		detectorModelDescription: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		evaluationMethod: FormControl<EvaluationMethod | null | undefined>,
	}
	export function CreateUpdateDetectorModelRequestFormGroup() {
		return new FormGroup<UpdateDetectorModelRequestFormProperties>({
			detectorModelDescription: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			evaluationMethod: new FormControl<EvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateInputRequest {
		inputDescription?: string;

		/** Required */
		inputDefinition: InputDefinition;
	}
	export interface UpdateInputRequestFormProperties {
		inputDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInputRequestFormGroup() {
		return new FormGroup<UpdateInputRequestFormProperties>({
			inputDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
		 * Post alarm-models
		 * @return {CreateAlarmModelResponse} Success
		 */
		CreateAlarmModel(requestBody: CreateAlarmModelPostBody): Observable<CreateAlarmModelResponse> {
			return this.http.post<CreateAlarmModelResponse>(this.baseUri + 'alarm-models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
		 * Get alarm-models
		 * @param {string} nextToken The token that you can use to return the next set of results.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 *     Minimum: 1    Maximum: 250
		 * @return {ListAlarmModelsResponse} Success
		 */
		ListAlarmModels(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAlarmModelsResponse> {
			return this.http.get<ListAlarmModelsResponse>(this.baseUri + 'alarm-models?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
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
		 * @param {string} nextToken The token that you can use to return the next set of results.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 *     Minimum: 1    Maximum: 250
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
		 * @param {string} nextToken The token that you can use to return the next set of results.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 *     Minimum: 1    Maximum: 250
		 * @return {ListInputsResponse} Success
		 */
		ListInputs(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListInputsResponse> {
			return this.http.get<ListInputsResponse>(this.baseUri + 'inputs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
		 * Delete alarm-models/{alarmModelName}
		 * @param {string} alarmModelName The name of the alarm model.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteAlarmModel(alarmModelName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'alarm-models/' + (alarmModelName == null ? '' : encodeURIComponent(alarmModelName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
		 * Get alarm-models/{alarmModelName}
		 * @param {string} alarmModelName The name of the alarm model.
		 *     Min length: 1    Max length: 128
		 * @param {string} version The version of the alarm model.
		 *     Min length: 1    Max length: 128
		 * @return {DescribeAlarmModelResponse} Success
		 */
		DescribeAlarmModel(alarmModelName: string, version: string | null | undefined): Observable<DescribeAlarmModelResponse> {
			return this.http.get<DescribeAlarmModelResponse>(this.baseUri + 'alarm-models/' + (alarmModelName == null ? '' : encodeURIComponent(alarmModelName)) + '&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
		 * Post alarm-models/{alarmModelName}
		 * @param {string} alarmModelName The name of the alarm model.
		 *     Min length: 1    Max length: 128
		 * @return {UpdateAlarmModelResponse} Success
		 */
		UpdateAlarmModel(alarmModelName: string, requestBody: UpdateAlarmModelPostBody): Observable<UpdateAlarmModelResponse> {
			return this.http.post<UpdateAlarmModelResponse>(this.baseUri + 'alarm-models/' + (alarmModelName == null ? '' : encodeURIComponent(alarmModelName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a detector model. Any active instances of the detector model are also deleted.
		 * Delete detector-models/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model to be deleted.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteDetectorModel(detectorModelName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
		 * Get detector-models/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model.
		 *     Min length: 1    Max length: 128
		 * @param {string} version The version of the detector model.
		 *     Min length: 1    Max length: 128
		 * @return {DescribeDetectorModelResponse} Success
		 */
		DescribeDetectorModel(detectorModelName: string, version: string | null | undefined): Observable<DescribeDetectorModelResponse> {
			return this.http.get<DescribeDetectorModelResponse>(this.baseUri + 'detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
		 * Post detector-models/{detectorModelName}
		 * @param {string} detectorModelName The name of the detector model that is updated.
		 *     Min length: 1    Max length: 128
		 * @return {UpdateDetectorModelResponse} Success
		 */
		UpdateDetectorModel(detectorModelName: string, requestBody: UpdateDetectorModelPostBody): Observable<UpdateDetectorModelResponse> {
			return this.http.post<UpdateDetectorModelResponse>(this.baseUri + 'detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an input.
		 * Delete inputs/{inputName}
		 * @param {string} inputName The name of the input to delete.
		 *     Min length: 1    Max length: 128
		 * @return {DeleteInputResponse} Success
		 */
		DeleteInput(inputName: string): Observable<DeleteInputResponse> {
			return this.http.delete<DeleteInputResponse>(this.baseUri + 'inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)), {});
		}

		/**
		 * Describes an input.
		 * Get inputs/{inputName}
		 * @param {string} inputName The name of the input.
		 *     Min length: 1    Max length: 128
		 * @return {DescribeInputResponse} Success
		 */
		DescribeInput(inputName: string): Observable<DescribeInputResponse> {
			return this.http.get<DescribeInputResponse>(this.baseUri + 'inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)), {});
		}

		/**
		 * Updates an input.
		 * Put inputs/{inputName}
		 * @param {string} inputName The name of the input you want to update.
		 *     Min length: 1    Max length: 128
		 * @return {UpdateInputResponse} Success
		 */
		UpdateInput(inputName: string, requestBody: UpdateInputPutBody): Observable<UpdateInputResponse> {
			return this.http.put<UpdateInputResponse>(this.baseUri + 'inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
		 * Get analysis/detector-models/{analysisId}
		 * @param {string} analysisId The ID of the analysis result that you want to retrieve.
		 * @return {DescribeDetectorModelAnalysisResponse} Success
		 */
		DescribeDetectorModelAnalysis(analysisId: string): Observable<DescribeDetectorModelAnalysisResponse> {
			return this.http.get<DescribeDetectorModelAnalysisResponse>(this.baseUri + 'analysis/detector-models/' + (analysisId == null ? '' : encodeURIComponent(analysisId)), {});
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
		 * <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
		 * Get analysis/detector-models/{analysisId}/results
		 * @param {string} analysisId The ID of the analysis result that you want to retrieve.
		 * @param {string} nextToken The token that you can use to return the next set of results.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetDetectorModelAnalysisResultsResponse} Success
		 */
		GetDetectorModelAnalysisResults(analysisId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetDetectorModelAnalysisResultsResponse> {
			return this.http.get<GetDetectorModelAnalysisResultsResponse>(this.baseUri + 'analysis/detector-models/' + (analysisId == null ? '' : encodeURIComponent(analysisId)) + '/results&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
		 * Get alarm-models/{alarmModelName}/versions
		 * @param {string} alarmModelName The name of the alarm model.
		 *     Min length: 1    Max length: 128
		 * @param {string} nextToken The token that you can use to return the next set of results.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 *     Minimum: 1    Maximum: 250
		 * @return {ListAlarmModelVersionsResponse} Success
		 */
		ListAlarmModelVersions(alarmModelName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAlarmModelVersionsResponse> {
			return this.http.get<ListAlarmModelVersionsResponse>(this.baseUri + 'alarm-models/' + (alarmModelName == null ? '' : encodeURIComponent(alarmModelName)) + '/versions&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
		 * Get detector-models/{detectorModelName}/versions
		 * @param {string} detectorModelName The name of the detector model whose versions are returned.
		 *     Min length: 1    Max length: 128
		 * @param {string} nextToken The token that you can use to return the next set of results.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 *     Minimum: 1    Maximum: 250
		 * @return {ListDetectorModelVersionsResponse} Success
		 */
		ListDetectorModelVersions(detectorModelName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDetectorModelVersionsResponse> {
			return this.http.get<ListDetectorModelVersionsResponse>(this.baseUri + 'detector-models/' + (detectorModelName == null ? '' : encodeURIComponent(detectorModelName)) + '/versions&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists one or more input routings.
		 * Post input-routings
		 * @return {ListInputRoutingsResponse} Success
		 */
		ListInputRoutings(requestBody: ListInputRoutingsPostBody): Observable<ListInputRoutingsResponse> {
			return this.http.post<ListInputRoutingsResponse>(this.baseUri + 'input-routings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags (metadata) you have assigned to the resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 *     Min length: 1    Max length: 2048
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
		 * Post tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 *     Min length: 1    Max length: 2048
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
		 * Post analysis/detector-models/
		 * @return {StartDetectorModelAnalysisResponse} Success
		 */
		StartDetectorModelAnalysis(requestBody: StartDetectorModelAnalysisPostBody): Observable<StartDetectorModelAnalysisResponse> {
			return this.http.post<StartDetectorModelAnalysisResponse>(this.baseUri + 'analysis/detector-models/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Delete tags#resourceArn&tagKeys
		 * @param {string} resourceArn The ARN of the resource.
		 *     Min length: 1    Max length: 2048
		 * @param {Array<string>} tagKeys A list of the keys of the tags to be removed from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags#resourceArn&tagKeys?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateAlarmModelPostBody {

		/**
		 * A unique name that helps you identify the alarm model. You can't change this name after you create the alarm model.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		alarmModelName: string;

		/**
		 * A description that tells you what the alarm model detects.
		 * Max length: 128
		 */
		alarmModelDescription?: string | null;

		/**
		 * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		roleArn: string;

		/** <p>A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html">Tagging your AWS IoT Events resources</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You can create up to 50 tags for one alarm model.</p> */
		tags?: Array<Tag>;

		/**
		 * An input attribute used as a key to create an alarm. AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a> associated with this key to the alarm.
		 * Min length: 1
		 * Max length: 128
		 */
		key?: string | null;

		/**
		 * A non-negative integer that reflects the severity level of the alarm.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		severity?: number | null;

		/**
		 * Defines when your alarm is invoked.
		 * Required
		 */
		alarmRule: CreateAlarmModelPostBodyAlarmRule;

		/** Contains information about one or more notification actions. */
		alarmNotification?: CreateAlarmModelPostBodyAlarmNotification;

		/** Contains information about one or more alarm actions. */
		alarmEventActions?: CreateAlarmModelPostBodyAlarmEventActions;

		/** Contains the configuration information of alarm state changes. */
		alarmCapabilities?: CreateAlarmModelPostBodyAlarmCapabilities;
	}
	export interface CreateAlarmModelPostBodyFormProperties {

		/**
		 * A unique name that helps you identify the alarm model. You can't change this name after you create the alarm model.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		alarmModelName: FormControl<string | null | undefined>,

		/**
		 * A description that tells you what the alarm model detects.
		 * Max length: 128
		 */
		alarmModelDescription: FormControl<string | null | undefined>,

		/**
		 * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * An input attribute used as a key to create an alarm. AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a> associated with this key to the alarm.
		 * Min length: 1
		 * Max length: 128
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * A non-negative integer that reflects the severity level of the alarm.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		severity: FormControl<number | null | undefined>,
	}
	export function CreateCreateAlarmModelPostBodyFormGroup() {
		return new FormGroup<CreateAlarmModelPostBodyFormProperties>({
			alarmModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_-]+$')]),
			alarmModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$')]),
			severity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
		});

	}

	export interface CreateAlarmModelPostBodyAlarmRule {
		simpleRule?: SimpleRule;
	}
	export interface CreateAlarmModelPostBodyAlarmRuleFormProperties {
	}
	export function CreateCreateAlarmModelPostBodyAlarmRuleFormGroup() {
		return new FormGroup<CreateAlarmModelPostBodyAlarmRuleFormProperties>({
		});

	}

	export interface CreateAlarmModelPostBodyAlarmNotification {
		notificationActions?: Array<NotificationAction>;
	}
	export interface CreateAlarmModelPostBodyAlarmNotificationFormProperties {
	}
	export function CreateCreateAlarmModelPostBodyAlarmNotificationFormGroup() {
		return new FormGroup<CreateAlarmModelPostBodyAlarmNotificationFormProperties>({
		});

	}

	export interface CreateAlarmModelPostBodyAlarmEventActions {
		alarmActions?: Array<AlarmAction>;
	}
	export interface CreateAlarmModelPostBodyAlarmEventActionsFormProperties {
	}
	export function CreateCreateAlarmModelPostBodyAlarmEventActionsFormGroup() {
		return new FormGroup<CreateAlarmModelPostBodyAlarmEventActionsFormProperties>({
		});

	}

	export interface CreateAlarmModelPostBodyAlarmCapabilities {
		initializationConfiguration?: InitializationConfiguration;
		acknowledgeFlow?: AcknowledgeFlow;
	}
	export interface CreateAlarmModelPostBodyAlarmCapabilitiesFormProperties {
	}
	export function CreateCreateAlarmModelPostBodyAlarmCapabilitiesFormGroup() {
		return new FormGroup<CreateAlarmModelPostBodyAlarmCapabilitiesFormProperties>({
		});

	}

	export interface CreateDetectorModelPostBody {

		/**
		 * The name of the detector model.
		 * Required
		 * Min length: 1
		 * Max length: 128
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
		 * Min length: 1
		 * Max length: 128
		 */
		key?: string | null;

		/**
		 * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		roleArn: string;

		/** Metadata that can be used to manage the detector model. */
		tags?: Array<Tag>;

		/** Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod?: EvaluationMethod | null;
	}
	export interface CreateDetectorModelPostBodyFormProperties {

		/**
		 * The name of the detector model.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		detectorModelName: FormControl<string | null | undefined>,

		/**
		 * A brief description of the detector model.
		 * Max length: 128
		 */
		detectorModelDescription: FormControl<string | null | undefined>,

		/**
		 * The input attribute key used to identify a device or system to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression in the message payload of each input to specify the attribute-value pair that is used to identify the device associated with the input.
		 * Min length: 1
		 * Max length: 128
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod: FormControl<EvaluationMethod | null | undefined>,
	}
	export function CreateCreateDetectorModelPostBodyFormGroup() {
		return new FormGroup<CreateDetectorModelPostBodyFormProperties>({
			detectorModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_-]+$')]),
			detectorModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^((`[\w\- ]+`)|([\w\-]+))(\.((`[\w- ]+`)|([\w\-]+)))*$')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			evaluationMethod: new FormControl<EvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface CreateDetectorModelPostBodyDetectorModelDefinition {
		states?: Array<State>;
		initialStateName?: string;
	}
	export interface CreateDetectorModelPostBodyDetectorModelDefinitionFormProperties {
		initialStateName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDetectorModelPostBodyDetectorModelDefinitionFormGroup() {
		return new FormGroup<CreateDetectorModelPostBodyDetectorModelDefinitionFormProperties>({
			initialStateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInputPostBody {

		/**
		 * The name you want to give to the input.
		 * Required
		 * Min length: 1
		 * Max length: 128
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
		 * Min length: 1
		 * Max length: 128
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
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),
			inputDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface CreateInputPostBodyInputDefinition {
		attributes?: Array<Attribute>;
	}
	export interface CreateInputPostBodyInputDefinitionFormProperties {
	}
	export function CreateCreateInputPostBodyInputDefinitionFormGroup() {
		return new FormGroup<CreateInputPostBodyInputDefinitionFormProperties>({
		});

	}

	export interface UpdateAlarmModelPostBody {

		/**
		 * The description of the alarm model.
		 * Max length: 128
		 */
		alarmModelDescription?: string | null;

		/**
		 * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		roleArn: string;

		/**
		 * A non-negative integer that reflects the severity level of the alarm.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		severity?: number | null;

		/**
		 * Defines when your alarm is invoked.
		 * Required
		 */
		alarmRule: UpdateAlarmModelPostBodyAlarmRule;

		/** Contains information about one or more notification actions. */
		alarmNotification?: UpdateAlarmModelPostBodyAlarmNotification;

		/** Contains information about one or more alarm actions. */
		alarmEventActions?: UpdateAlarmModelPostBodyAlarmEventActions;

		/** Contains the configuration information of alarm state changes. */
		alarmCapabilities?: UpdateAlarmModelPostBodyAlarmCapabilities;
	}
	export interface UpdateAlarmModelPostBodyFormProperties {

		/**
		 * The description of the alarm model.
		 * Max length: 128
		 */
		alarmModelDescription: FormControl<string | null | undefined>,

		/**
		 * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * A non-negative integer that reflects the severity level of the alarm.
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		severity: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAlarmModelPostBodyFormGroup() {
		return new FormGroup<UpdateAlarmModelPostBodyFormProperties>({
			alarmModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			severity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
		});

	}

	export interface UpdateAlarmModelPostBodyAlarmRule {
		simpleRule?: SimpleRule;
	}
	export interface UpdateAlarmModelPostBodyAlarmRuleFormProperties {
	}
	export function CreateUpdateAlarmModelPostBodyAlarmRuleFormGroup() {
		return new FormGroup<UpdateAlarmModelPostBodyAlarmRuleFormProperties>({
		});

	}

	export interface UpdateAlarmModelPostBodyAlarmNotification {
		notificationActions?: Array<NotificationAction>;
	}
	export interface UpdateAlarmModelPostBodyAlarmNotificationFormProperties {
	}
	export function CreateUpdateAlarmModelPostBodyAlarmNotificationFormGroup() {
		return new FormGroup<UpdateAlarmModelPostBodyAlarmNotificationFormProperties>({
		});

	}

	export interface UpdateAlarmModelPostBodyAlarmEventActions {
		alarmActions?: Array<AlarmAction>;
	}
	export interface UpdateAlarmModelPostBodyAlarmEventActionsFormProperties {
	}
	export function CreateUpdateAlarmModelPostBodyAlarmEventActionsFormGroup() {
		return new FormGroup<UpdateAlarmModelPostBodyAlarmEventActionsFormProperties>({
		});

	}

	export interface UpdateAlarmModelPostBodyAlarmCapabilities {
		initializationConfiguration?: InitializationConfiguration;
		acknowledgeFlow?: AcknowledgeFlow;
	}
	export interface UpdateAlarmModelPostBodyAlarmCapabilitiesFormProperties {
	}
	export function CreateUpdateAlarmModelPostBodyAlarmCapabilitiesFormGroup() {
		return new FormGroup<UpdateAlarmModelPostBodyAlarmCapabilitiesFormProperties>({
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
		 * Min length: 1
		 * Max length: 2048
		 */
		roleArn: string;

		/** Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod?: EvaluationMethod | null;
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
		 * Min length: 1
		 * Max length: 2048
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Information about the order in which events are evaluated and how actions are executed. */
		evaluationMethod: FormControl<EvaluationMethod | null | undefined>,
	}
	export function CreateUpdateDetectorModelPostBodyFormGroup() {
		return new FormGroup<UpdateDetectorModelPostBodyFormProperties>({
			detectorModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			evaluationMethod: new FormControl<EvaluationMethod | null | undefined>(undefined),
		});

	}

	export interface UpdateDetectorModelPostBodyDetectorModelDefinition {
		states?: Array<State>;
		initialStateName?: string;
	}
	export interface UpdateDetectorModelPostBodyDetectorModelDefinitionFormProperties {
		initialStateName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDetectorModelPostBodyDetectorModelDefinitionFormGroup() {
		return new FormGroup<UpdateDetectorModelPostBodyDetectorModelDefinitionFormProperties>({
			initialStateName: new FormControl<string | null | undefined>(undefined),
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
		roleArn?: string;
		level?: LoggingLevel;
		enabled?: boolean | null;
		detectorDebugOptions?: Array<DetectorDebugOption>;
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

	export interface ListInputRoutingsPostBody {

		/**
		 * The identifer of the input.
		 * Required
		 */
		inputIdentifier: ListInputRoutingsPostBodyInputIdentifier;

		/**
		 * The maximum number of results to be returned per request.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number | null;

		/** The token that you can use to return the next set of results. */
		nextToken?: string | null;
	}
	export interface ListInputRoutingsPostBodyFormProperties {

		/**
		 * The maximum number of results to be returned per request.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults: FormControl<number | null | undefined>,

		/** The token that you can use to return the next set of results. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInputRoutingsPostBodyFormGroup() {
		return new FormGroup<ListInputRoutingsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(250)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInputRoutingsPostBodyInputIdentifier {
		iotEventsInputIdentifier?: IotEventsInputIdentifier;
		iotSiteWiseInputIdentifier?: IotSiteWiseInputIdentifier;
	}
	export interface ListInputRoutingsPostBodyInputIdentifierFormProperties {
	}
	export function CreateListInputRoutingsPostBodyInputIdentifierFormGroup() {
		return new FormGroup<ListInputRoutingsPostBodyInputIdentifierFormProperties>({
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

	export interface StartDetectorModelAnalysisPostBody {

		/**
		 * Information that defines how a detector operates.
		 * Required
		 */
		detectorModelDefinition: StartDetectorModelAnalysisPostBodyDetectorModelDefinition;
	}
	export interface StartDetectorModelAnalysisPostBodyFormProperties {
	}
	export function CreateStartDetectorModelAnalysisPostBodyFormGroup() {
		return new FormGroup<StartDetectorModelAnalysisPostBodyFormProperties>({
		});

	}

	export interface StartDetectorModelAnalysisPostBodyDetectorModelDefinition {
		states?: Array<State>;
		initialStateName?: string;
	}
	export interface StartDetectorModelAnalysisPostBodyDetectorModelDefinitionFormProperties {
		initialStateName: FormControl<string | null | undefined>,
	}
	export function CreateStartDetectorModelAnalysisPostBodyDetectorModelDefinitionFormGroup() {
		return new FormGroup<StartDetectorModelAnalysisPostBodyDetectorModelDefinitionFormProperties>({
			initialStateName: new FormControl<string | null | undefined>(undefined),
		});

	}

}

