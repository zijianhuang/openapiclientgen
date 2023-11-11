import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** A bucket. */
	export interface Bucket {

		/** Access controls on the bucket. */
		acl?: Array<BucketAccessControl> | null;

		/** The bucket's billing configuration. */
		billing?: BucketBilling | null;

		/** The bucket's Cross-Origin Resource Sharing (CORS) configuration. */
		BucketCors?: Array<BucketCors> | null;

		/** The default value for event-based hold on newly created objects in this bucket. Event-based hold is a way to retain objects indefinitely until an event occurs, signified by the hold's release. After being released, such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. Objects under event-based hold cannot be deleted, overwritten or archived until the hold is removed. */
		defaultEventBasedHold?: boolean | null;

		/** Default access controls to apply to new objects when no ACL is provided. */
		defaultObjectAcl?: Array<ObjectAccessControl> | null;

		/** Encryption configuration for a bucket. */
		encryption?: BucketEncryption | null;

		/** HTTP 1.1 Entity tag for the bucket. */
		etag?: string | null;

		/** The bucket's IAM configuration. */
		iamConfiguration?: BucketIamConfiguration | null;

		/** The ID of the bucket. For buckets, the id and name properties are the same. */
		id?: string | null;

		/** The kind of item this is. For buckets, this is always storage#bucket. */
		kind?: string | null;

		/** User-provided labels, in key/value pairs. */
		labels?: {[id: string]: string } | null;

		/** The bucket's lifecycle configuration. See lifecycle management for more information. */
		lifecycle?: BucketLifecycle | null;

		/** The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's guide for the authoritative list. */
		location?: string | null;

		/** The type of the bucket location. */
		locationType?: string | null;

		/** The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs. */
		logging?: BucketLogging | null;

		/** The metadata generation of this bucket. */
		metageneration?: string | null;

		/** The name of the bucket. */
		name?: string | null;

		/** The owner of the bucket. This is always the project team's owner group. */
		owner?: BucketOwner | null;

		/** The project number of the project the bucket belongs to. */
		projectNumber?: string | null;

		/** The bucket's retention policy. The retention policy enforces a minimum retention time for all objects contained in the bucket, based on their creation time. Any attempt to overwrite or delete objects younger than the retention period will result in a PERMISSION_DENIED error. An unlocked retention policy can be modified or removed from the bucket via a storage.buckets.update operation. A locked retention policy cannot be removed or shortened in duration for the lifetime of the bucket. Attempting to remove or decrease period of a locked retention policy will result in a PERMISSION_DENIED error. */
		retentionPolicy?: BucketRetentionPolicy | null;

		/** The URI of this bucket. */
		selfLink?: string | null;

		/** The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage classes. */
		storageClass?: string | null;

		/** The creation time of the bucket in RFC 3339 format. */
		timeCreated?: Date | null;

		/** The modification time of the bucket in RFC 3339 format. */
		updated?: Date | null;

		/** The bucket's versioning configuration. */
		versioning?: BucketVersioning | null;

		/** The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples for more information. */
		website?: BucketWebsite | null;

		/** The zone or zones from which the bucket is intended to use zonal quota. Requests for data from outside the specified affinities are still allowed but won't be able to use zonal quota. The zone or zones need to be within the bucket location otherwise the requests will fail with a 400 Bad Request response. */
		zoneAffinity?: Array<string> | null;

		/** If set, objects placed in this bucket are required to be separated by disaster domain. */
		zoneSeparation?: boolean | null;
	}


	/** An access-control entry. */
	export interface BucketAccessControl {

		/** The name of the bucket. */
		bucket?: string | null;

		/** The domain associated with the entity, if any. */
		domain?: string | null;

		/** The email address associated with the entity, if any. */
		email?: string | null;

		/**
		 * The entity holding the permission, in one of the following forms:
		 * - user-userId
		 * - user-email
		 * - group-groupId
		 * - group-email
		 * - domain-domain
		 * - project-team-projectId
		 * - allUsers
		 * - allAuthenticatedUsers Examples:
		 * - The user liz@example.com would be user-liz@example.com.
		 * - The group example@googlegroups.com would be group-example@googlegroups.com.
		 * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
		 */
		entity?: string | null;

		/** The ID for the entity, if any. */
		entityId?: string | null;

		/** HTTP 1.1 Entity tag for the access-control entry. */
		etag?: string | null;

		/** The ID of the access-control entry. */
		id?: string | null;

		/** The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl. */
		kind?: string | null;

		/** The project team associated with the entity, if any. */
		projectTeam?: BucketAccessControlProjectTeam | null;

		/** The access permission for the entity. */
		role?: string | null;

		/** The link to this access-control entry. */
		selfLink?: string | null;
	}

	export interface BucketAccessControlProjectTeam {

		/** The project number. */
		projectNumber?: string | null;

		/** The team. */
		team?: string | null;
	}

	export interface BucketBilling {

		/** When set to true, Requester Pays is enabled for this bucket. */
		requesterPays?: boolean | null;
	}

	export interface BucketCors {

		/** The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses. */
		maxAgeSeconds?: number | null;

		/** The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "*" is permitted in the list of methods, and means "any method". */
		method?: Array<string> | null;

		/** The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin". */
		origin?: Array<string> | null;

		/** The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. */
		responseHeader?: Array<string> | null;
	}


	/** An access-control entry. */
	export interface ObjectAccessControl {

		/** The name of the bucket. */
		bucket?: string | null;

		/** The domain associated with the entity, if any. */
		domain?: string | null;

		/** The email address associated with the entity, if any. */
		email?: string | null;

		/**
		 * The entity holding the permission, in one of the following forms:
		 * - user-userId
		 * - user-email
		 * - group-groupId
		 * - group-email
		 * - domain-domain
		 * - project-team-projectId
		 * - allUsers
		 * - allAuthenticatedUsers Examples:
		 * - The user liz@example.com would be user-liz@example.com.
		 * - The group example@googlegroups.com would be group-example@googlegroups.com.
		 * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
		 */
		entity?: string | null;

		/** The ID for the entity, if any. */
		entityId?: string | null;

		/** HTTP 1.1 Entity tag for the access-control entry. */
		etag?: string | null;

		/** The content generation of the object, if applied to an object. */
		generation?: string | null;

		/** The ID of the access-control entry. */
		id?: string | null;

		/** The kind of item this is. For object access control entries, this is always storage#objectAccessControl. */
		kind?: string | null;

		/** The name of the object, if applied to an object. */
		object?: string | null;

		/** The project team associated with the entity, if any. */
		projectTeam?: ObjectAccessControlProjectTeam | null;

		/** The access permission for the entity. */
		role?: string | null;

		/** The link to this access-control entry. */
		selfLink?: string | null;
	}

	export interface ObjectAccessControlProjectTeam {

		/** The project number. */
		projectNumber?: string | null;

		/** The team. */
		team?: string | null;
	}

	export interface BucketEncryption {

		/** A Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified. */
		defaultKmsKeyName?: string | null;
	}

	export interface BucketIamConfiguration {

		/** The bucket's uniform bucket-level access configuration. The feature was formerly known as Bucket Policy Only. For backward compatibility, this field will be populated with identical information as the uniformBucketLevelAccess field. We recommend using the uniformBucketLevelAccess field to enable and disable the feature. */
		bucketPolicyOnly?: BucketIamConfigurationBucketPolicyOnly | null;

		/** The bucket's uniform bucket-level access configuration. */
		uniformBucketLevelAccess?: BucketIamConfigurationUniformBucketLevelAccess | null;
	}

	export interface BucketIamConfigurationBucketPolicyOnly {

		/** If set, access is controlled only by bucket-level or above IAM policies. */
		enabled?: boolean | null;

		/** The deadline for changing iamConfiguration.bucketPolicyOnly.enabled from true to false in RFC 3339 format. iamConfiguration.bucketPolicyOnly.enabled may be changed from true to false until the locked time, after which the field is immutable. */
		lockedTime?: Date | null;
	}

	export interface BucketIamConfigurationUniformBucketLevelAccess {

		/** If set, access is controlled only by bucket-level or above IAM policies. */
		enabled?: boolean | null;

		/** The deadline for changing iamConfiguration.uniformBucketLevelAccess.enabled from true to false in RFC 3339  format. iamConfiguration.uniformBucketLevelAccess.enabled may be changed from true to false until the locked time, after which the field is immutable. */
		lockedTime?: Date | null;
	}

	export interface BucketLifecycle {

		/** A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken. */
		BucketLifecycleRule?: Array<BucketLifecycleRule> | null;
	}

	export interface BucketLifecycleRule {

		/** The action to take. */
		action?: BucketLifecycleAction | null;

		/** The condition(s) under which the action will be taken. */
		condition?: BucketLifecycleCondition | null;
	}

	export interface BucketLifecycleAction {

		/** Target storage class. Required iff the type of the action is SetStorageClass. */
		storageClass?: string | null;

		/** Type of the action. Currently, only Delete and SetStorageClass are supported. */
		type?: string | null;
	}

	export interface BucketLifecycleCondition {

		/** Age of an object (in days). This condition is satisfied when an object reaches the specified age. */
		age?: number | null;

		/** A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when an object is created before midnight of the specified date in UTC. */
		createdBefore?: Date | null;

		/** Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects. */
		isLive?: boolean | null;

		/** A regular expression that satisfies the RE2 syntax. This condition is satisfied when the name of the object matches the RE2 pattern. Note: This feature is currently in the "Early Access" launch stage and is only available to a whitelisted set of users; that means that this feature may be changed in backward-incompatible ways and that it is not guaranteed to be released. */
		matchesPattern?: string | null;

		/** Objects having any of the storage classes specified by this condition will be matched. Values include MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE, STANDARD, and DURABLE_REDUCED_AVAILABILITY. */
		matchesStorageClass?: Array<string> | null;

		/** Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object. */
		numNewerVersions?: number | null;
	}

	export interface BucketLogging {

		/** The destination bucket where the current bucket's logs should be placed. */
		logBucket?: string | null;

		/** A prefix for log object names. */
		logObjectPrefix?: string | null;
	}

	export interface BucketOwner {

		/** The entity, in the form project-owner-projectId. */
		entity?: string | null;

		/** The ID for the entity. */
		entityId?: string | null;
	}

	export interface BucketRetentionPolicy {

		/** Server-determined value that indicates the time from which policy was enforced and effective. This value is in RFC 3339 format. */
		effectiveTime?: Date | null;

		/** Once locked, an object retention policy cannot be modified. */
		isLocked?: boolean | null;

		/** The duration in seconds that objects need to be retained. Retention duration must be greater than zero and less than 100 years. Note that enforcement of retention periods less than a day is not guaranteed. Such periods should only be used for testing purposes. */
		retentionPeriod?: string | null;
	}

	export interface BucketVersioning {

		/** While set to true, versioning is fully enabled for this bucket. */
		enabled?: boolean | null;
	}

	export interface BucketWebsite {

		/** If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting object. This allows the creation of index.html objects to represent directory pages. */
		mainPageSuffix?: string | null;

		/** If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this bucket as the content for a 404 Not Found result. */
		notFoundPage?: string | null;
	}


	/** An access-control list. */
	export interface BucketAccessControls {

		/** The list of items. */
		items?: Array<BucketAccessControl> | null;

		/** The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls. */
		kind?: string | null;
	}


	/** A list of buckets. */
	export interface Buckets {

		/** The list of items. */
		items?: Array<Bucket> | null;

		/** The kind of item this is. For lists of buckets, this is always storage#buckets. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;
	}


	/** An notification channel used to watch for resource changes. */
	export interface Channel {

		/** The address where notifications are delivered for this channel. */
		address?: string | null;

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration?: string | null;

		/** A UUID or similar unique string that identifies this channel. */
		id?: string | null;

		/** Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel". */
		kind?: string | null;

		/** Additional parameters controlling delivery channel behavior. Optional. */
		params?: {[id: string]: string } | null;

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload?: boolean | null;

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId?: string | null;

		/** A version-specific identifier for the watched resource. */
		resourceUri?: string | null;

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token?: string | null;

		/** The type of delivery mechanism used for this channel. */
		type?: string | null;
	}


	/** A Compose request. */
	export interface ComposeRequest {

		/** An object. */
		destination?: Object | null;

		/** The kind of item this is. */
		kind?: string | null;

		/** The list of source objects that will be concatenated into a single object. */
		ComposeRequestSourceObjects?: Array<ComposeRequestSourceObjects> | null;
	}


	/** An object. */
	export interface Object {

		/** Access controls on the object. */
		acl?: Array<ObjectAccessControl> | null;

		/** The name of the bucket containing this object. */
		bucket?: string | null;

		/** Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600. */
		cacheControl?: string | null;

		/** Number of underlying components that make up this object. Components are accumulated by compose operations. */
		componentCount?: number | null;

		/** Content-Disposition of the object data. */
		contentDisposition?: string | null;

		/** Content-Encoding of the object data. */
		contentEncoding?: string | null;

		/** Content-Language of the object data. */
		contentLanguage?: string | null;

		/** Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream. */
		contentType?: string | null;

		/** CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c checksum, see Hashes and ETags: Best Practices. */
		crc32c?: string | null;

		/** Metadata of customer-supplied encryption key, if the object is encrypted by such a key. */
		customerEncryption?: ObjectCustomerEncryption | null;

		/** HTTP 1.1 Entity tag for the object. */
		etag?: string | null;

		/** Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any). One sample use case of this flag is for banks to hold loan documents for at least 3 years after loan is paid in full. Here, bucket-level retention is 3 years and the event is the loan being paid in full. In this example, these objects will be held intact for any number of years until the event has occurred (event-based hold on the object is released) and then 3 more years after that. That means retention duration of the objects begins from the moment event-based hold transitioned from true to false. */
		eventBasedHold?: boolean | null;

		/** The content generation of this object. Used for object versioning. */
		generation?: string | null;

		/** The ID of the object, including the bucket name, object name, and generation number. */
		id?: string | null;

		/** The kind of item this is. For objects, this is always storage#object. */
		kind?: string | null;

		/** Cloud KMS Key used to encrypt this object, if the object is encrypted by such a key. */
		kmsKeyName?: string | null;

		/** MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices. */
		md5Hash?: string | null;

		/** Media download link. */
		mediaLink?: string | null;

		/** User-provided metadata, in key/value pairs. */
		metadata?: {[id: string]: string } | null;

		/** The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number is only meaningful in the context of a particular generation of a particular object. */
		metageneration?: string | null;

		/** The name of the object. Required if not specified by URL parameter. */
		name?: string | null;

		/** The owner of the object. This will always be the uploader of the object. */
		owner?: ObjectOwner | null;

		/** A server-determined value that specifies the earliest time that the object's retention period expires. This value is in RFC 3339 format. Note 1: This field is not provided for objects with an active event-based hold, since retention expiration is unknown until the hold is removed. Note 2: This value can be provided even when temporary hold is set (so that the user can reason about policy without having to first unset the temporary hold). */
		retentionExpirationTime?: Date | null;

		/** The link to this object. */
		selfLink?: string | null;

		/** Content-Length of the data in bytes. */
		size?: string | null;

		/** Storage class of the object. */
		storageClass?: string | null;

		/** Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and overwrites. A common use case of this flag is regulatory investigations where objects need to be retained while the investigation is ongoing. Note that unlike event-based hold, temporary hold does not impact retention expiration time of an object. */
		temporaryHold?: boolean | null;

		/** The creation time of the object in RFC 3339 format. */
		timeCreated?: Date | null;

		/** The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted. */
		timeDeleted?: Date | null;

		/** The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated. */
		timeStorageClassUpdated?: Date | null;

		/** The modification time of the object metadata in RFC 3339 format. */
		updated?: Date | null;
	}

	export interface ObjectCustomerEncryption {

		/** The encryption algorithm. */
		encryptionAlgorithm?: string | null;

		/** SHA256 hash value of the encryption key. */
		keySha256?: string | null;
	}

	export interface ObjectOwner {

		/** The entity, in the form user-userId. */
		entity?: string | null;

		/** The ID for the entity. */
		entityId?: string | null;
	}

	export interface ComposeRequestSourceObjects {

		/** The generation of this object to use as the source. */
		generation?: string | null;

		/** The source object's name. All source objects must reside in the same bucket. */
		name?: string | null;

		/** Conditions that must be met for this operation to execute. */
		objectPreconditions?: ComposeRequestObjectPreconditions | null;
	}

	export interface ComposeRequestObjectPreconditions {

		/** Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both specified, they must be the same value or the call will fail. */
		ifGenerationMatch?: string | null;
	}


	/** Represents an expression text. Example: title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) > 0" */
	export interface Expr {

		/** An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported. */
		expression?: string | null;

		/** An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}


	/** JSON template to produce a JSON-style HMAC Key resource for Create responses. */
	export interface HmacKey {

		/** The kind of item this is. For HMAC keys, this is always storage#hmacKey. */
		kind?: string | null;

		/** JSON template to produce a JSON-style HMAC Key metadata resource. */
		metadata?: HmacKeyMetadata | null;

		/** HMAC secret key material. */
		secret?: string | null;
	}


	/** JSON template to produce a JSON-style HMAC Key metadata resource. */
	export interface HmacKeyMetadata {

		/** The ID of the HMAC Key. */
		accessId?: string | null;

		/** HTTP 1.1 Entity tag for the HMAC key. */
		etag?: string | null;

		/** The ID of the HMAC key, including the Project ID and the Access ID. */
		id?: string | null;

		/** The kind of item this is. For HMAC Key metadata, this is always storage#hmacKeyMetadata. */
		kind?: string | null;

		/** Project ID owning the service account to which the key authenticates. */
		projectId?: string | null;

		/** The link to this resource. */
		selfLink?: string | null;

		/** The email address of the key's associated service account. */
		serviceAccountEmail?: string | null;

		/** The state of the key. Can be one of ACTIVE, INACTIVE, or DELETED. */
		state?: string | null;

		/** The creation time of the HMAC key in RFC 3339 format. */
		timeCreated?: Date | null;

		/** The last modification time of the HMAC key metadata in RFC 3339 format. */
		updated?: Date | null;
	}


	/** A list of hmacKeys. */
	export interface HmacKeysMetadata {

		/** The list of items. */
		items?: Array<HmacKeyMetadata> | null;

		/** The kind of item this is. For lists of hmacKeys, this is always storage#hmacKeysMetadata. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;
	}


	/** A subscription to receive Google PubSub notifications. */
	export interface Notification {

		/** An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription. */
		custom_attributes?: {[id: string]: string } | null;

		/** HTTP 1.1 Entity tag for this subscription notification. */
		etag?: string | null;

		/** If present, only send notifications about listed event types. If empty, sent notifications for all event types. */
		event_types?: Array<string> | null;

		/** The ID of the notification. */
		id?: string | null;

		/** The kind of item this is. For notifications, this is always storage#notification. */
		kind?: string | null;

		/** If present, only apply this notification configuration to object names that begin with this prefix. */
		object_name_prefix?: string | null;

		/** The desired content of the Payload. */
		payload_format?: string | null;

		/** The canonical URL of this notification. */
		selfLink?: string | null;

		/** The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}' */
		topic?: string | null;
	}


	/** A list of notification subscriptions. */
	export interface Notifications {

		/** The list of items. */
		items?: Array<Notification> | null;

		/** The kind of item this is. For lists of notifications, this is always storage#notifications. */
		kind?: string | null;
	}


	/** An access-control list. */
	export interface ObjectAccessControls {

		/** The list of items. */
		items?: Array<ObjectAccessControl> | null;

		/** The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls. */
		kind?: string | null;
	}


	/** A list of objects. */
	export interface Objects {

		/** The list of items. */
		items?: Array<Object> | null;

		/** The kind of item this is. For lists of objects, this is always storage#objects. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;

		/** The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter. */
		prefixes?: Array<string> | null;
	}


	/** A bucket/object IAM policy. */
	export interface Policy {

		/** An association between a role, which comes with a set of permissions, and members who may assume that role. */
		PolicyBindings?: Array<PolicyBindings> | null;

		/** HTTP 1.1  Entity tag for the policy. */
		etag?: string | null;

		/** The kind of item this is. For policies, this is always storage#policy. This field is ignored on input. */
		kind?: string | null;

		/** The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, and projects/_/buckets/bucket/objects/object for objects. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input. */
		resourceId?: string | null;

		/** The IAM policy format version. */
		version?: number | null;
	}

	export interface PolicyBindings {

		/** Represents an expression text. Example: title: "User account presence" description: "Determines whether the request has a user account" expression: "size(request.user) > 0" */
		condition?: Expr | null;

		/**
		 * A collection of identifiers for members who may assume the provided role. Recognized identifiers are as follows:
		 * - allUsers — A special identifier that represents anyone on the internet; with or without a Google account.
		 * - allAuthenticatedUsers — A special identifier that represents anyone who is authenticated with a Google account or a service account.
		 * - user:emailid — An email address that represents a specific account. For example, user:alice@gmail.com or user:joe@example.com.
		 * - serviceAccount:emailid — An email address that represents a service account. For example,  serviceAccount:my-other-app@appspot.gserviceaccount.com .
		 * - group:emailid — An email address that represents a Google group. For example, group:admins@example.com.
		 * - domain:domain — A Google Apps domain name that represents all the users of that domain. For example, domain:google.com or domain:example.com.
		 * - projectOwner:projectid — Owners of the given project. For example, projectOwner:my-example-project
		 * - projectEditor:projectid — Editors of the given project. For example, projectEditor:my-example-project
		 * - projectViewer:projectid — Viewers of the given project. For example, projectViewer:my-example-project
		 */
		members?: Array<string> | null;

		/**
		 * The role to which members belong. Two types of roles are supported: new IAM roles, which grant permissions that do not map directly to those provided by ACLs, and legacy IAM roles, which do map directly to ACL permissions. All roles are of the format roles/storage.specificRole.
		 * The new IAM roles are:
		 * - roles/storage.admin — Full control of Google Cloud Storage resources.
		 * - roles/storage.objectViewer — Read-Only access to Google Cloud Storage objects.
		 * - roles/storage.objectCreator — Access to create objects in Google Cloud Storage.
		 * - roles/storage.objectAdmin — Full control of Google Cloud Storage objects.   The legacy IAM roles are:
		 * - roles/storage.legacyObjectReader — Read-only access to objects without listing. Equivalent to an ACL entry on an object with the READER role.
		 * - roles/storage.legacyObjectOwner — Read/write access to existing objects without listing. Equivalent to an ACL entry on an object with the OWNER role.
		 * - roles/storage.legacyBucketReader — Read access to buckets with object listing. Equivalent to an ACL entry on a bucket with the READER role.
		 * - roles/storage.legacyBucketWriter — Read access to buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the WRITER role.
		 * - roles/storage.legacyBucketOwner — Read and write access to existing buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the OWNER role.
		 */
		role?: string | null;
	}


	/** A rewrite response. */
	export interface RewriteResponse {

		/** true if the copy is finished; otherwise, false if the copy is in progress. This property is always present in the response. */
		done?: boolean | null;

		/** The kind of item this is. */
		kind?: string | null;

		/** The total size of the object being copied in bytes. This property is always present in the response. */
		objectSize?: string | null;

		/** An object. */
		resource?: Object | null;

		/** A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy. */
		rewriteToken?: string | null;

		/** The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response. */
		totalBytesRewritten?: string | null;
	}


	/** A subscription to receive Google PubSub notifications. */
	export interface ServiceAccount {

		/** The ID of the notification. */
		email_address?: string | null;

		/** The kind of item this is. For notifications, this is always storage#notification. */
		kind?: string | null;
	}


	/** A storage.(buckets|objects).testIamPermissions response. */
	export interface TestIamPermissionsResponse {

		/** The kind of item this is. */
		kind?: string | null;

		/**
		 * The permissions held by the caller. Permissions are always of the format storage.resource.capability, where resource is one of buckets or objects. The supported permissions are as follows:
		 * - storage.buckets.delete — Delete bucket.
		 * - storage.buckets.get — Read bucket metadata.
		 * - storage.buckets.getIamPolicy — Read bucket IAM policy.
		 * - storage.buckets.create — Create bucket.
		 * - storage.buckets.list — List buckets.
		 * - storage.buckets.setIamPolicy — Update bucket IAM policy.
		 * - storage.buckets.update — Update bucket metadata.
		 * - storage.objects.delete — Delete object.
		 * - storage.objects.get — Read object data and metadata.
		 * - storage.objects.getIamPolicy — Read object IAM policy.
		 * - storage.objects.create — Create object.
		 * - storage.objects.list — List objects.
		 * - storage.objects.setIamPolicy — Update object IAM policy.
		 * - storage.objects.update — Update object metadata.
		 */
		permissions?: Array<string> | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of buckets for a given project.
		 * Get b
		 * @param {string} project A valid API project identifier.
		 * @param {number} maxResults Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @param {string} prefix Filter results to buckets whose names begin with this prefix.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request.
		 * @return {void} Successful response
		 */
		Storage_buckets_list(project: string, maxResults: number, pageToken: string, prefix: string, projection: Storage_buckets_listProjection, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b?project=' + (project == null ? '' : encodeURIComponent(project)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new bucket.
		 * Post b
		 * @param {string} project A valid API project identifier.
		 * @param {Storage_buckets_insertPredefinedAcl} predefinedAcl Apply a predefined set of access controls to this bucket.
		 * @param {Storage_buckets_insertPredefinedDefaultObjectAcl} predefinedDefaultObjectAcl Apply a predefined set of default object access controls to this bucket.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request.
		 * @return {void} Successful response
		 */
		Storage_buckets_insert(project: string, predefinedAcl: Storage_buckets_insertPredefinedAcl, predefinedDefaultObjectAcl: Storage_buckets_insertPredefinedDefaultObjectAcl, projection: Storage_buckets_listProjection, provisionalUserProject: string, userProject: string, requestBody: Bucket): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b?project=' + (project == null ? '' : encodeURIComponent(project)) + '&predefinedAcl=' + predefinedAcl + '&predefinedDefaultObjectAcl=' + predefinedDefaultObjectAcl + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes an empty bucket.
		 * Delete b/{bucket}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch If set, only deletes the bucket if its metageneration matches this value.
		 * @param {string} ifMetagenerationNotMatch If set, only deletes the bucket if its metageneration does not match this value.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_buckets_delete(bucket: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata for the specified bucket.
		 * Get b/{bucket}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_buckets_get(bucket: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, projection: Storage_buckets_listProjection, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
		 * Patch b/{bucket}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
		 * @param {Storage_buckets_patchPredefinedAcl} predefinedAcl Apply a predefined set of access controls to this bucket.
		 * @param {Storage_buckets_patchPredefinedDefaultObjectAcl} predefinedDefaultObjectAcl Apply a predefined set of default object access controls to this bucket.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to full.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_buckets_patch(bucket: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, predefinedAcl: Storage_buckets_patchPredefinedAcl, predefinedDefaultObjectAcl: Storage_buckets_patchPredefinedDefaultObjectAcl, projection: Storage_buckets_listProjection, provisionalUserProject: string, userProject: string, requestBody: Bucket): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&predefinedAcl=' + predefinedAcl + '&predefinedDefaultObjectAcl=' + predefinedDefaultObjectAcl + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
		 * Put b/{bucket}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
		 * @param {Storage_buckets_updatePredefinedAcl} predefinedAcl Apply a predefined set of access controls to this bucket.
		 * @param {Storage_buckets_updatePredefinedDefaultObjectAcl} predefinedDefaultObjectAcl Apply a predefined set of default object access controls to this bucket.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to full.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_buckets_update(bucket: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, predefinedAcl: Storage_buckets_updatePredefinedAcl, predefinedDefaultObjectAcl: Storage_buckets_updatePredefinedDefaultObjectAcl, projection: Storage_buckets_listProjection, provisionalUserProject: string, userProject: string, requestBody: Bucket): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&predefinedAcl=' + predefinedAcl + '&predefinedDefaultObjectAcl=' + predefinedDefaultObjectAcl + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves ACL entries on the specified bucket.
		 * Get b/{bucket}/acl
		 * @param {string} bucket Name of a bucket.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_bucketAccessControls_list(bucket: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new ACL entry on the specified bucket.
		 * Post b/{bucket}/acl
		 * @param {string} bucket Name of a bucket.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_bucketAccessControls_insert(bucket: string, provisionalUserProject: string, userProject: string, requestBody: BucketAccessControl): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes the ACL entry for the specified entity on the specified bucket.
		 * Delete b/{bucket}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_bucketAccessControls_delete(bucket: string, entity: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the ACL entry for the specified entity on the specified bucket.
		 * Get b/{bucket}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_bucketAccessControls_get(bucket: string, entity: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patches an ACL entry on the specified bucket.
		 * Patch b/{bucket}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_bucketAccessControls_patch(bucket: string, entity: string, provisionalUserProject: string, userProject: string, requestBody: BucketAccessControl): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an ACL entry on the specified bucket.
		 * Put b/{bucket}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_bucketAccessControls_update(bucket: string, entity: string, provisionalUserProject: string, userProject: string, requestBody: BucketAccessControl): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves default object ACL entries on the specified bucket.
		 * Get b/{bucket}/defaultObjectAcl
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch If present, only return default ACL listing if the bucket's current metageneration matches this value.
		 * @param {string} ifMetagenerationNotMatch If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_defaultObjectAccessControls_list(bucket: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new default object ACL entry on the specified bucket.
		 * Post b/{bucket}/defaultObjectAcl
		 * @param {string} bucket Name of a bucket.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_defaultObjectAccessControls_insert(bucket: string, provisionalUserProject: string, userProject: string, requestBody: ObjectAccessControl): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
		 * Delete b/{bucket}/defaultObjectAcl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_defaultObjectAccessControls_delete(bucket: string, entity: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the default object ACL entry for the specified entity on the specified bucket.
		 * Get b/{bucket}/defaultObjectAcl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_defaultObjectAccessControls_get(bucket: string, entity: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patches a default object ACL entry on the specified bucket.
		 * Patch b/{bucket}/defaultObjectAcl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_defaultObjectAccessControls_patch(bucket: string, entity: string, provisionalUserProject: string, userProject: string, requestBody: ObjectAccessControl): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a default object ACL entry on the specified bucket.
		 * Put b/{bucket}/defaultObjectAcl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_defaultObjectAccessControls_update(bucket: string, entity: string, provisionalUserProject: string, userProject: string, requestBody: ObjectAccessControl): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an IAM policy for the specified bucket.
		 * Get b/{bucket}/iam
		 * @param {string} bucket Name of a bucket.
		 * @param {number} optionsRequestedPolicyVersion The IAM policy format version to be returned. If the optionsRequestedPolicyVersion is for an older version that doesn't support part of the requested IAM policy, the request fails.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_buckets_getIamPolicy(bucket: string, optionsRequestedPolicyVersion: number, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/iam&optionsRequestedPolicyVersion=' + optionsRequestedPolicyVersion + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an IAM policy for the specified bucket.
		 * Put b/{bucket}/iam
		 * @param {string} bucket Name of a bucket.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_buckets_setIamPolicy(bucket: string, provisionalUserProject: string, userProject: string, requestBody: Policy): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/iam&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
		 * Get b/{bucket}/iam/testPermissions
		 * @param {string} bucket Name of a bucket.
		 * @param {Array<string>} permissions Permissions to test.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_buckets_testIamPermissions(bucket: string, permissions: Array<string>, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/iam/testPermissions&' + permissions.map(z => `permissions=${encodeURIComponent(z)}`).join('&') + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Locks retention policy on a bucket.
		 * Post b/{bucket}/lockRetentionPolicy
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether bucket's current metageneration matches the given value.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_buckets_lockRetentionPolicy(bucket: string, ifMetagenerationMatch: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/lockRetentionPolicy&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of notification subscriptions for a given bucket.
		 * Get b/{bucket}/notificationConfigs
		 * @param {string} bucket Name of a Google Cloud Storage bucket.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_notifications_list(bucket: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/notificationConfigs&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a notification subscription for a given bucket.
		 * Post b/{bucket}/notificationConfigs
		 * @param {string} bucket The parent bucket of the notification.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_notifications_insert(bucket: string, provisionalUserProject: string, userProject: string, requestBody: Notification): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/notificationConfigs&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes a notification subscription.
		 * Delete b/{bucket}/notificationConfigs/{notification}
		 * @param {string} bucket The parent bucket of the notification.
		 * @param {string} notification ID of the notification to delete.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_notifications_delete(bucket: string, notification: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/notificationConfigs/' + (notification == null ? '' : encodeURIComponent(notification)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * View a notification configuration.
		 * Get b/{bucket}/notificationConfigs/{notification}
		 * @param {string} bucket The parent bucket of the notification.
		 * @param {string} notification Notification ID
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_notifications_get(bucket: string, notification: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/notificationConfigs/' + (notification == null ? '' : encodeURIComponent(notification)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of objects matching the criteria.
		 * Get b/{bucket}/o
		 * @param {string} bucket Name of the bucket in which to look for objects.
		 * @param {string} delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
		 * @param {string} endOffset Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
		 * @param {boolean} includeTrailingDelimiter If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
		 * @param {number} maxResults Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @param {string} prefix Filter results to objects whose names begin with this prefix.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} startOffset Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @param {boolean} versions If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
		 * @return {void} Successful response
		 */
		Storage_objects_list(bucket: string, delimiter: string, endOffset: string, includeTrailingDelimiter: boolean, maxResults: number, pageToken: string, prefix: string, projection: Storage_buckets_listProjection, provisionalUserProject: string, startOffset: string, userProject: string, versions: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o&delimiter=' + (delimiter == null ? '' : encodeURIComponent(delimiter)) + '&endOffset=' + (endOffset == null ? '' : encodeURIComponent(endOffset)) + '&includeTrailingDelimiter=' + includeTrailingDelimiter + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&startOffset=' + (startOffset == null ? '' : encodeURIComponent(startOffset)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)) + '&versions=' + versions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Watch for changes on all objects in a bucket.
		 * Post b/{bucket}/o/watch
		 * @param {string} bucket Name of the bucket in which to look for objects.
		 * @param {string} delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
		 * @param {string} endOffset Filter results to objects whose names are lexicographically before endOffset. If startOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
		 * @param {boolean} includeTrailingDelimiter If true, objects that end in exactly one instance of delimiter will have their metadata included in items in addition to prefixes.
		 * @param {number} maxResults Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned than requested. The service will use this parameter or 1,000 items, whichever is smaller.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @param {string} prefix Filter results to objects whose names begin with this prefix.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} startOffset Filter results to objects whose names are lexicographically equal to or after startOffset. If endOffset is also set, the objects listed will have names between startOffset (inclusive) and endOffset (exclusive).
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @param {boolean} versions If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
		 * @return {void} Successful response
		 */
		Storage_objects_watchAll(bucket: string, delimiter: string, endOffset: string, includeTrailingDelimiter: boolean, maxResults: number, pageToken: string, prefix: string, projection: Storage_buckets_listProjection, provisionalUserProject: string, startOffset: string, userProject: string, versions: boolean, requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/watch&delimiter=' + (delimiter == null ? '' : encodeURIComponent(delimiter)) + '&endOffset=' + (endOffset == null ? '' : encodeURIComponent(endOffset)) + '&includeTrailingDelimiter=' + includeTrailingDelimiter + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&startOffset=' + (startOffset == null ? '' : encodeURIComponent(startOffset)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)) + '&versions=' + versions, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
		 * Delete b/{bucket}/o/{object}
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} generation If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_delete(bucket: string, _object: string, generation: string, ifGenerationMatch: string, ifGenerationNotMatch: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an object or its metadata.
		 * Get b/{bucket}/o/{object}
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_get(bucket: string, _object: string, generation: string, ifGenerationMatch: string, ifGenerationNotMatch: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, projection: Storage_buckets_listProjection, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patches an object's metadata.
		 * Patch b/{bucket}/o/{object}
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
		 * @param {Storage_objects_patchPredefinedAcl} predefinedAcl Apply a predefined set of access controls to this object.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to full.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request, for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_patch(bucket: string, _object: string, generation: string, ifGenerationMatch: string, ifGenerationNotMatch: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, predefinedAcl: Storage_objects_patchPredefinedAcl, projection: Storage_buckets_listProjection, provisionalUserProject: string, userProject: string, requestBody: Object): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&predefinedAcl=' + predefinedAcl + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an object's metadata.
		 * Put b/{bucket}/o/{object}
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
		 * @param {Storage_objects_updatePredefinedAcl} predefinedAcl Apply a predefined set of access controls to this object.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to full.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_update(bucket: string, _object: string, generation: string, ifGenerationMatch: string, ifGenerationNotMatch: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, predefinedAcl: Storage_objects_updatePredefinedAcl, projection: Storage_buckets_listProjection, provisionalUserProject: string, userProject: string, requestBody: Object): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&predefinedAcl=' + predefinedAcl + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves ACL entries on the specified object.
		 * Get b/{bucket}/o/{object}/acl
		 * @param {string} bucket Name of a bucket.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objectAccessControls_list(bucket: string, _object: string, generation: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}/acl&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new ACL entry on the specified object.
		 * Post b/{bucket}/o/{object}/acl
		 * @param {string} bucket Name of a bucket.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objectAccessControls_insert(bucket: string, _object: string, generation: string, provisionalUserProject: string, userProject: string, requestBody: ObjectAccessControl): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}/acl&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes the ACL entry for the specified entity on the specified object.
		 * Delete b/{bucket}/o/{object}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objectAccessControls_delete(bucket: string, _object: string, entity: string, generation: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the ACL entry for the specified entity on the specified object.
		 * Get b/{bucket}/o/{object}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objectAccessControls_get(bucket: string, _object: string, entity: string, generation: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patches an ACL entry on the specified object.
		 * Patch b/{bucket}/o/{object}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objectAccessControls_patch(bucket: string, _object: string, entity: string, generation: string, provisionalUserProject: string, userProject: string, requestBody: ObjectAccessControl): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an ACL entry on the specified object.
		 * Put b/{bucket}/o/{object}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objectAccessControls_update(bucket: string, _object: string, entity: string, generation: string, provisionalUserProject: string, userProject: string, requestBody: ObjectAccessControl): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an IAM policy for the specified object.
		 * Get b/{bucket}/o/{object}/iam
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_getIamPolicy(bucket: string, _object: string, generation: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}/iam&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an IAM policy for the specified object.
		 * Put b/{bucket}/o/{object}/iam
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_setIamPolicy(bucket: string, _object: string, generation: string, provisionalUserProject: string, userProject: string, requestBody: Policy): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}/iam&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tests a set of permissions on the given object to see which, if any, are held by the caller.
		 * Get b/{bucket}/o/{object}/iam/testPermissions
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} _object Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {Array<string>} permissions Permissions to test.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_testIamPermissions(bucket: string, _object: string, permissions: Array<string>, generation: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/{object}/iam/testPermissions&' + permissions.map(z => `permissions=${encodeURIComponent(z)}`).join('&') + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Concatenates a list of existing objects into a new object in the same bucket.
		 * Post b/{destinationBucket}/o/{destinationObject}/compose
		 * @param {string} destinationBucket Name of the bucket containing the source objects. The destination object is stored in this bucket.
		 * @param {string} destinationObject Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {Storage_objects_composeDestinationPredefinedAcl} destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @param {string} kmsKeyName Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_compose(destinationBucket: string, destinationObject: string, destinationPredefinedAcl: Storage_objects_composeDestinationPredefinedAcl, ifGenerationMatch: string, ifMetagenerationMatch: string, kmsKeyName: string, provisionalUserProject: string, userProject: string, requestBody: ComposeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b/' + (destinationBucket == null ? '' : encodeURIComponent(destinationBucket)) + '/o/' + (destinationObject == null ? '' : encodeURIComponent(destinationObject)) + '/compose&destinationPredefinedAcl=' + destinationPredefinedAcl + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&kmsKeyName=' + (kmsKeyName == null ? '' : encodeURIComponent(kmsKeyName)) + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies a source object to a destination object. Optionally overrides metadata.
		 * Post b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}
		 * @param {string} sourceBucket Name of the bucket in which to find the source object.
		 * @param {string} sourceObject Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} destinationBucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} destinationObject Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
		 * @param {string} destinationKmsKeyName Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
		 * @param {Storage_objects_copyDestinationPredefinedAcl} destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the destination object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
		 * @param {string} ifSourceGenerationMatch Makes the operation conditional on whether the source object's current generation matches the given value.
		 * @param {string} ifSourceGenerationNotMatch Makes the operation conditional on whether the source object's current generation does not match the given value.
		 * @param {string} ifSourceMetagenerationMatch Makes the operation conditional on whether the source object's current metageneration matches the given value.
		 * @param {string} ifSourceMetagenerationNotMatch Makes the operation conditional on whether the source object's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} sourceGeneration If present, selects a specific revision of the source object (as opposed to the latest version, the default).
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_copy(sourceBucket: string, sourceObject: string, destinationBucket: string, destinationObject: string, destinationKmsKeyName: string, destinationPredefinedAcl: Storage_objects_copyDestinationPredefinedAcl, ifGenerationMatch: string, ifGenerationNotMatch: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, ifSourceGenerationMatch: string, ifSourceGenerationNotMatch: string, ifSourceMetagenerationMatch: string, ifSourceMetagenerationNotMatch: string, projection: Storage_buckets_listProjection, provisionalUserProject: string, sourceGeneration: string, userProject: string, requestBody: Object): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b/' + (sourceBucket == null ? '' : encodeURIComponent(sourceBucket)) + '/o/' + (sourceObject == null ? '' : encodeURIComponent(sourceObject)) + '/copyTo/b/' + (destinationBucket == null ? '' : encodeURIComponent(destinationBucket)) + '/o/' + (destinationObject == null ? '' : encodeURIComponent(destinationObject)) + '&destinationKmsKeyName=' + (destinationKmsKeyName == null ? '' : encodeURIComponent(destinationKmsKeyName)) + '&destinationPredefinedAcl=' + destinationPredefinedAcl + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&ifSourceGenerationMatch=' + (ifSourceGenerationMatch == null ? '' : encodeURIComponent(ifSourceGenerationMatch)) + '&ifSourceGenerationNotMatch=' + (ifSourceGenerationNotMatch == null ? '' : encodeURIComponent(ifSourceGenerationNotMatch)) + '&ifSourceMetagenerationMatch=' + (ifSourceMetagenerationMatch == null ? '' : encodeURIComponent(ifSourceMetagenerationMatch)) + '&ifSourceMetagenerationNotMatch=' + (ifSourceMetagenerationNotMatch == null ? '' : encodeURIComponent(ifSourceMetagenerationNotMatch)) + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&sourceGeneration=' + (sourceGeneration == null ? '' : encodeURIComponent(sourceGeneration)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rewrites a source object to a destination object. Optionally overrides metadata.
		 * Post b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}
		 * @param {string} sourceBucket Name of the bucket in which to find the source object.
		 * @param {string} sourceObject Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} destinationBucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
		 * @param {string} destinationObject Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
		 * @param {string} destinationKmsKeyName Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
		 * @param {Storage_objects_rewriteDestinationPredefinedAcl} destinationPredefinedAcl Apply a predefined set of access controls to the destination object.
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the destination object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
		 * @param {string} ifSourceGenerationMatch Makes the operation conditional on whether the source object's current generation matches the given value.
		 * @param {string} ifSourceGenerationNotMatch Makes the operation conditional on whether the source object's current generation does not match the given value.
		 * @param {string} ifSourceMetagenerationMatch Makes the operation conditional on whether the source object's current metageneration matches the given value.
		 * @param {string} ifSourceMetagenerationNotMatch Makes the operation conditional on whether the source object's current metageneration does not match the given value.
		 * @param {string} maxBytesRewrittenPerCall The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} rewriteToken Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
		 * @param {string} sourceGeneration If present, selects a specific revision of the source object (as opposed to the latest version, the default).
		 * @param {string} userProject The project to be billed for this request. Required for Requester Pays buckets.
		 * @return {void} Successful response
		 */
		Storage_objects_rewrite(sourceBucket: string, sourceObject: string, destinationBucket: string, destinationObject: string, destinationKmsKeyName: string, destinationPredefinedAcl: Storage_objects_rewriteDestinationPredefinedAcl, ifGenerationMatch: string, ifGenerationNotMatch: string, ifMetagenerationMatch: string, ifMetagenerationNotMatch: string, ifSourceGenerationMatch: string, ifSourceGenerationNotMatch: string, ifSourceMetagenerationMatch: string, ifSourceMetagenerationNotMatch: string, maxBytesRewrittenPerCall: string, projection: Storage_buckets_listProjection, provisionalUserProject: string, rewriteToken: string, sourceGeneration: string, userProject: string, requestBody: Object): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'b/' + (sourceBucket == null ? '' : encodeURIComponent(sourceBucket)) + '/o/' + (sourceObject == null ? '' : encodeURIComponent(sourceObject)) + '/rewriteTo/b/' + (destinationBucket == null ? '' : encodeURIComponent(destinationBucket)) + '/o/' + (destinationObject == null ? '' : encodeURIComponent(destinationObject)) + '&destinationKmsKeyName=' + (destinationKmsKeyName == null ? '' : encodeURIComponent(destinationKmsKeyName)) + '&destinationPredefinedAcl=' + destinationPredefinedAcl + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&ifSourceGenerationMatch=' + (ifSourceGenerationMatch == null ? '' : encodeURIComponent(ifSourceGenerationMatch)) + '&ifSourceGenerationNotMatch=' + (ifSourceGenerationNotMatch == null ? '' : encodeURIComponent(ifSourceGenerationNotMatch)) + '&ifSourceMetagenerationMatch=' + (ifSourceMetagenerationMatch == null ? '' : encodeURIComponent(ifSourceMetagenerationMatch)) + '&ifSourceMetagenerationNotMatch=' + (ifSourceMetagenerationNotMatch == null ? '' : encodeURIComponent(ifSourceMetagenerationNotMatch)) + '&maxBytesRewrittenPerCall=' + (maxBytesRewrittenPerCall == null ? '' : encodeURIComponent(maxBytesRewrittenPerCall)) + '&projection=' + projection + '&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&rewriteToken=' + (rewriteToken == null ? '' : encodeURIComponent(rewriteToken)) + '&sourceGeneration=' + (sourceGeneration == null ? '' : encodeURIComponent(sourceGeneration)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop watching resources through this channel
		 * Post channels/stop
		 * @return {void} Successful response
		 */
		Storage_channels_stop(requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of HMAC keys matching the criteria.
		 * Get projects/{projectId}/hmacKeys
		 * @param {string} projectId Name of the project in which to look for HMAC keys.
		 * @param {number} maxResults Maximum number of items to return in a single page of responses. The service uses this parameter or 250 items, whichever is smaller. The max number of items per page will also be limited by the number of distinct service accounts in the response. If the number of service accounts in a single response is too high, the page will truncated and a next page token will be returned.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @param {string} serviceAccountEmail If present, only keys for the given service account are returned.
		 * @param {boolean} showDeletedKeys Whether or not to show keys in the DELETED state.
		 * @param {string} userProject The project to be billed for this request.
		 * @return {void} Successful response
		 */
		Storage_projects_hmacKeys_list(projectId: string, maxResults: number, pageToken: string, serviceAccountEmail: string, showDeletedKeys: boolean, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/hmacKeys&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&serviceAccountEmail=' + (serviceAccountEmail == null ? '' : encodeURIComponent(serviceAccountEmail)) + '&showDeletedKeys=' + showDeletedKeys + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new HMAC key for the specified service account.
		 * Post projects/{projectId}/hmacKeys
		 * @param {string} projectId Project ID owning the service account.
		 * @param {string} serviceAccountEmail Email address of the service account.
		 * @param {string} userProject The project to be billed for this request.
		 * @return {void} Successful response
		 */
		Storage_projects_hmacKeys_create(projectId: string, serviceAccountEmail: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/hmacKeys&serviceAccountEmail=' + (serviceAccountEmail == null ? '' : encodeURIComponent(serviceAccountEmail)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an HMAC key.
		 * Delete projects/{projectId}/hmacKeys/{accessId}
		 * @param {string} projectId Project ID owning the requested key
		 * @param {string} accessId Name of the HMAC key to be deleted.
		 * @param {string} userProject The project to be billed for this request.
		 * @return {void} Successful response
		 */
		Storage_projects_hmacKeys_delete(projectId: string, accessId: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/hmacKeys/' + (accessId == null ? '' : encodeURIComponent(accessId)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an HMAC key's metadata
		 * Get projects/{projectId}/hmacKeys/{accessId}
		 * @param {string} projectId Project ID owning the service account of the requested key.
		 * @param {string} accessId Name of the HMAC key.
		 * @param {string} userProject The project to be billed for this request.
		 * @return {void} Successful response
		 */
		Storage_projects_hmacKeys_get(projectId: string, accessId: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/hmacKeys/' + (accessId == null ? '' : encodeURIComponent(accessId)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
		 * Put projects/{projectId}/hmacKeys/{accessId}
		 * @param {string} projectId Project ID owning the service account of the updated key.
		 * @param {string} accessId Name of the HMAC key being updated.
		 * @param {string} userProject The project to be billed for this request.
		 * @return {void} Successful response
		 */
		Storage_projects_hmacKeys_update(projectId: string, accessId: string, userProject: string, requestBody: HmacKeyMetadata): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/hmacKeys/' + (accessId == null ? '' : encodeURIComponent(accessId)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the email address of this project's Google Cloud Storage service account.
		 * Get projects/{projectId}/serviceAccount
		 * @param {string} projectId Project ID
		 * @param {string} provisionalUserProject The project to be billed for this request if the target bucket is requester-pays bucket.
		 * @param {string} userProject The project to be billed for this request.
		 * @return {void} Successful response
		 */
		Storage_projects_serviceAccount_get(projectId: string, provisionalUserProject: string, userProject: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/serviceAccount&provisionalUserProject=' + (provisionalUserProject == null ? '' : encodeURIComponent(provisionalUserProject)) + '&userProject=' + (userProject == null ? '' : encodeURIComponent(userProject)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Storage_buckets_listProjection { full = 0, noAcl = 1 }

	export enum Storage_buckets_insertPredefinedAcl { authenticatedRead = 0, _private = 1, projectPrivate = 2, publicRead = 3, publicReadWrite = 4 }

	export enum Storage_buckets_insertPredefinedDefaultObjectAcl { authenticatedRead = 0, bucketOwnerFullControl = 1, bucketOwnerRead = 2, _private = 3, projectPrivate = 4, publicRead = 5 }

	export enum Storage_buckets_patchPredefinedAcl { authenticatedRead = 0, _private = 1, projectPrivate = 2, publicRead = 3, publicReadWrite = 4 }

	export enum Storage_buckets_patchPredefinedDefaultObjectAcl { authenticatedRead = 0, bucketOwnerFullControl = 1, bucketOwnerRead = 2, _private = 3, projectPrivate = 4, publicRead = 5 }

	export enum Storage_buckets_updatePredefinedAcl { authenticatedRead = 0, _private = 1, projectPrivate = 2, publicRead = 3, publicReadWrite = 4 }

	export enum Storage_buckets_updatePredefinedDefaultObjectAcl { authenticatedRead = 0, bucketOwnerFullControl = 1, bucketOwnerRead = 2, _private = 3, projectPrivate = 4, publicRead = 5 }

	export enum Storage_objects_insertPredefinedAcl { authenticatedRead = 0, bucketOwnerFullControl = 1, bucketOwnerRead = 2, _private = 3, projectPrivate = 4, publicRead = 5 }

	export enum Storage_objects_patchPredefinedAcl { authenticatedRead = 0, bucketOwnerFullControl = 1, bucketOwnerRead = 2, _private = 3, projectPrivate = 4, publicRead = 5 }

	export enum Storage_objects_updatePredefinedAcl { authenticatedRead = 0, bucketOwnerFullControl = 1, bucketOwnerRead = 2, _private = 3, projectPrivate = 4, publicRead = 5 }

	export enum Storage_objects_composeDestinationPredefinedAcl { authenticatedRead = 0, bucketOwnerFullControl = 1, bucketOwnerRead = 2, _private = 3, projectPrivate = 4, publicRead = 5 }

	export enum Storage_objects_copyDestinationPredefinedAcl { authenticatedRead = 0, bucketOwnerFullControl = 1, bucketOwnerRead = 2, _private = 3, projectPrivate = 4, publicRead = 5 }

	export enum Storage_objects_rewriteDestinationPredefinedAcl { authenticatedRead = 0, bucketOwnerFullControl = 1, bucketOwnerRead = 2, _private = 3, projectPrivate = 4, publicRead = 5 }

}

