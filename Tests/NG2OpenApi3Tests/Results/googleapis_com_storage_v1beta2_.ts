import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A bucket. */
	export interface Bucket {

		/** Access controls on the bucket. */
		acl?: Array<BucketAccessControl>;

		/** The bucket's Cross-Origin Resource Sharing (CORS) configuration. */
		BucketCors?: Array<BucketCors>;

		/** Default access controls to apply to new objects when no ACL is provided. */
		defaultObjectAcl?: Array<ObjectAccessControl>;

		/** HTTP 1.1 Entity tag for the bucket. */
		etag?: string | null;

		/** The ID of the bucket. */
		id?: string | null;

		/** The kind of item this is. For buckets, this is always storage#bucket. */
		kind?: string | null;

		/** The bucket's lifecycle configuration. See object lifecycle management for more information. */
		lifecycle?: BucketLifecycle;

		/** The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Typical values are US and EU. Defaults to US. See the developer's guide for the authoritative list. */
		location?: string | null;

		/** The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs. */
		logging?: BucketLogging;

		/** The metadata generation of this bucket. */
		metageneration?: string | null;

		/** The name of the bucket. */
		name?: string | null;

		/** The owner of the bucket. This is always the project team's owner group. */
		owner?: BucketOwner;

		/** The URI of this bucket. */
		selfLink?: string | null;

		/** The bucket's storage class. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Typical values are STANDARD and DURABLE_REDUCED_AVAILABILITY. Defaults to STANDARD. See the developer's guide for the authoritative list. */
		storageClass?: string | null;

		/** Creation time of the bucket in RFC 3339 format. */
		timeCreated?: Date | null;

		/** The bucket's versioning configuration. */
		versioning?: BucketVersioning;

		/** The bucket's website configuration. */
		website?: BucketWebsite;
	}

	/** A bucket. */
	export interface BucketFormProperties {

		/** HTTP 1.1 Entity tag for the bucket. */
		etag: FormControl<string | null | undefined>,

		/** The ID of the bucket. */
		id: FormControl<string | null | undefined>,

		/** The kind of item this is. For buckets, this is always storage#bucket. */
		kind: FormControl<string | null | undefined>,

		/** The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Typical values are US and EU. Defaults to US. See the developer's guide for the authoritative list. */
		location: FormControl<string | null | undefined>,

		/** The metadata generation of this bucket. */
		metageneration: FormControl<string | null | undefined>,

		/** The name of the bucket. */
		name: FormControl<string | null | undefined>,

		/** The URI of this bucket. */
		selfLink: FormControl<string | null | undefined>,

		/** The bucket's storage class. This defines how objects in the bucket are stored and determines the SLA and the cost of storage. Typical values are STANDARD and DURABLE_REDUCED_AVAILABILITY. Defaults to STANDARD. See the developer's guide for the authoritative list. */
		storageClass: FormControl<string | null | undefined>,

		/** Creation time of the bucket in RFC 3339 format. */
		timeCreated: FormControl<Date | null | undefined>,
	}
	export function CreateBucketFormGroup() {
		return new FormGroup<BucketFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			metageneration: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			storageClass: new FormControl<string | null | undefined>(undefined),
			timeCreated: new FormControl<Date | null | undefined>(undefined),
		});

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

		/** The access permission for the entity. Can be READER, WRITER, or OWNER. */
		role?: string | null;

		/** The link to this access-control entry. */
		selfLink?: string | null;
	}

	/** An access-control entry. */
	export interface BucketAccessControlFormProperties {

		/** The name of the bucket. */
		bucket: FormControl<string | null | undefined>,

		/** The domain associated with the entity, if any. */
		domain: FormControl<string | null | undefined>,

		/** The email address associated with the entity, if any. */
		email: FormControl<string | null | undefined>,

		/**
		 * The entity holding the permission, in one of the following forms:
		 * - user-userId
		 * - user-email
		 * - group-groupId
		 * - group-email
		 * - domain-domain
		 * - allUsers
		 * - allAuthenticatedUsers Examples:
		 * - The user liz@example.com would be user-liz@example.com.
		 * - The group example@googlegroups.com would be group-example@googlegroups.com.
		 * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
		 */
		entity: FormControl<string | null | undefined>,

		/** The ID for the entity, if any. */
		entityId: FormControl<string | null | undefined>,

		/** HTTP 1.1 Entity tag for the access-control entry. */
		etag: FormControl<string | null | undefined>,

		/** The ID of the access-control entry. */
		id: FormControl<string | null | undefined>,

		/** The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl. */
		kind: FormControl<string | null | undefined>,

		/** The access permission for the entity. Can be READER, WRITER, or OWNER. */
		role: FormControl<string | null | undefined>,

		/** The link to this access-control entry. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateBucketAccessControlFormGroup() {
		return new FormGroup<BucketAccessControlFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			entity: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketCors {

		/** The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses. */
		maxAgeSeconds?: number | null;

		/** The list of HTTP methods on which to include CORS response headers: GET, OPTIONS, POST, etc. Note, "*" is permitted in the list of methods, and means "any method". */
		method?: Array<string>;

		/** The list of Origins eligible to receive CORS response headers. Note: "*" is permitted in the list of origins, and means "any Origin". */
		origin?: Array<string>;

		/** The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains. */
		responseHeader?: Array<string>;
	}
	export interface BucketCorsFormProperties {

		/** The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses. */
		maxAgeSeconds: FormControl<number | null | undefined>,
	}
	export function CreateBucketCorsFormGroup() {
		return new FormGroup<BucketCorsFormProperties>({
			maxAgeSeconds: new FormControl<number | null | undefined>(undefined),
		});

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

		/** The content generation of the object. */
		generation?: string | null;

		/** The ID of the access-control entry. */
		id?: string | null;

		/** The kind of item this is. For object access control entries, this is always storage#objectAccessControl. */
		kind?: string | null;

		/** The name of the object. */
		object?: string | null;

		/** The access permission for the entity. Can be READER or OWNER. */
		role?: string | null;

		/** The link to this access-control entry. */
		selfLink?: string | null;
	}

	/** An access-control entry. */
	export interface ObjectAccessControlFormProperties {

		/** The name of the bucket. */
		bucket: FormControl<string | null | undefined>,

		/** The domain associated with the entity, if any. */
		domain: FormControl<string | null | undefined>,

		/** The email address associated with the entity, if any. */
		email: FormControl<string | null | undefined>,

		/**
		 * The entity holding the permission, in one of the following forms:
		 * - user-userId
		 * - user-email
		 * - group-groupId
		 * - group-email
		 * - domain-domain
		 * - allUsers
		 * - allAuthenticatedUsers Examples:
		 * - The user liz@example.com would be user-liz@example.com.
		 * - The group example@googlegroups.com would be group-example@googlegroups.com.
		 * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
		 */
		entity: FormControl<string | null | undefined>,

		/** The ID for the entity, if any. */
		entityId: FormControl<string | null | undefined>,

		/** HTTP 1.1 Entity tag for the access-control entry. */
		etag: FormControl<string | null | undefined>,

		/** The content generation of the object. */
		generation: FormControl<string | null | undefined>,

		/** The ID of the access-control entry. */
		id: FormControl<string | null | undefined>,

		/** The kind of item this is. For object access control entries, this is always storage#objectAccessControl. */
		kind: FormControl<string | null | undefined>,

		/** The name of the object. */
		object: FormControl<string | null | undefined>,

		/** The access permission for the entity. Can be READER or OWNER. */
		role: FormControl<string | null | undefined>,

		/** The link to this access-control entry. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateObjectAccessControlFormGroup() {
		return new FormGroup<ObjectAccessControlFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			entity: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketLifecycle {

		/** A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken. */
		BucketLifecycleRule?: Array<BucketLifecycleRule>;
	}
	export interface BucketLifecycleFormProperties {
	}
	export function CreateBucketLifecycleFormGroup() {
		return new FormGroup<BucketLifecycleFormProperties>({
		});

	}

	export interface BucketLifecycleRule {

		/** The action to take. */
		action?: BucketLifecycleRuleAction;

		/** The condition(s) under which the action will be taken. */
		condition?: BucketLifecycleRuleCondition;
	}
	export interface BucketLifecycleRuleFormProperties {
	}
	export function CreateBucketLifecycleRuleFormGroup() {
		return new FormGroup<BucketLifecycleRuleFormProperties>({
		});

	}

	export interface BucketLifecycleRuleAction {

		/** Type of the action. Currently only Delete is supported. */
		type?: string | null;
	}
	export interface BucketLifecycleRuleActionFormProperties {

		/** Type of the action. Currently only Delete is supported. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBucketLifecycleRuleActionFormGroup() {
		return new FormGroup<BucketLifecycleRuleActionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketLifecycleRuleCondition {

		/** Age of an object (in days). This condition is satisfied when an object reaches the specified age. */
		age?: number | null;

		/** A date in RFC 3339 format with only the date part, e.g. "2013-01-15". This condition is satisfied when an object is created before midnight of the specified date in UTC. */
		createdBefore?: Date | null;

		/** Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects. */
		isLive?: boolean | null;

		/** Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object. */
		numNewerVersions?: number | null;
	}
	export interface BucketLifecycleRuleConditionFormProperties {

		/** Age of an object (in days). This condition is satisfied when an object reaches the specified age. */
		age: FormControl<number | null | undefined>,

		/** A date in RFC 3339 format with only the date part, e.g. "2013-01-15". This condition is satisfied when an object is created before midnight of the specified date in UTC. */
		createdBefore: FormControl<Date | null | undefined>,

		/** Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects. */
		isLive: FormControl<boolean | null | undefined>,

		/** Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version) newer than this version of the object. */
		numNewerVersions: FormControl<number | null | undefined>,
	}
	export function CreateBucketLifecycleRuleConditionFormGroup() {
		return new FormGroup<BucketLifecycleRuleConditionFormProperties>({
			age: new FormControl<number | null | undefined>(undefined),
			createdBefore: new FormControl<Date | null | undefined>(undefined),
			isLive: new FormControl<boolean | null | undefined>(undefined),
			numNewerVersions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BucketLogging {

		/** The destination bucket where the current bucket's logs should be placed. */
		logBucket?: string | null;

		/** A prefix for log object names. */
		logObjectPrefix?: string | null;
	}
	export interface BucketLoggingFormProperties {

		/** The destination bucket where the current bucket's logs should be placed. */
		logBucket: FormControl<string | null | undefined>,

		/** A prefix for log object names. */
		logObjectPrefix: FormControl<string | null | undefined>,
	}
	export function CreateBucketLoggingFormGroup() {
		return new FormGroup<BucketLoggingFormProperties>({
			logBucket: new FormControl<string | null | undefined>(undefined),
			logObjectPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketOwner {

		/** The entity, in the form group-groupId. */
		entity?: string | null;

		/** The ID for the entity. */
		entityId?: string | null;
	}
	export interface BucketOwnerFormProperties {

		/** The entity, in the form group-groupId. */
		entity: FormControl<string | null | undefined>,

		/** The ID for the entity. */
		entityId: FormControl<string | null | undefined>,
	}
	export function CreateBucketOwnerFormGroup() {
		return new FormGroup<BucketOwnerFormProperties>({
			entity: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BucketVersioning {

		/** While set to true, versioning is fully enabled for this bucket. */
		enabled?: boolean | null;
	}
	export interface BucketVersioningFormProperties {

		/** While set to true, versioning is fully enabled for this bucket. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateBucketVersioningFormGroup() {
		return new FormGroup<BucketVersioningFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BucketWebsite {

		/** Behaves as the bucket's directory index where missing objects are treated as potential directories. */
		mainPageSuffix?: string | null;

		/** The custom object to return when a requested resource is not found. */
		notFoundPage?: string | null;
	}
	export interface BucketWebsiteFormProperties {

		/** Behaves as the bucket's directory index where missing objects are treated as potential directories. */
		mainPageSuffix: FormControl<string | null | undefined>,

		/** The custom object to return when a requested resource is not found. */
		notFoundPage: FormControl<string | null | undefined>,
	}
	export function CreateBucketWebsiteFormGroup() {
		return new FormGroup<BucketWebsiteFormProperties>({
			mainPageSuffix: new FormControl<string | null | undefined>(undefined),
			notFoundPage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An access-control list. */
	export interface BucketAccessControls {

		/** The list of items. */
		items?: Array<BucketAccessControl>;

		/** The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls. */
		kind?: string | null;
	}

	/** An access-control list. */
	export interface BucketAccessControlsFormProperties {

		/** The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBucketAccessControlsFormGroup() {
		return new FormGroup<BucketAccessControlsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of buckets. */
	export interface Buckets {

		/** The list of items. */
		items?: Array<Bucket>;

		/** The kind of item this is. For lists of buckets, this is always storage#buckets. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;
	}

	/** A list of buckets. */
	export interface BucketsFormProperties {

		/** The kind of item this is. For lists of buckets, this is always storage#buckets. */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBucketsFormGroup() {
		return new FormGroup<BucketsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

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
		params?: {[id: string]: string };

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

	/** An notification channel used to watch for resource changes. */
	export interface ChannelFormProperties {

		/** The address where notifications are delivered for this channel. */
		address: FormControl<string | null | undefined>,

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration: FormControl<string | null | undefined>,

		/** A UUID or similar unique string that identifies this channel. */
		id: FormControl<string | null | undefined>,

		/** Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel". */
		kind: FormControl<string | null | undefined>,

		/** Additional parameters controlling delivery channel behavior. Optional. */
		params: FormControl<{[id: string]: string } | null | undefined>,

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload: FormControl<boolean | null | undefined>,

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId: FormControl<string | null | undefined>,

		/** A version-specific identifier for the watched resource. */
		resourceUri: FormControl<string | null | undefined>,

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token: FormControl<string | null | undefined>,

		/** The type of delivery mechanism used for this channel. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			payload: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Compose request. */
	export interface ComposeRequest {

		/** An object. */
		destination?: Object;

		/** The kind of item this is. */
		kind?: string | null;

		/** The list of source objects that will be concatenated into a single object. */
		ComposeRequestSourceObjects?: Array<ComposeRequestSourceObjects>;
	}

	/** A Compose request. */
	export interface ComposeRequestFormProperties {

		/** The kind of item this is. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateComposeRequestFormGroup() {
		return new FormGroup<ComposeRequestFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object. */
	export interface Object {

		/** Access controls on the object. */
		acl?: Array<ObjectAccessControl>;

		/** The bucket containing this object. */
		bucket?: string | null;

		/** Cache-Control directive for the object data. */
		cacheControl?: string | null;

		/** Number of underlying components that make up this object. Components are accumulated by compose operations and are limited to a count of 32. */
		componentCount?: number | null;

		/** Content-Disposition of the object data. */
		contentDisposition?: string | null;

		/** Content-Encoding of the object data. */
		contentEncoding?: string | null;

		/** Content-Language of the object data. */
		contentLanguage?: string | null;

		/** Content-Type of the object data. */
		contentType?: string | null;

		/** CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64. */
		crc32c?: string | null;

		/** HTTP 1.1 Entity tag for the object. */
		etag?: string | null;

		/** The content generation of this object. Used for object versioning. */
		generation?: string | null;

		/** The ID of the object. */
		id?: string | null;

		/** The kind of item this is. For objects, this is always storage#object. */
		kind?: string | null;

		/** MD5 hash of the data; encoded using base64. */
		md5Hash?: string | null;

		/** Media download link. */
		mediaLink?: string | null;

		/** User-provided metadata, in key/value pairs. */
		metadata?: {[id: string]: string };

		/** The generation of the metadata for this object at this generation. Used for metadata versioning. Has no meaning outside of the context of this generation. */
		metageneration?: string | null;

		/** The name of this object. Required if not specified by URL parameter. */
		name?: string | null;

		/** The owner of the object. This will always be the uploader of the object. */
		owner?: ObjectOwner;

		/** The link to this object. */
		selfLink?: string | null;

		/** Content-Length of the data in bytes. */
		size?: string | null;

		/** Storage class of the object. */
		storageClass?: string | null;

		/** Deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted. */
		timeDeleted?: Date | null;

		/** Modification time of the object metadata in RFC 3339 format. */
		updated?: Date | null;
	}

	/** An object. */
	export interface ObjectFormProperties {

		/** The bucket containing this object. */
		bucket: FormControl<string | null | undefined>,

		/** Cache-Control directive for the object data. */
		cacheControl: FormControl<string | null | undefined>,

		/** Number of underlying components that make up this object. Components are accumulated by compose operations and are limited to a count of 32. */
		componentCount: FormControl<number | null | undefined>,

		/** Content-Disposition of the object data. */
		contentDisposition: FormControl<string | null | undefined>,

		/** Content-Encoding of the object data. */
		contentEncoding: FormControl<string | null | undefined>,

		/** Content-Language of the object data. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Content-Type of the object data. */
		contentType: FormControl<string | null | undefined>,

		/** CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64. */
		crc32c: FormControl<string | null | undefined>,

		/** HTTP 1.1 Entity tag for the object. */
		etag: FormControl<string | null | undefined>,

		/** The content generation of this object. Used for object versioning. */
		generation: FormControl<string | null | undefined>,

		/** The ID of the object. */
		id: FormControl<string | null | undefined>,

		/** The kind of item this is. For objects, this is always storage#object. */
		kind: FormControl<string | null | undefined>,

		/** MD5 hash of the data; encoded using base64. */
		md5Hash: FormControl<string | null | undefined>,

		/** Media download link. */
		mediaLink: FormControl<string | null | undefined>,

		/** User-provided metadata, in key/value pairs. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The generation of the metadata for this object at this generation. Used for metadata versioning. Has no meaning outside of the context of this generation. */
		metageneration: FormControl<string | null | undefined>,

		/** The name of this object. Required if not specified by URL parameter. */
		name: FormControl<string | null | undefined>,

		/** The link to this object. */
		selfLink: FormControl<string | null | undefined>,

		/** Content-Length of the data in bytes. */
		size: FormControl<string | null | undefined>,

		/** Storage class of the object. */
		storageClass: FormControl<string | null | undefined>,

		/** Deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted. */
		timeDeleted: FormControl<Date | null | undefined>,

		/** Modification time of the object metadata in RFC 3339 format. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateObjectFormGroup() {
		return new FormGroup<ObjectFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			cacheControl: new FormControl<string | null | undefined>(undefined),
			componentCount: new FormControl<number | null | undefined>(undefined),
			contentDisposition: new FormControl<string | null | undefined>(undefined),
			contentEncoding: new FormControl<string | null | undefined>(undefined),
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			crc32c: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			mediaLink: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			metageneration: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			storageClass: new FormControl<string | null | undefined>(undefined),
			timeDeleted: new FormControl<Date | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ObjectOwner {

		/** The entity, in the form user-userId. */
		entity?: string | null;

		/** The ID for the entity. */
		entityId?: string | null;
	}
	export interface ObjectOwnerFormProperties {

		/** The entity, in the form user-userId. */
		entity: FormControl<string | null | undefined>,

		/** The ID for the entity. */
		entityId: FormControl<string | null | undefined>,
	}
	export function CreateObjectOwnerFormGroup() {
		return new FormGroup<ObjectOwnerFormProperties>({
			entity: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComposeRequestSourceObjects {

		/** The generation of this object to use as the source. */
		generation?: string | null;

		/** The source object's name. All source objects must reside in the same bucket. */
		name?: string | null;

		/** Conditions that must be met for this operation to execute. */
		objectPreconditions?: ComposeRequestSourceObjectsObjectPreconditions;
	}
	export interface ComposeRequestSourceObjectsFormProperties {

		/** The generation of this object to use as the source. */
		generation: FormControl<string | null | undefined>,

		/** The source object's name. All source objects must reside in the same bucket. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateComposeRequestSourceObjectsFormGroup() {
		return new FormGroup<ComposeRequestSourceObjectsFormProperties>({
			generation: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComposeRequestSourceObjectsObjectPreconditions {

		/** Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both specified, they must be the same value or the call will fail. */
		ifGenerationMatch?: string | null;
	}
	export interface ComposeRequestSourceObjectsObjectPreconditionsFormProperties {

		/** Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both specified, they must be the same value or the call will fail. */
		ifGenerationMatch: FormControl<string | null | undefined>,
	}
	export function CreateComposeRequestSourceObjectsObjectPreconditionsFormGroup() {
		return new FormGroup<ComposeRequestSourceObjectsObjectPreconditionsFormProperties>({
			ifGenerationMatch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An access-control list. */
	export interface ObjectAccessControls {

		/** The list of items. */
		items?: Array<string>;

		/** The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls. */
		kind?: string | null;
	}

	/** An access-control list. */
	export interface ObjectAccessControlsFormProperties {

		/** The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateObjectAccessControlsFormGroup() {
		return new FormGroup<ObjectAccessControlsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of objects. */
	export interface Objects {

		/** The list of items. */
		items?: Array<Object>;

		/** The kind of item this is. For lists of objects, this is always storage#objects. */
		kind?: string | null;

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;

		/** The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter. */
		prefixes?: Array<string>;
	}

	/** A list of objects. */
	export interface ObjectsFormProperties {

		/** The kind of item this is. For lists of objects, this is always storage#objects. */
		kind: FormControl<string | null | undefined>,

		/** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateObjectsFormGroup() {
		return new FormGroup<ObjectsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of buckets for a given project.
		 * Get b
		 * @param {string} project A valid API project identifier.
		 * @param {number} maxResults Maximum number of buckets to return.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @return {Buckets} Successful response
		 */
		Storage_buckets_list(project: string, maxResults: number | null | undefined, pageToken: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined): Observable<Buckets> {
			return this.http.get<Buckets>(this.baseUri + 'b?project=' + (project == null ? '' : encodeURIComponent(project)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projection=' + projection, {});
		}

		/**
		 * Creates a new bucket.
		 * Post b
		 * @param {string} project A valid API project identifier.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
		 * @return {Bucket} Successful response
		 */
		Storage_buckets_insert(project: string, projection: Storage_buckets_listProjection | null | undefined, requestBody: Bucket): Observable<Bucket> {
			return this.http.post<Bucket>(this.baseUri + 'b?project=' + (project == null ? '' : encodeURIComponent(project)) + '&projection=' + projection, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes an empty bucket.
		 * Delete b/{bucket}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
		 * @return {void} Successful response
		 */
		Storage_buckets_delete(bucket: string, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata for the specified bucket.
		 * Get b/{bucket}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @return {Bucket} Successful response
		 */
		Storage_buckets_get(bucket: string, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined): Observable<Bucket> {
			return this.http.get<Bucket>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&projection=' + projection, {});
		}

		/**
		 * Updates a bucket. This method supports patch semantics.
		 * Patch b/{bucket}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to full.
		 * @return {Bucket} Successful response
		 */
		Storage_buckets_patch(bucket: string, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined, requestBody: Bucket): Observable<Bucket> {
			return this.http.patch<Bucket>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&projection=' + projection, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a bucket.
		 * Put b/{bucket}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to full.
		 * @return {Bucket} Successful response
		 */
		Storage_buckets_update(bucket: string, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined, requestBody: Bucket): Observable<Bucket> {
			return this.http.put<Bucket>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&projection=' + projection, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves ACL entries on the specified bucket.
		 * Get b/{bucket}/acl
		 * @param {string} bucket Name of a bucket.
		 * @return {BucketAccessControls} Successful response
		 */
		Storage_bucketAccessControls_list(bucket: string): Observable<BucketAccessControls> {
			return this.http.get<BucketAccessControls>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl', {});
		}

		/**
		 * Creates a new ACL entry on the specified bucket.
		 * Post b/{bucket}/acl
		 * @param {string} bucket Name of a bucket.
		 * @return {BucketAccessControl} Successful response
		 */
		Storage_bucketAccessControls_insert(bucket: string, requestBody: BucketAccessControl): Observable<BucketAccessControl> {
			return this.http.post<BucketAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes the ACL entry for the specified entity on the specified bucket.
		 * Delete b/{bucket}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @return {void} Successful response
		 */
		Storage_bucketAccessControls_delete(bucket: string, entity: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the ACL entry for the specified entity on the specified bucket.
		 * Get b/{bucket}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @return {BucketAccessControl} Successful response
		 */
		Storage_bucketAccessControls_get(bucket: string, entity: string): Observable<BucketAccessControl> {
			return this.http.get<BucketAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)), {});
		}

		/**
		 * Updates an ACL entry on the specified bucket. This method supports patch semantics.
		 * Patch b/{bucket}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @return {BucketAccessControl} Successful response
		 */
		Storage_bucketAccessControls_patch(bucket: string, entity: string, requestBody: BucketAccessControl): Observable<BucketAccessControl> {
			return this.http.patch<BucketAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an ACL entry on the specified bucket.
		 * Put b/{bucket}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @return {BucketAccessControl} Successful response
		 */
		Storage_bucketAccessControls_update(bucket: string, entity: string, requestBody: BucketAccessControl): Observable<BucketAccessControl> {
			return this.http.put<BucketAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves default object ACL entries on the specified bucket.
		 * Get b/{bucket}/defaultObjectAcl
		 * @param {string} bucket Name of a bucket.
		 * @param {string} ifMetagenerationMatch If present, only return default ACL listing if the bucket's current metageneration matches this value.
		 * @param {string} ifMetagenerationNotMatch If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
		 * @return {ObjectAccessControls} Successful response
		 */
		Storage_defaultObjectAccessControls_list(bucket: string, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined): Observable<ObjectAccessControls> {
			return this.http.get<ObjectAccessControls>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)), {});
		}

		/**
		 * Creates a new default object ACL entry on the specified bucket.
		 * Post b/{bucket}/defaultObjectAcl
		 * @param {string} bucket Name of a bucket.
		 * @return {ObjectAccessControl} Successful response
		 */
		Storage_defaultObjectAccessControls_insert(bucket: string, requestBody: ObjectAccessControl): Observable<ObjectAccessControl> {
			return this.http.post<ObjectAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
		 * Delete b/{bucket}/defaultObjectAcl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @return {void} Successful response
		 */
		Storage_defaultObjectAccessControls_delete(bucket: string, entity: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl/' + (entity == null ? '' : encodeURIComponent(entity)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the default object ACL entry for the specified entity on the specified bucket.
		 * Get b/{bucket}/defaultObjectAcl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @return {ObjectAccessControl} Successful response
		 */
		Storage_defaultObjectAccessControls_get(bucket: string, entity: string): Observable<ObjectAccessControl> {
			return this.http.get<ObjectAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl/' + (entity == null ? '' : encodeURIComponent(entity)), {});
		}

		/**
		 * Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
		 * Patch b/{bucket}/defaultObjectAcl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @return {ObjectAccessControl} Successful response
		 */
		Storage_defaultObjectAccessControls_patch(bucket: string, entity: string, requestBody: ObjectAccessControl): Observable<ObjectAccessControl> {
			return this.http.patch<ObjectAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl/' + (entity == null ? '' : encodeURIComponent(entity)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a default object ACL entry on the specified bucket.
		 * Put b/{bucket}/defaultObjectAcl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @return {ObjectAccessControl} Successful response
		 */
		Storage_defaultObjectAccessControls_update(bucket: string, entity: string, requestBody: ObjectAccessControl): Observable<ObjectAccessControl> {
			return this.http.put<ObjectAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/defaultObjectAcl/' + (entity == null ? '' : encodeURIComponent(entity)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of objects matching the criteria.
		 * Get b/{bucket}/o
		 * @param {string} bucket Name of the bucket in which to look for objects.
		 * @param {string} delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
		 * @param {number} maxResults Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @param {string} prefix Filter results to objects whose names begin with this prefix.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @param {boolean} versions If true, lists all versions of a file as distinct results.
		 * @return {Objects} Successful response
		 */
		Storage_objects_list(bucket: string, delimiter: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, prefix: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined, versions: boolean | null | undefined): Observable<Objects> {
			return this.http.get<Objects>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o&delimiter=' + (delimiter == null ? '' : encodeURIComponent(delimiter)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&projection=' + projection + '&versions=' + versions, {});
		}

		/**
		 * Watch for changes on all objects in a bucket.
		 * Post b/{bucket}/o/watch
		 * @param {string} bucket Name of the bucket in which to look for objects.
		 * @param {string} delimiter Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
		 * @param {number} maxResults Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
		 * @param {string} pageToken A previously-returned page token representing part of the larger set of results to view.
		 * @param {string} prefix Filter results to objects whose names begin with this prefix.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @param {boolean} versions If true, lists all versions of a file as distinct results.
		 * @return {Channel} Successful response
		 */
		Storage_objects_watchAll(bucket: string, delimiter: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, prefix: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined, versions: boolean | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/watch&delimiter=' + (delimiter == null ? '' : encodeURIComponent(delimiter)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&projection=' + projection + '&versions=' + versions, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
		 * Delete b/{bucket}/o/{object}
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} object Name of the object.
		 * @param {string} generation If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
		 * @return {void} Successful response
		 */
		Storage_objects_delete(bucket: string, object: string, generation: string | null | undefined, ifGenerationMatch: string | null | undefined, ifGenerationNotMatch: string | null | undefined, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves objects or their associated metadata.
		 * Get b/{bucket}/o/{object}
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} object Name of the object.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's generation matches the given value.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the object's generation does not match the given value.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl.
		 * @return {Object} Successful response
		 */
		Storage_objects_get(bucket: string, object: string, generation: string | null | undefined, ifGenerationMatch: string | null | undefined, ifGenerationNotMatch: string | null | undefined, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined): Observable<Object> {
			return this.http.get<Object>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&projection=' + projection, {});
		}

		/**
		 * Updates a data blob's associated metadata. This method supports patch semantics.
		 * Patch b/{bucket}/o/{object}
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} object Name of the object.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to full.
		 * @return {Object} Successful response
		 */
		Storage_objects_patch(bucket: string, object: string, generation: string | null | undefined, ifGenerationMatch: string | null | undefined, ifGenerationNotMatch: string | null | undefined, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined, requestBody: Object): Observable<Object> {
			return this.http.patch<Object>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&projection=' + projection, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a data blob's associated metadata.
		 * Put b/{bucket}/o/{object}
		 * @param {string} bucket Name of the bucket in which the object resides.
		 * @param {string} object Name of the object.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the object's current generation does not match the given value.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the object's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to full.
		 * @return {Object} Successful response
		 */
		Storage_objects_update(bucket: string, object: string, generation: string | null | undefined, ifGenerationMatch: string | null | undefined, ifGenerationNotMatch: string | null | undefined, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined, requestBody: Object): Observable<Object> {
			return this.http.put<Object>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)) + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&projection=' + projection, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves ACL entries on the specified object.
		 * Get b/{bucket}/o/{object}/acl
		 * @param {string} bucket Name of a bucket.
		 * @param {string} object Name of the object.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @return {ObjectAccessControls} Successful response
		 */
		Storage_objectAccessControls_list(bucket: string, object: string, generation: string | null | undefined): Observable<ObjectAccessControls> {
			return this.http.get<ObjectAccessControls>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '/acl&generation=' + (generation == null ? '' : encodeURIComponent(generation)), {});
		}

		/**
		 * Creates a new ACL entry on the specified object.
		 * Post b/{bucket}/o/{object}/acl
		 * @param {string} bucket Name of a bucket.
		 * @param {string} object Name of the object.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @return {ObjectAccessControl} Successful response
		 */
		Storage_objectAccessControls_insert(bucket: string, object: string, generation: string | null | undefined, requestBody: ObjectAccessControl): Observable<ObjectAccessControl> {
			return this.http.post<ObjectAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '/acl&generation=' + (generation == null ? '' : encodeURIComponent(generation)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes the ACL entry for the specified entity on the specified object.
		 * Delete b/{bucket}/o/{object}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} object Name of the object.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @return {void} Successful response
		 */
		Storage_objectAccessControls_delete(bucket: string, object: string, entity: string, generation: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the ACL entry for the specified entity on the specified object.
		 * Get b/{bucket}/o/{object}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} object Name of the object.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @return {ObjectAccessControl} Successful response
		 */
		Storage_objectAccessControls_get(bucket: string, object: string, entity: string, generation: string | null | undefined): Observable<ObjectAccessControl> {
			return this.http.get<ObjectAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)), {});
		}

		/**
		 * Updates an ACL entry on the specified object. This method supports patch semantics.
		 * Patch b/{bucket}/o/{object}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} object Name of the object.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @return {ObjectAccessControl} Successful response
		 */
		Storage_objectAccessControls_patch(bucket: string, object: string, entity: string, generation: string | null | undefined, requestBody: ObjectAccessControl): Observable<ObjectAccessControl> {
			return this.http.patch<ObjectAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an ACL entry on the specified object.
		 * Put b/{bucket}/o/{object}/acl/{entity}
		 * @param {string} bucket Name of a bucket.
		 * @param {string} object Name of the object.
		 * @param {string} entity The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
		 * @param {string} generation If present, selects a specific revision of this object (as opposed to the latest version, the default).
		 * @return {ObjectAccessControl} Successful response
		 */
		Storage_objectAccessControls_update(bucket: string, object: string, entity: string, generation: string | null | undefined, requestBody: ObjectAccessControl): Observable<ObjectAccessControl> {
			return this.http.put<ObjectAccessControl>(this.baseUri + 'b/' + (bucket == null ? '' : encodeURIComponent(bucket)) + '/o/' + (object == null ? '' : encodeURIComponent(object)) + '/acl/' + (entity == null ? '' : encodeURIComponent(entity)) + '&generation=' + (generation == null ? '' : encodeURIComponent(generation)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Concatenates a list of existing objects into a new object in the same bucket.
		 * Post b/{destinationBucket}/o/{destinationObject}/compose
		 * @param {string} destinationBucket Name of the bucket containing the source objects. The destination object is stored in this bucket.
		 * @param {string} destinationObject Name of the new object.
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the object's current generation matches the given value.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the object's current metageneration matches the given value.
		 * @return {Object} Successful response
		 */
		Storage_objects_compose(destinationBucket: string, destinationObject: string, ifGenerationMatch: string | null | undefined, ifMetagenerationMatch: string | null | undefined, requestBody: ComposeRequest): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'b/' + (destinationBucket == null ? '' : encodeURIComponent(destinationBucket)) + '/o/' + (destinationObject == null ? '' : encodeURIComponent(destinationObject)) + '/compose&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Copies an object to a destination in the same location. Optionally overrides metadata.
		 * Post b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}
		 * @param {string} sourceBucket Name of the bucket in which to find the source object.
		 * @param {string} sourceObject Name of the source object.
		 * @param {string} destinationBucket Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
		 * @param {string} destinationObject Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
		 * @param {string} ifGenerationMatch Makes the operation conditional on whether the destination object's current generation matches the given value.
		 * @param {string} ifGenerationNotMatch Makes the operation conditional on whether the destination object's current generation does not match the given value.
		 * @param {string} ifMetagenerationMatch Makes the operation conditional on whether the destination object's current metageneration matches the given value.
		 * @param {string} ifMetagenerationNotMatch Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
		 * @param {string} ifSourceGenerationMatch Makes the operation conditional on whether the source object's generation matches the given value.
		 * @param {string} ifSourceGenerationNotMatch Makes the operation conditional on whether the source object's generation does not match the given value.
		 * @param {string} ifSourceMetagenerationMatch Makes the operation conditional on whether the source object's current metageneration matches the given value.
		 * @param {string} ifSourceMetagenerationNotMatch Makes the operation conditional on whether the source object's current metageneration does not match the given value.
		 * @param {Storage_buckets_listProjection} projection Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
		 * @param {string} sourceGeneration If present, selects a specific revision of the source object (as opposed to the latest version, the default).
		 * @return {Object} Successful response
		 */
		Storage_objects_copy(sourceBucket: string, sourceObject: string, destinationBucket: string, destinationObject: string, ifGenerationMatch: string | null | undefined, ifGenerationNotMatch: string | null | undefined, ifMetagenerationMatch: string | null | undefined, ifMetagenerationNotMatch: string | null | undefined, ifSourceGenerationMatch: string | null | undefined, ifSourceGenerationNotMatch: string | null | undefined, ifSourceMetagenerationMatch: string | null | undefined, ifSourceMetagenerationNotMatch: string | null | undefined, projection: Storage_buckets_listProjection | null | undefined, sourceGeneration: string | null | undefined, requestBody: Object): Observable<Object> {
			return this.http.post<Object>(this.baseUri + 'b/' + (sourceBucket == null ? '' : encodeURIComponent(sourceBucket)) + '/o/' + (sourceObject == null ? '' : encodeURIComponent(sourceObject)) + '/copyTo/b/' + (destinationBucket == null ? '' : encodeURIComponent(destinationBucket)) + '/o/' + (destinationObject == null ? '' : encodeURIComponent(destinationObject)) + '&ifGenerationMatch=' + (ifGenerationMatch == null ? '' : encodeURIComponent(ifGenerationMatch)) + '&ifGenerationNotMatch=' + (ifGenerationNotMatch == null ? '' : encodeURIComponent(ifGenerationNotMatch)) + '&ifMetagenerationMatch=' + (ifMetagenerationMatch == null ? '' : encodeURIComponent(ifMetagenerationMatch)) + '&ifMetagenerationNotMatch=' + (ifMetagenerationNotMatch == null ? '' : encodeURIComponent(ifMetagenerationNotMatch)) + '&ifSourceGenerationMatch=' + (ifSourceGenerationMatch == null ? '' : encodeURIComponent(ifSourceGenerationMatch)) + '&ifSourceGenerationNotMatch=' + (ifSourceGenerationNotMatch == null ? '' : encodeURIComponent(ifSourceGenerationNotMatch)) + '&ifSourceMetagenerationMatch=' + (ifSourceMetagenerationMatch == null ? '' : encodeURIComponent(ifSourceMetagenerationMatch)) + '&ifSourceMetagenerationNotMatch=' + (ifSourceMetagenerationNotMatch == null ? '' : encodeURIComponent(ifSourceMetagenerationNotMatch)) + '&projection=' + projection + '&sourceGeneration=' + (sourceGeneration == null ? '' : encodeURIComponent(sourceGeneration)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stop watching resources through this channel
		 * Post channels/stop
		 * @return {void} Successful response
		 */
		Storage_channels_stop(requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Storage_buckets_listProjection { full = 'full', noAcl = 'noAcl' }

}

