import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateConfigurationSetResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateConfigurationSetResponseFormProperties {
	}
	export function CreateCreateConfigurationSetResponseFormGroup() {
		return new FormGroup<CreateConfigurationSetResponseFormProperties>({
		});

	}


	/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
	export enum TlsPolicy { REQUIRE = 0, OPTIONAL = 1 }


	/** <p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.</p> </li> </ul> */
	export interface Tag {
		Key: string;
		Value: string;
	}

	/** <p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.</p> </li> </ul> */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul> */
	export enum SuppressionListReason { BOUNCE = 0, COMPLAINT = 1 }

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
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

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateConfigurationSetEventDestinationResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateCreateConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** An email sending event type. For example, email sends, opens, and bounces are all email events. */
	export enum EventType { SEND = 0, REJECT = 1, BOUNCE = 2, COMPLAINT = 3, DELIVERY = 4, OPEN = 5, CLICK = 6, RENDERING_FAILURE = 7 }


	/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
	export interface KinesisFirehoseDestination {
		IamRoleArn: string;
		DeliveryStreamArn: string;
	}

	/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
	export interface KinesisFirehoseDestinationFormProperties {
		IamRoleArn: FormControl<string | null | undefined>,
		DeliveryStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseDestinationFormGroup() {
		return new FormGroup<KinesisFirehoseDestinationFormProperties>({
			IamRoleArn: new FormControl<string | null | undefined>(undefined),
			DeliveryStreamArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
	export interface CloudWatchDestination {
		DimensionConfigurations: Array<CloudWatchDimensionConfiguration>;
	}

	/** An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
	export interface CloudWatchDestinationFormProperties {
	}
	export function CreateCloudWatchDestinationFormGroup() {
		return new FormGroup<CloudWatchDestinationFormProperties>({
		});

	}


	/** An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch. */
	export interface CloudWatchDimensionConfiguration {

		/**
		 * <p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
		 * Required
		 */
		DimensionName: string;

		/**
		 * The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. If you want to use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose <code>messageTag</code>. If you want to use your own email headers, choose <code>emailHeader</code>. If you want to use link tags, choose <code>linkTags</code>.
		 * Required
		 */
		DimensionValueSource: CloudWatchDimensionConfigurationDimensionValueSource;

		/**
		 * <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
		 * Required
		 */
		DefaultDimensionValue: string;
	}

	/** An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch. */
	export interface CloudWatchDimensionConfigurationFormProperties {

		/**
		 * <p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
		 * Required
		 */
		DimensionName: FormControl<string | null | undefined>,

		/**
		 * The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. If you want to use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose <code>messageTag</code>. If you want to use your own email headers, choose <code>emailHeader</code>. If you want to use link tags, choose <code>linkTags</code>.
		 * Required
		 */
		DimensionValueSource: FormControl<CloudWatchDimensionConfigurationDimensionValueSource | null | undefined>,

		/**
		 * <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
		 * Required
		 */
		DefaultDimensionValue: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchDimensionConfigurationFormGroup() {
		return new FormGroup<CloudWatchDimensionConfigurationFormProperties>({
			DimensionName: new FormControl<string | null | undefined>(undefined),
			DimensionValueSource: new FormControl<CloudWatchDimensionConfigurationDimensionValueSource | null | undefined>(undefined),
			DefaultDimensionValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudWatchDimensionConfigurationDimensionValueSource { MESSAGE_TAG = 0, EMAIL_HEADER = 1, LINK_TAG = 2 }


	/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
	export interface SnsDestination {
		TopicArn: string;
	}

	/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
	export interface SnsDestinationFormProperties {
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateSnsDestinationFormGroup() {
		return new FormGroup<SnsDestinationFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>. */
	export interface PinpointDestination {
		ApplicationArn?: string | null;
	}

	/** An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>. */
	export interface PinpointDestinationFormProperties {
		ApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreatePinpointDestinationFormGroup() {
		return new FormGroup<PinpointDestinationFormProperties>({
			ApplicationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateDedicatedIpPoolResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateDedicatedIpPoolResponseFormProperties {
	}
	export function CreateCreateDedicatedIpPoolResponseFormGroup() {
		return new FormGroup<CreateDedicatedIpPoolResponseFormProperties>({
		});

	}


	/** Information about the predictive inbox placement test that you created. */
	export interface CreateDeliverabilityTestReportResponse {

		/**
		 * A unique string that identifies a Deliverability dashboard report.
		 * Required
		 */
		ReportId: string;

		/**
		 * The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
		 * Required
		 */
		DeliverabilityTestStatus: CreateDeliverabilityTestReportResponseDeliverabilityTestStatus;
	}

	/** Information about the predictive inbox placement test that you created. */
	export interface CreateDeliverabilityTestReportResponseFormProperties {

		/**
		 * A unique string that identifies a Deliverability dashboard report.
		 * Required
		 */
		ReportId: FormControl<string | null | undefined>,

		/**
		 * The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
		 * Required
		 */
		DeliverabilityTestStatus: FormControl<CreateDeliverabilityTestReportResponseDeliverabilityTestStatus | null | undefined>,
	}
	export function CreateCreateDeliverabilityTestReportResponseFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportResponseFormProperties>({
			ReportId: new FormControl<string | null | undefined>(undefined),
			DeliverabilityTestStatus: new FormControl<CreateDeliverabilityTestReportResponseDeliverabilityTestStatus | null | undefined>(undefined),
		});

	}

	export enum CreateDeliverabilityTestReportResponseDeliverabilityTestStatus { IN_PROGRESS = 0, COMPLETED = 1 }


	/** Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
	export interface Message {

		/**
		 * An object that represents the content of the email, and optionally a character set specification.
		 * Required
		 */
		Subject: Content;

		/**
		 * Represents the body of the email message.
		 * Required
		 */
		Body: Body;
	}

	/** Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
	export interface MessageFormProperties {
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
		});

	}


	/** An object that represents the content of the email, and optionally a character set specification. */
	export interface Content {
		Data: string;
		Charset?: string | null;
	}

	/** An object that represents the content of the email, and optionally a character set specification. */
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


	/** Represents the body of the email message. */
	export interface Body {

		/** An object that represents the content of the email, and optionally a character set specification. */
		Text?: Content;

		/** An object that represents the content of the email, and optionally a character set specification. */
		Html?: Content;
	}

	/** Represents the body of the email message. */
	export interface BodyFormProperties {
	}
	export function CreateBodyFormGroup() {
		return new FormGroup<BodyFormProperties>({
		});

	}


	/** Represents the raw content of an email message. */
	export interface RawMessage {

		/**
		 * <p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that the Amazon SES API v2 supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>
		 * Required
		 */
		Data: string;
	}

	/** Represents the raw content of an email message. */
	export interface RawMessageFormProperties {

		/**
		 * <p>The raw email message. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by one blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be in a file format that the Amazon SES API v2 supports. </p> </li> <li> <p>The entire message must be Base64 encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.</p> </li> <li> <p>The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p> </li> </ul>
		 * Required
		 */
		Data: FormControl<string | null | undefined>,
	}
	export function CreateRawMessageFormGroup() {
		return new FormGroup<RawMessageFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send. */
	export interface Template {
		TemplateArn?: string | null;
		TemplateData?: string | null;
	}

	/** An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send. */
	export interface TemplateFormProperties {
		TemplateArn: FormControl<string | null | undefined>,
		TemplateData: FormControl<string | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			TemplateArn: new FormControl<string | null | undefined>(undefined),
			TemplateData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountSuspendedException {
	}
	export interface AccountSuspendedExceptionFormProperties {
	}
	export function CreateAccountSuspendedExceptionFormGroup() {
		return new FormGroup<AccountSuspendedExceptionFormProperties>({
		});

	}

	export interface SendingPausedException {
	}
	export interface SendingPausedExceptionFormProperties {
	}
	export function CreateSendingPausedExceptionFormGroup() {
		return new FormGroup<SendingPausedExceptionFormProperties>({
		});

	}

	export interface MessageRejected {
	}
	export interface MessageRejectedFormProperties {
	}
	export function CreateMessageRejectedFormGroup() {
		return new FormGroup<MessageRejectedFormProperties>({
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


	/** <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p> */
	export interface CreateEmailIdentityResponse {

		/** <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
		IdentityType?: CreateEmailIdentityResponseIdentityType | null;
		VerifiedForSendingStatus?: boolean | null;

		/** <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p> */
		DkimAttributes?: DkimAttributes;
	}

	/** <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p> */
	export interface CreateEmailIdentityResponseFormProperties {

		/** <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
		IdentityType: FormControl<CreateEmailIdentityResponseIdentityType | null | undefined>,
		VerifiedForSendingStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEmailIdentityResponseFormGroup() {
		return new FormGroup<CreateEmailIdentityResponseFormProperties>({
			IdentityType: new FormControl<CreateEmailIdentityResponseIdentityType | null | undefined>(undefined),
			VerifiedForSendingStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CreateEmailIdentityResponseIdentityType { EMAIL_ADDRESS = 0, DOMAIN = 1, MANAGED_DOMAIN = 2 }


	/** <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p> */
	export interface DkimAttributes {
		SigningEnabled?: boolean | null;

		/** <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul> */
		Status?: DkimAttributesStatus | null;
		Tokens?: Array<string>;
		SigningAttributesOrigin?: DkimAttributesSigningAttributesOrigin | null;
	}

	/** <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p> */
	export interface DkimAttributesFormProperties {
		SigningEnabled: FormControl<boolean | null | undefined>,

		/** <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul> */
		Status: FormControl<DkimAttributesStatus | null | undefined>,
		SigningAttributesOrigin: FormControl<DkimAttributesSigningAttributesOrigin | null | undefined>,
	}
	export function CreateDkimAttributesFormGroup() {
		return new FormGroup<DkimAttributesFormProperties>({
			SigningEnabled: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<DkimAttributesStatus | null | undefined>(undefined),
			SigningAttributesOrigin: new FormControl<DkimAttributesSigningAttributesOrigin | null | undefined>(undefined),
		});

	}

	export enum DkimAttributesStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3, NOT_STARTED = 4 }

	export enum DkimAttributesSigningAttributesOrigin { AWS_SES = 0, EXTERNAL = 1 }


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteConfigurationSetResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteConfigurationSetResponseFormProperties {
	}
	export function CreateDeleteConfigurationSetResponseFormGroup() {
		return new FormGroup<DeleteConfigurationSetResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteConfigurationSetEventDestinationResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateDeleteConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<DeleteConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteDedicatedIpPoolResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteDedicatedIpPoolResponseFormProperties {
	}
	export function CreateDeleteDedicatedIpPoolResponseFormGroup() {
		return new FormGroup<DeleteDedicatedIpPoolResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteEmailIdentityResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteEmailIdentityResponseFormProperties {
	}
	export function CreateDeleteEmailIdentityResponseFormGroup() {
		return new FormGroup<DeleteEmailIdentityResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteSuppressedDestinationResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteSuppressedDestinationResponseFormProperties {
	}
	export function CreateDeleteSuppressedDestinationResponseFormGroup() {
		return new FormGroup<DeleteSuppressedDestinationResponseFormProperties>({
		});

	}


	/** A list of details about the email-sending capabilities of your Amazon SES account in the current AWS Region. */
	export interface GetAccountResponse {
		DedicatedIpAutoWarmupEnabled?: boolean | null;
		EnforcementStatus?: string | null;
		ProductionAccessEnabled?: boolean | null;

		/** An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current AWS Region. */
		SendQuota?: SendQuota;
		SendingEnabled?: boolean | null;

		/** An object that contains information about the email address suppression preferences for your account in the current AWS Region. */
		SuppressionAttributes?: SuppressionAttributes;
	}

	/** A list of details about the email-sending capabilities of your Amazon SES account in the current AWS Region. */
	export interface GetAccountResponseFormProperties {
		DedicatedIpAutoWarmupEnabled: FormControl<boolean | null | undefined>,
		EnforcementStatus: FormControl<string | null | undefined>,
		ProductionAccessEnabled: FormControl<boolean | null | undefined>,
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGetAccountResponseFormGroup() {
		return new FormGroup<GetAccountResponseFormProperties>({
			DedicatedIpAutoWarmupEnabled: new FormControl<boolean | null | undefined>(undefined),
			EnforcementStatus: new FormControl<string | null | undefined>(undefined),
			ProductionAccessEnabled: new FormControl<boolean | null | undefined>(undefined),
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current AWS Region. */
	export interface SendQuota {
		Max24HourSend?: number | null;
		MaxSendRate?: number | null;
		SentLast24Hours?: number | null;
	}

	/** An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current AWS Region. */
	export interface SendQuotaFormProperties {
		Max24HourSend: FormControl<number | null | undefined>,
		MaxSendRate: FormControl<number | null | undefined>,
		SentLast24Hours: FormControl<number | null | undefined>,
	}
	export function CreateSendQuotaFormGroup() {
		return new FormGroup<SendQuotaFormProperties>({
			Max24HourSend: new FormControl<number | null | undefined>(undefined),
			MaxSendRate: new FormControl<number | null | undefined>(undefined),
			SentLast24Hours: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the email address suppression preferences for your account in the current AWS Region. */
	export interface SuppressionAttributes {
		SuppressedReasons?: Array<SuppressionListReason>;
	}

	/** An object that contains information about the email address suppression preferences for your account in the current AWS Region. */
	export interface SuppressionAttributesFormProperties {
	}
	export function CreateSuppressionAttributesFormGroup() {
		return new FormGroup<SuppressionAttributesFormProperties>({
		});

	}


	/** An object that contains information about blacklist events. */
	export interface GetBlacklistReportsResponse {
		BlacklistReport: BlacklistReport;
	}

	/** An object that contains information about blacklist events. */
	export interface GetBlacklistReportsResponseFormProperties {
	}
	export function CreateGetBlacklistReportsResponseFormGroup() {
		return new FormGroup<GetBlacklistReportsResponseFormProperties>({
		});

	}

	export interface BlacklistReport {
	}
	export interface BlacklistReportFormProperties {
	}
	export function CreateBlacklistReportFormGroup() {
		return new FormGroup<BlacklistReportFormProperties>({
		});

	}


	/** Information about a configuration set. */
	export interface GetConfigurationSetResponse {

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string | null;

		/** <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p> */
		TrackingOptions?: TrackingOptions;

		/** Used to associate a configuration set with a dedicated IP pool. */
		DeliveryOptions?: DeliveryOptions;

		/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. */
		ReputationOptions?: ReputationOptions;

		/** Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
		SendingOptions?: SendingOptions;
		Tags?: Array<Tag>;

		/** An object that contains information about the suppression list preferences for your account. */
		SuppressionOptions?: SuppressionOptions;
	}

	/** Information about a configuration set. */
	export interface GetConfigurationSetResponseFormProperties {

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateGetConfigurationSetResponseFormGroup() {
		return new FormGroup<GetConfigurationSetResponseFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p> */
	export interface TrackingOptions {

		/**
		 * The domain that you want to use for tracking open and click events.
		 * Required
		 */
		CustomRedirectDomain: string;
	}

	/** <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p> */
	export interface TrackingOptionsFormProperties {

		/**
		 * The domain that you want to use for tracking open and click events.
		 * Required
		 */
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreateTrackingOptionsFormGroup() {
		return new FormGroup<TrackingOptionsFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to associate a configuration set with a dedicated IP pool. */
	export interface DeliveryOptions {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy?: TlsPolicy | null;

		/** The name of a dedicated IP pool. */
		SendingPoolName?: string | null;
	}

	/** Used to associate a configuration set with a dedicated IP pool. */
	export interface DeliveryOptionsFormProperties {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,

		/** The name of a dedicated IP pool. */
		SendingPoolName: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryOptionsFormGroup() {
		return new FormGroup<DeliveryOptionsFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			SendingPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.  */
	export interface ReputationOptions {
		ReputationMetricsEnabled?: boolean | null;

		/** The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start. */
		LastFreshStart?: Date | null;
	}

	/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.  */
	export interface ReputationOptionsFormProperties {
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,

		/** The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start. */
		LastFreshStart: FormControl<Date | null | undefined>,
	}
	export function CreateReputationOptionsFormGroup() {
		return new FormGroup<ReputationOptionsFormProperties>({
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LastFreshStart: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
	export interface SendingOptions {
		SendingEnabled?: boolean | null;
	}

	/** Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
	export interface SendingOptionsFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSendingOptionsFormGroup() {
		return new FormGroup<SendingOptionsFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the suppression list preferences for your account. */
	export interface SuppressionOptions {
		SuppressedReasons?: Array<SuppressionListReason>;
	}

	/** An object that contains information about the suppression list preferences for your account. */
	export interface SuppressionOptionsFormProperties {
	}
	export function CreateSuppressionOptionsFormGroup() {
		return new FormGroup<SuppressionOptionsFormProperties>({
		});

	}


	/** Information about an event destination for a configuration set. */
	export interface GetConfigurationSetEventDestinationsResponse {
		EventDestinations?: Array<EventDestination>;
	}

	/** Information about an event destination for a configuration set. */
	export interface GetConfigurationSetEventDestinationsResponseFormProperties {
	}
	export function CreateGetConfigurationSetEventDestinationsResponseFormGroup() {
		return new FormGroup<GetConfigurationSetEventDestinationsResponseFormProperties>({
		});

	}


	/** In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage. */
	export interface EventDestination {

		/**
		 * <p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Required
		 */
		Name: string;
		Enabled?: boolean | null;
		MatchingEventTypes: Array<EventType>;

		/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
		CloudWatchDestination?: CloudWatchDestination;

		/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
		SnsDestination?: SnsDestination;

		/** An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>. */
		PinpointDestination?: PinpointDestination;
	}

	/** In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage. */
	export interface EventDestinationFormProperties {

		/**
		 * <p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventDestinationFormGroup() {
		return new FormGroup<EventDestinationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a dedicated IP address. */
	export interface GetDedicatedIpResponse {

		/** <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p> */
		DedicatedIp?: DedicatedIp;
	}

	/** Information about a dedicated IP address. */
	export interface GetDedicatedIpResponseFormProperties {
	}
	export function CreateGetDedicatedIpResponseFormGroup() {
		return new FormGroup<GetDedicatedIpResponseFormProperties>({
		});

	}


	/** <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p> */
	export interface DedicatedIp {

		/**
		 * An IPv4 address.
		 * Required
		 */
		Ip: string;

		/**
		 * The warmup status of a dedicated IP.
		 * Required
		 */
		WarmupStatus: DedicatedIpWarmupStatus;
		WarmupPercentage: number;

		/** The name of a dedicated IP pool. */
		PoolName?: string | null;
	}

	/** <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p> */
	export interface DedicatedIpFormProperties {

		/**
		 * An IPv4 address.
		 * Required
		 */
		Ip: FormControl<string | null | undefined>,

		/**
		 * The warmup status of a dedicated IP.
		 * Required
		 */
		WarmupStatus: FormControl<DedicatedIpWarmupStatus | null | undefined>,
		WarmupPercentage: FormControl<number | null | undefined>,

		/** The name of a dedicated IP pool. */
		PoolName: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedIpFormGroup() {
		return new FormGroup<DedicatedIpFormProperties>({
			Ip: new FormControl<string | null | undefined>(undefined),
			WarmupStatus: new FormControl<DedicatedIpWarmupStatus | null | undefined>(undefined),
			WarmupPercentage: new FormControl<number | null | undefined>(undefined),
			PoolName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DedicatedIpWarmupStatus { IN_PROGRESS = 0, DONE = 1 }


	/** Information about the dedicated IP addresses that are associated with your AWS account. */
	export interface GetDedicatedIpsResponse {

		/** A list of dedicated IP addresses that are associated with your AWS account. */
		DedicatedIps?: Array<DedicatedIp>;
		NextToken?: string | null;
	}

	/** Information about the dedicated IP addresses that are associated with your AWS account. */
	export interface GetDedicatedIpsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDedicatedIpsResponseFormGroup() {
		return new FormGroup<GetDedicatedIpsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that shows the status of the Deliverability dashboard. */
	export interface GetDeliverabilityDashboardOptionsResponse {
		DashboardEnabled: boolean;
		SubscriptionExpiryDate?: Date | null;

		/** The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month. */
		AccountStatus?: GetDeliverabilityDashboardOptionsResponseAccountStatus | null;

		/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
		ActiveSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;

		/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
		PendingExpirationSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}

	/** An object that shows the status of the Deliverability dashboard. */
	export interface GetDeliverabilityDashboardOptionsResponseFormProperties {
		DashboardEnabled: FormControl<boolean | null | undefined>,
		SubscriptionExpiryDate: FormControl<Date | null | undefined>,

		/** The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month. */
		AccountStatus: FormControl<GetDeliverabilityDashboardOptionsResponseAccountStatus | null | undefined>,
	}
	export function CreateGetDeliverabilityDashboardOptionsResponseFormGroup() {
		return new FormGroup<GetDeliverabilityDashboardOptionsResponseFormProperties>({
			DashboardEnabled: new FormControl<boolean | null | undefined>(undefined),
			SubscriptionExpiryDate: new FormControl<Date | null | undefined>(undefined),
			AccountStatus: new FormControl<GetDeliverabilityDashboardOptionsResponseAccountStatus | null | undefined>(undefined),
		});

	}

	export enum GetDeliverabilityDashboardOptionsResponseAccountStatus { ACTIVE = 0, PENDING_EXPIRATION = 1, DISABLED = 2 }


	/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
	export interface DomainDeliverabilityTrackingOption {
		Domain?: string | null;
		SubscriptionStartDate?: Date | null;

		/** An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain. */
		InboxPlacementTrackingOption?: InboxPlacementTrackingOption;
	}

	/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
	export interface DomainDeliverabilityTrackingOptionFormProperties {
		Domain: FormControl<string | null | undefined>,
		SubscriptionStartDate: FormControl<Date | null | undefined>,
	}
	export function CreateDomainDeliverabilityTrackingOptionFormGroup() {
		return new FormGroup<DomainDeliverabilityTrackingOptionFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			SubscriptionStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain. */
	export interface InboxPlacementTrackingOption {
		Global?: boolean | null;
		TrackedIsps?: Array<string>;
	}

	/** An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain. */
	export interface InboxPlacementTrackingOptionFormProperties {
		Global: FormControl<boolean | null | undefined>,
	}
	export function CreateInboxPlacementTrackingOptionFormGroup() {
		return new FormGroup<InboxPlacementTrackingOptionFormProperties>({
			Global: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The results of the predictive inbox placement test. */
	export interface GetDeliverabilityTestReportResponse {

		/**
		 * An object that contains metadata related to a predictive inbox placement test.
		 * Required
		 */
		DeliverabilityTestReport: DeliverabilityTestReport;

		/**
		 * An object that contains inbox placement data for an email provider.
		 * Required
		 */
		OverallPlacement: PlacementStatistics;
		IspPlacements: Array<IspPlacement>;

		/** The body of an email message. */
		Message?: string | null;
		Tags?: Array<Tag>;
	}

	/** The results of the predictive inbox placement test. */
	export interface GetDeliverabilityTestReportResponseFormProperties {

		/** The body of an email message. */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateGetDeliverabilityTestReportResponseFormGroup() {
		return new FormGroup<GetDeliverabilityTestReportResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains metadata related to a predictive inbox placement test. */
	export interface DeliverabilityTestReport {

		/** A unique string that identifies a Deliverability dashboard report. */
		ReportId?: string | null;

		/** A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName?: string | null;

		/** The subject line for an email that you submitted in a predictive inbox placement test. */
		Subject?: string | null;
		FromEmailAddress?: string | null;
		CreateDate?: Date | null;

		/** The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
		DeliverabilityTestStatus?: CreateDeliverabilityTestReportResponseDeliverabilityTestStatus | null;
	}

	/** An object that contains metadata related to a predictive inbox placement test. */
	export interface DeliverabilityTestReportFormProperties {

		/** A unique string that identifies a Deliverability dashboard report. */
		ReportId: FormControl<string | null | undefined>,

		/** A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName: FormControl<string | null | undefined>,

		/** The subject line for an email that you submitted in a predictive inbox placement test. */
		Subject: FormControl<string | null | undefined>,
		FromEmailAddress: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,

		/** The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
		DeliverabilityTestStatus: FormControl<CreateDeliverabilityTestReportResponseDeliverabilityTestStatus | null | undefined>,
	}
	export function CreateDeliverabilityTestReportFormGroup() {
		return new FormGroup<DeliverabilityTestReportFormProperties>({
			ReportId: new FormControl<string | null | undefined>(undefined),
			ReportName: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			DeliverabilityTestStatus: new FormControl<CreateDeliverabilityTestReportResponseDeliverabilityTestStatus | null | undefined>(undefined),
		});

	}


	/** An object that contains inbox placement data for an email provider. */
	export interface PlacementStatistics {

		/** An object that contains information about inbox placement percentages. */
		InboxPercentage?: number | null;

		/** An object that contains information about inbox placement percentages. */
		SpamPercentage?: number | null;

		/** An object that contains information about inbox placement percentages. */
		MissingPercentage?: number | null;

		/** An object that contains information about inbox placement percentages. */
		SpfPercentage?: number | null;

		/** An object that contains information about inbox placement percentages. */
		DkimPercentage?: number | null;
	}

	/** An object that contains inbox placement data for an email provider. */
	export interface PlacementStatisticsFormProperties {

		/** An object that contains information about inbox placement percentages. */
		InboxPercentage: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement percentages. */
		SpamPercentage: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement percentages. */
		MissingPercentage: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement percentages. */
		SpfPercentage: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement percentages. */
		DkimPercentage: FormControl<number | null | undefined>,
	}
	export function CreatePlacementStatisticsFormGroup() {
		return new FormGroup<PlacementStatisticsFormProperties>({
			InboxPercentage: new FormControl<number | null | undefined>(undefined),
			SpamPercentage: new FormControl<number | null | undefined>(undefined),
			MissingPercentage: new FormControl<number | null | undefined>(undefined),
			SpfPercentage: new FormControl<number | null | undefined>(undefined),
			DkimPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider. */
	export interface IspPlacement {

		/** The name of an email provider. */
		IspName?: string | null;

		/** An object that contains inbox placement data for an email provider. */
		PlacementStatistics?: PlacementStatistics;
	}

	/** An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider. */
	export interface IspPlacementFormProperties {

		/** The name of an email provider. */
		IspName: FormControl<string | null | undefined>,
	}
	export function CreateIspPlacementFormGroup() {
		return new FormGroup<IspPlacementFormProperties>({
			IspName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for. */
	export interface GetDomainDeliverabilityCampaignResponse {

		/**
		 * An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
		 * Required
		 */
		DomainDeliverabilityCampaign: DomainDeliverabilityCampaign;
	}

	/** An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for. */
	export interface GetDomainDeliverabilityCampaignResponseFormProperties {
	}
	export function CreateGetDomainDeliverabilityCampaignResponseFormGroup() {
		return new FormGroup<GetDomainDeliverabilityCampaignResponseFormProperties>({
		});

	}


	/** An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface DomainDeliverabilityCampaign {
		CampaignId?: string | null;
		ImageUrl?: string | null;
		Subject?: string | null;
		FromAddress?: string | null;
		SendingIps?: Array<string>;
		FirstSeenDateTime?: Date | null;
		LastSeenDateTime?: Date | null;

		/** An object that contains information about inbox placement volume. */
		InboxCount?: number | null;

		/** An object that contains information about inbox placement volume. */
		SpamCount?: number | null;

		/** An object that contains information about inbox placement percentages. */
		ReadRate?: number | null;

		/** An object that contains information about inbox placement percentages. */
		DeleteRate?: number | null;

		/** An object that contains information about inbox placement percentages. */
		ReadDeleteRate?: number | null;

		/** An object that contains information about inbox placement volume. */
		ProjectedVolume?: number | null;
		Esps?: Array<string>;
	}

	/** An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface DomainDeliverabilityCampaignFormProperties {
		CampaignId: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		FromAddress: FormControl<string | null | undefined>,
		FirstSeenDateTime: FormControl<Date | null | undefined>,
		LastSeenDateTime: FormControl<Date | null | undefined>,

		/** An object that contains information about inbox placement volume. */
		InboxCount: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement volume. */
		SpamCount: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement percentages. */
		ReadRate: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement percentages. */
		DeleteRate: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement percentages. */
		ReadDeleteRate: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement volume. */
		ProjectedVolume: FormControl<number | null | undefined>,
	}
	export function CreateDomainDeliverabilityCampaignFormGroup() {
		return new FormGroup<DomainDeliverabilityCampaignFormProperties>({
			CampaignId: new FormControl<string | null | undefined>(undefined),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			FromAddress: new FormControl<string | null | undefined>(undefined),
			FirstSeenDateTime: new FormControl<Date | null | undefined>(undefined),
			LastSeenDateTime: new FormControl<Date | null | undefined>(undefined),
			InboxCount: new FormControl<number | null | undefined>(undefined),
			SpamCount: new FormControl<number | null | undefined>(undefined),
			ReadRate: new FormControl<number | null | undefined>(undefined),
			DeleteRate: new FormControl<number | null | undefined>(undefined),
			ReadDeleteRate: new FormControl<number | null | undefined>(undefined),
			ProjectedVolume: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that includes statistics that are related to the domain that you specified. */
	export interface GetDomainStatisticsReportResponse {

		/**
		 * An object that contains information about email that was sent from the selected domain.
		 * Required
		 */
		OverallVolume: OverallVolume;
		DailyVolumes: Array<DailyVolume>;
	}

	/** An object that includes statistics that are related to the domain that you specified. */
	export interface GetDomainStatisticsReportResponseFormProperties {
	}
	export function CreateGetDomainStatisticsReportResponseFormGroup() {
		return new FormGroup<GetDomainStatisticsReportResponseFormProperties>({
		});

	}


	/** An object that contains information about email that was sent from the selected domain. */
	export interface OverallVolume {

		/** An object that contains information about the amount of email that was delivered to recipients. */
		VolumeStatistics?: VolumeStatistics;

		/** An object that contains information about inbox placement percentages. */
		ReadRatePercent?: number | null;
		DomainIspPlacements?: Array<DomainIspPlacement>;
	}

	/** An object that contains information about email that was sent from the selected domain. */
	export interface OverallVolumeFormProperties {

		/** An object that contains information about inbox placement percentages. */
		ReadRatePercent: FormControl<number | null | undefined>,
	}
	export function CreateOverallVolumeFormGroup() {
		return new FormGroup<OverallVolumeFormProperties>({
			ReadRatePercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the amount of email that was delivered to recipients. */
	export interface VolumeStatistics {

		/** An object that contains information about inbox placement volume. */
		InboxRawCount?: number | null;

		/** An object that contains information about inbox placement volume. */
		SpamRawCount?: number | null;

		/** An object that contains information about inbox placement volume. */
		ProjectedInbox?: number | null;

		/** An object that contains information about inbox placement volume. */
		ProjectedSpam?: number | null;
	}

	/** An object that contains information about the amount of email that was delivered to recipients. */
	export interface VolumeStatisticsFormProperties {

		/** An object that contains information about inbox placement volume. */
		InboxRawCount: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement volume. */
		SpamRawCount: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement volume. */
		ProjectedInbox: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement volume. */
		ProjectedSpam: FormControl<number | null | undefined>,
	}
	export function CreateVolumeStatisticsFormGroup() {
		return new FormGroup<VolumeStatisticsFormProperties>({
			InboxRawCount: new FormControl<number | null | undefined>(undefined),
			SpamRawCount: new FormControl<number | null | undefined>(undefined),
			ProjectedInbox: new FormControl<number | null | undefined>(undefined),
			ProjectedSpam: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains inbox placement data for email sent from one of your email domains to a specific email provider. */
	export interface DomainIspPlacement {

		/** The name of an email provider. */
		IspName?: string | null;

		/** An object that contains information about inbox placement volume. */
		InboxRawCount?: number | null;

		/** An object that contains information about inbox placement volume. */
		SpamRawCount?: number | null;

		/** An object that contains information about inbox placement percentages. */
		InboxPercentage?: number | null;

		/** An object that contains information about inbox placement percentages. */
		SpamPercentage?: number | null;
	}

	/** An object that contains inbox placement data for email sent from one of your email domains to a specific email provider. */
	export interface DomainIspPlacementFormProperties {

		/** The name of an email provider. */
		IspName: FormControl<string | null | undefined>,

		/** An object that contains information about inbox placement volume. */
		InboxRawCount: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement volume. */
		SpamRawCount: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement percentages. */
		InboxPercentage: FormControl<number | null | undefined>,

		/** An object that contains information about inbox placement percentages. */
		SpamPercentage: FormControl<number | null | undefined>,
	}
	export function CreateDomainIspPlacementFormGroup() {
		return new FormGroup<DomainIspPlacementFormProperties>({
			IspName: new FormControl<string | null | undefined>(undefined),
			InboxRawCount: new FormControl<number | null | undefined>(undefined),
			SpamRawCount: new FormControl<number | null | undefined>(undefined),
			InboxPercentage: new FormControl<number | null | undefined>(undefined),
			SpamPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the volume of email sent on each day of the analysis period. */
	export interface DailyVolume {
		StartDate?: Date | null;

		/** An object that contains information about the amount of email that was delivered to recipients. */
		VolumeStatistics?: VolumeStatistics;
		DomainIspPlacements?: Array<DomainIspPlacement>;
	}

	/** An object that contains information about the volume of email sent on each day of the analysis period. */
	export interface DailyVolumeFormProperties {
		StartDate: FormControl<Date | null | undefined>,
	}
	export function CreateDailyVolumeFormGroup() {
		return new FormGroup<DailyVolumeFormProperties>({
			StartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details about an email identity. */
	export interface GetEmailIdentityResponse {

		/** <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
		IdentityType?: CreateEmailIdentityResponseIdentityType | null;
		FeedbackForwardingStatus?: boolean | null;
		VerifiedForSendingStatus?: boolean | null;

		/** <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p> */
		DkimAttributes?: DkimAttributes;

		/** A list of attributes that are associated with a MAIL FROM domain. */
		MailFromAttributes?: MailFromAttributes;
		Tags?: Array<Tag>;
	}

	/** Details about an email identity. */
	export interface GetEmailIdentityResponseFormProperties {

		/** <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
		IdentityType: FormControl<CreateEmailIdentityResponseIdentityType | null | undefined>,
		FeedbackForwardingStatus: FormControl<boolean | null | undefined>,
		VerifiedForSendingStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateGetEmailIdentityResponseFormGroup() {
		return new FormGroup<GetEmailIdentityResponseFormProperties>({
			IdentityType: new FormControl<CreateEmailIdentityResponseIdentityType | null | undefined>(undefined),
			FeedbackForwardingStatus: new FormControl<boolean | null | undefined>(undefined),
			VerifiedForSendingStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of attributes that are associated with a MAIL FROM domain. */
	export interface MailFromAttributes {

		/**
		 * The domain that you want to use as a MAIL FROM domain.
		 * Required
		 */
		MailFromDomain: string;

		/**
		 * <p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon SES hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon SES detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon SES can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon SES from determining the status of the MAIL FROM domain.</p> </li> </ul>
		 * Required
		 */
		MailFromDomainStatus: MailFromAttributesMailFromDomainStatus;

		/**
		 * <p>The action that you want to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
		 * Required
		 */
		BehaviorOnMxFailure: MailFromAttributesBehaviorOnMxFailure;
	}

	/** A list of attributes that are associated with a MAIL FROM domain. */
	export interface MailFromAttributesFormProperties {

		/**
		 * The domain that you want to use as a MAIL FROM domain.
		 * Required
		 */
		MailFromDomain: FormControl<string | null | undefined>,

		/**
		 * <p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon SES hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon SES detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon SES can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon SES from determining the status of the MAIL FROM domain.</p> </li> </ul>
		 * Required
		 */
		MailFromDomainStatus: FormControl<MailFromAttributesMailFromDomainStatus | null | undefined>,

		/**
		 * <p>The action that you want to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
		 * Required
		 */
		BehaviorOnMxFailure: FormControl<MailFromAttributesBehaviorOnMxFailure | null | undefined>,
	}
	export function CreateMailFromAttributesFormGroup() {
		return new FormGroup<MailFromAttributesFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined),
			MailFromDomainStatus: new FormControl<MailFromAttributesMailFromDomainStatus | null | undefined>(undefined),
			BehaviorOnMxFailure: new FormControl<MailFromAttributesBehaviorOnMxFailure | null | undefined>(undefined),
		});

	}

	export enum MailFromAttributesMailFromDomainStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3 }

	export enum MailFromAttributesBehaviorOnMxFailure { USE_DEFAULT_VALUE = 0, REJECT_MESSAGE = 1 }


	/** Information about the suppressed email address. */
	export interface GetSuppressedDestinationResponse {

		/**
		 * An object that contains information about an email address that is on the suppression list for your account.
		 * Required
		 */
		SuppressedDestination: SuppressedDestination;
	}

	/** Information about the suppressed email address. */
	export interface GetSuppressedDestinationResponseFormProperties {
	}
	export function CreateGetSuppressedDestinationResponseFormGroup() {
		return new FormGroup<GetSuppressedDestinationResponseFormProperties>({
		});

	}


	/** An object that contains information about an email address that is on the suppression list for your account. */
	export interface SuppressedDestination {
		EmailAddress: string;

		/**
		 * <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>
		 * Required
		 */
		Reason: SuppressionListReason;
		LastUpdateTime: Date;

		/** An object that contains additional attributes that are related an email address that is on the suppression list for your account. */
		Attributes?: SuppressedDestinationAttributes;
	}

	/** An object that contains information about an email address that is on the suppression list for your account. */
	export interface SuppressedDestinationFormProperties {
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>
		 * Required
		 */
		Reason: FormControl<SuppressionListReason | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSuppressedDestinationFormGroup() {
		return new FormGroup<SuppressedDestinationFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<SuppressionListReason | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object that contains additional attributes that are related an email address that is on the suppression list for your account. */
	export interface SuppressedDestinationAttributes {
		MessageId?: string | null;
		FeedbackId?: string | null;
	}

	/** An object that contains additional attributes that are related an email address that is on the suppression list for your account. */
	export interface SuppressedDestinationAttributesFormProperties {
		MessageId: FormControl<string | null | undefined>,
		FeedbackId: FormControl<string | null | undefined>,
	}
	export function CreateSuppressedDestinationAttributesFormGroup() {
		return new FormGroup<SuppressedDestinationAttributesFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
			FeedbackId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of configuration sets in your Amazon SES account in the current AWS Region. */
	export interface ListConfigurationSetsResponse {
		ConfigurationSets?: Array<string>;
		NextToken?: string | null;
	}

	/** A list of configuration sets in your Amazon SES account in the current AWS Region. */
	export interface ListConfigurationSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationSetsResponseFormGroup() {
		return new FormGroup<ListConfigurationSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsResponse {

		/** A list of dedicated IP pools that are associated with your AWS account. */
		DedicatedIpPools?: Array<string>;
		NextToken?: string | null;
	}

	/** A list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDedicatedIpPoolsResponseFormGroup() {
		return new FormGroup<ListDedicatedIpPoolsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete. */
	export interface ListDeliverabilityTestReportsResponse {
		DeliverabilityTestReports: Array<DeliverabilityTestReport>;
		NextToken?: string | null;
	}

	/** A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete. */
	export interface ListDeliverabilityTestReportsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeliverabilityTestReportsResponseFormGroup() {
		return new FormGroup<ListDeliverabilityTestReportsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain. */
	export interface ListDomainDeliverabilityCampaignsResponse {

		/**
		 * <p/>
		 * Required
		 */
		DomainDeliverabilityCampaigns: Array<DomainDeliverabilityCampaign>;
		NextToken?: string | null;
	}

	/** An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain. */
	export interface ListDomainDeliverabilityCampaignsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainDeliverabilityCampaignsResponseFormGroup() {
		return new FormGroup<ListDomainDeliverabilityCampaignsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of all of the identities that you've attempted to verify, regardless of whether or not those identities were successfully verified. */
	export interface ListEmailIdentitiesResponse {
		EmailIdentities?: Array<IdentityInfo>;
		NextToken?: string | null;
	}

	/** A list of all of the identities that you've attempted to verify, regardless of whether or not those identities were successfully verified. */
	export interface ListEmailIdentitiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEmailIdentitiesResponseFormGroup() {
		return new FormGroup<ListEmailIdentitiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an email identity. */
	export interface IdentityInfo {

		/** <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
		IdentityType?: CreateEmailIdentityResponseIdentityType | null;
		IdentityName?: string | null;
		SendingEnabled?: boolean | null;
	}

	/** Information about an email identity. */
	export interface IdentityInfoFormProperties {

		/** <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
		IdentityType: FormControl<CreateEmailIdentityResponseIdentityType | null | undefined>,
		IdentityName: FormControl<string | null | undefined>,
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateIdentityInfoFormGroup() {
		return new FormGroup<IdentityInfoFormProperties>({
			IdentityType: new FormControl<CreateEmailIdentityResponseIdentityType | null | undefined>(undefined),
			IdentityName: new FormControl<string | null | undefined>(undefined),
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of suppressed email addresses. */
	export interface ListSuppressedDestinationsResponse {
		SuppressedDestinationSummaries?: Array<SuppressedDestinationSummary>;
		NextToken?: string | null;
	}

	/** A list of suppressed email addresses. */
	export interface ListSuppressedDestinationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSuppressedDestinationsResponseFormGroup() {
		return new FormGroup<ListSuppressedDestinationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary that describes the suppressed email address. */
	export interface SuppressedDestinationSummary {
		EmailAddress: string;

		/**
		 * <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>
		 * Required
		 */
		Reason: SuppressionListReason;
		LastUpdateTime: Date;
	}

	/** A summary that describes the suppressed email address. */
	export interface SuppressedDestinationSummaryFormProperties {
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>
		 * Required
		 */
		Reason: FormControl<SuppressionListReason | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSuppressedDestinationSummaryFormGroup() {
		return new FormGroup<SuppressedDestinationSummaryFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<SuppressionListReason | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ListTagsForResourceResponse {
		Tags: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountDedicatedIpWarmupAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountDedicatedIpWarmupAttributesResponseFormProperties {
	}
	export function CreatePutAccountDedicatedIpWarmupAttributesResponseFormGroup() {
		return new FormGroup<PutAccountDedicatedIpWarmupAttributesResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountSendingAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountSendingAttributesResponseFormProperties {
	}
	export function CreatePutAccountSendingAttributesResponseFormGroup() {
		return new FormGroup<PutAccountSendingAttributesResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountSuppressionAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountSuppressionAttributesResponseFormProperties {
	}
	export function CreatePutAccountSuppressionAttributesResponseFormGroup() {
		return new FormGroup<PutAccountSuppressionAttributesResponseFormProperties>({
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


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetReputationOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetReputationOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetReputationOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetReputationOptionsResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetSendingOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetSendingOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetSendingOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetSendingOptionsResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetSuppressionOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetSuppressionOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetSuppressionOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetSuppressionOptionsResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetTrackingOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetTrackingOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetTrackingOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetTrackingOptionsResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutDedicatedIpInPoolResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutDedicatedIpInPoolResponseFormProperties {
	}
	export function CreatePutDedicatedIpInPoolResponseFormGroup() {
		return new FormGroup<PutDedicatedIpInPoolResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutDedicatedIpWarmupAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutDedicatedIpWarmupAttributesResponseFormProperties {
	}
	export function CreatePutDedicatedIpWarmupAttributesResponseFormGroup() {
		return new FormGroup<PutDedicatedIpWarmupAttributesResponseFormProperties>({
		});

	}


	/** A response that indicates whether the Deliverability dashboard is enabled. */
	export interface PutDeliverabilityDashboardOptionResponse {
	}

	/** A response that indicates whether the Deliverability dashboard is enabled. */
	export interface PutDeliverabilityDashboardOptionResponseFormProperties {
	}
	export function CreatePutDeliverabilityDashboardOptionResponseFormGroup() {
		return new FormGroup<PutDeliverabilityDashboardOptionResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityDkimAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityDkimAttributesResponseFormProperties {
	}
	export function CreatePutEmailIdentityDkimAttributesResponseFormGroup() {
		return new FormGroup<PutEmailIdentityDkimAttributesResponseFormProperties>({
		});

	}


	/** <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p> */
	export interface PutEmailIdentityDkimSigningAttributesResponse {

		/** <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul> */
		DkimStatus?: DkimAttributesStatus | null;
		DkimTokens?: Array<string>;
	}

	/** <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p> */
	export interface PutEmailIdentityDkimSigningAttributesResponseFormProperties {

		/** <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul> */
		DkimStatus: FormControl<DkimAttributesStatus | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimSigningAttributesResponseFormGroup() {
		return new FormGroup<PutEmailIdentityDkimSigningAttributesResponseFormProperties>({
			DkimStatus: new FormControl<DkimAttributesStatus | null | undefined>(undefined),
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityFeedbackAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityFeedbackAttributesResponseFormProperties {
	}
	export function CreatePutEmailIdentityFeedbackAttributesResponseFormGroup() {
		return new FormGroup<PutEmailIdentityFeedbackAttributesResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityMailFromAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutEmailIdentityMailFromAttributesResponseFormProperties {
	}
	export function CreatePutEmailIdentityMailFromAttributesResponseFormGroup() {
		return new FormGroup<PutEmailIdentityMailFromAttributesResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutSuppressedDestinationResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutSuppressedDestinationResponseFormProperties {
	}
	export function CreatePutSuppressedDestinationResponseFormGroup() {
		return new FormGroup<PutSuppressedDestinationResponseFormProperties>({
		});

	}


	/** A unique message ID that you receive when an email is accepted for sending. */
	export interface SendEmailResponse {
		MessageId?: string | null;
	}

	/** A unique message ID that you receive when an email is accepted for sending. */
	export interface SendEmailResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailResponseFormGroup() {
		return new FormGroup<SendEmailResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.  */
	export interface MessageTag {

		/**
		 * <p>The name of the message tag. The message tag name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
		 * Required
		 */
		Name: string;

		/**
		 * <p>The value of the message tag. The message tag value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
		 * Required
		 */
		Value: string;
	}

	/** Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.  */
	export interface MessageTagFormProperties {

		/**
		 * <p>The name of the message tag. The message tag name has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * <p>The value of the message tag. The message tag value has to meet the following criteria:</p> <ul> <li> <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).</p> </li> <li> <p>It can contain no more than 256 characters.</p> </li> </ul>
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMessageTagFormGroup() {
		return new FormGroup<MessageTagFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface UpdateConfigurationSetEventDestinationResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface UpdateConfigurationSetEventDestinationResponseFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationResponseFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationResponseFormProperties>({
		});

	}


	/** <p>The action that you want to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
	export enum BehaviorOnMxFailure { USE_DEFAULT_VALUE = 0, REJECT_MESSAGE = 1 }


	/** An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account. */
	export interface BlacklistEntry {

		/** The name of a blacklist that an IP address was found on. */
		RblName?: string | null;
		ListingTime?: Date | null;

		/** A description of the blacklisting event. */
		Description?: string | null;
	}

	/** An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account. */
	export interface BlacklistEntryFormProperties {

		/** The name of a blacklist that an IP address was found on. */
		RblName: FormControl<string | null | undefined>,
		ListingTime: FormControl<Date | null | undefined>,

		/** A description of the blacklisting event. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateBlacklistEntryFormGroup() {
		return new FormGroup<BlacklistEntryFormProperties>({
			RblName: new FormControl<string | null | undefined>(undefined),
			ListingTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. If you want to use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose <code>messageTag</code>. If you want to use your own email headers, choose <code>emailHeader</code>. If you want to use link tags, choose <code>linkTags</code>. */
	export enum DimensionValueSource { MESSAGE_TAG = 0, EMAIL_HEADER = 1, LINK_TAG = 2 }


	/** An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
	export interface EventDestinationDefinition {
		Enabled?: boolean | null;
		MatchingEventTypes?: Array<EventType>;

		/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
		CloudWatchDestination?: CloudWatchDestination;

		/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
		SnsDestination?: SnsDestination;

		/** An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>. */
		PinpointDestination?: PinpointDestination;
	}

	/** An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
	export interface EventDestinationDefinitionFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventDestinationDefinitionFormGroup() {
		return new FormGroup<EventDestinationDefinitionFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to add an event destination to a configuration set. */
	export interface CreateConfigurationSetEventDestinationRequest {

		/**
		 * <p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Required
		 */
		EventDestinationName: string;

		/**
		 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
		 * Required
		 */
		EventDestination: EventDestinationDefinition;
	}

	/** A request to add an event destination to a configuration set. */
	export interface CreateConfigurationSetEventDestinationRequestFormProperties {

		/**
		 * <p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Required
		 */
		EventDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationRequestFormProperties>({
			EventDestinationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to create a configuration set. */
	export interface CreateConfigurationSetRequest {

		/**
		 * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Required
		 */
		ConfigurationSetName: string;

		/** <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p> */
		TrackingOptions?: TrackingOptions;

		/** Used to associate a configuration set with a dedicated IP pool. */
		DeliveryOptions?: DeliveryOptions;

		/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. */
		ReputationOptions?: ReputationOptions;

		/** Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
		SendingOptions?: SendingOptions;
		Tags?: Array<Tag>;

		/** An object that contains information about the suppression list preferences for your account. */
		SuppressionOptions?: SuppressionOptions;
	}

	/** A request to create a configuration set. */
	export interface CreateConfigurationSetRequestFormProperties {

		/**
		 * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Required
		 */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to create a new dedicated IP pool. */
	export interface CreateDedicatedIpPoolRequest {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		PoolName: string;
		Tags?: Array<Tag>;
	}

	/** A request to create a new dedicated IP pool. */
	export interface CreateDedicatedIpPoolRequestFormProperties {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		PoolName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDedicatedIpPoolRequestFormGroup() {
		return new FormGroup<CreateDedicatedIpPoolRequestFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
	export interface EmailContent {

		/** Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
		Simple?: Message;

		/** Represents the raw content of an email message. */
		Raw?: RawMessage;

		/** An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send. */
		Template?: Template;
	}

	/** An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
	export interface EmailContentFormProperties {
	}
	export function CreateEmailContentFormGroup() {
		return new FormGroup<EmailContentFormProperties>({
		});

	}


	/** A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. We send that message to special email addresses spread across several major email providers around the world. The test takes about 24 hours to complete. When the test is complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export interface CreateDeliverabilityTestReportRequest {

		/** A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName?: string | null;
		FromEmailAddress: string;

		/**
		 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
		 * Required
		 */
		Content: EmailContent;
		Tags?: Array<Tag>;
	}

	/** A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. We send that message to special email addresses spread across several major email providers around the world. The test takes about 24 hours to complete. When the test is complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export interface CreateDeliverabilityTestReportRequestFormProperties {

		/** A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName: FormControl<string | null | undefined>,
		FromEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeliverabilityTestReportRequestFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportRequestFormProperties>({
			ReportName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export enum DeliverabilityTestStatus { IN_PROGRESS = 0, COMPLETED = 1 }


	/** An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM). */
	export interface DkimSigningAttributes {
		DomainSigningSelector: string;
		DomainSigningPrivateKey: string;
	}

	/** An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM). */
	export interface DkimSigningAttributesFormProperties {
		DomainSigningSelector: FormControl<string | null | undefined>,
		DomainSigningPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateDkimSigningAttributesFormGroup() {
		return new FormGroup<DkimSigningAttributesFormProperties>({
			DomainSigningSelector: new FormControl<string | null | undefined>(undefined),
			DomainSigningPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to begin the verification process for an email identity (an email address or domain). */
	export interface CreateEmailIdentityRequest {
		EmailIdentity: string;
		Tags?: Array<Tag>;

		/** An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM). */
		DkimSigningAttributes?: DkimSigningAttributes;
	}

	/** A request to begin the verification process for an email identity (an email address or domain). */
	export interface CreateEmailIdentityRequestFormProperties {
		EmailIdentity: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailIdentityRequestFormGroup() {
		return new FormGroup<CreateEmailIdentityRequestFormProperties>({
			EmailIdentity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The email identity type. The identity type can be one of the following:</p> <ul> <li> <p> <code>EMAIL_ADDRESS</code> – The identity is an email address.</p> </li> <li> <p> <code>DOMAIN</code> – The identity is a domain.</p> </li> </ul> */
	export enum IdentityType { EMAIL_ADDRESS = 0, DOMAIN = 1, MANAGED_DOMAIN = 2 }


	/** The warmup status of a dedicated IP. */
	export enum WarmupStatus { IN_PROGRESS = 0, DONE = 1 }


	/** A request to delete an event destination from a configuration set. */
	export interface DeleteConfigurationSetEventDestinationRequest {
	}

	/** A request to delete an event destination from a configuration set. */
	export interface DeleteConfigurationSetEventDestinationRequestFormProperties {
	}
	export function CreateDeleteConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetEventDestinationRequestFormProperties>({
		});

	}


	/** A request to delete a configuration set. */
	export interface DeleteConfigurationSetRequest {
	}

	/** A request to delete a configuration set. */
	export interface DeleteConfigurationSetRequestFormProperties {
	}
	export function CreateDeleteConfigurationSetRequestFormGroup() {
		return new FormGroup<DeleteConfigurationSetRequestFormProperties>({
		});

	}


	/** A request to delete a dedicated IP pool. */
	export interface DeleteDedicatedIpPoolRequest {
	}

	/** A request to delete a dedicated IP pool. */
	export interface DeleteDedicatedIpPoolRequestFormProperties {
	}
	export function CreateDeleteDedicatedIpPoolRequestFormGroup() {
		return new FormGroup<DeleteDedicatedIpPoolRequestFormProperties>({
		});

	}


	/** A request to delete an existing email identity. When you delete an identity, you lose the ability to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again. */
	export interface DeleteEmailIdentityRequest {
	}

	/** A request to delete an existing email identity. When you delete an identity, you lose the ability to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again. */
	export interface DeleteEmailIdentityRequestFormProperties {
	}
	export function CreateDeleteEmailIdentityRequestFormGroup() {
		return new FormGroup<DeleteEmailIdentityRequestFormProperties>({
		});

	}


	/** A request to remove an email address from the suppression list for your account. */
	export interface DeleteSuppressedDestinationRequest {
	}

	/** A request to remove an email address from the suppression list for your account. */
	export interface DeleteSuppressedDestinationRequestFormProperties {
	}
	export function CreateDeleteSuppressedDestinationRequestFormGroup() {
		return new FormGroup<DeleteSuppressedDestinationRequestFormProperties>({
		});

	}


	/** The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month. */
	export enum DeliverabilityDashboardAccountStatus { ACTIVE = 0, PENDING_EXPIRATION = 1, DISABLED = 2 }


	/** An object that describes the recipients for an email. */
	export interface Destination {
		ToAddresses?: Array<string>;
		CcAddresses?: Array<string>;
		BccAddresses?: Array<string>;
	}

	/** An object that describes the recipients for an email. */
	export interface DestinationFormProperties {
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
		});

	}


	/** <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul> */
	export enum DkimStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3, NOT_STARTED = 4 }

	export enum DkimSigningAttributesOrigin { AWS_SES = 0, EXTERNAL = 1 }


	/** A request to obtain information about the email-sending capabilities of your Amazon SES account. */
	export interface GetAccountRequest {
	}

	/** A request to obtain information about the email-sending capabilities of your Amazon SES account. */
	export interface GetAccountRequestFormProperties {
	}
	export function CreateGetAccountRequestFormGroup() {
		return new FormGroup<GetAccountRequestFormProperties>({
		});

	}


	/** A request to retrieve a list of the blacklists that your dedicated IP addresses appear on. */
	export interface GetBlacklistReportsRequest {
	}

	/** A request to retrieve a list of the blacklists that your dedicated IP addresses appear on. */
	export interface GetBlacklistReportsRequestFormProperties {
	}
	export function CreateGetBlacklistReportsRequestFormGroup() {
		return new FormGroup<GetBlacklistReportsRequestFormProperties>({
		});

	}


	/** A request to obtain information about the event destinations for a configuration set. */
	export interface GetConfigurationSetEventDestinationsRequest {
	}

	/** A request to obtain information about the event destinations for a configuration set. */
	export interface GetConfigurationSetEventDestinationsRequestFormProperties {
	}
	export function CreateGetConfigurationSetEventDestinationsRequestFormGroup() {
		return new FormGroup<GetConfigurationSetEventDestinationsRequestFormProperties>({
		});

	}


	/** A request to obtain information about a configuration set. */
	export interface GetConfigurationSetRequest {
	}

	/** A request to obtain information about a configuration set. */
	export interface GetConfigurationSetRequestFormProperties {
	}
	export function CreateGetConfigurationSetRequestFormGroup() {
		return new FormGroup<GetConfigurationSetRequestFormProperties>({
		});

	}


	/** A request to obtain more information about a dedicated IP address. */
	export interface GetDedicatedIpRequest {
	}

	/** A request to obtain more information about a dedicated IP address. */
	export interface GetDedicatedIpRequestFormProperties {
	}
	export function CreateGetDedicatedIpRequestFormGroup() {
		return new FormGroup<GetDedicatedIpRequestFormProperties>({
		});

	}


	/** A request to obtain more information about dedicated IP pools. */
	export interface GetDedicatedIpsRequest {
	}

	/** A request to obtain more information about dedicated IP pools. */
	export interface GetDedicatedIpsRequestFormProperties {
	}
	export function CreateGetDedicatedIpsRequestFormGroup() {
		return new FormGroup<GetDedicatedIpsRequestFormProperties>({
		});

	}


	/** <p>Retrieve information about the status of the Deliverability dashboard for your AWS account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface GetDeliverabilityDashboardOptionsRequest {
	}

	/** <p>Retrieve information about the status of the Deliverability dashboard for your AWS account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface GetDeliverabilityDashboardOptionsRequestFormProperties {
	}
	export function CreateGetDeliverabilityDashboardOptionsRequestFormGroup() {
		return new FormGroup<GetDeliverabilityDashboardOptionsRequestFormProperties>({
		});

	}


	/** A request to retrieve the results of a predictive inbox placement test. */
	export interface GetDeliverabilityTestReportRequest {
	}

	/** A request to retrieve the results of a predictive inbox placement test. */
	export interface GetDeliverabilityTestReportRequestFormProperties {
	}
	export function CreateGetDeliverabilityTestReportRequestFormGroup() {
		return new FormGroup<GetDeliverabilityTestReportRequestFormProperties>({
		});

	}


	/** Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface GetDomainDeliverabilityCampaignRequest {
	}

	/** Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation). */
	export interface GetDomainDeliverabilityCampaignRequestFormProperties {
	}
	export function CreateGetDomainDeliverabilityCampaignRequestFormGroup() {
		return new FormGroup<GetDomainDeliverabilityCampaignRequestFormProperties>({
		});

	}


	/** A request to obtain deliverability metrics for a domain. */
	export interface GetDomainStatisticsReportRequest {
	}

	/** A request to obtain deliverability metrics for a domain. */
	export interface GetDomainStatisticsReportRequestFormProperties {
	}
	export function CreateGetDomainStatisticsReportRequestFormGroup() {
		return new FormGroup<GetDomainStatisticsReportRequestFormProperties>({
		});

	}


	/** A request to return details about an email identity. */
	export interface GetEmailIdentityRequest {
	}

	/** A request to return details about an email identity. */
	export interface GetEmailIdentityRequestFormProperties {
	}
	export function CreateGetEmailIdentityRequestFormGroup() {
		return new FormGroup<GetEmailIdentityRequestFormProperties>({
		});

	}


	/** A request to retrieve information about an email address that's on the suppression list for your account. */
	export interface GetSuppressedDestinationRequest {
	}

	/** A request to retrieve information about an email address that's on the suppression list for your account. */
	export interface GetSuppressedDestinationRequestFormProperties {
	}
	export function CreateGetSuppressedDestinationRequestFormGroup() {
		return new FormGroup<GetSuppressedDestinationRequestFormProperties>({
		});

	}


	/** A request to obtain a list of configuration sets for your Amazon SES account in the current AWS Region. */
	export interface ListConfigurationSetsRequest {
	}

	/** A request to obtain a list of configuration sets for your Amazon SES account in the current AWS Region. */
	export interface ListConfigurationSetsRequestFormProperties {
	}
	export function CreateListConfigurationSetsRequestFormGroup() {
		return new FormGroup<ListConfigurationSetsRequestFormProperties>({
		});

	}


	/** A request to obtain a list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsRequest {
	}

	/** A request to obtain a list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsRequestFormProperties {
	}
	export function CreateListDedicatedIpPoolsRequestFormGroup() {
		return new FormGroup<ListDedicatedIpPoolsRequestFormProperties>({
		});

	}


	/** A request to list all of the predictive inbox placement tests that you've performed. */
	export interface ListDeliverabilityTestReportsRequest {
	}

	/** A request to list all of the predictive inbox placement tests that you've performed. */
	export interface ListDeliverabilityTestReportsRequestFormProperties {
	}
	export function CreateListDeliverabilityTestReportsRequestFormGroup() {
		return new FormGroup<ListDeliverabilityTestReportsRequestFormProperties>({
		});

	}


	/** Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard. */
	export interface ListDomainDeliverabilityCampaignsRequest {
	}

	/** Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard. */
	export interface ListDomainDeliverabilityCampaignsRequestFormProperties {
	}
	export function CreateListDomainDeliverabilityCampaignsRequestFormGroup() {
		return new FormGroup<ListDomainDeliverabilityCampaignsRequestFormProperties>({
		});

	}


	/** A request to list all of the email identities associated with your AWS account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified. */
	export interface ListEmailIdentitiesRequest {
	}

	/** A request to list all of the email identities associated with your AWS account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified. */
	export interface ListEmailIdentitiesRequestFormProperties {
	}
	export function CreateListEmailIdentitiesRequestFormGroup() {
		return new FormGroup<ListEmailIdentitiesRequestFormProperties>({
		});

	}


	/** A request to obtain a list of email destinations that are on the suppression list for your account. */
	export interface ListSuppressedDestinationsRequest {
	}

	/** A request to obtain a list of email destinations that are on the suppression list for your account. */
	export interface ListSuppressedDestinationsRequestFormProperties {
	}
	export function CreateListSuppressedDestinationsRequestFormGroup() {
		return new FormGroup<ListSuppressedDestinationsRequestFormProperties>({
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


	/** <p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon SES hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon SES detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon SES can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon SES from determining the status of the MAIL FROM domain.</p> </li> </ul> */
	export enum MailFromDomainStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3 }


	/** A request to enable or disable the automatic IP address warm-up feature. */
	export interface PutAccountDedicatedIpWarmupAttributesRequest {
		AutoWarmupEnabled?: boolean | null;
	}

	/** A request to enable or disable the automatic IP address warm-up feature. */
	export interface PutAccountDedicatedIpWarmupAttributesRequestFormProperties {
		AutoWarmupEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountDedicatedIpWarmupAttributesRequestFormGroup() {
		return new FormGroup<PutAccountDedicatedIpWarmupAttributesRequestFormProperties>({
			AutoWarmupEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to change the ability of your account to send email. */
	export interface PutAccountSendingAttributesRequest {
		SendingEnabled?: boolean | null;
	}

	/** A request to change the ability of your account to send email. */
	export interface PutAccountSendingAttributesRequestFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountSendingAttributesRequestFormGroup() {
		return new FormGroup<PutAccountSendingAttributesRequestFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to change your account's suppression preferences. */
	export interface PutAccountSuppressionAttributesRequest {
		SuppressedReasons?: Array<SuppressionListReason>;
	}

	/** A request to change your account's suppression preferences. */
	export interface PutAccountSuppressionAttributesRequestFormProperties {
	}
	export function CreatePutAccountSuppressionAttributesRequestFormGroup() {
		return new FormGroup<PutAccountSuppressionAttributesRequestFormProperties>({
		});

	}


	/** A request to associate a configuration set with a dedicated IP pool. */
	export interface PutConfigurationSetDeliveryOptionsRequest {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy?: TlsPolicy | null;

		/** The name of the dedicated IP pool that you want to associate with the configuration set. */
		SendingPoolName?: string | null;
	}

	/** A request to associate a configuration set with a dedicated IP pool. */
	export interface PutConfigurationSetDeliveryOptionsRequestFormProperties {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,

		/** The name of the dedicated IP pool that you want to associate with the configuration set. */
		SendingPoolName: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetDeliveryOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetDeliveryOptionsRequestFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			SendingPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to enable or disable tracking of reputation metrics for a configuration set. */
	export interface PutConfigurationSetReputationOptionsRequest {
		ReputationMetricsEnabled?: boolean | null;
	}

	/** A request to enable or disable tracking of reputation metrics for a configuration set. */
	export interface PutConfigurationSetReputationOptionsRequestFormProperties {
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutConfigurationSetReputationOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetReputationOptionsRequestFormProperties>({
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to enable or disable the ability of Amazon SES to send emails that use a specific configuration set. */
	export interface PutConfigurationSetSendingOptionsRequest {
		SendingEnabled?: boolean | null;
	}

	/** A request to enable or disable the ability of Amazon SES to send emails that use a specific configuration set. */
	export interface PutConfigurationSetSendingOptionsRequestFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutConfigurationSetSendingOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetSendingOptionsRequestFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to change the account suppression list preferences for a specific configuration set. */
	export interface PutConfigurationSetSuppressionOptionsRequest {
		SuppressedReasons?: Array<SuppressionListReason>;
	}

	/** A request to change the account suppression list preferences for a specific configuration set. */
	export interface PutConfigurationSetSuppressionOptionsRequestFormProperties {
	}
	export function CreatePutConfigurationSetSuppressionOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetSuppressionOptionsRequestFormProperties>({
		});

	}


	/** A request to add a custom domain for tracking open and click events to a configuration set. */
	export interface PutConfigurationSetTrackingOptionsRequest {

		/** The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain?: string | null;
	}

	/** A request to add a custom domain for tracking open and click events to a configuration set. */
	export interface PutConfigurationSetTrackingOptionsRequestFormProperties {

		/** The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetTrackingOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetTrackingOptionsRequestFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to move a dedicated IP address to a dedicated IP pool. */
	export interface PutDedicatedIpInPoolRequest {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		DestinationPoolName: string;
	}

	/** A request to move a dedicated IP address to a dedicated IP pool. */
	export interface PutDedicatedIpInPoolRequestFormProperties {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		DestinationPoolName: FormControl<string | null | undefined>,
	}
	export function CreatePutDedicatedIpInPoolRequestFormGroup() {
		return new FormGroup<PutDedicatedIpInPoolRequestFormProperties>({
			DestinationPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address. */
	export interface PutDedicatedIpWarmupAttributesRequest {
		WarmupPercentage: number;
	}

	/** A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address. */
	export interface PutDedicatedIpWarmupAttributesRequestFormProperties {
		WarmupPercentage: FormControl<number | null | undefined>,
	}
	export function CreatePutDedicatedIpWarmupAttributesRequestFormGroup() {
		return new FormGroup<PutDedicatedIpWarmupAttributesRequestFormProperties>({
			WarmupPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface PutDeliverabilityDashboardOptionRequest {
		DashboardEnabled: boolean;

		/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
		SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}

	/** <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface PutDeliverabilityDashboardOptionRequestFormProperties {
		DashboardEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutDeliverabilityDashboardOptionRequestFormGroup() {
		return new FormGroup<PutDeliverabilityDashboardOptionRequestFormProperties>({
			DashboardEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to enable or disable DKIM signing of email that you send from an email identity. */
	export interface PutEmailIdentityDkimAttributesRequest {
		SigningEnabled?: boolean | null;
	}

	/** A request to enable or disable DKIM signing of email that you send from an email identity. */
	export interface PutEmailIdentityDkimAttributesRequestFormProperties {
		SigningEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityDkimAttributesRequestFormProperties>({
			SigningEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to change the DKIM attributes for an email identity. */
	export interface PutEmailIdentityDkimSigningAttributesRequest {
		SigningAttributesOrigin: DkimAttributesSigningAttributesOrigin;

		/** An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM). */
		SigningAttributes?: DkimSigningAttributes;
	}

	/** A request to change the DKIM attributes for an email identity. */
	export interface PutEmailIdentityDkimSigningAttributesRequestFormProperties {
		SigningAttributesOrigin: FormControl<DkimAttributesSigningAttributesOrigin | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimSigningAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityDkimSigningAttributesRequestFormProperties>({
			SigningAttributesOrigin: new FormControl<DkimAttributesSigningAttributesOrigin | null | undefined>(undefined),
		});

	}


	/** A request to set the attributes that control how bounce and complaint events are processed. */
	export interface PutEmailIdentityFeedbackAttributesRequest {
		EmailForwardingEnabled?: boolean | null;
	}

	/** A request to set the attributes that control how bounce and complaint events are processed. */
	export interface PutEmailIdentityFeedbackAttributesRequestFormProperties {
		EmailForwardingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEmailIdentityFeedbackAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityFeedbackAttributesRequestFormProperties>({
			EmailForwardingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to configure the custom MAIL FROM domain for a verified identity. */
	export interface PutEmailIdentityMailFromAttributesRequest {

		/** The domain that you want to use as a MAIL FROM domain. */
		MailFromDomain?: string | null;

		/** <p>The action that you want to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure?: MailFromAttributesBehaviorOnMxFailure | null;
	}

	/** A request to configure the custom MAIL FROM domain for a verified identity. */
	export interface PutEmailIdentityMailFromAttributesRequestFormProperties {

		/** The domain that you want to use as a MAIL FROM domain. */
		MailFromDomain: FormControl<string | null | undefined>,

		/** <p>The action that you want to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure: FormControl<MailFromAttributesBehaviorOnMxFailure | null | undefined>,
	}
	export function CreatePutEmailIdentityMailFromAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityMailFromAttributesRequestFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined),
			BehaviorOnMxFailure: new FormControl<MailFromAttributesBehaviorOnMxFailure | null | undefined>(undefined),
		});

	}


	/** A request to add an email destination to the suppression list for your account. */
	export interface PutSuppressedDestinationRequest {
		EmailAddress: string;

		/**
		 * <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>
		 * Required
		 */
		Reason: SuppressionListReason;
	}

	/** A request to add an email destination to the suppression list for your account. */
	export interface PutSuppressedDestinationRequestFormProperties {
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>
		 * Required
		 */
		Reason: FormControl<SuppressionListReason | null | undefined>,
	}
	export function CreatePutSuppressedDestinationRequestFormGroup() {
		return new FormGroup<PutSuppressedDestinationRequestFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<SuppressionListReason | null | undefined>(undefined),
		});

	}


	/** A request to send an email message. */
	export interface SendEmailRequest {
		FromEmailAddress?: string | null;

		/**
		 * An object that describes the recipients for an email.
		 * Required
		 */
		Destination: Destination;
		ReplyToAddresses?: Array<string>;
		FeedbackForwardingEmailAddress?: string | null;

		/**
		 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
		 * Required
		 */
		Content: EmailContent;

		/** A list of message tags. */
		EmailTags?: Array<MessageTag>;

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string | null;
	}

	/** A request to send an email message. */
	export interface SendEmailRequestFormProperties {
		FromEmailAddress: FormControl<string | null | undefined>,
		FeedbackForwardingEmailAddress: FormControl<string | null | undefined>,

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailRequestFormGroup() {
		return new FormGroup<SendEmailRequestFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddress: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
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


	/** A request to change the settings for an event destination for a configuration set. */
	export interface UpdateConfigurationSetEventDestinationRequest {

		/**
		 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
		 * Required
		 */
		EventDestination: EventDestinationDefinition;
	}

	/** A request to change the settings for an event destination for a configuration set. */
	export interface UpdateConfigurationSetEventDestinationRequestFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails that you send. You apply a configuration set to an email by specifying the name of the configuration set when you call the Amazon SES API v2. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.
		 * Post v2/email/configuration-sets
		 * @return {CreateConfigurationSetResponse} Success
		 */
		CreateConfigurationSet(requestBody: CreateConfigurationSetPostBody): Observable<CreateConfigurationSetResponse> {
			return this.http.post<CreateConfigurationSetResponse>(this.baseUri + 'v2/email/configuration-sets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List all of the configuration sets associated with your account in the current region.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Get v2/email/configuration-sets
		 * @param {string} NextToken A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position in the list of configuration sets.
		 * @param {number} PageSize The number of results to show in a single call to <code>ListConfigurationSets</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {ListConfigurationSetsResponse} Success
		 */
		ListConfigurationSets(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListConfigurationSetsResponse> {
			return this.http.get<ListConfigurationSetsResponse>(this.baseUri + 'v2/email/configuration-sets?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * <p>Create an event destination. <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
		 * Post v2/email/configuration-sets/{ConfigurationSetName}/event-destinations
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to add an event destination to.
		 * @return {CreateConfigurationSetEventDestinationResponse} Success
		 */
		CreateConfigurationSetEventDestination(ConfigurationSetName: string, requestBody: CreateConfigurationSetEventDestinationPostBody): Observable<CreateConfigurationSetEventDestinationResponse> {
			return this.http.post<CreateConfigurationSetEventDestinationResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Get v2/email/configuration-sets/{ConfigurationSetName}/event-destinations
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination.
		 * @return {GetConfigurationSetEventDestinationsResponse} Success
		 */
		GetConfigurationSetEventDestinations(ConfigurationSetName: string): Observable<GetConfigurationSetEventDestinationsResponse> {
			return this.http.get<GetConfigurationSetEventDestinationsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations', {});
		}

		/**
		 * Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your AWS account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
		 * Post v2/email/dedicated-ip-pools
		 * @return {CreateDedicatedIpPoolResponse} Success
		 */
		CreateDedicatedIpPool(requestBody: CreateDedicatedIpPoolPostBody): Observable<CreateDedicatedIpPoolResponse> {
			return this.http.post<CreateDedicatedIpPoolResponse>(this.baseUri + 'v2/email/dedicated-ip-pools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all of the dedicated IP pools that exist in your AWS account in the current Region.
		 * Get v2/email/dedicated-ip-pools
		 * @param {string} NextToken A token returned from a previous call to <code>ListDedicatedIpPools</code> to indicate the position in the list of dedicated IP pools.
		 * @param {number} PageSize The number of results to show in a single call to <code>ListDedicatedIpPools</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {ListDedicatedIpPoolsResponse} Success
		 */
		ListDedicatedIpPools(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListDedicatedIpPoolsResponse> {
			return this.http.get<ListDedicatedIpPoolsResponse>(this.baseUri + 'v2/email/dedicated-ip-pools?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon SES then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
		 * Post v2/email/deliverability-dashboard/test
		 * @return {CreateDeliverabilityTestReportResponse} Success
		 */
		CreateDeliverabilityTestReport(requestBody: CreateDeliverabilityTestReportPostBody): Observable<CreateDeliverabilityTestReportResponse> {
			return this.http.post<CreateDeliverabilityTestReportResponse>(this.baseUri + 'v2/email/deliverability-dashboard/test', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key that you want to use for DKIM authentication) and a private key.</p>
		 * Post v2/email/identities
		 * @return {CreateEmailIdentityResponse} Success
		 */
		CreateEmailIdentity(requestBody: CreateEmailIdentityPostBody): Observable<CreateEmailIdentityResponse> {
			return this.http.post<CreateEmailIdentityResponse>(this.baseUri + 'v2/email/identities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all of the email identities that are associated with your AWS account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.
		 * Get v2/email/identities
		 * @param {string} NextToken A token returned from a previous call to <code>ListEmailIdentities</code> to indicate the position in the list of identities.
		 * @param {number} PageSize <p>The number of results to show in a single call to <code>ListEmailIdentities</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
		 * @return {ListEmailIdentitiesResponse} Success
		 */
		ListEmailIdentities(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListEmailIdentitiesResponse> {
			return this.http.get<ListEmailIdentitiesResponse>(this.baseUri + 'v2/email/identities?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * <p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Delete v2/email/configuration-sets/{ConfigurationSetName}
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to delete.
		 * @return {DeleteConfigurationSetResponse} Success
		 */
		DeleteConfigurationSet(ConfigurationSetName: string): Observable<DeleteConfigurationSetResponse> {
			return this.http.delete<DeleteConfigurationSetResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)), {});
		}

		/**
		 * <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Get v2/email/configuration-sets/{ConfigurationSetName}
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to obtain more information about.
		 * @return {GetConfigurationSetResponse} Success
		 */
		GetConfigurationSet(ConfigurationSetName: string): Observable<GetConfigurationSetResponse> {
			return this.http.get<GetConfigurationSetResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)), {});
		}

		/**
		 * <p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Delete v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination that you want to delete.
		 * @param {string} EventDestinationName The name of the event destination that you want to delete.
		 * @return {DeleteConfigurationSetEventDestinationResponse} Success
		 */
		DeleteConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string): Observable<DeleteConfigurationSetEventDestinationResponse> {
			return this.http.delete<DeleteConfigurationSetEventDestinationResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), {});
		}

		/**
		 * <p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination that you want to modify.
		 * @param {string} EventDestinationName The name of the event destination that you want to modify.
		 * @return {UpdateConfigurationSetEventDestinationResponse} Success
		 */
		UpdateConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string, requestBody: UpdateConfigurationSetEventDestinationPutBody): Observable<UpdateConfigurationSetEventDestinationResponse> {
			return this.http.put<UpdateConfigurationSetEventDestinationResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a dedicated IP pool.
		 * Delete v2/email/dedicated-ip-pools/{PoolName}
		 * @param {string} PoolName The name of the dedicated IP pool that you want to delete.
		 * @return {DeleteDedicatedIpPoolResponse} Success
		 */
		DeleteDedicatedIpPool(PoolName: string): Observable<DeleteDedicatedIpPoolResponse> {
			return this.http.delete<DeleteDedicatedIpPoolResponse>(this.baseUri + 'v2/email/dedicated-ip-pools/' + (PoolName == null ? '' : encodeURIComponent(PoolName)), {});
		}

		/**
		 * Deletes an email identity. An identity can be either an email address or a domain name.
		 * Delete v2/email/identities/{EmailIdentity}
		 * @param {string} EmailIdentity The identity (that is, the email address or domain) that you want to delete.
		 * @return {DeleteEmailIdentityResponse} Success
		 */
		DeleteEmailIdentity(EmailIdentity: string): Observable<DeleteEmailIdentityResponse> {
			return this.http.delete<DeleteEmailIdentityResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)), {});
		}

		/**
		 * Provides information about a specific identity, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.
		 * Get v2/email/identities/{EmailIdentity}
		 * @param {string} EmailIdentity The email identity that you want to retrieve details for.
		 * @return {GetEmailIdentityResponse} Success
		 */
		GetEmailIdentity(EmailIdentity: string): Observable<GetEmailIdentityResponse> {
			return this.http.get<GetEmailIdentityResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)), {});
		}

		/**
		 * Removes an email address from the suppression list for your account.
		 * Delete v2/email/suppression/addresses/{EmailAddress}
		 * @param {string} EmailAddress The suppressed email destination to remove from the account suppression list.
		 * @return {DeleteSuppressedDestinationResponse} Success
		 */
		DeleteSuppressedDestination(EmailAddress: string): Observable<DeleteSuppressedDestinationResponse> {
			return this.http.delete<DeleteSuppressedDestinationResponse>(this.baseUri + 'v2/email/suppression/addresses/' + (EmailAddress == null ? '' : encodeURIComponent(EmailAddress)), {});
		}

		/**
		 * Retrieves information about a specific email address that's on the suppression list for your account.
		 * Get v2/email/suppression/addresses/{EmailAddress}
		 * @param {string} EmailAddress The email address that's on the account suppression list.
		 * @return {GetSuppressedDestinationResponse} Success
		 */
		GetSuppressedDestination(EmailAddress: string): Observable<GetSuppressedDestinationResponse> {
			return this.http.get<GetSuppressedDestinationResponse>(this.baseUri + 'v2/email/suppression/addresses/' + (EmailAddress == null ? '' : encodeURIComponent(EmailAddress)), {});
		}

		/**
		 * Obtain information about the email-sending status and capabilities of your Amazon SES account in the current AWS Region.
		 * Get v2/email/account
		 * @return {GetAccountResponse} Success
		 */
		GetAccount(): Observable<GetAccountResponse> {
			return this.http.get<GetAccountResponse>(this.baseUri + 'v2/email/account', {});
		}

		/**
		 * Retrieve a list of the blacklists that your dedicated IP addresses appear on.
		 * Get v2/email/deliverability-dashboard/blacklist-report#BlacklistItemNames
		 * @param {Array<string>} BlacklistItemNames A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon SES or Amazon Pinpoint.
		 * @return {GetBlacklistReportsResponse} Success
		 */
		GetBlacklistReports(BlacklistItemNames: Array<string>): Observable<GetBlacklistReportsResponse> {
			return this.http.get<GetBlacklistReportsResponse>(this.baseUri + 'v2/email/deliverability-dashboard/blacklist-report#BlacklistItemNames?' + BlacklistItemNames.map(z => `BlacklistItemNames=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
		 * Get v2/email/dedicated-ips/{IP}
		 * @param {string} IP The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your AWS account.
		 * @return {GetDedicatedIpResponse} Success
		 */
		GetDedicatedIp(IP: string): Observable<GetDedicatedIpResponse> {
			return this.http.get<GetDedicatedIpResponse>(this.baseUri + 'v2/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)), {});
		}

		/**
		 * List the dedicated IP addresses that are associated with your AWS account.
		 * Get v2/email/dedicated-ips
		 * @param {string} PoolName The name of the IP pool that the dedicated IP address is associated with.
		 * @param {string} NextToken A token returned from a previous call to <code>GetDedicatedIps</code> to indicate the position of the dedicated IP pool in the list of IP pools.
		 * @param {number} PageSize The number of results to show in a single call to <code>GetDedicatedIpsRequest</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {GetDedicatedIpsResponse} Success
		 */
		GetDedicatedIps(PoolName: string | null | undefined, NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<GetDedicatedIpsResponse> {
			return this.http.get<GetDedicatedIpsResponse>(this.baseUri + 'v2/email/dedicated-ips?PoolName=' + (PoolName == null ? '' : encodeURIComponent(PoolName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * <p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
		 * Get v2/email/deliverability-dashboard
		 * @return {GetDeliverabilityDashboardOptionsResponse} Success
		 */
		GetDeliverabilityDashboardOptions(): Observable<GetDeliverabilityDashboardOptionsResponse> {
			return this.http.get<GetDeliverabilityDashboardOptionsResponse>(this.baseUri + 'v2/email/deliverability-dashboard', {});
		}

		/**
		 * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other AWS services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
		 * Put v2/email/deliverability-dashboard
		 * @return {PutDeliverabilityDashboardOptionResponse} Success
		 */
		PutDeliverabilityDashboardOption(requestBody: PutDeliverabilityDashboardOptionPutBody): Observable<PutDeliverabilityDashboardOptionResponse> {
			return this.http.put<PutDeliverabilityDashboardOptionResponse>(this.baseUri + 'v2/email/deliverability-dashboard', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the results of a predictive inbox placement test.
		 * Get v2/email/deliverability-dashboard/test-reports/{ReportId}
		 * @param {string} ReportId A unique string that identifies the predictive inbox placement test.
		 * @return {GetDeliverabilityTestReportResponse} Success
		 */
		GetDeliverabilityTestReport(ReportId: string): Observable<GetDeliverabilityTestReportResponse> {
			return this.http.get<GetDeliverabilityTestReportResponse>(this.baseUri + 'v2/email/deliverability-dashboard/test-reports/' + (ReportId == null ? '' : encodeURIComponent(ReportId)), {});
		}

		/**
		 * Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
		 * Get v2/email/deliverability-dashboard/campaigns/{CampaignId}
		 * @param {string} CampaignId The unique identifier for the campaign. The Deliverability dashboard automatically generates and assigns this identifier to a campaign.
		 * @return {GetDomainDeliverabilityCampaignResponse} Success
		 */
		GetDomainDeliverabilityCampaign(CampaignId: string): Observable<GetDomainDeliverabilityCampaignResponse> {
			return this.http.get<GetDomainDeliverabilityCampaignResponse>(this.baseUri + 'v2/email/deliverability-dashboard/campaigns/' + (CampaignId == null ? '' : encodeURIComponent(CampaignId)), {});
		}

		/**
		 * Retrieve inbox placement and engagement rates for the domains that you use to send email.
		 * Get v2/email/deliverability-dashboard/statistics-report/{Domain}#StartDate&EndDate
		 * @param {string} Domain The domain that you want to obtain deliverability metrics for.
		 * @param {Date} StartDate The first day (in Unix time) that you want to obtain domain deliverability metrics for.
		 * @param {Date} EndDate The last day (in Unix time) that you want to obtain domain deliverability metrics for. The <code>EndDate</code> that you specify has to be less than or equal to 30 days after the <code>StartDate</code>.
		 * @return {GetDomainStatisticsReportResponse} Success
		 */
		GetDomainStatisticsReport(Domain: string, StartDate: Date, EndDate: Date): Observable<GetDomainStatisticsReportResponse> {
			return this.http.get<GetDomainStatisticsReportResponse>(this.baseUri + 'v2/email/deliverability-dashboard/statistics-report/' + (Domain == null ? '' : encodeURIComponent(Domain)) + '#StartDate&EndDate&StartDate=' + StartDate.toISOString() + '&EndDate=' + EndDate.toISOString(), {});
		}

		/**
		 * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
		 * Get v2/email/deliverability-dashboard/test-reports
		 * @param {string} NextToken A token returned from a previous call to <code>ListDeliverabilityTestReports</code> to indicate the position in the list of predictive inbox placement tests.
		 * @param {number} PageSize <p>The number of results to show in a single call to <code>ListDeliverabilityTestReports</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
		 * @return {ListDeliverabilityTestReportsResponse} Success
		 */
		ListDeliverabilityTestReports(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListDeliverabilityTestReportsResponse> {
			return this.http.get<ListDeliverabilityTestReportsResponse>(this.baseUri + 'v2/email/deliverability-dashboard/test-reports?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
		 * Get v2/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns#StartDate&EndDate
		 * @param {Date} StartDate The first day, in Unix time format, that you want to obtain deliverability data for.
		 * @param {Date} EndDate The last day, in Unix time format, that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the <code>StartDate</code> parameter.
		 * @param {string} SubscribedDomain The domain to obtain deliverability data for.
		 * @param {string} NextToken A token that’s returned from a previous call to the <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the position of a campaign in the list of campaigns.
		 * @param {number} PageSize The maximum number of results to include in response to a single call to the <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results is larger than the number that you specify in this parameter, the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {ListDomainDeliverabilityCampaignsResponse} Success
		 */
		ListDomainDeliverabilityCampaigns(StartDate: Date, EndDate: Date, SubscribedDomain: string, NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListDomainDeliverabilityCampaignsResponse> {
			return this.http.get<ListDomainDeliverabilityCampaignsResponse>(this.baseUri + 'v2/email/deliverability-dashboard/domains/' + (SubscribedDomain == null ? '' : encodeURIComponent(SubscribedDomain)) + '/campaigns#StartDate&EndDate?StartDate=' + StartDate.toISOString() + '&EndDate=' + EndDate.toISOString() + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * Retrieves a list of email addresses that are on the suppression list for your account.
		 * Get v2/email/suppression/addresses
		 * @param {Array<SuppressionListReason>} Reason The factors that caused the email address to be added to .
		 * @param {Date} StartDate Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list after a specific date. The date that you specify should be in Unix time format.
		 * @param {Date} EndDate Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list before a specific date. The date that you specify should be in Unix time format.
		 * @param {string} NextToken A token returned from a previous call to <code>ListSuppressedDestinations</code> to indicate the position in the list of suppressed email addresses.
		 * @param {number} PageSize The number of results to show in a single call to <code>ListSuppressedDestinations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {ListSuppressedDestinationsResponse} Success
		 */
		ListSuppressedDestinations(Reason: Array<SuppressionListReason> | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListSuppressedDestinationsResponse> {
			return this.http.get<ListSuppressedDestinationsResponse>(this.baseUri + 'v2/email/suppression/addresses?' + Reason?.map(z => `Reason=${z}`).join('&') + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * Adds an email address to the suppression list for your account.
		 * Put v2/email/suppression/addresses
		 * @return {PutSuppressedDestinationResponse} Success
		 */
		PutSuppressedDestination(requestBody: PutSuppressedDestinationPutBody): Observable<PutSuppressedDestinationResponse> {
			return this.http.put<PutSuppressedDestinationResponse>(this.baseUri + 'v2/email/suppression/addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
		 * Get v2/email/tags#ResourceArn
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to retrieve tag information for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v2/email/tags#ResourceArn?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Enable or disable the automatic warm-up feature for dedicated IP addresses.
		 * Put v2/email/account/dedicated-ips/warmup
		 * @return {PutAccountDedicatedIpWarmupAttributesResponse} Success
		 */
		PutAccountDedicatedIpWarmupAttributes(requestBody: PutAccountDedicatedIpWarmupAttributesPutBody): Observable<PutAccountDedicatedIpWarmupAttributesResponse> {
			return this.http.put<PutAccountDedicatedIpWarmupAttributesResponse>(this.baseUri + 'v2/email/account/dedicated-ips/warmup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable or disable the ability of your account to send email.
		 * Put v2/email/account/sending
		 * @return {PutAccountSendingAttributesResponse} Success
		 */
		PutAccountSendingAttributes(requestBody: PutAccountSendingAttributesPutBody): Observable<PutAccountSendingAttributesResponse> {
			return this.http.put<PutAccountSendingAttributesResponse>(this.baseUri + 'v2/email/account/sending', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change the settings for the account-level suppression list.
		 * Put v2/email/account/suppression
		 * @return {PutAccountSuppressionAttributesResponse} Success
		 */
		PutAccountSuppressionAttributes(requestBody: PutAccountSuppressionAttributesPutBody): Observable<PutAccountSuppressionAttributesResponse> {
			return this.http.put<PutAccountSuppressionAttributesResponse>(this.baseUri + 'v2/email/account/suppression', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/delivery-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to associate with a dedicated IP pool.
		 * @return {PutConfigurationSetDeliveryOptionsResponse} Success
		 */
		PutConfigurationSetDeliveryOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetDeliveryOptionsPutBody): Observable<PutConfigurationSetDeliveryOptionsResponse> {
			return this.http.put<PutConfigurationSetDeliveryOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/delivery-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/reputation-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to enable or disable reputation metric tracking for.
		 * @return {PutConfigurationSetReputationOptionsResponse} Success
		 */
		PutConfigurationSetReputationOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetReputationOptionsPutBody): Observable<PutConfigurationSetReputationOptionsResponse> {
			return this.http.put<PutConfigurationSetReputationOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/reputation-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/sending
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to enable or disable email sending for.
		 * @return {PutConfigurationSetSendingOptionsResponse} Success
		 */
		PutConfigurationSetSendingOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetSendingOptionsPutBody): Observable<PutConfigurationSetSendingOptionsResponse> {
			return this.http.put<PutConfigurationSetSendingOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/sending', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specify the account suppression list preferences for a configuration set.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/suppression-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to change the suppression list preferences for.
		 * @return {PutConfigurationSetSuppressionOptionsResponse} Success
		 */
		PutConfigurationSetSuppressionOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetSuppressionOptionsPutBody): Observable<PutConfigurationSetSuppressionOptionsResponse> {
			return this.http.put<PutConfigurationSetSuppressionOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/suppression-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specify a custom domain to use for open and click tracking elements in email that you send.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/tracking-options
		 * @param {string} ConfigurationSetName The name of the configuration set that you want to add a custom tracking domain to.
		 * @return {PutConfigurationSetTrackingOptionsResponse} Success
		 */
		PutConfigurationSetTrackingOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetTrackingOptionsPutBody): Observable<PutConfigurationSetTrackingOptionsResponse> {
			return this.http.put<PutConfigurationSetTrackingOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/tracking-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your AWS account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
		 * Put v2/email/dedicated-ips/{IP}/pool
		 * @param {string} IP The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your AWS account.
		 * @return {PutDedicatedIpInPoolResponse} Success
		 */
		PutDedicatedIpInPool(IP: string, requestBody: PutDedicatedIpInPoolPutBody): Observable<PutDedicatedIpInPoolResponse> {
			return this.http.put<PutDedicatedIpInPoolResponse>(this.baseUri + 'v2/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)) + '/pool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p/>
		 * Put v2/email/dedicated-ips/{IP}/warmup
		 * @param {string} IP The dedicated IP address that you want to update the warm-up attributes for.
		 * @return {PutDedicatedIpWarmupAttributesResponse} Success
		 */
		PutDedicatedIpWarmupAttributes(IP: string, requestBody: PutDedicatedIpWarmupAttributesPutBody): Observable<PutDedicatedIpWarmupAttributesResponse> {
			return this.http.put<PutDedicatedIpWarmupAttributesResponse>(this.baseUri + 'v2/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)) + '/warmup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used to enable or disable DKIM authentication for an email identity.
		 * Put v2/email/identities/{EmailIdentity}/dkim
		 * @param {string} EmailIdentity The email identity that you want to change the DKIM settings for.
		 * @return {PutEmailIdentityDkimAttributesResponse} Success
		 */
		PutEmailIdentityDkimAttributes(EmailIdentity: string, requestBody: PutEmailIdentityDkimAttributesPutBody): Observable<PutEmailIdentityDkimAttributesResponse> {
			return this.http.put<PutEmailIdentityDkimAttributesResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/dkim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>
		 * Put v1/email/identities/{EmailIdentity}/dkim/signing
		 * @param {string} EmailIdentity The email identity that you want to configure DKIM for.
		 * @return {PutEmailIdentityDkimSigningAttributesResponse} Success
		 */
		PutEmailIdentityDkimSigningAttributes(EmailIdentity: string, requestBody: PutEmailIdentityDkimSigningAttributesPutBody): Observable<PutEmailIdentityDkimSigningAttributesResponse> {
			return this.http.put<PutEmailIdentityDkimSigningAttributesResponse>(this.baseUri + 'v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/dkim/signing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>
		 * Put v2/email/identities/{EmailIdentity}/feedback
		 * @param {string} EmailIdentity The email identity that you want to configure bounce and complaint feedback forwarding for.
		 * @return {PutEmailIdentityFeedbackAttributesResponse} Success
		 */
		PutEmailIdentityFeedbackAttributes(EmailIdentity: string, requestBody: PutEmailIdentityFeedbackAttributesPutBody): Observable<PutEmailIdentityFeedbackAttributesResponse> {
			return this.http.put<PutEmailIdentityFeedbackAttributesResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used to enable or disable the custom Mail-From domain configuration for an email identity.
		 * Put v2/email/identities/{EmailIdentity}/mail-from
		 * @param {string} EmailIdentity The verified email identity that you want to set up the custom MAIL FROM domain for.
		 * @return {PutEmailIdentityMailFromAttributesResponse} Success
		 */
		PutEmailIdentityMailFromAttributes(EmailIdentity: string, requestBody: PutEmailIdentityMailFromAttributesPutBody): Observable<PutEmailIdentityMailFromAttributesResponse> {
			return this.http.put<PutEmailIdentityMailFromAttributesResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/mail-from', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends an email message. You can use the Amazon SES API v2 to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>
		 * Post v2/email/outbound-emails
		 * @return {SendEmailResponse} Success
		 */
		SendEmail(requestBody: SendEmailPostBody): Observable<SendEmailResponse> {
			return this.http.post<SendEmailResponse>(this.baseUri + 'v2/email/outbound-emails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
		 * Post v2/email/tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'v2/email/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove one or more tags (keys and values) from a specified resource.
		 * Delete v2/email/tags#ResourceArn&TagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to remove one or more tags from.
		 * @param {Array<string>} TagKeys <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.</p> <p>To remove more than one tag from the resource, append the <code>TagKeys</code> parameter and argument for each additional tag to remove, separated by an ampersand. For example: <code>/v2/email/tags?ResourceArn=ResourceArn&amp;TagKeys=Key1&amp;TagKeys=Key2</code> </p>
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, TagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'v2/email/tags#ResourceArn&TagKeys?ResourceArn=' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateConfigurationSetPostBody {

		/**
		 * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Required
		 */
		ConfigurationSetName: string;

		/** <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by AWS. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p> */
		TrackingOptions?: CreateConfigurationSetPostBodyTrackingOptions;

		/** Used to associate a configuration set with a dedicated IP pool. */
		DeliveryOptions?: CreateConfigurationSetPostBodyDeliveryOptions;

		/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. */
		ReputationOptions?: CreateConfigurationSetPostBodyReputationOptions;

		/** Used to enable or disable email sending for messages that use this configuration set in the current AWS Region. */
		SendingOptions?: CreateConfigurationSetPostBodySendingOptions;

		/** An array of objects that define the tags (keys and values) that you want to associate with the configuration set. */
		Tags?: Array<Tag>;

		/** An object that contains information about the suppression list preferences for your account. */
		SuppressionOptions?: CreateConfigurationSetPostBodySuppressionOptions;
	}
	export interface CreateConfigurationSetPostBodyFormProperties {

		/**
		 * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Required
		 */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetPostBodyTrackingOptions {

		/** The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain?: string | null;
	}
	export interface CreateConfigurationSetPostBodyTrackingOptionsFormProperties {

		/** The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyTrackingOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyTrackingOptionsFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetPostBodyDeliveryOptions {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy?: TlsPolicy | null;

		/** The name of a dedicated IP pool. */
		SendingPoolName?: string | null;
	}
	export interface CreateConfigurationSetPostBodyDeliveryOptionsFormProperties {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,

		/** The name of a dedicated IP pool. */
		SendingPoolName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyDeliveryOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyDeliveryOptionsFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			SendingPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetPostBodyReputationOptions {
		ReputationMetricsEnabled?: boolean | null;

		/** The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start. */
		LastFreshStart?: Date | null;
	}
	export interface CreateConfigurationSetPostBodyReputationOptionsFormProperties {
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,

		/** The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start. */
		LastFreshStart: FormControl<Date | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyReputationOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyReputationOptionsFormProperties>({
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LastFreshStart: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetPostBodySendingOptions {
		SendingEnabled?: boolean | null;
	}
	export interface CreateConfigurationSetPostBodySendingOptionsFormProperties {
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodySendingOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodySendingOptionsFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetPostBodySuppressionOptions {
		SuppressedReasons?: Array<SuppressionListReason>;
	}
	export interface CreateConfigurationSetPostBodySuppressionOptionsFormProperties {
	}
	export function CreateCreateConfigurationSetPostBodySuppressionOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodySuppressionOptionsFormProperties>({
		});

	}

	export interface CreateConfigurationSetEventDestinationPostBody {

		/**
		 * <p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Required
		 */
		EventDestinationName: string;

		/**
		 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
		 * Required
		 */
		EventDestination: CreateConfigurationSetEventDestinationPostBodyEventDestination;
	}
	export interface CreateConfigurationSetEventDestinationPostBodyFormProperties {

		/**
		 * <p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Required
		 */
		EventDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationPostBodyFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationPostBodyFormProperties>({
			EventDestinationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetEventDestinationPostBodyEventDestination {
		Enabled?: boolean | null;
		MatchingEventTypes?: Array<EventType>;

		/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
		CloudWatchDestination?: CloudWatchDestination;

		/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
		SnsDestination?: SnsDestination;

		/** An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>. */
		PinpointDestination?: PinpointDestination;
	}
	export interface CreateConfigurationSetEventDestinationPostBodyEventDestinationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationPostBodyEventDestinationFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationPostBodyEventDestinationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDedicatedIpPoolPostBody {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		PoolName: string;

		/** An object that defines the tags (keys and values) that you want to associate with the pool. */
		Tags?: Array<Tag>;
	}
	export interface CreateDedicatedIpPoolPostBodyFormProperties {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		PoolName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDedicatedIpPoolPostBodyFormGroup() {
		return new FormGroup<CreateDedicatedIpPoolPostBodyFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeliverabilityTestReportPostBody {

		/** A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName?: string | null;

		/**
		 * The email address that the predictive inbox placement test email was sent from.
		 * Required
		 */
		FromEmailAddress: string;

		/**
		 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
		 * Required
		 */
		Content: CreateDeliverabilityTestReportPostBodyContent;

		/** An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test. */
		Tags?: Array<Tag>;
	}
	export interface CreateDeliverabilityTestReportPostBodyFormProperties {

		/** A name that helps you identify a report generated by the Deliverability dashboard. */
		ReportName: FormControl<string | null | undefined>,

		/**
		 * The email address that the predictive inbox placement test email was sent from.
		 * Required
		 */
		FromEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeliverabilityTestReportPostBodyFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportPostBodyFormProperties>({
			ReportName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeliverabilityTestReportPostBodyContent {

		/** Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
		Simple?: Message;

		/** Represents the raw content of an email message. */
		Raw?: RawMessage;

		/** An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send. */
		Template?: Template;
	}
	export interface CreateDeliverabilityTestReportPostBodyContentFormProperties {
	}
	export function CreateCreateDeliverabilityTestReportPostBodyContentFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportPostBodyContentFormProperties>({
		});

	}

	export interface CreateEmailIdentityPostBody {

		/**
		 * The email address or domain that you want to verify.
		 * Required
		 */
		EmailIdentity: string;

		/** An array of objects that define the tags (keys and values) that you want to associate with the email identity. */
		Tags?: Array<Tag>;

		/** An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM). */
		DkimSigningAttributes?: CreateEmailIdentityPostBodyDkimSigningAttributes;
	}
	export interface CreateEmailIdentityPostBodyFormProperties {

		/**
		 * The email address or domain that you want to verify.
		 * Required
		 */
		EmailIdentity: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailIdentityPostBodyFormGroup() {
		return new FormGroup<CreateEmailIdentityPostBodyFormProperties>({
			EmailIdentity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEmailIdentityPostBodyDkimSigningAttributes {
		DomainSigningSelector?: string | null;
		DomainSigningPrivateKey?: string | null;
	}
	export interface CreateEmailIdentityPostBodyDkimSigningAttributesFormProperties {
		DomainSigningSelector: FormControl<string | null | undefined>,
		DomainSigningPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailIdentityPostBodyDkimSigningAttributesFormGroup() {
		return new FormGroup<CreateEmailIdentityPostBodyDkimSigningAttributesFormProperties>({
			DomainSigningSelector: new FormControl<string | null | undefined>(undefined),
			DomainSigningPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigurationSetEventDestinationPutBody {

		/**
		 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
		 * Required
		 */
		EventDestination: UpdateConfigurationSetEventDestinationPutBodyEventDestination;
	}
	export interface UpdateConfigurationSetEventDestinationPutBodyFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationPutBodyFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationPutBodyFormProperties>({
		});

	}

	export interface UpdateConfigurationSetEventDestinationPutBodyEventDestination {
		Enabled?: boolean | null;
		MatchingEventTypes?: Array<EventType>;

		/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
		KinesisFirehoseDestination?: KinesisFirehoseDestination;

		/** An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
		CloudWatchDestination?: CloudWatchDestination;

		/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
		SnsDestination?: SnsDestination;

		/** An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>. */
		PinpointDestination?: PinpointDestination;
	}
	export interface UpdateConfigurationSetEventDestinationPutBodyEventDestinationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateConfigurationSetEventDestinationPutBodyEventDestinationFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationPutBodyEventDestinationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutDeliverabilityDashboardOptionPutBody {

		/**
		 * Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this value to <code>true</code>.
		 * Required
		 */
		DashboardEnabled: boolean;

		/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
		SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}
	export interface PutDeliverabilityDashboardOptionPutBodyFormProperties {

		/**
		 * Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this value to <code>true</code>.
		 * Required
		 */
		DashboardEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutDeliverabilityDashboardOptionPutBodyFormGroup() {
		return new FormGroup<PutDeliverabilityDashboardOptionPutBodyFormProperties>({
			DashboardEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutSuppressedDestinationPutBody {

		/**
		 * The email address that should be added to the suppression list for your account.
		 * Required
		 */
		EmailAddress: string;

		/**
		 * <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>
		 * Required
		 */
		Reason: SuppressionListReason;
	}
	export interface PutSuppressedDestinationPutBodyFormProperties {

		/**
		 * The email address that should be added to the suppression list for your account.
		 * Required
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul>
		 * Required
		 */
		Reason: FormControl<SuppressionListReason | null | undefined>,
	}
	export function CreatePutSuppressedDestinationPutBodyFormGroup() {
		return new FormGroup<PutSuppressedDestinationPutBodyFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<SuppressionListReason | null | undefined>(undefined),
		});

	}

	export interface PutAccountDedicatedIpWarmupAttributesPutBody {

		/** Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon SES account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it. */
		AutoWarmupEnabled?: boolean | null;
	}
	export interface PutAccountDedicatedIpWarmupAttributesPutBodyFormProperties {

		/** Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon SES account in the current AWS Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it. */
		AutoWarmupEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountDedicatedIpWarmupAttributesPutBodyFormGroup() {
		return new FormGroup<PutAccountDedicatedIpWarmupAttributesPutBodyFormProperties>({
			AutoWarmupEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutAccountSendingAttributesPutBody {

		/** <p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note> */
		SendingEnabled?: boolean | null;
	}
	export interface PutAccountSendingAttributesPutBodyFormProperties {

		/** <p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note> */
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountSendingAttributesPutBodyFormGroup() {
		return new FormGroup<PutAccountSendingAttributesPutBodyFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutAccountSuppressionAttributesPutBody {

		/** <p>A list that contains the reasons that email addresses will be automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul> */
		SuppressedReasons?: Array<SuppressionListReason>;
	}
	export interface PutAccountSuppressionAttributesPutBodyFormProperties {
	}
	export function CreatePutAccountSuppressionAttributesPutBodyFormGroup() {
		return new FormGroup<PutAccountSuppressionAttributesPutBodyFormProperties>({
		});

	}

	export interface PutConfigurationSetDeliveryOptionsPutBody {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy?: TlsPolicy | null;

		/** The name of the dedicated IP pool that you want to associate with the configuration set. */
		SendingPoolName?: string | null;
	}
	export interface PutConfigurationSetDeliveryOptionsPutBodyFormProperties {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,

		/** The name of the dedicated IP pool that you want to associate with the configuration set. */
		SendingPoolName: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetDeliveryOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetDeliveryOptionsPutBodyFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			SendingPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutConfigurationSetReputationOptionsPutBody {

		/** If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set. */
		ReputationMetricsEnabled?: boolean | null;
	}
	export interface PutConfigurationSetReputationOptionsPutBodyFormProperties {

		/** If <code>true</code>, tracking of reputation metrics is enabled for the configuration set. If <code>false</code>, tracking of reputation metrics is disabled for the configuration set. */
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutConfigurationSetReputationOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetReputationOptionsPutBodyFormProperties>({
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutConfigurationSetSendingOptionsPutBody {

		/** If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set. */
		SendingEnabled?: boolean | null;
	}
	export interface PutConfigurationSetSendingOptionsPutBodyFormProperties {

		/** If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set. */
		SendingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutConfigurationSetSendingOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetSendingOptionsPutBodyFormProperties>({
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutConfigurationSetSuppressionOptionsPutBody {

		/** <p>A list that contains the reasons that email addresses are automatically added to the suppression list for your account. This list can contain any or all of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.</p> </li> </ul> */
		SuppressedReasons?: Array<SuppressionListReason>;
	}
	export interface PutConfigurationSetSuppressionOptionsPutBodyFormProperties {
	}
	export function CreatePutConfigurationSetSuppressionOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetSuppressionOptionsPutBodyFormProperties>({
		});

	}

	export interface PutConfigurationSetTrackingOptionsPutBody {

		/** The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain?: string | null;
	}
	export interface PutConfigurationSetTrackingOptionsPutBodyFormProperties {

		/** The domain that you want to use for tracking open and click events. */
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetTrackingOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetTrackingOptionsPutBodyFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutDedicatedIpInPoolPutBody {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		DestinationPoolName: string;
	}
	export interface PutDedicatedIpInPoolPutBodyFormProperties {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		DestinationPoolName: FormControl<string | null | undefined>,
	}
	export function CreatePutDedicatedIpInPoolPutBodyFormGroup() {
		return new FormGroup<PutDedicatedIpInPoolPutBodyFormProperties>({
			DestinationPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutDedicatedIpWarmupAttributesPutBody {

		/**
		 * The warm-up percentage that you want to associate with the dedicated IP address.
		 * Required
		 */
		WarmupPercentage: number;
	}
	export interface PutDedicatedIpWarmupAttributesPutBodyFormProperties {

		/**
		 * The warm-up percentage that you want to associate with the dedicated IP address.
		 * Required
		 */
		WarmupPercentage: FormControl<number | null | undefined>,
	}
	export function CreatePutDedicatedIpWarmupAttributesPutBodyFormGroup() {
		return new FormGroup<PutDedicatedIpWarmupAttributesPutBodyFormProperties>({
			WarmupPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutEmailIdentityDkimAttributesPutBody {

		/** <p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that are sent from the identity are signed using DKIM. If you set this value to <code>false</code>, your messages are sent without DKIM signing.</p> */
		SigningEnabled?: boolean | null;
	}
	export interface PutEmailIdentityDkimAttributesPutBodyFormProperties {

		/** <p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that are sent from the identity are signed using DKIM. If you set this value to <code>false</code>, your messages are sent without DKIM signing.</p> */
		SigningEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityDkimAttributesPutBodyFormProperties>({
			SigningEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutEmailIdentityDkimSigningAttributesPutBody {

		/**
		 * <p>The method that you want to use to configure DKIM for the identity. There are two possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>
		 * Required
		 */
		SigningAttributesOrigin: DkimAttributesSigningAttributesOrigin;

		/** An object that contains information about the tokens used for setting up Bring Your Own DKIM (BYODKIM). */
		SigningAttributes?: PutEmailIdentityDkimSigningAttributesPutBodySigningAttributes;
	}
	export interface PutEmailIdentityDkimSigningAttributesPutBodyFormProperties {

		/**
		 * <p>The method that you want to use to configure DKIM for the identity. There are two possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>
		 * Required
		 */
		SigningAttributesOrigin: FormControl<DkimAttributesSigningAttributesOrigin | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimSigningAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityDkimSigningAttributesPutBodyFormProperties>({
			SigningAttributesOrigin: new FormControl<DkimAttributesSigningAttributesOrigin | null | undefined>(undefined),
		});

	}

	export interface PutEmailIdentityDkimSigningAttributesPutBodySigningAttributes {
		DomainSigningSelector?: string | null;
		DomainSigningPrivateKey?: string | null;
	}
	export interface PutEmailIdentityDkimSigningAttributesPutBodySigningAttributesFormProperties {
		DomainSigningSelector: FormControl<string | null | undefined>,
		DomainSigningPrivateKey: FormControl<string | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimSigningAttributesPutBodySigningAttributesFormGroup() {
		return new FormGroup<PutEmailIdentityDkimSigningAttributesPutBodySigningAttributesFormProperties>({
			DomainSigningSelector: new FormControl<string | null | undefined>(undefined),
			DomainSigningPrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEmailIdentityFeedbackAttributesPutBody {

		/** <p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p> */
		EmailForwardingEnabled?: boolean | null;
	}
	export interface PutEmailIdentityFeedbackAttributesPutBodyFormProperties {

		/** <p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p> */
		EmailForwardingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutEmailIdentityFeedbackAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityFeedbackAttributesPutBodyFormProperties>({
			EmailForwardingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutEmailIdentityMailFromAttributesPutBody {

		/** The domain that you want to use as a MAIL FROM domain. */
		MailFromDomain?: string | null;

		/** <p>The action that you want to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure?: MailFromAttributesBehaviorOnMxFailure | null;
	}
	export interface PutEmailIdentityMailFromAttributesPutBodyFormProperties {

		/** The domain that you want to use as a MAIL FROM domain. */
		MailFromDomain: FormControl<string | null | undefined>,

		/** <p>The action that you want to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure: FormControl<MailFromAttributesBehaviorOnMxFailure | null | undefined>,
	}
	export function CreatePutEmailIdentityMailFromAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityMailFromAttributesPutBodyFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined),
			BehaviorOnMxFailure: new FormControl<MailFromAttributesBehaviorOnMxFailure | null | undefined>(undefined),
		});

	}

	export interface SendEmailPostBody {

		/** The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. */
		FromEmailAddress?: string | null;

		/**
		 * An object that describes the recipients for an email.
		 * Required
		 */
		Destination: SendEmailPostBodyDestination;

		/** The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply. */
		ReplyToAddresses?: Array<string>;

		/** The address that you want bounce and complaint notifications to be sent to. */
		FeedbackForwardingEmailAddress?: string | null;

		/**
		 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
		 * Required
		 */
		Content: SendEmailPostBodyContent;

		/** A list of message tags. */
		EmailTags?: Array<MessageTag>;

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string | null;
	}
	export interface SendEmailPostBodyFormProperties {

		/** The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. */
		FromEmailAddress: FormControl<string | null | undefined>,

		/** The address that you want bounce and complaint notifications to be sent to. */
		FeedbackForwardingEmailAddress: FormControl<string | null | undefined>,

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailPostBodyFormGroup() {
		return new FormGroup<SendEmailPostBodyFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddress: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendEmailPostBodyDestination {
		ToAddresses?: Array<string>;
		CcAddresses?: Array<string>;
		BccAddresses?: Array<string>;
	}
	export interface SendEmailPostBodyDestinationFormProperties {
	}
	export function CreateSendEmailPostBodyDestinationFormGroup() {
		return new FormGroup<SendEmailPostBodyDestinationFormProperties>({
		});

	}

	export interface SendEmailPostBodyContent {

		/** Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
		Simple?: Message;

		/** Represents the raw content of an email message. */
		Raw?: RawMessage;

		/** An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send. */
		Template?: Template;
	}
	export interface SendEmailPostBodyContentFormProperties {
	}
	export function CreateSendEmailPostBodyContentFormGroup() {
		return new FormGroup<SendEmailPostBodyContentFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.
		 * Required
		 */
		ResourceArn: string;

		/**
		 * A list of the tags that you want to add to the resource. A tag consists of a required tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
		 * Required
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

}

