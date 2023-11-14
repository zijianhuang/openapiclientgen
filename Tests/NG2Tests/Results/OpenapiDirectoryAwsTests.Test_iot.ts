import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ResourceNotFoundException {
	}

	export interface TransferAlreadyCompletedException {
	}

	export interface InvalidRequestException {
	}

	export interface ThrottlingException {
	}

	export interface UnauthorizedException {
	}

	export interface ServiceUnavailableException {
	}

	export interface InternalFailureException {
	}

	export interface AddThingToBillingGroupResponse {
	}

	export interface AddThingToThingGroupResponse {
	}

	export interface AssociateTargetsWithJobResponse {
		jobArn?: string | null;
		jobId?: string | null;
		description?: string | null;
	}

	export interface LimitExceededException {
	}

	export interface AttachSecurityProfileResponse {
	}

	export interface VersionConflictException {
	}


	/** The output from the AttachThingPrincipal operation. */
	export interface AttachThingPrincipalResponse {
	}

	export interface CancelAuditMitigationActionsTaskResponse {
	}

	export interface CancelAuditTaskResponse {
	}

	export interface CancelJobResponse {
		jobArn?: string | null;
		jobId?: string | null;
		description?: string | null;
	}

	export interface InvalidStateTransitionException {
	}

	export interface ClearDefaultAuthorizerResponse {
	}

	export interface ConfirmTopicRuleDestinationResponse {
	}

	export interface InternalException {
	}

	export interface ConflictingResourceUpdateException {
	}

	export interface CreateAuthorizerResponse {
		authorizerName?: string | null;
		authorizerArn?: string | null;
	}


	/** A set of key/value pairs that are used to manage the resource. */
	export interface Tag {
		Key: string;
		Value?: string | null;
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface CreateBillingGroupResponse {
		billingGroupName?: string | null;
		billingGroupArn?: string | null;
		billingGroupId?: string | null;
	}


	/** The output from the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrResponse {
		certificateArn?: string | null;
		certificateId?: string | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;
	}

	export interface CreateDimensionResponse {
		name?: string | null;
		arn?: string | null;
	}

	export interface CreateDomainConfigurationResponse {
		domainConfigurationName?: string | null;
		domainConfigurationArn?: string | null;
	}

	export interface CertificateValidationException {
	}

	export interface CreateDynamicThingGroupResponse {
		thingGroupName?: string | null;
		thingGroupArn?: string | null;
		thingGroupId?: string | null;
		indexName?: string | null;
		queryString?: string | null;
		queryVersion?: string | null;
	}


	/** The attribute payload. */
	export interface AttributePayload {
		attributes?: Attributes | null;
		merge?: boolean | null;
	}

	export interface Attributes {
	}

	export interface InvalidQueryException {
	}

	export interface CreateJobResponse {
		jobArn?: string | null;
		jobId?: string | null;
		description?: string | null;
	}


	/** Allows you to create an exponential rate of rollout for a job. */
	export interface ExponentialRolloutRate {
		baseRatePerMinute: number;
		incrementFactor: number;

		/**
		 * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
		 * Required
		 */
		rateIncreaseCriteria: RateIncreaseCriteria;
	}


	/** Allows you to define a criteria to initiate the increase in rate of rollout for a job. */
	export interface RateIncreaseCriteria {
		numberOfNotifiedThings?: number | null;
		numberOfSucceededThings?: number | null;
	}


	/** Details of abort criteria to define rules to abort the job. */
	export interface AbortCriteria {
		failureType: AbortCriteriaFailureType;
		action: AbortCriteriaAction;
		thresholdPercentage: number;
		minNumberOfExecutedThings: number;
	}

	export enum AbortCriteriaFailureType { FAILED = 0, REJECTED = 1, TIMED_OUT = 2, ALL = 3 }

	export enum AbortCriteriaAction { CANCEL = 0 }


	/** The output of the CreateKeysAndCertificate operation. */
	export interface CreateKeysAndCertificateResponse {
		certificateArn?: string | null;
		certificateId?: string | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;

		/** Describes a key pair. */
		keyPair?: KeyPair | null;
	}


	/** Describes a key pair. */
	export interface KeyPair {
		PublicKey?: string | null;
		PrivateKey?: string | null;
	}

	export interface CreateMitigationActionResponse {
		actionArn?: string | null;
		actionId?: string | null;
	}


	/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
	export interface UpdateDeviceCertificateParams {
		action: UpdateDeviceCertificateParamsAction;
	}

	export enum UpdateDeviceCertificateParamsAction { DEACTIVATE = 0 }


	/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
	export interface UpdateCACertificateParams {
		action: UpdateDeviceCertificateParamsAction;
	}


	/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
	export interface AddThingsToThingGroupParams {
		thingGroupNames: Array<string>;
		overrideDynamicGroups?: boolean | null;
	}


	/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
	export interface ReplaceDefaultPolicyVersionParams {
		templateName: ReplaceDefaultPolicyVersionParamsTemplateName;
	}

	export enum ReplaceDefaultPolicyVersionParamsTemplateName { BLANK_POLICY = 0 }


	/** Parameters used when defining a mitigation action that enable AWS IoT logging. */
	export interface EnableIoTLoggingParams {
		roleArnForLogging: string;
		logLevel: EnableIoTLoggingParamsLogLevel;
	}

	export enum EnableIoTLoggingParamsLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }


	/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
	export interface PublishFindingToSnsParams {
		topicArn: string;
	}

	export interface CreateOTAUpdateResponse {
		otaUpdateId?: string | null;
		awsIotJobId?: string | null;
		otaUpdateArn?: string | null;
		awsIotJobArn?: string | null;
		otaUpdateStatus?: CreateOTAUpdateResponseOtaUpdateStatus | null;
	}

	export enum CreateOTAUpdateResponseOtaUpdateStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, CREATE_FAILED = 3 }

	export enum Protocol { MQTT = 0, HTTP = 1 }


	/** Describes a file to be associated with an OTA update. */
	export interface OTAUpdateFile {
		fileName?: string | null;
		fileVersion?: string | null;

		/** The location of the OTA update. */
		fileLocation?: FileLocation | null;

		/** Describes the method to use when code signing a file. */
		codeSigning?: CodeSigning | null;
		attributes?: AttributesMap | null;
	}


	/** The location of the OTA update. */
	export interface FileLocation {

		/** Describes a group of files that can be streamed. */
		stream?: Stream | null;

		/** The S3 location. */
		s3Location?: S3Location | null;
	}


	/** Describes a group of files that can be streamed. */
	export interface Stream {
		streamId?: string | null;
		fileId?: number | null;
	}


	/** The S3 location. */
	export interface S3Location {
		bucket?: string | null;
		key?: string | null;
		version?: string | null;
	}


	/** Describes the method to use when code signing a file. */
	export interface CodeSigning {
		awsSignerJobId?: string | null;

		/** Information required to start a signing job. */
		startSigningJobParameter?: StartSigningJobParameter | null;

		/** Describes a custom method used to code sign a file. */
		customCodeSigning?: CustomCodeSigning | null;
	}


	/** Information required to start a signing job. */
	export interface StartSigningJobParameter {

		/** Describes the code-signing profile. */
		signingProfileParameter?: SigningProfileParameter | null;
		signingProfileName?: string | null;

		/** Describes the location of the updated firmware. */
		destination?: Destination | null;
	}


	/** Describes the code-signing profile. */
	export interface SigningProfileParameter {
		certificateArn?: string | null;
		platform?: string | null;
		certificatePathOnDevice?: string | null;
	}


	/** Describes the location of the updated firmware. */
	export interface Destination {

		/** Describes the location of updated firmware in S3. */
		s3Destination?: S3Destination | null;
	}


	/** Describes the location of updated firmware in S3. */
	export interface S3Destination {
		bucket?: string | null;
		prefix?: string | null;
	}


	/** Describes a custom method used to code sign a file. */
	export interface CustomCodeSigning {

		/** Describes the signature for a file. */
		signature?: CodeSigningSignature | null;

		/** Describes the certificate chain being used when code signing a file. */
		certificateChain?: CodeSigningCertificateChain | null;
		hashAlgorithm?: string | null;
		signatureAlgorithm?: string | null;
	}


	/** Describes the signature for a file. */
	export interface CodeSigningSignature {
		inlineDocument?: string | null;
	}


	/** Describes the certificate chain being used when code signing a file. */
	export interface CodeSigningCertificateChain {
		certificateName?: string | null;
		inlineDocument?: string | null;
	}

	export interface AttributesMap {
	}


	/** The output from the CreatePolicy operation. */
	export interface CreatePolicyResponse {
		policyName?: string | null;
		policyArn?: string | null;
		policyDocument?: string | null;
		policyVersionId?: string | null;
	}

	export interface MalformedPolicyException {
	}


	/** The output of the CreatePolicyVersion operation. */
	export interface CreatePolicyVersionResponse {
		policyArn?: string | null;
		policyDocument?: string | null;
		policyVersionId?: string | null;
		isDefaultVersion?: boolean | null;
	}

	export interface VersionsLimitExceededException {
	}

	export interface CreateProvisioningClaimResponse {
		certificateId?: string | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;

		/** Describes a key pair. */
		keyPair?: KeyPair | null;
		expiration?: Date | null;
	}

	export interface CreateProvisioningTemplateResponse {
		templateArn?: string | null;
		templateName?: string | null;
		defaultVersionId?: number | null;
	}

	export interface CreateProvisioningTemplateVersionResponse {
		templateArn?: string | null;
		templateName?: string | null;
		versionId?: number | null;
		isDefaultVersion?: boolean | null;
	}

	export interface CreateRoleAliasResponse {
		roleAlias?: string | null;
		roleAliasArn?: string | null;
	}

	export interface CreateScheduledAuditResponse {
		scheduledAuditArn?: string | null;
	}

	export interface CreateSecurityProfileResponse {
		securityProfileName?: string | null;
		securityProfileArn?: string | null;
	}


	/** A Device Defender security profile behavior. */
	export interface Behavior {
		name: string;
		metric?: string | null;

		/** The dimension of a metric. */
		metricDimension?: MetricDimension | null;

		/** The criteria by which the behavior is determined to be normal. */
		criteria?: BehaviorCriteria | null;
	}


	/** The dimension of a metric. */
	export interface MetricDimension {
		dimensionName: string;
		operator?: MetricDimensionOperator | null;
	}

	export enum MetricDimensionOperator { IN = 0, NOT_IN = 1 }


	/** The criteria by which the behavior is determined to be normal. */
	export interface BehaviorCriteria {
		comparisonOperator?: BehaviorCriteriaComparisonOperator | null;

		/** The value to be compared with the <code>metric</code>. */
		value?: MetricValue | null;
		durationSeconds?: number | null;
		consecutiveDatapointsToAlarm?: number | null;
		consecutiveDatapointsToClear?: number | null;

		/** A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. */
		statisticalThreshold?: StatisticalThreshold | null;
	}

	export enum BehaviorCriteriaComparisonOperator { less_than = 0, less_than_equals = 1, greater_than = 2, greater_than_equals = 3, in_cidr_set = 4, not_in_cidr_set = 5, in_port_set = 6, not_in_port_set = 7 }


	/** The value to be compared with the <code>metric</code>. */
	export interface MetricValue {
		count?: number | null;
		cidrs?: Array<string> | null;
		ports?: Array<number> | null;
	}


	/** A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. */
	export interface StatisticalThreshold {
		statistic?: string | null;
	}


	/** A structure containing the alert target ARN and the role ARN. */
	export interface AlertTarget {
		alertTargetArn: string;
		roleArn: string;
	}


	/** The metric you want to retain. Dimensions are optional. */
	export interface MetricToRetain {
		metric: string;

		/** The dimension of a metric. */
		metricDimension?: MetricDimension | null;
	}

	export interface CreateStreamResponse {
		streamId?: string | null;
		streamArn?: string | null;
		description?: string | null;
		streamVersion?: number | null;
	}


	/** Represents a file to stream. */
	export interface StreamFile {
		fileId?: number | null;

		/** The S3 location. */
		s3Location?: S3Location | null;
	}


	/** The output of the CreateThing operation. */
	export interface CreateThingResponse {
		thingName?: string | null;
		thingArn?: string | null;
		thingId?: string | null;
	}

	export interface CreateThingGroupResponse {
		thingGroupName?: string | null;
		thingGroupArn?: string | null;
		thingGroupId?: string | null;
	}


	/** The output of the CreateThingType operation. */
	export interface CreateThingTypeResponse {
		thingTypeName?: string | null;
		thingTypeArn?: string | null;
		thingTypeId?: string | null;
	}


	/** Describes the actions associated with a rule. */
	export interface Action {

		/** <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p> */
		dynamoDB?: DynamoDBAction | null;

		/** <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p> */
		dynamoDBv2?: DynamoDBv2Action | null;

		/** Describes an action to invoke a Lambda function. */
		lambda?: LambdaAction | null;

		/** Describes an action to publish to an Amazon SNS topic. */
		sns?: SnsAction | null;

		/** Describes an action to publish data to an Amazon SQS queue. */
		sqs?: SqsAction | null;

		/** Describes an action to write data to an Amazon Kinesis stream. */
		kinesis?: KinesisAction | null;

		/** Describes an action to republish to another topic. */
		republish?: RepublishAction | null;

		/** Describes an action to write data to an Amazon S3 bucket. */
		s3?: S3Action | null;

		/** Describes an action that writes data to an Amazon Kinesis Firehose stream. */
		firehose?: FirehoseAction | null;

		/** Describes an action that captures a CloudWatch metric. */
		cloudwatchMetric?: CloudwatchMetricAction | null;

		/** Describes an action that updates a CloudWatch alarm. */
		cloudwatchAlarm?: CloudwatchAlarmAction | null;

		/** Describes an action that sends data to CloudWatch Logs. */
		cloudwatchLogs?: CloudwatchLogsAction | null;

		/** Describes an action that writes data to an Amazon Elasticsearch Service domain. */
		elasticsearch?: ElasticsearchAction | null;

		/** Describes an action to write a message to a Salesforce IoT Cloud Input Stream. */
		salesforce?: SalesforceAction | null;

		/** Sends message data to an AWS IoT Analytics channel. */
		iotAnalytics?: IotAnalyticsAction | null;

		/** Sends an input to an AWS IoT Events detector. */
		iotEvents?: IotEventsAction | null;

		/** Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties. */
		iotSiteWise?: IotSiteWiseAction | null;

		/** Starts execution of a Step Functions state machine. */
		stepFunctions?: StepFunctionsAction | null;

		/** Send data to an HTTPS endpoint. */
		http?: HttpAction | null;
	}


	/** <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p> */
	export interface DynamoDBAction {
		tableName: string;
		roleArn: string;
		operation?: string | null;
		hashKeyField: string;
		hashKeyValue: string;
		hashKeyType?: DynamoDBActionHashKeyType | null;
		rangeKeyField?: string | null;
		rangeKeyValue?: string | null;
		rangeKeyType?: DynamoDBActionHashKeyType | null;
		payloadField?: string | null;
	}

	export enum DynamoDBActionHashKeyType { STRING = 0, NUMBER = 1 }


	/** <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p> */
	export interface DynamoDBv2Action {
		roleArn: string;

		/**
		 * The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
		 * Required
		 */
		putItem: PutItemInput;
	}


	/** The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written. */
	export interface PutItemInput {
		tableName: string;
	}


	/** Describes an action to invoke a Lambda function. */
	export interface LambdaAction {
		functionArn: string;
	}


	/** Describes an action to publish to an Amazon SNS topic. */
	export interface SnsAction {
		targetArn: string;
		roleArn: string;
		messageFormat?: SnsActionMessageFormat | null;
	}

	export enum SnsActionMessageFormat { RAW = 0, JSON = 1 }


	/** Describes an action to publish data to an Amazon SQS queue. */
	export interface SqsAction {
		roleArn: string;
		queueUrl: string;
		useBase64?: boolean | null;
	}


	/** Describes an action to write data to an Amazon Kinesis stream. */
	export interface KinesisAction {
		roleArn: string;
		streamName: string;
		partitionKey?: string | null;
	}


	/** Describes an action to republish to another topic. */
	export interface RepublishAction {
		roleArn: string;
		topic: string;
		qos?: number | null;
	}


	/** Describes an action to write data to an Amazon S3 bucket. */
	export interface S3Action {
		roleArn: string;
		bucketName: string;
		key: string;
		cannedAcl?: S3ActionCannedAcl | null;
	}

	export enum S3ActionCannedAcl { _private = 0, public_read = 1, public_read_write = 2, aws_exec_read = 3, authenticated_read = 4, bucket_owner_read = 5, bucket_owner_full_control = 6, log_delivery_write = 7 }


	/** Describes an action that writes data to an Amazon Kinesis Firehose stream. */
	export interface FirehoseAction {
		roleArn: string;
		deliveryStreamName: string;
		separator?: string | null;
	}


	/** Describes an action that captures a CloudWatch metric. */
	export interface CloudwatchMetricAction {
		roleArn: string;
		metricNamespace: string;
		metricName: string;
		metricValue: string;
		metricUnit: string;
		metricTimestamp?: string | null;
	}


	/** Describes an action that updates a CloudWatch alarm. */
	export interface CloudwatchAlarmAction {
		roleArn: string;
		alarmName: string;
		stateReason: string;
		stateValue: string;
	}


	/** Describes an action that sends data to CloudWatch Logs. */
	export interface CloudwatchLogsAction {
		roleArn: string;
		logGroupName: string;
	}


	/** Describes an action that writes data to an Amazon Elasticsearch Service domain. */
	export interface ElasticsearchAction {
		roleArn: string;
		endpoint: string;
		index: string;
		type: string;
		id: string;
	}


	/** Describes an action to write a message to a Salesforce IoT Cloud Input Stream. */
	export interface SalesforceAction {
		token: string;
		url: string;
	}


	/** Sends message data to an AWS IoT Analytics channel. */
	export interface IotAnalyticsAction {
		channelArn?: string | null;
		channelName?: string | null;
		roleArn?: string | null;
	}


	/** Sends an input to an AWS IoT Events detector. */
	export interface IotEventsAction {
		inputName: string;
		messageId?: string | null;
		roleArn: string;
	}


	/** Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties. */
	export interface IotSiteWiseAction {
		putAssetPropertyValueEntries: Array<PutAssetPropertyValueEntry>;
		roleArn: string;
	}


	/** An asset property value entry containing the following information. */
	export interface PutAssetPropertyValueEntry {
		entryId?: string | null;
		assetId?: string | null;
		propertyId?: string | null;
		propertyAlias?: string | null;
		propertyValues: Array<AssetPropertyValue>;
	}


	/** An asset property value entry containing the following information. */
	export interface AssetPropertyValue {

		/**
		 * Contains an asset property value (of a single type).
		 * Required
		 */
		value: AssetPropertyVariant;

		/**
		 * An asset property timestamp entry containing the following information.
		 * Required
		 */
		timestamp: AssetPropertyTimestamp;
		quality?: string | null;
	}


	/** Contains an asset property value (of a single type). */
	export interface AssetPropertyVariant {
		stringValue?: string | null;
		integerValue?: string | null;
		doubleValue?: string | null;
		booleanValue?: string | null;
	}


	/** An asset property timestamp entry containing the following information. */
	export interface AssetPropertyTimestamp {
		timeInSeconds: string;
		offsetInNanos?: string | null;
	}


	/** Starts execution of a Step Functions state machine. */
	export interface StepFunctionsAction {
		executionNamePrefix?: string | null;
		stateMachineName: string;
		roleArn: string;
	}


	/** Send data to an HTTPS endpoint. */
	export interface HttpAction {
		url: string;
		confirmationUrl?: string | null;
		headers?: Array<HttpActionHeader> | null;

		/** The authorization method used to send messages. */
		auth?: HttpAuthorization | null;
	}


	/** The HTTP action header. */
	export interface HttpActionHeader {
		key: string;
		value: string;
	}


	/** The authorization method used to send messages. */
	export interface HttpAuthorization {

		/** Use Sig V4 authorization. */
		sigv4?: SigV4Authorization | null;
	}


	/** Use Sig V4 authorization. */
	export interface SigV4Authorization {
		signingRegion: string;
		serviceName: string;
		roleArn: string;
	}

	export interface SqlParseException {
	}

	export interface CreateTopicRuleDestinationResponse {

		/** A topic rule destination. */
		topicRuleDestination?: TopicRuleDestination | null;
	}


	/** A topic rule destination. */
	export interface TopicRuleDestination {
		arn?: string | null;
		status?: TopicRuleDestinationStatus | null;
		statusReason?: string | null;

		/** HTTP URL destination properties. */
		httpUrlProperties?: HttpUrlDestinationProperties | null;
	}

	export enum TopicRuleDestinationStatus { ENABLED = 0, IN_PROGRESS = 1, DISABLED = 2, ERROR = 3 }


	/** HTTP URL destination properties. */
	export interface HttpUrlDestinationProperties {
		confirmationUrl?: string | null;
	}


	/** HTTP URL destination configuration used by the topic rule's HTTP action. */
	export interface HttpUrlDestinationConfiguration {
		confirmationUrl: string;
	}

	export interface DeleteAccountAuditConfigurationResponse {
	}

	export interface DeleteAuthorizerResponse {
	}

	export interface DeleteConflictException {
	}

	export interface DeleteBillingGroupResponse {
	}


	/** The output for the DeleteCACertificate operation. */
	export interface DeleteCACertificateResponse {
	}

	export interface CertificateStateException {
	}

	export interface DeleteDimensionResponse {
	}

	export interface DeleteDomainConfigurationResponse {
	}

	export interface DeleteDynamicThingGroupResponse {
	}

	export interface DeleteMitigationActionResponse {
	}

	export interface DeleteOTAUpdateResponse {
	}

	export interface DeleteProvisioningTemplateResponse {
	}

	export interface DeleteProvisioningTemplateVersionResponse {
	}


	/** The output for the DeleteRegistrationCode operation. */
	export interface DeleteRegistrationCodeResponse {
	}

	export interface DeleteRoleAliasResponse {
	}

	export interface DeleteScheduledAuditResponse {
	}

	export interface DeleteSecurityProfileResponse {
	}

	export interface DeleteStreamResponse {
	}


	/** The output of the DeleteThing operation. */
	export interface DeleteThingResponse {
	}

	export interface DeleteThingGroupResponse {
	}


	/** The output for the DeleteThingType operation. */
	export interface DeleteThingTypeResponse {
	}

	export interface DeleteTopicRuleDestinationResponse {
	}


	/** The output for the DeprecateThingType operation. */
	export interface DeprecateThingTypeResponse {
	}

	export interface DescribeAccountAuditConfigurationResponse {
		roleArn?: string | null;
		auditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations | null;
		auditCheckConfigurations?: AuditCheckConfigurations | null;
	}

	export interface AuditNotificationTargetConfigurations {
	}

	export interface AuditCheckConfigurations {
	}

	export interface DescribeAuditFindingResponse {

		/** The findings (results) of the audit. */
		finding?: AuditFinding | null;
	}


	/** The findings (results) of the audit. */
	export interface AuditFinding {
		findingId?: string | null;
		taskId?: string | null;

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string | null;
		taskStartTime?: Date | null;
		findingTime?: Date | null;
		severity?: AuditFindingSeverity | null;

		/** Information about the resource that was noncompliant with the audit check. */
		nonCompliantResource?: NonCompliantResource | null;
		relatedResources?: Array<RelatedResource> | null;
		reasonForNonCompliance?: string | null;
		reasonForNonComplianceCode?: string | null;
	}

	export enum AuditFindingSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3 }


	/** Information about the resource that was noncompliant with the audit check. */
	export interface NonCompliantResource {
		resourceType?: NonCompliantResourceResourceType | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier | null;
		additionalInfo?: StringMap | null;
	}

	export enum NonCompliantResourceResourceType { DEVICE_CERTIFICATE = 0, CA_CERTIFICATE = 1, IOT_POLICY = 2, COGNITO_IDENTITY_POOL = 3, CLIENT_ID = 4, ACCOUNT_SETTINGS = 5, ROLE_ALIAS = 6, IAM_ROLE = 7 }


	/** Information that identifies the noncompliant resource. */
	export interface ResourceIdentifier {
		deviceCertificateId?: string | null;
		caCertificateId?: string | null;
		cognitoIdentityPoolId?: string | null;
		clientId?: string | null;

		/** Information about the version of the policy associated with the resource. */
		policyVersionIdentifier?: PolicyVersionIdentifier | null;
		account?: string | null;
		iamRoleArn?: string | null;
		roleAliasArn?: string | null;
	}


	/** Information about the version of the policy associated with the resource. */
	export interface PolicyVersionIdentifier {
		policyName?: string | null;
		policyVersionId?: string | null;
	}

	export interface StringMap {
	}


	/** Information about a related resource. */
	export interface RelatedResource {
		resourceType?: NonCompliantResourceResourceType | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier | null;
		additionalInfo?: StringMap | null;
	}

	export interface DescribeAuditMitigationActionsTaskResponse {
		taskStatus?: DescribeAuditMitigationActionsTaskResponseTaskStatus | null;
		startTime?: Date | null;
		endTime?: Date | null;
		taskStatistics?: AuditMitigationActionsTaskStatistics | null;

		/** Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
		target?: AuditMitigationActionsTaskTarget | null;
		auditCheckToActionsMapping?: AuditCheckToActionsMapping | null;
		actionsDefinition?: Array<MitigationAction> | null;
	}

	export enum DescribeAuditMitigationActionsTaskResponseTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }

	export interface AuditMitigationActionsTaskStatistics {
	}


	/** Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
	export interface AuditMitigationActionsTaskTarget {
		auditTaskId?: string | null;
		findingIds?: Array<string> | null;
		auditCheckToReasonCodeFilter?: AuditCheckToReasonCodeFilter | null;
	}

	export interface AuditCheckToReasonCodeFilter {
	}

	export interface AuditCheckToActionsMapping {
	}


	/** Describes which changes should be applied as part of a mitigation action. */
	export interface MitigationAction {
		name?: string | null;
		id?: string | null;
		roleArn?: string | null;

		/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: MitigationActionParams | null;
	}


	/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
	export interface MitigationActionParams {

		/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams | null;

		/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
		updateCACertificateParams?: UpdateCACertificateParams | null;

		/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
		addThingsToThingGroupParams?: AddThingsToThingGroupParams | null;

		/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams | null;

		/** Parameters used when defining a mitigation action that enable AWS IoT logging. */
		enableIoTLoggingParams?: EnableIoTLoggingParams | null;

		/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
		publishFindingToSnsParams?: PublishFindingToSnsParams | null;
	}

	export interface DescribeAuditTaskResponse {
		taskStatus?: DescribeAuditMitigationActionsTaskResponseTaskStatus | null;
		taskType?: DescribeAuditTaskResponseTaskType | null;
		taskStartTime?: Date | null;

		/** Statistics for the checks performed during the audit. */
		taskStatistics?: TaskStatistics | null;
		scheduledAuditName?: string | null;
		auditDetails?: AuditDetails | null;
	}

	export enum DescribeAuditTaskResponseTaskType { ON_DEMAND_AUDIT_TASK = 0, SCHEDULED_AUDIT_TASK = 1 }


	/** Statistics for the checks performed during the audit. */
	export interface TaskStatistics {
		totalChecks?: number | null;
		inProgressChecks?: number | null;
		waitingForDataCollectionChecks?: number | null;
		compliantChecks?: number | null;
		nonCompliantChecks?: number | null;
		failedChecks?: number | null;
		canceledChecks?: number | null;
	}

	export interface AuditDetails {
	}

	export interface DescribeAuthorizerResponse {

		/** The authorizer description. */
		authorizerDescription?: AuthorizerDescription | null;
	}


	/** The authorizer description. */
	export interface AuthorizerDescription {
		authorizerName?: string | null;
		authorizerArn?: string | null;
		authorizerFunctionArn?: string | null;
		tokenKeyName?: string | null;
		tokenSigningPublicKeys?: PublicKeyMap | null;
		status?: AuthorizerDescriptionStatus | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		signingDisabled?: boolean | null;
	}

	export interface PublicKeyMap {
	}

	export enum AuthorizerDescriptionStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface DescribeBillingGroupResponse {
		billingGroupName?: string | null;
		billingGroupId?: string | null;
		billingGroupArn?: string | null;
		version?: number | null;

		/** The properties of a billing group. */
		billingGroupProperties?: BillingGroupProperties | null;

		/** Additional information about the billing group. */
		billingGroupMetadata?: BillingGroupMetadata | null;
	}


	/** The properties of a billing group. */
	export interface BillingGroupProperties {
		billingGroupDescription?: string | null;
	}


	/** Additional information about the billing group. */
	export interface BillingGroupMetadata {
		creationDate?: Date | null;
	}


	/** The output from the DescribeCACertificate operation. */
	export interface DescribeCACertificateResponse {

		/** Describes a CA certificate. */
		certificateDescription?: CACertificateDescription | null;

		/** The registration configuration. */
		registrationConfig?: RegistrationConfig | null;
	}


	/** Describes a CA certificate. */
	export interface CACertificateDescription {
		certificateArn?: string | null;
		certificateId?: string | null;
		status?: AuthorizerDescriptionStatus | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;
		ownedBy?: string | null;
		creationDate?: Date | null;
		autoRegistrationStatus?: CACertificateDescriptionAutoRegistrationStatus | null;
		lastModifiedDate?: Date | null;
		customerVersion?: number | null;
		generationId?: string | null;

		/** When the certificate is valid. */
		validity?: CertificateValidity | null;
	}

	export enum CACertificateDescriptionAutoRegistrationStatus { ENABLE = 0, DISABLE = 1 }


	/** When the certificate is valid. */
	export interface CertificateValidity {
		notBefore?: Date | null;
		notAfter?: Date | null;
	}


	/** The registration configuration. */
	export interface RegistrationConfig {
		templateBody?: string | null;
		roleArn?: string | null;
	}


	/** The output of the DescribeCertificate operation. */
	export interface DescribeCertificateResponse {

		/** Describes a certificate. */
		certificateDescription?: CertificateDescription | null;
	}


	/** Describes a certificate. */
	export interface CertificateDescription {
		certificateArn?: string | null;
		certificateId?: string | null;
		caCertificateId?: string | null;
		status?: CertificateDescriptionStatus | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;
		ownedBy?: string | null;
		previousOwnedBy?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		customerVersion?: number | null;

		/** Data used to transfer a certificate to an AWS account. */
		transferData?: TransferData | null;
		generationId?: string | null;

		/** When the certificate is valid. */
		validity?: CertificateValidity | null;
		certificateMode?: CertificateDescriptionCertificateMode | null;
	}

	export enum CertificateDescriptionStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }


	/** Data used to transfer a certificate to an AWS account. */
	export interface TransferData {
		transferMessage?: string | null;
		rejectReason?: string | null;
		transferDate?: Date | null;
		acceptDate?: Date | null;
		rejectDate?: Date | null;
	}

	export enum CertificateDescriptionCertificateMode { DEFAULT = 0, SNI_ONLY = 1 }

	export interface DescribeDefaultAuthorizerResponse {

		/** The authorizer description. */
		authorizerDescription?: AuthorizerDescription | null;
	}

	export interface DescribeDimensionResponse {
		name?: string | null;
		arn?: string | null;
		type?: DescribeDimensionResponseType | null;
		stringValues?: Array<string> | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}

	export enum DescribeDimensionResponseType { TOPIC_FILTER = 0 }

	export interface DescribeDomainConfigurationResponse {
		domainConfigurationName?: string | null;
		domainConfigurationArn?: string | null;
		domainName?: string | null;
		serverCertificates?: Array<ServerCertificateSummary> | null;

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: AuthorizerConfig | null;
		domainConfigurationStatus?: DescribeDomainConfigurationResponseDomainConfigurationStatus | null;
		serviceType?: DescribeDomainConfigurationResponseServiceType | null;
		domainType?: DescribeDomainConfigurationResponseDomainType | null;
	}


	/** An object that contains information about a server certificate. */
	export interface ServerCertificateSummary {
		serverCertificateArn?: string | null;
		serverCertificateStatus?: ServerCertificateSummaryServerCertificateStatus | null;
		serverCertificateStatusDetail?: string | null;
	}

	export enum ServerCertificateSummaryServerCertificateStatus { INVALID = 0, VALID = 1 }


	/** An object that specifies the authorization service for a domain. */
	export interface AuthorizerConfig {
		defaultAuthorizerName?: string | null;
		allowAuthorizerOverride?: boolean | null;
	}

	export enum DescribeDomainConfigurationResponseDomainConfigurationStatus { ENABLED = 0, DISABLED = 1 }

	export enum DescribeDomainConfigurationResponseServiceType { DATA = 0, CREDENTIAL_PROVIDER = 1, JOBS = 2 }

	export enum DescribeDomainConfigurationResponseDomainType { ENDPOINT = 0, AWS_MANAGED = 1, CUSTOMER_MANAGED = 2 }


	/** The output from the DescribeEndpoint operation. */
	export interface DescribeEndpointResponse {
		endpointAddress?: string | null;
	}

	export interface DescribeEventConfigurationsResponse {
		eventConfigurations?: EventConfigurations | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}

	export interface EventConfigurations {
	}

	export interface DescribeIndexResponse {
		indexName?: string | null;
		indexStatus?: DescribeIndexResponseIndexStatus | null;
		schema?: string | null;
	}

	export enum DescribeIndexResponseIndexStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }

	export interface DescribeJobResponse {
		documentSource?: string | null;

		/** The <code>Job</code> object contains details about a job. */
		job?: Job | null;
	}


	/** The <code>Job</code> object contains details about a job. */
	export interface Job {
		jobArn?: string | null;
		jobId?: string | null;
		targetSelection?: JobTargetSelection | null;
		status?: JobStatus | null;
		forceCanceled?: boolean | null;
		reasonCode?: string | null;
		comment?: string | null;
		targets?: Array<string> | null;
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig | null;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | null;

		/** Details of abort criteria to abort the job. */
		abortConfig?: AbortConfig | null;
		createdAt?: Date | null;
		lastUpdatedAt?: Date | null;
		completedAt?: Date | null;

		/** The job process details. */
		jobProcessDetails?: JobProcessDetails | null;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig | null;
	}

	export enum JobTargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export enum JobStatus { IN_PROGRESS = 0, CANCELED = 1, COMPLETED = 2, DELETION_IN_PROGRESS = 3 }


	/** Configuration for pre-signed S3 URLs. */
	export interface PresignedUrlConfig {
		roleArn?: string | null;
		expiresInSec?: number | null;
	}


	/** Allows you to create a staged rollout of a job. */
	export interface JobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;

		/** Allows you to create an exponential rate of rollout for a job. */
		exponentialRate?: ExponentialRolloutRate | null;
	}


	/** Details of abort criteria to abort the job. */
	export interface AbortConfig {
		criteriaList: Array<AbortCriteria>;
	}


	/** The job process details. */
	export interface JobProcessDetails {
		processingTargets?: Array<string> | null;
		numberOfCanceledThings?: number | null;
		numberOfSucceededThings?: number | null;
		numberOfFailedThings?: number | null;
		numberOfRejectedThings?: number | null;
		numberOfQueuedThings?: number | null;
		numberOfInProgressThings?: number | null;
		numberOfRemovedThings?: number | null;
		numberOfTimedOutThings?: number | null;
	}


	/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
	export interface TimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}

	export interface DescribeJobExecutionResponse {

		/** The job execution object represents the execution of a job on a particular device. */
		execution?: JobExecution | null;
	}


	/** The job execution object represents the execution of a job on a particular device. */
	export interface JobExecution {
		jobId?: string | null;
		status?: JobExecutionStatus | null;
		forceCanceled?: boolean | null;

		/** Details of the job execution status. */
		statusDetails?: JobExecutionStatusDetails | null;
		thingArn?: string | null;
		queuedAt?: Date | null;
		startedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		executionNumber?: number | null;
		versionNumber?: number | null;
		approximateSecondsBeforeTimedOut?: number | null;
	}

	export enum JobExecutionStatus { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, TIMED_OUT = 4, REJECTED = 5, REMOVED = 6, CANCELED = 7 }


	/** Details of the job execution status. */
	export interface JobExecutionStatusDetails {
		detailsMap?: DetailsMap | null;
	}

	export interface DetailsMap {
	}

	export interface DescribeMitigationActionResponse {
		actionName?: string | null;
		actionType?: DescribeMitigationActionResponseActionType | null;
		actionArn?: string | null;
		actionId?: string | null;
		roleArn?: string | null;

		/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: MitigationActionParams | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}

	export enum DescribeMitigationActionResponseActionType { UPDATE_DEVICE_CERTIFICATE = 0, UPDATE_CA_CERTIFICATE = 1, ADD_THINGS_TO_THING_GROUP = 2, REPLACE_DEFAULT_POLICY_VERSION = 3, ENABLE_IOT_LOGGING = 4, PUBLISH_FINDING_TO_SNS = 5 }

	export interface DescribeProvisioningTemplateResponse {
		templateArn?: string | null;
		templateName?: string | null;
		description?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		defaultVersionId?: number | null;
		templateBody?: string | null;
		enabled?: boolean | null;
		provisioningRoleArn?: string | null;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: ProvisioningHook | null;
	}


	/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
	export interface ProvisioningHook {
		payloadVersion?: string | null;
		targetArn: string;
	}

	export interface DescribeProvisioningTemplateVersionResponse {
		versionId?: number | null;
		creationDate?: Date | null;
		templateBody?: string | null;
		isDefaultVersion?: boolean | null;
	}

	export interface DescribeRoleAliasResponse {

		/** Role alias description. */
		roleAliasDescription?: RoleAliasDescription | null;
	}


	/** Role alias description. */
	export interface RoleAliasDescription {
		roleAlias?: string | null;
		roleAliasArn?: string | null;
		roleArn?: string | null;
		owner?: string | null;
		credentialDurationSeconds?: number | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}

	export interface DescribeScheduledAuditResponse {
		frequency?: DescribeScheduledAuditResponseFrequency | null;
		dayOfMonth?: string | null;
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;
		targetCheckNames?: Array<string> | null;
		scheduledAuditName?: string | null;
		scheduledAuditArn?: string | null;
	}

	export enum DescribeScheduledAuditResponseFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum DescribeScheduledAuditResponseDayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface DescribeSecurityProfileResponse {
		securityProfileName?: string | null;
		securityProfileArn?: string | null;
		securityProfileDescription?: string | null;
		behaviors?: Array<Behavior> | null;
		alertTargets?: AlertTargets | null;
		additionalMetricsToRetain?: Array<string> | null;
		additionalMetricsToRetainV2?: Array<MetricToRetain> | null;
		version?: number | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}

	export interface AlertTargets {
	}

	export interface DescribeStreamResponse {

		/** Information about a stream. */
		streamInfo?: StreamInfo | null;
	}


	/** Information about a stream. */
	export interface StreamInfo {
		streamId?: string | null;
		streamArn?: string | null;
		streamVersion?: number | null;
		description?: string | null;
		files?: Array<StreamFile> | null;
		createdAt?: Date | null;
		lastUpdatedAt?: Date | null;
		roleArn?: string | null;
	}


	/** The output from the DescribeThing operation. */
	export interface DescribeThingResponse {
		defaultClientId?: string | null;
		thingName?: string | null;
		thingId?: string | null;
		thingArn?: string | null;
		thingTypeName?: string | null;
		attributes?: Attributes | null;
		version?: number | null;
		billingGroupName?: string | null;
	}

	export interface DescribeThingGroupResponse {
		thingGroupName?: string | null;
		thingGroupId?: string | null;
		thingGroupArn?: string | null;
		version?: number | null;

		/** Thing group properties. */
		thingGroupProperties?: ThingGroupProperties | null;

		/** Thing group metadata. */
		thingGroupMetadata?: ThingGroupMetadata | null;
		indexName?: string | null;
		queryString?: string | null;
		queryVersion?: string | null;
		status?: DescribeIndexResponseIndexStatus | null;
	}


	/** Thing group properties. */
	export interface ThingGroupProperties {
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload | null;
	}


	/** Thing group metadata. */
	export interface ThingGroupMetadata {
		parentGroupName?: string | null;
		rootToParentThingGroups?: Array<GroupNameAndArn> | null;
		creationDate?: Date | null;
	}


	/** The name and ARN of a group. */
	export interface GroupNameAndArn {
		groupName?: string | null;
		groupArn?: string | null;
	}

	export interface DescribeThingRegistrationTaskResponse {
		taskId?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		templateBody?: string | null;
		inputFileBucket?: string | null;
		inputFileKey?: string | null;
		roleArn?: string | null;
		status?: DescribeThingRegistrationTaskResponseStatus | null;
		message?: string | null;
		successCount?: number | null;
		failureCount?: number | null;
		percentageProgress?: number | null;
	}

	export enum DescribeThingRegistrationTaskResponseStatus { InProgress = 0, Completed = 1, Failed = 2, Cancelled = 3, Cancelling = 4 }


	/** The output for the DescribeThingType operation. */
	export interface DescribeThingTypeResponse {
		thingTypeName?: string | null;
		thingTypeId?: string | null;
		thingTypeArn?: string | null;

		/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: ThingTypeProperties | null;

		/** The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
		thingTypeMetadata?: ThingTypeMetadata | null;
	}


	/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
	export interface ThingTypeProperties {
		thingTypeDescription?: string | null;
		searchableAttributes?: Array<string> | null;
	}


	/** The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
	export interface ThingTypeMetadata {
		deprecated?: boolean | null;
		deprecationDate?: Date | null;
		creationDate?: Date | null;
	}

	export interface DetachSecurityProfileResponse {
	}


	/** The output from the DetachThingPrincipal operation. */
	export interface DetachThingPrincipalResponse {
	}

	export interface GetCardinalityResponse {
		cardinality?: number | null;
	}

	export interface InvalidAggregationException {
	}

	export interface IndexNotReadyException {
	}

	export interface GetEffectivePoliciesResponse {
		effectivePolicies?: Array<EffectivePolicy> | null;
	}


	/** The policy that has the effect on the authorization results. */
	export interface EffectivePolicy {
		policyName?: string | null;
		policyArn?: string | null;
		policyDocument?: string | null;
	}

	export interface GetIndexingConfigurationResponse {

		/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
		thingIndexingConfiguration?: ThingIndexingConfiguration | null;

		/** Thing group indexing configuration. */
		thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration | null;
	}


	/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
	export interface ThingIndexingConfiguration {
		thingIndexingMode: ThingIndexingConfigurationThingIndexingMode;
		thingConnectivityIndexingMode?: ThingIndexingConfigurationThingConnectivityIndexingMode | null;
		managedFields?: Array<Field> | null;
		customFields?: Array<Field> | null;
	}

	export enum ThingIndexingConfigurationThingIndexingMode { OFF = 0, REGISTRY = 1, REGISTRY_AND_SHADOW = 2 }

	export enum ThingIndexingConfigurationThingConnectivityIndexingMode { OFF = 0, STATUS = 1 }


	/** Describes the name and data type at a field. */
	export interface Field {
		name?: string | null;
		type?: FieldType | null;
	}

	export enum FieldType { Number = 0, String = 1, Boolean = 2 }


	/** Thing group indexing configuration. */
	export interface ThingGroupIndexingConfiguration {
		thingGroupIndexingMode: ThingGroupIndexingConfigurationThingGroupIndexingMode;
		managedFields?: Array<Field> | null;
		customFields?: Array<Field> | null;
	}

	export enum ThingGroupIndexingConfigurationThingGroupIndexingMode { OFF = 0, ON = 1 }

	export interface GetJobDocumentResponse {
		document?: string | null;
	}


	/** The output from the GetLoggingOptions operation. */
	export interface GetLoggingOptionsResponse {
		roleArn?: string | null;
		logLevel?: EnableIoTLoggingParamsLogLevel | null;
	}

	export interface GetOTAUpdateResponse {

		/** Information about an OTA update. */
		otaUpdateInfo?: OTAUpdateInfo | null;
	}


	/** Information about an OTA update. */
	export interface OTAUpdateInfo {
		otaUpdateId?: string | null;
		otaUpdateArn?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		description?: string | null;
		targets?: Array<string> | null;
		protocols?: Array<Protocol> | null;

		/** Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig | null;

		/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig | null;
		targetSelection?: JobTargetSelection | null;
		otaUpdateFiles?: Array<OTAUpdateFile> | null;
		otaUpdateStatus?: CreateOTAUpdateResponseOtaUpdateStatus | null;
		awsIotJobId?: string | null;
		awsIotJobArn?: string | null;

		/** Error information. */
		errorInfo?: ErrorInfo | null;
		additionalParameters?: AdditionalParameterMap | null;
	}


	/** Configuration for the rollout of OTA updates. */
	export interface AwsJobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;
	}


	/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
	export interface AwsJobPresignedUrlConfig {
		expiresInSec?: number | null;
	}


	/** Error information. */
	export interface ErrorInfo {
		code?: string | null;
		message?: string | null;
	}

	export interface AdditionalParameterMap {
	}

	export interface GetPercentilesResponse {
		percentiles?: Array<PercentPair> | null;
	}


	/** Describes the percentile and percentile value. */
	export interface PercentPair {
		percent?: number | null;
		value?: number | null;
	}


	/** The output from the GetPolicy operation. */
	export interface GetPolicyResponse {
		policyName?: string | null;
		policyArn?: string | null;
		policyDocument?: string | null;
		defaultVersionId?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		generationId?: string | null;
	}


	/** The output from the GetPolicyVersion operation. */
	export interface GetPolicyVersionResponse {
		policyArn?: string | null;
		policyName?: string | null;
		policyDocument?: string | null;
		policyVersionId?: string | null;
		isDefaultVersion?: boolean | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		generationId?: string | null;
	}


	/** The output from the GetRegistrationCode operation. */
	export interface GetRegistrationCodeResponse {
		registrationCode?: string | null;
	}

	export interface GetStatisticsResponse {

		/** A map of key-value pairs for all supported statistics. Currently, only count is supported. */
		statistics?: Statistics | null;
	}


	/** A map of key-value pairs for all supported statistics. Currently, only count is supported. */
	export interface Statistics {
		count?: number | null;
		average?: number | null;
		sum?: number | null;
		minimum?: number | null;
		maximum?: number | null;
		sumOfSquares?: number | null;
		variance?: number | null;
		stdDeviation?: number | null;
	}


	/** The output from the GetTopicRule operation. */
	export interface GetTopicRuleResponse {
		ruleArn?: string | null;

		/** Describes a rule. */
		rule?: TopicRule | null;
	}


	/** Describes a rule. */
	export interface TopicRule {
		ruleName?: string | null;
		sql?: string | null;
		description?: string | null;
		createdAt?: Date | null;
		actions?: Array<Action> | null;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string | null;

		/** Describes the actions associated with a rule. */
		errorAction?: Action | null;
	}

	export interface GetTopicRuleDestinationResponse {

		/** A topic rule destination. */
		topicRuleDestination?: TopicRuleDestination | null;
	}

	export interface GetV2LoggingOptionsResponse {
		roleArn?: string | null;
		defaultLogLevel?: EnableIoTLoggingParamsLogLevel | null;
		disableAllLogs?: boolean | null;
	}

	export interface NotConfiguredException {
	}

	export interface ListActiveViolationsResponse {
		activeViolations?: Array<ActiveViolation> | null;
		nextToken?: string | null;
	}


	/** Information about an active Device Defender security profile behavior violation. */
	export interface ActiveViolation {
		violationId?: string | null;
		thingName?: string | null;
		securityProfileName?: string | null;

		/** A Device Defender security profile behavior. */
		behavior?: Behavior | null;

		/** The value to be compared with the <code>metric</code>. */
		lastViolationValue?: MetricValue | null;
		lastViolationTime?: Date | null;
		violationStartTime?: Date | null;
	}

	export interface ListAttachedPoliciesResponse {
		policies?: Array<Policy> | null;
		nextMarker?: string | null;
	}


	/** Describes an AWS IoT policy. */
	export interface Policy {
		policyName?: string | null;
		policyArn?: string | null;
	}

	export interface ListAuditFindingsResponse {
		findings?: Array<AuditFinding> | null;
		nextToken?: string | null;
	}

	export interface ListAuditMitigationActionsExecutionsResponse {
		actionsExecutions?: Array<AuditMitigationActionExecutionMetadata> | null;
		nextToken?: string | null;
	}


	/** Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started. */
	export interface AuditMitigationActionExecutionMetadata {
		taskId?: string | null;
		findingId?: string | null;
		actionName?: string | null;
		actionId?: string | null;
		status?: AuditMitigationActionExecutionMetadataStatus | null;
		startTime?: Date | null;
		endTime?: Date | null;
		errorCode?: string | null;
		message?: string | null;
	}

	export enum AuditMitigationActionExecutionMetadataStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3, SKIPPED = 4, PENDING = 5 }

	export interface ListAuditMitigationActionsTasksResponse {
		tasks?: Array<AuditMitigationActionsTaskMetadata> | null;
		nextToken?: string | null;
	}


	/** Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>. */
	export interface AuditMitigationActionsTaskMetadata {
		taskId?: string | null;
		startTime?: Date | null;
		taskStatus?: DescribeAuditMitigationActionsTaskResponseTaskStatus | null;
	}

	export interface ListAuditTasksResponse {
		tasks?: Array<AuditTaskMetadata> | null;
		nextToken?: string | null;
	}


	/** The audits that were performed. */
	export interface AuditTaskMetadata {
		taskId?: string | null;
		taskStatus?: DescribeAuditMitigationActionsTaskResponseTaskStatus | null;
		taskType?: DescribeAuditTaskResponseTaskType | null;
	}

	export interface ListAuthorizersResponse {
		authorizers?: Array<AuthorizerSummary> | null;
		nextMarker?: string | null;
	}


	/** The authorizer summary. */
	export interface AuthorizerSummary {
		authorizerName?: string | null;
		authorizerArn?: string | null;
	}

	export interface ListBillingGroupsResponse {
		billingGroups?: Array<GroupNameAndArn> | null;
		nextToken?: string | null;
	}


	/** The output from the ListCACertificates operation. */
	export interface ListCACertificatesResponse {
		certificates?: Array<CACertificate> | null;
		nextMarker?: string | null;
	}


	/** A CA certificate. */
	export interface CACertificate {
		certificateArn?: string | null;
		certificateId?: string | null;
		status?: AuthorizerDescriptionStatus | null;
		creationDate?: Date | null;
	}


	/** The output of the ListCertificates operation. */
	export interface ListCertificatesResponse {
		certificates?: Array<Certificate> | null;
		nextMarker?: string | null;
	}


	/** Information about a certificate. */
	export interface Certificate {
		certificateArn?: string | null;
		certificateId?: string | null;
		status?: CertificateDescriptionStatus | null;
		certificateMode?: CertificateDescriptionCertificateMode | null;
		creationDate?: Date | null;
	}


	/** The output of the ListCertificatesByCA operation. */
	export interface ListCertificatesByCAResponse {
		certificates?: Array<Certificate> | null;
		nextMarker?: string | null;
	}

	export interface ListDimensionsResponse {
		dimensionNames?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListDomainConfigurationsResponse {
		domainConfigurations?: Array<DomainConfigurationSummary> | null;
		nextMarker?: string | null;
	}


	/** <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an AWS-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note> */
	export interface DomainConfigurationSummary {
		domainConfigurationName?: string | null;
		domainConfigurationArn?: string | null;
		serviceType?: DescribeDomainConfigurationResponseServiceType | null;
	}

	export interface ListIndicesResponse {
		indexNames?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListJobExecutionsForJobResponse {
		executionSummaries?: Array<JobExecutionSummaryForJob> | null;
		nextToken?: string | null;
	}


	/** Contains a summary of information about job executions for a specific job. */
	export interface JobExecutionSummaryForJob {
		thingArn?: string | null;

		/** The job execution summary. */
		jobExecutionSummary?: JobExecutionSummary | null;
	}


	/** The job execution summary. */
	export interface JobExecutionSummary {
		status?: JobExecutionStatus | null;
		queuedAt?: Date | null;
		startedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		executionNumber?: number | null;
	}

	export interface ListJobExecutionsForThingResponse {
		executionSummaries?: Array<JobExecutionSummaryForThing> | null;
		nextToken?: string | null;
	}


	/** The job execution summary for a thing. */
	export interface JobExecutionSummaryForThing {
		jobId?: string | null;

		/** The job execution summary. */
		jobExecutionSummary?: JobExecutionSummary | null;
	}

	export interface ListJobsResponse {
		jobs?: Array<JobSummary> | null;
		nextToken?: string | null;
	}


	/** The job summary. */
	export interface JobSummary {
		jobArn?: string | null;
		jobId?: string | null;
		thingGroupId?: string | null;
		targetSelection?: JobTargetSelection | null;
		status?: JobStatus | null;
		createdAt?: Date | null;
		lastUpdatedAt?: Date | null;
		completedAt?: Date | null;
	}

	export interface ListMitigationActionsResponse {
		actionIdentifiers?: Array<MitigationActionIdentifier> | null;
		nextToken?: string | null;
	}


	/** Information that identifies a mitigation action. This information is returned by ListMitigationActions. */
	export interface MitigationActionIdentifier {
		actionName?: string | null;
		actionArn?: string | null;
		creationDate?: Date | null;
	}

	export interface ListOTAUpdatesResponse {
		otaUpdates?: Array<OTAUpdateSummary> | null;
		nextToken?: string | null;
	}


	/** An OTA update summary. */
	export interface OTAUpdateSummary {
		otaUpdateId?: string | null;
		otaUpdateArn?: string | null;
		creationDate?: Date | null;
	}


	/** The output from the ListOutgoingCertificates operation. */
	export interface ListOutgoingCertificatesResponse {
		outgoingCertificates?: Array<OutgoingCertificate> | null;
		nextMarker?: string | null;
	}


	/** A certificate that has been transferred but not yet accepted. */
	export interface OutgoingCertificate {
		certificateArn?: string | null;
		certificateId?: string | null;
		transferredTo?: string | null;
		transferDate?: Date | null;
		transferMessage?: string | null;
		creationDate?: Date | null;
	}


	/** The output from the ListPolicies operation. */
	export interface ListPoliciesResponse {
		policies?: Array<Policy> | null;
		nextMarker?: string | null;
	}


	/** The output from the ListPolicyPrincipals operation. */
	export interface ListPolicyPrincipalsResponse {
		principals?: Array<string> | null;
		nextMarker?: string | null;
	}


	/** The output from the ListPolicyVersions operation. */
	export interface ListPolicyVersionsResponse {
		policyVersions?: Array<PolicyVersion> | null;
	}


	/** Describes a policy version. */
	export interface PolicyVersion {
		versionId?: string | null;
		isDefaultVersion?: boolean | null;
		createDate?: Date | null;
	}


	/** The output from the ListPrincipalPolicies operation. */
	export interface ListPrincipalPoliciesResponse {
		policies?: Array<Policy> | null;
		nextMarker?: string | null;
	}


	/** The output from the ListPrincipalThings operation. */
	export interface ListPrincipalThingsResponse {
		things?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListProvisioningTemplateVersionsResponse {
		versions?: Array<ProvisioningTemplateVersionSummary> | null;
		nextToken?: string | null;
	}


	/** A summary of information about a fleet provision template version. */
	export interface ProvisioningTemplateVersionSummary {
		versionId?: number | null;
		creationDate?: Date | null;
		isDefaultVersion?: boolean | null;
	}

	export interface ListProvisioningTemplatesResponse {
		templates?: Array<ProvisioningTemplateSummary> | null;
		nextToken?: string | null;
	}


	/** A summary of information about a fleet provisioning template. */
	export interface ProvisioningTemplateSummary {
		templateArn?: string | null;
		templateName?: string | null;
		description?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		enabled?: boolean | null;
	}

	export interface ListRoleAliasesResponse {
		roleAliases?: Array<string> | null;
		nextMarker?: string | null;
	}

	export interface ListScheduledAuditsResponse {
		scheduledAudits?: Array<ScheduledAuditMetadata> | null;
		nextToken?: string | null;
	}


	/** Information about the scheduled audit. */
	export interface ScheduledAuditMetadata {
		scheduledAuditName?: string | null;
		scheduledAuditArn?: string | null;
		frequency?: DescribeScheduledAuditResponseFrequency | null;
		dayOfMonth?: string | null;
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;
	}

	export interface ListSecurityProfilesResponse {
		securityProfileIdentifiers?: Array<SecurityProfileIdentifier> | null;
		nextToken?: string | null;
	}


	/** Identifying information for a Device Defender security profile. */
	export interface SecurityProfileIdentifier {
		name: string;
		arn: string;
	}

	export interface ListSecurityProfilesForTargetResponse {
		securityProfileTargetMappings?: Array<SecurityProfileTargetMapping> | null;
		nextToken?: string | null;
	}


	/** Information about a security profile and the target associated with it. */
	export interface SecurityProfileTargetMapping {

		/** Identifying information for a Device Defender security profile. */
		securityProfileIdentifier?: SecurityProfileIdentifier | null;

		/** A target to which an alert is sent when a security profile behavior is violated. */
		target?: SecurityProfileTarget | null;
	}


	/** A target to which an alert is sent when a security profile behavior is violated. */
	export interface SecurityProfileTarget {
		arn: string;
	}

	export interface ListStreamsResponse {
		streams?: Array<StreamSummary> | null;
		nextToken?: string | null;
	}


	/** A summary of a stream. */
	export interface StreamSummary {
		streamId?: string | null;
		streamArn?: string | null;
		streamVersion?: number | null;
		description?: string | null;
	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag> | null;
		nextToken?: string | null;
	}

	export interface ListTargetsForPolicyResponse {
		targets?: Array<string> | null;
		nextMarker?: string | null;
	}

	export interface ListTargetsForSecurityProfileResponse {
		securityProfileTargets?: Array<SecurityProfileTarget> | null;
		nextToken?: string | null;
	}

	export interface ListThingGroupsResponse {
		thingGroups?: Array<GroupNameAndArn> | null;
		nextToken?: string | null;
	}

	export interface ListThingGroupsForThingResponse {
		thingGroups?: Array<GroupNameAndArn> | null;
		nextToken?: string | null;
	}


	/** The output from the ListThingPrincipals operation. */
	export interface ListThingPrincipalsResponse {
		principals?: Array<string> | null;
	}

	export interface ListThingRegistrationTaskReportsResponse {
		resourceLinks?: Array<string> | null;
		reportType?: ListThingRegistrationTaskReportsResponseReportType | null;
		nextToken?: string | null;
	}

	export enum ListThingRegistrationTaskReportsResponseReportType { ERRORS = 0, RESULTS = 1 }

	export interface ListThingRegistrationTasksResponse {
		taskIds?: Array<string> | null;
		nextToken?: string | null;
	}


	/** The output for the ListThingTypes operation. */
	export interface ListThingTypesResponse {
		thingTypes?: Array<ThingTypeDefinition> | null;
		nextToken?: string | null;
	}


	/** The definition of the thing type, including thing type name and description. */
	export interface ThingTypeDefinition {
		thingTypeName?: string | null;
		thingTypeArn?: string | null;

		/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: ThingTypeProperties | null;

		/** The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
		thingTypeMetadata?: ThingTypeMetadata | null;
	}


	/** The output from the ListThings operation. */
	export interface ListThingsResponse {
		things?: Array<ThingAttribute> | null;
		nextToken?: string | null;
	}


	/** The properties of the thing, including thing name, thing type name, and a list of thing attributes. */
	export interface ThingAttribute {
		thingName?: string | null;
		thingTypeName?: string | null;
		thingArn?: string | null;
		attributes?: Attributes | null;
		version?: number | null;
	}

	export interface ListThingsInBillingGroupResponse {
		things?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListThingsInThingGroupResponse {
		things?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface ListTopicRuleDestinationsResponse {
		destinationSummaries?: Array<TopicRuleDestinationSummary> | null;
		nextToken?: string | null;
	}


	/** Information about the topic rule destination. */
	export interface TopicRuleDestinationSummary {
		arn?: string | null;
		status?: TopicRuleDestinationStatus | null;
		statusReason?: string | null;

		/** Information about an HTTP URL destination. */
		httpUrlSummary?: HttpUrlDestinationSummary | null;
	}


	/** Information about an HTTP URL destination. */
	export interface HttpUrlDestinationSummary {
		confirmationUrl?: string | null;
	}


	/** The output from the ListTopicRules operation. */
	export interface ListTopicRulesResponse {
		rules?: Array<TopicRuleListItem> | null;
		nextToken?: string | null;
	}


	/** Describes a rule. */
	export interface TopicRuleListItem {
		ruleArn?: string | null;
		ruleName?: string | null;
		topicPattern?: string | null;
		createdAt?: Date | null;
		ruleDisabled?: boolean | null;
	}

	export interface ListV2LoggingLevelsResponse {
		logTargetConfigurations?: Array<LogTargetConfiguration> | null;
		nextToken?: string | null;
	}


	/** The target configuration. */
	export interface LogTargetConfiguration {

		/** A log target. */
		logTarget?: LogTarget | null;
		logLevel?: EnableIoTLoggingParamsLogLevel | null;
	}


	/** A log target. */
	export interface LogTarget {
		targetType: LogTargetTargetType;
		targetName?: string | null;
	}

	export enum LogTargetTargetType { DEFAULT = 0, THING_GROUP = 1 }

	export interface ListViolationEventsResponse {
		violationEvents?: Array<ViolationEvent> | null;
		nextToken?: string | null;
	}


	/** Information about a Device Defender security profile behavior violation. */
	export interface ViolationEvent {
		violationId?: string | null;
		thingName?: string | null;
		securityProfileName?: string | null;

		/** A Device Defender security profile behavior. */
		behavior?: Behavior | null;

		/** The value to be compared with the <code>metric</code>. */
		metricValue?: MetricValue | null;
		violationEventType?: ViolationEventViolationEventType | null;
		violationEventTime?: Date | null;
	}

	export enum ViolationEventViolationEventType { in_alarm = 0, alarm_cleared = 1, alarm_invalidated = 2 }


	/** The output from the RegisterCACertificateResponse operation. */
	export interface RegisterCACertificateResponse {
		certificateArn?: string | null;
		certificateId?: string | null;
	}

	export interface RegistrationCodeValidationException {
	}


	/** The output from the RegisterCertificate operation. */
	export interface RegisterCertificateResponse {
		certificateArn?: string | null;
		certificateId?: string | null;
	}

	export interface CertificateConflictException {
	}

	export interface RegisterCertificateWithoutCAResponse {
		certificateArn?: string | null;
		certificateId?: string | null;
	}

	export interface RegisterThingResponse {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;
		resourceArns?: ResourceArns | null;
	}

	export interface ResourceArns {
	}

	export interface ResourceRegistrationFailureException {
	}

	export interface RemoveThingFromBillingGroupResponse {
	}

	export interface RemoveThingFromThingGroupResponse {
	}

	export interface SearchIndexResponse {
		nextToken?: string | null;
		things?: Array<ThingDocument> | null;
		thingGroups?: Array<ThingGroupDocument> | null;
	}


	/** The thing search index document. */
	export interface ThingDocument {
		thingName?: string | null;
		thingId?: string | null;
		thingTypeName?: string | null;
		thingGroupNames?: Array<string> | null;
		attributes?: Attributes | null;
		shadow?: string | null;

		/** The connectivity status of the thing. */
		connectivity?: ThingConnectivity | null;
	}


	/** The connectivity status of the thing. */
	export interface ThingConnectivity {
		connected?: boolean | null;
		timestamp?: number | null;
	}


	/** The thing group search index document. */
	export interface ThingGroupDocument {
		thingGroupName?: string | null;
		thingGroupId?: string | null;
		thingGroupDescription?: string | null;
		attributes?: Attributes | null;
		parentGroupNames?: Array<string> | null;
	}

	export interface SetDefaultAuthorizerResponse {
		authorizerName?: string | null;
		authorizerArn?: string | null;
	}

	export enum LogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }

	export enum LogTargetType { DEFAULT = 0, THING_GROUP = 1 }

	export interface StartAuditMitigationActionsTaskResponse {
		taskId?: string | null;
	}

	export interface TaskAlreadyExistsException {
	}

	export interface StartOnDemandAuditTaskResponse {
		taskId?: string | null;
	}

	export interface StartThingRegistrationTaskResponse {
		taskId?: string | null;
	}

	export interface StopThingRegistrationTaskResponse {
	}

	export interface TagResourceResponse {
	}

	export interface TestAuthorizationResponse {
		authResults?: Array<AuthResult> | null;
	}


	/** The authorizer result. */
	export interface AuthResult {

		/** A collection of authorization information. */
		authInfo?: AuthInfo | null;

		/** Contains information that allowed the authorization. */
		allowed?: Allowed | null;

		/** Contains information that denied the authorization. */
		denied?: Denied | null;
		authDecision?: AuthResultAuthDecision | null;
		missingContextValues?: Array<string> | null;
	}


	/** A collection of authorization information. */
	export interface AuthInfo {
		actionType?: AuthInfoActionType | null;
		resources: Array<string>;
	}

	export enum AuthInfoActionType { PUBLISH = 0, SUBSCRIBE = 1, RECEIVE = 2, CONNECT = 3 }


	/** Contains information that allowed the authorization. */
	export interface Allowed {
		policies?: Array<Policy> | null;
	}


	/** Contains information that denied the authorization. */
	export interface Denied {

		/** Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny. */
		implicitDeny?: ImplicitDeny | null;

		/** Information that explicitly denies authorization. */
		explicitDeny?: ExplicitDeny | null;
	}


	/** Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny. */
	export interface ImplicitDeny {
		policies?: Array<Policy> | null;
	}


	/** Information that explicitly denies authorization. */
	export interface ExplicitDeny {
		policies?: Array<Policy> | null;
	}

	export enum AuthResultAuthDecision { ALLOWED = 0, EXPLICIT_DENY = 1, IMPLICIT_DENY = 2 }

	export interface TestInvokeAuthorizerResponse {
		isAuthenticated?: boolean | null;
		principalId?: string | null;
		policyDocuments?: Array<string> | null;
		refreshAfterInSeconds?: number | null;
		disconnectAfterInSeconds?: number | null;
	}

	export interface HttpHeaders {
	}

	export interface InvalidResponseException {
	}


	/** The output from the TransferCertificate operation. */
	export interface TransferCertificateResponse {
		transferredCertificateArn?: string | null;
	}

	export interface TransferConflictException {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateAccountAuditConfigurationResponse {
	}


	/** Information about the targets to which audit notifications are sent. */
	export interface AuditNotificationTarget {
		targetArn?: string | null;
		roleArn?: string | null;
		enabled?: boolean | null;
	}


	/** Which audit checks are enabled and disabled for this account. */
	export interface AuditCheckConfiguration {
		enabled?: boolean | null;
	}

	export interface UpdateAuthorizerResponse {
		authorizerName?: string | null;
		authorizerArn?: string | null;
	}

	export interface UpdateBillingGroupResponse {
		version?: number | null;
	}

	export interface UpdateDimensionResponse {
		name?: string | null;
		arn?: string | null;
		type?: DescribeDimensionResponseType | null;
		stringValues?: Array<string> | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}

	export interface UpdateDomainConfigurationResponse {
		domainConfigurationName?: string | null;
		domainConfigurationArn?: string | null;
	}

	export interface UpdateDynamicThingGroupResponse {
		version?: number | null;
	}

	export interface UpdateEventConfigurationsResponse {
	}


	/** Configuration. */
	export interface Configuration {
		Enabled?: boolean | null;
	}

	export interface UpdateIndexingConfigurationResponse {
	}

	export enum ThingIndexingMode { OFF = 0, REGISTRY = 1, REGISTRY_AND_SHADOW = 2 }

	export enum ThingConnectivityIndexingMode { OFF = 0, STATUS = 1 }

	export enum ThingGroupIndexingMode { OFF = 0, ON = 1 }

	export interface UpdateMitigationActionResponse {
		actionArn?: string | null;
		actionId?: string | null;
	}

	export interface UpdateProvisioningTemplateResponse {
	}

	export interface UpdateRoleAliasResponse {
		roleAlias?: string | null;
		roleAliasArn?: string | null;
	}

	export interface UpdateScheduledAuditResponse {
		scheduledAuditArn?: string | null;
	}

	export interface UpdateSecurityProfileResponse {
		securityProfileName?: string | null;
		securityProfileArn?: string | null;
		securityProfileDescription?: string | null;
		behaviors?: Array<Behavior> | null;
		alertTargets?: AlertTargets | null;
		additionalMetricsToRetain?: Array<string> | null;
		additionalMetricsToRetainV2?: Array<MetricToRetain> | null;
		version?: number | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}

	export interface UpdateStreamResponse {
		streamId?: string | null;
		streamArn?: string | null;
		description?: string | null;
		streamVersion?: number | null;
	}


	/** The output from the UpdateThing operation. */
	export interface UpdateThingResponse {
	}

	export interface UpdateThingGroupResponse {
		version?: number | null;
	}

	export interface UpdateThingGroupsForThingResponse {
	}

	export interface UpdateTopicRuleDestinationResponse {
	}

	export interface ValidateSecurityProfileBehaviorsResponse {
		valid?: boolean | null;
		validationErrors?: Array<ValidationError> | null;
	}


	/** Information about an error found in a behavior specification. */
	export interface ValidationError {
		errorMessage?: string | null;
	}

	export enum AbortAction { CANCEL = 0 }

	export enum JobExecutionFailureType { FAILED = 0, REJECTED = 1, TIMED_OUT = 2, ALL = 3 }


	/** The input for the AcceptCertificateTransfer operation. */
	export interface AcceptCertificateTransferRequest {
	}

	export enum ActionType { PUBLISH = 0, SUBSCRIBE = 1, RECEIVE = 2, CONNECT = 3 }

	export interface AddThingToBillingGroupRequest {
		billingGroupName?: string | null;
		billingGroupArn?: string | null;
		thingName?: string | null;
		thingArn?: string | null;
	}

	export interface AddThingToThingGroupRequest {
		thingGroupName?: string | null;
		thingGroupArn?: string | null;
		thingName?: string | null;
		thingArn?: string | null;
		overrideDynamicGroups?: boolean | null;
	}


	/** The type of alert target: one of "SNS". */
	export enum AlertTargetType { SNS = 0 }

	export interface AssociateTargetsWithJobRequest {
		targets: Array<string>;
		comment?: string | null;
	}

	export interface AttachPolicyRequest {
		target: string;
	}


	/** The input for the AttachPrincipalPolicy operation. */
	export interface AttachPrincipalPolicyRequest {
	}

	export interface AttachSecurityProfileRequest {
	}


	/** The input for the AttachThingPrincipal operation. */
	export interface AttachThingPrincipalRequest {
	}

	export enum AuditCheckRunStatus { IN_PROGRESS = 0, WAITING_FOR_DATA_COLLECTION = 1, CANCELED = 2, COMPLETED_COMPLIANT = 3, COMPLETED_NON_COMPLIANT = 4, FAILED = 5 }


	/** Information about the audit check. */
	export interface AuditCheckDetails {
		checkRunStatus?: AuditCheckRunStatus | null;
		checkCompliant?: boolean | null;
		totalResourcesCount?: number | null;
		nonCompliantResourcesCount?: number | null;
		errorCode?: string | null;
		message?: string | null;
	}

	export enum AuditFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum AuditMitigationActionsExecutionStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3, SKIPPED = 4, PENDING = 5 }

	export enum AuditMitigationActionsTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }


	/** Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask. */
	export interface TaskStatisticsForAuditCheck {
		totalFindingsCount?: number | null;
		failedFindingsCount?: number | null;
		succeededFindingsCount?: number | null;
		skippedFindingsCount?: number | null;
		canceledFindingsCount?: number | null;
	}

	export enum AuditNotificationType { SNS = 0 }

	export enum AuditTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }

	export enum AuditTaskType { ON_DEMAND_AUDIT_TASK = 0, SCHEDULED_AUDIT_TASK = 1 }

	export enum AuthDecision { ALLOWED = 0, EXPLICIT_DENY = 1, IMPLICIT_DENY = 2 }

	export enum AuthorizerStatus { ACTIVE = 0, INACTIVE = 1 }

	export enum AutoRegistrationStatus { ENABLE = 0, DISABLE = 1 }

	export enum ComparisonOperator { less_than = 0, less_than_equals = 1, greater_than = 2, greater_than_equals = 3, in_cidr_set = 4, not_in_cidr_set = 5, in_port_set = 6, not_in_port_set = 7 }

	export enum CACertificateStatus { ACTIVE = 0, INACTIVE = 1 }

	export enum CACertificateUpdateAction { DEACTIVATE = 0 }

	export interface CancelAuditMitigationActionsTaskRequest {
	}

	export interface CancelAuditTaskRequest {
	}


	/** The input for the CancelCertificateTransfer operation. */
	export interface CancelCertificateTransferRequest {
	}

	export interface CancelJobExecutionRequest {
		expectedVersion?: number | null;
		statusDetails?: DetailsMap | null;
	}

	export interface CancelJobRequest {
		reasonCode?: string | null;
		comment?: string | null;
	}

	export enum CannedAccessControlList { _private = 0, public_read = 1, public_read_write = 2, aws_exec_read = 3, authenticated_read = 4, bucket_owner_read = 5, bucket_owner_full_control = 6, log_delivery_write = 7 }

	export enum CertificateStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }

	export enum CertificateMode { DEFAULT = 0, SNI_ONLY = 1 }

	export interface ClearDefaultAuthorizerRequest {
	}

	export interface ConfirmTopicRuleDestinationRequest {
	}

	export interface CreateAuthorizerRequest {
		authorizerFunctionArn: string;
		tokenKeyName?: string | null;
		tokenSigningPublicKeys?: PublicKeyMap | null;
		status?: AuthorizerDescriptionStatus | null;
		tags?: Array<Tag> | null;
		signingDisabled?: boolean | null;
	}

	export interface CreateBillingGroupRequest {

		/** The properties of a billing group. */
		billingGroupProperties?: BillingGroupProperties | null;
		tags?: Array<Tag> | null;
	}


	/** The input for the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrRequest {
		certificateSigningRequest: string;
	}

	export enum DimensionType { TOPIC_FILTER = 0 }

	export interface CreateDimensionRequest {
		type: DescribeDimensionResponseType;
		stringValues: Array<string>;
		tags?: Array<Tag> | null;
		clientRequestToken: string;
	}

	export enum ServiceType { DATA = 0, CREDENTIAL_PROVIDER = 1, JOBS = 2 }

	export interface CreateDomainConfigurationRequest {
		domainName?: string | null;
		serverCertificateArns?: Array<string> | null;
		validationCertificateArn?: string | null;

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: AuthorizerConfig | null;
		serviceType?: DescribeDomainConfigurationResponseServiceType | null;
		tags?: Array<Tag> | null;
	}

	export interface CreateDynamicThingGroupRequest {

		/** Thing group properties. */
		thingGroupProperties?: ThingGroupProperties | null;
		indexName?: string | null;
		queryString: string;
		queryVersion?: string | null;
		tags?: Array<Tag> | null;
	}

	export enum TargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export interface CreateJobRequest {
		targets: Array<string>;
		documentSource?: string | null;
		document?: string | null;
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig | null;
		targetSelection?: JobTargetSelection | null;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | null;

		/** Details of abort criteria to abort the job. */
		abortConfig?: AbortConfig | null;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig | null;
		tags?: Array<Tag> | null;
	}


	/** The input for the CreateKeysAndCertificate operation. */
	export interface CreateKeysAndCertificateRequest {
	}

	export interface CreateMitigationActionRequest {
		roleArn: string;

		/**
		 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
		 * Required
		 */
		actionParams: MitigationActionParams;
		tags?: Array<Tag> | null;
	}

	export interface CreateOTAUpdateRequest {
		description?: string | null;
		targets: Array<string>;
		protocols?: Array<Protocol> | null;
		targetSelection?: JobTargetSelection | null;

		/** Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig | null;

		/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig | null;
		files: Array<OTAUpdateFile>;
		roleArn: string;
		additionalParameters?: AdditionalParameterMap | null;
		tags?: Array<Tag> | null;
	}

	export enum OTAUpdateStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, CREATE_FAILED = 3 }


	/** The input for the CreatePolicy operation. */
	export interface CreatePolicyRequest {
		policyDocument: string;
		tags?: Array<Tag> | null;
	}


	/** The input for the CreatePolicyVersion operation. */
	export interface CreatePolicyVersionRequest {
		policyDocument: string;
	}

	export interface CreateProvisioningClaimRequest {
	}

	export interface CreateProvisioningTemplateRequest {
		templateName: string;
		description?: string | null;
		templateBody: string;
		enabled?: boolean | null;
		provisioningRoleArn: string;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: ProvisioningHook | null;
		tags?: Array<Tag> | null;
	}

	export interface CreateProvisioningTemplateVersionRequest {
		templateBody: string;
	}

	export interface CreateRoleAliasRequest {
		roleArn: string;
		credentialDurationSeconds?: number | null;
		tags?: Array<Tag> | null;
	}

	export enum DayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface CreateScheduledAuditRequest {
		frequency: DescribeScheduledAuditResponseFrequency;
		dayOfMonth?: string | null;
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;
		targetCheckNames: Array<string>;
		tags?: Array<Tag> | null;
	}

	export interface CreateSecurityProfileRequest {
		securityProfileDescription?: string | null;
		behaviors?: Array<Behavior> | null;
		alertTargets?: AlertTargets | null;
		additionalMetricsToRetain?: Array<string> | null;
		additionalMetricsToRetainV2?: Array<MetricToRetain> | null;
		tags?: Array<Tag> | null;
	}

	export interface CreateStreamRequest {
		description?: string | null;
		files: Array<StreamFile>;
		roleArn: string;
		tags?: Array<Tag> | null;
	}

	export interface CreateThingGroupRequest {
		parentGroupName?: string | null;

		/** Thing group properties. */
		thingGroupProperties?: ThingGroupProperties | null;
		tags?: Array<Tag> | null;
	}


	/** The input for the CreateThing operation. */
	export interface CreateThingRequest {
		thingTypeName?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload | null;
		billingGroupName?: string | null;
	}


	/** The input for the CreateThingType operation. */
	export interface CreateThingTypeRequest {

		/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: ThingTypeProperties | null;
		tags?: Array<Tag> | null;
	}


	/** Configuration of the topic rule destination. */
	export interface TopicRuleDestinationConfiguration {

		/** HTTP URL destination configuration used by the topic rule's HTTP action. */
		httpUrlConfiguration?: HttpUrlDestinationConfiguration | null;
	}

	export interface CreateTopicRuleDestinationRequest {

		/**
		 * Configuration of the topic rule destination.
		 * Required
		 */
		destinationConfiguration: TopicRuleDestinationConfiguration;
	}


	/** Describes a rule. */
	export interface TopicRulePayload {
		sql: string;
		description?: string | null;
		actions: Array<Action>;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string | null;

		/** Describes the actions associated with a rule. */
		errorAction?: Action | null;
	}


	/** The input for the CreateTopicRule operation. */
	export interface CreateTopicRuleRequest {

		/**
		 * Describes a rule.
		 * Required
		 */
		topicRulePayload: TopicRulePayload;
	}

	export interface DeleteAccountAuditConfigurationRequest {
	}

	export interface DeleteAuthorizerRequest {
	}

	export interface DeleteBillingGroupRequest {
	}


	/** Input for the DeleteCACertificate operation. */
	export interface DeleteCACertificateRequest {
	}


	/** The input for the DeleteCertificate operation. */
	export interface DeleteCertificateRequest {
	}

	export interface DeleteDimensionRequest {
	}

	export interface DeleteDomainConfigurationRequest {
	}

	export interface DeleteDynamicThingGroupRequest {
	}

	export interface DeleteJobExecutionRequest {
	}

	export interface DeleteJobRequest {
	}

	export interface DeleteMitigationActionRequest {
	}

	export interface DeleteOTAUpdateRequest {
	}


	/** The input for the DeletePolicy operation. */
	export interface DeletePolicyRequest {
	}


	/** The input for the DeletePolicyVersion operation. */
	export interface DeletePolicyVersionRequest {
	}

	export interface DeleteProvisioningTemplateRequest {
	}

	export interface DeleteProvisioningTemplateVersionRequest {
	}


	/** The input for the DeleteRegistrationCode operation. */
	export interface DeleteRegistrationCodeRequest {
	}

	export interface DeleteRoleAliasRequest {
	}

	export interface DeleteScheduledAuditRequest {
	}

	export interface DeleteSecurityProfileRequest {
	}

	export interface DeleteStreamRequest {
	}

	export interface DeleteThingGroupRequest {
	}


	/** The input for the DeleteThing operation. */
	export interface DeleteThingRequest {
	}


	/** The input for the DeleteThingType operation. */
	export interface DeleteThingTypeRequest {
	}

	export interface DeleteTopicRuleDestinationRequest {
	}


	/** The input for the DeleteTopicRule operation. */
	export interface DeleteTopicRuleRequest {
	}

	export interface DeleteV2LoggingLevelRequest {
	}


	/** The input for the DeprecateThingType operation. */
	export interface DeprecateThingTypeRequest {
		undoDeprecate?: boolean | null;
	}

	export interface DescribeAccountAuditConfigurationRequest {
	}

	export interface DescribeAuditFindingRequest {
	}

	export interface DescribeAuditMitigationActionsTaskRequest {
	}

	export interface DescribeAuditTaskRequest {
	}

	export interface DescribeAuthorizerRequest {
	}

	export interface DescribeBillingGroupRequest {
	}


	/** The input for the DescribeCACertificate operation. */
	export interface DescribeCACertificateRequest {
	}


	/** The input for the DescribeCertificate operation. */
	export interface DescribeCertificateRequest {
	}

	export interface DescribeDefaultAuthorizerRequest {
	}

	export interface DescribeDimensionRequest {
	}

	export interface DescribeDomainConfigurationRequest {
	}

	export enum DomainConfigurationStatus { ENABLED = 0, DISABLED = 1 }

	export enum DomainType { ENDPOINT = 0, AWS_MANAGED = 1, CUSTOMER_MANAGED = 2 }


	/** The input for the DescribeEndpoint operation. */
	export interface DescribeEndpointRequest {
	}

	export interface DescribeEventConfigurationsRequest {
	}

	export interface DescribeIndexRequest {
	}

	export enum IndexStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }

	export interface DescribeJobExecutionRequest {
	}

	export interface DescribeJobRequest {
	}

	export interface DescribeMitigationActionRequest {
	}

	export enum MitigationActionType { UPDATE_DEVICE_CERTIFICATE = 0, UPDATE_CA_CERTIFICATE = 1, ADD_THINGS_TO_THING_GROUP = 2, REPLACE_DEFAULT_POLICY_VERSION = 3, ENABLE_IOT_LOGGING = 4, PUBLISH_FINDING_TO_SNS = 5 }

	export interface DescribeProvisioningTemplateRequest {
	}

	export interface DescribeProvisioningTemplateVersionRequest {
	}

	export interface DescribeRoleAliasRequest {
	}

	export interface DescribeScheduledAuditRequest {
	}

	export interface DescribeSecurityProfileRequest {
	}

	export interface DescribeStreamRequest {
	}

	export interface DescribeThingGroupRequest {
	}

	export enum DynamicGroupStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }

	export interface DescribeThingRegistrationTaskRequest {
	}

	export enum Status { InProgress = 0, Completed = 1, Failed = 2, Cancelled = 3, Cancelling = 4 }


	/** The input for the DescribeThing operation. */
	export interface DescribeThingRequest {
	}


	/** The input for the DescribeThingType operation. */
	export interface DescribeThingTypeRequest {
	}

	export interface DetachPolicyRequest {
		target: string;
	}


	/** The input for the DetachPrincipalPolicy operation. */
	export interface DetachPrincipalPolicyRequest {
	}

	export interface DetachSecurityProfileRequest {
	}


	/** The input for the DetachThingPrincipal operation. */
	export interface DetachThingPrincipalRequest {
	}

	export enum DeviceCertificateUpdateAction { DEACTIVATE = 0 }

	export enum DimensionValueOperator { IN = 0, NOT_IN = 1 }


	/** The input for the DisableTopicRuleRequest operation. */
	export interface DisableTopicRuleRequest {
	}

	export enum DynamoKeyType { STRING = 0, NUMBER = 1 }


	/** The input for the EnableTopicRuleRequest operation. */
	export interface EnableTopicRuleRequest {
	}

	export enum EventType { THING = 0, THING_GROUP = 1, THING_TYPE = 2, THING_GROUP_MEMBERSHIP = 3, THING_GROUP_HIERARCHY = 4, THING_TYPE_ASSOCIATION = 5, JOB = 6, JOB_EXECUTION = 7, POLICY = 8, CERTIFICATE = 9, CA_CERTIFICATE = 10 }

	export interface GetCardinalityRequest {
		indexName?: string | null;
		queryString: string;
		aggregationField?: string | null;
		queryVersion?: string | null;
	}

	export interface GetEffectivePoliciesRequest {
		principal?: string | null;
		cognitoIdentityPoolId?: string | null;
	}

	export interface GetIndexingConfigurationRequest {
	}

	export interface GetJobDocumentRequest {
	}


	/** The input for the GetLoggingOptions operation. */
	export interface GetLoggingOptionsRequest {
	}

	export interface GetOTAUpdateRequest {
	}

	export interface GetPercentilesRequest {
		indexName?: string | null;
		queryString: string;
		aggregationField?: string | null;
		queryVersion?: string | null;
		percents?: Array<number> | null;
	}


	/** The input for the GetPolicy operation. */
	export interface GetPolicyRequest {
	}


	/** The input for the GetPolicyVersion operation. */
	export interface GetPolicyVersionRequest {
	}


	/** The input to the GetRegistrationCode operation. */
	export interface GetRegistrationCodeRequest {
	}

	export interface GetStatisticsRequest {
		indexName?: string | null;
		queryString: string;
		aggregationField?: string | null;
		queryVersion?: string | null;
	}

	export interface GetTopicRuleDestinationRequest {
	}


	/** The input for the GetTopicRule operation. */
	export interface GetTopicRuleRequest {
	}

	export interface GetV2LoggingOptionsRequest {
	}


	/** Specifies the HTTP context to use for the test authorizer request. */
	export interface HttpContext {
		headers?: HttpHeaders | null;
		queryString?: string | null;
	}

	export interface ListActiveViolationsRequest {
	}

	export interface ListAttachedPoliciesRequest {
	}

	export interface ListAuditFindingsRequest {
		taskId?: string | null;

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier | null;
		maxResults?: number | null;
		nextToken?: string | null;
		startTime?: Date | null;
		endTime?: Date | null;
	}

	export interface ListAuditMitigationActionsExecutionsRequest {
	}

	export interface ListAuditMitigationActionsTasksRequest {
	}

	export interface ListAuditTasksRequest {
	}

	export interface ListAuthorizersRequest {
	}

	export interface ListBillingGroupsRequest {
	}


	/** Input for the ListCACertificates operation. */
	export interface ListCACertificatesRequest {
	}


	/** The input to the ListCertificatesByCA operation. */
	export interface ListCertificatesByCARequest {
	}


	/** The input for the ListCertificates operation. */
	export interface ListCertificatesRequest {
	}

	export interface ListDimensionsRequest {
	}

	export interface ListDomainConfigurationsRequest {
	}

	export interface ListIndicesRequest {
	}

	export interface ListJobExecutionsForJobRequest {
	}

	export interface ListJobExecutionsForThingRequest {
	}

	export interface ListJobsRequest {
	}

	export interface ListMitigationActionsRequest {
	}

	export interface ListOTAUpdatesRequest {
	}


	/** The input to the ListOutgoingCertificates operation. */
	export interface ListOutgoingCertificatesRequest {
	}


	/** The input for the ListPolicies operation. */
	export interface ListPoliciesRequest {
	}


	/** The input for the ListPolicyPrincipals operation. */
	export interface ListPolicyPrincipalsRequest {
	}


	/** The input for the ListPolicyVersions operation. */
	export interface ListPolicyVersionsRequest {
	}


	/** The input for the ListPrincipalPolicies operation. */
	export interface ListPrincipalPoliciesRequest {
	}


	/** The input for the ListPrincipalThings operation. */
	export interface ListPrincipalThingsRequest {
	}

	export interface ListProvisioningTemplateVersionsRequest {
	}

	export interface ListProvisioningTemplatesRequest {
	}

	export interface ListRoleAliasesRequest {
	}

	export interface ListScheduledAuditsRequest {
	}

	export interface ListSecurityProfilesForTargetRequest {
	}

	export interface ListSecurityProfilesRequest {
	}

	export interface ListStreamsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface ListTargetsForPolicyRequest {
	}

	export interface ListTargetsForSecurityProfileRequest {
	}

	export interface ListThingGroupsForThingRequest {
	}

	export interface ListThingGroupsRequest {
	}


	/** The input for the ListThingPrincipal operation. */
	export interface ListThingPrincipalsRequest {
	}

	export enum ReportType { ERRORS = 0, RESULTS = 1 }

	export interface ListThingRegistrationTaskReportsRequest {
	}

	export interface ListThingRegistrationTasksRequest {
	}


	/** The input for the ListThingTypes operation. */
	export interface ListThingTypesRequest {
	}

	export interface ListThingsInBillingGroupRequest {
	}

	export interface ListThingsInThingGroupRequest {
	}


	/** The input for the ListThings operation. */
	export interface ListThingsRequest {
	}

	export interface ListTopicRuleDestinationsRequest {
	}


	/** The input for the ListTopicRules operation. */
	export interface ListTopicRulesRequest {
	}

	export interface ListV2LoggingLevelsRequest {
	}

	export interface ListViolationEventsRequest {
	}


	/** Describes the logging options payload. */
	export interface LoggingOptionsPayload {
		roleArn: string;
		logLevel?: EnableIoTLoggingParamsLogLevel | null;
	}

	export enum MessageFormat { RAW = 0, JSON = 1 }


	/** Specifies the MQTT context to use for the test authorizer request */
	export interface MqttContext {
		username?: string | null;
		password?: string | null;
		clientId?: string | null;
	}

	export enum ResourceType { DEVICE_CERTIFICATE = 0, CA_CERTIFICATE = 1, IOT_POLICY = 2, COGNITO_IDENTITY_POOL = 3, CLIENT_ID = 4, ACCOUNT_SETTINGS = 5, ROLE_ALIAS = 6, IAM_ROLE = 7 }

	export interface Parameters {
	}

	export enum PolicyTemplateName { BLANK_POLICY = 0 }


	/** The input to the RegisterCACertificate operation. */
	export interface RegisterCACertificateRequest {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificate: string;

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate: string;

		/** The registration configuration. */
		registrationConfig?: RegistrationConfig | null;
		tags?: Array<Tag> | null;
	}


	/** The input to the RegisterCertificate operation. */
	export interface RegisterCertificateRequest {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificatePem?: string | null;
		status?: CertificateDescriptionStatus | null;
	}

	export interface RegisterCertificateWithoutCARequest {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;
		status?: CertificateDescriptionStatus | null;
	}

	export interface RegisterThingRequest {
		templateBody: string;
		parameters?: Parameters | null;
	}


	/** The input for the RejectCertificateTransfer operation. */
	export interface RejectCertificateTransferRequest {
		rejectReason?: string | null;
	}

	export interface RemoveThingFromBillingGroupRequest {
		billingGroupName?: string | null;
		billingGroupArn?: string | null;
		thingName?: string | null;
		thingArn?: string | null;
	}

	export interface RemoveThingFromThingGroupRequest {
		thingGroupName?: string | null;
		thingGroupArn?: string | null;
		thingName?: string | null;
		thingArn?: string | null;
	}


	/** The input for the ReplaceTopicRule operation. */
	export interface ReplaceTopicRuleRequest {

		/**
		 * Describes a rule.
		 * Required
		 */
		topicRulePayload: TopicRulePayload;
	}

	export interface SearchIndexRequest {
		indexName?: string | null;
		queryString: string;
		nextToken?: string | null;
		maxResults?: number | null;
		queryVersion?: string | null;
	}

	export enum ServerCertificateStatus { INVALID = 0, VALID = 1 }

	export interface SetDefaultAuthorizerRequest {
		authorizerName: string;
	}


	/** The input for the SetDefaultPolicyVersion operation. */
	export interface SetDefaultPolicyVersionRequest {
	}


	/** The input for the SetLoggingOptions operation. */
	export interface SetLoggingOptionsRequest {

		/**
		 * Describes the logging options payload.
		 * Required
		 */
		loggingOptionsPayload: LoggingOptionsPayload;
	}

	export interface SetV2LoggingLevelRequest {

		/**
		 * A log target.
		 * Required
		 */
		logTarget: LogTarget;
		logLevel: EnableIoTLoggingParamsLogLevel;
	}

	export interface SetV2LoggingOptionsRequest {
		roleArn?: string | null;
		defaultLogLevel?: EnableIoTLoggingParamsLogLevel | null;
		disableAllLogs?: boolean | null;
	}

	export interface StartAuditMitigationActionsTaskRequest {

		/**
		 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
		 * Required
		 */
		target: AuditMitigationActionsTaskTarget;
		auditCheckToActionsMapping: AuditCheckToActionsMapping;
		clientRequestToken: string;
	}

	export interface StartOnDemandAuditTaskRequest {
		targetCheckNames: Array<string>;
	}

	export interface StartThingRegistrationTaskRequest {
		templateBody: string;
		inputFileBucket: string;
		inputFileKey: string;
		roleArn: string;
	}

	export interface StopThingRegistrationTaskRequest {
	}

	export interface TagResourceRequest {
		resourceArn: string;
		tags: Array<Tag>;
	}

	export interface TestAuthorizationRequest {
		principal?: string | null;
		cognitoIdentityPoolId?: string | null;
		authInfos: Array<AuthInfo>;
		policyNamesToAdd?: Array<string> | null;
		policyNamesToSkip?: Array<string> | null;
	}


	/** Specifies the TLS context to use for the test authorizer request. */
	export interface TlsContext {
		serverName?: string | null;
	}

	export interface TestInvokeAuthorizerRequest {
		token?: string | null;
		tokenSignature?: string | null;

		/** Specifies the HTTP context to use for the test authorizer request. */
		httpContext?: HttpContext | null;

		/** Specifies the MQTT context to use for the test authorizer request */
		mqttContext?: MqttContext | null;

		/** Specifies the TLS context to use for the test authorizer request. */
		tlsContext?: TlsContext | null;
	}


	/** The input for the TransferCertificate operation. */
	export interface TransferCertificateRequest {
		transferMessage?: string | null;
	}

	export interface UntagResourceRequest {
		resourceArn: string;
		tagKeys: Array<string>;
	}

	export interface UpdateAccountAuditConfigurationRequest {
		roleArn?: string | null;
		auditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations | null;
		auditCheckConfigurations?: AuditCheckConfigurations | null;
	}

	export interface UpdateAuthorizerRequest {
		authorizerFunctionArn?: string | null;
		tokenKeyName?: string | null;
		tokenSigningPublicKeys?: PublicKeyMap | null;
		status?: AuthorizerDescriptionStatus | null;
	}

	export interface UpdateBillingGroupRequest {

		/**
		 * The properties of a billing group.
		 * Required
		 */
		billingGroupProperties: BillingGroupProperties;
		expectedVersion?: number | null;
	}


	/** The input to the UpdateCACertificate operation. */
	export interface UpdateCACertificateRequest {

		/** The registration configuration. */
		registrationConfig?: RegistrationConfig | null;
		removeAutoRegistration?: boolean | null;
	}


	/** The input for the UpdateCertificate operation. */
	export interface UpdateCertificateRequest {
	}

	export interface UpdateDimensionRequest {
		stringValues: Array<string>;
	}

	export interface UpdateDomainConfigurationRequest {

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: AuthorizerConfig | null;
		domainConfigurationStatus?: DescribeDomainConfigurationResponseDomainConfigurationStatus | null;
		removeAuthorizerConfig?: boolean | null;
	}

	export interface UpdateDynamicThingGroupRequest {

		/**
		 * Thing group properties.
		 * Required
		 */
		thingGroupProperties: ThingGroupProperties;
		expectedVersion?: number | null;
		indexName?: string | null;
		queryString?: string | null;
		queryVersion?: string | null;
	}

	export interface UpdateEventConfigurationsRequest {
		eventConfigurations?: EventConfigurations | null;
	}

	export interface UpdateIndexingConfigurationRequest {

		/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
		thingIndexingConfiguration?: ThingIndexingConfiguration | null;

		/** Thing group indexing configuration. */
		thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration | null;
	}

	export interface UpdateJobRequest {
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig | null;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | null;

		/** Details of abort criteria to abort the job. */
		abortConfig?: AbortConfig | null;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig | null;
	}

	export interface UpdateMitigationActionRequest {
		roleArn?: string | null;

		/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: MitigationActionParams | null;
	}

	export interface UpdateProvisioningTemplateRequest {
		description?: string | null;
		enabled?: boolean | null;
		defaultVersionId?: number | null;
		provisioningRoleArn?: string | null;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: ProvisioningHook | null;
		removePreProvisioningHook?: boolean | null;
	}

	export interface UpdateRoleAliasRequest {
		roleArn?: string | null;
		credentialDurationSeconds?: number | null;
	}

	export interface UpdateScheduledAuditRequest {
		frequency?: DescribeScheduledAuditResponseFrequency | null;
		dayOfMonth?: string | null;
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;
		targetCheckNames?: Array<string> | null;
	}

	export interface UpdateSecurityProfileRequest {
		securityProfileDescription?: string | null;
		behaviors?: Array<Behavior> | null;
		alertTargets?: AlertTargets | null;
		additionalMetricsToRetain?: Array<string> | null;
		additionalMetricsToRetainV2?: Array<MetricToRetain> | null;
		deleteBehaviors?: boolean | null;
		deleteAlertTargets?: boolean | null;
		deleteAdditionalMetricsToRetain?: boolean | null;
	}

	export interface UpdateStreamRequest {
		description?: string | null;
		files?: Array<StreamFile> | null;
		roleArn?: string | null;
	}

	export interface UpdateThingGroupRequest {

		/**
		 * Thing group properties.
		 * Required
		 */
		thingGroupProperties: ThingGroupProperties;
		expectedVersion?: number | null;
	}

	export interface UpdateThingGroupsForThingRequest {
		thingName?: string | null;
		thingGroupsToAdd?: Array<string> | null;
		thingGroupsToRemove?: Array<string> | null;
		overrideDynamicGroups?: boolean | null;
	}


	/** The input for the UpdateThing operation. */
	export interface UpdateThingRequest {
		thingTypeName?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload | null;
		expectedVersion?: number | null;
		removeThingType?: boolean | null;
	}

	export interface UpdateTopicRuleDestinationRequest {
		arn: string;
		status: TopicRuleDestinationStatus;
	}

	export interface ValidateSecurityProfileBehaviorsRequest {
		behaviors: Array<Behavior>;
	}

	export enum ViolationEventType { in_alarm = 0, alarm_cleared = 1, alarm_invalidated = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p>
		 * Patch accept-certificate-transfer/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {void} Success
		 */
		AcceptCertificateTransfer(certificateId: string, setAsActive: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'accept-certificate-transfer/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '&setAsActive=' + setAsActive, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a thing to a billing group.
		 * Put billing-groups/addThingToBillingGroup
		 * @return {AddThingToBillingGroupResponse} Success
		 */
		AddThingToBillingGroup(requestBody: AddThingToBillingGroupPutBody): Observable<AddThingToBillingGroupResponse> {
			return this.http.put<AddThingToBillingGroupResponse>(this.baseUri + 'billing-groups/addThingToBillingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a thing to a thing group.
		 * Put thing-groups/addThingToThingGroup
		 * @return {AddThingToThingGroupResponse} Success
		 */
		AddThingToThingGroup(requestBody: AddThingToThingGroupPutBody): Observable<AddThingToThingGroupResponse> {
			return this.http.put<AddThingToThingGroupResponse>(this.baseUri + 'thing-groups/addThingToThingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul>
		 * Post jobs/{jobId}/targets
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {AssociateTargetsWithJobResponse} Success
		 */
		AssociateTargetsWithJob(jobId: string, requestBody: AssociateTargetsWithJobPostBody): Observable<AssociateTargetsWithJobResponse> {
			return this.http.post<AssociateTargetsWithJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/targets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a policy to the specified target.
		 * Put target-policies/{policyName}
		 * @param {string} policyName The name of the policy to attach.
		 * @return {void} Success
		 */
		AttachPolicy(policyName: string, requestBody: AttachPolicyPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'target-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Detaches a policy from the specified target.
		 * Post target-policies/{policyName}
		 * @param {string} policyName The policy to detach.
		 * @return {void} Success
		 */
		DetachPolicy(policyName: string, requestBody: DetachPolicyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'target-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>
		 * Put principal-policies/{policyName}#x-amzn-iot-principal
		 * @param {string} policyName The policy name.
		 * @return {void} Success
		 */
		AttachPrincipalPolicy(policyName: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'principal-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '#x-amzn-iot-principal', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>DetachPolicy</a> instead.</p>
		 * Delete principal-policies/{policyName}#x-amzn-iot-principal
		 * @param {string} policyName The name of the policy to detach.
		 * @return {void} Success
		 */
		DetachPrincipalPolicy(policyName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'principal-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '#x-amzn-iot-principal', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.
		 * Put security-profiles/{securityProfileName}/targets#securityProfileTargetArn
		 * @param {string} securityProfileName The security profile that is attached.
		 * @param {string} securityProfileTargetArn The ARN of the target (thing group) to which the security profile is attached.
		 * @return {AttachSecurityProfileResponse} Success
		 */
		AttachSecurityProfile(securityProfileName: string, securityProfileTargetArn: string): Observable<AttachSecurityProfileResponse> {
			return this.http.put<AttachSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets#securityProfileTargetArn&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), null, {});
		}

		/**
		 * Disassociates a Device Defender security profile from a thing group or from this account.
		 * Delete security-profiles/{securityProfileName}/targets#securityProfileTargetArn
		 * @param {string} securityProfileName The security profile that is detached.
		 * @param {string} securityProfileTargetArn The ARN of the thing group from which the security profile is detached.
		 * @return {DetachSecurityProfileResponse} Success
		 */
		DetachSecurityProfile(securityProfileName: string, securityProfileTargetArn: string): Observable<DetachSecurityProfileResponse> {
			return this.http.delete<DetachSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets#securityProfileTargetArn&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), {});
		}

		/**
		 * Attaches the specified principal to the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
		 * Put things/{thingName}/principals#x-amzn-principal
		 * @param {string} thingName The name of the thing.
		 * @return {AttachThingPrincipalResponse} Success
		 */
		AttachThingPrincipal(thingName: string): Observable<AttachThingPrincipalResponse> {
			return this.http.put<AttachThingPrincipalResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals#x-amzn-principal', null, {});
		}

		/**
		 * <p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
		 * Delete things/{thingName}/principals#x-amzn-principal
		 * @param {string} thingName The name of the thing.
		 * @return {DetachThingPrincipalResponse} Success
		 */
		DetachThingPrincipal(thingName: string): Observable<DetachThingPrincipalResponse> {
			return this.http.delete<DetachThingPrincipalResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals#x-amzn-principal', {});
		}

		/**
		 * Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.
		 * Put audit/mitigationactions/tasks/{taskId}/cancel
		 * @param {string} taskId The unique identifier for the task that you want to cancel. 
		 * @return {CancelAuditMitigationActionsTaskResponse} Success
		 */
		CancelAuditMitigationActionsTask(taskId: string): Observable<CancelAuditMitigationActionsTaskResponse> {
			return this.http.put<CancelAuditMitigationActionsTaskResponse>(this.baseUri + 'audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * Cancels an audit that is in progress. The audit can be either scheduled or on-demand. If the audit is not in progress, an "InvalidRequestException" occurs.
		 * Put audit/tasks/{taskId}/cancel
		 * @param {string} taskId The ID of the audit you want to cancel. You can only cancel an audit that is "IN_PROGRESS".
		 * @return {CancelAuditTaskResponse} Success
		 */
		CancelAuditTask(taskId: string): Observable<CancelAuditTaskResponse> {
			return this.http.put<CancelAuditTaskResponse>(this.baseUri + 'audit/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * <p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, AWS IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p>
		 * Patch cancel-certificate-transfer/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {void} Success
		 */
		CancelCertificateTransfer(certificateId: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'cancel-certificate-transfer/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a job.
		 * Put jobs/{jobId}/cancel
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {boolean} force <p>(Optional) If <code>true</code> job executions with status "IN_PROGRESS" and "QUEUED" are canceled, otherwise only job executions with status "QUEUED" are canceled. The default is <code>false</code>.</p> <p>Canceling a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to update the job execution status. Use caution and ensure that each device executing a job which is canceled is able to recover to a valid state.</p>
		 * @return {CancelJobResponse} Success
		 */
		CancelJob(jobId: string, force: boolean | null | undefined, requestBody: CancelJobPutBody): Observable<CancelJobResponse> {
			return this.http.put<CancelJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&force=' + force, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the execution of a job for a given thing.
		 * Put things/{thingName}/jobs/{jobId}/cancel
		 * @param {string} jobId The ID of the job to be canceled.
		 * @param {string} thingName The name of the thing whose execution of the job will be canceled.
		 * @param {boolean} force <p>(Optional) If <code>true</code> the job execution will be canceled if it has status IN_PROGRESS or QUEUED, otherwise the job execution will be canceled only if it has status QUEUED. If you attempt to cancel a job execution that is IN_PROGRESS, and you do not set <code>force</code> to <code>true</code>, then an <code>InvalidStateTransitionException</code> will be thrown. The default is <code>false</code>.</p> <p>Canceling a job execution which is "IN_PROGRESS", will cause the device to be unable to update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</p>
		 * @return {void} Success
		 */
		CancelJobExecution(jobId: string, thingName: string, force: boolean | null | undefined, requestBody: CancelJobExecutionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&force=' + force, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clears the default authorizer.
		 * Delete default-authorizer
		 * @return {ClearDefaultAuthorizerResponse} Success
		 */
		ClearDefaultAuthorizer(): Observable<ClearDefaultAuthorizerResponse> {
			return this.http.delete<ClearDefaultAuthorizerResponse>(this.baseUri + 'default-authorizer', {});
		}

		/**
		 * Describes the default authorizer.
		 * Get default-authorizer
		 * @return {DescribeDefaultAuthorizerResponse} Success
		 */
		DescribeDefaultAuthorizer(): Observable<DescribeDefaultAuthorizerResponse> {
			return this.http.get<DescribeDefaultAuthorizerResponse>(this.baseUri + 'default-authorizer', {});
		}

		/**
		 * Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.
		 * Post default-authorizer
		 * @return {SetDefaultAuthorizerResponse} Success
		 */
		SetDefaultAuthorizer(requestBody: SetDefaultAuthorizerPostBody): Observable<SetDefaultAuthorizerResponse> {
			return this.http.post<SetDefaultAuthorizerResponse>(this.baseUri + 'default-authorizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Confirms a topic rule destination. When you create a rule requiring a destination, AWS IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code> to confirm that you own or have access to the endpoint.
		 * Get confirmdestination/{confirmationToken}
		 * @param {string} confirmationToken The token used to confirm ownership or access to the topic rule confirmation URL.
		 * @return {ConfirmTopicRuleDestinationResponse} Success
		 */
		ConfirmTopicRuleDestination(confirmationToken: string): Observable<ConfirmTopicRuleDestinationResponse> {
			return this.http.get<ConfirmTopicRuleDestinationResponse>(this.baseUri + 'confirmdestination/' + (confirmationToken == null ? '' : encodeURIComponent(confirmationToken)), {});
		}

		/**
		 * Creates an authorizer.
		 * Post authorizer/{authorizerName}
		 * @param {string} authorizerName The authorizer name.
		 * @return {CreateAuthorizerResponse} Success
		 */
		CreateAuthorizer(authorizerName: string, requestBody: CreateAuthorizerPostBody): Observable<CreateAuthorizerResponse> {
			return this.http.post<CreateAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an authorizer.
		 * Delete authorizer/{authorizerName}
		 * @param {string} authorizerName The name of the authorizer to delete.
		 * @return {DeleteAuthorizerResponse} Success
		 */
		DeleteAuthorizer(authorizerName: string): Observable<DeleteAuthorizerResponse> {
			return this.http.delete<DeleteAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), {});
		}

		/**
		 * Describes an authorizer.
		 * Get authorizer/{authorizerName}
		 * @param {string} authorizerName The name of the authorizer to describe.
		 * @return {DescribeAuthorizerResponse} Success
		 */
		DescribeAuthorizer(authorizerName: string): Observable<DescribeAuthorizerResponse> {
			return this.http.get<DescribeAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), {});
		}

		/**
		 * Updates an authorizer.
		 * Put authorizer/{authorizerName}
		 * @param {string} authorizerName The authorizer name.
		 * @return {UpdateAuthorizerResponse} Success
		 */
		UpdateAuthorizer(authorizerName: string, requestBody: UpdateAuthorizerPutBody): Observable<UpdateAuthorizerResponse> {
			return this.http.put<UpdateAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a billing group.
		 * Post billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name you wish to give to the billing group.
		 * @return {CreateBillingGroupResponse} Success
		 */
		CreateBillingGroup(billingGroupName: string, requestBody: CreateBillingGroupPostBody): Observable<CreateBillingGroupResponse> {
			return this.http.post<CreateBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the billing group.
		 * Delete billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @param {number} expectedVersion The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the <code>DeleteBillingGroup</code> request is rejected with a <code>VersionConflictException</code>.
		 * @return {DeleteBillingGroupResponse} Success
		 */
		DeleteBillingGroup(billingGroupName: string, expectedVersion: number | null | undefined): Observable<DeleteBillingGroupResponse> {
			return this.http.delete<DeleteBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Returns information about a billing group.
		 * Get billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @return {DescribeBillingGroupResponse} Success
		 */
		DescribeBillingGroup(billingGroupName: string): Observable<DescribeBillingGroupResponse> {
			return this.http.get<DescribeBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), {});
		}

		/**
		 * Updates information about the billing group.
		 * Patch billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @return {UpdateBillingGroupResponse} Success
		 */
		UpdateBillingGroup(billingGroupName: string, requestBody: UpdateBillingGroupPatchBody): Observable<UpdateBillingGroupResponse> {
			return this.http.patch<UpdateBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an X.509 certificate using the specified certificate signing request.</p> <p> <b>Note:</b> The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves. </p> <p> <b>Note:</b> Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> <p>You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs.</p> <p>Assuming a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is:</p> <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the corresponding CSR.</p> <p>The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process:</p> <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_}</p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"</p>
		 * Post certificates
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {CreateCertificateFromCsrResponse} Success
		 */
		CreateCertificateFromCsr(setAsActive: boolean | null | undefined, requestBody: CreateCertificateFromCsrPostBody): Observable<CreateCertificateFromCsrResponse> {
			return this.http.post<CreateCertificateFromCsrResponse>(this.baseUri + 'certificates?setAsActive=' + setAsActive, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the certificates registered in your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>
		 * Get certificates
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
		 * @return {ListCertificatesResponse} Success
		 */
		ListCertificates(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListCertificatesResponse> {
			return this.http.get<ListCertificatesResponse>(this.baseUri + 'certificates?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Create a dimension that you can use to limit the scope of a metric used in a security profile for AWS IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.
		 * Post dimensions/{name}
		 * @param {string} name A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
		 * @return {CreateDimensionResponse} Success
		 */
		CreateDimension(name: string, requestBody: CreateDimensionPostBody): Observable<CreateDimensionResponse> {
			return this.http.post<CreateDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified dimension from your AWS account.
		 * Delete dimensions/{name}
		 * @param {string} name The unique identifier for the dimension that you want to delete.
		 * @return {DeleteDimensionResponse} Success
		 */
		DeleteDimension(name: string): Observable<DeleteDimensionResponse> {
			return this.http.delete<DeleteDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Provides details about a dimension that is defined in your AWS account.
		 * Get dimensions/{name}
		 * @param {string} name The unique identifier for the dimension.
		 * @return {DescribeDimensionResponse} Success
		 */
		DescribeDimension(name: string): Observable<DescribeDimensionResponse> {
			return this.http.get<DescribeDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and re-create it).
		 * Patch dimensions/{name}
		 * @param {string} name A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
		 * @return {UpdateDimensionResponse} Success
		 */
		UpdateDimension(name: string, requestBody: UpdateDimensionPatchBody): Observable<UpdateDimensionResponse> {
			return this.http.patch<UpdateDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a domain configuration.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Post domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration. This value must be unique to a region.
		 * @return {CreateDomainConfigurationResponse} Success
		 */
		CreateDomainConfiguration(domainConfigurationName: string, requestBody: CreateDomainConfigurationPostBody): Observable<CreateDomainConfigurationResponse> {
			return this.http.post<CreateDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified domain configuration.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Delete domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration to be deleted.
		 * @return {DeleteDomainConfigurationResponse} Success
		 */
		DeleteDomainConfiguration(domainConfigurationName: string): Observable<DeleteDomainConfigurationResponse> {
			return this.http.delete<DeleteDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), {});
		}

		/**
		 * <p>Gets summary information about a domain configuration.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Get domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration.
		 * @return {DescribeDomainConfigurationResponse} Success
		 */
		DescribeDomainConfiguration(domainConfigurationName: string): Observable<DescribeDomainConfigurationResponse> {
			return this.http.get<DescribeDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), {});
		}

		/**
		 * <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Put domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration to be updated.
		 * @return {UpdateDomainConfigurationResponse} Success
		 */
		UpdateDomainConfiguration(domainConfigurationName: string, requestBody: UpdateDomainConfigurationPutBody): Observable<UpdateDomainConfigurationResponse> {
			return this.http.put<UpdateDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a dynamic thing group.
		 * Post dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The dynamic thing group name to create.
		 * @return {CreateDynamicThingGroupResponse} Success
		 */
		CreateDynamicThingGroup(thingGroupName: string, requestBody: CreateDynamicThingGroupPostBody): Observable<CreateDynamicThingGroupResponse> {
			return this.http.post<CreateDynamicThingGroupResponse>(this.baseUri + 'dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a dynamic thing group.
		 * Delete dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the dynamic thing group to delete.
		 * @param {number} expectedVersion The expected version of the dynamic thing group to delete.
		 * @return {DeleteDynamicThingGroupResponse} Success
		 */
		DeleteDynamicThingGroup(thingGroupName: string, expectedVersion: number | null | undefined): Observable<DeleteDynamicThingGroupResponse> {
			return this.http.delete<DeleteDynamicThingGroupResponse>(this.baseUri + 'dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Updates a dynamic thing group.
		 * Patch dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the dynamic thing group to update.
		 * @return {UpdateDynamicThingGroupResponse} Success
		 */
		UpdateDynamicThingGroup(thingGroupName: string, requestBody: UpdateDynamicThingGroupPatchBody): Observable<UpdateDynamicThingGroupResponse> {
			return this.http.patch<UpdateDynamicThingGroupResponse>(this.baseUri + 'dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a job.
		 * Put jobs/{jobId}
		 * @param {string} jobId A job identifier which must be unique for your AWS account. We recommend using a UUID. Alpha-numeric characters, "-" and "_" are valid for use here.
		 * @return {CreateJobResponse} Success
		 */
		CreateJob(jobId: string, requestBody: CreateJobPutBody): Observable<CreateJobResponse> {
			return this.http.put<CreateJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p>
		 * Delete jobs/{jobId}
		 * @param {string} jobId <p>The ID of the job to be deleted.</p> <p>After a job deletion is completed, you may reuse this jobId when you create a new job. However, this is not recommended, and you must ensure that your devices are not using the jobId to refer to the deleted job.</p>
		 * @param {boolean} force <p>(Optional) When true, you can delete a job which is "IN_PROGRESS". Otherwise, you can only delete a job which is in a terminal state ("COMPLETED" or "CANCELED") or an exception will occur. The default is false.</p> <note> <p>Deleting a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to access job information or update the job execution status. Use caution and ensure that each device executing a job which is deleted is able to recover to a valid state.</p> </note>
		 * @return {void} Success
		 */
		DeleteJob(jobId: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes a job.
		 * Get jobs/{jobId}
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {DescribeJobResponse} Success
		 */
		DescribeJob(jobId: string): Observable<DescribeJobResponse> {
			return this.http.get<DescribeJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Updates supported fields of the specified job.
		 * Patch jobs/{jobId}
		 * @param {string} jobId The ID of the job to be updated.
		 * @return {void} Success
		 */
		UpdateJob(jobId: string, requestBody: UpdateJobPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p> <p> <b>Note</b> This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p>
		 * Post keys-and-certificate
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {CreateKeysAndCertificateResponse} Success
		 */
		CreateKeysAndCertificate(setAsActive: boolean | null | undefined): Observable<CreateKeysAndCertificateResponse> {
			return this.http.post<CreateKeysAndCertificateResponse>(this.baseUri + 'keys-and-certificate?setAsActive=' + setAsActive, null, {});
		}

		/**
		 * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Each mitigation action can apply only one type of change.
		 * Post mitigationactions/actions/{actionName}
		 * @param {string} actionName A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).
		 * @return {CreateMitigationActionResponse} Success
		 */
		CreateMitigationAction(actionName: string, requestBody: CreateMitigationActionPostBody): Observable<CreateMitigationActionResponse> {
			return this.http.post<CreateMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a defined mitigation action from your AWS account.
		 * Delete mitigationactions/actions/{actionName}
		 * @param {string} actionName The name of the mitigation action that you want to delete.
		 * @return {DeleteMitigationActionResponse} Success
		 */
		DeleteMitigationAction(actionName: string): Observable<DeleteMitigationActionResponse> {
			return this.http.delete<DeleteMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), {});
		}

		/**
		 * Gets information about a mitigation action.
		 * Get mitigationactions/actions/{actionName}
		 * @param {string} actionName The friendly name that uniquely identifies the mitigation action.
		 * @return {DescribeMitigationActionResponse} Success
		 */
		DescribeMitigationAction(actionName: string): Observable<DescribeMitigationActionResponse> {
			return this.http.get<DescribeMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), {});
		}

		/**
		 * Updates the definition for the specified mitigation action.
		 * Patch mitigationactions/actions/{actionName}
		 * @param {string} actionName The friendly name for the mitigation action. You can't change the name by using <code>UpdateMitigationAction</code>. Instead, you must delete and re-create the mitigation action with the new name.
		 * @return {UpdateMitigationActionResponse} Success
		 */
		UpdateMitigationAction(actionName: string, requestBody: UpdateMitigationActionPatchBody): Observable<UpdateMitigationActionResponse> {
			return this.http.patch<UpdateMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an AWS IoT OTAUpdate on a target group of things or groups.
		 * Post otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The ID of the OTA update to be created.
		 * @return {CreateOTAUpdateResponse} Success
		 */
		CreateOTAUpdate(otaUpdateId: string, requestBody: CreateOTAUpdatePostBody): Observable<CreateOTAUpdateResponse> {
			return this.http.post<CreateOTAUpdateResponse>(this.baseUri + 'otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an OTA update.
		 * Delete otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The OTA update ID to delete.
		 * @param {boolean} deleteStream Specifies if the stream associated with an OTA update should be deleted when the OTA update is deleted.
		 * @param {boolean} forceDeleteAWSJob Specifies if the AWS Job associated with the OTA update should be deleted with the OTA update is deleted.
		 * @return {DeleteOTAUpdateResponse} Success
		 */
		DeleteOTAUpdate(otaUpdateId: string, deleteStream: boolean | null | undefined, forceDeleteAWSJob: boolean | null | undefined): Observable<DeleteOTAUpdateResponse> {
			return this.http.delete<DeleteOTAUpdateResponse>(this.baseUri + 'otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)) + '&deleteStream=' + deleteStream + '&forceDeleteAWSJob=' + forceDeleteAWSJob, {});
		}

		/**
		 * Gets an OTA update.
		 * Get otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The OTA update ID.
		 * @return {GetOTAUpdateResponse} Success
		 */
		GetOTAUpdate(otaUpdateId: string): Observable<GetOTAUpdateResponse> {
			return this.http.get<GetOTAUpdateResponse>(this.baseUri + 'otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)), {});
		}

		/**
		 * <p>Creates an AWS IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p>
		 * Post policies/{policyName}
		 * @param {string} policyName The policy name.
		 * @return {CreatePolicyResponse} Success
		 */
		CreatePolicy(policyName: string, requestBody: CreatePolicyPostBody): Observable<CreatePolicyResponse> {
			return this.http.post<CreatePolicyResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the DeletePolicyVersion API to delete all non-default versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any certificate; and then use the DeletePolicy API to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p>
		 * Delete policies/{policyName}
		 * @param {string} policyName The name of the policy to delete.
		 * @return {void} Success
		 */
		DeletePolicy(policyName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the specified policy with the policy document of the default version.
		 * Get policies/{policyName}
		 * @param {string} policyName The name of the policy.
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(policyName: string): Observable<GetPolicyResponse> {
			return this.http.get<GetPolicyResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), {});
		}

		/**
		 * <p>Creates a new version of the specified AWS IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p>
		 * Post policies/{policyName}/version
		 * @param {string} policyName The policy name.
		 * @param {boolean} setAsDefault Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
		 * @return {CreatePolicyVersionResponse} Success
		 */
		CreatePolicyVersion(policyName: string, setAsDefault: boolean | null | undefined, requestBody: CreatePolicyVersionPostBody): Observable<CreatePolicyVersionResponse> {
			return this.http.post<CreatePolicyVersionResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version&setAsDefault=' + setAsDefault, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of the specified policy and identifies the default version.
		 * Get policies/{policyName}/version
		 * @param {string} policyName The policy name.
		 * @return {ListPolicyVersionsResponse} Success
		 */
		ListPolicyVersions(policyName: string): Observable<ListPolicyVersionsResponse> {
			return this.http.get<ListPolicyVersionsResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version', {});
		}

		/**
		 * Creates a provisioning claim.
		 * Post provisioning-templates/{templateName}/provisioning-claim
		 * @param {string} templateName The name of the provisioning template to use.
		 * @return {CreateProvisioningClaimResponse} Success
		 */
		CreateProvisioningClaim(templateName: string): Observable<CreateProvisioningClaimResponse> {
			return this.http.post<CreateProvisioningClaimResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/provisioning-claim', null, {});
		}

		/**
		 * Creates a fleet provisioning template.
		 * Post provisioning-templates
		 * @return {CreateProvisioningTemplateResponse} Success
		 */
		CreateProvisioningTemplate(requestBody: CreateProvisioningTemplatePostBody): Observable<CreateProvisioningTemplateResponse> {
			return this.http.post<CreateProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the fleet provisioning templates in your AWS account.
		 * Get provisioning-templates
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token to retrieve the next set of results.
		 * @return {ListProvisioningTemplatesResponse} Success
		 */
		ListProvisioningTemplates(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProvisioningTemplatesResponse> {
			return this.http.get<ListProvisioningTemplatesResponse>(this.baseUri + 'provisioning-templates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a new version of a fleet provisioning template.
		 * Post provisioning-templates/{templateName}/versions
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @param {boolean} setAsDefault Sets a fleet provision template version as the default version.
		 * @return {CreateProvisioningTemplateVersionResponse} Success
		 */
		CreateProvisioningTemplateVersion(templateName: string, setAsDefault: boolean | null | undefined, requestBody: CreateProvisioningTemplateVersionPostBody): Observable<CreateProvisioningTemplateVersionResponse> {
			return this.http.post<CreateProvisioningTemplateVersionResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions&setAsDefault=' + setAsDefault, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of fleet provisioning template versions.
		 * Get provisioning-templates/{templateName}/versions
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token to retrieve the next set of results.
		 * @return {ListProvisioningTemplateVersionsResponse} Success
		 */
		ListProvisioningTemplateVersions(templateName: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProvisioningTemplateVersionsResponse> {
			return this.http.get<ListProvisioningTemplateVersionsResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a role alias.
		 * Post role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias that points to a role ARN. This allows you to change the role without having to update the device.
		 * @return {CreateRoleAliasResponse} Success
		 */
		CreateRoleAlias(roleAlias: string, requestBody: CreateRoleAliasPostBody): Observable<CreateRoleAliasResponse> {
			return this.http.post<CreateRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a role alias
		 * Delete role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to delete.
		 * @return {DeleteRoleAliasResponse} Success
		 */
		DeleteRoleAlias(roleAlias: string): Observable<DeleteRoleAliasResponse> {
			return this.http.delete<DeleteRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), {});
		}

		/**
		 * Describes a role alias.
		 * Get role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to describe.
		 * @return {DescribeRoleAliasResponse} Success
		 */
		DescribeRoleAlias(roleAlias: string): Observable<DescribeRoleAliasResponse> {
			return this.http.get<DescribeRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), {});
		}

		/**
		 * Updates a role alias.
		 * Put role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to update.
		 * @return {UpdateRoleAliasResponse} Success
		 */
		UpdateRoleAlias(roleAlias: string, requestBody: UpdateRoleAliasPutBody): Observable<UpdateRoleAliasResponse> {
			return this.http.put<UpdateRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a scheduled audit that is run at a specified time interval.
		 * Post audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name you want to give to the scheduled audit. (Max. 128 chars)
		 * @return {CreateScheduledAuditResponse} Success
		 */
		CreateScheduledAudit(scheduledAuditName: string, requestBody: CreateScheduledAuditPostBody): Observable<CreateScheduledAuditResponse> {
			return this.http.post<CreateScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a scheduled audit.
		 * Delete audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit you want to delete.
		 * @return {DeleteScheduledAuditResponse} Success
		 */
		DeleteScheduledAudit(scheduledAuditName: string): Observable<DeleteScheduledAuditResponse> {
			return this.http.delete<DeleteScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), {});
		}

		/**
		 * Gets information about a scheduled audit.
		 * Get audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit whose information you want to get.
		 * @return {DescribeScheduledAuditResponse} Success
		 */
		DescribeScheduledAudit(scheduledAuditName: string): Observable<DescribeScheduledAuditResponse> {
			return this.http.get<DescribeScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), {});
		}

		/**
		 * Updates a scheduled audit, including which checks are performed and how often the audit takes place.
		 * Patch audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit. (Max. 128 chars)
		 * @return {UpdateScheduledAuditResponse} Success
		 */
		UpdateScheduledAudit(scheduledAuditName: string, requestBody: UpdateScheduledAuditPatchBody): Observable<UpdateScheduledAuditResponse> {
			return this.http.patch<UpdateScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Device Defender security profile.
		 * Post security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name you are giving to the security profile.
		 * @return {CreateSecurityProfileResponse} Success
		 */
		CreateSecurityProfile(securityProfileName: string, requestBody: CreateSecurityProfilePostBody): Observable<CreateSecurityProfileResponse> {
			return this.http.post<CreateSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Device Defender security profile.
		 * Delete security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile to be deleted.
		 * @param {number} expectedVersion The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a <code>VersionConflictException</code> is thrown.
		 * @return {DeleteSecurityProfileResponse} Success
		 */
		DeleteSecurityProfile(securityProfileName: string, expectedVersion: number | null | undefined): Observable<DeleteSecurityProfileResponse> {
			return this.http.delete<DeleteSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Gets information about a Device Defender security profile.
		 * Get security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile whose information you want to get.
		 * @return {DescribeSecurityProfileResponse} Success
		 */
		DescribeSecurityProfile(securityProfileName: string): Observable<DescribeSecurityProfileResponse> {
			return this.http.get<DescribeSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)), {});
		}

		/**
		 * Updates a Device Defender security profile.
		 * Patch security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile you want to update.
		 * @param {number} expectedVersion The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a <code>VersionConflictException</code> is thrown.
		 * @return {UpdateSecurityProfileResponse} Success
		 */
		UpdateSecurityProfile(securityProfileName: string, expectedVersion: number | null | undefined, requestBody: UpdateSecurityProfilePatchBody): Observable<UpdateSecurityProfileResponse> {
			return this.http.patch<UpdateSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&expectedVersion=' + expectedVersion, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.
		 * Post streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {CreateStreamResponse} Success
		 */
		CreateStream(streamId: string, requestBody: CreateStreamPostBody): Observable<CreateStreamResponse> {
			return this.http.post<CreateStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a stream.
		 * Delete streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {DeleteStreamResponse} Success
		 */
		DeleteStream(streamId: string): Observable<DeleteStreamResponse> {
			return this.http.delete<DeleteStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), {});
		}

		/**
		 * Gets information about a stream.
		 * Get streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {DescribeStreamResponse} Success
		 */
		DescribeStream(streamId: string): Observable<DescribeStreamResponse> {
			return this.http.get<DescribeStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), {});
		}

		/**
		 * Updates an existing stream. The stream version will be incremented by one.
		 * Put streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {UpdateStreamResponse} Success
		 */
		UpdateStream(streamId: string, requestBody: UpdateStreamPutBody): Observable<UpdateStreamResponse> {
			return this.http.put<UpdateStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note>
		 * Post things/{thingName}
		 * @param {string} thingName <p>The name of the thing to create.</p> <p>You can't change a thing's name after you create it. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.</p>
		 * @return {CreateThingResponse} Success
		 */
		CreateThing(thingName: string, requestBody: CreateThingPostBody): Observable<CreateThingResponse> {
			return this.http.post<CreateThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.
		 * Delete things/{thingName}
		 * @param {string} thingName The name of the thing to delete.
		 * @param {number} expectedVersion The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>DeleteThing</code> request is rejected with a <code>VersionConflictException</code>.
		 * @return {DeleteThingResponse} Success
		 */
		DeleteThing(thingName: string, expectedVersion: number | null | undefined): Observable<DeleteThingResponse> {
			return this.http.delete<DeleteThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Gets information about the specified thing.
		 * Get things/{thingName}
		 * @param {string} thingName The name of the thing.
		 * @return {DescribeThingResponse} Success
		 */
		DescribeThing(thingName: string): Observable<DescribeThingResponse> {
			return this.http.get<DescribeThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)), {});
		}

		/**
		 * Updates the data for a thing.
		 * Patch things/{thingName}
		 * @param {string} thingName <p>The name of the thing to update.</p> <p>You can't change a thing's name. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.</p>
		 * @return {UpdateThingResponse} Success
		 */
		UpdateThing(thingName: string, requestBody: UpdateThingPatchBody): Observable<UpdateThingResponse> {
			return this.http.patch<UpdateThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note>
		 * Post thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The thing group name to create.
		 * @return {CreateThingGroupResponse} Success
		 */
		CreateThingGroup(thingGroupName: string, requestBody: CreateThingGroupPostBody): Observable<CreateThingGroupResponse> {
			return this.http.post<CreateThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a thing group.
		 * Delete thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the thing group to delete.
		 * @param {number} expectedVersion The expected version of the thing group to delete.
		 * @return {DeleteThingGroupResponse} Success
		 */
		DeleteThingGroup(thingGroupName: string, expectedVersion: number | null | undefined): Observable<DeleteThingGroupResponse> {
			return this.http.delete<DeleteThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Describe a thing group.
		 * Get thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the thing group.
		 * @return {DescribeThingGroupResponse} Success
		 */
		DescribeThingGroup(thingGroupName: string): Observable<DescribeThingGroupResponse> {
			return this.http.get<DescribeThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), {});
		}

		/**
		 * Update a thing group.
		 * Patch thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The thing group to update.
		 * @return {UpdateThingGroupResponse} Success
		 */
		UpdateThingGroup(thingGroupName: string, requestBody: UpdateThingGroupPatchBody): Observable<UpdateThingGroupResponse> {
			return this.http.patch<UpdateThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new thing type.
		 * Post thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {CreateThingTypeResponse} Success
		 */
		CreateThingType(thingTypeName: string, requestBody: CreateThingTypePostBody): Observable<CreateThingTypeResponse> {
			return this.http.post<CreateThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.
		 * Delete thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {DeleteThingTypeResponse} Success
		 */
		DeleteThingType(thingTypeName: string): Observable<DeleteThingTypeResponse> {
			return this.http.delete<DeleteThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * Gets information about the specified thing type.
		 * Get thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {DescribeThingTypeResponse} Success
		 */
		DescribeThingType(thingTypeName: string): Observable<DescribeThingTypeResponse> {
			return this.http.get<DescribeThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
		 * Post rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		CreateTopicRule(ruleName: string, requestBody: CreateTopicRulePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the rule.
		 * Delete rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		DeleteTopicRule(ruleName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the rule.
		 * Get rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {GetTopicRuleResponse} Success
		 */
		GetTopicRule(ruleName: string): Observable<GetTopicRuleResponse> {
			return this.http.get<GetTopicRuleResponse>(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), {});
		}

		/**
		 * Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
		 * Patch rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		ReplaceTopicRule(ruleName: string, requestBody: ReplaceTopicRulePatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a topic rule destination. The destination must be confirmed prior to use.
		 * Post destinations
		 * @return {CreateTopicRuleDestinationResponse} Success
		 */
		CreateTopicRuleDestination(requestBody: CreateTopicRuleDestinationPostBody): Observable<CreateTopicRuleDestinationResponse> {
			return this.http.post<CreateTopicRuleDestinationResponse>(this.baseUri + 'destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the topic rule destinations in your AWS account.
		 * Get destinations
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListTopicRuleDestinationsResponse} Success
		 */
		ListTopicRuleDestinations(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListTopicRuleDestinationsResponse> {
			return this.http.get<ListTopicRuleDestinationsResponse>(this.baseUri + 'destinations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination.
		 * Patch destinations
		 * @return {UpdateTopicRuleDestinationResponse} Success
		 */
		UpdateTopicRuleDestination(requestBody: UpdateTopicRuleDestinationPatchBody): Observable<UpdateTopicRuleDestinationResponse> {
			return this.http.patch<UpdateTopicRuleDestinationResponse>(this.baseUri + 'destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled.
		 * Delete audit/configuration
		 * @param {boolean} deleteScheduledAudits If true, all scheduled audits are deleted.
		 * @return {DeleteAccountAuditConfigurationResponse} Success
		 */
		DeleteAccountAuditConfiguration(deleteScheduledAudits: boolean | null | undefined): Observable<DeleteAccountAuditConfigurationResponse> {
			return this.http.delete<DeleteAccountAuditConfigurationResponse>(this.baseUri + 'audit/configuration?deleteScheduledAudits=' + deleteScheduledAudits, {});
		}

		/**
		 * Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
		 * Get audit/configuration
		 * @return {DescribeAccountAuditConfigurationResponse} Success
		 */
		DescribeAccountAuditConfiguration(): Observable<DescribeAccountAuditConfigurationResponse> {
			return this.http.get<DescribeAccountAuditConfigurationResponse>(this.baseUri + 'audit/configuration', {});
		}

		/**
		 * Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
		 * Patch audit/configuration
		 * @return {UpdateAccountAuditConfigurationResponse} Success
		 */
		UpdateAccountAuditConfiguration(requestBody: UpdateAccountAuditConfigurationPatchBody): Observable<UpdateAccountAuditConfigurationResponse> {
			return this.http.patch<UpdateAccountAuditConfigurationResponse>(this.baseUri + 'audit/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a registered CA certificate.
		 * Delete cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The ID of the certificate to delete. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {DeleteCACertificateResponse} Success
		 */
		DeleteCACertificate(caCertificateId: string): Observable<DeleteCACertificateResponse> {
			return this.http.delete<DeleteCACertificateResponse>(this.baseUri + 'cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)), {});
		}

		/**
		 * Describes a registered CA certificate.
		 * Get cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The CA certificate identifier.
		 * @return {DescribeCACertificateResponse} Success
		 */
		DescribeCACertificate(caCertificateId: string): Observable<DescribeCACertificateResponse> {
			return this.http.get<DescribeCACertificateResponse>(this.baseUri + 'cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)), {});
		}

		/**
		 * Updates a registered CA certificate.
		 * Put cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The CA certificate identifier.
		 * @param {AuthorizerDescriptionStatus} newStatus <p>The updated status of the CA certificate.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
		 * @param {CACertificateDescriptionAutoRegistrationStatus} newAutoRegistrationStatus The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".
		 * @return {void} Success
		 */
		UpdateCACertificate(caCertificateId: string, newStatus: AuthorizerDescriptionStatus | null | undefined, newAutoRegistrationStatus: CACertificateDescriptionAutoRegistrationStatus | null | undefined, requestBody: UpdateCACertificatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)) + '&newStatus=' + newStatus + '&newAutoRegistrationStatus=' + newAutoRegistrationStatus, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPrincipalPolicy</a> API to detach all policies. Next, use the <a>UpdateCertificate</a> API to set the certificate to the INACTIVE status.</p>
		 * Delete certificates/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {boolean} forceDelete Forces the deletion of a certificate if it is inactive and is not attached to an IoT thing.
		 * @return {void} Success
		 */
		DeleteCertificate(certificateId: string, forceDelete: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '&forceDelete=' + forceDelete, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the specified certificate.
		 * Get certificates/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {DescribeCertificateResponse} Success
		 */
		DescribeCertificate(certificateId: string): Observable<DescribeCertificateResponse> {
			return this.http.get<DescribeCertificateResponse>(this.baseUri + 'certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), {});
		}

		/**
		 * Deletes a job execution.
		 * Delete things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}
		 * @param {string} jobId The ID of the job whose execution on a particular device will be deleted.
		 * @param {string} thingName The name of the thing whose job execution will be deleted.
		 * @param {number} executionNumber <p>The ID of the job execution to be deleted. The <code>executionNumber</code> refers to the execution of a particular job on a particular device.</p> <p>Note that once a job execution is deleted, the <code>executionNumber</code> may be reused by IoT, so be sure you get and use the correct value here.</p>
		 * @param {boolean} force <p>(Optional) When true, you can delete a job execution which is "IN_PROGRESS". Otherwise, you can only delete a job execution which is in a terminal state ("SUCCEEDED", "FAILED", "REJECTED", "REMOVED" or "CANCELED") or an exception will occur. The default is false.</p> <note> <p>Deleting a job execution which is "IN_PROGRESS", will cause the device to be unable to access job information or update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</p> </note>
		 * @return {void} Success
		 */
		DeleteJobExecution(jobId: string, thingName: string, executionNumber: number, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/executionNumber/' + executionNumber + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this API. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.
		 * Delete policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The name of the policy.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {void} Success
		 */
		DeletePolicyVersion(policyName: string, policyVersionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the specified policy version.
		 * Get policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The name of the policy.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {GetPolicyVersionResponse} Success
		 */
		GetPolicyVersion(policyName: string, policyVersionId: string): Observable<GetPolicyVersionResponse> {
			return this.http.get<GetPolicyVersionResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), {});
		}

		/**
		 * Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicy API.
		 * Patch policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The policy name.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {void} Success
		 */
		SetDefaultPolicyVersion(policyName: string, policyVersionId: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a fleet provisioning template.
		 * Delete provisioning-templates/{templateName}
		 * @param {string} templateName The name of the fleet provision template to delete.
		 * @return {DeleteProvisioningTemplateResponse} Success
		 */
		DeleteProvisioningTemplate(templateName: string): Observable<DeleteProvisioningTemplateResponse> {
			return this.http.delete<DeleteProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), {});
		}

		/**
		 * Returns information about a fleet provisioning template.
		 * Get provisioning-templates/{templateName}
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @return {DescribeProvisioningTemplateResponse} Success
		 */
		DescribeProvisioningTemplate(templateName: string): Observable<DescribeProvisioningTemplateResponse> {
			return this.http.get<DescribeProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), {});
		}

		/**
		 * Updates a fleet provisioning template.
		 * Patch provisioning-templates/{templateName}
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @return {UpdateProvisioningTemplateResponse} Success
		 */
		UpdateProvisioningTemplate(templateName: string, requestBody: UpdateProvisioningTemplatePatchBody): Observable<UpdateProvisioningTemplateResponse> {
			return this.http.patch<UpdateProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a fleet provisioning template version.
		 * Delete provisioning-templates/{templateName}/versions/{versionId}
		 * @param {string} templateName The name of the fleet provisioning template version to delete.
		 * @param {number} versionId The fleet provisioning template version ID to delete.
		 * @return {DeleteProvisioningTemplateVersionResponse} Success
		 */
		DeleteProvisioningTemplateVersion(templateName: string, versionId: number): Observable<DeleteProvisioningTemplateVersionResponse> {
			return this.http.delete<DeleteProvisioningTemplateVersionResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions/' + versionId, {});
		}

		/**
		 * Returns information about a fleet provisioning template version.
		 * Get provisioning-templates/{templateName}/versions/{versionId}
		 * @param {string} templateName The template name.
		 * @param {number} versionId The fleet provisioning template version ID.
		 * @return {DescribeProvisioningTemplateVersionResponse} Success
		 */
		DescribeProvisioningTemplateVersion(templateName: string, versionId: number): Observable<DescribeProvisioningTemplateVersionResponse> {
			return this.http.get<DescribeProvisioningTemplateVersionResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions/' + versionId, {});
		}

		/**
		 * Deletes a CA certificate registration code.
		 * Delete registrationcode
		 * @return {DeleteRegistrationCodeResponse} Success
		 */
		DeleteRegistrationCode(): Observable<DeleteRegistrationCodeResponse> {
			return this.http.delete<DeleteRegistrationCodeResponse>(this.baseUri + 'registrationcode', {});
		}

		/**
		 * Gets a registration code used to register a CA certificate with AWS IoT.
		 * Get registrationcode
		 * @return {GetRegistrationCodeResponse} Success
		 */
		GetRegistrationCode(): Observable<GetRegistrationCodeResponse> {
			return this.http.get<GetRegistrationCodeResponse>(this.baseUri + 'registrationcode', {});
		}

		/**
		 * Deletes a topic rule destination.
		 * Delete destinations/{arn}
		 * @param {string} arn The ARN of the topic rule destination to delete.
		 * @return {DeleteTopicRuleDestinationResponse} Success
		 */
		DeleteTopicRuleDestination(arn: string): Observable<DeleteTopicRuleDestinationResponse> {
			return this.http.delete<DeleteTopicRuleDestinationResponse>(this.baseUri + 'destinations/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Gets information about a topic rule destination.
		 * Get destinations/{arn}
		 * @param {string} arn The ARN of the topic rule destination.
		 * @return {GetTopicRuleDestinationResponse} Success
		 */
		GetTopicRuleDestination(arn: string): Observable<GetTopicRuleDestinationResponse> {
			return this.http.get<GetTopicRuleDestinationResponse>(this.baseUri + 'destinations/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Deletes a logging level.
		 * Delete v2LoggingLevel#targetType&targetName
		 * @param {LogTargetTargetType} targetType The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
		 * @param {string} targetName The name of the resource for which you are configuring logging.
		 * @return {void} Success
		 */
		DeleteV2LoggingLevel(targetType: LogTargetTargetType, targetName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2LoggingLevel#targetType&targetName?targetType=' + targetType + '&targetName=' + (targetName == null ? '' : encodeURIComponent(targetName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecates a thing type. You can not associate new things with deprecated thing type.
		 * Post thing-types/{thingTypeName}/deprecate
		 * @param {string} thingTypeName The name of the thing type to deprecate.
		 * @return {DeprecateThingTypeResponse} Success
		 */
		DeprecateThingType(thingTypeName: string, requestBody: DeprecateThingTypePostBody): Observable<DeprecateThingTypeResponse> {
			return this.http.post<DeprecateThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)) + '/deprecate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and when the audit that returned the finding was started.
		 * Get audit/findings/{findingId}
		 * @param {string} findingId A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.
		 * @return {DescribeAuditFindingResponse} Success
		 */
		DescribeAuditFinding(findingId: string): Observable<DescribeAuditFindingResponse> {
			return this.http.get<DescribeAuditFindingResponse>(this.baseUri + 'audit/findings/' + (findingId == null ? '' : encodeURIComponent(findingId)), {});
		}

		/**
		 * Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.
		 * Get audit/mitigationactions/tasks/{taskId}
		 * @param {string} taskId The unique identifier for the audit mitigation task.
		 * @return {DescribeAuditMitigationActionsTaskResponse} Success
		 */
		DescribeAuditMitigationActionsTask(taskId: string): Observable<DescribeAuditMitigationActionsTaskResponse> {
			return this.http.get<DescribeAuditMitigationActionsTaskResponse>(this.baseUri + 'audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Starts a task that applies a set of mitigation actions to the specified target.
		 * Post audit/mitigationactions/tasks/{taskId}
		 * @param {string} taskId A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.
		 * @return {StartAuditMitigationActionsTaskResponse} Success
		 */
		StartAuditMitigationActionsTask(taskId: string, requestBody: StartAuditMitigationActionsTaskPostBody): Observable<StartAuditMitigationActionsTaskResponse> {
			return this.http.post<StartAuditMitigationActionsTaskResponse>(this.baseUri + 'audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a Device Defender audit.
		 * Get audit/tasks/{taskId}
		 * @param {string} taskId The ID of the audit whose information you want to get.
		 * @return {DescribeAuditTaskResponse} Success
		 */
		DescribeAuditTask(taskId: string): Observable<DescribeAuditTaskResponse> {
			return this.http.get<DescribeAuditTaskResponse>(this.baseUri + 'audit/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Returns a unique endpoint specific to the AWS account making the call.
		 * Get endpoint
		 * @param {string} endpointType <p>The endpoint type. Valid endpoint types include:</p> <ul> <li> <p> <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:CredentialProvider</code> - Returns an AWS IoT credentials provider API endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Jobs</code> - Returns an AWS IoT device management Jobs API endpoint.</p> </li> </ul> <p>We strongly recommend that customers use the newer <code>iot:Data-ATS</code> endpoint type to avoid issues related to the widespread distrust of Symantec certificate authorities.</p>
		 * @return {DescribeEndpointResponse} Success
		 */
		DescribeEndpoint(endpointType: string | null | undefined): Observable<DescribeEndpointResponse> {
			return this.http.get<DescribeEndpointResponse>(this.baseUri + 'endpoint?endpointType=' + (endpointType == null ? '' : encodeURIComponent(endpointType)), {});
		}

		/**
		 * Describes event configurations.
		 * Get event-configurations
		 * @return {DescribeEventConfigurationsResponse} Success
		 */
		DescribeEventConfigurations(): Observable<DescribeEventConfigurationsResponse> {
			return this.http.get<DescribeEventConfigurationsResponse>(this.baseUri + 'event-configurations', {});
		}

		/**
		 * Updates the event configurations.
		 * Patch event-configurations
		 * @return {UpdateEventConfigurationsResponse} Success
		 */
		UpdateEventConfigurations(requestBody: UpdateEventConfigurationsPatchBody): Observable<UpdateEventConfigurationsResponse> {
			return this.http.patch<UpdateEventConfigurationsResponse>(this.baseUri + 'event-configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a search index.
		 * Get indices/{indexName}
		 * @param {string} indexName The index name.
		 * @return {DescribeIndexResponse} Success
		 */
		DescribeIndex(indexName: string): Observable<DescribeIndexResponse> {
			return this.http.get<DescribeIndexResponse>(this.baseUri + 'indices/' + (indexName == null ? '' : encodeURIComponent(indexName)), {});
		}

		/**
		 * Describes a job execution.
		 * Get things/{thingName}/jobs/{jobId}
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {string} thingName The name of the thing on which the job execution is running.
		 * @param {number} executionNumber A string (consisting of the digits "0" through "9" which is used to specify a particular job execution on a particular device.
		 * @return {DescribeJobExecutionResponse} Success
		 */
		DescribeJobExecution(jobId: string, thingName: string, executionNumber: number | null | undefined): Observable<DescribeJobExecutionResponse> {
			return this.http.get<DescribeJobExecutionResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&executionNumber=' + executionNumber, {});
		}

		/**
		 * Describes a bulk thing provisioning task.
		 * Get thing-registration-tasks/{taskId}
		 * @param {string} taskId The task ID.
		 * @return {DescribeThingRegistrationTaskResponse} Success
		 */
		DescribeThingRegistrationTask(taskId: string): Observable<DescribeThingRegistrationTaskResponse> {
			return this.http.get<DescribeThingRegistrationTaskResponse>(this.baseUri + 'thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Disables the rule.
		 * Post rules/{ruleName}/disable
		 * @param {string} ruleName The name of the rule to disable.
		 * @return {void} Success
		 */
		DisableTopicRule(ruleName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the rule.
		 * Post rules/{ruleName}/enable
		 * @param {string} ruleName The name of the topic rule to enable.
		 * @return {void} Success
		 */
		EnableTopicRule(ruleName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the approximate count of unique values that match the query.
		 * Post indices/cardinality
		 * @return {GetCardinalityResponse} Success
		 */
		GetCardinality(requestBody: GetCardinalityPostBody): Observable<GetCardinalityResponse> {
			return this.http.post<GetCardinalityResponse>(this.baseUri + 'indices/cardinality', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the AWS IoT device gateway.
		 * Post effective-policies
		 * @param {string} thingName The thing name.
		 * @return {GetEffectivePoliciesResponse} Success
		 */
		GetEffectivePolicies(thingName: string | null | undefined, requestBody: GetEffectivePoliciesPostBody): Observable<GetEffectivePoliciesResponse> {
			return this.http.post<GetEffectivePoliciesResponse>(this.baseUri + 'effective-policies?thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the indexing configuration.
		 * Get indexing/config
		 * @return {GetIndexingConfigurationResponse} Success
		 */
		GetIndexingConfiguration(): Observable<GetIndexingConfigurationResponse> {
			return this.http.get<GetIndexingConfigurationResponse>(this.baseUri + 'indexing/config', {});
		}

		/**
		 * Updates the search configuration.
		 * Post indexing/config
		 * @return {UpdateIndexingConfigurationResponse} Success
		 */
		UpdateIndexingConfiguration(requestBody: UpdateIndexingConfigurationPostBody): Observable<UpdateIndexingConfigurationResponse> {
			return this.http.post<UpdateIndexingConfigurationResponse>(this.baseUri + 'indexing/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a job document.
		 * Get jobs/{jobId}/job-document
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {GetJobDocumentResponse} Success
		 */
		GetJobDocument(jobId: string): Observable<GetJobDocumentResponse> {
			return this.http.get<GetJobDocumentResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/job-document', {});
		}

		/**
		 * <p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p>
		 * Get loggingOptions
		 * @return {GetLoggingOptionsResponse} Success
		 */
		GetLoggingOptions(): Observable<GetLoggingOptionsResponse> {
			return this.http.get<GetLoggingOptionsResponse>(this.baseUri + 'loggingOptions', {});
		}

		/**
		 * <p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p>
		 * Post loggingOptions
		 * @return {void} Success
		 */
		SetLoggingOptions(requestBody: SetLoggingOptionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'loggingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call <code>GetPercentiles</code>. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.
		 * Post indices/percentiles
		 * @return {GetPercentilesResponse} Success
		 */
		GetPercentiles(requestBody: GetPercentilesPostBody): Observable<GetPercentilesResponse> {
			return this.http.post<GetPercentilesResponse>(this.baseUri + 'indices/percentiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type <code>String</code>, only the count statistic is returned.
		 * Post indices/statistics
		 * @return {GetStatisticsResponse} Success
		 */
		GetStatistics(requestBody: GetStatisticsPostBody): Observable<GetStatisticsResponse> {
			return this.http.post<GetStatisticsResponse>(this.baseUri + 'indices/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the fine grained logging options.
		 * Get v2LoggingOptions
		 * @return {GetV2LoggingOptionsResponse} Success
		 */
		GetV2LoggingOptions(): Observable<GetV2LoggingOptionsResponse> {
			return this.http.get<GetV2LoggingOptionsResponse>(this.baseUri + 'v2LoggingOptions', {});
		}

		/**
		 * Sets the logging options for the V2 logging service.
		 * Post v2LoggingOptions
		 * @return {void} Success
		 */
		SetV2LoggingOptions(requestBody: SetV2LoggingOptionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2LoggingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the active violations for a given Device Defender security profile.
		 * Get active-violations
		 * @param {string} thingName The name of the thing whose active violations are listed.
		 * @param {string} securityProfileName The name of the Device Defender security profile for which violations are listed.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListActiveViolationsResponse} Success
		 */
		ListActiveViolations(thingName: string | null | undefined, securityProfileName: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListActiveViolationsResponse> {
			return this.http.get<ListActiveViolationsResponse>(this.baseUri + 'active-violations?thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&securityProfileName=' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the policies attached to the specified thing group.
		 * Post attached-policies/{target}
		 * @param {string} target The group or principal for which the policies will be listed.
		 * @param {boolean} recursive When true, recursively list attached policies.
		 * @param {string} marker The token to retrieve the next set of results.
		 * @param {number} pageSize The maximum number of results to be returned per request.
		 * @return {ListAttachedPoliciesResponse} Success
		 */
		ListAttachedPolicies(target: string, recursive: boolean | null | undefined, marker: string | null | undefined, pageSize: number | null | undefined): Observable<ListAttachedPoliciesResponse> {
			return this.http.post<ListAttachedPoliciesResponse>(this.baseUri + 'attached-policies/' + (target == null ? '' : encodeURIComponent(target)) + '&recursive=' + recursive + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize, null, {});
		}

		/**
		 * Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 180 days.)
		 * Post audit/findings
		 * @return {ListAuditFindingsResponse} Success
		 */
		ListAuditFindings(requestBody: ListAuditFindingsPostBody): Observable<ListAuditFindingsResponse> {
			return this.http.post<ListAuditFindingsResponse>(this.baseUri + 'audit/findings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status of audit mitigation action tasks that were executed.
		 * Get audit/mitigationactions/executions#taskId&findingId
		 * @param {string} taskId Specify this filter to limit results to actions for a specific audit mitigation actions task.
		 * @param {AuditMitigationActionExecutionMetadataStatus} actionStatus Specify this filter to limit results to those with a specific status.
		 * @param {string} findingId Specify this filter to limit results to those that were applied to a specific audit finding.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListAuditMitigationActionsExecutionsResponse} Success
		 */
		ListAuditMitigationActionsExecutions(taskId: string, actionStatus: AuditMitigationActionExecutionMetadataStatus | null | undefined, findingId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListAuditMitigationActionsExecutionsResponse> {
			return this.http.get<ListAuditMitigationActionsExecutionsResponse>(this.baseUri + 'audit/mitigationactions/executions#taskId&findingId?taskId=' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&actionStatus=' + actionStatus + '&findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Gets a list of audit mitigation action tasks that match the specified filters.
		 * Get audit/mitigationactions/tasks#startTime&endTime
		 * @param {string} auditTaskId Specify this filter to limit results to tasks that were applied to results for a specific audit.
		 * @param {string} findingId Specify this filter to limit results to tasks that were applied to a specific audit finding.
		 * @param {DescribeAuditMitigationActionsTaskResponseTaskStatus} taskStatus Specify this filter to limit results to tasks that are in a specific state.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {Date} startTime Specify this filter to limit results to tasks that began on or after a specific date and time.
		 * @param {Date} endTime Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.
		 * @return {ListAuditMitigationActionsTasksResponse} Success
		 */
		ListAuditMitigationActionsTasks(auditTaskId: string | null | undefined, findingId: string | null | undefined, taskStatus: DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, startTime: Date, endTime: Date): Observable<ListAuditMitigationActionsTasksResponse> {
			return this.http.get<ListAuditMitigationActionsTasksResponse>(this.baseUri + 'audit/mitigationactions/tasks#startTime&endTime?auditTaskId=' + (auditTaskId == null ? '' : encodeURIComponent(auditTaskId)) + '&findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)) + '&taskStatus=' + taskStatus + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString(), {});
		}

		/**
		 * Lists the Device Defender audits that have been performed during a given time period.
		 * Get audit/tasks#startTime&endTime
		 * @param {Date} startTime The beginning of the time period. Audit information is retained for a limited time (180 days). Requesting a start time prior to what is retained results in an "InvalidRequestException".
		 * @param {Date} endTime The end of the time period.
		 * @param {DescribeAuditTaskResponseTaskType} taskType A filter to limit the output to the specified type of audit: can be one of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".
		 * @param {DescribeAuditMitigationActionsTaskResponseTaskStatus} taskStatus A filter to limit the output to audits with the specified completion status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @return {ListAuditTasksResponse} Success
		 */
		ListAuditTasks(startTime: Date, endTime: Date, taskType: DescribeAuditTaskResponseTaskType | null | undefined, taskStatus: DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAuditTasksResponse> {
			return this.http.get<ListAuditTasksResponse>(this.baseUri + 'audit/tasks#startTime&endTime?startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&taskType=' + taskType + '&taskStatus=' + taskStatus + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the authorizers registered in your account.
		 * Get authorizers/
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {boolean} isAscendingOrder Return the list of authorizers in ascending alphabetical order.
		 * @param {AuthorizerDescriptionStatus} status The status of the list authorizers request.
		 * @return {ListAuthorizersResponse} Success
		 */
		ListAuthorizers(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined, status: AuthorizerDescriptionStatus | null | undefined): Observable<ListAuthorizersResponse> {
			return this.http.get<ListAuthorizersResponse>(this.baseUri + 'authorizers/?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder + '&status=' + status, {});
		}

		/**
		 * Lists the billing groups you have created.
		 * Get billing-groups
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @param {string} namePrefixFilter Limit the results to billing groups whose names have the given prefix.
		 * @return {ListBillingGroupsResponse} Success
		 */
		ListBillingGroups(nextToken: string | null | undefined, maxResults: number | null | undefined, namePrefixFilter: string | null | undefined): Observable<ListBillingGroupsResponse> {
			return this.http.get<ListBillingGroupsResponse>(this.baseUri + 'billing-groups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&namePrefixFilter=' + (namePrefixFilter == null ? '' : encodeURIComponent(namePrefixFilter)), {});
		}

		/**
		 * <p>Lists the CA certificates registered for your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>
		 * Get cacertificates
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Determines the order of the results.
		 * @return {ListCACertificatesResponse} Success
		 */
		ListCACertificates(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListCACertificatesResponse> {
			return this.http.get<ListCACertificatesResponse>(this.baseUri + 'cacertificates?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * List the device certificates signed by the specified CA certificate.
		 * Get certificates-by-ca/{caCertificateId}
		 * @param {string} caCertificateId The ID of the CA certificate. This operation will list all registered device certificate that were signed by this CA certificate.
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
		 * @return {ListCertificatesByCAResponse} Success
		 */
		ListCertificatesByCA(caCertificateId: string, pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListCertificatesByCAResponse> {
			return this.http.get<ListCertificatesByCAResponse>(this.baseUri + 'certificates-by-ca/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)) + '&pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * List the set of dimensions that are defined for your AWS account.
		 * Get dimensions
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to retrieve at one time.
		 * @return {ListDimensionsResponse} Success
		 */
		ListDimensions(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDimensionsResponse> {
			return this.http.get<ListDimensionsResponse>(this.baseUri + 'dimensions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Get domainConfigurations
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {DescribeDomainConfigurationResponseServiceType} serviceType The type of service delivered by the endpoint.
		 * @return {ListDomainConfigurationsResponse} Success
		 */
		ListDomainConfigurations(marker: string | null | undefined, pageSize: number | null | undefined, serviceType: DescribeDomainConfigurationResponseServiceType | null | undefined): Observable<ListDomainConfigurationsResponse> {
			return this.http.get<ListDomainConfigurationsResponse>(this.baseUri + 'domainConfigurations?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&serviceType=' + serviceType, {});
		}

		/**
		 * Lists the search indices.
		 * Get indices
		 * @param {string} nextToken The token used to get the next set of results, or <code>null</code> if there are no additional results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListIndicesResponse} Success
		 */
		ListIndices(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListIndicesResponse> {
			return this.http.get<ListIndicesResponse>(this.baseUri + 'indices?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the job executions for a job.
		 * Get jobs/{jobId}/things
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {JobExecutionStatus} status The status of the job.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListJobExecutionsForJobResponse} Success
		 */
		ListJobExecutionsForJob(jobId: string, status: JobExecutionStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListJobExecutionsForJobResponse> {
			return this.http.get<ListJobExecutionsForJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/things&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists the job executions for the specified thing.
		 * Get things/{thingName}/jobs
		 * @param {string} thingName The thing name.
		 * @param {JobExecutionStatus} status An optional filter that lets you search for jobs that have the specified status.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListJobExecutionsForThingResponse} Success
		 */
		ListJobExecutionsForThing(thingName: string, status: JobExecutionStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListJobExecutionsForThingResponse> {
			return this.http.get<ListJobExecutionsForThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists jobs.
		 * Get jobs
		 * @param {JobStatus} status An optional filter that lets you search for jobs that have the specified status.
		 * @param {JobTargetSelection} targetSelection Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. 
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {string} thingGroupName A filter that limits the returned jobs to those for the specified group.
		 * @param {string} thingGroupId A filter that limits the returned jobs to those for the specified group.
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(status: JobStatus | null | undefined, targetSelection: JobTargetSelection | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, thingGroupName: string | null | undefined, thingGroupId: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'jobs?status=' + status + '&targetSelection=' + targetSelection + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&thingGroupName=' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&thingGroupId=' + (thingGroupId == null ? '' : encodeURIComponent(thingGroupId)), {});
		}

		/**
		 * Gets a list of all mitigation actions that match the specified filter criteria.
		 * Get mitigationactions/actions
		 * @param {DescribeMitigationActionResponseActionType} actionType Specify a value to limit the result to mitigation actions with a specific action type.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListMitigationActionsResponse} Success
		 */
		ListMitigationActions(actionType: DescribeMitigationActionResponseActionType | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListMitigationActionsResponse> {
			return this.http.get<ListMitigationActionsResponse>(this.baseUri + 'mitigationactions/actions?actionType=' + actionType + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists OTA updates.
		 * Get otaUpdates
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token used to retrieve the next set of results.
		 * @param {CreateOTAUpdateResponseOtaUpdateStatus} otaUpdateStatus The OTA update job status.
		 * @return {ListOTAUpdatesResponse} Success
		 */
		ListOTAUpdates(maxResults: number | null | undefined, nextToken: string | null | undefined, otaUpdateStatus: CreateOTAUpdateResponseOtaUpdateStatus | null | undefined): Observable<ListOTAUpdatesResponse> {
			return this.http.get<ListOTAUpdatesResponse>(this.baseUri + 'otaUpdates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&otaUpdateStatus=' + otaUpdateStatus, {});
		}

		/**
		 * Lists certificates that are being transferred but not yet accepted.
		 * Get certificates-out-going
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
		 * @return {ListOutgoingCertificatesResponse} Success
		 */
		ListOutgoingCertificates(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListOutgoingCertificatesResponse> {
			return this.http.get<ListOutgoingCertificatesResponse>(this.baseUri + 'certificates-out-going?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Lists your policies.
		 * Get policies
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If true, the results are returned in ascending creation order.
		 * @return {ListPoliciesResponse} Success
		 */
		ListPolicies(marker: string | null | undefined, pageSize: number | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListPoliciesResponse> {
			return this.http.get<ListPoliciesResponse>(this.baseUri + 'policies?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * <p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p>
		 * Get policy-principals#x-amzn-iot-policy
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If true, the results are returned in ascending creation order.
		 * @return {ListPolicyPrincipalsResponse} Success
		 */
		ListPolicyPrincipals(marker: string | null | undefined, pageSize: number | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListPolicyPrincipalsResponse> {
			return this.http.get<ListPolicyPrincipalsResponse>(this.baseUri + 'policy-principals#x-amzn-iot-policy?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * <p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p>
		 * Get principal-policies#x-amzn-iot-principal
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If true, results are returned in ascending creation order.
		 * @return {ListPrincipalPoliciesResponse} Success
		 */
		ListPrincipalPolicies(marker: string | null | undefined, pageSize: number | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListPrincipalPoliciesResponse> {
			return this.http.get<ListPrincipalPoliciesResponse>(this.baseUri + 'principal-policies#x-amzn-iot-principal?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
		 * Get principals/things#x-amzn-principal
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @return {ListPrincipalThingsResponse} Success
		 */
		ListPrincipalThings(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListPrincipalThingsResponse> {
			return this.http.get<ListPrincipalThingsResponse>(this.baseUri + 'principals/things#x-amzn-principal?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the role aliases registered in your account.
		 * Get role-aliases
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {boolean} isAscendingOrder Return the list of role aliases in ascending alphabetical order.
		 * @return {ListRoleAliasesResponse} Success
		 */
		ListRoleAliases(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListRoleAliasesResponse> {
			return this.http.get<ListRoleAliasesResponse>(this.baseUri + 'role-aliases?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Lists all of your scheduled audits.
		 * Get audit/scheduledaudits
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @return {ListScheduledAuditsResponse} Success
		 */
		ListScheduledAudits(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListScheduledAuditsResponse> {
			return this.http.get<ListScheduledAuditsResponse>(this.baseUri + 'audit/scheduledaudits?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the Device Defender security profiles you have created. You can use filters to list only those security profiles associated with a thing group or only those associated with your account.
		 * Get security-profiles
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} dimensionName A filter to limit results to the security profiles that use the defined dimension.
		 * @return {ListSecurityProfilesResponse} Success
		 */
		ListSecurityProfiles(nextToken: string | null | undefined, maxResults: number | null | undefined, dimensionName: string | null | undefined): Observable<ListSecurityProfilesResponse> {
			return this.http.get<ListSecurityProfilesResponse>(this.baseUri + 'security-profiles?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&dimensionName=' + (dimensionName == null ? '' : encodeURIComponent(dimensionName)), {});
		}

		/**
		 * Lists the Device Defender security profiles attached to a target (thing group).
		 * Get security-profiles-for-target#securityProfileTargetArn
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {boolean} recursive If true, return child groups too.
		 * @param {string} securityProfileTargetArn The ARN of the target (thing group) whose attached security profiles you want to get.
		 * @return {ListSecurityProfilesForTargetResponse} Success
		 */
		ListSecurityProfilesForTarget(nextToken: string | null | undefined, maxResults: number | null | undefined, recursive: boolean | null | undefined, securityProfileTargetArn: string): Observable<ListSecurityProfilesForTargetResponse> {
			return this.http.get<ListSecurityProfilesForTargetResponse>(this.baseUri + 'security-profiles-for-target#securityProfileTargetArn?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&recursive=' + recursive + '&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), {});
		}

		/**
		 * Lists all of the streams in your AWS account.
		 * Get streams
		 * @param {number} maxResults The maximum number of results to return at a time.
		 * @param {string} nextToken A token used to get the next set of results.
		 * @param {boolean} isAscendingOrder Set to true to return the list of streams in ascending order.
		 * @return {ListStreamsResponse} Success
		 */
		ListStreams(maxResults: number | null | undefined, nextToken: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListStreamsResponse> {
			return this.http.get<ListStreamsResponse>(this.baseUri + 'streams?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Lists the tags (metadata) you have assigned to the resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, nextToken: string | null | undefined): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * List targets for the specified policy.
		 * Post policy-targets/{policyName}
		 * @param {string} policyName The policy name.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @return {ListTargetsForPolicyResponse} Success
		 */
		ListTargetsForPolicy(policyName: string, marker: string | null | undefined, pageSize: number | null | undefined): Observable<ListTargetsForPolicyResponse> {
			return this.http.post<ListTargetsForPolicyResponse>(this.baseUri + 'policy-targets/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize, null, {});
		}

		/**
		 * Lists the targets (thing groups) associated with a given Device Defender security profile.
		 * Get security-profiles/{securityProfileName}/targets
		 * @param {string} securityProfileName The security profile.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListTargetsForSecurityProfileResponse} Success
		 */
		ListTargetsForSecurityProfile(securityProfileName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListTargetsForSecurityProfileResponse> {
			return this.http.get<ListTargetsForSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * List the thing groups in your account.
		 * Get thing-groups
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} parentGroup A filter that limits the results to those with the specified parent group.
		 * @param {string} namePrefixFilter A filter that limits the results to those with the specified name prefix.
		 * @param {boolean} recursive If true, return child groups as well.
		 * @return {ListThingGroupsResponse} Success
		 */
		ListThingGroups(nextToken: string | null | undefined, maxResults: number | null | undefined, parentGroup: string | null | undefined, namePrefixFilter: string | null | undefined, recursive: boolean | null | undefined): Observable<ListThingGroupsResponse> {
			return this.http.get<ListThingGroupsResponse>(this.baseUri + 'thing-groups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&parentGroup=' + (parentGroup == null ? '' : encodeURIComponent(parentGroup)) + '&namePrefixFilter=' + (namePrefixFilter == null ? '' : encodeURIComponent(namePrefixFilter)) + '&recursive=' + recursive, {});
		}

		/**
		 * List the thing groups to which the specified thing belongs.
		 * Get things/{thingName}/thing-groups
		 * @param {string} thingName The thing name.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListThingGroupsForThingResponse} Success
		 */
		ListThingGroupsForThing(thingName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingGroupsForThingResponse> {
			return this.http.get<ListThingGroupsForThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/thing-groups&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
		 * Get things/{thingName}/principals
		 * @param {string} thingName The name of the thing.
		 * @return {ListThingPrincipalsResponse} Success
		 */
		ListThingPrincipals(thingName: string): Observable<ListThingPrincipalsResponse> {
			return this.http.get<ListThingPrincipalsResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals', {});
		}

		/**
		 * Information about the thing registration tasks.
		 * Get thing-registration-tasks/{taskId}/reports#reportType
		 * @param {string} taskId The id of the task.
		 * @param {ListThingRegistrationTaskReportsResponseReportType} reportType The type of task report.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @return {ListThingRegistrationTaskReportsResponse} Success
		 */
		ListThingRegistrationTaskReports(taskId: string, reportType: ListThingRegistrationTaskReportsResponseReportType, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingRegistrationTaskReportsResponse> {
			return this.http.get<ListThingRegistrationTaskReportsResponse>(this.baseUri + 'thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/reports#reportType&reportType=' + reportType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * List bulk thing provisioning tasks.
		 * Get thing-registration-tasks
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {DescribeThingRegistrationTaskResponseStatus} status The status of the bulk thing provisioning task.
		 * @return {ListThingRegistrationTasksResponse} Success
		 */
		ListThingRegistrationTasks(nextToken: string | null | undefined, maxResults: number | null | undefined, status: DescribeThingRegistrationTaskResponseStatus | null | undefined): Observable<ListThingRegistrationTasksResponse> {
			return this.http.get<ListThingRegistrationTasksResponse>(this.baseUri + 'thing-registration-tasks?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&status=' + status, {});
		}

		/**
		 * Creates a bulk thing provisioning task.
		 * Post thing-registration-tasks
		 * @return {StartThingRegistrationTaskResponse} Success
		 */
		StartThingRegistrationTask(requestBody: StartThingRegistrationTaskPostBody): Observable<StartThingRegistrationTaskResponse> {
			return this.http.post<StartThingRegistrationTaskResponse>(this.baseUri + 'thing-registration-tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the existing thing types.
		 * Get thing-types
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {ListThingTypesResponse} Success
		 */
		ListThingTypes(nextToken: string | null | undefined, maxResults: number | null | undefined, thingTypeName: string | null | undefined): Observable<ListThingTypesResponse> {
			return this.http.get<ListThingTypesResponse>(this.baseUri + 'thing-types?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&thingTypeName=' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>.
		 * Get things
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @param {string} attributeName The attribute name used to search for things.
		 * @param {string} attributeValue The attribute value used to search for things.
		 * @param {string} thingTypeName The name of the thing type used to search for things.
		 * @return {ListThingsResponse} Success
		 */
		ListThings(nextToken: string | null | undefined, maxResults: number | null | undefined, attributeName: string | null | undefined, attributeValue: string | null | undefined, thingTypeName: string | null | undefined): Observable<ListThingsResponse> {
			return this.http.get<ListThingsResponse>(this.baseUri + 'things?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&attributeName=' + (attributeName == null ? '' : encodeURIComponent(attributeName)) + '&attributeValue=' + (attributeValue == null ? '' : encodeURIComponent(attributeValue)) + '&thingTypeName=' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * Provisions a thing in the device registry. RegisterThing calls other AWS IoT control plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot"> AWS IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">AWS Customer Support</a> to raise your throttling limits if necessary.
		 * Post things
		 * @return {RegisterThingResponse} Success
		 */
		RegisterThing(requestBody: RegisterThingPostBody): Observable<RegisterThingResponse> {
			return this.http.post<RegisterThingResponse>(this.baseUri + 'things', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the things you have added to the given billing group.
		 * Get billing-groups/{billingGroupName}/things
		 * @param {string} billingGroupName The name of the billing group.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @return {ListThingsInBillingGroupResponse} Success
		 */
		ListThingsInBillingGroup(billingGroupName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingsInBillingGroupResponse> {
			return this.http.get<ListThingsInBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)) + '/things&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the things in the specified group.
		 * Get thing-groups/{thingGroupName}/things
		 * @param {string} thingGroupName The thing group name.
		 * @param {boolean} recursive When true, list things in this thing group and in all child groups as well.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListThingsInThingGroupResponse} Success
		 */
		ListThingsInThingGroup(thingGroupName: string, recursive: boolean | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingsInThingGroupResponse> {
			return this.http.get<ListThingsInThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '/things&recursive=' + recursive + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the rules for the specific topic.
		 * Get rules
		 * @param {string} topic The topic.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A token used to retrieve the next value.
		 * @param {boolean} ruleDisabled Specifies whether the rule is disabled.
		 * @return {ListTopicRulesResponse} Success
		 */
		ListTopicRules(topic: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, ruleDisabled: boolean | null | undefined): Observable<ListTopicRulesResponse> {
			return this.http.get<ListTopicRulesResponse>(this.baseUri + 'rules?topic=' + (topic == null ? '' : encodeURIComponent(topic)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&ruleDisabled=' + ruleDisabled, {});
		}

		/**
		 * Lists logging levels.
		 * Get v2LoggingLevel
		 * @param {LogTargetTargetType} targetType The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
		 * @param {string} nextToken The token used to get the next set of results, or <b>null</b> if there are no additional results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListV2LoggingLevelsResponse} Success
		 */
		ListV2LoggingLevels(targetType: LogTargetTargetType | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListV2LoggingLevelsResponse> {
			return this.http.get<ListV2LoggingLevelsResponse>(this.baseUri + 'v2LoggingLevel?targetType=' + targetType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Sets the logging level.
		 * Post v2LoggingLevel
		 * @return {void} Success
		 */
		SetV2LoggingLevel(requestBody: SetV2LoggingLevelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2LoggingLevel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).
		 * Get violation-events#startTime&endTime
		 * @param {Date} startTime The start time for the alerts to be listed.
		 * @param {Date} endTime The end time for the alerts to be listed.
		 * @param {string} thingName A filter to limit results to those alerts caused by the specified thing.
		 * @param {string} securityProfileName A filter to limit results to those alerts generated by the specified security profile.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListViolationEventsResponse} Success
		 */
		ListViolationEvents(startTime: Date, endTime: Date, thingName: string | null | undefined, securityProfileName: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListViolationEventsResponse> {
			return this.http.get<ListViolationEventsResponse>(this.baseUri + 'violation-events#startTime&endTime?startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&securityProfileName=' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.
		 * Post cacertificate
		 * @param {boolean} setAsActive A boolean value that specifies if the CA certificate is set to active.
		 * @param {boolean} allowAutoRegistration Allows this CA certificate to be used for auto registration of device certificates.
		 * @return {RegisterCACertificateResponse} Success
		 */
		RegisterCACertificate(setAsActive: boolean | null | undefined, allowAutoRegistration: boolean | null | undefined, requestBody: RegisterCACertificatePostBody): Observable<RegisterCACertificateResponse> {
			return this.http.post<RegisterCACertificateResponse>(this.baseUri + 'cacertificate?setAsActive=' + setAsActive + '&allowAutoRegistration=' + allowAutoRegistration, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.
		 * Post certificate/register
		 * @param {boolean} setAsActive A boolean value that specifies if the certificate is set to active.
		 * @return {RegisterCertificateResponse} Success
		 */
		RegisterCertificate(setAsActive: boolean | null | undefined, requestBody: RegisterCertificatePostBody): Observable<RegisterCertificateResponse> {
			return this.http.post<RegisterCertificateResponse>(this.baseUri + 'certificate/register?setAsActive=' + setAsActive, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Register a certificate that does not have a certificate authority (CA).
		 * Post certificate/register-no-ca
		 * @return {RegisterCertificateWithoutCAResponse} Success
		 */
		RegisterCertificateWithoutCA(requestBody: RegisterCertificateWithoutCAPostBody): Observable<RegisterCertificateWithoutCAResponse> {
			return this.http.post<RegisterCertificateWithoutCAResponse>(this.baseUri + 'certificate/register-no-ca', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p>
		 * Patch reject-certificate-transfer/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {void} Success
		 */
		RejectCertificateTransfer(certificateId: string, requestBody: RejectCertificateTransferPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'reject-certificate-transfer/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the given thing from the billing group.
		 * Put billing-groups/removeThingFromBillingGroup
		 * @return {RemoveThingFromBillingGroupResponse} Success
		 */
		RemoveThingFromBillingGroup(requestBody: RemoveThingFromBillingGroupPutBody): Observable<RemoveThingFromBillingGroupResponse> {
			return this.http.put<RemoveThingFromBillingGroupResponse>(this.baseUri + 'billing-groups/removeThingFromBillingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove the specified thing from the specified group.
		 * Put thing-groups/removeThingFromThingGroup
		 * @return {RemoveThingFromThingGroupResponse} Success
		 */
		RemoveThingFromThingGroup(requestBody: RemoveThingFromThingGroupPutBody): Observable<RemoveThingFromThingGroupResponse> {
			return this.http.put<RemoveThingFromThingGroupResponse>(this.baseUri + 'thing-groups/removeThingFromThingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The query search index.
		 * Post indices/search
		 * @return {SearchIndexResponse} Success
		 */
		SearchIndex(requestBody: SearchIndexPostBody): Observable<SearchIndexResponse> {
			return this.http.post<SearchIndexResponse>(this.baseUri + 'indices/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an on-demand Device Defender audit.
		 * Post audit/tasks
		 * @return {StartOnDemandAuditTaskResponse} Success
		 */
		StartOnDemandAuditTask(requestBody: StartOnDemandAuditTaskPostBody): Observable<StartOnDemandAuditTaskResponse> {
			return this.http.post<StartOnDemandAuditTaskResponse>(this.baseUri + 'audit/tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a bulk thing provisioning task.
		 * Put thing-registration-tasks/{taskId}/cancel
		 * @param {string} taskId The bulk thing provisioning task ID.
		 * @return {StopThingRegistrationTaskResponse} Success
		 */
		StopThingRegistrationTask(taskId: string): Observable<StopThingRegistrationTaskResponse> {
			return this.http.put<StopThingRegistrationTaskResponse>(this.baseUri + 'thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
		 * Post tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests if a specified principal is authorized to perform an AWS IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the AWS IoT device gateway.
		 * Post test-authorization
		 * @param {string} clientId The MQTT client ID.
		 * @return {TestAuthorizationResponse} Success
		 */
		TestAuthorization(clientId: string | null | undefined, requestBody: TestAuthorizationPostBody): Observable<TestAuthorizationResponse> {
			return this.http.post<TestAuthorizationResponse>(this.baseUri + 'test-authorization?clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the AWS IoT device gateway.
		 * Post authorizer/{authorizerName}/test
		 * @param {string} authorizerName The custom authorizer name.
		 * @return {TestInvokeAuthorizerResponse} Success
		 */
		TestInvokeAuthorizer(authorizerName: string, requestBody: TestInvokeAuthorizerPostBody): Observable<TestInvokeAuthorizerResponse> {
			return this.http.post<TestInvokeAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)) + '/test', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transfers the specified certificate to the specified AWS account.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the UpdateCertificate API to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the DetachPrincipalPolicy API to detach them.</p>
		 * Patch transfer-certificate/{certificateId}#targetAwsAccount
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {string} targetAwsAccount The AWS account.
		 * @return {TransferCertificateResponse} Success
		 */
		TransferCertificate(certificateId: string, targetAwsAccount: string, requestBody: TransferCertificatePatchBody): Observable<TransferCertificateResponse> {
			return this.http.patch<TransferCertificateResponse>(this.baseUri + 'transfer-certificate/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '#targetAwsAccount&targetAwsAccount=' + (targetAwsAccount == null ? '' : encodeURIComponent(targetAwsAccount)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Post untag
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'untag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect.</p> <p>The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.</p>
		 * Put certificates/{certificateId}#newStatus
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {CertificateDescriptionStatus} newStatus <p>The new status.</p> <p> <b>Note:</b> Setting the status to PENDING_TRANSFER or PENDING_ACTIVATION will result in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by AWS IoT. They are not intended for developer use.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
		 * @return {void} Success
		 */
		UpdateCertificate(certificateId: string, newStatus: CertificateDescriptionStatus): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '#newStatus&newStatus=' + newStatus, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the groups to which the thing belongs.
		 * Put thing-groups/updateThingGroupsForThing
		 * @return {UpdateThingGroupsForThingResponse} Success
		 */
		UpdateThingGroupsForThing(requestBody: UpdateThingGroupsForThingPutBody): Observable<UpdateThingGroupsForThingResponse> {
			return this.http.put<UpdateThingGroupsForThingResponse>(this.baseUri + 'thing-groups/updateThingGroupsForThing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a Device Defender security profile behaviors specification.
		 * Post security-profile-behaviors/validate
		 * @return {ValidateSecurityProfileBehaviorsResponse} Success
		 */
		ValidateSecurityProfileBehaviors(requestBody: ValidateSecurityProfileBehaviorsPostBody): Observable<ValidateSecurityProfileBehaviorsResponse> {
			return this.http.post<ValidateSecurityProfileBehaviorsResponse>(this.baseUri + 'security-profile-behaviors/validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddThingToBillingGroupPutBody {

		/**
		 * The name of the billing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		billingGroupName?: string | null;

		/** The ARN of the billing group. */
		billingGroupArn?: string | null;

		/**
		 * The name of the thing to be added to the billing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string | null;

		/** The ARN of the thing to be added to the billing group. */
		thingArn?: string | null;
	}

	export interface AddThingToThingGroupPutBody {

		/**
		 * The name of the group to which you are adding a thing.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingGroupName?: string | null;

		/** The ARN of the group to which you are adding a thing. */
		thingGroupArn?: string | null;

		/**
		 * The name of the thing to add to a group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string | null;

		/** The ARN of the thing to add to a group. */
		thingArn?: string | null;

		/** Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group. */
		overrideDynamicGroups?: boolean | null;
	}

	export interface AssociateTargetsWithJobPostBody {

		/**
		 * A list of thing group ARNs that define the targets of the job.
		 * Required
		 * Minimum items: 1
		 */
		targets: Array<string>;

		/**
		 * An optional comment string describing why the job was associated with the targets.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		comment?: string | null;
	}

	export interface AttachPolicyPutBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-security-identity.html">identity</a> to which the policy is attached.
		 * Required
		 */
		target: string;
	}

	export interface DetachPolicyPostBody {

		/**
		 * The target from which the policy will be detached.
		 * Required
		 */
		target: string;
	}

	export interface CancelJobPutBody {

		/**
		 * (Optional)A reason code string that explains why the job was canceled.
		 * Max length: 128
		 * Pattern: [\p{Upper}\p{Digit}_]+
		 */
		reasonCode?: string | null;

		/**
		 * An optional comment string describing why the job was canceled.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		comment?: string | null;
	}

	export interface CancelJobExecutionPutBody {

		/** (Optional) The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.) */
		expectedVersion?: number | null;

		/** A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs. */
		statusDetails?: {[id: string]: string } | null;
	}

	export interface SetDefaultAuthorizerPostBody {

		/**
		 * The authorizer name.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w=,@-]+
		 */
		authorizerName: string;
	}

	export interface CreateAuthorizerPostBody {

		/**
		 * The ARN of the authorizer's Lambda function.
		 * Required
		 */
		authorizerFunctionArn: string;

		/**
		 * The name of the token key used to extract the token from the HTTP headers.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_-]+
		 */
		tokenKeyName?: string | null;

		/** The public keys used to verify the digital signature returned by your custom authentication service. */
		tokenSigningPublicKeys?: {[id: string]: string } | null;

		/** The status of the create authorizer request. */
		status?: AuthorizerDescriptionStatus | null;

		/** <p>Metadata which can be used to manage the custom authorizer.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag> | null;

		/** Specifies whether AWS IoT validates the token signature in an authorization request. */
		signingDisabled?: boolean | null;
	}

	export interface UpdateAuthorizerPutBody {

		/** The ARN of the authorizer's Lambda function. */
		authorizerFunctionArn?: string | null;

		/**
		 * The key used to extract the token from the HTTP headers.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_-]+
		 */
		tokenKeyName?: string | null;

		/** The public keys used to verify the token signature. */
		tokenSigningPublicKeys?: {[id: string]: string } | null;

		/** The status of the update authorizer request. */
		status?: AuthorizerDescriptionStatus | null;
	}

	export interface CreateBillingGroupPostBody {

		/** The properties of a billing group. */
		billingGroupProperties?: CreateBillingGroupPostBodyBillingGroupProperties | null;

		/** Metadata which can be used to manage the billing group. */
		tags?: Array<Tag> | null;
	}

	export interface CreateBillingGroupPostBodyBillingGroupProperties {
		billingGroupDescription?: string | null;
	}

	export interface UpdateBillingGroupPatchBody {

		/**
		 * The properties of a billing group.
		 * Required
		 */
		billingGroupProperties: UpdateBillingGroupPatchBodyBillingGroupProperties;

		/** The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the <code>UpdateBillingGroup</code> request is rejected with a <code>VersionConflictException</code>. */
		expectedVersion?: number | null;
	}

	export interface UpdateBillingGroupPatchBodyBillingGroupProperties {
		billingGroupDescription?: string | null;
	}

	export interface CreateCertificateFromCsrPostBody {

		/**
		 * The certificate signing request (CSR).
		 * Required
		 * Min length: 1
		 */
		certificateSigningRequest: string;
	}

	export interface CreateDimensionPostBody {

		/**
		 * Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code>
		 * Required
		 */
		type: DescribeDimensionResponseType;

		/**
		 * Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		stringValues: Array<string>;

		/** Metadata that can be used to manage the dimension. */
		tags?: Array<Tag> | null;

		/**
		 * Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		clientRequestToken: string;
	}

	export interface UpdateDimensionPatchBody {

		/**
		 * Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		stringValues: Array<string>;
	}

	export interface CreateDomainConfigurationPostBody {

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 */
		domainName?: string | null;

		/**
		 * The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for AWS-managed domains.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		serverCertificateArns?: Array<string> | null;

		/**
		 * The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for AWS-managed domains.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: arn:aws:acm:[a-z]{2}-(gov-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/?[a-zA-Z0-9/-]+
		 */
		validationCertificateArn?: string | null;

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: CreateDomainConfigurationPostBodyAuthorizerConfig | null;

		/** <p>The type of service delivered by the endpoint.</p> <note> <p>AWS IoT Core currently supports only the <code>DATA</code> service type.</p> </note> */
		serviceType?: DescribeDomainConfigurationResponseServiceType | null;

		/** <p>Metadata which can be used to manage the domain configuration.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag> | null;
	}

	export interface CreateDomainConfigurationPostBodyAuthorizerConfig {
		defaultAuthorizerName?: string | null;
		allowAuthorizerOverride?: boolean | null;
	}

	export interface UpdateDomainConfigurationPutBody {

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: UpdateDomainConfigurationPutBodyAuthorizerConfig | null;

		/** The status to which the domain configuration should be updated. */
		domainConfigurationStatus?: DescribeDomainConfigurationResponseDomainConfigurationStatus | null;

		/** Removes the authorization configuration from a domain. */
		removeAuthorizerConfig?: boolean | null;
	}

	export interface UpdateDomainConfigurationPutBodyAuthorizerConfig {
		defaultAuthorizerName?: string | null;
		allowAuthorizerOverride?: boolean | null;
	}

	export interface CreateDynamicThingGroupPostBody {

		/** Thing group properties. */
		thingGroupProperties?: CreateDynamicThingGroupPostBodyThingGroupProperties | null;

		/**
		 * <p>The dynamic thing group index name.</p> <note> <p>Currently one index is supported: "AWS_Things".</p> </note>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string | null;

		/**
		 * <p>The dynamic thing group search query string.</p> <p>See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query Syntax</a> for information about query string syntax.</p>
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/** <p>The dynamic thing group query version.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note> */
		queryVersion?: string | null;

		/** Metadata which can be used to manage the dynamic thing group. */
		tags?: Array<Tag> | null;
	}

	export interface CreateDynamicThingGroupPostBodyThingGroupProperties {
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload | null;
	}

	export interface UpdateDynamicThingGroupPatchBody {

		/**
		 * Thing group properties.
		 * Required
		 */
		thingGroupProperties: UpdateDynamicThingGroupPatchBodyThingGroupProperties;

		/** The expected version of the dynamic thing group to update. */
		expectedVersion?: number | null;

		/**
		 * <p>The dynamic thing group index to update.</p> <note> <p>Currently one index is supported: 'AWS_Things'.</p> </note>
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string | null;

		/**
		 * The dynamic thing group search query string to update.
		 * Min length: 1
		 */
		queryString?: string | null;

		/** <p>The dynamic thing group query version to update.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note> */
		queryVersion?: string | null;
	}

	export interface UpdateDynamicThingGroupPatchBodyThingGroupProperties {
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload | null;
	}

	export interface CreateJobPutBody {

		/**
		 * A list of things and thing groups to which the job should be sent.
		 * Required
		 * Minimum items: 1
		 */
		targets: Array<string>;

		/**
		 * An S3 link to the job document.
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource?: string | null;

		/**
		 * <p>The job document.</p> <note> <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p> <p>The placeholder link is of the following form:</p> <p> <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code> </p> <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p> </note>
		 * Max length: 32768
		 */
		document?: string | null;

		/**
		 * A short text description of the job.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: CreateJobPutBodyPresignedUrlConfig | null;

		/** Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. */
		targetSelection?: JobTargetSelection | null;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: CreateJobPutBodyJobExecutionsRolloutConfig | null;

		/** Details of abort criteria to abort the job. */
		abortConfig?: CreateJobPutBodyAbortConfig | null;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: CreateJobPutBodyTimeoutConfig | null;

		/** Metadata which can be used to manage the job. */
		tags?: Array<Tag> | null;
	}

	export interface CreateJobPutBodyPresignedUrlConfig {
		roleArn?: string | null;
		expiresInSec?: number | null;
	}

	export interface CreateJobPutBodyJobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;

		/** Allows you to create an exponential rate of rollout for a job. */
		exponentialRate?: ExponentialRolloutRate | null;
	}

	export interface CreateJobPutBodyAbortConfig {
		criteriaList?: Array<AbortCriteria> | null;
	}

	export interface CreateJobPutBodyTimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}

	export interface UpdateJobPatchBody {

		/**
		 * A short text description of the job.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: UpdateJobPatchBodyPresignedUrlConfig | null;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: UpdateJobPatchBodyJobExecutionsRolloutConfig | null;

		/** Details of abort criteria to abort the job. */
		abortConfig?: UpdateJobPatchBodyAbortConfig | null;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: UpdateJobPatchBodyTimeoutConfig | null;
	}

	export interface UpdateJobPatchBodyPresignedUrlConfig {
		roleArn?: string | null;
		expiresInSec?: number | null;
	}

	export interface UpdateJobPatchBodyJobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;

		/** Allows you to create an exponential rate of rollout for a job. */
		exponentialRate?: ExponentialRolloutRate | null;
	}

	export interface UpdateJobPatchBodyAbortConfig {
		criteriaList?: Array<AbortCriteria> | null;
	}

	export interface UpdateJobPatchBodyTimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}

	export interface CreateMitigationActionPostBody {

		/**
		 * The ARN of the IAM role that is used to apply the mitigation action.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
		 * Required
		 */
		actionParams: CreateMitigationActionPostBodyActionParams;

		/** Metadata that can be used to manage the mitigation action. */
		tags?: Array<Tag> | null;
	}

	export interface CreateMitigationActionPostBodyActionParams {

		/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams | null;

		/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
		updateCACertificateParams?: UpdateCACertificateParams | null;

		/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
		addThingsToThingGroupParams?: AddThingsToThingGroupParams | null;

		/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams | null;

		/** Parameters used when defining a mitigation action that enable AWS IoT logging. */
		enableIoTLoggingParams?: EnableIoTLoggingParams | null;

		/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
		publishFindingToSnsParams?: PublishFindingToSnsParams | null;
	}

	export interface UpdateMitigationActionPatchBody {

		/**
		 * The ARN of the IAM role that is used to apply the mitigation action.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: UpdateMitigationActionPatchBodyActionParams | null;
	}

	export interface UpdateMitigationActionPatchBodyActionParams {

		/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams | null;

		/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
		updateCACertificateParams?: UpdateCACertificateParams | null;

		/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
		addThingsToThingGroupParams?: AddThingsToThingGroupParams | null;

		/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams | null;

		/** Parameters used when defining a mitigation action that enable AWS IoT logging. */
		enableIoTLoggingParams?: EnableIoTLoggingParams | null;

		/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
		publishFindingToSnsParams?: PublishFindingToSnsParams | null;
	}

	export interface CreateOTAUpdatePostBody {

		/**
		 * The description of the OTA update.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		description?: string | null;

		/**
		 * The targeted devices to receive OTA updates.
		 * Required
		 * Minimum items: 1
		 */
		targets: Array<string>;

		/**
		 * The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both HTTP and MQTT are specified, the target device can choose the protocol.
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		protocols?: Array<Protocol> | null;

		/** Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT. */
		targetSelection?: JobTargetSelection | null;

		/** Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfig | null;

		/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: CreateOTAUpdatePostBodyAwsJobPresignedUrlConfig | null;

		/**
		 * The files to be streamed by the OTA update.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files: Array<OTAUpdateFile>;

		/**
		 * The IAM role that allows access to the AWS IoT Jobs service.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/** A list of additional OTA update parameters which are name-value pairs. */
		additionalParameters?: {[id: string]: string } | null;

		/** Metadata which can be used to manage updates. */
		tags?: Array<Tag> | null;
	}

	export interface CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;
	}

	export interface CreateOTAUpdatePostBodyAwsJobPresignedUrlConfig {
		expiresInSec?: number | null;
	}

	export interface CreatePolicyPostBody {

		/**
		 * The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.
		 * Required
		 */
		policyDocument: string;

		/** <p>Metadata which can be used to manage the policy.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag> | null;
	}

	export interface CreatePolicyVersionPostBody {

		/**
		 * The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.
		 * Required
		 */
		policyDocument: string;
	}

	export interface CreateProvisioningTemplatePostBody {

		/**
		 * The name of the fleet provisioning template.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 * Pattern: ^[0-9A-Za-z_-]+$
		 */
		templateName: string;

		/**
		 * The description of the fleet provisioning template.
		 * Max length: 500
		 * Min length: 0
		 * Pattern: [^\p{C}]*
		 */
		description?: string | null;

		/**
		 * The JSON formatted contents of the fleet provisioning template.
		 * Required
		 */
		templateBody: string;

		/** True to enable the fleet provisioning template, otherwise false. */
		enabled?: boolean | null;

		/**
		 * The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: string;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: CreateProvisioningTemplatePostBodyPreProvisioningHook | null;

		/** <p>Metadata which can be used to manage the fleet provisioning template.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag> | null;
	}

	export interface CreateProvisioningTemplatePostBodyPreProvisioningHook {
		payloadVersion?: string | null;
		targetArn?: string | null;
	}

	export interface CreateProvisioningTemplateVersionPostBody {

		/**
		 * The JSON formatted contents of the fleet provisioning template.
		 * Required
		 */
		templateBody: string;
	}

	export interface CreateRoleAliasPostBody {

		/**
		 * The role ARN.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * How long (in seconds) the credentials will be valid.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds?: number | null;

		/** <p>Metadata which can be used to manage the role alias.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag> | null;
	}

	export interface UpdateRoleAliasPutBody {

		/**
		 * The role ARN.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/**
		 * The number of seconds the credential will be valid.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds?: number | null;
	}

	export interface CreateScheduledAuditPostBody {

		/**
		 * How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY", "BIWEEKLY" or "MONTHLY". The start time of each audit is determined by the system.
		 * Required
		 */
		frequency: DescribeScheduledAuditResponseFrequency;

		/**
		 * The day of the month on which the scheduled audit takes place. Can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to "MONTHLY". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.
		 * Pattern: ^([1-9]|[12][0-9]|3[01])$|^LAST$
		 */
		dayOfMonth?: string | null;

		/** The day of the week on which the scheduled audit takes place. Can be one of "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the "frequency" parameter is set to "WEEKLY" or "BIWEEKLY". */
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;

		/**
		 * Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		targetCheckNames: Array<string>;

		/** Metadata that can be used to manage the scheduled audit. */
		tags?: Array<Tag> | null;
	}

	export interface UpdateScheduledAuditPatchBody {

		/** How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY", "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by the system. */
		frequency?: DescribeScheduledAuditResponseFrequency | null;

		/**
		 * The day of the month on which the scheduled audit takes place. Can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to "MONTHLY". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.
		 * Pattern: ^([1-9]|[12][0-9]|3[01])$|^LAST$
		 */
		dayOfMonth?: string | null;

		/** The day of the week on which the scheduled audit takes place. Can be one of "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the "frequency" parameter is set to "WEEKLY" or "BIWEEKLY". */
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;

		/** Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		targetCheckNames?: Array<string> | null;
	}

	export interface CreateSecurityProfilePostBody {

		/**
		 * A description of the security profile.
		 * Max length: 1000
		 * Pattern: [\p{Graph}\x20]*
		 */
		securityProfileDescription?: string | null;

		/**
		 * Specifies the behaviors that, when violated by a device (thing), cause an alert.
		 * Maximum items: 100
		 */
		behaviors?: Array<Behavior> | null;

		/** Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior. */
		alertTargets?: {[id: string]: AlertTarget } | null;

		/** <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here.</p> <p> <b>Note:</b> This API field is deprecated. Please use <a>CreateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</p> */
		additionalMetricsToRetain?: Array<string> | null;

		/** A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. */
		additionalMetricsToRetainV2?: Array<MetricToRetain> | null;

		/** Metadata that can be used to manage the security profile. */
		tags?: Array<Tag> | null;
	}

	export interface UpdateSecurityProfilePatchBody {

		/**
		 * A description of the security profile.
		 * Max length: 1000
		 * Pattern: [\p{Graph}\x20]*
		 */
		securityProfileDescription?: string | null;

		/**
		 * Specifies the behaviors that, when violated by a device (thing), cause an alert.
		 * Maximum items: 100
		 */
		behaviors?: Array<Behavior> | null;

		/** Where the alerts are sent. (Alerts are always sent to the console.) */
		alertTargets?: {[id: string]: AlertTarget } | null;

		/** <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here.</p> <p> <b>Note:</b> This API field is deprecated. Please use <a>UpdateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</p> */
		additionalMetricsToRetain?: Array<string> | null;

		/** A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. */
		additionalMetricsToRetainV2?: Array<MetricToRetain> | null;

		/** If true, delete all <code>behaviors</code> defined for this security profile. If any <code>behaviors</code> are defined in the current invocation, an exception occurs. */
		deleteBehaviors?: boolean | null;

		/** If true, delete all <code>alertTargets</code> defined for this security profile. If any <code>alertTargets</code> are defined in the current invocation, an exception occurs. */
		deleteAlertTargets?: boolean | null;

		/** If true, delete all <code>additionalMetricsToRetain</code> defined for this security profile. If any <code>additionalMetricsToRetain</code> are defined in the current invocation, an exception occurs. */
		deleteAdditionalMetricsToRetain?: boolean | null;
	}

	export interface CreateStreamPostBody {

		/**
		 * A description of the stream.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		description?: string | null;

		/**
		 * The files to stream.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files: Array<StreamFile>;

		/**
		 * An IAM role that allows the IoT service principal assumes to access your S3 files.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/** Metadata which can be used to manage streams. */
		tags?: Array<Tag> | null;
	}

	export interface UpdateStreamPutBody {

		/**
		 * The description of the stream.
		 * Max length: 2028
		 * Pattern: [^\p{C}]+
		 */
		description?: string | null;

		/**
		 * The files associated with the stream.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files?: Array<StreamFile> | null;

		/**
		 * An IAM role that allows the IoT service principal assumes to access your S3 files.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
	}

	export interface CreateThingPostBody {

		/**
		 * The name of the thing type associated with the new thing.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingTypeName?: string | null;

		/** The attribute payload. */
		attributePayload?: CreateThingPostBodyAttributePayload | null;

		/**
		 * The name of the billing group the thing will be added to.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		billingGroupName?: string | null;
	}

	export interface CreateThingPostBodyAttributePayload {
		attributes?: Attributes | null;
		merge?: boolean | null;
	}

	export interface UpdateThingPatchBody {

		/**
		 * The name of the thing type.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingTypeName?: string | null;

		/** The attribute payload. */
		attributePayload?: UpdateThingPatchBodyAttributePayload | null;

		/** The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>UpdateThing</code> request is rejected with a <code>VersionConflictException</code>. */
		expectedVersion?: number | null;

		/** Remove a thing type association. If <b>true</b>, the association is removed. */
		removeThingType?: boolean | null;
	}

	export interface UpdateThingPatchBodyAttributePayload {
		attributes?: Attributes | null;
		merge?: boolean | null;
	}

	export interface CreateThingGroupPostBody {

		/**
		 * The name of the parent thing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		parentGroupName?: string | null;

		/** Thing group properties. */
		thingGroupProperties?: CreateThingGroupPostBodyThingGroupProperties | null;

		/** Metadata which can be used to manage the thing group. */
		tags?: Array<Tag> | null;
	}

	export interface CreateThingGroupPostBodyThingGroupProperties {
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload | null;
	}

	export interface UpdateThingGroupPatchBody {

		/**
		 * Thing group properties.
		 * Required
		 */
		thingGroupProperties: UpdateThingGroupPatchBodyThingGroupProperties;

		/** The expected version of the thing group. If this does not match the version of the thing group being updated, the update will fail. */
		expectedVersion?: number | null;
	}

	export interface UpdateThingGroupPatchBodyThingGroupProperties {
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload | null;
	}

	export interface CreateThingTypePostBody {

		/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: CreateThingTypePostBodyThingTypeProperties | null;

		/** Metadata which can be used to manage the thing type. */
		tags?: Array<Tag> | null;
	}

	export interface CreateThingTypePostBodyThingTypeProperties {
		thingTypeDescription?: string | null;
		searchableAttributes?: Array<string> | null;
	}

	export interface CreateTopicRulePostBody {

		/**
		 * Describes a rule.
		 * Required
		 */
		topicRulePayload: CreateTopicRulePostBodyTopicRulePayload;
	}

	export interface CreateTopicRulePostBodyTopicRulePayload {
		sql?: string | null;
		description?: string | null;
		actions?: Array<Action> | null;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string | null;

		/** Describes the actions associated with a rule. */
		errorAction?: Action | null;
	}

	export interface ReplaceTopicRulePatchBody {

		/**
		 * Describes a rule.
		 * Required
		 */
		topicRulePayload: ReplaceTopicRulePatchBodyTopicRulePayload;
	}

	export interface ReplaceTopicRulePatchBodyTopicRulePayload {
		sql?: string | null;
		description?: string | null;
		actions?: Array<Action> | null;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string | null;

		/** Describes the actions associated with a rule. */
		errorAction?: Action | null;
	}

	export interface CreateTopicRuleDestinationPostBody {

		/**
		 * Configuration of the topic rule destination.
		 * Required
		 */
		destinationConfiguration: CreateTopicRuleDestinationPostBodyDestinationConfiguration;
	}

	export interface CreateTopicRuleDestinationPostBodyDestinationConfiguration {

		/** HTTP URL destination configuration used by the topic rule's HTTP action. */
		httpUrlConfiguration?: HttpUrlDestinationConfiguration | null;
	}

	export interface UpdateTopicRuleDestinationPatchBody {

		/**
		 * The ARN of the topic rule destination.
		 * Required
		 */
		arn: string;

		/**
		 * <p>The status of the topic rule destination. Valid values are:</p> <dl> <dt>IN_PROGRESS</dt> <dd> <p>A topic rule destination was created but has not been confirmed. You can set <code>status</code> to <code>IN_PROGRESS</code> by calling <code>UpdateTopicRuleDestination</code>. Calling <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to be sent to your confirmation endpoint.</p> </dd> <dt>ENABLED</dt> <dd> <p>Confirmation was completed, and traffic to this destination is allowed. You can set <code>status</code> to <code>DISABLED</code> by calling <code>UpdateTopicRuleDestination</code>.</p> </dd> <dt>DISABLED</dt> <dd> <p>Confirmation was completed, and traffic to this destination is not allowed. You can set <code>status</code> to <code>ENABLED</code> by calling <code>UpdateTopicRuleDestination</code>.</p> </dd> <dt>ERROR</dt> <dd> <p>Confirmation could not be completed, for example if the confirmation timed out. You can call <code>GetTopicRuleDestination</code> for details about the error. You can set <code>status</code> to <code>IN_PROGRESS</code> by calling <code>UpdateTopicRuleDestination</code>. Calling <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to be sent to your confirmation endpoint.</p> </dd> </dl>
		 * Required
		 */
		status: TopicRuleDestinationStatus;
	}

	export interface UpdateAccountAuditConfigurationPatchBody {

		/**
		 * The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/** Information about the targets to which audit notifications are sent. */
		auditNotificationTargetConfigurations?: {[id: string]: AuditNotificationTarget } | null;

		/** <p>Specifies which audit checks are enabled and disabled for this account. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are currently enabled.</p> <p>Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted.</p> <p>You cannot disable a check if it is used by any scheduled audit. You must first delete the check from the scheduled audit or delete the scheduled audit itself.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code>, this parameter is required and must specify at least one enabled check.</p> */
		auditCheckConfigurations?: {[id: string]: AuditCheckConfiguration } | null;
	}

	export interface UpdateCACertificatePutBody {

		/** The registration configuration. */
		registrationConfig?: UpdateCACertificatePutBodyRegistrationConfig | null;

		/** If true, removes auto registration. */
		removeAutoRegistration?: boolean | null;
	}

	export interface UpdateCACertificatePutBodyRegistrationConfig {
		templateBody?: string | null;
		roleArn?: string | null;
	}

	export interface UpdateProvisioningTemplatePatchBody {

		/**
		 * The description of the fleet provisioning template.
		 * Max length: 500
		 * Min length: 0
		 * Pattern: [^\p{C}]*
		 */
		description?: string | null;

		/** True to enable the fleet provisioning template, otherwise false. */
		enabled?: boolean | null;

		/** The ID of the default provisioning template version. */
		defaultVersionId?: number | null;

		/**
		 * The ARN of the role associated with the provisioning template. This IoT role grants permission to provision a device.
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn?: string | null;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: UpdateProvisioningTemplatePatchBodyPreProvisioningHook | null;

		/** Removes pre-provisioning hook template. */
		removePreProvisioningHook?: boolean | null;
	}

	export interface UpdateProvisioningTemplatePatchBodyPreProvisioningHook {
		payloadVersion?: string | null;
		targetArn?: string | null;
	}

	export interface DeprecateThingTypePostBody {

		/** Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can associate it with things. */
		undoDeprecate?: boolean | null;
	}

	export interface StartAuditMitigationActionsTaskPostBody {

		/**
		 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
		 * Required
		 */
		target: StartAuditMitigationActionsTaskPostBodyTarget;

		/**
		 * For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account.
		 * Required
		 */
		auditCheckToActionsMapping: {[id: string]: Array<string> };

		/**
		 * Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9-_]+$
		 */
		clientRequestToken: string;
	}

	export interface StartAuditMitigationActionsTaskPostBodyTarget {
		auditTaskId?: string | null;
		findingIds?: Array<string> | null;
		auditCheckToReasonCodeFilter?: AuditCheckToReasonCodeFilter | null;
	}

	export interface UpdateEventConfigurationsPatchBody {

		/** The new event configuration values. */
		eventConfigurations?: {[id: string]: Configuration } | null;
	}

	export interface GetCardinalityPostBody {

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string | null;

		/**
		 * The search query.
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField?: string | null;

		/** The query version. */
		queryVersion?: string | null;
	}

	export interface GetEffectivePoliciesPostBody {

		/** The principal. */
		principal?: string | null;

		/** The Cognito identity pool ID. */
		cognitoIdentityPoolId?: string | null;
	}

	export interface UpdateIndexingConfigurationPostBody {

		/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
		thingIndexingConfiguration?: UpdateIndexingConfigurationPostBodyThingIndexingConfiguration | null;

		/** Thing group indexing configuration. */
		thingGroupIndexingConfiguration?: UpdateIndexingConfigurationPostBodyThingGroupIndexingConfiguration | null;
	}

	export interface UpdateIndexingConfigurationPostBodyThingIndexingConfiguration {
		thingIndexingMode?: ThingIndexingConfigurationThingIndexingMode | null;
		thingConnectivityIndexingMode?: ThingIndexingConfigurationThingConnectivityIndexingMode | null;
		managedFields?: Array<Field> | null;
		customFields?: Array<Field> | null;
	}

	export interface UpdateIndexingConfigurationPostBodyThingGroupIndexingConfiguration {
		thingGroupIndexingMode?: ThingGroupIndexingConfigurationThingGroupIndexingMode | null;
		managedFields?: Array<Field> | null;
		customFields?: Array<Field> | null;
	}

	export interface SetLoggingOptionsPostBody {

		/**
		 * Describes the logging options payload.
		 * Required
		 */
		loggingOptionsPayload: SetLoggingOptionsPostBodyLoggingOptionsPayload;
	}

	export interface SetLoggingOptionsPostBodyLoggingOptionsPayload {
		roleArn?: string | null;
		logLevel?: EnableIoTLoggingParamsLogLevel | null;
	}

	export interface GetPercentilesPostBody {

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string | null;

		/**
		 * The query string.
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField?: string | null;

		/** The query version. */
		queryVersion?: string | null;

		/** The percentile groups returned. */
		percents?: Array<number> | null;
	}

	export interface GetStatisticsPostBody {

		/**
		 * The name of the index to search. The default value is <code>AWS_Things</code>.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string | null;

		/**
		 * The query used to search. You can specify "*" for the query string to get the count of all indexed things in your AWS account.
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The aggregation field name.
		 * Min length: 1
		 */
		aggregationField?: string | null;

		/** The version of the query used to search. */
		queryVersion?: string | null;
	}

	export interface SetV2LoggingOptionsPostBody {

		/** The ARN of the role that allows IoT to write to Cloudwatch logs. */
		roleArn?: string | null;

		/** The default logging level. */
		defaultLogLevel?: EnableIoTLoggingParamsLogLevel | null;

		/** If true all logs are disabled. The default is false. */
		disableAllLogs?: boolean | null;
	}

	export interface ListAuditFindingsPostBody {

		/**
		 * A filter to limit results to the audit with the specified ID. You must specify either the taskId or the startTime and endTime, but not both.
		 * Max length: 40
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9\-]+
		 */
		taskId?: string | null;

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ListAuditFindingsPostBodyResourceIdentifier | null;

		/**
		 * The maximum number of results to return at one time. The default is 25.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number | null;

		/** The token for the next set of results. */
		nextToken?: string | null;

		/** A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both. */
		startTime?: Date | null;

		/** A filter to limit results to those found before the specified time. You must specify either the startTime and endTime or the taskId, but not both. */
		endTime?: Date | null;
	}

	export interface ListAuditFindingsPostBodyResourceIdentifier {
		deviceCertificateId?: string | null;
		caCertificateId?: string | null;
		cognitoIdentityPoolId?: string | null;
		clientId?: string | null;

		/** Information about the version of the policy associated with the resource. */
		policyVersionIdentifier?: PolicyVersionIdentifier | null;
		account?: string | null;
		iamRoleArn?: string | null;
		roleAliasArn?: string | null;
	}

	export interface StartThingRegistrationTaskPostBody {

		/**
		 * The provisioning template.
		 * Required
		 */
		templateBody: string;

		/**
		 * The S3 bucket that contains the input file.
		 * Required
		 * Max length: 256
		 * Min length: 3
		 * Pattern: [a-zA-Z0-9._-]+
		 */
		inputFileBucket: string;

		/**
		 * The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9!_.*'()-\/]+
		 */
		inputFileKey: string;

		/**
		 * The IAM role ARN that grants permission the input file.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;
	}

	export interface RegisterThingPostBody {

		/**
		 * The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.
		 * Required
		 */
		templateBody: string;

		/** The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information. */
		parameters?: {[id: string]: string } | null;
	}

	export interface SetV2LoggingLevelPostBody {

		/**
		 * A log target.
		 * Required
		 */
		logTarget: SetV2LoggingLevelPostBodyLogTarget;

		/**
		 * The log level.
		 * Required
		 */
		logLevel: EnableIoTLoggingParamsLogLevel;
	}

	export interface SetV2LoggingLevelPostBodyLogTarget {
		targetType?: LogTargetTargetType | null;
		targetName?: string | null;
	}

	export interface RegisterCACertificatePostBody {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificate: string;

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate: string;

		/** The registration configuration. */
		registrationConfig?: RegisterCACertificatePostBodyRegistrationConfig | null;

		/** <p>Metadata which can be used to manage the CA certificate.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag> | null;
	}

	export interface RegisterCACertificatePostBodyRegistrationConfig {
		templateBody?: string | null;
		roleArn?: string | null;
	}

	export interface RegisterCertificatePostBody {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificatePem?: string | null;

		/** The status of the register certificate request. */
		status?: CertificateDescriptionStatus | null;
	}

	export interface RegisterCertificateWithoutCAPostBody {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;

		/** The status of the register certificate request. */
		status?: CertificateDescriptionStatus | null;
	}

	export interface RejectCertificateTransferPatchBody {

		/**
		 * The reason the certificate transfer was rejected.
		 * Max length: 128
		 */
		rejectReason?: string | null;
	}

	export interface RemoveThingFromBillingGroupPutBody {

		/**
		 * The name of the billing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		billingGroupName?: string | null;

		/** The ARN of the billing group. */
		billingGroupArn?: string | null;

		/**
		 * The name of the thing to be removed from the billing group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string | null;

		/** The ARN of the thing to be removed from the billing group. */
		thingArn?: string | null;
	}

	export interface RemoveThingFromThingGroupPutBody {

		/**
		 * The group name.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingGroupName?: string | null;

		/** The group ARN. */
		thingGroupArn?: string | null;

		/**
		 * The name of the thing to remove from the group.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string | null;

		/** The ARN of the thing to remove from the group. */
		thingArn?: string | null;
	}

	export interface SearchIndexPostBody {

		/**
		 * The search index name.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		indexName?: string | null;

		/**
		 * The search query string.
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/** The token used to get the next set of results, or <code>null</code> if there are no additional results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return at one time.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;

		/** The query version. */
		queryVersion?: string | null;
	}

	export interface StartOnDemandAuditTaskPostBody {

		/**
		 * Which checks are performed during the audit. The checks you specify must be enabled for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.
		 * Required
		 */
		targetCheckNames: Array<string>;
	}

	export interface TagResourcePostBody {

		/**
		 * The ARN of the resource.
		 * Required
		 */
		resourceArn: string;

		/**
		 * The new or modified tags for the resource.
		 * Required
		 */
		tags: Array<Tag>;
	}

	export interface TestAuthorizationPostBody {

		/** The principal. */
		principal?: string | null;

		/** The Cognito identity pool ID. */
		cognitoIdentityPoolId?: string | null;

		/**
		 * A list of authorization info objects. Simulating authorization will create a response for each <code>authInfo</code> object in the list.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		authInfos: Array<AuthInfo>;

		/** When testing custom authorization, the policies specified here are treated as if they are attached to the principal being authorized. */
		policyNamesToAdd?: Array<string> | null;

		/** When testing custom authorization, the policies specified here are treated as if they are not attached to the principal being authorized. */
		policyNamesToSkip?: Array<string> | null;
	}

	export interface TestInvokeAuthorizerPostBody {

		/**
		 * The token returned by your custom authentication service.
		 * Max length: 6144
		 * Min length: 1
		 */
		token?: string | null;

		/**
		 * The signature made with the token and your custom authentication service's private key. This value must be Base-64-encoded.
		 * Max length: 2560
		 * Min length: 1
		 * Pattern: [A-Za-z0-9+/]+={0,2}
		 */
		tokenSignature?: string | null;

		/** Specifies the HTTP context to use for the test authorizer request. */
		httpContext?: TestInvokeAuthorizerPostBodyHttpContext | null;

		/** Specifies the MQTT context to use for the test authorizer request */
		mqttContext?: TestInvokeAuthorizerPostBodyMqttContext | null;

		/** Specifies the TLS context to use for the test authorizer request. */
		tlsContext?: TestInvokeAuthorizerPostBodyTlsContext | null;
	}

	export interface TestInvokeAuthorizerPostBodyHttpContext {
		headers?: HttpHeaders | null;
		queryString?: string | null;
	}

	export interface TestInvokeAuthorizerPostBodyMqttContext {
		username?: string | null;
		password?: string | null;
		clientId?: string | null;
	}

	export interface TestInvokeAuthorizerPostBodyTlsContext {
		serverName?: string | null;
	}

	export interface TransferCertificatePatchBody {

		/**
		 * The transfer message.
		 * Max length: 128
		 */
		transferMessage?: string | null;
	}

	export interface UntagResourcePostBody {

		/**
		 * The ARN of the resource.
		 * Required
		 */
		resourceArn: string;

		/**
		 * A list of the keys of the tags to be removed from the resource.
		 * Required
		 */
		tagKeys: Array<string>;
	}

	export interface UpdateThingGroupsForThingPutBody {

		/**
		 * The thing whose group memberships will be updated.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9:_-]+
		 */
		thingName?: string | null;

		/** The groups to which the thing will be added. */
		thingGroupsToAdd?: Array<string> | null;

		/** The groups from which the thing will be removed. */
		thingGroupsToRemove?: Array<string> | null;

		/** Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group. */
		overrideDynamicGroups?: boolean | null;
	}

	export interface ValidateSecurityProfileBehaviorsPostBody {

		/**
		 * Specifies the behaviors that, when violated by a device (thing), cause an alert.
		 * Required
		 * Maximum items: 100
		 */
		behaviors: Array<Behavior>;
	}

}

