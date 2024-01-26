import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Actor represents an entity that performed an action. For example, an actor could be a user who posted a comment on a support case, a user who uploaded an attachment, or a service account that created a support case. */
	export interface Actor {

		/** The name to display for the actor. If not provided, it is inferred from credentials supplied during case creation. When an email is provided, a display name must also be provided. This will be obfuscated if the user is a Google Support agent. */
		displayName?: string | null;

		/** The email address of the actor. If not provided, it is inferred from the credentials supplied during case creation. When a name is provided, an email must also be provided. If the user is a Google Support agent, this is obfuscated. This field is deprecated. Use **username** field instead. */
		email?: string | null;

		/** Output only. Whether the actor is a Google support actor. */
		googleSupport?: boolean | null;

		/** Output only. The username of the actor. It may look like an email or other format provided by the identity provider. If not provided, it is inferred from the credentials supplied. When a name is provided, a username must also be provided. If the user is a Google Support agent, this will not be set. */
		username?: string | null;
	}

	/** An Actor represents an entity that performed an action. For example, an actor could be a user who posted a comment on a support case, a user who uploaded an attachment, or a service account that created a support case. */
	export interface ActorFormProperties {

		/** The name to display for the actor. If not provided, it is inferred from credentials supplied during case creation. When an email is provided, a display name must also be provided. This will be obfuscated if the user is a Google Support agent. */
		displayName: FormControl<string | null | undefined>,

		/** The email address of the actor. If not provided, it is inferred from the credentials supplied during case creation. When a name is provided, an email must also be provided. If the user is a Google Support agent, this is obfuscated. This field is deprecated. Use **username** field instead. */
		email: FormControl<string | null | undefined>,

		/** Output only. Whether the actor is a Google support actor. */
		googleSupport: FormControl<boolean | null | undefined>,

		/** Output only. The username of the actor. It may look like an email or other format provided by the identity provider. If not provided, it is inferred from the credentials supplied. When a name is provided, a username must also be provided. If the user is a Google Support agent, this will not be set. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateActorFormGroup() {
		return new FormGroup<ActorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			googleSupport: new FormControl<boolean | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Attachment contains metadata about a file that was uploaded to a case - it is NOT a file itself. That being said, the name of an Attachment object can be used to download its accompanying file through the `media.download` endpoint. While attachments can be uploaded in the console at the same time as a comment, they're associated on a "case" level, not a "comment" level. */
	export interface Attachment {

		/** Output only. The time at which the attachment was created. */
		createTime?: string | null;

		/** An Actor represents an entity that performed an action. For example, an actor could be a user who posted a comment on a support case, a user who uploaded an attachment, or a service account that created a support case. */
		creator?: Actor;

		/** The filename of the attachment (e.g. `"graph.jpg"`). */
		filename?: string | null;

		/** Output only. The MIME type of the attachment (e.g. text/plain). */
		mimeType?: string | null;

		/** Output only. The resource name of the attachment. */
		name?: string | null;

		/** Output only. The size of the attachment in bytes. */
		sizeBytes?: string | null;
	}

	/** An Attachment contains metadata about a file that was uploaded to a case - it is NOT a file itself. That being said, the name of an Attachment object can be used to download its accompanying file through the `media.download` endpoint. While attachments can be uploaded in the console at the same time as a comment, they're associated on a "case" level, not a "comment" level. */
	export interface AttachmentFormProperties {

		/** Output only. The time at which the attachment was created. */
		createTime: FormControl<string | null | undefined>,

		/** The filename of the attachment (e.g. `"graph.jpg"`). */
		filename: FormControl<string | null | undefined>,

		/** Output only. The MIME type of the attachment (e.g. text/plain). */
		mimeType: FormControl<string | null | undefined>,

		/** Output only. The resource name of the attachment. */
		name: FormControl<string | null | undefined>,

		/** Output only. The size of the attachment in bytes. */
		sizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface Blobstore2Info {

		/** # gdata.* are outside protos with mising documentation */
		blobGeneration?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		blobId?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		downloadReadHandle?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		readToken?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		uploadMetadataContainer?: string | null;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface Blobstore2InfoFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		blobGeneration: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		blobId: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		downloadReadHandle: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		readToken: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		uploadMetadataContainer: FormControl<string | null | undefined>,
	}
	export function CreateBlobstore2InfoFormGroup() {
		return new FormGroup<Blobstore2InfoFormProperties>({
			blobGeneration: new FormControl<string | null | undefined>(undefined),
			blobId: new FormControl<string | null | undefined>(undefined),
			downloadReadHandle: new FormControl<string | null | undefined>(undefined),
			readToken: new FormControl<string | null | undefined>(undefined),
			uploadMetadataContainer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Case is an object that contains the details of a support case. It contains fields for the time it was created, its priority, its classification, and more. Cases can also have comments and attachments that get added over time. A case is parented by a Google Cloud organization or project. Organizations are identified by a number, so the name of a case parented by an organization would look like this: ``` organizations/123/cases/456 ``` Projects have two unique identifiers, an ID and a number, and they look like this: ``` projects/abc/cases/456 ``` ``` projects/123/cases/456 ``` You can use either of them when calling the API. To learn more about project identifiers, see [AIP-2510](https://google.aip.dev/cloud/2510). */
	export interface Case {

		/** A Case Classification represents the topic that a case is about. It's very important to use accurate classifications, because they're used to route your cases to specialists who can help you. A classification always has an ID that is its unique identifier. A valid ID is required when creating a case. */
		classification?: CaseClassification;

		/** A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs. */
		contactEmail?: string | null;

		/** Output only. The time this case was created. */
		createTime?: string | null;

		/** An Actor represents an entity that performed an action. For example, an actor could be a user who posted a comment on a support case, a user who uploaded an attachment, or a service account that created a support case. */
		creator?: Actor;

		/** A broad description of the issue. */
		description?: string | null;

		/** The short summary of the issue reported in this case. */
		displayName?: string | null;

		/** Whether the case is currently escalated. */
		escalated?: boolean | null;

		/** The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours */
		languageCode?: string | null;

		/** The resource name for the case. */
		name?: string | null;

		/** The priority of this case. */
		priority?: CasePriority | null;

		/** Output only. The current status of the support case. */
		state?: CaseState | null;

		/** The email addresses to receive updates on this case. */
		subscriberEmailAddresses?: Array<string>;

		/** Whether this case was created for internal API testing and should not be acted on by the support team. */
		testCase?: boolean | null;

		/** The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API. */
		timeZone?: string | null;

		/** Output only. The time this case was last updated. */
		updateTime?: string | null;
	}

	/** A Case is an object that contains the details of a support case. It contains fields for the time it was created, its priority, its classification, and more. Cases can also have comments and attachments that get added over time. A case is parented by a Google Cloud organization or project. Organizations are identified by a number, so the name of a case parented by an organization would look like this: ``` organizations/123/cases/456 ``` Projects have two unique identifiers, an ID and a number, and they look like this: ``` projects/abc/cases/456 ``` ``` projects/123/cases/456 ``` You can use either of them when calling the API. To learn more about project identifiers, see [AIP-2510](https://google.aip.dev/cloud/2510). */
	export interface CaseFormProperties {

		/** A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs. */
		contactEmail: FormControl<string | null | undefined>,

		/** Output only. The time this case was created. */
		createTime: FormControl<string | null | undefined>,

		/** A broad description of the issue. */
		description: FormControl<string | null | undefined>,

		/** The short summary of the issue reported in this case. */
		displayName: FormControl<string | null | undefined>,

		/** Whether the case is currently escalated. */
		escalated: FormControl<boolean | null | undefined>,

		/** The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours */
		languageCode: FormControl<string | null | undefined>,

		/** The resource name for the case. */
		name: FormControl<string | null | undefined>,

		/** The priority of this case. */
		priority: FormControl<CasePriority | null | undefined>,

		/** Output only. The current status of the support case. */
		state: FormControl<CaseState | null | undefined>,

		/** Whether this case was created for internal API testing and should not be acted on by the support team. */
		testCase: FormControl<boolean | null | undefined>,

		/** The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API. */
		timeZone: FormControl<string | null | undefined>,

		/** Output only. The time this case was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCaseFormGroup() {
		return new FormGroup<CaseFormProperties>({
			contactEmail: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			escalated: new FormControl<boolean | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<CasePriority | null | undefined>(undefined),
			state: new FormControl<CaseState | null | undefined>(undefined),
			testCase: new FormControl<boolean | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Case Classification represents the topic that a case is about. It's very important to use accurate classifications, because they're used to route your cases to specialists who can help you. A classification always has an ID that is its unique identifier. A valid ID is required when creating a case. */
	export interface CaseClassification {

		/** A display name for the classification. The display name is not static and can change. To uniquely and consistently identify classifications, use the `CaseClassification.id` field. */
		displayName?: string | null;

		/** The unique ID for a classification. Must be specified for case creation. To retrieve valid classification IDs for case creation, use `caseClassifications.search`. Classification IDs returned by `caseClassifications.search` are guaranteed to be valid for at least 6 months. If a given classification is deactiveated, it will immediately stop being returned. After 6 months, `case.create` requests using the classification ID will fail. */
		id?: string | null;
	}

	/** A Case Classification represents the topic that a case is about. It's very important to use accurate classifications, because they're used to route your cases to specialists who can help you. A classification always has an ID that is its unique identifier. A valid ID is required when creating a case. */
	export interface CaseClassificationFormProperties {

		/** A display name for the classification. The display name is not static and can change. To uniquely and consistently identify classifications, use the `CaseClassification.id` field. */
		displayName: FormControl<string | null | undefined>,

		/** The unique ID for a classification. Must be specified for case creation. To retrieve valid classification IDs for case creation, use `caseClassifications.search`. Classification IDs returned by `caseClassifications.search` are guaranteed to be valid for at least 6 months. If a given classification is deactiveated, it will immediately stop being returned. After 6 months, `case.create` requests using the classification ID will fail. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCaseClassificationFormGroup() {
		return new FormGroup<CaseClassificationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CasePriority { PRIORITY_UNSPECIFIED = 0, P0 = 1, P1 = 2, P2 = 3, P3 = 4, P4 = 5 }

	export enum CaseState { STATE_UNSPECIFIED = 0, NEW = 1, IN_PROGRESS_GOOGLE_SUPPORT = 2, ACTION_REQUIRED = 3, SOLUTION_PROVIDED = 4, CLOSED = 5 }


	/** The request message for the CloseCase endpoint. */
	export interface CloseCaseRequest {
	}

	/** The request message for the CloseCase endpoint. */
	export interface CloseCaseRequestFormProperties {
	}
	export function CreateCloseCaseRequestFormGroup() {
		return new FormGroup<CloseCaseRequestFormProperties>({
		});

	}


	/** Case comments are the main way Google Support communicates with a user who has opened a case. When a user responds to Google Support, the user's responses also appear as comments. */
	export interface Comment {

		/** The full comment body. Maximum of 12800 characters. This can contain rich text syntax. */
		body?: string | null;

		/** Output only. The time when this comment was created. */
		createTime?: string | null;

		/** An Actor represents an entity that performed an action. For example, an actor could be a user who posted a comment on a support case, a user who uploaded an attachment, or a service account that created a support case. */
		creator?: Actor;

		/** Output only. The resource name for the comment. */
		name?: string | null;

		/** Output only. DEPRECATED. An automatically generated plain text version of body with all rich text syntax stripped. */
		plainTextBody?: string | null;
	}

	/** Case comments are the main way Google Support communicates with a user who has opened a case. When a user responds to Google Support, the user's responses also appear as comments. */
	export interface CommentFormProperties {

		/** The full comment body. Maximum of 12800 characters. This can contain rich text syntax. */
		body: FormControl<string | null | undefined>,

		/** Output only. The time when this comment was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The resource name for the comment. */
		name: FormControl<string | null | undefined>,

		/** Output only. DEPRECATED. An automatically generated plain text version of body with all rich text syntax stripped. */
		plainTextBody: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			plainTextBody: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface CompositeMedia {

		/** # gdata.* are outside protos with mising documentation */
		blobRef?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		blobstore2Info?: Blobstore2Info;

		/** # gdata.* are outside protos with mising documentation */
		cosmoBinaryReference?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		crc32cHash?: number | null;

		/** # gdata.* are outside protos with mising documentation */
		inline?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		length?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		md5Hash?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		objectId?: ObjectId;

		/** # gdata.* are outside protos with mising documentation */
		path?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		referenceType?: CompositeMediaReferenceType | null;

		/** # gdata.* are outside protos with mising documentation */
		sha1Hash?: string | null;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface CompositeMediaFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		blobRef: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		cosmoBinaryReference: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		crc32cHash: FormControl<number | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		inline: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		length: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		md5Hash: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		path: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		referenceType: FormControl<CompositeMediaReferenceType | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		sha1Hash: FormControl<string | null | undefined>,
	}
	export function CreateCompositeMediaFormGroup() {
		return new FormGroup<CompositeMediaFormProperties>({
			blobRef: new FormControl<string | null | undefined>(undefined),
			cosmoBinaryReference: new FormControl<string | null | undefined>(undefined),
			crc32cHash: new FormControl<number | null | undefined>(undefined),
			inline: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<CompositeMediaReferenceType | null | undefined>(undefined),
			sha1Hash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface ObjectId {

		/** # gdata.* are outside protos with mising documentation */
		bucketName?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		generation?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		objectName?: string | null;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface ObjectIdFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		bucketName: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		generation: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		objectName: FormControl<string | null | undefined>,
	}
	export function CreateObjectIdFormGroup() {
		return new FormGroup<ObjectIdFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CompositeMediaReferenceType { PATH = 0, BLOB_REF = 1, INLINE = 2, BIGSTORE_REF = 3, COSMO_BINARY_REFERENCE = 4 }


	/** # gdata.* are outside protos with mising documentation */
	export interface ContentTypeInfo {

		/** # gdata.* are outside protos with mising documentation */
		bestGuess?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		fromBytes?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		fromFileName?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		fromHeader?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		fromUrlPath?: string | null;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface ContentTypeInfoFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		bestGuess: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		fromBytes: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		fromFileName: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		fromHeader: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		fromUrlPath: FormControl<string | null | undefined>,
	}
	export function CreateContentTypeInfoFormGroup() {
		return new FormGroup<ContentTypeInfoFormProperties>({
			bestGuess: new FormControl<string | null | undefined>(undefined),
			fromBytes: new FormControl<string | null | undefined>(undefined),
			fromFileName: new FormControl<string | null | undefined>(undefined),
			fromHeader: new FormControl<string | null | undefined>(undefined),
			fromUrlPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for the CreateAttachment endpoint. */
	export interface CreateAttachmentRequest {

		/** An Attachment contains metadata about a file that was uploaded to a case - it is NOT a file itself. That being said, the name of an Attachment object can be used to download its accompanying file through the `media.download` endpoint. While attachments can be uploaded in the console at the same time as a comment, they're associated on a "case" level, not a "comment" level. */
		attachment?: Attachment;
	}

	/** The request message for the CreateAttachment endpoint. */
	export interface CreateAttachmentRequestFormProperties {
	}
	export function CreateCreateAttachmentRequestFormGroup() {
		return new FormGroup<CreateAttachmentRequestFormProperties>({
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface DiffChecksumsResponse {

		/** # gdata.* are outside protos with mising documentation */
		checksumsLocation?: CompositeMedia;

		/** # gdata.* are outside protos with mising documentation */
		chunkSizeBytes?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		objectLocation?: CompositeMedia;

		/** # gdata.* are outside protos with mising documentation */
		objectSizeBytes?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		objectVersion?: string | null;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface DiffChecksumsResponseFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		chunkSizeBytes: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		objectSizeBytes: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateDiffChecksumsResponseFormGroup() {
		return new FormGroup<DiffChecksumsResponseFormProperties>({
			chunkSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface DiffDownloadResponse {

		/** # gdata.* are outside protos with mising documentation */
		objectLocation?: CompositeMedia;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface DiffDownloadResponseFormProperties {
	}
	export function CreateDiffDownloadResponseFormGroup() {
		return new FormGroup<DiffDownloadResponseFormProperties>({
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface DiffUploadRequest {

		/** # gdata.* are outside protos with mising documentation */
		checksumsInfo?: CompositeMedia;

		/** # gdata.* are outside protos with mising documentation */
		objectInfo?: CompositeMedia;

		/** # gdata.* are outside protos with mising documentation */
		objectVersion?: string | null;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface DiffUploadRequestFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateDiffUploadRequestFormGroup() {
		return new FormGroup<DiffUploadRequestFormProperties>({
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface DiffUploadResponse {

		/** # gdata.* are outside protos with mising documentation */
		objectVersion?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		originalObject?: CompositeMedia;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface DiffUploadResponseFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateDiffUploadResponseFormGroup() {
		return new FormGroup<DiffUploadResponseFormProperties>({
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface DiffVersionResponse {

		/** # gdata.* are outside protos with mising documentation */
		objectSizeBytes?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		objectVersion?: string | null;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface DiffVersionResponseFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		objectSizeBytes: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateDiffVersionResponseFormGroup() {
		return new FormGroup<DiffVersionResponseFormProperties>({
			objectSizeBytes: new FormControl<string | null | undefined>(undefined),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface DownloadParameters {

		/** # gdata.* are outside protos with mising documentation */
		allowGzipCompression?: boolean | null;

		/** # gdata.* are outside protos with mising documentation */
		ignoreRange?: boolean | null;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface DownloadParametersFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		allowGzipCompression: FormControl<boolean | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		ignoreRange: FormControl<boolean | null | undefined>,
	}
	export function CreateDownloadParametersFormGroup() {
		return new FormGroup<DownloadParametersFormProperties>({
			allowGzipCompression: new FormControl<boolean | null | undefined>(undefined),
			ignoreRange: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The request message for the EscalateCase endpoint. */
	export interface EscalateCaseRequest {

		/** An escalation of a support case. */
		escalation?: Escalation;
	}

	/** The request message for the EscalateCase endpoint. */
	export interface EscalateCaseRequestFormProperties {
	}
	export function CreateEscalateCaseRequestFormGroup() {
		return new FormGroup<EscalateCaseRequestFormProperties>({
		});

	}


	/** An escalation of a support case. */
	export interface Escalation {

		/** Required. A free text description to accompany the `reason` field above. Provides additional context on why the case is being escalated. */
		justification?: string | null;

		/** Required. The reason why the Case is being escalated. */
		reason?: EscalationReason | null;
	}

	/** An escalation of a support case. */
	export interface EscalationFormProperties {

		/** Required. A free text description to accompany the `reason` field above. Provides additional context on why the case is being escalated. */
		justification: FormControl<string | null | undefined>,

		/** Required. The reason why the Case is being escalated. */
		reason: FormControl<EscalationReason | null | undefined>,
	}
	export function CreateEscalationFormGroup() {
		return new FormGroup<EscalationFormProperties>({
			justification: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<EscalationReason | null | undefined>(undefined),
		});

	}

	export enum EscalationReason { REASON_UNSPECIFIED = 0, RESOLUTION_TIME = 1, TECHNICAL_EXPERTISE = 2, BUSINESS_IMPACT = 3 }


	/** The response message for the ListAttachments endpoint. */
	export interface ListAttachmentsResponse {

		/** The list of attachments associated with a case. */
		attachments?: Array<Attachment>;

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.attachments.list` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken?: string | null;
	}

	/** The response message for the ListAttachments endpoint. */
	export interface ListAttachmentsResponseFormProperties {

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.attachments.list` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttachmentsResponseFormGroup() {
		return new FormGroup<ListAttachmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for the ListCases endpoint. */
	export interface ListCasesResponse {

		/** The list of cases associated with the parent after any filters have been applied. */
		cases?: Array<Case>;

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.list` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken?: string | null;
	}

	/** The response message for the ListCases endpoint. */
	export interface ListCasesResponseFormProperties {

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.list` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCasesResponseFormGroup() {
		return new FormGroup<ListCasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for the ListComments endpoint. */
	export interface ListCommentsResponse {

		/** List of the comments associated with the case. */
		comments?: Array<Comment>;

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.comments.list` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken?: string | null;
	}

	/** The response message for the ListComments endpoint. */
	export interface ListCommentsResponseFormProperties {

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.comments.list` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCommentsResponseFormGroup() {
		return new FormGroup<ListCommentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** # gdata.* are outside protos with mising documentation */
	export interface Media {

		/** # gdata.* are outside protos with mising documentation */
		algorithm?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		bigstoreObjectRef?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		blobRef?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		blobstore2Info?: Blobstore2Info;

		/** # gdata.* are outside protos with mising documentation */
		compositeMedia?: Array<CompositeMedia>;

		/** # gdata.* are outside protos with mising documentation */
		contentType?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		contentTypeInfo?: ContentTypeInfo;

		/** # gdata.* are outside protos with mising documentation */
		cosmoBinaryReference?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		crc32cHash?: number | null;

		/** # gdata.* are outside protos with mising documentation */
		diffChecksumsResponse?: DiffChecksumsResponse;

		/** # gdata.* are outside protos with mising documentation */
		diffDownloadResponse?: DiffDownloadResponse;

		/** # gdata.* are outside protos with mising documentation */
		diffUploadRequest?: DiffUploadRequest;

		/** # gdata.* are outside protos with mising documentation */
		diffUploadResponse?: DiffUploadResponse;

		/** # gdata.* are outside protos with mising documentation */
		diffVersionResponse?: DiffVersionResponse;

		/** # gdata.* are outside protos with mising documentation */
		downloadParameters?: DownloadParameters;

		/** # gdata.* are outside protos with mising documentation */
		filename?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		hash?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		hashVerified?: boolean | null;

		/** # gdata.* are outside protos with mising documentation */
		inline?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		isPotentialRetry?: boolean | null;

		/** # gdata.* are outside protos with mising documentation */
		length?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		md5Hash?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		mediaId?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		objectId?: ObjectId;

		/** # gdata.* are outside protos with mising documentation */
		path?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		referenceType?: MediaReferenceType | null;

		/** # gdata.* are outside protos with mising documentation */
		sha1Hash?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		sha256Hash?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		timestamp?: string | null;

		/** # gdata.* are outside protos with mising documentation */
		token?: string | null;
	}

	/** # gdata.* are outside protos with mising documentation */
	export interface MediaFormProperties {

		/** # gdata.* are outside protos with mising documentation */
		algorithm: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		bigstoreObjectRef: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		blobRef: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		contentType: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		cosmoBinaryReference: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		crc32cHash: FormControl<number | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		filename: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		hash: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		hashVerified: FormControl<boolean | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		inline: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		isPotentialRetry: FormControl<boolean | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		length: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		md5Hash: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		mediaId: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		path: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		referenceType: FormControl<MediaReferenceType | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		sha1Hash: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		sha256Hash: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		timestamp: FormControl<string | null | undefined>,

		/** # gdata.* are outside protos with mising documentation */
		token: FormControl<string | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			bigstoreObjectRef: new FormControl<string | null | undefined>(undefined),
			blobRef: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			cosmoBinaryReference: new FormControl<string | null | undefined>(undefined),
			crc32cHash: new FormControl<number | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			hashVerified: new FormControl<boolean | null | undefined>(undefined),
			inline: new FormControl<string | null | undefined>(undefined),
			isPotentialRetry: new FormControl<boolean | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			mediaId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			referenceType: new FormControl<MediaReferenceType | null | undefined>(undefined),
			sha1Hash: new FormControl<string | null | undefined>(undefined),
			sha256Hash: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MediaReferenceType { PATH = 0, BLOB_REF = 1, INLINE = 2, GET_MEDIA = 3, COMPOSITE_MEDIA = 4, BIGSTORE_REF = 5, DIFF_VERSION_RESPONSE = 6, DIFF_CHECKSUMS_RESPONSE = 7, DIFF_DOWNLOAD_RESPONSE = 8, DIFF_UPLOAD_REQUEST = 9, DIFF_UPLOAD_RESPONSE = 10, COSMO_BINARY_REFERENCE = 11, ARBITRARY_BYTES = 12 }


	/** The response message for SearchCaseClassifications endpoint. */
	export interface SearchCaseClassificationsResponse {

		/** The classifications retrieved. */
		caseClassifications?: Array<CaseClassification>;

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `caseClassifications.list` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken?: string | null;
	}

	/** The response message for SearchCaseClassifications endpoint. */
	export interface SearchCaseClassificationsResponseFormProperties {

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `caseClassifications.list` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchCaseClassificationsResponseFormGroup() {
		return new FormGroup<SearchCaseClassificationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for the SearchCases endpoint. */
	export interface SearchCasesResponse {

		/** The list of cases associated with the parent after any filters have been applied. */
		cases?: Array<Case>;

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.search` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken?: string | null;
	}

	/** The response message for the SearchCases endpoint. */
	export interface SearchCasesResponseFormProperties {

		/** A token to retrieve the next page of results. Set this in the `page_token` field of subsequent `cases.search` requests. If unspecified, there are no more results to retrieve. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchCasesResponseFormGroup() {
		return new FormGroup<SearchCasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about the operation. Used to lookup the current status. */
	export interface WorkflowOperationMetadata {

		/** The namespace that the job was scheduled in. Must be included in the workflow metadata so the workflow status can be retrieved. */
		namespace?: string | null;

		/** The type of action the operation is classified as. */
		operationAction?: WorkflowOperationMetadataOperationAction | null;

		/** Which version of the workflow service this operation came from. */
		workflowOperationType?: WorkflowOperationMetadataWorkflowOperationType | null;
	}

	/** Metadata about the operation. Used to lookup the current status. */
	export interface WorkflowOperationMetadataFormProperties {

		/** The namespace that the job was scheduled in. Must be included in the workflow metadata so the workflow status can be retrieved. */
		namespace: FormControl<string | null | undefined>,

		/** The type of action the operation is classified as. */
		operationAction: FormControl<WorkflowOperationMetadataOperationAction | null | undefined>,

		/** Which version of the workflow service this operation came from. */
		workflowOperationType: FormControl<WorkflowOperationMetadataWorkflowOperationType | null | undefined>,
	}
	export function CreateWorkflowOperationMetadataFormGroup() {
		return new FormGroup<WorkflowOperationMetadataFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
			operationAction: new FormControl<WorkflowOperationMetadataOperationAction | null | undefined>(undefined),
			workflowOperationType: new FormControl<WorkflowOperationMetadataWorkflowOperationType | null | undefined>(undefined),
		});

	}

	export enum WorkflowOperationMetadataOperationAction { OPERATION_ACTION_UNSPECIFIED = 0, CREATE_SUPPORT_ACCOUNT = 1, UPDATE_SUPPORT_ACCOUNT = 2, PURCHASE_SUPPORT_ACCOUNT = 3 }

	export enum WorkflowOperationMetadataWorkflowOperationType { UNKNOWN_OPERATION_TYPE = 0, WORKFLOWS_V1 = 1, WORKFLOWS_V2 = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve valid classifications to use when creating a support case. Classifications are hierarchical. Each classification is a string containing all levels of the hierarchy separated by `" > "`. For example, `"Technical Issue > Compute > Compute Engine"`. Classification IDs returned by this endpoint are valid for at least six months. When a classification is deactivated, this endpoint immediately stops returning it. After six months, `case.create` requests using the classification will fail. EXAMPLES: cURL: ```shell curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ 'https://cloudsupport.googleapis.com/v2/caseClassifications:search?query=display_name:"*Compute%20Engine*"' ``` Python: ```python import googleapiclient.discovery supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version="v2", discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version=v2", ) request = supportApiService.caseClassifications().search( query='display_name:"*Compute Engine*"' ) print(request.execute()) ```
		 * Get v2/caseClassifications:search
		 * @param {number} pageSize The maximum number of classifications fetched with each request.
		 * @param {string} pageToken A token identifying the page of results to return. If unspecified, the first page is retrieved.
		 * @param {string} query An expression used to filter case classifications. If it's an empty string, then no filtering happens. Otherwise, case classifications will be returned that match the filter.
		 * @return {SearchCaseClassificationsResponse} Successful response
		 */
		Cloudsupport_caseClassifications_search(pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchCaseClassificationsResponse> {
			return this.http.get<SearchCaseClassificationsResponse>(this.baseUri + 'v2/caseClassifications:search?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Retrieve a case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/16033687" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = supportApiService.cases().get( name="projects/some-project/cases/43595344", ) print(request.execute()) ```
		 * Get v2/{name}
		 * @param {string} name Required. The full name of a case to be retrieved.
		 * @return {Case} Successful response
		 */
		Cloudsupport_cases_get(name: string): Observable<Case> {
			return this.http.get<Case>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update a case. Only some fields can be updated. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request PATCH \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ --data '{ "priority": "P1" }' \ "https://cloudsupport.googleapis.com/v2/$case?updateMask=priority" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = supportApiService.cases().patch( name="projects/some-project/cases/43112854", body={ "displayName": "This is Now a New Title", "priority": "P2", }, ) print(request.execute()) ```
		 * Patch v2/{name}
		 * @param {string} name The resource name for the case.
		 * @param {string} updateMask A list of attributes of the case that should be updated. Supported values are `priority`, `display_name`, and `subscriber_email_addresses`. If no fields are specified, all supported fields are updated. Be careful - if you do not provide a field mask, then you might accidentally clear some fields. For example, if you leave the field mask empty and do not provide a value for `subscriber_email_addresses`, then `subscriber_email_addresses` is updated to empty.
		 * @return {Case} Successful response
		 */
		Cloudsupport_cases_patch(name: string, updateMask: string | null | undefined, requestBody: Case): Observable<Case> {
			return this.http.patch<Case>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Close a case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case:close" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = supportApiService.cases().close( name="projects/some-project/cases/43595344" ) print(request.execute()) ```
		 * Post v2/{name}:close
		 * @param {string} name Required. The name of the case to close.
		 * @return {Case} Successful response
		 */
		Cloudsupport_cases_close(name: string, requestBody: CloseCaseRequest): Observable<Case> {
			return this.http.post<Case>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':close', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download a file attached to a case. Note: HTTP requests must append "?alt=media" to the URL. EXAMPLES: cURL: ```shell name="projects/some-project/cases/43594844/attachments/0674M00000WijAnZAJ" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$name:download?alt=media" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = supportApiService.media().download( name="projects/some-project/cases/43595344/attachments/0684M00000Pw6pHQAR" ) request.uri = request.uri.split("?")[0] + "?alt=media" print(request.execute()) ```
		 * Get v2/{name}:download
		 * @param {string} name The name of the file attachment to download.
		 * @return {Media} Successful response
		 */
		Cloudsupport_media_download(name: string): Observable<Media> {
			return this.http.get<Media>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':download', {});
		}

		/**
		 * Escalate a case, starting the Google Cloud Support escalation management process. This operation is only available for some support services. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which ones let you do that. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header "Content-Type: application/json" \ --data '{ "escalation": { "reason": "BUSINESS_IMPACT", "justification": "This is a test escalation." } }' \ "https://cloudsupport.googleapis.com/v2/$case:escalate" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = supportApiService.cases().escalate( name="projects/some-project/cases/43595344", body={ "escalation": { "reason": "BUSINESS_IMPACT", "justification": "This is a test escalation.", }, }, ) print(request.execute()) ```
		 * Post v2/{name}:escalate
		 * @param {string} name Required. The name of the case to be escalated.
		 * @return {Case} Successful response
		 */
		Cloudsupport_cases_escalate(name: string, requestBody: EscalateCaseRequest): Observable<Case> {
			return this.http.post<Case>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':escalate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all the attachments associated with a support case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/23598314" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case/attachments" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = ( supportApiService.cases() .attachments() .list(parent="projects/some-project/cases/43595344") ) print(request.execute()) ```
		 * Get v2/{parent}/attachments
		 * @param {string} parent Required. The name of the case for which attachments should be listed.
		 * @param {number} pageSize The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100.
		 * @param {string} pageToken A token identifying the page of results to return. If unspecified, the first page is retrieved.
		 * @return {ListAttachmentsResponse} Successful response
		 */
		Cloudsupport_cases_attachments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAttachmentsResponse> {
			return this.http.get<ListAttachmentsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/attachments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieve all cases under a parent, but not its children. For example, listing cases under an organization only returns the cases that are directly parented by that organization. To retrieve cases under an organization and its projects, use `cases.search`. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$parent/cases" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = supportApiService.cases().list(parent="projects/some-project") print(request.execute()) ```
		 * Get v2/{parent}/cases
		 * @param {string} parent Required. The name of a parent to list cases under.
		 * @param {string} filter An expression used to filter cases. If it's an empty string, then no filtering happens. Otherwise, the endpoint returns the cases that match the filter. Expressions use the following fields separated by `AND` and specified with `=`: - `state`: Can be `OPEN` or `CLOSED`. - `priority`: Can be `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - `creator.email`: The email address of the case creator. EXAMPLES: - `state=CLOSED` - `state=OPEN AND creator.email="tester@example.com"` - `state=OPEN AND (priority=P0 OR priority=P1)`
		 * @param {number} pageSize The maximum number of cases fetched with each request. Defaults to 10.
		 * @param {string} pageToken A token identifying the page of results to return. If unspecified, the first page is retrieved.
		 * @return {ListCasesResponse} Successful response
		 */
		Cloudsupport_cases_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCasesResponse> {
			return this.http.get<ListCasesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cases&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new case and associate it with a parent. It must have the following fields set: `display_name`, `description`, `classification`, and `priority`. If you're just testing the API and don't want to route your case to an agent, set `testCase=true`. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json' \ --data '{ "display_name": "Test case created by me.", "description": "a random test case, feel free to close", "classification": { "id": "100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8" }, "time_zone": "-07:00", "subscriber_email_addresses": [ "foo@domain.com", "bar@domain.com" ], "testCase": true, "priority": "P3" }' \ "https://cloudsupport.googleapis.com/v2/$parent/cases" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = supportApiService.cases().create( parent="projects/some-project", body={ "displayName": "A Test Case", "description": "This is a test case.", "testCase": True, "priority": "P2", "classification": { "id": "100IK2AKCLHMGRJ9CDGMOCGP8DM6UTB4BT262T31BT1M2T31DHNMENPO6KS36CPJ786L2TBFEHGN6NPI64R3CDHN8880G08I1H3MURR7DHII0GRCDTQM8" }, }, ) print(request.execute()) ```
		 * Post v2/{parent}/cases
		 * @param {string} parent Required. The name of the parent under which the case should be created.
		 * @return {Case} Successful response
		 */
		Cloudsupport_cases_create(parent: string, requestBody: Case): Observable<Case> {
			return this.http.post<Case>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search for cases using a query. EXAMPLES: cURL: ```shell parent="projects/some-project" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$parent/cases:search" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = supportApiService.cases().search( parent="projects/some-project", query="state=OPEN" ) print(request.execute()) ```
		 * Get v2/{parent}/cases:search
		 * @param {string} parent The name of the parent resource to search for cases under.
		 * @param {number} pageSize The maximum number of cases fetched with each request. The default page size is 10.
		 * @param {string} pageToken A token identifying the page of results to return. If unspecified, the first page is retrieved.
		 * @param {string} query An expression used to filter cases. Expressions use the following fields separated by `AND` and specified with `=`: - `organization`: An organization name in the form `organizations/`. - `project`: A project name in the form `projects/`. - `state`: Can be `OPEN` or `CLOSED`. - `priority`: Can be `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - `creator.email`: The email address of the case creator. You must specify either `organization` or `project`. To search across `displayName`, `description`, and comments, use a global restriction with no keyword or operator. For example, `"my search"`. To search only cases updated after a certain date, use `update_time` restricted with that particular date, time, and timezone in ISO datetime format. For example, `update_time>"2020-01-01T00:00:00-05:00"`. `update_time` only supports the greater than operator (`>`). Examples: - `organization="organizations/123456789"` - `project="projects/my-project-id"` - `project="projects/123456789"` - `organization="organizations/123456789" AND state=CLOSED` - `project="projects/my-project-id" AND creator.email="tester@example.com"` - `project="projects/my-project-id" AND (priority=P0 OR priority=P1)`
		 * @return {SearchCasesResponse} Successful response
		 */
		Cloudsupport_cases_search(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchCasesResponse> {
			return this.http.get<SearchCasesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/cases:search&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * List all the comments associated with a case. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43595344" curl \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://cloudsupport.googleapis.com/v2/$case/comments" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = ( supportApiService.cases() .comments() .list(parent="projects/some-project/cases/43595344") ) print(request.execute()) ```
		 * Get v2/{parent}/comments
		 * @param {string} parent Required. The name of the case for which to list comments.
		 * @param {number} pageSize The maximum number of comments to fetch. Defaults to 10.
		 * @param {string} pageToken A token identifying the page of results to return. If unspecified, the first page is returned.
		 * @return {ListCommentsResponse} Successful response
		 */
		Cloudsupport_cases_comments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCommentsResponse> {
			return this.http.get<ListCommentsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/comments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Add a new comment to a case. The comment must have the following fields set: `body`. EXAMPLES: cURL: ```shell case="projects/some-project/cases/43591344" curl \ --request POST \ --header "Authorization: Bearer $(gcloud auth print-access-token)" \ --header 'Content-Type: application/json' \ --data '{ "body": "This is a test comment." }' \ "https://cloudsupport.googleapis.com/v2/$case/comments" ``` Python: ```python import googleapiclient.discovery api_version = "v2" supportApiService = googleapiclient.discovery.build( serviceName="cloudsupport", version=api_version, discoveryServiceUrl=f"https://cloudsupport.googleapis.com/$discovery/rest?version={api_version}", ) request = ( supportApiService.cases() .comments() .create( parent="projects/some-project/cases/43595344", body={"body": "This is a test comment."}, ) ) print(request.execute()) ```
		 * Post v2/{parent}/comments
		 * @param {string} parent Required. The name of the case to which the comment should be added.
		 * @return {Comment} Successful response
		 */
		Cloudsupport_cases_comments_create(parent: string, requestBody: Comment): Observable<Comment> {
			return this.http.post<Comment>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/comments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

