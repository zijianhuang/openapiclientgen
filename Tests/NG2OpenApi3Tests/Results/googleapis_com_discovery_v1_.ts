import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DirectoryList {

		/** Indicate the version of the Discovery API used to generate this doc. */
		discoveryVersion?: string | null;

		/** The individual directory entries. One entry per api/version pair. */
		DirectoryListItems?: Array<DirectoryListItems>;

		/** The kind for this response. */
		kind?: string | null;
	}
	export interface DirectoryListFormProperties {

		/** Indicate the version of the Discovery API used to generate this doc. */
		discoveryVersion: FormControl<string | null | undefined>,

		/** The kind for this response. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryListFormGroup() {
		return new FormGroup<DirectoryListFormProperties>({
			discoveryVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DirectoryListItems {

		/** The description of this API. */
		description?: string | null;

		/** A link to the discovery document. */
		discoveryLink?: string | null;

		/** The URL for the discovery REST document. */
		discoveryRestUrl?: string | null;

		/** A link to human readable documentation for the API. */
		documentationLink?: string | null;

		/** Links to 16x16 and 32x32 icons representing the API. */
		icons?: DirectoryListItemsIcons;

		/** The id of this API. */
		id?: string | null;

		/** The kind for this response. */
		kind?: string | null;

		/** Labels for the status of this API, such as labs or deprecated. */
		labels?: Array<string>;

		/** The name of the API. */
		name?: string | null;

		/** True if this version is the preferred version to use. */
		preferred?: boolean | null;

		/** The title of this API. */
		title?: string | null;

		/** The version of the API. */
		version?: string | null;
	}
	export interface DirectoryListItemsFormProperties {

		/** The description of this API. */
		description: FormControl<string | null | undefined>,

		/** A link to the discovery document. */
		discoveryLink: FormControl<string | null | undefined>,

		/** The URL for the discovery REST document. */
		discoveryRestUrl: FormControl<string | null | undefined>,

		/** A link to human readable documentation for the API. */
		documentationLink: FormControl<string | null | undefined>,

		/** The id of this API. */
		id: FormControl<string | null | undefined>,

		/** The kind for this response. */
		kind: FormControl<string | null | undefined>,

		/** The name of the API. */
		name: FormControl<string | null | undefined>,

		/** True if this version is the preferred version to use. */
		preferred: FormControl<boolean | null | undefined>,

		/** The title of this API. */
		title: FormControl<string | null | undefined>,

		/** The version of the API. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryListItemsFormGroup() {
		return new FormGroup<DirectoryListItemsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			discoveryLink: new FormControl<string | null | undefined>(undefined),
			discoveryRestUrl: new FormControl<string | null | undefined>(undefined),
			documentationLink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			preferred: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DirectoryListItemsIcons {

		/** The URL of the 16x16 icon. */
		x16?: string | null;

		/** The URL of the 32x32 icon. */
		x32?: string | null;
	}
	export interface DirectoryListItemsIconsFormProperties {

		/** The URL of the 16x16 icon. */
		x16: FormControl<string | null | undefined>,

		/** The URL of the 32x32 icon. */
		x32: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryListItemsIconsFormGroup() {
		return new FormGroup<DirectoryListItemsIconsFormProperties>({
			x16: new FormControl<string | null | undefined>(undefined),
			x32: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JsonSchema {

		/** A reference to another schema. The value of this property is the "id" of another schema. */
		'$ref'?: string | null;
		additionalProperties?: JsonSchema;

		/** Additional information about this property. */
		annotations?: JsonSchemaAnnotations;

		/** Whether the parameter is deprecated. */
		deprecated?: boolean | null;

		/** A description of this object. */
		description?: string | null;

		/** Values this parameter may take (if it is an enum). */
		enum?: Array<string>;

		/** The deprecation status for the enums. Each position maps to the corresponding value in the "enum" array. */
		enumDeprecated?: Array<boolean>;

		/** The descriptions for the enums. Each position maps to the corresponding value in the "enum" array. */
		enumDescriptions?: Array<string>;

		/** An additional regular expression or key that helps constrain the value. For more details see: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.23 */
		format?: string | null;

		/** Unique identifier for this schema. */
		id?: string | null;
		items?: JsonSchema;

		/** Whether this parameter goes in the query or the path for REST requests. */
		location?: string | null;

		/** The maximum value of this parameter. */
		maximum?: string | null;

		/** The minimum value of this parameter. */
		minimum?: string | null;

		/** The regular expression this parameter must conform to. Uses Java 6 regex format: http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html */
		pattern?: string | null;

		/** If this is a schema for an object, list the schema for each property of this object. */
		properties?: {[id: string]: JsonSchema };

		/** The value is read-only, generated by the service. The value cannot be modified by the client. If the value is included in a POST, PUT, or PATCH request, it is ignored by the service. */
		readOnly?: boolean | null;

		/** Whether this parameter may appear multiple times. */
		repeated?: boolean | null;

		/** Whether the parameter is required. */
		required?: boolean | null;

		/** The value type for this schema. A list of values can be found here: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1 */
		type?: string | null;

		/** In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names. */
		variant?: JsonSchemaVariant;
	}
	export interface JsonSchemaFormProperties {

		/** A reference to another schema. The value of this property is the "id" of another schema. */
		'$ref': FormControl<string | null | undefined>,

		/** Whether the parameter is deprecated. */
		deprecated: FormControl<boolean | null | undefined>,

		/** A description of this object. */
		description: FormControl<string | null | undefined>,

		/** An additional regular expression or key that helps constrain the value. For more details see: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.23 */
		format: FormControl<string | null | undefined>,

		/** Unique identifier for this schema. */
		id: FormControl<string | null | undefined>,

		/** Whether this parameter goes in the query or the path for REST requests. */
		location: FormControl<string | null | undefined>,

		/** The maximum value of this parameter. */
		maximum: FormControl<string | null | undefined>,

		/** The minimum value of this parameter. */
		minimum: FormControl<string | null | undefined>,

		/** The regular expression this parameter must conform to. Uses Java 6 regex format: http://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html */
		pattern: FormControl<string | null | undefined>,

		/** If this is a schema for an object, list the schema for each property of this object. */
		properties: FormControl<{[id: string]: JsonSchema } | null | undefined>,

		/** The value is read-only, generated by the service. The value cannot be modified by the client. If the value is included in a POST, PUT, or PATCH request, it is ignored by the service. */
		readOnly: FormControl<boolean | null | undefined>,

		/** Whether this parameter may appear multiple times. */
		repeated: FormControl<boolean | null | undefined>,

		/** Whether the parameter is required. */
		required: FormControl<boolean | null | undefined>,

		/** The value type for this schema. A list of values can be found here: http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.1 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateJsonSchemaFormGroup() {
		return new FormGroup<JsonSchemaFormProperties>({
			'$ref': new FormControl<string | null | undefined>(undefined),
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			maximum: new FormControl<string | null | undefined>(undefined),
			minimum: new FormControl<string | null | undefined>(undefined),
			pattern: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: JsonSchema } | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			repeated: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JsonSchemaAnnotations {

		/** A list of methods for which this property is required on requests. */
		required?: Array<string>;
	}
	export interface JsonSchemaAnnotationsFormProperties {
	}
	export function CreateJsonSchemaAnnotationsFormGroup() {
		return new FormGroup<JsonSchemaAnnotationsFormProperties>({
		});

	}

	export interface JsonSchemaVariant {

		/** The name of the type discriminant property. */
		discriminant?: string | null;

		/** The map of discriminant value to schema to use for parsing.. */
		JsonSchemaVariantMap?: Array<JsonSchemaVariantMap>;
	}
	export interface JsonSchemaVariantFormProperties {

		/** The name of the type discriminant property. */
		discriminant: FormControl<string | null | undefined>,
	}
	export function CreateJsonSchemaVariantFormGroup() {
		return new FormGroup<JsonSchemaVariantFormProperties>({
			discriminant: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JsonSchemaVariantMap {
		'$ref'?: string | null;
		type_value?: string | null;
	}
	export interface JsonSchemaVariantMapFormProperties {
		'$ref': FormControl<string | null | undefined>,
		type_value: FormControl<string | null | undefined>,
	}
	export function CreateJsonSchemaVariantMapFormGroup() {
		return new FormGroup<JsonSchemaVariantMapFormProperties>({
			'$ref': new FormControl<string | null | undefined>(undefined),
			type_value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestDescription {

		/** Authentication information. */
		auth?: RestDescriptionAuth;

		/** [DEPRECATED] The base path for REST requests. */
		basePath?: string | null;

		/** [DEPRECATED] The base URL for REST requests. */
		baseUrl?: string | null;

		/** The path for REST batch requests. */
		batchPath?: string | null;

		/** Indicates how the API name should be capitalized and split into various parts. Useful for generating pretty class names. */
		canonicalName?: string | null;

		/** The description of this API. */
		description?: string | null;

		/** Indicate the version of the Discovery API used to generate this doc. */
		discoveryVersion?: string | null;

		/** A link to human readable documentation for the API. */
		documentationLink?: string | null;

		/** A list of location-based endpoint objects for this API. Each object contains the endpoint URL, location, description and deprecation status. */
		RestDescriptionEndpoints?: Array<RestDescriptionEndpoints>;

		/** The ETag for this response. */
		etag?: string | null;

		/** Enable exponential backoff for suitable methods in the generated clients. */
		exponentialBackoffDefault?: boolean | null;

		/** A list of supported features for this API. */
		features?: Array<string>;

		/** Links to 16x16 and 32x32 icons representing the API. */
		icons?: RestDescriptionIcons;

		/** The ID of this API. */
		id?: string | null;

		/** The kind for this response. */
		kind?: string | null;

		/** Labels for the status of this API, such as labs or deprecated. */
		labels?: Array<string>;

		/** API-level methods for this API. */
		methods?: {[id: string]: RestMethod };

		/** The name of this API. */
		name?: string | null;

		/** The domain of the owner of this API. Together with the ownerName and a packagePath values, this can be used to generate a library for this API which would have a unique fully qualified name. */
		ownerDomain?: string | null;

		/** The name of the owner of this API. See ownerDomain. */
		ownerName?: string | null;

		/** The package of the owner of this API. See ownerDomain. */
		packagePath?: string | null;

		/** Common parameters that apply across all apis. */
		parameters?: {[id: string]: JsonSchema };

		/** The protocol described by this document. */
		protocol?: string | null;

		/** The resources in this API. */
		resources?: {[id: string]: RestResource };

		/** The version of this API. */
		revision?: string | null;

		/** The root URL under which all API services live. */
		rootUrl?: string | null;

		/** The schemas for this API. */
		schemas?: {[id: string]: JsonSchema };

		/** The base path for all REST requests. */
		servicePath?: string | null;

		/** The title of this API. */
		title?: string | null;

		/** The version of this API. */
		version?: string | null;
		version_module?: boolean | null;
	}
	export interface RestDescriptionFormProperties {

		/** [DEPRECATED] The base path for REST requests. */
		basePath: FormControl<string | null | undefined>,

		/** [DEPRECATED] The base URL for REST requests. */
		baseUrl: FormControl<string | null | undefined>,

		/** The path for REST batch requests. */
		batchPath: FormControl<string | null | undefined>,

		/** Indicates how the API name should be capitalized and split into various parts. Useful for generating pretty class names. */
		canonicalName: FormControl<string | null | undefined>,

		/** The description of this API. */
		description: FormControl<string | null | undefined>,

		/** Indicate the version of the Discovery API used to generate this doc. */
		discoveryVersion: FormControl<string | null | undefined>,

		/** A link to human readable documentation for the API. */
		documentationLink: FormControl<string | null | undefined>,

		/** The ETag for this response. */
		etag: FormControl<string | null | undefined>,

		/** Enable exponential backoff for suitable methods in the generated clients. */
		exponentialBackoffDefault: FormControl<boolean | null | undefined>,

		/** The ID of this API. */
		id: FormControl<string | null | undefined>,

		/** The kind for this response. */
		kind: FormControl<string | null | undefined>,

		/** API-level methods for this API. */
		methods: FormControl<{[id: string]: RestMethod } | null | undefined>,

		/** The name of this API. */
		name: FormControl<string | null | undefined>,

		/** The domain of the owner of this API. Together with the ownerName and a packagePath values, this can be used to generate a library for this API which would have a unique fully qualified name. */
		ownerDomain: FormControl<string | null | undefined>,

		/** The name of the owner of this API. See ownerDomain. */
		ownerName: FormControl<string | null | undefined>,

		/** The package of the owner of this API. See ownerDomain. */
		packagePath: FormControl<string | null | undefined>,

		/** Common parameters that apply across all apis. */
		parameters: FormControl<{[id: string]: JsonSchema } | null | undefined>,

		/** The protocol described by this document. */
		protocol: FormControl<string | null | undefined>,

		/** The resources in this API. */
		resources: FormControl<{[id: string]: RestResource } | null | undefined>,

		/** The version of this API. */
		revision: FormControl<string | null | undefined>,

		/** The root URL under which all API services live. */
		rootUrl: FormControl<string | null | undefined>,

		/** The schemas for this API. */
		schemas: FormControl<{[id: string]: JsonSchema } | null | undefined>,

		/** The base path for all REST requests. */
		servicePath: FormControl<string | null | undefined>,

		/** The title of this API. */
		title: FormControl<string | null | undefined>,

		/** The version of this API. */
		version: FormControl<string | null | undefined>,
		version_module: FormControl<boolean | null | undefined>,
	}
	export function CreateRestDescriptionFormGroup() {
		return new FormGroup<RestDescriptionFormProperties>({
			basePath: new FormControl<string | null | undefined>(undefined),
			baseUrl: new FormControl<string | null | undefined>(undefined),
			batchPath: new FormControl<string | null | undefined>(undefined),
			canonicalName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discoveryVersion: new FormControl<string | null | undefined>(undefined),
			documentationLink: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			exponentialBackoffDefault: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			methods: new FormControl<{[id: string]: RestMethod } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownerDomain: new FormControl<string | null | undefined>(undefined),
			ownerName: new FormControl<string | null | undefined>(undefined),
			packagePath: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: JsonSchema } | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			resources: new FormControl<{[id: string]: RestResource } | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			rootUrl: new FormControl<string | null | undefined>(undefined),
			schemas: new FormControl<{[id: string]: JsonSchema } | null | undefined>(undefined),
			servicePath: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			version_module: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RestDescriptionAuth {

		/** OAuth 2.0 authentication information. */
		oauth2?: RestDescriptionAuthOauth2;
	}
	export interface RestDescriptionAuthFormProperties {
	}
	export function CreateRestDescriptionAuthFormGroup() {
		return new FormGroup<RestDescriptionAuthFormProperties>({
		});

	}

	export interface RestDescriptionAuthOauth2 {

		/** Available OAuth 2.0 scopes. */
		scopes?: {[id: string]: RestDescriptionAuthOauth2Scopes };
	}
	export interface RestDescriptionAuthOauth2FormProperties {

		/** Available OAuth 2.0 scopes. */
		scopes: FormControl<{[id: string]: RestDescriptionAuthOauth2Scopes } | null | undefined>,
	}
	export function CreateRestDescriptionAuthOauth2FormGroup() {
		return new FormGroup<RestDescriptionAuthOauth2FormProperties>({
			scopes: new FormControl<{[id: string]: RestDescriptionAuthOauth2Scopes } | null | undefined>(undefined),
		});

	}

	export interface RestDescriptionAuthOauth2Scopes {

		/** Description of scope. */
		description?: string | null;
	}
	export interface RestDescriptionAuthOauth2ScopesFormProperties {

		/** Description of scope. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateRestDescriptionAuthOauth2ScopesFormGroup() {
		return new FormGroup<RestDescriptionAuthOauth2ScopesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestDescriptionEndpoints {

		/** Whether this endpoint is deprecated */
		deprecated?: boolean | null;

		/** A string describing the host designated by the URL */
		description?: string | null;

		/** The URL of the endpoint target host */
		endpointUrl?: string | null;

		/** The location of the endpoint */
		location?: string | null;
	}
	export interface RestDescriptionEndpointsFormProperties {

		/** Whether this endpoint is deprecated */
		deprecated: FormControl<boolean | null | undefined>,

		/** A string describing the host designated by the URL */
		description: FormControl<string | null | undefined>,

		/** The URL of the endpoint target host */
		endpointUrl: FormControl<string | null | undefined>,

		/** The location of the endpoint */
		location: FormControl<string | null | undefined>,
	}
	export function CreateRestDescriptionEndpointsFormGroup() {
		return new FormGroup<RestDescriptionEndpointsFormProperties>({
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpointUrl: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestDescriptionIcons {

		/** The URL of the 16x16 icon. */
		x16?: string | null;

		/** The URL of the 32x32 icon. */
		x32?: string | null;
	}
	export interface RestDescriptionIconsFormProperties {

		/** The URL of the 16x16 icon. */
		x16: FormControl<string | null | undefined>,

		/** The URL of the 32x32 icon. */
		x32: FormControl<string | null | undefined>,
	}
	export function CreateRestDescriptionIconsFormGroup() {
		return new FormGroup<RestDescriptionIconsFormProperties>({
			x16: new FormControl<string | null | undefined>(undefined),
			x32: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestMethod {

		/** Whether this method is deprecated. */
		deprecated?: boolean | null;

		/** Description of this method. */
		description?: string | null;

		/** Whether this method requires an ETag to be specified. The ETag is sent as an HTTP If-Match or If-None-Match header. */
		etagRequired?: boolean | null;

		/** The URI path of this REST method in (RFC 6570) format without level 2 features ({+var}). Supplementary to the path property. */
		flatPath?: string | null;

		/** HTTP method used by this method. */
		httpMethod?: string | null;

		/** A unique ID for this method. This property can be used to match methods between different versions of Discovery. */
		id?: string | null;

		/** Media upload parameters. */
		mediaUpload?: RestMethodMediaUpload;

		/** Ordered list of required parameters, serves as a hint to clients on how to structure their method signatures. The array is ordered such that the "most-significant" parameter appears first. */
		parameterOrder?: Array<string>;

		/** Details for all parameters in this method. */
		parameters?: {[id: string]: JsonSchema };

		/** The URI path of this REST method. Should be used in conjunction with the basePath property at the api-level. */
		path?: string | null;

		/** The schema for the request. */
		request?: RestMethodRequest;

		/** The schema for the response. */
		response?: RestMethodResponse;

		/** OAuth 2.0 scopes applicable to this method. */
		scopes?: Array<string>;

		/** Whether this method supports media downloads. */
		supportsMediaDownload?: boolean | null;

		/** Whether this method supports media uploads. */
		supportsMediaUpload?: boolean | null;

		/** Whether this method supports subscriptions. */
		supportsSubscription?: boolean | null;

		/** Indicates that downloads from this method should use the download service URL (i.e. "/download"). Only applies if the method supports media download. */
		useMediaDownloadService?: boolean | null;
	}
	export interface RestMethodFormProperties {

		/** Whether this method is deprecated. */
		deprecated: FormControl<boolean | null | undefined>,

		/** Description of this method. */
		description: FormControl<string | null | undefined>,

		/** Whether this method requires an ETag to be specified. The ETag is sent as an HTTP If-Match or If-None-Match header. */
		etagRequired: FormControl<boolean | null | undefined>,

		/** The URI path of this REST method in (RFC 6570) format without level 2 features ({+var}). Supplementary to the path property. */
		flatPath: FormControl<string | null | undefined>,

		/** HTTP method used by this method. */
		httpMethod: FormControl<string | null | undefined>,

		/** A unique ID for this method. This property can be used to match methods between different versions of Discovery. */
		id: FormControl<string | null | undefined>,

		/** Details for all parameters in this method. */
		parameters: FormControl<{[id: string]: JsonSchema } | null | undefined>,

		/** The URI path of this REST method. Should be used in conjunction with the basePath property at the api-level. */
		path: FormControl<string | null | undefined>,

		/** Whether this method supports media downloads. */
		supportsMediaDownload: FormControl<boolean | null | undefined>,

		/** Whether this method supports media uploads. */
		supportsMediaUpload: FormControl<boolean | null | undefined>,

		/** Whether this method supports subscriptions. */
		supportsSubscription: FormControl<boolean | null | undefined>,

		/** Indicates that downloads from this method should use the download service URL (i.e. "/download"). Only applies if the method supports media download. */
		useMediaDownloadService: FormControl<boolean | null | undefined>,
	}
	export function CreateRestMethodFormGroup() {
		return new FormGroup<RestMethodFormProperties>({
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etagRequired: new FormControl<boolean | null | undefined>(undefined),
			flatPath: new FormControl<string | null | undefined>(undefined),
			httpMethod: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: JsonSchema } | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			supportsMediaDownload: new FormControl<boolean | null | undefined>(undefined),
			supportsMediaUpload: new FormControl<boolean | null | undefined>(undefined),
			supportsSubscription: new FormControl<boolean | null | undefined>(undefined),
			useMediaDownloadService: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RestMethodMediaUpload {

		/** MIME Media Ranges for acceptable media uploads to this method. */
		accept?: Array<string>;

		/** Maximum size of a media upload, such as "1MB", "2GB" or "3TB". */
		maxSize?: string | null;

		/** Supported upload protocols. */
		protocols?: RestMethodMediaUploadProtocols;
	}
	export interface RestMethodMediaUploadFormProperties {

		/** Maximum size of a media upload, such as "1MB", "2GB" or "3TB". */
		maxSize: FormControl<string | null | undefined>,
	}
	export function CreateRestMethodMediaUploadFormGroup() {
		return new FormGroup<RestMethodMediaUploadFormProperties>({
			maxSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestMethodMediaUploadProtocols {

		/** Supports the Resumable Media Upload protocol. */
		resumable?: RestMethodMediaUploadProtocolsResumable;

		/** Supports uploading as a single HTTP request. */
		simple?: RestMethodMediaUploadProtocolsSimple;
	}
	export interface RestMethodMediaUploadProtocolsFormProperties {
	}
	export function CreateRestMethodMediaUploadProtocolsFormGroup() {
		return new FormGroup<RestMethodMediaUploadProtocolsFormProperties>({
		});

	}

	export interface RestMethodMediaUploadProtocolsResumable {

		/** True if this endpoint supports uploading multipart media. */
		multipart?: boolean | null;

		/** The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level. */
		path?: string | null;
	}
	export interface RestMethodMediaUploadProtocolsResumableFormProperties {

		/** True if this endpoint supports uploading multipart media. */
		multipart: FormControl<boolean | null | undefined>,

		/** The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateRestMethodMediaUploadProtocolsResumableFormGroup() {
		return new FormGroup<RestMethodMediaUploadProtocolsResumableFormProperties>({
			multipart: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestMethodMediaUploadProtocolsSimple {

		/** True if this endpoint supports upload multipart media. */
		multipart?: boolean | null;

		/** The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level. */
		path?: string | null;
	}
	export interface RestMethodMediaUploadProtocolsSimpleFormProperties {

		/** True if this endpoint supports upload multipart media. */
		multipart: FormControl<boolean | null | undefined>,

		/** The URI path to be used for upload. Should be used in conjunction with the basePath property at the api-level. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateRestMethodMediaUploadProtocolsSimpleFormGroup() {
		return new FormGroup<RestMethodMediaUploadProtocolsSimpleFormProperties>({
			multipart: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestMethodRequest {

		/** Schema ID for the request schema. */
		'$ref'?: string | null;

		/** parameter name. */
		parameterName?: string | null;
	}
	export interface RestMethodRequestFormProperties {

		/** Schema ID for the request schema. */
		'$ref': FormControl<string | null | undefined>,

		/** parameter name. */
		parameterName: FormControl<string | null | undefined>,
	}
	export function CreateRestMethodRequestFormGroup() {
		return new FormGroup<RestMethodRequestFormProperties>({
			'$ref': new FormControl<string | null | undefined>(undefined),
			parameterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestMethodResponse {

		/** Schema ID for the response schema. */
		'$ref'?: string | null;
	}
	export interface RestMethodResponseFormProperties {

		/** Schema ID for the response schema. */
		'$ref': FormControl<string | null | undefined>,
	}
	export function CreateRestMethodResponseFormGroup() {
		return new FormGroup<RestMethodResponseFormProperties>({
			'$ref': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestResource {

		/** Whether this resource is deprecated. */
		deprecated?: boolean | null;

		/** Methods on this resource. */
		methods?: {[id: string]: RestMethod };

		/** Sub-resources on this resource. */
		resources?: {[id: string]: RestResource };
	}
	export interface RestResourceFormProperties {

		/** Whether this resource is deprecated. */
		deprecated: FormControl<boolean | null | undefined>,

		/** Methods on this resource. */
		methods: FormControl<{[id: string]: RestMethod } | null | undefined>,

		/** Sub-resources on this resource. */
		resources: FormControl<{[id: string]: RestResource } | null | undefined>,
	}
	export function CreateRestResourceFormGroup() {
		return new FormGroup<RestResourceFormProperties>({
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			methods: new FormControl<{[id: string]: RestMethod } | null | undefined>(undefined),
			resources: new FormControl<{[id: string]: RestResource } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve the list of APIs supported at this endpoint.
		 * Get apis
		 * @param {string} name Only include APIs with the given name.
		 * @param {boolean} preferred Return only the preferred version of an API.
		 * @return {DirectoryList} Successful response
		 */
		Discovery_apis_list(name: string | null | undefined, preferred: boolean | null | undefined): Observable<DirectoryList> {
			return this.http.get<DirectoryList>(this.baseUri + 'apis?name=' + (name == null ? '' : encodeURIComponent(name)) + '&preferred=' + preferred, {});
		}

		/**
		 * Retrieve the description of a particular version of an api.
		 * Get apis/{api}/{version}/rest
		 * @param {string} api The name of the API.
		 * @param {string} version The version of the API.
		 * @return {RestDescription} Successful response
		 */
		Discovery_apis_getRest(api: string, version: string): Observable<RestDescription> {
			return this.http.get<RestDescription>(this.baseUri + 'apis/' + (api == null ? '' : encodeURIComponent(api)) + '/' + (version == null ? '' : encodeURIComponent(version)) + '/rest', {});
		}
	}

}

