import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Api is a top-level description of an API. Apis are produced by producers and are commitments to provide services. */
	export interface Api {

		/** Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. */
		annotations?: {[id: string]: string };

		/** A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g. "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN". */
		availability?: string | null;

		/** Output only. Creation timestamp. */
		createTime?: Date | null;

		/** A detailed description. */
		description?: string | null;

		/** Human-meaningful name. */
		displayName?: string | null;

		/** Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed. */
		labels?: {[id: string]: string };

		/** Resource name. */
		name?: string | null;

		/** The recommended deployment of the API. Format: apis/{api}/deployments/{deployment} */
		recommendedDeployment?: string | null;

		/** The recommended version of the API. Format: apis/{api}/versions/{version} */
		recommendedVersion?: string | null;

		/** Output only. Last update timestamp. */
		updateTime?: Date | null;
	}

	/** An Api is a top-level description of an API. Apis are produced by producers and are commitments to provide services. */
	export interface ApiFormProperties {

		/** Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g. "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN". */
		availability: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp. */
		createTime: FormControl<Date | null | undefined>,

		/** A detailed description. */
		description: FormControl<string | null | undefined>,

		/** Human-meaningful name. */
		displayName: FormControl<string | null | undefined>,

		/** Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** The recommended deployment of the API. Format: apis/{api}/deployments/{deployment} */
		recommendedDeployment: FormControl<string | null | undefined>,

		/** The recommended version of the API. Format: apis/{api}/versions/{version} */
		recommendedVersion: FormControl<string | null | undefined>,

		/** Output only. Last update timestamp. */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateApiFormGroup() {
		return new FormGroup<ApiFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			availability: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			recommendedDeployment: new FormControl<string | null | undefined>(undefined),
			recommendedVersion: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An ApiDeployment describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes. */
	export interface ApiDeployment {

		/** Text briefly describing how to access the endpoint. Changes to this value will not affect the revision. */
		accessGuidance?: string | null;

		/** Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. */
		annotations?: {[id: string]: string };

		/** The full resource name (including revision id) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: apis/{api}/deployments/{deployment} */
		apiSpecRevision?: string | null;

		/** Output only. Creation timestamp; when the deployment resource was created. */
		createTime?: Date | null;

		/** A detailed description. */
		description?: string | null;

		/** Human-meaningful name. */
		displayName?: string | null;

		/** The address where the deployment is serving. Changes to this value will update the revision. */
		endpointUri?: string | null;

		/** The address of the external channel of the API (e.g. the Developer Portal). Changes to this value will not affect the revision. */
		externalChannelUri?: string | null;

		/** Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision. */
		intendedAudience?: string | null;

		/** Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed. */
		labels?: {[id: string]: string };

		/** Resource name. */
		name?: string | null;

		/** Output only. Revision creation timestamp; when the represented revision was created. */
		revisionCreateTime?: Date | null;

		/** Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string. */
		revisionId?: string | null;

		/** Output only. Last update timestamp: when the represented revision was last modified. */
		revisionUpdateTime?: Date | null;
	}

	/** An ApiDeployment describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes. */
	export interface ApiDeploymentFormProperties {

		/** Text briefly describing how to access the endpoint. Changes to this value will not affect the revision. */
		accessGuidance: FormControl<string | null | undefined>,

		/** Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** The full resource name (including revision id) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: apis/{api}/deployments/{deployment} */
		apiSpecRevision: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp; when the deployment resource was created. */
		createTime: FormControl<Date | null | undefined>,

		/** A detailed description. */
		description: FormControl<string | null | undefined>,

		/** Human-meaningful name. */
		displayName: FormControl<string | null | undefined>,

		/** The address where the deployment is serving. Changes to this value will update the revision. */
		endpointUri: FormControl<string | null | undefined>,

		/** The address of the external channel of the API (e.g. the Developer Portal). Changes to this value will not affect the revision. */
		externalChannelUri: FormControl<string | null | undefined>,

		/** Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision. */
		intendedAudience: FormControl<string | null | undefined>,

		/** Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Output only. Revision creation timestamp; when the represented revision was created. */
		revisionCreateTime: FormControl<Date | null | undefined>,

		/** Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string. */
		revisionId: FormControl<string | null | undefined>,

		/** Output only. Last update timestamp: when the represented revision was last modified. */
		revisionUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateApiDeploymentFormGroup() {
		return new FormGroup<ApiDeploymentFormProperties>({
			accessGuidance: new FormControl<string | null | undefined>(undefined),
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			apiSpecRevision: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			endpointUri: new FormControl<string | null | undefined>(undefined),
			externalChannelUri: new FormControl<string | null | undefined>(undefined),
			intendedAudience: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			revisionUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An ApiSpec describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g. in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services. */
	export interface ApiSpec {

		/** Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. */
		annotations?: {[id: string]: string };

		/** Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents. */
		contents?: string | null;

		/** Output only. Creation timestamp; when the spec resource was created. */
		createTime?: Date | null;

		/** A detailed description. */
		description?: string | null;

		/** A possibly-hierarchical name used to refer to the spec from other specs. */
		filename?: string | null;

		/** Output only. A SHA-256 hash of the spec's contents. If the spec is gzipped, this is the hash of the uncompressed spec. */
		hash?: string | null;

		/** Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed. */
		labels?: {[id: string]: string };

		/** A style (format) descriptor for this spec that is specified as a Media Type (https://en.wikipedia.org/wiki/Media_type). Possible values include "application/vnd.apigee.proto", "application/vnd.apigee.openapi", and "application/vnd.apigee.graphql", with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip"). */
		mimeType?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Output only. Revision creation timestamp; when the represented revision was created. */
		revisionCreateTime?: Date | null;

		/** Output only. Immutable. The revision ID of the spec. A new revision is committed whenever the spec contents are changed. The format is an 8-character hexadecimal string. */
		revisionId?: string | null;

		/** Output only. Last update timestamp: when the represented revision was last modified. */
		revisionUpdateTime?: Date | null;

		/**
		 * Output only. The size of the spec file in bytes. If the spec is gzipped, this is the size of the uncompressed spec.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeBytes?: number | null;

		/** The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved. */
		sourceUri?: string | null;
	}

	/** An ApiSpec describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g. in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services. */
	export interface ApiSpecFormProperties {

		/** Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents. */
		contents: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp; when the spec resource was created. */
		createTime: FormControl<Date | null | undefined>,

		/** A detailed description. */
		description: FormControl<string | null | undefined>,

		/** A possibly-hierarchical name used to refer to the spec from other specs. */
		filename: FormControl<string | null | undefined>,

		/** Output only. A SHA-256 hash of the spec's contents. If the spec is gzipped, this is the hash of the uncompressed spec. */
		hash: FormControl<string | null | undefined>,

		/** Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A style (format) descriptor for this spec that is specified as a Media Type (https://en.wikipedia.org/wiki/Media_type). Possible values include "application/vnd.apigee.proto", "application/vnd.apigee.openapi", and "application/vnd.apigee.graphql", with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip"). */
		mimeType: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Output only. Revision creation timestamp; when the represented revision was created. */
		revisionCreateTime: FormControl<Date | null | undefined>,

		/** Output only. Immutable. The revision ID of the spec. A new revision is committed whenever the spec contents are changed. The format is an 8-character hexadecimal string. */
		revisionId: FormControl<string | null | undefined>,

		/** Output only. Last update timestamp: when the represented revision was last modified. */
		revisionUpdateTime: FormControl<Date | null | undefined>,

		/**
		 * Output only. The size of the spec file in bytes. If the spec is gzipped, this is the size of the uncompressed spec.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeBytes: FormControl<number | null | undefined>,

		/** The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved. */
		sourceUri: FormControl<string | null | undefined>,
	}
	export function CreateApiSpecFormGroup() {
		return new FormGroup<ApiSpecFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			contents: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<Date | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			revisionUpdateTime: new FormControl<Date | null | undefined>(undefined),
			sizeBytes: new FormControl<number | null | undefined>(undefined),
			sourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An ApiVersion describes a particular version of an API. ApiVersions are what consumers actually use. */
	export interface ApiVersion {

		/** Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. */
		annotations?: {[id: string]: string };

		/** Output only. Creation timestamp. */
		createTime?: Date | null;

		/** A detailed description. */
		description?: string | null;

		/** Human-meaningful name. */
		displayName?: string | null;

		/** Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed. */
		labels?: {[id: string]: string };

		/** Resource name. */
		name?: string | null;

		/** A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g. "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED". */
		state?: string | null;

		/** Output only. Last update timestamp. */
		updateTime?: Date | null;
	}

	/** An ApiVersion describes a particular version of an API. ApiVersions are what consumers actually use. */
	export interface ApiVersionFormProperties {

		/** Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Creation timestamp. */
		createTime: FormControl<Date | null | undefined>,

		/** A detailed description. */
		description: FormControl<string | null | undefined>,

		/** Human-meaningful name. */
		displayName: FormControl<string | null | undefined>,

		/** Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g. "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED". */
		state: FormControl<string | null | undefined>,

		/** Output only. Last update timestamp. */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateApiVersionFormGroup() {
		return new FormGroup<ApiVersionFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e. not for display in primary views of the resource but perhaps displayed or downloaded upon request. The ListArtifacts method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents. */
	export interface Artifact {

		/** Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents. */
		contents?: string | null;

		/** Output only. Creation timestamp. */
		createTime?: Date | null;

		/** Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact. */
		hash?: string | null;

		/** A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip"). */
		mimeType?: string | null;

		/** Resource name. */
		name?: string | null;

		/**
		 * Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeBytes?: number | null;

		/** Output only. Last update timestamp. */
		updateTime?: Date | null;
	}

	/** Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e. not for display in primary views of the resource but perhaps displayed or downloaded upon request. The ListArtifacts method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents. */
	export interface ArtifactFormProperties {

		/** Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents. */
		contents: FormControl<string | null | undefined>,

		/** Output only. Creation timestamp. */
		createTime: FormControl<Date | null | undefined>,

		/** Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact. */
		hash: FormControl<string | null | undefined>,

		/** A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip"). */
		mimeType: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sizeBytes: FormControl<number | null | undefined>,

		/** Output only. Last update timestamp. */
		updateTime: FormControl<Date | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<Date | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains an arbitrary serialized message along with a @type that describes the type of the serialized message. */
	export interface GoogleProtobufAny {

		/** The type of the serialized message. */
		'@type'?: string | null;
	}

	/** Contains an arbitrary serialized message along with a @type that describes the type of the serialized message. */
	export interface GoogleProtobufAnyFormProperties {

		/** The type of the serialized message. */
		'@type': FormControl<string | null | undefined>,
	}
	export function CreateGoogleProtobufAnyFormGroup() {
		return new FormGroup<GoogleProtobufAnyFormProperties>({
			'@type': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListApiDeploymentRevisionsResponse. */
	export interface ListApiDeploymentRevisionsResponse {

		/** The revisions of the deployment. */
		apiDeployments?: Array<ApiDeployment>;

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListApiDeploymentRevisionsResponse. */
	export interface ListApiDeploymentRevisionsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListApiDeploymentRevisionsResponseFormGroup() {
		return new FormGroup<ListApiDeploymentRevisionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListApiDeployments. */
	export interface ListApiDeploymentsResponse {

		/** The deployments from the specified publisher. */
		apiDeployments?: Array<ApiDeployment>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListApiDeployments. */
	export interface ListApiDeploymentsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListApiDeploymentsResponseFormGroup() {
		return new FormGroup<ListApiDeploymentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListApiSpecRevisionsResponse. */
	export interface ListApiSpecRevisionsResponse {

		/** The revisions of the spec. */
		apiSpecs?: Array<ApiSpec>;

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListApiSpecRevisionsResponse. */
	export interface ListApiSpecRevisionsResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListApiSpecRevisionsResponseFormGroup() {
		return new FormGroup<ListApiSpecRevisionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListApiSpecs. */
	export interface ListApiSpecsResponse {

		/** The specs from the specified publisher. */
		apiSpecs?: Array<ApiSpec>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListApiSpecs. */
	export interface ListApiSpecsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListApiSpecsResponseFormGroup() {
		return new FormGroup<ListApiSpecsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListApiVersions. */
	export interface ListApiVersionsResponse {

		/** The versions from the specified publisher. */
		apiVersions?: Array<ApiVersion>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListApiVersions. */
	export interface ListApiVersionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListApiVersionsResponseFormGroup() {
		return new FormGroup<ListApiVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListApis. */
	export interface ListApisResponse {

		/** The APIs from the specified publisher. */
		apis?: Array<Api>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListApis. */
	export interface ListApisResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListApisResponseFormGroup() {
		return new FormGroup<ListApisResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListArtifacts. */
	export interface ListArtifactsResponse {

		/** The artifacts from the specified publisher. */
		artifacts?: Array<Artifact>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListArtifacts. */
	export interface ListArtifactsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListArtifactsResponseFormGroup() {
		return new FormGroup<ListArtifactsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for RollbackApiDeployment. */
	export interface RollbackApiDeploymentRequest {

		/**
		 * Required. The deployment being rolled back.
		 * Required
		 */
		name: string;

		/**
		 * Required. The revision ID to roll back to. It must be a revision of the same deployment.   Example: c7cfa2a8
		 * Required
		 */
		revisionId: string;
	}

	/** Request message for RollbackApiDeployment. */
	export interface RollbackApiDeploymentRequestFormProperties {

		/**
		 * Required. The deployment being rolled back.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required. The revision ID to roll back to. It must be a revision of the same deployment.   Example: c7cfa2a8
		 * Required
		 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackApiDeploymentRequestFormGroup() {
		return new FormGroup<RollbackApiDeploymentRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request message for RollbackApiSpec. */
	export interface RollbackApiSpecRequest {

		/**
		 * Required. The spec being rolled back.
		 * Required
		 */
		name: string;

		/**
		 * Required. The revision ID to roll back to. It must be a revision of the same spec.   Example: c7cfa2a8
		 * Required
		 */
		revisionId: string;
	}

	/** Request message for RollbackApiSpec. */
	export interface RollbackApiSpecRequestFormProperties {

		/**
		 * Required. The spec being rolled back.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required. The revision ID to roll back to. It must be a revision of the same spec.   Example: c7cfa2a8
		 * Required
		 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateRollbackApiSpecRequestFormGroup() {
		return new FormGroup<RollbackApiSpecRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details.  There is a common set of message types for APIs to use. */
		details?: Array<GoogleProtobufAny>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for TagApiDeploymentRevision. */
	export interface TagApiDeploymentRevisionRequest {

		/**
		 * Required. The name of the deployment to be tagged, including the revision ID.
		 * Required
		 */
		name: string;

		/**
		 * Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.
		 * Required
		 */
		tag: string;
	}

	/** Request message for TagApiDeploymentRevision. */
	export interface TagApiDeploymentRevisionRequestFormProperties {

		/**
		 * Required. The name of the deployment to be tagged, including the revision ID.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateTagApiDeploymentRevisionRequestFormGroup() {
		return new FormGroup<TagApiDeploymentRevisionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request message for TagApiSpecRevision. */
	export interface TagApiSpecRevisionRequest {

		/**
		 * Required. The name of the spec to be tagged, including the revision ID.
		 * Required
		 */
		name: string;

		/**
		 * Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.
		 * Required
		 */
		tag: string;
	}

	/** Request message for TagApiSpecRevision. */
	export interface TagApiSpecRevisionRequestFormProperties {

		/**
		 * Required. The name of the spec to be tagged, including the revision ID.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateTagApiSpecRevisionRequestFormGroup() {
		return new FormGroup<TagApiSpecRevisionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * ListApis returns matching APIs.
		 * Get v1/projects/{project}/locations/{location}/apis
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {number} pageSize The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApis` must match the call that provided the page token.
		 * @param {string} filter An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
		 * @return {ListApisResponse} OK
		 */
		Registry_ListApis(project: string, location: string, pageSize: number | null | undefined, pageToken: string | null | undefined, filter: string | null | undefined): Observable<ListApisResponse> {
			return this.http.get<ListApisResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * CreateApi creates a specified API.
		 * Post v1/projects/{project}/locations/{location}/apis
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} apiId Required. The ID to use for the api, which will become the final component of the api's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.
		 * @return {Api} OK
		 */
		Registry_CreateApi(project: string, location: string, apiId: string | null | undefined, requestBody: Api): Observable<Api> {
			return this.http.post<Api>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis&apiId=' + (apiId == null ? '' : encodeURIComponent(apiId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteApi removes a specified API and all of the resources that it
		 * owns.
		 * Delete v1/projects/{project}/locations/{location}/apis/{api}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {boolean} force If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
		 * @return {void} OK
		 */
		Registry_DeleteApi(project: string, location: string, api: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * GetApi returns a specified API.
		 * Get v1/projects/{project}/locations/{location}/apis/{api}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @return {Api} OK
		 */
		Registry_GetApi(project: string, location: string, api: string): Observable<Api> {
			return this.http.get<Api>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)), {});
		}

		/**
		 * UpdateApi can be used to modify a specified API.
		 * Patch v1/projects/{project}/locations/{location}/apis/{api}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} updateMask The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
		 * @param {boolean} allowMissing If set to true, and the api is not found, a new api_versions will be created. In this situation, `update_mask` is ignored.
		 * @return {Api} OK
		 */
		Registry_UpdateApi(project: string, location: string, api: string, updateMask: string | null | undefined, allowMissing: boolean | null | undefined, requestBody: Api): Observable<Api> {
			return this.http.patch<Api>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&allowMissing=' + allowMissing, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListApiDeployments returns matching deployments.
		 * Get v1/projects/{project}/locations/{location}/apis/{api}/deployments
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {number} pageSize The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListApiDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiDeployments` must match the call that provided the page token.
		 * @param {string} filter An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
		 * @return {ListApiDeploymentsResponse} OK
		 */
		Registry_ListApiDeployments(project: string, location: string, api: string, pageSize: number | null | undefined, pageToken: string | null | undefined, filter: string | null | undefined): Observable<ListApiDeploymentsResponse> {
			return this.http.get<ListApiDeploymentsResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/deployments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * CreateApiDeployment creates a specified deployment.
		 * Post v1/projects/{project}/locations/{location}/apis/{api}/deployments
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} apiDeploymentId Required. The ID to use for the deployment, which will become the final component of the deployment's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.
		 * @return {ApiDeployment} OK
		 */
		Registry_CreateApiDeployment(project: string, location: string, api: string, apiDeploymentId: string | null | undefined, requestBody: ApiDeployment): Observable<ApiDeployment> {
			return this.http.post<ApiDeployment>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/deployments&apiDeploymentId=' + (apiDeploymentId == null ? '' : encodeURIComponent(apiDeploymentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteApiDeployment removes a specified deployment, all revisions, and all
		 * child resources (e.g. artifacts).
		 * Delete v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} deployment The deployment id.
		 * @param {boolean} force If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
		 * @return {void} OK
		 */
		Registry_DeleteApiDeployment(project: string, location: string, api: string, deployment: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * GetApiDeployment returns a specified deployment.
		 * Get v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} deployment The deployment id.
		 * @return {ApiDeployment} OK
		 */
		Registry_GetApiDeployment(project: string, location: string, api: string, deployment: string): Observable<ApiDeployment> {
			return this.http.get<ApiDeployment>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)), {});
		}

		/**
		 * UpdateApiDeployment can be used to modify a specified deployment.
		 * Patch v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} deployment The deployment id.
		 * @param {string} updateMask The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
		 * @param {boolean} allowMissing If set to true, and the deployment is not found, a new deployment will be created. In this situation, `update_mask` is ignored.
		 * @return {ApiDeployment} OK
		 */
		Registry_UpdateApiDeployment(project: string, location: string, api: string, deployment: string, updateMask: string | null | undefined, allowMissing: boolean | null | undefined, requestBody: ApiDeployment): Observable<ApiDeployment> {
			return this.http.patch<ApiDeployment>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&allowMissing=' + allowMissing, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteApiDeploymentRevision deletes a revision of a deployment.
		 * Delete v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:deleteRevision
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} deployment The deployment id.
		 * @return {ApiDeployment} OK
		 */
		Registry_DeleteApiDeploymentRevision(project: string, location: string, api: string, deployment: string): Observable<ApiDeployment> {
			return this.http.delete<ApiDeployment>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + ':deleteRevision', {});
		}

		/**
		 * ListApiDeploymentRevisions lists all revisions of a deployment.
		 * Revisions are returned in descending order of revision creation time.
		 * Get v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:listRevisions
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} deployment The deployment id.
		 * @param {number} pageSize The maximum number of revisions to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token, received from a previous ListApiDeploymentRevisions call. Provide this to retrieve the subsequent page.
		 * @return {ListApiDeploymentRevisionsResponse} OK
		 */
		Registry_ListApiDeploymentRevisions(project: string, location: string, api: string, deployment: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListApiDeploymentRevisionsResponse> {
			return this.http.get<ListApiDeploymentRevisionsResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + ':listRevisions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * RollbackApiDeployment sets the current revision to a specified prior
		 * revision. Note that this creates a new revision with a new revision ID.
		 * Post v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:rollback
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} deployment The deployment id.
		 * @return {ApiDeployment} OK
		 */
		Registry_RollbackApiDeployment(project: string, location: string, api: string, deployment: string, requestBody: RollbackApiDeploymentRequest): Observable<ApiDeployment> {
			return this.http.post<ApiDeployment>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * TagApiDeploymentRevision adds a tag to a specified revision of a
		 * deployment.
		 * Post v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:tagRevision
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} deployment The deployment id.
		 * @return {ApiDeployment} OK
		 */
		Registry_TagApiDeploymentRevision(project: string, location: string, api: string, deployment: string, requestBody: TagApiDeploymentRevisionRequest): Observable<ApiDeployment> {
			return this.http.post<ApiDeployment>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/deployments/' + (deployment == null ? '' : encodeURIComponent(deployment)) + ':tagRevision', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListApiVersions returns matching versions.
		 * Get v1/projects/{project}/locations/{location}/apis/{api}/versions
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {number} pageSize The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListApiVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiVersions` must match the call that provided the page token.
		 * @param {string} filter An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
		 * @return {ListApiVersionsResponse} OK
		 */
		Registry_ListApiVersions(project: string, location: string, api: string, pageSize: number | null | undefined, pageToken: string | null | undefined, filter: string | null | undefined): Observable<ListApiVersionsResponse> {
			return this.http.get<ListApiVersionsResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * CreateApiVersion creates a specified version.
		 * Post v1/projects/{project}/locations/{location}/apis/{api}/versions
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} apiVersionId Required. The ID to use for the version, which will become the final component of the version's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.
		 * @return {ApiVersion} OK
		 */
		Registry_CreateApiVersion(project: string, location: string, api: string, apiVersionId: string | null | undefined, requestBody: ApiVersion): Observable<ApiVersion> {
			return this.http.post<ApiVersion>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions&apiVersionId=' + (apiVersionId == null ? '' : encodeURIComponent(apiVersionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteApiVersion removes a specified version and all of the resources that
		 * it owns.
		 * Delete v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {boolean} force If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
		 * @return {void} OK
		 */
		Registry_DeleteApiVersion(project: string, location: string, api: string, version: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * GetApiVersion returns a specified version.
		 * Get v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @return {ApiVersion} OK
		 */
		Registry_GetApiVersion(project: string, location: string, api: string, version: string): Observable<ApiVersion> {
			return this.http.get<ApiVersion>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * UpdateApiVersion can be used to modify a specified version.
		 * Patch v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} updateMask The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
		 * @param {boolean} allowMissing If set to true, and the version is not found, a new version will be created. In this situation, `update_mask` is ignored.
		 * @return {ApiVersion} OK
		 */
		Registry_UpdateApiVersion(project: string, location: string, api: string, version: string, updateMask: string | null | undefined, allowMissing: boolean | null | undefined, requestBody: ApiVersion): Observable<ApiVersion> {
			return this.http.patch<ApiVersion>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&allowMissing=' + allowMissing, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListApiSpecs returns matching specs.
		 * Get v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {number} pageSize The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListApiSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiSpecs` must match the call that provided the page token.
		 * @param {string} filter An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
		 * @return {ListApiSpecsResponse} OK
		 */
		Registry_ListApiSpecs(project: string, location: string, api: string, version: string, pageSize: number | null | undefined, pageToken: string | null | undefined, filter: string | null | undefined): Observable<ListApiSpecsResponse> {
			return this.http.get<ListApiSpecsResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * CreateApiSpec creates a specified spec.
		 * Post v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} apiSpecId Required. The ID to use for the spec, which will become the final component of the spec's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.
		 * @return {ApiSpec} OK
		 */
		Registry_CreateApiSpec(project: string, location: string, api: string, version: string, apiSpecId: string | null | undefined, requestBody: ApiSpec): Observable<ApiSpec> {
			return this.http.post<ApiSpec>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs&apiSpecId=' + (apiSpecId == null ? '' : encodeURIComponent(apiSpecId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteApiSpec removes a specified spec, all revisions, and all child
		 * resources (e.g. artifacts).
		 * Delete v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} spec The spec id.
		 * @param {boolean} force If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
		 * @return {void} OK
		 */
		Registry_DeleteApiSpec(project: string, location: string, api: string, version: string, spec: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs/' + (spec == null ? '' : encodeURIComponent(spec)) + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * GetApiSpec returns a specified spec.
		 * Get v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} spec The spec id.
		 * @return {ApiSpec} OK
		 */
		Registry_GetApiSpec(project: string, location: string, api: string, version: string, spec: string): Observable<ApiSpec> {
			return this.http.get<ApiSpec>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs/' + (spec == null ? '' : encodeURIComponent(spec)), {});
		}

		/**
		 * UpdateApiSpec can be used to modify a specified spec.
		 * Patch v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} spec The spec id.
		 * @param {string} updateMask The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
		 * @param {boolean} allowMissing If set to true, and the spec is not found, a new spec will be created. In this situation, `update_mask` is ignored.
		 * @return {ApiSpec} OK
		 */
		Registry_UpdateApiSpec(project: string, location: string, api: string, version: string, spec: string, updateMask: string | null | undefined, allowMissing: boolean | null | undefined, requestBody: ApiSpec): Observable<ApiSpec> {
			return this.http.patch<ApiSpec>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs/' + (spec == null ? '' : encodeURIComponent(spec)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&allowMissing=' + allowMissing, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteApiSpecRevision deletes a revision of a spec.
		 * Delete v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:deleteRevision
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} spec The spec id.
		 * @return {ApiSpec} OK
		 */
		Registry_DeleteApiSpecRevision(project: string, location: string, api: string, version: string, spec: string): Observable<ApiSpec> {
			return this.http.delete<ApiSpec>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs/' + (spec == null ? '' : encodeURIComponent(spec)) + ':deleteRevision', {});
		}

		/**
		 * GetApiSpecContents returns the contents of a specified spec.
		 * If specs are stored with GZip compression, the default behavior
		 * is to return the spec uncompressed (the mime_type response field
		 * indicates the exact format returned).
		 * Get v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:getContents
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} spec The spec id.
		 * @return {void} OK
		 */
		Registry_GetApiSpecContents(project: string, location: string, api: string, version: string, spec: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs/' + (spec == null ? '' : encodeURIComponent(spec)) + ':getContents', { observe: 'response', responseType: 'text' });
		}

		/**
		 * ListApiSpecRevisions lists all revisions of a spec.
		 * Revisions are returned in descending order of revision creation time.
		 * Get v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:listRevisions
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} spec The spec id.
		 * @param {number} pageSize The maximum number of revisions to return per page.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page.
		 * @return {ListApiSpecRevisionsResponse} OK
		 */
		Registry_ListApiSpecRevisions(project: string, location: string, api: string, version: string, spec: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListApiSpecRevisionsResponse> {
			return this.http.get<ListApiSpecRevisionsResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs/' + (spec == null ? '' : encodeURIComponent(spec)) + ':listRevisions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * RollbackApiSpec sets the current revision to a specified prior revision.
		 * Note that this creates a new revision with a new revision ID.
		 * Post v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:rollback
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} spec The spec id.
		 * @return {ApiSpec} OK
		 */
		Registry_RollbackApiSpec(project: string, location: string, api: string, version: string, spec: string, requestBody: RollbackApiSpecRequest): Observable<ApiSpec> {
			return this.http.post<ApiSpec>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs/' + (spec == null ? '' : encodeURIComponent(spec)) + ':rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * TagApiSpecRevision adds a tag to a specified revision of a spec.
		 * Post v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:tagRevision
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} api The api id.
		 * @param {string} version The version id.
		 * @param {string} spec The spec id.
		 * @return {ApiSpec} OK
		 */
		Registry_TagApiSpecRevision(project: string, location: string, api: string, version: string, spec: string, requestBody: TagApiSpecRevisionRequest): Observable<ApiSpec> {
			return this.http.post<ApiSpec>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/apis/' + (api == null ? '' : encodeURIComponent(api)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)) + '/specs/' + (spec == null ? '' : encodeURIComponent(spec)) + ':tagRevision', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListArtifacts returns matching artifacts.
		 * Get v1/projects/{project}/locations/{location}/artifacts
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {number} pageSize The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
		 * @param {string} filter An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
		 * @return {ListArtifactsResponse} OK
		 */
		Registry_ListArtifacts(project: string, location: string, pageSize: number | null | undefined, pageToken: string | null | undefined, filter: string | null | undefined): Observable<ListArtifactsResponse> {
			return this.http.get<ListArtifactsResponse>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/artifacts&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * CreateArtifact creates a specified artifact.
		 * Post v1/projects/{project}/locations/{location}/artifacts
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} artifactId Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.
		 * @return {Artifact} OK
		 */
		Registry_CreateArtifact(project: string, location: string, artifactId: string | null | undefined, requestBody: Artifact): Observable<Artifact> {
			return this.http.post<Artifact>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/artifacts&artifactId=' + (artifactId == null ? '' : encodeURIComponent(artifactId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DeleteArtifact removes a specified artifact.
		 * Delete v1/projects/{project}/locations/{location}/artifacts/{artifact}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} artifact The artifact id.
		 * @return {void} OK
		 */
		Registry_DeleteArtifact(project: string, location: string, artifact: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/artifacts/' + (artifact == null ? '' : encodeURIComponent(artifact)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * GetArtifact returns a specified artifact.
		 * Get v1/projects/{project}/locations/{location}/artifacts/{artifact}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} artifact The artifact id.
		 * @return {Artifact} OK
		 */
		Registry_GetArtifact(project: string, location: string, artifact: string): Observable<Artifact> {
			return this.http.get<Artifact>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/artifacts/' + (artifact == null ? '' : encodeURIComponent(artifact)), {});
		}

		/**
		 * ReplaceArtifact can be used to replace a specified artifact.
		 * Put v1/projects/{project}/locations/{location}/artifacts/{artifact}
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} artifact The artifact id.
		 * @return {Artifact} OK
		 */
		Registry_ReplaceArtifact(project: string, location: string, artifact: string, requestBody: Artifact): Observable<Artifact> {
			return this.http.put<Artifact>(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/artifacts/' + (artifact == null ? '' : encodeURIComponent(artifact)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * GetArtifactContents returns the contents of a specified artifact.
		 * If artifacts are stored with GZip compression, the default behavior
		 * is to return the artifact uncompressed (the mime_type response field
		 * indicates the exact format returned).
		 * Get v1/projects/{project}/locations/{location}/artifacts/{artifact}:getContents
		 * @param {string} project The project id.
		 * @param {string} location The location id.
		 * @param {string} artifact The artifact id.
		 * @return {void} OK
		 */
		Registry_GetArtifactContents(project: string, location: string, artifact: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (project == null ? '' : encodeURIComponent(project)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/artifacts/' + (artifact == null ? '' : encodeURIComponent(artifact)) + ':getContents', { observe: 'response', responseType: 'text' });
		}
	}

}

