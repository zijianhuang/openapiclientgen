import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An empty element returned on a successful request. */
	export interface CloneReceiptRuleSetResponse {
	}

	/** An empty element returned on a successful request. */
	export interface CloneReceiptRuleSetResponseFormProperties {
	}
	export function CreateCloneReceiptRuleSetResponseFormGroup() {
		return new FormGroup<CloneReceiptRuleSetResponseFormProperties>({
		});

	}

	export interface RuleSetDoesNotExistException {
	}
	export interface RuleSetDoesNotExistExceptionFormProperties {
	}
	export function CreateRuleSetDoesNotExistExceptionFormGroup() {
		return new FormGroup<RuleSetDoesNotExistExceptionFormProperties>({
		});

	}

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
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


	/** An empty element returned on a successful request. */
	export interface CreateConfigurationSetResponse {
	}

	/** An empty element returned on a successful request. */
	export interface CreateConfigurationSetResponseFormProperties {
	}
	export function CreateCreateConfigurationSetResponseFormGroup() {
		return new FormGroup<CreateConfigurationSetResponseFormProperties>({
		});

	}

	export interface ConfigurationSetAlreadyExistsException {
	}
	export interface ConfigurationSetAlreadyExistsExceptionFormProperties {
	}
	export function CreateConfigurationSetAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ConfigurationSetAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidConfigurationSetException {
	}
	export interface InvalidConfigurationSetExceptionFormProperties {
	}
	export function CreateInvalidConfigurationSetExceptionFormGroup() {
		return new FormGroup<InvalidConfigurationSetExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface CreateConfigurationSetEventDestinationResponse {
	}

	/** An empty element returned on a successful request. */
	export interface CreateConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateCreateConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationResponseFormProperties>({
		});

	}

	export enum EventType { send = 0, reject = 1, bounce = 2, complaint = 3, delivery = 4, open = 5, click = 6, renderingFailure = 7 }


	/** <p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface KinesisFirehoseDestination {
		IAMRoleARN: string;
		DeliveryStreamARN: string;
	}

	/** <p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface KinesisFirehoseDestinationFormProperties {
		IAMRoleARN: FormControl<string | null | undefined>,
		DeliveryStreamARN: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseDestinationFormGroup() {
		return new FormGroup<KinesisFirehoseDestinationFormProperties>({
			IAMRoleARN: new FormControl<string | null | undefined>(undefined),
			DeliveryStreamARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface CloudWatchDestination {
		DimensionConfigurations: Array<CloudWatchDimensionConfiguration>;
	}

	/** <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface CloudWatchDestinationFormProperties {
	}
	export function CreateCloudWatchDestinationFormGroup() {
		return new FormGroup<CloudWatchDestinationFormProperties>({
		});

	}


	/** <p>Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.</p> <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface CloudWatchDimensionConfiguration {
		DimensionName: string;
		DimensionValueSource: CloudWatchDimensionConfigurationDimensionValueSource;
		DefaultDimensionValue: string;
	}

	/** <p>Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.</p> <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface CloudWatchDimensionConfigurationFormProperties {
		DimensionName: FormControl<string | null | undefined>,
		DimensionValueSource: FormControl<CloudWatchDimensionConfigurationDimensionValueSource | null | undefined>,
		DefaultDimensionValue: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchDimensionConfigurationFormGroup() {
		return new FormGroup<CloudWatchDimensionConfigurationFormProperties>({
			DimensionName: new FormControl<string | null | undefined>(undefined),
			DimensionValueSource: new FormControl<CloudWatchDimensionConfigurationDimensionValueSource | null | undefined>(undefined),
			DefaultDimensionValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudWatchDimensionConfigurationDimensionValueSource { messageTag = 0, emailHeader = 1, linkTag = 2 }


	/** <p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface SNSDestination {
		TopicARN: string;
	}

	/** <p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface SNSDestinationFormProperties {
		TopicARN: FormControl<string | null | undefined>,
	}
	export function CreateSNSDestinationFormGroup() {
		return new FormGroup<SNSDestinationFormProperties>({
			TopicARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigurationSetDoesNotExistException {
	}
	export interface ConfigurationSetDoesNotExistExceptionFormProperties {
	}
	export function CreateConfigurationSetDoesNotExistExceptionFormGroup() {
		return new FormGroup<ConfigurationSetDoesNotExistExceptionFormProperties>({
		});

	}

	export interface EventDestinationAlreadyExistsException {
	}
	export interface EventDestinationAlreadyExistsExceptionFormProperties {
	}
	export function CreateEventDestinationAlreadyExistsExceptionFormGroup() {
		return new FormGroup<EventDestinationAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidCloudWatchDestinationException {
	}
	export interface InvalidCloudWatchDestinationExceptionFormProperties {
	}
	export function CreateInvalidCloudWatchDestinationExceptionFormGroup() {
		return new FormGroup<InvalidCloudWatchDestinationExceptionFormProperties>({
		});

	}

	export interface InvalidFirehoseDestinationException {
	}
	export interface InvalidFirehoseDestinationExceptionFormProperties {
	}
	export function CreateInvalidFirehoseDestinationExceptionFormGroup() {
		return new FormGroup<InvalidFirehoseDestinationExceptionFormProperties>({
		});

	}

	export interface InvalidSNSDestinationException {
	}
	export interface InvalidSNSDestinationExceptionFormProperties {
	}
	export function CreateInvalidSNSDestinationExceptionFormGroup() {
		return new FormGroup<InvalidSNSDestinationExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface CreateConfigurationSetTrackingOptionsResponse {
	}

	/** An empty element returned on a successful request. */
	export interface CreateConfigurationSetTrackingOptionsResponseFormProperties {
	}
	export function CreateCreateConfigurationSetTrackingOptionsResponseFormGroup() {
		return new FormGroup<CreateConfigurationSetTrackingOptionsResponseFormProperties>({
		});

	}

	export interface TrackingOptionsAlreadyExistsException {
	}
	export interface TrackingOptionsAlreadyExistsExceptionFormProperties {
	}
	export function CreateTrackingOptionsAlreadyExistsExceptionFormGroup() {
		return new FormGroup<TrackingOptionsAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface InvalidTrackingOptionsException {
	}
	export interface InvalidTrackingOptionsExceptionFormProperties {
	}
	export function CreateInvalidTrackingOptionsExceptionFormGroup() {
		return new FormGroup<InvalidTrackingOptionsExceptionFormProperties>({
		});

	}

	export interface CustomVerificationEmailTemplateAlreadyExistsException {
	}
	export interface CustomVerificationEmailTemplateAlreadyExistsExceptionFormProperties {
	}
	export function CreateCustomVerificationEmailTemplateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<CustomVerificationEmailTemplateAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface FromEmailAddressNotVerifiedException {
	}
	export interface FromEmailAddressNotVerifiedExceptionFormProperties {
	}
	export function CreateFromEmailAddressNotVerifiedExceptionFormGroup() {
		return new FormGroup<FromEmailAddressNotVerifiedExceptionFormProperties>({
		});

	}

	export interface CustomVerificationEmailInvalidContentException {
	}
	export interface CustomVerificationEmailInvalidContentExceptionFormProperties {
	}
	export function CreateCustomVerificationEmailInvalidContentExceptionFormGroup() {
		return new FormGroup<CustomVerificationEmailInvalidContentExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface CreateReceiptFilterResponse {
	}

	/** An empty element returned on a successful request. */
	export interface CreateReceiptFilterResponseFormProperties {
	}
	export function CreateCreateReceiptFilterResponseFormGroup() {
		return new FormGroup<CreateReceiptFilterResponseFormProperties>({
		});

	}


	/** <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptIpFilter {
		Policy: ReceiptIpFilterPolicy;
		Cidr: string;
	}

	/** <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptIpFilterFormProperties {
		Policy: FormControl<ReceiptIpFilterPolicy | null | undefined>,
		Cidr: FormControl<string | null | undefined>,
	}
	export function CreateReceiptIpFilterFormGroup() {
		return new FormGroup<ReceiptIpFilterFormProperties>({
			Policy: new FormControl<ReceiptIpFilterPolicy | null | undefined>(undefined),
			Cidr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReceiptIpFilterPolicy { Block = 0, Allow = 1 }


	/** An empty element returned on a successful request. */
	export interface CreateReceiptRuleResponse {
	}

	/** An empty element returned on a successful request. */
	export interface CreateReceiptRuleResponseFormProperties {
	}
	export function CreateCreateReceiptRuleResponseFormGroup() {
		return new FormGroup<CreateReceiptRuleResponseFormProperties>({
		});

	}

	export enum TlsPolicy { Require = 0, Optional = 1 }


	/** <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptAction {

		/** <p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <note> <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that will bounce.</p> </note> <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html">Amazon SES Developer Guide</a>.</p> */
		S3Action?: S3Action;

		/** <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p> */
		BounceAction?: BounceAction;

		/** <p>When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). You will typically not use this action directly because Amazon WorkMail adds the rule automatically during its setup procedure.</p> <p>For information using a receipt rule to call Amazon WorkMail, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html">Amazon SES Developer Guide</a>.</p> */
		WorkmailAction?: WorkmailAction;

		/** <p>When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <p>For information about using AWS Lambda actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html">Amazon SES Developer Guide</a>.</p> */
		LambdaAction?: LambdaAction;

		/** <p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer Guide</a>.</p> */
		StopAction?: StopAction;

		/** <p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p> */
		AddHeaderAction?: AddHeaderAction;

		/** <p>When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.</p> <p>If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <important> <p>You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails will bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.</p> </important> <p>For information about using a receipt rule to publish an Amazon SNS notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-sns.html">Amazon SES Developer Guide</a>.</p> */
		SNSAction?: SNSAction;
	}

	/** <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptActionFormProperties {
	}
	export function CreateReceiptActionFormGroup() {
		return new FormGroup<ReceiptActionFormProperties>({
		});

	}


	/** <p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <note> <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that will bounce.</p> </note> <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html">Amazon SES Developer Guide</a>.</p> */
	export interface S3Action {
		TopicArn?: string | null;
		BucketName: string;
		ObjectKeyPrefix?: string | null;
		KmsKeyArn?: string | null;
	}

	/** <p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <note> <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that will bounce.</p> </note> <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html">Amazon SES Developer Guide</a>.</p> */
	export interface S3ActionFormProperties {
		TopicArn: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
		ObjectKeyPrefix: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateS3ActionFormGroup() {
		return new FormGroup<S3ActionFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
			ObjectKeyPrefix: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p> */
	export interface BounceAction {
		TopicArn?: string | null;
		SmtpReplyCode: string;
		StatusCode?: string | null;
		Message: string;
		Sender: string;
	}

	/** <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p> */
	export interface BounceActionFormProperties {
		TopicArn: FormControl<string | null | undefined>,
		SmtpReplyCode: FormControl<string | null | undefined>,
		StatusCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		Sender: FormControl<string | null | undefined>,
	}
	export function CreateBounceActionFormGroup() {
		return new FormGroup<BounceActionFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
			SmtpReplyCode: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			Sender: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). You will typically not use this action directly because Amazon WorkMail adds the rule automatically during its setup procedure.</p> <p>For information using a receipt rule to call Amazon WorkMail, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html">Amazon SES Developer Guide</a>.</p> */
	export interface WorkmailAction {
		TopicArn?: string | null;
		OrganizationArn: string;
	}

	/** <p>When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). You will typically not use this action directly because Amazon WorkMail adds the rule automatically during its setup procedure.</p> <p>For information using a receipt rule to call Amazon WorkMail, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html">Amazon SES Developer Guide</a>.</p> */
	export interface WorkmailActionFormProperties {
		TopicArn: FormControl<string | null | undefined>,
		OrganizationArn: FormControl<string | null | undefined>,
	}
	export function CreateWorkmailActionFormGroup() {
		return new FormGroup<WorkmailActionFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
			OrganizationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <p>For information about using AWS Lambda actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html">Amazon SES Developer Guide</a>.</p> */
	export interface LambdaAction {
		TopicArn?: string | null;
		FunctionArn: string;
		InvocationType?: LambdaActionInvocationType | null;
	}

	/** <p>When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <p>For information about using AWS Lambda actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html">Amazon SES Developer Guide</a>.</p> */
	export interface LambdaActionFormProperties {
		TopicArn: FormControl<string | null | undefined>,
		FunctionArn: FormControl<string | null | undefined>,
		InvocationType: FormControl<LambdaActionInvocationType | null | undefined>,
	}
	export function CreateLambdaActionFormGroup() {
		return new FormGroup<LambdaActionFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
			FunctionArn: new FormControl<string | null | undefined>(undefined),
			InvocationType: new FormControl<LambdaActionInvocationType | null | undefined>(undefined),
		});

	}

	export enum LambdaActionInvocationType { Event = 0, RequestResponse = 1 }


	/** <p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer Guide</a>.</p> */
	export interface StopAction {
		Scope: StopActionScope;
		TopicArn?: string | null;
	}

	/** <p>When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about setting a stop action in a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer Guide</a>.</p> */
	export interface StopActionFormProperties {
		Scope: FormControl<StopActionScope | null | undefined>,
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateStopActionFormGroup() {
		return new FormGroup<StopActionFormProperties>({
			Scope: new FormControl<StopActionScope | null | undefined>(undefined),
			TopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StopActionScope { RuleSet = 0 }


	/** <p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p> */
	export interface AddHeaderAction {
		HeaderName: string;
		HeaderValue: string;
	}

	/** <p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p> */
	export interface AddHeaderActionFormProperties {
		HeaderName: FormControl<string | null | undefined>,
		HeaderValue: FormControl<string | null | undefined>,
	}
	export function CreateAddHeaderActionFormGroup() {
		return new FormGroup<AddHeaderActionFormProperties>({
			HeaderName: new FormControl<string | null | undefined>(undefined),
			HeaderValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.</p> <p>If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <important> <p>You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails will bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.</p> </important> <p>For information about using a receipt rule to publish an Amazon SNS notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-sns.html">Amazon SES Developer Guide</a>.</p> */
	export interface SNSAction {
		TopicArn: string;
		Encoding?: SNSActionEncoding | null;
	}

	/** <p>When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.</p> <p>If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <important> <p>You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails will bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.</p> </important> <p>For information about using a receipt rule to publish an Amazon SNS notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-sns.html">Amazon SES Developer Guide</a>.</p> */
	export interface SNSActionFormProperties {
		TopicArn: FormControl<string | null | undefined>,
		Encoding: FormControl<SNSActionEncoding | null | undefined>,
	}
	export function CreateSNSActionFormGroup() {
		return new FormGroup<SNSActionFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
			Encoding: new FormControl<SNSActionEncoding | null | undefined>(undefined),
		});

	}

	export enum SNSActionEncoding { UTF_8 = 0, Base64 = 1 }

	export interface InvalidSnsTopicException {
	}
	export interface InvalidSnsTopicExceptionFormProperties {
	}
	export function CreateInvalidSnsTopicExceptionFormGroup() {
		return new FormGroup<InvalidSnsTopicExceptionFormProperties>({
		});

	}

	export interface InvalidS3ConfigurationException {
	}
	export interface InvalidS3ConfigurationExceptionFormProperties {
	}
	export function CreateInvalidS3ConfigurationExceptionFormGroup() {
		return new FormGroup<InvalidS3ConfigurationExceptionFormProperties>({
		});

	}

	export interface InvalidLambdaFunctionException {
	}
	export interface InvalidLambdaFunctionExceptionFormProperties {
	}
	export function CreateInvalidLambdaFunctionExceptionFormGroup() {
		return new FormGroup<InvalidLambdaFunctionExceptionFormProperties>({
		});

	}

	export interface RuleDoesNotExistException {
	}
	export interface RuleDoesNotExistExceptionFormProperties {
	}
	export function CreateRuleDoesNotExistExceptionFormGroup() {
		return new FormGroup<RuleDoesNotExistExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface CreateReceiptRuleSetResponse {
	}

	/** An empty element returned on a successful request. */
	export interface CreateReceiptRuleSetResponseFormProperties {
	}
	export function CreateCreateReceiptRuleSetResponseFormGroup() {
		return new FormGroup<CreateReceiptRuleSetResponseFormProperties>({
		});

	}

	export interface CreateTemplateResponse {
	}
	export interface CreateTemplateResponseFormProperties {
	}
	export function CreateCreateTemplateResponseFormGroup() {
		return new FormGroup<CreateTemplateResponseFormProperties>({
		});

	}

	export interface InvalidTemplateException {
	}
	export interface InvalidTemplateExceptionFormProperties {
	}
	export function CreateInvalidTemplateExceptionFormGroup() {
		return new FormGroup<InvalidTemplateExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface DeleteConfigurationSetResponse {
	}

	/** An empty element returned on a successful request. */
	export interface DeleteConfigurationSetResponseFormProperties {
	}
	export function CreateDeleteConfigurationSetResponseFormGroup() {
		return new FormGroup<DeleteConfigurationSetResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface DeleteConfigurationSetEventDestinationResponse {
	}

	/** An empty element returned on a successful request. */
	export interface DeleteConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateDeleteConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<DeleteConfigurationSetEventDestinationResponseFormProperties>({
		});

	}

	export interface EventDestinationDoesNotExistException {
	}
	export interface EventDestinationDoesNotExistExceptionFormProperties {
	}
	export function CreateEventDestinationDoesNotExistExceptionFormGroup() {
		return new FormGroup<EventDestinationDoesNotExistExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface DeleteConfigurationSetTrackingOptionsResponse {
	}

	/** An empty element returned on a successful request. */
	export interface DeleteConfigurationSetTrackingOptionsResponseFormProperties {
	}
	export function CreateDeleteConfigurationSetTrackingOptionsResponseFormGroup() {
		return new FormGroup<DeleteConfigurationSetTrackingOptionsResponseFormProperties>({
		});

	}

	export interface TrackingOptionsDoesNotExistException {
	}
	export interface TrackingOptionsDoesNotExistExceptionFormProperties {
	}
	export function CreateTrackingOptionsDoesNotExistExceptionFormGroup() {
		return new FormGroup<TrackingOptionsDoesNotExistExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface DeleteIdentityResponse {
	}

	/** An empty element returned on a successful request. */
	export interface DeleteIdentityResponseFormProperties {
	}
	export function CreateDeleteIdentityResponseFormGroup() {
		return new FormGroup<DeleteIdentityResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface DeleteIdentityPolicyResponse {
	}

	/** An empty element returned on a successful request. */
	export interface DeleteIdentityPolicyResponseFormProperties {
	}
	export function CreateDeleteIdentityPolicyResponseFormGroup() {
		return new FormGroup<DeleteIdentityPolicyResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface DeleteReceiptFilterResponse {
	}

	/** An empty element returned on a successful request. */
	export interface DeleteReceiptFilterResponseFormProperties {
	}
	export function CreateDeleteReceiptFilterResponseFormGroup() {
		return new FormGroup<DeleteReceiptFilterResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface DeleteReceiptRuleResponse {
	}

	/** An empty element returned on a successful request. */
	export interface DeleteReceiptRuleResponseFormProperties {
	}
	export function CreateDeleteReceiptRuleResponseFormGroup() {
		return new FormGroup<DeleteReceiptRuleResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface DeleteReceiptRuleSetResponse {
	}

	/** An empty element returned on a successful request. */
	export interface DeleteReceiptRuleSetResponseFormProperties {
	}
	export function CreateDeleteReceiptRuleSetResponseFormGroup() {
		return new FormGroup<DeleteReceiptRuleSetResponseFormProperties>({
		});

	}

	export interface CannotDeleteException {
	}
	export interface CannotDeleteExceptionFormProperties {
	}
	export function CreateCannotDeleteExceptionFormGroup() {
		return new FormGroup<CannotDeleteExceptionFormProperties>({
		});

	}

	export interface DeleteTemplateResponse {
	}
	export interface DeleteTemplateResponseFormProperties {
	}
	export function CreateDeleteTemplateResponseFormGroup() {
		return new FormGroup<DeleteTemplateResponseFormProperties>({
		});

	}


	/** Represents the metadata and receipt rules for the receipt rule set that is currently active. */
	export interface DescribeActiveReceiptRuleSetResponse {

		/** <p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> */
		Metadata?: ReceiptRuleSetMetadata;
		Rules?: Array<ReceiptRule>;
	}

	/** Represents the metadata and receipt rules for the receipt rule set that is currently active. */
	export interface DescribeActiveReceiptRuleSetResponseFormProperties {
	}
	export function CreateDescribeActiveReceiptRuleSetResponseFormGroup() {
		return new FormGroup<DescribeActiveReceiptRuleSetResponseFormProperties>({
		});

	}


	/** <p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptRuleSetMetadata {
		Name?: string | null;
		CreatedTimestamp?: Date | null;
	}

	/** <p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptRuleSetMetadataFormProperties {
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateReceiptRuleSetMetadataFormGroup() {
		return new FormGroup<ReceiptRuleSetMetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptRule {
		Name: string;
		Enabled?: boolean | null;
		TlsPolicy?: TlsPolicy | null;
		Recipients?: Array<string>;
		Actions?: Array<ReceiptAction>;
		ScanEnabled?: boolean | null;
	}

	/** <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptRuleFormProperties {
		Name: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
		ScanEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateReceiptRuleFormGroup() {
		return new FormGroup<ReceiptRuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			ScanEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface DescribeConfigurationSetResponse {

		/** <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p> */
		ConfigurationSet?: ConfigurationSet;
		EventDestinations?: Array<EventDestination>;

		/** <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p> */
		TrackingOptions?: TrackingOptions;

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). */
		DeliveryOptions?: DeliveryOptions;

		/** Contains information about the reputation settings for a configuration set. */
		ReputationOptions?: ReputationOptions;
	}

	/** Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface DescribeConfigurationSetResponseFormProperties {
	}
	export function CreateDescribeConfigurationSetResponseFormGroup() {
		return new FormGroup<DescribeConfigurationSetResponseFormProperties>({
		});

	}


	/** <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p> */
	export interface ConfigurationSet {
		Name: string;
	}

	/** <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p> */
	export interface ConfigurationSetFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationSetFormGroup() {
		return new FormGroup<ConfigurationSetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface EventDestination {
		Name: string;
		Enabled?: boolean | null;
		MatchingEventTypes: Array<EventType>;

		/** <p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
		CloudWatchDestination?: CloudWatchDestination;

		/** <p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
		SNSDestination?: SNSDestination;
	}

	/** <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface EventDestinationFormProperties {
		Name: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventDestinationFormGroup() {
		return new FormGroup<EventDestinationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p> */
	export interface TrackingOptions {
		CustomRedirectDomain?: string | null;
	}

	/** <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p> */
	export interface TrackingOptionsFormProperties {
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreateTrackingOptionsFormGroup() {
		return new FormGroup<TrackingOptionsFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). */
	export interface DeliveryOptions {
		TlsPolicy?: TlsPolicy | null;
	}

	/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). */
	export interface DeliveryOptionsFormProperties {
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
	}
	export function CreateDeliveryOptionsFormGroup() {
		return new FormGroup<DeliveryOptionsFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
		});

	}


	/** Contains information about the reputation settings for a configuration set. */
	export interface ReputationOptions {
		SendingEnabled?: boolean | null;
		ReputationMetricsEnabled?: boolean | null;
		LastFreshStart?: Date | null;
	}

	/** Contains information about the reputation settings for a configuration set. */
	export interface ReputationOptionsFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,
		LastFreshStart: FormControl<Date | null | undefined>,
	}
	export function CreateReputationOptionsFormGroup() {
		return new FormGroup<ReputationOptionsFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LastFreshStart: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConfigurationSetAttribute { eventDestinations = 0, trackingOptions = 1, deliveryOptions = 2, reputationOptions = 3 }


	/** Represents the details of a receipt rule. */
	export interface DescribeReceiptRuleResponse {

		/** <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> */
		Rule?: ReceiptRule;
	}

	/** Represents the details of a receipt rule. */
	export interface DescribeReceiptRuleResponseFormProperties {
	}
	export function CreateDescribeReceiptRuleResponseFormGroup() {
		return new FormGroup<DescribeReceiptRuleResponseFormProperties>({
		});

	}


	/** Represents the details of the specified receipt rule set. */
	export interface DescribeReceiptRuleSetResponse {

		/** <p>Information about a receipt rule set.</p> <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> */
		Metadata?: ReceiptRuleSetMetadata;
		Rules?: Array<ReceiptRule>;
	}

	/** Represents the details of the specified receipt rule set. */
	export interface DescribeReceiptRuleSetResponseFormProperties {
	}
	export function CreateDescribeReceiptRuleSetResponseFormGroup() {
		return new FormGroup<DescribeReceiptRuleSetResponseFormProperties>({
		});

	}


	/** Represents a request to return the email sending status for your Amazon SES account in the current AWS Region. */
	export interface GetAccountSendingEnabledResponse {
		Enabled?: boolean | null;
	}

	/** Represents a request to return the email sending status for your Amazon SES account in the current AWS Region. */
	export interface GetAccountSendingEnabledResponseFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGetAccountSendingEnabledResponseFormGroup() {
		return new FormGroup<GetAccountSendingEnabledResponseFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The content of the custom verification email template. */
	export interface GetCustomVerificationEmailTemplateResponse {
		TemplateName?: string | null;
		FromEmailAddress?: string | null;
		TemplateSubject?: string | null;
		TemplateContent?: string | null;
		SuccessRedirectionURL?: string | null;
		FailureRedirectionURL?: string | null;
	}

	/** The content of the custom verification email template. */
	export interface GetCustomVerificationEmailTemplateResponseFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		FromEmailAddress: FormControl<string | null | undefined>,
		TemplateSubject: FormControl<string | null | undefined>,
		TemplateContent: FormControl<string | null | undefined>,
		SuccessRedirectionURL: FormControl<string | null | undefined>,
		FailureRedirectionURL: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomVerificationEmailTemplateResponseFormGroup() {
		return new FormGroup<GetCustomVerificationEmailTemplateResponseFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			TemplateSubject: new FormControl<string | null | undefined>(undefined),
			TemplateContent: new FormControl<string | null | undefined>(undefined),
			SuccessRedirectionURL: new FormControl<string | null | undefined>(undefined),
			FailureRedirectionURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomVerificationEmailTemplateDoesNotExistException {
	}
	export interface CustomVerificationEmailTemplateDoesNotExistExceptionFormProperties {
	}
	export function CreateCustomVerificationEmailTemplateDoesNotExistExceptionFormGroup() {
		return new FormGroup<CustomVerificationEmailTemplateDoesNotExistExceptionFormProperties>({
		});

	}


	/** Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published. */
	export interface GetIdentityDkimAttributesResponse {
		DkimAttributes: DkimAttributes;
	}

	/** Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published. */
	export interface GetIdentityDkimAttributesResponseFormProperties {
	}
	export function CreateGetIdentityDkimAttributesResponseFormGroup() {
		return new FormGroup<GetIdentityDkimAttributesResponseFormProperties>({
		});

	}

	export interface DkimAttributes {
	}
	export interface DkimAttributesFormProperties {
	}
	export function CreateDkimAttributesFormGroup() {
		return new FormGroup<DkimAttributesFormProperties>({
		});

	}


	/** Represents the custom MAIL FROM attributes for a list of identities. */
	export interface GetIdentityMailFromDomainAttributesResponse {
		MailFromDomainAttributes: MailFromDomainAttributes;
	}

	/** Represents the custom MAIL FROM attributes for a list of identities. */
	export interface GetIdentityMailFromDomainAttributesResponseFormProperties {
	}
	export function CreateGetIdentityMailFromDomainAttributesResponseFormGroup() {
		return new FormGroup<GetIdentityMailFromDomainAttributesResponseFormProperties>({
		});

	}

	export interface MailFromDomainAttributes {
	}
	export interface MailFromDomainAttributesFormProperties {
	}
	export function CreateMailFromDomainAttributesFormGroup() {
		return new FormGroup<MailFromDomainAttributesFormProperties>({
		});

	}


	/** Represents the notification attributes for a list of identities. */
	export interface GetIdentityNotificationAttributesResponse {
		NotificationAttributes: NotificationAttributes;
	}

	/** Represents the notification attributes for a list of identities. */
	export interface GetIdentityNotificationAttributesResponseFormProperties {
	}
	export function CreateGetIdentityNotificationAttributesResponseFormGroup() {
		return new FormGroup<GetIdentityNotificationAttributesResponseFormProperties>({
		});

	}

	export interface NotificationAttributes {
	}
	export interface NotificationAttributesFormProperties {
	}
	export function CreateNotificationAttributesFormGroup() {
		return new FormGroup<NotificationAttributesFormProperties>({
		});

	}


	/** Represents the requested sending authorization policies. */
	export interface GetIdentityPoliciesResponse {
		Policies: PolicyMap;
	}

	/** Represents the requested sending authorization policies. */
	export interface GetIdentityPoliciesResponseFormProperties {
	}
	export function CreateGetIdentityPoliciesResponseFormGroup() {
		return new FormGroup<GetIdentityPoliciesResponseFormProperties>({
		});

	}

	export interface PolicyMap {
	}
	export interface PolicyMapFormProperties {
	}
	export function CreatePolicyMapFormGroup() {
		return new FormGroup<PolicyMapFormProperties>({
		});

	}


	/** The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token. */
	export interface GetIdentityVerificationAttributesResponse {
		VerificationAttributes: VerificationAttributes;
	}

	/** The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token. */
	export interface GetIdentityVerificationAttributesResponseFormProperties {
	}
	export function CreateGetIdentityVerificationAttributesResponseFormGroup() {
		return new FormGroup<GetIdentityVerificationAttributesResponseFormProperties>({
		});

	}

	export interface VerificationAttributes {
	}
	export interface VerificationAttributesFormProperties {
	}
	export function CreateVerificationAttributesFormGroup() {
		return new FormGroup<VerificationAttributesFormProperties>({
		});

	}


	/** Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours. */
	export interface GetSendQuotaResponse {
		Max24HourSend?: number | null;
		MaxSendRate?: number | null;
		SentLast24Hours?: number | null;
	}

	/** Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours. */
	export interface GetSendQuotaResponseFormProperties {
		Max24HourSend: FormControl<number | null | undefined>,
		MaxSendRate: FormControl<number | null | undefined>,
		SentLast24Hours: FormControl<number | null | undefined>,
	}
	export function CreateGetSendQuotaResponseFormGroup() {
		return new FormGroup<GetSendQuotaResponseFormProperties>({
			Max24HourSend: new FormControl<number | null | undefined>(undefined),
			MaxSendRate: new FormControl<number | null | undefined>(undefined),
			SentLast24Hours: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES. */
	export interface GetSendStatisticsResponse {
		SendDataPoints?: Array<SendDataPoint>;
	}

	/** Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES. */
	export interface GetSendStatisticsResponseFormProperties {
	}
	export function CreateGetSendStatisticsResponseFormGroup() {
		return new FormGroup<GetSendStatisticsResponseFormProperties>({
		});

	}


	/** Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity.  */
	export interface SendDataPoint {
		Timestamp?: Date | null;
		DeliveryAttempts?: number | null;
		Bounces?: number | null;
		Complaints?: number | null;
		Rejects?: number | null;
	}

	/** Represents sending statistics data. Each <code>SendDataPoint</code> contains statistics for a 15-minute period of sending activity.  */
	export interface SendDataPointFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
		DeliveryAttempts: FormControl<number | null | undefined>,
		Bounces: FormControl<number | null | undefined>,
		Complaints: FormControl<number | null | undefined>,
		Rejects: FormControl<number | null | undefined>,
	}
	export function CreateSendDataPointFormGroup() {
		return new FormGroup<SendDataPointFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			DeliveryAttempts: new FormControl<number | null | undefined>(undefined),
			Bounces: new FormControl<number | null | undefined>(undefined),
			Complaints: new FormControl<number | null | undefined>(undefined),
			Rejects: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTemplateResponse {

		/** The content of the email, composed of a subject line, an HTML part, and a text-only part. */
		Template?: Template;
	}
	export interface GetTemplateResponseFormProperties {
	}
	export function CreateGetTemplateResponseFormGroup() {
		return new FormGroup<GetTemplateResponseFormProperties>({
		});

	}


	/** The content of the email, composed of a subject line, an HTML part, and a text-only part. */
	export interface Template {
		TemplateName: string;
		SubjectPart?: string | null;
		TextPart?: string | null;
		HtmlPart?: string | null;
	}

	/** The content of the email, composed of a subject line, an HTML part, and a text-only part. */
	export interface TemplateFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		SubjectPart: FormControl<string | null | undefined>,
		TextPart: FormControl<string | null | undefined>,
		HtmlPart: FormControl<string | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			SubjectPart: new FormControl<string | null | undefined>(undefined),
			TextPart: new FormControl<string | null | undefined>(undefined),
			HtmlPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateDoesNotExistException {
	}
	export interface TemplateDoesNotExistExceptionFormProperties {
	}
	export function CreateTemplateDoesNotExistExceptionFormGroup() {
		return new FormGroup<TemplateDoesNotExistExceptionFormProperties>({
		});

	}


	/** A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface ListConfigurationSetsResponse {
		ConfigurationSets?: Array<ConfigurationSet>;
		NextToken?: string | null;
	}

	/** A list of configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface ListConfigurationSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationSetsResponseFormGroup() {
		return new FormGroup<ListConfigurationSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of custom verification email templates. */
	export interface ListCustomVerificationEmailTemplatesResponse {
		CustomVerificationEmailTemplates?: Array<CustomVerificationEmailTemplate>;
		NextToken?: string | null;
	}

	/** A paginated list of custom verification email templates. */
	export interface ListCustomVerificationEmailTemplatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomVerificationEmailTemplatesResponseFormGroup() {
		return new FormGroup<ListCustomVerificationEmailTemplatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a custom verification email template. */
	export interface CustomVerificationEmailTemplate {
		TemplateName?: string | null;
		FromEmailAddress?: string | null;
		TemplateSubject?: string | null;
		SuccessRedirectionURL?: string | null;
		FailureRedirectionURL?: string | null;
	}

	/** Contains information about a custom verification email template. */
	export interface CustomVerificationEmailTemplateFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		FromEmailAddress: FormControl<string | null | undefined>,
		TemplateSubject: FormControl<string | null | undefined>,
		SuccessRedirectionURL: FormControl<string | null | undefined>,
		FailureRedirectionURL: FormControl<string | null | undefined>,
	}
	export function CreateCustomVerificationEmailTemplateFormGroup() {
		return new FormGroup<CustomVerificationEmailTemplateFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			TemplateSubject: new FormControl<string | null | undefined>(undefined),
			SuccessRedirectionURL: new FormControl<string | null | undefined>(undefined),
			FailureRedirectionURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of all identities that you have attempted to verify under your AWS account, regardless of verification status. */
	export interface ListIdentitiesResponse {
		Identities: Array<string>;
		NextToken?: string | null;
	}

	/** A list of all identities that you have attempted to verify under your AWS account, regardless of verification status. */
	export interface ListIdentitiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIdentitiesResponseFormGroup() {
		return new FormGroup<ListIdentitiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of names of sending authorization policies that apply to an identity. */
	export interface ListIdentityPoliciesResponse {
		PolicyNames: Array<string>;
	}

	/** A list of names of sending authorization policies that apply to an identity. */
	export interface ListIdentityPoliciesResponseFormProperties {
	}
	export function CreateListIdentityPoliciesResponseFormGroup() {
		return new FormGroup<ListIdentityPoliciesResponseFormProperties>({
		});

	}


	/** A list of IP address filters that exist under your AWS account. */
	export interface ListReceiptFiltersResponse {
		Filters?: Array<ReceiptFilter>;
	}

	/** A list of IP address filters that exist under your AWS account. */
	export interface ListReceiptFiltersResponseFormProperties {
	}
	export function CreateListReceiptFiltersResponseFormGroup() {
		return new FormGroup<ListReceiptFiltersResponseFormProperties>({
		});

	}


	/** <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptFilter {
		Name: string;

		/**
		 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 */
		IpFilter: ReceiptIpFilter;
	}

	/** <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> */
	export interface ReceiptFilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateReceiptFilterFormGroup() {
		return new FormGroup<ReceiptFilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of receipt rule sets that exist under your AWS account. */
	export interface ListReceiptRuleSetsResponse {
		RuleSets?: Array<ReceiptRuleSetMetadata>;
		NextToken?: string | null;
	}

	/** A list of receipt rule sets that exist under your AWS account. */
	export interface ListReceiptRuleSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReceiptRuleSetsResponseFormGroup() {
		return new FormGroup<ListReceiptRuleSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTemplatesResponse {
		TemplatesMetadata?: Array<TemplateMetadata>;
		NextToken?: string | null;
	}
	export interface ListTemplatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTemplatesResponseFormGroup() {
		return new FormGroup<ListTemplatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an email template. */
	export interface TemplateMetadata {
		Name?: string | null;
		CreatedTimestamp?: Date | null;
	}

	/** Contains information about an email template. */
	export interface TemplateMetadataFormProperties {
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateTemplateMetadataFormGroup() {
		return new FormGroup<TemplateMetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A list of email addresses that you have verified with Amazon SES under your AWS account. */
	export interface ListVerifiedEmailAddressesResponse {
		VerifiedEmailAddresses?: Array<string>;
	}

	/** A list of email addresses that you have verified with Amazon SES under your AWS account. */
	export interface ListVerifiedEmailAddressesResponseFormProperties {
	}
	export function CreateListVerifiedEmailAddressesResponseFormGroup() {
		return new FormGroup<ListVerifiedEmailAddressesResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetDeliveryOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetDeliveryOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetDeliveryOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetDeliveryOptionsResponseFormProperties>({
		});

	}

	export interface InvalidDeliveryOptionsException {
	}
	export interface InvalidDeliveryOptionsExceptionFormProperties {
	}
	export function CreateInvalidDeliveryOptionsExceptionFormGroup() {
		return new FormGroup<InvalidDeliveryOptionsExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface PutIdentityPolicyResponse {
	}

	/** An empty element returned on a successful request. */
	export interface PutIdentityPolicyResponseFormProperties {
	}
	export function CreatePutIdentityPolicyResponseFormGroup() {
		return new FormGroup<PutIdentityPolicyResponseFormProperties>({
		});

	}

	export interface InvalidPolicyException {
	}
	export interface InvalidPolicyExceptionFormProperties {
	}
	export function CreateInvalidPolicyExceptionFormGroup() {
		return new FormGroup<InvalidPolicyExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface ReorderReceiptRuleSetResponse {
	}

	/** An empty element returned on a successful request. */
	export interface ReorderReceiptRuleSetResponseFormProperties {
	}
	export function CreateReorderReceiptRuleSetResponseFormGroup() {
		return new FormGroup<ReorderReceiptRuleSetResponseFormProperties>({
		});

	}


	/** Represents a unique message ID. */
	export interface SendBounceResponse {
		MessageId?: string | null;
	}

	/** Represents a unique message ID. */
	export interface SendBounceResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendBounceResponseFormGroup() {
		return new FormGroup<SendBounceResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Additional X-headers to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
	export interface ExtensionField {
		Name: string;
		Value: string;
	}

	/** <p>Additional X-headers to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
	export interface ExtensionFieldFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateExtensionFieldFormGroup() {
		return new FormGroup<ExtensionFieldFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
	export interface BouncedRecipientInfo {
		Recipient: string;
		RecipientArn?: string | null;
		BounceType?: BouncedRecipientInfoBounceType | null;

		/** <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
		RecipientDsnFields?: RecipientDsnFields;
	}

	/** <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
	export interface BouncedRecipientInfoFormProperties {
		Recipient: FormControl<string | null | undefined>,
		RecipientArn: FormControl<string | null | undefined>,
		BounceType: FormControl<BouncedRecipientInfoBounceType | null | undefined>,
	}
	export function CreateBouncedRecipientInfoFormGroup() {
		return new FormGroup<BouncedRecipientInfoFormProperties>({
			Recipient: new FormControl<string | null | undefined>(undefined),
			RecipientArn: new FormControl<string | null | undefined>(undefined),
			BounceType: new FormControl<BouncedRecipientInfoBounceType | null | undefined>(undefined),
		});

	}

	export enum BouncedRecipientInfoBounceType { DoesNotExist = 0, MessageTooLarge = 1, ExceededQuota = 2, ContentRejected = 3, Undefined = 4, TemporaryFailure = 5 }


	/** <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
	export interface RecipientDsnFields {
		FinalRecipient?: string | null;
		Action: RecipientDsnFieldsAction;
		RemoteMta?: string | null;
		Status: string;
		DiagnosticCode?: string | null;
		LastAttemptDate?: Date | null;
		ExtensionFields?: Array<ExtensionField>;
	}

	/** <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
	export interface RecipientDsnFieldsFormProperties {
		FinalRecipient: FormControl<string | null | undefined>,
		Action: FormControl<RecipientDsnFieldsAction | null | undefined>,
		RemoteMta: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		DiagnosticCode: FormControl<string | null | undefined>,
		LastAttemptDate: FormControl<Date | null | undefined>,
	}
	export function CreateRecipientDsnFieldsFormGroup() {
		return new FormGroup<RecipientDsnFieldsFormProperties>({
			FinalRecipient: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<RecipientDsnFieldsAction | null | undefined>(undefined),
			RemoteMta: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			DiagnosticCode: new FormControl<string | null | undefined>(undefined),
			LastAttemptDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RecipientDsnFieldsAction { failed = 0, delayed = 1, delivered = 2, relayed = 3, expanded = 4 }

	export interface MessageRejected {
	}
	export interface MessageRejectedFormProperties {
	}
	export function CreateMessageRejectedFormGroup() {
		return new FormGroup<MessageRejectedFormProperties>({
		});

	}

	export interface SendBulkTemplatedEmailResponse {
		Status: Array<BulkEmailDestinationStatus>;
	}
	export interface SendBulkTemplatedEmailResponseFormProperties {
	}
	export function CreateSendBulkTemplatedEmailResponseFormGroup() {
		return new FormGroup<SendBulkTemplatedEmailResponseFormProperties>({
		});

	}


	/** An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation. */
	export interface BulkEmailDestinationStatus {
		Status?: BulkEmailDestinationStatusStatus | null;
		Error?: string | null;
		MessageId?: string | null;
	}

	/** An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation. */
	export interface BulkEmailDestinationStatusFormProperties {
		Status: FormControl<BulkEmailDestinationStatusStatus | null | undefined>,
		Error: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateBulkEmailDestinationStatusFormGroup() {
		return new FormGroup<BulkEmailDestinationStatusFormProperties>({
			Status: new FormControl<BulkEmailDestinationStatusStatus | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BulkEmailDestinationStatusStatus { Success = 0, MessageRejected = 1, MailFromDomainNotVerified = 2, ConfigurationSetDoesNotExist = 3, TemplateDoesNotExist = 4, AccountSuspended = 5, AccountThrottled = 6, AccountDailyQuotaExceeded = 7, InvalidSendingPoolName = 8, AccountSendingPaused = 9, ConfigurationSetSendingPaused = 10, InvalidParameterValue = 11, TransientFailure = 12, Failed = 13 }


	/** <p>Contains the name and value of a tag that you can provide to <code>SendEmail</code> or <code>SendRawEmail</code> to apply to an email.</p> <p>Message tags, which you use with configuration sets, enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface MessageTag {
		Name: string;
		Value: string;
	}

	/** <p>Contains the name and value of a tag that you can provide to <code>SendEmail</code> or <code>SendRawEmail</code> to apply to an email.</p> <p>Message tags, which you use with configuration sets, enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
	export interface MessageTagFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMessageTagFormGroup() {
		return new FormGroup<MessageTagFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array that contains one or more Destinations, as well as the tags and replacement data associated with each of those Destinations. */
	export interface BulkEmailDestination {

		/**
		 * <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>
		 * Required
		 */
		Destination: Destination;
		ReplacementTags?: Array<MessageTag>;
		ReplacementTemplateData?: string | null;
	}

	/** An array that contains one or more Destinations, as well as the tags and replacement data associated with each of those Destinations. */
	export interface BulkEmailDestinationFormProperties {
		ReplacementTemplateData: FormControl<string | null | undefined>,
	}
	export function CreateBulkEmailDestinationFormGroup() {
		return new FormGroup<BulkEmailDestinationFormProperties>({
			ReplacementTemplateData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note> */
	export interface Destination {
		ToAddresses?: Array<string>;
		CcAddresses?: Array<string>;
		BccAddresses?: Array<string>;
	}

	/** <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note> */
	export interface DestinationFormProperties {
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
		});

	}

	export interface MailFromDomainNotVerifiedException {
	}
	export interface MailFromDomainNotVerifiedExceptionFormProperties {
	}
	export function CreateMailFromDomainNotVerifiedExceptionFormGroup() {
		return new FormGroup<MailFromDomainNotVerifiedExceptionFormProperties>({
		});

	}

	export interface ConfigurationSetSendingPausedException {
	}
	export interface ConfigurationSetSendingPausedExceptionFormProperties {
	}
	export function CreateConfigurationSetSendingPausedExceptionFormGroup() {
		return new FormGroup<ConfigurationSetSendingPausedExceptionFormProperties>({
		});

	}

	export interface AccountSendingPausedException {
	}
	export interface AccountSendingPausedExceptionFormProperties {
	}
	export function CreateAccountSendingPausedExceptionFormGroup() {
		return new FormGroup<AccountSendingPausedExceptionFormProperties>({
		});

	}


	/** The response received when attempting to send the custom verification email. */
	export interface SendCustomVerificationEmailResponse {
		MessageId?: string | null;
	}

	/** The response received when attempting to send the custom verification email. */
	export interface SendCustomVerificationEmailResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendCustomVerificationEmailResponseFormGroup() {
		return new FormGroup<SendCustomVerificationEmailResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductionAccessNotGrantedException {
	}
	export interface ProductionAccessNotGrantedExceptionFormProperties {
	}
	export function CreateProductionAccessNotGrantedExceptionFormGroup() {
		return new FormGroup<ProductionAccessNotGrantedExceptionFormProperties>({
		});

	}


	/** Represents a unique message ID. */
	export interface SendEmailResponse {
		MessageId: string;
	}

	/** Represents a unique message ID. */
	export interface SendEmailResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailResponseFormGroup() {
		return new FormGroup<SendEmailResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p> */
	export interface Content {
		Data: string;
		Charset?: string | null;
	}

	/** <p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p> */
	export interface ContentFormProperties {
		Data: FormControl<string | null | undefined>,
		Charset: FormControl<string | null | undefined>,
	}
	export function CreateContentFormGroup() {
		return new FormGroup<ContentFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
			Charset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients. */
	export interface Body {

		/** <p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p> */
		Text?: Content;

		/** <p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p> */
		Html?: Content;
	}

	/** Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients. */
	export interface BodyFormProperties {
	}
	export function CreateBodyFormGroup() {
		return new FormGroup<BodyFormProperties>({
		});

	}


	/** Represents a unique message ID. */
	export interface SendRawEmailResponse {
		MessageId: string;
	}

	/** Represents a unique message ID. */
	export interface SendRawEmailResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendRawEmailResponseFormGroup() {
		return new FormGroup<SendRawEmailResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTemplatedEmailResponse {
		MessageId: string;
	}
	export interface SendTemplatedEmailResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendTemplatedEmailResponseFormGroup() {
		return new FormGroup<SendTemplatedEmailResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An empty element returned on a successful request. */
	export interface SetActiveReceiptRuleSetResponse {
	}

	/** An empty element returned on a successful request. */
	export interface SetActiveReceiptRuleSetResponseFormProperties {
	}
	export function CreateSetActiveReceiptRuleSetResponseFormGroup() {
		return new FormGroup<SetActiveReceiptRuleSetResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface SetIdentityDkimEnabledResponse {
	}

	/** An empty element returned on a successful request. */
	export interface SetIdentityDkimEnabledResponseFormProperties {
	}
	export function CreateSetIdentityDkimEnabledResponseFormGroup() {
		return new FormGroup<SetIdentityDkimEnabledResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface SetIdentityFeedbackForwardingEnabledResponse {
	}

	/** An empty element returned on a successful request. */
	export interface SetIdentityFeedbackForwardingEnabledResponseFormProperties {
	}
	export function CreateSetIdentityFeedbackForwardingEnabledResponseFormGroup() {
		return new FormGroup<SetIdentityFeedbackForwardingEnabledResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface SetIdentityHeadersInNotificationsEnabledResponse {
	}

	/** An empty element returned on a successful request. */
	export interface SetIdentityHeadersInNotificationsEnabledResponseFormProperties {
	}
	export function CreateSetIdentityHeadersInNotificationsEnabledResponseFormGroup() {
		return new FormGroup<SetIdentityHeadersInNotificationsEnabledResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface SetIdentityMailFromDomainResponse {
	}

	/** An empty element returned on a successful request. */
	export interface SetIdentityMailFromDomainResponseFormProperties {
	}
	export function CreateSetIdentityMailFromDomainResponseFormGroup() {
		return new FormGroup<SetIdentityMailFromDomainResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface SetIdentityNotificationTopicResponse {
	}

	/** An empty element returned on a successful request. */
	export interface SetIdentityNotificationTopicResponseFormProperties {
	}
	export function CreateSetIdentityNotificationTopicResponseFormGroup() {
		return new FormGroup<SetIdentityNotificationTopicResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface SetReceiptRulePositionResponse {
	}

	/** An empty element returned on a successful request. */
	export interface SetReceiptRulePositionResponseFormProperties {
	}
	export function CreateSetReceiptRulePositionResponseFormGroup() {
		return new FormGroup<SetReceiptRulePositionResponseFormProperties>({
		});

	}

	export interface TestRenderTemplateResponse {
		RenderedTemplate?: string | null;
	}
	export interface TestRenderTemplateResponseFormProperties {
		RenderedTemplate: FormControl<string | null | undefined>,
	}
	export function CreateTestRenderTemplateResponseFormGroup() {
		return new FormGroup<TestRenderTemplateResponseFormProperties>({
			RenderedTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidRenderingParameterException {
	}
	export interface InvalidRenderingParameterExceptionFormProperties {
	}
	export function CreateInvalidRenderingParameterExceptionFormGroup() {
		return new FormGroup<InvalidRenderingParameterExceptionFormProperties>({
		});

	}

	export interface MissingRenderingAttributeException {
	}
	export interface MissingRenderingAttributeExceptionFormProperties {
	}
	export function CreateMissingRenderingAttributeExceptionFormGroup() {
		return new FormGroup<MissingRenderingAttributeExceptionFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface UpdateConfigurationSetEventDestinationResponse {
	}

	/** An empty element returned on a successful request. */
	export interface UpdateConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface UpdateConfigurationSetTrackingOptionsResponse {
	}

	/** An empty element returned on a successful request. */
	export interface UpdateConfigurationSetTrackingOptionsResponseFormProperties {
	}
	export function CreateUpdateConfigurationSetTrackingOptionsResponseFormGroup() {
		return new FormGroup<UpdateConfigurationSetTrackingOptionsResponseFormProperties>({
		});

	}


	/** An empty element returned on a successful request. */
	export interface UpdateReceiptRuleResponse {
	}

	/** An empty element returned on a successful request. */
	export interface UpdateReceiptRuleResponseFormProperties {
	}
	export function CreateUpdateReceiptRuleResponseFormGroup() {
		return new FormGroup<UpdateReceiptRuleResponseFormProperties>({
		});

	}

	export interface UpdateTemplateResponse {
	}
	export interface UpdateTemplateResponseFormProperties {
	}
	export function CreateUpdateTemplateResponseFormGroup() {
		return new FormGroup<UpdateTemplateResponseFormProperties>({
		});

	}


	/** Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES. */
	export interface VerifyDomainDkimResponse {
		DkimTokens: Array<string>;
	}

	/** Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES. */
	export interface VerifyDomainDkimResponseFormProperties {
	}
	export function CreateVerifyDomainDkimResponseFormGroup() {
		return new FormGroup<VerifyDomainDkimResponseFormProperties>({
		});

	}


	/** Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES. */
	export interface VerifyDomainIdentityResponse {
		VerificationToken: string;
	}

	/** Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES. */
	export interface VerifyDomainIdentityResponseFormProperties {
		VerificationToken: FormControl<string | null | undefined>,
	}
	export function CreateVerifyDomainIdentityResponseFormGroup() {
		return new FormGroup<VerifyDomainIdentityResponseFormProperties>({
			VerificationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An empty element returned on a successful request. */
	export interface VerifyEmailIdentityResponse {
	}

	/** An empty element returned on a successful request. */
	export interface VerifyEmailIdentityResponseFormProperties {
	}
	export function CreateVerifyEmailIdentityResponseFormGroup() {
		return new FormGroup<VerifyEmailIdentityResponseFormProperties>({
		});

	}

	export enum BehaviorOnMXFailure { UseDefaultValue = 0, RejectMessage = 1 }

	export enum BounceType { DoesNotExist = 0, MessageTooLarge = 1, ExceededQuota = 2, ContentRejected = 3, Undefined = 4, TemporaryFailure = 5 }

	export enum BulkEmailStatus { Success = 0, MessageRejected = 1, MailFromDomainNotVerified = 2, ConfigurationSetDoesNotExist = 3, TemplateDoesNotExist = 4, AccountSuspended = 5, AccountThrottled = 6, AccountDailyQuotaExceeded = 7, InvalidSendingPoolName = 8, AccountSendingPaused = 9, ConfigurationSetSendingPaused = 10, InvalidParameterValue = 11, TransientFailure = 12, Failed = 13 }


	/** Represents a request to create a receipt rule set by cloning an existing one. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface CloneReceiptRuleSetRequest {
		RuleSetName: string;
		OriginalRuleSetName: string;
	}

	/** Represents a request to create a receipt rule set by cloning an existing one. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface CloneReceiptRuleSetRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
		OriginalRuleSetName: FormControl<string | null | undefined>,
	}
	export function CreateCloneReceiptRuleSetRequestFormGroup() {
		return new FormGroup<CloneReceiptRuleSetRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
			OriginalRuleSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DimensionValueSource { messageTag = 0, emailHeader = 1, linkTag = 2 }


	/** Represents a request to create a configuration set event destination. A configuration set event destination, which can be either Amazon CloudWatch or Amazon Kinesis Firehose, describes an AWS service in which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface CreateConfigurationSetEventDestinationRequest {
		ConfigurationSetName: string;

		/**
		 * <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 */
		EventDestination: EventDestination;
	}

	/** Represents a request to create a configuration set event destination. A configuration set event destination, which can be either Amazon CloudWatch or Amazon Kinesis Firehose, describes an AWS service in which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface CreateConfigurationSetEventDestinationRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to create a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface CreateConfigurationSetRequest {

		/**
		 * <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
		 * Required
		 */
		ConfigurationSet: ConfigurationSet;
	}

	/** Represents a request to create a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface CreateConfigurationSetRequestFormProperties {
	}
	export function CreateCreateConfigurationSetRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetRequestFormProperties>({
		});

	}


	/** Represents a request to create an open and click tracking option object in a configuration set.  */
	export interface CreateConfigurationSetTrackingOptionsRequest {
		ConfigurationSetName: string;

		/**
		 * <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>
		 * Required
		 */
		TrackingOptions: TrackingOptions;
	}

	/** Represents a request to create an open and click tracking option object in a configuration set.  */
	export interface CreateConfigurationSetTrackingOptionsRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetTrackingOptionsRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetTrackingOptionsRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to create a custom verification email template. */
	export interface CreateCustomVerificationEmailTemplateRequest {
		TemplateName: string;
		FromEmailAddress: string;
		TemplateSubject: string;
		TemplateContent: string;
		SuccessRedirectionURL: string;
		FailureRedirectionURL: string;
	}

	/** Represents a request to create a custom verification email template. */
	export interface CreateCustomVerificationEmailTemplateRequestFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		FromEmailAddress: FormControl<string | null | undefined>,
		TemplateSubject: FormControl<string | null | undefined>,
		TemplateContent: FormControl<string | null | undefined>,
		SuccessRedirectionURL: FormControl<string | null | undefined>,
		FailureRedirectionURL: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomVerificationEmailTemplateRequestFormGroup() {
		return new FormGroup<CreateCustomVerificationEmailTemplateRequestFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			TemplateSubject: new FormControl<string | null | undefined>(undefined),
			TemplateContent: new FormControl<string | null | undefined>(undefined),
			SuccessRedirectionURL: new FormControl<string | null | undefined>(undefined),
			FailureRedirectionURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to create a new IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface CreateReceiptFilterRequest {

		/**
		 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 */
		Filter: ReceiptFilter;
	}

	/** Represents a request to create a new IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface CreateReceiptFilterRequestFormProperties {
	}
	export function CreateCreateReceiptFilterRequestFormGroup() {
		return new FormGroup<CreateReceiptFilterRequestFormProperties>({
		});

	}


	/** Represents a request to create a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface CreateReceiptRuleRequest {
		RuleSetName: string;
		After?: string | null;

		/**
		 * <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 */
		Rule: ReceiptRule;
	}

	/** Represents a request to create a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface CreateReceiptRuleRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
		After: FormControl<string | null | undefined>,
	}
	export function CreateCreateReceiptRuleRequestFormGroup() {
		return new FormGroup<CreateReceiptRuleRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
			After: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to create an empty receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface CreateReceiptRuleSetRequest {
		RuleSetName: string;
	}

	/** Represents a request to create an empty receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface CreateReceiptRuleSetRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateReceiptRuleSetRequestFormGroup() {
		return new FormGroup<CreateReceiptRuleSetRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface CreateTemplateRequest {

		/**
		 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
		 * Required
		 */
		Template: Template;
	}

	/** Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface CreateTemplateRequestFormProperties {
	}
	export function CreateCreateTemplateRequestFormGroup() {
		return new FormGroup<CreateTemplateRequestFormProperties>({
		});

	}

	export enum CustomMailFromStatus { Pending = 0, Success = 1, Failed = 2, TemporaryFailure = 3 }


	/** Represents a request to delete a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface DeleteConfigurationSetEventDestinationRequest {
		ConfigurationSetName: string;
		EventDestinationName: string;
	}

	/** Represents a request to delete a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface DeleteConfigurationSetEventDestinationRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
		EventDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetEventDestinationRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			EventDestinationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface DeleteConfigurationSetRequest {
		ConfigurationSetName: string;
	}

	/** Represents a request to delete a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface DeleteConfigurationSetRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigurationSetRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete open and click tracking options in a configuration set.  */
	export interface DeleteConfigurationSetTrackingOptionsRequest {
		ConfigurationSetName: string;
	}

	/** Represents a request to delete open and click tracking options in a configuration set.  */
	export interface DeleteConfigurationSetTrackingOptionsRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConfigurationSetTrackingOptionsRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetTrackingOptionsRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete an existing custom verification email template. */
	export interface DeleteCustomVerificationEmailTemplateRequest {
		TemplateName: string;
	}

	/** Represents a request to delete an existing custom verification email template. */
	export interface DeleteCustomVerificationEmailTemplateRequestFormProperties {
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomVerificationEmailTemplateRequestFormGroup() {
		return new FormGroup<DeleteCustomVerificationEmailTemplateRequestFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>. */
	export interface DeleteIdentityPolicyRequest {
		Identity: string;
		PolicyName: string;
	}

	/** Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>. */
	export interface DeleteIdentityPolicyRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIdentityPolicyRequestFormGroup() {
		return new FormGroup<DeleteIdentityPolicyRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete one of your Amazon SES identities (an email address or domain). */
	export interface DeleteIdentityRequest {
		Identity: string;
	}

	/** Represents a request to delete one of your Amazon SES identities (an email address or domain). */
	export interface DeleteIdentityRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIdentityRequestFormGroup() {
		return new FormGroup<DeleteIdentityRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete an IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DeleteReceiptFilterRequest {
		FilterName: string;
	}

	/** Represents a request to delete an IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DeleteReceiptFilterRequestFormProperties {
		FilterName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReceiptFilterRequestFormGroup() {
		return new FormGroup<DeleteReceiptFilterRequestFormProperties>({
			FilterName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DeleteReceiptRuleRequest {
		RuleSetName: string;
		RuleName: string;
	}

	/** Represents a request to delete a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DeleteReceiptRuleRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
		RuleName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReceiptRuleRequestFormGroup() {
		return new FormGroup<DeleteReceiptRuleRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
			RuleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete a receipt rule set and all of the receipt rules it contains. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DeleteReceiptRuleSetRequest {
		RuleSetName: string;
	}

	/** Represents a request to delete a receipt rule set and all of the receipt rules it contains. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DeleteReceiptRuleSetRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteReceiptRuleSetRequestFormGroup() {
		return new FormGroup<DeleteReceiptRuleSetRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface DeleteTemplateRequest {
		TemplateName: string;
	}

	/** Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface DeleteTemplateRequestFormProperties {
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTemplateRequestFormGroup() {
		return new FormGroup<DeleteTemplateRequestFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to delete an email address from the list of email addresses you have attempted to verify under your AWS account. */
	export interface DeleteVerifiedEmailAddressRequest {
		EmailAddress: string;
	}

	/** Represents a request to delete an email address from the list of email addresses you have attempted to verify under your AWS account. */
	export interface DeleteVerifiedEmailAddressRequestFormProperties {
		EmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVerifiedEmailAddressRequestFormGroup() {
		return new FormGroup<DeleteVerifiedEmailAddressRequestFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to return the metadata and receipt rules for the receipt rule set that is currently active. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DescribeActiveReceiptRuleSetRequest {
	}

	/** Represents a request to return the metadata and receipt rules for the receipt rule set that is currently active. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DescribeActiveReceiptRuleSetRequestFormProperties {
	}
	export function CreateDescribeActiveReceiptRuleSetRequestFormGroup() {
		return new FormGroup<DescribeActiveReceiptRuleSetRequestFormProperties>({
		});

	}


	/** Represents a request to return the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface DescribeConfigurationSetRequest {
		ConfigurationSetName: string;
		ConfigurationSetAttributeNames?: Array<ConfigurationSetAttribute>;
	}

	/** Represents a request to return the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface DescribeConfigurationSetRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConfigurationSetRequestFormGroup() {
		return new FormGroup<DescribeConfigurationSetRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to return the details of a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DescribeReceiptRuleRequest {
		RuleSetName: string;
		RuleName: string;
	}

	/** Represents a request to return the details of a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DescribeReceiptRuleRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
		RuleName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReceiptRuleRequestFormGroup() {
		return new FormGroup<DescribeReceiptRuleRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
			RuleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to return the details of a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DescribeReceiptRuleSetRequest {
		RuleSetName: string;
	}

	/** Represents a request to return the details of a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface DescribeReceiptRuleSetRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReceiptRuleSetRequestFormGroup() {
		return new FormGroup<DescribeReceiptRuleSetRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the DKIM attributes of a verified email address or a domain. */
	export interface IdentityDkimAttributes {
		DkimEnabled: boolean;
		DkimVerificationStatus: IdentityDkimAttributesDkimVerificationStatus;
		DkimTokens?: Array<string>;
	}

	/** Represents the DKIM attributes of a verified email address or a domain. */
	export interface IdentityDkimAttributesFormProperties {
		DkimEnabled: FormControl<boolean | null | undefined>,
		DkimVerificationStatus: FormControl<IdentityDkimAttributesDkimVerificationStatus | null | undefined>,
	}
	export function CreateIdentityDkimAttributesFormGroup() {
		return new FormGroup<IdentityDkimAttributesFormProperties>({
			DkimEnabled: new FormControl<boolean | null | undefined>(undefined),
			DkimVerificationStatus: new FormControl<IdentityDkimAttributesDkimVerificationStatus | null | undefined>(undefined),
		});

	}

	export enum IdentityDkimAttributesDkimVerificationStatus { Pending = 0, Success = 1, Failed = 2, TemporaryFailure = 3, NotStarted = 4 }

	export enum DsnAction { failed = 0, delayed = 1, delivered = 2, relayed = 3, expanded = 4 }


	/** Represents a request to retrieve an existing custom verification email template. */
	export interface GetCustomVerificationEmailTemplateRequest {
		TemplateName: string;
	}

	/** Represents a request to retrieve an existing custom verification email template. */
	export interface GetCustomVerificationEmailTemplateRequestFormProperties {
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomVerificationEmailTemplateRequestFormGroup() {
		return new FormGroup<GetCustomVerificationEmailTemplateRequestFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request for the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this request also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published. For more information about Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityDkimAttributesRequest {
		Identities: Array<string>;
	}

	/** Represents a request for the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this request also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published. For more information about Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityDkimAttributesRequestFormProperties {
	}
	export function CreateGetIdentityDkimAttributesRequestFormGroup() {
		return new FormGroup<GetIdentityDkimAttributesRequestFormProperties>({
		});

	}


	/** Represents a request to return the Amazon SES custom MAIL FROM attributes for a list of identities. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityMailFromDomainAttributesRequest {
		Identities: Array<string>;
	}

	/** Represents a request to return the Amazon SES custom MAIL FROM attributes for a list of identities. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityMailFromDomainAttributesRequestFormProperties {
	}
	export function CreateGetIdentityMailFromDomainAttributesRequestFormGroup() {
		return new FormGroup<GetIdentityMailFromDomainAttributesRequestFormProperties>({
		});

	}


	/** Represents a request to return the notification attributes for a list of identities you verified with Amazon SES. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityNotificationAttributesRequest {
		Identities: Array<string>;
	}

	/** Represents a request to return the notification attributes for a list of identities you verified with Amazon SES. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityNotificationAttributesRequestFormProperties {
	}
	export function CreateGetIdentityNotificationAttributesRequestFormGroup() {
		return new FormGroup<GetIdentityNotificationAttributesRequestFormProperties>({
		});

	}


	/** Represents a request to return the requested sending authorization policies for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityPoliciesRequest {
		Identity: string;
		PolicyNames: Array<string>;
	}

	/** Represents a request to return the requested sending authorization policies for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityPoliciesRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
	}
	export function CreateGetIdentityPoliciesRequestFormGroup() {
		return new FormGroup<GetIdentityPoliciesRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to return the Amazon SES verification status of a list of identities. For domain identities, this request also returns the verification token. For information about verifying identities with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityVerificationAttributesRequest {
		Identities: Array<string>;
	}

	/** Represents a request to return the Amazon SES verification status of a list of identities. For domain identities, this request also returns the verification token. For information about verifying identities with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>. */
	export interface GetIdentityVerificationAttributesRequestFormProperties {
	}
	export function CreateGetIdentityVerificationAttributesRequestFormGroup() {
		return new FormGroup<GetIdentityVerificationAttributesRequestFormProperties>({
		});

	}

	export interface GetTemplateRequest {
		TemplateName: string;
	}
	export interface GetTemplateRequestFormProperties {
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateRequestFormGroup() {
		return new FormGroup<GetTemplateRequestFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VerificationStatus { Pending = 0, Success = 1, Failed = 2, TemporaryFailure = 3, NotStarted = 4 }


	/** Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain). */
	export interface IdentityMailFromDomainAttributes {
		MailFromDomain: string;
		MailFromDomainStatus: CustomMailFromStatus;
		BehaviorOnMXFailure: BehaviorOnMXFailure;
	}

	/** Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain). */
	export interface IdentityMailFromDomainAttributesFormProperties {
		MailFromDomain: FormControl<string | null | undefined>,
		MailFromDomainStatus: FormControl<CustomMailFromStatus | null | undefined>,
		BehaviorOnMXFailure: FormControl<BehaviorOnMXFailure | null | undefined>,
	}
	export function CreateIdentityMailFromDomainAttributesFormGroup() {
		return new FormGroup<IdentityMailFromDomainAttributesFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined),
			MailFromDomainStatus: new FormControl<CustomMailFromStatus | null | undefined>(undefined),
			BehaviorOnMXFailure: new FormControl<BehaviorOnMXFailure | null | undefined>(undefined),
		});

	}


	/** Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications. */
	export interface IdentityNotificationAttributes {
		BounceTopic: string;
		ComplaintTopic: string;
		DeliveryTopic: string;
		ForwardingEnabled: boolean;
		HeadersInBounceNotificationsEnabled?: boolean | null;
		HeadersInComplaintNotificationsEnabled?: boolean | null;
		HeadersInDeliveryNotificationsEnabled?: boolean | null;
	}

	/** Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications. */
	export interface IdentityNotificationAttributesFormProperties {
		BounceTopic: FormControl<string | null | undefined>,
		ComplaintTopic: FormControl<string | null | undefined>,
		DeliveryTopic: FormControl<string | null | undefined>,
		ForwardingEnabled: FormControl<boolean | null | undefined>,
		HeadersInBounceNotificationsEnabled: FormControl<boolean | null | undefined>,
		HeadersInComplaintNotificationsEnabled: FormControl<boolean | null | undefined>,
		HeadersInDeliveryNotificationsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIdentityNotificationAttributesFormGroup() {
		return new FormGroup<IdentityNotificationAttributesFormProperties>({
			BounceTopic: new FormControl<string | null | undefined>(undefined),
			ComplaintTopic: new FormControl<string | null | undefined>(undefined),
			DeliveryTopic: new FormControl<string | null | undefined>(undefined),
			ForwardingEnabled: new FormControl<boolean | null | undefined>(undefined),
			HeadersInBounceNotificationsEnabled: new FormControl<boolean | null | undefined>(undefined),
			HeadersInComplaintNotificationsEnabled: new FormControl<boolean | null | undefined>(undefined),
			HeadersInDeliveryNotificationsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum IdentityType { EmailAddress = 0, Domain = 1 }


	/** Represents the verification attributes of a single identity. */
	export interface IdentityVerificationAttributes {
		VerificationStatus: IdentityDkimAttributesDkimVerificationStatus;
		VerificationToken?: string | null;
	}

	/** Represents the verification attributes of a single identity. */
	export interface IdentityVerificationAttributesFormProperties {
		VerificationStatus: FormControl<IdentityDkimAttributesDkimVerificationStatus | null | undefined>,
		VerificationToken: FormControl<string | null | undefined>,
	}
	export function CreateIdentityVerificationAttributesFormGroup() {
		return new FormGroup<IdentityVerificationAttributesFormProperties>({
			VerificationStatus: new FormControl<IdentityDkimAttributesDkimVerificationStatus | null | undefined>(undefined),
			VerificationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvocationType { Event = 0, RequestResponse = 1 }


	/** Represents a request to list the configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface ListConfigurationSetsRequest {
		NextToken?: string | null;
		MaxItems?: number | null;
	}

	/** Represents a request to list the configuration sets associated with your AWS account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface ListConfigurationSetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListConfigurationSetsRequestFormGroup() {
		return new FormGroup<ListConfigurationSetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Represents a request to list the existing custom verification email templates for your account.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> */
	export interface ListCustomVerificationEmailTemplatesRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	/** <p>Represents a request to list the existing custom verification email templates for your account.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> */
	export interface ListCustomVerificationEmailTemplatesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCustomVerificationEmailTemplatesRequestFormGroup() {
		return new FormGroup<ListCustomVerificationEmailTemplatesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a request to return a list of all identities (email addresses and domains) that you have attempted to verify under your AWS account, regardless of verification status. */
	export interface ListIdentitiesRequest {
		IdentityType?: IdentityType | null;
		NextToken?: string | null;
		MaxItems?: number | null;
	}

	/** Represents a request to return a list of all identities (email addresses and domains) that you have attempted to verify under your AWS account, regardless of verification status. */
	export interface ListIdentitiesRequestFormProperties {
		IdentityType: FormControl<IdentityType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListIdentitiesRequestFormGroup() {
		return new FormGroup<ListIdentitiesRequestFormProperties>({
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a request to return a list of sending authorization policies that are attached to an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>. */
	export interface ListIdentityPoliciesRequest {
		Identity: string;
	}

	/** Represents a request to return a list of sending authorization policies that are attached to an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>. */
	export interface ListIdentityPoliciesRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
	}
	export function CreateListIdentityPoliciesRequestFormGroup() {
		return new FormGroup<ListIdentityPoliciesRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to list the IP address filters that exist under your AWS account. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface ListReceiptFiltersRequest {
	}

	/** Represents a request to list the IP address filters that exist under your AWS account. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface ListReceiptFiltersRequestFormProperties {
	}
	export function CreateListReceiptFiltersRequestFormGroup() {
		return new FormGroup<ListReceiptFiltersRequestFormProperties>({
		});

	}


	/** Represents a request to list the receipt rule sets that exist under your AWS account. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface ListReceiptRuleSetsRequest {
		NextToken?: string | null;
	}

	/** Represents a request to list the receipt rule sets that exist under your AWS account. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface ListReceiptRuleSetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReceiptRuleSetsRequestFormGroup() {
		return new FormGroup<ListReceiptRuleSetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTemplatesRequest {
		NextToken?: string | null;
		MaxItems?: number | null;
	}
	export interface ListTemplatesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListTemplatesRequestFormGroup() {
		return new FormGroup<ListTemplatesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the message to be sent, composed of a subject and a body. */
	export interface Message {

		/**
		 * <p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p>
		 * Required
		 */
		Subject: Content;

		/**
		 * Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients.
		 * Required
		 */
		Body: Body;
	}

	/** Represents the message to be sent, composed of a subject and a body. */
	export interface MessageFormProperties {
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
		});

	}


	/** <p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
	export interface MessageDsn {
		ReportingMta: string;
		ArrivalDate?: Date | null;
		ExtensionFields?: Array<ExtensionField>;
	}

	/** <p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
	export interface MessageDsnFormProperties {
		ReportingMta: FormControl<string | null | undefined>,
		ArrivalDate: FormControl<Date | null | undefined>,
	}
	export function CreateMessageDsnFormGroup() {
		return new FormGroup<MessageDsnFormProperties>({
			ReportingMta: new FormControl<string | null | undefined>(undefined),
			ArrivalDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum NotificationType { Bounce = 0, Complaint = 1, Delivery = 2 }


	/** A request to modify the delivery options for a configuration set. */
	export interface PutConfigurationSetDeliveryOptionsRequest {
		ConfigurationSetName: string;

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). */
		DeliveryOptions?: DeliveryOptions;
	}

	/** A request to modify the delivery options for a configuration set. */
	export interface PutConfigurationSetDeliveryOptionsRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetDeliveryOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetDeliveryOptionsRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to add or update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>. */
	export interface PutIdentityPolicyRequest {
		Identity: string;
		PolicyName: string;
		Policy: string;
	}

	/** Represents a request to add or update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>. */
	export interface PutIdentityPolicyRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutIdentityPolicyRequestFormGroup() {
		return new FormGroup<PutIdentityPolicyRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the raw data of the message. */
	export interface RawMessage {
		Data: string;
	}

	/** Represents the raw data of the message. */
	export interface RawMessageFormProperties {
		Data: FormControl<string | null | undefined>,
	}
	export function CreateRawMessageFormGroup() {
		return new FormGroup<RawMessageFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReceiptFilterPolicy { Block = 0, Allow = 1 }


	/** Represents a request to reorder the receipt rules within a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface ReorderReceiptRuleSetRequest {
		RuleSetName: string;
		RuleNames: Array<string>;
	}

	/** Represents a request to reorder the receipt rules within a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface ReorderReceiptRuleSetRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
	}
	export function CreateReorderReceiptRuleSetRequestFormGroup() {
		return new FormGroup<ReorderReceiptRuleSetRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to send a bounce message to the sender of an email you received through Amazon SES. */
	export interface SendBounceRequest {
		OriginalMessageId: string;
		BounceSender: string;
		Explanation?: string | null;

		/** <p>Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> */
		MessageDsn?: MessageDsn;
		BouncedRecipientInfoList: Array<BouncedRecipientInfo>;
		BounceSenderArn?: string | null;
	}

	/** Represents a request to send a bounce message to the sender of an email you received through Amazon SES. */
	export interface SendBounceRequestFormProperties {
		OriginalMessageId: FormControl<string | null | undefined>,
		BounceSender: FormControl<string | null | undefined>,
		Explanation: FormControl<string | null | undefined>,
		BounceSenderArn: FormControl<string | null | undefined>,
	}
	export function CreateSendBounceRequestFormGroup() {
		return new FormGroup<SendBounceRequestFormProperties>({
			OriginalMessageId: new FormControl<string | null | undefined>(undefined),
			BounceSender: new FormControl<string | null | undefined>(undefined),
			Explanation: new FormControl<string | null | undefined>(undefined),
			BounceSenderArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to send a templated email to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface SendBulkTemplatedEmailRequest {
		Source: string;
		SourceArn?: string | null;
		ReplyToAddresses?: Array<string>;
		ReturnPath?: string | null;
		ReturnPathArn?: string | null;
		ConfigurationSetName?: string | null;
		DefaultTags?: Array<MessageTag>;
		Template: string;
		TemplateArn?: string | null;
		DefaultTemplateData?: string | null;
		Destinations: Array<BulkEmailDestination>;
	}

	/** Represents a request to send a templated email to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface SendBulkTemplatedEmailRequestFormProperties {
		Source: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		ReturnPath: FormControl<string | null | undefined>,
		ReturnPathArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		Template: FormControl<string | null | undefined>,
		TemplateArn: FormControl<string | null | undefined>,
		DefaultTemplateData: FormControl<string | null | undefined>,
	}
	export function CreateSendBulkTemplatedEmailRequestFormGroup() {
		return new FormGroup<SendBulkTemplatedEmailRequestFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			ReturnPath: new FormControl<string | null | undefined>(undefined),
			ReturnPathArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			Template: new FormControl<string | null | undefined>(undefined),
			TemplateArn: new FormControl<string | null | undefined>(undefined),
			DefaultTemplateData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to send a custom verification email to a specified recipient. */
	export interface SendCustomVerificationEmailRequest {
		EmailAddress: string;
		TemplateName: string;
		ConfigurationSetName?: string | null;
	}

	/** Represents a request to send a custom verification email to a specified recipient. */
	export interface SendCustomVerificationEmailRequestFormProperties {
		EmailAddress: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendCustomVerificationEmailRequestFormGroup() {
		return new FormGroup<SendCustomVerificationEmailRequestFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>. */
	export interface SendEmailRequest {
		Source: string;

		/**
		 * <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>
		 * Required
		 */
		Destination: Destination;

		/**
		 * Represents the message to be sent, composed of a subject and a body.
		 * Required
		 */
		Message: Message;
		ReplyToAddresses?: Array<string>;
		ReturnPath?: string | null;
		SourceArn?: string | null;
		ReturnPathArn?: string | null;
		Tags?: Array<MessageTag>;
		ConfigurationSetName?: string | null;
	}

	/** Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>. */
	export interface SendEmailRequestFormProperties {
		Source: FormControl<string | null | undefined>,
		ReturnPath: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		ReturnPathArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailRequestFormGroup() {
		return new FormGroup<SendEmailRequestFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined),
			ReturnPath: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			ReturnPathArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to send a single raw email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>. */
	export interface SendRawEmailRequest {
		Source?: string | null;
		Destinations?: Array<string>;

		/**
		 * Represents the raw data of the message.
		 * Required
		 */
		RawMessage: RawMessage;
		FromArn?: string | null;
		SourceArn?: string | null;
		ReturnPathArn?: string | null;
		Tags?: Array<MessageTag>;
		ConfigurationSetName?: string | null;
	}

	/** Represents a request to send a single raw email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>. */
	export interface SendRawEmailRequestFormProperties {
		Source: FormControl<string | null | undefined>,
		FromArn: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		ReturnPathArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendRawEmailRequestFormGroup() {
		return new FormGroup<SendRawEmailRequestFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined),
			FromArn: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			ReturnPathArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to send a templated email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface SendTemplatedEmailRequest {
		Source: string;

		/**
		 * <p>Represents the destination of the message, consisting of To:, CC:, and BCC: fields.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note>
		 * Required
		 */
		Destination: Destination;
		ReplyToAddresses?: Array<string>;
		ReturnPath?: string | null;
		SourceArn?: string | null;
		ReturnPathArn?: string | null;
		Tags?: Array<MessageTag>;
		ConfigurationSetName?: string | null;
		Template: string;
		TemplateArn?: string | null;
		TemplateData: string;
	}

	/** Represents a request to send a templated email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface SendTemplatedEmailRequestFormProperties {
		Source: FormControl<string | null | undefined>,
		ReturnPath: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		ReturnPathArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		Template: FormControl<string | null | undefined>,
		TemplateArn: FormControl<string | null | undefined>,
		TemplateData: FormControl<string | null | undefined>,
	}
	export function CreateSendTemplatedEmailRequestFormGroup() {
		return new FormGroup<SendTemplatedEmailRequestFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined),
			ReturnPath: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			ReturnPathArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			Template: new FormControl<string | null | undefined>(undefined),
			TemplateArn: new FormControl<string | null | undefined>(undefined),
			TemplateData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to set a receipt rule set as the active receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface SetActiveReceiptRuleSetRequest {
		RuleSetName?: string | null;
	}

	/** Represents a request to set a receipt rule set as the active receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface SetActiveReceiptRuleSetRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
	}
	export function CreateSetActiveReceiptRuleSetRequestFormGroup() {
		return new FormGroup<SetActiveReceiptRuleSetRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to enable or disable Amazon SES Easy DKIM signing for an identity. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityDkimEnabledRequest {
		Identity: string;
		DkimEnabled: boolean;
	}

	/** Represents a request to enable or disable Amazon SES Easy DKIM signing for an identity. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityDkimEnabledRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
		DkimEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSetIdentityDkimEnabledRequestFormGroup() {
		return new FormGroup<SetIdentityDkimEnabledRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
			DkimEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a request to enable or disable whether Amazon SES forwards you bounce and complaint notifications through email. For information about email feedback forwarding, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-email.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityFeedbackForwardingEnabledRequest {
		Identity: string;
		ForwardingEnabled: boolean;
	}

	/** Represents a request to enable or disable whether Amazon SES forwards you bounce and complaint notifications through email. For information about email feedback forwarding, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-email.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityFeedbackForwardingEnabledRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
		ForwardingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSetIdentityFeedbackForwardingEnabledRequestFormGroup() {
		return new FormGroup<SetIdentityFeedbackForwardingEnabledRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
			ForwardingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a request to set whether Amazon SES includes the original email headers in the Amazon SNS notifications of a specified type. For information about notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityHeadersInNotificationsEnabledRequest {
		Identity: string;
		NotificationType: NotificationType;
		Enabled: boolean;
	}

	/** Represents a request to set whether Amazon SES includes the original email headers in the Amazon SNS notifications of a specified type. For information about notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityHeadersInNotificationsEnabledRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
		NotificationType: FormControl<NotificationType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSetIdentityHeadersInNotificationsEnabledRequestFormGroup() {
		return new FormGroup<SetIdentityHeadersInNotificationsEnabledRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
			NotificationType: new FormControl<NotificationType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a request to enable or disable the Amazon SES custom MAIL FROM domain setup for a verified identity. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityMailFromDomainRequest {
		Identity: string;
		MailFromDomain?: string | null;
		BehaviorOnMXFailure?: BehaviorOnMXFailure | null;
	}

	/** Represents a request to enable or disable the Amazon SES custom MAIL FROM domain setup for a verified identity. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityMailFromDomainRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
		MailFromDomain: FormControl<string | null | undefined>,
		BehaviorOnMXFailure: FormControl<BehaviorOnMXFailure | null | undefined>,
	}
	export function CreateSetIdentityMailFromDomainRequestFormGroup() {
		return new FormGroup<SetIdentityMailFromDomainRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
			MailFromDomain: new FormControl<string | null | undefined>(undefined),
			BehaviorOnMXFailure: new FormControl<BehaviorOnMXFailure | null | undefined>(undefined),
		});

	}


	/** Represents a request to specify the Amazon SNS topic to which Amazon SES will publish bounce, complaint, or delivery notifications for emails sent with that identity as the Source. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityNotificationTopicRequest {
		Identity: string;
		NotificationType: NotificationType;
		SnsTopic?: string | null;
	}

	/** Represents a request to specify the Amazon SNS topic to which Amazon SES will publish bounce, complaint, or delivery notifications for emails sent with that identity as the Source. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer Guide</a>. */
	export interface SetIdentityNotificationTopicRequestFormProperties {
		Identity: FormControl<string | null | undefined>,
		NotificationType: FormControl<NotificationType | null | undefined>,
		SnsTopic: FormControl<string | null | undefined>,
	}
	export function CreateSetIdentityNotificationTopicRequestFormGroup() {
		return new FormGroup<SetIdentityNotificationTopicRequestFormProperties>({
			Identity: new FormControl<string | null | undefined>(undefined),
			NotificationType: new FormControl<NotificationType | null | undefined>(undefined),
			SnsTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to set the position of a receipt rule in a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface SetReceiptRulePositionRequest {
		RuleSetName: string;
		RuleName: string;
		After?: string | null;
	}

	/** Represents a request to set the position of a receipt rule in a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface SetReceiptRulePositionRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
		RuleName: FormControl<string | null | undefined>,
		After: FormControl<string | null | undefined>,
	}
	export function CreateSetReceiptRulePositionRequestFormGroup() {
		return new FormGroup<SetReceiptRulePositionRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
			RuleName: new FormControl<string | null | undefined>(undefined),
			After: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StopScope { RuleSet = 0 }

	export interface TestRenderTemplateRequest {
		TemplateName: string;
		TemplateData: string;
	}
	export interface TestRenderTemplateRequestFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		TemplateData: FormControl<string | null | undefined>,
	}
	export function CreateTestRenderTemplateRequestFormGroup() {
		return new FormGroup<TestRenderTemplateRequestFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			TemplateData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to enable or disable the email sending capabilities for your entire Amazon SES account. */
	export interface UpdateAccountSendingEnabledRequest {
		Enabled?: boolean | null;
	}

	/** Represents a request to enable or disable the email sending capabilities for your entire Amazon SES account. */
	export interface UpdateAccountSendingEnabledRequestFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAccountSendingEnabledRequestFormGroup() {
		return new FormGroup<UpdateAccountSendingEnabledRequestFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a request to update the event destination of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface UpdateConfigurationSetEventDestinationRequest {
		ConfigurationSetName: string;

		/**
		 * <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 */
		EventDestination: EventDestination;
	}

	/** Represents a request to update the event destination of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>. */
	export interface UpdateConfigurationSetEventDestinationRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to modify the reputation metric publishing settings for a configuration set. */
	export interface UpdateConfigurationSetReputationMetricsEnabledRequest {
		ConfigurationSetName: string;
		Enabled: boolean;
	}

	/** Represents a request to modify the reputation metric publishing settings for a configuration set. */
	export interface UpdateConfigurationSetReputationMetricsEnabledRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateConfigurationSetReputationMetricsEnabledRequestFormGroup() {
		return new FormGroup<UpdateConfigurationSetReputationMetricsEnabledRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a request to enable or disable the email sending capabilities for a specific configuration set. */
	export interface UpdateConfigurationSetSendingEnabledRequest {
		ConfigurationSetName: string;
		Enabled: boolean;
	}

	/** Represents a request to enable or disable the email sending capabilities for a specific configuration set. */
	export interface UpdateConfigurationSetSendingEnabledRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateConfigurationSetSendingEnabledRequestFormGroup() {
		return new FormGroup<UpdateConfigurationSetSendingEnabledRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a request to update the tracking options for a configuration set.  */
	export interface UpdateConfigurationSetTrackingOptionsRequest {
		ConfigurationSetName: string;

		/**
		 * <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES Developer Guide</i>.</p>
		 * Required
		 */
		TrackingOptions: TrackingOptions;
	}

	/** Represents a request to update the tracking options for a configuration set.  */
	export interface UpdateConfigurationSetTrackingOptionsRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigurationSetTrackingOptionsRequestFormGroup() {
		return new FormGroup<UpdateConfigurationSetTrackingOptionsRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to update an existing custom verification email template. */
	export interface UpdateCustomVerificationEmailTemplateRequest {
		TemplateName: string;
		FromEmailAddress?: string | null;
		TemplateSubject?: string | null;
		TemplateContent?: string | null;
		SuccessRedirectionURL?: string | null;
		FailureRedirectionURL?: string | null;
	}

	/** Represents a request to update an existing custom verification email template. */
	export interface UpdateCustomVerificationEmailTemplateRequestFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		FromEmailAddress: FormControl<string | null | undefined>,
		TemplateSubject: FormControl<string | null | undefined>,
		TemplateContent: FormControl<string | null | undefined>,
		SuccessRedirectionURL: FormControl<string | null | undefined>,
		FailureRedirectionURL: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomVerificationEmailTemplateRequestFormGroup() {
		return new FormGroup<UpdateCustomVerificationEmailTemplateRequestFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			TemplateSubject: new FormControl<string | null | undefined>(undefined),
			TemplateContent: new FormControl<string | null | undefined>(undefined),
			SuccessRedirectionURL: new FormControl<string | null | undefined>(undefined),
			FailureRedirectionURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to update a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface UpdateReceiptRuleRequest {
		RuleSetName: string;

		/**
		 * <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.</p> <p>Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 */
		Rule: ReceiptRule;
	}

	/** Represents a request to update a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>. */
	export interface UpdateReceiptRuleRequestFormProperties {
		RuleSetName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateReceiptRuleRequestFormGroup() {
		return new FormGroup<UpdateReceiptRuleRequestFormProperties>({
			RuleSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplateRequest {

		/**
		 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
		 * Required
		 */
		Template: Template;
	}
	export interface UpdateTemplateRequestFormProperties {
	}
	export function CreateUpdateTemplateRequestFormGroup() {
		return new FormGroup<UpdateTemplateRequestFormProperties>({
		});

	}


	/** Represents a request to generate the CNAME records needed to set up Easy DKIM with Amazon SES. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>. */
	export interface VerifyDomainDkimRequest {
		Domain: string;
	}

	/** Represents a request to generate the CNAME records needed to set up Easy DKIM with Amazon SES. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>. */
	export interface VerifyDomainDkimRequestFormProperties {
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateVerifyDomainDkimRequestFormGroup() {
		return new FormGroup<VerifyDomainDkimRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to begin Amazon SES domain verification and to generate the TXT records that you must publish to the DNS server of your domain to complete the verification. For information about domain verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">Amazon SES Developer Guide</a>. */
	export interface VerifyDomainIdentityRequest {
		Domain: string;
	}

	/** Represents a request to begin Amazon SES domain verification and to generate the TXT records that you must publish to the DNS server of your domain to complete the verification. For information about domain verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">Amazon SES Developer Guide</a>. */
	export interface VerifyDomainIdentityRequestFormProperties {
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateVerifyDomainIdentityRequestFormGroup() {
		return new FormGroup<VerifyDomainIdentityRequestFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>. */
	export interface VerifyEmailAddressRequest {
		EmailAddress: string;
	}

	/** Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>. */
	export interface VerifyEmailAddressRequestFormProperties {
		EmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateVerifyEmailAddressRequestFormGroup() {
		return new FormGroup<VerifyEmailAddressRequestFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>. */
	export interface VerifyEmailIdentityRequest {
		EmailAddress: string;
	}

	/** Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>. */
	export interface VerifyEmailIdentityRequestFormProperties {
		EmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateVerifyEmailIdentityRequestFormGroup() {
		return new FormGroup<VerifyEmailIdentityRequestFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a receipt rule set by cloning an existing one. All receipt rules and configurations are copied to the new receipt rule set and are completely independent of the source rule set.</p> <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=CloneReceiptRuleSet
		 * @param {string} RuleSetName <p>The name of the rule set to create. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>
		 * @param {string} OriginalRuleSetName The name of the rule set to clone.
		 * @return {void} Success
		 */
		GET_CloneReceiptRuleSet(RuleSetName: string, OriginalRuleSetName: string, Action: GET_CloneReceiptRuleSetAction, Version: GET_CloneReceiptRuleSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CloneReceiptRuleSet?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&OriginalRuleSetName=' + (OriginalRuleSetName == null ? '' : encodeURIComponent(OriginalRuleSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a configuration set.</p> <p>Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=CreateConfigurationSet
		 * @param {GET_CreateConfigurationSetConfigurationSet} ConfigurationSet A data structure that contains the name of the configuration set.
		 * @return {void} Success
		 */
		GET_CreateConfigurationSet(ConfigurationSet: GET_CreateConfigurationSetConfigurationSet, Action: GET_CreateConfigurationSetAction, Version: GET_CreateConfigurationSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateConfigurationSet?ConfigurationSet=' + ConfigurationSet + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a configuration set event destination.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>An event destination is the AWS service to which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=CreateConfigurationSetEventDestination
		 * @param {string} ConfigurationSetName The name of the configuration set that the event destination should be associated with.
		 * @param {GET_CreateConfigurationSetEventDestinationEventDestination} EventDestination An object that describes the AWS service that email sending event information will be published to.
		 * @return {void} Success
		 */
		GET_CreateConfigurationSetEventDestination(ConfigurationSetName: string, EventDestination: GET_CreateConfigurationSetEventDestinationEventDestination, Action: GET_CreateConfigurationSetEventDestinationAction, Version: GET_CreateConfigurationSetEventDestinationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateConfigurationSetEventDestination?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&EventDestination=' + EventDestination + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
		 * Get #Action=CreateConfigurationSetTrackingOptions
		 * @param {string} ConfigurationSetName The name of the configuration set that the tracking options should be associated with.
		 * @return {void} Success
		 */
		GET_CreateConfigurationSetTrackingOptions(ConfigurationSetName: string, TrackingOptions: GET_CreateConfigurationSetTrackingOptionsTrackingOptions, Action: GET_CreateConfigurationSetTrackingOptionsAction, Version: GET_CreateConfigurationSetTrackingOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateConfigurationSetTrackingOptions?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&TrackingOptions=' + TrackingOptions + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=CreateCustomVerificationEmailTemplate
		 * @param {string} TemplateName The name of the custom verification email template.
		 * @param {string} FromEmailAddress The email address that the custom verification email is sent from.
		 * @param {string} TemplateSubject The subject line of the custom verification email.
		 * @param {string} TemplateContent The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.
		 * @param {string} SuccessRedirectionURL The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
		 * @param {string} FailureRedirectionURL The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
		 * @return {void} Success
		 */
		GET_CreateCustomVerificationEmailTemplate(TemplateName: string, FromEmailAddress: string, TemplateSubject: string, TemplateContent: string, SuccessRedirectionURL: string, FailureRedirectionURL: string, Action: GET_CreateCustomVerificationEmailTemplateAction, Version: GET_CreateCustomVerificationEmailTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateCustomVerificationEmailTemplate?TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&FromEmailAddress=' + (FromEmailAddress == null ? '' : encodeURIComponent(FromEmailAddress)) + '&TemplateSubject=' + (TemplateSubject == null ? '' : encodeURIComponent(TemplateSubject)) + '&TemplateContent=' + (TemplateContent == null ? '' : encodeURIComponent(TemplateContent)) + '&SuccessRedirectionURL=' + (SuccessRedirectionURL == null ? '' : encodeURIComponent(SuccessRedirectionURL)) + '&FailureRedirectionURL=' + (FailureRedirectionURL == null ? '' : encodeURIComponent(FailureRedirectionURL)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new IP address filter.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=CreateReceiptFilter
		 * @param {GET_CreateReceiptFilterFilter} Filter A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
		 * @return {void} Success
		 */
		GET_CreateReceiptFilter(Filter: GET_CreateReceiptFilterFilter, Action: GET_CreateReceiptFilterAction, Version: GET_CreateReceiptFilterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateReceiptFilter?Filter=' + Filter + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=CreateReceiptRule
		 * @param {string} RuleSetName The name of the rule set that the receipt rule will be added to.
		 * @param {string} After The name of an existing rule after which the new rule will be placed. If this parameter is null, the new rule will be inserted at the beginning of the rule list.
		 * @param {GET_CreateReceiptRuleRule} Rule A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.
		 * @return {void} Success
		 */
		GET_CreateReceiptRule(RuleSetName: string, After: string | null | undefined, Rule: GET_CreateReceiptRuleRule, Action: GET_CreateReceiptRuleAction, Version: GET_CreateReceiptRuleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateReceiptRule?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&After=' + (After == null ? '' : encodeURIComponent(After)) + '&Rule=' + Rule + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an empty receipt rule set.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=CreateReceiptRuleSet
		 * @param {string} RuleSetName <p>The name of the rule set to create. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Start and end with a letter or number.</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>
		 * @return {void} Success
		 */
		GET_CreateReceiptRuleSet(RuleSetName: string, Action: GET_CreateReceiptRuleSetAction, Version: GET_CreateReceiptRuleSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateReceiptRuleSet?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=CreateTemplate
		 * @param {GET_CreateTemplateTemplate} Template The content of the email, composed of a subject line, an HTML part, and a text-only part.
		 * @return {void} Success
		 */
		GET_CreateTemplate(Template: GET_CreateTemplateTemplate, Action: GET_CreateTemplateAction, Version: GET_CreateTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateTemplate?Template=' + Template + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DeleteConfigurationSet
		 * @param {string} ConfigurationSetName The name of the configuration set to delete.
		 * @return {void} Success
		 */
		GET_DeleteConfigurationSet(ConfigurationSetName: string, Action: GET_DeleteConfigurationSetAction, Version: GET_DeleteConfigurationSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteConfigurationSet?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DeleteConfigurationSetEventDestination
		 * @param {string} ConfigurationSetName The name of the configuration set from which to delete the event destination.
		 * @param {string} EventDestinationName The name of the event destination to delete.
		 * @return {void} Success
		 */
		GET_DeleteConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string, Action: GET_DeleteConfigurationSetEventDestinationAction, Version: GET_DeleteConfigurationSetEventDestinationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteConfigurationSetEventDestination?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&EventDestinationName=' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an association between a configuration set and a custom domain for open and click event tracking.</p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p> <note> <p>Deleting this kind of association will result in emails sent using the specified configuration set to capture open and click events using the standard, Amazon SES-operated domains.</p> </note>
		 * Get #Action=DeleteConfigurationSetTrackingOptions
		 * @param {string} ConfigurationSetName The name of the configuration set from which you want to delete the tracking options.
		 * @return {void} Success
		 */
		GET_DeleteConfigurationSetTrackingOptions(ConfigurationSetName: string, Action: GET_DeleteConfigurationSetTrackingOptionsAction, Version: GET_DeleteConfigurationSetTrackingOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteConfigurationSetTrackingOptions?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an existing custom verification email template. </p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DeleteCustomVerificationEmailTemplate
		 * @param {string} TemplateName The name of the custom verification email template that you want to delete.
		 * @return {void} Success
		 */
		GET_DeleteCustomVerificationEmailTemplate(TemplateName: string, Action: GET_DeleteCustomVerificationEmailTemplateAction, Version: GET_DeleteCustomVerificationEmailTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteCustomVerificationEmailTemplate?TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified identity (an email address or a domain) from the list of verified identities.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DeleteIdentity
		 * @param {string} Identity The identity to be removed from the list of identities for the AWS Account.
		 * @return {void} Success
		 */
		GET_DeleteIdentity(Identity: string, Action: GET_DeleteIdentityAction, Version: GET_DeleteIdentityVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteIdentity?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DeleteIdentityPolicy
		 * @param {string} Identity <p>The identity that is associated with the policy that you want to delete. You can specify the identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>
		 * @param {string} PolicyName The name of the policy to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteIdentityPolicy(Identity: string, PolicyName: string, Action: GET_DeleteIdentityPolicyAction, Version: GET_DeleteIdentityPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteIdentityPolicy?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified IP address filter.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DeleteReceiptFilter
		 * @param {string} FilterName The name of the IP address filter to delete.
		 * @return {void} Success
		 */
		GET_DeleteReceiptFilter(FilterName: string, Action: GET_DeleteReceiptFilterAction, Version: GET_DeleteReceiptFilterVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteReceiptFilter?FilterName=' + (FilterName == null ? '' : encodeURIComponent(FilterName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DeleteReceiptRule
		 * @param {string} RuleSetName The name of the receipt rule set that contains the receipt rule to delete.
		 * @param {string} RuleName The name of the receipt rule to delete.
		 * @return {void} Success
		 */
		GET_DeleteReceiptRule(RuleSetName: string, RuleName: string, Action: GET_DeleteReceiptRuleAction, Version: GET_DeleteReceiptRuleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteReceiptRule?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&RuleName=' + (RuleName == null ? '' : encodeURIComponent(RuleName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified receipt rule set and all of the receipt rules it contains.</p> <note> <p>The currently active rule set cannot be deleted.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DeleteReceiptRuleSet
		 * @param {string} RuleSetName The name of the receipt rule set to delete.
		 * @return {void} Success
		 */
		GET_DeleteReceiptRuleSet(RuleSetName: string, Action: GET_DeleteReceiptRuleSetAction, Version: GET_DeleteReceiptRuleSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteReceiptRuleSet?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DeleteTemplate
		 * @param {string} TemplateName The name of the template to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteTemplate(TemplateName: string, Action: GET_DeleteTemplateAction, Version: GET_DeleteTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteTemplate?TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses and domains.
		 * Get #Action=DeleteVerifiedEmailAddress
		 * @param {string} EmailAddress An email address to be removed from the list of verified addresses.
		 * @return {void} Success
		 */
		GET_DeleteVerifiedEmailAddress(EmailAddress: string, Action: GET_DeleteVerifiedEmailAddressAction, Version: GET_DeleteVerifiedEmailAddressVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteVerifiedEmailAddress?EmailAddress=' + (EmailAddress == null ? '' : encodeURIComponent(EmailAddress)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the metadata and receipt rules for the receipt rule set that is currently active.</p> <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DescribeActiveReceiptRuleSet
		 * @return {void} Success
		 */
		GET_DescribeActiveReceiptRuleSet(Action: GET_DescribeActiveReceiptRuleSetAction, Version: GET_DescribeActiveReceiptRuleSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeActiveReceiptRuleSet?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the details of the specified configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DescribeConfigurationSet
		 * @param {string} ConfigurationSetName The name of the configuration set to describe.
		 * @param {Array<ConfigurationSetAttribute>} ConfigurationSetAttributeNames A list of configuration set attributes to return.
		 * @return {void} Success
		 */
		GET_DescribeConfigurationSet(ConfigurationSetName: string, ConfigurationSetAttributeNames: Array<ConfigurationSetAttribute> | null | undefined, Action: GET_DescribeConfigurationSetAction, Version: GET_DescribeConfigurationSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeConfigurationSet?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&' + ConfigurationSetAttributeNames?.map(z => `ConfigurationSetAttributeNames=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the details of the specified receipt rule.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DescribeReceiptRule
		 * @param {string} RuleSetName The name of the receipt rule set that the receipt rule belongs to.
		 * @param {string} RuleName The name of the receipt rule.
		 * @return {void} Success
		 */
		GET_DescribeReceiptRule(RuleSetName: string, RuleName: string, Action: GET_DescribeReceiptRuleAction, Version: GET_DescribeReceiptRuleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeReceiptRule?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&RuleName=' + (RuleName == null ? '' : encodeURIComponent(RuleName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the details of the specified receipt rule set.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=DescribeReceiptRuleSet
		 * @param {string} RuleSetName The name of the receipt rule set to describe.
		 * @return {void} Success
		 */
		GET_DescribeReceiptRuleSet(RuleSetName: string, Action: GET_DescribeReceiptRuleSetAction, Version: GET_DescribeReceiptRuleSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeReceiptRuleSet?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=GetAccountSendingEnabled
		 * @return {void} Success
		 */
		GET_GetAccountSendingEnabled(Action: GET_GetAccountSendingEnabledAction, Version: GET_GetAccountSendingEnabledVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetAccountSendingEnabled?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the email sending status of the Amazon SES account for the current region.</p> <p>You can execute this operation no more than once per second.</p>
		 * Post #Action=GetAccountSendingEnabled
		 * @return {void} Success
		 */
		POST_GetAccountSendingEnabled(Action: GET_GetAccountSendingEnabledAction, Version: POST_GetAccountSendingEnabledVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=GetAccountSendingEnabled?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=GetCustomVerificationEmailTemplate
		 * @param {string} TemplateName The name of the custom verification email template that you want to retrieve.
		 * @return {void} Success
		 */
		GET_GetCustomVerificationEmailTemplate(TemplateName: string, Action: GET_GetCustomVerificationEmailTemplateAction, Version: GET_GetCustomVerificationEmailTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetCustomVerificationEmailTemplate?TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the current status of Easy DKIM signing for an entity. For domain name identities, this operation also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES has successfully verified that these tokens have been published.</p> <p>This operation takes a list of identities as input and returns the following information for each:</p> <ul> <li> <p>Whether Easy DKIM signing is enabled or disabled.</p> </li> <li> <p>A set of DKIM tokens that represent the identity. If the identity is an email address, the tokens represent the domain of that address.</p> </li> <li> <p>Whether Amazon SES has successfully verified the DKIM tokens published in the domain's DNS. This information is only returned for domain name identities, not for email addresses.</p> </li> </ul> <p>This operation is throttled at one request per second and can only get DKIM attributes for up to 100 identities at a time.</p> <p>For more information about creating DNS records using DKIM tokens, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim-dns-records.html">Amazon SES Developer Guide</a>.</p>
		 * Get #Action=GetIdentityDkimAttributes
		 * @param {Array<string>} Identities A list of one or more verified identities - email addresses, domains, or both.
		 * @return {void} Success
		 */
		GET_GetIdentityDkimAttributes(Identities: Array<string>, Action: GET_GetIdentityDkimAttributesAction, Version: GET_GetIdentityDkimAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetIdentityDkimAttributes?' + Identities.map(z => `Identities=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses : domains).</p> <p>This operation is throttled at one request per second and can only get custom MAIL FROM attributes for up to 100 identities at a time.</p>
		 * Get #Action=GetIdentityMailFromDomainAttributes
		 * @param {Array<string>} Identities A list of one or more identities.
		 * @return {void} Success
		 */
		GET_GetIdentityMailFromDomainAttributes(Identities: Array<string>, Action: GET_GetIdentityMailFromDomainAttributesAction, Version: GET_GetIdentityMailFromDomainAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetIdentityMailFromDomainAttributes?' + Identities.map(z => `Identities=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Given a list of verified identities (email addresses and/or domains), returns a structure describing identity notification attributes.</p> <p>This operation is throttled at one request per second and can only get notification attributes for up to 100 identities at a time.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
		 * Get #Action=GetIdentityNotificationAttributes
		 * @param {Array<string>} Identities A list of one or more identities. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.
		 * @return {void} Success
		 */
		GET_GetIdentityNotificationAttributes(Identities: Array<string>, Action: GET_GetIdentityNotificationAttributesAction, Version: GET_GetIdentityNotificationAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetIdentityNotificationAttributes?' + Identities.map(z => `Identities=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=GetIdentityPolicies
		 * @param {string} Identity <p>The identity for which the policies will be retrieved. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>
		 * @param {Array<string>} PolicyNames A list of the names of policies to be retrieved. You can retrieve a maximum of 20 policies at a time. If you do not know the names of the policies that are attached to the identity, you can use <code>ListIdentityPolicies</code>.
		 * @return {void} Success
		 */
		GET_GetIdentityPolicies(Identity: string, PolicyNames: Array<string>, Action: GET_GetIdentityPoliciesAction, Version: GET_GetIdentityPoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetIdentityPolicies?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&' + PolicyNames.map(z => `PolicyNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Given a list of identities (email addresses and/or domains), returns the verification status and (for domain identities) the verification token for each identity.</p> <p>The verification status of an email address is "Pending" until the email address owner clicks the link within the verification email that Amazon SES sent to that address. If the email address owner clicks the link within 24 hours, the verification status of the email address changes to "Success". If the link is not clicked within 24 hours, the verification status changes to "Failed." In that case, if you still want to verify the email address, you must restart the verification process from the beginning.</p> <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches for the required TXT record in the DNS settings of the domain. When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, if you still want to verify the domain, you must restart the verification process from the beginning.</p> <p>This operation is throttled at one request per second and can only get verification attributes for up to 100 identities at a time.</p>
		 * Get #Action=GetIdentityVerificationAttributes
		 * @param {Array<string>} Identities A list of identities.
		 * @return {void} Success
		 */
		GET_GetIdentityVerificationAttributes(Identities: Array<string>, Action: GET_GetIdentityVerificationAttributesAction, Version: GET_GetIdentityVerificationAttributesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetIdentityVerificationAttributes?' + Identities.map(z => `Identities=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=GetSendQuota
		 * @return {void} Success
		 */
		GET_GetSendQuota(Action: GET_GetSendQuotaAction, Version: GET_GetSendQuotaVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSendQuota?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Provides the sending limits for the Amazon SES account. </p> <p>You can execute this operation no more than once per second.</p>
		 * Post #Action=GetSendQuota
		 * @return {void} Success
		 */
		POST_GetSendQuota(Action: GET_GetSendQuotaAction, Version: POST_GetSendQuotaVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=GetSendQuota?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=GetSendStatistics
		 * @return {void} Success
		 */
		GET_GetSendStatistics(Action: GET_GetSendStatisticsAction, Version: GET_GetSendStatisticsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetSendStatistics?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Provides sending statistics for the current AWS Region. The result is a list of data points, representing the last two weeks of sending activity. Each data point in the list contains statistics for a 15-minute period of time.</p> <p>You can execute this operation no more than once per second.</p>
		 * Post #Action=GetSendStatistics
		 * @return {void} Success
		 */
		POST_GetSendStatistics(Action: GET_GetSendStatisticsAction, Version: POST_GetSendStatisticsVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=GetSendStatistics?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Displays the template object (which includes the Subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=GetTemplate
		 * @param {string} TemplateName The name of the template you want to retrieve.
		 * @return {void} Success
		 */
		GET_GetTemplate(TemplateName: string, Action: GET_GetTemplateAction, Version: GET_GetTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetTemplate?TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Provides a list of the configuration sets associated with your Amazon SES account in the current AWS Region. For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second. This operation will return up to 1,000 configuration sets each time it is run. If your Amazon SES account has more than 1,000 configuration sets, this operation will also return a NextToken element. You can then execute the <code>ListConfigurationSets</code> operation again, passing the <code>NextToken</code> parameter and the value of the NextToken element to retrieve additional results.</p>
		 * Get #Action=ListConfigurationSets
		 * @param {string} NextToken A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position of the configuration set in the configuration set list.
		 * @param {number} MaxItems The number of configuration sets to return.
		 * @return {void} Success
		 */
		GET_ListConfigurationSets(NextToken: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListConfigurationSetsAction, Version: GET_ListConfigurationSetsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListConfigurationSets?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the existing custom verification email templates for your account in the current AWS Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=ListCustomVerificationEmailTemplates
		 * @param {string} NextToken An array the contains the name and creation time stamp for each template in your Amazon SES account.
		 * @param {number} MaxResults The maximum number of custom verification email templates to return. This value must be at least 1 and less than or equal to 50. If you do not specify a value, or if you specify a value less than 1 or greater than 50, the operation will return up to 50 results.
		 * @return {void} Success
		 */
		GET_ListCustomVerificationEmailTemplates(NextToken: string | null | undefined, MaxResults: number | null | undefined, Action: GET_ListCustomVerificationEmailTemplatesAction, Version: GET_ListCustomVerificationEmailTemplatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListCustomVerificationEmailTemplates?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list containing all of the identities (email addresses and domains) for your AWS account in the current AWS Region, regardless of verification status.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=ListIdentities
		 * @param {IdentityType} IdentityType The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities will be listed.
		 * @param {string} NextToken The token to use for pagination.
		 * @param {number} MaxItems The maximum number of identities per page. Possible values are 1-1000 inclusive.
		 * @return {void} Success
		 */
		GET_ListIdentities(IdentityType: IdentityType | null | undefined, NextToken: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListIdentitiesAction, Version: GET_ListIdentitiesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListIdentities?IdentityType=' + IdentityType + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of sending authorization policies that are attached to the given identity (an email address or a domain). This API returns only a list. If you want the actual policy content, you can use <code>GetIdentityPolicies</code>.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=ListIdentityPolicies
		 * @param {string} Identity <p>The identity that is associated with the policy for which the policies will be listed. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>
		 * @return {void} Success
		 */
		GET_ListIdentityPolicies(Identity: string, Action: GET_ListIdentityPoliciesAction, Version: GET_ListIdentityPoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListIdentityPolicies?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the IP address filters associated with your AWS account in the current AWS Region.</p> <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=ListReceiptFilters
		 * @return {void} Success
		 */
		GET_ListReceiptFilters(Action: GET_ListReceiptFiltersAction, Version: GET_ListReceiptFiltersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListReceiptFilters?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the receipt rule sets that exist under your AWS account in the current AWS Region. If there are additional receipt rule sets to be retrieved, you will receive a <code>NextToken</code> that you can provide to the next call to <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=ListReceiptRuleSets
		 * @param {string} NextToken A token returned from a previous call to <code>ListReceiptRuleSets</code> to indicate the position in the receipt rule set list.
		 * @return {void} Success
		 */
		GET_ListReceiptRuleSets(NextToken: string | null | undefined, Action: GET_ListReceiptRuleSetsAction, Version: GET_ListReceiptRuleSetsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListReceiptRuleSets?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the email templates present in your Amazon SES account in the current AWS Region.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=ListTemplates
		 * @param {string} NextToken A token returned from a previous call to <code>ListTemplates</code> to indicate the position in the list of email templates.
		 * @param {number} MaxItems The maximum number of templates to return. This value must be at least 1 and less than or equal to 10. If you do not specify a value, or if you specify a value less than 1 or greater than 10, the operation will return up to 10 results.
		 * @return {void} Success
		 */
		GET_ListTemplates(NextToken: string | null | undefined, MaxItems: number | null | undefined, Action: GET_ListTemplatesAction, Version: GET_ListTemplatesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTemplates?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxItems=' + MaxItems + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.
		 * Get #Action=ListVerifiedEmailAddresses
		 * @return {void} Success
		 */
		GET_ListVerifiedEmailAddresses(Action: GET_ListVerifiedEmailAddressesAction, Version: GET_ListVerifiedEmailAddressesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListVerifiedEmailAddresses?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses and domains associated with your account.
		 * Post #Action=ListVerifiedEmailAddresses
		 * @return {void} Success
		 */
		POST_ListVerifiedEmailAddresses(Action: GET_ListVerifiedEmailAddressesAction, Version: POST_ListVerifiedEmailAddressesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=ListVerifiedEmailAddresses?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds or updates the delivery options for a configuration set.
		 * Get #Action=PutConfigurationSetDeliveryOptions
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to specify the delivery options for.
		 * @param {GET_PutConfigurationSetDeliveryOptionsDeliveryOptions} DeliveryOptions Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
		 * @return {void} Success
		 */
		GET_PutConfigurationSetDeliveryOptions(ConfigurationSetName: string, DeliveryOptions: GET_PutConfigurationSetDeliveryOptionsDeliveryOptions | null | undefined, Action: GET_PutConfigurationSetDeliveryOptionsAction, Version: GET_PutConfigurationSetDeliveryOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutConfigurationSetDeliveryOptions?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&DeliveryOptions=' + DeliveryOptions + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds or updates a sending authorization policy for the specified identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=PutIdentityPolicy
		 * @param {string} Identity <p>The identity that the policy will apply to. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> <p>To successfully call this API, you must own the identity.</p>
		 * @param {string} PolicyName <p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>
		 * @param {string} Policy <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer Guide</a>. </p>
		 * @return {void} Success
		 */
		GET_PutIdentityPolicy(Identity: string, PolicyName: string, Policy: string, Action: GET_PutIdentityPolicyAction, Version: GET_PutIdentityPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutIdentityPolicy?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Policy=' + (Policy == null ? '' : encodeURIComponent(Policy)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Reorders the receipt rules within a receipt rule set.</p> <note> <p>All of the rules in the rule set must be represented in this request. That is, this API will return an error if the reorder request doesn't explicitly position all of the rules.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=ReorderReceiptRuleSet
		 * @param {string} RuleSetName The name of the receipt rule set to reorder.
		 * @param {Array<string>} RuleNames A list of the specified receipt rule set's receipt rules in the order that you want to put them.
		 * @return {void} Success
		 */
		GET_ReorderReceiptRuleSet(RuleSetName: string, RuleNames: Array<string>, Action: GET_ReorderReceiptRuleSetAction, Version: GET_ReorderReceiptRuleSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ReorderReceiptRuleSet?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&' + RuleNames.map(z => `RuleNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p> <note> <p>You cannot use this API to send generic bounces for mail that was not received by Amazon SES.</p> </note> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=SendBounce
		 * @param {string} OriginalMessageId The message ID of the message to be bounced.
		 * @param {string} BounceSender The address to use in the "From" header of the bounce message. This must be an identity that you have verified with Amazon SES.
		 * @param {string} Explanation Human-readable text for the bounce message to explain the failure. If not specified, the text will be auto-generated based on the bounced recipient information.
		 * @param {GET_SendBounceMessageDsn} MessageDsn Message-related DSN fields. If not specified, Amazon SES will choose the values.
		 * @param {Array<BouncedRecipientInfo>} BouncedRecipientInfoList A list of recipients of the bounced message, including the information required to create the Delivery Status Notifications (DSNs) for the recipients. You must specify at least one <code>BouncedRecipientInfo</code> in the list.
		 * @param {string} BounceSenderArn This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the address in the "From" header of the bounce. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
		 * @return {void} Success
		 */
		GET_SendBounce(OriginalMessageId: string, BounceSender: string, Explanation: string | null | undefined, MessageDsn: GET_SendBounceMessageDsn | null | undefined, BouncedRecipientInfoList: Array<BouncedRecipientInfo>, BounceSenderArn: string | null | undefined, Action: GET_SendBounceAction, Version: GET_SendBounceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SendBounce?OriginalMessageId=' + (OriginalMessageId == null ? '' : encodeURIComponent(OriginalMessageId)) + '&BounceSender=' + (BounceSender == null ? '' : encodeURIComponent(BounceSender)) + '&Explanation=' + (Explanation == null ? '' : encodeURIComponent(Explanation)) + '&MessageDsn=' + MessageDsn + '&' + BouncedRecipientInfoList.map(z => `BouncedRecipientInfoList=${z}`).join('&') + '&BounceSenderArn=' + (BounceSenderArn == null ? '' : encodeURIComponent(BounceSenderArn)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Composes an email message to multiple destinations. The message body is created using an email template.</p> <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Each <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendBulkTemplatedEmail</code> operation several times to send the message to each group.</p> </li> <li> <p>The number of destinations you can contact in a single call to the API may be limited by your account's maximum sending rate.</p> </li> </ul>
		 * Get #Action=SendBulkTemplatedEmail
		 * @param {string} Source <p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>
		 * @param {string} SourceArn <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * @param {Array<string>} ReplyToAddresses The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.
		 * @param {string} ReturnPath The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. 
		 * @param {string} ReturnPathArn <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * @param {string} ConfigurationSetName The name of the configuration set to use when you send an email using <code>SendBulkTemplatedEmail</code>.
		 * @param {Array<MessageTag>} DefaultTags A list of tags, in the form of name/value pairs, to apply to an email that you send to a destination using <code>SendBulkTemplatedEmail</code>.
		 * @param {string} Template The template to use when sending this email.
		 * @param {string} TemplateArn The ARN of the template to use when sending this email.
		 * @param {string} DefaultTemplateData <p>A list of replacement values to apply to the template when replacement data is not specified in a Destination object. These values act as a default or fallback option when no other data is available.</p> <p>The template data is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.</p>
		 * @param {Array<BulkEmailDestination>} Destinations One or more <code>Destination</code> objects. All of the recipients in a <code>Destination</code> will receive the same version of the email. You can specify up to 50 <code>Destination</code> objects within a <code>Destinations</code> array.
		 * @return {void} Success
		 */
		GET_SendBulkTemplatedEmail(Source: string, SourceArn: string | null | undefined, ReplyToAddresses: Array<string> | null | undefined, ReturnPath: string | null | undefined, ReturnPathArn: string | null | undefined, ConfigurationSetName: string | null | undefined, DefaultTags: Array<MessageTag> | null | undefined, Template: string, TemplateArn: string | null | undefined, DefaultTemplateData: string | null | undefined, Destinations: Array<BulkEmailDestination>, Action: GET_SendBulkTemplatedEmailAction, Version: GET_SendBulkTemplatedEmailVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SendBulkTemplatedEmail?Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&SourceArn=' + (SourceArn == null ? '' : encodeURIComponent(SourceArn)) + '&' + ReplyToAddresses?.map(z => `ReplyToAddresses=${encodeURIComponent(z)}`).join('&') + '&ReturnPath=' + (ReturnPath == null ? '' : encodeURIComponent(ReturnPath)) + '&ReturnPathArn=' + (ReturnPathArn == null ? '' : encodeURIComponent(ReturnPathArn)) + '&ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&' + DefaultTags?.map(z => `DefaultTags=${z}`).join('&') + '&Template=' + (Template == null ? '' : encodeURIComponent(Template)) + '&TemplateArn=' + (TemplateArn == null ? '' : encodeURIComponent(TemplateArn)) + '&DefaultTemplateData=' + (DefaultTemplateData == null ? '' : encodeURIComponent(DefaultTemplateData)) + '&' + Destinations.map(z => `Destinations=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds an email address to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=SendCustomVerificationEmail
		 * @param {string} EmailAddress The email address to verify.
		 * @param {string} TemplateName The name of the custom verification email template to use when sending the verification email.
		 * @param {string} ConfigurationSetName Name of a configuration set to use when sending the verification email.
		 * @return {void} Success
		 */
		GET_SendCustomVerificationEmail(EmailAddress: string, TemplateName: string, ConfigurationSetName: string | null | undefined, Action: GET_SendCustomVerificationEmailAction, Version: GET_SendCustomVerificationEmailVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SendCustomVerificationEmail?EmailAddress=' + (EmailAddress == null ? '' : encodeURIComponent(EmailAddress)) + '&TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Composes an email message and immediately queues it for sending. In order to send email using the <code>SendEmail</code> operation, your message must meet the following requirements:</p> <ul> <li> <p>The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation will result in an "Email address not verified" error. </p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> <li> <p>The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the <code>SendEmail</code> operation several times to send the message to each group.</p> </li> </ul> <important> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </important>
		 * Get #Action=SendEmail
		 * @param {string} Source <p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>
		 * @param {GET_SendEmailDestination} Destination The destination for this email, composed of To:, CC:, and BCC: fields.
		 * @param {GET_SendEmailMessage} Message The message to be sent.
		 * @param {Array<string>} ReplyToAddresses The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.
		 * @param {string} ReturnPath The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. 
		 * @param {string} SourceArn <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * @param {string} ReturnPathArn <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * @param {Array<MessageTag>} Tags A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
		 * @param {string} ConfigurationSetName The name of the configuration set to use when you send an email using <code>SendEmail</code>.
		 * @return {void} Success
		 */
		GET_SendEmail(Source: string, Destination: GET_SendEmailDestination, Message: GET_SendEmailMessage, ReplyToAddresses: Array<string> | null | undefined, ReturnPath: string | null | undefined, SourceArn: string | null | undefined, ReturnPathArn: string | null | undefined, Tags: Array<MessageTag> | null | undefined, ConfigurationSetName: string | null | undefined, Action: GET_SendEmailAction, Version: GET_SendEmailVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SendEmail?Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&Destination=' + Destination + '&Message=' + Message + '&' + ReplyToAddresses?.map(z => `ReplyToAddresses=${encodeURIComponent(z)}`).join('&') + '&ReturnPath=' + (ReturnPath == null ? '' : encodeURIComponent(ReturnPath)) + '&SourceArn=' + (SourceArn == null ? '' : encodeURIComponent(SourceArn)) + '&ReturnPathArn=' + (ReturnPathArn == null ? '' : encodeURIComponent(ReturnPathArn)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Composes an email message and immediately queues it for sending.</p> <p>This operation is more flexible than the <code>SendEmail</code> API operation. When you use the <code>SendRawEmail</code> operation, you can specify the headers of the message as well as its content. This flexibility is useful, for example, when you want to send a multipart MIME email (such a message that contains both a text and an HTML version). You can also use this operation to send messages that include attachments.</p> <p>The <code>SendRawEmail</code> operation has the following requirements:</p> <ul> <li> <p>You can only send email from <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">verified email addresses or domains</a>. If you try to send email from an address that isn't verified, the operation results in an "Email address not verified" error.</p> </li> <li> <p>If your account is still in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html">Amazon SES sandbox</a>, you can only send email to other verified addresses in your account, or to addresses that are associated with the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mailbox-simulator.html">Amazon SES mailbox simulator</a>.</p> </li> <li> <p>The maximum message size, including attachments, is 10 MB.</p> </li> <li> <p>Each message has to include at least one recipient address. A recipient address includes any address on the To:, CC:, or BCC: lines.</p> </li> <li> <p>If you send a single message to more than one recipient address, and one of the recipient addresses isn't in a valid format (that is, it's not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), Amazon SES rejects the entire message, even if the other addresses are valid.</p> </li> <li> <p>Each message can include up to 50 recipient addresses across the To:, CC:, or BCC: lines. If you need to send a single message to more than 50 recipients, you have to split the list of recipient addresses into groups of less than 50 recipients, and send separate messages to each group.</p> </li> <li> <p>Amazon SES allows you to specify 8-bit Content-Transfer-Encoding for MIME message parts. However, if Amazon SES has to modify the contents of your message (for example, if you use open and click tracking), 8-bit content isn't preserved. For this reason, we highly recommend that you encode all content that isn't 7-bit ASCII. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html#send-email-mime-encoding">MIME Encoding</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> </ul> <p>Additionally, keep the following considerations in mind when using the <code>SendRawEmail</code> operation:</p> <ul> <li> <p>Although you can customize the message headers when using the <code>SendRawEmail</code> operation, Amazon SES will automatically apply its own <code>Message-ID</code> and <code>Date</code> headers; if you passed these headers when creating the message, they will be overwritten by the values that Amazon SES provides.</p> </li> <li> <p>If you are using sending authorization to send on behalf of another user, <code>SendRawEmail</code> enables you to specify the cross-account identity for the email's Source, From, and Return-Path parameters in one of two ways: you can pass optional parameters <code>SourceArn</code>, <code>FromArn</code>, and/or <code>ReturnPathArn</code> to the API, or you can include the following X-headers in the header of your raw email:</p> <ul> <li> <p> <code>X-SES-SOURCE-ARN</code> </p> </li> <li> <p> <code>X-SES-FROM-ARN</code> </p> </li> <li> <p> <code>X-SES-RETURN-PATH-ARN</code> </p> </li> </ul> <important> <p>Don't include these X-headers in the DKIM signature. Amazon SES removes these before it sends the email.</p> </important> <p>If you only specify the <code>SourceIdentityArn</code> parameter, Amazon SES sets the From and Return-Path addresses to the same identity that you specified.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Using Sending Authorization with Amazon SES</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your <i>sending quota</i>). For more information about sending quotas in Amazon SES, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/manage-sending-limits.html">Managing Your Amazon SES Sending Limits</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> </ul>
		 * Get #Action=SendRawEmail
		 * @param {string} Source <p>The identity's email address. If you do not provide a value for this parameter, you must specify a "From" address in the raw text of the message. (You can also specify both.)</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in<a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note> <p>If you specify the <code>Source</code> parameter and have feedback forwarding enabled, then bounces and complaints will be sent to this email address. This takes precedence over any Return-Path header that you might include in the raw text of the message.</p>
		 * @param {Array<string>} Destinations A list of destinations for the message, consisting of To:, CC:, and BCC: addresses.
		 * @param {GET_SendRawEmailRawMessage} RawMessage <p>The raw email message itself. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by a blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For a list on unsupported content types, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types.html">Unsupported Attachment Types</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>The entire message must be base64-encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, we highly recommend that you encode that content. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Sending Raw Email</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> </ul>
		 * @param {string} FromArn <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to specify a particular "From" address in the header of the raw email.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-FROM-ARN</code> in the raw message of the email. If you use both the <code>FromArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>FromArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>
		 * @param {string} SourceArn <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-SOURCE-ARN</code> in the raw message of the email. If you use both the <code>SourceArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>SourceArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>
		 * @param {string} ReturnPathArn <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-RETURN-PATH-ARN</code> in the raw message of the email. If you use both the <code>ReturnPathArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>ReturnPathArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>
		 * @param {Array<MessageTag>} Tags A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendRawEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
		 * @param {string} ConfigurationSetName The name of the configuration set to use when you send an email using <code>SendRawEmail</code>.
		 * @return {void} Success
		 */
		GET_SendRawEmail(Source: string | null | undefined, Destinations: Array<string> | null | undefined, RawMessage: GET_SendRawEmailRawMessage, FromArn: string | null | undefined, SourceArn: string | null | undefined, ReturnPathArn: string | null | undefined, Tags: Array<MessageTag> | null | undefined, ConfigurationSetName: string | null | undefined, Action: GET_SendRawEmailAction, Version: GET_SendRawEmailVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SendRawEmail?Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&' + Destinations?.map(z => `Destinations=${encodeURIComponent(z)}`).join('&') + '&RawMessage=' + RawMessage + '&FromArn=' + (FromArn == null ? '' : encodeURIComponent(FromArn)) + '&SourceArn=' + (SourceArn == null ? '' : encodeURIComponent(SourceArn)) + '&ReturnPathArn=' + (ReturnPathArn == null ? '' : encodeURIComponent(ReturnPathArn)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Composes an email message using an email template and immediately queues it for sending.</p> <p>In order to send email using the <code>SendTemplatedEmail</code> operation, your call to the API must meet the following requirements:</p> <ul> <li> <p>The call must refer to an existing email template. You can create email templates using the <a>CreateTemplate</a> operation.</p> </li> <li> <p>The message must be sent from a verified email address or domain.</p> </li> <li> <p>If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> </li> <li> <p>The maximum message size is 10 MB.</p> </li> <li> <p>Calls to the <code>SendTemplatedEmail</code> operation may only include one <code>Destination</code> parameter. A destination is a set of recipients who will receive the same version of the email. The <code>Destination</code> parameter can include up to 50 recipients, across the To:, CC: and BCC: fields.</p> </li> <li> <p>The <code>Destination</code> parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the entire message will be rejected, even if the message contains other recipients that are valid.</p> </li> </ul> <important> <p>If your call to the <code>SendTemplatedEmail</code> operation includes all of the required parameters, Amazon SES accepts it and returns a Message ID. However, if Amazon SES can't render the email because the template contains errors, it doesn't send the email. Additionally, because it already accepted the message, Amazon SES doesn't return a message stating that it was unable to send the email.</p> <p>For these reasons, we highly recommend that you set up Amazon SES to send you notifications when Rendering Failure events occur. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Sending Personalized Email Using the Amazon SES API</a> in the <i>Amazon Simple Email Service Developer Guide</i>.</p> </important>
		 * Get #Action=SendTemplatedEmail
		 * @param {string} Source <p>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.</p> <p>If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the <code>SourceArn</code> parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in<a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note>
		 * @param {GET_SendTemplatedEmailDestination} Destination The destination for this email, composed of To:, CC:, and BCC: fields. A Destination can include up to 50 recipients across these three fields.
		 * @param {Array<string>} ReplyToAddresses The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address will receive the reply.
		 * @param {string} ReturnPath The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message will be returned from the recipient's ISP; this message will then be forwarded to the email address specified by the <code>ReturnPath</code> parameter. The <code>ReturnPath</code> parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. 
		 * @param {string} SourceArn <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * @param {string} ReturnPathArn <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * @param {Array<MessageTag>} Tags A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendTemplatedEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
		 * @param {string} ConfigurationSetName The name of the configuration set to use when you send an email using <code>SendTemplatedEmail</code>.
		 * @param {string} Template The template to use when sending this email.
		 * @param {string} TemplateArn The ARN of the template to use when sending this email.
		 * @param {string} TemplateData A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
		 * @return {void} Success
		 */
		GET_SendTemplatedEmail(Source: string, Destination: GET_SendTemplatedEmailDestination, ReplyToAddresses: Array<string> | null | undefined, ReturnPath: string | null | undefined, SourceArn: string | null | undefined, ReturnPathArn: string | null | undefined, Tags: Array<MessageTag> | null | undefined, ConfigurationSetName: string | null | undefined, Template: string, TemplateArn: string | null | undefined, TemplateData: string, Action: GET_SendTemplatedEmailAction, Version: GET_SendTemplatedEmailVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SendTemplatedEmail?Source=' + (Source == null ? '' : encodeURIComponent(Source)) + '&Destination=' + Destination + '&' + ReplyToAddresses?.map(z => `ReplyToAddresses=${encodeURIComponent(z)}`).join('&') + '&ReturnPath=' + (ReturnPath == null ? '' : encodeURIComponent(ReturnPath)) + '&SourceArn=' + (SourceArn == null ? '' : encodeURIComponent(SourceArn)) + '&ReturnPathArn=' + (ReturnPathArn == null ? '' : encodeURIComponent(ReturnPathArn)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&Template=' + (Template == null ? '' : encodeURIComponent(Template)) + '&TemplateArn=' + (TemplateArn == null ? '' : encodeURIComponent(TemplateArn)) + '&TemplateData=' + (TemplateData == null ? '' : encodeURIComponent(TemplateData)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the specified receipt rule set as the active receipt rule set.</p> <note> <p>To disable your email-receiving through Amazon SES completely, you can call this API with RuleSetName set to null.</p> </note> <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=SetActiveReceiptRuleSet
		 * @param {string} RuleSetName The name of the receipt rule set to make active. Setting this value to null disables all email receiving.
		 * @return {void} Success
		 */
		GET_SetActiveReceiptRuleSet(RuleSetName: string | null | undefined, Action: GET_SetActiveReceiptRuleSetAction, Version: GET_SetActiveReceiptRuleSetVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetActiveReceiptRuleSet?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address.</p> <note> <p>For email addresses (for example, <code>user@example.com</code>), you can only enable DKIM signing if the corresponding domain (in this case, <code>example.com</code>) has been set up to use Easy DKIM.</p> </note> <p>You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. </p> <p>You can execute this operation no more than once per second.</p> <p>For more information about Easy DKIM signing, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
		 * Get #Action=SetIdentityDkimEnabled
		 * @param {string} Identity The identity for which DKIM signing should be enabled or disabled.
		 * @param {boolean} DkimEnabled Sets whether DKIM signing is enabled for an identity. Set to <code>true</code> to enable DKIM signing for this identity; <code>false</code> to disable it. 
		 * @return {void} Success
		 */
		GET_SetIdentityDkimEnabled(Identity: string, DkimEnabled: boolean, Action: GET_SetIdentityDkimEnabledAction, Version: GET_SetIdentityDkimEnabledVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetIdentityDkimEnabled?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&DkimEnabled=' + DkimEnabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints.</p> <note> <p>Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS.</p> </note> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
		 * Get #Action=SetIdentityFeedbackForwardingEnabled
		 * @param {string} Identity The identity for which to set bounce and complaint notification forwarding. Examples: <code>user@example.com</code>, <code>example.com</code>.
		 * @param {boolean} ForwardingEnabled Sets whether Amazon SES will forward bounce and complaint notifications as email. <code>true</code> specifies that Amazon SES will forward bounce and complaint notifications as email, in addition to any Amazon SNS topic publishing otherwise specified. <code>false</code> specifies that Amazon SES will publish bounce and complaint notifications only through Amazon SNS. This value can only be set to <code>false</code> when Amazon SNS topics are set for both <code>Bounce</code> and <code>Complaint</code> notification types.
		 * @return {void} Success
		 */
		GET_SetIdentityFeedbackForwardingEnabled(Identity: string, ForwardingEnabled: boolean, Action: GET_SetIdentityFeedbackForwardingEnabledAction, Version: GET_SetIdentityFeedbackForwardingEnabledVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetIdentityFeedbackForwardingEnabled?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&ForwardingEnabled=' + ForwardingEnabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
		 * Get #Action=SetIdentityHeadersInNotificationsEnabled
		 * @param {string} Identity The identity for which to enable or disable headers in notifications. Examples: <code>user@example.com</code>, <code>example.com</code>.
		 * @param {NotificationType} NotificationType The notification type for which to enable or disable headers in notifications. 
		 * @param {boolean} Enabled <p>Sets whether Amazon SES includes the original email headers in Amazon SNS notifications of the specified notification type. A value of <code>true</code> specifies that Amazon SES will include headers in notifications, and a value of <code>false</code> specifies that Amazon SES will not include headers in notifications.</p> <p>This value can only be set when <code>NotificationType</code> is already set to use a particular Amazon SNS topic.</p>
		 * @return {void} Success
		 */
		GET_SetIdentityHeadersInNotificationsEnabled(Identity: string, NotificationType: NotificationType, Enabled: boolean, Action: GET_SetIdentityHeadersInNotificationsEnabledAction, Version: GET_SetIdentityHeadersInNotificationsEnabledVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetIdentityHeadersInNotificationsEnabled?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&NotificationType=' + NotificationType + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain).</p> <important> <p>To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. If you want your emails to pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-set.html">Amazon SES Developer Guide</a>.</p> </important> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=SetIdentityMailFromDomain
		 * @param {string} Identity The verified identity for which you want to enable or disable the specified custom MAIL FROM domain.
		 * @param {string} MailFromDomain The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain must 1) be a subdomain of the verified identity, 2) not be used in a "From" address if the MAIL FROM domain is the destination of email feedback forwarding (for more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>), and 3) not be used to receive emails. A value of <code>null</code> disables the custom MAIL FROM setting for the identity.
		 * @param {BehaviorOnMXFailure} BehaviorOnMXFailure <p>The action that you want Amazon SES to take if it cannot successfully read the required MX record when you send an email. If you choose <code>UseDefaultValue</code>, Amazon SES will use amazonses.com (or a subdomain of that) as the MAIL FROM domain. If you choose <code>RejectMessage</code>, Amazon SES will return a <code>MailFromDomainNotVerified</code> error and not send the email.</p> <p>The action specified in <code>BehaviorOnMXFailure</code> is taken when the custom MAIL FROM domain setup is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
		 * @return {void} Success
		 */
		GET_SetIdentityMailFromDomain(Identity: string, MailFromDomain: string | null | undefined, BehaviorOnMXFailure: BehaviorOnMXFailure | null | undefined, Action: GET_SetIdentityMailFromDomainAction, Version: GET_SetIdentityMailFromDomainVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetIdentityMailFromDomain?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&MailFromDomain=' + (MailFromDomain == null ? '' : encodeURIComponent(MailFromDomain)) + '&BehaviorOnMXFailure=' + BehaviorOnMXFailure + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify.</p> <p>You can execute this operation no more than once per second.</p> <p>For more information about feedback notification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES Developer Guide</a>.</p>
		 * Get #Action=SetIdentityNotificationTopic
		 * @param {string} Identity <p>The identity (email address or domain) that you want to set the Amazon SNS topic for.</p> <important> <p>You can only specify a verified identity for this parameter.</p> </important> <p>You can specify an identity by using its name or by using its Amazon Resource Name (ARN). The following examples are all valid identities: <code>sender@example.com</code>, <code>example.com</code>, <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
		 * @param {NotificationType} NotificationType The type of notifications that will be published to the specified Amazon SNS topic.
		 * @param {string} SnsTopic The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is omitted from the request or a null value is passed, <code>SnsTopic</code> is cleared and publishing is disabled.
		 * @return {void} Success
		 */
		GET_SetIdentityNotificationTopic(Identity: string, NotificationType: NotificationType, SnsTopic: string | null | undefined, Action: GET_SetIdentityNotificationTopicAction, Version: GET_SetIdentityNotificationTopicVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetIdentityNotificationTopic?Identity=' + (Identity == null ? '' : encodeURIComponent(Identity)) + '&NotificationType=' + NotificationType + '&SnsTopic=' + (SnsTopic == null ? '' : encodeURIComponent(SnsTopic)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the position of the specified receipt rule in the receipt rule set.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=SetReceiptRulePosition
		 * @param {string} RuleSetName The name of the receipt rule set that contains the receipt rule to reposition.
		 * @param {string} RuleName The name of the receipt rule to reposition.
		 * @param {string} After The name of the receipt rule after which to place the specified receipt rule.
		 * @return {void} Success
		 */
		GET_SetReceiptRulePosition(RuleSetName: string, RuleName: string, After: string | null | undefined, Action: GET_SetReceiptRulePositionAction, Version: GET_SetReceiptRulePositionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetReceiptRulePosition?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&RuleName=' + (RuleName == null ? '' : encodeURIComponent(RuleName)) + '&After=' + (After == null ? '' : encodeURIComponent(After)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=TestRenderTemplate
		 * @param {string} TemplateName The name of the template that you want to render.
		 * @param {string} TemplateData A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
		 * @return {void} Success
		 */
		GET_TestRenderTemplate(TemplateName: string, TemplateData: string, Action: GET_TestRenderTemplateAction, Version: GET_TestRenderTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TestRenderTemplate?TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&TemplateData=' + (TemplateData == null ? '' : encodeURIComponent(TemplateData)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables or disables email sending across your entire Amazon SES account in the current AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending across your Amazon SES account in a given AWS Region when reputation metrics (such as your bounce or complaint rates) reach certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=UpdateAccountSendingEnabled
		 * @param {boolean} Enabled Describes whether email sending is enabled or disabled for your Amazon SES account in the current AWS Region.
		 * @return {void} Success
		 */
		GET_UpdateAccountSendingEnabled(Enabled: boolean | null | undefined, Action: GET_UpdateAccountSendingEnabledAction, Version: GET_UpdateAccountSendingEnabledVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateAccountSendingEnabled?Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the event destination of a configuration set. Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Monitoring Your Amazon SES Sending Activity</a> in the <i>Amazon SES Developer Guide.</i> </p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=UpdateConfigurationSetEventDestination
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination that you want to update.
		 * @param {GET_UpdateConfigurationSetEventDestinationEventDestination} EventDestination The event destination object that you want to apply to the specified configuration set.
		 * @return {void} Success
		 */
		GET_UpdateConfigurationSetEventDestination(ConfigurationSetName: string, EventDestination: GET_UpdateConfigurationSetEventDestinationEventDestination, Action: GET_UpdateConfigurationSetEventDestinationAction, Version: GET_UpdateConfigurationSetEventDestinationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateConfigurationSetEventDestination?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&EventDestination=' + EventDestination + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables or disables the publishing of reputation metrics for emails sent using a specific configuration set in a given AWS Region. Reputation metrics include bounce and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can create alarms when bounce or complaint rates exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=UpdateConfigurationSetReputationMetricsEnabled
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to update.
		 * @param {boolean} Enabled Describes whether or not Amazon SES will publish reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch.
		 * @return {void} Success
		 */
		GET_UpdateConfigurationSetReputationMetricsEnabled(ConfigurationSetName: string, Enabled: boolean, Action: GET_UpdateConfigurationSetReputationMetricsEnabledAction, Version: GET_UpdateConfigurationSetReputationMetricsEnabledVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateConfigurationSetReputationMetricsEnabled?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables or disables email sending for messages sent using a specific configuration set in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms to temporarily pause email sending for a configuration set when the reputation metrics for that configuration set (such as your bounce on complaint rate) exceed certain thresholds.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=UpdateConfigurationSetSendingEnabled
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to update.
		 * @param {boolean} Enabled Describes whether email sending is enabled or disabled for the configuration set. 
		 * @return {void} Success
		 */
		GET_UpdateConfigurationSetSendingEnabled(ConfigurationSetName: string, Enabled: boolean, Action: GET_UpdateConfigurationSetSendingEnabledAction, Version: GET_UpdateConfigurationSetSendingEnabledVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateConfigurationSetSendingEnabled?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Modifies an association between a configuration set and a custom domain for open and click event tracking. </p> <p>By default, images and links used for tracking open and click events are hosted on domains operated by Amazon SES. You can configure a subdomain of your own to handle these events. For information about using custom domains, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Amazon SES Developer Guide</a>.</p>
		 * Get #Action=UpdateConfigurationSetTrackingOptions
		 * @param {string} ConfigurationSetName The name of the configuration set for which you want to update the custom tracking domain.
		 * @return {void} Success
		 */
		GET_UpdateConfigurationSetTrackingOptions(ConfigurationSetName: string, TrackingOptions: GET_UpdateConfigurationSetTrackingOptionsTrackingOptions, Action: GET_UpdateConfigurationSetTrackingOptionsAction, Version: GET_UpdateConfigurationSetTrackingOptionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateConfigurationSetTrackingOptions?ConfigurationSetName=' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '&TrackingOptions=' + TrackingOptions + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=UpdateCustomVerificationEmailTemplate
		 * @param {string} TemplateName The name of the custom verification email template that you want to update.
		 * @param {string} FromEmailAddress The email address that the custom verification email is sent from.
		 * @param {string} TemplateSubject The subject line of the custom verification email.
		 * @param {string} TemplateContent The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.
		 * @param {string} SuccessRedirectionURL The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
		 * @param {string} FailureRedirectionURL The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
		 * @return {void} Success
		 */
		GET_UpdateCustomVerificationEmailTemplate(TemplateName: string, FromEmailAddress: string | null | undefined, TemplateSubject: string | null | undefined, TemplateContent: string | null | undefined, SuccessRedirectionURL: string | null | undefined, FailureRedirectionURL: string | null | undefined, Action: GET_UpdateCustomVerificationEmailTemplateAction, Version: GET_UpdateCustomVerificationEmailTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateCustomVerificationEmailTemplate?TemplateName=' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '&FromEmailAddress=' + (FromEmailAddress == null ? '' : encodeURIComponent(FromEmailAddress)) + '&TemplateSubject=' + (TemplateSubject == null ? '' : encodeURIComponent(TemplateSubject)) + '&TemplateContent=' + (TemplateContent == null ? '' : encodeURIComponent(TemplateContent)) + '&SuccessRedirectionURL=' + (SuccessRedirectionURL == null ? '' : encodeURIComponent(SuccessRedirectionURL)) + '&FailureRedirectionURL=' + (FailureRedirectionURL == null ? '' : encodeURIComponent(FailureRedirectionURL)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates a receipt rule.</p> <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=UpdateReceiptRule
		 * @param {string} RuleSetName The name of the receipt rule set that the receipt rule belongs to.
		 * @param {GET_UpdateReceiptRuleRule} Rule A data structure that contains the updated receipt rule information.
		 * @return {void} Success
		 */
		GET_UpdateReceiptRule(RuleSetName: string, Rule: GET_UpdateReceiptRuleRule, Action: GET_UpdateReceiptRuleAction, Version: GET_UpdateReceiptRuleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateReceiptRule?RuleSetName=' + (RuleSetName == null ? '' : encodeURIComponent(RuleSetName)) + '&Rule=' + Rule + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=UpdateTemplate
		 * @return {void} Success
		 */
		GET_UpdateTemplate(Template: GET_UpdateTemplateTemplate, Action: GET_UpdateTemplateAction, Version: GET_UpdateTemplateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateTemplate?Template=' + Template + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a set of DKIM tokens for a domain identity.</p> <important> <p>When you execute the <code>VerifyDomainDkim</code> operation, the domain that you specify is added to the list of identities that are associated with your account. This is true even if you haven't already associated the domain with your account by using the <code>VerifyDomainIdentity</code> operation. However, you can't send email from the domain until you either successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">verify it</a> or you successfully <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">set up DKIM for it</a>.</p> </important> <p>You use the tokens that are generated by this operation to create CNAME records. When Amazon SES detects that you've added these records to the DNS configuration for a domain, you can start sending email from that domain. You can start sending email even if you haven't added the TXT record provided by the VerifyDomainIdentity operation to the DNS configuration for your domain. All email that you send from the domain is authenticated using DKIM.</p> <p>To create the CNAME records for DKIM authentication, use the following values:</p> <ul> <li> <p> <b>Name</b>: <i>token</i>._domainkey.<i>example.com</i> </p> </li> <li> <p> <b>Type</b>: CNAME</p> </li> <li> <p> <b>Value</b>: <i>token</i>.dkim.amazonses.com</p> </li> </ul> <p>In the preceding example, replace <i>token</i> with one of the tokens that are generated when you execute this operation. Replace <i>example.com</i> with your domain. Repeat this process for each token that's generated by this operation.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=VerifyDomainDkim
		 * @param {string} Domain The name of the domain to be verified for Easy DKIM signing.
		 * @return {void} Success
		 */
		GET_VerifyDomainDkim(Domain: string, Action: GET_VerifyDomainDkimAction, Version: GET_VerifyDomainDkimVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=VerifyDomainDkim?Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds a domain to the list of identities for your Amazon SES account in the current AWS Region and attempts to verify it. For more information about verifying domains, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer Guide.</i> </p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=VerifyDomainIdentity
		 * @param {string} Domain The domain to be verified.
		 * @return {void} Success
		 */
		GET_VerifyDomainIdentity(Domain: string, Action: GET_VerifyDomainIdentityAction, Version: GET_VerifyDomainIdentityVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=VerifyDomainIdentity?Domain=' + (Domain == null ? '' : encodeURIComponent(Domain)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email address.
		 * Get #Action=VerifyEmailAddress
		 * @param {string} EmailAddress The email address to be verified.
		 * @return {void} Success
		 */
		GET_VerifyEmailAddress(EmailAddress: string, Action: GET_VerifyEmailAddressAction, Version: GET_VerifyEmailAddressVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=VerifyEmailAddress?EmailAddress=' + (EmailAddress == null ? '' : encodeURIComponent(EmailAddress)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds an email address to the list of identities for your Amazon SES account in the current AWS region and attempts to verify it. As a result of executing this operation, a verification email is sent to the specified address.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get #Action=VerifyEmailIdentity
		 * @param {string} EmailAddress The email address to be verified.
		 * @return {void} Success
		 */
		GET_VerifyEmailIdentity(EmailAddress: string, Action: GET_VerifyEmailIdentityAction, Version: GET_VerifyEmailIdentityVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=VerifyEmailIdentity?EmailAddress=' + (EmailAddress == null ? '' : encodeURIComponent(EmailAddress)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_CloneReceiptRuleSetAction { CloneReceiptRuleSet = 0 }

	export enum GET_CloneReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum POST_CloneReceiptRuleSetVersion { _2010_12_01 = 0 }

	export interface GET_CreateConfigurationSetConfigurationSet {
		Name: string;
	}
	export interface GET_CreateConfigurationSetConfigurationSetFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateConfigurationSetConfigurationSetFormGroup() {
		return new FormGroup<GET_CreateConfigurationSetConfigurationSetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_CreateConfigurationSetAction { CreateConfigurationSet = 0 }

	export enum GET_CreateConfigurationSetVersion { _2010_12_01 = 0 }

	export enum POST_CreateConfigurationSetVersion { _2010_12_01 = 0 }

	export interface GET_CreateConfigurationSetEventDestinationEventDestination {
		Name: string;
		Enabled?: boolean | null;
		MatchingEventTypes: Array<EventType>;

		/** <p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
		CloudWatchDestination?: CloudWatchDestination;

		/** <p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
		SNSDestination?: SNSDestination;
	}
	export interface GET_CreateConfigurationSetEventDestinationEventDestinationFormProperties {
		Name: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_CreateConfigurationSetEventDestinationEventDestinationFormGroup() {
		return new FormGroup<GET_CreateConfigurationSetEventDestinationEventDestinationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_CreateConfigurationSetEventDestinationAction { CreateConfigurationSetEventDestination = 0 }

	export enum GET_CreateConfigurationSetEventDestinationVersion { _2010_12_01 = 0 }

	export enum POST_CreateConfigurationSetEventDestinationVersion { _2010_12_01 = 0 }

	export interface GET_CreateConfigurationSetTrackingOptionsTrackingOptions {
		CustomRedirectDomain?: string | null;
	}
	export interface GET_CreateConfigurationSetTrackingOptionsTrackingOptionsFormProperties {
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateConfigurationSetTrackingOptionsTrackingOptionsFormGroup() {
		return new FormGroup<GET_CreateConfigurationSetTrackingOptionsTrackingOptionsFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_CreateConfigurationSetTrackingOptionsAction { CreateConfigurationSetTrackingOptions = 0 }

	export enum GET_CreateConfigurationSetTrackingOptionsVersion { _2010_12_01 = 0 }

	export enum POST_CreateConfigurationSetTrackingOptionsVersion { _2010_12_01 = 0 }

	export enum GET_CreateCustomVerificationEmailTemplateAction { CreateCustomVerificationEmailTemplate = 0 }

	export enum GET_CreateCustomVerificationEmailTemplateVersion { _2010_12_01 = 0 }

	export enum POST_CreateCustomVerificationEmailTemplateVersion { _2010_12_01 = 0 }

	export interface GET_CreateReceiptFilterFilter {
		Name: string;

		/**
		 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.</p> <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 */
		IpFilter: ReceiptIpFilter;
	}
	export interface GET_CreateReceiptFilterFilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateReceiptFilterFilterFormGroup() {
		return new FormGroup<GET_CreateReceiptFilterFilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_CreateReceiptFilterAction { CreateReceiptFilter = 0 }

	export enum GET_CreateReceiptFilterVersion { _2010_12_01 = 0 }

	export enum POST_CreateReceiptFilterVersion { _2010_12_01 = 0 }

	export interface GET_CreateReceiptRuleRule {
		Name: string;
		Enabled?: boolean | null;
		TlsPolicy?: TlsPolicy | null;
		Recipients?: Array<string>;
		Actions?: Array<ReceiptAction>;
		ScanEnabled?: boolean | null;
	}
	export interface GET_CreateReceiptRuleRuleFormProperties {
		Name: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
		ScanEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_CreateReceiptRuleRuleFormGroup() {
		return new FormGroup<GET_CreateReceiptRuleRuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			ScanEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_CreateReceiptRuleAction { CreateReceiptRule = 0 }

	export enum GET_CreateReceiptRuleVersion { _2010_12_01 = 0 }

	export enum POST_CreateReceiptRuleVersion { _2010_12_01 = 0 }

	export enum GET_CreateReceiptRuleSetAction { CreateReceiptRuleSet = 0 }

	export enum GET_CreateReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum POST_CreateReceiptRuleSetVersion { _2010_12_01 = 0 }

	export interface GET_CreateTemplateTemplate {
		TemplateName: string;
		SubjectPart?: string | null;
		TextPart?: string | null;
		HtmlPart?: string | null;
	}
	export interface GET_CreateTemplateTemplateFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		SubjectPart: FormControl<string | null | undefined>,
		TextPart: FormControl<string | null | undefined>,
		HtmlPart: FormControl<string | null | undefined>,
	}
	export function CreateGET_CreateTemplateTemplateFormGroup() {
		return new FormGroup<GET_CreateTemplateTemplateFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			SubjectPart: new FormControl<string | null | undefined>(undefined),
			TextPart: new FormControl<string | null | undefined>(undefined),
			HtmlPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_CreateTemplateAction { CreateTemplate = 0 }

	export enum GET_CreateTemplateVersion { _2010_12_01 = 0 }

	export enum POST_CreateTemplateVersion { _2010_12_01 = 0 }

	export enum GET_DeleteConfigurationSetAction { DeleteConfigurationSet = 0 }

	export enum GET_DeleteConfigurationSetVersion { _2010_12_01 = 0 }

	export enum POST_DeleteConfigurationSetVersion { _2010_12_01 = 0 }

	export enum GET_DeleteConfigurationSetEventDestinationAction { DeleteConfigurationSetEventDestination = 0 }

	export enum GET_DeleteConfigurationSetEventDestinationVersion { _2010_12_01 = 0 }

	export enum POST_DeleteConfigurationSetEventDestinationVersion { _2010_12_01 = 0 }

	export enum GET_DeleteConfigurationSetTrackingOptionsAction { DeleteConfigurationSetTrackingOptions = 0 }

	export enum GET_DeleteConfigurationSetTrackingOptionsVersion { _2010_12_01 = 0 }

	export enum POST_DeleteConfigurationSetTrackingOptionsVersion { _2010_12_01 = 0 }

	export enum GET_DeleteCustomVerificationEmailTemplateAction { DeleteCustomVerificationEmailTemplate = 0 }

	export enum GET_DeleteCustomVerificationEmailTemplateVersion { _2010_12_01 = 0 }

	export enum POST_DeleteCustomVerificationEmailTemplateVersion { _2010_12_01 = 0 }

	export enum GET_DeleteIdentityAction { DeleteIdentity = 0 }

	export enum GET_DeleteIdentityVersion { _2010_12_01 = 0 }

	export enum POST_DeleteIdentityVersion { _2010_12_01 = 0 }

	export enum GET_DeleteIdentityPolicyAction { DeleteIdentityPolicy = 0 }

	export enum GET_DeleteIdentityPolicyVersion { _2010_12_01 = 0 }

	export enum POST_DeleteIdentityPolicyVersion { _2010_12_01 = 0 }

	export enum GET_DeleteReceiptFilterAction { DeleteReceiptFilter = 0 }

	export enum GET_DeleteReceiptFilterVersion { _2010_12_01 = 0 }

	export enum POST_DeleteReceiptFilterVersion { _2010_12_01 = 0 }

	export enum GET_DeleteReceiptRuleAction { DeleteReceiptRule = 0 }

	export enum GET_DeleteReceiptRuleVersion { _2010_12_01 = 0 }

	export enum POST_DeleteReceiptRuleVersion { _2010_12_01 = 0 }

	export enum GET_DeleteReceiptRuleSetAction { DeleteReceiptRuleSet = 0 }

	export enum GET_DeleteReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum POST_DeleteReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum GET_DeleteTemplateAction { DeleteTemplate = 0 }

	export enum GET_DeleteTemplateVersion { _2010_12_01 = 0 }

	export enum POST_DeleteTemplateVersion { _2010_12_01 = 0 }

	export enum GET_DeleteVerifiedEmailAddressAction { DeleteVerifiedEmailAddress = 0 }

	export enum GET_DeleteVerifiedEmailAddressVersion { _2010_12_01 = 0 }

	export enum POST_DeleteVerifiedEmailAddressVersion { _2010_12_01 = 0 }

	export enum GET_DescribeActiveReceiptRuleSetAction { DescribeActiveReceiptRuleSet = 0 }

	export enum GET_DescribeActiveReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum POST_DescribeActiveReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum GET_DescribeConfigurationSetAction { DescribeConfigurationSet = 0 }

	export enum GET_DescribeConfigurationSetVersion { _2010_12_01 = 0 }

	export enum POST_DescribeConfigurationSetVersion { _2010_12_01 = 0 }

	export enum GET_DescribeReceiptRuleAction { DescribeReceiptRule = 0 }

	export enum GET_DescribeReceiptRuleVersion { _2010_12_01 = 0 }

	export enum POST_DescribeReceiptRuleVersion { _2010_12_01 = 0 }

	export enum GET_DescribeReceiptRuleSetAction { DescribeReceiptRuleSet = 0 }

	export enum GET_DescribeReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum POST_DescribeReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum GET_GetAccountSendingEnabledAction { GetAccountSendingEnabled = 0 }

	export enum GET_GetAccountSendingEnabledVersion { _2010_12_01 = 0 }

	export enum POST_GetAccountSendingEnabledVersion { _2010_12_01 = 0 }

	export enum GET_GetCustomVerificationEmailTemplateAction { GetCustomVerificationEmailTemplate = 0 }

	export enum GET_GetCustomVerificationEmailTemplateVersion { _2010_12_01 = 0 }

	export enum POST_GetCustomVerificationEmailTemplateVersion { _2010_12_01 = 0 }

	export enum GET_GetIdentityDkimAttributesAction { GetIdentityDkimAttributes = 0 }

	export enum GET_GetIdentityDkimAttributesVersion { _2010_12_01 = 0 }

	export enum POST_GetIdentityDkimAttributesVersion { _2010_12_01 = 0 }

	export enum GET_GetIdentityMailFromDomainAttributesAction { GetIdentityMailFromDomainAttributes = 0 }

	export enum GET_GetIdentityMailFromDomainAttributesVersion { _2010_12_01 = 0 }

	export enum POST_GetIdentityMailFromDomainAttributesVersion { _2010_12_01 = 0 }

	export enum GET_GetIdentityNotificationAttributesAction { GetIdentityNotificationAttributes = 0 }

	export enum GET_GetIdentityNotificationAttributesVersion { _2010_12_01 = 0 }

	export enum POST_GetIdentityNotificationAttributesVersion { _2010_12_01 = 0 }

	export enum GET_GetIdentityPoliciesAction { GetIdentityPolicies = 0 }

	export enum GET_GetIdentityPoliciesVersion { _2010_12_01 = 0 }

	export enum POST_GetIdentityPoliciesVersion { _2010_12_01 = 0 }

	export enum GET_GetIdentityVerificationAttributesAction { GetIdentityVerificationAttributes = 0 }

	export enum GET_GetIdentityVerificationAttributesVersion { _2010_12_01 = 0 }

	export enum POST_GetIdentityVerificationAttributesVersion { _2010_12_01 = 0 }

	export enum GET_GetSendQuotaAction { GetSendQuota = 0 }

	export enum GET_GetSendQuotaVersion { _2010_12_01 = 0 }

	export enum POST_GetSendQuotaVersion { _2010_12_01 = 0 }

	export enum GET_GetSendStatisticsAction { GetSendStatistics = 0 }

	export enum GET_GetSendStatisticsVersion { _2010_12_01 = 0 }

	export enum POST_GetSendStatisticsVersion { _2010_12_01 = 0 }

	export enum GET_GetTemplateAction { GetTemplate = 0 }

	export enum GET_GetTemplateVersion { _2010_12_01 = 0 }

	export enum POST_GetTemplateVersion { _2010_12_01 = 0 }

	export enum GET_ListConfigurationSetsAction { ListConfigurationSets = 0 }

	export enum GET_ListConfigurationSetsVersion { _2010_12_01 = 0 }

	export enum POST_ListConfigurationSetsVersion { _2010_12_01 = 0 }

	export enum GET_ListCustomVerificationEmailTemplatesAction { ListCustomVerificationEmailTemplates = 0 }

	export enum GET_ListCustomVerificationEmailTemplatesVersion { _2010_12_01 = 0 }

	export enum POST_ListCustomVerificationEmailTemplatesVersion { _2010_12_01 = 0 }

	export enum GET_ListIdentitiesAction { ListIdentities = 0 }

	export enum GET_ListIdentitiesVersion { _2010_12_01 = 0 }

	export enum POST_ListIdentitiesVersion { _2010_12_01 = 0 }

	export enum GET_ListIdentityPoliciesAction { ListIdentityPolicies = 0 }

	export enum GET_ListIdentityPoliciesVersion { _2010_12_01 = 0 }

	export enum POST_ListIdentityPoliciesVersion { _2010_12_01 = 0 }

	export enum GET_ListReceiptFiltersAction { ListReceiptFilters = 0 }

	export enum GET_ListReceiptFiltersVersion { _2010_12_01 = 0 }

	export enum POST_ListReceiptFiltersVersion { _2010_12_01 = 0 }

	export enum GET_ListReceiptRuleSetsAction { ListReceiptRuleSets = 0 }

	export enum GET_ListReceiptRuleSetsVersion { _2010_12_01 = 0 }

	export enum POST_ListReceiptRuleSetsVersion { _2010_12_01 = 0 }

	export enum GET_ListTemplatesAction { ListTemplates = 0 }

	export enum GET_ListTemplatesVersion { _2010_12_01 = 0 }

	export enum POST_ListTemplatesVersion { _2010_12_01 = 0 }

	export enum GET_ListVerifiedEmailAddressesAction { ListVerifiedEmailAddresses = 0 }

	export enum GET_ListVerifiedEmailAddressesVersion { _2010_12_01 = 0 }

	export enum POST_ListVerifiedEmailAddressesVersion { _2010_12_01 = 0 }

	export interface GET_PutConfigurationSetDeliveryOptionsDeliveryOptions {
		TlsPolicy?: TlsPolicy | null;
	}
	export interface GET_PutConfigurationSetDeliveryOptionsDeliveryOptionsFormProperties {
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
	}
	export function CreateGET_PutConfigurationSetDeliveryOptionsDeliveryOptionsFormGroup() {
		return new FormGroup<GET_PutConfigurationSetDeliveryOptionsDeliveryOptionsFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
		});

	}

	export enum GET_PutConfigurationSetDeliveryOptionsAction { PutConfigurationSetDeliveryOptions = 0 }

	export enum GET_PutConfigurationSetDeliveryOptionsVersion { _2010_12_01 = 0 }

	export enum POST_PutConfigurationSetDeliveryOptionsVersion { _2010_12_01 = 0 }

	export enum GET_PutIdentityPolicyAction { PutIdentityPolicy = 0 }

	export enum GET_PutIdentityPolicyVersion { _2010_12_01 = 0 }

	export enum POST_PutIdentityPolicyVersion { _2010_12_01 = 0 }

	export enum GET_ReorderReceiptRuleSetAction { ReorderReceiptRuleSet = 0 }

	export enum GET_ReorderReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum POST_ReorderReceiptRuleSetVersion { _2010_12_01 = 0 }

	export interface GET_SendBounceMessageDsn {
		ReportingMta: string;
		ArrivalDate?: Date | null;
		ExtensionFields?: Array<ExtensionField>;
	}
	export interface GET_SendBounceMessageDsnFormProperties {
		ReportingMta: FormControl<string | null | undefined>,
		ArrivalDate: FormControl<Date | null | undefined>,
	}
	export function CreateGET_SendBounceMessageDsnFormGroup() {
		return new FormGroup<GET_SendBounceMessageDsnFormProperties>({
			ReportingMta: new FormControl<string | null | undefined>(undefined),
			ArrivalDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GET_SendBounceAction { SendBounce = 0 }

	export enum GET_SendBounceVersion { _2010_12_01 = 0 }

	export enum POST_SendBounceVersion { _2010_12_01 = 0 }

	export enum GET_SendBulkTemplatedEmailAction { SendBulkTemplatedEmail = 0 }

	export enum GET_SendBulkTemplatedEmailVersion { _2010_12_01 = 0 }

	export enum POST_SendBulkTemplatedEmailVersion { _2010_12_01 = 0 }

	export enum GET_SendCustomVerificationEmailAction { SendCustomVerificationEmail = 0 }

	export enum GET_SendCustomVerificationEmailVersion { _2010_12_01 = 0 }

	export enum POST_SendCustomVerificationEmailVersion { _2010_12_01 = 0 }

	export interface GET_SendEmailDestination {
		ToAddresses?: Array<string>;
		CcAddresses?: Array<string>;
		BccAddresses?: Array<string>;
	}
	export interface GET_SendEmailDestinationFormProperties {
	}
	export function CreateGET_SendEmailDestinationFormGroup() {
		return new FormGroup<GET_SendEmailDestinationFormProperties>({
		});

	}

	export interface GET_SendEmailMessage {

		/**
		 * <p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p>
		 * Required
		 */
		Subject: Content;

		/**
		 * Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients.
		 * Required
		 */
		Body: Body;
	}
	export interface GET_SendEmailMessageFormProperties {
	}
	export function CreateGET_SendEmailMessageFormGroup() {
		return new FormGroup<GET_SendEmailMessageFormProperties>({
		});

	}

	export enum GET_SendEmailAction { SendEmail = 0 }

	export enum GET_SendEmailVersion { _2010_12_01 = 0 }

	export enum POST_SendEmailVersion { _2010_12_01 = 0 }

	export interface GET_SendRawEmailRawMessage {
		Data: string;
	}
	export interface GET_SendRawEmailRawMessageFormProperties {
		Data: FormControl<string | null | undefined>,
	}
	export function CreateGET_SendRawEmailRawMessageFormGroup() {
		return new FormGroup<GET_SendRawEmailRawMessageFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_SendRawEmailAction { SendRawEmail = 0 }

	export enum GET_SendRawEmailVersion { _2010_12_01 = 0 }

	export enum POST_SendRawEmailVersion { _2010_12_01 = 0 }

	export interface GET_SendTemplatedEmailDestination {
		ToAddresses?: Array<string>;
		CcAddresses?: Array<string>;
		BccAddresses?: Array<string>;
	}
	export interface GET_SendTemplatedEmailDestinationFormProperties {
	}
	export function CreateGET_SendTemplatedEmailDestinationFormGroup() {
		return new FormGroup<GET_SendTemplatedEmailDestinationFormProperties>({
		});

	}

	export enum GET_SendTemplatedEmailAction { SendTemplatedEmail = 0 }

	export enum GET_SendTemplatedEmailVersion { _2010_12_01 = 0 }

	export enum POST_SendTemplatedEmailVersion { _2010_12_01 = 0 }

	export enum GET_SetActiveReceiptRuleSetAction { SetActiveReceiptRuleSet = 0 }

	export enum GET_SetActiveReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum POST_SetActiveReceiptRuleSetVersion { _2010_12_01 = 0 }

	export enum GET_SetIdentityDkimEnabledAction { SetIdentityDkimEnabled = 0 }

	export enum GET_SetIdentityDkimEnabledVersion { _2010_12_01 = 0 }

	export enum POST_SetIdentityDkimEnabledVersion { _2010_12_01 = 0 }

	export enum GET_SetIdentityFeedbackForwardingEnabledAction { SetIdentityFeedbackForwardingEnabled = 0 }

	export enum GET_SetIdentityFeedbackForwardingEnabledVersion { _2010_12_01 = 0 }

	export enum POST_SetIdentityFeedbackForwardingEnabledVersion { _2010_12_01 = 0 }

	export enum GET_SetIdentityHeadersInNotificationsEnabledAction { SetIdentityHeadersInNotificationsEnabled = 0 }

	export enum GET_SetIdentityHeadersInNotificationsEnabledVersion { _2010_12_01 = 0 }

	export enum POST_SetIdentityHeadersInNotificationsEnabledVersion { _2010_12_01 = 0 }

	export enum GET_SetIdentityMailFromDomainAction { SetIdentityMailFromDomain = 0 }

	export enum GET_SetIdentityMailFromDomainVersion { _2010_12_01 = 0 }

	export enum POST_SetIdentityMailFromDomainVersion { _2010_12_01 = 0 }

	export enum GET_SetIdentityNotificationTopicAction { SetIdentityNotificationTopic = 0 }

	export enum GET_SetIdentityNotificationTopicVersion { _2010_12_01 = 0 }

	export enum POST_SetIdentityNotificationTopicVersion { _2010_12_01 = 0 }

	export enum GET_SetReceiptRulePositionAction { SetReceiptRulePosition = 0 }

	export enum GET_SetReceiptRulePositionVersion { _2010_12_01 = 0 }

	export enum POST_SetReceiptRulePositionVersion { _2010_12_01 = 0 }

	export enum GET_TestRenderTemplateAction { TestRenderTemplate = 0 }

	export enum GET_TestRenderTemplateVersion { _2010_12_01 = 0 }

	export enum POST_TestRenderTemplateVersion { _2010_12_01 = 0 }

	export enum GET_UpdateAccountSendingEnabledAction { UpdateAccountSendingEnabled = 0 }

	export enum GET_UpdateAccountSendingEnabledVersion { _2010_12_01 = 0 }

	export enum POST_UpdateAccountSendingEnabledVersion { _2010_12_01 = 0 }

	export interface GET_UpdateConfigurationSetEventDestinationEventDestination {
		Name: string;
		Enabled?: boolean | null;
		MatchingEventTypes: Array<EventType>;

		/** <p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p> <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** <p>Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.</p> <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
		CloudWatchDestination?: CloudWatchDestination;

		/** <p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p> <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p> */
		SNSDestination?: SNSDestination;
	}
	export interface GET_UpdateConfigurationSetEventDestinationEventDestinationFormProperties {
		Name: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_UpdateConfigurationSetEventDestinationEventDestinationFormGroup() {
		return new FormGroup<GET_UpdateConfigurationSetEventDestinationEventDestinationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateConfigurationSetEventDestinationAction { UpdateConfigurationSetEventDestination = 0 }

	export enum GET_UpdateConfigurationSetEventDestinationVersion { _2010_12_01 = 0 }

	export enum POST_UpdateConfigurationSetEventDestinationVersion { _2010_12_01 = 0 }

	export enum GET_UpdateConfigurationSetReputationMetricsEnabledAction { UpdateConfigurationSetReputationMetricsEnabled = 0 }

	export enum GET_UpdateConfigurationSetReputationMetricsEnabledVersion { _2010_12_01 = 0 }

	export enum POST_UpdateConfigurationSetReputationMetricsEnabledVersion { _2010_12_01 = 0 }

	export enum GET_UpdateConfigurationSetSendingEnabledAction { UpdateConfigurationSetSendingEnabled = 0 }

	export enum GET_UpdateConfigurationSetSendingEnabledVersion { _2010_12_01 = 0 }

	export enum POST_UpdateConfigurationSetSendingEnabledVersion { _2010_12_01 = 0 }

	export interface GET_UpdateConfigurationSetTrackingOptionsTrackingOptions {
		CustomRedirectDomain?: string | null;
	}
	export interface GET_UpdateConfigurationSetTrackingOptionsTrackingOptionsFormProperties {
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreateGET_UpdateConfigurationSetTrackingOptionsTrackingOptionsFormGroup() {
		return new FormGroup<GET_UpdateConfigurationSetTrackingOptionsTrackingOptionsFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateConfigurationSetTrackingOptionsAction { UpdateConfigurationSetTrackingOptions = 0 }

	export enum GET_UpdateConfigurationSetTrackingOptionsVersion { _2010_12_01 = 0 }

	export enum POST_UpdateConfigurationSetTrackingOptionsVersion { _2010_12_01 = 0 }

	export enum GET_UpdateCustomVerificationEmailTemplateAction { UpdateCustomVerificationEmailTemplate = 0 }

	export enum GET_UpdateCustomVerificationEmailTemplateVersion { _2010_12_01 = 0 }

	export enum POST_UpdateCustomVerificationEmailTemplateVersion { _2010_12_01 = 0 }

	export interface GET_UpdateReceiptRuleRule {
		Name: string;
		Enabled?: boolean | null;
		TlsPolicy?: TlsPolicy | null;
		Recipients?: Array<string>;
		Actions?: Array<ReceiptAction>;
		ScanEnabled?: boolean | null;
	}
	export interface GET_UpdateReceiptRuleRuleFormProperties {
		Name: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
		ScanEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGET_UpdateReceiptRuleRuleFormGroup() {
		return new FormGroup<GET_UpdateReceiptRuleRuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			ScanEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateReceiptRuleAction { UpdateReceiptRule = 0 }

	export enum GET_UpdateReceiptRuleVersion { _2010_12_01 = 0 }

	export enum POST_UpdateReceiptRuleVersion { _2010_12_01 = 0 }

	export interface GET_UpdateTemplateTemplate {
		TemplateName: string;
		SubjectPart?: string | null;
		TextPart?: string | null;
		HtmlPart?: string | null;
	}
	export interface GET_UpdateTemplateTemplateFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		SubjectPart: FormControl<string | null | undefined>,
		TextPart: FormControl<string | null | undefined>,
		HtmlPart: FormControl<string | null | undefined>,
	}
	export function CreateGET_UpdateTemplateTemplateFormGroup() {
		return new FormGroup<GET_UpdateTemplateTemplateFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			SubjectPart: new FormControl<string | null | undefined>(undefined),
			TextPart: new FormControl<string | null | undefined>(undefined),
			HtmlPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GET_UpdateTemplateAction { UpdateTemplate = 0 }

	export enum GET_UpdateTemplateVersion { _2010_12_01 = 0 }

	export enum POST_UpdateTemplateVersion { _2010_12_01 = 0 }

	export enum GET_VerifyDomainDkimAction { VerifyDomainDkim = 0 }

	export enum GET_VerifyDomainDkimVersion { _2010_12_01 = 0 }

	export enum POST_VerifyDomainDkimVersion { _2010_12_01 = 0 }

	export enum GET_VerifyDomainIdentityAction { VerifyDomainIdentity = 0 }

	export enum GET_VerifyDomainIdentityVersion { _2010_12_01 = 0 }

	export enum POST_VerifyDomainIdentityVersion { _2010_12_01 = 0 }

	export enum GET_VerifyEmailAddressAction { VerifyEmailAddress = 0 }

	export enum GET_VerifyEmailAddressVersion { _2010_12_01 = 0 }

	export enum POST_VerifyEmailAddressVersion { _2010_12_01 = 0 }

	export enum GET_VerifyEmailIdentityAction { VerifyEmailIdentity = 0 }

	export enum GET_VerifyEmailIdentityVersion { _2010_12_01 = 0 }

	export enum POST_VerifyEmailIdentityVersion { _2010_12_01 = 0 }

}

