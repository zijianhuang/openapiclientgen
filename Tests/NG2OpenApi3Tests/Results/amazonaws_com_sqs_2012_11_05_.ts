import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface OverLimit {
	}
	export interface OverLimitFormProperties {
	}
	export function CreateOverLimitFormGroup() {
		return new FormGroup<OverLimitFormProperties>({
		});

	}

	export interface CancelMessageMoveTaskResult {
		ApproximateNumberOfMessagesMoved?: number | null;
	}
	export interface CancelMessageMoveTaskResultFormProperties {
		ApproximateNumberOfMessagesMoved: FormControl<number | null | undefined>,
	}
	export function CreateCancelMessageMoveTaskResultFormGroup() {
		return new FormGroup<CancelMessageMoveTaskResultFormProperties>({
			ApproximateNumberOfMessagesMoved: new FormControl<number | null | undefined>(undefined),
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

	export interface UnsupportedOperation {
	}
	export interface UnsupportedOperationFormProperties {
	}
	export function CreateUnsupportedOperationFormGroup() {
		return new FormGroup<UnsupportedOperationFormProperties>({
		});

	}

	export interface MessageNotInflight {
	}
	export interface MessageNotInflightFormProperties {
	}
	export function CreateMessageNotInflightFormGroup() {
		return new FormGroup<MessageNotInflightFormProperties>({
		});

	}

	export interface ReceiptHandleIsInvalid {
	}
	export interface ReceiptHandleIsInvalidFormProperties {
	}
	export function CreateReceiptHandleIsInvalidFormGroup() {
		return new FormGroup<ReceiptHandleIsInvalidFormProperties>({
		});

	}


	/** For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails. */
	export interface ChangeMessageVisibilityBatchResult {

		/** Required */
		Successful: Array<string>;

		/** Required */
		Failed: Array<string>;
	}

	/** For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails. */
	export interface ChangeMessageVisibilityBatchResultFormProperties {
	}
	export function CreateChangeMessageVisibilityBatchResultFormGroup() {
		return new FormGroup<ChangeMessageVisibilityBatchResultFormProperties>({
		});

	}


	/** Encloses a receipt handle and an entry ID for each message in <code> <a>ChangeMessageVisibilityBatch</a>.</code>  */
	export interface ChangeMessageVisibilityBatchRequestEntry {

		/** Required */
		Id: string;

		/** Required */
		ReceiptHandle: string;
		VisibilityTimeout?: number | null;
	}

	/** Encloses a receipt handle and an entry ID for each message in <code> <a>ChangeMessageVisibilityBatch</a>.</code>  */
	export interface ChangeMessageVisibilityBatchRequestEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ReceiptHandle: FormControl<string | null | undefined>,
		VisibilityTimeout: FormControl<number | null | undefined>,
	}
	export function CreateChangeMessageVisibilityBatchRequestEntryFormGroup() {
		return new FormGroup<ChangeMessageVisibilityBatchRequestEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReceiptHandle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VisibilityTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TooManyEntriesInBatchRequest {
	}
	export interface TooManyEntriesInBatchRequestFormProperties {
	}
	export function CreateTooManyEntriesInBatchRequestFormGroup() {
		return new FormGroup<TooManyEntriesInBatchRequestFormProperties>({
		});

	}

	export interface EmptyBatchRequest {
	}
	export interface EmptyBatchRequestFormProperties {
	}
	export function CreateEmptyBatchRequestFormGroup() {
		return new FormGroup<EmptyBatchRequestFormProperties>({
		});

	}

	export interface BatchEntryIdsNotDistinct {
	}
	export interface BatchEntryIdsNotDistinctFormProperties {
	}
	export function CreateBatchEntryIdsNotDistinctFormGroup() {
		return new FormGroup<BatchEntryIdsNotDistinctFormProperties>({
		});

	}

	export interface InvalidBatchEntryId {
	}
	export interface InvalidBatchEntryIdFormProperties {
	}
	export function CreateInvalidBatchEntryIdFormGroup() {
		return new FormGroup<InvalidBatchEntryIdFormProperties>({
		});

	}


	/** Returns the <code>QueueUrl</code> attribute of the created queue. */
	export interface CreateQueueResult {
		QueueUrl?: string;
	}

	/** Returns the <code>QueueUrl</code> attribute of the created queue. */
	export interface CreateQueueResultFormProperties {
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateQueueResultFormGroup() {
		return new FormGroup<CreateQueueResultFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueueDeletedRecently {
	}
	export interface QueueDeletedRecentlyFormProperties {
	}
	export function CreateQueueDeletedRecentlyFormGroup() {
		return new FormGroup<QueueDeletedRecentlyFormProperties>({
		});

	}

	export interface QueueNameExists {
	}
	export interface QueueNameExistsFormProperties {
	}
	export function CreateQueueNameExistsFormGroup() {
		return new FormGroup<QueueNameExistsFormProperties>({
		});

	}

	export interface InvalidIdFormat {
	}
	export interface InvalidIdFormatFormProperties {
	}
	export function CreateInvalidIdFormatFormGroup() {
		return new FormGroup<InvalidIdFormatFormProperties>({
		});

	}


	/** For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted. */
	export interface DeleteMessageBatchResult {

		/** Required */
		Successful: Array<string>;

		/** Required */
		Failed: Array<string>;
	}

	/** For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted. */
	export interface DeleteMessageBatchResultFormProperties {
	}
	export function CreateDeleteMessageBatchResultFormGroup() {
		return new FormGroup<DeleteMessageBatchResultFormProperties>({
		});

	}


	/** Encloses a receipt handle and an identifier for it. */
	export interface DeleteMessageBatchRequestEntry {

		/** Required */
		Id: string;

		/** Required */
		ReceiptHandle: string;
	}

	/** Encloses a receipt handle and an identifier for it. */
	export interface DeleteMessageBatchRequestEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		ReceiptHandle: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMessageBatchRequestEntryFormGroup() {
		return new FormGroup<DeleteMessageBatchRequestEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReceiptHandle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of returned queue attributes. */
	export interface GetQueueAttributesResult {
		Attributes?: QueueAttributeMap;
	}

	/** A list of returned queue attributes. */
	export interface GetQueueAttributesResultFormProperties {
	}
	export function CreateGetQueueAttributesResultFormGroup() {
		return new FormGroup<GetQueueAttributesResultFormProperties>({
		});

	}

	export interface QueueAttributeMap {
	}
	export interface QueueAttributeMapFormProperties {
	}
	export function CreateQueueAttributeMapFormGroup() {
		return new FormGroup<QueueAttributeMapFormProperties>({
		});

	}

	export enum QueueAttributeName { All = 0, Policy = 1, VisibilityTimeout = 2, MaximumMessageSize = 3, MessageRetentionPeriod = 4, ApproximateNumberOfMessages = 5, ApproximateNumberOfMessagesNotVisible = 6, CreatedTimestamp = 7, LastModifiedTimestamp = 8, QueueArn = 9, ApproximateNumberOfMessagesDelayed = 10, DelaySeconds = 11, ReceiveMessageWaitTimeSeconds = 12, RedrivePolicy = 13, FifoQueue = 14, ContentBasedDeduplication = 15, KmsMasterKeyId = 16, KmsDataKeyReusePeriodSeconds = 17, DeduplicationScope = 18, FifoThroughputLimit = 19, RedriveAllowPolicy = 20, SqsManagedSseEnabled = 21 }

	export interface InvalidAttributeName {
	}
	export interface InvalidAttributeNameFormProperties {
	}
	export function CreateInvalidAttributeNameFormGroup() {
		return new FormGroup<InvalidAttributeNameFormProperties>({
		});

	}


	/** For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html">Interpreting Responses</a> in the <i>Amazon SQS Developer Guide</i>. */
	export interface GetQueueUrlResult {
		QueueUrl?: string;
	}

	/** For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html">Interpreting Responses</a> in the <i>Amazon SQS Developer Guide</i>. */
	export interface GetQueueUrlResultFormProperties {
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetQueueUrlResultFormGroup() {
		return new FormGroup<GetQueueUrlResultFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueueDoesNotExist {
	}
	export interface QueueDoesNotExistFormProperties {
	}
	export function CreateQueueDoesNotExistFormGroup() {
		return new FormGroup<QueueDoesNotExistFormProperties>({
		});

	}


	/** A list of your dead letter source queues. */
	export interface ListDeadLetterSourceQueuesResult {

		/** Required */
		queueUrls: Array<string>;
		NextToken?: string;
	}

	/** A list of your dead letter source queues. */
	export interface ListDeadLetterSourceQueuesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeadLetterSourceQueuesResultFormGroup() {
		return new FormGroup<ListDeadLetterSourceQueuesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMessageMoveTasksResult {
		Results?: Array<string>;
	}
	export interface ListMessageMoveTasksResultFormProperties {
	}
	export function CreateListMessageMoveTasksResultFormGroup() {
		return new FormGroup<ListMessageMoveTasksResultFormProperties>({
		});

	}

	export interface ListQueueTagsResult {
		Tags?: TagMap;
	}
	export interface ListQueueTagsResultFormProperties {
	}
	export function CreateListQueueTagsResultFormGroup() {
		return new FormGroup<ListQueueTagsResultFormProperties>({
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


	/** A list of your queues. */
	export interface ListQueuesResult {
		QueueUrls?: Array<string>;
		NextToken?: string;
	}

	/** A list of your queues. */
	export interface ListQueuesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueuesResultFormGroup() {
		return new FormGroup<ListQueuesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PurgeQueueInProgress {
	}
	export interface PurgeQueueInProgressFormProperties {
	}
	export function CreatePurgeQueueInProgressFormGroup() {
		return new FormGroup<PurgeQueueInProgressFormProperties>({
		});

	}


	/** A list of received messages. */
	export interface ReceiveMessageResult {
		Messages?: Array<string>;
	}

	/** A list of received messages. */
	export interface ReceiveMessageResultFormProperties {
	}
	export function CreateReceiveMessageResultFormGroup() {
		return new FormGroup<ReceiveMessageResultFormProperties>({
		});

	}


	/** The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements. */
	export interface SendMessageResult {
		MD5OfMessageBody?: string;
		MD5OfMessageAttributes?: string;
		MD5OfMessageSystemAttributes?: string;
		MessageId?: string;
		SequenceNumber?: string;
	}

	/** The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements. */
	export interface SendMessageResultFormProperties {
		MD5OfMessageBody: FormControl<string | null | undefined>,
		MD5OfMessageAttributes: FormControl<string | null | undefined>,
		MD5OfMessageSystemAttributes: FormControl<string | null | undefined>,
		MessageId: FormControl<string | null | undefined>,
		SequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageResultFormGroup() {
		return new FormGroup<SendMessageResultFormProperties>({
			MD5OfMessageBody: new FormControl<string | null | undefined>(undefined),
			MD5OfMessageAttributes: new FormControl<string | null | undefined>(undefined),
			MD5OfMessageSystemAttributes: new FormControl<string | null | undefined>(undefined),
			MessageId: new FormControl<string | null | undefined>(undefined),
			SequenceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KiB or 262,144 bytes).</p> */
	export interface MessageAttributeValue {
		StringValue?: string;
		BinaryValue?: string;
		StringListValues?: Array<string>;
		BinaryListValues?: Array<string>;

		/** Required */
		DataType: string;
	}

	/** <p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KiB or 262,144 bytes).</p> */
	export interface MessageAttributeValueFormProperties {
		StringValue: FormControl<string | null | undefined>,
		BinaryValue: FormControl<string | null | undefined>,

		/** Required */
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateMessageAttributeValueFormGroup() {
		return new FormGroup<MessageAttributeValueFormProperties>({
			StringValue: new FormControl<string | null | undefined>(undefined),
			BinaryValue: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p> */
	export interface MessageSystemAttributeValue {
		StringValue?: string;
		BinaryValue?: string;
		StringListValues?: Array<string>;
		BinaryListValues?: Array<string>;

		/** Required */
		DataType: string;
	}

	/** <p>The user-specified message system attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null.</p> */
	export interface MessageSystemAttributeValueFormProperties {
		StringValue: FormControl<string | null | undefined>,
		BinaryValue: FormControl<string | null | undefined>,

		/** Required */
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateMessageSystemAttributeValueFormGroup() {
		return new FormGroup<MessageSystemAttributeValueFormProperties>({
			StringValue: new FormControl<string | null | undefined>(undefined),
			BinaryValue: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidMessageContents {
	}
	export interface InvalidMessageContentsFormProperties {
	}
	export function CreateInvalidMessageContentsFormGroup() {
		return new FormGroup<InvalidMessageContentsFormProperties>({
		});

	}


	/** For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails. */
	export interface SendMessageBatchResult {

		/** Required */
		Successful: Array<string>;

		/** Required */
		Failed: Array<string>;
	}

	/** For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails. */
	export interface SendMessageBatchResultFormProperties {
	}
	export function CreateSendMessageBatchResultFormGroup() {
		return new FormGroup<SendMessageBatchResultFormProperties>({
		});

	}


	/** Contains the details of a single Amazon SQS message along with an <code>Id</code>. */
	export interface SendMessageBatchRequestEntry {

		/** Required */
		Id: string;

		/** Required */
		MessageBody: string;
		DelaySeconds?: number | null;
		MessageAttributes?: MessageBodyAttributeMap;
		MessageSystemAttributes?: MessageBodySystemAttributeMap;
		MessageDeduplicationId?: string;
		MessageGroupId?: string;
	}

	/** Contains the details of a single Amazon SQS message along with an <code>Id</code>. */
	export interface SendMessageBatchRequestEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		MessageBody: FormControl<string | null | undefined>,
		DelaySeconds: FormControl<number | null | undefined>,
		MessageDeduplicationId: FormControl<string | null | undefined>,
		MessageGroupId: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageBatchRequestEntryFormGroup() {
		return new FormGroup<SendMessageBatchRequestEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DelaySeconds: new FormControl<number | null | undefined>(undefined),
			MessageDeduplicationId: new FormControl<string | null | undefined>(undefined),
			MessageGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageBodyAttributeMap {
	}
	export interface MessageBodyAttributeMapFormProperties {
	}
	export function CreateMessageBodyAttributeMapFormGroup() {
		return new FormGroup<MessageBodyAttributeMapFormProperties>({
		});

	}

	export interface MessageBodySystemAttributeMap {
	}
	export interface MessageBodySystemAttributeMapFormProperties {
	}
	export function CreateMessageBodySystemAttributeMapFormGroup() {
		return new FormGroup<MessageBodySystemAttributeMapFormProperties>({
		});

	}

	export interface BatchRequestTooLong {
	}
	export interface BatchRequestTooLongFormProperties {
	}
	export function CreateBatchRequestTooLongFormGroup() {
		return new FormGroup<BatchRequestTooLongFormProperties>({
		});

	}

	export interface StartMessageMoveTaskResult {
		TaskHandle?: string;
	}
	export interface StartMessageMoveTaskResultFormProperties {
		TaskHandle: FormControl<string | null | undefined>,
	}
	export function CreateStartMessageMoveTaskResultFormGroup() {
		return new FormGroup<StartMessageMoveTaskResultFormProperties>({
			TaskHandle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface AddPermissionRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		Label: string;

		/** Required */
		AWSAccountIds: Array<string>;

		/** Required */
		Actions: Array<string>;
	}

	/** <p/> */
	export interface AddPermissionRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,

		/** Required */
		Label: FormControl<string | null | undefined>,
	}
	export function CreateAddPermissionRequestFormGroup() {
		return new FormGroup<AddPermissionRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Gives a detailed description of the result of an action on each entry in the request. */
	export interface BatchResultErrorEntry {

		/** Required */
		Id: string;

		/** Required */
		SenderFault: boolean;

		/** Required */
		Code: string;
		Message?: string;
	}

	/** Gives a detailed description of the result of an action on each entry in the request. */
	export interface BatchResultErrorEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		SenderFault: FormControl<boolean | null | undefined>,

		/** Required */
		Code: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateBatchResultErrorEntryFormGroup() {
		return new FormGroup<BatchResultErrorEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SenderFault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelMessageMoveTaskRequest {

		/** Required */
		TaskHandle: string;
	}
	export interface CancelMessageMoveTaskRequestFormProperties {

		/** Required */
		TaskHandle: FormControl<string | null | undefined>,
	}
	export function CreateCancelMessageMoveTaskRequestFormGroup() {
		return new FormGroup<CancelMessageMoveTaskRequestFormProperties>({
			TaskHandle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface ChangeMessageVisibilityBatchRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		Entries: Array<string>;
	}

	/** <p/> */
	export interface ChangeMessageVisibilityBatchRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateChangeMessageVisibilityBatchRequestFormGroup() {
		return new FormGroup<ChangeMessageVisibilityBatchRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Encloses the <code>Id</code> of an entry in <code> <a>ChangeMessageVisibilityBatch</a>.</code>  */
	export interface ChangeMessageVisibilityBatchResultEntry {

		/** Required */
		Id: string;
	}

	/** Encloses the <code>Id</code> of an entry in <code> <a>ChangeMessageVisibilityBatch</a>.</code>  */
	export interface ChangeMessageVisibilityBatchResultEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateChangeMessageVisibilityBatchResultEntryFormGroup() {
		return new FormGroup<ChangeMessageVisibilityBatchResultEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChangeMessageVisibilityRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		ReceiptHandle: string;

		/** Required */
		VisibilityTimeout: number;
	}
	export interface ChangeMessageVisibilityRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,

		/** Required */
		ReceiptHandle: FormControl<string | null | undefined>,

		/** Required */
		VisibilityTimeout: FormControl<number | null | undefined>,
	}
	export function CreateChangeMessageVisibilityRequestFormGroup() {
		return new FormGroup<ChangeMessageVisibilityRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReceiptHandle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VisibilityTimeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface CreateQueueRequest {

		/** Required */
		QueueName: string;
		Attributes?: QueueAttributeMap;
		tags?: TagMap;
	}

	/** <p/> */
	export interface CreateQueueRequestFormProperties {

		/** Required */
		QueueName: FormControl<string | null | undefined>,
	}
	export function CreateCreateQueueRequestFormGroup() {
		return new FormGroup<CreateQueueRequestFormProperties>({
			QueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteMessageBatchRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		Entries: Array<string>;
	}

	/** <p/> */
	export interface DeleteMessageBatchRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMessageBatchRequestFormGroup() {
		return new FormGroup<DeleteMessageBatchRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Encloses the <code>Id</code> of an entry in <code> <a>DeleteMessageBatch</a>.</code>  */
	export interface DeleteMessageBatchResultEntry {

		/** Required */
		Id: string;
	}

	/** Encloses the <code>Id</code> of an entry in <code> <a>DeleteMessageBatch</a>.</code>  */
	export interface DeleteMessageBatchResultEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMessageBatchResultEntryFormGroup() {
		return new FormGroup<DeleteMessageBatchResultEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteMessageRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		ReceiptHandle: string;
	}

	/** <p/> */
	export interface DeleteMessageRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,

		/** Required */
		ReceiptHandle: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMessageRequestFormGroup() {
		return new FormGroup<DeleteMessageRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReceiptHandle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface DeleteQueueRequest {

		/** Required */
		QueueUrl: string;
	}

	/** <p/> */
	export interface DeleteQueueRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateDeleteQueueRequestFormGroup() {
		return new FormGroup<DeleteQueueRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface GetQueueAttributesRequest {

		/** Required */
		QueueUrl: string;
		AttributeNames?: Array<string>;
	}

	/** <p/> */
	export interface GetQueueAttributesRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetQueueAttributesRequestFormGroup() {
		return new FormGroup<GetQueueAttributesRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface GetQueueUrlRequest {

		/** Required */
		QueueName: string;
		QueueOwnerAWSAccountId?: string;
	}

	/** <p/> */
	export interface GetQueueUrlRequestFormProperties {

		/** Required */
		QueueName: FormControl<string | null | undefined>,
		QueueOwnerAWSAccountId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueueUrlRequestFormGroup() {
		return new FormGroup<GetQueueUrlRequestFormProperties>({
			QueueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueueOwnerAWSAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ListDeadLetterSourceQueuesRequest {

		/** Required */
		QueueUrl: string;
		NextToken?: string;
		MaxResults?: number | null;
	}

	/** <p/> */
	export interface ListDeadLetterSourceQueuesRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDeadLetterSourceQueuesRequestFormGroup() {
		return new FormGroup<ListDeadLetterSourceQueuesRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMessageMoveTasksRequest {

		/** Required */
		SourceArn: string;
		MaxResults?: number | null;
	}
	export interface ListMessageMoveTasksRequestFormProperties {

		/** Required */
		SourceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListMessageMoveTasksRequestFormGroup() {
		return new FormGroup<ListMessageMoveTasksRequestFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the details of a message movement task.  */
	export interface ListMessageMoveTasksResultEntry {
		TaskHandle?: string;
		Status?: string;
		SourceArn?: string;
		DestinationArn?: string;
		MaxNumberOfMessagesPerSecond?: number | null;
		ApproximateNumberOfMessagesMoved?: number | null;
		ApproximateNumberOfMessagesToMove?: number | null;
		FailureReason?: string;
		StartedTimestamp?: number | null;
	}

	/** Contains the details of a message movement task.  */
	export interface ListMessageMoveTasksResultEntryFormProperties {
		TaskHandle: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		SourceArn: FormControl<string | null | undefined>,
		DestinationArn: FormControl<string | null | undefined>,
		MaxNumberOfMessagesPerSecond: FormControl<number | null | undefined>,
		ApproximateNumberOfMessagesMoved: FormControl<number | null | undefined>,
		ApproximateNumberOfMessagesToMove: FormControl<number | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		StartedTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateListMessageMoveTasksResultEntryFormGroup() {
		return new FormGroup<ListMessageMoveTasksResultEntryFormProperties>({
			TaskHandle: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			SourceArn: new FormControl<string | null | undefined>(undefined),
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			MaxNumberOfMessagesPerSecond: new FormControl<number | null | undefined>(undefined),
			ApproximateNumberOfMessagesMoved: new FormControl<number | null | undefined>(undefined),
			ApproximateNumberOfMessagesToMove: new FormControl<number | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			StartedTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListQueueTagsRequest {

		/** Required */
		QueueUrl: string;
	}
	export interface ListQueueTagsRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateListQueueTagsRequestFormGroup() {
		return new FormGroup<ListQueueTagsRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface ListQueuesRequest {
		QueueNamePrefix?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}

	/** <p/> */
	export interface ListQueuesRequestFormProperties {
		QueueNamePrefix: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListQueuesRequestFormGroup() {
		return new FormGroup<ListQueuesRequestFormProperties>({
			QueueNamePrefix: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MessageSystemAttributeMap {
	}
	export interface MessageSystemAttributeMapFormProperties {
	}
	export function CreateMessageSystemAttributeMapFormGroup() {
		return new FormGroup<MessageSystemAttributeMapFormProperties>({
		});

	}


	/** An Amazon SQS message. */
	export interface Message {
		MessageId?: string;
		ReceiptHandle?: string;
		MD5OfBody?: string;
		Body?: string;
		Attributes?: MessageSystemAttributeMap;
		MD5OfMessageAttributes?: string;
		MessageAttributes?: MessageBodyAttributeMap;
	}

	/** An Amazon SQS message. */
	export interface MessageFormProperties {
		MessageId: FormControl<string | null | undefined>,
		ReceiptHandle: FormControl<string | null | undefined>,
		MD5OfBody: FormControl<string | null | undefined>,
		Body: FormControl<string | null | undefined>,
		MD5OfMessageAttributes: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
			ReceiptHandle: new FormControl<string | null | undefined>(undefined),
			MD5OfBody: new FormControl<string | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			MD5OfMessageAttributes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessageSystemAttributeName { SenderId = 0, SentTimestamp = 1, ApproximateReceiveCount = 2, ApproximateFirstReceiveTimestamp = 3, SequenceNumber = 4, MessageDeduplicationId = 5, MessageGroupId = 6, AWSTraceHeader = 7, DeadLetterQueueSourceArn = 8 }

	export enum MessageSystemAttributeNameForSends { AWSTraceHeader = 0 }


	/** <p/> */
	export interface PurgeQueueRequest {

		/** Required */
		QueueUrl: string;
	}

	/** <p/> */
	export interface PurgeQueueRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreatePurgeQueueRequestFormGroup() {
		return new FormGroup<PurgeQueueRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface ReceiveMessageRequest {

		/** Required */
		QueueUrl: string;
		AttributeNames?: Array<string>;
		MessageAttributeNames?: Array<string>;
		MaxNumberOfMessages?: number | null;
		VisibilityTimeout?: number | null;
		WaitTimeSeconds?: number | null;
		ReceiveRequestAttemptId?: string;
	}

	/** <p/> */
	export interface ReceiveMessageRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
		MaxNumberOfMessages: FormControl<number | null | undefined>,
		VisibilityTimeout: FormControl<number | null | undefined>,
		WaitTimeSeconds: FormControl<number | null | undefined>,
		ReceiveRequestAttemptId: FormControl<string | null | undefined>,
	}
	export function CreateReceiveMessageRequestFormGroup() {
		return new FormGroup<ReceiveMessageRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxNumberOfMessages: new FormControl<number | null | undefined>(undefined),
			VisibilityTimeout: new FormControl<number | null | undefined>(undefined),
			WaitTimeSeconds: new FormControl<number | null | undefined>(undefined),
			ReceiveRequestAttemptId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface RemovePermissionRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		Label: string;
	}

	/** <p/> */
	export interface RemovePermissionRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,

		/** Required */
		Label: FormControl<string | null | undefined>,
	}
	export function CreateRemovePermissionRequestFormGroup() {
		return new FormGroup<RemovePermissionRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p/> */
	export interface SendMessageBatchRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		Entries: Array<string>;
	}

	/** <p/> */
	export interface SendMessageBatchRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageBatchRequestFormGroup() {
		return new FormGroup<SendMessageBatchRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code>  */
	export interface SendMessageBatchResultEntry {

		/** Required */
		Id: string;

		/** Required */
		MessageId: string;

		/** Required */
		MD5OfMessageBody: string;
		MD5OfMessageAttributes?: string;
		MD5OfMessageSystemAttributes?: string;
		SequenceNumber?: string;
	}

	/** Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code>  */
	export interface SendMessageBatchResultEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		MessageId: FormControl<string | null | undefined>,

		/** Required */
		MD5OfMessageBody: FormControl<string | null | undefined>,
		MD5OfMessageAttributes: FormControl<string | null | undefined>,
		MD5OfMessageSystemAttributes: FormControl<string | null | undefined>,
		SequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageBatchResultEntryFormGroup() {
		return new FormGroup<SendMessageBatchResultEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MD5OfMessageBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MD5OfMessageAttributes: new FormControl<string | null | undefined>(undefined),
			MD5OfMessageSystemAttributes: new FormControl<string | null | undefined>(undefined),
			SequenceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface SendMessageRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		MessageBody: string;
		DelaySeconds?: number | null;
		MessageAttributes?: MessageBodyAttributeMap;
		MessageSystemAttributes?: MessageBodySystemAttributeMap;
		MessageDeduplicationId?: string;
		MessageGroupId?: string;
	}

	/** <p/> */
	export interface SendMessageRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,

		/** Required */
		MessageBody: FormControl<string | null | undefined>,
		DelaySeconds: FormControl<number | null | undefined>,
		MessageDeduplicationId: FormControl<string | null | undefined>,
		MessageGroupId: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageRequestFormGroup() {
		return new FormGroup<SendMessageRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MessageBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DelaySeconds: new FormControl<number | null | undefined>(undefined),
			MessageDeduplicationId: new FormControl<string | null | undefined>(undefined),
			MessageGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface SetQueueAttributesRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		Attributes: QueueAttributeMap;
	}

	/** <p/> */
	export interface SetQueueAttributesRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateSetQueueAttributesRequestFormGroup() {
		return new FormGroup<SetQueueAttributesRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartMessageMoveTaskRequest {

		/** Required */
		SourceArn: string;
		DestinationArn?: string;
		MaxNumberOfMessagesPerSecond?: number | null;
	}
	export interface StartMessageMoveTaskRequestFormProperties {

		/** Required */
		SourceArn: FormControl<string | null | undefined>,
		DestinationArn: FormControl<string | null | undefined>,
		MaxNumberOfMessagesPerSecond: FormControl<number | null | undefined>,
	}
	export function CreateStartMessageMoveTaskRequestFormGroup() {
		return new FormGroup<StartMessageMoveTaskRequestFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			MaxNumberOfMessagesPerSecond: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagQueueRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		Tags: TagMap;
	}
	export interface TagQueueRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateTagQueueRequestFormGroup() {
		return new FormGroup<TagQueueRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagQueueRequest {

		/** Required */
		QueueUrl: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagQueueRequestFormProperties {

		/** Required */
		QueueUrl: FormControl<string | null | undefined>,
	}
	export function CreateUntagQueueRequestFormGroup() {
		return new FormGroup<UntagQueueRequestFormProperties>({
			QueueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Adds a permission to a queue for a specific <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>. This allows sharing access to the queue.</p> <p>When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <ul> <li> <p> <code>AddPermission</code> generates a policy for you. You can use <code> <a>SetQueueAttributes</a> </code> to upload your policy. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>An Amazon SQS policy can have a maximum of seven actions per statement.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> <li> <p>Amazon SQS <code>AddPermission</code> does not support adding a non-account principal.</p> </li> </ul> </note> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=AddPermission
		 * @param {string} Label The unique identification of the permission you're setting (for example, <code>AliceSendMessage</code>). Maximum 80 characters. Allowed characters include alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).
		 * @param {Array<string>} AWSAccountIds The Amazon Web Services account numbers of the <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principals</a> who are to receive permission. For information about locating the Amazon Web Services account identification, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html#sqs-api-request-authentication">Your Amazon Web Services Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.
		 * @param {Array<string>} Actions <p>The action the client wants to allow for the specified principal. Valid values: the name of any action or <code>*</code>.</p> <p>For more information about these actions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-overview-of-managing-access.html">Overview of Managing Access Permissions to Your Amazon Simple Queue Service Resource</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>Specifying <code>SendMessage</code>, <code>DeleteMessage</code>, or <code>ChangeMessageVisibility</code> for <code>ActionName.n</code> also grants permissions for the corresponding batch versions of those actions: <code>SendMessageBatch</code>, <code>DeleteMessageBatch</code>, and <code>ChangeMessageVisibilityBatch</code>.</p>
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_AddPermission(Label: string, AWSAccountIds: Array<string>, Actions: Array<string>, AccountNumber: number, QueueName: string, Action: GET_AddPermissionAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=AddPermission?Label=' + (Label == null ? '' : encodeURIComponent(Label)) + '&' + AWSAccountIds.map(z => `AWSAccountIds=${encodeURIComponent(z)}`).join('&') + '&' + Actions.map(z => `Actions=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>
		 * Get #Action=CancelMessageMoveTask
		 * @param {string} TaskHandle An identifier associated with a message movement task.
		 * @return {void} Success
		 */
		GET_CancelMessageMoveTask(TaskHandle: string, Action: GET_CancelMessageMoveTaskAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CancelMessageMoveTask?TaskHandle=' + (TaskHandle == null ? '' : encodeURIComponent(TaskHandle)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the visibility timeout of a specified message in a queue to a new value. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>For example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed since you received the message, and you send a ChangeMessageVisibility call with <code>VisibilityTimeout</code> set to 10 seconds, the 10 seconds begin to count from the time that you make the <code>ChangeMessageVisibility</code> call. Thus, any attempt to change the visibility timeout or to delete that message 10 seconds after you initially change the visibility timeout (a total of 25 seconds) might result in an error.</p> <p>An Amazon SQS message has three basic states:</p> <ol> <li> <p>Sent to a queue by a producer.</p> </li> <li> <p>Received from the queue by a consumer.</p> </li> <li> <p>Deleted from the queue.</p> </li> </ol> <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages. A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of in flight messages.</p> <p>Limits that apply to in flight messages are unrelated to the <i>unlimited</i> number of stored messages.</p> <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message. To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages. To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&amp;limitType=service-code-sqs">file a support request</a>.</p> <p>For FIFO queues, there can be a maximum of 20,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p> <important> <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically recalculate and increase the timeout to the maximum remaining time.</p> <p>Unlike with a queue, when you change the visibility timeout for a specific message the timeout value is applied immediately but isn't saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message reverts to the original timeout value (not to the value you set using the <code>ChangeMessageVisibility</code> action) the next time the message is received.</p> </important>
		 * Get {AccountNumber}/{QueueName}/#Action=ChangeMessageVisibility
		 * @param {string} ReceiptHandle The receipt handle associated with the message, whose visibility timeout is changed. This parameter is returned by the <code> <a>ReceiveMessage</a> </code> action.
		 * @param {number} VisibilityTimeout The new value for the message's visibility timeout (in seconds). Values range: <code>0</code> to <code>43200</code>. Maximum: 12 hours.
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_ChangeMessageVisibility(ReceiptHandle: string, VisibilityTimeout: number, AccountNumber: number, QueueName: string, Action: GET_ChangeMessageVisibilityAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=ChangeMessageVisibility?ReceiptHandle=' + (ReceiptHandle == null ? '' : encodeURIComponent(ReceiptHandle)) + '&VisibilityTimeout=' + VisibilityTimeout + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the visibility timeout of multiple messages. This is a batch version of <code> <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response. You can send up to 10 <code> <a>ChangeMessageVisibility</a> </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>
		 * Get {AccountNumber}/{QueueName}/#Action=ChangeMessageVisibilityBatch
		 * @param {Array<string>} Entries Lists the receipt handles of the messages for which the visibility timeout must be changed.
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_ChangeMessageVisibilityBatch(Entries: Array<string>, AccountNumber: number, QueueName: string, Action: GET_ChangeMessageVisibilityBatchAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=ChangeMessageVisibilityBatch?' + Entries.map(z => `Entries=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new standard or FIFO queue. You can pass one or more attributes in the request. Keep the following in mind:</p> <ul> <li> <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p> <note> <p>You can't change the queue type after you create it and you can't convert an existing standard queue into a FIFO queue. You must either create a new FIFO queue for your application or delete your existing standard queue and recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a Standard Queue to a FIFO Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p> </note> </li> <li> <p>If you don't provide a value for an attribute, the queue is created with the default value for the attribute.</p> </li> <li> <p>If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> </li> </ul> <p>To successfully create a new queue, you must provide a queue name that adheres to the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits related to queues</a> and is unique within the scope of your queues.</p> <note> <p>After you create a queue, you must wait at least one second after the queue is created to be able to use the queue.</p> </note> <p>To get the queue URL, use the <code> <a>GetQueueUrl</a> </code> action. <code> <a>GetQueueUrl</a> </code> requires only the <code>QueueName</code> parameter. be aware of existing queue names:</p> <ul> <li> <p>If you provide the name of an existing queue along with the exact names and values of all the queue's attributes, <code>CreateQueue</code> returns the queue URL for the existing queue.</p> </li> <li> <p>If the queue name, attribute names, or attribute values don't match an existing queue, <code>CreateQueue</code> returns an error.</p> </li> </ul> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
		 * Get #Action=CreateQueue
		 * @param {string} QueueName <p>The name of the new queue. The following limits apply to this name:</p> <ul> <li> <p>A queue name can have up to 80 characters.</p> </li> <li> <p>Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p> </li> <li> <p>A FIFO queue name must end with the <code>.fifo</code> suffix.</p> </li> </ul> <p>Queue URLs and names are case-sensitive.</p>
		 * @param {{[id: string]: string }} Attribute <p>A map of attributes with their corresponding values.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>CreateQueue</code> action uses:</p> <ul> <li> <p> <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15 minutes). Default: 0. </p> </li> <li> <p> <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB). </p> </li> <li> <p> <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer from 60 seconds (1 minute) to 1,209,600 seconds (14 days). Default: 345,600 (4 days). When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – The queue's policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a> in the <i>IAM User Guide</i>. </p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code> <a>ReceiveMessage</a> </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0. </p> </li> <li> <p> <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. While the alias of the Amazon Web Services managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i> </code>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a> </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>FifoQueue</code> – Designates a queue as FIFO. Valid values are <code>true</code> and <code>false</code>. If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue. You can provide this attribute only during queue creation. You can't change it for an existing queue. When you set this attribute, you must also provide the <code>MessageGroupId</code> for your messages explicitly.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication. Valid values are <code>true</code> and <code>false</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. Note the following: </p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>
		 * @param {{[id: string]: string }} Tag <p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>To be able to tag a queue on creation, you must have the <code>sqs:CreateQueue</code> and <code>sqs:TagQueue</code> permissions.</p> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
		 * @return {void} Success
		 */
		GET_CreateQueue(QueueName: string, Attribute: {[id: string]: string } | null | undefined, Tag: {[id: string]: string } | null | undefined, Action: GET_CreateQueueAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateQueue?QueueName=' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '&Attribute=' + Attribute + '&Tag=' + Tag + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified message from the specified queue. To select the message to delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the <code>MessageId</code> which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue. </p> <note> <p>The <code>ReceiptHandle</code> is associated with a <i>specific instance</i> of receiving a message. If you receive a message more than once, the <code>ReceiptHandle</code> is different each time you receive a message. When you use the <code>DeleteMessage</code> action, you must provide the most recently received <code>ReceiptHandle</code> for the message (otherwise, the request succeeds, but the message will not be deleted).</p> <p>For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.</p> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=DeleteMessage
		 * @param {string} ReceiptHandle The receipt handle associated with the message to delete.
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_DeleteMessage(ReceiptHandle: string, AccountNumber: number, QueueName: string, Action: GET_DeleteMessageAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=DeleteMessage?ReceiptHandle=' + (ReceiptHandle == null ? '' : encodeURIComponent(ReceiptHandle)) + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes up to ten messages from the specified queue. This is a batch version of <code> <a>DeleteMessage</a>.</code> The result of the action on each message is reported individually in the response.</p> <important> <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> </important>
		 * Get {AccountNumber}/{QueueName}/#Action=DeleteMessageBatch
		 * @param {Array<string>} Entries Lists the receipt handles for the messages to be deleted.
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_DeleteMessageBatch(Entries: Array<string>, AccountNumber: number, QueueName: string, Action: GET_DeleteMessageBatchAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=DeleteMessageBatch?' + Entries.map(z => `Entries=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents.</p> <important> <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available. </p> </important> <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a <code> <a>SendMessage</a> </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p> <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>The delete operation uses the HTTP <code>GET</code> verb.</p> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=DeleteQueue
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_DeleteQueue(AccountNumber: number, QueueName: string, Action: GET_DeleteQueueAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=DeleteQueue&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets attributes for the specified queue.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=GetQueueAttributes
		 * @param {Array<string>} AttributeNames <p>A list of attributes for which to retrieve information.</p> <p>The <code>AttributeNames</code> parameter is optional, but if you don't specify values for this parameter, the request returns empty results.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note> <p>The following attributes are supported:</p> <important> <p>The <code>ApproximateNumberOfMessagesDelayed</code>, <code>ApproximateNumberOfMessagesNotVisible</code>, and <code>ApproximateNumberOfMessages</code> metrics may not achieve consistency until at least 1 minute after the producers stop sending messages. This period is required for the queue metadata to reach eventual consistency. </p> </important> <ul> <li> <p> <code>All</code> – Returns all values. </p> </li> <li> <p> <code>ApproximateNumberOfMessages</code> – Returns the approximate number of messages available for retrieval from the queue.</p> </li> <li> <p> <code>ApproximateNumberOfMessagesDelayed</code> – Returns the approximate number of messages in the queue that are delayed and not available for reading immediately. This can happen when the queue is configured as a delay queue or when a message has been sent with a delay parameter.</p> </li> <li> <p> <code>ApproximateNumberOfMessagesNotVisible</code> – Returns the approximate number of messages that are in flight. Messages are considered to be <i>in flight</i> if they have been sent to a client but have not yet been deleted or have not yet reached the end of their visibility window. </p> </li> <li> <p> <code>CreatedTimestamp</code> – Returns the time when the queue was created in seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a>).</p> </li> <li> <p> <code>DelaySeconds</code> – Returns the default delay on the queue in seconds.</p> </li> <li> <p> <code>LastModifiedTimestamp</code> – Returns the time when the queue was last changed in seconds (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a>).</p> </li> <li> <p> <code>MaximumMessageSize</code> – Returns the limit of how many bytes a message can contain before Amazon SQS rejects it.</p> </li> <li> <p> <code>MessageRetentionPeriod</code> – Returns the length of time, in seconds, for which Amazon SQS retains a message. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – Returns the policy of the queue.</p> </li> <li> <p> <code>QueueArn</code> – Returns the Amazon resource name (ARN) of the queue.</p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – Returns the length of time, in seconds, for which the <code>ReceiveMessage</code> action waits for a message to arrive. </p> </li> <li> <p> <code>VisibilityTimeout</code> – Returns the visibility timeout for the queue. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – Returns the ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – Returns the length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>. </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Returns information about whether the queue is using SSE-SQS encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>FifoQueue</code> – Returns information about whether the queue is FIFO. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html">FIFO queue logic</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>To determine whether a queue is <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO</a>, you can check whether <code>QueueName</code> ends with the <code>.fifo</code> suffix.</p> </note> </li> <li> <p> <code>ContentBasedDeduplication</code> – Returns whether content-based deduplication is enabled for the queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. </p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_GetQueueAttributes(AttributeNames: Array<string> | null | undefined, AccountNumber: number, QueueName: string, Action: GET_GetQueueAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=GetQueueAttributes?' + AttributeNames?.map(z => `AttributeNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the URL of an existing Amazon SQS queue.</p> <p>To access a queue that belongs to another AWS account, use the <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see <code> <a>AddPermission</a> </code> or see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow Developers to Write Messages to a Shared Queue</a> in the <i>Amazon SQS Developer Guide</i>. </p>
		 * Get #Action=GetQueueUrl
		 * @param {string} QueueName <p>The name of the queue whose URL must be fetched. Maximum 80 characters. Valid values: alphanumeric characters, hyphens (<code>-</code>), and underscores (<code>_</code>).</p> <p>Queue URLs and names are case-sensitive.</p>
		 * @param {string} QueueOwnerAWSAccountId The Amazon Web Services account ID of the account that created the queue.
		 * @return {void} Success
		 */
		GET_GetQueueUrl(QueueName: string, QueueOwnerAWSAccountId: string | null | undefined, Action: GET_GetQueueUrlAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetQueueUrl?QueueName=' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '&QueueOwnerAWSAccountId=' + (QueueOwnerAWSAccountId == null ? '' : encodeURIComponent(QueueOwnerAWSAccountId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute configured with a dead-letter queue.</p> <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p> <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p>
		 * Get {AccountNumber}/{QueueName}/#Action=ListDeadLetterSourceQueues
		 * @param {string} NextToken Pagination token to request the next set of results.
		 * @param {number} MaxResults Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_ListDeadLetterSourceQueues(NextToken: string | null | undefined, MaxResults: number | null | undefined, AccountNumber: number, QueueName: string, Action: GET_ListDeadLetterSourceQueuesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=ListDeadLetterSourceQueues?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets the most recent message movement tasks (up to 10) under a specific source queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue. </p> </li> <li> <p>Currently, only standard queues are supported.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>
		 * Get #Action=ListMessageMoveTasks
		 * @param {string} SourceArn The ARN of the queue whose message movement tasks are to be listed.
		 * @param {number} MaxResults The maximum number of results to include in the response. The default is 1, which provides the most recent message movement task. The upper limit is 10.
		 * @return {void} Success
		 */
		GET_ListMessageMoveTasks(SourceArn: string, MaxResults: number | null | undefined, Action: GET_ListMessageMoveTasksAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListMessageMoveTasks?SourceArn=' + (SourceArn == null ? '' : encodeURIComponent(SourceArn)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>List all cost allocation tags added to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=ListQueueTags
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_ListQueueTags(AccountNumber: number, QueueName: string, Action: GET_ListQueueTagsAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=ListQueueTags&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of your queues in the current region. The response includes a maximum of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code> parameter, only queues with a name that begins with the specified value are returned.</p> <p> The <code>listQueues</code> methods supports pagination. Set parameter <code>MaxResults</code> in the request to specify the maximum number of results to be returned in the response. If you do not set <code>MaxResults</code>, the response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are additional results to display, the response includes a value for <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next request to <code>listQueues</code> to receive the next page of results. </p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
		 * Get #Action=ListQueues
		 * @param {string} QueueNamePrefix <p>A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned.</p> <p>Queue URLs and names are case-sensitive.</p>
		 * @param {string} NextToken Pagination token to request the next set of results.
		 * @param {number} MaxResults Maximum number of results to include in the response. Value range is 1 to 1000. You must set <code>MaxResults</code> to receive a value for <code>NextToken</code> in the response.
		 * @return {void} Success
		 */
		GET_ListQueues(QueueNamePrefix: string | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined, Action: GET_ListQueuesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListQueues?QueueNamePrefix=' + (QueueNamePrefix == null ? '' : encodeURIComponent(QueueNamePrefix)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes available messages in a queue (including in-flight messages) specified by the <code>QueueURL</code> parameter.</p> <important> <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages deleted from a queue.</p> <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size. </p> </important> <p>Messages sent to the queue <i>before</i> you call <code>PurgeQueue</code> might be received but are deleted within the next minute.</p> <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>
		 * Get {AccountNumber}/{QueueName}/#Action=PurgeQueue
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_PurgeQueue(AccountNumber: number, QueueName: string, Action: GET_PurgeQueueAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=PurgeQueue&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves one or more messages (up to 10), from the specified queue. Using the <code>WaitTimeSeconds</code> parameter enables long-poll support. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p> <p>Short poll is the default behavior where a weighted random set of machines is sampled on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per <code>ReceiveMessage</code> call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat the request. </p> <p>For each message returned, the response includes the following:</p> <ul> <li> <p>The message body.</p> </li> <li> <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p> </li> <li> <p>The <code>MessageId</code> you received when you sent the message to the queue.</p> </li> <li> <p>The receipt handle.</p> </li> <li> <p>The message attributes.</p> </li> <li> <p>An MD5 digest of the message attributes.</p> </li> </ul> <p>The receipt handle is the identifier you must provide when deleting the message. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>A message that isn't deleted or a message whose visibility isn't extended before the visibility timeout expires counts as a failed receive. Depending on the configuration of the queue, the message might be sent to the dead-letter queue.</p> <note> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=ReceiveMessage
		 * @param {Array<string>} AttributeNames <p>A list of attributes that need to be returned along with each message. These attributes include:</p> <ul> <li> <p> <code>All</code> – Returns all values.</p> </li> <li> <p> <code>ApproximateFirstReceiveTimestamp</code> – Returns the time the message was first received from the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p> </li> <li> <p> <code>ApproximateReceiveCount</code> – Returns the number of times a message has been received across all queues but not deleted.</p> </li> <li> <p> <code>AWSTraceHeader</code> – Returns the X-Ray trace header string. </p> </li> <li> <p> <code>SenderId</code> </p> <ul> <li> <p>For a user, returns the user ID, for example <code>ABCDEFGHI1JKLMNOPQ23R</code>.</p> </li> <li> <p>For an IAM role, returns the IAM role ID, for example <code>ABCDE1F2GH3I4JK5LMNOP:i-a123b456</code>.</p> </li> </ul> </li> <li> <p> <code>SentTimestamp</code> – Returns the time the message was sent to the queue (<a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds).</p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> <li> <p> <code>MessageDeduplicationId</code> – Returns the value provided by the producer that calls the <code> <a>SendMessage</a> </code> action.</p> </li> <li> <p> <code>MessageGroupId</code> – Returns the value provided by the producer that calls the <code> <a>SendMessage</a> </code> action. Messages with the same <code>MessageGroupId</code> are returned in sequence.</p> </li> <li> <p> <code>SequenceNumber</code> – Returns the value provided by Amazon SQS.</p> </li> </ul>
		 * @param {Array<string>} MessageAttributeNames <p>The name of the message attribute, where <i>N</i> is the index.</p> <ul> <li> <p>The name can contain alphanumeric characters and the underscore (<code>_</code>), hyphen (<code>-</code>), and period (<code>.</code>).</p> </li> <li> <p>The name is case-sensitive and must be unique among all attribute names for the message.</p> </li> <li> <p>The name must not start with AWS-reserved prefixes such as <code>AWS.</code> or <code>Amazon.</code> (or any casing variants).</p> </li> <li> <p>The name must not start or end with a period (<code>.</code>), and it should not have periods in succession (<code>..</code>).</p> </li> <li> <p>The name can be up to 256 characters long.</p> </li> </ul> <p>When using <code>ReceiveMessage</code>, you can send a list of attribute names to receive, or you can return all of the attributes by specifying <code>All</code> or <code>.*</code> in your request. You can also use all message attributes starting with a prefix, for example <code>bar.*</code>.</p>
		 * @param {number} MaxNumberOfMessages The maximum number of messages to return. Amazon SQS never returns more messages than this value (however, fewer messages might be returned). Valid values: 1 to 10. Default: 1.
		 * @param {number} VisibilityTimeout The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a <code>ReceiveMessage</code> request.
		 * @param {number} WaitTimeSeconds <p>The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If a message is available, the call returns sooner than <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the call returns successfully with an empty list of messages.</p> <important> <p>To avoid HTTP errors, ensure that the HTTP response timeout for <code>ReceiveMessage</code> requests is longer than the <code>WaitTimeSeconds</code> parameter. For example, with the Java SDK, you can set HTTP transport settings using the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/nio/netty/NettyNioAsyncHttpClient.html"> NettyNioAsyncHttpClient</a> for asynchronous clients, or the <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/http/apache/ApacheHttpClient.html"> ApacheHttpClient</a> for synchronous clients. </p> </important>
		 * @param {string} ReceiveRequestAttemptId <p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of <code>ReceiveMessage</code> calls. If a networking issue occurs after a <code>ReceiveMessage</code> action, and instead of a response you receive a generic error, it is possible to retry the same action with an identical <code>ReceiveRequestAttemptId</code> to retrieve the same set of messages, even if their visibility timeout has not yet expired.</p> <ul> <li> <p>You can use <code>ReceiveRequestAttemptId</code> only for 5 minutes after a <code>ReceiveMessage</code> action.</p> </li> <li> <p>When you set <code>FifoQueue</code>, a caller of the <code>ReceiveMessage</code> action can provide a <code>ReceiveRequestAttemptId</code> explicitly.</p> </li> <li> <p>If a caller of the <code>ReceiveMessage</code> action doesn't provide a <code>ReceiveRequestAttemptId</code>, Amazon SQS generates a <code>ReceiveRequestAttemptId</code>.</p> </li> <li> <p>It is possible to retry the <code>ReceiveMessage</code> action with the same <code>ReceiveRequestAttemptId</code> if none of the messages have been modified (deleted or had their visibility changes).</p> </li> <li> <p>During a visibility timeout, subsequent calls with the same <code>ReceiveRequestAttemptId</code> return the same messages and receipt handles. If a retry occurs within the deduplication interval, it resets the visibility timeout. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p>If a caller of the <code>ReceiveMessage</code> action still processes messages when the visibility timeout expires and messages become visible, another worker consuming from the same queue can receive the same messages and therefore process duplicates. Also, if a consumer whose message processing time is longer than the visibility timeout tries to delete the processed messages, the action fails with an error.</p> <p>To mitigate this effect, ensure that your application observes a safe threshold before the visibility timeout expires and extend the visibility timeout as necessary.</p> </important> </li> <li> <p>While messages with a particular <code>MessageGroupId</code> are invisible, no more messages belonging to the same <code>MessageGroupId</code> are returned until the visibility timeout expires. You can still receive messages with another <code>MessageGroupId</code> as long as it is also visible.</p> </li> <li> <p>If a caller of <code>ReceiveMessage</code> can't track the <code>ReceiveRequestAttemptId</code>, no retries work until the original visibility timeout expires. As a result, delays might occur but the messages in the queue remain in a strict order.</p> </li> </ul> <p>The maximum length of <code>ReceiveRequestAttemptId</code> is 128 characters. <code>ReceiveRequestAttemptId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{|}~</code>).</p> <p>For best practices of using <code>ReceiveRequestAttemptId</code>, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-receiverequestattemptid-request-parameter.html">Using the ReceiveRequestAttemptId Request Parameter</a> in the <i>Amazon SQS Developer Guide</i>.</p>
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_ReceiveMessage(AttributeNames: Array<string> | null | undefined, MessageAttributeNames: Array<string> | null | undefined, MaxNumberOfMessages: number | null | undefined, VisibilityTimeout: number | null | undefined, WaitTimeSeconds: number | null | undefined, ReceiveRequestAttemptId: string | null | undefined, AccountNumber: number, QueueName: string, Action: GET_ReceiveMessageAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=ReceiveMessage?' + AttributeNames?.map(z => `AttributeNames=${encodeURIComponent(z)}`).join('&') + '&' + MessageAttributeNames?.map(z => `MessageAttributeNames=${encodeURIComponent(z)}`).join('&') + '&MaxNumberOfMessages=' + MaxNumberOfMessages + '&VisibilityTimeout=' + VisibilityTimeout + '&WaitTimeSeconds=' + WaitTimeSeconds + '&ReceiveRequestAttemptId=' + (ReceiveRequestAttemptId == null ? '' : encodeURIComponent(ReceiveRequestAttemptId)) + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Revokes any permissions in the queue policy that matches the specified <code>Label</code> parameter.</p> <note> <ul> <li> <p>Only the owner of a queue can remove permissions from it.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=RemovePermission
		 * @param {string} Label The identification of the permission to remove. This is the label added using the <code> <a>AddPermission</a> </code> action.
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_RemovePermission(Label: string, AccountNumber: number, QueueName: string, Action: GET_RemovePermissionAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=RemovePermission?Label=' + (Label == null ? '' : encodeURIComponent(Label)) + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Delivers a message to the specified queue.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>
		 * Get {AccountNumber}/{QueueName}/#Action=SendMessage
		 * @param {string} MessageBody <p>The message to send. The minimum size is one character. The maximum size is 256 KiB.</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important>
		 * @param {number} DelaySeconds <p> The length of time, in seconds, for which to delay a specific message. Valid values: 0 to 900. Maximum: 15 minutes. Messages with a positive <code>DelaySeconds</code> value become available for processing after the delay period is finished. If you don't specify a value, the default value for the queue applies. </p> <note> <p>When you set <code>FifoQueue</code>, you can't set <code>DelaySeconds</code> per message. You can set this parameter only on a queue level.</p> </note>
		 * @param {{[id: string]: MessageAttributeValue }} MessageAttribute Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes">Amazon SQS message attributes</a> in the <i>Amazon SQS Developer Guide</i>.
		 * @param {{[id: string]: MessageSystemAttributeValue }} MessageSystemAttribute <p>The message system attribute to send. Each message system attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>.</p> <important> <ul> <li> <p>Currently, the only supported message system attribute is <code>AWSTraceHeader</code>. Its type must be <code>String</code> and its value must be a correctly formatted X-Ray trace header string.</p> </li> <li> <p>The size of a message system attribute doesn't count towards the total size of a message.</p> </li> </ul> </important>
		 * @param {string} MessageDeduplicationId <p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The token used for deduplication of sent messages. If a message with a particular <code>MessageDeduplicationId</code> is sent successfully, any messages sent with the same <code>MessageDeduplicationId</code> are accepted successfully but aren't delivered during the 5-minute deduplication interval. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html"> Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>.</p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>,</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> <note> <p>The <code>MessageDeduplicationId</code> is available to the consumer of the message (this can be useful for troubleshooting delivery issues).</p> <p>If a message is sent successfully but the acknowledgement is lost and the message is resent with the same <code>MessageDeduplicationId</code> after the deduplication interval, Amazon SQS can't detect duplicate messages.</p> <p>Amazon SQS continues to keep track of the message deduplication ID even after the message is received and deleted.</p> </note> <p>The maximum length of <code>MessageDeduplicationId</code> is 128 characters. <code>MessageDeduplicationId</code> can contain alphanumeric characters (<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>) and punctuation (<code>!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{|}~</code>).</p> <p>For best practices of using <code>MessageDeduplicationId</code>, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html">Using the MessageDeduplicationId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p>
		 * @param {string} MessageGroupId <p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are processed in a FIFO manner (however, messages in different message groups might be processed out of order). To interleave multiple ordered streams within a single queue, use <code>MessageGroupId</code> values (for example, session data for multiple users). In this scenario, multiple consumers can process the queue, but the session data of each user is processed in a FIFO fashion.</p> <ul> <li> <p>You must associate a non-empty <code>MessageGroupId</code> with a message. If you don't provide a <code>MessageGroupId</code>, the action fails.</p> </li> <li> <p> <code>ReceiveMessage</code> might return messages with multiple <code>MessageGroupId</code> values. For each <code>MessageGroupId</code>, the messages are sorted by time sent. The caller can't specify a <code>MessageGroupId</code>.</p> </li> </ul> <p>The length of <code>MessageGroupId</code> is 128 characters. Valid values: alphanumeric characters and punctuation <code>(!"#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{|}~)</code>.</p> <p>For best practices of using <code>MessageGroupId</code>, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagegroupid-property.html">Using the MessageGroupId Property</a> in the <i>Amazon SQS Developer Guide</i>.</p> <important> <p> <code>MessageGroupId</code> is required for FIFO queues. You can't use it for Standard queues.</p> </important>
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_SendMessage(MessageBody: string, DelaySeconds: number | null | undefined, MessageAttribute: {[id: string]: MessageAttributeValue } | null | undefined, MessageSystemAttribute: {[id: string]: MessageSystemAttributeValue } | null | undefined, MessageDeduplicationId: string | null | undefined, MessageGroupId: string | null | undefined, AccountNumber: number, QueueName: string, Action: GET_SendMessageAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=SendMessage?MessageBody=' + (MessageBody == null ? '' : encodeURIComponent(MessageBody)) + '&DelaySeconds=' + DelaySeconds + '&MessageAttribute=' + MessageAttribute + '&MessageSystemAttribute=' + MessageSystemAttribute + '&MessageDeduplicationId=' + (MessageDeduplicationId == null ? '' : encodeURIComponent(MessageDeduplicationId)) + '&MessageGroupId=' + (MessageGroupId == null ? '' : encodeURIComponent(MessageGroupId)) + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>You can use <code>SendMessageBatch</code> to send up to 10 messages to the specified queue by assigning either identical or different values to each message (or by not assigning values at all). This is a batch version of <code> <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.</p> <p>The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p> <p>The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KiB (262,144 bytes).</p> <important> <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p> <p> <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code> </p> <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p> </important> <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses the default value for the queue.</p>
		 * Get {AccountNumber}/{QueueName}/#Action=SendMessageBatch
		 * @param {Array<string>} Entries A list of <code> <a>SendMessageBatchRequestEntry</a> </code> items.
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_SendMessageBatch(Entries: Array<string>, AccountNumber: number, QueueName: string, Action: GET_SendMessageBatchAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=SendMessageBatch?' + Entries.map(z => `Entries=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> <note> <ul> <li> <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p> </li> <li> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> <li> <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p> </li> </ul> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=SetQueueAttributes
		 * @param {{[id: string]: string }} Attribute <p>A map of attributes to set.</p> <p>The following lists the names, descriptions, and values of the special request parameters that the <code>SetQueueAttributes</code> action uses:</p> <ul> <li> <p> <code>DelaySeconds</code> – The length of time, in seconds, for which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes). Default: 0. </p> </li> <li> <p> <code>MaximumMessageSize</code> – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values: An integer from 1,024 bytes (1 KiB) up to 262,144 bytes (256 KiB). Default: 262,144 (256 KiB). </p> </li> <li> <p> <code>MessageRetentionPeriod</code> – The length of time, in seconds, for which Amazon SQS retains a message. Valid values: An integer representing seconds, from 60 (1 minute) to 1,209,600 (14 days). Default: 345,600 (4 days). When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the <code>MessageRetentionPeriod</code> is reduced below the age of existing messages.</p> </li> <li> <p> <code>Policy</code> – The queue's policy. A valid Amazon Web Services policy. For more information about policy structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PoliciesOverview.html">Overview of Amazon Web Services IAM Policies</a> in the <i>Identity and Access Management User Guide</i>. </p> </li> <li> <p> <code>ReceiveMessageWaitTimeSeconds</code> – The length of time, in seconds, for which a <code> <a>ReceiveMessage</a> </code> action waits for a message to arrive. Valid values: An integer from 0 to 20 (seconds). Default: 0. </p> </li> <li> <p> <code>VisibilityTimeout</code> – The visibility timeout for the queue, in seconds. Valid values: An integer from 0 to 43,200 (12 hours). Default: 30. For more information about the visibility timeout, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer Guide</i>.</p> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues:</a> </p> <ul> <li> <p> <code>RedrivePolicy</code> – The string that includes the parameters for the dead-letter queue functionality of the source queue as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>deadLetterTargetArn</code> – The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of <code>maxReceiveCount</code> is exceeded.</p> </li> <li> <p> <code>maxReceiveCount</code> – The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default: 10. When the <code>ReceiveCount</code> for a message exceeds the <code>maxReceiveCount</code> for a queue, Amazon SQS moves the message to the dead-letter-queue.</p> </li> </ul> </li> <li> <p> <code>RedriveAllowPolicy</code> – The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object. The parameters are as follows:</p> <ul> <li> <p> <code>redrivePermission</code> – The permission type that defines which source queues can specify the current queue as the dead-letter queue. Valid values are:</p> <ul> <li> <p> <code>allowAll</code> – (Default) Any source queues in this Amazon Web Services account in the same Region can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>denyAll</code> – No source queues can specify this queue as the dead-letter queue.</p> </li> <li> <p> <code>byQueue</code> – Only queues specified by the <code>sourceQueueArns</code> parameter can specify this queue as the dead-letter queue.</p> </li> </ul> </li> <li> <p> <code>sourceQueueArns</code> – The Amazon Resource Names (ARN)s of the source queues that can specify this queue as the dead-letter queue and redrive messages. You can specify this parameter only when the <code>redrivePermission</code> parameter is set to <code>byQueue</code>. You can specify up to 10 source queue ARNs. To allow more than 10 source queues to specify dead-letter queues, set the <code>redrivePermission</code> parameter to <code>allowAll</code>.</p> </li> </ul> </li> </ul> <note> <p>The dead-letter queue of a FIFO queue must also be a FIFO queue. Similarly, the dead-letter queue of a standard queue must also be a standard queue.</p> </note> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html">server-side-encryption</a>:</p> <ul> <li> <p> <code>KmsMasterKeyId</code> – The ID of an Amazon Web Services managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms">Key Terms</a>. While the alias of the AWS-managed CMK for Amazon SQS is always <code>alias/aws/sqs</code>, the alias of a custom CMK can, for example, be <code>alias/<i>MyAlias</i> </code>. For more examples, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">KeyId</a> in the <i>Key Management Service API Reference</i>. </p> </li> <li> <p> <code>KmsDataKeyReusePeriodSeconds</code> – The length of time, in seconds, for which Amazon SQS can reuse a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys">data key</a> to encrypt or decrypt messages before calling KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). Default: 300 (5 minutes). A shorter time period provides better security but results in more calls to KMS which might incur charges after Free Tier. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-how-does-the-data-key-reuse-period-work">How Does the Data Key Reuse Period Work?</a>. </p> </li> <li> <p> <code>SqsManagedSseEnabled</code> – Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (for example, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html">SSE-KMS</a> or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sqs-sse-queue.html">SSE-SQS</a>).</p> </li> </ul> <p>The following attribute applies only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html">FIFO (first-in-first-out) queues</a>:</p> <ul> <li> <p> <code>ContentBasedDeduplication</code> – Enables content-based deduplication. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-exactly-once-processing.html">Exactly-once processing</a> in the <i>Amazon SQS Developer Guide</i>. Note the following: </p> <ul> <li> <p>Every message must have a unique <code>MessageDeduplicationId</code>.</p> <ul> <li> <p>You may provide a <code>MessageDeduplicationId</code> explicitly.</p> </li> <li> <p>If you aren't able to provide a <code>MessageDeduplicationId</code> and you enable <code>ContentBasedDeduplication</code> for your queue, Amazon SQS uses a SHA-256 hash to generate the <code>MessageDeduplicationId</code> using the body of the message (but not the attributes of the message). </p> </li> <li> <p>If you don't provide a <code>MessageDeduplicationId</code> and the queue doesn't have <code>ContentBasedDeduplication</code> set, the action fails with an error.</p> </li> <li> <p>If the queue has <code>ContentBasedDeduplication</code> set, your <code>MessageDeduplicationId</code> overrides the generated one.</p> </li> </ul> </li> <li> <p>When <code>ContentBasedDeduplication</code> is in effect, messages with identical content sent within the deduplication interval are treated as duplicates and only one copy of the message is delivered.</p> </li> <li> <p>If you send one message with <code>ContentBasedDeduplication</code> enabled and then another message with a <code>MessageDeduplicationId</code> that is the same as the one generated for the first <code>MessageDeduplicationId</code>, the two messages are treated as duplicates and only one copy of the message is delivered. </p> </li> </ul> </li> </ul> <p>The following attributes apply only to <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/high-throughput-fifo.html">high throughput for FIFO queues</a>:</p> <ul> <li> <p> <code>DeduplicationScope</code> – Specifies whether message deduplication occurs at the message group or queue level. Valid values are <code>messageGroup</code> and <code>queue</code>.</p> </li> <li> <p> <code>FifoThroughputLimit</code> – Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are <code>perQueue</code> and <code>perMessageGroupId</code>. The <code>perMessageGroupId</code> value is allowed only when the value for <code>DeduplicationScope</code> is <code>messageGroup</code>.</p> </li> </ul> <p>To enable high throughput for FIFO queues, do the following:</p> <ul> <li> <p>Set <code>DeduplicationScope</code> to <code>messageGroup</code>.</p> </li> <li> <p>Set <code>FifoThroughputLimit</code> to <code>perMessageGroupId</code>.</p> </li> </ul> <p>If you set these attributes to anything other than the values shown for enabling high throughput, normal throughput is in effect and deduplication occurs as specified.</p> <p>For information on throughput quotas, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/quotas-messages.html">Quotas related to messages</a> in the <i>Amazon SQS Developer Guide</i>.</p>
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_SetQueueAttributes(Attribute: {[id: string]: string }, AccountNumber: number, QueueName: string, Action: GET_SetQueueAttributesAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=SetQueueAttributes?Attribute=' + Attribute + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.</p> <note> <ul> <li> <p>This action is currently limited to supporting message redrive from queues that are configured as <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported.</p> </li> <li> <p>In dead-letter queues redrive context, the <code>StartMessageMoveTask</code> the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue.</p> </li> <li> <p>Currently, only standard queues support redrive. FIFO queues don't support redrive.</p> </li> <li> <p>Only one active message movement task is supported per queue at any given time.</p> </li> </ul> </note>
		 * Get #Action=StartMessageMoveTask
		 * @param {string} SourceArn The ARN of the queue that contains the messages to be moved to another queue. Currently, only ARNs of dead-letter queues (DLQs) whose sources are other Amazon SQS queues are accepted. DLQs whose sources are non-SQS queues, such as Lambda or Amazon SNS topics, are not currently supported.
		 * @param {string} DestinationArn The ARN of the queue that receives the moved messages. You can use this field to specify the destination queue where you would like to redrive messages. If this field is left blank, the messages will be redriven back to their respective original source queues.
		 * @param {number} MaxNumberOfMessagesPerSecond The number of messages to be moved per second (the message movement rate). You can use this field to define a fixed message movement rate. The maximum value for messages per second is 500. If this field is left blank, the system will optimize the rate based on the queue message backlog size, which may vary throughout the duration of the message movement task.
		 * @return {void} Success
		 */
		GET_StartMessageMoveTask(SourceArn: string, DestinationArn: string | null | undefined, MaxNumberOfMessagesPerSecond: number | null | undefined, Action: GET_StartMessageMoveTaskAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=StartMessageMoveTask?SourceArn=' + (SourceArn == null ? '' : encodeURIComponent(SourceArn)) + '&DestinationArn=' + (DestinationArn == null ? '' : encodeURIComponent(DestinationArn)) + '&MaxNumberOfMessagesPerSecond=' + MaxNumberOfMessagesPerSecond + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <p>When you use queue tags, keep the following guidelines in mind:</p> <ul> <li> <p>Adding more than 50 tags to a queue isn't recommended.</p> </li> <li> <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p> </li> <li> <p>Tags are case-sensitive.</p> </li> <li> <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p> </li> </ul> <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Quotas related to queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=TagQueue
		 * @param {{[id: string]: string }} Tags The list of tags to be added to the specified queue.
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_TagQueue(Tags: {[id: string]: string }, AccountNumber: number, QueueName: string, Action: GET_TagQueueAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=TagQueue?Tags=' + Tags + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon SQS Developer Guide</i>.</p> <note> <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p> </note>
		 * Get {AccountNumber}/{QueueName}/#Action=UntagQueue
		 * @param {Array<string>} TagKeys The list of tags to be removed from the specified queue.
		 * @param {number} AccountNumber The AWS account number
		 * @param {string} QueueName The name of the queue
		 * @return {void} Success
		 */
		GET_UntagQueue(TagKeys: Array<string>, AccountNumber: number, QueueName: string, Action: GET_UntagQueueAction, Version: GET_AddPermissionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + AccountNumber + '/' + (QueueName == null ? '' : encodeURIComponent(QueueName)) + '/#Action=UntagQueue?' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version + '', { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AddPermissionAction { AddPermission = 0 }

	export enum GET_AddPermissionVersion { '2012-11-05' = 0 }

	export enum GET_CancelMessageMoveTaskAction { CancelMessageMoveTask = 0 }

	export enum GET_ChangeMessageVisibilityAction { ChangeMessageVisibility = 0 }

	export enum GET_ChangeMessageVisibilityBatchAction { ChangeMessageVisibilityBatch = 0 }

	export enum GET_CreateQueueAction { CreateQueue = 0 }

	export enum GET_DeleteMessageAction { DeleteMessage = 0 }

	export enum GET_DeleteMessageBatchAction { DeleteMessageBatch = 0 }

	export enum GET_DeleteQueueAction { DeleteQueue = 0 }

	export enum GET_GetQueueAttributesAction { GetQueueAttributes = 0 }

	export enum GET_GetQueueUrlAction { GetQueueUrl = 0 }

	export enum GET_ListDeadLetterSourceQueuesAction { ListDeadLetterSourceQueues = 0 }

	export enum GET_ListMessageMoveTasksAction { ListMessageMoveTasks = 0 }

	export enum GET_ListQueueTagsAction { ListQueueTags = 0 }

	export enum GET_ListQueuesAction { ListQueues = 0 }

	export enum GET_PurgeQueueAction { PurgeQueue = 0 }

	export enum GET_ReceiveMessageAction { ReceiveMessage = 0 }

	export enum GET_RemovePermissionAction { RemovePermission = 0 }

	export enum GET_SendMessageAction { SendMessage = 0 }

	export enum GET_SendMessageBatchAction { SendMessageBatch = 0 }

	export enum GET_SetQueueAttributesAction { SetQueueAttributes = 0 }

	export enum GET_StartMessageMoveTaskAction { StartMessageMoveTask = 0 }

	export enum GET_TagQueueAction { TagQueue = 0 }

	export enum GET_UntagQueueAction { UntagQueue = 0 }

}

