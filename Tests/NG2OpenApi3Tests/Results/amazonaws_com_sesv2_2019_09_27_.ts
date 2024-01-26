import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the result of processing your metric data batch request */
	export interface BatchGetMetricDataResponse {
		Results?: Array<MetricDataResult>;
		Errors?: Array<MetricDataError>;
	}

	/** Represents the result of processing your metric data batch request */
	export interface BatchGetMetricDataResponseFormProperties {
	}
	export function CreateBatchGetMetricDataResponseFormGroup() {
		return new FormGroup<BatchGetMetricDataResponseFormProperties>({
		});

	}


	/** The result of a single metric data query. */
	export interface MetricDataResult {
		Id?: string;
		Timestamps?: Array<string>;
		Values?: Array<number> | null;
	}

	/** The result of a single metric data query. */
	export interface MetricDataResultFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateMetricDataResultFormGroup() {
		return new FormGroup<MetricDataResultFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error corresponding to the unsuccessful processing of a single metric data query. */
	export interface MetricDataError {
		Id?: string;
		Code?: QueryErrorCode;
		Message?: string;
	}

	/** An error corresponding to the unsuccessful processing of a single metric data query. */
	export interface MetricDataErrorFormProperties {
		Id: FormControl<string | null | undefined>,
		Code: FormControl<QueryErrorCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateMetricDataErrorFormGroup() {
		return new FormGroup<MetricDataErrorFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<QueryErrorCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryErrorCode { INTERNAL_FAILURE = 0, ACCESS_DENIED = 1 }


	/** Represents a single metric data query to include in a batch. */
	export interface BatchGetMetricDataQuery {

		/** Required */
		Id: string;

		/** Required */
		Namespace: MetricNamespace;

		/** Required */
		Metric: Metric;
		Dimensions?: Dimensions;

		/** Required */
		StartDate: Date;

		/** Required */
		EndDate: Date;
	}

	/** Represents a single metric data query to include in a batch. */
	export interface BatchGetMetricDataQueryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Namespace: FormControl<MetricNamespace | null | undefined>,

		/** Required */
		Metric: FormControl<Metric | null | undefined>,

		/** Required */
		StartDate: FormControl<Date | null | undefined>,

		/** Required */
		EndDate: FormControl<Date | null | undefined>,
	}
	export function CreateBatchGetMetricDataQueryFormGroup() {
		return new FormGroup<BatchGetMetricDataQueryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Namespace: new FormControl<MetricNamespace | null | undefined>(undefined, [Validators.required]),
			Metric: new FormControl<Metric | null | undefined>(undefined, [Validators.required]),
			StartDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MetricNamespace { VDM = 0 }

	export enum Metric { SEND = 0, COMPLAINT = 1, PERMANENT_BOUNCE = 2, TRANSIENT_BOUNCE = 3, OPEN = 4, CLICK = 5, DELIVERY = 6, DELIVERY_OPEN = 7, DELIVERY_CLICK = 8, DELIVERY_COMPLAINT = 9 }

	export interface Dimensions {
	}
	export interface DimensionsFormProperties {
	}
	export function CreateDimensionsFormGroup() {
		return new FormGroup<DimensionsFormProperties>({
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

	export interface InternalServiceErrorException {
	}
	export interface InternalServiceErrorExceptionFormProperties {
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
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

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}


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


	/** <p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by Amazon Web Services; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your Amazon Web Services account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified Amazon Web Services Region for your Amazon Web Services account.</p> </li> </ul> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>An object that defines the tags that are associated with a resource. A <i>tag</i> is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:</p> <ul> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>For each associated resource, each tag key must be unique and it can have only one value.</p> </li> <li> <p>The <code>aws:</code> prefix is reserved for use by Amazon Web Services; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.</p> </li> <li> <p>You can associate tags with public or shared resources, but the tags are available only for your Amazon Web Services account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified Amazon Web Services Region for your Amazon Web Services account.</p> </li> </ul> */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The reason that the address was added to the suppression list for your account. The value can be one of the following:</p> <ul> <li> <p> <code>COMPLAINT</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint.</p> </li> <li> <p> <code>BOUNCE</code> – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce.</p> </li> </ul> */
	export enum SuppressionListReason { BOUNCE = 0, COMPLAINT = 1 }


	/** An object containing additional settings for your VDM configuration as applicable to the Dashboard. */
	export interface DashboardOptions {
		EngagementMetrics?: FeatureStatus;
	}

	/** An object containing additional settings for your VDM configuration as applicable to the Dashboard. */
	export interface DashboardOptionsFormProperties {
		EngagementMetrics: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreateDashboardOptionsFormGroup() {
		return new FormGroup<DashboardOptionsFormProperties>({
			EngagementMetrics: new FormControl<FeatureStatus | null | undefined>(undefined),
		});

	}

	export enum FeatureStatus { ENABLED = 0, DISABLED = 1 }


	/** An object containing additional settings for your VDM configuration as applicable to the Guardian. */
	export interface GuardianOptions {
		OptimizedSharedDelivery?: FeatureStatus;
	}

	/** An object containing additional settings for your VDM configuration as applicable to the Guardian. */
	export interface GuardianOptionsFormProperties {
		OptimizedSharedDelivery: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreateGuardianOptionsFormGroup() {
		return new FormGroup<GuardianOptionsFormProperties>({
			OptimizedSharedDelivery: new FormControl<FeatureStatus | null | undefined>(undefined),
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
	export enum EventType { SEND = 0, REJECT = 1, BOUNCE = 2, COMPLAINT = 3, DELIVERY = 4, OPEN = 5, CLICK = 6, RENDERING_FAILURE = 7, DELIVERY_DELAY = 8, SUBSCRIPTION = 9 }


	/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
	export interface KinesisFirehoseDestination {

		/** Required */
		IamRoleArn: string;

		/** Required */
		DeliveryStreamArn: string;
	}

	/** An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift. */
	export interface KinesisFirehoseDestinationFormProperties {

		/** Required */
		IamRoleArn: FormControl<string | null | undefined>,

		/** Required */
		DeliveryStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateKinesisFirehoseDestinationFormGroup() {
		return new FormGroup<KinesisFirehoseDestinationFormProperties>({
			IamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliveryStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics. */
	export interface CloudWatchDestination {

		/** Required */
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

		/** Required */
		DimensionName: string;

		/** Required */
		DimensionValueSource: DimensionValueSource;

		/** Required */
		DefaultDimensionValue: string;
	}

	/** An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch. */
	export interface CloudWatchDimensionConfigurationFormProperties {

		/** Required */
		DimensionName: FormControl<string | null | undefined>,

		/** Required */
		DimensionValueSource: FormControl<DimensionValueSource | null | undefined>,

		/** Required */
		DefaultDimensionValue: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchDimensionConfigurationFormGroup() {
		return new FormGroup<CloudWatchDimensionConfigurationFormProperties>({
			DimensionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DimensionValueSource: new FormControl<DimensionValueSource | null | undefined>(undefined, [Validators.required]),
			DefaultDimensionValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose <code>messageTag</code>. To use your own email headers, choose <code>emailHeader</code>. To use link tags, choose <code>linkTags</code>. */
	export enum DimensionValueSource { MESSAGE_TAG = 0, EMAIL_HEADER = 1, LINK_TAG = 2 }


	/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
	export interface SnsDestination {

		/** Required */
		TopicArn: string;
	}

	/** An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur. */
	export interface SnsDestinationFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateSnsDestinationFormGroup() {
		return new FormGroup<SnsDestinationFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>. */
	export interface PinpointDestination {
		ApplicationArn?: string;
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

	export interface CreateContactResponse {
	}
	export interface CreateContactResponseFormProperties {
	}
	export function CreateCreateContactResponseFormGroup() {
		return new FormGroup<CreateContactResponseFormProperties>({
		});

	}


	/** The contact's preference for being opted-in to or opted-out of a topic. */
	export interface TopicPreference {

		/** Required */
		TopicName: string;

		/** Required */
		SubscriptionStatus: SubscriptionStatus;
	}

	/** The contact's preference for being opted-in to or opted-out of a topic. */
	export interface TopicPreferenceFormProperties {

		/** Required */
		TopicName: FormControl<string | null | undefined>,

		/** Required */
		SubscriptionStatus: FormControl<SubscriptionStatus | null | undefined>,
	}
	export function CreateTopicPreferenceFormGroup() {
		return new FormGroup<TopicPreferenceFormProperties>({
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SubscriptionStatus: new FormControl<SubscriptionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SubscriptionStatus { OPT_IN = 0, OPT_OUT = 1 }

	export interface CreateContactListResponse {
	}
	export interface CreateContactListResponseFormProperties {
	}
	export function CreateCreateContactListResponseFormGroup() {
		return new FormGroup<CreateContactListResponseFormProperties>({
		});

	}


	/** An interest group, theme, or label within a list. Lists can have multiple topics. */
	export interface Topic {

		/** Required */
		TopicName: string;

		/** Required */
		DisplayName: string;
		Description?: string;

		/** Required */
		DefaultSubscriptionStatus: SubscriptionStatus;
	}

	/** An interest group, theme, or label within a list. Lists can have multiple topics. */
	export interface TopicFormProperties {

		/** Required */
		TopicName: FormControl<string | null | undefined>,

		/** Required */
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		DefaultSubscriptionStatus: FormControl<SubscriptionStatus | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			DefaultSubscriptionStatus: new FormControl<SubscriptionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface CreateCustomVerificationEmailTemplateResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface CreateCustomVerificationEmailTemplateResponseFormProperties {
	}
	export function CreateCreateCustomVerificationEmailTemplateResponseFormGroup() {
		return new FormGroup<CreateCustomVerificationEmailTemplateResponseFormProperties>({
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

		/** Required */
		ReportId: string;

		/** Required */
		DeliverabilityTestStatus: DeliverabilityTestStatus;
	}

	/** Information about the predictive inbox placement test that you created. */
	export interface CreateDeliverabilityTestReportResponseFormProperties {

		/** Required */
		ReportId: FormControl<string | null | undefined>,

		/** Required */
		DeliverabilityTestStatus: FormControl<DeliverabilityTestStatus | null | undefined>,
	}
	export function CreateCreateDeliverabilityTestReportResponseFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportResponseFormProperties>({
			ReportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliverabilityTestStatus: new FormControl<DeliverabilityTestStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The status of a predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export enum DeliverabilityTestStatus { IN_PROGRESS = 0, COMPLETED = 1 }


	/** Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body. */
	export interface Message {

		/** Required */
		Subject: Content;

		/** Required */
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

		/** Required */
		Data: string;
		Charset?: string;
	}

	/** An object that represents the content of the email, and optionally a character set specification. */
	export interface ContentFormProperties {

		/** Required */
		Data: FormControl<string | null | undefined>,
		Charset: FormControl<string | null | undefined>,
	}
	export function CreateContentFormGroup() {
		return new FormGroup<ContentFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Charset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the body of the email message. */
	export interface Body {
		Text?: Content;
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

		/** Required */
		Data: string;
	}

	/** Represents the raw content of an email message. */
	export interface RawMessageFormProperties {

		/** Required */
		Data: FormControl<string | null | undefined>,
	}
	export function CreateRawMessageFormGroup() {
		return new FormGroup<RawMessageFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send. */
	export interface Template {
		TemplateName?: string;
		TemplateArn?: string;
		TemplateData?: string;
	}

	/** An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send. */
	export interface TemplateFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		TemplateArn: FormControl<string | null | undefined>,
		TemplateData: FormControl<string | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
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
		IdentityType?: IdentityType;
		VerifiedForSendingStatus?: boolean | null;
		DkimAttributes?: DkimAttributes;
	}

	/** <p>If the email identity is a domain, this object contains information about the DKIM verification status for the domain.</p> <p>If the email identity is an email address, this object is empty. </p> */
	export interface CreateEmailIdentityResponseFormProperties {
		IdentityType: FormControl<IdentityType | null | undefined>,
		VerifiedForSendingStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEmailIdentityResponseFormGroup() {
		return new FormGroup<CreateEmailIdentityResponseFormProperties>({
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			VerifiedForSendingStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum IdentityType { EMAIL_ADDRESS = 0, DOMAIN = 1, MANAGED_DOMAIN = 2 }


	/** <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p> */
	export interface DkimAttributes {
		SigningEnabled?: boolean | null;
		Status?: DkimStatus;
		Tokens?: Array<string>;
		SigningAttributesOrigin?: DkimSigningAttributesOrigin;
		NextSigningKeyLength?: DkimSigningKeyLength;
		CurrentSigningKeyLength?: DkimSigningKeyLength;
		LastKeyGenerationTimestamp?: Date;
	}

	/** <p>An object that contains information about the DKIM authentication status for an email identity.</p> <p>Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity</p> */
	export interface DkimAttributesFormProperties {
		SigningEnabled: FormControl<boolean | null | undefined>,
		Status: FormControl<DkimStatus | null | undefined>,
		SigningAttributesOrigin: FormControl<DkimSigningAttributesOrigin | null | undefined>,
		NextSigningKeyLength: FormControl<DkimSigningKeyLength | null | undefined>,
		CurrentSigningKeyLength: FormControl<DkimSigningKeyLength | null | undefined>,
		LastKeyGenerationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDkimAttributesFormGroup() {
		return new FormGroup<DkimAttributesFormProperties>({
			SigningEnabled: new FormControl<boolean | null | undefined>(undefined),
			Status: new FormControl<DkimStatus | null | undefined>(undefined),
			SigningAttributesOrigin: new FormControl<DkimSigningAttributesOrigin | null | undefined>(undefined),
			NextSigningKeyLength: new FormControl<DkimSigningKeyLength | null | undefined>(undefined),
			CurrentSigningKeyLength: new FormControl<DkimSigningKeyLength | null | undefined>(undefined),
			LastKeyGenerationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The verification process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul> */
	export enum DkimStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3, NOT_STARTED = 4 }

	export enum DkimSigningAttributesOrigin { AWS_SES = 0, EXTERNAL = 1 }

	export enum DkimSigningKeyLength { RSA_1024_BIT = 0, RSA_2048_BIT = 1 }


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateEmailIdentityPolicyResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateEmailIdentityPolicyResponseFormProperties {
	}
	export function CreateCreateEmailIdentityPolicyResponseFormGroup() {
		return new FormGroup<CreateEmailIdentityPolicyResponseFormProperties>({
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface CreateEmailTemplateResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface CreateEmailTemplateResponseFormProperties {
	}
	export function CreateCreateEmailTemplateResponseFormGroup() {
		return new FormGroup<CreateEmailTemplateResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateImportJobResponse {
		JobId?: string;
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface CreateImportJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateCreateImportJobResponseFormGroup() {
		return new FormGroup<CreateImportJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains details about the action of suppression list. */
	export interface SuppressionListDestination {

		/** Required */
		SuppressionListImportAction: SuppressionListImportAction;
	}

	/** An object that contains details about the action of suppression list. */
	export interface SuppressionListDestinationFormProperties {

		/** Required */
		SuppressionListImportAction: FormControl<SuppressionListImportAction | null | undefined>,
	}
	export function CreateSuppressionListDestinationFormGroup() {
		return new FormGroup<SuppressionListDestinationFormProperties>({
			SuppressionListImportAction: new FormControl<SuppressionListImportAction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The type of action to perform on the address. The following are possible values:</p> <ul> <li> <p>PUT: add the addresses to the suppression list.</p> </li> <li> <p>DELETE: remove the address from the suppression list.</p> </li> </ul> */
	export enum SuppressionListImportAction { DELETE = 0, PUT = 1 }


	/** An object that contains details about the action of a contact list. */
	export interface ContactListDestination {

		/** Required */
		ContactListName: string;

		/** Required */
		ContactListImportAction: SuppressionListImportAction;
	}

	/** An object that contains details about the action of a contact list. */
	export interface ContactListDestinationFormProperties {

		/** Required */
		ContactListName: FormControl<string | null | undefined>,

		/** Required */
		ContactListImportAction: FormControl<SuppressionListImportAction | null | undefined>,
	}
	export function CreateContactListDestinationFormGroup() {
		return new FormGroup<ContactListDestinationFormProperties>({
			ContactListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactListImportAction: new FormControl<SuppressionListImportAction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The data format of the import job's data source. */
	export enum DataFormat { CSV = 0, JSON = 1 }


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

	export interface DeleteContactResponse {
	}
	export interface DeleteContactResponseFormProperties {
	}
	export function CreateDeleteContactResponseFormGroup() {
		return new FormGroup<DeleteContactResponseFormProperties>({
		});

	}

	export interface DeleteContactListResponse {
	}
	export interface DeleteContactListResponseFormProperties {
	}
	export function CreateDeleteContactListResponseFormGroup() {
		return new FormGroup<DeleteContactListResponseFormProperties>({
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface DeleteCustomVerificationEmailTemplateResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface DeleteCustomVerificationEmailTemplateResponseFormProperties {
	}
	export function CreateDeleteCustomVerificationEmailTemplateResponseFormGroup() {
		return new FormGroup<DeleteCustomVerificationEmailTemplateResponseFormProperties>({
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
	export interface DeleteEmailIdentityPolicyResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface DeleteEmailIdentityPolicyResponseFormProperties {
	}
	export function CreateDeleteEmailIdentityPolicyResponseFormGroup() {
		return new FormGroup<DeleteEmailIdentityPolicyResponseFormProperties>({
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface DeleteEmailTemplateResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface DeleteEmailTemplateResponseFormProperties {
	}
	export function CreateDeleteEmailTemplateResponseFormGroup() {
		return new FormGroup<DeleteEmailTemplateResponseFormProperties>({
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


	/** A list of details about the email-sending capabilities of your Amazon SES account in the current Amazon Web Services Region. */
	export interface GetAccountResponse {
		DedicatedIpAutoWarmupEnabled?: boolean | null;
		EnforcementStatus?: string;
		ProductionAccessEnabled?: boolean | null;
		SendQuota?: SendQuota;
		SendingEnabled?: boolean | null;
		SuppressionAttributes?: SuppressionAttributes;
		Details?: AccountDetails;
		VdmAttributes?: VdmAttributes;
	}

	/** A list of details about the email-sending capabilities of your Amazon SES account in the current Amazon Web Services Region. */
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


	/** An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current Amazon Web Services Region. */
	export interface SendQuota {
		Max24HourSend?: number | null;
		MaxSendRate?: number | null;
		SentLast24Hours?: number | null;
	}

	/** An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current Amazon Web Services Region. */
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


	/** An object that contains information about the email address suppression preferences for your account in the current Amazon Web Services Region. */
	export interface SuppressionAttributes {
		SuppressedReasons?: Array<SuppressionListReason>;
	}

	/** An object that contains information about the email address suppression preferences for your account in the current Amazon Web Services Region. */
	export interface SuppressionAttributesFormProperties {
	}
	export function CreateSuppressionAttributesFormGroup() {
		return new FormGroup<SuppressionAttributesFormProperties>({
		});

	}


	/** An object that contains information about your account details. */
	export interface AccountDetails {
		MailType?: MailType;
		WebsiteURL?: string;
		ContactLanguage?: ContactLanguage;
		UseCaseDescription?: string;
		AdditionalContactEmailAddresses?: Array<string>;
		ReviewDetails?: ReviewDetails;
	}

	/** An object that contains information about your account details. */
	export interface AccountDetailsFormProperties {
		MailType: FormControl<MailType | null | undefined>,
		WebsiteURL: FormControl<string | null | undefined>,
		ContactLanguage: FormControl<ContactLanguage | null | undefined>,
		UseCaseDescription: FormControl<string | null | undefined>,
	}
	export function CreateAccountDetailsFormGroup() {
		return new FormGroup<AccountDetailsFormProperties>({
			MailType: new FormControl<MailType | null | undefined>(undefined),
			WebsiteURL: new FormControl<string | null | undefined>(undefined),
			ContactLanguage: new FormControl<ContactLanguage | null | undefined>(undefined),
			UseCaseDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MailType { MARKETING = 0, TRANSACTIONAL = 1 }

	export enum ContactLanguage { EN = 0, JA = 1 }


	/** An object that contains information about your account details review. */
	export interface ReviewDetails {
		Status?: ReviewStatus;
		CaseId?: string;
	}

	/** An object that contains information about your account details review. */
	export interface ReviewDetailsFormProperties {
		Status: FormControl<ReviewStatus | null | undefined>,
		CaseId: FormControl<string | null | undefined>,
	}
	export function CreateReviewDetailsFormGroup() {
		return new FormGroup<ReviewDetailsFormProperties>({
			Status: new FormControl<ReviewStatus | null | undefined>(undefined),
			CaseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReviewStatus { PENDING = 0, FAILED = 1, GRANTED = 2, DENIED = 3 }


	/** The VDM attributes that apply to your Amazon SES account. */
	export interface VdmAttributes {

		/** Required */
		VdmEnabled: FeatureStatus;
		DashboardAttributes?: DashboardAttributes;
		GuardianAttributes?: GuardianAttributes;
	}

	/** The VDM attributes that apply to your Amazon SES account. */
	export interface VdmAttributesFormProperties {

		/** Required */
		VdmEnabled: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreateVdmAttributesFormGroup() {
		return new FormGroup<VdmAttributesFormProperties>({
			VdmEnabled: new FormControl<FeatureStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object containing additional settings for your VDM configuration as applicable to the Dashboard. */
	export interface DashboardAttributes {
		EngagementMetrics?: FeatureStatus;
	}

	/** An object containing additional settings for your VDM configuration as applicable to the Dashboard. */
	export interface DashboardAttributesFormProperties {
		EngagementMetrics: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreateDashboardAttributesFormGroup() {
		return new FormGroup<DashboardAttributesFormProperties>({
			EngagementMetrics: new FormControl<FeatureStatus | null | undefined>(undefined),
		});

	}


	/** An object containing additional settings for your VDM configuration as applicable to the Guardian. */
	export interface GuardianAttributes {
		OptimizedSharedDelivery?: FeatureStatus;
	}

	/** An object containing additional settings for your VDM configuration as applicable to the Guardian. */
	export interface GuardianAttributesFormProperties {
		OptimizedSharedDelivery: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreateGuardianAttributesFormGroup() {
		return new FormGroup<GuardianAttributesFormProperties>({
			OptimizedSharedDelivery: new FormControl<FeatureStatus | null | undefined>(undefined),
		});

	}


	/** An object that contains information about blacklist events. */
	export interface GetBlacklistReportsResponse {

		/** Required */
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
		ConfigurationSetName?: string;
		TrackingOptions?: TrackingOptions;
		DeliveryOptions?: DeliveryOptions;
		ReputationOptions?: ReputationOptions;
		SendingOptions?: SendingOptions;
		Tags?: Array<Tag>;
		SuppressionOptions?: SuppressionOptions;
		VdmOptions?: VdmOptions;
	}

	/** Information about a configuration set. */
	export interface GetConfigurationSetResponseFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateGetConfigurationSetResponseFormGroup() {
		return new FormGroup<GetConfigurationSetResponseFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p> */
	export interface TrackingOptions {

		/** Required */
		CustomRedirectDomain: string;
	}

	/** <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p> */
	export interface TrackingOptionsFormProperties {

		/** Required */
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreateTrackingOptionsFormGroup() {
		return new FormGroup<TrackingOptionsFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Used to associate a configuration set with a dedicated IP pool. */
	export interface DeliveryOptions {
		TlsPolicy?: TlsPolicy;
		SendingPoolName?: string;
	}

	/** Used to associate a configuration set with a dedicated IP pool. */
	export interface DeliveryOptionsFormProperties {
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
		SendingPoolName: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryOptionsFormGroup() {
		return new FormGroup<DeliveryOptionsFormProperties>({
			TlsPolicy: new FormControl<TlsPolicy | null | undefined>(undefined),
			SendingPoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region.  */
	export interface ReputationOptions {
		ReputationMetricsEnabled?: boolean | null;
		LastFreshStart?: Date;
	}

	/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region.  */
	export interface ReputationOptionsFormProperties {
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,
		LastFreshStart: FormControl<Date | null | undefined>,
	}
	export function CreateReputationOptionsFormGroup() {
		return new FormGroup<ReputationOptionsFormProperties>({
			ReputationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LastFreshStart: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region. */
	export interface SendingOptions {
		SendingEnabled?: boolean | null;
	}

	/** Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region. */
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


	/** An object that defines the VDM settings that apply to emails that you send using the configuration set. */
	export interface VdmOptions {
		DashboardOptions?: DashboardOptions;
		GuardianOptions?: GuardianOptions;
	}

	/** An object that defines the VDM settings that apply to emails that you send using the configuration set. */
	export interface VdmOptionsFormProperties {
	}
	export function CreateVdmOptionsFormGroup() {
		return new FormGroup<VdmOptionsFormProperties>({
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


	/** In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage. */
	export interface EventDestination {

		/** Required */
		Name: string;
		Enabled?: boolean | null;

		/** Required */
		MatchingEventTypes: Array<EventType>;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		CloudWatchDestination?: CloudWatchDestination;
		SnsDestination?: SnsDestination;
		PinpointDestination?: PinpointDestination;
	}

	/** In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage. */
	export interface EventDestinationFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventDestinationFormGroup() {
		return new FormGroup<EventDestinationFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetContactResponse {
		ContactListName?: string;
		EmailAddress?: string;
		TopicPreferences?: Array<TopicPreference>;
		TopicDefaultPreferences?: Array<TopicPreference>;
		UnsubscribeAll?: boolean | null;
		AttributesData?: string;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
	}
	export interface GetContactResponseFormProperties {
		ContactListName: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		UnsubscribeAll: FormControl<boolean | null | undefined>,
		AttributesData: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetContactResponseFormGroup() {
		return new FormGroup<GetContactResponseFormProperties>({
			ContactListName: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			UnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
			AttributesData: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetContactListResponse {
		ContactListName?: string;
		Topics?: Array<Topic>;
		Description?: string;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		Tags?: Array<Tag>;
	}
	export interface GetContactListResponseFormProperties {
		ContactListName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetContactListResponseFormGroup() {
		return new FormGroup<GetContactListResponseFormProperties>({
			ContactListName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The following elements are returned by the service. */
	export interface GetCustomVerificationEmailTemplateResponse {
		TemplateName?: string;
		FromEmailAddress?: string;
		TemplateSubject?: string;
		TemplateContent?: string;
		SuccessRedirectionURL?: string;
		FailureRedirectionURL?: string;
	}

	/** The following elements are returned by the service. */
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


	/** Information about a dedicated IP address. */
	export interface GetDedicatedIpResponse {
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

		/** Required */
		Ip: string;

		/** Required */
		WarmupStatus: WarmupStatus;

		/** Required */
		WarmupPercentage: number;
		PoolName?: string;
	}

	/** <p>Contains information about a dedicated IP address that is associated with your Amazon SES account.</p> <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing Dedicated IP Addresses</a> in the <i>Amazon SES Developer Guide</i>.</p> */
	export interface DedicatedIpFormProperties {

		/** Required */
		Ip: FormControl<string | null | undefined>,

		/** Required */
		WarmupStatus: FormControl<WarmupStatus | null | undefined>,

		/** Required */
		WarmupPercentage: FormControl<number | null | undefined>,
		PoolName: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedIpFormGroup() {
		return new FormGroup<DedicatedIpFormProperties>({
			Ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WarmupStatus: new FormControl<WarmupStatus | null | undefined>(undefined, [Validators.required]),
			WarmupPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PoolName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The warmup status of a dedicated IP. */
	export enum WarmupStatus { IN_PROGRESS = 0, DONE = 1 }


	/** The following element is returned by the service. */
	export interface GetDedicatedIpPoolResponse {
		DedicatedIpPool?: DedicatedIpPool;
	}

	/** The following element is returned by the service. */
	export interface GetDedicatedIpPoolResponseFormProperties {
	}
	export function CreateGetDedicatedIpPoolResponseFormGroup() {
		return new FormGroup<GetDedicatedIpPoolResponseFormProperties>({
		});

	}


	/** Contains information about a dedicated IP pool. */
	export interface DedicatedIpPool {

		/** Required */
		PoolName: string;

		/** Required */
		ScalingMode: ScalingMode;
	}

	/** Contains information about a dedicated IP pool. */
	export interface DedicatedIpPoolFormProperties {

		/** Required */
		PoolName: FormControl<string | null | undefined>,

		/** Required */
		ScalingMode: FormControl<ScalingMode | null | undefined>,
	}
	export function CreateDedicatedIpPoolFormGroup() {
		return new FormGroup<DedicatedIpPoolFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingMode: new FormControl<ScalingMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScalingMode { STANDARD = 0, MANAGED = 1 }


	/** Information about the dedicated IP addresses that are associated with your Amazon Web Services account. */
	export interface GetDedicatedIpsResponse {
		DedicatedIps?: Array<DedicatedIp>;
		NextToken?: string;
	}

	/** Information about the dedicated IP addresses that are associated with your Amazon Web Services account. */
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

		/** Required */
		DashboardEnabled: boolean;
		SubscriptionExpiryDate?: Date;
		AccountStatus?: DeliverabilityDashboardAccountStatus;
		ActiveSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
		PendingExpirationSubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}

	/** An object that shows the status of the Deliverability dashboard. */
	export interface GetDeliverabilityDashboardOptionsResponseFormProperties {

		/** Required */
		DashboardEnabled: FormControl<boolean | null | undefined>,
		SubscriptionExpiryDate: FormControl<Date | null | undefined>,
		AccountStatus: FormControl<DeliverabilityDashboardAccountStatus | null | undefined>,
	}
	export function CreateGetDeliverabilityDashboardOptionsResponseFormGroup() {
		return new FormGroup<GetDeliverabilityDashboardOptionsResponseFormProperties>({
			DashboardEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SubscriptionExpiryDate: new FormControl<Date | null | undefined>(undefined),
			AccountStatus: new FormControl<DeliverabilityDashboardAccountStatus | null | undefined>(undefined),
		});

	}


	/** The current status of your Deliverability dashboard subscription. If this value is <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end of the current calendar month. */
	export enum DeliverabilityDashboardAccountStatus { ACTIVE = 0, PENDING_EXPIRATION = 1, DISABLED = 2 }


	/** An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain. */
	export interface DomainDeliverabilityTrackingOption {
		Domain?: string;
		SubscriptionStartDate?: Date;
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


	/** An object that contains information about the inbox placement data settings for a verified domain that’s associated with your Amazon Web Services account. This data is available only if you enabled the Deliverability dashboard for the domain. */
	export interface InboxPlacementTrackingOption {
		Global?: boolean | null;
		TrackedIsps?: Array<string>;
	}

	/** An object that contains information about the inbox placement data settings for a verified domain that’s associated with your Amazon Web Services account. This data is available only if you enabled the Deliverability dashboard for the domain. */
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

		/** Required */
		DeliverabilityTestReport: DeliverabilityTestReport;

		/** Required */
		OverallPlacement: PlacementStatistics;

		/** Required */
		IspPlacements: Array<IspPlacement>;
		Message?: string;
		Tags?: Array<Tag>;
	}

	/** The results of the predictive inbox placement test. */
	export interface GetDeliverabilityTestReportResponseFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateGetDeliverabilityTestReportResponseFormGroup() {
		return new FormGroup<GetDeliverabilityTestReportResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains metadata related to a predictive inbox placement test. */
	export interface DeliverabilityTestReport {
		ReportId?: string;
		ReportName?: string;
		Subject?: string;
		FromEmailAddress?: string;
		CreateDate?: Date;
		DeliverabilityTestStatus?: DeliverabilityTestStatus;
	}

	/** An object that contains metadata related to a predictive inbox placement test. */
	export interface DeliverabilityTestReportFormProperties {
		ReportId: FormControl<string | null | undefined>,
		ReportName: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		FromEmailAddress: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		DeliverabilityTestStatus: FormControl<DeliverabilityTestStatus | null | undefined>,
	}
	export function CreateDeliverabilityTestReportFormGroup() {
		return new FormGroup<DeliverabilityTestReportFormProperties>({
			ReportId: new FormControl<string | null | undefined>(undefined),
			ReportName: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			DeliverabilityTestStatus: new FormControl<DeliverabilityTestStatus | null | undefined>(undefined),
		});

	}


	/** An object that contains inbox placement data for an email provider. */
	export interface PlacementStatistics {
		InboxPercentage?: number | null;
		SpamPercentage?: number | null;
		MissingPercentage?: number | null;
		SpfPercentage?: number | null;
		DkimPercentage?: number | null;
	}

	/** An object that contains inbox placement data for an email provider. */
	export interface PlacementStatisticsFormProperties {
		InboxPercentage: FormControl<number | null | undefined>,
		SpamPercentage: FormControl<number | null | undefined>,
		MissingPercentage: FormControl<number | null | undefined>,
		SpfPercentage: FormControl<number | null | undefined>,
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
		IspName?: string;
		PlacementStatistics?: PlacementStatistics;
	}

	/** An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider. */
	export interface IspPlacementFormProperties {
		IspName: FormControl<string | null | undefined>,
	}
	export function CreateIspPlacementFormGroup() {
		return new FormGroup<IspPlacementFormProperties>({
			IspName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for. */
	export interface GetDomainDeliverabilityCampaignResponse {

		/** Required */
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
		CampaignId?: string;
		ImageUrl?: string;
		Subject?: string;
		FromAddress?: string;
		SendingIps?: Array<string>;
		FirstSeenDateTime?: Date;
		LastSeenDateTime?: Date;
		InboxCount?: number | null;
		SpamCount?: number | null;
		ReadRate?: number | null;
		DeleteRate?: number | null;
		ReadDeleteRate?: number | null;
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
		InboxCount: FormControl<number | null | undefined>,
		SpamCount: FormControl<number | null | undefined>,
		ReadRate: FormControl<number | null | undefined>,
		DeleteRate: FormControl<number | null | undefined>,
		ReadDeleteRate: FormControl<number | null | undefined>,
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

		/** Required */
		OverallVolume: OverallVolume;

		/** Required */
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
		VolumeStatistics?: VolumeStatistics;
		ReadRatePercent?: number | null;
		DomainIspPlacements?: Array<DomainIspPlacement>;
	}

	/** An object that contains information about email that was sent from the selected domain. */
	export interface OverallVolumeFormProperties {
		ReadRatePercent: FormControl<number | null | undefined>,
	}
	export function CreateOverallVolumeFormGroup() {
		return new FormGroup<OverallVolumeFormProperties>({
			ReadRatePercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the amount of email that was delivered to recipients. */
	export interface VolumeStatistics {
		InboxRawCount?: number | null;
		SpamRawCount?: number | null;
		ProjectedInbox?: number | null;
		ProjectedSpam?: number | null;
	}

	/** An object that contains information about the amount of email that was delivered to recipients. */
	export interface VolumeStatisticsFormProperties {
		InboxRawCount: FormControl<number | null | undefined>,
		SpamRawCount: FormControl<number | null | undefined>,
		ProjectedInbox: FormControl<number | null | undefined>,
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
		IspName?: string;
		InboxRawCount?: number | null;
		SpamRawCount?: number | null;
		InboxPercentage?: number | null;
		SpamPercentage?: number | null;
	}

	/** An object that contains inbox placement data for email sent from one of your email domains to a specific email provider. */
	export interface DomainIspPlacementFormProperties {
		IspName: FormControl<string | null | undefined>,
		InboxRawCount: FormControl<number | null | undefined>,
		SpamRawCount: FormControl<number | null | undefined>,
		InboxPercentage: FormControl<number | null | undefined>,
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
		StartDate?: Date;
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
		IdentityType?: IdentityType;
		FeedbackForwardingStatus?: boolean | null;
		VerifiedForSendingStatus?: boolean | null;
		DkimAttributes?: DkimAttributes;
		MailFromAttributes?: MailFromAttributes;
		Policies?: PolicyMap;
		Tags?: Array<Tag>;
		ConfigurationSetName?: string;
		VerificationStatus?: DkimStatus;
	}

	/** Details about an email identity. */
	export interface GetEmailIdentityResponseFormProperties {
		IdentityType: FormControl<IdentityType | null | undefined>,
		FeedbackForwardingStatus: FormControl<boolean | null | undefined>,
		VerifiedForSendingStatus: FormControl<boolean | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
		VerificationStatus: FormControl<DkimStatus | null | undefined>,
	}
	export function CreateGetEmailIdentityResponseFormGroup() {
		return new FormGroup<GetEmailIdentityResponseFormProperties>({
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			FeedbackForwardingStatus: new FormControl<boolean | null | undefined>(undefined),
			VerifiedForSendingStatus: new FormControl<boolean | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
			VerificationStatus: new FormControl<DkimStatus | null | undefined>(undefined),
		});

	}


	/** A list of attributes that are associated with a MAIL FROM domain. */
	export interface MailFromAttributes {

		/** Required */
		MailFromDomain: string;

		/** Required */
		MailFromDomainStatus: MailFromDomainStatus;

		/** Required */
		BehaviorOnMxFailure: BehaviorOnMxFailure;
	}

	/** A list of attributes that are associated with a MAIL FROM domain. */
	export interface MailFromAttributesFormProperties {

		/** Required */
		MailFromDomain: FormControl<string | null | undefined>,

		/** Required */
		MailFromDomainStatus: FormControl<MailFromDomainStatus | null | undefined>,

		/** Required */
		BehaviorOnMxFailure: FormControl<BehaviorOnMxFailure | null | undefined>,
	}
	export function CreateMailFromAttributesFormGroup() {
		return new FormGroup<MailFromAttributesFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MailFromDomainStatus: new FormControl<MailFromDomainStatus | null | undefined>(undefined, [Validators.required]),
			BehaviorOnMxFailure: new FormControl<BehaviorOnMxFailure | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The status of the MAIL FROM domain. This status can have the following values:</p> <ul> <li> <p> <code>PENDING</code> – Amazon SES hasn't started searching for the MX record yet.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon SES detected the required MX record for the MAIL FROM domain.</p> </li> <li> <p> <code>FAILED</code> – Amazon SES can't find the required MX record, or the record no longer exists.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon SES from determining the status of the MAIL FROM domain.</p> </li> </ul> */
	export enum MailFromDomainStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3 }


	/** <p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
	export enum BehaviorOnMxFailure { USE_DEFAULT_VALUE = 0, REJECT_MESSAGE = 1 }


	/** An object that contains mapping between <code>PolicyName</code> and <code>Policy</code> text. */
	export interface PolicyMap {
	}

	/** An object that contains mapping between <code>PolicyName</code> and <code>Policy</code> text. */
	export interface PolicyMapFormProperties {
	}
	export function CreatePolicyMapFormGroup() {
		return new FormGroup<PolicyMapFormProperties>({
		});

	}


	/** Identity policies associated with email identity. */
	export interface GetEmailIdentityPoliciesResponse {
		Policies?: PolicyMap;
	}

	/** Identity policies associated with email identity. */
	export interface GetEmailIdentityPoliciesResponseFormProperties {
	}
	export function CreateGetEmailIdentityPoliciesResponseFormGroup() {
		return new FormGroup<GetEmailIdentityPoliciesResponseFormProperties>({
		});

	}


	/** The following element is returned by the service. */
	export interface GetEmailTemplateResponse {

		/** Required */
		TemplateName: string;

		/** Required */
		TemplateContent: EmailTemplateContent;
	}

	/** The following element is returned by the service. */
	export interface GetEmailTemplateResponseFormProperties {

		/** Required */
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateGetEmailTemplateResponseFormGroup() {
		return new FormGroup<GetEmailTemplateResponseFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The content of the email, composed of a subject line, an HTML part, and a text-only part. */
	export interface EmailTemplateContent {
		Subject?: string;
		Text?: string;
		Html?: string;
	}

	/** The content of the email, composed of a subject line, an HTML part, and a text-only part. */
	export interface EmailTemplateContentFormProperties {
		Subject: FormControl<string | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Html: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplateContentFormGroup() {
		return new FormGroup<EmailTemplateContentFormProperties>({
			Subject: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Html: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface GetImportJobResponse {
		JobId?: string;
		ImportDestination?: ImportDestination;
		ImportDataSource?: ImportDataSource;
		FailureInfo?: FailureInfo;
		JobStatus?: JobStatus;
		CreatedTimestamp?: Date;
		CompletedTimestamp?: Date;
		ProcessedRecordsCount?: number | null;
		FailedRecordsCount?: number | null;
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface GetImportJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		CompletedTimestamp: FormControl<Date | null | undefined>,
		ProcessedRecordsCount: FormControl<number | null | undefined>,
		FailedRecordsCount: FormControl<number | null | undefined>,
	}
	export function CreateGetImportJobResponseFormGroup() {
		return new FormGroup<GetImportJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			CompletedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ProcessedRecordsCount: new FormControl<number | null | undefined>(undefined),
			FailedRecordsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object that contains details about the resource destination the import job is going to target. */
	export interface ImportDestination {
		SuppressionListDestination?: SuppressionListDestination;
		ContactListDestination?: ContactListDestination;
	}

	/** An object that contains details about the resource destination the import job is going to target. */
	export interface ImportDestinationFormProperties {
	}
	export function CreateImportDestinationFormGroup() {
		return new FormGroup<ImportDestinationFormProperties>({
		});

	}


	/** An object that contains details about the data source of the import job. */
	export interface ImportDataSource {

		/** Required */
		S3Url: string;

		/** Required */
		DataFormat: DataFormat;
	}

	/** An object that contains details about the data source of the import job. */
	export interface ImportDataSourceFormProperties {

		/** Required */
		S3Url: FormControl<string | null | undefined>,

		/** Required */
		DataFormat: FormControl<DataFormat | null | undefined>,
	}
	export function CreateImportDataSourceFormGroup() {
		return new FormGroup<ImportDataSourceFormProperties>({
			S3Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataFormat: new FormControl<DataFormat | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains the failure details about an import job. */
	export interface FailureInfo {
		FailedRecordsS3Url?: string;
		ErrorMessage?: string;
	}

	/** An object that contains the failure details about an import job. */
	export interface FailureInfoFormProperties {
		FailedRecordsS3Url: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailureInfoFormGroup() {
		return new FormGroup<FailureInfoFormProperties>({
			FailedRecordsS3Url: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the import job. */
	export enum JobStatus { CREATED = 0, PROCESSING = 1, COMPLETED = 2, FAILED = 3 }


	/** Information about the suppressed email address. */
	export interface GetSuppressedDestinationResponse {

		/** Required */
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

		/** Required */
		EmailAddress: string;

		/** Required */
		Reason: SuppressionListReason;

		/** Required */
		LastUpdateTime: Date;
		Attributes?: SuppressedDestinationAttributes;
	}

	/** An object that contains information about an email address that is on the suppression list for your account. */
	export interface SuppressedDestinationFormProperties {

		/** Required */
		EmailAddress: FormControl<string | null | undefined>,

		/** Required */
		Reason: FormControl<SuppressionListReason | null | undefined>,

		/** Required */
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSuppressedDestinationFormGroup() {
		return new FormGroup<SuppressedDestinationFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<SuppressionListReason | null | undefined>(undefined, [Validators.required]),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains additional attributes that are related an email address that is on the suppression list for your account. */
	export interface SuppressedDestinationAttributes {
		MessageId?: string;
		FeedbackId?: string;
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


	/** A list of configuration sets in your Amazon SES account in the current Amazon Web Services Region. */
	export interface ListConfigurationSetsResponse {
		ConfigurationSets?: Array<string>;
		NextToken?: string;
	}

	/** A list of configuration sets in your Amazon SES account in the current Amazon Web Services Region. */
	export interface ListConfigurationSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationSetsResponseFormGroup() {
		return new FormGroup<ListConfigurationSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListContactListsResponse {
		ContactLists?: Array<ContactList>;
		NextToken?: string;
	}
	export interface ListContactListsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactListsResponseFormGroup() {
		return new FormGroup<ListContactListsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list that contains contacts that have subscribed to a particular topic or topics. */
	export interface ContactList {
		ContactListName?: string;
		LastUpdatedTimestamp?: Date;
	}

	/** A list that contains contacts that have subscribed to a particular topic or topics. */
	export interface ContactListFormProperties {
		ContactListName: FormControl<string | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateContactListFormGroup() {
		return new FormGroup<ContactListFormProperties>({
			ContactListName: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListContactsResponse {
		Contacts?: Array<Contact>;
		NextToken?: string;
	}
	export interface ListContactsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactsResponseFormGroup() {
		return new FormGroup<ListContactsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A contact is the end-user who is receiving the email. */
	export interface Contact {
		EmailAddress?: string;
		TopicPreferences?: Array<TopicPreference>;
		TopicDefaultPreferences?: Array<TopicPreference>;
		UnsubscribeAll?: boolean | null;
		LastUpdatedTimestamp?: Date;
	}

	/** A contact is the end-user who is receiving the email. */
	export interface ContactFormProperties {
		EmailAddress: FormControl<string | null | undefined>,
		UnsubscribeAll: FormControl<boolean | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			UnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Used for filtering by a specific topic preference. */
	export interface TopicFilter {
		TopicName?: string;
		UseDefaultIfPreferenceUnavailable?: boolean | null;
	}

	/** Used for filtering by a specific topic preference. */
	export interface TopicFilterFormProperties {
		TopicName: FormControl<string | null | undefined>,
		UseDefaultIfPreferenceUnavailable: FormControl<boolean | null | undefined>,
	}
	export function CreateTopicFilterFormGroup() {
		return new FormGroup<TopicFilterFormProperties>({
			TopicName: new FormControl<string | null | undefined>(undefined),
			UseDefaultIfPreferenceUnavailable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The following elements are returned by the service. */
	export interface ListCustomVerificationEmailTemplatesResponse {
		CustomVerificationEmailTemplates?: Array<CustomVerificationEmailTemplateMetadata>;
		NextToken?: string;
	}

	/** The following elements are returned by the service. */
	export interface ListCustomVerificationEmailTemplatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomVerificationEmailTemplatesResponseFormGroup() {
		return new FormGroup<ListCustomVerificationEmailTemplatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a custom verification email template. */
	export interface CustomVerificationEmailTemplateMetadata {
		TemplateName?: string;
		FromEmailAddress?: string;
		TemplateSubject?: string;
		SuccessRedirectionURL?: string;
		FailureRedirectionURL?: string;
	}

	/** Contains information about a custom verification email template. */
	export interface CustomVerificationEmailTemplateMetadataFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		FromEmailAddress: FormControl<string | null | undefined>,
		TemplateSubject: FormControl<string | null | undefined>,
		SuccessRedirectionURL: FormControl<string | null | undefined>,
		FailureRedirectionURL: FormControl<string | null | undefined>,
	}
	export function CreateCustomVerificationEmailTemplateMetadataFormGroup() {
		return new FormGroup<CustomVerificationEmailTemplateMetadataFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			TemplateSubject: new FormControl<string | null | undefined>(undefined),
			SuccessRedirectionURL: new FormControl<string | null | undefined>(undefined),
			FailureRedirectionURL: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of dedicated IP pools. */
	export interface ListDedicatedIpPoolsResponse {
		DedicatedIpPools?: Array<string>;
		NextToken?: string;
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

		/** Required */
		DeliverabilityTestReports: Array<DeliverabilityTestReport>;
		NextToken?: string;
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

		/** Required */
		DomainDeliverabilityCampaigns: Array<DomainDeliverabilityCampaign>;
		NextToken?: string;
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
		NextToken?: string;
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
		IdentityType?: IdentityType;
		IdentityName?: string;
		SendingEnabled?: boolean | null;
		VerificationStatus?: DkimStatus;
	}

	/** Information about an email identity. */
	export interface IdentityInfoFormProperties {
		IdentityType: FormControl<IdentityType | null | undefined>,
		IdentityName: FormControl<string | null | undefined>,
		SendingEnabled: FormControl<boolean | null | undefined>,
		VerificationStatus: FormControl<DkimStatus | null | undefined>,
	}
	export function CreateIdentityInfoFormGroup() {
		return new FormGroup<IdentityInfoFormProperties>({
			IdentityType: new FormControl<IdentityType | null | undefined>(undefined),
			IdentityName: new FormControl<string | null | undefined>(undefined),
			SendingEnabled: new FormControl<boolean | null | undefined>(undefined),
			VerificationStatus: new FormControl<DkimStatus | null | undefined>(undefined),
		});

	}


	/** The following elements are returned by the service. */
	export interface ListEmailTemplatesResponse {
		TemplatesMetadata?: Array<EmailTemplateMetadata>;
		NextToken?: string;
	}

	/** The following elements are returned by the service. */
	export interface ListEmailTemplatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEmailTemplatesResponseFormGroup() {
		return new FormGroup<ListEmailTemplatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an email template. */
	export interface EmailTemplateMetadata {
		TemplateName?: string;
		CreatedTimestamp?: Date;
	}

	/** Contains information about an email template. */
	export interface EmailTemplateMetadataFormProperties {
		TemplateName: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateEmailTemplateMetadataFormGroup() {
		return new FormGroup<EmailTemplateMetadataFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface ListImportJobsResponse {
		ImportJobs?: Array<ImportJobSummary>;
		NextToken?: string;
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface ListImportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportJobsResponseFormGroup() {
		return new FormGroup<ListImportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the import job. */
	export interface ImportJobSummary {

		/**
		 * A string that represents the import job ID.
		 * Min length: 1
		 */
		JobId?: string | null;

		/** An object that contains details about the resource destination the import job is going to target. */
		ImportDestination?: ImportDestination;

		/** The status of the import job. */
		JobStatus?: JobStatus | null;
		CreatedTimestamp?: Date;
		ProcessedRecordsCount?: number | null;
		FailedRecordsCount?: number | null;
	}

	/** A summary of the import job. */
	export interface ImportJobSummaryFormProperties {

		/**
		 * A string that represents the import job ID.
		 * Min length: 1
		 */
		JobId: FormControl<string | null | undefined>,

		/** The status of the import job. */
		JobStatus: FormControl<JobStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		ProcessedRecordsCount: FormControl<number | null | undefined>,
		FailedRecordsCount: FormControl<number | null | undefined>,
	}
	export function CreateImportJobSummaryFormGroup() {
		return new FormGroup<ImportJobSummaryFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ProcessedRecordsCount: new FormControl<number | null | undefined>(undefined),
			FailedRecordsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the response to your request to retrieve the list of recommendations for your account. */
	export interface ListRecommendationsResponse {
		Recommendations?: Array<Recommendation>;
		NextToken?: string;
	}

	/** Contains the response to your request to retrieve the list of recommendations for your account. */
	export interface ListRecommendationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendationsResponseFormGroup() {
		return new FormGroup<ListRecommendationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A recommendation generated for your account. */
	export interface Recommendation {
		ResourceArn?: string;
		Type?: RecommendationType;
		Description?: string;
		Status?: RecommendationStatus;
		CreatedTimestamp?: Date;
		LastUpdatedTimestamp?: Date;
		Impact?: RecommendationImpact;
	}

	/** A recommendation generated for your account. */
	export interface RecommendationFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		Type: FormControl<RecommendationType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<RecommendationStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		LastUpdatedTimestamp: FormControl<Date | null | undefined>,
		Impact: FormControl<RecommendationImpact | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<RecommendationType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RecommendationStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Impact: new FormControl<RecommendationImpact | null | undefined>(undefined),
		});

	}

	export enum RecommendationType { DKIM = 0, DMARC = 1, SPF = 2, BIMI = 3 }

	export enum RecommendationStatus { OPEN = 0, FIXED = 1 }

	export enum RecommendationImpact { LOW = 0, HIGH = 1 }


	/** A list of suppressed email addresses. */
	export interface ListSuppressedDestinationsResponse {
		SuppressedDestinationSummaries?: Array<SuppressedDestinationSummary>;
		NextToken?: string;
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

		/** Required */
		EmailAddress: string;

		/** Required */
		Reason: SuppressionListReason;

		/** Required */
		LastUpdateTime: Date;
	}

	/** A summary that describes the suppressed email address. */
	export interface SuppressedDestinationSummaryFormProperties {

		/** Required */
		EmailAddress: FormControl<string | null | undefined>,

		/** Required */
		Reason: FormControl<SuppressionListReason | null | undefined>,

		/** Required */
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSuppressedDestinationSummaryFormGroup() {
		return new FormGroup<SuppressedDestinationSummaryFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<SuppressionListReason | null | undefined>(undefined, [Validators.required]),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
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
	export interface PutAccountDetailsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutAccountDetailsResponseFormProperties {
	}
	export function CreatePutAccountDetailsResponseFormGroup() {
		return new FormGroup<PutAccountDetailsResponseFormProperties>({
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

	export interface PutAccountVdmAttributesResponse {
	}
	export interface PutAccountVdmAttributesResponseFormProperties {
	}
	export function CreatePutAccountVdmAttributesResponseFormGroup() {
		return new FormGroup<PutAccountVdmAttributesResponseFormProperties>({
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
	export interface PutConfigurationSetVdmOptionsResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutConfigurationSetVdmOptionsResponseFormProperties {
	}
	export function CreatePutConfigurationSetVdmOptionsResponseFormGroup() {
		return new FormGroup<PutConfigurationSetVdmOptionsResponseFormProperties>({
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
	export interface PutDedicatedIpPoolScalingAttributesResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface PutDedicatedIpPoolScalingAttributesResponseFormProperties {
	}
	export function CreatePutDedicatedIpPoolScalingAttributesResponseFormGroup() {
		return new FormGroup<PutDedicatedIpPoolScalingAttributesResponseFormProperties>({
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


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface PutEmailIdentityConfigurationSetAttributesResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface PutEmailIdentityConfigurationSetAttributesResponseFormProperties {
	}
	export function CreatePutEmailIdentityConfigurationSetAttributesResponseFormGroup() {
		return new FormGroup<PutEmailIdentityConfigurationSetAttributesResponseFormProperties>({
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
		DkimStatus?: DkimStatus;
		DkimTokens?: Array<string>;
	}

	/** <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p> */
	export interface PutEmailIdentityDkimSigningAttributesResponseFormProperties {
		DkimStatus: FormControl<DkimStatus | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimSigningAttributesResponseFormGroup() {
		return new FormGroup<PutEmailIdentityDkimSigningAttributesResponseFormProperties>({
			DkimStatus: new FormControl<DkimStatus | null | undefined>(undefined),
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


	/** The following data is returned in JSON format by the service. */
	export interface SendBulkEmailResponse {

		/** Required */
		BulkEmailEntryResults: Array<BulkEmailEntryResult>;
	}

	/** The following data is returned in JSON format by the service. */
	export interface SendBulkEmailResponseFormProperties {
	}
	export function CreateSendBulkEmailResponseFormGroup() {
		return new FormGroup<SendBulkEmailResponseFormProperties>({
		});

	}


	/** The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>. */
	export interface BulkEmailEntryResult {
		Status?: BulkEmailStatus;
		Error?: string;
		MessageId?: string;
	}

	/** The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>. */
	export interface BulkEmailEntryResultFormProperties {
		Status: FormControl<BulkEmailStatus | null | undefined>,
		Error: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateBulkEmailEntryResultFormGroup() {
		return new FormGroup<BulkEmailEntryResultFormProperties>({
			Status: new FormControl<BulkEmailStatus | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BulkEmailStatus { SUCCESS = 0, MESSAGE_REJECTED = 1, MAIL_FROM_DOMAIN_NOT_VERIFIED = 2, CONFIGURATION_SET_NOT_FOUND = 3, TEMPLATE_NOT_FOUND = 4, ACCOUNT_SUSPENDED = 5, ACCOUNT_THROTTLED = 6, ACCOUNT_DAILY_QUOTA_EXCEEDED = 7, INVALID_SENDING_POOL_NAME = 8, ACCOUNT_SENDING_PAUSED = 9, CONFIGURATION_SET_SENDING_PAUSED = 10, INVALID_PARAMETER = 11, TRANSIENT_FAILURE = 12, FAILED = 13 }


	/** Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.  */
	export interface MessageTag {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.  */
	export interface MessageTagFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMessageTagFormGroup() {
		return new FormGroup<MessageTagFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BulkEmailEntry {

		/** Required */
		Destination: Destination;
		ReplacementTags?: Array<MessageTag>;
		ReplacementEmailContent?: ReplacementEmailContent;
	}
	export interface BulkEmailEntryFormProperties {
	}
	export function CreateBulkEmailEntryFormGroup() {
		return new FormGroup<BulkEmailEntryFormProperties>({
		});

	}


	/** <p>An object that describes the recipients for an email.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note> */
	export interface Destination {
		ToAddresses?: Array<string>;
		CcAddresses?: Array<string>;
		BccAddresses?: Array<string>;
	}

	/** <p>An object that describes the recipients for an email.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note> */
	export interface DestinationFormProperties {
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
		});

	}


	/** The <code>ReplaceEmailContent</code> object to be used for a specific <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified within this object. */
	export interface ReplacementEmailContent {
		ReplacementTemplate?: ReplacementTemplate;
	}

	/** The <code>ReplaceEmailContent</code> object to be used for a specific <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified within this object. */
	export interface ReplacementEmailContentFormProperties {
	}
	export function CreateReplacementEmailContentFormGroup() {
		return new FormGroup<ReplacementEmailContentFormProperties>({
		});

	}


	/** An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>. */
	export interface ReplacementTemplate {
		ReplacementTemplateData?: string;
	}

	/** An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>. */
	export interface ReplacementTemplateFormProperties {
		ReplacementTemplateData: FormControl<string | null | undefined>,
	}
	export function CreateReplacementTemplateFormGroup() {
		return new FormGroup<ReplacementTemplateFormProperties>({
			ReplacementTemplateData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The following element is returned by the service. */
	export interface SendCustomVerificationEmailResponse {
		MessageId?: string;
	}

	/** The following element is returned by the service. */
	export interface SendCustomVerificationEmailResponseFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateSendCustomVerificationEmailResponseFormGroup() {
		return new FormGroup<SendCustomVerificationEmailResponseFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A unique message ID that you receive when an email is accepted for sending. */
	export interface SendEmailResponse {
		MessageId?: string;
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

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}


	/** The following element is returned by the service. */
	export interface TestRenderEmailTemplateResponse {

		/** Required */
		RenderedTemplate: string;
	}

	/** The following element is returned by the service. */
	export interface TestRenderEmailTemplateResponseFormProperties {

		/** Required */
		RenderedTemplate: FormControl<string | null | undefined>,
	}
	export function CreateTestRenderEmailTemplateResponseFormGroup() {
		return new FormGroup<TestRenderEmailTemplateResponseFormProperties>({
			RenderedTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateContactResponse {
	}
	export interface UpdateContactResponseFormProperties {
	}
	export function CreateUpdateContactResponseFormGroup() {
		return new FormGroup<UpdateContactResponseFormProperties>({
		});

	}

	export interface UpdateContactListResponse {
	}
	export interface UpdateContactListResponseFormProperties {
	}
	export function CreateUpdateContactListResponseFormGroup() {
		return new FormGroup<UpdateContactListResponseFormProperties>({
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface UpdateCustomVerificationEmailTemplateResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface UpdateCustomVerificationEmailTemplateResponseFormProperties {
	}
	export function CreateUpdateCustomVerificationEmailTemplateResponseFormGroup() {
		return new FormGroup<UpdateCustomVerificationEmailTemplateResponseFormProperties>({
		});

	}


	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface UpdateEmailIdentityPolicyResponse {
	}

	/** An HTTP 200 response if the request succeeds, or an error message if the request fails. */
	export interface UpdateEmailIdentityPolicyResponseFormProperties {
	}
	export function CreateUpdateEmailIdentityPolicyResponseFormGroup() {
		return new FormGroup<UpdateEmailIdentityPolicyResponseFormProperties>({
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface UpdateEmailTemplateResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface UpdateEmailTemplateResponseFormProperties {
	}
	export function CreateUpdateEmailTemplateResponseFormGroup() {
		return new FormGroup<UpdateEmailTemplateResponseFormProperties>({
		});

	}


	/** Represents a request to retrieve a batch of metric data. */
	export interface BatchGetMetricDataRequest {

		/** Required */
		Queries: Array<BatchGetMetricDataQuery>;
	}

	/** Represents a request to retrieve a batch of metric data. */
	export interface BatchGetMetricDataRequestFormProperties {
	}
	export function CreateBatchGetMetricDataRequestFormGroup() {
		return new FormGroup<BatchGetMetricDataRequestFormProperties>({
		});

	}


	/** An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account. */
	export interface BlacklistEntry {
		RblName?: string;
		ListingTime?: Date;
		Description?: string;
	}

	/** An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account. */
	export interface BlacklistEntryFormProperties {
		RblName: FormControl<string | null | undefined>,
		ListingTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateBlacklistEntryFormGroup() {
		return new FormGroup<BlacklistEntryFormProperties>({
			RblName: new FormControl<string | null | undefined>(undefined),
			ListingTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains the body of the message. You can specify a template message. */
	export interface BulkEmailContent {
		Template?: Template;
	}

	/** An object that contains the body of the message. You can specify a template message. */
	export interface BulkEmailContentFormProperties {
	}
	export function CreateBulkEmailContentFormGroup() {
		return new FormGroup<BulkEmailContentFormProperties>({
		});

	}

	export enum ContactListImportAction { DELETE = 0, PUT = 1 }


	/** An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination. */
	export interface EventDestinationDefinition {
		Enabled?: boolean | null;
		MatchingEventTypes?: Array<EventType>;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		CloudWatchDestination?: CloudWatchDestination;
		SnsDestination?: SnsDestination;
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

		/** Required */
		EventDestinationName: string;

		/** Required */
		EventDestination: EventDestinationDefinition;
	}

	/** A request to add an event destination to a configuration set. */
	export interface CreateConfigurationSetEventDestinationRequestFormProperties {

		/** Required */
		EventDestinationName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetEventDestinationRequestFormProperties>({
			EventDestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to create a configuration set. */
	export interface CreateConfigurationSetRequest {

		/** Required */
		ConfigurationSetName: string;
		TrackingOptions?: TrackingOptions;
		DeliveryOptions?: DeliveryOptions;
		ReputationOptions?: ReputationOptions;
		SendingOptions?: SendingOptions;
		Tags?: Array<Tag>;

		/** An object that contains information about the suppression list preferences for your account. */
		SuppressionOptions?: SuppressionOptions;
		VdmOptions?: VdmOptions;
	}

	/** A request to create a configuration set. */
	export interface CreateConfigurationSetRequestFormProperties {

		/** Required */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetRequestFormGroup() {
		return new FormGroup<CreateConfigurationSetRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateContactListRequest {

		/** Required */
		ContactListName: string;
		Topics?: Array<Topic>;
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateContactListRequestFormProperties {

		/** Required */
		ContactListName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactListRequestFormGroup() {
		return new FormGroup<CreateContactListRequestFormProperties>({
			ContactListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateContactRequest {

		/** Required */
		EmailAddress: string;
		TopicPreferences?: Array<TopicPreference>;
		UnsubscribeAll?: boolean | null;
		AttributesData?: string;
	}
	export interface CreateContactRequestFormProperties {

		/** Required */
		EmailAddress: FormControl<string | null | undefined>,
		UnsubscribeAll: FormControl<boolean | null | undefined>,
		AttributesData: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactRequestFormGroup() {
		return new FormGroup<CreateContactRequestFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
			AttributesData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to create a custom verification email template. */
	export interface CreateCustomVerificationEmailTemplateRequest {

		/** Required */
		TemplateName: string;

		/** Required */
		FromEmailAddress: string;

		/** Required */
		TemplateSubject: string;

		/** Required */
		TemplateContent: string;

		/** Required */
		SuccessRedirectionURL: string;

		/** Required */
		FailureRedirectionURL: string;
	}

	/** Represents a request to create a custom verification email template. */
	export interface CreateCustomVerificationEmailTemplateRequestFormProperties {

		/** Required */
		TemplateName: FormControl<string | null | undefined>,

		/** Required */
		FromEmailAddress: FormControl<string | null | undefined>,

		/** Required */
		TemplateSubject: FormControl<string | null | undefined>,

		/** Required */
		TemplateContent: FormControl<string | null | undefined>,

		/** Required */
		SuccessRedirectionURL: FormControl<string | null | undefined>,

		/** Required */
		FailureRedirectionURL: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomVerificationEmailTemplateRequestFormGroup() {
		return new FormGroup<CreateCustomVerificationEmailTemplateRequestFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateSubject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SuccessRedirectionURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FailureRedirectionURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to create a new dedicated IP pool. */
	export interface CreateDedicatedIpPoolRequest {

		/** Required */
		PoolName: string;
		Tags?: Array<Tag>;
		ScalingMode?: ScalingMode;
	}

	/** A request to create a new dedicated IP pool. */
	export interface CreateDedicatedIpPoolRequestFormProperties {

		/** Required */
		PoolName: FormControl<string | null | undefined>,
		ScalingMode: FormControl<ScalingMode | null | undefined>,
	}
	export function CreateCreateDedicatedIpPoolRequestFormGroup() {
		return new FormGroup<CreateDedicatedIpPoolRequestFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingMode: new FormControl<ScalingMode | null | undefined>(undefined),
		});

	}


	/** An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers. */
	export interface EmailContent {
		Simple?: Message;
		Raw?: RawMessage;
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
		ReportName?: string;

		/** Required */
		FromEmailAddress: string;

		/** Required */
		Content: EmailContent;
		Tags?: Array<Tag>;
	}

	/** A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. We send that message to special email addresses spread across several major email providers around the world. The test takes about 24 hours to complete. When the test is complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test. */
	export interface CreateDeliverabilityTestReportRequestFormProperties {
		ReportName: FormControl<string | null | undefined>,

		/** Required */
		FromEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeliverabilityTestReportRequestFormGroup() {
		return new FormGroup<CreateDeliverabilityTestReportRequestFormProperties>({
			ReportName: new FormControl<string | null | undefined>(undefined),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a request to create a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>. */
	export interface CreateEmailIdentityPolicyRequest {

		/** Required */
		Policy: string;
	}

	/** Represents a request to create a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>. */
	export interface CreateEmailIdentityPolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailIdentityPolicyRequestFormGroup() {
		return new FormGroup<CreateEmailIdentityPolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM */
	export interface DkimSigningAttributes {
		DomainSigningSelector?: string;
		DomainSigningPrivateKey?: string;
		NextSigningKeyLength?: DkimSigningKeyLength;
	}

	/** An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM */
	export interface DkimSigningAttributesFormProperties {
		DomainSigningSelector: FormControl<string | null | undefined>,
		DomainSigningPrivateKey: FormControl<string | null | undefined>,
		NextSigningKeyLength: FormControl<DkimSigningKeyLength | null | undefined>,
	}
	export function CreateDkimSigningAttributesFormGroup() {
		return new FormGroup<DkimSigningAttributesFormProperties>({
			DomainSigningSelector: new FormControl<string | null | undefined>(undefined),
			DomainSigningPrivateKey: new FormControl<string | null | undefined>(undefined),
			NextSigningKeyLength: new FormControl<DkimSigningKeyLength | null | undefined>(undefined),
		});

	}


	/** A request to begin the verification process for an email identity (an email address or domain). */
	export interface CreateEmailIdentityRequest {

		/** Required */
		EmailIdentity: string;
		Tags?: Array<Tag>;
		DkimSigningAttributes?: DkimSigningAttributes;
		ConfigurationSetName?: string;
	}

	/** A request to begin the verification process for an email identity (an email address or domain). */
	export interface CreateEmailIdentityRequestFormProperties {

		/** Required */
		EmailIdentity: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailIdentityRequestFormGroup() {
		return new FormGroup<CreateEmailIdentityRequestFormProperties>({
			EmailIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface CreateEmailTemplateRequest {

		/** Required */
		TemplateName: string;

		/** Required */
		TemplateContent: EmailTemplateContent;
	}

	/** Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface CreateEmailTemplateRequestFormProperties {

		/** Required */
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailTemplateRequestFormGroup() {
		return new FormGroup<CreateEmailTemplateRequestFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a request to create an import job from a data source for a data destination. */
	export interface CreateImportJobRequest {

		/** Required */
		ImportDestination: ImportDestination;

		/** Required */
		ImportDataSource: ImportDataSource;
	}

	/** Represents a request to create an import job from a data source for a data destination. */
	export interface CreateImportJobRequestFormProperties {
	}
	export function CreateCreateImportJobRequestFormGroup() {
		return new FormGroup<CreateImportJobRequestFormProperties>({
		});

	}


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

	export interface DeleteContactListRequest {
	}
	export interface DeleteContactListRequestFormProperties {
	}
	export function CreateDeleteContactListRequestFormGroup() {
		return new FormGroup<DeleteContactListRequestFormProperties>({
		});

	}

	export interface DeleteContactRequest {
	}
	export interface DeleteContactRequestFormProperties {
	}
	export function CreateDeleteContactRequestFormGroup() {
		return new FormGroup<DeleteContactRequestFormProperties>({
		});

	}


	/** Represents a request to delete an existing custom verification email template. */
	export interface DeleteCustomVerificationEmailTemplateRequest {
	}

	/** Represents a request to delete an existing custom verification email template. */
	export interface DeleteCustomVerificationEmailTemplateRequestFormProperties {
	}
	export function CreateDeleteCustomVerificationEmailTemplateRequestFormGroup() {
		return new FormGroup<DeleteCustomVerificationEmailTemplateRequestFormProperties>({
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


	/** Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>. */
	export interface DeleteEmailIdentityPolicyRequest {
	}

	/** Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>. */
	export interface DeleteEmailIdentityPolicyRequestFormProperties {
	}
	export function CreateDeleteEmailIdentityPolicyRequestFormGroup() {
		return new FormGroup<DeleteEmailIdentityPolicyRequestFormProperties>({
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


	/** Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface DeleteEmailTemplateRequest {
	}

	/** Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface DeleteEmailTemplateRequestFormProperties {
	}
	export function CreateDeleteEmailTemplateRequestFormGroup() {
		return new FormGroup<DeleteEmailTemplateRequestFormProperties>({
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

	export interface GetContactListRequest {
	}
	export interface GetContactListRequestFormProperties {
	}
	export function CreateGetContactListRequestFormGroup() {
		return new FormGroup<GetContactListRequestFormProperties>({
		});

	}

	export interface GetContactRequest {
	}
	export interface GetContactRequestFormProperties {
	}
	export function CreateGetContactRequestFormGroup() {
		return new FormGroup<GetContactRequestFormProperties>({
		});

	}


	/** Represents a request to retrieve an existing custom verification email template. */
	export interface GetCustomVerificationEmailTemplateRequest {
	}

	/** Represents a request to retrieve an existing custom verification email template. */
	export interface GetCustomVerificationEmailTemplateRequestFormProperties {
	}
	export function CreateGetCustomVerificationEmailTemplateRequestFormGroup() {
		return new FormGroup<GetCustomVerificationEmailTemplateRequestFormProperties>({
		});

	}


	/** A request to obtain more information about a dedicated IP pool. */
	export interface GetDedicatedIpPoolRequest {
	}

	/** A request to obtain more information about a dedicated IP pool. */
	export interface GetDedicatedIpPoolRequestFormProperties {
	}
	export function CreateGetDedicatedIpPoolRequestFormGroup() {
		return new FormGroup<GetDedicatedIpPoolRequestFormProperties>({
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


	/** <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Web Services account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface GetDeliverabilityDashboardOptionsRequest {
	}

	/** <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Web Services account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
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


	/** A request to return the policies of an email identity. */
	export interface GetEmailIdentityPoliciesRequest {
	}

	/** A request to return the policies of an email identity. */
	export interface GetEmailIdentityPoliciesRequestFormProperties {
	}
	export function CreateGetEmailIdentityPoliciesRequestFormGroup() {
		return new FormGroup<GetEmailIdentityPoliciesRequestFormProperties>({
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

	export enum VerificationStatus { PENDING = 0, SUCCESS = 1, FAILED = 2, TEMPORARY_FAILURE = 3, NOT_STARTED = 4 }


	/** Represents a request to display the template object (which includes the subject line, HTML part and text part) for the template you specify. */
	export interface GetEmailTemplateRequest {
	}

	/** Represents a request to display the template object (which includes the subject line, HTML part and text part) for the template you specify. */
	export interface GetEmailTemplateRequestFormProperties {
	}
	export function CreateGetEmailTemplateRequestFormGroup() {
		return new FormGroup<GetEmailTemplateRequestFormProperties>({
		});

	}


	/** Represents a request for information about an import job using the import job ID. */
	export interface GetImportJobRequest {
	}

	/** Represents a request for information about an import job using the import job ID. */
	export interface GetImportJobRequestFormProperties {
	}
	export function CreateGetImportJobRequestFormGroup() {
		return new FormGroup<GetImportJobRequestFormProperties>({
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


	/** The destination of the import job, which can be used to list import jobs that have a certain <code>ImportDestinationType</code>. */
	export enum ImportDestinationType { SUPPRESSION_LIST = 0, CONTACT_LIST = 1 }


	/** A request to obtain a list of configuration sets for your Amazon SES account in the current Amazon Web Services Region. */
	export interface ListConfigurationSetsRequest {
	}

	/** A request to obtain a list of configuration sets for your Amazon SES account in the current Amazon Web Services Region. */
	export interface ListConfigurationSetsRequestFormProperties {
	}
	export function CreateListConfigurationSetsRequestFormGroup() {
		return new FormGroup<ListConfigurationSetsRequestFormProperties>({
		});

	}

	export interface ListContactListsRequest {
	}
	export interface ListContactListsRequestFormProperties {
	}
	export function CreateListContactListsRequestFormGroup() {
		return new FormGroup<ListContactListsRequestFormProperties>({
		});

	}


	/** A filter that can be applied to a list of contacts. */
	export interface ListContactsFilter {
		FilteredStatus?: SubscriptionStatus;
		TopicFilter?: TopicFilter;
	}

	/** A filter that can be applied to a list of contacts. */
	export interface ListContactsFilterFormProperties {
		FilteredStatus: FormControl<SubscriptionStatus | null | undefined>,
	}
	export function CreateListContactsFilterFormGroup() {
		return new FormGroup<ListContactsFilterFormProperties>({
			FilteredStatus: new FormControl<SubscriptionStatus | null | undefined>(undefined),
		});

	}

	export interface ListContactsRequest {
		Filter?: ListContactsFilter;
	}
	export interface ListContactsRequestFormProperties {
	}
	export function CreateListContactsRequestFormGroup() {
		return new FormGroup<ListContactsRequestFormProperties>({
		});

	}


	/** Represents a request to list the existing custom verification email templates for your account. */
	export interface ListCustomVerificationEmailTemplatesRequest {
	}

	/** Represents a request to list the existing custom verification email templates for your account. */
	export interface ListCustomVerificationEmailTemplatesRequestFormProperties {
	}
	export function CreateListCustomVerificationEmailTemplatesRequestFormGroup() {
		return new FormGroup<ListCustomVerificationEmailTemplatesRequestFormProperties>({
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


	/** A request to list all of the email identities associated with your Amazon Web Services account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified. */
	export interface ListEmailIdentitiesRequest {
	}

	/** A request to list all of the email identities associated with your Amazon Web Services account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified. */
	export interface ListEmailIdentitiesRequestFormProperties {
	}
	export function CreateListEmailIdentitiesRequestFormGroup() {
		return new FormGroup<ListEmailIdentitiesRequestFormProperties>({
		});

	}


	/** Represents a request to list the email templates present in your Amazon SES account in the current Amazon Web Services Region. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface ListEmailTemplatesRequest {
	}

	/** Represents a request to list the email templates present in your Amazon SES account in the current Amazon Web Services Region. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface ListEmailTemplatesRequestFormProperties {
	}
	export function CreateListEmailTemplatesRequestFormGroup() {
		return new FormGroup<ListEmailTemplatesRequestFormProperties>({
		});

	}


	/** Represents a request to list all of the import jobs for a data destination within the specified maximum number of import jobs. */
	export interface ListImportJobsRequest {
		ImportDestinationType?: ImportDestinationType;
	}

	/** Represents a request to list all of the import jobs for a data destination within the specified maximum number of import jobs. */
	export interface ListImportJobsRequestFormProperties {
		ImportDestinationType: FormControl<ImportDestinationType | null | undefined>,
	}
	export function CreateListImportJobsRequestFormGroup() {
		return new FormGroup<ListImportJobsRequestFormProperties>({
			ImportDestinationType: new FormControl<ImportDestinationType | null | undefined>(undefined),
		});

	}


	/** An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe. */
	export interface ListManagementOptions {

		/** Required */
		ContactListName: string;
		TopicName?: string;
	}

	/** An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe. */
	export interface ListManagementOptionsFormProperties {

		/** Required */
		ContactListName: FormControl<string | null | undefined>,
		TopicName: FormControl<string | null | undefined>,
	}
	export function CreateListManagementOptionsFormGroup() {
		return new FormGroup<ListManagementOptionsFormProperties>({
			ContactListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TopicName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains mapping between <code>ListRecommendationsFilterKey</code> and <code>ListRecommendationFilterValue</code> to filter by. */
	export interface ListRecommendationsFilter {
	}

	/** An object that contains mapping between <code>ListRecommendationsFilterKey</code> and <code>ListRecommendationFilterValue</code> to filter by. */
	export interface ListRecommendationsFilterFormProperties {
	}
	export function CreateListRecommendationsFilterFormGroup() {
		return new FormGroup<ListRecommendationsFilterFormProperties>({
		});

	}


	/** <p>The <code>ListRecommendations</code> filter type. This can be one of the following:</p> <ul> <li> <p> <code>TYPE</code> – The recommendation type, with values like <code>DKIM</code>, <code>SPF</code>, <code>DMARC</code> or <code>BIMI</code>.</p> </li> <li> <p> <code>IMPACT</code> – The recommendation impact, with values like <code>HIGH</code> or <code>LOW</code>.</p> </li> <li> <p> <code>STATUS</code> – The recommendation status, with values like <code>OPEN</code> or <code>FIXED</code>.</p> </li> <li> <p> <code>RESOURCE_ARN</code> – The resource affected by the recommendation, with values like <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p> </li> </ul> */
	export enum ListRecommendationsFilterKey { TYPE = 0, IMPACT = 1, STATUS = 2, RESOURCE_ARN = 3 }


	/** Represents a request to list the existing recommendations for your account. */
	export interface ListRecommendationsRequest {
		Filter?: ListRecommendationsFilter;
		NextToken?: string;
		PageSize?: number | null;
	}

	/** Represents a request to list the existing recommendations for your account. */
	export interface ListRecommendationsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListRecommendationsRequestFormGroup() {
		return new FormGroup<ListRecommendationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
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


	/** <p>The <code>BatchGetMetricDataQuery</code> dimension name. This can be one of the following:</p> <ul> <li> <p> <code>EMAIL_IDENTITY</code> – The email identity used when sending messages.</p> </li> <li> <p> <code>CONFIGURATION_SET</code> – The configuration set used when sending messages (if one was used).</p> </li> <li> <p> <code>ISP</code> – The recipient ISP (e.g. <code>Gmail</code>, <code>Yahoo</code>, etc.).</p> </li> </ul> */
	export enum MetricDimensionName { EMAIL_IDENTITY = 0, CONFIGURATION_SET = 1, ISP = 2 }


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


	/** A request to submit new account details. */
	export interface PutAccountDetailsRequest {

		/** Required */
		MailType: MailType;

		/** Required */
		WebsiteURL: string;
		ContactLanguage?: ContactLanguage;

		/** Required */
		UseCaseDescription: string;
		AdditionalContactEmailAddresses?: Array<string>;
		ProductionAccessEnabled?: boolean | null;
	}

	/** A request to submit new account details. */
	export interface PutAccountDetailsRequestFormProperties {

		/** Required */
		MailType: FormControl<MailType | null | undefined>,

		/** Required */
		WebsiteURL: FormControl<string | null | undefined>,
		ContactLanguage: FormControl<ContactLanguage | null | undefined>,

		/** Required */
		UseCaseDescription: FormControl<string | null | undefined>,
		ProductionAccessEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountDetailsRequestFormGroup() {
		return new FormGroup<PutAccountDetailsRequestFormProperties>({
			MailType: new FormControl<MailType | null | undefined>(undefined, [Validators.required]),
			WebsiteURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactLanguage: new FormControl<ContactLanguage | null | undefined>(undefined),
			UseCaseDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductionAccessEnabled: new FormControl<boolean | null | undefined>(undefined),
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


	/** A request to submit new account VDM attributes. */
	export interface PutAccountVdmAttributesRequest {

		/** Required */
		VdmAttributes: VdmAttributes;
	}

	/** A request to submit new account VDM attributes. */
	export interface PutAccountVdmAttributesRequestFormProperties {
	}
	export function CreatePutAccountVdmAttributesRequestFormGroup() {
		return new FormGroup<PutAccountVdmAttributesRequestFormProperties>({
		});

	}


	/** A request to associate a configuration set with a dedicated IP pool. */
	export interface PutConfigurationSetDeliveryOptionsRequest {
		TlsPolicy?: TlsPolicy;
		SendingPoolName?: string;
	}

	/** A request to associate a configuration set with a dedicated IP pool. */
	export interface PutConfigurationSetDeliveryOptionsRequestFormProperties {
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
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
		CustomRedirectDomain?: string;
	}

	/** A request to add a custom domain for tracking open and click events to a configuration set. */
	export interface PutConfigurationSetTrackingOptionsRequestFormProperties {
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetTrackingOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetTrackingOptionsRequestFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to add specific VDM settings to a configuration set. */
	export interface PutConfigurationSetVdmOptionsRequest {
		VdmOptions?: VdmOptions;
	}

	/** A request to add specific VDM settings to a configuration set. */
	export interface PutConfigurationSetVdmOptionsRequestFormProperties {
	}
	export function CreatePutConfigurationSetVdmOptionsRequestFormGroup() {
		return new FormGroup<PutConfigurationSetVdmOptionsRequestFormProperties>({
		});

	}


	/** A request to move a dedicated IP address to a dedicated IP pool. */
	export interface PutDedicatedIpInPoolRequest {

		/** Required */
		DestinationPoolName: string;
	}

	/** A request to move a dedicated IP address to a dedicated IP pool. */
	export interface PutDedicatedIpInPoolRequestFormProperties {

		/** Required */
		DestinationPoolName: FormControl<string | null | undefined>,
	}
	export function CreatePutDedicatedIpInPoolRequestFormGroup() {
		return new FormGroup<PutDedicatedIpInPoolRequestFormProperties>({
			DestinationPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to convert a dedicated IP pool to a different scaling mode. */
	export interface PutDedicatedIpPoolScalingAttributesRequest {

		/** Required */
		ScalingMode: ScalingMode;
	}

	/** A request to convert a dedicated IP pool to a different scaling mode. */
	export interface PutDedicatedIpPoolScalingAttributesRequestFormProperties {

		/** Required */
		ScalingMode: FormControl<ScalingMode | null | undefined>,
	}
	export function CreatePutDedicatedIpPoolScalingAttributesRequestFormGroup() {
		return new FormGroup<PutDedicatedIpPoolScalingAttributesRequestFormProperties>({
			ScalingMode: new FormControl<ScalingMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address. */
	export interface PutDedicatedIpWarmupAttributesRequest {

		/** Required */
		WarmupPercentage: number;
	}

	/** A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address. */
	export interface PutDedicatedIpWarmupAttributesRequestFormProperties {

		/** Required */
		WarmupPercentage: FormControl<number | null | undefined>,
	}
	export function CreatePutDedicatedIpWarmupAttributesRequestFormGroup() {
		return new FormGroup<PutDedicatedIpWarmupAttributesRequestFormProperties>({
			WarmupPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface PutDeliverabilityDashboardOptionRequest {

		/** Required */
		DashboardEnabled: boolean;
		SubscribedDomains?: Array<DomainDeliverabilityTrackingOption>;
	}

	/** <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p> */
	export interface PutDeliverabilityDashboardOptionRequestFormProperties {

		/** Required */
		DashboardEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutDeliverabilityDashboardOptionRequestFormGroup() {
		return new FormGroup<PutDeliverabilityDashboardOptionRequestFormProperties>({
			DashboardEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A request to associate a configuration set with an email identity. */
	export interface PutEmailIdentityConfigurationSetAttributesRequest {
		ConfigurationSetName?: string;
	}

	/** A request to associate a configuration set with an email identity. */
	export interface PutEmailIdentityConfigurationSetAttributesRequestFormProperties {
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreatePutEmailIdentityConfigurationSetAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityConfigurationSetAttributesRequestFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		SigningAttributesOrigin: DkimSigningAttributesOrigin;
		SigningAttributes?: DkimSigningAttributes;
	}

	/** A request to change the DKIM attributes for an email identity. */
	export interface PutEmailIdentityDkimSigningAttributesRequestFormProperties {

		/** Required */
		SigningAttributesOrigin: FormControl<DkimSigningAttributesOrigin | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimSigningAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityDkimSigningAttributesRequestFormProperties>({
			SigningAttributesOrigin: new FormControl<DkimSigningAttributesOrigin | null | undefined>(undefined, [Validators.required]),
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
		MailFromDomain?: string;
		BehaviorOnMxFailure?: BehaviorOnMxFailure;
	}

	/** A request to configure the custom MAIL FROM domain for a verified identity. */
	export interface PutEmailIdentityMailFromAttributesRequestFormProperties {
		MailFromDomain: FormControl<string | null | undefined>,
		BehaviorOnMxFailure: FormControl<BehaviorOnMxFailure | null | undefined>,
	}
	export function CreatePutEmailIdentityMailFromAttributesRequestFormGroup() {
		return new FormGroup<PutEmailIdentityMailFromAttributesRequestFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined),
			BehaviorOnMxFailure: new FormControl<BehaviorOnMxFailure | null | undefined>(undefined),
		});

	}


	/** A request to add an email destination to the suppression list for your account. */
	export interface PutSuppressedDestinationRequest {

		/** Required */
		EmailAddress: string;

		/** Required */
		Reason: SuppressionListReason;
	}

	/** A request to add an email destination to the suppression list for your account. */
	export interface PutSuppressedDestinationRequestFormProperties {

		/** Required */
		EmailAddress: FormControl<string | null | undefined>,

		/** Required */
		Reason: FormControl<SuppressionListReason | null | undefined>,
	}
	export function CreatePutSuppressedDestinationRequestFormGroup() {
		return new FormGroup<PutSuppressedDestinationRequestFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<SuppressionListReason | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a request to send email messages to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface SendBulkEmailRequest {
		FromEmailAddress?: string;
		FromEmailAddressIdentityArn?: string;
		ReplyToAddresses?: Array<string>;
		FeedbackForwardingEmailAddress?: string;
		FeedbackForwardingEmailAddressIdentityArn?: string;
		DefaultEmailTags?: Array<MessageTag>;

		/** Required */
		DefaultContent: BulkEmailContent;

		/** Required */
		BulkEmailEntries: Array<BulkEmailEntry>;
		ConfigurationSetName?: string;
	}

	/** Represents a request to send email messages to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface SendBulkEmailRequestFormProperties {
		FromEmailAddress: FormControl<string | null | undefined>,
		FromEmailAddressIdentityArn: FormControl<string | null | undefined>,
		FeedbackForwardingEmailAddress: FormControl<string | null | undefined>,
		FeedbackForwardingEmailAddressIdentityArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendBulkEmailRequestFormGroup() {
		return new FormGroup<SendBulkEmailRequestFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			FromEmailAddressIdentityArn: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddress: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddressIdentityArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to send a custom verification email to a specified recipient. */
	export interface SendCustomVerificationEmailRequest {

		/** Required */
		EmailAddress: string;

		/** Required */
		TemplateName: string;
		ConfigurationSetName?: string;
	}

	/** Represents a request to send a custom verification email to a specified recipient. */
	export interface SendCustomVerificationEmailRequestFormProperties {

		/** Required */
		EmailAddress: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendCustomVerificationEmailRequestFormGroup() {
		return new FormGroup<SendCustomVerificationEmailRequestFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>. */
	export interface SendEmailRequest {
		FromEmailAddress?: string;
		FromEmailAddressIdentityArn?: string;
		Destination?: Destination;
		ReplyToAddresses?: Array<string>;
		FeedbackForwardingEmailAddress?: string;
		FeedbackForwardingEmailAddressIdentityArn?: string;

		/** Required */
		Content: EmailContent;
		EmailTags?: Array<MessageTag>;
		ConfigurationSetName?: string;
		ListManagementOptions?: ListManagementOptions;
	}

	/** Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>. */
	export interface SendEmailRequestFormProperties {
		FromEmailAddress: FormControl<string | null | undefined>,
		FromEmailAddressIdentityArn: FormControl<string | null | undefined>,
		FeedbackForwardingEmailAddress: FormControl<string | null | undefined>,
		FeedbackForwardingEmailAddressIdentityArn: FormControl<string | null | undefined>,
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailRequestFormGroup() {
		return new FormGroup<SendEmailRequestFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			FromEmailAddressIdentityArn: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddress: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddressIdentityArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** &gt;Represents a request to create a preview of the MIME content of an email when provided with a template and a set of replacement data. */
	export interface TestRenderEmailTemplateRequest {

		/** Required */
		TemplateData: string;
	}

	/** &gt;Represents a request to create a preview of the MIME content of an email when provided with a template and a set of replacement data. */
	export interface TestRenderEmailTemplateRequestFormProperties {

		/** Required */
		TemplateData: FormControl<string | null | undefined>,
	}
	export function CreateTestRenderEmailTemplateRequestFormGroup() {
		return new FormGroup<TestRenderEmailTemplateRequestFormProperties>({
			TemplateData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		EventDestination: EventDestinationDefinition;
	}

	/** A request to change the settings for an event destination for a configuration set. */
	export interface UpdateConfigurationSetEventDestinationRequestFormProperties {
	}
	export function CreateUpdateConfigurationSetEventDestinationRequestFormGroup() {
		return new FormGroup<UpdateConfigurationSetEventDestinationRequestFormProperties>({
		});

	}

	export interface UpdateContactListRequest {
		Topics?: Array<Topic>;
		Description?: string;
	}
	export interface UpdateContactListRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactListRequestFormGroup() {
		return new FormGroup<UpdateContactListRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateContactRequest {
		TopicPreferences?: Array<TopicPreference>;
		UnsubscribeAll?: boolean | null;
		AttributesData?: string;
	}
	export interface UpdateContactRequestFormProperties {
		UnsubscribeAll: FormControl<boolean | null | undefined>,
		AttributesData: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactRequestFormGroup() {
		return new FormGroup<UpdateContactRequestFormProperties>({
			UnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
			AttributesData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a request to update an existing custom verification email template. */
	export interface UpdateCustomVerificationEmailTemplateRequest {

		/** Required */
		FromEmailAddress: string;

		/** Required */
		TemplateSubject: string;

		/** Required */
		TemplateContent: string;

		/** Required */
		SuccessRedirectionURL: string;

		/** Required */
		FailureRedirectionURL: string;
	}

	/** Represents a request to update an existing custom verification email template. */
	export interface UpdateCustomVerificationEmailTemplateRequestFormProperties {

		/** Required */
		FromEmailAddress: FormControl<string | null | undefined>,

		/** Required */
		TemplateSubject: FormControl<string | null | undefined>,

		/** Required */
		TemplateContent: FormControl<string | null | undefined>,

		/** Required */
		SuccessRedirectionURL: FormControl<string | null | undefined>,

		/** Required */
		FailureRedirectionURL: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomVerificationEmailTemplateRequestFormGroup() {
		return new FormGroup<UpdateCustomVerificationEmailTemplateRequestFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateSubject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SuccessRedirectionURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FailureRedirectionURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a request to update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>. */
	export interface UpdateEmailIdentityPolicyRequest {

		/** Required */
		Policy: string;
	}

	/** Represents a request to update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>. */
	export interface UpdateEmailIdentityPolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEmailIdentityPolicyRequestFormGroup() {
		return new FormGroup<UpdateEmailIdentityPolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a request to update an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface UpdateEmailTemplateRequest {

		/** Required */
		TemplateContent: EmailTemplateContent;
	}

	/** Represents a request to update an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>. */
	export interface UpdateEmailTemplateRequestFormProperties {
	}
	export function CreateUpdateEmailTemplateRequestFormGroup() {
		return new FormGroup<UpdateEmailTemplateRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Retrieves batches of metric data collected based on your sending activity.</p> <p>You can execute this operation no more than 16 times per second, and with at most 160 queries from the batches per second (cumulative).</p>
		 * Post v2/email/metrics/batch
		 * @return {BatchGetMetricDataResponse} Success
		 */
		BatchGetMetricData(requestBody: BatchGetMetricDataPostBody): Observable<BatchGetMetricDataResponse> {
			return this.http.post<BatchGetMetricDataResponse>(this.baseUri + 'v2/email/metrics/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @param {string} ConfigurationSetName The name of the configuration set .
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
		 * Creates a contact, which is an end-user who is receiving the email, and adds them to a contact list.
		 * Post v2/email/contact-lists/{ContactListName}/contacts
		 * @param {string} ContactListName The name of the contact list to which the contact should be added.
		 * @return {CreateContactResponse} Success
		 */
		CreateContact(ContactListName: string, requestBody: CreateContactPostBody): Observable<CreateContactResponse> {
			return this.http.post<CreateContactResponse>(this.baseUri + 'v2/email/contact-lists/' + (ContactListName == null ? '' : encodeURIComponent(ContactListName)) + '/contacts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the contacts present in a specific contact list.
		 * Get v2/email/contact-lists/{ContactListName}/contacts
		 * @param {string} ContactListName The name of the contact list.
		 * @param {number} PageSize The number of contacts that may be returned at once, which is dependent on if there are more or less contacts than the value of the PageSize. Use this parameter to paginate results. If additional contacts exist beyond the specified limit, the <code>NextToken</code> element is sent in the response. Use the <code>NextToken</code> value in subsequent requests to retrieve additional contacts.
		 * @param {string} NextToken A string token indicating that there might be additional contacts available to be listed. Use the token provided in the Response to use in the subsequent call to ListContacts with the same parameters to retrieve the next page of contacts.
		 * @return {ListContactsResponse} Success
		 */
		ListContacts(ContactListName: string, PageSize: number | null | undefined, NextToken: string | null | undefined): Observable<ListContactsResponse> {
			return this.http.get<ListContactsResponse>(this.baseUri + 'v2/email/contact-lists/' + (ContactListName == null ? '' : encodeURIComponent(ContactListName)) + '/contacts&PageSize=' + PageSize + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a contact list.
		 * Post v2/email/contact-lists
		 * @return {CreateContactListResponse} Success
		 */
		CreateContactList(requestBody: CreateContactListPostBody): Observable<CreateContactListResponse> {
			return this.http.post<CreateContactListResponse>(this.baseUri + 'v2/email/contact-lists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the contact lists available.
		 * Get v2/email/contact-lists
		 * @param {number} PageSize Maximum number of contact lists to return at once. Use this parameter to paginate results. If additional contact lists exist beyond the specified limit, the <code>NextToken</code> element is sent in the response. Use the <code>NextToken</code> value in subsequent requests to retrieve additional lists.
		 * @param {string} NextToken A string token indicating that there might be additional contact lists available to be listed. Use the token provided in the Response to use in the subsequent call to ListContactLists with the same parameters to retrieve the next page of contact lists.
		 * @return {ListContactListsResponse} Success
		 */
		ListContactLists(PageSize: number | null | undefined, NextToken: string | null | undefined): Observable<ListContactListsResponse> {
			return this.http.get<ListContactListsResponse>(this.baseUri + 'v2/email/contact-lists?PageSize=' + PageSize + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a new custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Post v2/email/custom-verification-email-templates
		 * @return {CreateCustomVerificationEmailTemplateResponse} Success
		 */
		CreateCustomVerificationEmailTemplate(requestBody: CreateCustomVerificationEmailTemplatePostBody): Observable<CreateCustomVerificationEmailTemplateResponse> {
			return this.http.post<CreateCustomVerificationEmailTemplateResponse>(this.baseUri + 'v2/email/custom-verification-email-templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the existing custom verification email templates for your account in the current Amazon Web Services Region.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get v2/email/custom-verification-email-templates
		 * @param {string} NextToken A token returned from a previous call to <code>ListCustomVerificationEmailTemplates</code> to indicate the position in the list of custom verification email templates.
		 * @param {number} PageSize <p>The number of results to show in a single call to <code>ListCustomVerificationEmailTemplates</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 50.</p>
		 * @return {ListCustomVerificationEmailTemplatesResponse} Success
		 */
		ListCustomVerificationEmailTemplates(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListCustomVerificationEmailTemplatesResponse> {
			return this.http.get<ListCustomVerificationEmailTemplatesResponse>(this.baseUri + 'v2/email/custom-verification-email-templates?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Web Services account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
		 * Post v2/email/dedicated-ip-pools
		 * @return {CreateDedicatedIpPoolResponse} Success
		 */
		CreateDedicatedIpPool(requestBody: CreateDedicatedIpPoolPostBody): Observable<CreateDedicatedIpPoolResponse> {
			return this.http.post<CreateDedicatedIpPoolResponse>(this.baseUri + 'v2/email/dedicated-ip-pools', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all of the dedicated IP pools that exist in your Amazon Web Services account in the current Region.
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
		 * <p>Starts the process of verifying an email identity. An <i>identity</i> is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.</p> <p>When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain without specifying the <code>DkimSigningAttributes</code> object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> <p>Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the <code>CreateEmailIdentity</code> operation has to include the <code>DkimSigningAttributes</code> object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key.</p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process.</p> <p>Additionally, you can associate an existing configuration set with the email identity that you're verifying.</p>
		 * Post v2/email/identities
		 * @return {CreateEmailIdentityResponse} Success
		 */
		CreateEmailIdentity(requestBody: CreateEmailIdentityPostBody): Observable<CreateEmailIdentityResponse> {
			return this.http.post<CreateEmailIdentityResponse>(this.baseUri + 'v2/email/identities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.
		 * Get v2/email/identities
		 * @param {string} NextToken A token returned from a previous call to <code>ListEmailIdentities</code> to indicate the position in the list of identities.
		 * @param {number} PageSize <p>The number of results to show in a single call to <code>ListEmailIdentities</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
		 * @return {ListEmailIdentitiesResponse} Success
		 */
		ListEmailIdentities(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListEmailIdentitiesResponse> {
			return this.http.get<ListEmailIdentitiesResponse>(this.baseUri + 'v2/email/identities?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * <p>Creates the specified sending authorization policy for the given identity (an email address or a domain).</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Post v2/email/identities/{EmailIdentity}/policies/{PolicyName}
		 * @param {string} EmailIdentity The email identity.
		 * @param {string} PolicyName <p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>
		 * @return {CreateEmailIdentityPolicyResponse} Success
		 */
		CreateEmailIdentityPolicy(EmailIdentity: string, PolicyName: string, requestBody: CreateEmailIdentityPolicyPostBody): Observable<CreateEmailIdentityPolicyResponse> {
			return this.http.post<CreateEmailIdentityPolicyResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/policies/' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Delete v2/email/identities/{EmailIdentity}/policies/{PolicyName}
		 * @param {string} EmailIdentity The email identity.
		 * @param {string} PolicyName <p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>
		 * @return {DeleteEmailIdentityPolicyResponse} Success
		 */
		DeleteEmailIdentityPolicy(EmailIdentity: string, PolicyName: string): Observable<DeleteEmailIdentityPolicyResponse> {
			return this.http.delete<DeleteEmailIdentityPolicyResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/policies/' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)), {});
		}

		/**
		 * <p>Updates the specified sending authorization policy for the given identity (an email address or a domain). This API returns successfully even if a policy with the specified name does not exist.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Put v2/email/identities/{EmailIdentity}/policies/{PolicyName}
		 * @param {string} EmailIdentity The email identity.
		 * @param {string} PolicyName <p>The name of the policy.</p> <p>The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.</p>
		 * @return {UpdateEmailIdentityPolicyResponse} Success
		 */
		UpdateEmailIdentityPolicy(EmailIdentity: string, PolicyName: string, requestBody: UpdateEmailIdentityPolicyPutBody): Observable<UpdateEmailIdentityPolicyResponse> {
			return this.http.put<UpdateEmailIdentityPolicyResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/policies/' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Post v2/email/templates
		 * @return {CreateEmailTemplateResponse} Success
		 */
		CreateEmailTemplate(requestBody: CreateEmailTemplatePostBody): Observable<CreateEmailTemplateResponse> {
			return this.http.post<CreateEmailTemplateResponse>(this.baseUri + 'v2/email/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the email templates present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get v2/email/templates
		 * @param {string} NextToken A token returned from a previous call to <code>ListEmailTemplates</code> to indicate the position in the list of email templates.
		 * @param {number} PageSize <p>The number of results to show in a single call to <code>ListEmailTemplates</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 10.</p>
		 * @return {ListEmailTemplatesResponse} Success
		 */
		ListEmailTemplates(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListEmailTemplatesResponse> {
			return this.http.get<ListEmailTemplatesResponse>(this.baseUri + 'v2/email/templates?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * Creates an import job for a data destination.
		 * Post v2/email/import-jobs
		 * @return {CreateImportJobResponse} Success
		 */
		CreateImportJob(requestBody: CreateImportJobPostBody): Observable<CreateImportJobResponse> {
			return this.http.post<CreateImportJobResponse>(this.baseUri + 'v2/email/import-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the import jobs.
		 * Get v2/email/import-jobs
		 * @param {string} NextToken A string token indicating that there might be additional import jobs available to be listed. Copy this token to a subsequent call to <code>ListImportJobs</code> with the same parameters to retrieve the next page of import jobs.
		 * @param {number} PageSize Maximum number of import jobs to return at once. Use this parameter to paginate results. If additional import jobs exist beyond the specified limit, the <code>NextToken</code> element is sent in the response. Use the <code>NextToken</code> value in subsequent requests to retrieve additional addresses.
		 * @return {ListImportJobsResponse} Success
		 */
		ListImportJobs(NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListImportJobsResponse> {
			return this.http.get<ListImportJobsResponse>(this.baseUri + 'v2/email/import-jobs?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * <p>Delete an existing configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Delete v2/email/configuration-sets/{ConfigurationSetName}
		 * @param {string} ConfigurationSetName The name of the configuration set.
		 * @return {DeleteConfigurationSetResponse} Success
		 */
		DeleteConfigurationSet(ConfigurationSetName: string): Observable<DeleteConfigurationSetResponse> {
			return this.http.delete<DeleteConfigurationSetResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)), {});
		}

		/**
		 * <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Get v2/email/configuration-sets/{ConfigurationSetName}
		 * @param {string} ConfigurationSetName The name of the configuration set.
		 * @return {GetConfigurationSetResponse} Success
		 */
		GetConfigurationSet(ConfigurationSetName: string): Observable<GetConfigurationSetResponse> {
			return this.http.get<GetConfigurationSetResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)), {});
		}

		/**
		 * <p>Delete an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Delete v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination to delete.
		 * @param {string} EventDestinationName The name of the event destination to delete.
		 * @return {DeleteConfigurationSetEventDestinationResponse} Success
		 */
		DeleteConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string): Observable<DeleteConfigurationSetEventDestinationResponse> {
			return this.http.delete<DeleteConfigurationSetEventDestinationResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), {});
		}

		/**
		 * <p>Update the configuration of an event destination for a configuration set.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}
		 * @param {string} ConfigurationSetName The name of the configuration set that contains the event destination to modify.
		 * @param {string} EventDestinationName The name of the event destination.
		 * @return {UpdateConfigurationSetEventDestinationResponse} Success
		 */
		UpdateConfigurationSetEventDestination(ConfigurationSetName: string, EventDestinationName: string, requestBody: UpdateConfigurationSetEventDestinationPutBody): Observable<UpdateConfigurationSetEventDestinationResponse> {
			return this.http.put<UpdateConfigurationSetEventDestinationResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/event-destinations/' + (EventDestinationName == null ? '' : encodeURIComponent(EventDestinationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a contact from a contact list.
		 * Delete v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}
		 * @param {string} ContactListName The name of the contact list from which the contact should be removed.
		 * @param {string} EmailAddress The contact's email address.
		 * @return {DeleteContactResponse} Success
		 */
		DeleteContact(ContactListName: string, EmailAddress: string): Observable<DeleteContactResponse> {
			return this.http.delete<DeleteContactResponse>(this.baseUri + 'v2/email/contact-lists/' + (ContactListName == null ? '' : encodeURIComponent(ContactListName)) + '/contacts/' + (EmailAddress == null ? '' : encodeURIComponent(EmailAddress)), {});
		}

		/**
		 * Returns a contact from a contact list.
		 * Get v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}
		 * @param {string} ContactListName The name of the contact list to which the contact belongs.
		 * @param {string} EmailAddress The contact's email address.
		 * @return {GetContactResponse} Success
		 */
		GetContact(ContactListName: string, EmailAddress: string): Observable<GetContactResponse> {
			return this.http.get<GetContactResponse>(this.baseUri + 'v2/email/contact-lists/' + (ContactListName == null ? '' : encodeURIComponent(ContactListName)) + '/contacts/' + (EmailAddress == null ? '' : encodeURIComponent(EmailAddress)), {});
		}

		/**
		 * Updates a contact's preferences for a list. It is not necessary to specify all existing topic preferences in the TopicPreferences object, just the ones that need updating.
		 * Put v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}
		 * @param {string} ContactListName The name of the contact list.
		 * @param {string} EmailAddress The contact's email address.
		 * @return {UpdateContactResponse} Success
		 */
		UpdateContact(ContactListName: string, EmailAddress: string, requestBody: UpdateContactPutBody): Observable<UpdateContactResponse> {
			return this.http.put<UpdateContactResponse>(this.baseUri + 'v2/email/contact-lists/' + (ContactListName == null ? '' : encodeURIComponent(ContactListName)) + '/contacts/' + (EmailAddress == null ? '' : encodeURIComponent(EmailAddress)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a contact list and all of the contacts on that list.
		 * Delete v2/email/contact-lists/{ContactListName}
		 * @param {string} ContactListName The name of the contact list.
		 * @return {DeleteContactListResponse} Success
		 */
		DeleteContactList(ContactListName: string): Observable<DeleteContactListResponse> {
			return this.http.delete<DeleteContactListResponse>(this.baseUri + 'v2/email/contact-lists/' + (ContactListName == null ? '' : encodeURIComponent(ContactListName)), {});
		}

		/**
		 * Returns contact list metadata. It does not return any information about the contacts present in the list.
		 * Get v2/email/contact-lists/{ContactListName}
		 * @param {string} ContactListName The name of the contact list.
		 * @return {GetContactListResponse} Success
		 */
		GetContactList(ContactListName: string): Observable<GetContactListResponse> {
			return this.http.get<GetContactListResponse>(this.baseUri + 'v2/email/contact-lists/' + (ContactListName == null ? '' : encodeURIComponent(ContactListName)), {});
		}

		/**
		 * Updates contact list metadata. This operation does a complete replacement.
		 * Put v2/email/contact-lists/{ContactListName}
		 * @param {string} ContactListName The name of the contact list.
		 * @return {UpdateContactListResponse} Success
		 */
		UpdateContactList(ContactListName: string, requestBody: UpdateContactListPutBody): Observable<UpdateContactListResponse> {
			return this.http.put<UpdateContactListResponse>(this.baseUri + 'v2/email/contact-lists/' + (ContactListName == null ? '' : encodeURIComponent(ContactListName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Delete v2/email/custom-verification-email-templates/{TemplateName}
		 * @param {string} TemplateName The name of the custom verification email template that you want to delete.
		 * @return {DeleteCustomVerificationEmailTemplateResponse} Success
		 */
		DeleteCustomVerificationEmailTemplate(TemplateName: string): Observable<DeleteCustomVerificationEmailTemplateResponse> {
			return this.http.delete<DeleteCustomVerificationEmailTemplateResponse>(this.baseUri + 'v2/email/custom-verification-email-templates/' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)), {});
		}

		/**
		 * <p>Returns the custom email verification template for the template name you specify.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get v2/email/custom-verification-email-templates/{TemplateName}
		 * @param {string} TemplateName The name of the custom verification email template that you want to retrieve.
		 * @return {GetCustomVerificationEmailTemplateResponse} Success
		 */
		GetCustomVerificationEmailTemplate(TemplateName: string): Observable<GetCustomVerificationEmailTemplateResponse> {
			return this.http.get<GetCustomVerificationEmailTemplateResponse>(this.baseUri + 'v2/email/custom-verification-email-templates/' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)), {});
		}

		/**
		 * <p>Updates an existing custom verification email template.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Put v2/email/custom-verification-email-templates/{TemplateName}
		 * @param {string} TemplateName The name of the custom verification email template that you want to update.
		 * @return {UpdateCustomVerificationEmailTemplateResponse} Success
		 */
		UpdateCustomVerificationEmailTemplate(TemplateName: string, requestBody: UpdateCustomVerificationEmailTemplatePutBody): Observable<UpdateCustomVerificationEmailTemplateResponse> {
			return this.http.put<UpdateCustomVerificationEmailTemplateResponse>(this.baseUri + 'v2/email/custom-verification-email-templates/' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Retrieve information about the dedicated pool.
		 * Get v2/email/dedicated-ip-pools/{PoolName}
		 * @param {string} PoolName The name of the dedicated IP pool to retrieve.
		 * @return {GetDedicatedIpPoolResponse} Success
		 */
		GetDedicatedIpPool(PoolName: string): Observable<GetDedicatedIpPoolResponse> {
			return this.http.get<GetDedicatedIpPoolResponse>(this.baseUri + 'v2/email/dedicated-ip-pools/' + (PoolName == null ? '' : encodeURIComponent(PoolName)), {});
		}

		/**
		 * Deletes an email identity. An identity can be either an email address or a domain name.
		 * Delete v2/email/identities/{EmailIdentity}
		 * @param {string} EmailIdentity The identity (that is, the email address or domain) to delete.
		 * @return {DeleteEmailIdentityResponse} Success
		 */
		DeleteEmailIdentity(EmailIdentity: string): Observable<DeleteEmailIdentityResponse> {
			return this.http.delete<DeleteEmailIdentityResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)), {});
		}

		/**
		 * Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.
		 * Get v2/email/identities/{EmailIdentity}
		 * @param {string} EmailIdentity The email identity.
		 * @return {GetEmailIdentityResponse} Success
		 */
		GetEmailIdentity(EmailIdentity: string): Observable<GetEmailIdentityResponse> {
			return this.http.get<GetEmailIdentityResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)), {});
		}

		/**
		 * <p>Deletes an email template.</p> <p>You can execute this operation no more than once per second.</p>
		 * Delete v2/email/templates/{TemplateName}
		 * @param {string} TemplateName The name of the template to be deleted.
		 * @return {DeleteEmailTemplateResponse} Success
		 */
		DeleteEmailTemplate(TemplateName: string): Observable<DeleteEmailTemplateResponse> {
			return this.http.delete<DeleteEmailTemplateResponse>(this.baseUri + 'v2/email/templates/' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)), {});
		}

		/**
		 * <p>Displays the template object (which includes the subject line, HTML part and text part) for the template you specify.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get v2/email/templates/{TemplateName}
		 * @param {string} TemplateName The name of the template.
		 * @return {GetEmailTemplateResponse} Success
		 */
		GetEmailTemplate(TemplateName: string): Observable<GetEmailTemplateResponse> {
			return this.http.get<GetEmailTemplateResponse>(this.baseUri + 'v2/email/templates/' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)), {});
		}

		/**
		 * <p>Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Put v2/email/templates/{TemplateName}
		 * @param {string} TemplateName The name of the template.
		 * @return {UpdateEmailTemplateResponse} Success
		 */
		UpdateEmailTemplate(TemplateName: string, requestBody: UpdateEmailTemplatePutBody): Observable<UpdateEmailTemplateResponse> {
			return this.http.put<UpdateEmailTemplateResponse>(this.baseUri + 'v2/email/templates/' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Obtain information about the email-sending status and capabilities of your Amazon SES account in the current Amazon Web Services Region.
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
		 * @param {string} IP The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your Amazon Web Services account.
		 * @return {GetDedicatedIpResponse} Success
		 */
		GetDedicatedIp(IP: string): Observable<GetDedicatedIpResponse> {
			return this.http.get<GetDedicatedIpResponse>(this.baseUri + 'v2/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)), {});
		}

		/**
		 * List the dedicated IP addresses that are associated with your Amazon Web Services account.
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
		 * <p>Retrieve information about the status of the Deliverability dashboard for your account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
		 * Get v2/email/deliverability-dashboard
		 * @return {GetDeliverabilityDashboardOptionsResponse} Success
		 */
		GetDeliverabilityDashboardOptions(): Observable<GetDeliverabilityDashboardOptionsResponse> {
			return this.http.get<GetDeliverabilityDashboardOptionsResponse>(this.baseUri + 'v2/email/deliverability-dashboard', {});
		}

		/**
		 * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/ses/pricing/">Amazon SES Pricing</a>.</p>
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
		 * <p>Returns the requested sending authorization policies for the given identity (an email address or a domain). The policies are returned as a map of policy names to policy contents. You can retrieve a maximum of 20 policies at a time.</p> <note> <p>This API is for the identity owner only. If you have not verified the identity, this API will return an error.</p> </note> <p>Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Get v2/email/identities/{EmailIdentity}/policies
		 * @param {string} EmailIdentity The email identity.
		 * @return {GetEmailIdentityPoliciesResponse} Success
		 */
		GetEmailIdentityPolicies(EmailIdentity: string): Observable<GetEmailIdentityPoliciesResponse> {
			return this.http.get<GetEmailIdentityPoliciesResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/policies', {});
		}

		/**
		 * Provides information about an import job.
		 * Get v2/email/import-jobs/{JobId}
		 * @param {string} JobId The ID of the import job.
		 * @return {GetImportJobResponse} Success
		 */
		GetImportJob(JobId: string): Observable<GetImportJobResponse> {
			return this.http.get<GetImportJobResponse>(this.baseUri + 'v2/email/import-jobs/' + (JobId == null ? '' : encodeURIComponent(JobId)), {});
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
		 * @param {Date} StartDate The first day that you want to obtain deliverability data for.
		 * @param {Date} EndDate The last day that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the <code>StartDate</code> parameter.
		 * @param {string} SubscribedDomain The domain to obtain deliverability data for.
		 * @param {string} NextToken A token that’s returned from a previous call to the <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the position of a campaign in the list of campaigns.
		 * @param {number} PageSize The maximum number of results to include in response to a single call to the <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results is larger than the number that you specify in this parameter, the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
		 * @return {ListDomainDeliverabilityCampaignsResponse} Success
		 */
		ListDomainDeliverabilityCampaigns(StartDate: Date, EndDate: Date, SubscribedDomain: string, NextToken: string | null | undefined, PageSize: number | null | undefined): Observable<ListDomainDeliverabilityCampaignsResponse> {
			return this.http.get<ListDomainDeliverabilityCampaignsResponse>(this.baseUri + 'v2/email/deliverability-dashboard/domains/' + (SubscribedDomain == null ? '' : encodeURIComponent(SubscribedDomain)) + '/campaigns#StartDate&EndDate?StartDate=' + StartDate.toISOString() + '&EndDate=' + EndDate.toISOString() + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&PageSize=' + PageSize, {});
		}

		/**
		 * <p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p> <p>You can execute this operation no more than once per second.</p>
		 * Post v2/email/vdm/recommendations
		 * @param {string} PageSize Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRecommendationsResponse} Success
		 */
		ListRecommendations(PageSize: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRecommendationsPostBody): Observable<ListRecommendationsResponse> {
			return this.http.post<ListRecommendationsResponse>(this.baseUri + 'v2/email/vdm/recommendations?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of email addresses that are on the suppression list for your account.
		 * Get v2/email/suppression/addresses
		 * @param {Array<SuppressionListReason>} Reason The factors that caused the email address to be added to .
		 * @param {Date} StartDate Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list after a specific date.
		 * @param {Date} EndDate Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list before a specific date.
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
		 * Update your Amazon SES account details.
		 * Post v2/email/account/details
		 * @return {PutAccountDetailsResponse} Success
		 */
		PutAccountDetails(requestBody: PutAccountDetailsPostBody): Observable<PutAccountDetailsResponse> {
			return this.http.post<PutAccountDetailsResponse>(this.baseUri + 'v2/email/account/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Update your Amazon SES account VDM attributes.</p> <p>You can execute this operation no more than once per second.</p>
		 * Put v2/email/account/vdm
		 * @return {PutAccountVdmAttributesResponse} Success
		 */
		PutAccountVdmAttributes(requestBody: PutAccountVdmAttributesPutBody): Observable<PutAccountVdmAttributesResponse> {
			return this.http.put<PutAccountVdmAttributesResponse>(this.baseUri + 'v2/email/account/vdm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/delivery-options
		 * @param {string} ConfigurationSetName The name of the configuration set to associate with a dedicated IP pool.
		 * @return {PutConfigurationSetDeliveryOptionsResponse} Success
		 */
		PutConfigurationSetDeliveryOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetDeliveryOptionsPutBody): Observable<PutConfigurationSetDeliveryOptionsResponse> {
			return this.http.put<PutConfigurationSetDeliveryOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/delivery-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific Amazon Web Services Region.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/reputation-options
		 * @param {string} ConfigurationSetName The name of the configuration set.
		 * @return {PutConfigurationSetReputationOptionsResponse} Success
		 */
		PutConfigurationSetReputationOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetReputationOptionsPutBody): Observable<PutConfigurationSetReputationOptionsResponse> {
			return this.http.put<PutConfigurationSetReputationOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/reputation-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable or disable email sending for messages that use a particular configuration set in a specific Amazon Web Services Region.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/sending
		 * @param {string} ConfigurationSetName The name of the configuration set to enable or disable email sending for.
		 * @return {PutConfigurationSetSendingOptionsResponse} Success
		 */
		PutConfigurationSetSendingOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetSendingOptionsPutBody): Observable<PutConfigurationSetSendingOptionsResponse> {
			return this.http.put<PutConfigurationSetSendingOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/sending', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specify the account suppression list preferences for a configuration set.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/suppression-options
		 * @param {string} ConfigurationSetName The name of the configuration set to change the suppression list preferences for.
		 * @return {PutConfigurationSetSuppressionOptionsResponse} Success
		 */
		PutConfigurationSetSuppressionOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetSuppressionOptionsPutBody): Observable<PutConfigurationSetSuppressionOptionsResponse> {
			return this.http.put<PutConfigurationSetSuppressionOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/suppression-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specify a custom domain to use for open and click tracking elements in email that you send.
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/tracking-options
		 * @param {string} ConfigurationSetName The name of the configuration set.
		 * @return {PutConfigurationSetTrackingOptionsResponse} Success
		 */
		PutConfigurationSetTrackingOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetTrackingOptionsPutBody): Observable<PutConfigurationSetTrackingOptionsResponse> {
			return this.http.put<PutConfigurationSetTrackingOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/tracking-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Specify VDM preferences for email that you send using the configuration set.</p> <p>You can execute this operation no more than once per second.</p>
		 * Put v2/email/configuration-sets/{ConfigurationSetName}/vdm-options
		 * @param {string} ConfigurationSetName The name of the configuration set.
		 * @return {PutConfigurationSetVdmOptionsResponse} Success
		 */
		PutConfigurationSetVdmOptions(ConfigurationSetName: string, requestBody: PutConfigurationSetVdmOptionsPutBody): Observable<PutConfigurationSetVdmOptionsResponse> {
			return this.http.put<PutConfigurationSetVdmOptionsResponse>(this.baseUri + 'v2/email/configuration-sets/' + (ConfigurationSetName == null ? '' : encodeURIComponent(ConfigurationSetName)) + '/vdm-options', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Web Services account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
		 * Put v2/email/dedicated-ips/{IP}/pool
		 * @param {string} IP The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your Amazon Web Services account.
		 * @return {PutDedicatedIpInPoolResponse} Success
		 */
		PutDedicatedIpInPool(IP: string, requestBody: PutDedicatedIpInPoolPutBody): Observable<PutDedicatedIpInPoolResponse> {
			return this.http.put<PutDedicatedIpInPoolResponse>(this.baseUri + 'v2/email/dedicated-ips/' + (IP == null ? '' : encodeURIComponent(IP)) + '/pool', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used to convert a dedicated IP pool to a different scaling mode.</p> <note> <p> <code>MANAGED</code> pools cannot be converted to <code>STANDARD</code> scaling mode.</p> </note>
		 * Put v2/email/dedicated-ip-pools/{PoolName}/scaling
		 * @param {string} PoolName The name of the dedicated IP pool.
		 * @return {PutDedicatedIpPoolScalingAttributesResponse} Success
		 */
		PutDedicatedIpPoolScalingAttributes(PoolName: string, requestBody: PutDedicatedIpPoolScalingAttributesPutBody): Observable<PutDedicatedIpPoolScalingAttributesResponse> {
			return this.http.put<PutDedicatedIpPoolScalingAttributesResponse>(this.baseUri + 'v2/email/dedicated-ip-pools/' + (PoolName == null ? '' : encodeURIComponent(PoolName)) + '/scaling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Used to associate a configuration set with an email identity.
		 * Put v2/email/identities/{EmailIdentity}/configuration-set
		 * @param {string} EmailIdentity The email address or domain to associate with a configuration set.
		 * @return {PutEmailIdentityConfigurationSetAttributesResponse} Success
		 */
		PutEmailIdentityConfigurationSetAttributes(EmailIdentity: string, requestBody: PutEmailIdentityConfigurationSetAttributesPutBody): Observable<PutEmailIdentityConfigurationSetAttributesResponse> {
			return this.http.put<PutEmailIdentityConfigurationSetAttributesResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/configuration-set', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used to enable or disable DKIM authentication for an email identity.
		 * Put v2/email/identities/{EmailIdentity}/dkim
		 * @param {string} EmailIdentity The email identity.
		 * @return {PutEmailIdentityDkimAttributesResponse} Success
		 */
		PutEmailIdentityDkimAttributes(EmailIdentity: string, requestBody: PutEmailIdentityDkimAttributesPutBody): Observable<PutEmailIdentityDkimAttributesResponse> {
			return this.http.put<PutEmailIdentityDkimAttributesResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/dkim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:</p> <ul> <li> <p>Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).</p> </li> <li> <p>Update the key length that should be used for Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using Easy DKIM.</p> </li> <li> <p>Change from using no DKIM authentication to using BYODKIM.</p> </li> <li> <p>Change from using Easy DKIM to using BYODKIM.</p> </li> <li> <p>Change from using BYODKIM to using Easy DKIM.</p> </li> </ul>
		 * Put v1/email/identities/{EmailIdentity}/dkim/signing
		 * @param {string} EmailIdentity The email identity.
		 * @return {PutEmailIdentityDkimSigningAttributesResponse} Success
		 */
		PutEmailIdentityDkimSigningAttributes(EmailIdentity: string, requestBody: PutEmailIdentityDkimSigningAttributesPutBody): Observable<PutEmailIdentityDkimSigningAttributesResponse> {
			return this.http.put<PutEmailIdentityDkimSigningAttributesResponse>(this.baseUri + 'v1/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/dkim/signing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>
		 * Put v2/email/identities/{EmailIdentity}/feedback
		 * @param {string} EmailIdentity The email identity.
		 * @return {PutEmailIdentityFeedbackAttributesResponse} Success
		 */
		PutEmailIdentityFeedbackAttributes(EmailIdentity: string, requestBody: PutEmailIdentityFeedbackAttributesPutBody): Observable<PutEmailIdentityFeedbackAttributesResponse> {
			return this.http.put<PutEmailIdentityFeedbackAttributesResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used to enable or disable the custom Mail-From domain configuration for an email identity.
		 * Put v2/email/identities/{EmailIdentity}/mail-from
		 * @param {string} EmailIdentity The verified email identity.
		 * @return {PutEmailIdentityMailFromAttributesResponse} Success
		 */
		PutEmailIdentityMailFromAttributes(EmailIdentity: string, requestBody: PutEmailIdentityMailFromAttributesPutBody): Observable<PutEmailIdentityMailFromAttributesResponse> {
			return this.http.put<PutEmailIdentityMailFromAttributesResponse>(this.baseUri + 'v2/email/identities/' + (EmailIdentity == null ? '' : encodeURIComponent(EmailIdentity)) + '/mail-from', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Composes an email message to multiple destinations.
		 * Post v2/email/outbound-bulk-emails
		 * @return {SendBulkEmailResponse} Success
		 */
		SendBulkEmail(requestBody: SendBulkEmailPostBody): Observable<SendBulkEmailResponse> {
			return this.http.post<SendBulkEmailResponse>(this.baseUri + 'v2/email/outbound-bulk-emails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds an email address to the list of identities for your Amazon SES account in the current Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a customized verification email is sent to the specified address.</p> <p>To use this operation, you must first create a custom verification email template. For more information about creating and using custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using custom verification email templates</a> in the <i>Amazon SES Developer Guide</i>.</p> <p>You can execute this operation no more than once per second.</p>
		 * Post v2/email/outbound-custom-verification-emails
		 * @return {SendCustomVerificationEmailResponse} Success
		 */
		SendCustomVerificationEmail(requestBody: SendCustomVerificationEmailPostBody): Observable<SendCustomVerificationEmailResponse> {
			return this.http.post<SendCustomVerificationEmailResponse>(this.baseUri + 'v2/email/outbound-custom-verification-emails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> <li> <p> <b>Templated</b> – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</p> </li> </ul>
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
		 * <p>Creates a preview of the MIME content of an email when provided with a template and a set of replacement data.</p> <p>You can execute this operation no more than once per second.</p>
		 * Post v2/email/templates/{TemplateName}/render
		 * @param {string} TemplateName The name of the template.
		 * @return {TestRenderEmailTemplateResponse} Success
		 */
		TestRenderEmailTemplate(TemplateName: string, requestBody: TestRenderEmailTemplatePostBody): Observable<TestRenderEmailTemplateResponse> {
			return this.http.post<TestRenderEmailTemplateResponse>(this.baseUri + 'v2/email/templates/' + (TemplateName == null ? '' : encodeURIComponent(TemplateName)) + '/render', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

	export interface BatchGetMetricDataPostBody {

		/**
		 * A list of queries for metrics to be retrieved.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Queries: Array<BatchGetMetricDataQuery>;
	}
	export interface BatchGetMetricDataPostBodyFormProperties {
	}
	export function CreateBatchGetMetricDataPostBodyFormGroup() {
		return new FormGroup<BatchGetMetricDataPostBodyFormProperties>({
		});

	}

	export interface CreateConfigurationSetPostBody {

		/**
		 * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
		 * Required
		 */
		ConfigurationSetName: string;

		/** <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p> */
		TrackingOptions?: CreateConfigurationSetPostBodyTrackingOptions;

		/** Used to associate a configuration set with a dedicated IP pool. */
		DeliveryOptions?: CreateConfigurationSetPostBodyDeliveryOptions;

		/** Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region. */
		ReputationOptions?: CreateConfigurationSetPostBodyReputationOptions;

		/** Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region. */
		SendingOptions?: CreateConfigurationSetPostBodySendingOptions;

		/** An array of objects that define the tags (keys and values) to associate with the configuration set. */
		Tags?: Array<Tag>;

		/** An object that contains information about the suppression list preferences for your account. */
		SuppressionOptions?: CreateConfigurationSetPostBodySuppressionOptions;

		/** An object that defines the VDM settings that apply to emails that you send using the configuration set. */
		VdmOptions?: CreateConfigurationSetPostBodyVdmOptions;
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
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConfigurationSetPostBodyTrackingOptions {
		CustomRedirectDomain?: string;
	}
	export interface CreateConfigurationSetPostBodyTrackingOptionsFormProperties {
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigurationSetPostBodyTrackingOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyTrackingOptionsFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConfigurationSetPostBodyDeliveryOptions {
		TlsPolicy?: TlsPolicy;
		SendingPoolName?: string;
	}
	export interface CreateConfigurationSetPostBodyDeliveryOptionsFormProperties {
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,
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
		LastFreshStart?: Date;
	}
	export interface CreateConfigurationSetPostBodyReputationOptionsFormProperties {
		ReputationMetricsEnabled: FormControl<boolean | null | undefined>,
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

	export interface CreateConfigurationSetPostBodyVdmOptions {
		DashboardOptions?: DashboardOptions;
		GuardianOptions?: GuardianOptions;
	}
	export interface CreateConfigurationSetPostBodyVdmOptionsFormProperties {
	}
	export function CreateCreateConfigurationSetPostBodyVdmOptionsFormGroup() {
		return new FormGroup<CreateConfigurationSetPostBodyVdmOptionsFormProperties>({
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
			EventDestinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConfigurationSetEventDestinationPostBodyEventDestination {
		Enabled?: boolean | null;
		MatchingEventTypes?: Array<EventType>;
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		CloudWatchDestination?: CloudWatchDestination;
		SnsDestination?: SnsDestination;
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

	export interface CreateContactPostBody {

		/**
		 * The contact's email address.
		 * Required
		 */
		EmailAddress: string;

		/** The contact's preferences for being opted-in to or opted-out of topics. */
		TopicPreferences?: Array<TopicPreference>;

		/** A boolean value status noting if the contact is unsubscribed from all contact list topics. */
		UnsubscribeAll?: boolean | null;

		/** The attribute data attached to a contact. */
		AttributesData?: string | null;
	}
	export interface CreateContactPostBodyFormProperties {

		/**
		 * The contact's email address.
		 * Required
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/** A boolean value status noting if the contact is unsubscribed from all contact list topics. */
		UnsubscribeAll: FormControl<boolean | null | undefined>,

		/** The attribute data attached to a contact. */
		AttributesData: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactPostBodyFormGroup() {
		return new FormGroup<CreateContactPostBodyFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
			AttributesData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateContactListPostBody {

		/**
		 * The name of the contact list.
		 * Required
		 */
		ContactListName: string;

		/** An interest group, theme, or label within a list. A contact list can have multiple topics. */
		Topics?: Array<Topic>;

		/** A description of what the contact list is about. */
		Description?: string | null;

		/** The tags associated with a contact list. */
		Tags?: Array<Tag>;
	}
	export interface CreateContactListPostBodyFormProperties {

		/**
		 * The name of the contact list.
		 * Required
		 */
		ContactListName: FormControl<string | null | undefined>,

		/** A description of what the contact list is about. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactListPostBodyFormGroup() {
		return new FormGroup<CreateContactListPostBodyFormProperties>({
			ContactListName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCustomVerificationEmailTemplatePostBody {

		/**
		 * The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
		 * Required
		 * Min length: 1
		 */
		TemplateName: string;

		/**
		 * The email address that the custom verification email is sent from.
		 * Required
		 */
		FromEmailAddress: string;

		/**
		 * The subject line of the email.
		 * Required
		 */
		TemplateSubject: string;

		/**
		 * The content of the custom verification email template.
		 * Required
		 */
		TemplateContent: string;

		/**
		 * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
		 * Required
		 */
		SuccessRedirectionURL: string;

		/**
		 * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
		 * Required
		 */
		FailureRedirectionURL: string;
	}
	export interface CreateCustomVerificationEmailTemplatePostBodyFormProperties {

		/**
		 * The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
		 * Required
		 * Min length: 1
		 */
		TemplateName: FormControl<string | null | undefined>,

		/**
		 * The email address that the custom verification email is sent from.
		 * Required
		 */
		FromEmailAddress: FormControl<string | null | undefined>,

		/**
		 * The subject line of the email.
		 * Required
		 */
		TemplateSubject: FormControl<string | null | undefined>,

		/**
		 * The content of the custom verification email template.
		 * Required
		 */
		TemplateContent: FormControl<string | null | undefined>,

		/**
		 * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
		 * Required
		 */
		SuccessRedirectionURL: FormControl<string | null | undefined>,

		/**
		 * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
		 * Required
		 */
		FailureRedirectionURL: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomVerificationEmailTemplatePostBodyFormGroup() {
		return new FormGroup<CreateCustomVerificationEmailTemplatePostBodyFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			FromEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateSubject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SuccessRedirectionURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FailureRedirectionURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** The type of scaling mode. */
		ScalingMode?: ScalingMode | null;
	}
	export interface CreateDedicatedIpPoolPostBodyFormProperties {

		/**
		 * The name of a dedicated IP pool.
		 * Required
		 */
		PoolName: FormControl<string | null | undefined>,

		/** The type of scaling mode. */
		ScalingMode: FormControl<ScalingMode | null | undefined>,
	}
	export function CreateCreateDedicatedIpPoolPostBodyFormGroup() {
		return new FormGroup<CreateDedicatedIpPoolPostBodyFormProperties>({
			PoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingMode: new FormControl<ScalingMode | null | undefined>(undefined),
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
			FromEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDeliverabilityTestReportPostBodyContent {
		Simple?: Message;
		Raw?: RawMessage;
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
		 * The email address or domain to verify.
		 * Required
		 * Min length: 1
		 */
		EmailIdentity: string;

		/** An array of objects that define the tags (keys and values) to associate with the email identity. */
		Tags?: Array<Tag>;

		/** An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM */
		DkimSigningAttributes?: CreateEmailIdentityPostBodyDkimSigningAttributes;

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string | null;
	}
	export interface CreateEmailIdentityPostBodyFormProperties {

		/**
		 * The email address or domain to verify.
		 * Required
		 * Min length: 1
		 */
		EmailIdentity: FormControl<string | null | undefined>,

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailIdentityPostBodyFormGroup() {
		return new FormGroup<CreateEmailIdentityPostBodyFormProperties>({
			EmailIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEmailIdentityPostBodyDkimSigningAttributes {
		DomainSigningSelector?: string;
		DomainSigningPrivateKey?: string;
		NextSigningKeyLength?: DkimSigningKeyLength;
	}
	export interface CreateEmailIdentityPostBodyDkimSigningAttributesFormProperties {
		DomainSigningSelector: FormControl<string | null | undefined>,
		DomainSigningPrivateKey: FormControl<string | null | undefined>,
		NextSigningKeyLength: FormControl<DkimSigningKeyLength | null | undefined>,
	}
	export function CreateCreateEmailIdentityPostBodyDkimSigningAttributesFormGroup() {
		return new FormGroup<CreateEmailIdentityPostBodyDkimSigningAttributesFormProperties>({
			DomainSigningSelector: new FormControl<string | null | undefined>(undefined),
			DomainSigningPrivateKey: new FormControl<string | null | undefined>(undefined),
			NextSigningKeyLength: new FormControl<DkimSigningKeyLength | null | undefined>(undefined),
		});

	}

	export interface CreateEmailIdentityPolicyPostBody {

		/**
		 * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 * Min length: 1
		 */
		Policy: string;
	}
	export interface CreateEmailIdentityPolicyPostBodyFormProperties {

		/**
		 * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailIdentityPolicyPostBodyFormGroup() {
		return new FormGroup<CreateEmailIdentityPolicyPostBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface UpdateEmailIdentityPolicyPutBody {

		/**
		 * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 * Min length: 1
		 */
		Policy: string;
	}
	export interface UpdateEmailIdentityPolicyPutBodyFormProperties {

		/**
		 * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p> <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
		 * Required
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEmailIdentityPolicyPutBodyFormGroup() {
		return new FormGroup<UpdateEmailIdentityPolicyPutBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CreateEmailTemplatePostBody {

		/**
		 * The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
		 * Required
		 * Min length: 1
		 */
		TemplateName: string;

		/**
		 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
		 * Required
		 */
		TemplateContent: CreateEmailTemplatePostBodyTemplateContent;
	}
	export interface CreateEmailTemplatePostBodyFormProperties {

		/**
		 * The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
		 * Required
		 * Min length: 1
		 */
		TemplateName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailTemplatePostBodyFormGroup() {
		return new FormGroup<CreateEmailTemplatePostBodyFormProperties>({
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CreateEmailTemplatePostBodyTemplateContent {
		Subject?: string;
		Text?: string;
		Html?: string;
	}
	export interface CreateEmailTemplatePostBodyTemplateContentFormProperties {
		Subject: FormControl<string | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Html: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailTemplatePostBodyTemplateContentFormGroup() {
		return new FormGroup<CreateEmailTemplatePostBodyTemplateContentFormProperties>({
			Subject: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Html: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateImportJobPostBody {

		/**
		 * An object that contains details about the resource destination the import job is going to target.
		 * Required
		 */
		ImportDestination: CreateImportJobPostBodyImportDestination;

		/**
		 * An object that contains details about the data source of the import job.
		 * Required
		 */
		ImportDataSource: CreateImportJobPostBodyImportDataSource;
	}
	export interface CreateImportJobPostBodyFormProperties {
	}
	export function CreateCreateImportJobPostBodyFormGroup() {
		return new FormGroup<CreateImportJobPostBodyFormProperties>({
		});

	}

	export interface CreateImportJobPostBodyImportDestination {
		SuppressionListDestination?: SuppressionListDestination;
		ContactListDestination?: ContactListDestination;
	}
	export interface CreateImportJobPostBodyImportDestinationFormProperties {
	}
	export function CreateCreateImportJobPostBodyImportDestinationFormGroup() {
		return new FormGroup<CreateImportJobPostBodyImportDestinationFormProperties>({
		});

	}

	export interface CreateImportJobPostBodyImportDataSource {
		S3Url?: string;
		DataFormat?: DataFormat;
	}
	export interface CreateImportJobPostBodyImportDataSourceFormProperties {
		S3Url: FormControl<string | null | undefined>,
		DataFormat: FormControl<DataFormat | null | undefined>,
	}
	export function CreateCreateImportJobPostBodyImportDataSourceFormGroup() {
		return new FormGroup<CreateImportJobPostBodyImportDataSourceFormProperties>({
			S3Url: new FormControl<string | null | undefined>(undefined),
			DataFormat: new FormControl<DataFormat | null | undefined>(undefined),
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
		KinesisFirehoseDestination?: KinesisFirehoseDestination;
		CloudWatchDestination?: CloudWatchDestination;
		SnsDestination?: SnsDestination;
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

	export interface UpdateContactPutBody {

		/** The contact's preference for being opted-in to or opted-out of a topic. */
		TopicPreferences?: Array<TopicPreference>;

		/** A boolean value status noting if the contact is unsubscribed from all contact list topics. */
		UnsubscribeAll?: boolean | null;

		/** The attribute data attached to a contact. */
		AttributesData?: string | null;
	}
	export interface UpdateContactPutBodyFormProperties {

		/** A boolean value status noting if the contact is unsubscribed from all contact list topics. */
		UnsubscribeAll: FormControl<boolean | null | undefined>,

		/** The attribute data attached to a contact. */
		AttributesData: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactPutBodyFormGroup() {
		return new FormGroup<UpdateContactPutBodyFormProperties>({
			UnsubscribeAll: new FormControl<boolean | null | undefined>(undefined),
			AttributesData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateContactListPutBody {

		/** An interest group, theme, or label within a list. A contact list can have multiple topics. */
		Topics?: Array<Topic>;

		/** A description of what the contact list is about. */
		Description?: string | null;
	}
	export interface UpdateContactListPutBodyFormProperties {

		/** A description of what the contact list is about. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactListPutBodyFormGroup() {
		return new FormGroup<UpdateContactListPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCustomVerificationEmailTemplatePutBody {

		/**
		 * The email address that the custom verification email is sent from.
		 * Required
		 */
		FromEmailAddress: string;

		/**
		 * The subject line of the email.
		 * Required
		 */
		TemplateSubject: string;

		/**
		 * The content of the custom verification email template.
		 * Required
		 */
		TemplateContent: string;

		/**
		 * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
		 * Required
		 */
		SuccessRedirectionURL: string;

		/**
		 * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
		 * Required
		 */
		FailureRedirectionURL: string;
	}
	export interface UpdateCustomVerificationEmailTemplatePutBodyFormProperties {

		/**
		 * The email address that the custom verification email is sent from.
		 * Required
		 */
		FromEmailAddress: FormControl<string | null | undefined>,

		/**
		 * The subject line of the email.
		 * Required
		 */
		TemplateSubject: FormControl<string | null | undefined>,

		/**
		 * The content of the custom verification email template.
		 * Required
		 */
		TemplateContent: FormControl<string | null | undefined>,

		/**
		 * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
		 * Required
		 */
		SuccessRedirectionURL: FormControl<string | null | undefined>,

		/**
		 * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
		 * Required
		 */
		FailureRedirectionURL: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomVerificationEmailTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateCustomVerificationEmailTemplatePutBodyFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateSubject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SuccessRedirectionURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FailureRedirectionURL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEmailTemplatePutBody {

		/**
		 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
		 * Required
		 */
		TemplateContent: UpdateEmailTemplatePutBodyTemplateContent;
	}
	export interface UpdateEmailTemplatePutBodyFormProperties {
	}
	export function CreateUpdateEmailTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateEmailTemplatePutBodyFormProperties>({
		});

	}

	export interface UpdateEmailTemplatePutBodyTemplateContent {
		Subject?: string;
		Text?: string;
		Html?: string;
	}
	export interface UpdateEmailTemplatePutBodyTemplateContentFormProperties {
		Subject: FormControl<string | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Html: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEmailTemplatePutBodyTemplateContentFormGroup() {
		return new FormGroup<UpdateEmailTemplatePutBodyTemplateContentFormProperties>({
			Subject: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Html: new FormControl<string | null | undefined>(undefined),
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
			DashboardEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRecommendationsPostBody {

		/** An object that contains mapping between <code>ListRecommendationsFilterKey</code> and <code>ListRecommendationFilterValue</code> to filter by. */
		Filter?: {[id: string]: string };

		/** A token returned from a previous call to <code>ListRecommendations</code> to indicate the position in the list of recommendations. */
		NextToken?: string | null;

		/** <p>The number of results to show in a single call to <code>ListRecommendations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 100.</p> */
		PageSize?: number | null;
	}
	export interface ListRecommendationsPostBodyFormProperties {

		/** An object that contains mapping between <code>ListRecommendationsFilterKey</code> and <code>ListRecommendationFilterValue</code> to filter by. */
		Filter: FormControl<{[id: string]: string } | null | undefined>,

		/** A token returned from a previous call to <code>ListRecommendations</code> to indicate the position in the list of recommendations. */
		NextToken: FormControl<string | null | undefined>,

		/** <p>The number of results to show in a single call to <code>ListRecommendations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.</p> <p>The value you specify has to be at least 1, and can be no more than 100.</p> */
		PageSize: FormControl<number | null | undefined>,
	}
	export function CreateListRecommendationsPostBodyFormGroup() {
		return new FormGroup<ListRecommendationsPostBodyFormProperties>({
			Filter: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
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
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<SuppressionListReason | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutAccountDedicatedIpWarmupAttributesPutBody {

		/** Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon SES account in the current Amazon Web Services Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it. */
		AutoWarmupEnabled?: boolean | null;
	}
	export interface PutAccountDedicatedIpWarmupAttributesPutBodyFormProperties {

		/** Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon SES account in the current Amazon Web Services Region. Set to <code>true</code> to enable the automatic warm-up feature, or set to <code>false</code> to disable it. */
		AutoWarmupEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountDedicatedIpWarmupAttributesPutBodyFormGroup() {
		return new FormGroup<PutAccountDedicatedIpWarmupAttributesPutBodyFormProperties>({
			AutoWarmupEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutAccountDetailsPostBody {

		/**
		 * The type of email your account will send.
		 * Required
		 */
		MailType: MailType;

		/**
		 * The URL of your website. This information helps us better understand the type of content that you plan to send.
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		WebsiteURL: string;

		/** The language you would prefer to be contacted with. */
		ContactLanguage?: ContactLanguage | null;

		/**
		 * A description of the types of email that you plan to send.
		 * Required
		 * Max length: 5000
		 * Min length: 1
		 */
		UseCaseDescription: string;

		/**
		 * Additional email addresses that you would like to be notified regarding Amazon SES matters.
		 * Minimum items: 1
		 * Maximum items: 4
		 */
		AdditionalContactEmailAddresses?: Array<string>;

		/** <p>Indicates whether or not your account should have production access in the current Amazon Web Services Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p> */
		ProductionAccessEnabled?: boolean | null;
	}
	export interface PutAccountDetailsPostBodyFormProperties {

		/**
		 * The type of email your account will send.
		 * Required
		 */
		MailType: FormControl<MailType | null | undefined>,

		/**
		 * The URL of your website. This information helps us better understand the type of content that you plan to send.
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		WebsiteURL: FormControl<string | null | undefined>,

		/** The language you would prefer to be contacted with. */
		ContactLanguage: FormControl<ContactLanguage | null | undefined>,

		/**
		 * A description of the types of email that you plan to send.
		 * Required
		 * Max length: 5000
		 * Min length: 1
		 */
		UseCaseDescription: FormControl<string | null | undefined>,

		/** <p>Indicates whether or not your account should have production access in the current Amazon Web Services Region.</p> <p>If the value is <code>false</code>, then your account is in the <i>sandbox</i>. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.</p> <p>If the value is <code>true</code>, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.</p> */
		ProductionAccessEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutAccountDetailsPostBodyFormGroup() {
		return new FormGroup<PutAccountDetailsPostBodyFormProperties>({
			MailType: new FormControl<MailType | null | undefined>(undefined, [Validators.required]),
			WebsiteURL: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?')]),
			ContactLanguage: new FormControl<ContactLanguage | null | undefined>(undefined),
			UseCaseDescription: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(5000)]),
			ProductionAccessEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutAccountSendingAttributesPutBody {

		/** <p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If Amazon Web Services paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note> */
		SendingEnabled?: boolean | null;
	}
	export interface PutAccountSendingAttributesPutBodyFormProperties {

		/** <p>Enables or disables your account's ability to send email. Set to <code>true</code> to enable email sending, or set to <code>false</code> to disable email sending.</p> <note> <p>If Amazon Web Services paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.</p> </note> */
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

	export interface PutAccountVdmAttributesPutBody {

		/**
		 * The VDM attributes that apply to your Amazon SES account.
		 * Required
		 */
		VdmAttributes: PutAccountVdmAttributesPutBodyVdmAttributes;
	}
	export interface PutAccountVdmAttributesPutBodyFormProperties {
	}
	export function CreatePutAccountVdmAttributesPutBodyFormGroup() {
		return new FormGroup<PutAccountVdmAttributesPutBodyFormProperties>({
		});

	}

	export interface PutAccountVdmAttributesPutBodyVdmAttributes {
		VdmEnabled?: FeatureStatus;
		DashboardAttributes?: DashboardAttributes;
		GuardianAttributes?: GuardianAttributes;
	}
	export interface PutAccountVdmAttributesPutBodyVdmAttributesFormProperties {
		VdmEnabled: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreatePutAccountVdmAttributesPutBodyVdmAttributesFormGroup() {
		return new FormGroup<PutAccountVdmAttributesPutBodyVdmAttributesFormProperties>({
			VdmEnabled: new FormControl<FeatureStatus | null | undefined>(undefined),
		});

	}

	export interface PutConfigurationSetDeliveryOptionsPutBody {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy?: TlsPolicy | null;

		/** The name of the dedicated IP pool to associate with the configuration set. */
		SendingPoolName?: string | null;
	}
	export interface PutConfigurationSetDeliveryOptionsPutBodyFormProperties {

		/** Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established. */
		TlsPolicy: FormControl<TlsPolicy | null | undefined>,

		/** The name of the dedicated IP pool to associate with the configuration set. */
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

		/** The domain to use for tracking open and click events. */
		CustomRedirectDomain?: string | null;
	}
	export interface PutConfigurationSetTrackingOptionsPutBodyFormProperties {

		/** The domain to use for tracking open and click events. */
		CustomRedirectDomain: FormControl<string | null | undefined>,
	}
	export function CreatePutConfigurationSetTrackingOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetTrackingOptionsPutBodyFormProperties>({
			CustomRedirectDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutConfigurationSetVdmOptionsPutBody {

		/** An object that defines the VDM settings that apply to emails that you send using the configuration set. */
		VdmOptions?: PutConfigurationSetVdmOptionsPutBodyVdmOptions;
	}
	export interface PutConfigurationSetVdmOptionsPutBodyFormProperties {
	}
	export function CreatePutConfigurationSetVdmOptionsPutBodyFormGroup() {
		return new FormGroup<PutConfigurationSetVdmOptionsPutBodyFormProperties>({
		});

	}

	export interface PutConfigurationSetVdmOptionsPutBodyVdmOptions {
		DashboardOptions?: DashboardOptions;
		GuardianOptions?: GuardianOptions;
	}
	export interface PutConfigurationSetVdmOptionsPutBodyVdmOptionsFormProperties {
	}
	export function CreatePutConfigurationSetVdmOptionsPutBodyVdmOptionsFormGroup() {
		return new FormGroup<PutConfigurationSetVdmOptionsPutBodyVdmOptionsFormProperties>({
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
			DestinationPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutDedicatedIpPoolScalingAttributesPutBody {

		/**
		 * <p>The scaling mode to apply to the dedicated IP pool.</p> <note> <p>Changing the scaling mode from <code>MANAGED</code> to <code>STANDARD</code> is not supported.</p> </note>
		 * Required
		 */
		ScalingMode: ScalingMode;
	}
	export interface PutDedicatedIpPoolScalingAttributesPutBodyFormProperties {

		/**
		 * <p>The scaling mode to apply to the dedicated IP pool.</p> <note> <p>Changing the scaling mode from <code>MANAGED</code> to <code>STANDARD</code> is not supported.</p> </note>
		 * Required
		 */
		ScalingMode: FormControl<ScalingMode | null | undefined>,
	}
	export function CreatePutDedicatedIpPoolScalingAttributesPutBodyFormGroup() {
		return new FormGroup<PutDedicatedIpPoolScalingAttributesPutBodyFormProperties>({
			ScalingMode: new FormControl<ScalingMode | null | undefined>(undefined, [Validators.required]),
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
			WarmupPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutEmailIdentityConfigurationSetAttributesPutBody {

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string | null;
	}
	export interface PutEmailIdentityConfigurationSetAttributesPutBodyFormProperties {

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreatePutEmailIdentityConfigurationSetAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityConfigurationSetAttributesPutBodyFormProperties>({
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
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
		 * <p>The method to use to configure DKIM for the identity. There are the following possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>
		 * Required
		 */
		SigningAttributesOrigin: DkimSigningAttributesOrigin;

		/** An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM */
		SigningAttributes?: PutEmailIdentityDkimSigningAttributesPutBodySigningAttributes;
	}
	export interface PutEmailIdentityDkimSigningAttributesPutBodyFormProperties {

		/**
		 * <p>The method to use to configure DKIM for the identity. There are the following possible values:</p> <ul> <li> <p> <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p> </li> <li> <p> <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).</p> </li> </ul>
		 * Required
		 */
		SigningAttributesOrigin: FormControl<DkimSigningAttributesOrigin | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimSigningAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityDkimSigningAttributesPutBodyFormProperties>({
			SigningAttributesOrigin: new FormControl<DkimSigningAttributesOrigin | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutEmailIdentityDkimSigningAttributesPutBodySigningAttributes {
		DomainSigningSelector?: string;
		DomainSigningPrivateKey?: string;
		NextSigningKeyLength?: DkimSigningKeyLength;
	}
	export interface PutEmailIdentityDkimSigningAttributesPutBodySigningAttributesFormProperties {
		DomainSigningSelector: FormControl<string | null | undefined>,
		DomainSigningPrivateKey: FormControl<string | null | undefined>,
		NextSigningKeyLength: FormControl<DkimSigningKeyLength | null | undefined>,
	}
	export function CreatePutEmailIdentityDkimSigningAttributesPutBodySigningAttributesFormGroup() {
		return new FormGroup<PutEmailIdentityDkimSigningAttributesPutBodySigningAttributesFormProperties>({
			DomainSigningSelector: new FormControl<string | null | undefined>(undefined),
			DomainSigningPrivateKey: new FormControl<string | null | undefined>(undefined),
			NextSigningKeyLength: new FormControl<DkimSigningKeyLength | null | undefined>(undefined),
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

		/** The domain to use as a MAIL FROM domain. */
		MailFromDomain?: string | null;

		/** <p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure?: BehaviorOnMxFailure | null;
	}
	export interface PutEmailIdentityMailFromAttributesPutBodyFormProperties {

		/** The domain to use as a MAIL FROM domain. */
		MailFromDomain: FormControl<string | null | undefined>,

		/** <p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p> */
		BehaviorOnMxFailure: FormControl<BehaviorOnMxFailure | null | undefined>,
	}
	export function CreatePutEmailIdentityMailFromAttributesPutBodyFormGroup() {
		return new FormGroup<PutEmailIdentityMailFromAttributesPutBodyFormProperties>({
			MailFromDomain: new FormControl<string | null | undefined>(undefined),
			BehaviorOnMxFailure: new FormControl<BehaviorOnMxFailure | null | undefined>(undefined),
		});

	}

	export interface SendBulkEmailPostBody {

		/** The email address to use as the "From" address for the email. The address that you specify has to be verified. */
		FromEmailAddress?: string | null;

		/** <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> */
		FromEmailAddressIdentityArn?: string | null;

		/** The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply. */
		ReplyToAddresses?: Array<string>;

		/** The address that you want bounce and complaint notifications to be sent to. */
		FeedbackForwardingEmailAddress?: string | null;

		/** <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> */
		FeedbackForwardingEmailAddressIdentityArn?: string | null;

		/** A list of message tags. */
		DefaultEmailTags?: Array<MessageTag>;

		/**
		 * An object that contains the body of the message. You can specify a template message.
		 * Required
		 */
		DefaultContent: SendBulkEmailPostBodyDefaultContent;

		/**
		 * A list of <code>BulkEmailEntry</code> objects.
		 * Required
		 */
		BulkEmailEntries: Array<BulkEmailEntry>;

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string | null;
	}
	export interface SendBulkEmailPostBodyFormProperties {

		/** The email address to use as the "From" address for the email. The address that you specify has to be verified. */
		FromEmailAddress: FormControl<string | null | undefined>,

		/** <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> */
		FromEmailAddressIdentityArn: FormControl<string | null | undefined>,

		/** The address that you want bounce and complaint notifications to be sent to. */
		FeedbackForwardingEmailAddress: FormControl<string | null | undefined>,

		/** <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> */
		FeedbackForwardingEmailAddressIdentityArn: FormControl<string | null | undefined>,

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendBulkEmailPostBodyFormGroup() {
		return new FormGroup<SendBulkEmailPostBodyFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			FromEmailAddressIdentityArn: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddress: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddressIdentityArn: new FormControl<string | null | undefined>(undefined),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendBulkEmailPostBodyDefaultContent {
		Template?: Template;
	}
	export interface SendBulkEmailPostBodyDefaultContentFormProperties {
	}
	export function CreateSendBulkEmailPostBodyDefaultContentFormGroup() {
		return new FormGroup<SendBulkEmailPostBodyDefaultContentFormProperties>({
		});

	}

	export interface SendCustomVerificationEmailPostBody {

		/**
		 * The email address to verify.
		 * Required
		 */
		EmailAddress: string;

		/**
		 * The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
		 * Required
		 * Min length: 1
		 */
		TemplateName: string;

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string | null;
	}
	export interface SendCustomVerificationEmailPostBodyFormProperties {

		/**
		 * The email address to verify.
		 * Required
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * The name of the template. You will refer to this name when you send email using the <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
		 * Required
		 * Min length: 1
		 */
		TemplateName: FormControl<string | null | undefined>,

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendCustomVerificationEmailPostBodyFormGroup() {
		return new FormGroup<SendCustomVerificationEmailPostBodyFormProperties>({
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			ConfigurationSetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendEmailPostBody {

		/** The email address to use as the "From" address for the email. The address that you specify has to be verified. */
		FromEmailAddress?: string | null;

		/** <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>For Raw emails, the <code>FromEmailAddressIdentityArn</code> value overrides the X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message content.</p> */
		FromEmailAddressIdentityArn?: string | null;

		/** <p>An object that describes the recipients for an email.</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a destination email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p> </note> */
		Destination?: SendEmailPostBodyDestination;

		/** The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply. */
		ReplyToAddresses?: Array<string>;

		/** The address that you want bounce and complaint notifications to be sent to. */
		FeedbackForwardingEmailAddress?: string | null;

		/** <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> */
		FeedbackForwardingEmailAddressIdentityArn?: string | null;

		/**
		 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
		 * Required
		 */
		Content: SendEmailPostBodyContent;

		/** A list of message tags. */
		EmailTags?: Array<MessageTag>;

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName?: string | null;

		/** An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe. */
		ListManagementOptions?: SendEmailPostBodyListManagementOptions;
	}
	export interface SendEmailPostBodyFormProperties {

		/** The email address to use as the "From" address for the email. The address that you specify has to be verified. */
		FromEmailAddress: FormControl<string | null | undefined>,

		/** <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FromEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use sender@example.com, then you would specify the <code>FromEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FromEmailAddress</code> to be sender@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> <p>For Raw emails, the <code>FromEmailAddressIdentityArn</code> value overrides the X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message content.</p> */
		FromEmailAddressIdentityArn: FormControl<string | null | undefined>,

		/** The address that you want bounce and complaint notifications to be sent to. */
		FeedbackForwardingEmailAddress: FormControl<string | null | undefined>,

		/** <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>FeedbackForwardingEmailAddress</code> parameter.</p> <p>For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the <code>FeedbackForwardingEmailAddressIdentityArn</code> to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p> <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p> */
		FeedbackForwardingEmailAddressIdentityArn: FormControl<string | null | undefined>,

		/** <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p> */
		ConfigurationSetName: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailPostBodyFormGroup() {
		return new FormGroup<SendEmailPostBodyFormProperties>({
			FromEmailAddress: new FormControl<string | null | undefined>(undefined),
			FromEmailAddressIdentityArn: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddress: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingEmailAddressIdentityArn: new FormControl<string | null | undefined>(undefined),
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
		Simple?: Message;
		Raw?: RawMessage;
		Template?: Template;
	}
	export interface SendEmailPostBodyContentFormProperties {
	}
	export function CreateSendEmailPostBodyContentFormGroup() {
		return new FormGroup<SendEmailPostBodyContentFormProperties>({
		});

	}

	export interface SendEmailPostBodyListManagementOptions {
		ContactListName?: string;
		TopicName?: string;
	}
	export interface SendEmailPostBodyListManagementOptionsFormProperties {
		ContactListName: FormControl<string | null | undefined>,
		TopicName: FormControl<string | null | undefined>,
	}
	export function CreateSendEmailPostBodyListManagementOptionsFormGroup() {
		return new FormGroup<SendEmailPostBodyListManagementOptionsFormProperties>({
			ContactListName: new FormControl<string | null | undefined>(undefined),
			TopicName: new FormControl<string | null | undefined>(undefined),
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
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestRenderEmailTemplatePostBody {

		/**
		 * An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.
		 * Required
		 * Max length: 262144
		 */
		TemplateData: string;
	}
	export interface TestRenderEmailTemplatePostBodyFormProperties {

		/**
		 * An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.
		 * Required
		 * Max length: 262144
		 */
		TemplateData: FormControl<string | null | undefined>,
	}
	export function CreateTestRenderEmailTemplatePostBodyFormGroup() {
		return new FormGroup<TestRenderEmailTemplatePostBodyFormProperties>({
			TemplateData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(262144)]),
		});

	}

}

