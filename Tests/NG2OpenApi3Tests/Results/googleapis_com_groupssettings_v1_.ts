import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** JSON template for Group resource */
	export interface Groups {

		/**
		 * Identifies whether members external to your organization can join the group. Possible values are:
		 * - true: G Suite users external to your organization can become members of this group.
		 * - false: Users not belonging to the organization are not allowed to become members of this group.
		 */
		allowExternalMembers?: string | null;

		/**
		 * Deprecated. Allows Google to contact administrator of the group.
		 * - true: Allow Google to contact managers of this group. Occasionally Google may send updates on the latest features, ask for input on new features, or ask for permission to highlight your group.
		 * - false: Google can not contact managers of this group.
		 */
		allowGoogleCommunication?: string | null;

		/**
		 * Allows posting from web. Possible values are:
		 * - true: Allows any member to post to the group forum.
		 * - false: Members only use Gmail to communicate with the group.
		 */
		allowWebPosting?: string | null;

		/**
		 * Allows the group to be archived only. Possible values are:
		 * - true: Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browseable and searchable.
		 * - If true, the whoCanPostMessage property is set to NONE_CAN_POST.
		 * - If reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.
		 * - false: The group is active and can receive messages.
		 * - When false, updating whoCanPostMessage to NONE_CAN_POST, results in an error.
		 */
		archiveOnly?: string | null;

		/** Set the content of custom footer text. The maximum number of characters is 1,000. */
		customFooterText?: string | null;

		/**
		 * An email address used when replying to a message if the replyTo property is set to REPLY_TO_CUSTOM. This address is defined by an account administrator.
		 * - When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds a custom email address used when replying to a message.
		 * - If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a text value or an error is returned.
		 */
		customReplyTo?: string | null;

		/**
		 * Specifies whether the group has a custom role that's included in one of the settings being merged. This field is read-only and update/patch requests to it are ignored. Possible values are:
		 * - true
		 * - false
		 */
		customRolesEnabledForSettingsToBeMerged?: string | null;

		/** When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Note: Requires sendMessageDenyNotification property to be true. */
		defaultMessageDenyNotificationText?: string | null;

		/** Default sender for members who can post messages as the group. Possible values are: - `DEFAULT_SELF`: By default messages will be sent from the user - `GROUP`: By default messages will be sent from the group */
		default_sender?: string | null;

		/** Description of the group. This property value may be an empty string if no group description has been entered. If entered, the maximum group description is no more than 300 characters. */
		description?: string | null;

		/**
		 * The group's email address. This property can be updated using the Directory API. Note: Only a group owner can change a group's email address. A group manager can't do this.
		 * When you change your group's address using the Directory API or the control panel, you are changing the address your subscribers use to send email and the web address people use to access your group. People can't reach your group by visiting the old address.
		 */
		email?: string | null;

		/**
		 * Specifies whether a collaborative inbox will remain turned on for the group. Possible values are:
		 * - true
		 * - false
		 */
		enableCollaborativeInbox?: string | null;

		/**
		 * Indicates if favorite replies should be displayed above other replies.
		 * - true: Favorite replies will be displayed above other replies.
		 * - false: Favorite replies will not be displayed above other replies.
		 */
		favoriteRepliesOnTop?: string | null;

		/**
		 * Whether to include custom footer. Possible values are:
		 * - true
		 * - false
		 */
		includeCustomFooter?: string | null;

		/**
		 * Enables the group to be included in the Global Address List. For more information, see the help center. Possible values are:
		 * - true: Group is included in the Global Address List.
		 * - false: Group is not included in the Global Address List.
		 */
		includeInGlobalAddressList?: string | null;

		/**
		 * Allows the Group contents to be archived. Possible values are:
		 * - true: Archive messages sent to the group.
		 * - false: Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.
		 */
		isArchived?: string | null;

		/** The type of the resource. It is always groupsSettings#groups. */
		kind?: string | null;

		/** Deprecated. The maximum size of a message is 25Mb. */
		maxMessageBytes?: number | null;

		/**
		 * Enables members to post messages as the group. Possible values are:
		 * - true: Group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Note: When true, any message moderation settings on individual users or new members do not apply to posts made on behalf of the group.
		 * - false: Members can not post in behalf of the group's email address.
		 */
		membersCanPostAsTheGroup?: string | null;

		/** Deprecated. The default message display font always has a value of "DEFAULT_FONT". */
		messageDisplayFont?: string | null;

		/**
		 * Moderation level of incoming messages. Possible values are:
		 * - MODERATE_ALL_MESSAGES: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group.
		 * - MODERATE_NON_MEMBERS: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
		 * - MODERATE_NEW_MEMBERS: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
		 * - MODERATE_NONE: No moderator approval is required. Messages are delivered directly to the group. Note: When the whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.
		 * When memberCanPostAsTheGroup is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.
		 */
		messageModerationLevel?: string | null;

		/** Name of the group, which has a maximum size of 75 characters. */
		name?: string | null;

		/** The primary language for group. For a group's primary language use the language tags from the G Suite languages found at G Suite Email Settings API Email Language Tags. */
		primaryLanguage?: string | null;

		/**
		 * Specifies who receives the default reply. Possible values are:
		 * - REPLY_TO_CUSTOM: For replies to messages, use the group's custom email address.
		 * When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds the custom email address used when replying to a message. If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a value. Otherwise an error is returned.
		 * - REPLY_TO_SENDER: The reply sent to author of message.
		 * - REPLY_TO_LIST: This reply message is sent to the group.
		 * - REPLY_TO_OWNER: The reply is sent to the owner(s) of the group. This does not include the group's managers.
		 * - REPLY_TO_IGNORE: Group users individually decide where the message reply is sent.
		 * - REPLY_TO_MANAGERS: This reply message is sent to the group's managers, which includes all managers and the group owner.
		 */
		replyTo?: string | null;

		/**
		 * Allows a member to be notified if the member's message to the group is denied by the group owner. Possible values are:
		 * - true: When a message is rejected, send the deny message notification to the message author.
		 * The defaultMessageDenyNotificationText property is dependent on the sendMessageDenyNotification property being true.
		 * - false: When a message is rejected, no notification is sent.
		 */
		sendMessageDenyNotification?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanDiscoverGroup setting. Allows the group to be visible in the Groups Directory. Possible values are:
		 * - true: All groups in the account are listed in the Groups directory.
		 * - false: All groups in the account are not listed in the directory.
		 */
		showInGroupDirectory?: string | null;

		/**
		 * Specifies moderation levels for messages detected as spam. Possible values are:
		 * - ALLOW: Post the message to the group.
		 * - MODERATE: Send the message to the moderation queue. This is the default.
		 * - SILENTLY_MODERATE: Send the message to the moderation queue, but do not send notification to moderators.
		 * - REJECT: Immediately reject the message.
		 */
		spamModerationLevel?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to add members. Possible values are:
		 * - ALL_MEMBERS_CAN_ADD: Managers and members can directly add new members.
		 * - ALL_MANAGERS_CAN_ADD: Only managers can directly add new members. this includes the group's owner.
		 * - ALL_OWNERS_CAN_ADD: Only owners can directly add new members.
		 * - NONE_CAN_ADD: No one can directly add new members.
		 */
		whoCanAdd?: string | null;

		/** Deprecated. This functionality is no longer supported in the Google Groups UI. The value is always "NONE". */
		whoCanAddReferences?: string | null;

		/**
		 * Specifies who can approve members who ask to join groups. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:
		 * - ALL_MEMBERS_CAN_APPROVE
		 * - ALL_MANAGERS_CAN_APPROVE
		 * - ALL_OWNERS_CAN_APPROVE
		 * - NONE_CAN_APPROVE
		 */
		whoCanApproveMembers?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can approve pending messages in the moderation queue. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanApproveMessages?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to assign topics in a forum to another user. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanAssignTopics?: string | null;

		/**
		 * Specifies who can moderate metadata. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanAssistContent?: string | null;

		/**
		 * Specifies who can deny membership to users. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanBanUsers?: string | null;

		/**
		 * Permission to contact owner of the group via web UI. Possible values are:
		 * - ALL_IN_DOMAIN_CAN_CONTACT
		 * - ALL_MANAGERS_CAN_CONTACT
		 * - ALL_MEMBERS_CAN_CONTACT
		 * - ANYONE_CAN_CONTACT
		 * - ALL_OWNERS_CAN_CONTACT
		 */
		whoCanContactOwner?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete replies to topics. (Authors can always delete their own posts). Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanDeleteAnyPost?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete topics. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanDeleteTopics?: string | null;

		/**
		 * Specifies the set of users for whom this group is discoverable. Possible values are:
		 * - ANYONE_CAN_DISCOVER
		 * - ALL_IN_DOMAIN_CAN_DISCOVER
		 * - ALL_MEMBERS_CAN_DISCOVER
		 */
		whoCanDiscoverGroup?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to enter free form tags for topics in a forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanEnterFreeFormTags?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can hide posts by reporting them as abuse. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanHideAbuse?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to invite new members. Possible values are:
		 * - ALL_MEMBERS_CAN_INVITE: Managers and members can invite a new member candidate.
		 * - ALL_MANAGERS_CAN_INVITE: Only managers can invite a new member. This includes the group's owner.
		 * - ALL_OWNERS_CAN_INVITE: Only owners can invite a new member.
		 * - NONE_CAN_INVITE: No one can invite a new member candidate.
		 */
		whoCanInvite?: string | null;

		/**
		 * Permission to join group. Possible values are:
		 * - ANYONE_CAN_JOIN: Anyone in the account domain can join. This includes accounts with multiple domains.
		 * - ALL_IN_DOMAIN_CAN_JOIN: Any Internet user who is outside your domain can access your Google Groups service and view the list of groups in your Groups directory. Warning: Group owners can add external addresses, outside of the domain to their groups. They can also allow people outside your domain to join their groups. If you later disable this option, any external addresses already added to users' groups remain in those groups.
		 * - INVITED_CAN_JOIN: Candidates for membership can be invited to join.
		 * - CAN_REQUEST_TO_JOIN: Non members can request an invitation to join.
		 */
		whoCanJoin?: string | null;

		/**
		 * Permission to leave the group. Possible values are:
		 * - ALL_MANAGERS_CAN_LEAVE
		 * - ALL_MEMBERS_CAN_LEAVE
		 * - NONE_CAN_LEAVE
		 */
		whoCanLeaveGroup?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can prevent users from posting replies to topics. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanLockTopics?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can make topics appear at the top of the topic list. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMakeTopicsSticky?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as a duplicate of another topic. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMarkDuplicate?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark any other user's post as a favorite reply. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMarkFavoriteReplyOnAnyTopic?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a post for a topic they started as a favorite reply. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMarkFavoriteReplyOnOwnTopic?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as not needing a response. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMarkNoResponseNeeded?: string | null;

		/**
		 * Specifies who can moderate content. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanModerateContent?: string | null;

		/**
		 * Specifies who can manage members. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanModerateMembers?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateMembers setting. Specifies who can change group members' roles. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanModifyMembers?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to change tags and categories. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanModifyTagsAndCategories?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics into the group or forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMoveTopicsIn?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics out of the group or forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMoveTopicsOut?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can post announcements, a special topic type. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanPostAnnouncements?: string | null;

		/**
		 * Permissions to post messages. Possible values are:
		 * - NONE_CAN_POST: The group is disabled and archived. No one can post a message to this group.
		 * - When archiveOnly is false, updating whoCanPostMessage to NONE_CAN_POST, results in an error.
		 * - If archiveOnly is reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.
		 * - ALL_MANAGERS_CAN_POST: Managers, including group owners, can post messages.
		 * - ALL_MEMBERS_CAN_POST: Any group member can post a message.
		 * - ALL_OWNERS_CAN_POST: Only group owners can post a message.
		 * - ALL_IN_DOMAIN_CAN_POST: Anyone in the account can post a message.
		 * - ANYONE_CAN_POST: Any Internet user who outside your account can access your Google Groups service and post a message. Note: When whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.
		 */
		whoCanPostMessage?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to take topics in a forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanTakeTopics?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unassign any topic in a forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanUnassignTopic?: string | null;

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unmark any post from a favorite reply. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanUnmarkFavoriteReplyOnAnyTopic?: string | null;

		/**
		 * Permissions to view group messages. Possible values are:
		 * - ANYONE_CAN_VIEW: Any Internet user can view the group's messages.
		 * - ALL_IN_DOMAIN_CAN_VIEW: Anyone in your account can view this group's messages.
		 * - ALL_MEMBERS_CAN_VIEW: All group members can view the group's messages.
		 * - ALL_MANAGERS_CAN_VIEW: Any group manager can view this group's messages.
		 */
		whoCanViewGroup?: string | null;

		/**
		 * Permissions to view membership. Possible values are:
		 * - ALL_IN_DOMAIN_CAN_VIEW: Anyone in the account can view the group members list.
		 * If a group already has external members, those members can still send email to this group.
		 * - ALL_MEMBERS_CAN_VIEW: The group members can view the group members list.
		 * - ALL_MANAGERS_CAN_VIEW: The group managers can view group members list.
		 */
		whoCanViewMembership?: string | null;
	}

	/** JSON template for Group resource */
	export interface GroupsFormProperties {

		/**
		 * Identifies whether members external to your organization can join the group. Possible values are:
		 * - true: G Suite users external to your organization can become members of this group.
		 * - false: Users not belonging to the organization are not allowed to become members of this group.
		 */
		allowExternalMembers: FormControl<string | null | undefined>,

		/**
		 * Deprecated. Allows Google to contact administrator of the group.
		 * - true: Allow Google to contact managers of this group. Occasionally Google may send updates on the latest features, ask for input on new features, or ask for permission to highlight your group.
		 * - false: Google can not contact managers of this group.
		 */
		allowGoogleCommunication: FormControl<string | null | undefined>,

		/**
		 * Allows posting from web. Possible values are:
		 * - true: Allows any member to post to the group forum.
		 * - false: Members only use Gmail to communicate with the group.
		 */
		allowWebPosting: FormControl<string | null | undefined>,

		/**
		 * Allows the group to be archived only. Possible values are:
		 * - true: Group is archived and the group is inactive. New messages to this group are rejected. The older archived messages are browseable and searchable.
		 * - If true, the whoCanPostMessage property is set to NONE_CAN_POST.
		 * - If reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.
		 * - false: The group is active and can receive messages.
		 * - When false, updating whoCanPostMessage to NONE_CAN_POST, results in an error.
		 */
		archiveOnly: FormControl<string | null | undefined>,

		/** Set the content of custom footer text. The maximum number of characters is 1,000. */
		customFooterText: FormControl<string | null | undefined>,

		/**
		 * An email address used when replying to a message if the replyTo property is set to REPLY_TO_CUSTOM. This address is defined by an account administrator.
		 * - When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds a custom email address used when replying to a message.
		 * - If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a text value or an error is returned.
		 */
		customReplyTo: FormControl<string | null | undefined>,

		/**
		 * Specifies whether the group has a custom role that's included in one of the settings being merged. This field is read-only and update/patch requests to it are ignored. Possible values are:
		 * - true
		 * - false
		 */
		customRolesEnabledForSettingsToBeMerged: FormControl<string | null | undefined>,

		/** When a message is rejected, this is text for the rejection notification sent to the message's author. By default, this property is empty and has no value in the API's response body. The maximum notification text size is 10,000 characters. Note: Requires sendMessageDenyNotification property to be true. */
		defaultMessageDenyNotificationText: FormControl<string | null | undefined>,

		/** Default sender for members who can post messages as the group. Possible values are: - `DEFAULT_SELF`: By default messages will be sent from the user - `GROUP`: By default messages will be sent from the group */
		default_sender: FormControl<string | null | undefined>,

		/** Description of the group. This property value may be an empty string if no group description has been entered. If entered, the maximum group description is no more than 300 characters. */
		description: FormControl<string | null | undefined>,

		/**
		 * The group's email address. This property can be updated using the Directory API. Note: Only a group owner can change a group's email address. A group manager can't do this.
		 * When you change your group's address using the Directory API or the control panel, you are changing the address your subscribers use to send email and the web address people use to access your group. People can't reach your group by visiting the old address.
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Specifies whether a collaborative inbox will remain turned on for the group. Possible values are:
		 * - true
		 * - false
		 */
		enableCollaborativeInbox: FormControl<string | null | undefined>,

		/**
		 * Indicates if favorite replies should be displayed above other replies.
		 * - true: Favorite replies will be displayed above other replies.
		 * - false: Favorite replies will not be displayed above other replies.
		 */
		favoriteRepliesOnTop: FormControl<string | null | undefined>,

		/**
		 * Whether to include custom footer. Possible values are:
		 * - true
		 * - false
		 */
		includeCustomFooter: FormControl<string | null | undefined>,

		/**
		 * Enables the group to be included in the Global Address List. For more information, see the help center. Possible values are:
		 * - true: Group is included in the Global Address List.
		 * - false: Group is not included in the Global Address List.
		 */
		includeInGlobalAddressList: FormControl<string | null | undefined>,

		/**
		 * Allows the Group contents to be archived. Possible values are:
		 * - true: Archive messages sent to the group.
		 * - false: Do not keep an archive of messages sent to this group. If false, previously archived messages remain in the archive.
		 */
		isArchived: FormControl<string | null | undefined>,

		/** The type of the resource. It is always groupsSettings#groups. */
		kind: FormControl<string | null | undefined>,

		/** Deprecated. The maximum size of a message is 25Mb. */
		maxMessageBytes: FormControl<number | null | undefined>,

		/**
		 * Enables members to post messages as the group. Possible values are:
		 * - true: Group member can post messages using the group's email address instead of their own email address. Message appear to originate from the group itself. Note: When true, any message moderation settings on individual users or new members do not apply to posts made on behalf of the group.
		 * - false: Members can not post in behalf of the group's email address.
		 */
		membersCanPostAsTheGroup: FormControl<string | null | undefined>,

		/** Deprecated. The default message display font always has a value of "DEFAULT_FONT". */
		messageDisplayFont: FormControl<string | null | undefined>,

		/**
		 * Moderation level of incoming messages. Possible values are:
		 * - MODERATE_ALL_MESSAGES: All messages are sent to the group owner's email address for approval. If approved, the message is sent to the group.
		 * - MODERATE_NON_MEMBERS: All messages from non group members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
		 * - MODERATE_NEW_MEMBERS: All messages from new members are sent to the group owner's email address for approval. If approved, the message is sent to the group.
		 * - MODERATE_NONE: No moderator approval is required. Messages are delivered directly to the group. Note: When the whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.
		 * When memberCanPostAsTheGroup is true, any message moderation settings on individual users or new members will not apply to posts made on behalf of the group.
		 */
		messageModerationLevel: FormControl<string | null | undefined>,

		/** Name of the group, which has a maximum size of 75 characters. */
		name: FormControl<string | null | undefined>,

		/** The primary language for group. For a group's primary language use the language tags from the G Suite languages found at G Suite Email Settings API Email Language Tags. */
		primaryLanguage: FormControl<string | null | undefined>,

		/**
		 * Specifies who receives the default reply. Possible values are:
		 * - REPLY_TO_CUSTOM: For replies to messages, use the group's custom email address.
		 * When the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property holds the custom email address used when replying to a message. If the group's ReplyTo property is set to REPLY_TO_CUSTOM, the customReplyTo property must have a value. Otherwise an error is returned.
		 * - REPLY_TO_SENDER: The reply sent to author of message.
		 * - REPLY_TO_LIST: This reply message is sent to the group.
		 * - REPLY_TO_OWNER: The reply is sent to the owner(s) of the group. This does not include the group's managers.
		 * - REPLY_TO_IGNORE: Group users individually decide where the message reply is sent.
		 * - REPLY_TO_MANAGERS: This reply message is sent to the group's managers, which includes all managers and the group owner.
		 */
		replyTo: FormControl<string | null | undefined>,

		/**
		 * Allows a member to be notified if the member's message to the group is denied by the group owner. Possible values are:
		 * - true: When a message is rejected, send the deny message notification to the message author.
		 * The defaultMessageDenyNotificationText property is dependent on the sendMessageDenyNotification property being true.
		 * - false: When a message is rejected, no notification is sent.
		 */
		sendMessageDenyNotification: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanDiscoverGroup setting. Allows the group to be visible in the Groups Directory. Possible values are:
		 * - true: All groups in the account are listed in the Groups directory.
		 * - false: All groups in the account are not listed in the directory.
		 */
		showInGroupDirectory: FormControl<string | null | undefined>,

		/**
		 * Specifies moderation levels for messages detected as spam. Possible values are:
		 * - ALLOW: Post the message to the group.
		 * - MODERATE: Send the message to the moderation queue. This is the default.
		 * - SILENTLY_MODERATE: Send the message to the moderation queue, but do not send notification to moderators.
		 * - REJECT: Immediately reject the message.
		 */
		spamModerationLevel: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to add members. Possible values are:
		 * - ALL_MEMBERS_CAN_ADD: Managers and members can directly add new members.
		 * - ALL_MANAGERS_CAN_ADD: Only managers can directly add new members. this includes the group's owner.
		 * - ALL_OWNERS_CAN_ADD: Only owners can directly add new members.
		 * - NONE_CAN_ADD: No one can directly add new members.
		 */
		whoCanAdd: FormControl<string | null | undefined>,

		/** Deprecated. This functionality is no longer supported in the Google Groups UI. The value is always "NONE". */
		whoCanAddReferences: FormControl<string | null | undefined>,

		/**
		 * Specifies who can approve members who ask to join groups. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:
		 * - ALL_MEMBERS_CAN_APPROVE
		 * - ALL_MANAGERS_CAN_APPROVE
		 * - ALL_OWNERS_CAN_APPROVE
		 * - NONE_CAN_APPROVE
		 */
		whoCanApproveMembers: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can approve pending messages in the moderation queue. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanApproveMessages: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to assign topics in a forum to another user. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanAssignTopics: FormControl<string | null | undefined>,

		/**
		 * Specifies who can moderate metadata. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanAssistContent: FormControl<string | null | undefined>,

		/**
		 * Specifies who can deny membership to users. This permission will be deprecated once it is merged into the new whoCanModerateMembers setting. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanBanUsers: FormControl<string | null | undefined>,

		/**
		 * Permission to contact owner of the group via web UI. Possible values are:
		 * - ALL_IN_DOMAIN_CAN_CONTACT
		 * - ALL_MANAGERS_CAN_CONTACT
		 * - ALL_MEMBERS_CAN_CONTACT
		 * - ANYONE_CAN_CONTACT
		 * - ALL_OWNERS_CAN_CONTACT
		 */
		whoCanContactOwner: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete replies to topics. (Authors can always delete their own posts). Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanDeleteAnyPost: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can delete topics. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanDeleteTopics: FormControl<string | null | undefined>,

		/**
		 * Specifies the set of users for whom this group is discoverable. Possible values are:
		 * - ANYONE_CAN_DISCOVER
		 * - ALL_IN_DOMAIN_CAN_DISCOVER
		 * - ALL_MEMBERS_CAN_DISCOVER
		 */
		whoCanDiscoverGroup: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to enter free form tags for topics in a forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanEnterFreeFormTags: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can hide posts by reporting them as abuse. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanHideAbuse: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateMembers setting. Permissions to invite new members. Possible values are:
		 * - ALL_MEMBERS_CAN_INVITE: Managers and members can invite a new member candidate.
		 * - ALL_MANAGERS_CAN_INVITE: Only managers can invite a new member. This includes the group's owner.
		 * - ALL_OWNERS_CAN_INVITE: Only owners can invite a new member.
		 * - NONE_CAN_INVITE: No one can invite a new member candidate.
		 */
		whoCanInvite: FormControl<string | null | undefined>,

		/**
		 * Permission to join group. Possible values are:
		 * - ANYONE_CAN_JOIN: Anyone in the account domain can join. This includes accounts with multiple domains.
		 * - ALL_IN_DOMAIN_CAN_JOIN: Any Internet user who is outside your domain can access your Google Groups service and view the list of groups in your Groups directory. Warning: Group owners can add external addresses, outside of the domain to their groups. They can also allow people outside your domain to join their groups. If you later disable this option, any external addresses already added to users' groups remain in those groups.
		 * - INVITED_CAN_JOIN: Candidates for membership can be invited to join.
		 * - CAN_REQUEST_TO_JOIN: Non members can request an invitation to join.
		 */
		whoCanJoin: FormControl<string | null | undefined>,

		/**
		 * Permission to leave the group. Possible values are:
		 * - ALL_MANAGERS_CAN_LEAVE
		 * - ALL_MEMBERS_CAN_LEAVE
		 * - NONE_CAN_LEAVE
		 */
		whoCanLeaveGroup: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can prevent users from posting replies to topics. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanLockTopics: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can make topics appear at the top of the topic list. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMakeTopicsSticky: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as a duplicate of another topic. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMarkDuplicate: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark any other user's post as a favorite reply. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMarkFavoriteReplyOnAnyTopic: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a post for a topic they started as a favorite reply. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMarkFavoriteReplyOnOwnTopic: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to mark a topic as not needing a response. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMarkNoResponseNeeded: FormControl<string | null | undefined>,

		/**
		 * Specifies who can moderate content. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanModerateContent: FormControl<string | null | undefined>,

		/**
		 * Specifies who can manage members. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanModerateMembers: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateMembers setting. Specifies who can change group members' roles. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanModifyMembers: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to change tags and categories. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanModifyTagsAndCategories: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics into the group or forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMoveTopicsIn: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can move topics out of the group or forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanMoveTopicsOut: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanModerateContent setting. Specifies who can post announcements, a special topic type. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanPostAnnouncements: FormControl<string | null | undefined>,

		/**
		 * Permissions to post messages. Possible values are:
		 * - NONE_CAN_POST: The group is disabled and archived. No one can post a message to this group.
		 * - When archiveOnly is false, updating whoCanPostMessage to NONE_CAN_POST, results in an error.
		 * - If archiveOnly is reverted from true to false, whoCanPostMessages is set to ALL_MANAGERS_CAN_POST.
		 * - ALL_MANAGERS_CAN_POST: Managers, including group owners, can post messages.
		 * - ALL_MEMBERS_CAN_POST: Any group member can post a message.
		 * - ALL_OWNERS_CAN_POST: Only group owners can post a message.
		 * - ALL_IN_DOMAIN_CAN_POST: Anyone in the account can post a message.
		 * - ANYONE_CAN_POST: Any Internet user who outside your account can access your Google Groups service and post a message. Note: When whoCanPostMessage is set to ANYONE_CAN_POST, we recommend the messageModerationLevel be set to MODERATE_NON_MEMBERS to protect the group from possible spam.
		 */
		whoCanPostMessage: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to take topics in a forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanTakeTopics: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unassign any topic in a forum. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanUnassignTopic: FormControl<string | null | undefined>,

		/**
		 * Deprecated. This is merged into the new whoCanAssistContent setting. Permission to unmark any post from a favorite reply. Possible values are:
		 * - ALL_MEMBERS
		 * - OWNERS_AND_MANAGERS
		 * - MANAGERS_ONLY
		 * - OWNERS_ONLY
		 * - NONE
		 */
		whoCanUnmarkFavoriteReplyOnAnyTopic: FormControl<string | null | undefined>,

		/**
		 * Permissions to view group messages. Possible values are:
		 * - ANYONE_CAN_VIEW: Any Internet user can view the group's messages.
		 * - ALL_IN_DOMAIN_CAN_VIEW: Anyone in your account can view this group's messages.
		 * - ALL_MEMBERS_CAN_VIEW: All group members can view the group's messages.
		 * - ALL_MANAGERS_CAN_VIEW: Any group manager can view this group's messages.
		 */
		whoCanViewGroup: FormControl<string | null | undefined>,

		/**
		 * Permissions to view membership. Possible values are:
		 * - ALL_IN_DOMAIN_CAN_VIEW: Anyone in the account can view the group members list.
		 * If a group already has external members, those members can still send email to this group.
		 * - ALL_MEMBERS_CAN_VIEW: The group members can view the group members list.
		 * - ALL_MANAGERS_CAN_VIEW: The group managers can view group members list.
		 */
		whoCanViewMembership: FormControl<string | null | undefined>,
	}
	export function CreateGroupsFormGroup() {
		return new FormGroup<GroupsFormProperties>({
			allowExternalMembers: new FormControl<string | null | undefined>(undefined),
			allowGoogleCommunication: new FormControl<string | null | undefined>(undefined),
			allowWebPosting: new FormControl<string | null | undefined>(undefined),
			archiveOnly: new FormControl<string | null | undefined>(undefined),
			customFooterText: new FormControl<string | null | undefined>(undefined),
			customReplyTo: new FormControl<string | null | undefined>(undefined),
			customRolesEnabledForSettingsToBeMerged: new FormControl<string | null | undefined>(undefined),
			defaultMessageDenyNotificationText: new FormControl<string | null | undefined>(undefined),
			default_sender: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			enableCollaborativeInbox: new FormControl<string | null | undefined>(undefined),
			favoriteRepliesOnTop: new FormControl<string | null | undefined>(undefined),
			includeCustomFooter: new FormControl<string | null | undefined>(undefined),
			includeInGlobalAddressList: new FormControl<string | null | undefined>(undefined),
			isArchived: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maxMessageBytes: new FormControl<number | null | undefined>(undefined),
			membersCanPostAsTheGroup: new FormControl<string | null | undefined>(undefined),
			messageDisplayFont: new FormControl<string | null | undefined>(undefined),
			messageModerationLevel: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryLanguage: new FormControl<string | null | undefined>(undefined),
			replyTo: new FormControl<string | null | undefined>(undefined),
			sendMessageDenyNotification: new FormControl<string | null | undefined>(undefined),
			showInGroupDirectory: new FormControl<string | null | undefined>(undefined),
			spamModerationLevel: new FormControl<string | null | undefined>(undefined),
			whoCanAdd: new FormControl<string | null | undefined>(undefined),
			whoCanAddReferences: new FormControl<string | null | undefined>(undefined),
			whoCanApproveMembers: new FormControl<string | null | undefined>(undefined),
			whoCanApproveMessages: new FormControl<string | null | undefined>(undefined),
			whoCanAssignTopics: new FormControl<string | null | undefined>(undefined),
			whoCanAssistContent: new FormControl<string | null | undefined>(undefined),
			whoCanBanUsers: new FormControl<string | null | undefined>(undefined),
			whoCanContactOwner: new FormControl<string | null | undefined>(undefined),
			whoCanDeleteAnyPost: new FormControl<string | null | undefined>(undefined),
			whoCanDeleteTopics: new FormControl<string | null | undefined>(undefined),
			whoCanDiscoverGroup: new FormControl<string | null | undefined>(undefined),
			whoCanEnterFreeFormTags: new FormControl<string | null | undefined>(undefined),
			whoCanHideAbuse: new FormControl<string | null | undefined>(undefined),
			whoCanInvite: new FormControl<string | null | undefined>(undefined),
			whoCanJoin: new FormControl<string | null | undefined>(undefined),
			whoCanLeaveGroup: new FormControl<string | null | undefined>(undefined),
			whoCanLockTopics: new FormControl<string | null | undefined>(undefined),
			whoCanMakeTopicsSticky: new FormControl<string | null | undefined>(undefined),
			whoCanMarkDuplicate: new FormControl<string | null | undefined>(undefined),
			whoCanMarkFavoriteReplyOnAnyTopic: new FormControl<string | null | undefined>(undefined),
			whoCanMarkFavoriteReplyOnOwnTopic: new FormControl<string | null | undefined>(undefined),
			whoCanMarkNoResponseNeeded: new FormControl<string | null | undefined>(undefined),
			whoCanModerateContent: new FormControl<string | null | undefined>(undefined),
			whoCanModerateMembers: new FormControl<string | null | undefined>(undefined),
			whoCanModifyMembers: new FormControl<string | null | undefined>(undefined),
			whoCanModifyTagsAndCategories: new FormControl<string | null | undefined>(undefined),
			whoCanMoveTopicsIn: new FormControl<string | null | undefined>(undefined),
			whoCanMoveTopicsOut: new FormControl<string | null | undefined>(undefined),
			whoCanPostAnnouncements: new FormControl<string | null | undefined>(undefined),
			whoCanPostMessage: new FormControl<string | null | undefined>(undefined),
			whoCanTakeTopics: new FormControl<string | null | undefined>(undefined),
			whoCanUnassignTopic: new FormControl<string | null | undefined>(undefined),
			whoCanUnmarkFavoriteReplyOnAnyTopic: new FormControl<string | null | undefined>(undefined),
			whoCanViewGroup: new FormControl<string | null | undefined>(undefined),
			whoCanViewMembership: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets one resource by id.
		 * Get {groupUniqueId}
		 * @param {string} groupUniqueId The group's email address.
		 * @return {Groups} Successful response
		 */
		GroupsSettings_groups_get(groupUniqueId: string): Observable<Groups> {
			return this.http.get<Groups>(this.baseUri + (groupUniqueId == null ? '' : encodeURIComponent(groupUniqueId)) + '', {});
		}

		/**
		 * Updates an existing resource. This method supports patch semantics.
		 * Patch {groupUniqueId}
		 * @param {string} groupUniqueId The group's email address.
		 * @return {Groups} Successful response
		 */
		GroupsSettings_groups_patch(groupUniqueId: string, requestBody: Groups): Observable<Groups> {
			return this.http.patch<Groups>(this.baseUri + (groupUniqueId == null ? '' : encodeURIComponent(groupUniqueId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing resource.
		 * Put {groupUniqueId}
		 * @param {string} groupUniqueId The group's email address.
		 * @return {Groups} Successful response
		 */
		GroupsSettings_groups_update(groupUniqueId: string, requestBody: Groups): Observable<Groups> {
			return this.http.put<Groups>(this.baseUri + (groupUniqueId == null ? '' : encodeURIComponent(groupUniqueId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

