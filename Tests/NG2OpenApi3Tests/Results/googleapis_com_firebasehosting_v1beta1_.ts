import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains metadata about the user who performed an action, such as creating a release or finalizing a version. */
	export interface ActingUser {

		/** The email address of the user when the user performed the action. */
		email?: string | null;

		/** A profile image URL for the user. May not be present if the user has changed their email address or deleted their account. */
		imageUrl?: string | null;
	}

	/** Contains metadata about the user who performed an action, such as creating a release or finalizing a version. */
	export interface ActingUserFormProperties {

		/** The email address of the user when the user performed the action. */
		email: FormControl<string | null | undefined>,

		/** A profile image URL for the user. May not be present if the user has changed their email address or deleted their account. */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateActingUserFormGroup() {
		return new FormGroup<ActingUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a DNS certificate challenge. */
	export interface CertDnsChallenge {

		/** The domain name upon which the DNS challenge must be satisfied. */
		domainName?: string | null;

		/** The value that must be present as a TXT record on the domain name to satisfy the challenge. */
		token?: string | null;
	}

	/** Represents a DNS certificate challenge. */
	export interface CertDnsChallengeFormProperties {

		/** The domain name upon which the DNS challenge must be satisfied. */
		domainName: FormControl<string | null | undefined>,

		/** The value that must be present as a TXT record on the domain name to satisfy the challenge. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateCertDnsChallengeFormGroup() {
		return new FormGroup<CertDnsChallengeFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an HTTP certificate challenge. */
	export interface CertHttpChallenge {

		/** The URL path on which to serve the specified token to satisfy the certificate challenge. */
		path?: string | null;

		/** The token to serve at the specified URL path to satisfy the certificate challenge. */
		token?: string | null;
	}

	/** Represents an HTTP certificate challenge. */
	export interface CertHttpChallengeFormProperties {

		/** The URL path on which to serve the specified token to satisfy the certificate challenge. */
		path: FormControl<string | null | undefined>,

		/** The token to serve at the specified URL path to satisfy the certificate challenge. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateCertHttpChallengeFormGroup() {
		return new FormGroup<CertHttpChallengeFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of ACME challenges you can use to allow Hosting to create an SSL certificate for your domain name before directing traffic to Hosting servers. Use either the DNS or HTTP challenge; it's not necessary to provide both. */
	export interface CertVerification {

		/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
		dns?: DnsUpdates;

		/** A file you can add to your existing, non-Hosting hosting service that confirms your intent to allow Hosting's Certificate Authorities to create an SSL certificate for your domain. */
		http?: HttpUpdate;
	}

	/** A set of ACME challenges you can use to allow Hosting to create an SSL certificate for your domain name before directing traffic to Hosting servers. Use either the DNS or HTTP challenge; it's not necessary to provide both. */
	export interface CertVerificationFormProperties {
	}
	export function CreateCertVerificationFormGroup() {
		return new FormGroup<CertVerificationFormProperties>({
		});

	}


	/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
	export interface DnsUpdates {

		/** The last time Hosting checked your custom domain's DNS records. */
		checkTime?: string | null;

		/** The set of DNS records Hosting needs to serve secure content on the domain. */
		desired?: Array<DnsRecordSet>;

		/** The set of DNS records Hosting discovered when inspecting a domain. */
		discovered?: Array<DnsRecordSet>;
	}

	/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
	export interface DnsUpdatesFormProperties {

		/** The last time Hosting checked your custom domain's DNS records. */
		checkTime: FormControl<string | null | undefined>,
	}
	export function CreateDnsUpdatesFormGroup() {
		return new FormGroup<DnsUpdatesFormProperties>({
			checkTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of DNS records relevant to the setup and maintenance of a custom domain in Firebase Hosting. */
	export interface DnsRecordSet {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		checkError?: Status;

		/** Output only. The domain name the record set pertains to. */
		domainName?: string | null;

		/** Output only. Records on the domain. */
		records?: Array<DnsRecord>;
	}

	/** A set of DNS records relevant to the setup and maintenance of a custom domain in Firebase Hosting. */
	export interface DnsRecordSetFormProperties {

		/** Output only. The domain name the record set pertains to. */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateDnsRecordSetFormGroup() {
		return new FormGroup<DnsRecordSetFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DNS records are resource records that define how systems and services should behave when handling requests for a domain name. For example, when you add `A` records to your domain name's DNS records, you're informing other systems (such as your users' web browsers) to contact those IPv4 addresses to retrieve resources relevant to your domain name (such as your Hosting site files). */
	export interface DnsRecord {

		/** Output only. The domain name the record pertains to, e.g. `foo.bar.com.`. */
		domainName?: string | null;

		/** Output only. The data of the record. The meaning of the value depends on record type: - A and AAAA: IP addresses for the domain name. - CNAME: Another domain to check for records. - TXT: Arbitrary text strings associated with the domain name. Hosting uses TXT records to determine which Firebase projects have permission to act on the domain name's behalf. - CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`. */
		rdata?: string | null;

		/** Output only. An enum that indicates the a required action for this record. */
		requiredAction?: DnsRecordRequiredAction | null;

		/** Output only. The record's type, which determines what data the record contains. */
		type?: DnsRecordType | null;
	}

	/** DNS records are resource records that define how systems and services should behave when handling requests for a domain name. For example, when you add `A` records to your domain name's DNS records, you're informing other systems (such as your users' web browsers) to contact those IPv4 addresses to retrieve resources relevant to your domain name (such as your Hosting site files). */
	export interface DnsRecordFormProperties {

		/** Output only. The domain name the record pertains to, e.g. `foo.bar.com.`. */
		domainName: FormControl<string | null | undefined>,

		/** Output only. The data of the record. The meaning of the value depends on record type: - A and AAAA: IP addresses for the domain name. - CNAME: Another domain to check for records. - TXT: Arbitrary text strings associated with the domain name. Hosting uses TXT records to determine which Firebase projects have permission to act on the domain name's behalf. - CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`. */
		rdata: FormControl<string | null | undefined>,

		/** Output only. An enum that indicates the a required action for this record. */
		requiredAction: FormControl<DnsRecordRequiredAction | null | undefined>,

		/** Output only. The record's type, which determines what data the record contains. */
		type: FormControl<DnsRecordType | null | undefined>,
	}
	export function CreateDnsRecordFormGroup() {
		return new FormGroup<DnsRecordFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			rdata: new FormControl<string | null | undefined>(undefined),
			requiredAction: new FormControl<DnsRecordRequiredAction | null | undefined>(undefined),
			type: new FormControl<DnsRecordType | null | undefined>(undefined),
		});

	}

	export enum DnsRecordRequiredAction { NONE = 'NONE', ADD = 'ADD', REMOVE = 'REMOVE' }

	export enum DnsRecordType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', A = 'A', CNAME = 'CNAME', TXT = 'TXT', AAAA = 'AAAA', CAA = 'CAA' }


	/** A file you can add to your existing, non-Hosting hosting service that confirms your intent to allow Hosting's Certificate Authorities to create an SSL certificate for your domain. */
	export interface HttpUpdate {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		checkError?: Status;

		/** Output only. A text string to serve at the path. */
		desired?: string | null;

		/** Output only. Whether Hosting was able to find the required file contents on the specified path during its last check. */
		discovered?: string | null;

		/** Output only. The last time Hosting systems checked for the file contents. */
		lastCheckTime?: string | null;

		/** Output only. The path to the file. */
		path?: string | null;
	}

	/** A file you can add to your existing, non-Hosting hosting service that confirms your intent to allow Hosting's Certificate Authorities to create an SSL certificate for your domain. */
	export interface HttpUpdateFormProperties {

		/** Output only. A text string to serve at the path. */
		desired: FormControl<string | null | undefined>,

		/** Output only. Whether Hosting was able to find the required file contents on the specified path during its last check. */
		discovered: FormControl<string | null | undefined>,

		/** Output only. The last time Hosting systems checked for the file contents. */
		lastCheckTime: FormControl<string | null | undefined>,

		/** Output only. The path to the file. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateHttpUpdateFormGroup() {
		return new FormGroup<HttpUpdateFormProperties>({
			desired: new FormControl<string | null | undefined>(undefined),
			discovered: new FormControl<string | null | undefined>(undefined),
			lastCheckTime: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An SSL certificate used to provide end-to-end encryption for requests against your domain name. A `Certificate` can be an actual SSL certificate or, for newly-created custom domains, Hosting's intent to create one. */
	export interface Certificate {

		/** Output only. The certificate's creation time. For `TEMPORARY` certs this is the time Hosting first generated challenges for your domain name. For all other cert types, it's the time the actual cert was created. */
		createTime?: string | null;

		/** Output only. The certificate's expiration time. After this time, the cert can no longer be used to provide secure communication between Hosting and your site's visitors. */
		expireTime?: string | null;

		/** Output only. A set of errors Hosting encountered when attempting to create a cert for your domain name. Resolve these issues to ensure Hosting is able to provide secure communication with your site's visitors. */
		issues?: Array<Status>;

		/** Output only. The state of the certificate. Only the `CERT_ACTIVE` and `CERT_EXPIRING_SOON` states provide SSL coverage for a domain name. If the state is `PROPAGATING` and Hosting had an active cert for the domain name before, that formerly-active cert provides SSL coverage for the domain name until the current cert propagates. */
		state?: CertificateState | null;

		/** Output only. The certificate's type. */
		type?: CertificateType | null;

		/** A set of ACME challenges you can use to allow Hosting to create an SSL certificate for your domain name before directing traffic to Hosting servers. Use either the DNS or HTTP challenge; it's not necessary to provide both. */
		verification?: CertVerification;
	}

	/** An SSL certificate used to provide end-to-end encryption for requests against your domain name. A `Certificate` can be an actual SSL certificate or, for newly-created custom domains, Hosting's intent to create one. */
	export interface CertificateFormProperties {

		/** Output only. The certificate's creation time. For `TEMPORARY` certs this is the time Hosting first generated challenges for your domain name. For all other cert types, it's the time the actual cert was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The certificate's expiration time. After this time, the cert can no longer be used to provide secure communication between Hosting and your site's visitors. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The state of the certificate. Only the `CERT_ACTIVE` and `CERT_EXPIRING_SOON` states provide SSL coverage for a domain name. If the state is `PROPAGATING` and Hosting had an active cert for the domain name before, that formerly-active cert provides SSL coverage for the domain name until the current cert propagates. */
		state: FormControl<CertificateState | null | undefined>,

		/** Output only. The certificate's type. */
		type: FormControl<CertificateType | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CertificateState | null | undefined>(undefined),
			type: new FormControl<CertificateType | null | undefined>(undefined),
		});

	}

	export enum CertificateState { CERT_STATE_UNSPECIFIED = 'CERT_STATE_UNSPECIFIED', CERT_PREPARING = 'CERT_PREPARING', CERT_VALIDATING = 'CERT_VALIDATING', CERT_PROPAGATING = 'CERT_PROPAGATING', CERT_ACTIVE = 'CERT_ACTIVE', CERT_EXPIRING_SOON = 'CERT_EXPIRING_SOON', CERT_EXPIRED = 'CERT_EXPIRED' }

	export enum CertificateType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', TEMPORARY = 'TEMPORARY', GROUPED = 'GROUPED', PROJECT_GROUPED = 'PROJECT_GROUPED', DEDICATED = 'DEDICATED' }


	/** A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains. */
	export interface Channel {

		/** Output only. The time at which the channel was created. */
		createTime?: string | null;

		/** The time at which the channel will be automatically deleted. If null, the channel will not be automatically deleted. This field is present in the output whether it's set directly or via the `ttl` field. */
		expireTime?: string | null;

		/** Text labels used for extra metadata and/or filtering. */
		labels?: {[id: string]: string };

		/** The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID */
		name?: string | null;

		/** A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time. */
		release?: Release;

		/**
		 * The number of previous releases to retain on the channel for rollback or other purposes. Must be a number between 1-100. Defaults to 10 for new channels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retainedReleaseCount?: number | null;

		/** Input only. A time-to-live for this channel. Sets `expire_time` to the provided duration past the time of the request. */
		ttl?: string | null;

		/** Output only. The time at which the channel was last updated. */
		updateTime?: string | null;

		/** Output only. The URL at which the content of this channel's current release can be viewed. This URL is a Firebase-provided subdomain of `web.app`. The content of this channel's current release can also be viewed at the Firebase-provided subdomain of `firebaseapp.com`. If this channel is the `live` channel for the Hosting site, then the content of this channel's current release can also be viewed at any connected custom domains. */
		url?: string | null;
	}

	/** A `Channel` represents a stream of releases for a site. All sites have a default `live` channel that serves content to the Firebase-provided subdomains and any connected custom domains. */
	export interface ChannelFormProperties {

		/** Output only. The time at which the channel was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time at which the channel will be automatically deleted. If null, the channel will not be automatically deleted. This field is present in the output whether it's set directly or via the `ttl` field. */
		expireTime: FormControl<string | null | undefined>,

		/** Text labels used for extra metadata and/or filtering. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID */
		name: FormControl<string | null | undefined>,

		/**
		 * The number of previous releases to retain on the channel for rollback or other purposes. Must be a number between 1-100. Defaults to 10 for new channels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retainedReleaseCount: FormControl<number | null | undefined>,

		/** Input only. A time-to-live for this channel. Sets `expire_time` to the provided duration past the time of the request. */
		ttl: FormControl<string | null | undefined>,

		/** Output only. The time at which the channel was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The URL at which the content of this channel's current release can be viewed. This URL is a Firebase-provided subdomain of `web.app`. The content of this channel's current release can also be viewed at the Firebase-provided subdomain of `firebaseapp.com`. If this channel is the `live` channel for the Hosting site, then the content of this channel's current release can also be viewed at any connected custom domains. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			retainedReleaseCount: new FormControl<number | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time. */
	export interface Release {

		/** The deploy description when the release was created. The value can be up to 512 characters. */
		message?: string | null;

		/** Output only. The unique identifier for the release, in either of the following formats: - sites/SITE_ID/releases/RELEASE_ID - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID This name is provided in the response body when you call [`releases.create`](sites.releases/create) or [`channels.releases.create`](sites.channels.releases/create). */
		name?: string | null;

		/** Output only. The time at which the version is set to be public. */
		releaseTime?: string | null;

		/** Contains metadata about the user who performed an action, such as creating a release or finalizing a version. */
		releaseUser?: ActingUser;

		/** Explains the reason for the release. Specify a value for this field only when creating a `SITE_DISABLE` type release. */
		type?: ReleaseType | null;

		/** A `Version` is a configuration and a collection of static files which determine how a site is displayed. */
		version?: Version;
	}

	/**  A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time. */
	export interface ReleaseFormProperties {

		/** The deploy description when the release was created. The value can be up to 512 characters. */
		message: FormControl<string | null | undefined>,

		/** Output only. The unique identifier for the release, in either of the following formats: - sites/SITE_ID/releases/RELEASE_ID - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID This name is provided in the response body when you call [`releases.create`](sites.releases/create) or [`channels.releases.create`](sites.channels.releases/create). */
		name: FormControl<string | null | undefined>,

		/** Output only. The time at which the version is set to be public. */
		releaseTime: FormControl<string | null | undefined>,

		/** Explains the reason for the release. Specify a value for this field only when creating a `SITE_DISABLE` type release. */
		type: FormControl<ReleaseType | null | undefined>,
	}
	export function CreateReleaseFormGroup() {
		return new FormGroup<ReleaseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			releaseTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ReleaseType | null | undefined>(undefined),
		});

	}

	export enum ReleaseType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', DEPLOY = 'DEPLOY', ROLLBACK = 'ROLLBACK', SITE_DISABLE = 'SITE_DISABLE' }


	/** A `Version` is a configuration and a collection of static files which determine how a site is displayed. */
	export interface Version {

		/** The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order). */
		config?: ServingConfig;

		/** Output only. The time at which the version was created. */
		createTime?: string | null;

		/** Contains metadata about the user who performed an action, such as creating a release or finalizing a version. */
		createUser?: ActingUser;

		/** Output only. The time at which the version was `DELETED`. */
		deleteTime?: string | null;

		/** Contains metadata about the user who performed an action, such as creating a release or finalizing a version. */
		deleteUser?: ActingUser;

		/** Output only. The total number of files associated with the version. This value is calculated after a version is `FINALIZED`. */
		fileCount?: string | null;

		/** Output only. The time at which the version was `FINALIZED`. */
		finalizeTime?: string | null;

		/** Contains metadata about the user who performed an action, such as creating a release or finalizing a version. */
		finalizeUser?: ActingUser;

		/** The labels used for extra metadata and/or filtering. */
		labels?: {[id: string]: string };

		/** The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create). */
		name?: string | null;

		/** The deploy status of the version. For a successful deploy, call [`CreateVersion`](sites.versions/create) to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. Note that if you leave the version in the `CREATED` state for more than 12 hours, the system will automatically mark the version as `ABANDONED`. You can also change the status of a version to `DELETED` by calling [`DeleteVersion`](sites.versions/delete). */
		status?: VersionStatus | null;

		/** Output only. The total stored bytesize of the version. This value is calculated after a version is `FINALIZED`. */
		versionBytes?: string | null;
	}

	/** A `Version` is a configuration and a collection of static files which determine how a site is displayed. */
	export interface VersionFormProperties {

		/** Output only. The time at which the version was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time at which the version was `DELETED`. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. The total number of files associated with the version. This value is calculated after a version is `FINALIZED`. */
		fileCount: FormControl<string | null | undefined>,

		/** Output only. The time at which the version was `FINALIZED`. */
		finalizeTime: FormControl<string | null | undefined>,

		/** The labels used for extra metadata and/or filtering. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create). */
		name: FormControl<string | null | undefined>,

		/** The deploy status of the version. For a successful deploy, call [`CreateVersion`](sites.versions/create) to make a new version (`CREATED` status), [upload all desired files](sites.versions/populateFiles) to the version, then [update](sites.versions/patch) the version to the `FINALIZED` status. Note that if you leave the version in the `CREATED` state for more than 12 hours, the system will automatically mark the version as `ABANDONED`. You can also change the status of a version to `DELETED` by calling [`DeleteVersion`](sites.versions/delete). */
		status: FormControl<VersionStatus | null | undefined>,

		/** Output only. The total stored bytesize of the version. This value is calculated after a version is `FINALIZED`. */
		versionBytes: FormControl<string | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			fileCount: new FormControl<string | null | undefined>(undefined),
			finalizeTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VersionStatus | null | undefined>(undefined),
			versionBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order). */
	export interface ServingConfig {

		/** How to handle well known App Association files. */
		appAssociation?: ServingConfigAppAssociation | null;

		/** Defines whether to drop the file extension from uploaded files. */
		cleanUrls?: boolean | null;

		/** An array of objects, where each object specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers. */
		headers?: Array<Header>;

		/** If provided, i18n rewrites are enabled. */
		i18n?: I18nConfig;

		/** An array of objects (called redirect rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path. */
		redirects?: Array<Redirect>;

		/** An array of objects (called rewrite rules), where each rule specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL. */
		rewrites?: Array<Rewrite>;

		/** Defines how to handle a trailing slash in the URL path. */
		trailingSlashBehavior?: ServingConfigTrailingSlashBehavior | null;
	}

	/** The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order). */
	export interface ServingConfigFormProperties {

		/** How to handle well known App Association files. */
		appAssociation: FormControl<ServingConfigAppAssociation | null | undefined>,

		/** Defines whether to drop the file extension from uploaded files. */
		cleanUrls: FormControl<boolean | null | undefined>,

		/** Defines how to handle a trailing slash in the URL path. */
		trailingSlashBehavior: FormControl<ServingConfigTrailingSlashBehavior | null | undefined>,
	}
	export function CreateServingConfigFormGroup() {
		return new FormGroup<ServingConfigFormProperties>({
			appAssociation: new FormControl<ServingConfigAppAssociation | null | undefined>(undefined),
			cleanUrls: new FormControl<boolean | null | undefined>(undefined),
			trailingSlashBehavior: new FormControl<ServingConfigTrailingSlashBehavior | null | undefined>(undefined),
		});

	}

	export enum ServingConfigAppAssociation { AUTO = 'AUTO', NONE = 'NONE' }


	/** A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers. */
	export interface Header {

		/** The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path. */
		glob?: string | null;

		/** Required. The additional headers to add to the response. */
		headers?: {[id: string]: string };

		/** The user-supplied RE2 regular expression to match against the request URL path. */
		regex?: string | null;
	}

	/** A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers. */
	export interface HeaderFormProperties {

		/** The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path. */
		glob: FormControl<string | null | undefined>,

		/** Required. The additional headers to add to the response. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** The user-supplied RE2 regular expression to match against the request URL path. */
		regex: FormControl<string | null | undefined>,
	}
	export function CreateHeaderFormGroup() {
		return new FormGroup<HeaderFormProperties>({
			glob: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If provided, i18n rewrites are enabled. */
	export interface I18nConfig {

		/** Required. The user-supplied path where country and language specific content will be looked for within the public directory. */
		root?: string | null;
	}

	/** If provided, i18n rewrites are enabled. */
	export interface I18nConfigFormProperties {

		/** Required. The user-supplied path where country and language specific content will be looked for within the public directory. */
		root: FormControl<string | null | undefined>,
	}
	export function CreateI18nConfigFormGroup() {
		return new FormGroup<I18nConfigFormProperties>({
			root: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path. */
	export interface Redirect {

		/** The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path. */
		glob?: string | null;

		/** Required. The value to put in the HTTP location header of the response. The location can contain capture group values from the pattern using a `:` prefix to identify the segment and an optional `*` to capture the rest of the URL. For example: "glob": "/:capture*", "statusCode": 301, "location": "https://example.com/foo/:capture" */
		location?: string | null;

		/** The user-supplied RE2 regular expression to match against the request URL path. */
		regex?: string | null;

		/**
		 * Required. The status HTTP code to return in the response. It must be a valid 3xx status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}

	/** A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path. */
	export interface RedirectFormProperties {

		/** The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path. */
		glob: FormControl<string | null | undefined>,

		/** Required. The value to put in the HTTP location header of the response. The location can contain capture group values from the pattern using a `:` prefix to identify the segment and an optional `*` to capture the rest of the URL. For example: "glob": "/:capture*", "statusCode": 301, "location": "https://example.com/foo/:capture" */
		location: FormControl<string | null | undefined>,

		/** The user-supplied RE2 regular expression to match against the request URL path. */
		regex: FormControl<string | null | undefined>,

		/**
		 * Required. The status HTTP code to return in the response. It must be a valid 3xx status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateRedirectFormGroup() {
		return new FormGroup<RedirectFormProperties>({
			glob: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL. */
	export interface Rewrite {

		/** The request will be forwarded to Firebase Dynamic Links. */
		dynamicLinks?: boolean | null;

		/** The function to proxy requests to. Must match the exported function name exactly. */
		function?: string | null;

		/** Optional. Specify a Cloud region for rewritten Functions invocations. If not provided, defaults to us-central1. */
		functionRegion?: string | null;

		/** The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path. */
		glob?: string | null;

		/** The URL path to rewrite the request to. */
		path?: string | null;

		/** The user-supplied RE2 regular expression to match against the request URL path. */
		regex?: string | null;

		/** A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error). */
		run?: CloudRunRewrite;
	}

	/** A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL. */
	export interface RewriteFormProperties {

		/** The request will be forwarded to Firebase Dynamic Links. */
		dynamicLinks: FormControl<boolean | null | undefined>,

		/** The function to proxy requests to. Must match the exported function name exactly. */
		function: FormControl<string | null | undefined>,

		/** Optional. Specify a Cloud region for rewritten Functions invocations. If not provided, defaults to us-central1. */
		functionRegion: FormControl<string | null | undefined>,

		/** The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path. */
		glob: FormControl<string | null | undefined>,

		/** The URL path to rewrite the request to. */
		path: FormControl<string | null | undefined>,

		/** The user-supplied RE2 regular expression to match against the request URL path. */
		regex: FormControl<string | null | undefined>,
	}
	export function CreateRewriteFormGroup() {
		return new FormGroup<RewriteFormProperties>({
			dynamicLinks: new FormControl<boolean | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			functionRegion: new FormControl<string | null | undefined>(undefined),
			glob: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error). */
	export interface CloudRunRewrite {

		/** Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied. */
		region?: string | null;

		/** Required. User-defined ID of the Cloud Run service. */
		serviceId?: string | null;

		/** Optional. User-provided TrafficConfig tag to send traffic to. When omitted, traffic is sent to the service-wide URI */
		tag?: string | null;
	}

	/** A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error). */
	export interface CloudRunRewriteFormProperties {

		/** Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied. */
		region: FormControl<string | null | undefined>,

		/** Required. User-defined ID of the Cloud Run service. */
		serviceId: FormControl<string | null | undefined>,

		/** Optional. User-provided TrafficConfig tag to send traffic to. When omitted, traffic is sent to the service-wide URI */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateCloudRunRewriteFormGroup() {
		return new FormGroup<CloudRunRewriteFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServingConfigTrailingSlashBehavior { TRAILING_SLASH_BEHAVIOR_UNSPECIFIED = 'TRAILING_SLASH_BEHAVIOR_UNSPECIFIED', ADD = 'ADD', REMOVE = 'REMOVE' }

	export enum VersionStatus { VERSION_STATUS_UNSPECIFIED = 'VERSION_STATUS_UNSPECIFIED', CREATED = 'CREATED', FINALIZED = 'FINALIZED', DELETED = 'DELETED', ABANDONED = 'ABANDONED', EXPIRED = 'EXPIRED', CLONING = 'CLONING' }

	export interface CloneVersionRequest {

		/** A representation of filter path. */
		exclude?: PathFilter;

		/** If true, the call to `CloneVersion` immediately finalizes the version after cloning is complete. If false, the cloned version will have a status of `CREATED`. Use [`UpdateVersion`](patch) to set the status of the version to `FINALIZED`. */
		finalize?: boolean | null;

		/** A representation of filter path. */
		include?: PathFilter;

		/** Required. The unique identifier for the version to be cloned, in the format: sites/SITE_ID/versions/VERSION_ID */
		sourceVersion?: string | null;
	}
	export interface CloneVersionRequestFormProperties {

		/** If true, the call to `CloneVersion` immediately finalizes the version after cloning is complete. If false, the cloned version will have a status of `CREATED`. Use [`UpdateVersion`](patch) to set the status of the version to `FINALIZED`. */
		finalize: FormControl<boolean | null | undefined>,

		/** Required. The unique identifier for the version to be cloned, in the format: sites/SITE_ID/versions/VERSION_ID */
		sourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateCloneVersionRequestFormGroup() {
		return new FormGroup<CloneVersionRequestFormProperties>({
			finalize: new FormControl<boolean | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of filter path. */
	export interface PathFilter {

		/** An array of RegEx values by which to filter. */
		regexes?: Array<string>;
	}

	/** A representation of filter path. */
	export interface PathFilterFormProperties {
	}
	export function CreatePathFilterFormGroup() {
		return new FormGroup<PathFilterFormProperties>({
		});

	}


	/** A `CustomDomain` is an entity that links a domain name to a Firebase Hosting site. Add a `CustomDomain` to your site to allow Hosting to serve the site's content in response to requests against your domain name. */
	export interface CustomDomain {

		/** Annotations you can add to leave both human- and machine-readable metadata about your `CustomDomain`. */
		annotations?: {[id: string]: string };

		/** An SSL certificate used to provide end-to-end encryption for requests against your domain name. A `Certificate` can be an actual SSL certificate or, for newly-created custom domains, Hosting's intent to create one. */
		cert?: Certificate;

		/** A field that lets you specify which SSL certificate type Hosting creates for your domain name. Spark plan custom domains only have access to the `GROUPED` cert type, while Blaze plan domains can select any option. */
		certPreference?: CertificateType | null;

		/** Output only. The custom domain's create time. */
		createTime?: string | null;

		/** Output only. The time the `CustomDomain` was deleted; null for custom domains that haven't been deleted. Deleted custom domains persist for approximately 30 days, after which time Hosting removes them completely. To restore a deleted custom domain, make an `UndeleteCustomDomain` request. */
		deleteTime?: string | null;

		/** Output only. A string that represents the current state of the `CustomDomain` and allows you to confirm its initial state in requests that would modify it. Use the tag to ensure consistency when making `UpdateCustomDomain`, `DeleteCustomDomain`, and `UndeleteCustomDomain` requests. */
		etag?: string | null;

		/** Output only. The minimum time before a soft-deleted `CustomDomain` is completely removed from Hosting; null for custom domains that haven't been deleted. */
		expireTime?: string | null;

		/** Output only. The `HostState` of the domain name this `CustomDomain` refers to. */
		hostState?: CustomDomainHostState | null;

		/** Output only. A set of errors Hosting systems encountered when trying to establish Hosting's ability to serve secure content for your domain name. Resolve these issues to ensure your `CustomDomain` behaves properly. */
		issues?: Array<Status>;

		/** Labels used for extra metadata and/or filtering. */
		labels?: {[id: string]: string };

		/** Output only. The fully-qualified name of the `CustomDomain`. */
		name?: string | null;

		/** Output only. The `OwnershipState` of the domain name this `CustomDomain` refers to. */
		ownershipState?: CustomDomainOwnershipState | null;

		/** Output only. A field that, if true, indicates that Hosting's systems are attmepting to make the custom domain's state match your preferred state. This is most frequently `true` when initially provisioning a `CustomDomain` after a `CreateCustomDomain` request or when creating a new SSL certificate to match an updated `cert_preference` after an `UpdateCustomDomain` request. */
		reconciling?: boolean | null;

		/** A domain name that this `CustomDomain` should direct traffic towards. If specified, Hosting will respond to requests against this custom domain with an HTTP 301 code, and route traffic to the specified `redirect_target` instead. */
		redirectTarget?: string | null;

		/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
		requiredDnsUpdates?: DnsUpdates;

		/** Output only. The last time the `CustomDomain` was updated. */
		updateTime?: string | null;
	}

	/** A `CustomDomain` is an entity that links a domain name to a Firebase Hosting site. Add a `CustomDomain` to your site to allow Hosting to serve the site's content in response to requests against your domain name. */
	export interface CustomDomainFormProperties {

		/** Annotations you can add to leave both human- and machine-readable metadata about your `CustomDomain`. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** A field that lets you specify which SSL certificate type Hosting creates for your domain name. Spark plan custom domains only have access to the `GROUPED` cert type, while Blaze plan domains can select any option. */
		certPreference: FormControl<CertificateType | null | undefined>,

		/** Output only. The custom domain's create time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the `CustomDomain` was deleted; null for custom domains that haven't been deleted. Deleted custom domains persist for approximately 30 days, after which time Hosting removes them completely. To restore a deleted custom domain, make an `UndeleteCustomDomain` request. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. A string that represents the current state of the `CustomDomain` and allows you to confirm its initial state in requests that would modify it. Use the tag to ensure consistency when making `UpdateCustomDomain`, `DeleteCustomDomain`, and `UndeleteCustomDomain` requests. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The minimum time before a soft-deleted `CustomDomain` is completely removed from Hosting; null for custom domains that haven't been deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The `HostState` of the domain name this `CustomDomain` refers to. */
		hostState: FormControl<CustomDomainHostState | null | undefined>,

		/** Labels used for extra metadata and/or filtering. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The fully-qualified name of the `CustomDomain`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The `OwnershipState` of the domain name this `CustomDomain` refers to. */
		ownershipState: FormControl<CustomDomainOwnershipState | null | undefined>,

		/** Output only. A field that, if true, indicates that Hosting's systems are attmepting to make the custom domain's state match your preferred state. This is most frequently `true` when initially provisioning a `CustomDomain` after a `CreateCustomDomain` request or when creating a new SSL certificate to match an updated `cert_preference` after an `UpdateCustomDomain` request. */
		reconciling: FormControl<boolean | null | undefined>,

		/** A domain name that this `CustomDomain` should direct traffic towards. If specified, Hosting will respond to requests against this custom domain with an HTTP 301 code, and route traffic to the specified `redirect_target` instead. */
		redirectTarget: FormControl<string | null | undefined>,

		/** Output only. The last time the `CustomDomain` was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCustomDomainFormGroup() {
		return new FormGroup<CustomDomainFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			certPreference: new FormControl<CertificateType | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			hostState: new FormControl<CustomDomainHostState | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownershipState: new FormControl<CustomDomainOwnershipState | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			redirectTarget: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomDomainHostState { HOST_STATE_UNSPECIFIED = 'HOST_STATE_UNSPECIFIED', HOST_UNHOSTED = 'HOST_UNHOSTED', HOST_UNREACHABLE = 'HOST_UNREACHABLE', HOST_MISMATCH = 'HOST_MISMATCH', HOST_CONFLICT = 'HOST_CONFLICT', HOST_ACTIVE = 'HOST_ACTIVE' }

	export enum CustomDomainOwnershipState { OWNERSHIP_STATE_UNSPECIFIED = 'OWNERSHIP_STATE_UNSPECIFIED', OWNERSHIP_MISSING = 'OWNERSHIP_MISSING', OWNERSHIP_UNREACHABLE = 'OWNERSHIP_UNREACHABLE', OWNERSHIP_MISMATCH = 'OWNERSHIP_MISMATCH', OWNERSHIP_CONFLICT = 'OWNERSHIP_CONFLICT', OWNERSHIP_PENDING = 'OWNERSHIP_PENDING', OWNERSHIP_ACTIVE = 'OWNERSHIP_ACTIVE' }


	/** Metadata associated with a`CustomDomain` operation. */
	export interface CustomDomainMetadata {

		/** The `CertState` of the domain name's SSL certificate. */
		certState?: CertificateState | null;

		/** The `HostState` of the domain name this `CustomDomain` refers to. */
		hostState?: CustomDomainHostState | null;

		/** A list of issues that are currently preventing Hosting from completing the operation. These are generally DNS-related issues that Hosting encounters when querying a domain name's records or attempting to mint an SSL certificate. */
		issues?: Array<Status>;

		/** A set of DNS record updates and ACME challenges that allow you to transition domain names to Firebase Hosting with zero downtime. These updates allow Hosting to create an SSL certificate and establish ownership for your custom domain before Hosting begins serving traffic on it. If your domain name is already in active use with another provider, add one of the challenges and make the recommended DNS updates. After adding challenges and adjusting DNS records as necessary, wait for the `ownershipState` to be `OWNERSHIP_ACTIVE` and the `certState` to be `CERT_ACTIVE` before sending traffic to Hosting. */
		liveMigrationSteps?: Array<LiveMigrationStep>;

		/** The `OwnershipState` of the domain name this `CustomDomain` refers to. */
		ownershipState?: CustomDomainOwnershipState | null;

		/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
		quickSetupUpdates?: DnsUpdates;
	}

	/** Metadata associated with a`CustomDomain` operation. */
	export interface CustomDomainMetadataFormProperties {

		/** The `CertState` of the domain name's SSL certificate. */
		certState: FormControl<CertificateState | null | undefined>,

		/** The `HostState` of the domain name this `CustomDomain` refers to. */
		hostState: FormControl<CustomDomainHostState | null | undefined>,

		/** The `OwnershipState` of the domain name this `CustomDomain` refers to. */
		ownershipState: FormControl<CustomDomainOwnershipState | null | undefined>,
	}
	export function CreateCustomDomainMetadataFormGroup() {
		return new FormGroup<CustomDomainMetadataFormProperties>({
			certState: new FormControl<CertificateState | null | undefined>(undefined),
			hostState: new FormControl<CustomDomainHostState | null | undefined>(undefined),
			ownershipState: new FormControl<CustomDomainOwnershipState | null | undefined>(undefined),
		});

	}


	/** A set of updates including ACME challenges and DNS records that allow Hosting to create an SSL certificate and establish project ownership for your domain name before you direct traffic to Hosting servers. Use these updates to facilitate zero downtime migrations to Hosting from other services. After you've made the recommended updates, check your custom domain's `ownershipState` and `certState`. To avoid downtime, they should be `OWNERSHIP_ACTIVE` and `CERT_ACTIVE`, respectively, before you update your `A` and `AAAA` records. */
	export interface LiveMigrationStep {

		/** A set of ACME challenges you can use to allow Hosting to create an SSL certificate for your domain name before directing traffic to Hosting servers. Use either the DNS or HTTP challenge; it's not necessary to provide both. */
		certVerification?: CertVerification;

		/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
		dnsUpdates?: DnsUpdates;

		/** Output only. Issues that prevent the current step from completing. */
		issues?: Array<Status>;

		/** Output only. The state of the live migration step, indicates whether you should work to complete the step now, in the future, or have already completed it. */
		state?: LiveMigrationStepState | null;
	}

	/** A set of updates including ACME challenges and DNS records that allow Hosting to create an SSL certificate and establish project ownership for your domain name before you direct traffic to Hosting servers. Use these updates to facilitate zero downtime migrations to Hosting from other services. After you've made the recommended updates, check your custom domain's `ownershipState` and `certState`. To avoid downtime, they should be `OWNERSHIP_ACTIVE` and `CERT_ACTIVE`, respectively, before you update your `A` and `AAAA` records. */
	export interface LiveMigrationStepFormProperties {

		/** Output only. The state of the live migration step, indicates whether you should work to complete the step now, in the future, or have already completed it. */
		state: FormControl<LiveMigrationStepState | null | undefined>,
	}
	export function CreateLiveMigrationStepFormGroup() {
		return new FormGroup<LiveMigrationStepFormProperties>({
			state: new FormControl<LiveMigrationStepState | null | undefined>(undefined),
		});

	}

	export enum LiveMigrationStepState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PREPARING = 'PREPARING', PENDING = 'PENDING', INCOMPLETE = 'INCOMPLETE', PROCESSING = 'PROCESSING', COMPLETE = 'COMPLETE' }


	/** The intended behavior and status information of a domain. */
	export interface Domain {

		/** Required. The domain name of the association. */
		domainName?: string | null;

		/** Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration. */
		domainRedirect?: DomainRedirect;

		/** The current certificate provisioning status information for a domain. */
		provisioning?: DomainProvisioning;

		/** Required. The site name of the association. */
		site?: string | null;

		/** Output only. Additional status of the domain association. */
		status?: DomainStatus | null;

		/** Output only. The time at which the domain was last updated. */
		updateTime?: string | null;
	}

	/** The intended behavior and status information of a domain. */
	export interface DomainFormProperties {

		/** Required. The domain name of the association. */
		domainName: FormControl<string | null | undefined>,

		/** Required. The site name of the association. */
		site: FormControl<string | null | undefined>,

		/** Output only. Additional status of the domain association. */
		status: FormControl<DomainStatus | null | undefined>,

		/** Output only. The time at which the domain was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			site: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DomainStatus | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration. */
	export interface DomainRedirect {

		/** Required. The domain name to redirect to. */
		domainName?: string | null;

		/** Required. The redirect status code. */
		type?: DomainRedirectType | null;
	}

	/** Defines the behavior of a domain-level redirect. Domain redirects preserve the path of the redirect but replace the requested domain with the one specified in the redirect configuration. */
	export interface DomainRedirectFormProperties {

		/** Required. The domain name to redirect to. */
		domainName: FormControl<string | null | undefined>,

		/** Required. The redirect status code. */
		type: FormControl<DomainRedirectType | null | undefined>,
	}
	export function CreateDomainRedirectFormGroup() {
		return new FormGroup<DomainRedirectFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DomainRedirectType | null | undefined>(undefined),
		});

	}

	export enum DomainRedirectType { REDIRECT_TYPE_UNSPECIFIED = 'REDIRECT_TYPE_UNSPECIFIED', MOVED_PERMANENTLY = 'MOVED_PERMANENTLY' }


	/** The current certificate provisioning status information for a domain. */
	export interface DomainProvisioning {

		/** The TXT records (for the certificate challenge) that were found at the last DNS fetch. */
		certChallengeDiscoveredTxt?: Array<string>;

		/** Represents a DNS certificate challenge. */
		certChallengeDns?: CertDnsChallenge;

		/** Represents an HTTP certificate challenge. */
		certChallengeHttp?: CertHttpChallenge;

		/** The certificate provisioning status; updated when Firebase Hosting provisions an SSL certificate for the domain. */
		certStatus?: DomainProvisioningCertStatus | null;

		/** The IPs found at the last DNS fetch. */
		discoveredIps?: Array<string>;

		/** The time at which the last DNS fetch occurred. */
		dnsFetchTime?: string | null;

		/** The DNS record match status as of the last DNS fetch. */
		dnsStatus?: DomainProvisioningDnsStatus | null;

		/** The list of IPs to which the domain is expected to resolve. */
		expectedIps?: Array<string>;
	}

	/** The current certificate provisioning status information for a domain. */
	export interface DomainProvisioningFormProperties {

		/** The certificate provisioning status; updated when Firebase Hosting provisions an SSL certificate for the domain. */
		certStatus: FormControl<DomainProvisioningCertStatus | null | undefined>,

		/** The time at which the last DNS fetch occurred. */
		dnsFetchTime: FormControl<string | null | undefined>,

		/** The DNS record match status as of the last DNS fetch. */
		dnsStatus: FormControl<DomainProvisioningDnsStatus | null | undefined>,
	}
	export function CreateDomainProvisioningFormGroup() {
		return new FormGroup<DomainProvisioningFormProperties>({
			certStatus: new FormControl<DomainProvisioningCertStatus | null | undefined>(undefined),
			dnsFetchTime: new FormControl<string | null | undefined>(undefined),
			dnsStatus: new FormControl<DomainProvisioningDnsStatus | null | undefined>(undefined),
		});

	}

	export enum DomainProvisioningCertStatus { CERT_STATUS_UNSPECIFIED = 'CERT_STATUS_UNSPECIFIED', CERT_PENDING = 'CERT_PENDING', CERT_MISSING = 'CERT_MISSING', CERT_PROCESSING = 'CERT_PROCESSING', CERT_PROPAGATING = 'CERT_PROPAGATING', CERT_ACTIVE = 'CERT_ACTIVE', CERT_ERROR = 'CERT_ERROR' }

	export enum DomainProvisioningDnsStatus { DNS_STATUS_UNSPECIFIED = 'DNS_STATUS_UNSPECIFIED', DNS_PENDING = 'DNS_PENDING', DNS_MISSING = 'DNS_MISSING', DNS_PARTIAL_MATCH = 'DNS_PARTIAL_MATCH', DNS_MATCH = 'DNS_MATCH', DNS_EXTRANEOUS_MATCH = 'DNS_EXTRANEOUS_MATCH' }

	export enum DomainStatus { DOMAIN_STATUS_UNSPECIFIED = 'DOMAIN_STATUS_UNSPECIFIED', DOMAIN_CHANGE_PENDING = 'DOMAIN_CHANGE_PENDING', DOMAIN_ACTIVE = 'DOMAIN_ACTIVE', DOMAIN_VERIFICATION_REQUIRED = 'DOMAIN_VERIFICATION_REQUIRED', DOMAIN_VERIFICATION_LOST = 'DOMAIN_VERIFICATION_LOST' }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}

	export interface ListChannelsResponse {

		/** The list of channels. */
		channels?: Array<Channel>;

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListChannels`. Page tokens are short-lived and should not be stored. */
		nextPageToken?: string | null;
	}
	export interface ListChannelsResponseFormProperties {

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListChannels`. Page tokens are short-lived and should not be stored. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from `ListCustomDomains`. */
	export interface ListCustomDomainsResponse {

		/** A list of `CustomDomain` entities associated with the specified Firebase `Site`. */
		customDomains?: Array<CustomDomain>;

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListCustomDomains`. Page tokens are short-lived and should not be stored. */
		nextPageToken?: string | null;
	}

	/** The response from `ListCustomDomains`. */
	export interface ListCustomDomainsResponseFormProperties {

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListCustomDomains`. Page tokens are short-lived and should not be stored. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomDomainsResponseFormGroup() {
		return new FormGroup<ListCustomDomainsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to listing Domains. */
	export interface ListDomainsResponse {

		/** The list of domains, if any exist. */
		domains?: Array<Domain>;

		/** The pagination token, if more results exist. */
		nextPageToken?: string | null;
	}

	/** The response to listing Domains. */
	export interface ListDomainsResponseFormProperties {

		/** The pagination token, if more results exist. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface ListReleasesResponse {

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListReleases`. Page tokens are short-lived and should not be stored. */
		nextPageToken?: string | null;

		/** The list of hashes of files that still need to be uploaded, if any exist. */
		releases?: Array<Release>;
	}
	export interface ListReleasesResponseFormProperties {

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListReleases`. Page tokens are short-lived and should not be stored. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReleasesResponseFormGroup() {
		return new FormGroup<ListReleasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSitesResponse {

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListSites`. Page tokens are short-lived and should not be stored. */
		nextPageToken?: string | null;

		/** A list of Site objects associated with the specified Firebase project. */
		sites?: Array<Site>;
	}
	export interface ListSitesResponseFormProperties {

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListSites`. Page tokens are short-lived and should not be stored. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSitesResponseFormGroup() {
		return new FormGroup<ListSitesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `Site` represents a Firebase Hosting site. */
	export interface Site {

		/** Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the Hosting site. */
		appId?: string | null;

		/** Output only. The default URL for the Hosting site. */
		defaultUrl?: string | null;

		/** Optional. User-specified labels for the Hosting site. */
		labels?: {[id: string]: string };

		/** Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). */
		name?: string | null;

		/** Output only. The type of Hosting site. Every Firebase project has a `DEFAULT_SITE`, which is created when Hosting is provisioned for the project. All additional sites are `USER_SITE`. */
		type?: SiteType | null;
	}

	/** A `Site` represents a Firebase Hosting site. */
	export interface SiteFormProperties {

		/** Optional. The [ID of a Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id) associated with the Hosting site. */
		appId: FormControl<string | null | undefined>,

		/** Output only. The default URL for the Hosting site. */
		defaultUrl: FormControl<string | null | undefined>,

		/** Optional. User-specified labels for the Hosting site. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). */
		name: FormControl<string | null | undefined>,

		/** Output only. The type of Hosting site. Every Firebase project has a `DEFAULT_SITE`, which is created when Hosting is provisioned for the project. All additional sites are `USER_SITE`. */
		type: FormControl<SiteType | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			defaultUrl: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SiteType | null | undefined>(undefined),
		});

	}

	export enum SiteType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', DEFAULT_SITE = 'DEFAULT_SITE', USER_SITE = 'USER_SITE' }

	export interface ListVersionFilesResponse {

		/** The list of paths to the hashes of the files in the specified version. */
		files?: Array<VersionFile>;

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersionFiles`. Page tokens are short-lived and should not be stored. */
		nextPageToken?: string | null;
	}
	export interface ListVersionFilesResponseFormProperties {

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersionFiles`. Page tokens are short-lived and should not be stored. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVersionFilesResponseFormGroup() {
		return new FormGroup<ListVersionFilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A static content file that is part of a version. */
	export interface VersionFile {

		/** The SHA256 content hash of the file. */
		hash?: string | null;

		/** The URI at which the file's content should display. */
		path?: string | null;

		/** Output only. The current status of a particular file in the specified version. The value will be either `pending upload` or `uploaded`. */
		status?: VersionFileStatus | null;
	}

	/** A static content file that is part of a version. */
	export interface VersionFileFormProperties {

		/** The SHA256 content hash of the file. */
		hash: FormControl<string | null | undefined>,

		/** The URI at which the file's content should display. */
		path: FormControl<string | null | undefined>,

		/** Output only. The current status of a particular file in the specified version. The value will be either `pending upload` or `uploaded`. */
		status: FormControl<VersionFileStatus | null | undefined>,
	}
	export function CreateVersionFileFormGroup() {
		return new FormGroup<VersionFileFormProperties>({
			hash: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VersionFileStatus | null | undefined>(undefined),
		});

	}

	export enum VersionFileStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', EXPECTED = 'EXPECTED', ACTIVE = 'ACTIVE' }

	export interface ListVersionsResponse {

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersions`. Page tokens are short-lived and should not be stored. */
		nextPageToken?: string | null;

		/** The list of versions, if any exist. */
		versions?: Array<Version>;
	}
	export interface ListVersionsResponseFormProperties {

		/** The pagination token, if more results exist beyond the ones in this response. Include this token in your next call to `ListVersions`. Page tokens are short-lived and should not be stored. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVersionsResponseFormGroup() {
		return new FormGroup<ListVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PopulateVersionFilesRequest {

		/** A set of file paths to the hashes corresponding to assets that should be added to the version. A file path to an empty hash will remove the path from the version. Calculate a hash by Gzipping the file then taking the SHA256 hash of the newly compressed file. */
		files?: {[id: string]: string };
	}
	export interface PopulateVersionFilesRequestFormProperties {

		/** A set of file paths to the hashes corresponding to assets that should be added to the version. A file path to an empty hash will remove the path from the version. Calculate a hash by Gzipping the file then taking the SHA256 hash of the newly compressed file. */
		files: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePopulateVersionFilesRequestFormGroup() {
		return new FormGroup<PopulateVersionFilesRequestFormProperties>({
			files: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PopulateVersionFilesResponse {

		/** The content hashes of the specified files that need to be uploaded to the specified URL. */
		uploadRequiredHashes?: Array<string>;

		/** The URL to which the files should be uploaded, in the format: "https://upload-firebasehosting.googleapis.com/upload/sites/SITE_ID /versions/VERSION_ID/files" Perform a multipart `POST` of the Gzipped file contents to the URL using a forward slash and the hash of the file appended to the end. */
		uploadUrl?: string | null;
	}
	export interface PopulateVersionFilesResponseFormProperties {

		/** The URL to which the files should be uploaded, in the format: "https://upload-firebasehosting.googleapis.com/upload/sites/SITE_ID /versions/VERSION_ID/files" Perform a multipart `POST` of the Gzipped file contents to the URL using a forward slash and the hash of the file appended to the end. */
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreatePopulateVersionFilesResponseFormGroup() {
		return new FormGroup<PopulateVersionFilesResponseFormProperties>({
			uploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A `SiteConfig` contains metadata associated with a specific site that controls Firebase Hosting serving behavior */
	export interface SiteConfig {

		/** Whether or not web requests made by site visitors are logged via Cloud Logging. */
		cloudLoggingEnabled?: boolean | null;

		/** The number of FINALIZED versions that will be held for a site before automatic deletion. When a new version is deployed, content for versions in storage in excess of this number will be deleted, and will no longer be billed for storage usage. Oldest versions will be deleted first; sites are created with an unlimited number of max_versions by default. */
		maxVersions?: string | null;
	}

	/** A `SiteConfig` contains metadata associated with a specific site that controls Firebase Hosting serving behavior */
	export interface SiteConfigFormProperties {

		/** Whether or not web requests made by site visitors are logged via Cloud Logging. */
		cloudLoggingEnabled: FormControl<boolean | null | undefined>,

		/** The number of FINALIZED versions that will be held for a site before automatic deletion. When a new version is deployed, content for versions in storage in excess of this number will be deleted, and will no longer be billed for storage usage. Oldest versions will be deleted first; sites are created with an unlimited number of max_versions by default. */
		maxVersions: FormControl<string | null | undefined>,
	}
	export function CreateSiteConfigFormGroup() {
		return new FormGroup<SiteConfigFormProperties>({
			cloudLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			maxVersions: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request sent to `UndeleteCustomDomain`. */
	export interface UndeleteCustomDomainRequest {

		/** A tag that represents the state of the `CustomDomain` as you know it. If present, the supplied tag must match the current value on your `CustomDomain`, or the request fails. */
		etag?: string | null;

		/** If true, Hosting validates that it's possible to complete your request but doesn't actually delete the `CustomDomain`. */
		validateOnly?: boolean | null;
	}

	/** The request sent to `UndeleteCustomDomain`. */
	export interface UndeleteCustomDomainRequestFormProperties {

		/** A tag that represents the state of the `CustomDomain` as you know it. If present, the supplied tag must match the current value on your `CustomDomain`, or the request fails. */
		etag: FormControl<string | null | undefined>,

		/** If true, Hosting validates that it's possible to complete your request but doesn't actually delete the `CustomDomain`. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateUndeleteCustomDomainRequestFormGroup() {
		return new FormGroup<UndeleteCustomDomainRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified version.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
		 * @param {boolean} allowMissing If true, the request succeeds even if the `CustomDomain` doesn't exist.
		 * @param {string} etag A tag that represents the state of the `CustomDomain` as you know it. If present, the supplied tag must match the current value on your `CustomDomain`, or the request fails.
		 * @param {boolean} validateOnly If true, Hosting validates that it's possible to complete your request but doesn't actually delete the `CustomDomain`.
		 * @return {Empty} Successful response
		 */
		Firebasehosting_sites_versions_delete(name: string, allowMissing: boolean | null | undefined, etag: string | null | undefined, validateOnly: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
		 * @return {Version} Successful response
		 */
		Firebasehosting_sites_versions_get(name: string): Observable<Version> {
			return this.http.get<Version>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
		 * Patch v1beta1/{name}
		 * @param {string} name The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
		 * @param {string} updateMask A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
		 * @param {boolean} validateOnly If true, Hosting validates that it's possible to complete your request but doesn't actually create or update the `CustomDomain`.
		 * @return {Version} Successful response
		 */
		Firebasehosting_sites_versions_patch(name: string, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Version): Observable<Version> {
			return this.http.patch<Version>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified domain mapping, creating the mapping as if it does not exist.
		 * Put v1beta1/{name}
		 * @param {string} name Required. The name of the domain association to update or create, if an association doesn't already exist.
		 * @return {Domain} Successful response
		 */
		Firebasehosting_sites_domains_update(name: string, requestBody: Domain): Observable<Domain> {
			return this.http.put<Domain>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request.
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Firebasehosting_projects_sites_customDomains_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Undeletes the specified `CustomDomain` if it has been soft-deleted. Hosting retains soft-deleted custom domains for around 30 days before permanently deleting them.
		 * Post v1beta1/{name}:undelete
		 * @param {string} name Required. The name of the `CustomDomain` to delete.
		 * @return {Operation} Successful response
		 */
		Firebasehosting_projects_sites_customDomains_undelete(name: string, requestBody: UndeleteCustomDomainRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the channels for the specified site. All sites have a default `live` channel.
		 * Get v1beta1/{parent}/channels
		 * @param {string} parent Required. The site for which to list channels, in the format: sites/SITE_ID
		 * @param {number} pageSize The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token from a previous call to `ListChannels` that tells the server where to resume listing.
		 * @return {ListChannelsResponse} Successful response
		 */
		Firebasehosting_sites_channels_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channels&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new channel in the specified site.
		 * Post v1beta1/{parent}/channels
		 * @param {string} parent Required. The site in which to create this channel, in the format: sites/ SITE_ID
		 * @param {string} channelId Required. Immutable. A unique ID within the site that identifies the channel.
		 * @return {Channel} Successful response
		 */
		Firebasehosting_sites_channels_create(parent: string, channelId: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channels&channelId=' + (channelId == null ? '' : encodeURIComponent(channelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists each `CustomDomain` associated with the specified parent Hosting site. Returns `CustomDomain`s in a consistent, but undefined, order to facilitate pagination.
		 * Get v1beta1/{parent}/customDomains
		 * @param {string} parent Required. The Firebase Hosting `Site` with `CustomDomain` entities you'd like to list.
		 * @param {number} pageSize The max number of `CustomDomain` entities to return in a request. Defaults to 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token from a previous call to `ListCustomDomains` that tells the server where to resume listing.
		 * @param {boolean} showDeleted If true, the request returns soft-deleted `CustomDomain`s that haven't been fully-deleted yet. To restore deleted `CustomDomain`s, make an `UndeleteCustomDomain` request.
		 * @return {ListCustomDomainsResponse} Successful response
		 */
		Firebasehosting_projects_sites_customDomains_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListCustomDomainsResponse> {
			return this.http.get<ListCustomDomainsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customDomains&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a `CustomDomain`.
		 * Post v1beta1/{parent}/customDomains
		 * @param {string} parent Required. The custom domain's parent, specifically a Firebase Hosting `Site`.
		 * @param {string} customDomainId Required. The ID of the `CustomDomain`, which is the domain name you'd like to use with Firebase Hosting.
		 * @param {boolean} validateOnly If true, Hosting validates that it's possible to complete your request but doesn't actually create a new `CustomDomain`.
		 * @return {Operation} Successful response
		 */
		Firebasehosting_projects_sites_customDomains_create(parent: string, customDomainId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: CustomDomain): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customDomains&customDomainId=' + (customDomainId == null ? '' : encodeURIComponent(customDomainId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the domains for the specified site.
		 * Get v1beta1/{parent}/domains
		 * @param {string} parent Required. The parent for which to list domains, in the format: sites/ site-name
		 * @param {number} pageSize The page size to return. Defaults to 50.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token from a previous request, if provided.
		 * @return {ListDomainsResponse} Successful response
		 */
		Firebasehosting_sites_domains_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDomainsResponse> {
			return this.http.get<ListDomainsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domains&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a domain mapping on the specified site.
		 * Post v1beta1/{parent}/domains
		 * @param {string} parent Required. The parent to create the domain association for, in the format: sites/site-name
		 * @return {Domain} Successful response
		 */
		Firebasehosting_sites_domains_create(parent: string, requestBody: Domain): Observable<Domain> {
			return this.http.post<Domain>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the remaining files to be uploaded for the specified version.
		 * Get v1beta1/{parent}/files
		 * @param {string} parent Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
		 * @param {number} pageSize The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
		 * @param {VersionFileStatus} status  The type of files that should be listed for the specified version.
		 * @return {ListVersionFilesResponse} Successful response
		 */
		Firebasehosting_sites_versions_files_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, status: VersionFileStatus | null | undefined): Observable<ListVersionFilesResponse> {
			return this.http.get<ListVersionFilesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/files&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&status=' + status, {});
		}

		/**
		 * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
		 * Get v1beta1/{parent}/releases
		 * @param {string} parent Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID 
		 * @param {number} pageSize The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
		 * @return {ListReleasesResponse} Successful response
		 */
		Firebasehosting_sites_releases_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReleasesResponse> {
			return this.http.get<ListReleasesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releases&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
		 * Post v1beta1/{parent}/releases
		 * @param {string} parent Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
		 * @param {string} versionName  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
		 * @return {Release} Successful response
		 */
		Firebasehosting_sites_releases_create(parent: string, versionName: string | null | undefined, requestBody: Release): Observable<Release> {
			return this.http.post<Release>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releases&versionName=' + (versionName == null ? '' : encodeURIComponent(versionName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists each Hosting Site associated with the specified parent Firebase project.
		 * Get v1beta1/{parent}/sites
		 * @param {string} parent Required. The Firebase project for which to list sites, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @param {number} pageSize Optional. The maximum number of sites to return. The service may return a lower number if fewer sites exist than this maximum number. If unspecified, defaults to 40.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token from a previous call to `ListSites` that tells the server where to resume listing.
		 * @return {ListSitesResponse} Successful response
		 */
		Firebasehosting_projects_sites_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSitesResponse> {
			return this.http.get<ListSitesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sites&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
		 * Post v1beta1/{parent}/sites
		 * @param {string} parent Required. The Firebase project in which to create a Hosting site, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
		 * @param {string} siteId Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.
		 * @param {boolean} validateOnly Optional. If set, validates that the site_id is available and that the request would succeed, returning the expected resulting site or error.
		 * @return {Site} Successful response
		 */
		Firebasehosting_projects_sites_create(parent: string, siteId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Site): Observable<Site> {
			return this.http.post<Site>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sites&siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
		 * Get v1beta1/{parent}/versions
		 * @param {string} parent Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID 
		 * @param {string} filter A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token from a previous call to `ListVersions` that tells the server where to resume listing.
		 * @return {ListVersionsResponse} Successful response
		 */
		Firebasehosting_sites_versions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVersionsResponse> {
			return this.http.get<ListVersionsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new version for the specified site.
		 * Post v1beta1/{parent}/versions
		 * @param {string} parent Required. The site in which to create the version, in the format: sites/ SITE_ID
		 * @param {string} sizeBytes The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
		 * @param {string} versionId A unique id for the new version. This is was only specified for legacy version creations, and should be blank.
		 * @return {Version} Successful response
		 */
		Firebasehosting_sites_versions_create(parent: string, sizeBytes: string | null | undefined, versionId: string | null | undefined, requestBody: Version): Observable<Version> {
			return this.http.post<Version>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&sizeBytes=' + (sizeBytes == null ? '' : encodeURIComponent(sizeBytes)) + '&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new version on the specified target site using the content of the specified version.
		 * Post v1beta1/{parent}/versions:clone
		 * @param {string} parent Required. The target site for the cloned version, in the format: sites/ SITE_ID
		 * @return {Operation} Successful response
		 */
		Firebasehosting_sites_versions_clone(parent: string, requestBody: CloneVersionRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions:clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds content files to the specified version. Each file must be under 2 GB.
		 * Post v1beta1/{parent}:populateFiles
		 * @param {string} parent Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID
		 * @return {PopulateVersionFilesResponse} Successful response
		 */
		Firebasehosting_sites_versions_populateFiles(parent: string, requestBody: PopulateVersionFilesRequest): Observable<PopulateVersionFilesResponse> {
			return this.http.post<PopulateVersionFilesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':populateFiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

