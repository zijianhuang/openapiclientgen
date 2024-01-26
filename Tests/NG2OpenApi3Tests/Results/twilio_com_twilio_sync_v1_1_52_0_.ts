import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Syncv1service {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Whether token identities in the Service must be granted access to Sync objects by using the [Permissions](https://www.twilio.com/docs/sync/api/sync-permissions) resource. It is disabled (false) by default. */
		acl_enabled?: boolean | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the resource. */
		friendly_name?: string | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** Whether every `endpoint_disconnected` event should occur after a configurable delay. The default is `false`, where the `endpoint_disconnected` event occurs immediately after disconnection. When `true`, intervening reconnections can prevent the `endpoint_disconnected` event. */
		reachability_debouncing_enabled?: boolean | null;

		/** The reachability event delay in milliseconds if `reachability_debouncing_enabled` = `true`.  Must be between 1,000 and 30,000 and defaults to 5,000. This is the number of milliseconds after the last running client disconnects, and a Sync identity is declared offline, before `webhook_url` is called, if all endpoints remain offline. A reconnection from the same identity by any endpoint during this interval prevents the reachability event from occurring. */
		reachability_debouncing_window?: number | null;

		/** Whether the service instance calls `webhook_url` when client endpoints connect to Sync. The default is `false`. */
		reachability_webhooks_enabled?: boolean | null;

		/**
		 * The unique string that we created to identify the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. It is a read-only property, it cannot be assigned using REST API. */
		unique_name?: string | null;

		/** The absolute URL of the Service resource. */
		url?: string | null;

		/** The URL we call when Sync objects are manipulated. */
		webhook_url?: string | null;

		/** Whether the Service instance should call `webhook_url` when the REST API is used to update Sync objects. The default is `false`. */
		webhooks_from_rest_enabled?: boolean | null;
	}
	export interface Syncv1serviceFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Whether token identities in the Service must be granted access to Sync objects by using the [Permissions](https://www.twilio.com/docs/sync/api/sync-permissions) resource. It is disabled (false) by default. */
		acl_enabled: FormControl<boolean | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** Whether every `endpoint_disconnected` event should occur after a configurable delay. The default is `false`, where the `endpoint_disconnected` event occurs immediately after disconnection. When `true`, intervening reconnections can prevent the `endpoint_disconnected` event. */
		reachability_debouncing_enabled: FormControl<boolean | null | undefined>,

		/** The reachability event delay in milliseconds if `reachability_debouncing_enabled` = `true`.  Must be between 1,000 and 30,000 and defaults to 5,000. This is the number of milliseconds after the last running client disconnects, and a Sync identity is declared offline, before `webhook_url` is called, if all endpoints remain offline. A reconnection from the same identity by any endpoint during this interval prevents the reachability event from occurring. */
		reachability_debouncing_window: FormControl<number | null | undefined>,

		/** Whether the service instance calls `webhook_url` when client endpoints connect to Sync. The default is `false`. */
		reachability_webhooks_enabled: FormControl<boolean | null | undefined>,

		/**
		 * The unique string that we created to identify the Service resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. It is a read-only property, it cannot be assigned using REST API. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Service resource. */
		url: FormControl<string | null | undefined>,

		/** The URL we call when Sync objects are manipulated. */
		webhook_url: FormControl<string | null | undefined>,

		/** Whether the Service instance should call `webhook_url` when the REST API is used to update Sync objects. The default is `false`. */
		webhooks_from_rest_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSyncv1serviceFormGroup() {
		return new FormGroup<Syncv1serviceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			acl_enabled: new FormControl<boolean | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			reachability_debouncing_enabled: new FormControl<boolean | null | undefined>(undefined),
			reachability_debouncing_window: new FormControl<number | null | undefined>(undefined),
			reachability_webhooks_enabled: new FormControl<boolean | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
			webhooks_from_rest_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicedocument {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The identity of the Sync Document's creator. If the Sync Document is created from the client SDK, the value matches the Access Token's `identity` field. If the Sync Document was created from the REST API, the value is `system`. */
		created_by?: string | null;

		/** An arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length. */
		data?: any;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Sync Document expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Sync Document does not expire, this value is `null`. The Document resource might not be deleted immediately after it expires. */
		date_expires?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The URLs of resources related to the Sync Document. */
		links?: string | null;

		/** The current revision of the Sync Document, represented as a string. The `revision` property is used with conditional updates to ensure data consistency. */
		revision?: string | null;

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Document resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource and can be up to 320 characters long. */
		unique_name?: string | null;

		/** The absolute URL of the Document resource. */
		url?: string | null;
	}
	export interface Syncv1servicedocumentFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The identity of the Sync Document's creator. If the Sync Document is created from the client SDK, the value matches the Access Token's `identity` field. If the Sync Document was created from the REST API, the value is `system`. */
		created_by: FormControl<string | null | undefined>,

		/** An arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length. */
		data: FormControl<any | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Sync Document expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Sync Document does not expire, this value is `null`. The Document resource might not be deleted immediately after it expires. */
		date_expires: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The URLs of resources related to the Sync Document. */
		links: FormControl<string | null | undefined>,

		/** The current revision of the Sync Document, represented as a string. The `revision` property is used with conditional updates to ensure data consistency. */
		revision: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Document resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource and can be up to 320 characters long. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Document resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSyncv1servicedocumentFormGroup() {
		return new FormGroup<Syncv1servicedocumentFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			created_by: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_expires: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ET[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicedocumentdocument_permission {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document Permission resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the Sync Document to which the Document Permission applies.
		 * Max length: 34
		 * Min length: 34
		 */
		document_sid?: string | null;

		/** The application-defined string that uniquely identifies the resource's User within the Service to an FPA token. */
		identity?: string | null;

		/** Whether the identity can delete the Sync Document. */
		manage?: boolean | null;

		/** Whether the identity can read the Sync Document. */
		read?: boolean | null;

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/** The absolute URL of the Sync Document Permission resource. */
		url?: string | null;

		/** Whether the identity can update the Sync Document. */
		write?: boolean | null;
	}
	export interface Syncv1servicedocumentdocument_permissionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document Permission resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Sync Document to which the Document Permission applies.
		 * Max length: 34
		 * Min length: 34
		 */
		document_sid: FormControl<string | null | undefined>,

		/** The application-defined string that uniquely identifies the resource's User within the Service to an FPA token. */
		identity: FormControl<string | null | undefined>,

		/** Whether the identity can delete the Sync Document. */
		manage: FormControl<boolean | null | undefined>,

		/** Whether the identity can read the Sync Document. */
		read: FormControl<boolean | null | undefined>,

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Sync Document Permission resource. */
		url: FormControl<string | null | undefined>,

		/** Whether the identity can update the Sync Document. */
		write: FormControl<boolean | null | undefined>,
	}
	export function CreateSyncv1servicedocumentdocument_permissionFormGroup() {
		return new FormGroup<Syncv1servicedocumentdocument_permissionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			document_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ET[0-9a-fA-F]{32}$')]),
			identity: new FormControl<string | null | undefined>(undefined),
			manage: new FormControl<boolean | null | undefined>(undefined),
			read: new FormControl<boolean | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			write: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicesync_list {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync List resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The identity of the Sync List's creator. If the Sync List is created from the client SDK, the value matches the Access Token's `identity` field. If the Sync List was created from the REST API, the value is `system`. */
		created_by?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Sync List expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Sync List does not expire, this value is `null`. The Sync List might not be deleted immediately after it expires. */
		date_expires?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The URLs of the Sync List's nested resources. */
		links?: string | null;

		/** The current revision of the Sync List, represented as a string. */
		revision?: string | null;

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Sync List resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name?: string | null;

		/** The absolute URL of the Sync List resource. */
		url?: string | null;
	}
	export interface Syncv1servicesync_listFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync List resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The identity of the Sync List's creator. If the Sync List is created from the client SDK, the value matches the Access Token's `identity` field. If the Sync List was created from the REST API, the value is `system`. */
		created_by: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Sync List expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Sync List does not expire, this value is `null`. The Sync List might not be deleted immediately after it expires. */
		date_expires: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The URLs of the Sync List's nested resources. */
		links: FormControl<string | null | undefined>,

		/** The current revision of the Sync List, represented as a string. */
		revision: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Sync List resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Sync List resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSyncv1servicesync_listFormGroup() {
		return new FormGroup<Syncv1servicesync_listFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			created_by: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_expires: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ES[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicesync_listsync_list_item {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the List Item resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The identity of the List Item's creator. If the item is created from the client SDK, the value matches the Access Token's `identity` field. If the item was created from the REST API, the value is `system`. */
		created_by?: string | null;

		/** An arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length. */
		data?: any;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the List Item expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the List Item does not expire, this value is `null`. The List Item resource might not be deleted immediately after it expires. */
		date_expires?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The automatically generated index of the List Item. The `index` values of the List Items in a Sync List can have gaps in their sequence. */
		index?: number | null;

		/**
		 * The SID of the Sync List that contains the List Item.
		 * Max length: 34
		 * Min length: 34
		 */
		list_sid?: string | null;

		/** The current revision of the item, represented as a string. */
		revision?: string | null;

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/** The absolute URL of the List Item resource. */
		url?: string | null;
	}
	export interface Syncv1servicesync_listsync_list_itemFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the List Item resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The identity of the List Item's creator. If the item is created from the client SDK, the value matches the Access Token's `identity` field. If the item was created from the REST API, the value is `system`. */
		created_by: FormControl<string | null | undefined>,

		/** An arbitrary, schema-less object that the List Item stores. Can be up to 16 KiB in length. */
		data: FormControl<any | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the List Item expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the List Item does not expire, this value is `null`. The List Item resource might not be deleted immediately after it expires. */
		date_expires: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The automatically generated index of the List Item. The `index` values of the List Items in a Sync List can have gaps in their sequence. */
		index: FormControl<number | null | undefined>,

		/**
		 * The SID of the Sync List that contains the List Item.
		 * Max length: 34
		 * Min length: 34
		 */
		list_sid: FormControl<string | null | undefined>,

		/** The current revision of the item, represented as a string. */
		revision: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the List Item resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSyncv1servicesync_listsync_list_itemFormGroup() {
		return new FormGroup<Syncv1servicesync_listsync_list_itemFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			created_by: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_expires: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			list_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ES[0-9a-fA-F]{32}$')]),
			revision: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicesync_listsync_list_permission {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync List Permission resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The application-defined string that uniquely identifies the resource's User within the Service to an FPA token. */
		identity?: string | null;

		/**
		 * The SID of the Sync List to which the Permission applies.
		 * Max length: 34
		 * Min length: 34
		 */
		list_sid?: string | null;

		/** Whether the identity can delete the Sync List. */
		manage?: boolean | null;

		/** Whether the identity can read the Sync List and its Items. */
		read?: boolean | null;

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/** The absolute URL of the Sync List Permission resource. */
		url?: string | null;

		/** Whether the identity can create, update, and delete Items in the Sync List. */
		write?: boolean | null;
	}
	export interface Syncv1servicesync_listsync_list_permissionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync List Permission resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The application-defined string that uniquely identifies the resource's User within the Service to an FPA token. */
		identity: FormControl<string | null | undefined>,

		/**
		 * The SID of the Sync List to which the Permission applies.
		 * Max length: 34
		 * Min length: 34
		 */
		list_sid: FormControl<string | null | undefined>,

		/** Whether the identity can delete the Sync List. */
		manage: FormControl<boolean | null | undefined>,

		/** Whether the identity can read the Sync List and its Items. */
		read: FormControl<boolean | null | undefined>,

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Sync List Permission resource. */
		url: FormControl<string | null | undefined>,

		/** Whether the identity can create, update, and delete Items in the Sync List. */
		write: FormControl<boolean | null | undefined>,
	}
	export function CreateSyncv1servicesync_listsync_list_permissionFormGroup() {
		return new FormGroup<Syncv1servicesync_listsync_list_permissionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			identity: new FormControl<string | null | undefined>(undefined),
			list_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ES[0-9a-fA-F]{32}$')]),
			manage: new FormControl<boolean | null | undefined>(undefined),
			read: new FormControl<boolean | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			write: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicesync_map {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The identity of the Sync Map's creator. If the Sync Map is created from the client SDK, the value matches the Access Token's `identity` field. If the Sync Map was created from the REST API, the value is `system`. */
		created_by?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Sync Map expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Sync Map does not expire, this value is `null`. The Sync Map might not be deleted immediately after it expires. */
		date_expires?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The URLs of the Sync Map's nested resources. */
		links?: string | null;

		/** The current revision of the Sync Map, represented as a string. */
		revision?: string | null;

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Sync Map resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name?: string | null;

		/** The absolute URL of the Sync Map resource. */
		url?: string | null;
	}
	export interface Syncv1servicesync_mapFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The identity of the Sync Map's creator. If the Sync Map is created from the client SDK, the value matches the Access Token's `identity` field. If the Sync Map was created from the REST API, the value is `system`. */
		created_by: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Sync Map expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Sync Map does not expire, this value is `null`. The Sync Map might not be deleted immediately after it expires. */
		date_expires: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The URLs of the Sync Map's nested resources. */
		links: FormControl<string | null | undefined>,

		/** The current revision of the Sync Map, represented as a string. */
		revision: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Sync Map resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Sync Map resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSyncv1servicesync_mapFormGroup() {
		return new FormGroup<Syncv1servicesync_mapFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			created_by: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_expires: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^MP[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicesync_mapsync_map_item {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Map Item resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The identity of the Map Item's creator. If the Map Item is created from the client SDK, the value matches the Access Token's `identity` field. If the Map Item was created from the REST API, the value is `system`. */
		created_by?: string | null;

		/** An arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length. */
		data?: any;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Map Item expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Map Item does not expire, this value is `null`.  The Map Item might not be deleted immediately after it expires. */
		date_expires?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The unique, user-defined key for the Map Item. */
		key?: string | null;

		/**
		 * The SID of the Sync Map that contains the Map Item.
		 * Max length: 34
		 * Min length: 34
		 */
		map_sid?: string | null;

		/** The current revision of the Map Item, represented as a string. */
		revision?: string | null;

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/** The absolute URL of the Map Item resource. */
		url?: string | null;
	}
	export interface Syncv1servicesync_mapsync_map_itemFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Map Item resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The identity of the Map Item's creator. If the Map Item is created from the client SDK, the value matches the Access Token's `identity` field. If the Map Item was created from the REST API, the value is `system`. */
		created_by: FormControl<string | null | undefined>,

		/** An arbitrary, schema-less object that the Map Item stores. Can be up to 16 KiB in length. */
		data: FormControl<any | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Map Item expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Map Item does not expire, this value is `null`.  The Map Item might not be deleted immediately after it expires. */
		date_expires: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The unique, user-defined key for the Map Item. */
		key: FormControl<string | null | undefined>,

		/**
		 * The SID of the Sync Map that contains the Map Item.
		 * Max length: 34
		 * Min length: 34
		 */
		map_sid: FormControl<string | null | undefined>,

		/** The current revision of the Map Item, represented as a string. */
		revision: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Map Item resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSyncv1servicesync_mapsync_map_itemFormGroup() {
		return new FormGroup<Syncv1servicesync_mapsync_map_itemFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			created_by: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_expires: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			map_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^MP[0-9a-fA-F]{32}$')]),
			revision: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicesync_mapsync_map_permission {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map Permission resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The application-defined string that uniquely identifies the resource's User within the Service to an FPA token. */
		identity?: string | null;

		/** Whether the identity can delete the Sync Map. */
		manage?: boolean | null;

		/**
		 * The SID of the Sync Map to which the Permission applies.
		 * Max length: 34
		 * Min length: 34
		 */
		map_sid?: string | null;

		/** Whether the identity can read the Sync Map and its Items. */
		read?: boolean | null;

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/** The absolute URL of the Sync Map Permission resource. */
		url?: string | null;

		/** Whether the identity can create, update, and delete Items in the Sync Map. */
		write?: boolean | null;
	}
	export interface Syncv1servicesync_mapsync_map_permissionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map Permission resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The application-defined string that uniquely identifies the resource's User within the Service to an FPA token. */
		identity: FormControl<string | null | undefined>,

		/** Whether the identity can delete the Sync Map. */
		manage: FormControl<boolean | null | undefined>,

		/**
		 * The SID of the Sync Map to which the Permission applies.
		 * Max length: 34
		 * Min length: 34
		 */
		map_sid: FormControl<string | null | undefined>,

		/** Whether the identity can read the Sync Map and its Items. */
		read: FormControl<boolean | null | undefined>,

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Sync Map Permission resource. */
		url: FormControl<string | null | undefined>,

		/** Whether the identity can create, update, and delete Items in the Sync Map. */
		write: FormControl<boolean | null | undefined>,
	}
	export function CreateSyncv1servicesync_mapsync_map_permissionFormGroup() {
		return new FormGroup<Syncv1servicesync_mapsync_map_permissionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			identity: new FormControl<string | null | undefined>(undefined),
			manage: new FormControl<boolean | null | undefined>(undefined),
			map_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^MP[0-9a-fA-F]{32}$')]),
			read: new FormControl<boolean | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			write: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicesync_stream {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Stream resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The identity of the Stream's creator. If the Stream is created from the client SDK, the value matches the Access Token's `identity` field. If the Stream was created from the REST API, the value is 'system'. */
		created_by?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Message Stream expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Message Stream does not expire, this value is `null`. The Stream might not be deleted immediately after it expires. */
		date_expires?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The URLs of the Stream's nested resources. */
		links?: string | null;

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Sync Stream resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name?: string | null;

		/** The absolute URL of the Message Stream resource. */
		url?: string | null;
	}
	export interface Syncv1servicesync_streamFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Stream resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The identity of the Stream's creator. If the Stream is created from the client SDK, the value matches the Access Token's `identity` field. If the Stream was created from the REST API, the value is 'system'. */
		created_by: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Message Stream expires and will be deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. If the Message Stream does not expire, this value is `null`. The Stream might not be deleted immediately after it expires. */
		date_expires: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The URLs of the Stream's nested resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
		 * Max length: 34
		 * Min length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Sync Stream resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Message Stream resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSyncv1servicesync_streamFormGroup() {
		return new FormGroup<Syncv1servicesync_streamFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			created_by: new FormControl<string | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_expires: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^IS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TO[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Syncv1servicesync_streamstream_message {

		/** An arbitrary, schema-less object that contains the Stream Message body. Can be up to 4 KiB in length. */
		data?: any;

		/**
		 * The unique string that we created to identify the Stream Message resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
	}
	export interface Syncv1servicesync_streamstream_messageFormProperties {

		/** An arbitrary, schema-less object that contains the Stream Message body. Can be up to 4 KiB in length. */
		data: FormControl<any | null | undefined>,

		/**
		 * The unique string that we created to identify the Stream Message resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
	}
	export function CreateSyncv1servicesync_streamstream_messageFormGroup() {
		return new FormGroup<Syncv1servicesync_streamstream_messageFormProperties>({
			data: new FormControl<any | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^TZ[0-9a-fA-F]{32}$')]),
		});

	}

	export enum Sync_list_item_enum_query_from_bound_type { inclusive = 0, exclusive = 1 }

	export enum Sync_list_item_enum_query_result_order { asc = 0, desc = 1 }

	export enum Sync_map_item_enum_query_from_bound_type { inclusive = 0, exclusive = 1 }

	export enum Sync_map_item_enum_query_result_order { asc = 0, desc = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v1/Services
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListServiceReturn} OK
		 */
		ListService(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListServiceReturn> {
			return this.http.get<ListServiceReturn>(this.baseUri + 'v1/Services?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Documents
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListDocumentReturn} OK
		 */
		ListDocument(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListDocumentReturn> {
			return this.http.get<ListDocumentReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Documents&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Permissions applying to a Sync Document.
		 * Get v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document Permission resources to read.
		 * @param {string} DocumentSid The SID of the Sync Document with the Document Permission resources to read. Can be the Document resource's `sid` or its `unique_name`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListDocumentPermissionReturn} OK
		 */
		ListDocumentPermission(ServiceSid: string, DocumentSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListDocumentPermissionReturn> {
			return this.http.get<ListDocumentPermissionReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Documents/' + (DocumentSid == null ? '' : encodeURIComponent(DocumentSid)) + '/Permissions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Sync Document Permission.
		 * Delete v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document Permission resource to delete.
		 * @param {string} DocumentSid The SID of the Sync Document with the Document Permission resource to delete. Can be the Document resource's `sid` or its `unique_name`.
		 * @param {string} Identity The application-defined string that uniquely identifies the User's Document Permission resource to delete.
		 * @return {void} 
		 */
		DeleteDocumentPermission(ServiceSid: string, DocumentSid: string, Identity: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Documents/' + (DocumentSid == null ? '' : encodeURIComponent(DocumentSid)) + '/Permissions/' + (Identity == null ? '' : encodeURIComponent(Identity)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Sync Document Permission.
		 * Get v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document Permission resource to fetch.
		 * @param {string} DocumentSid The SID of the Sync Document with the Document Permission resource to fetch. Can be the Document resource's `sid` or its `unique_name`.
		 * @param {string} Identity The application-defined string that uniquely identifies the User's Document Permission resource to fetch.
		 * @return {Syncv1servicedocumentdocument_permission} OK
		 */
		FetchDocumentPermission(ServiceSid: string, DocumentSid: string, Identity: string): Observable<Syncv1servicedocumentdocument_permission> {
			return this.http.get<Syncv1servicedocumentdocument_permission>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Documents/' + (DocumentSid == null ? '' : encodeURIComponent(DocumentSid)) + '/Permissions/' + (Identity == null ? '' : encodeURIComponent(Identity)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Documents/{Sid}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document resource to delete.
		 * @param {string} Sid The SID of the Document resource to delete. Can be the Document resource's `sid` or its `unique_name`.
		 * @return {void} 
		 */
		DeleteDocument(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Documents/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Documents/{Sid}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document resource to fetch.
		 * @param {string} Sid The SID of the Document resource to fetch. Can be the Document resource's `sid` or its `unique_name`.
		 * @return {Syncv1servicedocument} OK
		 */
		FetchDocument(ServiceSid: string, Sid: string): Observable<Syncv1servicedocument> {
			return this.http.get<Syncv1servicedocument>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Documents/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Lists
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSyncListReturn} OK
		 */
		ListSyncList(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSyncListReturn> {
			return this.http.get<ListSyncListReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Lists&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Lists/{ListSid}/Items
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the List Item resources to read.
		 * @param {string} ListSid The SID of the Sync List with the List Items to read. Can be the Sync List resource's `sid` or its `unique_name`.
		 * @param {Sync_list_item_enum_query_result_order} Order How to order the List Items returned by their `index` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending.
		 * @param {string} From The `index` of the first Sync List Item resource to read. See also `bounds`.
		 * @param {Sync_list_item_enum_query_from_bound_type} Bounds Whether to include the List Item referenced by the `from` parameter. Can be: `inclusive` to include the List Item referenced by the `from` parameter or `exclusive` to start with the next List Item. The default value is `inclusive`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSyncListItemReturn} OK
		 */
		ListSyncListItem(ServiceSid: string, ListSid: string, Order: Sync_list_item_enum_query_result_order | null | undefined, From: string | null | undefined, Bounds: Sync_list_item_enum_query_from_bound_type | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSyncListItemReturn> {
			return this.http.get<ListSyncListItemReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Lists/' + (ListSid == null ? '' : encodeURIComponent(ListSid)) + '/Items&Order=' + Order + '&From=' + (From == null ? '' : encodeURIComponent(From)) + '&Bounds=' + Bounds + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Item resource to delete.
		 * @param {string} ListSid The SID of the Sync List with the Sync List Item resource to delete. Can be the Sync List resource's `sid` or its `unique_name`.
		 * @param {number} Index The index of the Sync List Item resource to delete.
		 * @return {void} 
		 */
		DeleteSyncListItem(ServiceSid: string, ListSid: string, Index: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Lists/' + (ListSid == null ? '' : encodeURIComponent(ListSid)) + '/Items/' + Index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Item resource to fetch.
		 * @param {string} ListSid The SID of the Sync List with the Sync List Item resource to fetch. Can be the Sync List resource's `sid` or its `unique_name`.
		 * @param {number} Index The index of the Sync List Item resource to fetch.
		 * @return {Syncv1servicesync_listsync_list_item} OK
		 */
		FetchSyncListItem(ServiceSid: string, ListSid: string, Index: number): Observable<Syncv1servicesync_listsync_list_item> {
			return this.http.get<Syncv1servicesync_listsync_list_item>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Lists/' + (ListSid == null ? '' : encodeURIComponent(ListSid)) + '/Items/' + Index, {});
		}

		/**
		 * Retrieve a list of all Permissions applying to a Sync List.
		 * Get v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Permission resources to read.
		 * @param {string} ListSid The SID of the Sync List with the Sync List Permission resources to read. Can be the Sync List resource's `sid` or its `unique_name`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSyncListPermissionReturn} OK
		 */
		ListSyncListPermission(ServiceSid: string, ListSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSyncListPermissionReturn> {
			return this.http.get<ListSyncListPermissionReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Lists/' + (ListSid == null ? '' : encodeURIComponent(ListSid)) + '/Permissions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Sync List Permission.
		 * Delete v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Permission resource to delete.
		 * @param {string} ListSid The SID of the Sync List with the Sync List Permission resource to delete. Can be the Sync List resource's `sid` or its `unique_name`.
		 * @param {string} Identity The application-defined string that uniquely identifies the User's Sync List Permission resource to delete.
		 * @return {void} 
		 */
		DeleteSyncListPermission(ServiceSid: string, ListSid: string, Identity: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Lists/' + (ListSid == null ? '' : encodeURIComponent(ListSid)) + '/Permissions/' + (Identity == null ? '' : encodeURIComponent(Identity)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Sync List Permission.
		 * Get v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Permission resource to fetch.
		 * @param {string} ListSid The SID of the Sync List with the Sync List Permission resource to fetch. Can be the Sync List resource's `sid` or its `unique_name`.
		 * @param {string} Identity The application-defined string that uniquely identifies the User's Sync List Permission resource to fetch.
		 * @return {Syncv1servicesync_listsync_list_permission} OK
		 */
		FetchSyncListPermission(ServiceSid: string, ListSid: string, Identity: string): Observable<Syncv1servicesync_listsync_list_permission> {
			return this.http.get<Syncv1servicesync_listsync_list_permission>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Lists/' + (ListSid == null ? '' : encodeURIComponent(ListSid)) + '/Permissions/' + (Identity == null ? '' : encodeURIComponent(Identity)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Lists/{Sid}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List resource to delete.
		 * @param {string} Sid The SID of the Sync List resource to delete. Can be the Sync List resource's `sid` or its `unique_name`.
		 * @return {void} 
		 */
		DeleteSyncList(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Lists/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Lists/{Sid}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List resource to fetch.
		 * @param {string} Sid The SID of the Sync List resource to fetch. Can be the Sync List resource's `sid` or its `unique_name`.
		 * @return {Syncv1servicesync_list} OK
		 */
		FetchSyncList(ServiceSid: string, Sid: string): Observable<Syncv1servicesync_list> {
			return this.http.get<Syncv1servicesync_list>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Lists/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Maps
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSyncMapReturn} OK
		 */
		ListSyncMap(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSyncMapReturn> {
			return this.http.get<ListSyncMapReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Maps&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Services/{ServiceSid}/Maps/{MapSid}/Items
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Map Item resources to read.
		 * @param {string} MapSid The SID of the Sync Map with the Sync Map Item resource to fetch. Can be the Sync Map resource's `sid` or its `unique_name`.
		 * @param {Sync_list_item_enum_query_result_order} Order How to order the Map Items returned by their `key` value. Can be: `asc` (ascending) or `desc` (descending) and the default is ascending. Map Items are [ordered lexicographically](https://en.wikipedia.org/wiki/Lexicographical_order) by Item key.
		 * @param {string} From The `key` of the first Sync Map Item resource to read. See also `bounds`.
		 * @param {Sync_list_item_enum_query_from_bound_type} Bounds Whether to include the Map Item referenced by the `from` parameter. Can be: `inclusive` to include the Map Item referenced by the `from` parameter or `exclusive` to start with the next Map Item. The default value is `inclusive`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSyncMapItemReturn} OK
		 */
		ListSyncMapItem(ServiceSid: string, MapSid: string, Order: Sync_list_item_enum_query_result_order | null | undefined, From: string | null | undefined, Bounds: Sync_list_item_enum_query_from_bound_type | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSyncMapItemReturn> {
			return this.http.get<ListSyncMapItemReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Maps/' + (MapSid == null ? '' : encodeURIComponent(MapSid)) + '/Items&Order=' + Order + '&From=' + (From == null ? '' : encodeURIComponent(From)) + '&Bounds=' + Bounds + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Item resource to delete.
		 * @param {string} MapSid The SID of the Sync Map with the Sync Map Item resource to delete. Can be the Sync Map resource's `sid` or its `unique_name`.
		 * @param {string} Key The `key` value of the Sync Map Item resource to delete.
		 * @return {void} 
		 */
		DeleteSyncMapItem(ServiceSid: string, MapSid: string, Key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Maps/' + (MapSid == null ? '' : encodeURIComponent(MapSid)) + '/Items/' + (Key == null ? '' : encodeURIComponent(Key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Item resource to fetch.
		 * @param {string} MapSid The SID of the Sync Map with the Sync Map Item resource to fetch. Can be the Sync Map resource's `sid` or its `unique_name`.
		 * @param {string} Key The `key` value of the Sync Map Item resource to fetch.
		 * @return {Syncv1servicesync_mapsync_map_item} OK
		 */
		FetchSyncMapItem(ServiceSid: string, MapSid: string, Key: string): Observable<Syncv1servicesync_mapsync_map_item> {
			return this.http.get<Syncv1servicesync_mapsync_map_item>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Maps/' + (MapSid == null ? '' : encodeURIComponent(MapSid)) + '/Items/' + (Key == null ? '' : encodeURIComponent(Key)), {});
		}

		/**
		 * Retrieve a list of all Permissions applying to a Sync Map.
		 * Get v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Permission resources to read. Can be the Service's `sid` value or `default`.
		 * @param {string} MapSid The SID of the Sync Map with the Permission resources to read. Can be the Sync Map resource's `sid` or its `unique_name`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSyncMapPermissionReturn} OK
		 */
		ListSyncMapPermission(ServiceSid: string, MapSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSyncMapPermissionReturn> {
			return this.http.get<ListSyncMapPermissionReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Maps/' + (MapSid == null ? '' : encodeURIComponent(MapSid)) + '/Permissions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Sync Map Permission.
		 * Delete v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Permission resource to delete. Can be the Service's `sid` value or `default`.
		 * @param {string} MapSid The SID of the Sync Map with the Sync Map Permission resource to delete. Can be the Sync Map resource's `sid` or its `unique_name`.
		 * @param {string} Identity The application-defined string that uniquely identifies the User's Sync Map Permission resource to delete.
		 * @return {void} 
		 */
		DeleteSyncMapPermission(ServiceSid: string, MapSid: string, Identity: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Maps/' + (MapSid == null ? '' : encodeURIComponent(MapSid)) + '/Permissions/' + (Identity == null ? '' : encodeURIComponent(Identity)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Sync Map Permission.
		 * Get v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Permission resource to fetch. Can be the Service's `sid` value or `default`.
		 * @param {string} MapSid The SID of the Sync Map with the Sync Map Permission resource to fetch. Can be the Sync Map resource's `sid` or its `unique_name`.
		 * @param {string} Identity The application-defined string that uniquely identifies the User's Sync Map Permission resource to fetch.
		 * @return {Syncv1servicesync_mapsync_map_permission} OK
		 */
		FetchSyncMapPermission(ServiceSid: string, MapSid: string, Identity: string): Observable<Syncv1servicesync_mapsync_map_permission> {
			return this.http.get<Syncv1servicesync_mapsync_map_permission>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Maps/' + (MapSid == null ? '' : encodeURIComponent(MapSid)) + '/Permissions/' + (Identity == null ? '' : encodeURIComponent(Identity)), {});
		}

		/**
		 * Delete v1/Services/{ServiceSid}/Maps/{Sid}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map resource to delete.
		 * @param {string} Sid The SID of the Sync Map resource to delete. Can be the Sync Map's `sid` or its `unique_name`.
		 * @return {void} 
		 */
		DeleteSyncMap(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Maps/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{ServiceSid}/Maps/{Sid}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map resource to fetch.
		 * @param {string} Sid The SID of the Sync Map resource to fetch. Can be the Sync Map's `sid` or its `unique_name`.
		 * @return {Syncv1servicesync_map} OK
		 */
		FetchSyncMap(ServiceSid: string, Sid: string): Observable<Syncv1servicesync_map> {
			return this.http.get<Syncv1servicesync_map>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Maps/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Streams in a Service Instance.
		 * Get v1/Services/{ServiceSid}/Streams
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Stream resources to read.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSyncStreamReturn} OK
		 */
		ListSyncStream(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSyncStreamReturn> {
			return this.http.get<ListSyncStreamReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Streams&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Stream.
		 * Delete v1/Services/{ServiceSid}/Streams/{Sid}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Stream resource to delete.
		 * @param {string} Sid The SID of the Stream resource to delete.
		 * @return {void} 
		 */
		DeleteSyncStream(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Streams/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Stream.
		 * Get v1/Services/{ServiceSid}/Streams/{Sid}
		 * @param {string} ServiceSid The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Stream resource to fetch.
		 * @param {string} Sid The SID of the Stream resource to fetch.
		 * @return {Syncv1servicesync_stream} OK
		 */
		FetchSyncStream(ServiceSid: string, Sid: string): Observable<Syncv1servicesync_stream> {
			return this.http.get<Syncv1servicesync_stream>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Streams/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete v1/Services/{Sid}
		 * @param {string} Sid The SID of the Service resource to delete.
		 * @return {void} 
		 */
		DeleteService(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/Services/{Sid}
		 * @param {string} Sid The SID of the Service resource to fetch.
		 * @return {Syncv1service} OK
		 */
		FetchService(Sid: string): Observable<Syncv1service> {
			return this.http.get<Syncv1service>(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListServiceReturn {
		meta?: ListServiceReturnMeta;
		services?: Array<Syncv1service>;
	}
	export interface ListServiceReturnFormProperties {
	}
	export function CreateListServiceReturnFormGroup() {
		return new FormGroup<ListServiceReturnFormProperties>({
		});

	}

	export interface ListServiceReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListServiceReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListServiceReturnMetaFormGroup() {
		return new FormGroup<ListServiceReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDocumentReturn {
		documents?: Array<Syncv1servicedocument>;
		meta?: ListDocumentReturnMeta;
	}
	export interface ListDocumentReturnFormProperties {
	}
	export function CreateListDocumentReturnFormGroup() {
		return new FormGroup<ListDocumentReturnFormProperties>({
		});

	}

	export interface ListDocumentReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListDocumentReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentReturnMetaFormGroup() {
		return new FormGroup<ListDocumentReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDocumentPermissionReturn {
		meta?: ListDocumentPermissionReturnMeta;
		permissions?: Array<Syncv1servicedocumentdocument_permission>;
	}
	export interface ListDocumentPermissionReturnFormProperties {
	}
	export function CreateListDocumentPermissionReturnFormGroup() {
		return new FormGroup<ListDocumentPermissionReturnFormProperties>({
		});

	}

	export interface ListDocumentPermissionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListDocumentPermissionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentPermissionReturnMetaFormGroup() {
		return new FormGroup<ListDocumentPermissionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncListReturn {
		lists?: Array<Syncv1servicesync_list>;
		meta?: ListSyncListReturnMeta;
	}
	export interface ListSyncListReturnFormProperties {
	}
	export function CreateListSyncListReturnFormGroup() {
		return new FormGroup<ListSyncListReturnFormProperties>({
		});

	}

	export interface ListSyncListReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSyncListReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSyncListReturnMetaFormGroup() {
		return new FormGroup<ListSyncListReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncListItemReturn {
		items?: Array<Syncv1servicesync_listsync_list_item>;
		meta?: ListSyncListItemReturnMeta;
	}
	export interface ListSyncListItemReturnFormProperties {
	}
	export function CreateListSyncListItemReturnFormGroup() {
		return new FormGroup<ListSyncListItemReturnFormProperties>({
		});

	}

	export interface ListSyncListItemReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSyncListItemReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSyncListItemReturnMetaFormGroup() {
		return new FormGroup<ListSyncListItemReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncListPermissionReturn {
		meta?: ListSyncListPermissionReturnMeta;
		permissions?: Array<Syncv1servicesync_listsync_list_permission>;
	}
	export interface ListSyncListPermissionReturnFormProperties {
	}
	export function CreateListSyncListPermissionReturnFormGroup() {
		return new FormGroup<ListSyncListPermissionReturnFormProperties>({
		});

	}

	export interface ListSyncListPermissionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSyncListPermissionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSyncListPermissionReturnMetaFormGroup() {
		return new FormGroup<ListSyncListPermissionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncMapReturn {
		maps?: Array<Syncv1servicesync_map>;
		meta?: ListSyncMapReturnMeta;
	}
	export interface ListSyncMapReturnFormProperties {
	}
	export function CreateListSyncMapReturnFormGroup() {
		return new FormGroup<ListSyncMapReturnFormProperties>({
		});

	}

	export interface ListSyncMapReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSyncMapReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSyncMapReturnMetaFormGroup() {
		return new FormGroup<ListSyncMapReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncMapItemReturn {
		items?: Array<Syncv1servicesync_mapsync_map_item>;
		meta?: ListSyncMapItemReturnMeta;
	}
	export interface ListSyncMapItemReturnFormProperties {
	}
	export function CreateListSyncMapItemReturnFormGroup() {
		return new FormGroup<ListSyncMapItemReturnFormProperties>({
		});

	}

	export interface ListSyncMapItemReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSyncMapItemReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSyncMapItemReturnMetaFormGroup() {
		return new FormGroup<ListSyncMapItemReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncMapPermissionReturn {
		meta?: ListSyncMapPermissionReturnMeta;
		permissions?: Array<Syncv1servicesync_mapsync_map_permission>;
	}
	export interface ListSyncMapPermissionReturnFormProperties {
	}
	export function CreateListSyncMapPermissionReturnFormGroup() {
		return new FormGroup<ListSyncMapPermissionReturnFormProperties>({
		});

	}

	export interface ListSyncMapPermissionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSyncMapPermissionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSyncMapPermissionReturnMetaFormGroup() {
		return new FormGroup<ListSyncMapPermissionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSyncStreamReturn {
		meta?: ListSyncStreamReturnMeta;
		streams?: Array<Syncv1servicesync_stream>;
	}
	export interface ListSyncStreamReturnFormProperties {
	}
	export function CreateListSyncStreamReturnFormGroup() {
		return new FormGroup<ListSyncStreamReturnFormProperties>({
		});

	}

	export interface ListSyncStreamReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSyncStreamReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSyncStreamReturnMetaFormGroup() {
		return new FormGroup<ListSyncStreamReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

