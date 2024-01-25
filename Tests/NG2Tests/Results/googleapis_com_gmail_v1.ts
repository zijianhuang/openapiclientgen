import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Auto-forwarding settings for an account. */
	export interface AutoForwarding {

		/** The state that a message should be left in after it has been forwarded. */
		disposition?: AutoForwardingDisposition | null;

		/**
		 * Email address to which all incoming messages are forwarded.  This email
		 * address must be a verified member of the forwarding addresses.
		 */
		emailAddress?: string | null;

		/** Whether all incoming mail is automatically forwarded to another address. */
		enabled?: boolean | null;
	}

	/** Auto-forwarding settings for an account. */
	export interface AutoForwardingFormProperties {

		/** The state that a message should be left in after it has been forwarded. */
		disposition: FormControl<AutoForwardingDisposition | null | undefined>,

		/**
		 * Email address to which all incoming messages are forwarded.  This email
		 * address must be a verified member of the forwarding addresses.
		 */
		emailAddress: FormControl<string | null | undefined>,

		/** Whether all incoming mail is automatically forwarded to another address. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoForwardingFormGroup() {
		return new FormGroup<AutoForwardingFormProperties>({
			disposition: new FormControl<AutoForwardingDisposition | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AutoForwardingDisposition { dispositionUnspecified = 0, leaveInInbox = 1, archive = 2, trash = 3, markRead = 4 }

	export interface BatchDeleteMessagesRequest {

		/** The IDs of the messages to delete. */
		ids?: Array<string>;
	}
	export interface BatchDeleteMessagesRequestFormProperties {
	}
	export function CreateBatchDeleteMessagesRequestFormGroup() {
		return new FormGroup<BatchDeleteMessagesRequestFormProperties>({
		});

	}

	export interface BatchModifyMessagesRequest {

		/** A list of label IDs to add to messages. */
		addLabelIds?: Array<string>;

		/**
		 * The IDs of the messages to modify. There is a limit of 1000 ids per
		 * request.
		 */
		ids?: Array<string>;

		/** A list of label IDs to remove from messages. */
		removeLabelIds?: Array<string>;
	}
	export interface BatchModifyMessagesRequestFormProperties {
	}
	export function CreateBatchModifyMessagesRequestFormGroup() {
		return new FormGroup<BatchModifyMessagesRequestFormProperties>({
		});

	}


	/**
	 * Settings for a delegate. Delegates can read, send, and delete messages, as
	 * well as view and add contacts, for the delegator's account. See
	 * <a href="https://support.google.com/mail/answer/138350">"Set up
	 * mail delegation"</a> for more information about delegates.
	 */
	export interface Delegate {

		/** The email address of the delegate. */
		delegateEmail?: string | null;

		/**
		 * Indicates whether this address has been verified and can act as a delegate
		 * for the account.  Read-only.
		 */
		verificationStatus?: DelegateVerificationStatus | null;
	}

	/**
	 * Settings for a delegate. Delegates can read, send, and delete messages, as
	 * well as view and add contacts, for the delegator's account. See
	 * <a href="https://support.google.com/mail/answer/138350">"Set up
	 * mail delegation"</a> for more information about delegates.
	 */
	export interface DelegateFormProperties {

		/** The email address of the delegate. */
		delegateEmail: FormControl<string | null | undefined>,

		/**
		 * Indicates whether this address has been verified and can act as a delegate
		 * for the account.  Read-only.
		 */
		verificationStatus: FormControl<DelegateVerificationStatus | null | undefined>,
	}
	export function CreateDelegateFormGroup() {
		return new FormGroup<DelegateFormProperties>({
			delegateEmail: new FormControl<string | null | undefined>(undefined),
			verificationStatus: new FormControl<DelegateVerificationStatus | null | undefined>(undefined),
		});

	}

	export enum DelegateVerificationStatus { verificationStatusUnspecified = 0, accepted = 1, pending = 2, rejected = 3, expired = 4 }


	/** A draft email in the user's mailbox. */
	export interface Draft {

		/** The immutable ID of the draft. */
		id?: string | null;

		/** An email message. */
		message?: Message;
	}

	/** A draft email in the user's mailbox. */
	export interface DraftFormProperties {

		/** The immutable ID of the draft. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDraftFormGroup() {
		return new FormGroup<DraftFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An email message. */
	export interface Message {

		/** The ID of the last history record that modified this message. */
		historyId?: string | null;

		/** The immutable ID of the message. */
		id?: string | null;

		/**
		 * The internal message creation timestamp (epoch ms), which determines
		 * ordering in the inbox.  For normal SMTP-received email, this represents the
		 * time the message was originally accepted by Google, which is more reliable
		 * than the <code>Date</code> header. However, for API-migrated mail, it can
		 * be configured by client to be based on the <code>Date</code> header.
		 */
		internalDate?: string | null;

		/**
		 * List of IDs of labels applied to this message.
		 * @mutable gmail.users.messages.insert gmail.users.messages.modify
		 */
		labelIds?: Array<string>;

		/** A single MIME message part. */
		payload?: MessagePart;

		/**
		 * The entire email message in an RFC 2822 formatted and base64url
		 * encoded string. Returned in <code>messages.get</code> and
		 * <code>drafts.get</code> responses when the <code>format=RAW</code>
		 * parameter is supplied.
		 * @mutable gmail.users.messages.insert gmail.users.messages.send
		 * @mutable gmail.users.drafts.create gmail.users.drafts.update
		 */
		raw?: string | null;

		/** Estimated size in bytes of the message. */
		sizeEstimate?: number | null;

		/** A short part of the message text. */
		snippet?: string | null;

		/**
		 * The ID of the thread the message belongs to. To add a message or draft to
		 * a thread, the following criteria must be met:
		 * <ol><li>The requested <code>threadId</code> must be specified on the
		 * <code>Message</code> or <code>Draft.Message</code> you supply with your
		 * request.</li>
		 * <li>The <code>References</code> and <code>In-Reply-To</code> headers must
		 * be set in compliance with the
		 * <a href="https://tools.ietf.org/html/rfc2822">RFC 2822</a> standard.</li>
		 * <li>The <code>Subject</code> headers must match.
		 * @mutable gmail.users.messages.insert gmail.users.messages.send
		 * @mutable gmail.users.drafts.create gmail.users.drafts.update
		 */
		threadId?: string | null;
	}

	/** An email message. */
	export interface MessageFormProperties {

		/** The ID of the last history record that modified this message. */
		historyId: FormControl<string | null | undefined>,

		/** The immutable ID of the message. */
		id: FormControl<string | null | undefined>,

		/**
		 * The internal message creation timestamp (epoch ms), which determines
		 * ordering in the inbox.  For normal SMTP-received email, this represents the
		 * time the message was originally accepted by Google, which is more reliable
		 * than the <code>Date</code> header. However, for API-migrated mail, it can
		 * be configured by client to be based on the <code>Date</code> header.
		 */
		internalDate: FormControl<string | null | undefined>,

		/**
		 * The entire email message in an RFC 2822 formatted and base64url
		 * encoded string. Returned in <code>messages.get</code> and
		 * <code>drafts.get</code> responses when the <code>format=RAW</code>
		 * parameter is supplied.
		 * @mutable gmail.users.messages.insert gmail.users.messages.send
		 * @mutable gmail.users.drafts.create gmail.users.drafts.update
		 */
		raw: FormControl<string | null | undefined>,

		/** Estimated size in bytes of the message. */
		sizeEstimate: FormControl<number | null | undefined>,

		/** A short part of the message text. */
		snippet: FormControl<string | null | undefined>,

		/**
		 * The ID of the thread the message belongs to. To add a message or draft to
		 * a thread, the following criteria must be met:
		 * <ol><li>The requested <code>threadId</code> must be specified on the
		 * <code>Message</code> or <code>Draft.Message</code> you supply with your
		 * request.</li>
		 * <li>The <code>References</code> and <code>In-Reply-To</code> headers must
		 * be set in compliance with the
		 * <a href="https://tools.ietf.org/html/rfc2822">RFC 2822</a> standard.</li>
		 * <li>The <code>Subject</code> headers must match.
		 * @mutable gmail.users.messages.insert gmail.users.messages.send
		 * @mutable gmail.users.drafts.create gmail.users.drafts.update
		 */
		threadId: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			historyId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalDate: new FormControl<string | null | undefined>(undefined),
			raw: new FormControl<string | null | undefined>(undefined),
			sizeEstimate: new FormControl<number | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
			threadId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single MIME message part. */
	export interface MessagePart {

		/** The body of a single MIME message part. */
		body?: MessagePartBody;

		/**
		 * The filename of the attachment. Only present if this message part
		 * represents an attachment.
		 */
		filename?: string | null;

		/**
		 * List of headers on this message part. For the top-level message part,
		 * representing the entire message payload, it will contain the standard
		 * RFC 2822 email headers such as <code>To</code>, <code>From</code>, and
		 * <code>Subject</code>.
		 */
		headers?: Array<MessagePartHeader>;

		/** The MIME type of the message part. */
		mimeType?: string | null;

		/** The immutable ID of the message part. */
		partId?: string | null;

		/**
		 * The child MIME message parts of this part. This only applies to container
		 * MIME message parts, for example <code>multipart/*</code>. For non-
		 * container MIME message part types, such as <code>text/plain</code>, this
		 * field is empty. For more information, see
		 * <a href="http://www.ietf.org/rfc/rfc1521.txt">RFC 1521</a>.
		 */
		parts?: Array<MessagePart>;
	}

	/** A single MIME message part. */
	export interface MessagePartFormProperties {

		/**
		 * The filename of the attachment. Only present if this message part
		 * represents an attachment.
		 */
		filename: FormControl<string | null | undefined>,

		/** The MIME type of the message part. */
		mimeType: FormControl<string | null | undefined>,

		/** The immutable ID of the message part. */
		partId: FormControl<string | null | undefined>,
	}
	export function CreateMessagePartFormGroup() {
		return new FormGroup<MessagePartFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			partId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The body of a single MIME message part. */
	export interface MessagePartBody {

		/**
		 * When present, contains the ID of an external attachment that can be
		 * retrieved in a separate <code>messages.attachments.get</code> request.
		 * When not present, the entire content of the message part body is
		 * contained in the data field.
		 */
		attachmentId?: string | null;

		/**
		 * The body data of a MIME message part as a base64url encoded string.
		 * May be empty for MIME container
		 * types that have no message body or when the body data is sent as a
		 * separate attachment. An attachment ID is present if the body data is
		 * contained in a separate attachment.
		 */
		data?: string | null;

		/** Number of bytes for the message part data (encoding notwithstanding). */
		size?: number | null;
	}

	/** The body of a single MIME message part. */
	export interface MessagePartBodyFormProperties {

		/**
		 * When present, contains the ID of an external attachment that can be
		 * retrieved in a separate <code>messages.attachments.get</code> request.
		 * When not present, the entire content of the message part body is
		 * contained in the data field.
		 */
		attachmentId: FormControl<string | null | undefined>,

		/**
		 * The body data of a MIME message part as a base64url encoded string.
		 * May be empty for MIME container
		 * types that have no message body or when the body data is sent as a
		 * separate attachment. An attachment ID is present if the body data is
		 * contained in a separate attachment.
		 */
		data: FormControl<string | null | undefined>,

		/** Number of bytes for the message part data (encoding notwithstanding). */
		size: FormControl<number | null | undefined>,
	}
	export function CreateMessagePartBodyFormGroup() {
		return new FormGroup<MessagePartBodyFormProperties>({
			attachmentId: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MessagePartHeader {

		/**
		 * The name of the header before the <code>:</code> separator. For
		 * example, <code>To</code>.
		 */
		name?: string | null;

		/**
		 * The value of the header after the <code>:</code> separator. For example,
		 * <code>someuser@example.com</code>.
		 */
		value?: string | null;
	}
	export interface MessagePartHeaderFormProperties {

		/**
		 * The name of the header before the <code>:</code> separator. For
		 * example, <code>To</code>.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the header after the <code>:</code> separator. For example,
		 * <code>someuser@example.com</code>.
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMessagePartHeaderFormGroup() {
		return new FormGroup<MessagePartHeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Resource definition for Gmail filters. Filters apply to specific messages
	 * instead of an entire email thread.
	 */
	export interface Filter {

		/** A set of actions to perform on a message. */
		action?: FilterAction;

		/** Message matching criteria. */
		criteria?: FilterCriteria;

		/** The server assigned ID of the filter. */
		id?: string | null;
	}

	/**
	 * Resource definition for Gmail filters. Filters apply to specific messages
	 * instead of an entire email thread.
	 */
	export interface FilterFormProperties {

		/** The server assigned ID of the filter. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of actions to perform on a message. */
	export interface FilterAction {

		/** List of labels to add to the message. */
		addLabelIds?: Array<string>;

		/** Email address that the message should be forwarded to. */
		forward?: string | null;

		/** List of labels to remove from the message. */
		removeLabelIds?: Array<string>;
	}

	/** A set of actions to perform on a message. */
	export interface FilterActionFormProperties {

		/** Email address that the message should be forwarded to. */
		forward: FormControl<string | null | undefined>,
	}
	export function CreateFilterActionFormGroup() {
		return new FormGroup<FilterActionFormProperties>({
			forward: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message matching criteria. */
	export interface FilterCriteria {

		/** Whether the response should exclude chats. */
		excludeChats?: boolean | null;

		/** The sender's display name or email address. */
		from?: string | null;

		/** Whether the message has any attachment. */
		hasAttachment?: boolean | null;

		/**
		 * Only return messages not matching the specified query. Supports the same
		 * query format as the Gmail search box. For example,
		 * <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
		 * is:unread"</code>.
		 */
		negatedQuery?: string | null;

		/**
		 * Only return messages matching the specified query. Supports the same
		 * query format as the Gmail search box. For example,
		 * <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
		 * is:unread"</code>.
		 */
		query?: string | null;

		/**
		 * The size of the entire RFC822 message in bytes, including all headers and
		 * attachments.
		 */
		size?: number | null;

		/** How the message size in bytes should be in relation to the size field. */
		sizeComparison?: FilterCriteriaSizeComparison | null;

		/**
		 * Case-insensitive phrase found in the message's subject. Trailing and
		 * leading whitespace are be trimmed and adjacent spaces are collapsed.
		 */
		subject?: string | null;

		/**
		 * The recipient's display name or email address. Includes recipients in the
		 * "to", "cc", and "bcc" header fields. You can use simply the local part of
		 * the email address. For example, "example" and "example@" both match
		 * "example@gmail.com". This field is case-insensitive.
		 */
		to?: string | null;
	}

	/** Message matching criteria. */
	export interface FilterCriteriaFormProperties {

		/** Whether the response should exclude chats. */
		excludeChats: FormControl<boolean | null | undefined>,

		/** The sender's display name or email address. */
		from: FormControl<string | null | undefined>,

		/** Whether the message has any attachment. */
		hasAttachment: FormControl<boolean | null | undefined>,

		/**
		 * Only return messages not matching the specified query. Supports the same
		 * query format as the Gmail search box. For example,
		 * <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
		 * is:unread"</code>.
		 */
		negatedQuery: FormControl<string | null | undefined>,

		/**
		 * Only return messages matching the specified query. Supports the same
		 * query format as the Gmail search box. For example,
		 * <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
		 * is:unread"</code>.
		 */
		query: FormControl<string | null | undefined>,

		/**
		 * The size of the entire RFC822 message in bytes, including all headers and
		 * attachments.
		 */
		size: FormControl<number | null | undefined>,

		/** How the message size in bytes should be in relation to the size field. */
		sizeComparison: FormControl<FilterCriteriaSizeComparison | null | undefined>,

		/**
		 * Case-insensitive phrase found in the message's subject. Trailing and
		 * leading whitespace are be trimmed and adjacent spaces are collapsed.
		 */
		subject: FormControl<string | null | undefined>,

		/**
		 * The recipient's display name or email address. Includes recipients in the
		 * "to", "cc", and "bcc" header fields. You can use simply the local part of
		 * the email address. For example, "example" and "example@" both match
		 * "example@gmail.com". This field is case-insensitive.
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateFilterCriteriaFormGroup() {
		return new FormGroup<FilterCriteriaFormProperties>({
			excludeChats: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			hasAttachment: new FormControl<boolean | null | undefined>(undefined),
			negatedQuery: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			sizeComparison: new FormControl<FilterCriteriaSizeComparison | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FilterCriteriaSizeComparison { unspecified = 0, smaller = 1, larger = 2 }


	/** Settings for a forwarding address. */
	export interface ForwardingAddress {

		/** An email address to which messages can be forwarded. */
		forwardingEmail?: string | null;

		/**
		 * Indicates whether this address has been verified and is usable for
		 * forwarding.  Read-only.
		 */
		verificationStatus?: ForwardingAddressVerificationStatus | null;
	}

	/** Settings for a forwarding address. */
	export interface ForwardingAddressFormProperties {

		/** An email address to which messages can be forwarded. */
		forwardingEmail: FormControl<string | null | undefined>,

		/**
		 * Indicates whether this address has been verified and is usable for
		 * forwarding.  Read-only.
		 */
		verificationStatus: FormControl<ForwardingAddressVerificationStatus | null | undefined>,
	}
	export function CreateForwardingAddressFormGroup() {
		return new FormGroup<ForwardingAddressFormProperties>({
			forwardingEmail: new FormControl<string | null | undefined>(undefined),
			verificationStatus: new FormControl<ForwardingAddressVerificationStatus | null | undefined>(undefined),
		});

	}

	export enum ForwardingAddressVerificationStatus { verificationStatusUnspecified = 0, accepted = 1, pending = 2 }


	/**
	 * A record of a change to the user's mailbox. Each history change may affect
	 * multiple messages in multiple ways.
	 */
	export interface History {

		/** The mailbox sequence ID. */
		id?: string | null;

		/** Labels added to messages in this history record. */
		labelsAdded?: Array<HistoryLabelAdded>;

		/** Labels removed from messages in this history record. */
		labelsRemoved?: Array<HistoryLabelRemoved>;

		/**
		 * List of messages changed in this history record.  The fields for specific
		 * change types, such as <code>messagesAdded</code> may duplicate messages in
		 * this field.  We recommend using the specific change-type fields instead
		 * of this.
		 */
		messages?: Array<Message>;

		/** Messages added to the mailbox in this history record. */
		messagesAdded?: Array<HistoryMessageAdded>;

		/** Messages deleted (not Trashed) from the mailbox in this history record. */
		messagesDeleted?: Array<HistoryMessageDeleted>;
	}

	/**
	 * A record of a change to the user's mailbox. Each history change may affect
	 * multiple messages in multiple ways.
	 */
	export interface HistoryFormProperties {

		/** The mailbox sequence ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateHistoryFormGroup() {
		return new FormGroup<HistoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HistoryLabelAdded {

		/** Label IDs added to the message. */
		labelIds?: Array<string>;

		/** An email message. */
		message?: Message;
	}
	export interface HistoryLabelAddedFormProperties {
	}
	export function CreateHistoryLabelAddedFormGroup() {
		return new FormGroup<HistoryLabelAddedFormProperties>({
		});

	}

	export interface HistoryLabelRemoved {

		/** Label IDs removed from the message. */
		labelIds?: Array<string>;

		/** An email message. */
		message?: Message;
	}
	export interface HistoryLabelRemovedFormProperties {
	}
	export function CreateHistoryLabelRemovedFormGroup() {
		return new FormGroup<HistoryLabelRemovedFormProperties>({
		});

	}

	export interface HistoryMessageAdded {

		/** An email message. */
		message?: Message;
	}
	export interface HistoryMessageAddedFormProperties {
	}
	export function CreateHistoryMessageAddedFormGroup() {
		return new FormGroup<HistoryMessageAddedFormProperties>({
		});

	}

	export interface HistoryMessageDeleted {

		/** An email message. */
		message?: Message;
	}
	export interface HistoryMessageDeletedFormProperties {
	}
	export function CreateHistoryMessageDeletedFormGroup() {
		return new FormGroup<HistoryMessageDeletedFormProperties>({
		});

	}


	/** IMAP settings for an account. */
	export interface ImapSettings {

		/**
		 * If this value is true, Gmail will immediately expunge a message when it is
		 * marked as deleted in IMAP.  Otherwise, Gmail will wait for an update from
		 * the client before expunging messages marked as deleted.
		 */
		autoExpunge?: boolean | null;

		/** Whether IMAP is enabled for the account. */
		enabled?: boolean | null;

		/**
		 * The action that will be executed on a message when it is marked as deleted
		 * and expunged from the last visible IMAP folder.
		 */
		expungeBehavior?: ImapSettingsExpungeBehavior | null;

		/**
		 * An optional limit on the number of messages that an IMAP folder may
		 * contain.  Legal values are 0, 1000, 2000, 5000 or 10000.  A value of zero
		 * is interpreted to mean that there is no limit.
		 */
		maxFolderSize?: number | null;
	}

	/** IMAP settings for an account. */
	export interface ImapSettingsFormProperties {

		/**
		 * If this value is true, Gmail will immediately expunge a message when it is
		 * marked as deleted in IMAP.  Otherwise, Gmail will wait for an update from
		 * the client before expunging messages marked as deleted.
		 */
		autoExpunge: FormControl<boolean | null | undefined>,

		/** Whether IMAP is enabled for the account. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The action that will be executed on a message when it is marked as deleted
		 * and expunged from the last visible IMAP folder.
		 */
		expungeBehavior: FormControl<ImapSettingsExpungeBehavior | null | undefined>,

		/**
		 * An optional limit on the number of messages that an IMAP folder may
		 * contain.  Legal values are 0, 1000, 2000, 5000 or 10000.  A value of zero
		 * is interpreted to mean that there is no limit.
		 */
		maxFolderSize: FormControl<number | null | undefined>,
	}
	export function CreateImapSettingsFormGroup() {
		return new FormGroup<ImapSettingsFormProperties>({
			autoExpunge: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			expungeBehavior: new FormControl<ImapSettingsExpungeBehavior | null | undefined>(undefined),
			maxFolderSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ImapSettingsExpungeBehavior { expungeBehaviorUnspecified = 0, archive = 1, trash = 2, deleteForever = 3 }


	/**
	 * Labels are used to categorize messages and threads within the
	 * user's mailbox.
	 */
	export interface Label {
		color?: LabelColor;

		/** The immutable ID of the label. */
		id?: string | null;

		/**
		 * The visibility of the label in the label list in the Gmail web interface.
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		labelListVisibility?: LabelLabelListVisibility | null;

		/**
		 * The visibility of the label in the message list in the
		 * Gmail web interface.
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		messageListVisibility?: LabelMessageListVisibility | null;

		/** The total number of messages with the label. */
		messagesTotal?: number | null;

		/** The number of unread messages with the label. */
		messagesUnread?: number | null;

		/**
		 * The display name of the label.
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		name?: string | null;

		/** The total number of threads with the label. */
		threadsTotal?: number | null;

		/** The number of unread threads with the label. */
		threadsUnread?: number | null;

		/**
		 * The owner type for the label. User labels are created by the user and
		 * can be modified and deleted by the user and can be applied to any
		 * message or thread. System labels are internally created and cannot be
		 * added, modified, or deleted. System labels may be able to be applied to or
		 * removed from messages and threads under some circumstances but this is
		 * not guaranteed. For example, users can apply and remove the
		 * <code>INBOX</code> and <code>UNREAD</code> labels from messages and
		 * threads, but cannot apply or remove the <code>DRAFTS</code> or
		 * <code>SENT</code> labels from messages or threads.
		 */
		type?: LabelType | null;
	}

	/**
	 * Labels are used to categorize messages and threads within the
	 * user's mailbox.
	 */
	export interface LabelFormProperties {

		/** The immutable ID of the label. */
		id: FormControl<string | null | undefined>,

		/**
		 * The visibility of the label in the label list in the Gmail web interface.
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		labelListVisibility: FormControl<LabelLabelListVisibility | null | undefined>,

		/**
		 * The visibility of the label in the message list in the
		 * Gmail web interface.
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		messageListVisibility: FormControl<LabelMessageListVisibility | null | undefined>,

		/** The total number of messages with the label. */
		messagesTotal: FormControl<number | null | undefined>,

		/** The number of unread messages with the label. */
		messagesUnread: FormControl<number | null | undefined>,

		/**
		 * The display name of the label.
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		name: FormControl<string | null | undefined>,

		/** The total number of threads with the label. */
		threadsTotal: FormControl<number | null | undefined>,

		/** The number of unread threads with the label. */
		threadsUnread: FormControl<number | null | undefined>,

		/**
		 * The owner type for the label. User labels are created by the user and
		 * can be modified and deleted by the user and can be applied to any
		 * message or thread. System labels are internally created and cannot be
		 * added, modified, or deleted. System labels may be able to be applied to or
		 * removed from messages and threads under some circumstances but this is
		 * not guaranteed. For example, users can apply and remove the
		 * <code>INBOX</code> and <code>UNREAD</code> labels from messages and
		 * threads, but cannot apply or remove the <code>DRAFTS</code> or
		 * <code>SENT</code> labels from messages or threads.
		 */
		type: FormControl<LabelType | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			labelListVisibility: new FormControl<LabelLabelListVisibility | null | undefined>(undefined),
			messageListVisibility: new FormControl<LabelMessageListVisibility | null | undefined>(undefined),
			messagesTotal: new FormControl<number | null | undefined>(undefined),
			messagesUnread: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			threadsTotal: new FormControl<number | null | undefined>(undefined),
			threadsUnread: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<LabelType | null | undefined>(undefined),
		});

	}

	export interface LabelColor {

		/**
		 * The background color represented as hex string #RRGGBB (ex #000000).
		 * This field is required in order to set the color of a label.
		 * Only the following predefined set of color values are allowed:
		 * <br/>
		 * # 000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff,
		 * # fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3,
		 * # f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8,
		 * # efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9,
		 * # e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0,
		 * # cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798,
		 * # ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775,
		 * # 822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c
		 * # 464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff,
		 * # 711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5,
		 * # 594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1,
		 * # c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46,
		 * # 662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		backgroundColor?: string | null;

		/**
		 * The text color of the label, represented as hex string.
		 * This field is required in order to set the color of a label.
		 * Only the following predefined set of color values are allowed:
		 * <br/>
		 * # 000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff,
		 * # fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3,
		 * # f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8,
		 * # efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9,
		 * # e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0,
		 * # cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798,
		 * # ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775,
		 * # 822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c
		 * # 464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff,
		 * # 711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5,
		 * # 594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1,
		 * # c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46,
		 * # 662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		textColor?: string | null;
	}
	export interface LabelColorFormProperties {

		/**
		 * The background color represented as hex string #RRGGBB (ex #000000).
		 * This field is required in order to set the color of a label.
		 * Only the following predefined set of color values are allowed:
		 * <br/>
		 * # 000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff,
		 * # fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3,
		 * # f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8,
		 * # efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9,
		 * # e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0,
		 * # cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798,
		 * # ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775,
		 * # 822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c
		 * # 464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff,
		 * # 711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5,
		 * # 594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1,
		 * # c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46,
		 * # 662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		backgroundColor: FormControl<string | null | undefined>,

		/**
		 * The text color of the label, represented as hex string.
		 * This field is required in order to set the color of a label.
		 * Only the following predefined set of color values are allowed:
		 * <br/>
		 * # 000000, #434343, #666666, #999999, #cccccc, #efefef, #f3f3f3, #ffffff,
		 * # fb4c2f, #ffad47, #fad165, #16a766, #43d692, #4a86e8, #a479e2, #f691b3,
		 * # f6c5be, #ffe6c7, #fef1d1, #b9e4d0, #c6f3de, #c9daf8, #e4d7f5, #fcdee8,
		 * # efa093, #ffd6a2, #fce8b3, #89d3b2, #a0eac9, #a4c2f4, #d0bcf1, #fbc8d9,
		 * # e66550, #ffbc6b, #fcda83, #44b984, #68dfa9, #6d9eeb, #b694e8, #f7a7c0,
		 * # cc3a21, #eaa041, #f2c960, #149e60, #3dc789, #3c78d8, #8e63ce, #e07798,
		 * # ac2b16, #cf8933, #d5ae49, #0b804b, #2a9c68, #285bac, #653e9b, #b65775,
		 * # 822111, #a46a21, #aa8831, #076239, #1a764d, #1c4587, #41236d, #83334c
		 * # 464646, #e7e7e7, #0d3472, #b6cff5, #0d3b44, #98d7e4, #3d188e, #e3d7ff,
		 * # 711a36, #fbd3e0, #8a1c0a, #f2b2a8, #7a2e0b, #ffc8af, #7a4706, #ffdeb5,
		 * # 594c05, #fbe983, #684e07, #fdedc1, #0b4f30, #b3efd3, #04502e, #a2dcc1,
		 * # c2c2c2, #4986e7, #2da2bb, #b99aff, #994a64, #f691b2, #ff7537, #ffad46,
		 * # 662e37, #ebdbde, #cca6ac, #094228, #42d692, #16a765
		 * @mutable gmail.users.labels.create gmail.users.labels.update
		 */
		textColor: FormControl<string | null | undefined>,
	}
	export function CreateLabelColorFormGroup() {
		return new FormGroup<LabelColorFormProperties>({
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			textColor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LabelLabelListVisibility { labelShow = 0, labelShowIfUnread = 1, labelHide = 2 }

	export enum LabelMessageListVisibility { show = 0, hide = 1 }

	export enum LabelType { system = 0, user = 1 }


	/**
	 * Language settings for an account. These settings correspond to
	 * the <a href="https://support.google.com/mail/answer/17091">"Language
	 * settings"</a> feature in the web interface.
	 */
	export interface LanguageSettings {

		/**
		 * The language to display Gmail in, formatted as an
		 * <a href="https://www.w3.org/International/articles/language-tags/">RFC 3066
		 * Language Tag</a> (for example <code>en-GB</code>, <code>fr</code> or
		 * <code>ja</code> for British English, French, or Japanese respectively).
		 * The set of languages supported by Gmail evolves over time, so please refer
		 * to the "Language" dropdown in the
		 * <a href="https://mail.google.com/mail/u/0/#settings/general">Gmail settings
		 * </a> for all available options, as described in the
		 * <a href="https://support.google.com/mail/answer/17091">language settings
		 * help article</a>. A table of sample values is also provided in the
		 * <a href="/gmail/api/guides/language_settings#display_language">Managing
		 * Language Settings guide</a>
		 * Not all Gmail clients can display the same set of languages. In the case
		 * that a user's display language is not available for use on a particular
		 * client, said client automatically chooses to display in the closest
		 * supported variant (or a reasonable default).
		 */
		displayLanguage?: string | null;
	}

	/**
	 * Language settings for an account. These settings correspond to
	 * the <a href="https://support.google.com/mail/answer/17091">"Language
	 * settings"</a> feature in the web interface.
	 */
	export interface LanguageSettingsFormProperties {

		/**
		 * The language to display Gmail in, formatted as an
		 * <a href="https://www.w3.org/International/articles/language-tags/">RFC 3066
		 * Language Tag</a> (for example <code>en-GB</code>, <code>fr</code> or
		 * <code>ja</code> for British English, French, or Japanese respectively).
		 * The set of languages supported by Gmail evolves over time, so please refer
		 * to the "Language" dropdown in the
		 * <a href="https://mail.google.com/mail/u/0/#settings/general">Gmail settings
		 * </a> for all available options, as described in the
		 * <a href="https://support.google.com/mail/answer/17091">language settings
		 * help article</a>. A table of sample values is also provided in the
		 * <a href="/gmail/api/guides/language_settings#display_language">Managing
		 * Language Settings guide</a>
		 * Not all Gmail clients can display the same set of languages. In the case
		 * that a user's display language is not available for use on a particular
		 * client, said client automatically chooses to display in the closest
		 * supported variant (or a reasonable default).
		 */
		displayLanguage: FormControl<string | null | undefined>,
	}
	export function CreateLanguageSettingsFormGroup() {
		return new FormGroup<LanguageSettingsFormProperties>({
			displayLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the ListDelegates method. */
	export interface ListDelegatesResponse {

		/** List of the user's delegates (with any verification status). */
		delegates?: Array<Delegate>;
	}

	/** Response for the ListDelegates method. */
	export interface ListDelegatesResponseFormProperties {
	}
	export function CreateListDelegatesResponseFormGroup() {
		return new FormGroup<ListDelegatesResponseFormProperties>({
		});

	}

	export interface ListDraftsResponse {

		/**
		 * List of drafts. Note that the <code>Message</code> property in each
		 * <code>Draft</code> resource only contains an <code>id</code> and a
		 * <code>threadId</code>. The
		 * <a href="/gmail/api/v1/reference/users/messages/get">messages.get</a>
		 * method can fetch additional message details.
		 */
		drafts?: Array<Draft>;

		/** Token to retrieve the next page of results in the list. */
		nextPageToken?: string | null;

		/** Estimated total number of results. */
		resultSizeEstimate?: number | null;
	}
	export interface ListDraftsResponseFormProperties {

		/** Token to retrieve the next page of results in the list. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Estimated total number of results. */
		resultSizeEstimate: FormControl<number | null | undefined>,
	}
	export function CreateListDraftsResponseFormGroup() {
		return new FormGroup<ListDraftsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			resultSizeEstimate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for the ListFilters method. */
	export interface ListFiltersResponse {

		/** List of a user's filters. */
		filter?: Array<Filter>;
	}

	/** Response for the ListFilters method. */
	export interface ListFiltersResponseFormProperties {
	}
	export function CreateListFiltersResponseFormGroup() {
		return new FormGroup<ListFiltersResponseFormProperties>({
		});

	}


	/** Response for the ListForwardingAddresses method. */
	export interface ListForwardingAddressesResponse {

		/** List of addresses that may be used for forwarding. */
		forwardingAddresses?: Array<ForwardingAddress>;
	}

	/** Response for the ListForwardingAddresses method. */
	export interface ListForwardingAddressesResponseFormProperties {
	}
	export function CreateListForwardingAddressesResponseFormGroup() {
		return new FormGroup<ListForwardingAddressesResponseFormProperties>({
		});

	}

	export interface ListHistoryResponse {

		/**
		 * List of history records.  Any <code>messages</code> contained in the
		 * response will typically only have <code>id</code> and
		 * <code>threadId</code> fields populated.
		 */
		history?: Array<History>;

		/** The ID of the mailbox's current history record. */
		historyId?: string | null;

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken?: string | null;
	}
	export interface ListHistoryResponseFormProperties {

		/** The ID of the mailbox's current history record. */
		historyId: FormControl<string | null | undefined>,

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHistoryResponseFormGroup() {
		return new FormGroup<ListHistoryResponseFormProperties>({
			historyId: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLabelsResponse {

		/**
		 * List of labels. Note that each label resource only contains an
		 * <code>id</code>, <code>name</code>, <code>messageListVisibility</code>,
		 * <code>labelListVisibility</code>, and <code>type</code>. The
		 * <a href="/gmail/api/v1/reference/users/labels/get">labels.get</a> method
		 * can fetch additional label details.
		 */
		labels?: Array<Label>;
	}
	export interface ListLabelsResponseFormProperties {
	}
	export function CreateListLabelsResponseFormGroup() {
		return new FormGroup<ListLabelsResponseFormProperties>({
		});

	}

	export interface ListMessagesResponse {

		/**
		 * List of messages. Note that each message resource contains only an
		 * <code>id</code> and a <code>threadId</code>. Additional message details can
		 * be fetched using the
		 * <a href="/gmail/api/v1/reference/users/messages/get">messages.get</a>
		 * method.
		 */
		messages?: Array<Message>;

		/** Token to retrieve the next page of results in the list. */
		nextPageToken?: string | null;

		/** Estimated total number of results. */
		resultSizeEstimate?: number | null;
	}
	export interface ListMessagesResponseFormProperties {

		/** Token to retrieve the next page of results in the list. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Estimated total number of results. */
		resultSizeEstimate: FormControl<number | null | undefined>,
	}
	export function CreateListMessagesResponseFormGroup() {
		return new FormGroup<ListMessagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			resultSizeEstimate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for the ListSendAs method. */
	export interface ListSendAsResponse {

		/** List of send-as aliases. */
		sendAs?: Array<SendAs>;
	}

	/** Response for the ListSendAs method. */
	export interface ListSendAsResponseFormProperties {
	}
	export function CreateListSendAsResponseFormGroup() {
		return new FormGroup<ListSendAsResponseFormProperties>({
		});

	}


	/**
	 * Settings associated with a send-as alias, which can be either the primary
	 * login address associated with the account or a custom "from" address.
	 * Send-as aliases correspond to the
	 * <a href="https://support.google.com/mail/answer/22370">"Send Mail As"</a>
	 * feature in the web interface.
	 */
	export interface SendAs {

		/**
		 * A name that appears in the "From:" header for mail sent using this alias.
		 * For custom "from" addresses, when this is empty, Gmail will populate the
		 * "From:" header with the name that is used for the primary address
		 * associated with the account.
		 * If the admin has disabled the ability for users to update their name
		 * format, requests to update this field for the primary login will silently
		 * fail.
		 */
		displayName?: string | null;

		/**
		 * Whether this address is selected as the default "From:" address in
		 * situations such as composing a new message or sending a vacation
		 * auto-reply.  Every Gmail account has exactly one default send-as address,
		 * so the only legal value that clients may write to this field is
		 * <code>true</code>.  Changing this from <code>false</code> to
		 * <code>true</code> for an address will result in this field becoming
		 * <code>false</code> for the other previous default address.
		 */
		isDefault?: boolean | null;

		/**
		 * Whether this address is the primary address used to login to the account.
		 * Every Gmail account has exactly one primary address, and it cannot be
		 * deleted from the collection of send-as aliases.  This field is read-only.
		 */
		isPrimary?: boolean | null;

		/**
		 * An optional email address that is included in a "Reply-To:" header for mail
		 * sent using this alias.  If this is empty, Gmail will not generate a
		 * "Reply-To:" header.
		 */
		replyToAddress?: string | null;

		/**
		 * The email address that appears in the "From:" header for mail sent using
		 * this alias.  This is read-only for all operations except create.
		 */
		sendAsEmail?: string | null;

		/**
		 * An optional HTML signature that is included in messages composed with this
		 * alias in the Gmail web UI.
		 */
		signature?: string | null;

		/** Configuration for communication with an SMTP service. */
		smtpMsa?: SmtpMsa;

		/**
		 * Whether Gmail should <a href="https://support.google.com/a/answer/1710338">
		 * treat this address as an alias</a> for the user's primary email address.
		 * This setting only applies to custom "from" aliases.
		 */
		treatAsAlias?: boolean | null;

		/**
		 * Indicates whether this address has been verified for use as a send-as
		 * alias.  Read-only.  This setting only applies to custom "from" aliases.
		 */
		verificationStatus?: ForwardingAddressVerificationStatus | null;
	}

	/**
	 * Settings associated with a send-as alias, which can be either the primary
	 * login address associated with the account or a custom "from" address.
	 * Send-as aliases correspond to the
	 * <a href="https://support.google.com/mail/answer/22370">"Send Mail As"</a>
	 * feature in the web interface.
	 */
	export interface SendAsFormProperties {

		/**
		 * A name that appears in the "From:" header for mail sent using this alias.
		 * For custom "from" addresses, when this is empty, Gmail will populate the
		 * "From:" header with the name that is used for the primary address
		 * associated with the account.
		 * If the admin has disabled the ability for users to update their name
		 * format, requests to update this field for the primary login will silently
		 * fail.
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Whether this address is selected as the default "From:" address in
		 * situations such as composing a new message or sending a vacation
		 * auto-reply.  Every Gmail account has exactly one default send-as address,
		 * so the only legal value that clients may write to this field is
		 * <code>true</code>.  Changing this from <code>false</code> to
		 * <code>true</code> for an address will result in this field becoming
		 * <code>false</code> for the other previous default address.
		 */
		isDefault: FormControl<boolean | null | undefined>,

		/**
		 * Whether this address is the primary address used to login to the account.
		 * Every Gmail account has exactly one primary address, and it cannot be
		 * deleted from the collection of send-as aliases.  This field is read-only.
		 */
		isPrimary: FormControl<boolean | null | undefined>,

		/**
		 * An optional email address that is included in a "Reply-To:" header for mail
		 * sent using this alias.  If this is empty, Gmail will not generate a
		 * "Reply-To:" header.
		 */
		replyToAddress: FormControl<string | null | undefined>,

		/**
		 * The email address that appears in the "From:" header for mail sent using
		 * this alias.  This is read-only for all operations except create.
		 */
		sendAsEmail: FormControl<string | null | undefined>,

		/**
		 * An optional HTML signature that is included in messages composed with this
		 * alias in the Gmail web UI.
		 */
		signature: FormControl<string | null | undefined>,

		/**
		 * Whether Gmail should <a href="https://support.google.com/a/answer/1710338">
		 * treat this address as an alias</a> for the user's primary email address.
		 * This setting only applies to custom "from" aliases.
		 */
		treatAsAlias: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether this address has been verified for use as a send-as
		 * alias.  Read-only.  This setting only applies to custom "from" aliases.
		 */
		verificationStatus: FormControl<ForwardingAddressVerificationStatus | null | undefined>,
	}
	export function CreateSendAsFormGroup() {
		return new FormGroup<SendAsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isPrimary: new FormControl<boolean | null | undefined>(undefined),
			replyToAddress: new FormControl<string | null | undefined>(undefined),
			sendAsEmail: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
			treatAsAlias: new FormControl<boolean | null | undefined>(undefined),
			verificationStatus: new FormControl<ForwardingAddressVerificationStatus | null | undefined>(undefined),
		});

	}


	/** Configuration for communication with an SMTP service. */
	export interface SmtpMsa {

		/** The hostname of the SMTP service.  Required. */
		host?: string | null;

		/**
		 * The password that will be used for authentication with the SMTP service.
		 * This is a write-only field that can be specified in requests to create or
		 * update SendAs settings; it is never populated in responses.
		 */
		password?: string | null;

		/** The port of the SMTP service.  Required. */
		port?: number | null;

		/**
		 * The protocol that will be used to secure communication with the SMTP
		 * service.  Required.
		 */
		securityMode?: SmtpMsaSecurityMode | null;

		/**
		 * The username that will be used for authentication with the SMTP service.
		 * This is a write-only field that can be specified in requests to create or
		 * update SendAs settings; it is never populated in responses.
		 */
		username?: string | null;
	}

	/** Configuration for communication with an SMTP service. */
	export interface SmtpMsaFormProperties {

		/** The hostname of the SMTP service.  Required. */
		host: FormControl<string | null | undefined>,

		/**
		 * The password that will be used for authentication with the SMTP service.
		 * This is a write-only field that can be specified in requests to create or
		 * update SendAs settings; it is never populated in responses.
		 */
		password: FormControl<string | null | undefined>,

		/** The port of the SMTP service.  Required. */
		port: FormControl<number | null | undefined>,

		/**
		 * The protocol that will be used to secure communication with the SMTP
		 * service.  Required.
		 */
		securityMode: FormControl<SmtpMsaSecurityMode | null | undefined>,

		/**
		 * The username that will be used for authentication with the SMTP service.
		 * This is a write-only field that can be specified in requests to create or
		 * update SendAs settings; it is never populated in responses.
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSmtpMsaFormGroup() {
		return new FormGroup<SmtpMsaFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			securityMode: new FormControl<SmtpMsaSecurityMode | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SmtpMsaSecurityMode { securityModeUnspecified = 0, none = 1, ssl = 2, starttls = 3 }

	export interface ListSmimeInfoResponse {

		/** List of SmimeInfo. */
		smimeInfo?: Array<SmimeInfo>;
	}
	export interface ListSmimeInfoResponseFormProperties {
	}
	export function CreateListSmimeInfoResponseFormGroup() {
		return new FormGroup<ListSmimeInfoResponseFormProperties>({
		});

	}


	/** An S/MIME email config. */
	export interface SmimeInfo {

		/** Encrypted key password, when key is encrypted. */
		encryptedKeyPassword?: string | null;

		/** When the certificate expires (in milliseconds since epoch). */
		expiration?: string | null;

		/** The immutable ID for the SmimeInfo. */
		id?: string | null;

		/** Whether this SmimeInfo is the default one for this user's send-as address. */
		isDefault?: boolean | null;

		/** The S/MIME certificate issuer's common name. */
		issuerCn?: string | null;

		/**
		 * PEM formatted X509 concatenated certificate string (standard base64
		 * encoding).  Format used for returning key, which includes public key
		 * as well as certificate chain (not private key).
		 */
		pem?: string | null;

		/**
		 * PKCS#12 format containing a single private/public key pair and
		 * certificate chain.  This format is only accepted from client
		 * for creating a new SmimeInfo and is never returned, because the
		 * private key is not intended to be exported.  PKCS#12 may be encrypted,
		 * in which case encryptedKeyPassword should be set appropriately.
		 */
		pkcs12?: string | null;
	}

	/** An S/MIME email config. */
	export interface SmimeInfoFormProperties {

		/** Encrypted key password, when key is encrypted. */
		encryptedKeyPassword: FormControl<string | null | undefined>,

		/** When the certificate expires (in milliseconds since epoch). */
		expiration: FormControl<string | null | undefined>,

		/** The immutable ID for the SmimeInfo. */
		id: FormControl<string | null | undefined>,

		/** Whether this SmimeInfo is the default one for this user's send-as address. */
		isDefault: FormControl<boolean | null | undefined>,

		/** The S/MIME certificate issuer's common name. */
		issuerCn: FormControl<string | null | undefined>,

		/**
		 * PEM formatted X509 concatenated certificate string (standard base64
		 * encoding).  Format used for returning key, which includes public key
		 * as well as certificate chain (not private key).
		 */
		pem: FormControl<string | null | undefined>,

		/**
		 * PKCS#12 format containing a single private/public key pair and
		 * certificate chain.  This format is only accepted from client
		 * for creating a new SmimeInfo and is never returned, because the
		 * private key is not intended to be exported.  PKCS#12 may be encrypted,
		 * in which case encryptedKeyPassword should be set appropriately.
		 */
		pkcs12: FormControl<string | null | undefined>,
	}
	export function CreateSmimeInfoFormGroup() {
		return new FormGroup<SmimeInfoFormProperties>({
			encryptedKeyPassword: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			issuerCn: new FormControl<string | null | undefined>(undefined),
			pem: new FormControl<string | null | undefined>(undefined),
			pkcs12: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListThreadsResponse {

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken?: string | null;

		/** Estimated total number of results. */
		resultSizeEstimate?: number | null;

		/**
		 * List of threads. Note that each thread resource does not contain a list of
		 * <code>messages</code>. The list of <code>messages</code> for a given thread
		 * can be fetched using the
		 * <a href="/gmail/api/v1/reference/users/threads/get">threads.get</a> method.
		 */
		threads?: Array<Thread>;
	}
	export interface ListThreadsResponseFormProperties {

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Estimated total number of results. */
		resultSizeEstimate: FormControl<number | null | undefined>,
	}
	export function CreateListThreadsResponseFormGroup() {
		return new FormGroup<ListThreadsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			resultSizeEstimate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A collection of messages representing a conversation. */
	export interface Thread {

		/** The ID of the last history record that modified this thread. */
		historyId?: string | null;

		/** The unique ID of the thread. */
		id?: string | null;

		/** The list of messages in the thread. */
		messages?: Array<Message>;

		/** A short part of the message text. */
		snippet?: string | null;
	}

	/** A collection of messages representing a conversation. */
	export interface ThreadFormProperties {

		/** The ID of the last history record that modified this thread. */
		historyId: FormControl<string | null | undefined>,

		/** The unique ID of the thread. */
		id: FormControl<string | null | undefined>,

		/** A short part of the message text. */
		snippet: FormControl<string | null | undefined>,
	}
	export function CreateThreadFormGroup() {
		return new FormGroup<ThreadFormProperties>({
			historyId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModifyMessageRequest {

		/** A list of IDs of labels to add to this message. */
		addLabelIds?: Array<string>;

		/** A list IDs of labels to remove from this message. */
		removeLabelIds?: Array<string>;
	}
	export interface ModifyMessageRequestFormProperties {
	}
	export function CreateModifyMessageRequestFormGroup() {
		return new FormGroup<ModifyMessageRequestFormProperties>({
		});

	}

	export interface ModifyThreadRequest {

		/** A list of IDs of labels to add to this thread. */
		addLabelIds?: Array<string>;

		/** A list of IDs of labels to remove from this thread. */
		removeLabelIds?: Array<string>;
	}
	export interface ModifyThreadRequestFormProperties {
	}
	export function CreateModifyThreadRequestFormGroup() {
		return new FormGroup<ModifyThreadRequestFormProperties>({
		});

	}


	/** POP settings for an account. */
	export interface PopSettings {

		/** The range of messages which are accessible via POP. */
		accessWindow?: PopSettingsAccessWindow | null;

		/**
		 * The action that will be executed on a message after it has been fetched via
		 * POP.
		 */
		disposition?: AutoForwardingDisposition | null;
	}

	/** POP settings for an account. */
	export interface PopSettingsFormProperties {

		/** The range of messages which are accessible via POP. */
		accessWindow: FormControl<PopSettingsAccessWindow | null | undefined>,

		/**
		 * The action that will be executed on a message after it has been fetched via
		 * POP.
		 */
		disposition: FormControl<AutoForwardingDisposition | null | undefined>,
	}
	export function CreatePopSettingsFormGroup() {
		return new FormGroup<PopSettingsFormProperties>({
			accessWindow: new FormControl<PopSettingsAccessWindow | null | undefined>(undefined),
			disposition: new FormControl<AutoForwardingDisposition | null | undefined>(undefined),
		});

	}

	export enum PopSettingsAccessWindow { accessWindowUnspecified = 0, disabled = 1, fromNowOn = 2, allMail = 3 }


	/** Profile for a Gmail user. */
	export interface Profile {

		/** The user's email address. */
		emailAddress?: string | null;

		/** The ID of the mailbox's current history record. */
		historyId?: string | null;

		/** The total number of messages in the mailbox. */
		messagesTotal?: number | null;

		/** The total number of threads in the mailbox. */
		threadsTotal?: number | null;
	}

	/** Profile for a Gmail user. */
	export interface ProfileFormProperties {

		/** The user's email address. */
		emailAddress: FormControl<string | null | undefined>,

		/** The ID of the mailbox's current history record. */
		historyId: FormControl<string | null | undefined>,

		/** The total number of messages in the mailbox. */
		messagesTotal: FormControl<number | null | undefined>,

		/** The total number of threads in the mailbox. */
		threadsTotal: FormControl<number | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			historyId: new FormControl<string | null | undefined>(undefined),
			messagesTotal: new FormControl<number | null | undefined>(undefined),
			threadsTotal: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Vacation auto-reply settings for an account.  These settings correspond to
	 * the <a href="https://support.google.com/mail/answer/25922">"Vacation
	 * responder"</a> feature in the web interface.
	 */
	export interface VacationSettings {

		/** Flag that controls whether Gmail automatically replies to messages. */
		enableAutoReply?: boolean | null;

		/**
		 * An optional end time for sending auto-replies (epoch ms).
		 * When this is specified, Gmail will automatically reply only to messages
		 * that it receives before the end time.  If both <code>startTime</code> and
		 * <code>endTime</code> are specified, <code>startTime</code> must precede
		 * <code>endTime</code>.
		 */
		endTime?: string | null;

		/**
		 * Response body in HTML format.  Gmail will sanitize the HTML before
		 * storing it.
		 */
		responseBodyHtml?: string | null;

		/** Response body in plain text format. */
		responseBodyPlainText?: string | null;

		/**
		 * Optional text to prepend to the subject line in vacation responses.  In
		 * order to enable auto-replies, either the response subject or the response
		 * body must be nonempty.
		 */
		responseSubject?: string | null;

		/**
		 * Flag that determines whether responses are sent to recipients who are not
		 * in the user's list of contacts.
		 */
		restrictToContacts?: boolean | null;

		/**
		 * Flag that determines whether responses are sent to recipients who are
		 * outside of the user's domain. This feature is only available for G Suite
		 * users.
		 */
		restrictToDomain?: boolean | null;

		/**
		 * An optional start time for sending auto-replies (epoch ms).
		 * When this is specified, Gmail will automatically reply only to messages
		 * that it receives after the start time.  If both <code>startTime</code> and
		 * <code>endTime</code> are specified, <code>startTime</code> must precede
		 * <code>endTime</code>.
		 */
		startTime?: string | null;
	}

	/**
	 * Vacation auto-reply settings for an account.  These settings correspond to
	 * the <a href="https://support.google.com/mail/answer/25922">"Vacation
	 * responder"</a> feature in the web interface.
	 */
	export interface VacationSettingsFormProperties {

		/** Flag that controls whether Gmail automatically replies to messages. */
		enableAutoReply: FormControl<boolean | null | undefined>,

		/**
		 * An optional end time for sending auto-replies (epoch ms).
		 * When this is specified, Gmail will automatically reply only to messages
		 * that it receives before the end time.  If both <code>startTime</code> and
		 * <code>endTime</code> are specified, <code>startTime</code> must precede
		 * <code>endTime</code>.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Response body in HTML format.  Gmail will sanitize the HTML before
		 * storing it.
		 */
		responseBodyHtml: FormControl<string | null | undefined>,

		/** Response body in plain text format. */
		responseBodyPlainText: FormControl<string | null | undefined>,

		/**
		 * Optional text to prepend to the subject line in vacation responses.  In
		 * order to enable auto-replies, either the response subject or the response
		 * body must be nonempty.
		 */
		responseSubject: FormControl<string | null | undefined>,

		/**
		 * Flag that determines whether responses are sent to recipients who are not
		 * in the user's list of contacts.
		 */
		restrictToContacts: FormControl<boolean | null | undefined>,

		/**
		 * Flag that determines whether responses are sent to recipients who are
		 * outside of the user's domain. This feature is only available for G Suite
		 * users.
		 */
		restrictToDomain: FormControl<boolean | null | undefined>,

		/**
		 * An optional start time for sending auto-replies (epoch ms).
		 * When this is specified, Gmail will automatically reply only to messages
		 * that it receives after the start time.  If both <code>startTime</code> and
		 * <code>endTime</code> are specified, <code>startTime</code> must precede
		 * <code>endTime</code>.
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateVacationSettingsFormGroup() {
		return new FormGroup<VacationSettingsFormProperties>({
			enableAutoReply: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			responseBodyHtml: new FormControl<string | null | undefined>(undefined),
			responseBodyPlainText: new FormControl<string | null | undefined>(undefined),
			responseSubject: new FormControl<string | null | undefined>(undefined),
			restrictToContacts: new FormControl<boolean | null | undefined>(undefined),
			restrictToDomain: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set up or update a new push notification watch on this user's mailbox. */
	export interface WatchRequest {

		/** Filtering behavior of labelIds list specified. */
		labelFilterAction?: WatchRequestLabelFilterAction | null;

		/**
		 * List of label_ids to restrict notifications about.  By default,
		 * if unspecified, all changes are pushed out.  If specified then
		 * dictates which labels are required for a push notification to
		 * be generated.
		 */
		labelIds?: Array<string>;

		/**
		 * A fully qualified Google Cloud Pub/Sub API topic name to publish the
		 * events to. This topic name **must** already exist in Cloud Pub/Sub and
		 * you **must** have already granted gmail "publish" permission on it.
		 * For example, "projects/my-project-identifier/topics/my-topic-name"
		 * (using the Cloud Pub/Sub "v1" topic naming format).
		 * Note that the "my-project-identifier" portion must exactly match your
		 * Google developer project id (the one executing this watch request).
		 */
		topicName?: string | null;
	}

	/** Set up or update a new push notification watch on this user's mailbox. */
	export interface WatchRequestFormProperties {

		/** Filtering behavior of labelIds list specified. */
		labelFilterAction: FormControl<WatchRequestLabelFilterAction | null | undefined>,

		/**
		 * A fully qualified Google Cloud Pub/Sub API topic name to publish the
		 * events to. This topic name **must** already exist in Cloud Pub/Sub and
		 * you **must** have already granted gmail "publish" permission on it.
		 * For example, "projects/my-project-identifier/topics/my-topic-name"
		 * (using the Cloud Pub/Sub "v1" topic naming format).
		 * Note that the "my-project-identifier" portion must exactly match your
		 * Google developer project id (the one executing this watch request).
		 */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateWatchRequestFormGroup() {
		return new FormGroup<WatchRequestFormProperties>({
			labelFilterAction: new FormControl<WatchRequestLabelFilterAction | null | undefined>(undefined),
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WatchRequestLabelFilterAction { include = 0, exclude = 1 }


	/** Push notification watch response. */
	export interface WatchResponse {

		/**
		 * When Gmail will stop sending notifications for mailbox updates
		 * (epoch millis). Call <code>watch</code> again before this time to renew
		 * the watch.
		 */
		expiration?: string | null;

		/** The ID of the mailbox's current history record. */
		historyId?: string | null;
	}

	/** Push notification watch response. */
	export interface WatchResponseFormProperties {

		/**
		 * When Gmail will stop sending notifications for mailbox updates
		 * (epoch millis). Call <code>watch</code> again before this time to renew
		 * the watch.
		 */
		expiration: FormControl<string | null | undefined>,

		/** The ID of the mailbox's current history record. */
		historyId: FormControl<string | null | undefined>,
	}
	export function CreateWatchResponseFormGroup() {
		return new FormGroup<WatchResponseFormProperties>({
			expiration: new FormControl<string | null | undefined>(undefined),
			historyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the drafts in the user's mailbox.
		 * Get gmail/v1/users/{userId}/drafts
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {boolean} includeSpamTrash Include drafts from <code>SPAM</code> and <code>TRASH</code>
		 * in the results.
		 * @param {number} maxResults Maximum number of drafts to return.
		 * @param {string} pageToken Page token to retrieve a specific page of results in the list.
		 * @param {string} q Only return draft messages matching the specified query. Supports the same
		 * query format as the Gmail search box. For example,
		 * <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
		 * is:unread"</code>.
		 * @return {void} Successful response
		 */
		Gmail_users_drafts_list(userId: string, includeSpamTrash: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, q: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/drafts&includeSpamTrash=' + includeSpamTrash + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Immediately and permanently deletes the specified draft.
		 * Does not simply trash it.
		 * Delete gmail/v1/users/{userId}/drafts/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the draft to delete.
		 * @return {void} Successful response
		 */
		Gmail_users_drafts_delete(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/drafts/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified draft.
		 * Get gmail/v1/users/{userId}/drafts/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the draft to retrieve.
		 * @param {Gmail_users_drafts_getFormat} format The format to return the draft in.
		 * @return {void} Successful response
		 */
		Gmail_users_drafts_get(userId: string, id: string, format: Gmail_users_drafts_getFormat | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/drafts/' + (id == null ? '' : encodeURIComponent(id)) + '&format=' + format, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the history of all changes to the given mailbox. History results are
		 * returned in chronological order (increasing <code>historyId</code>).
		 * Get gmail/v1/users/{userId}/history
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {Array<string>} historyTypes History types to be returned by the function
		 * @param {string} labelId Only return messages with a label matching the ID.
		 * @param {number} maxResults The maximum number of history records to return.
		 * @param {string} pageToken Page token to retrieve a specific page of results in the list.
		 * @param {string} startHistoryId Required. Returns history records after the specified
		 * <code>startHistoryId</code>. The supplied <code>startHistoryId</code>
		 * should be obtained from the <code>historyId</code> of a message, thread, or
		 * previous <code>list</code> response. History IDs increase
		 * chronologically but are not contiguous with random gaps in between valid
		 * IDs. Supplying an invalid or out of date <code>startHistoryId</code>
		 * typically returns an <code>HTTP 404</code> error code. A
		 * <code>historyId</code> is typically valid for at least a week, but in some
		 * rare circumstances may be valid for only a few hours. If you receive an
		 * <code>HTTP 404</code> error response, your  application should perform a
		 * full sync. If you receive no <code>nextPageToken</code> in the response,
		 * there are no updates to retrieve and you can store the returned
		 * <code>historyId</code> for a future request.
		 * @return {void} Successful response
		 */
		Gmail_users_history_list(userId: string, historyTypes: Array<string> | null | undefined, labelId: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, startHistoryId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/history&' + historyTypes?.map(z => `historyTypes=${encodeURIComponent(z)}`).join('&') + '&labelId=' + (labelId == null ? '' : encodeURIComponent(labelId)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startHistoryId=' + (startHistoryId == null ? '' : encodeURIComponent(startHistoryId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all labels in the user's mailbox.
		 * Get gmail/v1/users/{userId}/labels
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_labels_list(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/labels', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new label.
		 * Post gmail/v1/users/{userId}/labels
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_labels_create(userId: string, requestBody: Label): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Immediately and permanently deletes the specified label and removes it from
		 * any messages and threads that it is applied to.
		 * Delete gmail/v1/users/{userId}/labels/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the label to delete.
		 * @return {void} Successful response
		 */
		Gmail_users_labels_delete(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/labels/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified label.
		 * Get gmail/v1/users/{userId}/labels/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the label to retrieve.
		 * @return {void} Successful response
		 */
		Gmail_users_labels_get(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/labels/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch the specified label.
		 * Patch gmail/v1/users/{userId}/labels/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the label to update.
		 * @return {void} Successful response
		 */
		Gmail_users_labels_patch(userId: string, id: string, requestBody: Label): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/labels/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified label.
		 * Put gmail/v1/users/{userId}/labels/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the label to update.
		 * @return {void} Successful response
		 */
		Gmail_users_labels_update(userId: string, id: string, requestBody: Label): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/labels/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the messages in the user's mailbox.
		 * Get gmail/v1/users/{userId}/messages
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {boolean} includeSpamTrash Include messages from <code>SPAM</code> and <code>TRASH</code>
		 * in the results.
		 * @param {Array<string>} labelIds Only return messages with labels that match all of the specified label IDs.
		 * @param {number} maxResults Maximum number of messages to return.
		 * @param {string} pageToken Page token to retrieve a specific page of results in the list.
		 * @param {string} q Only return messages matching the specified query. Supports the same
		 * query format as the Gmail search box. For example,
		 * <code>"from:someuser@example.com rfc822msgid:&lt;somemsgid@example.com&gt;
		 * is:unread"</code>. Parameter cannot be used when accessing the api
		 * using the gmail.metadata scope.
		 * @return {void} Successful response
		 */
		Gmail_users_messages_list(userId: string, includeSpamTrash: boolean | null | undefined, labelIds: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, q: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/messages&includeSpamTrash=' + includeSpamTrash + '&' + labelIds?.map(z => `labelIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes many messages by message ID.  Provides no guarantees that messages
		 * were not already deleted or even existed at all.
		 * Post gmail/v1/users/{userId}/messages/batchDelete
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_messages_batchDelete(userId: string, requestBody: BatchDeleteMessagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/messages/batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the labels on the specified messages.
		 * Post gmail/v1/users/{userId}/messages/batchModify
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_messages_batchModify(userId: string, requestBody: BatchModifyMessagesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/messages/batchModify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Immediately and permanently deletes the specified message. This operation
		 * cannot be undone.  Prefer <code>messages.trash</code> instead.
		 * Delete gmail/v1/users/{userId}/messages/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the message to delete.
		 * @return {void} Successful response
		 */
		Gmail_users_messages_delete(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/messages/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified message.
		 * Get gmail/v1/users/{userId}/messages/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the message to retrieve.
		 * @param {Gmail_users_drafts_getFormat} format The format to return the message in.
		 * @param {Array<string>} metadataHeaders When given and format is METADATA, only include headers specified.
		 * @return {void} Successful response
		 */
		Gmail_users_messages_get(userId: string, id: string, format: Gmail_users_drafts_getFormat | null | undefined, metadataHeaders: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/messages/' + (id == null ? '' : encodeURIComponent(id)) + '&format=' + format + '&' + metadataHeaders?.map(z => `metadataHeaders=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the labels on the specified message.
		 * Post gmail/v1/users/{userId}/messages/{id}/modify
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the message to modify.
		 * @return {void} Successful response
		 */
		Gmail_users_messages_modify(userId: string, id: string, requestBody: ModifyMessageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/messages/' + (id == null ? '' : encodeURIComponent(id)) + '/modify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Moves the specified message to the trash.
		 * Post gmail/v1/users/{userId}/messages/{id}/trash
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the message to Trash.
		 * @return {void} Successful response
		 */
		Gmail_users_messages_trash(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/messages/' + (id == null ? '' : encodeURIComponent(id)) + '/trash', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified message from the trash.
		 * Post gmail/v1/users/{userId}/messages/{id}/untrash
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the message to remove from Trash.
		 * @return {void} Successful response
		 */
		Gmail_users_messages_untrash(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/messages/' + (id == null ? '' : encodeURIComponent(id)) + '/untrash', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified message attachment.
		 * Get gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} messageId The ID of the message containing the attachment.
		 * @param {string} id The ID of the attachment.
		 * @return {void} Successful response
		 */
		Gmail_users_messages_attachments_get(userId: string, messageId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/messages/' + (messageId == null ? '' : encodeURIComponent(messageId)) + '/attachments/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the current user's Gmail profile.
		 * Get gmail/v1/users/{userId}/profile
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_getProfile(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/profile', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the auto-forwarding setting for the specified account.
		 * Get gmail/v1/users/{userId}/settings/autoForwarding
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_getAutoForwarding(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/autoForwarding', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the auto-forwarding setting for the specified account.  A verified
		 * forwarding address must be specified when auto-forwarding is enabled.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Put gmail/v1/users/{userId}/settings/autoForwarding
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_updateAutoForwarding(userId: string, requestBody: AutoForwarding): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/autoForwarding', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the delegates for the specified account.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Get gmail/v1/users/{userId}/settings/delegates
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_delegates_list(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/delegates', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a delegate with its verification status set directly to
		 * <code>accepted</code>, without sending any verification email.  The
		 * delegate user must be a member of the same G Suite organization as the
		 * delegator user.
		 * Gmail imposes limitations on the number of delegates and delegators each
		 * user in a G Suite organization can have. These limits depend on your
		 * organization, but in general each user can have up to 25 delegates and
		 * up to 10 delegators.
		 * Note that a delegate user must be referred to by their primary email
		 * address, and not an email alias.
		 * Also note that when a new delegate is created, there may be up to a one
		 * minute delay before the new delegate is available for use.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Post gmail/v1/users/{userId}/settings/delegates
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_delegates_create(userId: string, requestBody: Delegate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/delegates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified delegate (which can be of any verification status),
		 * and revokes any verification that may have been required for using it.
		 * Note that a delegate user must be referred to by their primary email
		 * address, and not an email alias.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Delete gmail/v1/users/{userId}/settings/delegates/{delegateEmail}
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} delegateEmail The email address of the user to be removed as a delegate.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_delegates_delete(userId: string, delegateEmail: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/delegates/' + (delegateEmail == null ? '' : encodeURIComponent(delegateEmail)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified delegate.
		 * Note that a delegate user must be referred to by their primary email
		 * address, and not an email alias.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Get gmail/v1/users/{userId}/settings/delegates/{delegateEmail}
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} delegateEmail The email address of the user whose delegate relationship is to be
		 * retrieved.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_delegates_get(userId: string, delegateEmail: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/delegates/' + (delegateEmail == null ? '' : encodeURIComponent(delegateEmail)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the message filters of a Gmail user.
		 * Get gmail/v1/users/{userId}/settings/filters
		 * @param {string} userId User's email address. The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_filters_list(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/filters', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a filter.
		 * Post gmail/v1/users/{userId}/settings/filters
		 * @param {string} userId User's email address. The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_filters_create(userId: string, requestBody: Filter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/filters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a filter.
		 * Delete gmail/v1/users/{userId}/settings/filters/{id}
		 * @param {string} userId User's email address. The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the filter to be deleted.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_filters_delete(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/filters/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a filter.
		 * Get gmail/v1/users/{userId}/settings/filters/{id}
		 * @param {string} userId User's email address. The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the filter to be fetched.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_filters_get(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/filters/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the forwarding addresses for the specified account.
		 * Get gmail/v1/users/{userId}/settings/forwardingAddresses
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_forwardingAddresses_list(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/forwardingAddresses', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a forwarding address.  If ownership verification is required, a
		 * message will be sent to the recipient and the resource's verification
		 * status will be set to <code>pending</code>; otherwise, the resource will be
		 * created with verification status set to <code>accepted</code>.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Post gmail/v1/users/{userId}/settings/forwardingAddresses
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_forwardingAddresses_create(userId: string, requestBody: ForwardingAddress): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/forwardingAddresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified forwarding address and revokes any verification that
		 * may have been required.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Delete gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} forwardingEmail The forwarding address to be deleted.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_forwardingAddresses_delete(userId: string, forwardingEmail: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/forwardingAddresses/' + (forwardingEmail == null ? '' : encodeURIComponent(forwardingEmail)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified forwarding address.
		 * Get gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} forwardingEmail The forwarding address to be retrieved.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_forwardingAddresses_get(userId: string, forwardingEmail: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/forwardingAddresses/' + (forwardingEmail == null ? '' : encodeURIComponent(forwardingEmail)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets IMAP settings.
		 * Get gmail/v1/users/{userId}/settings/imap
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_getImap(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/imap', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates IMAP settings.
		 * Put gmail/v1/users/{userId}/settings/imap
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_updateImap(userId: string, requestBody: ImapSettings): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/imap', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets language settings.
		 * Get gmail/v1/users/{userId}/settings/language
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_getLanguage(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/language', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates language settings.
		 * If successful, the return object contains the <code>displayLanguage</code>
		 * that was saved for the user, which may differ from the value passed into
		 * the request. This is because the requested <code>displayLanguage</code> may
		 * not be directly supported by Gmail but have a close variant that is, and so
		 * the variant may be chosen and saved instead.
		 * Put gmail/v1/users/{userId}/settings/language
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_updateLanguage(userId: string, requestBody: LanguageSettings): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/language', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets POP settings.
		 * Get gmail/v1/users/{userId}/settings/pop
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_getPop(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/pop', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates POP settings.
		 * Put gmail/v1/users/{userId}/settings/pop
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_updatePop(userId: string, requestBody: PopSettings): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/pop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the send-as aliases for the specified account.  The result includes
		 * the primary send-as address associated with the account as well as any
		 * custom "from" aliases.
		 * Get gmail/v1/users/{userId}/settings/sendAs
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_list(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a custom "from" send-as alias.  If an SMTP MSA is specified, Gmail
		 * will attempt to connect to the SMTP service to validate the configuration
		 * before creating the alias.  If ownership verification is required for the
		 * alias, a message will be sent to the email address and the resource's
		 * verification status will be set to <code>pending</code>; otherwise, the
		 * resource will be created with verification status set to
		 * <code>accepted</code>.  If a signature is provided, Gmail will sanitize the
		 * HTML before saving it with the alias.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Post gmail/v1/users/{userId}/settings/sendAs
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_create(userId: string, requestBody: SendAs): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified send-as alias.  Revokes any verification that may
		 * have been required for using it.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Delete gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The send-as alias to be deleted.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_delete(userId: string, sendAsEmail: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified send-as alias.  Fails with an HTTP 404 error if the
		 * specified address is not a member of the collection.
		 * Get gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The send-as alias to be retrieved.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_get(userId: string, sendAsEmail: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch the specified send-as alias.
		 * Patch gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The send-as alias to be updated.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_patch(userId: string, sendAsEmail: string, requestBody: SendAs): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a send-as alias.  If a signature is provided, Gmail will sanitize
		 * the HTML before saving it with the alias.
		 * Addresses other than the primary address for the account can only be
		 * updated by service account clients that have been delegated domain-wide
		 * authority.
		 * Put gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The send-as alias to be updated.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_update(userId: string, sendAsEmail: string, requestBody: SendAs): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists S/MIME configs for the specified send-as alias.
		 * Get gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The email address that appears in the "From:" header for mail sent using
		 * this alias.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_smimeInfo_list(userId: string, sendAsEmail: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)) + '/smimeInfo', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert (upload) the given S/MIME config for the specified send-as alias.
		 * Note that pkcs12 format is required for the key.
		 * Post gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The email address that appears in the "From:" header for mail sent using
		 * this alias.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_smimeInfo_insert(userId: string, sendAsEmail: string, requestBody: SmimeInfo): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)) + '/smimeInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified S/MIME config for the specified send-as alias.
		 * Delete gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The email address that appears in the "From:" header for mail sent using
		 * this alias.
		 * @param {string} id The immutable ID for the SmimeInfo.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_smimeInfo_delete(userId: string, sendAsEmail: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)) + '/smimeInfo/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified S/MIME config for the specified send-as alias.
		 * Get gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The email address that appears in the "From:" header for mail sent using
		 * this alias.
		 * @param {string} id The immutable ID for the SmimeInfo.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_smimeInfo_get(userId: string, sendAsEmail: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)) + '/smimeInfo/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the default S/MIME config for the specified send-as alias.
		 * Post gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The email address that appears in the "From:" header for mail sent using
		 * this alias.
		 * @param {string} id The immutable ID for the SmimeInfo.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_smimeInfo_setDefault(userId: string, sendAsEmail: string, id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)) + '/smimeInfo/' + (id == null ? '' : encodeURIComponent(id)) + '/setDefault', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends a verification email to the specified send-as alias address.
		 * The verification status must be <code>pending</code>.
		 * This method is only available to service account clients that have been
		 * delegated domain-wide authority.
		 * Post gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @param {string} sendAsEmail The send-as alias to be verified.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_sendAs_verify(userId: string, sendAsEmail: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/sendAs/' + (sendAsEmail == null ? '' : encodeURIComponent(sendAsEmail)) + '/verify', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets vacation responder settings.
		 * Get gmail/v1/users/{userId}/settings/vacation
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_getVacation(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/vacation', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates vacation responder settings.
		 * Put gmail/v1/users/{userId}/settings/vacation
		 * @param {string} userId User's email address.  The special value "me"
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_settings_updateVacation(userId: string, requestBody: VacationSettings): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/settings/vacation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop receiving push notifications for the given user mailbox.
		 * Post gmail/v1/users/{userId}/stop
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_stop(userId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/stop', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the threads in the user's mailbox.
		 * Get gmail/v1/users/{userId}/threads
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {boolean} includeSpamTrash Include threads from <code>SPAM</code> and <code>TRASH</code>
		 * in the results.
		 * @param {Array<string>} labelIds Only return threads with labels that match all of the specified label IDs.
		 * @param {number} maxResults Maximum number of threads to return.
		 * @param {string} pageToken Page token to retrieve a specific page of results in the list.
		 * @param {string} q Only return threads matching the specified query. Supports the same
		 * query format as the Gmail search box. For example,
		 * <code>"from:someuser@example.com rfc822msgid:<somemsgid@example.com>
		 * is:unread"</code>. Parameter cannot be used when accessing the api
		 * using the gmail.metadata scope.
		 * @return {void} Successful response
		 */
		Gmail_users_threads_list(userId: string, includeSpamTrash: boolean | null | undefined, labelIds: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, q: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/threads&includeSpamTrash=' + includeSpamTrash + '&' + labelIds?.map(z => `labelIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Immediately and permanently deletes the specified thread. This operation
		 * cannot be undone. Prefer <code>threads.trash</code> instead.
		 * Delete gmail/v1/users/{userId}/threads/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id ID of the Thread to delete.
		 * @return {void} Successful response
		 */
		Gmail_users_threads_delete(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/threads/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified thread.
		 * Get gmail/v1/users/{userId}/threads/{id}
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the thread to retrieve.
		 * @param {Gmail_users_threads_getFormat} format The format to return the messages in.
		 * @param {Array<string>} metadataHeaders When given and format is METADATA, only include headers specified.
		 * @return {void} Successful response
		 */
		Gmail_users_threads_get(userId: string, id: string, format: Gmail_users_threads_getFormat | null | undefined, metadataHeaders: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/threads/' + (id == null ? '' : encodeURIComponent(id)) + '&format=' + format + '&' + metadataHeaders?.map(z => `metadataHeaders=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies the labels applied to the thread. This applies to all messages
		 * in the thread.
		 * Post gmail/v1/users/{userId}/threads/{id}/modify
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the thread to modify.
		 * @return {void} Successful response
		 */
		Gmail_users_threads_modify(userId: string, id: string, requestBody: ModifyThreadRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/threads/' + (id == null ? '' : encodeURIComponent(id)) + '/modify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Moves the specified thread to the trash.
		 * Post gmail/v1/users/{userId}/threads/{id}/trash
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the thread to Trash.
		 * @return {void} Successful response
		 */
		Gmail_users_threads_trash(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/threads/' + (id == null ? '' : encodeURIComponent(id)) + '/trash', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the specified thread from the trash.
		 * Post gmail/v1/users/{userId}/threads/{id}/untrash
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @param {string} id The ID of the thread to remove from Trash.
		 * @return {void} Successful response
		 */
		Gmail_users_threads_untrash(userId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/threads/' + (id == null ? '' : encodeURIComponent(id)) + '/untrash', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Set up or update a push notification watch on the given user mailbox.
		 * Post gmail/v1/users/{userId}/watch
		 * @param {string} userId The user's email address. The special value <code>me</code>
		 * can be used to indicate the authenticated user.
		 * @return {void} Successful response
		 */
		Gmail_users_watch(userId: string, requestBody: WatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gmail/v1/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/watch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Gmail_users_drafts_getFormat { minimal = 0, full = 1, raw = 2, metadata = 3 }

	export enum Gmail_users_messages_insertInternalDateSource { receivedTime = 0, dateHeader = 1 }

	export enum Gmail_users_threads_getFormat { full = 0, metadata = 1, minimal = 2 }

}

